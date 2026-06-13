// data/karakterler/hamlet.de.js
// HAMLET — Almanca dil katmani (karakterGetir deep-merge ile hamlet.js TR
// tabanina biner).
//
// Shakespeare alintilari: Schlegel-Tieck kanonik cevirisi (EN tarafindaki
// RSC karari + Karar 38 §1 paralelinde — her dilde kanonik kaynak).
// Yapi TR ile birebir hizali; yalniz cevrilen string alanlar doludur.
// Eksik/bos alanlar otomatik TR'ye duser (merge fallback).

// IMZA: DE-HAMLET-FULL-01 — Hamlet DE TAM (H1-H4): tercihler+oyunOncesi(+olay6 yuruyus)+sahnelerWorkbook+boslukSet(+3 yuruyus+2 kartCatali)+sahneler+bosluklar+antrenmanlar(9) · 0 gerçek eksik · TASLAK
const hamletDE = {
  ozet:
    'Trauer, Verrat und existenzielle Sinnsuche. Die unsichtbare Reise eines Prinzen, der zwischen Gedanke und Handlung gefangen ist.',
  etiketler: ['Tragödie', 'Trauer', 'Verrat', 'Philosophisch'],

  baseline: {
    ad: 'Vor Wittenberg',
    aciklama:
      'Noch ist die Katastrophe nicht geschehen. Hamlet ist ein junger Prinz, der in Wittenberg Philosophie studiert. Sein Vater lebt, Vater und Mutter sind zusammen, seine Liebe zu Ophelia ist noch rein. In den Korridoren seines Geistes wohnt noch kein Geist.',
  },

  iliskiler: ['Der Geist des Vaters', 'Gertrude', 'Claudius', 'Ophelia', 'Horatio', 'Polonius'],

  dogrular: [
    { madde: 'Hamlet ist Prinz von Dänemark.' },
    { madde: 'Er studiert an der Universität Wittenberg und neigt zur Philosophie.' },
    { madde: 'Er begegnete dem Geist seines Vaters; aus dessen Mund erfuhr er, dass Claudius der Mörder ist.' },
    { madde: 'Seine Mutter Gertrude heiratete Claudius zwei Monate nach dem Tod des Vaters.' },
    { madde: 'Claudius ist zugleich sein Onkel, sein Stiefvater und sein Ziel.' },
    { madde: 'Mit Ophelia verbindet ihn eine Liebesbeziehung.' },
    { madde: 'Horatio ist sein engster Freund, dem er alles anvertraut.' },
    { madde: 'Polonius, Ophelias Vater — den er versehentlich tötet.' },
    { madde: 'Er tötet Polonius hinter dem Vorhang.' },
    { madde: 'Er lässt davon ab, Claudius im Gebet zu töten.' },
    { madde: 'Er schickt Rosenkranz und Güldenstern in den Tod.' },
    { madde: 'Im Duell kämpft er mit Laertes.' },
    { madde: 'Er wird von der vergifteten Klinge verwundet.' },
    { madde: 'Seine letzten Worte: „Der Rest ist Schweigen.“' },
    { madde: 'Fortinbras wird Thronerbe.' },
  ],

  oyunOncesi: {
    olaylar: [
      {
        baslik: 'König Hamlet (sein Vater) besiegt den norwegischen König Fortinbras im Zweikampf',
        yuk: 'Familiäre Ehre, das Erbe der Macht, ein großer Schatten, der auf den Schultern lastet.',
        yansimaSorusu: 'Wohin fällt der Schatten dieses legendären Vaters auf den Körper deines Hamlet?',
        replikIzi: 'Horatio (I.i): Der König besiegte den alten Fortinbras im Zweikampf — der Vertrag besiegelt, Land wechselte den Besitzer. Dort beginnt die Legende.',
        anlar: [
          {
            soru: 'Ein Vater, der einen König mit dem Schwert besiegte, ein Sohn, der mit Büchern aufwuchs. Wie legte sich jene Legende auf Hamlets Schultern?',
            secenekler: [
              { baslik: 'Ein warmes Dach', aciklama: 'Sein Vater war der größte Mann der Welt; sein Schatten erdrückte nicht, er schützte. Darum ist der Verlust so groß — das Dach stürzte ein.', oznelSabit: 'Der Schatten meines Vaters erdrückte mich nicht — er deckte mich zu. Als er starb, verlor ich keinen König, sondern den Himmel über meinem Kopf.' },
              { baslik: 'Ein unermessliches Gewicht', aciklama: 'Vater des Schwerts, Sohn des Buches; die Legende war kein Spiegel, sondern eine Waage — und Hamlet wog sich stets zu leicht. Der Vergleich mit Fortinbras wird die Fortsetzung dieser Waage sein.', oznelSabit: 'Die Legende meines Vaters stellte mir stets dieselbe Frage: was hast du getan? Jenes Duell versuchte ich in Büchern zu gewinnen — und gewann es nie.' },
            ],
          },
          {
            soru: 'Aus wessen Mund hörte Hamlet jene Duellgeschichte — aus dem seines Vaters oder dem anderer? Erzählte sein Vater dem Sohn je seine eigene Legende?',
          },
        ],
      },
      {
        baslik: 'Der norwegische König stirbt; der junge Fortinbras plant Rache',
        yuk: 'Eine Rache, die zu Hamlets eigener Lage parallel verläuft — doch jener ist tatkräftig, Hamlet zögert.',
        yansimaSorusu: 'Wie verortet sich Hamlet selbst, als er von diesem parallelen Rächer hört?',
        replikIzi: 'Horatio (I.i): der junge Fortinbras sammelt mit rohem Feuer Männer, um das Verlorene zurückzugewinnen.',
        anlar: [
          {
            soru: 'Zwei Prinzen einer Generation — ihre Väter standen sich im Duell gegenüber, beide werden ihren Vater verlieren. Wie trug Hamlet jenen Namen — Fortinbras?',
            secenekler: [
              { baslik: 'Ein gleichgültiger Name', aciklama: 'Ein norwegischer Prinz, ferne Politik; er nahm keinen Platz in seinem Geist ein. Er wusste nicht, dass er zum Spiegel würde — auf dem Weg wird er ihn treffen und es wird ihn treffen.', oznelSabit: 'Fortinbras war für mich ein Name auf einer Karte — bis ich sein Heer sah. Man hielt mir meinen Spiegel aus der Ferne hin; als ich näher kam, sah ich mich selbst.' },
              { baslik: 'Ein vertrauter Schatten', aciklama: 'Das Duell der Väter band die beiden Söhne, bevor sie geboren waren; auf jenen Namen blickte er stets mit besonderer Aufmerksamkeit — als würde dort ein paralleles Leben gelebt.', oznelSabit: 'Ich kannte Fortinbras, ohne ihn je gesehen zu haben — das Duell unserer Väter hatte uns in die zwei Schalen einer Waage geboren. Jeder seiner Züge zeigte mir, wo ich selbst stand.' },
            ],
          },
          {
            soru: 'Trafen sich die zwei Prinzen je — eine Zeremonie, eine Gesandtschaft, eine Jagd? Wenn ja, was lag in jenem Blick; wenn nicht, mit welchem Gesicht stellte Hamlet ihn sich in seinem Geist vor?',
          },
        ],
      },
      {
        baslik: 'König Hamlet stirbt plötzlich und auf verdächtige Weise',
        yuk: 'Der Ausgangspunkt des ganzen Stücks. Ein unterschwelliger Verdacht, ein nicht in Worte gefasster Zweifel.',
        yansimaSorusu: 'Der unaussprechliche Zweifel — wie klingt er im Körper Hamlets?',
        replikIzi: 'Die offizielle Geschichte: eine Schlange biss ihn im Schlaf im Garten. Die Wahrheit (vom Geist in I.v): Gift ins Ohr.',
        anlar: [
          {
            soru: 'Sein letztes Sehen des Vaters am Leben — der Abschied beim Aufbruch nach Wittenberg. Der Geist wird in der Gestalt jenes halb gebliebenen Abschieds zurückkehren. Wie war jener Abschied?',
            secenekler: [
              { baslik: 'Ein König verabschiedete', aciklama: 'Förmlich, distanziert; die väterliche Wärme blieb unter dem Protokoll. Darum ist der Geist die Gestalt all dessen, was nie gesagt wurde — Hamlets wirklicher Abschied von seinem Vater fand nie statt.', oznelSabit: 'Ich verabschiedete mich nicht von meinem Vater — ich verabschiedete mich vom König. Als der Geist auf den Zinnen erschien, begriff ich: der Grund, ihm zu folgen, war nicht Rache; es war ein halb gebliebener Abschied.' },
              { baslik: 'Ein Vater verabschiedete', aciklama: 'Einen Augenblick fiel das Protokoll — eine Hand auf der Schulter, ein Satz, vielleicht ein Lächeln. Jene letzte Wärme ist nun die schwerste Erinnerung: die kalte Wiederkehr dessen, was warm endete.', oznelSabit: 'In unserem letzten Abschied war er einen Augenblick mein Vater — seine Hand auf meiner Schulter. Als ich den Geist sah, suchte ich am meisten jene Hand; in der Rüstung, die Hand, die meine Schulter nie wieder berühren wird.' },
            ],
          },
          {
            soru: '„Im Garten im Schlaf von einer Schlange gebissen“ — das war die offizielle Geschichte, und alle glaubten sie. Als Hamlet diesen Satz zum ersten Mal hörte, welches Wort blieb in ihm hängen — und wie erklärte er sich jenes Hängenbleiben?',
          },
        ],
      },
      {
        baslik: 'Gertrude heiratet überstürzt Claudius',
        yuk: 'Ein moralisches Trauma, Verrat auf tiefe Trauer gelegt — „noch keine zwei Monate“.',
        yansimaSorusu: '„Noch keine zwei Monate“ — wie verrutscht dieser Satz im Körper?',
        replikIzi: 'Hamlet (I.ii): „Noch nicht zwei Monden tot...“ — der Rest des Begräbnismahls auf dem Hochzeitstisch.',
        anlar: [
          {
            soru: 'Was schnitt Hamlet bei dieser Heirat am tiefsten?',
            secenekler: [
              { baslik: 'Die Eile', aciklama: 'Nicht die Heirat, ihre Eile; das Übertreten der Trauerzeit war der zweite Tod des Vaters. „Noch nicht zwei Monden“ — der ganze Zorn liegt in jener Zeitspanne.', oznelSabit: 'Was mich zerstörte, war nicht die Heirat, sondern der Kalender — mein Vater war in seinem Grab noch nicht erkaltet. Meine Mutter durfte jemanden lieben; doch ihn so schnell zu vergessen, tötete meinen Vater ein zweites Mal.' },
              { baslik: 'Die Person', aciklama: 'Dass es Claudius war; mit einem anderen wäre es vielleicht zu ertragen gewesen. Dass es der Bruder ist, hat alles auch rückwärts befleckt — alle Familienbilder sind nun verdächtig.', oznelSabit: 'Wäre es ein anderer gewesen, hätte ich es vielleicht ertragen — doch sein Bruder. Jene Heirat befleckte nicht die Zukunft, sondern die Vergangenheit; meine ganze Kindheit wurde zu einem verdächtigen Bild.' },
            ],
          },
          {
            soru: 'Der Augenblick, da er seine Mutter zum ersten Mal neben Claudius sah — als Mann und Frau. Zu wem ging beim ersten Blick sein Auge, von wem wich es?',
          },
        ],
      },
      {
        baslik: 'Claudius besteigt den Thron; Hamlet bleibt trotz seines Erbrechts außen vor',
        yuk: 'Die Usurpation des Thronanspruchs. Persönlicher Verlust und politischer Bruch zugleich.',
        yansimaSorusu: 'Persönlicher Verlust und politischer Bruch zugleich — was wird zuerst gespürt?',
        replikIzi: 'Claudius (I.ii), zu Hamlet: „Ihr seid der Nächste unsres Throns.“ — Worte gibt es, einen Thron nicht.',
        anlar: [
          {
            soru: 'Er hatte ein Erbrecht; der Thron ging an den Onkel. Wohin fiel dieser Verlust in Hamlet?',
            secenekler: [
              { baslik: 'Er glaubte, er fiel nicht', aciklama: 'Den Thron wollte er nie — er wollte Wittenberg, die Bücher. Der Verlust begann erst später zu schmerzen, inmitten der anderen Verluste.', oznelSabit: 'Den Thron wollte ich nie — dass ich ihn verloren hatte, bemerkte ich erst später. Doch dass mir selbst das Ungewollte genommen wurde, fand mit der Zeit seinen eigenen Namen.' },
              { baslik: 'Eine stille Wunde', aciklama: 'Es ging nicht um den Thron, sondern um die Wahl — selbst das Recht, zu entscheiden, ob er ihn wollte, wurde ihm nicht zugestanden. Hier wurde das politische Fundament des Zorns auf Claudius gelegt.', oznelSabit: 'Den Thron wollte ich nicht — doch ich wollte mein Recht, ihn abzulehnen. Mein Onkel stahl mir keine Krone, sondern eine Wahl; das ist der Stein unter meinem Zorn.' },
            ],
          },
          {
            soru: 'Wo war Hamlet bei der Krönung — in der ersten Reihe, in der Menge, ging er gar nicht hin? Und wo war sein Blick während der ganzen Zeremonie?',
          },
        ],
      },
      {
        baslik: 'Hamlet wird aus Wittenberg nach Dänemark gerufen',
        yuk: 'Herausgerissen aus seinem geistigen Leben — Wittenberg, der Ort, an dem er er selbst sein konnte.',
        yansimaSorusu: 'Vom Ort gerufen zu werden, an dem man er selbst sein konnte — wo sitzt der körperliche Widerstand?',
        replikIzi: 'Claudius + Gertrude (I.ii): „Kehre nicht nach Wittenberg zurück.“ — Hamlet: „Ich will Euch gehorchen, Mutter.“',
        anlar: [
          {
            soru: 'Claudius verbot die Rückkehr, seine Mutter sagte „bleib“. Hamlet gab seine Antwort nur der Mutter: „Ich will Euch gehorchen, Mutter.“ Warum blieb er?',
            secenekler: [
              { baslik: 'Für seine Mutter', aciklama: 'Jener Satz war ein echter Gehorsam; trotz all seines Zorns kann er sich nicht von seiner Mutter lösen. Das Band wurde befleckt, riss aber nicht — kann nicht reißen.', oznelSabit: 'Ich blieb, weil sie es wollte — trotz meines Zorns, vielleicht wegen meines Zorns. Meine Mutter zu hassen gelang mir nie; selbst an meinem dunkelsten Tag kam jenes Wort „Mutter“ gehorsam aus meinem Mund.' },
              { baslik: 'Für die Abrechnung', aciklama: 'Wittenberg ist keine Zuflucht mehr; etwas ist hier nicht beendet. Der Gehorsam gegenüber „Mutter“ war ein Zug, der Claudius aus dem Satz ausschloss — das Bleiben keine Ergebung, sondern eine Stellungnahme.', oznelSabit: '„Ich will Euch gehorchen, Mutter“ — in jenem Satz gab es kein Wort für meinen Onkel, und das hörten wir beide. Ich blieb; denn ginge ich, würde dieser Hof mit meinen Fragen versiegelt.' },
            ],
          },
          {
            soru: 'Was blieb in Wittenberg halb zurück — ein Buch, eine Debatte, ein Zimmer, eine Gewohnheit? Welches Bild bewahrte Hamlet in seinem Geist als „das Leben, in das er zurückkehren würde“?',
          },
        ],
      },
      {
        baslik: 'Die Liebe zu Ophelia — schon vor dem Stück begonnen',
        yuk: 'Hoffnung und Verletzlichkeit. Die einzige positive Bindung inmitten der Trauer — doch auch sie ist bedroht.',
        yansimaSorusu: 'Die einzige positive Bindung in der Trauer — doch bedroht. Wo liegt der Widerspruch?',
        replikIzi: 'Brief (in II.ii von Polonius gelesen): „Zweifle an der Sterne Licht — doch nie an meiner Liebe.“ / Ophelia (III.i): süße Worte, Geschenke — alles vor dem Stück.',
        anlar: [
          {
            soru: 'Wie begann dieses Band? Shakespeare zeigt nur die Überreste — Briefe, Geschenke, Ophelias „er bat mich liebevoll inständig“.',
            secenekler: [
              { baslik: 'Hamlet begann es', aciklama: 'Briefe, Drängen, Geschenke — das einzig Ungeplante im Leben des philosophischen Prinzen. Das Einzige, was er ohne Nachdenken begann, wird das, worüber er am meisten nachdenken wird.', oznelSabit: 'Ich wollte sie — das Einzige, was ich in meinem Leben ohne Planung begann. Der Mann, der alles abwog, liebte einzig sie, ohne sie abzuwägen; vielleicht war sie darum mein Wahrhaftigstes.' },
              { baslik: 'Es wuchs langsam', aciklama: 'Zwei Kinder, am Hof aufgewachsen; eines Tages änderte sich der Blick. Keiner von beiden weiß, wann es begann — auf das Ende dessen, was keinen Anfang hat, sind sie auch nicht vorbereitet.', oznelSabit: 'Ich weiß nicht, wann es begann — eines Tages blickte ich sie an, und mein Blick hatte sich verändert. Es war das Einzige, dessen Anfang ich nicht kannte; vielleicht konnte ich darum nie an sein Ende glauben.' },
            ],
          },
          {
            soru: 'In einem der Briefe ringt er mit dem Versmaß — so sehr, dass er schreibt, er sei diesen törichten Versen nicht gewachsen. Der Mann, der jedes Buch gelesen hat, stockt bei drei Zeilen Liebesgedicht. Beim Schreiben welches Briefes fühlte er sich zum ersten Mal schutzlos?',
          },
        ],
        yuruyus: {
          girisBaslik: 'Die Jahreszeit der Briefe — baue die Lücke',
          girisAciklama: 'Shakespeare schreibt nur das Wrack dieser Liebe: Briefe, zurückgegebene Geschenke, ein Grab. Die glückliche Jahreszeit zeigt er nie. Für die Arbeit des Verlusts baust du zuerst das, was gewonnen wurde.',
          girisSentez: 'Was du auf diesem Gang wählst, wird deins; es bleibt in Szene 5 und auf dem Friedhof bei dir.',
          gecisButonu: 'Zur ersten Station',
          cikisRitueli: 'Tritt einen Schritt aus dem Garten zurück; atme aus. Der Mann, der „geh in ein Kloster“ sagen wird, ist derselbe, der diesen Garten trägt — der Untergang wirkt nur in einem Mann, der so sehr geliebt hat. Was trägst du?',
          esik: {
            komut: 'Dies ist ein Gang. Du baust Schritt für Schritt die Jahreszeit, die Shakespeare nie schrieb — die Tage der Liebe zu Ophelia, vor der Trauer. Keine Eile.',
            hitap: 'Tritt in den Garten, wenn du bereit bist.',
            buton: 'Ich beginne',
            adimlar: [
              'Baue zuerst den Augenblick: der Schlossgarten, ein gewöhnlicher Sommer — der Vater lebt, die Welt ist heil, von Trauer keine Spur.',
              'Bemerke an jeder Station, wo in seinem Körper Hamlet in jenem Augenblick steht — bemerke es, dann gehe weiter.',
              'Was du wählst, wird deins; es wird an dem Tag, an dem du „geh in ein Kloster“ sagst, und an ihrem Grab bei dir sein.',
            ],
          },
          istasyonlar: [
            {
              zamanRozet: 'Garten — ein Sommertag',
              acilis: 'Der Schlossgarten, die Welt vor der Trauer. Ophelia ist dort — vielleicht mit einem Buch, vielleicht mit ihrem Bruder. Die Begegnung wirkt zufällig; nur Hamlet weiß, das wievielte Mal er hierherkommt.',
              yazmaPlaceholder: 'Als ich sie sah…',
              sorular: [
                'Wie oft führte ihn sein Weg „zufällig“ in jenen Garten — und was änderte sich in seinem Körper, als er sie aus der Ferne zum ersten Mal bemerkte?',
              ],
            },
            {
              zamanRozet: 'Beim Schreiben des Briefes',
              acilis: 'Nacht, Wittenberg oder das Schloss — ein Tisch, ein Blatt. Die Hand, die Philosophie zu schreiben gewohnt ist, versucht etwas anderes. Die Zeilen kommen oder kommen nicht.',
              sorular: [
                'Wie war die Hand am Anfang jenes Briefes?',
              ],
              catal: {
                etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
                secenekler: [
                  { baslik: 'Die Worte kamen leicht', aciklama: 'Zum ersten Mal in seinem Leben schrieb er ohne Nachdenken; nicht die Sprache der Philosophie, eine andere Sprache — und jene Sprache war in ihm bereit.', muhur: 'Vergiss das nicht — als ich ihr schrieb, schrieb ich zum ersten Mal ohne Nachdenken; in mir war eine Sprache älter als die Philosophie, und Ophelia fand sie.', ozet: 'Die älteste Sprache in mir fand Ophelia.' },
                  { baslik: 'Die Sprache versagte', aciklama: 'Der Mann, der jedes Buch gelesen hat, stockte bei drei Zeilen; „törichte Verse“ war keine Klage, sondern ein Geständnis — vor diesem Gefühl taugte seine ganze Bildung nichts.', muhur: 'Vergiss das nicht — vor ihr verstummten alle meine Bücher; jene drei Zeilen, bei denen ich stockte, waren das Aufrichtigste, das ich je schrieb.', ozet: 'Die drei Zeilen, bei denen ich stockte, waren mein aufrichtigstes Schreiben.' },
                ],
              },
            },
            {
              zamanRozet: 'Die letzte reine Begegnung',
              acilis: 'Noch ist nichts verdunkelt — der Vater lebt, Polonius fern, die Welt einfach. Eine weitere Begegnung; keiner von beiden weiß, dass dies der „letzte reine Augenblick“ ist.',
              sorular: [
                'Hatte diese Liebe in jenen Tagen ein Morgen — blickte Hamlet je nach vorn?',
              ],
              catal: {
                etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
                secenekler: [
                  { baslik: 'Sie hatte ein Morgen', aciklama: 'Einen Augenblick — vielleicht einen einzigen — ging der Gedanke an eine Heirat durch ihn; nicht ausgesprochen, doch da. Gertrude wird am Grab sagen „du hättest meine Schwiegertochter sein sollen“; also hatten es auch andere gesehen.', muhur: 'Vergiss das nicht — einen Augenblick dachte ich mit ihr an ein Leben; ich sagte es niemandem. Als meine Mutter an ihrem Grab „du hättest meine Schwiegertochter sein sollen“ sagte, erfuhr ich, dass mein ungesagter Traum von anderen gesehen worden war.', ozet: 'Meinen ungesagten Traum hörte ich an ihrem Grab von einer anderen.' },
                  { baslik: 'Nur das Jetzt', aciklama: 'Er dachte nie an die Zukunft; die Liebe war eine Jahreszeit, und er wusste nicht, dass sie eine Jahreszeit war. Das, was er für ewig hielt, hatte einen Kalender.', muhur: 'Vergiss das nicht — mit ihr baute ich nie eine Zukunft; alles war das Jetzt, und dass das Jetzt enden würde, kam mir nicht in den Sinn. Das, was ich für ewig hielt, hatte einen Kalender.', ozet: 'Das, was ich für ewig hielt, hatte einen Kalender.' },
                ],
              },
            },
            {
              zamanRozet: 'Auf dem Rückweg nach Wittenberg',
              acilis: 'Der Rückweg — zu den Büchern, den Vorlesungen, dem alten Leben. Doch diesmal trägt er etwas bei sich; nicht in der Satteltasche, anderswo.',
              yazmaPlaceholder: 'Was ich mitnahm…',
              sorular: [
                'Was nahm er beim Aufbruch von ihr mit — ein Bild, ein Wort, einen Geruch? Und in welchen Augenblicken kam jenes Etwas in Wittenberg zurück?',
              ],
            },
          ],
        },
      },
      {
        baslik: 'Claudius knüpft diplomatische Beziehungen zu Norwegen',
        yuk: 'Nur Hamlet trauert. Der Hof setzt seine Geschäfte fort.',
        yansimaSorusu: 'Nur Hamlet trauert — was für eine Isolation ist diese Einsamkeit?',
        replikIzi: 'Eröffnung I.ii: Gesandte nach Norwegen, Urkunden, Siegel — der Hof in vollem Gang. Am Rand, in Schwarz, ein Mann.',
        anlar: [
          {
            soru: 'Der Hof arbeitet — Gesandte, Verhandlungen, Siegel. Die Welt dreht sich auch ohne Vater. Was tat dieses Funktionieren mit Hamlet?',
            secenekler: [
              { baslik: 'Zorn', aciklama: 'Dieses Funktionieren war eine Beleidigung; jedes Siegel, jeder Gesandte eine weitere Auslöschung seines Vaters. Jeder, der nicht trauert, ist Mitschuldiger.', oznelSabit: 'Jedes laufende Rad des Hofes war mir eine Beleidigung — mein Vater war tot, und Urkunden wurden unterzeichnet. Jeden, der nicht trauerte, klagte ich an, für jede Stunde, die er nicht trauerte.' },
              { baslik: 'Entfremdung', aciklama: 'Tiefer als Zorn; ein Tourist im eigenen Haus. Die Trauer nahm ihn aus der Zeit — der Hof lebt im Kalender, er an einem Ort ohne Kalender.', oznelSabit: 'Ich konnte ihnen nicht einmal zürnen — ich war in einer anderen Zeit. Der Hof lebte mit dem Kalender; ich war an dem Tag stehen geblieben, an dem mein Vater starb, und niemand kam dorthin.' },
            ],
          },
          {
            soru: 'In welchem konkreten Augenblick bemerkte Hamlet zum ersten Mal, dass er der Einzige war, der trauerte — ein Lachen, ferne Musik, ein alltägliches Geräusch aus einem offenen Fenster?',
          },
        ],
      },
    ],
    iliskiler: [
      {
        ad: 'Gertrude',
        rol: 'MUTTER',
        gecmis: 'Quelle der Liebe, das warme Zentrum der Kindheit.',
        simdi: 'Im Gefühl des Verrats — und doch noch immer Mutter. Er kann sich nicht losreißen.',
        iz: 'Liebe und Zorn, im selben Körper.',
        yansimaSorusu: 'Wo setzt sich diese widersprüchliche Last in deinem Körper fest? In welchem Moment überwiegt die Liebe, in welchem der Zorn?',
      },
      {
        ad: 'König Hamlet',
        rol: 'VATER',
        gecmis: 'Idealer König, moralischer Maßstab; für den Sohn ein Gegenstand der Bewunderung.',
        simdi: 'Tot. Die Trauer, noch nicht als Geist herbeigerufen.',
        iz: 'Eine unfüllbare Vater-Leerstelle.',
        yansimaSorusu: 'Eine unfüllbare Leerstelle — welche Form und Größe hat diese Leere?',
      },
      {
        ad: 'Claudius',
        rol: 'ONKEL / STIEFVATER',
        gecmis: 'Der Onkel am Hof, die Verwandtschaft. Nicht nah, aber vertraut.',
        simdi: 'Der Mann seiner Mutter, Inhaber des Throns — er erregt Abscheu.',
        iz: '„Mehr als befreundet, weniger als Freund.“',
        yansimaSorusu: '„Mehr als befreundet, weniger als Freund“ — wie fühlt sich dieser Abstand im Körper an?',
      },
      {
        ad: 'Ophelia',
        rol: 'GELIEBTE',
        gecmis: 'Die Liebe hat begonnen — Briefe, heimliche Worte.',
        simdi: 'Unter der Kontrolle des Polonius; sie wird von Hamlet entfernt.',
        iz: 'Die einzige positive Bindung — doch auch sie entgleitet.',
        yansimaSorusu: 'Die einzige positive Bindung entgleitet — in welchen Momenten wird dieses Entgleiten bemerkt?',
      },
      {
        ad: 'Horatio',
        rol: 'FREUND',
        gecmis: 'Ein Freund aus Wittenberg; geistige Partnerschaft.',
        simdi: 'Zur Beerdigung gekommen — der einzige Mensch, dem Hamlet vertraut.',
        iz: 'Die einzige Zuflucht, der einzige Spiegel.',
        yansimaSorusu: 'Die einzige Zuflucht, der einzige Spiegel — wie ist dein Körper, wenn du mit Horatio bist?',
      },
      {
        ad: 'Polonius',
        rol: 'VATER DER GELIEBTEN',
        gecmis: 'Berater am Hof; er sieht Hamlet als Prinzen.',
        simdi: 'Das Hindernis vor der Liebe, der Späher, der Manipulator.',
        iz: 'Eine Autorität, die der Liebe einen Riegel vorschiebt.',
        yansimaSorusu: 'Eine Autorität, die der Liebe einen Riegel vorschiebt — welche Verkrampfung liegt im Blick auf Polonius?',
      },
      {
        ad: 'Laertes',
        rol: 'BRUDER DER GELIEBTEN',
        gecmis: 'Bekannt aus dem höfischen Umkreis; gleiches Alter, paralleles Leben.',
        simdi: 'Er geht nach Frankreich; er warnt seine Schwester vor Hamlet.',
        iz: 'Alte Nähe, neuer Abstand.',
        yansimaSorusu: 'Alte Nähe, neuer Abstand — in welchem Moment wurde dieser Wandel bemerkt?',
      },
      {
        ad: 'Fortinbras',
        rol: 'PRINZ VON NORWEGEN',
        gecmis: 'Eine mittelbare Geschichte über den Zweikampf ihrer Väter.',
        simdi: 'Eine ferne Bedrohung, noch nicht auf Hamlets Radar.',
        iz: 'Der parallele Rächer — Hamlets Gegenspiegel.',
        yansimaSorusu: 'Gegenspiegel — was sieht Hamlet von sich selbst, wenn er an Fortinbras denkt?',
      },
    ],
  },

  perdeTemalari: [
    { baslik: 'Zweifel und passive Trauer', altyazi: 'Die Trauer kehrt sich nach innen, der Verdacht entsteht' },
    { baslik: 'Plan und Beobachtung',        altyazi: 'Beweise werden gesucht, die Tat wird aufgeschoben' },
    { baslik: 'Tat und Ausbruch',            altyazi: 'Das Zögern bricht, das erste Blut fließt' },
    { baslik: 'Verbannung und Vergleich',    altyazi: 'Die Ferne bringt den Blick auf sich selbst' },
    { baslik: 'Annahme und Ende',            altyazi: 'Der Widerstand endet, die Bereitschaft kommt' },
  ],

  sahnelerWorkbook: [
    {
      baslik: 'Der Geist auf den Zinnen',
      konum: 'I.i · Nacht',
      olay:
        'Auf den Zinnen von Elsinore sehen die wachhabenden Soldaten einen Geist. Horatio wird gerufen; der Geist gleicht dem alten König Hamlet. Hamlet ist noch nicht auf der Bühne — er trauert im Saal des Schlosses.',
      icsel:
        'Hamlet fehlt in dieser Szene — doch der Text wird in seiner Abwesenheit gewoben. Der Geist wartet auf seinen Sohn.',
      yuk: 'Ein Sohn, der noch nichts weiß, wird zu einer Wahrheit hingezogen.',
      replikIzi: 'Horatio: Hätte er es nicht mit eigenen Augen gesehen, er hätte es nie geglaubt. / Mit dem Morgengrauen weicht er; man beschließt: der junge Hamlet muss es erfahren.',
      anlar: [
        {
          soru: 'Während der Geist auf den Zinnen auf seinen Sohn wartet, ist Hamlet irgendwo im Schloss — schlafend oder schlaflos. Shakespeare schreibt jene Nacht nicht. Wo war Hamlet, was tat er, während sein Vater auf den Zinnen auf ihn wartete?',
        },
        {
          soru: 'Die Nachricht ist noch nicht gekommen — doch bald wird Hamlet rufen „O meine prophetische Seele!“ Ahnte er in jenen Tagen, noch ohne Kenntnis vom Geist, etwas in sich?',
          secenekler: [
            { baslik: 'Ich ahnte', aciklama: 'Im Tod seines Vaters lag ein Gefühl des Unrechts, das er nicht benennen konnte; der Geist wird keine Überraschung sein, sondern eine Antwort.', oznelSabit: 'Ich konnte es nicht benennen, doch ich wusste: in diesem Tod lag ein Unrecht. Der Geist sagte mir nichts Neues — er gab dem Stimme, was in mir war.' },
            { baslik: 'Ich ahnte nichts', aciklama: 'Die Trauer hatte alles bedeckt; für Zweifel war kein Raum. Der Geist wird vom Himmel fallen — die Welt wird zweimal einstürzen.', oznelSabit: 'Ich ahnte nichts — meine Trauer war so groß, dass in ihr kein Raum für eine Frage war. Als die Wahrheit kam, stürzte meine Welt ein zweites Mal ein.' },
          ],
        },
      ],
    },
    {
      baslik: 'Der erste Monolog',
      konum: 'I.ii · Der Hof',
      olay:
        'Claudius sitzt auf dem Thron, Gertrude an seiner Seite, Hamlet steht in Schwarz am Rand. „Mehr als befreundet, weniger als Freund“ sagt er zu seinem Onkel. Allein geblieben: „O schmölze doch dies allzu feste Fleisch, zerging und löst in einen Tau sich auf!“',
      icsel:
        'Trauer + Abscheu + moralischer Zusammenbruch. Die Eile der Mutter, das Lächeln des Hofes sind unerträglich.',
      yuk: 'Die Einsamkeit auf dem Höhepunkt. Etwas fehlt, doch was — er weiß es noch nicht.',
      replikIzi: 'Hamlet: „Ein wenig mehr als Vetter, weniger als Sohn.“ / Allein geblieben der erste Monolog — die Stimme, die bleibt, wenn der Lärm des Saals weicht.',
      anlar: [
        {
          soru: '„Ein wenig mehr als Vetter, weniger als Sohn“ — Hamlets erste Replik im Stück ist eine Nadel. Während er inmitten eines Saals voller Menschen dieses Wortspiel macht, zu wem sprach er?',
          secenekler: [
            { baslik: 'Er sagte es, damit man es hört', aciklama: 'Eine offene Herausforderung; die erste Fahne inmitten des Hofes. Die Fortsetzung des Mannes an der Schwelle, der „seine Trauer zeigt“.', oznelSabit: 'Ich stach jene Nadel, damit alle es hören — sie sollten wissen, dass in diesem Hof wenigstens einer nicht schläft.' },
            { baslik: 'Er sagte es zu sich', aciklama: 'Halblaut, fast unwillkürlich; der Witz, der einzige Ausweg des Schmerzes. Wer es hörte, hörte es.', oznelSabit: 'Jenes Wortspiel war kein Angriff — es war das erste Durchsickern des Drucks in mir. Mein Witz war das einzige Atemloch meines Schmerzes.' },
          ],
        },
        {
          soru: 'Im Monolog erscheint der Selbstmord als Gedanke — „hätte Gott es nicht verboten...“ Als jener Gedanke in seinem Geist erschien, war er für Hamlet neu?',
          secenekler: [
            { baslik: 'Er erschien zum ersten Mal', aciklama: 'Er erschrak vor seinem eigenen Geist; der Gedanke war fremd, und diese Fremdheit war an sich erschreckend.', oznelSabit: 'Jener Gedanke erschien in jenem Saal zum ersten Mal — und was mich am meisten erschreckte, war, wie wenig er mich überraschte.' },
            { baslik: 'Er war vertraut', aciklama: 'Seit Tagen begleitete er ihn still; in jenem Monolog wurde er zum ersten Mal in Worte gefasst.', oznelSabit: 'Jener Gedanke wurde an jenem Tag nicht geboren — er war seit Tagen bei mir. Der Monolog erschuf ihn nicht; er gab ihm nur einen Namen.' },
          ],
        },
        {
          soru: 'Als der Monolog endet, erscheint Horatio — ein Gesicht aus Wittenberg, ein Zeuge aus dem alten Leben. In der ersten Sekunde, da er ihn sah, was löste sich in Hamlets Körper?',
        },
      ],
    },
    {
      baslik: 'Die Begegnung mit dem Geist',
      konum: 'I.iv-v · Nacht',
      olay:
        'Der Geist erscheint Hamlet. Er sagt, sein Vater sei von Claudius ermordet worden, indem ihm Gift ins Ohr gegossen wurde, und fordert Rache. Hamlet schwört.',
      icsel:
        'Schock → Glaube → Racheschwur. Drei Schichten in wenigen Minuten.',
      yuk: 'Der Hamlet, der diese Szene verlässt, ist nicht der Hamlet, der sie betrat.',
      replikIzi: 'Hamlet: „O meine prophetische Seele! Mein Oheim!“ / Das letzte Wort des Geistes: „Gedenke mein.“ — und im Morgengrauen der Schwur.',
      anlar: [
        {
          soru: 'Der Geist ruft; Horatio und Marcellus halten ihn — „geh nicht, was, wenn er dich zum Abgrund zieht?“ Hamlet reißt sich los und geht. Was zog ihn in jenem Augenblick zum Geist?',
          secenekler: [
            { baslik: 'Den Vater noch einmal sehen', aciklama: 'Eine Sehnsucht größer als die Furcht; in dieser Gestalt ist sein Vater — die Gefahr unwichtig.', oznelSabit: 'Was mich zog, war nicht die Wahrheit — es war sein Gesicht. Wäre es ein Abgrund, ich ginge dennoch; gegen die Möglichkeit, meinen Vater noch einmal zu sehen, hatte die Furcht keine Macht.' },
            { baslik: 'Hunger nach Bestätigung', aciklama: '„Also bin ich nicht wahnsinnig — es ist wirklich etwas falsch.“ Der Ruf der Wahrheit vor der Sehnsucht.', oznelSabit: 'Ich riss mich los, weil ich wissen musste — jenes namenlose Gefühl des Unrechts in mir würde entweder bestätigt oder es würde mich in den Wahnsinn treiben.' },
          ],
        },
        {
          soru: '„O meine prophetische Seele! Mein Oheim!“ — als Claudius\\u2019 Name aus dem Mund des Geistes kam, was tat die Bestätigung des Geahnten Hamlet?',
          secenekler: [
            { baslik: 'Etwas wie Erleichterung', aciklama: 'Der unbenennbare Verdacht fand endlich einen Namen; schrecklich, aber nun etwas Fassbares.', oznelSabit: 'Im Augenblick der Bestätigung fühlte ich eine beschämende Erleichterung — also war ich nicht wahnsinnig. Die dunkelste Nachricht ließ mich zuerst atmen.' },
            { baslik: 'Zusammenbruch', aciklama: 'Ahnen ist eines, es aus dem Mund des Vaters hören ein anderes; die Gewissheit schwerer als der Zweifel.', oznelSabit: 'Den Verdacht konnte ich tragen — die Gewissheit nicht. Als jener Name fiel, stürzte auch die letzte feste Mauer meiner Welt ein.' },
          ],
        },
        {
          soru: '„Gedenke mein.“ Als Hamlet schwört, sagt er, er werde alles aus dem Buch seines Gedächtnisses tilgen und nur diesen Befehl einschreiben. Was versprach er in jenem Augenblick wirklich zu tilgen — und war Ophelia unter dem Getilgten?',
        },
      ],
    },
    {
      baslik: 'Plan + Schauspieler',
      konum: 'II.ii · Der Hof',
      olay:
        'Rosenkranz und Güldenstern sind am Hof — Claudius\' Spitzel. Die Schauspieler kommen. Hamlet schmiedet den Plan der „Mausefalle“: Ein Stück soll aufgeführt werden, um die Schuld des Claudius zu prüfen.',
      icsel:
        'Paranoia + Hinwendung zum Verstand. Der Körper tritt zurück, der Geist nach vorn. Die Maske des Wahnsinns wird angelegt.',
      yuk: 'Er sagt, er glaube dem Geist nicht; glaubt er wirklich nicht?',
      replikIzi: 'Hamlet zu R&G: „Wart ihr gerufen, oder kamt ihr von selbst?“ / Allein geblieben: ein Schauspieler weint um ein Nichts — ich schweige für einen wirklichen Vater.',
      anlar: [
        {
          soru: 'R&G — Kindheitsfreunde. Hamlet begreift es in wenigen Fragen: sie sind geschickt worden. „Wart ihr gerufen, oder kamt ihr von selbst?“ In der Sekunde, da er es begriff, was geschah in ihm?',
          secenekler: [
            { baslik: 'Ein weiterer Verlust', aciklama: 'Schmerz; auch die Freundschaft erwies sich als unzuverlässig. Die Liste des Verrats reicht nach Mutter und Onkel nun bis in die Kindheit.', oznelSabit: 'Den Augenblick, da ich sie verlor, lag in jener Frage — ich brauchte die Antwort nicht zu hören. Auch meine Kindheit war nun Eigentum dieses Hofes geworden.' },
            { baslik: 'Kalte Verzeichnung', aciklama: 'Er war nicht überrascht; zwei Namen mehr auf der Liste. Das Spiel wuchs — nun ist jeder entweder Partei oder Werkzeug.', oznelSabit: 'Ich war nicht einmal überrascht — das war es, was mich am meisten erschreckte. Ich konnte nun zwei alte Freunde in wenigen Sekunden zu zwei Steinen auf dem Brett machen.' },
          ],
        },
        {
          soru: 'Der Schauspieler vergießt wahre Tränen um Hekuba — um eine Fiktion. Allein geblieben, fällt Hamlet über sich her. Was war die wirkliche Funktion dieses Zorns?',
          secenekler: [
            { baslik: 'Angriff auf sich selbst', aciklama: 'Das wahre Ziel ist die eigene Untätigkeit; der Schauspieler nur ein Spiegel. Der Zorn fließt nach innen, nicht nach außen.', oznelSabit: 'In jener Nacht griff ich mich selbst an, weil ich das einzig sichere Ziel war — die Hand, die meinen Onkel nicht erreichte, fand zurück zu mir.' },
            { baslik: 'Peitsche', aciklama: 'Der Angriff auf sich selbst ist ein Mittel; er macht seinen Zorn zum Treibstoff — der Monolog beginnt mit Selbsthass, endet mit einem Plan.', oznelSabit: 'Ich peitschte mich — doch jene Peitsche trieb mich zur Tür des Plans. In jener Nacht lernte ich, meine Scham zum Treibstoff zu machen.' },
          ],
        },
        {
          soru: 'Die Sekunde, in der die Idee der „Mausefalle“ geboren wird — welches erste Gefühl erschien, während der Plan im Geist Gestalt annahm? Und war in jenem Gefühl eine kleine Erleichterung verborgen: „nun muss ich nicht sofort töten — zuerst der Beweis“?',
        },
      ],
    },
    {
      baslik: '„Sein oder Nichtsein“ + Ophelia',
      konum: 'III.i · Der Korridor',
      olay:
        'Hamlet, allein, sinnt über das Dasein: „Sein oder Nichtsein, das ist hier die Frage.“ Dann kommt Ophelia; Hamlet weist sie schroff zurück und schickt sie ins Kloster.',
      icsel:
        'Existenzieller Zusammenbruch → der Entschluss, ins Leben zurückzukehren → die Zurückweisung der Liebe. Drei verschiedene Momente in einer Szene.',
      yuk: 'Auch Ophelia stand auf ihrer Seite (glaubte er). Die einzige positive Bindung wird durchtrennt.',
      replikIzi: '„Sein oder Nichtsein, das ist hier die Frage.“ / Zu Ophelia: „Geh in ein Kloster.“ / Ophelia: „O welch ein edler Geist ist hier zerstört!“',
      anlar: [
        {
          soru: '„Sein oder Nichtsein“ — wie wirklich war diese Waage in jenem Korridor?',
          secenekler: [
            { baslik: 'Eine wirkliche Waage', aciklama: 'Der Tod stand in jenem Augenblick als wirkliche Möglichkeit; keine Philosophie, eine Schwelle. Der Monolog kein Gedanke, ein Handel.', oznelSabit: 'In jenem Korridor war der Tod kein Gedanke — er war eine Tür, und ich fasste die Klinke. Was mich zurückwies, war nicht Mut, sondern die Furcht vor dem Unbekannten.' },
            { baslik: 'Eine philosophische Distanz', aciklama: 'Während der Gedanke den Tod abwog, hatte der Körper längst das Leben gewählt; die Waage eine Zuflucht — Denken die edelste Form des Nichthandelns.', oznelSabit: 'Indem ich den Tod bedachte, entfernte ich mich von ihm — jener Monolog war keine Schwelle, sondern eine Zuflucht. Denken war für mich stets das sicherste Zimmer.' },
          ],
        },
        {
          soru: '„Geh in ein Kloster“ — der Untergang, der sich gegen die geliebte Frau kehrt. Zu wem sprach jene Härte?',
          secenekler: [
            { baslik: 'Er sprach zum Vorhang', aciklama: 'Er ahnte, dass man lauschte; die Härte war eine Botschaft an die Beobachter — Ophelia geriet zwischen zwei Feuer.', oznelSabit: 'Jene Worte galten nicht ihr — ich schrie zu denen hinter dem Vorhang. Doch die Worte trafen nicht den Vorhang, sondern sie; ich wusste es und fuhr fort.' },
            { baslik: 'Er sprach wirklich zu ihr', aciklama: 'Er stieß die geliebte Frau mit eigenen Händen fort — denn in der nahenden Dunkelheit war kein Platz für sie; die Härte war ein Abschied in Gestalt des Schutzes.', oznelSabit: 'Ich verjagte sie mit eigenen Händen, denn dorthin, wohin ich ging, durfte niemand kommen. Meine härtesten Worte waren der einzige Abschied, den ich nicht aussprechen konnte.' },
          ],
        },
        {
          soru: 'Blickte er beim Verlassen des Raumes ein letztes Mal zu Ophelia — und wenn nicht, um was nicht anzusehen?',
        },
      ],
    },
    {
      baslik: 'Das Spiel im Spiel',
      konum: 'III.ii · Der Hof',
      olay:
        'Die Schauspieler führen eine Szene auf, die den Tod des alten Königs darstellt. Claudius hält es nicht aus, verlässt die Aufführung. Hamlet hat seinen Beweis.',
      icsel:
        'Geduldige Strategie → ausgebrochene Bestätigung. „Jetzt weiß ich es.“',
      yuk: 'Jetzt weiß ich es. Und nun?',
      replikIzi: 'Während die Giftszene gespielt wird, springt Claudius auf: er verlangt Licht, der Saal löst sich auf. / Hamlet, Auge in Auge mit Horatio: der Beweis ist da.',
      anlar: [
        {
          soru: 'Bevor das Spiel beginnt, geht Hamlet und setzt sich neben Ophelia — die Frau, die er am selben Tag ins Kloster schickte. Vor aller Augen, die Scherze schneidend. Was war diese Wahl?',
          secenekler: [
            { baslik: 'Teil der Maske', aciklama: 'Die Rolle des „wahnsinnig Verliebten“ vor aller Augen; die Blicke sollen sich auf ihn richten, damit der König ungestört beobachtet werden kann. Ophelia wieder ein Werkzeug.', oznelSabit: 'Ich setzte mich für meine Maske neben sie — und in der Sekunde, da ich mich setzte, wusste ich, dass die Maske sie ein weiteres Mal benutzte.' },
            { baslik: 'Ein Versuch der Rückkehr', aciklama: 'Die einzige Form der Nähe, die die Maske erlaubt; unter den schneidenden Scherzen eine unausgesprochene Entschuldigung.', oznelSabit: 'Jene schneidenden Scherze waren meine Entschuldigung — eine andere Sprache war mir nicht geblieben. Mich neben sie zu setzen war der weiteste Punkt, zu dem ich zurückkehren konnte.' },
          ],
        },
        {
          soru: 'Claudius sprang auf, verlangte Licht — der Beweis ist da. In jener Sekunde, was explodierte in Hamlet?',
          secenekler: [
            { baslik: 'Triumph', aciklama: 'Er lacht beinahe; der monatelang getragene Verdacht ist mit einem Zug gelöst. Der Rausch des Beweises — der Sturz kommt danach.', oznelSabit: 'In jenem Augenblick glaubte ich gewonnen zu haben — ich war der einzig Nüchterne im Saal und doch wie betrunken. Die Rechnung des Triumphs kam mit der Nacht.' },
            { baslik: 'Eine Kälte im Grund', aciklama: 'Die Freude dauerte eine Sekunde; gleich darauf die Schwere — der Beweis ist da, und nun bleibt keine Ausrede mehr.', oznelSabit: 'In der Sekunde, da ich den Beweis erhielt, verlor ich meine Freiheit — der Zweifel war eine Zuflucht; die Gewissheit ließ mich mit der Tat allein.' },
          ],
        },
        {
          soru: 'Während der Saal sich auflöst, treffen sich Hamlet und Horatio Auge in Auge — eine wortlose Bestätigung. Was lag in jenem Blick, den die zwei Männer teilten?',
        },
      ],
    },
    {
      baslik: 'Der betende Claudius',
      konum: 'III.iii · Die Kapelle',
      olay:
        'Claudius ist niedergekniet, um zu beichten. Hamlet hinter ihm, das Schwert gezogen — doch er schlägt nicht zu. „Töte ich ihn so, kommt er in den Himmel; ist das dann meine Rache?“ Er schiebt es auf.',
      icsel:
        'Gewissen + Gerechtigkeitsgefühl + Aufschub. Der Verstand liefert Gründe.',
      yuk: 'Die Gewohnheit des Aufschubs verfestigt sich. Es ist immer dasselbe, wann auch immer.',
      replikIzi: 'Hamlet (das Schwert in der Hand): „Sende ich ihn so in den Himmel — ist das Rache?“ / Das Schwert senkt sich; die Tür bleibt zurück.',
      anlar: [
        {
          soru: 'Ein Mann mit dem Rücken zu ihm, kniend. Hamlet dahinter, das Schwert in der Hand. Wen sah er in jenen Sekunden vor sich?',
          secenekler: [
            { baslik: 'Den Mörder', aciklama: 'Das Blut seines Vaters; in der Gestalt nur die Schuld. Der Blick fest — darum ist das Nichtzuschlagen umso unverständlicher.', oznelSabit: 'Vor mir war nur der Mörder — und dennoch schlug ich nicht zu. Was mich aufhielt, war nicht Mitleid; ich sah nicht einmal etwas, dem ich Mitleid schenken könnte.' },
            { baslik: 'Einen knienden Menschen', aciklama: 'Zum ersten Mal ist Claudius klein, schutzlos, fast erbärmlich. Genau dieses Bild erschwert das Töten.', oznelSabit: 'Zum ersten Mal sah ich ihn in jenem Augenblick als Menschen — geschrumpft, kniend. Was mein Schwert wirklich aufhielt, war jenes Bild; die Begründung fand ich danach.' },
          ],
        },
        {
          soru: 'Das Schwert war gezogen. Wie nah kam er dem Zuschlagen — was sagt das Gedächtnis des Körpers?',
          secenekler: [
            { baslik: 'Das Schwert blieb in der Luft', aciklama: 'Der Körper hatte die Schwelle überschritten; der Verstand fing es in der Luft. Das Senken erforderte eine eigene Entscheidung — und sie wurde getroffen.', oznelSabit: 'Mein Schwert blieb in der Luft — mein Körper hatte das Zuschlagen längst gewählt, mein Verstand fing es in der Luft. In jener Nacht trug ich die Erschöpfung nicht der Tat, sondern des Rückzugs.' },
            { baslik: 'Es hob sich nie', aciklama: 'Es war gezogen, doch hob sich nie zum Schlag; die Berechnung war schneller als die Hand. Der Körper kam nie an die Schwelle.', oznelSabit: 'Mein Schwert hob sich nie — noch an der Tür hatte die Berechnung begonnen. Mein Körper kam nie an jene Schwelle; mein Verstand ließ es nicht zu.' },
          ],
        },
        {
          soru: 'Welchen Satz sagte er sich beim Umkehren von der Tür — „ich fange ihn in einem blutigeren Augenblick“ oder etwas anderes? Und wie sehr glaubte er selbst jenem Satz?',
        },
      ],
    },
    {
      baslik: 'Die Szene mit der Mutter + Polonius',
      konum: 'III.iv · Das Gemach der Mutter',
      olay:
        'Hamlet kommt in das Zimmer seiner Mutter. Hinter dem Vorhang hört er ein Geräusch; „Was da? Eine Ratte?“ und stößt sein Schwert hindurch. Versehentlich hat er Polonius getötet. Die Auseinandersetzung mit der Mutter beginnt erst danach.',
      icsel:
        'Liebe → Zorn → Reue. Drei Schichten brechen zugleich hervor.',
      yuk: 'Nun ist er ein Mörder. Kein Zurück mehr.',
      replikIzi: 'Hamlet: „Was, eine Ratte?“ / Gertrude: „Nichts! Und doch sehe ich alles, was da ist.“',
      anlar: [
        {
          soru: '„Was, eine Ratte?“ — das Schwert fährt in den Vorhang. In jener Sekunde, wen glaubte Hamlet zu töten?',
          secenekler: [
            { baslik: 'Claudius', aciklama: 'Endlich ging die Hand — die im Korridor nicht ging, ging am Vorhang; und traf den falschen Mann. Seine erste Tat ein Irrtum.', oznelSabit: 'Ich stieß jenes Schwert in meinen Onkel — aus dem Vorhang kam Polonius. Mein einziger Stoß ohne Zögern traf den falschen Mann; so gab mir die Tat ihre erste Lehre.' },
            { baslik: 'Niemanden', aciklama: 'Ohne Nachdenken, ein Reflex; die Bewegung am Vorhang war eine Bedrohung. Die Frage, wer es war, kam nach dem Schwert.', oznelSabit: 'In jenem Augenblick tötete ich niemanden — ich tötete eine Bewegung. Der Name kam danach; und mit dem Namen das Entsetzen, ohne Nachdenken töten zu können.' },
          ],
        },
        {
          soru: 'Der Geist kommt wieder — doch diesmal sieht ihn nur Hamlet. Gertrude: „Nichts! Und doch sehe ich alles, was da ist.“ Als jener Satz Hamlet traf, was geschah in ihm?',
          secenekler: [
            { baslik: 'Der Glaube blieb unerschüttert', aciklama: 'Wenn die Mutter nicht sieht, liegt die Blindheit bei ihr; der Geist kam zu ihm, weil die Aufgabe seine ist. Die Gewissheit wie eine Festung.', oznelSabit: 'Meine Mutter sah nicht — ich sah; ich war nicht erschüttert. Dass der Geist nur mir erschien, war das Siegel, dass die Last allein mir gehörte.' },
            { baslik: 'Eine Sekunde Eis', aciklama: '„Was, wenn sie wirklich nicht sieht... was, wenn ich?“ — die erste Sekunde, in der sich der Verdacht des Wahnsinns gegen ihn selbst kehrt. Die Tür wurde sofort geschlossen; doch sie hatte sich einmal geöffnet.', oznelSabit: 'Eine Sekunde — nur eine Sekunde — zweifelte ich an meinem eigenen Auge. Ich schloss jene Tür sofort; doch ich wusste nun, dass dort eine Tür war.' },
          ],
        },
        {
          soru: 'Die Leiche zu seinen Füßen, die Mutter ihm gegenüber — und Hamlet sagt „gute Nacht“, mehrmals. Wie oft blickte er zwischen jenen Abschieden auf Polonius — und was sah er, wenn er blickte?',
        },
      ],
    },
    {
      baslik: 'Die Sendung nach England',
      konum: 'IV.iii · Der Hof',
      olay:
        'Er hat Polonius\' Leiche versteckt. Claudius verbannt ihn — angeblich zur Diplomatie, in Wahrheit mit einem Todesurteil. Hamlet legt die Maske der Ironie an; im Inneren ahnt er die Bedrohung.',
      icsel:
        'Ironische Wahnsinnsmaske + innerer Abzug gespannt. Wort und Absicht sind getrennt.',
      yuk: 'Unter Bedrohung — doch ich bin mir bewusst.',
      replikIzi: '„Wo ist Polonius?“ — „Beim Abendmahl; nicht wo er isst, sondern wo er gegessen wird.“ / Abschied: „Lebt wohl, teure Mutter.“',
      anlar: [
        {
          soru: 'In der Nacht zuvor tötete er einen Mann; nun macht er Wortspiele über den Ort der Leiche — „nicht wo er isst, sondern wo er gegessen wird.“ Was war dieser kalte Glanz?',
          secenekler: [
            { baslik: 'Die Maske in voller Kontrolle', aciklama: 'Die Vorstellung war nie so meisterhaft; er bedeckt das Entsetzen mit Witz. Der Mann im Innern sieht dem äußeren zu.', oznelSabit: 'Während ich jene Wortspiele machte, sah ich mir selbst zu — die Maske hatte nie so gut gesessen, und das beruhigte mich nicht; wie gut sie saß, erschreckte mich.' },
            { baslik: 'Die Linie wurde dünn', aciklama: 'Der Unterschied zwischen Maske und Gesicht begann zu verschwinden; wer jene Scherze macht, ist nicht mehr ganz „Rolle“. Der erste Mörder spricht hier.', oznelSabit: 'Jene Scherze kamen ungeprobt — und als sie kamen, begriff ich: der Mann, der über einer Leiche lachen kann, war keine Maske mehr, die ich trug.' },
          ],
        },
        {
          soru: 'Claudius verkündet die Verbannung: „Du gehst nach England.“ Hamlet stimmt zu — fast leicht. Was war diese Zustimmung?',
          secenekler: [
            { baslik: 'Berechnung', aciklama: 'Das Gehen sichtbar, die Rückkehr ein Plan; die Verbannung ein Feld für Züge. Er ahnt die Bedrohung — und wählt, sie zu spielen.', oznelSabit: 'Als ich die Verbannung annahm, ging ich nicht — ich machte einen Zug. An jenem Tag lernte ich, auf seinem Brett mit seinem Stein zu spielen.' },
            { baslik: 'Ergebung', aciklama: 'Erschöpfung; dass andere die Entscheidung treffen, ist einen Augenblick erleichternd. Der Mann, der das Schiff besteigt, ist der treibende Mann.', oznelSabit: 'Ich stimmte zu, weil ich erschöpft war — dass mir die Entscheidung genommen wurde, war einen Augenblick wie Atem. Ich bestieg das Schiff mit eigenem Fuß, doch mit fremdem Willen.' },
          ],
        },
        {
          soru: 'Sein Abschied ist ein Gift: „Lebt wohl, teure Mutter“ — er nennt Claudius „Mutter“: Vater und Mutter sind Mann und Frau, Mann und Frau ein Leib. Wo waren seine Augen auf Claudius, während er jenen Satz sprach?',
        },
      ],
    },
    {
      baslik: 'Das Heer des Fortinbras',
      konum: 'IV.iv · Der Weg',
      olay:
        'Unterwegs begegnet er dem Heer des Fortinbras. Tausende Soldaten, die um ein winziges Stück Land kämpfen. Hamlet sieht auf seine eigene Untätigkeit und empfindet Scham: „O, von Stund an trachtet, Gedanken, nach Blut, sonst seid ihr nichts mehr wert!“',
      icsel:
        'Scham → Zorn auf sich selbst → der Entschluss zur Tat. Der Vergleich setzt den Körper in Bewegung.',
      yuk: 'Der Entschluss ist da, doch fern von Dänemark. Wo bleibt die Tat?',
      replikIzi: '„O von Stund an trachtet nach Blut, Gedanken, oder seid nichts wert!“ / Tausende Männer ziehen für eine Eierschale.',
      anlar: [
        {
          soru: 'Tausende Männer ziehen für ein Nichts in den Tod — und Hamlet steht mit einer wirklichen Sache. Was tat ihm dieser Vergleich?',
          secenekler: [
            { baslik: 'Ein weiteres Gericht', aciklama: 'Der Vergleich erdrückte ihn; die Fortsetzung der Hekuba-Nacht — ein neuer Prozess der Untätigkeit. Die Sätze groß, der Körper noch zum Schiff hin.', oznelSabit: 'Ich blickte auf jenes Heer und richtete mich ein weiteres Mal — das wievielte Gericht es war, zählte ich nicht mehr. Meine Entscheidungen wurden stets als Satz geboren und starben als Satz.' },
            { baslik: 'Ein Schnitt', aciklama: 'Dieser Monolog ist anders als die früheren; nicht Scham, sondern Entscheidung — „blutig oder nichts“ keine Peitsche, sondern ein Wendepunkt. Der Mann, der das Schiff bestieg, hatte entschieden.', oznelSabit: 'Auf jenem Weg wurde etwas durchtrennt — ich hörte auf, mich anzuklagen, ich entschied. Die Hand, die auf dem Schiff den Erlass schrieb, wurde vor jenem Heer geboren.' },
          ],
        },
        {
          soru: 'Während er das Heer betrachtet, blieb sein Auge am Gesicht eines einzelnen Soldaten hängen — sein Altersgenosse, der für ein Nichts in den Tod zieht? Und was sah er in jenem Gesicht?',
        },
      ],
    },
    {
      baslik: 'Ophelias Wahnsinn + Tod',
      konum: 'IV.v-vii · Schloss & Bach',
      olay:
        'Hamlet ist nicht auf der Bühne. Ophelia kommt mit Blumen, ihr Wahnsinn wird sichtbar. Eine Weile später fällt sie in den Bach und ertrinkt. Laertes kehrt aus Frankreich zurück und schwört Rache.',
      icsel:
        'Hamlet weiß noch nichts — doch seine Abwesenheit vergrößert die Szene. Die mittelbaren Wellen von Polonius\' Tod.',
      yuk: 'Seine Abwesenheit wächst. Bei seiner Rückkehr wartet eine andere Trauer auf ihn.',
      replikIzi: 'Ophelia, mit zerstreuten Liedern und Blumen. / Gertrude bringt die Nachricht: ein Weidenzweig, der Bach, schwer werdende Kleider — und das still sich schließende Wasser.',
      anlar: [
        {
          soru: 'Während Ophelia am Bachufer zerfällt, ist Hamlet auf See — Piraten, ein Handel, der Rückweg. Shakespeare stellt die zwei Zeiten nebeneinander, ohne sie zu verbinden. Wo genau war dein Hamlet in Ophelias letzten Stunden, was tat er?',
        },
        {
          soru: 'Auf dem Rückweg — noch ohne von etwas zu wissen — kam Ophelia ihm in den Sinn?',
          secenekler: [
            { baslik: 'Sie kam', aciklama: 'Sie war auf der Liste der Dinge, die er bei der Rückkehr richten würde; vielleicht an erster Stelle. Darum wird der Friedhof ein doppelter Untergang — er verlor und kam zu spät.', oznelSabit: 'Auf dem Rückweg dachte ich an sie — bei der Rückkehr würde ich ihr alles erzählen. Auf dem Friedhof verlor ich nicht nur sie; ich verlor das ganze Gespräch, das ich ihr schuldete.' },
            { baslik: 'Sie kam nicht', aciklama: 'Der Geist war ganz bei Claudius; Ophelia war in dem Buch geblieben, das in der Nacht des Schwurs getilgt wurde. Was auf dem Friedhof explodiert, ist auch ein wenig die Scham dieser Tilgung.', oznelSabit: 'Auf dem Rückweg dachte ich nicht ein einziges Mal an sie — ich selbst hatte sie aus meinem Buch getilgt. Die Liebe, die ich am Grab schrie, war wirklich; doch in ihr lag auch das Entsetzen, sie vergessen zu haben.' },
          ],
        },
      ],
    },
    {
      baslik: 'Yorick + Ophelias Begräbnis',
      konum: 'V.i · Der Friedhof',
      olay:
        'Er spricht mit den Totengräbern und nimmt Yoricks Schädel in die Hand: „Ach, armer Yorick…“ Dann stößt er auf Ophelias Begräbnis. Mit Laertes gerät er im Grab in einen Kampf.',
      icsel:
        'Philosophischer Frieden mit dem Tod (ruhig) → der Ausbruch der unterdrückten Liebe (Schock). Zwei Momente, innerhalb von fünf Minuten.',
      yuk: 'Er hat die Liebe nicht angenommen, aber verloren. Der Tod ist nun vertraut.',
      replikIzi: '„Armer Yorick — ich kannte ihn, Horatio.“ / Im Grab: „Die Liebe von vierzigtausend Brüdern erreicht die meine nicht.“',
      anlar: [
        {
          soru: 'Yoricks Schädel in der Hand — der Überrest des Mannes, der ihn auf den Schultern trug, ihn tausendmal zum Lachen brachte. Was sagte jene Berührung Hamlet?',
          secenekler: [
            { baslik: 'Eine warme Erinnerung', aciklama: 'Im Schädel ist noch Yorick — die Lippen, die Scherze, die Kindheit auf den Schultern. Zum ersten Mal eine sanfte Begegnung mit dem Tod.', oznelSabit: 'Während ich jenen Schädel hielt, hielt ich Yorick — der Tod stand zum ersten Mal nicht wie ein Feind vor mir, sondern wie ein alter Bekannter.' },
            { baslik: 'Eine kalte Lehre', aciklama: 'Im Schädel ist niemand; auch Alexander ist Staub, auch Yorick. Der Tod das alles gleichmachende Nichts — und dieses Nichts seltsam besänftigend.', oznelSabit: 'In jenem Schädel fand ich niemanden — weder Yorick noch Alexander. In dem Augenblick, da ich sah, dass alles zu Staub zerfällt, wurde auch mein eigenes Ende leichter.' },
          ],
        },
        {
          soru: 'Im Grab ringt er mit Laertes: „Die Liebe von vierzigtausend Brüdern erreicht die meine nicht.“ Worum war dieser Kampf?',
          secenekler: [
            { baslik: 'Der Ausbruch der Trauer', aciklama: 'Alles monatelang Unterdrückte explodierte in jener Grube; die erste und letzte offene Erklärung seiner Liebe — zu spät, aber wahr.', oznelSabit: 'Meine Liebe schrie ich zum ersten Mal an ihrem Grab — alles, was ich zu ihren Lebzeiten nicht sagen konnte, brüllte ich in ihre Erde. Eine verspätete Erklärung; doch der aufrichtigste Satz meines Lebens.' },
            { baslik: 'Der Kampf um das Recht der Trauer', aciklama: 'Laertes\\u2019 zur Schau gestellte Trauer machte ihn rasend — „dein Schmerz kann nicht größer sein als meiner.“ Ob der Kampf um Ophelia oder darum war, wer die Trauer trägt — bleibt vermischt.', oznelSabit: 'In jener Grube — kämpfte ich um Ophelia oder um mein Recht auf Trauer — ich kann es noch nicht trennen. Mein Schmerz war wahr; doch in jenem Augenblick ließ ich meinen Schmerz wetteifern, und ich sah es.' },
          ],
        },
        {
          soru: 'Blieb beim Verlassen des Friedhofs Grabhumus in seiner Handfläche — und wann, wie wischte er ihn ab?',
        },
      ],
    },
    {
      baslik: 'An Horatio · Annahme',
      konum: 'V.ii(A) · Die Halle',
      olay:
        'Er erzählt Horatio vom Verrat von Rosenkranz und Güldenstern und davon, dass er ihren Tod verschuldet hat. Er nimmt die Einladung zum Duell an. „Auch im Fall eines Sperlings waltet eine besondere Vorsehung.“',
      icsel:
        'Kaltblütige Annahme. Der innere Frieden beginnt — bereit, dem Tod ins Auge zu sehen.',
      yuk: 'Nun habe ich meinen Frieden mit dem Tod gemacht. Komme, was wolle.',
      replikIzi: '„Es ist eine besondere Vorsehung selbst im Fall eines Sperlings.“ / „Bereitsein ist alles.“',
      anlar: [
        {
          soru: 'Er erzählt Horatio vom Tod von R&G — ruhig, fast leicht: „es liegt nicht auf meinem Gewissen.“ Was war dieser Satz?',
          secenekler: [
            { baslik: 'Es liegt wirklich nicht auf', aciklama: 'Der Mann vom Schiff erwies sich als bleibend; diese Ruhe ist Teil des neuen Selbst. Sie gingen selbst ins Spiel — die Rechnung ist beglichen.', oznelSabit: 'Mein Gewissen war wirklich still — und ich hörte auf, diese Stille zu hinterfragen. Der Mann, der vom Schiff stieg, war ich nun; den alten rief ich nicht zurück.' },
            { baslik: 'Es musste gesagt werden', aciklama: 'In Horatios Blick lag eine unausgesprochene Frage; die Antwort galt zum Teil ihm selbst. Unter der Ruhe ein Zimmer, in das nicht geblickt wird.', oznelSabit: '„Liegt nicht auf“ sagte ich, weil ich auf die Frage in Horatios Augen keine andere Antwort hatte — jenen Satz sagte ich nicht ihm, sondern mir. Glaubte ich ihn? Ich fragte nicht.' },
          ],
        },
        {
          soru: 'Ein Unbehagen über dem Herzen — eine böse Vorahnung. Horatio rät zum Aufschub: „Folgt eurem Sinn, wenn er es nicht will.“ Hamlet weist es zurück: „Bereitsein ist alles.“ Was war diese Zurückweisung?',
          secenekler: [
            { baslik: 'Ergebung', aciklama: 'Hingabe an das Schicksal; der Friede eines Mannes, der aufgehört hat zu kämpfen. Wenn der Sperling fallen soll, fällt er — Widerstand hat keinen Sinn mehr.', oznelSabit: 'Ich ging, weil mir nicht die Kraft, sondern der Grund zum Widerstand fehlte. Ob jener Friede ein Sieg oder ein Loslassen war — beim Betreten des Saals konnte ich es nicht trennen.' },
            { baslik: 'Reife', aciklama: 'Die Furcht spüren, aber sie nicht entscheiden lassen. Das Gegenteil des aufschiebenden Mannes: zum ersten Mal steht eine Ahnung nicht vor der Tat.', oznelSabit: 'Ich spürte die Vorahnung und ging dennoch — zum ersten Mal in meinem Leben hielt ein Gefühl mich nicht auf. Ich war bereit; der Tag, an dem das Aufschieben starb, war jener Tag.' },
          ],
        },
        {
          soru: 'Osric ging hinaus; die letzten Minuten, bevor er in den Saal gerufen wird — neben Horatio, wenig sprechend. Was sagte er Horatio in jener Stille nicht?',
        },
      ],
    },
    {
      baslik: 'Duell + Tod',
      konum: 'V.ii(B) · Das Ende',
      olay:
        'Das Duell beginnt. Die Hinterlist wird erkannt: Klinge und Becher sind vergiftet. Gertrude trinkt aus dem vergifteten Becher und stirbt. Hamlet tötet Laertes und Claudius. Auch er selbst stirbt am Gift: „Der Rest ist… Schweigen.“',
      icsel:
        'Ein Tod in Ehre + das Weitergeben der Geschichte. „Horatio… erzähle es ihnen.“',
      yuk: 'Die Geschichte bleibt bei Horatio. Hamlet schweigt.',
      replikIzi: '„Der Rest ist Schweigen.“ / Die Schwerter werden getauscht; der Becher kippt; die Geschichte bleibt Horatio.',
      anlar: [
        {
          soru: 'Vor dem Duell entschuldigt er sich bei Laertes: „Was ich tat, tat nicht ich — mein Wahnsinn tat es; und Hamlet ist selbst dessen Opfer.“ Was war diese Entschuldigung?',
          secenekler: [
            { baslik: 'Sie war echt', aciklama: 'Er glaubt wirklich an die Existenz eines von ihm getrennten Hamlet — jene Tür hatte er im Gemach der Mutter einmal gesehen. Der Wahnsinn ist nun nicht mehr nur Maske, sondern Erklärung.', oznelSabit: 'Jene Entschuldigung war keine Formel — irgendwo glaubte ich wirklich, dass die Hand, die Polonius tötete, nicht ganz meine war. War dieser Glaube ein Trost oder eine Flucht; mit ihm betrat ich den Saal.' },
            { baslik: 'Sie war Diplomatie', aciklama: 'Eine elegante Formel vor dem Hof; die Unmöglichkeit, die wahre Entschuldigung auszusprechen. „Ich tötete deinen Vater, ich zerstörte deine Schwester“ — das ist unsagbar; der Wahnsinn ist der Name des Sagbaren.', oznelSabit: 'Meine wahre Entschuldigung war unsagbar — an ihrer Stelle sagte ich das Sagbare: meinen Wahnsinn. In Laertes\\u2019 Augen wussten wir beide, dass jener Satz eine Lüge war.' },
          ],
        },
        {
          soru: 'Die Mutter fiel, Laertes gestand, das Gift in seinem Blut — und Hamlet geht auf Claudius zu. Der ganze Schritt, der das ganze Stück über nicht getan werden konnte, wird in Sekunden getan. Was lag in jenem letzten Gang?',
          secenekler: [
            { baslik: 'Freigesetzter Zorn', aciklama: 'Was monatelang in Ketten lag, entlud sich endlich; rein, gedankenlos, vollständig. Der denkende Mann war in jenen Sekunden nicht da — und das war eine Freiheit.', oznelSabit: 'Jene letzten Schritte tat der Zorn, nicht ich — und zum ersten Mal in meinem Leben trat ich zur Seite. Was ich das ganze Stück über nicht konnte, tat ich, als ich aufhörte zu denken.' },
            { baslik: 'Der letzte Vollzug', aciklama: 'Nicht einmal mehr Zorn; die letzte Berichtigung eines sterbenden Mannes — kalt, bestimmt, fast still. Die Aufgabe wird vollendet; das Gefühl längst verbraucht.', oznelSabit: 'Ich tötete ihn nicht mit Zorn, sondern mit Bestimmtheit — es war die letzte Berichtigung eines sterbenden Mannes. Was man Rache nennt, war in jener Sekunde nur eine unvollendete Arbeit.' },
          ],
        },
        {
          soru: 'Der letzte Atem in Horatios Armen: „Erzähle meine Geschichte.“ Welche Geschichte — wie wollte dein Hamlet erinnert werden: als Sohn, der den Vater rächte, als Mann, der vor lauter Denken nicht handeln konnte, als etwas ganz anderes?',
        },
      ],
    },
  ],

  tercihler: [
    {
      konu: 'Der Geist',
      baslik: 'Ist der Geist wirklich, oder eine Halluzination?',
      isaretler: [
        {
          ref: 'I.i · Die Zinnen',
          metin:
            'Bernardo, Marcellus und Horatio sehen ihn zugleich. Horatio, der skeptische Intellektuelle: „Ich hätt es nie geglaubt, ich müßt es denn mit eignen Augen sehn.“',
        },
        {
          ref: 'I.v · Die Nacht',
          metin:
            'Der Geist spricht mit Hamlet, erzählt den Tod des alten Königs in allen Einzelheiten — Gift ins Ohr, der Schlaf im Garten.',
        },
        {
          ref: 'III.iv · Das Gemach der Mutter',
          metin:
            'Hamlet sieht den Geist und spricht mit ihm. Gertrude hört kein einziges Wort: „Nichts! Und doch sehe ich alles, was da ist.“',
        },
      ],
      sentez: 'Kollektives Sehen + einsames Sehen — zusammen. Shakespeare schreibt beides.',
      yorumlar: [
        {
          baslik: 'Der Geist ist metaphysisch wirklich',
          aciklama:
            'Ganz so, wie das zeitgenössische Publikum Shakespeares glaubte: Seele, Racheauftrag, religiöse Wirklichkeit. Die Mutter sieht ihn nicht, weil ihr geistiger Blick verschlossen ist.',
        },
        {
          baslik: 'Kollektive Ahnung, individueller Geist',
          aciklama:
            'Die Soldaten auf den Zinnen reagieren auf eine kollektive Anspannung. In der Szene mit der Mutter hingegen ist er Hamlets geistige Projektion — das Unterbewusste, sichtbar geworden.',
        },
        {
          baslik: 'Ganz aus Hamlets Geist',
          aciklama:
            'Der Geist ist eine Halluzination — Ausdruck von Hamlets Schuld und Zweifel. Dass die anderen ihn sehen, ist Fiktion um des historischen Realismus willen.',
        },
      ],
      kapanis: 'Deine Wahl bestimmt Hamlets Verhältnis zur Wirklichkeit.',
    },
    {
      konu: 'Der Wahnsinn',
      baslik: 'Ist der Wahnsinn echt oder Vorstellung?',
      isaretler: [
        {
          ref: 'I.v · Das Ende',
          metin:
            'Hamlet erklärt Horatio seinen Plan: „Weil ich vielleicht in Zukunft es für gut finde, einen wunderlichen Wesenszug anzunehmen.“ — eine bewusste Entscheidung.',
        },
        {
          ref: 'III.iv · Das Gemach der Mutter',
          metin:
            'Er sagt seiner Mutter: „Daß ich nicht wahnsinnig bin, sondern es nur zum Schein bin.“',
        },
        {
          ref: 'III.i · Klosterszene',
          metin:
            'Grausamkeit gegen Ophelia. „Geh in ein Kloster!“ — Dies mag eine Vorstellung sein, doch die emotionale Gewalt ist echt.',
        },
        {
          ref: 'V.i · Der Friedhof',
          metin:
            'Streit mit Laertes an Ophelias Grab: „Und kämen tausend Brüder, all ihre Liebe vereint…“ — ein unkontrollierter Ausbruch.',
        },
      ],
      yorumlar: [
        {
          baslik: 'Ganz und gar Vorstellung',
          aciklama:
            'Hamlet spielt ein kluges Spiel. Selbst die augenblicklichen Intensitäten sind Teil der Rolle. Jede Übersteigerung auf der Bühne dient einem Zweck.',
        },
        {
          baslik: 'Die Maske wird zur Wirklichkeit',
          aciklama:
            'Anfangs Strategie — doch wenn das Trauma sich aufstaut, bricht die Maske von innen auf. In manchen Momenten zerfällt Hamlet wirklich, dann fängt er sich wieder.',
        },
        {
          baslik: 'Beide Seiten zugleich',
          aciklama:
            'Bewusst und unbewusst stets zusammen. Hamlet wählt und wird zugleich mitgerissen. Die beiden Seiten lassen sich nicht trennen.',
        },
      ],
      kapanis: 'Deine Wahl bestimmt die Textur der „Wahnsinns“-Momente auf der Bühne.',
    },
    {
      konu: 'Ophelia',
      baslik: 'Ist die Liebe zu Ophelia echt?',
      isaretler: [
        {
          ref: 'II.ii · Polonius liest den Brief',
          metin:
            'Was Hamlet an Ophelia schrieb: „Zweifle an der Sonne Klarheit, zweifle an der Sterne Licht, zweifl, ob lügen kann die Wahrheit, nur an meiner Liebe nicht.“',
        },
        {
          ref: 'III.i · Klosterszene',
          metin:
            'Widersprüchlich: „Ich liebte Euch einst.“ — wenige Verse später: „Ich liebte Euch nicht.“ Danach: „Geh in ein Kloster!“',
        },
        {
          ref: 'V.i · Der Friedhof',
          metin:
            'Beim Begräbnis bricht es aus ihm heraus: „Ich liebte Ophelia. Und kämen tausend Brüder, all ihre Liebe vereint, sie reichten nicht an meine.“',
        },
        {
          ref: 'IV.v · Ophelias Tod',
          metin:
            'Hamlet ist nicht auf der Bühne — er trauert nicht, er weiß nichts. Bei seiner Rückkehr ist das Begräbnis das Erste, was er sieht.',
        },
      ],
      yorumlar: [
        {
          baslik: 'Echte Liebe, schützende Zurückweisung',
          aciklama:
            'Die Liebe ist am Anfang wie am Ende echt. Die Härte in der Klosterszene ist eine Geste, um Ophelia von der Gefahr des Hofes fernzuhalten — er beschützt sie, indem er seine Liebe verbirgt.',
        },
        {
          baslik: 'Das Gefühl des Verrats hat einen Bruch verursacht',
          aciklama:
            'Die Liebe ist zunächst echt; doch als er glaubt, sie habe mit ihrem Vater paktiert, erkaltet sie. Der Ausbruch am Grab ist das Geständnis eines unwiederbringlichen Verlusts.',
        },
        {
          baslik: 'Die Liebe war immer ungewiss',
          aciklama:
            'Hamlet wusste selbst nicht, ob er liebte oder nicht. Auch am Grab weiß er es nicht — er reagiert nur auf die Größe des Verlusts. Die Liebe wurde im Augenblick des Verlusts geboren.',
        },
      ],
      kapanis:
        'Deine Wahl bestimmt die Sanftheit oder Härte der Klosterszene.',
    },
    {
      konu: 'Der Aufschub',
      baslik: 'Warum wartet Hamlet so lange?',
      cokluSecimNotu:
        'Du kannst mehrere wählen. Die meisten Inszenierungen verwenden mehrere Schichten zugleich.',
      isaretler: [
        {
          ref: 'II.ii · Der zweite Monolog',
          metin:
            '„Welch ein Schurke und niedrer Sklav bin ich!“ Er zürnt sich selbst — keine Tat, nur Worte. Ein Schauspieler kann selbst für einen erdachten Schmerz Tränen vergießen, während er für seinen wirklichen Vater nichts getan hat.',
        },
        {
          ref: 'III.iii · Der betende Claudius',
          metin:
            'Das Schwert gezogen — er schlägt nicht zu. „Töte ich ihn so, kommt er in den Himmel; ist das dann meine Rache?“ — ein Grund wird erzeugt.',
        },
        {
          ref: 'IV.iv · Nach Fortinbras',
          metin:
            '„O, von Stund an trachtet, Gedanken, nach Blut, sonst seid ihr nichts mehr wert!“ — ein Versprechen an sich selbst, doch wieder keine Tat.',
        },
        {
          ref: 'III.i · „Sein oder Nichtsein“',
          metin:
            '„So macht Gewissen Feige aus uns allen: der angebornen Farbe der Entschließung wird des Gedankens Blässe angekränkelt.“',
        },
      ],
      yorumlar: [
        {
          baslik: 'Gewissen / moralisches Zögern',
          aciklama:
            'Goethes Deutung. Hamlet ist eine zarte Seele, erdrückt unter einer Aufgabe, die er nicht annehmen kann.',
        },
        {
          baslik: 'Feigheit',
          aciklama:
            'Was er sich selbst sagt — ihm fehlt der Mut zur Tat, er verdeckt es mit Worten.',
        },
        {
          baslik: 'Depression und Untätigkeit',
          aciklama:
            'Eine moderne Lesart — Trauer, Anhedonie, der Zusammenbruch des Willens. Er kann sich nicht entscheiden, weil nichts, was zu tun wäre, von Bedeutung scheint.',
        },
        {
          baslik: 'Die Hemmung durch das Denken',
          aciklama:
            'Coleridges Deutung — zu viel Denken lähmt die Tat. Ein geistiger Tod.',
        },
        {
          baslik: 'Unbewusster Konflikt',
          aciklama:
            'Freuds Deutung — Claudius hat getan, was Hamlet im Unbewussten selbst tun wollte. Ihn zu erschlagen hieße, sich selbst zu erschlagen.',
        },
      ],
    },
    {
      konu: 'Das Ende',
      baslik: 'Ist die Ergebung am Ende passiv oder reif?',
      isaretler: [
        {
          ref: 'V.ii · An Horatio',
          metin:
            '„Auch im Fall eines Sperlings waltet eine besondere Vorsehung. Ist es jetzt, so ist es nicht zukünftig; ist es nicht zukünftig, so ist es jetzt. Bereitsein ist alles.“',
        },
        {
          ref: 'V.ii · Vor dem Duell',
          metin:
            'Horatio warnt: „Mir ist schwer ums Herz, geh nicht.“ Hamlet: „Komme, was wolle! Bereitsein ist alles.“',
        },
        {
          ref: 'V.ii · Letzte Worte',
          metin:
            '„Der Rest ist… Schweigen.“ — In Ehre, oder aus Erschöpfung? Shakespeare lässt es offen.',
        },
      ],
      sentez:
        'Der Hamlet des fünften Aufzugs ist nicht derselbe wie zuvor. Etwas hat sich verändert — doch was?',
      yorumlar: [
        {
          baslik: 'Passives Aufgeben',
          aciklama:
            'Hamlet ist erschöpft, seine Fähigkeit zur Sinngebung ist versiegt. „Bereitsein ist alles“ ist auch eine weiße Fahne — das letzte Wort eines vom Schicksal zermürbten Mannes. Der Tod als Erlösung.',
        },
        {
          baslik: 'Reife Annahme',
          aciklama:
            'Der von der Englandreise zurückgekehrte Hamlet ist ein anderer — er hat dem Tod ins Auge gesehen, seine Furcht überwunden. Nicht Ergebung, sondern Frieden. Bereit zur Tat, doch nicht an ihren Ausgang geklammert. Eine philosophische Reife.',
        },
        {
          baslik: 'Beides zugleich — eine Grauzone',
          aciklama:
            'Zugleich erschöpft und reif. Die feine Linie zwischen Aufgeben und Sich-Ergeben. Shakespeare trennt die beiden nicht — vielleicht ist eine Trennung auch nicht nötig.',
        },
      ],
      kapanis:
        'Deine Wahl bestimmt den Ton der Schlussszene — Niederlage oder Besänftigung.',
    },
  ],

  boslukSet: [
    {
      baslik: 'Von Wittenberg nach Elsinore',
      konum: 'Vor dem Stück → I.ii Der Hof',
      onceBaslik: 'Wittenberg · Die Universität',
      onceMetin: 'Hamlet an der Universität, mitten im intellektuellen Leben. Sein Vater lebt. Sein Leben geordnet, eine geliebte Frau in Dänemark, sein Freund Horatio an seiner Seite. Eines Tages kommt die Nachricht: sein Vater ist tot.',
      boslukMetin: 'Aufbruch ohne Vorbereitung · eine ungewisse Reise · die Eile, zur Beerdigung zu kommen · in der Trauer an die Mutter denken · Claudius noch immer der Onkel · die Heiratsnachricht noch nicht da.',
      sonraBaslik: 'I.ii · Der Hof',
      sonraMetin: 'Hamlet in Schwarz am Hof. Die Mutter hat Claudius geheiratet. Hamlet am Rand, trauernd — der erste Monolog: „O schmölze doch dies allzu feste Fleisch, zerging und löst in einen Tau sich auf!“',
      sentez: 'Wie viel Zeit in der Lücke verging, wissen wir nicht. Kam er zur Beerdigung oder zur Hochzeit — Shakespeare sagt es nicht.',
      altSorular: [
        { baslik: 'Als die Nachricht kam', soru: 'Wer überbrachte ihm die Nachricht, mit welchen Worten? Wie reagierte sein Körper?' },
        { baslik: 'Vor dem Aufbruch', soru: 'Was tat er vor dem Aufbruch in seinem Zimmer, was ließ er zurück, was nahm er mit?' },
        { baslik: 'Als er die Mutter sah', soru: 'Welches Wort kam ihm auf die Lippen, als er die Mutter zum ersten Mal sah, welches nicht?' },
      ],
      yuruyus: {
        girisBaslik: 'Von Wittenberg nach Elsinore — baue die Lücke',
        girisAciklama: 'Die Nachricht kam: sein Vater ist tot. Den Weg von Wittenberg nach Dänemark überspringt Shakespeare. Jenen Weg — den Aufbruch, die Tage, den letzten Atem an der Schwelle — wirst du bauen.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; es bleibt in Szene 2 bei dir.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt einen Schritt vom Weg zurück; atme aus. Sobald du durch die Tür trittst, wirst du nicht sprechen — das Schwarz wird sprechen. Der erste Monolog gehört dem Mann, der durch diese Tür tritt. Was trägst du?',
        esik: {
          komut: 'Dies ist ein Gang. Diese Lücke baust du Schritt für Schritt — der von Shakespeare nicht geschriebene Weg vom Augenblick des Klopfens in Wittenberg bis zur Schwelle von Elsinore. Keine Eile.',
          hitap: 'Tritt den ersten Schritt, wenn du bereit bist.',
          buton: 'Ich beginne',
          adimlar: [
            'Baue zuerst den Augenblick: ein Universitätszimmer, Bücher, ein gewöhnlicher Abend. Die Nachricht ist noch nicht da.',
            'Bemerke an jeder Station, wo in seinem Körper Hamlet in jenem Augenblick steht — bemerke es, dann gehe weiter.',
            'Was du wählst, wird deins; welcher Mann den ersten Monolog in Szene 2 spricht, bestimmt dieser Weg.',
          ],
        },
        istasyonlar: [
          {
            zamanRozet: 'Es klopfte',
            acilis: 'Wittenberg. Ein gewöhnlicher Abend über den Büchern. Es klopft — an der Schwelle ein Bote, im Gesicht der Staub des Weges und ein Satz, den er zu sagen fürchtet.',
            yazmaPlaceholder: 'Als die Tür sich öffnete…',
            sorular: [
              'Mit welchem Wort begann der Satz, der die Nachricht brachte — und bei welchem Wort hielt Hamlets Körper inne?',
            ],
          },
          {
            zamanRozet: 'Der Weg — die tagelange Rückkehr',
            acilis: 'Pferde, Gasthäuser, das Meer. Die Rückkehr dauert Tage; der Weg lang, die Nachricht kurz. Der Geist wendet denselben Satz hin und her.',
            sorular: [
              'Was trug Hamlet auf dem Weg — eine Hoffnung oder eine Gewissheit?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              secenekler: [
                { baslik: 'Hoffnung anzukommen', aciklama: 'Vielleicht ist der Sarg noch offen; ein letztes Mal sehe ich sein Gesicht. Der Weg ein Wettlauf.', muhur: 'Vergiss das nicht — auf jenem Weg war ich noch ein Sohn; ich hatte etwas zu erreichen.', ozet: 'Auf jenem Weg hatte ich noch etwas zu erreichen.' },
                { baslik: 'Zu-spät-Kommen', aciklama: 'Schon unterwegs weiß er: alles wird vorbei sein. Der Weg kein Wettlauf, ein Aufschub.', muhur: 'Vergiss das nicht — ich ging nicht nach Hause, sondern dem Nachlass eines Beendeten hinterher; das Zu-spät-Kommen lernte ich auf jenem Weg.', ozet: 'Das Zu-spät-Kommen lernte ich auf jenem Weg.' },
              ],
            },
          },
          {
            zamanRozet: 'Elsinore erschien',
            acilis: 'Die Zinnen am Horizont. Die Burg seiner Kindheit — doch zum ersten Mal in einer Gestalt, in der sein Vater nicht ist.',
            yazmaPlaceholder: 'Als ich die Zinnen sah…',
            sorular: [
              'Was regte sich in ihm, als er die Zinnen sah — eine Heimkehr oder die Ankunft an einem fremden Ort?',
            ],
          },
          {
            zamanRozet: 'Das Schlosstor — in Schwarz',
            acilis: 'An der Schwelle oder kurz davor erfuhr er es: seine Mutter hat geheiratet. Der Rest des Begräbnismahls auf dem Hochzeitstisch. Die Tür wird sich öffnen; drinnen ist ein Fest.',
            sorular: [
              'Hielt er an der Türschwelle eine Sekunde inne — und wenn ja, was ließ er in jener Sekunde nicht zu?',
            ],
            catal: {
              etiket: 'Welcher Mann tritt ein?',
              secenekler: [
                { baslik: 'Der seine Trauer zeigt', aciklama: 'Er trägt das Schwarz bewusst — sie sollen es sehen, sich unbehaglich fühlen; seine Trauer ist sein Einspruch.', muhur: 'Vergiss das nicht — mein Schwarz war ein Einspruch; durch jene Tür trat ein Mann, der die Trauer zur Fahne machte.', ozet: 'Mein Schwarz war mein Einspruch.' },
                { baslik: 'Der seine Trauer verbirgt', aciklama: 'Das Schwarz eine Rüstung; das Innere niemandem geöffnet. Was er zeigt, ist nichts neben dem, was er trägt.', muhur: 'Vergiss das nicht — das Schwarz, das ich zeigte, war nicht einmal der Schatten dessen in mir; durch jene Tür trat ein verschlossener Mann.', ozet: 'Was ich zeigte, war nicht einmal der Schatten dessen, was ich trug.' },
              ],
            },
          },
        ],
      },
    },
    {
      baslik: 'Die Nacht nach dem Geist',
      konum: 'Ende von I.v → II.ii',
      onceBaslik: 'I.v · Das Ende',
      onceMetin: 'Der Geist sagte, wie sein Vater starb. Hamlet schwor Rache. Er ließ Horatio und Marcellus schwören: „Weil ich vielleicht in Zukunft es für gut finde, einen wunderlichen Wesenszug anzunehmen.“ Der Morgen graut, sie steigen von den Zinnen.',
      boslukMetin: 'Morgengrauen · der erste Tag · die erste Nacht allein · der Geist im Bett · die Geburt der Idee des „antic disposition“ · die Vorbereitung des Auftritts in Ophelias Zimmer (II.i erzählt Polonius davon).',
      sonraBaslik: 'II.ii · Der Hof',
      sonraMetin: 'Einige Tage sind vergangen. Polonius meldete dem König seine „Wahnsinns“-Beobachtung. R&G wurden gerufen. Die Schauspieler kommen. Hamlet schmiedet einen Plan — die „Mausefalle“.',
      sentez: 'Zwischen dem Abschied vom Geist und Hamlets Beginn, die Wahnsinnsmaske zu tragen und einen Plan zu schmieden, liegt mindestens eine Nacht. Vielleicht mehrere.',
      altSorular: [
        { baslik: 'Beim Abstieg von den Zinnen', soru: 'Wie war sein Blick auf Horatio beim Abstieg von den Zinnen? Kam ein Wort, oder war es still?' },
        { baslik: 'Als er in jener Nacht erwachte', soru: 'Schlief er in jener Nacht? Versuchte er zu schlafen? War beim Erwachen etwas verändert?' },
        { baslik: 'Die Geburt der Masken-Idee', soru: 'Woher kam die Idee des „antic disposition“? Eine bewusste Berechnung, ein plötzlicher Entschluss?' },
      ],
    },
    {
      baslik: 'Nach Polonius',
      konum: 'Ende von III.iv → IV.iii',
      onceBaslik: 'III.iv · Das Gemach der Mutter',
      onceMetin: 'Hamlet stellte seine Mutter zur Rede. Den Polonius hinter dem Vorhang tötete er mit „Was, eine Ratte?“ Der Geist kam wieder. Er verließ die Mutter, die Leiche hinter sich herschleifend.',
      boslukMetin: 'Die Leiche · die ganze Nacht hindurch zum Schloss · das Sich-Setzen des ersten Tötens im Geist · Reue, Kälte oder Furcht? · was tat er vor dem Morgen? · Schlaf als erster Mörder.',
      sonraBaslik: 'IV.iii · Vor Claudius',
      sonraMetin: 'Hamlet antwortet mit der Maske der Ironie auf Claudius’ Fragen. „Wo ist Polonius?“ — beim Abendmahl, nicht wo er isst, sondern wo er gegessen wird. Kalter Wahnsinn, der Abzug innen.',
      sentez: 'Die erste Person, die Hamlet tötete. Der erste blutige Augenblick. In dieser Lücke liegt die Entstehung jenes ersten Mörders.',
      altSorular: [
        { baslik: 'Beim Schleifen der Leiche', soru: 'Bekam er beim Schleifen der Leiche Blut an die Hände? Was fühlte er? Was dachte er beim ersten Blick?' },
        { baslik: 'Beim Verstecken der Leiche', soru: 'Wohin, wie versteckte er die Leiche? Wählte er bewusst einen Ort, oder eine Ecke aus Panik?' },
        { baslik: 'Als erster Mörder', soru: 'Was änderte sich in seinem Körper nach dem ersten Töten? Tonfall, Blick, Gang?' },
      ],
    },
    {
      baslik: 'Die Englandreise — das Schiff',
      konum: 'IV.iii → V.i · Friedhof',
      onceBaslik: 'IV.iii · Vor Claudius',
      onceMetin: 'Claudius verbannt ihn. Er wird mit R&G das Schiff besteigen. Hamlet verabschiedet sich mit Ironie: „Auf nach England! Lebt wohl, teure Mutter.“ Als hätten äußere Mächte über sein Leben entschieden.',
      boslukMetin: 'Das Schiff sticht in See · Hamlet findet den Brief von R&G · liest das Todesurteil · vertauscht den Brief · Piraten greifen an · Hamlet entkommt · kehrt nach Dänemark zurück. Er schreibt Horatio einen Brief (in IV.vi gelesen).',
      sonraBaslik: 'V.i · Der Friedhof',
      sonraMetin: 'Hamlet ist anders. „Bereitsein ist alles.“ Mit Yoricks Schädel philosophiert er. Selbst der Ausbruch bei Ophelias Beerdigung hat einen anderen Ton — vertrauter mit dem Tod.',
      sentez: 'Die größte der Lücken. Hamlets größte Wandlung geschieht hier — der in die Verbannung gehende und der zurückkehrende Hamlet sind nicht dieselbe Person.',
      altSorular: [
        { baslik: 'Als er den Brief las', soru: 'Was war sein erstes Gefühl beim Lesen des Briefes? Keine Überraschung — er hatte es geahnt. Doch welches Wort blieb ihm auf der Zunge?' },
        { baslik: 'Die Entscheidung über R&G', soru: 'Worauf stützte er die Entscheidung über den Tod von R&G? Gewissen? Rache? Oder das Erfordernis des Spiels?' },
        { baslik: 'Die Rückkehr', soru: 'Wann begriff er auf dem Rückweg, als wer er zurückkehrte? Ein Augenblick, ein Wort, ein Zeugnis?' },
      ],
      yuruyus: {
        girisBaslik: 'Das Schiff — die Lücke der Wandlung',
        girisAciklama: 'Das Verbannungsschiff stach in See. Das Finden des Briefes, das Vertauschen des Urteils, die Piraten zeigt Shakespeare nicht auf der Bühne — er lässt sie nachträglich erzählen. Die Wandlung selbst wirst du bauen.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; es bleibt in Szene 12 bei dir.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt einen Schritt vom Meer zurück; atme aus. Der Mann, der zum Friedhof geht, ist nicht der Mann, der das Schiff bestieg. Was trägst du?',
        esik: {
          komut: 'Dies ist ein Gang. Diese Lücke baust du Schritt für Schritt — vom Augenblick, da die dänische Küste verschwindet, bis zur Landung des zurückkehrenden Mannes. Keine Eile.',
          hitap: 'Tritt an Deck, wenn du bereit bist.',
          buton: 'Ich beginne',
          adimlar: [
            'Baue zuerst den Augenblick: das Deck, der Wind, zwei alte Freunde und ein versiegelter Brief. Niemand sagt etwas.',
            'Bemerke an jeder Station, wo in seinem Körper Hamlet in jenem Augenblick steht — bemerke es, dann gehe weiter.',
            'Was du wählst, wird deins; welcher Mann den Friedhof betritt, bestimmt dieses Meer.',
          ],
        },
        istasyonlar: [
          {
            zamanRozet: 'Deck — die Küste verschwindet',
            acilis: 'Dänemark wird hinter ihm dünn. R&G nah — zu nah. Hamlet in der Verbannung; doch etwas in ihm ahnt, dass diese Reise mehr ist als Verbannung.',
            yazmaPlaceholder: 'Während die Küste verschwand…',
            sorular: [
              'Worauf blickte Hamlet, als die Küste ganz verschwand — auf das Zurückgelassene oder auf die offene See?',
            ],
          },
          {
            zamanRozet: 'Nacht — der Brief in der Kajüte',
            acilis: 'Kein Schlaf. Im Dunkeln greift er in R&Gs Tasche; das königliche Siegel, darin sein eigenes Todesurteil: bei der Ankunft in England, sofortige Hinrichtung.',
            sorular: [
              'Was geschah in ihm, im Augenblick, da er das Urteil las?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              secenekler: [
                { baslik: 'Ich hatte es geahnt', aciklama: 'Das Lesen bestätigte nur; keine Überraschung, eine kalte Klarheit.', muhur: 'Vergiss das nicht — jener Brief sagte mir nichts Neues; was ich las, war das Siegel des Geahnten.', ozet: 'Was ich las, war das Siegel des Geahnten.' },
                { baslik: 'Das Siegel zu sehen war anders', aciklama: 'Ahnen ist eines, den eigenen Tod mit dem Siegel des Königs zu lesen ein anderes — das Papier wurde schwer in der Hand.', muhur: 'Vergiss das nicht — den Verdacht zu tragen war leicht; als die Gewissheit meine Hand berührte, starb die Welt ein weiteres Mal.', ozet: 'Als die Gewissheit meine Hand berührte, starb die Welt ein weiteres Mal.' },
              ],
            },
          },
          {
            zamanRozet: 'Beim Neuschreiben des Urteils',
            acilis: 'Der Siegelring seines Vaters bei ihm — das Gegenstück des königlichen Siegels. Er schreibt ein neues Urteil: die Überbringer dieses Briefes seien zu töten. Zwei alte Schulkameraden.',
            sorular: [
              'Dies ist Hamlets erste Tat ohne Zögern — wie war die Hand?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              secenekler: [
                { baslik: 'Kalt und entschlossen', aciklama: 'Zum ersten Mal keine Lücke zwischen Gedanke und Tat; die Hand schrieb ohne Innehalten.', muhur: 'Vergiss das nicht — meine erste Tat ohne Zögern war, den Tod zweier alter Freunde zu schreiben; in jener Nacht schloss sich der Abstand zwischen Denken und Tun.', ozet: 'In jener Nacht schloss sich der Abstand zwischen Denken und Tun.' },
                { baslik: 'Sie zitterte, doch schrieb', aciklama: 'Die Hand zitterte — doch zum ersten Mal hielt das Zittern nicht auf.', muhur: 'Vergiss das nicht — meine Hand zitterte und schrieb dennoch; was sich änderte, war nicht das Schwinden der Furcht, sondern dass die Furcht nicht mehr entscheiden konnte.', ozet: 'Die Furcht konnte nicht mehr entscheiden.' },
              ],
            },
          },
          {
            zamanRozet: 'Nach den Piraten — die Küste',
            acilis: 'Der Angriff, der Kampf, der Übertritt allein auf das Piratenschiff — und ein Handel. Nun ist die dänische Küste wieder vor ihm; diesmal keine Verbannung, eine Rückkehr.',
            yazmaPlaceholder: 'Als ich an Land ging…',
            sorular: [
              'Im Augenblick, da er an Land trat — was blieb vom Mann, der das Schiff bestieg, und was war neu?',
            ],
          },
        ],
      },
    },
    {
      baslik: 'Vor dem Duell',
      konum: 'V.ii(A) → V.ii(B) · Duell',
      onceBaslik: 'V.ii(A) · Nach dem Bericht an Horatio',
      onceMetin: 'Hamlet erzählte Horatio die R&G-Geschichte, nahm die Duelleinladung an. „Es ist eine besondere Vorsehung selbst im Fall eines Sperlings.“ Der innere Friede begann. Osric ging hinaus, Zeit der Vorbereitung.',
      boslukMetin: 'Vorbereitung · vielleicht ein einsamer Augenblick · vielleicht ein Weg mit Horatio · an die Mutter denken · an den Vater · an Ophelia · der Augenblick „dies hätte mein Leben sein können“ · die Wahl des Schwertes · der Atem beim Betreten des Saals.',
      sonraBaslik: 'V.ii(B) · Das Duell',
      sonraMetin: 'Der Duellsaal. Der ganze Hof. Hamlet tritt Laertes gegenüber, entschuldigt sich. Das Duell beginnt. „Der Rest ist Schweigen.“',
      sentez: 'Hamlet weiß nicht, dass er sterben wird. Doch sein Körper könnte es wissen. Diese letzte Lücke ist die kürzeste — doch vielleicht die intensivste.',
      altSorular: [
        { baslik: 'Ein einsamer Augenblick', soru: 'Gab es vor dem Betreten des Saals einen einsamen Augenblick? Blickte er aus dem Fenster, in den Spiegel?' },
        { baslik: 'Dachte er an die Mutter', soru: 'Dachte er an seine Mutter? Welche Erinnerung kam — aus der Kindheit, aus den letzten Szenen?' },
        { baslik: 'Der letzte Atem', soru: 'Der letzte Atem beim Betreten des Saals — tief oder flach? Kam ihm das Gewicht des Schwertes vertraut vor, oder eine Fremdheit?' },
      ],
    },
    {
      baslik: 'Nach Hekuba',
      konum: 'Ende von II.ii → III.i',
      onceBaslik: 'II.ii · Das Ende',
      onceMetin: 'Der Schauspieler vergoss wahre Tränen um Hekuba — um eine Fiktion. Allein geblieben, fiel Hamlet über sich her: er weint um ein Nichts, ich schweige für einen wirklichen Vater. Dann wurde der Plan geboren: ein Stück soll gespielt, das Gewissen des Königs gejagt werden.',
      boslukMetin: 'Eine Nacht, die mit einem Plan endet · die Stunden eines Mannes, der einen Plan geschmiedet hat · zwischen Schlaf und Wachen · das Entgleiten des Plans · die gegen Morgen einbrechende Frage · die Treppe von der „Mausefalle“ hinab zu „Sein oder Nichtsein“.',
      sonraBaslik: 'III.i · „Sein oder Nichtsein“',
      sonraMetin: 'Am nächsten Tag. Der Plan in Kraft, die Schauspieler bereiten sich — doch Hamlet ist allein im Korridor und befragt das Sein selbst. Danach kommt Ophelia; die Begegnung endet im Untergang.',
      sentez: 'Shakespeare stellt gleich nach dem Plan den tiefsten Monolog der Verzweiflung — den Sturz dazwischen schreibt er nicht. Warum wägt ein Mann, der einen Plan geschmiedet hat, am nächsten Morgen den Tod ab? Der Schauspieler baut in dieser Lücke jenen Abstieg.',
      altSorular: [
        { baslik: 'Die Lebensdauer des Plans', soru: 'Trug ihn der Plan bis zum Morgen — wann begann er ihm zu entgleiten?' },
        { baslik: 'Der Körper in jener Nacht', soru: 'Wo war der Körper in jener Nacht zwischen Schlaf und Wachen — im Bett, am Fenster, setzte er sich nie?' },
        { baslik: 'Der Gedanke an Ophelia', soru: 'Wusste er, dass er Ophelia begegnen würde? Als was hatte er sie zuletzt gedacht — als geliebte Frau, als verlorenes Leben?' },
      ],
    },
    {
      baslik: 'Vorbereitung auf die Spielnacht',
      konum: 'III.i → III.ii · Spielnacht',
      onceBaslik: 'III.i · Die Ophelia-Szene',
      onceMetin: 'Hamlet zerschmetterte Ophelia: „Geh in ein Kloster.“ Hinter dem Vorhang lauschten Claudius und Polonius — ob Hamlet es ahnte, wissen wir nicht. Ophelia blieb zerstört: „O welch ein edler Geist ist hier zerstört!“',
      boslukMetin: 'der Übergang vom Untergang zur Heiterkeit · das Verfassen der den Schauspielern hinzugefügten Verse · der Horatio gegebene Auftrag: beobachte den König · das Warten, während der Saal hergerichtet wird · das erneute Anlegen der Maske · die zwei Hamlets desselben Tages.',
      sonraBaslik: 'III.ii · Die Spielnacht',
      sonraMetin: 'Hamlet gibt den Schauspielern meisterhaft Anweisungen — scharf, geistreich, wie ein Gastgeber. Keine Spur von dem Mann, der eben eine Frau zerstörte. Die „Mausefalle“ ist im Begriff zu beginnen.',
      sentez: 'Am selben Tag zwei Hamlets: der Mann, der Ophelia zerstört, und der Mann, der im Saal scherzt. Shakespeare schreibt den Übergang nicht. Der Schauspieler baut in dieser Lücke, wie und um welchen Preis die Maske angelegt wird.',
      altSorular: [
        { baslik: 'Ophelias Gesicht', soru: 'Wann verschwand Ophelias Gesicht vor seinen Augen — verschwand es?' },
        { baslik: 'Beim Schreiben der Verse', soru: 'Wie war die Hand beim Schreiben der dem Stück hinzugefügten Verse — ein Ingenieur, der eine Falle baut, oder ein Sohn, der einen Brief schreibt?' },
        { baslik: 'Der Auftrag an Horatio', soru: 'Wie war seine Stimme, als er Horatio „beobachte den König“ sagte — sprach er zu einem Komplizen oder zu seinem einzigen Zeugen?' },
      ],
    },
    {
      baslik: 'Der Korridor zum Gemach der Mutter',
      konum: 'Ende von III.ii → Tür von III.iv',
      onceBaslik: 'III.ii · Das Spiel löste sich auf',
      onceMetin: 'Die Mausefalle wirkte: Claudius sprang bei der Giftszene auf, verlangte Licht, der Saal löste sich auf. Der Beweis kam — auch Horatio sah es. Dann die Nachricht: seine Mutter ruft ihn in ihr Gemach.',
      boslukMetin: 'der sich leerende Saal · die nächtlichen Korridore · die Tirade „jetzt könnt ich heißes Blut wohl trinken“ · die Tür des betenden Claudius · das nicht gezogene Schwert · die letzten Schritte zur Tür der Mutter — Shakespeare schreibt die Stationen, nicht den Korridor selbst.',
      sonraBaslik: 'III.iv · Das Gemach der Mutter',
      sonraMetin: 'Hamlet vor seiner Mutter. Das Versprechen, das er sich gab, ist in Kraft: die Worte werden Dolche sein, doch die Hand wird nicht zum Dolch greifen. Hinter dem Vorhang ist jemand — er weiß es noch nicht.',
      sentez: 'Die intensivste Nacht des Stücks verläuft in einem einzigen Korridor: Beweis → Gelegenheit zu töten → Nichttöten → die Mutter. Der Schauspieler baut in diesem Korridor die Anatomie des Aufschubs — den Mann, der Szene 8 betritt, machen diese Schritte.',
      altSorular: [
        { baslik: 'Das Gewicht der Gewissheit', soru: 'Der Beweis kam — „der Geist hatte recht“ wurde gewiss. Erleichterte diese Gewissheit Hamlet oder beschwerte sie ihn?' },
        { baslik: 'Der Körper im Korridor', soru: 'Wie war sein Gang im Korridor — schnell und entschlossen, oder an jeder Tür anhaltend?' },
        { baslik: 'Das sich selbst gegebene Versprechen', soru: 'Welches Versprechen gab er sich auf dem Weg zur Mutter — und warum fühlte er sich gezwungen, es zu geben?' },
      ],
      yuruyus: {
        girisBaslik: 'Der Korridor — vom Beweis zur Tür der Mutter',
        girisAciklama: 'Die Mausefalle wirkte; Claudius verriet sich. Den nächtlichen Korridor von jenem Saal zum Gemach der Mutter schreibt Shakespeare in zwei Stationen — die Tirade und die Gebetsszene. Die Schritte dazwischen wirst du bauen.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; es bleibt in Szene 8 bei dir.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt einen Schritt aus dem Korridor zurück; atme aus. Hinter der Tür deine Mutter — und hinter dem Vorhang jemand, den du nicht kennst. Szene 8 betrittst du durch diesen Korridor. Was trägst du?',
        esik: {
          komut: 'Dies ist ein Gang. Die intensivste Nacht des Stücks baust du Schritt für Schritt — den Korridor vom sich auflösenden Saal zur Tür der Mutter. Keine Eile.',
          hitap: 'Tritt in den Korridor, wenn du bereit bist.',
          buton: 'Ich beginne',
          adimlar: [
            'Baue zuerst den Augenblick: der Saal hat sich geleert, die Fackeln werden gelöscht. Der Beweis kam — nun weißt du es.',
            'Bemerke an jeder Station, wo in seinem Körper Hamlet in jenem Augenblick steht — bemerke es, dann gehe weiter.',
            'Was du wählst, wird deins; welcher Mann das Gemach der Mutter betritt, bestimmt dieser Korridor.',
          ],
        },
        istasyonlar: [
          {
            zamanRozet: 'Der Saal leert sich',
            acilis: 'Du sahst Claudius’ Gesicht — die Panik eines Mannes, der Licht verlangt. Auch Horatio sah es; ihr trafet euch Auge in Auge. Der Saal löst sich auf, du bleibst.',
            yazmaPlaceholder: 'Während der Saal sich leerte…',
            sorular: [
              'War in Hamlets Körper in jener ersten Minute, da der Beweis kam, ein Triumph — oder etwas Schwereres, als der Triumph erwartet hatte?',
            ],
          },
          {
            zamanRozet: 'Nächtlicher Korridor — die Tirade',
            acilis: 'Allein, Nacht. In ihm steigt eine Stimme auf: jetzt könnt ich heißes Blut wohl trinken — Dinge tun, vor denen der Tag zittern würde, sie anzusehen. Eine ihm unbekannte Stimme. Oder allzu vertraut.',
            sorular: [
              'Wessen Stimme ist das?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              secenekler: [
                { baslik: 'Eine in mir aufsteigende Wahrheit', aciklama: 'Diese Stimme ist seine — sie war immer da, wartete unter der Maske; die Nacht erlaubte es nur.', muhur: 'Vergiss das nicht — die Stimme, die ich in jener Nacht hörte, war kein Gast; sie war der Herr des Hauses, und ich öffnete zum ersten Mal die Tür.', ozet: 'Jene Stimme war kein Gast — ich öffnete zum ersten Mal die Tür.' },
                { baslik: 'Eine Selbstaufstachelung', aciklama: 'Diese Stimme ist eine Probe — die Mut-Replik, die ein handlungsunfähiger Mann sich selbst schreibt.', muhur: 'Vergiss das nicht — wer von Blut sprach, war nicht ich; es war eine Replik, die das handlungsunfähige Ich schrieb. Meine wildesten Worte kamen aus meinen verzweifeltsten Augenblicken.', ozet: 'Meine wildesten Worte kamen aus meinen verzweifeltsten Augenblicken.' },
              ],
            },
          },
          {
            zamanRozet: 'Die Tür des betenden Mannes',
            acilis: 'Eine Tür angelehnt; drinnen kniet Claudius, betet. Der Rücken gewandt, allein, waffenlos. Das Schwert an seiner Seite. Shakespeare schreibt dieses Zimmer — was er nicht schreibt, sind die Schritte, die sich von der Tür entfernen.',
            sorular: [
              '„Stirbt er im Gebet, geht er gereinigt“ — was war diese Begründung?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              secenekler: [
                { baslik: 'Die Begründung war echt', aciklama: 'Rache wird nicht halb vollzogen; sein Vater starb, ohne dass seine Sünden abgewaschen waren, der Mörder darf nicht gereinigt sterben. Das Warten ist kein Mitleid — die Mathematik der Rache.', muhur: 'Vergiss das nicht — ich senkte das Schwert nicht aus Mitleid; ich senkte es für eine tiefere Rache. Was mich an jener Tür aufhielt, war nicht mein Gewissen, sondern meine Rechnung.', ozet: 'Was mich aufhielt, war nicht das Gewissen, sondern die Rechnung.' },
                { baslik: 'Die Begründung war ein Vorwand', aciklama: 'Die Rechnung wurde nachträglich übergestülpt; die Wahrheit ist: die Hand ging nicht. Die Begründung der edle Mantel des Nichtkönnens.', muhur: 'Vergiss das nicht — an jener Tür erfand ich die Begründung; meine Hand ging nicht, und mein Verstand reichte meiner Hand eine Begründung nach. Es war der eleganteste Augenblick meines Aufschiebens.', ozet: 'Mein Verstand reichte der nicht gehenden Hand eine Begründung nach.' },
              ],
            },
          },
          {
            zamanRozet: 'Die Tür der Mutter',
            acilis: 'Das Ende des Korridors. Hinter der Tür seine Mutter — zornig, verängstigt. Bevor er eintritt, gibt er sich ein Versprechen: die Worte werden Dolche sein, die Hand wird nicht zum Dolch greifen.',
            yazmaPlaceholder: 'Vor der Tür…',
            sorular: [
              'Wovor fürchtete sich Hamlet beim Geben jenes Versprechens am meisten — vor dem, was er seiner Mutter antun könnte, oder vor jener Stimme, die er im Korridor hörte?',
            ],
          },
        ],
      },
    },
    {
      baslik: 'Der Augenblick des Erkennens auf dem Friedhof',
      konum: 'Innerhalb des Augenblicks Friedhof (12)',
      onceBaslik: 'V.i · Die Yorick-Szene',
      onceMetin: 'Das Zwiegespräch mit dem Totengräber; Yoricks Schädel in der Hand — der Narr seiner Kindheit. Er scherzt fast mit dem Tod. Dann erscheint ein Zug: ein Sarg, der König, die Königin, Laertes — und eine verkürzte Zeremonie.',
      boslukMetin: 'die Minuten, die er versteckt beobachtend verbringt · das Lesen der verkürzten Zeremonie · der Geist, der um die Identität des Sargs kreist · Laertes’ „mein Bruder“ · die Sekunden zwischen Wissen und Annehmen.',
      sonraBaslik: 'V.i · Der Ausbruch',
      sonraMetin: 'Hamlet stürzt hervor, schreit, wer er ist, springt ins Grab. Die Liebe von vierzigtausend Brüdern — Trauer und Zorn im selben Körper.',
      sentez: 'Shakespeare gibt das Erkennen in einer einzigen Replik; die Sekunden des Begreifens davor überspringt er. Der Schauspieler baut in dieser Mikro-Lücke den Augenblick des Wissens — was im Innern bereits gewusst wird, bevor die Nachricht gesprochen ist.',
      altSorular: [
        { baslik: 'Das Lesen der Zeremonie', soru: 'Las er beim ersten Sehen des Zuges die verkürzte Zeremonie — begriff er, was begraben wurde, bevor er wusste, wer begraben wurde?' },
        { baslik: 'Gertrudes Satz', soru: 'Als Gertrude Blumen streute und „du hättest meine Schwiegertochter sein sollen“ sagte — wohin in seinem Körper fiel jener Satz?' },
        { baslik: 'Vor dem Sprung ins Grab', soru: 'Die letzte Sekunde vor dem Sprung ins Grab — war es eine Entscheidung oder ein Sturz?' },
      ],
      kartCatali: {
        soru: 'Im Augenblick, da du begriffst, wessen Sarg es war — als Laertes „mein Bruder“ sagte — was geschah zuerst in dir?',
        secenekler: [
          { baslik: 'Die Zeit stand still', aciklama: 'Er konnte es nicht glauben; die Welt hing eine Sekunde, dann fiel sie auf ihn.', oznelSabit: 'Im Augenblick, da ich ihren Namen hörte, stand die Welt eine Sekunde still — in jener Sekunde stehe ich manchmal noch.' },
          { baslik: 'Als hätte ich es längst gewusst', aciklama: 'Er war nicht überrascht; ein Ort in ihm hatte den Verlust längst angenommen.', oznelSabit: 'Als ihr Name fiel, war ich nicht überrascht — ein Ort in mir hatte sie längst begraben; und das war das Entsetzlichste.' },
          { baslik: 'Zuerst sah ich Laertes', aciklama: 'Neben die Trauer fiel sogleich ein Rivale; für wen er ins Grab sprang, bleibt verworren.', oznelSabit: 'Nicht einmal die Trauer ließen sie mir rein — im Augenblick, da ich den Verlust begriff, sah ich vor mir einen Rivalen; ob ich für sie oder für Ophelia ins Grab sprang, weiß ich noch nicht.' },
        ],
      },
    },
    {
      baslik: 'Der Augenblick des Bechers',
      konum: 'Innerhalb des Augenblicks Duell (14)',
      onceBaslik: 'V.ii · Der Becher wird erhoben',
      onceMetin: 'Das Duell läuft; Hamlet führt. Gertrude erhebt den Becher auf das Glück ihres Sohnes. Claudius: „Gertrude, trink nicht.“ — „Ich will, mein Gemahl; verzeiht mir.“',
      boslukMetin: 'die Sekunde zwischen zwei Repliken · wo Hamlets Auge in jenem Augenblick war · das Seltsame um den Becher · was über das Gesicht des Onkels ging · der Unterschied zwischen dem Sichtbaren und dem Gesehenen.',
      sonraBaslik: 'V.ii · Fortsetzung',
      sonraMetin: 'Hamlet: „Ich kann jetzt nicht trinken, Mutter — gleich.“ Das Duell läuft weiter. Minuten später taumelt die Königin: Gift.',
      sentez: 'Shakespeare schreibt diese Sekunde nicht — er lässt offen, was Hamlet in jenem Augenblick sah und was nicht. Der Schauspieler baut in dieser Mikro-Lücke die Grenze der Zeugenschaft; die Antwort bestimmt das Gewicht des Abschieds im Finale.',
      altSorular: [
        { baslik: 'Wo das Auge war', soru: 'Als Claudius „trink nicht“ sagte, wo war Hamlets Auge — bei seiner Mutter, bei seinem Gegner, bei seinem eigenen Atem?' },
        { baslik: '„Ich kann jetzt nicht trinken“', soru: '„Ich kann jetzt nicht trinken, Mutter“ — war dieser Satz eine Höflichkeit, ein Aufschub, oder ein Unbehagen, das er nicht benennen konnte?' },
        { baslik: 'Als sie taumelte', soru: 'War sein erster Gedanke Gift, als seine Mutter taumelte — und hörte er in sich eine Stimme, die „ich wusste es“ sagte?' },
      ],
      kartCatali: {
        soru: 'Als deine Mutter den Becher erhob — als Claudius „trink nicht“ sagte — sahst du etwas, das eine Sekunde währte?',
        secenekler: [
          { baslik: 'Ich sah und schwieg', aciklama: 'Ein Schatten von einer Sekunde — am Becher, im Gesicht des Onkels — und das Duell zog ihn zurück.', oznelSabit: 'Eine Sekunde sah ich — einen Schatten am Becher, etwas im Gesicht meines Onkels — und kehrte zum Duell zurück. Mir blieb nicht einmal genug Leben, um jene Sekunde zurückzuwünschen.' },
          { baslik: 'Ich sah nichts', aciklama: 'In jenem Augenblick war er mitten im Duell; die Sekunde baute er nachträglich, wieder und wieder.', oznelSabit: 'Ich sah nichts — jene Sekunde baute ich nachträglich, wieder und wieder. Die Schuld setzte sich in meinem Gedächtnis fest, als hätte ich gesehen.' },
        ],
      },
    },
  ],
  sahneler: [
    {
      label: 'Ankunft am Hof in Trauerkleidung',
      desc: 'Hamlet steht in Schwarz im Saal. Alle feiern die Hochzeit von Claudius und Gertrude. Er schweigt.',
      icDurum: '„Das ging zu schnell“ — zusammengesetzt aus Trauer, einem Gefühl des Verrats und einem Zorn, den er niemandem sagen kann.',
      bosluk: 'Der Augenblick, da er den Saal verließ — was fühlte er, als er zum ersten Mal allein war?',
    },
    {
      label: '„O schmölze doch dies allzu feste Fleisch“',
      desc: 'Sein erster Monolog. Er erfährt von der Heirat der Mutter (er wusste es schon, doch nun wird es ausgesprochen). Er denkt an Selbstmord.',
      icDurum: '„Hätte der Ewige nicht sein Gebot gerichtet gegen Selbstmord...“ Dieser Satz ist gefährlich nah.',
      bosluk: 'Als der Monolog endete — was hätte er getan? Wohin wäre er gegangen, wäre Horatio nicht gekommen?',
    },
    {
      label: 'Die Begegnung mit dem Geist',
      desc: 'In der Nachtwache. Kalt. Der Geist erscheint — in der Gestalt seines Vaters. Er verlangt, dass Hamlet ihm folgt.',
      icDurum: 'Furcht, Hoffnung, der Wunsch nach Bestätigung. „Also bin ich nicht wahnsinnig — es ist wirklich etwas falsch.“',
      bosluk: 'Als er dem Geist folgte und seine Freunde zurückließ — was änderte sich in seinem Körper?',
    },
    {
      label: 'Der Geist nennt die Wahrheit des Mordes',
      desc: '„Dein Onkel tötete mich. Goss Gift in mein Ohr.“ Der Racheauftrag. „Gedenke mein.“',
      icDurum: 'Was er ahnte, wurde bestätigt. Doch nun gibt es eine Aufgabe — er ist nicht sicher, ob er sie tragen kann.',
      bosluk: 'Die Minuten, nachdem der Geist verschwand, bevor er zu seinen Freunden zurückkehrte.',
    },
    {
      label: 'Er beginnt die Wahnsinns-Performance',
      desc: 'Polonius hält ihn für wahnsinnig. Hamlet nutzt diese Rolle. Rosenkranz und Güldenstern kommen.',
      icDurum: 'In ihm ein wirklicher Bruch, doch er versucht, die Kontrolle zu behalten. Zwischen Performance und Wirklichkeit verwischt es.',
      bosluk: 'Wann traf er die Entscheidung zum „antic disposition“? Wie bewusst?',
    },
    {
      label: '„Sein oder Nichtsein“',
      desc: 'Eine einsame Szene. Er denkt zwischen Sein und Nichtsein. Todesfurcht, Handlungslähmung, „das unentdeckte Land“.',
      icDurum: 'Das ist keine Performance. Hamlets aufrichtigster Augenblick. Niemand sieht zu (glaubt er). Doch Polonius und Claudius lauschen.',
      bosluk: 'Was war sein letzter Gedanke, als er den Monolog begann? In welchem Augenblick ging er vom Gedanken „tun“ zum Gedanken „denken“ über?',
    },
    {
      label: 'Die Zurückweisung Ophelias',
      desc: '„Geh in ein Kloster.“ Ophelia gibt seine Geschenke zurück. Hamlet wird hart — er beginnt zu ahnen, dass man sie beobachtet.',
      icDurum: 'Um Ophelia zu schützen, weil er ihr nicht traut, um Claudius zu zwingen? Alle drei.',
      bosluk: 'Nachdem Ophelia weinend hinausging — was fühlte er? Reue? Kalte Planung?',
    },
    {
      label: 'Die Mausefalle — Spiel im Spiel',
      desc: 'Die Schauspielertruppe spielt die Nachstellung des Mordes. Claudius wird unruhig, steht auf.',
      icDurum: 'Der Augenblick der Bestätigung. „Der Geist hat wahr gesprochen.“ Doch ist diese Bestätigung eine Erleichterung oder der Beweis, dass er die Aufgabe nicht ablehnen kann?',
      bosluk: 'Der Augenblick, da er nach Claudius’ Abgang mit Horatio allein blieb.',
    },
    {
      label: 'Er lässt ab, Claudius im Gebet zu töten',
      desc: 'Claudius kniet, betet. Hamlet zieht das Schwert — doch senkt es nicht. „Ich sende ihn nicht in den Himmel.“',
      icDurum: 'Logik, Furcht oder Moral? „Töte ich ihn jetzt, wird seine Seele gerettet.“ Ist das eine Schlussfolgerung oder ein Vorwand?',
      bosluk: 'Nachdem er jenes Zimmer verließ — bereut er es, ist er erleichtert?',
    },
    {
      label: 'Er tötet Polonius hinter dem Vorhang',
      desc: 'Das Gemach der Mutter. Eine Bewegung hinter dem Vorhang. „Eine Ratte!“ Er stößt das Schwert hinein. Polonius fällt zu Boden.',
      icDurum: 'Reflex oder Absicht? Glaubte er, es sei Claudius? Er weiß es nicht — die Bewegung wurde zur Tat, zum ersten Mal.',
      bosluk: 'Als er den Vorhang öffnete — wie war es, Polonius zu sehen? In welcher Zeitspanne reagierte er?',
    },
    {
      label: 'Konfrontation mit der Mutter, der Geist erneut',
      desc: 'Polonius am Boden. Hamlet zeigt der Mutter das Bildnis des Vaters, vergleicht es mit Claudius. Der Geist erscheint — nur er sieht ihn.',
      icDurum: 'Er erschüttert seine Mutter, doch zugleich bricht er zusammen. Der Geist tadelt ihn — „sei sanft zu deiner Mutter“.',
      bosluk: 'Nachdem der Geist verschwand, die letzten Worte mit der Mutter. Was war in seinem Geist, während er Polonius’ Leiche schleifte?',
    },
    {
      label: 'Der Weg nach England, Fortinbras’ Heer',
      desc: 'Er geht in die Verbannung. Unterwegs sieht er Fortinbras’ Heer — Soldaten, die für ein kleines Stück Land in den Tod ziehen.',
      icDurum: '„Sie sterben für ein Nichts, ich zögere für alles.“ Eine Mischung aus Scham und Entschlossenheit.',
      bosluk: 'Das Ende jenes Monologs — in welchem Augenblick formte sich der Plan, nach Dänemark zurückzukehren?',
    },
    {
      label: 'Der Friedhof — Yorick, Ophelias Beerdigung',
      desc: 'Auf dem Friedhof. Er nimmt Yoricks Schädel — den Narren seiner Kindheit. Dann kommt eine Beerdigung — Ophelias.',
      icDurum: 'Er ist nun ein Freund des Todes. Der Schädel in der Hand, er nimmt das Nichts an. Dann Ophelias Leiche — die Grenze der Annahme.',
      bosluk: 'Als er im Grab mit Laertes kämpfte — kämpfte er wirklich um Ophelia oder gegen die Begegnung mit Laertes?',
    },
    {
      label: 'Duell, Tod, „der Rest ist Schweigen“',
      desc: 'Das Duell ist Betrug. Vergiftete Klinge, vergifteter Trank. Die Mutter trinkt. Laertes stirbt. Claudius wird getötet. Auch Hamlet stirbt.',
      icDurum: 'Endlich die Tat — doch erst, nachdem alle Bedeutungen zerfallen sind. Das Schweigen ist kein Verlust, eine Annahme.',
      bosluk: 'Als er Horatio sagt „erzähle mein Leben“ — als welcher Mann will er erinnert werden?',
    },
  ],
  bosluklar: [
    {
      baslik: 'Die Wittenberger Jahre',
      konum: 'Vor dem Stück',
      kisaAciklama: 'Hamlet, der Philosophiestudent — die Zeit, bevor er Prinz war.',
      uzunAciklama: 'Er studiert Philosophie in Wittenberg. Horatio ist dort sein Freund. Sein Vater ist König, doch er ist jetzt Student. Welche Bücher liest er? Welche Fragen lassen ihn nicht schlafen? Dieser Hamlet ist noch nicht vom Tod des Vaters gebrochen.',
      sorular: [
        'Welchen Philosophen las er in Wittenberg wohl am meisten?',
        'Wie lernten er und Horatio sich zuerst kennen?',
        'Was vermisste er, als er heimkehrte — den Hof, seine Familie?',
        'Mit welchem Gedanken legt er sich nieder, mit welchem erwacht er?',
        'Wie war das Lächeln jenes Hamlet?',
      ],
    },
    {
      baslik: 'Der Tod des Vaters und die Beerdigung',
      konum: 'Vor dem Stück (nah)',
      kisaAciklama: 'Der Ruf aus Wittenberg, die Heimkehr, die Tage der Beerdigung.',
      uzunAciklama: 'Die Nachricht kam nach Wittenberg. „Dein Vater ist tot.“ Er brach auf. Bei der Ankunft hatten die Beerdigungsvorbereitungen begonnen. Seine Mutter weint. Claudius an ihrer Seite. Es gibt keine offizielle Szene der Beerdigung — doch der Schauspieler muss es wissen.',
      sorular: [
        'Wo war er und was tat er im Augenblick, da er die Nachricht erhielt?',
        'Was ging ihm unterwegs von Wittenberg nach Hause durch den Kopf?',
        'Als er den Leichnam seines Vaters zuletzt sah — was wollte er sagen und konnte es nicht?',
        'Konnte er bei der Beerdigung seiner Mutter ins Gesicht sehen?',
        'Wie sah er Claudius damals — noch ohne Verdacht?',
      ],
    },
    {
      baslik: 'Zwei Monate',
      konum: 'Zwischen Beerdigung und Hochzeit',
      kisaAciklama: 'Die Zeit vom Tod des Vaters bis zur Hochzeit der Mutter.',
      uzunAciklama: 'Zwei Monate. Wo lebte Hamlet in dieser Zeit? Kehrte er an den Hof zurück, zog er sich in sein Zimmer zurück? Wie verliefen diese zwei Monate mit seiner Mutter? In welchem Augenblick erfuhr er von der Hochzeit?',
      sorular: [
        'An welches Gespräch mit seiner Mutter erinnert er sich aus jenen zwei Monaten?',
        'Wohin wollte sein Körper im Augenblick, da er von der Hochzeit erfuhr?',
        'Wie wurde er überredet, an der Hochzeit teilzunehmen?',
        'Warum sagte Claudius nein, als er nach Wittenberg zurückkehren wollte?',
      ],
    },
    {
      baslik: 'Die Tage nach dem Geist',
      konum: 'Zwischen I.v und II.ii',
      kisaAciklama: 'Vom Erfahren der Mordwahrheit bis zur Wahnsinns-Performance.',
      uzunAciklama: 'Der Geist sagte „gedenke mein“ und ging. Was tat Hamlet? Wer fragte was? War er, als er aus dem Bett aufstand, derselbe oder ein anderer? Die Entscheidung zum „antic disposition“ — in welchem Augenblick, warum?',
      sorular: [
        'Wann war der Augenblick, da er nach dem Geist zum ersten Mal schlafen konnte?',
        'Was genau erzählte er Horatio, was verbarg er?',
        'Woher kam der Gedanke „ich muss wahnsinnig erscheinen“ — bewusst oder Reflex?',
        'Wen sah er, als er in den Spiegel blickte?',
      ],
    },
    {
      baslik: 'Der Augenblick der Geburt des Monologs',
      konum: 'Zwischen II.ii und III.i',
      kisaAciklama: 'Der Augenblick, da der Gedanke „Sein oder Nichtsein“ begann.',
      uzunAciklama: 'Dieser Monolog wurde nicht an einem Tag geschrieben. Hamlet trägt diese Frage längst in sich. Der Augenblick, da er sie auf der Bühne sagt — nur die Oberfläche einer Explosion. Woher kam jene Explosion?',
      sorular: [
        'In welchem Augenblick ging ihm dieser Satz wohl zum ersten Mal durch den Kopf?',
        'Denkt er nachts schlaflos an den Tod?',
        'Furcht vor der Untätigkeit oder Todesfurcht — welche ist stärker?',
        'Wo ist sein Körper, als er diesen Monolog beginnt — steht er, geht er, sitzt er?',
      ],
    },
    {
      baslik: 'Von Ophelia zur Mausefalle',
      konum: 'Zwischen III.i und III.ii',
      kisaAciklama: 'Von der Zurückweisung Ophelias bis zur Aufführung des Stücks.',
      uzunAciklama: 'Er wies Ophelia hart zurück. Sie ging weinend hinaus. Wenige Stunden später wird er mit den Schauspielern vor Claudius ein Stück spielen. Wo war er zwischen diesen beiden Augenblicken?',
      sorular: [
        'Ist Ophelias Gesicht noch in seinem Geist, oder verdrängte er es?',
        'Als er den Schauspielern die Zeilen einübte — war es seine eigene Stimme oder seine Figur?',
        'Was flüsterte er Horatio, bevor das Stück begann?',
        'Er weiß, dass er Claudius’ Gesicht beobachten wird — sucht er wirklich einen Beweis oder einen Vorwand?',
      ],
    },
    {
      baslik: 'Er zog das Schwert, senkte es nicht',
      konum: 'Im Zimmer von III.iii',
      kisaAciklama: 'Der Augenblick des Zögerns, als er Claudius töten wollte.',
      uzunAciklama: 'Claudius betet. Der Rücken gewandt. Hamlet zieht das Schwert. Ein Augenblick. Zwei Augenblicke. Dann sagt er „Nein“. Jene ein, zwei Augenblicke sind sehr groß. Was geschah in dieser Zeit in seinem Geist?',
      sorular: [
        'Während das Schwert in der Luft war — zitterte sein Arm?',
        'Hört er Claudius’ Stimme, oder verstummte aller Klang?',
        'Ist die Begründung „ich sende ihn nicht in den Himmel“ echt, oder eine Geschichte, die er sich erzählt?',
        'Als er das Schwert senkte und sich abwandte — Scham, Erleichterung, Zorn?',
      ],
    },
    {
      baslik: 'Eine Bewegung hinter dem Vorhang',
      konum: 'Hinter dem Vorhang von III.iv',
      kisaAciklama: 'Der Augenblick, da er Polonius tötete — wusste er, wer es war?',
      uzunAciklama: 'Er ruft „Eine Ratte!“ und stößt das Schwert hinein. Ist das ein Reflex, eine Absicht? Glaubte er, es sei Claudius, oder war es der Augenblick, in dem er wirklich entschloss, es zu tun?',
      sorular: [
        'Was war sein erster Gedanke im Augenblick, da er das Geräusch hinter dem Vorhang hörte?',
        'Als er „eine Ratte“ sagte — glaubt er wirklich, es sei Claudius?',
        'Sah er im Augenblick des Stoßes den Blick seiner Mutter?',
        'Als er erfuhr, dass es Polonius war, was lag in der Stille der ersten Minute?',
      ],
    },
    {
      baslik: 'Die Reise und die Rückkehr',
      konum: 'Zwischen IV.iv und V.i',
      kisaAciklama: 'Der Weg nach England, die Piraten, die Rückkehr nach Dänemark.',
      uzunAciklama: 'Er bestieg das Schiff. Er vertauschte den Brief von Rosenkranz und Güldenstern — schickte sie in den Tod. Piraten überfielen das Schiff. Er kehrte zurück. Wer war er auf dieser Reise?',
      sorular: [
        'Als er den Brief vertauschte — war das ein Reflex, eine Berechnung?',
        'Dachte er an den letzten Augenblick, den Rosenkranz und Güldenstern erleben würden?',
        'Als die Piraten angriffen — floh er oder kämpfte er?',
        'Welcher Hamlet kehrte nach Dänemark zurück?',
      ],
    },
    {
      baslik: 'Vom Friedhof zum Hof',
      konum: 'Zwischen V.i und V.ii',
      kisaAciklama: 'Von Ophelias Beerdigung bis zur Duellszene.',
      uzunAciklama: 'Am Grab Ophelias kämpfte er mit Laertes. Dann kehrte er zum Hof zurück. Dort sein letztes langes Gespräch mit Horatio. Er nahm die Duelleinladung an. Warum?',
      sorular: [
        'Wohin ging er als Erstes, als er Ophelias Grab verließ?',
        'Was erzählte er Horatio in jener Nacht?',
        'Wusste er, dass die Duelleinladung eine Falle sein könnte, als er sie annahm?',
        'Schlief er in jener Nacht? Wenn ja, was sah er?',
      ],
    },
    {
      baslik: 'Der Augenblick, da die Mutter das Gift trank',
      konum: 'Im Duell von V.ii',
      kisaAciklama: 'Während des Duells, als Gertrude den Becher trank — was geschah in Hamlet?',
      uzunAciklama: 'Das Duell läuft. Die Mutter trinkt den Becher — Claudius verbietet es, doch sie trinkt. Hamlet sieht es. Was begriff er in jenem Augenblick, was wusste er, was wusste er, dass er nicht tun konnte?',
      sorular: [
        'Was war der erste Instinkt, als er sah, dass seine Mutter den Becher trank?',
        'Begriff er sofort, dass er vergiftet war, als er hörte, dass Claudius es verbot?',
        'Wandte er sich, um die Mutter in den Armen aufzufangen, als sie zusammenbrach?',
        'Als er begriff, dass er nun nichts mehr tun konnte — wie reagierte sein Körper?',
      ],
    },
    {
      baslik: '„Der Rest ist Schweigen“ — das Innere des Schweigens',
      konum: 'Nach dem Stück',
      kisaAciklama: 'Die nach seinem Tod im Geist bleibende Spur — die im Schauspieler fortdauert.',
      uzunAciklama: 'Hamlet ist tot. „Der Rest ist Schweigen.“ Doch der Schauspieler ist noch da. Er nahm Hamlet in sich auf, trug ihn. Jetzt ist es Zeit loszulassen. Was hinterließ dieser Prinz in dir?',
      sorular: [
        'Wo setzte sich Hamlets letzter Atem in deinem Körper fest?',
        'Welchen Schritt willst du tun, um ihn loszulassen?',
        'Gab es eine Seite an Hamlet, die du liebtest? Die du fürchtetest?',
        'Kehrte der Wittenberger Student zurück, oder jemand ein wenig Veränderter?',
        '„Der Rest ist Schweigen“ — was bedeutet dieses Schweigen für dich?',
      ],
    },
  ],
  antrenmanlar: [
    {
      baslik: 'Vor der Begegnung mit dem Geist',
      altbaslik: 'Die Übung der Stille',
      girisMetni: 'In dieser Übung gehen wir zu dem Augenblick vor Hamlets erster Begegnung mit dem Geist. Hamlet spricht noch nicht — er wartet nur. Auch deine Aufgabe ist das: die Stille zu tragen.',
      adimlar: [
        {
          metin: 'Setz dich an einen bequemen Ort. Atme einige Male tief. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließe die Augen. Wo ist Hamlet jetzt? Stell es dir vor — nicht als Bild, sondern von innen. Höre, rieche, fühle den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Schließe wieder die Augen. Wie spät ist es an jenem Ort? Wie ist die Luft? Wo an deinem Körper ist es kalt, wo warm?',
          soru: 'Uhrzeit, Luft und körperliche Empfindungen',
        },
        {
          metin: 'Schließe diesmal die Augen nicht. Steh auf. Wie steht Hamlet in diesem Augenblick? Beschreibe es nicht — probiere es in deinem Körper. Wo ist dein Gewicht? Was tun deine Arme? Dein Blick? Mach einige Versuche. Das Richtige wird dein Körper sagen.',
          soru: 'Wie ist Hamlets Haltung?',
        },
        {
          metin: 'Bleib in jener Haltung stehen oder setz dich. Der Verlust des Vaters, die schnelle Heirat der Mutter mit dem Onkel, der Thron gewechselt, die Ordnung gestört, auf den Mauern der Zinnen wandern Flüstern. Du bist allein, hast noch nichts gesehen. Du fühlst nur. Wo in deinem Körper fühlst du dieses Warten am stärksten?',
          soru: 'Wo ist jener Punkt?',
        },
        {
          vakSorulari: {
            gorsel: 'Wenn jener Punkt sich in eine Farbe verwandelt, welche Farbe wird er? Wie ist seine Form? Erstarrt oder bewegt?',
            isitsel: 'Wenn jener Punkt mit einem Klang spräche, wem gliche er? Hoch oder tief? Stetig oder unterbrochen?',
            kinestetik: 'Wenn du jenem Punkt ein Gewicht gibst, wie schwer wird er? In welcher Textur? Warm oder kalt?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Eben sagte dir der wachhabende Soldat Horatio: „Es gleicht dem Geist Eures Vaters, Prinz.“ Du hast noch nicht geantwortet. Du hast nur zugehört und bist hierhergekommen. Wiederhole jenen Satz nun in dir. Wie reagiert dein Körper?',
          soru: 'Spiegelung',
        },
        {
          metin: 'Atme drei Mal tief. Sag deinen Namen laut. Du bist hier. Hamlet ist in jenem Augenblick — doch du bist jetzt zu dir zurückgekehrt. Sitz einen Augenblick einfach so.',
        },
      ],
    },
    {
      baslik: 'Nach der Begegnung mit dem Geist',
      altbaslik: 'Das Sich-Setzen des Geheimnisses im Körper',
      girisMetni: 'In dieser Übung gehen wir zu dem Augenblick gleich nach Hamlets Begegnung mit dem Geist seines Vaters. Nun hat sich alles geändert. Du standest einer Wahrheit gegenüber — doch diese Wahrheit kam von einem unsichtbaren Ort. Der Augenblick, da das vom Geist Gesagte einen Sturm in deinem Geist auslöste. Du weißt nicht, was du tun sollst. Doch nichts wird mehr sein wie zuvor.',
      adimlar: [
        {
          metin: 'Setz dich an einen bequemen Ort. Atme einige Male tief. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließe die Augen. Eben verschwand der Geist. Wo bist du? Eben warst du auf der Mauer, wohin gingst du jetzt? Bist du allein?',
          soru: 'Wo bist du jetzt?',
        },
        {
          metin: 'Der Geist sagte dir viel. Der Mörder deines Vaters ist der Onkel, der jetzige Gatte deiner Mutter. Mit diesem Wissen bleibst du nun allein. Wo in deinem Körper setzte sich dieses Wissen fest?',
          soru: 'Wo in deinem Körper ist das Wissen?',
        },
        {
          metin: 'Öffne die Augen, steh auf. Hat dieses neue Wissen deine Haltung verändert? Anders als die Warte-Haltung von eben? Probiere — erinnere dich an die alte Haltung, dann bemerke, was sich in deinem jetzigen Körper änderte.',
          soru: 'Die Veränderung in der Haltung',
        },
        {
          metin: 'Setz dich. Der Geist sagte dir: „Gedenke mein.“ Wiederhole diesen Satz in dir. Höre nur, lass ihn noch nicht hinaus. Die Worte sind noch in deinem Geist, doch deine Gefühle längst in deinem Körper.',
          soru: 'Was weckt dieser Satz in dir?',
        },
        {
          vakSorulari: {
            gorsel: 'Wenn du dieses Geheimnis in ein Bild verwandelst, wem gleicht es? Ein Nebel, eine Flamme, ein blutiges Messer, ein Brief?',
            isitsel: 'Wenn dieses Geheimnis in dir mit einem Klang widerhallt, in welchem Ton? Die Stimme des Geistes, deine eigene, eine andere?',
            kinestetik: 'Wenn du dieses Geheimnis in einen Gegenstand verwandelst, welches Gewicht hätte es? Wo in deinem Körper trügst du es? In der Tasche, auf der Schulter, im Magen?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Gleich werden Horatio und Marcellus dich finden. Wirst du ihnen alles erzählen oder es als Geheimnis bewahren? Du musst dich noch nicht entscheiden — doch bemerke, zu welcher Seite dein Körper neigt.',
          soru: 'Was sagt dir dein Körper?',
        },
        {
          metin: 'Sag nun den ersten Satz, der dir durch den Kopf geht, laut oder still. Als Hamlet. Was kommt dir zuerst auf die Lippen?',
          soru: 'Dein erster Satz',
        },
        {
          metin: 'Atme drei Mal tief. Halte das Geheimnis in dir, doch kehre mit deinem eigenen Namen in deinen Körper zurück. Sag deinen Namen laut. Du bist hier. Trink Wasser. Sitz einen Augenblick einfach so.',
        },
      ],
    },
    {
      baslik: 'Der Monolog „Sein oder Nichtsein“',
      altbaslik: 'Die existenzielle Schwelle',
      girisMetni: 'In dieser Übung erleben wir Hamlets existenzielle Befragung nicht nur philosophisch, sondern sinnlich und körperlich. Wir bauen die emotionalen Übergänge zwischen Leben und Sterben in Geist und Körper. Das ist keine Entscheidung — das ist eine Entscheidungsschwelle.',
      adimlar: [
        {
          metin: 'Diese Übung führt zu einer tiefen existenziellen Befragung. Wenn du dich heute nicht dazu bereit fühlst, kannst du an einem anderen Tag zurückkehren. Wenn du bereit bist, setz dich an einen bequemen Ort und fahre fort.',
        },
        {
          metin: 'Schließe die Augen. Wo ist Hamlet jetzt? Allein oder in einer Menge? Was ist um ihn, was nicht? Die Worte sind noch nicht heraus, doch sie begannen sich in ihm zu drehen.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Der Verlust des Vaters, die neue Heirat der Mutter, das Sich-Nähern und Entfernen von Ophelia, das Geheimnis, das er auf dem Rücken trägt… inmitten all dieser Verwirrung bist du jetzt mutterseelenallein. Wo in deinem Körper setzte sich diese Einsamkeit fest?',
          soru: 'Wo ist die Einsamkeit?',
        },
        {
          metin: 'In jener Einsamkeit naht ein Satz. Noch nicht heraus, doch nah. Der Satz wird allmählich deutlicher: „Sein oder Nichtsein?“ Das ist keine Frage — das ist eine Entscheidungsschwelle. Steh an jener Schwelle, wähle noch nicht.',
          soru: 'Was fühlst du an jener Schwelle?',
        },
        {
          metin: 'Wiederhole nun den Satz in dir. Nicht schnell, sehr langsam. „Sein oder Nichtsein?“ Bei jeder Wiederholung wird dein Körper an einer anderen Stelle reagieren. Bemerke, an welcher.',
          soru: 'Was sagt welche Stelle?',
        },
        {
          vakSorulari: {
            gorsel: 'Wie ist jene Schwelle zwischen Sein und Nichtsein als Bild? Ein Abgrund, eine Tür, ein Nebel, ein Eisstück? Siehst du beide Seiten?',
            isitsel: 'Ändert sich der Tonfall, wenn du den Satz wiederholst? Mal Schrei, mal Flüstern, mal Stille? Welcher Ton kommt mit welcher Bedeutung?',
            kinestetik: 'Sind in deinem Körper die Seite „Sein“ und die Seite „Nichtsein“ an verschiedenen Orten? In der einen Gewicht, in der anderen Leichtigkeit? Oder genau umgekehrt?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Tritt nun auf die Bühne. Sag als Hamlet die erste Zeile laut oder still: „To be, or not to be — that is the question.“ (Sein oder Nichtsein — das ist hier die Frage.) Dieser Satz ist keine geschriebene Replik — kommt er aus deinem Körper? Wenn nicht, halte an und versuche es erneut.',
          soru: 'Wie kam der Satz heraus?',
        },
        {
          metin: 'An der Schwelle zu bleiben ist ermüdend. Wohin will dein Körper jetzt? Zu welcher Seite neigt er? Zum Nichtsein, zum Sein, oder dazu, die Schwelle noch länger zu tragen?',
          soru: 'Was sagt dein Körper?',
        },
        {
          metin: 'Diese Übung führte an einen intensiven existenziellen Ort. Jetzt kehren wir langsam zurück. Atme drei Mal tief. Sag deinen Namen laut. Sag das heutige Datum. Zähle drei Dinge um dich herum. Hamlets Schwelle ist dort — du bist hier. Trink Wasser. Sitz einige Minuten einfach so. Wenn der Tag vorbei ist, tut eine körperliche Aktivität — ein Spaziergang, eine Dusche, ein Gespräch — gut.',
        },
      ],
    },
    {
      baslik: 'Der Mausefallen-Plan',
      altbaslik: 'Spiel im Spiel, Detektiv im Schauspieler',
      girisMetni: 'In dieser Übung gehen wir zu dem Augenblick, in dem Hamlet einen Plan schmiedet, um Claudius auf frischer Tat zu ertappen. Dein Verdacht ist nun gewiss, doch du hast keinen Beweis. In dir sind zugleich Zorn und Strategie. Die Szene wird hergerichtet, der Plan läuft, und du bist im Zentrum dieser Ordnung.',
      adimlar: [
        {
          metin: 'Setz dich an einen bequemen Ort. Atme einige Male tief. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließe die Augen. Wo ist Hamlet jetzt? Eine Schauspielertruppe kam an den Hof — das ist eine Chance für dich. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'In dir sind zugleich zwei Dinge: der Wunsch, das vom Vater Erfahrene zu bestätigen, und die Kaltblütigkeit des Planens. Haben diese beiden verschiedene Orte in deinem Körper?',
          soru: 'Wo ist der Zorn, wo die Strategie?',
        },
        {
          metin: 'Steh auf. Hamlet ist jetzt kein gewöhnlicher Hamlet — ein Stückeschreiber, ein Regisseur, ein Detektiv. Verändert diese neue Rolle deine Haltung? Welche Muskeln spannten sich, welche entspannten?',
          soru: 'Die Veränderung in der Haltung',
        },
        {
          metin: 'Setz dich. Die Szene, die du „Mausefalle“ nennst — sie wird Claudius’ Schuld durch seine eigene Reaktion enthüllen. In deinem Geist stehst du am Rand der Szene. Die Lichter sind im Begriff anzugehen. Claudius hat seinen Platz eingenommen. Du siehst nicht zu — du beobachtest. Wie ist dieses Beobachten in deinem Körper?',
          soru: 'Wie ist der beobachtende Hamlet?',
        },
        {
          vakSorulari: {
            gorsel: 'In jener Szene blickst du in Claudius’ Gesicht. Was suchst du? Ein Zucken, ein Zittern, eine Blässe? Welches Bild hast du im Sinn?',
            isitsel: 'Schärfe alle Klänge — so sehr, dass du sogar Claudius’ Atem hören könntest. Welchem Klang lauschst du am meisten?',
            kinestetik: 'Wo in der Szene ist dein Körper? Hinten, vorn, verborgen? Bist du regungslos oder regt sich etwas in dir?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Lass diesen Satz als Hamlet durch deinen Geist gehen: „Jetzt beginnt das Spiel… doch ich kann nicht außerhalb des Spiels bleiben.“ In dir sind zugleich ein Schauspieler, ein Regisseur und ein Detektiv. Wie ist das Gleichgewicht dieser drei in dir?',
          soru: 'Wie sind die drei beisammen?',
        },
        {
          metin: 'Atme drei Mal tief. Sag deinen Namen. Hamlets kaltblütige Strategie ist dort — du bist jetzt zu dir zurückgekehrt. Trink Wasser. Sitz einige Minuten einfach so.',
        },
      ],
    },
    {
      baslik: 'Claudius nicht zu berühren',
      altbaslik: 'Die Lücke zwischen Gewissen und Rache',
      girisMetni: 'In dieser Übung gehen wir zu Hamlets Entscheidung, Claudius nicht im Gebet zu töten. Das ist keine Untätigkeit, eine innere Strategie, eine sinnliche Bremse. Du hättest töten können. Doch du tatest es nicht. Denn die Gerechtigkeit handelt nicht so schnell wie der Zorn.',
      adimlar: [
        {
          metin: 'Setz dich an einen bequemen Ort. Atme einige Male tief. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließe die Augen. Wo ist Hamlet jetzt? Eben hast du Claudius’ Schuld erfahren — die Mausefalle wirkte. Jetzt hast du ihn gefunden. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Claudius vor dir, der Rücken dir zugewandt. Er betet. Kein Schwert in der Hand, schutzlos. Du bist im Begriff, dein Schwert zu ziehen. Welche Bereitschaft ist in deinem Körper?',
          soru: 'Der Zustand deines Körpers',
        },
        {
          metin: 'Steh auf. Wie ist die körperliche Gestalt dieser Entscheidung? Heben sich deine Arme? Liegt dein Gewicht auf einem Bein? Hältst du den Atem an?',
          soru: 'Haltung',
        },
        {
          metin: 'Doch du hältst inne. Denn könnte dieser Tod seine Erlösung sein? Du wolltest strafen — doch wird diese Szene zu einer Strafe oder zu einer Belohnung? Wo ist das Gewicht dieser Frage in dir?',
          soru: 'Das Gewicht der Frage',
        },
        {
          vakSorulari: {
            gorsel: 'Claudius’ Rücken dir zugewandt. Erscheint, während du ihn ansiehst, ein anderes Bild in deinem Geist? Das Gesicht deines Vaters, die Tür des Himmels, das Höllenfeuer? Welches Bild?',
            isitsel: 'Du hörst Claudius’ Gebetsstimme. Zugleich ist eine andere Stimme in dir. Was sagt jene Stimme? „Töte jetzt“, „Jetzt nicht“, oder vermischt?',
            kinestetik: 'Dein Schwert in der Hand. Fühle sein Gewicht. Treibt dich dieses Gewicht nach vorn oder hält es dich zurück?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Sag diesen Satz als Hamlet in dir: „Nein… Jetzt nicht. Wenn er tiefer, schmutziger, sündiger ist.“ Ist das eine Logik, ein Vorwand, oder eine Gewissensentscheidung?',
          soru: 'Was ist dieser Satz?',
        },
        {
          metin: 'Zieh dich nun zurück. Stecke das Schwert in die Scheide. Welches Gefühl blieb in jenem Augenblick in deinem Körper? Reue, Erleichterung, ein tieferer Zorn, Zweifel?',
          soru: 'Was blieb zurück?',
        },
        {
          metin: 'Atme drei Mal tief. Lass das Schwert los — doch halte Hamlets Gewissen in dir. Sag deinen Namen. Du bist hier. Trink Wasser. Sitz einige Minuten einfach so.',
        },
      ],
    },
    {
      baslik: 'Die Nachricht von Fortinbras',
      altbaslik: 'Die eigene Bewegungslosigkeit sehen',
      girisMetni: 'In dieser Übung gehen wir zu dem Augenblick, in dem Hamlet dem Durchzug von Fortinbras’ Heer gegenübersteht. Der Mut eines anderen hält dir deine Untätigkeit ins Gesicht. In dir sind Vergleich, Scham, Schuld und eine neue Entscheidung. Die eigene Bewegungslosigkeit zu sehen ist manchmal die härteste Bewegung.',
      adimlar: [
        {
          metin: 'Setz dich an einen bequemen Ort. Atme einige Male tief. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließe die Augen. Wo ist Hamlet jetzt? Außerhalb von Elsinore, auf freiem Feld? Allein oder mit Soldaten? Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Fortinbras zog mit Tausenden Soldaten aus, um die Ehre seines Vaters zu verteidigen. Du wartest noch immer. Wo in deinem Körper berührt dich dieser Vergleich?',
          soru: 'Wo in deinem Körper ist der Vergleich?',
        },
        {
          metin: 'Steh auf. Eben standest du regungslos. Was will dein Körper jetzt mit dieser Nachricht tun? Sich rühren, erstarren, den Platz wechseln?',
          soru: 'Was will dein Körper?',
        },
        {
          metin: 'Setz dich. In dir kreist ein Satz: „Warum stehe ich still?“ Höre diesen Satz, ohne zu urteilen. Wie reagiert dein Körper?',
          soru: 'Reaktion auf den Satz',
        },
        {
          vakSorulari: {
            gorsel: 'Am Horizont rücken Fortinbras’ Soldaten vor. Wie siehst du sie — winzige Figuren, eine heldenhafte Menge, ein sinnloser Todeschor?',
            isitsel: 'Da sind die Schritte der Soldaten, der Hufschlag der Pferde. Doch was sagt die Stimme in dir? Laut genug, ihre Stimme zu übertönen, oder ein Summen unter ihnen?',
            kinestetik: 'Sie gehen — du stehst. Wohin in deinem Körper fällt dieser Unterschied? In die Füße, in den Magen, in die Schultern?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Lass diesen Satz als Hamlet durch dich gehen: „Tausende Soldaten… für ein Stück Land. Und ich? Für meinen Vater?“ Ist dieser Satz eine Entscheidungsschwelle oder eine Anklage?',
          soru: 'Was ist dieser Satz?',
        },
        {
          metin: 'Wenn du diese Szene verlässt, ist Hamlet nicht mehr derselbe Hamlet. Begann sich in dir eine Entscheidung zu formen? Noch nicht ganz — doch neigt sich dein Körper zu einer Seite?',
          soru: 'Formt sich eine Entscheidung?',
        },
        {
          metin: 'Atme drei Mal tief. Sag deinen Namen. Du bist hier. Hamlets Fragen sind dort — du bist jetzt zu dir zurückgekehrt. Trink Wasser. Sitz einige Minuten einfach so.',
        },
      ],
    },
    {
      baslik: 'Der Verlust Ophelias',
      altbaslik: 'Eine Liebe ohne Wiederkehr',
      girisMetni: 'In dieser Übung gehen wir zu den Augenblicken, die Hamlet angesichts von Ophelias Tod fühlt. Das ist nicht nur ein Verlust; es ist Schuld, Sehnsucht, Reue und das Gefühl der Unwiderruflichkeit. Du verlorst, was du liebtest — und vielleicht warst ein Teil davon du selbst.',
      adimlar: [
        {
          metin: 'Diese Übung führt an einen Ort der Trauer und Erschütterung. Fahre fort, wenn du bereit bist. Hab keine Eile.',
        },
        {
          metin: 'Schließe die Augen. Wo ist Hamlet jetzt? Allein oder mit anderen? Bist du nahe einem Friedhof? Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Ophelia ist nicht mehr. Du verlorst sie — und zwar dich entfernend, dich losreißend, ohne zu begreifen. Wo berührt dieser Verlust zuerst deinen Körper?',
          soru: 'Wo berührte der Verlust?',
        },
        {
          metin: 'Steh auf. Verändert diese Trauer deine Haltung? Sich beugen, erstarren, den Kopf in die Hände nehmen? Beschreibe es nicht — probiere es in deinem Körper.',
          soru: 'Die Haltung der Trauer',
        },
        {
          metin: 'Setz dich. Du blickst ihrem Bruder Laertes in die Augen. In ihm ist etwas, das dich anklagt. Du stehst dem Gewicht eines Gefühls gegenüber, das du dir selbst nicht erklären kannst. Wie ist dieses Gewicht in deinem Körper?',
          soru: 'Wie ist das Gewicht?',
        },
        {
          vakSorulari: {
            gorsel: 'Siehst du Ophelias Gesicht in deinem Geist? Welche Erinnerung kommt zuerst — euer letztes Gespräch, eure erste Begegnung, der Augenblick, da sie mit Blumen zerfiel? Verändert sich das Bild?',
            isitsel: 'Wem gleicht ihre Stimme jetzt für dich? Die, an die du dich erinnerst, die, die sie zuletzt sagte, oder etwas, das sie nie sagte?',
            kinestetik: 'Erinnerst du dich, sie berührt zu haben? Wo lebt jene Berührung jetzt in deinem Körper? Ist sie noch da, oder nicht?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Wiederhole diesen Satz als Hamlet in dir: „Ich liebte sie wie vierzigtausend Brüder.“ Doch kam diese Liebe zu spät? Wo kreist das Echo dieser Frage in deinem Körper?',
          soru: 'Wo ist das Echo?',
        },
        {
          metin: 'Ophelia ist nicht mehr. Du bist noch hier. In dir sammeln sich stille Sätze wie eine nicht explodierte Klage. Sag einen davon — als Hamlet, zu ihr.',
          soru: 'Was sagst du ihr?',
        },
        {
          metin: 'Diese Übung führte an einen Ort tiefer Trauer. Jetzt kehren wir langsam zurück. Atme drei Mal tief. Sag deinen Namen laut. Sag das heutige Datum. Zähle drei Dinge um dich herum. Hamlets Trauer ist dort — du bist hier. Trink Wasser. Sitz einige Minuten einfach so. Wenn der Tag vorbei ist, tut eine körperliche Aktivität — ein Spaziergang, eine Dusche, ein Gespräch — gut.',
        },
      ],
    },
    {
      baslik: 'Der Gang über den Friedhof',
      altbaslik: 'Der Vergänglichkeit begegnen',
      girisMetni: 'In dieser Übung gehen wir zu dem inneren Zustand, den Hamlet erlebt, während er über den Friedhof geht und einen Schädel in der Hand hält. Das ist nicht nur eine Begegnung mit dem Tod; es ist der Augenblick, die Vergänglichkeit des Lebens, den unbarmherzigen Lauf der Zeit und die Zerbrechlichkeit des Daseins zu fühlen. Wessen Ende gibt es hier nicht?',
      adimlar: [
        {
          metin: 'Diese Übung ist eine existenzielle Vertiefung. Fahre fort, wenn du bereit bist. Hab keine Eile.',
        },
        {
          metin: 'Schließe die Augen. Hamlet ist auf einem Friedhof. Finde den Ort. Welche Jahreszeit, welche Stunde, wie allein?',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Erde wird ausgehoben. Ein alter Schädel wurde herausgeholt. Du kennst diesen Schädel — Yorick. Der Narr deiner Kindheit. Als du ihn in die Hand nimmst, was tut dein Körper?',
          soru: 'Was tut dein Körper?',
        },
        {
          metin: 'Steh auf. Halte einen Schädel, als wäre er echt — in der Vorstellung oder mit einem anderen Gegenstand in der Hand. Verändert das Tragen des Schädels deine Haltung? Wie viel wiegt er? Trägt ihn der Hals oder die Arme?',
          soru: 'Haltung und Gewicht',
        },
        {
          metin: 'Setz dich. Nun blickst du auf diese Knochen, die Vergangenheit und die Verluste. Doch was du in Wahrheit ansiehst, ist deine eigene Vergänglichkeit. Wo hallt diese Vergänglichkeit in deinem Körper wider?',
          soru: 'Wo ist die Vergänglichkeit?',
        },
        {
          vakSorulari: {
            gorsel: 'Erinnerst du dich an Yoricks Gesicht aus deiner Kindheit? Kannst du jenes lebendige Gesicht und diesen knöchernen Schädel in deinem Geist nebeneinanderstellen? Siehst du die Verwandlung dazwischen?',
            isitsel: 'Yorick lachte, machte Scherze. Jetzt Stille. Ist diese Stille eine Abwesenheit oder eine Fülle? Was sagt die Stimme in dir?',
            kinestetik: 'Das Gewicht, die Textur, die Kälte des Schädels. Was fühlt dein Körper beim Halten? Ein Schauer, eine Annahme, eine Neugier?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Sag diesen Satz als Hamlet in dir: „Wessen Ende gibt es hier nicht?“ Ist das eine Frage, eine Annahme, eine Ergebung?',
          soru: 'Was ist dieser Satz?',
        },
        {
          metin: 'Leg nun den Schädel auf den Boden. Blick auf deinen Körper — was blieb in dir? Eine Leichtigkeit, eine Schwere, eine Stille?',
          soru: 'Was blieb in dir?',
        },
        {
          metin: 'Diese Übung war eine Befragung über die Vergänglichkeit. Jetzt kehren wir langsam zurück. Atme drei Mal tief. Sag deinen Namen laut. Sag das heutige Datum. Du lebst, du bist hier. Zähle drei Dinge um dich herum. Hamlets Friedhof ist dort — du bist hier. Trink Wasser. Sitz einige Minuten einfach so. Wenn der Tag vorbei ist, tut eine körperliche Aktivität gut.',
        },
      ],
    },
    {
      baslik: 'Vorbereitung vor dem Duell',
      altbaslik: 'Die stille letzte Vorbereitung',
      girisMetni: 'In dieser Übung gehen wir zu Hamlets innerem Augenblick der Vorbereitung, bevor er zum Duell antritt. Das ist keine Annahme des Todes — ein Abrechnen, ein Abschiednehmen, ein Zustand der Ergebung. Nun ist alles bereit. Was jetzt geschieht, geschieht nur in dir.',
      adimlar: [
        {
          metin: 'Setz dich an einen bequemen Ort. Atme einige Male tief. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließe die Augen. Hamlet ist auf dem Duellplatz. Wer ist um ihn — Claudius, deine Mutter, Horatio? Alle an ihrem Platz. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Die ganze Reise führte dich hierher. Der Geist, die Mausefalle, Ophelia, der Friedhof… alles floss zu diesem Augenblick. Wie ist das Gefühl in deinem Körper, hier angekommen zu sein?',
          soru: 'Wie ist es, hierherzukommen?',
        },
        {
          metin: 'Steh auf. Du wirst zum Duell antreten. Ist das eine Muskeln spannende Vorbereitung, oder eine seltsame Entspannung? Bereitet sich dein Körper auf den Kampf oder auf die Annahme vor?',
          soru: 'Worauf bereitet sich der Körper vor?',
        },
        {
          metin: 'Setz dich. In dir ist eine seltsame Stille. Vielleicht ein Friede. Im Innern des Hamlet, der zuvor stets fragte, stets sprach, stets im Konflikt war, ist jetzt nur diese Stille. Wo sitzt diese Stille?',
          soru: 'Wo ist die Stille?',
        },
        {
          vakSorulari: {
            gorsel: 'Hat diese Stille ein Bild? Eine Seeoberfläche, ein dunkles Zimmer, ein offener Horizont, ein sich schließendes Auge?',
            isitsel: 'Ringsum sind Klänge — Claudius’ Stimme, Laertes’ Atem, das Murmeln der Menge. Doch was sagt die Stimme in dir? Oder gibt es gar keine Stimme?',
            kinestetik: 'Ist dein Körper ergeben oder bereit? Welches Gewicht hat das Schwert in der Hand? Ein Zittern in den Armen, oder Festigkeit?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Lass diesen Satz als Hamlet durch deinen Geist gehen: „Was sein soll, wird sein.“ (Die Bereitschaft ist alles.) Ist das eine Ergebung, eine Weisheit, eine Erschöpfung? Welchen Ton hat er in dir?',
          soru: 'Der Ton des Satzes',
        },
        {
          metin: 'Ein letzter Augenblick, bevor das Duell beginnt. Fühle den letzten Zustand deines Körpers. Welcher letzte Satz wäre der, den du als Hamlet jetzt sagen könntest — still, zu dir selbst?',
          soru: 'Der letzte Satz',
        },
        {
          metin: 'Atme drei Mal tief. Hamlet ist an jener Schwelle — du bist jetzt zu dir zurückgekehrt. Sag deinen Namen laut. Du bist hier, du lebst. Trink Wasser. Sitz einige Minuten einfach so.',
        },
      ],
    },
  ],
};

export default hamletDE;
