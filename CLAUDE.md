# ITC Actor's Gym — Proje Hafızası

Bu dosya Claude Code için referans niteliğindedir. Projenin felsefesini, mimarisini, kod stilini ve yapılacaklar listesini tek yerde toplar.

> **Not — Repo konumu:** Bu repo artık `itc-canon` üst-reposunun altında **submodule** olarak yaşıyor (`itc-canon/app/`). Canon kaynakları (Spine, Decision Log, Method Book, Workbook, Workshop) bir üst dizindedir. Kanonu etkileyen yapısal değişiklikler için `itc-canon` tarafında **karar yedirme** akışı işletilir (Decision Log + Spine + ilgili dokümanlar senkron). Sadece app-içi (kanon dışı) değişiklikler bu repoda kalır.

---

## 🎭 Proje Özü

**ITC Actor's Gym** — Beyti Engin tarafından 2005'ten beri geliştirilen ITC (Inside The Character) oyunculuk metodolojisinin dijital pedagojik karşılığı. Akademik temelli, klasik karakterleri içeriden inşa etmeye odaklı, oyuncunun psikolojik sağlığını gözeten bir uygulama.

**Vizyon:** HMDK Stuttgart, festivaller, tiyatro okulları gibi kurumsal mecralarda akademik bir araç olarak kullanılabilir bir ürün. Tüketici uygulaması değil — pedagojik araç.

**Yapılan kullanıcı sayısı tahmini (uzun vade):** Yüzlerce profesyonel oyuncu, oyunculuk öğrencisi, yönetmen.

---

## 🛠 Teknik Stack

| Katman | Teknoloji |
|--------|-----------|
| Framework | Next.js 14+ (App Router) |
| Stil | Inline styles (Tailwind dahil ama az kullanılıyor) |
| Veritabanı | Supabase (PostgreSQL + RLS) |
| Auth | Supabase Auth (email + Google OAuth) |
| Hosting | Vercel |
| Dil | JavaScript (TypeScript yok, sadece middleware.ts) |

**URL:** https://itc-app-six.vercel.app
**Repo:** github.com/beytiengin/itc-app

---

## 🏛️ Mimari — Üç Modül

ITC kitabıyla **birebir tutarlı** yapı:

```
MODÜL I — Kendini Tanı
   = /kalibrasyon
   ├─ Öğrenme Stili Analizi (eski adı: VAK)         → /kalibrasyon/vak
   ├─ Yıldız Oyuncu Analizi (eski adı: Star Actor)  → /kalibrasyon/yildiz
   └─ Kişilik Tipi Analizi (eski adı: Arketip)      → /kalibrasyon/arketip

MODÜL II — Karakterini İnşa Et
   = /antrenman/karakter
   ├─ Hamlet
   ├─ Macbeth
   ├─ Willy Loman
   └─ Biff Loman

MODÜL III — Sahnele (gelecekte)
   = AI Dış Ses + Journey Modu
   └─ "Yakında" durumunda ana ekranda
```

**Önemli:** Modül adları kullanıcıya görünür, eski test isimleri (VAK, Star Actor) sadece kod içinde kalsın. Görünür dilde yeni adlar.

---

## 📁 Dosya Yapısı

```
itc-app/
├── app/
│   ├── page.js                          # Ana ekran (3 modül)
│   ├── layout.js
│   ├── giris/page.js                    # Login + register + Google
│   ├── profil/page.js                   # Kullanıcı profili
│   ├── kalibrasyon/
│   │   ├── page.js                      # Modül I menü
│   │   ├── vak/page.js                  # Öğrenme Stili (27 soru)
│   │   ├── yildiz/page.js               # Yıldız Oyuncu (37 kriter)
│   │   └── arketip/page.js              # Kişilik Tipi (12 senaryo, MBTI)
│   ├── antrenman/
│   │   ├── page.js                      # → /antrenman/karakter (redirect)
│   │   └── karakter/
│   │       ├── page.js                  # Karakter listesi
│   │       ├── macbeth/page.js
│   │       ├── hamlet/                  # Hamlet — Workbook refactor (Sprint 1-5)
│   │       │   ├── page.js              # Ana: Doğrular + 4 alt-bölüm kartı + Modül III CTA
│   │       │   ├── oyun-oncesi-yasam/page.js
│   │       │   ├── timeline/page.js
│   │       │   ├── yazarin-cercevesi/
│   │       │   │   ├── page.js          # 5 tercih listesi
│   │       │   │   ├── [no]/page.js     # Dinamik tercih detayı
│   │       │   │   └── sentez/page.js
│   │       │   └── senin-cerceven/
│   │       │       ├── page.js          # 5 boşluk listesi
│   │       │       ├── [no]/page.js     # Dinamik boşluk detayı
│   │       │       └── sentez/page.js
│   │       ├── willy/page.js
│   │       └── biff/page.js
│   └── lib/
│       ├── supabase.js                  # Cookie tabanlı browser client
│       ├── kalibrasyon.js               # Profil okuma + akıllı giriş mesajı
│       ├── travma.js                    # Etik koruma mantığı
│       ├── kulis.js                     # Egzersiz/boşluk kayıt fonksiyonları
│       └── hamlet-veri.js               # Hamlet refactor için yeni tabloların CRUD'u
├── components/
│   ├── TimelineGorumu.js                # Sahne timeline'ı (Macbeth/Willy/Biff)
│   ├── KararlarOdasi.js                 # Kararlar Odası egzersizi
│   ├── EgzersizListesi.js               # Egzersiz akışı + topraklanma
│   ├── BosluklarGorumu.js               # Boşluklar + yazma alanı (eski)
│   └── Hamlet*                          # Hamlet refactor bileşenleri (Sprint 1-5)
│       ├── HamletAltSayfaHeader.js      # Ortak header (4 alt sayfa kullanıyor)
│       ├── HamletSahneKuresi.js         # Timeline sahne küresi (sıcaklık renkli)
│       ├── HamletSicaklikSecici.js      # Timeline sıcaklık slider
│       ├── HamletPerdeBandi.js          # Timeline 5 perde tema bandı
│       ├── HamletSahneDetay.js          # Timeline sahne detay paneli
│       ├── OyunOncesiOlayKart.js        # Oyun Öncesi olay kartı
│       ├── OyunOncesiIliskiKart.js      # Oyun Öncesi ilişki kartı
│       ├── HamletTercihKart.js          # Yazarın Çerçevesi tercih kartı
│       ├── HamletTercihSecim.js         # Yazarın Çerçevesi tercih detay seçim
│       ├── HamletBoslukKart.js          # Senin Çerçeven boşluk kartı
│       └── HamletAltSoruYazma.js        # Senin Çerçeven alt-soru yazma alanı
├── data/karakterler/
│   ├── macbeth.js
│   ├── hamlet.js                        # Workbook genişletilmiş (oyunOncesi, tercihler, boslukSet, sahnelerWorkbook, perdeTemalari)
│   ├── willy.js
│   └── biff.js
├── supabase-migrations/                 # SQL migration dosyaları (elle uygulanan)
│   ├── sprint1-hamlet-refactor.sql
│   ├── sprint2-yazarin-cercevesi.sql
│   └── sprint3-senin-cerceven.sql
├── middleware.ts                        # Auth gating
├── CLAUDE.md                            # Bu dosya
└── package.json
```

---

## 🗄️ Supabase Tabloları

```sql
-- Kalibrasyon sonuçları (Modül I)
vak_sonuclari       (kullanici_id, gorsel, isitsel, kinestetik, baskin, created_at)
yildiz_sonuclari    (kullanici_id, teknik, psikolojik, mesleki, yaratici,
                     entelektuel, iliski, genel_yuzde, created_at)
arketip_sonuclari   (kullanici_id, tip, ad, created_at)

-- Kulis verisi (Modül II - klasik 4 karakter)
tamamlanan_egzersizler   (id, kullanici_id, karakter_id, egzersiz_id, tarih)
                         UNIQUE(kullanici_id, karakter_id, egzersiz_id) — UPSERT
bosluk_yansimalari       (id, kullanici_id, karakter_id, bosluk_id, metin, ...)
                         UNIQUE(kullanici_id, karakter_id, bosluk_id) — UPSERT
                         Macbeth/Willy/Biff için aktif. Hamlet'te eski 12 alanlı yapı
                         retire edildi (veri korunuyor).
antrenman_yansimalari    (id, kullanici_id, karakter_id, antrenman_id, adim_no, metin, ...)

-- Hamlet refactor tabloları (Sprint 1-3, Modül II Hamlet Workbook)
oyun_oncesi_olay_yansimalari   (id, kullanici_id, karakter_id, olay_no,
                                yansima_metni, icsel_kabul, son_guncelleme)
                                UNIQUE(kullanici_id, karakter_id, olay_no)
oyun_oncesi_iliski_yansimalari (id, kullanici_id, karakter_id, iliski_no,
                                yansima_metni, tanidi, son_guncelleme)
                                UNIQUE(kullanici_id, karakter_id, iliski_no)
sahne_yansimalari              (id, kullanici_id, karakter_id, sahne_no,
                                oyuncu_sicaklik, yansima_metni, anladi, son_guncelleme)
                                UNIQUE(kullanici_id, karakter_id, sahne_no)
yazarin_cercevesi_secimler     (id, kullanici_id, karakter_id, tercih_no,
                                secimler text[], ozel_yorum, sentez_cumle, ...)
                                UNIQUE(kullanici_id, karakter_id, tercih_no)
bosluk_alt_soru_yansimalari    (id, kullanici_id, karakter_id, bosluk_no, alt_soru_no,
                                yansima_metni, acildi, son_guncelleme)
                                UNIQUE(kullanici_id, karakter_id, bosluk_no, alt_soru_no)
bosluk_genel_metin             (id, kullanici_id, karakter_id, bosluk_no,
                                genel_metin, son_guncelleme)
                                UNIQUE(kullanici_id, karakter_id, bosluk_no)
```

**Tüm tablolarda RLS açık.** Kullanıcı sadece kendi verisini görür/yazar.

**Migration:** Yeni tablolar `supabase-migrations/sprint*.sql` dosyalarında. Manuel olarak Supabase Dashboard SQL Editor'da uygulanır (idempotent — yeniden çalıştırmak güvenli).

---

## 🎨 Stil Rehberi (KESİNLİKLE Uy)

### Tema sistemi (Tasarım Migrasyonu Sprint, 2026-05-07)

**Dual mode:** dark (default, mevcut kimlik) + krem (Workbook ruhu).
Kullanıcı `prefers-color-scheme`'a göre default alır, profilden ya da
sağ-alt floating toggle'dan değiştirebilir. localStorage'da persist.

**KESINLIKLE inline hex kullanma.** Tüm renkler `var(--*)` üzerinden:

```css
/* Yapı (mod-spesifik) */
--bg-base, --bg-elevated, --bg-deep
--ink, --ink-soft, --ink-muted
--accent (dark: altın #c9a96e / krem: bordo #5C1A2C)
--accent-hover, --accent-soft
--rule, --rule-soft, --highlight

/* Semantik (mod-aware) */
--onay, --onay-soft, --onay-bg, --onay-rule
--uyari, --uyari-bg

/* Sıcak zemin (Hamlet, ITC ilke kutusu) */
--accent-bg, --accent-bg-deep, --accent-rule

/* Kategori paleti (VAK/Yıldız/Arketip çubukları) */
--kanal-1..5, --kanal-kahve

/* Sıcaklık gradyanı (Hamlet zaman çizgisi) */
--sicak-soguk, --sicak-sicak
```

**Alpha overlay'leri:** `${TON}33` gibi alpha-suffix YASAK — CSS'te
geçersiz. Yerine: `color-mix(in srgb, ${TON} 20%, transparent)`.

### Tipografi
- **Self-hosted** via `next/font/google` (build time):
  Cormorant Garamond + Jost.
- **Başlıklar:** `Cormorant Garamond, serif` — `fontWeight: 300`, çoğu italic
- **Gövde + UI:** `Jost, sans-serif` — `fontWeight: 200` veya `300`
- **Krem mode override:** weight 200→400, 300→500 (CSS attribute selector)
- **Alt başlıklar/etiketler:** Jost, küçük (0.6rem), büyük harf, `letterSpacing: 0.3em`

### Tasarım Prensipleri
- **MİNİMAL** — boşluk önemli, ferah olsun
- Kart kenarlıkları ince (`1px solid var(--rule)`)
- Hover'da kenar **var(--accent)** rengine dönsün
- Geçişler yumuşak (`transition: all 0.3s ease`)
- **Emoji KULLANMA** — kullanıcı talebi (yerine anlamlı etiketler: "Çıkış · Topraklanma" gibi)
- **🔒 kilit ikonu yok** — yumuşak dil kullan ("hazır değil", "henüz açık değil")
- **WCAG AA garantili** — krem mode tüm metin çiftleri AA, çoğu AAA

### Dil
- **TÜRKÇE.** Kullanıcı arayüzü, hata mesajları, yorum satırları — hepsi Türkçe.
- UTF-8 önemli (ı, İ, ş, ş, ğ, ü, ö, ç).
- Karakter veri dosyalarında **bazı tırnak içi metinler** İngilizce/orijinal dilde olabilir (örn. Hamlet'in "to be or not to be"). Onlara dokunma.

---

## 🧩 Karakter Veri Formatı

Her karakter `data/karakterler/<id>.js` dosyasında, **DEFAULT EXPORT**'la dışa aktarılıyor:

```javascript
const macbeth = {
  // Kimlik
  id: 'macbeth',
  ad: 'Macbeth',
  oyun: 'Macbeth',
  yazar: 'William Shakespeare',
  donem: "1600'ler",
  tur: 'Trajedi',
  tip: 'ENTJ',                  // MBTI 4 harf
  ozet: '...',
  etiketler: [...],

  // Baseline (kalibrasyon noktası)
  baseline: { ad: '...', aciklama: '...' },

  // İlişkiler (basit liste)
  iliskiler: ['Lady Macbeth', 'Banquo', ...],

  // Değiştirilemez Doğrular (kategorize)
  dogrular: [
    { kategori: 'Kimlik', madde: '...' },
    { kategori: 'Bilgi', madde: '...' },
    { kategori: 'Eylem', madde: '...' },
    { kategori: 'İlişki', madde: '...' },
    { kategori: 'Son', madde: '...' },
  ],

  // Sahneler — 14 tane standart
  sahneler: [
    {
      id: '1.3', perde: 1,
      label: '...',                       // Kısa başlık
      desc: '...',                        // Sahnede ne oldu
      icDurum: '...',                     // Karakterin iç durumu
      bosluk: '...',                      // Sahne içi boşluk sorusu (opsiyonel)
      travmaKategorileri: ['...', '...'], // 8 kategoriden seçim
      travmaSeviyesi: 0|1|2|3,            // Yoğunluk
    },
  ],

  // Boşluklar — yazarın sustuğu yerler, 12 tane standart
  bosluklar: [
    {
      id: 'b-pre',
      tip: 'pre'|'ara'|'ic'|'post',
      konum: 'Pre-senaryo',
      baslik: '...',
      kisaAciklama: '...',
      uzunAciklama: '...',
      sorular: ['...', '...', ...],       // 4-6 soru
      sure: '15 dk',
      travmaSeviyesi: 0|1|2|3,            // Opsiyonel
      tipDeroling: true,                  // Sadece post için
    },
  ],

  // Egzersizler — 7 tane standart
  egzersizler: [
    {
      id: 'baseline',
      baslik: '...',
      sure: '10 dk',
      seviye: 'Giris'|'Temel'|'Orta'|'Ileri',
      ikon: '🌿',                         // ŞU AN GÖRÜNTÜLENMİYOR (B2 kararı), veride kalsın
      aciklama: '...',
      adimlar: ['...', '...'],            // VEYA kararlar (Kararlar Odası ise)
      kararlar: [...],
      travmaSeviyesi: 0|1|2|3,
      bagliSahne: '...',                  // Opsiyonel
      tipDeroling: true,                  // Sadece çıkış egzersizi
    },
  ],
};

export default macbeth;
```

**Standart ölçü:** Her karakter **14 sahne + 12 boşluk + 7 egzersiz** (4 karakter zaten bu yapıda).

---

## 🧠 Kişiselleştirme Mantığı

Üç katmanlı:

```
1. VAK.baskin (V/A/K) → Egzersiz dili
   {duyu} → "görüyorsun"|"duyuyorsun"|"hissediyorsun"
   {ipucu} → kanal-spesifik ipucu
   {yansimaSorusu} → kanal-spesifik soru
   
   `app/lib/kalibrasyon.js` içindeki `vakDili()` fonksiyonu

2. Yildiz.psikolojik (1-7) → Etik koruma
   ≥5: tüm seviyeler açık
   3-5: Seviye 3 uyarılı
   <3: Seviye 2-3 kilitli
   
   `app/lib/travma.js` içindeki `sahneErisimi()` fonksiyonu

3. Arketip.tip (MBTI) → Gap analizi (gelecekte Blueprint'te)
   Karakter MBTI ile karşılaştırılır
```

**Önemli ilke:** Kişiselleştirme **SESSİZ** olmalı. Meta-açıklama yapma. ITC ilkesi: "metot görünmez, oyuncu görünür."

---

## 🚧 Travma Sistemi

8 kategori + 3 yoğunluk:

**Kategoriler:** `siddet`, `kayip`, `ihanet`, `cinsel`, `zihinsel_kirilma`, `cocukluk`, `ahlaki_yara`, `varolussal`

**Yoğunluk seviyeleri:**
- 0: Travmatik içerik yok
- 1: **Atıf** — karakter olaya değiniyor
- 2: **Tanıklık** — karakter olaya tanık oluyor
- 3: **İcra** — karakter olayı doğrudan yaşıyor

**Erişim kuralları** (`travma.js`'de) — yumuşak dilde, "kilitli" yerine "hazır değil":
- Travma 2-3 olan içerik için Yıldız Matrisi puanı kontrol edilir
- Düşük puan → erişim engellenir, yumuşak mesaj gösterilir

**Topraklanma protokolü:** Travma 2-3 egzersizi tamamladıktan sonra otomatik açılan 6 adımlı çıkış (deroling).

---

## 🔐 Auth Gating

`middleware.ts` üç rotayı korur:
- `/kalibrasyon` ve alt yolları
- `/antrenman` ve alt yolları
- `/profil`

**Anonim kullanıcı:** Sadece `/` (ana ekran), `/giris`, `/api/*` görür.

**Üye:** Tüm sayfalar açık. Kalibrasyon eksikse içeride yumuşak uyarı gösterilir (kilitleme yok).

**Note:** Next.js 15 ile birlikte `middleware.ts` deprecated oldu, yerine `proxy.ts` öneriliyor. Şu an çalışıyor ama gelecekte taşınacak.

---

## 🎬 ITC Pedagojik İlkeler (Bu Proje İçin Kritik)

Bu ilkeler kod kararlarını etkiler. **Mutlaka oku:**

1. **"Karakter senin kişisel travmalarınla inşa edilmez."**
   ITC, Method Acting'in tersidir. Oyuncuyu psikolojik olarak risk altına atmamak ana ilke. Bu yüzden travma sistemi var, topraklanma var, etik koruma var.

2. **"Oyuncu eş-yazardır."**
   Boşluklar bu ilkenin somut karşılığı. Yazarın yazmadığı yerleri oyuncu yazar. Bu yüzden Boşluklar yazma alanlı, Supabase'e kaydeden bir özellik — sadece okuma değil.

3. **"Metot görünmez, oyuncu görünür."**
   Sistemin oyuncuya "şu yüzden bu kişiselleştirme yapıldı" demesi yanlış. Sessizce uyarla, açıklama yapma.

4. **"Hız ile derinlik sacayağı."**
   Türkiye'deki oyuncu bazen bir gecede karakter çalışmak zorunda. Sistem hem hızlı giriş kapıları sunmalı hem derin çalışma imkanı vermeli. Egzersizler kısa süreli (10-30 dk) ve adımlı.

5. **"Çıkış da bir performans."**
   Deroling/topraklanma sıradan bir UI değil — pedagojik olarak kritik. Travmalı egzersiz sonrası karakteri taşıyarak günlük hayata dönmek tehlikelidir.

---

## ✅ Tamamlanan İşler

- ✅ Modül I tamamen çalışır (3 test, Supabase kayıt)
- ✅ Modül II tamamen çalışır (4 karakter, her biri tam yapıda)
- ✅ Auth gating (middleware + Google OAuth)
- ✅ Kulis veri katmanı (`tamamlanan_egzersizler`, `bosluk_yansimalari` tabloları + kayıt mantığı)
- ✅ Egzersiz tamamlama izleri Supabase'e gidiyor, "✓ Tamamlandı" rozeti çalışıyor
- ✅ Boşluklara yazma alanı + otomatik kayıt + "✓ Yazıldı" rozeti
- ✅ Topraklanma protokolü (travma 2-3 sonrası otomatik)
- ✅ "Hazır değil" yumuşak dili
- ✅ Emojisiz arayüz
- ✅ **Modül II · Hamlet Workbook Refactor** (Sprint 1-5, 2026-05)
  - 5 alt-bölüm yapısı: Doğrular · Oyun Öncesi Yaşam · Timeline · Yazarın Çerçevesi · Senin Çerçeven
  - Eski 9 antrenman, sahne tabanlı Yazarın Çerçevesi, 12 alanlı Senin Çerçeven retire edildi (veri korundu)
  - Modül III · Yolculuk Modu CTA (yakında durumunda)
  - Çapraz atıflar: tercih ↔ sahne, boşluk ↔ sahne, sahne → tercih + boşluk bağlantıları
  - Sadece Hamlet için yapıldı — Macbeth/Willy/Biff aynı yapıda (eski) çalışmaya devam ediyor
- ✅ **Tasarım Migrasyonu Sprint** (Dalga 1-3, 2026-05-07)
  - Dual mode: dark (mevcut kimlik) + krem (Workbook ruhu, bordo aksan)
  - CSS değişken sistemi: yapı + semantik + sıcak zemin + kategori paleti
  - Self-hosted tipografi via `next/font/google`
  - Anti-flash inline script + ThemeProvider context
  - Global floating tema toggle (sağ-alt) + profil sayfasında radyo seçimi
  - 44 dosya hard-coded hex → `var(--*)` migrasyonu
  - Alpha overlay'leri `color-mix(in srgb, X N%, transparent)` syntaxı
  - WCAG AA garantili (krem mode tüm metin çiftleri AA, çoğu AAA)
  - Krem mode okunabilirlik: weight 200→400, 300→500 (CSS attribute selector)

---

## 🚀 Yapılacaklar — Öncelik Sırasına Göre

### Yakın vade (sonraki birkaç oturum)

**C3 — Kulis görüntüleme sayfası (`/kulis`)**
- Hangi karakterlere değdin
- Hangi egzersizleri yaptın (toplu liste)
- Hangi boşluklara yazdın (toplu görüntüleme)
- Henüz Blueprint değil — sadece **toplu görüntüleme**

**C4 — Profil/ilerleme rozeti**
- Karakter listesinde her karakterin yanında "3/7 egzersiz" gibi rozet
- Ana ekranda Modül I durumu rozeti ("✓ Tamamlandı" veya "1/3")

### Orta vade

**C-WB — Macbeth/Willy/Biff için Workbook refactor**
- Hamlet'te yapılan refactor'un (Oyun Öncesi · Timeline · Yazarın Çerçevesi · Senin Çerçeven) diğer 3 karaktere de uygulanması.
- İçerik üretimi büyük iş — her karakter için workbook hazırlamak gerekir.
- Mimari ve veri katmanı hazır (karakter_id ile parametrik).

**C5 — Blueprint sayfası (`/blueprint`)**
- Pasif rapor değil **aktif öneri**
- "Bu karakterde Boston Boşluğu'na yazmadın, oraya bakman önerilir"
- Karakter-Oyuncu Gap görselleştirmesi (MBTI üzerinden, sonra OCEAN katmanı eklenebilir)
- Giriş kapısı analizi (VAK üzerinden)

**C6 — Kararlar Odası yansımalarını kayıt**
- 3. tablo: `karar_yansimalari`
- Hangi seçimi yaptı, hangi yansımayı yazdı

**C7 — Kendi karakterini ekle**
- Kullanıcı kendi karakterini tanımlayabilsin
- Sahneler, boşluklar, egzersizler ekleme arayüzü
- Büyük iş — son sırada

### Uzak vade

**C8 — Modül III: AI Dış Ses + Journey Modu**
- Karakterin tüm yaşamını (pre-senaryo → post-senaryo) sırasıyla AI yönlendirmesiyle dolaşma
- AI Sahne Partner (Gemini raporundan): AI hem yönlendirir hem karşı karakter olur
- ElevenLabs/OpenAI sesi entegrasyonu

---

## 🔮 Gelecek İçin Notlar (Gemini Raporu)

Bu öneriler ileride uygulanacak — şimdilik dokunma:

1. **Topraklanma'ya Voo Sounding ekle** — vagus siniri rahatlatma egzersizi (ses çıkararak nefes verme). Mevcut topraklanma akışına 1-2 adım eklenebilir.

2. **Blueprint'te Karakter-Oyuncu Gap** — şu an MBTI üzerinden basit gap var, OCEAN/Big Five katmanı eklenebilir. Bilimsel olarak daha güçlü.

3. **VAK → "Giriş Kapısı"** — Blueprint'te VAK sonucunu "bilişsel/somatik/duygusal/sosyal" giriş kapısı olarak yeniden çerçevele.

4. **AI Sahne Partner** — Modül III'ün bir parçası. AI sadece yönlendirici değil, karşı karakter olarak da konuşur.

**Şu anlık ertelenenler:** Biyometrik sensörler (HRV/EDA), mikro-ekspresyon analizi, Otantisite Dashboard — donanım gerektiriyor, scope dışı.

---

## 💡 Çalışma İlkeleri

### Kod kararlarında
- **Önce sor, sonra yap.** Büyük değişiklikler için önce bana danış.
- **Veri yapısını koruyalım.** Karakter veri formatı oturmuş, bozma.
- **Stil tutarlılığı kritik.** Yeni bir bileşen yazarken mevcut stillerden örnek al.
- **Türkçe karakterler.** UTF-8 dışı encoding kullanma.

### Pedagojik kararlarda
- **ITC ilkelerine sadık kal.** Metot oyunculuğuna kayma, "kişisel travmadan beslenen karakter" yaklaşımı bu projede yanlış.
- **Etik koruma asla gevşemez.** Travma sistemi kullanıcıyı korumak için var, performans için değil.
- **Sessiz kişiselleştirme.** "Sen INFJ olduğun için..." gibi açıklamalar yapma. Sezdir, anlatma.

### Geliştirme akışında
- **Küçük adımlarla.** Bir özelliği bitir, test et, push et, sonra diğerine geç.
- **Vercel push'tan önce `npm run build`.** Hata varsa lokalde gör.
- **Commit mesajları açıklayıcı.** Türkçe karakter olmasın (bazı git ortamları sorun yaşar).

---

## 📞 İletişim ve Geri Bildirim

- **Beyti Engin** — proje sahibi, ITC metodolojisinin kurucusu (2005-)
- Projeye duygusal yatırımlı, pedagojik derinliğe önem veriyor
- Karakterler hassas — özellikle Macbeth ve Hamlet üzerinde detaylı çalışıldı
- HMDK Stuttgart ile potansiyel akademik işbirliği vizyonu

---

**Son güncelleme:** 2026-05-07 (Tasarım Migrasyonu Sprint — Dalga 1-3 tamamlandı, dual mode canlı)
