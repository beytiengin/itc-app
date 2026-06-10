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

  // DOĞRULAMA: macbeth-is1-kaynak-tamam (her madde metin/çıkarım etiketli; 9-10 metni yumuşatıldı)
  dogrular: [
    { kategori: 'Kimlik', madde: "Macbeth, Kral Duncan'ın güvendiği bir generaldir.", kaynak: 'metin' },
    { kategori: 'Kimlik', madde: "Cawdor Beyi unvanını yeni almıştır (I.iii).", kaynak: 'metin' },
    { kategori: 'Kimlik', madde: "Kral Duncan'ın akrabasıdır — hem askeri hem misafir.", kaynak: 'metin' },
    { kategori: 'Bilgi', madde: 'Cadıların kehanetini duydu: kral olacak.', kaynak: 'metin' },
    { kategori: 'Bilgi', madde: "Banquo'nun çocuklarının kral olacağını biliyor.", kaynak: 'metin' },
    { kategori: 'Eylem', madde: "Duncan'ı uyurken öldürdü.", kaynak: 'metin' },
    { kategori: 'Eylem', madde: "Banquo'yu öldürtmeyi emretti.", kaynak: 'metin' },
    { kategori: 'Eylem', madde: "Macduff'ın ailesini katlettirdi.", kaynak: 'metin' },
    { kategori: 'İlişki', madde: 'Lady Macbeth eşidir — kararsız kaldığı eşikte onu ileri taşıyan ortak.', kaynak: 'cikarim' },
    { kategori: 'İlişki', madde: 'Banquo silah arkadaşıydı — birlikte savaştılar, aynı kehaneti duydular. Şimdi hayalet.', kaynak: 'cikarim' },
    { kategori: 'Son', madde: 'Hiçbir kadından doğmamış biri tarafından öldürüleceğini bildi.', kaynak: 'metin' },
    { kategori: 'Son', madde: "Lady Macbeth'in ölümünü savaş ortasında öğrendi.", kaynak: 'metin' },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // KARAKTER ŞEMASI (Willy paritesi). Eski sahneler/bosluklar/antrenmanlar
  // blokları retire edildi (Macbeth İş 3 · 9 Haz 2026) — el-yazması sayfası
  // yalnız bu yeni alanları okur. DOĞRULAMA: macbeth-is3-temizlik-tamam
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
      sahneTipi: 'kart',
      replikIzi: 'Macbeth: "Cadılar…" / "Durun, sözü yarım bırakmayın, sonunu getirin." (kehanetin ardından, eriyip kaybolurken)',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 1,
      anlar: [
        { id: 's1-a1', tip: 'catal', birlesimSahneNo: 1, travmaDuyarli: false,
          soru: 'Sesler bir tehditten çok bir çağrı gibi Macbeth\'i ormanın derinliğine çekiyor. Üç silüet belirdiğinde, içinde önce ne uyanıyor — korku mu, tanıma mı?',
          secenekler: [
            { dal: 'A', baslik: 'Tanıma uyanıyor', aciklama: 'Bu sesleri sanki çoktan bekliyormuş gibi; içinde bir şey onları çağırmış.', oznelSabit: 'O sesleri korkuyla değil, beklemekle karşıladım — çünkü içimde zaten vardılar.' },
            { dal: 'B', baslik: 'Korku uyanıyor', aciklama: 'Bilinmeyenin eşiği; ürküyor ama ayağı geri gitmiyor.', oznelSabit: 'Ürktüm ama durmadım — korkumdan daha güçlü bir merak çekiyordu beni.' },
          ] },
        { id: 's1-a2', tip: 'catal', birlesimSahneNo: 1, travmaDuyarli: false,
          soru: '"Cawdor Beyi" denince Macbeth "imkânsız" diyor ama Banquo onun irkildiğini görüyor. Sözü reddederken bedeni neyi ele veriyor?',
          secenekler: [
            { dal: 'A', baslik: 'Arzu sızıyor', aciklama: 'Ağzı inkâr ederken gözleri ihtimali tartıyor.', oznelSabit: 'İmkânsız dedim ama bedenim çoktan o tahtın ağırlığını ölçmeye başlamıştı.' },
            { dal: 'B', baslik: 'Gerçekten reddediyor', aciklama: 'O an için kehanet ona saçma; irkilme sadece şaşkınlık.', oznelSabit: 'O an gerçekten inanmadım — irkilmem arzudan değil, dünyamın sarsılmasındandı.' },
          ] },
        { id: 's1-a3', tip: 'yazma', birlesimSahneNo: 1, travmaDuyarli: false,
          soru: 'Cadılar "Keşke biraz daha kalsalardı" dedirtecek kadar yarım bıraktılar sözü. Macbeth\'in onlara soramadan kalakaldığı o tek soru neydi?' },
      ],
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
  // ONAYLI — Beyti dramaturjik onayı verildi (Macbeth_Tercihler_Onay_Taslagi.md).
  // T3 (zihinsel kırılma) + T4 (vicdan) klinik-hassas eksenler; Filiz gözden
  // geçirmesi uygun olur (commit-sonrası, mevcut metin değişiklik gerektirmeyecek
  // şekilde nötr dramaturjik dilde yazıldı).
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
};

export default macbeth;
