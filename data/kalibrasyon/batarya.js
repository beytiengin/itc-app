// =====================================================================
// INSIDE THE CHARACTER (ITC) — Actor Assessment Battery
// Master Document · Module Map · Modules 1–4
// Instrument author: Filiz Kaya Ataklı · Inside The Character — ITC (Beyti Engin & Filiz Kaya Ataklı)
// July 2026 · Working drafts under evaluation
// Versiyonlar: Intake v0.2 · M1 v0.2 · M2 v0.1 · M3 v0.1 · M4 v0.1
//
// KURAL: İçerik verbatim'dir — kaynak: CharacterDesign_Modules1-4.docx.
// Metinlerde HİÇBİR değişiklik yapılmaz; düzeltme yalnız Filiz'den
// gelen yeni sürümle olur.
// MARKA NORMALİZASYONU (Beyti talimatı, bu oturum): kaynak Filiz'in
// Claude'unda "The Character Design" olarak geçiyordu; ekosistem markası
// olarak "Inside The Character (ITC)" ile değiştirildi. Değerlendirme
// içeriği (maddeler, ölçekler, consent, notlar) AYNEN korundu.
// ONAY: Gönderilen içerik Filiz onayından geçmiş ve son hâlidir (FKA klinik
// onayı verilmiş kabul edilir — Beyti beyanı, bu oturum).
// KURAL: `teamNotes` ve `adminNote` alanları KATILIMCIYA ASLA gösterilmez.
// KURAL: Uygulamada Likert maddeleri karışık sırada ve alan/sistem
//        başlıkları OLMADAN sunulur (adminNote'larda belirtildiği gibi).
// KURAL: `ters: true` maddeler puanlamada 6 − ham olarak kodlanır.
// NOT (kaynak anomalisi): Module Map içinde Module 7 açıklaması kaynak
//        belgede cümle ortasında kesilmektedir ("…question set. The").
//        Verbatim korunmuştur — Filiz'e sorulacak.
// =====================================================================

export const batarya = {
  meta: {
    baslik: "INSIDE THE CHARACTER",
    altBaslik: "Actor Assessment Battery — Master Document",
    kapsam: "Module Map · Modules 1–4",
    motto: "Protect the actor, design the character.",
    yazar:
      "Instrument author: Filiz Kaya Ataklı · Inside The Character — ITC (Beyti Engin & Filiz Kaya Ataklı)",
    tarih: "July 2026 · Working drafts under evaluation",
    dil: "en",
  },

  // -------------------------------------------------------------------
  // THE MODULE MAP
  // -------------------------------------------------------------------
  moduleMap: {
    giris:
      "The Actor battery is built as separable modules sharing one theoretical spine. The core path is taken by every actor; the Entry & Exit module is optional and opt-in, separately framed. Assessment and teaching are woven — each report flows into targeted learning for lower-scoring areas.",
    corePath: [
      {
        ad: "Intake — Getting to Know You",
        aciklama:
          "background, training, experience, aspirations, in-their-own-words.",
        durum: "drafted, v0.2",
      },
      {
        ad: "Module 1 — Acting Performance Scale",
        aciklama:
          "9 domains, 50 items: script analysis & character construction, concentration & presence, body & movement, voice & speech, emotional expression, imagination, discipline & motivation, collaboration, craft confidence.",
        durum: "drafted, v0.2",
      },
      {
        ad: "Module 2 — Access Channel & Imagery Profile",
        aciklama:
          "vividness across five channels, controllability, spontaneous channel (ranking), imagery-in-action. Replaces VAK. Routes every exercise in the battery.",
        durum: "drafted, v0.1",
      },
      {
        ad: "Module 3 — Emotional Profile",
        aciklama:
          "expressive access across the seven affective systems, meta-emotion ability, bodily emotional awareness, optional emotion-comfort inventory.",
        durum: "drafted, v0.1",
      },
      {
        ad: "Module 4 — Flow Proneness",
        aciklama:
          "the nine-dimension flow framework in acting situations; dispositional baseline (Form A) + repeatable state form (Form B) for case studies.",
        durum: "drafted, v0.1",
      },
      {
        ad: "Module 5 — Regulation & Performance Strategies",
        aciklama:
          "arousal regulation both directions, relaxation & baseline tension, self-talk, pre-performance routine, refocusing after error.",
        durum: "to draft",
      },
      {
        ad: "Module 6 — Performance Mindfulness",
        aciklama:
          "present-moment awareness, nonjudgment, and refocusing during performance.",
        durum: "to draft",
      },
      {
        ad: "Module 7 — Type Lens",
        aciklama:
          "an original preference-reflection instrument generating a hypothesis type; sixteen rewritten type reports, each with a tailored character-design question set. The",
        durum: "kaynakta kesik — Filiz'e sorulacak",
      },
    ],
    optional: {
      baslik: "Optional (opt-in, separately framed)",
      moduller: [
        {
          ad: "Entry & Exit",
          aciklama:
            "role-boundary style, recovery practice, regulation capacity & load, occupational stress & support. BASIC Ph-informed recovery personalization (credited to Lahad). Holds the actor's personal-wiring material ('your own weather'). Motto: protect the actor, design the character.",
          durum: "to draft",
        },
        {
          ad: "The Actor's Body",
          aciklama:
            "habitual tension, release capacity, neutrality, malleability. Two-source: self-report + video upload and observation. Teaching from osteopathy, Brennan's The Energetic Performer, and sensorimotor psychotherapy.",
          durum: "to draft",
        },
      ],
    },
  },

  // -------------------------------------------------------------------
  // MODULE 1 — INTAKE & ACTING PERFORMANCE SCALE
  // -------------------------------------------------------------------
  module1: {
    baslik: "Module 1 — Intake & Acting Performance Scale",

    consent: {
      baslik: "Participant Information & Consent",
      giris:
        "Dear friend, welcome aboard. We are glad our paths have crossed, and we hope this becomes an inspiring journey. Before you begin, please read the following so you know exactly what this is — and what it is not.",
      bolumler: [
        {
          baslik: "What this is",
          metin:
            "This is a self-assessment developed by Inside The Character (ITC) for actors and performing artists. It maps your current strengths and working style across the skills that matter in acting — analysis, presence, body, voice, emotional expression, imagination, discipline, collaboration, and confidence. Your answers create a personal profile, and that profile flows into tailored suggestions, exercises, and learning paths designed for you.",
        },
        {
          baslik: "What this is not",
          metin:
            "This is not a test you can pass or fail, and it is not a psychological or medical evaluation. It does not diagnose anything and it does not measure your worth as an artist or as a person. It describes areas to build — nothing more, nothing less. If at any point something in this process stirs up more than you expected, individual coaching is always available if you'd like it.",
        },
        {
          baslik: "A note on honesty",
          metin:
            "There are no right answers and no “good” profile. The only way this tool can genuinely help you is if you answer as you are, not as you wish to be. Everyone's profile has higher and lower areas — that is the point of a profile.",
        },
        {
          baslik: "Your data",
          metin:
            "Your answers are stored securely and treated as confidential. They are used for two purposes only: (1) to generate your personal report and performance-enhancement recommendations, and (2) in anonymized form — with all identifying details removed — to evaluate and improve the instrument itself as part of ongoing research. Your personal data is processed in accordance with applicable data-protection law (including GDPR and KVKK). You may request access to your data, ask for corrections, or ask for your data to be deleted at any time by contacting us.",
        },
        {
          baslik: "Voluntary participation",
          metin:
            "Taking part is entirely voluntary. You may skip any question you prefer not to answer, take a break at any time, and withdraw at any point without giving a reason and without any disadvantage.",
        },
        {
          baslik: "A living instrument",
          metin:
            "This assessment is a working version under continuous development. Your participation directly helps us make it better for the actors who come after you — thank you for that.",
        },
      ],
      onayKutulari: [
        "I have read and understood the information above.",
        "I understand this is a developmental self-assessment, not a clinical or diagnostic tool.",
        "I agree to the storage and use of my answers as described, including anonymized use for research and instrument development.",
        "I know I can skip questions, pause, or withdraw at any time, and can request deletion of my data.",
        "I am 18 years of age or older.",
      ],
      imzaAlanlari: ["Name & signature (or digital confirmation):", "Date:"],
      adminNote:
        "[Team note — not shown to participants: consent text must pass legal review for GDPR/KVKK before deployment; add the data-controller identity, contact address, and retention period. Video upload (Module 8) requires separate specific consent.]",
    },

    sectionA: {
      baslik: "Section A — Getting to Know You",
      giris:
        "This first part is simply about who you are and where you are on your path. It helps us read your profile in context — the same score means different things for someone in their first year and someone in their fifteenth.",
      gruplar: [
        {
          baslik: "About you",
          sorular: [
            { no: 1, metin: "Name:", tip: "metin" },
            { no: 2, metin: "Country:", tip: "liste", not: "(select from list)" },
            { no: 3, metin: "City:", tip: "liste", not: "(select from list)" },
            { no: 4, metin: "Date of birth:", tip: "tarih" },
            {
              no: 5,
              metin: "Education:",
              tip: "tekSecim",
              secenekler: [
                "High school",
                "University student / degree",
                "Master's student / degree",
                "Doctorate student / degree",
              ],
            },
            {
              no: 6,
              metin: "Field of education:",
              tip: "liste",
              not: "(select from list)",
            },
          ],
        },
        {
          baslik: "Your experience",
          sorular: [
            {
              no: 7,
              metin: "Formal training in acting (if any):",
              tip: "tablo",
              sutunlar: ["Program", "School / institution", "Duration", "City"],
            },
            {
              no: 8,
              metin: "Years of experience in acting:",
              tip: "tekSecim",
              secenekler: [
                "None",
                "1–2 years",
                "3–5 years",
                "5–10 years",
                "10–15 years",
                "15 years and more",
              ],
            },
            {
              no: 9,
              metin: "Areas of experience (select all that apply):",
              tip: "cokluSecim",
              secenekler: [
                "Theater",
                "Film",
                "Television",
                "Voice acting",
                "Other performing-arts media",
              ],
            },
            {
              no: 10,
              metin: "Special skills (select all that apply):",
              tip: "cokluSecim",
              secenekler: [
                "Accents",
                "Foreign languages",
                "Stage combat / weapon handling",
                "Musical instruments",
                "Athletic abilities",
                "Dancing",
                "Singing",
                "Stand-up or improv",
                "Horse riding",
                "Other: ______",
              ],
            },
            {
              no: 11,
              metin: "Workshops attended (if any):",
              tip: "tablo",
              sutunlar: ["Workshop", "Coach / teacher", "Duration", "City"],
            },
            {
              no: 12,
              metin: "Have you worked with an acting coach?",
              tip: "tekSecim",
              secenekler: [
                "No, not yet",
                "Yes — coach's name (optional): ______",
              ],
            },
            {
              no: 13,
              metin: "How do you usually learn your lines? (select all that apply)",
              tip: "cokluSecim",
              secenekler: [
                "Reading silently, many times",
                "Reading aloud / recording and listening",
                "Writing them out",
                "Walking or moving while learning",
                "Running lines with a partner",
                "Through the scene's logic — once I understand why, the words come",
                "Other: ______",
              ],
            },
          ],
        },
        {
          baslik: "In your own words",
          not: "Please answer freely — a few sentences or a full page, as you wish (up to 500 words each).",
          sorular: [
            {
              no: 14,
              metin: "What has been your favorite role so far, and why?",
              tip: "acikUclu",
            },
            {
              no: 15,
              metin:
                "Which acting technique(s) do you feel work best for you, and why?",
              tip: "acikUclu",
            },
            {
              no: 16,
              metin: "What can make a role challenging for you?",
              tip: "acikUclu",
            },
            {
              no: 17,
              metin: "Are there actors you consider role models? Who, and why?",
              tip: "acikUclu",
            },
            {
              no: 18,
              metin: "What do you think makes a performance most believable?",
              tip: "acikUclu",
            },
          ],
        },
        {
          baslik: "Your aspirations",
          sorular: [
            {
              no: 19,
              metin: "Short-term goals (select all that apply):",
              tip: "cokluSecim",
              secenekler: [
                "Learn new skills",
                "Advance into better roles",
                "Gain experience in theater / film",
                "Earn a professional certificate",
                "Raise my professional status",
                "Other: ______",
              ],
            },
            {
              no: 20,
              metin: "Long-term goals (select all that apply):",
              tip: "cokluSecim",
              secenekler: [
                "Mastering a new skill: ______",
                "Moving into another aspect of acting: ______",
                "Changing career to a field other than acting: ______",
                "Other: ______",
              ],
            },
          ],
        },
      ],
    },

    sectionB: {
      baslik: "Section B — Acting Performance Scale",
      giris:
        "Thank you for the first part. Now comes your own view of your skills as an actor. Below you will find 50 statements. For each one, choose the number that best describes how true it is of you — as you actually are today, not as you would like to be.\n\nRead each statement carefully. Answer honestly; there are no right or wrong answers, and every actor's profile has stronger and softer areas.",
      olcek: {
        1: "Not at all true of me",
        2: "A little true of me",
        3: "Somewhat true of me",
        4: "Mostly true of me",
        5: "Completely true of me",
      },
      adminNote:
        "[Team note — not shown to participants: in administration, items appear in a mixed order without domain headings. Items marked (R) are reverse-keyed.]",
      alanlar: [
        {
          ad: "Domain 1 — Script Analysis & Character Construction",
          maddeler: [
            { no: 1, metin: "When I read a script, I notice what it does not tell me about my character." },
            { no: 2, metin: "I ask myself why my character does what they do in every scene." },
            { no: 3, metin: "I can trace how one event in the story leads to the next." },
            { no: 4, metin: "When the script is silent about my character's past, I build answers before I perform, rather than improvising blindly." },
            { no: 5, metin: "Each new reading of a script shows me something I didn't see before." },
            { no: 6, metin: "After a first reading, I feel I already know the character well enough to begin.", ters: true },
            { no: 7, metin: "I can say in one sentence what my character wants in a given scene." },
          ],
        },
        {
          ad: "Domain 2 — Concentration & Presence",
          maddeler: [
            { no: 8, metin: "When my attention drifts during a scene, I can bring it back quickly." },
            { no: 9, metin: "Noise or movement off-set easily pulls me out of a scene.", ters: true },
            { no: 10, metin: "I stay connected to my scene partner even through long silences." },
            { no: 11, metin: "While performing, I notice small changes in my partner's voice or face and respond to them." },
            { no: 12, metin: "When something unexpected happens in a scene, I lose my footing.", ters: true },
            { no: 13, metin: "I can stay inside the scene even after making a mistake." },
          ],
        },
        {
          ad: "Domain 3 — Body & Movement Expression",
          maddeler: [
            { no: 14, metin: "I can change my walk, posture, and gestures to fit a character." },
            { no: 15, metin: "My body expresses what I intend it to express." },
            { no: 16, metin: "My movements look the same no matter which character I play.", ters: true },
            { no: 17, metin: "I can make a feeling visible using only my body, without words." },
            { no: 18, metin: "I can repeat a physical action precisely across takes or performances." },
          ],
        },
        {
          ad: "Domain 4 — Voice & Speech",
          maddeler: [
            { no: 19, metin: "I can change the tone, pace, and melody of my voice to fit a character." },
            { no: 20, metin: "My voice carries clearly without strain." },
            { no: 21, metin: "My articulation stays clear even when I speak very fast or very softly." },
            { no: 22, metin: "After a long day of performing, my voice is hoarse or exhausted.", ters: true },
            { no: 23, metin: "I can express an emotion through voice alone." },
          ],
        },
        {
          ad: "Domain 5 — Emotional Expression",
          maddeler: [
            { no: 24, metin: "I can show an emotion on cue, even when I don't feel it in that moment." },
            { no: 25, metin: "I can move between two different emotions within a single scene." },
            { no: 26, metin: "When a director asks, I can raise or lower the intensity of an emotion." },
            { no: 27, metin: "Once an intense emotion starts in a scene, I can't control where it goes.", ters: true },
            { no: 28, metin: "My face shows emotion clearly enough to be read without words." },
            { no: 29, metin: "I can express emotions that are far from my own daily life." },
          ],
        },
        {
          ad: "Domain 6 — Imagination",
          maddeler: [
            { no: 30, metin: "I can picture a place described in a script as if I were standing in it." },
            { no: 31, metin: "Given two facts about a character, I can imagine a believable third." },
            { no: 32, metin: "Imagined circumstances feel real enough for me to act on them." },
            { no: 33, metin: "I find it hard to react to things that aren't physically there — imaginary objects, unseen partners, green screen.", ters: true },
            { no: 34, metin: "I invent detailed lives for strangers I observe in daily life." },
          ],
        },
        {
          ad: "Domain 7 — Professional Discipline & Motivation",
          maddeler: [
            { no: 35, metin: "I arrive at rehearsal prepared — lines learned, first choices made." },
            { no: 36, metin: "I keep working on my craft between projects." },
            { no: 37, metin: "I follow through on the notes I receive." },
            { no: 38, metin: "I postpone preparation until pressure forces me to start.", ters: true },
            { no: 39, metin: "My interest in acting stays alive even through difficult periods." },
            { no: 40, metin: "I set specific goals for what I want to improve in my acting." },
          ],
        },
        {
          ad: "Domain 8 — Collaboration",
          maddeler: [
            { no: 41, metin: "I adjust my performance to serve my scene partner." },
            { no: 42, metin: "I listen to my partner as if hearing their lines for the first time." },
            { no: 43, metin: "I can take direction without losing my own creative contribution." },
            { no: 44, metin: "Receiving notes in front of others makes me shut down.", ters: true },
            { no: 45, metin: "I offer ideas that improve the whole scene, not only my part." },
          ],
        },
        {
          ad: "Domain 9 — Craft Confidence (Self-Efficacy)",
          maddeler: [
            { no: 46, metin: "I trust my preparation when I step onto the stage or set." },
            { no: 47, metin: "When a scene doesn't work, I can identify what to adjust." },
            { no: 48, metin: "I recover quickly after a poor audition or performance." },
            { no: 49, metin: "A single negative comment can make me doubt my ability as an actor.", ters: true },
            { no: 50, metin: "I feel ready for roles bigger than any I've played so far." },
          ],
        },
      ],
    },
  },

  // -------------------------------------------------------------------
  // MODULE 2 — ACCESS CHANNEL & IMAGERY PROFILE (v0.1)
  // -------------------------------------------------------------------
  module2: {
    baslik: "Module 2 — Access Channel & Imagery Profile (v0.1)",
    ustBaslik: "How You Imagine",
    giris:
      "Every actor has a favorite doorway into imagination. Some of us see a scene before anything else — the light, the faces, the room. Some hear it — a voice, a tone, the music underneath. Some feel it in the body — weight, movement, tension. This module finds your strongest doorways, so that every exercise we give you afterward speaks to you in your own language. There are no better or worse channels — only different ones.",

    part1: {
      baslik: "Part 1 — The Strength of Each Doorway",
      giris:
        "For each item, bring the experience to mind as vividly as you can — then rate how clear and alive it was for you.",
      olcek: {
        1: "No image at all",
        2: "Vague / faint",
        3: "Moderately clear",
        4: "Clear & lively",
        5: "As real as the real thing",
      },
      kanallar: [
        {
          ad: "Seeing (visual)",
          maddeler: [
            { no: 1, metin: "Picture the face of someone you know well. How clear is the image?" },
            { no: 2, metin: "Imagine the place where you grew up. See its colors, light, and spaces." },
            { no: 3, metin: "Picture a red apple on a white plate, then imagine a knife slicing it in half." },
          ],
        },
        {
          ad: "Hearing (auditory)",
          maddeler: [
            { no: 4, metin: "Hear the voice of someone close to you saying your name." },
            { no: 5, metin: "Bring to mind a piece of music you love. How fully do you hear it?" },
            { no: 6, metin: "Imagine the sound of rain starting softly, then growing into a downpour." },
          ],
        },
        {
          ad: "Feeling in the body (kinesthetic)",
          maddeler: [
            { no: 7, metin: "Imagine walking up a steep hill. Feel the effort in your legs and breath." },
            { no: 8, metin: "Imagine lifting something heavy, then something light. Feel the difference in your muscles." },
            { no: 9, metin: "Picture yourself dancing to a familiar song. Feel the movement through your body." },
          ],
        },
        {
          ad: "Touch (tactile)",
          maddeler: [
            { no: 10, metin: "Imagine dipping your hand into warm water, then into cold. Feel the change on your skin." },
            { no: 11, metin: "Imagine running your fingers over rough stone, then smooth silk." },
            { no: 12, metin: "Feel a light breeze on the back of your neck." },
          ],
        },
        {
          ad: "Feeling an emotion (emotional imagery)",
          maddeler: [
            { no: 13, metin: "Bring to mind a moment of pure delight. Let the feeling rise as you imagine it." },
            { no: 14, metin: "Imagine the tension of waiting for news that matters to you. Feel it arrive." },
            { no: 15, metin: "Recall the warmth of being welcomed by someone glad to see you." },
          ],
        },
        {
          ad: "One more (optional)",
          opsiyonel: true,
          maddeler: [
            { no: 16, metin: "Imagine biting into a fresh lemon — the smell and the sharp taste. Some people experience smell and taste very strongly; how strong is it for you?" },
          ],
        },
      ],
    },

    part2: {
      baslik: "Part 2 — Steering the Image",
      giris:
        "A vivid image is only useful if you can direct it — hold it still, change it, let it go when you choose. This part is about control, not vividness.",
      olcek: {
        1: "Not at all true of me",
        2: "A little true of me",
        3: "Somewhat true of me",
        4: "Mostly true of me",
        5: "Completely true of me",
      },
      maddeler: [
        { no: 17, metin: "When I picture something, I can hold the image steady for as long as I want." },
        { no: 18, metin: "I can change an image on purpose — turn a face from calm to angry, day into night." },
        { no: 19, metin: "I can move around inside an imagined scene, viewing it from different positions." },
        { no: 20, metin: "Once an image appears in my mind, it drifts or fades before I'm ready.", ters: true },
        { no: 21, metin: "When I no longer need an imagined scene, I can let it go cleanly." },
        { no: 22, metin: "I can build an imagined world detail by detail and keep it all in place at once." },
      ],
    },

    part3: {
      baslik: "Part 3 — Which Doorway Opens First",
      giris:
        "Your strongest channel isn't always the one that arrives first. For each situation, put the options in order — 1 for what comes to you first and most strongly, down to the last.",
      siralamaSorulari: [
        {
          no: 23,
          metin: "When you remember a happy day from your past, what comes to you first?",
          secenekler: [
            "Images — what you saw",
            "Sounds — what you heard",
            "Bodily feelings — movement, warmth, sensation",
            "Touch — textures, contact",
            "The emotion itself",
          ],
        },
        {
          no: 24,
          metin: "When you read a scene in a script for the first time, how does it come alive for you?",
          secenekler: [
            "I see the setting and the characters",
            "I hear the voices and how lines are said",
            "I feel it in my body — posture, movement, impulse",
            "I feel the emotional atmosphere",
          ],
        },
        {
          no: 25,
          metin: "When you imagine a character you'll play, what forms first?",
          secenekler: [
            "Their face and appearance",
            "Their voice and speech",
            "How they move and hold themselves",
            "What they feel inside",
          ],
        },
      ],
    },

    part4: {
      baslik: "Part 4 — When Imagination Becomes Action",
      giris:
        "For an actor, the real test of imagination is whether it moves you — whether an imagined thing can make you react as if it were real.",
      olcek: {
        1: "Not at all true of me",
        2: "A little true of me",
        3: "Somewhat true of me",
        4: "Mostly true of me",
        5: "Completely true of me",
      },
      maddeler: [
        { no: 26, metin: "When I imagine something vividly, my body responds as if it were real — I flinch, tense, or soften." },
        { no: 27, metin: "I can rehearse a whole scene in my head, seeing and feeling it play out from start to finish." },
        { no: 28, metin: "An imagined circumstance can move me to real feeling, even alone in a room." },
        { no: 29, metin: "No matter how hard I imagine something, it stays “just in my head” and doesn't affect me.", ters: true },
      ],
    },
  },

  // -------------------------------------------------------------------
  // MODULE 3 — EMOTIONAL PROFILE (v0.1)
  // -------------------------------------------------------------------
  module3: {
    baslik: "Module 3 — Emotional Profile (v0.1)",
    ustBaslik: "Your Emotional Profile",
    giris:
      "This part looks at emotion — the heart of your craft. But notice what it asks and what it doesn't. Most of it is about your ability to reach, shape, and release emotions for a role — not about your private feelings. An actor should never have to open their own wounds to build a character. The emotions you work with on stage are the character's, designed and owned by the character. So these questions ask how easily you can travel to an emotional place for your work, how vividly you can live there, how well you can steer it, and how cleanly you can come back.\n\nA later, optional section asks — gently — how comfortable you are with different emotions in your own life. That one is for your self-knowledge only, and you can skip it. As before: there are no right answers, and every actor's profile has stronger and softer areas.",

    part1: {
      baslik: "Part 1 — Emotional Access for the Role",
      giris: "For each statement, choose how true it is of you as an actor today.",
      olcek: {
        1: "Not at all true of me",
        2: "A little true of me",
        3: "Somewhat true of me",
        4: "Mostly true of me",
        5: "Completely true of me",
      },
      adminNote:
        "[Team note — not shown: seven affective systems, four facets each (reach · vividness · control · clean exit). Systems adapted from Panksepp's affective-neuroscience framework; items original, not derived from the ANPS. In administration, items appear mixed, without system headings.]",
      sistemler: [
        {
          ad: "Play",
          maddeler: [
            { no: 1, faset: "reach", metin: "When a scene calls for lightness and fun, I can find a playful state quickly." },
            { no: 2, faset: "vividness", metin: "The playfulness I create for a character feels alive, not forced." },
            { no: 3, faset: "control", metin: "I can turn a character's playfulness up or down as the scene needs." },
            { no: 4, faset: "cleanExit", metin: "When the scene ends, the character's giddiness settles and I return to my own rhythm." },
          ],
        },
        {
          ad: "Seeking (curiosity, wanting, drive)",
          maddeler: [
            { no: 5, faset: "reach", metin: "I can create a state of hungry curiosity for a character — wanting, searching, chasing." },
            { no: 6, faset: "vividness", metin: "When a character is driven by desire for something, I can make that drive feel real in my body." },
            { no: 7, faset: "control", metin: "I can hold a character's wanting at a simmer or push it toward obsession, as directed." },
            { no: 8, faset: "cleanExit", metin: "After playing a character consumed by wanting, the restlessness leaves me when I step out." },
          ],
        },
        {
          ad: "Care (tenderness, nurturance)",
          maddeler: [
            { no: 9, faset: "reach", metin: "I can reach believable tenderness for a scene partner my character loves." },
            { no: 10, faset: "vividness", metin: "The warmth I build for a character reads clearly to those watching." },
            { no: 11, faset: "control", metin: "I can shift a character's tenderness between soft and fierce as the scene needs." },
            { no: 12, faset: "cleanExit", metin: "The affection belongs to the character — I don't confuse it with my own feelings toward my scene partner." },
          ],
        },
        {
          ad: "Desire (erotic longing, attraction)",
          maddeler: [
            { no: 13, faset: "reach", metin: "I can create a state of erotic longing or attraction for a character, aimed where the scene requires." },
            { no: 14, faset: "vividness", metin: "The desire I build for a character feels present and alive, not merely indicated." },
            { no: 15, faset: "control", metin: "I can keep a character's desire at a slow burn or let it flare, as the scene needs." },
            { no: 16, faset: "cleanExit", metin: "When the scene ends, the character's desire settles — it doesn't carry over into how I feel toward my scene partner." },
          ],
        },
        {
          ad: "Fear",
          maddeler: [
            { no: 17, faset: "reach", metin: "I can build a believable state of fear for a character without frightening myself." },
            { no: 18, faset: "vividness", metin: "When a character is afraid, my body shows it — breath, posture, eyes." },
            { no: 19, faset: "control", metin: "I can play fear at exactly the level the scene needs, then bring it down on cue." },
            { no: 20, faset: "cleanExit", metin: "Fear I performed doesn't follow me home." },
          ],
        },
        {
          ad: "Anger",
          maddeler: [
            { no: 21, faset: "reach", metin: "I can reach a character's rage on cue, without needing to be personally provoked." },
            { no: 22, faset: "vividness", metin: "My anger as a character is precise — the size and shape the scene asks for." },
            { no: 23, faset: "control", metin: "I can repeat an angry outburst at the same intensity across takes or performances." },
            { no: 24, faset: "cleanExit", metin: "When the scene ends, the character's anger drains away quickly." },
          ],
        },
        {
          ad: "Sadness (grief, loss)",
          maddeler: [
            { no: 25, faset: "reach", metin: "I can create a character's grief from the character's story, not from my own losses." },
            { no: 26, faset: "vividness", metin: "I can reach tears, or the edge of tears, when a scene calls for them." },
            { no: 27, faset: "control", metin: "I can play sorrow quietly contained or breaking open, depending on the direction." },
            { no: 28, faset: "cleanExit", metin: "A character's sadness lifts from me once I've stepped out of the role." },
          ],
        },
      ],
    },

    part2: {
      baslik: "Part 2 — Knowing Your Own Emotions",
      giris:
        "This short part is about a skill every actor draws on: how well you notice, name, and steady your own feelings. This is an ability that can be trained — wherever it's lower, we'll have exercises for you.",
      olcek: {
        1: "Not at all true of me",
        2: "A little true of me",
        3: "Somewhat true of me",
        4: "Mostly true of me",
        5: "Completely true of me",
      },
      maddeler: [
        { no: 29, metin: "I notice what I'm feeling while I'm feeling it." },
        { no: 30, metin: "I can usually name my feelings with a precise word — not just “good” or “bad.”" },
        { no: 31, metin: "I can tell the difference between neighboring feelings — irritation and disappointment, excitement and anxiety." },
        { no: 32, metin: "I can tell where a feeling sits in my body." },
        { no: 33, metin: "When a difficult feeling shows up before a performance, I know ways to steady myself." },
        { no: 34, metin: "I treat my emotions as information, even the uncomfortable ones." },
        { no: 35, metin: "When a strong feeling arrives, I can't tell what it is until much later.", ters: true },
        { no: 36, metin: "After an emotionally heavy day, I know what helps me come back to balance." },
      ],
    },

    part3: {
      baslik: "Part 3 — Feeling Emotion in the Body",
      giris:
        "Emotions live in the body before they have names. This part asks how aware you are of that inner landscape — the doorway to embodied performance.",
      olcek: {
        1: "Not at all true of me",
        2: "A little true of me",
        3: "Somewhat true of me",
        4: "Mostly true of me",
        5: "Completely true of me",
      },
      maddeler: [
        { no: 37, metin: "I sense emotions physically before I can name them." },
        { no: 38, metin: "I can feel where in my body an emotion lives — chest, throat, stomach, hands." },
        { no: 39, metin: "When my feeling changes, I notice the change in my body." },
        { no: 40, metin: "I have little sense of what's happening in my body when I feel something.", ters: true },
        { no: 41, metin: "My body sometimes shows feelings I didn't intend to reveal.", ters: true },
        { no: 42, metin: "I can use a physical sensation as a doorway into a character's emotion." },
      ],
    },

    part4: {
      baslik: "Part 4 — Your Comfort With Emotions (optional)",
      opsiyonel: true,
      giris:
        "This part is optional and for your own self-knowledge — it is not scored into your performance profile. Knowing which emotions you're at ease with, and which you tend to avoid, helps you see clearly what belongs to you and what belongs to the character. There are no better or worse answers here.\n\nFor each emotion, give two ratings: how comfortable you are feeling it in your own life, and how comfortable you are letting others see it in you.",
      olcekBaslik: "Scale for both columns:",
      olcek: {
        1: "Very uncomfortable",
        2: "Somewhat uncomfortable",
        3: "Neutral",
        4: "Fairly comfortable",
        5: "Very comfortable",
      },
      sutunlar: ["Comfort feeling it", "Comfort showing it"],
      duygular: [
        "Joy",
        "Love / tenderness",
        "Excitement",
        "Pride / triumph",
        "Amusement",
        "Awe",
        "Desire / craving",
        "Sadness / grief",
        "Fear",
        "Anger / rage",
        "Disgust",
        "Contempt",
        "Shame",
        "Guilt",
        "Envy / jealousy",
        "Neediness / helplessness",
        "Anxiety",
        "Boredom",
        "Confusion",
        "Calm / relief",
      ],
      adminNote:
        "[Team note — not shown: emotion list adapted from Cowen & Keltner (2017), credited; selection weighted toward the socially difficult emotions actors tend to avoid. The gap between 'feeling' and 'showing' columns is itself diagnostic. Low-comfort emotions become the actor's personalized deck in the separate emotion-exploration teaching tool.]",
    },

    teamNotes: [
      "Part 1 — Emotional Access: 7 systems × 4 facets = 28 items (reach · vividness · control · clean exit). Systems: Play, Seeking, Care, Desire, Fear, Anger, Sadness — all seven Panksepp primary systems, LUST included as 'Desire'. Items original, not derived from the ANPS.",
      "Part 2 — Meta-Emotion ability: 8 items (attention, clarity, repair). Teachable layer.",
      "Part 3 — Bodily Emotional Awareness / interoception: 6 items. Benchmark MAIA (benchmark only).",
      "Part 4 — Emotion Comfort Inventory: 20 emotions × 2 facets, optional, unscored in the performance profile.",
      "Expressive control (show/hide/modulate on cue) lives in Module 1, Domain 5 — not duplicated here. Personal wiring ('your own weather') lives in Entry & Exit, not here.",
      "Derived index: the clean-exit facet across the seven systems sums into an Exit Capacity index; low Exit Capacity paired with high Reach flags role-hangover risk and routes to Entry & Exit.",
      "The Desire system carries the intimacy-work boundary: its clean-exit/ownership item explicitly separates the character's desire from feelings toward the scene partner. Handle Part 1 Desire items and Part 4 with the standard felt-experience check-in.",
      "Sources: Panksepp (1998), seven systems, credited; meta-mood model (Salovey/Mayer et al., 1995) and MAIA (Mehling et al., 2012) as benchmarks; Cowen & Keltner (2017) for the emotion list. Gym content from Nummenmaa et al. (2014) body maps and Ekman/Levenson signals; never from The Emotion Thesaurus.",
    ],
  },

  // -------------------------------------------------------------------
  // MODULE 4 — FLOW PRONENESS
  // -------------------------------------------------------------------
  module4: {
    baslik: "Module 4 — Flow Proneness",
    ustBaslik: "Flow",
    giris:
      "Every actor knows the feeling: the scene takes over, the watching self goes quiet, time bends, and you're simply living it. That state has a name — flow — and it can be understood, measured, and cultivated. This module looks at how readily flow comes to you, and it points us toward the conditions that open the door for you specifically.\n\nThere are two forms. Form A asks how flow tends to happen for you in general — take it once. Form B asks about one particular performance you've just finished — we use it again and again as we work, to see how your experience shifts.",

    formA: {
      baslik: "Form A — How Flow Tends to Come to You (baseline)",
      giris:
        "Think about acting in general — rehearsals and performances over time. For each statement, choose how true it is of you.",
      olcek: {
        1: "Not at all true of me",
        2: "A little true of me",
        3: "Somewhat true of me",
        4: "Mostly true of me",
        5: "Completely true of me",
      },
      adminNote:
        "[Team note — not shown: dispositional flow across the nine Csíkszentmihályi/Jackson dimensions, acting-specific. Given ONCE as baseline. Dimensions marked [C] are antecedent conditions the method targets; [E] are the experience of flow. Administered mixed.]",
      boyutlar: [
        {
          ad: "Challenge–skill balance",
          etiket: "C",
          maddeler: [
            { no: 1, metin: "I take on roles that stretch me without overwhelming me." },
            { no: 2, metin: "My abilities feel well matched to what my roles demand." },
            { no: 3, metin: "I'm either bored by roles that ask too little or panicked by roles that ask too much.", ters: true },
          ],
        },
        {
          ad: "Clear goals",
          etiket: "C",
          maddeler: [
            { no: 4, metin: "When I step into a scene, I know what I'm reaching for moment to moment." },
            { no: 5, metin: "I go into scenes unsure of what I'm actually trying to do.", ters: true },
          ],
        },
        {
          ad: "Unambiguous feedback",
          etiket: "C",
          maddeler: [
            { no: 6, metin: "During a scene, I can feel whether it's landing or not." },
            { no: 7, metin: "I read my scene partner clearly enough to know if we're connecting." },
          ],
        },
        {
          ad: "Concentration on the task",
          etiket: "E",
          maddeler: [
            { no: 8, metin: "When I'm acting well, my attention is completely on the scene." },
            { no: 9, metin: "Distracting thoughts pull me away while I'm performing.", ters: true },
          ],
        },
        {
          ad: "Action–awareness merging",
          etiket: "E",
          maddeler: [
            { no: 10, metin: "At my best, acting feels effortless — I'm not thinking about doing it, I'm just doing it." },
            { no: 11, metin: "My best moments on stage feel automatic, as if the doing and the awareness are one." },
          ],
        },
        {
          ad: "Sense of control",
          etiket: "E",
          maddeler: [
            { no: 12, metin: "When I'm in the scene, I feel in command of what I'm doing, even as it flows." },
            { no: 13, metin: "I trust myself to handle whatever the scene brings." },
          ],
        },
        {
          ad: "Loss of self-consciousness (with an audience)",
          etiket: "E",
          maddeler: [
            { no: 14, metin: "With an audience or camera on me, I stop worrying about how I'm being judged." },
            { no: 15, metin: "I become so absorbed that I forget to be self-aware in front of others." },
            { no: 16, metin: "I stay painfully aware of being watched while I perform.", ters: true },
          ],
        },
        {
          ad: "Transformation of time",
          etiket: "E",
          maddeler: [
            { no: 17, metin: "When a scene is going well, time seems to speed up or disappear." },
            { no: 18, metin: "A long scene can feel like it passed in a moment." },
          ],
        },
        {
          ad: "Autotelic experience",
          etiket: "E",
          maddeler: [
            { no: 19, metin: "Acting is deeply rewarding in itself, apart from any result it brings." },
            { no: 20, metin: "The moments of losing myself in a role are among the best I know." },
          ],
        },
      ],
    },

    formB: {
      baslik: "Form B — This Performance (repeatable)",
      giris:
        "Fill this in as soon as possible after a specific scene, monologue, or performance, while it's fresh. Answer about THIS time only — not acting in general. We return to this form throughout our work together.",
      onSorular: [
        { metin: "Which performance are you rating?", tip: "metin" },
        { metin: "Date:", tip: "tarih" },
      ],
      yonerge: "For each statement, how true was it of THIS performance?",
      olcek: {
        1: "Not at all",
        2: "A little",
        3: "Somewhat",
        4: "Mostly",
        5: "Completely",
      },
      maddeler: [
        { no: "B1", metin: "The challenge of this scene matched my skills." },
        { no: "B2", metin: "I knew what I was reaching for, moment to moment." },
        { no: "B3", metin: "I could feel whether it was landing as I went." },
        { no: "B4", metin: "My attention was completely on the scene." },
        { no: "B5", metin: "It felt effortless — I was just doing it, not thinking about doing it." },
        { no: "B6", metin: "I felt in command of what I was doing." },
        { no: "B7", metin: "I wasn't worried about being watched or judged." },
        { no: "B8", metin: "Time sped up, slowed, or disappeared." },
        { no: "B9", metin: "Doing it was rewarding in itself." },
        { no: "B10", metin: "Afterward, I wanted to go straight back in and do it again." },
      ],
      acikUclu: "One line — what helped or blocked you this time?",
    },

    teamNotes: [
      "Form A — Dispositional flow, 20 items across the nine dimensions, acting-specific, given ONCE as baseline. Form B — State flow, 10 items, rated immediately after a specific performance, REPEATABLE (the primary case-study measure).",
      "Dimensions tagged [C] (challenge–skill, clear goals, feedback) are the CONDITIONS the method engineers; [E] are the EXPERIENCE. Compute a Conditions subtotal and an Experience subtotal each administration; report a nine-dimension profile, never a single flow score.",
      "Reverse items (Form A: 'bored or panicked', 'unsure', 'distracting thoughts', 'painfully aware') recode 6 − raw.",
      "Hypothesis (Filiz): the method eases entry into flow. Evidence design: Form A once + Form B before/across the intervention; the method's claim is that it raises [C] (clear per-beat goals via Solid Facts, challenge–skill matching via graded prep, cleaner feedback via partner attention) and [E] follows. Show [C] rising with/before [E].",
      "Second data source: observer flow-rating from the Module 8 video (FACS-informed — moderate arousal, absorption, reduced self-monitoring are observable), answering the introspection-paradox objection. Add a contrast scene (method-worked vs. familiar-technique) to separate the method from general practice effects.",
      "Build to DISCONFIRM: if Form B doesn't rise, or rises equally in the contrast scene, that must be visible. Name the confounds (repetition/comfort; introspection paradox; contested challenge–skill ratio).",
      "Sources: Csíkszentmihályi (1990); Jackson & Marsh (1996) dispositional/state flow — framework and benchmark only, items original. ESM (Csíkszentmihályi & Larson, 1987) noted as ecological gold standard, not used in-app.",
    ],
  },
};

export default batarya;
