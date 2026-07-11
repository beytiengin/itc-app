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
    "surum": "v1.1",
    "tarih": "11 Jul 2026",
    "yazar": "Filiz Kaya Ataklı",
    "not": "v1.1 (Ek v0.3, 11 Tem 2026): A.9 m9 reveal cümlesi YENİLENDİ — eski 'are noted/We'll use them' emekliye ayrıldı, yeni: 'Two doors already carry you back: {channel_1} and {channel_2}.' A.10 BASIC Ph EN+TR adları onaylı (R1→R6 sabit render, skor sırası değil). m9 render UNBLOCKED. v0.2 SWEEP korunur: D7→M6 GERİ ALINDI (D7 rotasız, bkz core-rapor rotaNeverRoutes)."
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
      "metin": "Thank you for this one — it stays close and works quietly for you. Two doors already carry you back: {channel_1} and {channel_2}.",
      "onayNot": "M9 satırı top-2 recovery channel'ı OLUMLU render eder (asla tip, asla sıralama). RENDER UNBLOCKED (Ek v0.3 A.9+A.10): (1) yeni cümle onaylı — eski 'are noted/We'll use them' emekliye ayrıldı (recorded-about-you hissi), (2) BASIC Ph EN+TR adları onaylı. KRİTİK: top-2 SEÇİLİR ama R1→R6 instrument order'da RENDER edilir — asla skor sırası (sıralama ima etmez). Eski cümle arşivde (metinVerisiz).",
    "basicPhKanallar": {
      "not": "ONAYLI EN+TR (Ek v0.3 A.10, Filiz — Lahad/Ayalon modeli araştırma-kontrollü). R1-R6 internal key = slug (team note only, asla render). RENDER ORDER SABİT R1→R6 (instrument order), ASLA skor sırası — {channel_1}/{channel_2} sıralama ima edemez. TR adlar sözlüğe FIXED girer. Lahad kredisi team-side; aktör copy'sinde araştırmacı adı YOK. R4 IMAGINATION APS D6 ile ad çakışması (tolere — M9 onu craft değil 'geri dönüş yolu' çerçeveler, whole-battery overlap map'e girer). R6 BODY M8 ile yumuşak çakışma (zararsız).",
      "R1": { "en": "Meaning", "tr": "Anlam" },
      "R2": { "en": "Feeling", "tr": "Duygu" },
      "R3": { "en": "People", "tr": "İnsanlar" },
      "R4": { "en": "Imagination", "tr": "Hayal Gücü" },
      "R5": { "en": "Thinking", "tr": "Düşünce" },
      "R6": { "en": "Body", "tr": "Beden" }
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
