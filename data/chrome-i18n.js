// data/chrome-i18n.js
// ITC Actor's Gym — Ortak chrome sözlüğü (TR/EN).
//
// Sayfa-ötesi paylaşılan etiketler: global nav + ana sayfa.
// Karakter-spesifik içerik (Willy/Hamlet) ayrı sözlüklerde kalır
// (willy-i18n.js, hamlet-i18n.js); bu sözlük yalnız chrome içindir.
//
// Kanon notları:
// - Spine §3.17: rakam yasak ("1000'i aşkın oyuncu" → "20 yılı aşkın
//   araştırma ve pratiğin sentezi").
// - Karar 16: kurucu bağlamında "Beyti & Filiz" (&), teknik formül × yalnız
//   Spine §3.13 eş-eğitmenlik başlığında.
// - Karar 31: oyuncu-yüzü dil; "AI Dış Ses" → "Dış Ses".
// - EN çeviriler: AI taslak — Beyti/öğrenci QA'sıyla doğrulanacak (Karar 33/28).

const chromeI18n = {
  tr: {
    nav: {
      marka: 'Inside The Character',
      kalibrasyon: 'Kalibrasyon',
      antrenman: 'Antrenman',
      kulis: 'Kulis',
      profil: 'Profil',
      hakkimizda: 'Hakkımızda',
      giris: 'Giriş Yap',
      cikis: 'Çıkış',
    },
    anaSayfa: {
      // Hero
      ustEtiket: "ITC Yöntemi · 2005'ten bu yana",
      heroBaslik1: 'Karakterin zihnine gir.',
      heroBaslik2: 'Sahici ol.',
      heroAlt:
        'Oyuncunun zihinsel haritasını, bedensel hafızasını ve psikolojik derinliğini merkeze alan özgün bir oyunculuk metodolojisi.',
      ctaBasla: 'Başla →',
      ctaUye: "Modül I'e Git →",
      ctaUyeKalibrasyonDevam: 'Kalibrasyonu Tamamla →',
      ctaUyeKarakter: 'Karaktere Git →',
      // Vuruş cümlesi
      vurusGelenek: '"ne yapacağını"',
      vurusITC: '"nasıl düşündüğünü"',
      vurusGelenekOnce: 'Geleneksel yöntemler oyuncuya ',
      vurusGelenekSonra: ' söyler.',
      vurusITCOnce: 'ITC ise ',
      vurusITCSonra: ' sorar.',
      // Üç modül
      yapiEtiket: 'Yapı',
      yapiBaslik: 'Üç Modül',
      mod1Roma: 'I',
      mod1Baslik: 'Kendini Tanı',
      mod1Altyazi: 'Kalibrasyon',
      mod1Metin:
        'Üç kısa test ile duyusal kanal tercihin, psikolojik haritan ve kişilik tipin çıkar. Bu veriler sonraki modüllerde sessizce kişiselleştirme yapar — meta-açıklama yok, sadece sana uyan akış.',
      mod1Meta: '3 test · ~15 dakika',
      mod2Roma: 'II',
      mod2Baslik: 'Karakterini İnşa Et',
      mod2Altyazi: 'Antrenman',
      mod2Metin:
        'Dört klasik karakter — Hamlet, Macbeth, Willy Loman, Biff Loman. Her karakter için değiştirilemez doğrular, oyun öncesi yaşam, zaman çizgisi, yazarın çerçevesi (beş tercih) ve senin çerçeven (boşluklar).',
      mod2Meta: '4 klasik karakter · ~25 dk/oturum',
      mod3Roma: 'III',
      mod3Baslik: 'Sahnele',
      mod3Altyazi: 'Yolculuk',
      mod3Metin:
        'Karakterin pre-senaryo anından post-senaryoya kadar tüm yaşamını sıralı tek seansta sesli yönlendirmeyle dolaşan bir modül. Antrenmandan sahneye çıkış.',
      mod3Meta: '~110 dakika · Dış Ses · Yakında',
      // Ekip
      ekipEtiket: "2005'ten Bu Yana",
      ekipBaslik: 'İki Eş Kurucu',
      beytiEtiket: 'Oyuncu · Eğitmen',
      beytiAd: 'Beyti Engin',
      beytiMetin:
        "Afife Ödüllü oyuncu. ITC metodolojisini 2005'te Filiz Kaya Ataklı ile kurdu; 20 yılı aşkın araştırma ve pratiğin sentezi.",
      filizEtiket: 'Klinik Psikolog',
      filizAd: 'Filiz Kaya Ataklı',
      filizMetin:
        "Gottman Master Trainer. ITC'nin klinik altyapısının mimarı, yöntemin eş kurucusu.",
      hakkindaCta: 'Hakkımızda Daha Fazla →',
      // Kapanış
      kapanisBaslikAnonim: 'Hazır mısın?',
      kapanisBaslikUye: 'Devam edelim.',
      kapanisAltAnonim: 'Önce kalibrasyon. Üç kısa test, on beş dakika.',
      kapanisAltUyeKalibrasyonEksik: 'Kalibrasyon yarım kaldı. Birkaç dakika içinde tamamlayabilirsin.',
      kapanisAltUyeTam: 'Sıra karakterde.',
      ctaKapanisAnonim: 'Kayıt Ol / Giriş Yap →',
      // Footer
      footerSlogan: "2005'ten bu yana",
    },
  },
  en: {
    nav: {
      marka: 'Inside The Character',
      kalibrasyon: 'Calibration',
      antrenman: 'Training',
      kulis: 'Backstage',
      profil: 'Profile',
      hakkimizda: 'About',
      giris: 'Sign in',
      cikis: 'Sign out',
    },
    anaSayfa: {
      ustEtiket: 'The ITC Method · since 2005',
      heroBaslik1: "Enter the character's mind.",
      heroBaslik2: 'Be truthful.',
      heroAlt:
        "An original acting methodology centered on the actor's mental map, embodied memory, and psychological depth.",
      ctaBasla: 'Begin →',
      ctaUye: 'Go to Module I →',
      ctaUyeKalibrasyonDevam: 'Finish Calibration →',
      ctaUyeKarakter: 'Go to Character →',
      vurusGelenek: '"what to do."',
      vurusITC: '"how they think."',
      vurusGelenekOnce: 'Traditional methods tell the actor ',
      vurusGelenekSonra: '',
      vurusITCOnce: 'ITC asks ',
      vurusITCSonra: '',
      yapiEtiket: 'Structure',
      yapiBaslik: 'Three Modules',
      mod1Roma: 'I',
      mod1Baslik: 'Know Yourself',
      mod1Altyazi: 'Calibration',
      mod1Metin:
        'Three short tests reveal your sensory channel, psychological map, and personality type. These data quietly personalize what follows — no meta-explanation, just a flow that fits you.',
      mod1Meta: '3 tests · ~15 minutes',
      mod2Roma: 'II',
      mod2Baslik: 'Build Your Character',
      mod2Altyazi: 'Training',
      mod2Metin:
        "Four classical characters — Hamlet, Macbeth, Willy Loman, Biff Loman. For each: unchangeable truths, pre-play life, timeline, the author's frame (five choices), and your frame (the gaps).",
      mod2Meta: '4 classical characters · ~25 min/session',
      mod3Roma: 'III',
      mod3Baslik: 'Stage It',
      mod3Altyazi: 'Journey',
      mod3Metin:
        "A module that walks through the character's full life — pre-scenario to post-scenario — in one guided audio session. From training to the stage.",
      mod3Meta: '~110 minutes · Outer Voice · Coming soon',
      ekipEtiket: 'Since 2005',
      ekipBaslik: 'Two Co-Founders',
      beytiEtiket: 'Actor · Instructor',
      beytiAd: 'Beyti Engin',
      beytiMetin:
        "Afife Award-winning actor. Co-founded the ITC methodology with Filiz Kaya Ataklı in 2005 — a synthesis of over twenty years of research and practice.",
      filizEtiket: 'Clinical Psychologist',
      filizAd: 'Filiz Kaya Ataklı',
      filizMetin:
        "Gottman Master Trainer. Architect of ITC's clinical foundation, co-founder of the method.",
      hakkindaCta: 'More About Us →',
      kapanisBaslikAnonim: 'Ready?',
      kapanisBaslikUye: "Let's continue.",
      kapanisAltAnonim: 'Calibration first. Three short tests, fifteen minutes.',
      kapanisAltUyeKalibrasyonEksik: 'Your calibration is unfinished. You can complete it in a few minutes.',
      kapanisAltUyeTam: 'The character is next.',
      ctaKapanisAnonim: 'Sign Up / Sign In →',
      footerSlogan: 'since 2005',
    },
  },
};

export default chromeI18n;
