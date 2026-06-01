// app/antrenman/karakter/hamlet/timeline/page.js
// ITC Actor's Gym — Modül II Hamlet · Timeline · 14 Sahne
//
// Generic mimari (A-2): Willy ile aynı yapı; fark veride (hamlet.js).
// Hamlet modu: perdeRomen akış-hattı id'sidir (I–V). 14 sahne, 5 perde,
// etkileşimli sıcaklık, perde bandı.

'use client';

import { useState, useEffect, useRef } from 'react';
import { karakterGetir } from '../../../../lib/karakterGetir';
import { hamletIcerik } from '../../../../../data/hamlet-i18n';
import hamletI18n from '../../../../../data/hamlet-i18n';
import { useDil, ceviri } from '../../../../lib/dil';
import { sahneYansimalariniGetir } from '../../../../lib/hamlet-veri';
import HamletSahneKuresi from '../../../../../components/HamletSahneKuresi';
import HamletPerdeBandi from '../../../../../components/HamletPerdeBandi';
import HamletSahneDetay from '../../../../../components/HamletSahneDetay';
import HamletBolumGecisi from '../../../../../components/HamletBolumGecisi';
import HamletAltSayfaHeader from '../../../../../components/HamletAltSayfaHeader';
import MikroBlokKart from '../../../../../components/MikroBlokKart';
import SayfaIskelet from '../../../../../components/SayfaIskelet';

const TON = 'var(--accent)';
const KOK = '/antrenman/karakter/hamlet';

export default function TimelineSayfasi() {
  const { dil } = useDil();
  const hamlet = hamletIcerik(dil, karakterGetir('hamlet', dil));
  const tl = ceviri(hamletI18n, dil).timeline;
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
    const ilkSahne = sahneler.find((s) => s.perdeRomen === perdeRomen);
    if (ilkSahne) sahneSec(ilkSahne.no);
  }

  const seciliSahne = sahneler.find((s) => s.no === seciliSahneNo) || null;
  const seciliYansima = seciliSahneNo != null ? yansimalar[seciliSahneNo] : null;
  const aktifPerde = seciliSahne?.perdeRomen ?? null;

  const sicaklikIsaretliSayisi = Object.values(yansimalar).filter((y) => y.sicaklik != null).length;
  const anladiSayisi = Object.values(yansimalar).filter((y) => y.anladi).length;

  if (yukleniyor) {
    return <SayfaIskelet />;
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
      <HamletAltSayfaHeader />

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
              fontFamily: 'var(--font-body), sans-serif',
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
            {tl.geri}
          </a>

          <span
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 200,
              fontSize: '0.65rem',
              letterSpacing: '0.35em',
              color: TON,
              textTransform: 'uppercase',
            }}
          >
            {tl.etiket}
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 6vw, 3.4rem)',
              color: 'var(--ink)',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {tl.baslik}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: 'var(--ink-muted)',
              margin: 0,
            }}
          >
            {tl.altyazi}
          </p>
        </header>

        <MikroBlokKart veri={tl.mikroBlok} />

        <p style={paragrafStili}>
          {tl.acilis}
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
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: TON,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {tl.vurgu}
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
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.35em',
              color: TON,
              textTransform: 'uppercase',
            }}
          >
            {tl.anatomiBaslik}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <AnatomiSatiri etiket={tl.anatomiOlayEt}>{tl.anatomiOlay}</AnatomiSatiri>
            <AnatomiSatiri etiket={tl.anatomiIcselEt}>{tl.anatomiIcsel}</AnatomiSatiri>
            <AnatomiSatiri etiket={tl.anatomiSicaklikEt}>{tl.anatomiSicaklik}</AnatomiSatiri>
            <AnatomiSatiri etiket={tl.anatomiYukEt}>{tl.anatomiYuk}</AnatomiSatiri>
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
        <Rozet etiket={tl.rozetSicaklik} deger={`${sicaklikIsaretliSayisi} / ${sahneler.length}`} />
        <Rozet etiket={tl.rozetAnlasildi} deger={`${anladiSayisi} / ${sahneler.length}`} />
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
            karakterAd={hamlet.ad}
            tercihler={hamlet.tercihler}
            boslukSet={hamlet.boslukSet}
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
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--ink-muted)',
              }}
            >
              {tl.tikla}
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
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.35em',
              color: TON,
              textTransform: 'uppercase',
            }}
          >
            {tl.sonEtiket}
          </span>
          <p
            style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
              margin: 0,
              maxWidth: '600px',
              alignSelf: 'center',
            }}
          >
            {tl.sonMetin}
          </p>

        </section>

        <HamletBolumGecisi
          oncekiEtiket={tl.gecisOncekiEtiket}
          oncekiBaslik={tl.gecisOncekiBaslik}
          oncekiYol={`${KOK}/oyun-oncesi-yasam`}
          sonrakiEtiket={tl.gecisSonrakiEtiket}
          sonrakiBaslik={tl.gecisSonrakiBaslik}
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
          fontFamily: 'var(--font-body), sans-serif',
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
          fontFamily: 'var(--font-display), serif',
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
          fontFamily: 'var(--font-body), sans-serif',
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
          fontFamily: 'var(--font-display), serif',
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
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.05rem',
  color: 'var(--ink-soft)',
  lineHeight: 1.8,
  margin: 0,
};
