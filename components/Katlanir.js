// components/Katlanir.js
// ITC Actor's Gym — Katlanır didaktik blok. Reviewer cilası (Karar 33 §4):
// vitrin akışında oyuncu-yüzü görünür, yöntem/manifesto blokları varsayılan
// KATLI — profesyonel istediğinde açar.

'use client';

import { useState } from 'react';

const TON = 'var(--accent)';

export default function Katlanir({
  baslik,
  etiket,            // küçük üst etiket — opsiyonel (ör. "ITC Manifestosu · Üç İlke")
  varsayilanAcik = false,
  acikEtiket = '−',  // küçük chevron metni
  kapaliEtiket = '+',
  children,
}) {
  const [acik, setAcik] = useState(!!varsayilanAcik);

  return (
    <div
      style={{
        border: '1px solid var(--rule)',
        backgroundColor: 'var(--bg-elevated)',
        transition: 'border-color 0.25s ease',
      }}
    >
      <button
        type="button"
        onClick={() => setAcik((v) => !v)}
        aria-expanded={acik}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '1rem 1.4rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          color: 'var(--ink)',
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {etiket && (
            <span
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                color: TON,
                textTransform: 'uppercase',
              }}
            >
              {etiket}
            </span>
          )}
          <span
            style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: 'var(--ink)',
            }}
          >
            {baslik}
          </span>
        </div>
        <span
          aria-hidden
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.85rem',
            color: acik ? TON : 'var(--ink-muted)',
            minWidth: '1.2em',
            textAlign: 'center',
            transition: 'color 0.25s ease',
          }}
        >
          {acik ? acikEtiket : kapaliEtiket}
        </span>
      </button>
      {acik && (
        <div
          style={{
            borderTop: '1px solid var(--rule)',
            padding: '1.2rem 1.4rem 1.4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
