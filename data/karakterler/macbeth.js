// data/karakterler/macbeth.js
// ITC Actor's Gym — Macbeth karakter verisi
//
// Bu dosya sadece veridir, JSX içermez.
// Diğer karakterler (hamlet.js, willy.js, biff.js) aynı yapıyı kullanır.

const macbeth = {
  // ─── KİMLİK ───────────────────────────────────────────────────────────────

  id: 'macbeth',
  ad: 'Macbeth',
  oyun: 'Macbeth',
  yazar: 'William Shakespeare',
  donem: "1600'ler",
  tur: 'Trajedi',
  tip: 'ENTJ', // Karakterin baskın MBTI tipi — Gap Analizi için
  ozet:
    "İktidar hırsı, suçluluk ve paranoya. İskoçya'nın en cesur generali — ve en büyük hainlerinden biri.",
  etiketler: ['Trajedi', 'Şiddet', 'İktidar', 'Paranoya'],

  // ─── BASELINE ─────────────────────────────────────────────────────────────

  baseline: {
    ad: 'Savaş Sonrası',
    aciklama:
      'Savaş zaferinin hemen ardından, cadılarla karşılaşmadan önce. Her şey hâlâ mümkün. Henüz general — kral değil, katil değil.',
  },

  // ─── KRİTİK İLİŞKİLER ─────────────────────────────────────────────────────

  iliskiler: ['Lady Macbeth', 'Banquo', 'Duncan', 'Cadılar', 'Macduff'],

  // ─── DEĞİŞTİRİLEMEZ DOĞRULAR ──────────────────────────────────────────────

  dogrular: [
    { kategori: 'Kimlik', madde: "Macbeth, İskoçya'nın en cesur generalidir." },
    { kategori: 'Kimlik', madde: "Kral Duncan'ın akrabasıdır — hem askeri hem misafir." },
    { kategori: 'Bilgi', madde: 'Cadıların kehanetini duydu: kral olacak.' },
    { kategori: 'Bilgi', madde: "Banquo'nun çocuklarının kral olacağını biliyor." },
    { kategori: 'Eylem', madde: "Duncan'ı uyurken öldürdü." },
    { kategori: 'Eylem', madde: "Banquo'yu öldürtmeyi emretti." },
    { kategori: 'Eylem', madde: "Macduff'ın ailesini katlettirdi." },
    { kategori: 'İlişki', madde: 'Lady Macbeth eşidir. Ve onu bu yola iten kişidir.' },
    { kategori: 'İlişki', madde: 'Banquo, en yakın dostuydu. Şimdi hayalet.' },
    { kategori: 'Son', madde: 'Hiçbir kadından doğmamış biri tarafından öldürüleceğini bildi.' },
    { kategori: 'Son', madde: "Lady Macbeth'in ölümünü savaş ortasında öğrendi." },
  ],

  // ─── 14 SAHNE — TRAVMA ETİKETLERİ İLE ─────────────────────────────────────

  sahneler: [
    {
      id: '1.3',
      perde: 1,
      label: 'Cadılarla karşılaşma',
      desc: 'Savaş sonrası ormanda üç cadı kehaneti verir: "Kral olacaksın."',
      icDurum: 'Şaşkınlık, hırs, inanmak isteme. Banquo\'ya döner: "İyi mi kötü mü bu?"',
      bosluk: 'Kehanetten sonra saraya kadar olan yolculuk. Aklında ne dönüyor?',
      travmaKategorileri: ['zihinsel_kirilma'],
      travmaSeviyesi: 1,
    },
    {
      id: '1.4',
      perde: 1,
      label: 'Cawdor unvanını alır',
      desc: 'Kral Duncan, Macbeth\'i Cawdor Beyi ilan eder. Kehanet gerçekleşmeye başladı.',
      icDurum: "Hız kazanan arzu. Ama bir engel var: Duncan'ın oğlu Malcolm veliahd seçildi.",
      bosluk: "Lady Macbeth'e mektup yazarken içinde ne hissetti?",
      travmaKategorileri: [],
      travmaSeviyesi: 0,
    },
    {
      id: '1.7',
      perde: 1,
      label: "Duncan'ı öldürme kararsızlığı",
      desc: 'Ziyafet sırasında odaya çekildi. Yalnız. Kendisiyle hesaplaşıyor.',
      icDurum: '"Bunu yapmamalıyım." Ama Lady Macbeth onu geri çekecek.',
      bosluk: 'O odada kaç dakika geçirdi? Hangi an geri döndü?',
      travmaKategorileri: ['ahlaki_yara'],
      travmaSeviyesi: 2,
    },
    {
      id: '2.1',
      perde: 2,
      label: 'Hançer halüsinasyonu',
      desc: 'Gece yarısı koridorda havada bir hançer görüntüsü. Gözleri mi, beyni mi?',
      icDurum: 'Zihin artık gerçekle kurguyu ayırt edemiyor. İlk kırılma.',
      bosluk: "Halüsinasyondan Duncan'ın odasına girişe kadar geçen süre.",
      travmaKategorileri: ['zihinsel_kirilma'],
      travmaSeviyesi: 2,
    },
    {
      id: '2.2',
      perde: 2,
      label: "Duncan'ı öldürür",
      desc: "Kral'ın odasına girdi. Geri döndü. Hançerler elinde.",
      icDurum: '"Bunu ben mi yaptım?" Ses duyuyor. "Uyku öldürüldü."',
      bosluk: 'Odadaki süre. Hiçbir sahne göstermiyor. Oyuncu dolduracak.',
      travmaKategorileri: ['siddet', 'ahlaki_yara'],
      travmaSeviyesi: 3,
    },
    {
      id: '2.3',
      perde: 2,
      label: 'Cinayeti gizleme',
      desc: 'Herkes uyandı. Macduff buldu. Macbeth hizmetçileri öldürür.',
      icDurum: 'Kontrol. Rol yapma. İlk performans: kral gibi davranmak.',
      bosluk: 'Lady Macbeth bayılınca ne düşündü?',
      travmaKategorileri: ['ahlaki_yara'],
      travmaSeviyesi: 2,
    },
    {
      id: '3.1',
      perde: 3,
      label: "Banquo'dan tehdit",
      desc: "Banquo'nun çocukları kral olacak dedi cadılar. Banquo tehlikeli.",
      icDurum: 'Paranoya başladı. En iyi dost artık düşman.',
      bosluk: "Banquo'ya ihanet kararını verdiği an.",
      travmaKategorileri: ['ihanet'],
      travmaSeviyesi: 1,
    },
    {
      id: '3.2',
      perde: 3,
      label: "Lady Macbeth'le uzaklaşma",
      desc: 'İkisi arasında bir şeyler kırıldı. Planlarını artık paylaşmıyor.',
      icDurum: 'Yalnızlaşma. Güce sahip ama kimse yok yanında.',
      bosluk: "O gecelerde Lady Macbeth'e ne söylemek isteyip söyleyemedi?",
      travmaKategorileri: ['kayip'],
      travmaSeviyesi: 1,
    },
    {
      id: '3.4',
      perde: 3,
      label: "Banquo'nun hayaleti",
      desc: 'Ziyafet sofrasında taht boş değil. Sadece o görüyor.',
      icDurum: 'Panik. Kontrol kaybı. Herkese delilik performansı sergiledi.',
      bosluk: 'Hayalet kaybolunca — gerçek mi yoksa korku mu?',
      travmaKategorileri: ['zihinsel_kirilma', 'ahlaki_yara'],
      travmaSeviyesi: 3,
    },
    {
      id: '4.1',
      perde: 4,
      label: 'Yeni kehanetler',
      desc: 'Cadılara geri döndü. Daha fazlasını istedi. Daha karanlık bilgiler aldı.',
      icDurum: 'Bağımlılık. Kehanet artık güç vermiyor, uyuşturuyor.',
      bosluk: 'Cadılardan ayrıldıktan sonra yalnız kaldığı an.',
      travmaKategorileri: ['zihinsel_kirilma'],
      travmaSeviyesi: 2,
    },
    {
      id: '5.3',
      perde: 5,
      label: 'Savaşa hazırlanma',
      desc: 'Beyler onu terk ediyor. Ordu yaklaşıyor. Ama kehanet güvencesi var.',
      icDurum: 'Yanlış bir güven. Ya da güvene inanmak zorunda.',
      bosluk: 'Asker sayısını öğrendiği an.',
      travmaKategorileri: [],
      travmaSeviyesi: 0,
    },
    {
      id: '5.5',
      perde: 5,
      label: "Lady Macbeth'in ölümü",
      desc: 'Haber geldi. Cevabı: "Yarın, yarından sonra, yarından sonra..."',
      icDurum: 'Boşluk. Keder değil — anlamsızlık. Hayat "yürüyen bir gölge".',
      bosluk: "Haberi aldıktan savaş alanına çıkana kadar. Ne düşündü Lady Macbeth'e dair?",
      travmaKategorileri: ['kayip', 'varolussal'],
      travmaSeviyesi: 3,
    },
    {
      id: '5.7',
      perde: 5,
      label: "Genç Seyward'ı öldürür",
      desc: 'Savaş alanında genç asker. Kolayca öldürdü. Kehanet doğru.',
      icDurum: 'Kısa bir zafer. Doğrulandı hissi. Ama Macduff geliyor.',
      bosluk: null,
      travmaKategorileri: ['siddet'],
      travmaSeviyesi: 2,
    },
    {
      id: '5.8',
      perde: 5,
      label: 'Macduff karşısında son',
      desc: '"Kadından doğmadım." Macduff: "Erken doğumla kopardılar beni."',
      icDurum: 'Her şey çöktü. Ama savaşmayı seçti.',
      bosluk: 'O son anda — pişmanlık mı, özgürlük mü, yoksa hiçlik mi?',
      travmaKategorileri: ['varolussal'],
      travmaSeviyesi: 3,
    },
  ],

  // ─── EGZERSİZLER ──────────────────────────────────────────────────────────
  // adimlar bir dizi cümle dizisidir. {duyu}, {ipucu}, {yansimaSorusu}
  // gibi yer tutucular VAK kanalına göre doldurulacak.

  egzersizler: [
    {
      id: 'baseline',
      baslik: 'Baseline Kurma',
      sure: '10 dk',
      seviye: 'Giris',
      ikon: '🌿',
      aciklama:
        "Cadılarla karşılaşmadan önce. Savaş kazanıldı. Her şey mümkün. Macbeth henüz bir general — kral değil, katil değil.",
      adimlar: [
        'Gözlerini kapat. Savaş meydanını bırak — sen İnverness\'e gidiyorsun.',
        'Zafer hissi nerede yaşıyor bedeninde? Göğsünde mi, omuzlarında mı?',
        'Yanında Banquo var. Bir şey söylüyor sana. Ne {duyu}?',
        'Bu Macbeth\'i bir süre tut. Buraya istediğin an dönebilirsin.',
      ],
      travmaSeviyesi: 0,
    },
    {
      id: 'dogrular',
      baslik: 'Değiştirilemez Doğrular Taraması',
      sure: '15 dk',
      seviye: 'Temel',
      ikon: '🗺️',
      aciklama:
        "Sahneye çıkmadan önce karakterin zeminini sağlamlaştır. Her maddeyi oku, bedenine sor: 'Bu gerçek mi?'",
      adimlar: [
        'Listeyi yavaşça oku. Acele etme.',
        'Her madde için içinden bir cevap ver: "Evet, biliyorum."',
        'Sürpriz yaratan bir madde var mı? Onu daha uzun tut.',
        '"Macbeth bunların hepsini taşıyarak sahneye giriyor."',
      ],
      travmaSeviyesi: 0,
    },
    {
      id: 'bosluk-1-7',
      baslik: 'Zihinsel Boşluk: 1.7 Odası',
      sure: '20 dk',
      seviye: 'Orta',
      ikon: '🚪',
      aciklama:
        "Ziyafet devam ediyor. Macbeth odaya çekildi. Shakespeare bu sahneyi göstermiyor — sen dolduracaksın.",
      adimlar: [
        'Odaya girdin. Kapıyı kapattın. {duyu} uzaktan geliyor.',
        '"Bunu yapmamalıyım." — Bu cümleyi üç kez söyle. Her seferinde farklı bir yere koy.',
        'Pencereye git. Dışarıda ne {duyu}?',
        'Lady Macbeth kapıya geliyor. Açmadan önce: son karar hangi anda verildi?',
      ],
      travmaSeviyesi: 2,
      bagliSahne: '1.7',
    },
    {
      id: 'bosluk-2-2',
      baslik: 'Zihinsel Boşluk: 2.2 Odası',
      sure: '25 dk',
      seviye: 'Ileri',
      ikon: '🩸',
      aciklama:
        "Duncan'ın odasına girdin. Sahne yok. Sadece içeri girdin ve geri döndün. Bu arayı yaşa.",
      adimlar: [
        'Koridor. Hançer elde. Nefes.',
        'Kapıyı açtın. İçerisi karanlık. Ne {duyu}?',
        '(Süre: oyuncu kendi ritmiyle belirler — acele yok.)',
        'Geri döndün. Ellerinde ne var? {yansimaSorusu}',
        '"Bu elleri okyanusun suyu temizleyemez." — Bu cümle nerede başlıyor?',
      ],
      travmaSeviyesi: 3,
      bagliSahne: '2.2',
    },
    {
      id: 'iliski-lady',
      baslik: 'İlişki Haritası: Lady Macbeth',
      sure: '20 dk',
      seviye: 'Orta',
      ikon: '👁️',
      aciklama:
        "En yakın kişi. En büyük itici güç. Ve sonunda: sessizce kaybedilen. Bu ilişkinin dönüşümünü izle.",
      adimlar: [
        '1.7 öncesi Lady Macbeth nasıl görünür? {ipucu}',
        '3.2\'de artık paylaşmıyorsun planlarını. O an nerede başladı?',
        '5.5\'te ölüm haberini aldığında — sürpriz mi yoksa bekliyordun mu?',
        '"Yarın, yarından sonra" — bu cümleyi Lady Macbeth için mi yoksa kendine mi söyledin?',
      ],
      travmaSeviyesi: 2,
    },
    {
      id: 'kararlar-odasi',
      baslik: 'Kararlar Odası',
      sure: '30 dk',
      seviye: 'Ileri',
      ikon: '⚖️',
      aciklama:
        "Macbeth'in seçimleri tarihsel olarak sabit. Ama o anlarda ne hissettiği değil. Bu egzersizde karar anlarına gir — kendi seçimini yap, sonra Macbeth'inkiyle karşılaş.",
      // Kararlar Odası'nın kendi yapısı var — adimlar yerine kararlar dizisi
      kararlar: [
        {
          id: 'k-1-7',
          sahne: '1.7',
          kurulum:
            'Ziyafetten ayrıldın. Yalnızsın. Lady Macbeth seni dışarıda bekliyor. Duncan üst katta uyuyor.',
          yollar: [
            { id: 'oldur', metin: "Plana sadık kal — Duncan'ı öldür" },
            { id: 'vazgec', metin: 'Vazgeç — Lady Macbeth\'e geri dön ve "yapamam" de' },
          ],
          yansimaSorusu: 'Bu kararı verirken bedeninin neresinde bir şey değişti?',
          tarihselCevap:
            "Macbeth öldürmeyi seçti. Ama önce 'Vazgeç' dedi — Lady Macbeth onu geri çekti. Yani aslında karar Macbeth'in tek başına değildi.",
          farkSorusu:
            'Sen bu karara nasıl geldin? Macbeth\'in geldiği gibi mi, yoksa farklı bir yoldan mı?',
        },
        {
          id: 'k-3-1',
          sahne: '3.1',
          kurulum:
            "Banquo, en yakın dostun. Cadılar 'onun çocukları kral olacak' dedi. Şu an ziyafet için saraya geliyor.",
          yollar: [
            { id: 'oldurt', metin: "Tehlike — Banquo'yu öldürtmeyi emret" },
            { id: 'konus', metin: "Risk al — Banquo ile yüz yüze konuş, kehaneti paylaş" },
            { id: 'gormezden', metin: "Görmezden gel — kehanet kendi yoluna gitsin" },
          ],
          yansimaSorusu: 'Banquo\'yu öldürtme fikrine ne tepki verdin? Hızlı mı, yavaş mı?',
          tarihselCevap:
            "Macbeth öldürtmeyi seçti. Ama önemli olan şu: Banquo'yu konuşmadan, sormadan, sadece kehanete dayanarak öldürttü. İlk cinayetinde tereddüt vardı — bu seferinde yok.",
          farkSorusu: 'Sen tereddüt ettin mi? Macbeth\'le aranızdaki o tereddüt farkı ne anlama geliyor?',
        },
        {
          id: 'k-5-8',
          sahne: '5.8',
          kurulum:
            'Macduff karşısında. "Kadından doğmadım" diyor — kehanetin son kalkanı düştü. Kaçabilirsin, teslim olabilirsin, savaşabilirsin.',
          yollar: [
            { id: 'savas', metin: 'Savaş — sonuç belli olsa da dövüş' },
            { id: 'teslim', metin: "Teslim ol — kılıcını bırak" },
            { id: 'kac', metin: 'Kaç — bir şans daha ara' },
          ],
          yansimaSorusu: 'Bu seçimi yaparken hangi duygu daha güçlü? Onur mu, korku mu, hiçlik mi?',
          tarihselCevap:
            'Macbeth savaşmayı seçti. "Yine de denerim" dedi. Bu bir umut değil — anlamsızlığa rağmen eylem.',
          farkSorusu: 'Senin seçimin onun seçimiyle aynı mı? Eğer farklıysa — Macbeth\'in sende eksik olan ne?',
        },
      ],
      travmaSeviyesi: 2,
    },
    {
      id: 'son-monolog',
      baslik: 'Son Monoloğu: Yarın',
      sure: '15 dk',
      seviye: 'Ileri',
      ikon: '🕯️',
      aciklama:
        "\"Yarın, yarından sonra, yarından sonra...\" — Bu monolog Macbeth'in en dürüst anı. Performans yok, izleyici yok, sadece anlamsızlık.",
      adimlar: [
        "Lady Macbeth'in öldüğünü az önce öğrendin.",
        "Monologu ezber değil, düşünce olarak söyle. Her 'yarın' farklı bir yere gidiyor.",
        '"Hayat, yürüyen bir gölgeden ibaret." — Senin hayatında bu cümlenin karşılığı ne?',
        'Savaş sesi geliyor. Kalkıyorsun. Bu kadar.',
      ],
      travmaSeviyesi: 3,
      bagliSahne: '5.5',
    },
  ],
};

export default macbeth;