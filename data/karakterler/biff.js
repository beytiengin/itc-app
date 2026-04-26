// data/karakterler/biff.js
// ITC Actor's Gym — Biff Loman karakter verisi

const biff = {
  // ─── KİMLİK ───────────────────────────────────────────────────────────────

  id: 'biff',
  ad: 'Biff Loman',
  oyun: 'Satıcının Ölümü',
  yazar: 'Arthur Miller',
  donem: '1940\'lar',
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
    },
    {
      id: 'a1-cocukluk', perde: 1,
      label: 'Bellek: Babanın gözünde kahraman',
      desc: 'Willy\'nin belleği. Biff genç, Happy etrafta, Bernard kenarda. Willy: "Sen Adonis\'sin."',
      icDurum: 'Bu hatıra Biff\'in için tatlı ve acı. O zamanlar gerçekten inanıyordu.',
      bosluk: 'O çocuk ile şimdiki Biff arasındaki köprü ne zaman koptu?',
      travmaKategorileri: ['cocukluk'], travmaSeviyesi: 1,
    },
    {
      id: 'a1-ebbets', perde: 1,
      label: 'Ebbets Stadyumu — futbol zaferi',
      desc: 'Bellek. Stadyum. Biff şampiyon. Tüm gözler ona. Willy yanında — gururlu.',
      icDurum: 'En parlak an. Biff "ben özelim" hissini en çok burada yaşadı.',
      bosluk: 'O maçtan sonra eve gittiklerinde Willy ona ne söyledi?',
      travmaKategorileri: [], travmaSeviyesi: 0,
    },
    {
      id: 'a1-matematik', perde: 1,
      label: 'Bellek: Matematikten kalma',
      desc: 'Bernard uyarıyor: "Biff matematikten kalacak." Willy önemsemiyor: "Adam Biff!"',
      icDurum: 'Tehlike işareti — ama hem Biff hem baba duymak istemiyor.',
      bosluk: 'O sınava girdi mi? Çalıştı mı? Niye başaramadı?',
      travmaKategorileri: [], travmaSeviyesi: 1,
    },
    {
      id: 'a1-bernard-uyari', perde: 1,
      label: 'Bernard\'ı küçümseme + uyarı',
      desc: 'Biff Bernard\'a "anemic" diyor. Bernard: "Boston\'a gitti baban. Biff de gidiyor matematik için."',
      icDurum: 'Bernard\'ın söylediği gerçek — ama henüz Biff Boston\'a gitmedi. Bu sahne sonrası gidecek.',
      bosluk: 'Bernard\'ın "Boston" demesini duyduğunda — niye gitmek istedi?',
      travmaKategorileri: [], travmaSeviyesi: 1,
    },
    {
      id: 'a1-boston', perde: 1,
      label: 'Boston otel — babayı kadınla görür',
      desc: 'Otel kapısı. Biff babayı görmek için geldi — matematikten yardım için. Kapıyı açtırıyor. Kadın çıkıyor.',
      icDurum: 'Kahraman imgesi yıkılıyor. Bir saniye içinde her şey değişiyor. Babanın yalanları, "Adonis"i — hepsi.',
      bosluk: 'Otel kapısından sokağa çıktığında — nereye gitti? Trene mi, dışarıya mı?',
      travmaKategorileri: ['ihanet', 'ahlaki_yara'], travmaSeviyesi: 3,
    },
    {
      id: 'a1-linda-uyari', perde: 1,
      label: 'Linda\'nın uyarısı',
      desc: 'Linda oğullarına: "Babanız bir insan. Yıkılıyor. Ona dikkat edin." Biff dinler.',
      icDurum: 'Annenin yüzünü ilk kez bu kadar net görüyor. Linda\'nın taşıdığı yükü hissediyor.',
      bosluk: 'Linda gittikten sonra Happy ile ne konuştu?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 1,
    },
    {
      id: 'a2-bill-oliver', perde: 2,
      label: 'Bill Oliver\'dan iş — kalem çalma',
      desc: 'Bill Oliver\'ın ofisinde. Bill onu hatırlamıyor bile. Biff masada bekliyor. Sonra masadan kalemi alıyor — kaçıyor.',
      icDurum: 'Bir an netlik: "Bill Oliver beni hiç tanımadı. Ben hiç onun arkadaşı olmadım." Hayat boyu yalan.',
      bosluk: 'Kalemi cebine koyduğu an — niye? Kasten mi, refleks mi?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 1,
    },
    {
      id: 'a2-hapishane', perde: 2,
      label: 'Bellek: Hapis (kısa atıf)',
      desc: 'Konuşmada geçiyor: Biff hapis girmişti. Hırsızlıktan. Willy duymak istemiyor.',
      icDurum: 'Bu Biff\'in en sakladığı şey. Babanın gözünde "Adonis" hâlâ yaşamak için.',
      bosluk: 'Hapisten çıktığında nereye gitti? Eve dönmek aklına geldi mi?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 1,
    },
    {
      id: 'a2-restoran-once', perde: 2,
      label: 'Restoranda — gerçeği söyleme niyeti',
      desc: 'Frank\'s Chop House. Biff babayı bekliyor. "Bu sefer ona söyleyeceğim. Bill Oliver beni tanımadı. Ben hiçbir şey değilim."',
      icDurum: 'Karar verdi. Bu kez gerçek konuşacak. Babasının hayalini kırmaya hazır.',
      bosluk: 'Babası gelene kadar masada kaç kez kararını sorguladı?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 1,
    },
    {
      id: 'a2-restoran', perde: 2,
      label: 'Restoran — babayı tuvalette bırakır',
      desc: 'Willy duymak istemiyor. Biff anlatamıyor. Willy zihni kayıyor — Boston\'a, eski belleğe. Happy bir kadına asılıyor. Biff dayanamıyor — Willy\'yi tuvalette bırakıp gidiyor.',
      icDurum: 'Pes. "Ona söyleyemiyorum. Beni dinlemiyor." Sokağa çıkarken kaçma duygusu.',
      bosluk: 'Restoranı terk ettikten sonra eve mi gitti, başka yere mi?',
      travmaKategorileri: ['ihanet', 'ahlaki_yara'], travmaSeviyesi: 2,
    },
    {
      id: 'a2-linda-yuzleşme', perde: 2,
      label: 'Linda ile yüzleşme',
      desc: 'Eve döndü. Linda öfkeli: "Babanı bıraktın orada. Onu sevmiyor musun?" Biff: "Seviyorum anne. Ama onu kurtaramam."',
      icDurum: 'Annenin öfkesi haklı. Ama Biff de haklı. İki gerçek çarpışıyor.',
      bosluk: 'Linda\'yla bu konuşmadan sonra evde dolaştığı saatler — neyi düşündü?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 2,
    },
    {
      id: 'a2-son-yuzleşme', perde: 2,
      label: 'Babayla son yüzleşme — "Ben hiçbir şeyim"',
      desc: 'Biff babayı kucaklıyor. Ağlıyor: "Beni bırak baba. Ben dime a dozen\'ım. Sen de. Bu kadar."',
      icDurum: 'Hayat boyu söyleyemediği şey çıkıyor. Hem yıkım hem özgürlük. Babasını ilk kez bu kadar yakından gördüğü an.',
      bosluk: 'Ağladıktan sonra yataktan kalkmadan önce — ne hissetti?',
      travmaKategorileri: ['ahlaki_yara', 'kayip'], travmaSeviyesi: 3,
    },
    {
      id: 'requiem', perde: 5,
      label: 'Requiem — "yanlış rüya gördü"',
      desc: 'Mezarlık. Cenaze bitti. Biff: "Babam yanlış rüyayı gördü. Hayatı boyunca." Happy itiraz ediyor. Biff: "Ben kim olduğumu biliyorum şimdi."',
      icDurum: 'Bir özgürleşme — ama acıyla. Babanın hayatı bir yanlış üzerine kurulmuştu. Biff bunu görebiliyor şimdi.',
      bosluk: 'Mezar başından ayrıldıktan sonra — nereye gidecek?',
      travmaKategorileri: ['kayip', 'varolussal'], travmaSeviyesi: 2,
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

  // ─── EGZERSİZLER ──────────────────────────────────────────────────────────

  egzersizler: [
    {
      id: 'baseline',
      baslik: 'Baseline Kurma',
      sure: '10 dk', seviye: 'Giris', ikon: '🏈',
      aciklama:
        "17 yaşındaki Biff. Lise yıldızı. Ebbets Stadyumu maçı yaklaşıyor. Üniversiteler peşinde. Babası gururlu, kendisi rahat. Henüz Boston yok.",
      adimlar: [
        'Gözlerini kapat. Soyunma odasındasın. Maça hazırlanıyorsun.',
        'Üniformayı giyiyorsun. {duyu}?',
        'Babanın tribünde olduğunu biliyorsun. Onun yüzünü hayal et.',
        'Sahaya çıkıyorsun. Bu Biff\'i tut. Buraya istediğin an dönebilirsin.',
      ],
      travmaSeviyesi: 0,
    },
    {
      id: 'dogrular',
      baslik: 'Değiştirilemez Doğrular Taraması',
      sure: '15 dk', seviye: 'Temel', ikon: '🗺️',
      aciklama:
        "Biff\'in metinden gelen sabit gerçeklerini bedenine yedir. Yorum değil — zemin.",
      adimlar: [
        'Listeyi yavaşça oku. Acele etme.',
        'Her madde için içinden bir cevap ver: "Evet, biliyorum."',
        'Sürpriz yaratan bir madde var mı? Onu daha uzun tut.',
        '"Biff bunların hepsini taşıyarak sahneye giriyor."',
      ],
      travmaSeviyesi: 0,
    },
    {
      id: 'iliski-willy',
      baslik: 'İlişki Haritası: Willy',
      sure: '25 dk', seviye: 'Orta', ikon: '👁️',
      aciklama:
        "Tanrıdan insana bir yolculuk. Biff babasını çocukken tanrı olarak gördü. Boston\'da insan olduğunu öğrendi. 17 yıl boyunca bu iki imajla yaşadı.",
      adimlar: [
        'Çocukken babanı bekleyen Biff. Yolda gözleri. {ipucu}',
        'Boston\'da kapı açıldığında babanın yüzü. O an bedeninde ne oldu?',
        'Restoran sahnesinde "ona söyleyemiyorum" hissi — niye söylenmiyor?',
        'Son sahnede onu kucakladığın an — sen mi onu bırakıyorsun, o mu seni?',
      ],
      travmaSeviyesi: 3,
    },
    {
      id: 'kahraman-yikim',
      baslik: 'Kahraman İmgesinin Yıkımı: Boston',
      sure: '25 dk', seviye: 'Ileri', ikon: '🚪',
      aciklama:
        "Bu egzersiz Boston anına özel — Biff\'in en kırılma anı. Kapıyı çalmadan önce ile sokağa çıktıktan sonra arasındaki birkaç dakika.",
      adimlar: [
        'Otel koridorunda. Kapıya yaklaşıyorsun. Babanın odasının kapısı.',
        'Çalmadan önce — beklediğin görüntü ne? {ipucu}',
        'Çaldın. İçeriden sesler. Bir kadın sesi. {duyu}?',
        'Kapı açıldı. Babanın yüzünü gör. Sonra kadını gör.',
        'Sokağa çıktığında — o Biff artık yok. Hangi yeni Biff bir adım atıyor?',
      ],
      travmaSeviyesi: 3,
      bagliSahne: 'a1-boston',
    },
    {
      id: 'kararlar-odasi',
      baslik: 'Kararlar Odası',
      sure: '30 dk', seviye: 'Ileri', ikon: '⚖️',
      aciklama:
        "Biff\'in hayatındaki üç dönüm noktası. Onun seçimlerini bil — kendi seçimini yap.",
      kararlar: [
        {
          id: 'k-boston',
          sahne: 'Boston otel kapısı',
          kurulum: 'Otel kapısının önünde. İçeriden sesler. Bir kadının kahkahası. Babanın sesi.',
          yollar: [
            { id: 'cal', metin: 'Kapıyı çal — gör neler oluyor' },
            { id: 'cik', metin: 'Çık — kapıyı çalma, eve dön' },
            { id: 'bekle', metin: 'Bekle — koridorda dur, bir süre' },
          ],
          yansimaSorusu: 'Bu kararı verirken — meraktan mı, korku mu, başka bir şey mi?',
          tarihselCevap: 'Biff kapıyı çaldı. Tekrar çaldı. Açtırdı. Babasını ve kadını gördü. O dakika hayatının yön değiştiren tek anı oldu. Hiç bilmediği şeyleri bilmek zorunda kaldı.',
          farkSorusu: 'Çıkmayı seçebilir miydin? Eğer öyleyse — Biff\'in çıkamayışı sana ne anlatıyor?',
        },
        {
          id: 'k-bill-oliver',
          sahne: 'Bill Oliver ofisi',
          kurulum: 'Ofisteki masada. Bill Oliver az önce çıktı — seni hatırlamamıştı. Masanın üzerinde dolma kalem.',
          yollar: [
            { id: 'cal', metin: 'Kalemi çal — kaç' },
            { id: 'birak', metin: 'Bırak — sokağa kibarca çık' },
            { id: 'gerigetir', metin: 'Cebinden çıkar — masaya bırak, çık' },
          ],
          yansimaSorusu: 'Kaleme uzandığın an — bilinçli bir karar mı, eski bir alışkanlık mı?',
          tarihselCevap: 'Biff kalemi aldı. Sonra kaçtı. Restoranda Willy\'ye bunu anlatmak istedi: "Ben kim olduğumu öğrendim. Ben bir hırsızım. Ben adam değilim." Willy duymadı.',
          farkSorusu: 'Sen kalemi geri verir miydin? Biff\'in alma refleksi sana ne söylüyor?',
        },
        {
          id: 'k-son',
          sahne: 'Son sahne — babayla yüzleşme',
          kurulum: 'Salon. Willy ayağa kalkmış, sana bağırıyor. Linda kapıda. "Ona ne söyleyeceksin?"',
          yollar: [
            { id: 'gercegi', metin: 'Gerçeği söyle — "ben hiçbir şeyim" cümlesini söyle' },
            { id: 'sus', metin: 'Sus — odana git, konuşma' },
            { id: 'kucakla', metin: 'Kucakla — söze gerek yok' },
          ],
          yansimaSorusu: 'Bu kararı verirken — onu kurtarmak mı, kendini kurtarmak mı önemliydi?',
          tarihselCevap: 'Biff hem söyledi hem kucakladı. "Bırak baba. Ben dime a dozen\'ım. Sen de." Ağladı. Willy bunu sevgi olarak yorumladı — ama hayalle. Ertesi sabah Willy öldü.',
          farkSorusu: 'Biff yanıldı mı, yoksa hakikati söylemek hâlâ doğru muydu? Senin için fark ne?',
        },
      ],
      travmaSeviyesi: 2,
    },
    {
      id: 'ben-hicbir-seyim',
      baslik: '"Ben Hiçbir Şeyim"',
      sure: '15 dk', seviye: 'Ileri', ikon: '🌾',
      aciklama:
        "Biff\'in en özgürleştirici cümlesi. \"Ben dime a dozen\'ım — sen de.\" Bu egzersiz o cümlenin altındaki katmanları açar.",
      adimlar: [
        'Otur. "Ben Adonis\'im" cümlesini söyle. Çocuk Biff\'in cümlesi. {duyu}?',
        'Şimdi: "Ben dime a dozen\'ım." 34 yaşındaki Biff\'in cümlesi. Aynı bedensel zemini koruyabiliyor musun?',
        '"Sen de" — bu cümleyi babana söylemek nasıl bir şey?',
        'Şimdi: "I know who I am now." Mezardaki Biff\'in cümlesi. Bu cümle bir özgürlük mü, bir teslimiyet mi?',
      ],
      travmaSeviyesi: 2,
    },
    {
      id: 'cikis-yola',
      baslik: '"Bir Yola Çık" — Çıkış',
      sure: '15 dk', seviye: 'Ileri', ikon: '🛤️',
      aciklama:
        "Modül III\'ün ön habercisi — deroling. Biff\'i içine aldın. Babasıyla yüzleşmesini taşıdın. Şimdi onu bırakma zamanı.",
      adimlar: [
        'Otur. Ayaklarını yere bas. Biff\'in son nefesini bedeninden çıkar.',
        '"I know who I am now" — bu cümleyi sen söyle. Biff için. Kendin için.',
        'Adını yüksek sesle söyle. Yaşını söyle. Bugünün tarihini söyle.',
        'Etrafına bak — odanın ışığı, sıcaklığı, kokusu. Sen şimdi buradasın.',
        'Biff\'i bırakmadan kalkma. Su iç. Birkaç dakika öylece otur.',
      ],
      travmaSeviyesi: 0,
      tipDeroling: true,
    },
  ],
};

export default biff;