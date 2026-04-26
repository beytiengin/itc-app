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
    },
    {
      id: 'a1-cocukluk', perde: 1,
      label: 'Bellek: Biff & Happy çocukluk',
      desc: 'Bellek geri geliyor. Çocuklar genç, parlak. Bernard etrafta. Willy kahraman.',
      icDurum: 'Bu anılar Willy için gerçek — şu andan daha gerçek.',
      bosluk: 'Bu hatıraya ne tetikledi? Hangi ses, koku, görüntü?',
      travmaKategorileri: ['cocukluk'], travmaSeviyesi: 1,
    },
    {
      id: 'a1-charley-ben', perde: 1,
      label: 'Charley\'le kart, Ben hayaleti',
      desc: 'Charley\'le kart oynuyor. Sonra Ben beliriyor. İki gerçeklik üst üste.',
      icDurum: 'Şu an ile bellek arasındaki sınır siliniyor. İki kişiyle aynı anda konuşuyor.',
      bosluk: 'Ben gittiğinde, Charley ona ne dedi? Willy ne duydu?',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 2,
    },
    {
      id: 'a1-linda', perde: 1,
      label: 'Linda gaz hortumunu söyler',
      desc: 'Linda oğullarına anlatıyor: "Babanız ölmek istiyor. Hortumu buldum."',
      icDurum: 'Willy bunu duymuyor — sahnedeki o değil. Ama oyuncu olarak biliyorsun: bu söyleniyor.',
      bosluk: 'Linda hortumu bulduğu an ne hissetti? Willy\'ye söyleyebilir miydi?',
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 2,
    },
    {
      id: 'a1-boston-onces', perde: 1,
      label: 'Boston öncesi — "iş istemeye gideceğim"',
      desc: 'Bellek karışıyor. Genç Willy yolda — Boston\'a gidiyor. Ama bu sefer farklı bir yolculuk.',
      icDurum: 'Yalnızlık bahanesi. "Sadece arkadaşım." Ama biliyor — daha fazlası olacak.',
      bosluk: 'O ilk Boston yolculuğundan önce Linda\'nın yüzüne bakabildi mi?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 1,
    },
    {
      id: 'a2-yenigun', perde: 2,
      label: 'Yeni gün — sahte umut',
      desc: 'Linda kahvaltı hazırladı. Biff iş istemeye gidiyor. Willy "her şey düzelecek" hissinde.',
      icDurum: 'Bir kez daha umut. Ama altta titreyen bir şey var. Howard\'a gideceğini hatırlıyor.',
      bosluk: 'Linda gözlerinin içine baktığında — gerçek olan ne kadar yansıdı?',
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 1,
    },
    {
      id: 'a2-howard', perde: 2,
      label: 'Howard ofiste — kovulma',
      desc: 'Howard ses kayıt cihazıyla ilgileniyor. Willy maaş istiyor. Howard onu kovuyor: "Sen bittin."',
      icDurum: '"Babanı tanıyordum, bana söz verdi" — geçmişe sığınma. Ama Howard duymuyor. "İş = kimlik" çöküyor.',
      bosluk: 'Ofisten çıktığında ilk gittiği yer neresi? Sokakta yürüdü mü?',
      travmaKategorileri: ['ahlaki_yara', 'varolussal'], travmaSeviyesi: 3,
    },
    {
      id: 'a2-ben-alaska', perde: 2,
      label: 'Bellek: Ben\'in Alaska teklifi',
      desc: 'Geçmişte Ben gelmiş, "benimle Alaska\'ya gel" demişti. Linda hayır demişti.',
      icDurum: 'Bu hatıra şimdi acıtıyor. "Gitseydim — başka bir adam olurdum."',
      bosluk: 'O an Linda\'nın "kal" demesine niye uydu? Şimdi pişman mı?',
      travmaKategorileri: ['kayip'], travmaSeviyesi: 1,
    },
    {
      id: 'a2-charley-ofis', perde: 2,
      label: 'Charley\'den para isteme',
      desc: 'Charley iş teklif ediyor. Willy reddediyor — sadece para istiyor. Onuru kırılıyor.',
      icDurum: '"Sen benim tek dostumsun" — itiraf. Ama "iş alamam senden" — gurur.',
      bosluk: 'Charley\'nin ofisinden çıkarken cebindeki parayı — sayar mıydı, saymaz mıydı?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 2,
    },
    {
      id: 'a2-boston', perde: 2,
      label: 'Boston otel — Biff babayı kadınla görür',
      desc: 'Bellek. Otel odası. Kapı çalıyor. Biff geliyor. Kadın saklanamıyor. Biff her şeyi görüyor.',
      icDurum: 'O an gerçek bir an. Willy bunu unutamıyor — ne kadar bastırırsa bastırsın.',
      bosluk: 'Biff koşarak çıktıktan sonra odada, kadınla — ne söyleyebildi?',
      travmaKategorileri: ['ihanet', 'ahlaki_yara'], travmaSeviyesi: 3,
    },
    {
      id: 'a2-restoran', perde: 2,
      label: 'Frank\'s Chop House — oğullar bırakır',
      desc: 'Restoran. Biff gerçeği söylemek istiyor — "Bill Oliver beni hatırlamadı." Willy duymuyor. Happy bir kadına asılıyor. Sonunda oğullar babayı tuvalette bırakıp gidiyorlar.',
      icDurum: 'Yalnızlık. Tuvalette ayna karşısında. Boston o anda geri geliyor.',
      bosluk: 'Tuvaletten çıkıp restoran kapısından sokağa adım attığında — kim olduğunu biliyor mu?',
      travmaKategorileri: ['ihanet', 'kayip'], travmaSeviyesi: 2,
    },
    {
      id: 'a2-bahce', perde: 2,
      label: 'Bahçede tohum eker',
      desc: 'Eve dönmüş. Geceyarısı. Bahçede kazıyor — domates, havuç. Bir şey büyütmeli.',
      icDurum: '"Adam dünyada bir iz bırakmalı." Tohum onun için bir umut değil — bir teselli.',
      bosluk: 'Bahçedeyken Ben\'le konuşuyor — ne anlattı, ne sordu, ne karar verdi?',
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 2,
    },
    {
      id: 'a2-son-yuzlesme', perde: 2,
      label: 'Biff\'le son yüzleşme',
      desc: 'Biff babayı kucaklıyor — "Beni bırak baba, ben hiçbir şeyim, sen de." Ağlıyor. Willy ilk kez Biff\'in onu sevdiğini görüyor.',
      icDurum: '"He likes me — he likes me!" Yanlış anlama. Sevgiyi başarı olarak okuyor.',
      bosluk: 'Biff yataklara çekildikten sonra Willy bahçeye çıktığı an.',
      travmaKategorileri: ['ahlaki_yara', 'kayip'], travmaSeviyesi: 3,
    },
    {
      id: 'a2-son', perde: 2,
      label: 'Arabayla intihar — "elmas"',
      desc: 'Yola çıkıyor. Ben hayaleti yanında. "Yirmi bin dolar — Biff için elmas gibi parlak."',
      icDurum: 'Son hesap. Bu intihar değil — ona göre fedakarlık. Son satış.',
      bosluk: 'Arabaya binmeden önce evde son kez baktığı bir şey vardı mı?',
      travmaKategorileri: ['varolussal', 'siddet'], travmaSeviyesi: 3,
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

  // ─── EGZERSİZLER ──────────────────────────────────────────────────────────

  egzersizler: [
    {
      id: 'baseline',
      baslik: 'Baseline Kurma',
      sure: '10 dk', seviye: 'Giris', ikon: '🛤️',
      aciklama:
        "Genç Willy. Yola çıkıyor. Brooklyn arkasında. Linda hamile, çocuklar yeni doğmuş. Henüz başarısızlık yok, henüz Boston yok, henüz yorgun değil.",
      adimlar: [
        'Gözlerini kapat. Sen Brooklyn\'desin, ama yola çıkmak üzeresin.',
        'Çantanı topluyorsun. İçinde örnek ürünler var. {duyu}?',
        'Linda kapıda seni uğurluyor. Yüzü genç. Bir şey diyor sana — ne diyor?',
        'Bu Willy\'yi tut. Buraya istediğin an dönebilirsin.',
      ],
      travmaSeviyesi: 0,
    },
    {
      id: 'dogrular',
      baslik: 'Değiştirilemez Doğrular Taraması',
      sure: '15 dk', seviye: 'Temel', ikon: '🗺️',
      aciklama:
        "Willy\'nin metinden gelen sabit gerçeklerini bedenine yedir. Yorum değil — zemin.",
      adimlar: [
        'Listeyi yavaşça oku. Acele etme.',
        'Her madde için içinden bir cevap ver: "Evet, biliyorum."',
        'Sürpriz yaratan bir madde var mı? Onu daha uzun tut.',
        '"Willy bunların hepsini taşıyarak sahneye giriyor."',
      ],
      travmaSeviyesi: 0,
    },
    {
      id: 'iliski-linda',
      baslik: 'İlişki Haritası: Linda',
      sure: '20 dk', seviye: 'Orta', ikon: '🌾',
      aciklama:
        "Linda — onu yıllardır taşıyan, koruyan, gören. Willy\'nin yanılsamalarına izin veren ama gerçeği de bilen kadın. Bu ilişki sadece sevgi değil — bir komplo.",
      adimlar: [
        'İlk Linda nasıl görünüyordu — genç haliyle? {ipucu}',
        'Linda gaz hortumunu bulduğu an — sana doğrudan söyleyebilir miydi?',
        'A2\'de Linda oğullarına "babanız bir insan, dikkat edin" derken — bu seni koruyor mu, yargılıyor mu?',
        'Cenazedeki "free, free, free" — sevgi mi, kabul mu, yorgunluk mu?',
      ],
      travmaSeviyesi: 2,
    },
    {
      id: 'iliski-biff',
      baslik: 'İlişki Haritası: Biff',
      sure: '25 dk', seviye: 'Orta', ikon: '⚾',
      aciklama:
        "En büyük yara burada. Biff hem mirası, hem yansıması, hem yargılayıcısı. Boston\'dan sonra hiç aynı olmadılar — ama Willy bu farkı tam olarak göremedi.",
      adimlar: [
        'Biff küçükken — Ebbets Stadyumu, sahada zaferi. {ipucu}',
        'Boston\'dan sonra Biff\'in yüzüne ilk kez baktığın an.',
        'A2\'de Biff "ben hiçbir şeyim" derken — sevgi mi gördün, yenilgi mi?',
        '"He likes me!" — niye sevgiyi sadece bu kadar dolaylı kabul edebilirsin?',
      ],
      travmaSeviyesi: 3,
    },
    {
      id: 'kararlar-odasi',
      baslik: 'Kararlar Odası',
      sure: '30 dk', seviye: 'Ileri', ikon: '⚖️',
      aciklama:
        "Willy\'nin hayatındaki üç büyük karar anı. Sen önce kendi seçimini yap, sonra onunkiyle karşılaş.",
      kararlar: [
        {
          id: 'k-boston',
          sahne: 'Boston otel',
          kurulum: 'Otel odasındasın. Kadın yanında. Kapı çalıyor. Biff\'in sesi: "Baba!"',
          yollar: [
            { id: 'sakla', metin: 'Kadını banyoya sakla, kapıyı aç' },
            { id: 'sus', metin: 'Sus, kapıyı açma — Biff gitsin' },
            { id: 'gercegi', metin: 'Kapıyı aç, gerçeği söyle' },
          ],
          yansimaSorusu: 'Bu kararı verirken — Biff\'i mi düşündün, kendini mi, kadını mı?',
          tarihselCevap: 'Willy kadını banyoya gizlemeye çalıştı, kapıyı açtı — ama saklayamadı. Biff kadını gördü. Willy "o senin annenin değişmesi gerekiyordu, sadece bir alıcı" diye açıklamaya çalıştı. Bu yalan tutmadı.',
          farkSorusu: 'Sen "gerçeği söyle" yi seçebildin mi? Yoksa Willy\'nin saklama refleksi sende de var mı?',
        },
        {
          id: 'k-howard',
          sahne: 'Howard ofiste',
          kurulum: 'Howard ses kayıt cihazıyla oynuyor. Sen masa başında. "Howard, biraz konuşalım."',
          yollar: [
            { id: 'yalvar', metin: 'Yalvar — geçmişe sığın, "babanı tanıyordum"' },
            { id: 'kibirle', metin: 'Kibirle çık — "ben de senin gibi başarılıydım"' },
            { id: 'cik', metin: 'Sessizce çık — onuru koru' },
          ],
          yansimaSorusu: 'Bu odaya girerken kim olduğunu sanıyordun? Çıkarken kim oldun?',
          tarihselCevap: 'Willy yalvardı. Geçmişi anlattı. Howard\'ın babasıyla geçirdiği yılları anımsattı. Howard duymadı — kayıt cihazını dinlemekle meşguldü. Willy küçüldü. Sonunda "git biraz dinlen" diye kovuldu.',
          farkSorusu: 'Sen yalvarabilir miydin? Yoksa onurunu kurtarmak için çıkmayı seçer miydin?',
        },
        {
          id: 'k-son',
          sahne: 'Son gece',
          kurulum: 'Bahçede. Ben hayaleti yanında. "Yirmi bin dolar — Biff için elmas." Araba garajda.',
          yollar: [
            { id: 'arabaya', metin: 'Arabaya bin — fedakarlığı yap' },
            { id: 'eve', metin: 'Eve gir — Linda\'ya git, "yarın bakacağız" de' },
            { id: 'durup', metin: 'Bahçede dur — sabaha kadar bekle' },
          ],
          yansimaSorusu: 'Bu son seçimi yaparken — sevgiyle mi, yorgunlukla mı, yoksa yanılsamayla mı verdin?',
          tarihselCevap: 'Willy arabaya bindi. Ben\'le konuşa konuşa. "Elmas" metaforu son ana kadar onunlaydı. Bu intihar değil — onun gözünde son satıştı. Linda cenazede borcu kapattıklarını söyledi: "Bu eve borcumuz bitti. Free, free, free."',
          farkSorusu: 'Willy\'nin gözünde bu fedakarlıktı. Senin için — senin oynadığın Willy için — neydi?',
        },
      ],
      travmaSeviyesi: 2,
    },
    {
      id: 'yanilsama',
      baslik: '"Yanılsama Çözülüyor"',
      sure: '15 dk', seviye: 'Ileri', ikon: '🪞',
      aciklama:
        "Willy gerçekle çarpıştığı anlarda kırılır. Bu egzersiz onun yanılsama-gerçek geçişlerini bedenine alır.",
      adimlar: [
        'Otur. "Ben Willy Loman\'ım. İyi bir satıcıyım." cümlesini söyle. Bedeninde {duyu}?',
        'Şimdi: "Howard beni kovdu." Aynı bedensel zemini koruyabiliyor musun?',
        '"Biff beni sevmiyor mu?" — kendine yüksek sesle sor. {yansimaSorusu}',
        '"He likes me, he likes me" — bu cümleyi üç kez söyle. Her seferinde farklı.',
        'Son olarak: "Ben kimim?" — boş bir cümle. Cevap arama.',
      ],
      travmaSeviyesi: 2,
    },
    {
      id: 'cikis-mezar',
      baslik: '"Mezarda" — Çıkış',
      sure: '15 dk', seviye: 'Ileri', ikon: '🕊️',
      aciklama:
        "Modül III\'ün ön habercisi — deroling. Willy\'yi içine aldın. Ölümünü taşıdın. Şimdi onu bırakma zamanı.",
      adimlar: [
        'Otur. Ayaklarını yere bas. Willy\'nin son nefesini bedeninden çıkar.',
        '"Free, free, free" — Linda\'nın cümlesini sen söyle. Willy için — ve kendin için.',
        'Adını yüksek sesle söyle. Yaşını söyle. Bugünün tarihini söyle.',
        'Etrafına bak — odanın ışığı, sıcaklığı, kokusu. Sen şimdi buradasın.',
        'Willy\'yi bırakmadan kalkma. Su iç. Birkaç dakika öylece otur.',
      ],
      travmaSeviyesi: 0,
      tipDeroling: true,
    },
  ],
};

export default willy;