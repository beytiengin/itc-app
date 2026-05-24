// components/HamletAltSayfaHeader.js
// ITC Actor's Gym — Hamlet alt sayfaları için ortak header.

'use client';

import { supabase } from '../app/lib/supabase';
import { useDil, ceviri } from '../app/lib/dil';
import willyI18n from '../data/willy-i18n';
import DilToggle from './DilToggle';

export default function HamletAltSayfaHeader() {
  const { dil } = useDil();
  const t = ceviri(willyI18n, dil).nav;

  async function cikisYap() {
    try {
      await supabase.auth.signOut();
    } finally {
      if (typeof window !== 'undefined') window.location.href = '/';
    }
  }

  const navLink = {
    fontFamily: 'Jost, sans-serif',
    fontWeight: 200,
    fontSize: '0.6rem',
    letterSpacing: '0.25em',
    color: 'var(--ink-soft)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 0.25s ease',
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.6rem 2rem',
        borderBottom: '1px solid var(--rule)',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}
      >
        Inside The Character
      </a>
      <nav style={{ display: 'flex', gap: '1.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <a
          href="/kalibrasyon"
          style={navLink}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}
        >
          {t.kalibrasyon}
        </a>
        <a
          href="/kulis"
          style={navLink}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}
        >
          {t.kulis}
        </a>
        <a
          href="/antrenman/karakter"
          style={{ ...navLink, color: 'var(--ink)' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
        >
          {t.karakterler}
        </a>
        <button
          onClick={cikisYap}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            ...navLink,
            color: 'var(--ink-muted)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
        >
          {t.cikis}
        </button>
        <DilToggle />
      </nav>
    </header>
  );
}
