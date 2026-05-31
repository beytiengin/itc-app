// components/EsikEkrani.js
// İlk girişte (oturum başına bir kez) gösterilen sakin bir nefes anı.
// Calm/Headspace deseni: tek nefes halkası (CSS animasyon) + tek davet + tek buton.
//
// "Metot görünmez" (Spine §3 ilke 3): eşik mekanizmayı anlatmaz, yalnız bir eşik
// hissi verir. Substitution çağrısı YOK ("kendi anılarına dön" tarzı dil yasak).
// Karar 39 (31 May 2026).
//
// Durum: localStorage `itc-esik-gorundu`. Kapatınca bir daha çıkmaz; key
// temizlenirse yeniden görünür (demo/vitrin için temizlenebilir).

'use client';

import { useEffect, useState } from 'react';
import { useDil, ceviri } from '../app/lib/dil';
import chromeI18n from '../data/chrome-i18n';

const STORAGE_KEY = 'itc-esik-gorundu';

export default function EsikEkrani() {
  const { dil } = useDil();
  const t = ceviri(chromeI18n, dil).esik;

  // undefined = SSR / hidratasyon öncesi (gösterme); false = zaten görüldü; true = göster.
  const [goster, setGoster] = useState(undefined);

  useEffect(() => {
    try {
      const gorundu = localStorage.getItem(STORAGE_KEY);
      setGoster(!gorundu);
    } catch (e) {
      setGoster(false);
    }
  }, []);

  function kapat() {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {}
    setGoster(false);
  }

  if (!goster) return null;

  return (
    <>
      <style jsx>{`
        @keyframes itc-esik-nefes {
          0%   { transform: scale(0.85); opacity: 0.55; }
          50%  { transform: scale(1.08); opacity: 0.95; }
          100% { transform: scale(0.85); opacity: 0.55; }
        }
        @keyframes itc-esik-bel {
          0%, 100% { opacity: 0.18; }
          50%      { opacity: 0.42; }
        }
      `}</style>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.ustEtiket}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'var(--bg-base)',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
          padding: '3rem 2rem',
        }}
      >
        {/* Nefes halkası */}
        <div
          style={{
            position: 'relative',
            width: 'clamp(140px, 22vw, 200px)',
            height: 'clamp(140px, 22vw, 200px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1px solid var(--accent)',
              animation: 'itc-esik-nefes 7s ease-in-out infinite',
            }}
          />
          <span
            aria-hidden
            style={{
              position: 'absolute',
              inset: '14%',
              borderRadius: '50%',
              backgroundColor: 'var(--accent)',
              animation: 'itc-esik-bel 7s ease-in-out infinite',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'center', maxWidth: '420px', textAlign: 'center' }}>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              color: 'var(--ink-muted)',
              textTransform: 'uppercase',
            }}
          >
            {t.ustEtiket}
          </span>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
              color: 'var(--ink)',
              fontWeight: 300,
              margin: 0,
              lineHeight: 1.35,
            }}
          >
            {t.davet}
          </p>
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.85rem',
              color: 'var(--ink-soft)',
              margin: 0,
              letterSpacing: '0.03em',
            }}
          >
            {t.altDavet}
          </p>
        </div>

        <button
          onClick={kapat}
          style={{
            padding: '1rem 2.5rem',
            background: 'transparent',
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.8rem',
            fontWeight: 300,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.color = 'var(--bg-base)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--accent)';
          }}
        >
          {t.buton}
        </button>
      </div>
    </>
  );
}
