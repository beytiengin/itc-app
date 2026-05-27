// lib/kalibrasyon.js
// ITC Actor's Gym — Kalibrasyon verisi okuma katmanı
// Karar 36 (27 May 2026): Modül I 5 bölüm. Yıldız → Beceri Haritası (arşiv: yildiz_sonuclari).
//                         Duygu Haritası (Panksepp · Yol B karaktere-yaklaşım) eklendi.
//                         Panksepp yaklaşım katmanı PROVISIONAL — FKA klinik onayı Haziran 2026.

import { supabase } from './supabase';

// ─── ANA FONKSİYON ──────────────────────────────────────────────────────────

export async function getKalibrasyonProfili() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return null;

    // Karar 36: aktif enstrümanlar = VAK · Beceri · Arketip · Panksepp.
    // (yildiz_sonuclari arşivdir; aktif profile okunmaz — legacy çağrılar yildizGucluZayif kullanabilir.)
    const [vakRes, beceriRes, arketipRes, pankseppRes, profilRes] = await Promise.all([
      supabase.from('vak_sonuclari').select('*').eq('kullanici_id', user.id).order('tarih', { ascending: false }).limit(1).maybeSingle(),
      supabase.from('beceri_sonuclari').select('*').eq('kullanici_id', user.id).order('tarih', { ascending: false }).limit(1).maybeSingle(),
      supabase.from('arketip_sonuclari').select('*').eq('kullanici_id', user.id).order('tarih', { ascending: false }).limit(1).maybeSingle(),
      supabase.from('panksepp_sonuclari').select('*').eq('kullanici_id', user.id).order('tarih', { ascending: false }).limit(1).maybeSingle(),
      supabase.from('oyuncu_profili').select('*').eq('kullanici_id', user.id).order('son_guncelleme', { ascending: false }).limit(1).maybeSingle(),
    ]);

    const vak = vakRes.data;
    const beceri = beceriRes.data;
    const arketip = arketipRes.data;
    const panksepp = pankseppRes.data;
    const profil = profilRes.data; // intake — bağlam (Karar 36 profil köprüsü). eksikler'e GİRMEZ; ölçüm enstrümanı değil.

    const eksikler = [];
    if (!vak) eksikler.push('vak');
    if (!beceri) eksikler.push('beceri');
    if (!arketip) eksikler.push('arketip');
    if (!panksepp) eksikler.push('panksepp');

    return {
      vak,
      beceri,
      arketip,
      panksepp,
      profil,
      eksikler,
      tamMi: eksikler.length === 0,
      hicYok: eksikler.length === 4,
    };
  } catch (e) {
    console.log('Kalibrasyon okuma hatası:', e);
    return null;
  }
}

// ─── KİŞİSELLEŞTİRME YARDIMCILARI ───────────────────────────────────────────

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

// ─── OYUNCU PROFİLİ → REHBERLİK REGISTERI (Karar 36 · profil downstream köprüsü) ──
//
// Deneyim kademesi rehberliğin AÇIKLAMA/İSKELE yoğunluğunu ayarlar — içeriği DEĞİL.
// Karar 21 mutlak: hiçbir erişimi gate'lemez (herkes tüm içeriği görür).
// Klinik güvenlik + topraklanma HER register'da tam kalır; register onları azaltmaz.
// Karar 31: silent — oyuncu "erken/usta" etiketini görmez. DB kolonu: oyuncu_profili.deneyim.

const EXP_REGISTER = {
  // TR
  'Yok': 'erken', '1-2 yıl': 'erken', '3-5 yıl': 'orta', '5-10 yıl': 'orta', '10-15 yıl': 'usta', '15+ yıl': 'usta',
  // EN
  'None': 'erken', '1-2 yrs': 'erken', '3-5 yrs': 'orta', '5-10 yrs': 'orta', '10-15 yrs': 'usta', '15+ yrs': 'usta',
};

export function profilRegister(profil) {
  const seviye = (profil && EXP_REGISTER[profil.deneyim]) || 'orta'; // varsayılan: orta
  const tablo = {
    erken: { seviye: 'erken', iskele: 'yuksek', not: 'Yöntem adımları daha açık anlatılır; tempo nazik; yönlendirme bol.' },
    orta:  { seviye: 'orta',  iskele: 'normal', not: 'Dengeli açıklama; standart tempo.' },
    usta:  { seviye: 'usta',  iskele: 'dusuk',  not: 'Zanaat dili doğrudan; az iskele; akran-registeri.' },
  };
  return tablo[seviye];
}

// ─── BECERİ HARİTASI (Karar 36 · yildizGucluZayif paraleli, 7 grup) ──────────

export function beceriGucluZayif(beceri) {
  if (!beceri) return { guclu: null, zayif: null };

  const alanlar = [
    { id: 'mesleki_guven', ad: 'Mesleki Güven', deger: beceri.mesleki_guven },
    { id: 'teknik', ad: 'Teknik', deger: beceri.teknik },
    { id: 'zihinsel', ad: 'Zihinsel', deger: beceri.zihinsel },
    { id: 'duygusal', ad: 'Duygusal', deger: beceri.duygusal },
    { id: 'motivasyonel', ad: 'Motivasyonel', deger: beceri.motivasyonel },
    { id: 'rahatlama', ad: 'Rahatlama', deger: beceri.rahatlama },
    { id: 'iliskisel', ad: 'İlişkisel', deger: beceri.iliskisel },
  ].filter((a) => a.deger != null);

  if (!alanlar.length) return { guclu: null, zayif: null };

  alanlar.sort((a, b) => b.deger - a.deger);
  return {
    guclu: alanlar[0],
    zayif: alanlar[alanlar.length - 1],
  };
}

// Legacy (arşiv): eski 6-boyut Yıldız verisi için korunur. Karar 36 sonrası aktif profilde yok.
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
  return { guclu: alanlar[0], zayif: alanlar[alanlar.length - 1] };
}

// ─── DUYGU HARİTASI · PANKSEPP (Karar 36 · Yol B) ────────────────────────────
//
// PROVISIONAL — FKA klinik onayı bekleniyor (Haziran 2026 batch'i).
// Karar 21 mutlak: bu katman BİLGİLENDİRİR, kısıtlamaz. Hiçbir erişimi gate'lemez.
// Karar 31/6: yalnız oyuncu-yüzü TR. İngilizce Panksepp jargonu oyuncuya görünmez.
// 6 sistem (Filiz enstrümanı LUST ölçmez): arayis · ofke · korku · sefkat · huzun · oyun.

// vakDili() paraleli — baskın afektif sisteme göre karaktere-yaklaşım dili.
export function pankseppYaklasimi(baskinSistem) {
  const sozluk = {
    arayis: {
      etiket: 'Arayış',
      kapi: 'Karaktere merakla, peşine düşerek girersin.',
      ipucu: 'Karakterin neyin peşinde olduğunu, neyi aradığını bul — onun arayışı senin kapın.',
      yansimaSorusu: 'Bu karakter en çok neyi arıyor? Sen onu nerede arıyorsun?',
    },
    ofke: {
      etiket: 'Öfke',
      kapi: 'Karaktere sınırları ve direnci üzerinden girersin.',
      ipucu: 'Karakterin neye karşı dik durduğunu, neyin onu ateşlediğini bedeninde ara.',
      yansimaSorusu: "Bu karakter neye 'hayır' diyor? O 'hayır' sende nerede?",
    },
    korku: {
      etiket: 'Korku',
      kapi: 'Karaktere neyi koruduğu, neyden kaçındığı üzerinden girersin.',
      ipucu: 'Karakterin tehdidini ve kırılganlığını sezerek yaklaş — koruma içgüdüsü senin kapın.',
      yansimaSorusu: 'Bu karakter neyi kaybetmekten korkuyor?',
    },
    sefkat: {
      etiket: 'Bağ',
      kapi: 'Karaktere kurduğu bağlar üzerinden girersin.',
      ipucu: 'Karakterin kime/neye bağlandığını, kimi koruyup kolladığını merkeze al.',
      yansimaSorusu: 'Bu karakter en çok kime bağlı? O bağ sende neyi hatırlatıyor?',
    },
    huzun: {
      etiket: 'Hüzün',
      kapi: 'Karaktere yitirdiği şey üzerinden girersin.',
      ipucu: 'Karakterin neyin özlemini taşıdığını, neyi geride bıraktığını duy.',
      yansimaSorusu: 'Bu karakter neyi yitirdi? O yitik sende neye dokunuyor?',
    },
    oyun: {
      etiket: 'Oyun',
      kapi: 'Karaktere oyunbazlık ve anın canlılığıyla girersin.',
      ipucu: 'Karakterin hafifliğini, mizahını, oyun kuran yanını ara — ağır karakterde bile.',
      yansimaSorusu: 'Bu karakter ne zaman oyun oynuyor, ne zaman hafifliyor?',
    },
  };
  return sozluk[baskinSistem] || sozluk.arayis;
}

// yildizGucluZayif() paraleli — AMA afektif sistemde yargısız çerçeve.
// "güçlü/zayıf" yerine "baskın/sessiz" (en aktif / en sessiz sistem). Karar 21/31 uyumu.
export function pankseppGucluZayif(panksepp) {
  if (!panksepp) return { baskin: null, sessiz: null };

  const sistemler = [
    { id: 'arayis', ad: 'Arayış', deger: panksepp.arayis },
    { id: 'ofke', ad: 'Öfke', deger: panksepp.ofke },
    { id: 'korku', ad: 'Korku', deger: panksepp.korku },
    { id: 'sefkat', ad: 'Bağ', deger: panksepp.sefkat },
    { id: 'huzun', ad: 'Hüzün', deger: panksepp.huzun },
    { id: 'oyun', ad: 'Oyun', deger: panksepp.oyun },
  ].filter((s) => s.deger != null);

  if (!sistemler.length) return { baskin: null, sessiz: null };

  sistemler.sort((a, b) => b.deger - a.deger);
  return {
    baskin: sistemler[0],
    sessiz: sistemler[sistemler.length - 1],
  };
}

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
      ayrisanlar.push({ boyut: b.ad, oyuncu: oyuncuTipi[b.i], karakter: karakterTipi[b.i] });
    }
  });

  return { oyuncuTipi, karakterTipi, cakisanlar, ayrisanlar, yakinlik: cakisanlar.length };
}

// ─── İLK GİRİŞ MESAJI — DURUMA GÖRE FARKLI ──────────────────────────────────

export function ilkGirisMesaji(profil, karakterAdi) {
  if (!profil) {
    return { metin: `${karakterAdi}'a hoş geldin.`, yonlendirme: null };
  }

  if (profil.hicYok) {
    return {
      metin: `${karakterAdi}'a hoş geldin. Bu sayfanın tam deneyimi için önce kalibrasyonunu tamamlamanı öneririm — Öğrenme Stili, Beceri Haritası, Kişilik ve Duygu Sistemleri.`,
      yonlendirme: { link: '/kalibrasyon', buton: 'Kalibrasyona Git' },
    };
  }

  if (!profil.tamMi) {
    const eksikAdlari = profil.eksikler.map((e) => {
      if (e === 'vak') return 'Öğrenme Stili';
      if (e === 'beceri') return 'Beceri Haritası';
      if (e === 'arketip') return 'Kişilik';
      if (e === 'panksepp') return 'Duygu Sistemleri'; // Karar 31/6 oyuncu-yüzü
      return e;
    }).join(', ');

    return {
      metin: `${karakterAdi}'a hoş geldin. Henüz tamamlanmamış testlerin var: ${eksikAdlari}. Onları da tamamlarsan deneyim daha derin olacak.`,
      yonlendirme: { link: '/kalibrasyon', buton: 'Kalibrasyonu Tamamla' },
    };
  }

  return {
    metin: `${karakterAdi} sayfası, kalibrasyon sonuçların doğrultusunda sana özel hazırlandı.`,
    yonlendirme: null,
  };
}
