// components/SayfaIskelet.js
// ITC Actor's Gym — Yükleme sırasında tam-ekran "Hazırlanıyor…" yerine
// sayfa iskeleti (header + 3 placeholder blok). Reviewer cilası (Karar 33 §4).

'use client';

import HamletAltSayfaHeader from './HamletAltSayfaHeader';

export default function SayfaIskelet() {
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
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
          padding: '3rem 2rem 5rem',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        <Blok height="2.6rem" width="60%" />
        <Blok height="1rem" width="40%" />
        <Blok height="9rem" />
        <Blok height="6rem" />
        <Blok height="6rem" />
      </div>
      <style>{`
        @keyframes itcPulse {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.85; }
        }
      `}</style>
    </main>
  );
}

function Blok({ height = '4rem', width = '100%' }) {
  return (
    <div
      aria-hidden
      style={{
        height,
        width,
        backgroundColor: 'var(--bg-elevated)',
        border: '1px solid var(--rule)',
        animation: 'itcPulse 1.4s ease-in-out infinite',
      }}
    />
  );
}
