// ============================================================================
//  data/studyo/etudler.js
//  Stüdyo · Dramaturji Kanadı · Karakter-bağımsız etüt havuzu
//  Doğrulama imzası: STUDYO-ETUDLER-V1-20260613
// ----------------------------------------------------------------------------
//  İLKE: Yeni karakter eklemek = SAF VERİ eklemek. Viewer/motor kodu yazılmaz.
//        Üç oyun tipi de tek adım motorunu paylaşır (okuma/yazma/secim/sira/cikis).
//
//  TELİF: Yalnızca kamu malı kaynaklar (yazar ölümü +70 yıl).
//         REPLİK YOK, ÇEVİRİ YOK — yalnızca karakter + durum + olgu + boşluk.
//         "Değiştirilemez doğrular" olay örgüsü olgularıdır (korunmaz);
//         kendi özgün Türkçe ifademizle yazılır, hiçbir çeviriden alıntılanmaz.
//
//  TRAVMA: Stüdyo etütleri daima travmaSeviyesi 0.
//          Çocuk kaybı vb. travma-hassas boşluklar (ör. Macbeth/Nina'da mevcut)
//          BİLİNÇLİ OLARAK dışarıda bırakıldı → Filiz onay batch'i.
//
//  OYUN TİPLERİ ve REVEAL politikası:
//    'bosluk-avi'   → yorum katmanı. Doğru YOK, reveal YOK. Tamamlama = yansıma.
//    'dogru-cikarim'→ doğru katmanı. Cevabı VAR (metin destekliyor mu?).
//                     Geri bildirim = "fark etme", PUAN DEĞİL.
//    'kronoloji'    → doğru katmanı (tek sıralama oyunu) + kontrast + boşluk köprüsü.
//                     Oyuncu olayları FABULA (gerçekte olduğu) sırasına dizer; doğru
//                     dizince biter. Sonra SYUZHET (oyunun gösterdiği sıra) yan yana
//                     KONTRAST olarak gösterilir — oyuncu ikinci kez sıralamaz, görür.
//                     'kontrastAnlatim' { ne, nicin } farkı açıkça anlatır.
//                     Aradaki boşluklar → Boşluk Avı'na köprü.
//
//  GAMIFICATION SINIRI: Oyun mekaniği yalnızca cevabı METNİN verdiği yerde.
//    Puan / seri / lider tablosu / "en az hamle" YOK. Öğrenme gerekçede.
// ============================================================================

export const etudKarakterleri = {

  // ==========================================================================
  //  HAMLET — referans karakter (üç tipin de tam işlenmiş örneği)
  // ==========================================================================
  hamlet: {
    ad: 'Hamlet',
    kaynak: 'kamu-mali',
    kaynakDetay: { eser: 'Hamlet', yazar: 'William Shakespeare', olumYili: 1616 },
    etudler: [

      // ---- TİP 1: BOŞLUK AVI (sahne-arası boşluğu) --------------------------
      {
        id: 'hamlet-bosluk-maske',
        tip: 'bosluk-avi',
        baslik: 'Maskeden Önce',
        sure: '10 dk',
        seviye: 'Giriş',
        travmaSeviyesi: 0,
        turCercevesi: 'Bu etütte doğru cevap yoktur, sonunda kaynak açılmaz. Yazılmamış bir anı sen kurarsın.',
        giris: {
          lede: 'Gerçeği öğrendi. Henüz hiçbir şey yapmadı.',
          metin: [
            'Bir genç adama, güvendiği bir ses, en yakınının öldürüldüğünü söyledi. Bu konuşmanın bittiği an ile onun bir sonraki sahnede "değişmiş", tuhaf, deli gibi göründüğü an arasında bir boşluk var. O boşlukta neye karar verdiğini hiçbir metin yazmaz.',
            'Acele etme. Onun gözünden değil, onu gören biri olarak orada dur.'
          ]
        },
        adimlar: [
          { no: 1, tip: 'okuma', baslik: 'Yer',
            metin: ['Ses gitti. Adam yalnız kaldı. Henüz kimse onu görmüyor.'],
            q: 'On saniye o yalnızlıkta dur. Hazır olduğunda devam et.' },
          { no: 2, tip: 'yazma', baslik: 'Somut olan',
            q: 'Bu yalnız anda elinin değdiği ya da gözünün takıldığı tek şey ne?',
            hint: 'Duygu değil, nesne. Görülür, dokunulur bir şey.',
            ph: 'Gözü / eli…' },
          { no: 3, tip: 'secim', baslik: 'İçeride ne var?',
            metin: ['Aynı sessiz an üç türlü okunabilir. Hangisi sana daha gerçek geliyor? Seç, sonra nedenini yaz.'],
            secenekler: [
              { id: 'a', t: 'Soğukluk', d: 'Yas değil, bir plan kuruluyor; duygu sonraya ertelendi.' },
              { id: 'b', t: 'Kırılma', d: 'İlk kez tek başına; taşıyamayacağı bir şey omuzlarına bindi.' },
              { id: 'c', t: 'Strateji', d: 'Korkusunu bir maskeye çeviriyor; deliliği bir seçim.' }
            ],
            q: 'Neden bu okuma?', ph: 'Çünkü…' },
          { no: 4, tip: 'yazma', baslik: 'Yapmadığı şey',
            q: 'Bu anda yapabileceği ama yapmadığı tek şey ne?',
            hint: 'Yapmama da bir seçimdir.', ph: 'Yapmadığı…' },
          { no: 5, tip: 'cikis',
            metin: ['Bu boşluğu kimse senin için yazmadı. Mührün, senin okuman. Doğru ya da yanlış değil.'] }
        ]
      },

      // ---- TİP 2: DOĞRU MU, ÇIKARIM MI? (doğru katmanı) --------------------
      {
        id: 'hamlet-dogru-cikarim-acilis',
        tip: 'dogru-cikarim',
        baslik: 'Açılış: Ne Biliyoruz?',
        sure: '8 dk',
        seviye: 'Giriş',
        travmaSeviyesi: 0,
        turCercevesi: 'Burada doğru cevap vardır. Amaç puan değil: neyin metinde olduğunu, neyin senin çıkarımın olduğunu ayırmak.',
        giris: {
          lede: 'Oyunun başında neyi kesin biliyoruz, neyi varsayıyoruz?',
          metin: [
            'Audition\'da elinde sadece birkaç sayfa olur. İlk iş, metnin gerçekten söylediği ile senin eklediğini ayırmaktır. Aşağıdaki her ifadeyi ikiye ayır: metin bunu söylüyor mu, yoksa sen mi çıkarıyorsun?'
          ]
        },
        // her ifade: dogru = 'metin' (olgu) | 'cikarim' (yorum)
        // not: sınırdaki ifadeler (en çok öğreten) 'aciklama' ile işaretli
        ifadeler: [
          { metin: 'Adamın babası ölmüştür.', dogru: 'metin' },
          { metin: 'Annesi, babasının kardeşiyle evlenmiştir.', dogru: 'metin' },
          { metin: 'Babasının ölümünün ardındaki gerçek ona bir karşılaşmayla açıklanır.', dogru: 'metin' },
          { metin: 'Adam bu evlilikten rahatsızdır.', dogru: 'metin',
            aciklama: 'Sınırda: metin bunu güçlü biçimde gösterir — ama "rahatsızlık"ın derecesini sen yorumlarsın.' },
          { metin: 'Adam annesinden nefret eder.', dogru: 'cikarim',
            aciklama: 'Metin tedirginlik ve öfke gösterir; "nefret" senin koyduğun keskinlik.' },
          { metin: 'Adam zayıf ve kararsız biridir.', dogru: 'cikarim',
            aciklama: 'Klasik bir yorum kalıbı — olgu değil. Metin erteleme gösterir; "zayıflık" senin etiketin.' },
          { metin: 'Gördüğü şeyin gerçek olup olmadığından kuşku duyar.', dogru: 'metin' }
        ],
        kapanis: 'Çıkarımların yanlış değil — ama hangisinin metinden, hangisinin senden geldiğini bilmek, oynarken neyi savunabileceğini bilmektir.',
        kendiRolunde: 'Audition metnini eline aldığında ilk işin bu olsun: metnin kesin söylediğinin altını çiz, kalanın senin çıkarımın olduğunu bil. Yönetmen "neden böyle oynadın?" derse çizdiklerini savunursun; çıkarımların ise değiştirilebilir.'
      },

      // ---- TİP 3: KRONOLOJİ vs SIRA (doğru katmanı + boşluk köprüsü) -------
      {
        id: 'hamlet-kronoloji',
        tip: 'kronoloji',
        baslik: 'Önce Ne Oldu?',
        sure: '10 dk',
        seviye: 'Orta',
        travmaSeviyesi: 0,
        turCercevesi: 'Olayları gerçek sırasına diz. Doğru dizince biter; sonra oyunun seni nasıl dizdiğini kontrast olarak görürsün.',
        giris: {
          lede: 'Bir hikâyenin yaşandığı sıra ile anlatıldığı sıra aynı olmak zorunda değil.',
          metin: [
            'Olayları gerçekte yaşandığı sırayla diz. Doğru kurduğunda, oyunun bu olayları sahnede sana hangi sırayla gösterdiğini yan yana göreceksin.'
          ]
        },
        // her olay: fabula = gerçek sıra (sıralama oyununun çözümü), syuzhet = gösterilen sıra
        olaylar: [
          { id: 'o1', metin: 'Eski kral ülkeyi yönetir.',           fabula: 1, syuzhet: 4 },
          { id: 'o2', metin: 'Kardeşi onu gizlice zehirler.',       fabula: 2, syuzhet: 5 },
          { id: 'o3', metin: 'Kardeş tahta geçer, dul kraliçeyle evlenir.', fabula: 3, syuzhet: 1 },
          { id: 'o4', metin: 'Genç prens saraya döner.',            fabula: 4, syuzhet: 2 },
          { id: 'o5', metin: 'Prens, ölümün ardındaki gerçeği öğrenir.', fabula: 5, syuzhet: 3 }
        ],
        // KONTRAST anlatımı: ne gördüğü + ne işe yaradığı, açıkça
        kontrastAnlatim: {
          ne: 'Oyun, olayların en başını —cinayeti— sona saklıyor. Sahnede ilk gördüğün şey, gerçekte üçüncü sırada olan olay: taht ve evlilik. En erken yaşanan iki olayı en son öğreniyorsun.',
          nicin: 'Bu senin için önemli, çünkü karakter olayları gerçek sırayla yaşadı; seyirci ise karışık öğreniyor. Hamlet\'i oynarken içinde gerçek sırayı taşırsın — seyircinin henüz bilmediğini sen bilirsin. Gerilim de bu gecikmeden doğar.'
        },
        // boşluk köprüsü (yansıma — doğru yok)
        boslukKoprusu: {
          baslik: 'Aradaki boşluk',
          q: 'Evlilik ile prensin dönüşü arasında, hiç görmediğimiz bir saray var. Orada ne oluyor olabilir?',
          ph: 'O sarayda…'
        },
        kapanis: 'Olduğu sıra ile gösterilen sıra arasındaki fark, oyunun motoru. Görmediğin o aralığı istersen bir Boşluk Avı\'nda kurarsın.',
        kendiRolunde: 'Elindeki sahnede de aynısını yap: karakterinin yaşadığı olayları gerçek sırasına diz, sonra metnin onları seyirciye hangi sırayla verdiğine bak. Aradaki fark, sahnede ne zaman ne kadarını "biliyormuş gibi" oynayacağını söyler.'
      }

    ]
  },

  // ==========================================================================
  //  MACBETH — kontrast karakter (doğru/kronoloji odaklı)
  //  NOT: Çocuk kaybı okuması (travma-hassas) bilinçle DIŞARIDA → Filiz batch.
  // ==========================================================================
  macbeth: {
    ad: 'Macbeth',
    kaynak: 'kamu-mali',
    kaynakDetay: { eser: 'Macbeth', yazar: 'William Shakespeare', olumYili: 1616 },
    etudler: [

      {
        id: 'macbeth-dogru-cikarim-kehanet',
        tip: 'dogru-cikarim',
        baslik: 'Kehanet ve Suç',
        sure: '8 dk',
        seviye: 'Orta',
        travmaSeviyesi: 0,
        turCercevesi: 'Doğru cevaplı. Metnin söylediği ile yorumun ayrılır.',
        giris: {
          lede: 'Suçun nedeni metinde mi yazıyor, yoksa biz mi koyuyoruz?',
          metin: ['Her ifadeyi ayır: metin bunu söylüyor mu, sen mi çıkarıyorsun?']
        },
        ifadeler: [
          { metin: 'Üç figür ona güç ve unvan kehanetinde bulunur.', dogru: 'metin' },
          { metin: 'Kralı öldürür.', dogru: 'metin' },
          { metin: 'Eşi onu eyleme doğru iter.', dogru: 'metin' },
          { metin: 'En baştan beri kötü bir adamdır.', dogru: 'cikarim',
            aciklama: 'Metin tereddüt ve vicdan da gösterir; "baştan kötü" senin koyduğun bir karar.' },
          { metin: 'Eylemlerinden sonra huzursuzluk yaşar.', dogru: 'metin',
            aciklama: 'Sınırda: metin iç çalkantıyı açıkça gösterir — olgu sayılabilir.' },
          { metin: 'Kehanet olmasaydı bu suçu işlemezdi.', dogru: 'cikarim',
            aciklama: 'Oyunun merkezî tartışması. Bir olgu değil — savunulabilir bir yorum. İki oyuncu iki farklı Macbeth kurar.' }
        ],
        kapanis: 'Son ifade üzerinde durduğun an, aslında karakter seçimini yapıyorsun: kehanet bir bahane mi, bir tetik mi?',
        kendiRolunde: 'Kendi rolünde de "baştan kötü" ya da "zaten zayıf" gibi hazır etiketlerden kaç. Metnin verdiği olguya tutun; gerisini savunabileceğin bir çıkarım olarak, bir seçim olarak kur.'
      },

      {
        id: 'macbeth-kronoloji',
        tip: 'kronoloji',
        baslik: 'Önce Ne Oldu?',
        sure: '8 dk',
        seviye: 'Orta',
        travmaSeviyesi: 0,
        turCercevesi: 'Olayları gerçek sırasına diz. Doğru dizince biter; sonra oyunun gösterdiği sırayla kontrast görürsün.',
        giris: {
          lede: 'Bazı oyunlar sırrı saklayarak değil, sonu göstererek gerer.',
          metin: ['Olayları gerçekte yaşandığı sırayla diz. Doğru kurunca, oyunun gösterdiği sırayla yan yana koyacağız.']
        },
        olaylar: [
          { id: 'm1', metin: 'Kehanet duyulur.',                 fabula: 1, syuzhet: 1 },
          { id: 'm2', metin: 'Kral öldürülür.',                  fabula: 2, syuzhet: 2 },
          { id: 'm3', metin: 'Eski dost ortadan kaldırılır.',     fabula: 3, syuzhet: 3 },
          { id: 'm4', metin: 'Yeni görümler, yeni kehanetler gelir.', fabula: 4, syuzhet: 4 },
          { id: 'm5', metin: 'Orman yürür, son hesap görülür.',  fabula: 5, syuzhet: 5 }
        ],
        kontrastAnlatim: {
          ne: 'Bu kez iki sıra neredeyse aynı. Oyun hiçbir şeyi saklamıyor; olaylar yaşandığı sırayla önüne geliyor. Sağdaki rozetler bu yüzden karışmıyor.',
          nicin: 'Demek ki bu oyunun gerilimi "sırrı saklamak"tan gelmiyor. Kehaneti en başta duyarsın; sonra sonun adım adım yaklaşmasını izlersin. Oyuncu için iş, bilinmeyeni saklamak değil — bilinen, kaçınılmaz sona doğru yürüyüşü taşımak. Hamlet sırrı saklayarak gerer; bu oyun sonu önceden bildirerek.'
        },
        boslukKoprusu: {
          baslik: 'Aradaki boşluk',
          q: 'Kehanet ile ilk eylem arasında, sahnede görmediğimiz bir karar anı var. Orada ne oluyor?',
          ph: 'O anda…'
        },
        kapanis: 'Sıra ile kronoloji burada çakışıyor; gerilim beklemekten geliyor. O kısa karar boşluğu istersen bir Boşluk Avı\'na döner.',
        kendiRolunde: 'Kendi rolünde de sor: metin sonu baştan belli mi ediyor, yoksa saklıyor mu? Belli ediyorsa işin sürpriz yaratmak değil — seyircinin gördüğü kaçınılmaza karakterin nasıl yürüdüğünü taşımak.'
      }

    ]
  },

  // ==========================================================================
  //  NINA — boşluk odaklı karakter (Çehov)
  //  NOT: Çocuk kaybı (travma-hassas) DIŞARIDA. Boşluk, sanatçı mücadelesi üzerine.
  // ==========================================================================
  nina: {
    ad: 'Nina',
    kaynak: 'kamu-mali',
    kaynakDetay: { eser: 'Martı', yazar: 'Anton Çehov', olumYili: 1904 },
    not: 'Replik/çeviri kullanılmaz; yalnızca durum ve karakter.',
    etudler: [

      {
        id: 'nina-bosluk-iki-yil',
        tip: 'bosluk-avi',
        baslik: 'İki Yıl',
        sure: '12 dk',
        seviye: 'Orta',
        travmaSeviyesi: 0,
        turCercevesi: 'Doğru cevap yok, reveal yok. Oyunun sahnede hiç göstermediği iki yılı sen kurarsın.',
        giris: {
          lede: 'Genç bir kadın oyuncu olmak için şehirden ayrıldı. İki yıl sonra geri dönecek.',
          metin: [
            'Bu iki yıl oyunda hiç sahnelenmez — iki perde arasında, görünmeden geçer. Taşrada, küçük sahnelerde, zorlu bir yol. Biz yalnızca öncesini ve sonrasını görürüz; arasını değil.',
            'O iki yıldan tek bir anı seç ve kur: diyelim bir taşra tiyatrosunda, sahneye çıkmadan hemen önce. Onun gözünden değil, onu gören biri olarak.'
          ]
        },
        adimlar: [
          { no: 1, tip: 'okuma', baslik: 'Yer',
            metin: ['Soğuk, yarı boş bir taşra salonu. Perde arkası. Birazdan sahne.'],
            q: 'On saniye o kuliste dur.' },
          { no: 2, tip: 'yazma', baslik: 'Somut olan',
            q: 'Bu anda elinin değdiği tek şey ne?',
            hint: 'Bir kostüm parçası, bir bilet, bir kapı. Nesne, duygu değil.', ph: 'Elinde…' },
          { no: 3, tip: 'secim', baslik: 'İçeride ne var?',
            metin: ['Aynı an üç türlü okunabilir. Hangisi daha gerçek?'],
            secenekler: [
              { id: 'a', t: 'Aşağılanma', d: 'Hayal ettiği yer burası değildi; küçük düşmüş hissediyor.' },
              { id: 'b', t: 'İnat', d: 'Her şeye rağmen; bu yola inadına devam ediyor.' },
              { id: 'c', t: 'Boşluk', d: 'Artık ne sevinç ne acı; sadece sıradaki sahne.' }
            ],
            q: 'Neden bu okuma?', ph: 'Çünkü…' },
          { no: 4, tip: 'yazma', baslik: 'Yapmadığı şey',
            q: 'Bu iki yılda yapabileceği ama yapmadığı tek şey ne? (Geri dönmemek? Yazmamak? Vazgeçmemek?)',
            hint: 'Yapmama da bir karakter kurar.', ph: 'Yapmadığı…' },
          { no: 5, tip: 'cikis',
            metin: ['Bu iki yılı kimse yazmadı. Senin kurduğun an, onun dönüşünü taşıyacak olan zemin. Bir hafta sonra başka türlü kurabilirsin — iki okuma yan yana durur.'] }
        ]
      }

    ]
  }

};

// ============================================================================
//  ŞABLON — yeni karakter eklemek için kopyala, doldur. Kod değişmez.
// ============================================================================
/*
export const _SABLON_karakter = {
  ad: 'Karakter Adı',
  kaynak: 'kamu-mali',                       // 'ozgun' | 'kamu-mali'
  kaynakDetay: { eser: '', yazar: '', olumYili: 0 },  // kamu-malı ise zorunlu
  not: '',                                   // opsiyonel (ör. çeviri uyarısı)
  etudler: [

    // BOŞLUK AVI iskeleti
    {
      id: 'karakter-bosluk-xxx', tip: 'bosluk-avi',
      baslik: '', sure: '10 dk', seviye: 'Giriş', travmaSeviyesi: 0,
      turCercevesi: 'Doğru cevap yoktur, reveal yoktur.',
      giris: { lede: '', metin: ['', ''] },
      adimlar: [
        { no: 1, tip: 'okuma', baslik: 'Yer', metin: [''], q: '' },
        { no: 2, tip: 'yazma', baslik: 'Somut olan', q: '', hint: '', ph: '' },
        { no: 3, tip: 'secim', baslik: '', metin: [''],
          secenekler: [ {id:'a',t:'',d:''}, {id:'b',t:'',d:''}, {id:'c',t:'',d:''} ],
          q: '', ph: '' },
        { no: 4, tip: 'yazma', baslik: 'Yapmadığı şey', q: '', hint: '', ph: '' },
        { no: 5, tip: 'cikis', metin: [''] }
      ]
    },

    // DOĞRU MU / ÇIKARIM MI iskeleti
    {
      id: 'karakter-dogru-cikarim-xxx', tip: 'dogru-cikarim',
      baslik: '', sure: '8 dk', seviye: 'Giriş', travmaSeviyesi: 0,
      turCercevesi: 'Doğru cevap vardır; amaç puan değil, fark etme.',
      giris: { lede: '', metin: [''] },
      ifadeler: [
        { metin: '', dogru: 'metin' },                       // olgu
        { metin: '', dogru: 'cikarim' },                     // yorum
        { metin: '', dogru: 'metin', aciklama: 'Sınırda…' }  // en çok öğreten
      ],
      kapanis: '',
      // kendiRolunde: '',   // OPSİYONEL — "Kendi rolüne taşı" notu. Sadece analitik
                              // tiplerde (dogru-cikarim, kronoloji) doldurulur; Boşluk
                              // Avı'nda BOŞ bırakılır (ritüeli bozmasın). Boşsa hiç görünmez.
    },

    // KRONOLOJİ iskeleti (tek sıralama + kontrast + boşluk köprüsü)
    {
      id: 'karakter-kronoloji', tip: 'kronoloji',
      baslik: 'Önce Ne Oldu?', sure: '10 dk', seviye: 'Orta', travmaSeviyesi: 0,
      turCercevesi: 'Olayları gerçek sırasına diz. Doğru dizince biter; sonra kontrast görürsün.',
      giris: { lede: '', metin: [''] },
      olaylar: [                                             // fabula = çözüm, syuzhet = gösterilen sıra
        { id: 'x1', metin: '', fabula: 1, syuzhet: 1 },
        { id: 'x2', metin: '', fabula: 2, syuzhet: 2 }
      ],
      kontrastAnlatim: { ne: '', nicin: '' },                // ne gördüğü + ne işe yaradığı (açık)
      boslukKoprusu: { baslik: 'Aradaki boşluk', q: '', ph: '' }, // yansıma — doğru yok
      kapanis: ''
      // kendiRolunde: '',   // OPSİYONEL — kronolojide genelde doldurulur
    }

  ]
};
*/

// ----------------------------------------------------------------------------
//  Yardımcılar (motor tarafı — Faz A'da ZihinselAntrenman'a bağlanır)
// ----------------------------------------------------------------------------
export function etutGetir(karakterId, etudId) {
  const k = etudKarakterleri[karakterId];
  if (!k) return null;
  return k.etudler.find(e => e.id === etudId) || null;
}

export function karakterEtudleri(karakterId) {
  return etudKarakterleri[karakterId]?.etudler ?? [];
}

export function tumEtutKarakterleri() {
  return Object.entries(etudKarakterleri).map(([id, k]) => ({
    id, ad: k.ad, kaynak: k.kaynak, etudSayisi: k.etudler.length
  }));
}
