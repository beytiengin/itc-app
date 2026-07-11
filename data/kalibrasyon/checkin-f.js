// =====================================================================
// CHECK-IN & SECTION F TEMPLATES — v1.0 (ITC)
// Kaynak: Checkin_and_F_Templates_v1_0 · Filiz Kaya Ataklı · 10 Tem 2026
//         (kırmızı-kalem turu olmadan, onun talimatıyla teslim)
//
// İKİ PARÇA:
//   checkin  — his-yoklaması v2: 4 sabit seçenek + opsiyonel serbest metin.
//              Seçenek 3/4 → koçluk teklifi belirir. Serbest metin verbatim,
//              append-only saklanır (checkin_yanitlari tablosu), koça verbatim.
//   fTemplates — Section F 5 şablon + natural-ground haritası + tie-break.
//              App üretir, max 5, sabit gramer; koç serbest alanı YOK.
//
// KURAL: İçerik verbatim'dir. Seçenek metinleri, serbest-metin label'ı,
//        davranış kuralları, 5 şablon ve natural-ground haritası Filiz onaylı
//        (10 Tem 2026). Her değişiklik tarihli satırla döner.
// KURAL: natural-ground haritası bu belgedeki TEK yeni hüküm — tarihli
//        satırla geri alınabilir (4-harf internalKey → APS alan no).
// DOĞRULAMA İMZASI: ITC-CHECKINF-V10-20260710
// =====================================================================

export const checkinF = {
  "checkin": {
    "meta": {
      "baslik": "Felt-experience check-in — standard format (battery-wide)",
      "surum": "v1.0",
      "yazar": "Filiz Kaya Ataklı",
      "onay": "10 Jul 2026 (delivered without red-pen round at her instruction)",
      "render": "Her his-yoklamasında: bir raporun ilk tam görüntülenmesinden sonra + modül-içi tetikleyicilerde (ör. Desire check-in). Soru satırı tetikleyiciye göre değişir (mevcut onaylı kopya kalır — 'How did that land?', 'Your set is in your hands now — how does it feel?'); AŞAĞIDAKİ yanıt biçimi artık her yerde standart."
    },
    "secenekler": [
      {
        "id": "landed_well",
        "metin": "It landed well"
      },
      {
        "id": "mixed",
        "metin": "Mixed — some of it sat oddly"
      },
      {
        "id": "uneasily",
        "metin": "It sat uneasily with me"
      },
      {
        "id": "talk_it_through",
        "metin": "I'd like to talk it through with someone"
      }
    ],
    "serbestMetinLabel": "Anything you'd like to add, in your own words (optional — this reaches your coach as you write it)",
    "davranisKurallari": {
      "seffaflik": "In-field parenthesis IS the transparency mechanism — aktör yazdığı anda sözcüklerin nereye gittiğini bilir; onam metni saklanan check-in yanıtlarını adlandırır (tek-paket kuralı, Karar Kaydı madde 13).",
      "kocTeklifi": "Seçenek 3 (uneasily) ya da 4 (talk_it_through) → koşulsuz nazik koçluk teklifi HEMEN belirir: 'individual coaching is always available if you'd like it — and never required.'",
      "kocTeklifiMetin": "Individual coaching is always available if you'd like it — and never required.",
      "saklama": "Serbest metin verbatim, append-only saklanır; Coach Core Report'ta verbatim render (Bölüm E check-in satırı + Desire check-in log).",
      "zorunluDegil": "Devam etmek için hiçbir yanıt asla zorunlu değildir."
    }
  },
  "fTemplates": {
    "meta": {
      "gramer": "Worth exploring together: {observation}. A question for the room, not a conclusion: {question}.",
      "kural": "Sabit gramer, her thread, istisnasız. App üretir, rapor başına en çok 5, öncelik sırası T1→T5. Koçun yazdığı serbest alan YOK (Karar Kaydı madde 11).",
      "tieBreak": "5'ten fazla tetiklenirse öncelik sırası T1→T5 korunur; bir tür içinde en büyük magnitude tutulur. T2 ve T5 sistem/duygu başına tetiklenebilir ama her şablon rapor başına en çok bir kez render edilir (en büyük magnitude kazanır). Thread'ler madde köklerini alıntılayabilir (Ledger F'yi besler, Coach Spec v0.3+); gramer her zaman geçerli."
    },
    "T1": {
      "ad": "D9 gap",
      "tetik": "|gap| ≥ 15",
      "impostor": "Worth exploring together: their confidence read sits {gap} points under their skill mean — the impostor direction. A question for the room, not a conclusion: what would they attempt this season if the confidence matched the skill?",
      "overconfidence": "Worth exploring together: their confidence read sits {gap} points above their skill mean — the overconfidence direction. A question for the room, not a conclusion: which skill, tested honestly in the room, would they most want the confidence to be right about?"
    },
    "T2": {
      "ad": "Access vs. expression",
      "tetik": "herhangi bir sistemin reach'i UPPER iken D5 EDGE setinde (ya da tersi)",
      "duz": "Worth exploring together: {system} is easy for them to reach ({reach}/5) while showing emotion is their working edge (D5 in the edge set) — colours they can travel to but not yet display. A question for the room, not a conclusion: which scene would let a small, controlled amount of {system} be seen safely?",
      "ters": "Worth exploring together: their expression is strong (D5 {score}) while {system} runs low on reach ({reach}/5) — the showing may be outrunning the feeling on this colour. A question for the room, not a conclusion: what would the character's version of {system}, built from scratch, give the performance that indication can't?"
    },
    "T3": {
      "ad": "Preference vs. skill tension",
      "tetik": "doorway'in natural-ground alanı APS EDGE setine düşerse",
      "naturalGround": {
        "ENFP": 6,
        "ENTP": 1,
        "ENFJ": 8,
        "ENTJ": 7,
        "INFP": 5,
        "INTP": 1,
        "INFJ": 6,
        "INTJ": 1,
        "ESFP": 3,
        "ESTP": 3,
        "ESFJ": 8,
        "ESTJ": 7,
        "ISFP": 5,
        "ISTP": 3,
        "ISFJ": 8,
        "ISTJ": 1
      },
      "metin": "Worth exploring together: their doorway's home ground ({domain}) came out as a working edge — the way they love to work and the skill it leans on are out of step, which their own report calls the most interesting conversation in the room. A question for the room, not a conclusion: does the doorway need a different vehicle right now, or does the vehicle need building?"
    },
    "T4": {
      "ad": "Exit",
      "tetik": "role-hangover bayrağı açık",
      "metin": "Worth exploring together: coming back runs slow against how far they travel (see the palette section's flag framing). A question for the room, not a conclusion: what does the hour after a heavy scene currently look like for them — and what would they like it to look like?"
    },
    "T5": {
      "ad": "Comfort vs. access",
      "tetik": "yalnız Part 4 (comfort inventory) alındıysa",
      "showingEdge": "Worth exploring together: {emotion} is uncomfortable for them to show ({showing}/5) though comfortable to feel ({feeling}/5), while its colour is open in the palette — the door works; the display is the edge. A question for the room, not a conclusion: what would make showing it feel less like exposure and more like craft?",
      "unbuilt": "Worth exploring together: {emotion} sits low in comfort on both sides while its colour also runs low in access — comfort and access pointing the same way, which usually means this colour simply hasn't been built yet. A question for the room, not a conclusion: would a fully constructed, fully owned character version of {emotion} be interesting to build together, at their pace?"
    },
    "onayKaydi": "options, field copy, behavior rules, five templates, and the natural-ground map approved by Filiz 10 July 2026."
  }
};
