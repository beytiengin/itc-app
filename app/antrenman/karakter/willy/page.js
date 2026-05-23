// app/antrenman/karakter/willy/page.js
// ITC Actor's Gym — Willy Loman karakter sayfası (hub)
//
// Modül II generic mimari (A-2 kararı: generic + Timeline Willy modu):
//   - Karakter kimliği (karakter MBTI'si yazılmaz — tip kaldırıldı)
//   - Doğrular (Bölüm 1)
//   - 4 alt-bölüm kartı (Oyun Öncesi · Timeline · Yazarın Çerçevesi · Senin Çerçeven)
//   - Modül III · Yolculuk Modu CTA (yakında)
//
// Hamlet ile aynı yapı (Spine §3.5); fark veride (willy.js). Eski tek-sayfa
// (kalibrasyon + 4 kart + ZihinselAntrenman) retire edildi; eski veri
// (sahneler/bosluklar/antrenmanlar) willy.js'de korunuyor.

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import willy from '../../../../data/karakterler/willy';
import DogrularKarti from '../../../../components/DogrularKarti';
import HamletAltSayfaHeader from '../../../../components/HamletAltSayfaHeader';

const TON = 'var(--accent)';
const KOK = '/antrenman/karakter/willy';

export default function WillySayfasi() {
  const router = useRouter();

  // Eski hash'leri yeni route'lara yönlendir.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (!hash) return;
    if (hash === '#bosluklar' || hash.startsWith('#bosluk-')) {
      router.replace(`${KOK}/senin-cerceven`);
    } else if (hash === '#antrenman' || hash === '#egzersizler') {
      router.replace(`${KOK}/senin-cerceven`);
    } else if (hash === '#sahneler' || hash.startsWith('#sahne-')) {
      router.replace(`${KOK}/timeline`);
    }
  }, [router]);

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-base)',
        color: 'var(--ink)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <HamletAltSayfaHeader />

      {/* Karakter kimliği */}
      <section
        style={{
          padding: '3rem 2rem 2rem',
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.35em',
              color: TON,
              textTransform: 'uppercase',
            }}
          >
            Modül II · Karakterini İnşa Et
          </span>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 6vw, 3.2rem)',
              color: 'var(--ink)',
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '0.02em',
            }}
          >
            {willy.ad}
          </h1>
          <div
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.8rem',
              color: 'var(--ink-muted)',
              letterSpacing: '0.12em',
            }}
          >
            {willy.yazar} · {willy.donem} · {willy.tur}
          </div>
          {willy.ozet && (
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--ink-soft)',
                maxWidth: '700px',
                lineHeight: 1.7,
                margin: '0.8rem 0 0 0',
              }}
            >
              {willy.ozet}
            </p>
          )}
        </div>
      </section>

      {/* Bölüm 1 · Doğrular */}
      <section
        style={{
          padding: '0 2rem',
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.9rem',
            marginBottom: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.35em',
              color: TON,
              textTransform: 'uppercase',
            }}
          >
            Bölüm 1
          </span>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.4rem',
              color: 'var(--ink)',
            }}
          >
            Değiştirilemez Doğrular
          </span>
        </div>
        <DogrularKarti dogrular={willy.dogrular} />
      </section>

      {/* Bölümler 2-5 — Alt sayfalar */}
      <section
        style={{
          padding: '3rem 2rem 0',
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.4rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.35em',
              color: TON,
              textTransform: 'uppercase',
            }}
          >
            Bölümler 2 — 5
          </span>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.4rem',
              color: 'var(--ink)',
            }}
          >
            Karakter koordinatları
          </span>
        </div>
        <BolumKartlari />
      </section>

      {/* Modül III · Yolculuk Modu CTA */}
      <section
        style={{
          padding: '4rem 2rem 5rem',
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <ModulIIICta />
      </section>
    </main>
  );
}

// ─── BÖLÜM KARTLARI ─────────────────────────────────────────────────────────

function BolumKartlari() {
  const kartlar = [
    {
      etiket: 'Bölüm 2',
      baslik: 'Oyun Öncesi Yaşam',
      altyazi: 'Sahneye çıkmadan önce ne yaşandı',
      aciklama:
        "Sekiz olay, dokuz ilişki — Willy'nin bedeninde taşıdığı geçmiş.",
      yol: `${KOK}/oyun-oncesi-yasam`,
    },
    {
      etiket: 'Bölüm 3',
      baslik: 'Zaman Çizgisi',
      altyazi: "Willy'nin bedensel zinciri",
      aciklama:
        'On bir birim, üç akış hattı (Sızıntı · Patlama · Bedel). Sahne sırası ile hayat sırası ayrı.',
      yol: `${KOK}/timeline`,
    },
    {
      etiket: 'Bölüm 4',
      baslik: 'Yazarın Çerçevesi',
      altyazi: 'Beş tercih, beş kavşak',
      aciklama:
        "Ben, geçmişe kayışlar, Linda+Kadın, intihar, son an — Miller'ın açık uçlarına seninkini koy.",
      yol: `${KOK}/yazarin-cercevesi`,
    },
    {
      etiket: 'Bölüm 5',
      baslik: 'Senin Çerçeven',
      altyazi: "Miller'ın sustuğu yer",
      aciklama:
        'Dört boşluk, on iki alt-soru. Sahnelerin altında akan görünmez metni sen yaz.',
      yol: `${KOK}/senin-cerceven`,
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
      }}
    >
      {kartlar.map((k) => (
        <a
          key={k.yol}
          href={k.yol}
          style={{
            border: '1px solid var(--rule)',
            padding: '1.6rem 1.8rem',
            backgroundColor: 'var(--bg-elevated)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'var(--ink)',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = TON;
            e.currentTarget.style.backgroundColor = 'var(--accent-bg-deep)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--rule)';
            e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
          }}
        >
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.35em',
              color: TON,
              textTransform: 'uppercase',
            }}
          >
            {k.etiket}
          </span>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.5rem',
              color: 'var(--ink)',
              lineHeight: 1.2,
            }}
          >
            {k.baslik}
          </span>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.95rem',
              color: 'var(--ink-muted)',
            }}
          >
            {k.altyazi}
          </span>
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.82rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
              margin: '0.4rem 0 0 0',
            }}
          >
            {k.aciklama}
          </p>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              color: TON,
              textTransform: 'uppercase',
              marginTop: '0.4rem',
            }}
          >
            Aç →
          </span>
        </a>
      ))}
    </div>
  );
}

// ─── MODÜL III · YOLCULUK MODU CTA ──────────────────────────────────────────

function ModulIIICta() {
  return (
    <div
      style={{
        border: `1px solid color-mix(in srgb, ${TON} 20%, transparent)`,
        backgroundColor: 'var(--accent-bg-deep)',
        padding: '2.2rem 2.4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.4em',
          color: TON,
          textTransform: 'uppercase',
        }}
      >
        Modül III · Yolculuk Modu
      </span>

      <h2
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
          color: 'var(--ink)',
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        Willy'nin tüm yaşamı, baştan sona
      </h2>

      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '1.05rem',
          color: 'var(--ink-soft)',
          lineHeight: 1.8,
          margin: 0,
          maxWidth: '700px',
        }}
      >
        Modül II'yi tamamladığında karakter koordinatları kurulmuş olur. Modül III,
        Willy'nin tüm yaşamını — pre-senaryodan sahnedeki son anına — bedeninle bir kez
        baştan sona dolaşman için tasarlandı. Sahneler ve aralarındaki boşluklar, hayat
        sırasına dizilir; AI Dış Ses eşlik eder.
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          paddingTop: '0.6rem',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            color: 'var(--ink-muted)',
            textTransform: 'uppercase',
            padding: '0.4rem 0.9rem',
            border: '1px solid var(--rule)',
          }}
        >
          Yakında
        </span>
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: 'var(--ink-muted)',
          }}
        >
          Modül II tamamlandığında açılacak.
        </span>
      </div>
    </div>
  );
}
