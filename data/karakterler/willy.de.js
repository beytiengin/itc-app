// data/karakterler/willy.de.js
// WILLY LOMAN — Almanca dil katmani (karakterGetir deep-merge ile willy.js TR
// tabanina biner). Yaklasim B: paralel dil dosyasi.
//
// TELIF NOTU (onemli): "Tod eines Handlungsreisenden" (Arthur Miller) + Volker
// Buchwitz / Hira Tekindor cevirileri TELIFLIDIR. Schlegel-Tieck (Hamlet) gibi
// kamuya acik kanon YOKTUR. Bu yuzden:
//   - ITC'nin KENDI metni (ozet, dogrular, yuk, yansimaSorusu, gecmis/simdi/iz,
//     olay/icsel betimleri, sentez, yorumlar, altSorular) serbestce cevrildi.
//   - Miller/Tekindor'un DOGRUDAN replikleri (sahneRef, isaretler[].metin,
//     gomulu tirnak-replikler) BETIMLEYICI PARAFRAZA cevrildi — tescilli ceviri
//     metni (ne TR ne DE) basilmadi, sayfa numaralari tasinmadi.
//   - Yapisal/sayisal alanlar (no, kategori, perde, sahneNo, harf, sinif,
//     yasamSirasi, sonraSahneNo, konum, travmaKategorileri/Seviyesi, sayilar)
//     buraya KONMADI — merge zaten TR tabandan alir.
//
// Array index-hizali merge: TR'de madde eklenir/cikarilirsa bu dosya da ayni
// indekste guncellenmeli.

const willyDE = {
  ozet:
    'Illusion und der Zusammenbruch der Identität. Ein Geist, in dem Vergangenheit und Gegenwart zugleich gelebt werden.',
  etiketler: ['Tragödie', 'Illusion', 'Familie', 'Amerikanischer Traum'],

  baseline: {
    ad: 'Der junge Handlungsreisende',
    aciklama:
      'Frisch verheiratet, die Kinder gerade geboren. Unterwegs. Er fährt aus Brooklyn hinaus — ein Mann, für den das Morgen noch voller Versprechen ist. Noch kein Boston, noch kein Scheitern, noch nicht müde. Er glaubt wirklich an den „American Dream“.',
  },

  dogrular: [
    { madde: 'Willy Loman ist ein Handlungsreisender in seinen Sechzigern.' },
    { madde: 'Er wohnt in einem Haus in Brooklyn — auf Raten gekauft, die letzte Rate gerade abbezahlt.' },
    { madde: 'Er hat 36 Jahre in derselben Firma gearbeitet, jetzt ohne Gehalt, nur auf Provision.' },
    { madde: 'Seine Frau Linda — die ihn seit Jahren trägt, beschützt, sieht.' },
    { madde: 'Seine Söhne Biff (34) und Happy (32).' },
    { madde: 'Charley ist der engste Nachbar — Willy leiht sich ständig Geld von ihm.' },
    { madde: 'In Boston hatte er ein Verhältnis mit einer Frau. Biff hat es entdeckt.' },
    { madde: 'Sein Vater verließ die Familie, als Willy klein war. Er erinnert sich nicht.' },
    { madde: 'Sein Bruder Ben ging nach Alaska, „wurde reich“, starb früh. Jetzt besucht er ihn als Geist.' },
    { madde: 'Er wurde von Howard Wagner entlassen.' },
    { madde: 'Er hat nachts Samen im Garten gesät — er wollte etwas wachsen lassen.' },
    { madde: 'Er versteckte den Gasschlauch (Linda fand ihn).' },
    { madde: 'Er hatte eine Lebensversicherung — bei seinem Tod sollte die Familie 20.000 Dollar erhalten.' },
    { madde: 'Er nahm sich mit dem Auto das Leben — mit der Metapher des „Diamanten“.' },
    { madde: 'Bei seiner Beerdigung war nur die Familie. Niemand kam.' },
  ],

  oyunOncesi: {
    olaylar: [
      {
        baslik: 'Sein Vater verlässt die Familie, als Willy klein ist',
        sahneRef: 'Ben beschreibt den Vater als einen großen, eigenwilligen, unabhängigen Mann.',
        yuk: 'Nie gab es eine Hand, die ihm den Weg wies. Das Grundmisstrauen eines Mannes, der in einer Leere aufwuchs.',
        yansimaSorusu: 'Wo in Willys Körper hat sich die Leere des nie gekannten Vaters festgesetzt?',
      },
      {
        baslik: 'Bruder Ben geht nach Alaska/Afrika, „wird reich“, stirbt früh',
        sahneRef: 'Ben erzählt, wie er als junger Mann in den Dschungel ging und Jahre später als reicher Mann herauskam.',
        yuk: 'Der unerreichbare Mythos des Erfolgs. Der Maßstab, an dem Willy sich misst, den er aber nie erreicht.',
        yansimaSorusu: 'Wie verkleinert Bens „Erfolgsmythos“ Willys eigenes Leben?',
      },
      {
        baslik: 'Heirat mit Linda, der Ratenkauf des Hauses in Brooklyn',
        sahneRef: 'Linda erwähnt, dass in diesem Monat die letzte Rate abbezahlt wurde.',
        yuk: 'Liebe + Last. Das Gewicht, ein beschützter und zugleich getragener Mann zu sein.',
        yansimaSorusu: 'Ist Lindas Fürsorge für Willy ein Zufluchtsort oder ein Spiegel der Niederlage?',
      },
      {
        baslik: 'Die jungen Verkäuferjahre — die Singleman-Legende',
        sahneRef: 'Willy erinnert sich an einen alten Verkäufer und an grüne Samtpantoffeln als Bild eines geehrten Todes.',
        yuk: 'Der Traum, geliebt und anerkannt zu sterben. Der ganze Sinn, den Willy dem Verkäuferdasein zuschreibt.',
        yansimaSorusu: 'Welches Verlangen weckt in Willy das Bild jenes Mannes, der mit 84 noch telefonisch Aufträge entgegennahm?',
      },
      {
        baslik: 'Die goldene Zeit von Biff und Happy — die Kindheit',
        sahneRef: 'Eine Erinnerung: das Polieren des Wagens, ein Football-Spiel, die „Loman-Brüder“.',
        yuk: 'Das verlorene Paradies. Die Zeit, als noch alles möglich war, als Biff noch keine Enttäuschung war.',
        yansimaSorusu: 'Was geschieht, wenn die Wärme jener goldenen Kindheit neben dem jetzigen Zusammenbruch steht?',
      },
      {
        baslik: 'Der Beginn des Verhältnisses mit der Frau in Boston',
        sahneRef: 'Eine Erinnerung: ein Hotelzimmer, Strümpfe, das Lachen der Frau.',
        yuk: 'Der Vorwand der Einsamkeit. Das Füllen der Leere des Unterwegsseins — und die verborgene Schuld.',
        yansimaSorusu: 'Was brachte die Einsamkeit unterwegs in Willy zum Schweigen, während sie ihn dorthin trieb?',
      },
      {
        baslik: 'Biff ertappt seinen Vater im Hotel in Boston (1932)',
        sahneRef: 'Biff erkennt den Betrug seines Vaters, eine Tür öffnet sich, und etwas zerbricht für immer.',
        yuk: 'Der Augenblick, in dem die Beziehung für immer zerbrach. Willys tiefste moralische Verletzung.',
        yansimaSorusu: 'Was ist in jenem Augenblick der sich öffnenden Tür in Willys Körper bis heute nicht geschlossen?',
      },
      {
        baslik: 'Die verlorenen Jahre nach Boston — Biffs Zerfall, der Westen, das Gefängnis',
        sahneRef: 'Bernard bemerkt, dass Biff sich nach der Rückkehr aus Boston nie mehr gefangen hat.',
        yuk: 'Der Zusammenbruch, für den der Vater sich selbst beschuldigt. Biffs Scheitern als eigene Sünde zu betrachten.',
        yansimaSorusu: 'Wie sehr nimmt Willy Biffs Zerfall auf sich — und wem kann er das gestehen?',
      },
    ],
    iliskiler: [
      {
        gecmis: 'Junge Ehe, das gemeinsam aufgebaute Haus, die getragenen Hoffnungen.',
        simdi: 'Die ihn seit Jahren trägt, beschützt, sieht. Die den Schlauch fand, aber nichts sagte.',
        iz: 'Zärtlichkeit + stille Hilflosigkeit, im selben Körper.',
        yansimaSorusu: 'Senken sich Willys Schultern, wenn Linda zu ihm kommt, oder spannt er sich mehr an?',
      },
      {
        gecmis: 'Goldenes Kind, der Stolz des Vaters, der Football-Star.',
        simdi: 'Seit Boston zerbrochen. Willys größte Hoffnung und tiefste Wunde zugleich.',
        iz: 'Leidenschaftliche Liebe + Gefühl des Verrats, ein unlösbarer Knoten.',
        yansimaSorusu: 'Welches Alter sieht Willy, wenn er Biff ansieht — die 17 oder die jetzigen 34?',
      },
      {
        gecmis: 'Der zweite Sohn im Schatten, immer auf der Suche nach Aufmerksamkeit.',
        simdi: 'Der den Vater nachahmt, die Lügen fortführt — aber nie wirklich gesehen wird.',
        iz: 'Ein Kind, das gesehen werden will, aber immer übersehen wird.',
        yansimaSorusu: 'Hört Willy Happy wirklich, wenn dieser von seinen eigenen Plänen spricht?',
      },
      {
        gecmis: 'Die Legende, die in den Dschungel ging, reich herauskam und früh starb.',
        simdi: 'Eine innere Stimme, die als Geist erscheint — der Ruf des Erfolgs und der Flucht.',
        iz: 'Bewunderung + Unzulänglichkeit, ein unermesslicher Maßstab.',
        yansimaSorusu: 'Was in Willys Innerem erzittert, wenn Ben ihn ruft, mit ihm zu gehen?',
      },
      {
        gecmis: 'Der Mann, der ging, als Willy ein Säugling war, an den er sich nicht erinnert.',
        simdi: 'Existiert als eine Leere — der Ort, von dem der Klang der Flöte kommt.',
        iz: 'Eine ungekannte Sehnsucht, ein unbenanntes Fehlen.',
        yansimaSorusu: 'Bemerkt Willy den Klang der Flöte, wenn er ertönt, oder reagiert nur sein Körper?',
      },
      {
        gecmis: 'Seit Jahren Nachbar, ein stiller, treuer Freund.',
        simdi: 'Der Mann, der ihm ständig Geld leiht, Arbeit anbietet — aber Willys Stolz berührt.',
        iz: 'Dankbarkeit + Neid + abgelehnte Hilfe.',
        yansimaSorusu: 'Wohin weicht Willys Blick aus, während er von Charley das Geld nimmt?',
      },
      {
        gecmis: 'Das „fleißige, aber ungeliebte“ Kind; das Gegenteil von Biff.',
        simdi: 'Ein erfolgreicher Anwalt — alles, was Willy sich für seinen Sohn erträumte, aber nicht Biff.',
        iz: 'Der lebende Beweis des falschen Maßstabs; ein bitterer Vergleich.',
        yansimaSorusu: 'Welche Frage über Biff stellt Bernards Erfolg Willy im Stillen?',
      },
      {
        gecmis: 'Der Junge, dem Willy den Namen gab, der die Firma seines Vaters übernahm.',
        simdi: 'Die Autorität, die ihn nach 34 Jahren entlässt. Spielt mit dem Tonbandgerät, hört nicht zu.',
        iz: 'Verratene Treue; ein entwertetes Leben.',
        yansimaSorusu: 'An wen wendet sich Willy in Wahrheit, wenn er von seinen 34 Jahren spricht?',
      },
      {
        gecmis: 'Die Frau, die die Einsamkeit unterwegs füllte, die die Strümpfe bekam.',
        simdi: 'Eine Erinnerung, die auf der Bühne erscheint — Zeugin von Biffs Entdeckung, das konkrete Gesicht der Schuld.',
        iz: 'Augenblicklicher Trost + lebenslange Scham.',
        yansimaSorusu: 'Welche Tür schließt sich in Willys Innerem, wenn die Frau lacht?',
      },
    ],
  },

  perdeTemalari: [
    { baslik: 'Sickern',    altyazi: 'Die Vergangenheit sickert in die Gegenwart' },
    { baslik: 'Ausbruch',   altyazi: 'Das Unterdrückte tritt zutage' },
    { baslik: 'Abrechnung', altyazi: 'Das Bezahlte und das Zurückgebliebene' },
  ],

  sahnelerWorkbook: [
    {
      baslik: 'Heimkehr',
      olay: 'Willy machte sich auf den Weg, musste aber umkehren; er brachte es nicht fertig, weiterzufahren. Linda empfängt ihn an der Tür. Biff ist nach Hause gekommen. Diesmal hat es nicht geklappt.',
      icsel: 'Eine Müdigkeit, die er nicht zugeben kann. Der Körper ergeben, der Geist noch im Widerstand.',
      yuk: 'Die erste Niederlage, die ein Mann ahnt, der noch glauben muss, dass das Morgen voller Versprechen ist.',
    },
    {
      baslik: 'Helle Tage — Kindheitserinnerung',
      olay: 'Biff und Happy sind klein; der Wagen wird poliert, ein Football, die „Loman-Brüder“. Die Zeit, als noch alles möglich war, als Geliebtwerden für Erfolg gehalten wurde.',
      icsel: 'Die Wärme des verlorenen Paradieses — die neben dem jetzigen Zerfall zu Schmerz wird.',
      yuk: 'Die Vergangenheit sickert in die Gegenwart; je mehr Willy in jene Wärme flieht, desto größer wird die jetzige Leere.',
    },
    {
      baslik: 'Kartenspiel mit Charley, Bens Geist',
      olay: 'Charley kommt zum Kartenspielen. Im selben Moment erscheint Bens Geist und ruft das Bild seines Reichtums herauf. Zwei Ebenen überlagern sich.',
      icsel: 'Während die gegenwärtige Hilfe (Charley) abgelehnt wird, ruft der unerreichbare Erfolgsmythos (Ben).',
      yuk: 'Während der echte Freund seinen Stolz berührt, ruft die Legende des toten Bruders ihn nicht ins Leben, sondern in die Flucht.',
    },
    {
      baslik: 'Linda und der Schlauch',
      olay: 'Linda erzählt den Söhnen vom Zustand ihres Vaters, von den Selbstmordversuchen, vom versteckten Gasschlauch. Sie sagt, dass man auf ihn achten müsse.',
      icsel: 'Willy ist nicht auf der Bühne, aber jeder Satz lastet auf ihm. Der Schutz und das Gewicht des Gesehenwerdens zugleich.',
      yuk: 'Das stille Entsetzen, das eine Frau trägt; die Wahrheit, der die Söhne sich stellen müssen.',
    },
    {
      baslik: 'Biffs Entscheidung — neue Hoffnung',
      olay: 'Biff legt seinen Plan dar, sich Geld zu leihen und ein Geschäft zu gründen. Willy gerät plötzlich in Begeisterung, gibt Ratschläge. Der Vorhang fällt mit Hoffnung — einer falschen, aber echten Hoffnung.',
      icsel: 'Für Willy ist dieser Plan die Rettung; für Biff das Besänftigen des Vaters. Zwei verschiedene Hoffnungen am selben Tisch.',
      yuk: 'Der gefährlichste Augenblick ist die Begeisterung — denn von dort ist der Fall am tiefsten.',
    },
    {
      baslik: 'Neuer Tag — falsche Hoffnung',
      olay: 'Morgen. Willy ist optimistisch; er will Howard um eine Bürostelle in New York bitten. Linda sagt, die Raten seien abbezahlt. Alles scheint sich zu fügen.',
      icsel: 'Die zerbrechliche Fortsetzung der Begeisterung vom Vorabend im Morgenlicht.',
      yuk: 'Die hellste Gestalt der Hoffnung, kurz vor dem Sturz.',
    },
    {
      baslik: 'Howard im Büro — die Entlassung',
      olay: 'Willy bittet um eine Bürostelle; Howard spielt mit dem Tonbandgerät, hört nicht zu. Willy beruft sich auf die 34 Jahre, die er der Firma gegeben hat. Am Ende wird er entlassen.',
      icsel: 'Der Augenblick, in dem ein ganzes Leben entwertet wird. Ein Körper, der zwischen Flehen und Zorn schwankt.',
      yuk: 'Verratene Treue; das Kind, dem er den Namen gab, löscht ihn aus.',
    },
    {
      baslik: 'Charleys Büro + Bens Alaska-Angebot',
      olay: 'Willy kommt, um sich Geld zu leihen; er begegnet Bernards Erfolg. Dazwischen tritt die Erinnerung ein, in der er Bens Alaska-Angebot ablehnte — und sich fragt, ob alles anders gekommen wäre.',
      icsel: 'Bernard ist der lebende Beweis all dessen, was er sich für Biff erträumte. Ben ist der Geist des nicht gewählten Weges.',
      yuk: 'Das spät kommende „hätte ich nur“ eines an falschem Maßstab gemessenen Lebens.',
    },
    {
      baslik: 'Frank\'s Chop House + die Boston-Hotel-Erinnerung',
      olay: 'Im Restaurant versucht Biff, die Wahrheit zu sagen; Willy kann nicht zuhören und fällt in die Erinnerung an das Hotel in Boston — die Frau, die Strümpfe, die sich öffnende Tür, Biffs Anklage. Die Söhne lassen ihn auf der Toilette zurück und gehen.',
      icsel: 'Gegenwart und Vergangenheit brechen zusammen; die tiefste moralische Verletzung bricht genau hier, vor allen, auf.',
      yuk: 'Das erneute Erleben des Augenblicks, in dem die Beziehung für immer zerbrach — Jahre später mit derselben Heftigkeit.',
    },
    {
      baslik: 'Garten + letzte Auseinandersetzung mit Biff',
      olay: 'Willy sät nachts Samen im Garten — ein verzweifeltes Ringen, etwas wachsen zu lassen. Er bespricht mit Ben den Versicherungsplan. Dann die letzte Auseinandersetzung mit Biff: Biff sagt, er sei ein Nichts, und weint. Willy missversteht es als Liebe.',
      icsel: 'Das Bedürfnis, im Dunkeln etwas zu pflanzen; und die Tränen des Sohnes für Liebe zu halten — die letzte Illusion.',
      yuk: 'Der Zwang eines Vaters, selbst die nackte Wahrheit seines Sohnes in seinen eigenen Traum zu verwandeln.',
    },
    {
      baslik: 'Das Ende — die Fahrt mit dem Auto',
      olay: 'Nachdem alle schlafen gegangen sind, ist Willy noch auf. Bens Ruf, die Metapher des „Diamanten“. Er steigt ins Auto und fährt. Ein Motorengeräusch, dann Stille — nur der Klang der Flöte bleibt.',
      icsel: 'Die Illusion, sich selbst in ein Geschenk zu verwandeln: seinen Tod als letzten Verkauf, den er seinem Sohn hinterlässt.',
      yuk: 'Willys letzter Augenblick auf der Bühne — die Reise endet hier. (Das Requiem gehört nicht zur Figur; nicht enthalten.)',
    },
  ],

  tercihler: [
    {
      baslik: 'Ist Ben eine echte Erinnerung oder Willys Mythos?',
      isaretler: [
        { metin: 'Ben (in mancher Übersetzung „Onkel Tom“) erscheint, verbunden mit dem Bild eines Mannes, dem Diamantenminen gehören. Er existiert allein in Willys Welt.' },
        { metin: 'Willy bedauert, nicht mit dem Bruder nach Alaska gegangen zu sein, und nennt ihn ein Genie. Ben ist die stets rufende, nie erreichbare Stimme.' },
      ],
      sentez: 'Ben erscheint auf der Bühne allein in Willys Geist — unbeweisbar, aber für Willy die wirklichste Figur. Der Schauspieler entscheidet über seinen Grad an Wirklichkeit.',
      yorumlar: [
        { baslik: 'Echte Bruder-Erinnerung', aciklama: 'Ben hat gelebt, ein echter Mann; Willy erinnert ihn, wie er war. Der Ruf des Erfolgs kommt von außen.' },
        { baslik: 'Innerer Mythos', aciklama: 'Willy hat einen Götzen geschaffen, an dem er sein Scheitern misst; Ben ist weniger Wirklichkeit als Bedürfnis. Der Ruf kommt von innen.' },
        { baslik: 'Beides zugleich', aciklama: 'Die Erinnerung an einen echten Mann ist mit der Zeit zur Legende geworden; der Schauspieler spielt das Gleiten zwischen Erinnerung und Mythos.' },
      ],
    },
    {
      baslik: 'Wie gleitet Willy in die Vergangenheit — Demenz, Bewusstseinsstrom oder körperlicher Auslöser?',
      isaretler: [
        { metin: 'Zu Beginn eine Flötenmelodie; die Regieanweisung deutet an, dass Willy die Musik hört, ohne sich ihrer bewusst zu sein. Die Tür zur Vergangenheit öffnet sich über den Klang.' },
        { metin: 'Die Flöte nähert sich und entfernt sich, das Licht wechselt; Willy gleitet zwischen Gegenwart und Vergangenheit.' },
        { metin: 'Das härteste Gleiten: vom Restaurant stürzt er ins Hotel in Boston. Er verliert die Kontrolle vollständig.' },
      ],
      sentez: 'Miller schreibt die Übergänge mit Flöte und Licht, erklärt aber nicht das „Warum“. Die Natur des Gleitens wählt der Schauspieler.',
      yorumlar: [
        { baslik: 'Klinische Auflösung', aciklama: 'Alter / geistiger Zerfall; die Übergänge sind unkontrolliert, beängstigend, unwillkürlich.' },
        { baslik: 'Bewusstseinsstrom', aciklama: 'Nicht bewusst, aber bedeutungsvoll; die unterdrückte Vergangenheit tritt an die Oberfläche, der Geist hat seine eigene Logik.' },
        { baslik: 'Körperlicher Auslöser', aciklama: 'Ein Klang oder Gegenstand (Flöte, Strumpf, Feuerzeug) löst die Erinnerung aus; das Gleiten beginnt im Körper und breitet sich dann zum Geist aus.' },
      ],
    },
    {
      baslik: 'Wie spielt man die Linie von Linda und der Frau?',
      isaretler: [
        { metin: 'Linda stopft alte Strümpfe; Willy erträgt das nicht. Der Strumpf trägt die Schuld von Boston stumm auf die Bühne.' },
        { metin: 'Die Erinnerung an die Frau erscheint hinter einem Schleier; im Augenblick der Enthüllung vermischen sich die Ebenen.' },
      ],
      sentez: 'Zwei Frauen, eine Achse der Schuld. Das Strumpf-Motiv verbindet sie stumm — Willy gab der Frau Strümpfe, während er es nicht über sich bringt, Lindas stopfen zu lassen.',
      yorumlar: [
        { baslik: 'Liebe vs. Abhängigkeit', aciklama: 'Linda ist reiner Schutz und Liebe; die Frau die Flucht aus der Einsamkeit unterwegs. Zwei verschiedene Bedürfnisse.' },
        { baslik: 'Achse der Schuld', aciklama: 'Linda ist das Gesicht der Unschuld, die Frau das der Sünde; der Schauspieler verbindet beide über das Strumpf-Motiv zu einer Linie.' },
        { baslik: 'Feministische Lesart', aciklama: 'Linda ist die unsichtbare Arbeiterin des Systems; die Frau ein zur Ware gewordener Trost. Beide sind Opfer von Willys Welt.' },
      ],
    },
    {
      baslik: 'Warum stirbt Willy — Versicherung, Ehre oder Scham?',
      isaretler: [
        { metin: 'Linda erklärt die Sache mit dem Gummischlauch und der Versicherung. Der Tod ist seit Monaten geplant.' },
        { metin: 'Ben ruft mit dem Bild des „Diamanten“; Willy sieht den Tod als konkretes Geschenk, das er Biff hinterlässt.' },
      ],
      sentez: 'Der Text nährt alle drei Gründe: die Versicherung über 20.000 Dollar, die Ehre des Verkäufers, die Scham von Boston. Welchen hebt der Schauspieler hervor?',
      yorumlar: [
        { baslik: 'Versicherung — ein Akt der Liebe', aciklama: 'Biff ein Startkapital hinterlassen; ein praktisches, kalkuliertes Opfer. Der Tod als Investition.' },
        { baslik: 'Ehre — der letzte Verkauf', aciklama: 'Das Bedürfnis, sich als „wertvoll“ zu beweisen; der Tod als Vorstellung, der Traum einer großen Beerdigung.' },
        { baslik: 'Scham — die Flucht', aciklama: 'Sich von der Last Bostons, der Entlassung, des Gesehenwerdens befreien. Der Tod als Ergebung.' },
      ],
    },
    {
      baslik: 'Was trägt Willy in seinem letzten Augenblick — Niederlage, Frieden oder Illusion?',
      isaretler: [
        { metin: 'Bens Ruf, das Bild des „Diamanten“, das Einsteigen ins Auto; ein Motorengeräusch, dann bleibt nur die Flöte.' },
        { metin: 'Am Grab spricht Linda davon, dass keine Schulden mehr bleiben, dass sie frei seien. ANMERKUNG: Das Requiem ist nach Willys Tod — NICHT Teil der Reise, nur eine Inszenierungsdeutung.' },
      ],
      sentez: 'Das Gefühl, das Willy in seinem letzten Atemzug trägt, steht nicht im Text. Niederlage, die Illusion der Erlösung oder ein Augenblick Frieden?',
      yorumlar: [
        { baslik: 'Niederlage', aciklama: 'Ein gebrochener, entlassener Mann, der seinen Sohn verloren hat, ergibt sich der Dunkelheit. Der letzte Augenblick ist Zusammenbruch.' },
        { baslik: 'Illusion', aciklama: 'Er geht im Glauben an Bens Diamanten, an den Traum, Biff zu retten. Die tragische Blindheit wird in den letzten Augenblick getragen.' },
        { baslik: 'Ein Augenblick Frieden', aciklama: 'Er geht mit der kurzen Erkenntnis, dass Biff ihn noch liebt. Der letzte Augenblick ist ein Frieden.' },
      ],
    },
  ],

  boslukSet: [
    {
      baslik: 'Heimkehr — das, was nie mehr dasselbe ist',
      onceBaslik: 'Hotel Boston — die Enthüllung',
      onceMetin: 'Biff sah seinen Vater mit der Frau, nannte ihn einen Betrüger und floh. Willy kehrte von Boston nach Brooklyn zurück.',
      boslukMetin: 'der Mann, der ins Haus tritt · der schweigende Biff · die nichts ahnende Linda · das Nicht-in-die-Augen-sehen-Können · „reiß dich zusammen“ sagen können, aber nicht das Warum · ein Schweigen, das sich über Monate erstreckt',
      sonraBaslik: 'Die Gegenwart des Stücks — die müde Heimkehr',
      sonraMetin: 'In Szene 1 kehrt Willy wieder heim, erschöpft. Die ungeheilte Kälte zwischen ihm und Biff ist nun die Luft des Hauses — die unsichtbare Last unter Szene 1.',
      sentez: 'Miller überspringt auf der Bühne die 15 Jahre zwischen Boston und der Gegenwart des Stücks; wir sehen nur das Ergebnis der Kälte. Der Schauspieler baut in dieser Lücke, wie sich die Kälte festsetzte — das Schweigen in jeder Szene mit Biff nährt sich aus dieser nicht zu füllenden Heimkehr. Die Müdigkeit in Szene 1 ist nicht körperlich, sondern der Name dieser Last.',
      altSorular: [
        { soru: 'Konnte Willy am ersten Abend nach Boston Biff in die Augen sehen — wohin wich sein Blick aus?' },
        { soru: 'Glaubte Willy wirklich, dass Linda nichts wusste, oder wählte er es, nicht zu sehen?' },
        { soru: 'Gab es einen Augenblick, in dem er in jener Zeit in den Spiegel sah — konnte er sein eigenes Gesicht ansehen, oder sah er es an, ohne es zu sehen?' },
      ],
    },
    {
      baslik: 'Die Geburt von Bens Geist',
      onceBaslik: 'Kartenspiel mit Charley',
      onceMetin: 'Willy spielt mit Charley Karten; während des Gesprächs tritt Bens Geist in seinen Geist, und die Szene gleitet in die Erinnerung.',
      boslukMetin: 'der in Wahrheit gestorbene Ben · die zum ersten Mal gerufene Stimme · ungewiss, ob bewusst oder von selbst · der Bruder, der in einem Augenblick der Entscheidung zurückkehrt · der Mund, der ausspricht, was Willy nicht sagen kann',
      sonraBaslik: 'Ben auf der Bühne — der „diamantenreiche Dschungel“',
      sonraMetin: 'In Szene 3 gibt Bens Geist Willy Ratschläge, flüstert den Erfolgsmythos. Dieser Geist ist nun eine Gewohnheit Willys — die innere Stimme, die in Augenblicken der Entscheidung zurückkehrt.',
      sentez: 'Miller zeigt nie den Augenblick, in dem Ben zum Geist wird — wenn er die Bühne betritt, ist er bereits eine eingewurzelte Gewohnheit. Der Schauspieler baut in dieser Lücke die erste Geburt des Geistes: Für wen existiert Ben? Wenn Ben das ausspricht, was Willy nicht sagen kann, ist der Geist kein Bruder, sondern Willys eigene Stimme. Das setzt sich unter jede Ben-Replik in Szene 3.',
      altSorular: [
        { soru: 'Wo war Willy, was tat er, als Ben starb — in welchem Augenblick spürte er die Abwesenheit zum ersten Mal in seinem Körper?' },
        { soru: 'War der Augenblick, in dem er den Geist zum ersten Mal rief, ein bewusster Ruf, oder kam er von selbst?' },
        { soru: 'Ist das, was Ben sagt, wirklich Bens, oder das, was Willy sich selbst nicht sagen kann?' },
      ],
    },
    {
      baslik: 'Die Nacht vor dem Gespräch mit Howard',
      onceBaslik: 'Einheit 5 (Hoffnung)',
      onceMetin: 'Der Abend endete voller Hoffnung; morgen wird Willy Howard um eine Bürostelle bitten.',
      boslukMetin: 'die Nacht der Vorbereitung · die geprobten Sätze · das Selbstvertrauen, das wächst und zerfällt · ein Mann, der vor dem Spiegel die Worte sucht',
      sonraBaslik: 'Einheit 7 (Howard)',
      sonraMetin: 'Am Morgen geht Willy mit Hoffnung zu Howard — und wird entlassen.',
      sentez: 'Was geschah in jener Nacht in Willys Körper? Der Schauspieler baut in dieser Lücke die Vorbereitung — wie sicher war Willy wirklich, und wann begann der Zweifel?',
      altSorular: [
        { soru: 'Was sagte Willy in jener Nacht im Stillen zu sich selbst, während er das Gespräch probte?' },
        { soru: 'Glaubte er wirklich, dass Howard zustimmen würde, oder wusste er es im Innersten schon?' },
        { soru: 'Wo in seinem Körper saß die Spannung jener Nacht?' },
      ],
    },
    {
      baslik: 'Der Augenblick der Ablehnung von Bens Alaska-Angebot',
      onceBaslik: 'Bens Besuch',
      onceMetin: 'Ben bietet Willy an, mit ihm nach Alaska zu gehen, ein neues Leben zu beginnen.',
      boslukMetin: 'die nicht gewählte Möglichkeit · die Entscheidung zu bleiben · das Versprechen des Verkäuferdaseins · der Augenblick, in dem das Festhalten am Traum den Weg verschloss',
      sonraBaslik: 'Einheit 8 (Charleys Büro / Erinnerung)',
      sonraMetin: 'Jahre später, in Charleys Büro, kehrt diese Ablehnung als Reue zurück — „hätte ich nur“.',
      sentez: 'Miller zeigt den Augenblick der Entscheidung nur als ferne Erinnerung. Der Schauspieler baut, warum Willy blieb — aus Glauben, aus Angst oder aus Liebe zu Linda?',
      altSorular: [
        { soru: 'Was sagte Willy zu Ben, als er das Angebot ablehnte — und was sagte er sich selbst?' },
        { soru: 'Bereute er die Entscheidung sofort, oder erst Jahre später?' },
        { soru: 'Wo in seinem Körper trägt Willy diese nicht gewählte Möglichkeit?' },
      ],
    },
    {
      baslik: 'Nach der Entlassung auf der Straße',
      onceBaslik: 'Howards Büro — die Entlassung',
      onceMetin: 'Willy wurde gerade entlassen; er verlässt das Büro auf die Straße.',
      boslukMetin: 'der Mann, der eben sein Leben verlor · die Straße · die Schritte ohne Ziel · die noch nicht in Worte gefasste Scham · wohin nun',
      sonraBaslik: 'Einheit 8 (Charleys Büro)',
      sonraMetin: 'Willy geht zu Charley, um sich Geld zu leihen — derselbe Mann, dessen Hilfe er stets ablehnte.',
      sentez: 'Zwischen der Entlassung und Charleys Büro liegt ein Weg, den Miller nicht zeigt. Der Schauspieler baut, was Willy auf jener Straße trug — Zorn, Scham oder die erste klare Ahnung des Endes.',
      altSorular: [
        { soru: 'Was tat Willy auf jener Straße, bevor er Charleys Büro betrat — blieb er stehen, setzte er sich, ging er weiter?' },
        { soru: 'Wann verwandelte sich der Zorn über die Entlassung in Scham?' },
        { soru: 'Wo in seinem Körper begann in jenem Augenblick der Gedanke an das Ende?' },
      ],
    },
    {
      baslik: 'Die Tür klopfte — Biffs Stimme',
      onceBaslik: 'Hotel Boston',
      onceMetin: 'Willy ist mit der Frau im Hotelzimmer in Boston; es klopft an der Tür.',
      boslukMetin: 'das Klopfen an der Tür · der Augenblick zwischen Erkennen und Verbergen · die Frau, die versteckt werden muss · Biffs Stimme draußen · die Sekunde vor dem Unausweichlichen',
      sonraBaslik: 'Einheit 9 (Boston-Erinnerung)',
      sonraMetin: 'Die Tür öffnet sich, Biff sieht alles, und etwas zerbricht für immer.',
      sentez: 'Miller zeigt das Klopfen, aber nicht den inneren Augenblick davor. Der Schauspieler baut, was in Willy zwischen dem Klopfen und dem Öffnen der Tür geschah.',
      altSorular: [
        { soru: 'Was dachte Willy in der Sekunde zwischen dem Klopfen und dem Öffnen der Tür?' },
        { soru: 'Wollte er die Frau verstecken, oder wusste er schon, dass es zu spät war?' },
        { soru: 'Wo in seinem Körper sitzt der Klang jenes Klopfens bis heute?' },
      ],
    },
    {
      baslik: 'Von Boston zurück nach Brooklyn',
      onceBaslik: 'Hotel Boston — die Enthüllung',
      onceMetin: 'Biff hat alles gesehen und ist gegangen. Willy bleibt allein im Hotelzimmer zurück.',
      boslukMetin: 'die lange Rückfahrt · die Stunden allein · die Sätze, die er Biff sagen wollte · das nicht gefundene Wort · die Ankunft zu Hause als ein anderer Mann',
      sonraBaslik: 'Einheit 9 (Boston-Erinnerung)',
      sonraMetin: 'Diese Erinnerung kehrt Jahre später im Restaurant mit voller Wucht zurück.',
      sentez: 'Miller zeigt die Rückfahrt nicht. Der Schauspieler baut, was Willy auf jenem Weg von Boston nach Brooklyn trug — und welches Wort er nie fand.',
      altSorular: [
        { soru: 'Was sagte Willy auf der Rückfahrt im Stillen zu sich, was er Biff sagen wollte?' },
        { soru: 'In welchem Augenblick begriff er, dass die Beziehung nicht mehr zu reparieren war?' },
        { soru: 'Wo in seinem Körper trägt Willy diese Rückfahrt bis heute?' },
      ],
    },
    {
      baslik: 'Zwischen Geld nehmen und Sterben',
      onceBaslik: 'Charleys Büro',
      onceMetin: 'Willy nahm gerade Geld von Charley; er lehnte zugleich dessen Arbeitsangebot ab.',
      boslukMetin: 'das Geld in der Hand · der abgelehnte Stolz · der Gedanke, der zum ersten Mal Form annimmt · die Versicherung · der Augenblick, in dem das Sterben eine Möglichkeit wird',
      sonraBaslik: 'Einheit 9 (Restaurant)',
      sonraMetin: 'Bald darauf, im Restaurant, bricht alles zusammen.',
      sentez: 'Zwischen dem Geldnehmen und dem Restaurant beginnt ein Gedanke. Der Schauspieler baut, wann das Sterben für Willy von einem fernen Schatten zu einer konkreten Möglichkeit wurde.',
      altSorular: [
        { soru: 'Was fühlte Willy, als er das Geld von Charley nahm, das er nicht zurückzahlen konnte?' },
        { soru: 'Wann verwandelte sich der Gedanke an die Versicherung in einen Plan?' },
        { soru: 'Wo in seinem Körper trägt Willy diesen Augenblick zwischen Geld und Tod?' },
      ],
    },
    {
      baslik: 'Die Zeit in der Restauranttoilette',
      onceBaslik: 'Frank\'s Chop House',
      onceMetin: 'Die Söhne ließen Willy auf der Toilette zurück und gingen; er bleibt allein, gefangen in der Boston-Erinnerung.',
      boslukMetin: 'der allein zurückgelassene Mann · die Erinnerung, die nicht endet · das Wasser, das Gesicht im Spiegel · die Zeit, sich zu sammeln, die nicht reicht · das Heraustreten in eine andere Welt',
      sonraBaslik: 'Einheit 10 (Garten)',
      sonraMetin: 'Willy kehrt nach Hause zurück und sät nachts Samen im Garten.',
      sentez: 'Miller zeigt nicht, was Willy in der Toilette allein durchlebte. Der Schauspieler baut diese Zeit — wie kam Willy aus der Boston-Erinnerung wieder heraus, und als wer trat er auf die Straße?',
      altSorular: [
        { soru: 'Wie lange blieb Willy allein in der Toilette, und was tat er dort?' },
        { soru: 'Sah er in den Spiegel — konnte er sein Gesicht ansehen?' },
        { soru: 'Wo in seinem Körper trug er den Augenblick, als die Söhne ihn zurückließen?' },
      ],
    },
    {
      baslik: 'Allein — nach Hause oder anderswohin?',
      onceBaslik: 'Frank\'s Chop House',
      onceMetin: 'Willy verlässt das Restaurant allein, die Söhne sind fort.',
      boslukMetin: 'der Mann allein auf der nächtlichen Straße · der Weg nach Hause oder anderswohin · die Blumen, die er kaufen will · die Schuld, die er gutmachen will · der Augenblick der Entscheidung, heimzukehren',
      sonraBaslik: 'Einheit 10 (Garten)',
      sonraMetin: 'Willy kommt nach Hause und beginnt, im Garten Samen zu säen — ein verzweifeltes Ringen, etwas wachsen zu lassen.',
      sentez: 'Zwischen dem Restaurant und dem Garten geht Willy einen Weg allein. Der Schauspieler baut, was in jenem Augenblick durch Willys Kopf ging — und warum er sich entschied, nach Hause zu gehen.',
      altSorular: [
        { soru: 'Wohin wollte Willy zuerst gehen, als er das Restaurant verließ?' },
        { soru: 'Warum kaufte er Samen — was wollte er wachsen lassen?' },
        { soru: 'Wo in seinem Körper trug er die Entscheidung, nach Hause zu gehen?' },
      ],
    },
    {
      baslik: 'Mitternachtsgarten',
      onceBaslik: 'Der Garten',
      onceMetin: 'Willy sät im dunklen Garten Samen und bespricht zugleich mit Bens Geist den Versicherungsplan.',
      boslukMetin: 'der Mann, der im Dunkeln pflanzt · die Saat, die nicht aufgehen wird · das Gespräch mit dem Geist · die letzte Rechnung · der Augenblick zwischen Leben und Tod',
      sonraBaslik: 'Einheit 10 (letzte Auseinandersetzung)',
      sonraMetin: 'Aus dem Garten geht Willy zur letzten Auseinandersetzung mit Biff über.',
      sentez: 'Miller zeigt den Garten, aber nicht vollständig, was in Willy vorgeht, während er pflanzt. Der Schauspieler baut diesen Augenblick — ist das Pflanzen ein Akt der Hoffnung oder des Abschieds?',
      altSorular: [
        { soru: 'Warum musste Willy mitten in der Nacht pflanzen — was suchte er im Dunkeln?' },
        { soru: 'Glaubte er wirklich, dass die Saat aufgehen würde, oder war es eine letzte Geste?' },
        { soru: 'Wo in seinem Körper trug er das Gespräch mit dem Geist über den Tod?' },
      ],
    },
  ],
};

export default willyDE;
