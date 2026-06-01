// data/karakterler/hamlet.de.js
// HAMLET — Almanca dil katmani (karakterGetir deep-merge ile hamlet.js TR
// tabanina biner).
//
// Shakespeare alintilari: Schlegel-Tieck kanonik cevirisi (EN tarafindaki
// RSC karari + Karar 38 §1 paralelinde — her dilde kanonik kaynak).
// Yapi TR ile birebir hizali; yalniz cevrilen string alanlar doludur.
// Eksik/bos alanlar otomatik TR'ye duser (merge fallback).

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
    { madde: 'Seine letzten Worte: „Der Rest ist Schweigen."' },
    { madde: 'Fortinbras wird Thronerbe.' },
  ],

  oyunOncesi: {
    olaylar: [
      {
        baslik: 'König Hamlet (sein Vater) besiegt den norwegischen König Fortinbras im Zweikampf',
        yuk: 'Familiäre Ehre, das Erbe der Macht, ein großer Schatten, der auf den Schultern lastet.',
        yansimaSorusu:
          'Wohin fällt der Schatten dieses legendären Vaters auf den Körper deines Hamlet?',
      },
      {
        baslik: 'Der norwegische König stirbt; der junge Fortinbras plant Rache',
        yuk: 'Eine Rache, die zu Hamlets eigener Lage parallel verläuft — doch jener ist tatkräftig, Hamlet zögert.',
        yansimaSorusu:
          'Wie verortet sich Hamlet selbst, als er von diesem parallelen Rächer hört?',
      },
      {
        baslik: 'König Hamlet stirbt plötzlich und auf verdächtige Weise',
        yuk: 'Der Ausgangspunkt des ganzen Stücks. Ein unterschwelliger Verdacht, ein nicht in Worte gefasster Zweifel.',
        yansimaSorusu:
          'Der unaussprechliche Zweifel — wie klingt er im Körper Hamlets?',
      },
      {
        baslik: 'Gertrude heiratet überstürzt Claudius',
        yuk: 'Ein moralisches Trauma, Verrat auf tiefe Trauer gelegt — „noch keine zwei Monate".',
        yansimaSorusu: '„Noch keine zwei Monate" — wie verrutscht dieser Satz im Körper?',
      },
      {
        baslik:
          'Claudius besteigt den Thron; Hamlet bleibt trotz seines Erbrechts außen vor',
        yuk: 'Die Usurpation des Thronanspruchs. Persönlicher Verlust und politischer Bruch zugleich.',
        yansimaSorusu:
          'Persönlicher Verlust und politischer Bruch zugleich — was wird zuerst gespürt?',
      },
      {
        baslik: 'Hamlet wird aus Wittenberg nach Dänemark gerufen',
        yuk: 'Herausgerissen aus seinem geistigen Leben — Wittenberg, der Ort, an dem er er selbst sein konnte.',
        yansimaSorusu:
          'Vom Ort gerufen zu werden, an dem man er selbst sein konnte — wo sitzt der körperliche Widerstand?',
      },
      {
        baslik: 'Die Liebe zu Ophelia — schon vor dem Stück begonnen',
        yuk: 'Hoffnung und Verletzlichkeit. Die einzige positive Bindung inmitten der Trauer — doch auch sie ist bedroht.',
        yansimaSorusu:
          'Die einzige positive Bindung in der Trauer — doch bedroht. Wo liegt der Widerspruch?',
      },
      {
        baslik: 'Claudius knüpft diplomatische Beziehungen zu Norwegen',
        yuk: 'Nur Hamlet trauert. Der Hof setzt seine Geschäfte fort.',
        yansimaSorusu:
          'Nur Hamlet trauert — was für eine Isolation ist diese Einsamkeit?',
      },
    ],

    iliskiler: [
      {
        gecmis: 'Quelle der Liebe, das warme Zentrum der Kindheit.',
        simdi: 'Im Gefühl des Verrats — und doch noch immer Mutter. Er kann sich nicht losreißen.',
        iz: 'Liebe und Zorn, im selben Körper.',
        yansimaSorusu:
          'Wo setzt sich diese widersprüchliche Last in deinem Körper fest? In welchem Moment überwiegt die Liebe, in welchem der Zorn?',
      },
      {
        gecmis: 'Idealer König, moralischer Maßstab; für den Sohn ein Gegenstand der Bewunderung.',
        simdi: 'Tot. Die Trauer, noch nicht als Geist herbeigerufen.',
        iz: 'Eine unfüllbare Vater-Leerstelle.',
        yansimaSorusu:
          'Eine unfüllbare Leerstelle — welche Form und Größe hat diese Leere?',
      },
      {
        gecmis: 'Der Onkel am Hof, die Verwandtschaft. Nicht nah, aber vertraut.',
        simdi: 'Der Mann seiner Mutter, Inhaber des Throns — er erregt Abscheu.',
        iz: '„Mehr als befreundet, weniger als Freund."',
        yansimaSorusu:
          '„Mehr als befreundet, weniger als Freund" — wie fühlt sich dieser Abstand im Körper an?',
      },
      {
        gecmis: 'Die Liebe hat begonnen — Briefe, heimliche Worte.',
        simdi: 'Unter der Kontrolle des Polonius; sie wird von Hamlet entfernt.',
        iz: 'Die einzige positive Bindung — doch auch sie entgleitet.',
        yansimaSorusu:
          'Die einzige positive Bindung entgleitet — in welchen Momenten wird dieses Entgleiten bemerkt?',
      },
      {
        gecmis: 'Ein Freund aus Wittenberg; geistige Partnerschaft.',
        simdi: 'Zur Beerdigung gekommen — der einzige Mensch, dem Hamlet vertraut.',
        iz: 'Die einzige Zuflucht, der einzige Spiegel.',
        yansimaSorusu:
          'Die einzige Zuflucht, der einzige Spiegel — wie ist dein Körper, wenn du mit Horatio bist?',
      },
      {
        gecmis: 'Berater am Hof; er sieht Hamlet als Prinzen.',
        simdi: 'Das Hindernis vor der Liebe, der Späher, der Manipulator.',
        iz: 'Eine Autorität, die der Liebe einen Riegel vorschiebt.',
        yansimaSorusu:
          'Eine Autorität, die der Liebe einen Riegel vorschiebt — welche Verkrampfung liegt im Blick auf Polonius?',
      },
      {
        gecmis: 'Bekannt aus dem höfischen Umkreis; gleiches Alter, paralleles Leben.',
        simdi: 'Er geht nach Frankreich; er warnt seine Schwester vor Hamlet.',
        iz: 'Alte Nähe, neuer Abstand.',
        yansimaSorusu:
          'Alte Nähe, neuer Abstand — in welchem Moment wurde dieser Wandel bemerkt?',
      },
      {
        gecmis: 'Eine mittelbare Geschichte über den Zweikampf ihrer Väter.',
        simdi: 'Eine ferne Bedrohung, noch nicht auf Hamlets Radar.',
        iz: 'Der parallele Rächer — Hamlets Gegenspiegel.',
        yansimaSorusu:
          'Gegenspiegel — was sieht Hamlet von sich selbst, wenn er an Fortinbras denkt?',
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
      olay:
        'Auf den Zinnen von Elsinore sehen die wachhabenden Soldaten einen Geist. Horatio wird gerufen; der Geist gleicht dem alten König Hamlet. Hamlet ist noch nicht auf der Bühne — er trauert im Saal des Schlosses.',
      icsel:
        'Hamlet fehlt in dieser Szene — doch der Text wird in seiner Abwesenheit gewoben. Der Geist wartet auf seinen Sohn.',
      yuk: 'Ein Sohn, der noch nichts weiß, wird zu einer Wahrheit hingezogen.',
    },
    {
      baslik: 'Der erste Monolog',
      olay:
        'Claudius sitzt auf dem Thron, Gertrude an seiner Seite, Hamlet steht in Schwarz am Rand. „Mehr als befreundet, weniger als Freund" sagt er zu seinem Onkel. Allein geblieben: „O schmölze doch dies allzu feste Fleisch, zerging und löst in einen Tau sich auf!"',
      icsel:
        'Trauer + Abscheu + moralischer Zusammenbruch. Die Eile der Mutter, das Lächeln des Hofes sind unerträglich.',
      yuk: 'Die Einsamkeit auf dem Höhepunkt. Etwas fehlt, doch was — er weiß es noch nicht.',
    },
    {
      baslik: 'Die Begegnung mit dem Geist',
      olay:
        'Der Geist erscheint Hamlet. Er sagt, sein Vater sei von Claudius ermordet worden, indem ihm Gift ins Ohr gegossen wurde, und fordert Rache. Hamlet schwört.',
      icsel:
        'Schock → Glaube → Racheschwur. Drei Schichten in wenigen Minuten.',
      yuk: 'Der Hamlet, der diese Szene verlässt, ist nicht der Hamlet, der sie betrat.',
    },
    {
      baslik: 'Plan + Schauspieler',
      olay:
        'Rosenkranz und Güldenstern sind am Hof — Claudius\' Spitzel. Die Schauspieler kommen. Hamlet schmiedet den Plan der „Mausefalle": Ein Stück soll aufgeführt werden, um die Schuld des Claudius zu prüfen.',
      icsel:
        'Paranoia + Hinwendung zum Verstand. Der Körper tritt zurück, der Geist nach vorn. Die Maske des Wahnsinns wird angelegt.',
      yuk: 'Er sagt, er glaube dem Geist nicht; glaubt er wirklich nicht?',
    },
    {
      baslik: '„Sein oder Nichtsein" + Ophelia',
      olay:
        'Hamlet, allein, sinnt über das Dasein: „Sein oder Nichtsein, das ist hier die Frage." Dann kommt Ophelia; Hamlet weist sie schroff zurück und schickt sie ins Kloster.',
      icsel:
        'Existenzieller Zusammenbruch → der Entschluss, ins Leben zurückzukehren → die Zurückweisung der Liebe. Drei verschiedene Momente in einer Szene.',
      yuk: 'Auch Ophelia stand auf ihrer Seite (glaubte er). Die einzige positive Bindung wird durchtrennt.',
    },
    {
      baslik: 'Das Spiel im Spiel',
      olay:
        'Die Schauspieler führen eine Szene auf, die den Tod des alten Königs darstellt. Claudius hält es nicht aus, verlässt die Aufführung. Hamlet hat seinen Beweis.',
      icsel:
        'Geduldige Strategie → ausgebrochene Bestätigung. „Jetzt weiß ich es."',
      yuk: 'Jetzt weiß ich es. Und nun?',
    },
    {
      baslik: 'Der betende Claudius',
      olay:
        'Claudius ist niedergekniet, um zu beichten. Hamlet hinter ihm, das Schwert gezogen — doch er schlägt nicht zu. „Töte ich ihn so, kommt er in den Himmel; ist das dann meine Rache?" Er schiebt es auf.',
      icsel:
        'Gewissen + Gerechtigkeitsgefühl + Aufschub. Der Verstand liefert Gründe.',
      yuk: 'Die Gewohnheit des Aufschubs verfestigt sich. Es ist immer dasselbe, wann auch immer.',
    },
    {
      baslik: 'Die Szene mit der Mutter + Polonius',
      olay:
        'Hamlet kommt in das Zimmer seiner Mutter. Hinter dem Vorhang hört er ein Geräusch; „Was da? Eine Ratte?" und stößt sein Schwert hindurch. Versehentlich hat er Polonius getötet. Die Auseinandersetzung mit der Mutter beginnt erst danach.',
      icsel:
        'Liebe → Zorn → Reue. Drei Schichten brechen zugleich hervor.',
      yuk: 'Nun ist er ein Mörder. Kein Zurück mehr.',
    },
    {
      baslik: 'Die Sendung nach England',
      olay:
        'Er hat Polonius\' Leiche versteckt. Claudius verbannt ihn — angeblich zur Diplomatie, in Wahrheit mit einem Todesurteil. Hamlet legt die Maske der Ironie an; im Inneren ahnt er die Bedrohung.',
      icsel:
        'Ironische Wahnsinnsmaske + innerer Abzug gespannt. Wort und Absicht sind getrennt.',
      yuk: 'Unter Bedrohung — doch ich bin mir bewusst.',
    },
    {
      baslik: 'Das Heer des Fortinbras',
      olay:
        'Unterwegs begegnet er dem Heer des Fortinbras. Tausende Soldaten, die um ein winziges Stück Land kämpfen. Hamlet sieht auf seine eigene Untätigkeit und empfindet Scham: „O, von Stund an trachtet, Gedanken, nach Blut, sonst seid ihr nichts mehr wert!"',
      icsel:
        'Scham → Zorn auf sich selbst → der Entschluss zur Tat. Der Vergleich setzt den Körper in Bewegung.',
      yuk: 'Der Entschluss ist da, doch fern von Dänemark. Wo bleibt die Tat?',
    },
    {
      baslik: 'Ophelias Wahnsinn + Tod',
      olay:
        'Hamlet ist nicht auf der Bühne. Ophelia kommt mit Blumen, ihr Wahnsinn wird sichtbar. Eine Weile später fällt sie in den Bach und ertrinkt. Laertes kehrt aus Frankreich zurück und schwört Rache.',
      icsel:
        'Hamlet weiß noch nichts — doch seine Abwesenheit vergrößert die Szene. Die mittelbaren Wellen von Polonius\' Tod.',
      yuk: 'Seine Abwesenheit wächst. Bei seiner Rückkehr wartet eine andere Trauer auf ihn.',
    },
    {
      baslik: 'Yorick + Ophelias Begräbnis',
      olay:
        'Er spricht mit den Totengräbern und nimmt Yoricks Schädel in die Hand: „Ach, armer Yorick…" Dann stößt er auf Ophelias Begräbnis. Mit Laertes gerät er im Grab in einen Kampf.',
      icsel:
        'Philosophischer Frieden mit dem Tod (ruhig) → der Ausbruch der unterdrückten Liebe (Schock). Zwei Momente, innerhalb von fünf Minuten.',
      yuk: 'Er hat die Liebe nicht angenommen, aber verloren. Der Tod ist nun vertraut.',
    },
    {
      baslik: 'An Horatio · Annahme',
      olay:
        'Er erzählt Horatio vom Verrat von Rosenkranz und Güldenstern und davon, dass er ihren Tod verschuldet hat. Er nimmt die Einladung zum Duell an. „Auch im Fall eines Sperlings waltet eine besondere Vorsehung."',
      icsel:
        'Kaltblütige Annahme. Der innere Frieden beginnt — bereit, dem Tod ins Auge zu sehen.',
      yuk: 'Nun habe ich meinen Frieden mit dem Tod gemacht. Komme, was wolle.',
    },
    {
      baslik: 'Duell + Tod',
      olay:
        'Das Duell beginnt. Die Hinterlist wird erkannt: Klinge und Becher sind vergiftet. Gertrude trinkt aus dem vergifteten Becher und stirbt. Hamlet tötet Laertes und Claudius. Auch er selbst stirbt am Gift: „Der Rest ist… Schweigen."',
      icsel:
        'Ein Tod in Ehre + das Weitergeben der Geschichte. „Horatio… erzähle es ihnen."',
      yuk: 'Die Geschichte bleibt bei Horatio. Hamlet schweigt.',
    },
  ],

  tercihler: [
    {
      konu: 'Der Geist',
      baslik: 'Ist der Geist wirklich, oder eine Halluzination?',
      isaretler: [
        {
          metin:
            'Bernardo, Marcellus und Horatio sehen ihn zugleich. Horatio, der skeptische Intellektuelle: „Ich hätt es nie geglaubt, ich müßt es denn mit eignen Augen sehn."',
        },
        {
          metin:
            'Der Geist spricht mit Hamlet, erzählt den Tod des alten Königs in allen Einzelheiten — Gift ins Ohr, der Schlaf im Garten.',
        },
        {
          metin:
            'Hamlet sieht den Geist und spricht mit ihm. Gertrude hört kein einziges Wort: „Nichts! Und doch sehe ich alles, was da ist."',
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
          metin:
            'Hamlet erklärt Horatio seinen Plan: „Weil ich vielleicht in Zukunft es für gut finde, einen wunderlichen Wesenszug anzunehmen." — eine bewusste Entscheidung.',
        },
        {
          metin:
            'Er sagt seiner Mutter: „Daß ich nicht wahnsinnig bin, sondern es nur zum Schein bin."',
        },
        {
          metin:
            'Grausamkeit gegen Ophelia. „Geh in ein Kloster!" — Dies mag eine Vorstellung sein, doch die emotionale Gewalt ist echt.',
        },
        {
          metin:
            'Streit mit Laertes an Ophelias Grab: „Und kämen tausend Brüder, all ihre Liebe vereint…" — ein unkontrollierter Ausbruch.',
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
      kapanis: 'Deine Wahl bestimmt die Textur der „Wahnsinns"-Momente auf der Bühne.',
    },
    {
      konu: 'Ophelia',
      baslik: 'Ist die Liebe zu Ophelia echt?',
      isaretler: [
        {
          metin:
            'Was Hamlet an Ophelia schrieb: „Zweifle an der Sonne Klarheit, zweifle an der Sterne Licht, zweifl, ob lügen kann die Wahrheit, nur an meiner Liebe nicht."',
        },
        {
          metin:
            'Widersprüchlich: „Ich liebte Euch einst." — wenige Verse später: „Ich liebte Euch nicht." Danach: „Geh in ein Kloster!"',
        },
        {
          metin:
            'Beim Begräbnis bricht es aus ihm heraus: „Ich liebte Ophelia. Und kämen tausend Brüder, all ihre Liebe vereint, sie reichten nicht an meine."',
        },
        {
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
          metin:
            '„Welch ein Schurke und niedrer Sklav bin ich!" Er zürnt sich selbst — keine Tat, nur Worte. Ein Schauspieler kann selbst für einen erdachten Schmerz Tränen vergießen, während er für seinen wirklichen Vater nichts getan hat.',
        },
        {
          metin:
            'Das Schwert gezogen — er schlägt nicht zu. „Töte ich ihn so, kommt er in den Himmel; ist das dann meine Rache?" — ein Grund wird erzeugt.',
        },
        {
          metin:
            '„O, von Stund an trachtet, Gedanken, nach Blut, sonst seid ihr nichts mehr wert!" — ein Versprechen an sich selbst, doch wieder keine Tat.',
        },
        {
          metin:
            '„So macht Gewissen Feige aus uns allen: der angebornen Farbe der Entschließung wird des Gedankens Blässe angekränkelt."',
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
          metin:
            '„Auch im Fall eines Sperlings waltet eine besondere Vorsehung. Ist es jetzt, so ist es nicht zukünftig; ist es nicht zukünftig, so ist es jetzt. Bereitsein ist alles."',
        },
        {
          metin:
            'Horatio warnt: „Mir ist schwer ums Herz, geh nicht." Hamlet: „Komme, was wolle! Bereitsein ist alles."',
        },
        {
          metin:
            '„Der Rest ist… Schweigen." — In Ehre, oder aus Erschöpfung? Shakespeare lässt es offen.',
        },
      ],
      sentez:
        'Der Hamlet des fünften Aufzugs ist nicht derselbe wie zuvor. Etwas hat sich verändert — doch was?',
      yorumlar: [
        {
          baslik: 'Passives Aufgeben',
          aciklama:
            'Hamlet ist erschöpft, seine Fähigkeit zur Sinngebung ist versiegt. „Bereitsein ist alles" ist auch eine weiße Fahne — das letzte Wort eines vom Schicksal zermürbten Mannes. Der Tod als Erlösung.',
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
      sinif: 'Orts-Lücke',
      onceBaslik: 'Wittenberg',
      onceMetin:
        'Hamlet ist an der Universität, mitten im geistigen Leben. Sein Vater lebt. Sein Leben ist geordnet, in Dänemark gibt es eine Frau, die er liebt, sein Freund Horatio ist an seiner Seite. Eines Tages kommt die Nachricht: Sein Vater ist tot.',
      boslukMetin:
        'Aufbruch ohne Vorwarnung · eine ungewisse Reise · die Hast, zur Beerdigung zu kommen · in der Trauer an die Mutter denken · Claudius ist noch immer der Onkel · die Nachricht der Hochzeit ist nicht eingetroffen.',
      sonraBaslik: 'I.ii · Der Hof',
      sonraMetin:
        'Hamlet in Schwarz am Hof. Die Mutter hat Claudius geheiratet. Hamlet steht am Rand, trauert — der erste Monolog: „O schmölze doch dies allzu feste Fleisch, zerging und löst in einen Tau sich auf!"',
      sentez:
        'Wie viel Zeit in der Lücke verging, wissen wir nicht. Kam er zur Beerdigung oder erst zur Hochzeit — Shakespeare sagt es nicht.',
      altSorular: [
        {
          baslik: 'Als die Nachricht kam',
          soru: 'Wer überbrachte ihm die Nachricht, mit welchen Worten? Wie reagierte sein Körper?',
        },
        {
          baslik: 'Vor dem Aufbruch',
          soru: 'Was tat er in seinem Zimmer, bevor er aufbrach, was ließ er zurück, was nahm er mit?',
        },
        {
          baslik: 'Als er die Mutter sah',
          soru: 'Welches Wort kam ihm auf die Lippen, als er die Mutter zum ersten Mal sah, welches nicht?',
        },
      ],
    },
    {
      baslik: 'Die Nacht nach dem Geist',
      sinif: 'Entscheidungs-Lücke',
      onceBaslik: 'I.v · Das Ende',
      onceMetin:
        'Der Geist hat erzählt, wie sein Vater starb. Hamlet hat Rache geschworen. Er ließ Horatio und Marcellus schwören: „Weil ich vielleicht in Zukunft es für gut finde, einen wunderlichen Wesenszug anzunehmen." Es dämmert, sie steigen von den Zinnen herab.',
      boslukMetin:
        'Morgendämmerung · der erste Tag · die erste Nacht allein · der Geist im Bett · die Geburt des Gedankens der „antic disposition" · die Vorgeschichte zum Auftritt in Ophelias Zimmer (II.i berichtet Polonius davon).',
      sonraBaslik: 'II.ii · Der Hof',
      sonraMetin:
        'Einige Tage sind vergangen. Polonius hat dem König seine „Wahnsinns"-Beobachtung gemeldet. Rosenkranz und Güldenstern wurden gerufen. Die Schauspieler kommen. Hamlet schmiedet einen Plan — die „Mausefalle".',
      sentez:
        'Zwischen dem Abschied vom Geist und dem Augenblick, in dem Hamlet beginnt, die Wahnsinnsmaske anzulegen und Pläne zu schmieden, liegt mindestens eine Nacht. Vielleicht mehrere.',
      altSorular: [
        {
          baslik: 'Beim Hinabsteigen von den Zinnen',
          soru: 'Wie war sein Blick auf Horatio beim Hinabsteigen von den Zinnen? Kam ein Wort, oder war er stumm?',
        },
        {
          baslik: 'Als er in jener Nacht erwachte',
          soru: 'Schlief er in jener Nacht? Versuchte er zu schlafen? Hatte sich beim Erwachen etwas verändert?',
        },
        {
          baslik: 'Die Geburt des Maskengedankens',
          soru: 'Woher kam der Gedanke der „antic disposition"? Ein bewusstes Kalkül, oder ein plötzlicher Entschluss?',
        },
      ],
    },
    {
      baslik: 'Nach Polonius',
      sinif: 'Bruch-Lücke',
      onceBaslik: 'III.iv · Das Zimmer der Mutter',
      onceMetin:
        'Hamlet hat sich seiner Mutter gestellt. Den Polonius hinter dem Vorhang tötete er mit „Was da? Eine Ratte?". Der Geist kam erneut. Er verließ das Zimmer der Mutter und schleifte die Leiche hinter sich her.',
      boslukMetin:
        'Die Leiche · durch die Nacht zum Schloss hin · das Sich-Setzen des ersten Tötens im Geist · Reue, Kälte oder Furcht? · was tat er, ehe es Morgen wurde? · der Schlaf als erster Mörder.',
      sonraBaslik: 'IV.iii · Vor Claudius',
      sonraMetin:
        'Hamlet antwortet mit der Maske der Ironie auf Claudius\' Fragen. „Wo ist Polonius?" — Beim Mahl, doch nicht als Essender, sondern als Gegessener. Kalter Wahnsinn, der Abzug im Inneren.',
      sentez:
        'Der erste Mensch, den Hamlet getötet hat. Der erste blutige Augenblick. In dieser Lücke liegt die Entstehung jenes ersten Mörders.',
      altSorular: [
        {
          baslik: 'Beim Schleifen der Leiche',
          soru: 'Kam beim Schleifen der Leiche Blut an seine Hände? Was fühlte er? Was dachte er im ersten Augenblick?',
        },
        {
          baslik: 'Beim Verstecken der Leiche',
          soru: 'Wohin, wie versteckte er die Leiche? Wählte er einen bewussten Ort, oder einen panischen Winkel?',
        },
        {
          baslik: 'Als erster Mörder',
          soru: 'Was veränderte sich in seinem Körper nach dem ersten Töten? Der Tonfall, der Blick, der Gang?',
        },
      ],
    },
    {
      baslik: 'Die Englandreise',
      sinif: 'Wandlungs-Lücke',
      onceBaslik: 'IV.iii',
      onceMetin:
        'Claudius verbannt ihn. Er soll mit Rosenkranz und Güldenstern an Bord gehen. Hamlet verabschiedet sich mit Ironie: „Auf nach England! Lebe wohl, liebe Mutter." Als hätten äußere Mächte die Entscheidung über sein Leben getroffen.',
      boslukMetin:
        'Das Schiff sticht in See · Hamlet findet den Brief von Rosenkranz und Güldenstern · liest das Todesurteil · vertauscht den Brief · Piraten greifen an · Hamlet entkommt · kehrt nach Dänemark zurück. Er schreibt Horatio einen Brief (in IV.vi vorgelesen).',
      sonraBaslik: 'V.i · Der Friedhof',
      sonraMetin:
        'Hamlet ist verändert. „Bereitsein ist alles." Mit Yoricks Schädel führt er ein philosophisches Gespräch. Selbst der Ausbruch an Ophelias Begräbnis hat einen anderen Ton — vertrauter mit dem Tod.',
      sentez:
        'Die größte der fünf Lücken. Hier liegt Hamlets größte Wandlung — der in die Verbannung gehende Hamlet und der zurückkehrende sind nicht derselbe Mensch.',
      altSorular: [
        {
          baslik: 'Als er den Brief las',
          soru: 'Was war sein erstes Gefühl, als er den Brief las? Keine Überraschung — er hatte es geahnt. Doch welches Wort blieb ihm auf der Zunge?',
        },
        {
          baslik: 'Die Entscheidung über Rosenkranz und Güldenstern',
          soru: 'Worauf stützte er sich, als er über ihren Tod entschied? Gewissen? Rache? Oder die Notwendigkeit des Spiels?',
        },
        {
          baslik: 'Die Rückkehr',
          soru: 'Wann begriff er auf dem Rückweg, als wer er zurückkehrte? Ein Augenblick, ein Wort, ein Zeugnis?',
        },
      ],
    },
    {
      baslik: 'Vor dem Duell',
      sinif: 'Schwellen-Lücke',
      onceBaslik: 'V.ii(A)',
      onceMetin:
        'Hamlet hat Horatio die Geschichte von Rosenkranz und Güldenstern erzählt, die Einladung zum Duell angenommen. „Auch im Fall eines Sperlings waltet eine besondere Vorsehung." Der innere Frieden hat begonnen. Osric ist abgetreten, es ist Zeit der Vorbereitung.',
      boslukMetin:
        'Die Vorbereitung · vielleicht ein einsamer Augenblick · vielleicht der Weg mit Horatio · an die Mutter denken · an den Vater · an Ophelia · der Augenblick „Dies hätte mein Leben sein können" · die Wahl der Klinge · der Atem beim Betreten des Saals.',
      sonraBaslik: 'V.ii(B) · Das Duell',
      sonraMetin:
        'Der Duellsaal. Der ganze Hof. Hamlet stellt sich Laertes, bittet um Verzeihung. Das Duell beginnt. „Der Rest ist… Schweigen."',
      sentez:
        'Hamlet weiß nicht, dass er sterben wird. Doch sein Körper weiß es vielleicht. Diese letzte Lücke ist die kürzeste — doch vielleicht die dichteste.',
      altSorular: [
        {
          baslik: 'Ein einsamer Augenblick',
          soru: 'Gab es vor dem Betreten des Saals einen einsamen Augenblick? Sah er aus dem Fenster, in den Spiegel?',
        },
        {
          baslik: 'Dachte er an die Mutter',
          soru: 'Dachte er an seine Mutter? Welche Erinnerung kam — aus der Kindheit, aus den letzten Szenen?',
        },
        {
          baslik: 'Der letzte Atemzug',
          soru: 'Der letzte Atemzug vor dem Betreten des Saals — tief oder flach? Kam ihm das Gewicht der Klinge vertraut vor, oder als etwas Fremdes?',
        },
      ],
    },
  ],
};

export default hamletDE;
