// components/TimelineYatay.js
// ITC Actor's Gym — Yatay scroll timeline
//
// Her sahne bir nokta veya elmas (kritikMi'ye göre).
// `itc-sahne-sec` custom event'ini dinler — YazarinCercevesi'den
// gelen "Timeline'da gör" tıklaması bu sahneye scroll eder ve seçer.

'use client';

import { useEffect, useRef } from 'react';

const TON = 'var(--accent)';

export default function TimelineYatay({ sahneler, seciliSahneId, onSahneSec }) {
  const containerRef = useRef(null);
  const sahneRefs = useRef({});

  function sahneSec(id) {
    if (typeof onSahneSec === 'function') onSahneSec(id);
    const el = sahneRefs.current[id];
    if (el && containerRef.current) {
      const c = containerRef.current;
      const elRect = el.offsetLeft;
      const elWidth = el.offsetWidth;
      const cWidth = c.clientWidth;
      c.scrollTo({ left: elRect - cWidth / 2 + elWidth / 2, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    function handler(e) {
      const id = e.detail?.id;
      if (id) sahneSec(id);
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('itc-sahne-sec', handler);
      return () => window.removeEventListener('itc-sahne-sec', handler);
    }
  }, [onSahneSec]);

  return (
    <div
      ref={containerRef}
      style={{
        overflowX: 'auto',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
        padding: '1.5rem 2rem',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'flex-start',
          minWidth: '100%',
          position: 'relative',
        }}
      >
        {/* Bağlantı çizgisi */}
        <div
          style={{
            position: 'absolute',
            top: '38px',
            left: '40px',
            right: '40px',
            height: '1px',
            backgroundColor: 'var(--rule)',
            zIndex: 0,
          }}
        />

        {(sahneler || []).map((sahne) => {
          const aktif = seciliSahneId === sahne.id;
          const kritik = sahne.kritikMi === true;

          return (
            <button
              key={sahne.id}
              ref={(el) => { sahneRefs.current[sahne.id] = el; }}
              onClick={() => sahneSec(sahne.id)}
              style={{
                width: '95px',
                minWidth: '95px',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.3rem 0.2rem',
                color: 'var(--ink)',
                fontFamily: 'inherit',
                position: 'relative',
                zIndex: 1,
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => { if (!aktif) e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { if (!aktif) e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 200,
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  color: aktif ? TON : 'var(--ink-muted)',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '90px',
                }}
              >
                {sahne.id}
              </span>

              <div
                style={{
                  width: aktif ? (kritik ? '20px' : '18px') : (kritik ? '14px' : '12px'),
                  height: aktif ? (kritik ? '20px' : '18px') : (kritik ? '14px' : '12px'),
                  backgroundColor: 'var(--bg-base)',
                  border: `2px solid ${TON}`,
                  borderRadius: kritik ? '2px' : '50%',
                  transform: kritik ? 'rotate(45deg)' : 'none',
                  boxShadow: aktif ? `0 0 12px color-mix(in srgb, ${TON} 53%, transparent)` : 'none',
                  transition: 'all 0.25s ease',
                }}
              />

              <span
                style={{
                  fontFamily: 'var(--font-display), serif',
                  fontStyle: 'italic',
                  fontSize: '0.7rem',
                  color: aktif ? 'var(--ink)' : 'var(--ink-muted)',
                  lineHeight: 1.3,
                  whiteSpace: 'normal',
                  textAlign: 'center',
                  maxWidth: '85px',
                  marginTop: '0.2rem',
                }}
              >
                {(sahne.label || '').length > 22 ? `${sahne.label.slice(0, 22)}…` : sahne.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
