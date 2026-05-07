// components/HamletPerdeBandi.js
// ITC Actor's Gym — Timeline · 5 Perde Tema Bandı

'use client';

const TON = '#c9a96e';

export default function HamletPerdeBandi({ perdeler, aktifPerde, onPerdeTikla }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${perdeler.length}, 1fr)`,
        gap: '1px',
        backgroundColor: '#2a2a2a',
        border: '1px solid #2a2a2a',
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
              backgroundColor: aktif ? '#15110a' : '#0a0a0a',
              border: 'none',
              cursor: onPerdeTikla ? 'pointer' : 'default',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              textAlign: 'center',
              transition: 'background-color 0.25s ease',
            }}
            onMouseEnter={(e) => { if (onPerdeTikla && !aktif) e.currentTarget.style.backgroundColor = '#0f0f0f'; }}
            onMouseLeave={(e) => { if (onPerdeTikla && !aktif) e.currentTarget.style.backgroundColor = '#0a0a0a'; }}
          >
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '1.5rem',
                color: aktif ? TON : '#aaa',
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
                color: aktif ? '#f0ede8' : '#bbb',
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
                color: '#666',
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
