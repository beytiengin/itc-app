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
