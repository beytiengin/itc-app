// lib/travma.js
// ITC Actor's Gym — Travma kategorileri ve sahne-level uyarı mantığı
//
// 8 travma kategorisi × 4 yoğunluk seviyesi (Yok / Atıf / Tanıklık / İcra).
//
// Karar 21 (15 May 2026 — Yıldız–Travma Ayrılması) sonrası mimari:
//   - Sistem oyuncu profilini (Yıldız Matrisi) HESABA KATMAZ.
//   - Hiçbir sahne/egzersiz/boşluk profile göre KİLİTLENMEZ (gate yok).
//   - Travma verisi karakterden çıkar, oyuncudan değil (Substitution Yasağı §3.1).
//   - Sahnelere yoğunluk etiketlenir; oyuncuya UYARI olarak gösterilir.
//   - Yoğunluk 2 (Tanıklık) ve 3 (İcra) sahneler sonrası topraklanma önerilir
//     (kategori- ve profil-bağımsız).

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

// ─── KATEGORİ ETİKETİ FORMATLAMA ────────────────────────────────────────────

export function travmaEtiketleri(kategoriler) {
  if (!kategoriler || !kategoriler.length) return [];
  return kategoriler.map((k) => TRAVMA_KATEGORILERI[k]?.ad || k);
}

// ─── SAHNE UYARISI ──────────────────────────────────────────────────────────
//
// Bir sahne / egzersiz / boşluk için oyuncuya gösterilecek uyarıyı üretir.
// KİLİT DEĞİL — gate yok, profil yok. Yalnızca bilgilendirme.
//
// Dönüş:
//   { uyari: false, seviye: 0, kategoriler: [], mesaj: null }   → uyarı yok
//   { uyari: true,  seviye, kategoriler, mesaj }                → bilgilendirme

export function sahneUyarisi(sahne) {
  const seviye = sahne?.travmaSeviyesi || 0;
  const kategoriler = sahne?.travmaKategorileri || [];

  if (seviye === 0) {
    return { uyari: false, seviye: 0, kategoriler: [], mesaj: null };
  }

  const etiketler = travmaEtiketleri(kategoriler);
  const temalar = etiketler.length ? etiketler.join(', ') : null;
  const temaCumlesi = temalar ? ` Temalar: ${temalar}.` : '';

  if (seviye === 1) {
    return {
      uyari: true,
      seviye,
      kategoriler,
      mesaj: `Bu sahne bir geçmişe atıfta bulunuyor — doğrudan yaşanmıyor, anılıyor.${temaCumlesi}`,
    };
  }

  if (seviye === 2) {
    return {
      uyari: true,
      seviye,
      kategoriler,
      mesaj: `Bu sahne bir olaya tanıklık ediyor.${temaCumlesi} Sahne sonrası kısa bir topraklanma anı önerilir.`,
    };
  }

  // seviye === 3
  return {
    uyari: true,
    seviye,
    kategoriler,
    mesaj: `Bu sahne yoğun bir katmanda işliyor.${temaCumlesi} Sessiz bir alan ve hazırlık zamanı ayır; sahne sonrası topraklanma önerilir.`,
  };
}

// ─── TOPRAKLANMA TETİKLEYİCİSİ ──────────────────────────────────────────────
//
// Yoğunluk 2 (Tanıklık) ve 3 (İcra) sahneler sonrası topraklanma önerilir.
// Kategori- ve profil-bağımsız (Karar 21 / Spine §3.4).

export function topraklanmaGerekli(yogunluk) {
  return (yogunluk || 0) >= 2;
}
