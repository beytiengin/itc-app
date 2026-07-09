// =====================================================================
// APS ACTOR REPORT — Content Pack v0.2 (ITC)
// Kaynak: APS_Actor_Report_Content_Pack_v0_2.docx · Filiz Kaya Ataklı
// Modül slug: aps (adlandırma yasası gereği sabit)
//
// KURAL: İçerik verbatim'dir. Oyuncuya dönük kopya bloklarında HİÇBİR
//        değişiklik yapılmaz; her düzeltme Filiz'den tarihli v0.3 olarak
//        döner — kısmi edit yayınlanmaz (§0).
// KURAL (v0.2, sert): oyuncu tarafında HİÇBİR SAYI gösterilmez — yalnız
//        çubuklar. Toplam skor asla hesaplanmaz/gösterilmez. Band adı,
//        sıra, bayrak oyuncuya asla görünmez. Tüm sayılar coach render +
//        araştırma için eksiksiz, append-only saklanır (§0).
// KURAL: D9 gap bayrağı coach-taraflıdır; oyuncuya tek görünür sonucu
//        page5.reflectiveLine'dır (§1).
// KURAL: Alıntı disiplini — oyuncu kopyasında araştırmacı/çalışma adı
//        yok; "performance psychology consistently finds…" tavandır (§8).
// NOT: `sabitler` §1'deki kilitli v0.1 eşiklerinin makine-okur halidir;
//        kaynak-of-truth verbatim `renderingLogic` metnidir. Eşik
//        değişikliği tarihli kayıt gerektirir (§8).
// NOT: readMeFirst / renderingLogic / page2.visualSpec / hedgedNot /
//        page5.renderNotu / coachRenderSpec / notesVersion = TALİMAT
//        metinleridir (team-only), oyuncuya render edilmez.
// NOT: §1'de anılan görüntüleme-sonrası check-in'in KOPYASI bu pack'te
//        yok — kopya Filiz'den gelene dek check-in UI kurulmaz.
// DOĞRULAMA İMZASI: ITC-APSRAPOR-PACK-V02-20260709
// =====================================================================

export const apsRapor = {
  "meta": {
    "baslik": "THE CHARACTER DESIGN",
    "paket": "APS Actor Report Content Pack",
    "surum": "v0.2",
    "modulSlug": "aps",
    "yazar": "Filiz Kaya Ataklı"
  },
  "sabitler": {
    "bandUpperEsik": 3.75,
    "bandLowerEsik": 2.75,
    "hedgeAralik": 0.15,
    "topUcuncuFark": 5,
    "d9GapEsik": 15,
    "skorFormulu": "((mean − 1) / 4) × 100, bir ondalık",
    "not": "§1 Rendering Logic'ten, v0.1 spec değerlerinde kilitli (§8)."
  },
  "sesSinifi": {
    "signature-strength": "strength",
    "leading-edge": "strength",
    "honest-ground": "strength",
    "solid-ground": "middle",
    "steady": "middle",
    "invitation": "middle",
    "refinement": "edge",
    "open-door": "edge",
    "open-door, fullest": "edge"
  },
  "readMeFirst": [
    "This pack contains every text block the app needs to render the APS ACTOR report, plus the logic that selects between blocks. Shaded blocks are verbatim app copy; everything else is instruction. Module slug: aps (stable, per the naming law). The coach render is a separate view of the same data — its spec is in §7; it ships after the actor report. Changes in v0.2 (from Filiz's sample edit): NO numbers are displayed anywhere in the actor report — bars only; all scores are still computed and stored for the coach render and research; the opening frame is shortened to “two things.” Any further edit returns as v0.3; do not publish partial edits.",
    "Two rules are hard: no total score is ever computed or displayed, and no band name, rank number, or flag is ever shown to the actor — and as of v0.2, no domain scores either. The actor sees warm prose and unlabeled bars, nothing numeric. All numbers (domain scores, means, gap, grid values) are computed and stored in full, append-only, for the coach render and for research; they are simply never rendered actor-side."
  ],
  "renderingLogic": [
    "**Scoring.** Reverse items (marked R in the battery) recode 6 − raw. Domain mean = mean of its items after recoding. Domain score (0–100) = ((mean − 1) / 4) × 100, stored to one decimal. Nine scores; no composite. STORAGE ONLY: from v0.2 these numbers drive bar lengths and block selection but never appear as text in the actor report.",
    "**Axis 1 — rank (Domains 1–8 only; D9 excluded).** Sort D1–D8 by score. TOP set = the two highest, plus the third if it is within 5 points of the second. EDGE set = the two lowest. Everything else = MIDDLE set. Exact ties share a set and render together.",
    "**Axis 2 — band (per domain, from the 1–5 mean).** UPPER: mean ≥ 3.75. MIDDLE: 2.75 ≤ mean \\< 3.75. LOWER: mean \\< 2.75. HEDGE flag: on when the mean is within ±0.15 of a boundary (3.60–3.90 or 2.60–2.90).",
    "**Block selection.** Each domain in §4 carries a core portrait (always rendered with the domain wherever it appears) and nine position×band blocks. Render: portrait + the block matching (set, band). When HEDGE is on, replace the block's first sentence with the hedged opener for its voice class (§3) — nothing else changes.",
    "**Page assembly.** Page 1: opening frame + caution block (§2). Page 2: the profile visual (spec in §2). Page 3: TOP set domains, highest first. Page 4: EDGE set domains, higher first, then the closing line (§2). MIDDLE set domains render as a short strip between pages 3 and 4 (“The rest of your ground” — one portrait line + the brief block each). Page 5: Domain 9 (§5). Page 6: journey page (§6).",
    "**D9 gap flag (coach-side computation).** gap = D9 score − mean(D1–D8 scores). Store always; flag when \\|gap\\| ≥ 15. The flag itself is never rendered in the actor report; when it is on, the single reflective line in §5 renders — that line is the ONLY actor-visible consequence.",
    "**Check-in.** After the full report is first viewed, fire the standard felt-experience check-in (copy in §6). Any unease signal surfaces the standing coaching offer — same mechanic as the rest of the battery, no new logic."
  ],
  "microReveal": "Your strongest ground so far: {top_domain_name}. The full picture — all nine areas, and what to do with them — is waiting for you at the end of the core path.",
  "page1": {
    "title": "Your Acting Performance Profile",
    "beforeYouRead": "Before you read a word, two things. First: this is a self-portrait. It shows how you see your own skills today — honestly answered, it is one valuable way of seeing yourself, and still only one. Second, and most important: every actor's profile has stronger and softer areas. Every single one. Our approach begins with your strong areas, not your soft ones — because what makes an actor stand out is rarely the absence of weaknesses. It is a strength sharpened until it becomes unmistakably theirs. So we will look first at what is already strong in you and how to make it stronger. Then we will look at your working edges, and for each one we will show you a door. Every door is optional. All of them stay open.",
    "holdYourTypeLightly": "You hold two documents from us that could seem to describe the same person twice. They don't. Your type report is a hypothesis about your preferences — how you tend to like working. This profile is a self-portrait of your skills — how you rate what you can do today. Neither should be read through the other: a preference is not a skill level, and a skill score doesn't confirm or deny a type. If they seem to disagree somewhere, that's not an error — it's usually the most interesting conversation in the room."
  },
  "page2": {
    "visualSpec": [
      "One visual, nine horizontal bars scaled 0–100 with NO numeric labels — bar length alone carries the information; the underlying scores are stored, never shown. Domains 1–8 grouped as “Your skills as you see them”; Domain 9 in its own separated panel beneath, labeled with the caption block below. No red anywhere; no traffic-light coding; one calm palette where bar length alone carries the information. Bars ordered D1–D9 (fixed instrument order, NOT ranked — ranking is what pages 3–4 are for). On retakes, previous administrations layer as lighter bars behind the current one, with dates."
    ],
    "d9PanelCaption": "Craft Confidence is measured separately because it is a different kind of thing — not a skill, but what you believe about your skills. It gets its own page later in this report."
  },
  "page3Header": "Your stronger ground",
  "page3Intro": "These are the strongest areas of your profile — your ground. Here is what each one makes possible, and how to sharpen it until it is unmistakably yours.",
  "middleStripHeader": "The rest of your ground",
  "page4Header": "Your working edges",
  "page4Intro": "Every actor has working edges — the areas that are still being built. Yours are below, each with a door you can open whenever you choose.",
  "page4Closing": "One thing to carry from this page: your strong ground carries you while you build here. That is the order we work in — and it is why the edges are invitations, not verdicts.",
  "hedgedOpeners": {
    "strength": "This area sits high in your profile — right at a border where a point or two changes the wording but not the truth, so read what follows lightly.",
    "middle": "This area sits near the middle of your profile, close to a border — so hold the next lines loosely.",
    "edge": "This area came out among your softer ones, though only just — a point or two would tell a different story, so read what follows as a direction, not a definition."
  },
  "hedgedNot": null,
  "domainler": [
    {
      "no": 1,
      "ad": "Script Analysis & Character Construction",
      "portre": "This is the detective's skill: reading a script for what it says, and just as sharply for what it doesn't — asking why your character does what they do, tracing cause to effect, and building answers where the writer left silence.",
      "bloklar": {
        "TOP+UPPER": {
          "ses": "signature-strength",
          "metin": "This is one of your clearest strengths — and it happens to be the skill this whole method is built around. You already read scripts the way the strongest actors do: as a field of questions. The sharpening path is to take it further than most actors ever do — full construction work: authoring your character's pillar events, building the memories your character owns, until your preparation becomes something directors can feel in the first rehearsal. That level of construction is exactly what the character-design work in this app will train, and you are arriving at it with your best foot forward."
        },
        "TOP+MIDDLE": {
          "ses": "leading-edge",
          "metin": "This is your strongest ground, and it is still growable — which is good news, because it is the skill this entire method trains. The fastest path to a signature runs right through the character-design work at the heart of this app: deeper questioning, fuller construction, until your script work becomes the thing people mention about you."
        },
        "TOP+LOWER": {
          "ses": "honest-ground",
          "metin": "Of your nine areas, this is where you stand strongest today — and it is the natural place to begin building, because it is the skill this whole app exists to train. Start here, with the character-design work: it will grow your strongest area first, and the rest tends to follow."
        },
        "MIDDLE+UPPER": {
          "ses": "solid-ground",
          "metin": "A reliably solid part of your profile: your script work holds. The character-design work in this app will keep feeding it."
        },
        "MIDDLE+MIDDLE": {
          "ses": "steady",
          "metin": "Steady ground. If you ever want to push it further, the character-design work at the heart of this app is where this skill grows."
        },
        "MIDDLE+LOWER": {
          "ses": "invitation",
          "metin": "This area sits in the middle of your profile with room to grow — and it is the one skill this whole app is built to train. The character-design work here will grow it step by step, whenever you choose to start."
        },
        "SOFT+UPPER": {
          "ses": "refinement",
          "metin": "Even as one of your softer areas, your script work is solid — this is refinement territory, not repair. The character-design work in this app will give it the fine edge."
        },
        "SOFT+MIDDLE": {
          "ses": "open-door",
          "metin": "This came out as one of your working edges — and it is the best-served edge you could have, because training exactly this skill is what this app is for. The character-design work here — questioning the script, building your character's past — will grow it piece by piece. The door is open whenever you are."
        },
        "SOFT+LOWER": {
          "ses": "open-door, fullest",
          "metin": "This came out as one of your working edges, and here is the honest, hopeful truth: this is the most trainable skill in your profile, because this entire method exists to train it. The character-design work in this app will take it step by step — asking the questions the script doesn't answer, building your character's memories — and your strong ground carries you while you build here. And if you'd like company on the way, individual coaching with us is always available."
        }
      }
    },
    {
      "no": 2,
      "ad": "Concentration & Presence",
      "portre": "The ability to be fully where the scene is — attention gathered on the moment and the partner, holding through distraction, tiredness, and the pull of everything outside the scene.",
      "bloklar": {
        "TOP+UPPER": {
          "ses": "signature-strength",
          "metin": "This is one of your clearest strengths. Deep, durable attention is rarer than talent, and audiences feel it before they can name it. The sharpening path is holding that absorption under the harshest conditions — camera close, audience restless, stakes high — until your presence is the still point every scene organizes around. The Performance Mindfulness module can take even a strength like this further."
        },
        "TOP+MIDDLE": {
          "ses": "leading-edge",
          "metin": "Your strongest ground, with room still to grow. Presence like yours becomes a signature when it survives pressure — and the Performance Mindfulness module is built for exactly that next step."
        },
        "TOP+LOWER": {
          "ses": "honest-ground",
          "metin": "Of your nine areas, this is where you stand strongest today — a good foundation, because everything else in acting rests on attention. The Performance Mindfulness module is the natural first build."
        },
        "MIDDLE+UPPER": {
          "ses": "solid-ground",
          "metin": "Reliably solid: your attention holds. Worth protecting as the foundation it is."
        },
        "MIDDLE+MIDDLE": {
          "ses": "steady",
          "metin": "Steady ground. The Performance Mindfulness module is there if you ever want to deepen it."
        },
        "MIDDLE+LOWER": {
          "ses": "invitation",
          "metin": "This sits in the middle of your profile with room to grow. The Performance Mindfulness module works on exactly this — where attention goes, and how it comes back. An open door, whenever you like."
        },
        "SOFT+UPPER": {
          "ses": "refinement",
          "metin": "Even as one of your softer areas, your concentration is solid — refinement territory. The Performance Mindfulness module can give it the last degree of steadiness."
        },
        "SOFT+MIDDLE": {
          "ses": "open-door",
          "metin": "One of your working edges — and one of the most trainable things in the whole craft. The Performance Mindfulness module works directly on attention: where it goes, what pulls it, how it returns. A natural next stop, whenever you choose."
        },
        "SOFT+LOWER": {
          "ses": "open-door, fullest",
          "metin": "One of your working edges — and genuinely good news hides in it: attention is a skill, not a gift, and it responds to training faster than almost anything else in the craft. The Performance Mindfulness module works on exactly this, gently and step by step, and your strong ground carries you while you build here. Individual coaching with us is always available too, if you'd like it."
        }
      }
    },
    {
      "no": 3,
      "ad": "Body & Movement",
      "portre": "Your body as an expressive instrument: moving with intention, letting the character live in posture, gesture, and rhythm — saying with the body what the lines don't say.",
      "bloklar": {
        "TOP+UPPER": {
          "ses": "signature-strength",
          "metin": "This is one of your clearest strengths. An actor whose body speaks is watchable in silence — and that is a currency very few hold. The sharpening path is designed embodiment: building a full physical score for a character, animal work, a body constructed choice by choice rather than found by luck. The Actor's Body module — with its outside-eye video work — is where a strength like this gets its edge."
        },
        "TOP+MIDDLE": {
          "ses": "leading-edge",
          "metin": "Your strongest ground, still growable. The step from expressive to unmistakable runs through designed embodiment — physical scores, deliberate bodies for deliberate characters — and The Actor's Body module is built for it."
        },
        "TOP+LOWER": {
          "ses": "honest-ground",
          "metin": "Of your nine areas, this is where you stand strongest today — and the body is a generous place to start, because it teaches everything else. The Actor's Body module is the natural first build."
        },
        "MIDDLE+UPPER": {
          "ses": "solid-ground",
          "metin": "Reliably solid: your body works with you, not against you. A quiet asset."
        },
        "MIDDLE+MIDDLE": {
          "ses": "steady",
          "metin": "Steady ground. The Actor's Body module — self-view plus an outside eye on video — is there when you want to see it more clearly."
        },
        "MIDDLE+LOWER": {
          "ses": "invitation",
          "metin": "This sits in the middle of your profile with room to grow. The Actor's Body module pairs your own sense of your body with an outside eye on video — often the fastest way to grow this area. Open whenever you like."
        },
        "SOFT+UPPER": {
          "ses": "refinement",
          "metin": "Even as one of your softer areas, this is solid — refinement territory. The Actor's Body module's outside-eye work will show you exactly where the fine adjustments live."
        },
        "SOFT+MIDDLE": {
          "ses": "open-door",
          "metin": "One of your working edges. The body is wonderfully honest to work with: it shows progress you can see. The Actor's Body module pairs how you sense yourself with how you actually read on video — a natural next stop, whenever you choose."
        },
        "SOFT+LOWER": {
          "ses": "open-door, fullest",
          "metin": "One of your working edges — and the body is the kindest place to have one, because bodies learn visibly and reward every hour you give them. The Actor's Body module works step by step, pairing your own sense of your body with a supportive outside eye, and your strong ground carries you while you build here. And individual coaching with us is always available, if you'd like it."
        }
      }
    },
    {
      "no": 4,
      "ad": "Voice & Speech",
      "portre": "The voice as a carrier of character and feeling: clarity, range, stamina — a voice that can be quiet without disappearing and loud without breaking, and that can hold an emotion on its own.",
      "bloklar": {
        "TOP+UPPER": {
          "ses": "signature-strength",
          "metin": "This is one of your clearest strengths — and a distinctive voice is one of the rarest signatures an actor can own. Voice work has one honest truth: it grows in rooms, with teachers, ears, and repetition. So the sharpening path for you is advanced training — the kind of masterclass and coach-led work that turns a strong voice into an unmistakable one. Seek it out; you have the instrument for it."
        },
        "TOP+MIDDLE": {
          "ses": "leading-edge",
          "metin": "Your strongest ground, still growable — and voice grows where all voice work happens: in training rooms. Advanced voice work with good teachers is the fastest path from strong to signature, and your profile says you're ready for that level."
        },
        "TOP+LOWER": {
          "ses": "honest-ground",
          "metin": "Of your nine areas, this is where you stand strongest today. Voice work lives in training rooms, with teachers — and starting from your strongest area is exactly our approach. A good voice course now would compound everything else."
        },
        "MIDDLE+UPPER": {
          "ses": "solid-ground",
          "metin": "Reliably solid: your voice carries what you ask of it. Keep it in training — voices reward maintenance."
        },
        "MIDDLE+MIDDLE": {
          "ses": "steady",
          "metin": "Steady ground. If you want to push it, voice grows in training rooms — a workshop or course is the honest recommendation here."
        },
        "MIDDLE+LOWER": {
          "ses": "invitation",
          "metin": "This sits in the middle of your profile with room to grow — and voice is trained where all voice work happens: in rooms, with teachers. A workshop or course is the honest, effective door here, whenever you choose it."
        },
        "SOFT+UPPER": {
          "ses": "refinement",
          "metin": "Even as one of your softer areas, your voice work is solid — refinement territory. A targeted course with a good teacher is where the fine edge gets cut."
        },
        "SOFT+MIDDLE": {
          "ses": "open-door",
          "metin": "One of your working edges — and here is the honest map: voice is trained in rooms, with teachers and repetition, and it responds beautifully to exactly that. More workshop and course work is the real door for this one; your voice work continues where all voice work happens."
        },
        "SOFT+LOWER": {
          "ses": "open-door, fullest",
          "metin": "One of your working edges — and the good news is that voice is among the most directly trainable things an actor has: it grows in training rooms, with teachers, and it repays every session. More workshops and courses are the honest door here, your strong ground carries you while you build, and if you'd like help choosing the right training — or company along the way — individual coaching with us is always available."
        }
      }
    },
    {
      "no": 5,
      "ad": "Emotional Expression",
      "portre": "Showing feeling on cue and shaping it to the scene: raising and lowering intensity when asked, moving between emotions within a scene, a face and body readable without a single word.",
      "bloklar": {
        "TOP+UPPER": {
          "ses": "signature-strength",
          "metin": "This is one of your clearest strengths — expressive control on cue, which is the working heart of the craft. And here is something worth knowing: the science is on your side. Producing an expression truthfully with the face and body sets off real feeling in the nervous system — the outside-in road is not a trick, it is physiology. Your sharpening path is fine-grained modulation: dialing intensity by degrees, turning from one emotion to another inside a single beat, until directors learn they can ask you for anything. The Emotional Profile module maps the palette a strength like this draws from."
        },
        "TOP+MIDDLE": {
          "ses": "leading-edge",
          "metin": "Your strongest ground, still growable. The step to signature level is precision — intensity by degrees, clean turns between emotions mid-scene — and the Emotional Profile module maps the emotional palette that precision draws on."
        },
        "TOP+LOWER": {
          "ses": "honest-ground",
          "metin": "Of your nine areas, this is where you stand strongest today — a warm place to start, because expression is where the audience meets you. The Emotional Profile module is the natural first build: it maps which emotions come easily to you and which want practice."
        },
        "MIDDLE+UPPER": {
          "ses": "solid-ground",
          "metin": "Reliably solid: you can show what the scene needs, when it needs it. A working actor's asset."
        },
        "MIDDLE+MIDDLE": {
          "ses": "steady",
          "metin": "Steady ground. The Emotional Profile module maps your access to each emotion in detail, if you ever want the fuller picture."
        },
        "MIDDLE+LOWER": {
          "ses": "invitation",
          "metin": "This sits in the middle of your profile with room to grow. The Emotional Profile module goes deeper than any single score can — mapping your access to each family of emotion separately — and it is the natural next step here, whenever you like."
        },
        "SOFT+UPPER": {
          "ses": "refinement",
          "metin": "Even as one of your softer areas, this is solid — refinement territory. The Emotional Profile module will show you which specific emotions want the fine-tuning."
        },
        "SOFT+MIDDLE": {
          "ses": "open-door",
          "metin": "One of your working edges — and an important thing to hear clearly: growing this does NOT mean digging into your own past. In our method, expression is built from the outside in and from the imagination out — constructed, trained, owned. The Emotional Profile module is the natural next stop: it maps your access to each family of emotion, so the work becomes specific instead of vague."
        },
        "SOFT+LOWER": {
          "ses": "open-door, fullest",
          "metin": "One of your working edges — and please hear the most important sentence in this report: growing your expression will never require mining your own painful memories. Not here. Expression is trainable from the outside in — the face and body teach the feeling — and from the imagination out, through the character's constructed world. The Emotional Profile module maps exactly where your access is easy and where it wants practice, your strong ground carries you while you build, and individual coaching with us is always available if you'd like a companion in it."
        }
      }
    },
    {
      "no": 6,
      "ad": "Imagination",
      "portre": "The engine of belief: picturing a scripted place as if standing in it, inventing a believable third fact from two given ones, and reacting truthfully to what isn't physically there.",
      "bloklar": {
        "TOP+UPPER": {
          "ses": "signature-strength",
          "metin": "This is one of your clearest strengths — and imagination is the acting skill that fills every silence a script leaves. The sharpening path is imagination under adverse conditions: unseen partners, imaginary objects, green screen — the situations where most actors go blank and the ones with trained imagery stay alive. The Access Channel & Imagery module will show you which inner channel your imagination runs on, so even a strength like this can be trained with precision."
        },
        "TOP+MIDDLE": {
          "ses": "leading-edge",
          "metin": "Your strongest ground, still growable. Signature-level imagination is imagination that works under the worst conditions — green screen, empty space — and the Access Channel & Imagery module finds the channel yours runs on, so the training lands exactly where it should."
        },
        "TOP+LOWER": {
          "ses": "honest-ground",
          "metin": "Of your nine areas, this is where you stand strongest today — a genuinely good sign, because imagination feeds everything else in the craft. The Access Channel & Imagery module is the natural first build: it finds the door your imagination opens most easily."
        },
        "MIDDLE+UPPER": {
          "ses": "solid-ground",
          "metin": "Reliably solid: your imagination shows up for the work. Feed it — it is the renewable resource of the craft."
        },
        "MIDDLE+MIDDLE": {
          "ses": "steady",
          "metin": "Steady ground. The Access Channel & Imagery module can show you which inner channel your imagination prefers, if you want to train it with more precision."
        },
        "MIDDLE+LOWER": {
          "ses": "invitation",
          "metin": "This sits in the middle of your profile with room to grow — and imagination trains better than almost anyone expects, once you know which channel yours runs on. That is exactly what the Access Channel & Imagery module finds. Open whenever you like."
        },
        "SOFT+UPPER": {
          "ses": "refinement",
          "metin": "Even as one of your softer areas, this is solid — refinement territory. The Access Channel & Imagery module will show you which channel to sharpen."
        },
        "SOFT+MIDDLE": {
          "ses": "open-door",
          "metin": "One of your working edges — and a very trainable one, because imagination isn't one skill but several channels, and almost everyone has a strong one waiting to be found. The Access Channel & Imagery module finds yours, and every exercise afterward gets matched to it. A natural next stop."
        },
        "SOFT+LOWER": {
          "ses": "open-door, fullest",
          "metin": "One of your working edges — and here is the encouraging truth: imagination is not a fixed gift. It runs on channels — seeing, hearing, feeling, and more — and nearly everyone has a stronger channel than they realize. The Access Channel & Imagery module finds yours and matches the training to it, your strong ground carries you while you build, and individual coaching with us is always available if you'd like it."
        }
      }
    },
    {
      "no": 7,
      "ad": "Professional Discipline & Motivation",
      "portre": "The craft behind the craft: arriving prepared, working between projects, following through on notes, setting real goals — and keeping the love of the work alive through the hard stretches.",
      "bloklar": {
        "TOP+UPPER": {
          "ses": "signature-strength",
          "metin": "This is one of your clearest strengths — and in a profession of waiting and uncertainty, discipline is the quietest and most reliable of all advantages. The sharpening path is designing your own practice: turning general diligence into a deliberate regime between projects — specific goals, honest feedback loops, work that targets your edges instead of repeating your comforts. Your type report's “Ways to Enhance Performance” section speaks your working language on exactly this — worth revisiting with this score in hand."
        },
        "TOP+MIDDLE": {
          "ses": "leading-edge",
          "metin": "Your strongest ground, still growable. The step up is from working hard to practicing deliberately — designed goals, feedback, repetition with intent. Revisit your type report's “Ways to Enhance Performance” section: it speaks to exactly how someone with your working style builds that."
        },
        "TOP+LOWER": {
          "ses": "honest-ground",
          "metin": "Of your nine areas, this is where you stand strongest today — and it is the strength that grows all the others, because discipline is what turns every module in this app into results. Your type report's enhancement section is the natural companion read."
        },
        "MIDDLE+UPPER": {
          "ses": "solid-ground",
          "metin": "Reliably solid: the work gets done. That reliability compounds over a career."
        },
        "MIDDLE+MIDDLE": {
          "ses": "steady",
          "metin": "Steady ground. Your type report's “Ways to Enhance Performance” section has suggestions matched to your working style, worth a revisit."
        },
        "MIDDLE+LOWER": {
          "ses": "invitation",
          "metin": "This sits in the middle of your profile with room to grow — and the most useful suggestions won't be generic ones. Revisit your type report's “Ways to Enhance Performance” section: it was written for how you, specifically, tend to work. Try its suggestions again, deliberately this time."
        },
        "SOFT+UPPER": {
          "ses": "refinement",
          "metin": "Even as one of your softer areas, this is solid — refinement territory. Your type report's enhancement section will have the tailored adjustments."
        },
        "SOFT+MIDDLE": {
          "ses": "open-door",
          "metin": "One of your working edges — and discipline advice only works when it fits the person, which is why the door here is one you already own: your type report's “Ways to Enhance Performance” section. Go back to it, pick one suggestion, and run it for a month. Tailored beats general, every time."
        },
        "SOFT+LOWER": {
          "ses": "open-door, fullest",
          "metin": "One of your working edges — and here is the kind truth: discipline is not a character verdict, it is a system problem, and systems can be redesigned to fit the person you actually are. That is exactly what your type report's “Ways to Enhance Performance” section was written for — suggestions matched to your working style, not anyone else's. Revisit it, choose one thing, start small. Your strong ground carries you while you build, and individual coaching with us is always available if you'd like an ally in it."
        }
      }
    },
    {
      "no": 8,
      "ad": "Collaboration",
      "portre": "Acting as a team sport: listening as if for the first time, adjusting to serve your partner, taking direction without losing yourself, and offering ideas that lift the whole scene.",
      "bloklar": {
        "TOP+UPPER": {
          "ses": "signature-strength",
          "metin": "This is one of your clearest strengths — and it is the one directors talk about when they cast you again. The sharpening path is moving from good ensemble member to the actor who lifts the room: the one whose listening changes their partners' performances. That level is built in rooms, with people — our live workshop is where we work at it together, and your type report's recommendations add the personal angle. You'd arrive at that workshop as one of its strong players."
        },
        "TOP+MIDDLE": {
          "ses": "leading-edge",
          "metin": "Your strongest ground, still growable — and collaboration only grows one way: in the room, with others. Our live workshop is the natural next level for you, and your type report's recommendations tell you what to bring to it."
        },
        "TOP+LOWER": {
          "ses": "honest-ground",
          "metin": "Of your nine areas, this is where you stand strongest today — a generous strength, because it makes everyone around you better too. Our live workshop is where it grows further, and it grows in company."
        },
        "MIDDLE+UPPER": {
          "ses": "solid-ground",
          "metin": "Reliably solid: you serve the scene, not just your part of it. Partners notice."
        },
        "MIDDLE+MIDDLE": {
          "ses": "steady",
          "metin": "Steady ground. This one grows in rooms — our live workshop is there when you want it, and your type report has the personal notes."
        },
        "MIDDLE+LOWER": {
          "ses": "invitation",
          "metin": "This sits in the middle of your profile with room to grow — and here is the honest thing about collaboration: it cannot be practiced alone. It grows in the room. Our live workshop is exactly that room, and your type report's recommendations are worth reading before you come. An open invitation."
        },
        "SOFT+UPPER": {
          "ses": "refinement",
          "metin": "Even as one of your softer areas, this is solid — refinement territory. The fine adjustments happen in rooms; our live workshop is the place, whenever you like."
        },
        "SOFT+MIDDLE": {
          "ses": "open-door",
          "metin": "One of your working edges — and the one edge no module can reach alone, because collaboration grows only in rooms, with real partners. So the door here is a real room: our live workshop, where this is exactly what we work on together. Your type report's recommendations will tell you what to bring. The invitation stands."
        },
        "SOFT+LOWER": {
          "ses": "open-door, fullest",
          "metin": "One of your working edges — and it deserves the most honest sentence in this report: collaboration cannot be built alone, and that is not a flaw in you, it is the nature of the skill. It grows in rooms, with people, in an atmosphere safe enough to risk in. That is precisely what our live workshop is for — a room built for this — and your type report's recommendations add the personal map. Your strong ground carries you while you build, the workshop invitation stands open, and individual coaching with us is always available too."
        }
      }
    }
  ],
  "page5": {
    "renderNotu": [
      "Render order: header → teaching block → band block (by D9's own band, same boundaries) → [reflective line ONLY if the coach-side gap flag is on] → building block. The gap flag itself, its direction, and its size are never rendered."
    ],
    "header": "Craft Confidence — a different kind of measure",
    "teachingBlock": "Everything else in this report asked about skills. This page asks about something different: what you believe about your skills. And here is the most useful thing performance psychology has to say about it — confidence is not a personality trait you either have or lack. It is built, and it has four known sources: experiences of mastering things (the biggest one), watching people like you succeed, the voices around you, and how you read your own body when the stakes rise — that racing heart can be read as fear or as readiness, and the reading is trainable. Research on performers consistently places this kind of self-belief among the strongest psychological ingredients of performance. Which means this page is not a verdict either. It is a construction site.",
    "bandlar": {
      "UPPER": "Your confidence read is high: you trust your preparation, you recover, you feel ready for bigger rooms. That belief is fuel — protect it by keeping it fed with real mastery: challenges just beyond your current reach, taken and met. That is how high confidence stays honest.",
      "MIDDLE": "Your confidence read sits in the workable middle: real trust in some rooms, real doubt in others. That is the most common shape there is, and the most buildable — each of the four sources above is a place it can grow.",
      "LOWER": "Your confidence read came out on the quieter side — and if you take one thing from this page, take this: that is a reading of your beliefs, not of your ability. The two are different things, built by different means. Confidence grows from its four sources, starting with small mastered challenges, and it grows at any age and any career stage. This is the single most buildable number in your whole profile."
    },
    "reflectiveLine": "One quiet observation: your confidence and your view of your own skills tell slightly different stories in this profile. There is nothing wrong in that — but it is usually a conversation worth having, and it is exactly the kind of conversation coaching is for.",
    "buildingBlock": "Where confidence gets built around here: challenges sized just past your reach (mastery, the strongest source); your own trajectory in this app — every retake that shows growth is mastery evidence in your own handwriting; and the Regulation & Performance Strategies module, which trains the self-talk and the body-reading directly. And as everywhere in this app: individual coaching is always available if you'd like it."
  },
  "page6": {
    "header": "Where this profile sits in your journey",
    "experienceContext": "One last frame before you close this report. You told us where you are in your journey: {experience_band}. Hold your profile in that light — a profile at year two and a profile at year fifteen are different documents, and neither is better. Yours describes an actor at your point on the road, and that is the only fair way to read it.",
    "trajectoryInvitation": "This profile is also a beginning: your first data point. You will retake this scale — once a season, or before and after a period of focused work — and each time, your trajectory will draw itself on the profile page: the same nine bars, layered over time, in your own hand. Watching a bar move because of work you did is one of the best feelings this app can give you. We built it for that.",
    "standingOffer": "And the standing offer, which is always true no matter what any page of this report says: individual coaching with us is always available if you'd like it — to sharpen a strength, to work an edge, or simply to talk this profile through with someone who reads them every day.",
    "signOff": "Warmly, Filiz Kaya Ataklı"
  },
  "coachRenderSpec": [
    "Same data, second view, facilitator role only (RLS read policy per the schema review — the coach render is a VIEW, never a second data store). Contents: the actor report verbatim, plus a working layer per domain: full item-level responses with reverse items recoded and any reverse-item inconsistency noted as a data-quality signal (never as accusation); work-target lines generated from the two lowest-scoring items of each EDGE-set domain, template: “Lowest items here: {item stems}. The work likely begins at this facet.”; the D9 gap value and direction with the overconfidence / impostor framing from the battery's team notes, framed as a coaching conversation; the grid values per domain (rank set, band, hedge status) so the coach can see why the actor's report says what it says; and the full routing map including elite tracks. Standing header: working document for the coaching relationship — never shown raw to the actor."
  ],
  "notesVersion": [
    "**Citation discipline:** actor-facing copy above deliberately names no researchers and no studies (“performance psychology consistently finds…” is the ceiling) — the named research lives in the Report Specification and enters app copy only after the verified-reference pass.",
    "**Pending items in this pack:** the profile visual design (Beyti, per §2 spec — bars, no numbers); Turkish version after Filiz locks this English master, terminology per the approved glossary. Band boundaries, rank rules, and the gap threshold are locked at the v0.1 values from the approved specification; any change gets a dated record.",
    "*v0.2 — 9 July 2026. Approval flow: Filiz → Beyti → app users. Filiz's further edits return as v0.3; publish only a version carrying her approval.*"
  ]
};
