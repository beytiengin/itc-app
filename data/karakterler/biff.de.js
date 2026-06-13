// data/karakterler/biff.de.js
// BIFF LOMAN — Almanca dil katmani (karakterGetir deep-merge ile biff.js TR
// tabanina biner). Yaklasim B: paralel dil dosyasi.
//
// TELIF NOTU (Willy modeli — Macbeth/Hamlet'in Schlegel-Tieck serbestligi YOK):
//   - Miller "Tod eines Handlungsreisenden" (Buchwitz/Tekindor cevirileri) TELIFLI.
//   - ITC'nin KENDI metni (ozet, dogrular madde, yuk, yansimaSorusu, gecmis/
//     simdi/iz, olay/icsel betimleri, sentez, yorumlar, altSorular) SERBESTCE
//     cevrildi.
//   - Miller'in DOGRUDAN replikleri ("dime a dozen", "Sen Adonis'sin", "Ich
//     weiss nicht was ich will" gibi) BETIMLEYICI PARAFRAZA cevrildi —
//     tescilli ceviri metni (ne TR ne DE) basilmadi, sayfa numaralari
//     tasinmadi. Boston, "kim oldugum" gibi ortak-anlam ifadelerinden
//     icerige sadakat saglandi.
//   - Yapisal/sayisal alanlar (no, kategori, perde, sahneNo, harf, sinif,
//     yasamSirasi, sonraSahneNo, konum, travmaKategorileri/Seviyesi, sayilar)
//     buraya KONMADI — merge zaten TR tabandan alir.
//
// Array index-hizali merge: TR'de madde eklenir/cikarilirsa bu dosya da ayni
// indekste guncellenmeli.

const biffDE = {
  ozet:
    'Das Erwachen aus dem Traum des Vaters. Die Wahrheitssuche eines Mannes zwischen Zusammenbruch und Befreiung.',
  etiketler: ['Tragödie', 'Trauer', 'Familie', 'Identität'],

  baseline: {
    ad: 'Der Highschool-Star',
    aciklama:
      'Siebzehn Jahre alt. Football-Held der Schule. Universitäten werben um ihn. In den Augen des Vaters ein Gott, in seinen eigenen Augen ein Gott. Noch kein Boston, noch ist nichts zerschlagen. Die Zukunft glänzt.',
  },

  dogrular: [
    { madde: 'Biff Loman ist 34 Jahre alt und ist nach Hause zurückgekehrt.' },
    { madde: 'In seinen Highschool-Jahren war er Football-Star, hatte Angebote von Universitäten.' },
    { madde: 'Er fiel in Mathematik durch und ging nicht auf die Universität.' },
    { madde: 'In Boston sah er seinen Vater mit einer anderen Frau — er war siebzehn.' },
    { madde: 'Nach jenem Tag änderte sein Leben die Richtung.' },
    { madde: 'Er arbeitete 15-20 Jahre auf Farmen in den westlichen Staaten.' },
    { madde: 'Er saß im Gefängnis.' },
    { madde: 'Er hat die Angewohnheit zu stehlen.' },
    { madde: 'Er ging zu Bill Oliver, um Arbeit zu erbitten, stahl dessen Füllfederhalter und floh.' },
    { madde: 'Im Restaurant ließ er seinen Vater in der Toilette zurück und floh.' },
    { madde: 'In der Schlussszene konfrontierte er seinen Vater — beide seien gewöhnliche Männer.' },
    { madde: 'Am Grab verstand er, dass Willy "den falschen Traum geträumt" hatte.' },
  ],

  perdeTemalari: [
    { baslik: 'Illusion und Riss',     altyazi: 'Der Traum des Vaters wird getragen, der erste Riss erscheint' },
    { baslik: 'Konfrontation und Bruch', altyazi: 'Die Wahrheit wird ausgesprochen, die Bindung zerbricht' },
    { baslik: 'Requiem und Wahrheit',  altyazi: 'Am Grab wird der falsche Traum benannt' },
  ],

  sahnelerWorkbook: [
    {
      baslik: 'Heimkehr — "was werde ich tun?"',
      olay: 'Biff ist mit seinem Bruder Happy im alten Kinderzimmer. Sie sprechen über die Zukunft; Biff sagt, er wisse nicht, was er wolle. Nach fünfzehn Jahren im Westen ist er mit Ungewissheit nach Hause gekommen.',
      icsel: 'Müde und gebrochen, doch in ihm regt sich noch ein Hoffnungsfunken: "vielleicht diesmal." Ein Mann, der vor seiner eigenen Ungewissheit flieht.',
      yuk: 'Die erste Berührung eines Mannes mit der eigenen Ungewissheit, der mit vierunddreißig immer noch nicht weiß, was aus ihm werden soll.',
    },
    {
      baslik: 'Erinnerung: Held in den Augen des Vaters',
      olay: 'In Willys Erinnerung der junge Biff: Der Vater erhöht den Sohn, verspricht ihm eine makellose Zukunft. Happy in der Nähe, Bernard am Rand. Damals glaubt Biff jedem Wort seines Vaters.',
      icsel: 'Diese Erinnerung ist für Biff zugleich süß und bitter: Damals glaubte er wirklich. Die Wärme des Erhobenseins bildet den Grund des späteren Zusammenbruchs.',
      yuk: 'Die unschuldige Wärme eines Kindes, das an das göttliche Bild im Auge seines Vaters glaubt.',
    },
    {
      baslik: 'Ebbets Field — der Football-Sieg',
      olay: 'In der Erinnerung ein Spieltag: Biff ist Champion, alle Blicke sind auf ihn gerichtet. Willy steht stolz neben ihm. Der Augenblick, in dem Biff das Gefühl, "etwas Besonderes" zu sein, am intensivsten erlebt.',
      icsel: 'Der hellste Augenblick. Der Gipfel von Biffs Identität — und ein Gipfel, zu dem er später nie zurückkehren wird können.',
      yuk: 'Ein Heranwachsender erlebt auf seinem Höhepunkt das Gefühl, "besonders zu sein", auf das er seine ganze Zukunft bauen wird.',
    },
    {
      baslik: 'Erinnerung: durchgefallen in Mathematik',
      olay: 'Bernard warnt: Biff wird in Mathematik durchfallen. Willy nimmt es nicht ernst, glaubt, das Charisma seines Sohnes werde jede Tür öffnen. Das Warnsignal wird weder von Vater noch von Sohn gehört.',
      icsel: 'Eine Warnung hängt in der Luft — doch weder Biff noch der Vater wollen sie hören. Der erste Riss der Illusion wird übersehen.',
      yuk: 'Eine Familie sieht gemeinsam das erste Zeichen des kommenden Unglücks an sich vorbeiziehen.',
    },
    {
      baslik: 'Bernard verachten + Warnung',
      olay: 'Biff verachtet den fleißigen, aber unbeliebten Bernard. Bernard warnt eindringlich: Biff muss zum Vater nach Boston, wegen Mathematik. Nach dieser Szene wird jene Reise beginnen.',
      icsel: 'Was Bernard sagt, ist wahr, doch Biff ist noch nicht in Boston gewesen. Unter dem Hochmut eine Verletzlichkeit, der er sich nicht bewusst ist.',
      yuk: 'Ein junger Mann verachtet die Stimme, die ihn warnt, und geht in Wahrheit auf sein eigenes Fallen zu.',
    },
    {
      baslik: 'Bostoner Hotel — sieht den Vater mit der Frau',
      olay: 'Biff sucht seinen Vater im Hotel in Boston auf, um Hilfe in Mathematik zu erbitten. Als die Tür sich öffnet, kommt eine andere Frau aus dem Zimmer. Der Verrat des Vaters und die Lüge aller seiner überhöhenden Worte werden auf einen Schlag offenbar.',
      icsel: 'Das Heldenbild stürzt in Sekunden. Die Lügen des Vaters, sein Lob, das Versprechen einer "makellosen Zukunft" — alles bricht zugleich zusammen. Biffs tiefste Wunde.',
      yuk: 'Ein Sohn wird Zeuge, wie das göttliche Bild seines Vaters in einem einzigen Augenblick zur Lüge wird — ein unwiderruflicher Bruch.',
    },
    {
      baslik: 'Lindas Warnung',
      olay: 'Linda erzählt ihren Söhnen, dass ihr Vater ein Mensch ist, dass er zusammenbricht und dass sie auf ihn achten müssen. Biff hört seiner Mutter zu.',
      icsel: 'Er sieht das Gesicht seiner Mutter zum ersten Mal so klar; spürt die Last, die Linda stumm trägt. Mit dem Geheimnis, das er seit Boston in sich trägt, kollidiert dieser Aufruf.',
      yuk: 'Ein Sohn, der das Geheimnis seines Vaters in sich trägt, sieht sich dem Aufruf seiner Mutter "achtet auf ihn" gegenüber.',
    },
    {
      baslik: 'Arbeit bei Bill Oliver — Diebstahl des Füllfederhalters',
      olay: 'Biff besucht seinen ehemaligen Arbeitgeber Bill Oliver, um Arbeit zu erbitten; doch Oliver erinnert sich nicht einmal an ihn. Nach langem Warten nimmt Biff einen Füllfederhalter vom Tisch und flieht.',
      icsel: 'Eine schneidende Klarheit für einen Augenblick: Er sieht, dass sein ganzes Leben auf einer Illusion gebaut ist — er hat sich für jemanden gehalten, der er nie war. Der Diebstahl ist der Reflex dieses Zusammenbruchs.',
      yuk: 'Ein Mann begreift in einem einzigen Warteraum, dass seine ganze Geschichte über das, wer er ist, eine Lüge war.',
    },
    {
      baslik: 'Erinnerung: Gefängnis (kurzer Hinweis)',
      olay: 'Im Gespräch wird offenbar, dass Biff wegen Diebstahls im Gefängnis gesessen hat. Willy will es nicht hören.',
      icsel: 'Das, was Biff am tiefsten verbirgt. Die Wahrheit, die begraben werden muss, damit das überhöhte Bild im Auge des Vaters weiterleben kann.',
      yuk: 'Ein Sohn muss seine eigene Wahrheit verbergen, um den Traum seines Vaters zu schützen.',
    },
    {
      baslik: 'Im Restaurant — die Absicht, die Wahrheit zu sagen',
      olay: 'Biff wartet im Restaurant auf seinen Vater. Diesmal ist er entschlossen, die Wahrheit zu sagen: Oliver hat ihn nicht erkannt, nichts ist geschehen. Er bereitet sich darauf vor, den Traum seines Vaters zu zerbrechen.',
      icsel: 'Er hat seine Entscheidung getroffen, aber stellt sie in jeder Minute erneut in Frage. Die Spannung zwischen dem Aussprechen der Wahrheit und dem Niederreißen des Vaters.',
      yuk: 'Ein Sohn bereitet sich darauf vor, die Wahrheit auszusprechen, obwohl er weiß, dass er damit den Mann, den er liebt, niederreißen wird.',
    },
    {
      baslik: 'Restaurant — den Vater in der Toilette zurücklassen',
      olay: 'Willy will die Wahrheit nicht hören; sein Geist gleitet nach Boston, in die alte Erinnerung. Happy beschäftigt sich mit einer Frau. Biff hält es nicht aus und verlässt das Restaurant, lässt seinen Vater in der Toilette zurück.',
      icsel: 'Aufgeben: "Ich kann es ihm nicht sagen, er hört mir nicht zu." Beim Hinaustreten auf die Straße ein Fluchtgefühl — und die Schuld, ihn dort zurückzulassen.',
      yuk: 'Ein Sohn nimmt die Unmöglichkeit der Verständigung mit seinem Vater an und verlässt ihn — die Kollision von Liebe und Schuld.',
    },
    {
      baslik: 'Konfrontation mit Linda',
      olay: 'Biff kehrt nach Hause zurück; Linda ist wütend, beschuldigt ihn, weil er seinen Vater im Restaurant zurückgelassen hat. Biff sagt, er liebe seine Mutter, könne aber seinen Vater nicht retten.',
      icsel: 'Der Zorn der Mutter ist berechtigt, doch Biff ist es auch. Zwei Wahrheiten prallen aufeinander; beide sind wahr, beide schmerzen.',
      yuk: 'Ein Sohn kann an dem Ort, an dem Liebe und Wahrheit zusammenstoßen, stehen bleiben und "ich kann ihn nicht retten" sagen.',
    },
    {
      baslik: 'Letzte Konfrontation mit dem Vater',
      olay: 'Biff umarmt seinen Vater und weint; er sagt ihm, dass sie beide gewöhnliche Menschen seien und sich nun von dieser Last befreien müssten. Er spricht aus, was er sein Leben lang nicht sagen konnte.',
      icsel: 'Zerstörung und Freiheit zugleich. Der Augenblick, in dem er seinen Vater zum ersten Mal so nahe sieht, nicht als Gott, sondern als Mensch. Willy hält diese Tränen für Liebe.',
      yuk: 'Ein Sohn spricht weinend die Wahrheit aus, die er sein Leben lang nicht aussprechen konnte — zugleich Bruch und Befreiung.',
    },
    {
      baslik: 'Requiem — "er träumte den falschen Traum"',
      olay: 'Nach der Beerdigung am Grab sagt Biff, sein Vater sei sein ganzes Leben lang einem falschen Traum gefolgt. Happy widerspricht; Biff sagt, er wisse nun, wer er sei.',
      icsel: 'Eine mit Schmerz kommende Befreiung. Das Leben des Vaters war auf einer Illusion gebaut; Biff kann das jetzt sehen und seine eigene Wahrheit annehmen.',
      yuk: 'Ein Sohn findet zu seiner eigenen Wahrheit, indem er den Irrtum des Vaters benennt — Trauer und Freiheit zugleich.',
    },
  ],

  oyunOncesi: {
    olaylar: [
      {
        baslik: 'Kindheit — die Jahre, in denen der Vater ein Gott war',
        sahneRef: 'Sehr klein, Biff; der Vater erhöht ihn beim Aufbruch zur Reise und verspricht eine makellose Zukunft.',
        yuk: 'Die Wärme und das Gift des Erhobenseins. Biffs ganze Identität wird auf dem göttlichen Bild im Auge des Vaters errichtet.',
        yansimaSorusu: 'Wo in Biffs Körper hat sich der überhöhende Blick des Vaters festgesetzt — und wie fühlt er sich ohne diesen Blick?',
      },
      {
        baslik: 'Highschool — Star sein, Universitäten, die Drohung der Mathematik',
        sahneRef: 'Fünfzehn bis siebzehn Jahre alt, Biff: Football-Held, Universitätsangebote liegen vor, doch er bleibt in Mathematik zurück.',
        yuk: 'Die Jahre, in denen Gipfel und Blindheit beieinander liegen. Der Hochmut des Stars bereitet den Grund des späteren Falls.',
        yansimaSorusu: 'Wie lebten in Biff der Druck, ein Star zu sein, und die Furcht, in Mathematik durchzufallen, zugleich?',
      },
      {
        baslik: 'Boston — der Sturz des Heldenbildes',
        sahneRef: 'Mit siebzehn sieht Biff seinen Vater in Boston mit einer anderen Frau; in jenem Augenblick verändert sich alles.',
        yuk: 'Der Zusammenbruch eines ganzen Wertesystems in einem einzigen Augenblick. Dies ist die Schwelle, die das Vor-Stück-Leben vom Stück-Biff trennt.',
        yansimaSorusu: 'Was in Biffs Körper ist seit jener sich öffnenden Tür in Boston bis heute nicht verschlossen geblieben?',
      },
      {
        baslik: 'Verlorene Jahre — 15-20 Jahre im Westen, Farmen, Gefängnis',
        sahneRef: 'Nach Boston arbeitet Biff jahrelang auf Farmen in den westlichen Staaten, sitzt im Gefängnis, gehört nirgends hin.',
        yuk: 'Eine lebenslange Flucht. Die Jahre, in denen der in Boston gebrochene Mann umherzieht, ohne herauszufinden, wer er ist.',
        yansimaSorusu: 'In welchen Augenblicken war Biff in jenen Jahren glücklich — und warum konnte dieses Glück nie von Dauer sein?',
      },
    ],
    iliskiler: [
      {
        gecmis: 'Der Sohn, der ihn für einen Gott hielt; das Kind, das in der Wärme der Erhöhung aufwuchs.',
        simdi: 'Der Vater, dessen Traum er nicht tragen kann, dessen Wahrheit er nicht aussprechen kann, von dem er sich schließlich mit "wir sind beide gewöhnlich" löst.',
        iz: 'Liebe + die Wunde des Verrats + die Schuld, ihn nicht retten zu können — ein unauflösbarer Knoten.',
        yansimaSorusu: 'Sucht Biff, wenn er seinen Vater ansieht, noch jenen Gott, oder sieht er nur noch einen müden Mann?',
      },
      {
        gecmis: 'Der zärtliche Hintergrund der Kindheit; die Liebe, die im Schatten des Vaters bleibt.',
        simdi: 'Die Mutter, die ihn bittet, seinen Vater zu retten, die ihm zürnt, weil er ihn zurückließ. Der Ort, an dem zwei berechtigte Wahrheiten zusammenstoßen.',
        iz: 'Liebe + Schuld + Nichtverstandenwerden.',
        yansimaSorusu: 'Wenn Linda sagt "du hast deinen Vater zurückgelassen", erscheint dann in Biff Abwehr oder eine angenommene Schuld?',
      },
      {
        gecmis: 'Der jüngere Bruder, der immer im Schatten blieb, der seinem älteren Bruder folgte.',
        simdi: 'Der Bruder, der sich entscheidet, die Lüge des Vaters fortzuführen; die Stimme, die Biffs Erwachen widerspricht. Zwei Brüder, zwei Wege.',
        iz: 'Bindung + auseinandergehende Wege + die Unmöglichkeit, einander zu retten.',
        yansimaSorusu: 'Sieht Biff, wenn er Happy ansieht, den Weg, den er nicht gewählt hat — "ich hätte auch so werden können"?',
      },
      {
        gecmis: 'Das fleißige Kind, das er verachtete; das Gegenteil der Illusion "sei beliebt, der Rest kommt von selbst".',
        simdi: 'Erfolgreich geworden, der lebende Beweis des Weges, den Biff nicht gewählt hat. Die stille Bestätigung gegen den Hochmut.',
        iz: 'Alte Verachtung + später hinzugekommene Achtung + der Schmerz des Vergleichs.',
        yansimaSorusu: 'Bringt Bernards Erfolg Biff eine Reue oder eine Annahme "ich bin jemand anderer"?',
      },
      {
        gecmis: 'Der ehemalige Arbeitgeber, in dessen Kopf Biff eine Freundschaft und Bedeutung konstruiert hatte.',
        simdi: 'Der Mann, der ihn nicht erkennt; der Spiegel, der zeigt, dass Biffs ganze Lebensgeschichte eine Illusion ist.',
        iz: 'Konstruierte Bedeutung + das kalte Gesicht der Wahrheit + die Scham des Stiftdiebstahls.',
        yansimaSorusu: 'In dem Augenblick, in dem Oliver ihn nicht erkennt, was bricht in Biff zusammen — eine einsame Hoffnung oder eine ganze Identität?',
      },
      {
        gecmis: 'Im Vor-Stück nicht vorhanden; nur im Bostoner Hotel, im Augenblick des Bruchs, erscheinende Figur.',
        simdi: 'Das konkrete Gesicht des Verrats des Vaters; das in Biffs Gedächtnis mit jener sich öffnenden Tür eingefrorene Bild.',
        iz: 'Das visuelle Siegel des Verrats + der Augenblick des Zusammenbruchs aller Dinge bezüglich des Vaters.',
        yansimaSorusu: 'Mit welchen anderen Augenblicken kehrt das Bild jener Frau heute in Biffs Gedächtnis zurück?',
      },
    ],
  },

  tercihler: [
    {
      baslik: 'Ist Biffs Zusammenbruch wegen Boston, oder war das Fundament schon brüchig?',
      isaretler: [
        { metin: 'Nachdem Biff seinen Vater mit der Frau gesehen hat, ändert sein Leben die Richtung; er beendet die Mathematik nicht, geht nicht auf die Universität.' },
        { metin: 'Jahre später wird offenbar, dass Biffs ganze Identität auf einer Illusion gebaut war — diese Illusion existierte auch vor Boston.' },
      ],
      sentez: 'Ob Biffs Zusammenbruch nur an einem einzigen Augenblick (Boston) hängt oder die unausweichliche Folge der vom Vater genährten Illusion ist, lässt der Text offen. Der Schauspieler entscheidet über das Gewicht Bostons.',
      yorumlar: [
        { baslik: 'Boston hat alles zerschlagen', aciklama: 'Bis zu jenem Augenblick war Biff stabil und hoffnungsvoll; Boston ist der einzige Bruchpunkt. Ohne den Verrat des Vaters wäre es ein anderes Leben gewesen.' },
        { baslik: 'Das Fundament war schon brüchig', aciklama: 'Die überhöhende Lüge des Vaters machte Biff von Anfang an brüchig; Boston machte nur den schon vorhandenen Riss sichtbar.' },
        { baslik: 'Boston wurde zum Vorwand', aciklama: 'Biff klammerte sich an Boston, um seine Misserfolge zu erklären; der wahre Grund ist komplexer, aber er entschied sich, alles auf einen einzigen Augenblick zu schieben.' },
      ],
    },
    {
      baslik: 'Liebt Biff seinen Vater, hasst er ihn, oder beides zugleich?',
      isaretler: [
        { metin: 'Biff lässt seinen Vater im Restaurant zurück und flieht — eine Art Zurückweisung.' },
        { metin: 'Derselbe Biff umarmt seinen Vater Minuten später und weint — eine tiefe Liebe.' },
      ],
      sentez: 'Biffs Gefühl gegenüber seinem Vater schwankt durch den Text hindurch: Zurückweisung und Umarmung geschehen in derselben Nacht. Der Schauspieler entscheidet über die dominante Farbe dieses Gefühls.',
      yorumlar: [
        { baslik: 'Tiefe Liebe', aciklama: 'Zorn und Flucht sind die Hülle des Schmerzes, ihn nicht retten zu können; im Kern liebt Biff seinen Vater zutiefst. Die letzte Konfrontation ist das wahre Gesicht.' },
        { baslik: 'Unterdrückter Zorn', aciklama: 'Seit Boston ist Biff seinem Vater zornig; die Liebesbekundungen sind das Ergebnis, diesen Zorn nicht tragen zu können.' },
        { baslik: 'Unauflösbare Doppeldeutigkeit', aciklama: 'Liebe und Zorn sind zugleich, untrennbar; der Schauspieler "gewinnt" keine von beiden, hält die Spannung lebendig.' },
      ],
    },
    {
      baslik: 'Warum stiehlt Biff — bewusste Rebellion, unkontrollierter Drang oder Hilferuf?',
      isaretler: [
        { metin: 'Biff nimmt den Füllfederhalter vom Tisch Olivers, der ihn nicht erkennt, und flieht.' },
        { metin: 'In der Vergangenheit hat er wegen Diebstahls im Gefängnis gesessen; es ist eine Gewohnheit.' },
      ],
      sentez: 'Die Quelle von Biffs wiederkehrendem Stehlen wird im Text nicht erklärt. Der Schauspieler entscheidet über die Natur dieses Drangs — der Sinn färbt unterschiedliche Augenblicke des Stücks unterschiedlich.',
      yorumlar: [
        { baslik: 'Unbewusster Drang', aciklama: 'Biff kann sich nicht aufhalten; Stehlen ist ein Reflex, den er nicht kontrollieren kann. Oft bemerkt er erst hinterher, was er getan hat.' },
        { baslik: 'Stille Rebellion', aciklama: 'Stehlen ist eine unbewusste Auflehnung gegen die Welt des "sei wertvoll" des Vaters; eine Ablehnung der Regeln des Systems.' },
        { baslik: 'Hilferuf', aciklama: 'Jeder Diebstahl trägt das Risiko des Entdecktwerdens; Biff will, ohne es zu wissen, gesehen, aufgehalten, gerettet werden.' },
      ],
    },
    {
      baslik: 'Ist Biffs Erkenntnis "ich bin gewöhnlich" eine Niederlage oder eine wahre Befreiung?',
      isaretler: [
        { metin: 'Biff begreift, dass sein ganzes Leben eine Illusion war — eine bittere Erkenntnis.' },
        { metin: 'Biff sagt seinem Vater, sie beide seien gewöhnlich; er stellt dies als eine Erlösung dar.' },
      ],
      sentez: 'Biffs Annahme der eigenen Gewöhnlichkeit kann sowohl als Zusammenbruch als auch als Erlösung gelesen werden. Der Schauspieler wählt den Ton dieser Erkenntnis.',
      yorumlar: [
        { baslik: 'Bittere Niederlage', aciklama: '"Ich bin gewöhnlich" zu sagen ist der Tod aller Träume; Biff nimmt die Niederlage an, dies ist eine Ergebung.' },
        { baslik: 'Wahre Befreiung', aciklama: 'Aus der vom Vater auferlegten Illusion entkommen; zum ersten Mal mit der eigenen Wahrheit, erleichtert leben.' },
        { baslik: 'Schmerzhafte Freiheit', aciklama: 'Die Erlösung ist wahr, aber ihr Preis ist schwer; Befreiung und Verlust werden zugleich erlebt.' },
      ],
    },
    {
      baslik: 'Blickt Biff am Grab in die Zukunft, bleibt er in der Vergangenheit, oder überlebt er nur?',
      isaretler: [
        { metin: 'Biff erlebt mit seinem Vater den Bruch; etwas endet.' },
        { metin: 'Am Grab sagt er, sein Vater habe einen falschen Traum geträumt, und gibt an, jetzt zu wissen, wer er sei.' },
      ],
      sentez: 'Was Biff nach der Beerdigung trägt — Hoffnung, Trauer oder nur das Überleben — ist im Text nicht eindeutig. Der Schauspieler wählt diesen letzten Zustand.',
      yorumlar: [
        { baslik: 'Sich der Zukunft öffnend', aciklama: 'Biff weiß jetzt, wer er ist; frei, wird er in den Westen zurückkehren und sein eigenes Leben bauen. Ein Anfang.' },
        { baslik: 'In der Vergangenheit verharrend', aciklama: 'Der Schatten des Vaters lässt Biff nicht los; "zu wissen, wer man ist" ist ein Trost, aber keine Bewegung. Die Trauer dauert an.' },
        { baslik: 'Nur überlebend', aciklama: 'Weder eine große Zukunft noch ein vollständiges Ende; Biff bleibt nur aufrecht, der Rest ist ungewiss.' },
      ],
    },
  ],

  boslukSet: [
    {
      baslik: 'Er klopfte an die Tür — eine Stimme im Inneren',
      onceBaslik: 'Reise nach Boston',
      onceMetin: 'Biff geht, um seinen Vater im Hotel in Boston aufzusuchen und Hilfe in Mathematik zu erbitten.',
      boslukMetin: 'Ankunft an der Tür · das Gesicht vor dem Klopfen · die Stimme einer Frau aus dem Inneren · was wurde verstanden · die Entscheidung, erneut zu klopfen · die letzte Sekunde, bevor die Tür sich öffnet',
      sonraBaslik: 'Er sieht den Vater mit der Frau',
      sonraMetin: 'Die Tür öffnet sich, die Frau erscheint; für Biff stürzt das göttliche Bild des Vaters in einem Augenblick.',
      sentez: 'Miller zeigt die Minuten zwischen dem Klopfen und dem Öffnen der Tür nicht. Der Schauspieler baut in dieser Lücke jene wenigen Minuten des Heldensterbens — was verstand Biff, als er die Stimme von innen zum ersten Mal hörte, was wählte er, nicht zu verstehen?',
      altSorular: [
        { soru: 'Welches Gesicht hatte er angenommen, bevor er an die Tür klopfte — mit welcher Erwartung war er dort?' },
        { soru: 'Was verstand er, als er die Stimme der Frau aus dem Inneren zum ersten Mal hörte, was versuchte er nicht zu verstehen?' },
        { soru: 'Wie entschied er sich, erneut zu klopfen — wollte er es wissen, oder leugnete er noch?' },
      ],
    },
    {
      baslik: 'Die Rückkehr mit dem Zug',
      onceBaslik: 'Boston-Offenbarung',
      onceMetin: 'Biff hat seinen Vater mit der Frau gesehen; er verlässt das Hotelzimmer.',
      boslukMetin: 'Hinaustreten auf die Straße des Hotels · ziellose Wanderung · Weinen (oder Nichtweinen) an einer Ecke · Einsteigen in den Zug · die Landschaft, die am Fenster vorbeizieht · ein anderer Sohn, der nach Hause zurückkehrt',
      sonraBaslik: 'Heimkehr und Folgezeit',
      sonraMetin: 'Biff wird die Mathematik nicht beenden, nicht auf die Universität gehen; sein Leben ändert die Richtung.',
      sentez: 'Miller zeigt die Reise von Boston nach Hause nicht. Der Schauspieler baut in dieser Lücke die Verwandlung zwischen dem Sohn, der die Hoteltür verließ, und dem, der zu Hause ankam — was starb in jenem Zug, was kam an seine Stelle?',
      altSorular: [
        { soru: 'Was war sein erster Gedanke, als er auf die Straße des Hotels hinaustrat — wem, worauf war er zornig?' },
        { soru: 'Setzte er sich an einer Ecke und weinte, oder konnte er nicht weinen?' },
        { soru: 'Im Zug, dachte er daran, was er seinem Vater bei seiner Heimkehr sagen würde — oder entschied er, gar nicht zu sprechen?' },
      ],
    },
    {
      baslik: '15-20 Jahre im Westen',
      onceBaslik: 'Bruch nach Boston',
      onceMetin: 'Biff bricht mit dem Haus und der Welt des Vaters; er geht in die westlichen Staaten.',
      boslukMetin: 'Jahre der Arbeit auf Farmen · Ein- und Austritt ins Gefängnis · Nirgends hingehören · kurze Augenblicke des Glücks · jedes Mal eine neue Flucht · daran denken, nach Hause zurückzukehren und davon abzulassen',
      sonraBaslik: 'Heimkehr (Szene 1)',
      sonraMetin: 'Mit vierunddreißig kehrt Biff erneut nach Hause zurück — diesmal mit der Frage "was werde ich tun?".',
      sentez: 'Miller behandelt diese 15-20 Jahre nur in Anspielungen. Der Schauspieler baut in dieser längsten Lücke, wie der in Boston gebrochene Jüngling sich in welchen Mann verwandelte — wer wurde er in diesen Jahren, in welchen Augenblicken war er sich selbst am nächsten?',
      altSorular: [
        { soru: 'In welchen Augenblicken war er in jenen Jahren glücklich — und warum konnte dieses Glück nie von Dauer sein?' },
        { soru: 'Was erinnerte sein Körper im Freien, neben einem Pferd oder bei der Feldarbeit?' },
        { soru: 'Wie oft dachte er in jenen Jahren daran, nach Hause zurückzukehren, was hielt ihn jedes Mal davon ab?' },
      ],
    },
    {
      baslik: 'Warum kam ich diesmal?',
      onceBaslik: 'Das Ende der verlorenen Jahre',
      onceMetin: 'Biff entscheidet sich nach jahrelanger Flucht zurückzukehren.',
      boslukMetin: 'Die Entscheidung der Heimkehr · die Frage "warum jetzt" · getragene Ungewissheit · die Hoffnung "vielleicht ist es diesmal anders" · die letzten Gedanken vor der Ankunft an der Tür',
      sonraBaslik: 'Heimkehr — "was werde ich tun?"',
      sonraMetin: 'In Szene 1 spricht Biff im Kinderzimmer mit seinem Bruder, ohne zu wissen, was er will.',
      sentez: 'Miller sagt nicht offen, warum Biff diesmal zurückkehrt. Der Schauspieler baut in dieser Lücke den Trieb hinter der Heimkehrentscheidung — eine Hoffnung, eine Erschöpfung, oder einfach kein anderer Ort mehr, wohin man gehen könnte?',
      altSorular: [
        { soru: 'In welchem Augenblick traf er die Entscheidung zur Heimkehr — geschah etwas, oder häufte es sich langsam an?' },
        { soru: 'Wie stellte er sich unterwegs die Begegnung mit dem Vater vor — was erhoffte er, was fürchtete er?' },
        { soru: 'Welche Spannung trug er in seinem Körper, als er sich der Haustür näherte?' },
      ],
    },
    {
      baslik: 'Der Augenblick, in dem er den Stift stahl — warum?',
      onceBaslik: 'Warten auf Oliver',
      onceMetin: 'Biff kommt, um Arbeit zu erbitten; Oliver erinnert sich nicht einmal an ihn. Biff wartet lange.',
      boslukMetin: 'Warten am Tisch · Olivers Nichterkennen · ein Augenblick der Leere · den Stift nehmen · dann rennen · was unter dieser Handlung liegt',
      sonraBaslik: 'Stehlen des Stifts — Flucht',
      sonraMetin: 'Biff steckt den Stift in seine Tasche und flieht; danach begreift er, dass sein ganzes Leben eine Illusion ist.',
      sentez: 'Miller erklärt nicht, warum Biff den Stift genommen hat. Der Schauspieler baut in dieser Lücke das, was unter der Handlung liegt — eine vorsätzliche Rebellion, ein Reflex, den er nicht kontrollieren kann, oder ein Schrei nach Gesehenwerden?',
      altSorular: [
        { soru: 'Konnte er Oliver beim Eintreten einen Gruß bieten, oder erstarrte er?' },
        { soru: 'In dem Augenblick, in dem Oliver klar machte, dass er ihn nicht erinnerte, was tat sein Körper — welcher Muskel verspannte sich?' },
        { soru: 'Als er den Stift sah — warum gerade ihn, warum nicht etwas anderes — was bedeutete dieser Gegenstand?' },
      ],
    },
    {
      baslik: 'Der Augenblick, den Vater zurückzulassen und zu fliehen',
      onceBaslik: 'Zusammenbruch im Restaurant',
      onceMetin: 'Willy hört die Wahrheit nicht, sein Geist gleitet nach Boston; Happy beschäftigt sich mit einer Frau. Biff hält es nicht aus.',
      boslukMetin: 'Die Entscheidung, aus der Toilette herauszukommen · nicht zum Tisch zurückkehren · ein Wort an Happy (oder Schweigen) · Gehen zur Tür · ein Augenblick des Zögerns an der Schwelle · der Schritt nach draußen',
      sonraBaslik: 'Konfrontation mit Linda',
      sonraMetin: 'Biff kehrt nach Hause zurück; Linda beschuldigt ihn, seinen Vater zurückgelassen zu haben.',
      sentez: 'Miller zeigt den inneren Augenblick von Biffs Hinausgehen aus dem Restaurant nicht. Der Schauspieler baut in dieser Lücke jenen Schritt — ist es ein bewusstes Verlassen oder die Flucht des Nicht-Aushaltens? Zögerte er an der Schwelle?',
      altSorular: [
        { soru: 'In welchem Augenblick traf er die Entscheidung, aus der Toilette zu kommen und nicht zum Tisch zurückzukehren?' },
        { soru: 'Sagte er Happy etwas, oder ging er still — warum?' },
        { soru: 'Als er die Tür des Restaurants erreichte, zögerte er eine Sekunde, dachte er daran, zurückzukehren?' },
      ],
    },
    {
      baslik: 'Die Stunden, in denen Linda "geh" sagte',
      onceBaslik: 'Lindas Zorn',
      onceMetin: 'Linda beschuldigt Biff, weil er seinen Vater zurückgelassen hat; zwei berechtigte Wahrheiten prallen aufeinander.',
      boslukMetin: 'Nach dem Zorn der Mutter · Stunden des Umhergehens im Haus · das Suchen des Wortes, das zu sagen ist · die Entscheidung, zum Vater zu gehen · die Ansammlung vor der letzten Konfrontation',
      sonraBaslik: 'Letzte Konfrontation mit dem Vater',
      sonraMetin: 'Biff umarmt seinen Vater, weint und spricht aus, was er sein Leben lang nicht sagen konnte.',
      sentez: 'Miller zeigt die Stunden zwischen Lindas Beschuldigung und der letzten Konfrontation nicht. Der Schauspieler baut in dieser Lücke, was Biff in jener Nacht beim Umhergehen im Haus ansammelte — die Tränen der letzten Konfrontation reifen in diesen Stunden.',
      altSorular: [
        { soru: 'Was dachte er beim Umhergehen im Haus nach dem Gespräch mit Linda, welche Sätze formulierte und verwarf er?' },
        { soru: 'In welchem Augenblick traf er die Entscheidung, ein letztes Mal mit dem Vater zu sprechen?' },
        { soru: 'Was sammelte sich in jenen Stunden in seinem Körper an — was sich später als Tränen Bahn brach?' },
      ],
    },
  ],
  // IMZA: DE-BIFF-DRAMA-01 — sahneler + bosluklar + antrenmanlar DE çeviri turu
  // (taslak; native QA + travma-duyarlı alanlar [antrenmanlar lv2-3, bosluk b-5/b-6/b-son] Filiz onay batch'i)
  sahneler: [
    {
      label: 'Heimkehr — „was soll ich tun?"',
      desc: 'Mit Happy im Kinderzimmer. Sie reden. Biff: Er wisse nicht, was er wolle.',
      icDurum: 'Müde. Zerschlagen. Doch noch ist eine Hoffnung da. „Vielleicht diesmal…"',
      bosluk: 'Die erste Nacht nach der Heimkehr — konnte er im Bett schlafen?',
    },
    {
      label: 'Erinnerung: Held in den Augen des Vaters',
      desc: 'Willys Erinnerung. Biff jung, Happy in der Nähe, Bernard am Rand. Willy nennt ihn seinen Schönsten.',
      icDurum: 'Diese Erinnerung ist für Biff süß und bitter. Damals glaubte er wirklich daran.',
      bosluk: 'Wann brach die Brücke zwischen jenem Kind und dem heutigen Biff?',
    },
    {
      label: 'Ebbets Field — der Football-Triumph',
      desc: 'Erinnerung. Das Stadion. Biff der Champion. Alle Augen auf ihm. Willy an seiner Seite — stolz.',
      icDurum: 'Der hellste Augenblick. Hier spürte Biff am stärksten das Gefühl „ich bin besonders".',
      bosluk: 'Was sagte Willy zu ihm, als sie nach jenem Spiel nach Hause gingen?',
    },
    {
      label: 'Erinnerung: Durchfallen in Mathematik',
      desc: 'Bernard warnt, Biff werde in Mathematik durchfallen. Willy nimmt es nicht ernst — sein Biff schaffe das.',
      icDurum: 'Ein Warnzeichen — doch weder Biff noch der Vater wollen es hören.',
      bosluk: 'Trat er zu jener Prüfung an? Lernte er? Warum scheiterte er?',
    },
    {
      label: 'Bernard herabsetzen + Warnung',
      desc: 'Biff nennt Bernard blutarm. Bernard erwähnt, der Vater sei nach Boston gefahren — und Biff fahre dorthin wegen der Mathematik.',
      icDurum: 'Was Bernard sagt, ist wahr — doch noch ist Biff nicht nach Boston gefahren. Nach dieser Szene wird er fahren.',
      bosluk: 'Als er Bernard „Boston" sagen hörte — warum wollte er hinfahren?',
    },
    {
      label: 'Hotel in Boston — er sieht den Vater mit der Frau',
      desc: 'Die Hoteltür. Biff kam, um den Vater zu sehen — wegen Hilfe in Mathematik. Er lässt öffnen. Eine Frau tritt heraus.',
      icDurum: 'Das Heldenbild zerbricht. In einer Sekunde verändert sich alles. Die Lügen des Vaters, der „Schönste" — alles.',
      bosluk: 'Als er aus der Hoteltür auf die Straße trat — wohin ging er? Zum Zug, nach draußen?',
    },
    {
      label: 'Lindas Warnung',
      desc: 'Linda zu ihren Söhnen: Ihr Vater sei ein Mensch. Er breche zusammen. Sie sollten auf ihn achten. Biff hört zu.',
      icDurum: 'Zum ersten Mal sieht er das Gesicht der Mutter so deutlich. Er spürt die Last, die Linda trägt.',
      bosluk: 'Worüber sprach er mit Happy, nachdem Linda gegangen war?',
    },
    {
      label: 'Arbeit bei Bill Oliver — der Federdiebstahl',
      desc: 'In Bill Olivers Büro. Bill erinnert sich nicht einmal an ihn. Biff wartet am Tisch. Dann nimmt er die Feder vom Tisch — und flieht.',
      icDurum: 'Ein Augenblick der Klarheit: Bill Oliver kannte ihn nie. Er war nie sein Freund. Eine lebenslange Lüge.',
      bosluk: 'Der Augenblick, als er die Feder einsteckte — warum? Absichtlich oder ein Reflex?',
    },
    {
      label: 'Erinnerung: Gefängnis (kurze Erwähnung)',
      desc: 'Es fällt im Gespräch: Biff war im Gefängnis. Wegen Diebstahls. Willy will es nicht hören.',
      icDurum: 'Das ist es, was Biff am meisten verbirgt. Damit der „Schönste" in den Augen des Vaters weiterlebt.',
      bosluk: 'Wohin ging er, als er aus dem Gefängnis kam? Kam ihm der Gedanke an Heimkehr?',
    },
    {
      label: 'Im Restaurant — die Absicht, die Wahrheit zu sagen',
      desc: 'Frank\'s Chop House. Biff wartet auf den Vater. „Diesmal werde ich es ihm sagen. Bill Oliver kannte mich nicht. Ich bin nichts.“',
      icDurum: 'Er hat sich entschieden. Diesmal spricht er die Wahrheit. Bereit, den Traum des Vaters zu zerstören.',
      bosluk: 'Wie oft stellte er am Tisch seinen Entschluss in Frage, bis der Vater kam?',
    },
    {
      label: 'Restaurant — er lässt den Vater auf der Toilette zurück',
      desc: 'Willy will nicht hören. Biff kann es nicht erklären. Willys Geist gleitet ab — nach Boston, in die alte Erinnerung. Happy macht sich an eine Frau heran. Biff hält es nicht aus — er lässt Willy auf der Toilette zurück und geht.',
      icDurum: 'Aufgeben. „Ich kann es ihm nicht sagen. Er hört mir nicht zu." Auf dem Weg nach draußen das Gefühl der Flucht.',
      bosluk: 'Ging er nach dem Verlassen des Restaurants nach Hause oder anderswohin?',
    },
    {
      label: 'Konfrontation mit Linda',
      desc: 'Er kam nach Hause. Linda ist zornig: Er habe den Vater dort zurückgelassen, liebe er ihn nicht? Biff: Er liebe ihn, Mutter, doch er könne ihn nicht retten.',
      icDurum: 'Der Zorn der Mutter ist berechtigt. Doch auch Biff hat recht. Zwei Wahrheiten prallen aufeinander.',
      bosluk: 'Die Stunden, in denen er nach diesem Gespräch mit Linda im Haus umherging — woran dachte er?',
    },
    {
      label: 'Letzte Konfrontation mit dem Vater — „ich bin nichts"',
      desc: 'Biff umarmt den Vater. Er weint: Lass mich los, Vater. Ich bin einer von vielen, einer wie tausend andere. Du auch. Mehr nicht.',
      icDurum: 'Was er ein Leben lang nicht sagen konnte, bricht hervor. Zugleich Zusammenbruch und Befreiung. Der Augenblick, in dem er den Vater zum ersten Mal so nah sah.',
      bosluk: 'Was fühlte er, nachdem er geweint hatte, bevor er vom Bett aufstand?',
    },
    {
      label: 'Requiem — „er träumte den falschen Traum"',
      desc: 'Der Friedhof. Die Beerdigung ist vorbei. Biff: Sein Vater habe den falschen Traum geträumt. Sein Leben lang. Happy widerspricht. Biff: Er wisse jetzt, wer er sei.',
      icDurum: 'Eine Befreiung — doch mit Schmerz. Das Leben des Vaters war auf einem Irrtum errichtet. Biff kann das jetzt sehen.',
      bosluk: 'Nachdem er das Grab verlassen hat — wohin wird er gehen?',
    },
  ],
  bosluklar: [
    {
      konum: 'Vor-Szenario (Kindheit)',
      baslik: 'Die Zeit, als der Vater ein Gott war',
      kisaAciklama: 'Biff in sehr jungen Jahren — Willy war noch ein Gott.',
      uzunAciklama:
        'Biff mit fünf, sechs, sieben Jahren. Willy hebt ihn beim Aufbruch auf seinen Rücken und nennt ihn seinen Liebling. In diesen Jahren sieht Biff seinen Vater als Gott. Dieser Blick veränderte sich nicht bis Boston.',
      sorular: [
        'Wie empfing Biff seinen Vater, wenn dieser von der Reise zurückkehrte?',
        'Stell dir vor, wie er die Tasche des Vaters öffnete und darin etwas suchte.',
        'Was war sein liebstes Spiel mit dem Vater?',
        'In welchem Alter hörte er zum ersten Mal, dass er der Liebling sei?',
      ],
      sure: '12 Min.',
    },
    {
      konum: 'Vor-Szenario (Highschool)',
      baslik: 'Ein Star sein',
      kisaAciklama: 'Die Schuljahre — Football-Held, von Universitäten umworben.',
      uzunAciklama:
        'Biff mit fünfzehn bis siebzehn. Er beendet die Schule. Es gibt Angebote von Universitäten. Der Vater ist stolz. Doch er bleibt in Mathematik zurück. Diese Lücke — der Druck, ein Star zu sein, die Überheblichkeit, die Blindheit.',
      sorular: [
        'Was fühlte er an Spieltagen, bevor er aufs Feld ging?',
        'Als er Bernard sagte „lern doch" — war das wirklich Überheblichkeit oder etwas anderes?',
        'Wie reagierte die Familie, als die Universitätsbriefe kamen?',
        'Gab es einen Augenblick der Angst, in Mathematik durchzufallen, oder war es nie ein Problem?',
      ],
      sure: '12 Min.',
    },
    {
      konum: 'Vor Boston',
      baslik: 'Die Überraschungsreise',
      kisaAciklama: 'Ich werde meinen Vater besuchen — wegen Hilfe in Mathematik.',
      uzunAciklama:
        'Bernard sagte ihm, er solle nach Boston fahren und den Vater um Hilfe bitten. Biff fasste diesen Entschluss. Er stieg in den Zug. Er fuhr nach Boston. Auf dieser Reise — unschuldig, hoffnungsvoll, noch nicht zerschlagen.',
      sorular: [
        'Was fühlte er im Augenblick, als er in den Zug stieg?',
        'Hatte er geplant, seinen Vater zu überraschen?',
        'Welches Gespräch hatte er auf dem Weg im Kopf?',
        'Zögerte er einen Augenblick, als er sich der Hoteltür näherte?',
      ],
      sure: '12 Min.',
    },
    {
      konum: 'Hoteltür in Boston',
      baslik: 'Er klopfte an die Tür — drinnen eine Stimme',
      kisaAciklama: 'Die wenigen Minuten, während er anklopfte.',
      uzunAciklama:
        'Er gelangte zur Tür des Hotelzimmers. Er klopfte. Stimmen von drinnen — eine Frauenstimme, eine Männerstimme (sein Vater). Was hatte er verstanden? Er klopfte erneut. Die Tür öffnete sich. Diese wenigen Minuten — die Minuten des Todes des Helden.',
      sorular: [
        'Welches Gesicht hatte er aufgesetzt, bevor er anklopfte?',
        'Als er zum ersten Mal die Frauenstimme von drinnen hörte — was verstand er?',
        'Wie entschied er sich, erneut zu klopfen?',
        'Wie war es, das Gesicht des Vaters zu sehen, als die Tür sich öffnete?',
        'Was geschah in seinem Körper im Augenblick, als er die Frau sah?',
      ],
      sure: '20 Min.',
    },
    {
      konum: 'Nach Boston',
      baslik: 'Die Rückfahrt im Zug',
      kisaAciklama: 'Die Heimfahrt aus Boston — was konnte ich nicht sehen, was sah ich?',
      uzunAciklama:
        'Aus dem Hotelflur trat er auf die Straße. Er ging die Straße entlang. Er stieg in den Zug. Er kehrte nach Hause zurück. Auf dieser Reise war ein Sohn nicht mehr derselbe Sohn.',
      sorular: [
        'Was war sein erster Gedanke, als er auf die Straße vor dem Hotel trat?',
        'Setzte er sich nicht in eine Ecke und weinte?',
        'Was sah er im Zug aus dem Fenster?',
        'Konnte er, als er nach Hause kam, der Mutter ins Gesicht sehen?',
        'Wie viele Stunden lag er in jener Nacht wach im Bett?',
      ],
      sure: '15 Min.',
    },
    {
      konum: '17 → 34 Jahre',
      baslik: '15-20 Jahre in den Weststaaten',
      kisaAciklama: 'Eine lebenslange Flucht — wer wurde dieser Mensch?',
      uzunAciklama:
        'Mit siebzehn verließ er Boston. Mit vierunddreißig kehrt er nach Hause zurück. Die fünfzehn bis zwanzig Jahre dazwischen — Farmen, Gefängnis, Frauen, Diebstähle. Diese Lücke ist die größte. Wer wurde Biff in dieser Zeit?',
      sorular: [
        'Wohin ging er zuerst? Warum dorthin?',
        'Welche Erinnerungen birgt die Farm, auf der er am längsten arbeitete?',
        'Was fühlte er am Tag, als er zum ersten Mal ins Gefängnis kam?',
        'Gab es einen Augenblick, in dem er Liebe zu einer Frau empfand?',
        'Wann dachte er zum ersten Mal an die Heimkehr?',
        'In welchem Augenblick dieser Jahre erinnerte er sich am stärksten an Willy?',
      ],
      sure: '20 Min.',
    },
    {
      konum: 'Vor der Heimkehr',
      baslik: 'Warum bin ich diesmal gekommen?',
      kisaAciklama: 'Der Entschluss zur Heimkehr — warum jetzt?',
      uzunAciklama:
        'Biff ist gekommen. Doch warum? Was sucht er? Eine alte Hoffnung oder eine neue Wahrheit? Als er in den Zug stieg, hatte er sich entschieden — doch wie?',
      sorular: [
        'Worin unterscheidet sich diese Reise von seinen früheren Heimkehren?',
        'Wie viel Geld hatte er im Portemonnaie, als er in den Zug stieg?',
        'Wen vermisste er am meisten, als er durch die Tür trat — Linda, Willy oder Happy?',
        'Erinnerte er sich an den Geruch des Hauses, als er eintrat?',
      ],
      sure: '12 Min.',
    },
    {
      konum: 'Büro von Bill Oliver',
      baslik: 'Der Augenblick, in dem er die Feder stahl — warum?',
      kisaAciklama: 'Bill Oliver erinnerte sich nicht an ihn. Biff sah die Feder auf dem Tisch.',
      uzunAciklama:
        'Bill Oliver verließ sein Büro. Biff wartete am Tisch. Ein Augenblick. Dann steckte er die Feder in die Tasche. Dann lief er. Was lag dieser Handlung zugrunde?',
      sorular: [
        'Als Bill Oliver hereinkam, konnte er ihm einen Gruß sagen?',
        'Was tat sein Körper im Augenblick, als Bill sagte, er erinnere sich nicht an ihn?',
        'Als er die Feder sah — warum gerade sie, warum nichts anderes?',
        'War er sich bewusst, als er sie einsteckte?',
        'Als er auf die Straße trat — wie spürte er, dass die Feder noch in seiner Tasche war?',
      ],
      sure: '15 Min.',
    },
    {
      konum: 'Vor dem Restaurant',
      baslik: 'Der Augenblick, den Vater zurückzulassen und zu fliehen',
      kisaAciklama: 'Die Minuten, in denen er aus der Toilette kam und das Restaurant verließ.',
      uzunAciklama:
        'Willy auf der Toilette. Biff am Tisch. Happy macht sich an eine Frau heran. Biff hält es nicht aus — er steht auf, geht hinaus. Der Augenblick, als er durch die Tür nach draußen trat — ist das eine Entscheidung oder eine Flucht?',
      sorular: [
        'In welchem Augenblick traf er die Entscheidung, aus der Toilette zu kommen?',
        'Sagte er Happy etwas, oder ging er still hinaus?',
        'Zögerte er eine Sekunde, als er die Tür des Restaurants erreichte?',
        'In welche Richtung wandte er sich zuerst, als er auf die Straße trat?',
      ],
      sure: '12 Min.',
    },
    {
      konum: 'Nacht der Heimkehr',
      baslik: 'Die Stunden, in denen Linda „geh" sagte',
      kisaAciklama: 'Die Stunden von Lindas Zorn bis zur letzten Konfrontation.',
      uzunAciklama:
        'Linda schalt ihn, er habe den Vater zurückgelassen. Biff ging nicht hinaus — doch er ging auch nicht zu Bett. Jene Stunden — um Mitternacht herum — die Zeit, die zur letzten Konfrontation führt. Was tat er?',
      sorular: [
        'Die erste Bewegung, nachdem Linda gegangen war — sich setzen oder aufstehen?',
        'Glaubte er in jenen Augenblicken, dass er seinen Vater liebte?',
        'Probte er, was er sagen würde?',
        'Hörte er, dass sein Vater in den Garten hinausging?',
      ],
      sure: '15 Min.',
    },
    {
      konum: 'Nach der letzten Konfrontation',
      baslik: 'Nach dem Weinen — Freiheit oder Niederlage?',
      kisaAciklama: 'Während er nach den Worten „ich bin nichts" zu Bett ging.',
      uzunAciklama:
        'Er umarmte seinen Vater, weinte, sagte, er sei einer von vielen und der Vater auch. Dann ging er zu Bett. Auf jenem kurzen Weg — von Zimmer zu Zimmer — was fühlte er? Fiel eine Last ab, oder entstand eine noch schwerere?',
      sorular: [
        'Was wurde leicht, was schwer in seinem Körper, während er zu Bett ging?',
        'Was sah er, als er zum letzten Mal in das Gesicht des Vaters blickte?',
        'Schlief er in jener Nacht? Wenn ja, was sah er im Traum?',
        'Wie war es, am Morgen aufzuwachen und vom Tod des Vaters zu erfahren?',
      ],
      sure: '15 Min.',
    },
    {
      konum: 'Nach-Szenario',
      baslik: 'Nach der Beerdigung — wohin?',
      kisaAciklama: 'Nach dem Friedhof — zurück in den Westen oder in ein anderes Leben?',
      uzunAciklama:
        'Die Beerdigung ist vorbei. Linda blieb am Grab. Happy sagte, er werde den Traum seines Vaters weiterführen. Biff brach zu einem anderen Weg auf. Wohin? Diese Lücke gehört nicht Biff — sie gehört dem Schauspieler. Der Augenblick, Biff loszulassen.',
      sorular: [
        'Biffs letzter Satz — er wisse jetzt, wer er sei. Konntest du diesen Satz aussprechen?',
        'Welches Gefühl war das schwerste, während du Biff in dich aufnahmst?',
        'Was tat es dir an, die Boston-Szene zu tragen?',
        'Dachtest du an deinen eigenen Vater, während du die letzte Szene mit dem Vater spieltest?',
        'Jetzt, da du Biff loslässt — was ist es, das er in dir zurücklässt?',
      ],
      sure: '15 Min.',
    },
  ],
  antrenmanlar: [
    {
      baslik: 'Heimkehr — Ungewissheit mit 34',
      altbaslik: 'Ich konnte mein Leben nicht zusammenfügen',
      girisMetni: 'In dieser Übung gehen wir in den Augenblick, in dem Biff aus Texas nach Hause zurückkehrt. Du bist vierunddreißig. Du hast auf Farmen im Norden und Westen gearbeitet, warst sogar wegen eines Diebstahls im Gefängnis, nichts hat „gehalten". Jetzt bist du zu deiner Mutter gekommen. Du siehst deinen Vater — alt, geschrumpft, widersprüchlich. Und du weißt nicht, wer du bist.',
      adimlar: [
        {
          metin: 'Setz dich an einen bequemen Ort. Atme ein paar Mal tief durch. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließ die Augen. Wo ist Biff jetzt? Brooklyn, im Schlafzimmer des Elternhauses. Happy im Bett daneben — dein Bruder. Der Ort ist vertraut und doch fremd. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Du hast in Texas für einen Lohn von achtundzwanzig Dollar gearbeitet. Jetzt bist du in diesem Zimmer — altes Spielzeug, altes Poster, altes Bett. Was tut dieses Zimmer mit dir? Wie reagiert dein Körper — eine Enge, ein altes Gefühl, der Drang zu fliehen?',
          soru: 'Was tut das Zimmer?',
        },
        {
          metin: 'Steh auf. Biff mit vierunddreißig — wie ist er als Körper? Als junger Mann war er ein Football-Held. Was ist jetzt von jenem Körper geblieben? Ist deine Haltung aufrecht, eingesunken, dazwischen? Beschreibe nicht — probiere.',
          soru: 'Was sagt die Haltung?',
        },
        {
          metin: 'Setz dich. Happy fragt dich: „Was willst du, Biff? Was willst du von deinem Leben?" Du sagst zu ihm: „I don\'t know what I want." (Ich weiß nicht, was ich will.) Woher in deinem Körper kam dieser Satz? Müdigkeit, Ehrlichkeit, Angst?',
          soru: 'Woher kam der Satz?',
        },
        {
          vakSorulari: {
            gorsel:    'Was siehst du jetzt, wenn du die Augen schließt? Die offenen Weiten in Texas, die Wände dieses kleinen Zimmers, das Gesicht des Vaters, dein eigenes Jugendbild?',
            isitsel:   'Welche Geräusche hörst du in diesem Haus? Das Murmeln des Vaters von unten, die stillen Schritte der Mutter, Verkehr von der Straße? Was sagt die Stimme, die du in dir hörst?',
            kinestetik:'Dieses Bett ist sehr klein für einen Mann von vierunddreißig. Wie steht dein Körper in dieser alten Größe? Eingezwängt, zurückgezogen, verkindlicht?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Lass diesen Satz als Biff durch dich hindurchgehen: „I\'ve always made a point of not wasting my life, and every time I come back here I know that all I\'ve done is to waste my life." (Ich habe immer darauf geachtet, mein Leben nicht zu vergeuden, und jedes Mal, wenn ich hierher zurückkomme, weiß ich, dass ich nichts getan habe, als mein Leben zu vergeuden.) Ist das ein Eingeständnis, ein Selbstverrat, ein Erwachen?',
          soru: 'Was liegt unter dem Satz?',
        },
        {
          metin: 'Es wird Morgen werden. Du wirst dich deinem Vater stellen müssen. Was bereitet sich in deinem Körper vor? Kampf, Flucht, das Aussprechen der Wahrheit?',
          soru: 'Was bereitet der Körper vor?',
        },
        {
          metin: 'Atme drei Mal tief durch. Sag deinen Namen. Du bist hier. Biffs Kinderzimmer ist dort — du bist jetzt zu dir zurückgekehrt. Trink Wasser. Bleib ein paar Minuten einfach so sitzen.',
        },
      ],
    },
    {
      baslik: 'Während er auf Bill Oliver wartet',
      altbaslik: 'Aus der Vergangenheit stehlen — die Feder nehmen',
      girisMetni: 'In dieser Übung gehen wir in den Augenblick, in dem Biff in Bill Olivers Büro wartet und dann seine Feder stiehlt. Mit der Hoffnung deines Vaters bist du hierhergekommen: Bill Oliver würde Geld geben, du würdest ein Geschäft aufbauen. Doch jetzt wartest du seit sechs Stunden. Bill Oliver hat sich nicht einmal an dich erinnert. Du hattest nicht einmal für ihn gearbeitet — du warst nur ein Verkäufer. Und im Augenblick dieser Erkenntnis tatest du noch etwas: Du nahmst seine Feder und gingst hinaus.',
      adimlar: [
        {
          metin: 'Setz dich an einen bequemen Ort. Atme ein paar Mal tief durch. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließ die Augen. Wo ist Biff jetzt? Das Wartezimmer von Bill Olivers Büro. Du sitzt seit Stunden. Die Umgebung modern, fremd. Sekretärinnen kommen und gehen. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Du hast es deinem Vater mit einem großen Traum erzählt — Bill Oliver erinnert sich an mich, er investiert in mich. Jetzt wartest du, und in dir wächst ein Zweifel. Wo in deinem Körper hat sich dieser Zweifel niedergelassen?',
          soru: 'Wo ist der Zweifel?',
        },
        {
          metin: 'Steh auf. Die Haltung eines Mannes, der stundenlang im Wartezimmer wartet — ist sie gebeugt, eingezwängt, angespannt? Was versucht dein Körper festzuhalten — den Glauben an sich selbst oder ein längst verlorenes Spiel?',
          soru: 'Die Haltung des Wartens',
        },
        {
          metin: 'Setz dich. Die Sekretärin sagt schließlich: „Herr Oliver kann Sie fünf Minuten empfangen." Du gehst zu Bill Oliver hinein. Er sieht dich mit leerem Gesicht an: „I\'ve seen you somewhere before…" (Ich habe Sie irgendwo schon einmal gesehen…) Wo berührte dich dieser Satz?',
          soru: 'Wo berührte der Satz?',
        },
        {
          vakSorulari: {
            gorsel:    'Was siehst du in Bill Olivers Gesicht? Das Gesicht eines Menschen, der dich nicht erkennt. Doch siehst du ihn einen Augenblick wie Willy, fühlst du dich wie Willy? Gibt es eine Verschiebung des Bildes?',
            isitsel:   'Welchen Ton hat seine Stimme? Künstliche Höflichkeit, oberflächliches Interesse, Distanz? Was sagst du zu ihm, wie ist dein Tonfall?',
            kinestetik:'Auf seinem Tisch liegt eine goldene Feder — teuer, glänzend. Der Augenblick, in dem deine Hand sich danach ausstreckt. Woher kam diese Bewegung? Gedankenlos, absichtlich, ein Selbstverrat?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Du nahmst die Feder, gingst aus dem Büro. Du stiegst auf die Straße hinab. Jetzt läufst du. Was ist in deinem Körper? Angst, Scham, eine seltsame Freiheit? Ist dies der Augenblick, in dem die „großer Mann"-Erzählung deines Vaters einen Riss bekommt?',
          soru: 'Was ist jetzt da?',
        },
        {
          metin: 'Lass diesen Satz als Biff durch dich hindurchgehen: „I stopped in the middle of that office building, do you hear this? I stopped in the middle of that building and I saw — the sky." (Ich blieb mitten in jenem Bürogebäude stehen, hörst du? Ich blieb mitten in jenem Gebäude stehen und sah — den Himmel.) Ist das ein Erwachen, eine Befreiung, ein Verlust?',
          soru: 'Was liegt unter dem Satz?',
        },
        {
          metin: 'Atme drei Mal tief durch. Sag deinen Namen. Du bist hier. Biffs Augenblick der Wandlung ist dort — du bist jetzt zu dir zurückgekehrt. Trink Wasser. Bleib ein paar Minuten einfach so sitzen.',
        },
      ],
    },
    {
      baslik: 'Erinnerung an Boston — den Vater finden',
      altbaslik: 'Der Zusammenbruch der Welt',
      girisMetni: 'In dieser Übung gehen wir in den Augenblick, in dem Biff mit siebzehn nach Boston fuhr und seinen Vater im Hotel mit einer anderen Frau fand. Bis zu jenem Augenblick war Willy für dich ein Gott — ein großer Mann, ein erfolgreicher Verkäufer, der Vater, den du bewundertest. Du warst gekommen, um zu sagen, dass du in Mathematik durchgefallen bist. Du dachtest, mein Vater hilft mir. Du klopftest an die Tür. Sie öffnete sich. Und die Welt brach zusammen.',
      adimlar: [
        {
          metin: 'Diese Übung geht in einen Augenblick am Ende der Kindheit. Fahre fort, wenn du bereit bist. Beeil dich nicht.',
        },
        {
          metin: 'Schließ die Augen. Du bist siebzehn. Du bist auf dem Flur eines Hotels in Boston. Du kennst die Zimmernummer deines Vaters. In deiner Tasche ist eine Hoffnung — er wird dir helfen. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Du näherst dich der Tür. In dir eine kindliche Angst, weil du in Mathematik durchgefallen bist, doch mehr noch ein Vertrauen — mein Vater weiß, was zu tun ist. Wo in deinem Körper trägst du dieses Vertrauen?',
          soru: 'Wo ist das Vertrauen?',
        },
        {
          metin: 'Steh auf. Du bist siebzehn, ein Football-Held, in der Stadt beliebt. Welche Haltung hat Biff, bevor er an die Tür klopft? Aufrecht, stolz, kindlich? Lass den Körper sprechen.',
          soru: 'Welche Haltung?',
        },
        {
          metin: 'Setz dich. Du hast geklopft. Sie öffnete sich. Dein Vater ist da — im Bademantel. Drinnen ist eine Frau. Du siehst es. Du verstehst es. Wie ist dieser Augenblick des Sehens in deinem Körper? In einer Sekunde bricht etwas — von wo aus?',
          soru: 'Wo ist der Bruch?',
        },
        {
          vakSorulari: {
            gorsel:    'Du sahst das Gesicht deines Vaters. Verwirrt, in Panik. Du sahst das Gesicht der Frau. Was ist in jenem Augenblick vor deinen Augen? Dieses Bild verblasste dein Leben lang nicht — welches ist jetzt am deutlichsten?',
            isitsel:   'Dein Vater sagt: „Biff! Biff, this is Mrs Francis…" Er versucht zu erklären. Was ist in seinem Tonfall? Wie hallt diese seine Stimme jetzt in dir wider?',
            kinestetik:'Wo in deinem Körper ist „flieh", wo ist „bleib"? Ziehen sich deine Füße zurück oder gehen sie vorwärts? Was tut deine Hand — eine Faust, locker, erstarrt?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Du siehst die Strümpfe deiner Mutter auf dem Bett. Du sagtest gerade: „You — you gave her Mama\'s stockings!" (Du — du hast ihr Mamas Strümpfe gegeben!) Woher in deinem Körper kam dieser Satz? Ein Schrei, eine Kinderstimme, ein Fluch?',
          soru: 'Woher kam der Satz?',
        },
        {
          metin: 'Du fliehst durch den Flur. Hinter dir ruft dein Vater „Biff!". Du kannst nicht anhalten. Du kontrollierst nicht mehr, was dein Körper tut — er läuft. Jetzt, Jahre später, wo in dir lebt diese Flucht noch?',
          soru: 'Wo lebt die Flucht?',
        },
        {
          metin: 'Diese Übung hat in einen sehr tiefen Verletzungsort am Ende der Kindheit geführt. Jetzt kehren wir langsam zurück. Atme drei Mal tief durch. Sag deinen Namen laut. Sag das heutige Datum. Du lebst, du bist hier. Zähle drei Dinge um dich herum. Boston ist dort — du bist hier, in deinem eigenen Körper. Trink Wasser. Bleib ein paar Minuten einfach so sitzen. Mach unbedingt eine körperliche Aktivität, wenn der heutige Tag vorbei ist.',
        },
      ],
    },
    {
      baslik: 'Restaurant — „He\'s a Fake!"',
      altbaslik: 'Die Wahrheit, die du nicht aussprechen konntest',
      girisMetni: 'In dieser Übung gehen wir in den Augenblick, in dem Biff sich im Restaurant seinem Vater stellt. Bill Oliver schlug fehl. Die Hoffnungserzählung des Vaters brach zusammen. Du bist gekommen, um die Wahrheit zu sagen: „Unser Vater lebt in einer falschen Geschichte. Ich war nie der, von dem er erzählte." Doch Willy hört nicht. An deiner Stelle geht er in Gedanken nach Boston. Du kannst keinen Satz bilden — doch der Satz ist überall in dir.',
      adimlar: [
        {
          metin: 'Diese Übung führt an die Schwelle des Zerbrechens. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließ die Augen. Wo ist Biff jetzt? Frank\'s Chop House — das Restaurant. Happy an deiner Seite, doch distanziert. Kellnerinnen kamen und gingen. Du wartest darauf, dass dein Vater an den Tisch kommt. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'In dir sind zwei Dinge: deinem Vater die Wahrheit sagen zu wollen und zu versuchen, ihn nicht zu verletzen. Wo in deinem Körper geraten diese beiden in Konflikt?',
          soru: 'Wo sind die beiden?',
        },
        {
          metin: 'Steh auf. Du bist im Begriff, deinen Vater zu sehen. Ihr werdet im selben Raum, am selben Tisch sein. Welche Vorbereitung gibt dein Körper — Angriff, Verteidigung, Rückzug?',
          soru: 'Welche Vorbereitung?',
        },
        {
          metin: 'Setz dich. Dein Vater kommt. In seinem Gesicht ist Hoffnung — er fragt, was Bill Oliver gesagt hat. Du beginnst „Pop, ich war nie…", doch er hört nicht. Er geht nach Boston. Was tut dieses Nicht-Hören in deinem Körper?',
          soru: 'Was tut sein Nicht-Hören?',
        },
        {
          vakSorulari: {
            gorsel:    'Das Gesicht deines Vaters ist an zwei Orten zugleich — das jetzige alte, verwirrte Gesicht und das Gesicht in deiner Erinnerung in Boston. Welches Gesicht ist stärker in deinem Körper?',
            isitsel:   'Der Lärm des Restaurants — Tischgespräche, Musik. Doch in dir ist die Stille von Boston. Welche Stimme ist beherrschend? Kam die Stimme „Mama\'s stockings" zurück?',
            kinestetik:'Du versuchst jetzt, einen Satz in deinem Körper festzuhalten — „He\'s a fake!" — doch du kannst ihn nicht aussprechen. Wo in deinem Körper steckt dieser Satz fest?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Lass diesen Satz als Biff durch dich hindurchgehen — still, denn du konntest ihn nicht laut sagen: „He\'s a fake! He\'s a phony little fake!" (Er ist falsch! Er ist ein verlogener kleiner Schwindler!) Du konntest diesen Satz deinem Vater nicht sagen — er kam nur als Schrei zu den Kellnerinnen heraus. Wo ist dieser Satz jetzt in deinem Körper?',
          soru: 'Wo steckt der Satz fest?',
        },
        {
          metin: 'Du standest vom Restauranttisch auf, gingst hinaus. Du ließest deinen Vater dort zurück. Was tut dieses Verlassen in deinem Körper? Schuld, Erleichterung, etwas Tieferes?',
          soru: 'Wo ist das Verlassen?',
        },
        {
          metin: 'Diese Übung hat in einen sehr schweren Augenblick geführt. Jetzt kehren wir langsam zurück. Atme drei Mal tief durch. Sag deinen Namen laut. Sag das heutige Datum. Zähle drei Dinge um dich herum. Das Restaurant ist dort — du bist hier, in deinem eigenen Körper. Trink Wasser. Bleib ein paar Minuten einfach so sitzen. Mach eine körperliche Aktivität, wenn der heutige Tag vorbei ist.',
        },
      ],
    },
    {
      baslik: 'Letzte Konfrontation mit dem Vater',
      altbaslik: '„I am a dime a dozen"',
      girisMetni: 'In dieser Übung gehen wir in den Augenblick, in dem Biff in die letzte große Konfrontation mit seinem Vater eintritt. Das Haus. Nacht. Deine Mutter ist da. Happy an deiner Seite. Und du bist im Begriff, deinem Vater die Wahrheit zu sagen — deine letzte Chance. Wirst du es können? Oder wirst du deinen Vater verraten, indem du die Wahrheit verbirgst? In dieser Szene wirst du sprechen. Dann wirst du weinen. Denn die Wahrheit zu sagen heißt nicht, den Vater zu verletzen — sondern ihn freizulassen.',
      adimlar: [
        {
          metin: 'Diese Übung führt in einen großen Augenblick des Bruchs. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließ die Augen. Wo ist Biff jetzt? Das Elternhaus, die Küche, Nacht. Deine Mutter ist da. Happy in der Ecke. Du suchst deinen Vater. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Du wirst deinem Vater etwas sagen: „Ich bin nicht der, von dem du erzählt hast." Dieser Satz ist seit Wochen in dir, doch du konntest ihn nicht sagen. Diesmal wirst du es. Wo in deinem Körper ist diese Entschlossenheit?',
          soru: 'Wo ist die Entschlossenheit?',
        },
        {
          metin: 'Steh auf. Dies ist die Haltung eines Biff, der gekommen ist, die Wahrheit zu sagen. Nicht die alte Haltung des Helden. Nicht die alte Haltung des Wartens. Etwas Neues. Lass den Körper sprechen.',
          soru: 'Neue Haltung',
        },
        {
          metin: 'Setz dich. Dein Vater ist dir gegenüber. Du beginnst: „Pop, ich bin gewöhnlich. Ich bin kein großer Mann, wie du erzählt hast." Dein Vater widerspricht: „Du bist mein Sohn!" Was tut diese Leugnung in deinem Körper?',
          soru: 'Wo ist seine Leugnung?',
        },
        {
          vakSorulari: {
            gorsel:    'Das Gesicht deines Vaters — jetzt. Jahrelang hat er etwas von dir erwartet. Was siehst du jetzt in diesem Gesicht? Widerstand, Verstehen, Verlust?',
            isitsel:   'Wie ist die Stimme deines Vaters jetzt? Laut, gebrochen, abwehrend? Was tut sein Satz „Du bist mein Sohn!" mit dir?',
            kinestetik:'Lehnst du dich zu deinem Vater hin oder ziehst du dich zurück? Was tut deine Hand — bereitet sie sich vor, ihn zu berühren, oder wird sie zur Faust?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Du umarmst ihn, du weinst. Lass diesen Satz als Biff durch dich hindurchgehen: „Pop! I am a dime a dozen, and so are you!" (Pop! Ich bin einer von tausend — und du bist es auch!) Ist dieser Satz ein Angriff, eine Befreiung, eine Liebe?',
          soru: 'Was liegt unter dem Satz?',
        },
        {
          metin: 'Du sagst zu deinem Vater: „Will you take that phony dream and burn it before something happens?" (Nimmst du diesen falschen Traum und verbrennst ihn, bevor etwas geschieht?) Dann weinst du. Dein Körper weint — wofür? Für den Vater, für dich selbst, für beide?',
          soru: 'Wofür das Weinen?',
        },
        {
          metin: 'Diese Übung hat in einen großen Augenblick der Verwirklichung geführt. Jetzt kehren wir langsam zurück. Atme drei Mal tief durch. Sag deinen Namen laut. Sag das heutige Datum. Zähle drei Dinge um dich herum. Biffs letztes Wort ist dort — du bist hier, in deinem eigenen Körper. Trink Wasser. Bleib ein paar Minuten einfach so sitzen. Mach eine körperliche Aktivität, wenn der heutige Tag vorbei ist.',
        },
      ],
    },
    {
      baslik: 'Friedhof + Aufbruch',
      altbaslik: '„He had the wrong dreams"',
      girisMetni: 'In dieser Übung gehen wir in den Augenblick nach der Beerdigung von Biffs Vater. Willy ist fort. Selbst die Lebensversicherung kommt vielleicht nicht — wenn es als Selbsttötung bewertet wird. Du stehst neben deiner Mutter. Happy will den „Traum" seines Vaters fortführen. Du nicht. Du brichst jetzt zu einem anderen Weg auf. Denn die Träume deines Vaters waren falsch. Du musst einen anderen Weg finden.',
      adimlar: [
        {
          metin: 'Setz dich an einen bequemen Ort. Atme ein paar Mal tief durch. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließ die Augen. Wo ist Biff jetzt? Der Friedhof. Vor dem frischen Grab deines Vaters. Deine Mutter an deiner Seite, Happy auf der anderen Seite. Charley dahinter. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Was tut das Fortgehen deines Vaters in deinem Körper? Trauer, Erleichterung, Schuld, alles zugleich? Wo sitzt dieses gemischte Gefühl?',
          soru: 'Wo ist das gemischte Gefühl?',
        },
        {
          metin: 'Steh auf. Auf diesem Friedhof ist Biff ein neuer Mann. Was er jahrelang nicht verstand, versteht er jetzt. Wie ist seine Haltung? Leichter, schwerer, klarer?',
          soru: 'Wie ist die Haltung?',
        },
        {
          metin: 'Setz dich. Charley sagt: „Nobody dast blame this man… A salesman is got to dream, boy." (Niemand darf diesen Mann beschuldigen… Ein Verkäufer muss träumen, Junge.) Wie reagiert dein Körper, wenn du diese Worte hörst — Annahme, Ablehnung, ein tieferes Verstehen?',
          soru: 'Charleys Worte',
        },
        {
          vakSorulari: {
            gorsel:    'Vor dem Grab deines Vaters — die Erde frisch aufgeworfen, die Blumen welken. Erscheint jetzt vor deinen Augen ein anderes Bild? Das Bild des Vaters, der im Garten Samen sät? Der Flur des Hotels in Boston?',
            isitsel:   'Ringsum Stille — Verkehr in der Ferne, Wind, der Atem der Mutter. Wie hallt Willys Stimme in dir wider? Ist „Be careful on those stairs!" noch zu hören?',
            kinestetik:'Ist dein Körper bereit aufzubrechen? Wollen deine Füße sich vom Boden heben oder schlagen sie Wurzeln? Wird etwas in deinen Armen getragen — ein Koffer, ein Geschenk, ein Erbe?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Lass diesen Satz als Biff durch dich hindurchgehen: „He had the wrong dreams. All, all, wrong." (Er träumte die falschen Träume. Alle, alle falsch.) Sind diese Worte eine Beschuldigung, ein Eingeständnis, eine Befreiung?',
          soru: 'Der Ton des Satzes',
        },
        {
          metin: 'Happy sagt: „Ich bleibe in dieser Stadt, ich werde den Traum meines Vaters fortführen." Du sagst „I know who I am" (Ich weiß, wer ich bin). Jetzt brichst du auf — zu einem anderen Ort. Wohin will dein Körper gehen? Nach Texas, anderswohin, nur an einen „unbekannten" Ort?',
          soru: 'Wohin der Aufbruch?',
        },
        {
          metin: 'Atme drei Mal tief durch. Sag deinen Namen. Du bist hier. Biffs Aufbruch ist dort — du bist jetzt zu dir zurückgekehrt. Trink Wasser. Bleib ein paar Minuten einfach so sitzen.',
        },
      ],
    },
  ],
};

export default biffDE;
