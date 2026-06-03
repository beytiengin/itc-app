'use client';

/**
 * NINA MIHAYLOVNA ZAREÇNAYA — Katman 1 (Üretici ilk gerçek testi)
 * Kaynak: Anton Çehov, "Martı" (1896, kamuya açık)
 * Çeviri: Ataol Behramoğlu (replikler iç-referans amaçlı; sayfa içinde
 *         oyuncuya tam metin dayatılmaz — alıntılar kısa tutulmuştur)
 *
 * KAPSAM: Tüm oyun zaman çizgisi (oyun-öncesi yaşam → final)
 *
 * UYARI — İNSAN KARARI BEKLEYEN ALANLAR:
 *  • `tercihler`        → DRAMATURG ONAYI (Beyti). Model A/B/C üretti, seçilmedi.
 *  • `travma.seviye`    → KLİNİK ONAY (Filiz Kaya Ataklı). Taslakta işaretli,
 *                          [ONAY_BEKLIYOR] etiketiyle. Yayına çıkmadan doğrulanmalı.
 *  • Model hiçbir "dogru"yu metin söylemiyorsa UYDURMADI; süslemedi.
 *    Çıkarımlar `kaynak` alanında "metin" / "çıkarım" olarak ayrıldı.
 *
 * ────────────────────────────────────────────────────────────
 * KANON SINIRI — PILOT İZOLASYONU:
 *  • Bu dosya `data/pilot/` altındadır — production karakter pipeline'ından
 *    AYRIDIR. karakterGetir, karakter listesi, kulis BU DOSYAYI OKUMAZ.
 *  • Yalnız `/pilot/nina` viewer route'undan görüntülenir.
 *  • Şema mevcut Hamlet/Willy/Macbeth/Biff workbook şemasından FARKLI
 *    (kaynak provenance, durum gating, _meta — üretici çıktısı).
 *  • Production'a entegrasyon: ayrı karar (Beyti + Filiz onay sonrası).
 */

export const nina = {
  ad: 'Nina Mihaylovna Zareçnaya',
  oyun: 'Martı',
  yazar: 'Anton Çehov',
  yazimYili: 1896,
  telifDurumu: 'kamuya-acik', // Hamlet/Macbeth modeli — çeviri serbest
  ceviri: 'Ataol Behramoğlu',

  // ────────────────────────────────────────────────────────────
  // DOĞRULAR — metnin doğrudan verdiği veya güçlü çıkarımla dayandığı sabitler
  // Her doğru `kaynak` ile etiketli: "metin" (replik/sahne yönergesi) | "çıkarım"
  // ────────────────────────────────────────────────────────────
  dogrular: [
    { id: 'd1', metin: 'Zengin bir çiftlik sahibinin genç kızı.', kaynak: 'metin' }, // kişiler listesi
    { id: 'd2', metin: 'Annesi öldü; tüm servetini babasına bıraktı. Baba da vasiyetini ikinci karısına bıraktı — Nina’nın elinde hiçbir şey yok.', kaynak: 'metin' }, // Arkadina, I. perde
    { id: 'd3', metin: 'Babası ve üvey annesi onu sıkı tutuyor; göl kenarındaki çiftliğe gitmesi "hapishaneden kaçmak kadar güç".', kaynak: 'metin' }, // Treplev, I. perde
    { id: 'd4', metin: 'Aktrist olmak en büyük hayali; ailesi bohem hayattan ve sahneden korkuyor.', kaynak: 'metin' },
    { id: 'd5', metin: 'Tüm yaşamı bu gölün çevresinde geçti; gölün her adasını bilir. Kendini bir martıya benzetir.', kaynak: 'metin' }, // I. perde
    { id: 'd6', metin: 'Treplev’in oyununda (göl sahnesi) "Dünya Ruhu"nu oynar; oyun Arkadina tarafından alaya alınır, yarıda kesilir.', kaynak: 'metin' },
    { id: 'd7', metin: 'Ünlü yazar Trigorin’e hayranlık duyar; tanıştıkça aşka dönüşür.', kaynak: 'metin' },
    { id: 'd8', metin: 'III. perde sonunda evi, babasını bırakıp Moskova’ya, sahneye ve Trigorin’e gitmeye karar verir.', kaynak: 'metin' },
    { id: 'd9', metin: 'III–IV. perde arası: 2 yıl geçer. Trigorin’le yaşar, bir çocuğu olur, çocuk ölür, Trigorin onu bırakır.', kaynak: 'metin' }, // IV. perde, Treplev anlatımı
    { id: 'd10', metin: 'Taşrada zorlu bir aktrislik dönemi geçirir; mektuplarını "Martı" diye imzalar.', kaynak: 'metin' },
    { id: 'd11', metin: 'IV. perdede gece, fırtınada Treplev’in odasına gelir; bir aktris olarak "sabretme becerisi"ne vardığını söyler, sonra gider.', kaynak: 'metin' },
    { id: 'd12', metin: 'Trigorin’i hâlâ — "eskisinden de çok" — sevdiğini söyler.', kaynak: 'metin' }, // IV. perde
    { id: 'd13', metin: 'Treplev onu çocukluğundan beri sever; Nina bu sevgiye sahnede karşılık vermez.', kaynak: 'çıkarım' }, // I–IV bütünü
    { id: 'd14', metin: 'Oyunun başında ~18-19 yaşlarında; Trigorin I. perdede onu "on sekiz on dokuz" diye anar.', kaynak: 'metin' },
  ],

  // ────────────────────────────────────────────────────────────
  // OYUN ÖNCESİ YAŞAM (Pre-Senaryo) — "Tüm yaşam akışı" kapsamı gereği
  // Metnin ima ettiği, oyuncunun zihinsel inşa edeceği boşluk-öncesi katman.
  // Model burada UYDURMUYOR: yalnızca metnin dayanak verdiği imgeleri çerçeveliyor.
  // ────────────────────────────────────────────────────────────
  oyunOncesi: {
    olaylar: [
      { id: 'o1', baslik: 'Annenin ölümü', metin: 'Annesi ölmüş; servetini babaya bırakmış. Nina için ilk büyük kayıp ve yoksunluğun kökeni.', kaynak: 'metin' },
      { id: 'o2', baslik: 'Babanın yeniden evliliği', metin: 'Baba yeniden evlenir; vasiyet üvey anneye gider. Nina mirassız kalır — "zengin çiftlik kızı" ama kendi parası yok.', kaynak: 'metin' },
      { id: 'o3', baslik: 'Göl kıyısında büyüme', metin: 'Karşı kıyıdaki çiftlikte doğdu, tüm çocukluğu gölün çevresinde geçti. Gölün her adasını bilir — özgürlük ve aidiyetin imgesi.', kaynak: 'metin' },
      { id: 'o4', baslik: 'Sahne hayali', metin: 'Aktris olma hayali oyun başlamadan önce kurulmuş; ailesinin yasağına rağmen sürer.', kaynak: 'çıkarım' },
    ],
    iliskiler: [
      { kisi: 'Baba', tip: 'kısıtlayıcı otorite', metin: 'Çiftliğe gelmesini yasaklar; sahne ve bohem hayattan korkar. Sevgiden çok kontrol.', kaynak: 'metin' },
      { kisi: 'Üvey anne', tip: 'mesafe / dışlanma', metin: 'Babayla birlikte Nina’yı kısıtlar; mirasın gittiği yer.', kaynak: 'metin' },
      { kisi: 'Treplev', tip: 'genç aşk / sanat ortaklığı', metin: 'Oyun başında karşılıklı görünen aşk; aynı zamanda Treplev’in oyununda sahneye çıkışı.', kaynak: 'metin' },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // SAHNELER WORKBOOK — Nina’nın oyun içindeki anları (perde sırasıyla)
  // Her sahne: no/perde/olay/icsel/yuk/onerilenSicaklik/travma
  // onerilenSicaklik: 1(serin/uzak) → 5(yanıcı/yakın) — oyuncuya öneri, dayatma değil
  // travma: { kategoriler:[...], seviye:0-3, durum:'[ONAY_BEKLIYOR]' } → Filiz onayı
  // ────────────────────────────────────────────────────────────
  sahnelerWorkbook: [
    {
      no: 1, perde: 1,
      olay: 'Gölün üzerinden atını sürerek, geç kalma korkusuyla gelir; Treplev’le kısa, gizli buluşma.',
      icsel: 'Kaçışın verdiği sevinç + yakalanma korkusu. "Yüreğim sizinle dopdolu" — ama aklı oyunda ve Trigorin’in varlığında.',
      yuk: 'Heyecan, ödü kopmuş bir özgürlük anı.',
      onerilenSicaklik: 4,
      travma: { kategoriler: [], seviye: 0, durum: 'net' },
      replikIzi: '"Tıpkı bir martı gibi, buraya, bu göle doğru akıyor..." (martı imgesinin ilk tohumu)',
    },
    {
      no: 2, perde: 1,
      olay: 'Treplev’in "Dünya Ruhu" oyununu beyaz giysiler içinde oynar; Arkadina alay eder, oyun yarıda kesilir.',
      icsel: 'Sahnede ilk büyük an — ama metni "canlı kişiler yok, sadece okuma" diye yadırgar. Trigorin’in karşısında oynamanın utancı/heyecanı.',
      yuk: 'Maruz kalma, yargılanma, ilk sahne kırılganlığı.',
      onerilenSicaklik: 3,
      travma: { kategoriler: [], seviye: 0, durum: 'net' },
      replikIzi: '"İnsanlar, aslanlar, kartallar ve keklikler..." — Dünya Ruhu tiradı.',
    },
    {
      no: 3, perde: 1,
      olay: 'Oyun sonrası Arkadina ve Trigorin’le tanışır; ünlü yazara hayranlığını dile getirir, sonra ayrılmak zorunda kalır.',
      icsel: 'Ün ve sahnenin cazibesi; "Ah, benim hayalimdir bu!" Eve dönüş mecburiyetinin acısı.',
      yuk: 'Özlem, gıpta, kısıtlanmışlık.',
      onerilenSicaklik: 3,
      travma: { kategoriler: [], seviye: 0, durum: 'net' },
    },
    {
      no: 4, perde: 2,
      olay: 'Treplev vurduğu martıyı ayaklarının dibine bırakır. Nina anlamaz; "Sizi anlayabilmek için fazla basitim."',
      icsel: 'Treplev’den uzaklaşma başlamış. Martı simgesini reddeder — henüz kendi kaderiyle bağ kurmaz.',
      yuk: 'Yabancılaşma, rahatsızlık, sezgisel ürküntü.',
      onerilenSicaklik: 2,
      travma: { kategoriler: ['Kayıp'], seviye: 1, durum: '[ONAY_BEKLIYOR]' }, // ölü kuş = kaybın atfı; oyuncu dışından dokunur
      replikIzi: 'Ölü martı sahneye konur — ileride kendi kaderinin önceden-imgesi.',
    },
    {
      no: 5, perde: 2,
      olay: 'Trigorin’le uzun ikili sahne: yazarın iç dünyasını dinler, ünlülük üzerine konuşurlar; Trigorin "martı" hikâyesi konusunu not eder.',
      icsel: 'Hayranlığın aşka dönüştüğü eşik. Trigorin’in yaşamını "olağanüstü" görür, kendi yoksunluğunu küçümser.',
      yuk: 'Büyülenme, arzu, kendini adama isteği.',
      onerilenSicaklik: 4,
      travma: { kategoriler: [], seviye: 0, durum: 'net' },
      replikIzi: 'Trigorin: göl kıyısında özgür bir kızı bir adamın "yapacak işi olmadığından" mahvedişi — martı eskizi.',
    },
    {
      no: 6, perde: 3,
      olay: 'Ayrılık öncesi Trigorin’e madalyon verir (kitabından sayfa/satır kazılı); kısa, gizli bir veda anı ister.',
      icsel: 'Bağlanma kararı netleşiyor. "Bir gün hayatım sana gerekecek olursa gel ve al onu" — kendini sunma.',
      yuk: 'Tutku, teslimiyet, gizli umut.',
      onerilenSicaklik: 4,
      travma: { kategoriler: [], seviye: 0, durum: 'net' },
    },
    {
      no: 7, perde: 3,
      olay: 'Treplev’e: "Kesin kararımı verdim... sahneye çıkıyorum. Yarın babamı, her şeyi bırakıp Moskova’ya gidiyorum." Trigorin’le uzun öpüşme.',
      icsel: 'Eşik anı — eski yaşamı (baba, ev, göl) ardında bırakma. Korkudan çok kararlılık.',
      yuk: 'Kopuş, cesaret, geri dönülmezlik.',
      onerilenSicaklik: 5,
      travma: { kategoriler: [], seviye: 1, durum: '[ONAY_BEKLIYOR]' }, // ev/babadan kopuş — terkin atfı, henüz icra değil
      eşikNotu: 'Bu sahne, oyun-içi yaşamla 2 yıllık boşluğun arasındaki KAPI. Boşluk-set "sonra" bloğu buraya bağlanır.',
    },
    {
      no: 8, perde: 4,
      olay: '2 yıl sonra, gece, fırtınada Treplev’in odasına gelir. Dağınık, yorgun, kendini hâlâ "martı" sanır gibi konuşur; sonra "Hayır, aktristim" diye düzeltir.',
      icsel: 'Yıkımın ve yeniden-doğuşun aynı anda taşındığı an. Çöküntü ile "sabretme becerisi" arasında salınım.',
      yuk: 'Tükenmişlik, kendini toplama çabası, kopuk düşünceler, geçmişe sığınma.',
      onerilenSicaklik: 5,
      travma: {
        kategoriler: ['Kayıp', 'İhanet', 'Çocukluk', 'Varoluşsal'],
        seviye: 3,
        durum: '[ONAY_BEKLIYOR]', // EN KRİTİK SAHNE — Filiz klinik onayı şart
        not: 'Çocuğun ölümü (Kayıp+Çocukluk), Trigorin’in terki (İhanet), kimlik/anlam krizi (Varoluşsal). Sahnede çöküş riski yüksek. Seviye 3 (İcra) önerildi; Yıldız.psikolojik < 5 ise "hazır olduğunda" bekleyişi uygulanmalı. Çıkışta tam topraklanma + fiziksel aktivite önerisi zorunlu.',
      },
      replikIzi: '"Asıl olan... sabretme becerisidir. Haçını taşımayı becer ve inan." + Dünya Ruhu tiradının tekrarı (başa dönüş).',
    },
  ],

  // ────────────────────────────────────────────────────────────
  // BOŞLUK SETİ — metnin YAZMADIĞI, oyuncunun zihinsel inşa edeceği anlar
  // Her boşluk: once / sonra / sentez / altSorular
  // (ITC çekirdeği — "Boşluklar". Soru sorulur, tarif edilmez.)
  // ────────────────────────────────────────────────────────────
  boslukSet: [
    {
      id: 'b1',
      ad: 'Atın üstünde — çiftliğe gelmeden önce',
      once: 'Babanın evinden gizlice çıkış. Yakalanma korkusu, yasak.',
      anlatim: 'METİN YAZMAZ: Göl boyunca atı sürerken Nina’nın zihninde ne dönüyor? Korku mu, kaçışın sarhoşluğu mu, Treplev’e mi yoksa sahneye mi gidiyor?',
      sonra: 'I. perde 1. sahne — soluk soluğa, sevinçli varış.',
      sentez: 'Bu boşluk, Nina’nın "özgürlük = sahne + göl" denklemini kurar; oyunun açılış enerjisinin kaynağı.',
      altSorular: [
        'Atın ritmi bedeninde nereye yerleşiyor?',
        'Babanın sesi hâlâ kulağında mı, yoksa rüzgâr onu siliyor mu?',
        'Göle yaklaşırken ne kokuyor, ne duyuyor?',
      ],
      travma: { kategoriler: [], seviye: 0, durum: 'net' },
    },
    {
      id: 'b2',
      ad: 'İki yıllık boşluk — Moskova / taşra (III–IV perde arası)',
      once: 'III. perde: ev ve babayı bırakıp Trigorin’e, sahneye gidiş kararı.',
      anlatim: 'METNİN EN BÜYÜK BOŞLUĞU: Trigorin’le birliktelik, çocuğun doğumu ve ölümü, terk ediliş, taşrada başarısız sahne yılları. Hiçbiri sahnede gösterilmez — sadece IV. perdede Treplev’in ağzından özetlenir. Oyuncu bu 2 yılı baştan inşa eder.',
      sonra: 'IV. perde — yıkık ama "sabretmeyi öğrenmiş" Nina’nın gece gelişi.',
      sentez: 'Bu boşluk, oyunun gerçek dramatik dönüşümünün gerçekleştiği yer. IV. perdedeki Nina’yı anlamlı kılan tek şey, oyuncunun bu görünmeyen iki yılı doldurabilmesidir.',
      altSorular: [
        'Çocuğunu kaybettiği an bedenin neresinde donup kaldı?',
        'Trigorin’in gidişini hangi sabah, nasıl anladın?',
        'Taşrada kötü oynadığın bir geceden sonra otel odasına döndüğünde ne yaptın?',
        '"Martı" diye imzaladığın mektupları yazarken kime sesleniyordun?',
        'Sabretmeyi tam olarak hangi an, neyin karşısında öğrendin?',
      ],
      travma: {
        kategoriler: ['Kayıp', 'İhanet', 'Çocukluk', 'Varoluşsal'],
        seviye: 3,
        durum: '[ONAY_BEKLIYOR]', // bu boşluk doğrudan Sahne 8’i besler — klinik onay kritik
        not: 'Bu boşluğun inşası 8. sahnenin (IV. perde) duygusal yükünü taşır. Tek seansta tamamı yerine parçalı inşa önerilir. Filiz: çocuk ölümü ve terkin birlikte çalışılması seviye/sıralama açısından değerlendirilmeli.',
      },
    },
    {
      id: 'b3',
      ad: 'Gece — Treplev’in odasından çıktıktan sonra (oyunun sonu)',
      once: 'IV. perde: Treplev’le son karşılaşma, Dünya Ruhu tiradının tekrarı, ani çıkış.',
      anlatim: 'METİN YAZMAZ: Nina arabasına bindikten sonra ne olur? Yeletz’e, "üçüncü mevki köylülerin arasına" giderken zihninde ne taşır? (Treplev odada kalır ve kendini vurur — ama Nina bunu bilmez.)',
      sonra: 'Oyun biter; Nina sahnede yoktur. Geleceği belirsiz ama "sabretme" kararı nettir.',
      sentez: 'Bu kapanış boşluğu, Nina’nın trajik figür değil, hayatta-kalan figür olduğunu mühürler. Oyuncu için karakterin oyundan SONRAKİ yaşamına açılan kapı.',
      altSorular: [
        'Arabanın tekerlek sesi sana neyi hatırlatıyor — ilk gelişteki atı mı?',
        'Göl arkanda kalırken bir şey bırakıyor musun, yoksa hepsini mi taşıyorsun?',
        'Yarın sahneye çıkacaksın. Korku mu, yoksa o "sabretme becerisi" mi ağır basıyor?',
      ],
      travma: { kategoriler: ['Varoluşsal'], seviye: 1, durum: '[ONAY_BEKLIYOR]' },
    },
  ],

  // ────────────────────────────────────────────────────────────
  // PERDE TEMALARI — her perdenin Nina ekseninde taşıdığı temel izlek
  // ────────────────────────────────────────────────────────────
  perdeTemalari: [
    { perde: 1, tema: 'Özgürlük ve hayal — martının ilk uçuşu', ozet: 'Kısıtlanmış kız, sahne ve aşk hayaliyle göle gelir. Saf, kanatlı, henüz kırılmamış.' },
    { perde: 2, tema: 'Büyülenme ve sapma — yön değiştiren özlem', ozet: 'Treplev’den Trigorin’e kayış; ün ve "olağanüstü yaşam" cazibesi. Ölü martı sahneye girer.' },
    { perde: 3, tema: 'Eşik ve kopuş — geri dönülmez karar', ozet: 'Ev, baba, göl geride bırakılır. Hayal uğruna her şeyi riske atış.' },
    { perde: 4, tema: 'Yıkım ve direnç — yere düşen ama uçmayı bırakmayan', ozet: 'İki yılın enkazından "sabretme becerisi"yle çıkış. Martı vurulmuştur ama Nina hayattadır.' },
  ],

  // ────────────────────────────────────────────────────────────
  // TERCİHLER — SAHNELEME / YORUM KARARLARI
  // ⚠️ DRAMATURG ONAYI BEKLİYOR (Beyti). Model A/B/C üretti; SEÇMEDİ.
  // Bu alan asla "onaya hazır" değil — ham taslak.
  // ────────────────────────────────────────────────────────────
  tercihler: [
    {
      id: 't1',
      karar: 'IV. perdedeki Nina çöküşte mi, dirençte mi oynanmalı?',
      A: 'Çöküş baskın: kırık, dağınık, neredeyse kopuk bir zihin. "Aktristim" düzeltmeleri tutunma çabası.',
      B: 'Direnç baskın: yıkımı tanıyan ama üstüne basıp doğrulan bir olgunluk. "Sabretme" gerçek bir varış.',
      C: 'Salınım: cümle cümle ikisi arasında gidip gelir; izleyici hangisinin kazanacağını bilemez.',
      modelEgilimi: 'C — metindeki kopuk-toparlanan ritim (martı↔aktrist tekrarları) salınımı destekliyor. ANCAK karar senin.',
    },
    {
      id: 't2',
      karar: 'Dünya Ruhu tiradı (I. perde) nasıl oynanmalı?',
      A: 'Saf inançla — genç oyuncunun metne gerçekten inanması; alay edilince kırılması daha acı.',
      B: 'Tedirgin acemiyle — Trigorin’in karşısında utanan, metne tam güvenemeyen bir başlangıç.',
      C: 'Kâhince — farkında olmadan kendi geleceğini (yalnızlık, boşluk) söyleyen bir ön-ses.',
      modelEgilimi: 'A ile C arası; IV. perdedeki tekrar C okumasını güçlendirir. Karar senin.',
    },
    {
      id: 't3',
      karar: 'Martı simgesiyle Nina’nın ilişkisi sahnede ne kadar görünür kılınmalı?',
      A: 'Örtük: oyuncu bilir ama göstermez; simge izleyiciye bırakılır.',
      B: 'Belirgin: II. perdede ölü martıyı reddederken, IV. perdede ona dönerken bilinçli köprü kurulur.',
      C: 'Yalnızca IV. perdede: "Bir martıyım ben. Yok, değil" anında tek ve yıkıcı bir farkındalık.',
      modelEgilimi: 'A (ITC "yöntem görünmez" ilkesiyle uyumlu). Karar senin.',
    },
    {
      id: 't4',
      karar: 'Trigorin’e duyulan aşk IV. perdede nasıl konumlanmalı?',
      A: 'Bağımlılık olarak: hâlâ sevmesi onun çözülmemiş yarası; acınası değil ama özgürleşmemiş.',
      B: 'Bilinçli seçim olarak: sevdiğini bilerek taşıyan, utanmayan bir olgunluk.',
      C: 'Geçmişe ait bir kalıntı olarak: artık onu değil, o dönemin kendisini özlüyor.',
      modelEgilimi: '"Hatta eskisinden de daha çok seviyorum" repliği A’yı destekliyor; ama oyunculuk tercihi B’yi trajik kılabilir. Karar senin.',
    },
    {
      id: 't5',
      karar: 'Oyun-öncesi yaşam (anne ölümü, miras kaybı) ne kadar ağırlık taşımalı?',
      A: 'Arka plan: bilinir ama oynanmaz; sadece yoksunluk duygusunu besler.',
      B: 'Aktif kök: I. perdedeki açlık/kaçış enerjisinin doğrudan kaynağı olarak çalışılır.',
      C: 'Final anahtarı: IV. perdedeki dayanıklılığın aslında çocukluktan gelen bir hayatta-kalma kası olduğu okuması.',
      modelEgilimi: 'B+C birleşimi pedagojik olarak zengin; ama bu senin dramaturjik kararın.',
    },
  ],

  // Üretici meta — bu dosya nasıl üretildi (şeffaflık / denetlenebilirlik)
  _meta: {
    katman: 1,
    uretici: 'ITC Metin → Karakter Sayfası Üreticisi (pilot)',
    insanKarariBekleyen: ['tercihler (dramaturg/Beyti)', 'tüm travma.seviye [ONAY_BEKLIYOR] (klinik/Filiz)'],
    uydurmaKontrolu: 'Doğrular kaynak-etiketli; metin söylemediği yerde "çıkarım" işaretlendi. Hiçbir doğru süslenmedi.',
    sonrakiAdim: 'Beyti tercih seçimi + Filiz travma onayı → Katman 1 kilitlenir → i18n (TR/EN/DE) + sayfa mimarisine bağlama.',
  },
};

export default nina;
