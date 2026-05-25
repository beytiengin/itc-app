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
