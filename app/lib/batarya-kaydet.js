// app/lib/batarya-kaydet.js — Modül I · Actor Assessment Battery kayıt + puanlama
// Karar 64 Aşama 3/4. Tablolar: batarya_sonuclari + batarya_onam
// (supabase-migrations/karar64-batarya.sql).
//
// İLKELER (Karar 64 §7):
//   - `yanitlar` HAM + verbatim = KAYNAK. Ters kodlama yanıtlara asla uygulanmaz.
//   - `skorlar` = türetilmiş katman (ters kodlama 6−ham, alan/sistem/faset
//     ortalamaları, Exit Capacity, C/E alt-toplamları). Hamdan HER ZAMAN
//     yeniden hesaplanabilir — burada saf fonksiyonlar olarak tutulur ki
//     enstrüman v0.x→v0.y geçişinde re-scoring mümkün olsun.
//   - Append-only: her tamamlama yeni satır (insert); update/delete yok.
//   - M3 Part 4 (Emotion Comfort) OPSİYONEL ve PUANLANMAZ — yalnız ham saklanır
//     ("not scored into your performance profile" — verbatim).

import { supabase } from './supabase';
import { batarya } from '../../data/kalibrasyon/batarya';

// Enstrüman sürümleri (batarya.js başlığındaki sürümlerle senkron).
export const SURUMLER = {
  onam: 'consent_v0.2',
  intake: 'intake_v0.2',
  m1_aps: 'm1_v0.2',
  m2_access: 'm2_v0.1',
  m3_emotional: 'm3_v0.1',
  m4_formA: 'm4_v0.1',
  m4_formB: 'm4_v0.1',
};

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

/* ─── Modül puanlayıcıları (ham yanıtlardan türetim) ──────────────────────── */

// M1 APS — 9 domain ortalaması (ters maddeler kodlanır).
export function m1Skorla(yanitlar) {
  const alanlar = {};
  for (const alan of batarya.module1.sectionB.alanlar) {
    alanlar[alan.ad] = grupSkoru(alan.maddeler, yanitlar);
  }
  return { alanlar };
}

// M2 Access Channel — kanal canlılığı + kontrol + eylem; sıralamalar ham kalır.
export function m2Skorla(yanitlar) {
  const kanallar = {};
  for (const kanal of batarya.module2.part1.kanallar) {
    kanallar[kanal.ad] = grupSkoru(kanal.maddeler, yanitlar);
  }
  return {
    kanallar,
    kontrol: grupSkoru(batarya.module2.part2.maddeler, yanitlar),
    eylem: grupSkoru(batarya.module2.part4.maddeler, yanitlar),
    // part3 sıralamaları yalnız yanitlar'da (ham) — türetim yok.
  };
}

// M3 Emotional — sistem + faset ortalamaları; Exit Capacity + Reach (teamNotes:
// düşük ExitCapacity + yüksek Reach = role-hangover işareti → Entry & Exit).
// Part 4 PUANLANMAZ.
export function m3Skorla(yanitlar) {
  const sistemler = {};
  const fasetHavuzu = { reach: [], vividness: [], control: [], cleanExit: [] };
  for (const sistem of batarya.module3.part1.sistemler) {
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
    metaDuygu: grupSkoru(batarya.module3.part2.maddeler, yanitlar),
    bedenselFarkindalik: grupSkoru(batarya.module3.part3.maddeler, yanitlar),
    // part4 (comfort inventory): opsiyonel, profil skoruna GİRMEZ — yalnız ham.
  };
}

// M4 Form A — 9 boyut profili + [C] Koşullar / [E] Deneyim alt-toplamları.
// teamNotes: tek bir "flow skoru" ASLA raporlanmaz — 9 boyutlu profil.
export function m4aSkorla(yanitlar) {
  const boyutlar = {};
  const havuz = { C: [], E: [] };
  for (const boyut of batarya.module4.formA.boyutlar) {
    boyutlar[boyut.ad] = { ...grupSkoru(boyut.maddeler, yanitlar), etiket: boyut.etiket };
    for (const m of boyut.maddeler) havuz[boyut.etiket].push(kodla(m, yanitlar[m.no] ?? null));
  }
  return {
    boyutlar,
    kosullar: ortalama(havuz.C), // [C] antecedent conditions
    deneyim: ortalama(havuz.E),  // [E] experience
  };
}

// M4 Form B — B1-B3 = koşullar, B4-B10 = deneyim (teamNotes: her uygulamada
// Conditions + Experience alt-toplamı).
export function m4bSkorla(yanitlar) {
  const deger = (no) => yanitlar[no] ?? null;
  return {
    kosullar: ortalama(['B1', 'B2', 'B3'].map(deger)),
    deneyim: ortalama(['B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10'].map(deger)),
  };
}

/* ─── Kayıt (Supabase) ────────────────────────────────────────────────────── */

// Modül sonucu yaz (append-only insert).
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

// Durum: tamamlanan modüller + geçerli onam + Form B sayısı (devam/özet için).
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

  const moduller = new Set((sonuclarQ.data || []).map((r) => r.modul));
  const formBSayisi = (sonuclarQ.data || []).filter((r) => r.modul === 'm4_formB').length;
  // Geçerli onam = en son satır 'verildi' (onam defteri kuralı).
  const onamVar = onamQ.data?.[0]?.islem === 'verildi';

  return { girisYok: false, moduller, formBSayisi, onamVar };
}
