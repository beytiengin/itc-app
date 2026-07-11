// =====================================================================
// COACH CORE REPORT — Specification & Content Pack v0.5 (ITC)
// Kaynak: Coach_Core_Report_Spec_Pack_v0_5.docx +
//         SAMPLE_Coach_Core_Report_Deniz_v0_5.docx (safeguard blokları,
//         frame satırı — verbatim) · Filiz Kaya Ataklı · 9 Tem 2026
//
// NE: Aynı çekirdek verinin İKİNCİ GÖRÜNÜMÜ — facilitator'a RLS ile
//     açılır; AKTÖRE ASLA GÖSTERİLMEZ (ne palet, ne sayılar, ne bu sayfa).
//     Koç tarafında sayı + madde kökü render etmek serbest ve amaçlıdır.
// ERİŞİM (v1, Beyti onayı 10 Tem 2026): tek facilitator (Filiz) + Beyti
//     admin; atama yok. koc_rolleri tablosu + facilitator SELECT policy.
// FAZ i KAPSAMI: A–E montaj (saklanan profillerden) + standing header +
//     16 koçluk bloğu + ledger + open/closed + safeguard'lar (eldeki 3).
//     FAZ i ÜRETMEZ: F thread'leri (üretim kuralı §8'de),
//     Coach Library görünümü (bank içeriği
//     teslim edilmedi), ← tarzı çapraz-desen yorumları (kural mı kalem
//     mi — Filiz'de).
// KURAL: İçerik verbatim'dir; her düzeltme Filiz'den v0.6 olarak döner.
// KURAL: 'AJAR'/'CLOSED' sözlüğü ve tüm bandlar KOÇ-TARAFI-YALNIZ —
//     aktör tarafına sızarsa strengths-only yasası kırılır.
// DOĞRULAMA İMZASI: ITC-COACHRAPOR-PACK-V05-20260710
// =====================================================================

export const coachRapor = {
  "meta": {
    "baslik": "Coach Core Report",
    "paket": "COACH CORE REPORT — Specification & Content Pack",
    "surum": "v0.5",
    "yazar": "Filiz Kaya Ataklı with the team",
    "erisim": "Karar (Beyti, 10 Tem 2026): v1 erişim modeli = tek facilitator (Filiz) + Beyti admin; aktör↔koç ataması yok. RLS: koc_rolleri tablosu."
  },
  "standingHeader": "Working document for the coaching relationship — never shown raw to the actor. Self-report data; bands are interpretive aids, not norms; no cut-offs exist in v0.x. Clinical judgment stays with the facilitator.",
  "orientation": "This is your working document for one actor. It holds everything the core path measured — including everything the actor's own reports deliberately do not show: the full emotional palette, the numbers, the bands, the flags, and the reasoning behind every sentence their reports contain. That asymmetry is the method: the actor gets a working instrument; you get the diagnostic that shaped it. Two rules follow. First, nothing here is a verdict — every number is a self-report read through our bands, every flag is a conversation starter, and clinical judgment stays with you, never with the tool. Second, this document is never shown to the actor — not the palette, not the numbers, not this page. What the actor learns from it, they learn through your coaching, in your words, at the right moment.",
  "A": {
    "orientationTemplate": "{name}, {age}, based in {city}. {experience_band} of acting, mostly in {areas}; trained at {training_summary}; educated in {education_field}. Came to us saying, in their own words: “{aspiration_verbatim}”.",
    "coachPrompt": "Read their own words again before every session — the aspiration paragraph is the contract. Everything in this document is in service of the sentence they wrote when they arrived; when a coaching season loses its way, that sentence is where the way is found.",
    "frameKalip": "Frame: read everything below in the light of where this actor is on the road: {experience_band}. The same score means different things at year one and year fifteen; this document never compares actors across bands.",
    "frameKaynak": "SAMPLE_Coach_Core_Report_Deniz_v0_5 (spec: 'frame line render always' — metin örnekten verbatim)",
    "intakeEslesme": {
      "not": "Intake v0.2 soru no eşlemesi. DİKKAT: intake'te aspiration serbest-metin sorusu YOK — {aspiration_verbatim} boş kalır ve spec kuralı gereği cümle ATLANIR ('empty fields omitted, never guessed'). Filiz bayrağı: aspiration hangi soruya bağlanacak / intake'e soru mu eklenecek (tarihli karar).",
      "name": 1,
      "city": 3,
      "dogum": 4,
      "education_field": 6,
      "training_summary": 7,
      "experience_band": 8,
      "areas": 9,
      "aspiration_verbatim": null
    }
  },
  "B": {
    "boundaryLine": "These doors open the actor's process and the character's material — never the actor's wounds. The mining prohibition binds the coaching room exactly as it binds the app: we reach the inner life that serves the work, and we knock, we don't excavate.",
    "komsuKalip": "Nearest neighbour: {komsu_ad} — the first alternative to explore if the report isn't landing.",
    "komsuKaynak": "Deniz örneği (ilk yarı verbatim). Dar-marj kuyruğu ('with a margin of X on the E–I axis, hold the … side of the hypothesis especially lightly') harf→kelime haritası gerektirir — İCAT EDİLMEDİ, Filiz bayrağında; Faz i marjları tablo olarak render eder.",
    "bloklar": {
      "ENFP": {
        "doorwayAd": "The Spark",
        "intro": "Works on enthusiasm and possibility — the engine is what-if.",
        "reaching": "Bring energy and riff with them; offer options, never orders. Structure lands only when framed as a game; deadlines announced as walls will be climbed over or quietly resented — make them finish lines instead. They discover by talking: let them think out loud and mine what falls out.",
        "doors": "What-if questions and connections: “Who does this character remind you of? What if the scene were inside out?” Their inner process opens through imagination, not introspection — ask about the character's possibilities and the actor's own material arrives riding on them.",
        "enhancers": "Help them finish: narrow the options late in the process and get one committed choice per session. Rotate exercises before novelty fades. Their doorway report's remedies (focus as a container, one idea followed all the way down) are your shared vocabulary — assign from it."
      },
      "ENTP": {
        "doorwayAd": "The Prism",
        "intro": "Argues its way to the truth — debate is engagement, not resistance.",
        "reaching": "Let them challenge you and enjoy it; never pull rank on an argument you can win on merit. Wit is rapport. A note survives only if it survives cross-examination — so bring reasons, not authority.",
        "doors": "Contradictions and reframes: “Argue the opposite reading. What doesn't hold together in this character?” They reach their inner material by turning a thing over until it surprises them — give them something worth turning.",
        "enhancers": "Channel the breadth: many readings, then one deep line per role, chosen and defended. Schedule the feeling pass after the analysis pass — it won't happen unprompted. Closing discipline: end sessions with a decision, spoken aloud."
      },
      "ENFJ": {
        "doorwayAd": "The Bridge",
        "intro": "Grows toward you — the relationship is the medium of the coaching.",
        "reaching": "Warmth first, purpose named early: they work best when the session is going somewhere and the two of you are going there together. Watch for over-serving — they will tend the session, read your needs, and give you the answer that keeps harmony. Ask for their verdict before you give yours, every time.",
        "doors": "Through the character's people: “Who does your character love, answer to, perform for?” Their inner life opens relationally — they will say to a person what they'd never write in a notebook. The becoming-question (“who is this character trying to be, and for whom?”) reaches their deepest material.",
        "enhancers": "Their own read first, spoken before the room's. Assign the ugly on purpose: unresolved conflict scenes, unlikeable beats, the honest note delivered whole. Point their developer's eye at themselves — their own becoming on the schedule, treated as a commitment to someone they won't let down.",
        "auditFlag": "The Bridge raporunun ITEM AUDIT PENDING kapısını miras alır (§8)."
      },
      "ENTJ": {
        "doorwayAd": "The Compass",
        "intro": "Works toward outcome — competence earns you the room.",
        "reaching": "Be direct, prepared, and brief; agree the goal at the top of the session and report progress against it. Respect their time visibly. Push-back is fine — delivered as strategy, not sentiment.",
        "doors": "Through objectives: “What is the character's plan? What does this moment cost the plan?” Feeling enters as stakes and cost — frame emotional work as the harder skill to master and their drive will aim itself at it.",
        "enhancers": "Schedule what they'd never choose: unmanaged rehearsal, wandering, being-not-doing drills — framed as training the muscle that wins the long game. Let partners' offers alter the plan and debrief what it bought them. Their report's 'lead less, feel more' line is the season's throughline."
      },
      "INFP": {
        "doorwayAd": "The Wellspring",
        "intro": "Works from felt truth — authenticity is the price of entry.",
        "reaching": "Gentle, real, one-on-one; they read performance in a coach instantly and close. Never mock or hurry a value. Hard truths land only wrapped in genuine care — and they must still be told; this actor forgives honesty, not management.",
        "doors": "Meaning first: “What does the character believe? What would she never betray?” Private writing before speaking — give them the page, then the conversation. Imagery over instruction: a picture reaches them where a directive bounces.",
        "enhancers": "Externalize: their inner truth is rich and under-broadcast — body and voice work so what they feel actually reads. Deadlines held gently but held. Celebrate finishing as loudly as meaning; their report's shipping-remedies are the assignments."
      },
      "INTP": {
        "doorwayAd": "The Question",
        "intro": "Works by understanding — give a real problem and real room.",
        "reaching": "Minimal ceremony, maximum substance. Don't rush their arrival at their own understanding; the pause is the work. Precision is respect — vague notes are noise to them.",
        "doors": "The puzzle: “What doesn't add up in this character?” They enter their inner material through what puzzles them — follow the puzzlement, it's their talent working. Models first, body after, questions rather than prescriptions throughout.",
        "enhancers": "Put feeling back in the equation — literally frame it as the dropped variable and they'll re-derive its necessity themselves. Get drafts out loud early against the private-perfection loop. Social rehearsal in measured doses, debriefed analytically."
      },
      "INFJ": {
        "doorwayAd": "The Lantern",
        "intro": "Sees the whole early, works inward — trust builds slowly, then completely.",
        "reaching": "Quiet depth, one-to-one, no ambush shares. Ask, then wait — their first answer is the polished one; the real one comes third. Once trust is established you can say almost anything; before it, almost nothing lands.",
        "doors": "“Who is this character, really, beneath?” They already have a vision — your job is to ask for it, then test it. Journaling between sessions; the page is their rehearsal room. Meaning-questions open them; logistics-questions close them.",
        "enhancers": "Reality-check the vision against the text — lovingly, line by line. Bring the body in early; they live high and the work needs ground. Protect them from absorbing the room — the borrowed-weather practice from their report is a standing assignment."
      },
      "INTJ": {
        "doorwayAd": "The Map",
        "intro": "Strategy first — autonomy is oxygen.",
        "reaching": "Competence, long view, no micromanagement. Frame notes as problems to solve, not corrections to accept. Their independence is not distance; it's their working condition.",
        "doors": "The character's system: goals, plan, blind spot — they will map an inner life brilliantly if you ask for the map. Then the scheduled pass that isn't analysis: “what does she feel, in the body, right now?” — their report's own instruction, assigned as strategy.",
        "enhancers": "The deliberate emotional pass, every role, non-negotiable and framed as the whole game. Improvisation sold as data-gathering. Partners reframed as variables that improve the model — then watch them start to enjoy it."
      },
      "ESFP": {
        "doorwayAd": "The Pulse",
        "intro": "Works live, through the senses — the floor is the classroom.",
        "reaching": "On their feet, now; theory brief and after. Fun is fuel, not a distraction from rigor — build the rigor into games. Long table-talk drains exactly what you're trying to coach.",
        "doors": "Through doing: walk the character, taste the room, play the moment — insight arrives mid-motion. People-watching assignments; their memory for how real people are is a working instrument. Emotion reached through the senses: the smell of the kitchen before the grief in it.",
        "enhancers": "Analysis in motion — talk structure while they move and it lands. Stillness as a skill challenge, built in small doses. Structure delivered as choreography, never as paperwork."
      },
      "ESTP": {
        "doorwayAd": "The Arrow",
        "intro": "Learns by doing, reads the room mid-flight — challenge is the invitation.",
        "reaching": "Action first, notes brief, pace quick. Frame growth as challenge and they're in; frame it as remediation and they're gone. Respect their speed — it's perception, not impatience.",
        "doors": "Stakes and pressure: “What does the character do when the plan breaks?” Physical problems open their inner material — give the feeling a task and they'll find the feeling. Risk, framed safely, is their doorway inward.",
        "enhancers": "Slow-burn scenes as the elite skill. Feeling named after the action, in the debrief — that's when their inner life is available in words. Preparation sold as tactical advantage, because for them it is."
      },
      "ESFJ": {
        "doorwayAd": "The Hearth",
        "intro": "Grows in safe, warm, well-run rooms — reliability is their love language.",
        "reaching": "Clear expectations, visible appreciation, no ambush. Changes signaled early. In conflict, name the common ground first — then hold them in the disagreement long enough to finish it.",
        "doors": "Real people: “Who do you know like this character?” Their inner material is filed under actual humans and concrete detail — duties, kitchens, gestures. Ask for the remembered particular and the feeling arrives attached to it.",
        "enhancers": "Their own needs on the table, practiced as a skill (“let me think about it”). Conflict tolerance in graded doses. Guard their weather — the yours-vs-borrowed feelings check from their report is a session opener."
      },
      "ESTJ": {
        "doorwayAd": "The Scaffold",
        "intro": "Works to standard and delivers — organization is care, in their language.",
        "reaching": "Organized sessions, concrete notes, goals agreed and met. Respect their competence out loud. Truth is welcome; cushion the delivery, not the content.",
        "doors": "Role and responsibility: “What is the character's job in this story — and where is she failing at it?” Facts first, then deliberately past them — their report's own instruction. Intangibles framed as tasks get done; framed as vibes get skipped.",
        "enhancers": "The emotional layer named as the job itself, on the schedule. Delivery-softening drills for the room's sake. One wandering rehearsal per process, planned — contingency training for the plan-proof parts of art."
      },
      "ISFP": {
        "doorwayAd": "The Still Water",
        "intro": "Private depth on its own compass — show, don't push.",
        "reaching": "Gentle and unforced; space after notes — they process in private and return changed. Never expose them mid-process or ask them to perform their thinking. Demonstrate rather than lecture.",
        "doors": "The senses and the concretely beautiful: an object, a texture, a piece of music that is the character. Values reached through specifics, never abstractions — “what would she refuse to sell?” beats “what are her values?” Quiet doing opens them; interrogation closes them.",
        "enhancers": "Externalize choices so the deep work becomes visible — their richness under-broadcasts. Deadlines held gently but held. Practice the spoken verdict: their inner compass is superb and almost silent; the room needs to hear it sometimes."
      },
      "ISTP": {
        "doorwayAd": "The Workbench",
        "intro": "Understands with the hands — words are the last tool, not the first.",
        "reaching": "Minimal talk, real tasks, full autonomy; hovering reads as distrust. Notes as engineering problems. Silence is engagement — don't fill it.",
        "doors": "Mechanics: “How does the character do things — lock a door, hold a knife, fix what's broken?” Objects and physical score open everything. Feeling reached through the body is native ground — their report says the doorway to feeling runs straight through the body they already trust; coach along that line.",
        "enhancers": "The body-first feeling pass as standard practice. Commitment before fully 'ready' — they calibrate forever; make earlier commitment the drill. Partner work framed as machinery to master, and it becomes exactly that."
      },
      "ISFJ": {
        "doorwayAd": "The Harbor",
        "intro": "Steady, devoted, detail-rich — safety is the precondition of risk.",
        "reaching": "Reliability both ways: keep your word to the minute. Appreciation specific and regular — they run on being useful and rarely ask for the fuel. No surprises; changes explained.",
        "doors": "Memory: they retain how real people actually are — ask for the remembered detail and build from it. The character's duties and loyalties open the inner material: “who does she take care of, and who takes care of her?” That second clause is where their own depths surface.",
        "enhancers": "Their needs voiced as practice, not luxury. Risk in small, safe increments — each one banked and named. Guard against over-carrying the company; their first responsibility on any job is the character, and they need permission to believe it."
      },
      "ISTJ": {
        "doorwayAd": "The Cornerstone",
        "intro": "Solid ground first — respect the process and it will move mountains for you.",
        "reaching": "Prepared, precise, consistent; changes come with reasons. Their thoroughness is not slowness — it's how the reliability gets built. Honor the ground they need before the leap.",
        "doors": "Facts and particulars first — where the character lives, works, comes from — then deliberately past the facts into the person: their report's own instruction, and yours to enforce. The one pass that isn't fact-gathering (“what does she feel, in the body, right now?”) is where their inner material lives.",
        "enhancers": "Feeling on the checklist — literally; a checklist is a promise they keep. Flexibility drills framed as contingency planning. Trust the delivery absolutely, and stretch the range deliberately: one out-of-lane role element per season."
      }
    }
  },
  "C": {
    "c1Not": "C.1 = onaylı APS coach içeriği değişmeden: grid (sıra/band/hedge), D9 gap + yön + impostor/overconfidence çerçevesi (koçluk konuşması olarak), rota haritası, ters-madde tutarlılığı veri-kalite sinyali. Koç tarafında sayı ve madde kökü render etmek serbest ve amaçlıdır; hiçbiri aktöre gitmez.",
    "ledger": {
      "frame": "The bars summarize; the items are the ground truth underneath them. A domain can sit mid-band while hiding one ● and one ○ — and that pair, not the average, is where the coaching is. Strong items tell you what to build on and what to assign first (early wins live here). Special-care items tell you where the work begins — and read them as the actor's own honest report of where it is hardest, which took some courage to give you.",
      "strongLineKalip": "● {domain}: “{item_stem}” — {rating}/5{reverse_tag}",
      "careLineKalip": "○ {domain}: “{item_stem}” — {rating}/5{reverse_tag}",
      "careCloser": "Work-target logic, unchanged from the APS pack: within each EDGE-set domain, the two lowest items above are where the work likely begins. Special-care items in TOP-set domains deserve a second look — a soft spot inside a strength is often the fastest, most motivating fix in the whole profile.",
      "esikler": {
        "strongAlt": 4,
        "doluIsaret": 5,
        "careUst": 2,
        "bosIsaret": 1,
        "durum": "ONAYLI — Karar Kaydı 10 Tem 2026: STRONG = 4–5 (● 5) · SPECIAL CARE = 1–2 (○ 1). 3'ler ledger'da render edilmez."
      }
    }
  },
  "D": {
    "d1Not": "D.1 = v0.1/v0.2 içerikleri değişmeden: 7×4 faset grid'i madde yanıtlarıyla, sistem skorları (sıra/band/hedge), dört zanaat ortalaması, Exit Capacity + Reach, meta-emotion + bodily awareness, geri çekilen M3 aktör-kopyası koçun yorum dili olarak, koşullu bloklar (role-hangover çerçevesi + klinik devir cümlesi; Desire check-in logu; konfor envanteri + hissetme-gösterme farkı + kişisel deste).",
    "d2": {
      "frame": "Seven doors, read one by one. Open systems are casting range and routing material — exercises travel through them. Closed systems are construction projects, never verdicts: they open from the outside in, through the body and through designed pillar events, and “closed” here means “not yet built,” nothing more. Watch the facet exceptions above all: open-for-reach-closed-for-exit is the pattern that routes to Module 9, and closed-for-reach-open-for-vividness suggests the door sticks at the threshold, not inside.",
      "headerKalip": "{system_name} — {OPEN | AJAR | CLOSED} ({system_mean}/5{hedge_note}){facet_exception_note, e.g. “; open for reach, closed for clean exit”}",
      "itemKalip": "{facet_name}: “{item_stem}” — {rating}/5",
      "closedCloser": "For every closed door above, the coaching path is the same and it is always construction: the character's version of this emotion, designed and owned by the character, entered through the body and the actor's strongest imagery channel (Module 4, if taken). The one thing a closed door never means is a locked person.",
      "esikler": {
        "openEsik": 3.75,
        "closedAlti": 2.75,
        "durum": "Band-hizalı. 'AJAR' terimi ONAYLI — Karar Kaydı 10 Tem 2026; yalnız koç tarafı sözlüğü, aktöre asla."
      },
      "fasetIstisnaKurali": "ONAYLI — Karar Kaydı 10 Tem 2026 (sistem satırında faset düzeyi açık/kapalı). Uygulama: reach ≥4 VE clean exit ≤2 → 'open for reach, closed for clean exit' (M9-çifti); diğer ≤2 fasetler → 'closed for {faset}'; sistem CLOSED ise not düşülmez (bilgi zaten bantta — Deniz örneği Anger). İki örnek notu birebir üretir."
    },
    "roleHangover": {
      "exitAlti": 2.75,
      "reachEsik": 3.75,
      "durum": "ONAYLI — Karar Kaydı 10 Tem 2026: exit craft ort. < 2.75 VE reach craft ort. ≥ 3.75 → bayrak AÇIK; kapalıysa bölüm hiç render edilmez. Aktöre görünür sonucu YOK (yasa)."
    }
  },
  "E": {
    "e1Not": "E.1: aktörün Core Report'u teslim edildiği haliyle (link), giriş seçimi skorlarıyla, render edilen doorway bölümü, rota listesi, görüntüleme-sonrası check-in yanıtı (yanıt yakalama mekaniği Filiz kararı bekliyor — o gelene dek 'yanıt kaydı yok' satırı).",
    "e2": {
      "safeguardFrame": "These are the questions the actor's set deliberately does not contain — the ones their working style tends to rush past, held back because naming an edge names the edge. They are yours, not theirs: never handed over as a list, never shown as a page. Bring them into the room one at a time, in your own words, at the moment the work makes them natural — woven into an exercise, a rehearsal, a conversation. Asked that way, they are craft; handed over as a list, they become a diagnosis. The boundary binds here as everywhere: every question builds the character's material, never the actor's wounds.",
      "libraryLine": "For role-driven preparation, the full question bank — every domain and every colour, both voices — is in your library; pull any set the role demands, regardless of this profile.",
      "secimKurali": "Part Two seçimi: APS EDGE seti alanları + M3'ün en düşük 2 sistemi (spec §6, Beyti notu). Anahtarlar prep_q_*, voice=safeguard.",
      "safeguards_KALDIRILDI": "Safeguard blokları Question Bank'e taşındı (tek kaynak, ITC-QUESTIONBANK-V01). Motor questionBank.domain/sistem[...].safeguard okur; seçim spec §6 (EDGE alanlar + en düşük 2 sistem). Bkz data/kalibrasyon/question-bank.js."
    }
  },
  "F": {
    "grammarKalip": "Worth exploring together: {observation}. A question for the room, not a conclusion: {question}.",
    "durum": "KURAL + UYGULANDI — Karar Kaydı 10 Tem 2026 + Checkin/F Templates v1.0 (ITC-CHECKINF-V10): app üretir, en çok 5, sabit gramer, öncelik T1→T5; koç serbest alanı YOK. 5 şablon + natural-ground haritası data/kalibrasyon/checkin-f.js; motor fThreadleriUret."
  },
  "notlar": [
    "COACH LIBRARY (karar c, 9 Tem 2026): Question Bank koç çalışma alanında tek kopya, tüm facilitator'lara aynı, prep_q_* anahtarlarından; hiçbir şey iki kez saklanmaz — E.2 bank'tan SEÇER, kütüphane bank'ın TAMAMIDIR. Bank aktör tarafında bütünüyle PARKED. (Faz i: bank içeriği elimizde olmadığından kütüphane görünümü bank teslimatıyla gelir.)",
    "Madde kökleri enstrüman kaynak-of-truth'undan anahtarla render edilir (batarya master) — asla yeniden yazılmaz. Tüm maddeler Filiz'in özgün enstrümanları; team-side render'da telif kısıtı yok.",
    "Ledger ve Open/Closed görünümleri okuma anında aynı append-only yanıtlardan monte edilir; gösterilen puanlar ters-kodlama SONRASI, (R) etiketi şeffaflığı korur.",
    "Retake: Ledger ve Open/Closed her zaman SON uygulamayı gösterir, bir öncekine karşı hareket işaretleriyle (↑↓ madde/sistem) — ONAYLI + UYGULANDI (Karar Kaydı 10 Tem 2026, kuyruk ③; ITC-RELAY-UPDOWN-20260710): madde KATEGORİ geçişi (CARE↔nötr↔STRONG) + sistem SINIF geçişi (CLOSED↔AJAR↔OPEN); yalnız onceki uygulama varsa görünür.",
    "Tek görünüm; RLS facilitator policy; toplam wellbeing skoru ASLA; Modül 9 bu belgenin dışında; export varsayılan kapalı."
  ],
  "bayraklar": [
    "ÇÖZÜLDÜ (Karar Kaydı 10 Tem 2026): bank kapsamı (aktör-side PARKED kalıcı; koç-side tam görünür) · ledger eşikleri · 'AJAR' · ↑↓ işaretleri · 16 koçluk bloğu (koç mimarisi onayıyla) · M9 belge dışında · F = KURAL · role-hangover eşikleri.",
    "BEKLİYOR (Karar Kaydı 'bekleyenler'): KVKK/GDPR onam metni (facilitator erişimi + intake serbest metni + saklanan check-in yanıtları dahil) · Emotion Exploration aracının gerçek adı · intake aspiration alanı doğrulaması (bizim cevabımız: v0.2'de uygun alan YOK — Q14–18 farklı sorular; yeni madde metni Filiz'den).",
    "BEKLİYOR (kayıtta adressiz — Filiz'e ayrıca): B bölümü dar-marj kuyruğu için harf→kelime haritası (örn. E→extraversion) · F üretim şablonları ({observation}/{question} kalıpları) · Deniz örneği sürüm satırı tutarsızlığı (v0.3/v0.5) tek satır düzeltme.",
    "İÇERİK TESLİMATI BEKLENEN DOSYALAR: Question Bank v0.1 (kapsamı onaylı, belge elde değil) · The Bridge v0.2 (onaylı, dosya elde değil — eldeki v0.1) · M3 Report Content Pack v0.1 (koç render + Emotion Exploration kaynağı olarak saklı, elde değil).",
  ]
};
