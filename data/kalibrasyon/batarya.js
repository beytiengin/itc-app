// =====================================================================
// INSIDE THE CHARACTER (ITC) — Actor Assessment Battery
// FULL Battery · Intake + Modules 1–9 · v0.5
// Instrument author: Filiz Kaya Ataklı
// Working drafts under evaluation — awaiting whole-battery review
// (overlap map + tiering/trim pass) and Filiz's red pen on Type Lens.
//
// KURAL: İçerik verbatim'dir — kaynak: CharacterDesign_FULL_Battery_v0_5.docx.
// Metinlerde HİÇBİR değişiklik yapılmaz (kaynaktaki yazım hataları dahil,
// örn. Module Map girişindeki "sererate"); düzeltme yalnız Filiz'den
// gelen yeni sürümle olur.
// MARKA NORMALİZASYONU (Karar 64 §10 — Beyti kalıcı talimatı): kaynak
// Filiz'in Claude'unda "The Character Design" markasıyla geçer; ekosistem
// markası olarak "Inside The Character (ITC)" ile değiştirildi (meta.baslik
// + consent "What this is"). Değerlendirme içeriği AYNEN korundu.
// KURAL: `teamNotes`, `adminNote`, `scoringNotes`, `kaynakKapsami`,
//        `about`, `kapsamNotu`, `kapanisNotu`, `whyThisOrder`,
//        `retakeCadence`, `teamNoteBeyti` alanları KATILIMCIYA ASLA
//        gösterilmez.
// KURAL: Likert maddeleri karışık sırada, alan/faset başlıkları OLMADAN
//        sunulur. Type Lens'te A/B tarafları madde başına randomize edilir.
// KURAL: `ters: true` maddeler puanlamada 6 − ham olarak kodlanır.
// KURAL: `slug` alanları SABİTTİR ve görüntü sırasından (`sira`) ayrıktır —
//        yeniden sıralama asla veri migration'ı gerektirmez (Filiz'in
//        Module Map team note'u).
// NOT: Module 8'in video protokolü, gözlemci gridi ve tam puanlaması
//        ayrı "Module 8 v0.2" belgesinde yaşar — o belge source of truth.
// DOĞRULAMA İMZASI: ITC-BATARYA-V05-FULL-20260707
// =====================================================================

export const batarya = {
  meta: {
    baslik: "INSIDE THE CHARACTER",
    altBaslik: "Actor Assessment Battery — FULL Battery",
    kapsam: "Intake + Modules 1–9",
    surum: "v0.5",
    motto: "Protect the actor, design the character.",
    yazar: "Instrument author: Filiz Kaya Ataklı",
    durum: "Working drafts under evaluation",
    dil: "en",
  },

  // -------------------------------------------------------------------
  // THE MODULE MAP
  // -------------------------------------------------------------------
  moduleMap: {
    giris:
      "The Actor battery is built as separable modules sharing one theoretical spine. The core path is taken by every actor; all the other modules are optional and opt-in, separately framed. Assessment and teaching are woven. There will be a report for the core module: both for the actor answering and the actors registered coach. All the other modules will have sererate reports in which — each report flows into targeted learning for lower-scoring areas.",
    whyThisOrder:
      "Why this order. The Type Lens opens the battery deliberately: it is the most playful instrument — vivid acting situations, forced choice, quiz energy with a real payoff — so it is the actor's first taste of the app, and the type hypothesis it produces arrives early enough to shape how every later score is read. The Acting Performance Scale follows as the flagship and produces the routing map into the optional modules; the Emotional Profile completes the core. The core is delivered in short sittings with save-and-resume, a micro-reveal after every module, and the full report as the prize at the end.",
    corePath: [
      {
        slug: "intake",
        ad: "Intake — Getting to Know You",
        aciklama:
          "background, training, experience, aspirations, in-their-own-words.",
        durum: "drafted, v0.2",
      },
      {
        slug: "type_lens",
        ad: "Module 1 — Type Lens",
        aciklama:
          "44 forced-choice acting situations across four axes → a four-letter type HYPOTHESIS plus nearest neighbour, aimed at the instinctive first pull. Constructs translated from Filiz's own Jung-based tendency inventory; the MBTI instrument is never administered or reproduced. The sixteen type reports belong to the report-building phase.",
        durum: "drafted, v0.1",
      },
      {
        slug: "aps",
        ad: "Module 2 — Acting Performance Scale",
        aciklama:
          "9 domains, 50 items: script analysis & character construction, concentration & presence, body & movement, voice & speech, emotional expression, imagination, discipline & motivation, collaboration, craft confidence.",
        durum: "drafted, v0.2",
      },
      {
        slug: "emotional",
        ad: "Module 3 — Emotional Profile",
        aciklama:
          "expressive access across the seven affective systems, meta-emotion ability, bodily emotional awareness, optional emotion-comfort inventory.",
        durum: "drafted, v0.1",
      },
    ],
    optional: [
      {
        slug: "access",
        ad: "Module 4 — Access Channel & Imagery Profile",
        aciklama:
          "vividness across five channels, controllability, spontaneous channel (ranking), imagery-in-action. Replaces VAK. Routes every exercise in the battery.",
        durum: "drafted, v0.1",
      },
      {
        slug: "flow",
        ad: "Module 5 — Flow Proneness",
        aciklama:
          "the nine-dimension flow framework in acting situations; dispositional baseline (Form A) + repeatable state form (Form B) for case studies.",
        durum: "drafted, v0.1",
      },
      {
        slug: "regulation",
        ad: "Module 6 — Regulation & Performance Strategies",
        aciklama:
          "two 'find your optimum' spines (arousal zone + optimal tone), self-talk, pre-performance routine, refocusing after error.",
        durum: "drafted, v0.1",
      },
      {
        slug: "mindfulness",
        ad: "Module 7 — Performance Mindfulness",
        aciklama:
          "present-moment awareness, nonjudgment, and refocusing during performance.",
        durum: "drafted, v0.1",
      },
      {
        slug: "body",
        ad: "Module 8 — The Actor's Body",
        aciklama:
          "habitual tension, release capacity, neutrality, malleability. Two-source: self-report (body map) + video upload and facilitator observation (body & face). Teaching from osteopathy, Brennan, sensorimotor psychotherapy.",
        durum: "drafted, v0.2",
      },
      {
        slug: "entry_exit",
        ad: "Module 9 — Entry & Exit",
        aciklama:
          "role-boundary style, recovery practice, recovery channels, working life & emotional labor, your own weather. BASIC Ph-informed recovery personalization (credited to Lahad). Holds the actor's personal-wiring material ('your own weather'). Motto: protect the actor, design the character.",
        durum: "drafted, v0.1",
      },
    ],
    retakeCadence:
      "Retake cadence. Taken once: Intake background, Type Lens (type is a stable-preference hypothesis; re-administration invites test-retest instability and costs credibility — afterward it is revisited only reflectively). Slow repeat (per season, or pre/post a development pathway, with a minimum interval): Acting Performance Scale, Emotional Profile, and later Modules 6–8 — the pre/post APS profile is the method's headline evidence figure, and pre/post self-report claims pair with observer-rated gains from the Module 8 video. Fast repeat: Module 5 Form B after every performance (designed repeatable); Module 9 check-ins, opt-in. Retaking is also the engagement loop: the actor's trajectory graph is the research design and the product feature in one.",
    teamNoteBeyti:
      "[Team note for Beyti — database keys: keep the module identifiers in the database as STABLE SLUGS decoupled from display order (e.g. aps, type_lens, access, emotional, flow_formA / flow_formB, regulation, mindfulness, body, entry_exit). The existing m2_access / m3_emotional / m4_formA/B keys should be MAPPED to the new display order in the app layer, not renamed in the data — so this reordering, and any future one, never forces a data migration.]",
  },

  // -------------------------------------------------------------------
  // INTAKE — GETTING TO KNOW YOU & CONSENT (v0.2)
  // -------------------------------------------------------------------
  intake: {
    slug: "intake",
    surum: "v0.2",
    baslik: "Intake — Getting to Know You & Consent (v0.2)",
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
  },

  // -------------------------------------------------------------------
  // MODULLER — slug sabittir, `sira` görüntü sırasıdır (v0.5)
  // -------------------------------------------------------------------
  moduller: [
    // -----------------------------------------------------------------
    // MODULE 1 — TYPE LENS (v0.1) · slug: type_lens
    // -----------------------------------------------------------------
    {
      slug: "type_lens",
      sira: 1,
      cekirdek: true,
      surum: "v0.1",
      baslik: "Module 1 — Type Lens (v0.1)",
      about: {
        whatItLooksFor:
          "What it looks for. The actor's type-IN-ACTING — the instinctive working preferences that shape how this particular actor takes in a script, builds a character, makes choices, and runs a working life — obtained the same way the affective profile is obtained in Module 3: through an original instrument, not by administering the MBTI. Forty-four forced-choice acting situations across four axes yield a four-letter type HYPOTHESIS, always offered with its nearest neighbour so the actor can try both on. It sits early in the battery so the hypothesis can shape how everything downstream is approached and routed. A hypothesis to explore, never a box to live in.",
        evidenceBase:
          "Evidence base & provenance. The constructs are the four Jungian preference axes, translated from Filiz's own long-used tendency inventory: every item is a construct-level translation of one or more rows of that inventory — faithful to what each row probes, with all wording written fresh in acting situations. No published preference table, MBTI item, or Levesque checklist wording is reproduced. Levesque's Breakthrough Creativity remains the credited creative lens at the report stage (hypothesis-generating only). Jungian preference theory is credited; the instrument is original and owned by Filiz. The sixteen type REPORTS (talents → obstacles → remedies → technique routing → tailored character-design question sets) are NOT part of the instrument — they belong to the report-building phase, where Filiz's existing sample reports become the template, rewritten in her voice with population percentages dropped.",
        instinctRule:
          "The instinct rule. Every item aims at the actor's first pull, not their trained technique. Training teaches all of us to do both sides of every pair; this module asks which side the body reaches for before the training arrives.",
      },
      ustBaslik: "How You Naturally Work",
      giris:
        "Every actor has instincts about how to work — where ideas come alive, what a script gives you first, how choices get made, how you like your working days to run. None of these instincts is better than another; each carries its own creative talents and its own blind spots. Knowing yours means you can work with your grain instead of against it.\n\nBelow you'll find pairs of ways of working. For each one, choose the side that is more true of you — not the one you were trained into, not the one you wish were true, but your honest first pull. If both feel true (they often will — that's normal), pick the one that is true more often, or came first in your life as an actor.",
      vurgu:
        "Answer with your instinct, not your training. There are no better answers, only yours.",
      adminNote:
        "[Team note — not shown to participants: in administration the 44 items appear in fully mixed order, axis headings hidden, and the A/B sides are randomized per item so no response pattern maps to a letter column. The axis grouping and fixed A/B keying below (A = E·S·T·J, B = I·N·F·P) are for the team and the scoring layer only.]",
      eksenler: [
        {
          ad: "Axis 1 — Where Your Energy Lives (E / I)",
          harfler: { a: "E", b: "I" },
          maddeler: [
            {
              no: 1,
              metin: "After a long rehearsal day, what refills you?",
              a: "Staying on — dinner with the cast, talking the day through.",
              b: "Slipping away — the quiet walk home, letting it all settle inside.",
            },
            {
              no: 2,
              metin: "A character idea is forming. Where does it grow best?",
              a: "Out loud — improvising with a partner, talking it into shape in the room.",
              b: "Alone first — walking with it, writing it, letting it ripen before anyone sees it.",
            },
            {
              no: 3,
              metin:
                "The director says: try something, right now, no preparation. Your first inner move?",
              a: "I'm already on my feet — I find it by doing.",
              b: "I take one breath and let a choice form before I move.",
            },
            {
              no: 4,
              metin: "Your notes on a character become real when...",
              a: "you say them to someone.",
              b: "you write them down.",
            },
            {
              no: 5,
              metin: "In a rehearsal break, you're most likely...",
              a: "in the middle of the room, in the conversation.",
              b: "at the edge with a tea, watching, half inside your role.",
            },
            {
              no: 6,
              metin:
                "A first read-through with a new cast. What's most alive in you?",
              a: "The room — the people, the reactions, the event of it.",
              b: "The undercurrent — your own responses, the character already forming behind your eyes.",
            },
            {
              no: 7,
              metin: "You come to understand a character best...",
              a: "by trying them on people — playing scenes, getting reactions.",
              b: "by living with them privately — imagining, thinking, feeling them from inside.",
            },
            {
              no: 8,
              metin: "Your interests as an actor run...",
              a: "wide — many styles, many rooms, many things at once.",
              b: "deep — a few obsessions you keep returning to.",
            },
            {
              no: 9,
              metin: "When you talk about your work, you tend to...",
              a: "think out loud — the idea forms as you speak.",
              b: "speak when it's formed — you offer it once it's ready.",
            },
            {
              no: 10,
              metin: "The working conditions where you thrive:",
              a: "a lively set — people around, things happening, the buzz feeds you.",
              b: "quiet and protected — few interruptions, space to concentrate.",
            },
            {
              no: 11,
              metin: "Whose standard do you feel first?",
              a: "The room's — director, audience, partners; you calibrate to them.",
              b: "Your own — an inner bar the room can't see.",
            },
          ],
          kaynakKapsami:
            "Source coverage, Axis 1: translates the inventory rows on energy source, outward/inward attention, external/internal idea development, breadth/depth of interests, interaction vs concentration, public/private, talking/writing, action/reflection, plunge-in vs pause, volunteering vs providing information, others' standards vs own, and the recharge row. Folded: 'external sharing / internal interpretation' (items 6–7), 'interest in external events / internal reactions' (item 6). Dropped, restorable: 'clarify expectations / for understanding'.",
        },
        {
          ad: "Axis 2 — How a Script Speaks to You First (S / N)",
          harfler: { a: "S", b: "N" },
          maddeler: [
            {
              no: 12,
              metin: "First reading of a script. What do you trust first?",
              a: "What's on the page — the facts, the lines, what actually happens.",
              b: "What's between the lines — patterns, echoes, what it could become.",
            },
            {
              no: 13,
              metin: "Building a character's past, you start from...",
              a: "concrete details — where they lived, what they wore, how they earned their money.",
              b: "the through-line — what shaped them, what they're moving toward.",
            },
            {
              no: 14,
              metin: "From a director, you'd rather receive...",
              a: "clear, specific direction — the blocking, the beats, the target.",
              b: "an image or a why — and room to find your own way there.",
            },
            {
              no: 15,
              metin: "Your imagination serves up...",
              a: "exact pictures — colors, textures, the smell of the room.",
              b: "strange connections — metaphors, leaps, images that surprise you.",
            },
            {
              no: 16,
              metin: "Your natural questions in table work sound like...",
              a: "“What happens here? How does she do it?”",
              b: "“Why this? What if we turned it inside out?”",
            },
            {
              no: 17,
              metin: "A role becomes believable for you through...",
              a: "research and observation — real people, real places, real detail.",
              b: "intuition — a knowing about this person you can't fully explain.",
            },
            {
              no: 18,
              metin: "Building a scene, you prefer to...",
              a: "work step by step, in order, layer by layer.",
              b: "jump around — start wherever the heat is, connect it later.",
            },
            {
              no: 19,
              metin: "The part of the character's world you build most easily:",
              a: "the present one — this room, this day, these stakes.",
              b: "the possible one — futures, fears, the unseen forces at play.",
            },
            {
              no: 20,
              metin: "When a choice isn't grounded in the text, you...",
              a: "distrust it until the script supports it.",
              b: "follow it — the hunch usually knows something.",
            },
            {
              no: 21,
              metin: "Colleagues would call your work...",
              a: "precise, concrete, grounded.",
              b: "inventive, unexpected, a little airborne.",
            },
            {
              no: 22,
              metin: "What convinces you a preparation is done?",
              a: "The work — hours in, ground covered, every step taken.",
              b: "The spark — one flash of inspiration outweighs the hours.",
            },
          ],
          kaynakKapsami:
            "Source coverage, Axis 2: translates the rows on observing/measuring vs abstract understanding, facts vs patterns, defined instructions vs rationale-with-options, specific vs unusual imagery, What/How vs Why-not questions, tangible experience vs 'know without knowing', sequential vs rapid-random, here-and-now vs future-unseen, distrust of ungrounded guesses vs hunches, pragmatic vs abstract, hard work vs inspiration. Folded: 'realistic pictures vs visions' (items 1, 8), 'precise descriptions vs interpretations' (item 10). Partially carried, restorable: 'make things work vs understand', 'build on what's done vs do differently'.",
        },
        {
          ad: "Axis 3 — How You Decide Inside the Work (T / F)",
          harfler: { a: "T", b: "F" },
          maddeler: [
            {
              no: 23,
              metin: "A scene isn't working. Your first instinct:",
              a: "analyze it — find the broken beat, the illogical choice.",
              b: "feel into it — find where the connection between the people went cold.",
            },
            {
              no: 24,
              metin: "You judge a performance — yours or anyone's — first by...",
              a: "its construction — clarity, logic, consistency of choices.",
              b: "its heart — whether it moved you, whether it was true.",
            },
            {
              no: 25,
              metin: "Disagreeing with a director, you naturally argue from...",
              a: "the logic of the script — cause, consequence, consistency.",
              b: "the human truth — what this person would really feel and need.",
            },
            {
              no: 26,
              metin: "Notes you give a scene partner tend to be...",
              a: "concise and to the point.",
              b: "warm and cushioned — you mind how they land.",
            },
            {
              no: 27,
              metin: "Your character work begins with...",
              a: "their goals and strategies — what they want and how they plan to get it.",
              b: "their bonds — who they love, who hurt them, where they belong.",
            },
            {
              no: 28,
              metin: "Fairness on a production means...",
              a: "the same rules for everyone.",
              b: "each person getting what they, in particular, need.",
            },
            {
              no: 29,
              metin: "When the scene offers two readings, you pick by...",
              a: "which one is more consistent with everything else.",
              b: "which one carries more meaning for the people in it.",
            },
            {
              no: 30,
              metin: "Your instinctive question about a character:",
              a: "“Why does she do this?”",
              b: "“Who is she to the others?”",
            },
            {
              no: 31,
              metin: "Preparing for the problems of a run, you anticipate...",
              a: "obstacles — what could break, technically and structurally.",
              b: "people — who will struggle, clash, or need support.",
            },
            {
              no: 32,
              metin:
                "Torn between the correct choice and the kind one, your body leans...",
              a: "correct.",
              b: "kind.",
            },
            {
              no: 33,
              metin: "You sort the characters you've played by...",
              a: "types and mechanisms — categories of person.",
              b: "resonances — who they remind you of, what they connect to.",
            },
          ],
          kaynakKapsami:
            "Source coverage, Axis 3: translates the rows on logic vs context-and-values, objective principles vs personal values, justice vs mercy, analyze vs sympathize, weigh evidence vs determine worth, if-this-then-that vs impact on people, obstacles vs people's needs, classifications vs connections, concise vs expressive, goals-structure vs personal needs, strategies vs nurturing, Ask-Why vs Ask-Who, consistent vs harmonious, either-or vs both-and. Dropped, restorable: 'clarity in decision-making vs involvement in planning'.",
        },
        {
          ad: "Axis 4 — How You Run Your Working Life (J / P)",
          harfler: { a: "J", b: "P" },
          maddeler: [
            {
              no: 34,
              metin: "A shoot day goes off-plan. Your gut says...",
              a: "restore the plan — get it back on rails.",
              b: "ride it — the detour might be better than the map.",
            },
            {
              no: 35,
              metin: "Your preparation rhythm:",
              a: "early and steady — done before the deadline breathes on you.",
              b: "late and hot — pressure is your fuel, work and play mixed together.",
            },
            {
              no: 36,
              metin: "A choice about the character is made. You feel...",
              a: "relief — settled, off your mind, ready to build on it.",
              b: "an itch — you keep the door open in case something better walks in.",
            },
            {
              no: 37,
              metin: "What do you love more?",
              a: "The finished thing — opening night, the final cut.",
              b: "The making — rehearsal, the search, the process itself.",
            },
            {
              no: 38,
              metin: "Before an audition, you want...",
              a: "to know everything — the room, the panel, the running order.",
              b: "to stay loose — too much information cages you.",
            },
            {
              no: 39,
              metin: "Your working script is...",
              a: "marked, scheduled, systematized.",
              b: "alive and messy — notes everywhere, still moving.",
            },
            {
              no: 40,
              metin: "You build a character by...",
              a: "deciding the spine first, then gathering what fits it.",
              b: "gathering everything first, and letting the spine emerge.",
            },
            {
              no: 41,
              metin: "Surprises mid-performance are...",
              a: "threats to contain.",
              b: "gifts to use.",
            },
            {
              no: 42,
              metin: "When is a character “done” for you?",
              a: "By opening — locked, repeatable, reliable.",
              b: "Never — she keeps changing as long as you play her.",
            },
            {
              no: 43,
              metin: "Colleagues would call you...",
              a: "organized, decisive, dependable.",
              b: "flexible, curious, adaptable.",
            },
            {
              no: 44,
              metin: "Faced with rich research material, you...",
              a: "cut it down to what you need and close the folder.",
              b: "keep collecting — there's never quite enough.",
            },
          ],
          kaynakKapsami:
            "Source coverage, Axis 4: translates the rows on plan vs flow, knowing vs spontaneity, closure vs open options, limiting vs never-enough information, product vs process, schedule vs adapt, settled vs pending, decisive vs adaptable, hypothesis-first vs data-first, timetables vs explorations, few surprises vs ready-for-anything, self-disciplined vs new light, control vs respond, solutions vs open observation, ahead-of-time vs procrastination-and-play. Dropped, restorable: 'want to manage vs want to understand'.",
        },
      ],
      scoringNotes: [
        "Keying: A = E · S · T · J, B = I · N · F · P (fixed here for the team; sides randomized in administration). 11 items per axis — an odd count, so no axis can tie.",
        "Per axis: majority → the letter; record the MARGIN (e.g., E 8–3 vs E 6–5). Margins are the hypothesis-strength read, stored, never shown as scores.",
        "Output: the four-letter HYPOTHESIS plus its NEAREST NEIGHBOUR — the type made by flipping the narrowest-margin axis. The report presents both and invites the actor to try both on. A 6–5 axis is named honestly: “nearly even — you genuinely work both ways here.”",
        "Framing rule (hard): hypothesis, never classification. Report language is “this lens suggests..., see what fits” — never “you are.” Profiling is not classification.",
        "Routing: the hypothesis type keys the sixteen type reports (report-building phase; Filiz's six sample reports are the template, voice-rewritten, percentages dropped, the inside-out clarifying sentence in every F-type report).",
        "Label decision, parked for the report phase: Levesque's eight talent names are her labels — reports may discuss her framework with credit, but the app's own output labels should be original acting-flavored names, created with Filiz.",
        "Validation: forced-choice ipsative data — analyze per axis, never as one score; check axis internal consistency at pilot; test the 'instinct not training' instruction for comprehension in the first five pilot actors.",
        "Boundary check: no item asks about emotional wiring, wellbeing, or personal history — ways-of-working preferences only. Standard check-in cadence applies.",
      ],
    },
    // -----------------------------------------------------------------
    // MODULE 2 — ACTING PERFORMANCE SCALE (v0.2) · slug: aps
    // -----------------------------------------------------------------
    {
      slug: "aps",
      sira: 2,
      cekirdek: true,
      surum: "v0.2",
      baslik: "Module 2 — Acting Performance Scale (v0.2)",
      about: {
        whatItLooksFor:
          "What it looks for. A self-assessed profile of the actor's craft across nine domains — script analysis & character construction, concentration & presence, body & movement, voice & speech, emotional expression, imagination, professional discipline & motivation, collaboration, and craft confidence. It is the flagship instrument: the one built to full measurement depth, with dissertation and publication potential, and the anchor the rest of the battery routes from. The intake before it places every score in context (a score means different things at year one and year fifteen).",
        evidenceBase:
          "Evidence base. Grounded in the cognitive-science account of expert acting — Noice & Noice's two-stage model (deep analysis of a character's intentions, then 'active experiencing' in rehearsal and performance), which independently supports the method's Character engine: gap-filling by questioning is essentially systematized causal attribution. Craft Confidence is treated as self-efficacy (Bandura lineage) and scored separately from skill, because self-rated ability is confounded by confidence. All items are original and not derived from any copyrighted instrument. Publication note: no comparable acting-specific skills scale exists in the validated literature, which is what gives Module 1 genuine research value.",
      },
      giris:
        "Thank you — you now hold your type hypothesis. Next comes your own view of your skills as an actor. Below you will find 50 statements. For each one, choose the number that best describes how true it is of you — as you actually are today, not as you would like to be.\n\nRead each statement carefully. Answer honestly; there are no right or wrong answers, and every actor's profile has stronger and softer areas.",
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
      teamNotes: [
        "Nine domains, 50 items, Likert 1–5. Administered in mixed order without domain headings; items marked (R) recode 6 − raw. Each domain reports 0–100 as a profile; NO single composite in v0.2 — a total hides the profile shape, and the shape IS the product.",
        "Craft Confidence (Domain 9) reports SEPARATELY from the eight skill domains: it is self-efficacy (Bandura), not skill, and self-rated ability is confounded by confidence. The D9-vs-mean-of-D1–D8 gap is itself diagnostic: large positive gap flags overconfidence, large negative gap flags the impostor pattern — both are coaching conversations, framed without judgment.",
        "Intake context rule: the same score means different things at year one and year fifteen. Every domain score reports alongside the experience band from Intake; never rank raw scores across actors of different bands.",
        "Hand-offs: D2 concentration is intensity/duration of focus — the attitudinal quality of attention lives in Module 7. D5 expressive control (show/hide/modulate on cue) lives HERE, deliberately not duplicated in Module 3 (which measures access, not expression). D3 body expression is aspirational self-belief — the habitual truth lives in Module 8, and the D3-vs-M8-observed gap is reportable. D6 imagination asks whether imagination serves the work; Module 4 asks through which channel.",
        "Flagship status & validation path: the one instrument built to full measurement depth, with dissertation and publication potential. Sequence: internal consistency per domain → EFA/CFA on the nine-factor structure → convergent validity against experience band and observer ratings → test-retest. The publication claim rests on the absence of any comparable validated acting-specific skills scale.",
        "Case-study mechanism: the nine-domain profile is the battery's routing map — low domains route to their matching modules (D2→M7, D3→M8, D5→M3, D6→M4), and the profile-before/profile-after comparison is the method's headline evidence figure.",
        "Sources: Noice & Noice two-stage model of expert acting (deep analysis → active experiencing); Bandura self-efficacy lineage for D9. All items original, derived from no copyrighted instrument.",
      ],
    },
    // -----------------------------------------------------------------
    // MODULE 3 — EMOTIONAL PROFILE (v0.1) · slug: emotional
    // -----------------------------------------------------------------
    {
      slug: "emotional",
      sira: 3,
      cekirdek: true,
      surum: "v0.1",
      baslik: "Module 3 — Emotional Profile (v0.1)",
      about: {
        whatItLooksFor:
          "What it looks for. Expressive ACCESS to emotion for a role — not personal wiring — across the seven Panksepp affective systems on four facets each (reach, vividness, control, clean exit); plus meta-emotion ability (noticing, naming, steadying); bodily emotional awareness (interoception); and an unscored emotion-comfort inventory. This module is where the load-bearing boundary lives: it measures how easily the actor can travel to an emotional colour for the work and come back cleanly, never how much emotion they carry in life.",
        evidenceBase:
          "Evidence base. Panksepp's affective neuroscience supplies the seven primary systems (theory, free to use with credit); every item is original and asks an access-for-a-role question the ANPS never asks, so there is no overlap with that copyrighted instrument (which measures personal temperament — a different construct). The anti-mining spine's strongest empirical support is Konijn's task-emotion theory: acting style has no bearing on how closely actors' emotions match their characters', and what actors feel intensely on stage are task emotions — so mining doesn't even deliver what it promises. Meta-emotion is informed by the meta-mood model (Salovey, Mayer et al.); interoception benchmarks against the MAIA; the comfort-inventory emotion list is adapted from Cowen & Keltner (2017). Teaching content draws on Nummenmaa's bodily-maps-of-emotion and Ekman/Levenson visible-signal findings. Benchmarks only; items original.",
      },
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
        "Expressive control (show/hide/modulate on cue) lives in Module 2, Domain 5 — not duplicated here. Personal wiring ('your own weather') lives in Module 9, Entry & Exit — not here.",
        "Derived index: the clean-exit facet across the seven systems sums into an Exit Capacity index; low Exit Capacity paired with high Reach flags role-hangover risk and routes to Module 9, Entry & Exit.",
        "The Desire system carries the intimacy-work boundary: its clean-exit/ownership item explicitly separates the character's desire from feelings toward the scene partner. Handle Part 1 Desire items and Part 4 with the standard felt-experience check-in.",
        "Sources: Panksepp (1998), seven systems, credited; meta-mood model (Salovey/Mayer et al., 1995) and MAIA (Mehling et al., 2012) as benchmarks; Cowen & Keltner (2017) for the emotion list. Gym content from Nummenmaa et al. (2014) body maps and Ekman/Levenson signals; never from The Emotion Thesaurus.",
      ],
    },
    // -----------------------------------------------------------------
    // MODULE 4 — ACCESS CHANNEL & IMAGERY PROFILE (v0.1) · slug: access
    // -----------------------------------------------------------------
    {
      slug: "access",
      sira: 4,
      cekirdek: false,
      surum: "v0.1",
      baslik: "Module 4 — Access Channel & Imagery Profile (v0.1)",
      about: {
        whatItLooksFor:
          "What it looks for. The actor's strongest and most controllable imaginative doorways — visual, auditory, kinesthetic, tactile, and emotional imagery — plus how well images can be steered (controllability), which channel arrives first unbidden (spontaneous channel), and whether imagery actually drives behavior (imagery-in-action). The output routes every downstream exercise through the actor's own channel: 'reach the grief' becomes a picture, a sound, or a bodily weight depending on this profile.",
        evidenceBase:
          "Evidence base. Built on the multisensory imagery structure validated by the Plymouth Sensory Imagery Questionnaire (Andrade, May et al.), which established that the senses form distinct imagery factors rather than one general ability — so channels are scored separately, never averaged. The vividness-versus-controllability distinction comes from the movement-imagery/controllability tradition. The module deliberately retires VAK 'learning styles' (empirically contested) and reframes the construct as 'preferred access modality / imagery channel.' Honest caution built in: self-report cannot fully separate vivid imagery from the belief that one's imagery is vivid (the aphantasia blind spot), so items are anchored (perform-then-rate) and cross-checked behaviorally; validate against the Psi-Q. Benchmarks only; items original.",
      },
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
      teamNotes: [
        "Four parts, ~29 items. Part 1 — vividness across five channels (visual · auditory · kinesthetic · tactile · emotional imagery) + one optional open channel. Part 2 — controllability (steering the image). Part 3 — spontaneous channel ranking (which doorway opens first, unbidden; ipsative, reported as ordinal tags, never scored as ability). Part 4 — imagery-in-action (does imagining move the body), the behavioral check.",
        "Scoring rule from the evidence base: channels score SEPARATELY, never averaged — the PSI-Q multifactor finding is the design law. Vividness and controllability report as separate numbers: a vivid-but-uncontrollable imager and a faint-but-precise one need opposite exercises. Reverse items recode 6 − raw.",
        "Output routing is the module's whole purpose: every downstream exercise routes through the actor's strongest channel — 'reach the grief' becomes a picture, a sound, or a bodily weight per profile. Low vividness across ALL channels (aphantasia-adjacent) is NOT a deficit for acting: route to outside-in / physical-action pathways, and the report language must say so explicitly.",
        "Honest-caution architecture: imagery self-report has a known blind spot; Part 4 (imagery-in-action) is the behavioral anchor — flag Part 4-vs-Part 1 gaps in both directions (vivid imagery that never moves the body; faint imagery that nevertheless lands).",
        "VAK retirement: never report results as a 'learning style' — the construct is preferred access modality / imagery channel, and the team note in the About section is the citable rationale.",
        "Hand-offs: M2 Domain 6 asks whether imagination serves the work; this module asks through WHICH DOOR. The emotional-imagery channel borders Module 3 reach: M3 measures the affective systems themselves, M4 the imaginal doorway to them.",
        "Sources: Plymouth Sensory Imagery Questionnaire (Andrade, May et al.) multisensory structure — benchmark only; movement-imagery/controllability tradition; aphantasia literature (Zeman) for the low-vividness floor. Items original.",
      ],
    },
    // -----------------------------------------------------------------
    // MODULE 5 — FLOW PRONENESS (v0.1) · slug: flow
    // -----------------------------------------------------------------
    {
      slug: "flow",
      sira: 5,
      cekirdek: false,
      surum: "v0.1",
      baslik: "Module 5 — Flow Proneness (v0.1)",
      about: {
        whatItLooksFor:
          "What it looks for. How readily the actor enters flow — the state where the scene takes over and the watching self goes quiet. Form A is a dispositional baseline across the nine flow dimensions (taken once); Form B is a repeatable state measure taken immediately after a specific performance (the primary case-study instrument). Dimensions are tagged as either conditions/antecedents [C] or the experience of flow [E], so the module can show not just whether flow rose but why.",
        evidenceBase:
          "Evidence base. Csíkszentmihályi's flow model and Jackson & Marsh's dispositional/state operationalization provide the framework and the nine dimensions — used as benchmark only, items original. The [C]/[E] split is what turns Filiz's hypothesis (the method eases entry into flow) into a testable mechanism claim: the method engineers the antecedents — clear per-beat goals, challenge–skill matching, cleaner feedback — and flow follows. This is the battery's primary case-study outcome. Honest cautions are built into the team notes: flow includes reduced self-awareness, so self-report is reconstruction (mitigate with immediate timing and an observer/video rating); the challenge–skill balance claim is contested; and the instrument is deliberately built to be able to DISCONFIRM the hypothesis. Applied precedent for flow/optimal-state work in performing artists exists in the music-performance literature.",
      },
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
    // -----------------------------------------------------------------
    // MODULE 6 — REGULATION & PERFORMANCE STRATEGIES (v0.1) · slug: regulation
    // -----------------------------------------------------------------
    {
      slug: "regulation",
      sira: 6,
      cekirdek: false,
      surum: "v0.1",
      baslik: "Module 6 — Regulation & Performance Strategies (v0.1)",
      about: {
        whatItLooksFor:
          "What it looks for. The actor's ability to find and hold their own best performing state, and to return to it when nerves, tiredness, or a mistake pull them off. Six facets on two parallel 'find your right level' spines: an AROUSAL spine (know your optimal energy zone, regulate toward it from either direction, hold it) and a TENSION spine (notice unnecessary tension, release what you don't need without collapsing, arrive at efficient tone) — plus self-talk, pre-performance routine, and refocusing after error. The regulation read is designed to sit beside Module 5's flow conditions as part of the same mechanism story.",
        evidenceBase:
          "Evidence base. Two research traditions converge on the same 'optimal level, not less-is-better' structure. For arousal: Hanin's Individual Zones of Optimal Functioning (IZOF) — stress is neither inherently good nor bad; each performer has a personal zone, some doing their best work keyed-up and some quiet — with applied precedent in performing artists (music performance anxiety in pianists). For tension: the Alexander/optimal-tone lineage and voice-pedagogy principle that the aim is 'right tone, not relaxation' — release the unnecessary, keep what the task needs. Self-talk, routine, and refocusing are benchmarked against the Test of Performance Strategies (imagery, goal-setting, and automaticity are deliberately omitted here, as they live in Modules 3, 1, and 5). Honest evidence gradient, recorded so the case studies stay disconfirmable: 'excess/wrong tension impairs performance' is well-supported (pre-movement co-contraction degrades motor control under pressure); 'tension-reduction reduces performance anxiety' is reasonably supported (Alexander controlled trials); but 'lowering baseline tension directly improves performance quality' is expert-believed and not yet objectively demonstrated — so the module uses the better-evidenced optimal-tone model, and any case-study claim about tension and performance must be tested, not asserted. Benchmarks only; items original.",
      },
      ustBaslik: "Finding & Holding Your Best State",
      giris:
        "Great acting doesn't come from being calm, and it doesn't come from being pumped up. It comes from being at your own right level — the energy and the ease where your best work lives — and being able to find your way back there when nerves, tiredness, or a mistake pull you off it.\n\nTwo things matter here, and they work the same way. One is your energy or activation: some actors do their finest work keyed-up, others quiet and still — there's no single correct level, only yours. The other is tension in your body: the aim is never to go limp, but to release the tension you don't need so you're left with exactly the tone the work requires.",
      part1: {
        baslik: "Part 1 — Finding Your Optimum",
        giris: "For each statement, choose how true it is of you as an actor.",
        olcek: {
          1: "Not at all true of me",
          2: "A little true of me",
          3: "Somewhat true of me",
          4: "Mostly true of me",
          5: "Completely true of me",
        },
        adminNote:
          "[Team note — not shown: Facet 1 Zone & Tone Awareness (self-knowledge; the optimum's LOCATION reports as a descriptive tag, never good/bad). Facet 2 Arousal Regulation, bidirectional. Facet 3 Tension Awareness & Release (three-step arc; wording avoids 'relax = go limp'). Administered mixed.]",
        fasetler: [
          {
            ad: "Facet 1 — Zone & Tone Awareness",
            maddeler: [
              { no: 1, metin: "I know the level of energy I perform my best work at." },
              { no: 2, metin: "I can tell when I'm too keyed-up for good work — and when I'm too flat." },
              { no: 3, metin: "My best performances have a recognizable inner feel that I could describe." },
              { no: 4, metin: "I can sense when I'm carrying tension I don't need." },
              { no: 5, metin: "I honestly don't know what my best state feels like from the inside.", ters: true },
            ],
          },
          {
            ad: "Facet 2 — Arousal Regulation (up and down)",
            maddeler: [
              { no: 6, metin: "When I'm too nervous or wound-up before performing, I can bring myself down." },
              { no: 7, metin: "When I'm flat, tired, or under-energized, I can lift myself into readiness." },
              { no: 8, metin: "I have concrete ways — breath, movement, focus — to change my energy on purpose." },
              { no: 9, metin: "Once nerves take hold before a performance, there's nothing I can do about them.", ters: true },
              { no: 10, metin: "I can adjust my energy to fit what a particular scene or role needs." },
            ],
          },
          {
            ad: "Facet 3 — Tension Awareness & Release",
            maddeler: [
              { no: 11, metin: "I can release tension I don't need without going limp or losing my energy." },
              { no: 12, metin: "Before a scene, I can let go of held tension in my neck, jaw, shoulders, or breath." },
              { no: 13, metin: "Even mid-scene, I can drop tension that isn't serving the work." },
              { no: 14, metin: "When I try to loosen up, I either stay tight or collapse — I can't find the in-between.", ters: true },
              { no: 15, metin: "I can keep the tone a moment needs while releasing the tension it doesn't." },
            ],
          },
        ],
      },
      part2: {
        baslik: "Part 2 — Performance Strategies",
        giris:
          "These are the reliable paths that get you to your best state and back to it. Answer how true each is of you.",
        olcek: {
          1: "Not at all true of me",
          2: "A little true of me",
          3: "Somewhat true of me",
          4: "Mostly true of me",
          5: "Completely true of me",
        },
        adminNote:
          "[Team note — not shown: Facet 4 Self-Talk (verbal inner stream; distinct from Module 3 meta-emotion). Facet 5 Pre-Performance Routine. Facet 6 Refocusing After Error. Administered mixed with Part 1.]",
        fasetler: [
          {
            ad: "Facet 4 — Self-Talk",
            maddeler: [
              { no: 16, metin: "Under pressure, the voice in my head helps me more than it hurts me." },
              { no: 17, metin: "I can give myself simple, useful cues while I work — “breathe,” “listen,” “slow down.”" },
              { no: 18, metin: "When something goes wrong, my inner voice turns harsh and tears me down.", ters: true },
              { no: 19, metin: "I can talk myself back to steadiness when doubt creeps in." },
              { no: 20, metin: "Before a big moment, my mind fills with thoughts of failing.", ters: true },
            ],
          },
          {
            ad: "Facet 5 — Pre-Performance Routine",
            maddeler: [
              { no: 21, metin: "I have a reliable way of getting myself ready before I perform." },
              { no: 22, metin: "My preparation reliably lands me close to my best state." },
              { no: 23, metin: "I go into performances with no set way of preparing — it's different every time and I hope for the best.", ters: true },
              { no: 24, metin: "My routine settles both my body and my mind." },
              { no: 25, metin: "I can adapt my preparation when conditions are less than ideal — little time, no space, a cold start." },
            ],
          },
          {
            ad: "Facet 6 — Refocusing After Error",
            maddeler: [
              { no: 26, metin: "After a mistake mid-scene — a dropped line, a missed cue — I can reset and carry on." },
              { no: 27, metin: "One thing going wrong tends to unravel the rest of my performance.", ters: true },
              { no: 28, metin: "When I'm thrown off, I have a way of bringing my attention back to the scene." },
              { no: 29, metin: "A distraction from outside the scene can pull me out and keep me out.", ters: true },
              { no: 30, metin: "I can let go of a mistake in the moment and stay with what's happening now." },
            ],
          },
        ],
      },
      teamNotes: [
        "Two spines, six facets, 30 items. AROUSAL spine (IZOF): Zone awareness → bidirectional regulation. TENSION spine (optimal tone): notice → release the unnecessary → efficient tone. Both reject 'less is better' for 'the right level, and the ability to find it.'",
        "Facets 2–6 score 0–100 as a profile; reverse items recode 6 − raw; no single total, no cut-offs in v0.1. Facet 1 (Zone & Tone Awareness) scores as SELF-KNOWLEDGE; the optimum's LOCATION reports as a gently-worded descriptive tag, never good/bad (IZOF is idiographic).",
        "Report up- and down-regulation separately as well as combined — the direction gap is diagnostic. Beginner caveat: a low Zone-awareness score for a newer actor is accurate information ('not yet mapped'), not a flaw.",
        "Hand-offs: habitual baseline tension → Module 8 (body); Module 6 measures on-cue release only. Self-Talk is the VERBAL stream (≠ Module 3 meta-emotion ≠ Module 7 mindfulness). Emotional-control/composure is a cross-module read (Facet 6 + Module 4 repair), not a facet here.",
        "Case-study mechanism: place Part 1 regulation scores beside Module 5's Conditions [C] subtotal — the method helps actors find/hold their optimum, which raises flow conditions, and flow follows.",
        "Wellbeing: release/breath items carry the felt-experience check-in; release work can surface distress in someone carrying trauma — the gentle coaching-offer moment, never a clinical read. Pure self-report in v0.1; Module 8 video + FACS could corroborate later.",
        "Sources: Hanin IZOF (1997, 2000); Alexander/optimal-tone lineage; Test of Performance Strategies (benchmark). Evidence gradient recorded so case-study claims about tension→performance are tested, not asserted.",
      ],
    },
    // -----------------------------------------------------------------
    // MODULE 7 — PERFORMANCE MINDFULNESS (v0.1) · slug: mindfulness
    // -----------------------------------------------------------------
    {
      slug: "mindfulness",
      sira: 7,
      cekirdek: false,
      surum: "v0.1",
      baslik: "Module 7 — Performance Mindfulness (v0.1)",
      about: {
        whatItLooksFor:
          "What it looks for. Mindfulness as a trainable disposition brought into the acting context — the open, nonjudgmental, present-moment quality of attention that underlies good work. Three facets: Present-Moment Awareness, Nonjudgmental Attitude, and Nonreactivity / Letting Be. It is framed as the trainable doorway INTO flow, not flow itself.",
        evidenceBase:
          "Evidence base. The attitudinal facets (nonjudgment, nonreactivity) are what distinguish mindfulness from plain concentration (Module 2, Domain 2), so they carry the module's weight. Structure adapted from the Mindfulness Inventory for Sport (Thienot et al.) three-factor model — refocusing relocated to Module 6 to avoid duplication; acceptance emphasis from the MAC framework (Gardner & Moore); FFMQ and MAAS as benchmarks. Second-data-source flags: mindfulness self-report shares the imagery blind spot (people low in present-moment awareness may not perceive their own mind-wandering); and 'presence' is the battery's strongest observer-rating candidate — a trained eye on the Module 8 video can distinguish a present actor from one indicating from inside their head. Benchmarks only; items original.",
      },
      ustBaslik: "How You Pay Attention When You Perform",
      giris: "For each statement, choose how true it is of you as an actor.",
      olcek: {
        1: "Not at all true of me",
        2: "A little true of me",
        3: "Somewhat true of me",
        4: "Mostly true of me",
        5: "Completely true of me",
      },
      adminNote:
        "[Team note — not shown: three facets; the attitudinal facets (2, 3) distinguish mindfulness from plain concentration (M2 D2); refocusing hands off to Module 6. Administered mixed.]",
      fasetler: [
        {
          ad: "Facet 1 — Present-Moment Awareness",
          maddeler: [
            { no: 1, metin: "When I perform, I'm awake to what's happening right now — my partner, the space, my own body." },
            { no: 2, metin: "I often catch myself planning the next moment instead of living the one I'm in.", ters: true },
            { no: 3, metin: "I notice small, live details as they happen — a shift in my partner's eyes, a change in the air." },
            { no: 4, metin: "While acting, my mind drifts to things outside the scene.", ters: true },
            { no: 5, metin: "I can feel my breath and my body even in the middle of an intense moment." },
          ],
        },
        {
          ad: "Facet 2 — Nonjudgmental Attitude",
          maddeler: [
            { no: 6, metin: "While I'm performing, I can work without a harsh inner voice grading me." },
            { no: 7, metin: "Mid-scene, part of me is busy judging how well I'm doing.", ters: true },
            { no: 8, metin: "When a moment doesn't go as planned, I can meet it with curiosity rather than criticism." },
            { no: 9, metin: "I'm my own harshest critic while I'm still in the middle of the work.", ters: true },
            { no: 10, metin: "I can let a choice be what it is in the moment, without labelling it good or bad." },
          ],
        },
        {
          ad: "Facet 3 — Nonreactivity / Letting Be",
          maddeler: [
            { no: 11, metin: "When nerves or strong feelings rise during a performance, I can let them move through me without being taken over." },
            { no: 12, metin: "An unexpected thought or feeling mid-scene throws me off completely.", ters: true },
            { no: 13, metin: "I can notice a mistake happen and let it pass without clutching at it." },
            { no: 14, metin: "When something rattles me on stage, I get swept up in it.", ters: true },
            { no: 15, metin: "I can stay steady and keep working even when my inner weather is stormy." },
          ],
        },
      ],
      teamNotes: [
        "Three facets × 5 items = 15 items: Present-Moment Awareness · Nonjudgmental Attitude · Nonreactivity/Letting Be. Administered mixed, facet headings hidden; reverse items recode 6 − raw; each facet reports 0–100; NO total in v0.1 — the facets diverge meaningfully, and high awareness + low nonjudgment is precisely the actor pattern the method targets.",
        "Positioning: the trainable doorway INTO flow, not flow itself. Case-study hypothesis: the attitudinal facets (2, 3) predict Module 5's [E] experience scores; mindfulness is the lever, flow the outcome. Design: administer M7 before/after the intervention alongside the M5 Form B trajectory.",
        "Boundary rules: Present-moment awareness ≠ M2 Domain 2 concentration (intensity and duration of focus) — the attitudinal facets are the discriminator and carry the module's weight. Refocusing after error lives in Module 6 Facet 6, not here. Nonreactivity ≠ Module 3 meta-emotion (noticing and naming): M7 measures the attitude TOWARD what arises, not the perception of it.",
        "Second-source flag: mindfulness self-report shares the imagery blind spot — actors low in present-moment awareness underreport their own mind-wandering. Presence is the battery's strongest observer-rating candidate: add a presence rating to the Module 8 video observation grid (a trained eye distinguishes a present actor from one indicating from inside their head).",
        "Wellbeing: the nonjudgment items can surface a harsh inner critic; standard felt-experience check-in applies. A very low nonjudgment score is a coaching-offer moment, never a clinical read.",
        "Sources: Mindfulness Inventory for Sport (Thienot et al.) three-factor structure — refocusing relocated to M6 to avoid duplication; MAC framework (Gardner & Moore) for the acceptance emphasis; FFMQ and MAAS as benchmarks only. Items original.",
      ],
    },
    // -----------------------------------------------------------------
    // MODULE 8 — THE ACTOR'S BODY (v0.2, consolidated) · slug: body
    // Bu birleşik dosyada yalnız Part 1 özeti vardır; video protokolü,
    // gözlemci gridi ve tam puanlama ayrı Module 8 v0.2 belgesindedir
    // (source of truth). Video ayrı, özel onam gerektirir.
    // -----------------------------------------------------------------
    {
      slug: "body",
      sira: 8,
      cekirdek: false,
      surum: "v0.2 (consolidated)",
      baslik: "Module 8 — The Actor's Body (v0.2, consolidated)",
      about: {
        whatItLooksFor:
          "What it looks for. The habitual body — the actor's default tensions, postural signature, and movement/facial habits that ride uninvited into every character — plus the capacities to release, return to neutral, and travel from the habit. Built two-source and organized around three readings and the gaps between them: what the actor believes about their body, what a trained eye sees, and what changes from relaxed to tense/alert.",
        evidenceBase:
          "Evidence base. The only module where self-report is the WEAKER source, because habitual tension is largely invisible to the person carrying it — so the video/observation is the anchor, and the self-vs-observed gap is the key number. Self-report uses a body-map (relaxed + tense/alert) inspired by Nummenmaa et al. (2014) bodily-maps methodology; the facilitator observation targets (body & face) are informed by the Hakomi tradition (Ron Kurtz), via Filiz's post-disaster manual, with the clinical/trauma-interpretation layer deliberately removed — craft holding and malleability only. Teaching from osteopathy, Brennan's The Energetic Performer, sensorimotor psychotherapy, and the Alexander lineage (connecting to the Betsy Polatin foreword target). This is the model second-data-source module for the flagged observer-ratings elsewhere (presence M7, arousal/tension M6, flow M5).",
      },
      kapsamNotu:
        "[Full consolidated instrument: Part 1 self-report (body map two states + capacity items), Part 2 video (separate consent, two takes), Part 3 facilitator observation (checklist + rating grid, body & face, per state), Part 4 team notes. Reproduced here in summary; see the standalone Module 8 v0.2 document for the complete forms, body figures, and consent text.]",
      part1: {
        baslik:
          "Part 1 — Self-report capacities (release · neutrality · malleability · reactivity awareness)",
        not: "(The two-state body map is administered on the figure; the capacity items below accompany it.)",
        olcek: {
          1: "Not at all true of me",
          2: "A little true of me",
          3: "Somewhat true of me",
          4: "Mostly true of me",
          5: "Completely true of me",
        },
        fasetler: [
          {
            ad: "Release Capacity",
            maddeler: [
              { no: 1, metin: "When guided, I can release long-held tension in my body." },
              { no: 2, metin: "I can soften a habitual holding pattern once I become aware of it." },
              { no: 3, metin: "Even when I try, my deepest physical habits won't let go.", ters: true },
              { no: 4, metin: "I can let my breath drop lower and fuller when I bring attention to it." },
            ],
          },
          {
            ad: "Neutrality",
            maddeler: [
              { no: 5, metin: "I can bring my body to a neutral, unmarked starting place — a blank canvas." },
              { no: 6, metin: "From neutral, I feel I could build almost any character's physical life." },
              { no: 7, metin: "My body carries so much of “me” that I can never fully get to neutral.", ters: true },
            ],
          },
          {
            ad: "Physical Malleability",
            maddeler: [
              { no: 8, metin: "I can take on a body very different from my own — weight, rhythm, centre, tension." },
              { no: 9, metin: "I can hold a new physical life for a whole scene without my own habits creeping back." },
              { no: 10, metin: "Under pressure or fatigue, my own postural habits return and override the character's.", ters: true },
              { no: 11, metin: "A physical choice I make for a character stays consistent across takes or performances." },
            ],
          },
          {
            ad: "Reactivity Awareness",
            maddeler: [
              { no: 12, metin: "I know how my body changes when I get tense or under pressure." },
              { no: 13, metin: "Tension appears in places I'm not aware of until someone points it out.", ters: true },
              { no: 14, metin: "When I get alert or nervous, the same few areas always tighten first." },
              { no: 15, metin: "My breath changes noticeably when I move from calm to pressure." },
            ],
          },
        ],
        kapanisNotu:
          "Facilitator observation (body & face, per state), the two-state body map, the separate video consent, and full scoring live in the standalone Module 8 v0.2 document.",
      },
      teamNotes: [
        "Structure in this consolidated file: Part 1 summary only — two-state body map (relaxed + tense/alert, on the figure) plus 15 capacity items across four facets (Release 4 · Neutrality 3 · Malleability 4 · Reactivity Awareness 4). Parts 2–4 (video protocol, facilitator observation grid, full scoring) live in the standalone Module 8 v0.2 document — that document is the source of truth; this summary must never drift from it.",
        "Two-source logic: self-report is the WEAKER source here by design — habitual tension is invisible to its carrier. The anchor number is the self-vs-observed GAP, per region and per state. A large gap is not dishonesty; it is the module's central finding, and the report language must frame it that way.",
        "Scoring: capacity facets 0–100; reverse items recode 6 − raw. Body map scores as region counts/intensities per state plus the between-state delta (which regions recruit under pressure). Gap score = observer rating minus self rating, per region.",
        "Administration order matters: Part 1 self-report BEFORE the video, so self-perception is uncontaminated by feedback. The video requires its own separate consent (biometric-adjacent data under GDPR/KVKK — the retention and deletion rules from the legal review apply doubly here).",
        "Observation discipline: Hakomi-informed targets with the clinical/trauma layer deliberately removed — observers record craft holding and malleability ONLY, never interpretation of why a body holds what it holds. Train observers on the checklist; compute inter-rater agreement as soon as a second observer exists.",
        "Hand-offs: on-cue release under pressure lives in Module 6 (tension spine) — M8 measures the habitual baseline and guided release. M2 Domain 3 (self-belief about body expression) vs M8 observed is a reportable gap. The M8 video doubles as the second data source flagged elsewhere: presence (M7), arousal/tension (M6), observer flow-rating (M5) — one video, four reads.",
        "Wellbeing: body-map attention and release work can surface held distress; the felt-experience check-in is mandatory, and any disclosure is a coaching-offer moment, never a clinical read.",
        "Sources: Nummenmaa et al. (2014) bodily-maps methodology (inspiration, not reproduction); Hakomi (Kurtz) via the post-disaster manual, de-clinicalized; Alexander lineage (Polatin foreword target); Brennan, The Energetic Performer; sensorimotor psychotherapy teaching. Items and figures original.",
      ],
    },
    // -----------------------------------------------------------------
    // MODULE 9 — ENTRY & EXIT (v0.1) · slug: entry_exit
    // En yüksek riskli modül — App Safety Rules tasarım şartnamesidir.
    // Aktivasyon Filiz kapısına tabidir.
    // -----------------------------------------------------------------
    {
      slug: "entry_exit",
      sira: 9,
      cekirdek: false,
      surum: "v0.1",
      baslik: "Module 9 — Entry & Exit (v0.1)",
      about: {
        whatItLooksFor:
          "What it looks for. The sustainable actor — how they enter and leave roles, recover, carry the working life, and know their own weather. Deliberately built to FEEL different from the rest: warmer, opt-in, more reflective, visibly protective. It names areas and offers gentle support; it never assesses clinical status. Five parts: Role-Boundary Style, Recovery Practice, Recovery Channels, Working Life & Emotional Labor, and Your Own Weather.",
        evidenceBase:
          "Evidence base. Hybrid scoring, leaning reflective: role-boundary and recovery practice are lightly scored (behavioral); recovery channels, working-life stressors, and 'your own weather' are reflective and unscored. Sources: BASIC Ph coping-channel model (Lahad & Ayalon) for recovery personalization — framework credited, the 6PSM never reproduced, with a performer precedent (Playback Theatre); Konijn's task-emotion theory for whose-feeling-is-whose; de-roling / cool-down gap (Seton); actor boundary-blurring (Thomson & Jaque); Hochschild's emotional labor, named and normalized; the actor-wellbeing stressor literature rated as context, never as symptoms. Module 3's derived Exit Capacity index routes here. Highest-risk module — the App Safety Rules are the design spec.",
      },
      part1: {
        baslik: "Part 1 — How You Enter and Leave a Role (lightly scored)",
        olcek: {
          1: "Not at all true of me",
          2: "A little true of me",
          3: "Somewhat true of me",
          4: "Mostly true of me",
          5: "Completely true of me",
        },
        fasetler: [
          {
            ad: "Entering (a strength)",
            maddeler: [
              { no: 1, metin: "I can give myself fully to a character and its world." },
              { no: 2, metin: "When the work is going well, I can lose myself in the role." },
            ],
          },
          {
            ad: "Leaving (the matching skill)",
            maddeler: [
              { no: 3, metin: "When a scene or a shoot ends, I can step out of the character and back into myself." },
              { no: 4, metin: "A heavy role can stay with me for hours or days after I've stopped working.", ters: true },
              { no: 5, metin: "I have a felt sense of the moment I've truly left a character behind." },
              { no: 6, metin: "After an emotionally demanding role, it's hard to find my own rhythm again.", ters: true },
            ],
          },
          {
            ad: "Whose feeling is whose",
            maddeler: [
              { no: 7, metin: "I can tell the difference between the character's emotions and my own." },
              { no: 8, metin: "Feelings I built for a character sometimes start to feel like mine.", ters: true },
              { no: 9, metin: "The character's relationships stay the character's — they don't bleed into my real ones." },
            ],
          },
        ],
      },
      part2: {
        baslik: "Part 2 — Coming Down & Recovering (lightly scored)",
        giris:
          "Actors are taught to warm up but rarely to cool down. This part asks about your habits after the work — what you do, not how you feel.",
        olcek: {
          1: "Not at all true of me",
          2: "A little true of me",
          3: "Somewhat true of me",
          4: "Mostly true of me",
          5: "Completely true of me",
        },
        maddeler: [
          { no: 10, metin: "I have some way of marking the end of the work — a small ritual, a change of clothes, a walk, a shower — that tells me the character is set down." },
          { no: 11, metin: "After an intense role, I do something deliberate to come back to myself." },
          { no: 12, metin: "I go straight from an emotionally heavy scene into the rest of my day with nothing in between.", ters: true },
          { no: 13, metin: "I know what helps me recover after demanding work, and I make time for it." },
          { no: 14, metin: "My sleep suffers when I'm inside a difficult role.", ters: true },
          { no: 15, metin: "I have people or places I return to that help me feel like myself again." },
        ],
      },
      part3: {
        baslik: "Part 3 — What Restores You (recovery channels, reflective / unscored)",
        giris:
          "When you're depleted after demanding work, what refills you? No right channel — knowing yours tailors your aftercare. Mark how much you turn to each (1 almost never → 5 almost always).",
        maddeler: [
          { no: "R1", metin: "Meaning & belief — I reconnect to why the work matters, my values, or something larger than myself." },
          { no: "R2", metin: "Feeling — I let myself feel it out: express the emotion, talk it through, cry or laugh it off." },
          { no: "R3", metin: "People — I turn to others: friends, family, company, being around someone who steadies me." },
          { no: "R4", metin: "Imagination — I use play, humor, stories, music, or making something to lift myself out." },
          { no: "R5", metin: "Thinking — I make sense of it: plan, organize, understand what happened, put it in order." },
          { no: "R6", metin: "The body — I do something physical: move, walk, exercise, eat, rest, use my hands." },
        ],
      },
      part4: {
        baslik: "Part 4 — The Weight of the Working Life (reflective, educates)",
        giris:
          "On emotional labor. Actors produce real-seeming emotion on demand, repeatedly — psychologists call this 'emotional labor,' and it is genuinely tiring. Feeling wrung out after emotional scenes isn't fragility; it's the labor being real. Naming it is often the first relief.\n\nMark how much each is a pressure in your working life right now (1 not part of my work → 5 a constant pressure):",
        maddeler: [
          { no: 1, metin: "Income insecurity — not knowing when the next work or paycheck comes." },
          { no: 2, metin: "Rejection & criticism — auditions, reviews, being judged as part of the job." },
          { no: 3, metin: "Emotional labor — performing real-seeming feeling on demand, repeatedly." },
          { no: 4, metin: "Unstable schedule — irregular hours, travel, work that upends ordinary life." },
          { no: 5, metin: "Isolation — time away from home, or feeling alone in the profession." },
          { no: 6, metin: "Comparison & visibility — being seen, measured, and compared publicly." },
          { no: 7, metin: "The sense that success rests in a few powerful hands." },
        ],
        standingOffer:
          "Standing offer (shown to the actor): Whatever your answers here, individual coaching is available whenever you'd like it — to build recovery habits, ease the load, or just to talk something through. No pressure, entirely your choice.",
      },
      part5: {
        baslik: "Part 5 — Your Own Weather (reflective / unscored, seven systems)",
        giris:
          "Purely for your own self-knowledge — never scored, never in your performance profile. Knowing your own weather lets you tell it apart from a character's.",
        olcek: {
          1: "Not at all true of me",
          2: "A little true of me",
          3: "Somewhat true of me",
          4: "Mostly true of me",
          5: "Completely true of me",
        },
        maddeler: [
          { no: "W1", metin: "In daily life, playfulness comes easily to me." },
          { no: "W2", metin: "Curiosity pulls me toward new things most days." },
          { no: "W3", metin: "Caring for others comes naturally to me." },
          { no: "W4", metin: "Warmth and desire move through my days readily." },
          { no: "W5", metin: "I feel fear or worry more than most people around me." },
          { no: "W6", metin: "Anger rises in me quickly." },
          { no: "W7", metin: "Sadness visits me often." },
        ],
      },
      teamNotes: [
        "Five parts, hybrid and deliberately soft. Part 1 Role-Boundary (9 items; three mini-facets: entering 2 · leaving 4 · whose-feeling-is-whose 3) and Part 2 Recovery Practice (6 items) are LIGHTLY scored, 0–100, behavioral framing; reverse items recode 6 − raw. Parts 3–5 (recovery channels R1–R6, working-life stressors, Your Own Weather W1–W7) are reflective and UNSCORED — never in the performance profile, never ranked, never compared across actors.",
        "Key derived reads: Entering high + Leaving low = the immersion-without-exit signature — cross-check with Module 3's Exit Capacity index (low exit + high reach routes here). Part 2 practice score is the actionable lever: cool-down rituals are teachable, and the report should say so. Recovery channels report as the actor's top-2 channels for aftercare personalization — a preference map, never a type.",
        "BASIC Ph mapping (team only, never shown to actors): R1 Belief · R2 Affect · R3 Social · R4 Imagination · R5 Cognition · R6 Physical. Framework credited (Lahad & Ayalon); the 6PSM is never reproduced; Playback Theatre is the performer precedent.",
        "Your Own Weather (W1–W7) mirrors the seven Panksepp systems of Module 3 in trait form. The pairing (character access in M3 vs personal wiring in W) exists solely for the actor's own differentiation — 'this is the character's grief, this is my weather.' Never scored, never in reports beyond the actor's own reflection page.",
        "Safety spec — highest-risk module; the App Safety Rules are the design spec. The standing coaching offer renders after Part 4 ALWAYS, regardless of answers. Stressor items are context, never symptoms; no aggregate 'wellbeing score' may ever be computed; the sleep item (14) and lingering-role items (4, 6, 8) are felt-experience check-in triggers, not flags. Tone stays warm, opt-in, skippable throughout.",
        "Sources: Lahad & Ayalon BASIC Ph coping channels; Konijn task-emotion theory (whose-feeling-is-whose); Seton (de-roling / cool-down gap); Thomson & Jaque (actor boundary-blurring); Hochschild (emotional labor, named and normalized). Items original.",
      ],
    },
  ],

  // -------------------------------------------------------------------
  // WHERE THE BATTERY STANDS
  // -------------------------------------------------------------------
  bataryaDurumu: {
    baslik: "Where the Battery Stands",
    metin:
      "Intake and all nine modules are drafted at full depth, including the Type Lens (Module 1, v0.1 — 44 forced-choice items translated at the construct level from Filiz's Jung-based inventory; awaiting Filiz's red pen, especially on the dropped inventory rows, the 'correct or kind' item, and whether the stems sound like working actors talk). The sixteen type reports, like all module reports, belong to the report-building phase after the battery is finalized. The natural next step is the whole-battery review: an overlap map across modules, and a tiering/trim pass, now that the full instrument can be seen at once.",
    renumberingRecord:
      "Renumbering record (v0.3): Type Lens moved from position 7 to position 2; Emotional Profile unchanged at 3; Access Channel & Imagery 2→4; Flow 4→5; Regulation 5→6; Performance Mindfulness 6→7; Body and Entry & Exit unchanged at 8 and 9. All cross-references in module texts and team notes updated to the new numbers. Database module keys remain stable slugs decoupled from display order (see the team note under the Module Map). Renumbering record (v0.5): Type Lens 2→1 (now opens the battery); Acting Performance Scale 1→2; Intake split out as its own unnumbered opening section; Modules 3–9 unchanged. Administration order: Intake & Consent → Type Lens → APS → Emotional Profile → optional modules. Slugs untouched throughout.",
    kapanis:
      "Detailed scoring, team notes, consent text, and the Module 8 figures live in each module's standalone document; this combined file is the battery seen whole.",
  },
};

export default batarya;
