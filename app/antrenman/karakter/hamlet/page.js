// app/antrenman/karakter/hamlet/page.js
// ITC Actor's Gym — Hamlet karakter sayfası
//
// Modül II Hamlet Refactor (Sprint 4) sonrası mimari:
//   - Karakter kimliği
//   - Doğrular (Bölüm 1)
//   - 4 alt-bölüm kartı (Oyun Öncesi · Timeline · Yazarın Çerçevesi · Senin Çerçeven)
//   - Modül III · Yolculuk Modu CTA (yakında)
//
// Eski 9 antrenman, eski sahne-tabanlı Yazarın Çerçevesi ve 12 alanlı Senin Çerçeven
// retire edildi. Veri (sahneler/bosluklar/antrenmanlar) hamlet.js'de korunuyor —
// gelecekte gerektiğinde geri alınabilir.

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import hamlet from '../../../../data/karakterler/hamlet';
import DogrularKarti from '../../../../components/DogrularKarti';
import HamletAltSayfaHeader from '../../../../components/HamletAltSayfaHeader';

const TON = '#c9a96e';

export default function HamletSayfasi() {
  const router = useRouter();

  // Eski hash'leri yeni route'lara yönlendir.
  // (#bosluklar → /senin-cerceven, #antrenman → /senin-cerceven, vs.)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (!hash) return;
    if (hash === '#bosluklar' || hash.startsWith('#bosluk-')) {
      router.replace('/antrenman/karakter/hamlet/senin-cerceven');
    } else if (hash === '#antrenman' || hash === '#egzersizler') {
      router.replace('/antrenman/karakter/hamlet/senin-cerceven');
    } else if (hash === '#sahneler' || hash.startsWith('#sahne-')) {
      router.replace('/antrenman/karakter/hamlet/timeline');
    }
  }, [router]);

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#f0ede8',
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
              color: '#f0ede8',
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '0.02em',
            }}
          >
            {hamlet.ad}
          </h1>
          <div
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.8rem',
              color: '#888',
              letterSpacing: '0.12em',
            }}
          >
            {hamlet.yazar} · {hamlet.donem} · {hamlet.tip} · {hamlet.tur}
          </div>
          {hamlet.ozet && (
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: '#bbb',
                maxWidth: '700px',
                lineHeight: 1.7,
                margin: '0.8rem 0 0 0',
              }}
            >
              {hamlet.ozet}
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
              color: '#f0ede8',
            }}
          >
            Değiştirilemez Doğrular
          </span>
        </div>
        <DogrularKarti dogrular={hamlet.dogrular} />
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
              color: '#f0ede8',
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
        "Sekiz olay, sekiz ilişki — Hamlet'in bedeninde taşıdığı geçmiş.",
      yol: '/antrenman/karakter/hamlet/oyun-oncesi-yasam',
    },
    {
      etiket: 'Bölüm 3',
      baslik: 'Zaman Çizgisi',
      altyazi: "Hamlet'in bedensel zinciri",
      aciklama: '14 sahnenin sıcaklık haritası. Kendi yorumunu işaretle.',
      yol: '/antrenman/karakter/hamlet/timeline',
    },
    {
      etiket: 'Bölüm 4',
      baslik: 'Yazarın Çerçevesi',
      altyazi: 'Beş tercih, beş kavşak',
      aciklama:
        "Hayalet, delilik, Ophelia, erteleme, son — Shakespeare'in açık uçlarına seninkini koy.",
      yol: '/antrenman/karakter/hamlet/yazarin-cercevesi',
    },
    {
      etiket: 'Bölüm 5',
      baslik: 'Senin Çerçeven',
      altyazi: "Shakespeare'in sustuğu yer",
      aciklama:
        'Beş boşluk, on beş alt-soru. Sahnelerin altında akan görünmez metni sen yaz.',
      yol: '/antrenman/karakter/hamlet/senin-cerceven',
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
            border: '1px solid #2a2a2a',
            padding: '1.6rem 1.8rem',
            backgroundColor: '#0d0d0d',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            textDecoration: 'none',
            color: '#f0ede8',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = TON;
            e.currentTarget.style.backgroundColor = '#100c06';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#2a2a2a';
            e.currentTarget.style.backgroundColor = '#0d0d0d';
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
              color: '#f0ede8',
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
              color: '#888',
            }}
          >
            {k.altyazi}
          </span>
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.82rem',
              color: '#bbb',
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
        border: `1px solid ${TON}33`,
        backgroundColor: '#0d0a05',
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
          color: '#f0ede8',
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        Hamlet'in tüm yaşamı, baştan sona
      </h2>

      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '1.05rem',
          color: '#ccc',
          lineHeight: 1.8,
          margin: 0,
          maxWidth: '700px',
        }}
      >
        Modül II'yi tamamladığında karakter koordinatları kurulmuş olur. Modül III,
        Hamlet'in tüm yaşamını — pre-senaryodan post-senaryoya — bedeninle bir kez
        baştan sona dolaşman için tasarlandı. AI Dış Ses rehberli yaklaşık 110 dakikalık
        bir yolculuk.
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
            color: '#888',
            textTransform: 'uppercase',
            padding: '0.4rem 0.9rem',
            border: '1px solid #3a3a3a',
          }}
        >
          Yakında
        </span>
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: '#888',
          }}
        >
          Modül II tamamlandığında açılacak.
        </span>
      </div>
    </div>
  );
}
