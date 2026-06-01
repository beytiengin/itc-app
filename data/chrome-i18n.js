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
      nasilCalisilir: 'Nasıl Çalışılır?',
      giris: 'Giriş Yap',
      cikis: 'Çıkış',
      menuAc: 'Menü',
      menuKapat: 'Menüyü Kapat',
      dilEtiket: 'Dil',
    },
    anaSayfa: {
      // Hero
      ustEtiket: "ITC Yöntemi · 2005'ten bu yana",
      heroBaslik1: 'Karakterin zihnine gir.',
      heroBaslik2: 'Sahici ol.',
      // Yon 2 hero: 3 satira kirilmis surum ("Karakterin / zihnine gir. / Sahici ol.")
      heroSatir1a: 'Karakterin',
      heroSatir1b: 'zihnine gir.',
      heroAlt:
        'Oyuncunun zihinsel haritasını, bedensel hafızasını ve psikolojik derinliğini merkeze alan özgün bir oyunculuk metodolojisi.',
      ctaBasla: 'Başla →',
      ctaUye: "Modül I'e Git →",
      ctaUyeKalibrasyonDevam: 'Kalibrasyonu Tamamla →',
      ctaUyeKarakter: 'Karaktere Git →',
      ctaUyeKaldiginYerden: 'Kaldığın yerden devam →',
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
      filizEtiket: 'Uzman Psikolog',
      filizAd: 'Filiz Kaya Ataklı',
      filizMetin:
        "Gottman Master Trainer. ITC'nin klinik altyapısının mimarı, yöntemin eş kurucusu.",
      hakkindaCta: 'Hakkımızda Daha Fazla →',
      // Kapanış
      kapanisBaslikAnonim: 'Hazır mısın?',
      kapanisBaslikUye: 'Devam edelim.',
      kapanisAltAnonim: 'Önce kalibrasyon — kısa bir akış.',
      kapanisAltUyeKalibrasyonEksik: 'Kalibrasyon yarım kaldı. Birkaç dakika içinde tamamlayabilirsin.',
      kapanisAltUyeTam: 'Sıra karakterde.',
      ctaKapanisAnonim: 'Kayıt Ol / Giriş Yap →',
      // Footer
      footerSlogan: "2005'ten bu yana",
    },
    karakterListesi: {
      ustEtiket: '02 — Antrenman Odası',
      baslik: 'Karakterler',
      intro: 'Her karakter ITC metodolojisiyle derinlemesine inşa edilmiştir. Çalışmak istediğin karakteri seç.',
      mizacBaslik: 'Mizaç',
      temaBaslik: 'Tema',
      rozetSeninCerceven: 'Senin Çerçeven',
      rozetZihinselAntrenman: 'Zihinsel Antrenman',
      yakindaEtiket: 'Yakında',
      devamEtiket: 'Devam Et',
      tamamlandi: 'Tamamlandı',
      basla: 'Başla',
      suAn: 'Şu an',
      istasyon: {
        kesfet: 'Oyun Öncesi Yaşam',
        haritala: 'Zaman Çizgisi',
        yorumla: 'Yazarın Çerçevesi',
        yarat: 'Senin Çerçeven',
      },
      tur: { Trajedi: 'Trajedi' },
      hamlet: {
        aciklama: 'Yas, ihanet ve varoluşsal sorgulama. Düşünce ile eylem arasında sıkışmış bir prensin görünmeyen yolculuğu.',
        mizac: ['empati yüksek', 'analiz yüksek', 'yas yorgunluğu'],
        tema: ['yas', 'intikam', 'yanılsama', 'varoluş', 'ihanet'],
      },
      willy: {
        aciklama: 'Yanılsama ve kimlik çöküşü. Geçmiş ile şimdinin aynı anda yaşandığı bir zihin.',
        mizac: ['yanılsamacı', 'zaman kayması', 'kimlik kırılması'],
        tema: ['yanılsama', 'kimlik', 'çöküş', 'baba-oğul'],
      },
      yakinda: [
        { ad: 'Macbeth',        yazar: 'William Shakespeare', aciklama: 'İktidar hırsı, suçluluk ve paranoyanın iç çöküşü.' },
        { ad: 'Biff Loman',     yazar: 'Arthur Miller',       aciklama: 'Babanın rüyasından uyanış. Kırılma ve özgürleşme arasında bir adamın gerçeği arama yolculuğu.' },
        { ad: 'Medea',          yazar: 'Euripides',           aciklama: 'Öfke, ihanet ve radikal eylem.' },
        { ad: 'Blanche DuBois', yazar: 'Tennessee Williams',  aciklama: 'Yanılsama kalkanı ve kırılganlık.' },
      ],
    },
    // İlk-giriş Eşik ekranı — sakin bir nefes anı (Karar 39, 31 May 2026).
    // Calm/Headspace deseni: tek nefes halkası + tek davetkâr satır + tek buton.
    // "Metot görünmez" — eşik mekanizmayı anlatmaz, sadece bir eşik hissi verir.
    esik: {
      ustEtiket: 'Eşik',
      davet: 'Derin bir nefes al.',
      altDavet: 'Acele yok.',
      buton: 'İçeri adım at →',
    },
    // Üç-modüllü omurga göstergesi — "neredeyim" hissi (Karar 39).
    // Kalibrasyon → Antrenman → Yolculuk yayı. Yüzde/streak YOK (psikolojik güvenlik).
    omurga: {
      kalibrasyon: 'Kalibrasyon',
      antrenman: 'Antrenman',
      yolculuk: 'Yolculuk',
      yakinda: 'Yakında',
    },

    // Workbook "neden çerçevesi" — Hamlet Workbook 2. baskı `bolum_i_tam.html`
    // açılış deseninin dijital karşılığı: 3 mikro-blok her karakter istasyonunda
    // yer alır (hub + 4 alt sayfa). Spine §3 ilke 3 ("metot görünmez") kanon
    // sınırı: rotayı ve amacı anlat, mekanizmayı anlatma.
    mikroBlok: {
      neredesin: 'Şu an neredesin',
      neYapacaksin: 'Ne yapacaksın',
      hatirla: 'Hatırla',
    },
    kulis: {
      hazirlaniyor: 'Hazırlanıyor…',
      etiket: 'Kulis',
      baslik: 'İz Bıraktıkların',
      intro: 'Çalıştığın karakteri seç — kaldığın yerden devam et.',
      bugun: 'Bugün',
      dun: 'Dün',
      gunOnce: 'gün önce',
      haftaOnce: 'hafta önce',
      ayOnce: 'ay önce',
      devamEt: 'Devam Et →',
      buAnaGit: 'Bu ana git →',
      ac: 'Aç →',

      // 1. Karakter seçimi
      karakterSecEtiket: 'Karakter',
      karakterDurumDokundun: 'dokundun',
      karakterDurumYok: '—',
      karakterDurumYakinda: 'yakında',

      // 2. Nerede Kaldın
      neredeKaldinEtiket: 'Nerede Kaldın',
      enSonUzerindeydim: 'En son şurada çalışıyordun:',
      siradakiDokunulmamis: 'Henüz dokunmadığın:',
      neredeKaldinBos: 'Bu karaktere henüz başlamadın.',
      elYazmasiniAc: 'El yazmasını aç →',
      karaktereGit: 'Karakter sayfasına git →',

      // 3. Zaman Çizgisi
      zamanCizgisiEtiket: 'Zaman Çizgisi',
      zamanCizgisiAltyazi: 'Oyun sırasıyla — dokunup ana git.',
      lejantSahneYazildi: 'Sahne · yazıldı',
      lejantSahneBos: 'Sahne · boş',
      lejantBoslukYazildi: 'Boşluk · yazıldı',
      lejantBoslukBos: 'Boşluk · boş',
      timelineDugumSahne: 'Sahne',
      timelineDugumBosluk: 'Boşluk',
      timelineBos: 'Bu karakterin zaman çizgisi henüz hazır değil.',

      // 4. Biriken Dosya
      birikenDosyaEtiket: 'Biriken Dosya',
      birikenDosyaBaslikOnce: 'Senin ',
      birikenDosyaBaslikSonra: "'in — kendi cümlelerinle.",
      birikenDosyaBos: 'Henüz boş. Yazdığında karakterin burada belirmeye devam edecek.',

      // 5. Sen ve Karakter
      senVeKarakterEtiketOnce: 'Sen ve ',
      acikKapinEtiket: 'Açık kapın',
      acikKapinBos: 'Kalibrasyonunu tamamladığında açık kapın burada belirir.',
      kapiBilissel: 'Bilişsel',
      kapiBedensel: 'Bedensel',
      kapiDuygusal: 'Duygusal',
      egilimEtiketOnce: '',
      egilimEtiketSonra: '\'de eğilimin',
      egilimSayim: 'boşluğa dokundun',
      egilimBos: 'Henüz boşluk yazmadın.',
      cerceveEtiketOnce: '',
      cerceveEtiketSonra: '\'nin çerçevesi',
      cerceveBos: 'Çerçeve verisi yok.',

      // 6. Desenler
      desenlerEtiket: 'Desenler · yakında',
      desenlerMetin: 'Yazdıkların çoğaldıkça kalibrasyonunla aralarındaki örüntü burada belirecek. (Modül III)',

      // Empty states
      emptyKalibrasyonEtiket: 'Önce Kalibrasyon',
      emptyKalibrasyonMetin:
        'Karakterlere geçmeden önce enstrümanını akort etmen gerek. Kalibrasyon, sana özel egzersiz dilini ve etik koruma seviyeni belirler.',
      emptyKalibrasyonCta: 'Kalibrasyona Git →',
    },
    hakkimizda: {
      // Hero — Spine §3.17: rakam yasak (eski "20 yıllık pratik" + "1000'i aşkın
      // oyuncu" ifadeleri çıkarıldı; tarihsel sayım yerine kanonik dil).
      heroUstEtiket: "Yöntem · 2005'ten bugüne",
      heroBaslik: 'Inside The Character',
      // Hero altyazi (TASLAK Beyti dogrulamali) — ana sayfa kopyasi yerine kimlik cumlesi.
      heroAlt1:
        "2005'ten bu yana geliştirilen; oyunculuk pedagojisi ile klinik psikolojiyi birleştiren bir yöntem. İki kurucu, iki ses, tek bir karakter çalışması anlayışı.",
      heroAlt2: '', // hakkimizda hero ikinci paragrafi kaldirildi (anasayfa vurusu ile tekrari kirildi)
      // Üç ilke
      ilkeUstEtiket: 'Üç İlke',
      ilkeBaslik: 'Yöntemin Temeli',
      ilke01Baslik: 'Psikolojik Güvenlik',
      ilke01Metin:
        'Karakter çalışırken oyuncuyu kendi yaralarına bakmaya zorlamayız. Yöntemin merkezinde oyuncunun duygusal güvenliği vardır.',
      ilke02Baslik: 'Bireysel Rota',
      ilke02Metin:
        'Aynı sahneye herkes aynı kapıdan girmez. Her oyuncuya kişiselleştirilmiş giriş kapıları sunulur.',
      ilke03Baslik: 'Bilimsel Altyapı',
      ilke03Metin:
        'Sezgi değil — yöntem. Nörobilim, psikoloji ve sahne pedagojisi üzerine inşa edilir, kendini günceller.',
      // Eş kurucular (Karar 20: simetrik unvan — "Eş Kurucu ve Eş Eğitmen";
      // Beyti her zaman önce; rakam yasak — "1000'i aşkın" çıkarıldı.)
      kurucuUstEtiket: 'İki Eş Kurucu',
      kurucuBaslik: "ITC'nin Arkasındaki İsimler",
      beytiEtiket: 'Eş Kurucu ve Eş Eğitmen',
      beytiAd: 'Beyti Engin',
      beytiBio1:
        "Afife Tiyatro Ödülü sahibi. Dostlar Tiyatrosu'ndan Bakırköy Belediye Tiyatroları'na, oradan Oyun Atölyesi'ne uzanan bir yolculukla, Türkiye tiyatrosunun çağdaş çizgisinde yer almıştır.",
      beytiBio2:
        'Nassim Soleimanpour\'un "White Rabbit Red Rabbit" eserini Türkiye\'de ilk kez sahneleyen cesur bir performansçıdır. 2025-26 sezonunda Rufus Norris yönetimindeki "Satıcının Ölümü" ve Nagihan Gürkan\'ın yönettiği "Güneşin Oğlu" ile oyunculuk kariyerine devam etmektedir.',
      beytiBio3:
        'ITC metodolojisini Filiz Kaya Ataklı ile birlikte 2005\'te kurdu ve o günden bu yana atölyeler, karakter çalışmaları ve birebir pratiklerle yöntemi geliştirmeye devam ediyor.',
      beytiAtolyeNot: 'Atölyeler · HMDK Stuttgart 2022 · Berlin Chubbuck Studio 2022-24',
      filizEtiket: 'Uzman Psikolog · Eş Kurucu ve Eş Eğitmen',
      filizAd: 'Filiz Kaya Ataklı',
      filizBio1:
        "İstanbul Üniversitesi Psikoloji Bölümü mezunu. Aynı üniversitede Adli Bilimler yüksek lisansını tamamladı. Çift ve Evlilik Terapisi eğitimlerini John ve Julie Gottman'dan alan Kaya Ataklı, Türkiye'nin Gottman Çift Terapisi Usta Eğitmenlerinden (Master Trainer) biridir.",
      filizBio2:
        "Meslek eğitimleri arasında Sensorimotor Psikoterapi, EMDR, PACT, Mental Training ve Duygu Odaklı Terapi yer alır. Psikoloji İstanbul'un kurucularındandır.",
      filizBio3:
        "Oyuncularla 'Karakter Tasarımı' odaklı çalışmalar yapmakta, oyunculuk ve performans geliştirme üzerine dünyanın çeşitli ülkelerinde eğitimler vermektedir. ITC metodolojisinin Beyti Engin ile birlikte kurucusu, klinik altyapısının mimarıdır.",
      // Tarihçe (Karar 31: "AI sesli" → "sesli")
      tarihceUstEtiket: "2005'ten Bugüne",
      tarihceBaslik: 'Yöntemin Yolculuğu',
      tarihceSimdi: 'şimdi',
      milestone: [
        { yil: '2005', baslik: 'İlk pratik', metin: 'Beyti Engin ve Filiz Kaya Ataklı, oyunculuk ile klinik psikolojinin kesişiminde çalışmaya başlar.' },
        { yil: '2010–2020', baslik: 'Atölye yılları', metin: 'Pozitif Atölye, çeşitli stüdyolar ve birebir çalışmalarla yöntem uygulanır, derinleşir.' },
        { yil: '2022', baslik: 'Kurumsal bağlantılar', metin: 'İlk HMDK Stuttgart atölyesi. Berlin Chubbuck Studio iki yıllık altı oturumluk atölye serisine davet.' },
        { yil: '2023–2024', baslik: 'Chubbuck Studio · Berlin', metin: 'Filiz Kaya Ataklı ile birlikte altı oturumluk atölye serisi, iki yıla yayılarak gerçekleştirildi.' },
        { yil: '2026', baslik: "ITC Actor's Gym", metin: "Yöntemin dijital sürümü beta'da. Modül III (sesli yolculuk) yakında. Yöntemin yazımı sürüyor.", aktif: true },
        { yil: '2026 · Eylül', baslik: 'Chubbuck Studio · Berlin', metin: "Berlin Chubbuck Studio'da yeni atölye." },
        { yil: '2027 · Ocak', baslik: 'HMDK Stuttgart', metin: '25–29 Ocak — kurumsal pilot.' },
      ],
      // Üç katman
      katmanUstEtiket: 'Yöntemin Üç Katmanı',
      katmanBaslik: 'ITC Ekosistemi',
      katmanIntro: 'ITC tek bir ürün değil — birbirini tamamlayan üç katman.',
      katmanlar: [
        { durum: 'Yakında', ad: 'Method Kitabı', altBaslik: 'Inside The Character', metin: '~320 sayfa kuramsal ve pratik kitap. Eğitmenler ve ileri oyuncular için yöntemin kavramsal otoritesi.' },
        { durum: 'Henüz yayınlanmadı', ad: 'Çalışma Kitapları', altBaslik: 'Hamlet · Willy Loman', metin: 'Tek bir karakter üzerinden yöntemin derinleştiği çalışma kitapları. Hamlet (314 sayfa, "Inside The Hamlet") ve Willy Loman çalışma kitabı hazır; henüz yayınlanmadı.' },
        { durum: 'Canlı Beta', ad: 'ITC App', altBaslik: "Actor's Gym", metin: 'Web uygulaması. Günlük antrenman yapan oyuncu için dijital pratik. Şu an okuduğun yer.', aktif: true },
      ],
      // Kurumsal
      kurumUstEtiket: 'Kurumsal Bağlantılar',
      kurumBaslik: 'Yöntemin Geçtiği Kurumlar',
      kurumlar: [
        { ad: 'HMDK Stuttgart', aciklama: 'Hochschule für Musik und Darstellende Kunst', not: 'Atölye · 2022 · Almanya' },
        { ad: 'Berlin Chubbuck Studio', aciklama: 'İki yıllık, altı atölye serisi', not: 'Atölye · 2022-24 · Almanya' },
        { ad: 'Pozitif Atölye', aciklama: "İstanbul'da uzun yıllar sürdürülen pratik", not: 'Stüdyo · 2010+ · Türkiye' },
      ],
      // İletişim + footer
      iletisimUstEtiket: 'İletişim',
      iletisimBaslik: 'Bize Ulaş',
      iletisimIntro:
        'ITC ile ilgili sorular, kurumsal işbirlikleri veya atölye talepleri için iletişime geçebilirsiniz.',
      kisiselSiteAciklama: "Beyti Engin'in kişisel web sitesi",
      footerSlogan: "ITC Yöntemi · 2005'ten bu yana",
    },
    // — Nasıl Çalışılır sayfası —
    nasilCalisilir: {
      navEtiket: 'Nasıl Çalışılır?',
      ncEtiket: 'Inside The Character · Rehber',
      ncBaslik: 'Nasıl Çalışılır?',
      ncGiris: 'Yöntemin ne olduğunu, üç modülün nasıl ilerlediğini ve uygulamayı nasıl kullanacağını burada bulursun.',
      ncAEtiket: 'A · Yöntem',
      ncAMetin: 'ITC, karakterin dışını taklit etmeye değil, iç yaşamını inşa etmeye odaklanır. Metnin yazmadığı anlar — sahneler arasındaki boşluklar — oyuncunun karakteri içeriden kurduğu yerdir. Bu boşluklarda oyuncu yalnızca yorumlayan değil, eş-yazardır.',
      ncBEtiket: 'B · Üç Modül',
      ncBBaslik: 'Kendini tanı, karakterini inşa et, sahnele.',
      ncCEtiket: 'C · Uygulama Akışı',
      ncCBaslik: 'Nereden başlarsın, nasıl ilerler?',
      ncC1Ad: 'Giriş',        ncC1Metin: 'Hesabını oluştur, çalışmaların sana özel kalsın.',
      ncC2Ad: 'Kalibrasyon',  ncC2Metin: 'Üç test — kendi giriş kapını bul. (~15 dk)',
      ncC3Ad: 'Karakter seç', ncC3Metin: 'Hamlet, Macbeth, Willy ya da Biff ile başla.',
      ncC4Ad: 'El yazması',   ncC4Metin: 'Sahneleri oku, aralarındaki boşlukları kendi sözcüklerinle doldur.',
      ncC5Ad: 'Kulis',        ncC5Metin: 'Yazdıkların birikir — karakter dosyan burada büyür.',
      ncC6Ad: 'Yolculuk',     ncC6Metin: 'Karakterin bütün yaşamını tek seansta sesli yönlendirmeyle dolaş.',
      ncDEtiket: 'D · Kimler İçin',
      ncD1Ad: 'Profesyonel oyuncular', ncD1Metin: 'Bir role hazırlanırken karakterin iç dünyasını sistemli kurmak için.',
      ncD2Ad: 'Oyunculuk öğrencileri', ncD2Metin: 'Kendi çalışma biçimini tanıyıp güçlendirmek için.',
      ncD3Ad: 'Eğitmenler',            ncD3Metin: 'Öğrencilerinin gelişimini izleyebilecekleri bir arayüz yakında. Oyuncunun yazdıkları varsayılan gizlidir; paylaşım oyuncunun seçimidir.',
      ncD4Ad: 'Yönetmenler',           ncD4Metin: 'Bir karakteri ya da prodüksiyonu derinlemesine okumak için.',
      ncEEtiket: 'E · Sık Sorulanlar',
      ncE1Q: 'ITC duygusal hafıza ya da substitution kullanır mı?',
      ncE1A: 'Hayır. ITC karakter-merkezlidir; senden kendi anılarını ya da yaşadıklarını karakterin yerine koymanı istemez. Bunun yerine karakterin kendi iç yaşamını — düşüncesini, geçmişini, boşluklarını — inşa edersin. Bu hem daha sürdürülebilir hem de daha güvenlidir.',
      ncE2Q: 'Yazdıklarım gizli mi? Verilerim ne oluyor?',
      ncE2A: 'Çalışmaların — kalibrasyon sonuçların, boşluklara yazdıkların — sana aittir ve varsayılan olarak özeldir. Bir eğitmenle paylaşım yalnızca senin seçiminle, opsiyonel olarak yapılır. Veri, oyuncunundur.',
      ncFCumle: 'Karakter, metnin sustuğu yerde başlar.',
      ncYakinda: 'Yakında',
    },
    profil: {
      hazirlaniyor: 'Hazırlanıyor…',
      enstrumanProfili: 'Enstrüman Profili',
      nedenBurada: 'Enstrümanına ve tercihlerine bakabileceğin yer.',
      // Yorum yüzü
      yorumYuzuEtiket: 'Okuma',
      yorumYuzuBosBaslik: 'Enstrümanın henüz okunmadı.',
      yorumYuzuBosMetin: 'Kalibrasyon, sana özel egzersiz dilini ve etik koruma seviyeni belirler.',
      yorumYuzuBosCta: 'Kalibrasyona Başla →',
      acikKapin: 'Açık kapın',
      karakterGirisi: 'Karaktere giriş eğilimin',
      calismaRegisterin: 'Çalışma registerin',
      enGucluAlan: 'En güçlü alanın',
      // Detay
      ayrintiliHaritalarEtiket: 'Ayrıntı',
      ayrintiliHaritalarBaslik: 'Sayı dökümü — dört harita',
      gorunum: 'Görünüm',
      gorunumYardim: "Karanlık mod uzun seans için. Krem mod Workbook'la aynı kâğıt sıcaklığında.",
      kalibrasyonaGit: 'Kalibrasyona Git',
      antrenmanOdasi: 'Antrenman Odası',
      kulisLink: 'Kulis · karakterlerle bıraktığın izler →',
    },
    giris: {
      basliGiris: 'Giriş Yap',
      basliKayit: 'Hesap Oluştur',
      altGiris: 'Enstrümanına dön.',
      altKayit: "Inside The Character'a katıl.",
      onayMesaji: 'Email adresine bir onay linki gönderdik. Onayladıktan sonra giriş yapabilirsin.',
      adZorunlu: 'Adını girmeden devam edemezsin.',
      emailOnaylanmadi: 'Email henüz onaylanmamış. Kayıt olurken gönderilen onay linkine tıkla.',
      emailSifreHatali: 'Email veya şifre hatalı.',
      girisBasarisiz: 'Giriş başarısız: ',
      googleBasarisiz: 'Google ile giriş başarısız: ',
      googleHataPrefix: 'Google girişi başarısız: ',
      placeholderAd: 'Adın',
      placeholderEmail: 'Email',
      placeholderSifre: 'Şifre',
      veya: 'veya',
      bekle: 'Bekle...',
      googleIleDevam: 'Google ile Devam Et',
      hesabinYokMu: 'Henüz hesabın yok mu?',
      hesapOlusturCta: 'Hesap Oluştur →',
      hesabinVarMi: 'Zaten hesabın var mı?',
      girisYapGeri: '← Giriş Yap',
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
      nasilCalisilir: 'How It Works',
      giris: 'Sign in',
      cikis: 'Sign out',
      menuAc: 'Menu',
      menuKapat: 'Close menu',
      dilEtiket: 'Language',
    },
    anaSayfa: {
      ustEtiket: 'The ITC Method · since 2005',
      heroBaslik1: "Enter the character's mind.",
      heroBaslik2: 'Be truthful.',
      // Direction 2 hero: 3-line split
      heroSatir1a: 'Enter the',
      heroSatir1b: "character's mind.",
      heroAlt:
        "An original acting methodology centered on the actor's mental map, embodied memory, and psychological depth.",
      ctaBasla: 'Begin →',
      ctaUye: 'Go to Module I →',
      ctaUyeKalibrasyonDevam: 'Finish Calibration →',
      ctaUyeKarakter: 'Go to Character →',
      ctaUyeKaldiginYerden: 'Continue where you left off →',
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
      filizEtiket: 'Psychologist',
      filizAd: 'Filiz Kaya Ataklı',
      filizMetin:
        "Gottman Master Trainer. Architect of ITC's clinical foundation, co-founder of the method.",
      hakkindaCta: 'More About Us →',
      kapanisBaslikAnonim: 'Ready?',
      kapanisBaslikUye: "Let's continue.",
      kapanisAltAnonim: 'Calibration first — a short flow.',
      kapanisAltUyeKalibrasyonEksik: 'Your calibration is unfinished. You can complete it in a few minutes.',
      kapanisAltUyeTam: 'The character is next.',
      ctaKapanisAnonim: 'Sign Up / Sign In →',
      footerSlogan: 'since 2005',
    },
    karakterListesi: {
      ustEtiket: '02 — Training Room',
      baslik: 'Characters',
      intro: 'Each character is built in depth through the ITC methodology. Choose the one you want to work with.',
      mizacBaslik: 'Temperament',
      temaBaslik: 'Theme',
      rozetSeninCerceven: 'Your Frame',
      rozetZihinselAntrenman: 'Mental Training',
      yakindaEtiket: 'Coming soon',
      devamEtiket: 'Continue',
      tamamlandi: 'Completed',
      basla: 'Begin',
      suAn: 'Now',
      istasyon: {
        kesfet: 'Pre-Play Life',
        haritala: 'Timeline',
        yorumla: "Author's Frame",
        yarat: 'Your Frame',
      },
      tur: { Trajedi: 'Tragedy' },
      hamlet: {
        aciklama: "Mourning, betrayal, and existential questioning. The invisible journey of a prince caught between thought and action.",
        mizac: ['high empathy', 'high analysis', 'grief fatigue'],
        tema: ['grief', 'revenge', 'illusion', 'existence', 'betrayal'],
      },
      willy: {
        aciklama: 'Illusion and identity collapse. A mind where past and present are lived at the same time.',
        mizac: ['illusionist', 'time slippage', 'identity fracture'],
        tema: ['illusion', 'identity', 'collapse', 'father-son'],
      },
      yakinda: [
        { ad: 'Macbeth',        yazar: 'William Shakespeare', aciklama: 'The inner collapse driven by ambition, guilt, and paranoia.' },
        { ad: 'Biff Loman',     yazar: 'Arthur Miller',       aciklama: "Awakening from the father's dream. A man's search for truth between breakdown and liberation." },
        { ad: 'Medea',          yazar: 'Euripides',           aciklama: 'Rage, betrayal, and radical action.' },
        { ad: 'Blanche DuBois', yazar: 'Tennessee Williams',  aciklama: 'The shield of illusion and fragility.' },
      ],
    },
    esik: {
      ustEtiket: 'Threshold',
      davet: 'Take a deep breath.',
      altDavet: 'No rush.',
      buton: 'Step inside →',
    },
    omurga: {
      kalibrasyon: 'Calibration',
      antrenman: 'Training',
      yolculuk: 'Journey',
      yakinda: 'Coming soon',
    },
    mikroBlok: {
      neredesin: 'Where you are now',
      neYapacaksin: 'What you will do',
      hatirla: 'Remember',
    },
    kulis: {
      hazirlaniyor: 'Loading…',
      etiket: 'Backstage',
      baslik: 'Traces You Left',
      intro: 'Pick the character you are working on — continue where you left off.',
      bugun: 'Today',
      dun: 'Yesterday',
      gunOnce: 'days ago',
      haftaOnce: 'weeks ago',
      ayOnce: 'months ago',
      devamEt: 'Continue →',
      buAnaGit: 'Go to this moment →',
      ac: 'Open →',

      // 1. Character selection
      karakterSecEtiket: 'Character',
      karakterDurumDokundun: 'touched',
      karakterDurumYok: '—',
      karakterDurumYakinda: 'soon',

      // 2. Where you left off
      neredeKaldinEtiket: 'Where You Left Off',
      enSonUzerindeydim: 'You were last working on:',
      siradakiDokunulmamis: 'Untouched so far:',
      neredeKaldinBos: "You haven't started with this character yet.",
      elYazmasiniAc: 'Open the manuscript →',
      karaktereGit: 'Go to the character page →',

      // 3. Timeline
      zamanCizgisiEtiket: 'Timeline',
      zamanCizgisiAltyazi: 'In play order — touch and go to that moment.',
      lejantSahneYazildi: 'Scene · written',
      lejantSahneBos: 'Scene · empty',
      lejantBoslukYazildi: 'Gap · written',
      lejantBoslukBos: 'Gap · empty',
      timelineDugumSahne: 'Scene',
      timelineDugumBosluk: 'Gap',
      timelineBos: "This character's timeline isn't ready yet.",

      // 4. Accruing File
      birikenDosyaEtiket: 'Accruing File',
      birikenDosyaBaslikOnce: 'Your ',
      birikenDosyaBaslikSonra: ' — in your own sentences.',
      birikenDosyaBos: "Still empty. As you write, your character will keep appearing here.",

      // 5. You and the character
      senVeKarakterEtiketOnce: 'You and ',
      acikKapinEtiket: 'Your open door',
      acikKapinBos: 'Your open door will appear here once your calibration is complete.',
      kapiBilissel: 'Cognitive',
      kapiBedensel: 'Bodily',
      kapiDuygusal: 'Emotional',
      egilimEtiketOnce: 'Your leaning in ',
      egilimEtiketSonra: '',
      egilimSayim: 'gaps touched',
      egilimBos: "You haven't written any gaps yet.",
      cerceveEtiketOnce: '',
      cerceveEtiketSonra: "'s frame",
      cerceveBos: 'No frame data.',

      // 6. Patterns
      desenlerEtiket: 'Patterns · soon',
      desenlerMetin: 'As you write more, the pattern between your calibration and your writing will appear here. (Module III)',

      // Empty states
      emptyKalibrasyonEtiket: 'Calibration First',
      emptyKalibrasyonMetin:
        'Before you cross to the characters, your instrument needs tuning. Calibration sets the exercise language and ethical protection that fit you.',
      emptyKalibrasyonCta: 'Go to Calibration →',
    },
    hakkimizda: {
      heroUstEtiket: 'The Method · since 2005',
      heroBaslik: 'Inside The Character',
      // Hero subtitle (DRAFT — Beyti to verify) — identity sentence, not the homepage echo.
      heroAlt1:
        'A method developed since 2005, uniting acting pedagogy with clinical psychology. Two founders, two voices, one way of working on character.',
      heroAlt2: '', // hakkimizda hero second paragraph removed (homepage punchline echo broken)
      ilkeUstEtiket: 'Three Principles',
      ilkeBaslik: 'The Foundation of the Method',
      ilke01Baslik: 'Psychological Safety',
      ilke01Metin:
        "When working on a character, we do not force the actor to look into their own wounds. The actor's emotional safety is at the center of the method.",
      ilke02Baslik: 'Individual Route',
      ilke02Metin:
        'Not everyone enters the same scene through the same door. Each actor is offered a personalized set of entry points.',
      ilke03Baslik: 'Scientific Foundation',
      ilke03Metin:
        'Not intuition — method. Built on neuroscience, psychology, and stage pedagogy; constantly updated.',
      kurucuUstEtiket: 'Two Co-Founders',
      kurucuBaslik: 'The Names Behind ITC',
      beytiEtiket: 'Co-Founder & Co-Instructor',
      beytiAd: 'Beyti Engin',
      beytiBio1:
        "Recipient of the Afife Theater Award. From Dostlar Theater to Bakırköy Municipal Theaters and onward to Oyun Atölyesi, his path runs through the contemporary line of Turkish theater.",
      beytiBio2:
        'A daring performer who staged Nassim Soleimanpour\'s "White Rabbit Red Rabbit" for the first time in Turkey. In the 2025–26 season he continues his acting career in "Death of a Salesman" directed by Rufus Norris, and in "Son of the Sun" directed by Nagihan Gürkan.',
      beytiBio3:
        "He co-founded the ITC methodology with Filiz Kaya Ataklı in 2005 and has been developing it ever since through workshops, character work, and one-on-one practice.",
      beytiAtolyeNot: 'Workshops · HMDK Stuttgart 2022 · Berlin Chubbuck Studio 2022–24',
      filizEtiket: 'Psychologist · Co-Founder & Co-Instructor',
      filizAd: 'Filiz Kaya Ataklı',
      filizBio1:
        "Graduate of Istanbul University, Department of Psychology, with a master's in Forensic Sciences from the same institution. Trained in Couples and Marital Therapy by John and Julie Gottman, she is one of Turkey's Gottman Master Trainers in couples therapy.",
      filizBio2:
        "Her professional training also includes Sensorimotor Psychotherapy, EMDR, PACT, Mental Training, and Emotion-Focused Therapy. She is a co-founder of Psikoloji İstanbul.",
      filizBio3:
        "She works with actors on 'Character Design' and teaches acting and performance development in various countries around the world. She co-founded the ITC methodology with Beyti Engin and is the architect of its clinical foundation.",
      tarihceUstEtiket: 'Since 2005',
      tarihceBaslik: "The Method's Journey",
      tarihceSimdi: 'now',
      milestone: [
        { yil: '2005', baslik: 'First practice', metin: 'Beyti Engin and Filiz Kaya Ataklı begin working at the intersection of acting and clinical psychology.' },
        { yil: '2010–2020', baslik: 'The workshop years', metin: 'Through Pozitif Atölye, various studios, and one-on-one work, the method is practiced and deepened.' },
        { yil: '2022', baslik: 'Institutional bridges', metin: 'First HMDK Stuttgart workshop. Invitation to Berlin Chubbuck Studio for a two-year, six-session series.' },
        { yil: '2023–2024', baslik: 'Chubbuck Studio · Berlin', metin: 'A six-session workshop series, co-facilitated with Filiz Kaya Ataklı, carried out across two years.' },
        { yil: '2026', baslik: "ITC Actor's Gym", metin: 'The digital edition of the method is live in beta. Module III (audio journey) coming soon. The method is still being written.', aktif: true },
        { yil: '2026 · September', baslik: 'Chubbuck Studio · Berlin', metin: 'A new workshop at Berlin Chubbuck Studio.' },
        { yil: '2027 · January', baslik: 'HMDK Stuttgart', metin: 'January 25–29 — institutional pilot.' },
      ],
      katmanUstEtiket: 'The Three Layers of the Method',
      katmanBaslik: 'The ITC Ecosystem',
      katmanIntro: 'ITC is not a single product — three layers complete one another.',
      katmanlar: [
        { durum: 'Coming soon', ad: 'Method Book', altBaslik: 'Inside The Character', metin: '~320-page theoretical and practical book. The conceptual authority of the method for instructors and advanced actors.' },
        { durum: 'Not yet published', ad: 'Workbooks', altBaslik: 'Hamlet · Willy Loman', metin: 'Workbooks that deepen the method through a single character. The Hamlet workbook (314 pages, "Inside The Hamlet") and a Willy Loman workbook are ready; not yet published.' },
        { durum: 'Live Beta', ad: 'ITC App', altBaslik: "Actor's Gym", metin: 'Web application. Digital practice for the actor who trains daily. The page you are reading right now.', aktif: true },
      ],
      kurumUstEtiket: 'Institutional Bridges',
      kurumBaslik: 'Where the Method Has Traveled',
      kurumlar: [
        { ad: 'HMDK Stuttgart', aciklama: 'Hochschule für Musik und Darstellende Kunst', not: 'Workshop · 2022 · Germany' },
        { ad: 'Berlin Chubbuck Studio', aciklama: 'A two-year series of six workshops', not: 'Workshop · 2022–24 · Germany' },
        { ad: 'Pozitif Atölye', aciklama: 'A long-running practice in Istanbul', not: 'Studio · 2010+ · Turkey' },
      ],
      iletisimUstEtiket: 'Contact',
      iletisimBaslik: 'Get in Touch',
      iletisimIntro:
        'You can reach out for questions about ITC, institutional collaborations, or workshop requests.',
      kisiselSiteAciklama: "Beyti Engin's personal website",
      footerSlogan: 'The ITC Method · since 2005',
    },
    // — How It Works page (TASLAK EN — Beyti/FKA reviewing) —
    nasilCalisilir: {
      navEtiket: 'How It Works',
      ncEtiket: 'Inside The Character · Guide',
      ncBaslik: 'How It Works',
      ncGiris: "Here you'll find what the method is, how the three modules unfold, and how to use the app.",
      ncAEtiket: 'A · The Method',
      ncAMetin: "ITC focuses not on imitating a character's surface but on building their inner life. The moments the text leaves unwritten — the gaps between scenes — are where the actor constructs the character from within. In these gaps the actor is not only an interpreter but a co-author.",
      ncBEtiket: 'B · Three Modules',
      ncBBaslik: 'Know yourself, build your character, stage it.',
      ncCEtiket: 'C · How the App Flows',
      ncCBaslik: 'Where you start, how it unfolds',
      ncC1Ad: 'Sign in',           ncC1Metin: 'Create your account; your work stays private to you.',
      ncC2Ad: 'Calibration',       ncC2Metin: 'Three tests — find your own way in. (~15 min)',
      ncC3Ad: 'Choose a character',ncC3Metin: 'Begin with Hamlet, Macbeth, Willy, or Biff.',
      ncC4Ad: 'The manuscript',    ncC4Metin: 'Read the scenes; fill the gaps between them in your own words.',
      ncC5Ad: 'Backstage',         ncC5Metin: 'What you write accumulates — your character file grows here.',
      ncC6Ad: 'The Journey',       ncC6Metin: "Move through the character's whole life in one guided, voiced session.",
      ncDEtiket: "D · Who It's For",
      ncD1Ad: 'Professional actors', ncD1Metin: "To build a character's inner world systematically while preparing for a role.",
      ncD2Ad: 'Acting students',     ncD2Metin: 'To recognize and strengthen your own way of working.',
      ncD3Ad: 'Instructors',         ncD3Metin: "An interface to follow their students' progress, coming soon. What the actor writes is private by default; sharing is the actor's choice.",
      ncD4Ad: 'Directors',           ncD4Metin: 'To read a character or a production in depth.',
      ncEEtiket: 'E · FAQ',
      ncE1Q: 'Does ITC use emotional memory or substitution?',
      ncE1A: "No. ITC is character-centered; it does not ask you to put your own memories or experiences in place of the character's. Instead you build the character's own inner life — their thought, their past, their gaps. This is both more sustainable and safer.",
      ncE2Q: 'Is what I write private? What happens to my data?',
      ncE2A: "Your work — your calibration results, what you write into the gaps — belongs to you and is private by default. Sharing with an instructor happens only by your choice. The data is the actor's.",
      ncFCumle: 'The character begins where the text falls silent.',
      ncYakinda: 'Coming soon',
    },
    profil: {
      hazirlaniyor: 'Loading…',
      enstrumanProfili: 'Instrument Profile',
      nedenBurada: 'Where you can look at your instrument and preferences.',
      // Reading face
      yorumYuzuEtiket: 'Reading',
      yorumYuzuBosBaslik: 'Your instrument has not been read yet.',
      yorumYuzuBosMetin: 'Calibration sets the exercise language and ethical protection that fit you.',
      yorumYuzuBosCta: 'Start Calibration →',
      acikKapin: 'Your open door',
      karakterGirisi: 'Your way into the character',
      calismaRegisterin: 'Your working register',
      enGucluAlan: 'Your strongest area',
      // Detail
      ayrintiliHaritalarEtiket: 'Detail',
      ayrintiliHaritalarBaslik: 'Number breakdown — four maps',
      gorunum: 'Appearance',
      gorunumYardim: "Dark mode for long sessions. Cream mode matches the Workbook's paper warmth.",
      kalibrasyonaGit: 'Go to Calibration',
      antrenmanOdasi: 'Training Room',
      kulisLink: 'Backstage · the traces you left with the characters →',
    },
    giris: {
      basliGiris: 'Sign in',
      basliKayit: 'Create Account',
      altGiris: 'Return to your instrument.',
      altKayit: 'Join Inside The Character.',
      onayMesaji: "We've sent a confirmation link to your email. Once confirmed, you can sign in.",
      adZorunlu: "You can't continue without entering your name.",
      emailOnaylanmadi: "Email not yet confirmed. Click the confirmation link sent during signup.",
      emailSifreHatali: 'Email or password is incorrect.',
      girisBasarisiz: 'Sign-in failed: ',
      googleBasarisiz: 'Google sign-in failed: ',
      googleHataPrefix: 'Google sign-in failed: ',
      placeholderAd: 'Your name',
      placeholderEmail: 'Email',
      placeholderSifre: 'Password',
      veya: 'or',
      bekle: 'Wait...',
      googleIleDevam: 'Continue with Google',
      hesabinYokMu: "Don't have an account yet?",
      hesapOlusturCta: 'Create Account →',
      hesabinVarMi: 'Already have an account?',
      girisYapGeri: '← Sign in',
    },
  },
};

export default chromeI18n;
