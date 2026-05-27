// data/hamlet-i18n.js
// ITC Actor's Gym — Hamlet vitrin sözlüğü (TR-only).
//
// KARAR: Willy tek çift-dilli prototip. Hamlet yalnızca TR. Bu yüzden burada
// `en` dalı YOK — app/lib/dil.js'deki ceviri() fonksiyonu `sozluk[dil] || sozluk.tr`
// ile çalıştığı için, kullanıcı dili EN'e çevirse bile sayfa sessizce TR'ye düşer
// (patlamaz, beyaz ekran olmaz).
//
// YAPI: willy-i18n.js tr dalının birebir simetriği. Anahtar isimleri AYNI tutuldu
// ki willy sayfalarından kopyalanan Hamlet sayfaları her anahtarı bulabilsin.
// Yalnızca DEĞERLER Hamlet'e uyarlandı.
//
// KULLANIM:
//   import { useDil, ceviri } from '../app/lib/dil';
//   import hamletI18n from '../data/hamlet-i18n';
//   const { dil } = useDil();
//   const s = ceviri(hamletI18n, dil);
//   <h1>{s.hub.bolum1Baslik}</h1>
//
// SAYI HARİTASI (Willy'den farklı — kopyalarken en sık hata burada):
//   8 olay · 8 ilişki · 14 sahne · 5 perde · 5 tercih · 5 boşluk · 15 alt-soru
//   "Sahne" kullanıldı (Willy "birim" kullanmıştı — Hamlet'te perde/sahne var).
//   "Shakespeare" (Willy'de "Miller"), "Hamlet" (Willy'de "Willy").
//
// ⚠ BEYTI GÖZDEN GEÇİRSİN — aşağıdaki edebi metinleri ben yazdım/uyarladım,
//   son söz senin: hub kart açıklamaları, oyunOncesi.acilis1/2 + ilke2 alıntısı,
//   yazarinCercevesi.acilis, timeline.acilis. Bunlar bul-değiştir değil, yazarlık.

const hamletI18n = {
  tr: {
    nav: {
      marka: 'Inside The Character',
      kalibrasyon: 'Kalibrasyon',
      kulis: 'Kulis',
      karakterler: '← Karakterler',
      cikis: 'Çıkış',
    },

    hub: {
      ustEtiket: 'Modül II · Karakterini İnşa Et',
      bolum1Etiket: 'Tanı',
      bolum1Baslik: 'Değiştirilemez Doğrular',
      koordinatEtiket: 'Dört İstasyon',
      koordinatBaslik: 'Karakter koordinatları',
      ac: 'Aç →',
      kartlar: [
        {
          etiket: 'Keşfet',
          baslik: 'Oyun Öncesi Yaşam',
          altyazi: 'Sahneye çıkmadan önce ne yaşandı',
          aciklama: "Sekiz olay, sekiz ilişki — Hamlet'in bedeninde taşıdığı geçmiş.",
        },
        {
          etiket: 'Haritala',
          baslik: 'Zaman Çizgisi',
          altyazi: "Hamlet'in bedensel zinciri",
          aciklama: 'On dört sahne, beş perde. Şüpheden eyleme, eylemden kabule — içsel zincir.',
        },
        {
          etiket: 'Yorumla',
          baslik: 'Yazarın Çerçevesi',
          altyazi: 'Beş tercih, beş kavşak',
          aciklama: "Hayalet, delilik, Ophelia, erteleme, son — Shakespeare'in açık uçlarına seninkini koy.",
        },
        {
          etiket: 'Yarat',
          baslik: 'Senin Çerçeven',
          altyazi: "Shakespeare'in sustuğu yer",
          aciklama: 'Beş boşluk, on beş alt-soru. Sahnelerin altında akan görünmez metni sen yaz.',
        },
      ],
      davet: {
        kesfet:   "Keşfet'e git →",
        haritala: "Haritala'ya git →",
        yorumla:  "Yorumla'ya git →",
        yarat:    "Yarat'a git →",
        son:      "Kendi Hamlet'ini gör →",
      },
      modul3Etiket: 'Modül III · Yolculuk Modu',
      modul3Baslik: "Hamlet'in tüm yaşamı, baştan sona",
      modul3Metin:
        "Modül II'yi tamamladığında karakter koordinatları kurulmuş olur. Modül III, Hamlet'in tüm yaşamını — pre-senaryodan sahnedeki son anına — bedeninle bir kez baştan sona dolaşman için tasarlandı. Sahneler ve aralarındaki boşluklar, hayat sırasına dizilir; AI Dış Ses eşlik eder.",
      modul3Rozet: 'Yakında',
      modul3Not: 'Modül II tamamlandığında açılacak.',
    },

    ortak: {
      // NOT: anahtar adı `geriWilly` korundu (kopyalanan sayfalar bu adı arıyor),
      // değer Hamlet'e uyarlandı. İstersen sayfalarla birlikte geriHamlet'e çevir.
      geriWilly: '← Hamlet',
      senteziAc: 'Sentezi Aç →',
      kaydediliyor: 'kaydediliyor…',
      kaydedildi: '✓ kaydedildi',
      hata: 'kaydedilemedi',
      yukleniyor: 'Hazırlanıyor…',
    },

    seninCerceven: {
      etiket: 'Modül II · Bölüm 5',
      baslik: '◇ Senin Çerçeven',
      altyazi: "Shakespeare'in sustuğu yer",
      giris1: "Yazarın Çerçevesi'nde Shakespeare'in yazdığını okudun. Şimdi, son bölümde, onun yazmadığını yazacaksın.",
      giris2: "Hamlet metninde sahnelerin arasında büyük boşluklar var. Hamlet bir sahnede çıkıyor, sonraki sahnede başka bir Hamlet olarak giriyor. Aralarda bir şeyler yaşandı — Shakespeare bunların çoğunu yazmadı. Ama yaşandı. Karakter bedeninde taşıyor.",
      alinti: '"Boşluklar tesadüf değil — oyuncuya bırakılmış mekânlar."',
      sinirEtiket: 'Yöntem sınırı',
      sinir1Once: 'Senin Çerçeven seni ',
      sinir1Vurgu: 'kendi anılarına',
      sinir1Sonra: ' döndürmez — karakterin yaşadığı ama metinde yazılmamış olası bir ana götürür.',
      sinir2: "Yazarken Hamlet'in zihninde misafirsin. Senin acından beslenmiyor — onun verisinden besleniyor.",
      manifestoEtiket: 'ITC Manifestosu · Üç İlke',
      ilke1Baslik: 'Görmediğimizi Taşımak',
      ilke1Metin: 'Karakterin sahnede gösterilmeyen geçmişini, oyuncunun sahnede taşıması.',
      ilke2Baslik: 'Karakterin Verisi',
      ilke2Metin: 'Karakterin verisi karakterin kendisinden çıkarılır — oyuncunun yarasından beslenmez.',
      ilke3Baslik: 'Sessiz Evrim',
      ilke3Metin: '"Çoğu sistem sahne içindeki davranışı analiz ederken, ITC karakterin dönüşümünü sahne dışındaki boşluklarda arar. Repliklerin arasındaki suskunluk, oyuncunun zihinsel canlandırma becerisiyle doldurulur."',
      ilke3Kaynak: '— Inside The Character, Manifesto, 3. Madde',
      ilke3AktifNot: '— Bu sayfada bu ilke uygulanıyor.',
      yontemEtiket: 'Boşluk Nasıl Yazılır?',
      adim1Baslik: 'Çerçeveyi Oku',
      adim1Metin: 'Sahne öncesi nerede bitti, sahne sonrası nerede başlıyor — iki ucu net gör.',
      adim2Baslik: 'Soruları Aç',
      adim2Metin: '"Burada ne oldu?" değil, "Hamlet\'in bedeninde ne oldu?" diye sor.',
      adim3Baslik: 'Duyusal Yaz',
      adim3Metin: 'Soyut kavramlardan kaç. "Üzüldü" değil, "sol elinin parmaklarını sıktı".',
      adim4Baslik: 'Tek Anı Seç',
      adim4Metin: 'Boşluk uzun olabilir, ama sen tek bir anı yazıyorsun.',
      adim5Baslik: 'Sahneye Geçir',
      adim5Metin: 'Yazdığın şey bir sonraki sahneye nasıl taşınacak?',
      dogruEtiket: 'Doğru cevap aramak değil',
      dogru1Once: 'Yazdıkların "doğru" olmak zorunda değil — Shakespeare\'in niyetiyle örtüşmek de zorunda değil. Çünkü Shakespeare niyetini sustu. Yazdıkların ',
      dogru1Vurgu: 'senin Hamlet\'in için',
      dogru1Sonra: ' doğru olmalı.',
      dogru2: 'Eğer bir boşluk için cümle gelmiyorsa, sayfayı boş bırak. Sonra geri dön. Bazen bir boşluk yarın açılır, bugün açılmaz. Bu da bir bilgi.',
      ilerlemeEtiket: 'Beş Boşluk',
      boslugaDeginildi: 'boşluğa değinildi',
      altSoruBirim: 'alt-soru',
      sentezHazir: 'Sentez Hazır',
      sentezKismi: 'Sentez (kısmi)',
      sentezBaslik: 'Beş Boşluk, Bir Karakter',
      sentezAciklama: 'Beş boşluğu birleştirip sahnelerin altında akan görünmez çizgiyi gör.',
      gecisOnceki: 'Yorumla',
      gecisOncekiBaslik: 'Yazarın Çerçevesi',
      gecisSonraki: 'Modül III · Yolculuk Modu',

      altSayfa: {
        geri: '← Senin Çerçeven',
        boslukKelime: 'Boşluk',
        oncePrefix: 'Önce — ',
        sonraPrefix: 'Sonra — ',
        zamanCizgisiSahne: '→ Zaman Çizgisi · Sahne',
        altSorularBaslik: "Senin Hamlet'in İçin Bu Boşluk",
        altSorularAciklama: 'Üç anı yaz. Her biri için bir alt-soru. Hepsini yazma zorunlu değil — biri açılır, diğeri yarın açılır.',
        genelBaslik: 'Bu Boşluğun Bütünü',
        genelAciklama: 'Opsiyonel. Üç alt-soru yerine boşluğu bir bütün olarak yazmak istersen burası. Ya da alt-soruları tamamladıktan sonra bunları birleştiren bir paragraf.',
        genelPlaceholder: 'Boşluğun bütünü — sahne arasında akan görünmez metin.',
        tercihBaslik: "Senin Hamlet'inde",
        yazarinLink: 'Yazarın Çerçevesi →',
        ozel: '+ Özel',
        uyumSorusu: 'Yazdığın boşluk bunlarla uyumlu mu?',
        sentezLink: 'Sentez →',
        kaydediliyor: 'Kaydediliyor…',
        kaydedildi: '✓ Kaydedildi',
        kaydedilemedi: '⚠ Kaydedilemedi',
      },

      sentez: {
        geri: '← Senin Çerçeven',
        hepsiYazildi: '✓ Beş Boşluk Yazıldı',
        kismiOnce: 'Sentez · ',
        kismiSonra: ' boşluk yazıldı',
        baslik: 'Beş Boşluk, Bir Karakter',
        girisTam: "Beş boşluğu yazdın. Şimdi bunlar bir araya gelip, sahnelerin altında akan görünmez bir çizgi oluşturuyor: senin Hamlet'in iç hayatı.",
        girisKismi: 'Şu ana kadar yazdığın boşluklara bak. Eksik kalanlara geri dönebilirsin.',
        duzenle: 'Düzenle →',
        yaz: 'Yaz →',
        sahneZeminiOnce: 'Sahne ',
        sahneZeminiSonra: ' zemini bu boşlukta yazıldı.',
        altSoruYazildi: ' alt-soru yazıldı',
        genelMetinVar: ' · genel metin var',
        henuzYazilmadi: 'Henüz yazılmadı —',
        yazmayaBasla: 'yazmaya başla →',
        tasimaBaslik: 'Yazdıklarını sahneye taşımak',
        tasima1: 'Yazdıkların kâğıt için değil, beden için. Şimdi şunu dene: yazdığın beş boşluğu okurken, gözlerini kapat ve onları kısa imgeler olarak kaydet. Bir his, bir koku, bir el hareketi, bir bakış.',
        tasima2: 'Sahnede bu imgeleri bilinçli olarak çağırmak gerekmez. Sadece bedeninde kayıtlı olsunlar yeterli. Sahne karakteri sürüklediğinde, onlar arka planda taşınırlar.',
        tasimaAlinti: '"Yazdıkların sahnenin altındaki nehirdir."',
        modulTamam: '✓ Modül II Tamamlandı',
        recap1: 'Doğruları gördün.',
        recap2: 'Oyun öncesini tanıdın.',
        recap3: "Zaman Çizgisi'ni dolaştın.",
        recap4: 'Yazarın çerçevesini sahiplendin.',
        recap5: 'Boşlukları yazdın.',
        koordinat: 'Karakter koordinatları kuruldu.',
        kapanis: "Bu kısım bir kez yazılıp bitmez. Yıllarca, farklı Hamlet'lerinde geri dönüp yeniden yazabilirsin. Her yeni sahnelemede yeni boşluklar, yeni cevaplar.",
        hazirMi: 'Hazır mısın?',
        modul3Davet: "Modül III · Yolculuk Modu seni bekliyor. Hamlet'in tüm yaşamını bedeninle bir kez baştan sona dolaşacaksın.",
        gecisOnceki: 'Yarat',
        gecisOncekiBaslik: 'Senin Çerçeven',
        gecisSonraki: 'Modül III · Yolculuk Modu',
      },
    },

    oyunOncesi: {
      geri: '← Hamlet',
      etiket: 'Modül II · Bölüm 2',
      baslik: 'Oyun Öncesi Yaşam',
      altyazi: 'Sahneye çıkmadan önce ne yaşandı',
      acilis1: "Shakespeare'in oyunu kronolojik bir başlangıçla açılmaz — olaylar çoktan olmuştur. Babası iki ay önce ani ve şüpheli biçimde ölmüş, annesi apar topar amcasıyla evlenmiş, taht el değiştirmiş, surlarda bir hayalet dolaşmaya başlamıştır. Bütün bunlar oyunun hareket noktasıdır, ama hiçbiri Hamlet'in seçimiyle olmamıştır — o, hepsinin ortasına çağrılır.",
      acilis2: 'Sahneye ilk çıktığın an, Hamlet zaten yası, ihaneti ve henüz adını koyamadığı bir kuşkuyu bedeninde taşıyordur.',
      vurgu: '"Hamlet sahneye ilk çıktığı an, bütün geçmişin ağırlığını bedeninde taşır."',
      ipucuEtiket: 'İpucu',
      ipucuMetin: "Bu sekiz olay sahnede gösterilmez — ama Zaman Çizgisi'nin ilk sahnelerinde Hamlet'in bedeninde olur.",
      ipucuLink: 'Zaman Çizgisi →',
      ilkeEtiket: 'ITC İlkesi · Görmediğimizi Taşımak',
      ilke1: 'ITC yaklaşımının çekirdeklerinden biri budur: karakterin sahnede gösterilmeyen geçmişini, oyuncunun sahnede taşıması.',
      ilke2pre: "Hamlet'in ilk hâli — ",
      ilke2alinti: '"Ah bu kaskatı beden bir eriyip gitse"',
      ilke2post: ' — eğer arkasında iki ay önce ölmüş bir baba, aceleyle evlenmiş bir anne, ve dile getirilememiş bir kuşku yoksa, sadece karamsar bir söz kalır. Eğer varsa — bir insanın çığlığı olur.',
      bolum1Etiket: 'Birinci Bölüm',
      bolum1Baslik: 'Sekiz İlişki',
      bolum1Altyazi: 'Hamlet\'i kuşatan bağlar — geçmiş, şimdi, iz.',
      bolum1Ilerleme: 'tanındı',
      kapanis1: 'Sekiz ilişki, sekiz bağ. Hamlet sahneye bu insanlarla çıkıyor.',
      bolum2Etiket: 'İkinci Bölüm',
      bolum2Baslik: 'Sekiz Olay',
      bolum2Altyazi: 'Bu bağlarda ne yaşandı — hepsi bedeninde.',
      bolum2Ilerleme: 'içselleştirildi',
      kapanis2: 'Hamlet, sahneye sekiz ilişki ve sekiz olayla çıkıyor — önce insanlar, sonra yükleri.',
      sonEtiket: '✓ Buraya kadar',
      sonMetin: "Hamlet'in koordinatlarını kurdun. Doğruları gördün, oyun öncesini tanıdın, ilişkileri haritaladın. Şimdilik bunlar bedeninde otursun. Bir nefes ver.",
      gecisOncekiEtiket: 'Tanı',
      gecisOncekiBaslik: 'Doğrular',
      gecisSonrakiEtiket: 'Haritala',
      gecisSonrakiBaslik: 'Zaman Çizgisi',
    },

    yazarinCercevesi: {
      etiket: 'Modül II · Bölüm 4',
      baslik: 'Yazarın Çerçevesi',
      altyazi: 'İçine girdiğin oda',
      acilis: "Bu bölümde beş kritik tercih var. Her biri Hamlet'in yüzyıllardır tartışılan açık uçlarından biri: hayaletin gerçekliği, deliliğin sahiciliği, Ophelia'ya aşk, ertelemenin nedeni, sondaki teslimiyet. Her tercihte Shakespeare'in metinde bıraktığı işaretleri okuyacaksın, olası yorumları göreceksin — ve seninkini işaretleyeceksin.",
      vurgu: '"Doğru cevap yok. Senin Hamlet\'inin cevabı var."',
      kavsakEtiket: 'Beş Kavşak',
      sentezKartBaslik: 'Beş Cümle, Bir Hamlet',
      sentezKartTam: "Beş tercihin de hazır. Şimdi onları birleştir: senin Hamlet'in.",
      sentezKartKismi: 'Şu ana kadar yaptığın seçimleri görebilirsin. Hepsini tamamladığında tam sentez açılır.',
      sentezKartLink: 'Sentezi Aç →',
      gecisOncekiEtiket: 'Haritala',
      gecisOncekiBaslik: 'Zaman Çizgisi',
      gecisSonrakiEtiket: 'Yarat',
      gecisSonrakiBaslik: 'Senin Çerçeven',

      altSayfa: {
        geri: '← Yazarın Çerçevesi',
        tercihKelime: 'Tercih',
        oncekiTercih: '← Tercih',
        sonrakiTercih: 'Tercih',
        sentezLink: 'Sentez →',
      },

      sentez: {
        geri: '← Yazarın Çerçevesi',
        hepsiTamam: '✓ Beş Tercih Tamamlandı',
        kismiOnce: 'Sentez · ',
        kismiSonra: ' tercih hazır',
        baslik: 'Beş Cümle, Bir Hamlet',
        girisTam: 'Beş tercihte de seçimini yaptın (ya da kendi yorumunu yazdın). Şimdi bu beş seçim birleşip senin Hamlet\'ini ortaya çıkarıyor.',
        girisKismi: 'Henüz tüm tercihler tamamlanmadı. Şu ana kadar yaptığın seçimleri görebilirsin — eksik kalanlara geri dönüp tamamlayabilirsin.',
        ozel: 'Özel',
        henuzSecim: 'Henüz seçim yapılmadı —',
        tamamlamakAc: 'tamamlamak için aç →',
        seninCumlen: 'Senin Cümlen',
        kapanisEtiket: 'Buraya kadar',
        kapanis1pre: "Doğruları gördün. Oyun öncesini tanıdın. Zaman Çizgisi'ni dolaştın. Şimdi ",
        kapanis1em: 'yazarın çerçevesini',
        kapanis1post: " sahiplendin — Shakespeare'in açık uçlarından kendi yorumunu çıkardın.",
        kapanis2pre: "Bunlar senin Hamlet'inin ",
        kapanis2em: 'omurgası',
        kapanis2post: '. Sahneye çıktığında, beş tercihinin hepsi bedeninde olacak.',
        kapanis3: 'Bir nefes ver. Sıradaki son bölüm.',
        gecisOncekiEtiket: 'Yorumla',
        gecisOncekiBaslik: 'Yazarın Çerçevesi',
        gecisSonrakiEtiket: 'Yarat',
        gecisSonrakiBaslik: 'Senin Çerçeven',
      },
    },

    timeline: {
      geri: '← Hamlet',
      etiket: 'Modül II · Bölüm 3',
      baslik: 'Zaman Çizgisi',
      altyazi: "Hamlet'in bedensel zinciri — beş perde",
      acilis: "Bir karakter, sahnelerini ayrı ayrı yaşamaz. Her sahneye bir öncekinden bir şey taşır; her sahneden bir sonrakine bir şey bırakır. Bu zincire iç zaman çizgisi diyoruz. Hamlet'te zincir beş perde boyunca uzar: şüphe ve pasif yasla başlar, plan ve gözlemle gerilir, eylemle patlar, sürgünde dönüşür, kabulle kapanır. Wittenberg'den dönen genç prens ile düelloya çıkan adam aynı kişi değildir.",
      acilisEm: 'içsel zaman çizgisi',
      vurgu: '"Her sahne, bir önceki sahnenin bedendeki devamıdır."',
      anatomiBaslik: 'Bir Sahne Kartında Ne Var?',
      anatomiOlayEt: 'Olay',
      anatomiOlay: "Sahnede ne oluyor — Shakespeare'in metnine sadık özet",
      anatomiIcselEt: 'İçsel',
      anatomiIcsel: "Hamlet'in o sahnede taşıdığı duygusal ton",
      anatomiSicaklikEt: 'Sıcaklık',
      anatomiSicaklik: "1'den 10'a — soğuk, donmuş; sıcak, patlamada",
      anatomiYukEt: 'Yük',
      anatomiYuk: 'Bir sonraki sahneye taşıdığı şey',
      rozetSicaklik: 'Sıcaklık işaretlendi',
      rozetAnlasildi: 'Anlaşıldı',
      tikla: 'Bir sahneye tıklayarak detaylarını gör',
      sonEtiket: '✓ Buraya kadar',
      sonMetin: 'On dört sahnenin bedensel zincirini gördün — şüpheden eyleme, eylemden kabule. Her sahnenin sıcaklığını okudun, kendi yorumunu işaretledin. Bu zincir bedeninde yerleşene kadar buraya geri dönebilirsin.',
      gecisOncekiEtiket: 'Keşfet',
      gecisOncekiBaslik: 'Oyun Öncesi Yaşam',
      gecisSonrakiEtiket: 'Yorumla',
      gecisSonrakiBaslik: 'Yazarın Çerçevesi',
    },

    // Kimlik kartı başlığı için — derin içerik (dogrular, sahnelerWorkbook vb.)
    // hamlet.js'ten hamletIcerik() ile gelir; burada sadece header alanları.
    icerik: {
      ad: 'Hamlet',
      yazar: 'William Shakespeare',
      donem: '1600',
      tur: 'Trajedi',
      ozet: 'Yas, ihanet ve varoluşsal sorgulama. Düşünce ile eylem arasında sıkışmış bir prensin görünmeyen yolculuğu.',
    },
  },
};

// Hamlet TR-only: içerik verisi zaten hamlet.js'te (TR). willyIcerik'in EN-üzerine-
// yazma mantığına gerek yok — veriyi olduğu gibi döndür. (Sayfa kodu willyIcerik'le
// aynı imzayı bekliyor diye fonksiyon korundu.)
export function hamletIcerik(dil, hamletData) {
  return hamletData;
}

export default hamletI18n;
