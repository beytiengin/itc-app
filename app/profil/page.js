'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useDil, ceviri } from '../lib/dil';
import chromeI18n from '../../data/chrome-i18n';
import TemaSecici from '../../components/TemaSecici';
import KalibrasyonOzeti from '../../components/KalibrasyonOzeti';

export default function Profil() {
  const { dil } = useDil();
  const t = ceviri(chromeI18n, dil).profil;
  const tNav = ceviri(chromeI18n, dil).nav;
  const [kullanici, setKullanici] = useState(null);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function verileriGetir() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setKullanici(user);
      setYukleniyor(false);
    }
    verileriGetir();
  }, []);

  if (yukleniyor) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{t.hazirlaniyor}</span>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>
      {/* Üst nav artık global — components/Navigasyon.js */}

      <section style={{ flex: 1, padding: '3rem 2rem', maxWidth: '680px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

        {/* Başlık */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--accent)', opacity: 0.4 }} />
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: 'var(--accent)', textTransform: 'uppercase' }}>{t.enstrumanProfili}</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--ink)', margin: 0 }}>
            {kullanici?.user_metadata?.ad || kullanici?.email}
          </h1>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0.4rem 0 0' }}>
            {t.nedenBurada}
          </p>
        </div>

        {/* Karar 36 — Kalibrasyon Özeti (dört harita: Beceri · VAK · MBTI · Panksepp) */}
        <KalibrasyonOzeti lang={dil} />

        {/* Görünüm */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase' }}>{t.gorunum}</span>
          </div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>
            {t.gorunumYardim}
          </p>
          <TemaSecici stil="radyo" />
        </div>

        {/* Kalibrasyon linki */}
        <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '2rem', paddingBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="/kalibrasyon" style={{ flex: 1, display: 'block', padding: '1.2rem', border: '1px solid var(--rule)', color: 'var(--ink)', textDecoration: 'none', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              {t.kalibrasyonaGit}
            </a>
            <a href="/antrenman" style={{ flex: 1, display: 'block', padding: '1.2rem', border: '1px solid var(--accent)', color: 'var(--accent)', textDecoration: 'none', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg-base)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}>
              {t.antrenmanOdasi}
            </a>
          </div>
          <a href="/kulis" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '0.8rem', color: 'var(--ink-muted)', textDecoration: 'none', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', transition: 'color 0.25s ease' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-muted)'; }}>
            {t.kulisLink}
          </a>
        </div>

      </section>
    </main>
  );
}
