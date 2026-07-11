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
// §6 BAYRAKLARI KAPANDI — Karar Kaydı 10 Tem 2026: doorwayLine ONAYLI
//        (soru bölümünün üstünde), başlık "Your Core Report" (Filiz'in
//        seçimi), setGrowth ONAYLI. Kanonik adres:
//        docs/kanon/KARAR-2026-07-09-10.md
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
      "durum": "ONAYLI — Karar Kaydı 10 Tem 2026: soru bölümünün üstünde render edilir.",
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
      "durum": "ONAYLI — Karar Kaydı 10 Tem 2026 (retake motivasyonu). Retake mekaniği: 12-hafta yumuşak kapı + facilitator/ekip istisnası; ısrar yok; Doorway bir-kez kuralı geçerli — UI inşaat kuyruğunda.",
      "metin": "Your set will grow. As you work and retake the core profiles — once a season, or around a period of focused work — new entrances open and new questions arrive. That is the design: the deeper your ground and your palette become, the richer this set becomes with them."
    },
    "standingOffer": "And the standing offer, which is always true no matter what any page of any report says: individual coaching with us is always available if you'd like it — to work with your set, to prepare a specific role, or simply to talk it all through with someone who does this every day.",
    "signOff": "Warmly, Filiz Kaya Ataklı"
  },
  "checkIn": "Your set is in your hands now — how does it feel? If anything sat uneasily, or you'd like help putting it to work on a real role, tell us. Individual coaching is always available, and never required.",
  "girisBloklari_KALDIRILDI": "Giriş blokları Question Bank'e taşındı (tek kaynak, ITC-QUESTIONBANK-V01). Motor questionBank.domain/sistem[...].doorway okur. Bkz data/kalibrasyon/question-bank.js.",
  "setler": {
    "ENFP": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Spark, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
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
          "metin": "Your character's earliest memory? · Happiest memory? · Saddest memory? · Where did your character get most embarrassed? · The biggest pain in your character's life? · The biggest joy? · What did your character play as a child — which games, and why? · How has your character's posture changed over time — at 5, 10, 15…? · When and how did your character meet that person (the one who matters most now)? · What feelings and sensations come to your character in times of distress?"
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
    "ENTP": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Prism, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is the open problem: you get ready in every direction, and your character arrives in a way even you can't fully explain afterward. So your set has two movements — first the strategist's questions, because your instinct is to find what they wants and how the machine of them works; then the wide-open ones, because your best discoveries come when the question refuses to narrow.",
      "maddeler": [
        {
          "tip": "italik",
          "metin": "The strategist**'**s opening:"
        },
        {
          "tip": "madde",
          "metin": "What does your character want — in the whole story, and in each scene?"
        },
        {
          "tip": "madde",
          "metin": "What is your character's strategy for getting it? Where did they learn that strategy?"
        },
        {
          "tip": "madde",
          "metin": "Why does your character do this? And why this way, rather than another?"
        },
        {
          "tip": "madde",
          "metin": "Where does the plan break? What does your character do when it breaks?"
        },
        {
          "tip": "madde",
          "metin": "What are the rules of your character's world — and which ones do they break?"
        },
        {
          "tip": "italik",
          "metin": "Now open all the doors:"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's present, past and future?"
        },
        {
          "tip": "madde",
          "metin": "In what ways might we understand your character better?"
        },
        {
          "tip": "madde",
          "metin": "How else could we see your character?"
        },
        {
          "tip": "madde",
          "metin": "What is the big picture? What is your character doing, trying to accomplish, feel, be?"
        },
        {
          "tip": "madde",
          "metin": "What could we learn about your character if we could time-travel with them?"
        },
        {
          "tip": "madde",
          "metin": "— Earliest memory of your character?  ·  Happiest memory?  ·  Saddest memory?  ·  Where did they get most embarrassed?  ·  The biggest pain in they**'**s life?  ·  The biggest joy?  ·  What did they play as a child — which games, and why?  ·  How has their posture changed over time — at 5, 10, 15…?  ·  When and how did they meet that person (the one who matters most now)?  ·  What feelings and sensations come in times of distress?*"
        },
        {
          "tip": "madde",
          "metin": "Which senses does your character use most? Are there any seeing, hearing or feeling deficits?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? How did they express them?"
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships? Who are the people around them?"
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
          "metin": "Imagine people's eyes on your character — their looks landing on your character. What do they feel?"
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
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in their life, feelings, body, and relationship patterns?"
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves, actions and feelings?"
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
          "metin": "Walk for a while as your character. Notice your posture and your body, your pace, your moves, your five senses — what do you notice as they? Take notes."
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
          "metin": "How would your favorite actor approach your character? What would they do with your character?"
        }
      ]
    },
    "ENFJ": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Bridge, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is people: emotions, intentions, needs, and the web of relationships that holds a person in place. You understand a character the way you understand a friend — through who they love, what they long for, and how they land on others. Here is the set built for the way your mind works.",
      "maddeler": [
        {
          "tip": "italik",
          "metin": "First, the team, the story, and the set:"
        },
        {
          "tip": "madde",
          "metin": "Who or what is involved — and who is left out?"
        },
        {
          "tip": "madde",
          "metin": "Who will be affected, and how?"
        },
        {
          "tip": "madde",
          "metin": "How will others react?"
        },
        {
          "tip": "madde",
          "metin": "What's appropriate for everyone involved?"
        },
        {
          "tip": "madde",
          "metin": "How will your acting choices affect the relationships among the people on this production?"
        },
        {
          "tip": "madde",
          "metin": "Who might contribute a special strength or skill?"
        },
        {
          "tip": "madde",
          "metin": "How do we get everyone on board to make this work?"
        },
        {
          "tip": "italik",
          "metin": "Now your character:"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's emotions?"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's problems?"
        },
        {
          "tip": "madde",
          "metin": "What is it — and what is it not?"
        },
        {
          "tip": "madde",
          "metin": "What is happening — when, where, and how?"
        },
        {
          "tip": "madde",
          "metin": "Who else do you know who has this problem? How do they feel, move, talk, look?"
        },
        {
          "tip": "madde",
          "metin": "Which senses does your character use most? Are there any seeing, hearing or feeling deficits?"
        },
        {
          "tip": "madde",
          "metin": "What was your character's childhood like? Parents? Environment?"
        },
        {
          "tip": "madde",
          "metin": "As a child, what was one thing your character could always be sure of?"
        },
        {
          "tip": "madde",
          "metin": "What was one thing your character was never sure of?"
        },
        {
          "tip": "madde",
          "metin": "Where did your character grow up? With all five senses — what could they feel there?"
        },
        {
          "tip": "madde",
          "metin": "What was your character's greatest talent?"
        },
        {
          "tip": "madde",
          "metin": "What amused your character as a child?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's favorite games as a child?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? Where did they feel them most in the body?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's challenges? How did they feel about them and react to them?"
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships? Who are the people around them?"
        },
        {
          "tip": "madde",
          "metin": "Where does your character actually live? What do they feel most commonly — and where in the body?"
        },
        {
          "tip": "madde",
          "metin": "What is your character's occupation? What is the relationship with the job?"
        },
        {
          "tip": "madde",
          "metin": "How does doing this job affect your character's feelings and relationships?"
        },
        {
          "tip": "madde",
          "metin": "Who lives with your character?"
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
          "metin": "How does your character deal with stress? What happens in the body, the feelings, the actions?"
        },
        {
          "tip": "madde",
          "metin": "How does your character have fun these days? What happens in the feelings, the relationships, the body?"
        },
        {
          "tip": "madde",
          "metin": "Imagine people's eyes on your character — their looks landing on your character. What do they feel?"
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
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in their life, feelings, body, and relationship patterns?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes."
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves, actions and feelings?"
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
          "metin": "Walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes."
        },
        {
          "tip": "madde",
          "metin": "How does all of the above fit into what you're doing now — physically?"
        },
        {
          "tip": "madde",
          "metin": "What else needs to be done? What is missing?"
        }
      ]
    },
    "ENTJ": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Compass, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is structure and objective — you understand a character by mapping their role, their aim, and the logic of how they move through the story. So your set begins like a strategist's briefing and then, deliberately, keeps going past the plan into the human material your drive can otherwise rush by. Push yourself to stay with the later questions as long as you stayed with the first ones.",
      "maddeler": [
        {
          "tip": "italik",
          "metin": "The strategist**'**s briefing:"
        },
        {
          "tip": "madde",
          "metin": "What are the roles and responsibilities of your character — their function in this story?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want, and what's the strategy for getting it?"
        },
        {
          "tip": "madde",
          "metin": "What does your character have in common with the others — shared ground, shared stakes?"
        },
        {
          "tip": "madde",
          "metin": "What information do we actually have in hand — and what are the gaps the script leaves open?"
        },
        {
          "tip": "madde",
          "metin": "What is the big picture — the architecture of where your character is heading across the whole arc?"
        },
        {
          "tip": "italik",
          "metin": "Now go past the plan, into the person:"
        },
        {
          "tip": "madde",
          "metin": "What are the contradictions in your character — the ways they is two opposed things at once?"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's emotions — and what do they feel but never show?"
        },
        {
          "tip": "madde",
          "metin": "What was your character's childhood like? Parents? Environment?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? Where did they feel them most in the body?"
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships? Who are the people around them?"
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
          "metin": "Imagine people's eyes on your character — their looks landing on your character. What do they feel?"
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
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in their life, feelings, body, and relationship patterns?"
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves, actions and feelings?"
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
          "metin": "Now stop planning and walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes. For you this walk matters most: it**'**s where the plan becomes a person, and where managing gives way to feeling."
        },
        {
          "tip": "madde",
          "metin": "Having walked it — what do you now feel about your character that the plan didn't tell you?"
        },
        {
          "tip": "madde",
          "metin": "What else could be true of your character that you hadn't allowed for?"
        }
      ]
    },
    "INFP": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Wellspring, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is meaning and inner truth — reached through imagination, values, and the story underneath the story. You understand a character the way you'd understand a soul: from the inside, through what they believe and long for. Your set moves between the deep questions and the wide-open imaginative ones, because that's how your mind actually travels — inward, then outward, then inward again.",
      "maddeler": [
        {
          "tip": "italik",
          "metin": "Begin at the centre:"
        },
        {
          "tip": "madde",
          "metin": "What are your character's values? What do they care about most — in life, and within this situation?"
        },
        {
          "tip": "madde",
          "metin": "What would your character never do? What would they die for?"
        },
        {
          "tip": "madde",
          "metin": "Where did your character learn that this is the most important thing in life? What is the heart-breaking story behind that conviction?"
        },
        {
          "tip": "madde",
          "metin": "What is your character longing for — the thing beneath the thing they say they want?"
        },
        {
          "tip": "madde",
          "metin": "How does your character feel about the issue? How do the others feel — and how does that make they feel?"
        },
        {
          "tip": "italik",
          "metin": "Now open the imagination:"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's present, past and future?"
        },
        {
          "tip": "madde",
          "metin": "In what ways might we understand your character better?"
        },
        {
          "tip": "madde",
          "metin": "How else could we see your character?"
        },
        {
          "tip": "madde",
          "metin": "What could we learn about your character if we could time-travel with them?"
        },
        {
          "tip": "madde",
          "metin": "— Earliest memory of your character?  ·  Happiest memory?  ·  Saddest memory?  ·  Where did they get most embarrassed?  ·  The biggest pain in they**'**s life?  ·  The biggest joy?  ·  What did they play as a child — which games, and why?  ·  When and how did they meet that person (the one who matters most now)?  ·  What feelings and sensations come in times of distress?*"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? Where did they feel them most in the body?"
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships? Who are the people around them?"
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
          "metin": "Imagine people's eyes on your character — their looks landing on your character. What do they feel?"
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
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in their life, feelings, body, and relationship patterns?"
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves, actions and feelings?"
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
          "metin": "Walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes."
        },
        {
          "tip": "madde",
          "metin": "How else could you see all this? If you shift your perspective now, what else do you notice about your character?"
        },
        {
          "tip": "madde",
          "metin": "Can you imagine anything else?"
        }
      ]
    },
    "INTP": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Question, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is the question itself — you understand a character by finding the right thing to ask about them and following it all the way down. So your set begins as an analyst's toolkit — the questions that take a character apart — and then keeps going, because your mind is never quite done turning a thing over. Trust these; the puzzlement they produce is your talent working.",
      "maddeler": [
        {
          "tip": "italik",
          "metin": "The analyst**'**s opening:"
        },
        {
          "tip": "madde",
          "metin": "What are the gaps — what does the script leave unexplained about your character?"
        },
        {
          "tip": "madde",
          "metin": "What needs improving or deepening in my current understanding of your character?"
        },
        {
          "tip": "madde",
          "metin": "How else could I see this? What's the reading I haven't considered yet?"
        },
        {
          "tip": "madde",
          "metin": "What are the contradictions in your character — the ways they is two opposed things at once?"
        },
        {
          "tip": "madde",
          "metin": "Why does your character do this — and why this way, rather than another?"
        },
        {
          "tip": "italik",
          "metin": "Now follow it wherever it goes:"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's present, past and future?"
        },
        {
          "tip": "madde",
          "metin": "In what ways might we understand your character better?"
        },
        {
          "tip": "madde",
          "metin": "What is the big picture? What is your character doing, trying to accomplish, feel, be?"
        },
        {
          "tip": "madde",
          "metin": "What could we learn about your character if we could time-travel with them?"
        },
        {
          "tip": "madde",
          "metin": "— Earliest memory of your character?  ·  Happiest memory?  ·  Saddest memory?  ·  The biggest pain in they**'**s life?  ·  The biggest joy?  ·  What did they play as a child — which games, and why?  ·  When and how did they meet that person (the one who matters most now)?  ·  What feelings and sensations come in times of distress?*"
        },
        {
          "tip": "madde",
          "metin": "Which senses does your character use most? Are there any seeing, hearing or feeling deficits?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? How did they express them — and where in the body?"
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships? Who are the people around them?"
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
          "metin": "Imagine people's eyes on your character — their looks landing on your character. What do they feel?"
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
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in their life, feelings, body, and relationship patterns?"
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves, actions and feelings?"
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
          "metin": "Now stop analyzing and walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes. For you this walk matters most: it**'**s where understanding becomes feeling."
        },
        {
          "tip": "madde",
          "metin": "Having walked it — what do you now know that thinking alone didn't tell you?"
        },
        {
          "tip": "madde",
          "metin": "Can you imagine anything else? What else could be true of your character?"
        }
      ]
    },
    "INFJ": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Lantern, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is insight — you tend to see the whole of a character early, then work to understand and justify what you've seen. So your set honors both movements: first the deep questions that meet your insight where it lives, then the ones that test and enrich it, so your brilliant first glimpse becomes a fully built and defensible person rather than a fixed first impression.",
      "maddeler": [
        {
          "tip": "italik",
          "metin": "Meet your character whole:"
        },
        {
          "tip": "madde",
          "metin": "Who is your character, really — beneath what they shows the world? What's the hidden core?"
        },
        {
          "tip": "madde",
          "metin": "What is your character truly driven by — the real motive under the stated one?"
        },
        {
          "tip": "madde",
          "metin": "Where is your character heading across the whole story — the throughline, the arc, the destination?"
        },
        {
          "tip": "madde",
          "metin": "What does your character believe? What would they never do, and what would they die for?"
        },
        {
          "tip": "madde",
          "metin": "What is the wound underneath — the old hurt still shaping how your character moves through the world?"
        },
        {
          "tip": "italik",
          "metin": "Now test and enrich what you**'**ve seen:"
        },
        {
          "tip": "madde",
          "metin": "What are the contradictions in your character — the ways they is two opposed things at once, complicating my first read?"
        },
        {
          "tip": "madde",
          "metin": "What evidence would argue against my early impression? What am I not seeing?"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's emotions — and what do they feel but never show?"
        },
        {
          "tip": "madde",
          "metin": "What was your character's childhood like? Parents? Environment?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? Where did they feel them most in the body?"
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships? Who are the people around them?"
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
          "metin": "Imagine people's eyes on your character — their looks landing on your character. What do they feel?"
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
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in their life, feelings, body, and relationship patterns?"
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves, actions and feelings?"
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
          "metin": "Walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes."
        },
        {
          "tip": "madde",
          "metin": "Having walked it — what do you now know about your character that seeing alone didn't tell you?"
        },
        {
          "tip": "madde",
          "metin": "What else could be true of your character that your first insight hadn't allowed for?"
        }
      ]
    },
    "INTJ": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Map, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is the system — you understand a character by grasping their whole structure and the logic that runs them. So your set begins where your mind naturally starts, with the architecture, and then deliberately turns toward the two things your analysis can skip: the feeling, and what other people see that you don't. Push yourself to stay with those later questions as long as you stayed with the first ones — that's where your growth as an actor lives.",
      "maddeler": [
        {
          "tip": "italik",
          "metin": "Map the system:"
        },
        {
          "tip": "madde",
          "metin": "Who is your character, structurally — what drives them, and how does the logic of that person actually run?"
        },
        {
          "tip": "madde",
          "metin": "Where is your character heading across the whole story — the throughline, the arc, the destination?"
        },
        {
          "tip": "madde",
          "metin": "Why does your character do this — and why this way rather than another? What's the deep design under the behavior?"
        },
        {
          "tip": "madde",
          "metin": "What does your character believe? What would they never do, and what would they die for?"
        },
        {
          "tip": "madde",
          "metin": "What is the wound underneath — the old structural fault still shaping how your character moves through the world?"
        },
        {
          "tip": "italik",
          "metin": "Now turn toward feeling — the part the map leaves out:"
        },
        {
          "tip": "madde",
          "metin": "What does your character actually feel — in the body, moment to moment — beneath what they understands or shows?"
        },
        {
          "tip": "madde",
          "metin": "What are the contradictions in your character — the ways they is two opposed things at once, that a clean model would flatten?"
        },
        {
          "tip": "madde",
          "metin": "What was your character's childhood like? Parents? Environment?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? Where did they feel them most in the body?"
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships? Who are the people around them?"
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
          "metin": "Imagine people's eyes on your character — their looks landing on your character. What do they feel?"
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
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in their life, feelings, body, and relationship patterns?"
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves, actions and feelings?"
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
          "metin": "Now stop analyzing and walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes. For you this walk matters most: it**'**s where the system becomes a person, and where understanding gives way to feeling."
        },
        {
          "tip": "madde",
          "metin": "Having walked it — what do you now feel about your character that the analysis didn't tell you?"
        },
        {
          "tip": "madde",
          "metin": "What did a collaborator — a partner, the director — see in your character that you hadn't? What does that add?"
        }
      ]
    },
    "ESFP": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Pulse, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is people and their emotions, reached through the senses — what can be seen, heard, felt, and done. So your set keeps returning you to the body: ask, then walk, then ask again. That rhythm is not decoration; it is how you know things.",
      "maddeler": [
        {
          "tip": "madde",
          "metin": "What do we know about your character's emotions?"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's problems?"
        },
        {
          "tip": "madde",
          "metin": "What is it — and what is it not?"
        },
        {
          "tip": "madde",
          "metin": "What is happening — when, where, and how?"
        },
        {
          "tip": "madde",
          "metin": "Who else do you know who has this problem? How do they feel, move, talk, look?"
        },
        {
          "tip": "madde",
          "metin": "Which senses does your character use most? Are there any seeing, hearing or feeling deficits?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes."
        },
        {
          "tip": "madde",
          "metin": "What was your character's childhood like? Parents? Environment?"
        },
        {
          "tip": "madde",
          "metin": "As a child, what was one thing your character could always be sure of?"
        },
        {
          "tip": "madde",
          "metin": "What was one thing your character was never sure of?"
        },
        {
          "tip": "madde",
          "metin": "Where did your character grow up? With all five senses — what could they feel there?"
        },
        {
          "tip": "madde",
          "metin": "What was your character's greatest talent?"
        },
        {
          "tip": "madde",
          "metin": "What amused your character as a child?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's favorite games as a child?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? Where did they feel them most in the body?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's challenges? How did they feel about them and react to them?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes."
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships? Who are the people around them?"
        },
        {
          "tip": "madde",
          "metin": "Where does your character actually live? What do they feel most commonly — and where in the body?"
        },
        {
          "tip": "madde",
          "metin": "What is your character's occupation? What is the relationship with the job?"
        },
        {
          "tip": "madde",
          "metin": "How does doing this job affect your character's feelings and relationships?"
        },
        {
          "tip": "madde",
          "metin": "Who lives with your character?"
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
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes."
        },
        {
          "tip": "madde",
          "metin": "How does your character deal with stress? What happens in the body, the feelings, the actions?"
        },
        {
          "tip": "madde",
          "metin": "How does your character have fun these days? What happens in the feelings, the relationships, the body?"
        },
        {
          "tip": "madde",
          "metin": "Imagine people's eyes on your character — their looks landing on your character. What do they feel?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes."
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
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in their life, feelings, body, and relationship patterns?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes."
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves, actions and feelings?"
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
          "metin": "Walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes."
        },
        {
          "tip": "madde",
          "metin": "How does all of the above fit into what you're doing now — physically?"
        },
        {
          "tip": "madde",
          "metin": "What else needs to be done? What is missing?"
        }
      ]
    },
    "ESTP": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Arrow, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is action and the body: you understand a character by seeing what they do, doing it yourself, and reading the physical truth of them. So your set is built around movement, and it keeps sending you back to your feet — ask, then walk it, then ask again. For you that walk isn't a break from the analysis; it is the analysis.",
      "maddeler": [
        {
          "tip": "madde",
          "metin": "What do we know about your character's physicality?"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's problems?"
        },
        {
          "tip": "madde",
          "metin": "What is it — and what is it not?"
        },
        {
          "tip": "madde",
          "metin": "What is happening — when, where, and how?"
        },
        {
          "tip": "madde",
          "metin": "Who else do you know who has this problem? How do they move, act?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes."
        },
        {
          "tip": "madde",
          "metin": "What was your character's childhood like? Parents? Environment?"
        },
        {
          "tip": "madde",
          "metin": "What amused your character as a child?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's favorite games as a child?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's movements like — physically?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's challenges? How did they react to them?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes."
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships?"
        },
        {
          "tip": "madde",
          "metin": "Where does your character actually live?"
        },
        {
          "tip": "madde",
          "metin": "What is your character's occupation? What is the relationship with the job?"
        },
        {
          "tip": "madde",
          "metin": "How does doing this job affect your character's movements?"
        },
        {
          "tip": "madde",
          "metin": "Imagine an ordinary day of your character's, from waking up to going back to bed. Notice the movements throughout the day, and take notes."
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes."
        },
        {
          "tip": "madde",
          "metin": "How does your character deal with stress? What happens in the body?"
        },
        {
          "tip": "madde",
          "metin": "How does your character have fun these days? What happens in the body?"
        },
        {
          "tip": "madde",
          "metin": "Imagine people's eyes on your character — their looks landing on your character."
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes."
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
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in their body?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes."
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "Why doesn't your character have it? What is in the way?"
        },
        {
          "tip": "madde",
          "metin": "What would your character have to do to meet that need? What actions and gestures does that bring?"
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
          "metin": "Walk for a while as your character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes."
        },
        {
          "tip": "madde",
          "metin": "How does all of the above fit into what you're doing now — physically?"
        },
        {
          "tip": "madde",
          "metin": "What else needs to be done? What is missing?"
        }
      ]
    },
    "ESFJ": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Hearth, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is people: how they feel, what they need, how they're bound to one another — reached through concrete, observed detail rather than abstraction. You understand a character the way you understand someone you're looking after. Here is the set built for the way your mind works.",
      "maddeler": [
        {
          "tip": "italik",
          "metin": "First, the people and the situation:"
        },
        {
          "tip": "madde",
          "metin": "Who or what is involved — and who is left out?"
        },
        {
          "tip": "madde",
          "metin": "Who will be affected, and how?"
        },
        {
          "tip": "madde",
          "metin": "How will others react?"
        },
        {
          "tip": "madde",
          "metin": "What's appropriate for everyone involved?"
        },
        {
          "tip": "madde",
          "metin": "How will your acting choices affect the relationships among the people on this production?"
        },
        {
          "tip": "madde",
          "metin": "Who might contribute a special strength or skill?"
        },
        {
          "tip": "madde",
          "metin": "How do we get everyone on board to make this work?"
        },
        {
          "tip": "italik",
          "metin": "Now your character:"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's emotions?"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's problems?"
        },
        {
          "tip": "madde",
          "metin": "What is it — and what is it not?"
        },
        {
          "tip": "madde",
          "metin": "What is happening — when, where, and how?"
        },
        {
          "tip": "madde",
          "metin": "Who else do you know who has this problem? How do they feel, move, talk, look?"
        },
        {
          "tip": "madde",
          "metin": "Which senses does your character use most? Are there any seeing, hearing or feeling deficits?"
        },
        {
          "tip": "madde",
          "metin": "What was your character's childhood like? Parents? Environment?"
        },
        {
          "tip": "madde",
          "metin": "As a child, what was one thing your character could always be sure of?"
        },
        {
          "tip": "madde",
          "metin": "What was one thing your character was never sure of?"
        },
        {
          "tip": "madde",
          "metin": "Where did your character grow up? With all five senses — what could they feel there?"
        },
        {
          "tip": "madde",
          "metin": "What was your character's greatest talent?"
        },
        {
          "tip": "madde",
          "metin": "What amused your character as a child?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's favorite games as a child?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? Where did they feel them most in the body?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's challenges? How did they feel about them and react to them?"
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships? Who are the people around them?"
        },
        {
          "tip": "madde",
          "metin": "Where does your character actually live? What do they feel most commonly — and where in the body?"
        },
        {
          "tip": "madde",
          "metin": "What is your character's occupation? What is the relationship with the job?"
        },
        {
          "tip": "madde",
          "metin": "How does doing this job affect your character's feelings and relationships?"
        },
        {
          "tip": "madde",
          "metin": "Who lives with your character?"
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
          "metin": "How does your character deal with stress? What happens in the body, the feelings, the actions?"
        },
        {
          "tip": "madde",
          "metin": "How does your character have fun these days? What happens in the feelings, the relationships, the body?"
        },
        {
          "tip": "madde",
          "metin": "Imagine people's eyes on your character — their looks landing on your character. What do they feel?"
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
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in their life, feelings, body, and relationship patterns?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes."
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves, actions and feelings?"
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
          "metin": "Walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes."
        },
        {
          "tip": "madde",
          "metin": "How does all of the above fit into what you're doing now — physically?"
        },
        {
          "tip": "madde",
          "metin": "What else needs to be done? What is missing?"
        }
      ]
    },
    "ESTJ": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Scaffold, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is structure and concrete fact — you understand a character by mapping their role, their circumstances, and the real particulars of how they live and work. So your set begins like a practical briefing and then, deliberately, keeps going past the facts into the emotional material your drive can otherwise rush by. Push yourself to stay with the later questions as long as you stayed with the first ones.",
      "maddeler": [
        {
          "tip": "italik",
          "metin": "The practical briefing:"
        },
        {
          "tip": "madde",
          "metin": "What are the roles and responsibilities of your character — their function and duties in this story?"
        },
        {
          "tip": "madde",
          "metin": "What are the concrete facts — where your character lives, works, comes from; the real particulars of this life?"
        },
        {
          "tip": "madde",
          "metin": "What does your character have in common with the others — shared ground, shared stakes?"
        },
        {
          "tip": "madde",
          "metin": "What information do we actually have in hand — and what are the gaps the script leaves open?"
        },
        {
          "tip": "madde",
          "metin": "How does your character actually operate day to day — the practical shape of their life?"
        },
        {
          "tip": "italik",
          "metin": "Now go past the facts, into the person:"
        },
        {
          "tip": "madde",
          "metin": "What are the contradictions in your character — the ways they is two opposed things at once?"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's emotions — and what do they feel but never show?"
        },
        {
          "tip": "madde",
          "metin": "What was your character's childhood like? Parents? Environment?"
        },
        {
          "tip": "madde",
          "metin": "As a child, what was one thing your character could always be sure of? What was one thing they was never sure of?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? Where did they feel them most in the body?"
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships? Who are the people around them?"
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
          "metin": "Imagine people's eyes on your character — their looks landing on your character. What do they feel?"
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
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in their life, feelings, body, and relationship patterns?"
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves, actions and feelings?"
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
          "metin": "Now stop organizing and walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes. For you this walk matters most: it**'**s where the plan becomes a person, and where managing gives way to feeling."
        },
        {
          "tip": "madde",
          "metin": "Having walked it — what do you now feel about your character that the facts didn't tell you?"
        },
        {
          "tip": "madde",
          "metin": "What else could be true of your character that you hadn't allowed for?"
        }
      ]
    },
    "ISFP": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Still Water, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is values — what a character can stand behind, what makes sense to their heart. You understand people through what they care about, what they believe, and the emotions that live underneath. Here is the set built for the way your mind works — it begins, as you do, with what matters.",
      "maddeler": [
        {
          "tip": "madde",
          "metin": "How does your character feel about the issue?"
        },
        {
          "tip": "madde",
          "metin": "How do the others feel about the issue?"
        },
        {
          "tip": "madde",
          "metin": "How do the others feel about your character? And how does that make they feel?"
        },
        {
          "tip": "madde",
          "metin": "What are your character's values? What do they care about most — in life, and within this situation?"
        },
        {
          "tip": "madde",
          "metin": "How does your character fit in? How did they fit in before?"
        },
        {
          "tip": "madde",
          "metin": "What is the history of your character's values?"
        },
        {
          "tip": "madde",
          "metin": "Where did your character learn that this is the most important thing in life? What is the heart-breaking story behind that conviction?"
        },
        {
          "tip": "madde",
          "metin": "Who will gain, and who will lose, from this situation?"
        },
        {
          "tip": "madde",
          "metin": "How will everyone be affected?"
        },
        {
          "tip": "madde",
          "metin": "What is important to them?"
        },
        {
          "tip": "madde",
          "metin": "What special strengths or skills does your character need?"
        },
        {
          "tip": "madde",
          "metin": "What bodily sensations does your character feel within each situation?"
        },
        {
          "tip": "madde",
          "metin": "What was your character's childhood like? Parents? Environment?"
        },
        {
          "tip": "madde",
          "metin": "As a child, what was one thing your character could always be sure of? What mattered most to they at 5? 10? 15? 25? 30?…"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? Where did they feel them most in the body?"
        },
        {
          "tip": "madde",
          "metin": "Imagine an ordinary day of your character's, from waking up to going back to bed. Notice the feelings and interactions throughout the day, and take notes."
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves, actions and feelings?"
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
          "metin": "Walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes."
        }
      ]
    },
    "ISTP": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Workbench, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is doing: you understand a character by getting them into your body and working out how they operate. So your set is practical and physical, and it keeps sending you back to your feet — ask, then walk it, then ask again. For you the walk isn't a break from the work; it is the work, and it's where your answers actually live.",
      "maddeler": [
        {
          "tip": "italik",
          "metin": "The practical opening:"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's physicality — how do they move, stand, carry weight?"
        },
        {
          "tip": "madde",
          "metin": "How does your character actually operate — what do they do, and how?"
        },
        {
          "tip": "madde",
          "metin": "Where's the problem — the beat, the move, the moment that doesn't work yet?"
        },
        {
          "tip": "madde",
          "metin": "Why does your character do this — and why this way, rather than another?"
        },
        {
          "tip": "madde",
          "metin": "Who else do you know who moves or operates like this? How do they do it?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes."
        },
        {
          "tip": "madde",
          "metin": "What was your character's childhood like? Parents? Environment?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's movements like — physically? How did they carry themselves?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's challenges? How did they handle them?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes."
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships?"
        },
        {
          "tip": "madde",
          "metin": "Where does your character actually live?"
        },
        {
          "tip": "madde",
          "metin": "What is your character's occupation? What is the relationship with the job?"
        },
        {
          "tip": "madde",
          "metin": "How does doing this job affect your character's body and movement?"
        },
        {
          "tip": "madde",
          "metin": "Imagine an ordinary day of your character's, from waking up to going back to bed. Notice the movements throughout the day, and take notes."
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes."
        },
        {
          "tip": "madde",
          "metin": "How does your character deal with stress? What happens in the body?"
        },
        {
          "tip": "madde",
          "metin": "How does your character have fun these days? What happens in the body?"
        },
        {
          "tip": "madde",
          "metin": "Imagine people's eyes on your character — their looks landing on your character. What happens in the body?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes."
        },
        {
          "tip": "madde",
          "metin": "What is your character's sexual orientation? Is your character comfortable with it? How does it live in the body?"
        },
        {
          "tip": "madde",
          "metin": "Is there love in your character's life right now? What actions does it bring?"
        },
        {
          "tip": "madde",
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in their body?"
        },
        {
          "tip": "italik",
          "metin": "Walk for a while as your character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes."
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves and actions?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves and actions?"
        },
        {
          "tip": "madde",
          "metin": "Why doesn't your character have it? What is in the way?"
        },
        {
          "tip": "madde",
          "metin": "What would your character have to do to meet that need? What actions and gestures does that bring?"
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
          "metin": "Now walk it one more time — and this time, let the body produce a feeling rather than solve a problem. What do you feel as your character that the thinking didn**'**t give you? Take notes."
        },
        {
          "tip": "madde",
          "metin": "Having walked it — what do you now know that figuring it out alone didn't tell you?"
        },
        {
          "tip": "madde",
          "metin": "How does all of the above fit into what you're doing now — physically?"
        }
      ]
    },
    "ISFJ": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Harbor, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is people and their bonds, reached through concrete, observed detail — you understand a character the way you understand someone you're looking after: through who they love, what they need, and the real particulars of their life. Here is the set built for the way your mind works.",
      "maddeler": [
        {
          "tip": "italik",
          "metin": "Begin with the bonds and the ground:"
        },
        {
          "tip": "madde",
          "metin": "Who does your character love, and who loves they? Who do they feel responsible for?"
        },
        {
          "tip": "madde",
          "metin": "What are the concrete facts of this life — where your character lives, works, comes from; the real particulars?"
        },
        {
          "tip": "madde",
          "metin": "How does your character feel about the situation? How do the others feel — and how does that make they feel?"
        },
        {
          "tip": "madde",
          "metin": "Who will be affected by what happens, and how?"
        },
        {
          "tip": "madde",
          "metin": "What was your character's childhood like? Parents? Environment? What did they learn there about being cared for — or not?"
        },
        {
          "tip": "italik",
          "metin": "Now go deeper into the person:"
        },
        {
          "tip": "madde",
          "metin": "What are the contradictions in your character — the ways they is two opposed things at once?"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's emotions — and what do they feel but never show?"
        },
        {
          "tip": "madde",
          "metin": "As a child, what was one thing your character could always be sure of? What was one thing they was never sure of?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? Where did they feel them most in the body?"
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships? Who are the people around them?"
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
          "metin": "Imagine people's eyes on your character — their looks landing on your character. What do they feel?"
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
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in their life, feelings, body, and relationship patterns?"
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves, actions and feelings?"
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
          "metin": "Walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes."
        },
        {
          "tip": "madde",
          "metin": "Having walked it — what do you now feel about your character that gathering the facts didn't tell you?"
        },
        {
          "tip": "madde",
          "metin": "What else could be true of your character that you hadn't allowed for?"
        }
      ]
    },
    "ISTJ": {
      "gecerli": true,
      "kaynak": "Core_Report_Question_Sections_v1_0 (The Cornerstone, register sweep uygulanmış, Filiz onaylı 10 Tem 2026)",
      "giris": "All of us have a different doorway into understanding. Yours is concrete fact and how things are properly done — you understand a character by getting the real particulars right: where they come from, how they live, what they actually do. So your set begins with the solid ground you trust and then, deliberately, keeps going past the facts into the emotional and flexible material your steadiness can otherwise rush by. Push yourself to stay with the later questions as long as you stayed with the first ones.",
      "maddeler": [
        {
          "tip": "italik",
          "metin": "Start on solid ground:"
        },
        {
          "tip": "madde",
          "metin": "What are the concrete facts of your character — where they lives, works, comes from; the real particulars of this life?"
        },
        {
          "tip": "madde",
          "metin": "What is your character's role and responsibility in this story — the duties, the function?"
        },
        {
          "tip": "madde",
          "metin": "What was your character's childhood like? Parents? Environment? What did they learn there about how life works?"
        },
        {
          "tip": "madde",
          "metin": "How does your character actually operate day to day — the practical, observable shape of their life?"
        },
        {
          "tip": "madde",
          "metin": "What information do we actually have in hand — and what are the gaps the script leaves open?"
        },
        {
          "tip": "italik",
          "metin": "Now go past the facts, into the person:"
        },
        {
          "tip": "madde",
          "metin": "What are the contradictions in your character — the ways they is two opposed things at once?"
        },
        {
          "tip": "madde",
          "metin": "What do we know about your character's emotions — and what do they feel but never show?"
        },
        {
          "tip": "madde",
          "metin": "As a child, what was one thing your character could always be sure of? What was one thing they was never sure of?"
        },
        {
          "tip": "madde",
          "metin": "What were your character's most common emotions? Where did they feel them most in the body?"
        },
        {
          "tip": "madde",
          "metin": "How is life at the moment for your character?"
        },
        {
          "tip": "madde",
          "metin": "How are your character's relationships? Who are the people around them?"
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
          "metin": "Imagine people's eyes on your character — their looks landing on your character. What do they feel?"
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
          "metin": "Is there someone your character once loved but no longer does? If so, what happened? What is the legacy of it in their life, feelings, body, and relationship patterns?"
        },
        {
          "tip": "madde",
          "metin": "What is your character most afraid of in life right now? How does that shape their moves, actions and feelings?"
        },
        {
          "tip": "madde",
          "metin": "What does your character want most from life right now? Why does it matter that much? How does that shape their moves, actions and feelings?"
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
          "metin": "Now stop gathering facts and walk for a while as your character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as they? Take notes. For you this walk matters most: it**'**s where the facts become a person, and where getting it right gives way to feeling."
        },
        {
          "tip": "madde",
          "metin": "Having walked it — what do you now feel about your character that the facts didn't tell you?"
        },
        {
          "tip": "madde",
          "metin": "What else could be true of your character that you hadn't allowed for?"
        }
      ]
    }
  },
  "rotaHaritasi": {
    "not": "Ch.5 routed sentence — yalnız APS-türevli (Routing_MicroReveals_Checkin_v0_1). MODULE-ROUTED: EDGE alansa hem routed cümle hem hub önerisi tetiklenir. D7→M6 ONAYLI (Filiz, 11 Tem 2026 — Routing v1.0 APPROVED IN FULL; battery canon D2/D3/D5/D6 listeliyordu, bu tek yeni harita girdisi). Sıralama: instrument order (D2→D3→D6→D7), skor değil.",
    "2": "Performance Mindfulness (Module 7)",
    "3": "The Actor's Body (Module 8)",
    "6": "Access Channel & Imagery (Module 4)",
    "7": "Regulation & Performance Strategies (Module 6)"
  },
  "rotaProseDoor": {
    "not": "PROSE-DOOR: EDGE alanın kendi blokları öneriyi sözle taşır; routed cümle ve hub TETİKLENMEZ. Metin doorway raporunun EDGE bloklarında zaten var.",
    "1": "individual coaching (script-work) + Core Report'un kendi soru bölümü",
    "4": "external voice training / workshop (uygulama-içi modül yok)",
    "8": "the live workshop (topluluk becerisi tek başına eğitilemez)"
  },
  "rotaNeverRoutes": {
    "not": "NEVER-ROUTES: D5→M3 ama M3 core (herkes alır) → D5 aktör-side routing tetiklemez; koç-side D5 edge palette expression story yanında okunur (Coach F, T2). D9 kendi sayfası (kopyası M6'ya atıf yapar).",
    "5": "Emotional Expression (M3 core — routing yok)",
    "9": "Craft Confidence (own page — routing yok)"
  }
};
