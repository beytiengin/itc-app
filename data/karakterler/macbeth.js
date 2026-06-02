// data/karakterler/macbeth.js
// ITC Actor's Gym — Macbeth karakter verisi

const macbeth = {
  // ─── KİMLİK ───────────────────────────────────────────────────────────────

  id: 'macbeth',
  ad: 'Macbeth',
  oyun: 'Macbeth',
  yazar: 'William Shakespeare',
  donem: '1606',
  tur: 'Trajedi',
  tip: 'ENTJ',
  ozet:
    "Kral Duncan'ın generali. Bir kehanet, bir karar, bir yıkım. İktidar hırsı, suçluluk ve paranoyanın iç çöküşü.",
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
    { kategori: 'Kimlik', madde: "Macbeth, Kral Duncan'ın güvendiği bir generaldir." },
    { kategori: 'Kimlik', madde: "Cawdor Beyi unvanını yeni almıştır (I.iii)." },
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

  // ═══════════════════════════════════════════════════════════════════════════
  // YENİ MİMARİ ALANLARI (Katman 1 — Hamlet/Willy paralelinde refactor)
  // Eski sahneler/bosluklar/antrenmanlar yukarıda korundu; sayfa mimarisi
  // (Katman 2) tamamlanınca retire edilecek. Bu blok Hamlet şemasıyla birebir.
  // ═══════════════════════════════════════════════════════════════════════════

  // ─── PERDE TEMALARI (5 perde — Macbeth'in iç çöküş eğrisi) ────────────────
  perdeTemalari: [
    { perde: 'I',   baslik: 'Kehanet ve Kışkırtma', altyazi: 'Arzu uyanır, karar olgunlaşır',      sahneAraligi: '1-3'   },
    { perde: 'II',  baslik: 'Eylem ve İlk Kırılma',  altyazi: 'Kan akar, zihin gerçekten kopar',     sahneAraligi: '4-6'   },
    { perde: 'III', baslik: 'Paranoya ve Yalnızlık', altyazi: 'Güç gelir, dost düşmana döner',       sahneAraligi: '7-9'   },
    { perde: 'IV',  baslik: 'Bağımlılık ve Kasvet',  altyazi: 'Kehanet uyuşturur, vicdan körelir',   sahneAraligi: '10'    },
    { perde: 'V',   baslik: 'Çöküş ve Hiçlik',       altyazi: 'Her şey biter, anlam dağılır',        sahneAraligi: '11-14' },
  ],

  // ─── SAHNELER — WORKBOOK FORMATI · 14 BİRİM ───────────────────────────────
  // Kaynak: eski `sahneler` (id/label/desc/icDurum/bosluk/travma). Yeni alanlar:
  // olay (desc genişletildi), icsel (icDurum), yuk (yeni — ITC sahne yükü),
  // onerilenSicaklik (travmaSeviyesi + dramatik yoğunluktan türetildi 1-9).
  sahnelerWorkbook: [
    {
      no: 1, perde: 1, perdeRomen: 'I',
      baslik: 'Cadılarla karşılaşma',
      konum: 'I.iii · Savaş sonrası, kırda',
      olay: 'Savaştan dönerken Macbeth ve Banquo üç cadıyla karşılaşır. Cadılar Macbeth\'in önce Cawdor Beyi, sonra kral olacağını; Banquo\'nun ise kralların atası olacağını söyler. Bir kehanet havada asılı kalır.',
      icsel: 'Şaşkınlık, hırs ve inanmak isteme bir arada. Banquo\'ya dönüp bunun iyi mi kötü mü olduğunu sorar — ama içinde bir şey çoktan kıpırdamıştır.',
      onerilenSicaklik: 3,
      yuk: 'Henüz hiçbir suç işlenmemiş bir adamın, kendi arzusuyla ilk yüzleşmesi.',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 1,
    },
    {
      no: 2, perde: 1, perdeRomen: 'I',
      baslik: 'Cawdor unvanını alır',
      konum: 'I.iv · Sarayda',
      olay: 'Kral Duncan, Macbeth\'i Cawdor Beyi ilan eder. Kehanetin ilk yarısı gerçekleşmiştir. Ama Duncan, oğlu Malcolm\'u veliaht ilan eder — tahtın önüne bir engel çıkar.',
      icsel: 'Hız kazanan arzu. Kehanet doğrulandıkça istek büyür; ama veliaht engeli karanlık bir düşünceyi tetikler.',
      onerilenSicaklik: 4,
      yuk: 'Bir kapının açıldığını gören adamın, önündeki engeli ilk kez katı bir gözle ölçmesi.',
      travmaKategorileri: [], travmaSeviyesi: 0,
    },
    {
      no: 3, perde: 1, perdeRomen: 'I',
      baslik: 'Duncan\'ı öldürme kararsızlığı',
      konum: 'I.vii · Ziyafet sırasında, tek başına',
      olay: 'Ziyafetten çekilip yalnız kalır. Cinayeti tartar — Duncan hem kralı, hem akrabası, hem misafiridir. Vazgeçmeye yakındır; ama Lady Macbeth gelip onu yeniden karara çeker.',
      icsel: 'Vicdan ile arzu arasındaki en açık hesaplaşma. "Yapmamalıyım" der — ama bu cümleyi tutamayacaktır.',
      onerilenSicaklik: 6,
      yuk: 'Bir adamın kendi vicdanını yenmek zorunda kaldığı an; geri dönülebilecek son eşik.',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 2,
    },
    {
      no: 4, perde: 2, perdeRomen: 'II',
      baslik: 'Hançer halüsinasyonu',
      konum: 'II.i · Gece yarısı, koridor',
      olay: 'Gece yarısı koridorda havada bir hançer görür — sapı ona dönük. Gerçek mi, zihnin oyunu mu belirsizdir. Onu Duncan\'ın odasına doğru çeker.',
      icsel: 'Zihin artık gerçekle kurguyu ayıramıyor. İlk kırılma burada — eylem henüz olmadan akıl çatlamaya başlar.',
      onerilenSicaklik: 6,
      yuk: 'Bir cinayetin, işlenmeden önce zihinde bıraktığı ilk yarık.',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 2,
    },
    {
      no: 5, perde: 2, perdeRomen: 'II',
      baslik: 'Duncan\'ı öldürür',
      konum: 'II.ii · Duncan\'ın odası ve sonrası',
      olay: 'Macbeth kralın odasına girer ve onu uykusunda öldürür. Elinde kanlı hançerlerle döner. Bir ses duyduğunu, uykunun öldürüldüğünü söyler.',
      icsel: '"Bunu ben mi yaptım?" Eylem tamamlanmıştır ama zihin onu kabul edemez; işitsel sanrılar başlar.',
      onerilenSicaklik: 9,
      yuk: 'Geri dönülemez olanın eşiğini geçen adamın, kendi elini tanıyamaması.',
      travmaKategorileri: ['siddet', 'ahlaki_yara'], travmaSeviyesi: 3,
    },
    {
      no: 6, perde: 2, perdeRomen: 'II',
      baslik: 'Cinayeti gizleme',
      konum: 'II.iii · Şafak, sarayda',
      olay: 'Macduff cesedi bulur; saray ayağa kalkar. Macbeth, suçu üstlerine yıkmak için uyuyan hizmetkârları öldürür ve öfkeli bir sadık rolü oynar.',
      icsel: 'Kontrol ve performans. İlk kez "kral gibi" davranmak — yas tutuyormuş gibi yapmanın soğuk hesabı.',
      onerilenSicaklik: 6,
      yuk: 'Bir suçun üzerini örtmek için ikinci bir suç işleyen adamın, rol yapmaya başlaması.',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 2,
    },
    {
      no: 7, perde: 3, perdeRomen: 'III',
      baslik: 'Banquo\'dan tehdit',
      konum: 'III.i · Sarayda, kral olarak',
      olay: 'Artık kraldır. Ama cadılar Banquo\'nun soyunun kral olacağını söylemişti. Banquo\'yu ve oğlunu öldürtmek için kiralık katiller ayarlar.',
      icsel: 'Paranoya başlar. En yakın dost artık en büyük tehdit. Güç, güveni yok eder.',
      onerilenSicaklik: 5,
      yuk: 'Tahtı koruma kaygısının, dostluğu bir hesap kalemine indirgediği an.',
      travmaKategorileri: ['ihanet'], travmaSeviyesi: 1,
    },
    {
      no: 8, perde: 3, perdeRomen: 'III',
      baslik: 'Lady Macbeth\'le uzaklaşma',
      konum: 'III.ii · Sarayda, baş başa',
      olay: 'Bir zamanlar her planı paylaşan çift artık birbirinden kopmaktadır. Macbeth yeni planlarını eşinden saklar; yalnız karar verir.',
      icsel: 'Yalnızlaşma. Güce sahip ama yanında kimse kalmamış bir adam. Ortaklık yerini sessizliğe bırakır.',
      onerilenSicaklik: 5,
      yuk: 'Birlikte suça giren iki insanın, suçun ağırlığı altında birbirini kaybetmesi.',
      travmaKategorileri: ['kayip'], travmaSeviyesi: 1,
    },
    {
      no: 9, perde: 3, perdeRomen: 'III',
      baslik: 'Banquo\'nun hayaleti',
      konum: 'III.iv · Ziyafet sofrası',
      olay: 'Kral olarak verdiği ilk büyük ziyafette, Banquo\'nun hayaleti boş iskemleye oturur. Yalnız Macbeth görür; konuklar önünde panikler. Lady Macbeth durumu örtbas etmeye çalışır.',
      icsel: 'Panik ve kontrol kaybı. Herkesin önünde delilik. Suç, görünür bir hayalete dönüşmüştür.',
      onerilenSicaklik: 8,
      yuk: 'Bastırılan vicdanın, bir kralın halka açık sofrasında bedene bürünüp geri dönmesi.',
      travmaKategorileri: ['zihinsel_kirilma', 'ahlaki_yara'], travmaSeviyesi: 3,
    },
    {
      no: 10, perde: 4, perdeRomen: 'IV',
      baslik: 'Yeni kehanetler',
      konum: 'IV.i · Cadıların mağarası',
      olay: 'Macbeth cadılara geri döner, daha fazlasını ister. Ona üç uyarı verilir: Macduff\'tan sakın; kadından doğan kimse ona zarar veremez; Birnam Ormanı yürümedikçe yenilmez. Yanlış bir güvenle ayrılır.',
      icsel: 'Bağımlılık. Kehanet artık güç değil, uyuşturucudur. Güvence aradıkça daha da körleşir.',
      onerilenSicaklik: 5,
      yuk: 'Kendi kaderini duymak için karanlığa geri dönen adamın, yanlış bir güvene tutunması.',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 2,
    },
    {
      no: 11, perde: 5, perdeRomen: 'V',
      baslik: 'Savaşa hazırlanma',
      konum: 'V.iii · Dunsinane kalesi',
      olay: 'Beyleri onu terk etmektedir; düşman ordusu yaklaşır. Yine de cadıların güvencesine tutunur — kadından doğan kimse ona zarar veremez.',
      icsel: 'Yanlış bir güven, ya da güvene inanmak zorunda kalmak. İnançla umutsuzluk arasında bir zırh.',
      onerilenSicaklik: 5,
      yuk: 'Herkesin terk ettiği adamın, tek dayanağı olan kehanete inatla yapışması.',
      travmaKategorileri: [], travmaSeviyesi: 0,
    },
    {
      no: 12, perde: 5, perdeRomen: 'V',
      baslik: 'Lady Macbeth\'in ölümü',
      konum: 'V.v · Kale içinde',
      olay: 'Savaşın ortasında Lady Macbeth\'in öldüğü haberi gelir. Macbeth\'in cevabı bir keder çığlığı değil, hayatın anlamsızlığı üzerine soğuk bir tefekkürdür — hayat "yürüyen bir gölge"dir.',
      icsel: 'Keder değil, boşluk. Anlamsızlık. Duygu çoktan tükenmiştir; geriye yalnızca yorgun bir hiçlik kalır.',
      onerilenSicaklik: 8,
      yuk: 'Birlikte her şeyi göze aldığı kadının ölümünü, artık ağlayamayacak kadar boşalmış bir adamın karşılaması.',
      travmaKategorileri: ['kayip', 'varolussal'], travmaSeviyesi: 3,
    },
    {
      no: 13, perde: 5, perdeRomen: 'V',
      baslik: 'Genç Seyward\'ı öldürür',
      konum: 'V.vii · Savaş alanı',
      olay: 'Savaş alanında genç Seyward ile karşılaşır ve onu kolayca öldürür. Kehanetin "kadından doğan kimse" kısmı bir an doğrulanmış gibidir.',
      icsel: 'Kısa bir zafer, doğrulanmış olmanın geçici hazzı. Ama Macduff yaklaşmaktadır.',
      onerilenSicaklik: 6,
      yuk: 'Sonunu sezen adamın, son bir kez kehanetin kalkanına sığınması.',
      travmaKategorileri: ['siddet'], travmaSeviyesi: 2,
    },
    {
      no: 14, perde: 5, perdeRomen: 'V',
      baslik: 'Macduff karşısında son',
      konum: 'V.viii · Savaş alanı',
      olay: 'Macduff ile karşılaşır. Macbeth kadından doğmadığını söyler; Macduff vaktinden önce, ameliyatla doğduğunu açıklar. Son kehanet de çöker. Macbeth yine de savaşmayı seçer ve ölür.',
      icsel: 'Her şey çökmüştür. Zırh dağılmıştır. Ama teslim olmak yerine, kaybedeceğini bile bile dövüşmeyi seçer.',
      onerilenSicaklik: 9,
      yuk: 'Tüm güvencelerini yitiren adamın, son anda hiçliğin karşısında yine de eylemeyi seçmesi.',
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 3,
    },
  ],

  // ─── OYUN ÖNCESİ YAŞAM ────────────────────────────────────────────────────
  // Kaynak: eski b-pre boşluğu + dogrular + ilişki ağı. Macbeth sahneye savaş
  // alanından girer; ama o ana kadar bir hayat, bir evlilik, bir hırs vardır.
  oyunOncesi: {
    olaylar: [
      {
        no: 1,
        baslik: 'Savaşçı olarak yükseliş — Kral\'ın güvendiği general',
        sahneRef: 'Savaş alanından zaferle döner; Duncan onu en sadık generali olarak över.',
        yuk: 'Onurun ve sadakatin zirvesi. Macbeth\'in henüz lekelenmemiş kimliği — sonra ihanet edeceği değerler.',
        yansimaSorusu: 'Sadakatin ve onurun bu zirvesi, Macbeth\'in bedeninde nereye yerleşmişti — ve ihanet onu nereden kırdı?',
      },
      {
        no: 2,
        baslik: 'Lady Macbeth ile evlilik — ortak hırsın kuruluşu',
        sahneRef: 'Çift, daha sahne açılmadan, hırsı paylaşan bir ortaklık kurmuştur.',
        yuk: 'İki insanın tek bir arzuda birleşmesi. Sonradan onları birbirinden koparacak olan bağın başlangıcı.',
        yansimaSorusu: 'Macbeth ve Lady Macbeth ilk hangi anda iktidarı birlikte arzulamaya başladı?',
      },
      {
        no: 3,
        baslik: 'Çocuk(suz)luk — soyu olmayan bir kral adayı',
        sahneRef: 'Metin bir çocuğun varlığını ima eder ama Macbeth\'in soyu yoktur; cadılar tahtı Banquo\'nun soyuna verir.',
        yuk: 'Geleceğe uzanamamanın sessiz yarası. Macbeth taht için her şeyi yapar ama onu devredeceği kimse yoktur.',
        yansimaSorusu: 'Soyunu sürdürememe gerçeği, Macbeth\'in iktidar hırsını nasıl besliyor ya da kemiriyor?',
      },
      {
        no: 4,
        baslik: 'İlk öldürme — savaşçının kanla ilk tanışması',
        sahneRef: 'Bir asker olarak Macbeth daha önce de öldürmüştür; savaş onun zanaatıdır.',
        yuk: 'Meşru şiddetle gayrimeşru cinayet arasındaki ince çizgi. Savaşta öldürmek onu Duncan\'ı öldürmeye hazırladı mı, yoksa o eşik bambaşka mıydı?',
        yansimaSorusu: 'Savaşta dökülen kan ile Duncan\'ın kanı Macbeth\'in elinde aynı mı hissedildi, yoksa büsbütün başka mı?',
      },
    ],
    iliskiler: [
      {
        no: 1, ad: 'Lady Macbeth', rol: 'EŞ',
        gecmis: 'Hırsı paylaşan ortak; onu karara iten irade.',
        simdi: 'Önce itekleyen güç, sonra uzaklaşan ve çöken ortak. Suç ikisini de ayrı ayrı tüketir.',
        iz: 'Tutku + suç ortaklığı + giderek derinleşen sessizlik.',
        yansimaSorusu: 'Lady Macbeth yanına geldiğinde Macbeth güç mü hisseder, yoksa kendi zayıflığının aynasını mı görür?',
      },
      {
        no: 2, ad: 'Banquo', rol: 'EN YAKIN DOST / SİLAH ARKADAŞI',
        gecmis: 'Cadılara birlikte rastladıkları, yıllarca yan yana savaştığı dost.',
        simdi: 'Kehanet yüzünden tehdide dönüşen dost; öldürttüğü, sonra hayalet olarak karşısına çıkan vicdan.',
        iz: 'Güven + kıskançlık + ihanetin pişmanlığı.',
        yansimaSorusu: 'Banquo\'ya baktığında Macbeth bir dost mu, yoksa kendi soyunun olmayışının canlı hatırlatıcısını mı görür?',
      },
      {
        no: 3, ad: 'Duncan', rol: 'KRAL / AKRABA / MİSAFİR',
        gecmis: 'Ona güvenen, onu yücelten kral; aynı zamanda akrabası.',
        simdi: 'Üç kat kutsal bağı (kral-akraba-misafir) çiğneyerek öldürdüğü adam. İlk ve en ağır suç.',
        iz: 'Sadakat + ihlal + geri dönülemez ihlalin ağırlığı.',
        yansimaSorusu: 'Duncan ona güvenini gösterdiğinde Macbeth\'in içinde sadakat mi, yoksa fırsatın soğuk hesabı mı ağır basar?',
      },
      {
        no: 4, ad: 'Cadılar', rol: 'KEHANET / KARANLIK SES',
        gecmis: 'Sahne açılana dek var olmayan; ama Macbeth\'in içindeki arzuyu dışarıdan söze döken güç.',
        simdi: 'Bağımlılık nesnesi. Macbeth güvence için tekrar tekrar onlara döner; her dönüş onu daha da körleştirir.',
        iz: 'Çekim + bağımlılık + yanlış güvenin kaynağı.',
        yansimaSorusu: 'Cadılar Macbeth\'in zaten içinde olanı mı söylüyor, yoksa onda olmayan bir arzuyu mu ekiyor?',
      },
      {
        no: 5, ad: 'Macduff', rol: 'NEMESIS',
        gecmis: 'Bir soylu; başlangıçta doğrudan bir çatışma yok.',
        simdi: 'Ailesini katlettirdiği, sonunda onu öldüren adam. Kehanetin "kadından doğmayan" boşluğu.',
        iz: 'Küçümseme + korku + kaçınılmaz sonun yüzü.',
        yansimaSorusu: 'Macduff\'ın adı her geçtiğinde Macbeth\'in bedeninde hangi savunma kasılır?',
      },
    ],
  },

  // ─── TERCİHLER · 5 SAHNELEME KARARI (Yazarın Çerçevesi sayfası) ───────────
  // Metnin en tartışmalı 5 noktası; oyuncu Yaratımsal Doğru seçer (Spine §3.11).
  // TASLAK — Beyti/Filiz dramaturjik onayı bekliyor.
  tercihler: [
    {
      no: 1,
      konu: 'Cadılar ve Kehanet',
      baslik: 'Cadılar Macbeth\'te olmayan bir arzuyu mu ekiyor, yoksa zaten olanı mı söylüyor?',
      cokluSecim: false,
      sahneNolari: [1, 10],
      isaretler: [
        { ref: 'İlk karşılaşma', sahneNo: 1, metin: 'Cadılar kral olacağını söyler söylemez Macbeth\'in zihni hemen cinayete gider — sanki düşünce orada hazır beklemektedir.' },
        { ref: 'Cadılara dönüş', sahneNo: 10, metin: 'Macbeth güvence için cadıları kendisi arar; kehanet artık dışarıdan gelen bir ses değil, bağımlı olduğu bir madde gibidir.' },
      ],
      sentez: 'Kehanetin Macbeth\'in içindeki arzuyu mu açığa çıkardığı, yoksa onu mu yarattığı metinde belirsizdir. Oyuncu cadıların gerçeklik ve etki derecesine karar verir.',
      yorumlar: [
        { harf: 'A', baslik: 'Dışarıdan gelen kader', aciklama: 'Cadılar gerçek doğaüstü güçler; arzuyu onlar eker. Macbeth bir kaderin kurbanı — suç paylaşılır.' },
        { harf: 'B', baslik: 'İçsel arzunun sesi', aciklama: 'Cadılar Macbeth\'in zaten taşıdığı hırsı dışa vurur; sadece bir aynadır. Suç tamamen onundur.' },
        { harf: 'C', baslik: 'Belirsiz eşik', aciklama: 'Gerçek mi sanrı mı asla netleşmez; oyuncu bu belirsizliği korur — seyirci de Macbeth gibi emin olamaz.' },
      ],
    },
    {
      no: 2,
      konu: 'Lady Macbeth\'in Etkisi',
      baslik: 'Macbeth\'i Lady Macbeth mi ittiriyor, yoksa o zaten kararlı mı?',
      cokluSecim: false,
      sahneNolari: [3, 8],
      isaretler: [
        { ref: 'Karar kararsızlığı', sahneNo: 3, metin: 'Macbeth cinayetten vazgeçmeye yakındır; Lady Macbeth\'in iradesi onu yeniden karara çeker.' },
        { ref: 'Uzaklaşma', sahneNo: 8, metin: 'Sonraki cinayetleri (Banquo) Macbeth eşine danışmadan, tek başına planlar — itici güç artık içeridedir.' },
      ],
      sentez: 'İlk cinayette Lady Macbeth\'in itişi belirleyici görünür; ama sonraki cinayetlerde Macbeth tek başına ilerler. Oyuncu, hırsın ne kadarının kendinden, ne kadarının eşinden geldiğine karar verir.',
      yorumlar: [
        { harf: 'A', baslik: 'Eşi olmadan yapamazdı', aciklama: 'İlk cinayet tamamen Lady Macbeth\'in iradesiyle olur; Macbeth zayıf, yönlendirilen taraftır.' },
        { harf: 'B', baslik: 'Zaten kararlıydı', aciklama: 'Macbeth\'in hırsı baştan beri vardır; Lady Macbeth yalnızca son iteklemeyi yapar, asıl irade onundur.' },
        { harf: 'C', baslik: 'Birlikte tetiklenen', aciklama: 'İkisi birbirini besler; ne biri ne öteki tek başına yeterli — suç gerçek bir ortaklıktır.' },
      ],
    },
    {
      no: 3,
      konu: 'Zihinsel Kırılma',
      baslik: 'Macbeth\'in halüsinasyonları (hançer, hayalet) gerçek doğaüstü mü, yoksa vicdanın/aklın çöküşü mü?',
      cokluSecim: false,
      sahneNolari: [4, 9],
      isaretler: [
        { ref: 'Hançer', sahneNo: 4, metin: 'Cinayetten önce havada bir hançer görür; gerçek mi, zihnin yarattığı mı belirsizdir.' },
        { ref: 'Banquo\'nun hayaleti', sahneNo: 9, metin: 'Ziyafette yalnız Macbeth hayaleti görür; sofradaki kimse görmez.' },
      ],
      sentez: 'Halüsinasyonların kaynağı metinde açık bırakılır. Oyuncu bunların doğaüstü bir gerçeklik mi, suçluluğun bedensel/zihinsel dışavurumu mu olduğuna karar verir.',
      yorumlar: [
        { harf: 'A', baslik: 'Doğaüstü gerçeklik', aciklama: 'Hançer ve hayalet gerçekten oradadır; oyunun doğaüstü dünyası vicdanı dışsallaştırır.' },
        { harf: 'B', baslik: 'Vicdanın çöküşü', aciklama: 'Tümü zihinsel; bastırılan suçluluk halüsinasyon olarak yüzeye vurur. Klinik bir kırılma.' },
        { harf: 'C', baslik: 'Bedensel tetik', aciklama: 'Kırılma bedende başlar (uykusuzluk, kan görüntüsü); zihin sonra anlam yükler. Somatik bir okuma.' },
      ],
    },
    {
      no: 4,
      konu: 'Vicdan ve Suçluluk',
      baslik: 'Macbeth suçundan pişman mı, yoksa yalnızca yakalanmaktan/sonuçtan mı korkuyor?',
      cokluSecim: false,
      sahneNolari: [5, 6],
      isaretler: [
        { ref: 'Cinayet sonrası', sahneNo: 5, metin: 'Eylemden hemen sonra elini tanıyamaz, sesler duyar — bir tür dehşet içindedir.' },
        { ref: 'Gizleme', sahneNo: 6, metin: 'Aynı Macbeth, dakikalar sonra soğukkanlılıkla hizmetkârları öldürüp rol yapar.' },
      ],
      sentez: 'Macbeth\'in cinayet sonrası dehşeti ahlaki bir pişmanlık mı, yoksa yakalanma korkusu/sonuçların ağırlığı mı belirsizdir. Oyuncu bu dehşetin doğasını seçer.',
      yorumlar: [
        { harf: 'A', baslik: 'Gerçek ahlaki pişmanlık', aciklama: 'Macbeth vicdanı olan bir adamdır; suçu onu içten yıkar. Trajedi bir iyi adamın düşüşüdür.' },
        { harf: 'B', baslik: 'Sonuç korkusu', aciklama: 'Dehşet ahlaki değil pratik — yakalanma, tahtı kaybetme, kaos korkusu. Pişmanlık değil hesap.' },
        { harf: 'C', baslik: 'Köreltilen vicdan', aciklama: 'Başta vicdan vardır ama her cinayetle körelir; oyuncu bu kademeli uyuşmayı oynar.' },
      ],
    },
    {
      no: 5,
      konu: 'Son An',
      baslik: 'Macbeth son savaşında ne taşır — umutsuzluk, meydan okuma, yoksa nihilist bir özgürlük mü?',
      cokluSecim: false,
      sahneNolari: [12, 14],
      isaretler: [
        { ref: 'Lady Macbeth\'in ölümü', sahneNo: 12, metin: 'Eşinin ölümüne keder değil, hayatın anlamsızlığı üzerine soğuk bir tefekkürle karşılık verir.' },
        { ref: 'Macduff karşısında', sahneNo: 14, metin: 'Son kehanet de çöktüğünde, kaybedeceğini bile bile savaşmayı seçer.' },
      ],
      sentez: 'Macbeth\'in son anında taşıdığı duygu metinde tek anlamlı değildir. Oyuncu bu sonu yenilgi, meydan okuma ya da hiçliğin kabulü olarak okuyabilir.',
      yorumlar: [
        { harf: 'A', baslik: 'Umutsuz yenilgi', aciklama: 'Her şeyini kaybetmiş bir adam karanlığa teslim olur; savaşması yalnızca bir reflekstir.' },
        { harf: 'B', baslik: 'Meydan okuma', aciklama: 'Kaybedeceğini bilse de teslim olmayı reddeder; son bir gurur ve irade gösterisi.' },
        { harf: 'C', baslik: 'Nihilist özgürlük', aciklama: 'Anlam çökünce, kaybedecek bir şeyi kalmayınca tuhaf bir özgürlük gelir; hiçliğin içinde eylemeyi seçer.' },
      ],
    },
  ],

  // ─── BOŞLUK SETİ (El Yazması esas görünüm) ────────────────────────────────
  // Kaynak: eski `bosluklar` (ara/ic tipleri). Sahnede temsil EDİLMEMİŞ ama
  // bedende yaşanmış geçişler. Her boşluk sonraSahneNo'daki sahnenin önüne düşer.
  boslukSet: [
    {
      no: 1,
      baslik: 'Ormandan Saraya',
      sinif: 'Zaman/Mekân',
      konum: 'Kehanet (1) → Cawdor unvanı (2) arası',
      yasamSirasi: 1,
      sonraSahneNo: 2,
      onceBaslik: 'Cadıların kehaneti',
      onceMetin: 'Macbeth ve Banquo cadılardan kehaneti duydu; Macbeth kral olacağı söylendi.',
      boslukMetin: 'ormandan saraya giden yol · ilk kez zihinden geçen karanlık düşünce · Banquo\'yla yan yana ama içten içe ayrı · kehaneti tartan akıl · saraya varmadan verilen sessiz kararlar',
      sonraBaslik: 'Cawdor unvanını alır',
      sonraMetin: 'Sahne 2\'de Duncan Macbeth\'i Cawdor Beyi ilan eder; kehanetin ilk yarısı gerçekleşir.',
      sentez: 'Shakespeare kehanetten saraya kadar olan yolu göstermez. Oyuncu bu boşlukta arzunun ilk kez nasıl şekillendiğini kurar — Macbeth saraya varmadan önce zihninde nereye kadar gitti?',
      altSorular: [
        { no: 1, baslik: 'İçsel', soru: 'Kehanetten sonra saraya giderken aklından geçen ilk karanlık düşünce neydi — ve onu kovmaya çalıştı mı?' },
        { no: 2, baslik: 'İlişkisel', soru: 'Banquo yanı başında giderken ona bakışı değişti mi — artık bir rakip mi görüyordu?' },
        { no: 3, baslik: 'Beden', soru: 'O yolculukta bedeninde ilk kez hangi gerilim belirdi?' },
      ],
    },
    {
      no: 2,
      baslik: 'Karar Odasında Tek Başına',
      sinif: 'İçsel',
      konum: 'Kararsızlık (3) içi → Cinayet eşiği',
      yasamSirasi: 3,
      sonraSahneNo: 4,
      onceBaslik: 'Duncan\'ı öldürme kararsızlığı',
      onceMetin: 'Lady Macbeth onu ikna etti; Macbeth "yapacağım" dedi. Ama bu söz ile eylem arasında bir süre var.',
      boslukMetin: 'karardan eyleme uzanan dakikalar · kaç kez vazgeçildi · hizmetkârlara şarap · çanın sesini bekleme · hançere uzanan el · geri dönülebilecek son an',
      sonraBaslik: 'Hançer halüsinasyonu',
      sonraMetin: 'Sahne 4\'te Macbeth havada bir hançer görür ve Duncan\'ın odasına doğru çekilir.',
      sentez: 'Shakespeare "yapacağım" ile cinayet arasındaki süreyi atlar. Oyuncu bu boşlukta kararın bedende nasıl katılaştığını kurar — kaç kez geri çağırdı kendini, hangi an artık dönülemezdi?',
      altSorular: [
        { no: 1, baslik: 'Beden', soru: '"Yapacağım" dediği an bedeninin neresinde bir değişiklik oldu?' },
        { no: 2, baslik: 'İlişkisel', soru: 'Hizmetkârlara şarap içirirken yüzlerine bakabildi mi?' },
        { no: 3, baslik: 'İçsel', soru: 'Hançere uzandığı an, gerçekten alacağını biliyor muydu, yoksa hâlâ kendini izliyor muydu?' },
      ],
    },
    {
      no: 3,
      baslik: 'Duncan\'ın Odasında',
      sinif: 'İçsel · En Derin Boşluk',
      konum: 'Cinayet (5) anının içi',
      yasamSirasi: 4,
      sonraSahneNo: 5,
      onceBaslik: 'Odaya giriş',
      onceMetin: 'Macbeth hançerle Duncan\'ın odasına girer. Shakespeare cinayetin kendisini sahnede göstermez.',
      boslukMetin: 'kapının ardındaki an · uyuyan kralın yüzü · ilk darbe · belki bir söz, belki sessizlik · 30 saniye mi, 5 dakika mı · geri dönerken son bakış',
      sonraBaslik: 'Duncan\'ı öldürür (dönüş)',
      sonraMetin: 'Sahne 5\'te Macbeth kanlı hançerlerle döner; "bunu ben mi yaptım?" der, sesler duyar.',
      sentez: 'Bu, oyunun en derin boşluğu — cinayetin kendisi sahnede yoktur. Oyuncu odadaki anı kurar: ne gördü, ne yaptı, geri dönerken kim oldu? Dönüşteki dehşetin kaynağı buradadır.',
      altSorular: [
        { no: 1, baslik: 'Beden', soru: 'Odaya girdiğinde Duncan\'ın yüzü görünüyor muydu — ve ilk darbe nereye indi?' },
        { no: 2, baslik: 'İçsel', soru: 'O odada bir şey söyledi mi, yoksa tam bir sessizlik miydi?' },
        { no: 3, baslik: 'Zamansal', soru: 'Geri çıkarken ne kadar zaman geçtiğini fark etti mi — ya o sürede biri uyansaydı?' },
      ],
    },
    {
      no: 4,
      baslik: 'Uyumadığı Saatler',
      sinif: 'Zaman/Mekân',
      konum: 'Cinayet (5) → Gizleme (6) arası',
      yasamSirasi: 5,
      sonraSahneNo: 6,
      onceBaslik: 'Cinayet sonrası',
      onceMetin: 'Cinayet işlendi; "uyku öldürüldü" der. Macduff\'ın kapıyı çalmasına kadar bir süre geçer.',
      boslukMetin: 'uyuyamayan saatler · ellerdeki kan · her sesle irkilme · Lady Macbeth\'le suskun bekleyiş · şafağın gelişi · kapı çalınmadan önceki son sessizlik',
      sonraBaslik: 'Cinayeti gizleme',
      sonraMetin: 'Sahne 6\'da Macduff cesedi bulur; Macbeth hizmetkârları öldürüp rol yapmaya başlar.',
      sentez: 'Shakespeare cinayetten keşfe kadar olan saatleri atlar. Oyuncu bu boşlukta uykusuzluğu, dehşeti ve sabaha karşı takınılacak maskenin nasıl hazırlandığını kurar.',
      altSorular: [
        { no: 1, baslik: 'Beden', soru: 'O saatlerde elleri neredeydi — onlara bakabildi mi?' },
        { no: 2, baslik: 'İlişkisel', soru: 'Lady Macbeth\'le aralarında o sessiz saatlerde ne kondu, ne kalmadı?' },
        { no: 3, baslik: 'İçsel', soru: 'Kapı çalınmadan hemen önce hangi maskeyi takmaya karar verdi?' },
      ],
    },
    {
      no: 5,
      baslik: 'Ziyafete Hazırlık',
      sinif: 'Zaman/Mekân',
      konum: 'Banquo tehdidi (7) → Hayalet (9) arası',
      yasamSirasi: 7,
      sonraSahneNo: 9,
      onceBaslik: 'Banquo\'yu öldürtme emri',
      onceMetin: 'Macbeth suikastçileri Banquo için gönderdi. Ziyafet hazırlanıyor; herkes Banquo\'nun geleceğini bekliyor.',
      boslukMetin: 'suikastçileri uğurladıktan sonra · bilmenin yükü · Banquo\'nun gelmeyeceğini bilmek ama beklermiş gibi yapmak · ziyafete takılan maske · iç paranoya',
      sonraBaslik: 'Banquo\'nun hayaleti',
      sonraMetin: 'Sahne 9\'da ziyafette Banquo\'nun hayaleti boş iskemleye oturur; yalnız Macbeth görür.',
      sentez: 'Emir ile ziyafet arasındaki saatleri Shakespeare göstermez. Oyuncu bu boşlukta, bir dostun ölümünü beklerken takılan krallık maskesinin altında neyin biriktiğini kurar — hayalet bu birikimden doğar.',
      altSorular: [
        { no: 1, baslik: 'İçsel', soru: 'Suikastçileri uğurladıktan sonra ilk gittiği yer ve ilk düşüncesi neydi?' },
        { no: 2, baslik: 'İlişkisel', soru: 'Lady Macbeth\'e bu kez planı söylemedi — bu sessizlik içinde ne hissetti?' },
        { no: 3, baslik: 'Beden', soru: 'Ziyafet maskesini takarken bedeninde neyi bastırmak zorunda kaldı?' },
      ],
    },
    {
      no: 6,
      baslik: 'Hayaletten Cadılara',
      sinif: 'Kopuş',
      konum: 'Hayalet (9) → Yeni kehanetler (10) arası',
      yasamSirasi: 8,
      sonraSahneNo: 10,
      onceBaslik: 'Ziyafet rezaleti',
      onceMetin: 'Hayalet sahnesinden sonra ziyafet dağıldı; konuklar Macbeth\'in çöküşüne tanık oldu.',
      boslukMetin: 'ziyafet sonrası utanç ve panik · o geceyi geçirmek · cadıları arama kararı · son bir güvence arayışı · vicdanın yerini paranoyaya bırakışı',
      sonraBaslik: 'Yeni kehanetler',
      sonraMetin: 'Sahne 10\'da Macbeth cadılara geri döner, daha fazla güvence ister, daha karanlık bilgiler alır.',
      sentez: 'Ziyafetin rezaletinden cadılara dönüşe kadar olan geceyi Shakespeare atlar. Oyuncu bu boşlukta, herkesin önünde çöken bir kralın güvence için karanlığa dönme kararını nasıl verdiğini kurar.',
      altSorular: [
        { no: 1, baslik: 'İlişkisel', soru: 'Ziyafet bitince Lady Macbeth\'le aralarında ne kondu, ne kalmadı?' },
        { no: 2, baslik: 'İçsel', soru: 'Cadıları aramaya tam olarak hangi an karar verdi — umutsuzluktan mı, hesaptan mı?' },
        { no: 3, baslik: 'Beden', soru: 'O gece uyuyabildi mi; bedeni dinlenmeye izin verdi mi?' },
      ],
    },
  ],

  // ─── 14 SAHNE ─────────────────────────────────────────────────────────────

  sahneler: [
    {
      id: '1.3', perde: 1,
      label: 'Cadılarla karşılaşma',
      desc: 'Savaş sonrası ormanda üç cadı kehaneti verir: "Kral olacaksın."',
      icDurum: 'Şaşkınlık, hırs, inanmak isteme. Banquo\'ya döner: "İyi mi kötü mü bu?"',
      bosluk: 'Kehanetten sonra saraya kadar olan yolculuk. Aklında ne dönüyor?',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 1,
      kritikMi: true,
    },
    {
      id: '1.4', perde: 1,
      label: 'Cawdor unvanını alır',
      desc: 'Kral Duncan, Macbeth\'i Cawdor Beyi ilan eder. Kehanet gerçekleşmeye başladı.',
      icDurum: "Hız kazanan arzu. Ama bir engel var: Duncan'ın oğlu Malcolm veliahd seçildi.",
      bosluk: "Lady Macbeth'e mektup yazarken içinde ne hissetti?",
      travmaKategorileri: [], travmaSeviyesi: 0,
      kritikMi: false,
    },
    {
      id: '1.7', perde: 1,
      label: "Duncan'ı öldürme kararsızlığı",
      desc: 'Ziyafet sırasında odaya çekildi. Yalnız. Kendisiyle hesaplaşıyor.',
      icDurum: '"Bunu yapmamalıyım." Ama Lady Macbeth onu geri çekecek.',
      bosluk: 'O odada kaç dakika geçirdi? Hangi an geri döndü?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 2,
      kritikMi: true,
    },
    {
      id: '2.1', perde: 2,
      label: 'Hançer halüsinasyonu',
      desc: 'Gece yarısı koridorda havada bir hançer görüntüsü. Gözleri mi, beyni mi?',
      icDurum: 'Zihin artık gerçekle kurguyu ayırt edemiyor. İlk kırılma.',
      bosluk: "Halüsinasyondan Duncan'ın odasına girişe kadar geçen süre.",
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 2,
      kritikMi: true,
    },
    {
      id: '2.2', perde: 2,
      label: "Duncan'ı öldürür",
      desc: "Kral'ın odasına girdi. Geri döndü. Hançerler elinde.",
      icDurum: '"Bunu ben mi yaptım?" Ses duyuyor. "Uyku öldürüldü."',
      bosluk: 'Odadaki süre. Hiçbir sahne göstermiyor. Oyuncu dolduracak.',
      travmaKategorileri: ['siddet', 'ahlaki_yara'], travmaSeviyesi: 3,
      kritikMi: true,
    },
    {
      id: '2.3', perde: 2,
      label: 'Cinayeti gizleme',
      desc: 'Herkes uyandı. Macduff buldu. Macbeth hizmetçileri öldürür.',
      icDurum: 'Kontrol. Rol yapma. İlk performans: kral gibi davranmak.',
      bosluk: 'Lady Macbeth bayılınca ne düşündü?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 2,
      kritikMi: false,
    },
    {
      id: '3.1', perde: 3,
      label: "Banquo'dan tehdit",
      desc: "Banquo'nun çocukları kral olacak dedi cadılar. Banquo tehlikeli.",
      icDurum: 'Paranoya başladı. En iyi dost artık düşman.',
      bosluk: "Banquo'ya ihanet kararını verdiği an.",
      travmaKategorileri: ['ihanet'], travmaSeviyesi: 1,
      kritikMi: true,
    },
    {
      id: '3.2', perde: 3,
      label: "Lady Macbeth'le uzaklaşma",
      desc: 'İkisi arasında bir şeyler kırıldı. Planlarını artık paylaşmıyor.',
      icDurum: 'Yalnızlaşma. Güce sahip ama kimse yok yanında.',
      bosluk: "O gecelerde Lady Macbeth'e ne söylemek isteyip söyleyemedi?",
      travmaKategorileri: ['kayip'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: '3.4', perde: 3,
      label: "Banquo'nun hayaleti",
      desc: 'Ziyafet sofrasında taht boş değil. Sadece o görüyor.',
      icDurum: 'Panik. Kontrol kaybı. Herkese delilik performansı sergiledi.',
      bosluk: 'Hayalet kaybolunca — gerçek mi yoksa korku mu?',
      travmaKategorileri: ['zihinsel_kirilma', 'ahlaki_yara'], travmaSeviyesi: 3,
      kritikMi: true,
    },
    {
      id: '4.1', perde: 4,
      label: 'Yeni kehanetler',
      desc: 'Cadılara geri döndü. Daha fazlasını istedi. Daha karanlık bilgiler aldı.',
      icDurum: 'Bağımlılık. Kehanet artık güç vermiyor, uyuşturuyor.',
      bosluk: 'Cadılardan ayrıldıktan sonra yalnız kaldığı an.',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 2,
      kritikMi: true,
    },
    {
      id: '5.3', perde: 5,
      label: 'Savaşa hazırlanma',
      desc: 'Beyler onu terk ediyor. Ordu yaklaşıyor. Ama kehanet güvencesi var.',
      icDurum: 'Yanlış bir güven. Ya da güvene inanmak zorunda.',
      bosluk: 'Asker sayısını öğrendiği an.',
      travmaKategorileri: [], travmaSeviyesi: 0,
      kritikMi: false,
    },
    {
      id: '5.5', perde: 5,
      label: "Lady Macbeth'in ölümü",
      desc: 'Haber geldi. Cevabı: "Yarın, yarından sonra, yarından sonra..."',
      icDurum: 'Boşluk. Keder değil — anlamsızlık. Hayat "yürüyen bir gölge".',
      bosluk: "Haberi aldıktan savaş alanına çıkana kadar. Ne düşündü Lady Macbeth'e dair?",
      travmaKategorileri: ['kayip', 'varolussal'], travmaSeviyesi: 3,
      kritikMi: true,
    },
    {
      id: '5.7', perde: 5,
      label: "Genç Seyward'ı öldürür",
      desc: 'Savaş alanında genç asker. Kolayca öldürdü. Kehanet doğru.',
      icDurum: 'Kısa bir zafer. Doğrulandı hissi. Ama Macduff geliyor.',
      bosluk: null,
      travmaKategorileri: ['siddet'], travmaSeviyesi: 2,
      kritikMi: false,
    },
    {
      id: '5.8', perde: 5,
      label: 'Macduff karşısında son',
      desc: '"Kadından doğmadım." Macduff: "Erken doğumla kopardılar beni."',
      icDurum: 'Her şey çöktü. Ama savaşmayı seçti.',
      bosluk: 'O son anda — pişmanlık mı, özgürlük mü, yoksa hiçlik mi?',
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 3,
      kritikMi: true,
    },
  ],

  // ─── BOŞLUKLAR — YAZARIN SUSTUĞU YERLER ───────────────────────────────────
  // Shakespeare'in göstermediği, oyuncunun yazacağı anlar.
  // Her boşluk kendi mini egzersizi olarak çalışır.

  bosluklar: [
    {
      id: 'b-pre',
      tip: 'pre',
      konum: 'Pre-senaryo',
      baslik: 'Senaryodan Önce',
      kisaAciklama: 'Kim olduğu, çocukluğu, savaştan önceki yaşamı.',
      uzunAciklama:
        "Shakespeare bize Macbeth'i savaş alanından kapıyor. Ama o ana kadar bir hayat var. Kimdi? Nereden geldi? Hangi anılar onu bu adam yaptı?",
      sorular: [
        'Macbeth\'in çocukluğunda en güçlü hatırası ne olabilir?',
        'Babası nasıl biriydi? Onunla ilişkisi nasıldı?',
        'İlk savaşına çıktığında kaç yaşındaydı? Ne hissetti?',
        'Lady Macbeth\'le ilk nasıl karşılaştılar?',
        'İktidar arzusu hangi anda doğdu? Bilinçli bir arzu mu, yoksa hep var mıydı?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-1',
      tip: 'ara',
      konum: '1.3 → 1.4 arası',
      baslik: 'Ormandan Saraya',
      kisaAciklama: 'Cadıların kehanetinden Duncan\'ın huzuruna varış.',
      uzunAciklama:
        'Cadılar kayboldu. Banquo şaşkın. Macbeth\'in zihninde "kral" kelimesi yankılanıyor. Saraya kadar yol var — kimseyle konuşmadan, ama içeride sürekli bir konuşma.',
      sorular: [
        'At üzerinde mi yürüyor mu? Yolu hangi ritimde alıyor?',
        'Banquo\'ya ne söyleyebilirdi ama söylemedi?',
        'Kehaneti ilk kez ciddiye aldığı an hangisi?',
        '"Kral" kelimesini ilk kez sesli düşündüğünde — ne hissetti?',
      ],
      sure: '12 dk',
    },
    {
      id: 'b-2',
      tip: 'ara',
      konum: '1.4 → 1.7 arası',
      baslik: 'Mektup Yazma Süreci',
      kisaAciklama: 'Lady Macbeth\'e haberi vermek için yazılan mektup.',
      uzunAciklama:
        'Cawdor olduğunu öğrendi. Eve dönüş yolunda Lady Macbeth\'e mektup yazdı. O mektubu yazarken hangi kelimeyi sildi? Hangi cümleyi düşünüp yazmadı?',
      sorular: [
        'Mektubu yazmaya başladığı an ne hissetti?',
        'Cadılardan bahsederken kelimeleri nasıl seçti?',
        'Söyleyemediği şey neydi? "Onu öldürmemiz gerekecek" diye yazabilir miydi?',
        'Mühürlerken — bu mektup geri alınamaz, biliyor mu?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-3',
      tip: 'ic',
      konum: '1.7 içi',
      baslik: 'Karar Odasında Tek Başına',
      kisaAciklama: '"Yapacağım" dedikten sonra Duncan\'ın odasına kadar.',
      uzunAciklama:
        'Lady Macbeth onu ikna etti. "Yapacağım" dedi. Ama bu cümle ile gerçekten yapıyor olması arasında bir süre var. O sürede kaç kez vazgeçti? Kaç kez geri çağırdı kendini?',
      sorular: [
        '"Yapacağım" dediği an bedeninin neresinde değişiklik oldu?',
        'Hizmetkârlara şarap içirirken onlara ne diyebildi?',
        'Lady Macbeth yataktan kalkıp çanı çaldığında — son şansı miydi?',
        'Hançere uzandığı an, gerçekten alacağını biliyor muydu?',
      ],
      sure: '20 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-4',
      tip: 'ic',
      konum: '2.2 odasının içi',
      baslik: "Duncan'ın Odasında",
      kisaAciklama: 'Cinayetin kendisi — Shakespeare\'in göstermediği an.',
      uzunAciklama:
        'Macbeth odaya girdi. Geri döndü. Aralarındaki süre — belki 30 saniye, belki 5 dakika. O odada ne yaptı? Ne gördü? Ne söyledi (söyledi mi)? Bu en derin boşluk.',
      sorular: [
        'Odaya girdiğinde Duncan\'ın yüzü görünüyor muydu?',
        'Duncan rüyasında bir şey söyledi mi? Söyleseydi sen ne duyardın?',
        'İlk darbe nereye? İkincisi geldi mi?',
        'Yatağın ucundan döndüğünde — son kez baktı mı?',
        'Geri çıkarken ne kadar zaman geçti? Ya o sürede biri uyansaydı?',
      ],
      sure: '25 dk',
      travmaSeviyesi: 3,
    },
    {
      id: 'b-5',
      tip: 'ara',
      konum: '2.2 → 2.3 arası',
      baslik: 'Uyumadığı Saatler',
      kisaAciklama: 'Cinayetten Macduff\'ın kapıyı çalışına kadar.',
      uzunAciklama:
        'Eller yıkandı. Ama uyku gelmedi. "Uyku öldürüldü" dedi. O saatlerde ne yaptı? Lady Macbeth ne dedi? Sessizlik miydi yoksa konuştular mı?',
      sorular: [
        'Eller yıkandı — ama hâlâ kanlı görüyor mu?',
        'Lady Macbeth\'le bakışmaları nasıldı?',
        'Bir an pencereye gitti — dışarıda ne gördü?',
        'Macduff kapıyı çaldığında ilk düşüncesi neydi?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-6',
      tip: 'ara',
      konum: '3.1 → 3.4 arası',
      baslik: 'Ziyafete Hazırlık',
      kisaAciklama: 'Banquo\'yu öldürtme emrinden ziyafet sofrasına.',
      uzunAciklama:
        'Suikastçileri gönderdi. Ziyafet hazırlanıyor. O saatlerde Macbeth nerede? Lady Macbeth\'le konuştu mu? Banquo\'nun gelmeyeceğini biliyor — ama herkes onun geleceğini bekliyor.',
      sorular: [
        'Suikastçileri uğurladıktan sonra ilk gittiği yer neresi oldu?',
        'Ziyafet kıyafetlerini giyerken aynaya baktı — kimi gördü?',
        'Lady Macbeth\'e Banquo\'yu söyledi mi? Söyleseydi nasıl söylerdi?',
        'Sofraya otururken — Banquo\'nun ölü olduğunu biliyor mu, yoksa bekliyor mu?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-7',
      tip: 'ara',
      konum: '3.4 → 4.1 arası',
      baslik: 'Hayaletten Cadılara',
      kisaAciklama: 'Ziyafet rezaletinden cadılara dönüşe kadar.',
      uzunAciklama:
        'Ziyafet bitti. Konuklar gitti. Macbeth utanç ve panik içinde. O geceyi nasıl geçirdi? Cadıları aramaya hangi anda karar verdi?',
      sorular: [
        'Ziyafet bitince Lady Macbeth\'le aralarında ne kondu, ne kalmadı?',
        'O gece uyudu mu? Uyuduysa rüyasında ne gördü?',
        'Cadıları aramaya gitme kararını hangi an verdi?',
        'Ormana giderken — bu sefer yalnız. Banquo yok. Hangi farkı hissetti?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-8',
      tip: 'ara',
      konum: '4.1 → 5.3 arası',
      baslik: 'Macduff\'tan Sonra Sessizlik',
      kisaAciklama: 'Macduff\'ın ailesinin katlinden savaş hazırlığına.',
      uzunAciklama:
        'Macduff kaçtı. Macbeth ailesini öldürttü. Sonra haftalar var — Macduff geri dönmeden önce. O zamanda Macbeth ne yapıyor? Beyler bir bir kaçıyor. Lady Macbeth çekiliyor. O yalnızlaşma nasıl bir yalnızlık?',
      sorular: [
        'Macduff\'ın ailesinin öldüğünü öğrendiğinde — kazandı mı, kaybetti mi?',
        'Sarayında dolaşırken kaç kişi kalmıştı?',
        'Lady Macbeth\'e en son ne zaman dokundu?',
        'Aynaya baktığı son an — kimi gördü?',
      ],
      sure: '18 dk',
    },
    {
      id: 'b-9',
      tip: 'ara',
      konum: '5.3 → 5.5 arası',
      baslik: 'Çığlığı Duyduğu An',
      kisaAciklama: 'Lady Macbeth\'in çöküşünü ilk duyumsadığı an.',
      uzunAciklama:
        'Saraydan bir çığlık geldi. "Ne bağırışı bu?" diye sordu. Cevap gelmeden önceki süre — kim olduğunu zaten biliyor muydu? Bu ana hazır mıydı?',
      sorular: [
        'Çığlığı duyduğunda bedeninde ne hareket etti?',
        '"Ne bağırışı bu?" derken sesinin tonu — soru mu, kabul mu?',
        'Cevabı beklerken nefes aldı mı?',
        'Lady Macbeth\'in öldüğünü duyduğu an — ilk dakika sessizlik. O sessizlikte ne vardı?',
      ],
      sure: '15 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-10',
      tip: 'ara',
      konum: '5.7 → 5.8 arası',
      baslik: 'Son Dakikalar',
      kisaAciklama: 'Genç Seyward\'dan Macduff\'a kadar.',
      uzunAciklama:
        'Genç Seyward\'ı öldürdü. "Kadın doğurmadı" diye düşündü — kehanet hâlâ koruyor. Ama Macduff geliyor. O dakikalarda ne biliyor, ne hissediyor?',
      sorular: [
        'Genç Seyward öldükten sonra — gerçekten zafer hissetti mi?',
        'Etrafına baktığında kaç düşman gördü?',
        'Macduff\'ı uzaktan tanıdı mı? Sesi mi, yürüyüşü mü?',
        '"Kadından doğmadım" sözünü en son ne zaman tekrar etti içinde?',
      ],
      sure: '12 dk',
    },
    {
      id: 'b-post',
      tip: 'post',
      konum: 'Post-senaryo',
      baslik: 'Senaryodan Sonra',
      kisaAciklama: 'Ölümünden sonra zihninde kalan iz — oyuncuda devam eden.',
      uzunAciklama:
        'Macbeth öldü. Ama oyuncu hâlâ orada. Karakteri içine aldı, taşıdı, salıveriyor şimdi. Bu boşluk Macbeth\'in değil — oyuncunun. Karakter sende ne bıraktı? Neyi alıp götürdü?',
      sorular: [
        'Macbeth\'in son nefesi senin bedeninde nereye yerleşti?',
        'Onu bırakmak — hangi adımdan başlar?',
        'Macbeth\'in sende sevdiğin bir yanı oldu mu? Korktuğun?',
        'Bu rolden çıktığında — sen mi geri döndün, yoksa biraz değişmiş biri mi?',
      ],
      sure: '15 dk',
      tipDeroling: true,
    },
  ],

  // ─── ZİHİNSEL ANTRENMANLAR — 8 EGZERSİZ, ITC FORMATI ──────────────────────

  antrenmanlar: [
  
    // ==========================================================================
    //  EGZERSİZ 1 — Cadılarla İlk Karşılaşma
    // ==========================================================================
    {
      id: 'cadilarla-karsilasma',
      no: 1,
      baslik: 'Cadılarla İlk Karşılaşma',
      altbaslik: 'Kehanet eşiğinde',
      sure: '20-25 dk',
      seviye: 'Temel',
      bagliSahne: '1.3',
      travmaKategorileri: ['ihanet', 'varolussal'],
      travmaSeviyesi: 2,
  
      girisMetni: 'Bu egzersizde Macbeth\'in cadılarla ilk karşılaştığı âna gideceğiz. Henüz hiçbir şey olmadı ama bir şey söylendi. Söylenmeden önce belki sadece içinde bir kıvılcımdı bu — şimdi bir kehanet oldu. Söze döküldü. Ve söze dökülen şey artık geri alınamaz.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Az önce kazanılmış bir savaştan dönüyorsun. Banquo yanında. Mekanı bul — açık alan mı, çorak topraklar mı, sis var mı?',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Önünüzde üç figür beliriyor. Sıradan değiller. Bedenleri belirsiz, sesleri çakışıyor. Bu figürleri ilk gördüğünde bedenin nasıl tepki veriyor?',
          soru: 'İlk tepki nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Sen az önce zaferin Macbeth\'iydin — kahraman, sadık, yorgun. Şimdi bu üç figürün önünde duruyorsun. Postürün değişti mi? Kollar nerede, ağırlık nerede, bakış nerede?',
          soru: 'Postürdeki değişim',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Cadılardan biri sana şöyle dedi: "Selam sana Macbeth, Cawdor Beyi olacak." Sonra ikincisi: "Selam sana, gelecekte Kral olacak Macbeth." Bu ikinci cümle bedenine vurduğunda neresi tepki veriyor?',
          soru: 'Cümle bedeninde nereye değdi?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Cümle "Kral olacak" duyulduğunda zihninde bir görüntü beliriyor mu? Bir taht, bir taç, bir gölge, bir kanlı el? Hangi imge önce gelir?',
            isitsel:   'Cadıların sesi normal değil. Cümle "Kral olacak" sözleri içinde nasıl yankılanıyor? Tek ses mi, üç ses bir arada mı, bir uğultu mu?',
            kinestetik:'Bedenin "Kral olacak" sözünü duyduğunda ne yapıyor? Geri çekiliyor mu, ileri eğiliyor mu, donmuş mu kalıyor? Hangi kas gerildi?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Banquo yanında. O da duydu. Sana bakıyor. Sen henüz konuşmadın. İçinde iki şey çatışıyor: Bu sözleri ciddiye almak ve almamak. Hangi taraf daha güçlü, bedeninin sana söylediği ne?',
          soru: 'Hangi taraf?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak içinden geçir: "Eğer kader beni kral yapacaksa, kader beni kral yapsın — ben kıpırdamayayım." Bu bir teslimiyet mi, bir gizlenme mi, yoksa zaten kıpırdamaya hazırlanan birinin yalanı mı?',
          soru: 'Cümlenin altında ne var?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Buradasın. Macbeth\'in eşiği orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 2 — Lady Macbeth'in İknası
    // ==========================================================================
    {
      id: 'lady-iknasi',
      no: 2,
      baslik: 'Lady Macbeth\'in İknası',
      altbaslik: 'Vicdanın eğilme noktası',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: '1.7',
      travmaKategorileri: ['ahlaki_yara', 'cinsel'],
      travmaSeviyesi: 2,
  
      girisMetni: 'Bu egzersizde Macbeth\'in Duncan\'ı öldürme kararını verdiği âna gideceğiz. Az önce karar vermiştin: yapmayacaksın. Ama Lady Macbeth seninle konuştu. Şimdi karar yeniden açık. Bu sadece bir ikna sahnesi değil — bu vicdanının başkasının iradesiyle eğildiği an.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Kalede bir oda, gece yarısı, Duncan misafir olarak yatıyor başka bir odada. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Az önce Lady Macbeth\'in yanından ayrıldın. Ona "Yapamayacağım" dedin. Ama o seni geri çevirdi. Sözleriyle, gözleriyle, sevgisini geri çekme tehdidiyle. Bu ânı düşün — Lady Macbeth\'in sözleri bedeninde nereye yerleşti?',
          soru: 'Sözler nereye değdi?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Bu yeni karar verme ânındaki Macbeth, az önceki Macbeth\'le aynı mı? Postürün eğildi mi, çöktü mü, sertleşti mi? Sen tarif etme — bedenin söylesin.',
          soru: 'Postürün ne diyor?',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Lady Macbeth sana şöyle demişti: "Babamı andırmasaydı uyurken, kendim yapardım." Bu cümle nasıl bir cümle? Suçlama mı, sevgi mi, manipülasyon mu, yoksa onun da gerçek inancı mı? Hangi tonu sende daha çok yankılanıyor?',
          soru: 'Cümlenin tonu',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Lady Macbeth\'in yüzünü zihninde gör. Sözlerinin söylendiği anki yüz. Gözlerinde ne var? Onun yüzü senin için bir kapı mı, bir ayna mı, bir tuzak mı?',
            isitsel:   'Onun sesinin tonu — sevgi mi, sertlik mi, soğuk mantık mı? Bu ses senin bedeninde nereyi açıyor, nereyi kapıyor?',
            kinestetik:'Lady Macbeth sana fiziksel olarak yaklaşmıştı, dokunmuştu. O dokunuş şimdi senin bedeninde nerede yaşıyor? Kolunda mı, omzunda mı, göğsünde mi?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şimdi içinde dönen bir cümle var: "Yapacağım." Bu cümle senden mi geliyor, Lady Macbeth\'ten mi, yoksa ikinizin arasından çıkan üçüncü bir şeyden mi? Bedeninin neresinden çıktı?',
          soru: 'Cümle nereden geldi?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak içinden geçir: "Hazırım. Tüm bedenimle bu korkunç işe gerildim." Bu bir karar mı, bir teslim oluş mu, yoksa kendine yalan söyleme mi?',
          soru: 'Bu cümle ne?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Yaşıyorsun, buradasın. Macbeth\'in karar ânı orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 3 — Hançerli Halüsinasyon
    // ==========================================================================
    {
      id: 'hancerli-halusinasyon',
      no: 3,
      baslik: 'Hançerli Halüsinasyon',
      altbaslik: 'Zihnin gerçeklikle bağı kopuyor',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: '2.1',
      travmaKategorileri: ['zihinsel_kirilma', 'varolussal'],
      travmaSeviyesi: 3,
  
      girisMetni: 'Bu egzersizde Macbeth\'in Duncan\'ı öldürmek üzere yürürken havada bir hançer gördüğü âna gideceğiz. Bu sıradan bir görüntü değil — zihninin gerçeklikle bağının çatlamaya başladığı an. Bedeninle yapacağın bir şeye, zihnin önceden bedeninden çıkmış bir versiyonu sunuyor. Yapmamış gibi göstermeye, ama görerek, başarmaya çalışıyor.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz zihinsel bir kırılmaya yaklaşıyor. Hazır olduğunda devam et. Acele etme.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Kalede gece yarısı. Duncan başka bir odada uyuyor. Sen koridordasın ya da kendi odanda. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Az önce Lady Macbeth seni hazırladı. Karar verildi. Ama henüz yapılmadı. Bedenin şu an iki şey arasında: Yapılacak olan ve henüz yapılmamış olan. Bu arada nasıl bir his var bedende?',
          soru: 'Bedeninin durumu',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Yürümek üzeresin — Duncan\'ın odasına. Bu bir yürüyüş mü, bir sürükleniş mi, bir mecbur kalış mı? Bedenin nasıl ilerliyor, sen tarif etme, dene.',
          soru: 'Yürüyüşün niteliği',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Aniden — havada bir şey beliriyor. Bir hançer. Gerçek değil. Ama gerçek görünüyor. Sen ona uzanıyorsun, eline gelmiyor. Hâlâ orada. Bu görüntüyü zihninde inşa et — ona ne kadar yaklaşırsan yaklaş, dokunamıyorsun. Bedenin nasıl tepki veriyor?',
          soru: 'Bedenin tepkisi',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Hançer nasıl bir görüntü? Net mi, bulanık mı? Kanlı mı, parlak mı? Sabit mi, hareketli mi? Etrafında ne var? Bu görüntüyü detaylandır.',
            isitsel:   'Bu halüsinasyonun bir sesi var mı? Bir uğultu, bir fısıltı, bir çıngırak, bir ölüm sessizliği? Yoksa sadece kendi nefesinin sesi mi?',
            kinestetik:'Hançere uzandığında elinde ne hissediyorsun? Boşluk mu, soğukluk mu, bir titreşim mi? Bedenin ona yaklaşmak mı istiyor, kaçmak mı?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak içinden geçir: "Önümde gördüğüm bir hançer mi? Sapı bana dönük… Gel, tutayım seni." Sen ona seslenmek istiyorsun ama bilmiyorsun: Bu zihninin sana yardım etmesi mi, yoksa seni delirmenin eşiğine getirmesi mi?',
          soru: 'Bu cümle ne?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Hançer kayboldu. Ama içinde bir karar kalmıyor — bir saplantı kaldı. Şimdi ne yapacaksın? Yürümeye devam mı edeceksin? Bedenin sana ne söylüyor?',
          soru: 'Beden ne diyor?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz derin bir zihinsel sarsıntı yerine götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Etrafındaki üç şeyi say. Hançer orada değil — sen burada, gerçek bir bedendesin. Su iç. Birkaç dakika öylece otur. Bugün bitince fiziksel bir aktivite — yürüyüş, duş, biriyle sohbet — yapmak iyi gelecek.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 4 — Cinayet Sonrası Eller
    // ==========================================================================
    {
      id: 'cinayet-sonrasi',
      no: 4,
      baslik: 'Cinayet Sonrası Eller',
      altbaslik: 'Geri dönüşü olmayan an',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: '2.2',
      travmaKategorileri: ['siddet', 'ahlaki_yara'],
      travmaSeviyesi: 3,
  
      girisMetni: 'Bu egzersizde Macbeth\'in Duncan\'ı öldürdükten hemen sonraki âna gideceğiz. Yapıldı. Geri dönüşü yok. Ellerinde kan var — gerçek kan. Ve içinde bir şey: uyku artık imkansız. Eylem bitti, ama eylemin gerçekliği şimdi başlıyor.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz şiddet sonrası bir âna gidiyor. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Az önce Duncan\'ın odasından çıktın. Koridorda mısın, kendi odanda mısın? Lady Macbeth nerede? Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Ellerine bak. Üzerlerinde kan var. Kuruyor mu, taze mi? Sıcak mı, soğuk mu? Sadece ellerinde mi, yoksa daha fazla mı? Bunu bedeninde hisset — ama tarif etme, sadece izle.',
          soru: 'Eller şu an nasıl?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Cinayet öncesi Macbeth ile şu anki Macbeth aynı bedende mi? Postürün ne kadar değişti? Bir bedensel deneme yap — eski hâlini hatırla, sonra şimdiki hâline gel.',
          soru: 'İki Macbeth arası fark',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Yan odada bir ses duydun — sanki biri uyandı. Bedeninde anlık bir şey: korku mu, panik mi, donma mı? Şimdi kulak kabartıyorsun. Henüz nefes almıyorsun. O bekleyiş bedeninde nerede?',
          soru: 'Bekleyiş nerede?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Ellerine bakıyorsun. Bu kan görüntüsü bedeninde başka bir görüntüyü tetikliyor mu? Duncan\'ın yüzü mü, kendi gelecekteki hâlin mi, çocuklarının olmayan yüzü mü?',
            isitsel:   'Bir ses tekrar tekrar başında dönüyor mu? "Sleep no more" — uyku yok artık. Bu sesin tonu nasıl? Kendi sesin mi, başka bir ses mi? Yüksek mi, fısıltı mı?',
            kinestetik:'Ellerinde kan ağırlığı var. Bu ağırlık sadece ellerinde mi kalıyor, yoksa kollarına, omuzlarına, göğsüne mi yayılıyor? Yıkamak istiyor musun, yoksa bedenin kabullendi mi?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Lady Macbeth geliyor. Sana şöyle diyor: "Bu eller daha çok kanı görür." Sen ona şu cümleyi söylüyorsun: "Tüm Neptün\'ün okyanusu bu kanı yıkayabilir mi?" Bu cümle bir soru mu, bir kabulleniş mi, bir çığlık mı?',
          soru: 'Cümlenin niteliği',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak içinden geçir: "Glamis Beyi uykuyu öldürdü, artık Cawdor uyumayacak, Macbeth artık uyumayacak." Bu bir kehanet mi, bir lanet mi, yoksa kendi geleceğine söylediği bir şey mi?',
          soru: 'Bu cümle ne?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz çok yoğun bir yere götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Ellerine bak — onlar temiz, senin gerçek ellerin. Adını yüksek sesle söyle. Bugünün tarihini söyle. Etrafındaki üç şeyi say. Bir bardak su iç. Bugün bitince mutlaka fiziksel bir aktivite — duş, yürüyüş, dostla sohbet — yap.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 5 — Banquo'nun Hayaleti
    // ==========================================================================
    {
      id: 'banquo-hayaleti',
      no: 5,
      baslik: 'Banquo\'nun Hayaleti',
      altbaslik: 'Kamu önünde çatlama',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: '3.4',
      travmaKategorileri: ['zihinsel_kirilma', 'ahlaki_yara'],
      travmaSeviyesi: 3,
  
      girisMetni: 'Bu egzersizde Macbeth\'in ziyafette Banquo\'nun hayaletini gördüğü âna gideceğiz. Etrafındaki herkes konuşuyor, gülüyor, yiyor. Sadece sen onu görüyorsun. Sadece sen biliyorsun, neden orada. Bu bir zihinsel kırılma değil — bu kamu önünde çatlama.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz sosyal bir alan içinde içsel kırılmayı çalışacak. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Bir ziyafet salonu, lordlar oturmuş, yiyecekler hazır. Sen kralsın, başkanlık masasındasın. Etrafında kimler var? Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Az önce sana haber geldi: Banquo öldü ama Fleance kaçtı. Senin tetiklediğin bir cinayet. Şimdi misafirlerinin önündesin. İçinde iki şey var: Cinayet bilgisi ve ev sahibi rolü. Bedeninde bunlar nerede oturuyor?',
          soru: 'İki şey nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Kralsın, ev sahibisin. Bu rol bedeninde nasıl? Omurgaya, çeneye, omuzlara nasıl yansıyor? Sonra bir an düşün — içinde sakladığın şey bu duruşa ne yapıyor? Çatlatıyor mu?',
          soru: 'Rol ve gerçek',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Senin sandalyene doğru bakıyorsun. Orada biri oturuyor — Banquo. Kanlı, ölü, ama orada. Etrafındakiler onu görmüyor. Sadece sen. Bedenin nasıl tepki veriyor — ayağa kalk istiyor mu, donmak mı, geri çekilmek mi?',
          soru: 'Beden ne yapıyor?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Banquo\'nun hayaleti nasıl bir görüntü? Solgun mu, kanlı mı, sessiz mi, sana bakıyor mu? Etrafındakilerin yüzü ile onun yüzü aynı sahnede nasıl?',
            isitsel:   'Etrafta gürültü var — yemek, konuşma, müzik. Ama Banquo sessiz. Bu sessizlik etraftaki gürültüyü yutuyor mu? Yalnızca onu mu duyuyorsun, ya da onu hiç duymuyor musun?',
            kinestetik:'Bedenin sandalyeden kalkmaya hazırlanıyor mu, yapışmış mı? Ellerinde, ayaklarında titreme var mı? Kontrolü kaybetmeye yakın mısın?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Lady Macbeth fısıldıyor: "Bu sadece bir korku. Yürü, ev sahipliğini yap." Ama sen onu duymuyorsun gibi. Banquo\'ya bakıyorsun. Şimdi ona söyleyeceğin bir cümle var, dışarıya sesli ya da sessizce — ne söyleyeceksin?',
          soru: 'Banquo\'ya cümlen',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak içinden geçir: "Sallanma, kanlı saçlarınla bana — ben yapmadım." Bu bir inkar mı, bir yalvarma mı, bir kendini koruma mı? Beden bu cümleyi söylerken ne yapıyor?',
          soru: 'Cümle nasıl çıkıyor?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz çatlama eşiğine götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Etrafındaki üç şeyi say. Banquo orada değil — sen burada, kendi bedeninde. Su iç. Birkaç dakika öylece otur. Bugün fiziksel bir aktivite yap.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 6 — Cadılara Geri Dönüş
    // ==========================================================================
    {
      id: 'cadilara-donus',
      no: 6,
      baslik: 'Cadılara Geri Dönüş',
      altbaslik: 'Kibrin doruğunda yardım dilenmek',
      sure: '20-25 dk',
      seviye: 'İleri',
      bagliSahne: '4.1',
      travmaKategorileri: ['varolussal', 'ahlaki_yara'],
      travmaSeviyesi: 2,
  
      girisMetni: 'Bu egzersizde Macbeth\'in cadılara geri döndüğü âna gideceğiz. Artık seni onlar bulmuyor — sen onları arıyorsun. Bilgi istiyorsun. Güvence istiyorsun. Bu artık kahraman bir adamın kuşkusu değil — bu çaresiz bir adamın yardım dilenmesi. Ama o bilmiyor henüz çaresiz olduğunu.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Cadıların inine geldin. Karanlık, isli, doğal değil. Sen onları aradın bu sefer. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'İlk karşılaşmada onlar seni şaşırtmıştı. Şimdi sen onları talep ediyorsun. Bu fark bedeninde nerede oturuyor? Neyin değiştiğini bedenin biliyor mu?',
          soru: 'Fark nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Bu, talep eden Macbeth — kibrin doruğunda. Postür sertleşti mi? Çeneyi kaldırdın mı? Bu duruşun altında ne var — gerçek bir güç mü, kendini büyük göstermek için bir savunma mı?',
          soru: 'Postürdeki gerçek',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Cadılar üç görüntü çağırıyor sana. İlki: "Macduff\'tan sakın." İkincisi: "Kadından doğmamış kimse Macbeth\'e zarar veremez." Üçüncüsü: "Birnam Ormanı Dunsinane\'e gelmedikçe yenilmezsin." İkinci ve üçüncü cümle bedeninde nasıl yankılandı? Rahatlama mı, kibir mi, şüphe mi?',
          soru: 'Üç cümle ne yaptı?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Üç görüntü çağrıldı — silahlı bir kafa, kanlı bir çocuk, taçlı bir çocuk. Bu üç imge senin için ne anlama geliyor? Hangisi en çok aklına kazındı?',
            isitsel:   'Cadıların sesi nasıl şimdi? İlk seferinden farklı mı? Daha güçlü mü, daha alaycı mı, daha mesafeli mi? Sen onlara nasıl bir tonla soruyorsun?',
            kinestetik:'Bu inde duruşun farklı. Daha geniş mi, daha gerilmiş mi? Cadıların ortasında olmak bedenine ne yapıyor — küçültüyor mu, büyütüyor mu?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak içinden geçir: "Yenilmezim. Kadından doğan kimse beni yenemez." Bu cümleyi söylerken bedenin gerçekten inanıyor mu, yoksa inandırmaya mı çalışıyor?',
          soru: 'Cümlenin altında inanç var mı?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Cadılar kayboluyor. Sen yalnız kalıyorsun. Ama içinde bir şey değişti — daha güçlü mü, daha boş mu? Bedenin sana ne söylüyor?',
          soru: 'Sen ne hissediyorsun?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Buradasın. Macbeth\'in kibri orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 7 — Lady Macbeth'in Ölümü
    // ==========================================================================
    {
      id: 'lady-olumu',
      no: 7,
      baslik: 'Lady Macbeth\'in Ölümü',
      altbaslik: '"Tomorrow and tomorrow"',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: '5.5',
      travmaKategorileri: ['kayip', 'varolussal'],
      travmaSeviyesi: 3,
  
      girisMetni: 'Bu egzersizde Macbeth\'in Lady Macbeth\'in öldüğünü öğrendiği âna gideceğiz. Tek sevdiğin, tek ortağın, tek seninle bu işin ağırlığını taşıyanın artık yok. Ama tepkin bekleneni vermiyor — ağlamıyorsun, çığlık atmıyorsun. Sadece bir cümle çıkıyor: "Yarın, yarın, yarın…" Ve bu cümle aslında zamanın anlamsızlığı üzerine ettiğin son sözdür.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz büyük bir kayba ve varoluşsal yorgunluğa götürüyor. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Dunsinane Kalesi. Düşman ordusu yaklaşıyor. Senin yanında çok az adam kaldı. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Bir hizmetkar geliyor. Sana haber veriyor: "Kraliçe öldü, lordum." Bu cümleyi duyduğunda bedenin nasıl tepki veriyor? Şok mu, hiçbir şey mi, beklenmiş bir kayıp mı?',
          soru: 'Bedenin ilk tepkisi',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Bu Macbeth\'in postürü değişiyor mu, yoksa zaten değişmişti? Çoktan boş bir adam mı bu, yoksa bu haberle çöküyor mu? Bedenin söylesin.',
          soru: 'Postürün durumu',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Lady Macbeth artık yok. Onunla son konuşmanı düşün. Kavga mıydı, sevgi miydi, mesafe miydi? Bu son konuşma şimdi bedeninde nerede oturuyor?',
          soru: 'Son konuşma nerede?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Lady Macbeth\'in yüzünü zihninde gör. Hangi anı geliyor önce — onunla ilk gecen mi, kararı verdiğiniz an mı, son birlikte gördüğünüz an mı?',
            isitsel:   'Onun sesi neye benziyor şimdi senin için? Bir hatıra mı, bir hayalet mi, sessizlik mi? "Macbeth" diye sana seslendiğindeki ton hâlâ duyuluyor mu içinde?',
            kinestetik:'Onun yokluğu bedeninde bir boşluk yarattı mı? Yatağın yanı mı, yan odan mı, omzunun yanı mı? Yokluk nereye yerleşti?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak yavaşça içinden geçir: "Yarın, yarın, yarın… günden güne sürünür bu küçük adımlar… Hayat bir kısa mum, sönük gölge, sahnede bir saatçik kibirli oyuncu… ve sonra duyulmaz olur." Bu cümle bir yas mı, bir bitki sızı mı, bir kabulleniş mi, bir nihilizm mi?',
          soru: 'Cümlenin tonu',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Bu cümleden sonra ne kaldı sende? Yorgunluk mu, boşluk mu, daha derin bir öfke mi, garip bir hafiflik mi? Bedenin ne diyor?',
          soru: 'Sende ne kaldı?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz büyük bir kayba ve varoluşsal yorgunluğa götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Etrafındaki üç şeyi say. Lady Macbeth orada — Macbeth orada — sen burada. Su iç. Birkaç dakika öylece otur. Bugün bitince fiziksel bir aktivite yap.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 8 — Macduff ile Son Düello
    // ==========================================================================
    {
      id: 'macduff-duello',
      no: 8,
      baslik: 'Macduff ile Son Düello',
      altbaslik: 'Kehanetin kırılması',
      sure: '20-25 dk',
      seviye: 'İleri',
      bagliSahne: '5.8',
      travmaKategorileri: ['varolussal', 'ahlaki_yara'],
      travmaSeviyesi: 2,
  
      girisMetni: 'Bu egzersizde Macbeth\'in Macduff ile son düellosuna gideceğiz. Birnam Ormanı geldi. Lady Macbeth öldü. Yine de bir kehanet kaldı: Kadından doğan kimse seni yenemez. Bu son güvencen. Ama Macduff sana bir şey söylüyor — ve son güvencen de elinden alınıyor.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Savaş alanı, kale dışında. Adamların düşmüş, kaçmış. Sen tek başına mısın, Macduff karşında mı? Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Macduff karşında. Onu öldürmek istiyorsun ama bir şey seni durduruyor — onun ailesini katlettin. Bu bilgi şu an bedeninde nerede?',
          soru: 'Suçluluk nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Kılıç elinde. Bu, son düellonun Macbeth\'i — eski savaşçı mı, yorgun bir adam mı, yoksa hâlâ kibrini taşıyan biri mi? Bedenin söylesin.',
          soru: 'Postürün ne diyor?',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Macduff sana şöyle diyor: "Macduff annesinin karnından zamansız çıkarıldı." Bu cümleyi duyduğunda bedeninde ne oluyor? Kehanet az önce çöktü.',
          soru: 'Cümle nereye düştü?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Cümleyi duyduğunda gözünün önünde ne beliriyor? Cadıların yüzü mü, kendi geleceğin mi, ailesini öldürdüğün adam mı, yoksa siyah bir boşluk mu?',
            isitsel:   'Bu cümle senin içinde nasıl yankılandı? Bir kahkaha mı, bir çığlık mı, bir sessizlik mi? Cadıların sesi geri mi geldi?',
            kinestetik:'Kılıcın elinde — ama eli aynı el mi? Ağırlığı değişti mi? Kollarında, dizlerinde, çenende ne oldu?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şimdi bir karar var: Teslim olmak ya da savaşmak. Cadılar yalan söyledi — ama sen yine de duruyorsun. Hangi taraf daha güçlü bedeninde? Teslimiyet mi, son bir savaş mı?',
          soru: 'Hangi taraf?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak içinden geçir: "Yine de denemeyeceğim teslim olmayı. Yere atmayacağım kalkanımı, ölünceye kadar dövüşürüm." Bu bir cesaret mi, bir kibir mi, bir kabulleniş mi?',
          soru: 'Cümlenin altında ne var?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Buradasın. Macbeth\'in son ânı orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
  ],
};

export default macbeth;
