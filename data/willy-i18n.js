// data/willy-i18n.js
// ITC Actor's Gym — Çift dilli (TR/EN) Willy vitrin sözlüğü.
//
// KARAR (2026-05-24): Tek vitrin karakter prototipi. Yalnızca Willy uçtan uca
// çift dilli; diğer karakterler TR. Ağır i18n kütüphanesi yok — bu düz nesne +
// `useDil()` context yeterli.
//
// KULLANIM:
//   import { useDil, ceviri } from '../app/lib/dil';
//   import willyI18n from '../data/willy-i18n';
//   const { dil } = useDil();
//   const s = ceviri(willyI18n, dil);
//   <h1>{s.hub.bolum1Baslik}</h1>
//
// DURUM:
//   ✅ nav / hub / ortak  → chrome metinleri, iki dilde TAM (Claude tohumladı)
//   ⏳ icerik             → edebi içerik. ozet örnek olarak çevrildi; gerisi
//                           "__TODO_EN__" işaretli. Beyti EN'i finalize edecek.
//
// NOT: Karakter VERİSİ hâlâ data/karakterler/willy.js içinde (TR kaynak).
// EN'e geçişte ilgili sayfa, veri yerine bu sözlüğün `icerik` dalını okur.
// Anahtarlar willy.js'deki id/sıra ile hizalı tutulmalı.

const willyI18n = {
  // ─────────────────────────────────────────────────────────────────────────
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
      bolum1Etiket: 'Bölüm 1',
      bolum1Baslik: 'Değiştirilemez Doğrular',
      koordinatEtiket: 'Bölümler 2 — 5',
      koordinatBaslik: 'Karakter koordinatları',
      ac: 'Aç →',
      kartlar: [
        {
          etiket: 'Bölüm 2',
          baslik: 'Oyun Öncesi Yaşam',
          altyazi: 'Sahneye çıkmadan önce ne yaşandı',
          aciklama: "Sekiz olay, dokuz ilişki — Willy'nin bedeninde taşıdığı geçmiş.",
        },
        {
          etiket: 'Bölüm 3',
          baslik: 'Zaman Çizgisi',
          altyazi: "Willy'nin bedensel zinciri",
          aciklama: 'On bir birim, üç akış hattı (Sızıntı · Patlama · Bedel). Sahne sırası ile hayat sırası ayrı.',
        },
        {
          etiket: 'Bölüm 4',
          baslik: 'Yazarın Çerçevesi',
          altyazi: 'Beş tercih, beş kavşak',
          aciklama: "Ben, geçmişe kayışlar, Linda+Kadın, intihar, son an — Miller'ın açık uçlarına seninkini koy.",
        },
        {
          etiket: 'Bölüm 5',
          baslik: 'Senin Çerçeven',
          altyazi: "Miller'ın sustuğu yer",
          aciklama: 'Dört boşluk, on iki alt-soru. Sahnelerin altında akan görünmez metni sen yaz.',
        },
      ],
      modul3Etiket: 'Modül III · Yolculuk Modu',
      modul3Baslik: "Willy'nin tüm yaşamı, baştan sona",
      modul3Metin:
        "Modül II'yi tamamladığında karakter koordinatları kurulmuş olur. Modül III, Willy'nin tüm yaşamını — pre-senaryodan sahnedeki son anına — bedeninle bir kez baştan sona dolaşman için tasarlandı. Sahneler ve aralarındaki boşluklar, hayat sırasına dizilir; AI Dış Ses eşlik eder.",
      modul3Rozet: 'Yakında',
      modul3Not: 'Modül II tamamlandığında açılacak.',
    },

    ortak: {
      geriWilly: '← Willy Loman',
      senteziAc: 'Sentezi Aç →',
      kaydediliyor: 'kaydediliyor…',
      kaydedildi: '✓ kaydedildi',
      hata: 'kaydedilemedi',
    },

    seninCerceven: {
      etiket: 'Modül II · Bölüm 5',
      baslik: '◇ Senin Çerçeven',
      altyazi: "Miller'ın sustuğu yer",
      giris1: "Yazarın Çerçevesi'nde Miller'ın yazdığını okudun. Şimdi, son bölümde, onun yazmadığını yazacaksın.",
      giris2: "Willy metninde sahnelerin arasında büyük boşluklar var. Willy bir sahnede çıkıyor, sonraki sahnede başka bir Willy olarak giriyor. Aralarda bir şeyler yaşandı — Miller bunların çoğunu yazmadı. Ama yaşandı. Karakter bedeninde taşıyor.",
      alinti: '"Boşluklar tesadüf değil — oyuncuya bırakılmış mekânlar."',
      sinirEtiket: 'Yöntem sınırı',
      sinir1Once: 'Senin Çerçeven seni ',
      sinir1Vurgu: 'kendi anılarına',
      sinir1Sonra: ' döndürmez — karakterin yaşadığı ama metinde yazılmamış olası bir ana götürür.',
      sinir2: "Yazarken Willy'nin zihninde misafirsin. Senin acından beslenmiyor — onun verisinden besleniyor.",
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
      adim2Metin: '"Burada ne oldu?" değil, "Willy\'nin bedeninde ne oldu?" diye sor.',
      adim3Baslik: 'Duyusal Yaz',
      adim3Metin: 'Soyut kavramlardan kaç. "Üzüldü" değil, "sol elinin parmaklarını sıktı".',
      adim4Baslik: 'Tek Anı Seç',
      adim4Metin: 'Boşluk uzun olabilir, ama sen tek bir anı yazıyorsun.',
      adim5Baslik: 'Sahneye Geçir',
      adim5Metin: 'Yazdığın şey bir sonraki sahneye nasıl taşınacak?',
      dogruEtiket: 'Doğru cevap aramak değil',
      dogru1Once: 'Yazdıkların "doğru" olmak zorunda değil — Miller\'ın niyetiyle örtüşmek de zorunda değil. Çünkü Miller niyetini sustu. Yazdıkların ',
      dogru1Vurgu: 'senin Willy\'nin için',
      dogru1Sonra: ' doğru olmalı.',
      dogru2: 'Eğer bir boşluk için cümle gelmiyorsa, sayfayı boş bırak. Sonra geri dön. Bazen bir boşluk yarın açılır, bugün açılmaz. Bu da bir bilgi.',
      ilerlemeEtiket: 'Dört Boşluk',
      boslugaDeginildi: 'boşluğa değinildi',
      altSoruBirim: 'alt-soru',
      sentezHazir: 'Sentez Hazır',
      sentezKismi: 'Sentez (kısmi)',
      sentezBaslik: 'Dört Boşluk, Bir Karakter',
      sentezAciklama: 'Dört boşluğu birleştirip sahnelerin altında akan görünmez çizgiyi gör.',
      gecisOnceki: 'Bölüm 4',
      gecisOncekiBaslik: 'Yazarın Çerçevesi',
      gecisSonraki: 'Modül III · Yolculuk Modu',
    },

    icerik: {
      ad: 'Willy Loman',
      yazar: 'Arthur Miller',
      donem: '1949',
      tur: 'Trajedi',
      ozet: 'Yanılsama ve kimlik çöküşü. Geçmiş ile şimdinin aynı anda yaşandığı bir zihin.',
      // ⏳ Aşağıdakiler willy.js'den çevrilecek (Beyti finalize eder):
      // dogrular: [...]            // 5 kategori × maddeler
      // oyunOncesi: { olaylar, iliskiler }
      // perdeTemalari: [...]       // 3 akış hattı
      // sahnelerWorkbook: [...]    // 11 birim
      // tercihler: [...]           // 5 tercih + seçenekler
      // boslukSet: [...]           // 4 boşluk × 3 alt-soru
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  en: {
    nav: {
      marka: 'Inside The Character',
      kalibrasyon: 'Calibration',
      kulis: 'Backstage',
      karakterler: '← Characters',
      cikis: 'Sign out',
    },

    hub: {
      ustEtiket: 'Module II · Build Your Character',
      bolum1Etiket: 'Part 1',
      bolum1Baslik: 'Immutable Truths',
      koordinatEtiket: 'Parts 2 — 5',
      koordinatBaslik: 'Character coordinates',
      ac: 'Open →',
      kartlar: [
        {
          etiket: 'Part 2',
          baslik: 'Pre-Play Life',
          altyazi: 'What happened before the curtain',
          aciklama: 'Eight events, nine relationships — the past Willy carries in his body.',
        },
        {
          etiket: 'Part 3',
          baslik: 'Timeline',
          altyazi: "Willy's bodily chain",
          aciklama: 'Eleven units, three currents (Leak · Eruption · Reckoning). Stage order and life order kept apart.',
        },
        {
          etiket: 'Part 4',
          baslik: "The Author's Frame",
          altyazi: 'Five choices, five crossroads',
          aciklama: "Ben, the slips into the past, Linda + the Woman, the suicide, the final moment — place your own answer in Miller's open ends.",
        },
        {
          etiket: 'Part 5',
          baslik: 'Your Frame',
          altyazi: 'Where Miller stays silent',
          aciklama: 'Four gaps, twelve sub-questions. You write the invisible text that runs beneath the scenes.',
        },
      ],
      modul3Etiket: 'Module III · Journey Mode',
      modul3Baslik: "Willy's whole life, end to end",
      modul3Metin:
        "Once you complete Module II, the character's coordinates are set. Module III is designed for you to walk through Willy's entire life — from pre-script to his final moment on stage — once, in your body. The scenes and the gaps between them are arranged in life order; an AI Outer Voice accompanies you.",
      modul3Rozet: 'Soon',
      modul3Not: 'Unlocks when Module II is complete.',
    },

    ortak: {
      geriWilly: '← Willy Loman',
      senteziAc: 'Open Synthesis →',
      kaydediliyor: 'saving…',
      kaydedildi: '✓ saved',
      hata: 'could not save',
    },

    seninCerceven: {
      etiket: 'Module II · Part 5',
      baslik: '◇ Your Frame',
      altyazi: 'Where Miller stays silent',
      giris1: "In The Author's Frame you read what Miller wrote. Now, in this final part, you write what he didn't.",
      giris2: "In Willy's text there are wide gaps between the scenes. Willy exits in one scene and enters the next as a different Willy. Something happened in between — Miller left most of it unwritten. But it happened. The character carries it in his body.",
      alinti: '"The gaps are not accidental — they are spaces left for the actor."',
      sinirEtiket: 'Method boundary',
      sinir1Once: 'Your Frame does not send you back to ',
      sinir1Vurgu: 'your own memories',
      sinir1Sonra: ' — it takes you to a possible moment the character lived but that was never written in the text.',
      sinir2: "As you write, you are a guest in Willy's mind. It does not feed on your pain — it feeds on his data.",
      manifestoEtiket: 'The ITC Manifesto · Three Principles',
      ilke1Baslik: "Carrying What We Don't See",
      ilke1Metin: "The actor carries onto the stage the character's past that the stage never shows.",
      ilke2Baslik: "The Character's Data",
      ilke2Metin: "The character's data is drawn from the character itself — never from the actor's wound.",
      ilke3Baslik: 'Silent Evolution',
      ilke3Metin: '"Where most systems analyse behaviour within the scene, ITC looks for the character\'s transformation in the gaps outside it. The silence between the lines is filled by the actor\'s capacity for mental imagery."',
      ilke3Kaynak: '— Inside The Character, Manifesto, Article 3',
      ilke3AktifNot: '— This principle is applied on this page.',
      yontemEtiket: 'How to Write a Gap',
      adim1Baslik: 'Read the Frame',
      adim1Metin: 'Where did the preceding scene end, where does the following one begin — see both ends clearly.',
      adim2Baslik: 'Open the Questions',
      adim2Metin: 'Not "what happened here?" but "what happened in Willy\'s body?"',
      adim3Baslik: 'Write Sensorily',
      adim3Metin: 'Avoid abstractions. Not "he was sad," but "he clenched the fingers of his left hand."',
      adim4Baslik: 'Choose a Single Moment',
      adim4Metin: 'The gap may be long, but you write a single moment.',
      adim5Baslik: 'Carry It to the Scene',
      adim5Metin: 'How will what you wrote be carried into the next scene?',
      dogruEtiket: 'Not about finding the right answer',
      dogru1Once: 'What you write does not have to be "correct" — nor does it have to match Miller\'s intention. Because Miller kept his intention silent. What you write must be true ',
      dogru1Vurgu: 'for your Willy',
      dogru1Sonra: '.',
      dogru2: 'If no sentence comes for a gap, leave the page blank. Come back later. Sometimes a gap opens tomorrow, not today. That too is information.',
      ilerlemeEtiket: 'Four Gaps',
      boslugaDeginildi: 'gaps touched',
      altSoruBirim: 'sub-questions',
      sentezHazir: 'Synthesis Ready',
      sentezKismi: 'Synthesis (partial)',
      sentezBaslik: 'Four Gaps, One Character',
      sentezAciklama: 'Combine the four gaps and see the invisible line running beneath the scenes.',
      gecisOnceki: 'Part 4',
      gecisOncekiBaslik: "The Author's Frame",
      gecisSonraki: 'Module III · Journey Mode',
    },

    icerik: {
      ad: 'Willy Loman',
      yazar: 'Arthur Miller',
      donem: '1949',
      tur: 'Tragedy',
      ozet: 'Illusion and the collapse of identity. A mind where past and present are lived at once.',
      // __TODO_EN__ dogrular / oyunOncesi / perdeTemalari / sahnelerWorkbook /
      // tercihler / boslukSet — Beyti finalize edecek (edebi çeviri).
    },
  },
};

export default willyI18n;
