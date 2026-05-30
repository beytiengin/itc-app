// app/page.js
// ITC Actor's Gym — Ana Sayfa (Manifesto + Üç İlke + Üç Modül + Ekip)

'use client';

import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { getKalibrasyonProfili } from './lib/kalibrasyon';
import { useDil, ceviri } from './lib/dil';
import chromeI18n from '../data/chrome-i18n';

// ─── Paylaşılan Stil Objeleri ───────────────────────────────────────────────

const ustEtiketStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.6rem',
  fontWeight: 300,
  letterSpacing: '0.4em',
  textTransform: 'uppercase',
  color: 'var(--ink-muted)',
  marginBottom: '1rem',
};

const bolumBaslikStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: 'clamp(1.6rem, 3vw, 2rem)',
  color: 'var(--ink)',
  fontWeight: 300,
  margin: 0,
};

const ilkeKartiStili = {
  background: 'var(--bg-elevated)',
  border: '1px solid var(--rule)',
  padding: '2.5rem 2rem',
  transition: 'all 0.3s ease',
};

const ilkeNumarasiStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.5rem',
  color: 'var(--accent)',
  marginBottom: '1rem',
};

const ilkeBaslikStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.5rem',
  color: 'var(--ink)',
  fontWeight: 300,
  margin: '0 0 1rem 0',
};

const ilkeMetinStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.95rem',
  fontWeight: 300,
  lineHeight: 1.7,
  color: 'var(--ink-soft)',
  margin: 0,
};

const modulKartiStili = {
  background: 'var(--bg-elevated)',
  border: '1px solid var(--rule)',
  padding: '2rem 2.5rem',
  transition: 'all 0.3s ease',
};

const modulRomenStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.5rem',
  color: 'var(--accent)',
  minWidth: '30px',
};

const modulBaslikStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.6rem',
  color: 'var(--ink)',
  fontWeight: 300,
  margin: 0,
};

const modulAltStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.7rem',
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  color: 'var(--ink-muted)',
};

const modulMetinStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.95rem',
  fontWeight: 300,
  lineHeight: 1.7,
  color: 'var(--ink-soft)',
  margin: '0 0 0.8rem 0',
};

const modulMetaStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.7rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--ink-muted)',
};

const kisiEtiketStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.6rem',
  fontWeight: 300,
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: '0.5rem',
};

const kisiAdStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '2rem',
  color: 'var(--ink)',
  fontWeight: 300,
  margin: 0,
};

const kisiMetinStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.9rem',
  fontWeight: 300,
  lineHeight: 1.8,
  color: 'var(--ink-soft)',
};

const ctaButonStili = {
  display: 'inline-block',
  padding: '1rem 2.5rem',
  background: 'transparent',
  border: '1px solid var(--accent)',
  color: 'var(--accent)',
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.85rem',
  fontWeight: 300,
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
};

function ctaHoverIn(e) {
  e.currentTarget.style.background = 'var(--accent)';
  e.currentTarget.style.color = 'var(--bg-base)';
}
function ctaHoverOut(e) {
  e.currentTarget.style.background = 'transparent';
  e.currentTarget.style.color = 'var(--accent)';
}

// ─── Ana Sayfa Bileşeni ─────────────────────────────────────────────────────

export default function AnaSayfa() {
  const { dil } = useDil();
  const s = ceviri(chromeI18n, dil).anaSayfa;
  const [kullanici, setKullanici] = useState(null);
  const [profil, setProfil] = useState(null); // null = anonim ya da yükleniyor

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setKullanici(user || null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setKullanici(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  // Üye girince kalibrasyon profilini sessizce çek; CTA'lar durum-duyarlı.
  useEffect(() => {
    if (!kullanici) { setProfil(null); return; }
    getKalibrasyonProfili().then(setProfil);
  }, [kullanici]);

  // Akıllı CTA — dört durum: anonim · üye hicYok · üye yarım · üye tam.
  // hicYok ile "üye ama profil yok" durumlarını ctaUye (Modül I'e Git) ile karşıla.
  let ctaHref, ctaMetni, ctaKapanisMetni, kapanisBaslik, kapanisAlt;
  if (!kullanici) {
    ctaHref = '/giris';
    ctaMetni = s.ctaBasla;
    ctaKapanisMetni = s.ctaKapanisAnonim;
    kapanisBaslik = s.kapanisBaslikAnonim;
    kapanisAlt = s.kapanisAltAnonim;
  } else if (!profil || profil.hicYok) {
    ctaHref = '/kalibrasyon';
    ctaMetni = s.ctaUye;
    ctaKapanisMetni = s.ctaUye;
    kapanisBaslik = s.kapanisBaslikUye;
    kapanisAlt = s.kapanisAltUyeKalibrasyonEksik;
  } else if (!profil.tamMi) {
    ctaHref = '/kalibrasyon';
    ctaMetni = s.ctaUyeKalibrasyonDevam;
    ctaKapanisMetni = s.ctaUyeKalibrasyonDevam;
    kapanisBaslik = s.kapanisBaslikUye;
    kapanisAlt = s.kapanisAltUyeKalibrasyonEksik;
  } else {
    ctaHref = '/antrenman/karakter';
    ctaMetni = s.ctaUyeKarakter;
    ctaKapanisMetni = s.ctaUyeKarakter;
    kapanisBaslik = s.kapanisBaslikUye;
    kapanisAlt = s.kapanisAltUyeTam;
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>

      {/* Üst navigasyon artık global — components/Navigasyon.js (app/layout.js) */}

      {/* BÖLÜM 1 — KARŞILAMA (HERO) */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) 2rem 4rem',
        textAlign: 'center',
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ width: '1px', height: '60px', backgroundColor: 'var(--accent)', opacity: 0.4, margin: '0 auto 2rem' }} />

        <div style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.65rem',
          fontWeight: 300,
          color: 'var(--ink-muted)',
          letterSpacing: '0.4em',
          marginBottom: '2rem',
          textTransform: 'uppercase',
        }}>
          {s.ustEtiket}
        </div>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 300,
          color: 'var(--ink)',
          marginBottom: '1.5rem',
          marginTop: 0,
          lineHeight: 1.2,
          letterSpacing: '0.02em',
        }}>
          {s.heroBaslik1}<br />
          {s.heroBaslik2}
        </h1>

        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          fontWeight: 300,
          color: 'var(--ink-soft)',
          maxWidth: '600px',
          margin: '0 auto 3rem',
          lineHeight: 1.7,
        }}>
          {s.heroAlt}
        </p>

        <a
          href={ctaHref}
          style={ctaButonStili}
          onMouseEnter={ctaHoverIn}
          onMouseLeave={ctaHoverOut}
        >
          {ctaMetni}
        </a>
      </section>

      {/* BÖLÜM 2 — VURUŞ CÜMLESİ */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 4rem) 2rem',
        borderTop: '1px solid var(--bg-elevated)',
        borderBottom: '1px solid var(--bg-elevated)',
        textAlign: 'center',
        background: 'var(--bg-elevated)',
      }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
          fontWeight: 300,
          color: 'var(--ink)',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          {s.vurusGelenekOnce} <span style={{ color: 'var(--ink-muted)' }}>{s.vurusGelenek}</span>{s.vurusGelenekSonra}
          <br /><br />
          {s.vurusITCOnce} <span style={{ color: 'var(--accent)' }}>{s.vurusITC}</span>{s.vurusITCSonra}
        </p>
      </section>

      {/* BÖLÜM 4 — ÜÇ MODÜL */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        borderTop: '1px solid var(--bg-elevated)',
        background: 'var(--bg-elevated)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>

          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <div style={ustEtiketStili}>{s.yapiEtiket}</div>
            <h2 style={bolumBaslikStili}>{s.yapiBaslik}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Modül I — tıklanabilir */}
            <a
              href="/kalibrasyon"
              style={{ ...modulKartiStili, textDecoration: 'none', display: 'block' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
                <span style={modulRomenStili}>{s.mod1Roma}</span>
                <h3 style={modulBaslikStili}>{s.mod1Baslik}</h3>
                <span style={modulAltStili}>{s.mod1Altyazi}</span>
              </div>
              <p style={modulMetinStili}>{s.mod1Metin}</p>
              <div style={modulMetaStili}>{s.mod1Meta}</div>
            </a>

            {/* Modül II — tıklanabilir */}
            <a
              href="/antrenman/karakter"
              style={{ ...modulKartiStili, textDecoration: 'none', display: 'block' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
                <span style={modulRomenStili}>{s.mod2Roma}</span>
                <h3 style={modulBaslikStili}>{s.mod2Baslik}</h3>
                <span style={modulAltStili}>{s.mod2Altyazi}</span>
              </div>
              <p style={modulMetinStili}>{s.mod2Metin}</p>
              <div style={modulMetaStili}>{s.mod2Meta}</div>
            </a>

            {/* Modül III — pasif (Yakında) */}
            <div style={{ ...modulKartiStili, opacity: 0.6 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
                <span style={modulRomenStili}>{s.mod3Roma}</span>
                <h3 style={modulBaslikStili}>{s.mod3Baslik}</h3>
                <span style={modulAltStili}>{s.mod3Altyazi}</span>
              </div>
              <p style={modulMetinStili}>{s.mod3Metin}</p>
              <div style={modulMetaStili}>{s.mod3Meta}</div>
            </div>

          </div>
        </div>
      </section>

      {/* BÖLÜM 5 — EKİP */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <div style={ustEtiketStili}>{s.ekipEtiket}</div>
          <h2 style={bolumBaslikStili}>{s.ekipBaslik}</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
        }}>

          {/* Beyti Engin */}
          <div>
            <div style={kisiEtiketStili}>{s.beytiEtiket}</div>
            <h3 style={kisiAdStili}>{s.beytiAd}</h3>
            <p style={{ ...kisiMetinStili, marginTop: '1rem', margin: 0 }}>
              {s.beytiMetin}
            </p>
          </div>

          {/* Filiz Kaya Ataklı */}
          <div>
            <div style={kisiEtiketStili}>{s.filizEtiket}</div>
            <h3 style={kisiAdStili}>{s.filizAd}</h3>
            <p style={{ ...kisiMetinStili, marginTop: '1rem', margin: 0 }}>
              {s.filizMetin}
            </p>
          </div>

        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/hakkimizda" style={{
            display: 'inline-block',
            padding: '0.9rem 2rem',
            border: '1px solid var(--rule)',
            color: 'var(--ink)',
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 300,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.color = 'var(--ink)'; }}>
            {s.hakkindaCta}
          </a>
        </div>
      </section>

      {/* BÖLÜM 6 — KAPANIŞ CTA */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        textAlign: 'center',
        borderTop: '1px solid var(--bg-elevated)',
        background: 'var(--bg-elevated)',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>

          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.6rem, 3vw, 2rem)',
            color: 'var(--ink)',
            fontWeight: 300,
            marginBottom: '1.5rem',
            marginTop: 0,
          }}>
            {kapanisBaslik}
          </h2>

          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'var(--ink-soft)',
            marginBottom: '2.5rem',
            marginTop: 0,
          }}>
            {kapanisAlt}
          </p>

          <a
            href={ctaHref}
            style={ctaButonStili}
            onMouseEnter={ctaHoverIn}
            onMouseLeave={ctaHoverOut}
          >
            {ctaKapanisMetni}
          </a>

          <div style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--bg-elevated)',
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 300,
            color: 'var(--ink-muted)',
            letterSpacing: '0.1em',
          }}>
            <a
              href="https://beytienginstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--ink-muted)', textDecoration: 'none', borderBottom: '1px solid var(--rule)', transition: 'color 0.25s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
            >
              beytienginstudio.com
            </a>
            <span style={{ margin: '0 1rem', color: 'var(--ink-muted)' }}>·</span>
            <span>{s.footerSlogan}</span>
          </div>
        </div>
      </section>

    </main>
  );
}
