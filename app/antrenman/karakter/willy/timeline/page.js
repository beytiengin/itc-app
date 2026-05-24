// app/antrenman/karakter/willy/timeline/page.js
// ITC Actor's Gym — Modül II Willy · Timeline · 11 Birim
//
// Generic mimari (A-2): Hamlet ile aynı yapı; fark veride (willy.js).
// Willy modu: perdeRomen akış-hattı id'sidir (I=Sızıntı, II=Patlama, III=Bedel),
// sayısal perde ile karışmaz. 11 birim, etkileşimli sıcaklık, akış-hattı bandı.

'use client';

import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../../../lib/supabase';
import willy from '../../../../../data/karakterler/willy';
import { sahneYansimalariniGetir } from '../../../../lib/hamlet-veri';
import HamletSahneKuresi from '../../../../../components/HamletSahneKuresi';
import HamletPerdeBandi from '../../../../../components/HamletPerdeBandi';
import HamletSahneDetay from '../../../../../components/HamletSahneDetay';
import HamletBolumGecisi from '../../../../../components/HamletBolumGecisi';

const TON = 'var(--accent)';
const KOK = '/antrenman/karakter/willy';

export default function TimelineSayfasi() {
  const [yansimalar, setYansimalar] = useState({});
  const [seciliSahneNo, setSeciliSahneNo] = useState(null);
  const [yukleniyor, setYukleniyor] = useState(true);
  const detayRef = useRef(null);
  const sahneRefs = useRef({});
  const timelineRef = useRef(null);

  const sahneler = willy.sahnelerWorkbook || [];
  const perdeler = willy.perdeTemalari || [];

  useEffect(() => {
    async function yukle() {
      const veri = await sahneYansimalariniGetir(willy.id);
      setYansimalar(veri);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  // Hash deep-link: #sahne-N → ilgili birimi seç ve scroll
  useEffect(() => {
    if (yukleniyor || typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (!hash || !hash.startsWith('#sahne-')) return;
    const no = parseInt(hash.slice(7), 10);
    if (Number.isInteger(no) && no >= 1 && no <= sahneler.length) {
      setTimeout(() => sahneSec(no), 200);
    }
  }, [yukleniyor]);

  function sahneSec(no) {
    setSeciliSahneNo(no);
    const el = sahneRefs.current[no];
    const c = timelineRef.current;
    if (el && c) {
      c.scrollTo({
        left: el.offsetLeft - c.clientWidth / 2 + el.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
    setTimeout(() => {
      detayRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  }

  function perdeyeGit(perdeRomen) {
    const ilkSahne = sahneler.find((s) => s.perdeRomen === perdeRomen);
    if (ilkSahne) sahneSec(ilkSahne.no);
  }

  const seciliSahne = sahneler.find((s) => s.no === seciliSahneNo) || null;
  const seciliYansima = seciliSahneNo != null ? yansimalar[seciliSahneNo] : null;
  const aktifPerde = seciliSahne?.perdeRomen ?? null;

  const sicaklikIsaretliSayisi = Object.values(yansimalar).filter((y) => y.sicaklik != null).length;
  const anladiSayisi = Object.values(yansimalar).filter((y) => y.anladi).length;

  if (yukleniyor) {
    return (
      <main style={ekranStili}>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: 'var(--ink-muted)',
            textTransform: 'uppercase',
          }}
        >
          Hazırlanıyor…
        </span>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-base)',
        color: 'var(--ink)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <KarakterHeader />

      {/* ─── Açılış ─── */}
      <article
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          padding: '3rem 2rem 1rem',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <header style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <a
            href={KOK}
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              color: 'var(--ink-muted)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              alignSelf: 'flex-start',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = TON; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
          >
            ← Willy Loman
          </a>

          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.65rem',
              letterSpacing: '0.35em',
              color: TON,
              textTransform: 'uppercase',
            }}
          >
            Modül II · Bölüm 3
          </span>

          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 6vw, 3.4rem)',
              color: 'var(--ink)',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Zaman Çizgisi
          </h1>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: 'var(--ink-muted)',
              margin: 0,
            }}
          >
            Willy'nin bedensel zinciri — üç akış hattı
          </p>
        </header>

        <p style={paragrafStili}>
          Bir karakter, sahnelerini ayrı ayrı yaşamaz. Her birime bir öncekinden
          bir şey taşır; her birimden bir sonrakine bir şey bırakır. Bu zincire
          <em> içsel zaman çizgisi</em> diyoruz. Willy'de zincir düz değildir —
          geçmiş şimdiye sızar, patlar, bedelini ödetir.
        </p>

        <div
          style={{
            borderLeft: `2px solid ${TON}`,
            padding: '0.8rem 1.4rem',
            backgroundColor: 'var(--accent-bg)',
          }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: TON,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            "Her birim, bir önceki birimin bedendeki devamıdır."
          </p>
        </div>

        {/* Sayfa anatomisi */}
        <div
          style={{
            border: '1px solid var(--rule)',
            padding: '1.4rem 1.7rem',
            backgroundColor: 'var(--bg-elevated)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.9rem',
          }}
        >
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.35em',
              color: TON,
              textTransform: 'uppercase',
            }}
          >
            Bir Birim Kartında Ne Var?
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <AnatomiSatiri etiket="Olay">Birimde ne oluyor — Miller'ın metnine sadık özet</AnatomiSatiri>
            <AnatomiSatiri etiket="İçsel">Willy'nin o birimde taşıdığı duygusal ton</AnatomiSatiri>
            <AnatomiSatiri etiket="Sıcaklık">1'den 10'a — soğuk, donmuş; sıcak, patlamada</AnatomiSatiri>
            <AnatomiSatiri etiket="Yük">Bir sonraki birime taşıdığı şey</AnatomiSatiri>
          </div>
        </div>
      </article>

      {/* ─── Akış Hattı Bandı ─── */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          padding: '0 2rem',
          boxSizing: 'border-box',
        }}
      >
        <HamletPerdeBandi
          perdeler={perdeler}
          aktifPerde={aktifPerde}
          onPerdeTikla={perdeyeGit}
        />
      </section>

      {/* ─── Görsel Timeline ─── */}
      <section style={{ padding: '0', width: '100%', marginTop: '1.5rem' }}>
        <div
          ref={timelineRef}
          style={{
            overflowX: 'auto',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            padding: '1.5rem 2rem',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'flex-start',
              minWidth: '100%',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '38px',
                left: '40px',
                right: '40px',
                height: '1px',
                backgroundColor: 'var(--rule)',
                zIndex: 0,
              }}
            />
            {sahneler.map((s) => {
              const yans = yansimalar[s.no];
              return (
                <HamletSahneKuresi
                  key={s.no}
                  sahne={s}
                  oyuncuSicaklik={yans?.sicaklik ?? null}
                  secili={seciliSahneNo === s.no}
                  onClick={() => sahneSec(s.no)}
                  innerRef={(el) => { sahneRefs.current[s.no] = el; }}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── İlerleme Rozetleri ─── */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          padding: '0 2rem',
          boxSizing: 'border-box',
          display: 'flex',
          gap: '1.2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Rozet etiket="Sıcaklık işaretlendi" deger={`${sicaklikIsaretliSayisi} / ${sahneler.length}`} />
        <Rozet etiket="Anlaşıldı"           deger={`${anladiSayisi} / ${sahneler.length}`} />
      </section>

      {/* ─── Birim Detayı ─── */}
      <section
        ref={detayRef}
        style={{
          maxWidth: '900px',
          margin: '2rem auto 0',
          width: '100%',
          padding: '0 2rem',
          boxSizing: 'border-box',
        }}
      >
        {seciliSahne ? (
          <HamletSahneDetay
            sahne={seciliSahne}
            baslangic={seciliYansima}
            toplamSahne={sahneler.length}
            karakterId={willy.id}
            karakterAd={willy.ad}
            tercihler={willy.tercihler}
            boslukSet={willy.boslukSet}
            kokYol={KOK}
            onOnceki={() => sahneSec(seciliSahne.no - 1)}
            onSonraki={() => sahneSec(seciliSahne.no + 1)}
          />
        ) : (
          <div
            style={{
              border: '1px dashed var(--rule)',
              padding: '3rem 2rem',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--ink-muted)',
              }}
            >
              Bir birime tıklayarak detaylarını gör
            </span>
          </div>
        )}
      </section>

      {/* ─── Sayfa Sonu ─── */}
      <article
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
          padding: '4rem 2rem 5rem',
          boxSizing: 'border-box',
        }}
      >
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem',
            padding: '2.4rem 2rem',
            border: `1px solid color-mix(in srgb, ${TON} 20%, transparent)`,
            backgroundColor: 'var(--accent-bg-deep)',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.35em',
              color: TON,
              textTransform: 'uppercase',
            }}
          >
            ✓ Buraya kadar
          </span>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
              margin: 0,
              maxWidth: '600px',
              alignSelf: 'center',
            }}
          >
            On bir birimin bedensel zincirini gördün — Sızıntı, Patlama, Bedel.
            Her birimin sıcaklığını okudun, kendi yorumunu işaretledin. Bu zincir
            bedeninde yerleşene kadar buraya geri dönebilirsin.
          </p>

        </section>

        <HamletBolumGecisi
          oncekiEtiket="Bölüm 2"
          oncekiBaslik="Oyun Öncesi Yaşam"
          oncekiYol={`${KOK}/oyun-oncesi-yasam`}
          sonrakiEtiket="Bölüm 4"
          sonrakiBaslik="Yazarın Çerçevesi"
          sonrakiYol={`${KOK}/yazarin-cercevesi`}
        />
      </article>
    </main>
  );
}

// ─── Yardımcı Bileşenler ────────────────────────────────────────────────────

function AnatomiSatiri({ etiket, children }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 300,
          fontSize: '0.8rem',
          color: TON,
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          minWidth: '80px',
          paddingTop: '0.1rem',
        }}
      >
        {etiket}
      </span>
      <p
        style={{
          flex: 1,
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '0.95rem',
          color: 'var(--ink-soft)',
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

function Rozet({ etiket, deger }) {
  return (
    <div
      style={{
        border: '1px solid var(--rule)',
        padding: '0.7rem 1.2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          color: 'var(--ink-muted)',
          textTransform: 'uppercase',
        }}
      >
        {etiket}
      </span>
      <span
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '1.1rem',
          color: TON,
        }}
      >
        {deger}
      </span>
    </div>
  );
}

const paragrafStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.05rem',
  color: 'var(--ink-soft)',
  lineHeight: 1.8,
  margin: 0,
};

const ekranStili = {
  minHeight: '100vh',
  backgroundColor: 'var(--bg-base)',
  color: 'var(--ink)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// ─── HEADER ─────────────────────────────────────────────────────────────────

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
          type="button"
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
          Çıkış
        </button>
      </nav>
    </header>
  );
}
