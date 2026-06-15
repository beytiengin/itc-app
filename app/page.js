// app/page.js
// ITC Actor's Gym — Ana Sayfa (Manifesto + Üç İlke + Üç Modül + Ekip)

'use client';

import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { getKalibrasyonProfili } from './lib/kalibrasyon';
import { enSonAktiviteGetir } from './lib/kulis';
import { useDil, ceviri } from './lib/dil';
import chromeI18n from '../data/chrome-i18n';
import DilToggle from '../components/DilToggle';

// ─── Paylaşılan Stil Objeleri ───────────────────────────────────────────────

const ustEtiketStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.6rem',
  fontWeight: 300,
  letterSpacing: '0.4em',
  textTransform: 'uppercase',
  color: 'var(--ink-muted)',
  marginBottom: '1rem',
};

const bolumBaslikStili = {
  fontFamily: 'var(--font-display), serif',
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
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.5rem',
  color: 'var(--accent)',
  marginBottom: '1rem',
};

const ilkeBaslikStili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.5rem',
  color: 'var(--ink)',
  fontWeight: 300,
  margin: '0 0 1rem 0',
};

const ilkeMetinStili = {
  fontFamily: 'var(--font-body), sans-serif',
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
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.5rem',
  color: 'var(--accent)',
  minWidth: '30px',
};

const modulBaslikStili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.6rem',
  color: 'var(--ink)',
  fontWeight: 300,
  margin: 0,
};

const modulAltStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.7rem',
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  color: 'var(--ink-muted)',
};

const modulMetinStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.95rem',
  fontWeight: 300,
  lineHeight: 1.7,
  color: 'var(--ink-soft)',
  margin: '0 0 0.8rem 0',
};

const modulMetaStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.7rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--ink-muted)',
};

const kisiEtiketStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.6rem',
  fontWeight: 300,
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: '0.5rem',
};

const kisiAdStili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '2rem',
  color: 'var(--ink)',
  fontWeight: 300,
  margin: 0,
};

const kisiMetinStili = {
  fontFamily: 'var(--font-body), sans-serif',
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
  fontFamily: 'var(--font-body), sans-serif',
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
  const tNav = ceviri(chromeI18n, dil).nav;
  const [kullanici, setKullanici] = useState(null);
  const [profil, setProfil] = useState(null); // null = anonim ya da yükleniyor
  const [sonNokta, setSonNokta] = useState(null); // {karakterId, hash} | null
  // IMZA: S1-ANA-01 — cihazda yarım kalibrasyon taslağı var mı? (anonim CTA için)
  const [kalibrasyonTaslagiVar, setKalibrasyonTaslagiVar] = useState(false);

  useEffect(() => {
    try {
      setKalibrasyonTaslagiVar(!!localStorage.getItem('itc-kalibrasyon-taslak'));
    } catch (e) {}
  }, []);

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
    if (!kullanici) { setProfil(null); setSonNokta(null); return; }
    getKalibrasyonProfili().then(setProfil);
  }, [kullanici]);

  // Tam kalibrasyonlu üye için "son nokta" derin link çek (kaldığı sahne/boşluk).
  // Yarım kalibrasyonda anlamı yok; çözülemezse fallback zinciri devreye girer.
  useEffect(() => {
    if (!profil || !profil.tamMi) { setSonNokta(null); return; }
    enSonAktiviteGetir().then(setSonNokta);
  }, [profil]);

  // Akıllı CTA — dört durum: anonim · üye hicYok · üye yarım · üye tam.
  // "tam" durumunda son nokta varsa el-yazması derin link; yoksa karakter listesi.
  let ctaHref, ctaMetni, ctaKapanisMetni, kapanisBaslik, kapanisAlt;
  if (!kullanici) {
    // IMZA: S1-ANA-02 — cihazda taslak varsa anonim CTA kalibrasyona devam eder.
    if (kalibrasyonTaslagiVar) {
      ctaHref = '/kalibrasyon';
      ctaMetni = s.ctaUyeKalibrasyonDevam;
      ctaKapanisMetni = s.ctaUyeKalibrasyonDevam;
    } else {
      // IMZA: S6-ANA-04 — misafir modu gerçek olduğu için kapı kalktı:
      // anonim "Başla →" doğrudan kalibrasyona gider; giriş, kayıt anında
      // (tam doğru anda) istenir. Nav'daki Giriş yolu aynen duruyor.
      ctaHref = '/kalibrasyon';
      ctaMetni = s.ctaBasla;
      ctaKapanisMetni = s.ctaBasla;
    }
    kapanisBaslik = s.kapanisBaslikAnonim;
    kapanisAlt = s.kapanisAltAnonim;
  } else if (!profil || profil.hicYok) {
    // IMZA: S2-ANA-03 — girişli + profili yok ama cihazda taslak var:
    // anonim başlanan kalibrasyon tek dokunuşla tamamlanır (sayfada
    // taslak geri yüklenir, "Profili gör" Supabase'e kaydeder).
    ctaHref = '/kalibrasyon';
    ctaMetni = kalibrasyonTaslagiVar ? s.ctaUyeKalibrasyonDevam : s.ctaUye;
    ctaKapanisMetni = kalibrasyonTaslagiVar ? s.ctaUyeKalibrasyonDevam : s.ctaUye;
    kapanisBaslik = s.kapanisBaslikUye;
    kapanisAlt = s.kapanisAltUyeKalibrasyonEksik;
  } else if (!profil.tamMi) {
    ctaHref = '/kalibrasyon';
    ctaMetni = s.ctaUyeKalibrasyonDevam;
    ctaKapanisMetni = s.ctaUyeKalibrasyonDevam;
    kapanisBaslik = s.kapanisBaslikUye;
    kapanisAlt = s.kapanisAltUyeKalibrasyonEksik;
  } else {
    // Tam dal: son nokta varsa derin link; yoksa karakter el-yazmasına fallback;
    // o da yoksa karakter listesi. Asla kırılmaz.
    if (sonNokta && sonNokta.karakterId) {
      ctaHref = `/antrenman/karakter/${sonNokta.karakterId}/el-yazmasi${sonNokta.hash || ''}`;
      ctaMetni = s.ctaUyeKaldiginYerden;
      ctaKapanisMetni = s.ctaUyeKaldiginYerden;
    } else {
      ctaHref = '/antrenman/karakter';
      ctaMetni = s.ctaUyeKarakter;
      ctaKapanisMetni = s.ctaUyeKarakter;
    }
    kapanisBaslik = s.kapanisBaslikUye;
    kapanisAlt = s.kapanisAltUyeTam;
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>

      {/* Üst navigasyon artık global — components/Navigasyon.js (app/layout.js) */}

      {/* DİL ALANI — uluslararası ziyaretçi için belirgin, üç dilde okunur etiket.
          Header'daki DilToggle ile aynı context'i kullanır (senkron + persist). */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.1rem',
        flexWrap: 'wrap',
        padding: '0.85rem 1.6rem',
        borderBottom: '1px solid var(--rule)',
        background: 'var(--bg-elevated)',
      }}>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '0.58rem',
          fontWeight: 500,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--ink-muted)',
        }}>
          Dil · Language · Sprache
        </span>
        <DilToggle />
      </div>

      {/* BÖLÜM 1 — KARŞILAMA (HERO YÖN 2: editöryel, sol hizalı, iki sütun) */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) 2rem 4rem',
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 'clamp(2rem, 5vw, 4rem)',
        alignItems: 'center',
      }}>
        {/* Sol sütun: üst-etiket + başlık */}
        <div>
          <div style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '0.65rem',
            fontWeight: 500,
            color: 'var(--ink-muted)',
            letterSpacing: '0.32em',
            marginBottom: '1.6rem',
            textTransform: 'uppercase',
          }}>
            {s.ustEtiket}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            fontWeight: 400,
            color: 'var(--ink)',
            margin: 0,
            lineHeight: 1.02,
            letterSpacing: '0',
          }}>
            <span style={{ display: 'block' }}>{s.heroSatir1a}</span>
            <span style={{ display: 'block' }}>{s.heroSatir1b}</span>
            <span style={{ display: 'block', color: 'var(--accent)' }}>{s.heroBaslik2}</span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
            color: 'var(--ink-soft)',
            margin: '1.4rem 0 0',
            lineHeight: 1.5,
            maxWidth: '32ch',
          }}>
            {s.heroVaat}
          </p>
        </div>

        {/* Sağ sütun: metodoloji cümlesi + CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', maxWidth: '460px' }}>
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
            fontWeight: 300,
            color: 'var(--ink-soft)',
            margin: 0,
            lineHeight: 1.75,
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
          {/* IMZA: S10-ANA-06 — ikna eden sayfa gömülü kalmasın: anonim
              ziyaretçiye birincil CTA'nın hemen altında sessiz ikincil yol. */}
          {!kullanici && (
            <a href="/nasil-calisilir" style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.8rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-soft)', textDecoration: 'none', borderBottom: '1px solid var(--rule)', paddingBottom: '0.2rem', alignSelf: 'flex-start', marginTop: '1.1rem', display: 'inline-block' }}>
              {s.ctaYontem}
            </a>
          )}
        </div>
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
          fontFamily: 'var(--font-display), serif',
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

      {/* BÖLÜM 4 — ÜÇ MODÜL: açılıştan kaldırıldı (Yön 2 + hafifletme). */}
      {/* İçerik "Nasıl Çalışır" sayfasına taşınacak; chrome-i18n stringleri  */}
      {/* (yapiEtiket, mod1Baslik..., mod3Meta vb.) korunuyor — silinmedi.    */}

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
            fontFamily: 'var(--font-body), sans-serif',
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
            fontFamily: 'var(--font-display), serif',
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
            fontFamily: 'var(--font-display), serif',
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
          {/* IMZA: S10-ANA-06 — kapanışta hâlâ ikna olmamış ziyaretçiye yöntem yolu */}
          {!kullanici && (
            <div style={{ marginTop: '1.4rem' }}>
              <a href="/nasil-calisilir" style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.8rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-soft)', textDecoration: 'none', borderBottom: '1px solid var(--rule)', paddingBottom: '0.2rem' }}>
                {s.ctaYontem}
              </a>
            </div>
          )}

          <div style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--bg-elevated)',
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '0.7rem',
            fontWeight: 300,
            color: 'var(--ink-muted)',
            letterSpacing: '0.1em',
          }}>
            <a
              href="/nasil-calisilir"
              style={{ color: 'var(--ink-muted)', textDecoration: 'none', borderBottom: '1px solid var(--rule)', transition: 'color 0.25s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
            >
              {tNav.nasilCalisilir}
            </a>
            <span style={{ margin: '0 1rem', color: 'var(--ink-muted)' }}>·</span>
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
