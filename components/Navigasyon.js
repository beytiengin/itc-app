// components/Navigasyon.js
// ITC Actor's Gym — Ortak (global) navigasyon.
//
// Tek doğruluk kaynağı: tüm sayfaların üst çubuğu buradan gelir (layout.js).
// Durum-duyarlı: anonim → Hakkımızda + Giriş Yap · üye → Kalibrasyon · Antrenman
// · Kulis · {ad→/profil} · Çıkış. Aktif bölüm aksan rengiyle işaretlenir.
//
// Güzelleştirme (kalibrasyonun kendi nav'ından miras alındı):
// - Marka Cormorant italik 500 (eski uppercase Jost yerine).
// - Header sticky (top:0) + bg-base.
// - Aktif sayfa accent vurgulu (usePathname).
//
// Mobil (~720px altında): yatay nav gizlenir, hamburger butonu görünür.
// Tıklayınca tam-ekran drawer açılır (linkler dikey, büyük dokunma alanı).
// ESC / overlay tıkı / link tıkı drawer'ı kapatır. aria-expanded var.

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
  const [menuAcik, setMenuAcik] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setKullanici(user || null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setKullanici(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  // ESC ile drawer kapanır (erişilebilirlik).
  useEffect(() => {
    if (!menuAcik) return;
    function onKey(e) { if (e.key === 'Escape') setMenuAcik(false); }
    document.addEventListener('keydown', onKey);
    // Drawer açıkken arka sayfa scroll engellensin.
    const oncekiOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = oncekiOverflow;
    };
  }, [menuAcik]);

  async function cikisYap() {
    try {
      await supabase.auth.signOut();
    } finally {
      if (typeof window !== 'undefined') window.location.href = '/';
    }
  }

  const navLink = {
    fontFamily: 'Jost, sans-serif',
    fontWeight: 400,
    fontSize: '0.7rem',
    letterSpacing: '0.2em',
    color: 'var(--ink-soft)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 0.25s ease',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  };

  function aktif(yol) {
    if (yol === '/') return pathname === '/';
    return pathname.startsWith(yol);
  }

  function Link({ href, children, vurgu, onClick }) {
    const renkVar = aktif(href) ? 'var(--accent)' : (vurgu ? 'var(--ink)' : 'var(--ink-soft)');
    return (
      <a
        href={href}
        onClick={onClick}
        style={{ ...navLink, color: renkVar }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = renkVar; }}
      >
        {children}
      </a>
    );
  }

  // Drawer içi büyük link (dokunma alanı min 44px).
  function MobilLink({ href, children, vurgu, onClick }) {
    const aktifMi = aktif(href);
    const renkVar = aktifMi ? 'var(--accent)' : (vurgu ? 'var(--ink)' : 'var(--ink-soft)');
    return (
      <a
        href={href}
        onClick={onClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.95rem 0',
          fontFamily: 'Jost, sans-serif',
          fontWeight: 400,
          fontSize: '0.95rem',
          letterSpacing: '0.18em',
          color: renkVar,
          textTransform: 'uppercase',
          textDecoration: 'none',
          borderBottom: '1px solid var(--rule)',
          minHeight: '44px',
        }}
      >
        {children}
      </a>
    );
  }

  function drawerKapat() { setMenuAcik(false); }

  // Üye linkler (hem masaüstü hem drawer kullanır).
  const uyeLinkler = (Bilesen, kapatOnClick) => (
    <>
      <Bilesen href="/kalibrasyon" onClick={kapatOnClick}>{t.kalibrasyon}</Bilesen>
      <Bilesen href="/antrenman/karakter" onClick={kapatOnClick}>{t.antrenman}</Bilesen>
      <Bilesen href="/kulis" onClick={kapatOnClick}>{t.kulis}</Bilesen>
    </>
  );

  const anonimLinkler = (Bilesen, kapatOnClick) => (
    <>
      <Bilesen href="/hakkimizda" onClick={kapatOnClick}>{t.hakkimizda}</Bilesen>
      <Bilesen href="/giris" vurgu onClick={kapatOnClick}>{t.giris}</Bilesen>
    </>
  );

  return (
    <>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 1.6rem',
          borderBottom: '1px solid var(--rule)',
          background: 'var(--bg-base)',
          position: 'sticky',
          top: 0,
          zIndex: 30,
          gap: '1rem',
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 500,
            fontStyle: 'italic',
            fontSize: '1.3rem',
            color: aktif('/') ? 'var(--accent)' : 'var(--ink)',
            textDecoration: 'none',
            transition: 'color 0.25s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = aktif('/') ? 'var(--accent)' : 'var(--ink)'; }}
        >
          {t.marka}
        </a>

        {/* Masaüstü nav (~720px üstü) */}
        <nav className="nav-masaustu" style={{ gap: '1.4rem', alignItems: 'center' }}>
          {kullanici === undefined ? (
            <DilToggle />
          ) : kullanici ? (
            <>
              {uyeLinkler(Link, undefined)}
              <a
                href="/profil"
                style={{ ...navLink, color: aktif('/profil') ? 'var(--accent)' : 'var(--ink-muted)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = aktif('/profil') ? 'var(--accent)' : 'var(--ink-muted)'; }}
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
              {anonimLinkler(Link, undefined)}
              <DilToggle />
            </>
          )}
        </nav>

        {/* Mobil hamburger (~720px altı) */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuAcik(true)}
          aria-expanded={menuAcik}
          aria-label={t.menuAc}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.4rem',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--ink)',
          }}
        >
          <Hamburger />
        </button>
      </header>

      {/* Drawer (mobilde her zaman var, açık/kapalı toggle) */}
      {menuAcik && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.menuAc}
          onClick={drawerKapat}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'color-mix(in srgb, var(--bg-deep) 92%, transparent)',
            zIndex: 50,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 'min(86vw, 360px)',
              maxWidth: '100%',
              background: 'var(--bg-base)',
              borderLeft: '1px solid var(--rule)',
              padding: '1.2rem 1.4rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              overflowY: 'auto',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink)' }}>{t.marka}</span>
              <button
                onClick={drawerKapat}
                aria-label={t.menuKapat}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)', padding: '0.4rem', fontSize: '1.1rem' }}
              >✕</button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {kullanici === undefined ? null : kullanici ? (
                <>
                  {uyeLinkler(MobilLink, drawerKapat)}
                  <MobilLink href="/profil" onClick={drawerKapat}>
                    {kullanici.user_metadata?.ad || kullanici.email}
                  </MobilLink>
                  <button
                    onClick={() => { drawerKapat(); cikisYap(); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.95rem 0',
                      background: 'none',
                      border: 'none',
                      borderBottom: '1px solid var(--rule)',
                      cursor: 'pointer',
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 400,
                      fontSize: '0.95rem',
                      letterSpacing: '0.18em',
                      color: 'var(--ink-muted)',
                      textTransform: 'uppercase',
                      minHeight: '44px',
                      textAlign: 'left',
                    }}
                  >
                    {t.cikis}
                  </button>
                </>
              ) : (
                anonimLinkler(MobilLink, drawerKapat)
              )}
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
              <DilToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Hamburger() {
  return (
    <span aria-hidden style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px', width: '22px' }}>
      <span style={{ height: '1.5px', background: 'currentColor', display: 'block' }} />
      <span style={{ height: '1.5px', background: 'currentColor', display: 'block' }} />
      <span style={{ height: '1.5px', background: 'currentColor', display: 'block' }} />
    </span>
  );
}
