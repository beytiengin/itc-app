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
 *  • `tercihler`        → DRAMATURG ONAYI / METİN TONU (Beyti). Model A/B/C üretti,
 *                          seçilmedi. Pilot testi sırasında Beyti diliyle son haline çekilir.
 *  • `travma.durum`     → KANON Karar 48 sonrası 'dramaturjik-agirlik' işaretidir;
 *                          GEÇİT DEĞİL, yoğunluk işaretidir. Seviye ≥1 → travma rozeti
 *                          + güvenli çıkış/topraklanma ÖNERİSİ tetikler. Yayını engellemez.
 *                          (Karar 21 GATE YOK + Karar 48 §1 referansı.)
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
      { id: 'o1', baslik: 'Annenin ölümü',
        sahneRef: 'Arkadina (I. perde): "Annesi ölünce bütün parasını, son meteliğine kadar babasına bıraktı." (Nina’nın ağzından değil — metinde dolaylı anılır.)',
        metin: 'Annesi ölmüş; servetini babaya bırakmış. Nina için ilk büyük kayıp ve yoksunluğun kökeni.',
        kaynak: 'metin',
        sahneTipi: 'kart',
        anlar: [
          { id: 'o1-a1', tip: 'catal', travmaDuyarli: false,
            soru: 'Annen öldüğünde sen daha çocuktun. O boşluk bedeninde nereye yerleşti?',
            secenekler: [
              { dal: 'A', baslik: 'Bir eksiklik', aciklama: 'Hep bir şeyin yarım kaldığı duygusu.',
                oznelSabit: 'İçimde hep dolmayan bir yer kaldı; onu sahnede doldurmaya çalıştım.' },
              { dal: 'B', baslik: 'Bir sertleşme', aciklama: 'Erken büyümek, kendi başının çaresine bakmak.',
                oznelSabit: 'Çok erken güçlü olmam gerekti; kırılganlığımı kimseye göstermedim.' },
            ] },
          { id: 'o1-a2', tip: 'yazma', travmaDuyarli: false,
            soru: 'Anneni hatırlıyor musun, yoksa sadece yokluğunu mu? Aklında kalan tek görüntü ne?' },
        ] },
      { id: 'o2', baslik: 'Babanın yeniden evliliği',
        sahneRef: 'Arkadina (I. perde): baba yeniden evlenir, mirasın tümü üvey anneye geçer — Nina mirassız kalır. (Metinde dolaylı, Nina söylemez.)',
        metin: 'Baba yeniden evlenir; vasiyet üvey anneye gider. Nina mirassız kalır — "zengin çiftlik kızı" ama kendi parası yok.',
        kaynak: 'metin',
        sahneTipi: 'kart',
        anlar: [
          { id: 'o2-a1', tip: 'catal', travmaDuyarli: false,
            soru: 'Baban yeniden evlenip her şey üvey annene geçtiğinde, evin içinde nesin sen?',
            secenekler: [
              { dal: 'A', baslik: 'Fazlalık', aciklama: 'Kendi evinde misafir gibi.',
                oznelSabit: 'Kendi evimde yabancıydım; ait olmayı hep dışarıda aradım.' },
              { dal: 'B', baslik: 'Tutsak', aciklama: 'Zengin görünen ama eli kolu bağlı.',
                oznelSabit: 'Bana zengin çiftlik kızı dediler; oysa hiçbir şeyim yoktu, kaçmaktan başka.' },
            ] },
          { id: 'o2-a2', tip: 'yazma', travmaDuyarli: false,
            soru: 'Babanın evinde kendine ait hissettiğin tek şey neydi — bir köşe, bir an, bir ses?' },
        ] },
      { id: 'o3', baslik: 'Göl kıyısında büyüme',
        sahneRef: 'Nina (I. perde): "Bu yere, bu göle bir martı gibi çekiliyorum."',
        metin: 'Karşı kıyıdaki çiftlikte doğdu, tüm çocukluğu gölün çevresinde geçti. Gölün her adasını bilir — özgürlük ve aidiyetin imgesi.',
        kaynak: 'metin',
        sahneTipi: 'kart',
        anlar: [
          { id: 'o3-a1', tip: 'catal', travmaDuyarli: false,
            soru: 'Çocukluğun bu gölün kıyısında geçti. Göl senin için ne?',
            secenekler: [
              { dal: 'A', baslik: 'Özgürlük', aciklama: 'Tek nefes aldığın yer, sınırsız.',
                oznelSabit: 'Göl benim tek özgür yerimdi; karşı kıyı hep başka bir hayat vaat etti.' },
              { dal: 'B', baslik: 'Hapis', aciklama: 'Hep aynı su, hep aynı kıyı.',
                oznelSabit: 'Suyun her adasını biliyordum; bilmek bir süre sonra kafese döndü.' },
            ] },
          { id: 'o3-a2', tip: 'yazma', travmaDuyarli: false,
            soru: 'Karşı kıyıya, Sorin’in çiftliğine baktığında içinde ne kıpırdıyordu?' },
        ] },
      { id: 'o4', baslik: 'Sahne hayali',
        sahneRef: 'Nina (I. perde): babasıyla üvey annesi "aktris olmamdan korkuyor; burayı bohem buluyorlar." (Hayalin kendisi sahnede sözle kurulur.)',
        metin: 'Aktris olma hayali oyun başlamadan önce kurulmuş; ailesinin yasağına rağmen sürer.',
        kaynak: 'çıkarım',
        sahneTipi: 'kart',
        anlar: [
          { id: 'o4-a1', tip: 'catal', travmaDuyarli: false,
            soru: 'Aktris olma hayali ilk ne zaman, nasıl doğdu içinde?',
            secenekler: [
              { dal: 'A', baslik: 'Bir kaçış olarak', aciklama: 'Bu hayattan çıkışın tek kapısı.',
                oznelSabit: 'Sahne benim için sanat değil, kurtuluştu; oraya çıkmazsam boğulacaktım.' },
              { dal: 'B', baslik: 'Bir çağrı olarak', aciklama: 'İçimdeki sesin gerçek yeri.',
                oznelSabit: 'Sahnenin beni çağırdığına inandım; bu inanç hem kanatım hem tuzağım oldu.' },
            ] },
          { id: 'o4-a2', tip: 'yazma', travmaDuyarli: false,
            soru: 'Ailen "aktris olamazsın" derken sen içinden ne diyordun? O sözü ilk kime söyledin?' },
        ] },
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
  // travma: { kategoriler:[...], seviye:0-3, durum:'dramaturjik-agirlik'|'net' } — KANON Karar 48: geçit değil, yoğunluk işareti
  // ────────────────────────────────────────────────────────────
  sahnelerWorkbook: [
    {
      no: 1, perde: 1,
      konum: 'I. Perde · Göl kıyısı, gün batımı',
      olay: 'Gölün üzerinden atını sürerek, geç kalma korkusuyla gelir; Treplev’le kısa, gizli buluşma.',
      icsel: 'Kaçışın verdiği sevinç + yakalanma korkusu. "Yüreğim sizinle dopdolu" — ama aklı oyunda ve Trigorin’in varlığında.',
      yuk: 'Heyecan, ödü kopmuş bir özgürlük anı.',
      onerilenSicaklik: 4,
      travma: { kategoriler: [], seviye: 0, durum: 'net' },
      replikIzi: '"Tıpkı bir martı gibi, buraya, bu göle doğru akıyor..." (martı imgesinin ilk tohumu)',
      // ──── SPEC an-blogu-iskelet · B dalgası (atölye dili — Beyti onayı) ────
      anlar: [
        { id: 's1-a1', tip: 'catal', birlesimSahneNo: 1, travmaDuyarli: false,
          soru: 'Atından inip Treplev’e doğru ilk adımı atarken bedenin nerede?',
          secenekler: [
            { dal: 'A', baslik: 'Hâlâ koşuyor', aciklama: 'At durdu ama içinde dörtnal sürüyor.', oznelSabit: 'Hep bir adım öndeydim; durmayı hiç öğrenmedim.' },
            { dal: 'B', baslik: 'Aniden donmuş', aciklama: 'Varış anında her şey kesiliyor; nefes tutuluyor.', oznelSabit: 'Geldiğim anda kayboldum; varmak beni durdurdu.' },
          ] },
        { id: 's1-a2', tip: 'yazma', birlesimSahneNo: 1, travmaDuyarli: false,
          soru: 'Treplev’i görüyorsun. Ama aklının bir köşesi başka yerde. Nerede?' },
      ],
    },
    {
      no: 2, perde: 1,
      konum: 'I. Perde · Göl kıyısındaki sahne, akşam',
      olay: 'Treplev’in "Dünya Ruhu" oyununu beyaz giysiler içinde oynar; Arkadina alay eder, oyun yarıda kesilir.',
      icsel: 'Sahnede ilk büyük an — ama metni "canlı kişiler yok, sadece okuma" diye yadırgar. Trigorin’in karşısında oynamanın utancı/heyecanı.',
      yuk: 'Maruz kalma, yargılanma, ilk sahne kırılganlığı.',
      onerilenSicaklik: 3,
      travma: { kategoriler: [], seviye: 0, durum: 'net' },
      replikIzi: '"İnsanlar, aslanlar, kartallar ve keklikler..." — Dünya Ruhu tiradı.',
      anlar: [
        { id: 's2-a1', tip: 'catal', birlesimSahneNo: 2, travmaDuyarli: false,
          soru: 'Trigorin seni izliyor. Bunu fark ettiğin an içinde ne oluyor?',
          secenekler: [
            { dal: 'A', baslik: 'Daha çok parlıyorum', aciklama: 'İzlenmek beni büyütüyor.', oznelSabit: 'Sahne benim evim; bakılmak korkutmaz, besler.' },
            { dal: 'B', baslik: 'Dilim tutuluyor', aciklama: 'Onun gözü her şeyi yargılıyor.', oznelSabit: 'En çok istediğim bakış, en çok ürküten bakış oldu.' },
          ] },
        { id: 's2-a2', tip: 'yazma', birlesimSahneNo: 2, travmaDuyarli: false,
          soru: 'Arkadina alay edince oyun yarıda kesiliyor. O gülüşten sana ne kalıyor?' },
      ],
    },
    {
      no: 3, perde: 1,
      konum: 'I. Perde · Göl kıyısı, oyun sonrası',
      olay: 'Oyun sonrası Arkadina ve Trigorin’le tanışır; ünlü yazara hayranlığını dile getirir, sonra ayrılmak zorunda kalır.',
      icsel: 'Ün ve sahnenin cazibesi; "Ah, benim hayalimdir bu!" Eve dönüş mecburiyetinin acısı.',
      yuk: 'Özlem, gıpta, kısıtlanmışlık.',
      onerilenSicaklik: 3,
      travma: { kategoriler: [], seviye: 0, durum: 'net' },
      anlar: [
        { id: 's3-a1', tip: 'catal', birlesimSahneNo: 3, travmaDuyarli: false,
          soru: 'Ünlü yazar karşında. "Ah, benim hayalimdir bu" derken sesin nasıl çıkıyor?',
          secenekler: [
            { dal: 'A', baslik: 'Çocuk gibi, saklamadan', aciklama: 'Hayranlık olduğu gibi dökülüyor.', oznelSabit: 'Hayranlığımı hiç gizlemedim; bu beni hem açtı hem savunmasız bıraktı.' },
            { dal: 'B', baslik: 'Kendimi tutarak', aciklama: 'Olgun görünmek isteyerek.', oznelSabit: 'Küçük görünmekten korktum; hep olduğumdan büyük durmaya çalıştım.' },
          ] },
      ],
    },
    {
      no: 4, perde: 2,
      konum: 'II. Perde · Kroket çimenliği, öğle',
      olay: 'Treplev vurduğu martıyı ayaklarının dibine bırakır. Nina anlamaz; "Sizi anlayabilmek için fazla basitim."',
      icsel: 'Treplev’den uzaklaşma başlamış. Martı simgesini reddeder — henüz kendi kaderiyle bağ kurmaz.',
      yuk: 'Yabancılaşma, rahatsızlık, sezgisel ürküntü.',
      onerilenSicaklik: 2,
      travma: { kategoriler: ['Kayıp'], seviye: 1, durum: 'dramaturjik-agirlik' }, // ölü kuş = kaybın atfı; oyuncu dışından dokunur
      replikIzi: 'Ölü martı sahneye konur — ileride kendi kaderinin önceden-imgesi.',
      anlar: [
        { id: 's4-a1', tip: 'catal', birlesimSahneNo: 4, travmaDuyarli: false,
          soru: 'Treplev martıyı ayağının dibine bırakıyor. "Sizi anlayamayacak kadar basitim" derken — bu gerçekten anlamamak mı, yoksa anlamak istememek mi?',
          secenekler: [
            { dal: 'A', baslik: 'Gerçekten anlamıyorum', aciklama: 'Bu simge bana uzak.', oznelSabit: 'O an kendi kaderimi göremedim; martı bir başkasının meselesiydi.' },
            { dal: 'B', baslik: 'Anlıyorum ama itiyorum', aciklama: 'Fazla ürkütücü.', oznelSabit: 'İçten içe biliyordum; bakmamayı seçtim.' },
          ] },
      ],
    },
    {
      no: 5, perde: 2,
      konum: 'II. Perde · Göl kıyısı, öğleden sonra',
      olay: 'Trigorin’le uzun ikili sahne: yazarın iç dünyasını dinler, ünlülük üzerine konuşurlar; Trigorin "martı" hikâyesi konusunu not eder.',
      icsel: 'Hayranlığın aşka dönüştüğü eşik. Trigorin’in yaşamını "olağanüstü" görür, kendi yoksunluğunu küçümser.',
      yuk: 'Büyülenme, arzu, kendini adama isteği.',
      onerilenSicaklik: 4,
      travma: { kategoriler: [], seviye: 0, durum: 'net' },
      replikIzi: 'Trigorin: göl kıyısında özgür bir kızı bir adamın "yapacak işi olmadığından" mahvedişi — martı eskizi.',
      // ──── SPEC sahneyi-yuru · S5 TAM YÜRÜYÜŞ (4 istasyon, travmasız, birinci tekil) ────
      sahneTipi: 'yuruyus',
      birlesimSahneNo: 5,
      yuruyus: {
        esik: {
          komut: 'Kapat gözlerini. Bir an, sadece nefesinle kal.',
          adimlar: [
            'Nina’yı şu an nerede hissediyorsun? En çok hissettiğin yere odaklan, oraya dokun.',
            'Nasıl bir his o — katı mı, sıvı mı, gaz gibi mi? Bir rengi var mı?',
            'O rengi çok yavaş, saçının telinden ayak parmaklarına tüm bedenine yay. Vaktin var.',
          ],
          hitap: 'Hazır olduğunda — bundan sonra sana Nina diye sesleneceğim.',
          buton: 'Nina’yım, hazırım',
        },
        girisBaslik: 'Trigorin’le — büyülenme eşiği',
        girisAciklama: 'II. perde. Trigorin’le uzun bir konuşma. Hayranlığın aşka döndüğü an burada başlar. Acele yok.',
        girisSentez: 'Bu yürüyüşte seçtiklerin senin olur; Sahne 5’te yanında kalır.',
        gecisButonu: 'Şimdi zihninde her neredeysen, ileri doğru bir adım at',
        cikisRitueli: 'Bedenine yaydığın rengi yavaşça geri çek; yerine kendi rengini getir. Birkaç nefes, ayaklar yerde. İyi misin? Hazır olduğunda gözlerini aç.',
        istasyonlar: [
          {
            no: 0, zamanRozet: 'Karşısındasın',
            acilis: 'Trigorin konuşmaya başlıyor — sesi, duruşu, yorgunluğu.',
            sorular: ['Onda ilk dikkatini çeken ne?', 'Bedeninde nerede duruyorsun şu an?'],
            yazmaAlani: true, yazmaPlaceholder: 'İlk dikkatimi çeken…',
          },
          {
            no: 1, zamanRozet: 'Dünyası açılıyor',
            acilis: 'Kendi yazarlık hayatını anlatıyor — takıntısını, yorgunluğunu.',
            sorular: ['Onu nasıl görüyorsun — olağanüstü mü, yorgun bir insan mı?'],
            catal: {
              anahtar: 's5-dunya', dil: 'birinci_tekil',
              etiket: 'İki yol var. Hangisi senin?',
              secenekler: [
                { deger: 'olaganustu', baslik: 'Olağanüstü', aciklama: 'Bu hayata ait olmak istiyorum.',
                  muhur: 'Bunu unutma — onun dünyasını kendiminkinden üstün tuttum.',
                  ozet: 'Onun dünyasını üstün gördüm.' },
                { deger: 'yorgun', baslik: 'Yorgun bir insan', aciklama: 'Ama yine de çekiyor beni.',
                  muhur: 'Bunu unutma — kusurunu gördüm, yine de vazgeçemedim.',
                  ozet: 'Kusurunu gördüm, yine de bağlandım.' },
              ],
            },
          },
          {
            no: 2, zamanRozet: 'İlk kıpırtı',
            acilis: 'Onu dinlerken içinde bir şey değişiyor.',
            sorular: ['Bedeninde ilk kez kıpırdayan şey neydi, nerede?'],
            yazmaAlani: true, yazmaPlaceholder: 'Bedenimde ilk kıpırdayan…',
          },
          {
            no: 3, zamanRozet: 'Martı eskizi',
            acilis: 'Defterini çıkarıp not alıyor — göl kıyısında mahvolan bir kız.',
            sorular: ['Bunu duyduğunda içinde ne oluyor?'],
            catal: {
              anahtar: 's5-marti', dil: 'birinci_tekil',
              etiket: 'Hangisi senin?',
              secenekler: [
                { deger: 'romantik', baslik: 'Romantik buluyorum', aciklama: 'Beni bir hikâyeye değer gördü.',
                  muhur: 'Bunu unutma — malzeme olmayı sevgiyle karıştırdım.',
                  ozet: 'Malzeme olmayı sevgiyle karıştırdım.' },
                { deger: 'urperti', baslik: 'İçim ürperiyor', aciklama: 'Ama anlam veremiyorum.',
                  muhur: 'Bunu unutma — bir uyarı geçti içimden; dinlemedim.',
                  ozet: 'Bir uyarı geçti; dinlemedim.' },
              ],
            },
          },
        ],
      },
    },
    {
      no: 6, perde: 3,
      konum: 'III. Perde · Yemek odası',
      olay: 'Ayrılık öncesi Trigorin’e madalyon verir (kitabından sayfa/satır kazılı); kısa, gizli bir veda anı ister.',
      icsel: 'Bağlanma kararı netleşiyor. "Bir gün hayatım sana gerekecek olursa gel ve al onu" — kendini sunma.',
      yuk: 'Tutku, teslimiyet, gizli umut.',
      onerilenSicaklik: 4,
      travma: { kategoriler: [], seviye: 0, durum: 'net' },
      anlar: [
        { id: 's6-a1', tip: 'catal', birlesimSahneNo: 6, travmaDuyarli: false,
          soru: '"Hayatım sana gerekirse gel ve al" diyorsun. Bunu söylerken neyi veriyorsun?',
          secenekler: [
            { dal: 'A', baslik: 'Kendimi bütünüyle', aciklama: 'Gerisini düşünmeden.', oznelSabit: 'Kendimi koşulsuz verdim; geri almayı hiç düşünmedim.' },
            { dal: 'B', baslik: 'Bir umudu', aciklama: 'Karşılık bekleyerek.', oznelSabit: 'Verirken bir söz bekledim; sessizlik en çok orayı yaktı.' },
          ] },
      ],
    },
    {
      no: 7, perde: 3,
      konum: 'III. Perde · Yemek odası, ayrılık öncesi',
      olay: 'Treplev’e: "Kesin kararımı verdim... sahneye çıkıyorum. Yarın babamı, her şeyi bırakıp Moskova’ya gidiyorum." Trigorin’le uzun öpüşme.',
      icsel: 'Eşik anı — eski yaşamı (baba, ev, göl) ardında bırakma. Korkudan çok kararlılık.',
      yuk: 'Kopuş, cesaret, geri dönülmezlik.',
      onerilenSicaklik: 5,
      travma: { kategoriler: [], seviye: 1, durum: 'dramaturjik-agirlik' }, // ev/babadan kopuş — terkin atfı, henüz icra değil
      eşikNotu: 'Bu sahne, oyun-içi yaşamla 2 yıllık boşluğun arasındaki KAPI. Boşluk-set "sonra" bloğu buraya bağlanır.',
      // ──── SPEC sahneyi-yuru · S7 TAM YÜRÜYÜŞ (4 istasyon, veda Trigorin'le — metin teyitli) ────
      sahneTipi: 'yuruyus',
      birlesimSahneNo: 7,
      yuruyus: {
        esik: {
          komut: 'Kapat gözlerini. Bir an, sadece nefesinle kal.',
          adimlar: [
            'Nina’yı şu an nerede hissediyorsun? En çok hissettiğin yere odaklan, oraya dokun.',
            'Nasıl bir his o — katı mı, sıvı mı, gaz gibi mi? Bir rengi var mı?',
            'O rengi çok yavaş, saçının telinden ayak parmaklarına tüm bedenine yay. Vaktin var.',
          ],
          hitap: 'Hazır olduğunda — bundan sonra sana Nina diye sesleneceğim.',
          buton: 'Nina’yım, hazırım',
        },
        girisBaslik: 'Eşik — geri dönülmez karar',
        girisAciklama: 'III. perde sonu. Eski hayatı (baba, ev, göl) ardında bırakma anı. Korkudan çok kararlılık.',
        girisSentez: 'Bu yürüyüşte seçtiklerin senin olur; Sahne 7’de yanında kalır.',
        gecisButonu: 'Şimdi zihninde her neredeysen, ileri doğru bir adım at',
        cikisRitueli: 'Bedenine yaydığın rengi yavaşça geri çek; yerine kendi rengini getir. Birkaç nefes, ayaklar yerde. İyi misin? Hazır olduğunda gözlerini aç.',
        istasyonlar: [
          {
            no: 0, zamanRozet: 'Son bakış',
            acilis: 'Babanın evi, göl, çocukluğun — arkanda. Son bir kez bakıyorsun.',
            sorular: ['Gözün nereye takılıyor?', 'Bedeninde ne var şu an?'],
            yazmaAlani: true, yazmaPlaceholder: 'Son bakışta gözüm…',
          },
          {
            no: 1, zamanRozet: 'Kararı söylüyorsun',
            acilis: '"Kesin kararımı verdim, gidiyorum." Bu cümle ağzından çıkıyor.',
            sorular: ['Bunu söylerken içinde baskın olan ne?'],
            catal: {
              anahtar: 's7-karar', dil: 'birinci_tekil',
              etiket: 'Hangisi senin?',
              secenekler: [
                { deger: 'kararlilik', baslik: 'Kararlılık', aciklama: 'Geri dönüş yok, rahatım.',
                  muhur: 'Bunu unutma — seçtim ve arkama bakmadım.',
                  ozet: 'Seçtim, arkama bakmadım.' },
                { deger: 'gizli_korku', baslik: 'Gizli korku', aciklama: 'Ama göstermiyorum.',
                  muhur: 'Bunu unutma — cesaret gibi görünen şey, korkuyu bastırmaktı.',
                  ozet: 'Cesaretim korkuyu bastırmaktı.' },
              ],
            },
          },
          {
            no: 2, zamanRozet: 'Trigorin’le veda',
            acilis: 'Trigorin’le uzun bir an — tutkulu öpüşme, Moskova sözü. Kendini ona adıyorsun.',
            sorular: ['Bu vedalaşmada ne veriyorsun, ne alıyorsun?'],
            yazmaAlani: true, yazmaPlaceholder: 'Ona verdiğim…',
          },
          {
            no: 3, zamanRozet: 'İlk adım',
            acilis: 'Eşikten geçiyorsun. Yeni hayata ilk adım.',
            sorular: ['Bu ilk adımda beden ne yapıyor?'],
            catal: {
              anahtar: 's7-adim', dil: 'birinci_tekil',
              etiket: 'Hangisi senin?',
              secenekler: [
                { deger: 'hafif', baslik: 'İleri atılıyor', aciklama: 'Hafif, özgür.',
                  muhur: 'Bunu unutma — bırakmak beni hafifletti.',
                  ozet: 'Bırakmak beni hafifletti.' },
                { deger: 'agir', baslik: 'Ağırlaşıyor', aciklama: 'Bir şey geride kaldı.',
                  muhur: 'Bunu unutma — ileri gittim ama bir parçam orada kaldı.',
                  ozet: 'Bir parçam orada kaldı.' },
              ],
            },
          },
        ],
      },
    },
    {
      no: 8, perde: 4,
      konum: 'IV. Perde · Treplev’in çalışma odası, gece (fırtına)',
      olay: '2 yıl sonra, gece, fırtınada Treplev’in odasına gelir. Dağınık, yorgun, kendini hâlâ "martı" sanır gibi konuşur; sonra "Hayır, aktristim" diye düzeltir.',
      icsel: 'Yıkımın ve yeniden-doğuşun aynı anda taşındığı an. Çöküntü ile "sabretme becerisi" arasında salınım.',
      yuk: 'Tükenmişlik, kendini toplama çabası, kopuk düşünceler, geçmişe sığınma.',
      onerilenSicaklik: 5,
      travma: {
        kategoriler: ['Kayıp', 'İhanet', 'Çocukluk', 'Varoluşsal'],
        seviye: 3,
        durum: 'dramaturjik-agirlik', // EN KRİTİK SAHNE — Filiz klinik onayı şart
        not: 'Çocuğun ölümü (Kayıp+Çocukluk), Trigorin’in terki (İhanet), kimlik/anlam krizi (Varoluşsal). Sahnede çöküş riski yüksek. Seviye 3 (İcra) önerildi; Yıldız.psikolojik < 5 ise "hazır olduğunda" bekleyişi uygulanmalı. Çıkışta tam topraklanma + fiziksel aktivite önerisi zorunlu.',
      },
      replikIzi: '"Asıl olan... sabretme becerisidir. Haçını taşımayı becer ve inan." + Dünya Ruhu tiradının tekrarı (başa dönüş).',
      // ──── SPEC sahneyi-yuru · S8 KARMA (giriş yürünür, sonra s8-a2/a3 kart-içi; ÜÇÜNCÜ TEKİL + topraklanma) ────
      sahneTipi: 'karma',
      birlesimSahneNo: 8,
      guvenliCikis: true,
      yuruyus: {
        esik: {
          komut: 'Kapat gözlerini. Bir an, sadece nefesinle kal.',
          adimlar: [
            'Nina’yı şu an nerede hissediyorsun? En çok hissettiğin yere odaklan, oraya dokun.',
            'Nasıl bir his o — katı mı, sıvı mı, gaz gibi mi? Bir rengi var mı?',
            'O rengi çok yavaş, saçının telinden ayak parmaklarına tüm bedenine yay. Vaktin var.',
          ],
          hitap: 'Hazır olduğunda — bundan sonra sana Nina diye sesleneceğim.',
          buton: 'Nina’yım, hazırım',
        },
        girisBaslik: 'Gece — eşikte',
        girisAciklama: 'İki yıl sonra. Fırtına iki gündür sürüyor. Nina beş gündür köyde, kimseyi görmedi. Bu gece bu kapının önünde.',
        girisSentez: 'Buraya dışarıdan bak — bu Nina’nın gecesi. Seçtiklerin Sahne 8’de yanında kalır. Yürüyüş bitince sahnenin geri kalanını birlikte işleyeceğiz.',
        gecisButonu: 'Şimdi zihninde her neredeysen, ileri doğru bir adım at',
        cikisRitueli: 'Bu ağır bir eşikti. Rengi yavaşça geri çek, kendi rengini getir. Nefes al, ayaklar yerde. İyi misin? Hazır olduğunda gözlerini aç — Nina’yı bıraktığın yerde, güvende. Şimdi sahnenin içine, masaya dönüyoruz.',
        istasyonlar: [
          {
            no: 0, zamanRozet: 'Beş gündür buradasın',
            acilis: 'Beş gündür köydesin, kimseyi görmedin. Bu gece, fırtınada, ayaklar Nina’yı bu kapıya getiriyor.',
            sorular: ['Neden tam bu gece?'],
            catal: {
              anahtar: 's8-nedengeldi', dil: 'ucuncu_tekil', guvenliCikis: true,
              topraklanmaNotu: 'Buraya dışarıdan bak — bu Nina’nın gecesi, senin değil. İstersen dur, nefes al.',
              etiket: 'Üç yol var. Nina’nın gerçeğini sen seç.',
              secenekler: [
                { deger: 'trigorin', baslik: 'Trigorin’i görmeye', aciklama: 'Onun burada olabileceğini düşünerek.',
                  muhur: 'Bunu unutma — Nina hâlâ onu arıyordu; bunu kendine bile söyleyemedi.',
                  ozet: 'Nina hâlâ Trigorin’i arıyordu.' },
                { deger: 'treplev', baslik: 'Treplev’e sığınmaya', aciklama: 'Tek güvenli kapı burası.',
                  muhur: 'Bunu unutma — tek dönebileceği kapı buydu; bir yüze geldi, geçmişe değil.',
                  ozet: 'Nina tek güvenli kapıya geldi.' },
                { deger: 'bilmiyor', baslik: 'Kendi de bilmiyor', aciklama: 'Ayakları getirdi.',
                  muhur: 'Bunu unutma — niçin geldiğini bilmiyordu; bir şey onu buraya sürükledi.',
                  ozet: 'Nina niçin geldiğini bilmiyordu.' },
              ],
            },
          },
          {
            no: 1, zamanRozet: 'İçerideki ses',
            acilis: 'İçeri girdin. Yan odadan bir ses geliyor — Trigorin.',
            sorular: ['Onun burada olduğunu şimdi mi öğreniyorsun?'],
            catal: {
              anahtar: 's8-icerideki-ses', dil: 'ucuncu_tekil', guvenliCikis: true,
              topraklanmaNotu: 'Dışarıdan bak. Ağırlaşırsan dur.',
              etiket: 'Hangisi Nina’nın gerçeği?',
              secenekler: [
                { deger: 'simdi', baslik: 'Şimdi öğreniyor', aciklama: 'Sarsılıyor.',
                  muhur: 'Bunu unutma — sesini duyunca yıkıldı; hazırlanmadığı şey karşısındaydı.',
                  ozet: 'Trigorin’i içeride o an öğrendi.' },
                { deger: 'biliyordu', baslik: 'Biliyordu', aciklama: 'Zaten bu yüzden burada.',
                  muhur: 'Bunu unutma — sesini duymak şaşırtmadı; içten içe onun için gelmişti.',
                  ozet: 'Nina Trigorin’in orada olduğunu biliyordu.' },
              ],
            },
          },
        ],
      },
      anlar: [
        { id: 's8-a2', tip: 'catal', birlesimSahneNo: 8, travmaDuyarli: true,
          soru: 'Nina iki yıl sonra, fırtınada bu odaya giriyor. "Bir martıyım ben — hayır, aktristim" derken hangisi daha gerçek?',
          secenekler: [
            { dal: 'A', baslik: 'Martı baskın', aciklama: 'Kırık olan konuşuyor.', oznelSabit: 'Yıkım hâlâ içimde; toparlanmam bir maske.' },
            { dal: 'B', baslik: 'Aktrist baskın', aciklama: 'Ayakta kalan konuşuyor.', oznelSabit: 'Kırıldım ama sahne beni tuttu; sabretme bir beceri.' },
          ] },
        { id: 's8-a3', tip: 'catal', birlesimSahneNo: 8, travmaDuyarli: true,
          soru: 'Dünya Ruhu tiradını yeniden söylüyor — başa dönüş. Bu tekrar Nina için ne?',
          secenekler: [
            { dal: 'A', baslik: 'Bir tutunma', aciklama: 'Eski saf halinden kalan tek şey.', oznelSabit: 'O metin, kaybettiğim kıza uzanan tek ip.' },
            { dal: 'B', baslik: 'Bir mezar taşı', aciklama: 'Bittiğinin kanıtı.', oznelSabit: 'Onu söylerken neyi yitirdiğimi anladım.' },
          ] },
      ],
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
      konum: 'I. Perde öncesi · Babanın evinden göl kıyısına, at üstünde',
      yogunluk: 2,                                // KANON §3.5: Kart-içi çatal (sayfadan çıkmaz, overlay açmaz)
      once: 'Babanın evinden gizlice çıkış. Yakalanma korkusu, yasak.',
      anlatim: 'METİN YAZMAZ: Göl boyunca atı sürerken Nina’nın zihninde ne dönüyor? Korku mu, kaçışın sarhoşluğu mu, Treplev’e mi yoksa sahneye mi gidiyor?',
      sonra: 'I. perde 1. sahne — soluk soluğa, sevinçli varış.',
      sentez: 'Bu boşluk, Nina’nın "özgürlük = sahne + göl" denklemini kurar; oyunun açılış enerjisinin kaynağı.',
      altSorular: [
        'Atın ritmi bedeninde nereye yerleşiyor?',
        'Babanın sesi hâlâ kulağında mı, yoksa rüzgâr onu siliyor mu?',
        'Göle yaklaşırken ne kokuyor, ne duyuyor?',
      ],
      travma: { kategoriler: [], seviye: 0, durum: 'net' },  // 'durum': dramaturjik ağırlık işareti (KANON: geçit değil)

      // ──── YENİ ──── KANON Karar 48 · Kart-içi Çatal (Yoğunluk 2 — sayfadan çıkmaz) ─────
      // SPEC §6: tek çatal, sayfadan çıkmaz, overlay AÇMAZ; birinci tekil (travmasız).
      // Şık seçilince oznel_sabitler'e yazılır → Sahne 1'de hatırlatılır.
      kartCatali: {
        anahtar: 'b1-kacis',
        soru: 'Bu kaçışta seni süren ne?',
        birlesimSahneNo: 1,
        secenekler: [
          {
            dal: 'A', baslik: 'Korku baskın',
            aciklama: 'Yakalanma korkusu; her dörtnal "geri dön" diye çarpıyor.',
            oznelSabit: 'Bu özgürlüğü çalarak aldım.',
          },
          {
            dal: 'B', baslik: 'Kaçışın sarhoşluğu',
            aciklama: 'Rüzgâr babanın sesini siliyor; ilk kez sınırsız.',
            oznelSabit: 'Özgürlük bedenimde başladı, sahnede değil.',
          },
          {
            dal: 'C', baslik: 'Çağrı baskın',
            aciklama: 'Göl, sahne, Treplev ileri çekiyor; arkası yok.',
            oznelSabit: 'Hep ileriye baktım; geri kalanı görmedim.',
          },
        ],
      },
    },
    {
      id: 'b2',
      ad: 'İki yıllık boşluk — Moskova / taşra (III–IV perde arası)',
      konum: 'III–IV. Perde arası · Moskova ve taşra, iki yıl',
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
        durum: 'dramaturjik-agirlik',  // KANON Karar 48: geçit DEĞİL, yoğunluk işareti. Topraklanma ÖNERİLİR; yayını engellemez.
        not: 'Bu boşluğun inşası 8. sahnenin (IV. perde) duygusal yükünü taşır. Tek seansta tamamı yerine parçalı inşa önerilir. Kayıp dalı + Sahne 8 sırası — Filiz uygulama düzeyi gözden geçirmesi (kanon düzeyi değil).',
      },

      // ──── YENİ ──── KANON Karar 48 · Çatallı Boşluk Yürüyüşü (Yoğunluk 3 — tam ekran) ─────
      yogunluk: 3,
      birlesimSahneNo: 8,                          // öznel sabitler bu sahnede hatırlatılır
      guvenliCikis: true,
      yuruyus: {
        esik: {                                    // KANON §4.5: İLK yürüyüşte sabit, sonrakilerde opsiyonel
          komut: 'Kapat gözlerini. Bir an, sadece nefesinle kal.',
          adimlar: [
            'Nina’yı şu an nerede hissediyorsun — göğsünde mi, karnında mı, başka bir yerde mi? En çok hissettiğin yere odaklan, oraya dokun.',
            'Nasıl bir his o — katı mı, sıvı mı, gaz gibi mi? Bir rengi var mı?',
            'Şimdi o rengi, çok yavaş, saçının her bir telinden ayak parmaklarına kadar tüm bedenine yay. İstediğin kadar vaktin var.',
          ],
          hitap: 'Hazır olduğunda — bundan sonra sana Nina diye sesleneceğim.',
          buton: 'Nina’yım, hazırım',
        },
        girisBaslik: 'Moskova ve Taşra',
        girisAciklama: 'Çehov bu iki yılı yazmaz. Dördüncü perdedeki Nina’yı anlamlı kılan tek şey, bu görünmeyen iki yılı kendi içinde yaşayabilmen. Acele yok — istediğin kadar vaktin var.',
        girisSentez: 'Bu yürüyüşte verdiğin kimi kararlar artık senin olur — metinden değil, senden gelen ama bundan sonra değiştirmeyeceğin doğrular. Onları unutmayacaksın; Sahne 8’de yanında olacaklar.',
        gecisButonu: 'Şimdi zihninde her neredeysen, ileri doğru bir adım at',  // KANON §5.4: SADECE buton, istasyon açılışında DEĞİL
        cikisRitueli: 'Bedenine yaydığın o rengi, çok yavaş, geri çek. Yerine kendi rengini getir — sana ait olanı. Birkaç nefes al, ayaklarını yere bas. İyi misin? Ne hissediyorsun? Hazır olduğunda gözlerini aç; Nina’yı bıraktığın yerde, güvende.',
        istasyonlar: [
          {
            no: 0, zamanRozet: 'Varış · Gün 0',
            acilis: 'Tren Moskova’ya yaklaşıyor, birazdan ineceksin.',
            sorular: [
              'Neredesin — nasıl bir yer? Kalabalık mı, soğuk mu?',
              'Bedeninde ne var şu an? Nerede tutuyorsun nefesini?',
              'Ve söyle bana — Trigorin seni orada bekliyor mu?',
            ],
            catal: {
              anahtar: 'varis',
              dil: 'birinci_tekil',
              etiket: 'İki yol var. Hangisi senin?',
              secenekler: [
                {
                  deger: 'karsiladi',
                  baslik: 'Trigorin beni karşıladı',
                  aciklama: 'Peronda bekliyordu. İlk an birlikte başlıyor.',
                  muhur: 'Bunu unutma — Trigorin seni Moskova’da karşıladı. İlk an birlikteydiniz; sonraki her şey bunun üstüne kuruldu.',
                  ozet: 'Varışta Trigorin beni karşıladı.',
                },
                {
                  deger: 'yalniz',
                  baslik: 'Tek başıma indim, elimde bir adres',
                  aciklama: 'Kapıya tek gideceksin. İçeride biri var mı? Ya ev boşsa, bekler misin?',
                  muhur: 'Bunu unutma — Moskova’ya tek başına, elinde bir adresle indin. İlk an yalnızdın; sonraki her şey bunun üstüne kuruldu.',
                  ozet: 'Varışta tek başıma, elimde adresle indim.',
                },
              ],
            },
          },
          {
            no: 1, zamanRozet: '+6 ay',
            acilis: 'Aradan altı ay geçti.',
            sorular: [
              'Bu altı ay nasıl geçti aranızda? Ne değişti?',
              'Onu daha yakından tanıdıkça ne gördün — daha çok mu bağlandın, yoksa seni yabancılaştıran şeyler mi çıktı?',
              'Bedenin sana bir şey söylüyor mu bu aralar? Hamile misin?',
            ],
            yazmaAlani: true,
            yazmaPlaceholder: 'Bu altı ayda ben…',
            catal: null,
          },
          {
            no: 2, zamanRozet: '+12 ay · bir yıl',
            acilis: 'Bir yıl doldu.',
            sorular: [
              'Neredesin şu an? Trigorin’le ne durumdasınız?',
              'Bir yıl oldu — bedeninde, içinde ne değişti?',
              'Hâlâ ona ilk günkü gibi mi bakıyorsun? Sahneye çıkabildin mi — hayalini kurduğun gibi mi oldu?',
            ],
            yazmaAlani: true,
            yazmaPlaceholder: 'Bir yılın sonunda ben…',
            catal: null,
          },
          {
            no: 3, zamanRozet: '+18 ay',
            acilis: 'Altı ay daha geçti — bir buçuk yıldır buradasın.',
            sorular: [
              'Babandan, kasabadan bir haber aldın mı bu süre içinde? Ne değişti hayatında?',
              'Bir bebeğin oldu. Şimdi onu sormam gerek — nasıl, ne durumda?',
            ],
            metinDogrusu: 'Metnin değiştiremeyeceğin doğrusu: Nina çocuğunu bu iki yıl içinde kaybeder (Çehov, Perde IV). Bu sabit. Senin seçeceğin tek şey — onu nasıl yaşattığın.',
            catal: {
              anahtar: 'kayip',
              dil: 'ucuncu_tekil',
              guvenliCikis: true,
              etiket: 'En kırılgan eşik. Buraya dışarıdan bak — Nina’nın gerçeğini sen seç.',
              topraklanmaNotu: 'Buraya dışarıdan bakmayı unutma — bu Nina’nın kaybı, senin değil. İstersen burada durup nefes al. Sonunda toparlanmak için zaman ayıracağız.',
              donguTetik: 'yasiyor',                  // bu seçim ist3.5'e (döngü) götürür
              secenekler: [
                {
                  deger: 'hamilelikte',
                  baslik: 'Nina çocuğunu hamilelik sırasında kaybeder',
                  aciklama: 'Daha doğmadan. Bedeninin içinden alınan bir boşluk.',
                  muhur: 'Bunu unutma — Nina çocuğunu daha doğmadan kaybeder. Sahne 8’in ağırlığı bunun üstüne oturur.',
                  ozet: 'Nina çocuğunu daha doğmadan kaybeder.',
                },
                {
                  deger: 'dogumdan',
                  baslik: 'Doğar — sonra Nina onu kaybeder',
                  aciklama: 'Bir süre annelik. Sonra alınan bir hayat.',
                  muhur: 'Bunu unutma — Nina’nın çocuğu doğar, sonra alınır. Önce annelik, sonra boşluk; Sahne 8 bunun üstüne oturur.',
                  ozet: 'Nina’nın çocuğu doğar, sonra alınır.',
                },
                {
                  deger: 'yasiyor',
                  baslik: 'Şimdilik yaşıyor — şu an iyi',
                  aciklama: 'Bunu da söyleyebilirsin. Ama zaman akmaya devam edecek; birazdan tekrar soracağım.',
                  muhur: '',                            // boş → mühür gösterilmez (döngüye gider, kapanışta kayip2'den okunur)
                  ozet: 'Nina çocuğunu kaybeder.',
                },
              ],
            },
          },
          {
            no: 3.5,
            donguIstasyonu: true,
            zamanRozet: '+6 ay daha · döngü',
            acilis: 'Altı ay daha geçti.',
            sorular: [
              'Geçen sefer çocuğun yaşadığını söyledin. Peki bu altı ayda ne oldu?',
              'Zaman akıyor, ve metnin doğrusu yerinde duruyor. Nina’nın çocuğu şimdi nasıl?',
            ],
            metinDogrusu: 'Bu eşiği geçemiyoruz, çünkü metin geçmemize izin vermiyor. Nina çocuğunu burada kaybeder. Sen yalnızca onu nasıl yaşattığını seç.',
            catal: {
              anahtar: 'kayip2',
              dil: 'ucuncu_tekil',
              guvenliCikis: true,
              etiket: 'Nina onu nasıl kaybeder?',
              topraklanmaNotu: 'Buraya dışarıdan bakmayı unutma — bu Nina’nın kaybı, senin değil. İstersen dur, nefes al.',
              secenekler: [
                {
                  deger: 'hastalik',
                  baslik: 'Hastalanır, Nina kurtaramaz',
                  aciklama: 'Yavaş, çaresiz bir kayıp.',
                  muhur: 'Bunu unutma — Nina’nın çocuğu bir süre yaşar, sonra hastalanıp gider. Yavaş, çaresiz bir kayıp; Sahne 8 bunun üstüne oturur.',
                  ozet: 'Nina’nın çocuğu yaşar, sonra hastalanıp gider.',
                },
                {
                  deger: 'aniden',
                  baslik: 'Aniden olur',
                  aciklama: 'Hazırlıksız, sarsıcı bir kayıp.',
                  muhur: 'Bunu unutma — Nina’nın çocuğu bir süre yaşar, sonra aniden gider. Sahne 8 bunun üstüne oturur.',
                  ozet: 'Nina’nın çocuğu yaşar, sonra aniden gider.',
                },
              ],
            },
          },
          {
            no: 4, zamanRozet: '+24 ay · dönüş',
            acilis: 'Altı ay daha geçti. Ve şimdi yine bir tren istasyonundasın — ama bu kez kasabaya dönüyorsun.',
            // İlk soru (<DAL>) kayıp dalına göre runtime'da yazılır — KANON §5.2.
            // Kalıplar bileşen tarafında saklanır:
            //  - kayip:'hamilelikte'       → 'O kayıp — daha doğmadan giden çocuk — Trigorin'le aranızda neyi değiştirdi? Ne öğrendin?'
            //  - kayip:'dogumdan'          → 'O kayıp — doğup giden çocuk — Trigorin'le aranızda neyi değiştirdi? Ne öğrendin?'
            //  - kayip:'yasiyor'+kayip2:'hastalik' → 'O kayıp — hastalanıp giden çocuk — Trigorin'le aranızda neyi değiştirdi? Ne öğrendin?'
            //  - kayip:'yasiyor'+kayip2:'aniden'   → 'O kayıp — aniden giden çocuk — Trigorin'le aranızda neyi değiştirdi? Ne öğrendin?'
            sorular: [
              '<DAL>',
              'Niye dönüyorsun kasabaya? Ne yapacaksın orada?',
              'Tren yaklaşırken — ilk gelişteki o atın nal sesine benziyor mu tekerlekler? Ne taşıyorsun yanında, neyi bıraktın?',
            ],
            catal: {
              anahtar: 'bilgi',
              dil: 'birinci_tekil',
              etiket: 'Bu seçim, Sahne 8’i doğrudan belirler',
              secenekler: [
                {
                  deger: 'biliyor',
                  baslik: 'Trigorin’in şu an kasabada olduğunu biliyorum',
                  aciklama: 'Sahne 8’de sesini duyduğunda — beklediğin bir sarsıntı.',
                  muhur: 'Bunu unutma — kasabaya dönerken Trigorin’in orada olduğunu biliyordun. Sahne 8’de sesi beklediğin bir sarsıntı olur.',
                  ozet: 'Dönerken Trigorin’in kasabada olduğunu biliyordum.',
                },
                {
                  deger: 'bilmiyor',
                  baslik: 'Orada olduğunu bilmiyorum',
                  aciklama: 'Sahne 8’de sesini duymak — hazırlıksız yakalandığın bir an.',
                  muhur: 'Bunu unutma — kasabaya dönerken Trigorin’in orada olduğunu bilmiyordun. Sahne 8’de sesi seni hazırlıksız yakalar.',
                  ozet: 'Dönerken Trigorin’in orada olduğunu bilmiyordum.',
                },
              ],
            },
          },
        ],
        kapanisBaslik: 'Bunları unutma',
        kapanisAciklama: 'Bu görünmeyen iki yılı kendi içinde yürüdün. Aşağıdakiler artık senin — Sahne 8’de yanında olacaklar.',
      },
    },
    {
      id: 'b3',
      ad: 'Gece — Treplev’in odasından çıktıktan sonra (oyunun sonu)',
      konum: 'IV. Perde sonrası · Gece, evden çıkış',
      yogunluk: 1,                                // KANON §3.5: Yazılı boşluk (Modül III adayı; bu pilotta yogunluk-1)
      once: 'IV. perde: Treplev’le son karşılaşma, Dünya Ruhu tiradının tekrarı, ani çıkış.',
      anlatim: 'METİN YAZMAZ: Nina arabasına bindikten sonra ne olur? Yeletz’e, "üçüncü mevki köylülerin arasına" giderken zihninde ne taşır? (Treplev odada kalır ve kendini vurur — ama Nina bunu bilmez.)',
      sonra: 'Oyun biter; Nina sahnede yoktur. Geleceği belirsiz ama "sabretme" kararı nettir.',
      sentez: 'Bu kapanış boşluğu, Nina’nın trajik figür değil, hayatta-kalan figür olduğunu mühürler. Oyuncu için karakterin oyundan SONRAKİ yaşamına açılan kapı.',
      altSorular: [
        'Arabanın tekerlek sesi sana neyi hatırlatıyor — ilk gelişteki atı mı?',
        'Göl arkanda kalırken bir şey bırakıyor musun, yoksa hepsini mi taşıyorsun?',
        'Yarın sahneye çıkacaksın. Korku mu, yoksa o "sabretme becerisi" mi ağır basıyor?',
      ],
      travma: { kategoriler: ['Varoluşsal'], seviye: 1, durum: 'dramaturjik-agirlik' },  // KANON: geçit değil
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
    },
    {
      id: 't2',
      karar: 'Dünya Ruhu tiradı (I. perde) nasıl oynanmalı?',
      A: 'Saf inançla — genç oyuncunun metne gerçekten inanması; alay edilince kırılması daha acı.',
      B: 'Tedirgin acemiyle — Trigorin’in karşısında utanan, metne tam güvenemeyen bir başlangıç.',
      C: 'Kâhince — farkında olmadan kendi geleceğini (yalnızlık, boşluk) söyleyen bir ön-ses.',
    },
    {
      id: 't3',
      karar: 'Martı simgesiyle Nina’nın ilişkisi sahnede ne kadar görünür kılınmalı?',
      A: 'Örtük: oyuncu bilir ama göstermez; simge izleyiciye bırakılır.',
      B: 'Belirgin: II. perdede ölü martıyı reddederken, IV. perdede ona dönerken bilinçli köprü kurulur.',
      C: 'Yalnızca IV. perdede: "Bir martıyım ben. Yok, değil" anında tek ve yıkıcı bir farkındalık.',
    },
    {
      id: 't4',
      karar: 'Trigorin’e duyulan aşk IV. perdede nasıl konumlanmalı?',
      A: 'Bağımlılık olarak: hâlâ sevmesi onun çözülmemiş yarası; acınası değil ama özgürleşmemiş.',
      B: 'Bilinçli seçim olarak: sevdiğini bilerek taşıyan, utanmayan bir olgunluk.',
      C: 'Geçmişe ait bir kalıntı olarak: artık onu değil, o dönemin kendisini özlüyor.',
    },
    {
      id: 't5',
      karar: 'Oyun-öncesi yaşam (anne ölümü, miras kaybı) ne kadar ağırlık taşımalı?',
      A: 'Arka plan: bilinir ama oynanmaz; sadece yoksunluk duygusunu besler.',
      B: 'Aktif kök: I. perdedeki açlık/kaçış enerjisinin doğrudan kaynağı olarak çalışılır.',
      C: 'Final anahtarı: IV. perdedeki dayanıklılığın aslında çocukluktan gelen bir hayatta-kalma kası olduğu okuması.',
    },
  ],

  // Üretici meta — bu dosya nasıl üretildi (şeffaflık / denetlenebilirlik)
  _meta: {
    katman: 1,
    uretici: 'ITC Metin → Karakter Sayfası Üreticisi (pilot)',
    // KANON Karar 48 sonrası klinik-geçit kaldırıldı (§1 spec v2). Beklenenler:
    insanKarariBekleyen: [
      'metin tonu (Beyti) — pilot testi sırasında atölye diliyle son haline çekilir',
      'pilot testi (Beyti) — b2 yürüyüşü canlıda çalıştırılıp gözden geçirilir',
    ],
    uydurmaKontrolu: 'Doğrular kaynak-etiketli; metin söylemediği yerde "çıkarım" işaretlendi. Hiçbir doğru süslenmedi.',
    sonrakiAdim: 'Beyti pilot testi → atölye dili son okuma → production karakter pipeline\'ına entegrasyon (boslukSet[].yuruyus şeması).',
  },
};

export default nina;
