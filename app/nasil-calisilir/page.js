// app/nasil-calisilir/page.js
// "Nasıl Çalışılır?" — yöntem, üç modül, uygulama akışı, kimler için, SSS, davet.
//
// Açılış sayfasından kaldırılan "Üç Modül" bölümünün içeriği burada yaşar
// (mevcut chrome-i18n.js stringleri yeniden kullanılır). Yapı, görsel referans
// olarak `itc-nasil-calisilir.html`'den geldi; stiller hakkimizda.js patternini izler.
//
// Bölümler: Künye → A · Yöntem → B · Üç Modül → C · Uygulama Akışı →
// D · Kimler İçin → E · SSS → F · Davet.
//
// Kanon kilitleri: substitution yok (SSS E1 açıkça söyler), veri oyuncununki
// (E2), eğitmen izleme "Yakında" + mahremiyet vurgulu (D3, FKA dili).
// Modül III ve C6 (Yolculuk) "Yakında" rozetli.

'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useDil, ceviri } from '../lib/dil';
import chromeI18n from '../../data/chrome-i18n';

// ─── Stil sabitleri ─────────────────────────────────────────────────────────

const ustEtiketStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.6rem',
  fontWeight: 600,
  letterSpacing: '0.32em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: '0.9rem',
};

const k1Stili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
  color: 'var(--ink)',
  fontWeight: 400,
  margin: 0,
  lineHeight: 1.1,
};

const k2Stili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
  color: 'var(--ink)',
  fontWeight: 400,
  margin: 0,
  lineHeight: 1.2,
};

const girisMetinStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '1.02rem',
  fontWeight: 300,
  lineHeight: 1.75,
  color: 'var(--ink-soft)',
  margin: 0,
  maxWidth: '640px',
};

const govdeStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.98rem',
  fontWeight: 300,
  lineHeight: 1.8,
  color: 'var(--ink-soft)',
  margin: 0,
};

const tezStili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: 'clamp(1.3rem, 2.6vw, 1.7rem)',
  color: 'var(--ink)',
  fontWeight: 400,
  lineHeight: 1.55,
  margin: 0,
  maxWidth: '720px',
};

const modulKartStili = {
  background: 'var(--bg-elevated)',
  border: '1px solid var(--rule)',
  borderLeft: '3px solid var(--accent)',
  padding: '1.8rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
};

const modulKartInertStili = {
  background: 'transparent',
  border: '1px dashed var(--rule)',
  borderLeft: '3px dashed var(--rule)',
  padding: '1.8rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  opacity: 0.7,
};

const yakindaRozetStili = {
  display: 'inline-block',
  alignSelf: 'flex-start',
  marginLeft: '0.6rem',
  padding: '0.15rem 0.55rem',
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.55rem',
  fontWeight: 600,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: 'var(--ink-muted)',
  border: '1px solid var(--rule)',
  borderRadius: '999px',
};

const modulRomenStili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.4rem',
  color: 'var(--accent)',
  minWidth: '32px',
};

const modulBaslikStili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.4rem',
  color: 'var(--ink)',
  fontWeight: 400,
  margin: 0,
};

const modulAltStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.65rem',
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  color: 'var(--ink-muted)',
};

const modulMetinStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.92rem',
  fontWeight: 300,
  lineHeight: 1.75,
  color: 'var(--ink-soft)',
  margin: 0,
};

const adimSiraStili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.4rem',
  color: 'var(--accent)',
  minWidth: '36px',
  paddingTop: '0.1rem',
};

const adimAdStili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.2rem',
  color: 'var(--ink)',
  fontWeight: 400,
  margin: 0,
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.5rem',
  flexWrap: 'wrap',
};

const adimMetinStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.92rem',
  fontWeight: 300,
  lineHeight: 1.7,
  color: 'var(--ink-soft)',
  margin: '0.3rem 0 0',
};

const kimKartStili = {
  background: 'var(--bg-elevated)',
  border: '1px solid var(--rule)',
  padding: '1.5rem 1.6rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.55rem',
};

const kimAdStili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.2rem',
  color: 'var(--ink)',
  fontWeight: 400,
  margin: 0,
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.5rem',
  flexWrap: 'wrap',
};

const kimMetinStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.92rem',
  fontWeight: 300,
  lineHeight: 1.75,
  color: 'var(--ink-soft)',
  margin: 0,
};

const sssKartStili = {
  borderLeft: '2px solid var(--rule)',
  paddingLeft: '1.4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
};

const sssQStili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.15rem',
  color: 'var(--ink)',
  fontWeight: 400,
  margin: 0,
  lineHeight: 1.5,
};

const sssAStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.95rem',
  fontWeight: 300,
  lineHeight: 1.75,
  color: 'var(--ink-soft)',
  margin: 0,
};

const ctaButonStili = {
  display: 'inline-block',
  padding: '1rem 2.2rem',
  background: 'transparent',
  border: '1px solid var(--accent)',
  color: 'var(--accent)',
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.82rem',
  fontWeight: 400,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
};

function YakindaRozet({ metin }) {
  return <span style={yakindaRozetStili}>{metin}</span>;
}

export default function NasilCalisilir() {
  const { dil } = useDil();
  const t = ceviri(chromeI18n, dil).nasilCalisilir;
  const anaSayfa = ceviri(chromeI18n, dil).anaSayfa;

  // Üye ise CTA kalibrasyona; anonim ise giriş'e (basit, akıllı CTA sonra).
  const [kullanici, setKullanici] = useState(null);
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setKullanici(user || null));
  }, []);

  const ctaHref = kullanici ? '/kalibrasyon' : '/giris';

  // C bölümü 6 adım, son adım Yakında.
  const adimlar = [
    { ad: t.ncC1Ad, metin: t.ncC1Metin },
    { ad: t.ncC2Ad, metin: t.ncC2Metin },
    { ad: t.ncC3Ad, metin: t.ncC3Metin },
    { ad: t.ncC4Ad, metin: t.ncC4Metin },
    { ad: t.ncC5Ad, metin: t.ncC5Metin },
    { ad: t.ncC6Ad, metin: t.ncC6Metin, yakinda: true },
  ];

  // D bölümü 4 kart, D3 yakında + mahremiyet vurgulu.
  const kimler = [
    { ad: t.ncD1Ad, metin: t.ncD1Metin },
    { ad: t.ncD2Ad, metin: t.ncD2Metin },
    { ad: t.ncD3Ad, metin: t.ncD3Metin, yakinda: true },
    { ad: t.ncD4Ad, metin: t.ncD4Metin },
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)' }}>
      <section style={{
        maxWidth: '880px',
        margin: '0 auto',
        padding: 'clamp(3rem, 7vw, 5rem) 1.8rem 5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(2.5rem, 6vw, 4rem)',
      }}>

        {/* Künye */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '1.8rem', borderBottom: '1px solid var(--rule)' }}>
          <div style={ustEtiketStili}>{t.ncEtiket}</div>
          <h1 style={k1Stili}>{t.ncBaslik}</h1>
          <p style={girisMetinStili}>{t.ncGiris}</p>
        </header>

        {/* A · Yöntem — vurus* mevcut stringlerini tez olarak kullanıyoruz */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={ustEtiketStili}>{t.ncAEtiket}</div>
          <p style={tezStili}>
            {anaSayfa.vurusGelenekOnce}
            <span style={{ color: 'var(--ink-muted)' }}>{anaSayfa.vurusGelenek}</span>
            {anaSayfa.vurusGelenekSonra}
            <br /><br />
            {anaSayfa.vurusITCOnce}
            <span style={{ color: 'var(--accent)' }}>{anaSayfa.vurusITC}</span>
            {anaSayfa.vurusITCSonra}
          </p>
          <p style={govdeStili}>{t.ncAMetin}</p>
        </section>

        {/* B · Üç Modül — mevcut mod1/2/3* stringleri */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={ustEtiketStili}>{t.ncBEtiket}</div>
          <h2 style={k2Stili}>{t.ncBBaslik}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <ModulKart roma={anaSayfa.mod1Roma} baslik={anaSayfa.mod1Baslik} altyazi={anaSayfa.mod1Altyazi} metin={anaSayfa.mod1Metin} meta={anaSayfa.mod1Meta} />
            <ModulKart roma={anaSayfa.mod2Roma} baslik={anaSayfa.mod2Baslik} altyazi={anaSayfa.mod2Altyazi} metin={anaSayfa.mod2Metin} meta={anaSayfa.mod2Meta} />
            <ModulKart roma={anaSayfa.mod3Roma} baslik={anaSayfa.mod3Baslik} altyazi={anaSayfa.mod3Altyazi} metin={anaSayfa.mod3Metin} meta={anaSayfa.mod3Meta} yakinda yakindaMetni={t.ncYakinda} />
          </div>
        </section>

        {/* C · Uygulama Akışı — 6 adım */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={ustEtiketStili}>{t.ncCEtiket}</div>
          <h2 style={k2Stili}>{t.ncCBaslik}</h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {adimlar.map((a, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem' }}>
                <span style={adimSiraStili}>{i + 1}.</span>
                <div style={{ flex: 1 }}>
                  <h3 style={adimAdStili}>
                    {a.ad}
                    {a.yakinda && <YakindaRozet metin={t.ncYakinda} />}
                  </h3>
                  <p style={adimMetinStili}>{a.metin}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* D · Kimler İçin — 4 kart, geniş ekranda 2 sütun */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={ustEtiketStili}>{t.ncDEtiket}</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
          }}>
            {kimler.map((k, i) => (
              <div key={i} style={kimKartStili}>
                <h3 style={kimAdStili}>
                  {k.ad}
                  {k.yakinda && <YakindaRozet metin={t.ncYakinda} />}
                </h3>
                <p style={kimMetinStili}>{k.metin}</p>
              </div>
            ))}
          </div>
        </section>

        {/* E · Sık Sorulanlar — 2 soru-cevap */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={ustEtiketStili}>{t.ncEEtiket}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
            <div style={sssKartStili}>
              <h3 style={sssQStili}>{t.ncE1Q}</h3>
              <p style={sssAStili}>{t.ncE1A}</p>
            </div>
            <div style={sssKartStili}>
              <h3 style={sssQStili}>{t.ncE2Q}</h3>
              <p style={sssAStili}>{t.ncE2A}</p>
            </div>
          </div>
        </section>

        {/* F · Davet */}
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'flex-start',
          paddingTop: '2rem',
          borderTop: '1px solid var(--rule)',
        }}>
          <p style={{ ...tezStili, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)' }}>{t.ncFCumle}</p>
          <a
            href={ctaHref}
            style={ctaButonStili}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg-base)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
          >
            {anaSayfa.ctaBasla}
          </a>
        </section>

      </section>
    </main>
  );
}

function ModulKart({ roma, baslik, altyazi, metin, meta, yakinda, yakindaMetni }) {
  return (
    <div style={yakinda ? modulKartInertStili : modulKartStili}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
        <span style={modulRomenStili}>{roma}</span>
        <h3 style={modulBaslikStili}>{baslik}</h3>
        <span style={modulAltStili}>{altyazi}</span>
        {yakinda && <YakindaRozet metin={yakindaMetni} />}
      </div>
      <p style={modulMetinStili}>{metin}</p>
      <div style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
        {meta}
      </div>
    </div>
  );
}
