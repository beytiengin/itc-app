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
    },
    {
      id: '1.2-monolog', perde: 1,
      label: '"O, that this too solid flesh"',
      desc: 'İlk monoloğu. Annenin evliliğini öğreniyor (zaten biliyordu ama dile geliyor). İntiharı düşünüyor.',
      icDurum: '"Tanrı kendini öldürmeyi yasaklamasaydı..." Bu cümle tehlikeli yakınlıkta.',
      bosluk: 'Monolog bittiğinde — ne yapacaktı? Horatio gelmeseydi nereye giderdi?',
      travmaKategorileri: ['ihanet', 'ahlaki_yara', 'varolussal'], travmaSeviyesi: 2,
    },
    {
      id: '1.4', perde: 1,
      label: 'Hayaletle karşılaşma',
      desc: 'Gece nöbetinde. Soğuk. Hayalet beliriyor — babasının suretinde. Onu izlemesini istiyor.',
      icDurum: 'Korku, umut, doğrulanma arzusu. "Demek ki delirmemişim — gerçekten yanlış olan bir şey var."',
      bosluk: 'Hayaleti takip ederken arkadaşlarını bırakırken bedeninde ne değişti?',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 2,
    },
    {
      id: '1.5', perde: 1,
      label: 'Hayalet cinayet gerçeğini söyler',
      desc: '"Beni öldürdü amcan. Kulağıma zehir döktü." İntikam emri. "Beni hatırla."',
      icDurum: 'Sezdiği şey doğrulandı. Ama şimdi bir görev var — taşıyabileceğinden emin değil.',
      bosluk: 'Hayalet kaybolduktan sonra, arkadaşlarına dönmeden önceki dakikalar.',
      travmaKategorileri: ['siddet', 'ihanet', 'zihinsel_kirilma'], travmaSeviyesi: 2,
    },
    {
      id: '2.2', perde: 2,
      label: 'Delilik performansına başlar',
      desc: 'Polonius onu deli sanıyor. Hamlet bu rolü kullanıyor. Rosencrantz ve Guildenstern geliyor.',
      icDurum: 'İçinde gerçek bir kırılma var ama kontrolü elde tutmaya çalışıyor. Performansla gerçek arası belirsizleşiyor.',
      bosluk: '"Antic disposition" kararını ne zaman verdi? Ne kadar bilinçli?',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 1,
    },
    {
      id: '3.1-monolog', perde: 3,
      label: '"To be or not to be"',
      desc: 'Yalnız sahne. Var olmak ile yok olmak arasında düşünüyor. Ölüm korkusu, eylem felci, "the undiscovered country".',
      icDurum: 'Bu performans değil. Hamlet\'in en dürüst anı. Kimse izlemiyor (sandığı). Ama Polonius ve Claudius dinliyor.',
      bosluk: 'Monoloğa başlarken son düşüncesi neydi? Hangi an "yapmak" düşüncesinden "düşünmek" düşüncesine geçti?',
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 2,
    },
    {
      id: '3.1-ophelia', perde: 3,
      label: 'Ophelia\'yı reddetme',
      desc: '"Manastıra git." Ophelia hediyelerini iade ediyor. Hamlet sertleşiyor — gözetlendiklerinden şüphelenmeye başlıyor.',
      icDurum: 'Ophelia\'yı korumak için mi, ona güvenmediği için mi, Claudius\'u zorlamak için mi? Üçü de.',
      bosluk: 'Ophelia ağlayarak çıktıktan sonra — ne hissetti? Pişmanlık? Soğuk planlama?',
      travmaKategorileri: ['kayip', 'ahlaki_yara'], travmaSeviyesi: 2,
    },
    {
      id: '3.2', perde: 3,
      label: 'Fare Kapanı — oyun içinde oyun',
      desc: 'Tiyatro topluluğu cinayetin canlandırmasını oynuyor. Claudius huzursuzlanıyor, ayağa kalkıyor.',
      icDurum: 'Doğrulama anı. "Hayalet doğru söylemiş." Ama bu doğrulama bir rahatlama mı, yoksa görevi reddedemeyeceğinin kanıtı mı?',
      bosluk: 'Claudius çıktıktan sonra Horatio\'yla baş başa kaldıkları an.',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 1,
    },
    {
      id: '3.3', perde: 3,
      label: 'Claudius\'u dua ederken öldürmekten vazgeçer',
      desc: 'Claudius diz çökmüş, dua ediyor. Hamlet kılıcını çekiyor — ama indirmiyor. "Cennete göndermem onu."',
      icDurum: 'Mantık mı, korku mu, ahlak mı? "Şimdi öldürürsem ruhu kurtulur." Bu akıl yürütme mi, yoksa bahane mi?',
      bosluk: 'O odadan çıktıktan sonra — pişman mı, rahatlamış mı?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 2,
    },
    {
      id: '3.4-polonius', perde: 3,
      label: 'Polonius\'u perdenin arkasından öldürür',
      desc: 'Annesinin odası. Perdenin arkasında bir hareket. "Bir fare!" Kılıcı saplıyor. Polonius yere düşüyor.',
      icDurum: 'Refleks mi, niyet mi? Claudius sandı mı? Bilmiyor — hareket eyleme dönüştü, ilk kez.',
      bosluk: 'Perdeyi açtığında — Polonius olduğunu görmek nasıl bir şey? Hangi sürede tepki verdi?',
      travmaKategorileri: ['siddet', 'ahlaki_yara'], travmaSeviyesi: 3,
    },
    {
      id: '3.4-anne', perde: 3,
      label: 'Anneyle yüzleşme, hayalet tekrar',
      desc: 'Polonius yerde. Hamlet anneye babasının portresini gösteriyor, Claudius\'la kıyaslıyor. Hayalet beliriyor — sadece o görüyor.',
      icDurum: 'Annesini sarsıyor ama bir yandan yıkılıyor. Hayalet onu kınıyor — "annene yumuşak ol".',
      bosluk: 'Hayalet kaybolduktan sonra, anneyle son sözleri. Polonius\'un cesedini sürüklerken aklında ne vardı?',
      travmaKategorileri: ['zihinsel_kirilma', 'ihanet'], travmaSeviyesi: 2,
    },
    {
      id: '4.4', perde: 4,
      label: 'İngiltere yolu, Fortinbras ordusu',
      desc: 'Sürgüne gidiyor. Yolda Fortinbras\'ın ordusunu görüyor — küçük bir toprak parçası için ölmeye giden askerler.',
      icDurum: '"Onlar bir hiç için ölüyor, ben her şey için tereddüt ediyorum." Utanç ve kararlılık karışımı.',
      bosluk: 'O monoloğun sonu — Danimarka\'ya geri dönme planı hangi an oluştu?',
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 1,
    },
    {
      id: '5.1', perde: 5,
      label: 'Mezarlık — Yorick, Ophelia cenazesi',
      desc: 'Mezarlıkta. Yorick\'in kafatasını alıyor — çocukluğunun soytarısı. Ardından bir cenaze geliyor — Ophelia\'nın.',
      icDurum: 'Ölümle artık dost. Kafatası elinde, hiçliği kabulleniyor. Sonra Ophelia\'nın cesedi — kabullenmenin sınırı.',
      bosluk: 'Laertes\'le mezarın içinde kavga ettiğinde — gerçekten Ophelia için mi, yoksa Laertes\'le karşılaşmaya mı kavga ediyordu?',
      travmaKategorileri: ['kayip', 'varolussal'], travmaSeviyesi: 3,
    },
    {
      id: '5.2', perde: 5,
      label: 'Düello, ölüm, "the rest is silence"',
      desc: 'Düello hile. Zehirli kılıç, zehirli içecek. Anne içiyor. Laertes ölüyor. Claudius öldürülüyor. Hamlet de ölüyor.',
      icDurum: 'Sonunda eylem — ama tüm anlamlar dağıldıktan sonra. Sessizlik bir kayıp değil, bir kabul.',
      bosluk: 'Horatio\'ya "yaşamı anlat" derken — kendi hikayesini nasıl bir adam olarak hatırlanmak istiyor?',
      travmaKategorileri: ['siddet', 'varolussal'], travmaSeviyesi: 3,
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

  // ─── EGZERSİZLER ──────────────────────────────────────────────────────────

  egzersizler: [
    {
      id: 'baseline',
      baslik: 'Baseline Kurma',
      sure: '10 dk', seviye: 'Giris', ikon: '📚',
      aciklama:
        "Wittenberg'de bir öğrenci. Henüz babası yaşıyor, anne ve baba bir arada. Felsefeyle, dostlarıyla ve Ophelia'ya duyduğu sevgiyle tanışıyoruz. Henüz yas yok, henüz hayalet yok.",
      adimlar: [
        "Gözlerini kapat. Wittenberg'desin. Sınıf, kütüphane, yatakhane.",
        'Bir kitap önünde — ne {duyu}? Hangi düşünce seni en çok meşgul ediyor?',
        'Horatio yanına geliyor. Bir tartışmaya girmek üzeresiniz. Hangi konu hakkında?',
        "Bu Hamlet'i hatırla. Buraya istediğin an dönebilirsin.",
      ],
      travmaSeviyesi: 0,
    },
    {
      id: 'dogrular',
      baslik: 'Değiştirilemez Doğrular Taraması',
      sure: '15 dk', seviye: 'Temel', ikon: '🗺️',
      aciklama:
        "Sahneye çıkmadan önce zemini sağlamlaştır. Hamlet'in metinden gelen sabit gerçeklerini bedenine yedir.",
      adimlar: [
        'Listeyi yavaşça oku. Acele etme.',
        'Her madde için içinden bir cevap ver: "Evet, biliyorum."',
        'Sürpriz yaratan bir madde var mı? Onu daha uzun tut.',
        '"Hamlet bunların hepsini taşıyarak sahneye giriyor."',
      ],
      travmaSeviyesi: 0,
    },
    {
      id: 'iliski-ophelia',
      baslik: 'İlişki Haritası: Ophelia',
      sure: '20 dk', seviye: 'Orta', ikon: '🌹',
      aciklama:
        "Sevgi ile güvensizlik arasında. Bir kadına aşık olabilen Hamlet aynı zamanda annesinin ihanetini taşıyor. Ophelia bu yarayı hem iyileştirir hem deşer.",
      adimlar: [
        "İlk Ophelia'yla nasıl tanıştıklarını hayal et. {ipucu}",
        '3.1\'de "manastıra git" derken — onu mu, kendini mi, anneyi mi reddediyor?',
        "Cenazesinde mezara atladığında — sevgi mi, suçluluk mu, kıskançlık mı?",
        '"I loved you not" demişti. Sonra "Forty thousand brothers..." Hangisi gerçek?',
      ],
      travmaSeviyesi: 2,
    },
    {
      id: 'iliski-anne',
      baslik: 'İlişki Haritası: Gertrude',
      sure: '25 dk', seviye: 'Orta', ikon: '👁️',
      aciklama:
        "En derin yara burada. Anne — ihanet eden, sevilen, kurtarılmak istenen, suçlu bulunan, sonunda kollarında ölen.",
      adimlar: [
        "Çocukluğunda annesiyle bir an — {ipucu}",
        'Düğün gününde annesinin yüzü. O an "annem" kelimesi sende ne hissettirdi?',
        '3.4\'te onu sarsarken — kurtarmak mı istiyorsun, cezalandırmak mı?',
        "5.2'de zehri içtiğinde — son baktığın gözler.",
      ],
      travmaSeviyesi: 3,
    },
    {
      id: 'kararlar-odasi',
      baslik: 'Kararlar Odası',
      sure: '30 dk', seviye: 'Ileri', ikon: '⚖️',
      aciklama:
        "Hamlet karar veremeyen prens olarak bilinir — ama aslında kararlar verdi. Sadece beklenen anlarda değil. Bu egzersizde onun kritik karar anlarına gir.",
      kararlar: [
        {
          id: 'k-3-3',
          sahne: '3.3',
          kurulum: "Claudius dua ediyor. Sırtı dönük. Kılıç elinde. Tek bir hareket — intikam tamamlanır.",
          yollar: [
            { id: 'oldur', metin: "Şimdi öldür — fırsat bu" },
            { id: 'bekle', metin: "Bekle — daha kötü bir anda öldür ki cehenneme gitsin" },
            { id: 'birak', metin: "Bırak — bu kararı veremem, sıyrıl ve git" },
          ],
          yansimaSorusu: 'Bu kararı verirken — gerçekten Claudius\'un ruhunu mu düşündün, yoksa bir şey seni durdurdu?',
          tarihselCevap: "Hamlet beklemeyi seçti. Gerekçe: Claudius dua ettiği için ruhu cennete giderdi. Ama bu mantıklı mı, yoksa kendisinin yapamadığını rasyonalize mi etti? Asla bir daha bu kadar kolay bir fırsat olmayacaktı.",
          farkSorusu: "Sen onun gerekçesini gerçekten satın alıyor musun, yoksa bahane olduğunu mu düşünüyorsun?",
        },
        {
          id: 'k-3-4',
          sahne: '3.4',
          kurulum: "Annenin odasında. Perdenin arkasından bir ses, bir hareket. Claudius olabilir. Kılıç elinde.",
          yollar: [
            { id: 'sapla', metin: "Sapla — Claudius\'sa hesap görülür, kim olursa olsun" },
            { id: 'bak', metin: "Önce kim olduğuna bak — perdeyi aç" },
            { id: 'cek', metin: "Geri çekil — ses çıkmasın, bir şey yapma" },
          ],
          yansimaSorusu: 'Kılıcı saplama anı düşünmeden mi geldi, yoksa içinde "yap" diyen bir ses mi vardı?',
          tarihselCevap: "Hamlet sapladı. Refleksti, ama 3.3'teki kararsızlığın patlaması da olabilir. Kim olduğunu bilmeden öldürdü. Polonius olduğunu görünce ilk tepkisi — neredeyse umursamaz: 'You wretched, rash, intruding fool.'",
          farkSorusu: "Hamlet'in soğukluğu seni şaşırttı mı? Yoksa bu da onun bir başka yüzü mü?",
        },
        {
          id: 'k-5-2',
          sahne: '5.2',
          kurulum: "Düello teklif edildi. Bunun bir tuzak olabileceğini sezmek için yeterli işaret var. Reddetmek mümkün, ertelemek mümkün, kabul etmek mümkün.",
          yollar: [
            { id: 'kabul', metin: "Kabul et — gelsin ne gelecekse" },
            { id: 'ertele', metin: "Ertele — daha hazırım de, zaman kazan" },
            { id: 'reddet', metin: "Reddet — bu açıkça bir tuzak" },
          ],
          yansimaSorusu: 'Bu kararı verirken — yorgunluk mu, kabulleniş mi, gizli bir umut mu vardı?',
          tarihselCevap: "Hamlet kabul etti. Horatio'ya 'kalbimde bir ağırlık var ama önemi yok' dedi. Artık kaçmıyor — ama kaçmamak da bir karar.",
          farkSorusu: "Sen kabul edebilir miydin? Hangi an Hamlet senden ayrıldı, hangi an birlikteydiniz?",
        },
      ],
      travmaSeviyesi: 2,
    },
    {
      id: 'olmak-ya-da-olmamak',
      baslik: '"Olmak ya da Olmamak"',
      sure: '15 dk', seviye: 'Ileri', ikon: '🕯️',
      aciklama:
        "Hamlet'in en çok bilinen ama en yanlış anlaşılan anı. Bu performans değil — Hamlet kimsenin dinlemediğini sanıyor. En dürüst olduğu an.",
      adimlar: [
        "Sahnede yalnız olduğunu varsay. Sadece sen varsın.",
        "İlk satır: 'Olmak ya da olmamak.' — Bu cümle bir karar mı, soru mu, çığlık mı? Sen söyle, hangi tonda?",
        "'Ölmek, uyumak, belki rüya görmek' — burası en tehlikeli yer. Ölümden korkuyor mu, yoksa rüyadan mı?",
        '"Bilinmeyen ülke" — senin hayatında bu cümlenin karşılığı ne?',
        "Monolog bitince — kim seni susturdu? Ophelia mı, yoksa içinden bir şey mi?",
      ],
      travmaSeviyesi: 3,
      bagliSahne: '3.1-monolog',
    },
    {
      id: 'cikis-sessizlik',
      baslik: '"The Rest is Silence" — Çıkış',
      sure: '15 dk', seviye: 'Ileri', ikon: '🕊️',
      aciklama:
        "Bu egzersiz Modül III'ün ön habercisidir — deroling. Hamlet'i içine aldın, taşıdın. Şimdi bırakma zamanı. Onu bırakmadan günlük hayata dönmek tehlikelidir.",
      adimlar: [
        "Otur. Ayaklarını yere bas. Hamlet'in son nefesini bedeninden çıkar.",
        '"The rest is silence" — bu cümle bir bitiş, bir kabul, bir özgürlük. Sen hangisini taşıyorsun?',
        "Adını yüksek sesle söyle. Yaşını söyle. Bugünün tarihini söyle.",
        "Etrafına bak — odanın ışığı, sıcaklığı, kokusu. Sen şimdi buradasın.",
        "Macbeth'i bırakmadan kalkma. Su iç. Birkaç dakika öylece otur.",
      ],
      travmaSeviyesi: 0,
      tipDeroling: true,
    },
  ],
};

export default hamlet;