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

// IMZA: DE-MAC-FULL-01 — Macbeth DE TAM: sahnelerWorkbook+tercihler+oyunOncesi(7 olay/5 ilişki+yuruyus)+boslukSet(10, index düzeltildi+3 yuruyus+2 kartCatali)
// TASLAK — native QA + travma-duyarlı sahneler/anlar/boşluklar (cinayet, zihinsel kırılma, çocuk kaybı) Filiz onay batch.
// TASLAK — native QA + travmaDuyarli sahneler (3,4,5,9,12,13,14) Filiz onay batch.
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
      konum: 'I.iii · Nach der Schlacht, auf dem Feld',
      olay: 'Auf dem Rückweg von der Schlacht treffen Macbeth und Banquo auf drei Hexen. Sie verkünden Macbeth, er werde Than von Cawdor und dann König werden; Banquo werde der Vater von Königen sein. Eine Prophezeiung bleibt in der Luft hängen.',
      icsel: 'Verwunderung, Ehrgeiz und der Wunsch zu glauben zugleich. Er wendet sich an Banquo und fragt, ob dies gut oder schlecht sei — doch in ihm regt sich schon etwas.',
      yuk: 'Die erste Konfrontation eines Mannes, der noch kein Verbrechen begangen hat, mit dem eigenen Verlangen.',
      replikIzi: 'Macbeth: „Die Hexen…“ / „Halt, lasst das Wort nicht halb, bringt es zu Ende.“ (nach der Prophezeiung, während sie sich auflösen)',
      anlar: [
        {
          soru: 'Die Stimmen ziehen Macbeth eher wie ein Ruf als wie eine Drohung in die Tiefe des Waldes. Als die drei Gestalten erscheinen, was erwacht zuerst in ihm — Furcht oder Wiedererkennen?',
          secenekler: [
            { baslik: 'Wiedererkennen erwacht', aciklama: 'Als hätte er diese Stimmen längst erwartet; etwas in ihm hat sie gerufen.', oznelSabit: 'Ich begegnete jenen Stimmen nicht mit Furcht, sondern mit Erwartung — denn sie waren schon in mir.' },
            { baslik: 'Furcht erwacht', aciklama: 'Die Schwelle des Unbekannten; er erschrickt, doch sein Fuß weicht nicht zurück.', oznelSabit: 'Ich erschrak, doch hielt nicht an — eine Neugier, stärker als meine Furcht, zog mich.' },
          ],
        },
        {
          soru: 'Bei „Than von Cawdor“ sagt Macbeth „unmöglich“, doch Banquo sieht ihn zusammenzucken. Während sein Mund es leugnet, was verrät sein Körper?',
          secenekler: [
            { baslik: 'Verlangen sickert durch', aciklama: 'Während sein Mund leugnet, wägen seine Augen die Möglichkeit.', oznelSabit: 'Ich sagte unmöglich, doch mein Körper hatte schon begonnen, das Gewicht jenes Throns zu messen.' },
            { baslik: 'Er leugnet wirklich', aciklama: 'In jenem Augenblick ist ihm die Prophezeiung absurd; das Zusammenzucken ist nur Verwunderung.', oznelSabit: 'In jenem Augenblick glaubte ich wirklich nicht — mein Zusammenzucken kam nicht aus Verlangen, sondern aus dem Erschüttern meiner Welt.' },
          ],
        },
        {
          soru: 'Die Hexen ließen das Wort so halb, dass man „wären sie nur länger geblieben“ sagen möchte. Welche eine Frage blieb Macbeth unausgesprochen, als er erstarrte?',
        },
      ],
    },
    {
      baslik: 'Er erhält den Titel Cawdor',
      konum: 'I.iv · Im Schloss',
      olay: 'König Duncan erklärt Macbeth zum Than von Cawdor. Die erste Hälfte der Prophezeiung ist eingetroffen. Doch Duncan benennt seinen Sohn Malcolm zum Thronfolger — ein Hindernis erhebt sich vor dem Thron.',
      icsel: 'Beschleunigtes Verlangen. Je mehr die Prophezeiung sich bestätigt, desto stärker wächst das Begehren; doch das Thronfolger-Hindernis löst einen dunklen Gedanken aus.',
      yuk: 'Ein Mann, der eine sich öffnende Tür sieht und das Hindernis davor zum ersten Mal mit hartem Blick abmisst.',
      replikIzi: 'Macbeth (innerlich): „Sterne, verbergt euer Licht — niemand sehe meine schwarzen, tiefen Begierden.“ (als Malcolm zum Thronfolger erklärt wird)',
      anlar: [
        {
          soru: 'Der Titel „Than von Cawdor“ ist eingetroffen — die erste Hälfte der Prophezeiung hat sich bestätigt. Was wächst in jenem Augenblick in Macbeth: Ergebung in die Prophezeiung oder der Appetit dessen, der die Prophezeiung erprobt hat?',
          secenekler: [
            { baslik: 'Ergebung in die Prophezeiung', aciklama: 'Wenn sie wahr sprechen, kommt der Rest auch — vielleicht ohne zu handeln, nur durch Warten.', oznelSabit: 'Das Schicksal hat mich gefunden — wenn die Tür sich öffnet, ohne dass ich sie aufbreche, kann ich warten, ohne meine Hände zu beschmutzen, dachte ich.' },
            { baslik: 'Die Prophezeiung wurde erprobt', aciklama: 'Kein Zufall; doch Throne gewinnt man nicht durch Warten, sondern durch den Zug.', oznelSabit: 'In dem Augenblick, als die erste Hälfte eintraf, verstand ich: Das war keine frohe Botschaft, sondern eine Erlaubnis — und Erlaubnisse sind dazu da, genutzt zu werden.' },
          ],
        },
        {
          soru: 'Duncan erklärte Malcolm zum Thronfolger — der Weg ist versperrt. Macbeth blickt zum ersten Mal seinem eigenen dunklen Gedanken ins Auge: „Niemand sehe meine Begierden.“ Was tut er, als jener Gedanke erscheint?',
          secenekler: [
            { baslik: 'Er erschrickt vor seinem Gedanken', aciklama: 'Er fürchtet seinen eigenen Geist; vor dem, was er ans Licht nicht lassen will, flieht er selbst am meisten.', oznelSabit: 'Ich verbarg jenen Gedanken — doch ich wusste, dass ich ihn vor allen anderen vor mir selbst verbarg.' },
            { baslik: 'Er beherbergt den Gedanken', aciklama: 'Zum ersten Mal blickt er ihn an, ohne ihn zu vertreiben; er lässt die Dunkelheit sich setzen.', oznelSabit: 'Ich vertrieb ihn nicht. In jenem Augenblick wusste ich noch nicht, dass der Gedanke, den ich beherbergte, eines Tages Hausherr werden würde.' },
          ],
        },
      ],
    },
    {
      baslik: 'Zögern vor der Ermordung Duncans',
      konum: 'I.vii · Während des Banketts, allein',
      olay: 'Er zieht sich vom Bankett zurück und bleibt allein. Er wägt den Mord ab — Duncan ist sein König, sein Verwandter und sein Gast. Er ist nahe daran, davon abzulassen; doch Lady Macbeth kommt und zieht ihn wieder in die Entscheidung.',
      icsel: 'Die klarste Abrechnung zwischen Gewissen und Verlangen. Er sagt „Ich darf es nicht tun“ — doch diesen Satz wird er nicht halten können.',
      yuk: 'Der Augenblick, in dem ein Mann sein eigenes Gewissen besiegen muss; die letzte Schwelle, von der noch ein Zurück möglich war.',
      replikIzi: 'Macbeth: „Ich bin sein Verwandter, sein Untertan und sein Gastgeber — sollte ich, der dem Mörder die Tür verschließen müsste, selbst das Messer führen?“ (das Abwägen in I.vii) / Lady Macbeth tritt ein; die Waage kippt.',
      anlar: [
        {
          soru: '„Wir gehen in dieser Sache nicht weiter“ — Macbeth sagt, er lasse ab. Was war dieser Satz: eine wirkliche Umkehr oder ein letzter Beweis der Unschuld, den er sich selbst vorlegt?',
          secenekler: [
            { baslik: 'Wirkliches Ablassen', aciklama: 'In jenem Augenblick lässt er aufrichtig ab; käme Lady Macbeth nicht, hätte Duncan den Morgen überlebt. Die Waage der Schuld teilt sich in jener Nacht in zwei.', oznelSabit: 'Ich hatte abgelassen — wirklich. Die Hand, die mich über die Schwelle führte, war nicht meine Hand; doch sie war die Hand, die den Dolch hielt.' },
            { baslik: 'Probe der Unschuld', aciklama: 'Er tut, als lasse er ab; er wartet darauf, gestoßen zu werden. Ein Satz, gesagt, um sagen zu können „Ich habe nein gesagt“.', oznelSabit: 'Selbst als ich nein sagte, wartete ich auf ihre Wiederkehr — ich brauchte jemanden, der mich zwang, damit die Schuld nicht allein meine sei.' },
          ],
        },
        {
          soru: 'Lady Macbeths Worte holten ihn zurück. Doch was wirkte: das Infragestellen seines Muts oder die Furcht, in ihren Augen zu schrumpfen?',
          secenekler: [
            { baslik: 'Wunde des Muts', aciklama: 'Die Frage „Bist du ein Mann“ trifft mitten in seine Kriegeridentität; wird diese Identität in Frage gestellt, tut er alles.', oznelSabit: 'Ich ertrage es nicht, feige genannt zu werden — die Einzige, die das wusste, war meine Frau, und genau dort setzte sie an.' },
            { baslik: 'In ihren Augen fallen', aciklama: 'Es geht nicht um Mut, sondern um das Schrumpfen vor ihr. Unter ihrem entschlossenen Blick kann er nicht zurücktreten.', oznelSabit: 'Ich fürchtete Duncan nicht — ich fürchtete die Enttäuschung in ihren Augen.' },
          ],
        },
        {
          soru: 'In der Sekunde, in der er sagte „Ich bin nun entschlossen“, sprach sein Gewissen ein letztes Mal. Was sagte es — und wohin begrub Macbeth jene Stimme?',
        },
      ],
    },
    {
      baslik: 'Die Halluzination des Dolches',
      konum: 'II.i · Mitternacht, der Gang',
      olay: 'Um Mitternacht sieht er im Gang einen Dolch in der Luft schweben — der Griff ihm zugewandt. Ungewiss, ob real oder Trug des Geistes. Er zieht ihn zu Duncans Gemach.',
      icsel: 'Der Geist kann Wirklichkeit und Erfindung nicht mehr trennen. Hier der erste Bruch — der Verstand reißt schon vor der Tat.',
      yuk: 'Der erste Riss, den ein Mord im Geist hinterlässt, bevor er begangen wird.',
      replikIzi: 'Macbeth: „Ist dies ein Dolch, den ich sehe — den Griff mir zugewandt? Komm, lass mich dich fassen… Ich fasse dich nicht, und sehe dich doch.“ (der Gang um Mitternacht)',
      anlar: [
        {
          soru: 'Ein Dolch in der Luft — der Griff ihm zugewandt, ungreifbar, doch weiter sichtbar. Wie blickt Macbeth auf jenes Bild: als letzte Warnung seines Geistes oder als Einladung des Weges?',
          secenekler: [
            { baslik: 'Warnung — doch er geht', aciklama: 'Sein Geist sagt „halt“; er sieht den Dolch als Alarm. Er sieht, er versteht — und geht dennoch. Ein widerstehender Geist, ein gehorchender Körper.', oznelSabit: 'Mein Geist sagte mir ein letztes Mal „halt“ — er sandte den Dolch. Nicht, dass ich ihn nicht hörte; ich hörte ihn und ging vorüber.' },
            { baslik: 'Einladung — er weist den Weg', aciklama: 'Der Dolch ruft ihn; er fühlt sich wie der Reisende eines auserwählten Weges. Die Verantwortung wird an das Bild abgetreten.', oznelSabit: 'Der Dolch wies mir den Weg — ich folgte nur. In jener Nacht traf nicht ich die Entscheidung; die Entscheidung trug mich.' },
          ],
        },
        {
          soru: 'Die Türklinke ist unter seiner Hand. Der Mann drinnen schlief im Vertrauen auf ihn. Die Glocke schlug — welches letzte Bild zog durch Macbeth in der Sekunde vor dem Überschreiten der Schwelle?',
        },
      ],
    },
    {
      baslik: 'Er ermordet Duncan',
      konum: 'II.ii · Duncans Gemach und danach',
      olay: 'Macbeth betritt das Gemach des Königs und tötet ihn im Schlaf. Er kehrt mit blutigen Dolchen zurück. Er sagt, er habe eine Stimme gehört: der Schlaf sei ermordet — „Schlaft nicht mehr! Glamis hat den Schlaf ermordet.“',
      icsel: '„Habe ich das getan?“ Die Tat ist vollbracht, doch der Geist kann sie nicht annehmen; auditive Halluzinationen beginnen.',
      yuk: 'Ein Mann, der die Schwelle des Unwiderruflichen überschritten hat und seine eigene Hand nicht wiedererkennt.',
      replikIzi: 'Macbeth: „Habe ich das getan?“ / „Einer sagte ‚Amen‘ — ich konnte es nicht. Im Augenblick, da ich es am meisten brauchte, blieb das Wort in meiner Kehle.“ (Rückkehr mit blutigen Händen)',
      anlar: [
        {
          soru: 'Er blickt auf seine blutigen Hände: „Habe ich das getan?“ Worin verwandeln sich die Hände in jenem Blick — in etwas Fremdes, das die Tat nicht tragen kann, oder in etwas unerträglich Eigenes?',
          secenekler: [
            { baslik: 'Die Hand entfremdet sich', aciklama: 'Zwischen Tat und Selbst tritt ein Abstand; der „Tuende“ und der „Schauende“ spalten sich. Macbeth sieht die eigene Hand wie die eines anderen.', oznelSabit: 'Ich blickte auf jene Hände und erkannte sie nicht — der Tuende war ich, doch der Schauende nahm den Tuenden nicht an.' },
            { baslik: 'Die Hand ist schmerzhaft meine', aciklama: 'Es gibt keinen Abstand zum Fliehen; die Hand ist seine, das Blut seins, die Tat seine. Das ganze Gewicht senkt sich auf einmal herab.', oznelSabit: 'Die Hände waren meine — das war das Furchtbarste. Kein Ozean wäscht dieses Blut; denn das Blut ist nicht an meiner Hand, sondern in meinem Ich.' },
          ],
        },
        {
          soru: 'Die Betenden im Nebenzimmer sagten „Amen“; Macbeth konnte es nicht — das Wort blieb in seiner Kehle. Warum: weil er fühlte, dass Gott ihn schon ausgeschlossen hatte, oder weil er sich selbst ausschloss?',
          secenekler: [
            { baslik: 'Ausgeschlossen', aciklama: 'Er versuchte das Wort zu sprechen und konnte es nicht — die Tür wurde von außen verriegelt. Das Urteil ist gefällt; er erfährt es nur.', oznelSabit: '„Amen“ zu sagen brauchte ich in jener Nacht am meisten — und das Wort wurde mir nicht gegeben. Die Tür war von außen geschlossen.' },
            { baslik: 'Der sich selbst Ausschließende', aciklama: 'Das Wort war da; er selbst entschied, es nicht zu verdienen. Er verriegelte die Tür von innen.', oznelSabit: 'Das Wort war in meiner Kehle — ich war es, der es hinunterschluckte. Ich hatte kein Gesicht, jenem Gebet beizutreten; die Tür schloss ich selbst.' },
          ],
        },
        {
          soru: 'Eine Stimme schrie: „Macbeth hat den Schlaf gemordet — Macbeth wird nicht mehr schlafen.“ Mit wessen Stimme sprach jene Stimme — und wo stand Macbeth, als er sie zum ersten Mal hörte?',
        },
      ],
    },
    {
      baslik: 'Verbergen des Mordes',
      konum: 'II.iii · Morgengrauen, im Schloss',
      olay: 'Macduff findet die Leiche; das Schloss kommt in Aufruhr. Um die Schuld auf andere zu lenken, tötet Macbeth die schlafenden Diener und spielt die Rolle eines zornigen Treuen.',
      icsel: 'Kontrolle und Performance. Zum ersten Mal handelt er „wie ein König“ — die kalte Berechnung des Vortäuschens von Trauer.',
      yuk: 'Ein Mann, der ein zweites Verbrechen begeht, um das erste zu verbergen, und mit dem Schauspielen beginnt.',
      replikIzi: 'Macbeth: „Wäre ich eine Stunde vor diesem Geschehen gestorben, hätte ich ein gesegnetes Leben gehabt.“ (Trauer-Performance — die Wahrheit, die aus der Lüge entweicht)',
      anlar: [
        {
          soru: 'Die Diener zu töten stand nicht im Plan — selbst Lady Macbeth ist erschüttert. Was war jener Augenblick: Panik, keine Zeugen zu lassen, oder die erste kalte Improvisation seiner neuen Rolle?',
          secenekler: [
            { baslik: 'Panik', aciklama: 'Ohne Nachdenken, im Reflex; die Hände entschieden, der Verstand kam danach. Der erste öffentliche Augenblick des Kontrollverlusts.', oznelSabit: 'Als ich sie tötete, dachte ich nicht — ich fürchtete. Der erste Mord war geplant; der zweite brach aus mir heraus.' },
            { baslik: 'Kalte Improvisation', aciklama: 'Der blutige Beweis der Rolle des „zornigen Treuen“; ein Zug, der Glaubwürdigkeit hinzufügt. Die Performance verlangt schon am ersten Morgen ein Opfer.', oznelSabit: 'An jenem Morgen verstand ich: Meine Rolle verlangte Blut. Nicht mein Zorn tötete sie, sondern die Glaubwürdigkeit meiner Geschichte.' },
          ],
        },
        {
          soru: 'Vor allen trauert er: „Wäre ich eine Stunde zuvor gestorben, hätte ich gesegnet gelebt.“ Er lügt — doch der Satz ist wahr. War er sich dessen bewusst, als er ihn sprach?',
          secenekler: [
            { baslik: 'Nur Rolle', aciklama: 'Ein berechneter Satz; für die Wirkung gebaut. Seine Wahrheit ist Zufall — in jenem Augenblick hört er sie nicht einmal.', oznelSabit: 'Ich sprach jenen Satz für das Publikum — was er in sich trug, würde ich erst Jahre später verstehen.' },
            { baslik: 'Entweichende Wahrheit', aciklama: 'Während der Satz seinen Mund verlässt, schaudert er — denn die Lüge, die er für die Rolle baute, ist der wahrste Satz seines Lebens.', oznelSabit: 'Während ich log, entwich meine eigene Wahrheit meinem Mund — und ich hörte sie vor allen, ohne dass jemand sie verstand.' },
          ],
        },
      ],
    },
    {
      baslik: 'Die Bedrohung durch Banquo',
      konum: 'III.i · Im Schloss, als König',
      olay: 'Nun ist er König. Doch die Hexen hatten gesagt, Banquos Nachkommen würden Könige sein. Er heuert Mörder an, um Banquo und seinen Sohn zu töten.',
      icsel: 'Die Paranoia beginnt. Der nächste Freund ist nun die größte Bedrohung. Macht zerstört das Vertrauen.',
      yuk: 'Der Augenblick, in dem die Sorge um den Thron die Freundschaft auf einen Rechnungsposten reduziert.',
      replikIzi: 'Macbeth (innerlich): „Eine fruchtlose Krone setzten sie mir aufs Haupt — ein unfruchtbares Zepter in die Hand. Habe ich für Banquos Geschlecht meine Seele befleckt?“ (III.i)',
      anlar: [
        {
          soru: '„Fruchtlose Krone, unfruchtbares Zepter“ — der Thron ist seiner, doch die Zukunft gehört Banquos Geschlecht. Welche schlägt die eigentliche Wunde: die Furcht, den Thron zu verlieren, oder die Leere des „für wen habe ich es getan“?',
          secenekler: [
            { baslik: 'Furcht, den Thron zu verlieren', aciklama: 'Die Logik der Macht: Erobertes muss bewahrt werden. Banquo ist kein Freund mehr — ein Stammbaum, der nach dem Thron greift.', oznelSabit: 'Was ich um diesen Preis erlangte, überlasse ich niemandem — der Thron ist nun ein Stück meines eigenen Fleisches; die Hand, die nach ihm greift, schlage ich ab.' },
            { baslik: 'Die Leere des „für wen“', aciklama: 'Er hat niemanden, dem er ihn weitergibt — er befleckte seine Seele, und sein Erbe werden Banquos Kinder sein. Die alte Wunde der Kinderlosigkeit reißt mitten auf dem Thron wieder auf.', oznelSabit: 'Ich verkaufte meine Seele, und ich habe niemanden, dem ich das Erlangte gebe — auf diesem Thron sitzt nicht ich, sondern die Leere selbst.' },
          ],
        },
        {
          soru: 'Sein letztes Gespräch mit Banquo wirkt wie ein Freundesplausch — „komm zum Bankett, reite dein Pferd“ — doch jede Frage ist ein Verhör: wohin, wie lange, kommt auch dein Sohn? Konnte Macbeth in jenem Gespräch seinem Freund in die Augen sehen?',
          secenekler: [
            { baslik: 'Er sah hin — ohne etwas durchsickern zu lassen', aciklama: 'Mitten in die Augen blickend verbarg er den Todesplan. Die Performance ist nun makellos — und diese Makellosigkeit ist der Beweis, dass in ihm etwas vollends gestorben ist.', oznelSabit: 'Ich blickte mitten in seine Augen, und meine Hand zitterte nicht — in jenem Augenblick verstand ich: Ich kann nun alles tun. Das machte mich nicht stark, sondern furchtbar.' },
            { baslik: 'Er konnte nicht hinsehen — der letzte Krümel Mensch', aciklama: 'Während er seine Fragen stellte, wich sein Blick aus; er sah auf das Pferd, den Sattel, die Tür. Jenes Ausweichen ist die letzte freundschaftliche Spur, die in ihm Banquo gehört.', oznelSabit: 'Ich plante alles, doch konnte ihm nicht in die Augen sehen — in mir stand noch ein letzter Ort, der ihm gehörte, und ich trat auf ihn und ging hinüber.' },
          ],
        },
      ],
    },
    {
      baslik: 'Entfremdung von Lady Macbeth',
      konum: 'III.ii · Im Schloss, unter vier Augen',
      olay: 'Das Paar, das einst jeden Plan teilte, beginnt sich voneinander zu lösen. Macbeth verbirgt seine neuen Pläne vor seiner Frau; er entscheidet allein.',
      icsel: 'Vereinsamung. Ein Mann mit Macht, doch ohne jemanden an seiner Seite. Die Partnerschaft weicht dem Schweigen.',
      yuk: 'Zwei Menschen, die gemeinsam in das Verbrechen eingetreten sind, verlieren einander unter der Last des Verbrechens.',
      replikIzi: 'Macbeth: „Mein Geist ist voller Skorpione, teure Frau.“ / „Bleib unschuldig im Wissen — bis du das Getane beklatschen kannst.“ (III.ii)',
      anlar: [
        {
          soru: '„Bleib unschuldig im Wissen, Geliebte“ — er verbirgt den Banquo-Plan vor ihr. Welche Absicht liegt in diesem Verbergen: sie zu schützen oder sie auszuschließen?',
          secenekler: [
            { baslik: 'Schutz', aciklama: 'Er sieht ihren Zerfall; die Last eines Mordes hat sie erschöpft, einen zweiten kann sie nicht tragen. Verbergen ist die letzte Gestalt, die Liebe in dieser Ehe annehmen kann.', oznelSabit: 'Ich verbarg es vor ihr, weil ich sie liebte — die einzige Gestalt der Liebe, die mir blieb, war, sie vor meinen eigenen Taten zu schützen.' },
            { baslik: 'Ausschluss', aciklama: 'Bei Duncan war der Wille ihrer; nun entscheidet er allein und will es ihr zeigen. Verbergen ist eine Erklärung der Unabhängigkeit.', oznelSabit: 'Beim ersten Mal hatte sie mich über jene Schwelle geführt — den zweiten verbarg ich vor ihr, damit ich wüsste, dass die Entscheidung allein mir gehören konnte.' },
          ],
        },
        {
          soru: 'Der Frau, mit der er dieselbe Schuld teilt, sagt er „mein Geist ist voller Skorpione“ — doch er nennt die Skorpione nicht beim Namen. Im selben Raum zwei getrennte Einsamkeiten. Welchen Namen nannte er in jenem Satz nicht — und was hätte sich zwischen ihnen geändert, hätte er ihn ausgesprochen?',
        },
      ],
    },
    {
      baslik: 'Banquos Geist',
      konum: 'III.iv · Die Banketttafel',
      olay: 'Beim ersten großen Bankett als König setzt sich der Geist Banquos auf den leeren Stuhl. Nur Macbeth sieht ihn; er gerät vor den Gästen in Panik. Lady Macbeth versucht, die Situation zu vertuschen.',
      icsel: 'Panik und Kontrollverlust. Wahnsinn vor allen. Die Schuld hat sich in ein sichtbares Gespenst verwandelt.',
      yuk: 'Das verdrängte Gewissen kehrt am öffentlichen Tisch eines Königs in körperlicher Gestalt zurück.',
      replikIzi: 'Macbeth (zum Gespenst): „Schüttle deine blutigen Locken nicht gegen mich!“ / „Komm in welcher Gestalt du willst, ich halte stand — nur komm nicht so!“ (die Banketttafel, III.iv)',
      anlar: [
        {
          soru: 'Auf dem leeren Stuhl sitzt Banquo — nur Macbeth sieht ihn. Was sieht Macbeth: ein wirkliches Gespenst von außen oder die fleischgewordene Gestalt der eigenen Schuld? (Fortsetzung der Hexen-Frage: kamen auch jene Stimmen von innen?)',
          secenekler: [
            { baslik: 'Das Gespenst von außen', aciklama: 'Die Welt sucht ihn heim; die Getöteten kehren zurück. Eine übernatürliche Wirklichkeit — und Macbeth ist wie ein Opfer in der Abwehr.', oznelSabit: 'Was ich an jener Tafel sah, kam nicht aus meinem Geist — meine Getöteten kehren zurück, und ich lebe nun zwischen zwei Welten.' },
            { baslik: 'Das Gespenst von innen', aciklama: 'Sein Geist gibt der Schuld Fleisch und Bein. Es gibt kein Entrinnen — denn die Quelle ist er selbst; wohin das Gespenst auch geht, es kommt mit ihm.', oznelSabit: 'Banquo war nicht dort — ich war dort. An jener Tafel lernte ich, dass ich meinem eigenen Geist nicht entrinnen kann.' },
          ],
        },
        {
          soru: 'Die Gäste schauen, Lady Macbeth versucht die Lage zu retten. Worauf richtet sich Macbeths Panik wirklich: auf das Gespenst selbst oder darauf, vor allen gesehen zu werden?',
          secenekler: [
            { baslik: 'Auf das Gespenst', aciklama: 'Die Furcht ist rein und total; Tafel, Gäste, Königtum verschwinden. In jenem Augenblick gibt es auf der Welt nur ihn und Banquo.', oznelSabit: 'In jenem Augenblick war ich nicht König, war nicht an der Tafel — auf der Welt waren nur wir zwei: ich und der Zurückgekehrte.' },
            { baslik: 'Auf das Gesehenwerden', aciklama: 'Das eigentliche Entsetzen ist das Fallen der Maske: sein Inneres wird vor aller Augen zum Schauspiel. Er fürchtet die Zeugen mehr als das Gespenst.', oznelSabit: 'Mehr als das Gespenst fürchtete ich die, die mein Gesicht sahen, das es sah — an jener Tafel wurde nicht meine Schuld, sondern mein Inneres entblößt.' },
          ],
        },
        {
          soru: 'Die Gäste zerstreuten sich, die Tafel leerte sich. Macbeth blickte noch einmal auf jenen Stuhl. Was sah er nun dort — und wer könnte sich je wieder auf jenen Stuhl setzen?',
        },
      ],
    },
    {
      baslik: 'Neue Prophezeiungen',
      konum: 'IV.i · Die Höhle der Hexen',
      olay: 'Macbeth kehrt zu den Hexen zurück und verlangt mehr. Drei Warnungen werden ihm zuteil: hüte dich vor Macduff; kein von einer Frau Geborener kann ihm schaden; er bleibt unbesiegt, bis der Birnam-Wald wandert. Er geht mit falscher Zuversicht.',
      icsel: 'Sucht. Die Prophezeiung ist keine Kraft mehr, sondern ein Rauschmittel. Je mehr er nach Sicherheit sucht, desto blinder wird er.',
      yuk: 'Ein Mann, der in die Dunkelheit zurückkehrt, um sein eigenes Schicksal zu hören, klammert sich an eine falsche Zuversicht.',
      replikIzi: 'Hexen: „Kein von einer Frau Geborener kann Macbeth schaden.“ / Macbeth: „So lebe, Macduff… und doch ist Sicherheit gut.“ (IV.i)',
      anlar: [
        {
          soru: 'Bei der ersten Begegnung waren die Hexen zu ihm gekommen; diesmal geht er zu ihnen. Welcher Natur ist diese Wendung: die Wahrheit zu wissen, was sie auch sei, oder die Zusicherung zu erhalten, die er hören will?',
          secenekler: [
            { baslik: 'Er will wissen', aciklama: 'Die Ungewissheit ist unerträglich; was die Antwort auch sei, ich will das Wissen, sagt er. Ein Geist, der noch Kontrolle sucht.', oznelSabit: 'Ich ging in die Dunkelheit, weil das Nichtwissen mich tötete — selbst die schlimmste Antwort war besser als keine Antwort.' },
            { baslik: 'Er bettelt um Zusicherung', aciklama: 'Er stellt die Frage so, dass die Antwort beruhigt. Er sucht kein Wissen, sondern Trost — die Prophezeiung ist nun ein Rauschmittel.', oznelSabit: 'Ich fragte sie nicht nach der Wahrheit — ich stellte die Fragen, die sie dazu brachten, mir „du bist sicher“ zu sagen. Und mit jeder Antwort wurde ich ein wenig blinder.' },
          ],
        },
        {
          soru: '„Kein von einer Frau Geborener kann dir schaden.“ Macbeth ist ein Mann, der das Wortspiel kennt — den „unmöglichen“ Cawdor hatte er erhalten. Glaubt er dieser Zusicherung wirklich?',
          secenekler: [
            { baslik: 'Voller Glaube', aciklama: 'Er klammert sich an den wörtlichen Sinn; ein Panzer ohne Frage. Ihm bleibt keine Kraft mehr zu zweifeln — der Glaube ist die einzige Stütze.', oznelSabit: 'Ich hinterfragte jenes Wort nie — denn ohne es konnte ich nicht aufrecht stehen. Vielleicht war es kein Glaube, sondern Atmen.' },
            { baslik: 'Er ahnt den Riss', aciklama: 'Er fühlt, dass irgendwo ein Spiel ist — besser als jeder weiß er, wie Prophezeiungen sich biegen. Doch er hat keine Alternative: er glaubt nicht, er klammert sich.', oznelSabit: 'Ich wusste, dass es einen Riss gab — Prophezeiungen hatten mich stets mit dem Wort getäuscht. Wissend klammerte ich mich; denn ich hatte keinen anderen Ast.' },
          ],
        },
      ],
    },
    {
      baslik: 'Vorbereitung auf die Schlacht',
      konum: 'V.iii · Die Burg Dunsinane',
      olay: 'Seine Lords verlassen ihn; das feindliche Heer naht. Dennoch hält er an der Zusicherung der Hexen fest — kein von einer Frau Geborener kann ihm schaden.',
      icsel: 'Eine falsche Zuversicht, oder das Müssen, an die Zuversicht zu glauben. Ein Panzer zwischen Glauben und Hoffnungslosigkeit.',
      yuk: 'Ein Mann, den alle verlassen haben, klammert sich trotzig an die einzige Stütze, die ihm bleibt: die Prophezeiung.',
      replikIzi: 'Macbeth: „Mein Leben ist zum welken Laub geworden — Ehre, Liebe, Gehorsam, Freunde, das Recht des Alters… nichts davon darf ich erhoffen.“ (V.iii)',
      anlar: [
        {
          soru: '„Welkes Laub“ — er zieht die Bilanz seines Lebens: Ehre, Liebe, Gehorsam, Freunde; nichts davon wird sein. Wessen Stimme ist diese Bilanz: die eines zum ersten Mal voll gesehenen Verlusts oder eines von Anfang an gewussten Preises?',
          secenekler: [
            { baslik: 'Verspätete Abrechnung', aciklama: 'Zum ersten Mal sieht er ganz, was er geopfert hat; je länger die Liste, desto mehr sinkt er in sich zusammen. Der Augenblick, in dem er der Reue am nächsten kommt.', oznelSabit: 'Während ich jene Liste machte, verstand ich: Alles, was ich gewann, war neben dem Verlorenen ein Nichts — und das konnte ich erst sehen, als alles vorbei war.' },
            { baslik: 'Gewusster Preis', aciklama: 'Das Preisschild stand von Anfang an fest; nun bestätigt er nur, dass die Zahlung vollendet ist. Kein Raum für den Luxus der Reue — eine kalte Inventur.', oznelSabit: 'Ich wusste stets, was ich wofür verkaufte — an jenem Tag schloss ich nur die Rechnung. Reue ist der Luxus derer, die den Preis nicht kennen.' },
          ],
        },
        {
          soru: 'Während die Schlacht noch fern ist, verlangt er seine Rüstung — dann lässt er sie ablegen, dann verlangt er sie erneut. Wovor schützt jene Rüstung seinen Körper — vor Schwertern oder vor etwas anderem, das er hören würde, bliebe er ungepanzert?',
        },
      ],
    },
    {
      baslik: 'Der Tod Lady Macbeths',
      konum: 'V.v · In der Burg',
      olay: 'Mitten in der Schlacht trifft die Nachricht ein, dass Lady Macbeth gestorben ist. Macbeths Antwort ist kein Schrei der Trauer, sondern eine kalte Betrachtung über die Sinnlosigkeit des Lebens — „Morgen, und morgen, und morgen…“',
      icsel: 'Kein Schmerz, sondern Leere. Sinnlosigkeit. Das Gefühl ist schon erschöpft; was bleibt, ist nur eine müde Nichtigkeit.',
      yuk: 'Den Tod der Frau, mit der er alles gewagt hat, mit einem Körper aufzunehmen, der nicht mehr weinen kann.',
      replikIzi: 'Macbeth: „Sie hätte später sterben sollen — für ein solches Wort wäre Zeit gewesen. Morgen, und morgen, und morgen…“ (V.v)',
      anlar: [
        {
          soru: '„Sie hätte später sterben sollen — für ein solches Wort wäre Zeit gewesen.“ Was ist dieser Satz: ein Aufschieben der Trauer („jetzt habe ich keine Zeit, später weine ich“) oder die Unmöglichkeit der Trauer („es wird nie mehr ein ‚später‘ geben“)?',
          secenekler: [
            { baslik: 'Aufgeschobene Trauer', aciklama: 'Wenn die Schlacht vorbei ist, wenn alles sich beruhigt… Er glaubt noch an ein „später“; er stellt die Trauer ins Regal. Die Tragödie: jenes Später kommt nie.', oznelSabit: 'Ich hob meine Trauer für die Zeit nach der Schlacht auf — ich wusste nicht, dass für mich kein „später“ geblieben war. Jene Klage steht noch in mir, unverbrannt.' },
            { baslik: 'Unmögliche Trauer', aciklama: 'Es gibt kein „später“ mehr — die Worte haben ihren Sinn verloren. Genau hier entspringt der Morgen-Monolog: die Zeit ist nichts mehr, worin man trauern könnte.', oznelSabit: 'Im Augenblick, da ich sie verlor, verstand ich: Es gibt keine Zeit, in der ich weinen könnte — denn die Zeit selbst verlor mit ihr ihren Sinn.' },
          ],
        },
        {
          soru: '„Morgen, und morgen, und morgen…“ — an wen ist dieser Monolog gerichtet? Das laute Denken eines in sich zusammenstürzenden Mannes oder eine an die Frau, von der er sich nicht verabschieden konnte, verschlüsselte Klage?',
          secenekler: [
            { baslik: 'An sich selbst', aciklama: 'Er spricht nicht zur Welt, sondern in sein eigenes Inneres; die laute Gestalt des Zusammenbruchs. Lady Macbeth ist selbst in diesem Monolog nicht mehr da — so groß ist die Leere.', oznelSabit: 'Jene Worte sagte ich niemandem — es war die Stimme, die ich ausstieß, während ich in mich selbst fiel. Selbst ihr Name fiel nicht; denn kein Name trug mehr etwas.' },
            { baslik: 'An sie', aciklama: 'Da er sich nicht verabschieden konnte, verabschiedet er sich vom All — der Monolog ist der Code der ungesprochenen Klage. „Das Leben ist sinnlos“ zu sagen ist die einzige aussprechbare Gestalt von „ohne dich sinnlos“.', oznelSabit: 'Während ich sagte „das Leben ist ein Schatten“, rief ich sie an — es war die Klage des Mannes, der nicht klagen kann; niemand verstand sie, ob sie es hörte, weiß ich nicht.' },
          ],
        },
        {
          soru: 'Wenige Sekunden, nachdem er das Leben „ein Märchen voll Lärm und Wut, das nichts bedeutet“ nennt, verlangt er seine Rüstung und kehrt in die Schlacht zurück. Warum kämpft der Mann, der ans Nichts glaubt, noch — was stand in jenen wenigen Sekunden in ihm auf?',
        },
      ],
    },
    {
      baslik: 'Er tötet den jungen Siward',
      konum: 'V.vii · Das Schlachtfeld',
      olay: 'Auf dem Schlachtfeld trifft er auf den jungen Siward und tötet ihn mit Leichtigkeit. Der Teil der Prophezeiung „kein von einer Frau Geborener“ scheint sich für einen Augenblick bestätigt.',
      icsel: 'Ein kurzer Sieg, die vorübergehende Lust des Bestätigtwerdens. Doch Macduff naht.',
      yuk: 'Ein Mann, der das Ende ahnt, sucht ein letztes Mal Zuflucht im Schild der Prophezeiung.',
      replikIzi: 'Der junge Siward fällt. Macbeth: „Du warst von einer Frau geboren — keines von einer Frau Geborenen Schwert beißt mich.“ (V.vii)',
      anlar: [
        {
          soru: 'Er tötet den jungen Siward auf dem Schlachtfeld, von Angesicht zu Angesicht, mit dem Schwert — seit Duncan das erste „regelgerechte“ Töten. Als Siward fällt, was ist in ihm: die seltsame Erleichterung der Rückkehr zur Kriegeridentität oder nichts?',
          secenekler: [
            { baslik: 'Rückkehr zum Krieger', aciklama: 'Zum ersten Mal seit Jahren ist das Blut „legitim“ — kein Hinterhalt, kein schlafender Mann, kein Mörder. Für einen Augenblick der alte Macbeth: in seinem Handwerk. Eine ironische Erleichterung.', oznelSabit: 'Als ich jenen Jungen tötete, erkannte ich mich zum ersten Mal seit Jahren — der Krieg war meine Sprache, und für einen Augenblick war ich in meine Muttersprache zurückgekehrt.' },
            { baslik: 'Nichts', aciklama: 'Er blickt auf den Jungen — kein Triumph, keine Reue, keine Erleichterung. Das Töten ist so mechanisch geworden wie das Atmen. Das eigentliche Entsetzen ist diese Leere selbst.', oznelSabit: 'Während er fiel, blickte ich in sein Gesicht und fühlte nichts — in jenem Augenblick verstand ich: In mir blieb kein Ort, den das Töten berühren konnte.' },
          ],
        },
        {
          soru: 'Sein Gegenüber ist fast ein Kind — hätte sein eigener Sohn gelebt, wäre er in diesem Alter. Suchte dieser Gedanke ihn heim, als das Schwert niederfuhr — oder war jene Tür längst zugemauert?',
        },
      ],
    },
    {
      baslik: 'Das Ende vor Macduff',
      konum: 'V.viii · Das Schlachtfeld',
      olay: 'Er trifft auf Macduff. Macbeth sagt, er sei von keiner Frau geboren; Macduff erklärt, er sei vor der Zeit aus dem Mutterleib gerissen worden. Die letzte Prophezeiung bricht zusammen. Macbeth wählt dennoch den Kampf und stirbt.',
      icsel: 'Alles ist zerfallen. Der Panzer ist auseinandergebrochen. Doch statt sich zu ergeben, wählt er, kämpfend zu fallen, obwohl er weiß, dass er verlieren wird.',
      yuk: 'Ein Mann, der alle Zusicherungen verloren hat, wählt im letzten Augenblick dennoch das Handeln vor dem Nichts.',
      replikIzi: 'Macduff: „Ich wurde aus meiner Mutter Leib vor der Zeit gerissen.“ / Macbeth: „Ich ergebe mich nicht… Schlag zu, Macduff!“ (V.viii)',
      anlar: [
        {
          soru: '„Ich wurde aus dem Mutterleib vor der Zeit gerissen“ — auch die letzte Prophezeiung brach zusammen. Was war in der Sekunde, da er jenen Satz hörte, in ihm: das Zersplittern des letzten Panzers oder eine seltsame Befreiung?',
          secenekler: [
            { baslik: 'Zusammenbruch', aciklama: 'Die letzte Stütze ist fort; zum ersten Mal wirklich nackt und sterblich. „Verflucht sei die Zunge, die mir das sagt“ — die verdrängte Furcht kehrt auf einen Schlag zurück.', oznelSabit: 'Mit jenem Satz fiel der letzte Panzer von mir — und darunter trat die Furcht hervor, die von Anfang an dort gewartet hatte.' },
            { baslik: 'Befreiung', aciklama: 'Die Prophezeiungen sind zu Ende — zum ersten Mal ist er in keinem Drehbuch. Der Tod ist gewiss und wurde seltsam leicht: Was nun folgt, ist zum ersten Mal von Anfang an ganz seine eigene Wahl.', oznelSabit: 'Als die Prophezeiung zusammenbrach, fürchtete ich mich nicht — ich wurde leicht. Zum ersten Mal in meinem Leben war ich in einem Augenblick, den niemand geschrieben hatte; mein Ende gehörte mir.' },
          ],
        },
        {
          soru: 'Ergäbe er sich, könnte er leben — kniend vor Malcolm, als Schaustück des Volkes. Er wählt, kämpfend zu sterben. Wohin richtet sich diese Wahl: noch auf die Augen anderer oder nur noch auf das letzte Wort, das er sich selbst gibt?',
          secenekler: [
            { baslik: 'Die Augen anderer', aciklama: 'Kein Schaustück sein, sich nicht schleifen lassen, Malcolm nicht beugen — die Ehre ist nach außen gewandt; wie er erscheint, ist bis zum letzten Augenblick wichtig. Die Königsmaske bis ins Grab.', oznelSabit: 'Einen knienden Macbeth würde niemand sehen — mein Körper konnte fallen, doch mein Bild niemals. Selbst in meinem letzten Atemzug hatte ich Zuschauer.' },
            { baslik: 'Signatur an sich selbst', aciklama: 'Niemand muss es sehen. Wenn das Leben sinnlos ist, liegt der einzige Sinn in der letzten Wahl: Kämpfen ist keine Hoffnung, sondern eine Signatur. Die letzte Antwort an das Nichts.', oznelSabit: 'Das letzte Schwert hob ich für niemanden — das Leben gab mir keinen Sinn, ich hinterließ ihm mit meinem letzten Augenblick eine Signatur: Es endete kämpfend, nicht kniend.' },
          ],
        },
        {
          soru: 'Als das letzte Schwert sich hob, welches letzte Bild zog vor Macbeths Augen vorüber — die Hexen, Duncan, die Krone… oder ein Gesicht, das nie auf die Bühne kam?',
        },
      ],
    },
  ],

  oyunOncesi: {
    olaylar: [
      {
        baslik: 'Aufstieg als Krieger — der General, dem der König vertraut',
        sahneRef: 'Er kehrt siegreich vom Schlachtfeld zurück; Duncan rühmt ihn als treusten General.',
        yuk: 'Der Gipfel von Ehre und Treue. Macbeths noch unbefleckte Identität — die Werte, die er später verraten wird.',
        yansimaSorusu: 'Wo in Macbeths Körper hatte sich dieser Gipfel von Treue und Ehre festgesetzt — und woher hat der Verrat ihn gebrochen?',
        replikIzi: 'Verwundeter Soldat: „Der tapfere Macbeth — ein Mann, dieses Namens würdig…“ (I.ii, die Erzählung des Sieges)',
        anlar: [
          {
            soru: '„Der tapfere Macbeth“ — wie sitzt dieser Name auf ihm: wie ein verdientes, bequem getragenes Gewand, oder wie etwas, das in jeder Schlacht neu bewiesen werden muss?',
            secenekler: [
              { baslik: 'Der Name ist meiner', aciklama: 'Die Identität ist fest; Name und Mann decken sich. Genau darum wird der Verrat ihn an der Wurzel brechen — was fest ist, reißt tief.', oznelSabit: 'Ich war jenes Namens würdig und wusste es — was ich später verlor, war nicht der Ruhm, sondern jene Deckung zwischen mir und meinem Namen.' },
              { baslik: 'Der Name muss genährt werden', aciklama: 'Jeder Sieg ist die Schuld des nächsten Beweises; der Name ist kein Besitz, sondern ein Hunger. Die Prophezeiung fällt genau auf diesen Hunger.', oznelSabit: 'Je öfter man „der tapfere Macbeth“ sagte, desto größer wuchs die Frage in mir: genüge ich? Die Prophezeiung schien mir eine Antwort — dabei war sie die gewachsene Gestalt derselben Frage.' },
            ],
          },
          {
            soru: 'Bei der Heimkehr vom Sieg ruft das Volk „der tapfere Macbeth“. In jener Stimme gab es ein Ohr, von dem Macbeth am meisten wollte, dass es ihn hört — wessen?',
          },
        ],
      },
      {
        baslik: 'Die Ehe mit Lady Macbeth — die Gründung des gemeinsamen Ehrgeizes',
        sahneRef: 'Das Paar hat, noch bevor der Vorhang aufgeht, eine Partnerschaft gegründet, die einen Ehrgeiz teilt.',
        yuk: 'Zwei Menschen vereinen sich in einem einzigen Verlangen. Der Anfang der Bindung, die sie später voneinander reißen wird.',
        yansimaSorusu: 'In welchem Augenblick begannen Macbeth und Lady Macbeth, gemeinsam nach der Macht zu verlangen?',
        replikIzi: 'Brief: „Mein Gefährte in der Größe…“ (I.v — die erste Person, mit der er die Prophezeiung teilt)',
        anlar: [
          {
            soru: 'Woher trat das Machtverlangen in diese Ehe ein: keimte es zuerst in Macbeth, oder sah Macbeth es zuerst in den Augen seiner Frau?',
            secenekler: [
              { baslik: 'In mir begann es', aciklama: 'Das Verlangen war seins; Lady Macbeth war nicht die Flamme, sondern der Wind. Die Hand, die den Brief schrieb, hatte schon Feuer gefangen.', oznelSabit: 'Das Verlangen war in mir — sie verstand nur zu blasen. Die Schuld in ihre Augen zu schreiben war leicht; doch der Funke kam aus meiner Esse.' },
              { baslik: 'In ihren Augen sah ich es', aciklama: 'Er las sein eigenes Verlangen zuerst in ihrem Blick, dann eignete er es sich an. Wer zuerst wollte, ist nun ein unlösbarer Knoten.', oznelSabit: 'Das Wollen lernte ich von ihr — was ich in ihren Augen sah, hielt ich für mein eigenes Verlangen; vielleicht waren wir beide einander Spiegel.' },
            ],
          },
          {
            soru: 'In den ersten Jahren ihrer Ehe gab es eine Zukunft, die sie einander zuflüsterten. Stand in jenem Traum der Thron — oder trat der Thron später an die Stelle jenes Traums?',
          },
        ],
      },
      {
        baslik: 'Kinderlosigkeit — ein Königsanwärter ohne Nachkommen',
        sahneRef: 'Der Text deutet die Existenz eines Kindes an, doch Macbeth hat keine Nachkommen; die Hexen geben den Thron Banquos Geschlecht.',
        yuk: 'Die stille Wunde, die Zukunft nicht erreichen zu können. Macbeth tut alles für den Thron, doch es gibt niemanden, dem er ihn übergeben könnte.',
        yansimaSorusu: 'Wie nährt oder zehrt die Tatsache, dass er sein Geschlecht nicht fortsetzen kann, Macbeths Machthunger?',
        replikIzi: 'Lady Macbeth: „Ich habe gestillt — ich weiß, was es heißt, ein Kind zu stillen…“ (I.vii)',
        anlar: [
          {
            soru: 'Wie wurde der Name jenes Kindes nach dem Verlust in diesem Haus getragen: einmal ausgesprochen und für immer verschlossen, oder nie in Worte gefasst?',
            secenekler: [
              { baslik: 'Einmal — nie wieder', aciklama: 'Eine Nacht sprachen sie, weinten, schlossen die Tür. Hinter jener Tür ein Zimmer, das beide kennen, in das aber keiner geht.', oznelSabit: 'Wir sprachen von ihm ein einziges Mal — jene Nacht endete, und wir schlossen die Tür gemeinsam. Der Schlüssel zu jenem Zimmer liegt bei uns beiden; keiner von uns benutzt ihn.' },
              { baslik: 'Nie in Worte gefasst', aciklama: 'Ein Pakt des Schweigens; die Trauer kam nicht zur Sprache, floss in anderes. Der gemeinsame Ehrgeiz war vielleicht die Sprache der unsagbaren Trauer.', oznelSabit: 'Seinen Namen nannten wir nie — wir schwiegen, und je mehr wir schwiegen, desto mehr ließen wir anderes wachsen. Vielleicht war der Thron der Name dessen, was wir nicht benennen konnten.' },
            ],
          },
          {
            soru: 'Lady Macbeth gebrauchte jenes Wort — „ich habe gestillt“ —, als sie ihn zum Mord überredete. Welches Zimmer öffnete sich in Macbeth, als er es hörte, und wer schloss in jener Nacht die Tür jenes Zimmers?',
          },
        ],
      },
      {
        baslik: 'Das erste Töten — die erste Begegnung des Kriegers mit Blut',
        sahneRef: 'Als Soldat hat Macbeth zuvor schon getötet; der Krieg ist sein Handwerk.',
        yuk: 'Die feine Linie zwischen rechtmäßiger Gewalt und Mord. Hat das Töten im Krieg ihn auf den Mord an Duncan vorbereitet, oder war jene Schwelle eine ganz andere?',
        yansimaSorusu: 'Fühlte sich das im Krieg vergossene Blut in Macbeths Hand genauso an wie Duncans Blut, oder ganz anders?',
        replikIzi: 'Verwundeter Soldat: „Mit dem Schwert, das von dampfendem Blut rauchte…“ (I.ii — die Sprache des Kriegerhandwerks)',
        anlar: [
          {
            soru: 'Erinnert sich Macbeth an das Gesicht des ersten Mannes, den er im Krieg tötete?',
            secenekler: [
              { baslik: 'Er erinnert sich', aciklama: 'Jedes Gesicht ist verzeichnet; der Krieg ist ein Handwerk, doch der Preis wird im Innern gehalten. Töten war nie umsonst.', oznelSabit: 'Das erste Gesicht trage ich noch — der Krieg lehrte mich zu töten, doch nicht zu vergessen. Duncan war nicht die erste Seite jenes Buches; er war die schwerste.' },
              { baslik: 'Er erinnert sich nicht', aciklama: 'Der Krieg löscht Gesichter; Töten war ein Beruf, kein Verzeichnis. Duncans Gesicht wird das erste unauslöschliche sein.', oznelSabit: 'Die Gesichter derer, die ich im Krieg tötete, gibt es nicht — bis Duncan blieb mir kein Gesicht. Seins wurde eingegraben; denn ich tötete ihn nicht als Soldat, sondern als ich selbst.' },
            ],
          },
          {
            soru: 'Konnte Macbeth in der Nacht, in der er im Krieg zum ersten Mal tötete, schlafen — und war der Schlaf jener Nacht derselbe Schlaf, der Jahre später in Duncans Nacht „gemordet“ wurde?',
          },
        ],
      },
      {
        baslik: 'Duncans Hand auf seiner Schulter — der Augenblick des Aufstiegs',
        sahneRef: 'Vor Beginn des Stücks: Duncan erhob ihn zum General und zeigte vor allen sein Vertrauen.',
        yuk: 'Die Gründung von Schuld und Treue. Die andere Waagschale des Verrats — die Hand, die sich gegen Duncan erhebt, hatte zuvor diese Hand gehalten.',
        yansimaSorusu: 'Was fühlte Macbeth, als Duncan zum ersten Mal die Hand auf seine Schulter legte — und wo war die Erinnerung an jenen Augenblick in der Mordnacht?',
        replikIzi: 'Duncan: „Ich habe begonnen, dich zu pflanzen — und werde mich mühen, dass du wächst.“ (I.iv)',
        anlar: [
          {
            soru: 'Als Duncans Hand sich zum ersten Mal auf seine Schulter legte — vor allen, als Erwählter — was war das Erste in Macbeth: Stolz oder Last?',
            secenekler: [
              { baslik: 'Stolz', aciklama: 'Gesehen, erwählt, erhoben werden. Jene Hand hob ihn über alle — und von oben sieht der Thron anders aus.', oznelSabit: 'Als jene Hand sich auf meine Schulter legte, wuchs ich — und sah von oben zum ersten Mal den Thron. Die Hand, die mich erhob, gewöhnte mein Auge an die Höhe.' },
              { baslik: 'Last', aciklama: 'Vertrauen ist eine Schuld; das Gewicht jener Hand wich nie von seiner Schulter. Was er in der Mordnacht abwarf, war vielleicht jenes Gewicht.', oznelSabit: 'Das Gewicht jener Hand trug ich jahrelang — Vertrauen zu verdienen war ermüdender als zu verraten. Was sich in jener Nacht von meiner Schulter hob, war seine Hand.' },
            ],
          },
          {
            soru: 'Nachdem er den Thron bestiegen hatte — als König sitzend — gab es einen Augenblick, in dem er das gespenstische Gewicht jener Hand auf seiner Schulter fühlte? Wann war das?',
          },
        ],
      },
      {
        baslik: 'Rücken an Rücken mit Banquo — eine mit Blut besiegelte Freundschaft',
        sahneRef: 'Vor Jahren retteten sie einander in einer Schlacht das Leben; die Freundschaft wurde nicht mit Worten, sondern mit Blut gegründet.',
        yuk: 'Die Wurzel der Bindung zu dem Mann, den er töten lassen wird. Banquos Gespenst ist die Wiederkehr dieser unbeglichenen Schuld.',
        yansimaSorusu: 'Wie ist der Augenblick, in dem Banquo ihm das Leben rettete, in Macbeths Körper verzeichnet — und wo war dieses Verzeichnis, als er die Mörder sandte?',
        replikIzi: 'Macbeth (innerlich): „Er ist der Einzige, den ich fürchten muss — neben ihm wird mein Genius gescholten.“ (III.i — die Wendung der Freundschaft zum Schatten)',
        anlar: [
          {
            soru: 'Als Banquo ihm das Leben rettete — wie wurde jene Schuld in Macbeth verzeichnet: als Brüderlichkeit oder als stille Rechnung?',
            secenekler: [
              { baslik: 'Brüderlichkeit', aciklama: 'Keine Schuld, sondern Bindung; von jenem Tag an sind die beiden ein Leib. Daher die zerstörende Wucht des Gespenstes — was kommt, ist kein Opfer, sondern ein Bruder.', oznelSabit: 'Als er mich rettete, hörte das zwischen uns auf, eine Rechnung zu sein — ich ließ meinen Bruder töten; darum setzte sich das Gespenst an die Tafel.' },
              { baslik: 'Stille Rechnung', aciklama: 'Die Wohltat wurde wie eine Forderung verbucht; die Dankbarkeit wurde mit der Zeit zur Last. Die Mörder zu senden hieß vielleicht, die Rechnung mit Blut zu schließen.', oznelSabit: 'Er gab mir mein Leben, und seit jenem Tag lebte ich als Schuldner — Schuldner zu sein heißt zu schrumpfen; als ich ihn töten ließ, schloss ich vielleicht nicht die Rechnung, sondern meine Kleinheit.' },
            ],
          },
          {
            soru: 'In der Nacht nach jener Schlacht, am Feuer, die beiden nebeneinander. Was versprachen sie einander — in Worten oder im Schweigen?',
          },
        ],
      },
      {
        baslik: 'Aufbruch zum letzten Feldzug — Abschied von Lady Macbeth',
        sahneRef: 'Unmittelbar vor dem Stück: Beim Aufbruch in den Krieg verabschiedete er sich von seiner Frau; sein nächster Kontakt wird der Prophezeiungsbrief sein.',
        yuk: 'Der letzte Blick auf die Frau, der er schreiben wird. Die letzte unschuldige Gestalt der Partnerschaft — die Spannung unter dem Wiedersehen in Szene 5 beginnt hier.',
        yansimaSorusu: 'Was sagten sie einander bei jenem Abschied nicht — und wohin in dieses Ungesagte fiel der Prophezeiungsbrief?',
        replikIzi: 'Brief, gleich nach der Prophezeiung geschrieben: „Ich hielt es für meine Pflicht, dir dies zu berichten, mein Gefährte in der Größe…“ (I.v)',
        anlar: [
          {
            soru: 'Kaum hatte er die Prophezeiung gehört, war sein Erstes, ihr zu schreiben — mitten im Krieg, noch bevor er nach Hause kam. Was war diese Eile: ohne Teilen wäre sie nicht wirklich geworden, oder brauchte er ihre Zustimmung?',
            secenekler: [
              { baslik: 'Ohne Teilen wird es nicht wirklich', aciklama: 'Nichts ist vollständig, bis es mit ihr geteilt ist; das ist die Tiefe der Partnerschaft. Der Brief ist keine Nachricht, sondern eine Verwirklichung.', oznelSabit: 'Ohne ihr zu schreiben war die Prophezeiung ein Wind — die Worte wurden wirklich, als sie ihre Hand berührten. So waren wir: etwas war nur, wenn es in uns beiden war.' },
              { baslik: 'Er brauchte ihre Zustimmung', aciklama: 'Die Erlaubnis des Verlangens würde er von ihr erhalten; die Adresse des Willens ist sie. Der Brief ist kein Teilen, sondern eine Frage: „Wollen wir?“', oznelSabit: 'Jener Brief war keine frohe Botschaft, sondern eine Frage — habe ich die Erlaubnis zu wollen? Die Antwort kannte ich; vielleicht schrieb ich gerade, um eben diese Antwort zu hören.' },
            ],
          },
          {
            soru: 'Was war die letzte Berührung bei jenem Abschied — Hände, ein Blick, nichts? Gestalte die letzte unschuldige Berührung der Partnerschaft.',
          },
        ],
        yuruyus: {
          girisBaslik: 'Der letzte Abschied — baue die Lücke',
          girisAciklama: 'Shakespeare öffnet das Stück mitten im Krieg; diesen Morgen schreibt er nie. Der letzte unschuldige Morgen vor der Prophezeiung — der Abschied selbst. Jenen Morgen wirst du bauen.',
          girisSentez: 'Was du auf diesem Gang wählst, wird deins; mit jenem Mann wirst du Szene 1 betreten.',
          gecisButonu: 'Zur ersten Station',
          cikisRitueli: 'Tritt einen Schritt aus dem Morgen zurück; atme aus. Der Mann, der diesen Abschied trägt, wird gleich im Wald drei Stimmen hören — das Stück beginnt mit jenem Mann. Was trägst du?',
          esik: {
            komut: 'Dies ist ein Gang. Den letzten Morgen vor dem Stück baust du Schritt für Schritt — vom Morgengrauen bis zum letzten Blick auf die Burg vom Pferd aus. Keine Eile.',
            hitap: 'Tritt in den Morgen, wenn du bereit bist.',
            buton: 'Ich beginne',
            adimlar: [
              'Baue zuerst den Augenblick: Der Krieg ruft; dieses Haus, diese Frau, dieses Leben bleibt zurück — für eine kurze Zeit, so glaubt er.',
              'Bemerke an jeder Station, wo in seinem Körper Macbeth in jenem Augenblick steht — bemerke es, dann gehe weiter.',
              'Was du wählst, wird deins; der Mann, der im Wald die Stimmen hören wird, wird an diesem Morgen bestimmt.',
            ],
          },
          istasyonlar: [
            {
              zamanRozet: 'Morgengrauen — das Haus schläft noch',
              acilis: 'Du erwachtest vor Tagesanbruch. Die Burg ist still; Flure, der Herd, die schlafenden Gesichter. Bald wirst du fort sein.',
              yazmaPlaceholder: 'Das Letzte, worauf ich blickte…',
              sorular: [
                'Woran blieb Macbeths Blick zuletzt hängen, bevor er das Haus verließ — und warum daran?',
              ],
            },
            {
              zamanRozet: 'Die Rüstung wird angelegt',
              acilis: 'Die Rüstung fügt sich Stück für Stück an seinen Körper. Die letzte Schnalle — am Rücken, schwer allein zu erreichen.',
              sorular: [
                'Wessen Hand schloss jene letzte Schnalle?',
              ],
              catal: {
                etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
                secenekler: [
                  { baslik: 'Sie schloss sie', aciklama: 'Vor jedem Mal dasselbe Ritual; ihre Hände kennen die Rüstung. Die Partnerschaft ist in den Körper eingeschrieben.', muhur: 'Vergiss das nicht — meine Rüstung schloss stets sie; in den Krieg zog ich, von ihren Händen gewappnet. Später schlossen jene Hände anderes.', ozet: 'In den Krieg zog ich, von ihren Händen gewappnet.' },
                  { baslik: 'Ich schloss sie selbst', aciklama: 'Der Krieger wappnet sich allein; zwischen Haus und Krieg gibt es eine Linie. Diese Linie zu wahren ist eine Disziplin.', muhur: 'Vergiss das nicht — meine Rüstung schloss ich stets selbst; ich ließ das Haus nicht in den Krieg geraten. Jene Linie löschte später ich selbst, mit dem Dolch.', ozet: 'Die Linie zwischen Haus und Krieg löschte später ich selbst.' },
                ],
              },
            },
            {
              zamanRozet: 'Türschwelle — der Abschied',
              acilis: 'Ihr steht einander gegenüber. Das Zusagende ist gesagt oder bleibt ungesagt. Ein letzter Blick.',
              sorular: [
                'Was war in ihrem Blick beim letzten Sehen?',
              ],
              catal: {
                etiket: 'Was hast du gesehen?',
                secenekler: [
                  { baslik: 'Erwartung', aciklama: 'Ein Blick, der Größe von ihm erwartet; bei der Rückkehr darf seine Hand nicht leer sein. Der Brief wird an jenen Blick geschrieben.', muhur: 'Vergiss das nicht — in ihren Augen war eine Erwartung; als ich die Prophezeiung hörte, kam mir zuerst ihr Blick in den Sinn. Den Brief schrieb ich an jenen Blick.', ozet: 'Den Brief schrieb ich an jenen Blick.' },
                  { baslik: 'Sorge', aciklama: 'Der Blick auf den in den Krieg ziehenden Mann — er kehrt vielleicht nicht zurück. Jene Sorge wird er mit der frohen Botschaft der Größe zudecken wollen.', muhur: 'Vergiss das nicht — in ihren Augen war Furcht, die Furcht, mich zu verlieren. Ich schrieb ihr die frohe Botschaft des Throns; dabei wollte sie vielleicht nur meine Rückkehr.', ozet: 'Was sie wollte, war vielleicht nur meine Rückkehr.' },
                ],
              },
            },
            {
              zamanRozet: 'Auf dem Pferd',
              acilis: 'Die Burg bleibt zurück; Hufschläge zerschneiden den Morgen. Der Weg öffnet sich, der Krieg wartet.',
              yazmaPlaceholder: 'Während die Burg hinter mir zurückblieb…',
              sorular: [
                'Blickte Macbeth zurück — und wenn ja, was sah er am Fenster; wenn nicht, warum sah er nicht hin?',
              ],
            },
          ],
        },
      },
    ],
    iliskiler: [
      {
        ad: 'Lady Macbeth',
        rol: 'EHEFRAU',
        gecmis: 'Partnerin im geteilten Ehrgeiz; der Wille, der ihn in die Entscheidung trieb.',
        simdi: 'Erst die treibende Kraft, dann die sich entfernende und zusammenbrechende Partnerin. Das Verbrechen verzehrt beide einzeln.',
        iz: 'Leidenschaft + Mitschuld + zunehmend tiefer werdendes Schweigen.',
        yansimaSorusu: 'Wenn Lady Macbeth zu ihm kommt, spürt Macbeth dann Kraft oder den Spiegel seiner eigenen Schwäche?',
      },
      {
        ad: 'Banquo',
        rol: 'ENGSTER FREUND / WAFFENBRUDER',
        gecmis: 'Mit dem sie gemeinsam auf die Hexen trafen, der Freund, an dessen Seite er jahrelang kämpfte.',
        simdi: 'Wegen der Prophezeiung zur Bedrohung gewordener Freund; den er ermorden ließ, der dann als Gespenst vor ihm steht — das Gewissen.',
        iz: 'Vertrauen + Eifersucht + die Reue des Verrats.',
        yansimaSorusu: 'Sieht Macbeth, wenn er Banquo ansieht, einen Freund — oder den lebenden Erinnerer daran, dass er kein Geschlecht hat?',
      },
      {
        ad: 'Duncan',
        rol: 'KÖNIG / VERWANDTER / GAST',
        gecmis: 'Der König, der ihm vertraute und ihn ehrte; zugleich sein Verwandter.',
        simdi: 'Der Mann, den er durch die Verletzung dreifach heiliger Bande (König-Verwandter-Gast) ermordete. Das erste und schwerste Verbrechen.',
        iz: 'Treue + Bruch + das Gewicht eines unwiderruflichen Bruchs.',
        yansimaSorusu: 'Wenn Duncan ihm sein Vertrauen zeigt, wiegt in Macbeth dann die Treue schwerer oder die kalte Berechnung der Gelegenheit?',
      },
      {
        ad: 'Die Hexen',
        rol: 'PROPHEZEIUNG / DUNKLE STIMME',
        gecmis: 'Bis zur Eröffnung der Bühne nicht existent; doch eine Macht, die das Verlangen in Macbeth von außen in Worte fasst.',
        simdi: 'Ein Objekt der Sucht. Macbeth kehrt immer wieder zu ihnen zurück, um Sicherheit zu suchen; jeder Rückweg macht ihn blinder.',
        iz: 'Sog + Sucht + die Quelle einer falschen Zuversicht.',
        yansimaSorusu: 'Sagen die Hexen Macbeth, was bereits in ihm ist, oder pflanzen sie in ihm ein Verlangen ein, das er nicht hatte?',
      },
      {
        ad: 'Macduff',
        rol: 'NEMESIS',
        gecmis: 'Ein Edelmann; zu Beginn gibt es keinen unmittelbaren Konflikt.',
        simdi: 'Der Mann, dessen Familie er hinrichten ließ und der ihn am Ende tötet. Die „nicht-von-einer-Frau-geborene“ Lücke der Prophezeiung.',
        iz: 'Geringschätzung + Furcht + das Gesicht des unausweichlichen Endes.',
        yansimaSorusu: 'Welche Abwehr verkrampft sich in Macbeths Körper jedes Mal, wenn Macduffs Name fällt?',
      },
    ],
  },

  tercihler: [
    {
      konu: 'Die Hexen und die Prophezeiung',
      baslik: 'Pflanzen die Hexen ein Verlangen in Macbeth, das er nicht hatte, oder sprechen sie aus, was schon dort ist?',
      isaretler: [
        { ref: 'Erste Begegnung', metin: 'Sobald die Hexen sagen, er werde König werden, springt Macbeths Geist sofort zum Mord — als ob der Gedanke schon bereit dort gewartet hätte.' },
        { ref: 'Rückkehr zu den Hexen', metin: 'Macbeth sucht die Hexen selbst auf, um Sicherheit zu erhalten; die Prophezeiung ist nicht mehr eine Stimme von außen, sondern eine Substanz, von der er abhängig geworden ist.' },
      ],
      sentez: 'Ob die Prophezeiung Macbeths inneres Verlangen ans Licht bringt oder es erst erschafft, lässt der Text offen. Der Schauspieler entscheidet über den Grad an Wirklichkeit und Einfluss der Hexen.',
      yorumlar: [
        { baslik: 'Schicksal von außen', aciklama: 'Die Hexen sind wirkliche übernatürliche Kräfte; sie pflanzen das Verlangen ein. Macbeth ist Opfer eines Schicksals — die Schuld wird geteilt.' },
        { baslik: 'Stimme des inneren Verlangens', aciklama: 'Die Hexen bringen den Ehrgeiz, den Macbeth schon trägt, nach außen; sie sind nur ein Spiegel. Die Schuld gehört ganz ihm.' },
        { baslik: 'Unklare Schwelle', aciklama: 'Real oder Halluzination wird nie eindeutig; der Schauspieler bewahrt diese Unklarheit — auch der Zuschauer kann nicht sicher sein, so wie Macbeth.' },
      ],
    },
    {
      konu: 'Der Einfluss Lady Macbeths',
      baslik: 'Treibt Lady Macbeth ihn, oder ist Macbeth schon entschlossen?',
      isaretler: [
        { ref: 'Unschlüssigkeit der Entscheidung', metin: 'Macbeth ist nahe daran, vom Mord abzulassen; der Wille Lady Macbeths zieht ihn zurück in die Entscheidung.' },
        { ref: 'Entfernung', metin: 'Die folgenden Verbrechen (Banquo) plant Macbeth ohne seine Frau zu befragen — die treibende Kraft ist nun in ihm.' },
      ],
      sentez: 'Beim ersten Mord scheint Lady Macbeths Stoß entscheidend; doch in den späteren Verbrechen geht Macbeth allein voran. Der Schauspieler entscheidet, wie viel des Ehrgeizes aus ihm selbst kommt und wie viel von seiner Frau.',
      yorumlar: [
        { baslik: 'Ohne seine Frau hätte er es nicht getan', aciklama: 'Der erste Mord geschieht ganz durch Lady Macbeths Willen; Macbeth ist die schwache, die geführte Seite.' },
        { baslik: 'Er war schon entschlossen', aciklama: 'Macbeths Ehrgeiz war von Anfang an da; Lady Macbeth gibt nur den letzten Stoß, der eigentliche Wille gehört ihm.' },
        { baslik: 'Gemeinsam ausgelöst', aciklama: 'Die beiden nähren einander; weder das eine noch das andere allein ist genug — das Verbrechen ist eine echte Partnerschaft.' },
      ],
    },
    {
      konu: 'Der geistige Bruch',
      baslik: 'Sind Macbeths Halluzinationen (Dolch, Gespenst) echte Übernatürlichkeit oder der Zerfall von Gewissen/Verstand?',
      isaretler: [
        { ref: 'Der Dolch', metin: 'Vor dem Mord sieht er einen Dolch in der Luft; ungewiss, ob real oder vom Geist geschaffen.' },
        { ref: 'Banquos Gespenst', metin: 'Beim Bankett sieht nur Macbeth das Gespenst; niemand am Tisch sieht es.' },
      ],
      sentez: 'Der Ursprung der Halluzinationen wird im Text offengelassen. Der Schauspieler entscheidet, ob sie eine übernatürliche Wirklichkeit oder der körperliche/geistige Ausdruck der Schuld sind.',
      yorumlar: [
        { baslik: 'Übernatürliche Wirklichkeit', aciklama: 'Dolch und Gespenst sind tatsächlich da; die übernatürliche Welt des Stücks externalisiert das Gewissen.' },
        { baslik: 'Zerfall des Gewissens', aciklama: 'Alles ist mental; die verdrängte Schuld bricht als Halluzination an die Oberfläche. Ein klinischer Bruch.' },
        { baslik: 'Körperlicher Auslöser', aciklama: 'Der Bruch beginnt im Körper (Schlaflosigkeit, Blutsicht); der Geist legt erst dann Bedeutung darauf. Eine somatische Lesart.' },
      ],
    },
    {
      konu: 'Gewissen und Schuld',
      baslik: 'Bereut Macbeth sein Verbrechen, oder fürchtet er nur das Entdecktwerden / die Folgen?',
      isaretler: [
        { ref: 'Nach dem Mord', metin: 'Unmittelbar nach der Tat erkennt er seine Hand nicht, hört Stimmen — er befindet sich in einer Art Entsetzen.' },
        { ref: 'Verbergen', metin: 'Derselbe Macbeth tötet Minuten später kaltblütig die Diener und spielt eine Rolle.' },
      ],
      sentez: 'Ob Macbeths Entsetzen nach dem Mord moralische Reue oder Furcht vor Entdeckung / Gewicht der Folgen ist, bleibt unklar. Der Schauspieler wählt die Natur dieses Entsetzens.',
      yorumlar: [
        { baslik: 'Echte moralische Reue', aciklama: 'Macbeth ist ein Mann mit Gewissen; das Verbrechen zerstört ihn von innen. Die Tragödie ist der Sturz eines guten Mannes.' },
        { baslik: 'Furcht vor den Folgen', aciklama: 'Das Entsetzen ist nicht moralisch, sondern praktisch — Furcht vor Entdeckung, Thronverlust, Chaos. Keine Reue, sondern Kalkül.' },
        { baslik: 'Abgestumpftes Gewissen', aciklama: 'Anfangs ist Gewissen da, doch es stumpft mit jedem Verbrechen ab; der Schauspieler spielt diese stufenweise Betäubung.' },
      ],
    },
    {
      konu: 'Der letzte Augenblick',
      baslik: 'Was trägt Macbeth in seine letzte Schlacht — Hoffnungslosigkeit, Trotz oder eine nihilistische Freiheit?',
      isaretler: [
        { ref: 'Der Tod Lady Macbeths', metin: 'Auf den Tod seiner Frau antwortet er nicht mit Schmerz, sondern mit einer kalten Betrachtung über die Sinnlosigkeit des Lebens („Morgen, und morgen, und morgen…“).' },
        { ref: 'Gegenüber Macduff', metin: 'Als auch die letzte Prophezeiung bricht, wählt er den Kampf, obwohl er weiß, dass er verlieren wird.' },
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
      konum: 'Zwischen Prophezeiung (1) → Titel Cawdor (2)',
      onceBaslik: 'Die Prophezeiung der Hexen',
      onceMetin: 'Macbeth und Banquo hörten von den Hexen die Prophezeiung; Macbeth wurde gesagt, er werde König werden.',
      boslukMetin: 'der Weg vom Wald zum Schloss · der erste dunkle Gedanke, der durch den Geist zieht · neben Banquo, doch innerlich getrennt · der Verstand, der die Prophezeiung abwägt · die stillen Entscheidungen, die vor der Ankunft am Schloss getroffen werden',
      sonraBaslik: 'Er erhält den Titel Cawdor',
      sonraMetin: 'In Szene 2 ernennt Duncan Macbeth zum Than von Cawdor; die erste Hälfte der Prophezeiung tritt ein.',
      sentez: 'Shakespeare zeigt den Weg von der Prophezeiung zum Schloss nicht. Der Schauspieler baut in dieser Lücke, wie das Verlangen zum ersten Mal Gestalt annimmt — wie weit ging Macbeth im Geist, bevor er das Schloss erreichte?',
      altSorular: [
        { baslik: 'Innerlich', soru: 'Was war der erste dunkle Gedanke, der ihm nach der Prophezeiung auf dem Weg zum Schloss durch den Kopf ging — und versuchte er, ihn zu vertreiben?' },
        { baslik: 'Beziehung', soru: 'Veränderte sich sein Blick auf Banquo, der neben ihm ging — sah er nun einen Rivalen?' },
        { baslik: 'Körper', soru: 'Welche Spannung trat zum ersten Mal in seinem Körper auf dieser Reise auf?' },
      ],
      yuruyus: {
        girisBaslik: 'Vom Wald zum Schloss — baue die Lücke',
        girisAciklama: 'Die Hexen ließen die Prophezeiung zurück und verschwanden. Den Weg vom Wald bis zum Tor des Schlosses überspringt Shakespeare. Jenen Weg, jenen ersten dunklen Gedanken wirst du bauen.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; es bleibt in Szene 2 bei dir.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt einen Schritt aus der Lücke zurück; atme aus. Bevor du Szene 2 betrittst: Ist der Mann, der durch das Tor des Schlosses tritt, derselbe, der aus dem Wald kam? Was trägst du?',
        esik: {
          komut: 'Dies ist ein Gang. Diese Lücke baust du Schritt für Schritt — den Weg, den Shakespeare nicht schrieb, von dort, wo die Hexen verschwanden, bis zum Tor des Schlosses. Keine Eile.',
          hitap: 'Tritt den ersten Schritt, wenn du bereit bist.',
          buton: 'Ich beginne',
        adimlar: [
          'Baue zuerst den Augenblick: Die Stimmen verstummten, du stehst mitten im Wald. Shakespeare schreibt diesen Weg nicht; du wirst ihn bauen.',
          'Bemerke an jeder Station, wo in seinem Körper Macbeth in jenem Augenblick steht — bemerke es, dann gehe weiter.',
          'Was du wählst, wird deins; welcher Mann Szene 2 betritt, bestimmt dieser Weg.',
        ],
        },
        istasyonlar: [
          {
            zamanRozet: 'Die Stimmen verstummten',
            acilis: 'Sie lösten sich auf — wie ein Atem, der sich im Wind zerstreut. Du stehst mitten im Wald; war das, was du eben hörtest, wirklich? Auch Banquo hörte es — also war es wirklich.',
            yazmaPlaceholder: 'Als die Stimmen verstummten…',
            sorular: [
              'Was tat Macbeths Körper im Augenblick, als die Stimmen verstummten — blieb er, wo er war, oder trat er einen Schritt dorthin, wo die Hexen verschwanden?',
            ],
          },
          {
            zamanRozet: 'Seite an Seite mit Banquo',
            acilis: 'Der Weg ist lang, ihr beide habt es gehört. Banquo versucht es mit einem Scherz — „dir sagten sie König, mir Vater von Königen.“ Eine Antwort ist nötig.',
            sorular: [
              'Banquos Scherz hängt in der Luft — was tut Macbeths Gesicht in jener Sekunde?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              secenekler: [
                { baslik: 'In den Scherz einstimmen', aciklama: 'Ich lache, tue, als nähme ich es leicht — niemand soll das innere Gewicht sehen.', muhur: 'Vergiss das nicht — meine erste Maske setzte ich auf jenem Weg auf, noch bevor ich ein Verbrechen begangen hatte.', ozet: 'Meine erste Maske wurde auf jenem Weg aufgesetzt, vor dem Verbrechen.' },
                { baslik: 'Sich nach innen verschließen', aciklama: 'Ich kann nicht antworten; die Worte sind drinnen mit etwas anderem beschäftigt.', muhur: 'Vergiss das nicht — der erste Augenblick, in dem ich mich von Banquo entfernte, war jenes Schweigen; das Erste, das zwischen uns trat, war nicht die Prophezeiung, sondern mein Schweigen.', ozet: 'Das Erste, das zwischen uns trat, war mein Schweigen.' },
              ],
            },
          },
          {
            zamanRozet: 'Der Gedanke nimmt Gestalt an',
            acilis: 'Während der Weg fortschreitet, krümmt sich ein Gedanke und nimmt Gestalt an: „Wenn ich König werde…“ Den Rest des Satzes bringt dein Geist von selbst — und vor dem, was er bringt, schauderst du.',
            yazmaPlaceholder: 'Als der Satz sich vollendete, sah ich…',
            sorular: [
              'Welches Bild erschien, als jener Satz sich zum ersten Mal in deinem Geist vollendete — ein leerer Thron oder der Thron, auf dem noch Duncan saß?',
            ],
          },
          {
            zamanRozet: 'Das Tor des Schlosses',
            acilis: 'Das Schloss erschien. Drinnen wird Duncan dich loben, alle werden deinen Sieg bejubeln. Wenige Schritte bis zum Tor — zwischen dem Mann, der aus dem Wald kam, und dem, der durch das Tor treten wird, lag ein Weg.',
            yazmaPlaceholder: 'An der Schwelle…',
            sorular: [
              'Hielt Macbeth eine Sekunde an der Schwelle des Tores inne — und wenn ja, was versuchte er in jener Sekunde zurückzulassen?',
            ],
          },
        ],
      },
    },
    {
      baslik: 'Allein in der Kammer der Entscheidung',
      konum: 'Innerhalb der Unschlüssigkeit (3) → Schwelle des Mordes',
      onceBaslik: 'Zögern vor der Ermordung Duncans',
      onceMetin: 'Lady Macbeth hat ihn überzeugt; Macbeth sagte „Ich werde es tun“. Doch zwischen diesem Wort und der Tat liegt eine Zeit.',
      boslukMetin: 'die Minuten, die sich von der Entscheidung zur Tat erstrecken · wie oft er davon abließ · Wein für die Diener · das Warten auf den Klang der Glocke · die Hand, die nach dem Dolch greift · der letzte Augenblick, von dem noch ein Zurück möglich war',
      sonraBaslik: 'Die Halluzination des Dolches',
      sonraMetin: 'In Szene 4 sieht Macbeth einen Dolch in der Luft und wird zu Duncans Gemach gezogen.',
      sentez: 'Shakespeare überspringt die Zeit zwischen „Ich werde es tun“ und dem Mord. Der Schauspieler baut in dieser Lücke, wie sich die Entscheidung im Körper verhärtete — wie oft rief er sich zurück, und wann war kein Zurück mehr möglich?',
      altSorular: [
        { baslik: 'Körper', soru: 'Welche Veränderung trat in seinem Körper auf, in dem Augenblick, in dem er „Ich werde es tun“ sagte?' },
        { baslik: 'Beziehung', soru: 'Konnte er den Dienern, denen er Wein einschenkte, ins Gesicht sehen?' },
        { baslik: 'Innerlich', soru: 'In dem Augenblick, in dem er nach dem Dolch griff — wusste er wirklich, dass er ihn nehmen würde, oder beobachtete er sich noch?' },
      ],
    },
    {
      baslik: 'In Duncans Gemach',
      konum: 'Innerhalb des Mordaugenblicks (5)',
      onceBaslik: 'Eintritt ins Gemach',
      onceMetin: 'Macbeth betritt mit dem Dolch Duncans Gemach. Shakespeare zeigt den Mord selbst nicht auf der Bühne.',
      boslukMetin: 'der Augenblick hinter der Tür · das Gesicht des schlafenden Königs · der erste Stoß · vielleicht ein Wort, vielleicht Schweigen · 30 Sekunden oder 5 Minuten · der letzte Blick beim Zurückgehen',
      sonraBaslik: 'Er ermordet Duncan (Rückkehr)',
      sonraMetin: 'In Szene 5 kehrt Macbeth mit blutigen Dolchen zurück; „Habe ich das getan?“ sagt er, hört Stimmen.',
      sentez: 'Dies ist die tiefste Lücke des Stücks — der Mord selbst ist nicht auf der Bühne. Der Schauspieler baut den Augenblick im Gemach: Was sah er, was tat er, wer war er beim Zurückgehen? Die Quelle des Entsetzens bei der Rückkehr liegt hier.',
      altSorular: [
        { baslik: 'Körper', soru: 'War Duncans Gesicht sichtbar, als er das Gemach betrat — und wohin fiel der erste Stoß?' },
        { baslik: 'Innerlich', soru: 'Sagte er etwas in diesem Gemach, oder war es vollkommenes Schweigen?' },
        { baslik: 'Zeitlich', soru: 'Bemerkte er beim Hinausgehen, wie viel Zeit vergangen war — was, wenn in dieser Zeit jemand aufgewacht wäre?' },
      ],
    },
    {
      baslik: 'Die Stunden ohne Schlaf',
      konum: 'Zwischen Mord (5) → Verbergen (6)',
      onceBaslik: 'Nach dem Mord',
      onceMetin: 'Der Mord ist geschehen; „der Schlaf ist ermordet“ sagt er. Eine Zeit vergeht, bis Macduff an die Tür klopft.',
      boslukMetin: 'die schlaflosen Stunden · das Blut an den Händen · bei jedem Geräusch zusammenfahren · das schweigende Warten mit Lady Macbeth · das Anbrechen der Morgendämmerung · das letzte Schweigen vor dem Klopfen an der Tür',
      sonraBaslik: 'Verbergen des Mordes',
      sonraMetin: 'In Szene 6 findet Macduff die Leiche; Macbeth tötet die Diener und beginnt, eine Rolle zu spielen.',
      sentez: 'Shakespeare überspringt die Stunden vom Mord bis zur Entdeckung. Der Schauspieler baut in dieser Lücke die Schlaflosigkeit, das Entsetzen und wie die Maske vorbereitet wurde, die am Morgen zu tragen sein würde.',
      altSorular: [
        { baslik: 'Körper', soru: 'Wo waren in jenen Stunden seine Hände — konnte er sie anschauen?' },
        { baslik: 'Beziehung', soru: 'Was wurde in jenen schweigenden Stunden zwischen ihm und Lady Macbeth gesagt, was blieb ungesagt?' },
        { baslik: 'Innerlich', soru: 'Welche Maske beschloss er, kurz bevor an die Tür geklopft wurde, zu tragen?' },
      ],
    },
    {
      baslik: 'Krönung — allein in Scone',
      konum: 'Zwischen Vertuschung des Mordes (6) → Bedrohung durch Banquo (7)',
      onceBaslik: 'Verbergen des Mordes',
      onceMetin: 'Macbeth tötete die Diener, spielte den zornigen Treuen; Duncans Söhne flohen, der Verdacht fiel auf sie. Der Weg zum Thron ist frei.',
      boslukMetin: 'der Weg nach Scone · die Reise als König · die Krone, die sich aufs Haupt senkt · der erste Augenblick · der Applaus und die Stimme darunter',
      sonraBaslik: 'Die Bedrohung durch Banquo',
      sonraMetin: 'In Szene 7 ist Macbeth König, doch die Sorge um Banquos Geschlecht beginnt; er heuert Mörder an.',
      sentez: 'Die Krönung zeigt Shakespeare nie auf der Bühne — der Augenblick des Ergreifens wird übersprungen. Der Schauspieler baut in dieser Lücke jenen Weg, jene Zeremonie, jene erste Sekunde, in der das Metall die Stirn berührt.',
      altSorular: [
        { baslik: 'Innerlich', soru: 'Auf dem Weg nach Scone — blickte Macbeth ein einziges Mal zurück, und wenn ja, wovor fürchtete er sich zu sehen?' },
        { baslik: 'Körper', soru: 'Im Augenblick, da die Krone sich senkte — waren seine Augen offen oder geschlossen?' },
        { baslik: 'Beziehung', soru: 'Welche andere Stimme erreichte Macbeth aus dem Applaus heraus?' },
      ],
      yuruyus: {
        girisBaslik: 'Krönung — baue die Lücke',
        girisAciklama: 'Die Krönung zeigt Shakespeare nie auf der Bühne. Der Augenblick des Ergreifens im Stück wird übersprungen — jenen Weg, jene Zeremonie, jene erste Sekunde wirst du bauen.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; es bleibt in Szene 7 bei dir.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt einen Schritt aus der Zeremonie zurück; atme aus. Bevor du den Thronsaal betrittst: Ist der Kopf, der die Krone trägt, derselbe, der sie begehrte? Was trägst du?',
        esik: {
          komut: 'Dies ist ein Gang. Den Augenblick, den Shakespeare nie zeigte, baust du Schritt für Schritt — vom Weg nach Scone bis zur Sekunde, in der die Krone sich aufs Haupt senkt. Keine Eile.',
          hitap: 'Mach dich auf den Weg, wenn du bereit bist.',
          buton: 'Ich beginne',
        adimlar: [
          'Baue zuerst den Augenblick: ein verdeckter Mord hinter dir, eine Krone vor dir. Shakespeare zeigt diese Zeremonie nicht; du wirst sie bauen.',
          'Bemerke an jeder Station, wo in seinem Körper Macbeth in jenem Augenblick steht — bemerke es, dann gehe weiter.',
          'Was du wählst, wird deins; welcher König den Thronsaal betritt, bestimmt dieser Weg.',
        ],
        },
        istasyonlar: [
          {
            zamanRozet: 'Der Weg nach Scone',
            acilis: 'Deine erste Reise als König. Hinter dir ein verdeckter Mord, vor dir eine Krone. Der Weg ist lang, und alle rufen dich mit deinem neuen Namen.',
            yazmaPlaceholder: 'Auf dem Weg…',
            sorular: [
              'Blickte Macbeth auf jenem Weg ein einziges Mal zurück — und wenn ja, wovor fürchtete er sich zu sehen?',
            ],
          },
          {
            zamanRozet: 'Die versammelten Edlen',
            acilis: 'Der Zeremonienplatz ist voll. Gesichter, Grüße, sich neigende Köpfe. Und ein Gesicht fehlt: Macduff kam nicht nach Scone.',
            sorular: [
              'Als sein Blick beim Absuchen der Menge an jener Leere hängen blieb — wie viele Sekunden verweilte er dort?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              secenekler: [
                { baslik: 'Er bemerkte und verzeichnete es', aciklama: 'Die Abwesenheit stach wie eine Nadel; jener Name wurde in jenem Augenblick auf eine Liste geschrieben.', muhur: 'Vergiss das nicht — meine erste Feindesliste öffnete sich, bevor die Krone auf mein Haupt kam, gegenüber jenem leeren Platz.', ozet: 'Meine erste Feindesliste öffnete sich gegenüber jenem leeren Platz.' },
                { baslik: 'Er wollte es nicht sehen', aciklama: 'Heute kein Schatten erlaubt; sein Blick glitt über die Leere hinweg.', muhur: 'Vergiss das nicht — was ich nicht sah, war das, was ich übersah; die an jenem Tag begonnene Blindheit wurde später zum Schicksal.', ozet: 'Die an jenem Tag begonnene Blindheit wurde später zum Schicksal.' },
              ],
            },
          },
          {
            zamanRozet: 'Die Krone senkt sich',
            acilis: 'Du kniest. Die Krone in der Luft — die von Duncans Haupt genommene Krone — und sie senkt sich langsam. Die Sekunde, in der das Metall die Stirn berührt.',
            sorular: [
              'Unmittelbar bevor das Metall berührt — sind die Augen offen oder geschlossen?',
            ],
            catal: {
              etiket: 'Was ist in jener Sekunde im Innern?',
              secenekler: [
                { baslik: 'Fülle — ich bin angekommen', aciklama: 'Alles war hierfür, und hier ist es; für eine Sekunde ist jeder Preis richtig.', muhur: 'Vergiss das nicht — in jener einen Sekunde fügte sich alles; das Danach verging damit, jene Sekunde zurückzurufen.', ozet: 'Das Danach verging damit, jene eine Sekunde zurückzurufen.' },
                { baslik: 'Leere — war das alles?', aciklama: 'Das Metall kalt, der Applaus fern; das Begehrte ist ergriffen, und im Innern öffnete sich etwas — füllte sich nicht.', muhur: 'Vergiss das nicht — im Augenblick, da ich die Krone empfing, sah ich zum ersten Mal die Größe dessen, was ich verlor; der Thron füllte nicht, er zeigte.', ozet: 'Der Thron füllte nicht, er zeigte.' },
              ],
            },
          },
          {
            zamanRozet: 'Während der Applaus anhält',
            acilis: 'Du erhebst dich — König Macbeth. Der Applaus wie eine Mauer; doch in dem Klang ist etwas anderes, das nur du hörst.',
            yazmaPlaceholder: 'Inmitten des Applauses…',
            sorular: [
              'Welche andere Stimme erreichte Macbeth aus dem Applaus heraus — das Flüstern der Hexen, Duncans Stimme oder die Stimme des Nichts?',
            ],
          },
        ],
      },
    },
    {
      baslik: 'Nacht mit den Mördern — die Stunden vor dem Befehl',
      konum: 'Zwischen Bedrohung durch Banquo (7) → Verbergen vor Lady Macbeth (8)',
      onceBaslik: 'Die Bedrohung durch Banquo',
      onceMetin: 'Macbeth ist König geworden, doch die Hexen hatten gesagt, Banquos Geschlecht werde herrschen. Der Gedanke, ihn töten zu lassen, reift.',
      boslukMetin: 'die im Innern bereits getroffene Entscheidung · das Aufbauen der Geschichte für die Mörder · das Vorbeigehen an der Tür der Frau · das Alleinsein, das es bei Duncan nicht gab · das Gegenübertreten der Mörder',
      sonraBaslik: 'Entfremdung von Lady Macbeth',
      sonraMetin: 'In Szene 8 verbirgt Macbeth den Banquo-Plan vor seiner Frau; er entscheidet zum ersten Mal allein.',
      sentez: 'Shakespeare zeigt den Befehl als bereits erteilt; die Einsamkeit des Entscheidungsaugenblicks wird übersprungen. Bei Duncan war Lady Macbeth an seiner Seite — diese Schwelle überschreitet er allein. Der Schauspieler baut jene Stunden.',
      altSorular: [
        { baslik: 'Beziehung', soru: 'Als Macbeth jene Entscheidung zum ersten Mal als ganzen Satz formulierte — endete er mit „wird sterben“ oder „ich lasse ihn töten“?' },
        { baslik: 'Innerlich', soru: 'Ging er in jener Nacht an der Tür seiner Frau vorbei — und wenn ja, wurden seine Schritte langsamer oder schneller?' },
        { baslik: 'Körper', soru: 'Sah Macbeth, als er den Mördern ins Gesicht blickte, etwas von sich selbst — und wenn ja, wer wich dem Blick aus?' },
      ],
      yuruyus: {
        girisBaslik: 'Nacht mit den Mördern — baue die Lücke',
        girisAciklama: 'Shakespeare zeigt den Befehl als bereits erteilt; die Einsamkeit des Entscheidungsaugenblicks wird übersprungen. Bei Duncan war Lady Macbeth an seiner Seite — diese Schwelle wird er allein überschreiten. Jene Stunden wirst du bauen.',
        girisSentez: 'Was du auf diesem Gang wählst, wird deins; es bleibt in Szene 8 bei dir.',
        gecisButonu: 'Zur ersten Station',
        cikisRitueli: 'Tritt einen Schritt aus der Nacht zurück; atme aus. Morgen wirst du deiner Frau ins Gesicht blicken — ist die Entscheidung, die du heute Nacht getroffen hast, in deinem Gesicht zu lesen? Was trägst du?',
        esik: {
          komut: 'Dies ist ein Gang. Du wirst durch eine Nacht gehen — von der Stunde, in der die Entscheidung fiel, bis zum Augenblick, da man den Mördern gegenübertritt. Keine Eile.',
          hitap: 'Tritt in die Nacht, wenn du bereit bist.',
          buton: 'Ich beginne',
        adimlar: [
          'Baue zuerst den Augenblick: die Entscheidung ist gefallen, die Worte fehlen noch. Shakespeare zeigt diese Nacht nicht; du wirst sie bauen.',
          'Bemerke an jeder Station, wo in seinem Körper Macbeth in jenem Augenblick steht — bemerke es, dann gehe weiter.',
          'Was du wählst, wird deins; welcher Mann seiner Frau gegenübertritt, bestimmt diese Nacht.',
        ],
        },
        istasyonlar: [
          {
            zamanRozet: 'Die Entscheidung fiel — keine Worte',
            acilis: 'Banquo wird sterben. Die Entscheidung ist im Innern längst gefallen, doch noch in kein Wort gefasst — eine ungesprochene Entscheidung scheint noch rücknehmbar.',
            yazmaPlaceholder: 'Als der Satz sich zum ersten Mal formte…',
            sorular: [
              'Als Macbeth jene Entscheidung zum ersten Mal als ganzen Satz formulierte — mit Subjekt und Prädikat — wie endete der Satz: „wird sterben“ oder „ich lasse ihn töten“?',
            ],
          },
          {
            zamanRozet: 'Der Aufbau der Geschichte',
            acilis: 'Die Mörder brauchen eine Geschichte: Banquo soll ihr Feind sein — die Ursache ihres Elends. Die Worte probst du in deinem Innern.',
            sorular: [
              'Bei der wievielten Wiederholung hielt er die Probe an — wann waren die Worte „bereit“?',
            ],
            catal: {
              etiket: 'Es gibt zwei Wege. Welcher ist deiner?',
              secenekler: [
                { baslik: 'Lüge — und er weiß es', aciklama: 'Die Geschichte ist von Anfang bis Ende Erfindung; Banquo ist unschuldig. Jeden Satz poliert er, wissend, dass er gelogen ist.', muhur: 'Vergiss das nicht — um meinen Freund töten zu lassen, tötete ich ihn zuerst mit Worten; und ich wusste, dass jedes Wort gelogen war.', ozet: 'Ich tötete ihn zuerst mit Worten — wissentlich.' },
                { baslik: 'Die Geschichte wirkt auch auf ihn', aciklama: 'Je mehr er sie baut, desto mehr glaubt er: Banquo ist wirklich eine Bedrohung, wirklich ein Feind. Die Lüge wird im Innern dessen, der sie spricht, zur Wahrheit.', muhur: 'Vergiss das nicht — der Erste, der an die den Mördern erzählte Geschichte glaubte, war ich; meine Lüge kehrte als Wahrheit zu mir zurück.', ozet: 'Meine Lüge kehrte als Wahrheit zu mir zurück.' },
              ],
            },
          },
          {
            zamanRozet: 'Im Vorbeigehen an der Tür',
            acilis: 'Der nächtliche Flur. Lady Macbeths Tür — dasselbe Dach, dieselbe Mitschuld, doch dieser Plan wird nicht mit ihr geteilt.',
            yazmaPlaceholder: 'Vor der Tür…',
            sorular: [
              'Ging er in jener Nacht an der Tür seiner Frau vorbei — und wenn ja, wurden seine Schritte langsamer oder schneller?',
            ],
          },
          {
            zamanRozet: 'Den Mördern gegenüber',
            acilis: 'Zwei Männer vor dir. Sie werden für Geld töten; du tötetest für den Thron. Ihr seid Teile derselben Nacht, derselben Arbeit.',
            yazmaPlaceholder: 'Als ich in ihre Gesichter blickte…',
            sorular: [
              'Sah Macbeth, als er in ihre Gesichter blickte, etwas von sich selbst — und wenn ja, wer wich dem Blick aus?',
            ],
          },
        ],
      },
    },
    {
      baslik: 'Vorbereitung des Banketts',
      konum: 'Zwischen Bedrohung durch Banquo (7) → Gespenst (9)',
      onceBaslik: 'Der Mordbefehl an Banquo',
      onceMetin: 'Macbeth hat die Mörder für Banquo ausgeschickt. Das Bankett wird vorbereitet; alle erwarten, dass Banquo kommt.',
      boslukMetin: 'nach dem Verabschieden der Mörder · die Last des Wissens · zu wissen, dass Banquo nicht kommen wird, und doch so zu tun, als ob man ihn erwartete · die Maske, die zum Bankett angelegt wird · innere Paranoia',
      sonraBaslik: 'Banquos Geist',
      sonraMetin: 'In Szene 9 setzt sich beim Bankett der Geist Banquos auf den leeren Stuhl; nur Macbeth sieht ihn.',
      sentez: 'Die Stunden zwischen Befehl und Bankett zeigt Shakespeare nicht. Der Schauspieler baut in dieser Lücke, was unter der königlichen Maske aufgestaut wurde, während man auf den Tod eines Freundes wartete — das Gespenst entsteht aus diesem Aufstau.',
      altSorular: [
        { baslik: 'Innerlich', soru: 'Wohin ging Macbeth zuerst nach dem Verabschieden der Mörder, und was war sein erster Gedanke?' },
        { baslik: 'Beziehung', soru: 'Diesmal sagte er Lady Macbeth den Plan nicht — was empfand er in diesem Schweigen?' },
        { baslik: 'Körper', soru: 'Was musste er beim Anlegen der Bankett-Maske in seinem Körper unterdrücken?' },
      ],
    },
    {
      baslik: 'Vom Gespenst zu den Hexen',
      konum: 'Zwischen Gespenst (9) → Neue Prophezeiungen (10)',
      onceBaslik: 'Die Bankett-Schande',
      onceMetin: 'Nach der Gespenstszene löste sich das Bankett auf; die Gäste wurden Zeugen von Macbeths Zusammenbruch.',
      boslukMetin: 'Schande und Panik nach dem Bankett · das Durchstehen jener Nacht · die Entscheidung, die Hexen aufzusuchen · die Suche nach einer letzten Zusicherung · das Gewissen weicht der Paranoia',
      sonraBaslik: 'Neue Prophezeiungen',
      sonraMetin: 'In Szene 10 kehrt Macbeth zu den Hexen zurück, verlangt mehr Sicherheit, erhält dunklere Erkenntnisse.',
      sentez: 'Die Nacht von der Bankett-Schande bis zur Rückkehr zu den Hexen überspringt Shakespeare. Der Schauspieler baut in dieser Lücke, wie ein König, der vor allen zusammenbricht, die Entscheidung trifft, sich für Sicherheit der Dunkelheit zuzuwenden.',
      altSorular: [
        { baslik: 'Beziehung', soru: 'Was wurde zwischen ihm und Lady Macbeth gesagt, was blieb ungesagt, als das Bankett endete?' },
        { baslik: 'Innerlich', soru: 'In welchem Augenblick traf er die Entscheidung, die Hexen aufzusuchen — aus Verzweiflung oder Kalkül?' },
        { baslik: 'Körper', soru: 'Konnte er in jener Nacht schlafen; ließ sein Körper Ruhe zu?' },
      ],
    },
    {
      baslik: 'Das letzte Sehen Lady Macbeths',
      konum: 'Zwischen Neue Prophezeiungen (10) → Tod Lady Macbeths (12)',
      onceBaslik: 'Rückzug in getrennte Welten',
      onceMetin: 'Nach der Bankett-Katastrophe verschwindet Lady Macbeth von der Bühne; Macbeth versinkt in Hexen und Krieg. Das Paar wird nie wieder Seite an Seite gezeigt.',
      boslukMetin: 'der Augenblick, in dem sie zum letzten Mal im selben Raum sind · eine Ehe, deren Gespräch längst geendet hat · das Erlöschen in ihren Augen sehen oder nicht sehen · ein Abschied, bei dem nicht einmal „gute Nacht“ gesagt wird · der letzte Schritt im Flur · ein Abschied, von dem man nicht weiß, dass er einer ist',
      sonraBaslik: 'Schreie und die Nachricht',
      sonraMetin: 'In Szene 12 breiten sich Frauenschreie durch die Burg aus; dann kommt die Nachricht: „Die Königin ist tot.“ Macbeth hat seine Frau nie wieder lebend gesehen.',
      sentez: 'Shakespeare zeigt das Paar nach dem Bankett nie wieder zusammen — die Trennung der beiden, die Duncan gemeinsam trugen, geschieht ohne Bühne. Der Schauspieler baut die letzte Begegnung: Was wurde gesagt, was konnte nicht mehr gesagt werden? Die Lücke unter „Morgen, und morgen, und morgen“ nährt sich aus diesem unverabschiedeten Abschied.',
      altSorular: [
        { baslik: 'Beziehung', soru: 'Als sie zum letzten Mal im selben Raum waren — blickten sie einander an, und wer wandte zuerst das Gesicht ab?' },
        { baslik: 'Innerlich', soru: 'Sah er ihren Zusammenbruch, oder wählte er, ihn nicht zu sehen — suchte er noch immer jene starke Frau aus Duncans Nacht?' },
        { baslik: 'Körper', soru: 'Wie waren seine Schritte, als er sich zum letzten Mal von ihr entfernte — eine Flucht oder ein Geschlepptwerden?' },
      ],
      kartCatali: {
        soru: 'Der Augenblick, in dem du sie zum letzten Mal lebend sahst — welcher war es?',
        secenekler: [
          { baslik: 'Ich sah und floh', aciklama: 'Er konnte ihren Zusammenbruch nicht ansehen; sein Blick berührte sie und entfernte sich.', oznelSabit: 'Als ich sie zum letzten Mal sah, wich ich ihrem Blick aus — unser Abschied wurde mein Rücken.' },
          { baslik: 'Ich ging vorbei, ohne zu sehen', aciklama: 'Er ging an ihr vorbei, blickte nicht einmal hin; dass es das letzte Sehen war, verstand er später.', oznelSabit: 'Während wir unser letztes Sehen erlebten, wusste ich es nicht — wann ich sie zuletzt sah, sagte mir ihr Tod.' },
          { baslik: 'Ich blickte — sie sah es nicht', aciklama: 'Sie war schon anderswo; ihr Blick fiel ins Leere.', oznelSabit: 'Ich blickte sie an, und sie sah mich nicht — das Letzte zwischen uns war jener unerwiderte Blick.' },
        ],
      },
    },
    {
      baslik: 'Zwischen Schrei und Nachricht',
      konum: 'Innerhalb des Augenblicks von Lady Macbeths Tod (12)',
      onceBaslik: 'Frauenschreie',
      onceMetin: 'Während die Burg sich auf die Schlacht vorbereitet, kommen von innen Frauenschreie. Macbeth hält inne: „Ich habe den Geschmack der Furcht fast vergessen.“',
      boslukMetin: 'die Sekunden zwischen Schrei und Nachricht · ein gewusster, doch noch nicht ausgesprochener Tod · warten statt fragen · die letzte Furcht, die sich regt, während er sagt „ich habe die Furcht vergessen“ · die Gewissheit, die vor der Nachricht kommt',
      sonraBaslik: '„Die Königin ist tot“',
      sonraMetin: 'Seyton überbringt die Nachricht. Macbeths Antwort ist kein Schrei der Trauer, sondern ein Zusammenbruch der Zeit selbst: „Morgen, und morgen, und morgen…“',
      sentez: 'Shakespeare setzt zwischen Schrei und Nachricht nur wenige Verse; was in jenen Sekunden in Macbeth geschieht, überspringt er. Der Schauspieler baut in dieser Mikro-Lücke den Augenblick des Wissens: Wusste er es, bevor die Nachricht kam? Der „Morgen“-Monolog ist nicht die Abwesenheit der Trauer, sondern das Fehlen eines Ortes, an den man sie legen könnte — und jener Ort wird in diesen Sekunden ein letztes Mal abgetastet.',
      altSorular: [
        { baslik: 'Innerlich', soru: 'Was war das Erste, das ihm beim Hören des Schreis durch den Kopf ging — ihr Name oder eine Gewissheit, deren Namen er mied?' },
        { baslik: 'Körper', soru: 'Was tat sein Körper, während er auf die Nachricht wartete — hielt er inne oder fuhr er mit den Vorbereitungen fort?' },
        { baslik: 'Zeitlich', soru: 'Wie lang kamen ihm jene wenigen Sekunden vor — und wurde „Morgen, und morgen, und morgen“ in jenen Sekunden geboren?' },
      ],
      kartCatali: {
        soru: 'Im Augenblick, da du den Schrei hörtest — bevor die Nachricht kam — wusstest du es?',
        secenekler: [
          { baslik: 'Ich wusste es', aciklama: 'Sein Herz sprach es vor der Nachricht; Seyton bestätigte nur.', oznelSabit: 'Ich wartete nicht auf die Nachricht — im Schrei war ihr Name; als Seyton kam, wusste ich es längst.' },
          { baslik: 'Ich weigerte mich zu wissen', aciklama: 'Es ist Krieg, die Burg ist voll — es konnte irgendwer sein. Er gab ihm keinen Namen, ließ keinen geben.', oznelSabit: 'In jenen Sekunden gab ich ihr keinen Namen — das Nichtwissen hielt sie noch einige Sekunden am Leben.' },
        ],
      },
    },
  ],
};

export default macbethDE;
