// data/karakterler/macbeth.de.js
// MACBETH — Almanca dil katmani (karakterGetir deep-merge ile macbeth.js TR
// tabanina biner). Yaklasim B: paralel dil dosyasi.
//
// KAYNAK NOTU (telif): Shakespeare KAMUYA ACIK (1606). Schlegel-Tieck
// kanonik ceviri (Dorothea Tieck'in Macbeth cevirisi, 19. yuzyil) da kamuya
// acik — Hamlet DE'siyle ayni desende serbest kullanim mumkun. Bu dosya:
//   - ITC'nin KENDI metni (ozet, dogrular madde, yuk, yansimaSorusu,
//     gecmis/simdi/iz, olay/icsel betimleri, sentez, yorumlar, altSorular)
//     SERBESTCE cevrildi.
//   - Shakespeare/Tieck dogrudan replikleri uygun yerlerde Tieck cevirisinden
//     alintilanmistir ("Heil dir, Macbeth...", "Ist das ein Dolch...",
//     "Schlaft nicht mehr!", "Morgen, und morgen, und morgen", "So schoner
//     und so boser Tag war nie", "Aus, verdammter Fleck!").
//   - Yapisal/sayisal alanlar (no, kategori, perde, sahneNo, harf, sinif,
//     yasamSirasi, sonraSahneNo, konum, travmaKategorileri/Seviyesi, sayilar)
//     buraya KONMADI — merge zaten TR tabandan alir.
//
// Array index-hizali merge: TR'de madde eklenir/cikarilirsa bu dosya da ayni
// indekste guncellenmeli.

const macbethDE = {
  ozet:
    'Der innere Zusammenbruch, getrieben von Ehrgeiz, Schuld und Paranoia. Eine Prophezeiung, eine Entscheidung, ein Ruin.',
  etiketler: ['Tragödie', 'Gewalt', 'Macht', 'Paranoia'],

  baseline: {
    ad: 'Nach der Schlacht',
    aciklama:
      'Unmittelbar nach dem Sieg, bevor die Begegnung mit den Hexen geschieht. Alles ist noch möglich. Noch ein General — kein König, kein Mörder.',
  },

  dogrular: [
    { madde: 'Macbeth ist ein General, dem König Duncan vertraut.' },
    { madde: 'Er hat soeben den Titel Than von Cawdor erhalten (I.iii).' },
    { madde: 'Er ist mit König Duncan verwandt — zugleich Soldat und Gastgeber.' },
    { madde: 'Er hat die Prophezeiung der Hexen gehört: Er wird König werden.' },
    { madde: 'Er weiß, dass Banquos Nachkommen Könige sein werden.' },
    { madde: 'Er hat Duncan im Schlaf ermordet.' },
    { madde: 'Er hat den Mord an Banquo angeordnet.' },
    { madde: 'Er hat Macduffs Familie hinrichten lassen.' },
    { madde: 'Lady Macbeth ist seine Frau — die Gefährtin, die ihn am Rande seines Zögerns weiterführte.' },
    { madde: 'Banquo war sein Waffenbruder — sie kämpften zusammen, hörten dieselbe Prophezeiung. Jetzt ein Gespenst.' },
    { madde: 'Er wusste, dass er von einem getötet würde, der von keiner Frau geboren wurde.' },
    { madde: 'Er erfuhr inmitten der Schlacht vom Tod Lady Macbeths.' },
  ],

  perdeTemalari: [
    { baslik: 'Prophezeiung und Anstiftung', altyazi: 'Das Verlangen erwacht, der Entschluss reift' },
    { baslik: 'Tat und erster Bruch',         altyazi: 'Blut fließt, der Geist löst sich von der Wirklichkeit' },
    { baslik: 'Paranoia und Einsamkeit',      altyazi: 'Macht kommt, der Freund wird zum Feind' },
    { baslik: 'Sucht und Düsternis',          altyazi: 'Die Prophezeiung betäubt, das Gewissen erlischt' },
    { baslik: 'Zerfall und Nichts',           altyazi: 'Alles endet, der Sinn zerfällt' },
  ],

  sahnelerWorkbook: [
    {
      baslik: 'Begegnung mit den Hexen',
      olay: 'Auf dem Rückweg von der Schlacht treffen Macbeth und Banquo auf drei Hexen. Sie verkünden Macbeth, er werde Than von Cawdor und dann König werden; Banquo werde der Vater von Königen sein. Eine Prophezeiung bleibt in der Luft hängen.',
      icsel: 'Verwunderung, Ehrgeiz und der Wunsch zu glauben zugleich. Er wendet sich an Banquo und fragt, ob dies gut oder schlecht sei — doch in ihm regt sich schon etwas.',
      yuk: 'Die erste Konfrontation eines Mannes, der noch kein Verbrechen begangen hat, mit dem eigenen Verlangen.',
    },
    {
      baslik: 'Er erhält den Titel Cawdor',
      olay: 'König Duncan erklärt Macbeth zum Than von Cawdor. Die erste Hälfte der Prophezeiung ist eingetroffen. Doch Duncan benennt seinen Sohn Malcolm zum Thronfolger — ein Hindernis erhebt sich vor dem Thron.',
      icsel: 'Beschleunigtes Verlangen. Je mehr die Prophezeiung sich bestätigt, desto stärker wächst das Begehren; doch das Thronfolger-Hindernis löst einen dunklen Gedanken aus.',
      yuk: 'Ein Mann, der eine sich öffnende Tür sieht und das Hindernis davor zum ersten Mal mit hartem Blick abmisst.',
    },
    {
      baslik: 'Zögern vor der Ermordung Duncans',
      olay: 'Er zieht sich vom Bankett zurück und bleibt allein. Er wägt den Mord ab — Duncan ist sein König, sein Verwandter und sein Gast. Er ist nahe daran, davon abzulassen; doch Lady Macbeth kommt und zieht ihn wieder in die Entscheidung.',
      icsel: 'Die klarste Abrechnung zwischen Gewissen und Verlangen. Er sagt „Ich darf es nicht tun“ — doch diesen Satz wird er nicht halten können.',
      yuk: 'Der Augenblick, in dem ein Mann sein eigenes Gewissen besiegen muss; die letzte Schwelle, von der noch ein Zurück möglich war.',
    },
    {
      baslik: 'Die Halluzination des Dolches',
      olay: 'Um Mitternacht sieht er im Gang einen Dolch in der Luft schweben — der Griff ihm zugewandt. Ungewiss, ob real oder Trug des Geistes. Er zieht ihn zu Duncans Gemach.',
      icsel: 'Der Geist kann Wirklichkeit und Erfindung nicht mehr trennen. Hier der erste Bruch — der Verstand reißt schon vor der Tat.',
      yuk: 'Der erste Riss, den ein Mord im Geist hinterlässt, bevor er begangen wird.',
    },
    {
      baslik: 'Er ermordet Duncan',
      olay: 'Macbeth betritt das Gemach des Königs und tötet ihn im Schlaf. Er kehrt mit blutigen Dolchen zurück. Er sagt, er habe eine Stimme gehört: der Schlaf sei ermordet — „Schlaft nicht mehr! Glamis hat den Schlaf ermordet.“',
      icsel: '„Habe ich das getan?“ Die Tat ist vollbracht, doch der Geist kann sie nicht annehmen; auditive Halluzinationen beginnen.',
      yuk: 'Ein Mann, der die Schwelle des Unwiderruflichen überschritten hat und seine eigene Hand nicht wiedererkennt.',
    },
    {
      baslik: 'Verbergen des Mordes',
      olay: 'Macduff findet die Leiche; das Schloss kommt in Aufruhr. Um die Schuld auf andere zu lenken, tötet Macbeth die schlafenden Diener und spielt die Rolle eines zornigen Treuen.',
      icsel: 'Kontrolle und Performance. Zum ersten Mal handelt er „wie ein König“ — die kalte Berechnung des Vortäuschens von Trauer.',
      yuk: 'Ein Mann, der ein zweites Verbrechen begeht, um das erste zu verbergen, und mit dem Schauspielen beginnt.',
    },
    {
      baslik: 'Die Bedrohung durch Banquo',
      olay: 'Nun ist er König. Doch die Hexen hatten gesagt, Banquos Nachkommen würden Könige sein. Er heuert Mörder an, um Banquo und seinen Sohn zu töten.',
      icsel: 'Die Paranoia beginnt. Der nächste Freund ist nun die größte Bedrohung. Macht zerstört das Vertrauen.',
      yuk: 'Der Augenblick, in dem die Sorge um den Thron die Freundschaft auf einen Rechnungsposten reduziert.',
    },
    {
      baslik: 'Entfremdung von Lady Macbeth',
      olay: 'Das Paar, das einst jeden Plan teilte, beginnt sich voneinander zu lösen. Macbeth verbirgt seine neuen Pläne vor seiner Frau; er entscheidet allein.',
      icsel: 'Vereinsamung. Ein Mann mit Macht, doch ohne jemanden an seiner Seite. Die Partnerschaft weicht dem Schweigen.',
      yuk: 'Zwei Menschen, die gemeinsam in das Verbrechen eingetreten sind, verlieren einander unter der Last des Verbrechens.',
    },
    {
      baslik: 'Banquos Geist',
      olay: 'Beim ersten großen Bankett als König setzt sich der Geist Banquos auf den leeren Stuhl. Nur Macbeth sieht ihn; er gerät vor den Gästen in Panik. Lady Macbeth versucht, die Situation zu vertuschen.',
      icsel: 'Panik und Kontrollverlust. Wahnsinn vor allen. Die Schuld hat sich in ein sichtbares Gespenst verwandelt.',
      yuk: 'Das verdrängte Gewissen kehrt am öffentlichen Tisch eines Königs in körperlicher Gestalt zurück.',
    },
    {
      baslik: 'Neue Prophezeiungen',
      olay: 'Macbeth kehrt zu den Hexen zurück und verlangt mehr. Drei Warnungen werden ihm zuteil: hüte dich vor Macduff; kein von einer Frau Geborener kann ihm schaden; er bleibt unbesiegt, bis der Birnam-Wald wandert. Er geht mit falscher Zuversicht.',
      icsel: 'Sucht. Die Prophezeiung ist keine Kraft mehr, sondern ein Rauschmittel. Je mehr er nach Sicherheit sucht, desto blinder wird er.',
      yuk: 'Ein Mann, der in die Dunkelheit zurückkehrt, um sein eigenes Schicksal zu hören, klammert sich an eine falsche Zuversicht.',
    },
    {
      baslik: 'Vorbereitung auf die Schlacht',
      olay: 'Seine Lords verlassen ihn; das feindliche Heer naht. Dennoch hält er an der Zusicherung der Hexen fest — kein von einer Frau Geborener kann ihm schaden.',
      icsel: 'Eine falsche Zuversicht, oder das Müssen, an die Zuversicht zu glauben. Ein Panzer zwischen Glauben und Hoffnungslosigkeit.',
      yuk: 'Ein Mann, den alle verlassen haben, klammert sich trotzig an die einzige Stütze, die ihm bleibt: die Prophezeiung.',
    },
    {
      baslik: 'Der Tod Lady Macbeths',
      olay: 'Mitten in der Schlacht trifft die Nachricht ein, dass Lady Macbeth gestorben ist. Macbeths Antwort ist kein Schrei der Trauer, sondern eine kalte Betrachtung über die Sinnlosigkeit des Lebens — „Morgen, und morgen, und morgen…“',
      icsel: 'Kein Schmerz, sondern Leere. Sinnlosigkeit. Das Gefühl ist schon erschöpft; was bleibt, ist nur eine müde Nichtigkeit.',
      yuk: 'Den Tod der Frau, mit der er alles gewagt hat, mit einem Körper aufzunehmen, der nicht mehr weinen kann.',
    },
    {
      baslik: 'Er tötet den jungen Siward',
      olay: 'Auf dem Schlachtfeld trifft er auf den jungen Siward und tötet ihn mit Leichtigkeit. Der Teil der Prophezeiung „kein von einer Frau Geborener“ scheint sich für einen Augenblick bestätigt.',
      icsel: 'Ein kurzer Sieg, die vorübergehende Lust des Bestätigtwerdens. Doch Macduff naht.',
      yuk: 'Ein Mann, der das Ende ahnt, sucht ein letztes Mal Zuflucht im Schild der Prophezeiung.',
    },
    {
      baslik: 'Das Ende vor Macduff',
      olay: 'Er trifft auf Macduff. Macbeth sagt, er sei von keiner Frau geboren; Macduff erklärt, er sei vor der Zeit aus dem Mutterleib gerissen worden. Die letzte Prophezeiung bricht zusammen. Macbeth wählt dennoch den Kampf und stirbt.',
      icsel: 'Alles ist zerfallen. Der Panzer ist auseinandergebrochen. Doch statt sich zu ergeben, wählt er, kämpfend zu fallen, obwohl er weiß, dass er verlieren wird.',
      yuk: 'Ein Mann, der alle Zusicherungen verloren hat, wählt im letzten Augenblick dennoch das Handeln vor dem Nichts.',
    },
  ],

  oyunOncesi: {
    olaylar: [
      {
        baslik: 'Aufstieg als Krieger — der General, dem der König vertraut',
        sahneRef: 'Er kehrt siegreich vom Schlachtfeld zurück; Duncan rühmt ihn als treusten General.',
        yuk: 'Der Gipfel von Ehre und Treue. Macbeths noch unbefleckte Identität — die Werte, die er später verraten wird.',
        yansimaSorusu: 'Wo in Macbeths Körper hatte sich dieser Gipfel von Treue und Ehre festgesetzt — und woher hat der Verrat ihn gebrochen?',
      },
      {
        baslik: 'Die Ehe mit Lady Macbeth — die Gründung des gemeinsamen Ehrgeizes',
        sahneRef: 'Das Paar hat, noch bevor der Vorhang aufgeht, eine Partnerschaft gegründet, die einen Ehrgeiz teilt.',
        yuk: 'Zwei Menschen vereinen sich in einem einzigen Verlangen. Der Anfang der Bindung, die sie später voneinander reißen wird.',
        yansimaSorusu: 'In welchem Augenblick begannen Macbeth und Lady Macbeth, gemeinsam nach der Macht zu verlangen?',
      },
      {
        baslik: 'Kinderlosigkeit — ein Königsanwärter ohne Nachkommen',
        sahneRef: 'Der Text deutet die Existenz eines Kindes an, doch Macbeth hat keine Nachkommen; die Hexen geben den Thron Banquos Geschlecht.',
        yuk: 'Die stille Wunde, die Zukunft nicht erreichen zu können. Macbeth tut alles für den Thron, doch es gibt niemanden, dem er ihn übergeben könnte.',
        yansimaSorusu: 'Wie nährt oder zehrt die Tatsache, dass er sein Geschlecht nicht fortsetzen kann, Macbeths Machthunger?',
      },
      {
        baslik: 'Das erste Töten — die erste Begegnung des Kriegers mit Blut',
        sahneRef: 'Als Soldat hat Macbeth zuvor schon getötet; der Krieg ist sein Handwerk.',
        yuk: 'Die feine Linie zwischen rechtmäßiger Gewalt und Mord. Hat das Töten im Krieg ihn auf den Mord an Duncan vorbereitet, oder war jene Schwelle eine ganz andere?',
        yansimaSorusu: 'Fühlte sich das im Krieg vergossene Blut in Macbeths Hand genauso an wie Duncans Blut, oder ganz anders?',
      },
    ],
    iliskiler: [
      {
        gecmis: 'Partnerin im geteilten Ehrgeiz; der Wille, der ihn in die Entscheidung trieb.',
        simdi: 'Erst die treibende Kraft, dann die sich entfernende und zusammenbrechende Partnerin. Das Verbrechen verzehrt beide einzeln.',
        iz: 'Leidenschaft + Mitschuld + zunehmend tiefer werdendes Schweigen.',
        yansimaSorusu: 'Wenn Lady Macbeth zu ihm kommt, spürt Macbeth dann Kraft oder den Spiegel seiner eigenen Schwäche?',
      },
      {
        gecmis: 'Mit dem sie gemeinsam auf die Hexen trafen, der Freund, an dessen Seite er jahrelang kämpfte.',
        simdi: 'Wegen der Prophezeiung zur Bedrohung gewordener Freund; den er ermorden ließ, der dann als Gespenst vor ihm steht — das Gewissen.',
        iz: 'Vertrauen + Eifersucht + die Reue des Verrats.',
        yansimaSorusu: 'Sieht Macbeth, wenn er Banquo ansieht, einen Freund — oder den lebenden Erinnerer daran, dass er kein Geschlecht hat?',
      },
      {
        gecmis: 'Der König, der ihm vertraute und ihn ehrte; zugleich sein Verwandter.',
        simdi: 'Der Mann, den er durch die Verletzung dreifach heiliger Bande (König-Verwandter-Gast) ermordete. Das erste und schwerste Verbrechen.',
        iz: 'Treue + Bruch + das Gewicht eines unwiderruflichen Bruchs.',
        yansimaSorusu: 'Wenn Duncan ihm sein Vertrauen zeigt, wiegt in Macbeth dann die Treue schwerer oder die kalte Berechnung der Gelegenheit?',
      },
      {
        gecmis: 'Bis zur Eröffnung der Bühne nicht existent; doch eine Macht, die das Verlangen in Macbeth von außen in Worte fasst.',
        simdi: 'Ein Objekt der Sucht. Macbeth kehrt immer wieder zu ihnen zurück, um Sicherheit zu suchen; jeder Rückweg macht ihn blinder.',
        iz: 'Sog + Sucht + die Quelle einer falschen Zuversicht.',
        yansimaSorusu: 'Sagen die Hexen Macbeth, was bereits in ihm ist, oder pflanzen sie in ihm ein Verlangen ein, das er nicht hatte?',
      },
      {
        gecmis: 'Ein Edelmann; zu Beginn gibt es keinen unmittelbaren Konflikt.',
        simdi: 'Der Mann, dessen Familie er hinrichten ließ und der ihn am Ende tötet. Die „nicht-von-einer-Frau-geborene“ Lücke der Prophezeiung.',
        iz: 'Geringschätzung + Furcht + das Gesicht des unausweichlichen Endes.',
        yansimaSorusu: 'Welche Abwehr verkrampft sich in Macbeths Körper jedes Mal, wenn Macduffs Name fällt?',
      },
    ],
  },

  tercihler: [
    {
      baslik: 'Pflanzen die Hexen ein Verlangen in Macbeth, das er nicht hatte, oder sprechen sie aus, was schon dort ist?',
      isaretler: [
        { metin: 'Sobald die Hexen sagen, er werde König werden, springt Macbeths Geist sofort zum Mord — als ob der Gedanke schon bereit dort gewartet hätte.' },
        { metin: 'Macbeth sucht die Hexen selbst auf, um Sicherheit zu erhalten; die Prophezeiung ist nicht mehr eine Stimme von außen, sondern eine Substanz, von der er abhängig geworden ist.' },
      ],
      sentez: 'Ob die Prophezeiung Macbeths inneres Verlangen ans Licht bringt oder es erst erschafft, lässt der Text offen. Der Schauspieler entscheidet über den Grad an Wirklichkeit und Einfluss der Hexen.',
      yorumlar: [
        { baslik: 'Schicksal von außen', aciklama: 'Die Hexen sind wirkliche übernatürliche Kräfte; sie pflanzen das Verlangen ein. Macbeth ist Opfer eines Schicksals — die Schuld wird geteilt.' },
        { baslik: 'Stimme des inneren Verlangens', aciklama: 'Die Hexen bringen den Ehrgeiz, den Macbeth schon trägt, nach außen; sie sind nur ein Spiegel. Die Schuld gehört ganz ihm.' },
        { baslik: 'Unklare Schwelle', aciklama: 'Real oder Halluzination wird nie eindeutig; der Schauspieler bewahrt diese Unklarheit — auch der Zuschauer kann nicht sicher sein, so wie Macbeth.' },
      ],
    },
    {
      baslik: 'Treibt Lady Macbeth ihn, oder ist Macbeth schon entschlossen?',
      isaretler: [
        { metin: 'Macbeth ist nahe daran, vom Mord abzulassen; der Wille Lady Macbeths zieht ihn zurück in die Entscheidung.' },
        { metin: 'Die folgenden Verbrechen (Banquo) plant Macbeth ohne seine Frau zu befragen — die treibende Kraft ist nun in ihm.' },
      ],
      sentez: 'Beim ersten Mord scheint Lady Macbeths Stoß entscheidend; doch in den späteren Verbrechen geht Macbeth allein voran. Der Schauspieler entscheidet, wie viel des Ehrgeizes aus ihm selbst kommt und wie viel von seiner Frau.',
      yorumlar: [
        { baslik: 'Ohne seine Frau hätte er es nicht getan', aciklama: 'Der erste Mord geschieht ganz durch Lady Macbeths Willen; Macbeth ist die schwache, die geführte Seite.' },
        { baslik: 'Er war schon entschlossen', aciklama: 'Macbeths Ehrgeiz war von Anfang an da; Lady Macbeth gibt nur den letzten Stoß, der eigentliche Wille gehört ihm.' },
        { baslik: 'Gemeinsam ausgelöst', aciklama: 'Die beiden nähren einander; weder das eine noch das andere allein ist genug — das Verbrechen ist eine echte Partnerschaft.' },
      ],
    },
    {
      baslik: 'Sind Macbeths Halluzinationen (Dolch, Gespenst) echte Übernatürlichkeit oder der Zerfall von Gewissen/Verstand?',
      isaretler: [
        { metin: 'Vor dem Mord sieht er einen Dolch in der Luft; ungewiss, ob real oder vom Geist geschaffen.' },
        { metin: 'Beim Bankett sieht nur Macbeth das Gespenst; niemand am Tisch sieht es.' },
      ],
      sentez: 'Der Ursprung der Halluzinationen wird im Text offengelassen. Der Schauspieler entscheidet, ob sie eine übernatürliche Wirklichkeit oder der körperliche/geistige Ausdruck der Schuld sind.',
      yorumlar: [
        { baslik: 'Übernatürliche Wirklichkeit', aciklama: 'Dolch und Gespenst sind tatsächlich da; die übernatürliche Welt des Stücks externalisiert das Gewissen.' },
        { baslik: 'Zerfall des Gewissens', aciklama: 'Alles ist mental; die verdrängte Schuld bricht als Halluzination an die Oberfläche. Ein klinischer Bruch.' },
        { baslik: 'Körperlicher Auslöser', aciklama: 'Der Bruch beginnt im Körper (Schlaflosigkeit, Blutsicht); der Geist legt erst dann Bedeutung darauf. Eine somatische Lesart.' },
      ],
    },
    {
      baslik: 'Bereut Macbeth sein Verbrechen, oder fürchtet er nur das Entdecktwerden / die Folgen?',
      isaretler: [
        { metin: 'Unmittelbar nach der Tat erkennt er seine Hand nicht, hört Stimmen — er befindet sich in einer Art Entsetzen.' },
        { metin: 'Derselbe Macbeth tötet Minuten später kaltblütig die Diener und spielt eine Rolle.' },
      ],
      sentez: 'Ob Macbeths Entsetzen nach dem Mord moralische Reue oder Furcht vor Entdeckung / Gewicht der Folgen ist, bleibt unklar. Der Schauspieler wählt die Natur dieses Entsetzens.',
      yorumlar: [
        { baslik: 'Echte moralische Reue', aciklama: 'Macbeth ist ein Mann mit Gewissen; das Verbrechen zerstört ihn von innen. Die Tragödie ist der Sturz eines guten Mannes.' },
        { baslik: 'Furcht vor den Folgen', aciklama: 'Das Entsetzen ist nicht moralisch, sondern praktisch — Furcht vor Entdeckung, Thronverlust, Chaos. Keine Reue, sondern Kalkül.' },
        { baslik: 'Abgestumpftes Gewissen', aciklama: 'Anfangs ist Gewissen da, doch es stumpft mit jedem Verbrechen ab; der Schauspieler spielt diese stufenweise Betäubung.' },
      ],
    },
    {
      baslik: 'Was trägt Macbeth in seine letzte Schlacht — Hoffnungslosigkeit, Trotz oder eine nihilistische Freiheit?',
      isaretler: [
        { metin: 'Auf den Tod seiner Frau antwortet er nicht mit Schmerz, sondern mit einer kalten Betrachtung über die Sinnlosigkeit des Lebens („Morgen, und morgen, und morgen…“).' },
        { metin: 'Als auch die letzte Prophezeiung bricht, wählt er den Kampf, obwohl er weiß, dass er verlieren wird.' },
      ],
      sentez: 'Das Gefühl, das Macbeth in seinem letzten Augenblick trägt, ist im Text nicht eindeutig. Der Schauspieler kann dieses Ende als Niederlage, als Trotz oder als Annahme des Nichts lesen.',
      yorumlar: [
        { baslik: 'Hoffnungslose Niederlage', aciklama: 'Ein Mann, der alles verloren hat, ergibt sich der Dunkelheit; sein Kampf ist nur ein Reflex.' },
        { baslik: 'Trotz', aciklama: 'Obwohl er weiß, dass er verliert, verweigert er die Kapitulation; eine letzte Demonstration von Stolz und Willen.' },
        { baslik: 'Nihilistische Freiheit', aciklama: 'Wenn der Sinn zerfällt und nichts mehr zu verlieren bleibt, kommt eine seltsame Freiheit; er wählt, im Nichts zu handeln.' },
      ],
    },
  ],

  boslukSet: [
    {
      baslik: 'Vom Wald zum Schloss',
      onceBaslik: 'Die Prophezeiung der Hexen',
      onceMetin: 'Macbeth und Banquo hörten von den Hexen die Prophezeiung; Macbeth wurde gesagt, er werde König werden.',
      boslukMetin: 'der Weg vom Wald zum Schloss · der erste dunkle Gedanke, der durch den Geist zieht · neben Banquo, doch innerlich getrennt · der Verstand, der die Prophezeiung abwägt · die stillen Entscheidungen, die vor der Ankunft am Schloss getroffen werden',
      sonraBaslik: 'Er erhält den Titel Cawdor',
      sonraMetin: 'In Szene 2 ernennt Duncan Macbeth zum Than von Cawdor; die erste Hälfte der Prophezeiung tritt ein.',
      sentez: 'Shakespeare zeigt den Weg von der Prophezeiung zum Schloss nicht. Der Schauspieler baut in dieser Lücke, wie das Verlangen zum ersten Mal Gestalt annimmt — wie weit ging Macbeth im Geist, bevor er das Schloss erreichte?',
      altSorular: [
        { soru: 'Was war der erste dunkle Gedanke, der ihm nach der Prophezeiung auf dem Weg zum Schloss durch den Kopf ging — und versuchte er, ihn zu vertreiben?' },
        { soru: 'Veränderte sich sein Blick auf Banquo, der neben ihm ging — sah er nun einen Rivalen?' },
        { soru: 'Welche Spannung trat zum ersten Mal in seinem Körper auf dieser Reise auf?' },
      ],
    },
    {
      baslik: 'Allein in der Kammer der Entscheidung',
      onceBaslik: 'Zögern vor der Ermordung Duncans',
      onceMetin: 'Lady Macbeth hat ihn überzeugt; Macbeth sagte „Ich werde es tun“. Doch zwischen diesem Wort und der Tat liegt eine Zeit.',
      boslukMetin: 'die Minuten, die sich von der Entscheidung zur Tat erstrecken · wie oft er davon abließ · Wein für die Diener · das Warten auf den Klang der Glocke · die Hand, die nach dem Dolch greift · der letzte Augenblick, von dem noch ein Zurück möglich war',
      sonraBaslik: 'Die Halluzination des Dolches',
      sonraMetin: 'In Szene 4 sieht Macbeth einen Dolch in der Luft und wird zu Duncans Gemach gezogen.',
      sentez: 'Shakespeare überspringt die Zeit zwischen „Ich werde es tun“ und dem Mord. Der Schauspieler baut in dieser Lücke, wie sich die Entscheidung im Körper verhärtete — wie oft rief er sich zurück, und wann war kein Zurück mehr möglich?',
      altSorular: [
        { soru: 'Welche Veränderung trat in seinem Körper auf, in dem Augenblick, in dem er „Ich werde es tun“ sagte?' },
        { soru: 'Konnte er den Dienern, denen er Wein einschenkte, ins Gesicht sehen?' },
        { soru: 'In dem Augenblick, in dem er nach dem Dolch griff — wusste er wirklich, dass er ihn nehmen würde, oder beobachtete er sich noch?' },
      ],
    },
    {
      baslik: 'In Duncans Gemach',
      onceBaslik: 'Eintritt ins Gemach',
      onceMetin: 'Macbeth betritt mit dem Dolch Duncans Gemach. Shakespeare zeigt den Mord selbst nicht auf der Bühne.',
      boslukMetin: 'der Augenblick hinter der Tür · das Gesicht des schlafenden Königs · der erste Stoß · vielleicht ein Wort, vielleicht Schweigen · 30 Sekunden oder 5 Minuten · der letzte Blick beim Zurückgehen',
      sonraBaslik: 'Er ermordet Duncan (Rückkehr)',
      sonraMetin: 'In Szene 5 kehrt Macbeth mit blutigen Dolchen zurück; „Habe ich das getan?“ sagt er, hört Stimmen.',
      sentez: 'Dies ist die tiefste Lücke des Stücks — der Mord selbst ist nicht auf der Bühne. Der Schauspieler baut den Augenblick im Gemach: Was sah er, was tat er, wer war er beim Zurückgehen? Die Quelle des Entsetzens bei der Rückkehr liegt hier.',
      altSorular: [
        { soru: 'War Duncans Gesicht sichtbar, als er das Gemach betrat — und wohin fiel der erste Stoß?' },
        { soru: 'Sagte er etwas in diesem Gemach, oder war es vollkommenes Schweigen?' },
        { soru: 'Bemerkte er beim Hinausgehen, wie viel Zeit vergangen war — was, wenn in dieser Zeit jemand aufgewacht wäre?' },
      ],
    },
    {
      baslik: 'Die Stunden ohne Schlaf',
      onceBaslik: 'Nach dem Mord',
      onceMetin: 'Der Mord ist geschehen; „der Schlaf ist ermordet“ sagt er. Eine Zeit vergeht, bis Macduff an die Tür klopft.',
      boslukMetin: 'die schlaflosen Stunden · das Blut an den Händen · bei jedem Geräusch zusammenfahren · das schweigende Warten mit Lady Macbeth · das Anbrechen der Morgendämmerung · das letzte Schweigen vor dem Klopfen an der Tür',
      sonraBaslik: 'Verbergen des Mordes',
      sonraMetin: 'In Szene 6 findet Macduff die Leiche; Macbeth tötet die Diener und beginnt, eine Rolle zu spielen.',
      sentez: 'Shakespeare überspringt die Stunden vom Mord bis zur Entdeckung. Der Schauspieler baut in dieser Lücke die Schlaflosigkeit, das Entsetzen und wie die Maske vorbereitet wurde, die am Morgen zu tragen sein würde.',
      altSorular: [
        { soru: 'Wo waren in jenen Stunden seine Hände — konnte er sie anschauen?' },
        { soru: 'Was wurde in jenen schweigenden Stunden zwischen ihm und Lady Macbeth gesagt, was blieb ungesagt?' },
        { soru: 'Welche Maske beschloss er, kurz bevor an die Tür geklopft wurde, zu tragen?' },
      ],
    },
    {
      baslik: 'Vorbereitung des Banketts',
      onceBaslik: 'Der Mordbefehl an Banquo',
      onceMetin: 'Macbeth hat die Mörder für Banquo ausgeschickt. Das Bankett wird vorbereitet; alle erwarten, dass Banquo kommt.',
      boslukMetin: 'nach dem Verabschieden der Mörder · die Last des Wissens · zu wissen, dass Banquo nicht kommen wird, und doch so zu tun, als ob man ihn erwartete · die Maske, die zum Bankett angelegt wird · innere Paranoia',
      sonraBaslik: 'Banquos Geist',
      sonraMetin: 'In Szene 9 setzt sich beim Bankett der Geist Banquos auf den leeren Stuhl; nur Macbeth sieht ihn.',
      sentez: 'Die Stunden zwischen Befehl und Bankett zeigt Shakespeare nicht. Der Schauspieler baut in dieser Lücke, was unter der königlichen Maske aufgestaut wurde, während man auf den Tod eines Freundes wartete — das Gespenst entsteht aus diesem Aufstau.',
      altSorular: [
        { soru: 'Wohin ging Macbeth zuerst nach dem Verabschieden der Mörder, und was war sein erster Gedanke?' },
        { soru: 'Diesmal sagte er Lady Macbeth den Plan nicht — was empfand er in diesem Schweigen?' },
        { soru: 'Was musste er beim Anlegen der Bankett-Maske in seinem Körper unterdrücken?' },
      ],
    },
    {
      baslik: 'Vom Gespenst zu den Hexen',
      onceBaslik: 'Die Bankett-Schande',
      onceMetin: 'Nach der Gespenstszene löste sich das Bankett auf; die Gäste wurden Zeugen von Macbeths Zusammenbruch.',
      boslukMetin: 'Schande und Panik nach dem Bankett · das Durchstehen jener Nacht · die Entscheidung, die Hexen aufzusuchen · die Suche nach einer letzten Zusicherung · das Gewissen weicht der Paranoia',
      sonraBaslik: 'Neue Prophezeiungen',
      sonraMetin: 'In Szene 10 kehrt Macbeth zu den Hexen zurück, verlangt mehr Sicherheit, erhält dunklere Erkenntnisse.',
      sentez: 'Die Nacht von der Bankett-Schande bis zur Rückkehr zu den Hexen überspringt Shakespeare. Der Schauspieler baut in dieser Lücke, wie ein König, der vor allen zusammenbricht, die Entscheidung trifft, sich für Sicherheit der Dunkelheit zuzuwenden.',
      altSorular: [
        { soru: 'Was wurde zwischen ihm und Lady Macbeth gesagt, was blieb ungesagt, als das Bankett endete?' },
        { soru: 'In welchem Augenblick traf er die Entscheidung, die Hexen aufzusuchen — aus Verzweiflung oder Kalkül?' },
        { soru: 'Konnte er in jener Nacht schlafen; ließ sein Körper Ruhe zu?' },
      ],
    },
  ],
};

export default macbethDE;
