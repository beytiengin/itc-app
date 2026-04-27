// data/karakterler/hamlet.js
// ITC Actor's Gym — Hamlet karakter verisi

const hamlet = {
  // ─── KİMLİK ───────────────────────────────────────────────────────────────

  id: 'hamlet',
  ad: 'Hamlet',
  oyun: 'Hamlet',
  yazar: 'William Shakespeare',
  donem: "1600'ler",
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
    { kategori: 'İlişki', madde: "Ophelia'yı sever — ama ona karşı güvensizlik duyar." },
    { kategori: 'İlişki', madde: 'Horatio en yakın dostudur, ona her şeyi açar.' },
    { kategori: 'İlişki', madde: "Polonius, Ophelia'nın babası — yanlışlıkla öldürür." },
    { kategori: 'Eylem', madde: "Polonius'u perdenin arkasından öldürür." },
    { kategori: 'Eylem', madde: "Claudius'u dua ederken öldürmekten vazgeçer." },
    { kategori: 'Eylem', madde: "Rosencrantz ve Guildenstern'i ölüme yollar." },
    { kategori: 'Eylem', madde: 'Düelloda Laertes ile dövüşür.' },
    { kategori: 'Son', madde: 'Zehirli kılıçla yaralanır.' },
    { kategori: 'Son', madde: '"The rest is silence" — son sözüdür.' },
    { kategori: 'Son', madde: 'Fortinbras tahtın varisi olur.' },
  ],

  // ─── 14 SAHNE ─────────────────────────────────────────────────────────────

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

  // ─── BOŞLUKLAR — YAZARIN SUSTUĞU YERLER ───────────────────────────────────

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

  // ─── ZİHİNSEL ANTRENMANLAR — 9 EGZERSİZ, ITC FORMATI ──────────────────────

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
