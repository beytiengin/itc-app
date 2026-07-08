// app/lib/batarya-kaydet.js — Modül I · ITC Actor Assessment Battery kayıt + puanlama
// Karar 64 (v1) → Karar 64a (batarya v0.5). Tablolar: batarya_sonuclari + batarya_onam
// (supabase-migrations/karar64-batarya.sql + karar64-batarya-v2-slugs.sql).
//
// İLKELER (Karar 64 §7):
//   - `yanitlar` HAM + verbatim = KAYNAK. Ters kodlama yanıtlara asla uygulanmaz.
//   - `skorlar` = türetilmiş katman — hamdan HER ZAMAN yeniden hesaplanabilir;
//     burada saf fonksiyonlar olarak tutulur ki v0.x→v0.y geçişinde re-scoring
//     mümkün olsun.
//   - Append-only: her tamamlama yeni satır (insert); update/delete yok.
//
// KALICI SLUG YASASI (v0.5 renumberingRecord):
//   DB modul anahtarları görünüm sırasından bağımsız SLUG'lardır. v1 legacy
//   anahtarlar DB'de YENİDEN ADLANDIRILMAZ — okuma katmanında eşlenir:
//     m1_aps → aps · m2_access → access · m3_emotional → emotional
//     m4_formA → flow_formA · m4_formB → flow_formB
//   Yeni yazımlar yalnız yeni slug'larla yapılır.
//
// PUANLANMAYAN katmanlar (yalnız ham saklanır — kaynak kuralları verbatim):
//   - Emotional Part 4 (Emotion Comfort Inventory) — "not scored into your
//     performance profile"
//   - Access Part 3 (sıralama görevleri) — nitel örüntü
//   - Entry & Exit Part 3-4-5 — puanlanmaz; TOPLU "iyilik skoru" ASLA üretilmez
//     (App Safety Rules: "no aggregate wellbeing score, ever")

import { supabase } from './supabase';
import { batarya } from '../../data/kalibrasyon/batarya';

/* ─── Modül erişimi (slug tabanlı) ────────────────────────────────────────── */

export function modulBul(slug) {
  return batarya.moduller.find((m) => m.slug === slug) ?? null;
}

// Legacy v1 anahtarları → v0.5 slug eşlemesi (yalnız OKUMA yönünde).
export const LEGACY_ESLEME = {
  m1_aps: 'aps',
  m2_access: 'access',
  m3_emotional: 'emotional',
  m4_formA: 'flow_formA',
  m4_formB: 'flow_formB',
};

// Enstrüman sürümleri — veri dosyasından türetilir (senkron kalır).
// DB'de tekil-anlamlı olsun diye slug öneklenir; "(consolidated)" gibi ekler atılır.
const surumEtiketi = (slug, surum) => slug + '_' + String(surum).split(' ')[0];
export const SURUMLER = {
  onam: 'consent_' + batarya.meta.surum, // batarya v0.5 onam metni
  intake: surumEtiketi('intake', batarya.intake.surum),
  ...Object.fromEntries(batarya.moduller.map((m) => [m.slug, surumEtiketi(m.slug, m.surum)])),
  // flow tek modül, iki yazım anahtarı (dispositional Form A / repeatable Form B)
  flow_formA: surumEtiketi('flow_formA', modulBul('flow').surum),
  flow_formB: surumEtiketi('flow_formB', modulBul('flow').surum),
};
delete SURUMLER.flow;

async function uid() {
  const { data } = await supabase.auth.getUser();
  return data?.user?.id ?? null;
}

/* ─── Puanlama yardımcıları (saf) ─────────────────────────────────────────── */

// Ters madde kodlaması: 6 − ham (adminNote/teamNotes kuralı). null = atlanmış.
const kodla = (madde, ham) => (ham == null ? null : madde.ters ? 6 - ham : ham);

function ortalama(degerler) {
  const dolu = degerler.filter((v) => v != null);
  if (!dolu.length) return null;
  return Math.round((dolu.reduce((a, b) => a + b, 0) / dolu.length) * 100) / 100;
}

// Bir madde listesi + ham yanıt haritasından {ortalama, cevaplanan, toplamMadde}.
function grupSkoru(maddeler, yanitlar) {
  const kodlu = maddeler.map((m) => kodla(m, yanitlar[m.no] ?? null));
  return {
    ortalama: ortalama(kodlu),
    cevaplanan: kodlu.filter((v) => v != null).length,
    toplamMadde: maddeler.length,
  };
}

// Faset listesi ({ad, maddeler[]}) → {fasetAdi: grupSkoru}.
function fasetSkorlari(fasetler, yanitlar) {
  const sonuc = {};
  for (const f of fasetler) sonuc[f.ad] = grupSkoru(f.maddeler, yanitlar);
  return sonuc;
}

/* ─── Modül puanlayıcıları (ham yanıtlardan türetim) ──────────────────────── */

// Type Lens — 44 zorunlu-seçim, yanitlar = {no: 'a'|'b'}.
// scoringNotes (verbatim özet): eksen başına çoğunluk harfi + MARJ (saklanır,
// oyuncuya ASLA gösterilmez); çıktı = 4 harfli HİPOTEZ + EN YAKIN KOMŞU
// (en dar marjlı ekseni çevir). "Hipotez, sınıflandırma değil." Tek sefer alınır.
export function typeLensSkorla(yanitlar) {
  const tl = modulBul('type_lens');
  const eksenler = [];
  for (const e of tl.eksenler) {
    let a = 0, b = 0;
    for (const m of e.maddeler) {
      const y = yanitlar[m.no];
      if (y === 'a') a += 1;
      else if (y === 'b') b += 1;
    }
    const harf = a === b ? null : a > b ? e.harfler.a : e.harfler.b; // 11 tek — tam yanıtla eşitlik olmaz
    eksenler.push({
      eksen: e.harfler.a + '/' + e.harfler.b,
      harf,
      marj: Math.abs(a - b), // İÇ VERİ — oyuncu-yüzünde gösterilmez (Karar 31)
      cevaplanan: a + b,
    });
  }
  const hipotez = eksenler.map((e) => e.harf ?? '?').join('');
  // En yakın komşu: en dar marjlı ekseni çevir.
  let darIdx = 0;
  eksenler.forEach((e, i) => { if (e.marj < eksenler[darIdx].marj) darIdx = i; });
  const tlMod = modulBul('type_lens');
  const komsu = eksenler
    .map((e, i) => {
      if (i !== darIdx) return e.harf ?? '?';
      const h = tlMod.eksenler[i].harfler;
      return e.harf === h.a ? h.b : e.harf === h.b ? h.a : '?';
    })
    .join('');
  return { eksenler, hipotez, komsu };
}

// APS — 9 alan ortalaması (ters maddeler kodlanır). Tek toplam skor YOK — profil.
export function apsSkorla(yanitlar) {
  const alanlar = {};
  for (const alan of modulBul('aps').alanlar) {
    alanlar[alan.ad] = grupSkoru(alan.maddeler, yanitlar);
  }
  return { alanlar };
}

// Emotional — 7 sistem + 4 faset ortalaması; Exit Capacity + Reach (teamNotes:
// düşük ExitCapacity + yüksek Reach = role-hangover işareti → Entry & Exit).
// Part 4 (Comfort Inventory) PUANLANMAZ — yalnız ham.
export function emotionalSkorla(yanitlar) {
  const em = modulBul('emotional');
  const sistemler = {};
  const fasetHavuzu = { reach: [], vividness: [], control: [], cleanExit: [] };
  for (const sistem of em.part1.sistemler) {
    sistemler[sistem.ad] = grupSkoru(sistem.maddeler, yanitlar);
    for (const m of sistem.maddeler) {
      fasetHavuzu[m.faset]?.push(kodla(m, yanitlar[m.no] ?? null));
    }
  }
  const fasetler = {};
  for (const [ad, vals] of Object.entries(fasetHavuzu)) fasetler[ad] = ortalama(vals);
  return {
    sistemler,
    fasetler,
    exitCapacity: fasetler.cleanExit, // 7 sistem clean-exit ortalaması
    reach: fasetler.reach,
    metaDuygu: grupSkoru(em.part2.maddeler, yanitlar),
    bedenselFarkindalik: grupSkoru(em.part3.maddeler, yanitlar),
  };
}

// Access Channel — kanal canlılığı + kontrol + eylem; Part 3 sıralamaları ham kalır.
export function accessSkorla(yanitlar) {
  const ac = modulBul('access');
  const kanallar = {};
  for (const kanal of ac.part1.kanallar) {
    kanallar[kanal.ad] = grupSkoru(kanal.maddeler, yanitlar);
  }
  return {
    kanallar,
    kontrol: grupSkoru(ac.part2.maddeler, yanitlar),
    eylem: grupSkoru(ac.part4.maddeler, yanitlar),
  };
}

// Flow Form A — 9 boyut profili + [C] Koşullar / [E] Deneyim alt-toplamları.
// teamNotes: tek bir "flow skoru" ASLA raporlanmaz — 9 boyutlu profil.
export function flowASkorla(yanitlar) {
  const fl = modulBul('flow');
  const boyutlar = {};
  const havuz = { C: [], E: [] };
  for (const boyut of fl.formA.boyutlar) {
    boyutlar[boyut.ad] = { ...grupSkoru(boyut.maddeler, yanitlar), etiket: boyut.etiket };
    for (const m of boyut.maddeler) havuz[boyut.etiket].push(kodla(m, yanitlar[m.no] ?? null));
  }
  return {
    boyutlar,
    kosullar: ortalama(havuz.C),
    deneyim: ortalama(havuz.E),
  };
}

// Flow Form B — B1-B3 = koşullar, B4-B10 = deneyim (her uygulamada iki alt-toplam).
export function flowBSkorla(yanitlar) {
  const deger = (no) => yanitlar[no] ?? null;
  return {
    kosullar: ortalama(['B1', 'B2', 'B3'].map(deger)),
    deneyim: ortalama(['B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10'].map(deger)),
  };
}

// Regulation — Part 1 + Part 2 TEK karışık havuz olarak uygulanır (adminNote);
// puanlama 6 faset üzerinden (no'lar 1-30 çakışmasız).
export function regulationSkorla(yanitlar) {
  const rg = modulBul('regulation');
  return {
    fasetler: {
      ...fasetSkorlari(rg.part1.fasetler, yanitlar),
      ...fasetSkorlari(rg.part2.fasetler, yanitlar),
    },
  };
}

// Performance Mindfulness — 3 faset (Present-Moment / Nonjudgment / Nonreactivity).
export function mindfulnessSkorla(yanitlar) {
  return { fasetler: fasetSkorlari(modulBul('mindfulness').fasetler, yanitlar) };
}

// Actor's Body (Part 1 self-report) — 4 faset. Video/atölye katmanları app dışı
// (bağımsız Module 8 v0.2 dokümanı kaynak; video AYRI onam gerektirir).
export function bodySkorla(yanitlar) {
  return { fasetler: fasetSkorlari(modulBul('body').part1.fasetler, yanitlar) };
}

// Entry & Exit — yanitlar İÇ İÇE: {part1:{no:ham}, part2:{no:ham}, part3:{R1:...},
// part4:{no:...}, part5:{W1:...}} (part1 ve part4 madde no'ları çakışır).
// YALNIZ Part 1 (fasetler) + Part 2 puanlanır. Part 3-4-5 ham kalır.
// TOPLU skor ÜRETİLMEZ (App Safety Rules — "no aggregate wellbeing score, ever").
export function entryExitSkorla(yanitlar) {
  const ee = modulBul('entry_exit');
  return {
    fasetler: fasetSkorlari(ee.part1.fasetler, yanitlar.part1 ?? {}),
    gecisler: grupSkoru(ee.part2.maddeler, yanitlar.part2 ?? {}),
  };
}

// Slug → puanlayıcı (UI tek noktadan çağırır). intake puanlanmaz (null).
export const PUANLAYICILAR = {
  type_lens: typeLensSkorla,
  aps: apsSkorla,
  emotional: emotionalSkorla,
  access: accessSkorla,
  flow_formA: flowASkorla,
  flow_formB: flowBSkorla,
  regulation: regulationSkorla,
  mindfulness: mindfulnessSkorla,
  body: bodySkorla,
  entry_exit: entryExitSkorla,
};

/* ─── Kayıt (Supabase) ────────────────────────────────────────────────────── */

// Modül sonucu yaz (append-only insert). modul = v0.5 slug.
export async function bataryaSonucKaydet(modul, yanitlar, skorlar) {
  const kullanici_id = await uid();
  if (!kullanici_id) throw new Error('Oturum yok');
  const { error } = await supabase.from('batarya_sonuclari').insert({
    kullanici_id,
    modul,
    surum: SURUMLER[modul],
    yanitlar,
    skorlar: skorlar ?? null,
  });
  if (error) throw error;
  return true;
}

// Onam defteri satırı ('verildi' | 'geri_cekildi').
export async function bataryaOnamKaydet({ kutuDurumlari, imzaAd, islem = 'verildi', kapsam = 'batarya' }) {
  const kullanici_id = await uid();
  if (!kullanici_id) throw new Error('Oturum yok');
  const { error } = await supabase.from('batarya_onam').insert({
    kullanici_id,
    islem,
    kapsam,
    onam_metni_surumu: SURUMLER.onam,
    kutu_durumlari: kutuDurumlari ?? null,
    imza_ad: imzaAd,
  });
  if (error) throw error;
  return true;
}

// Durum: tamamlanan modüller (v1 legacy anahtarlar v0.5 slug'a eşlenir) +
// geçerli onam + Form B sayısı (devam/özet için).
export async function bataryaDurumGetir() {
  const kullanici_id = await uid();
  if (!kullanici_id) return { girisYok: true };

  const [sonuclarQ, onamQ] = await Promise.all([
    supabase
      .from('batarya_sonuclari')
      .select('modul, created_at')
      .eq('kullanici_id', kullanici_id)
      .order('created_at', { ascending: true }),
    supabase
      .from('batarya_onam')
      .select('islem, kapsam, islem_at')
      .eq('kullanici_id', kullanici_id)
      .eq('kapsam', 'batarya')
      .order('islem_at', { ascending: false })
      .limit(1),
  ]);

  const slugla = (m) => LEGACY_ESLEME[m] ?? m;
  const moduller = new Set((sonuclarQ.data || []).map((r) => slugla(r.modul)));
  const formBSayisi = (sonuclarQ.data || []).filter((r) => slugla(r.modul) === 'flow_formB').length;
  // Geçerli onam = en son satır 'verildi' (onam defteri kuralı).
  const onamVar = onamQ.data?.[0]?.islem === 'verildi';

  return { girisYok: false, moduller, formBSayisi, onamVar };
}
