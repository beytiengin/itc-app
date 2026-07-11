// =====================================================================
// ROUTING · MICRO-REVEALS (M4-9) · DOORWAY CHECK-IN · INTAKE — v0.1 (ITC)
// Kaynak: Routing_MicroReveals_Checkin_v0_1 · Filiz Kaya Ataklı · 10 Tem 2026
//
// microReveals    — M4-9 modül-sonu micro-reveal metinleri (strengths-only,
//                   tek satır). M1/M2/M3 zaten var.
// doorwayCheckin  — doorway raporu ilk görüntüleme check-in soru satırı
//                   (standart 4 seçenek + serbest alan checkin-f'ten gelir).
// aspirationDogrulama — Coach Section A için yeni intake maddesi gerekmez.
// (Rota haritası core-rapor.js rotaHaritasi/rotaProseDoor/rotaNeverRoutes'ta.)
//
// KURAL: İçerik verbatim'dir. Karar Kaydı Eki v0.2 (11 Tem): D7 to M6 GERİ
//        ALINDI (D7 rotasız). m9 reveal WORDING hâlâ veto penceresinde (Ek C)
//        — plumbing kurulur, render bekler; metinVerisiz arşivde.
// DOĞRULAMA İMZASI: ITC-ROUTING-V01-20260710
// =====================================================================

export const routing = {
  "meta": {
    "baslik": "Full Routing Map · Micro-Reveals (M4-9) · Doorway Check-in · Intake Verification",
    "surum": "v1.0",
    "tarih": "11 Jul 2026",
    "yazar": "Filiz Kaya Ataklı",
    "not": "Karar Kaydı Eki v0.2 (11 Tem 2026) SWEEP: D7→M6 çifti GERİ ALINDI — D7 artık rotasız (bkz core-rapor rotaNeverRoutes). M9 kanal cümlesi onaylı KALIR (2. cümle veri taşır). m9 reveal WORDING hâlâ Filiz veto penceresinde (Ek C) — plumbing ilerler, render bekler."
  },
  "microReveals": {
    "m4": {
      "modul": "Access Channel & Imagery",
      "metin": "Your strongest doorway for imagining: {channel}. From now on, every exercise we hand you enters through it."
    },
    "m5_formA": {
      "modul": "Flow, Form A (dispositional)",
      "metin": "Your flow signature is drawn — the conditions that let the scene take over for you are on your map now."
    },
    "m5_formB": {
      "modul": "Flow, Form B (her performanstan sonra, tekrarlı — küçük tutulur)",
      "metin": "Added to your curve — performance {n}."
    },
    "m6": {
      "modul": "Regulation & Performance Strategies",
      "metin": "Your optimal zone has a shape now — and your preparation routine knows what it's aiming for."
    },
    "m7": {
      "modul": "Performance Mindfulness",
      "metin": "Your attention profile is in — including the craft of coming back to the scene, which you'll be using everywhere."
    },
    "m8": {
      "modul": "The Actor's Body (self-report sonrası; video okuması ayrı, ayrı onamlı)",
      "metin": "Your own read of your body is in. The second pair of eyes — the camera's read — joins it whenever you choose."
    },
    "m9": {
      "modul": "Entry & Exit (en yüksek hassasiyet; skor yok, reveal = teşekkür + tek olumlu not)",
      "metin": "Thank you for this one — it stays close and works quietly for you. Your recovery channels are noted: {channel_1} and {channel_2}. We'll use them.",
      "onayNot": "M9 satırı aktörün top-2 recovery channel'ını render eder (tercih haritası, asla tip). 2. cümle KALIR (Ek v0.2 §B onaylı). PLUMBING KURULU: entryExitSonucGetir + entryExitSkorla.recoveryKanallar (R1-R6 ham, en yüksek 2 = channel_1/2) hazır. RENDER BEKLER: (1) Filiz m9 reveal WORDING vetosu (Ek C), (2) BASIC Ph 6 kanal display adı EN+TR onayı. İkisi gelene dek m9 micro-reveal aktöre GÖSTERİLMEZ. metinVerisiz arşivde.",
    "basicPhKanallar": {
      "not": "R1-R6 internal key = slug (team note only, asla render). Actor-facing display adları EN+TR ONAY BEKLİYOR (Ek C). Lahad kredisi team-side; aktör copy'sinde araştırmacı adı YOK.",
      "R1": "Meaning & belief", "R2": "Feeling", "R3": "People",
      "R4": "Imagination", "R5": "Thinking", "R6": "The body"
    },
      "metinVerisiz": "Thank you for this one — it stays close and works quietly for you."
    }
  },
  "doorwayCheckin": {
    "soru": "That was your first mirror from us — how did it land?",
    "not": "İlk tam doorway raporu görüntülemesinden sonra. APS 'How did that land?', Core 'Your set is in your hands now — how does it feel?' korur; üçü de aynı seçenek seti + serbest alanı paylaşır."
  },
  "aspirationDogrulama": "Battery master Intake ('Getting to Know You', v0.2) zaten aspirations-in-their-own-words topluyor — Coach Report Section A'nın verbatim alıntıladığı alan. Yeni madde yok, batarya sürüm kaydı yok (değişen bir şey yok)."
};
