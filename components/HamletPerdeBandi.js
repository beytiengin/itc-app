// components/HamletPerdeBandi.js
// ITC Actor's Gym — Timeline · 5 Perde Tema Bandı

'use client';

const TON = 'var(--accent)';

export default function HamletPerdeBandi({ perdeler, aktifPerde, onPerdeTikla }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${perdeler.length}, 1fr)`,
        gap: '1px',
        backgroundColor: 'var(--rule)',
        border: '1px solid var(--rule)',
      }}
    >
      {perdeler.map((p) => {
        const aktif = aktifPerde === p.perde;
        return (
          <button
            key={p.perde}
            onClick={() => onPerdeTikla?.(p.perde)}
            style={{
              padding: '1rem 0.8rem',
              backgroundColor: aktif ? 'var(--accent-bg)' : 'var(--bg-base)',
              border: 'none',
              cursor: onPerdeTikla ? 'pointer' : 'default',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              textAlign: 'center',
              transition: 'background-color 0.25s ease',
            }}
            onMouseEnter={(e) => { if (onPerdeTikla && !aktif) e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; }}
            onMouseLeave={(e) => { if (onPerdeTikla && !aktif) e.currentTarget.style.backgroundColor = 'var(--bg-base)'; }}
          >
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '1.5rem',
                color: aktif ? TON : 'var(--ink-soft)',
                lineHeight: 1,
              }}
            >
              {p.perde}
            </span>
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 300,
                fontSize: '0.7rem',
                color: aktif ? 'var(--ink)' : 'var(--ink-soft)',
                lineHeight: 1.4,
                letterSpacing: '0.02em',
              }}
            >
              {p.baslik}
            </span>
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.25em',
                color: 'var(--ink-muted)',
                textTransform: 'uppercase',
              }}
            >
              Sahne {p.sahneAraligi}
            </span>
          </button>
        );
      })}
    </div>
  );
}
