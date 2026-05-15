# MODÜL II · HAMLET REFACTOR
## Implementation Dokümanı

**Versiyon:** v1.0
**Tarih:** Mayıs 2026
**Hazırlayan:** Beyti Engin × Claude
**Klinik Onay:** Filiz Kaya Ataklı (gerektiğinde)

---

## ÖNSÖZ

Bu doküman, **ITC App Modül II Hamlet** sayfasının Inside The Hamlet Workbook ile tam uyumlu hâle getirilmesi için kapsamlı bir refactor planıdır.

Doküman beş ana bölümden oluşur — her biri Modül II'nin bir alt-sayfasının tasarımı. İçerikler **Workbook'tan birebir** alınmıştır; alt-sorular **App için seçilmiş** versiyonlardır.

Geliştirici, bu doküman elinde olduğunda her sayfanın:
- Yapısını
- İçeriğini
- Veri modelini
- Tamamlanma mantığını
- Çapraz atıflarını

bilir. Kodlama detayları (component yapısı, route'lar) geliştiriciye bırakılmıştır.

---

## REFACTOR ÖZETİ

### Yapısal Kararlar

| Karar | Değer |
|-------|-------|
| Senin Çerçeven yapısı | 5 ana boşluk + her birinde 3 alt-soru (hibrit) |
| Eski 9 antrenman | Tamamen retire edilir; Yolculuk Modu (Modül III) yeterli |
| Refactor başlangıcı | Modül II eksiklerini tamamla (Oyun Öncesi Yaşam ekle, Timeline doldur) |
| Yazarın Çerçevesi | Mevcut "sahne" yapısı tamamen değişir → 5 tercih |
| Timeline sıcaklık | Etkileşimli (oyuncu kendi yorumunu işaretleyebilir) |

### Yeni Karakter Sayfası Mimarisi

```
/antrenman/karakter/hamlet
├── Karakter Kimliği (üstte, kart bilgisi)
├── Değiştirilemez Doğrular         (mevcut, korunur)
├── Oyun Öncesi Yaşam               (YENİ)
├── Timeline · 14 Sahne              (yapı var, dolduruluyor)
├── Yazarın Çerçevesi · 5 Tercih    (yapı tamamen değişir)
├── Senin Çerçeven · 5 Boşluk       (12 alandan 5+3 hibrit yapıya geçer)
└── Modül III · Yolculuk Modu CTA   (eski 9 antrenman buraya yönlenir)
```

---

# 1. DOĞRULAR (Mevcut — Korunur)

**Konum:** Mevcut sayfa yapısı korunur.
**Değişiklik:** Yok — Workbook s.50-57 ile birebir uyumlu.

**İçerik:**
- KİMLİK · Hamlet, Danimarka Prensidir
- AİLE · Babası Eski Kral Hamlet, annesi Gertrude, amcası Claudius
- BİLGİ · Wittenberg Üniversitesi'nde öğrenci, geri çağrılmış
- İLİŞKİ · Ophelia ile duygusal bağ, oyun öncesinde başlamış
- DOSTLUK · Horatio en yakın dost
- KARŞILAŞMA · Babasının hayaletiyle karşılaşır
- GÖREV · İntikam yükümü alır
- EYLEM · Polonius'u yanlışlıkla öldürür
- YOLCULUK · Claudius onu İngiltere'ye gönderir
- SON · Düelloda öldürülür; ölmeden önce Claudius'u öldürür

---

# 2. OYUN ÖNCESİ YAŞAM (YENİ)

**Route:** `/antrenman/karakter/hamlet/oyun-oncesi-yasam`
**Workbook karşılığı:** s.58-65

## Sayfa Yapısı

```
Oyun Öncesi Yaşam
├── 1. Giriş + "Görmediğimizi Taşımak" prensip kutusu
├── 2. Sekiz Olay (etkileşimli kartlar — açılır/kapanır)
└── 3. Sekiz İlişki (etkileşimli kartlar)
```

## Açılış Metni

> **Oyun Öncesi Yaşam**
> *Sahneye çıkmadan önce ne yaşandı*
>
> Shakespeare'in Hamlet oyunu ilk sahnesinde başlamaz. Seyirci olayların ortasına bırakılır. Babası ölmüştür, annesi yeniden evlenmiştir, bir hayalet surlarda dolaşır. Bütün bunlar oyunun hareket noktasıdır, ama hiçbiri sahnede gösterilmez.
>
> Sahneye ilk çıktığın an, Hamlet zaten kırılmış bir dünyada yaşıyordur.

**Vurgu kutusu (altın):**
> "Hamlet sahneye ilk çıktığı an, bütün geçmiş ağırlığını bedeninde taşır."

**Prensip kutusu:**
> **ITC İlkesi · Görmediğimizi Taşımak**
>
> ITC yaklaşımının çekirdeklerinden biri budur: karakterin sahnede gösterilmeyen geçmişini, oyuncunun sahnede taşıması.
>
> Hamlet'in ilk repliği — *"Yeğenden biraz fazla, oğuldan bir hayli az"* — eğer arkasında iki ay önce ölmüş bir baba, iki ay sonra evlenen bir anne, gasp edilmiş bir taht yoksa, sadece bir cümle kalır. Eğer varsa — bir insanın cümlesi olur.

## Sekiz Olay — Kart Yapısı

Her olay bir kart. Kapalıyken: olay başlığı + sahne referansı. Açıldığında: yük + yansıma alanı + içselleştirme işareti.

### Olay 1
- **Başlık:** Kral Hamlet (babası), Norveç Kralı Fortinbras'ı düelloda yener
- **Sahne:** I.İ · Horatio
- **Yük:** Ailesel onur, güç mirası, sırtta taşınan büyük bir gölge.
- **Yansıma sorusu:** Bu efsanevi babanın gölgesi senin Hamlet'inin bedenine nereye düşüyor?

### Olay 2
- **Başlık:** Norveç Kralı ölür; genç Fortinbras intikam planlar
- **Sahne:** I.İ · Horatio
- **Yük:** Hamlet'in kendi durumuna paralel bir intikam — ama o atılgan, Hamlet erteleyici.
- **Yansıma sorusu:** Hamlet bu paralel intikamcıyı duyduğunda kendisini nasıl konumlandırıyor?

### Olay 3
- **Başlık:** Kral Hamlet ani ve şüpheli bir biçimde ölür
- **Sahne:** I.V · Hayaletin İfşası
- **Yük:** Bütün oyunun hareket noktası. Bilinçaltındaki şüphe, sözle ifade edilmemiş bir kuşku.
- **Yansıma sorusu:** Sözle ifade edilemeyen kuşku — Hamlet'in bedeninde nasıl bir ses?

### Olay 4
- **Başlık:** Gertrude, Claudius ile aceleyle evlenir
- **Sahne:** I.İİ · Hamlet'in Monoloğu
- **Yük:** Ahlaki travma, derin yas üzerine ihanet — "henüz aylar dolmadan".
- **Yansıma sorusu:** "Henüz aylar dolmadan" — bu cümle bedende nasıl kayıyor?

### Olay 5
- **Başlık:** Claudius tahta geçer; Hamlet veraset hakkı olduğu hâlde dışarıda kalır
- **Sahne:** I.İİ
- **Yük:** Taht hakkının gaspı. Kişisel kayıp + siyasi kırılma birlikte.
- **Yansıma sorusu:** Kişisel kayıp + siyasi kırılma birlikte — hangisi önce hissediliyor?

### Olay 6
- **Başlık:** Hamlet, Wittenberg'den Danimarka'ya çağrılır
- **Sahne:** I.İİ · Claudius
- **Yük:** Entelektüel hayatından koparılış — Wittenberg, kendisi olabildiği yer.
- **Yansıma sorusu:** Kendisi olabildiği yerden çağrılmak — bedensel direnç nerede?

### Olay 7
- **Başlık:** Ophelia ile romantik bağ — oyun öncesinde başlamış
- **Sahne:** III.İ · Polonius, Laertes
- **Yük:** Umut ve kırılganlık. Yas içindeki tek pozitif bağ — ama o da tehdit altında.
- **Yansıma sorusu:** Yas içindeki tek pozitif bağ — ama tehdit altında. Çelişki nerede?

### Olay 8
- **Başlık:** Claudius, Norveç ile diplomatik ilişkiler kurar
- **Sahne:** I.İİ
- **Yük:** Yalnızca Hamlet yas tutuyor. Saray, ilişkilerine devam ediyor.
- **Yansıma sorusu:** Yalnızca Hamlet yas tutuyor — bu yalnızlık nasıl bir izolasyon?

**Kapanış kutusu (8 olay sonrası):**
> Sekiz olay, sekiz yük. Hamlet sahneye ilk çıktığında, hepsi bedeninde.

## Sekiz İlişki — Kart Yapısı

Her ilişki üç katmanlı: **Geçmiş → Şimdi → İz**

### İlişki 1 — Gertrude · ANNE
- **Geçmiş:** Sevgi kaynağı, çocukluğun sıcak merkezi.
- **Şimdi:** İhanet hissi içinde — ama hâlâ anne. Kopamıyor.
- **İz:** Aşk + öfke, aynı bedende.
- **Yansıma sorusu:** Bu çelişkili yük bedeninde nereye yerleşiyor? Hangi an sevgi, hangi an öfke baskın?

### İlişki 2 — Kral Hamlet · BABA
- **Geçmiş:** İdeal kral, ahlaki ölçü; oğul için hayranlık konusu.
- **Şimdi:** Ölü. Yas, henüz hayalet olarak çağrılmadı.
- **İz:** Doldurulamaz baba boşluğu.
- **Yansıma sorusu:** Doldurulamaz boşluk — bu boşluğun şekli ve büyüklüğü ne?

### İlişki 3 — Claudius · AMCA · ÜVEY BABA
- **Geçmiş:** Saraydaki amca, akrabalık. Yakın değil ama tanıdık.
- **Şimdi:** Annesinin eşi, tahta sahibi — tiksinti veriyor.
- **İz:** "Yeğenden biraz fazla, oğuldan bir hayli az."
- **Yansıma sorusu:** "Yeğenden biraz fazla, oğuldan bir hayli az" — bu mesafe bedende nasıl?

### İlişki 4 — Ophelia · SEVGİLİ
- **Geçmiş:** Aşk başlamış — mektuplar, gizli sözler.
- **Şimdi:** Polonius'un kontrolünde; Hamlet'ten uzaklaştırılıyor.
- **İz:** Tek pozitif bağ — ama o da kayıyor.
- **Yansıma sorusu:** Tek pozitif bağ kayıyor — bu kayma hangi anlarda fark ediliyor?

### İlişki 5 — Horatio · DOST
- **Geçmiş:** Wittenberg'den dost; entelektüel ortaklık.
- **Şimdi:** Cenazeye gelmiş — Hamlet'in tek güvendiği insan.
- **İz:** Tek sığınak, tek ayna.
- **Yansıma sorusu:** Tek sığınak, tek ayna — Horatio'yla olduğun zaman bedenin nasıl?

### İlişki 6 — Polonius · SEVGİLİNİN BABASI
- **Geçmiş:** Saray danışmanı; Hamlet'i prens olarak görür.
- **Şimdi:** Aşkın önündeki engel, gözcü, manipülatör.
- **İz:** Aşka set çeken otorite.
- **Yansıma sorusu:** Aşka set çeken otorite — Polonius'a bakışta hangi tutulma var?

### İlişki 7 — Laertes · SEVGİLİNİN KARDEŞİ
- **Geçmiş:** Saray çevresinden tanıdık; aynı yaş, paralel hayat.
- **Şimdi:** Fransa'ya gidiyor; kız kardeşini Hamlet'e karşı uyarıyor.
- **İz:** Eski yakınlık, yeni mesafe.
- **Yansıma sorusu:** Eski yakınlık, yeni mesafe — bu değişim hangi anda fark edildi?

### İlişki 8 — Fortinbras · NORVEÇ PRENSİ
- **Geçmiş:** Babalarının düellosu üzerinden dolaylı bir tarih.
- **Şimdi:** Uzak bir tehdit, henüz Hamlet'in radarında değil.
- **İz:** Paralel intikamcı — Hamlet'in karşı-aynası.
- **Yansıma sorusu:** Karşı-ayna — Fortinbras'ı düşündüğünde Hamlet kendinden ne görür?

**Kapanış kutusu:**
> Hamlet, sahneye sekiz olayla değil — sekiz olay ve sekiz ilişkiyle çıkıyor.

## Sayfa Sonu

```
✓ OYUN ÖNCESİ YAŞAM TAMAMLANDI

Buraya kadar Hamlet'in koordinatlarını kurdun. Doğruları gördün, oyun öncesini tanıdın, ilişkileri haritaladın. Şimdilik bunlar bedeninde otursun. Bir nefes ver.

SIRADAKİ
Sahne Timeline · 14 sahnenin haritası
[Timeline'a Geç →]
```

## Veri Modeli

### `oyun_oncesi_olay_yansimalar`
```sql
id              uuid PRIMARY KEY
kullanici_id    uuid REFERENCES users(id)
karakter_id     text  -- "hamlet"
olay_no         int   -- 1-8
yansima_metni   text
icsel_kabul     boolean DEFAULT false  -- "Bu yükü içselleştirdim"
guncellendi_at  timestamp DEFAULT now()
```

### `oyun_oncesi_iliski_yansimalar`
```sql
id              uuid PRIMARY KEY
kullanici_id    uuid REFERENCES users(id)
karakter_id     text
iliski_no       int   -- 1-8
yansima_metni   text
tanidi          boolean DEFAULT false  -- "Bu ilişkiyi tanıdım"
guncellendi_at  timestamp DEFAULT now()
```

**RLS:** Sadece kullanıcı kendi yansımalarını okur/yazar.

**Auto-save:** 500ms debounce.

## Tamamlanma Mantığı

- 8 olay + 8 ilişki = 16 kart
- Tamamlanma şartı: 16 kartın hepsi en az **bir kez açılmış** olmalı (yansıma boş kalabilir)
- Tüm "İçselleştirdim/Tanıdım" işaretleri toplanırsa "tam tamam"
- Kısmi tamamlanma da bir sonraki bölüme geçişe izin verir

---

# 3. TIMELINE · 14 SAHNE

**Route:** `/antrenman/karakter/hamlet/timeline`
**Workbook karşılığı:** s.66-85

## Sayfa Yapısı

```
Timeline
├── 1. Giriş + Sayfa Anatomisi
├── 2. Görsel Timeline (etkileşimli zincir)
├── 3. Beş Perde Tema Bandı (üst görünüm)
└── 4. Sahne Detay Panelleri (her sahneye tıklayınca)
```

## Açılış Metni

> **Sahne Timeline**
> *Hamlet'in bedensel zinciri*
>
> Bir karakter, sahnelerini ayrı ayrı yaşamaz. Her sahneye bir öncekinden bir şey taşır; her sahneden bir sonrakine bir şey bırakır. Bu zincire **içsel timeline** diyoruz.

**Vurgu kutusu (altın):**
> "Her sahne, bir önceki sahnenin bedendeki devamıdır."

## Sayfa Anatomisi Kutusu

> **Bir Sahne Kartında Ne Var?**
>
> Her sahne dört katmandan oluşur:
> - **OLAY** — Sahnede ne oluyor (Shakespeare'in metnine sadık özet)
> - **İÇSEL** — Hamlet'in o sahnede taşıdığı duygusal ton
> - **SICAKLIK** — 1'den 10'a, Hamlet'in iç ısısı (soğuk = donmuş, sıcak = patlamada)
> - **YÜK** — Bir sonraki sahneye taşıdığı şey

## Görsel Timeline

**Yatay akış (desktop), dikey akış (mobil).** Her sahne bir küre — sıcaklığa göre renklenmiş:
- Soğuk (1-3): Buz mavisi
- Orta (4-6): Mor
- Sıcak (7-10): Kırmızı/turuncu

**Etkileşim:**
- Hover/Tap → tooltip (sahne adı + sıcaklık)
- Click → detay paneli açılır
- Sıcaklık ayarlama (kaydırma) → oyuncu kendi yorumunu işaretler

## Beş Perde Tema Bandı

```
I             II           III          IV          V
Şüphe ve     Plan ve      Eylem ve     Sürgün ve   Kabul ve
Pasif Yas    Gözlem       Patlama      Kıyaslama   Son
1-2          3-4          5-8          9-11        12-14
```

Her tema başlığına tıklanabilir — o perdedeki sahneler vurgulanır.

## 14 Sahne İçeriği

### Sahne 1 — Surlarda Hayalet
- **Konum:** I.İ · Gece
- **Olay:** Elsinore surlarında nöbet tutan askerler bir hayalet görür. Horatio çağrılır; hayalet Eski Kral Hamlet'e benzemektedir. Hamlet henüz sahnede değil — saray salonunda yas tutmaktadır.
- **İçsel:** Hamlet bu sahnede yok — ama metin onun yokluğunda örülüyor. Hayalet, oğlunu bekliyor.
- **Önerilen Sıcaklık:** 3/10
- **Yük:** Henüz haberi olmayan bir oğul, bir hakikate doğru çekiliyor.

### Sahne 2 — İlk Monolog
- **Konum:** I.İİ · Saray
- **Olay:** Claudius tahttadır, Gertrude yanında, Hamlet siyahlar içinde kenarda. "Yeğenden biraz fazla, oğuldan bir hayli az" der amcasına. Yalnız kalınca: "Ah bu katı, kaskatı beden bir dağılsa, eriyip gitse bir çiy tanesinde sabahın!"
- **İçsel:** Yas + tiksinti + ahlaki çöküş. Annenin hızı, sarayın gülümsemesi katlanılmaz.
- **Önerilen Sıcaklık:** 7/10
- **Yük:** Yalnızlık doruk. Bir şey eksik, ama ne — henüz bilmiyor.

### Sahne 3 — Hayaletle Karşılaşma
- **Konum:** I.İV-V · Gece
- **Olay:** Hayalet Hamlet'e görünür. Babasının Claudius tarafından kulağına zehir dökülerek öldürüldüğünü söyler ve intikam ister. Hamlet yemin eder.
- **İçsel:** Şok → inanç → intikam yemini. Üç katman birkaç dakikada.
- **Önerilen Sıcaklık:** 9/10
- **Yük:** Bu sahneden çıkan Hamlet, sahneye giren Hamlet değildir.

### Sahne 4 — Plan + Oyuncular
- **Konum:** II.İİ · Saray
- **Olay:** Rosencrantz ve Guildenstern saraydadır — Claudius'un casusları. Oyuncular gelir. Hamlet, "Fare Kapanı" planını kurar: bir oyun sahnelenecek, Claudius'un suçluluğu test edilecek.
- **İçsel:** Paranoya + zekâya yöneliş. Beden geride, akıl önde. Delilik maskesi takılıyor.
- **Önerilen Sıcaklık:** 5/10
- **Yük:** Hayalete inanmıyorum diyor; gerçekten de mi inanmıyor?

### Sahne 5 — "Var olmak mı, yok olmak mı" + Ophelia
- **Konum:** III.İ
- **Olay:** Hamlet tek başına, varoluş üzerine düşünür: "Var olmak mı, yok olmak mı, bütün sorun bu." Sonra Ophelia gelir; Hamlet onu sertçe reddeder, manastıra gönderir.
- **İçsel:** Varoluşsal çöküş → hayata dönme kararı → aşkın reddedilişi. Üç farklı an, tek sahnede.
- **Önerilen Sıcaklık:** 8/10
- **Yük:** Ophelia da onların safındaydı (sandı). Tek pozitif bağ koparılıyor.

### Sahne 6 — Oyun İçinde Oyun
- **Konum:** III.İİ · Saray
- **Olay:** Oyuncular, Eski Kral'ın ölümünü temsil eden bir sahne oynar. Claudius dayanamaz, sahneyi bırakıp çıkar. Hamlet kanıtını almıştır.
- **İçsel:** Sabırlı strateji → patlamış doğrulama. "Şimdi biliyorum."
- **Önerilen Sıcaklık:** 9/10
- **Yük:** Artık biliyorum. Şimdi ne?

### Sahne 7 — Dua Eden Claudius
- **Konum:** III.İİİ
- **Olay:** Claudius günah çıkarmak için diz çökmüştür. Hamlet arkasında, kılıç çekilmiş — ama vurmuyor. "Cennete gider bu halinde öldürürsem; öcümü almış sayılır mıyım?" Erteliyor.
- **İçsel:** Vicdan + adalet duygusu + erteleme. Akıl gerekçe üretiyor.
- **Önerilen Sıcaklık:** 6/10
- **Yük:** Erteleme alışkanlığı pekişti. Ne zaman olsa hep böyle.

### Sahne 8 — Anne Sahnesi + Polonius
- **Konum:** III.İV · Anne Odası
- **Olay:** Hamlet annesinin odasına gelir. Perdenin arkasında bir ses duyar; "Ne o? Bir fare mi?" diye kılıcını saplar. Polonius'u yanlışlıkla öldürmüştür. Annesiyle yüzleşme bundan sonra başlar.
- **İçsel:** Sevgi → öfke → pişmanlık. Üç katman aynı anda patlar.
- **Önerilen Sıcaklık:** 10/10
- **Yük:** Artık katil. Geri dönüş yok.

### Sahne 9 — İngiltere'ye Gönderiliş
- **Konum:** IV.İİİ
- **Olay:** Polonius'un cesedini saklamıştır. Claudius onu sürgün eder — sözde diplomasi için, gerçekte ölüm fermanıyla. Hamlet ironi maskesini takar; içten içe tehdidi sezer.
- **İçsel:** İronik delilik maskesi + içte tetik. Söz ve niyet ayrı.
- **Önerilen Sıcaklık:** 5/10
- **Yük:** Tehdit altında — ama farkındayım.

### Sahne 10 — Fortinbras Ordusu
- **Konum:** IV.İV · Yol
- **Olay:** Yolda, Fortinbras'ın ordusuyla karşılaşır. Küçük bir toprak parçası için savaşan binlerce asker. Hamlet kendi eylemsizliğine bakıp utanç duyar: "Ey düşüncem, bundan böyle ya kana boyan, ya da beş para etmediğine yan."
- **İçsel:** Utanç → kendine öfke → eylem kararı. Kıyaslama bedeni harekete geçirir.
- **Önerilen Sıcaklık:** 7/10
- **Yük:** Karar var, ama Danimarka'dan uzak. Eylem nerede?

### Sahne 11 — Ophelia'nın Deliliği + Ölümü
- **Konum:** IV.V-VII
- **Olay:** Hamlet sahne dışında. Ophelia çiçeklerle gelir, deliliği görünür. Bir süre sonra dereye düşer ve boğulur. Laertes Fransa'dan döner, intikam yemini eder.
- **İçsel:** Hamlet henüz haberi yok — ama yokluğu sahneyi büyütüyor. Polonius'un ölümünün dolaylı dalgaları.
- **Önerilen Sıcaklık:** 4/10
- **Yük:** Yokluğu büyür. Geri döndüğünde başka bir yas onu bekliyor.

### Sahne 12 — Yorick + Ophelia'nın Cenazesi
- **Konum:** V.İ · Mezarlık
- **Olay:** Mezarcılarla konuşur, Yorick'in kafatasını eline alır: "Zavallı Yorick…" Sonra Ophelia'nın cenazesine rastlar. Laertes ile mezarın içinde kavgaya tutuşur.
- **İçsel:** Ölümle felsefi barış (sakin) → bastırılmış aşkın patlaması (şok). İki an, beş dakika içinde.
- **Önerilen Sıcaklık:** 8/10
- **Yük:** Aşkı kabullenmedi, ama kaybetti. Ölüm artık tanıdık.

### Sahne 13 — Horatio'ya · Kabulleniş
- **Konum:** V.İİ(A)
- **Olay:** Horatio'ya R&G'nin ihanetini ve onların ölümüne sebep oluşunu anlatır. Düello davetini kabul eder. "Serçenin ölmesinde bile bir bildiği vardır kaderin."
- **İçsel:** Soğukkanlı kabulleniş. İçsel barış başlıyor — ölümle yüzleşmeye hazır.
- **Önerilen Sıcaklık:** 4/10
- **Yük:** Artık ölümle barıştım. Ne olursa olsun.

### Sahne 14 — Düello + Ölüm
- **Konum:** V.İİ(B) · Son
- **Olay:** Düello başlar. Hile fark edilir: kılıç ve kadeh zehirlidir. Gertrude zehirli kadehten içer, ölür. Hamlet, Laertes'i ve Claudius'u öldürür. Kendi de zehirden ölür: "Üst tarafı… sessiz bir dünya."
- **İçsel:** Onurla ölüm + hikâyeyi devretme. "Horatio… anlat onlara."
- **Önerilen Sıcaklık:** 9/10
- **Yük:** Hikâye Horatio'ya kaldı. Hamlet susuyor.

## Sahne Detay Paneli

Bir sahneye tıklandığında **modal veya alt panel** açılır.

### Panel İçeriği

```
[Sahne No] [Başlık]
[Sahne yeri/konumu]

📜 OLAY
[olay metni]

💭 İÇSEL
[içsel metin]

🌡️ SICAKLIK
Workbook önerisi: [N]/10 (gri tonlu daire)
Senin yorumun: [oyuncu kaydırarak ayarlar — renkli daire]

⚡ YÜK
[yük metni]

✍️ SENİN YANSIMAN
"Bu sahnede Hamlet'in sıcaklığı sence kaç? Bedeninde nereye yerleşiyor?"
[yansıma alanı]

☐ Bu sahneyi anladım

[← Sahne N-1] [Sahne N+1 →]
```

## Veri Modeli

### `sahne_yansimalar`
```sql
id              uuid PRIMARY KEY
kullanici_id    uuid REFERENCES users(id)
karakter_id     text
sahne_no        int   -- 1-14
oyuncu_sicaklik int   -- 1-10
yansima_metni   text
anladi          boolean DEFAULT false
guncellendi_at  timestamp DEFAULT now()
```

## Tamamlanma Mantığı

- 14 sahnenin hepsi en az **bir kez açılmış** olmalı
- Her sahnede **oyuncu sıcaklığı işaretlenmiş** olmalı (yansıma yazma zorunlu değil)
- Tamamlandığında bir sonraki bölüme geçiş aktif olur

## Sayfa Sonu

```
✓ TIMELINE TAMAMLANDI

14 sahnenin bedensel zincirini gördün. Her sahnenin sıcaklığını okudun, kendi yorumunu işaretledin.

Bu zincir bedeninde yerleşene kadar buraya geri dönebilirsin.

SIRADAKİ
Yazarın Çerçevesi · 5 tercih
[Yazarın Çerçevesi'ne Geç →]
```

---

# 4. YAZARIN ÇERÇEVESİ · 5 TERCİH

**Route:** `/antrenman/karakter/hamlet/yazarin-cercevesi`
**Workbook karşılığı:** s.86-105

## ÖNEMLİ: Mevcut Yapı Tamamen Değişir

App'in mevcut Yazarın Çerçevesi yapısı **sahne tabanlı** (Hayalete karşılaşma, To be or not to be, vs.) — bu **yanlış**. Workbook'taki yapı **5 tercih** üzerine:

1. Hayalet gerçek mi, halüsinasyon mu?
2. Delilik gerçek mi, performans mı?
3. Ophelia'ya aşk sahici mi?
4. Hamlet neden bu kadar bekliyor?
5. Sondaki teslimiyet pasif mi, olgun mu?

## Sayfa Yapısı

```
Yazarın Çerçevesi
├── 1. Giriş + "Beş Kavşak" haritası
├── 2. Tercih kartları listesi (5 ayrı tercih)
├── 3. Tercih Detay Sayfaları (her biri ayrı route)
├── 4. Sentez Sayfası — "Beş Cümle, Bir Hamlet"
└── 5. Tercih → Sahne yansıması (Timeline'a bağlantı)
```

## Açılış Metni

> **Yazarın Çerçevesi**
> *İçine girdiğin oda*
>
> Bu bölümde beş kritik tercih var. Her biri Hamlet'in dört yüzyıldır tartışılan açık uçlarından biri. Her tercihte: Shakespeare'in metinde bıraktığı işaretleri okuyacaksın, olası yorumları göreceksin — ve seninkini işaretleyeceksin.

**Vurgu kutusu (altın):**
> "Doğru cevap yok. Senin Hamlet'inin cevabı var."

## Tercih Detay Sayfası — Genel Yapı

Her tercih kartına tıklandığında: `/antrenman/karakter/hamlet/yazarin-cercevesi/[tercih-no]`

```
TERCİH N · [Konu]
[Tercih başlığı]

📖 SHAKESPEARE'İN İŞARETLERİ
[3-4 sahne referansı, her biri Timeline'a linkli]

[Sentez cümlesi]

ÜÇ OLASI YORUM (veya BEŞ — Tercih 4 için)
[Seçim alanları, radyo veya checkbox]

✍️ YA DA KENDİ YORUMUN
[özel yorum alanı]

[Anlamsal kapanış cümlesi]

[← Geri] [Tercih N+1 →]
```

## Tercih 1 — Hayalet (Tek Seçim)

**Başlık:** Hayalet gerçek mi, halüsinasyon mu?

**İşaretler:**
- **I.İ · Surlar:** Bernardo, Marcellus ve Horatio aynı anda görür. Horatio şüpheci entelektüel: "Yemin ederim, dünyada inanmazdım, kendi gözlerimle görmeseydim böylesine açık seçik." → Sahne 1
- **I.V · Gece:** Hayalet Hamlet'le konuşur, Eski Kral'ın ölümünü tüm ayrıntısıyla anlatır — kulağa zehir, bahçedeki uyku. → Sahne 3
- **III.İV · Anne Odası:** Hamlet hayaleti görür ve onunla konuşur. Gertrude tek kelime duymaz: "Hiçbir şey! Oysa görüyor da gözlerim ne varsa." → Sahne 8

**Sentez:** Toplu görüş + yalnız görüş — birlikte. Shakespeare ikisini de yazıyor.

**Üç Olası Yorum:**
- **A · Hayalet fizik ötesi gerçek** — Tıpkı Shakespeare'in çağdaş seyircisinin inandığı gibi: ruh, intikam emri, dinsel gerçeklik. Anne görmüyor çünkü onun ruhsal görüşü kapalı.
- **B · Toplu sezgi, bireysel zihin** — Surlardaki askerler kollektif bir gerilime tepki veriyor. Anne sahnesinde ise Hamlet'in zihinsel projeksiyonu — bilinçaltı gerçek görünür hâle gelmiş.
- **C · Tamamen Hamlet'in zihninden** — Hayalet bir halüsinasyon — Hamlet'in suçluluk ve şüphesinin dışavurumu. Diğerlerinin görüşü tarihsel gerçekçilik için kurgu.

**Kapanış:** Senin seçimin Hamlet'in gerçeklikle ilişkisini belirler.

## Tercih 2 — Delilik (Tek Seçim)

**Başlık:** Delilik gerçek mi, performans mı?

**İşaretler:**
- **I.V · Sonu:** Hamlet, Horatio'ya plan açıklar: "Çünkü olur ya, bundan sonra, kendimi deli göstermek isteyebilirim." — bilinçli karar. → Sahne 3
- **III.İV · Anne Odası:** Annesine söyler: "Deli olmadığımı, mahsus öyle göründüğümü." → Sahne 8
- **III.İ · Nunnery:** Ophelia'ya zalimlik. "Git, bir manastıra gir!" — Bu bir performans olabilir, ama duygusal şiddet sahici. → Sahne 5
- **V.İ · Mezarlık:** Laertes ile Ophelia'nın mezarında kavga: "Bin kardeşi bütün sevgilerini birleştirip gelseler…" — kontrolsüz patlama. → Sahne 12

**Üç Olası Yorum:**
- **A · Tamamen performans** — Hamlet zekice bir oyun oynuyor. Anlık yoğunluklar bile rolün içinde. Sahnedeki her aşırılık amaca yönelik.
- **B · Maske gerçeğe dönüşüyor** — Başlangıçta strateji — ama travma birikince maske içeriden çatlıyor. Hamlet bazı anlarda gerçekten dağılıyor, sonra toparlıyor.
- **C · İki yan birlikte** — Bilinçli ve bilinçsiz hep birlikte. Hamlet seçiyor ama aynı zamanda kapılıyor. İki yan ayrılamaz.

**Kapanış:** Senin seçimin sahnedeki "delilik" anlarının dokusunu belirler.

## Tercih 3 — Ophelia (Tek Seçim)

**Başlık:** Ophelia'ya aşk sahici mi?

**İşaretler:**
- **II.İİ · Polonius mektuptan okur:** Hamlet'in Ophelia'ya yazdığı: "İnanma istersen yıldızların yandığına, güneşin döndüğüne inanma, doğrunun ta kendisini yalan bil, ama seni sevdiğime inan Ophelia."
- **III.İ · Nunnery:** Çelişkili: "Sizi gerçekten sevmişim bir ara." — birkaç dize sonra: "Sevmiyordum sizi." Ardından: "Git, bir manastıra gir!" → Sahne 5
- **V.İ · Mezarlık:** Cenazede patlar: "Ophelia'yı seviyordum ben. Bin kardeşi bütün sevgilerini birleştirip gelseler, sevemezler onu benim sevdiğim kadar!" → Sahne 12
- **IV.V · Ophelia'nın Ölümü:** Hamlet sahne dışında — yas tutmuyor, haberi yok. Geri dönüşte ilk gördüğü cenaze. → Sahne 11

**Üç Olası Yorum:**
- **A · Sahici aşk, korumacı ret** — Aşk başta da, sonda da gerçek. Manastır sahnesindeki sertlik Ophelia'yı sarayın tehlikesinden uzaklaştırma jesti — sevgisini gizleyerek kollar.
- **B · İhanet duygusu kırılma yapmış** — Aşk başlangıçta gerçek; ama Ophelia'nın babası ile işbirliği yaptığını sanınca soğumuş. Mezarlıktaki patlama, geri dönüşü olmayan bir kaybın itirafı.
- **C · Aşk hep belirsizdi** — Hamlet kendi de bilmiyordu sevip sevmediğini. Mezarlıkta da bilmiyor — sadece kaybın büyüklüğüne tepki veriyor. Aşk, kayıp anında doğdu.

**Kapanış:** Senin seçimin nunnery sahnesinin yumuşaklığını ya da sertliğini belirler.

## Tercih 4 — Erteleme (ÇOKLU SEÇİM)

**ÖZEL: Birden fazla seçilebilir.** UI'da checkbox + bilgi notu: "Birden fazla seçim yapabilirsin. Çoğu sahneleme birkaç katmanı birlikte kullanır."

**Başlık:** Hamlet neden bu kadar bekliyor?

**İşaretler:**
- **II.İİ · 2. Monolog:** "Ne zavallı bir eşekmişim ben!" Kendine kızıyor — eylem yok, sadece sözler. Oyuncu, hayali bir acı için bile gözyaşı dökebiliyorken o, gerçek babası için tek bir şey yapmamış.
- **III.İİİ · Dua eden Claudius:** Kılıç çekilmiş — vurmuyor. "Cennete gider bu halinde öldürürsem; öcümü almış sayılır mıyım?" — gerekçe üretiliyor. → Sahne 7
- **IV.İV · Fortinbras'tan Sonra:** "Ey düşüncem, bundan böyle ya kana boyan, ya da beş para etmediğine yan." — kendine söz, ama eylem yine yok. → Sahne 10
- **III.İ · "Olmak ya da Olmamak":** "Bilinç böyle korkak ediyor hepimizi: düşüncenin soluk ışığı bulandırıyor yürekten gelenin doğal rengini." → Sahne 5

**Beş Klasik Yorum:**
- **A · Vicdan / ahlaki tereddüt** — Goethe yorumu. Hamlet hassas ruhlu, kabul edemediği bir görevin altında ezilmiş.
- **B · Korkaklık** — Kendi kendine söylediği — eylem cesareti yok, sözle örtüyor.
- **C · Depresyon ve eylemsizlik** — Modern okuma — yas, anhedoni, irade çöküşü. Karar veremiyor çünkü yapılacak hiçbir şey önemli görünmüyor.
- **D · Düşünce engeli** — Coleridge yorumu — fazla düşünce, eylemi paralize ediyor. Entelektüel ölüm.
- **E · Bilinçaltı çatışma** — Freud yorumu — Claudius, Hamlet'in bilinçaltında kendisinin yapmak istediğini yapmış. Ona vurmak, kendine vurmak demek.

**UI Notu:** *"Birden fazla seçebilirsin. Çoğu sahneleme birkaç katmanı birlikte kullanır."*

## Tercih 5 — Son (Tek Seçim)

**Başlık:** Sondaki teslimiyet pasif mi, olgun mu?

**İşaretler:**
- **V.İİ · Horatio'ya:** "Serçenin ölmesinde bile bir bildiği vardır kaderin. Şimdi olacak bir şey yarına kalmaz, yarına kalacaksa, bugün olmaz. Bütün mesele hazır olmakta." → Sahne 13
- **V.İİ · Düello Öncesi:** Horatio uyarır: "İçim sıkıntı dolu, gitme." Hamlet: "Ne olacaksa olsun! Bütün mesele hazır olmakta." → Sahne 14
- **V.İİ · Son Sözler:** "Üst tarafı… sessiz bir dünya." — Onurla mı, yorgunlukla mı? Shakespeare boş bırakır. → Sahne 14

**Sentez:** Beşinci perdenin Hamlet'i öncekiyle aynı değil. Bir şey değişmiş — ama ne?

**Üç Olası Yorum:**
- **A · Pasif vazgeçiş** — Hamlet yorulmuş, anlamlandırma kapasitesi tükenmiş. "Bütün mesele hazır olmakta" da bir teslim bayrağı — kaderin elinde dövülmüş bir adamın son sözü. Ölüm bir kurtuluş.
- **B · Olgun kabulleniş** — İngiltere yolundan dönen Hamlet farklı — ölümle yüzleşmiş, korkusunu yenmiş. Teslim değil barış. Eyleme hazır, ama sonucuna takılı değil. Felsefi bir olgunluk.
- **C · İkisi birden — gri alan** — Hem yorgun hem olgun. Vazgeçmek ile teslim olmak arasındaki ince çizgi. Shakespeare bu ikisini ayırmıyor — belki ayırmak da gerekmiyor.

**Kapanış:** Senin seçimin son sahnenin tonunu belirler — yenilgi mi, yatışma mı.

## Sentez Sayfası

**Route:** `/antrenman/karakter/hamlet/yazarin-cercevesi/sentez`

5 tercih tamamlandığında açılır.

```
✓ BEŞ TERCİH TAMAMLANDI

Beş tercihte de bir kutu işaretledin (ya da kendi yorumunu yazdın). Şimdi bu beş seçim birleşip senin Hamlet'ini ortaya çıkarıyor.

BEŞ CÜMLE — SENİN HAMLET'İN

1 · HAYALET
Senin seçimin: [oyuncunun seçimi]
"Benim Hamlet'imde hayalet ___, çünkü ___"
[yazma alanı]

2 · DELİLİK
[aynı yapı]

3 · OPHELIA
[aynı yapı]

4 · ERTELEME
[birden fazla seçim varsa hepsi gösterilir]
[yazma alanı]

5 · SON
[aynı yapı]
```

### Tercih → Sahne Yansıması (Sentez sayfasının altında)

```
TERCİHLERİN TIMELINE'DA NASIL GÖRÜNÜR

HAYALET seçimin: [B]
→ Sahne 3 (I.iv-v) ve Sahne 8 (III.iv) etkiler.
"B" seçtin: Beden hem dış varlığa hem iç projeksiyona tepki verir.
[Sahne 3'e git] [Sahne 8'e git]

DELİLİK seçimin: [C]
→ Sahne 4, 5, 8, 9'u etkiler.
"C" seçtin: Bilinçli ve bilinçsiz hep birlikte. Hem oyun hem kapılma.
[Sahnelere git]

[... 3, 4, 5 için aynı yapı]
```

## Veri Modeli

### `yazarin_cercevesi_secimler`
```sql
id              uuid PRIMARY KEY
kullanici_id    uuid REFERENCES users(id)
karakter_id     text
tercih_no       int   -- 1-5
secimler        text[]  -- array (Tercih 4 için birden fazla; diğerleri tek eleman)
ozel_yorum      text
sentez_cumle    text
guncellendi_at  timestamp DEFAULT now()
```

## Tamamlanma Mantığı

- 5 tercihin hepsinde **en az bir seçim** yapılmış olmalı (hazır seçenek veya özel yorum)
- Sentez cümleleri yazma zorunlu değil ama önerilir
- Tamamlandığında bir sonraki bölüme geçiş aktif olur

## Sayfa Sonu

```
✓ YAZARIN ÇERÇEVESİ TAMAMLANDI

Beş tercih yaptın. Yazarın çerçevesini sahiplendin.

Shakespeare'in yazdığı çerçevenin içine girdin. Onun bıraktığı açık uçlardan kendi yorumunu çıkardın.

Bunlar senin Hamlet'inin omurgası. Sahneye çıktığında, beş tercihinin hepsi bedeninde olacak.

SIRADAKİ — SON BÖLÜM
Senin Çerçeven · Shakespeare'in sustuğu yer
[Senin Çerçeven'e Geç →]
```

---

# 5. SENİN ÇERÇEVEN · 5 BOŞLUK

**Route:** `/antrenman/karakter/hamlet/senin-cerceven`
**Workbook karşılığı:** s.106-125

## Sayfa Yapısı

```
Senin Çerçeven
├── 1. Giriş + ITC 3. İlke + Yöntem Sayfası
├── 2. Beş Boşluk Listesi (kart yapısı)
├── 3. Boşluk Detay Sayfaları (5 ayrı sayfa)
└── 4. Sentez Sayfası — "Beş Boşluk, Bir Karakter"
```

## Açılış Metni

> **Senin Çerçeven**
> *Shakespeare'in sustuğu yer*
>
> Yazarın Çerçevesi'nde Shakespeare'in yazdığını okudun. Şimdi, son bölümde, onun yazmadığını yazacaksın.
>
> Hamlet metninde sahnelerin arasında büyük boşluklar var. Hamlet bir sahnede çıkıyor, sonraki sahnede başka bir Hamlet olarak giriyor. Aralarda bir şeyler yaşandı — Shakespeare bunların çoğunu yazmadı. Ama yaşandı. Karakter bedeninde taşıyor.

**Vurgu kutusu (altın):**
> "Boşluklar tesadüf değil — oyuncuya bırakılmış mekânlar."

## ITC 3. İlke Kutusu

> **ITC · 3. İlke · Sessiz Evrim**
>
> *"Çoğu sistem sahne içindeki davranışı analiz ederken, ITC karakterin dönüşümünü sahne dışındaki boşluklarda arar. Repliklerin arasındaki suskunluk, bir sahnenin bittiği ama karakterin devam ettiği alanlar, oyuncunun zihinsel canlandırma becerisiyle doldurulur."*
>
> *— Inside The Character, Manifesto, 3. Madde*

## Yöntem Bölümü — 5 Adımlı Pratik

```
BOŞLUK NASIL YAZILIR?

1️⃣ ÇERÇEVEYİ OKU
Sahne öncesi nerede bitti, sahne sonrası nerede başlıyor — iki ucu net gör.

2️⃣ SORULARI AÇ
"Burada ne oldu?" değil, "Hamlet'in bedeninde ne oldu?" diye sor.

3️⃣ DUYUSAL YAZ
Soyut kavramlardan kaç. "Üzüldü" değil, "sol elinin parmaklarını sıktı".

4️⃣ TEK ANI SEÇ
Boşluk uzun olabilir, ama sen tek bir anı yazıyorsun.

5️⃣ SAHNEYE GEÇİR
Yazdığın şey bir sonraki sahneye nasıl taşınacak?
```

## Bir Uyarı Kutusu

> **Doğru cevap aramak değil**
>
> Yazdıkların "doğru" olmak zorunda değil — Shakespeare'in niyetiyle örtüşmek de zorunda değil. Çünkü Shakespeare niyetini sustu.
>
> Yazdıkların **senin Hamlet'in için** doğru olmalı.

**Vurgu:**
> "Yazarken Hamlet sen değil — ama sen Hamlet'in zihninde misafirsin."

> *Eğer bir boşluk için cümle gelmiyorsa, sayfayı boş bırak. Sonra geri dön. Bazen bir boşluk yarın açılır, bugün açılmaz. Bu da bir bilgi.*

## Beş Boşluk — Kart Listesi

Her boşluk bir kart. Tıklayınca detay sayfasına gider.

```
┌──────────────────────────────┐
│ 1                  [Aç →]    │
│ Wittenberg'den Elsinore'a    │
│ Oyun Öncesi                  │
│ ÖNCE: Wittenberg             │
│ SONRA: I.İİ Saray            │
│ ☐ 0/3 alt-soru yazıldı       │
└──────────────────────────────┘

┌──────────────────────────────┐
│ 2                  [Aç →]    │
│ Hayaletten sonraki gece      │
│ I.V Sonu → II.İİ             │
│ ÖNCE: I.V Hayalet ifşası     │
│ SONRA: II.İİ Plan + oyuncular│
│ ☐ 0/3 alt-soru yazıldı       │
└──────────────────────────────┘

[... 3, 4, 5 için aynı yapı]
```

## Boşluk Detay Sayfası — Genel Yapı

Her boşluk için: `/antrenman/karakter/hamlet/senin-cerceven/[bosluk-no]`

```
BOŞLUK N
[Boşluk başlığı]

📖 ÖNCE — [sahne adı]
[önce metni]
        ↓
🌫️ BOŞLUK
[boşluk açıklaması]
        ↓
📖 SONRA — [sahne adı]
[sonra metni]
─→ Timeline Sahne X'e git

[Sentez cümlesi]

✍️ SENİN HAMLET'İN İÇİN BU BOŞLUK
"Üç anı yaz. Her biri için bir alt-soru. Hepsini yazma zorunlu değil — biri açılır, diğeri yarın açılır."

1️⃣ [Alt-soru başlığı]
[Soru]
[yansıma alanı]
☐ Bu an açıldı

2️⃣ [Alt-soru başlığı]
[aynı yapı]

3️⃣ [Alt-soru başlığı]
[aynı yapı]

🌊 BU BOŞLUĞUN BÜTÜNÜ (opsiyonel)
[bütün boşluk metni alanı]

[← Geri] [Boşluk N+1 →]
```

## Boşluk 1 — Wittenberg'den Elsinore'a

**Konum:** Oyun Öncesi → I.İİ Saray

**ÖNCE — Wittenberg:**
Hamlet üniversitede, entelektüel hayatın içinde. Babası sağ. Hayatı düzenli, sevdiği bir kadın var Danimarka'da, dostu Horatio yanında. Bir gün haber gelir: babası ölmüş.

**BOŞLUK:**
Habersiz kalkış · belirsiz bir yolculuk · cenazeye yetişme telaşı · yas içinde anneyi düşünmek · Claudius hâlâ amca · evlilik haberi gelmemiş.

**SONRA — I.İİ Saray:**
Hamlet siyahlar içinde sarayda. Anne Claudius'la evlenmiş. Hamlet kenarda, yas tutuyor — ilk monolog: "Ah bu katı, kaskatı beden bir dağılsa, eriyip gitse bir çiy tanesinde sabahın!"
→ Timeline Sahne 2

**Sentez:** Boşlukta ne kadar zaman geçti, bilmiyoruz. Cenazeye mi yetişti, düğüne mi vardı — Shakespeare bunu söylemiyor.

**Alt-Sorular:**

1. **Haber Geldiğinde**
   Haberi ona kim, hangi kelimelerle getirdi? Bedeni nasıl tepki verdi?

2. **Yola Çıkmadan**
   Yola çıkmadan önce odasında ne yaptı, neyi bıraktı, neyi yanına aldı?

3. **Anneyi Gördüğünde**
   Anneyi ilk gördüğünde hangi sözcük dudaklarına geldi, hangisi gelmedi?

## Boşluk 2 — Hayaletten Sonraki Gece

**Konum:** I.V Sonu → II.İİ

**ÖNCE — I.V Sonu:**
Hayalet babasının nasıl öldüğünü söyledi. Hamlet intikam yemini etti. Horatio ve Marcellus'a yemin ettirdi: "Çünkü olur ya, bundan sonra, kendimi deli göstermek isteyebilirim." Şafak söküyor, surlardan iniyorlar.

**BOŞLUK:**
Şafak · ilk gün · ilk gece tek başına · yataktayken zihin · "Antic disposition" fikrinin doğuşu · Ophelia'nın odasına gelişin altyapısı (II.i Polonius bunu anlatır).

**SONRA — II.İİ Saray:**
Birkaç gün geçmiş. Polonius "delilik" gözlemini krala bildirdi. R&G çağrıldı. Oyuncular gelir. Hamlet plan kuruyor — "Fare Kapanı".
→ Timeline Sahne 4

**Sentez:** Hayaletten ayrıldıktan sonra Hamlet'in delilik maskesi takmaya, plan kurmaya başlaması arasında bir gece var en az. Belki birkaç.

**Alt-Sorular:**

1. **Surlardan İnerken**
   Surlardan inerken Horatio'ya bakışı nasıldı? Sözcük çıktı mı, sessiz miydi?

2. **O Gece Uyandığında**
   O gece uyudu mu? Uyumayı denedi mi? Uyandığında bir şey değişmiş miydi?

3. **Maske Fikrinin Doğuşu**
   "Antic disposition" fikri nereden çıktı? Bilinçli bir hesap mı, ani bir karar mı?

## Boşluk 3 — Polonius'tan Sonra

**Konum:** III.İV Sonu → IV.İİİ

**ÖNCE — III.İV Anne Odası:**
Hamlet annesiyle yüzleşti. Perdenin arkasındaki Polonius'u "Ne o? Bir fare mi?" diye öldürdü. Hayalet yine geldi. Annesinin yanından çıktı, ölüyü sürükleyerek.

**BOŞLUK:**
Ceset · gece boyunca saraya doğru · ilk öldürmenin zihinde otururuşu · pişmanlık mı, soğukluk mu, korku mu? · sabah olmadan ne yaptı? · ilk katil olarak uyku.

**SONRA — IV.İİİ Claudius önünde:**
Hamlet ironi maskesiyle Claudius'un sorularına yanıt veriyor. "Polonius nerede?" — Yemekte, ama yiyen değil yenen. Soğuk delilik, tetik içte.
→ Timeline Sahne 9

**Sentez:** Hamlet'in ilk öldürdüğü kişi. İlk kanlı an. Bu boşlukta o ilk katilin oluşumu var.

**Alt-Sorular:**

1. **Cesedi Sürüklerken**
   Cesedi sürüklerken eline kan bulaştı mı? Ne hissetti? İlk bakışta ne düşündü?

2. **Cesedi Saklarken**
   Cesedi nereye, nasıl sakladı? Bilinçli bir yer mi seçti, panik bir köşe mi?

3. **İlk Katil Olarak**
   İlk öldürmenin ardından bedeninde ne değişti? Ses tonu, bakış, yürüyüş?

## Boşluk 4 — İngiltere Yolculuğu

**Konum:** IV.İİİ → V.İ

**ÖNCE — IV.İİİ:**
Claudius onu sürgün ediyor. R&G ile gemiye binecek. Hamlet ironiyle vedalaşır: "Haydi yola, İngiltere'ye! Allaha ısmarladık, sevgili anamız." Hayatına dair kararı dış güçler vermiş gibi.

**BOŞLUK · NE BİLİYORUZ:**
Gemi denize açılır · Hamlet R&G'nin mektubunu bulur · ölüm fermanını okur · mektubu değiştirir · korsanlar saldırır · Hamlet kaçar · Danimarka'ya geri döner. Horatio'ya mektup yazar (IV.vi'da okunur).

**SONRA — V.İ Mezarlık:**
Hamlet farklıdır. "Bütün mesele hazır olmakta." Yorick'in kafatasıyla felsefe konuşur. Ophelia'nın cenazesinde patlama bile başka tonlu — ölümle daha tanıdık.
→ Timeline Sahne 12

**Sentez:** Beş boşluğun en büyüğü. Hamlet'in en büyük dönüşümü burada — sürgüne giden Hamlet ile dönen Hamlet aynı kişi değil.

**Alt-Sorular:**

1. **Mektubu Okuduğunda**
   Mektubu okuduğunda ilk hissi neydi? Şaşırma yok — sezmişti. Ama hangi sözcük durdu damağında?

2. **R&G Kararı**
   R&G'nin ölümüne karar verirken neye dayandı? Vicdan? İntikam? Yoksa oyun gereği?

3. **Geri Dönüş**
   Geri dönüş yolunda kim olarak döndüğünü ne zaman anladı? Bir an, bir kelime, bir tanıklık?

## Boşluk 5 — Düello Öncesi

**Konum:** V.İİ(A) → V.İİ(B)

**ÖNCE — V.İİ(A):**
Hamlet Horatio'ya R&G hikâyesini anlattı, düello davetini kabul etti. "Serçenin ölmesinde bile bir bildiği vardır kaderin." İçsel barış başladı. Osric çıktı, hazırlık vakti.

**BOŞLUK:**
Hazırlık · belki yalnız bir an · belki Horatio ile yol · Annesini düşünmek · Babasını · Ophelia'yı · "Bu olabilirdi yaşamım" anı · kılıcı seçme · salona girme nefesi.

**SONRA — V.İİ(B):**
Düello salonu. Tüm saray. Hamlet Laertes'le yüzleşir, özür diler. Düello başlar. "Üst tarafı… sessiz bir dünya."
→ Timeline Sahne 14

**Sentez:** Hamlet bilmiyor ki ölecek. Ama bedeni biliyor olabilir. Bu son boşluk en kısa boşluk — ama belki en yoğun.

**Alt-Sorular:**

1. **Yalnız Bir An**
   Salona girmeden önce yalnız bir an oldu mu? Pencereden mi baktı, aynaya mı?

2. **Annesini Düşündü mü**
   Annesini düşündü mü? Hangi anısı geldi — çocukluktan, son sahnelerden?

3. **Son Nefes**
   Salona girdiği son nefes — derin mi, yüzeysel mi? Kılıç ağırlığı mı tanıdık geldi, yoksa bir yabancılık mı?

## Sentez Sayfası

**Route:** `/antrenman/karakter/hamlet/senin-cerceven/sentez`

```
✓ BEŞ BOŞLUK YAZILDI

Beş boşluğu yazdın. Şimdi bunlar bir araya gelip, sahnelerin altında akan görünmez bir çizgi oluşturuyor: senin Hamlet'inin iç hayatı.

BEŞ BOŞLUK, BİR KARAKTER

1 · Wittenberg → Elsinore
   Sahne 2'nin (İlk monolog) ağırlığı buradan gelir.
   [yazdığın özet — ilk satır]
   [Tam Oku →]

2 · Hayaletten Sonraki Gece
   Sahne 4'nin (Plan + oyuncular) zemini bu.
   [Tam Oku →]

3 · Polonius'tan Sonra
   Sahne 9'daki (İngiltere'ye gönderiliş) ironi buradan beslenir.
   [Tam Oku →]

4 · İngiltere Yolculuğu
   Sahne 12-13'ün (Mezarlık + Horatio'ya kabulleniş) tonu bu boşluğun ürünü.
   [Tam Oku →]

5 · Düello Öncesi
   Sahne 14'ün (Düello) içsel zemini burada şekillenir.
   [Tam Oku →]
```

### Sahneye Taşıma Kutusu

> **Yazdıklarını sahneye taşımak**
>
> Yazdıkların kâğıt için değil, beden için. Şimdi şunu dene: yazdığın beş boşluğu okurken, gözlerini kapat ve onları kısa imgeler olarak kaydet. Bir his, bir koku, bir el hareketi, bir bakış.
>
> Sahnede bu imgeleri bilinçli olarak çağırmak gerekmez. Sadece bedeninde kayıtlı olsunlar yeterli. Sahne karakteri sürüklediğinde, onlar arka planda taşınırlar.

**Vurgu:**
> "Yazdıkların sahnenin altındaki nehirdir."

## Veri Modeli

### `bosluk_yansimalar` (mevcut tablo, schema güncellemesi)
```sql
id              uuid PRIMARY KEY
kullanici_id    uuid REFERENCES users(id)
karakter_id     text
bosluk_no       int   -- 1-5
alt_soru_no     int   -- 1-3
yansima_metni   text
acildi          boolean DEFAULT false  -- "Bu an açıldı"
guncellendi_at  timestamp DEFAULT now()
```

### `bosluk_genel_metin` (yeni, opsiyonel kullanım)
```sql
id              uuid PRIMARY KEY
kullanici_id    uuid REFERENCES users(id)
karakter_id     text
bosluk_no       int   -- 1-5
genel_metin     text
guncellendi_at  timestamp DEFAULT now()
```

## Tamamlanma Mantığı

- 5 boşluğun her birinde **en az 1 alt-soru** yazılmış olmalı
- Kısmi tamamlanma kabul edilir (ITC felsefesine uygun)
- Sentez sayfasına geçiş: 5 boşluğun her birinde en az 1 alt-soru

## Önceki Tercihlerin Hatırlatılması (Çapraz Atıf)

Yansıma alanı yazılırken, sayfanın bir köşesinde oyuncunun **Yazarın Çerçevesi seçimleri** hatırlatılır:

```
💭 SENİN HAMLET'İNDE
Hayalet: B (Toplu sezgi)
Delilik: C (İki yan birlikte)
Ophelia: A (Sahici aşk)
Erteleme: A+E (Vicdan + Bilinçaltı)
Son: B (Olgun kabulleniş)

Yazdığın boşluk bunlarla uyumlu mu?
```

## Modül II Tamamlanma Mesajı

Senin Çerçeven sentezi tamamlandığında **tüm Modül II Hamlet** tamamlanmış olur:

```
✓ MODÜL II · HAMLET TAMAMLANDI

Doğruları gördün.
Oyun öncesini tanıdın.
Timeline'ı dolaştın.
Yazarın çerçevesini sahiplendin.
Boşlukları yazdın.

Karakter koordinatları kuruldu.

Bu kısım bir kez yazılıp bitmez. Yıllarca, farklı Hamlet'lerinde geri dönüp yeniden yazabilirsin. Her yeni sahnelemede yeni boşluklar, yeni cevaplar.

HAZIR MISIN?

Modül III · Yolculuk Modu seni bekliyor. Hamlet'in tüm yaşamını bedeninle bir kez baştan sona dolaşacaksın.

[Yolculuğa Başla →]
```

---

# 6. ESKİ 9 ANTRENMAN — RETIRE PLANI

**Karar:** Mevcut 9 antrenman tamamen retire edilir. 110 dakikalık Yolculuk Modu metni Modül III pilotu olarak yeterli.

## Retire Edilecek Antrenmanlar

1. Hayalete Karşılaşmadan Önce
2. Hayaletle Görüştükten Sonra
3. "Olmak ya da Olmamak" Monoloğu
4. Fare Kapanı Planı
5. Claudius'a Dokunmamak
6. Fortinbras Haberi
7. Ophelia'nın Kaybı
8. Mezarlık Yürüyüşü
9. Düello Öncesi Hazırlık

## Retire Süreci

### Adım 1 — Soft Retire
Hamlet karakter sayfasının altındaki "Zihinsel Antrenman" bölümü kaldırılır. Yerine **Modül III · Yolculuk Modu CTA** gelir:

```
🎭 MODÜL III · YOLCULUK MODU

Modül II'yi tamamladın. Karakter koordinatları kuruldu.

Şimdi Hamlet'in tüm yaşamını bedeninle bir kez baştan sona dolaşma vakti. ~110 dakikalık AI Dış Ses rehberli yolculuk seni bekliyor.

[Yolculuğa Başla →]
```

### Adım 2 — Veri Migration
Mevcut antrenmanlara dair veriler **tamamlanan_egzersizler** ve **antrenman_yansimalar** tablolarında kalmaya devam eder. Geriye dönük uyumluluk için silinmez.

### Adım 3 — URL Yönlendirme
`/antrenman/egzersiz/[egzersiz-id]` route'larından `/yolculuk/karakter/hamlet`'e yönlendirme yapılır.

### Adım 4 — Decision Log Kaydı
```markdown
## [Tarih] — Modül II Hamlet 9 Antrenman Retire

**Tip:** Yapısal Karar (Tip 2)
**Etkilenen katmanlar:** App
**Karar:** 9 antrenman retire edildi. Modül III Yolculuk Modu pilotu yeterli içerik sağlıyor.
**Notlar:** Kullanıcı verileri korundu (geriye dönük uyumluluk).
```

---

# 7. ÇAPRAZ ATIF MATRİSİ

Modül II içindeki çapraz atıflar:

| Kaynak | Hedef | Bağlantı |
|--------|-------|----------|
| Doğrular | Tüm bölümler | Sabitler tüm yorumların temeli |
| Oyun Öncesi · Olay 7 (Ophelia) | Yazarın Çerçevesi · Tercih 3 | Aşkın geçmişi → tercih |
| Oyun Öncesi · İlişki 4 (Ophelia) | Senin Çerçeven · Boşluk 1 (Wittenberg sevgisi) | İlişki tarihi → boşluk |
| Oyun Öncesi (tüm olaylar) | Timeline · Sahne 1-2 | Sahneler bu olaylardan sonra başlar |
| Timeline · Sahne 3 | Yazarın Çerçevesi · Tercih 1 | Hayalet sahnesi → hayalet tercihi |
| Timeline · Sahne 5 | Yazarın Çerçevesi · Tercih 2, 3, 4 | Çoklu tercih bağlantısı |
| Timeline · Sahne 13-14 | Yazarın Çerçevesi · Tercih 5 | Son tercih son sahneleri belirler |
| Yazarın Çerçevesi · Tüm tercihler | Senin Çerçeven · Sayfa kenar paneli | Tercihler boşluk yazımı sırasında hatırlatılır |
| Senin Çerçeven · Boşluk 1 | Timeline · Sahne 1-2 arası | Boşluk = sahneler arası |
| Senin Çerçeven · Boşluk 5 | Timeline · Sahne 13-14 arası | Boşluk = sahneler arası |

## App'te Çapraz Atıf UI Görünümü

Her sayfada ilgili çapraz atıflar **kontekstli linkler** olarak görünür:

- "Bu boşluk Sahne 1 → Sahne 2 arası" → Timeline'a tıklanır
- "Bu tercih Sahne 5'i etkiler" → Timeline'a tıklanır
- "Bu olay Sahne 1'den önce" → Timeline'a tıklanır

---

# 8. SPRINT PLANI

Modül II Hamlet refactor için önerilen sprint planı:

## Sprint 1 (1-2 hafta) — Yapısal Hizalama

**Hedef:** Eksik bölümleri tamamla, Modül II yapısını Workbook ile birebir hizala.

**Çıktılar:**
- Oyun Öncesi Yaşam sayfası tasarlanıp implement edilir
- Timeline sayfasının yapısı dolduruluyor (14 sahne içerikleri eklenir)
- Timeline'da etkileşimli sıcaklık ayarlama özelliği

**Kabul kriteri:** Yeni Oyun Öncesi Yaşam ve Timeline sayfaları canlıda, kullanıcı 16 olay/ilişki kartını ve 14 sahneyi açabiliyor.

## Sprint 2 (1-2 hafta) — Yazarın Çerçevesi Refactor

**Hedef:** Mevcut Yazarın Çerçevesi yapısı (sahne tabanlı) tamamen değişiyor — 5 tercih yapısı.

**Çıktılar:**
- 5 tercih sayfası (her biri ayrı route)
- Tercih 4 için çoklu seçim UI
- Sentez sayfası — "Beş Cümle, Bir Hamlet"
- Tercih → Sahne yansıması (Timeline link entegrasyonu)

**Kabul kriteri:** Kullanıcı 5 tercihi sırayla tamamlayabiliyor, sentez sayfasında özet alıyor.

## Sprint 3 (1 hafta) — Senin Çerçeven Refactor

**Hedef:** Mevcut 12 alanlık yapıdan 5 boşluk + 3 alt-soru hibrit yapısına geçiş.

**Çıktılar:**
- 5 boşluk sayfası (her biri ayrı route)
- Her boşlukta 3 alt-soru + opsiyonel bütün metin alanı
- Sentez sayfası — "Beş Boşluk, Bir Karakter"
- Yan panelde Yazarın Çerçevesi seçimleri hatırlatma

**Kabul kriteri:** Kullanıcı 5 boşluğu yazabiliyor, sentez sayfasında zinciri görebiliyor.

## Sprint 4 (1 hafta) — Eski 9 Antrenman Retire + Modül III Köprüsü

**Hedef:** Modül II → Modül III geçişini sağla. Eski yapıyı temizle.

**Çıktılar:**
- 9 antrenman karakter sayfasından kaldırılır
- Modül III Yolculuk Modu CTA eklenir
- URL yönlendirmeleri kurulur
- Decision Log kaydı

**Kabul kriteri:** Eski 9 antrenman sayfadan görünmüyor, kullanıcı Modül III'e yönlendiriliyor.

## Sprint 5 (1 hafta) — Çapraz Atıflar + Test

**Hedef:** Modül II içi çapraz atıflar canlı, kapsamlı test.

**Çıktılar:**
- Tüm bölümler arası linkler çalışıyor
- Oyun Öncesi → Timeline → Yazarın Çerçevesi → Senin Çerçeven akışı sorunsuz
- Çapraz atıf matrisinde tanımlanan tüm linkler aktif
- 5+ kullanıcı ile end-to-end test

**Kabul kriteri:** Modül II'nin tamamı bir oyuncu tarafından sorunsuz tamamlanıyor.

---

# 9. KABUL KRİTERLERİ — Tamamlanmış Modül II Hamlet

## İçerik

✅ Doğrular sayfası (mevcut, korunmuş)
✅ Oyun Öncesi Yaşam sayfası (yeni, canlı)
✅ Timeline · 14 sahne (yapı dolu, etkileşimli sıcaklık)
✅ Yazarın Çerçevesi · 5 tercih (mevcut yapı tamamen değişti)
✅ Senin Çerçeven · 5 boşluk + 15 alt-soru (12 alandan dönüştü)

## UX

✅ Her bölüm Workbook s.X-Y'ye birebir uyumlu
✅ Tamamlanma sinyalleri her bölümde net
✅ Sayfalar arası geçiş "Hazır mısın?" tonu (zorla ileri itmiyor)
✅ Yazma alanları auto-save (500ms debounce)
✅ Çapraz atıflar tıklanabilir, kullanıcı kaybolmuyor

## Veri

✅ 4 yeni Supabase tablosu (oyun_oncesi_olay_yansimalar, oyun_oncesi_iliski_yansimalar, sahne_yansimalar, yazarin_cercevesi_secimler)
✅ Mevcut bosluk_yansimalar tablosu güncellendi
✅ RLS politikaları aktif
✅ Geriye dönük uyumluluk korundu

## Modül III Köprüsü

✅ Eski 9 antrenman retire edildi
✅ Modül III CTA Modül II tamamlanma sayfasında
✅ URL yönlendirmeleri çalışıyor

---

# 10. DECISION LOG TASLAKLARI

Bu refactor tamamlandığında Decision Log'a yazılacak kayıtlar:

```markdown
## [Tarih] — Modül II Hamlet Refactor

**Tip:** Yapısal Karar (Tip 2)
**Etkilenen katmanlar:** App
**Spine sürümü:** v1.1 → v1.2
**Karar veren:** Beyti + Filiz onayı
**Karar:** Modül II Hamlet, Workbook s.46-125'e birebir uyumlu hâle getirildi.
**Etkilenen sayfalar:**
- Doğrular: Korundu
- Oyun Öncesi Yaşam: YENİ eklendi
- Timeline: Yapı dolduruldu, etkileşimli sıcaklık eklendi
- Yazarın Çerçevesi: Sahne tabanlı yapı → 5 tercih yapısına dönüştü
- Senin Çerçeven: 12 alan → 5 boşluk + 15 alt-soru hibrit yapı
**9 antrenman:** Retire edildi (Modül III Yolculuk Modu yeterli)
**Yeni tablolar:** oyun_oncesi_olay_yansimalar, oyun_oncesi_iliski_yansimalar, sahne_yansimalar, yazarin_cercevesi_secimler, bosluk_genel_metin
**Notlar:** Eski kullanıcı verileri korundu. URL yönlendirmeleri kuruldu.
```

```markdown
## [Tarih] — Spine v1.1 → v1.2 Güncellemesi

**Tip:** Kanon Güncellemesi (Tip 1)
**Etkilenen katmanlar:** Spine + üç proje (Method Book, Workbook, App)
**Karar:** Spine §2 App durumu güncellendi. §4.3 Workbook ↔ App köprüleri detaylandırıldı.
**Notlar:** Modül II refactor'unun yansıması. Yeni atıflar Workbook s.50-125 ↔ App Modül II sayfaları arasında kurulmuş.
```

---

# 11. SONRAKİ ADIMLAR

Bu doküman elinde olduğunda yapılacaklar:

1. **Sprint 1'e başla** — Oyun Öncesi Yaşam sayfasını implement et
2. **Decision Log'a kayıt** — Refactor başlangıcı için
3. **Spine güncellemesi** — v1.1 → v1.2 (Modül II refactor başlangıcı)
4. **Filiz onayı** — Refactor planını Filiz'e gönder, onay al
5. **Test stratejisi** — Sprint 5'te 5+ kullanıcı testi nasıl organize edilecek?

---

**Doküman sonu.**

**Versiyon:** v1.0
**Tarih:** Mayıs 2026
**Önerilen revizyon:** Sprint 5 sonunda gözden geçir, Modül II tamamlanma raporu ekle.

---

*"Boşluklar tesadüf değil — oyuncuya bırakılmış mekânlar."*
*— ITC İlkesi, Senin Çerçeven*
