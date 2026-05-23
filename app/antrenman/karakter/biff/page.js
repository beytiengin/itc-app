// app/antrenman/karakter/biff/page.js
// ITC Actor's Gym — Biff Loman karakter sayfası (yeni mimari)

'use client';

import { useState, useEffect } from 'react';
import { getKalibrasyonProfili } from '../../../lib/kalibrasyon';
import { supabase } from '../../../lib/supabase';
import biff from '../../../../data/karakterler/biff';
import DogrularKarti from '../../../../components/DogrularKarti';
import TimelineYatay from '../../../../components/TimelineYatay';
import SeciliSahnePaneli from '../../../../components/SeciliSahnePaneli';
import YazarinCercevesi from '../../../../components/YazarinCercevesi';
import SeninCerceven from '../../../../components/SeninCerceven';
import ZihinselAntrenman from '../../../../components/ZihinselAntrenman';

export default function BiffSayfasi() {
  const [kalibrasyon, setKalibrasyon] = useState(null);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [seciliSahneId, setSeciliSahneId] = useState(null);

  useEffect(() => {
    async function yukle() {
      const profil = await getKalibrasyonProfili();
      setKalibrasyon(profil);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  useEffect(() => {
    if (yukleniyor || typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (!hash) return;
    setTimeout(() => {
      if (hash === '#bosluklar') {
        document.getElementById('bosluklar')?.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#antrenman' || hash === '#egzersizler') {
        document.getElementById('antrenman')?.scrollIntoView({ behavior: 'smooth' });
      } else if (hash.startsWith('#bosluk-') || hash.startsWith('#sahne-')) {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  }, [yukleniyor]);

  const seciliSahne = (biff.sahneler || []).find((s) => s.id === seciliSahneId) || null;
  const vakBaskini = kalibrasyon?.vak?.baskin ? String(kalibrasyon.vak.baskin).toLowerCase() : null;

  if (yukleniyor) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>Hazırlanıyor…</span>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>
      <KarakterHeader />

      <section style={{ padding: '3rem 2rem 2rem', maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(2.2rem, 6vw, 3.2rem)', color: 'var(--ink)', margin: 0, lineHeight: 1.1, letterSpacing: '0.02em' }}>
            {biff.ad}
          </h1>
          <div style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.8rem', color: 'var(--ink-muted)', letterSpacing: '0.12em' }}>
            {biff.yazar} · {biff.donem} · {biff.tip} · {biff.tur}
          </div>
          {biff.ozet && (
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--ink-soft)', maxWidth: '700px', lineHeight: 1.7, margin: '0.8rem 0 0 0' }}>
              {biff.ozet}
            </p>
          )}
        </div>
      </section>

      <section style={{ padding: '0 2rem', maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <DogrularKarti dogrular={biff.dogrular} />
      </section>

      <section style={{ padding: '3rem 2rem 0.5rem', maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 300, fontSize: '1.5rem', color: 'var(--accent)', letterSpacing: '0.05em' }}>
            Timeline
          </span>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>
            Karakterin yaşam çizgisi — sahnelere tıklayarak detayları gör.
          </span>
        </div>
      </section>

      <section style={{ padding: '0', width: '100%' }}>
        <TimelineYatay
          sahneler={biff.sahneler}
          seciliSahneId={seciliSahneId}
          onSahneSec={setSeciliSahneId}
        />
      </section>

      <section style={{ padding: '0 2rem 1rem', maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <SeciliSahnePaneli sahne={seciliSahne} />
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid var(--bg-elevated)', margin: '3rem 2rem 0', maxWidth: '1100px', width: 'calc(100% - 4rem)', alignSelf: 'center' }} />

      <section style={{ padding: '3rem 2rem 5rem', maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        <div id="sahneler">
          <YazarinCercevesi
            sahneler={biff.sahneler}
            karakterId={biff.id}
            onSahneSec={setSeciliSahneId}
          />
        </div>

        <div id="bosluklar">
          <SeninCerceven
            bosluklar={biff.bosluklar}
            kalibrasyon={kalibrasyon}
            karakterId={biff.id}
          />
        </div>

        <div id="antrenman">
          <ZihinselAntrenman
            antrenmanlar={biff.antrenmanlar || []}
            karakterId={biff.id}
            vakBaskini={vakBaskini}
          />
        </div>
      </section>
    </main>
  );
}

function KarakterHeader() {
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
        <a href="/kalibrasyon" style={navLink}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}>
          Kalibrasyon
        </a>
        <a href="/kulis" style={navLink}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}>
          Kulis
        </a>
        <a href="/antrenman/karakter" style={{ ...navLink, color: 'var(--ink)' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}>
          ← Karakterler
        </a>
        <button
          onClick={cikisYap}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, ...navLink, color: 'var(--ink-muted)' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
        >
          Çıkış
        </button>
      </nav>
    </header>
  );
}
