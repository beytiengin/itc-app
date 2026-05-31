# ITC Actor's Gym

**Inside The Character** metodunun dijital antrenman platformu — oyuncuların bir
karakterin zihinsel-bedensel haritasına psikolojik güvenlikle giriş yaptığı, günlük
pratik için tasarlanmış bir araç.

> Bu bir tüketici uygulaması değil, pedagojik bir araçtır. Geliştirme kanonu (yöntem,
> içerik, dil ve karar geçmişi) ayrı bir özel depoda (`itc-canon`) tutulur; bu uygulama
> oranın bir alt modülüdür. Yöntemin otoritesi kanondur — kod, kanonu uygular.

Beyti Engin & Filiz Kaya Ataklı · 20 yılı aşkın araştırma ve pratiğin sentezi.

---

## Ne yapar

Oyuncuyu üç modüllü bir yolculukta ilerletir:

- **Modül I — Kendini Tanı (Kalibrasyon).** Tek lineer akışta beş bölüm: Oyuncu Profili,
  Beceri Haritası, VAK, Arketip ve Duygu Haritası. Çıktı, sonraki adımları sessizce
  kişiselleştirmek için kullanılır — oyuncuya "neden" mekanizması gösterilmez.
- **Modül II — Karakterini İnşa Et (Antrenman).** Karakterin değiştirilemez doğruları,
  zaman çizgisi, yazarın çerçevesi ve oyuncunun kendi çerçevesi üzerinden, sahneler
  arasindaki "boşluk"ların yeniden kurulması. Şu an açık karakterler: **Hamlet** ve
  **Willy Loman** (çift dilli, TR/EN). Diğer karakterler hazır olduğunda açılır.
- **Modül III — Sahnele.** Gelecek aşama (Dış Ses eşliğinde yolculuk).

Tasarımın üç değişmez ilkesi: karakter oyuncunun kişisel travmasıyla kurulmaz
(substitution yok); oyuncu eş-yazardır; metot görünmez, oyuncu görünür.

---

## Teknik

| Katman | Seçim |
|---|---|
| Framework | Next.js 16 (App Router) |
| Dil/UI | JavaScript + React, inline-stil + CSS değişken sistemi (çift tema) |
| Veritabanı | Supabase (PostgreSQL + RLS) |
| Auth | Supabase Auth (email + Google OAuth) |
| Dağıtım | Vercel |
| Tipografi | Fraunces (display) + Inter (body) |

Çift dil, `app/lib/dil.js` (`useDil` + `ceviri`) ve sözlük dosyaları (`data/*-i18n.js`)
üzerinden çalışır; tercih `localStorage`'da saklanır.

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # uretim derlemesi (push oncesi calistir)
npm run lint
npm run format
```

Ortam değişkenleri (`.env.local`): `NEXT_PUBLIC_SUPABASE_URL`,
`NEXT_PUBLIC_SUPABASE_ANON_KEY`. Veritabanı şeması `supabase-migrations/sprint*.sql`
dosyalarındadır (idempotent; Supabase SQL Editor'da uygulanır).

## Katkı kuralları (özet)

Tam kurallar `CLAUDE.md` dosyasındadır. Özet:

- Her etkileşimli sayfa `'use client';` ile başlar.
- Tüm renkler `var(--*)` üzerinden gelir — inline hex kullanılmaz.
- Metin Türkçe ve UTF-8'dir; arayüzde emoji ve kilit ikonu kullanılmaz (yumuşak dil).
- Yapısal her değişiklik kanona (`itc-canon`) yedirilir; karar geçmişi `decision-log`'da
  tutulur.

---

*Bu depo özeldir ve dış katkıya açık değildir.*
