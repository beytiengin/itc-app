// lib/kalibrasyon.js
// ITC Actor's Gym — Kalibrasyon verisi okuma katmanı
//
// Üç tabloyu (vak_sonuclari, yildiz_sonuclari, arketip_sonuclari)
// tek bir nesne halinde döndürür. En son yapılan testi kullanır.

import { supabase } from './supabase';

// ─── ANA FONKSİYON ──────────────────────────────────────────────────────────

// Kullanıcının kalibrasyon profilini getirir.
// Hiçbir test yapılmamışsa null döner.
//
// Kullanım:
//   const profil = await getKalibrasyonProfili();
//   profil → { vak: {...}, yildiz: {...}, arketip: {...}, eksikler: [...] }

export async function getKalibrasyonProfili() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return null;

    // Üç tabloyu paralel oku, her birinden en son kaydı al
    const [vakRes, yildizRes, arketipRes] = await Promise.all([
      supabase
        .from('vak_sonuclari')
        .select('*')
        .eq('kullanici_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle(),
      supabase
        .from('yildiz_sonuclari')
        .select('*')
        .eq('kullanici_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle(),
      supabase
        .from('arketip_sonuclari')
        .select('*')
        .eq('kullanici_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle(),
    ]);

    const vak = vakRes.data;
    const yildiz = yildizRes.data;
    const arketip = arketipRes.data;

    // Hangi testler eksik?
    const eksikler = [];
    if (!vak) eksikler.push('vak');
    if (!yildiz) eksikler.push('yildiz');
    if (!arketip) eksikler.push('arketip');

    return {
      vak,
      yildiz,
      arketip,
      eksikler,
      tamMi: eksikler.length === 0,
    };
  } catch (e) {
    console.log('Kalibrasyon okuma hatası:', e);
    return null;
  }
}

// ─── KİŞİSELLEŞTİRME YARDIMCILARI ───────────────────────────────────────────

// VAK baskın kanalına göre yönlendirme dilini döndürür.
// Bu metinler egzersiz adımlarında {duyu} gibi yer tutuculara konur.

export function vakDili(baskin) {
  const sozluk = {
    V: {
      duyu: 'görüyorsun',
      ipucu: 'Bu sahnenin atmosferinin rengini, ışığını, dokusunu hayal et.',
      yansimaSorusu: 'Bu hissin rengi ne? Nerede görüyorsun?',
      etiket: 'Görsel kanal',
    },
    A: {
      duyu: 'duyuyorsun',
      ipucu: 'Bu sahnenin sesini bul. İç sesin ritmi seni karaktere götürür.',
      yansimaSorusu: 'Bu hissin sesi nasıl? İçindeki ses ne söylüyor?',
      etiket: 'İşitsel kanal',
    },
    K: {
      duyu: 'hissediyorsun',
      ipucu: 'Bedeninin ağırlığını ve postürünü hisset. O bedensel yük seni karaktere götürür.',
      yansimaSorusu: 'Bu his bedeninin neresinde oturuyor?',
      etiket: 'Kinestetik kanal',
    },
  };
  return sozluk[baskin] || sozluk.V;
}

// Yıldız sonucundan baskın güçlü ve zayıf alanları döndürür
export function yildizGucluZayif(yildiz) {
  if (!yildiz) return { guclu: null, zayif: null };

  const alanlar = [
    { id: 'teknik', deger: yildiz.teknik },
    { id: 'psikolojik', deger: yildiz.psikolojik },
    { id: 'mesleki', deger: yildiz.mesleki },
    { id: 'yaratici', deger: yildiz.yaratici },
    { id: 'entelektuel', deger: yildiz.entelektuel },
    { id: 'iliski', deger: yildiz.iliski },
  ].filter((a) => a.deger != null);

  if (!alanlar.length) return { guclu: null, zayif: null };

  alanlar.sort((a, b) => b.deger - a.deger);
  return {
    guclu: alanlar[0],
    zayif: alanlar[alanlar.length - 1],
  };
}

// Karakterin MBTI tipi ile oyuncunun arketipini karşılaştırır.
// Gap Analizi'nin temeli — hangi boyutlar çakışıyor, hangileri ayrışıyor.

export function arketipFarki(oyuncuTipi, karakterTipi) {
  if (!oyuncuTipi || !karakterTipi) return null;
  if (oyuncuTipi.length !== 4 || karakterTipi.length !== 4) return null;

  const boyutlar = [
    { i: 0, a: 'E', b: 'I', ad: 'Yön' },
    { i: 1, a: 'S', b: 'N', ad: 'Algı' },
    { i: 2, a: 'T', b: 'F', ad: 'Karar' },
    { i: 3, a: 'J', b: 'P', ad: 'Yapı' },
  ];

  const cakisanlar = [];
  const ayrisanlar = [];

  boyutlar.forEach((b) => {
    if (oyuncuTipi[b.i] === karakterTipi[b.i]) {
      cakisanlar.push({ boyut: b.ad, harf: oyuncuTipi[b.i] });
    } else {
      ayrisanlar.push({
        boyut: b.ad,
        oyuncu: oyuncuTipi[b.i],
        karakter: karakterTipi[b.i],
      });
    }
  });

  return {
    oyuncuTipi,
    karakterTipi,
    cakisanlar,
    ayrisanlar,
    yakinlik: cakisanlar.length, // 0-4 arası
  };
}

// İlk giriş mesajı — sadece bir kez gösterilir
// (sayfada localStorage ile kontrol edilecek, burada sadece metni üretiyoruz)

export function ilkGirisMesaji(profil, karakterAdi) {
  if (!profil || !profil.vak) {
    return `${karakterAdi}'a hoş geldin. Daha derin bir deneyim için kalibrasyonunu tamamlamanı öneririm.`;
  }
  return `${karakterAdi} sayfası, kalibrasyon sonuçların doğrultusunda sana özel hazırlandı.`;
}