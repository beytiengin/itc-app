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

// IMZA: DE-WILLY-FULL-01 — Willy DE TAM (W1-W4): iliskiler+tercihler+oyunOncesi+sahnelerWorkbook(+yuruyus)+boslukSet(+yuruyus)+sahneler+bosluklar+antrenmanlar(+soru/vak) · 0 gerçek eksik · TASLAK
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

  iliskiler: ['Linda', 'Biff', 'Happy', 'Ben (Geist)', 'Charley', 'Bernard', 'Howard', 'Die Frau in Boston'],

  oyunOncesi: {
    olaylar: [
      {
        baslik: 'Sein Vater verlässt die Familie, als Willy klein ist',
        sahneRef: 'Ben beschreibt den Vater als einen großen, eigenwilligen, unabhängigen Mann.',
        yuk: 'Nie gab es eine Hand, die ihm den Weg wies. Das Grundmisstrauen eines Mannes, der in einer Leere aufwuchs.',
        yansimaSorusu: 'Wo in Willys Körper hat sich die Leere des nie gekannten Vaters festgesetzt?',
        replikIzi: 'Ben über den Vater: ein großer, ungestümer Mann (der Vater, der ging, als Willy ein Säugling war)',
        anlar: [
          {
            soru: 'Die Abwesenheit eines Vaters, den du nie gekannt hast, wuchs mit dir auf. Wo hat sich jene Leere nun in deinem Körper festgesetzt?',
            secenekler: [
              { baslik: 'Ein Mangel', aciklama: 'Eine stets halb gebliebene, nie zu füllende Stelle.', oznelSabit: 'Ich wuchs mit einer namenlosen Leere in mir auf; ich versuchte stets, sie mit anderem zu füllen.' },
              { baslik: 'Ein Hunger zu beweisen', aciklama: 'Das Bedürfnis, sich dem nie gesehenen Vater zu beweisen.', oznelSabit: 'Selbst jemandem, den ich nie gekannt habe, wollte ich mich beweisen.' },
            ],
          },
          {
            soru: 'Wenn du an deinen Vater denkst, hast du kein Bild im Kopf — nur eine Abwesenheit. Hätte jene Abwesenheit einen Klang oder eine Farbe, welche wäre es?',
          },
        ],
      },
      {
        baslik: 'Bruder Ben geht nach Alaska/Afrika, „wird reich“, stirbt früh',
        sahneRef: 'Ben erzählt, wie er als junger Mann in den Dschungel ging und Jahre später als reicher Mann herauskam.',
        yuk: 'Der unerreichbare Mythos des Erfolgs. Der Maßstab, an dem Willy sich misst, den er aber nie erreicht.',
        yansimaSorusu: 'Wie verkleinert Bens „Erfolgsmythos“ Willys eigenes Leben?',
        replikIzi: '„Er ging in den Dschungel hinein — mit 21 — und kam als reicher Mann heraus.“ (Willy über Ben)',
        anlar: [
          {
            soru: 'Jedes Mal, wenn Bens Name fällt, regt sich etwas in dir. Füllst du dich in jenem Augenblick mit Stolz, oder fühlst du dich klein?',
            secenekler: [
              { baslik: 'Ich leuchte vor Stolz', aciklama: 'Ben ist mein Blut; sein Erfolg ist zum Teil auch meiner.', oznelSabit: 'An der Größe eines anderen festhaltend fühlte ich mich groß.' },
              { baslik: 'Im Innern schrumpfe ich', aciklama: 'Neben ihm blieb ich stets unzulänglich; er ist der Maßstab, ich stets darunter.', oznelSabit: 'Ich nahm den Erfolg eines anderen zum Maß und holte ihn mein Leben lang nicht ein.' },
            ],
          },
          {
            soru: 'Als Ben sagte „Komm mit mir“, gingst du nicht. Was war in deinem Kopf, als du jenes „Nein“ gabst — Furcht, Verantwortung, etwas anderes?',
          },
        ],
      },
      {
        baslik: 'Heirat mit Linda, der Ratenkauf des Hauses in Brooklyn',
        sahneRef: 'Linda erwähnt, dass in diesem Monat die letzte Rate abbezahlt wurde.',
        yuk: 'Liebe + Last. Das Gewicht, ein beschützter und zugleich getragener Mann zu sein.',
        yansimaSorusu: 'Ist Lindas Fürsorge für Willy ein Zufluchtsort oder ein Spiegel der Niederlage?',
        replikIzi: 'Linda: „Und dann ist noch die letzte Rate für den Kühlschrank…“ (das auf Raten gegründete Haus)',
        anlar: [
          {
            soru: 'Wenn Linda zu dir kommt, senken sich deine Schultern oder spannen sie sich mehr?',
            secenekler: [
              { baslik: 'Sie senken sich', aciklama: 'Bei ihr fühle ich mich für einen Augenblick sicher; sie ist meine einzige Zuflucht.', oznelSabit: 'Unter dem Schutz eines Menschen konnte ich für einen Augenblick atmen.' },
              { baslik: 'Sie spannen sich', aciklama: 'Ihre Zärtlichkeit erinnert mich an meine Niederlage; ihr Blick ist ein Spiegel.', oznelSabit: 'Vor dem Auge, das mich am meisten liebte, fühlte ich mich am unzulänglichsten.' },
            ],
          },
          {
            soru: 'Dieses Haus, diese Raten habt ihr gemeinsam getragen. Gibt es einen Satz, den du Linda nicht sagen kannst, ihr aber innerlich jeden Tag sagst?',
          },
          {
            soru: 'Stell dir einen Abend mit Linda vor, an dem ihr noch nicht erschöpft seid. Ein Augenblick, der keiner Worte bedarf. Was war in jener Stille — was wusste dein Körper, während du neben ihr saßest?',
          },
        ],
      },
      {
        baslik: 'Die jungen Verkäuferjahre — die Singleman-Legende',
        sahneRef: 'Willy erinnert sich an einen alten Verkäufer und an grüne Samtpantoffeln als Bild eines geehrten Todes.',
        yuk: 'Der Traum, geliebt und anerkannt zu sterben. Der ganze Sinn, den Willy dem Verkäuferdasein zuschreibt.',
        yansimaSorusu: 'Welches Verlangen weckt in Willy das Bild jenes Mannes, der mit 84 noch telefonisch Aufträge entgegennahm?',
        replikIzi: 'Willy: „Er hatte grüne Samtpantoffeln — das vergesse ich nie — und verdiente seinen Lebensunterhalt, ohne sein Zimmer zu verlassen.“ (Dave Singleman)',
        anlar: [
          {
            soru: 'Welches Verlangen reizt in dir das Bild jenes Handlungsreisenden, der mit 84 per Telefon Bestellungen aufnahm und geliebt starb?',
            secenekler: [
              { baslik: 'Geliebt existieren', aciklama: 'Erkannt, erinnert werden; dass ein Zimmer voller Menschen dich liebt.', oznelSabit: 'Erfolg maß ich stets an der Liebe; erkannt zu werden hieß für mich, zu existieren.' },
              { baslik: 'In Ehre enden', aciklama: 'Am Ende eines Lebens noch aufrecht, noch wertvoll sein.', oznelSabit: 'Am meisten wollte ich beweisen, dass ich am Ende noch zu etwas tauge.' },
            ],
          },
          {
            soru: 'Du willst erinnert werden wie jener Handlungsreisende. Wäre deine Beerdigung voll, welchen Satz wünschtest du dir am meisten, dass sie ihn dir nachsprechen?',
          },
          {
            soru: 'Stell dir einen Morgen vor, bevor dich noch jemand erschöpft hat, an dem du zum ersten Mal allein losziehst. Vor dir ein ganzer Tag, eine ganze Stadt. Erinnere, was an jenem Morgen in dir vorging — woran glaubtest du?',
          },
        ],
      },
      {
        baslik: 'Die goldene Zeit von Biff und Happy — die Kindheit',
        sahneRef: 'Eine Erinnerung: das Polieren des Wagens, ein Football-Spiel, die „Loman-Brüder“.',
        yuk: 'Das verlorene Paradies. Die Zeit, als noch alles möglich war, als Biff noch keine Enttäuschung war.',
        yansimaSorusu: 'Was geschieht, wenn die Wärme jener goldenen Kindheit neben dem jetzigen Zusammenbruch steht?',
        replikIzi: 'Happy/Biff: „Loman Brothers! — Den Namen wird jeder kennen!“ (das goldene Kindheitsgedächtnis)',
        anlar: [
          {
            soru: 'Wenn die Wärme jener goldenen Kindheit neben dem heutigen Verfall steht, was geschieht in dir?',
            secenekler: [
              { baslik: 'Wärme', aciklama: 'Jene Tage sind noch lebendig; je mehr ich dorthin zurückkehre, desto mehr wärme ich mich.', oznelSabit: 'Selbst in meinem dunkelsten Augenblick kann ich in die Wärme der Vergangenheit fliehen.' },
              { baslik: 'Kummer', aciklama: 'Jener Glanz lässt den heutigen Sturz noch mehr schmerzen.', oznelSabit: 'Mich an meine schönsten Tage zu erinnern, lässt das Verlorene noch mehr schmerzen.' },
            ],
          },
          {
            soru: 'Es gibt einen Augenblick aus der Zeit der „Loman Brothers“, aus dem du nie heraustreten wolltest. Welcher ist es?',
          },
          {
            soru: 'Erschaffe einen Augenblick, in dem Biff dich bewundernd ansieht. Noch ist nichts zerbrochen. In seinen Augen bist du noch der größte Mann der Welt — fühle jenen Blick auf deinem Gesicht. Wo seid ihr, wie ist das Licht?',
          },
        ],
      },
      {
        baslik: 'Der Beginn des Verhältnisses mit der Frau in Boston',
        sahneRef: 'Eine Erinnerung: ein Hotelzimmer, Strümpfe, das Lachen der Frau.',
        yuk: 'Der Vorwand der Einsamkeit. Das Füllen der Leere des Unterwegsseins — und die verborgene Schuld.',
        yansimaSorusu: 'Was brachte die Einsamkeit unterwegs in Willy zum Schweigen, während sie ihn dorthin trieb?',
        replikIzi: 'Erinnerung: Hotelzimmer, Strümpfe, das Lachen der Frau. (Beginn des Verhältnisses in Boston)',
        anlar: [
          {
            soru: 'Während Willy die Einsamkeit unterwegs trug, was trieb ihn in jenes Zimmer — was brachte er in jenem Augenblick in sich zum Schweigen?',
            secenekler: [
              { baslik: 'Die Unsichtbarkeit', aciklama: 'Die Leere der Wege, auf denen ihn niemand sah.', oznelSabit: 'In den Augenblicken, in denen mich niemand sah, flüchtete ich mich in den Blick eines anderen.' },
              { baslik: 'Die Niederlage', aciklama: 'Die Scham des Mannes, der nicht verkaufen, nicht mithalten kann.', oznelSabit: 'Um meine Unzulänglichkeit zu vergessen, floh ich zu jemandem, der mich wollte.' },
            ],
          },
          {
            soru: 'Als er aus jenem Zimmer nach Hause zu Linda zurückkehrte, trug Willy etwas mit sich. Wenn du jenes namenlose Etwas in einem Wort sagtest, was wäre es?',
          },
          {
            soru: 'Das Hotelzimmer liegt längst zurück. Doch manchmal bleibt selbst Jahre später ein Lachen, ein Strumpf, das Geräusch einer Tür im Körper. Taste die Spur ab, die von jenem Verhältnis blieb — nicht das Ereignis, den Rückstand. Versuche nicht, ihn zu benennen. Bemerke und lass los.',
          },
        ],
      },
      {
        baslik: 'Biff ertappt seinen Vater im Hotel in Boston (1932)',
        sahneRef: 'Biff erkennt den Betrug seines Vaters, eine Tür öffnet sich, und etwas zerbricht für immer.',
        yuk: 'Der Augenblick, in dem die Beziehung für immer zerbrach. Willys tiefste moralische Verletzung.',
        yansimaSorusu: 'Was ist in jenem Augenblick der sich öffnenden Tür in Willys Körper bis heute nicht geschlossen?',
        replikIzi: 'Biff: „Ich weiß, dass du ein Schwindler bist.“ (Boston, die Tür öffnet sich)',
        anlar: [
          {
            soru: 'Als jene Tür sich öffnete, verschwand der Held in Biffs Augen mit einem Schlag. Was blieb in Willys Körper unverschlossen — die Scham oder das Entsetzen, jenen Blick zu verlieren?',
            secenekler: [
              { baslik: 'Scham', aciklama: 'Das nackte Sichtbarwerden der Schuld; das Schrumpfen im eigenen Auge.', oznelSabit: 'Was ich für einen Augenblick verbarg, wurde zur Last, die ich mein Leben lang trug.' },
              { baslik: 'Das Entsetzen des Verlierens', aciklama: 'Der Held in den Augen seines Sohnes wurde für immer ausgelöscht.', oznelSabit: 'In jenem Augenblick verlor ich für immer den Helden in den Augen eines anderen.' },
            ],
          },
          {
            soru: 'In jenem Augenblick steht Biff noch da, vor der Tür. Hätte Willy ihm eine einzige Sache sagen können — keine Erklärung, nur etwas — was wäre es?',
          },
          {
            soru: 'Die Tür öffnete sich, jener Augenblick verging. Doch manche Blicke verlassen den Körper selbst Jahre später nicht. Taste nicht ab, was in Biffs Augen blieb — sondern was in Willys Körper blieb. Wo es sitzt, wie schwer. Dann lass los.',
          },
        ],
      },
      {
        baslik: 'Die verlorenen Jahre nach Boston — Biffs Zerfall, der Westen, das Gefängnis',
        sahneRef: 'Bernard bemerkt, dass Biff sich nach der Rückkehr aus Boston nie mehr gefangen hat.',
        yuk: 'Der Zusammenbruch, für den der Vater sich selbst beschuldigt. Biffs Scheitern als eigene Sünde zu betrachten.',
        yansimaSorusu: 'Wie sehr nimmt Willy Biffs Zerfall auf sich — und wem kann er das gestehen?',
        replikIzi: 'Bernard: „Nachdem er aus Boston zurückkam, fing er sich nie wieder.“ (Biffs Zerfall)',
        anlar: [
          {
            soru: 'Wie sehr nimmst du Biffs Zerfall auf dich — und wem kannst du es gestehen?',
            secenekler: [
              { baslik: 'Er nimmt alles auf sich', aciklama: 'Jener Bostoner Tag zerbrach alles; die Schuld ist ganz seine.', oznelSabit: 'Den Zusammenbruch eines anderen trug ich schweigend als meine eigene Sünde.' },
              { baslik: 'Er weist es zurück', aciklama: 'Die Schuld anzunehmen ist unerträglich; er schiebt sie auf Biffs Faulheit.', oznelSabit: 'Die Schuld, die ich nicht tragen konnte, wählte ich als Fehler eines anderen zu sehen.' },
            ],
          },
          {
            soru: 'Wenn du an die Jahre denkst, in denen Biff sich nicht fing, gibt es einen Satz, den du niemandem sagen kannst. Welcher Satz ist es?',
          },
        ],
      },
    ],
    iliskiler: [
      {
        ad: 'Linda',
        rol: 'EHEFRAU',
        gecmis: 'Junge Ehe, das gemeinsam aufgebaute Haus, die getragenen Hoffnungen.',
        simdi: 'Die ihn seit Jahren trägt, beschützt, sieht. Die den Schlauch fand, aber nichts sagte.',
        iz: 'Zärtlichkeit + stille Hilflosigkeit, im selben Körper.',
        yansimaSorusu: 'Senken sich Willys Schultern, wenn Linda zu ihm kommt, oder spannt er sich mehr an?',
      },
      {
        ad: 'Biff',
        rol: 'ÄLTERER SOHN',
        gecmis: 'Goldenes Kind, der Stolz des Vaters, der Football-Star.',
        simdi: 'Seit Boston zerbrochen. Willys größte Hoffnung und tiefste Wunde zugleich.',
        iz: 'Leidenschaftliche Liebe + Gefühl des Verrats, ein unlösbarer Knoten.',
        yansimaSorusu: 'Welches Alter sieht Willy, wenn er Biff ansieht — die 17 oder die jetzigen 34?',
      },
      {
        ad: 'Happy',
        rol: 'JÜNGERER SOHN',
        gecmis: 'Der zweite Sohn im Schatten, immer auf der Suche nach Aufmerksamkeit.',
        simdi: 'Der den Vater nachahmt, die Lügen fortführt — aber nie wirklich gesehen wird.',
        iz: 'Ein Kind, das gesehen werden will, aber immer übersehen wird.',
        yansimaSorusu: 'Hört Willy Happy wirklich, wenn dieser von seinen eigenen Plänen spricht?',
      },
      {
        ad: 'Ben',
        rol: 'ÄLTERER BRUDER (GEIST)',
        gecmis: 'Die Legende, die in den Dschungel ging, reich herauskam und früh starb.',
        simdi: 'Eine innere Stimme, die als Geist erscheint — der Ruf des Erfolgs und der Flucht.',
        iz: 'Bewunderung + Unzulänglichkeit, ein unermesslicher Maßstab.',
        yansimaSorusu: 'Was in Willys Innerem erzittert, wenn Ben ihn ruft, mit ihm zu gehen?',
      },
      {
        ad: 'Der Vater',
        rol: 'DER VERLASSENDE',
        gecmis: 'Der Mann, der ging, als Willy ein Säugling war, an den er sich nicht erinnert.',
        simdi: 'Existiert als eine Leere — der Ort, von dem der Klang der Flöte kommt.',
        iz: 'Eine ungekannte Sehnsucht, ein unbenanntes Fehlen.',
        yansimaSorusu: 'Bemerkt Willy den Klang der Flöte, wenn er ertönt, oder reagiert nur sein Körper?',
      },
      {
        ad: 'Charley',
        rol: 'NACHBAR',
        gecmis: 'Seit Jahren Nachbar, ein stiller, treuer Freund.',
        simdi: 'Der Mann, der ihm ständig Geld leiht, Arbeit anbietet — aber Willys Stolz berührt.',
        iz: 'Dankbarkeit + Neid + abgelehnte Hilfe.',
        yansimaSorusu: 'Wohin weicht Willys Blick aus, während er von Charley das Geld nimmt?',
      },
      {
        ad: 'Bernard',
        rol: 'SOHN DES NACHBARN',
        gecmis: 'Das „fleißige, aber ungeliebte“ Kind; das Gegenteil von Biff.',
        simdi: 'Ein erfolgreicher Anwalt — alles, was Willy sich für seinen Sohn erträumte, aber nicht Biff.',
        iz: 'Der lebende Beweis des falschen Maßstabs; ein bitterer Vergleich.',
        yansimaSorusu: 'Welche Frage über Biff stellt Bernards Erfolg Willy im Stillen?',
      },
      {
        ad: 'Howard',
        rol: 'CHEF',
        gecmis: 'Der Junge, dem Willy den Namen gab, der die Firma seines Vaters übernahm.',
        simdi: 'Die Autorität, die ihn nach 34 Jahren entlässt. Spielt mit dem Tonbandgerät, hört nicht zu.',
        iz: 'Verratene Treue; ein entwertetes Leben.',
        yansimaSorusu: 'An wen wendet sich Willy in Wahrheit, wenn er von seinen 34 Jahren spricht?',
      },
      {
        ad: 'Die Frau in Boston',
        rol: 'VERGANGENES VERHÄLTNIS',
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
      konum: 'I. Akt · Nacht',
      olay: 'Willy machte sich auf den Weg, musste aber umkehren; er brachte es nicht fertig, weiterzufahren. Linda empfängt ihn an der Tür. Biff ist nach Hause gekommen. Diesmal hat es nicht geklappt.',
      icsel: 'Eine Müdigkeit, die er nicht zugeben kann. Der Körper ergeben, der Geist noch im Widerstand.',
      yuk: 'Die erste Niederlage, die ein Mann ahnt, der noch glauben muss, dass das Morgen voller Versprechen ist.',
      replikIzi: 'Willy kehrt erschöpft heim, der Wagen kam von der Straße ab; Linda fragt besorgt, er wiegelt ab — „nichts passiert“.',
      anlar: [
        {
          soru: 'Du brachst auf, musstest aber umkehren; der Wagen geriet von der Straße ab. Was gesteht dein Körper beim Eintreten durch die Tür, was weist er zurück?',
          secenekler: [
            { baslik: 'Er gesteht die Erschöpfung', aciklama: 'Der Körper ergibt sich; er will nur ruhen.', oznelSabit: 'Selbst wenn mein Körper sich ergibt, leistet mein Geist weiter Widerstand.' },
            { baslik: 'Er weist die Niederlage zurück', aciklama: '„Nichts passiert“ — er will sagen, dass es noch ein Morgen gibt.', oznelSabit: 'Selbst meine erste Ahnung der Niederlage weigerte ich mich, mir einzugestehen.' },
          ],
        },
        {
          soru: 'Du sagst „diesmal hat es nicht geklappt“, doch in dir ist ein anderer Satz. Welcher Satz, den du Linda nicht sagst, ist es?',
        },
      ],
    },
    {
      baslik: 'Helle Tage — Kindheitserinnerung',
      konum: 'I. Akt · Erinnerung',
      olay: 'Biff und Happy sind klein; der Wagen wird poliert, ein Football, die „Loman-Brüder“. Die Zeit, als noch alles möglich war, als Geliebtwerden für Erfolg gehalten wurde.',
      icsel: 'Die Wärme des verlorenen Paradieses — die neben dem jetzigen Zerfall zu Schmerz wird.',
      yuk: 'Die Vergangenheit sickert in die Gegenwart; je mehr Willy in jene Wärme flieht, desto größer wird die jetzige Leere.',
      replikIzi: 'Willy weist die Söhne an, den Wagen gründlich zu putzen — die warme Erinnerung an die goldenen Tage.',
      anlar: [
        {
          soru: 'Du trittst in die Erinnerung; die Kinder sind klein, die Sonne scheint, der Ball in der Hand. Woran glaubt dein Körper, während du in diese Wärme eintrittst?',
          secenekler: [
            { baslik: 'Noch dort', aciklama: 'Dieser Augenblick ist wirklich; alles ist noch möglich, der Zerfall noch nicht geschehen.', oznelSabit: 'Den schönsten Augenblick kann ich neu erleben, als wäre er jetzt.' },
            { baslik: 'Ich kenne den Verlust', aciklama: 'Ich bin in der Wärme, doch ich kenne auch ihr Ende.', oznelSabit: 'Selbst auf meine schönsten Erinnerungen blicke ich, wissend, dass ich sie verlieren werde.' },
          ],
        },
        {
          soru: 'In jener Erinnerung gibt es einen Augenblick, aus dem du nicht heraustreten willst. Welcher ist es — was siehst du, was hörst du?',
        },
      ],
      yuruyus: {
        girisBaslik: 'Helle Tage — baue die Szene',
        girisAciklama: 'I. Akt, Erinnerung. Der Wagen wird poliert, der Football geht von Hand zu Hand, „die Loman-Brüder“. Der Tag, an dem alles noch möglich schien. Diese Szene baust du Schritt für Schritt.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; es bleibt in Szene 2 bei dir.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt einen Schritt aus der Szene zurück. Lass den eben gebauten Augenblick los; atme aus. Kehre zum jetzigen Willy zurück — was bleibt bei dir?',
        esik: {
          komut: 'Dies ist ein Gang. Diese Szene baust du von Anfang bis Ende, Schritt für Schritt — an jeder Station ein Augenblick, eine Wahl. Keine Eile.',
          hitap: 'Tritt den ersten Schritt, wenn du bereit bist.',
          buton: 'Ich beginne',
          adimlar: [
            'Setze zuerst die Szene: Wo bist du, welche Jahreszeit, wie ist das Tageslicht? Lass es in deinem Geist erscheinen.',
            'Bemerke an jeder Station, wo in seinem Körper Willy in jenem Augenblick steht — bemerke es, dann gehe weiter.',
            'Was du wählst, wird deins; es bleibt in dieser Szene bei dir.',
          ],
        },
        istasyonlar: [
          {
            zamanRozet: 'Garten, Morgen',
            acilis: 'Die Kinder sind klein; die Sonne scheint, der Wagen wartet aufs Waschen. Willy zieht die Jacke aus, krempelt die Ärmel hoch.',
            yazmaPlaceholder: 'An diesem Morgen sah ich zuerst…',
            sorular: [
              'Was zog beim Bauen dieses Morgens zuerst deine Aufmerksamkeit auf sich — das Licht, ein Klang, das Gesicht deiner Söhne?',
              'Wo in seinem Körper ist Willy jetzt — in den Schultern, in der Brust?',
            ],
          },
          {
            zamanRozet: 'Der Wagen wird poliert',
            acilis: 'Willy weist die Söhne an, die Scheiben gründlich zu putzen, lobt sie. Die Söhne greifen die Tücher, Willy schaut zu — stolz, lebendig.',
            sorular: [
              'Was geht in Willy vor, während er seine Söhne ansieht?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              secenekler: [
                { baslik: 'Noch dort', aciklama: 'Dieser Augenblick ist wirklich; alles ist noch möglich, der Zerfall noch nicht geschehen.', muhur: 'Vergiss das nicht — den schönsten Augenblick kann ich neu erleben, als wäre er jetzt.', ozet: 'Den schönsten Augenblick erlebte ich, als wäre er jetzt.' },
                { baslik: 'Ich kenne den Verlust', aciklama: 'Ich bin in der Wärme, doch ich kenne auch ihr Ende.', muhur: 'Vergiss das nicht — selbst auf meine schönsten Erinnerungen blicke ich, wissend, dass ich sie verlieren werde.', ozet: 'Ich blickte, wissend, dass ich verlieren würde.' },
              ],
            },
          },
          {
            zamanRozet: '„Die Loman-Brüder!“',
            acilis: 'Die Stimmung, dass jeder ihren Namen kennt; Geliebtwerden gilt als Erfolg. Für Willy ist dieser Augenblick der Beweis, dass ihm die Welt offensteht.',
            yazmaPlaceholder: 'Woran Willy in jenem Augenblick glaubte…',
            sorular: [
              'Woran glaubt Willy, während du diese Begeisterung baust — und wo in deinem Körper fühlst du jenen Glauben?',
            ],
          },
          {
            zamanRozet: 'Der Augenblick, aus dem du nicht heraustreten willst',
            acilis: 'Die Szene ist gebaut; es gibt einen Augenblick darin, an dem die Erinnerung dich festhält, aus dem du nicht heraustreten willst.',
            yazmaPlaceholder: 'Der Augenblick, aus dem ich nicht heraustreten will…',
            sorular: [
              'Welcher Augenblick ist es — was siehst du, was hörst du? Und warum willst du ihn nicht loslassen?',
            ],
          },
        ],
      },
    },
    {
      baslik: 'Kartenspiel mit Charley, Bens Geist',
      konum: 'I. Akt · Küche / Erinnerung',
      olay: 'Charley kommt zum Kartenspielen. Im selben Moment erscheint Bens Geist und ruft das Bild seines Reichtums herauf. Zwei Ebenen überlagern sich.',
      icsel: 'Während die gegenwärtige Hilfe (Charley) abgelehnt wird, ruft der unerreichbare Erfolgsmythos (Ben).',
      yuk: 'Während der echte Freund seinen Stolz berührt, ruft die Legende des toten Bruders ihn nicht ins Leben, sondern in die Flucht.',
      replikIzi: 'Ben über sich: er ging in den Dschungel und kam reich heraus. (Während Charley Karten spielt, erscheint das Gespenst; zwei Ebenen überlagern sich.)',
      anlar: [
        {
          soru: 'Charley spielt dir gegenüber Karten; zugleich ruft Bens Stimme im Innern. Du hörst den lebenden Freund und den toten Bruder. Welcher von beiden erscheint dir wirklicher?',
          secenekler: [
            { baslik: 'Charley — die Gegenwart', aciklama: 'Aus Fleisch und Blut, mir gegenüber; doch er rührt an meinen Stolz.', oznelSabit: 'Als echte Hilfe an meinen Stolz rührte, sah ich über sie hinweg.' },
            { baslik: 'Ben — der Ruf', aciklama: 'Ein Gespenst, doch lebendiger; die Stimme des Erfolgs und der Flucht.', oznelSabit: 'Ich lauschte nicht der Stimme, die mich ins Leben rief, sondern der, die mich zur Flucht rief.' },
          ],
        },
        {
          soru: 'Ben ist nun eine Gewohnheit — die innere Stimme, die in Entscheidungsaugenblicken wiederkehrt. Wann zuletzt, in welchem Augenblick, rief sie dich?',
        },
      ],
      yuruyus: {
        girisBaslik: 'Karten mit Charley, Bens Stimme — baue die Szene',
        girisAciklama: 'I. Akt, Küche. Charley kommt zum Kartenspielen; zugleich erscheint Bens Stimme im Innern. Zwei Zeiten überlagern sich. Diese Szene baust du Schritt für Schritt.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; es bleibt in Szene 3 bei dir.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt einen Schritt aus der Szene zurück. Lass die zwei Ebenen los; atme aus. Kehre zum jetzigen Willy zurück — welche Stimme bleibt bei dir?',
        esik: {
          komut: 'Dies ist ein Gang. Diese Szene baust du Schritt für Schritt — zwei Ebenen überlagern sich: dir gegenüber Charley, im Innern Bens Stimme. Keine Eile.',
          hitap: 'Tritt den ersten Schritt, wenn du bereit bist.',
          buton: 'Ich beginne',
          adimlar: [
            'Baue zuerst die Küche: Nacht, Lampenlicht, der Kartentisch. Charley sitzt dir gegenüber.',
            'Bemerke an jeder Station, wo in seinem Körper Willy in jenem Augenblick steht — bemerke es, dann gehe weiter.',
            'Was du wählst, wird deins; es bleibt in dieser Szene bei dir.',
          ],
        },
        istasyonlar: [
          {
            zamanRozet: 'Charley am Tisch',
            acilis: 'Charley öffnet das Kartenspiel, setzt sich. Eine gewöhnliche Nacht; ein Freund gegenüber.',
            yazmaPlaceholder: 'An Charley sah ich zuerst…',
            sorular: [
              'Was zog beim Bauen von Charley dir gegenüber zuerst deine Aufmerksamkeit auf sich — seine Stimme, seine Geduld, sein Blick auf dich?',
              'Wo in seinem Körper steht Willy jetzt?',
            ],
          },
          {
            zamanRozet: 'Bens Stimme dringt ein',
            acilis: '„Ich ging in den Dschungel hinein, kam reich heraus.“ Bens Stimme mischt sich in die Küche; zwei Ebenen überlagern sich. Charley spricht, doch du bist anderswo.',
            sorular: [
              'Zwei Stimmen zugleich: welche erscheint dir wirklicher — und wo in deinem Körper fühlst du das?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              secenekler: [
                { baslik: 'Charley — die Gegenwart', aciklama: 'Aus Fleisch und Blut, mir gegenüber; doch er rührt an meinen Stolz.', muhur: 'Vergiss das nicht — als echte Hilfe an meinen Stolz rührte, sah ich über sie hinweg.', ozet: 'Echte Hilfe lehnte ich aus Stolz ab.' },
                { baslik: 'Ben — der Ruf', aciklama: 'Ein Gespenst, doch lebendiger; die Stimme des Erfolgs und der Flucht.', muhur: 'Vergiss das nicht — ich lauschte nicht der Stimme, die mich ins Leben rief, sondern der zur Flucht.', ozet: 'Ich folgte nicht dem Ruf ins Leben, sondern dem zur Flucht.' },
              ],
            },
          },
          {
            zamanRozet: 'Stolz und Hilfe',
            acilis: 'Charley bietet Arbeit an oder reicht Geld. Willy kann es nicht nehmen — der Stolz tritt dazwischen. Doch Bens Stimme flüstert noch.',
            yazmaPlaceholder: 'Was in jenem Augenblick in mir zerbrach…',
            sorular: [
              'Während er nicht nehmen kann, was Charley reicht, was zerbricht in Willy?',
            ],
          },
          {
            zamanRozet: 'Welche Stimme bleibt',
            acilis: 'Die Szene ist gebaut. Charley geht; Bens Stimme bleibt. Das ist nun eine Gewohnheit Willys — die innere Stimme, die in Entscheidungsaugenblicken wiederkehrt.',
            yazmaPlaceholder: 'Bens Stimme rief mich zuletzt…',
            sorular: [
              'Wann zuletzt, in welchem Entscheidungsaugenblick, rief dich Bens Stimme? Was tatest du da?',
            ],
          },
        ],
      },
    },
    {
      baslik: 'Linda und der Schlauch',
      konum: 'I. Akt · Wohnzimmer',
      olay: 'Linda erzählt den Söhnen vom Zustand ihres Vaters, von den Selbstmordversuchen, vom versteckten Gasschlauch. Sie sagt, dass man auf ihn achten müsse.',
      icsel: 'Willy ist nicht auf der Bühne, aber jeder Satz lastet auf ihm. Der Schutz und das Gewicht des Gesehenwerdens zugleich.',
      yuk: 'Das stille Entsetzen, das eine Frau trägt; die Wahrheit, der die Söhne sich stellen müssen.',
      replikIzi: 'Linda zu den Söhnen: Jeden Tag steigt sie in den Keller, nimmt den kleinen Gummischlauch und legt ihn zurück — wie könnte sie ihm das ins Gesicht sagen?',
      anlar: [
        {
          soru: 'In dieser Szene fehlt Willy, doch jeder Satz handelt von ihm. Linda sieht ihn, beschützt ihn, findet den Schlauch, sagt aber nichts. Ist Gesehenwerden für Willy ein Schutz oder eine schwerere Last?',
          secenekler: [
            { baslik: 'Schutz', aciklama: 'Ihr Blick ist das Einzige, woran er sich hält; Gesehenwerden hält ihn am Leben.', oznelSabit: 'Gesehenwerden hielt mich am Leben, doch das konnte ich nie eingestehen.' },
            { baslik: 'Last', aciklama: 'Gesehenwerden heißt, Zeuge seines Zusammenbruchs zu sein.', oznelSabit: 'Zu wissen, dass mich jemand sieht, machte das Verbergen meiner Niederlage unmöglich.' },
          ],
        },
        {
          soru: 'Linda hat den Schlauch gefunden, doch nie etwas gesagt. Wüsste Willy das, was würde er ihr sagen wollen — oder welches Schweigen würde er wählen?',
        },
      ],
    },
    {
      baslik: 'Biffs Entscheidung — neue Hoffnung',
      konum: 'I. Akt · Abschluss',
      olay: 'Biff legt seinen Plan dar, sich Geld zu leihen und ein Geschäft zu gründen. Willy gerät plötzlich in Begeisterung, gibt Ratschläge. Der Vorhang fällt mit Hoffnung — einer falschen, aber echten Hoffnung.',
      icsel: 'Für Willy ist dieser Plan die Rettung; für Biff das Besänftigen des Vaters. Zwei verschiedene Hoffnungen am selben Tisch.',
      yuk: 'Der gefährlichste Augenblick ist die Begeisterung — denn von dort ist der Fall am tiefsten.',
      replikIzi: 'Biff und Happy erinnern sich an einen gewissen Oliver — der Plan: ein Darlehen und ein eigenes Geschäft.',
      anlar: [
        {
          soru: 'Als Biff den Geschäftsplan eröffnete, lebtest du plötzlich auf, fingst an, Ratschläge zu geben. Ist diese Begeisterung eine echte Hoffnung oder ein Ast, an den du dich klammerst, um nicht zu fallen?',
          secenekler: [
            { baslik: 'Echte Hoffnung', aciklama: 'Dieser Plan ist die Rettung; ein Morgen ist noch möglich.', oznelSabit: 'Wenn eine Hoffnung erschien, lud ich mein ganzes Gewicht auf sie.' },
            { baslik: 'Ein Ast zum Festhalten', aciklama: 'Wenn ich nicht auflebe, breche ich zusammen; diese Begeisterung ist eine Abwehr.', oznelSabit: 'Der Augenblick, in dem ich am meisten auflebte, war der, in dem ich am meisten fürchtete zu fallen.' },
          ],
        },
        {
          soru: 'Der Vorhang fällt mit Hoffnung — doch wessen Hoffnung? Deine Rettung oder Biffs Bemühen, dich zu beruhigen? Woran glaubtest du in jenem Augenblick wirklich?',
        },
      ],
    },
    {
      baslik: 'Neuer Tag — falsche Hoffnung',
      konum: 'II. Akt · Morgen',
      olay: 'Morgen. Willy ist optimistisch; er will Howard um eine Bürostelle in New York bitten. Linda sagt, die Raten seien abbezahlt. Alles scheint sich zu fügen.',
      icsel: 'Die zerbrechliche Fortsetzung der Begeisterung vom Vorabend im Morgenlicht.',
      yuk: 'Die hellste Gestalt der Hoffnung, kurz vor dem Sturz.',
      replikIzi: 'Linda: Diesen Monat haben wir die letzte Rate bezahlt. (Morgen, „alles wird gut“)',
      anlar: [
        {
          soru: 'Morgenlicht; die Begeisterung der Nacht zuvor liegt noch auf dir. Du wirst zu Howard gehen und einen Bürojob verlangen. Ist der morgendliche Optimismus in dir echt, oder redest du ihn dir ein?',
          secenekler: [
            { baslik: 'Echt', aciklama: 'Heute kann sich wirklich etwas ändern; daran glaube ich.', oznelSabit: 'An jedem neuen Morgen kann ich den Zerfall des Vortags wirklich vergessen.' },
            { baslik: 'Erzwungen', aciklama: 'Wenn ich nicht glaube, halte ich nicht durch; Optimismus ist eine Notwendigkeit.', oznelSabit: 'Ich glaubte, weil ich glauben musste, nicht weil ich glaubte.' },
          ],
        },
        {
          soru: 'Die Raten sind abbezahlt, das Haus gehört nun euch — doch in dir ist eine seltsame Leere. Blicktest du an jenem Morgen in den Spiegel, was würdest du dir sagen?',
        },
      ],
    },
    {
      baslik: 'Howard im Büro — die Entlassung',
      konum: 'II. Akt · Howards Büro',
      olay: 'Willy bittet um eine Bürostelle; Howard spielt mit dem Tonbandgerät, hört nicht zu. Willy beruft sich auf die 34 Jahre, die er der Firma gegeben hat. Am Ende wird er entlassen.',
      icsel: 'Der Augenblick, in dem ein ganzes Leben entwertet wird. Ein Körper, der zwischen Flehen und Zorn schwankt.',
      yuk: 'Verratene Treue; das Kind, dem er den Namen gab, löscht ihn aus.',
      replikIzi: 'Willy beschwört Howard: 34 Jahre habe er der Firma gegeben — man dürfe einen Menschen nicht wie eine ausgepresste Frucht wegwerfen; ein Mensch sei keine Frucht.',
      anlar: [
        {
          soru: 'Howard spielt mit dem Tonbandgerät, hört nicht zu; ein ganzes Leben wird entwertet. Willy schwankt zwischen Flehen und Zorn. Was überwiegt in jenem Augenblick in ihm?',
          secenekler: [
            { baslik: 'Flehen', aciklama: 'Das Bedürfnis, noch wertvoll zu sein, beweisen, angenommen zu werden.', oznelSabit: 'Selbst im Augenblick meiner Entwertung flehte ich um Anerkennung.' },
            { baslik: 'Zorn', aciklama: 'Der Verratszorn darüber, dass das Kind, das er selbst benannte, ihn auslöscht.', oznelSabit: 'Im Augenblick, da ein ganzes Leben entwertet wurde, war mein Zorn das, was ich hinunterschluckte.' },
          ],
        },
        {
          soru: 'Du sagst „ein Mensch ist keine Frucht“. Wen rufst du mit diesem Satz in Wahrheit an — nicht Howard?',
        },
      ],
    },
    {
      baslik: 'Charleys Büro + Bens Alaska-Angebot',
      konum: 'II. Akt · Charleys Büro / Erinnerung',
      olay: 'Willy kommt, um sich Geld zu leihen; er begegnet Bernards Erfolg. Dazwischen tritt die Erinnerung ein, in der er Bens Alaska-Angebot ablehnte — und sich fragt, ob alles anders gekommen wäre.',
      icsel: 'Bernard ist der lebende Beweis all dessen, was er sich für Biff erträumte. Ben ist der Geist des nicht gewählten Weges.',
      yuk: 'Das spät kommende „hätte ich nur“ eines an falschem Maßstab gemessenen Lebens.',
      replikIzi: 'Willy: Sie seien nicht gegangen, ein Fehler — Ben habe ihn doch so angefleht mitzukommen. (Bens Alaska-Angebot, Erinnerung in Charleys Büro)',
      anlar: [
        {
          soru: 'Bernards Erfolg steht dir direkt gegenüber; dazwischen tritt Bens abgelehntes Alaska-Angebot. Zwei Ebenen zugleich: „wäre Biff doch auch so“ und „hätte ich doch jenen Weg gewählt.“ Welche Reue ist tiefer?',
          secenekler: [
            { baslik: 'Um Biff', aciklama: 'Bernard ist alles, was ich mir für meinen Sohn erträumte; doch er ist nicht Biff.', oznelSabit: 'Ich maß meinen Sohn an einem falschen Maßstab und verlor uns beide.' },
            { baslik: 'Um den eigenen Weg', aciklama: 'Ich lehnte Bens Ruf ab; wäre jener Weg offen geblieben, wäre alles anders.', oznelSabit: 'Der Weg, den ich nicht wählte, nagte mein Leben lang in mir: „wäre ich doch gegangen“.' },
          ],
        },
        {
          soru: 'Charley bietet dir Arbeit an, doch du nimmst sie nicht; du bittest um Geld, weichst aber dem Blick aus. Welcher stille Handel spielt sich in jenem Augenblick zwischen dir und deinem Stolz ab?',
        },
        {
          soru: 'Bernard spricht — niemand klagt an, niemand urteilt. Doch manche Sätze bleiben jahrelang im Innern. Bemerke das stille Wissen, das sich nach diesem Gespräch in Willy festsetzt. Benenne es nicht, verteidige dich nicht. Sieh nur, dass es da ist — dann lass los.',
        },
      ],
    },
    {
      baslik: 'Frank\'s Chop House + die Boston-Hotel-Erinnerung',
      konum: 'II. Akt · Restaurant / Boston-Erinnerung',
      olay: 'Im Restaurant versucht Biff, die Wahrheit zu sagen; Willy kann nicht zuhören und fällt in die Erinnerung an das Hotel in Boston — die Frau, die Strümpfe, die sich öffnende Tür, Biffs Anklage. Die Söhne lassen ihn auf der Toilette zurück und gehen.',
      icsel: 'Gegenwart und Vergangenheit brechen zusammen; die tiefste moralische Verletzung bricht genau hier, vor allen, auf.',
      yuk: 'Das erneute Erleben des Augenblicks, in dem die Beziehung für immer zerbrach — Jahre später mit derselben Heftigkeit.',
      replikIzi: 'Biff: Er wisse, dass der Vater ein Schwindler sei. (Die Wahrheit im Restaurant, der Sturz in die Boston-Hotelerinnerung — die Frau, die Strümpfe.)',
      anlar: [
        {
          soru: 'Während Biff im Restaurant spricht, kann Willy ihn nicht mehr hören; sein Geist gleitet ins Bostoner Zimmer. Während Willy dieses Gleiten erlebt — flieht er vor dem Unerträglichen oder kehrt er zu seiner Strafe zurück?',
          secenekler: [
            { baslik: 'Er flieht', aciklama: 'Biffs Worte sind unerträglich; die Vergangenheit öffnet sich wie eine Zuflucht.', oznelSabit: 'In Augenblicken, die ich nicht ertrug, entführt mich mein Geist in eine andere Zeit.' },
            { baslik: 'Er kehrt zu seiner Strafe zurück', aciklama: 'Verurteilt, dieselbe Wunde wieder zu öffnen; die Vergangenheit ruft ihn.', oznelSabit: 'Den Augenblick, dem ich am meisten entfliehen will, erlebe ich am meisten wieder.' },
          ],
        },
        {
          soru: 'Die Tür öffnet sich, die Frau erscheint, die Strümpfe kommen zum Vorschein. Während Willy jenen Augenblick neu erlebt, was bleibt in seinem Körper unverschlossen — die Scham oder das Entsetzen, den Blick in Biffs Augen zu verlieren?',
          secenekler: [
            { baslik: 'Scham', aciklama: 'Das nackte Sichtbarwerden der Schuld; das Schrumpfen im eigenen Auge.', oznelSabit: 'Was ich für einen Augenblick verbarg, wurde zur Last, die ich mein Leben lang trug.' },
            { baslik: 'Das Entsetzen des Verlierens', aciklama: 'Der Held in den Augen seines Sohnes ist nun fort; ein Augenblick ohne Rückkehr.', oznelSabit: 'Als jene Tür sich öffnete, verlor ich für immer den Helden in den Augen eines anderen.' },
          ],
        },
        {
          soru: 'Als die Söhne ihn in der Toilette zurücklassen und gehen, bleibt Willy dort allein. Welcher einzelne Satz würde ihm in jenem Augenblick der Einsamkeit durch den Kopf gehen?',
        },
      ],
      yuruyus: {
        girisBaslik: 'Frank’s Chop House — Boston — baue die Szene von außen',
        girisAciklama: 'II. Akt. Im Restaurant sagt Biff die Wahrheit; Willy kann nicht hören und stürzt in die Erinnerung an das Bostoner Hotel. Diese Szene baust du, ohne sie wiederzuerleben, einen Schritt von außen.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; es bleibt in Szene 9 bei dir.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt zwei Schritte aus der Szene zurück. Lass das Bostoner Zimmer hinter dir; atme tief aus, stelle die Füße auf den Boden. Das ist nicht deine Wunde — es sind Willys Daten. Kehre in die Gegenwart zurück, fühle, dass du die Szene trägst, aber nicht darin bist.',
        esik: {
          komut: 'Diese Szene baust du einen Schritt von außen. Du wirst nicht hineinfallen — das Zimmer, den Augenblick, die Tür baust du wie ein Regisseur. Keine Eile.',
          hitap: 'Tritt den ersten Schritt, wenn du bereit bist.',
          buton: 'Ich beginne',
          adimlar: [
            'Baue zuerst das Restaurant: der Tisch, Biff gegenüber, die Geräusche. Dann beobachte, wie Willys Geist gleitet.',
            'Baue das Bostoner Zimmer von außen — nimm nicht Willys Platz ein, sieh die Szene.',
            'Halte an jeder Station an, wenn nötig, atme. Das ist dein Gang; das Tempo bestimmst du.',
          ],
          yogunlukUyarisi: 'Diese Szene ist schwer. Hier öffnet sich Willys tiefste Wunde. Keine Eile — dies ist ein Gang, kein Wiedererleben. Du baust die Szene einen Schritt von außen. Du kannst jederzeit anhalten; am Ende des Gangs gibt es eine Erdung.',
        },
        istasyonlar: [
          {
            zamanRozet: 'Restaurant — jetzt',
            acilis: 'Frank’s Chop House. Biff gegenüber, versucht die Wahrheit zu sagen. Willy will nicht hören. Baue zuerst diesen Tisch — die Geräusche, das Licht, Biffs Gesicht.',
            yazmaPlaceholder: 'Um nicht zu hören, tat Willy…',
            sorular: [
              'Was tut Willy als Erstes, um Biff nicht zu hören, während dieser spricht — ihn unterbrechen, wegsehen, in die Vergangenheit gleiten?',
            ],
          },
          {
            zamanRozet: 'Der Geist gleitet',
            acilis: 'Biffs Worte werden unerträglich; Willys Geist gleitet ins Bostoner Zimmer. Zwei Zeiten überlagern sich. Beobachte es von außen.',
            sorular: [
              'Während Willy dieses Gleiten erlebt: flieht er vor dem Unerträglichen oder kehrt er zu seiner Strafe zurück? Wo in seinem Körper siehst du dieses Gleiten?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              topraklanmaNotu: 'Halte hier an, wenn du willst. Dies ist Willys Gleiten — nicht deins. Atme, stelle die Füße auf den Boden, fahre fort, wenn du bereit bist.',
              secenekler: [
                { baslik: 'Er flieht', aciklama: 'Biffs Worte sind unerträglich; die Vergangenheit öffnet sich wie eine Zuflucht.', muhur: 'Vergiss das nicht — in Augenblicken, die ich nicht ertrug, entführt mich mein Geist in eine andere Zeit.', ozet: 'Im unerträglichen Augenblick flieht mein Geist in eine andere Zeit.' },
                { baslik: 'Er kehrt zu seiner Strafe zurück', aciklama: 'Verurteilt, dieselbe Wunde wieder zu öffnen; die Vergangenheit ruft ihn.', muhur: 'Vergiss das nicht — den Augenblick, dem ich am meisten entfliehen will, erlebe ich am meisten wieder.', ozet: 'Den Augenblick, dem ich am meisten entfliehe, erlebe ich am meisten wieder.' },
              ],
            },
          },
          {
            zamanRozet: 'Boston — die Tür öffnet sich',
            acilis: 'Das Bostoner Hotel. Die Tür öffnet sich, die Frau erscheint, die Strümpfe kommen zum Vorschein. Biff an der Tür. Baue dieses Zimmer von außen — nimm nicht Willys Platz ein, sieh die Szene.',
            sorular: [
              'Was bleibt für Willy in jenem Augenblick unverschlossen: die Scham oder das Entsetzen, den Blick in Biffs Augen für immer zu verlieren?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              topraklanmaNotu: 'Dies ist der schwerste Augenblick. Halte hier an, wenn nötig, atme. Du baust die Szene, du lebst nicht darin. Fahre fort, wenn du bereit bist.',
              secenekler: [
                { baslik: 'Scham', aciklama: 'Das nackte Sichtbarwerden der Schuld; das Schrumpfen im eigenen Auge.', muhur: 'Vergiss das nicht — was ich für einen Augenblick verbarg, wurde zur Last, die ich mein Leben lang trug.', ozet: 'Was ich einen Augenblick verbarg, wurde lebenslange Last.' },
                { baslik: 'Das Entsetzen des Verlierens', aciklama: 'Der Held in den Augen seines Sohnes ist nun fort; ein Augenblick ohne Rückkehr.', muhur: 'Vergiss das nicht — als jene Tür sich öffnete, verlor ich für immer den Helden in den Augen eines anderen.', ozet: 'Als jene Tür sich öffnete, verlor ich den Helden in einem Auge.' },
              ],
            },
          },
          {
            zamanRozet: 'Allein in der Toilette',
            acilis: 'Die Szene ist gebaut. Die Söhne lassen Willy in der Restauranttoilette zurück und gehen. Er bleibt dort allein — Gegenwart und Vergangenheit zugleich.',
            yazmaPlaceholder: 'Was mir in jenem Augenblick durch den Kopf ging…',
            sorular: [
              'Welcher einzige Satz würde Willy in jenem Augenblick der Einsamkeit durch den Kopf gehen?',
            ],
          },
        ],
      },
    },
    {
      baslik: 'Garten + letzte Auseinandersetzung mit Biff',
      konum: 'II. Akt · Nacht · Garten und Küche',
      olay: 'Willy sät nachts Samen im Garten — ein verzweifeltes Ringen, etwas wachsen zu lassen. Er bespricht mit Ben den Versicherungsplan. Dann die letzte Auseinandersetzung mit Biff: Biff sagt, er sei ein Nichts, und weint. Willy missversteht es als Liebe.',
      icsel: 'Das Bedürfnis, im Dunkeln etwas zu pflanzen; und die Tränen des Sohnes für Liebe zu halten — die letzte Illusion.',
      yuk: 'Der Zwang eines Vaters, selbst die nackte Wahrheit seines Sohnes in seinen eigenen Traum zu verwandeln.',
      replikIzi: 'Willy: „Biff… er liebt mich!“ (Während Biff weinend sagt „Ich bin ein Nichts, Vater“, missversteht Willy ihn.)',
      anlar: [
        {
          soru: 'Im Dunkeln säst du Samen im Garten — ein verzweifeltes Ringen, etwas wachsen zu lassen. Gräbt Willy die Erde in der Hoffnung, etwas für die Zukunft zu hinterlassen, oder aus dem Bedürfnis, sich nützlich zu fühlen?',
          secenekler: [
            { baslik: 'Etwas hinterlassen', aciklama: 'Hinter mir soll etwas Wachsendes bleiben; eine Spur, ein Leben.', oznelSabit: 'Selbst in meinen letzten Augenblicken versuchte ich, hinter mir etwas wachsen zu lassen.' },
            { baslik: 'Nützlich sein', aciklama: 'Meine Hände sollen noch etwas tun können; das Bedürfnis, die Leere zu füllen.', oznelSabit: 'Wenn ich die Leere nicht ertrug, gab ich meine Hände einer Arbeit.' },
          ],
        },
        {
          soru: 'Biff weint und sagt „Ich bin ein Nichts, Vater“; Willy hört es als „Er liebt mich!“ Ist Willy in jenem Augenblick zu blind, um die Wahrheit zu hören, oder zu verzweifelt, um sie hören zu wollen?',
          secenekler: [
            { baslik: 'Er kann nicht sehen', aciklama: 'Selbst die nackte Wahrheit seines Sohnes verwandelt er in seinen eigenen Traum.', oznelSabit: 'Wenn ich die Wahrheit nicht tragen konnte, verwandelte ich sie in meinen eigenen Traum.' },
            { baslik: 'Er wählt, nicht zu hören', aciklama: 'Einen Augenblick sah er die Wahrheit, ertrug sie aber nicht, flüchtete in die Liebe.', oznelSabit: 'Einen Augenblick sah ich die Wahrheit, dann floh ich vor ihr in die Liebe.' },
          ],
        },
        {
          soru: 'Als Biff sich weinend an ihn klammert, vergisst Willy für einen Augenblick alles. Was fühlte Willy in jener Umarmung wirklich — was würde dir an seiner Stelle durch den Kopf gehen?',
        },
      ],
    },
    {
      baslik: 'Das Ende — die Fahrt mit dem Auto',
      konum: 'II. Akt · Nacht · Das Ende',
      olay: 'Nachdem alle schlafen gegangen sind, ist Willy noch auf. Bens Ruf, die Metapher des „Diamanten“. Er steigt ins Auto und fährt. Ein Motorengeräusch, dann Stille — nur der Klang der Flöte bleibt.',
      icsel: 'Die Illusion, sich selbst in ein Geschenk zu verwandeln: seinen Tod als letzten Verkauf, den er seinem Sohn hinterlässt.',
      yuk: 'Willys letzter Augenblick auf der Bühne — die Reise endet hier. (Das Requiem gehört nicht zur Figur; nicht enthalten.)',
      replikIzi: 'Ben: Wer jenen Diamanten will, muss in den Dschungel hineingehen — dort sei es dunkel, doch voller Diamanten. (der letzte Ruf)',
      anlar: [
        {
          soru: 'Alle schlafen; Bens Stimme flüstert „Diamant“. Während Willy zum Wagen geht — hält er den Tod für ein Geschenk, oder weiß er tief im Innern, dass es eine Flucht ist?',
          secenekler: [
            { baslik: 'Er hält ihn für ein Geschenk', aciklama: 'Dies ist der letzte Verkauf; mit der Versicherung wird er Biff retten. Die tragische Blindheit hält bis zum Ende an.', oznelSabit: 'Selbst am Ende glaubte ich mir, indem ich meinen Untergang in ein Geschenk verwandelte.' },
            { baslik: 'Er weiß, dass es eine Flucht ist', aciklama: 'Ergebung unter der Last Bostons, der Entlassung, des Gesehenwerdens.', oznelSabit: 'Von allem, was ich nicht tragen konnte, wählte ich ein letztes Mal die Flucht.' },
          ],
        },
        {
          soru: 'Der Motor läuft an, dann Stille. Was trägt Willy in jenem letzten Augenblick — Niederlage, einen Augenblick Frieden oder die Illusion, Biff gerettet zu haben?',
          secenekler: [
            { baslik: 'Niederlage', aciklama: 'Ein gebrochener, entlassener Mann, der seinen Sohn verloren hat, ergibt sich der Dunkelheit.', oznelSabit: 'Am Ende wusste ich, dass ich unter allem, was ich trug, zerdrückt wurde.' },
            { baslik: 'Ein Augenblick Frieden', aciklama: 'Er geht mit der kurzen Erkenntnis, dass Biff ihn noch liebt.', oznelSabit: 'In meinem letzten Augenblick gab mir das Wissen, dass mich jemand noch liebt, Frieden.' },
          ],
        },
        {
          soru: 'Dies ist Willys letzter Augenblick auf der Bühne. Hätte er, kurz bevor er in den Wagen steigt, einen einzigen Satz sagen können, den niemand hört — welcher wäre es?',
        },
      ],
      yuruyus: {
        girisBaslik: 'Das Ende — die Autofahrt · baue die Szene von außen',
        girisAciklama: 'II. Akt, Nacht. Nachdem alle schlafen gegangen sind, steht Willy noch; Bens „Diamant“-Ruf. Diese letzte Szene baust du, ohne sie wiederzuerleben, einen Schritt von außen.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; es bleibt in Szene 11 bei dir.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt zwei Schritte aus der Szene zurück. Lass die Nacht, das Auto, Bens Stimme hinter dir; atme tief aus, stelle die Füße auf den Boden. Das ist Willys Ende — nicht deins. Kehre in die Gegenwart zurück; fühle, dass du die Szene trägst, aber sie nicht lebst.',
        esik: {
          komut: 'Diese Szene baust du einen Schritt von außen. Du wirst nicht Willys Platz einnehmen — die Nacht, die Stimme, den letzten Gang siehst du wie ein Regisseur. Keine Eile.',
          hitap: 'Tritt den ersten Schritt, wenn du bereit bist.',
          buton: 'Ich beginne',
          adimlar: [
            'Baue zuerst die Nacht: alle sind zu Bett gegangen, das Haus still, Willy steht. Bens Stimme aus der Ferne.',
            'Sieh die Szene von außen — beobachte Willys Entscheidung, ohne zu urteilen, bauend.',
            'Halte an jeder Station an, wenn nötig, atme. Das ist dein Gang; das Tempo bestimmst du.',
          ],
          yogunlukUyarisi: 'Dies ist Willys letzter Augenblick auf der Bühne — eine schwere Szene. Keine Eile; dies ist ein Gang, kein Wiedererleben. Du baust die Szene einen Schritt von außen, wie ein Regisseur — du wirst nicht hineinfallen. Du kannst jederzeit anhalten; am Ende des Gangs gibt es eine Erdung.',
        },
        istasyonlar: [
          {
            zamanRozet: 'Nacht — alle sind zu Bett',
            acilis: 'Das Haus still, alle schlafen. Willy steht allein. Baue zuerst diese Nacht — die Dunkelheit, das Küchenlicht, die Stille draußen.',
            yazmaPlaceholder: 'Was Willy in jener Nacht trug…',
            sorular: [
              'Während Willy in dieser Nacht allein durchs Haus geht, was ist das Schwerste, das er in seinem Körper trägt?',
            ],
          },
          {
            zamanRozet: 'Bens letzter Ruf',
            acilis: 'Wer jenen Diamanten will, muss in den Dschungel hineingehen. Bens Stimme flüstert „Diamant“. Willy geht zum Auto. Beobachte es von außen, bauend.',
            sorular: [
              'Während Willy diesen letzten Ruf hört: hält er den Tod für ein Geschenk, oder weiß er tief im Innern, dass es eine Flucht ist?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              topraklanmaNotu: 'Halte hier an, wenn du willst. Dies ist Willys Entscheidung — nicht deins. Atme, stelle die Füße auf den Boden, fahre fort, wenn du bereit bist.',
              secenekler: [
                { baslik: 'Er hält ihn für ein Geschenk', aciklama: 'Dies ist der letzte Verkauf; mit der Versicherung wird er Biff retten. Die tragische Blindheit hält bis zum Ende an.', muhur: 'Vergiss das nicht — selbst am Ende glaubte ich mir, indem ich meinen Untergang in ein Geschenk verwandelte.', ozet: 'Selbst am Ende verwandelte ich meinen Untergang in ein Geschenk.' },
                { baslik: 'Er weiß, dass es eine Flucht ist', aciklama: 'Ergebung unter der Last Bostons, der Entlassung, des Gesehenwerdens.', muhur: 'Vergiss das nicht — von allem, was ich nicht tragen konnte, wählte ich ein letztes Mal die Flucht.', ozet: 'Von allem, was ich nicht trug, floh ich ein letztes Mal.' },
              ],
            },
          },
          {
            zamanRozet: 'Der Motor, dann Stille',
            acilis: 'Willy steigt ins Auto. Der Motor läuft an, dann Stille — nur die Flöte bleibt. Baue diesen letzten Augenblick von außen; nimm nicht Willys Platz ein.',
            sorular: [
              'Was trägt Willy in jenem letzten Augenblick — Niederlage, oder einen Augenblick Frieden, in dem er begreift, dass Biff ihn noch liebt?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              topraklanmaNotu: 'Dies ist der letzte Augenblick der Szene. Halte hier an, wenn nötig, atme. Du baust die Szene, du lebst nicht darin. Fahre fort, wenn du bereit bist.',
              secenekler: [
                { baslik: 'Niederlage', aciklama: 'Ein gebrochener, entlassener Mann, der seinen Sohn verloren hat, ergibt sich der Dunkelheit.', muhur: 'Vergiss das nicht — am Ende wusste ich, dass ich unter allem, was ich trug, zerdrückt wurde.', ozet: 'Am Ende wurde ich unter allem, was ich trug, zerdrückt.' },
                { baslik: 'Ein Augenblick Frieden', aciklama: 'Er geht mit der kurzen Erkenntnis, dass Biff ihn noch liebt.', muhur: 'Vergiss das nicht — in meinem letzten Augenblick gab mir das Wissen, dass mich jemand noch liebt, Frieden.', ozet: 'In meinem letzten Augenblick gab mir Geliebtsein Frieden.' },
              ],
            },
          },
          {
            zamanRozet: 'Vor dem Auto — der letzte Satz',
            acilis: 'Die Szene ist gebaut. Der Augenblick kurz vor dem Einsteigen ins Auto. Willy dort, an der Schwelle. Das ist sein letzter Augenblick auf der Bühne.',
            yazmaPlaceholder: 'Der letzte Satz, den niemand hört…',
            sorular: [
              'Hätte er kurz vor dem Einsteigen einen einzigen Satz sagen können, den niemand hört — welcher wäre es?',
            ],
          },
        ],
      },
    },
  ],

  tercihler: [
    {
      konu: 'Ben (Onkel Ben)',
      baslik: 'Ist Ben eine echte Erinnerung oder Willys Mythos?',
      isaretler: [
        { ref: 'I. Akt · Bens Ankunft', metin: 'Ben (in mancher Übersetzung „Onkel Tom“) erscheint, verbunden mit dem Bild eines Mannes, dem Diamantenminen gehören. Er existiert allein in Willys Welt.' },
        { ref: 'Das Alaska-Angebot', metin: 'Willy bedauert, nicht mit dem Bruder nach Alaska gegangen zu sein, und nennt ihn ein Genie. Ben ist die stets rufende, nie erreichbare Stimme.' },
      ],
      sentez: 'Ben erscheint auf der Bühne allein in Willys Geist — unbeweisbar, aber für Willy die wirklichste Figur. Der Schauspieler entscheidet über seinen Grad an Wirklichkeit.',
      yorumlar: [
        { baslik: 'Echte Bruder-Erinnerung', aciklama: 'Ben hat gelebt, ein echter Mann; Willy erinnert ihn, wie er war. Der Ruf des Erfolgs kommt von außen.' },
        { baslik: 'Innerer Mythos', aciklama: 'Willy hat einen Götzen geschaffen, an dem er sein Scheitern misst; Ben ist weniger Wirklichkeit als Bedürfnis. Der Ruf kommt von innen.' },
        { baslik: 'Beides zugleich', aciklama: 'Die Erinnerung an einen echten Mann ist mit der Zeit zur Legende geworden; der Schauspieler spielt das Gleiten zwischen Erinnerung und Mythos.' },
      ],
    },
    {
      konu: 'Gleiten in die Vergangenheit',
      baslik: 'Wie gleitet Willy in die Vergangenheit — Demenz, Bewusstseinsstrom oder körperlicher Auslöser?',
      isaretler: [
        { ref: '1. Akt Eröffnung · Flöte', metin: 'Zu Beginn eine Flötenmelodie; die Regieanweisung deutet an, dass Willy die Musik hört, ohne sich ihrer bewusst zu sein. Die Tür zur Vergangenheit öffnet sich über den Klang.' },
        { ref: 'Übergangsanweisungen', metin: 'Die Flöte nähert sich und entfernt sich, das Licht wechselt; Willy gleitet zwischen Gegenwart und Vergangenheit.' },
        { ref: 'Restaurant · Boston-Ausbruch', metin: 'Das härteste Gleiten: vom Restaurant stürzt er ins Hotel in Boston. Er verliert die Kontrolle vollständig.' },
      ],
      sentez: 'Miller schreibt die Übergänge mit Flöte und Licht, erklärt aber nicht das „Warum“. Die Natur des Gleitens wählt der Schauspieler.',
      yorumlar: [
        { baslik: 'Klinische Auflösung', aciklama: 'Alter / geistiger Zerfall; die Übergänge sind unkontrolliert, beängstigend, unwillkürlich.' },
        { baslik: 'Bewusstseinsstrom', aciklama: 'Nicht bewusst, aber bedeutungsvoll; die unterdrückte Vergangenheit tritt an die Oberfläche, der Geist hat seine eigene Logik.' },
        { baslik: 'Körperlicher Auslöser', aciklama: 'Ein Klang oder Gegenstand (Flöte, Strumpf, Feuerzeug) löst die Erinnerung aus; das Gleiten beginnt im Körper und breitet sich dann zum Geist aus.' },
      ],
    },
    {
      konu: 'Linda + die Frau',
      baslik: 'Wie spielt man die Linie von Linda und der Frau?',
      isaretler: [
        { ref: 'Die Strümpfe', metin: 'Linda stopft alte Strümpfe; Willy erträgt das nicht. Der Strumpf trägt die Schuld von Boston stumm auf die Bühne.' },
        { ref: 'Boston · die Frau', metin: 'Die Erinnerung an die Frau erscheint hinter einem Schleier; im Augenblick der Enthüllung vermischen sich die Ebenen.' },
      ],
      sentez: 'Zwei Frauen, eine Achse der Schuld. Das Strumpf-Motiv verbindet sie stumm — Willy gab der Frau Strümpfe, während er es nicht über sich bringt, Lindas stopfen zu lassen.',
      yorumlar: [
        { baslik: 'Liebe vs. Abhängigkeit', aciklama: 'Linda ist reiner Schutz und Liebe; die Frau die Flucht aus der Einsamkeit unterwegs. Zwei verschiedene Bedürfnisse.' },
        { baslik: 'Achse der Schuld', aciklama: 'Linda ist das Gesicht der Unschuld, die Frau das der Sünde; der Schauspieler verbindet beide über das Strumpf-Motiv zu einer Linie.' },
        { baslik: 'Feministische Lesart', aciklama: 'Linda ist die unsichtbare Arbeiterin des Systems; die Frau ein zur Ware gewordener Trost. Beide sind Opfer von Willys Welt.' },
      ],
    },
    {
      konu: 'Die Motivation des Selbstmords',
      baslik: 'Warum stirbt Willy — Versicherung, Ehre oder Scham?',
      isaretler: [
        { ref: 'Schlauch und Versicherung', metin: 'Linda erklärt die Sache mit dem Gummischlauch und der Versicherung. Der Tod ist seit Monaten geplant.' },
        { ref: 'Das Diamant-Bild', metin: 'Ben ruft mit dem Bild des „Diamanten“; Willy sieht den Tod als konkretes Geschenk, das er Biff hinterlässt.' },
      ],
      sentez: 'Der Text nährt alle drei Gründe: die Versicherung über 20.000 Dollar, die Ehre des Verkäufers, die Scham von Boston. Welchen hebt der Schauspieler hervor?',
      yorumlar: [
        { baslik: 'Versicherung — ein Akt der Liebe', aciklama: 'Biff ein Startkapital hinterlassen; ein praktisches, kalkuliertes Opfer. Der Tod als Investition.' },
        { baslik: 'Ehre — der letzte Verkauf', aciklama: 'Das Bedürfnis, sich als „wertvoll“ zu beweisen; der Tod als Vorstellung, der Traum einer großen Beerdigung.' },
        { baslik: 'Scham — die Flucht', aciklama: 'Sich von der Last Bostons, der Entlassung, des Gesehenwerdens befreien. Der Tod als Ergebung.' },
      ],
    },
    {
      konu: 'Der letzte Augenblick',
      baslik: 'Was trägt Willy in seinem letzten Augenblick — Niederlage, Frieden oder Illusion?',
      isaretler: [
        { ref: 'Das Ende · die Autofahrt', metin: 'Bens Ruf, das Bild des „Diamanten“, das Einsteigen ins Auto; ein Motorengeräusch, dann bleibt nur die Flöte.' },
        { ref: 'Requiem (nur Inszenierungsnotiz)', metin: 'Am Grab spricht Linda davon, dass keine Schulden mehr bleiben, dass sie frei seien. ANMERKUNG: Das Requiem ist nach Willys Tod — NICHT Teil der Reise, nur eine Inszenierungsdeutung.' },
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
      konum: 'Nach Boston, über Jahre (1932→) → Szene 1 (Heimkehr)',
      onceBaslik: 'Hotel Boston — die Enthüllung',
      onceMetin: 'Biff sah seinen Vater mit der Frau, nannte ihn einen Betrüger und floh. Willy kehrte von Boston nach Brooklyn zurück.',
      boslukMetin: 'der Mann, der ins Haus tritt · der schweigende Biff · die nichts ahnende Linda · das Nicht-in-die-Augen-sehen-Können · „reiß dich zusammen“ sagen können, aber nicht das Warum · ein Schweigen, das sich über Monate erstreckt',
      sonraBaslik: 'Die Gegenwart des Stücks — die müde Heimkehr',
      sonraMetin: 'In Szene 1 kehrt Willy wieder heim, erschöpft. Die ungeheilte Kälte zwischen ihm und Biff ist nun die Luft des Hauses — die unsichtbare Last unter Szene 1.',
      sentez: 'Miller überspringt auf der Bühne die 15 Jahre zwischen Boston und der Gegenwart des Stücks; wir sehen nur das Ergebnis der Kälte. Der Schauspieler baut in dieser Lücke, wie sich die Kälte festsetzte — das Schweigen in jeder Szene mit Biff nährt sich aus dieser nicht zu füllenden Heimkehr. Die Müdigkeit in Szene 1 ist nicht körperlich, sondern der Name dieser Last.',
      altSorular: [
        { baslik: 'Beziehung', soru: 'Konnte Willy am ersten Abend nach Boston Biff in die Augen sehen — wohin wich sein Blick aus?' },
        { baslik: 'Innerlich', soru: 'Glaubte Willy wirklich, dass Linda nichts wusste, oder wählte er es, nicht zu sehen?' },
        { baslik: 'Körper', soru: 'Gab es einen Augenblick, in dem er in jener Zeit in den Spiegel sah — konnte er sein eigenes Gesicht ansehen, oder sah er es an, ohne es zu sehen?' },
      ],
    },
    {
      baslik: 'Die Geburt von Bens Geist',
      konum: 'Zwischen Erinnerungen → Szene 3 (Charley/Bens Geist)',
      onceBaslik: 'Kartenspiel mit Charley',
      onceMetin: 'Willy spielt mit Charley Karten; während des Gesprächs tritt Bens Geist in seinen Geist, und die Szene gleitet in die Erinnerung.',
      boslukMetin: 'der in Wahrheit gestorbene Ben · die zum ersten Mal gerufene Stimme · ungewiss, ob bewusst oder von selbst · der Bruder, der in einem Augenblick der Entscheidung zurückkehrt · der Mund, der ausspricht, was Willy nicht sagen kann',
      sonraBaslik: 'Ben auf der Bühne — der „diamantenreiche Dschungel“',
      sonraMetin: 'In Szene 3 gibt Bens Geist Willy Ratschläge, flüstert den Erfolgsmythos. Dieser Geist ist nun eine Gewohnheit Willys — die innere Stimme, die in Augenblicken der Entscheidung zurückkehrt.',
      sentez: 'Miller zeigt nie den Augenblick, in dem Ben zum Geist wird — wenn er die Bühne betritt, ist er bereits eine eingewurzelte Gewohnheit. Der Schauspieler baut in dieser Lücke die erste Geburt des Geistes: Für wen existiert Ben? Wenn Ben das ausspricht, was Willy nicht sagen kann, ist der Geist kein Bruder, sondern Willys eigene Stimme. Das setzt sich unter jede Ben-Replik in Szene 3.',
      altSorular: [
        { baslik: 'Zeitlich', soru: 'Wo war Willy, was tat er, als Ben starb — in welchem Augenblick spürte er die Abwesenheit zum ersten Mal in seinem Körper?' },
        { baslik: 'Innerlich', soru: 'War der Augenblick, in dem er den Geist zum ersten Mal rief, ein bewusster Ruf, oder kam er von selbst?' },
        { baslik: 'Beziehung', soru: 'Ist das, was Ben sagt, wirklich Bens, oder das, was Willy sich selbst nicht sagen kann?' },
      ],
    },
    {
      baslik: 'Die Nacht vor dem Gespräch mit Howard',
      konum: 'Einheit 5 (Hoffnung) → Einheit 7 (Howard)',
      onceBaslik: 'Einheit 5 (Hoffnung)',
      onceMetin: 'Der Abend endete voller Hoffnung; morgen wird Willy Howard um eine Bürostelle bitten.',
      boslukMetin: 'die Nacht der Vorbereitung · die geprobten Sätze · das Selbstvertrauen, das wächst und zerfällt · ein Mann, der vor dem Spiegel die Worte sucht',
      sonraBaslik: 'Einheit 7 (Howard)',
      sonraMetin: 'Am Morgen geht Willy mit Hoffnung zu Howard — und wird entlassen.',
      sentez: 'Was geschah in jener Nacht in Willys Körper? Der Schauspieler baut in dieser Lücke die Vorbereitung — wie sicher war Willy wirklich, und wann begann der Zweifel?',
      altSorular: [
        { baslik: 'Innerlich', soru: 'Was sagte Willy in jener Nacht im Stillen zu sich selbst, während er das Gespräch probte?' },
        { baslik: 'Körper', soru: 'Glaubte er wirklich, dass Howard zustimmen würde, oder wusste er es im Innersten schon?' },
        { baslik: 'Beziehung', soru: 'Wo in seinem Körper saß die Spannung jener Nacht?' },
      ],
    },
    {
      baslik: 'Der Augenblick der Ablehnung von Bens Alaska-Angebot',
      konum: 'Ben-Erinnerung (Einheit 8) — der Augenblick des Angebots',
      onceBaslik: 'Bens Besuch',
      onceMetin: 'Ben bietet Willy an, mit ihm nach Alaska zu gehen, ein neues Leben zu beginnen.',
      boslukMetin: 'die nicht gewählte Möglichkeit · die Entscheidung zu bleiben · das Versprechen des Verkäuferdaseins · der Augenblick, in dem das Festhalten am Traum den Weg verschloss',
      sonraBaslik: 'Einheit 8 (Charleys Büro / Erinnerung)',
      sonraMetin: 'Jahre später, in Charleys Büro, kehrt diese Ablehnung als Reue zurück — „hätte ich nur“.',
      sentez: 'Miller zeigt den Augenblick der Entscheidung nur als ferne Erinnerung. Der Schauspieler baut, warum Willy blieb — aus Glauben, aus Angst oder aus Liebe zu Linda?',
      altSorular: [
        { baslik: 'Innerlich', soru: 'Was sagte Willy zu Ben, als er das Angebot ablehnte — und was sagte er sich selbst?' },
        { baslik: 'Beziehung', soru: 'Bereute er die Entscheidung sofort, oder erst Jahre später?' },
        { baslik: 'Körper', soru: 'Wo in seinem Körper trägt Willy diese nicht gewählte Möglichkeit?' },
      ],
    },
    {
      baslik: 'Nach der Entlassung auf der Straße',
      konum: 'Zwischen Howards Büro → Charleys Büro, die Straße → Szene 8',
      onceBaslik: 'Howards Büro — die Entlassung',
      onceMetin: 'Willy wurde gerade entlassen; er verlässt das Büro auf die Straße.',
      boslukMetin: 'der Mann, der eben sein Leben verlor · die Straße · die Schritte ohne Ziel · die noch nicht in Worte gefasste Scham · wohin nun',
      sonraBaslik: 'Einheit 8 (Charleys Büro)',
      sonraMetin: 'Willy geht zu Charley, um sich Geld zu leihen — derselbe Mann, dessen Hilfe er stets ablehnte.',
      sentez: 'Zwischen der Entlassung und Charleys Büro liegt ein Weg, den Miller nicht zeigt. Der Schauspieler baut, was Willy auf jener Straße trug — Zorn, Scham oder die erste klare Ahnung des Endes.',
      yuruyus: {
        girisBaslik: 'Nach der Entlassung auf der Straße — baue die Lücke',
        girisAciklama: 'Howard hat Willy entlassen. Die Zeit vom Verlassen des Büros bis zu Charley überspringt Miller. Jene Straße, jene Entscheidung wirst du bauen.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; es bleibt in Szene 8 bei dir.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt einen Schritt aus der Lücke zurück; atme aus. Bevor du Szene 8 betrittst: Welcher Mann tritt dort ein — noch aufrecht, oder ein innerlich zusammengebrochener Körper? Was trägst du?',
        esik: {
          komut: 'Dies ist ein Gang. Diese Lücke baust du Schritt für Schritt — die vom Text nicht geschriebene Zeit vom Verlassen von Howards Büro bis zu Charley. Keine Eile.',
          hitap: 'Tritt den ersten Schritt, wenn du bereit bist.',
          buton: 'Ich beginne',
          adimlar: [
            'Baue zuerst den Augenblick: Die Bürotür schloss sich hinter dir, du bist auf der Straße. Miller schreibt diesen Gang nicht; du wirst ihn bauen.',
            'Bemerke an jeder Station, wo in seinem Körper Willy in jenem Augenblick steht — bemerke es, dann gehe weiter.',
            'Was du wählst, wird deins; welcher Mann Szene 8 betritt, bestimmt diese Lücke.',
          ],
        },
        istasyonlar: [
          {
            zamanRozet: 'Die Tür schloss sich',
            acilis: 'Howards Bürotür schloss sich hinter dir. Dieselben Straßen, doch ein anderer Mann. Der Satz „34 Jahre habe ich gegeben“ ist noch im Mund.',
            yazmaPlaceholder: 'Als ich auf die Straße trat, zuerst…',
            sorular: [
              'Was sah Willy als Erstes, als er auf die Straße trat — war sein Kopf erhoben oder blickte er zu Boden?',
            ],
          },
          {
            zamanRozet: '„Du bist erledigt“ sinkt in den Körper',
            acilis: 'Während du gehst, dringt etwas in dich — die Wirklichkeit der Entlassung. Nicht dein Kopf, dein Körper begreift es.',
            sorular: [
              'Wohin in deinem Körper sank das Gefühl „du bist erledigt“ — und was tat Willy damit: beschleunigte er, hielt er an?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              secenekler: [
                { baslik: 'Verleugnung — noch aufrecht', aciklama: 'Das kann ich nicht annehmen; es gibt einen Weg, ich gehe weiter.', muhur: 'Vergiss das nicht — selbst als ich wusste, dass ich erledigt war, ging ich, als wüsste ich es nicht.', ozet: 'Selbst wissend, dass ich erledigt war, ging ich, als wüsste ich es nicht.' },
                { baslik: 'Zusammenbruch — innerer Sturz', aciklama: 'Einen Augenblick sank ich in die Knie; mein Körper hörte auf zu tragen.', muhur: 'Vergiss das nicht — auf jener Straße brach ich einen Augenblick innerlich zusammen, im Stehen.', ozet: 'Im Stehen brach ich innerlich zusammen.' },
              ],
            },
          },
          {
            zamanRozet: 'Atem an einer Ecke',
            acilis: 'Einen Augenblick hieltest du an — eine Ecke, eine Wand, ein Schaufenster. Um zu atmen. Niemand kennt dich hier.',
            yazmaPlaceholder: 'An jener Ecke sagte ich mir…',
            sorular: [
              'Was sagtest du dir in jenem Augenblick? Welcher einzige Satz ging dir an der Stelle, wo du standest, durch den Kopf?',
            ],
          },
          {
            zamanRozet: 'Die Entscheidung, zu Charley zu gehen',
            acilis: 'Du hättest nach Hause gehen können. Doch deine Füße wenden sich zu Charley. Die Lücke ist gebaut; du stehst an der Schwelle von Szene 8.',
            yazmaPlaceholder: 'Der Grund, weshalb ich zu Charley ging…',
            sorular: [
              'Warum gingst du zu Charley und nicht zu Linda? Welcher Augenblick traf diese Entscheidung?',
            ],
          },
        ],
      },
      altSorular: [
        { baslik: 'Körper', soru: 'Was tat Willy auf jener Straße, bevor er Charleys Büro betrat — blieb er stehen, setzte er sich, ging er weiter?' },
        { baslik: 'Innerlich', soru: 'Wann verwandelte sich der Zorn über die Entlassung in Scham?' },
        { baslik: 'Beziehung', soru: 'Wo in seinem Körper begann in jenem Augenblick der Gedanke an das Ende?' },
      ],
    },
    {
      baslik: 'Die Tür klopfte — Biffs Stimme',
      konum: 'Im Bostoner Hotel → Szene 9 (Boston-Erinnerung)',
      onceBaslik: 'Hotel Boston',
      onceMetin: 'Willy ist mit der Frau im Hotelzimmer in Boston; es klopft an der Tür.',
      boslukMetin: 'das Klopfen an der Tür · der Augenblick zwischen Erkennen und Verbergen · die Frau, die versteckt werden muss · Biffs Stimme draußen · die Sekunde vor dem Unausweichlichen',
      sonraBaslik: 'Einheit 9 (Boston-Erinnerung)',
      sonraMetin: 'Die Tür öffnet sich, Biff sieht alles, und etwas zerbricht für immer.',
      sentez: 'Miller zeigt das Klopfen, aber nicht den inneren Augenblick davor. Der Schauspieler baut, was in Willy zwischen dem Klopfen und dem Öffnen der Tür geschah.',
      altSorular: [
        { baslik: 'Körper', soru: 'Was dachte Willy in der Sekunde zwischen dem Klopfen und dem Öffnen der Tür?' },
        { baslik: 'Innerlich', soru: 'Wollte er die Frau verstecken, oder wusste er schon, dass es zu spät war?' },
        { baslik: 'Beziehung', soru: 'Wo in seinem Körper sitzt der Klang jenes Klopfens bis heute?' },
      ],
    },
    {
      baslik: 'Von Boston zurück nach Brooklyn',
      konum: 'Bostoner Hotel (Erinnerung Einheit 9) → Heimkehr',
      onceBaslik: 'Hotel Boston — die Enthüllung',
      onceMetin: 'Biff hat alles gesehen und ist gegangen. Willy bleibt allein im Hotelzimmer zurück.',
      boslukMetin: 'die lange Rückfahrt · die Stunden allein · die Sätze, die er Biff sagen wollte · das nicht gefundene Wort · die Ankunft zu Hause als ein anderer Mann',
      sonraBaslik: 'Einheit 9 (Boston-Erinnerung)',
      sonraMetin: 'Diese Erinnerung kehrt Jahre später im Restaurant mit voller Wucht zurück.',
      sentez: 'Miller zeigt die Rückfahrt nicht. Der Schauspieler baut, was Willy auf jenem Weg von Boston nach Brooklyn trug — und welches Wort er nie fand.',
      altSorular: [
        { baslik: 'Körper', soru: 'Was sagte Willy auf der Rückfahrt im Stillen zu sich, was er Biff sagen wollte?' },
        { baslik: 'Innerlich', soru: 'In welchem Augenblick begriff er, dass die Beziehung nicht mehr zu reparieren war?' },
        { baslik: 'Beziehung', soru: 'Wo in seinem Körper trägt Willy diese Rückfahrt bis heute?' },
      ],
    },
    {
      baslik: 'Zwischen Geld nehmen und Sterben',
      konum: 'In Charleys Büro → Szene 9',
      onceBaslik: 'Charleys Büro',
      onceMetin: 'Willy nahm gerade Geld von Charley; er lehnte zugleich dessen Arbeitsangebot ab.',
      boslukMetin: 'das Geld in der Hand · der abgelehnte Stolz · der Gedanke, der zum ersten Mal Form annimmt · die Versicherung · der Augenblick, in dem das Sterben eine Möglichkeit wird',
      sonraBaslik: 'Einheit 9 (Restaurant)',
      sonraMetin: 'Bald darauf, im Restaurant, bricht alles zusammen.',
      sentez: 'Zwischen dem Geldnehmen und dem Restaurant beginnt ein Gedanke. Der Schauspieler baut, wann das Sterben für Willy von einem fernen Schatten zu einer konkreten Möglichkeit wurde.',
      yuruyus: {
        girisBaslik: 'Zwischen Geld nehmen und Sterben — baue die Lücke',
        girisAciklama: 'Charley reichte das Geld, Willy nahm es. Die innere Bewegung bis zum Verlassen des Büros — die Ahnung, dass das Geld nicht von einem Freund, sondern von einer Versicherung kommt — schreibt Miller nicht. Du wirst sie bauen.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; hier wird der Same des Todesgedankens gelegt.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt einen Schritt aus der Lücke zurück; atme aus. Was trägst du beim Verlassen des Büros — eine Schuld, eine Rechnung oder einen Samen?',
        esik: {
          komut: 'Dies ist ein Gang. Diese Lücke baust du Schritt für Schritt — die innere Bewegung vom Annehmen des Geldes bei Charley bis zum Verlassen des Büros. Keine Eile.',
          hitap: 'Tritt den ersten Schritt, wenn du bereit bist.',
          buton: 'Ich beginne',
          adimlar: [
            'Baue zuerst den Augenblick: Charleys Büro, eben reichte er das Geld, du sagtest „du bist mein einziger Freund“.',
            'Bemerke an jeder Station, wo in seinem Körper Willy in jenem Augenblick steht — bemerke es, dann gehe weiter.',
            'Was du wählst, wird deins; der Same dieser Entscheidung bleibt in Szene 9 und danach bei dir.',
          ],
        },
        istasyonlar: [
          {
            zamanRozet: 'Das Geld kommt in die Tasche',
            acilis: 'Charley reichte das Geld. Willy nahm es, ohne zu zählen. Steckte es ein. „Du bist mein einziger Freund.“',
            yazmaPlaceholder: 'Als ich das Geld nahm, waren meine Hände…',
            sorular: [
              'Wie waren Willys Hände, als er das Geld einsteckte — warum zählte er es nicht? Wie fühlte sich das Nichtzählen im Körper an?',
            ],
          },
          {
            zamanRozet: '„Einziger Freund“ — Scham oder Geständnis',
            acilis: 'Der Satz „du bist mein einziger Freund“ kam aus deinem Mund. Konntest du Charley ins Gesicht sehen?',
            sorular: [
              'Was ist dieser Satz für Willy — ein Dank oder ein Geständnis? Wohin blickte er, als er ihn sprach?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              secenekler: [
                { baslik: 'Dank', aciklama: 'Echte Dankbarkeit; der einzige verbliebene Freund.', muhur: 'Vergiss das nicht — inmitten all dessen, was ich verlor, bemerkte ich meinen einzigen Freund zu spät.', ozet: 'Meinen einzigen Freund bemerkte ich, während ich ihn verlor.' },
                { baslik: 'Geständnis', aciklama: 'Das stille Eingeständnis einer Niederlage; ich konnte ihm nicht in die Augen sehen.', muhur: 'Vergiss das nicht — als ich „mein einziger Freund“ sagte, gestand ich in Wahrheit, wie allein ich war.', ozet: 'Jener Satz war das Geständnis meiner Einsamkeit.' },
              ],
            },
          },
          {
            zamanRozet: 'Der Versicherungsgedanke',
            acilis: 'Beim Verlassen des Büros regt sich etwas in deinem Geist — die Versicherung. Der Gedanke, dass der eigene Tod ein „Verkauf“ sein könnte, setzt sich vielleicht hier zum ersten Mal im Körper fest.',
            sorular: [
              'Wie hörte Willy den Versicherungsgedanken, als er ihm in den Sinn kam — als Hoffnung oder als Dunkelheit?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              secenekler: [
                { baslik: 'Hoffnung', aciklama: 'Etwas, das ich Biff hinterlassen kann; ein Ausweg.', muhur: 'Vergiss das nicht — hier begann ich, meinen eigenen Tod wie ein Geschenk zu denken.', ozet: 'Ich begann, meinen Tod wie ein Geschenk zu denken.' },
                { baslik: 'Dunkelheit', aciklama: 'Ein Gedanke, der mich schaudern ließ; doch ich konnte ihn nicht vertreiben.', muhur: 'Vergiss das nicht — jener Gedanke ließ mich schaudern, dennoch vertrieb ich ihn nicht.', ozet: 'Den schaudernden Gedanken vertrieb ich nicht.' },
              ],
            },
          },
          {
            zamanRozet: 'Das Verlassen des Büros',
            acilis: 'Die Lücke ist gebaut. Willy verlässt das Büro — Geld in der Tasche, einen Samen im Geist. Hin zu Szene 9.',
            yazmaPlaceholder: 'Beim Verlassen des Büros dachte ich…',
            sorular: [
              'Welcher einzige Satz würde Willy beim Verlassen des Büros durch den Kopf gehen?',
            ],
          },
        ],
      },
      altSorular: [
        { baslik: 'Körper', soru: 'Was fühlte Willy, als er das Geld von Charley nahm, das er nicht zurückzahlen konnte?' },
        { baslik: 'Beziehung', soru: 'Wann verwandelte sich der Gedanke an die Versicherung in einen Plan?' },
        { baslik: 'Innerlich', soru: 'Wo in seinem Körper trägt Willy diesen Augenblick zwischen Geld und Tod?' },
      ],
    },
    {
      baslik: 'Die Zeit in der Restauranttoilette',
      konum: 'Innerhalb Einheit 9 (Restaurant) — Willy in der Toilette',
      onceBaslik: 'Frank\'s Chop House',
      onceMetin: 'Die Söhne ließen Willy auf der Toilette zurück und gingen; er bleibt allein, gefangen in der Boston-Erinnerung.',
      boslukMetin: 'der allein zurückgelassene Mann · die Erinnerung, die nicht endet · das Wasser, das Gesicht im Spiegel · die Zeit, sich zu sammeln, die nicht reicht · das Heraustreten in eine andere Welt',
      sonraBaslik: 'Einheit 10 (Garten)',
      sonraMetin: 'Willy kehrt nach Hause zurück und sät nachts Samen im Garten.',
      sentez: 'Miller zeigt nicht, was Willy in der Toilette allein durchlebte. Der Schauspieler baut diese Zeit — wie kam Willy aus der Boston-Erinnerung wieder heraus, und als wer trat er auf die Straße?',
      yuruyus: {
        girisBaslik: 'In der Restauranttoilette — baue die Lücke von außen',
        girisAciklama: 'Biff versuchte, die Wahrheit zu sagen, Willy stürzte in die Boston-Erinnerung, die Söhne ließen ihn zurück. Willy floh in die Toilette. Jene einsamsten Minuten schreibt Miller nicht; du wirst sie bauen — einen Schritt von außen.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; welcher Mann zu Szene 10 herauskommt, bestimmt diese Lücke.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt zwei Schritte aus der Lücke zurück. Lass die Toilette, das Echo, die Einsamkeit hinter dir; atme tief aus, stelle die Füße auf den Boden. Das ist nicht deine Einsamkeit — es sind Willys Daten. Kehre in die Gegenwart zurück; fühle, dass du es trägst, aber nicht darin bist.',
        esik: {
          komut: 'Diese Lücke baust du einen Schritt von außen. Du wirst nicht hineinfallen — die Toilette, das Echo, die Einsamkeit baust du wie ein Regisseur. Keine Eile.',
          hitap: 'Tritt den ersten Schritt, wenn du bereit bist.',
          buton: 'Ich beginne',
          adimlar: [
            'Baue zuerst den Augenblick: die Restauranttoilette, die Söhne sind fort, Willy allein. Miller schreibt diese Minuten nicht; du wirst sie bauen.',
            'Sieh Willy von außen — nimm nicht seinen Platz ein, baue die Szene.',
            'Halte an jeder Station an, wenn nötig, atme. Das ist dein Gang; das Tempo bestimmst du.',
          ],
          yogunlukUyarisi: 'Diese Lücke ist schwer. Willy ist mutterseelenallein in der Restauranttoilette, im Echo von Boston. Keine Eile — dies ist ein Gang, kein Wiedererleben. Du baust diesen Augenblick einen Schritt von außen. Du kannst jederzeit anhalten; am Ende des Gangs gibt es eine Erdung.',
        },
        istasyonlar: [
          {
            zamanRozet: 'In der Toilette, allein',
            acilis: 'Die Toilette des Restaurants. Die Tür schloss sich. Willy allein — der Lärm draußen, drinnen Stille.',
            yazmaPlaceholder: 'In der Toilette tat sein Körper…',
            sorular: [
              'Was tat Willys Körper in der Toilette — stand er, kauerte er, vor dem Spiegel?',
            ],
          },
          {
            zamanRozet: 'Das Echo aus Boston',
            acilis: '„Du bist ein Schwindler!“ — das Echo aus Boston kehrt in der Toilette zurück. Jetzt und Vergangenheit ineinander.',
            sorular: [
              'Wie verschränkten sich Vergangenheit (Boston) und Gegenwart (Restaurant) in Willys Geist — welches erschien wirklicher?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              topraklanmaNotu: 'Halte hier an, wenn du willst. Dies ist Willys Echo — nicht deins. Atme, stelle die Füße auf den Boden, fahre fort, wenn du bereit bist.',
              secenekler: [
                { baslik: 'Vergangenheit dominiert', aciklama: 'Boston ist wirklicher als die Gegenwart; als wäre ich dort.', muhur: 'Vergiss das nicht — in meinem unerträglichsten Augenblick war die Vergangenheit wirklicher als die Gegenwart.', ozet: 'Die Vergangenheit war wirklicher als die Gegenwart.' },
                { baslik: 'Gegenwart dominiert', aciklama: 'Das Echo verging; ich bemerkte, dass meine Söhne gegangen waren.', muhur: 'Vergiss das nicht — als das Echo verstummte, war das, was auf mich wartete, meine Einsamkeit.', ozet: 'Als das Echo verstummte, blieb meine Einsamkeit.' },
              ],
            },
          },
          {
            zamanRozet: 'Das Begreifen des Verlassenseins',
            acilis: 'Ein Augenblick kommt — er begreift, dass seine Söhne ihn zurückgelassen haben und gegangen sind. Ganz allein.',
            yazmaPlaceholder: 'Im Augenblick, da ich begriff, verlassen zu sein…',
            sorular: [
              'Wann, wie begriff er, dass seine Söhne ihn verlassen hatten? Was riss in jenem Augenblick in ihm?',
            ],
          },
          {
            zamanRozet: 'Das Verlassen der Toilette',
            acilis: 'Die Lücke ist gebaut. Willy wird die Toilette verlassen — doch der lange Weg nach Hause liegt vor ihm. Du stehst an der Schwelle von Szene 10.',
            yazmaPlaceholder: 'Bevor ich hinausging…',
            sorular: [
              'Was sah er, bevor er die Toilette verließ, wenn er in den Spiegel blicken konnte? Wenn nicht, warum?',
            ],
          },
        ],
      },
      altSorular: [
        { baslik: 'Körper', soru: 'Wie lange blieb Willy allein in der Toilette, und was tat er dort?' },
        { baslik: 'Innerlich', soru: 'Sah er in den Spiegel — konnte er sein Gesicht ansehen?' },
        { baslik: 'Zeitlich', soru: 'Wo in seinem Körper trug er den Augenblick, als die Söhne ihn zurückließen?' },
      ],
    },
    {
      baslik: 'Allein — nach Hause oder anderswohin?',
      konum: 'Nach Frank’s Chop House, die Straße → Szene 10 (vor der Ankunft zu Hause)',
      onceBaslik: 'Frank\'s Chop House',
      onceMetin: 'Willy verlässt das Restaurant allein, die Söhne sind fort.',
      boslukMetin: 'der Mann allein auf der nächtlichen Straße · der Weg nach Hause oder anderswohin · die Blumen, die er kaufen will · die Schuld, die er gutmachen will · der Augenblick der Entscheidung, heimzukehren',
      sonraBaslik: 'Einheit 10 (Garten)',
      sonraMetin: 'Willy kommt nach Hause und beginnt, im Garten Samen zu säen — ein verzweifeltes Ringen, etwas wachsen zu lassen.',
      sentez: 'Zwischen dem Restaurant und dem Garten geht Willy einen Weg allein. Der Schauspieler baut, was in jenem Augenblick durch Willys Kopf ging — und warum er sich entschied, nach Hause zu gehen.',
      yuruyus: {
        girisBaslik: 'Allein — nach Hause oder anderswohin — baue die Lücke von außen',
        girisAciklama: 'Die Söhne sind gegangen. Willy trat auf die Straße, doch seine Füße gingen nicht nach Hause. Die Stunden von 23 Uhr bis Mitternacht schreibt Miller nicht. Dieses Schwanken — nach Hause oder anderswohin — wirst du bauen, einen Schritt von außen.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; dieses Schwanken ist der Vorbote des letzten Wagens in Szene 11.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt zwei Schritte aus der Lücke zurück. Lass die nächtliche Straße, die nicht heimgehenden Füße hinter dir; atme tief aus, stelle die Füße auf den Boden. Das ist nicht deine Nacht — es sind Willys Daten. Kehre in die Gegenwart zurück; fühle, dass du es trägst, aber nicht darin bist.',
        esik: {
          komut: 'Diese Lücke baust du einen Schritt von außen. Du wirst nicht hineinfallen — das leere Restaurant, die nächtliche Straße, die nicht heimgehenden Füße baust du wie ein Regisseur. Keine Eile.',
          hitap: 'Tritt den ersten Schritt, wenn du bereit bist.',
          buton: 'Ich beginne',
          adimlar: [
            'Baue zuerst den Augenblick: die Söhne sind fort, das Restaurant fast leer, Willy tritt auf die Straße — doch nicht nach Hause.',
            'Sieh Willy von außen — nimm nicht seinen Platz ein, baue die Szene.',
            'Halte an jeder Station an, wenn nötig, atme. Das ist dein Gang; das Tempo bestimmst du.',
          ],
          yogunlukUyarisi: 'Diese Lücke ist schwer. Willy probt nachts auf der Straße das „Fortgehen“ in seinem Körper — der Vorbote des letzten Wagens. Keine Eile — dies ist ein Gang, kein Wiedererleben. Du baust diese Stunden einen Schritt von außen. Du kannst jederzeit anhalten; am Ende des Gangs gibt es eine Erdung.',
        },
        istasyonlar: [
          {
            zamanRozet: 'Das leere Restaurant',
            acilis: 'Das fast leere Restaurant. Ob die Rechnung bezahlt ist, bleibt unklar. Willy erhebt sich, zur Straße hin.',
            yazmaPlaceholder: 'Beim Verlassen des Restaurants…',
            sorular: [
              'Wie spät war es, als er das Restaurant verließ — kam ihm jene Zeit lang vor oder wie ein Augenblick?',
            ],
          },
          {
            zamanRozet: 'Die Füße gehen nicht nach Hause',
            acilis: 'Du bist auf der Straße. Linda wartet zu Hause — das weißt du. Doch deine Füße wenden sich nicht nach Hause.',
            sorular: [
              'Setzte er sich irgendwohin — eine Bank, eine Ecke? Warum gingen seine Füße nicht nach Hause?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              topraklanmaNotu: 'Halte hier an, wenn du willst. Dies ist Willys Schwanken — nicht deins. Atme, stelle die Füße auf den Boden, fahre fort, wenn du bereit bist.',
              secenekler: [
                { baslik: 'Ich kann nicht heim — Scham', aciklama: 'Ich kann Linda nicht ins Gesicht sehen; nicht in diesem Zustand.', muhur: 'Vergiss das nicht — der Grund, weshalb ich nicht heimgehen konnte, war nicht der Weg, sondern ein Gesicht, dem ich nicht begegnen konnte.', ozet: 'Ich konnte nicht heim, weil ich einem Gesicht nicht begegnen konnte.' },
                { baslik: 'Anderswohin — fortgehen', aciklama: 'Einen Augenblick dachte ich daran, nie zurückzukehren.', muhur: 'Vergiss das nicht — in jener Nacht probte ich auf der Straße das „Fortgehen“ einmal in meinem Körper.', ozet: 'In jener Nacht probte ich das Fortgehen in meinem Körper.' },
              ],
            },
          },
          {
            zamanRozet: 'Die wartende Linda',
            acilis: 'Du weißt, dass Linda zu Hause wach wartet. Wie wirkt dieses Wissen auf dich?',
            yazmaPlaceholder: 'Zu wissen, dass Linda wartet…',
            sorular: [
              'Beschleunigte das Wissen, dass Linda wartet, Willy, oder verlangsamte es ihn noch mehr?',
            ],
          },
          {
            zamanRozet: 'Endlich nach Hause',
            acilis: 'Die Lücke ist gebaut. Willy kehrt endlich heim — doch in ihm blieb die Probe des „Fortgehens“. An der Schwelle von Szene 10, hin zum Garten.',
            yazmaPlaceholder: 'Bei der Heimkehr dachte ich…',
            sorular: [
              'Im Augenblick, da er sich zur Heimkehr entschied, welcher einzige Satz würde ihm durch den Kopf gehen?',
            ],
          },
        ],
      },
      altSorular: [
        { baslik: 'Zeitlich', soru: 'Wohin wollte Willy zuerst gehen, als er das Restaurant verließ?' },
        { baslik: 'Körper', soru: 'Warum kaufte er Samen — was wollte er wachsen lassen?' },
        { baslik: 'Beziehung', soru: 'Wo in seinem Körper trug er die Entscheidung, nach Hause zu gehen?' },
      ],
    },
    {
      baslik: 'Mitternachtsgarten',
      konum: 'Die letzte Nacht, der Garten → Szene 10 (Garten + letzte Konfrontation mit Biff)',
      onceBaslik: 'Der Garten',
      onceMetin: 'Willy sät im dunklen Garten Samen und bespricht zugleich mit Bens Geist den Versicherungsplan.',
      boslukMetin: 'der Mann, der im Dunkeln pflanzt · die Saat, die nicht aufgehen wird · das Gespräch mit dem Geist · die letzte Rechnung · der Augenblick zwischen Leben und Tod',
      sonraBaslik: 'Einheit 10 (letzte Auseinandersetzung)',
      sonraMetin: 'Aus dem Garten geht Willy zur letzten Auseinandersetzung mit Biff über.',
      sentez: 'Miller zeigt den Garten, aber nicht vollständig, was in Willy vorgeht, während er pflanzt. Der Schauspieler baut diesen Augenblick — ist das Pflanzen ein Akt der Hoffnung oder des Abschieds?',
      yuruyus: {
        girisBaslik: 'Mitternachtsgarten — baue die Lücke von außen',
        girisAciklama: 'Die Söhne ließen ihn im Restaurant zurück; Willy kehrte heim, Linda zornig. Willy ging in den Garten — kalte Nacht, gegrabene Erde, ein halblautes Gespräch mit Ben. Die letzte stille Stunde, in der ein Mann mit sich allein bleibt, wirst du bauen.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; dies ist der Grund unter dem Ben-Gespräch und der Biff-Konfrontation in Szene 10.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt zwei Schritte aus der Lücke zurück. Lass die kalte Nacht, die Erde, Bens Stimme hinter dir; atme tief aus, stelle die Füße auf den Boden. Das ist nicht deine letzte Nacht — es sind Willys Daten. Kehre in die Gegenwart zurück; fühle, dass du es trägst, aber nicht darin bist.',
        esik: {
          komut: 'Diese Lücke baust du einen Schritt von außen. Du wirst nicht hineinfallen — die kalte Nacht, die gegrabene Erde, das halblaute Gespräch mit Ben baust du wie ein Regisseur. Keine Eile.',
          hitap: 'Tritt den ersten Schritt, wenn du bereit bist.',
          buton: 'Ich beginne',
          adimlar: [
            'Baue zuerst die Nacht: die Familie liegt, Linda wartet, ohne es zu zeigen, Willy ist im Garten. Miller schreibt diese stille Stunde nicht; du wirst sie bauen.',
            'Sieh Willy von außen — nimm nicht seinen Platz ein, baue die Szene.',
            'Halte an jeder Station an, wenn nötig, atme. Das ist dein Gang; das Tempo bestimmst du.',
          ],
          yogunlukUyarisi: 'Diese Lücke ist schwer — die letzte stille Stunde, in der Willy mit sich allein bleibt. Keine Eile; dies ist ein Gang, kein Wiedererleben. Du baust diese Nacht einen Schritt von außen. Du kannst jederzeit anhalten; am Ende des Gangs gibt es eine Erdung.',
        },
        istasyonlar: [
          {
            zamanRozet: 'Hinaus in den Garten',
            acilis: 'Die Familie liegt. Linda wartet, ohne es zu zeigen. Willy geht in den Garten — kalte Nacht, ein Spaten in der Hand.',
            yazmaPlaceholder: 'Die Entscheidung, in den Garten zu gehen…',
            sorular: [
              'Wie traf Willy die Entscheidung, in den Garten zu gehen — ein plötzliches Aufstehen oder etwas lang Bedachtes?',
            ],
          },
          {
            zamanRozet: 'Während er die Erde gräbt',
            acilis: 'Im Dunkeln gräbt er die Erde, sät Samen. Kalt. Die Hände in der Erde.',
            sorular: [
              'Was taten seine Hände beim Graben — hastig oder sorgsam? Ist dieser Same eine Hoffnung oder ein Abschied?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              topraklanmaNotu: 'Halte hier an, wenn du willst. Dies ist Willys Nacht — nicht deins. Atme, stelle die Füße auf den Boden, fahre fort, wenn du bereit bist.',
              secenekler: [
                { baslik: 'Hoffnung — etwas wachsen lassen', aciklama: 'Auch im Dunkeln kann etwas wachsen; ich versuche es noch.', muhur: 'Vergiss das nicht — selbst als alles endete, versuchte ich, eine Hoffnung in die Erde zu säen.', ozet: 'Als alles endete, säte ich Hoffnung in die Erde.' },
                { baslik: 'Abschied — eine letzte Arbeit', aciklama: 'Ich wusste, dass ich diesen Samen nicht sehen würde; es war wie ein Abschied.', muhur: 'Vergiss das nicht — jenen Samen säte ich, wissend, dass ich ihn nicht wachsen sehen würde.', ozet: 'Den Samen säte ich, wissend, dass ich ihn nicht sehen würde.' },
              ],
            },
          },
          {
            zamanRozet: 'Halblaut mit Ben',
            acilis: 'Bens Stimme mischt sich in die Nacht — „20.000 Dollar garantiert“. Willy spricht halblaut, mit sich und dem Gespenst.',
            yazmaPlaceholder: 'Während ich mit Ben sprach…',
            sorular: [
              'War Willy in diesem letzten Gespräch mit Ben wirklich überzeugt, oder überredete er sich selbst?',
            ],
          },
          {
            zamanRozet: 'Die letzte stille Stunde',
            acilis: 'Die Lücke ist gebaut. Dies ist die letzte wirkliche Stunde, in der Willy mit sich allein bleibt. Gleich kommt Biff herunter, die letzte Konfrontation beginnt.',
            yazmaPlaceholder: 'In dieser stillen Stunde dachte ich…',
            sorular: [
              'Am Ende dieser stillen Stunde — hätte er einen einzigen Satz sagen können, den niemand hört — welcher wäre es?',
            ],
          },
        ],
      },
      altSorular: [
        { baslik: 'Innerlich', soru: 'Warum musste Willy mitten in der Nacht pflanzen — was suchte er im Dunkeln?' },
        { baslik: 'Körper', soru: 'Glaubte er wirklich, dass die Saat aufgehen würde, oder war es eine letzte Geste?' },
        { baslik: 'Beziehung', soru: 'Wo in seinem Körper trug er das Gespräch mit dem Geist über den Tod?' },
      ],
    },
  ],

  sahneler: [
    {
      label: 'Kehrt erschöpft heim',
      desc: 'Brach auf, musste umkehren. Linda an der Tür. Biff ist gekommen.',
      icDurum: '„Es klappt nicht. Diesmal hat es nicht geklappt.“ Erschöpfung, doch eine Erschöpfung, die er nicht annehmen kann.',
      bosluk: 'Warum kehrte er unterwegs um? In welchem Augenblick entschied er sich?',
    },
    {
      label: 'Erinnerung: Biff & Happy Kindheit',
      desc: 'Die Erinnerung kehrt zurück. Die Kinder jung, strahlend. Bernard in der Nähe. Willy ein Held.',
      icDurum: 'Diese Erinnerungen sind für Willy wirklich — wirklicher als die Gegenwart.',
      bosluk: 'Was löste diese Erinnerung aus? Welcher Klang, Geruch, welches Bild?',
    },
    {
      label: 'Karten mit Charley, Bens Geist',
      desc: 'Er spielt Karten mit Charley. Dann erscheint Ben. Zwei Wirklichkeiten überlagern sich.',
      icDurum: 'Die Grenze zwischen Gegenwart und Erinnerung verwischt. Er spricht mit zwei Menschen zugleich.',
      bosluk: 'Was sagte Charley, als Ben ging? Was hörte Willy?',
    },
    {
      label: 'Linda spricht vom Gasschlauch',
      desc: 'Linda erzählt ihren Söhnen: „Euer Vater will sterben. Ich fand den Schlauch.“',
      icDurum: 'Willy hört es nicht — er ist nicht der auf der Bühne. Doch als Schauspieler weißt du: das wird gesagt.',
      bosluk: 'Was fühlte Linda, als sie den Schlauch fand? Hätte sie es Willy sagen können?',
    },
    {
      label: 'Vor Boston — „ich gehe Arbeit suchen“',
      desc: 'Die Erinnerung vermischt sich. Der junge Willy unterwegs — nach Boston. Doch diesmal eine andere Reise.',
      icDurum: 'Der Vorwand der Einsamkeit. „Nur eine Freundin.“ Doch er weiß — es wird mehr werden.',
      bosluk: 'Konnte er vor jener ersten Bostoner Reise Linda ins Gesicht sehen?',
    },
    {
      label: 'Neuer Tag — falsche Hoffnung',
      desc: 'Linda hat das Frühstück bereitet. Biff geht Arbeit suchen. Willy im Gefühl „alles wird gut“.',
      icDurum: 'Wieder einmal Hoffnung. Doch darunter zittert etwas. Er erinnert sich, dass er zu Howard gehen muss.',
      bosluk: 'Als Linda ihm in die Augen blickte — wie viel des Wahren spiegelte sich darin?',
    },
    {
      label: 'Howard im Büro — die Entlassung',
      desc: 'Howard beschäftigt sich mit dem Tonbandgerät. Willy bittet um Gehalt. Howard entlässt ihn: „Du bist erledigt.“',
      icDurum: '„Ich kannte deinen Vater, er gab mir sein Wort“ — Flucht in die Vergangenheit. Doch Howard hört nicht. „Arbeit = Identität“ bricht zusammen.',
      bosluk: 'Wohin ging er als Erstes, als er das Büro verließ? Ging er auf der Straße?',
    },
    {
      label: 'Erinnerung: Bens Alaska-Angebot',
      desc: 'In der Vergangenheit war Ben gekommen, sagte „komm mit mir nach Alaska“. Linda sagte nein.',
      icDurum: 'Diese Erinnerung schmerzt jetzt. „Wäre ich gegangen — wäre ich ein anderer Mann.“',
      bosluk: 'Warum fügte er sich damals Lindas „bleib“? Bereut er es jetzt?',
    },
    {
      label: 'Charley um Geld bitten',
      desc: 'Charley bietet Arbeit an. Willy lehnt ab — er will nur Geld. Sein Stolz bricht.',
      icDurum: '„Du bist mein einziger Freund“ — Geständnis. Doch „Arbeit kann ich von dir nicht nehmen“ — Stolz.',
      bosluk: 'Hätte er beim Verlassen von Charleys Büro das Geld in der Tasche gezählt oder nicht?',
    },
    {
      label: 'Bostoner Hotel — Biff sieht den Vater mit der Frau',
      desc: 'Erinnerung. Hotelzimmer. Es klopft. Biff kommt. Die Frau kann sich nicht verbergen. Biff sieht alles.',
      icDurum: 'Jener Augenblick ist ein wirklicher Augenblick. Willy kann ihn nicht vergessen — so sehr er ihn auch verdrängt.',
      bosluk: 'Was konnte er im Zimmer, mit der Frau, sagen, nachdem Biff hinausgelaufen war?',
    },
    {
      label: 'Frank’s Chop House — die Söhne verlassen ihn',
      desc: 'Restaurant. Biff will die Wahrheit sagen — „Bill Oliver erinnerte sich nicht an mich.“ Willy hört nicht. Happy macht einer Frau den Hof. Am Ende lassen die Söhne den Vater in der Toilette zurück und gehen.',
      icDurum: 'Einsamkeit. In der Toilette vor dem Spiegel. Boston kehrt in jenem Augenblick zurück.',
      bosluk: 'Als er aus der Toilette kam und durch die Restauranttür auf die Straße trat — weiß er, wer er ist?',
    },
    {
      label: 'Er sät Samen im Garten',
      desc: 'Heimgekehrt. Mitternacht. Im Garten gräbt er — Tomaten, Karotten. Er muss etwas wachsen lassen.',
      icDurum: '„Ein Mann muss eine Spur auf der Welt hinterlassen.“ Der Same ist für ihn keine Hoffnung — ein Trost.',
      bosluk: 'Während er im Garten ist, spricht er mit Ben — was erzählte, fragte, entschied er?',
    },
    {
      label: 'Letzte Konfrontation mit Biff',
      desc: 'Biff umarmt den Vater — „Lass mich los, Vater, ich bin ein Nichts, und du auch.“ Er weint. Willy sieht zum ersten Mal, dass Biff ihn liebt.',
      icDurum: '„He likes me — he likes me!“ Ein Missverständnis. Er liest Liebe als Erfolg.',
      bosluk: 'Der Augenblick, in dem Willy in den Garten ging, nachdem Biff sich in sein Bett zurückgezogen hatte.',
    },
    {
      label: 'Selbstmord mit dem Auto — „Diamant“',
      desc: 'Er bricht auf. Bens Geist neben ihm. „Zwanzigtausend Dollar — für Biff strahlend wie ein Diamant.“',
      icDurum: 'Die letzte Abrechnung. Das ist kein Selbstmord — für ihn ein Opfer. Der letzte Verkauf.',
      bosluk: 'Gab es etwas, worauf er im Haus ein letztes Mal blickte, bevor er ins Auto stieg?',
    },
  ],

  bosluklar: [
    {
      baslik: 'Der Verlust des Vaters',
      konum: 'Vor-Szenario (Kindheit)',
      kisaAciklama: 'Sein Vater verließ ihn früh. Woran erinnert er sich, woran nicht?',
      uzunAciklama: 'Als Willy klein war, ging sein Vater. Ben ist älter — er erinnert sich ein wenig an den Vater. Doch Willy erinnert sich nicht. Er flüchtet sich zu Bens Flöte, „den Flöten, die unser Vater machte“. Diese Lücke — ein nicht erinnerter Vater — formt Willys ganzes Leben.',
      sorular: [
        'Was wird lebendig, wenn er sich an seinen Vater erinnern will — ein Geruch, ein Klang, nichts?',
        'Wann wurde das Gefühl des „Verlassenseins“ zu einer körperlichen Empfindung?',
        'Über seine Mutter wird nichts gesagt — wo war sie?',
        'Was bedeutete ihm der Altersunterschied zwischen ihm und Ben?',
      ],
    },
    {
      baslik: 'Die jungen Verkäuferjahre',
      konum: 'Vor-Szenario (Jugend)',
      kisaAciklama: 'Die Zeiten, an die er glaubte — unterwegs, verheiratet, die Kinder gerade geboren.',
      uzunAciklama: 'Dieser Willy ist ein anderer Mann. Noch kein Boston, noch kein Howard, Biff hat ihn noch nicht durchschaut. Er bricht auf, steigt in einer Stadt in ein Hotel, spricht mit Kunden. Das Gefühl, „ein guter Mann“ zu sein, ist echt. Diese Lücke dient dazu, zu verstehen, „was Willy verlor“.',
      sorular: [
        'Was fühlte der junge Willy, wenn er beim Aufbruch auf das Haus zurückblickte?',
        'Welchen Satz gebrauchte er, wenn er sich den Kunden vorstellte?',
        'Den Tag seines ersten Verkaufs in einer Stadt — wie feierte er die Nacht?',
        'Gäbe es einen Brief, den er Linda schrieb, was würde er schreiben?',
        'Säßen dieser Willy und der jetzige Willy einander gegenüber — was würden sie sich sagen?',
      ],
    },
    {
      baslik: 'Der Vorwand der Einsamkeit',
      konum: 'Vor-Szenario (vor Boston)',
      kisaAciklama: 'Die erste Reise nach Boston — bevor er zur Frau ging.',
      uzunAciklama: 'Das erste Verhältnis mit der Frau in Boston begann nicht an einem Tag. Willy war zuerst allein, dann sprach er, dann trank er Kaffee. In jener ersten Linienführung — im Augenblick, da er sagte „ich bin allein, nur das“ — begann er, sich selbst zu belügen.',
      sorular: [
        'Im Augenblick, da er zum ersten Mal mit jener Frau sprach — was suchte er wirklich?',
        'Wie oft wiederholte er sich den Satz „nur eine Freundin“?',
        'Dachte er an Linda, oder verdrängte er sie?',
        'Konnte er in der ersten Nacht bei der Heimkehr vom Hotel in den Spiegel blicken?',
      ],
    },
    {
      baslik: 'Die Tür klopfte — Biffs Stimme',
      konum: 'Im Bostoner Hotel',
      kisaAciklama: 'Die wenigen Minuten, als Biff in Boston an die Tür klopfte.',
      uzunAciklama: 'Im Hotelzimmer Willy und die Frau. Es klopft. „Mach nicht auf“, sagt die Frau. Willy erstarrt. Dann ruft Biff: „Vater!“ Wie öffnete Willy die Tür? Wie versuchte er, die Frau loszuwerden? Glaubte er, es verbergen zu können?',
      sorular: [
        'Was bewegte sich in seinem Körper, als es zum ersten Mal klopfte?',
        'Im Augenblick, da er Biffs Stimme hörte — erkannte er sie sofort?',
        'Welchen Ton gebrauchte er, als er der Frau „geh“ sagte?',
        'Wie war es, Biffs Gesicht zu sehen, als er die Tür öffnete?',
        'Warum entschied er sich, Biff nicht nachzulaufen, als dieser rannte?',
      ],
    },
    {
      baslik: 'Heimkehr — das, was nie mehr dasselbe ist',
      konum: 'Nach Boston',
      kisaAciklama: 'Bei der Heimkehr aus Boston etwas zwischen ihm und Biff, das nie mehr dasselbe ist.',
      uzunAciklama: 'Willy kehrte heim. Biff sprach nicht mit ihm. Linda wusste nichts. Diese Lücke — die Wochen, Monate nach Boston — die Zeit, in der Willy Biffs Kälte nicht erklären konnte. Er konnte nur sagen „reiß dich zusammen“.',
      sorular: [
        'Konnte er am ersten Abend der Heimkehr Biff in die Augen sehen?',
        'Dachte er wirklich, dass Linda es nicht bemerkte, oder wollte er es nicht sehen?',
        'Als Biff durch Mathematik fiel — kannte er den wahren Grund?',
        'Gab es in jener Zeit einen Augenblick, in dem er in den Spiegel blickte?',
      ],
    },
    {
      baslik: 'Die Geburt von Bens Geist',
      konum: 'Zwischen Erinnerungen',
      kisaAciklama: 'Ben starb in Wirklichkeit. Wann wurde der Geist geboren?',
      uzunAciklama: 'Ben war wirklich gestorben, bevor Willy ihn rief. Doch Willy ruft ihn. Wann wurde dieser Geist zur Gewohnheit? In welchen Entscheidungsaugenblicken wurde er zurückgerufen? Für wen existiert der Geist — für Ben, für Willy, für die Söhne?',
      sorular: [
        'Wo war Willy, was tat er, als Ben starb?',
        'Der Augenblick, in dem er seine „Abwesenheit“ zum ersten Mal spürte?',
        'Der erste Augenblick, in dem er den Geist rief — war er bewusst oder von selbst?',
        'Was Ben sagt — ist es das, was Willy sagen will?',
      ],
    },
    {
      baslik: 'Mitternachtsgarten',
      konum: 'Zwischen A1 → A2',
      kisaAciklama: 'Jene Nacht, in der er allein im Garten war, während die Familie schlief.',
      uzunAciklama: 'Seine Familie im Bett. Linda schläft nicht — sie wartet auf ihn, ohne es zu zeigen. Willy im Garten. Er gräbt Samen, spricht mit Ben, die Nacht ist kalt. Diese Lücke — die letzte wirkliche Stunde, in der ein Mann mit sich allein ist.',
      sorular: [
        'Wie traf er die Entscheidung, in den Garten zu gehen — plötzlich oder geplant?',
        'Welche Gedanken gingen ihm beim Graben der Erde durch den Kopf?',
        'Wie laut sprach er, als er mit Ben sprach?',
        'Im Augenblick, da er bemerkte, dass Linda aus dem Garten kam — wollte er es verbergen?',
      ],
    },
    {
      baslik: 'Nach der Entlassung auf der Straße',
      konum: 'Nach Howards Büro',
      kisaAciklama: 'Nach dem Verlassen von Howards Büro, auf dem Weg zu Charley.',
      uzunAciklama: 'Howard sagte „du bist erledigt“. Willy verließ das Büro. Auf der Straße. Dieselben Straßen — doch ein anderer Mann geht jetzt. Es gibt eine Zeit, sich zu entscheiden, zu Charley zu gehen. Was geschah in jener Zeit?',
      sorular: [
        'Was sah er als Erstes, als er auf die Straße trat?',
        'Gab es einen Augenblick, in dem er an einer Ecke anhielt und atmete?',
        'Wie viele Minuten vergingen, bis er daran dachte, zu Charley zu gehen?',
        'Kam ihm in den Sinn, nach Hause zu gehen? Warum ging er nicht?',
      ],
    },
    {
      baslik: 'Zwischen Geld nehmen und Sterben',
      konum: 'In Charleys Büro',
      kisaAciklama: 'Der Augenblick, in dem er Charleys Geld nahm — eine Entscheidung fiel.',
      uzunAciklama: 'Charley reichte das Geld. Willy nahm es. „Du bist mein einziger Freund“, sagte er. Nachdem er diesen Satz gesagt hatte, beim Verlassen des Büros — klärte sich vielleicht hier zum ersten Mal der Versicherungsgedanke.',
      sorular: [
        'Im Augenblick, da er das Geld einsteckte — dachte er daran, wie viel davon zur Versicherung würde?',
        'Sah er Charleys Gesicht, als er „mein einziger Freund“ sagte?',
        'Wollte er beim Verlassen des Büros einen Augenblick anhalten und zurückkehren?',
        'Die Möglichkeit, das Geld zu zählen — warum zählte er es nicht?',
      ],
    },
    {
      baslik: 'Allein — nach Hause oder anderswohin?',
      konum: 'Nach dem Restaurant',
      kisaAciklama: 'Die Söhne sind fort. Willy in der Toilette, dann an der Restauranttür, dann auf der Straße.',
      uzunAciklama: 'Frank’s Chop House. Er kam aus der Toilette. Das Restaurant fast leer. Ob er die Rechnung bezahlte, bleibt unklar. Er trat auf die Straße. Er muss nach Hause, doch seine Füße gehen nicht. Diese Zeit — von 23 Uhr bis Mitternacht — was geschah?',
      sorular: [
        'Wie spät war es, als er das Restaurant verließ?',
        'Setzte er sich irgendwohin — eine Bank, eine Ecke?',
        'Hätte er sein Gesicht verborgen, wäre er einem Bekannten begegnet?',
        'Auf dem Heimweg wusste er, dass Linda wartete — beschleunigte ihn dieses Wissen oder verlangsamte es ihn?',
      ],
    },
    {
      baslik: '„He likes me!“ — als Linda zu ihm kam',
      konum: 'Nach der letzten Konfrontation',
      kisaAciklama: 'Biff weinte, umarmte ihn. Willy verstand es als Liebe.',
      uzunAciklama: 'Biff sagte „ich bin ein Nichts“, weinte. Willy missverstand es: „He likes me!“ Linda ging ins Bett. Willy stand. Bevor er in den Garten ging — was sprachen sie, als Linda zu ihm kam?',
      sorular: [
        'Welches Gesicht setzte er auf, als Linda zu ihm kam?',
        'Sagte er „morgen wird es gut“ oder ließ er es nicht sagen?',
        'Als Linda ging — wusste er, dass er sie zum letzten Mal sah?',
        'Bildete sich die Entscheidung, in den Garten zu gehen, während dieses Gesprächs oder danach?',
      ],
    },
    {
      baslik: 'Am Grab — niemand da, doch Willy hört',
      konum: 'Nach-Szenario',
      kisaAciklama: 'Ein Augenblick, der am Grab blieb, nach der Beerdigung.',
      uzunAciklama: 'Die Beerdigung ist vorbei. Linda, Biff, Happy, Charley, Bernard sind gegangen. Das Grab allein. Doch Willy als Schauspieler ist noch da — er trägt die Figur. Diese Lücke ist nicht für Willy, sondern für den Schauspieler. Der Augenblick, Willy loszulassen.',
      sorular: [
        'Was öffnete, was schloss Willys Leben in dir?',
        'Welches war das schwerste Gefühl, als du ihn in dich aufnahmst?',
        'Was hat dich während der Stunden in dieser Rolle am meisten erschöpft?',
        'Als du Willys „falschen Traum“ losließest — erinnerte er an etwas in deinen eigenen Träumen?',
        'Bevor du dich nun vom Grab erhebst — was möchtest du Willy sagen?',
      ],
    },
  ],

  antrenmanlar: [
    {
      baslik: 'Heimkehr — der erschöpfte Mann',
      altbaslik: 'Rückkehr aus dem Norden, am Rand eines Unfalls',
      girisMetni: 'In dieser Übung gehen wir zu dem Augenblick, in dem Willy aus Yonkers heimkehrt. 63 Jahre alt, ein Handlungsreisender, die Koffer in der Hand, am Steuer ein Mann, der fast zweimal von der Straße abkam. Das Haus steht noch. Linda wartet noch. Doch Willy ist nicht mehr jener Mann — er gesteht es sich nur noch nicht ein.',
      adimlar: [
        {
          metin: 'Setz dich an einen bequemen Ort. Atme einige Male tief. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließe die Augen. Wo ist Willy jetzt? Brooklyn, spät in der Nacht, vor der Tür seines eigenen Hauses. Wie ist die Umgebung, wie sieht das Haus aus, welches Gewicht haben die Koffer in der Hand? Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Eben warst du noch unterwegs. Am Steuer. Zweimal kamst du von der Straße ab — du wirst es Linda sagen, aber beschönigend. Wo in deinem Körper ist diese durchdringende Erschöpfung jetzt am stärksten?',
          soru: 'Wo ist die Erschöpfung?',
        },
        {
          metin: 'Steh auf. Willy ist 63 und sein Körper weiß es. Er trägt den Körper eines Handlungsreisenden von 30 Jahren. Probiere deine Haltung — wie sind die Schultern, der Rücken, die Füße? Wo beginnt die Haltung des erschöpften Mannes?',
          soru: 'Die Qualität der Haltung',
        },
        {
          metin: 'Setz dich. In dir sind zwei Dinge: „Wie erkläre ich das Linda“ und „Wann gehe ich aus diesem Beruf in Rente, wohin geht mein Leben?“ Fallen diese beiden an dieselbe Stelle deines Körpers oder an verschiedene?',
          soru: 'Wo sind die zwei Gedanken?',
        },
        {
          vakSorulari: {
            gorsel: 'Was hast du unterwegs zuletzt gesehen? Grüne Bäume, dein eigenes Gesicht im Glas, deine Kindheit, einen Augenblick Boston? Welches Bild ist jetzt vor deinen Augen?',
            isitsel: 'Am Steuer waren Stimmen in deinem Kopf — wessen Stimme? Lindas, Biffs, Howards, deines eigenen Vaters, deines Bruders Ben? Welche Stimme ist am lautesten?',
            kinestetik: 'Du hast einen Koffer in der Hand, stehst an der Tür. Doch kann dein Körper die Tür wirklich öffnen? Wo in deinen Armen, Knien, deinem Körper ist das „ich kann nicht“?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Lass diesen Satz als Willy innerlich durchgehen: „I am tired to the death.“ (Ich bin todmüde.) Woher kommt dieser Satz? Nur körperliche Erschöpfung oder etwas Tieferes?',
          soru: 'Die Tiefe der Erschöpfung',
        },
        {
          metin: 'Linda ist im Begriff, die Tür zu öffnen. Ein letzter Augenblick, bevor du sie siehst. Was wirst du ihr sagen? Eine Lüge, die Wahrheit, eine halbe Wahrheit? Welche Antwort ist in deinem Körper bereit?',
          soru: 'Was wirst du Linda sagen?',
        },
        {
          metin: 'Atme drei Mal tief. Sag deinen Namen. Du bist hier. Willys Erschöpfung ist dort — du bist jetzt zu dir zurückgekehrt. Trink Wasser. Sitz einige Minuten einfach so.',
        },
      ],
    },
    {
      baslik: 'Das Flehen vor Howard',
      altbaslik: 'Die Auslöschung des Verkäufers von 34 Jahren',
      girisMetni: 'In dieser Übung gehen wir zu dem Augenblick, in dem Willy in das Büro seines Chefs Howard tritt und ihn um Hilfe bittet. 34 Jahre hast du für diese Firma gearbeitet. Der Firmengründer war dein alter Chef — sein Sohn Howard steht dir jetzt gegenüber, 30 Jahre jünger als du, spielt mit dem Tonbandgerät. Du kanntest ihn, bevor er geboren wurde. Jetzt bittest du ihn um Arbeit. Doch er entlässt dich.',
      adimlar: [
        {
          metin: 'Setz dich an einen bequemen Ort. Atme einige Male tief. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließe die Augen. Wo ist Willy jetzt? New York City, Howards Büro. Ein moderner, kalter, fremder Raum. Du warst jahrelang in dieser Firma. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Howard sieht dir nicht in die Augen. Er spielt mit einem neuen Tonbandgerät, lässt dich die Stimme seiner Kinder hören. Du wirst ihn bitten: in New York zu bleiben, eine Arbeit nahe dem Zuhause. Was tut diese Bittstellung mit deinem Körper?',
          soru: 'Wo ist das Flehen?',
        },
        {
          metin: 'Steh auf. Wie ist der Unterschied in deinem Körper zwischen dem alten Willy — der vor Jahren siegreich in dieses Büro zurückkehrte — und dem jetzigen Willy? Wie ist deine Haltung zusammengebrochen?',
          soru: 'Der Zusammenbruch in der Haltung',
        },
        {
          metin: 'Setz dich. Howard sagt zu dir: „Pop, business is business.“ Wohin in deinem Körper trafen diese Worte? „Pop“ — du warst ihm als Kind wie ein Vater. Jetzt bist du mit diesem Wort statt des großen Mannes ein kleiner alter Mann.',
          soru: 'Was tat das Wort „Pop“?',
        },
        {
          vakSorulari: {
            gorsel: 'Während du in Howards Gesicht blickst, erscheint da ein anderes Gesicht in deinem Geist? Vielleicht Howards Vater, vielleicht das Gesicht deiner Familie, vielleicht dein eigenes künftiges Ich?',
            isitsel: 'Howard spielt mit dem Tonbandgerät — die Stimme seines Kindes dringt in den Raum. Was bedeutet diese Stimme für dich? Deine eigene Kindheit, die Kindheit deiner Söhne, etwas Verlorenes?',
            kinestetik: 'Beugte sich dein Körper zum Tisch hin oder zog er sich zurück? Wo sind deine Hände? Gibt es in diesem Raum etwas, vor dem du nicht knien willst?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Lass diesen Satz als Willy innerlich durchgehen: „A man is not a piece of fruit, you can’t just throw him away when he’s no longer sweet.“ (Ein Mensch ist keine Frucht, man wirft ihn nicht weg, wenn er nicht mehr süß ist.) Ist das ein Flehen, ein Zorn, ein Aussprechen der Wahrheit?',
          soru: 'Der Ton des Satzes',
        },
        {
          metin: 'Howard kehrt dir den Rücken. Du bist im Begriff, das Büro zu verlassen — entlassen, nicht freigesprochen. Du verlässt diesen Raum, doch was blieb in dir? Zorn, Scham, Zusammenbruch?',
          soru: 'Was blieb in dir?',
        },
        {
          metin: 'Atme drei Mal tief. Sag deinen Namen. Du bist hier. Willys Scham ist dort — du bist jetzt zu dir zurückgekehrt. Trink Wasser. Sitz einige Minuten einfach so.',
        },
      ],
    },
    {
      baslik: 'Charley um Geld bitten',
      altbaslik: 'Die letzte Grenze des Stolzes',
      girisMetni: 'In dieser Übung gehen wir zu dem Augenblick, in dem Willy seinen Nachbarn Charley um Geld bittet. Du hast Charley stets geringgeschätzt — ein Mann, der keinen Hammer halten kann, ein „weicher“ Mann. Doch du hast erfahren, dass sein Sohn Bernard nun ein erfolgreicher Anwalt ist. Und jetzt musst du Charley um Geld bitten. Das ist keine gewöhnliche Anleihe — das ist die Hierarchie, die dir ins eigene Gesicht schlägt.',
      adimlar: [
        {
          metin: 'Setz dich an einen bequemen Ort. Atme einige Male tief. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließe die Augen. Wo ist Willy jetzt? Charleys Büro, klein, aber gut geordnet. Eben bist du im Flur Bernard begegnet — ein erfolgreicher junger Mann, jetzt Anwalt, bereitet sich auf den Obersten Gerichtshof vor. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Als Bernard ein Junge war, lief er deinem Sohn Biff hinterher. Jetzt ist Bernard Anwalt, Biff treibt sich noch irgendwo herum. Wohin in deinem Körper trifft dieser Vergleich?',
          soru: 'Wo ist der Vergleich?',
        },
        {
          metin: 'Steh auf. Wie ist die Haltung des Willy, der Charley um Geld bitten wird? Eben hast du dieses Büro gescheut, jetzt bist du zurück. Ist deine Haltung aufrecht, gebeugt, dazwischen?',
          soru: 'Der Zustand der Haltung',
        },
        {
          metin: 'Setz dich. Charley bietet dir Arbeit an — ein geregeltes Gehalt, keine Not. Du lehnst ab. Weil es dir wie ein Almosen vorkommt. In dir streiten zwei Dinge: das Bedürfnis nach Geld und der Stolz. Welche Seite ist stärker?',
          soru: 'Welche Seite?',
        },
        {
          vakSorulari: {
            gorsel: 'Du sahst Bernards Gesicht — als Junge war er neben deinen Söhnen ein winziges Kind. Jetzt ein großer Mann. Halte dieses Bild neben Biffs jetzigen Zustand. Welches Bild dominiert?',
            isitsel: 'Charley ruft dich — weich, freundschaftlich, ohne jedes Urteil. Wohin in deinem Körper trifft diese Stimme? Was tut dir die zärtliche Stimme?',
            kinestetik: 'Charley reicht dir das Geld — in deine Hand. Was fühlt diese Bewegung? Streckt sich deine Hand, um zu nehmen, oder zieht sie sich zurück?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Lass diesen Satz als Willy innerlich durchgehen: „I am offering you a job, you don’t want a job, what is it?“ (Ich biete dir eine Arbeit an, du willst keine Arbeit, was ist los?) Charleys Frage. Welche Antwort gibst du dir selbst?',
          soru: 'Deine Antwort',
        },
        {
          metin: 'Nimm das Geld, verlasse Charley. Was tut es deinem Körper, dieses Geld in der Hand zu haben? Erleichterung, eine tiefere Scham, eine seltsame Dankbarkeit?',
          soru: 'Wie ist das Geld in der Hand?',
        },
        {
          metin: 'Atme drei Mal tief. Sag deinen Namen. Du bist hier. Willys Stolz ist dort — du bist jetzt zu dir zurückgekehrt. Trink Wasser. Sitz einige Minuten einfach so.',
        },
      ],
    },
    {
      baslik: 'Die Boston-Erinnerung',
      altbaslik: 'Der Augenblick, in dem Biff seinen Vater sah',
      girisMetni: 'In dieser Übung gehen wir zu dem Augenblick, in dem Willy im Bostoner Hotel von Biff ertappt wird. Das ist keine Erinnerung — für Willy eine stets wiederkehrende Wirklichkeit. Vor Jahren, in einem Hotelzimmer, mit einer anderen Frau. Es klopfte. Du öffnetest. Biff stand dort — 17 Jahre alt, gekommen, um seinen Vater zu sehen, weil er durch Mathematik gefallen war. Und er sah. Und von jenem Augenblick an änderte sich alles.',
      adimlar: [
        {
          metin: 'Diese Übung geht zu einem Augenblick großer Schuld. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließe die Augen. Wo ist Willy jetzt? Boston, ein Hotelzimmer, vor Jahren. Das Bett zerwühlt. Neben dir eine Frau — Miss Francis. Ein Morgen, es klopft. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Du hast die Tür geöffnet. Biff ist da. 17 Jahre alt, ein Funkeln in den Augen. Er ist gekommen, um dir zu sagen, dass der Mathematiklehrer ihn durchfallen ließ. Gekommen, um seinen Vater um Hilfe zu bitten. Wie hältst du dieses Bild in deinem Körper?',
          soru: 'Wie ist es, Biff zu sehen?',
        },
        {
          metin: 'Steh auf. Der Willy in jenem Augenblick — die Tür geöffnet, der Sohn gegenüber, eine andere Frau im Bett. Welche Gestalt nahm dein Körper an? Erstarrt, zurückgezogen, schreiend? Beschreibe es nicht — lass deinen Körper sprechen.',
          soru: 'Die Haltung in jenem Augenblick',
        },
        {
          metin: 'Setz dich. Biff sagte zu dir: „You — you gave her Mama’s stockings!“ (Du — du hast ihr Mamas Strümpfe gegeben!) Wohin traf dich dieser Satz? Die Strümpfe sind ein kleines Detail — doch dieses Detail brachte deine ganze Welt zum Einsturz. Denn für Biff wurden Mamas Strümpfe das greifbare Gegenstück des Verrats.',
          soru: 'Der Strümpfe-Satz',
        },
        {
          vakSorulari: {
            gorsel: 'Sieh Biffs Gesicht. 17 Jahre alt, er vertraute dir. Dann der Augenblick des Blickkontakts. Was geschah in seinem Gesicht? Schock, Verlust, der Einsturz der Welt? Dieses Bild steht noch in deinem Körper.',
            isitsel: 'Welche Geräusche hörtest du in jenem Zimmer? Biffs Atem, das Kichern der Frau, deinen eigenen Atem? Welches Geräusch kommt dir noch?',
            kinestetik: 'Wandte sich dein Körper, um Biff zu berühren, oder zog er sich zurück? Du konntest ihn nicht aufhalten, er ging. Wo setzte sich dieser körperliche Bruch in deinem Körper fest?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Biff ging den Flur hinunter, fort. Du bliebst an der Tür. Lass diesen Satz als Willy innerlich durchgehen: „Biff, please... I gave you an order, Biff!“ (Biff, bitte… Ich gab dir einen Befehl, Biff!) Doch er hörte nicht. Ist dieser Befehl ein Zorn, ein Flehen, ein Selbstschutz?',
          soru: 'Was ist unter dem Satz?',
        },
        {
          metin: 'Jahre vergingen. Doch dieser Augenblick endete nie. Jetzt als Willy — der Mann, der diese Erinnerung trägt — wo in deinem Körper lebt dieser Augenblick? Eine alte Wunde, eine offene Blutung?',
          soru: 'Wo ist die Wunde?',
        },
        {
          metin: 'Diese Übung führte an einen Ort sehr tiefer Schuld. Jetzt kehren wir langsam zurück. Atme drei Mal tief. Sag deinen Namen laut. Sag das heutige Datum. Zähle drei Dinge um dich herum. Boston ist dort — du bist hier, in deinem eigenen Körper. Trink Wasser. Sitz einige Minuten einfach so. Mach eine körperliche Aktivität, wenn der Tag vorbei ist.',
        },
      ],
    },
    {
      baslik: 'Bens Geist',
      altbaslik: 'Die Stimme des Bruders, der Weg, den du nicht gingst',
      girisMetni: 'In dieser Übung gehen wir zu dem Augenblick, in dem Willy ein imaginäres Gespräch mit seinem Bruder Ben führt. Ben ist nicht mehr wirklich — er starb vor Jahren. Doch für Willy ist Ben stets da. Denn Ben hatte es getan: mit 17 ging er in den Dschungel, mit 21 wurde er reich. „When I was seventeen, I walked into the jungle. And when I was twenty-one, I walked out. And by God, I was rich!“ Willy hört diesen Satz jeden Tag. Und fragt sich jeden Tag: Warum bin ich nicht gegangen?',
      adimlar: [
        {
          metin: 'Setz dich an einen bequemen Ort. Atme einige Male tief. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließe die Augen. Wo ist Willy jetzt? Vielleicht der Garten, vielleicht die Küche, vielleicht das Bett vor dem Einschlafen. Ben ist im Begriff zu erscheinen. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Ben tritt dir gegenüber. Größer als du, breitschultrig, einen Koffer in der Hand, als zöge er wieder los. Was tut es deinem Körper, ihn zu sehen? Liebe, Eifersucht, Kleinheit?',
          soru: 'Wie ist es, Ben zu sehen?',
        },
        {
          metin: 'Steh auf. Welcher Willy wirst du neben Ben? Fühlst du dich kleiner, stolz, abwehrend? Probiere deine Haltung.',
          soru: 'Die Haltung neben Ben',
        },
        {
          metin: 'Setz dich. Ben sagt zu dir: „When I was seventeen, I walked into the jungle. And when I was twenty-one, I walked out. And by God, I was rich!“ Was geschieht in deinem Körper, jedes Mal, wenn du diesen Satz hörst? Anders als beim ersten Mal?',
          soru: 'Wohin trifft der Satz?',
        },
        {
          vakSorulari: {
            gorsel: 'Ben ist nicht wirklich — doch er erscheint dir so wirklich. Sein Gesicht, seine Kleidung, seine Schritte in den Dschungel. Ist dieses Bild für dich ein Stolz oder eine Anklage?',
            isitsel: 'Wie ist Bens Stimme? Hart, liebevoll, spöttisch? Stört dich der Ton im Satz „And by God, I was rich!“ oder zieht er dich an?',
            kinestetik: 'Füllt Bens körperliche Anwesenheit deinen Raum? Will dein Körper neben ihm schrumpfen oder wachsen?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Du fragst ihn: „Ben — what is the answer? How did you do it?“ (Ben — was ist die Antwort? Wie hast du es gemacht?) Ist diese Frage ein Lernenwollen, ein Hilfeflehen, eine Eifersucht?',
          soru: 'Was fühltest du beim Fragen?',
        },
        {
          metin: 'Lass diesen Satz als Willy innerlich durchgehen: „Why couldn’t I have made a thing in the jungle?“ (Warum konnte ich nicht im Dschungel etwas erreichen?) Ist das Reue, eine Ausrede, eine Anklage, eine echte Neugier?',
          soru: 'Was ist unter dem Satz?',
        },
        {
          metin: 'Atme drei Mal tief. Ben ist gegangen — er war nicht wirklich. Du bist hier, in deinem eigenen Körper. Sag deinen Namen. Trink Wasser. Sitz einige Minuten einfach so.',
        },
      ],
    },
    {
      baslik: 'Restaurant — die Söhne verlassen ihn',
      altbaslik: '„Where are you guys?“',
      girisMetni: 'In dieser Übung gehen wir zu dem Augenblick, in dem Willy seine Söhne im Restaurant trifft. Biff ging zum Treffen mit Bill Oliver — Willy wartet mit großer Hoffnung. Doch Biff hat es nicht geschafft. Schlimmer noch, er stahl seinen Füllfederhalter. Und jetzt will er es sagen. Doch Willy kann nicht hören. Willy ist in einer anderen Wirklichkeit — in Boston, in den Erinnerungen. Die Söhne lassen ihn am Tisch zurück und gehen. Willy bleibt allein.',
      adimlar: [
        {
          metin: 'Diese Übung geht zu einem sehr intensiven Augenblick des Verlassenwerdens. Fahre fort, wenn du bereit bist.',
        },
        {
          metin: 'Schließe die Augen. Wo ist Willy jetzt? Ein Restaurant in New York, Frank’s Chop House. Ihr Söhne wolltet euch an diesem Abend treffen — es sollte eine Feier werden. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Biff versucht, dir etwas Wahres zu sagen — die Wahrheit zu sagen. Doch du willst nicht hören. Denn wenn du hörst, bricht alles zusammen. Wo in deinem Körper hältst du diesen Wunsch, nicht zu hören?',
          soru: 'Wo ist der Wunsch, nicht zu hören?',
        },
        {
          metin: 'Steh auf. Willy ist an diesem Tisch — sein Kopf anderswo. Wie ist dein Körper an zwei Orten zugleich? Jetzt, in Boston, in den Erinnerungen? Wo in deinem Körper ist dieses Gleiten?',
          soru: 'Wo ist das Gleiten?',
        },
        {
          metin: 'Setz dich. Biff sagte: „Pop, Bill Oliver erinnerte sich nicht an mich. Ich hatte nie für ihn gearbeitet — ich war nur ein Verkäufer.“ Was geschah in deinem Körper, als du diesen Satz hörtest? Ablehnung, Nichtverstehen, Verlust?',
          soru: 'Wohin traf der Satz?',
        },
        {
          vakSorulari: {
            gorsel: 'Die Lichter des Restaurants, der Lärm, die Kellnerinnen — wie sehen sie jetzt aus? Wurden sie weicher, verblassten sie, verwandelten sie sich in einen anderen Ort? Erschien das Bostoner Hotelzimmer?',
            isitsel: 'Sind die Geräusche ringsum — Essen, Gläser, Gelächter — fern geworden? Hörst du an ihrer Stelle Biffs junge Stimme? Die Stimme „You — you gave her Mama’s stockings!“?',
            kinestetik: 'Ist dein Körper auf dem Stuhl, bereit aufzustehen und zu gehen, oder erstarrt? Was tat dein Körper, als du bemerktest, dass deine Söhne gegangen waren?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Die Söhne erhoben sich vom Tisch. Sie ließen zwei Frauen bei dir zurück — Fremde. Du bliebst allein im Restaurant. Lass diesen Satz als Willy innerlich durchgehen: „Where are you guys? Where are you?“ (Wo seid ihr, Jungs? Wo seid ihr?) Ist dieser Ruf eine Furcht, ein Verlust, ein Schlaf?',
          soru: 'Was ist unter dem Ruf?',
        },
        {
          metin: 'Du bliebst allein. Kellner um dich herum. Du kannst nicht mehr halten. Was blieb in dir? Ein Schrei, eine Stille, etwas Tieferes?',
          soru: 'Was blieb in dir?',
        },
        {
          metin: 'Diese Übung führte an einen Ort des Verlassenwerdens. Jetzt kehren wir langsam zurück. Atme drei Mal tief. Sag deinen Namen laut. Sag das heutige Datum. Zähle drei Dinge um dich herum. Das Restaurant ist dort — du bist hier, in deinem eigenen Körper. Trink Wasser. Sitz einige Minuten einfach so. Mach eine körperliche Aktivität, wenn der Tag vorbei ist.',
        },
      ],
    },
    {
      baslik: 'Samen im Garten + die letzte Fahrt',
      altbaslik: 'Im Dunkeln wachsen lassen',
      girisMetni: 'In dieser Übung gehen wir zu zwei Augenblicken, die Willy in der letzten Nacht erlebt: das nächtliche Säen von Samen im Garten und dann der Gang zum Auto. Diese beiden aufeinanderfolgenden Augenblicke sind Teil derselben Sache — ein Mann versucht, der Welt etwas zu hinterlassen. Mit Samen, dann mit der Lebensversicherung. Denn Willy will nur noch eines: wissen, dass Biff ihn liebt. Und das muss einen Preis haben.',
      adimlar: [
        {
          metin: 'Diese Übung nähert sich dem letzten Augenblick. Fahre fort, wenn du bereit bist. Eile nicht.',
        },
        {
          metin: 'Schließe die Augen. Wo ist Willy jetzt? Brooklyn, der kleine Garten, Nacht. In der Hand Samentüten und eine Taschenlampe. Dunkel ringsum, die Häuser gewachsen, der Himmel nicht zu sehen. Finde den Ort.',
          soru: 'Wo bist du?',
        },
        {
          metin: 'Der Garten bekommt keine Sonne mehr — die Nachbargebäude lassen alles im Schatten. Dennoch säst du Samen. Nachts. Wohin in deinem Körper traf diese Handlung? Hoffnung, Verzweiflung, Ritual?',
          soru: 'Wo ist das Säen der Samen?',
        },
        {
          metin: 'Steh auf. Nimm eine Taschenlampe in die Hand, halte eine Samentüte. Welch ein Körper ist dieser Willy, während er sich im Garten beugt? Erschöpft, entschlossen, schon anderswo?',
          soru: 'Was sagt die Haltung?',
        },
        {
          metin: 'Setz dich. Ben kommt und setzt sich neben dich — nicht wirklich, aber da. Du sprichst mit ihm über das Geschäft: eine Lebensversicherung von 20.000 Dollar. Wenn du stirbst, geht dieses Geld an Biff. Du bietest es Ben wie ein Geschäft an: „It’s a guaranteed twenty thousand dollar proposition.“ (Es ist ein garantiertes Zwanzigtausend-Dollar-Angebot.) Ist das ein Geschäft, ein Geschenk, ein Verbrechen, eine Liebe?',
          soru: 'Was ist dieser Plan?',
        },
        {
          vakSorulari: {
            gorsel: 'Nacht im Garten — das Licht der Taschenlampe erhellt einen schmalen Bereich. Der Rest ist Dunkelheit. Was säst du in diese Dunkelheit wirklich? Samen oder etwas anderes?',
            isitsel: 'Höre der Nacht zu. Stadtgeräusche, ein Wagen in der Ferne, Musik aus einem Haus. Doch in dir Bens Stimme. „It’s dark in there but full of diamonds.“ Was sagt dir diese Stimme?',
            kinestetik: 'Du kniest in der Erde, deine Hände in der Erde. Was schafft dieser körperliche Kontakt zwischen dir und dem Boden? Ein Abschied, eine Bindung?',
          },
          soru: 'Was hast du gefunden?',
        },
        {
          metin: 'Biff kommt — ein letztes Mal, um mit dir zu sprechen. Er umarmt dich. Er weint. „He likes me!“ sagst du verwundert. „He likes me!“ Wohin in deinem Körper traf diese Erkenntnis? Das war es, was du immer wissen wolltest — und kam es dir so spät?',
          soru: 'Biff liebt dich — wohin traf das?',
        },
        {
          metin: 'Jetzt ist die Entscheidung klar. Du wirst zum Auto gehen. Lass diesen Satz als Willy innerlich durchgehen: „That boy — that boy is going to be magnificent!“ (Dieser Junge — dieser Junge wird großartig sein!) Ist das Freude, Trost, die letzte Lüge, die du dir erzählst?',
          soru: 'Was ist unter dem Satz?',
        },
        {
          metin: 'Diese Übung führte an einen Ort großen Abschieds. Jetzt kehren wir langsam zurück. Atme drei Mal tief. Sag deinen Namen laut. Sag das heutige Datum. Du lebst, du bist hier. Zähle drei Dinge um dich herum. Willys letzte Nacht ist dort — du bist hier, in deinem eigenen Körper. Trink Wasser. Sitz einige Minuten einfach so. Mach unbedingt eine körperliche Aktivität, wenn der Tag vorbei ist, sprich mit jemandem.',
        },
      ],
    },
  ],
};

export default willyDE;
