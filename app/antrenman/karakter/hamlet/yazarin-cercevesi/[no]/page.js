// app/antrenman/karakter/hamlet/yazarin-cercevesi/[no]/page.js
// ITC Actor's Gym — Modül II Hamlet · Yazarın Çerçevesi · Tek Tercih Detayı
//
// Dinamik route: /yazarin-cercevesi/1 ... /5
// İçerik HamletTercihSecim bileşeni tarafından render edilir.
// NOT: KOK eklendi; willy yolları ona bağlandı.

'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import hamletRaw from '../../../../../../data/karakterler/hamlet';
import { hamletIcerik } from '../../../../../../data/hamlet-i18n';
import hamletI18n from '../../../../../../data/hamlet-i18n';
import { useDil, ceviri } from '../../../../../lib/dil';
import { tercihleriGetir } from '../../../../../lib/hamlet-veri';
import HamletAltSayfaHeader from '../../../../../../components/HamletAltSayfaHeader';
import HamletTercihSecim from '../../../../../../components/HamletTercihSecim';
import SayfaIskelet from '../../../../../../components/SayfaIskelet';

const TON = 'var(--accent)';
const KOK = '/antrenman/karakter/hamlet';

export default function TercihDetaySayfasi({ params }) {
  const { no } = use(params);
  const tercihNo = parseInt(no, 10);
  const router = useRouter();
  const { dil } = useDil();
  const hamlet = hamletIcerik(dil, hamletRaw);
  const sa = ceviri(hamletI18n, dil).yazarinCercevesi.altSayfa;

  const [secimler, setSecimler] = useState({});
  const [yukleniyor, setYukleniyor] = useState(true);

  const tercihler = hamlet.tercihler || [];
  const tercih = tercihler.find((t) => t.no === tercihNo);

  useEffect(() => {
    async function yukle() {
      const veri = await tercihleriGetir(hamlet.id);
      setSecimler(veri);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  // Geçersiz tercih no — ana sayfaya yönlendir
  useEffect(() => {
    if (!yukleniyor && !tercih) {
      router.replace(`${KOK}/yazarin-cercevesi`);
    }
  }, [yukleniyor, tercih, router]);

  if (yukleniyor || !tercih) {
    return <SayfaIskelet />;
  }

  const oncekiNo = tercihNo > 1 ? tercihNo - 1 : null;
  const sonrakiNo = tercihNo < tercihler.length ? tercihNo + 1 : null;

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

      <article
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
          padding: '3rem 2rem 5rem',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.4rem',
        }}
      >
        {/* Üst başlık */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a
            href={`${KOK}/yazarin-cercevesi`}
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
            {sa.geri}
          </a>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem', flexWrap: 'wrap' }}>
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
              {sa.tercihKelime} {tercih.no} · {tercih.konu}
            </span>
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.25em',
                color: 'var(--ink-muted)',
                textTransform: 'uppercase',
              }}
            >
              {tercih.no} / {tercihler.length}
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
              color: 'var(--ink)',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {tercih.baslik}
          </h1>
        </header>

        {/* SEÇİM ALANI */}
        <HamletTercihSecim
          tercih={tercih}
          baslangic={secimler[tercih.no]}
          karakterId={hamlet.id}
          kokYol={KOK}
        />

        {/* Navigasyon */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--rule)',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {oncekiNo ? (
            <a
              href={`${KOK}/yazarin-cercevesi/${oncekiNo}`}
              style={navButonStili()}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}
            >
              {sa.oncekiTercih} {oncekiNo}
            </a>
          ) : <span />}

          {sonrakiNo ? (
            <a
              href={`${KOK}/yazarin-cercevesi/${sonrakiNo}`}
              style={navButonStili()}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}
            >
              {sa.sonrakiTercih} {sonrakiNo} →
            </a>
          ) : (
            <a
              href={`${KOK}/yazarin-cercevesi/sentez`}
              style={{
                ...navButonStili(),
                color: TON,
                borderColor: TON,
              }}
            >
              {sa.sentezLink}
            </a>
          )}
        </div>
      </article>
    </main>
  );
}

function navButonStili() {
  return {
    background: 'none',
    border: '1px solid var(--rule)',
    cursor: 'pointer',
    padding: '0.7rem 1.3rem',
    fontFamily: 'Jost, sans-serif',
    fontWeight: 200,
    fontSize: '0.6rem',
    letterSpacing: '0.25em',
    color: 'var(--ink-soft)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 0.25s ease',
  };
}
