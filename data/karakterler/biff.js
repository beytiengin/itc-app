// data/karakterler/biff.js
// ITC Actor's Gym — Biff Loman karakter verisi

const biff = {
  // ─── KİMLİK ───────────────────────────────────────────────────────────────

  id: 'biff',
  ad: 'Biff Loman',
  oyun: 'Satıcının Ölümü',
  yazar: 'Arthur Miller',
  donem: '1949',
  tur: 'Trajedi',
  tip: 'ISFP',
  ozet:
    "Babanın rüyasından uyanış. Kırılma ve özgürleşme arasında sıkışmış bir adamın gerçeği arama yolculuğu.",
  etiketler: ['Trajedi', 'Yas', 'Aile', 'Kimlik'],

  // ─── BASELINE ─────────────────────────────────────────────────────────────

  baseline: {
    ad: 'Lise Yıldızı',
    aciklama:
      "17 yaşında. Lise futbol kahramanı. Üniversiteler peşinde. Babanın gözünde tanrı, kendi gözünde tanrı. Henüz Boston yok, henüz hiçbir şey yıkılmamış. Geleceğin parlak.",
  },

  // ─── KRİTİK İLİŞKİLER ─────────────────────────────────────────────────────

  iliskiler: ['Willy', 'Linda', 'Happy', 'Bernard', 'Bill Oliver', 'Boston\'daki Kadın'],

  // ─── DEĞİŞTİRİLEMEZ DOĞRULAR ──────────────────────────────────────────────

  dogrular: [
    { kategori: 'Kimlik', madde: 'Biff Loman 34 yaşında, evine geri dönmüş.' },
    { kategori: 'Kimlik', madde: 'Lise yıllarında futbol yıldızıydı, üniversite teklifleri vardı.' },
    { kategori: 'Geçmiş', madde: 'Matematikten kaldı, üniversiteye gidemedi.' },
    { kategori: 'Geçmiş', madde: "Boston'da babasını başka bir kadınla gördü — 17 yaşındaydı." },
    { kategori: 'Geçmiş', madde: 'O günden sonra hayatı yön değiştirdi.' },
    { kategori: 'Geçmiş', madde: '15-20 yıl batı eyaletlerinde çiftliklerde çalıştı.' },
    { kategori: 'Geçmiş', madde: 'Hapis girdi çıktı.' },
    { kategori: 'Geçmiş', madde: 'Hırsızlık yapma alışkanlığı var.' },
    { kategori: 'Eylem', madde: "Bill Oliver'dan iş istemeye gitti, kalemini çaldı, kaçtı." },
    { kategori: 'Eylem', madde: 'Restoranda babasını tuvalette bırakıp kaçtı.' },
    { kategori: 'Eylem', madde: 'Babasıyla son sahnede yüzleşti — "Ben hiçbir şeyim baba, sen de."' },
    { kategori: 'Son', madde: 'Cenazede Willy\'nin "yanlış rüya gördüğünü" anladı.' },
  ],

  // ─── 14 SAHNE ─────────────────────────────────────────────────────────────

  sahneler: [
    {
      id: 'a1-eve-donus', perde: 1,
      label: 'Eve dönüş — "ne yapacağım?"',
      desc: 'Happy ile çocukluk odasında. Konuşuyorlar. Biff: "Bilmiyorum ne istediğimi."',
      icDurum: 'Yorgun. Yıkık. Ama bir umut hâlâ var. "Belki bu sefer..."',
      bosluk: 'Eve geldikten sonra ilk gece — yatakta uyuyabildi mi?',
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: 'a1-cocukluk', perde: 1,
      label: 'Bellek: Babanın gözünde kahraman',
      desc: 'Willy\'nin belleği. Biff genç, Happy etrafta, Bernard kenarda. Willy: "Sen Adonis\'sin."',
      icDurum: 'Bu hatıra Biff\'in için tatlı ve acı. O zamanlar gerçekten inanıyordu.',
      bosluk: 'O çocuk ile şimdiki Biff arasındaki köprü ne zaman koptu?',
      travmaKategorileri: ['cocukluk'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: 'a1-ebbets', perde: 1,
      label: 'Ebbets Stadyumu — futbol zaferi',
      desc: 'Bellek. Stadyum. Biff şampiyon. Tüm gözler ona. Willy yanında — gururlu.',
      icDurum: 'En parlak an. Biff "ben özelim" hissini en çok burada yaşadı.',
      bosluk: 'O maçtan sonra eve gittiklerinde Willy ona ne söyledi?',
      travmaKategorileri: [], travmaSeviyesi: 0,
      kritikMi: false,
    },
    {
      id: 'a1-matematik', perde: 1,
      label: 'Bellek: Matematikten kalma',
      desc: 'Bernard uyarıyor: "Biff matematikten kalacak." Willy önemsemiyor: "Adam Biff!"',
      icDurum: 'Tehlike işareti — ama hem Biff hem baba duymak istemiyor.',
      bosluk: 'O sınava girdi mi? Çalıştı mı? Niye başaramadı?',
      travmaKategorileri: [], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: 'a1-bernard-uyari', perde: 1,
      label: 'Bernard\'ı küçümseme + uyarı',
      desc: 'Biff Bernard\'a "anemic" diyor. Bernard: "Boston\'a gitti baban. Biff de gidiyor matematik için."',
      icDurum: 'Bernard\'ın söylediği gerçek — ama henüz Biff Boston\'a gitmedi. Bu sahne sonrası gidecek.',
      bosluk: 'Bernard\'ın "Boston" demesini duyduğunda — niye gitmek istedi?',
      travmaKategorileri: [], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: 'a1-boston', perde: 1,
      label: 'Boston otel — babayı kadınla görür',
      desc: 'Otel kapısı. Biff babayı görmek için geldi — matematikten yardım için. Kapıyı açtırıyor. Kadın çıkıyor.',
      icDurum: 'Kahraman imgesi yıkılıyor. Bir saniye içinde her şey değişiyor. Babanın yalanları, "Adonis"i — hepsi.',
      bosluk: 'Otel kapısından sokağa çıktığında — nereye gitti? Trene mi, dışarıya mı?',
      travmaKategorileri: ['ihanet', 'ahlaki_yara'], travmaSeviyesi: 3,
      kritikMi: true,
    },
    {
      id: 'a1-linda-uyari', perde: 1,
      label: 'Linda\'nın uyarısı',
      desc: 'Linda oğullarına: "Babanız bir insan. Yıkılıyor. Ona dikkat edin." Biff dinler.',
      icDurum: 'Annenin yüzünü ilk kez bu kadar net görüyor. Linda\'nın taşıdığı yükü hissediyor.',
      bosluk: 'Linda gittikten sonra Happy ile ne konuştu?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: 'a2-bill-oliver', perde: 2,
      label: 'Bill Oliver\'dan iş — kalem çalma',
      desc: 'Bill Oliver\'ın ofisinde. Bill onu hatırlamıyor bile. Biff masada bekliyor. Sonra masadan kalemi alıyor — kaçıyor.',
      icDurum: 'Bir an netlik: "Bill Oliver beni hiç tanımadı. Ben hiç onun arkadaşı olmadım." Hayat boyu yalan.',
      bosluk: 'Kalemi cebine koyduğu an — niye? Kasten mi, refleks mi?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: 'a2-hapishane', perde: 2,
      label: 'Bellek: Hapis (kısa atıf)',
      desc: 'Konuşmada geçiyor: Biff hapis girmişti. Hırsızlıktan. Willy duymak istemiyor.',
      icDurum: 'Bu Biff\'in en sakladığı şey. Babanın gözünde "Adonis" hâlâ yaşamak için.',
      bosluk: 'Hapisten çıktığında nereye gitti? Eve dönmek aklına geldi mi?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: 'a2-restoran-once', perde: 2,
      label: 'Restoranda — gerçeği söyleme niyeti',
      desc: 'Frank\'s Chop House. Biff babayı bekliyor. "Bu sefer ona söyleyeceğim. Bill Oliver beni tanımadı. Ben hiçbir şey değilim."',
      icDurum: 'Karar verdi. Bu kez gerçek konuşacak. Babasının hayalini kırmaya hazır.',
      bosluk: 'Babası gelene kadar masada kaç kez kararını sorguladı?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: 'a2-restoran', perde: 2,
      label: 'Restoran — babayı tuvalette bırakır',
      desc: 'Willy duymak istemiyor. Biff anlatamıyor. Willy zihni kayıyor — Boston\'a, eski belleğe. Happy bir kadına asılıyor. Biff dayanamıyor — Willy\'yi tuvalette bırakıp gidiyor.',
      icDurum: 'Pes. "Ona söyleyemiyorum. Beni dinlemiyor." Sokağa çıkarken kaçma duygusu.',
      bosluk: 'Restoranı terk ettikten sonra eve mi gitti, başka yere mi?',
      travmaKategorileri: ['ihanet', 'ahlaki_yara'], travmaSeviyesi: 2,
      kritikMi: true,
    },
    {
      id: 'a2-linda-yuzleşme', perde: 2,
      label: 'Linda ile yüzleşme',
      desc: 'Eve döndü. Linda öfkeli: "Babanı bıraktın orada. Onu sevmiyor musun?" Biff: "Seviyorum anne. Ama onu kurtaramam."',
      icDurum: 'Annenin öfkesi haklı. Ama Biff de haklı. İki gerçek çarpışıyor.',
      bosluk: 'Linda\'yla bu konuşmadan sonra evde dolaştığı saatler — neyi düşündü?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 2,
      kritikMi: false,
    },
    {
      id: 'a2-son-yuzleşme', perde: 2,
      label: 'Babayla son yüzleşme — "Ben hiçbir şeyim"',
      desc: 'Biff babayı kucaklıyor. Ağlıyor: "Beni bırak baba. Ben dime a dozen\'ım. Sen de. Bu kadar."',
      icDurum: 'Hayat boyu söyleyemediği şey çıkıyor. Hem yıkım hem özgürlük. Babasını ilk kez bu kadar yakından gördüğü an.',
      bosluk: 'Ağladıktan sonra yataktan kalkmadan önce — ne hissetti?',
      travmaKategorileri: ['ahlaki_yara', 'kayip'], travmaSeviyesi: 3,
      kritikMi: true,
    },
    {
      id: 'requiem', perde: 5,
      label: 'Requiem — "yanlış rüya gördü"',
      desc: 'Mezarlık. Cenaze bitti. Biff: "Babam yanlış rüyayı gördü. Hayatı boyunca." Happy itiraz ediyor. Biff: "Ben kim olduğumu biliyorum şimdi."',
      icDurum: 'Bir özgürleşme — ama acıyla. Babanın hayatı bir yanlış üzerine kurulmuştu. Biff bunu görebiliyor şimdi.',
      bosluk: 'Mezar başından ayrıldıktan sonra — nereye gidecek?',
      travmaKategorileri: ['kayip', 'varolussal'], travmaSeviyesi: 2,
      kritikMi: true,
    },
  ],

  // ─── BOŞLUKLAR ────────────────────────────────────────────────────────────

  bosluklar: [
    {
      id: 'b-pre-1',
      tip: 'pre',
      konum: 'Pre-senaryo (çocukluk)',
      baslik: 'Babanın Tanrı Olduğu Zamanlar',
      kisaAciklama: 'Çok küçük yaşlardaki Biff — Willy henüz tanrıydı.',
      uzunAciklama:
        '5, 6, 7 yaşlarındaki Biff. Willy yola çıkarken onu sırtına alıyor. "Sen benim Adonis\'imsin." Bu yaşlarda Biff babasını tanrı olarak görüyor. Bu bakış Boston\'a kadar değişmedi.',
      sorular: [
        'Willy yoldan döndüğünde Biff onu nasıl karşılardı?',
        'Babasının çantasını açıp ne aradığını hayal et.',
        'Babasıyla en sevdiği oyun neydi?',
        '"Sen Adonis\'sin" cümlesini ilk kez hangi yaşta duydu?',
      ],
      sure: '12 dk',
    },
    {
      id: 'b-pre-2',
      tip: 'pre',
      konum: 'Pre-senaryo (lise)',
      baslik: 'Yıldız Olmak',
      kisaAciklama: 'Lise yılları — futbol kahramanı, üniversiteler peşinde.',
      uzunAciklama:
        '15-17 yaşlarındaki Biff. Liseyi bitiriyor. Üniversite teklifleri var. Baba gururlu. Ama matematikten geri kalıyor. Bu boşluk — yıldız olmanın getirdiği baskı, kibir, körlük.',
      sorular: [
        'Maç günleri sahaya çıkmadan önce ne hissediyordu?',
        'Bernard\'a "ders çalış" derken — gerçekten kibirlenmek mi, yoksa başka bir şey mi?',
        'Üniversite mektupları geldiğinde aile nasıl reaksiyon verdi?',
        'Matematikten kalma korkusu içinde bir an oldu mu, yoksa hiç mi sorun olmadı?',
      ],
      sure: '12 dk',
    },
    {
      id: 'b-pre-3',
      tip: 'ara',
      konum: 'Boston öncesi',
      baslik: 'Sürpriz Yolculuk',
      kisaAciklama: 'Babamı görmeye gideceğim — matematik yardımı için.',
      uzunAciklama:
        'Bernard ona "Boston\'a git, babadan yardım iste" dedi. Biff bu kararı verdi. Trene bindi. Boston\'a gitti. Bu yolculukta — masum, umutlu, henüz yıkılmamış.',
      sorular: [
        'Trene bindiği an ne hissediyordu?',
        'Babasını sürpriz yapacağını planlamış mıydı?',
        'Yol boyunca aklında hangi konuşma vardı?',
        'Otel kapısına yaklaştığında bir an duraksadı mı?',
      ],
      sure: '12 dk',
    },
    {
      id: 'b-1',
      tip: 'ic',
      konum: 'Boston otel kapısı',
      baslik: 'Kapıyı Çaldı — İçeride Bir Ses',
      kisaAciklama: 'Kapıyı çaldığında geçen birkaç dakika.',
      uzunAciklama:
        'Otel odasının kapısına vardı. Çaldı. İçeriden sesler — bir kadın sesi, bir erkek sesi (babası). Ne anlamıştı? Tekrar çaldı. Kapı açıldı. Bu birkaç dakika — kahramanın ölümünün dakikaları.',
      sorular: [
        'Kapıyı çalmadan önce nasıl bir yüz takınmıştı?',
        'İçeriden gelen kadın sesini ilk duyduğunda — ne anladı?',
        'Tekrar çalmaya nasıl karar verdi?',
        'Kapı açıldığında babasının yüzünü görmek nasıldı?',
        'Kadını gördüğü an bedeninde ne oldu?',
      ],
      sure: '20 dk',
      travmaSeviyesi: 3,
    },
    {
      id: 'b-2',
      tip: 'ara',
      konum: 'Boston sonrası',
      baslik: 'Treni Dönüşü',
      kisaAciklama: 'Boston\'dan eve dönüş — neyi göremedim, ne gördüm?',
      uzunAciklama:
        'Otel koridorundan sokağa çıktı. Sokakta yürüdü. Trene bindi. Eve döndü. Bu yolculukta bir oğul artık aynı oğul değildi.',
      sorular: [
        'Otelin sokağına çıktığında ilk düşüncesi neydi?',
        'Bir köşede oturup ağlamadı mı?',
        'Trende pencereden ne gördü?',
        'Eve geldiğinde annesinin yüzüne bakabildi mi?',
        'O gece yatakta kaç saat uyumadı?',
      ],
      sure: '15 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-3',
      tip: 'ara',
      konum: '17 → 34 yaş',
      baslik: '15-20 Yıl Batı Eyaletleri',
      kisaAciklama: 'Hayat boyu süren kaçış — bu kim oldu?',
      uzunAciklama:
        '17 yaşında Boston\'dan çıktı. 34 yaşında eve dönüyor. Aradaki 15-20 yıl — çiftlikler, hapis, kadınlar, hırsızlıklar. Bu boşluk en büyüğü. Bu zamanda Biff kim oldu?',
      sorular: [
        'İlk gittiği yer neresiydi? Niye orası?',
        'En uzun çalıştığı çiftlikte hangi anılar var?',
        'Hapise ilk girdiği gün ne hissetti?',
        'Bir kadına sevgi duyduğu bir an oldu mu?',
        'Eve dönmeyi ilk kez ne zaman düşündü?',
        'Bu yıllarda Willy\'yi en çok hangi an hatırladı?',
      ],
      sure: '20 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-4',
      tip: 'ara',
      konum: 'Eve dönüş öncesi',
      baslik: 'Bu Kez Neden Geldim?',
      kisaAciklama: 'Eve dönüş kararı — niye şimdi?',
      uzunAciklama:
        'Biff geldi. Ama niye? Ne arıyor? Eski bir umut mu, yeni bir gerçek mi? Trene binerken kararı vermişti — ama nasıl?',
      sorular: [
        'Bu yolculuk önceki dönüşlerinden ne farklı?',
        'Trene binerken cüzdanında ne kadar para vardı?',
        'Kapıdan girerken kimi en çok özlüyordu — Linda\'yı, Willy\'yi, Happy\'yi?',
        'Eve girdiği an evdeki kokuyu hatırladı mı?',
      ],
      sure: '12 dk',
    },
    {
      id: 'b-5',
      tip: 'ic',
      konum: 'Bill Oliver ofisi',
      baslik: 'Kalemi Çaldığı An — Niye?',
      kisaAciklama: 'Bill Oliver onu hatırlamadı. Biff masada kalemi gördü.',
      uzunAciklama:
        'Bill Oliver bürosundan çıktı. Biff masada bekliyordu. Bir an. Sonra kalemi cebine koydu. Sonra koştu. Bu hareketin altında ne vardı?',
      sorular: [
        'Bill Oliver içeri girdiğinde ona "selam" diyebildi mi?',
        'Bill onu hatırlamadığını söylediği an bedeni ne yaptı?',
        'Kalemi gördüğünde — niye o, niye başka bir şey değil?',
        'Cebine koyarken bilinçli miydi?',
        'Sokağa çıktığında — kalemi hala cebinde olduğunu nasıl hissetti?',
      ],
      sure: '15 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-6',
      tip: 'ic',
      konum: 'Restoran kapı önü',
      baslik: 'Babayı Bırakıp Kaçma Anı',
      kisaAciklama: 'Tuvaletten çıkıp restoranı terk ettiği dakikalar.',
      uzunAciklama:
        'Willy tuvalette. Biff masada. Happy bir kadına asılıyor. Biff dayanamıyor — kalkıyor, çıkıyor. Kapıdan dışarı adım attığı an — bu bir karar mı, kaçış mı?',
      sorular: [
        'Tuvaletten çıkma kararını hangi an verdi?',
        'Happy\'ye bir şey söyledi mi, sessizce mi çıktı?',
        'Restoranın kapısına vardığında bir saniye duraksadı mı?',
        'Sokağa çıktığında ilk yöneldiği yön neredeydi?',
      ],
      sure: '12 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-7',
      tip: 'ara',
      konum: 'Eve dönüş gecesi',
      baslik: 'Linda "Git" Dediği Saatler',
      kisaAciklama: 'Linda\'nın öfkesinden son yüzleşmeye kadar saatler.',
      uzunAciklama:
        'Linda "babanı bıraktın" diye azarladı. Biff dışarı çıkmadı — ama yatağına da gitmedi. O saatler — gece yarısı civarı — son yüzleşmeye giden zaman. Ne yapıyordu?',
      sorular: [
        'Linda gittikten sonra ilk hareket — oturmak mı, ayağa kalkmak mı?',
        'Babasını sevdiğine inanıyor muydu o anlarda?',
        'Söyleyeceği şeyleri prova etti mi?',
        'Babasının bahçeye çıktığını duydu mu?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-8',
      tip: 'ara',
      konum: 'Son yüzleşme sonrası',
      baslik: 'Ağladıktan Sonra — Özgürlük mü, Yenilgi mi?',
      kisaAciklama: '"Ben hiçbir şeyim" dedikten sonra yatağa giderken.',
      uzunAciklama:
        'Babasını kucakladı, ağladı, "ben dime a dozen\'ım, sen de" dedi. Sonra yatağa gitti. O kısa yolda — odadan odasına — ne hissetti? Bir yük indi mi, yoksa daha ağır bir yük mü oluştu?',
      sorular: [
        'Yatağa giderken bedeninde ne hafif, ne ağır oldu?',
        'Babasının yüzüne son baktığında ne gördü?',
        'O gece uyudu mu? Uyuduysa ne gördü rüyada?',
        'Sabah uyandığında babasının öldüğünü öğrenmek nasıl bir şeydi?',
      ],
      sure: '15 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-post',
      tip: 'post',
      konum: 'Post-senaryo',
      baslik: 'Cenazeden Sonra — Nereye?',
      kisaAciklama: 'Mezarlıktan sonra — batıya geri mi, başka bir hayata mı?',
      uzunAciklama:
        'Cenaze bitti. Linda mezarda kaldı. Happy "babasının rüyasını" sürdüreceğini söyledi. Biff farklı bir yola çıktı. Nereye? Bu boşluk Biff\'in değil — oyuncunun. Biff\'i bırakma anı.',
      sorular: [
        'Biff\'in son cümlesi "I know who I am now" — sen bu cümleyi söyleyebildin mi?',
        'Biff\'i içine alırken en zor olan duygu hangisiydi?',
        'Boston sahnesini taşımak sana ne yaptı?',
        'Babasıyla son sahneyi oynarken kendi babanı düşündün mü?',
        'Şimdi Biff\'i bırakırken — onun sende bıraktığı şey ne?',
      ],
      sure: '15 dk',
      tipDeroling: true,
    },
  ],

  // ─── ZİHİNSEL ANTRENMANLAR — 6 EGZERSİZ, ITC FORMATI ──────────────────────

  antrenmanlar: [
  
    // ==========================================================================
    //  EGZERSİZ 1 — Eve Dönüş, 34 Yaş Bilinmezlik
    // ==========================================================================
    {
      id: 'eve-donus',
      no: 1,
      baslik: 'Eve Dönüş — 34 Yaş Bilinmezlik',
      altbaslik: 'Hayatımı bir araya getiremedim',
      sure: '20-25 dk',
      seviye: 'Temel',
      bagliSahne: 'a1',
      travmaKategorileri: ['varolussal', 'cocukluk'],
      travmaSeviyesi: 2,
  
      girisMetni: 'Bu egzersizde Biff\'in Texas\'tan eve geri döndüğü âna gideceğiz. 34 yaşındasın. Kuzey ve Batı\'da çiftliklerde çalıştın, hapse bile girdin bir hırsızlıktan, hiçbir şey "tutmadı". Şimdi annenin yanına geldin. Babanı görüyorsun — yaşlı, ufalmış, tutarsız. Ve sen kim olduğunu bilmiyorsun.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Biff şu an nerede? Brooklyn, çocukluk evinin yatak odasında. Happy yan yatakta — kardeşin. Mekan tanıdık ama yabancı. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Sen Texas\'ta 28 dolarlık bir maaşla çalışıyordun. Şimdi bu odadasın — eski oyuncak, eski poster, eski yatak. Bu odanın sana yaptığı şey ne? Bedenin nasıl tepki veriyor — daralma mı, eski bir his mi, kaçma isteği mi?',
          soru: 'Oda ne yapıyor?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. 34 yaşındaki Biff — beden olarak nasıl? Gençken futbol kahramanıydı. Şimdi ne kaldı o bedenden? Postürün dik mi, çökmüş mü, ortada mı? Sen tarif etme — dene.',
          soru: 'Postür ne diyor?',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Happy sana soruyor: "Ne istiyorsun, Biff? Hayatından ne istiyorsun?" Sen ona şöyle diyorsun: "I don\'t know what I want." (Ne istediğimi bilmiyorum.) Bu cümle bedeninde nereden çıktı? Yorgunluk mu, dürüstlük mu, korku mu?',
          soru: 'Cümle nereden çıktı?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Şu an gözünü kapatınca ne görüyorsun? Texas\'taki açık alanlar mı, bu küçük odanın duvarları mı, babanın yüzü mü, kendi gençlik resmin mi?',
            isitsel:   'Bu evde duyduğun sesler ne? Aşağıdan babanın mırıltısı mı, annenin sessiz adımları mı, sokaktan trafik mi? İçinde duyduğun ses ne diyor?',
            kinestetik:'Bu yatak çok küçük 34 yaşında bir adam için. Bedenin bu eski boyutta nasıl duruyor? Sıkışmış mı, geriye gitmiş mi, çocuklaşmış mı?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Biff olarak içinden geçir: "I\'ve always made a point of not wasting my life, and every time I come back here I know that all I\'ve done is to waste my life." (Hayatımı israf etmemeye çalışıyordum, ama her buraya döndüğümde sadece israf ettiğimi anlıyorum.) Bu bir kabul mu, bir kendine ihanet mi, bir uyanış mı?',
          soru: 'Cümlenin altı',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Sabah olacak. Babanla yüzleşmen gerekecek. Bedeninde ne hazırlanıyor? Kavga mı, kaçma mı, gerçeği söyleme mi?',
          soru: 'Beden ne hazırlıyor?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Buradasın. Biff\'in çocukluk odası orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 2 — Bill Oliver'ı Beklerken
    // ==========================================================================
    {
      id: 'oliver-beklerken',
      no: 2,
      baslik: 'Bill Oliver\'ı Beklerken',
      altbaslik: 'Geçmişten çalmak — kalemi almak',
      sure: '20-25 dk',
      seviye: 'Orta',
      bagliSahne: 'a2',
      travmaKategorileri: ['ahlaki_yara', 'cocukluk'],
      travmaSeviyesi: 2,
  
      girisMetni: 'Bu egzersizde Biff\'in Bill Oliver\'ın ofisinde beklediği ve sonra kalemini çaldığı âna gideceğiz. Babanın umuduyla buraya geldin: Bill Oliver para verecekti, bir iş kuracaktın. Ama şimdi 6 saattir bekliyorsun. Bill Oliver seni hatırlamadı bile. Sen onun için çalışmamıştın bile — sadece bir tezgâhtardın. Ve bu fark ediş anında bir şey daha yaptın: Onun kalemini alıp çıktın.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Biff şu an nerede? Bill Oliver\'ın ofisinin bekleme odası. Saatlerdir oturuyorsun. Etraf modern, yabancı. Sekreterler geliyor gidiyor. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Babana büyük bir hayalle anlattın bunu — Bill Oliver beni hatırlar, bana yatırım yapar. Şimdi bekliyorsun ve içinde bir şüphe büyüyor. Bu şüphe bedeninin neresine yerleşti?',
          soru: 'Şüphe nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Bekleme odasında saatlerce bekleyen bir adamın postürü — bu eğilmiş mi, sıkışmış mı, gergin mi? Bedenin neyi tutmaya çalışıyor — kendine olan inancı mı, yoksa çoktan kaybetmiş bir oyunu mu?',
          soru: 'Bekleyişin postürü',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Sekreter sonunda diyor: "Bay Oliver sizi 5 dakika için kabul edebilecek." Sen Bill Oliver\'ın yanına giriyorsun. O sana boş bir yüzle bakıyor: "I\'ve seen you somewhere before…" (Seni bir yerden gördüm…) Bu cümle senin neresine değdi?',
          soru: 'Cümle nereye değdi?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Bill Oliver\'ın yüzünde ne görüyorsun? Tanımadığı birinin yüzü. Ama sen onu bir an Willy gibi görüyor musun, kendini Willy gibi mi hissediyorsun? Bir görüntü kayması var mı?',
            isitsel:   'Onun sesinde nasıl bir ton var? Yapay nezaket mi, üstünkörü ilgi mi, mesafe mi? Sen ona ne diyorsun, ses tonun nasıl?',
            kinestetik:'Onun masasının üzerinde altın bir kalem var — pahalı, parlak. Senin elinin onu almaya yönelmesi anı. Bu hareket nereden geldi? Düşüncesizce mi, kasıtlı mı, kendine ihanet mi?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Kalemi aldın, ofisten çıktın. Sokağa indin. Şimdi koşuyorsun. Bedeninde ne var? Korku mu, utanç mı, garip bir özgürlük mü? Babanın "büyük adam" anlatısının çatladığı an mı bu?',
          soru: 'Şu an ne var?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şu cümleyi Biff olarak içinden geçir: "I stopped in the middle of that office building, do you hear this? I stopped in the middle of that building and I saw — the sky." (O ofis binasının ortasında durdum, duyuyor musun? Durdum ve gördüm — gökyüzünü.) Bu bir uyanış mı, bir özgürleşme mi, bir kayıp mı?',
          soru: 'Cümlenin altında ne var?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Buradasın. Biff\'in dönüşüm anı orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 3 — Boston Anısı, Babasını Bulmak
    // ==========================================================================
    {
      id: 'boston-baba',
      no: 3,
      baslik: 'Boston Anısı — Babasını Bulmak',
      altbaslik: 'Dünyanın çökmesi',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: 'gecmis',
      travmaKategorileri: ['ihanet', 'cocukluk'],
      travmaSeviyesi: 3,
  
      girisMetni: 'Bu egzersizde Biff\'in 17 yaşında Boston\'a gidip babasını otelde başka bir kadınla bulduğu âna gideceğiz. O ana kadar Willy senin için Tanrı\'ydı — büyük adam, başarılı satıcı, hayranlık duyduğun baba. Matematikten kaldığını söylemeye gelmiştin. Babam bana yardım eder dedin. Kapıyı çaldın. Açıldı. Ve dünya çöktü.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz çocukluk-sonu bir an a gidiyor. Hazır olduğunda devam et. Acele etme.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. 17 yaşındasın. Boston\'da bir otelin koridorundasın. Babanın oda numarasını biliyorsun. Çantanda bir umut var — o sana yardım edecek. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Kapıya yaklaşıyorsun. İçinde matematikten kaldığın için çocukça bir korku ama daha çok bir güven var — babam ne yapacağını bilir. Bu güveni bedeninde nerede taşıyorsun?',
          soru: 'Güven nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. 17 yaşındasın, futbol kahramanısın, şehirde popülersin. Kapıya vurmadan önceki Biff\'in postürü ne? Dik mi, gururlu mu, çocukça mı? Bedenin söylesin.',
          soru: 'Postür ne?',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Kapıyı çaldın. Açıldı. Baban orada — bornoz içinde. İçeride bir kadın var. Görüyorsun. Anlıyorsun. Bu görme anı bedeninde nasıl? Saniyede bir şey kırılıyor — neresinden?',
          soru: 'Kırılma nerede?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Babanın yüzünü gördün. Şaşkın, panik içinde. Kadının yüzünü gördün. O an gözünde ne var? Bu görüntü hayatın boyunca silinmedi — şimdi hangisi en net?',
            isitsel:   'Baban "Biff! Biff, this is Mrs Francis…" diyor. Açıklamaya çalışıyor. Ses tonunda ne var? Onun bu sesi şimdi senin içinde nasıl yankılıyor?',
            kinestetik:'Bedenin neresinde "kaç" var, neresinde "dur" var? Ayakların geri çekiliyor mu, ileri mi gidiyor? Eline ne yapıyor — yumruk mu, gevşek mi, donmuş mu?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Annenin çoraplarını görüyorsun yatakta. Bunu şu an söyledin: "You — you gave her Mama\'s stockings!" (Annemin çoraplarını ona verdin!) Bu cümle nereden çıktı bedeninden? Çığlık mı, çocuk sesi mi, lanetlenme mi?',
          soru: 'Cümle nereden çıktı?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Koridordan kaçıyorsun. Baban arkanda "Biff!" diye sesleniyor. Sen duramıyorsun. Bedeninin ne yaptığını sen kontrol etmiyorsun artık — koşuyor. Şu an, yıllar sonra, bu kaçış sende nerede yaşıyor hâlâ?',
          soru: 'Kaçış nerede yaşıyor?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz çok derin bir çocukluk-sonu yara yerine götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Yaşıyorsun, buradasın. Etrafındaki üç şeyi say. Boston orada — sen burada, kendi bedeninde. Su iç. Birkaç dakika öylece otur. Bugün bitince mutlaka fiziksel bir aktivite yap.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 4 — Restoran, "He's a Fake!"
    // ==========================================================================
    {
      id: 'restoran-fake',
      no: 4,
      baslik: 'Restoran — "He\'s a Fake!"',
      altbaslik: 'Söyleyemediğin gerçek',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: 'a2',
      travmaKategorileri: ['ihanet', 'ahlaki_yara'],
      travmaSeviyesi: 3,
  
      girisMetni: 'Bu egzersizde Biff\'in restoranda babasıyla yüzleştiği âna gideceğiz. Bill Oliver başarısız oldu. Babanın umut anlatısı çöktü. Sen gerçeği söylemeye geldin: "Babamız sahte bir hikayede yaşıyor. Ben hiç onun anlattığı kişi olmadım." Ama Willy duymuyor. Senin yerine Boston\'a gidiyor zihninde. Sen bir cümleyi kuramıyorsun — ama cümle her yerinde.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz çatlama eşiğine götürüyor. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Biff şu an nerede? Frank\'in Chop House — restoran. Happy yanında, ama mesafeli. Kız garsonlar geldi, çıktı. Babanın masaya gelmesini bekliyorsun. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'İçinde iki şey var: Babana gerçeği söylemek istemek ve onu kırmamaya çalışmak. Bu ikisi bedeninin neresinde çatışıyor?',
          soru: 'İkisi nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Babanı görmek üzeresin. Aynı odada, aynı masada olacaksınız. Bedenin nasıl bir hazırlık veriyor — saldırı mı, savunma mı, çekilme mi?',
          soru: 'Hazırlık ne?',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Baban geliyor. Yüzünde umut var — Bill Oliver ne dedi diye soruyor. Sen "Pop, ben hiçbir zaman..." diye başlıyorsun ama o duymuyor. Boston\'a gidiyor. Bu duymama bedeninde ne yapıyor?',
          soru: 'Onun duymaması ne?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Babanın yüzü iki yerde aynı anda — şu anki yaşlı, kafası karışmış yüz ve hatıralarındaki Boston\'daki yüz. Hangi yüz bedeninde daha güçlü?',
            isitsel:   'Restoranın gürültüsü — masa konuşmaları, müzik. Ama içinde Boston\'un sessizliği var. Hangi ses baskın? "Mama\'s stockings" sesi mi geri geldi?',
            kinestetik:'Sen şimdi bedeninde bir cümleyi tutmaya çalışıyorsun — "He\'s a fake!" — ama söyleyemiyorsun. Bu cümle bedeninin neresinde sıkışmış?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Biff olarak içinden geçir — sessizce, çünkü sen onu sesli söyleyemedin: "He\'s a fake! He\'s a phony little fake!" (O sahte! O sahte küçük bir adam!) Sen bu cümleyi babana söyleyemedin — sadece kız garsonlara çığlık olarak geldi. Şimdi bu cümle bedeninde nerede?',
          soru: 'Cümle nerede sıkışmış?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Sen restoran masasından kalktın, çıktın. Babanı orada bıraktın. Bu terketme bedenine ne yapıyor? Suçluluk mu, rahatlama mı, daha derin bir şey mi?',
          soru: 'Terketme nerede?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz çok zor bir an a götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Etrafındaki üç şeyi say. Restoran orada — sen burada, kendi bedeninde. Su iç. Birkaç dakika öylece otur. Bugün bitince fiziksel bir aktivite yap.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 5 — Babasıyla Son Yüzleşme
    // ==========================================================================
    {
      id: 'baba-son-yuzlesme',
      no: 5,
      baslik: 'Babasıyla Son Yüzleşme',
      altbaslik: '"I am a dime a dozen"',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: 'a2-son',
      travmaKategorileri: ['varolussal', 'ahlaki_yara'],
      travmaSeviyesi: 3,
  
      girisMetni: 'Bu egzersizde Biff\'in babasıyla son büyük yüzleşmeye girdiği âna gideceğiz. Ev. Gece. Annenin orada. Happy yanında. Ve sen babana gerçeği söylemek üzeresin — son şansın. Söyleyebilecek misin? Ya da babana ihanet mi edeceksin gerçeği saklayarak? Bu sahnede sen söyleyeceksin. Sonra ağlayacaksın. Çünkü gerçeği söylemek babanı kırmak değil — onu serbest bırakmak.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz büyük bir kırılma anına götürüyor. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Biff şu an nerede? Çocukluk evi, mutfak, gece. Annenin orada. Happy köşede. Babanı arıyorsun. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Sen babana bir şey söyleyeceksin: "Ben senin anlattığın kişi değilim." Bu cümle haftalardır içinde, ama söyleyemedin. Bu kez söyleyeceksin. Bu kararlılık bedeninde nerede?',
          soru: 'Kararlılık nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Bu, gerçeği söylemeye gelmiş Biff\'in postürü. Eski kahramanlık postürü değil. Eski bekleyiş postürü değil. Yeni bir şey. Bedenin söylesin.',
          soru: 'Yeni postür',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Baban karşında. Sen başlıyorsun: "Pop, ben sıradanım. Ben senin anlattığın gibi büyük bir adam değilim." Baban "Sen benim oğlumsun!" diye karşı çıkıyor. Bu inkar bedeninde ne yapıyor?',
          soru: 'Onun inkârı nerede?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Babanın yüzü — şu an. Yıllar boyunca senden bir şeyler bekledi. Şu an o yüzde ne görüyorsun? Direnme mi, anlama mı, kayıp mı?',
            isitsel:   'Babanın sesi nasıl şimdi? Yüksek mi, kırık mı, savunmacı mı? Onun "Sen benim oğlumsun!" cümlesi sana ne yapıyor?',
            kinestetik:'Sen babana doğru mu eğiliyor, geri mi çekiliyorsun? Eline ne yapıyor — ona dokunmaya hazırlanıyor mu, yumruğa dönüşüyor mu?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Sen ona sarılıyor, ağlıyorsun. Şu cümleyi Biff olarak içinden geçir: "Pop! I am a dime a dozen, and so are you!" (Pop! Ben on para etmem — sen de etmezsin!) Bu cümle bir saldırı mı, bir özgürleşme mi, bir sevgi mi?',
          soru: 'Cümlenin altında ne var?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Babana şöyle diyorsun: "Will you take that phony dream and burn it before something happens?" (O sahte hayali al ve yak — bir şey olmadan?) Sonra ağlıyorsun. Bedenin ağlıyor — ne için? Babası için mi, kendi için mi, ikisi için mi?',
          soru: 'Ağlamak ne için?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz büyük bir gerçekleşme yerine götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Etrafındaki üç şeyi say. Biff\'in son sözü orada — sen burada, kendi bedeninde. Su iç. Birkaç dakika öylece otur. Bugün bitince fiziksel bir aktivite yap.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 6 — Mezarlık + Yola Çıkış
    // ==========================================================================
    {
      id: 'mezarlik-yola-cikis',
      no: 6,
      baslik: 'Mezarlık + Yola Çıkış',
      altbaslik: '"He had the wrong dreams"',
      sure: '20-25 dk',
      seviye: 'İleri',
      bagliSahne: 'requiem',
      travmaKategorileri: ['kayip', 'varolussal'],
      travmaSeviyesi: 2,
  
      girisMetni: 'Bu egzersizde Biff\'in babasının cenazesinden sonraki âna gideceğiz. Willy gitti. Hayat sigortası bile gelmeyebilir — intihar olarak değerlendirilirse. Annenin yanında duruyorsun. Happy babasının "hayalini" devam ettirmek istiyor. Sen değil. Sen şimdi başka bir yola çıkıyorsun. Çünkü babanın hayalleri yanlıştı. Senin başka bir yol bulman gerek.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Biff şu an nerede? Mezarlık. Babanın yeni mezarı önünde. Annen yanında, Happy diğer tarafta. Charley arkada. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Babanın gitmesi bedenine ne yapıyor? Yas mı, rahatlama mı, suçluluk mu, hepsi birden mi? Bu karışık his nerede oturuyor?',
          soru: 'Karışık his nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Bu mezarlıkta Biff — yeni bir adam. Geçmiş yıllarca anlamadığı şeyi şu an anlıyor. Postürü nasıl? Daha hafif mi, daha ağır mı, daha net mi?',
          soru: 'Postür nasıl?',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Charley diyor ki: "Nobody dast blame this man... A salesman is got to dream, boy." (Kimse bu adamı suçlayamaz... Satıcı hayal kurmak zorunda, evlat.) Bu sözleri duyduğunda bedenin nasıl tepki veriyor — kabul mü, ret mi, daha derin bir anlayış mı?',
          soru: 'Charley\'nin sözleri',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Babanın mezarı önünde — toprak yeni atılmış, çiçekler kuruyor. Şu an gözünde başka bir görüntü mü beliriyor? Bahçede tohum eken babanın görüntüsü? Boston otelinin koridoru?',
            isitsel:   'Etrafta sessizlik — uzaktan trafik, rüzgar, annenin nefesi. İçinde Willy\'nin sesi nasıl yankılanıyor? "Be careful on those stairs!" hâlâ duyuluyor mu?',
            kinestetik:'Bedenin yola çıkmaya hazır mı? Ayakların yerden kalkmak istiyor mu, yere kök salıyor mu? Kollarında bir şey taşınıyor mu — bir bavul, bir hediye, bir miras?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Biff olarak içinden geçir: "He had the wrong dreams. All, all, wrong." (Onun hayalleri yanlıştı. Hepsi, hepsi yanlıştı.) Bu sözler bir suçlama mı, bir kabul mü, bir özgürleşme mi?',
          soru: 'Cümlenin tonu',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Happy "Bu şehirde kalacağım, babamın hayalini devam ettireceğim" diyor. Sen "I know who I am" diyorsun (Ben kim olduğumu biliyorum). Şimdi yola çıkıyorsun — başka bir yere. Bedenin nereye gitmek istiyor? Texas\'a mı, başka bir yere mi, sadece "bilinmeyen" bir yere mi?',
          soru: 'Yola çıkış nereye?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Buradasın. Biff\'in yola çıkışı orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
  ],
};

export default biff;
