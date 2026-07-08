// =====================================================================
// ITC — Type Lens Reports · 16/16 TAM SET
// (Kaynak marka "The Character Design" — Filiz'in Claude'undaki ad; Karar 64 §10
//  kalıcı talimatıyla oyuncu-yüzü metinlerde ITC'ye normalize edilir.)
// Instrument author: Filiz Kaya Ataklı
// ENFP v0.2 (master şablon) · ESFJ v0.2 · 5 × v0.1 rewrite · 9 × v0.1 new
//
// KURAL: İçerik verbatim'dir — kaynaklar: The_<TYPE>_v0_*.docx (16 belge).
//        Metinlerde HİÇBİR değişiklik yapılmaz; düzeltme yalnız Filiz'den
//        gelen yeni sürümle olur.
// KURAL: `teamNote` alanları KATILIMCIYA ASLA gösterilmez. Rapor gövdesi
//        (battery teamNotes'un aksine) OYUNCUYA DÖNÜK içeriktir.
// KURAL: Display-name slotu bilinçli boştur — rapor yalnız dört harf
//        üzerinden çalışır; tip adı/etiketi asla render edilmez.
// KURAL: Nearest neighbour ASLA oyuncu raporunda gösterilmez; app
//        hesaplar ve saklar (en dar marjlı eksen çevrilir, marjıyla) —
//        kolaylaştırıcı aracıdır.
// KURAL (Karar — Tip Soruları Konumlandırması, Filiz onaylı / B):
//        `sorular` setleri serbest keşif katmanında (Kulis) yaşar;
//        travma-duyarlı bağlamda render katmanı şablon F ailesinden
//        koruyucu çerçeve notunu basar — veriye metin gömülmez.
// NOT: Metin içi **kalın** vurgular Filiz'in orijinal vurgularıdır;
//        render katmanı işler. `vurgu: true` maddeler italik yönerge
//        bloklarıdır; karakter yürüyüşü yönergesi tipe göre uyarlanmıştır
//        ("Now stop planning/analyzing/... and walk for a while...").
// DOĞRULAMA İMZASI: ITC-TIPRAPOR-16OF16-20260708
// =====================================================================

export const tipRaporlari = {
  meta: {
    baslik: "INSIDE THE CHARACTER — Type Lens Report",
    kaynakModul: "type_lens",
    yazar: "Filiz Kaya Ataklı",
    mevcut: ["ENFP", "ENFJ", "ENTJ", "ENTP", "ESFJ", "ESFP", "ESTJ", "ESTP", "INFJ", "INFP", "INTJ", "INTP", "ISFJ", "ISFP", "ISTJ", "ISTP"],
    bekleyen: [],
  },

  raporlar: {
    "ENFP": {
      "kod": "ENFP",
      "surum": "v0.2 (nearest neighbour moved team-side; item-harvest additions)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: the display-name slot for this type is deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are warm, enthusiastic, imaginative, spontaneous, curious, expressive, playful with language, quick to connect — with ideas and with people alike.",
        "If we had to say it in one line: where others see facts, you see possibilities.",
        "A script, for you, is never only what's on the page. The moment you read it, it starts sprouting — this line connects to that childhood, that silence could mean three different things, and what if the whole scene were turned inside out? Ideas don't come to you one at a time; they arrive in swarms. You make connections faster than most people around you can follow — between the character and a stranger you watched on the bus, between a scene and a song, between two moments the writer never meant to rhyme. This is your engine, and it rarely turns off.",
        "People are your favorite mystery. You're genuinely curious about what moves someone — not their data, their story. You read between lines, sense the mood under the words, and you can find something to identify with in almost anyone you meet. That's a rare and precious thing for an actor: characters are not puzzles you solve from outside, they're people you befriend.",
        "You need your work to feel alive. Repetition, fine print, and routine drain you fast; what feeds you is the new, the meaningful, the emotionally real. You'd rather follow inspiration than a schedule, and your personal freedom — the room to go where the idea leads — matters to you more than most structures anyone could offer you in exchange.",
        "In the room, you tend to trust the moment: improvising, riffing, finding it out loud. Words come easily to you, and warmth even more easily. When you're lit up, the whole room usually catches it."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "Possibility-finding.",
          "metin": "Give you one beat and you'll return with ten readings of it. You refuse to believe the first obvious way is the only way, and you're usually right. Where a scene is stuck, you're the one who asks “what if…?” — and one of your what-ifs tends to open the door. For character work this is gold: where the script is silent, you don't freeze, you generate."
        },
        {
          "baslik": "Connection-making.",
          "metin": "Your imagination works in links: metaphors, echoes, patterns, resonances. You can connect your character to a person you once observed, a piece of music, a memory of a place — and out of those connections a living, breathing someone starts to form. Others build characters brick by brick; you grow them like a web."
        },
        {
          "baslik": "Contagious fire.",
          "metin": "Your enthusiasm doesn't stay inside you — it spreads. When you believe in an idea, a scene, a project, the people around you start believing too. You don't command a room the way a director does; you ignite it. In a tired week of rehearsals, that spark is sometimes the most valuable thing anyone brings through the door."
        },
        {
          "baslik": "Verbal play.",
          "metin": "Language is a toy and a tool in your hands — wit, timing, stories, the exact word arriving at the exact moment. This makes you a natural improviser and a pleasure to write for. It also means you often discover what you think by saying it, which is why the rehearsal room, not the desk, is where your best ideas tend to be born."
        },
        {
          "baslik": "Alive in the unplanned.",
          "metin": "When something unexpected happens mid-performance — a dropped prop, a partner's new choice, a line arriving wrong — your instinct isn't to contain it but to use it. For you a surprise is a gift the moment hands you, and some of your best work is born exactly there, in the second nobody rehearsed. Many actors spend years training toward what comes to you by wiring."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours:",
      "obstacles": [
        {
          "baslik": "A thousand beginnings, fewer endings.",
          "metin": "The same engine that produces ten ideas an hour makes it hard to stay with one until it's finished. You run on the fuel of first excitement, and when that fuel burns off — somewhere in the unglamorous middle of the work — a newer, shinier idea is always waving at you. And let's be fair to you: your late starts are not laziness. Pressure is genuinely your fuel — you work hot and close to the deadline, work and play mixed together, and it often works. The risk is only what the last-minute fire has no time to cook: the deep layers, the detail, the second draft. Starting is your superpower; finishing is your discipline to build."
        },
        {
          "baslik": "Weather that fills the room.",
          "metin": "Your emotional expressiveness is a core part of who you are, and most of the time it's a gift. But your weather can be loud, and quieter colleagues — especially the more inward ones — can feel flooded by it. When you take up all the emotional space, you also lose access to what the quieter people in the room were about to give you."
        },
        {
          "baslik": "Hunger for the room's warmth.",
          "metin": "You want to be liked, and honestly, you usually are. But the wish for approval can tip you into performing for the room — talking more, listening less, trying a little too hard. In those moments your instincts, which are excellent, get outvoted by other people's applause."
        },
        {
          "baslik": "Reading between lines that are blank.",
          "metin": "Your gift for sensing what's hidden works beautifully — when something is actually hidden. When nothing is, the same gift starts manufacturing: a cold tone becomes a grudge, a short reply becomes rejection, a missing compliment becomes proof. Imagined motives can hurt real relationships, and yours is an imagination strong enough to build very convincing ghosts."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Protect the exploring phase of your work — it's where you create your difference. Ask the people you work with to hold off on “so which one is it?” until you've had room to generate. You'll converge; you just converge better after you've flown."
        },
        {
          "baslik": "Catch your ideas before they fly off.",
          "metin": "Your ideas are good — good enough to deserve a net. A notebook in your bag, voice notes on your phone, whatever fits your life: capture everything, sort later. An idea you didn't write down was a gift you didn't open."
        },
        {
          "baslik": "Finish one thing on purpose.",
          "metin": "Not everything — one thing. Each season, pick a single project or role-task and privately commit to carrying it to the very end, through the boring middle, past the newer shinier idea. Break it into small pieces so each piece can feel like a fresh start — that's how your engine likes to work. Every completed finish rewires the pattern a little."
        },
        {
          "baslik": "Look inside for the verdict.",
          "metin": "Enjoy the compliments — you've earned them — but don't let them steer. When you notice yourself performing for approval, come back to one question: what do I actually think is true here? Your inner reading of a scene is usually better than the room's early applause."
        },
        {
          "baslik": "Ask before you decode.",
          "metin": "When you sense a hidden motive, treat it as a hypothesis, not a finding — you of all people know the difference now. One honest question (“you seemed quiet today — everything okay between us?”) dissolves in ten seconds what your imagination would have built into a fortress by Thursday."
        },
        {
          "baslik": "Team up with finishers.",
          "metin": "You don't have to become a detail person; you have to be near one. Seek out the colleagues who love the fine print you skip, and let the partnership be honest: your sparks, their follow-through, everybody's show."
        }
      ],
      "finallySection": [
        "You've chosen a profession that runs on exactly what you have: imagination, empathy, spontaneity, verbal fluency, and the ability to find something of yourself in almost anyone. The way you naturally work — identifying with people, generating possibilities, improvising, connecting — is not something acting tolerates in you; it's something acting is made of. Hooray!",
        "And here's something worth knowing about yourself: what you love most is the making. Rehearsal, the search, the finding — that's your home, more than opening night, more than the final cut. This is a quiet superpower in a profession where the process is most of the life: you're built to enjoy the ninety percent that others merely endure on the way to the result. Protect that love; choose rooms where the search is respected.",
        "One thing to protect: meaning. You're the kind of artist whose flame is fed by believing in the work. Purely mechanical jobs won't kill you, but a long stretch of them will dim you — so keep at least part of your working life connected to what you actually care about. That's not a luxury for you; it's maintenance.",
        "Your best environments are warm, flexible, and varied — few rigid rules, room to try things, colleagues who enjoy the search as much as the result. You can absolutely work inside structure; you just shouldn't live your whole life there.",
        "About technique: you'll likely be drawn to inside-out ways of working — starting from the character's inner life and letting the outside follow. That suits you. But let's be precise about one thing, because it matters: **inside-out means building the character's inner life first.** The emotions you work with on stage are designed and owned by the character — constructed from the character's story, the character's memories, the character's wounds. It is never an invitation to dig up your own. You imagine your way in; you don't excavate. Your imagination is strong enough to build everything the role needs — that is, in fact, the whole point of it."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is imagination — connections, possibilities, stories. You don't need to collect every physical detail first; you need the right questions, and your imagination does the rest. Here is the set built for the way your mind works. Use it playfully — jump around, follow the heat.",
      "sorular": [
        {
          "metin": "What do we know about the character's present, past and future?"
        },
        {
          "metin": "In what ways might we understand her/him better?"
        },
        {
          "metin": "How else could we see her/him?"
        },
        {
          "metin": "What is the big picture? What is she/he doing, trying to accomplish, feel, be?"
        },
        {
          "metin": "What could we learn about this character if we could time-travel with them?"
        },
        {
          "metin": "— Earliest memory of my character?  ·  Happiest memory?  ·  Saddest memory?  ·  Where did she/he get most embarrassed?  ·  The biggest pain in my character's life?  ·  The biggest joy?  ·  What did she/he play as a child — which games, and why?  ·  How has her/his posture changed over time — at 5, 10, 15…?  ·  When and how did my character meet that person (the one who matters most now)?  ·  What feelings and sensations come in times of distress?",
          "vurgu": true
        },
        {
          "metin": "Which senses does this character use most? Are there any seeing, hearing or feeling deficits?"
        },
        {
          "metin": "What were her/his most common emotions? How did she/he express them?"
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships? Who are the people around her/him?"
        },
        {
          "metin": "Who does she/he get along with best — and worst?"
        },
        {
          "metin": "How does she/he feel about herself/himself?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his feelings and interactions throughout the day, and take notes."
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character. What does she/he feel?"
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How?"
        },
        {
          "metin": "Is there love in her/his life right now? What feelings and actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his life, feelings, body, and relationship patterns?"
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Walk for a while as the character. Notice your posture and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "How else could you see all this?"
        },
        {
          "metin": "What other time-travel would you like to take with your character?"
        },
        {
          "metin": "If you shift your perspective now — what else do you notice about your character?"
        },
        {
          "metin": "Can you imagine anything else?"
        },
        {
          "metin": "How would your favorite actor approach this character? What would she/he do with your character?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "ENFJ": {
      "kod": "ENFJ",
      "surum": "v0.1 (rewrite of Filiz's original sample; item-audit applied)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are warm, empathetic, responsible, sociable, optimistic, supportive, inspiring — a gatherer of people, a spotter of potential, an organizer of hope.",
        "If we had to say it in one line: you want to make the world a better place, with art.",
        "Your ambition is real, but it has never been only for yourself. You feel personally responsible for leaving people, rooms, and stories better than you found them — and you have the rare combination that makes this more than a wish: you sense what people are feeling, you see what they could become, and you know how to move them toward it. In any company you join, you soon find yourself — invited or not — tending the group's growth.",
        "You are the room's emotional barometer. The temperature of a rehearsal reaches you before anyone names it; other people's feelings arrive in your body almost as if they were your own. This is a genuine instrument — you read a scene partner, a director's mood, an audience, with an accuracy others have to work years for. It also means the room's weather is never quite outside you. Praise warms you deeply, criticism lands deep too, and you tend to feel the standard of the people around you — director, audience, partners — before you feel your own.",
        "Your ideas live out loud. They grow in conversation, in improvisation, in the middle of the room — you often discover what you think by saying it to someone. A character becomes real for you through people: playing scenes, getting reactions, talking it into shape.",
        "And here is the thing that surprises people who only know your warmth: you are an idealist with a calendar. Your imagination reads between the lines, follows hunches, builds the character's possible worlds — and then lands all of it on a plan. You decide the spine first and gather what fits it; you prepare early and steadily; your working script is marked, scheduled, systematized; and when a choice is made you feel relief — settled, ready to build on it. The vision is airborne; the construction is on rails."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "Seeing what people could become.",
          "metin": "You look at a colleague, a student, a scene partner — even a difficult one — and see the version of them that hasn't happened yet. And you can't help acting on it: encouraging, nudging, casting people in their best selves. In a company, this makes you a catalyst; around you, people tend to grow. It works on characters too: you read a role the way you read a person, with an eye for what they are reaching toward."
        },
        {
          "baslik": "Reading the room's weather.",
          "metin": "You register the group's temperature moment by moment — who has gone quiet, who is about to clash, who needs support before the crisis, not after. When you give notes, they arrive warm and cushioned; you mind how they land, and so they land. This is why ensembles knit together around you: someone is tending the invisible layer of the work, and it's you."
        },
        {
          "baslik": "Building with a spine.",
          "metin": "You decide what the character is about first, and then everything you gather has a home. You prepare early, you systematize, you close the research folder when you have what you need — and by opening night the character is built: locked, repeatable, reliable. In a profession full of brilliant improvisers who can't do it twice, your ability to deliver the same living performance on take one and take forty is quietly precious."
        },
        {
          "baslik": "Words that gather people.",
          "metin": "You speak to move, not to perform. You can put a vision into words that make other people want to build it with you — in a read-through, a rehearsal argument, a company meeting. You draw the quiet ones out, you translate between people who are talking past each other, and when a project needs everyone on board, you are usually the one who gets them there."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours:",
      "obstacles": [
        {
          "baslik": "Everyone's weather becomes yours.",
          "metin": "The barometer never switches off. You personally experience the feelings around you — which means a room full of tension, grief, or negativity doesn't just reach you, it moves in. You can become over-involved in other people's storms and walk out of a working day emotionally spent without having spent it on your own work. The same sensitivity that makes you precious to a company is the one that exhausts you."
        },
        {
          "baslik": "Your needs at the back of the queue.",
          "metin": "Because you prioritize people, you can lose touch with what you yourself need — and struggle to say it, especially if saying it might create conflict or disunity. You give others the warmth you rarely ask for back. Over time this breeds a quiet loneliness: the one who understands everyone, feeling that no one fully knows them. And when boundaries go unkept for long enough, resentment starts doing the boundary's job — badly."
        },
        {
          "baslik": "Yes before counting the cost.",
          "metin": "You see potential everywhere — in projects, in people, in causes — and you genuinely want to do it all, so yes comes out of you faster than arithmetic. The result: overcommitment, a plate that is always full, and the occasional painful retreat from something you'd have declined if you'd looked at it for one more day. The leap isn't carelessness; it's generosity moving faster than judgment."
        },
        {
          "baslik": "The room's verdict as your compass.",
          "metin": "You feel the standard of the people around you before you feel your own — which makes you responsive, adaptable, a joy to direct. But it also means praise and criticism steer you more than you'd like to admit, and on a bad day you can lose the signal of your own inner bar entirely. An actor who only calibrates to the room ends up giving the room what it already wanted — and your best work has more in it than that."
        },
        {
          "baslik": "Surprises as intruders.",
          "metin": "When something unexpected happens — mid-scene, mid-shoot, mid-plan — your first instinct is to contain it and restore the rails. Your love of the settled choice has a shadow: the spine can be decided so early, and locked so firmly, that a better idea arriving late finds the door already closed. The plan that protects your work can, on some days, cage it."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Choose projects where the human layer matters — ensembles, mentoring, stories with a mission. You are at your best where people-work is the work; don't let anyone convince you that tending the company is a distraction from craft. In your hands, it is craft."
        },
        {
          "baslik": "Guard your own weather.",
          "metin": "Learn to tell, in the moment, which feelings are yours and which ones you picked up from the room — naming it is often enough to set the borrowed ones down. Build a small daily habit of checking in with yourself before you check in with everyone else. And if you ever want company in that work, individual coaching is always available — no pressure, entirely your choice."
        },
        {
          "baslik": "Make friends with conflict.",
          "metin": "Disunity is not the end of the world, and not every tension needs you to dissolve it. Growth — in a scene, a company, a friendship — often happens exactly in the space you rush to smooth over. Practice letting a disagreement stay in the room for ten more minutes than is comfortable. Watch what it produces."
        },
        {
          "baslik": "“Let me think about it.”",
          "metin": "Five words that will save you years. Before committing to a project, a favor, a cause, take the day: look at the details, the schedule, the fine print you'd rather skip. The boring, impersonal contract really does need to be read — and reading it is how you protect the enthusiasm that made you want to say yes."
        },
        {
          "baslik": "Leave one door open in the spine.",
          "metin": "Keep deciding the spine first — it's how you build, and it works. But leave one door unlocked on purpose. Once per rehearsal period, invite the thing you can't plan: an improvisation, a wrong reading, a partner's strange offer. When a surprise walks in mid-performance, try greeting it as material before you contain it. The spine will hold; that's exactly why you can afford the visitor."
        },
        {
          "baslik": "Look inside for the verdict.",
          "metin": "The room's reading of you is information, not truth. After the notes, after the applause or the silence, ask yourself the private question: what do I think happened in that scene? Keep your own bar somewhere the room can't reach it — you'll act more freely the moment the verdict isn't entirely outsourced."
        },
        {
          "baslik": "Mind your own bottom line.",
          "metin": "Helping is your joy, but your talents also deserve to feed you. It is possible to serve people, serve the work, and be paid properly, all at once — and keeping that balance is not selfishness, it's sustainability. Watch, too, that the relational side of a project doesn't quietly swallow the deliverables: keep one eye on what must be finished, and by when."
        }
      ],
      "finallySection": [
        "You've chosen a profession made of exactly your materials: reading people, moving people, building believable human beings and bringing a company along. Your intuition about what drives a person — their needs, their bonds, their unspoken weather — goes straight into character work, and your gift for gathering people makes every production you join a little more of an ensemble. In most groups you drift naturally toward the mentor's chair, and people are usually better actors for having worked beside you. Hooray!",
        "And notice what you love: the finished thing. Opening night, the final cut, the moment the built performance stands on its own — that's your altar, more than the searching is. Paired with your reliability — the same living performance, take after take, night after night — this makes you a director's safe harbor, and it is worth saying that in a casting room without blushing.",
        "Your best environments are forward-looking and people-centered, with a shared mission and a company that actually likes each other. Your one environmental hazard: teams at war. On a conflict-ridden production you can spend your entire artistic budget on peacekeeping — mediating, absorbing, smoothing — and arrive at your own scenes with nothing left. When you find yourself in one, ration the tending; your first responsibility on any production is the character you were hired to build.",
        "About technique: you'll likely be drawn to inside-out ways of working — starting from the character's inner life, their bonds and needs, and letting the outside follow. That suits you. But let's be precise about one thing, because it matters: **inside-out means building the character's inner life first.** The emotions you work with on stage are designed and owned by the character — constructed from the character's story, the character's attachments, the character's wounds. It is never an invitation to dig up your own. You imagine your way in; you don't excavate. Your empathy is strong enough to build everything the role needs — that is, in fact, the whole point of it."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is people: emotions, intentions, needs, and the web of relationships that holds a person in place. You understand a character the way you understand a friend — through who they love, what they long for, and how they land on others. Here is the set built for the way your mind works. *First, the team, the story, and the set:*",
      "sorular": [
        {
          "metin": "Who or what is involved — and who is left out?"
        },
        {
          "metin": "Who will be affected, and how?"
        },
        {
          "metin": "How will others react?"
        },
        {
          "metin": "What's appropriate for everyone involved?"
        },
        {
          "metin": "How will my acting choices affect the relationships among the people on this production?"
        },
        {
          "metin": "Who might contribute a special strength or skill?"
        },
        {
          "metin": "How do we get everyone on board to make this work?"
        },
        {
          "metin": "Now the character:",
          "vurgu": true
        },
        {
          "metin": "What do we know about the character's emotions?"
        },
        {
          "metin": "What do we know about her/his problems?"
        },
        {
          "metin": "What is it — and what is it not?"
        },
        {
          "metin": "What is happening — when, where, and how?"
        },
        {
          "metin": "Who else do I know who has this problem? How do they feel, move, talk, look?"
        },
        {
          "metin": "Which senses does this character use most? Are there any seeing, hearing or feeling deficits?"
        },
        {
          "metin": "What was this character's childhood like? Parents? Environment?"
        },
        {
          "metin": "As a child, what was one thing she/he could always be sure of?"
        },
        {
          "metin": "What was one thing she/he was never sure of?"
        },
        {
          "metin": "Where did she/he grow up? With all five senses — what could she/he feel there?"
        },
        {
          "metin": "What was her/his greatest talent?"
        },
        {
          "metin": "What amused her/him as a child?"
        },
        {
          "metin": "What were her/his favorite games as a child?"
        },
        {
          "metin": "What were her/his most common emotions? Where did she/he feel them most in the body?"
        },
        {
          "metin": "What were her/his challenges? How did she/he feel about them and react to them?"
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships? Who are the people around her/him?"
        },
        {
          "metin": "Where does she/he actually live? What does she/he feel most commonly — and where in the body?"
        },
        {
          "metin": "What is her/his occupation? What is the relationship with the job?"
        },
        {
          "metin": "How does doing this job affect her/his feelings and relationships?"
        },
        {
          "metin": "Who lives with her/him?"
        },
        {
          "metin": "Who does she/he get along with best — and worst?"
        },
        {
          "metin": "How does she/he feel about herself/himself?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his feelings and interactions throughout the day, and take notes."
        },
        {
          "metin": "How does she/he deal with stress? What happens in the body, the feelings, the actions?"
        },
        {
          "metin": "How does she/he have fun these days? What happens in the feelings, the relationships, the body?"
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character. What does she/he feel?"
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How?"
        },
        {
          "metin": "Is there love in her/his life right now? What feelings and actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his life, feelings, body, and relationship patterns?"
        },
        {
          "metin": "Walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "How does all of the above fit into what you're doing now — physically?"
        },
        {
          "metin": "What else needs to be done? What is missing?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "ENTJ": {
      "kod": "ENTJ",
      "surum": "v0.1 (new; item-audit applied; Pilot frame from Filiz, re-voiced)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are driven, decisive, strategic, direct, high-energy — a natural organizer of people and plans, most alive when there's a real objective and you're the one moving everyone toward it.",
        "If we had to say it in one line: you see where it needs to go, and you make it happen.",
        "You are built to lead and to deliver. You take in a situation, see the goal, and almost immediately start building the route — who does what, in what order, by when. Decisions don't paralyze you; they relieve you. Where others circle a problem, you close it, commit, and drive. And you don't just push hard — you push smart: your mind runs on strategy, seeing the big picture and the several moves ahead, so the plan you build isn't only decisive, it's usually right about where things are heading.",
        "You think in structure. You take a mess of ideas and issues and sort them into clear categories — what matters, what doesn't, what depends on what — and out of that ordering a path appears that other people can actually follow. It's a genuine and slightly rare gift: not everyone can turn confusion into a workable plan, and you do it almost without noticing.",
        "You're direct. You say what you think, you name the problem, you don't waste words softening what needs to be heard — and you generally assume others would rather have the truth than the cushion. You hold high standards, starting with yourself, and you have real energy for the hard, tough-minded work of actually making something happen when everyone else has stalled at the talking stage.",
        "What drives you, underneath, is progress: improvement, efficiency, results, the satisfaction of a thing done well and delivered. Wasted effort and aimless process genuinely pain you. You want to be moving, building, finishing — and you want the people around you moving too, toward something that matters."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "Leadership with energy.",
          "metin": "You step into leading readily and instinctively, and you bring high energy to it — you can take a group that's drifting and give it direction, momentum, and a reason to move. In a company this is real infrastructure: someone has to see the whole and organize it toward the goal, and it's you. Even when you're not the one officially in charge, you're often the one who quietly makes the thing actually happen."
        },
        {
          "baslik": "Strategy and vision.",
          "metin": "You see the big picture and the several moves ahead, and you generate new approaches — the different strategy, the route no one else drew. You don't just work harder; you find the smarter way to the objective. For character work this becomes a real asset: you grasp a whole play's architecture, a character's trajectory across the arc, the strategic shape of where a person is heading — the throughline others miss while they're busy with the moment."
        },
        {
          "baslik": "Turning mess into a plan.",
          "metin": "You take a tangle of ideas, problems, and half-formed thoughts and sort them into clear, logical order — what matters, what follows what, what to do first. Out of that ordering comes a path people can actually walk. In a rehearsal room full of possibility and no direction, you're the one who can say “here's how we get there,” and mean it."
        },
        {
          "baslik": "Making it happen.",
          "metin": "This is your signature: you finish. Tough-minded, inventive, undeterred by the hard part, you drive things through to a delivered result when others have stalled at the talking stage. You prepare, you decide, you commit, and by opening night the work is built and reliable. In a profession full of brilliant people who can't quite land the plane, the one who consistently delivers is worth an enormous amount."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours — and for you, several of these cluster around the same root: the very drive that makes you effective can run over the people you need.",
      "obstacles": [
        {
          "baslik": "Dimming others to shine.",
          "metin": "When you take charge and drive toward the goal, you can — without meaning to — take up so much space that other people's ideas and creativity never get air. The quieter actor stops offering; the tentative idea dies unspoken; the room defers to you and goes a little flat. You didn't ask for that, but your force can produce it, and a scene or a company runs poorer when only one engine is allowed to fire."
        },
        {
          "baslik": "Too direct for the room.",
          "metin": "Your directness is honest and efficient — and it can land harder than you intend. Naming a problem bluntly, pushing straight into a conflict, saying the true thing without the cushion: to you it's just clarity, but to a sensitive scene partner or a bruised colleague it can feel like a hit. In a collaborative, emotional craft, how the truth lands is part of whether it works at all."
        },
        {
          "baslik": "Deciding before the data's in.",
          "metin": "You're fast, and mostly you're right — but “mostly” is doing work in that sentence. Your speed to conclusion means you sometimes commit before you've gathered enough, closing a question that deserved more looking. A character read locked too early, an approach chosen before it was understood: the decisiveness that serves you can also short-circuit the discovery."
        },
        {
          "baslik": "The tyranny of the “or.”",
          "metin": "A structuring mind loves a clean answer — this way or that, right or wrong, in or out. But a character, like a person, is usually both at once: cruel and frightened, decisive and lost. The either/or that makes you efficient can flatten exactly the contradictions that make a character human. The truest reading is almost always the messy “and,” not the clean “or.”"
        },
        {
          "baslik": "Taking charge too soon.",
          "metin": "Your instinct when something's unformed is to grab the wheel and organize it — often before the thing was ready to be organized, and before anyone asked. The need to control the process can rob a rehearsal of the loose, exploratory, unled phase where the best surprises are born. Not everything wants a plan yet; some things want to be allowed to stay messy a little longer, and that's genuinely hard for you to permit."
        },
        {
          "baslik": "The critical edge.",
          "metin": "You question, you test, you spot the flaw — a real strength, and one that can tip into a relentlessly critical attitude that wears on people. When every idea meets a challenge and every choice gets stress-tested, colleagues can start to feel judged rather than helped. The same eye that improves the work can, unmanaged, make the room tense and the people guarded."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Your drive, your strategic eye, and your ability to actually deliver are real and uncommon — lean on them, and choose work that gives them room. You're at your best with a real objective and the space to organize toward it; don't apologize for being the one who makes things happen. In your hands, getting it done is an art."
        },
        {
          "baslik": "Develop self-awareness — especially of your effect.",
          "metin": "Your biggest blind spot isn't the work; it's your own impact on the room. Take time, deliberately, to notice how your force lands on the people around you: who went quiet when you spoke, whose idea you rolled past, where your directness stung. This isn't about dimming yourself — it's about seeing the wake you leave, so you can steer it. It's the single highest-leverage growth edge in your whole profile."
        },
        {
          "baslik": "Take time to reflect.",
          "metin": "Your reflex is to act; build in the counter-habit of pausing before you drive. Before you lock a decision or take the wheel, give it a genuine beat — is the data actually in, does this really need me to run it, what am I not seeing. A little reflection upstream saves a lot of correction downstream, and it's the cure for both the deciding-too-fast and the taking-charge-too-soon."
        },
        {
          "baslik": "Listen, open up, and let others in.",
          "metin": "Practice, on purpose, holding back your own conclusion to draw out someone else's — especially the quieter people your force can silence. Ask, then actually wait. The best ideas in a room aren't always yours, and a company where everyone's engine is allowed to fire beats one that runs on yours alone. This is also how you protect the creativity your drive can otherwise dim."
        },
        {
          "baslik": "Look for the gray.",
          "metin": "Deliberately resist the clean either/or. When you catch yourself deciding a character is this rather than that, ask how she might be both at once. Practice holding two opposed truths at the same time — it will deepen every character you build and soften the black-and-white edge that can make you hard on people, including yourself."
        },
        {
          "baslik": "Balance the doing with the being.",
          "metin": "You're wired for product — the result, the delivery, the finish. But acting also lives in process and in feeling, which resist being driven. Give yourself permission to be in a scene without managing it, to feel it rather than solve it, to let a rehearsal wander. And if the relentless drive ever starts to cost you — your rest, your ease, the people around you — talking it through with someone is always an option; no pressure, entirely your choice."
        }
      ],
      "finallySection": [
        "You've chosen a profession that can use your leadership, your strategic mind, and your rare ability to actually deliver — you build characters with a clear throughline, you grasp the architecture of a whole piece, and you finish what you start, reliably, when others don't. A production is lucky to have someone in it who sees the whole and helps drive it home. Hooray!",
        "Now the honest part, because you'd want it straight: the profession's real challenge for you is people and feeling. Acting is collaborative and emotional at its core, and your instincts — decide, direct, deliver — can run right over the softer, slower, messier things a scene and a company are actually made of. This isn't a flaw to hide; it's the growth edge, and it's a big one. The most powerful thing you can build is the discipline to lead less and feel more: to let a scene move you instead of managing it, to let your partners' offers change your plan, to trust that the loose and unled parts of the work are where some of the magic lives. The drive is a gift. Learning when to set it down is the mastery.",
        "Your ideal environment gives you a real objective, room to organize, and colleagues who can keep pace — and a director you respect, since you'll chafe under one you don't. Aimless process, endless indecision, and busywork will frustrate you fast. When you can choose, choose the room with a real goal in it — and then, deliberately, make room in it for the people, too.",
        "About technique: you're strategic and structural, so you'll likely build a character from the outside in — the throughline, the architecture, the plan — and drive the rest from there. That's a legitimate and powerful path. One thing to be precise about, because it matters: **the emotions you play are built for the character and owned by the character** — grown from the character's story, situation, and logic, never mined from your own past. You construct them; you don't excavate them. Your mind is strong enough to build everything the role needs — the mastery, for you, is letting the built thing be genuinely felt, not just executed."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is structure and objective — you understand a character by mapping her role, her aim, and the logic of how she moves through the story. So your set begins like a strategist's briefing and then, deliberately, keeps going past the plan into the human material your drive can otherwise rush by. Push yourself to stay with the later questions as long as you stayed with the first ones. *The strategist's briefing:*",
      "sorular": [
        {
          "metin": "What are the roles and responsibilities of my character — her/his function in this story?"
        },
        {
          "metin": "What does my character want, and what's the strategy for getting it?"
        },
        {
          "metin": "What does my character have in common with the others — shared ground, shared stakes?"
        },
        {
          "metin": "What information do we actually have in hand — and what are the gaps the script leaves open?"
        },
        {
          "metin": "What is the big picture — the architecture of where this character is heading across the whole arc?"
        },
        {
          "metin": "Now go past the plan, into the person:",
          "vurgu": true
        },
        {
          "metin": "What are the contradictions in this character — the ways she/he is two opposed things at once?"
        },
        {
          "metin": "What do we know about the character's emotions — and what does she/he feel but never show?"
        },
        {
          "metin": "What was this character's childhood like? Parents? Environment?"
        },
        {
          "metin": "What were her/his most common emotions? Where did she/he feel them most in the body?"
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships? Who are the people around her/him?"
        },
        {
          "metin": "Who does she/he get along with best — and worst?"
        },
        {
          "metin": "How does she/he feel about herself/himself?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his feelings and interactions throughout the day, and take notes."
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character. What does she/he feel?"
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How?"
        },
        {
          "metin": "Is there love in her/his life right now? What feelings and actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his life, feelings, body, and relationship patterns?"
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Now stop planning and walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes. For you this walk matters most: it's where the plan becomes a person, and where managing gives way to feeling.",
          "vurgu": true
        },
        {
          "metin": "Having walked it — what do you now feel about her/him that the plan didn't tell you?"
        },
        {
          "metin": "What else could be true of her/him that you hadn't allowed for?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "ENTP": {
      "kod": "ENTP",
      "surum": "v0.1 (rewrite of Filiz's original sample; item-audit applied)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are quick, curious, inventive, outspoken, resourceful, charming when you choose to be — a question mark walking on two legs, allergic to routine, magnetized by anything that hasn't been figured out yet.",
        "If we had to say it in one line: where others see how things are, you see a better way they could work.",
        "You love to explore and you love to invent, and you rarely do the same thing the same way twice — partly on principle, mostly because repeating yourself bores you to the bone. Rules, to you, are somebody's first draft: you question norms by reflex, and when a rule can't defend itself, you feel entirely licensed to route around it. A problem others call impossible is, for you, an invitation — challenge is your caffeine, and you're often at your sharpest exactly where everyone else has given up.",
        "Your mind runs on two engines at once, and that's the thing to understand about yourself. The first is the idea engine: you read between the lines, follow hunches, make strange connections, ask “what if we turned it inside out?” — possibilities arrive in you faster than you can spend them. The second is the testing engine: everything those possibilities produce gets checked against logic — is it consistent, does it hold, where does it break? Most people have one of these engines; you have both, and they run in a loop: invent, test, discard, invent better. It's why your work reads as both wildly original and rigorously built.",
        "With people, you're a reader and a fencer. You size others up quickly and accurately, and you love to banter — quick wit, wordplay, cheerful provocation, poking fun at habits (your own included). You'll argue a point for the sport of it and forget the argument by dinner; the people who know you understand that for you a good disagreement is a form of affection. You have little patience, though, for minds that won't move — and it shows more than you think.",
        "Writing, playing, travelling — you have your own pressure valves, and you know how to use them. Under stress you don't sit with the feeling; you outrun it, out-think it, or turn it into material."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "Fearlessness.",
          "metin": "You are not afraid to try, fail, and try again — a thousand times if the problem deserves it. You don't file failure under failure; you file it under data. Doubts don't deter you, unplanned outcomes barely ruffle you, and what others call problems you genuinely experience as opportunities. When the detour appears mid-plan, your gut says ride it — the detour might beat the map, and a surprise mid-performance is material, not threat. This is why you thrive precisely where the ground is least certain."
        },
        {
          "baslik": "Finding what's broken.",
          "metin": "When a scene isn't working, you locate the broken beat — the illogical choice, the motivation that doesn't hold, the moment where cause stopped producing effect. You judge work by its construction: clarity, consistency, whether the machine of the story actually runs. And you stress-test in advance, anticipating where things will break before they do. Directors may not always enjoy hearing it, but you are very often right — you're the ensemble's quality inspector, whether or not anyone appointed you."
        },
        {
          "baslik": "A better way exists.",
          "metin": "In everything — a scene, a rehearsal process, a way of learning lines — you carry the working assumption that the current version is not the best version. Usually you're right about that too. You take a character apart to see how she works: what she wants, what her strategy is, why she does what she does — and out of the disassembly comes a reading nobody else brought to the table. Your “why?” is not doubt; it's your master key."
        },
        {
          "baslik": "Confidence in your ideas.",
          "metin": "Criticism of your ideas rolls off you remarkably well — you'd rather prove the doubters wrong than argue with them, and opposition mostly makes you more precise. One honest nuance your answers revealed: this armor covers your ideas more than it covers you. As a performer you still read and feel the room's standard — the director, the audience, the partners — and calibrate to it. Knowing the difference between the two is worth a lot: the inventor in you is bulletproof; the actor in you is human."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours:",
      "obstacles": [
        {
          "baslik": "Flightiness.",
          "metin": "The idea engine doesn't have an off switch, and that which is your greatest strength is also the leak in the boat: you jump from idea to idea, keep every door open in case something better walks in, and keep collecting material long past the point of enough — there is never quite enough research for you. The fear of missing a better option can make committing to one path feel like a loss, and so the finishing suffers while the exploring feasts."
        },
        {
          "baslik": "Impracticality.",
          "metin": "Caught up in the idea, you lose sight of the ground: the immediate tasks, the small logistics, the unglamorous maintenance of daily and professional life. The result is a mind that is stunningly organized on the inside and a schedule that is chaos on the outside — amusing to you, sometimes aggravating to the people who share the schedule."
        },
        {
          "baslik": "Breaking norms — and paying for it.",
          "metin": "Charting your own course is your engine of creativity, but it puts you at odds with authority more often than is useful. Not every rule is a challenge, and not every superior is an obstacle course; some structures are just the floor everyone is standing on. If “incorrigible” and “stubborn” are words you've heard more than twice, the cost may be higher than you've been counting."
        },
        {
          "baslik": "Procrastination.",
          "metin": "Let's be fair to you first: your late starts are not laziness. Pressure is genuinely your fuel — you work late and hot, work and play mixed together, and the deadline sharpens you. And the delay has a second honest cause: you'd rather keep taking in ideas than close the intake and decide. The risk is only what the last-minute fire has no time to cook — the details, the second pass, the polish — and a working life where every project ends in a sprint you didn't have to run."
        },
        {
          "baslik": "The character who is never finished.",
          "metin": "For you a character keeps changing as long as you play her — and in rehearsal that's a gift; the role stays alive in your hands. But the profession also asks for the other thing: the locked take, the repeatable night, the performance that matches yesterday's continuity. Your itch to keep improving can quietly become an inconsistency problem — tonight's brilliant new choice is also tonight's broken match with Tuesday."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Protect the exploring-and-testing loop — it's where your difference is made. Ask the rooms you work in to give your ideas a hearing before demanding the final answer; you converge better after you've invented, and your track record has earned the patience."
        },
        {
          "baslik": "Aim before you leap.",
          "metin": "Your all-in dive into new projects is a strength right up until it isn't. A day of due diligence — what does this actually involve, who's running it, what's the fine print — costs you almost nothing and saves you the projects you'd have quit anyway. You love research; just aim some of it at the decision itself."
        },
        {
          "baslik": "Look at the small picture.",
          "metin": "The broad themes are your home turf, and the details fall by the wayside — until they don't. Details neglected have a way of costing more time later than they'd have cost up front, and you of all people hate inefficiency. Treat the small stuff as a systems problem: build one lightweight habit — a checklist, a partner, a fixed hour — that catches what you skip."
        },
        {
          "baslik": "Make peace with the rulebook.",
          "metin": "Not as surrender — as strategy. Knowing which rules are actually load-bearing, and which authorities are worth keeping warm, is itself a piece of engineering, and you're good at engineering. Save your rule-breaking budget for the rules that matter; spend a little respect on the rest and watch how much friction disappears from your working life."
        },
        {
          "baslik": "Decide, then build.",
          "metin": "At some point the intake has to close so the making can start: pick the course, plot the steps, go. For roles, give yourself a lock date — the day the character's spine stops being renegotiated and later discoveries become refinements, not rebuilds. Your inventiveness will hate it for a week and thank you on opening night."
        },
        {
          "baslik": "Keep your pressure valves generous.",
          "metin": "Writing, playing, travelling — the ways you discharge stress are part of your craft infrastructure, so maintain them like you'd maintain an instrument. Favor the valves that give back more than they take. And if a stretch ever comes when stress outgrows all of them, talking it through with someone is always an option — no pressure, entirely your choice."
        }
      ],
      "finallySection": [
        "You've chosen a profession that keeps handing you unsolved problems — a new character, a new world, a new machine to take apart and rebuild better. Applying innovative perspectives to challenging roles is exactly the work your two engines were built for, and competence itself motivates you: you have the will and the horsepower to become a genuine expert, and expertise compounds in this craft. Keep adding to your knowledge and skills and you are a true candidate — if not already — for the top of this profession. Hooray!",
        "And notice what you love: the making. Rehearsal, the search, the taking-apart and rebuilding — that's your home, more than the finished artifact is. The profession's honest challenge for you sits right next to that love: long runs and repeated takes ask for sameness, which is the one thing that bores you. Don't fight it with discipline alone — fight it with design. Build the character so well that repetition becomes execution of a beautiful machine rather than reheating of an old meal; give yourself one micro-variable per performance to keep the mind hunting without breaking the match.",
        "Your ideal environment is intellectually alive without being rigid: sharp colleagues, conceptual problems, room to try the unorthodox thing, credit flowing to the ideas that earn it. Environments of pure procedure will grind you down — and one thing worth knowing about yourself on tender days: your natural language is strategy more than diplomacy. When a room needs soothing rather than solving, borrow a translator or slow yourself by half.",
        "About technique: you're the battery's great synthesizer — you take the best of every approach and build your own, and honestly, almost any technique, training, or workshop will feed you something. One house rule travels with you wherever you borrow from: **the emotions you play are built from the character's story — designed, constructed, owned by the character — never mined from your own past.** You're an inventor. Invent them."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is the open problem: you get ready in every direction, and the character arrives in a way even you can't fully explain afterward. So your set has two movements — first the strategist's questions, because your instinct is to find what the character wants and how the machine of them works; then the wide-open ones, because your best discoveries come when the question refuses to narrow. *The strategist's opening:*",
      "sorular": [
        {
          "metin": "What does my character want — in the whole story, and in each scene?"
        },
        {
          "metin": "What is her/his strategy for getting it? Where did she/he learn that strategy?"
        },
        {
          "metin": "Why does she/he do this? And why this way, rather than another?"
        },
        {
          "metin": "Where does the plan break? What does she/he do when it breaks?"
        },
        {
          "metin": "What are the rules of this character's world — and which ones does she/he break?"
        },
        {
          "metin": "Now open all the doors:",
          "vurgu": true
        },
        {
          "metin": "What do we know about the character's present, past and future?"
        },
        {
          "metin": "In what ways might we understand her/him better?"
        },
        {
          "metin": "How else could we see her/him?"
        },
        {
          "metin": "What is the big picture? What is she/he doing, trying to accomplish, feel, be?"
        },
        {
          "metin": "What could we learn about this character if we could time-travel with them?"
        },
        {
          "metin": "— Earliest memory of my character? · Happiest memory? · Saddest memory? · Where did she/he get most embarrassed? · The biggest pain in my character's life? · The biggest joy? · What did she/he play as a child — which games, and why? · How has her/his posture changed over time — at 5, 10, 15…? · When and how did my character meet that person (the one who matters most now)? · What feelings and sensations come in times of distress?",
          "vurgu": true
        },
        {
          "metin": "Which senses does this character use most? Are there any seeing, hearing or feeling deficits?"
        },
        {
          "metin": "What were her/his most common emotions? How did she/he express them?"
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships? Who are the people around her/him?"
        },
        {
          "metin": "Who does she/he get along with best — and worst?"
        },
        {
          "metin": "How does she/he feel about herself/himself?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his feelings and interactions throughout the day, and take notes."
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character. What does she/he feel?"
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How?"
        },
        {
          "metin": "Is there love in her/his life right now? What feelings and actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his life, feelings, body, and relationship patterns?"
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Walk for a while as the character. Notice your posture and your body, your pace, your moves, your five senses — what do you notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "How else could you see all this?"
        },
        {
          "metin": "What other time-travel would you like to take with your character?"
        },
        {
          "metin": "If you shift your perspective now — what else do you notice about your character?"
        },
        {
          "metin": "Can you imagine anything else?"
        },
        {
          "metin": "How would your favorite actor approach this character? What would she/he do with your character?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "ESFJ": {
      "kod": "ESFJ",
      "surum": "v0.2 (empowering talent foregrounded per Filiz)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are warm, generous, dependable, sociable, conscientious, attentive — the person who notices what a room needs and quietly makes sure it's there, from the coffee to the kind word.",
        "If we had to say it in one line: you are the reliable heart of the room.",
        "You are wired for people, and for looking after them in real, practical ways. You read the emotional temperature of a room quickly and accurately — who's struggling, who's left out, who needs a word before things tip — and you can't help acting on it. But where some warm people offer sympathy, you offer service: you remember the birthday, you bring the thing that was forgotten, you show up when you said you would. Care, for you, is not a feeling you announce; it's a set of things you do.",
        "And here is what grounds all that warmth — the quality that makes you not just kind but reliable: you trust what's proven. You work from the tested method, the concrete detail, the way that has actually worked before. You build a character step by step, layer by layer, from real particulars — where she lived, what she wore, how she carried herself — and you mark and organize your script so nothing is left to chance. Others improvise and hope; you prepare and know. By opening night the work is built, and it's built to hold.",
        "You draw energy from people and from being useful, and you're at your best when you can structure the world around you to support human values and meet real needs. You take your responsibilities seriously — to your family, your company, your community — and you like things settled: decisions made, commitments honored, the plan in place. Loose ends and open questions sit uneasily with you; a made decision brings relief.",
        "You're sensitive to how you're received — praise warms you deeply, and criticism can land harder than you let on. You tend to feel the standard of the people around you — the director, the audience, the ones you respect — and you want to meet it. This makes you responsive and easy to work with; it also means the room's approval can matter to you more than is always comfortable."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "The one who lifts others.",
          "metin": "You notice what people are good at — really notice, the specific gift each person brings — and you make sure it gets seen and used. And because the room you build feels safe, reliable, free of ambush, the more timid people in it start to risk more: the shy actor tries the bigger choice near you, the quiet one finally speaks. You may never catch yourself doing it, but your steadiness is often what lets other people's boldness come out. You don't perform the creativity of the room — you make the room where it's safe to. In a company, this is the invisible infrastructure that holds everything up, and it's rarer than talent and harder to replace."
        },
        {
          "baslik": "Building on solid ground.",
          "metin": "You work from what's proven and real — the tested approach, the concrete detail, the layer-by-layer construction. You mark your script, you organize your preparation, you leave nothing to luck. And so you can do the thing many gifted actors can't: deliver the same living performance on take one and take forty, night after night. In a profession that quietly runs on reliability, yours is precious — directors learn they can build the whole evening on you."
        },
        {
          "baslik": "The keeper of the real.",
          "metin": "Your memory for concrete human detail is a working instrument. You notice and retain how people actually are — the specific gesture, the way a particular kind of person holds their shoulders, the real texture of a real life — and your characters are believable because they're assembled from that true material, not from a general idea of a person. You don't invent people; you remember them, and lend them to the role."
        },
        {
          "baslik": "Words that keep the peace.",
          "metin": "When friction rises — a tense rehearsal, a clash in a company meeting, two people talking past each other — you're often the one who cools it: naming the common ground, reminding everyone they're on the same side, putting warmth into the words that keep a room from splintering. A production that might have fractured holds together, in part, because you were there smoothing the seams."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours:",
      "obstacles": [
        {
          "baslik": "Everyone's weather becomes yours.",
          "metin": "The instrument that reads the room never switches off, so a company full of tension, grief, or bad temper doesn't just reach you — it moves in and takes up residence. You can pour yourself into other people's storms and finish a working day emotionally spent without having spent any of it on your own scenes. The sensitivity that makes you the heart of the room is the same one that empties you."
        },
        {
          "baslik": "Your needs at the back of the queue.",
          "metin": "Because you put people first, you can lose track of what you yourself need — and find it genuinely hard to ask, especially if asking might cause friction or seem ungracious. You give others a care you rarely request for yourself, and over time that breeds a quiet ache: the one who looks after everyone, wondering who's looking after them. Unspoken needs don't disappear; they curdle into resentment, which is a far worse guest than an honest request would have been."
        },
        {
          "baslik": "Yes before counting the cost.",
          "metin": "You feel responsible, you hate to let people down, and so “yes” leaves your mouth before you've checked whether you have the room for it. The result is an overfull plate and the occasional painful retreat from something you'd never have taken on if you'd paused for a day. The over-committing isn't weakness of will; it's your conscientiousness running ahead of your calendar."
        },
        {
          "baslik": "The room's approval as your compass.",
          "metin": "You feel the standard of the people around you before you consult your own — which makes you wonderfully responsive, and also a little steerable. Praise can pull you and criticism can wound you more than either deserves, and on a hard day you can lose the signal of your own judgment beneath the noise of the room's. An actor who only meets the room's expectation gives it what it already wanted — and you have more to offer than that."
        },
        {
          "baslik": "The comfort of the settled.",
          "metin": "You like things decided, and mostly that serves you — but the same love of the settled can shut a door too early. A choice locked in week one can leave no room for the better idea that arrives in week three, and a surprise mid-scene can feel like a problem to fix rather than a gift to use. Your reliability is real; just make sure the plan is a floor to build on, not a lid to trap the work under."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Choose work where reliability and warmth are valued — ensembles, long runs, companies that actually care about each other. Don't let anyone treat your steadiness or your people-work as lesser than flashier gifts; in the real economy of a production, they're often what makes the whole thing possible. In your hands, dependability is an art."
        },
        {
          "baslik": "Guard your own weather.",
          "metin": "Practice telling, in the moment, which feelings are yours and which you absorbed from the room — naming the borrowed ones is often enough to set them down. Build a small daily habit of checking in with yourself before you check in with everyone else. And if you'd ever welcome company in that work, individual coaching is always available — no pressure, entirely your choice."
        },
        {
          "baslik": "Make friends with conflict.",
          "metin": "Not every tension is yours to smooth, and not every disagreement is a disaster. Growth — in a scene, a company, a friendship — often lives in exactly the friction you rush to resolve. Practice letting a hard conversation sit in the room a little longer than is comfortable, and letting your own honest view be part of it. The relationships worth keeping survive it, and usually deepen."
        },
        {
          "baslik": "“Let me think about it.”",
          "metin": "Five words that will protect your whole year. Before you say yes to a favor, a project, a responsibility, give yourself the day: check the calendar, the cost, the fine print you'd rather not look at. Saying “yes” more slowly isn't ungenerous — it's how you make sure the yeses you give are ones you can actually keep."
        },
        {
          "baslik": "Leave one door open.",
          "metin": "Keep preparing thoroughly and deciding early — it's how you build, and it works beautifully. But leave one door unlocked on purpose. Once per rehearsal period, invite the thing you didn't plan: an improvisation, a partner's odd offer, a wrong reading that might be right. When a surprise arrives mid-performance, try greeting it as material before you tidy it away. Your foundation is solid enough to hold a visitor — that's exactly why you can afford one."
        },
        {
          "baslik": "Keep your own bar.",
          "metin": "The room's reaction is information, not the whole truth. After the notes, after the applause or the silence, ask yourself privately: what do I think happened in that scene? Keep a copy of the standard somewhere the room can't reach — you'll work more freely the moment your sense of a job well done isn't entirely on loan from other people."
        }
      ],
      "finallySection": [
        "You've chosen a profession that runs on exactly your materials: reading people, caring for people in practical ways, and building believable human beings from real, concrete detail. Your feel for what people need goes straight into character work, and your gift for tending a company makes every production you join a warmer, steadier place to work. You are, quietly, part of what makes good ensembles possible. Hooray!",
        "And notice the pairing that makes you rare: warmth and reliability in the same person. You care deeply and you deliver consistently — the heart of the room and the safe pair of hands, at once. That combination is a director's dream, and it's worth knowing your own worth in a casting room, where you may be tempted to undersell exactly the qualities that make you indispensable.",
        "Your best environments are people-centered and well-run, with a shared purpose and a company that treats each other well. Your one real hazard is a production at war with itself: on a conflict-ridden set you can spend your whole artistic budget on peacekeeping — mediating, absorbing, holding people together — and arrive at your own scenes with nothing left. When you find yourself there, ration the tending; your first responsibility on any job is the character you were hired to build.",
        "About technique: your doorway is people and their needs, reached through real, concrete detail, so you'll likely work best inside-out — beginning from who the character cares for and answers to, and building the rest from true particulars. That suits you. One thing to be precise about, because it matters: **inside-out means building the character's inner life first.** The feelings and bonds you play are designed and owned by the character — grown from the character's history, the character's people, the character's world. It is never an invitation to dig up your own. You imagine your way in; you don't excavate. Your care and your eye for the real are strong enough to build everything the role needs — that is, in fact, the whole point of them."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is people: how they feel, what they need, how they're bound to one another — reached through concrete, observed detail rather than abstraction. You understand a character the way you understand someone you're looking after. Here is the set built for the way your mind works. *First, the people and the situation:*",
      "sorular": [
        {
          "metin": "Who or what is involved — and who is left out?"
        },
        {
          "metin": "Who will be affected, and how?"
        },
        {
          "metin": "How will others react?"
        },
        {
          "metin": "What's appropriate for everyone involved?"
        },
        {
          "metin": "How will my acting choices affect the relationships among the people on this production?"
        },
        {
          "metin": "Who might contribute a special strength or skill?"
        },
        {
          "metin": "How do we get everyone on board to make this work?"
        },
        {
          "metin": "Now the character:",
          "vurgu": true
        },
        {
          "metin": "What do we know about the character's emotions?"
        },
        {
          "metin": "What do we know about her/his problems?"
        },
        {
          "metin": "What is it — and what is it not?"
        },
        {
          "metin": "What is happening — when, where, and how?"
        },
        {
          "metin": "Who else do I know who has this problem? How do they feel, move, talk, look?"
        },
        {
          "metin": "Which senses does this character use most? Are there any seeing, hearing or feeling deficits?"
        },
        {
          "metin": "What was this character's childhood like? Parents? Environment?"
        },
        {
          "metin": "As a child, what was one thing she/he could always be sure of?"
        },
        {
          "metin": "What was one thing she/he was never sure of?"
        },
        {
          "metin": "Where did she/he grow up? With all five senses — what could she/he feel there?"
        },
        {
          "metin": "What was her/his greatest talent?"
        },
        {
          "metin": "What amused her/him as a child?"
        },
        {
          "metin": "What were her/his favorite games as a child?"
        },
        {
          "metin": "What were her/his most common emotions? Where did she/he feel them most in the body?"
        },
        {
          "metin": "What were her/his challenges? How did she/he feel about them and react to them?"
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships? Who are the people around her/him?"
        },
        {
          "metin": "Where does she/he actually live? What does she/he feel most commonly — and where in the body?"
        },
        {
          "metin": "What is her/his occupation? What is the relationship with the job?"
        },
        {
          "metin": "How does doing this job affect her/his feelings and relationships?"
        },
        {
          "metin": "Who lives with her/him?"
        },
        {
          "metin": "Who does she/he get along with best — and worst?"
        },
        {
          "metin": "How does she/he feel about herself/himself?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his feelings and interactions throughout the day, and take notes."
        },
        {
          "metin": "How does she/he deal with stress? What happens in the body, the feelings, the actions?"
        },
        {
          "metin": "How does she/he have fun these days? What happens in the feelings, the relationships, the body?"
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character. What does she/he feel?"
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How?"
        },
        {
          "metin": "Is there love in her/his life right now? What feelings and actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his life, feelings, body, and relationship patterns?"
        },
        {
          "metin": "Walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "How does all of the above fit into what you're doing now — physically?"
        },
        {
          "metin": "What else needs to be done? What is missing?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "ESFP": {
      "kod": "ESFP",
      "surum": "v0.1 (rewrite of Filiz's original sample; item-audit applied)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are warm, playful, spontaneous, observant, generous — the person the room happens around, the one who notices when somebody's glass is empty and when somebody's heart is.",
        "If we had to say it in one line: you live in the present moment — and you can make a whole room live there with you.",
        "Life, for you, is not a rehearsal for something later; it is the show, running now. You like to be in the middle of the action, you have an open, playful sense of humor, and drawing people into a good time is not something you decide to do — it happens the way weather happens. Your enthusiasm is contagious in the literal sense: rooms catch it. And underneath the fun there is something people take longer to notice: your interest in their happiness is sincere. You entertain because you care, not instead of caring.",
        "Your senses are wide open. Sights, sounds, textures, food, music, weather, animals, faces — the world reaches you at full volume, and it gives you real pleasure. This is more than a personality trait; it is equipment. You register the concrete world — and above all the concrete facts about people: what they wear, how they move, what their voice does when they lie — with a precision most people would have to train for years to approach.",
        "You are practical and down-to-earth. When someone needs help, you help in tangible ways, today, with your hands — not with a theory about their situation. You see what people are good at, you listen to every side with an open mind, and teamwork for you is mostly a wonderful excuse for humans to be in a room together.",
        "And here is the thing that will surprise everyone except the people who've actually worked with you: in the craft, you are the grounded one. You trust what's on the page. You build a character's past out of concrete details — where she lived, what she wore, how she earned her money. You work step by step, layer by layer, and when a choice isn't supported by the script, you don't trust it until it is. Off stage you're the spontaneous one; inside the work, colleagues would call you precise, concrete, grounded. Let them be surprised. Your answers weren't.",
        "One more honest note: you can be harder to get close to than your friendliness suggests. Seriousness and sadness are rooms you don't linger in, and some people never see past the entertainer to the person underneath."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "The natural entertainer.",
          "metin": "Your liveliness lightens every room you enter, and bringing enjoyment to others satisfies you more deeply than almost anything else. Cheer, timing, humor — these come to you the way breathing does. On a hard shooting day, in a tired company, in week six of rehearsals, this is not a small gift; you are part of what keeps the whole machine human."
        },
        {
          "baslik": "The photographic imagination.",
          "metin": "When you imagine, you don't get concepts — you get the thing itself: exact pictures, colors, textures, the smell of the room. Where some actors reach a scene through metaphors, you walk into it through the senses, and what you build there has the grain of reality. This is a professional instrument of the first order: the more precisely a world is imagined, the more truthfully a body behaves inside it — and your precision is exceptional."
        },
        {
          "baslik": "The observer of the real.",
          "metin": "Your research doesn't happen in libraries; it happens on buses, in queues, at family dinners. Real people, real places, real detail — you collect them constantly, half without meaning to, and a role becomes believable for you when it's built from that harvest. You are the kind of actor whose characters feel like someone the audience has met — because in a sense, they have."
        },
        {
          "baslik": "Positivity.",
          "metin": "You look at the bright side on principle — every wasted minute is a lost chance for fun, conversation, or a small adventure, and you refuse to waste many. Better still, your hopefulness transfers: you pass it to your companions almost automatically, and a company that has you in it complains less, plays more, and lasts longer."
        },
        {
          "baslik": "The supportive spirit.",
          "metin": "You love the spotlight, but you never hog it. You prize the give-and-take, you listen to what everyone has to say, you spot the talents others bring and make room for them. Warm notes, an eye for who's struggling, a genius for cooperation — you make ensembles feel like ensembles."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours:",
      "obstacles": [
        {
          "baslik": "Avoiding the shadow.",
          "metin": "The glass-half-full view has one cost: the half-empty part still exists. You will sometimes deny an unpleasant truth or dodge an uncomfortable conversation because it might darken the mood — yours or the room's. But conflicts and hard truths don't evaporate when unattended; they compound. The peace you keep by avoiding them is rented, not owned."
        },
        {
          "baslik": "Criticism cuts deep.",
          "metin": "Ironic, given your sunniness — but you are genuinely sensitive, and criticism of your work, your ideas, or your person can wound you badly. Your reflex is to hear it as attack, and to answer with hurt or heat rather than curiosity. In a profession that runs on notes, auditions, and reviews, this reflex costs you more than it protects."
        },
        {
          "baslik": "The hunger for now.",
          "metin": "Your attention is a hummingbird — dazzling speed, magnificent appetite, and no patience at all for slow flowers. Long meetings, repetitive drills, the eleventh take of the same setup: your focus starts looking for the exit. There's nothing wrong with the wiring — it's the same wiring that makes you electric in the moment — but building anything big requires staying past the fun part, and that is a muscle, not a mood."
        },
        {
          "baslik": "Allergic to the abstract.",
          "metin": "Theory without a body bores you, and direction without a picture stalls you — told to “be the storm” or “play the metaphor,” you have nothing to hold. Your answers say it plainly: you want the blocking, the beats, the target, and you distrust what the script can't support. The allergy is honest — but left unmanaged, it can read as unseriousness to exactly the theory-loving people who often run rehearsals."
        },
        {
          "baslik": "The future as a foreign country.",
          "metin": "You trust proven practice over projection, and the present over the hypothetical — which makes you superb today and exposed next year. Long-term plans, contracts, savings, the slow consequences of unresolved things: these live in a country you rarely visit. In a profession of irregular income and long arcs, the visits are not optional forever."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Keep the spontaneity, the socializing, the fun — they are not the decoration on your talent, they are the talent. Choose work and rooms that let you experiment, improvise, and be among people; you wilt in isolation and bloom in company, and there's no virtue in arranging your life against your own grain."
        },
        {
          "baslik": "Make lists — as freedom technology.",
          "metin": "Not to cage the spontaneity; to protect it. A written goal, a simple schedule, a list for the week: these are fences that keep the wolves of chaos away from your playground. Decide the boring things once, on paper, and you free the live mind for what it's actually for."
        },
        {
          "baslik": "Befriend one dreamer.",
          "metin": "You don't need to become a visionary; you need access to one. Keep at least one big-picture person close — a friend, a partner, a mentor — and borrow their telescope twice a year: where is this going, what should I be building toward, what will I wish I'd started? Their five-year talk plus your today-energy is a complete artist."
        },
        {
          "baslik": "Ask for the picture.",
          "metin": "When a note arrives abstract, translate it: “What would it look like? What does it sound like? Show me a moment of it.” This is not a limitation confessing itself — it's a professional knowing their own access channel and using it. The concrete version always exists; directors usually enjoy being asked for it."
        },
        {
          "baslik": "Assume it's all constructive.",
          "metin": "You can't make criticism hurt less by reflex, but you can retrain the reflex's first move: decide in advance that every note you receive was meant to build, not to wound. It won't always be true — but responding as if it were true turns even the unfair notes into material, and slowly, genuinely, the sting fades."
        },
        {
          "baslik": "Reclaim your learning.",
          "metin": "If classrooms ever made you feel like a lesser student, let's correct the record: you are a superb learner in your own format — hands-on, live, with people in the room. You learn a skill best by doing it next to someone. Seek workshops over textbooks, scene work over seminars, and stop grading yourself with the wrong rubric."
        },
        {
          "baslik": "Shine a flashlight into the dark corners.",
          "metin": "The topics you'd rather not look at — in a relationship, a production, yourself — gain power in the dark and lose it in the light. Every so often, on purpose, open one uncomfortable thing before it opens itself. And if one of those corners ever feels like too much to face alone, individual coaching is always available — no pressure, entirely your choice."
        }
      ],
      "finallySection": [
        "Of all the people this lens describes, you may be the one the profession was most obviously built for. Presence, senses, play, people — the raw materials of acting are your factory settings. You work happily in the long, active, hands-on days that exhaust others; you learn fastest exactly the way this craft teaches, by doing, beside people; and an audience, for you, is not a pressure but a partner. Hooray!",
        "And the work will keep handing you your favorite thing: the unplanned. When something breaks mid-scene — a dropped line, a partner's wild new choice — your instinct says gift, not threat, and your reflexes are usually right. Add the quiet craft your answers revealed — layer-by-layer building, trust in the page, research made of real people — and you are far more complete an actor than the “natural entertainer” label suggests. The naturalness is real; so is the method underneath it.",
        "Your best environments are active, social, and aesthetically alive — room to move, colleagues who are friendly and laid-back, work with visible, immediate results. Heavy bureaucracy, rigid procedure, and long stretches of theory will drain you faster than hard work ever could; when you can choose, choose the room with people and pulse in it.",
        "About technique: your doorway to feeling runs through the senses and the heart, so you'll likely be drawn to inside-out ways of working. Yours has a particular flavor: build the character's sensory world — the room, the textures, the smells, the faces — and the feelings arrive on their own. One thing to be precise about, because it matters: **inside-out means building the character's inner life first.** The emotions you play are designed and owned by the character — grown from the character's world, the character's people, the character's story. It is never an invitation to dig up your own. You imagine your way in; you don't excavate. Your senses are strong enough to build everything the role needs — that is, in fact, the whole point of them."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is people and their emotions, reached through the senses — what can be seen, heard, felt, and done. So your set keeps returning you to the body: ask, then walk, then ask again. That rhythm is not decoration; it is how you know things.",
      "sorular": [
        {
          "metin": "What do we know about the character's emotions?"
        },
        {
          "metin": "What do we know about her/his problems?"
        },
        {
          "metin": "What is it — and what is it not?"
        },
        {
          "metin": "What is happening — when, where, and how?"
        },
        {
          "metin": "Who else do I know who has this problem? How do they feel, move, talk, look?"
        },
        {
          "metin": "Which senses does this character use most? Are there any seeing, hearing or feeling deficits?"
        },
        {
          "metin": "Walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "What was this character's childhood like? Parents? Environment?"
        },
        {
          "metin": "As a child, what was one thing she/he could always be sure of?"
        },
        {
          "metin": "What was one thing she/he was never sure of?"
        },
        {
          "metin": "Where did she/he grow up? With all five senses — what could she/he feel there?"
        },
        {
          "metin": "What was her/his greatest talent?"
        },
        {
          "metin": "What amused her/him as a child?"
        },
        {
          "metin": "What were her/his favorite games as a child?"
        },
        {
          "metin": "What were her/his most common emotions? Where did she/he feel them most in the body?"
        },
        {
          "metin": "What were her/his challenges? How did she/he feel about them and react to them?"
        },
        {
          "metin": "Walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships? Who are the people around her/him?"
        },
        {
          "metin": "Where does she/he actually live? What does she/he feel most commonly — and where in the body?"
        },
        {
          "metin": "What is her/his occupation? What is the relationship with the job?"
        },
        {
          "metin": "How does doing this job affect her/his feelings and relationships?"
        },
        {
          "metin": "Who lives with her/him?"
        },
        {
          "metin": "Who does she/he get along with best — and worst?"
        },
        {
          "metin": "How does she/he feel about herself/himself?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his feelings and interactions throughout the day, and take notes."
        },
        {
          "metin": "Walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "How does she/he deal with stress? What happens in the body, the feelings, the actions?"
        },
        {
          "metin": "How does she/he have fun these days? What happens in the feelings, the relationships, the body?"
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character. What does she/he feel?"
        },
        {
          "metin": "Walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How?"
        },
        {
          "metin": "Is there love in her/his life right now? What feelings and actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his life, feelings, body, and relationship patterns?"
        },
        {
          "metin": "Walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "How does all of the above fit into what you're doing now — physically?"
        },
        {
          "metin": "What else needs to be done? What is missing?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "ESTJ": {
      "kod": "ESTJ",
      "surum": "v0.1 (new; item-audit applied; Pilot frame S-grounded)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are decisive, dependable, direct, hard-working, organized — the person who gets things done properly and on time, most alive when there's a real job to do and clear standards to meet.",
        "If we had to say it in one line: you make it happen — the right way, the proven way, all the way to done.",
        "You are built to organize and to deliver. You take in a situation, decide what needs doing, and set about doing it — clearly, methodically, without a lot of fuss. Decisions don't trouble you; loose ends do. You like things settled, planned, and moving, and you carry a real, steady drive for the hard work of actually finishing what others only talk about. Where some people bring vision and no follow-through, you bring the follow-through: you can be relied on, completely, to do what you said you'd do, to the standard you said you'd do it.",
        "And here's what grounds all that drive: you trust what's proven. You work from the tested method, the concrete facts, the way that has actually worked before — not from theory floating above the ground. You build from real, specific detail, you organize your preparation, and you leave little to chance. You have an excellent eye for the practical and the workable, and a low tolerance for the vague, the untested, and the half-baked.",
        "You're direct and you hold high standards — starting with yourself. You say what you think, you name what's wrong, and you expect people to meet their commitments the way you meet yours. You respect competence, structure, and a job done right, and you have real energy for making sure things run properly. Order, to you, isn't fussiness — it's how good work actually gets done.",
        "What drives you, underneath, is results and reliability: progress, efficiency, a thing done well and delivered, a system that runs. Wasted effort and aimless process genuinely bother you. You want to be building, finishing, and delivering — and you want the people around you pulling their weight toward the same clear goal."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "Leadership that delivers.",
          "metin": "You step into organizing readily, and you bring steady, high energy to it — you can take a group that's drifting and give it structure, standards, and a clear path to done. In a company this is real infrastructure: someone has to organize the whole toward the goal and hold people to it, and it's you. Even when you're not officially in charge, you're often the one quietly making sure the thing actually gets finished, properly."
        },
        {
          "baslik": "Building on solid ground.",
          "metin": "You work from what's proven and real — the tested approach, the concrete detail, the method that has actually worked. You organize your preparation, you master the practical particulars, you leave nothing to luck. And so you can do what many gifted actors can't: deliver the same reliable, fully-built performance on take one and take forty, night after night. In a profession that quietly runs on dependability, yours is precious — directors learn they can build the whole evening on you."
        },
        {
          "baslik": "Turning mess into order.",
          "metin": "You take a tangle of tasks, problems, and half-formed plans and sort them into clear, workable order — what matters, what comes first, who does what. Out of that ordering comes a path people can actually follow. In a rehearsal room full of ideas and no direction, you're the one who can say “here's how we actually get this done,” and then make sure it happens."
        },
        {
          "baslik": "Making it happen.",
          "metin": "This is your signature: you finish. Hard-working, practical, undeterred by the tedious part, you drive things through to a delivered result when others have stalled at the talking stage. You prepare, you decide, you commit, and by opening night the work is built, tested, and reliable. In a profession full of brilliant people who can't quite land the plane, the one who consistently delivers — properly, on time — is worth an enormous amount."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours — and for you, several cluster around one root: the same drive and directness that make you effective can run over the people and the softer material you also need.",
      "obstacles": [
        {
          "baslik": "Dimming others to get it done.",
          "metin": "When you take charge and drive toward the goal, you can — without meaning to — take up so much space, and move so fast, that other people's ideas and creativity never get air. The quieter actor stops offering; the tentative idea dies unspoken; the room defers and goes flat. You didn't ask for that, but your force can produce it, and a scene or a company runs poorer when only one engine is allowed to fire."
        },
        {
          "baslik": "Too blunt for the room.",
          "metin": "Your directness is honest and efficient — and it can land harder than you intend. Naming a fault plainly, pushing straight at a problem, saying the true thing without the cushion: to you it's just clarity and good standards, but to a sensitive scene partner or a bruised colleague it can feel like a blow. In a collaborative, emotional craft, how the truth lands is part of whether it works at all — and you have less natural cushion than most."
        },
        {
          "baslik": "Deciding before the data's in.",
          "metin": "You're fast and you're usually right — but “usually” is doing work in that sentence. Your speed to a decision means you sometimes commit before you've gathered enough, closing a question that deserved more looking. A character locked too early, an approach chosen before it was really understood: the decisiveness that serves you can also short-circuit the discovery a role needs."
        },
        {
          "baslik": "The tyranny of the “or.”",
          "metin": "An organizing mind loves a clean answer — right or wrong, correct or incorrect, done or not done. But a character, like a person, is usually several things at once: dutiful and resentful, strong and frightened. The either/or that makes you efficient can flatten exactly the contradictions that make a character human. The truest reading is almost always the messy “and,” not the clean “or” — and this is genuinely hard for a mind built for order."
        },
        {
          "baslik": "Taking charge too soon.",
          "metin": "Your instinct when something's unformed is to organize it — often before it was ready, and before anyone asked. The need to get things settled and running can rob a rehearsal of the loose, exploratory, unled phase where the best surprises are born. Not everything wants a plan yet; some things need to be allowed to stay messy a little longer, and permitting that runs against your grain."
        },
        {
          "baslik": "Impatience with the intangible.",
          "metin": "You're superb with what's concrete, practical, and testable — and correspondingly impatient with what isn't: the emotional undercurrents, the vague hunches, the slow feeling-based work that won't resolve into a clear task. But a scene's emotional layer is exactly the kind of intangible that acting is made of, and the same practicality that makes you reliable can make you wave off the very material a performance most needs."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Your reliability, your organizing drive, and your ability to actually deliver are real and uncommon — lean on them, and choose work that values them. You're at your best with a real job and clear standards; don't apologize for being the one who gets it done, properly. In your hands, dependability is an art, and a production is genuinely lucky to have it."
        },
        {
          "baslik": "Develop self-awareness — especially of your effect.",
          "metin": "Your biggest blind spot isn't the work; it's your own impact on the room. Notice, deliberately, how your force and your bluntness land on the people around you: who went quiet when you spoke, whose idea you rolled past, where your directness stung. This isn't about softening into someone you're not — it's about seeing the wake you leave so you can steer it. It's the single highest-leverage growth edge in your whole profile."
        },
        {
          "baslik": "Take time to reflect.",
          "metin": "Your reflex is to act and settle; build in the counter-habit of pausing first. Before you lock a decision or take the wheel, give it a genuine beat — is the information actually in, does this really need me to run it, what am I not seeing. A little reflection upstream saves a lot of correction downstream, and it eases both the deciding-too-fast and the taking-charge-too-soon at once."
        },
        {
          "baslik": "Listen, open up, and let others in.",
          "metin": "Practice, on purpose, holding your own conclusion back to draw out someone else's — especially the quieter people your force can silence. Ask, then actually wait. The best ideas in a room aren't always yours, and a company where everyone's engine can fire beats one that runs on yours alone. This is also how you protect the creativity your drive can otherwise dim."
        },
        {
          "baslik": "Look for the gray.",
          "metin": "Deliberately resist the clean either/or. When you catch yourself deciding a character is this rather than that, ask how she might be both at once. Practice holding two opposed truths at the same time — it will deepen every character you build and soften the black-and-white edge that can make you hard on people, including yourself."
        },
        {
          "baslik": "Make room for feeling.",
          "metin": "You're wired for the practical and the delivered — but acting also lives in emotion and in process, which resist being organized. Give yourself permission to sit in a scene's feeling without solving it, to let a rehearsal wander, to treat the intangible as real work rather than a delay. And if the relentless drive ever starts to cost you — your rest, your ease, the people around you — talking it through with someone is always an option; no pressure, entirely your choice."
        }
      ],
      "finallySection": [
        "You've chosen a profession that can genuinely use your reliability, your organizing strength, and your rare ability to deliver — you build characters properly and thoroughly, from real concrete detail, and you finish what you start, dependably, when others don't. A production is lucky to have someone in it who holds the standard and drives the work home. Hooray!",
        "Now the honest part, because you'd want it straight: the profession's real challenge for you is feeling and the intangible. Acting is emotional and collaborative at its core, and your instincts — decide, organize, deliver, to standard — can run right past the softer, slower, messier material a scene and a company are actually made of. This isn't a flaw to hide; it's the growth edge, and it's a real one. The most powerful thing you can build is the discipline to organize less and feel more: to let a scene move you instead of managing it, to treat the emotional undercurrent as the actual job rather than a distraction from it, to trust that the loose and unled parts of the work are where some of the magic lives. The drive to get it done is a gift. Learning when to set it down is the mastery.",
        "Your ideal environment gives you a real job, clear standards, and colleagues who pull their weight — and a director you respect and can rely on. Vagueness, endless indecision, and shifting goalposts will frustrate you fast. When you can choose, choose the room with a clear task and honest standards in it — and then, deliberately, make room in it for the feeling and the people, too.",
        "About technique: you're practical and structural, so you'll likely build a character from the outside in — the facts, the behavior, the concrete detail, the plan — and drive the rest from there. That's a legitimate and powerful path, and it's natively yours. One thing to be precise about, because it matters: **the emotions you play are built for the character and owned by the character** — grown from the character's story, situation, and real particulars, never mined from your own past. You construct them; you don't excavate them. Your discipline is strong enough to build everything the role needs — the mastery, for you, is letting the built thing be genuinely felt, not just correctly executed."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is structure and concrete fact — you understand a character by mapping her role, her circumstances, and the real particulars of how she lives and works. So your set begins like a practical briefing and then, deliberately, keeps going past the facts into the emotional material your drive can otherwise rush by. Push yourself to stay with the later questions as long as you stayed with the first ones. *The practical briefing:*",
      "sorular": [
        {
          "metin": "What are the roles and responsibilities of my character — her/his function and duties in this story?"
        },
        {
          "metin": "What are the concrete facts — where she/he lives, works, comes from; the real particulars of this life?"
        },
        {
          "metin": "What does my character have in common with the others — shared ground, shared stakes?"
        },
        {
          "metin": "What information do we actually have in hand — and what are the gaps the script leaves open?"
        },
        {
          "metin": "How does this character actually operate day to day — the practical shape of her/his life?"
        },
        {
          "metin": "Now go past the facts, into the person:",
          "vurgu": true
        },
        {
          "metin": "What are the contradictions in this character — the ways she/he is two opposed things at once?"
        },
        {
          "metin": "What do we know about the character's emotions — and what does she/he feel but never show?"
        },
        {
          "metin": "What was this character's childhood like? Parents? Environment?"
        },
        {
          "metin": "As a child, what was one thing she/he could always be sure of? What was one thing she/he was never sure of?"
        },
        {
          "metin": "What were her/his most common emotions? Where did she/he feel them most in the body?"
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships? Who are the people around her/him?"
        },
        {
          "metin": "Who does she/he get along with best — and worst?"
        },
        {
          "metin": "How does she/he feel about herself/himself?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his feelings and interactions throughout the day, and take notes."
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character. What does she/he feel?"
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How?"
        },
        {
          "metin": "Is there love in her/his life right now? What feelings and actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his life, feelings, body, and relationship patterns?"
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Now stop organizing and walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes. For you this walk matters most: it's where the plan becomes a person, and where managing gives way to feeling.",
          "vurgu": true
        },
        {
          "metin": "Having walked it — what do you now feel about her/him that the facts didn't tell you?"
        },
        {
          "metin": "What else could be true of her/him that you hadn't allowed for?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "ESTP": {
      "kod": "ESTP",
      "surum": "v0.1 (rewrite of Filiz's original sample; item-audit applied)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are energetic, practical, playful, action-oriented, quick on your feet, hard to rattle — a thrill-seeker with a working brain, most yourself when something is actually happening.",
        "If we had to say it in one line: you find it by doing — and you find it fast.",
        "Life and work, for you, run best at speed and with a bit of a party in them. You bring dynamic energy into any room and any scene, and you read a situation almost instantly — sizing up what's real, what's useful, what to do next. Give you a problem that needs solving in the moment and you're already moving; hesitation isn't caution to you, it's just lost time. You're a natural improviser and, often, a natural athlete: you trust your body, you like a bit of risk, and you're the person people are glad to have around when something goes wrong and someone has to act.",
        "Here's the engine, though, the part that separates you from the other quick, playful types: you don't just react — you analyze. When a scene isn't working, your instinct isn't to feel your way toward the problem, it's to find the broken part — the illogical choice, the beat that doesn't follow, the motivation that doesn't hold. You judge work by its construction: is it clear, does it stay consistent, does the machine actually run? You anticipate what could break before it breaks. Fast hands, cool logic — that's the combination, and it's rarer than either half alone.",
        "You prefer action to conversation, and the more directly a thing can be turned into action, the sharper and clearer you become. Talk-for-its-own-sake loses you; a task you can move on wakes you all the way up. And you're grounded — you trust what's actually in front of you: the page, the facts, the real detail, the here-and-now stakes. Distant hypotheticals hold little interest; the present is where you live and where you're unbeatable.",
        "Socially you're perceptive and direct. You read people quickly and accurately — though you clock what they're doing more than what they're feeling — and you say it like you see it, no hemming, no cushioning. You keep things fast and light rather than heavy or emotional, which makes you great company and, occasionally, a person others wish would slow down with them for a minute."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "The can-do engine.",
          "metin": "High energy, never lazy, never dithering — you meet life and work with a self-assured “right, let's go” that is, all by itself, a real strength. Where others are still deciding whether to begin, you've begun. In a profession full of talented hesitators, momentum like yours is worth its weight."
        },
        {
          "baslik": "Action in the moment.",
          "metin": "You spend more time doing than deliberating, you process information at speed, and you improvise as you go. In an emergency — a scene that collapses, a cue that vanishes, a partner who goes off-script — you're at your best, thinking on your feet and responding by reflex while everyone else is still catching up. This is a stage-and-set superpower; live performance rewards exactly this nerve."
        },
        {
          "baslik": "The analyst's eye.",
          "metin": "Behind the fast hands is a cool, logical read. You find the broken beat, you test a scene for consistency, you spot the structural fault before it brings the house down. You approach a character as a mechanism to understand — what she wants, how she operates, why she does what she does — and your reading holds up because you built it to. Playful on the surface, rigorous underneath."
        },
        {
          "baslik": "Bold, direct, and grounded.",
          "metin": "Mental toughness, a taste for competition, and no fear of a calculated risk make you relentless in pursuit of what you're after — and you usually get there. You're efficient and matter-of-fact: you call it like you see it, you don't waste words, and you don't get lost in the abstract. You trust what's real and in front of you, and you build from it. People always know where they stand with you, which in this business is a gift."
        },
        {
          "baslik": "Fun as working infrastructure.",
          "metin": "Wherever you are, whoever you're with, you add curiosity, adaptability, humor, and positive charge — and that ease isn't just pleasant, it's productive. It relaxes a set, unlocks nervous actors, keeps a long day human. You need that atmosphere to work well yourself, and you're usually the one generating it for everyone else."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours:",
      "obstacles": [
        {
          "baslik": "Impatience with slowness.",
          "metin": "Because you think and move fast, you chafe at people who don't — the slower processors, the more hesitant, the more emotional. You can experience others' feelings as an inefficient drain and quietly resent the delay, and you're inclined to wave off intuition or feeling-based arguments as fog. But some of your scene partners live in exactly that fog, and the performance needs what they bring; your speed can cost you their offers."
        },
        {
          "baslik": "Snap judgments.",
          "metin": "Your powers of observation are a strength — until they fire too fast. You read a person or a situation in a second and file it, and sometimes you file it wrong: an initial appearance hardens into a verdict, and a colleague, a director, or a whole approach gets written off on first impression. The cost is the good stuff you never discover because you'd already decided."
        },
        {
          "baslik": "Living in emergency mode.",
          "metin": "You do little advance planning, so you tend to live in a state of urgency — which suits you but breeds chaos for the people around you. Poor time management, a hard time saying no, more taken on than can fit: the pattern is comfortable from the inside and exhausting from the outside. Firefighting is thrilling; it's also a way of never having to build the thing that would stop the fires."
        },
        {
          "baslik": "Allergic to dull.",
          "metin": "You hate boredom and want life new, stimulating, and quick — but reality isn't always, and neither is a long run, a repetitive rehearsal process, or the low-key middle stretch of any big project. When the stimulation drops, so can your patience and your drive, and you can find yourself wanting out of exactly the commitments that only pay off if you stay in."
        },
        {
          "baslik": "The discomfort of true uncertainty.",
          "metin": "Your whole system is built to act — so the situations that unsettle you most are the ones where there's nothing yet to do: genuine ambiguity, a problem with no visible handle, a wait with no clear task. When the resources aren't there and the way forward isn't legible, the ground can feel strange under you. This isn't a flaw in the engine; it's the engine idling. Knowing that is half the remedy — some scenes and some seasons simply ask you to stay in the not-yet-knowing a little longer than is comfortable."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Keep experimenting, improvising, and moving — that's where your difference lives. Choose work and rooms that let you act on your feet and stay flexible; put you behind a desk or inside a rigid procedure and you'll wither, and there's no reason to arrange your career against your own nature."
        },
        {
          "baslik": "Turn the eye inward, too.",
          "metin": "Your attention points outward by default — always on the environment, the task, the next move — which means the one landscape you scan least is your own. Every so often, deliberately, stop and look inward: what do I actually need here, what am I avoiding, what's driving this. It won't come naturally, and it's worth building anyway; the blind spots you leave unlit are the ones that trip you."
        },
        {
          "baslik": "Consider the consequences.",
          "metin": "You take risks by instinct and you're usually right about your own abilities — but “usually” is doing a lot of work in that sentence. Before the big leaps, spend a genuine minute on the downside: what happens if this goes wrong, and can I afford it? It's not a brake on your boldness; it's insurance for it — and a quiet cure for the impatience, too."
        },
        {
          "baslik": "Sketch a loose plan.",
          "metin": "You live so fully in the present that the future can ambush you. You don't need a rigid five-year map — that would suffocate you — but a loose frame helps: a rough sense of where you're heading so today's action points somewhere. Keep it light enough that you'll actually use it, and let it catch you when the fires die down and there's suddenly nothing urgent to do."
        },
        {
          "baslik": "Finish before you jump.",
          "metin": "Hopping from urgency to urgency is comfortable for you, but work needs to be finished and wrapped, not just started and left glowing. Practice staying with one thing through its dull final stretch before you leap to the next bright emergency. Look at the whole arc, not only the burning piece in front of you — that's the difference between a busy actor and a built one."
        },
        {
          "baslik": "Check the rulebook first.",
          "metin": "You follow your own systems and internal codes — not out of defiance, but because it rarely occurs to you that there might be an established protocol worth checking. A lot of unnecessary friction disappears if you get your plan cleared before you charge ahead. And if a stretch ever gets genuinely heavy — the kind of heavy that outlasts a good night's sleep — talking it through with someone is always an option, no pressure, entirely your choice."
        }
      ],
      "finallySection": [
        "You've chosen a profession that runs on exactly your equipment: physicality, quick reflexes, nerve, and the ability to read and work a live space. You'd have gone quietly mad behind a desk — and even now, you know you could never get stuck at one. Expressing yourself, especially through the body, is natural and immediate for you; your ability to assess the here-and-now and act on it is your single greatest resource, and it happens to be the thing live performance most rewards. Hooray!",
        "The work will keep handing you your favorite conditions: a bit unpredictable, a bit of adventure in the day, real problems to solve on the spot. Protect that — you want projects that give you room to solve things in the moment, without heavy procedure or a plan you're not allowed to leave. And notice the quiet asset your answers revealed: under the improviser's nerve sits a real analyst. You don't only wing it; you understand the machine you're winging. Trust that half of yourself as much as the fast half — it's what will keep your instinct from hardening into a bag of reliable tricks.",
        "About technique: your doorway is the body and the action — you'll work best from the outside in, building the character through how she moves, stands, breathes, and does, and letting the inner life follow the physical score. That's a legitimate and powerful path, and it's yours. One thing to be precise about, because it matters: **the emotions you play are built for the character and owned by the character** — grown from the character's body, the character's situation, the character's story, never mined from your own past. You construct them from the outside in. Your body is a strong enough instrument to build everything the role needs — that is, in fact, the whole point of it."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is action and the body: you understand a character by seeing what she does, doing it yourself, and reading the physical truth of her. So your set is built around movement, and it keeps sending you back to your feet — ask, then walk it, then ask again. For you that walk isn't a break from the analysis; it is the analysis.",
      "sorular": [
        {
          "metin": "What do we know about the character's physicality?"
        },
        {
          "metin": "What do we know about her/his problems?"
        },
        {
          "metin": "What is it — and what is it not?"
        },
        {
          "metin": "What is happening — when, where, and how?"
        },
        {
          "metin": "Who else do I know who has this problem? How do they move, act?"
        },
        {
          "metin": "Walk for a while as the character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes.",
          "vurgu": true
        },
        {
          "metin": "What was this character's childhood like? Parents? Environment?"
        },
        {
          "metin": "What amused her/him as a child?"
        },
        {
          "metin": "What were her/his favorite games as a child?"
        },
        {
          "metin": "What were her/his movements like — physically?"
        },
        {
          "metin": "What were her/his challenges? How did she/he react to them?"
        },
        {
          "metin": "Walk for a while as the character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes.",
          "vurgu": true
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships?"
        },
        {
          "metin": "Where does she/he actually live?"
        },
        {
          "metin": "What is her/his occupation? What is the relationship with the job?"
        },
        {
          "metin": "How does doing this job affect her/his movements?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his movements throughout the day, and take notes."
        },
        {
          "metin": "Walk for a while as the character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes.",
          "vurgu": true
        },
        {
          "metin": "How does she/he deal with stress? What happens in the body?"
        },
        {
          "metin": "How does she/he have fun these days? What happens in the body?"
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character."
        },
        {
          "metin": "Walk for a while as the character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes.",
          "vurgu": true
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How?"
        },
        {
          "metin": "Is there love in her/his life right now? What feelings and actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his body?"
        },
        {
          "metin": "Walk for a while as the character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes.",
          "vurgu": true
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Walk for a while as the character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes.",
          "vurgu": true
        },
        {
          "metin": "How does all of the above fit into what you're doing now — physically?"
        },
        {
          "metin": "What else needs to be done? What is missing?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "INFJ": {
      "kod": "INFJ",
      "surum": "v0.1 (new; item-audit applied; Visionary family, canon-checked)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing. Visionary talent language to be trued-up against Filiz's Levesque frame when available.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are insightful, warm, quietly intense, principled, deep — someone who sees into people and into where things are heading, and cares, underneath the calm, with real fire.",
        "If we had to say it in one line: you see the whole of someone before you can explain how — and you're usually right.",
        "You understand things by seeing into them. Where others gather details and assemble a picture piece by piece, you tend to arrive at the whole first — a sense of who someone really is, what's driving them beneath what they say, where a situation is quietly heading — and only afterward find the evidence that was there all along. This isn't magic; it's a real faculty, a fast, deep pattern-reading that happens below the level of words. You may not always be able to justify a read on demand, but you learn, over time, to trust it, because it keeps turning out to be true.",
        "You read people with unusual depth. You sense the unspoken, the half-hidden, the feeling underneath the surface — and you feel it, not just notice it; other people's inner weather reaches you almost as your own. This makes you warm and quietly attuned, the person others end up confiding in. But you keep your own depths private, sharing them only with the few who've earned their way in, so you can seem gentle and open while remaining, underneath, quite unknown.",
        "Under the calm runs conviction. You're guided by a strong inner sense of what matters and what's right, and though you rarely announce it, you won't betray it — the people who mistake your softness for having no edges are always surprised when they meet the steel. What moves you is meaning: you want your life and your work to be about something real, and you're quietly, privately intense about it in a way the easy surface doesn't show.",
        "You draw your energy from solitude and from a few deep connections, not the crowd. You think a thing fully through inside before you speak it, and you like things resolved rather than left hanging — once you've seen where something is going, you want to move toward it. You can seem quiet, even reserved, while a great deal is happening underneath."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "Seeing the whole person.",
          "metin": "You grasp a character whole — her hidden core, her real motive, the wound underneath the behavior — often early, and often before you can fully explain it. This is rare treasure for an actor: while others assemble a character trait by trait, you sense the living center first and then build outward to justify it. Learn to trust that early read; it's usually pointing at the truth of her, and the truth of her is exactly what a performance has to find."
        },
        {
          "baslik": "The reader of the unspoken.",
          "metin": "You feel your way into other people's inner worlds with unusual delicacy — the buried feeling, the thing they'd never say, the tension under the politeness. On stage this becomes the ability to inhabit a character from the inside, to carry her hidden emotional life as if it were weather you'd walked through, and to let an audience sense a whole secret soul beneath the surface of what she does and says. You don't play the line; you play everything underneath it."
        },
        {
          "baslik": "The long through-line.",
          "metin": "You see where things are heading — a scene, a character's arc, a whole story's shape — and you hold the throughline in mind while others are lost in the moment. You grasp how this beat connects to that ending, why this small choice matters three scenes later, where a person is quietly travelling across the whole piece. This gives your work architecture: your choices serve the whole, because you can actually see the whole."
        },
        {
          "baslik": "Quiet conviction.",
          "metin": "Under the gentleness is a spine of values, and it gives your work an authenticity that can't be manufactured. You won't lend yourself to what feels false, and you bring to a character a genuine moral seriousness — you find what she believes and what she'd die for, and you play it as if it mattered, because to you it does. That depth of conviction is felt by an audience even when they couldn't name it."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours.",
      "obstacles": [
        {
          "baslik": "Certain too soon.",
          "metin": "Your insight arrives fast and usually true — which can make it hard to notice the times it isn't. Once you've seen a character or a person a certain way, that early read can harden into conviction and close you to evidence that would have revised it. The same fast, whole-picture seeing that is your gift can, unchecked, become a first impression you defend rather than a hypothesis you test. Hold your insights firmly and your certainty loosely."
        },
        {
          "baslik": "The gap between the ideal and the real.",
          "metin": "You carry a vision of how things could be — a performance, a production, a relationship — so vivid that the actual, imperfect version can feel like a disappointment, including the version you produced yourself. The idealism that fuels your best work can curdle into harsh self-judgment: nothing quite matches the picture inside. Learning to let a true, finished, imperfect thing be good — rather than measuring it against a perfect that doesn't exist — is a lifelong and worthy piece of work."
        },
        {
          "baslik": "Unknown behind the openness.",
          "metin": "You give others warmth and attention while keeping your own depths private — which can leave even the people close to you, and your collaborators, not quite knowing you. In a solitary life this costs little; in a collaborative craft it can. A director can't build on what you never voiced, and a scene partner needs some of your inner life to play with. The reserve that protects you can quietly wall you off from the very people trying to meet you."
        },
        {
          "baslik": "Everyone's weather becomes yours.",
          "metin": "You feel other people's emotions so directly that a room full of tension or grief doesn't just reach you — it moves in. You can absorb the company's storms and finish a working day emotionally spent without having spent it on your own scenes. The sensitivity that lets you understand everyone is the same one that can flood and exhaust you, especially when you haven't learned to tell your own weather from what you've picked up."
        },
        {
          "baslik": "Retreating instead of speaking.",
          "metin": "When something hurts or disappoints you — a person, a process, a betrayed value — your instinct is often to withdraw quietly rather than name it. You disappear a little, protect the soft inside, let the distance grow. But the unspoken hurt doesn't resolve; it goes underground, and the people who'd have wanted to repair it never knew there was anything to repair. Your silence protects you now and costs you later."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Your insight, your depth, and your feel for the whole are the real thing — and you likely underestimate them. Choose work with genuine depth and meaning in it, and rooms safe enough for you to open in; build your working life around a few trusted collaborators rather than a crowd. For you, meaning and safety aren't luxuries — they're the soil the whole plant grows in."
        },
        {
          "baslik": "Hold insight, test certainty.",
          "metin": "Keep trusting the early read — it's a real gift — but hold it as a strong hypothesis rather than a closed verdict. When you've seen a character a certain way, deliberately go looking for what would complicate it: the evidence for the opposite, the reading you dismissed. Your insight plus a little humility about it is far more powerful than insight defended. The truest character is usually richer than your first, brilliant glimpse."
        },
        {
          "baslik": "Say the hard thing before you vanish.",
          "metin": "When something wounds or disappoints you, practice naming it — quietly, in your own gentle way — instead of withdrawing. A peace kept by your silence isn't peace; it's you slowly disappearing from your own relationships and your own collaborations. It may cost a little friction now; it saves far more hurt later. The people worth keeping want to know what's true for you, and your director and partners need it."
        },
        {
          "baslik": "Guard your own weather.",
          "metin": "Learn to tell, in the moment, which feelings are yours and which you've absorbed from the room — naming the borrowed ones is often enough to set them down. Build a small daily habit of checking in with yourself before you tune in to everyone else. This is how you keep your empathy as a gift rather than a flood, and how you protect enough of yourself to actually do your own work."
        },
        {
          "baslik": "Let good be good.",
          "metin": "The gap between your vision and the real result will never fully close — that's the nature of making anything. So practice, deliberately, calling a true and finished thing good enough, even when it isn't the perfect picture in your head. Finishing an imperfect real thing beats polishing an ideal one forever. And if the harder inner work — the self-judgment, the boundaries, the standing up for yourself — ever feels like more than you want to carry alone, individual coaching is always there if you'd like it; no pressure, entirely your choice."
        }
      ],
      "finallySection": [
        "You've chosen a profession that runs on exactly your materials: insight into people, depth of feeling, a sense of meaning, and the ability to see and inhabit a character's hidden inner life. Where some actors work from the outside in, you begin in insight — the whole person, sensed early — and build outward from there, and that gives your best performances a depth and a truthfulness an audience feels even when they can't name it. You don't play the surface of a character; you play the secret soul underneath. Hooray!",
        "One thing to protect above all: meaning. You're the kind of artist whose fire is fed by believing the work is about something real — its truth, its purpose, what it says. Purely cynical or empty projects won't just bore you; they'll dim you at the root. So keep as much of your working life as you can connected to what you actually care about. For you that isn't a preference — it's how the instrument stays lit.",
        "Your best environments are safe, deep, and genuinely meaningful — few shallow distractions, room to explore, a director you can trust and a few collaborators you can open with. You can survive colder, more superficial rooms, but you won't open fully in them, and your openness is the whole gift. When you can choose, choose the room where it's safe to go deep — and remember to bring enough of yourself into it that the people there can actually meet you.",
        "About technique: your doorway is insight and the inner life, reached quietly and from within, so you'll work best inside-out — beginning from who the character truly is beneath the surface, and letting everything grow from that seen center. That path is deeply, natively yours. One thing to be precise about, because it matters: **inside-out means building the character's inner life first.** The feelings and depths you play are designed and owned by the character — grown from the character's story, the character's conscience, the character's wounds. It is never an invitation to dig up your own. You imagine your way in; you don't excavate. Your insight and your feeling for truth are strong enough to build everything the role needs — that is, in fact, the whole point of them."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is insight — you tend to see the whole of a character early, then work to understand and justify what you've seen. So your set honors both movements: first the deep questions that meet your insight where it lives, then the ones that test and enrich it, so your brilliant first glimpse becomes a fully built and defensible person rather than a fixed first impression. *Meet the character whole:*",
      "sorular": [
        {
          "metin": "Who is this character, really — beneath what she/he shows the world? What's the hidden core?"
        },
        {
          "metin": "What is my character truly driven by — the real motive under the stated one?"
        },
        {
          "metin": "Where is she/he heading across the whole story — the throughline, the arc, the destination?"
        },
        {
          "metin": "What does my character believe? What would she/he never do, and what would she/he die for?"
        },
        {
          "metin": "What is the wound underneath — the old hurt still shaping how she/he moves through the world?"
        },
        {
          "metin": "Now test and enrich what you've seen:",
          "vurgu": true
        },
        {
          "metin": "What are the contradictions in this character — the ways she/he is two opposed things at once, complicating my first read?"
        },
        {
          "metin": "What evidence would argue against my early impression? What am I not seeing?"
        },
        {
          "metin": "What do we know about the character's emotions — and what does she/he feel but never show?"
        },
        {
          "metin": "What was this character's childhood like? Parents? Environment?"
        },
        {
          "metin": "What were her/his most common emotions? Where did she/he feel them most in the body?"
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships? Who are the people around her/him?"
        },
        {
          "metin": "Who does she/he get along with best — and worst?"
        },
        {
          "metin": "How does she/he feel about herself/himself?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his feelings and interactions throughout the day, and take notes."
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character. What does she/he feel?"
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How?"
        },
        {
          "metin": "Is there love in her/his life right now? What feelings and actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his life, feelings, body, and relationship patterns?"
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "Having walked it — what do you now know about her/him that seeing alone didn't tell you?"
        },
        {
          "metin": "What else could be true of her/him that your first insight hadn't allowed for?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "INFP": {
      "kod": "INFP",
      "surum": "v0.1 (new; item-audit applied; ISFP/ENFP templates combined)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are gentle, imaginative, deeply principled, quietly intense — an idealist with a private inner world, led always by a sense of what is true and what could be.",
        "If we had to say it in one line: still water on the surface, and underneath it a fire that burns for what matters.",
        "You are guided from the inside, by a core of values so personal you can rarely explain them fully — you just know, in your body, when something is right and when it isn't. That inner compass is the deepest thing about you. You'll bend a long way to keep the peace, but there is a line, and it's made of conviction rather than rules; the people who mistake your softness for having no edges are always surprised when they meet it. What moves you is not success or status but meaning — you want your life and your work to be about something that matters.",
        "And your imagination doesn't stay on the ground. Where some people see what is, you see what could be — the possible version, the deeper meaning, the story underneath the story. You read between the lines by instinct, follow hunches you can't yet justify, think in metaphor and image and connection. A character, for you, is never just the words on the page; she's a whole inner life waiting to be imagined into being, and imagining her is the part you love most.",
        "You keep this rich inner world mostly private. You restore your energy alone, not in the crowd, and you tend to seem quiet or a little distant until someone earns their way in. You think a feeling through inside — often deeply, often for a long time — before you ever speak it, if you speak it at all. Your heart shows less in what you say than in what you make: a piece of writing, a performance, a small true act of care. The made thing is where you become articulate.",
        "You're flexible and open, sometimes to a fault — you can see so many sides of a thing that landing on one becomes hard. And you're modest, quick to underestimate yourself, more comfortable devoted to the work than claiming credit for it. You don't need the spotlight. You need the work to be true."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "The inner compass.",
          "metin": "You carry a private, deeply felt sense of what is true — built inside, from your own values, never borrowed from the room. You read every situation and every character through it: what do they care about, what would they never do, what would they die for. For an actor this is rare treasure. You find the moral centre of a character faster than almost anyone, because locating the moral centre of things is simply how you see the world. Give you a role with a soul to find, and you will find it."
        },
        {
          "baslik": "The imagining depth.",
          "metin": "Your imagination works in meaning and possibility — between the lines, underneath the obvious, toward what a moment could become. You don't build a character from the facts alone; you dream her whole inner life into existence, the private thoughts, the buried longing, the thing she'd never admit. This is the engine of deep, interior performance: while others play the scene, you play the ocean under it."
        },
        {
          "baslik": "The made thing.",
          "metin": "Your truest expression comes not through talk but through what you create — writing, performance, image, a carefully chosen silence. You likely work things out on the page or in the body before you can say them aloud, and given the right channel — craft over conversation — depths appear that no amount of discussion would have reached. Your art is where your inner life finally speaks at full volume."
        },
        {
          "baslik": "Principled independence.",
          "metin": "You move by your own inner rhythm, trusting your own instincts about what is right and real rather than matching the established pattern. You have little tolerance for the false, the cynical, or the cruel — and though you rarely confront it loudly, you won't lend yourself to it. Lived quietly, day after day, that refusal to betray your own truth is its own kind of courage, and it gives your work an authenticity that can't be manufactured."
        },
        {
          "baslik": "Quiet empathy.",
          "metin": "You feel your way into other people's inner worlds with unusual delicacy — sensing the unspoken, the tender, the half-hidden. You don't broadcast it; you simply understand, often more than you let on. On stage this becomes the ability to inhabit a character from the inside, to carry her feelings as if they were weather you'd walked through — and to make an audience feel they've met a real and secret soul."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours:",
      "obstacles": [
        {
          "baslik": "The gap between the ideal and the real.",
          "metin": "You carry a vision of how things could be — a performance, a production, a life — so vivid that the actual, imperfect version can feel like a disappointment, sometimes including the version you yourself produced. The same idealism that fuels your best work can curdle into harsh self-judgment: nothing quite matches the picture in your head. Learning to let good be good, rather than measuring everything against a perfect that doesn't exist, is a lifelong and worthy piece of work."
        },
        {
          "baslik": "Indecision.",
          "metin": "You're open and adaptable, but there's a fine line between open and unanchored — and sometimes you see so many sides, and weigh so many meanings, that you can't land on one. You may sway, changing your mind with each persuasive voice, especially the voices of people you love. The compass inside you is reliable; it's committing to its reading out loud, and soon enough, that's the hard part."
        },
        {
          "baslik": "Retreating instead of speaking.",
          "metin": "When something disappoints or hurts you — a person, a process, a broken value — your instinct is often to withdraw quietly rather than say it. You disappear a little, protect your soft inside, let the distance grow. But the unspoken hurt doesn't resolve; it just goes underground, and the people who'd have wanted to fix it never knew there was anything to fix. Your silence protects you in the moment and costs you over time."
        },
        {
          "baslik": "Living too far inside your head.",
          "metin": "Your inner world is so rich that the outer one — the logistics, the deadlines, the practical follow-through, the here-and-now details — can slip out of focus. You may be unprepared for what's coming, tangled in the practical affairs you'd rather not think about, or lost in imagining a thing when the moment asked you to simply do it. The dreaming is your gift; it just occasionally forgets to come back down."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Your imagination and your inner compass are the real thing — stop underestimating them, which you do constantly. Choose work that means something to you and rooms that feel safe enough to open in, and build your working life with minimal rigid structure inside relationships you trust. For you, meaning and safety aren't luxuries; they're the soil the whole plant grows in. Starve them and you wilt; feed them and you flower."
        },
        {
          "baslik": "Let good be good.",
          "metin": "The gap between your vision and the real result will never fully close — that's the nature of making anything. So practice, deliberately, calling a true and finished thing good enough, even when it isn't the perfect picture in your head. Finishing an imperfect real thing beats polishing an ideal one forever. Your harshest critic lives inside your own skull; you don't have to obey it."
        },
        {
          "baslik": "Say the hard thing before you vanish.",
          "metin": "When something wounds or disappoints you, practice naming it — quietly, in your own gentle way — instead of withdrawing. A peace kept by your silence isn't peace; it's you slowly disappearing from your own relationships. It may cost a little friction now; it saves far more hurt later. The people worth keeping want to know what's true for you."
        },
        {
          "baslik": "Come back down on purpose.",
          "metin": "Build small, gentle habits that bring you from the inner world to the outer one — a simple list, a fixed hour for the practical things, a trusted person who helps you handle the logistics you'd rather ignore. You don't need to become a different person; you need a few reliable ropes back down to the ground so the dreaming doesn't leave you stranded up there."
        },
        {
          "baslik": "Make gentle plans.",
          "metin": "You can look ahead without losing your openness — the trick is soft, open questions rather than rigid schedules. “What kind of work do I want to be making in five years? What does a meaningful life look like to me? What do I want to feel at the end of it?” Questions like these focus your energy without caging your freedom. And if the harder inner work — the self-judgment, the boundaries, the standing up for yourself — ever feels like more than you want to carry alone, individual coaching is always there if you'd like it; no pressure, entirely your choice."
        }
      ],
      "finallySection": [
        "You've chosen a profession that runs on exactly your materials: imagination, empathy, the search for meaning, and the ability to build and inhabit a rich inner life. Where some actors work from the outside in, you begin in the soul and let everything else follow — and that gives your best performances a depth and a truthfulness audiences can feel even when they can't name it. You don't play a character; you become the secret inner weather of one. Hooray!",
        "One thing to protect above all: meaning. You are the kind of artist whose fire is fed by believing in the work — its truth, its purpose, what it's for. Purely commercial or cynical jobs won't just bore you; they'll dim you at the root. So keep as much of your working life as you can connected to what you actually care about. For you that isn't a preference — it's how the instrument stays lit.",
        "Your best environments are safe, gentle, and creatively free — few rigid rules, room to explore, colleagues who are kind and a director you can trust. You can survive harsher rooms, but you won't open fully in them, and your openness is the whole gift. When you can choose, choose the room where it's safe to be true. Protect that condition like the working essential it is.",
        "About technique: your doorway is meaning and the inner life, reached quietly and from within, so you'll work best inside-out — beginning from what the character believes, longs for, and can't say, and letting everything grow from there. That path is deeply, natively yours. One thing to be precise about, because it matters: **inside-out means building the character's inner life first.** The feelings and longings you play are designed and owned by the character — grown from the character's story, the character's conscience, the character's wounds. It is never an invitation to dig up your own. You imagine your way in; you don't excavate. Your imagination and your feeling for truth are strong enough to build everything the role needs — that is, in fact, the whole point of them."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is meaning and inner truth — reached through imagination, values, and the story underneath the story. You understand a character the way you'd understand a soul: from the inside, through what she believes and longs for. Your set moves between the deep questions and the wide-open imaginative ones, because that's how your mind actually travels — inward, then outward, then inward again. *Begin at the centre:*",
      "sorular": [
        {
          "metin": "What are my character's values? What does she/he care about most — in life, and within this situation?"
        },
        {
          "metin": "What would she/he never do? What would she/he die for?"
        },
        {
          "metin": "Where did my character learn that this is the most important thing in life? What is the heart-breaking story behind that conviction?"
        },
        {
          "metin": "What is my character longing for — the thing beneath the thing she says she wants?"
        },
        {
          "metin": "How does my character feel about the issue? How do the others feel — and how does that make my character feel?"
        },
        {
          "metin": "Now open the imagination:",
          "vurgu": true
        },
        {
          "metin": "What do we know about the character's present, past and future?"
        },
        {
          "metin": "In what ways might we understand her/him better?"
        },
        {
          "metin": "How else could we see her/him?"
        },
        {
          "metin": "What could we learn about this character if we could time-travel with them?"
        },
        {
          "metin": "— Earliest memory of my character? · Happiest memory? · Saddest memory? · Where did she/he get most embarrassed? · The biggest pain in my character's life? · The biggest joy? · What did she/he play as a child — which games, and why? · When and how did my character meet that person (the one who matters most now)? · What feelings and sensations come in times of distress?",
          "vurgu": true
        },
        {
          "metin": "What were her/his most common emotions? Where did she/he feel them most in the body?"
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships? Who are the people around her/him?"
        },
        {
          "metin": "Who does she/he get along with best — and worst?"
        },
        {
          "metin": "How does she/he feel about herself/himself?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his feelings and interactions throughout the day, and take notes."
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character. What does she/he feel?"
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How?"
        },
        {
          "metin": "Is there love in her/his life right now? What feelings and actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his life, feelings, body, and relationship patterns?"
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "How else could you see all this? If you shift your perspective now, what else do you notice about your character?"
        },
        {
          "metin": "Can you imagine anything else?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "INTJ": {
      "kod": "INTJ",
      "surum": "v0.1 (new; item-audit applied; Visionary family, canon-checked)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing. Visionary talent language to be trued-up against Filiz's Levesque frame when available.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are strategic, independent, precise, quietly self-assured — a long-range thinker who sees where things are heading and builds, deliberately, to get there.",
        "If we had to say it in one line: you see the whole system, and the plan to master it, before most people have seen the problem.",
        "You think in structures and in the long view. Where others work move by move, you tend to see the whole shape at once — how the parts connect, where the pattern is going, what it will take to get from here to the destination — and then you build a deliberate plan to reach it. Insight and strategy run together in you: you don't just perceive where things are heading, you organize toward it, methodically and independently. Half-formed thinking bothers you; you want the model that actually holds, and you'll rework it until it does.",
        "You are independent to the core. You trust your own analysis over received wisdom, you're skeptical of doing a thing simply because it's always been done, and you'd rather understand something from first principles than take it on authority. You hold high standards — highest for yourself — and you have real confidence in your own judgment, earned from a track record of your reads turning out right. You resist being managed, hurried, or told what to think; what you want is the room and the autonomy to work a problem through your own way.",
        "This all happens quietly, and mostly alone. You restore your energy in solitude, you think a thing fully through before you speak it, and you say what's needed without ceremony. You can seem reserved, self-contained, hard to read — you keep the reasoning private and offer the conclusion. You value competence and depth in the people around you, and you have limited patience for what you experience as muddled thinking or wasted motion, which the people on the receiving end can feel more sharply than you intend.",
        "Underneath the cool surface is genuine intensity — about ideas, about mastery, about getting the thing right. You care, deeply, about the quality of what you make. You just tend to show it through the work rather than announce it, and to trust that the work will speak for itself."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "Strategic vision.",
          "metin": "You see the whole — the architecture of a play, the arc of a character across the entire story, where a person is quietly heading from the first scene to the last — and you hold that whole in mind while others work moment to moment. This gives your choices genuine structure: nothing is arbitrary, because every choice serves a design you can actually see. You build characters with a throughline, because you grasped the throughline before you built anything."
        },
        {
          "baslik": "Seeing the system beneath.",
          "metin": "You understand a character the way you understand any complex system: what drives her, how her logic runs, why this produces that, where it all leads. You grasp the deep structure of a person — the machinery under the behavior — and you reconstruct her into something coherent and true, all the way down. Where others play the surface, you understand the engine, and your readings hold up because you built them to."
        },
        {
          "baslik": "Independent originality.",
          "metin": "You think for yourself, from first principles, unbothered by how it's usually done — and so you arrive at readings a more obedient mind would never reach. You'll question the received interpretation of a role, a scene, a whole approach, not to be difficult but because you genuinely can't accept what doesn't hold up under scrutiny. This gives your work a real fingerprint: choices that are yours, earned honestly, that no one handed you."
        },
        {
          "baslik": "The will to master it.",
          "metin": "You don't stop at competent. You have a deep drive toward mastery — you'll rework, refine, and study until the thing actually holds, and you have the independence and discipline to get yourself there without anyone pushing. In a craft you can spend a lifetime deepening, this hunger to truly understand and truly master is a formidable engine. You improve relentlessly, mostly on your own steam."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours — plainly, because you'd want it straight.",
      "obstacles": [
        {
          "baslik": "The overlooked heart.",
          "metin": "Living so much in analysis and strategy, you can under-weigh the very thing acting is finally made of: feeling — the felt, the unspoken, the moment that lands in the body rather than the mind. You may treat a character's emotions as a system to map rather than a weather to inhabit, and treat your own the same way, or forget they're there. Your understanding is real; just remember a performance breathes through feeling, and a character understood but not felt stays behind glass. For you, this is the growth edge — the biggest one in your whole profile."
        },
        {
          "baslik": "Certainty that closes.",
          "metin": "Your insight arrives fast and your judgment is usually sound — which can make it genuinely hard to notice the times it isn't. Once you've analyzed a character or a situation, your confidence in that read can harden into a certainty you defend rather than a hypothesis you test, and you can dismiss other people's input as less rigorous than your own. The independence and confidence that are real strengths can, unchecked, tip into arrogance — and the cost lands on the collaborators who stopped offering because they felt overruled."
        },
        {
          "baslik": "The self-sufficiency trap.",
          "metin": "You're used to working things out alone, to your own high standard, without needing anyone — and in a solitary discipline that would be pure strength. But acting is collaborative to its bones. Your instinct to figure the character out privately and arrive with the finished analysis can shut your scene partners and your director out of the very process that's supposed to be shared. A read you never voiced can't be built on; a plan you won't let others alter isn't really an ensemble's."
        },
        {
          "baslik": "Impatience with the muddled.",
          "metin": "You value competence and depth, and you can be quietly (or not so quietly) impatient with people who process differently, work slower, or lead with feeling rather than logic. But some of those people are your scene partners, and what they bring — the emotional, the intuitive, the un-rigorous — is often exactly what a scene needs and you don't naturally supply. The impatience that protects your standards can isolate you from the collaborators you actually depend on."
        },
        {
          "baslik": "Too far inside the plan.",
          "metin": "Your gift for seeing the whole and building the design has a shadow: you can commit to the plan so completely that a better idea arriving late — a partner's strange offer, a surprise mid-scene, an impulse that doesn't fit the model — gets treated as a deviation to correct rather than a gift to use. The architecture that gives your work structure can, over-tightened, wall out the living accident where some of the best acting is born."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Your strategic depth, your independence, and your drive toward mastery are real and uncommon — lean on them, and choose work with genuine depth and room to think. You're at your best with a real problem and the autonomy to work it your own way; don't apologize for needing that. A rushed or micromanaged INTJ is a wasted one; a trusted one is extraordinary."
        },
        {
          "baslik": "Let feeling into the work.",
          "metin": "Your under-trained muscle is the emotional one — so train it on purpose, because for you it's the whole game. When you analyze a character, add a deliberate pass that isn't analysis: what does she feel, in the body, right now, and can I let a version of it actually move through me? You don't have to abandon the strategic mind; you have to let the heart have its turn beside it. The scenes that land are felt, not solved — and letting yourself be moved by the character you've so brilliantly understood is the single most valuable thing you can build."
        },
        {
          "baslik": "Hold your reads as hypotheses.",
          "metin": "Keep trusting your analysis — it's a real gift — but hold it as a strong hypothesis rather than a closed verdict, and go looking, on purpose, for what would complicate it: the evidence against your read, the input you were about to dismiss. Your insight plus genuine intellectual humility is far more powerful than insight defended. And it will make you far easier to work with, which in this craft is not a small thing."
        },
        {
          "baslik": "Let others into the process.",
          "metin": "Practice, deliberately, sharing your thinking before it's finished, and letting your partners and director actually change it. Voice the read you're forming; invite the alteration; treat the plan as the ensemble's rather than yours. This runs against your grain, and it's exactly the growth: acting is made with people, and a design that stays sealed in your head — however brilliant — can't become the shared, living thing a performance has to be."
        },
        {
          "baslik": "Leave the plan open.",
          "metin": "Keep seeing the whole and building the design — it's how you work, and it's powerful. But leave one door unlocked on purpose. Once per rehearsal period, invite the thing you didn't plan: a partner's odd offer, an impulse that doesn't fit the model, a surprise mid-scene met as material rather than error. Your architecture is strong enough to hold a visitor — that's exactly why you can afford one. And if the relentless drive toward mastery ever starts to cost you — your rest, your ease, the people around you — talking it through with someone is always an option; no pressure, entirely your choice."
        }
      ],
      "finallySection": [
        "You've chosen a profession that can genuinely use your strategic mind, your depth, and your drive to master a craft — you build characters whose logic holds all the way down, you grasp the architecture of a whole piece, and you improve relentlessly under your own power. Where others play the surface, you understand the system underneath. A production is lucky to have a mind like yours in it. Hooray!",
        "Now the honest part, because you of all people want it straight: the profession's real challenge for you is feeling and collaboration — the two things your strengths most tempt you to skip. Acting lives in emotion and in other people, and your instincts run toward analysis and self-sufficiency. This isn't a flaw to defend; it's the growth edge, and it's a significant one. The most powerful thing you can build is the bridge from your extraordinary understanding to genuine, embodied feeling — not thinking about the emotion but being moved by the thing you've understood — and the willingness to make the work with people rather than for them. Cross those two bridges and your performances gain the two things pure intellect can't supply: a pulse, and a partner. The mind is a gift. Learning when to set it down, and who to let in, is the mastery.",
        "Your ideal environment is intellectually serious and genuinely autonomous: real depth, room to think, collaborators you respect, and a director who explains rather than commands. Micromanagement, shallowness, and being hurried will shut you down. When you can choose, choose the room that respects your mind — and then, deliberately, let your heart and your collaborators further into it than feels natural. That deliberate opening is where the great work, and the great working relationships, will come from.",
        "About technique: you're strategic and structural, so you'll likely build a character from the inside out in your own way — grasping the whole system of her first, then constructing everything to serve it. That's a legitimate and powerful path. One thing to be precise about, because it matters: **the emotions you play are built for the character and owned by the character** — grown from the character's story, logic, and wounds, never mined from your own past. You construct them; you don't excavate them. You understand better than anyone that a feeling can be built from the inside of a character's logic — so build it. Your mind is strong enough to construct everything the role needs; the mastery, for you, is letting the constructed thing be genuinely felt, not just perfectly understood."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is the system — you understand a character by grasping her whole structure and the logic that runs her. So your set begins where your mind naturally starts, with the architecture, and then deliberately turns toward the two things your analysis can skip: the feeling, and what other people see that you don't. Push yourself to stay with those later questions as long as you stayed with the first ones — that's where your growth as an actor lives. *Map the system:*",
      "sorular": [
        {
          "metin": "Who is this character, structurally — what drives her/him, and how does the logic of that person actually run?"
        },
        {
          "metin": "Where is she/he heading across the whole story — the throughline, the arc, the destination?"
        },
        {
          "metin": "Why does she/he do this — and why this way rather than another? What's the deep design under the behavior?"
        },
        {
          "metin": "What does my character believe? What would she/he never do, and what would she/he die for?"
        },
        {
          "metin": "What is the wound underneath — the old structural fault still shaping how she/he moves through the world?"
        },
        {
          "metin": "Now turn toward feeling — the part the map leaves out:",
          "vurgu": true
        },
        {
          "metin": "What does this character actually feel — in the body, moment to moment — beneath what she/he understands or shows?"
        },
        {
          "metin": "What are the contradictions in her/him — the ways she/he is two opposed things at once, that a clean model would flatten?"
        },
        {
          "metin": "What was this character's childhood like? Parents? Environment?"
        },
        {
          "metin": "What were her/his most common emotions? Where did she/he feel them most in the body?"
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships? Who are the people around her/him?"
        },
        {
          "metin": "Who does she/he get along with best — and worst?"
        },
        {
          "metin": "How does she/he feel about herself/himself?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his feelings and interactions throughout the day, and take notes."
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character. What does she/he feel?"
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How?"
        },
        {
          "metin": "Is there love in her/his life right now? What feelings and actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his life, feelings, body, and relationship patterns?"
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Now stop analyzing and walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes. For you this walk matters most: it's where the system becomes a person, and where understanding gives way to feeling.",
          "vurgu": true
        },
        {
          "metin": "Having walked it — what do you now feel about her/him that the analysis didn't tell you?"
        },
        {
          "metin": "What did a collaborator — a partner, the director — see in her/him that you hadn't? What does that add?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "INTP": {
      "kod": "INTP",
      "surum": "v0.1 (new; item-audit applied; Inventor/Explorer spine, introvert re-pitch)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are curious, independent, precise, quietly original — a mind that has to understand things, most alive when a real problem is turning over inside it.",
        "If we had to say it in one line: you need to know how it truly works — and you won't rest until you do.",
        "You are, above everything, a thinker — and a particular kind: you don't collect facts, you build models. When something interests you, you take it apart in your head to see how it actually functions, and you keep at it, privately and patiently, until the picture is clear and consistent. Half-answers bother you. A shared belief that doesn't hold up under scrutiny bothers you more. You'd rather have the true, complex answer than the comfortable, simple one, and you'll question the whole framework — including your own — to get there.",
        "Your imagination and your logic run together, which is the thing to understand about yourself. One part of you generates: possibilities, connections, what-ifs, the reading nobody else brought. The other part immediately tests: is it consistent, does it hold, where does it break? Most people have one of these; you run both, in a loop, quietly. It's why your ideas are both genuinely original and quietly rigorous — you've already argued yourself out of the weak ones before anyone hears them.",
        "This all happens inside. You restore your energy alone, you think a thing fully through before you speak it, and you often seem quiet or self-contained until a subject you love opens you up — at which point the reserve falls away and the ideas pour out. You keep your inner debates private; people usually meet the conclusion, not the argument that produced it. You can be delightful company on your own terms and slightly baffled by small talk that isn't going anywhere.",
        "You're independent to the bone, and you find rules genuinely puzzling when they can't explain themselves. You're not rebellious for sport — you simply see no reason to follow a procedure that doesn't make sense, and you resist being managed, scheduled, or hurried. What you want is room: room to think, to explore, to arrive at your own understanding in your own time."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "The restless mind.",
          "metin": "You need to understand things — not to use them, simply to know how they truly work — and that hunger is the engine of everything you do well. A character, to you, is a system to figure out: what drives her, how her logic runs, why she does this and not that. You take her apart to see what makes her tick, and you reassemble her into something coherent and true. Curiosity this deep is a genuine gift; most people stop at the first answer, and you keep going until you reach the real one."
        },
        {
          "baslik": "The question-finder.",
          "metin": "Your instinct for the right question — the single question that cracks a scene or a character wide open — is one of the sharpest tools you own, and you should trust it far more than you do. When something about a character puzzles you, that puzzlement is not confusion to be embarrassed by; it's your talent pointing straight at the thing that needs solving. Learn to treat your own questions as the treasure they are. They are usually the door."
        },
        {
          "baslik": "The two engines.",
          "metin": "You invent and you test, in the same private loop. One side of you dreams up possibilities — connections, what-ifs, the angle no one else saw; the other side immediately checks them for logic and consistency, discarding the weak ones before they ever see daylight. This is why your work reads as both original and rigorous: you've done the quality control internally. In character work it means your boldest choices are also your most defensible — you can always say why."
        },
        {
          "baslik": "Original independence.",
          "metin": "You think for yourself, from first principles, unbothered by how it's usually done. You'll question the received wisdom of a scene, a role, a whole approach — not to be difficult, but because you genuinely can't accept what doesn't hold up. This gives your work a fingerprint: choices that are yours, arrived at honestly, that no one handed you. An actor who thinks this independently brings readings a more obedient mind would never reach."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours:",
      "obstacles": [
        {
          "baslik": "The overlooked heart.",
          "metin": "Living so much in analysis, you can under-weigh the very things acting is often made of: emotional needs, values, the felt and unspoken. You may treat a character's feelings as a puzzle to solve rather than a weather to inhabit — and treat your own the same way, or forget they're there. The mind is your home; just remember that a performance breathes through the heart, and a scene understood but not felt stays behind glass."
        },
        {
          "baslik": "Either / or.",
          "metin": "A logical mind loves a clean answer, and you can slip into treating things as true-or-false, right-or-wrong, this-or-that — when a character (like a person) is usually both at once, contradictory and unresolved. The nuance you're so good at spotting in ideas can go missing in people, where the interesting truth is almost always the messy middle rather than one clean side."
        },
        {
          "baslik": "Too cool for the conflict.",
          "metin": "Your instinct in a clash is to step back and analyze it from a safe, rational distance — which can be genuinely useful, and can also read as cold or absent to people who needed you *in* it with them. Some scenes, and some rehearsal-room moments, ask you to be a participant in the heat rather than an observer above it. The detachment that clarifies your thinking can quietly isolate you from your partners."
        },
        {
          "baslik": "The intake that won't close.",
          "metin": "Here's the honest shape of your procrastination: it isn't laziness, it's a preference for continuing to take in ideas rather than committing to one and getting on with it. You'd rather keep the question open, keep exploring, keep the options alive — and so the deciding, the finishing, the delivering all slip. Add a natural distaste for schedules, deadlines, and being organized, and the pattern is a brilliant mind that sometimes arrives late to its own conclusions."
        },
        {
          "baslik": "Lost in the freedom.",
          "metin": "You need room, and you're right to — but the same love of open-ended freedom that lets you think deeply can leave you under-structured: unfocused, disorganized, resistant to the frameworks that would actually get the work delivered. Total freedom is where you explore best and, sometimes, where you finish worst. A little structure isn't the enemy of your mind; it's the delivery system for it."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Protect the thinking — the exploring, the modeling, the private testing loop — because that's where your difference is made. Choose work and rooms that give your mind real problems and real room, and don't apologize for needing time to arrive at your own understanding. A rushed INTP is a wasted one; a trusted one is extraordinary."
        },
        {
          "baslik": "Let feeling into the room.",
          "metin": "Your under-used muscle is the emotional one — so train it on purpose. When you analyze a character, add one deliberate pass that isn't analysis: what does she feel, in the body, right now, and can I feel a version of it too? You don't have to abandon the mind; you have to let the heart have its turn. The scenes that land are usually felt, not just understood — and this is the most valuable growth edge in your whole profile."
        },
        {
          "baslik": "Hold both sides.",
          "metin": "Practice, deliberately, resisting the clean either/or. When you catch yourself deciding a character is this rather than that, ask how she might be both at once — cruel and frightened, loving and cold. The contradictory reading is usually the true one, and holding two opposed things at the same time is a skill you can build. It will deepen every character you touch."
        },
        {
          "baslik": "Decide, then build.",
          "metin": "At some point the intake has to close so the making can begin: pick the reading, commit, and get on with it. For roles, give yourself a lock date — the day the character's core stops being renegotiated and later discoveries become refinements, not rebuilds. Your mind will resist it for a day and thank you on opening night, when there's actually a finished performance to give."
        },
        {
          "baslik": "Borrow a little structure.",
          "metin": "You resist frameworks, so use the lightest possible ones — a simple checklist, a fixed working hour, a trusted person who handles the logistics you'd rather not. These aren't cages for your freedom; they're the ropes that carry your ideas down to the ground where they can actually be delivered. And learn your own downtime: your mind needs genuine rest to do its best work, and running it ragged is a false economy. If a stretch ever feels heavier than rest can fix, talking it through with someone is always an option — no pressure, entirely your choice."
        }
      ],
      "finallySection": [
        "You've chosen a profession full of exactly what you love: unsolved human problems, characters to understand from the inside out, a new system to model every time. Your analytical depth is a real and uncommon gift here — you build characters whose logic holds, whose choices make sense all the way down, whose contradictions you've actually thought through rather than papered over. Where others play the surface, you understand the machine underneath. Hooray!",
        "The profession's honest challenge for you sits right beside your gift: acting lives in feeling and in the moment, and your instinct is to live in analysis and in thought. This isn't a problem to be ashamed of — it's simply the growth edge, and it's a rich one. The most powerful thing you can build is the bridge from your extraordinary understanding to genuine, embodied feeling: not thinking *about* the emotion but letting yourself be moved by the thing you've understood. When you cross that bridge, your performances gain the one thing pure intellect can't give them — a pulse.",
        "Your ideal environment is intellectually alive and genuinely free: real problems, room to think, colleagues who respect ideas, and a director who explains rather than commands. Pure procedure, tight micromanagement, and being hurried will shut you down. When you can choose, choose the room that lets your mind breathe — and then make sure you also let your heart into it.",
        "About technique: you're a natural synthesizer — you'll take the best of every approach, test it, and build your own method from what survives. Almost any training will feed you something. One house rule travels with you wherever you borrow from: **the emotions you play are built from the character's story — designed, constructed, owned by the character — never mined from your own past.** You understand better than anyone that a feeling can be constructed from the inside of a character's logic. So construct it. Your mind is strong enough to build everything the role needs — the trick, for you, is remembering to let the built thing be felt."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is the question itself — you understand a character by finding the right thing to ask about her and following it all the way down. So your set begins as an analyst's toolkit — the questions that take a character apart — and then keeps going, because your mind is never quite done turning a thing over. Trust these; the puzzlement they produce is your talent working. *The analyst's opening:*",
      "sorular": [
        {
          "metin": "What are the gaps — what does the script leave unexplained about this character?"
        },
        {
          "metin": "What needs improving or deepening in my current understanding of her/him?"
        },
        {
          "metin": "How else could I see this? What's the reading I haven't considered yet?"
        },
        {
          "metin": "What are the contradictions in this character — the ways she/he is two opposed things at once?"
        },
        {
          "metin": "Why does she/he do this — and why this way, rather than another?"
        },
        {
          "metin": "Now follow it wherever it goes:",
          "vurgu": true
        },
        {
          "metin": "What do we know about the character's present, past and future?"
        },
        {
          "metin": "In what ways might we understand her/him better?"
        },
        {
          "metin": "What is the big picture? What is she/he doing, trying to accomplish, feel, be?"
        },
        {
          "metin": "What could we learn about this character if we could time-travel with them?"
        },
        {
          "metin": "— Earliest memory of my character? · Happiest memory? · Saddest memory? · The biggest pain in my character's life? · The biggest joy? · What did she/he play as a child — which games, and why? · When and how did my character meet that person (the one who matters most now)? · What feelings and sensations come in times of distress?",
          "vurgu": true
        },
        {
          "metin": "Which senses does this character use most? Are there any seeing, hearing or feeling deficits?"
        },
        {
          "metin": "What were her/his most common emotions? How did she/he express them — and where in the body?"
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships? Who are the people around her/him?"
        },
        {
          "metin": "Who does she/he get along with best — and worst?"
        },
        {
          "metin": "How does she/he feel about herself/himself?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his feelings and interactions throughout the day, and take notes."
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character. What does she/he feel?"
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How?"
        },
        {
          "metin": "Is there love in her/his life right now? What feelings and actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his life, feelings, body, and relationship patterns?"
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Now stop analyzing and walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes. For you this walk matters most: it's where understanding becomes feeling.",
          "vurgu": true
        },
        {
          "metin": "Having walked it — what do you now know that thinking alone didn't tell you?"
        },
        {
          "metin": "Can you imagine anything else? What else could be true of her/him?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "ISFJ": {
      "kod": "ISFJ",
      "surum": "v0.1 (new; item-audit applied; Navigator family, canon-checked)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing. Navigator talent language to be trued-up against Filiz's Levesque frame when available.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are warm, devoted, steady, attentive, quietly generous — the person who notices what someone needs and quietly makes sure it's there, most fulfilled when the people you care about are looked after and the work is done right.",
        "If we had to say it in one line: you take care of things — and of people — without ever needing to be asked.",
        "You are wired to care, and to care in practical, reliable ways. You read the people around you closely — who's struggling, who's tired, who's been forgotten — and you can't help acting on it, usually before anyone's had to say a word. But your care isn't just sympathy; it's service. You remember the thing, you bring the thing, you show up when you said you would and do what you promised. For you, love is mostly a set of quiet, dependable actions rather than grand declarations — and the people lucky enough to be looked after by you often don't realize how much you carry until you're not there.",
        "And here is what grounds all that devotion: you trust what's proven. You work from the tested method, the concrete fact, the way that has actually worked — building from real, specific detail, layer by layer, with an exceptional memory for how things are and how they're properly done. You prepare fully and leave little to chance. So you're not only kind; you're reliable — the rare person who both feels for people and can genuinely be counted on to follow through.",
        "This all happens quietly. You draw your energy from close, trusted relationships rather than the crowd, you keep your own inner world private, and you rarely seek the spotlight — you're happier supporting, doing what needs doing, and taking your reward from the private knowledge that you helped. You take your responsibilities to the people and groups you belong to seriously, and you like things settled and dependable rather than loose and uncertain.",
        "You're modest, often too much so — quick to underestimate yourself, reluctant to take credit, more comfortable devoted to the work and the people than claiming any of the glory. You don't need the applause. You need the people alright and the work done properly."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "Devoted, dependable care.",
          "metin": "You notice who in the room needs support — and then you actually provide it, warmly, practically, without being asked and without needing thanks. In a company this is the invisible infrastructure that holds everything up: someone is quietly making sure the humans are alright, and it's you. Nervous actors steady near you; a hard shooting day is more bearable because you're in it. It's easy to undervalue because it asks for no credit — don't. It's rarer than talent and far harder to replace."
        },
        {
          "baslik": "Building on solid ground.",
          "metin": "You work from what's proven and real — the concrete detail, the tested method, the fact you can stand on. You build a character step by step, layer by layer, from real particulars: where she lived, what she wore, how she actually carried herself. Nothing is left to luck. And so you can do what many gifted actors can't: deliver the same reliable, fully-prepared performance on take one and take forty, night after night. In a profession that quietly runs on dependability, yours is precious."
        },
        {
          "baslik": "The keeper of the real.",
          "metin": "Your memory for concrete human detail is a working instrument. You notice and hold how people actually are — the specific gesture, the real texture of a real life, the true particular — and your characters are believable because they're assembled from that faithful material, not from a vague idea of a person. You don't invent people out of air; you remember them, tenderly and exactly, and lend them to the role."
        },
        {
          "baslik": "The quiet guardian of the room.",
          "metin": "You protect the people and the atmosphere of a company — smoothing what's rough, tending who's hurting, holding the human fabric together, usually without anyone noticing you're doing it. Because the safety you build is so steady and so reliable, people relax into it and do braver work than they could in a colder room. You don't perform this care; you simply provide it, and productions hold together in part because you were quietly there."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours.",
      "obstacles": [
        {
          "baslik": "You, at the back of your own queue.",
          "metin": "Because you put people first so completely, you can lose track of what you yourself need — and find it genuinely hard to ask, especially if asking might inconvenience someone or seem ungracious. You give others a care you almost never request for yourself. Over time this breeds a quiet ache: the one who looks after everyone, wondering who's looking after them. And unspoken needs don't disappear — they curdle into resentment, which is a far heavier guest than an honest request would have been."
        },
        {
          "baslik": "Self-erasure.",
          "metin": "The same modesty that makes you gracious can tip into disappearing — deferring so consistently, and claiming so little, that your own gifts and preferences go unseen, including by you. As an actor this is a real risk: you can support everyone else's work so devotedly that you quietly neglect your own, hanging back from the spotlight your talent has actually earned. Serving others is beautiful; vanishing is not the same thing, and you deserve to be counted among the people worth serving."
        },
        {
          "baslik": "Conflict-avoidance.",
          "metin": "Kind and considerate, you're often so set on keeping the peace that you swallow your own feelings and needs to protect the relationship and the mood. But a peace kept by your silence isn't peace — it's you slowly withdrawing from your own life. Your sensitivity means hurts can land deep and go unspoken, and the friction you avoid today has a way of compounding into something heavier later."
        },
        {
          "baslik": "The grip of the proven way.",
          "metin": "Your trust in the tested method is a strength — until it hardens into “this is how it's done.” A new or unorthodox approach can feel like needless risk, and you can quietly resist the experiments a role sometimes needs. The reliability that serves you can, unmanaged, become caution: the door left closed on the bolder choice simply because it wasn't the familiar one."
        },
        {
          "baslik": "Impatience with the intangible — turned inward.",
          "metin": "You're superb with the concrete and the caring — but the abstract, the theoretical, the coldly analytical can lose you, and your own inner life, kept so private, can become a country you rarely visit. You tend so faithfully to everyone else's weather that you can stop reading your own, until it's louder than you'd like. Knowing your own feelings — not just everyone else's — is a piece of work worth doing on purpose."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Your warmth, your reliability, and your grounded, detailed craft are real and uncommon — lean on them, and choose work and companies that value them. You're at your best where care and dependability matter and where you feel safe; don't let anyone, including yourself, treat your steadiness or your kindness as lesser than flashier gifts. In your hands, devotion is an art, and a production is genuinely lucky to have it."
        },
        {
          "baslik": "Count yourself in.",
          "metin": "Deliberately and often, put your own name on the list of people who deserve care — not instead of others, alongside them. Ask for the thing. Take the role you want. Claim the credit that's actually yours. This will feel uncomfortable and even a little selfish at first; it isn't. It's how you keep from vanishing, and a you who hasn't disappeared is far more use to everyone you love than a martyr running on empty."
        },
        {
          "baslik": "Choose honesty over harmony.",
          "metin": "Practice saying the true thing — quietly, in your own gentle way — instead of swallowing it to keep the peace. It may cost a little friction now; it saves far more hurt later, and it keeps your own needs from silently vanishing. The people worth keeping want to know what's true for you. Let your own voice into the room; it belongs there as much as anyone's."
        },
        {
          "baslik": "Read your own weather.",
          "metin": "You track everyone else's feelings with great skill — turn a little of that attention inward. Build a small daily habit of checking in with yourself before you check in with everyone else: what do I feel, what do I need, what am I avoiding. This isn't self-indulgence; it's how you tell your own emotions apart from the ones you've absorbed from the room, which is a skill your whole instrument depends on."
        },
        {
          "baslik": "Try it the other way once.",
          "metin": "Guard against the grip of the familiar method by experimenting on purpose — once per role, try the unorthodox choice, the approach that isn't how it's usually done. You don't have to keep it; you just have to loosen the reflex that says the safe way is the only way. And if the harder inner work — the boundaries, the self-erasure, the standing up for yourself — ever feels like more than you want to carry alone, individual coaching is always there if you'd like it; no pressure, entirely your choice."
        }
      ],
      "finallySection": [
        "You've chosen a profession that can genuinely use your warmth, your reliability, and your grounded, detailed craft — you build believable human beings from real particulars, you deliver them dependably night after night, and your care makes every company you join a warmer, steadier place to work. You are, quietly, part of what makes good ensembles possible. Hooray!",
        "And notice the pairing that makes you rare: deep warmth and complete reliability in the same person. You feel for people and you can be counted on — the tender heart and the safe pair of hands at once. That combination is a gift to any production, and it's worth knowing your own worth, especially in a casting room, where your modesty may tempt you to undersell exactly the qualities that make you indispensable. Don't disappear. Let them see you.",
        "Your one real hazard is the one your generosity sets for you: giving so much of yourself to everyone else's work and wellbeing that you arrive at your own scenes with nothing left, or hang back from the roles your talent has earned. Care for the company, yes — but count your own work and your own needs among the things worth protecting. Your first responsibility on any production includes the actor you were hired to be.",
        "About technique: your doorway is people and their needs, reached through real, concrete detail, so you'll likely work best inside-out — beginning from who the character loves and answers to, and building the rest from true particulars. That suits you. One thing to be precise about, because it matters: **inside-out means building the character's inner life first.** The feelings and bonds you play are designed and owned by the character — grown from the character's history, the character's people, the character's world. It is never an invitation to dig up your own. You imagine your way in; you don't excavate. Your care and your eye for the real are strong enough to build everything the role needs — that is, in fact, the whole point of them."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is people and their bonds, reached through concrete, observed detail — you understand a character the way you understand someone you're looking after: through who they love, what they need, and the real particulars of their life. Here is the set built for the way your mind works. *Begin with the bonds and the ground:*",
      "sorular": [
        {
          "metin": "Who does my character love, and who loves my character? Who does she/he feel responsible for?"
        },
        {
          "metin": "What are the concrete facts of this life — where she/he lives, works, comes from; the real particulars?"
        },
        {
          "metin": "How does my character feel about the situation? How do the others feel — and how does that make my character feel?"
        },
        {
          "metin": "Who will be affected by what happens, and how?"
        },
        {
          "metin": "What was this character's childhood like? Parents? Environment? What did she/he learn there about being cared for — or not?"
        },
        {
          "metin": "Now go deeper into the person:",
          "vurgu": true
        },
        {
          "metin": "What are the contradictions in this character — the ways she/he is two opposed things at once?"
        },
        {
          "metin": "What do we know about the character's emotions — and what does she/he feel but never show?"
        },
        {
          "metin": "As a child, what was one thing she/he could always be sure of? What was one thing she/he was never sure of?"
        },
        {
          "metin": "What were her/his most common emotions? Where did she/he feel them most in the body?"
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships? Who are the people around her/him?"
        },
        {
          "metin": "Who does she/he get along with best — and worst?"
        },
        {
          "metin": "How does she/he feel about herself/himself?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his feelings and interactions throughout the day, and take notes."
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character. What does she/he feel?"
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How?"
        },
        {
          "metin": "Is there love in her/his life right now? What feelings and actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his life, feelings, body, and relationship patterns?"
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        },
        {
          "metin": "Having walked it — what do you now feel about her/him that gathering the facts didn't tell you?"
        },
        {
          "metin": "What else could be true of her/him that you hadn't allowed for?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "ISFP": {
      "kod": "ISFP",
      "surum": "v0.1 (rewrite of Filiz's original sample; item-audit applied)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are gentle, warm, flexible, quietly independent, deeply principled — attuned to beauty, attuned to people, and led, always, by an inner sense of what is true.",
        "If we had to say it in one line: still water, running deep — and running by its own compass.",
        "You are guided from the inside. Beneath the easygoing, accommodating surface sits a firm and private core of values, and it is that core — not the rules, not the crowd, not the trend — that ultimately decides what you'll do. You'll bend a long way to keep things pleasant, but there's a line you won't cross, and the people who mistake your gentleness for softness are always surprised when they find it. You look for ways to accommodate, and you can struggle with those who won't do the same.",
        "You express yourself more through action than through words. You may seem a little distant at first — you keep your inner world private, and you restore your energy in solitude, not in the crowd — but those who get close come to read your care in the thoughtful things you do rather than the things you say. You tend to think a feeling through inside before you voice it, if you voice it at all; the made thing, more than the spoken sentence, is where your heart tends to show — a piece of writing, a movement, an image, a small act of care.",
        "Your artistic sensibility is finely tuned. You're alive to color, texture, and tone, with an instinct for what will be beautiful, and you take real pleasure in the sensory present — food, music, art, the feel of a good day. You live mostly in the now, rarely driven by ambition, content with the simple, deep pleasures: the people you love, and the world reaching you through the senses. And you're grounded in it — you trust what's concrete and real, the facts and the detail, over the abstract and the theoretical.",
        "You are modest, often to a fault — quick to underestimate yourself, reluctant to take the spotlight, happier in a supporting role than at the center. Sensitive and responsive, you quietly step in to do what needs doing, and your reward is the private knowledge that you helped. You don't need the credit. You'd just like the work to be good, and the people to be alright."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "The inner compass.",
          "metin": "You have an independent, private sense of what's right — built inside, from your own values, not borrowed from the room. You concentrate best when you can make sense of things through that internal process, and you read every situation through the lens of what people care about and what the human truth of it is. You won't sacrifice your principles for anything, and you have little patience for cheats, liars, or hypocrites — though rather than confront them, you tend to quietly withdraw. For an actor this compass is gold: you find the moral centre of a character faster than most, because finding the moral centre is simply how you see."
        },
        {
          "baslik": "Elegance in problem-solving.",
          "metin": "You have an aesthetic feel for the graceful solution. You're deeply observant, and gifted at synthesizing everything you sense and experience into a coherent whole — which takes you a little time, because you process inwardly and thoroughly before you conclude. You're an expert at spotting patterns and connections others miss, and the solutions you offer — especially to other people — tend to be practical, sensible, and genuinely useful in the present. Quiet, but rarely wrong."
        },
        {
          "baslik": "The made thing.",
          "metin": "Your care and your perceptions come out most clearly not in speech but in what you make — a piece of writing, a movement, an image, a carefully chosen gesture. You may function best with a pen or a notebook in reach, working things out on the page or in the body before you ever say them aloud. Give yourself the channel that fits — the room to express through craft rather than conversation — and depths appear that no amount of talking would have reached."
        },
        {
          "baslik": "Bold and spontaneous — in your own way.",
          "metin": "It surprises people, given the quiet: you know in your bones that life is short and the moment must be seized. You can live an intensely active life, pursuing what you love, leaping at a genuine chance for new experience. It isn't the extravert's noise; it's a quiet readiness to say yes to the real thing when it appears."
        },
        {
          "baslik": "Creating safety for others.",
          "metin": "You build environments of trust, respect, and quiet support — a safe place for people to try things out — and you serve, often invisibly, as a group's ethical backbone. Your way of nurturing is subtle: not loud encouragement but steady, reliable presence. You're deeply loyal to those close to you, and companies feel steadier for having you in them, even when they can't say quite why."
        },
        {
          "baslik": "The individual.",
          "metin": "Some people spend their lives matching the established pattern; you'd rather move to your own rhythm, trusting your own instincts about what is right, good, and true. You don't do it for attention or to stand apart — you simply believe human nature is varied and that each person's path should be their own. That conviction, lived quietly, is its own kind of courage."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours:",
      "obstacles": [
        {
          "baslik": "Avoiding conflict.",
          "metin": "Kind and considerate, you're often so set on keeping the peace that you swallow your own unpleasant feelings and set aside your own needs to protect others and the relationship. Putting people first is beautiful — but you too often forget to include yourself among the people. You're sensitive, and your feelings can be hurt easily; and your habit of deferring to others to avoid friction can leave you standing, again and again, in a place you didn't choose."
        },
        {
          "baslik": "Indecision.",
          "metin": "You're flexible, open, and adaptable — but there's a fine line between open and unanchored, and sometimes you're so willing to see every side that you can't land on one. You may find yourself swaying, changing your mind with each persuasive voice you hear — especially the voices of people you love, whose wishes can quietly overwrite your own. The compass is reliable; it's trusting it out loud, and soon enough, that's hard."
        },
        {
          "baslik": "Easily bored.",
          "metin": "You learn by doing, directly, hands-on — and instruction that stays too abstract or theoretical you tend to distrust, sometimes tuning it out as irrelevant before it's had its chance. But that reflex can cost you: real learning asks for focus and follow-through even through the dry parts, and when the material stops engaging you, so can your commitment — and useful knowledge slips past you."
        },
        {
          "baslik": "The future as an afterthought.",
          "metin": "Your gift for being fully here has a shadow: the here-and-now can crowd out the there-and-later so completely that you don't see the consequences of today's choices shaping tomorrow. You can be caught unprepared by what's coming — ambushed by a deadline or an emergency, tangled in financial affairs, or slow to notice how an unresolved thing quietly poisons a relationship over time. The present is where you're wise; the future needs deliberate visits."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Use them to experiment and improvise, and stop underestimating your own skill and intelligence — you do it constantly. Because you pour yourself into supporting others, you can quietly pass up the adventures you actually crave; there's real satisfaction in breaking that habit. Keep pushing gently toward the new, and build your working life with minimal structure inside relationships that feel safe. Safety isn't a luxury for you — it's the soil the whole plant grows in."
        },
        {
          "baslik": "Find work you love — or start loving it now.",
          "metin": "Staying in a job you don't trust or care for isn't just unpleasant for you; it drains your life energy at the root, because meaning and safety are the conditions you need to function at all. Whatever work you're in, hunt for the parts you can genuinely love, and build the safest, warmest environment you can around yourself. Do this deliberately — for you it's not indulgence, it's maintenance."
        },
        {
          "baslik": "Choose honesty over harmony.",
          "metin": "You'll do almost anything to keep the peace — but a peace built on your silence isn't peace, it's disappearance. To keep your own needs from vanishing, practice saying the true thing even when it's hard to hear. It may cause a little friction now; it clears up far more hurt later. Make a slow peace with conflict, and let your own voice into the room. The people worth keeping will want it there."
        },
        {
          "baslik": "Set boundaries — and count yourself in.",
          "metin": "Your unselfishness is one of the most beautiful things about you, and also the one that costs you most. Because you're so open, respectful, and considerate, you defer — treating your own needs as somehow smaller, less deserving. So, deliberately and often, put your own name on the list of people who deserve care. Not instead of others. Alongside them."
        },
        {
          "baslik": "Borrow a telescope.",
          "metin": "Your skepticism about yourself usually runs bigger than the facts justify. Seek out people who carry a long-term vision — mentors, friends, artists you admire — and let their way of thinking rub off on you. Reading the lives of people you respect, or listening to them talk about the long arc of a career, can quietly loosen the ceiling you've set on yourself."
        },
        {
          "baslik": "Make gentle plans.",
          "metin": "You can look ahead without losing your spontaneity — the trick is soft, open questions, not rigid schedules. “What would I love to be doing in five years? What does growth mean to me? What do I want my life to feel like at fifty, seventy, ninety?” Questions like these focus your energy without caging your freedom. And if the harder inner work — the boundaries, the self-doubt, the standing up for yourself — ever feels like more than you want to carry alone, individual coaching is always there if you'd like it; no pressure, entirely your choice."
        }
      ],
      "finallySection": [
        "Flexible and spontaneous, you go with the flow and take real pleasure in what each character offers you. Your feel for people and your eye for beauty let you understand a character from the inside, and you act with a naturalness and elegance that can't be faked — most fully when you feel safe, when you like and trust the people around you. That condition isn't a weakness to apologize for; it's simply how your instrument is tuned, and knowing it lets you choose your rooms wisely. Hooray that you're an actor!",
        "Your gift for making others feel safe — your warmth, your steadiness, the way you become the quiet heart of a company once people know you — enhances everyone's work, not only your own. And you're keenly tuned to your senses with a true artistic streak, so a job that lets you connect with people and inhabit a character is deeply satisfying for you. Rigid rules and heavy bureaucracy will drain you; a role you can care about will feed you for months. So being an actor genuinely suits you — as long as the trust and safety are there. Protect those conditions like the working essentials they are.",
        "About technique: your doorway is values and the heart, reached quietly and from within, so you'll likely work best inside-out — beginning from what the character believes, loves, and would die for, and letting the rest grow from there. That path is deeply yours. One thing to be precise about, because it matters: **inside-out means building the character's inner life first.** The values and feelings you play are designed and owned by the character — grown from the character's story, the character's conscience, the character's wounds. It is never an invitation to dig up your own. You imagine your way in; you don't excavate. Your feeling for what is true is strong enough to build everything the role needs — that is, in fact, the whole point of it."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is values — what a character can stand behind, what makes sense to her heart. You understand people through what they care about, what they believe, and the emotions that live underneath. Here is the set built for the way your mind works — it begins, as you do, with what matters.",
      "sorular": [
        {
          "metin": "How does my character feel about the issue?"
        },
        {
          "metin": "How do the others feel about the issue?"
        },
        {
          "metin": "How do the others feel about my character? And how does that make my character feel?"
        },
        {
          "metin": "What are my character's values? What does she/he care about most — in life, and within this situation?"
        },
        {
          "metin": "How does my character fit in? How did she/he fit in before?"
        },
        {
          "metin": "What is the history of my character's values?"
        },
        {
          "metin": "Where did my character learn that this is the most important thing in life? What is the heart-breaking story behind that conviction?"
        },
        {
          "metin": "Who will gain, and who will lose, from this situation?"
        },
        {
          "metin": "How will everyone be affected?"
        },
        {
          "metin": "What is important to them?"
        },
        {
          "metin": "What special strengths or skills does my character need?"
        },
        {
          "metin": "What bodily sensations does my character feel within each situation?"
        },
        {
          "metin": "What was this character's childhood like? Parents? Environment?"
        },
        {
          "metin": "As a child, what was one thing she/he could always be sure of? What mattered most to my character at 5? 10? 15? 25? 30?…"
        },
        {
          "metin": "What were her/his most common emotions? Where did she/he feel them most in the body?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his feelings and interactions throughout the day, and take notes."
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes.",
          "vurgu": true
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "ISTJ": {
      "kod": "ISTJ",
      "surum": "v0.1 (new; item-audit applied; Navigator family, canon-checked)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing. Navigator talent language to be trued-up against Filiz's Levesque frame when available.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are steady, thorough, dependable, precise, quietly self-possessed — the person who does the work properly and keeps their word, most solid when there's a real job with clear standards to meet.",
        "If we had to say it in one line: you can be counted on — completely, and all the way to done.",
        "You are built on reliability. When you take something on, you do it — thoroughly, carefully, to the standard you set for yourself, which is high. You don't need an audience or a leadership role; you need the work done right. Decisions steady you rather than trouble you, and loose ends sit uneasily — you like things settled, planned, and properly finished. Where some people bring flash and no follow-through, you are the follow-through: your word is genuinely good, and people learn they can build on you without checking.",
        "You trust what's proven. You work from the tested method, the concrete fact, the way that has actually worked before — not from theory floating above the ground. You build from real, specific detail, layer by layer, and you have an exceptional memory for how things are and how they're properly done. You prepare fully, you organize your materials, you leave little to chance. Vagueness and half-baked improvisation make you uneasy; you'd rather know.",
        "This all happens quietly. You restore your energy alone, you think a thing fully through before you speak it, and you say what's needed without performance or fuss. You can seem reserved or hard to read, because you keep the processing inside and simply deliver the result. Those who know you trust exactly that: you don't talk about it, you handle it, and you're still handling it long after the louder people have moved on.",
        "Underneath the steadiness is something people often miss: your reliability is a form of respect. You keep your word because you take people and duties seriously — showing up, doing it right, and following through is, for you, how care is actually expressed. You may not say much about it. You just never let the important things drop."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "Rock-solid reliability.",
          "metin": "You do what you say, to the standard you promised, every time — and in a profession full of brilliant people who can't quite land the plane, that is worth an enormous amount. Directors learn they can build the whole evening on you: you'll know your lines, hit your marks, and deliver the same reliable, fully-prepared performance on take one and take forty. Dependability this complete is quiet, so it's easy to undervalue. Don't. It's rarer than talent and far harder to replace."
        },
        {
          "baslik": "Building on solid ground.",
          "metin": "You work from what's proven and real — the concrete detail, the tested method, the fact you can stand on. You build a character step by step, layer by layer, from real particulars: where she lived, what she did, how she actually carried herself. Nothing is left to luck or hope. This gives your characters a grounded, lived-in truth — they're assembled from real material, brick by careful brick, and they hold."
        },
        {
          "baslik": "The keeper of the real.",
          "metin": "Your memory for concrete detail is a working instrument. You notice and retain how things actually are — the specific way a certain kind of person moves, the real texture of a real life, the accurate particular — and your characters are believable because they're built from that true material, not from a vague idea of a person. You don't invent people out of air; you observe them precisely and reconstruct them faithfully."
        },
        {
          "baslik": "Thoroughness that finishes.",
          "metin": "You don't leave things half-done. You prepare completely, you work through the tedious parts others skip, and you carry the job all the way to a finished, delivered result. Where others rely on the inspiration of the moment, you rely on having actually done the work — and by opening night it's built, tested, and reliable. The quiet discipline of finishing properly is its own real artistry."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours.",
      "obstacles": [
        {
          "baslik": "The overlooked heart.",
          "metin": "Living so much in the practical, the factual, and the correct, you can under-weigh the emotional layer — the felt, the unspoken, the tender — that acting is finally made of. You may treat a character's feelings as facts to get right rather than weather to inhabit, and keep your own so private that even you lose track of them. Your competence is real; just remember a performance breathes through feeling, and a scene done correctly but not felt stays behind glass."
        },
        {
          "baslik": "The grip of the proven way.",
          "metin": "Your trust in the tested method is a strength — until it hardens into “this is how it's done.” A new or unorthodox approach can strike you as needless risk, and you can resist the very experiments a role sometimes needs. The reliability that serves you can, unmanaged, become rigidity: the door closed on the better idea simply because it wasn't the established one."
        },
        {
          "baslik": "Locked in early.",
          "metin": "You like things settled, so you tend to decide the character early and build firmly on that decision — which is mostly a strength, and occasionally a cage. A choice fixed in week one can leave no room for the discovery that arrives in week three, and a surprise mid-scene can feel like an error to correct rather than a gift to use. Your foundation is solid; just make sure the plan is a floor to build on, not a lid to trap the work under."
        },
        {
          "baslik": "Quiet to a fault.",
          "metin": "You keep so much inside — processing privately, offering only the finished result — that partners, directors, and the people close to you can be left guessing. In a solitary craft this would cost nothing; in a collaborative one it can. Your scene partners need some of what you're thinking to play with you, and a director can't build on a read you never voiced. The reserve that steadies you can quietly starve the collaboration around you."
        },
        {
          "baslik": "Impatience with the intangible.",
          "metin": "You're superb with what's concrete and correct — and correspondingly uneasy with what won't resolve into a clear, right answer: the vague hunch, the emotional undercurrent, the exploratory mess that has no defined task yet. But that intangible material is exactly what a scene's life is made of, and the same practicality that makes you reliable can make you wave off the very thing a performance most needs."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Your reliability, your thoroughness, and your grounded, detailed craft are real and uncommon — lean on them, and choose work that values them. You're at your best with a real job and clear standards and the room to do it properly; don't apologize for being the one who actually gets it right. In your hands, dependability is an art, and a production is genuinely lucky to have it."
        },
        {
          "baslik": "Let feeling into the work.",
          "metin": "Your under-trained muscle is the emotional one — so train it on purpose. When you build a character, add one deliberate pass that isn't fact-gathering: what does she feel, in the body, right now, and can I let a version of it move through me too? You don't have to abandon your rigor; you have to give the heart its turn alongside it. The scenes that land are felt, and this is the single most valuable growth edge in your whole profile."
        },
        {
          "baslik": "Try it the other way once.",
          "metin": "Guard against the grip of the proven method by deliberately experimenting — once per role, on purpose, try the unorthodox choice, the approach that isn't how it's usually done. You don't have to keep it; you just have to loosen the reflex that says the tested way is the only safe one. Some of the best discoveries live exactly where you'd normally not go."
        },
        {
          "baslik": "Leave one door open.",
          "metin": "Keep preparing thoroughly and deciding firmly — it's how you build, and it works. But leave one door unlocked on purpose. Once per rehearsal period, invite the thing you didn't plan: an improvisation, a partner's odd offer, a wrong reading that might be right. When a surprise arrives mid-performance, try greeting it as material before you correct it. Your foundation is solid enough to hold a visitor — that's exactly why you can afford one."
        },
        {
          "baslik": "Say a little more than feels necessary.",
          "metin": "You don't need to narrate yourself — but push, deliberately, to voice a bit more of your thinking than instinct wants: the read you had, the choice you're trying, the thing that isn't working. Your partners and director can only build with what you give them, and a few more sentences offered on purpose can be the difference between working near people and working with them. And if a stretch ever gets heavier than good rest can fix, talking it through with someone is always an option — no pressure, entirely your choice."
        }
      ],
      "finallySection": [
        "You've chosen a profession that can genuinely use your reliability, your grounded craft, and your thoroughness — you build characters properly, from real concrete detail, and you deliver them dependably, night after night, when others can't. A production is lucky to have someone in it who knows the work is actually done. Hooray!",
        "Now the honest part, because you'd want it straight: the profession's real challenge for you is feeling and flexibility. Acting is emotional and alive-in-the-moment at its core, and your instincts — settle it, get it right, do it the proven way — can run past the softer, looser, messier material a scene is actually made of. This isn't a flaw to hide; it's the growth edge, and a real one. The most powerful thing you can build is the bridge from your solid, correct understanding to genuine feeling: not getting the emotion right, but letting yourself be moved by the character you've so carefully built. When you cross that bridge, your performances gain the one thing thoroughness alone can't give them — a pulse.",
        "Your ideal environment gives you a real job, clear standards, honest preparation time, and colleagues who pull their weight — and a director you can respect and rely on. Chaos, constant last-minute changes of plan, and vagueness will unsettle you. When you can choose, choose the room with real standards in it — and then, deliberately, let a little more feeling and flexibility into it than feels natural.",
        "About technique: you're practical and grounded, so you'll likely build a character from the outside in — the facts, the behavior, the concrete detail, the real particulars — and let the inner life follow. That's a legitimate and powerful path, and it's natively yours. One thing to be precise about, because it matters: **the emotions you play are built for the character and owned by the character** — grown from the character's story, situation, and real particulars, never mined from your own past. You construct them; you don't excavate them. Your craft is strong enough to build everything the role needs — the mastery, for you, is letting the built thing be genuinely felt, not just correctly assembled."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is concrete fact and how things are properly done — you understand a character by getting the real particulars right: where she comes from, how she lives, what she actually does. So your set begins with the solid ground you trust and then, deliberately, keeps going past the facts into the emotional and flexible material your steadiness can otherwise rush by. Push yourself to stay with the later questions as long as you stayed with the first ones. *Start on solid ground:*",
      "sorular": [
        {
          "metin": "What are the concrete facts of this character — where she/he lives, works, comes from; the real particulars of this life?"
        },
        {
          "metin": "What is her/his role and responsibility in this story — the duties, the function?"
        },
        {
          "metin": "What was this character's childhood like? Parents? Environment? What did she/he learn there about how life works?"
        },
        {
          "metin": "How does this character actually operate day to day — the practical, observable shape of her/his life?"
        },
        {
          "metin": "What information do we actually have in hand — and what are the gaps the script leaves open?"
        },
        {
          "metin": "Now go past the facts, into the person:",
          "vurgu": true
        },
        {
          "metin": "What are the contradictions in this character — the ways she/he is two opposed things at once?"
        },
        {
          "metin": "What do we know about the character's emotions — and what does she/he feel but never show?"
        },
        {
          "metin": "As a child, what was one thing she/he could always be sure of? What was one thing she/he was never sure of?"
        },
        {
          "metin": "What were her/his most common emotions? Where did she/he feel them most in the body?"
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships? Who are the people around her/him?"
        },
        {
          "metin": "Who does she/he get along with best — and worst?"
        },
        {
          "metin": "How does she/he feel about herself/himself?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his feelings and interactions throughout the day, and take notes."
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character. What does she/he feel?"
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How?"
        },
        {
          "metin": "Is there love in her/his life right now? What feelings and actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his life, feelings, body, and relationship patterns?"
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves, actions and feelings?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What feelings, body sensations, actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Now stop gathering facts and walk for a while as the character. Notice your emotions and your body, your pace, your moves, your five senses — what do you see, hear, feel, taste, notice as the character? Take notes. For you this walk matters most: it's where the facts become a person, and where getting it right gives way to feeling.",
          "vurgu": true
        },
        {
          "metin": "Having walked it — what do you now feel about her/him that the facts didn't tell you?"
        },
        {
          "metin": "What else could be true of her/him that you hadn't allowed for?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    },
    "ISTP": {
      "kod": "ISTP",
      "surum": "v0.1 (new; item-audit applied; Inventor/Adventurer spine, introvert re-pitch)",
      "ustBaslik": "Let's Talk About You…",
      "teamNote": "[Team note — not shown to participants: display-name slot deliberately empty; the report runs on the four letters only. The nearest neighbour is NEVER rendered in the actor's report: the app computes and stores it (narrowest-margin axis flipped, with margin) as a facilitator's tool — in coaching, the first alternative to offer if the report isn't landing.]",
      "beforeYouRead": [
        "What you're holding is not a verdict, and it is not a box. It's a hypothesis — our best first guess at how you naturally work, built entirely from your own answers. Read it the way you'd read a good director's note: try it on, test it against your own experience, keep what fits, and drop what doesn't without a second thought. Not every line will be true of you, and not every remedy works for everyone.",
        "And one thing before everything else: you don't need to change. The whole point of this report is the opposite — to help you use your own talents to make a difference, not somebody else's."
      ],
      "firstSketch": [
        "You are calm, practical, independent, quietly capable — a hands-on problem-solver who says little and notices everything, most alive when there's a real thing to figure out and do.",
        "If we had to say it in one line: you understand things by taking them apart — with your hands, not your speeches.",
        "You are a thinker, but not the armchair kind. Your curiosity points at how real things actually work — a mechanism, a body, a situation, a scene that isn't landing — and your instinct is to get in there, take it apart, and understand it from the inside. You trust what's concrete and in front of you: the page, the facts, the physical truth of a thing, over any amount of theory floating above it. Abstract talk for its own sake loses you fast; a real problem you can put your hands on wakes you all the way up.",
        "You're an analyst underneath the quiet. When something isn't working, you don't emote about it — you find the broken part: the beat that doesn't follow, the move that doesn't make sense, the logic that doesn't hold. You judge things by whether they actually function, and you have an unusually accurate eye for where a mechanism — or a scene — will fail. Fast, clean logic paired with real physical skill: that's the combination, and it's a rare one.",
        "This all happens with very little noise. You restore your energy alone, you watch and take the measure of a thing before you act, and you say only what needs saying — no hemming, no performance, no wasted words. People can find you hard to read, because you keep the processing inside and offer the conclusion, or just the fixed problem, without narrating the work. Those who know you trust exactly that: you don't talk about it, you handle it.",
        "You're independent to the core and allergic to being managed. Rules that can't explain themselves strike you as pointless, and being scheduled, hurried, or micromanaged makes you shut down or slip away. What you want is room and autonomy — the freedom to size up a problem your own way and solve it on your own terms, without someone standing over you narrating the obvious."
      ],
      "talentsGiris": "Creative talents are your gems — the resources that let you make a difference. They're also needs: a way of working that starves them will starve you. So the first job is simply to know them and to build your working life around them. Here are yours:",
      "talents": [
        {
          "baslik": "The hands-on mind.",
          "metin": "You understand things by working them, not by hearing about them — and that hunger to know how a real thing actually functions is the engine of what you do well. A character, to you, is something to figure out through doing: how she moves, how she operates, what makes her tick when you put her in your body. You learn her the way you'd learn any mechanism — by getting your hands on it. Understanding this concrete, this physical, is a genuine gift in a craft that finally lives in the body."
        },
        {
          "baslik": "The question-finder.",
          "metin": "Your instinct for the right question — the practical one that cuts to what's actually going on — is one of the sharpest tools you own, and you should trust it more than you do. When something about a character doesn't add up for you, that itch is not confusion; it's your talent pointing straight at the thing that needs solving. You don't ask to fill silence — you ask because you've spotted the loose part. Trust that. It's usually the way in."
        },
        {
          "baslik": "The analyst's eye.",
          "metin": "Behind the calm is a cool, exact read. You find the broken beat, you test a scene for whether it actually works, you spot the structural fault before it brings the moment down — and you do it without drama. You approach a character as a system to understand: what she wants, how she operates, why she does what she does. Playful and easy on the surface, rigorous underneath — and your readings hold up because you built them to."
        },
        {
          "baslik": "Grace under pressure.",
          "metin": "When things go wrong — a scene collapses, a cue vanishes, a partner goes off-script — you're steady exactly where others panic. You assess fast, you act cleanly, you don't waste energy on alarm. Cool hands and a cool head in a live, unpredictable medium is worth an enormous amount; you're the person a set is glad to have when the plan falls apart, precisely because you were never relying on the plan."
        },
        {
          "baslik": "Quiet independence.",
          "metin": "You think for yourself and work things out from the ground up, unbothered by how it's usually done — and you'll quietly ignore a received way of doing things if you've found a truer one. Not for show; you simply can't respect a method that doesn't hold up. This gives your work choices that are genuinely yours, arrived at honestly and tested in the body, that no one handed you."
        }
      ],
      "obstaclesGiris": "Talents always travel with side-effects — every single one casts its own shadow. If you're gifted at holding many things at once, you'll also tend not to go deep on any single one, and so on. Naming the shadow takes away most of its power. Let's name yours:",
      "obstacles": [
        {
          "baslik": "The overlooked heart.",
          "metin": "Living so much in the practical and the logical, you can under-weigh the emotional layer — the felt, the unspoken, the tender — that acting is often made of. You may treat a character's feelings as a problem to solve rather than a weather to inhabit, and treat your own the same way, or keep them so private even you lose track. Your competence is real; just remember a performance breathes through feeling, and a scene solved but not felt stays behind glass."
        },
        {
          "baslik": "The words that stay inside.",
          "metin": "You keep so much in — processing privately, offering only the conclusion — that partners, directors, and the people close to you can be left guessing. In a solitary craft this would cost nothing; in a collaborative one it can. Your scene partners need some of what you're thinking to play with you, and a director can't build on a read you never voiced. The quiet that serves your focus can quietly starve the collaboration."
        },
        {
          "baslik": "Too cool for the conflict.",
          "metin": "Your instinct in a clash is to step back, go still, or simply remove yourself — which keeps you calm and can read, to the people who needed you present, as absence or indifference. Some rehearsal-room moments and some scenes ask you to stay in the heat as a participant, not observe it from a safe remove. The detachment that keeps you steady can also leave your partners feeling alone in it."
        },
        {
          "baslik": "Bored by the un-doable.",
          "metin": "You want a real problem you can act on — so the situations that lose you are the ones with nothing yet to do: long theory, abstract discussion, repetitive process, the slow stretch where there's no mechanism to work. When there's nothing concrete to solve, your focus goes looking for the exit. It's the same wiring that makes you brilliant with a real problem; it just goes flat without one."
        },
        {
          "baslik": "Structure? Later.",
          "metin": "You need autonomy, and you're right to — but the same resistance to being scheduled and organized can leave you under-structured: light on planning, allergic to frameworks and deadlines, inclined to handle things in the moment rather than set them up in advance. In the moment is where you're superb; it's also, sometimes, where the longer build quietly falls apart. A little structure isn't a leash — it's what lets your in-the-moment gift add up to a finished thing."
        }
      ],
      "remediesGiris": "Now that the talents and their shadows are on the table, here are our suggestions — ways to protect the gems and shrink the side-effects. You may already be using some of them; if so, wonderful. If not, try each one and watch honestly how it works for you. Keep what serves you, drop what doesn't. Not every remedy works for everyone.",
      "remedies": [
        {
          "baslik": "Trust your strengths.",
          "metin": "Protect the hands-on problem-solving and the room to work your own way — that's where your difference is made. Choose projects with real physical craft and real autonomy, and don't apologize for needing to figure things out by doing rather than discussing. Put you in a rigid, over-managed, all-theory process and you'll go flat; give you a real problem and space, and you're formidable."
        },
        {
          "baslik": "Let feeling into the work.",
          "metin": "Your under-trained muscle is the emotional one — so train it on purpose, in the way that suits you: through the body. You already know feeling can be reached physically. When you build a character, add one deliberate pass that isn't problem-solving — let the posture, the breath, the physical life produce an actual feeling, and let yourself register it rather than analyze it. The scenes that land are felt, and for you the doorway to feeling runs straight through the body you already trust."
        },
        {
          "baslik": "Say a little more than feels necessary.",
          "metin": "You don't need to narrate yourself — but push, deliberately, to voice a bit more of your thinking than your instinct wants to: the read you had, the choice you're trying, the thing that isn't working for you. Your partners and your director can only build with what you give them. A few more sentences, offered on purpose, can be the difference between working near people and working with them."
        },
        {
          "baslik": "Decide, then build.",
          "metin": "Solving in the moment is your gift, but a performance also has to be built and finished, not just handled fresh each time. Give yourself a lock point — a stage where the character's core stops being re-solved from scratch and later discoveries become refinements. Look at the whole arc, not only the piece in front of your hands. That's the difference between a reliably capable actor and a fully built one."
        },
        {
          "baslik": "Borrow the lightest structure.",
          "metin": "You resist frameworks, so use the smallest ones that work — a rough plan, a fixed working hour, one trusted person for the logistics you'd rather skip. These aren't cages; they're what carry your in-the-moment brilliance through to a delivered result. And learn your own downtime — your steadiness runs on real rest, and grinding through without it is a false economy. If a stretch ever gets heavier than rest can fix, talking it through with someone is always an option — no pressure, entirely your choice."
        }
      ],
      "finallySection": [
        "You've chosen a profession that rewards exactly your equipment: physical skill, cool nerve, real problem-solving, and an instrument you understand from the inside — the body. Your hands-on, figure-it-out-by-doing approach is native to a craft that finally lives in movement and action, and your steadiness under pressure is precisely what a live, unpredictable medium asks for. You build characters you actually understand, physically and logically, all the way down. Hooray!",
        "The profession's honest challenge for you sits right beside the gift: acting lives in feeling and in collaboration, and your instincts run toward logic and self-sufficiency. This isn't a fault — it's the growth edge, and a rich one. The most powerful thing you can build is the bridge from your real understanding to real feeling — and for you, uniquely, that bridge runs through the body you already trust. You don't have to become talkative or sentimental; you have to let the physical work you're so good at actually move you, and let a little more of yourself into the room with your partners.",
        "Your ideal environment is hands-on, autonomous, and low on nonsense: real craft, room to work your way, colleagues who don't crowd you, and a director who respects that you handle things. Micromanagement, endless theory, and being hurried will shut you down. When you can choose, choose the room that lets you work — and then let it in a little more than feels natural.",
        "About technique: your doorway is the body and the doing, so you'll work best from the outside in — building the character through how she moves, stands, breathes, and operates, and letting the inner life follow the physical score. That's a legitimate and powerful path, and it's natively yours. One thing to be precise about, because it matters: **the emotions you play are built for the character and owned by the character** — grown from the character's body, the character's situation, the character's story, never mined from your own past. You construct them from the outside in, through the body — which is exactly your strength. Your instrument is strong enough to build everything the role needs; the trick, for you, is letting the built thing be felt."
      ],
      "sorularGiris": "All of us have a different doorway into understanding. Yours is doing: you understand a character by getting her into your body and working out how she operates. So your set is practical and physical, and it keeps sending you back to your feet — ask, then walk it, then ask again. For you the walk isn't a break from the work; it is the work, and it's where your answers actually live. *The practical opening:*",
      "sorular": [
        {
          "metin": "What do we know about the character's physicality — how does she/he move, stand, carry weight?"
        },
        {
          "metin": "How does this character actually operate — what does she/he do, and how?"
        },
        {
          "metin": "Where's the problem — the beat, the move, the moment that doesn't work yet?"
        },
        {
          "metin": "Why does she/he do this — and why this way, rather than another?"
        },
        {
          "metin": "Who else do I know who moves or operates like this? How do they do it?"
        },
        {
          "metin": "Walk for a while as the character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes.",
          "vurgu": true
        },
        {
          "metin": "What was this character's childhood like? Parents? Environment?"
        },
        {
          "metin": "What were her/his movements like — physically? How did she/he carry herself/himself?"
        },
        {
          "metin": "What were her/his challenges? How did she/he handle them?"
        },
        {
          "metin": "Walk for a while as the character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes.",
          "vurgu": true
        },
        {
          "metin": "How is life at the moment for her/him?"
        },
        {
          "metin": "How are her/his relationships?"
        },
        {
          "metin": "Where does she/he actually live?"
        },
        {
          "metin": "What is her/his occupation? What is the relationship with the job?"
        },
        {
          "metin": "How does doing this job affect her/his body and movement?"
        },
        {
          "metin": "Imagine an ordinary day of hers/his, from waking up to going back to bed. Notice her/his movements throughout the day, and take notes."
        },
        {
          "metin": "Walk for a while as the character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes.",
          "vurgu": true
        },
        {
          "metin": "How does she/he deal with stress? What happens in the body?"
        },
        {
          "metin": "How does she/he have fun these days? What happens in the body?"
        },
        {
          "metin": "Imagine people's eyes on her/him — their looks landing on your character. What happens in the body?"
        },
        {
          "metin": "Walk for a while as the character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes.",
          "vurgu": true
        },
        {
          "metin": "What is your character's sexual orientation? Is she/he comfortable with it? How does it live in the body?"
        },
        {
          "metin": "Is there love in her/his life right now? What actions does it bring?"
        },
        {
          "metin": "Is there someone she/he once loved but no longer does? If so, what happened? What is the legacy of it in her/his body?"
        },
        {
          "metin": "Walk for a while as the character. Notice your pace, your movement, your spine, your shoulders, your head above your shoulders, the tense areas in your torso, legs and feet… Take notes.",
          "vurgu": true
        },
        {
          "metin": "What is she/he most afraid of in life right now? How does that shape her/his moves and actions?"
        },
        {
          "metin": "What does she/he want most from life right now? Why does it matter that much? How does that shape her/his moves and actions?"
        },
        {
          "metin": "Why doesn't she/he have it? What is in the way?"
        },
        {
          "metin": "What would she/he have to do to meet that need? What actions and gestures does that bring?"
        },
        {
          "metin": "What is stopping her/him from taking the step?"
        },
        {
          "metin": "What happens if she/he doesn't get it? What is there to lose? What actions and gestures does that bring?"
        },
        {
          "metin": "Now walk it one more time — and this time, let the body produce a feeling rather than solve a problem. What do you feel as the character that the thinking didn't give you? Take notes.",
          "vurgu": true
        },
        {
          "metin": "Having walked it — what do you now know that figuring it out alone didn't tell you?"
        },
        {
          "metin": "How does all of the above fit into what you're doing now — physically?"
        }
      ],
      "kapanis": "Thank you for joining this journey with us — let's see what comes next…",
      "imza": "Warmly, Filiz Kaya Ataklı"
    }
  },
};
