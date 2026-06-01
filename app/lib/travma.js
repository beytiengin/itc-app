// lib/travma.js
// ITC Actor's Gym — Travma kategorileri ve sahne-level uyarı mantığı
//
// i18n (tr/en/de): kategoriler/seviyeler/uyarı mesajları 3 dilli.
// pick(o, dil) = o[dil] ?? o.tr ?? o.en. Yapısal anahtarlar (siddet, kayip, …)
// ve seviye numaraları DEĞİŞMEDİ (veri anahtarı).
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

const pick = (o, dil) => (o == null ? '' : typeof o === 'string' ? o : (o[dil] ?? o.tr ?? o.en ?? ''));

// ─── KATEGORİLER ────────────────────────────────────────────────────────────

export const TRAVMA_KATEGORILERI = {
  siddet: {
    ad: {
      tr: 'Şiddet ve Ölüm',
      en: 'Violence and Death',
      de: 'Gewalt und Tod',
    },
    aciklama: {
      tr: 'Fiziksel şiddet, cinayet, ölüm karşılaşması.',
      en: 'Physical violence, killing, encounter with death.',
      de: 'Körperliche Gewalt, Tötung, Begegnung mit dem Tod.',
    },
  },
  kayip: {
    ad: {
      tr: 'Kayıp ve Yas',
      en: 'Loss and Grief',
      de: 'Verlust und Trauer',
    },
    aciklama: {
      tr: 'Sevilen birinin kaybı, yas süreçleri.',
      en: 'Loss of a loved one, processes of mourning.',
      de: 'Verlust eines geliebten Menschen, Trauerprozesse.',
    },
  },
  ihanet: {
    ad: {
      tr: 'İhanet',
      en: 'Betrayal',
      de: 'Verrat',
    },
    aciklama: {
      tr: 'Güven ilişkilerinin kırılması, yakınlardan gelen darbe.',
      en: 'Breaking of trust, a blow from those close to you.',
      de: 'Bruch von Vertrauensbeziehungen, ein Schlag von Nahestehenden.',
    },
  },
  cinsel: {
    ad: {
      tr: 'Cinsel Travma',
      en: 'Sexual Trauma',
      de: 'Sexuelles Trauma',
    },
    aciklama: {
      tr: 'Cinsel şiddet veya istismar konuları.',
      en: 'Themes of sexual violence or abuse.',
      de: 'Themen sexueller Gewalt oder sexuellen Missbrauchs.',
    },
  },
  zihinsel_kirilma: {
    ad: {
      tr: 'Zihinsel Kırılma',
      en: 'Mental Break',
      de: 'Mentaler Zusammenbruch',
    },
    aciklama: {
      tr: 'Halüsinasyon, paranoya, gerçeklikle bağın kopması.',
      en: 'Hallucination, paranoia, a break with reality.',
      de: 'Halluzination, Paranoia, der Bruch mit der Realität.',
    },
  },
  cocukluk: {
    ad: {
      tr: 'Çocukluk Travması',
      en: 'Childhood Trauma',
      de: 'Kindheitstrauma',
    },
    aciklama: {
      tr: 'Erken yaş yaralanmaları, çocukluğa ait acılar.',
      en: 'Early-life wounds, pains belonging to childhood.',
      de: 'Verletzungen aus frühen Jahren, Schmerzen der Kindheit.',
    },
  },
  ahlaki_yara: {
    ad: {
      tr: 'Ahlaki Yara',
      en: 'Moral Injury',
      de: 'Moralische Verletzung',
    },
    aciklama: {
      tr: 'Vicdani çatışmalar, yapılmış olanın ağırlığı.',
      en: 'Conflicts of conscience, the weight of what has been done.',
      de: 'Gewissenskonflikte, das Gewicht des Getanen.',
    },
  },
  varolussal: {
    ad: {
      tr: 'Varoluşsal Kırılma',
      en: 'Existential Rupture',
      de: 'Existenzieller Bruch',
    },
    aciklama: {
      tr: 'Anlamsızlık, ölümlülük, varoluşun çöküşü.',
      en: 'Meaninglessness, mortality, the collapse of existence.',
      de: 'Sinnlosigkeit, Sterblichkeit, der Zusammenbruch der Existenz.',
    },
  },
};

// ─── YOĞUNLUK SEVİYELERİ ────────────────────────────────────────────────────

export const TRAVMA_SEVIYESI = {
  0: {
    ad: { tr: 'Yok', en: 'None', de: 'Keine' },
    aciklama: { tr: 'Travmatik içerik yok.', en: 'No traumatic content.', de: 'Kein traumatischer Inhalt.' },
  },
  1: {
    ad: { tr: 'Atıf', en: 'Reference', de: 'Bezug' },
    aciklama: {
      tr: 'Karakter olaya atıfta bulunuyor, doğrudan yaşamıyor.',
      en: 'The character refers to the event, does not directly live it.',
      de: 'Die Figur verweist auf das Ereignis, erlebt es nicht unmittelbar.',
    },
  },
  2: {
    ad: { tr: 'Tanıklık', en: 'Witness', de: 'Zeugenschaft' },
    aciklama: {
      tr: 'Karakter olaya tanık oluyor, içine giriyor.',
      en: 'The character witnesses the event, enters into it.',
      de: 'Die Figur wird Zeuge des Ereignisses, tritt in es ein.',
    },
  },
  3: {
    ad: { tr: 'İcra', en: 'Enactment', de: 'Vollzug' },
    aciklama: {
      tr: 'Karakter olayı doğrudan yaşıyor veya gerçekleştiriyor.',
      en: 'The character directly lives or carries out the event.',
      de: 'Die Figur erlebt oder vollzieht das Ereignis unmittelbar.',
    },
  },
};

// Geriye dönük uyumluluk için alias
export const YOGUNLUK_SEVIYELERI = TRAVMA_SEVIYESI;

// ─── KATEGORİ ETİKETİ FORMATLAMA ────────────────────────────────────────────

export function travmaEtiketleri(kategoriler, dil = 'tr') {
  if (!kategoriler || !kategoriler.length) return [];
  return kategoriler.map((k) => pick(TRAVMA_KATEGORILERI[k]?.ad, dil) || k);
}

// ─── SAHNE UYARISI ──────────────────────────────────────────────────────────
//
// Bir sahne / egzersiz / boşluk için oyuncuya gösterilecek uyarıyı üretir.
// KİLİT DEĞİL — gate yok, profil yok. Yalnızca bilgilendirme.
//
// Dönüş:
//   { uyari: false, seviye: 0, kategoriler: [], mesaj: null }   → uyarı yok
//   { uyari: true,  seviye, kategoriler, mesaj }                → bilgilendirme

const UYARI = {
  temaPre: { tr: ' Temalar: ', en: ' Themes: ', de: ' Themen: ' },
  s1: {
    tr: 'Bu sahne bir geçmişe atıfta bulunuyor — doğrudan yaşanmıyor, anılıyor.',
    en: 'This scene refers to a past — it is not directly lived, but recalled.',
    de: 'Diese Szene verweist auf eine Vergangenheit — sie wird nicht unmittelbar erlebt, sondern erinnert.',
  },
  s2: {
    tr: 'Bu sahne bir olaya tanıklık ediyor.',
    en: 'This scene witnesses an event.',
    de: 'Diese Szene wird Zeuge eines Ereignisses.',
  },
  s2sonra: {
    tr: ' Sahne sonrası kısa bir topraklanma anı önerilir.',
    en: ' A brief grounding moment after the scene is recommended.',
    de: ' Nach der Szene wird ein kurzer Erdungsmoment empfohlen.',
  },
  s3: {
    tr: 'Bu sahne yoğun bir katmanda işliyor.',
    en: 'This scene works on an intense layer.',
    de: 'Diese Szene arbeitet auf einer intensiven Ebene.',
  },
  s3sonra: {
    tr: ' Sessiz bir alan ve hazırlık zamanı ayır; sahne sonrası topraklanma önerilir.',
    en: ' Set aside a quiet space and time to prepare; grounding after the scene is recommended.',
    de: ' Nimm dir einen stillen Raum und Zeit zur Vorbereitung; Erdung nach der Szene wird empfohlen.',
  },
};

export function sahneUyarisi(sahne, dil = 'tr') {
  const seviye = sahne?.travmaSeviyesi || 0;
  const kategoriler = sahne?.travmaKategorileri || [];

  if (seviye === 0) {
    return { uyari: false, seviye: 0, kategoriler: [], mesaj: null };
  }

  const etiketler = travmaEtiketleri(kategoriler, dil);
  const temalar = etiketler.length ? etiketler.join(', ') : null;
  const temaCumlesi = temalar ? `${pick(UYARI.temaPre, dil)}${temalar}.` : '';

  if (seviye === 1) {
    return {
      uyari: true,
      seviye,
      kategoriler,
      mesaj: `${pick(UYARI.s1, dil)}${temaCumlesi}`,
    };
  }

  if (seviye === 2) {
    return {
      uyari: true,
      seviye,
      kategoriler,
      mesaj: `${pick(UYARI.s2, dil)}${temaCumlesi}${pick(UYARI.s2sonra, dil)}`,
    };
  }

  // seviye === 3
  return {
    uyari: true,
    seviye,
    kategoriler,
    mesaj: `${pick(UYARI.s3, dil)}${temaCumlesi}${pick(UYARI.s3sonra, dil)}`,
  };
}

// ─── TOPRAKLANMA TETİKLEYİCİSİ ──────────────────────────────────────────────
//
// Yoğunluk 2 (Tanıklık) ve 3 (İcra) sahneler sonrası topraklanma önerilir.
// Kategori- ve profil-bağımsız (Karar 21 / Spine §3.4).

export function topraklanmaGerekli(yogunluk) {
  return (yogunluk || 0) >= 2;
}
