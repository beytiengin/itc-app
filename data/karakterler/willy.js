// data/karakterler/willy.js
// ITC Actor's Gym — Willy Loman karakter verisi

const willy = {
  // ─── KİMLİK ───────────────────────────────────────────────────────────────

  id: 'willy',
  ad: 'Willy Loman',
  oyun: 'Satıcının Ölümü',
  yazar: 'Arthur Miller',
  donem: '1949',
  tur: 'Trajedi',
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

  // ─── OYUN ÖNCESİ YAŞAM ────────────────────────────────────────────────────
  // Sahneye çıkmadan önce Willy'nin bedeninde taşıdığı geçmiş.
  // olaylar: sahneden inen, sahne dışında yaşanmış yükler.
  // iliskiler: 9 bağ (9. = Kadın, sahnede görünen ayrı bağ — R2 / Karar 22).

  oyunOncesi: {
    olaylar: [
      {
        no: 1,
        baslik: 'Babası Willy küçükken aileyi terk eder',
        sahneRef: "Ben: \"Baba çok büyük, çok başına buyruk bir adamdı.\"",
        yuk: 'Yön gösterecek bir el hiç olmadı. Boşlukta büyüyen bir adamın temel güvensizliği.',
        yansimaSorusu: "Hiç tanımadığı babanın boşluğu, Willy'nin bedeninde nereye yerleşti?",
        sahneTipi: 'kart',
        replikIzi: 'Ben: "Babam çok büyük bir adamdı, deli dolu bir adamdı." (Willy bebekken giden baba)',
        anlar: [
          { id: 'o1-a1', tip: 'catal', travmaDuyarli: false,
            soru: 'Hiç tanımadığın bir babanın yokluğu seninle büyüdü. O boşluk şimdi bedeninde nereye yerleşti?',
            secenekler: [
              { dal: 'A', baslik: 'Bir eksiklik', aciklama: 'Hep bir şeyin yarım kaldığı, doldurulamayan bir yer.', oznelSabit: 'İçimde adı konmamış bir boşlukla büyüdüm; onu hep başka şeylerle doldurmaya çalıştım.' },
              { dal: 'B', baslik: 'Bir kanıtlama açlığı', aciklama: 'Görmediğim babaya kendimi kanıtlama ihtiyacı.', oznelSabit: 'Hiç tanımadığım birine bile kendimi kanıtlamak istedim.' },
            ] },
          { id: 'o1-a2', tip: 'yazma', travmaDuyarli: false,
            soru: 'Babanı düşündüğünde aklında hiçbir görüntü yok — sadece bir yokluk. O yokluğun sesi ya da rengi olsaydı, ne olurdu?' },
        ],
      },
      {
        no: 2,
        baslik: 'Ağabey Ben Alaska/Afrika\'ya gider, "zengin olur", erken ölür',
        sahneRef: 'Ben: "On yedi yaşında ormana girdim, yirmi birinde çıktım. Ve zengindim."',
        yuk: 'Erişilemeyen başarı miti. Willy\'nin ölçtüğü ama asla varamadığı ölçüt.',
        yansimaSorusu: "Ben'in 'başardı' miti, Willy'nin kendi hayatını nasıl küçültüyor?",
        sahneTipi: 'kart',
        replikIzi: '"Ormana bir daldı — 21 yaşında o zaman — zengin bir adam olarak çıktı!" (Willy, Ben\'i anlatırken)',
        anlar: [
          { id: 'o2-a1', tip: 'catal', travmaDuyarli: false,
            soru: 'Ben\'in adı her geçtiğinde içinde bir şey kımıldıyor. O an gururla mı doluyorsun, yoksa kendini küçük mü hissediyorsun?',
            secenekler: [
              { dal: 'A', baslik: 'Gururla parlıyorum', aciklama: 'Ben benim kanım; onun başarısı bir parça benim de.', oznelSabit: 'Birinin büyüklüğüne tutunarak kendimi büyük hissettim.' },
              { dal: 'B', baslik: 'İçten içe küçülüyorum', aciklama: 'Onun yanında hep eksik kaldım; ölçüt o, ben hep altında.', oznelSabit: 'Birinin başarısını ölçü aldım ve ömrümce ona yetişemedim.' },
            ] },
          { id: 'o2-a2', tip: 'yazma', travmaDuyarli: false,
            soru: 'Ben "Gel benimle" dediğinde gitmedin. O "hayır"ı verdiğin an aklında ne vardı — korku mu, sorumluluk mu, başka bir şey mi?' },
        ],
      },
      {
        no: 3,
        baslik: 'Linda ile evlilik, Brooklyn evinin taksitle alınması',
        sahneRef: 'Linda: "Bu ay son taksiti de ödedik."',
        yuk: 'Sevgi + yük. Korunan ama aynı zamanda taşınan bir adam olmanın ağırlığı.',
        yansimaSorusu: "Linda'nın koruyuculuğu Willy için sığınak mı, yoksa yenilginin aynası mı?",
        sahneTipi: 'kart',
        replikIzi: 'Linda: "Bir de buzdolabının son taksiti kaldı…" (taksitle kurulan ev)',
        anlar: [
          { id: 'o3-a1', tip: 'catal', travmaDuyarli: false,
            soru: 'Linda yanına geldiğinde, omuzların iner mi yoksa daha mı gerilir?',
            secenekler: [
              { dal: 'A', baslik: 'İniyor', aciklama: 'Onun yanında bir an güvende hissediyorum; tek sığınağım o.', oznelSabit: 'Birinin koruması altında bir an nefes alabildim.' },
              { dal: 'B', baslik: 'Geriliyor', aciklama: 'Onun şefkati bana yenilgimi hatırlatıyor; bakışı bir ayna.', oznelSabit: 'En çok seven gözün önünde, en çok yetersiz hissettim.' },
            ] },
          { id: 'o3-a2', tip: 'yazma', travmaDuyarli: false,
            soru: 'Bu evi, bu taksitleri birlikte göğüslediniz. Linda\'ya söyleyemediğin ama içinden ona her gün söylediğin bir cümle var mı?' },
          { id: 'o3-a3', tip: 'hatira', travmaDuyarli: false,
            soru: 'Linda ile, henüz yorgun düşmemiş bir akşamı hayal et. Aranızda söze gerek olmayan bir an. O sessizliğin içinde ne vardı — sen onun yanında otururken bedenin neyi biliyordu?' },
        ],
      },
      {
        no: 4,
        baslik: 'Genç satıcı yılları — Singleman efsanesi',
        sahneRef: 'Willy: "Yeşil kadife terlikleri vardı..."',
        yuk: 'Sevilerek, tanınarak ölmenin hayali. Willy\'nin satıcılığa yüklediği tüm anlam.',
        yansimaSorusu: "84 yaşında telefonla sipariş alan o adamın görüntüsü Willy'de hangi arzuyu kışkırtıyor?",
        sahneTipi: 'kart',
        replikIzi: 'Willy: "Yeşil kadife terlikleri vardı — hiç unutmuyorum — odasından dışarı adımını atmadan tüm geçimini sağlardı." (Dave Singleman)',
        anlar: [
          { id: 'o4-a1', tip: 'catal', travmaDuyarli: false,
            soru: '84 yaşında, telefonla sipariş alan, sevilerek ölen o satıcının görüntüsü içinde hangi arzuyu kışkırtıyor?',
            secenekler: [
              { dal: 'A', baslik: 'Sevilerek var olmak', aciklama: 'Tanınmak, anılmak; bir oda dolusu insanın seni sevmesi.', oznelSabit: 'Başarıyı hep sevilmekle ölçtüm; tanınmak benim için var olmaktı.' },
              { dal: 'B', baslik: 'Onurla bitirmek', aciklama: 'Bir ömrün sonunda hâlâ ayakta, hâlâ değerli olmak.', oznelSabit: 'En çok, sonunda hâlâ işe yarar olduğumu kanıtlamak istedim.' },
            ] },
          { id: 'o4-a2', tip: 'yazma', travmaDuyarli: false,
            soru: 'O satıcı gibi anılmak istiyorsun. Senin cenazende kalabalık olsa, onların ardından söylemesini en çok istediğin cümle ne?' },
          { id: 'o4-a3', tip: 'hatira', travmaDuyarli: false,
            soru: 'Daha kimse seni yormamışken, ilk kez tek başına yola çıktığın bir sabahı hayal et. Önünde bütün bir gün, bütün bir şehir var. O sabah içinden geçen şeyi hatırla — neye inanıyordun?' },
        ],
      },
      {
        no: 5,
        baslik: 'Biff ve Happy\'nin altın çağı — çocukluk',
        sahneRef: 'Bellek: araba parlatma, futbol maçı, "Loman kardeşler!"',
        yuk: 'Kayıp cennet. Her şeyin hâlâ mümkün olduğu, Biff\'in henüz hayal kırıklığı olmadığı zaman.',
        yansimaSorusu: "O altın çocukluğun sıcaklığı, şimdiki yıkımla yan yana geldiğinde ne oluyor?",
        sahneTipi: 'kart',
        replikIzi: 'Happy/Biff: "Loman Kardeşler! — Adımızı duymayan kalmaz!" (altın çocukluk belleği)',
        anlar: [
          { id: 'o5-a1', tip: 'catal', travmaDuyarli: false,
            soru: 'O altın çocukluğun sıcaklığı şimdiki yıkımla yan yana geldiğinde içinde ne oluyor?',
            secenekler: [
              { dal: 'A', baslik: 'Sıcaklık', aciklama: 'O günler hâlâ canlı; oraya döndükçe ısınıyorum.', oznelSabit: 'En karanlık anımda bile, geçmişin sıcaklığına kaçabilirim.' },
              { dal: 'B', baslik: 'Keder', aciklama: 'O parlaklık şimdiki çöküşü daha da acıtıyor.', oznelSabit: 'En güzel günlerimi hatırlamak, kaybettiğimi daha çok acıtır.' },
            ] },
          { id: 'o5-a2', tip: 'yazma', travmaDuyarli: false,
            soru: 'O "Loman Kardeşler" çağının bir anı var ki, oradan hiç çıkmak istemezdin. Hangi an o?' },
          { id: 'o5-a3', tip: 'hatira', travmaDuyarli: false,
            soru: 'Biff\'in sana hayranlıkla baktığı bir an yarat. Henüz hiçbir şey kırılmamışken. Onun gözünde sen hâlâ dünyanın en büyük adamısın — o bakışı yüzünde hisset. Neredesiniz, ışık nasıl?' },
        ],
      },
      {
        no: 6,
        baslik: 'Boston\'da Kadın\'la ilişkinin başlaması',
        sahneRef: 'Bellek: otel odası, çoraplar, kadının gülüşü.',
        yuk: 'Yalnızlığın bahanesi. Yolda olmanın getirdiği boşluğu doldurma — ve gizlenen suç.',
        yansimaSorusu: "Yoldaki yalnızlık Willy'yi oraya iterken, içinde neyi susturuyordu?",
        sahneTipi: 'kart',
        replikIzi: 'Bellek: otel odası, çoraplar, Kadın\'ın gülüşü. (Boston\'da ilişkinin başı)',
        anlar: [
          { id: 'o6-a1', tip: 'catal', travmaDuyarli: true,
            soru: 'Willy yoldaki yalnızlığı taşırken, o odaya doğru iten şey neydi — Willy bunu yaşarken içinde neyi susturuyordu?',
            secenekler: [
              { dal: 'A', baslik: 'Görünmezliği', aciklama: 'Kimsenin onu görmediği yolların boşluğunu.', oznelSabit: 'Kimsenin beni görmediği anlarda, bir başkasının bakışına sığındım.' },
              { dal: 'B', baslik: 'Yenilgiyi', aciklama: 'Satamayan, yetişemeyen adamın utancını.', oznelSabit: 'Yetersizliğimi unutmak için, beni isteyen birine kaçtım.' },
            ] },
          { id: 'o6-a2', tip: 'yazma', travmaDuyarli: true,
            soru: 'O odadan çıkıp eve, Linda\'ya döndüğünde Willy bir şeyi yanında taşıdı. Adı konmamış o şeyi tek kelimeyle söylesen, ne derdin?' },
          { id: 'o6-a3', tip: 'iz', travmaDuyarli: true,
            soru: 'Otel odası çoktan geride kaldı. Ama bazen yıllar sonra bile bir kahkaha, bir çorap, bir kapının sesi bedende kalır. O ilişkiden geriye kalan izi yokla — olayı değil, kalıntıyı. Adını koymaya çalışma. Fark et ve bırak.' },
        ],
      },
      {
        no: 7,
        baslik: "Biff'in Boston otelinde babasını yakalaması (1932)",
        sahneRef: 'Biff: "Sahtekarsın sen!" — kapı açılır.',
        yuk: 'İlişkinin sonsuza dek kırıldığı an. Willy\'nin taşıdığı en derin ahlaki yara.',
        yansimaSorusu: "O kapının açıldığı an, Willy'nin bedeninde hâlâ kapanmadan duran şey ne?",
        sahneTipi: 'kart',
        replikIzi: 'Biff: "Sahtekârın teki olduğunu biliyorum." (Boston, kapı açılır)',
        anlar: [
          { id: 'o7-a1', tip: 'catal', travmaDuyarli: true,
            soru: 'O kapı açıldığında Biff\'in gözündeki o kahraman bir anda yok oldu. Willy bunu yaşarken bedeninde kapanmadan duran şey utanç mı, yoksa o bakışı kaybetmenin dehşeti mi?',
            secenekler: [
              { dal: 'A', baslik: 'Utanç', aciklama: 'Suçun çıplak görünmesi; kendi gözünde küçülme.', oznelSabit: 'Bir an gizlediğim şey, ömrümce taşıdığım yük oldu.' },
              { dal: 'B', baslik: 'Kaybetmenin dehşeti', aciklama: 'Oğlunun gözündeki kahraman sonsuza dek silindi.', oznelSabit: 'O an, birinin gözündeki kahramanı sonsuza dek kaybettim.' },
            ] },
          { id: 'o7-a2', tip: 'yazma', travmaDuyarli: true,
            soru: 'O an Biff hâlâ orada, kapının önünde duruyor. Willy ona tek bir şey söyleyebilseydi — açıklama değil, sadece bir şey — ne olurdu?' },
          { id: 'o7-a3', tip: 'iz', travmaDuyarli: true,
            soru: 'Kapı açıldı, o an geçti. Ama bazı bakışlar yıllar sonra bile bedenden çıkmaz. Biff\'in gözünde kalanı değil — Willy\'nin bedeninde kalanı yokla. Neresinde duruyor, ne kadar ağır. Sonra bırak.' },
        ],
      },
      {
        no: 8,
        baslik: "Boston sonrası kayıp yıllar — Biff'in dağılışı, batı, hapis",
        sahneRef: 'Bernard: "Boston\'dan döndükten sonra hiç toparlanamadı."',
        yuk: 'Babanın kendini suçladığı çöküş. Biff\'in başarısızlığını kendi günahı sayma.',
        yansimaSorusu: "Biff'in dağılışını Willy ne kadar kendi üzerine alıyor — ve bunu kime itiraf edebiliyor?",
        sahneTipi: 'kart',
        replikIzi: 'Bernard: "Boston\'dan döndükten sonra hiç toparlanamadı." (Biff\'in dağılışı)',
        anlar: [
          { id: 'o8-a1', tip: 'catal', travmaDuyarli: false,
            soru: 'Biff\'in dağılışını ne kadar kendi üstüne alıyorsun — ve bunu kime itiraf edebiliyorsun?',
            secenekler: [
              { dal: 'A', baslik: 'Hepsini üstüne alıyor', aciklama: 'O Boston günü her şeyi kırdı; suç tamamen onun.', oznelSabit: 'Birinin çöküşünü, sessizce kendi günahım olarak taşıdım.' },
              { dal: 'B', baslik: 'Reddediyor', aciklama: 'Suçu kabul etmek dayanılmaz; Biff\'in tembelliğine yüklüyor.', oznelSabit: 'Taşıyamadığım suçu, başkasının kusuru sanmayı seçtim.' },
            ] },
          { id: 'o8-a2', tip: 'yazma', travmaDuyarli: false,
            soru: 'Biff\'in toparlanamadığı yılları düşününce, kimseye söyleyemediğin bir cümle var. O cümle ne?' },
        ],
      },
    ],
    iliskiler: [
      {
        no: 1, ad: 'Linda', rol: 'EŞ',
        gecmis: 'Genç evlilik, birlikte kurulan ev, taşınan umutlar.',
        simdi: 'Onu yıllardır taşıyan, koruyan, gören. Hortumu bulan ama söylemeyen.',
        iz: 'Şefkat + sessiz çaresizlik, aynı bedende.',
        yansimaSorusu: "Linda yanına geldiğinde Willy'nin omuzları iner mi, yoksa daha mı gerilir?",
      },
      {
        no: 2, ad: 'Biff', rol: 'BÜYÜK OĞUL',
        gecmis: 'Altın çocuk, babanın gururu, futbol yıldızı.',
        simdi: 'Boston\'dan beri kırık. Willy\'nin hem en büyük umudu hem en derin yarası.',
        iz: 'Tutkulu sevgi + ihanet hissi, çözülemeyen düğüm.',
        yansimaSorusu: "Biff'e baktığında Willy hangi yaşı görüyor — 17'yi mi, şimdiki 34'ü mü?",
      },
      {
        no: 3, ad: 'Happy', rol: 'KÜÇÜK OĞUL',
        gecmis: 'Gölgede kalan ikinci oğul, hep ilgi arayan.',
        simdi: 'Babasını taklit eden, yalanları sürdüren — ama hiç gerçekten görülmeyen.',
        iz: 'Görülmek isteyen ama hep ıskalanan bir çocuk.',
        yansimaSorusu: "Happy 'Ben evleniyorum baba!' dediğinde Willy onu gerçekten duyuyor mu?",
      },
      {
        no: 4, ad: 'Ben', rol: 'AĞABEY (HAYALET)',
        gecmis: 'Ormana giren, zengin çıkan, erken ölen efsane.',
        simdi: 'Hayalet olarak ziyaret eden iç ses — başarının ve kaçışın çağrısı.',
        iz: 'Hayranlık + yetersizlik, ölçülemeyen ölçüt.',
        yansimaSorusu: "Ben 'Gel benimle' dediğinde Willy'nin içinde neresi titriyor?",
      },
      {
        no: 5, ad: 'Baba', rol: 'TERK EDEN',
        gecmis: 'Willy bebekken giden, hatırlanmayan adam.',
        simdi: 'Bir boşluk olarak var — flüt sesinin geldiği yer.',
        iz: 'Tanınmayan bir özlem, adı konmamış bir eksiklik.',
        yansimaSorusu: "Flüt sesi duyulduğunda Willy bunu fark ediyor mu, yoksa sadece bedeni mi tepki veriyor?",
      },
      {
        no: 6, ad: 'Charley', rol: 'KOMŞU',
        gecmis: 'Yıllardır komşu, sessiz sadık dost.',
        simdi: 'Sürekli borç verdiği, iş teklif ettiği — ama Willy\'nin gururuna dokunan adam.',
        iz: 'Minnet + kıskançlık + reddedilen yardım.',
        yansimaSorusu: "Charley'den parayı alırken Willy gözünü nereye kaçırıyor?",
      },
      {
        no: 7, ad: 'Bernard', rol: 'KOMŞUNUN OĞLU',
        gecmis: '"Çalışkan ama sevilmeyen" çocuk; Biff\'in zıttı.',
        simdi: 'Başarılı avukat — Willy\'nin oğlu için hayal ettiği her şey, ama Biff değil.',
        iz: 'Yanlış ölçütün canlı kanıtı; acı bir karşılaştırma.',
        yansimaSorusu: "Bernard'ın başarısı Willy'ye Biff hakkında hangi soruyu sessizce sorduruyor?",
      },
      {
        no: 8, ad: 'Howard', rol: 'PATRON',
        gecmis: 'Willy\'nin adını koyduğu, babasının şirketini devralan genç.',
        simdi: 'Onu 34 yıl sonra kovan otorite. Teyp makinesiyle oynayan, dinlemeyen.',
        iz: 'İhanet edilen sadakat; değersizleştirilen bir ömür.',
        yansimaSorusu: "'34 yılımı verdim' derken Willy aslında kime sesleniyor?",
      },
      {
        no: 9, ad: 'Boston\'daki Kadın', rol: 'GEÇMİŞTEKİ İLİŞKİ',
        gecmis: 'Yoldaki yalnızlığı dolduran, çorapları alan kadın.',
        simdi: 'Sahnede görünen bir bellek — Biff\'in keşfinin tanığı, suçun somut yüzü.',
        iz: 'Anlık teselli + ömür boyu utanç.',
        yansimaSorusu: "Kadın güldüğünde Willy'nin içinde hangi kapı kapanıyor?",
      },
    ],
  },

  // ─── AKIŞ HATLARI (Willy'ye özgü — 3 hat) ─────────────────────────────────
  // Hamlet'in 5 perde teması yerine Willy 3 akış hattıyla okunur (Miller'ın
  // lineer-olmayan yapısı). Timeline sayfası bu hatları üst-bant olarak kullanır.

  perdeTemalari: [
    { perde: 'I',   baslik: 'Sızıntı',  altyazi: 'Geçmiş şimdiye sızıyor', sahneAraligi: '1-5' },
    { perde: 'II',  baslik: 'Patlama',  altyazi: 'Bastırılan açığa çıkıyor', sahneAraligi: '6-9' },
    { perde: 'III', baslik: 'Bedel',    altyazi: 'Ödenen ve geride kalan',  sahneAraligi: '10-11' },
  ],

  // ─── SAHNELER — WORKBOOK FORMATI · 11 BİRİM (Timeline sayfası kullanır) ────
  // Orijinal oyunda numaralı sahne yoktur (Miller, sürekli akış + örülü bellek).
  // Bellek parçaları örüldükleri şimdiki birime katıldığında 11 dramatik birim
  // çıkar. 3 akış hattı: Sızıntı (1-5) · Patlama (6-9) · Bedel (10-11).
  // (Eski 14'lü `sahneler` dizisi Hamlet kalıbı artefaktıydı — aşağıda korundu,
  //  Yazarın Çerçevesi/eski sayfa için; A-4 sayfa refactor'ında retire edilecek.)

  sahnelerWorkbook: [
    {
      no: 1, yasamSirasi: 4, perde: 1, perdeRomen: 'I',
      baslik: 'Eve dönüş',
      konum: 'I. Perde · Gece',
      olay: 'Willy yola çıktı ama dönmek zorunda kaldı; arabayı sürmeyi beceremedi. Linda kapıda karşılar. Biff eve gelmiştir. "Bu sefer olmadı."',
      icsel: 'Kabul edemediği bir yorgunluk. Bedeni teslim, zihni hâlâ direnişte.',
      onerilenSicaklik: 4,
      yuk: 'Yarının hâlâ vaatle dolu olduğuna inanması gereken bir adamın, ilk kez sezdiği yenilgi.',
      sahneTipi: 'kart',
      replikIzi: 'Willy: "Ölüyorum yorgunluktan." / Linda: "Arabayı mı çarptın?" (eve dönüş, "olmadı bir şey")',
      anlar: [
        { id: 's1-a1', tip: 'catal', birlesimSahneNo: 1, travmaDuyarli: false,
          soru: 'Yola çıktın ama dönmek zorunda kaldın; araba yoldan kayıp duruyordu. Kapıdan girerken bedenin neyi itiraf ediyor, neyi reddediyor?',
          secenekler: [
            { dal: 'A', baslik: 'Yorgunluğu itiraf ediyor', aciklama: 'Beden teslim; sadece dinlenmek istiyor.', oznelSabit: 'Bedenim teslim olduğunda bile, zihnim direnmeyi sürdürür.' },
            { dal: 'B', baslik: 'Yenilgiyi reddediyor', aciklama: '"Olmadı bir şey" — hâlâ yarın var demek istiyor.', oznelSabit: 'İlk yenilgi sezgimi bile, kendime itiraf etmeyi reddettim.' },
          ] },
        { id: 's1-a2', tip: 'yazma', birlesimSahneNo: 1, travmaDuyarli: false,
          soru: '"Bu sefer olmadı" diyorsun ama içinde başka bir cümle var. Linda\'ya söylemediğin o cümle ne?' },
      ],
    },
    {
      no: 2, yasamSirasi: 1, perde: 1, perdeRomen: 'I',
      baslik: 'Parlak günler — çocukluk belleği',
      konum: 'I. Perde · Bellek',
      olay: 'Biff ve Happy küçük; araba parlatılıyor, futbol topu, "Loman kardeşler". Her şeyin hâlâ mümkün olduğu, sevilmenin başarı sandığı zaman.',
      icsel: 'Kayıp cennetin sıcaklığı — ama şimdiki yıkımın yanında acıya dönüşen.',
      onerilenSicaklik: 5,
      yuk: 'Geçmiş şimdiye sızıyor; Willy o sıcaklığa kaçtıkça şimdiki boşluk büyüyor.',
      sahneTipi: 'yuruyus',
      replikIzi: 'Willy: "İyice bastıra bastıra silin camları. Aynen böyle işte, aferin." (oğullara, araba parlatma belleği)',
      yuruyus: {
        esik: {
          komut: 'Bu bir yürüyüş. Bu sahneyi baştan sona, adım adım kuracaksın — her durakta bir an, bir seçim. Acele yok.',
          adimlar: [
            'Önce sahneyi yerleştir: neredesin, hangi mevsim, gün ışığı nasıl? Zihninde belirsin.',
            'Her durakta Willy o an bedeninin neresinde duruyor — onu fark et, sonra ilerle.',
            'Seçtiğin her şey senin olur; bu sahnede yanında kalır.',
          ],
          hitap: 'Hazır olduğunda ilk adımı at.',
          buton: 'Başlıyorum',
        },
        girisBaslik: 'Parlak günler — sahneyi kur',
        girisAciklama: 'I. perde, bellek. Araba parlatılıyor, futbol topu elden ele, "Loman kardeşler". Her şeyin hâlâ mümkün göründüğü gün. Bu sahneyi adım adım kuracaksın.',
        girisSentez: 'Bu yürüyüşte seçtiklerin senin olur; Sahne 2\'de yanında kalır.',
        gecisButonu: 'İlk durağa geç',
        cikisRitueli: 'Sahneden bir adım geri çekil. Az önce kurduğun anı bırak; nefesini ver. Şimdiki Willy\'ye dön — yanında ne kalıyor?',
        istasyonlar: [
          {
            no: 0, zamanRozet: 'Bahçe, sabah',
            acilis: 'Çocuklar küçük; güneş var, araba yıkanmayı bekliyor. Willy ceketini çıkarıyor, kollarını sıvıyor.',
            sorular: ['Bu sabahı kurarken ilk dikkatini çeken ne — ışık mı, ses mi, oğullarının yüzü mü?', 'Willy şu an bedeninin neresinde — omuzlarında mı, göğsünde mi?'],
            yazmaAlani: true, yazmaPlaceholder: 'Bu sabahta ilk gördüğüm…',
          },
          {
            no: 1, zamanRozet: 'Araba parlatılıyor',
            acilis: '"İyice bastıra bastıra silin camları. Aynen böyle işte, aferin." Oğullar bezleri kapıyor, Willy izliyor — gururlu, canlı.',
            sorular: ['Oğullarına bakarken Willy\'nin içinde ne dönüyor?'],
            catal: {
              anahtar: 's2-parlaklik', dil: 'birinci_tekil',
              etiket: 'İki yol var. Hangisi senin?',
              secenekler: [
                { deger: 'hala_orada', baslik: 'Hâlâ orada', aciklama: 'Bu an gerçek; her şey hâlâ mümkün, yıkım daha olmadı.',
                  muhur: 'Bunu unutma — en güzel anı, sanki şimdiymiş gibi yeniden yaşayabilirim.',
                  ozet: 'En güzel anı şimdiymiş gibi yaşadım.' },
                { deger: 'kaybi_biliyorum', baslik: 'Kaybı biliyorum', aciklama: 'Sıcaklığın içindeyim ama sonunu da biliyorum.',
                  muhur: 'Bunu unutma — en güzel anılarıma bile, kaybedeceğimi bilerek bakarım.',
                  ozet: 'Kaybedeceğimi bilerek baktım.' },
              ],
            },
          },
          {
            no: 2, zamanRozet: '"Loman kardeşler!"',
            acilis: 'Adınızı duymayan kalmaz havası; sevilmek başarı sanılıyor. Willy için bu an, dünyanın ona açık olduğu kanıtı.',
            sorular: ['Bu coşkuyu kurarken, Willy neye inanıyor — ve sen o inancı bedeninde nerede hissediyorsun?'],
            yazmaAlani: true, yazmaPlaceholder: 'O an Willy\'nin inandığı şey…',
          },
          {
            no: 3, zamanRozet: 'Çıkmak istemediğin an',
            acilis: 'Sahne kuruldu; içinde bir an var ki bellek seni orada tutuyor, oradan çıkmak istemiyorsun.',
            sorular: ['Hangi an o — ne görüyorsun, ne duyuyorsun? Ve neden bırakmak istemiyorsun?'],
            yazmaAlani: true, yazmaPlaceholder: 'Çıkmak istemediğim an…',
          },
        ],
      },
      anlar: [
        { id: 's2-a1', tip: 'catal', birlesimSahneNo: 2, travmaDuyarli: false,
          soru: 'Belleğe adım atıyorsun; çocuklar küçük, güneş var, top elinde. Bu sıcaklığın içine girerken bedenin neye inanıyor?',
          secenekler: [
            { dal: 'A', baslik: 'Hâlâ orada', aciklama: 'Bu an gerçek; her şey hâlâ mümkün, yıkım daha olmadı.', oznelSabit: 'En güzel anı, sanki şimdiymiş gibi yeniden yaşayabilirim.' },
            { dal: 'B', baslik: 'Kaybı biliyorum', aciklama: 'Sıcaklığın içindeyim ama sonunu da biliyorum.', oznelSabit: 'En güzel anılarıma bile, kaybedeceğimi bilerek bakarım.' },
          ] },
        { id: 's2-a2', tip: 'yazma', birlesimSahneNo: 2, travmaDuyarli: false,
          soru: 'O belleğin içinde bir an var ki oradan çıkmak istemiyorsun. Hangi an o — ne görüyorsun, ne duyuyorsun?' },
      ],
    },
    {
      no: 3, yasamSirasi: 5, perde: 1, perdeRomen: 'I',
      baslik: 'Charley\'le kart, Ben hayaleti',
      konum: 'I. Perde · Mutfak / Bellek',
      olay: 'Charley kart oynamaya gelir. Aynı anda Ben hayaleti belirir — "Ormana girdim, zengin çıktım." İki düzlem üst üste biner.',
      icsel: 'Şimdiki yardım (Charley) reddedilirken, ulaşılamayan başarı miti (Ben) çağırıyor.',
      onerilenSicaklik: 5,
      yuk: 'Gerçek dost gururuna dokunurken, ölü ağabeyin efsanesi onu hayata değil kaçışa çağırıyor.',
      sahneTipi: 'karma',
      replikIzi: 'Ben: "Ormana girdim, zengin çıktım." (Charley kart oynarken hayalet belirir, iki düzlem üst üste biner)',
      anlar: [
        { id: 's3-a1', tip: 'catal', birlesimSahneNo: 3, travmaDuyarli: false,
          soru: 'Charley karşında kart oynuyor; aynı anda Ben\'in sesi içeride çağırıyor. Şimdiki dostu duyarken ölü ağabeyi de duyuyorsun. Bu ikisinden hangisi sana daha gerçek geliyor?',
          secenekler: [
            { dal: 'A', baslik: 'Charley — şimdi', aciklama: 'Etten kemikten, karşımda; ama gururuma dokunuyor.', oznelSabit: 'Gerçek yardım gururuma dokunduğunda, onu görmezden geldim.' },
            { dal: 'B', baslik: 'Ben — çağrı', aciklama: 'Bir hayalet ama daha canlı; başarının ve kaçışın sesi.', oznelSabit: 'Beni hayata çağıran sese değil, kaçışa çağıran sese kulak verdim.' },
          ] },
        { id: 's3-a2', tip: 'yazma', birlesimSahneNo: 3, travmaDuyarli: false,
          soru: 'Ben artık bir alışkanlık — karar anlarında dönen iç ses. En son ne zaman, hangi an seni çağırdı?' },
      ],
    },
    {
      no: 4, yasamSirasi: 6, perde: 1, perdeRomen: 'I',
      baslik: 'Linda ve hortum',
      konum: 'I. Perde · Salon',
      olay: 'Linda oğullara babalarının hâlini, intihar girişimlerini, sakladığı gaz hortumunu anlatır. "Dikkat edilmesi gereken bir insan o."',
      icsel: 'Willy sahnede yok ama her cümle onun üstüne. Görülmenin hem koruması hem ağırlığı.',
      onerilenSicaklik: 6,
      yuk: 'Bir kadının taşıdığı sessiz dehşet; oğulların yüzleşmek zorunda kaldığı gerçek.',
      sahneTipi: 'kart',
      replikIzi: 'Linda: "Her gün bodruma inip o küçük lastik hortumu alıyorum, sonra geri koyuyorum… Nasıl söyleyebilirim ki bunu onun yüzüne?" (oğullara)',
      anlar: [
        { id: 's4-a1', tip: 'catal', birlesimSahneNo: 4, travmaDuyarli: true,
          soru: 'Bu sahnede Willy yok ama her cümle onun üstüne. Linda onu görüyor, koruyor, hortumu buluyor ama söylemiyor. Görülmek Willy için bir koruma mı, yoksa daha ağır bir yük mü?',
          secenekler: [
            { dal: 'A', baslik: 'Koruma', aciklama: 'Onun bakışı tek tutunduğu şey; görülmek hayatta tutuyor.', oznelSabit: 'Görülmek beni hayatta tuttu, ama bunu hiç kabul edemedim.' },
            { dal: 'B', baslik: 'Yük', aciklama: 'Görülmek demek, çöküşünün tanığı olmak demek.', oznelSabit: 'Birinin beni gördüğünü bilmek, yenilgimi gizlememi imkânsız kıldı.' },
          ] },
        { id: 's4-a2', tip: 'yazma', birlesimSahneNo: 4, travmaDuyarli: true,
          soru: 'Linda hortumu bulmuş ama hiç söylememiş. Willy bunu bilse, ona ne söylemek isterdi — ya da hangi sessizliği seçerdi?' },
      ],
    },
    {
      no: 5, yasamSirasi: 7, perde: 1, perdeRomen: 'I',
      baslik: 'Biff\'in kararı — yeni umut',
      konum: 'I. Perde · Kapanış',
      olay: 'Biff, Bill Oliver\'dan borç isteyip iş kurma planını açar. Willy birden coşar, akıl verir. Perde umutla kapanır — sahte ama gerçek bir umut.',
      icsel: 'Willy için bu plan kurtuluş; Biff için babayı yatıştırma. İki ayrı umut, aynı masada.',
      onerilenSicaklik: 5,
      yuk: 'En tehlikeli an coşkudur — çünkü düşülecek yer en yüksek oradadır.',
      sahneTipi: 'kart',
      replikIzi: 'Biff/Happy: "Bir Oliver vardı, hatırlıyor musun?" (Bill Oliver\'dan borç + iş kurma planı)',
      anlar: [
        { id: 's5-a1', tip: 'catal', birlesimSahneNo: 5, travmaDuyarli: false,
          soru: 'Biff iş kurma planını açtığında birden coştun, akıl vermeye başladın. Bu coşku, gerçek bir umut mu yoksa düşmemek için tutunduğun bir dal mı?',
          secenekler: [
            { dal: 'A', baslik: 'Gerçek umut', aciklama: 'Bu plan kurtuluş; yarın hâlâ mümkün.', oznelSabit: 'Bir umut belirdiğinde, tüm ağırlığımı ona yükledim.' },
            { dal: 'B', baslik: 'Tutunulan dal', aciklama: 'Coşmazsam çökerim; bu coşku bir savunma.', oznelSabit: 'En çok coştuğum an, aslında düşmekten en çok korktuğum andı.' },
          ] },
        { id: 's5-a2', tip: 'yazma', birlesimSahneNo: 5, travmaDuyarli: false,
          soru: 'Perde umutla kapanıyor — ama bu umut kimin? Senin kurtuluşun mu, yoksa Biff\'in seni yatıştırma çabası mı? O an gerçekten neye inandın?' },
      ],
    },
    {
      no: 6, yasamSirasi: 9, perde: 2, perdeRomen: 'II',
      baslik: 'Yeni gün — sahte umut',
      konum: 'II. Perde · Sabah',
      olay: 'Sabah. Willy iyimser; Howard\'dan New York\'ta bir masa işi isteyecek. Linda taksitlerin bittiğini söyler. Her şey düzelecek gibi.',
      icsel: 'Bir gece önceki coşkunun sabah ışığındaki kırılgan devamı.',
      onerilenSicaklik: 5,
      yuk: 'Umudun en parlak hâli, düşüşten hemen önce.',
      sahneTipi: 'kart',
      replikIzi: 'Linda: "Bu ay son taksiti de ödedik." (sabah, "her şey düzelecek")',
      anlar: [
        { id: 's6-a1', tip: 'catal', birlesimSahneNo: 6, travmaDuyarli: false,
          soru: 'Sabah ışığı; bir gece önceki coşku hâlâ üstünde. Howard\'a gidip masa işi isteyeceksin. Bu sabahki iyimserlik içinde sahici mi, yoksa kendini buna inandırıyor musun?',
          secenekler: [
            { dal: 'A', baslik: 'Sahici', aciklama: 'Bugün gerçekten değişebilir; buna inanıyorum.', oznelSabit: 'Her yeni sabah, dünün yıkımını gerçekten unutabilirim.' },
            { dal: 'B', baslik: 'Zorlanmış', aciklama: 'İnanmazsam ayakta kalamam; iyimserlik bir zorunluluk.', oznelSabit: 'İnanmak zorunda olduğum için inandım, inandığım için değil.' },
          ] },
        { id: 's6-a2', tip: 'yazma', birlesimSahneNo: 6, travmaDuyarli: false,
          soru: 'Taksitler bitti, ev artık sizin — ama içinde tuhaf bir boşluk var. O sabah aynaya baksan, kendine ne söylerdin?' },
      ],
    },
    {
      no: 7, yasamSirasi: 10, perde: 2, perdeRomen: 'II',
      baslik: 'Howard ofiste — kovulma',
      konum: 'II. Perde · Howard\'ın ofisi',
      olay: 'Willy masa işi ister; Howard teyp makinesiyle oynar, dinlemez. "34 yılımı verdim bu şirkete." Sonunda kovulur.',
      icsel: 'Bir ömrün değersizleştiği an. Yalvarma ile öfke arasında salınan beden.',
      onerilenSicaklik: 7,
      yuk: 'İhanet edilen sadakat; adını koyduğu çocuğun onu silmesi.',
      sahneTipi: 'kart',
      replikIzi: 'Willy: "34 yılımı verdim bu şirkete, Howard… Öyle portakalı yiyip kabuğunu atamazsın. İnsan meyve değildir!"',
      anlar: [
        { id: 's7-a1', tip: 'catal', birlesimSahneNo: 7, travmaDuyarli: true,
          soru: 'Howard teyple oynuyor, dinlemiyor; bir ömür değersizleşiyor. Willy bunu yaşarken yalvarma ile öfke arasında salınıyor. O an içinde hangisi ağır basıyor?',
          secenekler: [
            { dal: 'A', baslik: 'Yalvarma', aciklama: 'Hâlâ değerli olduğunu kanıtlama, kabul edilme ihtiyacı.', oznelSabit: 'Değersizleştirildiğim anda bile, kabul görmek için yalvardım.' },
            { dal: 'B', baslik: 'Öfke', aciklama: 'Adını koyduğu çocuğun onu silmesine duyulan ihanet öfkesi.', oznelSabit: 'Bir ömrümün hiçe sayıldığı an, öfkem yutkunduğum şeydi.' },
          ] },
        { id: 's7-a2', tip: 'yazma', birlesimSahneNo: 7, travmaDuyarli: false,
          soru: '"İnsan meyve değildir" diyorsun. Bu cümleyi söylerken aslında Howard\'a değil, kime sesleniyorsun?' },
      ],
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 1,
    },
    {
      no: 8, yasamSirasi: 11, perde: 2, perdeRomen: 'II',
      baslik: 'Charley ofisi + Ben\'in Alaska teklifi',
      konum: 'II. Perde · Charley\'in ofisi / Bellek',
      olay: 'Willy borç istemeye gelir; Bernard\'ın başarısıyla karşılaşır. Araya Ben\'in Alaska teklifini reddettiği bellek girer — "Gelseydim her şey farklı olurdu."',
      icsel: 'Bernard, Biff için hayal ettiği her şeyin canlı kanıtı. Ben, seçmediği yolun hayaleti.',
      onerilenSicaklik: 6,
      yuk: 'Yanlış ölçütle ölçülen bir hayatın, geç gelen "ya seçmeseydim" pişmanlığı.',
      sahneTipi: 'karma',
      replikIzi: 'Willy: "Gitmedik işte, hata ettik! Yalvardı bana o kadar, gideyim diye…" (Ben\'in Alaska teklifi, Charley ofisinde bellek)',
      anlar: [
        { id: 's8-a1', tip: 'catal', birlesimSahneNo: 8, travmaDuyarli: false,
          soru: 'Bernard\'ın başarısı tam karşında; araya Ben\'in reddettiğin Alaska teklifi giriyor. İki düzlem birden: "keşke Biff de böyle olsaydı" ve "keşke o yolu seçseydim." Hangi pişmanlık daha derin?',
          secenekler: [
            { dal: 'A', baslik: 'Biff için', aciklama: 'Bernard, oğlum için hayal ettiğim her şey; ama Biff değil.', oznelSabit: 'Oğlumu yanlış bir ölçütle ölçtüm ve ikimizi de kaybettim.' },
            { dal: 'B', baslik: 'Kendi yolu için', aciklama: 'Ben\'in çağrısını reddettim; o yol açık kalsaydı her şey farklı olurdu.', oznelSabit: 'Seçmediğim yol, ömrümce "ya gitseydim" diye içimi kemirdi.' },
          ] },
        { id: 's8-a2', tip: 'yazma', birlesimSahneNo: 8, travmaDuyarli: false,
          soru: 'Charley sana iş teklif ediyor ama alamıyorsun; borç istiyorsun ama gözünü kaçırıyorsun. O an gururunla aranızda geçen sessiz pazarlık ne?' },
        { id: 's8-a3', tip: 'sessizbilgi', birlesimSahneNo: 8, travmaDuyarli: false,
          soru: 'Bernard konuşuyor — kimse suçlamıyor, kimse hüküm vermiyor. Ama bazı cümleler insanın içinde yıllarca kalır. Bu konuşmadan sonra Willy\'nin içine yerleşen sessiz bilgiyi fark et. Adını koyma, savunma. Sadece orada olduğunu gör — sonra bırak.' },
      ],
    },
    {
      no: 9, yasamSirasi: 12, perde: 2, perdeRomen: 'II',
      baslik: 'Frank\'s Chop House + Boston otel belleği',
      konum: 'II. Perde · Lokanta / Boston belleği',
      olay: 'Lokantada Biff gerçeği söylemeye çalışır; Willy dinleyemez ve Boston otelindeki belleğe düşer — Kadın, çoraplar, kapının açılışı, "Sahtekarsın sen!". Oğullar onu tuvalette bırakıp gider.',
      icsel: 'Şimdi ile geçmiş çöker; en derin ahlaki yara tam burada, herkesin içinde patlar.',
      onerilenSicaklik: 9,
      yuk: 'İlişkinin sonsuza dek kırıldığı anın, yıllar sonra aynı şiddetle yeniden yaşanması.',
      sahneTipi: 'karma',
      replikIzi: 'Biff: "Sahtekârın teki olduğunu biliyorum." (lokantada gerçek, Boston otel belleğine düşüş — Kadın, çoraplar)',
      anlar: [
        { id: 's9-a1', tip: 'catal', birlesimSahneNo: 9, travmaDuyarli: true,
          soru: 'Lokantada Biff konuşurken Willy onu artık duyamaz; zihni Boston odasına kayar. Willy bu kayışı yaşarken, dayanılmazdan kaçan mı, yoksa cezasına geri dönen mi?',
          secenekler: [
            { dal: 'A', baslik: 'Kaçıyor', aciklama: 'Biff\'in sözleri dayanılmaz; geçmiş bir sığınak gibi açılıyor.', oznelSabit: 'Dayanamadığım anlarda, zihnim beni başka bir zamana kaçırır.' },
            { dal: 'B', baslik: 'Cezasına dönüyor', aciklama: 'Aynı yarayı tekrar açmaya mahkûm; geçmiş onu çağırıyor.', oznelSabit: 'En çok kaçmak istediğim anı, en çok geri yaşarım.' },
          ] },
        { id: 's9-a2', tip: 'catal', birlesimSahneNo: 9, travmaDuyarli: true,
          soru: 'Kapı açılır, Kadın görünür, çoraplar ortaya çıkar. Willy o anı yeniden yaşarken bedeninde kapanmadan duran şey utanç mı, yoksa Biff\'in gözündeki bakışı kaybetmenin dehşeti mi?',
          secenekler: [
            { dal: 'A', baslik: 'Utanç', aciklama: 'Suçun çıplak görünmesi; kendi gözünde küçülme.', oznelSabit: 'Bir an gizlediğim şey, ömrümce taşıdığım yük oldu.' },
            { dal: 'B', baslik: 'Kaybetmenin dehşeti', aciklama: 'Oğlunun gözündeki kahraman artık yok; geri dönüşü olmayan an.', oznelSabit: 'O kapı açıldığında, birinin gözündeki kahramanı sonsuza dek kaybettim.' },
          ] },
        { id: 's9-a3', tip: 'yazma', birlesimSahneNo: 9, travmaDuyarli: true,
          soru: 'Oğullar onu tuvalette bırakıp gittiğinde Willy orada yalnız kalır. O yalnızlık anında içinden geçen tek cümle ne olurdu?' },
      ],
      travmaKategorileri: ['ihanet', 'ahlaki_yara'], travmaSeviyesi: 3,
    },
    {
      no: 10, yasamSirasi: 14, perde: 2, perdeRomen: 'III',
      baslik: 'Bahçe + Biff\'le son yüzleşme',
      konum: 'II. Perde · Gece · Bahçe ve mutfak',
      olay: 'Willy gece bahçeye tohum eker — bir şey büyütme çırpınışı. Ben\'le sigorta planını konuşur. Sonra Biff\'le son yüzleşme: Biff "Ben hiçbir şeyim baba" der, ağlar. Willy bunu yanlış anlar: "He likes me!"',
      icsel: 'Karanlıkta bir şey ekme ihtiyacı; ve oğlunun gözyaşını sevgi sanma — son yanılsama.',
      onerilenSicaklik: 8,
      yuk: 'Bir babanın, oğlunun çıplak gerçeğini bile kendi rüyasına çevirme zorunluluğu.',
      sahneTipi: 'karma',
      replikIzi: 'Willy: "Biff… seviyor beni!" (Biff "Ben hiçbir şeyim baba" deyip ağlarken, Willy yanlış anlar)',
      anlar: [
        { id: 's10-a1', tip: 'catal', birlesimSahneNo: 10, travmaDuyarli: true,
          soru: 'Bahçede karanlıkta tohum ekiyorsun — bir şey büyütme çırpınışı. Willy bu işi yaparken, geleceğe bir şey bırakma umuduyla mı, yoksa kendini bir işe yarar hissetme ihtiyacıyla mı kazıyor toprağı?',
          secenekler: [
            { dal: 'A', baslik: 'Bir şey bırakma', aciklama: 'Ardımda büyüyen bir şey kalsın; bir iz, bir hayat.', oznelSabit: 'Son anlarımda bile, ardımda bir şey büyütmeye çalıştım.' },
            { dal: 'B', baslik: 'İşe yarama', aciklama: 'Ellerim hâlâ bir şey yapabilsin; boşluğu doldurma ihtiyacı.', oznelSabit: 'Boşluğa dayanamadığımda, ellerimi bir işe verdim.' },
          ] },
        { id: 's10-a2', tip: 'catal', birlesimSahneNo: 10, travmaDuyarli: true,
          soru: 'Biff "Ben hiçbir şeyim baba" deyip ağlıyor; Willy bunu "Seviyor beni!" diye duyuyor. Willy bu anı yaşarken gerçeği duyamayacak kadar kör mü, yoksa duymamayı seçecek kadar çaresiz mi?',
          secenekler: [
            { dal: 'A', baslik: 'Göremiyor', aciklama: 'Oğlunun çıplak gerçeğini bile kendi rüyasına çeviriyor.', oznelSabit: 'Gerçeği taşıyamadığımda, onu kendi rüyama çevirdim.' },
            { dal: 'B', baslik: 'Duymamayı seçiyor', aciklama: 'Gerçeği bir an gördü ama dayanamadı, sevgiye sığındı.', oznelSabit: 'Bir an gerçeği gördüm, sonra ondan kaçıp sevgiye sığındım.' },
          ] },
        { id: 's10-a3', tip: 'yazma', birlesimSahneNo: 10, travmaDuyarli: true,
          soru: 'Biff ağlayarak ona sarıldığında Willy bir an her şeyi unutuyor. O sarılmada Willy gerçekten ne hissetti — sen onun yerinde olsan içinden ne geçerdi?' },
      ],
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 2,
    },
    {
      no: 11, yasamSirasi: 15, perde: 2, perdeRomen: 'III',
      baslik: 'Son — arabayla gidiş',
      konum: 'II. Perde · Gece · Son',
      olay: 'Herkes yattıktan sonra Willy ayaktadır. Ben\'in çağrısı, "elmas" metaforu. Arabaya biner ve sürer. Motor sesi, sonra sessizlik — yalnızca flüt sesi kalır.',
      icsel: 'Kendini bir armağana dönüştürme yanılsaması: ölümü, oğluna bırakacağı son satış.',
      onerilenSicaklik: 9,
      yuk: 'Willy\'nin sahnedeki son anı — yolculuk burada biter. (Requiem karaktere ait değil; dahil değil.)',
      sahneTipi: 'karma',
      replikIzi: 'Ben: "O elması istiyorsan ormana dalacaksın." / "Karanlık orası… ama elmas dolu." (son çağrı)',
      anlar: [
        { id: 's11-a1', tip: 'catal', birlesimSahneNo: 11, travmaDuyarli: true,
          soru: 'Herkes yattı; Ben\'in sesi "elmas" diye fısıldıyor. Willy arabaya doğru yürürken, ölümü bir armağan mı sanıyor, yoksa bir kaçış olduğunu derinde biliyor mu?',
          secenekler: [
            { dal: 'A', baslik: 'Armağan sanıyor', aciklama: 'Bu son satış; sigortayla Biff\'i kurtaracak. Trajik körlük sonuna dek sürüyor.', oznelSabit: 'Sonunda bile, yıkımımı bir armağana çevirerek inandım kendime.' },
            { dal: 'B', baslik: 'Kaçış olduğunu biliyor', aciklama: 'Boston\'ın, kovulmanın, görülmenin yükünden teslim oluş.', oznelSabit: 'Taşıyamadığım her şeyden, son bir kez kaçmayı seçtim.' },
          ] },
        { id: 's11-a2', tip: 'catal', birlesimSahneNo: 11, travmaDuyarli: true,
          soru: 'Motor çalışır, sonra sessizlik. Willy o son anı taşırken içinde ne var — yenilgi mi, bir an barış mı, yoksa Biff\'i kurtardığı yanılsaması mı?',
          secenekler: [
            { dal: 'A', baslik: 'Yenilgi', aciklama: 'Kırılmış, kovulmuş, oğlunu kaybetmiş bir adam karanlığa teslim olur.', oznelSabit: 'Sonunda, taşıdığım her şeyin altında ezildiğimi biliyordum.' },
            { dal: 'B', baslik: 'Bir an barış', aciklama: 'Biff\'in onu hâlâ sevdiğini anladığı kısa aydınlanmayla gider.', oznelSabit: 'Son anımda, birinin beni hâlâ sevdiğini bilmek bana huzur verdi.' },
          ] },
        { id: 's11-a3', tip: 'yazma', birlesimSahneNo: 11, travmaDuyarli: true,
          soru: 'Bu Willy\'nin sahnedeki son anı. Arabaya binmeden hemen önce, kimsenin duymadığı tek bir cümle söyleyebilseydi — ne derdi?' },
      ],
      travmaKategorileri: ['varolussal', 'kayip'], travmaSeviyesi: 2,
    },
  ],

  // ─── TERCİHLER · 5 SAHNELEME KARARI (Yazarın Çerçevesi sayfası) ───────────
  // Metnin en tartışmalı 5 noktası; oyuncu Yaratımsal Doğru seçer (Spine §3.11).
  // Alıntılar: Hira Tekindor çevirisi (Ocak 2026). NOT: bu çeviride Ben = "Tom Amca".

  tercihler: [
    {
      no: 1,
      konu: 'Ben (Tom Amca)',
      baslik: 'Ben gerçek bir hatıra mı, Willy\'nin miti mi?',
      cokluSecim: false,
      sahneNolari: [3, 8],
      isaretler: [
        { ref: "I. Perde · Tom Amca'nın gelişi", sahneNo: 3, metin: 'Tom (Ben) belirir; "elmas madenlerinin sahibi olarak" anılır (Tekindor s.36, s.43). Yalnız Willy\'nin dünyasında var.' },
        { ref: 'Alaska teklifi', sahneNo: 8, metin: 'Willy "abimle Alaska\'ya gitseydim… tam dahiydi o" der (s.35). Ben hep çağıran, hiç ulaşılamayan ses.' },
      ],
      sentez: 'Ben sahnede yalnız Willy\'nin zihninde belirir — kanıtlanamaz ama Willy için en gerçek figür. Oyuncu onun gerçeklik derecesine karar verir.',
      yorumlar: [
        { harf: 'A', baslik: 'Gerçek ağabey anısı', aciklama: 'Ben yaşamış, gerçek bir adam; Willy onu olduğu gibi hatırlıyor. Başarı çağrısı dışarıdan gelir.' },
        { harf: 'B', baslik: 'İçsel mit', aciklama: 'Willy başarısızlığını ölçtüğü bir put yaratmış; Ben gerçeklikten çok bir ihtiyaç. Çağrı içeriden gelir.' },
        { harf: 'C', baslik: 'İkisi birden', aciklama: 'Gerçek bir adamın anısı zamanla efsaneye dönüşmüş; oyuncu anı ile mit arasındaki kaymayı oynar.' },
      ],
    },
    {
      no: 2,
      konu: 'Geçmişe Kayışlar',
      baslik: 'Willy geçmişe nasıl kayıyor — bunama mı, bilinç akışı mı, bedensel tetik mi?',
      cokluSecim: false,
      sahneNolari: [1, 2, 9],
      isaretler: [
        { ref: '1. Perde açılış · flüt', sahneNo: 1, metin: 'Açılışta flüt melodisi; yönerge: "Willy müziği duyar ama farkında değildir" (s.3). Geçmişin kapısı sesle açılır.' },
        { ref: 'Geçiş yönergeleri', sahneNo: 2, metin: 'Flüt yaklaşır/uzaklaşır, ışık değişir; Willy şimdiyle geçmiş arasında kayar (s.4, s.11).' },
        { ref: 'Lokanta · Boston patlaması', sahneNo: 9, metin: 'En sert kayış: lokantadan Boston oteline düşer (s.111 civarı). Kontrolü tamamen kaybeder.' },
      ],
      sentez: 'Miller geçişleri flüt + ışıkla yazar, "neden"ini açıklamaz. Kayışın doğasını oyuncu seçer.',
      yorumlar: [
        { harf: 'A', baslik: 'Klinik çözülme', aciklama: 'Yaşlılık/zihinsel dağılma; kayışlar kontrolsüz, korkutucu, irade dışı.' },
        { harf: 'B', baslik: 'Bilinç akışı', aciklama: 'Bilinçli olmasa da anlamlı; bastırılan geçmiş yüzeye vuruyor, zihnin kendi mantığı var.' },
        { harf: 'C', baslik: 'Bedensel tetik', aciklama: 'Bir ses ya da nesne (flüt, çorap, çakmak) anıyı tetikler; kayış bedende başlar, sonra zihne yayılır.' },
      ],
    },
    {
      no: 3,
      konu: 'Linda + Kadın',
      baslik: 'Linda ve Kadın hattı nasıl oynanır?',
      cokluSecim: false,
      sahneNolari: [4, 9],
      isaretler: [
        { ref: 'Çoraplar', sahneNo: 4, metin: 'Linda eski çorapları yamar; Willy buna tahammül edemez (s.30, s.33-34). Çorap, Boston\'ın suçunu sahnede sessizce taşır.' },
        { ref: 'Boston · Kadın', sahneNo: 9, metin: 'Kadın belleği "tül perdenin arkasında" belirir (s.32); ifşada "Kapı çalıyor galiba!" (s.111).' },
      ],
      sentez: 'İki kadın, bir suç ekseni. Çorap motifi ikisini sessizce bağlar — Willy Kadın\'a çorap verdi, Linda\'nınkini yamatmaya kıyamaz.',
      yorumlar: [
        { harf: 'A', baslik: 'Sevgi vs bağımlılık', aciklama: 'Linda saf koruma ve sevgi; Kadın yoldaki yalnızlığın kaçışı. İki ayrı ihtiyaç.' },
        { harf: 'B', baslik: 'Suç ekseni', aciklama: 'Linda masumiyetin, Kadın günahın yüzü; oyuncu ikisini çorap motifiyle tek hatta bağlar.' },
        { harf: 'C', baslik: 'Feminist okuma', aciklama: 'Linda sistemin görünmez emekçisi; Kadın metalaşmış teselli. İkisi de Willy\'nin dünyasının kurbanı.' },
      ],
    },
    {
      no: 4,
      konu: 'İntiharın Motivasyonu',
      baslik: 'Willy neden ölür — sigorta mı, onur mu, utanç mı?',
      cokluSecim: false,
      sahneNolari: [10, 11],
      isaretler: [
        { ref: 'Hortum ve sigorta', sahneNo: 4, metin: 'Linda lastik hortumu ve sigorta meselesini açıklar (s.54-55). Ölüm aylar önce tasarlanmış.' },
        { ref: 'Elmas imgesi', sahneNo: 10, metin: 'Ben/Tom "elmas" imgesiyle çağırır (s.36, s.43); Willy ölümü Biff\'e bırakacağı somut bir armağan olarak görür.' },
      ],
      sentez: 'Metin üç gerekçeyi de besler: 20.000 dolarlık sigorta, satıcı onuru, Boston utancı. Oyuncu hangisini öne çıkarır?',
      yorumlar: [
        { harf: 'A', baslik: 'Sigorta — sevgi eylemi', aciklama: 'Biff\'e sermaye bırakmak; pratik, hesaplı bir fedakârlık. Ölüm bir yatırım.' },
        { harf: 'B', baslik: 'Onur — son satış', aciklama: 'Kendini "değerli" kanıtlama ihtiyacı; ölüm bir performans, kalabalık bir cenaze hayali.' },
        { harf: 'C', baslik: 'Utanç — kaçış', aciklama: 'Boston\'ın, kovulmanın, görülmenin yükünden kurtulma. Ölüm bir teslim.' },
      ],
    },
    {
      no: 5,
      konu: 'Son An',
      baslik: 'Willy son anında ne taşır — yenilgi mi, barış mı, yanılsama mı?',
      cokluSecim: false,
      sahneNolari: [11],
      isaretler: [
        { ref: 'Son — arabayla gidiş', sahneNo: 11, metin: 'Ben/Tom çağrısı, "elmas" imgesi, arabaya biniş; motor sesi, sonra yalnızca flüt kalır (s.138 yönergesi).' },
        { ref: 'Ağıt (yalnız sahneleme notu)', sahneNo: 11, metin: 'Linda mezar başında "Hiç borcumuz kalmadı… Özgürüz" der (s.138). NOT: Ağıt Willy öldükten sonradır — yolculuğa DAHİL DEĞİL, yalnız sahneleme yorumu.' },
      ],
      sentez: 'Willy\'nin son nefesinde taşıdığı duygu metinde yazılmaz. Yenilgi mi, kurtuluş yanılsaması mı, bir an huzur mu?',
      yorumlar: [
        { harf: 'A', baslik: 'Yenilgi', aciklama: 'Kırılmış, kovulmuş, oğlunu kaybetmiş bir adam karanlığa teslim olur. Son an çöküştür.' },
        { harf: 'B', baslik: 'Yanılsama', aciklama: 'Ben\'in elmasına, Biff\'i kurtaracağı rüyaya inanarak gider. Trajik körlük son ana taşınır.' },
        { harf: 'C', baslik: 'Bir an barış', aciklama: 'Biff\'in onu hâlâ sevdiğini anladığı kısa aydınlanmayla gider. Son an bir huzurdur.' },
      ],
    },
  ],

  // ─── BOŞLUK SETİ · 11 BOŞLUK (Karar 41 v2 — El Yazması esas görünüm) ──────
  // Sahnede temsil EDİLMEMİŞ ama bedende yaşanmış geçişler (Spine §3.13).
  //
  // SIRA = bu dizinin FİZİKSEL sırası. `no` = KALICI KAYIT KİMLİĞİ — ASLA
  // sıralama için kullanma. `boslukSet`'i `no`'ya göre sıralarsan kullanıcının
  // yazdıkları kayar/bozulur (`b.no` Supabase kayıt anahtarı; el yazmasında
  // `elyazma-bosluk-${no}`).
  //
  // El yazması her boşluğu `sonraSahneNo`'daki sahnenin ÖNÜNE yerleştirir;
  // aynı sahneye birden fazla boşluk düşerse bu dizideki fiziksel sıra geçerli
  // (özellikle Sahne 9 önü B5→B1→B10 ve Sahne 10 önü B4→B11→B8 swap'ları).
  //
  // `yasamSirasi`: bu görünüm için KULLANILMIYOR (Karar 41 v2 — sahne `no`'ya göre).
  // Veri korundu — Zaman Çizgisi / Katman 2 (oyuncunun yeniden kurduğu kronoloji)
  // için durur.

  boslukSet: [
    // ── no 6 · "Eve Dönüş — Hiç Aynı Olmayan Şey" → S1 (eski b-2) ─────────
    {
      no: 6,
      baslik: 'Eve Dönüş — Hiç Aynı Olmayan Şey',
      sinif: 'Kopuş',
      konum: 'Boston sonrası, yıllar (1932→) → Sahne 1 (eve dönüş)',
      yasamSirasi: 5,
      sonraSahneNo: 1,
      onceBaslik: 'Boston otel — ifşa',
      onceMetin:
        'Biff babasını Kadın\'la gördü, "sahtekar" dedi, kaçtı. Willy Boston\'dan Brooklyn\'e döndü.',
      boslukMetin:
        'eve giren adam · konuşmayan Biff · hiçbir şey bilmeyen Linda · göz göze gelememe · "kendini topla" diyebilmek ama nedenini söyleyememek · aylara yayılan sessizlik',
      sonraBaslik: 'Oyunun bugünü — yorgun dönüş',
      sonraMetin:
        'Sahne 1\'de Willy yine eve döner; "Ölüyorum yorgunluktan." Biff\'le aralarındaki onarılmamış soğukluk artık evin havasıdır — Sahne 1\'in altındaki görünmez yük.',
      sentez:
        'Miller, Boston ile oyunun bugünü arasındaki 15 yılı sahnede atlar; biz sadece soğukluğun sonucunu görürüz. Oyuncu bu boşlukta soğukluğun nasıl yerleştiğini kurar — Biff\'le her sahnedeki sessizlik bu doldurulamayan eve-dönüşten beslenir. Sahne 1\'deki yorgunluk fiziksel değil, bu yükün adı.',
      altSorular: [
        { no: 1, baslik: 'İlişkisel', soru: 'Boston\'dan sonra eve girdiği ilk akşam Willy, Biff\'le göz göze gelebildi mi — bakışını nereye kaçırdı?' },
        { no: 2, baslik: 'İçsel', soru: 'Linda\'nın hiçbir şey bilmediğini Willy gerçekten düşündü mü, yoksa görmemeyi mi seçti?' },
        { no: 3, baslik: 'Beden', soru: 'O dönemde aynaya baktığı bir an oldu mu — kendi yüzüne bakabildi mi, yoksa baktı da göremedi mi?' },
      ],
    },

    // ── no 7 · "Ben Hayaletinin Doğuşu" → S3 (eski b-3) ──────────────────
    {
      no: 7,
      baslik: 'Ben Hayaletinin Doğuşu',
      sinif: 'Zaman/Mekân',
      konum: 'Bellek arası → Sahne 3 (Charley/Ben hayaleti)',
      yasamSirasi: 6,
      sonraSahneNo: 3,
      onceBaslik: 'Charley\'le kâğıt oyunu',
      onceMetin:
        'Willy Charley\'le kâğıt oynar; konuşma sırasında Ben\'in hayaleti zihne girer ve sahne belleğe kayar.',
      boslukMetin:
        'gerçekte ölmüş Ben · ilk kez çağrılan ses · bilinçli mi kendiliğinden mi belirsiz · bir karar anında geri dönen abi · Willy\'nin söyleyemediğini söyleyen ağız',
      sonraBaslik: 'Ben sahnede — "elmas dolu orman"',
      sonraMetin:
        'Sahne 3\'te Ben hayaleti Willy\'ye akıl verir, başarı mitini fısıldar. Bu hayalet artık Willy\'nin bir alışkanlığı — karar anlarında dönen iç ses.',
      sentez:
        'Miller, Ben\'in hayalete dönüşme anını hiç göstermez — sahneye girdiğinde zaten yerleşik bir alışkanlıktır. Oyuncu bu boşlukta hayaletin ilk doğuşunu kurar: Ben kimin için var? Eğer Ben Willy\'nin söyleyemediklerini söylüyorsa, hayalet bir abi değil, Willy\'nin kendi sesidir. Bu, Sahne 3\'teki her Ben replikinin altına yerleşir.',
      altSorular: [
        { no: 1, baslik: 'Zamansal', soru: 'Ben öldüğünde Willy nerede, ne yapıyordu — yokluğunu ilk hangi an bedeninde hissetti?' },
        { no: 2, baslik: 'İçsel', soru: 'Hayaleti ilk çağırdığı an bilinçli bir çağrı mıydı, yoksa kendiliğinden mi geldi?' },
        { no: 3, baslik: 'İlişkisel', soru: 'Ben\'in söylediği şey gerçekten Ben\'in mi, yoksa Willy\'nin kendine söyleyemediği şey mi?' },
      ],
    },

    // ── no 3 · "Howard'la görüşme öncesi gece" → S7 (mevcut) ─────────────
    {
      no: 3,
      baslik: "Howard'la görüşme öncesi gece",
      sinif: 'Hazırlık Boşluğu',
      konum: 'Birim 5 (umut) → Birim 7 (Howard)',
      yasamSirasi: 8,
      sonraSahneNo: 7,
      onceBaslik: "Biff'in planıyla gelen umut",
      onceMetin:
        'Biff, Oliver\'a gidecek; Willy, Howard\'dan New York\'ta bir masa isteyecek. Gece yatmadan önce her şey düzelecek gibi.',
      boslukMetin:
        'Uykusuz gece · söyleyeceğini prova etme · 34 yılı, Howard\'ın babasını, adını kendi koyduğu çocuğu hatırlama · sabaha güvenle mi korkuyla mı uyanacağını bilememe.',
      sonraBaslik: "Howard'ın ofisi",
      sonraMetin:
        'Sabah Howard\'a gider. Teyp makinesi. Dinlenmez. Kovulur.',
      sentez:
        'Sahnede sabah doğrudan ofise geçeriz. Ama o gece — umutla korku arasındaki saatler — yazılmamıştır.',
      altSorular: [
        { no: 1, baslik: 'İçsel', soru: 'O gece kafasında Howard\'a hangi cümleyi kurdu — sabah hangisini söyleyebildi?' },
        { no: 2, baslik: 'Beden', soru: 'Yatağında uyumaya çalışırken bedeni neredeydi — gergin mi, ağır mı, hafif mi?' },
        { no: 3, baslik: 'İlişkisel', soru: 'Linda uyurken ona baktı mı? Baktıysa ne düşündü?' },
      ],
    },

    // ── no 2 · "Ben'in Alaska teklifini reddetme anı" → S8 (mevcut) ──────
    {
      no: 2,
      baslik: "Ben'in Alaska teklifini reddetme anı",
      sinif: 'Karar Boşluğu',
      konum: 'Ben belleği (Birim 8) — teklif anı',
      yasamSirasi: 2,
      sonraSahneNo: 8,
      onceBaslik: "Ben'in teklifi",
      onceMetin:
        'Ben, Alaska\'da topraklar olduğunu, gelirse zengin olacağını söyler. "Gel benimle Willy — orada bir adam adam gibi yaşar."',
      boslukMetin:
        'Teklifi tartma · Linda\'nın "burada her şeyin var" sözüne tutunma · satıcılık hayaline, Singleman olma rüyasına sığınma · gitmeme kararını verme anı.',
      sonraBaslik: 'Kalma kararı',
      sonraMetin:
        'Willy kaldı. Ama o "hayır" ömür boyu içinde "ya gitseydim?" olarak yaşadı.',
      sentez:
        'Sahnede Ben teklifi söyler, Willy reddeder — ama reddin İÇİ boşluktur. O "hayır"ı verirken neye tutundu?',
      altSorular: [
        { no: 1, baslik: 'İçsel', soru: '"Hayır" derken aslında neye "evet" diyordu?' },
        { no: 2, baslik: 'İlişkisel', soru: 'Kararı verirken Linda\'nın yüzüne mi baktı, Ben\'in yüzüne mi?' },
        { no: 3, baslik: 'Beden', soru: 'O kararın ağırlığı yıllar sonra hangi anlarda bedenine geri döner?' },
      ],
    },

    // ── no 9 · "Kovulduktan Sonra Sokakta" → S8 (eski b-5) ───────────────
    {
      no: 9,
      baslik: 'Kovulduktan Sonra Sokakta',
      sinif: 'Kopuş',
      konum: 'Howard ofisi → Charley ofisi arası, sokak → Sahne 8',
      yasamSirasi: 8,
      sonraSahneNo: 8,
      onceBaslik: 'Howard ofiste — kovulma',
      onceMetin:
        'Sahne 7\'de Howard, Willy\'yi kovar. "34 yıl verdim bu şirkete… insan meyve değildir." Willy ofisten çıkar.',
      boslukMetin:
        'kapanan ofis kapısı · aynı sokaklar, başka bir adam · "sen bittin"in bedene inişi · bir köşede duran nefes · Charley\'ye gitmeye karar vermeden önceki o süre',
      sonraBaslik: 'Charley ofisi — Bernard + Ben',
      sonraMetin:
        'Sahne 8\'de Willy Charley\'ye gider; Bernard\'ın "Boston\'da ne oldu?" sorusundan kaçar, Ben\'in Alaska teklifini hatırlar, parayı alır.',
      sentez:
        'Miller, Howard sahnesinden Charley sahnesine doğrudan keser; Willy\'nin sokakta yürüdüğü o ara hiç yazılmaz. Oyuncu bu boşlukta kovulmanın bedene inişini ve "Charley\'ye gitme" kararının nasıl oluştuğunu kurar. Sahne 8\'e hangi adamın girdiğini bu boşluk belirler — hâlâ ayakta mı, yoksa içten çökmüş bir gövde mi.',
      altSorular: [
        { no: 1, baslik: 'Beden', soru: 'Sokağa adım attığında Willy\'nin ilk gördüğü şey neydi — başı yukarıda mıydı, yere mi bakıyordu?' },
        { no: 2, baslik: 'İçsel', soru: 'Bir köşede durup nefes aldığı bir an oldu mu — o an kendine ne dedi?' },
        { no: 3, baslik: 'İlişkisel', soru: 'Eve dönmek aklına geldi mi — neden Linda\'nın yanına değil de Charley\'ye gitti?' },
      ],
    },

    // ── no 5 · "Kapı Çaldı — Biff'in Sesi" → S9 (eski b-1, SWAP önce) ────
    {
      no: 5,
      baslik: 'Kapı Çaldı — Biff\'in Sesi',
      sinif: 'Kopuş',
      konum: 'Boston otel içi → Sahne 9 (Boston belleği)',
      yasamSirasi: 4,
      sonraSahneNo: 9,
      onceBaslik: 'Otel odası — Kadın\'la',
      onceMetin:
        'Boston, 1932. Otel odasında Willy ve Kadın. İlişki aylardır sürüyor; bu oda Willy\'nin "yalnızım, sadece bu kadar" yalanının evi.',
      boslukMetin:
        'kapının çalışı · "açma" diyen kadın · donan beden · "Baba!" sesi · saklanabileceğini sanan o birkaç saniye · kapıya yürüyen ayaklar',
      sonraBaslik: 'Kapı açıldı — Biff içeride',
      sonraMetin:
        'Biff matematikten kalmış, babasına Boston\'a gelmiş. Kapı açılır, Kadın görünür, çoraplar görünür. "Sahtekar!" Willy yerde kalır — bu an Sahne 9\'da bellek olarak patlar.',
      sentez:
        'Miller kapı ile "sahte!" arasını kesip atlar — sahnede Genç Biff girer girmez ifşa olur. Ama o birkaç saniye (kapı çaldı → açıldı) Willy\'nin hayatındaki gerçek kırılma anı. Oyuncu burada "saklanabilir miyim?" yanılsamasının bedende nasıl çöktüğünü kurar; bu çöküş Sahne 9\'daki tüm utancın çekirdeği.',
      altSorular: [
        { no: 1, baslik: 'Beden', soru: 'Kapı ilk çaldığında Willy\'nin bedeninde ne hareket etti — nerede dondu, nerede kasıldı?' },
        { no: 2, baslik: 'İçsel', soru: 'Biff\'in sesini duyduğu an Willy bunu saklayabileceğini sandı mı — o yalanı kendine hangi cümleyle söyledi?' },
        { no: 3, baslik: 'İlişkisel', soru: 'Kadına "git" derken Willy hangi tonu kullandı — Biff onu duymasın diye mi, Kadın\'dan kurtulmak için mi?' },
      ],
    },

    // ── no 1 · "Boston otelinden Brooklyn'e dönüş" → S9 (mevcut) ─────────
    {
      no: 1,
      baslik: "Boston otelinden Brooklyn'e dönüş",
      sinif: 'Zaman/Mekân Boşluğu',
      konum: 'Boston oteli (Birim 9 belleği) → eve dönüş',
      yasamSirasi: 3,
      sonraSahneNo: 9,
      onceBaslik: 'Boston Oteli (1932)',
      onceMetin:
        'Biff kapıyı açtı, babasını Kadın\'la gördü. "Sahtekarsın sen!" Çoraplar yerde. Biff ağlayarak koridorda gitti. Willy otelde tek başına kaldı.',
      boslukMetin:
        'Otelden çıkış · trenle Brooklyn\'e dönüş yolu · aynı eve dönmek ama Biff\'le artık aynı dünyada olmamak · ne söyleyeceğini bilememek · suçun bedene yerleşmesi.',
      sonraBaslik: 'Yıllar süren sessizlik',
      sonraMetin:
        'Eve döndü, ama Biff\'le bir daha o eski hâlleri hiç olmadı. Bu dönüş yolu, sürecek kopuşun başlangıcıydı.',
      sentez:
        'Miller bu yolculuğu yazmaz — yalnızca sonucunu (kırık ilişki) gösterir. Willy o yolda ne düşündü, kendine hangi yalanı kurdu?',
      altSorular: [
        { no: 1, baslik: 'Beden', soru: 'Otel kapısı kapandığında bedeni ne yaptı — eli, omzu, nefesi nerede durdu?' },
        { no: 2, baslik: 'İçsel', soru: "Brooklyn'e varana dek kendine hangi açıklamayı kurdu? Hangi cümleyle eve girdi?" },
        { no: 3, baslik: 'İlişkisel', soru: 'Biff\'le ilk kez yeniden yüz yüze geldiğinde gözünü nereye kaçırdı?' },
      ],
    },

    // ── no 10 · "Para Almak ile Ölmek Arasında" → S9 (eski b-6, çapa düzeltildi 8→9) ──
    {
      no: 10,
      baslik: 'Para Almak ile Ölmek Arasında',
      sinif: 'Karar',
      konum: 'Charley ofis içi → Sahne 9',
      yasamSirasi: 8,
      sonraSahneNo: 9,
      onceBaslik: 'Charley parayı uzatır',
      onceMetin:
        'Sahne 8\'de Charley iş teklif eder, Willy reddeder ama haftalık parayı kabul eder. "Sen benim tek dostumsun."',
      boslukMetin:
        'cebe giren para · "tek dostum" cümlesinin ardındaki utanç · sigorta düşüncesinin ilk netleştiği an · saymaktan kaçınılan banknotlar · çıkarken bir an geri dönme isteği',
      sonraBaslik: 'Ofisten çıkış — karar tohumu',
      sonraMetin:
        'Willy ofisten çıkar. Sigorta fikri — kendi ölümünün bir "satış" olabileceği düşüncesi — belki ilk burada bedenine yerleşir; Sahne 10\'daki Ben konuşmasının ("20 bin dolar garanti") zemini.',
      sentez:
        'Charley\'den para almak sahnede vardır ama o anın iç hareketi — paranın bir dosttan değil, bir sigortadan, yani kendi ölümünden geçeceği sezgisi — sahne dışıdır. Oyuncu bu kararın tohumunu burada kurar. Willy parayı neden saymaz? Çünkü saymak, onu bir matematiğe çevirir; o matematik Sahne 10\'da "20 bin dolar"a döner.',
      altSorular: [
        { no: 1, baslik: 'Beden', soru: 'Parayı cebine koyduğu an elleri nasıldı — o parayı neden saymadı, saymamak bedeninde neye benziyordu?' },
        { no: 2, baslik: 'İlişkisel', soru: '"Tek dostum" derken Willy, Charley\'nin yüzüne bakabildi mi — yoksa bu cümle bir teşekkür mü, bir itiraf mı?' },
        { no: 3, baslik: 'İçsel', soru: 'Ofisten çıkarken sigorta düşüncesi zihnine geldiyse, Willy onu bir umut mu yoksa bir karanlık mı olarak duydu?' },
      ],
    },

    // ── no 4 · "Restoran tuvaletinde geçen süre" → S10 (mevcut) ──────────
    {
      no: 4,
      baslik: 'Restoran tuvaletinde geçen süre',
      sinif: 'Kopuş Boşluğu',
      konum: 'Birim 9 (lokanta) içinde — Willy tuvalette',
      yasamSirasi: 13,
      sonraSahneNo: 10,
      onceBaslik: 'Lokanta — Boston belleği patlar',
      onceMetin:
        'Biff gerçeği söylemeye çalışır; Willy Boston belleğine düşer; oğullar onu bırakıp kadınlarla gider. Willy tuvalete kaçar.',
      boslukMetin:
        'Tuvalette geçen dakikalar · belleğin içinden çıkamama · "Sahtekarsın sen!"in yankısı · oğullarının onu bıraktığını fark etme · aynaya bakma ya da bakamama · yapayalnız.',
      sonraBaslik: 'Bahçe',
      sonraMetin:
        'Eve döner; gece bahçeye tohum ekmeye çalışır — karanlıkta bir şey büyütme çırpınışı.',
      sentez:
        'Sahnede Willy tuvalete girer, sonra onu evde bahçede görürüz. Arada — en yalnız anı — boşluktur.',
      altSorular: [
        { no: 1, baslik: 'Beden', soru: 'Tuvaletin içinde bedeni ne yaptı — ayakta mı, çömelmiş mi, aynada mı?' },
        { no: 2, baslik: 'İçsel', soru: 'Oğullarının onu bıraktığını ne zaman, nasıl anladı?' },
        { no: 3, baslik: 'Zamansal', soru: 'Geçmiş (Boston) ile şimdi (lokanta) onun zihninde nasıl iç içe geçti?' },
      ],
    },

    // ── no 11 · "Tek Başına — Eve Mi, Başka Yere Mi?" → S10 (eski b-7, SWAP önce, çapa 11→10) ──
    {
      no: 11,
      baslik: 'Tek Başına — Eve Mi, Başka Yere Mi?',
      sinif: 'Kopuş',
      konum: 'Frank\'s Chop House sonrası, sokak → Sahne 10 (eve varış öncesi)',
      yasamSirasi: 9,
      sonraSahneNo: 10,
      onceBaslik: 'Restoran — oğullar gitti',
      onceMetin:
        'Sahne 9\'da Biff ve Happy, Willy\'yi tuvalette/restoranda bırakıp kadınlarla gittiler. Willy tek başına kaldı.',
      boslukMetin:
        'neredeyse boş restoran · ödenip ödenmediği belirsiz hesap · sokağa çıkan ama eve gitmeyen ayaklar · saat 11\'den geceyarısına uzayan süre · bekleyen Linda bilgisi',
      sonraBaslik: 'Eve varış, sonra bahçe',
      sonraMetin:
        'Willy sonunda eve döner (Sahne 10 bahçe). Bu boşluk, oğulların terkinden bahçeye uzanan iç yolun ilk halkası.',
      sentez:
        'Miller, restoran terkinden eve dönüşe atlar; sokaktaki o saatler yazılmaz. Oyuncu bu boşlukta "eve mi, başka yere mi?" salınımını kurar — ayakların neden eve gitmediğini. Bu salınım, Sahne 11\'deki son arabanın habercisi: Willy o gece bir kez daha "gidiş"i bedeninde provaladı.',
      altSorular: [
        { no: 1, baslik: 'Zamansal', soru: 'Restorandan çıktığında saat kaçtı — o süre Willy\'ye uzun mu, bir anlık mı geldi?' },
        { no: 2, baslik: 'Beden', soru: 'Bir yere oturdu mu — bir bank, bir köşe? Ayakları neden eve doğru gitmedi?' },
        { no: 3, baslik: 'İlişkisel', soru: 'Linda\'nın evde beklediğini biliyordu — bu bilgi onu hızlandırdı mı, yoksa daha da yavaşlattı mı?' },
      ],
    },

    // ── no 8 · "Geceyarısı Bahçesi" → S10 (eski b-4) ─────────────────────
    {
      no: 8,
      baslik: 'Geceyarısı Bahçesi',
      sinif: 'Hazırlık',
      konum: 'Son gece, bahçe → Sahne 10 (Bahçe + Biff\'le son yüzleşme)',
      yasamSirasi: 9,
      sonraSahneNo: 10,
      onceBaslik: 'Restorandan eve dönüş',
      onceMetin:
        'Oğullar restoranda Willy\'yi bıraktı. Willy eve döndü; Linda öfkeli, oğulları kovdu. Willy bahçeye çıktı.',
      boslukMetin:
        'yataktaki aile · belli etmeden bekleyen Linda · soğuk gece · kazılan toprak · Ben\'le yarı sesli konuşma · kendisiyle baş başa son gerçek saat',
      sonraBaslik: 'Bahçe — Ben + Biff\'le yüzleşme',
      sonraMetin:
        'Sahne 10\'da Willy bahçede tohum eker, Ben\'le 20 bin doları konuşur, sonra Biff iner ve son yüzleşme başlar.',
      sentez:
        'Sahne 10 bahçede başlar ama Willy\'nin bahçeye çıkma kararı ve toprağı kazarken zihninden geçenler sahne öncesidir. Oyuncu burada bir adamın kendisiyle baş başa kaldığı son sessiz saati kurar — bu sessizlik, sahnedeki Ben konuşmasının ve Biff yüzleşmesinin altındaki zemin. Tohum ekmek bir umut mu, bir veda mı: oyuncunun bu boşlukta verdiği cevap sahneyi belirler.',
      altSorular: [
        { no: 1, baslik: 'İçsel', soru: 'Bahçeye çıkma kararını Willy nasıl verdi — ani bir kalkış mı, uzun süre düşünülmüş bir şey mi?' },
        { no: 2, baslik: 'Beden', soru: 'Toprağı kazarken elleri ne yapıyordu — aceleyle mi, özenle mi? Soğuk bedeninin neresinde?' },
        { no: 3, baslik: 'İlişkisel', soru: 'Linda\'nın bahçeden onu izlediğini fark ettiği an — saklanmak mı istedi, yoksa görülmek mi?' },
      ],
    },
  ],

  // ─── 14 SAHNE (DEPRECATED — Hamlet kalıbı, A-4'te retire) ─────────────────

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
