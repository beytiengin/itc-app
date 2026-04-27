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

  // ─── ZİHİNSEL ANTRENMANLAR ────────────────────────────────────────────────
  // Bu karakter için zihinsel antrenmanlar yakında.

  antrenmanlar: [],
};

export default macbeth;
