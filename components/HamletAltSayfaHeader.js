// components/HamletAltSayfaHeader.js
// ITC Actor's Gym — Hamlet alt sayfaları için ortak header.

'use client';

import { supabase } from '../app/lib/supabase';

export default function HamletAltSayfaHeader() {
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
    color: '#aaa',
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
        borderBottom: '1px solid #2a2a2a',
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
          color: '#c9a96e',
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
          onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a96e'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#aaa'; }}
        >
          Kalibrasyon
        </a>
        <a
          href="/kulis"
          style={navLink}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a96e'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#aaa'; }}
        >
          Kulis
        </a>
        <a
          href="/antrenman/karakter"
          style={{ ...navLink, color: '#f0ede8' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a96e'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#f0ede8'; }}
        >
          ← Karakterler
        </a>
        <button
          onClick={cikisYap}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            ...navLink,
            color: '#666',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#f0ede8'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#666'; }}
        >
          Çıkış
        </button>
      </nav>
    </header>
  );
}
