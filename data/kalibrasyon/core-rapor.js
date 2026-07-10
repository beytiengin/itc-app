// =====================================================================
// CORE REPORT — Specification & Content Pack v0.3 (ITC)
// Kaynak: Core_Report_Spec_Pack_v0_3.docx + SAMPLE_Core_Report_The_Spark.docx
// Copy author: Filiz Kaya Ataklı with the team · 9 Temmuz 2026
//
// KONUM: Çekirdek tamamlanınca oyuncunun aldığı belge; M3'ün beslediği
//        TEK rapor — Emotional'ın standalone raporu YOK. Profil değil,
//        çalışma aleti ("working instrument").
// STRENGTHS-ONLY YASASI: M3 sonuçları aktör tarafında YALNIZ olumlayıcı
//        giriş başlıklarında; palet görseli/sıra/band/edge adı ASLA.
//        Palet verisi coach + araştırma + downstream kişiselleştirme
//        için append-only saklıdır (Karar 65 raf zemini).
// GİRİŞLER: top 2 APS alanı + top 2 duygusal sistem; beraberlik birlikte
//        render edilir; D9 ASLA giriş olamaz. "Set gösterir, anlatmaz" —
//        'How your set was built' bölümü Filiz'in eliyle SİLİNDİ.
// İÇERİK KAPISI (feature flag DEĞİL — paralel-faz flag dersinden):
//        setler[key].gecerli olmayan doorway'de Core Report butonu
//        görünmez. 2/16 set elde; 14 sweep Filiz batch'leri bekler.
// AÇIK §6 BAYRAKLARI (Filiz kırmızı kalemi): doorwayLine (PROPOSED),
//        başlık ("Your Core Report" ↔ "Your Character Preparation Set"),
//        setGrowth onayı. Örnek render ilk ikisini İÇERİYOR — fiilî ≠
//        onaylı; kapanınca tarihli kayıt düşülür.
// KURAL: İçerik verbatim'dir; her düzeltme Filiz'den v0.4 olarak döner —
//        kısmi edit yayınlanmaz.
// DOĞRULAMA İMZASI: ITC-COREREPORT-PACK-V03-20260709
// =====================================================================

export const coreRapor = {
  "meta": {
    "baslik": "Your Core Report",
    "paket": "CORE REPORT — Specification & Content Pack",
    "surum": "v0.3",
    "yazar": "Filiz Kaya Ataklı with the team",
    "teslimAkisi": "Intake → Module 1 → doorway report → Module 2 → APS report → Module 3 → CORE REPORT"
  },
  "ch1": {
    "openingFrame": "You've completed the core path — thank you for the honesty it took. This document is what it was for. It is not another profile: it is a working instrument — a set of questions and practices for preparing any character, assembled for you specifically from your doorway, your skills, and your emotional palette. The palette itself stays private and works quietly in the background: you won't find scores or verdicts here. What you'll find is your way in.",
    "boundaryParagraph": "And the heart of how we work, stated once: the actions, the stories, the emotions or the thoughts you build for a character are the character's — designed, authored, and owned by the character. Nothing in this set, and nothing in this method, will ever ask you to open your own wounds to make a role work. Where a script is silent, we ask questions; we never mine.",
    "holdYourDoorwayLightly": "One reading note. Your doorway is a hypothesis about your preferences — how you tend to enter the work — and this set is built on it the way a good tailor uses a first fitting: as a starting shape, not a verdict. If a question that “shouldn't” suit your doorway turns out to fit you better, follow the fit. The set serves you, not the other way around."
  },
  "ch2": {
    "domainHeaderKalip": "An entrance of yours: {domain_name} — one of your strongest ground.",
    "sistemHeaderKalip": "An entrance of yours: {system_name} — a colour you reach easily."
  },
  "ch3": {
    "header": "Questions to ask in character design",
    "boundaryLine": "One rule above every question here: these questions build your character's memories, body, and wants — authored by your character, owned by your character. None of them asks for yours. Where the script is silent, ask; never assume, and never substitute your own past for your character's.",
    "doorwayLine": {
      "durum": "PROPOSED — spec §6 bayrağı: Filiz onaylarsa soru bölümünün üstünde render edilir; çizerse isim yalnız doorway raporunda yaşar. Örnek render (Spark) satırı İÇERİYOR.",
      "kalip": "Your doorway: {doorway_name}. Here is the question set built for it."
    }
  },
  "ch4": {
    "header": "Coming back cleanly",
    "teaching": "One craft before the doors, because it is the one actors are taught least: how to end. Reaching a state, living in it, steering it — training talks about those constantly. Coming back — letting the character's state settle and returning to your own weather — is treated as something that just happens. It doesn't just happen. It is a skill, it can be practiced like any other, and it is the skill that keeps all the others sustainable across a career. A clean exit is not a lack of commitment; it is what makes full commitment affordable, night after night.",
    "door": "Module 9 — Entry & Exit — is open to every actor, whatever any profile says: role boundaries, recovery practices, and the craft of stepping in and out. And as everywhere in this app: individual coaching is always available if you'd like it."
  },
  "ch5": {
    "header": "Your next doors",
    "routedKalip": "Your skills profile already pointed somewhere first: {routed_list}. Those doors are worth opening in that order — and every door below stays open regardless.",
    "davetler": [
      "Access Channel & Imagery (Module 4) — finds your imagination's strongest doorway, then routes every exercise in this app through it. If you open one door, open this one.",
      "Flow (Module 5) — how readily the scene takes over for you, and which conditions open that door; includes a short form you can retake after every performance to watch your own pattern emerge.",
      "Regulation & Performance Strategies (Module 6) — your optimal zone and your optimal tone, and how to find both on demand, including after a mistake.",
      "Performance Mindfulness (Module 7) — present-moment attention and the art of returning to the scene when the mind wanders.",
      "The Actor's Body (Module 8) — habitual tension, release, neutrality, malleability — the one module with a second pair of eyes, through video, if you choose it."
    ]
  },
  "ch6": {
    "header": "Where this goes from here",
    "setGrowth": {
      "durum": "Spec §6: açık onay bekliyor (çekirdeğin retake motivasyonu). Örnek render İÇERİYOR.",
      "metin": "Your set will grow. As you work and retake the core profiles — once a season, or around a period of focused work — new entrances open and new questions arrive. That is the design: the deeper your ground and your palette become, the richer this set becomes with them."
    },
    "standingOffer": "And the standing offer, which is always true no matter what any page of any report says: individual coaching with us is always available if you'd like it — to work with your set, to prepare a specific role, or simply to talk it all through with someone who does this every day.",
    "signOff": "Warmly, Filiz Kaya Ataklı"
  },
  "checkIn": "Your set is in your hands now — how does it feel? If anything sat uneasily, or you'd like help putting it to work on a real role, tell us. Individual coaching is always available, and never required.",
  "girisBloklari": {
    "not": "Kaynak: Question Bank (voice=doorway, stable keys — coach spec §7 kararı). Elimizde YALNIZ Spark örneğinin 4 bloğu var (D6, D8, Care, Play). Kalan alan/sistem blokları Filiz'den bank olarak gelecek — boş slot İCAT EDİLMEZ; bloksuz giriş yalnız başlığıyla render edilir ve eksik Filiz'e raporlanır.",
    "domain": {
      "6": "Imagination is your strong entrance — so give it the whole worksite. Time-travel with your character: what could you learn at age five, at fifteen, on the night before the play begins? What are your character's three pillar events — the moments that made this person — and what exactly happened in each: who was there, what was said, what was never said again? Imagine one ordinary day, waking to sleeping, and follow the feelings and encounters through it. Then shift the frame: how else could you see your character? What would change if the story were told by the person your character hurt most? Your imagination will keep answering as long as you keep asking — so ask past the point where it feels finished.",
      "8": "Other people are your strong entrance — so build your character's world of others first. Who orbits your character: allies, dependents, rivals, ghosts? With whom is your character most at ease — and who brings out the worst? Who does your character perform for, defer to, protect, avoid? Take three relationships and design the history of each: how they met, the debt or wound between them, what each one wants from the other now. Then the question your ensemble instinct will love: what does the other person in each scene want from your character — and what is it like to be on the receiving end of your character?"
    },
    "sistem": {
      "Care": "Tenderness is a colour you reach easily — so map its whole territory, including the hard borders. Who has your character's tenderness — and who has lost it, and how? How does your character care: hovering, providing, fixing, fierce protecting? Who taught your character what care looks like — and what did that teaching leave out? Design the memory where your character learned that caring costs something. Then the border questions: where does your character's care turn to control? Who does your character care for out of love, and who out of duty — and can the difference be seen from outside?",
      "Play": "Lightness is a colour you reach easily — so use it to find what most preparation misses. What makes your character laugh — really laugh, not politely? What did your character play as a child — which games, with whom, and why those? Where does playfulness still leak out now: teasing, wordplay, private jokes, mischief? Who is allowed to see it — and who never is? Design one memory of pure play from your character's childhood, complete and owned by your character. Then ask the sharper question: what happened to that playfulness over the years — did it grow, go underground, or get traded for something?"
    }
  },
  "setler": {
    "not": "16 doorway-koşullu set; kaynak = register sweep sonrası doorway-rapor verisi. Elde 2/16: ENFP (onaylı örnek — SAMPLE_Core_Report_The_Spark) + ENFJ (Bridge teamSideAppendix — ITEM AUDIT PENDING, gecerli:false). Kalan 14 sweep Filiz'den batch'lerle gelir; sweep'i BİZ YAPMAYIZ. gecerli:false ya da eksik set → o doorway için Core Report butonu görünmez (içerik-kapısı; feature flag DEĞİL).",
    "ENFP": {
      "gecerli": true,
      "kaynak": "SAMPLE_Core_Report_The_Spark (approved exemplar, register sweep onaylı)",
      "giris": "All of us have a different doorway into understanding. Yours is imagination — connections, possibilities, stories. You don't need to collect every physical detail first; you need the right questions, and your imagination does the rest. Here is the set built for the way your mind works. Use it playfully — jump around, follow the heat.",
      "maddeler": [
        {
          "tip": "madde",
          "metin": "What do we know about your character's present, past and future?"
        },
        {
          "tip": "madde",
          "metin": "In what ways might you understand your character better?"
        },
        {
          "tip": "madde",
          "metin": "How else could you see your character?"
        },
        {
          "tip": "madde",
          "metin": "What is the big picture? What is your character doing, trying to accomplish, feel, be?"
        },
        {
          "tip": "madde",
          "metin": "What could you learn if you could time-travel with your character?"
        },
        {
          "tip": "italik",
          "metin": "Your character's earliest memory?  ·  Happiest memory?  ·  Saddest memory?  ·  Where did your character get most embarrassed?  ·  The biggest pain in your character's life?  ·  The biggest joy?  ·  What did your character play as a child — which games, and why?  ·  How has your character's posture changed over time — at 5, 10, 15…?  ·  When and how did your character meet that person (the one who matters most now)?  ·  What feelings and sensations come to your character in times of distress?"
        },
        {
          "tip": "madde",
          "metin": "Which senses does your character use most? Are there any seeing, hearing or feeling deficits?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? How did your character express them?"
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships? Who are the people around your character?"
        },
        {
          "tip": "madde",
          "metin": "Who does your character get along with best — and worst?"
        },
        {
          "tip": "madde",
          "metin": "How does your character feel about themselves?"
        },
        {
          "tip": "madde",
          "metin": "Imagine an ordinary day of your character's, from waking up to going back to bed. Notice the feelings and interactions throughout the day, and take notes."
        },
        {
          "tip": "madde",
          "metin": "Imagine people's eyes on your character — their looks landing. What does your character feel?"
        },
        {
          "tip": "madde",
          "metin": "What is your character's sexual orientation? Is your character comfortable with it? How?"
        },
        {
          "tip": "madde",
          "metin": "Is there love in your character's life right now? What feelings and actions does it bring?"
        },
        {
          "tip": "madde",
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in your character's life, feelings, body, and relationship patterns?"
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape the moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape the moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "Why doesn't your character have it? What is in the way?"
        },
        {
          "tip": "madde",
          "metin": "What would your character have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "tip": "madde",
          "metin": "What is stopping your character from taking the step?"
        },
        {
          "tip": "madde",
          "metin": "What happens if your character doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your posture and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as your character? Take notes."
        },
        {
          "tip": "madde",
          "metin": "How else could you see all this?"
        },
        {
          "tip": "madde",
          "metin": "What other time-travel would you like to take with your character?"
        },
        {
          "tip": "madde",
          "metin": "If you shift your perspective now — what else do you notice about your character?"
        },
        {
          "tip": "madde",
          "metin": "Can you imagine anything else?"
        },
        {
          "tip": "madde",
          "metin": "How would your favorite actor approach this character? What would they do with your character?"
        }
      ]
    },
    "ENFJ": {
      "gecerli": false,
      "kaynak": "The_Bridge_v0_1 teamSideAppendix — ITEM AUDIT PENDING (Filiz'in 44-madde üç-geçişli denetimi + onayı gelmeden render edilmez; kapak notu kuralı)",
      "giris": null,
      "maddeler": [
        {
          "tip": "madde",
          "metin": "All of us have a different doorway into understanding. Yours is people and connection — you understand a character through who they love, who they answer to, and who they're trying to become. So your set begins with your character's people, and then, deliberately, keeps going into the private ground your outward attention can otherwise pass by. Give the alone-questions as much time as the together-questions."
        },
        {
          "tip": "italik",
          "metin": "Start with the people:"
        },
        {
          "tip": "madde",
          "metin": "Who are the people around your character? Who matters most, and why?"
        },
        {
          "tip": "madde",
          "metin": "What does your character mean to each of them — and what does each of them mean to your character?"
        },
        {
          "tip": "madde",
          "metin": "Who does your character love, protect, answer to, perform for, avoid?"
        },
        {
          "tip": "madde",
          "metin": "When and how did your character meet that person (the one who matters most now)?"
        },
        {
          "tip": "madde",
          "metin": "Who believes in your character — and who gave up? What did each one leave behind?"
        },
        {
          "tip": "italik",
          "metin": "The becoming:"
        },
        {
          "tip": "madde",
          "metin": "Who is your character trying to become — and for whom?"
        },
        {
          "tip": "madde",
          "metin": "Who did your character once try to become, and abandon? What happened, and what remains of it?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape the moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "Why doesn't your character have it? What is in the way? What is stopping the step from being taken?"
        },
        {
          "tip": "madde",
          "metin": "What happens if your character doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "tip": "italik",
          "metin": "Now the private ground — stay here as long as you stayed with the people:"
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "What does your character feel when completely alone, door closed, no one to read?"
        },
        {
          "tip": "madde",
          "metin": "How does your character feel about themselves?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? How did your character express them — and to whom would they never be shown?"
        },
        {
          "tip": "italik",
          "metin": "Your character's earliest memory? · Happiest memory? · Saddest memory? · The biggest pain in your character's life? · The biggest joy? · What did your character play as a child — which games, and with whom? · How has your character's posture changed over time — at 5, 10, 15…? · What feelings and sensations come to your character in times of distress?"
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape the moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "Is there love in your character's life right now? What feelings and actions does it bring?"
        },
        {
          "tip": "madde",
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in your character's life, feelings, body, and relationship patterns?"
        },
        {
          "tip": "madde",
          "metin": "Imagine an ordinary day of your character's, from waking up to going back to bed. Notice the feelings and interactions throughout the day — and notice who your character becomes with each person met. Take notes."
        },
        {
          "tip": "madde",
          "metin": "Imagine people's eyes on your character — their looks landing. What does your character feel?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your posture and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as your character? And notice: who does your character hope is watching? Take notes."
        },
        {
          "tip": "italik",
          "metin": "Shift the frame:"
        },
        {
          "tip": "madde",
          "metin": "How else could you see your character?"
        },
        {
          "tip": "madde",
          "metin": "Seen through the eyes of the person who loves your character most — what do you notice? And through the eyes of the person your character has hurt most?"
        },
        {
          "tip": "madde",
          "metin": "Can you imagine anything else?"
        },
        {
          "tip": "madde",
          "metin": "How would your favorite actor approach this character? What would they do with your character?"
        }
      ]
    }
  },
  "rotaHaritasi": {
    "not": "Ch.5 routed sentence — yalnız APS-türevli (spec). EDGE alan → modül eşlemesi: iki örnekte de (Spark Core örneği + Deniz coach örneği) doğrulanan çiftler aşağıda; TAM harita Filiz'e soruldu. Eşlemesi olmayan EDGE alan cümleyi tetiklemez ('if fired').",
    "2": "Performance Mindfulness (Module 7)",
    "3": "The Actor's Body (Module 8)"
  }
};
