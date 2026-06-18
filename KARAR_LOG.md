# Karar Günlüğü

ITC Actor's Gym ekosistemi (App + Workbook + Method Book) genelinde alınan
yapısal, içerik ve mimari kararların kaydı. En yeni karar üstte.

**Karar tipleri:**
- **Tip 1 — Mimari:** Teknik yapı, veri modeli, framework
- **Tip 2 — Yapısal:** Modül/sayfa/akış değişiklikleri
- **Tip 3 — İçerik:** Terminoloji, dil, pedagojik metin
- **Tip 4 — Görsel:** Tasarım dili, palet, tipografi

---

## 2026-06-04 — Boşluk kavramı sahne-arası + sahne-öncesi katmanları kapsar (Oyun Öncesi = sahne-öncesi boşluk)

**Tip:** İçerik + Yapısal (Tip 3/2)
**Etkilenen katmanlar:** App (tüm karakter viewer'ları + data), Method Book, Workbook — kanon yedirme `itc-canon` Karar 50'ye yedirildi
**Karar veren:** Beyti (onayladı)
**Karar:** ITC'nin çekirdek **"Boşluk"** kavramı tek bir katmanla (sahne-arası) sınırlı değildir;
**iki katmanı** kapsayan bir üst-kavramdır:
- **Sahne-arası boşluk:** Metnin iki sahnesi arasında, yazarın atladığı, oyuncunun kurduğu an
  (`boslukSet` — örn. Willy b4/b8/b11, Nina b1/b2/b3).
- **Sahne-öncesi boşluk (= Oyun Öncesi):** Oyun başlamadan önceki, metnin yalnızca ima ettiği,
  oyuncunun zihinsel olarak inşa ettiği yaşam katmanı (`oyunOncesi.olaylar` — örn. Willy'nin
  babasının terki / Boston, Nina'nın annesinin ölümü).

İkisi de **aynı ITC ilkesine** dayanır: *metnin yazmadığı, oyuncunun kuracağı an; soru sorulur,
tarif edilmez.* Bu yüzden Oyun Öncesi, dramaturjik bir dipnot değil, **timeline'ın eşit ve
kronolojik bir parçasıdır** — sahnelerle ve sahne-arası boşluklarla tek akışta dizilir.
**Görünür dil:** Timeline'da "Oyun Öncesi" fazının altyazısı boşluk-diliyle hizalanır
("Metnin yazmadığı, senin kuracağın yaşam" / Nina: "boşluk-öncesi katman", "görünmeyen
boşluklar"). "Oyun Başlangıcı" ayracı, yazarın metninin başladığı yeri işaretler.
**Gerekçe:** Oyun öncesi, dördüncü-perde / final karakterini anlamlı kılan görünmeyen zemindir
(Nina'nın iki yıllık boşluğu, Willy'nin baba boşluğu). Onu ayrı bir katlanır künyeye veya
dramaturjik detaya hapsetmek, en az timeline kadar değerli olan bu katmana yazık eder. Boşluğu
tek üst-kavram altında birleştirmek, yöntemin "metnin sustuğu her yeri oyuncu kurar" iddiasını
kavramsal olarak bütünler.
**Mekanik:** Willy viewer `akis` kurgusuna `tip:'ayrac'` düğümleri eklendi; `AyracWilly`
(Nina `FazAyrac` kalıbı) "Oyun Öncesi" (olaylardan önce) ve "Oyun Başlangıcı" (ilk sahneden
önce) fazlarını çizer. Oyun öncesi olaylar tek-panel sistemine bağlı, scroll/id mobil-uyumlu.
i18n 3 dil.
**Sıradaki:** Macbeth/Biff göçünde aynı iki-katmanlı boşluk kurgusu standart alınır.

---

## 2026-06-04 — Willy = vitrin karakteri; tüm kararları dramaturjik onaylı (Filiz-onayı genel kuralı korunur)

**Tip:** Yapısal + İçerik (Tip 2/3)
**Etkilenen katmanlar:** App (Willy karakteri) — kanon yedirme `itc-canon` Karar 49'a yedirildi
**Karar veren:** Beyti (dramaturg yetkisiyle)
**Karar:** Willy Loman **vitrin karakteri** ilan edildi. Bu karaktere ait **tüm kararlar** —
çatal yorumları, an türleri (Hatıra/İz/Sessiz Bilgi), `tercihler` A/B/C, ve **normalde Filiz'in
(FKA) klinik görüşüne giden travma-tonu / travma-seviyesi kararları dahil** — Beyti tarafından
**dramaturjik olarak onaylandı.** Willy, işleyen tam yapısıyla (4 yürüyüş sahnesi: s2/s3/s9/s11
+ tüm an türleri + travma katmanı) vitrine çıkar; bunun için ayrı bir Filiz onayı beklemez.
**Kapsam (KRİTİK — A, B değil):** Bu karar **yalnızca Willy'ye özgü, tek seferlik bir vitrin
kararıdır.** Travma-tonu/seviyesi kararlarının Filiz'in klinik görüşüne gitmesine dair **genel
kural diğer tüm karakterler için (Hamlet, Macbeth, Biff, Nina, sonraki göçler) geçerliliğini
korur.** Filiz'in metottaki klinik otoritesi (travma seviyesi designation + klinik perspektif)
değişmemiştir; yalnızca bu tek karakter, vitrin amacıyla, Beyti'nin dramaturjik sorumluluğu
altında serbest bırakılmıştır.
**Gerekçe:** Willy'nin işleyen tam yapısı (an türleri + yürüyüş + travma-bölgesi tonlaması)
yöntemin "tanımlanabilir, tekrar-üretilebilir sistem" iddiasını en net gösteren örnektir; vitrine
eksiksiz çıkması, harici onay turunu beklemekten daha değerlidir.

---

## 2026-06-04 — Yürüyüş = dramaturjik kurma (trans DEĞİL); sesli imgeleme Modül III'e ait

**Tip:** Mimari + İçerik (Tip 1/3)
**Etkilenen katmanlar:** App (Workbook viewer + karakter data) — kanon yedirme `itc-canon` Karar 54'e yedirildi
**Karar veren:** Beyti (onayladı)
**Karar:** "Yürüyüş" (`sahneTipi: 'yuruyus'`, `yuruyus: { esik, istasyonlar[], cikisRitueli }`)
oyuncunun sahneyi **açık gözle, adım adım kurduğu dramaturjik egzersizdir** — rehberli
imgeleme/trans DEĞİL. Gerekçe: mecra (ekran/okuma/tıklama) gözü kapalı tutmaya izin
vermez; "gözünü kapat, rengi bedenine yay" demek oyuncuya yapamadığı bir şeyi yaptırıyormuş
gibi varsayar (sahte/komik düşme riski) ve Modül III'ün asıl değerini (AI sesli dış ses,
gerçekten gözler kapalı, tıklamasız) önceden harcar.
**Kurallar:**
- Eşik = dramaturjik giriş ("bu bir yürüyüş, sahneyi adım adım kuracaksın, acele yok").
  "gözünü kapat / renk yay" YOK.
- Beden = **dikkat sorusu** olarak kalır ("Willy o an bedeninin neresinde — fark et, sonra ilerle"),
  **rituel** olarak gitmez ("gözünü kapat, renk yay").
- Çıkış = dramaturjik kapanış ("sahneden çık, ne taşıyorsun"). Renk geri çekme YOK.
- Gerçek "gözler kapalı, sesli, tıklamasız" canlandırma = Modül III. Bu yürüyüş onun masabaşı öncülü.
**Mekanik:** Paylaşımlı `components/BoslukYuruyusu.js` motoru viewer'a bağlandı
(onYuruyus prop zinciri + tam-ekran overlay + "Bu sahneyi adım adım kur" butonu, i18n 3 dil).
İlk pilot: Willy sahne 2 (Parlak günler / çocukluk belleği), 4 istasyon. anlar[] geri-uyum için korundu.
**Sıradaki:** Canlı doğrulama sonrası diğer yürüyüş adaylarına yay (sahne 11/son, belki 3).

## 2026-06-04 — İz + Sessiz Bilgi an türleri (travma bölgesi); replikIzi → "Miller karşılığı"

**Tip:** İçerik + Yapısal (Tip 3/2)
**Etkilenen katmanlar:** App (Workbook karakterleri) — kanon yedirme `itc-canon` Karar 52'ye yedirildi
**Karar veren:** Beyti (dramaturg onayı). Travma-bölgesi tonlama Filiz klinik görüşü AÇIK.
**Karar:** Travma/yara bölgesinde Hatıra (olayı hayal et) yerine iki yeni tip — ChatGPT pilot denetimi
"aynı mekanikle yazılırsa terapi çağrışımı üretir; karakter oyuncunun yarasından değil karakterin
verisinden beslenir" ilkesini korumak için:
- **`tip: 'iz'` ("İz"):** olayı yeniden yaşatma — bedende kalan kalıntıyı yokla, adını koyma,
  fark et ve bırak. Willy o6/o7 (Boston otel + kapı), `travmaDuyarli: true`.
- **`tip: 'sessizbilgi'` ("Sessiz Bilgi"):** ne hatıra (olay) ne iz (beden) — bilişsel/ahlaki
  yerleşme. Miller'ın suçluluk değil **sorumluluk** teması. Willy Charley ofis sahnesi (s8-a3,
  Bernard'la yıllar sonra karşılaşma).
**İki "iz" çakışması çözüldü:** `replikIzi` etiketi "İz" → **"Miller karşılığı"** (Miller's line/
Miller-Entsprechung) oldu = *dinlenen* katman. Yeni `iz` tipi = *üretilen* katman. Üç-ses ayrımı korunur.
**Mekanik:** i18n 3 dil (anIzUretimEtiket, anSessizBilgiEtiket, izYonerge, sessizBilgiYonerge),
viewer AnKart dispatcher iz + sessizbilgi tanır (eyebrow + AnYazma üretim + yönerge).

## 2026-06-04 — Hatıra an türü (yeni ITC an tipi)

**Tip:** İçerik + Yapısal (Tip 3/2)
**Etkilenen katmanlar:** App (Workbook karakterleri) — kanon yedirme `itc-canon` Karar 51'e yedirildi
**Karar veren:** Beyti (dramaturg onayı). Pedagojik-kanon yedirme + Filiz klinik görüşü (travma-bölgesi tonlama) AÇIK.
**Karar:** `tip: 'hatira'` — üçüncü an türü. Saf duyusal/zihinsel canlandırma; Modül III DNA'sı.
Beş kriter: metinde cevabı yok · doğru cevap yok · karakter adına hayal · duyusal çapa ·
dramaturjik icat değil. Dil çağrı (soru değil). Willy o3/o4/o5'e 3 prototip eklendi (travma-dışı).
ChatGPT 5-kriter denetiminden geçti; o3/o4 "ve bırak" kapanışıyla rafine edildi.
**Mekanik:** viewer hatıra-duyarlı (Hatıra eyebrow + AnYazma üretim), i18n 3 dil
(Hatıra/Memory/Erinnerung + hatiraYonerge). Mekanik sınırsız hatıra destekler; darboğaz metin onayı.
**Sıradaki:** Batch 1 (oyunOncesi o1/o2 + travma-bölgesi o6/o7/o8 güvenli tonla) ·
Batch 2 (sahne-içi prototip) · Nina'ya hatıra. Hepsi Beyti dramaturg onayı bekler.

## 2026-06-04 — Üç ses bilişsel ayrımı (İz/Yazar/Senin Çerçeven)

**Tip:** Yapısal + Görsel (Tip 2/4)
**Etkilenen katmanlar:** App (Willy + Nina viewer + willy-i18n) — kanon yedirme `itc-canon` Karar 53'e yedirildi
**Karar veren:** Beyti (ChatGPT pilot değerlendirmesi pusulasıyla)
**Karar:** Oyuncu üç kaynağı üç farklı eylem olarak hissetmeli — tipografi değil biliş.
İz=dinlenir (tırnaklı ses kartı) · Yazar alanları=incelenir (düz) · Senin Çerçeven=üretilir.
"soru/yorum" dili → tip-duyarlı eyebrow (catal="Karar", yazma="Boşluk", hatira="Hatıra").
Mühürleme sessiz kalır (buton yok, blur otomatik) ama dil "✓ mühürlendi". Engagement/gamification REDDEDİLDİ.
**Reddedilen (kanona aykırı):** travma zirvelerini görsel öne çıkarma (oyuncuyu hazırlıksız itme); mühürle butonu (sürtünme).

## 2026-06-04 — EN replikIzi telif disiplini (Yol A)

**Tip:** İçerik (Tip 3)
**Etkilenen katmanlar:** App (willy-i18n EN) — kanon yedirme `itc-canon` Karar 55'e yedirildi
**Karar veren:** Beyti
**Karar:** EN replikIzi'leri Miller orijinaliyle web-doğrulandı; tam-cümle yerine
çekirdek imge + sahne künyesi (telif-güvenli). Uydurma/geri-çeviri alıntılar düzeltildi
("twenty-one years old then"→seventeen/twenty-one; "I know you're a fake"→"You fake! You phony little fake!").
Doğrulanmış ikonik ibareler kısa tırnakla kalır. TR replikIzi (Tekindor) tam-cümle KALIR
(Beyti kararı — tanıdıklık önceliği, telif sorumluluğu bilinçli). İki dil bilinçli asimetrik.

---

## 2026-05-07 — Sahne Timeline → Zaman Çizgisi terim kararı

**Tip:** İçerik Güncellemesi (Tip 3)
**Etkilenen katmanlar:** App
**Karar veren:** Beyti
**Karar:** "Sahne Timeline" terimi tüm App genelinde "Zaman Çizgisi" oldu.
**Önceki tartışma:** Pedagojik sprint planında "Bedensel Zincir" önerilmişti,
ancak uygulamada "Zaman Çizgisi" seçildi — daha sade, daha Türkçe, daha geniş
anlamlı.
**Notlar:** Workbook'ta sayfa başlığı hâlâ "Sahne Timeline · Bedensel Zincir"
(Workbook 2. baskı revizyonunda terminoloji uyumlanmalı).
