// app/antrenman/karakter/hamlet/timeline/page.js
// ITC Actor's Gym — Modül II Hamlet · Timeline · 14 Sahne
//
// Workbook s.66-85 birebir karşılığı.
// 14 sahne, etkileşimli sıcaklık, perde tema bandı, sahne detay paneli.

'use client';

import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../../../lib/supabase';
import hamlet from '../../../../../data/karakterler/hamlet';
import { sahneYansimalariniGetir } from '../../../../lib/hamlet-veri';
import HamletSahneKuresi from '../../../../../components/HamletSahneKuresi';
import HamletPerdeBandi from '../../../../../components/HamletPerdeBandi';
import HamletSahneDetay from '../../../../../components/HamletSahneDetay';
import HamletBolumGecisi from '../../../../../components/HamletBolumGecisi';

const TON = 'var(--accent)';

export default function TimelineSayfasi() {
  const [yansimalar, setYansimalar] = useState({});
  const [seciliSahneNo, setSeciliSahneNo] = useState(null);
  const [yukleniyor, setYukleniyor] = useState(true);
  const detayRef = useRef(null);
  const sahneRefs = useRef({});
  const timelineRef = useRef(null);

  const sahneler = hamlet.sahnelerWorkbook || [];
  const perdeler = hamlet.perdeTemalari || [];

  useEffect(() => {
    async function yukle() {
      const veri = await sahneYansimalariniGetir(hamlet.id);
      setYansimalar(veri);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  // Hash deep-link: #sahne-N → ilgili sahneyi seç ve scroll
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
    // Perdedeki ilk sahneye scroll
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
            href="/antrenman/karakter/hamlet"
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
            ← Hamlet
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
            Hamlet'in bedensel zinciri
          </p>
        </header>

        <p style={paragrafStili}>
          Bir karakter, sahnelerini ayrı ayrı yaşamaz. Her sahneye bir öncekinden
          bir şey taşır; her sahneden bir sonrakine bir şey bırakır. Bu zincire
          <em> içsel zaman çizgisi</em> diyoruz.
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
            "Her sahne, bir önceki sahnenin bedendeki devamıdır."
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
            Bir Sahne Kartında Ne Var?
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <AnatomiSatiri etiket="Olay">Sahnede ne oluyor — Shakespeare'in metnine sadık özet</AnatomiSatiri>
            <AnatomiSatiri etiket="İçsel">Hamlet'in o sahnede taşıdığı duygusal ton</AnatomiSatiri>
            <AnatomiSatiri etiket="Sıcaklık">1'den 10'a — soğuk, donmuş; sıcak, patlamada</AnatomiSatiri>
            <AnatomiSatiri etiket="Yük">Bir sonraki sahneye taşıdığı şey</AnatomiSatiri>
          </div>
        </div>
      </article>

      {/* ─── Perde Bandı ─── */}
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

      {/* ─── Sahne Detayı ─── */}
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
            karakterId={hamlet.id}
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
              Bir sahneye tıklayarak detaylarını gör
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
            border: `1px solid ${TON}33`,
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
            14 sahnenin bedensel zincirini gördün. Her sahnenin sıcaklığını okudun,
            kendi yorumunu işaretledin. Bu zincir bedeninde yerleşene kadar buraya
            geri dönebilirsin.
          </p>

        </section>

        <HamletBolumGecisi
          oncekiEtiket="Bölüm 2"
          oncekiBaslik="Oyun Öncesi Yaşam"
          oncekiYol="/antrenman/karakter/hamlet/oyun-oncesi-yasam"
          sonrakiEtiket="Bölüm 4"
          sonrakiBaslik="Yazarın Çerçevesi"
          sonrakiYol="/antrenman/karakter/hamlet/yazarin-cercevesi"
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
