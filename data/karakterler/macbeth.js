// data/karakterler/macbeth.js
// ITC Actor's Gym — Macbeth karakter verisi

const macbeth = {
  // ─── KİMLİK ───────────────────────────────────────────────────────────────

  id: 'macbeth',
  ad: 'Macbeth',
  oyun: 'Macbeth',
  yazar: 'William Shakespeare',
  donem: "1600'ler",
  tur: 'Trajedi',
  tip: 'ENTJ',
  ozet:
    "İktidar hırsı, suçluluk ve paranoya. İskoçya'nın en cesur generali — ve en büyük hainlerinden biri.",
  etiketler: ['Trajedi', 'Şiddet', 'İktidar', 'Paranoya'],

  // ─── BASELINE ─────────────────────────────────────────────────────────────

  baseline: {
    ad: 'Savaş Sonrası',
    aciklama:
      'Savaş zaferinin hemen ardından, cadılarla karşılaşmadan önce. Her şey hâlâ mümkün. Henüz general — kral değil, katil değil.',
  },

  // ─── KRİTİK İLİŞKİLER ─────────────────────────────────────────────────────

  iliskiler: ['Lady Macbeth', 'Banquo', 'Duncan', 'Cadılar', 'Macduff'],

  // ─── DEĞİŞTİRİLEMEZ DOĞRULAR ──────────────────────────────────────────────

  dogrular: [
    { kategori: 'Kimlik', madde: "Macbeth, İskoçya'nın en cesur generalidir." },
    { kategori: 'Kimlik', madde: "Kral Duncan'ın akrabasıdır — hem askeri hem misafir." },
    { kategori: 'Bilgi', madde: 'Cadıların kehanetini duydu: kral olacak.' },
    { kategori: 'Bilgi', madde: "Banquo'nun çocuklarının kral olacağını biliyor." },
    { kategori: 'Eylem', madde: "Duncan'ı uyurken öldürdü." },
    { kategori: 'Eylem', madde: "Banquo'yu öldürtmeyi emretti." },
    { kategori: 'Eylem', madde: "Macduff'ın ailesini katlettirdi." },
    { kategori: 'İlişki', madde: 'Lady Macbeth eşidir. Ve onu bu yola iten kişidir.' },
    { kategori: 'İlişki', madde: 'Banquo, en yakın dostuydu. Şimdi hayalet.' },
    { kategori: 'Son', madde: 'Hiçbir kadından doğmamış biri tarafından öldürüleceğini bildi.' },
    { kategori: 'Son', madde: "Lady Macbeth'in ölümünü savaş ortasında öğrendi." },
  ],

  // ─── 14 SAHNE ─────────────────────────────────────────────────────────────

  sahneler: [
    {
      id: '1.3', perde: 1,
      label: 'Cadılarla karşılaşma',
      desc: 'Savaş sonrası ormanda üç cadı kehaneti verir: "Kral olacaksın."',
      icDurum: 'Şaşkınlık, hırs, inanmak isteme. Banquo\'ya döner: "İyi mi kötü mü bu?"',
      bosluk: 'Kehanetten sonra saraya kadar olan yolculuk. Aklında ne dönüyor?',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 1,
      kritikMi: true,
    },
    {
      id: '1.4', perde: 1,
      label: 'Cawdor unvanını alır',
      desc: 'Kral Duncan, Macbeth\'i Cawdor Beyi ilan eder. Kehanet gerçekleşmeye başladı.',
      icDurum: "Hız kazanan arzu. Ama bir engel var: Duncan'ın oğlu Malcolm veliahd seçildi.",
      bosluk: "Lady Macbeth'e mektup yazarken içinde ne hissetti?",
      travmaKategorileri: [], travmaSeviyesi: 0,
      kritikMi: false,
    },
    {
      id: '1.7', perde: 1,
      label: "Duncan'ı öldürme kararsızlığı",
      desc: 'Ziyafet sırasında odaya çekildi. Yalnız. Kendisiyle hesaplaşıyor.',
      icDurum: '"Bunu yapmamalıyım." Ama Lady Macbeth onu geri çekecek.',
      bosluk: 'O odada kaç dakika geçirdi? Hangi an geri döndü?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 2,
      kritikMi: true,
    },
    {
      id: '2.1', perde: 2,
      label: 'Hançer halüsinasyonu',
      desc: 'Gece yarısı koridorda havada bir hançer görüntüsü. Gözleri mi, beyni mi?',
      icDurum: 'Zihin artık gerçekle kurguyu ayırt edemiyor. İlk kırılma.',
      bosluk: "Halüsinasyondan Duncan'ın odasına girişe kadar geçen süre.",
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 2,
      kritikMi: true,
    },
    {
      id: '2.2', perde: 2,
      label: "Duncan'ı öldürür",
      desc: "Kral'ın odasına girdi. Geri döndü. Hançerler elinde.",
      icDurum: '"Bunu ben mi yaptım?" Ses duyuyor. "Uyku öldürüldü."',
      bosluk: 'Odadaki süre. Hiçbir sahne göstermiyor. Oyuncu dolduracak.',
      travmaKategorileri: ['siddet', 'ahlaki_yara'], travmaSeviyesi: 3,
      kritikMi: true,
    },
    {
      id: '2.3', perde: 2,
      label: 'Cinayeti gizleme',
      desc: 'Herkes uyandı. Macduff buldu. Macbeth hizmetçileri öldürür.',
      icDurum: 'Kontrol. Rol yapma. İlk performans: kral gibi davranmak.',
      bosluk: 'Lady Macbeth bayılınca ne düşündü?',
      travmaKategorileri: ['ahlaki_yara'], travmaSeviyesi: 2,
      kritikMi: false,
    },
    {
      id: '3.1', perde: 3,
      label: "Banquo'dan tehdit",
      desc: "Banquo'nun çocukları kral olacak dedi cadılar. Banquo tehlikeli.",
      icDurum: 'Paranoya başladı. En iyi dost artık düşman.',
      bosluk: "Banquo'ya ihanet kararını verdiği an.",
      travmaKategorileri: ['ihanet'], travmaSeviyesi: 1,
      kritikMi: true,
    },
    {
      id: '3.2', perde: 3,
      label: "Lady Macbeth'le uzaklaşma",
      desc: 'İkisi arasında bir şeyler kırıldı. Planlarını artık paylaşmıyor.',
      icDurum: 'Yalnızlaşma. Güce sahip ama kimse yok yanında.',
      bosluk: "O gecelerde Lady Macbeth'e ne söylemek isteyip söyleyemedi?",
      travmaKategorileri: ['kayip'], travmaSeviyesi: 1,
      kritikMi: false,
    },
    {
      id: '3.4', perde: 3,
      label: "Banquo'nun hayaleti",
      desc: 'Ziyafet sofrasında taht boş değil. Sadece o görüyor.',
      icDurum: 'Panik. Kontrol kaybı. Herkese delilik performansı sergiledi.',
      bosluk: 'Hayalet kaybolunca — gerçek mi yoksa korku mu?',
      travmaKategorileri: ['zihinsel_kirilma', 'ahlaki_yara'], travmaSeviyesi: 3,
      kritikMi: true,
    },
    {
      id: '4.1', perde: 4,
      label: 'Yeni kehanetler',
      desc: 'Cadılara geri döndü. Daha fazlasını istedi. Daha karanlık bilgiler aldı.',
      icDurum: 'Bağımlılık. Kehanet artık güç vermiyor, uyuşturuyor.',
      bosluk: 'Cadılardan ayrıldıktan sonra yalnız kaldığı an.',
      travmaKategorileri: ['zihinsel_kirilma'], travmaSeviyesi: 2,
      kritikMi: true,
    },
    {
      id: '5.3', perde: 5,
      label: 'Savaşa hazırlanma',
      desc: 'Beyler onu terk ediyor. Ordu yaklaşıyor. Ama kehanet güvencesi var.',
      icDurum: 'Yanlış bir güven. Ya da güvene inanmak zorunda.',
      bosluk: 'Asker sayısını öğrendiği an.',
      travmaKategorileri: [], travmaSeviyesi: 0,
      kritikMi: false,
    },
    {
      id: '5.5', perde: 5,
      label: "Lady Macbeth'in ölümü",
      desc: 'Haber geldi. Cevabı: "Yarın, yarından sonra, yarından sonra..."',
      icDurum: 'Boşluk. Keder değil — anlamsızlık. Hayat "yürüyen bir gölge".',
      bosluk: "Haberi aldıktan savaş alanına çıkana kadar. Ne düşündü Lady Macbeth'e dair?",
      travmaKategorileri: ['kayip', 'varolussal'], travmaSeviyesi: 3,
      kritikMi: true,
    },
    {
      id: '5.7', perde: 5,
      label: "Genç Seyward'ı öldürür",
      desc: 'Savaş alanında genç asker. Kolayca öldürdü. Kehanet doğru.',
      icDurum: 'Kısa bir zafer. Doğrulandı hissi. Ama Macduff geliyor.',
      bosluk: null,
      travmaKategorileri: ['siddet'], travmaSeviyesi: 2,
      kritikMi: false,
    },
    {
      id: '5.8', perde: 5,
      label: 'Macduff karşısında son',
      desc: '"Kadından doğmadım." Macduff: "Erken doğumla kopardılar beni."',
      icDurum: 'Her şey çöktü. Ama savaşmayı seçti.',
      bosluk: 'O son anda — pişmanlık mı, özgürlük mü, yoksa hiçlik mi?',
      travmaKategorileri: ['varolussal'], travmaSeviyesi: 3,
      kritikMi: true,
    },
  ],

  // ─── BOŞLUKLAR — YAZARIN SUSTUĞU YERLER ───────────────────────────────────
  // Shakespeare'in göstermediği, oyuncunun yazacağı anlar.
  // Her boşluk kendi mini egzersizi olarak çalışır.

  bosluklar: [
    {
      id: 'b-pre',
      tip: 'pre',
      konum: 'Pre-senaryo',
      baslik: 'Senaryodan Önce',
      kisaAciklama: 'Kim olduğu, çocukluğu, savaştan önceki yaşamı.',
      uzunAciklama:
        "Shakespeare bize Macbeth'i savaş alanından kapıyor. Ama o ana kadar bir hayat var. Kimdi? Nereden geldi? Hangi anılar onu bu adam yaptı?",
      sorular: [
        'Macbeth\'in çocukluğunda en güçlü hatırası ne olabilir?',
        'Babası nasıl biriydi? Onunla ilişkisi nasıldı?',
        'İlk savaşına çıktığında kaç yaşındaydı? Ne hissetti?',
        'Lady Macbeth\'le ilk nasıl karşılaştılar?',
        'İktidar arzusu hangi anda doğdu? Bilinçli bir arzu mu, yoksa hep var mıydı?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-1',
      tip: 'ara',
      konum: '1.3 → 1.4 arası',
      baslik: 'Ormandan Saraya',
      kisaAciklama: 'Cadıların kehanetinden Duncan\'ın huzuruna varış.',
      uzunAciklama:
        'Cadılar kayboldu. Banquo şaşkın. Macbeth\'in zihninde "kral" kelimesi yankılanıyor. Saraya kadar yol var — kimseyle konuşmadan, ama içeride sürekli bir konuşma.',
      sorular: [
        'At üzerinde mi yürüyor mu? Yolu hangi ritimde alıyor?',
        'Banquo\'ya ne söyleyebilirdi ama söylemedi?',
        'Kehaneti ilk kez ciddiye aldığı an hangisi?',
        '"Kral" kelimesini ilk kez sesli düşündüğünde — ne hissetti?',
      ],
      sure: '12 dk',
    },
    {
      id: 'b-2',
      tip: 'ara',
      konum: '1.4 → 1.7 arası',
      baslik: 'Mektup Yazma Süreci',
      kisaAciklama: 'Lady Macbeth\'e haberi vermek için yazılan mektup.',
      uzunAciklama:
        'Cawdor olduğunu öğrendi. Eve dönüş yolunda Lady Macbeth\'e mektup yazdı. O mektubu yazarken hangi kelimeyi sildi? Hangi cümleyi düşünüp yazmadı?',
      sorular: [
        'Mektubu yazmaya başladığı an ne hissetti?',
        'Cadılardan bahsederken kelimeleri nasıl seçti?',
        'Söyleyemediği şey neydi? "Onu öldürmemiz gerekecek" diye yazabilir miydi?',
        'Mühürlerken — bu mektup geri alınamaz, biliyor mu?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-3',
      tip: 'ic',
      konum: '1.7 içi',
      baslik: 'Karar Odasında Tek Başına',
      kisaAciklama: '"Yapacağım" dedikten sonra Duncan\'ın odasına kadar.',
      uzunAciklama:
        'Lady Macbeth onu ikna etti. "Yapacağım" dedi. Ama bu cümle ile gerçekten yapıyor olması arasında bir süre var. O sürede kaç kez vazgeçti? Kaç kez geri çağırdı kendini?',
      sorular: [
        '"Yapacağım" dediği an bedeninin neresinde değişiklik oldu?',
        'Hizmetkârlara şarap içirirken onlara ne diyebildi?',
        'Lady Macbeth yataktan kalkıp çanı çaldığında — son şansı miydi?',
        'Hançere uzandığı an, gerçekten alacağını biliyor muydu?',
      ],
      sure: '20 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-4',
      tip: 'ic',
      konum: '2.2 odasının içi',
      baslik: "Duncan'ın Odasında",
      kisaAciklama: 'Cinayetin kendisi — Shakespeare\'in göstermediği an.',
      uzunAciklama:
        'Macbeth odaya girdi. Geri döndü. Aralarındaki süre — belki 30 saniye, belki 5 dakika. O odada ne yaptı? Ne gördü? Ne söyledi (söyledi mi)? Bu en derin boşluk.',
      sorular: [
        'Odaya girdiğinde Duncan\'ın yüzü görünüyor muydu?',
        'Duncan rüyasında bir şey söyledi mi? Söyleseydi sen ne duyardın?',
        'İlk darbe nereye? İkincisi geldi mi?',
        'Yatağın ucundan döndüğünde — son kez baktı mı?',
        'Geri çıkarken ne kadar zaman geçti? Ya o sürede biri uyansaydı?',
      ],
      sure: '25 dk',
      travmaSeviyesi: 3,
    },
    {
      id: 'b-5',
      tip: 'ara',
      konum: '2.2 → 2.3 arası',
      baslik: 'Uyumadığı Saatler',
      kisaAciklama: 'Cinayetten Macduff\'ın kapıyı çalışına kadar.',
      uzunAciklama:
        'Eller yıkandı. Ama uyku gelmedi. "Uyku öldürüldü" dedi. O saatlerde ne yaptı? Lady Macbeth ne dedi? Sessizlik miydi yoksa konuştular mı?',
      sorular: [
        'Eller yıkandı — ama hâlâ kanlı görüyor mu?',
        'Lady Macbeth\'le bakışmaları nasıldı?',
        'Bir an pencereye gitti — dışarıda ne gördü?',
        'Macduff kapıyı çaldığında ilk düşüncesi neydi?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-6',
      tip: 'ara',
      konum: '3.1 → 3.4 arası',
      baslik: 'Ziyafete Hazırlık',
      kisaAciklama: 'Banquo\'yu öldürtme emrinden ziyafet sofrasına.',
      uzunAciklama:
        'Suikastçileri gönderdi. Ziyafet hazırlanıyor. O saatlerde Macbeth nerede? Lady Macbeth\'le konuştu mu? Banquo\'nun gelmeyeceğini biliyor — ama herkes onun geleceğini bekliyor.',
      sorular: [
        'Suikastçileri uğurladıktan sonra ilk gittiği yer neresi oldu?',
        'Ziyafet kıyafetlerini giyerken aynaya baktı — kimi gördü?',
        'Lady Macbeth\'e Banquo\'yu söyledi mi? Söyleseydi nasıl söylerdi?',
        'Sofraya otururken — Banquo\'nun ölü olduğunu biliyor mu, yoksa bekliyor mu?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-7',
      tip: 'ara',
      konum: '3.4 → 4.1 arası',
      baslik: 'Hayaletten Cadılara',
      kisaAciklama: 'Ziyafet rezaletinden cadılara dönüşe kadar.',
      uzunAciklama:
        'Ziyafet bitti. Konuklar gitti. Macbeth utanç ve panik içinde. O geceyi nasıl geçirdi? Cadıları aramaya hangi anda karar verdi?',
      sorular: [
        'Ziyafet bitince Lady Macbeth\'le aralarında ne kondu, ne kalmadı?',
        'O gece uyudu mu? Uyuduysa rüyasında ne gördü?',
        'Cadıları aramaya gitme kararını hangi an verdi?',
        'Ormana giderken — bu sefer yalnız. Banquo yok. Hangi farkı hissetti?',
      ],
      sure: '15 dk',
    },
    {
      id: 'b-8',
      tip: 'ara',
      konum: '4.1 → 5.3 arası',
      baslik: 'Macduff\'tan Sonra Sessizlik',
      kisaAciklama: 'Macduff\'ın ailesinin katlinden savaş hazırlığına.',
      uzunAciklama:
        'Macduff kaçtı. Macbeth ailesini öldürttü. Sonra haftalar var — Macduff geri dönmeden önce. O zamanda Macbeth ne yapıyor? Beyler bir bir kaçıyor. Lady Macbeth çekiliyor. O yalnızlaşma nasıl bir yalnızlık?',
      sorular: [
        'Macduff\'ın ailesinin öldüğünü öğrendiğinde — kazandı mı, kaybetti mi?',
        'Sarayında dolaşırken kaç kişi kalmıştı?',
        'Lady Macbeth\'e en son ne zaman dokundu?',
        'Aynaya baktığı son an — kimi gördü?',
      ],
      sure: '18 dk',
    },
    {
      id: 'b-9',
      tip: 'ara',
      konum: '5.3 → 5.5 arası',
      baslik: 'Çığlığı Duyduğu An',
      kisaAciklama: 'Lady Macbeth\'in çöküşünü ilk duyumsadığı an.',
      uzunAciklama:
        'Saraydan bir çığlık geldi. "Ne bağırışı bu?" diye sordu. Cevap gelmeden önceki süre — kim olduğunu zaten biliyor muydu? Bu ana hazır mıydı?',
      sorular: [
        'Çığlığı duyduğunda bedeninde ne hareket etti?',
        '"Ne bağırışı bu?" derken sesinin tonu — soru mu, kabul mu?',
        'Cevabı beklerken nefes aldı mı?',
        'Lady Macbeth\'in öldüğünü duyduğu an — ilk dakika sessizlik. O sessizlikte ne vardı?',
      ],
      sure: '15 dk',
      travmaSeviyesi: 2,
    },
    {
      id: 'b-10',
      tip: 'ara',
      konum: '5.7 → 5.8 arası',
      baslik: 'Son Dakikalar',
      kisaAciklama: 'Genç Seyward\'dan Macduff\'a kadar.',
      uzunAciklama:
        'Genç Seyward\'ı öldürdü. "Kadın doğurmadı" diye düşündü — kehanet hâlâ koruyor. Ama Macduff geliyor. O dakikalarda ne biliyor, ne hissediyor?',
      sorular: [
        'Genç Seyward öldükten sonra — gerçekten zafer hissetti mi?',
        'Etrafına baktığında kaç düşman gördü?',
        'Macduff\'ı uzaktan tanıdı mı? Sesi mi, yürüyüşü mü?',
        '"Kadından doğmadım" sözünü en son ne zaman tekrar etti içinde?',
      ],
      sure: '12 dk',
    },
    {
      id: 'b-post',
      tip: 'post',
      konum: 'Post-senaryo',
      baslik: 'Senaryodan Sonra',
      kisaAciklama: 'Ölümünden sonra zihninde kalan iz — oyuncuda devam eden.',
      uzunAciklama:
        'Macbeth öldü. Ama oyuncu hâlâ orada. Karakteri içine aldı, taşıdı, salıveriyor şimdi. Bu boşluk Macbeth\'in değil — oyuncunun. Karakter sende ne bıraktı? Neyi alıp götürdü?',
      sorular: [
        'Macbeth\'in son nefesi senin bedeninde nereye yerleşti?',
        'Onu bırakmak — hangi adımdan başlar?',
        'Macbeth\'in sende sevdiğin bir yanı oldu mu? Korktuğun?',
        'Bu rolden çıktığında — sen mi geri döndün, yoksa biraz değişmiş biri mi?',
      ],
      sure: '15 dk',
      tipDeroling: true,
    },
  ],

  // ─── ZİHİNSEL ANTRENMANLAR — 8 EGZERSİZ, ITC FORMATI ──────────────────────

  antrenmanlar: [
  
    // ==========================================================================
    //  EGZERSİZ 1 — Cadılarla İlk Karşılaşma
    // ==========================================================================
    {
      id: 'cadilarla-karsilasma',
      no: 1,
      baslik: 'Cadılarla İlk Karşılaşma',
      altbaslik: 'Kehanet eşiğinde',
      sure: '20-25 dk',
      seviye: 'Temel',
      bagliSahne: '1.3',
      travmaKategorileri: ['ihanet', 'varolussal'],
      travmaSeviyesi: 2,
  
      girisMetni: 'Bu egzersizde Macbeth\'in cadılarla ilk karşılaştığı âna gideceğiz. Henüz hiçbir şey olmadı ama bir şey söylendi. Söylenmeden önce belki sadece içinde bir kıvılcımdı bu — şimdi bir kehanet oldu. Söze döküldü. Ve söze dökülen şey artık geri alınamaz.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Az önce kazanılmış bir savaştan dönüyorsun. Banquo yanında. Mekanı bul — açık alan mı, çorak topraklar mı, sis var mı?',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Önünüzde üç figür beliriyor. Sıradan değiller. Bedenleri belirsiz, sesleri çakışıyor. Bu figürleri ilk gördüğünde bedenin nasıl tepki veriyor?',
          soru: 'İlk tepki nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Sen az önce zaferin Macbeth\'iydin — kahraman, sadık, yorgun. Şimdi bu üç figürün önünde duruyorsun. Postürün değişti mi? Kollar nerede, ağırlık nerede, bakış nerede?',
          soru: 'Postürdeki değişim',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Cadılardan biri sana şöyle dedi: "Selam sana Macbeth, Cawdor Beyi olacak." Sonra ikincisi: "Selam sana, gelecekte Kral olacak Macbeth." Bu ikinci cümle bedenine vurduğunda neresi tepki veriyor?',
          soru: 'Cümle bedeninde nereye değdi?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Cümle "Kral olacak" duyulduğunda zihninde bir görüntü beliriyor mu? Bir taht, bir taç, bir gölge, bir kanlı el? Hangi imge önce gelir?',
            isitsel:   'Cadıların sesi normal değil. Cümle "Kral olacak" sözleri içinde nasıl yankılanıyor? Tek ses mi, üç ses bir arada mı, bir uğultu mu?',
            kinestetik:'Bedenin "Kral olacak" sözünü duyduğunda ne yapıyor? Geri çekiliyor mu, ileri eğiliyor mu, donmuş mu kalıyor? Hangi kas gerildi?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Banquo yanında. O da duydu. Sana bakıyor. Sen henüz konuşmadın. İçinde iki şey çatışıyor: Bu sözleri ciddiye almak ve almamak. Hangi taraf daha güçlü, bedeninin sana söylediği ne?',
          soru: 'Hangi taraf?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak içinden geçir: "Eğer kader beni kral yapacaksa, kader beni kral yapsın — ben kıpırdamayayım." Bu bir teslimiyet mi, bir gizlenme mi, yoksa zaten kıpırdamaya hazırlanan birinin yalanı mı?',
          soru: 'Cümlenin altında ne var?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Buradasın. Macbeth\'in eşiği orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 2 — Lady Macbeth'in İknası
    // ==========================================================================
    {
      id: 'lady-iknasi',
      no: 2,
      baslik: 'Lady Macbeth\'in İknası',
      altbaslik: 'Vicdanın eğilme noktası',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: '1.7',
      travmaKategorileri: ['ahlaki_yara', 'cinsel'],
      travmaSeviyesi: 2,
  
      girisMetni: 'Bu egzersizde Macbeth\'in Duncan\'ı öldürme kararını verdiği âna gideceğiz. Az önce karar vermiştin: yapmayacaksın. Ama Lady Macbeth seninle konuştu. Şimdi karar yeniden açık. Bu sadece bir ikna sahnesi değil — bu vicdanının başkasının iradesiyle eğildiği an.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Kalede bir oda, gece yarısı, Duncan misafir olarak yatıyor başka bir odada. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Az önce Lady Macbeth\'in yanından ayrıldın. Ona "Yapamayacağım" dedin. Ama o seni geri çevirdi. Sözleriyle, gözleriyle, sevgisini geri çekme tehdidiyle. Bu ânı düşün — Lady Macbeth\'in sözleri bedeninde nereye yerleşti?',
          soru: 'Sözler nereye değdi?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Bu yeni karar verme ânındaki Macbeth, az önceki Macbeth\'le aynı mı? Postürün eğildi mi, çöktü mü, sertleşti mi? Sen tarif etme — bedenin söylesin.',
          soru: 'Postürün ne diyor?',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Lady Macbeth sana şöyle demişti: "Babamı andırmasaydı uyurken, kendim yapardım." Bu cümle nasıl bir cümle? Suçlama mı, sevgi mi, manipülasyon mu, yoksa onun da gerçek inancı mı? Hangi tonu sende daha çok yankılanıyor?',
          soru: 'Cümlenin tonu',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Lady Macbeth\'in yüzünü zihninde gör. Sözlerinin söylendiği anki yüz. Gözlerinde ne var? Onun yüzü senin için bir kapı mı, bir ayna mı, bir tuzak mı?',
            isitsel:   'Onun sesinin tonu — sevgi mi, sertlik mi, soğuk mantık mı? Bu ses senin bedeninde nereyi açıyor, nereyi kapıyor?',
            kinestetik:'Lady Macbeth sana fiziksel olarak yaklaşmıştı, dokunmuştu. O dokunuş şimdi senin bedeninde nerede yaşıyor? Kolunda mı, omzunda mı, göğsünde mi?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şimdi içinde dönen bir cümle var: "Yapacağım." Bu cümle senden mi geliyor, Lady Macbeth\'ten mi, yoksa ikinizin arasından çıkan üçüncü bir şeyden mi? Bedeninin neresinden çıktı?',
          soru: 'Cümle nereden geldi?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak içinden geçir: "Hazırım. Tüm bedenimle bu korkunç işe gerildim." Bu bir karar mı, bir teslim oluş mu, yoksa kendine yalan söyleme mi?',
          soru: 'Bu cümle ne?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Yaşıyorsun, buradasın. Macbeth\'in karar ânı orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 3 — Hançerli Halüsinasyon
    // ==========================================================================
    {
      id: 'hancerli-halusinasyon',
      no: 3,
      baslik: 'Hançerli Halüsinasyon',
      altbaslik: 'Zihnin gerçeklikle bağı kopuyor',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: '2.1',
      travmaKategorileri: ['zihinsel_kirilma', 'varolussal'],
      travmaSeviyesi: 3,
  
      girisMetni: 'Bu egzersizde Macbeth\'in Duncan\'ı öldürmek üzere yürürken havada bir hançer gördüğü âna gideceğiz. Bu sıradan bir görüntü değil — zihninin gerçeklikle bağının çatlamaya başladığı an. Bedeninle yapacağın bir şeye, zihnin önceden bedeninden çıkmış bir versiyonu sunuyor. Yapmamış gibi göstermeye, ama görerek, başarmaya çalışıyor.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz zihinsel bir kırılmaya yaklaşıyor. Hazır olduğunda devam et. Acele etme.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Kalede gece yarısı. Duncan başka bir odada uyuyor. Sen koridordasın ya da kendi odanda. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Az önce Lady Macbeth seni hazırladı. Karar verildi. Ama henüz yapılmadı. Bedenin şu an iki şey arasında: Yapılacak olan ve henüz yapılmamış olan. Bu arada nasıl bir his var bedende?',
          soru: 'Bedeninin durumu',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Yürümek üzeresin — Duncan\'ın odasına. Bu bir yürüyüş mü, bir sürükleniş mi, bir mecbur kalış mı? Bedenin nasıl ilerliyor, sen tarif etme, dene.',
          soru: 'Yürüyüşün niteliği',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Aniden — havada bir şey beliriyor. Bir hançer. Gerçek değil. Ama gerçek görünüyor. Sen ona uzanıyorsun, eline gelmiyor. Hâlâ orada. Bu görüntüyü zihninde inşa et — ona ne kadar yaklaşırsan yaklaş, dokunamıyorsun. Bedenin nasıl tepki veriyor?',
          soru: 'Bedenin tepkisi',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Hançer nasıl bir görüntü? Net mi, bulanık mı? Kanlı mı, parlak mı? Sabit mi, hareketli mi? Etrafında ne var? Bu görüntüyü detaylandır.',
            isitsel:   'Bu halüsinasyonun bir sesi var mı? Bir uğultu, bir fısıltı, bir çıngırak, bir ölüm sessizliği? Yoksa sadece kendi nefesinin sesi mi?',
            kinestetik:'Hançere uzandığında elinde ne hissediyorsun? Boşluk mu, soğukluk mu, bir titreşim mi? Bedenin ona yaklaşmak mı istiyor, kaçmak mı?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak içinden geçir: "Önümde gördüğüm bir hançer mi? Sapı bana dönük… Gel, tutayım seni." Sen ona seslenmek istiyorsun ama bilmiyorsun: Bu zihninin sana yardım etmesi mi, yoksa seni delirmenin eşiğine getirmesi mi?',
          soru: 'Bu cümle ne?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Hançer kayboldu. Ama içinde bir karar kalmıyor — bir saplantı kaldı. Şimdi ne yapacaksın? Yürümeye devam mı edeceksin? Bedenin sana ne söylüyor?',
          soru: 'Beden ne diyor?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz derin bir zihinsel sarsıntı yerine götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Etrafındaki üç şeyi say. Hançer orada değil — sen burada, gerçek bir bedendesin. Su iç. Birkaç dakika öylece otur. Bugün bitince fiziksel bir aktivite — yürüyüş, duş, biriyle sohbet — yapmak iyi gelecek.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 4 — Cinayet Sonrası Eller
    // ==========================================================================
    {
      id: 'cinayet-sonrasi',
      no: 4,
      baslik: 'Cinayet Sonrası Eller',
      altbaslik: 'Geri dönüşü olmayan an',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: '2.2',
      travmaKategorileri: ['siddet', 'ahlaki_yara'],
      travmaSeviyesi: 3,
  
      girisMetni: 'Bu egzersizde Macbeth\'in Duncan\'ı öldürdükten hemen sonraki âna gideceğiz. Yapıldı. Geri dönüşü yok. Ellerinde kan var — gerçek kan. Ve içinde bir şey: uyku artık imkansız. Eylem bitti, ama eylemin gerçekliği şimdi başlıyor.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz şiddet sonrası bir âna gidiyor. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Az önce Duncan\'ın odasından çıktın. Koridorda mısın, kendi odanda mısın? Lady Macbeth nerede? Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Ellerine bak. Üzerlerinde kan var. Kuruyor mu, taze mi? Sıcak mı, soğuk mu? Sadece ellerinde mi, yoksa daha fazla mı? Bunu bedeninde hisset — ama tarif etme, sadece izle.',
          soru: 'Eller şu an nasıl?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Cinayet öncesi Macbeth ile şu anki Macbeth aynı bedende mi? Postürün ne kadar değişti? Bir bedensel deneme yap — eski hâlini hatırla, sonra şimdiki hâline gel.',
          soru: 'İki Macbeth arası fark',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Yan odada bir ses duydun — sanki biri uyandı. Bedeninde anlık bir şey: korku mu, panik mi, donma mı? Şimdi kulak kabartıyorsun. Henüz nefes almıyorsun. O bekleyiş bedeninde nerede?',
          soru: 'Bekleyiş nerede?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Ellerine bakıyorsun. Bu kan görüntüsü bedeninde başka bir görüntüyü tetikliyor mu? Duncan\'ın yüzü mü, kendi gelecekteki hâlin mi, çocuklarının olmayan yüzü mü?',
            isitsel:   'Bir ses tekrar tekrar başında dönüyor mu? "Sleep no more" — uyku yok artık. Bu sesin tonu nasıl? Kendi sesin mi, başka bir ses mi? Yüksek mi, fısıltı mı?',
            kinestetik:'Ellerinde kan ağırlığı var. Bu ağırlık sadece ellerinde mi kalıyor, yoksa kollarına, omuzlarına, göğsüne mi yayılıyor? Yıkamak istiyor musun, yoksa bedenin kabullendi mi?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Lady Macbeth geliyor. Sana şöyle diyor: "Bu eller daha çok kanı görür." Sen ona şu cümleyi söylüyorsun: "Tüm Neptün\'ün okyanusu bu kanı yıkayabilir mi?" Bu cümle bir soru mu, bir kabulleniş mi, bir çığlık mı?',
          soru: 'Cümlenin niteliği',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak içinden geçir: "Glamis Beyi uykuyu öldürdü, artık Cawdor uyumayacak, Macbeth artık uyumayacak." Bu bir kehanet mi, bir lanet mi, yoksa kendi geleceğine söylediği bir şey mi?',
          soru: 'Bu cümle ne?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz çok yoğun bir yere götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Ellerine bak — onlar temiz, senin gerçek ellerin. Adını yüksek sesle söyle. Bugünün tarihini söyle. Etrafındaki üç şeyi say. Bir bardak su iç. Bugün bitince mutlaka fiziksel bir aktivite — duş, yürüyüş, dostla sohbet — yap.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 5 — Banquo'nun Hayaleti
    // ==========================================================================
    {
      id: 'banquo-hayaleti',
      no: 5,
      baslik: 'Banquo\'nun Hayaleti',
      altbaslik: 'Kamu önünde çatlama',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: '3.4',
      travmaKategorileri: ['zihinsel_kirilma', 'ahlaki_yara'],
      travmaSeviyesi: 3,
  
      girisMetni: 'Bu egzersizde Macbeth\'in ziyafette Banquo\'nun hayaletini gördüğü âna gideceğiz. Etrafındaki herkes konuşuyor, gülüyor, yiyor. Sadece sen onu görüyorsun. Sadece sen biliyorsun, neden orada. Bu bir zihinsel kırılma değil — bu kamu önünde çatlama.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz sosyal bir alan içinde içsel kırılmayı çalışacak. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Bir ziyafet salonu, lordlar oturmuş, yiyecekler hazır. Sen kralsın, başkanlık masasındasın. Etrafında kimler var? Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Az önce sana haber geldi: Banquo öldü ama Fleance kaçtı. Senin tetiklediğin bir cinayet. Şimdi misafirlerinin önündesin. İçinde iki şey var: Cinayet bilgisi ve ev sahibi rolü. Bedeninde bunlar nerede oturuyor?',
          soru: 'İki şey nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Kralsın, ev sahibisin. Bu rol bedeninde nasıl? Omurgaya, çeneye, omuzlara nasıl yansıyor? Sonra bir an düşün — içinde sakladığın şey bu duruşa ne yapıyor? Çatlatıyor mu?',
          soru: 'Rol ve gerçek',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Senin sandalyene doğru bakıyorsun. Orada biri oturuyor — Banquo. Kanlı, ölü, ama orada. Etrafındakiler onu görmüyor. Sadece sen. Bedenin nasıl tepki veriyor — ayağa kalk istiyor mu, donmak mı, geri çekilmek mi?',
          soru: 'Beden ne yapıyor?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Banquo\'nun hayaleti nasıl bir görüntü? Solgun mu, kanlı mı, sessiz mi, sana bakıyor mu? Etrafındakilerin yüzü ile onun yüzü aynı sahnede nasıl?',
            isitsel:   'Etrafta gürültü var — yemek, konuşma, müzik. Ama Banquo sessiz. Bu sessizlik etraftaki gürültüyü yutuyor mu? Yalnızca onu mu duyuyorsun, ya da onu hiç duymuyor musun?',
            kinestetik:'Bedenin sandalyeden kalkmaya hazırlanıyor mu, yapışmış mı? Ellerinde, ayaklarında titreme var mı? Kontrolü kaybetmeye yakın mısın?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Lady Macbeth fısıldıyor: "Bu sadece bir korku. Yürü, ev sahipliğini yap." Ama sen onu duymuyorsun gibi. Banquo\'ya bakıyorsun. Şimdi ona söyleyeceğin bir cümle var, dışarıya sesli ya da sessizce — ne söyleyeceksin?',
          soru: 'Banquo\'ya cümlen',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak içinden geçir: "Sallanma, kanlı saçlarınla bana — ben yapmadım." Bu bir inkar mı, bir yalvarma mı, bir kendini koruma mı? Beden bu cümleyi söylerken ne yapıyor?',
          soru: 'Cümle nasıl çıkıyor?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz çatlama eşiğine götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Etrafındaki üç şeyi say. Banquo orada değil — sen burada, kendi bedeninde. Su iç. Birkaç dakika öylece otur. Bugün fiziksel bir aktivite yap.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 6 — Cadılara Geri Dönüş
    // ==========================================================================
    {
      id: 'cadilara-donus',
      no: 6,
      baslik: 'Cadılara Geri Dönüş',
      altbaslik: 'Kibrin doruğunda yardım dilenmek',
      sure: '20-25 dk',
      seviye: 'İleri',
      bagliSahne: '4.1',
      travmaKategorileri: ['varolussal', 'ahlaki_yara'],
      travmaSeviyesi: 2,
  
      girisMetni: 'Bu egzersizde Macbeth\'in cadılara geri döndüğü âna gideceğiz. Artık seni onlar bulmuyor — sen onları arıyorsun. Bilgi istiyorsun. Güvence istiyorsun. Bu artık kahraman bir adamın kuşkusu değil — bu çaresiz bir adamın yardım dilenmesi. Ama o bilmiyor henüz çaresiz olduğunu.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Cadıların inine geldin. Karanlık, isli, doğal değil. Sen onları aradın bu sefer. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'İlk karşılaşmada onlar seni şaşırtmıştı. Şimdi sen onları talep ediyorsun. Bu fark bedeninde nerede oturuyor? Neyin değiştiğini bedenin biliyor mu?',
          soru: 'Fark nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Bu, talep eden Macbeth — kibrin doruğunda. Postür sertleşti mi? Çeneyi kaldırdın mı? Bu duruşun altında ne var — gerçek bir güç mü, kendini büyük göstermek için bir savunma mı?',
          soru: 'Postürdeki gerçek',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Cadılar üç görüntü çağırıyor sana. İlki: "Macduff\'tan sakın." İkincisi: "Kadından doğmamış kimse Macbeth\'e zarar veremez." Üçüncüsü: "Birnam Ormanı Dunsinane\'e gelmedikçe yenilmezsin." İkinci ve üçüncü cümle bedeninde nasıl yankılandı? Rahatlama mı, kibir mi, şüphe mi?',
          soru: 'Üç cümle ne yaptı?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Üç görüntü çağrıldı — silahlı bir kafa, kanlı bir çocuk, taçlı bir çocuk. Bu üç imge senin için ne anlama geliyor? Hangisi en çok aklına kazındı?',
            isitsel:   'Cadıların sesi nasıl şimdi? İlk seferinden farklı mı? Daha güçlü mü, daha alaycı mı, daha mesafeli mi? Sen onlara nasıl bir tonla soruyorsun?',
            kinestetik:'Bu inde duruşun farklı. Daha geniş mi, daha gerilmiş mi? Cadıların ortasında olmak bedenine ne yapıyor — küçültüyor mu, büyütüyor mu?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak içinden geçir: "Yenilmezim. Kadından doğan kimse beni yenemez." Bu cümleyi söylerken bedenin gerçekten inanıyor mu, yoksa inandırmaya mı çalışıyor?',
          soru: 'Cümlenin altında inanç var mı?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Cadılar kayboluyor. Sen yalnız kalıyorsun. Ama içinde bir şey değişti — daha güçlü mü, daha boş mu? Bedenin sana ne söylüyor?',
          soru: 'Sen ne hissediyorsun?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Buradasın. Macbeth\'in kibri orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 7 — Lady Macbeth'in Ölümü
    // ==========================================================================
    {
      id: 'lady-olumu',
      no: 7,
      baslik: 'Lady Macbeth\'in Ölümü',
      altbaslik: '"Tomorrow and tomorrow"',
      sure: '25-30 dk',
      seviye: 'İleri',
      bagliSahne: '5.5',
      travmaKategorileri: ['kayip', 'varolussal'],
      travmaSeviyesi: 3,
  
      girisMetni: 'Bu egzersizde Macbeth\'in Lady Macbeth\'in öldüğünü öğrendiği âna gideceğiz. Tek sevdiğin, tek ortağın, tek seninle bu işin ağırlığını taşıyanın artık yok. Ama tepkin bekleneni vermiyor — ağlamıyorsun, çığlık atmıyorsun. Sadece bir cümle çıkıyor: "Yarın, yarın, yarın…" Ve bu cümle aslında zamanın anlamsızlığı üzerine ettiğin son sözdür.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Bu egzersiz büyük bir kayba ve varoluşsal yorgunluğa götürüyor. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Dunsinane Kalesi. Düşman ordusu yaklaşıyor. Senin yanında çok az adam kaldı. Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Bir hizmetkar geliyor. Sana haber veriyor: "Kraliçe öldü, lordum." Bu cümleyi duyduğunda bedenin nasıl tepki veriyor? Şok mu, hiçbir şey mi, beklenmiş bir kayıp mı?',
          soru: 'Bedenin ilk tepkisi',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Bu Macbeth\'in postürü değişiyor mu, yoksa zaten değişmişti? Çoktan boş bir adam mı bu, yoksa bu haberle çöküyor mu? Bedenin söylesin.',
          soru: 'Postürün durumu',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Lady Macbeth artık yok. Onunla son konuşmanı düşün. Kavga mıydı, sevgi miydi, mesafe miydi? Bu son konuşma şimdi bedeninde nerede oturuyor?',
          soru: 'Son konuşma nerede?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Lady Macbeth\'in yüzünü zihninde gör. Hangi anı geliyor önce — onunla ilk gecen mi, kararı verdiğiniz an mı, son birlikte gördüğünüz an mı?',
            isitsel:   'Onun sesi neye benziyor şimdi senin için? Bir hatıra mı, bir hayalet mi, sessizlik mi? "Macbeth" diye sana seslendiğindeki ton hâlâ duyuluyor mu içinde?',
            kinestetik:'Onun yokluğu bedeninde bir boşluk yarattı mı? Yatağın yanı mı, yan odan mı, omzunun yanı mı? Yokluk nereye yerleşti?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak yavaşça içinden geçir: "Yarın, yarın, yarın… günden güne sürünür bu küçük adımlar… Hayat bir kısa mum, sönük gölge, sahnede bir saatçik kibirli oyuncu… ve sonra duyulmaz olur." Bu cümle bir yas mı, bir bitki sızı mı, bir kabulleniş mi, bir nihilizm mi?',
          soru: 'Cümlenin tonu',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Bu cümleden sonra ne kaldı sende? Yorgunluk mu, boşluk mu, daha derin bir öfke mi, garip bir hafiflik mi? Bedenin ne diyor?',
          soru: 'Sende ne kaldı?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Bu egzersiz büyük bir kayba ve varoluşsal yorgunluğa götürdü. Şimdi yavaşça geri dönüyoruz. Üç derin nefes al. Adını yüksek sesle söyle. Bugünün tarihini söyle. Etrafındaki üç şeyi say. Lady Macbeth orada — Macbeth orada — sen burada. Su iç. Birkaç dakika öylece otur. Bugün bitince fiziksel bir aktivite yap.',
        },
      ],
    },
  
    // ==========================================================================
    //  EGZERSİZ 8 — Macduff ile Son Düello
    // ==========================================================================
    {
      id: 'macduff-duello',
      no: 8,
      baslik: 'Macduff ile Son Düello',
      altbaslik: 'Kehanetin kırılması',
      sure: '20-25 dk',
      seviye: 'İleri',
      bagliSahne: '5.8',
      travmaKategorileri: ['varolussal', 'ahlaki_yara'],
      travmaSeviyesi: 2,
  
      girisMetni: 'Bu egzersizde Macbeth\'in Macduff ile son düellosuna gideceğiz. Birnam Ormanı geldi. Lady Macbeth öldü. Yine de bir kehanet kaldı: Kadından doğan kimse seni yenemez. Bu son güvencen. Ama Macduff sana bir şey söylüyor — ve son güvencen de elinden alınıyor.',
  
      adimlar: [
        {
          no: 1,
          tip: 'okuma',
          metin: 'Rahat bir yere otur. Birkaç derin nefes al. Hazır olduğunda devam et.',
        },
        {
          no: 2,
          tip: 'yazma',
          metin: 'Gözlerini kapat. Macbeth şu an nerede? Savaş alanı, kale dışında. Adamların düşmüş, kaçmış. Sen tek başına mısın, Macduff karşında mı? Mekanı bul.',
          soru: 'Neredesin?',
        },
        {
          no: 3,
          tip: 'yazma',
          metin: 'Macduff karşında. Onu öldürmek istiyorsun ama bir şey seni durduruyor — onun ailesini katlettin. Bu bilgi şu an bedeninde nerede?',
          soru: 'Suçluluk nerede?',
        },
        {
          no: 4,
          tip: 'yazma',
          metin: 'Ayağa kalk. Kılıç elinde. Bu, son düellonun Macbeth\'i — eski savaşçı mı, yorgun bir adam mı, yoksa hâlâ kibrini taşıyan biri mi? Bedenin söylesin.',
          soru: 'Postürün ne diyor?',
        },
        {
          no: 5,
          tip: 'yazma',
          metin: 'Otur. Macduff sana şöyle diyor: "Macduff annesinin karnından zamansız çıkarıldı." Bu cümleyi duyduğunda bedeninde ne oluyor? Kehanet az önce çöktü.',
          soru: 'Cümle nereye düştü?',
        },
        {
          no: 6,
          tip: 'vak',
          vakSorulari: {
            gorsel:    'Cümleyi duyduğunda gözünün önünde ne beliriyor? Cadıların yüzü mü, kendi geleceğin mi, ailesini öldürdüğün adam mı, yoksa siyah bir boşluk mu?',
            isitsel:   'Bu cümle senin içinde nasıl yankılandı? Bir kahkaha mı, bir çığlık mı, bir sessizlik mi? Cadıların sesi geri mi geldi?',
            kinestetik:'Kılıcın elinde — ama eli aynı el mi? Ağırlığı değişti mi? Kollarında, dizlerinde, çenende ne oldu?',
          },
          soru: 'Ne buldun?',
        },
        {
          no: 7,
          tip: 'yazma',
          metin: 'Şimdi bir karar var: Teslim olmak ya da savaşmak. Cadılar yalan söyledi — ama sen yine de duruyorsun. Hangi taraf daha güçlü bedeninde? Teslimiyet mi, son bir savaş mı?',
          soru: 'Hangi taraf?',
        },
        {
          no: 8,
          tip: 'yazma',
          metin: 'Şu cümleyi Macbeth olarak içinden geçir: "Yine de denemeyeceğim teslim olmayı. Yere atmayacağım kalkanımı, ölünceye kadar dövüşürüm." Bu bir cesaret mi, bir kibir mi, bir kabulleniş mi?',
          soru: 'Cümlenin altında ne var?',
        },
        {
          no: 9,
          tip: 'cikis',
          metin: 'Üç derin nefes al. Adını söyle. Buradasın. Macbeth\'in son ânı orada — sen şimdi kendine döndün. Su iç. Birkaç dakika öylece otur.',
        },
      ],
    },
  
  ],
};

export default macbeth;
