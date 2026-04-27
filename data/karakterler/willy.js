// data/karakterler/willy.js
// ITC Actor's Gym — Willy Loman karakter verisi

const willy = {
  // ─── KİMLİK ───────────────────────────────────────────────────────────────

  id: 'willy',
  ad: 'Willy Loman',
  oyun: 'Satıcının Ölümü',
  yazar: 'Arthur Miller',
  donem: '1940\'lar',
  tur: 'Trajedi',
  tip: 'ESFP',
  ozet:
    "Yanılsama ve kimlik çöküşü. Geçmiş ile şimdinin aynı anda yaşandığı bir zihin.",
  etiketler: ['Trajedi', 'Yanılsama', 'Aile', 'Amerikan Rüyası'],

  // ─── BASELINE ─────────────────────────────────────────────────────────────

  baseline: {
    ad: 'Genç Satıcı',
    aciklama:
      "Yeni evlenmiş, çocuklar yeni doğmuş. Yolda. Brooklyn'den çıkıyor — yarınların hâlâ vaadle dolu olduğu bir adam. Henüz Boston yok, henüz başarısızlık yok, henüz yorgun değil. \"American Dream\"e gerçekten inanıyor.",
  },

  // ─── KRİTİK İLİŞKİLER ─────────────────────────────────────────────────────

  iliskiler: ['Linda', 'Biff', 'Happy', 'Ben (hayalet)', 'Charley', 'Bernard', 'Howard', 'Boston\'daki Kadın'],

  // ─── DEĞİŞTİRİLEMEZ DOĞRULAR ──────────────────────────────────────────────

  dogrular: [
    { kategori: 'Kimlik', madde: "Willy Loman 60'larında bir gezgin satıcıdır." },
    { kategori: 'Kimlik', madde: 'Brooklyn\'de bir evde yaşıyor — taksitle aldıkları, son taksiti yeni biten ev.' },
    { kategori: 'Kimlik', madde: '36 yıldır aynı şirkette çalıştı, şimdi maaşsız komisyonla.' },
    { kategori: 'İlişki', madde: 'Eşi Linda — onu yıllardır taşıyan, koruyan, gören.' },
    { kategori: 'İlişki', madde: 'Oğulları Biff (34) ve Happy (32).' },
    { kategori: 'İlişki', madde: 'Charley en yakın komşu — sürekli borç para alıyor ondan.' },
    { kategori: 'Bilgi', madde: "Boston'da bir kadınla ilişkisi vardı. Biff bunu öğrendi." },
    { kategori: 'Bilgi', madde: 'Babası Willy küçükken aileyi terk etti. Hatırlamıyor.' },
    { kategori: 'Bilgi', madde: 'Ağabeyi Ben Alaska\'ya gitti, "zengin oldu", erken öldü. Şimdi hayalet olarak ziyaret ediyor.' },
    { kategori: 'Eylem', madde: 'Howard Wagner tarafından kovuldu.' },
    { kategori: 'Eylem', madde: 'Bahçeye geceleri tohum ekti — bir şey büyütmek istedi.' },
    { kategori: 'Eylem', madde: 'Gaz hortumunu sakladı (Linda buldu).' },
    { kategori: 'Son', madde: 'Hayat sigortası vardı — ölürse aile 20.000 dolar alacaktı.' },
    { kategori: 'Son', madde: 'Arabayla intihar etti — "elmas" metaforuyla.' },
    { kategori: 'Son', madde: 'Cenazesinde sadece aile vardı. Kimse gelmedi.' },
  ],

  // ─── 14 SAHNE ─────────────────────────────────────────────────────────────

  sahneler: [
    {
      id: 'a1-1', perde: 1,
      label: 'Eve yorgun döner',
      desc: 'Yola çıktı, dönmek zorunda kaldı. Linda kapıda. Biff geldi.',
      icDurum: '"Olmuyor. Bu sefer olmadı." Yorgunluk ama kabul edemediği bir yorgunluk.',
      bosluk: 'Yolda neden geri döndü? Hangi an karar verdi?',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: 'a1-cocukluk', perde: 1,
      label: 'Bellek: Biff & Happy çocukluk',
      desc: 'Bellek geri geliyor. Çocuklar genç, parlak. Bernard etrafta. Willy kahraman.',
      icDurum: 'Bu anılar Willy için gerçek — şu andan daha gerçek.',
      bosluk: 'Bu hatıraya ne tetikledi? Hangi ses, koku, görüntü?',
      travmaKategorileri: ['cocukluk'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: 'a1-charley-ben', perde: 1,
      label: 'Charley\'le kart, Ben hayaleti',
      desc: 'Charley\'le kart oynuyor. Sonra Ben beliriyor. İki gerçeklik üst üste.',
      icDurum: 'Şu an ile bellek arasındaki sınır siliniyor. İki kişiyle aynı anda konuşuyor.',
      bosluk: 'Ben gittiğinde, Charley ona ne dedi? Willy ne duydu?',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 2,
      kritikMi: true,
    },
    {
      id: 'a1-linda', perde: 1,
      label: 'Linda gaz hortumunu söyler',
      desc: 'Linda oğullarına anlatıyor: "Babanız ölmek istiyor. Hortumu buldum."',
      icDurum: 'Willy bunu duymuyor — sahnedeki o değil. Ama oyuncu olarak biliyorsun: bu söyleniyor.',
      bosluk: 'Linda hortumu bulduğu an ne hissetti? Willy\'ye söyleyebilir miydi?',
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 2,
      kritikMi: false,
    },
    {
      id: 'a1-boston-onces', perde: 1,
      label: 'Boston öncesi — "iş istemeye gideceğim"',
      desc: 'Bellek karışıyor. Genç Willy yolda — Boston\'a gidiyor. Ama bu sefer farklı bir yolculuk.',
      icDurum: 'Yalnızlık bahanesi. "Sadece arkadaşım." Ama biliyor — daha fazlası olacak.',
      bosluk: 'O ilk Boston yolculuğundan önce Linda\'nın yüzüne bakabildi mi?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: 'a2-yenigun', perde: 2,
      label: 'Yeni gün — sahte umut',
      desc: 'Linda kahvaltı hazırladı. Biff iş istemeye gidiyor. Willy "her şey düzelecek" hissinde.',
      icDurum: 'Bir kez daha umut. Ama altta titreyen bir şey var. Howard\'a gideceğini hatırlıyor.',
      bosluk: 'Linda gözlerinin içine baktığında — gerçek olan ne kadar yansıdı?',
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: 'a2-howard', perde: 2,
      label: 'Howard ofiste — kovulma',
      desc: 'Howard ses kayıt cihazıyla ilgileniyor. Willy maaş istiyor. Howard onu kovuyor: "Sen bittin."',
      icDurum: '"Babanı tanıyordum, bana söz verdi" — geçmişe sığınma. Ama Howard duymuyor. "İş = kimlik" çöküyor.',
      bosluk: 'Ofisten çıktığında ilk gittiği yer neresi? Sokakta yürüdü mü?',
      travmaKategorileri: ['ahlaki_yara', 'varolussal'], travmaSeviyesi: 3,
      kritikMi: true,
    },
    {
      id: 'a2-ben-alaska', perde: 2,
      label: 'Bellek: Ben\'in Alaska teklifi',
      desc: 'Geçmişte Ben gelmiş, "benimle Alaska\'ya gel" demişti. Linda hayır demişti.',
      icDurum: 'Bu hatıra şimdi acıtıyor. "Gitseydim — başka bir adam olurdum."',
      bosluk: 'O an Linda\'nın "kal" demesine niye uydu? Şimdi pişman mı?',
      travmaKategorileri: ['kayip'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: 'a2-charley-ofis', perde: 2,
      label: 'Charley\'den para isteme',
      desc: 'Charley iş teklif ediyor. Willy reddediyor — sadece para istiyor. Onuru kırılıyor.',
      icDurum: '"Sen benim tek dostumsun" — itiraf. Ama "iş alamam senden" — gurur.',
      bosluk: 'Charley\'nin ofisinden çıkarken cebindeki parayı — sayar mıydı, saymaz mıydı?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 2,
      kritikMi: false,
    },
    {
      id: 'a2-boston', perde: 2,
      label: 'Boston otel — Biff babayı kadınla görür',
      desc: 'Bellek. Otel odası. Kapı çalıyor. Biff geliyor. Kadın saklanamıyor. Biff her şeyi görüyor.',
      icDurum: 'O an gerçek bir an. Willy bunu unutamıyor — ne kadar bastırırsa bastırsın.',
      bosluk: 'Biff koşarak çıktıktan sonra odada, kadınla — ne söyleyebildi?',
      travmaKategorileri: ['ihanet', 'ahlaki_yara'], travmaSeviyesi: 3,
      kritikMi: true,
    },
    {
      id: 'a2-restoran', perde: 2,
      label: 'Frank\'s Chop House — oğullar bırakır',
      desc: 'Restoran. Biff gerçeği söylemek istiyor — "Bill Oliver beni hatırlamadı." Willy duymuyor. Happy bir kadına asılıyor. Sonunda oğullar babayı tuvalette bırakıp gidiyorlar.',
      icDurum: 'Yalnızlık. Tuvalette ayna karşısında. Boston o anda geri geliyor.',
      bosluk: 'Tuvaletten çıkıp restoran kapısından sokağa adım attığında — kim olduğunu biliyor mu?',
      travmaKategorileri: ['ihanet', 'kayip'], travmaSeviyesi: 2,
      kritikMi: false,
    },
    {
      id: 'a2-bahce', perde: 2,
      label: 'Bahçede tohum eker',
      desc: 'Eve dönmüş. Geceyarısı. Bahçede kazıyor — domates, havuç. Bir şey büyütmeli.',
      icDurum: '"Adam dünyada bir iz bırakmalı." Tohum onun için bir umut değil — bir teselli.',
      bosluk: 'Bahçedeyken Ben\'le konuşuyor — ne anlattı, ne sordu, ne karar verdi?',
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 2,
      kritikMi: true,
    },
    {
      id: 'a2-son-yuzlesme', perde: 2,
      label: 'Biff\'le son yüzleşme',
      desc: 'Biff babayı kucaklıyor — "Beni bırak baba, ben hiçbir şeyim, sen de." Ağlıyor. Willy ilk kez Biff\'in onu sevdiğini görüyor.',
      icDurum: '"He likes me — he likes me!" Yanlış anlama. Sevgiyi başarı olarak okuyor.',
      bosluk: 'Biff yataklara çekildikten sonra Willy bahçeye çıktığı an.',
      travmaKategorileri: ['ahlaki_yara', 'kayip'], travmaSeviyesi: 3,
      kritikMi: true,
    },
    {
      id: 'a2-son', perde: 2,
      label: 'Arabayla intihar — "elmas"',
      desc: 'Yola çıkıyor. Ben hayaleti yanında. "Yirmi bin dolar — Biff için elmas gibi parlak."',
      icDurum: 'Son hesap. Bu intihar değil — ona göre fedakarlık. Son satış.',
      bosluk: 'Arabaya binmeden önce evde son kez baktığı bir şey vardı mı?',
      travmaKategorileri: ['varolussal', 'siddet'], travmaSeviyesi: 3,
      kritikMi: true,
    },
  ],

  // ─── BOŞLUKLAR ────────────────────────────────────────────────────────────

  bosluklar: [
    {
      id: 'b-pre-1',
      tip: 'pre',
      konum: 'Pre-senaryo (çocukluk)',
      baslik: 'Babanın Kaybı',
      kisaAciklama: 'Babası onu küçük yaşta terk etti. Ne hatırlıyor, ne hatırlamıyor?',
      uzunAciklama:
        'Willy küçükken babası gitti. Ben ondan büyük — babayı biraz hatırlıyor. Ama Willy hatırlamıyor. Ben\'in flütüne, "babamızın yaptığı flütlere" sığınıyor. Bu boşluk — hatırlanmayan bir baba — Willy\'nin tüm hayatını şekillendiriyor.',
      sorular: [
        'Babasını hatırlamak istediğinde ne canlanıyor — bir koku, bir ses, hiçbir şey mi?',
        '"Bırakılmışlık" duygusu ne zaman bir bedensel his oldu?',
        'Annesi hakkında hiçbir şey söylenmiyor — neredeydi?',
        'Ben\'le kendi arasındaki yaş farkı onun için ne anlama geliyordu?',
      ],
      sure: '15 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-pre-2',
      tip: 'pre',
      konum: 'Pre-senaryo (gençlik)',
      baslik: 'Genç Satıcı Yılları',
      kisaAciklama: 'İnandığı zamanlar — yolda, evlenmiş, çocuklar yeni doğmuş.',
      uzunAciklama:
        'Bu Willy başka bir adam. Henüz Boston yok, henüz Howard yok, henüz Biff onu görmemiş. Yola çıkıyor, bir kasabada otele iniyor, müşterilerle konuşuyor. "İyi bir adam" hissi gerçek. Bu boşluk Willy\'nin "ne kaybettiğini" anlamak için.',
      sorular: [
        'Genç Willy yola çıkarken eve baktığında ne hissediyordu?',
        'Müşterilere kendini anlatırken hangi cümleyi kullanıyordu?',
        'Bir kasabada ilk satışını yaptığı gün — geceyi nasıl kutladı?',
        'Linda\'ya yazdığı bir mektup olsa, ne yazardı?',
        'Bu Willy ile şu anki Willy yan yana oturup karşılaşsa — birbirlerine ne derlerdi?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-pre-3',
      tip: 'pre',
      konum: 'Pre-senaryo (Boston öncesi)',
      baslik: 'Yalnızlığın Bahanesi',
      kisaAciklama: 'Boston\'a giden ilk yolculuk — kadına gitmeden önce.',
      uzunAciklama:
        'Boston\'da kadınla ilk ilişki bir günde başlamadı. Willy önce yalnızdı, sonra konuştu, sonra kahve içti. O ilk hat çiziminde — "yalnızım, sadece bu kadar" dediği an — kendine yalan söylemeye başladı.',
      sorular: [
        'O kadınla ilk konuştuğu an — gerçekten ne arıyordu?',
        '"Sadece arkadaşım" cümlesini kendine kaç kez tekrar etti?',
        'Linda\'yı düşündü mü, bastırdı mı?',
        'İlk gece otelden eve döndüğünde aynaya bakabildi mi?',
      ],
      sure: '12 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-1',
      tip: 'ic',
      konum: 'Boston otel içi',
      baslik: 'Kapı Çaldı — Biff\'in Sesi',
      kisaAciklama: 'Boston\'da Biff kapıyı çaldığında geçen birkaç dakika.',
      uzunAciklama:
        'Otel odasında Willy ve kadın. Kapı çalıyor. "Açma" diyor kadın. Willy donuyor. Sonra Biff bağırıyor: "Baba!" Willy nasıl açtı kapıyı? O kadından nasıl kurtulmaya çalıştı? Saklayabileceğini sandı mı?',
      sorular: [
        'Kapı ilk çaldığında bedeninde ne hareket etti?',
        'Biff\'in sesini duyduğu an — kim olduğunu hemen tanıdı mı?',
        'Kadına "git" derken hangi tonu kullandı?',
        'Kapıyı açtığında Biff\'in yüzünü görmek nasıldı?',
        'Biff koştuğunda peşinden gitmeyi neden seçmedi?',
      ],
      sure: '20 dk',
      travmaSeviyesi: 3,
    },
    {
      id: 'b-2',
      tip: 'ara',
      konum: 'Boston sonrası',
      baslik: 'Eve Dönüş — Hiç Aynı Olmayan Şey',
      kisaAciklama: 'Boston\'dan eve döndüğünde Biff\'le aralarında hiç aynı olmayan bir şey.',
      uzunAciklama:
        'Willy eve döndü. Biff onunla konuşmadı. Linda hiçbir şey bilmiyordu. Bu boşluk — Boston\'dan sonraki haftalar, aylar — Willy\'nin Biff\'in soğukluğunu açıklayamadığı zaman. Sadece "kendini topla" diyebildi.',
      sorular: [
        'Eve girdiği ilk akşam Biff\'le göz göze gelebildi mi?',
        'Linda\'nın bunu fark etmediğini gerçekten düşündü mü, yoksa görmek istemedi mi?',
        'Biff matematikten kaldığında — gerçek nedeni biliyor muydu?',
        'O dönemde aynaya baktığı bir an oldu mu?',
      ],
      sure: '15 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-3',
      tip: 'ara',
      konum: 'Bellek arası',
      baslik: 'Ben Hayaletinin Doğuşu',
      kisaAciklama: 'Ben gerçekte öldü. Hayalet ne zaman doğdu?',
      uzunAciklama:
        'Ben gerçekten ölmüştü Willy çağırmadan önce. Ama Willy onu çağırıyor. Bu hayalet ne zaman bir alışkanlık oldu? Hangi karar anlarında geri çağrıldı? Hayalet kim için var — Ben için mi, Willy için mi, oğullar için mi?',
      sorular: [
        'Ben öldüğünde Willy nerede neler yapıyordu?',
        'Onun "yokluğunu" ilk hissettiği an?',
        'Hayaleti çağırdığı ilk an — bilinçli miydi yoksa kendiliğinden mi?',
        'Ben\'in söylediği şey — Willy\'nin söylemek istediği şey mi?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-4',
      tip: 'ara',
      konum: 'A1 → A2 arası',
      baslik: 'Geceyarısı Bahçesi',
      kisaAciklama: 'Aile uyurken bahçede tek başına olduğu o gece.',
      uzunAciklama:
        'Ailesi yatakta. Linda uyumuyor — onu bekliyor ama belli etmiyor. Willy bahçede. Tohum kazıyor, Ben\'le konuşuyor, gece soğuk. Bu boşluk — bir adamın kendisiyle baş başa olduğu son gerçek saat.',
      sorular: [
        'Bahçeye çıkma kararını nasıl verdi — ani mi, planlanmış mı?',
        'Toprağı kazarken hangi düşünceler aklından geçti?',
        'Ben\'le konuşurken sesini ne kadar yüksek çıkardı?',
        'Linda\'nın bahçeden geldiğini fark ettiği an — saklamak istedi mi?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-5',
      tip: 'ara',
      konum: 'Howard ofis sonrası',
      baslik: 'Kovulduktan Sonra Sokakta',
      kisaAciklama: 'Howard\'ın ofisinden çıktıktan Charley\'ye giderken.',
      uzunAciklama:
        'Howard "sen bittin" dedi. Willy ofisten çıktı. Sokakta. Aynı sokaklar — ama farklı bir adam yürüyor şimdi. Charley\'ye gitmeye karar vermek için bir süre var. O sürede ne oldu?',
      sorular: [
        'Sokağa adım attığında ilk gördüğü şey neydi?',
        'Bir köşede durup nefes aldığı bir an oldu mu?',
        'Charley\'ye gitmeyi düşünene kadar kaç dakika geçti?',
        'Eve dönmek aklına geldi mi? Niye gitmedi?',
      ],
      sure: '15 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-6',
      tip: 'ic',
      konum: 'Charley ofis içi',
      baslik: 'Para Almak ile Ölmek Arasında',
      kisaAciklama: 'Charley\'den parayı aldığı an — bir karar verildi.',
      uzunAciklama:
        'Charley parayı uzattı. Willy aldı. "Sen benim tek dostumsun" dedi. Bu cümleyi söyledikten sonra ofisten çıkarken — sigorta düşüncesi belki ilk burada netleşti.',
      sorular: [
        'Parayı cebine koyduğu an — bunun ne kadarını sigortaya katacağını düşündü mü?',
        '"Tek dostum" cümlesini söylerken Charley\'nin yüzünü gördü mü?',
        'Ofisten çıkarken bir an durup geri dönmek istedi mi?',
        'O parayı sayma ihtimali — neden saymadı?',
      ],
      sure: '12 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-7',
      tip: 'ara',
      konum: 'Restoran sonrası',
      baslik: 'Tek Başına — Eve Mi, Başka Yere Mi?',
      kisaAciklama: 'Oğullar gitti. Willy tuvalette, sonra restoran kapısında, sonra sokakta.',
      uzunAciklama:
        'Frank\'s Chop House. Tuvaletten çıktı. Restoran neredeyse boş. Hesap ödedi mi, ödemedi mi belirsiz. Sokağa çıktı. Eve gitmesi lazım ama ayakları gitmiyor. Bu süre — saat 11\'den geceyarısına kadar — ne oldu?',
      sorular: [
        'Restorandan çıktığında saat kaçtı?',
        'Bir yere oturdu mu — bir banka, bir köşeye?',
        'Bir tanıdığa rastlasaydı yüzünü saklar mıydı?',
        'Eve giderken Linda\'nın bekliyor olduğunu biliyordu — bu bilgi onu hızlandırdı mı, yavaşlattı mı?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-8',
      tip: 'ara',
      konum: 'Son yüzleşme sonrası',
      baslik: '"He likes me!" — Linda Yanına Geldiğinde',
      kisaAciklama: 'Biff ağladı, kucakladı. Willy bunu sevgi olarak anladı.',
      uzunAciklama:
        'Biff "ben hiçbir şeyim" dedi, ağladı. Willy bunu yanlış anladı: "He likes me!" Linda yatağa gitti. Willy ayakta. Bahçeye çıkmadan önce — Linda yanına geldiğinde ne konuştular?',
      sorular: [
        'Linda yanına geldiğinde nasıl bir yüz takındı?',
        '"Yarın iyi olacak" dedi mi, dedirtmedi mi?',
        'Linda gittiğinde — onu son kez gördüğünü biliyor muydu?',
        'Bahçeye çıkma kararı bu konuşma sırasında mı, sonra mı oluştu?',
      ],
      sure: '15 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-post',
      tip: 'post',
      konum: 'Post-senaryo',
      baslik: 'Mezarda — Kimse Yok Ama Willy Duyuyor',
      kisaAciklama: 'Cenazeden sonra mezar başında kalmış bir an.',
      uzunAciklama:
        'Cenaze bitti. Linda, Biff, Happy, Charley, Bernard gittiler. Mezar tek başına. Ama Willy oyuncu olarak hâlâ orada — karakteri taşıyor. Bu boşluk Willy için değil, oyuncu için. Willy\'yi bırakma anı.',
      sorular: [
        'Willy\'nin yaşamı sende neyi açtı, neyi kapattı?',
        'Onu içine aldığında en zor olan duygu hangisiydi?',
        'Bu rolde geçirdiğin saatler boyunca seni en çok yoran şey neydi?',
        'Willy\'nin "yanlış rüyasını" bırakırken — kendi rüyalarına bir şey hatırlattı mı?',
        'Şimdi mezarın başından kalkmadan önce — Willy\'ye ne söylemek istersin?',
      ],
      sure: '15 dk',
      tipDeroling: true,
    },
  ],

  // ─── ZİHİNSEL ANTRENMANLAR — 7 EGZERSİZ, ITC FORMATI ──────────────────────

  antrenmanlar: [
  
    // ==========================================================================
    //  EGZERSİZ 1 — Eve Dönüş, Yorgun Adam
    // ==========================================================================
    {
      id: 'eve-donus',
      no: 1,
      baslik: 'Eve Dönüş — Yorgun Adam',
      altbaslik: 'Kuzeyden geri dönüş, kaza eşiği',
      sure: '20-25 dk',
      seviye: 'Temel',
      bagliSahne: 'a1',
      travmaKategorileri: ['varolussal', 'kayip'],
      travmaSeviyesi: 2,
  
      girisMetni: 'Bu egzersizde Willy\'nin Yonkers\'tan eve geri döndüğü âna gideceğiz. 63 yaşında, bir satıcı, çantaları elinde, arabanın direksiyonunda neredeyse iki kez yoldan çıkmış bir adam. Ev hâlâ yerinde. Linda hâlâ bekliyor. Ama Willy o adam değil artık — sadece henüz kabul etmiyor.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Willy şu an nerede? Brooklyn, gece geç, kendi evinin kapısının önünde. Etraf nasıl, ev nasıl görünüyor, çantalar elinde nasıl bir ağırlık? Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Az önce yoldaydın. Direksiyonda. İki kez yoldan çıktın — Linda\'ya bunu söyleyeceksin ama yumuşatarak. Bu uçtan uca yorgunluk şu an bedeninde nerede en yoğun?',
          soru: 'Yorgunluk nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Willy 63 yaşında ve bedeni bunu biliyor. 30 yıllık bir satıcı bedenini taşıyor. Postürünü dene — omuzlar nasıl, sırt nasıl, ayaklar nasıl? Yorgun adamın postürü neresinden başlıyor?',
          soru: 'Postürün niteliği',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. İçinde iki şey var: "Bunu Linda\'ya nasıl açıklayacağım" ve "Bu işten ne zaman emekli olacağım, hayatım nereye gidiyor?" Bu ikisi bedeninde aynı yere mi düşüyor, farklı yerlere mi?',
          soru: 'İki düşünce nerede?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Yoldayken neyi gördün son? Yeşil ağaçlar mı, kendi yüzünü camda mı, çocukluğunu mu, bir an Boston\'u mu? Şu an gözünde hangi görüntü var?',
            isitsel:   'Direksiyonda kafanın içinde sesler vardı — kimin sesi? Linda\'nın mı, Biff\'in mi, Howard\'ın mı, kendi babanın mı, kardeşin Ben\'in mi? Hangi ses en yüksek?',
            kinestetik:'Eline bir bavul almış, kapıdasın. Ama bedenin gerçekten kapıyı açabiliyor mu? Kollarında, dizlerinde, bedeninin neresinde "yapamıyorum" var?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Willy olarak içinden geçir: "I am tired to the death." (Ölesiye yorgunum.) Bu cümle nereden geliyor? Sadece bedensel yorgunluk mu, yoksa daha derin bir şey mi?',
          soru: 'Yorgunluğun derinliği',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Linda kapıyı açmak üzere. Onu görmeden önce son bir an. Ona ne söyleyeceksin? Yalan mı, gerçek mi, yarım gerçek mi? Bedeninde hangi cevap hazır?',
          soru: 'Linda\'ya ne söyleyeceksin?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Buradasın. Willy\'nin yorgunluğu orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 2 — Howard'a Yalvarış
    // ==========================================================================
    {
      id: 'howard-yalvaris',
      no: 2,
      baslik: 'Howard\'a Yalvarış',
      altbaslik: '34 yıllık satıcının silinmesi',
      sure: '20-25 dk',
      seviye: 'İleri',
      bagliSahne: 'a2',
      travmaKategorileri: ['ahlaki_yara', 'varolussal'],
      travmaSeviyesi: 2,
  
      girisMetni: 'Bu egzersizde Willy\'nin patronu Howard\'ın ofisine girip ondan yardım istediği âna gideceğiz. 34 yıl boyunca bu firmaya çalıştın. Şirketin kurucusu eski patronundu — onun oğlu Howard şimdi karşında, senden 30 yaş genç, ses kayıt cihazıyla oynuyor. Sen onu doğmadan önce tanıyordun. Şimdi ondan iş istiyorsun. Ama o seni kovuyor.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Willy şu an nerede? New York City, Howard\'ın ofisi. Modern, soğuk, yabancı bir alan. Sen yıllardır bu şirketteydin. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Howard senin gözüne bakmıyor. Yeni bir teyp kaydedicisiyle oynuyor, çocuklarının sesini dinletiyor sana. Sen ondan rica edeceksin: New York\'ta kalmak, eve yakın bir iş. Bu yalvarış pozisyonuna girmek bedenine ne yapıyor?',
          soru: 'Yalvarış nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Eski Willy — yıllar önce bu ofise zafer kazanmış geri dönen Willy — ile şimdiki Willy arasındaki fark bedeninde nasıl? Postürün nasıl çöktü?',
          soru: 'Postürdeki çöküş',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Howard sana şöyle diyor: "Pop, business is business." Bu kelimeler bedeninin neresine değdi? "Pop" — sen onun çocukken babası gibiydin. Şimdi bu kelime ile sen büyük adam yerine küçük yaşlı bir adamsın.',
          soru: 'Pop kelimesi ne yaptı?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Howard\'ın yüzüne bakarken zihninde başka bir yüz mü beliriyor? Belki Howard\'ın babası, belki kendi ailenin yüzü, belki kendi gelecekteki halin?',
            isitsel:   'Howard kayıt cihazıyla oynuyor — çocuğunun sesi geliyor odaya. Bu ses senin için ne anlama geliyor? Kendi çocukluğun mu, kendi oğullarının çocukluğu mu, kayıp bir şey mi?',
            kinestetik:'Bedenin masaya doğru eğildi mi, geri çekildi mi? Ellerin nerede? Diz çökmek istemediğin bir şey mi var bu odada?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Willy olarak içinden geçir: "A man is not a piece of fruit, you can\'t just throw him away when he\'s no longer sweet." (Adam bir meyve değildir, tatlılığı bittiğinde atılamaz.) Bu bir yalvarış mı, bir öfke mi, bir gerçeği söylemek mi?',
          soru: 'Cümlenin tonu',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Howard sana sırtını dönüyor. Sen ofisten çıkmak üzeresin — kovulmuş, beraat etmemiş. Bu odadan çıkıyorsun ama içinde ne kaldı? Öfke mi, utanç mı, çöküş mü?',
          soru: 'İçinde ne kaldı?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Buradasın. Willy\'nin utancı orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 3 — Charley'den Para İstemek
    // ==========================================================================
    {
      id: 'charley-para',
      no: 3,
      baslik: 'Charley\'den Para İstemek',
      altbaslik: 'Gururun son sınırı',
      sure: '20-25 dk',
      seviye: 'Orta',
      bagliSahne: 'a2',
      travmaKategorileri: ['ahlaki_yara', 'varolussal'],
      travmaSeviyesi: 1,
  
      girisMetni: 'Bu egzersizde Willy\'nin komşusu Charley\'den para istediği âna gideceğiz. Charley\'i hep küçük gördün — eline çekiç almayı bilmeyen bir adam, "yumuşak" bir adam. Ama oğlu Bernard\'ın artık başarılı bir avukat olduğunu öğrendin. Ve şimdi Charley\'den para istemek zorundasın. Bu sıradan bir borçlanma değil — bu hiyerarşinin kendi yüzüne çarpması.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Willy şu an nerede? Charley\'nin ofisi, küçük ama iyi düzenlenmiş. Az önce Bernard\'la karşılaştın koridorda — başarılı genç bir adam, şimdi bir avukat, Yargıtay\'a hazırlanıyor. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Bernard genç bir delikanlıyken senin oğlun Biff\'in arkasından koşardı. Şimdi Bernard avukat, Biff hâlâ bir yerlerde dolaşıyor. Bu kıyas bedeninin neresine değiyor?',
          soru: 'Kıyas nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Charley\'den para isteyecek Willy\'nin postürü nasıl? Az önce bu ofisten çekindin, şimdi geri döndün. Postürün dik mi, eğik mi, ortada mı?',
          soru: 'Postürün durumu',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Charley sana iş teklif ediyor — düzenli bir maaş, sıkıntı yok. Sen reddediyorsun. Çünkü bu bir sadakaymış gibi geliyor sana. İçinde iki şey çatışıyor: Para ihtiyacı ve gurur. Hangi taraf daha güçlü?',
          soru: 'Hangi taraf?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Bernard\'ın yüzünü gördün — gençken senin oğullarına göre küçücük bir çocuktu. Şimdi büyük bir adam. Bu görüntü ile Biff\'in son halini yan yana tut. Hangi imge baskın?',
            isitsel:   'Charley sana sesleniyor — yumuşak, dostça, hiç yargılamadan. Bu ses bedeninde nereye değiyor? Şefkatli ses sana ne yapıyor?',
            kinestetik:'Charley sana parayı uzatıyor — eline. Bu hareket ne hissettiriyor? Almak için elin uzanıyor mu, geri çekiliyor mu?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Willy olarak içinden geçir: "I am offering you a job, you don\'t want a job, what is it?" (Sana iş öneriyorum, iş istemiyorsun, sorun ne?) Charley\'nin sorusu. Sen kendine ne cevap veriyorsun?',
          soru: 'Senin cevabın',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Parayı al, Charley\'den ayrıl. Bu paranın elinde olması bedenine ne yapıyor? Rahatlama mı, daha derin bir utanç mı, garip bir şükran mı?',
          soru: 'Para elinde nasıl?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Buradasın. Willy\'nin gururu orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 4 — Boston Anısı
    // ==========================================================================
    {
      id: 'boston-anisi',
      no: 4,
      baslik: 'Boston Anısı',
      altbaslik: 'Biff\'in babasını gördüğü an',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: 'gecmis',
      travmaKategorileri: ['ihanet', 'ahlaki_yara'],
      travmaSeviyesi: 3,
  
      girisMetni: 'Bu egzersizde Willy\'nin Boston otelinde Biff tarafından yakalandığı âna gideceğiz. Bu bir bellek değil — Willy için sürekli geri dönen bir gerçeklik. Yıllar önce, bir otel odasında, başka bir kadınla. Kapı çalındı. Açtın. Biff orada duruyordu — 17 yaşında, matematikten kaldığı için babasını görmeye gelmiş. Ve gördü. Ve o andan itibaren her şey değişti.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz büyük bir suçluluk anına gidiyor. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Willy şu an nerede? Boston, otel odası, yıllar önce. Yatak dağınık. Yanında bir kadın — Bayan Francis. Bir sabah, kapı çalıyor. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Kapıyı açtın. Biff orada. 17 yaşında, gözlerinde ışıltı. Sana matematik öğretmeninin onu sınıfta bıraktığını söylemeye gelmiş. Babasından yardım istemeye gelmiş. Bu görüntüyü bedeninde nasıl tutuyorsun?',
          soru: 'Biff\'i görmek nasıl?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. O andaki Willy — kapıyı açmış, oğlu karşısında, başka bir kadın yatakta. Bedenin nasıl bir hal aldı? Donmuş mu, çekilmiş mi, çığlık atmış mı? Sen tarif etme — bedenin söylesin.',
          soru: 'O andaki postür',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Biff sana şöyle dedi: "You — you gave her Mama\'s stockings!" (Annemin çoraplarını ona verdin!) Bu cümle senin neresine değdi? Çoraplar küçük bir detay — ama bu detay tüm dünyanı çökertti. Çünkü Biff için annenin çorapları ihanetin somut karşılığı oldu.',
          soru: 'Çoraplar cümlesi',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Biff\'in yüzünü gör. 17 yaşında, sana güveniyordu. Sonra göz teması anı. Onun yüzünde ne oldu? Şok mu, kayıp mı, dünyanın çökmesi mi? Bu görüntü hâlâ bedeninde duruyor.',
            isitsel:   'O odada hangi sesleri duydun? Biff\'in nefesi mi, kadının kıkırdayışı mı, kendi nefesin mi? Hangi ses sana hâlâ geliyor?',
            kinestetik:'Bedenin Biff\'e dokunmaya mı yöneldi, geri çekildi mi? Onu durduramadın, gitti. Bu fiziksel kopuş bedeninde nereye yerleşti?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Biff koridorda yürüdü, gitti. Sen kapıda kaldın. Şu cümleyi Willy olarak içinden geçir: "Biff, please... I gave you an order, Biff!" (Biff, lütfen… Sana bir emir verdim, Biff!) Ama o duymadı. Bu emir bir öfke mi, bir yalvarış mı, bir kendini koruma mı?',
          soru: 'Cümlenin altında ne var?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Yıllar geçti. Ama bu an hiç bitmedi. Şu an Willy olarak — bu hatırayı taşıyan adam — bedeninde nerede yaşıyor bu an? Eski bir yara mı, açık bir kanama mı?',
          soru: 'Yara nerede?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz çok derin bir suçluluk yerine götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Etrafındaki üç şeyi say. Boston orada — sen burada, kendi bedeninde. Su iç. Birkaç dakika öylece otur. Bugün bitince fiziksel bir aktivite yap.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 5 — Ben'in Hayaleti
    // ==========================================================================
    {
      id: 'ben-hayaleti',
      no: 5,
      baslik: 'Ben\'in Hayaleti',
      altbaslik: 'Kardeşinin sesi, gitmediğin yol',
      sure: '20-25 dk',
      seviye: 'Orta',
      bagliSahne: 'surekli',
      travmaKategorileri: ['varolussal', 'kayip'],
      travmaSeviyesi: 2,
  
      girisMetni: 'Bu egzersizde Willy\'nin abisi Ben\'le hayalî bir konuşma kurduğu âna gideceğiz. Ben gerçek değil artık — öldü yıllar önce. Ama Willy için Ben hep orada. Çünkü Ben yapmıştı: 17 yaşında ormana yürüdü, 21 yaşında zenginleşti. "When I was seventeen, I walked into the jungle. And when I was twenty-one, I walked out. And by God, I was rich!" Willy bu cümleyi her gün duyar. Ve her gün kendine sorar: Ben neden gitmedim?',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Willy şu an nerede? Belki bahçe, belki mutfak, belki uyumadan önce yatak. Ben görünmek üzere. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Ben karşına geliyor. Senden büyük, geniş omuzlu, elinde bir bavul, sanki yine yola çıkacak. Onu görmek bedenine ne yapıyor? Sevgi mi, kıskançlık mı, küçüklük mü?',
          soru: 'Ben\'i görmek nasıl?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Ben\'in yanında nasıl bir Willy oluyorsun? Kendinden ufak mı hissediyorsun, gururlu mu, savunmacı mı? Postürünü dene.',
          soru: 'Ben\'le birlikte postür',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Ben sana şöyle diyor: "When I was seventeen, I walked into the jungle. And when I was twenty-one, I walked out. And by God, I was rich!" Bu cümleyi her duyduğunda bedeninde ne oluyor? İlk duyduğun zamandan farklı mı?',
          soru: 'Cümle nereye değiyor?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Ben gerçek değil — ama sana o kadar gerçek görünüyor ki. Onun yüzü, kıyafeti, ormana giden adımları. Bu görüntü senin için bir gurur mu, bir suçlama mı?',
            isitsel:   'Ben\'in sesi nasıl? Sert mi, sevecen mi, alaycı mı? "And by God, I was rich!" cümlesindeki tonun seni rahatsız mı ediyor, çekiyor mu?',
            kinestetik:'Ben\'in fiziksel varlığı odanı dolduruyor mu? Onun yanında küçülmek mi, büyümek mi geliyor bedenine?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Sen ona soruyorsun: "Ben — what is the answer? How did you do it?" (Ben — cevap ne? Sen bunu nasıl yaptın?) Bu soru bir öğrenmek isteme mi, bir yardım dileme mi, bir kıskançlık mı?',
          soru: 'Soruyu sorarken ne hissettin?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şu cümleyi Willy olarak içinden geçir: "Why couldn\'t I have made a thing in the jungle?" (Neden ben de ormana gitmedim?) Bu pişmanlık mı, bahane mi, suçlama mı, gerçek bir merak mı?',
          soru: 'Cümlenin altında ne var?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Ben gitti — o gerçek değildi. Sen buradasın, kendi bedeninde. Adını söyle. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 6 — Restoran, Oğullar Terk Ediyor
    // ==========================================================================
    {
      id: 'restoran-terk',
      no: 6,
      baslik: 'Restoran — Oğullar Terk Ediyor',
      altbaslik: '"Where are you guys?"',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: 'a2',
      travmaKategorileri: ['kayip', 'ihanet'],
      travmaSeviyesi: 3,
  
      girisMetni: 'Bu egzersizde Willy\'nin oğullarıyla restoranda buluştuğu âna gideceğiz. Biff Bill Oliver\'la görüşmeye gitti — Willy büyük bir umutla bekliyor. Ama Biff başaramadı. Daha kötüsü, kalemini çaldı. Ve şimdi söylemek üzere. Ama Willy duyamıyor. Willy başka bir gerçeklikte — Boston\'da, hatıralarda. Oğullar onu masada bırakıp gidiyorlar. Willy yalnız kalıyor.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz çok yoğun bir terk edilme anına gidiyor. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Willy şu an nerede? New York\'ta bir restoran, Frank\'in Chop House. Oğullar bu akşam buluşacaktınız — kutlama olacaktı. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Biff sana doğru bir şey söylemeye çalışıyor — gerçeği söylemeye. Ama sen duymak istemiyorsun. Çünkü duyduğunda her şey çöker. Bu duymama isteğini bedenin neresinde tutuyorsun?',
          soru: 'Duymama isteği nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Willy bu masada — kafası başka bir yerde. Bedenin nasıl iki yerde aynı anda? Şu anda mı, Boston\'da mı, hatıralarda mı? Bu kayma bedenin neresinde?',
          soru: 'Kayma nerede?',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Biff "Pop, Bill Oliver beni hatırlamadı. Ben hiç onun için çalışmamıştım — sadece bir tezgâhtardım." dedi. Bu cümleyi duyduğunda bedeninde ne oldu? Reddetmek mi, anlamamak mı, kayıp mı?',
          soru: 'Cümle nereye değdi?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Restoranın ışıkları, gürültüsü, kadın garsonlar — şimdi bunlar nasıl görünüyor? Yumuşadı mı, soldu mu, başka bir mekana mı dönüştü? Boston otel odası mı belirdi?',
            isitsel:   'Etraftaki sesler — yemek, bardak, kahkaha — uzaklaştı mı? Yerinde Biff\'in genç sesini mi duyuyorsun? "You — you gave her Mama\'s stockings!" sesi mi?',
            kinestetik:'Bedenin sandalyede mi, kalkıp gitmeye mi hazırlanıyor, donmuş mu? Oğulların gittiğini fark ettiğinde bedenin ne yaptı?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Oğullar masadan kalktılar. Senin yanında iki kadın bıraktılar — yabancılar. Restoranda yalnız kaldın. Şu cümleyi Willy olarak içinden geçir: "Where are you guys? Where are you?" (Neredesiniz, çocuklar? Neredesiniz?) Bu çağırış bir korku mu, bir kayıp mı, bir uyku mu?',
          soru: 'Çağırışın altında ne var?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Yalnız kaldın. Garsonlar etrafında. Sen artık tutamıyorsun. İçinde ne kaldı? Çığlık mı, sessizlik mi, bir şey daha derinde mi?',
          soru: 'Sende ne kaldı?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz bir terk edilme yerine götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Etrafındaki üç şeyi say. Restoran orada — sen burada, kendi bedeninde. Su iç. Birkaç dakika öylece otur. Bugün bitince fiziksel bir aktivite yap.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 7 — Bahçede Tohum + Son Yolculuk
    // ==========================================================================
    {
      id: 'bahce-son',
      no: 7,
      baslik: 'Bahçede Tohum + Son Yolculuk',
      altbaslik: 'Karanlıkta yetiştirmek',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: 'a2-son',
      travmaKategorileri: ['varolussal', 'kayip'],
      travmaSeviyesi: 3,
  
      girisMetni: 'Bu egzersizde Willy\'nin son gece yaşadığı iki âna gideceğiz: Bahçede gece tohum ekmesi ve sonra arabaya gidişi. Bu sıralı iki an aynı şeyin parçası — bir adam dünyaya bir şey bırakmaya çalışıyor. Tohumla, sonra hayat sigortasıyla. Çünkü Willy artık sadece bir şey istiyor: Biff\'in onu sevdiğini bilmek. Ve bunun bir bedeli olmalı.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz son an a yaklaşıyor. Hazır olduğunda devam et. Acele etme.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Willy şu an nerede? Brooklyn, küçük bahçe, gece. Elinde tohum paketleri ve bir el feneri. Etraf karanlık, evler büyümüş, gökyüzü görünmüyor. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Bahçe artık güneş almıyor — komşu binalar her şeyi gölge altında bırakıyor. Yine de tohum ekiyorsun. Gece. Bu eylemin bedeninde nereye değdi? Umut mu, çaresizlik mi, ritüel mi?',
          soru: 'Tohum ekmek nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Eline el feneri al, bir tohum paketi tut. Bu Willy bahçede eğilirken nasıl bir bedendir? Yorgun mu, kararlı mı, çoktan başka bir yerde mi?',
          soru: 'Postür ne diyor?',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Yan yanına Ben gelip oturuyor — gerçek değil ama orada. Sen ona iş hakkında konuşuyorsun: 20 bin dolarlık hayat sigortası. Ölürsen bu para Biff\'e gidecek. Sen bunu Ben\'e sunuyorsun bir iş gibi: "It\'s a guaranteed twenty thousand dollar proposition." Bu bir iş mi, bir hediye mi, bir suç mu, bir sevgi mi?',
          soru: 'Bu plan nedir?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Bahçede gece — el fenerinin ışığı dar bir alanı aydınlatıyor. Geri kalanı karanlık. Sen bu karanlığa ne ekiyorsun gerçekten? Tohum mu, başka bir şey mi?',
            isitsel:   'Geceyi dinle. Şehir gürültüleri, uzaktan bir araba, bir evden müzik. Ama içinde Ben\'in sesi. "It\'s dark in there but full of diamonds." Bu ses neyi söylüyor sana?',
            kinestetik:'Toprakta diz çökmüşsün, ellerin toprakta. Bu fiziksel temas seninle yer arasında ne kuruyor? Bir veda mı, bir bağlanma mı?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Biff geliyor — son bir kez seninle konuşmaya. Sana sarılıyor. Ağlıyor. "He likes me!" diyorsun şaşkınlıkla. "He likes me!" Bu fark ediş bedeninde nereye değdi? Hep bilmek istediğin şey buydu — ve sana bu kadar geç mi geldi?',
          soru: 'Biff seni seviyor — bu nereye değdi?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şimdi karar net. Arabaya gideceksin. Şu cümleyi Willy olarak içinden geçir: "That boy — that boy is going to be magnificent!" (O çocuk — o çocuk muhteşem olacak!) Bu sevinç mi, teselli mi, kendine ettiğin son yalan mı?',
          soru: 'Cümlenin altında ne var?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz büyük bir veda yerine götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Yaşıyorsun, buradasın. Etrafındaki üç şeyi say. Willy\'nin son gecesi orada — sen burada, kendi bedeninde. Su iç. Birkaç dakika öylece otur. Bugün bitince mutlaka fiziksel bir aktivite yap, biriyle konuş.',
        },
      ],
    },
  
  ],
};

export default willy;
