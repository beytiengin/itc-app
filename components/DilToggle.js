// components/DilToggle.js
// ITC Actor's Gym — Header için TR | EN dil geçişi. Minimal, segmentli.

'use client';

import { useDil } from '../app/lib/dil';

export default function DilToggle() {
  const { dil, dilAyarla } = useDil();

  const seg = (kod, etiket) => {
    const aktif = dil === kod;
    return (
      <button
        key={kod}
        onClick={() => dilAyarla(kod)}
        aria-pressed={aktif}
        style={{
          background: 'none',
          border: 'none',
          cursor: aktif ? 'default' : 'pointer',
          padding: '0 0.15rem',
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: aktif ? 'var(--accent)' : 'var(--ink-muted)',
          transition: 'color 0.25s ease',
        }}
        onMouseEnter={(e) => { if (!aktif) e.currentTarget.style.color = 'var(--ink)'; }}
        onMouseLeave={(e) => { if (!aktif) e.currentTarget.style.color = 'var(--ink-muted)'; }}
      >
        {etiket}
      </button>
    );
  };

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.15rem' }}>
      {seg('tr', 'TR')}
      <span style={{ color: 'var(--rule)', fontSize: '0.6rem' }}>·</span>
      {seg('en', 'EN')}
    </span>
  );
}
