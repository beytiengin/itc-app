// components/Navigasyon.js
// ITC Actor's Gym — Ortak (global) navigasyon.
//
// Tek doğruluk kaynağı: tüm sayfaların üst çubuğu buradan gelir (layout.js'e bağlı).
// Durum-duyarlı: anonim → Hakkımızda + Giriş Yap · üye → Kalibrasyon · Antrenman ·
// Kulis · Profil · {ad} · Çıkış. Aktif bölüm aksan rengiyle işaretlenir ("neredeyim").
//
// Stil deseni HamletAltSayfaHeader + ana ekran header'ından birebir alındı
// (Jost/uppercase linkler, hover → --accent, DilToggle, --rule alt çizgi).
// Karar 35: 'Jost'/'Cormorant' font-family referansları korunur (variable üstünden Inter/Fraunces).

'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { supabase } from '../app/lib/supabase';
import { useDil, ceviri } from '../app/lib/dil';
import chromeI18n from '../data/chrome-i18n';
import DilToggle from './DilToggle';

export default function Navigasyon() {
  const { dil } = useDil();
  const t = ceviri(chromeI18n, dil).nav;
  const pathname = usePathname() || '/';

  // undefined = auth henüz çözülmedi (flash önleme); null = anonim; obje = üye.
  const [kullanici, setKullanici] = useState(undefined);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setKullanici(user || null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setKullanici(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

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
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  };

  // Aktif bölüm: yol bu önekle başlıyorsa aksan rengi.
  function aktif(yol) {
    if (yol === '/') return pathname === '/';
    return pathname.startsWith(yol);
  }

  function Link({ href, children, vurgu }) {
    const renkVar = aktif(href) ? 'var(--accent)' : (vurgu ? 'var(--ink)' : 'var(--ink-soft)');
    return (
      <a
        href={href}
        style={{ ...navLink, color: renkVar }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = renkVar; }}
      >
        {children}
      </a>
    );
  }

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
        {t.marka}
      </a>

      <nav style={{ display: 'flex', gap: '1.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
        {/* Auth çözülene kadar yalnız dil değişimi — flash/yanıp sönme önlenir. */}
        {kullanici === undefined ? (
          <DilToggle />
        ) : kullanici ? (
          <>
            <Link href="/kalibrasyon">{t.kalibrasyon}</Link>
            <Link href="/antrenman/karakter">{t.antrenman}</Link>
            <Link href="/kulis">{t.kulis}</Link>
            <a
              href="/profil"
              style={{ ...navLink, color: 'var(--ink-muted)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
            >
              {kullanici.user_metadata?.ad || kullanici.email}
            </a>
            <button
              onClick={cikisYap}
              style={{ ...navLink, color: 'var(--ink-muted)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
            >
              {t.cikis}
            </button>
            <DilToggle />
          </>
        ) : (
          <>
            <Link href="/hakkimizda">{t.hakkimizda}</Link>
            <Link href="/giris" vurgu>{t.giris}</Link>
            <DilToggle />
          </>
        )}
      </nav>
    </header>
  );
}
