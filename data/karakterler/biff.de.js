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
};

export default biffDE;
