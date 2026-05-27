// app/lib/ilerleme.js
// ITC Actor's Gym — Karakter hub ilerleme katmanı (4 karaktere ortak).
//
// Tek kaynak: karakter_ilerleme VIEW (Sprint 4). Hub, alt tabloları tek tek
// saymaz — bu fonksiyon view'dan TEK sorguyla okur.
//
// İLKE: activation, completion değil. Navigasyon sayısı "kaç birime yazı
// girildi" (yazıldı/değinildi); derin onay (içselleştirildi/tanındı/anladı)
// view'da ayrıca durur, ileride iki katmanlı gösterim için. Durum metinleri
// "✓ Tamamlandı" demez — "geçmiş bedende", "çizgi tam" gibi zanaat dili.

import { supabase } from './supabase';

const SIFIR = {
  kesfet_olay_yazildi: 0, kesfet_olay_icsel: 0,
  kesfet_iliski_yazildi: 0, kesfet_iliski_tanindi: 0,
  haritala_deginildi: 0, haritala_anladi: 0,
  yorumla_tercih_aktif: 0,
  yarat_bosluk_deginildi: 0, yarat_alt_soru_yazildi: 0,
};

// View'dan (kullanıcı × karakter) ilerleme satırını getirir.
// Anonim ya da veri yoksa: tüm sayılar 0 (kartlar "henüz başlanmadı").
export async function ilerlemeGetir(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { ...SIFIR };

    const { data, error } = await supabase
      .from('karakter_ilerleme')
      .select('*')
      .eq('karakter_id', karakterId)
      .maybeSingle();

    if (error) {
      console.log('İlerleme getir hatası:', error);
      return { ...SIFIR };
    }
    return { ...SIFIR, ...(data || {}) };
  } catch (e) {
    console.log('İlerleme getir exception:', e);
    return { ...SIFIR };
  }
}

// View satırı + içerik toplamları → 4 kartlık gösterim dizisi.
// toplamlar: { olay, iliski, sahne, tercih, bosluk } (karaktere özel, içerikten).
// Kart sırası BOLUM_YOLLARI ile hizalı: Keşfet · Haritala · Yorumla · Yarat.
export function kartlariKur(v, toplamlar) {
  const t = toplamlar || {};
  return [
    {
      tip: 'kesfet',
      sinyaller: [
        { etiket: 'olay',   aktif: v.kesfet_olay_yazildi,    toplam: t.olay   || 0 },
        { etiket: 'iliski', aktif: v.kesfet_iliski_yazildi,   toplam: t.iliski || 0 },
      ],
    },
    {
      tip: 'haritala',
      sinyaller: [
        { etiket: null, aktif: v.haritala_deginildi, toplam: t.sahne || 0 },
      ],
    },
    {
      tip: 'yorumla',
      sinyaller: [
        { etiket: null, aktif: v.yorumla_tercih_aktif, toplam: t.tercih || 0 },
      ],
    },
    {
      tip: 'yarat',
      sinyaller: [
        { etiket: null, aktif: v.yarat_bosluk_deginildi, toplam: t.bosluk || 0 },
      ],
    },
  ];
}

// Kartın bütünsel durumu: tüm sinyaller toplanır → bos / basladi / tam.
export function kartDurumu(kart) {
  const aktif = kart.sinyaller.reduce((s, x) => s + (x.aktif || 0), 0);
  const toplam = kart.sinyaller.reduce((s, x) => s + (x.toplam || 0), 0);
  if (aktif === 0) return 'bos';
  if (toplam > 0 && aktif >= toplam) return 'tam';
  return 'basladi';
}

// Sinyal etiketleri (Keşfet'in iki alt-sinyali için).
const ETIKET = {
  olay:   { tr: 'Olaylar',   en: 'Events' },
  iliski: { tr: 'İlişkiler', en: 'Relationships' },
};

export function sinyalEtiketi(anahtar, dil) {
  const e = ETIKET[anahtar];
  if (!e) return '';
  return dil === 'en' ? e.en : e.tr;
}

// Activation durum metinleri — istasyon × durum × dil. Completion dili YOK.
const DURUM = {
  kesfet: {
    bos:     { tr: 'Geçmiş henüz sessiz',   en: 'The past is still silent' },
    basladi: { tr: 'Geçmiş canlanıyor',     en: 'The past is awakening' },
    tam:     { tr: 'Geçmiş bedende',        en: 'The past lives in the body' },
  },
  haritala: {
    bos:     { tr: 'Çizgi henüz boş',       en: 'The line is still empty' },
    basladi: { tr: 'Çizgi genişliyor',      en: 'The line is widening' },
    tam:     { tr: 'Çizgi tam',             en: 'The line is whole' },
  },
  yorumla: {
    bos:     { tr: 'Tercihler bekliyor',    en: 'The choices wait' },
    basladi: { tr: 'Tercihlerin beliriyor', en: 'Your choices are emerging' },
    tam:     { tr: 'Yorumun belirdi',       en: 'Your reading has emerged' },
  },
  yarat: {
    bos:     { tr: 'Boşluklar boş',         en: 'The gaps are empty' },
    basladi: { tr: 'Boşluklar işleniyor',   en: 'The gaps are filling' },
    tam:     { tr: 'Boşluklar yazıldı',     en: 'The gaps are written' },
  },
};

export function durumMetni(tip, durum, dil) {
  const d = DURUM[tip]?.[durum];
  if (!d) return '';
  return dil === 'en' ? d.en : d.tr;
}

// ─── ADIM 3 — Karşılayan blok mantığı ────────────────────────────
// "Sıradaki eksik istasyon": kartlar (kesfet→haritala→yorumla→yarat)
// soldan taranır, ilk 'tam' OLMAYAN istasyon sıradakidir. Tanı dahil
// değil (referans, kartlar dizisinde yok). Yumuşak davet — emir değil.
//
// Dönen: { faz, index, tip }
//   faz: 'ilk' (hiçbiri başlamamış) | 'devam' (biri eksik) | 'son' (hepsi tam)
//   index: kartlar dizisindeki sıradaki istasyon (BOLUM_YOLLARI ile hizalı)
//   tip: o istasyonun tipi ('kesfet' vb.) | null (son fazda)
export function siradakiAdim(kartlar) {
  if (!Array.isArray(kartlar) || kartlar.length === 0) {
    return { faz: 'ilk', index: 0, tip: kartlar?.[0]?.tip ?? null };
  }
  const durumlar = kartlar.map((k) => kartDurumu(k)); // 'bos'|'basladi'|'tam'

  // Hepsi tam mı — son faz
  if (durumlar.every((d) => d === 'tam')) {
    return { faz: 'son', index: kartlar.length - 1, tip: null };
  }
  // Hiçbiri başlamamış mı (hepsi bos) — ilk giriş
  if (durumlar.every((d) => d === 'bos')) {
    return { faz: 'ilk', index: 0, tip: kartlar[0].tip };
  }
  // Aksi halde: soldan ilk 'tam' olmayan istasyon — devam
  const i = durumlar.findIndex((d) => d !== 'tam');
  const idx = i === -1 ? 0 : i;
  return { faz: 'devam', index: idx, tip: kartlar[idx].tip };
}

// Karşılayan selam metni — faz × dil. Yumuşak davet dili.
// İstasyon adları için {ad} yer tutucu kullanılır; hub bileşeni gerçek istasyon
// adını yerleştirir. Karakter adı için {karakter} (nominatif), {karakterIn}
// (tamlayan/ilgi hâli — "Hamlet'in"), {karakterIni} (kendi X-ni biçimi —
// "Hamlet'ini") yer tutucuları kullanılır; selamMetni() çağıranın geçtiği
// karakter bilgisinden doldurur.
const SELAM = {
  ilk: {
    tr: { selam: '{karakter} henüz boş bir sayfa. Onu tanımaya nereden başlamak istersin?', alt: 'İstersen {ad} ile başla — ya da kendi yolunu seç.' },
    en: { selam: '{karakter} is still an empty page. Where would you like to begin knowing him?', alt: 'You could start with {ad} — or choose your own way.' },
  },
  devam: {
    tr: { selam: '{ad} seni bekliyor.', alt: 'Buradan devam edebilirsin — ya da başka bir istasyona geç.' },
    en: { selam: '{ad} is waiting for you.', alt: 'You can continue here — or move to another station.' },
  },
  son: {
    tr: { selam: "{karakterIn} koordinatları kuruldu.", alt: 'Yazdığın her şey bir arada — kendi {karakterIni} görmek ister misin?' },
    en: { selam: "{karakter}'s coordinates are set.", alt: 'Everything you wrote, together — would you like to see your own {karakter}?' },
  },
};

export function selamMetni(faz, dil, karakter = {}) {
  const f = SELAM[faz] || SELAM.devam;
  const t = dil === 'en' ? f.en : f.tr;
  const { ad = '', karakterIn = '', karakterIni = '' } = karakter;
  return {
    selam: t.selam
      .replace('{karakter}', ad)
      .replace('{karakterIn}', karakterIn),
    alt: t.alt
      .replace('{karakter}', ad)
      .replace('{karakterIni}', karakterIni),
  };
}
