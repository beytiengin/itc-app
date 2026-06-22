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
MODÜL I — Kendini Tanı (Karar 36 · 27 May 2026: 3 test → 5 bölüm tek lineer akış)
   = /kalibrasyon (tek sayfa, KalibrasyonAkis)
   ├─ Oyuncu Profili    (intake — silent register köprüsü; ölçüm değil)
   ├─ Beceri Haritası   (37 madde, 7 boyut · eski Yıldız Oyuncu yeniden adlandırma)
   ├─ Öğrenme Stili     (VAK, 27 soru)
   ├─ Kişilik Tipi      (MBTI/Arketip, 12 senaryo)
   └─ Duygu Haritası    (Panksepp, 33 madde · 6 sistem-LUST hariç · PROVISIONAL —
                         madde 3/6 FKA klinik onayı Haziran 2026 turunda)

   Eski rotalar (/kalibrasyon/vak · /yildiz · /arketip) retire/redirect.

MODÜL II — Karakterini İnşa Et
   = /antrenman/karakter
   ├─ Hamlet       (tam yapı + EN çevirisi — vitrin)
   ├─ Willy Loman  (tam yapı + EN çevirisi — vitrin)
   ├─ Macbeth      (pasif "Yakında" — eski şema, refactor bekliyor)
   └─ Biff Loman   (pasif "Yakında" — eski şema)

MODÜL III — Sahnele (gelecekte)
   = Dış Ses + Yolculuk Modu (Karar 31: "AI" öneki kaldırıldı — oyuncu-yüzü)
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
│   ├── kalibrasyon/                     # Karar 36: tek lineer akış (5 bölüm, retire alt rotalar)
│   │   └── page.js                      # Tek sayfa — Profil → Beceri → VAK → MBTI → Panksepp
│   ├── fuaye/page.js                    # DONDURULDU (Karar 33 vitrin scope dışı)
│   ├── kasa/page.js                     # DONDURULDU (Karar 33 vitrin scope dışı)
│   ├── hakkimizda/page.js               # Marka sayfası (çift dil, Karar 16/20/31/S3.17 hizalı)
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
│       ├── kalibrasyon.js               # getKalibrasyonProfili (5 bölüm) + vakDili/pankseppYaklasimi (silent overlay)
│       ├── kalibrasyon-kaydet.js        # Karar 36: 5 bölüm sonuç yazma (oyuncu_profili, beceri/panksepp/vak/arketip)
│       ├── ilerleme.js                  # Karakter ilerleme view + siradakiAdim CTA
│       ├── travma.js                    # Etik koruma — sahne-level uyarı + topraklanma tetik (Karar 21)
│       ├── kulis.js                     # Egzersiz/boşluk kayıt + tum* getter'ları
│       ├── hamlet-veri.js               # Hamlet refactor tabloları CRUD'u (Sprint 1-3)
│       ├── theme.js                     # Dual mode tema context
│       └── dil.js                       # TR/EN dil context + ceviri() helper
├── components/
│   ├── Navigasyon.js                    # Global üst nav (durum-duyarlı, anonim/üye)
│   ├── DilToggle.js                     # TR | EN dil geçişi segmentli
│   ├── TemaToggleFloat.js               # Sağ-alt floating tema toggle
│   ├── TemaSecici.js                    # /profil için tema radyo seçimi
│   ├── KalibrasyonOzeti.jsx             # Karar 36 — 4 harita özet (Beceri · VAK · MBTI · Panksepp)
│   ├── MikroBlokKart.js                 # Workbook "neden çerçevesi" 3 mikro-blok kartı (Gün 5)
│   ├── UyariSeviye.js                   # Karar 62 — hassas uyarı 3 kademe (hafif/orta/ağır) + uyariSeviyesi() helper
│   ├── KisimSifir.js                    # Karar 61 — KISIM 0 Yöntem girişi (10 araç tanıtımı, katlı)
│   ├── BaselineKunye.js                 # Karar 57 — Kaybedilen Dünya (El Yazması 5. katman)
│   ├── SayfaIskelet.js                  # Loading skeleton
│   ├── Katlanir.js                      # Genel açılır/kapanır blok
│   ├── IlerlemeRozet.js                 # Karakter listesi ilerleme rozetleri
│   ├── DogrularKarti.js                 # Değiştirilemez Doğrular kartı (Hamlet/Willy)
│   ├── ZihinselAntrenman.js             # Antrenman/egzersiz akışı (eski karakterler)
│   ├── TopraklanmaModu.js               # 6 adımlı topraklanma protokolü
│   ├── SeninCerceven.js                 # Boşluk yazma alanı (eski karakterler)
│   ├── YazarinCercevesi.js              # Eski tercih listesi (Macbeth/Biff)
│   ├── TimelineYatay.js                 # Yatay sahne timeline'ı (Macbeth/Biff)
│   ├── SeciliSahnePaneli.js             # Timeline sahne detay paneli
│   ├── HamletAltSayfaHeader.js          # DEPRECATED — no-op'a indi (P0 ortak nav)
│   └── Hamlet*                          # Hamlet refactor bileşenleri (Sprint 1-5, Willy de kullanıyor)
│       ├── HamletSahneKuresi.js         # Timeline sahne küresi (sıcaklık renkli)
│       ├── HamletSicaklikSecici.js      # Timeline sıcaklık slider
│       ├── HamletPerdeBandi.js          # Timeline 5 perde tema bandı
│       ├── HamletSahneDetay.js          # Timeline sahne detay paneli
│       ├── HamletBolumGecisi.js         # Alt sayfa kapanış geçişi
│       ├── OyunOncesiOlayKart.js        # Oyun Öncesi olay kartı
│       ├── OyunOncesiIliskiKart.js      # Oyun Öncesi ilişki kartı
│       ├── HamletTercihKart.js          # Yazarın Çerçevesi tercih kartı
│       ├── HamletTercihSecim.js         # Yazarın Çerçevesi tercih detay seçim
│       ├── HamletBoslukKart.js          # Senin Çerçeven boşluk kartı
│       └── HamletAltSoruYazma.js        # Senin Çerçeven alt-soru yazma alanı
├── data/
│   ├── chrome-i18n.js                   # Ortak chrome sözlüğü (TR/EN — nav + ana sayfa + hakkimizda + giris + profil + kulis + karakterListesi + mikroBlok)
│   ├── willy-i18n.js                    # Willy sözlüğü TR/EN (chrome + içerik overlay + mikroBlok)
│   ├── hamlet-i18n.js                   # Hamlet sözlüğü TR/EN (chrome + içerik overlay + mikroBlok — Gün 3-4)
│   └── karakterler/
│       ├── macbeth.js                   # Eski şema, refactor bekliyor
│       ├── hamlet.js                    # Workbook genişletilmiş (TR base, EN overlay hamlet-i18n'de)
│       ├── willy.js                     # Workbook genişletilmiş (TR base, EN overlay willy-i18n'de)
│       └── biff.js                      # Eski şema, refactor bekliyor
├── supabase-migrations/                 # SQL migration dosyaları (elle uygulanan)
│   ├── sprint1-hamlet-refactor.sql
│   ├── sprint2-yazarin-cercevesi.sql
│   ├── sprint3-senin-cerceven.sql
│   ├── sprint4-karakter-ilerleme-view.sql      # Karar 34 — karakter ilerleme view
│   └── sprint5-karar-36-kalibrasyon-genisleme.sql  # Karar 36 — Modül I 5 bölüm + 3 yeni tablo
├── middleware.ts                        # Auth gating — DEVRE DIŞI (Karar 33 vitrin demo kanalı, no-op)
├── CLAUDE.md                            # Bu dosya
└── package.json
```

---

## 🗄️ Supabase Tabloları

```sql
-- Kalibrasyon sonuçları (Modül I — Karar 36 yapısı)
vak_sonuclari       (kullanici_id, gorsel, isitsel, kinestetik, baskin, created_at)
arketip_sonuclari   (kullanici_id, tip, ad, created_at)
oyuncu_profili      (kullanici_id, ad, ulke, sehir, egitim, deneyim, alanlar,
                     en_sevdigi_rol, son_guncelleme)  -- Karar 36 intake
beceri_sonuclari    (kullanici_id, mesleki_guven, teknik, zihinsel, duygusal,
                     motivasyonel, rahatlama, iliskisel, genel_yuzde, tarih)
                     -- Karar 36: eski Yıldız → Beceri Haritası (aynı 37 madde, 6→7 boyut)
panksepp_sonuclari  (kullanici_id, oyun, ofke, arayis, bag, korku, huzun, tarih)
                     -- Karar 36 PROVISIONAL: 6 sistem-LUST hariç (Filiz enstrümanı,
                     -- madde 3/6 FKA klinik onayı Haziran 2026 turunda)
yildiz_sonuclari    (ARŞİV — Karar 36 ile retire, veri korunur salt-okur,
                     yeni profile okunmaz)

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

> **DİKKAT — İki ayrı şema yaşıyor.** Yukarıdaki `sahneler/bosluklar/egzersizler`
> formatı **eski şema** (Macbeth + Biff hâlâ bunda). **Hamlet, Willy, Nina** ise
> aşağıdaki **Workbook an-mimarisinde**. Yeni karakter göçü bu yeni şemaya yapılır.

---

## 🧩 Workbook An-Mimarisi (Hamlet · Willy · Nina)

Workbook karakterlerinde içerik, **olaylar (oyunOncesi) + sahneler** içinde yaşayan
**`anlar[]`** dizisiyle kurulur. Her an oyuncunun yaptığı tek bir zihinsel eylemdir.

```javascript
// data/karakterler/willy.js (TR base), EN overlay data/willy-i18n.js
oyunOncesi: {
  olaylar: [{
    no, baslik, sahneRef, yuk,           // dramaturjik çerçeve
    sahneTipi: 'kart'|'karma'|'yuruyus',
    replikIzi: '...',                    // metindeki iz (İz kartı — "dinlenen ses")
    travmaKategorileri: [...],           // BACKEND-ONLY, UI'da asla görünmez
    travmaSeviyesi: 0|1|2|3,             // BACKEND-ONLY
    anlar: [ /* aşağıdaki 3 tip */ ],
  }],
  iliskiler: [...],
}
```

### Beş an tipi (`an.tip`)

| tip | bilişsel eylem | UI eyebrow | render | kayıt |
|-----|----------------|-----------|--------|-------|
| `catal` | **karar** (yorum seçer + mühürler) | "Karar" | `AnSecenek` (A/B dal, her dalda `oznelSabit`) | seçim |
| `yazma` | **boşluk** (kendi sözcükleriyle üretir) | "Boşluk" | `AnYazma` (textarea, blur'da otomatik) | metin |
| `hatira` | **saf zihinsel canlandırma** (sıcak/nötr bölge) | "Hatıra" | `AnYazma` (yazma gibi) | metin |
| `iz` | **travma kalıntısı** (olayı yaşatma, bedende kalanı yokla) | "İz" | `AnYazma` (üretim) | metin |
| `sessizbilgi` | **bilişsel/ahlaki yerleşme** (Miller sorumluluk teması) | "Sessiz Bilgi" | `AnYazma` (üretim) | metin |

```javascript
// catal
{ id: 'o1-a1', tip: 'catal', travmaDuyarli: false,
  soru: '...',
  secenekler: [
    { dal: 'A', baslik: '...', aciklama: '...', oznelSabit: '...(1. tekil mühür)' },
    { dal: 'B', ... },
  ] }
// yazma
{ id: 'o1-a2', tip: 'yazma', travmaDuyarli: false, soru: '...' }
// hatira (sıcak bölge — duyusal çağrı, soru değil)
{ id: 'o5-a3', tip: 'hatira', travmaDuyarli: false, soru: '...(çağrı, soru değil)' }
// iz (travma bölgesi — olayı yaşatma, kalıntıyı yokla, fark et ve bırak)
{ id: 'o6-a3', tip: 'iz', travmaDuyarli: true, soru: '...' }
// sessizbilgi (ahlaki yerleşme — suçlama yok, içte kalanı gör, bırak)
{ id: 's8-a3', tip: 'sessizbilgi', travmaDuyarli: false, soru: '...' }
```

**Travma bölgesi kuralı:** Hatıra sıcak/nötr bölgeye; travma/yara bölgesinde Hatıra DEĞİL
İz (kalıntı) veya Sessiz Bilgi (yerleşme) kullanılır — aynı "hayal et" mekaniği terapi
çağrışımı üretir. İlke: karakter oyuncunun yarasından değil, karakterin verisinden beslenir.

**`replikIzi` etiketi = "Miller karşılığı"** (dinlenen katman), `tip: 'iz'` = "İz" (üretilen
katman). İkisi karışmaz. i18n: anIzEtiket="Miller karşılığı", anIzUretimEtiket="İz".

### Yürüyüş (`sahneTipi: 'yuruyus'`) — dramaturjik kurma, TRANS DEĞİL

Yürüyüş = sahneyi **açık gözle, adım adım kuran** dramaturjik egzersiz. Rehberli imgeleme/
trans DEĞİL (mecra gözü kapalı tutamaz; sesli imgeleme = Modül III). Yapı:
`yuruyus: { esik{komut,adimlar,hitap,buton}, girisBaslik, girisAciklama, girisSentez,
gecisButonu, cikisRitueli, istasyonlar[{no, zamanRozet, acilis, sorular[],
(yazmaAlani+yazmaPlaceholder VEYA catal{anahtar,dil,etiket,secenekler[{deger,baslik,aciklama,muhur,ozet}]})}] }`.
Kurallar: eşik dramaturjik ("gözünü kapat/renk yay" YOK) · beden = **dikkat sorusu**
("neresinde duruyor — fark et") rituel değil · çıkış dramaturjik. Motor: paylaşımlı
`components/BoslukYuruyusu.js` (viewer'a onYuruyus zinciri + tam-ekran overlay + buton ile bağlanır).

### Üç ses bilişsel ayrımı (Karar — bkz KARAR_LOG)

ChatGPT pilot değerlendirmesinden çıkan ilke: oyuncu üç farklı zihinsel kaynağı
üç farklı **eylem** olarak hissetmeli — tipografi değil, biliş.
- **İz** (`replikIzi`) → *dinlenir*. Tırnaklı "ses kartı", accent kutu, "İz · Metindeki iz" eyebrow. Saf karakter sesi, analiz YOK. Yazarın Çerçevesi içinde kalır ama görsel ayrışır.
- **Yazarın alanları** (olay/içsel/yük) → *incelenir*. Düz alanlar.
- **Senin Çerçeven** (catal/yazma/hatira) → *üretilir*. Karar/Boşluk/Hatıra eyebrow.

### Hatıra türü — kanon kriteri

Hatıra = saf duyusal/zihinsel canlandırma (Modül III DNA). Yeni hatıra yazarken
**beş kriter** (her biri tutulmalı):
1. Metinde cevabı **yok** · 2. Doğru cevap **yok** · 3. Karakter adına hayal edilir
· 4. Duyusal/bedensel çapa içerir (ışık, dokunuş, ses) · 5. **Dramaturjik icat DEĞİL**
(yer/eşya/isim dayatmaz — "senin Willy'nin" versiyonunu çağırır).
- Dil **çağrı**, soru değil ("...hisset — ve bırak", soru işaretiyle bitirme).
- Travma bölgesinde (yoğunluk 2-3): doğrudan yara canlandırma YOK; "fırtına öncesi
  sükunet / uzaktan sıcaklık / bedene iyi gelen küçük görüntü" tonu, `travmaDuyarli: true`.

### Viewer & mühürleme

- Viewer: `app/antrenman/karakter/<id>/el-yazmasi/page.js` (`<id>/page.js` sadece redirect).
- `AnKart` tip-duyarlı dispatcher: eyebrow + doğru alt-bileşen.
- Mühürleme **sessiz**: buton YOK, blur'da otomatik kayıt; dil "✓ mühürlendi" (eski "kaydedildi").
- Kayıt: `oznel_sabitler` tablosu (paylaşımlı `lib/kulis.js` — hamlet/macbeth/biff/nina/willy).
- i18n anahtarları (willy-i18n.js, 3 dil): `anKararEtiket` · `anBoslukEtiket` ·
  `anHatiraEtiket` · `anIzEtiket` · `muhurlendi` · `muhurleYonerge` · `hatiraYonerge` · `seninBosDurum`.

### replikIzi telif disiplini (Yol A)

- **TR** `replikIzi`: Tekindor çevirisinden tam replik (bilinçli — Beyti kararı, tanıdıklık önceliği).
- **EN** `replikIzi`: Miller orijinaliyle doğrulanmış **çekirdek imge + sahne künyesi**
  (tam cümle değil — telif-güvenli). Geri-çeviri/uydurma alıntı YASAK. Doğrulanmış
  ikonik ibareler kısa tırnakla kalabilir ("You fake!", "a man is not a piece of fruit").
- İki dil bilinçli asimetrik.


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

**Şu anki durum (Karar 33 · vitrin demo kanalı):** Auth gating **devre dışı**.
`middleware.ts` no-op'a indirilmiş (commit `848fc89`); Supabase çağrısı bile
yapmıyor, tüm sayfalar herkese açık. Anonim kullanıcı korunan rotalara
(`/kalibrasyon`, `/antrenman`, `/profil`, `/kulis`) doğrudan girebilir —
demo reviewer akışı için bilinçli karar.

Gating'i geri açmak için: `middleware.ts` içindeki yorumlanmış "ESKİ" bloğu
no-op middleware'in yerine koy. `KORUMALI_ROTALAR` listesi orada hazır
(`/kalibrasyon`, `/antrenman`, `/profil`, `/kulis`).

**Üye akışı (gating açıldığında):** Tüm sayfalar açık; kalibrasyon eksikse
içeride yumuşak uyarı (kilitleme yok).

**Framework notu:** Next.js 16.2.4 ile koşuyor; `middleware.ts` konvansiyonu
hâlâ destekleniyor (eski docs'daki "proxy.ts'e taşınacak" notu güncelliğini
yitirdi).

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

- ✅ Modül I tek lineer akış (Karar 36 · 27 May 2026): 5 bölüm — Profil/Beceri/VAK/MBTI/Panksepp; 3 yeni tablo (oyuncu_profili, beceri_sonuclari, panksepp_sonuclari); KalibrasyonOzeti dört-harita göstergesi
- ✅ Modül II tamamen çalışır (4 karakter, her biri tam yapıda)
- ✅ Auth (Google OAuth + email/şifre) · gating Karar 33 ile devre dışı, geri açılabilir hazır blok middleware.ts'de
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
- ✅ **Canon yedirme — Karar 57 + 61 + 62 App uygulaması** (2026-06-21)
  - **K62 — Hassas uyarı kademeleri:** `UyariSeviye` bileşeni (hafif/orta/ağır) +
    `uyariSeviyesi()` helper + chrome-i18n `uyari` (TR/EN/DE). An-level (AnKart):
    `travmaDuyarli → 'agir'` kompakt; sahne-level (SahnePanel): açık `uyariSeviye`
    tam ton (Topraklanma çağrısı + destek kapısı). hamlet/macbeth/willy viewer.
    Sahne placement'ları Beyti dramaturg seçimine bırakıldı (dormant).
  - **K61 — KISIM 0 Yöntem:** `KisimSifir` bileşeni (10 araç sıcak dille tanıtım,
    katlı) + chrome-i18n `kisimSifir` (TR/EN/DE, karakter-nötr kanonik tanımlar).
    Header sonrası (EŞİK ↔ KISIM I arası). Substitution Yasağı + Hatıra/İz güvenlik
    sınırı + Method Book köprüsü. Karar 41 El Yazması dokunulmadı.
  - **K57 — Kaybedilen Dünya (Baseline):** `BaselineKunye` bileşeni (El Yazması 5.
    katman, katlanır, varsayılan açık) + chrome-i18n `baseline` etiketleri. Hamlet
    içeriği hamlet.js (TR) + hamlet-i18n.js (EN) — Inside The Hamlet v2.0 kanonik
    metni (4 an: Hatıra baskın, travma-DIŞI). İlişkiler künyesinden sonra yerleşim;
    an kartları viewer-yerel AnKart (oznel_sabitler kaydı). Willy/Macbeth metni
    Beyti dramaturg yazımı bekliyor (dormant).
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

**Son güncelleme:** 2026-06-04 (Workbook an-mimarisi + Hatıra türü + üç-ses ayrımı + Yol A telif — bu oturum)

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
