// data/karakterler/hamlet.js
// ITC Actor's Gym — Hamlet karakter verisi

const hamlet = {
  // ─── KİMLİK ───────────────────────────────────────────────────────────────

  id: 'hamlet',
  ad: 'Hamlet',
  oyun: 'Hamlet',
  yazar: 'William Shakespeare',
  donem: '1600',
  tur: 'Trajedi',
  tip: 'INFP',
  ozet:
    "Yas, ihanet ve varoluşsal sorgulama. Düşünce ile eylem arasında sıkışmış bir prensin görünmeyen yolculuğu.",
  etiketler: ['Trajedi', 'Yas', 'İhanet', 'Felsefi'],

  // ─── BASELINE ─────────────────────────────────────────────────────────────

  baseline: {
    ad: 'Wittenberg Öncesi',
    aciklama:
      "Henüz felaket olmamış. Hamlet, Wittenberg'de felsefe okuyan genç bir prens. Babası yaşıyor, anne ve baba bir arada, Ophelia'ya duyduğu sevgi henüz saf. Henüz zihninin koridorlarında hayalet yok.",
  },

  // ─── KRİTİK İLİŞKİLER ─────────────────────────────────────────────────────

  iliskiler: ['Babanın Hayaleti', 'Gertrude', 'Claudius', 'Ophelia', 'Horatio', 'Polonius'],

  // ─── DEĞİŞTİRİLEMEZ DOĞRULAR ──────────────────────────────────────────────

  dogrular: [
    { kategori: 'Kimlik', madde: 'Hamlet, Danimarka prensidir.' },
    { kategori: 'Kimlik', madde: "Wittenberg Üniversitesi'nde öğrencidir, felsefeye yatkındır." },
    { kategori: 'Bilgi', madde: "Babasının hayaletiyle karşılaştı; onun ağzından Claudius'un katil olduğunu öğrendi." },
    { kategori: 'Bilgi', madde: 'Annesi Gertrude, babasının ölümünden iki ay sonra Claudius ile evlendi.' },
    { kategori: 'Bilgi', madde: 'Claudius hem amcası, hem üvey babası, hem de hedefi.' },
    { kategori: 'İlişki', madde: "Ophelia ile romantik bir bağı vardır." },
    { kategori: 'İlişki', madde: 'Horatio en yakın dostudur, ona her şeyi açar.' },
    { kategori: 'İlişki', madde: "Polonius, Ophelia'nın babası — yanlışlıkla öldürür." },
    { kategori: 'Eylem', madde: "Polonius'u perdenin arkasından öldürür." },
    { kategori: 'Eylem', madde: "Claudius'u dua ederken öldürmekten vazgeçer." },
    { kategori: 'Eylem', madde: "Rosencrantz ve Guildenstern'i ölüme yollar." },
    { kategori: 'Eylem', madde: 'Düelloda Laertes ile dövüşür.' },
    { kategori: 'Son', madde: 'Zehirli kılıçla yaralanır.' },
    { kategori: 'Son', madde: 'Son sözleri: "Üst tarafı sessiz bir dünya" (The rest is silence).' },
    { kategori: 'Son', madde: 'Fortinbras tahtın varisi olur.' },
  ],

  // ─── OYUN ÖNCESİ YAŞAM (Workbook s.58-65) ─────────────────────────────────
  // Sahneye çıkmadan önce ne yaşandı — Hamlet'in bedeninde taşıdığı geçmiş.

  oyunOncesi: {
    olaylar: [
      {
        no: 1,
        baslik: "Kral Hamlet (babası), Norveç Kralı Fortinbras'ı düelloda yener",
        sahneRef: 'I.i · Horatio',
        yuk: 'Ailesel onur, güç mirası, sırtta taşınan büyük bir gölge.',
        yansimaSorusu:
          "Bu efsanevi babanın gölgesi senin Hamlet'inin bedenine nereye düşüyor?",
      },
      {
        no: 2,
        baslik: 'Norveç Kralı ölür; genç Fortinbras intikam planlar',
        sahneRef: 'I.i · Horatio',
        yuk: "Hamlet'in kendi durumuna paralel bir intikam — ama o atılgan, Hamlet erteleyici.",
        yansimaSorusu:
          'Hamlet bu paralel intikamcıyı duyduğunda kendisini nasıl konumlandırıyor?',
      },
      {
        no: 3,
        baslik: 'Kral Hamlet ani ve şüpheli bir biçimde ölür',
        sahneRef: 'I.v · Hayaletin İfşası',
        yuk: 'Bütün oyunun hareket noktası. Bilinçaltındaki şüphe, sözle ifade edilmemiş bir kuşku.',
        yansimaSorusu:
          "Sözle ifade edilemeyen kuşku — Hamlet'in bedeninde nasıl bir ses?",
      },
      {
        no: 4,
        baslik: 'Gertrude, Claudius ile aceleyle evlenir',
        sahneRef: "I.ii · Hamlet'in Monoloğu",
        yuk: 'Ahlaki travma, derin yas üzerine ihanet — "henüz aylar dolmadan".',
        yansimaSorusu: '"Henüz aylar dolmadan" — bu cümle bedende nasıl kayıyor?',
      },
      {
        no: 5,
        baslik:
          'Claudius tahta geçer; Hamlet veraset hakkı olduğu hâlde dışarıda kalır',
        sahneRef: 'I.ii',
        yuk: 'Taht hakkının gaspı. Kişisel kayıp + siyasi kırılma birlikte.',
        yansimaSorusu:
          'Kişisel kayıp + siyasi kırılma birlikte — hangisi önce hissediliyor?',
      },
      {
        no: 6,
        baslik: "Hamlet, Wittenberg'den Danimarka'ya çağrılır",
        sahneRef: 'I.ii · Claudius',
        yuk: 'Entelektüel hayatından koparılış — Wittenberg, kendisi olabildiği yer.',
        yansimaSorusu:
          'Kendisi olabildiği yerden çağrılmak — bedensel direnç nerede?',
      },
      {
        no: 7,
        baslik: 'Ophelia ile romantik bağ — oyun öncesinde başlamış',
        sahneRef: 'III.i · Polonius, Laertes',
        yuk: 'Umut ve kırılganlık. Yas içindeki tek pozitif bağ — ama o da tehdit altında.',
        yansimaSorusu:
          'Yas içindeki tek pozitif bağ — ama tehdit altında. Çelişki nerede?',
      },
      {
        no: 8,
        baslik: 'Claudius, Norveç ile diplomatik ilişkiler kurar',
        sahneRef: 'I.ii',
        yuk: 'Yalnızca Hamlet yas tutuyor. Saray, ilişkilerine devam ediyor.',
        yansimaSorusu:
          'Yalnızca Hamlet yas tutuyor — bu yalnızlık nasıl bir izolasyon?',
      },
    ],

    iliskiler: [
      {
        no: 1,
        ad: 'Gertrude',
        rol: 'ANNE',
        gecmis: 'Sevgi kaynağı, çocukluğun sıcak merkezi.',
        simdi: 'İhanet hissi içinde — ama hâlâ anne. Kopamıyor.',
        iz: 'Aşk + öfke, aynı bedende.',
        yansimaSorusu:
          'Bu çelişkili yük bedeninde nereye yerleşiyor? Hangi an sevgi, hangi an öfke baskın?',
      },
      {
        no: 2,
        ad: 'Kral Hamlet',
        rol: 'BABA',
        gecmis: 'İdeal kral, ahlaki ölçü; oğul için hayranlık konusu.',
        simdi: 'Ölü. Yas, henüz hayalet olarak çağrılmadı.',
        iz: 'Doldurulamaz baba boşluğu.',
        yansimaSorusu:
          'Doldurulamaz boşluk — bu boşluğun şekli ve büyüklüğü ne?',
      },
      {
        no: 3,
        ad: 'Claudius',
        rol: 'AMCA · ÜVEY BABA',
        gecmis: 'Saraydaki amca, akrabalık. Yakın değil ama tanıdık.',
        simdi: 'Annesinin eşi, tahta sahibi — tiksinti veriyor.',
        iz: '"Yeğenden biraz fazla, oğuldan bir hayli az."',
        yansimaSorusu:
          '"Yeğenden biraz fazla, oğuldan bir hayli az" — bu mesafe bedende nasıl?',
      },
      {
        no: 4,
        ad: 'Ophelia',
        rol: 'SEVGİLİ',
        gecmis: 'Aşk başlamış — mektuplar, gizli sözler.',
        simdi: "Polonius'un kontrolünde; Hamlet'ten uzaklaştırılıyor.",
        iz: 'Tek pozitif bağ — ama o da kayıyor.',
        yansimaSorusu:
          'Tek pozitif bağ kayıyor — bu kayma hangi anlarda fark ediliyor?',
      },
      {
        no: 5,
        ad: 'Horatio',
        rol: 'DOST',
        gecmis: "Wittenberg'den dost; entelektüel ortaklık.",
        simdi: "Cenazeye gelmiş — Hamlet'in tek güvendiği insan.",
        iz: 'Tek sığınak, tek ayna.',
        yansimaSorusu:
          "Tek sığınak, tek ayna — Horatio'yla olduğun zaman bedenin nasıl?",
      },
      {
        no: 6,
        ad: 'Polonius',
        rol: 'SEVGİLİNİN BABASI',
        gecmis: "Saray danışmanı; Hamlet'i prens olarak görür.",
        simdi: 'Aşkın önündeki engel, gözcü, manipülatör.',
        iz: 'Aşka set çeken otorite.',
        yansimaSorusu:
          "Aşka set çeken otorite — Polonius'a bakışta hangi tutulma var?",
      },
      {
        no: 7,
        ad: 'Laertes',
        rol: 'SEVGİLİNİN KARDEŞİ',
        gecmis: 'Saray çevresinden tanıdık; aynı yaş, paralel hayat.',
        simdi: "Fransa'ya gidiyor; kız kardeşini Hamlet'e karşı uyarıyor.",
        iz: 'Eski yakınlık, yeni mesafe.',
        yansimaSorusu:
          'Eski yakınlık, yeni mesafe — bu değişim hangi anda fark edildi?',
      },
      {
        no: 8,
        ad: 'Fortinbras',
        rol: 'NORVEÇ PRENSİ',
        gecmis: 'Babalarının düellosu üzerinden dolaylı bir tarih.',
        simdi: "Uzak bir tehdit, henüz Hamlet'in radarında değil.",
        iz: "Paralel intikamcı — Hamlet'in karşı-aynası.",
        yansimaSorusu:
          "Karşı-ayna — Fortinbras'ı düşündüğünde Hamlet kendinden ne görür?",
      },
    ],
  },

  // ─── PERDE TEMALARI (Workbook s.66-67) ────────────────────────────────────

  perdeTemalari: [
    { perde: 'I',   baslik: 'Şüphe ve Pasif Yas',  altyazi: 'Yas içe kapanır, kuşku doğar',     sahneAraligi: '1-2'  },
    { perde: 'II',  baslik: 'Plan ve Gözlem',      altyazi: 'Kanıt aranır, eylem ertelenir',    sahneAraligi: '3-4'  },
    { perde: 'III', baslik: 'Eylem ve Patlama',    altyazi: 'Erteleme kırılır, ilk kan akar',   sahneAraligi: '5-8'  },
    { perde: 'IV',  baslik: 'Sürgün ve Kıyaslama', altyazi: 'Uzaklık kendine bakış getirir',    sahneAraligi: '9-11' },
    { perde: 'V',   baslik: 'Kabul ve Son',        altyazi: 'Direniş biter, hazır oluş gelir',  sahneAraligi: '12-14'},
  ],

  // ─── 14 SAHNE — WORKBOOK FORMATI (s.66-85) ────────────────────────────────
  // Bu dizi yeni Timeline sayfası tarafından kullanılır.
  // Eski `sahneler` dizisi Yazarın Çerçevesi tarafından hâlâ kullanıldığı için
  // şimdilik korundu — Sprint 2'de retire edilecek.

  sahnelerWorkbook: [
    {
      no: 1, perde: 1, perdeRomen: 'I',
      baslik: 'Surlarda Hayalet',
      konum: 'I.i · Gece',
      olay:
        'Elsinore surlarında nöbet tutan askerler bir hayalet görür. Horatio çağrılır; hayalet Eski Kral Hamlet\'e benzemektedir. Hamlet henüz sahnede değil — saray salonunda yas tutmaktadır.',
      icsel:
        'Hamlet bu sahnede yok — ama metin onun yokluğunda örülüyor. Hayalet, oğlunu bekliyor.',
      onerilenSicaklik: 3,
      yuk: 'Henüz haberi olmayan bir oğul, bir hakikate doğru çekiliyor.',
    },
    {
      no: 2, perde: 1, perdeRomen: 'I',
      baslik: 'İlk Monolog',
      konum: 'I.ii · Saray',
      olay:
        'Claudius tahttadır, Gertrude yanında, Hamlet siyahlar içinde kenarda. "Yeğenden biraz fazla, oğuldan bir hayli az" der amcasına. Yalnız kalınca: "Ah bu katı, kaskatı beden bir dağılsa, eriyip gitse bir çiy tanesinde sabahın!"',
      icsel:
        'Yas + tiksinti + ahlaki çöküş. Annenin hızı, sarayın gülümsemesi katlanılmaz.',
      onerilenSicaklik: 7,
      yuk: 'Yalnızlık doruk. Bir şey eksik, ama ne — henüz bilmiyor.',
    },
    {
      no: 3, perde: 1, perdeRomen: 'I',
      baslik: 'Hayaletle Karşılaşma',
      konum: 'I.iv-v · Gece',
      olay:
        'Hayalet Hamlet\'e görünür. Babasının Claudius tarafından kulağına zehir dökülerek öldürüldüğünü söyler ve intikam ister. Hamlet yemin eder.',
      icsel:
        'Şok → inanç → intikam yemini. Üç katman birkaç dakikada.',
      onerilenSicaklik: 9,
      yuk: 'Bu sahneden çıkan Hamlet, sahneye giren Hamlet değildir.',
    },
    {
      no: 4, perde: 2, perdeRomen: 'II',
      baslik: 'Plan + Oyuncular',
      konum: 'II.ii · Saray',
      olay:
        'Rosencrantz ve Guildenstern saraydadır — Claudius\'un casusları. Oyuncular gelir. Hamlet, "Fare Kapanı" planını kurar: bir oyun sahnelenecek, Claudius\'un suçluluğu test edilecek.',
      icsel:
        'Paranoya + zekâya yöneliş. Beden geride, akıl önde. Delilik maskesi takılıyor.',
      onerilenSicaklik: 5,
      yuk: 'Hayalete inanmıyorum diyor; gerçekten de mi inanmıyor?',
    },
    {
      no: 5, perde: 3, perdeRomen: 'III',
      baslik: '"Var olmak mı, yok olmak mı" + Ophelia',
      konum: 'III.i',
      olay:
        'Hamlet tek başına, varoluş üzerine düşünür: "Var olmak mı, yok olmak mı, bütün sorun bu." Sonra Ophelia gelir; Hamlet onu sertçe reddeder, manastıra gönderir.',
      icsel:
        'Varoluşsal çöküş → hayata dönme kararı → aşkın reddedilişi. Üç farklı an, tek sahnede.',
      onerilenSicaklik: 8,
      yuk: 'Ophelia da onların safındaydı (sandı). Tek pozitif bağ koparılıyor.',
    },
    {
      no: 6, perde: 3, perdeRomen: 'III',
      baslik: 'Oyun İçinde Oyun',
      konum: 'III.ii · Saray',
      olay:
        'Oyuncular, Eski Kral\'ın ölümünü temsil eden bir sahne oynar. Claudius dayanamaz, sahneyi bırakıp çıkar. Hamlet kanıtını almıştır.',
      icsel:
        'Sabırlı strateji → patlamış doğrulama. "Şimdi biliyorum."',
      onerilenSicaklik: 9,
      yuk: 'Artık biliyorum. Şimdi ne?',
    },
    {
      no: 7, perde: 3, perdeRomen: 'III',
      baslik: 'Dua Eden Claudius',
      konum: 'III.iii',
      olay:
        'Claudius günah çıkarmak için diz çökmüştür. Hamlet arkasında, kılıç çekilmiş — ama vurmuyor. "Cennete gider bu halinde öldürürsem; öcümü almış sayılır mıyım?" Erteliyor.',
      icsel:
        'Vicdan + adalet duygusu + erteleme. Akıl gerekçe üretiyor.',
      onerilenSicaklik: 6,
      yuk: 'Erteleme alışkanlığı pekişti. Ne zaman olsa hep böyle.',
    },
    {
      no: 8, perde: 3, perdeRomen: 'III',
      baslik: 'Anne Sahnesi + Polonius',
      konum: 'III.iv · Anne Odası',
      olay:
        'Hamlet annesinin odasına gelir. Perdenin arkasında bir ses duyar; "Ne o? Bir fare mi?" diye kılıcını saplar. Polonius\'u yanlışlıkla öldürmüştür. Annesiyle yüzleşme bundan sonra başlar.',
      icsel:
        'Sevgi → öfke → pişmanlık. Üç katman aynı anda patlar.',
      onerilenSicaklik: 10,
      yuk: 'Artık katil. Geri dönüş yok.',
    },
    {
      no: 9, perde: 4, perdeRomen: 'IV',
      baslik: "İngiltere'ye Gönderiliş",
      konum: 'IV.iii',
      olay:
        'Polonius\'un cesedini saklamıştır. Claudius onu sürgün eder — sözde diplomasi için, gerçekte ölüm fermanıyla. Hamlet ironi maskesini takar; içten içe tehdidi sezer.',
      icsel:
        'İronik delilik maskesi + içte tetik. Söz ve niyet ayrı.',
      onerilenSicaklik: 5,
      yuk: 'Tehdit altında — ama farkındayım.',
    },
    {
      no: 10, perde: 4, perdeRomen: 'IV',
      baslik: 'Fortinbras Ordusu',
      konum: 'IV.iv · Yol',
      olay:
        'Yolda, Fortinbras\'ın ordusuyla karşılaşır. Küçük bir toprak parçası için savaşan binlerce asker. Hamlet kendi eylemsizliğine bakıp utanç duyar: "Ey düşüncem, bundan böyle ya kana boyan, ya da beş para etmediğine yan."',
      icsel:
        'Utanç → kendine öfke → eylem kararı. Kıyaslama bedeni harekete geçirir.',
      onerilenSicaklik: 7,
      yuk: 'Karar var, ama Danimarka\'dan uzak. Eylem nerede?',
    },
    {
      no: 11, perde: 4, perdeRomen: 'IV',
      baslik: "Ophelia'nın Deliliği + Ölümü",
      konum: 'IV.v-vii',
      olay:
        'Hamlet sahne dışında. Ophelia çiçeklerle gelir, deliliği görünür. Bir süre sonra dereye düşer ve boğulur. Laertes Fransa\'dan döner, intikam yemini eder.',
      icsel:
        'Hamlet henüz haberi yok — ama yokluğu sahneyi büyütüyor. Polonius\'un ölümünün dolaylı dalgaları.',
      onerilenSicaklik: 4,
      yuk: 'Yokluğu büyür. Geri döndüğünde başka bir yas onu bekliyor.',
    },
    {
      no: 12, perde: 5, perdeRomen: 'V',
      baslik: "Yorick + Ophelia'nın Cenazesi",
      konum: 'V.i · Mezarlık',
      olay:
        'Mezarcılarla konuşur, Yorick\'in kafatasını eline alır: "Zavallı Yorick…" Sonra Ophelia\'nın cenazesine rastlar. Laertes ile mezarın içinde kavgaya tutuşur.',
      icsel:
        'Ölümle felsefi barış (sakin) → bastırılmış aşkın patlaması (şok). İki an, beş dakika içinde.',
      onerilenSicaklik: 8,
      yuk: 'Aşkı kabullenmedi, ama kaybetti. Ölüm artık tanıdık.',
    },
    {
      no: 13, perde: 5, perdeRomen: 'V',
      baslik: "Horatio'ya · Kabulleniş",
      konum: 'V.ii(A)',
      olay:
        'Horatio\'ya R&G\'nin ihanetini ve onların ölümüne sebep oluşunu anlatır. Düello davetini kabul eder. "Serçenin ölmesinde bile bir bildiği vardır kaderin."',
      icsel:
        'Soğukkanlı kabulleniş. İçsel barış başlıyor — ölümle yüzleşmeye hazır.',
      onerilenSicaklik: 4,
      yuk: 'Artık ölümle barıştım. Ne olursa olsun.',
    },
    {
      no: 14, perde: 5, perdeRomen: 'V',
      baslik: 'Düello + Ölüm',
      konum: 'V.ii(B) · Son',
      olay:
        'Düello başlar. Hile fark edilir: kılıç ve kadeh zehirlidir. Gertrude zehirli kadehten içer, ölür. Hamlet, Laertes\'i ve Claudius\'u öldürür. Kendi de zehirden ölür: "Üst tarafı… sessiz bir dünya."',
      icsel:
        'Onurla ölüm + hikâyeyi devretme. "Horatio… anlat onlara."',
      onerilenSicaklik: 9,
      yuk: 'Hikâye Horatio\'ya kaldı. Hamlet susuyor.',
    },
  ],

  // ─── YAZARIN ÇERÇEVESİ · 5 TERCİH (Workbook s.86-105) ─────────────────────
  // Her tercih: Shakespeare'in metinde bıraktığı işaretler + olası yorumlar.
  // Tercih 4 birden fazla seçime izin verir (cokluSecim: true).
  // sahneNolari: Tercih → Timeline sahne bağlantısı için.

  tercihler: [
    {
      no: 1,
      konu: 'Hayalet',
      baslik: 'Hayalet gerçek mi, halüsinasyon mu?',
      cokluSecim: false,
      sahneNolari: [1, 3, 8],
      isaretler: [
        {
          ref: 'I.i · Surlar',
          sahneNo: 1,
          metin:
            "Bernardo, Marcellus ve Horatio aynı anda görür. Horatio şüpheci entelektüel: \"Yemin ederim, dünyada inanmazdım, kendi gözlerimle görmeseydim böylesine açık seçik.\"",
        },
        {
          ref: 'I.v · Gece',
          sahneNo: 3,
          metin:
            "Hayalet Hamlet'le konuşur, Eski Kral'ın ölümünü tüm ayrıntısıyla anlatır — kulağa zehir, bahçedeki uyku.",
        },
        {
          ref: 'III.iv · Anne Odası',
          sahneNo: 8,
          metin:
            'Hamlet hayaleti görür ve onunla konuşur. Gertrude tek kelime duymaz: "Hiçbir şey! Oysa görüyor da gözlerim ne varsa."',
        },
      ],
      sentez: 'Toplu görüş + yalnız görüş — birlikte. Shakespeare ikisini de yazıyor.',
      yorumlar: [
        {
          harf: 'A',
          baslik: 'Hayalet fizik ötesi gerçek',
          aciklama:
            "Tıpkı Shakespeare'in çağdaş seyircisinin inandığı gibi: ruh, intikam emri, dinsel gerçeklik. Anne görmüyor çünkü onun ruhsal görüşü kapalı.",
        },
        {
          harf: 'B',
          baslik: 'Toplu sezgi, bireysel zihin',
          aciklama:
            "Surlardaki askerler kollektif bir gerilime tepki veriyor. Anne sahnesinde ise Hamlet'in zihinsel projeksiyonu — bilinçaltı gerçek görünür hâle gelmiş.",
        },
        {
          harf: 'C',
          baslik: "Tamamen Hamlet'in zihninden",
          aciklama:
            "Hayalet bir halüsinasyon — Hamlet'in suçluluk ve şüphesinin dışavurumu. Diğerlerinin görüşü tarihsel gerçekçilik için kurgu.",
        },
      ],
      kapanis: "Senin seçimin Hamlet'in gerçeklikle ilişkisini belirler.",
    },

    {
      no: 2,
      konu: 'Delilik',
      baslik: 'Delilik gerçek mi, performans mı?',
      cokluSecim: false,
      sahneNolari: [3, 5, 8, 12],
      isaretler: [
        {
          ref: 'I.v · Sonu',
          sahneNo: 3,
          metin:
            'Hamlet, Horatio\'ya plan açıklar: "Çünkü olur ya, bundan sonra, kendimi deli göstermek isteyebilirim." — bilinçli karar.',
        },
        {
          ref: 'III.iv · Anne Odası',
          sahneNo: 8,
          metin:
            'Annesine söyler: "Deli olmadığımı, mahsus öyle göründüğümü."',
        },
        {
          ref: 'III.i · Nunnery',
          sahneNo: 5,
          metin:
            "Ophelia'ya zalimlik. \"Git, bir manastıra gir!\" — Bu bir performans olabilir, ama duygusal şiddet sahici.",
        },
        {
          ref: 'V.i · Mezarlık',
          sahneNo: 12,
          metin:
            "Laertes ile Ophelia'nın mezarında kavga: \"Bin kardeşi bütün sevgilerini birleştirip gelseler…\" — kontrolsüz patlama.",
        },
      ],
      sentez: null,
      yorumlar: [
        {
          harf: 'A',
          baslik: 'Tamamen performans',
          aciklama:
            'Hamlet zekice bir oyun oynuyor. Anlık yoğunluklar bile rolün içinde. Sahnedeki her aşırılık amaca yönelik.',
        },
        {
          harf: 'B',
          baslik: 'Maske gerçeğe dönüşüyor',
          aciklama:
            'Başlangıçta strateji — ama travma birikince maske içeriden çatlıyor. Hamlet bazı anlarda gerçekten dağılıyor, sonra toparlıyor.',
        },
        {
          harf: 'C',
          baslik: 'İki yan birlikte',
          aciklama:
            'Bilinçli ve bilinçsiz hep birlikte. Hamlet seçiyor ama aynı zamanda kapılıyor. İki yan ayrılamaz.',
        },
      ],
      kapanis: 'Senin seçimin sahnedeki "delilik" anlarının dokusunu belirler.',
    },

    {
      no: 3,
      konu: 'Ophelia',
      baslik: "Ophelia'ya aşk sahici mi?",
      cokluSecim: false,
      sahneNolari: [5, 11, 12],
      isaretler: [
        {
          ref: 'II.ii · Polonius mektuptan okur',
          sahneNo: null,
          metin:
            'Hamlet\'in Ophelia\'ya yazdığı: "İnanma istersen yıldızların yandığına, güneşin döndüğüne inanma, doğrunun ta kendisini yalan bil, ama seni sevdiğime inan Ophelia."',
        },
        {
          ref: 'III.i · Nunnery',
          sahneNo: 5,
          metin:
            'Çelişkili: "Sizi gerçekten sevmişim bir ara." — birkaç dize sonra: "Sevmiyordum sizi." Ardından: "Git, bir manastıra gir!"',
        },
        {
          ref: 'V.i · Mezarlık',
          sahneNo: 12,
          metin:
            'Cenazede patlar: "Ophelia\'yı seviyordum ben. Bin kardeşi bütün sevgilerini birleştirip gelseler, sevemezler onu benim sevdiğim kadar!"',
        },
        {
          ref: "IV.v · Ophelia'nın Ölümü",
          sahneNo: 11,
          metin:
            'Hamlet sahne dışında — yas tutmuyor, haberi yok. Geri dönüşte ilk gördüğü cenaze.',
        },
      ],
      sentez: null,
      yorumlar: [
        {
          harf: 'A',
          baslik: 'Sahici aşk, korumacı ret',
          aciklama:
            "Aşk başta da, sonda da gerçek. Manastır sahnesindeki sertlik Ophelia'yı sarayın tehlikesinden uzaklaştırma jesti — sevgisini gizleyerek kollar.",
        },
        {
          harf: 'B',
          baslik: 'İhanet duygusu kırılma yapmış',
          aciklama:
            "Aşk başlangıçta gerçek; ama Ophelia'nın babası ile işbirliği yaptığını sanınca soğumuş. Mezarlıktaki patlama, geri dönüşü olmayan bir kaybın itirafı.",
        },
        {
          harf: 'C',
          baslik: 'Aşk hep belirsizdi',
          aciklama:
            'Hamlet kendi de bilmiyordu sevip sevmediğini. Mezarlıkta da bilmiyor — sadece kaybın büyüklüğüne tepki veriyor. Aşk, kayıp anında doğdu.',
        },
      ],
      kapanis:
        'Senin seçimin nunnery sahnesinin yumuşaklığını ya da sertliğini belirler.',
    },

    {
      no: 4,
      konu: 'Erteleme',
      baslik: 'Hamlet neden bu kadar bekliyor?',
      cokluSecim: true,
      cokluSecimNotu:
        'Birden fazla seçebilirsin. Çoğu sahneleme birkaç katmanı birlikte kullanır.',
      sahneNolari: [4, 5, 7, 10],
      isaretler: [
        {
          ref: 'II.ii · 2. Monolog',
          sahneNo: 4,
          metin:
            '"Ne zavallı bir eşekmişim ben!" Kendine kızıyor — eylem yok, sadece sözler. Oyuncu, hayali bir acı için bile gözyaşı dökebiliyorken o, gerçek babası için tek bir şey yapmamış.',
        },
        {
          ref: 'III.iii · Dua eden Claudius',
          sahneNo: 7,
          metin:
            'Kılıç çekilmiş — vurmuyor. "Cennete gider bu halinde öldürürsem; öcümü almış sayılır mıyım?" — gerekçe üretiliyor.',
        },
        {
          ref: "IV.iv · Fortinbras'tan Sonra",
          sahneNo: 10,
          metin:
            '"Ey düşüncem, bundan böyle ya kana boyan, ya da beş para etmediğine yan." — kendine söz, ama eylem yine yok.',
        },
        {
          ref: 'III.i · "Olmak ya da Olmamak"',
          sahneNo: 5,
          metin:
            '"Bilinç böyle korkak ediyor hepimizi: düşüncenin soluk ışığı bulandırıyor yürekten gelenin doğal rengini."',
        },
      ],
      sentez: null,
      yorumlar: [
        {
          harf: 'A',
          baslik: 'Vicdan / ahlaki tereddüt',
          aciklama:
            'Goethe yorumu. Hamlet hassas ruhlu, kabul edemediği bir görevin altında ezilmiş.',
        },
        {
          harf: 'B',
          baslik: 'Korkaklık',
          aciklama:
            'Kendi kendine söylediği — eylem cesareti yok, sözle örtüyor.',
        },
        {
          harf: 'C',
          baslik: 'Depresyon ve eylemsizlik',
          aciklama:
            'Modern okuma — yas, anhedoni, irade çöküşü. Karar veremiyor çünkü yapılacak hiçbir şey önemli görünmüyor.',
        },
        {
          harf: 'D',
          baslik: 'Düşünce engeli',
          aciklama:
            'Coleridge yorumu — fazla düşünce, eylemi paralize ediyor. Entelektüel ölüm.',
        },
        {
          harf: 'E',
          baslik: 'Bilinçaltı çatışma',
          aciklama:
            "Freud yorumu — Claudius, Hamlet'in bilinçaltında kendisinin yapmak istediğini yapmış. Ona vurmak, kendine vurmak demek.",
        },
      ],
      kapanis: null,
    },

    {
      no: 5,
      konu: 'Son',
      baslik: 'Sondaki teslimiyet pasif mi, olgun mu?',
      cokluSecim: false,
      sahneNolari: [13, 14],
      isaretler: [
        {
          ref: "V.ii · Horatio'ya",
          sahneNo: 13,
          metin:
            '"Serçenin ölmesinde bile bir bildiği vardır kaderin. Şimdi olacak bir şey yarına kalmaz, yarına kalacaksa, bugün olmaz. Bütün mesele hazır olmakta."',
        },
        {
          ref: 'V.ii · Düello Öncesi',
          sahneNo: 14,
          metin:
            'Horatio uyarır: "İçim sıkıntı dolu, gitme." Hamlet: "Ne olacaksa olsun! Bütün mesele hazır olmakta."',
        },
        {
          ref: 'V.ii · Son Sözler',
          sahneNo: 14,
          metin:
            '"Üst tarafı… sessiz bir dünya." — Onurla mı, yorgunlukla mı? Shakespeare boş bırakır.',
        },
      ],
      sentez:
        'Beşinci perdenin Hamlet\'i öncekiyle aynı değil. Bir şey değişmiş — ama ne?',
      yorumlar: [
        {
          harf: 'A',
          baslik: 'Pasif vazgeçiş',
          aciklama:
            'Hamlet yorulmuş, anlamlandırma kapasitesi tükenmiş. "Bütün mesele hazır olmakta" da bir teslim bayrağı — kaderin elinde dövülmüş bir adamın son sözü. Ölüm bir kurtuluş.',
        },
        {
          harf: 'B',
          baslik: 'Olgun kabulleniş',
          aciklama:
            'İngiltere yolundan dönen Hamlet farklı — ölümle yüzleşmiş, korkusunu yenmiş. Teslim değil barış. Eyleme hazır, ama sonucuna takılı değil. Felsefi bir olgunluk.',
        },
        {
          harf: 'C',
          baslik: 'İkisi birden — gri alan',
          aciklama:
            'Hem yorgun hem olgun. Vazgeçmek ile teslim olmak arasındaki ince çizgi. Shakespeare bu ikisini ayırmıyor — belki ayırmak da gerekmiyor.',
        },
      ],
      kapanis:
        'Senin seçimin son sahnenin tonunu belirler — yenilgi mi, yatışma mı.',
    },
  ],

  // ─── SENİN ÇERÇEVEN · 5 BOŞLUK + 15 ALT-SORU (Workbook s.106-125) ─────────
  // Yazarın sustuğu yer — oyuncunun yazdığı.
  // Her boşluk: önce → boşluk metni → sonra (sahne) + 3 alt-soru.

  boslukSet: [
    {
      no: 1,
      baslik: "Wittenberg'den Elsinore'a",
      sinif: 'Mekân Boşluğu',
      konum: 'Oyun Öncesi → I.ii Saray',
      sonraSahneNo: 2,
      onceBaslik: 'Wittenberg',
      onceMetin:
        'Hamlet üniversitede, entelektüel hayatın içinde. Babası sağ. Hayatı düzenli, sevdiği bir kadın var Danimarka\'da, dostu Horatio yanında. Bir gün haber gelir: babası ölmüş.',
      boslukMetin:
        'Habersiz kalkış · belirsiz bir yolculuk · cenazeye yetişme telaşı · yas içinde anneyi düşünmek · Claudius hâlâ amca · evlilik haberi gelmemiş.',
      sonraBaslik: 'I.ii · Saray',
      sonraMetin:
        'Hamlet siyahlar içinde sarayda. Anne Claudius\'la evlenmiş. Hamlet kenarda, yas tutuyor — ilk monolog: "Ah bu katı, kaskatı beden bir dağılsa, eriyip gitse bir çiy tanesinde sabahın!"',
      sentez:
        'Boşlukta ne kadar zaman geçti, bilmiyoruz. Cenazeye mi yetişti, düğüne mi vardı — Shakespeare bunu söylemiyor.',
      altSorular: [
        {
          no: 1,
          baslik: 'Haber Geldiğinde',
          soru: 'Haberi ona kim, hangi kelimelerle getirdi? Bedeni nasıl tepki verdi?',
        },
        {
          no: 2,
          baslik: 'Yola Çıkmadan',
          soru: 'Yola çıkmadan önce odasında ne yaptı, neyi bıraktı, neyi yanına aldı?',
        },
        {
          no: 3,
          baslik: 'Anneyi Gördüğünde',
          soru: 'Anneyi ilk gördüğünde hangi sözcük dudaklarına geldi, hangisi gelmedi?',
        },
      ],
    },

    {
      no: 2,
      baslik: 'Hayaletten Sonraki Gece',
      sinif: 'Karar Boşluğu',
      konum: 'I.v Sonu → II.ii',
      sonraSahneNo: 4,
      onceBaslik: 'I.v · Sonu',
      onceMetin:
        'Hayalet babasının nasıl öldüğünü söyledi. Hamlet intikam yemini etti. Horatio ve Marcellus\'a yemin ettirdi: "Çünkü olur ya, bundan sonra, kendimi deli göstermek isteyebilirim." Şafak söküyor, surlardan iniyorlar.',
      boslukMetin:
        'Şafak · ilk gün · ilk gece tek başına · yataktayken zihin · "Antic disposition" fikrinin doğuşu · Ophelia\'nın odasına gelişin altyapısı (II.i Polonius bunu anlatır).',
      sonraBaslik: 'II.ii · Saray',
      sonraMetin:
        'Birkaç gün geçmiş. Polonius "delilik" gözlemini krala bildirdi. R&G çağrıldı. Oyuncular gelir. Hamlet plan kuruyor — "Fare Kapanı".',
      sentez:
        'Hayaletten ayrıldıktan sonra Hamlet\'in delilik maskesi takmaya, plan kurmaya başlaması arasında bir gece var en az. Belki birkaç.',
      altSorular: [
        {
          no: 1,
          baslik: 'Surlardan İnerken',
          soru: 'Surlardan inerken Horatio\'ya bakışı nasıldı? Sözcük çıktı mı, sessiz miydi?',
        },
        {
          no: 2,
          baslik: 'O Gece Uyandığında',
          soru: 'O gece uyudu mu? Uyumayı denedi mi? Uyandığında bir şey değişmiş miydi?',
        },
        {
          no: 3,
          baslik: 'Maske Fikrinin Doğuşu',
          soru: '"Antic disposition" fikri nereden çıktı? Bilinçli bir hesap mı, ani bir karar mı?',
        },
      ],
    },

    {
      no: 3,
      baslik: "Polonius'tan Sonra",
      sinif: 'Kırılma Boşluğu',
      konum: 'III.iv Sonu → IV.iii',
      sonraSahneNo: 9,
      onceBaslik: 'III.iv · Anne Odası',
      onceMetin:
        'Hamlet annesiyle yüzleşti. Perdenin arkasındaki Polonius\'u "Ne o? Bir fare mi?" diye öldürdü. Hayalet yine geldi. Annesinin yanından çıktı, ölüyü sürükleyerek.',
      boslukMetin:
        'Ceset · gece boyunca saraya doğru · ilk öldürmenin zihinde otururuşu · pişmanlık mı, soğukluk mu, korku mu? · sabah olmadan ne yaptı? · ilk katil olarak uyku.',
      sonraBaslik: 'IV.iii · Claudius önünde',
      sonraMetin:
        'Hamlet ironi maskesiyle Claudius\'un sorularına yanıt veriyor. "Polonius nerede?" — Yemekte, ama yiyen değil yenen. Soğuk delilik, tetik içte.',
      sentez:
        'Hamlet\'in ilk öldürdüğü kişi. İlk kanlı an. Bu boşlukta o ilk katilin oluşumu var.',
      altSorular: [
        {
          no: 1,
          baslik: 'Cesedi Sürüklerken',
          soru: 'Cesedi sürüklerken eline kan bulaştı mı? Ne hissetti? İlk bakışta ne düşündü?',
        },
        {
          no: 2,
          baslik: 'Cesedi Saklarken',
          soru: 'Cesedi nereye, nasıl sakladı? Bilinçli bir yer mi seçti, panik bir köşe mi?',
        },
        {
          no: 3,
          baslik: 'İlk Katil Olarak',
          soru: 'İlk öldürmenin ardından bedeninde ne değişti? Ses tonu, bakış, yürüyüş?',
        },
      ],
    },

    {
      no: 4,
      baslik: 'İngiltere Yolculuğu',
      sinif: 'Dönüşüm Boşluğu',
      konum: 'IV.iii → V.i',
      sonraSahneNo: 12,
      onceBaslik: 'IV.iii',
      onceMetin:
        'Claudius onu sürgün ediyor. R&G ile gemiye binecek. Hamlet ironiyle vedalaşır: "Haydi yola, İngiltere\'ye! Allaha ısmarladık, sevgili anamız." Hayatına dair kararı dış güçler vermiş gibi.',
      boslukMetin:
        'Gemi denize açılır · Hamlet R&G\'nin mektubunu bulur · ölüm fermanını okur · mektubu değiştirir · korsanlar saldırır · Hamlet kaçar · Danimarka\'ya geri döner. Horatio\'ya mektup yazar (IV.vi\'da okunur).',
      sonraBaslik: 'V.i · Mezarlık',
      sonraMetin:
        'Hamlet farklıdır. "Bütün mesele hazır olmakta." Yorick\'in kafatasıyla felsefe konuşur. Ophelia\'nın cenazesinde patlama bile başka tonlu — ölümle daha tanıdık.',
      sentez:
        'Beş boşluğun en büyüğü. Hamlet\'in en büyük dönüşümü burada — sürgüne giden Hamlet ile dönen Hamlet aynı kişi değil.',
      altSorular: [
        {
          no: 1,
          baslik: 'Mektubu Okuduğunda',
          soru: 'Mektubu okuduğunda ilk hissi neydi? Şaşırma yok — sezmişti. Ama hangi sözcük durdu damağında?',
        },
        {
          no: 2,
          baslik: 'R&G Kararı',
          soru: 'R&G\'nin ölümüne karar verirken neye dayandı? Vicdan? İntikam? Yoksa oyun gereği?',
        },
        {
          no: 3,
          baslik: 'Geri Dönüş',
          soru: 'Geri dönüş yolunda kim olarak döndüğünü ne zaman anladı? Bir an, bir kelime, bir tanıklık?',
        },
      ],
    },

    {
      no: 5,
      baslik: 'Düello Öncesi',
      sinif: 'Eşik Boşluğu',
      konum: 'V.ii(A) → V.ii(B)',
      sonraSahneNo: 14,
      onceBaslik: 'V.ii(A)',
      onceMetin:
        'Hamlet Horatio\'ya R&G hikâyesini anlattı, düello davetini kabul etti. "Serçenin ölmesinde bile bir bildiği vardır kaderin." İçsel barış başladı. Osric çıktı, hazırlık vakti.',
      boslukMetin:
        'Hazırlık · belki yalnız bir an · belki Horatio ile yol · Annesini düşünmek · Babasını · Ophelia\'yı · "Bu olabilirdi yaşamım" anı · kılıcı seçme · salona girme nefesi.',
      sonraBaslik: 'V.ii(B) · Düello',
      sonraMetin:
        'Düello salonu. Tüm saray. Hamlet Laertes\'le yüzleşir, özür diler. Düello başlar. "Üst tarafı… sessiz bir dünya."',
      sentez:
        'Hamlet bilmiyor ki ölecek. Ama bedeni biliyor olabilir. Bu son boşluk en kısa boşluk — ama belki en yoğun.',
      altSorular: [
        {
          no: 1,
          baslik: 'Yalnız Bir An',
          soru: 'Salona girmeden önce yalnız bir an oldu mu? Pencereden mi baktı, aynaya mı?',
        },
        {
          no: 2,
          baslik: 'Annesini Düşündü mü',
          soru: 'Annesini düşündü mü? Hangi anısı geldi — çocukluktan, son sahnelerden?',
        },
        {
          no: 3,
          baslik: 'Son Nefes',
          soru: 'Salona girdiği son nefes — derin mi, yüzeysel mi? Kılıç ağırlığı mı tanıdık geldi, yoksa bir yabancılık mı?',
        },
      ],
    },
  ],

  // ─── ESKİ 14 SAHNE — RETIRE EDİLDİ (Sprint 4) ────────────────────────────
  // UI'da artık kullanılmıyor. Veri korundu — geri alınmak istenirse referans.
  // Yeni timeline: sahnelerWorkbook (yukarıda).

  sahneler: [
    {
      id: '1.2-acilis', perde: 1,
      label: 'Yas elbiseleriyle saraya geliş',
      desc: 'Hamlet siyah giysilerle salondadır. Herkes Claudius ve Gertrude\'un düğününü kutluyor. O sessiz.',
      icDurum: '"Bu çok hızlı oldu" — yastan, ihanet duygusundan, kimseye söyleyemediği bir öfkeden oluşuyor.',
      bosluk: 'Salondan ayrıldığı an — ilk kez tek başına kaldığında ne hissetti?',
      travmaKategorileri: ['kayip', 'ihanet'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: '1.2-monolog', perde: 1,
      label: '"O, that this too solid flesh"',
      desc: 'İlk monoloğu. Annenin evliliğini öğreniyor (zaten biliyordu ama dile geliyor). İntiharı düşünüyor.',
      icDurum: '"Tanrı kendini öldürmeyi yasaklamasaydı..." Bu cümle tehlikeli yakınlıkta.',
      bosluk: 'Monolog bittiğinde — ne yapacaktı? Horatio gelmeseydi nereye giderdi?',
      travmaKategorileri: ['ihanet', 'ahlaki_yara', 'varolussal'], travmaSeviyesi: 2,
      kritikMi: false,
    },
    {
      id: '1.4', perde: 1,
      label: 'Hayaletle karşılaşma',
      desc: 'Gece nöbetinde. Soğuk. Hayalet beliriyor — babasının suretinde. Onu izlemesini istiyor.',
      icDurum: 'Korku, umut, doğrulanma arzusu. "Demek ki delirmemişim — gerçekten yanlış olan bir şey var."',
      bosluk: 'Hayaleti takip ederken arkadaşlarını bırakırken bedeninde ne değişti?',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 2,
      kritikMi: true,
    },
    {
      id: '1.5', perde: 1,
      label: 'Hayalet cinayet gerçeğini söyler',
      desc: '"Beni öldürdü amcan. Kulağıma zehir döktü." İntikam emri. "Beni hatırla."',
      icDurum: 'Sezdiği şey doğrulandı. Ama şimdi bir görev var — taşıyabileceğinden emin değil.',
      bosluk: 'Hayalet kaybolduktan sonra, arkadaşlarına dönmeden önceki dakikalar.',
      travmaKategorileri: ['siddet', 'ihanet', 'zihinsel_kirilma'], travmaSeviyesi: 2,
      kritikMi: true,
    },
    {
      id: '2.2', perde: 2,
      label: 'Delilik performansına başlar',
      desc: 'Polonius onu deli sanıyor. Hamlet bu rolü kullanıyor. Rosencrantz ve Guildenstern geliyor.',
      icDurum: 'İçinde gerçek bir kırılma var ama kontrolü elde tutmaya çalışıyor. Performansla gerçek arası belirsizleşiyor.',
      bosluk: '"Antic disposition" kararını ne zaman verdi? Ne kadar bilinçli?',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: '3.1-monolog', perde: 3,
      label: '"To be or not to be"',
      desc: 'Yalnız sahne. Var olmak ile yok olmak arasında düşünüyor. Ölüm korkusu, eylem felci, "the undiscovered country".',
      icDurum: 'Bu performans değil. Hamlet\'in en dürüst anı. Kimse izlemiyor (sandığı). Ama Polonius ve Claudius dinliyor.',
      bosluk: 'Monoloğa başlarken son düşüncesi neydi? Hangi an "yapmak" düşüncesinden "düşünmek" düşüncesine geçti?',
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 2,
      kritikMi: true,
    },
    {
      id: '3.1-ophelia', perde: 3,
      label: 'Ophelia\'yı reddetme',
      desc: '"Manastıra git." Ophelia hediyelerini iade ediyor. Hamlet sertleşiyor — gözetlendiklerinden şüphelenmeye başlıyor.',
      icDurum: 'Ophelia\'yı korumak için mi, ona güvenmediği için mi, Claudius\'u zorlamak için mi? Üçü de.',
      bosluk: 'Ophelia ağlayarak çıktıktan sonra — ne hissetti? Pişmanlık? Soğuk planlama?',
      travmaKategorileri: ['kayip', 'ahlaki_yara'], travmaSeviyesi: 2,
      kritikMi: false,
    },
    {
      id: '3.2', perde: 3,
      label: 'Fare Kapanı — oyun içinde oyun',
      desc: 'Tiyatro topluluğu cinayetin canlandırmasını oynuyor. Claudius huzursuzlanıyor, ayağa kalkıyor.',
      icDurum: 'Doğrulama anı. "Hayalet doğru söylemiş." Ama bu doğrulama bir rahatlama mı, yoksa görevi reddedemeyeceğinin kanıtı mı?',
      bosluk: 'Claudius çıktıktan sonra Horatio\'yla baş başa kaldıkları an.',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: '3.3', perde: 3,
      label: 'Claudius\'u dua ederken öldürmekten vazgeçer',
      desc: 'Claudius diz çökmüş, dua ediyor. Hamlet kılıcını çekiyor — ama indirmiyor. "Cennete göndermem onu."',
      icDurum: 'Mantık mı, korku mu, ahlak mı? "Şimdi öldürürsem ruhu kurtulur." Bu akıl yürütme mi, yoksa bahane mi?',
      bosluk: 'O odadan çıktıktan sonra — pişman mı, rahatlamış mı?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 2,
      kritikMi: true,
    },
    {
      id: '3.4-polonius', perde: 3,
      label: 'Polonius\'u perdenin arkasından öldürür',
      desc: 'Annesinin odası. Perdenin arkasında bir hareket. "Bir fare!" Kılıcı saplıyor. Polonius yere düşüyor.',
      icDurum: 'Refleks mi, niyet mi? Claudius sandı mı? Bilmiyor — hareket eyleme dönüştü, ilk kez.',
      bosluk: 'Perdeyi açtığında — Polonius olduğunu görmek nasıl bir şey? Hangi sürede tepki verdi?',
      travmaKategorileri: ['siddet', 'ahlaki_yara'], travmaSeviyesi: 3,
      kritikMi: true,
    },
    {
      id: '3.4-anne', perde: 3,
      label: 'Anneyle yüzleşme, hayalet tekrar',
      desc: 'Polonius yerde. Hamlet anneye babasının portresini gösteriyor, Claudius\'la kıyaslıyor. Hayalet beliriyor — sadece o görüyor.',
      icDurum: 'Annesini sarsıyor ama bir yandan yıkılıyor. Hayalet onu kınıyor — "annene yumuşak ol".',
      bosluk: 'Hayalet kaybolduktan sonra, anneyle son sözleri. Polonius\'un cesedini sürüklerken aklında ne vardı?',
      travmaKategorileri: ['zihinsel_kirilma', 'ihanet'], travmaSeviyesi: 2,
      kritikMi: false,
    },
    {
      id: '4.4', perde: 4,
      label: 'İngiltere yolu, Fortinbras ordusu',
      desc: 'Sürgüne gidiyor. Yolda Fortinbras\'ın ordusunu görüyor — küçük bir toprak parçası için ölmeye giden askerler.',
      icDurum: '"Onlar bir hiç için ölüyor, ben her şey için tereddüt ediyorum." Utanç ve kararlılık karışımı.',
      bosluk: 'O monoloğun sonu — Danimarka\'ya geri dönme planı hangi an oluştu?',
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 1,
      kritikMi: true,
    },
    {
      id: '5.1', perde: 5,
      label: 'Mezarlık — Yorick, Ophelia cenazesi',
      desc: 'Mezarlıkta. Yorick\'in kafatasını alıyor — çocukluğunun soytarısı. Ardından bir cenaze geliyor — Ophelia\'nın.',
      icDurum: 'Ölümle artık dost. Kafatası elinde, hiçliği kabulleniyor. Sonra Ophelia\'nın cesedi — kabullenmenin sınırı.',
      bosluk: 'Laertes\'le mezarın içinde kavga ettiğinde — gerçekten Ophelia için mi, yoksa Laertes\'le karşılaşmaya mı kavga ediyordu?',
      travmaKategorileri: ['kayip', 'varolussal'], travmaSeviyesi: 3,
      kritikMi: true,
    },
    {
      id: '5.2', perde: 5,
      label: 'Düello, ölüm, "the rest is silence"',
      desc: 'Düello hile. Zehirli kılıç, zehirli içecek. Anne içiyor. Laertes ölüyor. Claudius öldürülüyor. Hamlet de ölüyor.',
      icDurum: 'Sonunda eylem — ama tüm anlamlar dağıldıktan sonra. Sessizlik bir kayıp değil, bir kabul.',
      bosluk: 'Horatio\'ya "yaşamı anlat" derken — kendi hikayesini nasıl bir adam olarak hatırlanmak istiyor?',
      travmaKategorileri: ['siddet', 'varolussal'], travmaSeviyesi: 3,
      kritikMi: true,
    },
  ],

  // ─── ESKİ BOŞLUKLAR — RETIRE EDİLDİ (Sprint 4) ───────────────────────────
  // 12 alanlı eski yapı UI'da artık kullanılmıyor. Yeni 5 boşluk + 15 alt-soru:
  // boslukSet (yukarıda). Veri korundu — geri alınmak istenirse referans.

  bosluklar: [
    {
      id: 'b-pre-1',
      tip: 'pre',
      konum: 'Pre-senaryo',
      baslik: 'Wittenberg Yılları',
      kisaAciklama: 'Felsefe öğrencisi Hamlet — henüz prens olmadığı zamanlar.',
      uzunAciklama:
        "Wittenberg'de felsefe okuyor. Horatio orada arkadaşı. Babası kral, ama o şu an öğrenci. Hangi kitapları okuyor? Hangi sorular onu uyutmuyor? Bu Hamlet henüz babasının ölümüyle kırılmamış.",
      sorular: [
        'Wittenberg\'de en çok hangi filozofu okuyor olabilir?',
        'Horatio ile ilk nasıl tanıştılar?',
        'Eve döndüğünde özlediği şey neydi — sarayı mı, ailesini mi?',
        'Hangi düşünceyle yatıyor, hangi düşünceyle uyanıyor?',
        'O Hamlet\'in gülüşü nasıldı?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-pre-2',
      tip: 'pre',
      konum: 'Pre-senaryo (yakın)',
      baslik: 'Babanın Ölümü ve Cenaze',
      kisaAciklama: 'Wittenberg\'den çağrı, eve dönüş, cenaze günleri.',
      uzunAciklama:
        "Haber Wittenberg'e geldi. 'Baban öldü.' Yola çıktı. Eve vardığında cenaze hazırlıkları başlamış. Annesi ağlıyor. Claudius yanında. Cenazeyi anlatan resmi sahne yok — ama oyuncu bunu bilmek zorunda.",
      sorular: [
        'Haberi aldığı an nerede ve ne yapıyordu?',
        'Yolda Wittenberg\'den eve gelirken aklında neler döndü?',
        'Babasının cesedini son gördüğünde — neyi söylemek isteyip söyleyemedi?',
        'Cenazede annesinin yüzüne bakabildi mi?',
        'Claudius\'u o zaman nasıl görüyordu — henüz şüphesiz mi?',
      ],
      sure: '18 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-1',
      tip: 'ara',
      konum: 'Cenaze → Düğün arası',
      baslik: 'İki Ay',
      kisaAciklama: 'Babasının ölümünden annesinin düğününe kadar geçen süre.',
      uzunAciklama:
        "İki ay. Hamlet bu sürede nerede yaşadı? Saraya mı döndü, kendi odasına mı çekildi? Annesiyle bu iki ay nasıl geçti? Düğün haberini hangi an öğrendi?",
      sorular: [
        'O iki ay içinde annesiyle hangi konuşmayı hatırlıyor?',
        'Düğün haberini öğrendiği an bedeni nereye gitmek istedi?',
        'Düğüne katılmaya nasıl ikna edildi?',
        'Wittenberg\'e geri dönmek istediğinde Claudius neden hayır dedi?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-2',
      tip: 'ara',
      konum: '1.5 → 2.2 arası',
      baslik: 'Hayaletten Sonraki Günler',
      kisaAciklama: 'Cinayet gerçeğini öğrenmesinden delilik performansına kadar.',
      uzunAciklama:
        'Hayalet onu hatırla dedi ve gitti. Hamlet ne yaptı? Kim ne sordu? Yataktan kalktığında biri miydi yoksa başka biri mi? "Antic disposition" kararı — hangi an, niye?',
      sorular: [
        'Hayaletten sonra ilk uyuyabildiği an ne zaman?',
        'Horatio\'ya tam ne anlattı, neyi sakladı?',
        '"Deli görünmem gerek" düşüncesi nereden geldi — bilinçli mi, refleks mi?',
        'Aynaya baktığında kimi gördü?',
      ],
      sure: '15 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-3',
      tip: 'ara',
      konum: '2.2 → 3.1 arası',
      baslik: 'Monoloğun Doğuş Anı',
      kisaAciklama: '"Olmak ya da olmamak" düşüncesinin başladığı an.',
      uzunAciklama:
        'Bu monolog bir günde yazılmadı. Hamlet bu soruyu çoktan içinde taşıyor. Sahnede söylediği an — sadece bir patlamanın yüzeyi. O patlama nereden geldi?',
      sorular: [
        'Bu cümleyi ilk hangi anda içinden geçirmiş olabilir?',
        'Geceleri uyumadan ölümü düşünüyor mu?',
        'Eylemsizlik korkusu mu, ölüm korkusu mu — hangisi daha güçlü?',
        'Bu monoloğa başladığında bedeni nerede — duruyor mu, yürüyor mu, oturuyor mu?',
      ],
      sure: '15 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-4',
      tip: 'ara',
      konum: '3.1 → 3.2 arası',
      baslik: 'Ophelia\'dan Fare Kapanına',
      kisaAciklama: 'Ophelia\'yı reddedişten oyunun gösterimine kadar.',
      uzunAciklama:
        'Ophelia\'yı sertçe reddetti. O ağlayarak çıktı. Birkaç saat sonra tiyatrocularla Claudius\'un önünde oyun oynayacak. Bu iki an arasında nerede oldu?',
      sorular: [
        'Ophelia\'nın yüzü hâlâ aklında mı, bastırdı mı?',
        'Tiyatroculara satırları öğretirken — kendi sesi miydi yoksa karakteri mi?',
        'Oyun başlamadan önce Horatio\'ya ne fısıldadı?',
        'Claudius\'un yüzünü gözleyeceğini biliyor — gerçekten kanıt mı arıyor, yoksa bahane mi?',
      ],
      sure: '12 dk',
    },
    {
      id: 'b-5',
      tip: 'ic',
      konum: '3.3 odasının içi',
      baslik: 'Kılıcı Çekti, İndirmedi',
      kisaAciklama: 'Claudius\'u öldürmek üzereyken duraklama anı.',
      uzunAciklama:
        'Claudius dua ediyor. Sırtı dönük. Hamlet kılıcı çekiyor. Bir an. İki an. Sonra "Hayır" diyor. O bir-iki an çok büyük. O sürede zihninde ne oldu?',
      sorular: [
        'Kılıç havadayken — kolu titriyor muydu?',
        'Claudius\'un sesini duyuyor mu, yoksa bütün ses kesildi mi?',
        '"Cennete göndermem" gerekçesi gerçek mi, yoksa kendine söylediği bir hikaye mi?',
        'Kılıcı indirip dönerken — utanç mı, rahatlama mı, öfke mi?',
      ],
      sure: '20 dk',
      travmaSeviyesi: 3,
    },
    {
      id: 'b-6',
      tip: 'ic',
      konum: '3.4 perdenin arkası',
      baslik: 'Perdenin Arkasında Bir Hareket',
      kisaAciklama: 'Polonius\'u öldürdüğü an — kim olduğunu bildi mi?',
      uzunAciklama:
        '"Bir fare!" diye bağırıyor ve kılıcı saplıyor. Bu refleks mi, niyet mi? Claudius olduğunu sandı mı, yoksa yapmaya gerçekten karar verdiği zamandı mı?',
      sorular: [
        'Perdenin arkasından gelen sesi duyduğu an, ilk düşüncesi neydi?',
        '"Bir fare" derken — gerçekten Claudius mu sanıyor?',
        'Kılıcı sapladığı an — annesinin bakışını gördü mü?',
        'Polonius olduğunu öğrendiğinde, ilk dakikadaki sessizlikte ne vardı?',
      ],
      sure: '20 dk',
      travmaSeviyesi: 3,
    },
    {
      id: 'b-7',
      tip: 'ara',
      konum: '4.4 → 5.1 arası',
      baslik: 'Yolculuk ve Geri Dönüş',
      kisaAciklama: 'İngiltere yolu, korsanlar, Danimarka\'ya geri dönüş.',
      uzunAciklama:
        'Gemiye bindi. Rosencrantz ve Guildenstern\'in mektubunu değiştirdi — onları ölüme yolladı. Korsanlar gemiyi bastı. Geri döndü. Bu yolculukta kimdi?',
      sorular: [
        'Mektubu değiştirirken — bu bir refleks mi, hesaplama mı?',
        'Rosencrantz ve Guildenstern\'in yaşayacağı son anı düşündü mü?',
        'Korsanlar saldırdığında — kaçtı mı yoksa savaştı mı?',
        'Danimarka\'ya geri dönerken hangi Hamlet geri döndü?',
      ],
      sure: '15 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-8',
      tip: 'ara',
      konum: '5.1 → 5.2 arası',
      baslik: 'Mezarlıktan Saraya',
      kisaAciklama: 'Ophelia cenazesinden düello sahnesine.',
      uzunAciklama:
        'Ophelia\'nın mezarında Laertes\'le kavga etti. Sonra saraya döndü. Horatio\'yla son uzun konuşmaları orada. Düello teklifini kabul etti. Niye?',
      sorular: [
        'Ophelia\'nın mezarından çıktığında ilk gittiği yer neresi?',
        'Horatio\'ya o gece ne anlattı?',
        'Düello teklifini kabul ederken bunun bir tuzak olabileceğini biliyor muydu?',
        'O gece uyudu mu? Uyuduysa ne gördü?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-9',
      tip: 'ic',
      konum: '5.2 düello içi',
      baslik: 'Annenin Zehri İçtiği An',
      kisaAciklama: 'Düello sırasında, Gertrude kupayı içtiğinde Hamlet\'te ne oldu?',
      uzunAciklama:
        'Düello sürüyor. Anne kupayı içiyor — Claudius yasaklıyor ama içiyor. Hamlet bunu görüyor. O an ne anladı, ne biliyordu, ne yapamayacağını biliyordu?',
      sorular: [
        'Annesinin kupayı içtiğini gördüğünde — ilk içgüdü neydi?',
        'Claudius\'un yasakladığını duyduğunda zehirli olduğunu hemen anladı mı?',
        'Anne yere yığılırken kollarına atmak için yöneldi mi?',
        'O an artık bir şey yapamayacağını anladığında — bedeni nasıl tepki verdi?',
      ],
      sure: '15 dk',
      travmaSeviyesi: 3,
    },
    {
      id: 'b-post',
      tip: 'post',
      konum: 'Post-senaryo',
      baslik: '"The Rest is Silence" — Sessizliğin İçi',
      kisaAciklama: 'Ölümünden sonra zihninde kalan iz — oyuncuda devam eden.',
      uzunAciklama:
        'Hamlet öldü. "Geri kalan sessizlik." Ama oyuncu hâlâ orada. Hamlet\'i içine aldı, taşıdı. Şimdi bırakma zamanı. Bu prensin sende ne bıraktı?',
      sorular: [
        'Hamlet\'in son nefesi senin bedeninde nereye yerleşti?',
        'Onu bırakmak için hangi adımı atmak istiyorsun?',
        'Hamlet\'in sende sevdiğin yanı oldu mu? Korktuğun?',
        'Wittenberg öğrencisi mi geri döndü, yoksa biraz değişmiş biri mi?',
        '"The rest is silence" — bu sessizlik sende ne anlama geliyor?',
      ],
      sure: '15 dk',
      tipDeroling: true,
    },
  ],

  // ─── ESKİ 9 ANTRENMAN — RETIRE EDİLDİ (Sprint 4) ─────────────────────────
  // UI'da artık kullanılmıyor — Modül III · Yolculuk Modu (110 dk AI Dış Ses)
  // bunların yerini alacak. Veri korundu — gerekirse Yolculuk Modu içeriğine
  // tohumluk olarak referans alınabilir.

  antrenmanlar: [

    // EGZERSİZ 1 — Hayaletle Karşılaşmadan Önce
    {
      id: 'hayalet-oncesi',
      no: 1,
      baslik: 'Hayaletle Karşılaşmadan Önce',
      altbaslik: 'Sessizliğin egzersizi',
      sure: '15-20 dk',
      seviye: 'Giriş',
      bagliSahne: '1.4',
      travmaKategorileri: ['kayip', 'varolussal'],
      travmaSeviyesi: 1,

      girisMetni: 'Bu egzersizde Hamlet\'in hayaletle ilk karşılaşmasından önceki anına gideceğiz. Hamlet henüz konuşmuyor — sadece bekliyor. Senin yapacağın da bu: Sessizliği taşımak.',

      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Hamlet şu an nerede? Hayal et — ama resimden değil, içeriden. Mekanı duy, kokla, hisset.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Tekrar gözlerini kapat. O mekanda saat kaç? Hava nasıl? Bedeninin neresi soğuk, neresi sıcak?',
          soru: 'Saat, hava ve bedensel duyumlar',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Gözlerini kapatma bu sefer. Ayağa kalk. Hamlet bu anda nasıl duruyor? Sen tarif etme — bedeninde dene. Ağırlığın nerede? Kolların ne yapıyor? Bakışın? Birkaç deneme yap. Doğru olanı bedenin söyleyecek.',
          soru: 'Hamlet\'in postürü nasıl?',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'O postürde dur ya da otur. Babasının kaybı, annesinin hızla amcasıyla evlenmesi, taht değişmiş, düzen bozulmuş, surun duvarlarında fısıltılar dolaşıyor. Sen yalnızsın, henüz hiçbir şey görmedin. Sadece hissediyorsun. Bedeninde bu bekleyişi en yoğun nerede hissediyorsun?',
          soru: 'O nokta neresi?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'O nokta bir renge dönüşürse, hangi renk olur? Şekli nasıl? Donmuş mu, hareket eden mi?',
            isitsel:   'O nokta bir sesle konuşsa, neye benzer? Yüksek mi, alçak mı? Sürekli mi, kesikli mi?',
            kinestetik:'O noktaya ağırlık versen, ne kadar ağır olur? Hangi dokuda? Sıcak mı, soğuk mu?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Az önce nöbetçi asker Horatio sana şöyle demişti: "Babanızın hayaletine benziyor, prens." Sen henüz cevap vermedin. Sadece dinledin ve geldin buraya. Şimdi o cümleyi içinde tekrarla. Bedenin nasıl tepki veriyor?',
          soru: 'Yansıma',
        },
        {
          no: 8,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını yüksek sesle söyle. Buradasın. Hamlet\'in o anı içinde — ama sen şimdi kendine döndün. Bir an öylece otur.',
        },
      ],
    },

    // EGZERSİZ 2 — Hayaletle Görüştükten Sonra
    {
      id: 'hayalet-sonrasi',
      no: 2,
      baslik: 'Hayaletle Görüştükten Sonra',
      altbaslik: 'Sırrın bedenine yerleşmesi',
      sure: '20-25 dk',
      seviye: 'Temel',
      bagliSahne: '1.5',
      travmaKategorileri: ['kayip', 'ihanet', 'varolussal'],
      travmaSeviyesi: 2,

      girisMetni: 'Bu egzersizde Hamlet\'in babasının hayaletiyle görüşmesinden hemen sonraki anına gideceğiz. Artık her şey değişti. Bir gerçekle yüzleştin — ama bu gerçek görünmeyen bir yerden geldi. Hayaletin söylediklerinin zihninde fırtına yarattığı an. Ne yapacağını bilmiyorsun. Ama artık hiçbir şey eskisi gibi olmayacak.',

      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Az önce hayalet kayboldu. Sen neredesin? Az önce duvarın üstündeydin, şimdi nereye gittin? Tek başına mısın?',
          soru: 'Şu an neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Hayalet sana çok şey söyledi. Babanın katili, annenin şu anki eşi olan amcanın. Bu bilgiyle şimdi yalnız kalıyorsun. Bedeninde nereye yerleşti bu bilgi?',
          soru: 'Bilgi bedenin neresinde?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Gözlerini aç, ayağa kalk. Bu yeni bilgi senin postürünü değiştirdi mi? Az önceki bekleyiş postüründen farklı mı? Dene — eski postürünü hatırla, sonra şimdiki bedeninde ne değişti, fark et.',
          soru: 'Postürdeki değişim',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Hayalet sana şöyle dedi: "Hatırla beni." Bu cümleyi içinde tekrarla. Sadece dinle, henüz dışarı çıkarma. Sözlerin henüz zihninde, ama hislerin çoktan bedeninde.',
          soru: 'Bu cümle sende ne uyandırıyor?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Bu sırrı bir görüntüye dönüştürsen, neye benzer? Bir sis mi, bir alev mi, bir kanlı bıçak mı, bir mektup mu?',
            isitsel:   'Bu sır içinde bir sesle yankılansa, hangi tonla? Hayaletin sesi mi, kendi sesin mi, başka bir ses mi?',
            kinestetik:'Bu sırrı bir cisme dönüştürsen, nasıl bir ağırlığı olurdu? Bedenin neresinde taşırdın? Cebinde mi, omzunda mı, midende mi?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Birazdan Horatio ve Marcellus seni bulacak. Onlara her şeyi anlatacak mısın, sır olarak mı tutacaksın? Henüz karar vermek zorunda değilsin — ama bedeninde hangi tarafa eğildiğini fark et.',
          soru: 'Bedenin sana ne söylüyor?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şimdi içinden geçen ilk cümleyi sesli ya da sessiz söyle. Hamlet olarak. Ne ilk geliyor ağzına?',
          soru: 'İlk cümlen',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Sırrı içinde tut ama bedenine kendi adınla geri dön. Adını yüksek sesle söyle. Buradasın. Su iç. Bir an öylece otur.',
        },
      ],
    },

    // EGZERSİZ 3 — "To Be or Not To Be" Monoloğu
    {
      id: 'to-be',
      no: 3,
      baslik: '"Olmak ya da Olmamak" Monoloğu',
      altbaslik: 'Varoluşsal eşik',
      sure: '25-30 dk',
      seviye: 'Orta',
      bagliSahne: '3.1',
      travmaKategorileri: ['varolussal', 'zihinsel_kirilma'],
      travmaSeviyesi: 3,

      girisMetni: 'Bu egzersizde Hamlet\'in varoluşsal sorgulamasını yalnızca felsefi değil, duyusal ve bedensel olarak deneyimleyeceğiz. Yaşamak ve ölmek arasındaki duygusal geçişleri zihninde ve bedeninde inşa edeceğiz. Bu bir karar değil — bu bir karar eşiği.',

      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz derin bir varoluşsal sorgulamaya götürecek. Eğer kendini bugün buna hazır hissetmiyorsan, başka bir gün dönebilirsin. Hazırsan rahat bir yere otur ve devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Hamlet şu an nerede? Tek başına mı, kalabalık mı? Etrafında ne var, ne yok? Sözleri henüz çıkmadı, ama içinde dönmeye başladı.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Babasının kaybı, annesinin yeni evliliği, Ophelia\'ya yaklaşıp uzaklaşma, sırtında taşıdığı sır… Tüm bu karmaşanın içinde şu an yapayalnızsın. Bedeninde bu yalnızlık nereye yerleşti?',
          soru: 'Yalnızlık nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'O yalnızlığın içinde bir cümle yaklaşıyor. Daha çıkmamış, ama yakın. Cümle giderek belirginleşiyor: "Var olmak mı? Yok olmak mı?" Bu bir soru değil — bu bir karar eşiği. O eşikte dur, henüz seçme.',
          soru: 'O eşikte ne hissediyorsun?',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Şimdi cümleyi içinde tekrarla. Hızlı değil, çok yavaş. "Var olmak mı? Yok olmak mı?" Her tekrarda bedenin farklı bir yerinde tepki verecek. Hangi yer, fark et.',
          soru: 'Hangi yer ne diyor?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Var olmak ve yok olmak arasındaki o eşik nasıl bir görüntü? Bir uçurum mu, bir kapı mı, bir sis mi, bir buz parçası mı? İki tarafı görüyor musun?',
            isitsel:   'Cümleyi tekrarladığında ses tonu değişiyor mu? Bazen çığlık, bazen fısıltı, bazen sessizlik mi? Hangi ton hangi anlamla geliyor?',
            kinestetik:'Bedeninde "var olmak" tarafı ile "yok olmak" tarafı farklı yerlerde mi? Birinde ağırlık, diğerinde hafiflik mi? Yoksa tam tersi mi?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şimdi sahneye çık. Hamlet olarak ilk satırı sesli ya da sessiz söyle: "Olmak ya da olmamak — işte bütün mesele bu." Bu cümle yazılı bir replik değil — bedeninden geliyor mu? Eğer gelmiyor, durup tekrar dene.',
          soru: 'Cümle nasıl çıktı?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Eşikte kalmak yorucu. Şu an bedeninde nereye gitmek istiyor? Hangi tarafa eğiliyor? Yok olmaya mı, var olmaya mı, yoksa eşiği daha uzun süre taşımaya mı?',
          soru: 'Bedenin ne diyor?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz yoğun bir varoluşsal yere götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Etrafındaki üç şeyi say. Hamlet\'in eşiği orada — sen burada. Su iç. Birkaç dakika öylece otur. Bugün bitince fiziksel bir aktivite — yürüyüş, duş, biriyle sohbet — yapmak iyi gelecek.',
        },
      ],
    },

    // EGZERSİZ 4 — Fare Kapanı Planı
    {
      id: 'fare-kapani',
      no: 4,
      baslik: 'Fare Kapanı Planı',
      altbaslik: 'Oyun içinde oyun, oyuncu içinde dedektif',
      sure: '20-25 dk',
      seviye: 'Orta',
      bagliSahne: '2.2 / 3.2',
      travmaKategorileri: ['ihanet', 'ahlaki_yara'],
      travmaSeviyesi: 2,

      girisMetni: 'Bu egzersizde Hamlet\'in Claudius\'u suçüstü yakalamak için plan kurduğu anına gideceğiz. Artık şüphen kesinleşti, ama elinde kanıt yok. İçinde hem öfke hem strateji var. Sahne kuruluyor, plan işliyor, ve sen bu düzenin merkezindesin.',

      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Hamlet şu an nerede? Saraya bir tiyatro kumpanyası geldi — bu senin için bir fırsat. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'İçinde iki şey aynı anda var: Babasından gelen bilgiyi doğrulama isteği ve plan kurma soğukkanlılığı. Bu ikisinin bedeninde farklı yerleri var mı?',
          soru: 'Öfke nerede, strateji nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Hamlet şimdi sıradan bir Hamlet değil — bir oyun yazarı, bir yönetmen, bir dedektif. Bu yeni rol postürünü değiştiriyor mu? Hangi kasların gerildi, hangileri rahatladı?',
          soru: 'Postürdeki değişim',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. "Fare Kapanı" adını verdiğin sahne — Claudius\'un suçunu kendi tepkisiyle açığa çıkaracak. Zihninde sahnenin kenarındasın. Işıklar yanmak üzere. Claudius yerini aldı. Sen izlemiyorsun — sen gözlüyorsun. Bedeninde bu izleme nasıl?',
          soru: 'Gözleyen Hamlet nasıl?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'O sahnede Claudius\'un yüzüne bakıyorsun. Ne arıyorsun? Bir kıpırdanma, bir titreme, bir solgunluk mu? Aklında nasıl bir görüntü var?',
            isitsel:   'Tüm sesleri keskinleştir — Claudius\'un nefesini bile duyabilecek kadar. Hangi sesi en çok dinliyorsun?',
            kinestetik:'Bedenin sahnenin neresinde? Geride mi, önde mi, gizli mi? Hareketsiz misin yoksa için kıpırdıyor mu?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Hamlet olarak zihninden geçir: "Şimdi oynamaya başlayacağız… ama ben oyun dışı kalamam." İçinde hem bir oyuncu, hem bir yönetmen, hem bir dedektif var. Bu üçünün dengesi sende nasıl?',
          soru: 'Üçü nasıl bir arada?',
        },
        {
          no: 8,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Hamlet\'in soğukkanlı stratejisi orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },

    // EGZERSİZ 5 — Claudius'a Dokunmamak
    {
      id: 'claudius-dokunmamak',
      no: 5,
      baslik: 'Claudius\'a Dokunmamak',
      altbaslik: 'Vicdan ve intikam arasındaki boşluk',
      sure: '20-25 dk',
      seviye: 'İleri',
      bagliSahne: '3.3',
      travmaKategorileri: ['ahlaki_yara', 'ihanet'],
      travmaSeviyesi: 2,

      girisMetni: 'Bu egzersizde Hamlet\'in Claudius\'u dua ederken öldürmeme kararına gideceğiz. Bu bir eylemsizlik değil, içsel bir strateji, duyusal bir fren. Öldürebilirdin. Ama yapmadın. Çünkü adalet, öfke kadar hızlı davranmaz.',

      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Hamlet şu an nerede? Az önce Claudius\'un suçunu öğrendin — Fare Kapanı işe yaradı. Şimdi onu buldun. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Claudius önünde, sırtı sana dönük. Dua ediyor. Elinde kılıç yok, savunmasız. Sen kılıcını çekmek üzeresin. Bedeninde nasıl bir hazırlık var?',
          soru: 'Bedeninin durumu',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Bu kararın bedensel hâli ne? Kolların kalkıyor mu? Ağırlığın bir bacağa mı? Nefesin tutuluyor mu?',
          soru: 'Postür',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Ama duruyorsun. Çünkü bu ölüm onun kurtuluşu olabilir mi? Cezalandırmak istedin — ama bu sahne bir cezaya mı, yoksa bir ödüle mi dönüşecek? İçinde bu sorunun ağırlığı nerede?',
          soru: 'Sorunun ağırlığı',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Claudius\'un sırtı sana dönük. Ona bakarken zihninde başka bir görüntü beliriyor mu? Babanın yüzü, Cennetin kapısı, Cehennem ateşi? Hangi imge?',
            isitsel:   'Claudius\'un dua sesini duyuyorsun. Aynı zamanda içindeki başka bir ses var. O ses ne diyor? "Şimdi öldür" mü, "Şimdi olmaz" mı, yoksa karışık mı?',
            kinestetik:'Kılıcın elinde. Ağırlığını hisset. Bu ağırlık seni ileriye mi itiyor, geriye mi tutuyor?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Hamlet olarak içinde söyle: "Hayır… Şimdi değil. Daha aşağıdayken, daha kirliyken, daha günahkârken." Bu bir mantık mı, bir bahane mi, yoksa bir vicdan kararı mı?',
          soru: 'Bu cümle ne?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şimdi geri çekil. Kılıcı kınına koy. O an bedeninde hangi duygu kaldı? Pişmanlık, rahatlama, daha derin öfke, şüphe?',
          soru: 'Geride ne kaldı?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Kılıcı bırak — ama Hamlet\'in vicdanını içinde tut. Adını söyle. Buradasın. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },

    // EGZERSİZ 6 — Fortinbras Haberi
    {
      id: 'fortinbras',
      no: 6,
      baslik: 'Fortinbras Haberi',
      altbaslik: 'Kendi hareketsizliğini görmek',
      sure: '20-25 dk',
      seviye: 'Orta',
      bagliSahne: '4.4',
      travmaKategorileri: ['ahlaki_yara', 'varolussal'],
      travmaSeviyesi: 2,

      girisMetni: 'Bu egzersizde Hamlet\'in Fortinbras\'ın ordusunun geçişiyle yüzleştiği âna gideceğiz. Başkasının cesareti, senin eylemsizliğini yüzüne vuruyor. İçinde kıyas, utanç, suçluluk ve yeni bir karar var. Kendi hareketsizliğini görmek, bazen en sert harekettir.',

      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Hamlet şu an nerede? Elsinore\'un dışında, açık bir alanda mı? Tek başına mı, askerlerle mi? Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Fortinbras, babasının onurunu savunmak için binlerce askeriyle harekete geçti. Sen hâlâ bekliyorsun. Bedeninde bu kıyas nereye değiyor?',
          soru: 'Kıyas bedeninde nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Az önce hareketsiz duruyordun. Şimdi bu haberle bedenin ne yapmak istiyor? Kıpırdamak mı, donmak mı, yer değiştirmek mi?',
          soru: 'Bedenin ne istiyor?',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. İçinde bir cümle dolaşıyor: "Ben neden duruyorum?" Bu cümleyi yargılamadan dinle. Bedenin nasıl tepki veriyor?',
          soru: 'Cümleye tepki',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Ufukta Fortinbras\'ın askerleri ilerliyor. Sen onları nasıl görüyorsun — küçücük figürler mi, kahraman bir kalabalık mı, anlamsız bir ölüm korosu mu?',
            isitsel:   'Askerlerin ayak sesi, atların nal sesi var. Ama içindeki ses ne diyor? Onların sesini bastıracak kadar yüksek mi, yoksa onların altında bir uğultu mu?',
            kinestetik:'Onlar yürüyor — sen duruyorsun. Bu fark bedeninde nereye düşüyor? Ayaklarına mı, midene mi, omuzlarına mı?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Hamlet olarak içinden geçir: "Binlerce asker… bir toprak parçası için. Peki ya ben? Babam için?" Bu cümle bir karar eşiği mi, yoksa bir suçlama mı?',
          soru: 'Bu cümle ne?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Bu sahneden çıktığında Hamlet artık aynı Hamlet değil. Senin içinde bir karar şekillenmeye başladı mı? Henüz tam değil — ama bedenin bir tarafa eğiliyor mu?',
          soru: 'Karar şekilleniyor mu?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Buradasın. Hamlet\'in soruları orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },

    // EGZERSİZ 7 — Ophelia'nın Kaybı
    {
      id: 'ophelia-kaybi',
      no: 7,
      baslik: 'Ophelia\'nın Kaybı',
      altbaslik: 'Geri dönülemeyen bir sevgi',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: '5.1',
      travmaKategorileri: ['kayip', 'ahlaki_yara'],
      travmaSeviyesi: 3,

      girisMetni: 'Bu egzersizde Hamlet\'in Ophelia\'nın ölümüne dair hissettiği anlara gideceğiz. Bu bir kayıp değil yalnızca; suçluluk, özlem, pişmanlık ve geri dönülemezlik duygusudur. Sevdiğini yitirdin — ve belki bunun bir parçası sendin.',

      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz bir yas ve sarsıntı yerine götürüyor. Hazır olduğunda devam et. Acele etme.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Hamlet şu an nerede? Tek başına mı, başkalarıyla mı? Bir mezarlığın yakınında mısın? Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Ophelia artık yok. Onu yitirdin — hem de uzaklaşarak, koparak, anlamadan. Bu kaybın bedenine ilk değdiği yer neresi?',
          soru: 'Kayıp nerede değdi?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Bu yas postürünü değiştiriyor mu? Eğilmek mi, donup kalmak mı, başını ellerine almak mı? Sen tarif etme — bedeninde dene.',
          soru: 'Yasın postürü',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Kardeşi Laertes\'in gözlerinin içine bakıyorsun. Onda seni suçlayan bir şey var. Kendine bile açıklayamadığın bir duygunun ağırlığıyla yüzleşiyorsun. Bu ağırlık bedeninde nasıl?',
          soru: 'Ağırlık nasıl?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Ophelia\'nın yüzünü zihninde görüyor musun? Hangi anı geliyor önce — son konuşmanız mı, ilk tanıştığınız mı, çiçeklerle dağıldığı an mı? Görüntü değişiyor mu?',
            isitsel:   'Onun sesi senin için neye benziyor şimdi? Hatırladığın mı, son söylediği mi, yoksa hiç söylemediği bir şey mi?',
            kinestetik:'Ona dokunduğunu hatırlıyor musun? O temas şimdi nerede yaşıyor bedeninde? Var mı hâlâ, yok mu?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Hamlet olarak içinde tekrarla: "Yüz bin kardeş kadar çok sevdim onu." Ama bu sevgi geç mi kaldı? Bu sorunun yankısı bedeninde nerede dolaşıyor?',
          soru: 'Yankı nerede?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Ophelia artık yok. Sen hâlâ buradasın. İçinde patlamamış bir ağıt gibi biriken sessiz cümleler var. Bir tanesini söyle — Hamlet olarak, ona.',
          soru: 'Ona ne söylersin?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz derin bir yas yerine götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Etrafındaki üç şeyi say. Hamlet\'in yası orada — sen burada. Su iç. Birkaç dakika öylece otur. Bugün bitince fiziksel bir aktivite — yürüyüş, duş, biriyle sohbet — yapmak iyi gelecek.',
        },
      ],
    },

    // EGZERSİZ 8 — Mezarlık Yürüyüşü
    {
      id: 'mezarlik-yuruyusu',
      no: 8,
      baslik: 'Mezarlık Yürüyüşü',
      altbaslik: 'Geçicilikle yüzleşme',
      sure: '20-25 dk',
      seviye: 'İleri',
      bagliSahne: '5.1',
      travmaKategorileri: ['kayip', 'varolussal'],
      travmaSeviyesi: 3,

      girisMetni: 'Bu egzersizde Hamlet\'in mezarlıkta yürürken, bir kafatasını elinde tutarken yaşadığı içsel duruma gideceğiz. Bu yalnızca bir ölümle yüzleşme değil; hayatın geçiciliğini, zamanın acımasız ilerleyişini ve varoluşun kırılganlığını hissetme ânı. Burada kimin sonu yok ki?',

      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz varoluşsal bir derinleşme. Hazır olduğunda devam et. Acele etme.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Hamlet bir mezarlıkta. Mekanı bul. Hangi mevsim, hangi saat, ne kadar yalnız?',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Toprak kazılıyor. Eski bir kafatası elinden alındı. Bu kafatasını tanıyorsun — Yorick. Çocukluğunun soytarısı. Eline aldığında bedenin ne yapıyor?',
          soru: 'Bedenin ne yapıyor?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Eline gerçekmiş gibi bir kafatası tut — hayalde, ya da elinde başka bir nesneyle. Kafatasını taşımak postürünü değiştiriyor mu? Ağırlık ne kadar? Boyun mu, kollar mı taşıyor?',
          soru: 'Postür ve ağırlık',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Şimdi bu kemiklere, geçmişe ve kayıplara bakıyorsun. Ama asıl baktığın şey kendi geçiciliğin. Bu geçicilik bedeninde nerede yankılanıyor?',
          soru: 'Geçicilik nerede?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Yorick\'in yüzünü hatırlıyor musun çocukken? O canlı yüzü ile şu kemikli kafatasını yan yana koyabiliyor musun zihninde? Aralarındaki dönüşümü görüyor musun?',
            isitsel:   'Yorick gülüyordu, şakalar yapıyordu. Şimdi sessizlik. Bu sessizlik bir yokluk mu, bir doluluk mu? İçindeki ses ne diyor?',
            kinestetik:'Kafatasının ağırlığı, dokusu, soğukluğu. Bedenin onu tutmaktan ne hissediyor? Ürperti mi, kabullenme mi, merak mı?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Hamlet olarak içinde söyle: "Burada kimin sonu yok ki?" Bu bir soru mu, bir kabullenme mi, bir teslimiyet mi?',
          soru: 'Bu cümle ne?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şimdi kafatasını yere bırak. Bedenine bak — sende ne kaldı? Bir hafiflik mi, bir ağırlık mı, bir sessizlik mi?',
          soru: 'Sende ne kaldı?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz geçicilik üzerine bir sorgulamaydı. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Yaşıyorsun, buradasın. Etrafındaki üç şeyi say. Hamlet\'in mezarlığı orada — sen burada. Su iç. Birkaç dakika öylece otur. Bugün bitince fiziksel bir aktivite yapmak iyi gelecek.',
        },
      ],
    },

    // EGZERSİZ 9 — Düello Öncesi Hazırlık
    {
      id: 'duello-oncesi',
      no: 9,
      baslik: 'Düello Öncesi Hazırlık',
      altbaslik: 'Sessiz son hazırlık',
      sure: '20-25 dk',
      seviye: 'İleri',
      bagliSahne: '5.2',
      travmaKategorileri: ['varolussal', 'ahlaki_yara'],
      travmaSeviyesi: 2,

      girisMetni: 'Bu egzersizde Hamlet\'in düelloya çıkmadan önceki içsel hazırlık ânına gideceğiz. Bu bir ölüm kabullenişi değil — bir hesaplaşma, bir vedalaşma, bir teslimiyet hâli. Artık her şey hazır. Şimdi olan, sadece senin içinde olan.',

      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Hamlet düello alanında. Etrafındakiler kim — Claudius, annen, Horatio? Hepsi yerinde. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Bütün yolculuk seni buraya getirdi. Hayalet, Fare Kapanı, Ophelia, mezarlık… hepsi şu âna doğru aktı. Bu âna varman bedeninde nasıl bir his?',
          soru: 'Buraya gelmek nasıl?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Düelloya çıkacaksın. Bu, kasları geren bir hazırlık mı, yoksa garip bir gevşeme mi? Bedenin kavgaya mı, kabullenmeye mi hazırlanıyor?',
          soru: 'Beden ne hazırlıyor?',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. İçinde garip bir sessizlik var. Belki bir barış. Daha önce hep sorgulayan, hep konuşan, hep çatışan Hamlet\'in içinde şimdi sadece bu sessizlik. Bu sessizlik nerede oturuyor?',
          soru: 'Sessizlik nerede?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Bu sessizliğin bir görüntüsü var mı? Bir göl yüzeyi, bir karanlık oda, bir açık ufuk, bir kapanan göz?',
            isitsel:   'Etrafta sesler var — Claudius\'un sesi, Laertes\'in nefesi, kalabalığın mırıltısı. Ama içindeki ses ne diyor? Yoksa hiç ses yok mu?',
            kinestetik:'Bedenin teslim mi, hazır mı? Kılıç elinde nasıl bir ağırlık? Kollarında titreme mi, sabitlik mi?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Hamlet olarak zihninden geçir: "Olacak olan olur." Bu bir teslimiyet mi, bir bilgelik mi, bir yorgunluk mu? Hangi tonu var sende?',
          soru: 'Cümlenin tonu',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Düelloya başlamadan önce son bir an. Bedenin son hâlini hisset. Hamlet olarak şu an söyleyebileceğin son cümle ne olurdu — sessizce, kendine?',
          soru: 'Son cümle',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Hamlet o eşikte — sen şimdi kendine döndün. Adını yüksek sesle söyle. Buradasın, yaşıyorsun. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },

  ],
};

export default hamlet;
