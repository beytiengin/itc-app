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
│   │       ├── willy/                  # Willy — Workbook refactor (Hamlet ile aynı alt-sayfa yapısı)
│   │       │   ├── page.js
│   │       │   ├── oyun-oncesi-yasam/page.js
│   │       │   ├── timeline/page.js
│   │       │   ├── yazarin-cercevesi/{page.js, [no]/page.js, sentez/page.js}
│   │       │   └── senin-cerceven/{page.js, [no]/page.js, sentez/page.js}
│   │       └── biff/page.js            # Henüz eski tek-sayfa yapısında
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

### Tipografi (Karar 35 — Fraunces + Inter, 25 May 2026)
- **Self-hosted** via `next/font/google` (build time):
  Fraunces (display) + Inter (body). `Cormorant Garamond` + `Jost` geçişten önce.
- **Başlıklar:** `Cormorant Garamond, serif` font-stack referansı **korundu** —
  Next.js `--font-display` variable üstünden Fraunces yüklenir; CSS fallback chain
  aynı. `fontWeight: 300`, çoğu italic — Fraunces italic'i devreye girer.
- **Gövde + UI:** `Jost, sans-serif` font-stack referansı **korundu** — Next.js
  `--font-body` variable üstünden Inter yüklenir. `fontWeight: 300` veya `400`.
  Inter ince ağırlıklarda Jost'tan daha okunaklı.
- **Krem mode override:** weight 200→400, 300→500 (CSS attribute selector).
  Inter min weight 300; eski `fontWeight: 200` referansları en yakın 300'e düşer
  (next/font otomatik fallback). Karar 34 BolumDurum revizyonunda Jost-200 → 400
  yapılmıştı; benzer şekilde diğer kritik UI yerlerinde 200 yerine 300/400 tercih.
- **Alt başlıklar/etiketler:** sans-serif (Inter via Jost variable), küçük
  (0.6rem), büyük harf, `letterSpacing: 0.3em`.
- **Bilinçli teknik borç:** `fonts.js` export adları (`cormorant`, `jost`)
  içerikle uyuşmuyor (artık Fraunces/Inter). Tüm component'ler bu adlardan
  import ettiği için korundu; rename refactor'ü (`display`/`body`) ileride.

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

2. Yildiz.psikolojik (1-7) → SADECE pedagojik öz-farkındalık (Karar 21)
   Travma erişimini ETKİLEMEZ. Hiçbir sahne/egzersiz/boşluk profile göre
   kilitlenmez. Travma sistemi profil-bağımsız, sahne-level uyarı:
   - `app/lib/travma.js` → `sahneUyarisi(sahne)`  (uyarı — gate değil, kilit yok)
   - `topraklanmaGerekli(yogunluk)` → yoğunluk ≥2 (Tanıklık/İcra) sonrası topraklanma
   (Karar 21 öncesi ≥5/3-5/<3 eşikli `sahneErisimi()` gate'i geri çekildi.)

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

**Erişim kuralları** (`travma.js`'de — Karar 21, Spine v1.9):
- Travma sınıflandırması karakter verisinden (metinden) çıkarılır; oyuncuya **uyarı** olarak gösterilir
- Hiçbir sahne oyuncu profili nedeniyle kilitlenmez — gate yok
- Yoğunluk 2 (Tanıklık) veya 3 (İcra) sahneler sonrası Topraklanma Protokolü otomatik tetiklenir (kategori- ve profil-bağımsız)

> **İş 2 — TAMAMLANDI (Karar 21 app refactor):** `sahneErisimi(sahne, yildiz)` gate'i kaldırıldı; yerine `sahneUyarisi(sahne)` (profil-bağımsız uyarı) + `topraklanmaGerekli(yogunluk)` (yoğunluk ≥2 tetik) geldi. Yıldız parametresi kalktı; hiçbir içerik psikolojik skora göre kilitlenmiyor. Detay: `kararlar/2026-05-15-yildiz-travma-ayrismasi/04-app-degisiklik-listesi.md` (canon repo).

**Topraklanma protokolü:** Yoğunluk 2-3 sahneleri tamamladıktan sonra otomatik açılan 6 adımlı çıkış (deroling). Tetikleyici sahne-içeriği temellidir; oyuncu profili etkilemez.

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
- ✅ **Modül II · Workbook Refactor — Hamlet + Willy** (Sprint 1-5, 2026-05)
  - 5 alt-bölüm yapısı: Doğrular · Oyun Öncesi Yaşam · Timeline · Yazarın Çerçevesi · Senin Çerçeven
  - Eski 9 antrenman, sahne tabanlı Yazarın Çerçevesi, 12 alanlı Senin Çerçeven retire edildi (veri korundu)
  - Modül III · Yolculuk Modu CTA (yakında durumunda)
  - Çapraz atıflar: tercih ↔ sahne, boşluk ↔ sahne, sahne → tercih + boşluk bağlantıları
  - **Hamlet (5 boşluk / 5 tercih) ve Willy (4 boşluk / 5 tercih)** bu yapıda. Macbeth + Biff
    henüz eski tek-sayfa yapısında çalışıyor.
  - Bileşenler `Hamlet*` önekiyle paylaşılıyor; karakter farkı sadece veride (`willy.js` vb.).
    Willy sayfaları Hamlet'ten kopyalanırken kalan "5 boşluk" metin kalıntıları
    2026-05-24'te temizlendi (Willy'de 4 boşluk).
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

**C-WB — Macbeth/Biff için Workbook refactor**
- Hamlet + Willy'de yapılan refactor'un (Oyun Öncesi · Timeline · Yazarın Çerçevesi · Senin Çerçeven) kalan 2 karaktere de uygulanması.
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

**Son güncelleme:** 2026-05-24 (Willy copy-bug temizliği + CLAUDE.md gerçeğe hizalama)

---

## 🎯 Aktif Hedef — Çift Dilli Willy Prototipi (2026-05-24)

Birkaç önemli uluslararası oyuncu / yönetmen / tiyatro akademisyenine (ilk alıcı:
Rufus Norris) gönderilmek üzere **tek vitrin karakter** prototipi.

**Stratejik kapsam daraltması:** Dört karakteri çevirmek yerine **yalnızca Willy**
uçtan uca çift dilli (TR/EN) yapılacak; Hamlet/Macbeth/Biff "yakında" kalır.
Geniş-yarım yerine tek-kusursuz yol hedefleniyor.

**Kararlar:**
- Vitrin karakter: **Willy Loman** (Death of a Salesman — Beyti şu an bu prodüksiyonda
  Charley rolünde, Rufus Norris yönetiminde; anlatı bağı güçlü).
- Erişim: **çift kanal.** (a) Kilit reviewer'lar için Beyti'nin önceden kalibre ettiği
  hazır demo hesabı — sürtünmesiz, kürate profil. (b) Öğrenci QA turu için reviewer
  kendi hesap + tam kalibrasyon — kalibrasyon süreci ITC pedagojisinin parçası,
  sürtünme değil. Kalibrasyonsuz erişim 24 May akşamı iptal edildi (RLS + eş-yazarlık
  çelişkisi; canon `karar-33 §8`).
- Dil mekanizması: ağır i18n yok. Mevcut tema-toggle deseni (React context + localStorage)
  `lang` (tr/en) için kopyalanır; header'a geçiş düğmesi. Asıl iş = çeviri, kod değil.

**Sıra (en hızlı mantıklı):**
1. ✅ Willy copy-bug + CLAUDE.md
2. ✅ `lang` context + header toggle iskeleti
3. ✅ Vitrin yolun çevirisi: chrome + Willy verisi + paylaşılan didaktik bloklar
   (manifesto, 5 adım, etik çerçeve) — EN çeviri tamamlandı (AI taslak; **öğrenci
   QA turuyla doğrulanacak**), `willy-i18n.js` `seninCerceven` + `icerik` dalları
   tam. Paylaşılan bileşenler (`HamletBoslukKart` · `HamletBolumGecisi` ·
   `HamletAltSoruYazma`) dil-duyarlı.
4. ✅ Reviewer cilası: hub'da ilerleme rozetleri (Supabase'den arkada yüklenen X/Y;
   ✅ canlı), didaktik bloklar varsayılan KATLI (`Katlanir`), tam-ekran
   "Hazırlanıyor" yerine `SayfaIskelet`.
5. ~~Kalibrasyonsuz erişim yolu~~ **— İPTAL (24 May akşam revizyonu).** Erişim çift
   kanala döndü; demo hesabı + öğrenci kanalı. Kod değişikliği yok. Detay: canon
   `karar-33-vitrin-willy-prototipi.md §8`.

**Kalan teknik iş (Karar 33 Adım 3 artık-kapsamı):** Senin Çerçeven `[no]` ve `sentez`
alt-sayfaları + Yazarın Çerçevesi alt-sayfalarındaki **inline TR chrome metinleri**
sözlüğe (`willy-i18n.seninCerceven.altSayfa` / `seninCerceven.sentez` +
`yazarinCercevesi.altSayfa` / `.sentez`) bağlanır. Veri tarafı (boşluk/tercih
içeriği) zaten EN; sadece sayfa başlığı/etiketler/intro paragrafları kaldı.

**Bilinçli ertelenenler (prototipi geciktirmesin):** diğer 3 karakter çevirisi,
`Hamlet*` bileşenlerini parametrikleştirme, "geçen sefer yazdığın" dönüş kancası,
kalibrasyon ekranlarının çevirisi (öğrenci kanalı için ileride istenebilir).
**C seçeneği — minimal kalibrasyon** 24 May akşamı iptal (tasarım borcu olarak
edge'de tutuluyor).
