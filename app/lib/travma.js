// lib/travma.js
// ITC Actor's Gym — Travma kategorileri ve etik koruma mantığı
//
// 8 travma kategorisi + 3 yoğunluk seviyesi (atıf/tanıklık/icra).
// Etik koruma: oyuncunun Yıldız Matrisi psikolojik skoruna göre
// derin egzersizler "hazır değil" mesajıyla bekletilir.

// ─── KATEGORİLER ────────────────────────────────────────────────────────────

export const TRAVMA_KATEGORILERI = {
  siddet: {
    ad: 'Şiddet ve Ölüm',
    aciklama: 'Fiziksel şiddet, cinayet, ölüm karşılaşması.',
  },
  kayip: {
    ad: 'Kayıp ve Yas',
    aciklama: 'Sevilen birinin kaybı, yas süreçleri.',
  },
  ihanet: {
    ad: 'İhanet',
    aciklama: 'Güven ilişkilerinin kırılması, yakınlardan gelen darbe.',
  },
  cinsel: {
    ad: 'Cinsel Travma',
    aciklama: 'Cinsel şiddet veya istismar konuları.',
  },
  zihinsel_kirilma: {
    ad: 'Zihinsel Kırılma',
    aciklama: 'Halüsinasyon, paranoya, gerçeklikle bağın kopması.',
  },
  cocukluk: {
    ad: 'Çocukluk Travması',
    aciklama: 'Erken yaş yaralanmaları, çocukluğa ait acılar.',
  },
  ahlaki_yara: {
    ad: 'Ahlaki Yara',
    aciklama: 'Vicdani çatışmalar, yapılmış olanın ağırlığı.',
  },
  varolussal: {
    ad: 'Varoluşsal Kırılma',
    aciklama: 'Anlamsızlık, ölümlülük, varoluşun çöküşü.',
  },
};

// ─── YOĞUNLUK SEVİYELERİ ────────────────────────────────────────────────────

export const TRAVMA_SEVIYESI = {
  0: { ad: 'Yok', aciklama: 'Travmatik içerik yok.' },
  1: { ad: 'Atıf', aciklama: 'Karakter olaya atıfta bulunuyor, doğrudan yaşamıyor.' },
  2: { ad: 'Tanıklık', aciklama: 'Karakter olaya tanık oluyor, içine giriyor.' },
  3: { ad: 'İcra', aciklama: 'Karakter olayı doğrudan yaşıyor veya gerçekleştiriyor.' },
};

// Geriye dönük uyumluluk için alias
export const YOGUNLUK_SEVIYELERI = TRAVMA_SEVIYESI;

// ─── ERİŞİM HESAPLAMA ───────────────────────────────────────────────────────
//
// Bir sahne / egzersiz / boşluk için erişim durumunu hesaplar.
// Yıldız Matrisi'ndeki psikolojik skora göre üç durum üretir:
//
//   - kilitli: false, mesaj: null         → tam erişim
//   - kilitli: false, mesaj: '...'        → uyarılı erişim
//   - kilitli: true,  mesaj: '...'        → henüz hazır değil
//
// Mesajlar yumuşak dilde — "kilitli" yerine "hazır değil" anlamı.

export function sahneErisimi(sahne, yildiz) {
  const seviye = sahne?.travmaSeviyesi || 0;

  // Travma yoksa veya seviye 1 ise herkese açık
  if (seviye <= 1) {
    return { kilitli: false, mesaj: null };
  }

  // Yıldız Matrisi yoksa, seviye 2-3 için yumuşak uyarı
  if (!yildiz) {
    if (seviye === 2) {
      return {
        kilitli: false,
        mesaj:
          'Bu çalışma daha derin bir katman içeriyor. Yıldız Oyuncu Analizi\'ni tamamlarsan sistem sana özel bir koruma çerçevesi sunabilir.',
      };
    }
    if (seviye === 3) {
      return {
        kilitli: false,
        mesaj:
          'Bu çalışma yoğun bir derinlik içeriyor. Yıldız Oyuncu Analizi\'ni tamamlamadan girmen önerilmez — sistem sana özel hazırlık önerileri sunamıyor.',
      };
    }
  }

  const psk = yildiz?.psikolojik || 0;

  // Seviye 2 — psikolojik kontrol
  if (seviye === 2) {
    if (psk >= 5) {
      return { kilitli: false, mesaj: null };
    }
    if (psk >= 3) {
      return {
        kilitli: false,
        mesaj:
          'Bu egzersiz orta yoğunlukta bir derinlik içeriyor. Hazır hissettiğinde başla — bitince kısa bir topraklanma anı önereceğim.',
      };
    }
    return {
      kilitli: true,
      mesaj:
        'Bu egzersiz için önce zemin kurman gerekiyor. Daha temel egzersizleri tamamlayıp psikolojik kapasiteni güçlendirdiğinde burası açılır.',
    };
  }

  // Seviye 3 — daha sıkı kontrol
  if (seviye === 3) {
    if (psk >= 5) {
      return {
        kilitli: false,
        mesaj:
          'Bu çalışma yoğun bir katmanda işliyor. Sessiz bir alan, hazırlık zamanı ve sonrasında topraklanma için boşluk bırak.',
      };
    }
    if (psk >= 3) {
      return {
        kilitli: false,
        mesaj:
          'Bu çalışma derin bir katmanda işliyor. Yalnız değil, birinin yakınında olduğunda yapmanı öneririm. Bitince mutlaka topraklanma adımını uygula.',
      };
    }
    return {
      kilitli: true,
      mesaj:
        'Bu çalışma henüz hazır değil. Önce daha temel egzersizlerle psikolojik zeminini güçlendirmek gerekiyor — bu kapı sonra açılacak.',
    };
  }

  return { kilitli: false, mesaj: null };
}

// ─── KATEGORİ ETİKETİ FORMATLAMA ────────────────────────────────────────────

export function travmaEtiketleri(kategoriler) {
  if (!kategoriler || !kategoriler.length) return [];
  return kategoriler.map((k) => TRAVMA_KATEGORILERI[k]?.ad || k);
}