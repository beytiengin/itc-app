// lib/travma.js
// ITC Actor's Gym — Travma kategorileri ve etik koruma mantığı
//
// Bu dosya tüm karakter sayfaları tarafından kullanılır.
// Kategoriler ve seviyeler değişirse sadece burası güncellenir.

// ─── 8 KATEGORİ ─────────────────────────────────────────────────────────────

export const TRAVMA_KATEGORILERI = {
  siddet: {
    id: 'siddet',
    ad: 'Şiddet ve Ölüm',
    aciklama: 'Cinayet, savaş, fiziksel saldırı, intihar.',
    renk: '#a04040',
  },
  kayip: {
    id: 'kayip',
    ad: 'Kayıp ve Yas',
    aciklama: 'Sevilenin ölümü, ayrılık, terk edilme, vatan kaybı.',
    renk: '#6a7a8a',
  },
  ihanet: {
    id: 'ihanet',
    ad: 'İhanet ve Güven Kırılması',
    aciklama: 'Aldatılma, aile/dost ihaneti, sistem tarafından terk edilme.',
    renk: '#8a6a4a',
  },
  cinsel: {
    id: 'cinsel',
    ad: 'Cinsel Travma',
    aciklama: 'Tecavüz, istismar, taciz, beden otonomisi kaybı.',
    renk: '#7a4a6a',
  },
  zihinsel_kirilma: {
    id: 'zihinsel_kirilma',
    ad: 'Zihinsel Kırılma',
    aciklama: 'Halüsinasyon, paranoya, psikoz, dissosiyasyon.',
    renk: '#5a5a8a',
  },
  cocukluk: {
    id: 'cocukluk',
    ad: 'Çocukluk Travması',
    aciklama: 'Ebeveyn şiddeti/ihmali, aile içi işlev bozukluğu, bağlanma yaraları.',
    renk: '#7a8a6a',
  },
  ahlaki_yara: {
    id: 'ahlaki_yara',
    ad: 'Ahlaki Yara',
    aciklama: 'Suçluluk, utanç, pişmanlık, vicdan azabı.',
    renk: '#8a7a4a',
  },
  varolussal: {
    id: 'varolussal',
    ad: 'Varoluşsal Kırılma',
    aciklama: 'Anlamsızlık, hiçlik, inanç kaybı, kendine yabancılaşma.',
    renk: '#6a6a6a',
  },
};

// ─── 3 YOĞUNLUK SEVİYESİ ────────────────────────────────────────────────────

export const YOGUNLUK_SEVIYELERI = {
  1: {
    seviye: 1,
    ad: 'Atıf',
    kisaAd: 'Reference',
    aciklama: 'Karakter bunu duyumsar, anar, anlatır.',
    ornek: 'Hamlet babasının ölümünden bahseder.',
    renk: '#a0a060',
  },
  2: {
    seviye: 2,
    ad: 'Tanıklık',
    kisaAd: 'Witness',
    aciklama: 'Karakter olayın içindedir ama failinin değildir.',
    ornek: "Macbeth, Banquo'nun hayaletiyle karşılaşır.",
    renk: '#c08040',
  },
  3: {
    seviye: 3,
    ad: 'İcra',
    kisaAd: 'Embodiment',
    aciklama: 'Karakter olayı bizzat yaşar, yapar veya kurban olur.',
    ornek: "Macbeth Duncan'ı öldürür.",
    renk: '#a04040',
  },
};

// ─── KİLİTLEME MANTIĞI ──────────────────────────────────────────────────────

// Yıldız Oyuncu testindeki "psikolojik" skoruna göre hangi seviyeye erişebilir.
// Bu fonksiyon her sahne için bir durum nesnesi döndürür.
//
// Kullanım:
//   sahneErisimi(sahne, yildizSonucu)
//   → { kilitli: true/false, seviye: 'standart'/'uyari'/'kilit', mesaj: '...' }

export function sahneErisimi(sahne, yildizSonucu) {
  // Sahne travmalı değilse her zaman açık
  const yogunluk = sahne.travmaSeviyesi || 0;
  if (yogunluk === 0) {
    return { kilitli: false, seviye: 'standart', mesaj: null };
  }

  // Yıldız sonucu yoksa (kalibrasyon yapılmamış) — varsayılan olarak orta yol
  if (!yildizSonucu || yildizSonucu.psikolojik == null) {
    return {
      kilitli: false,
      seviye: 'uyari',
      mesaj:
        'Bu sahne travma protokolü gerektiriyor. Kalibrasyonunu tamamlaman önerilir.',
    };
  }

  const psk = yildizSonucu.psikolojik;

  // psikolojik >= 5 → tüm seviyeler açık
  if (psk >= 5) {
    return { kilitli: false, seviye: 'standart', mesaj: null };
  }

  // psikolojik 3-5 arası → seviye 3 uyarılı, oyuncu açabilir
  if (psk >= 3) {
    if (yogunluk === 3) {
      return {
        kilitli: false,
        seviye: 'uyari',
        mesaj:
          'Bu sahne yoğun bir bedensel etki taşıyor. Çalışmadan önce baseline egzersizini yapmanı öneririm.',
      };
    }
    return { kilitli: false, seviye: 'standart', mesaj: null };
  }

  // psikolojik < 3 → seviye 2 ve 3 kilitli
  if (yogunluk >= 2) {
    return {
      kilitli: true,
      seviye: 'kilit',
      mesaj:
        'Bu sahne baseline\'ın güçlendirdiği bir zemin gerektiriyor. Önce "Baseline Kurma" ve "Değiştirilemez Doğrular" egzersizlerini tamamlamanı öneriyorum.',
    };
  }

  return { kilitli: false, seviye: 'standart', mesaj: null };
}

// ─── KATEGORI YARDIMCILARI ──────────────────────────────────────────────────

export function kategoriBilgisi(kategoriId) {
  return TRAVMA_KATEGORILERI[kategoriId] || null;
}

export function yogunlukBilgisi(seviye) {
  return YOGUNLUK_SEVIYELERI[seviye] || null;
}

// Bir karakterin tüm sahnelerinden travma profilini çıkarır
// (örnek: { siddet: 3, ahlaki_yara: 5, ... })
export function karakterTravmaProfili(sahneler) {
  const profil = {};
  sahneler.forEach((sahne) => {
    if (sahne.travmaKategorileri) {
      sahne.travmaKategorileri.forEach((kat) => {
        profil[kat] = (profil[kat] || 0) + 1;
      });
    }
  });
  return profil;
}

// Bir karakterin baskın 2 travma kategorisini döndürür
export function baskinKategoriler(sahneler, sayi = 2) {
  const profil = karakterTravmaProfili(sahneler);
  return Object.entries(profil)
    .sort((a, b) => b[1] - a[1])
    .slice(0, sayi)
    .map(([kat]) => kat);
}