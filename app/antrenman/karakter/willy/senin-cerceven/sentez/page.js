// app/antrenman/karakter/willy/senin-cerceven/sentez/page.js
// ITC Actor's Gym — Modül II Willy · Senin Çerçeven · Sentez
//
// "Dört Boşluk, Bir Karakter" — dört boşluk bir araya gelip sahnelerin altında akan
// görünmez çizgiyi oluşturur.

'use client';

import { useState, useEffect } from 'react';
import willyRaw from '../../../../../../data/karakterler/willy';
import willyI18n, { willyIcerik } from '../../../../../../data/willy-i18n';
import { useDil, ceviri } from '../../../../../lib/dil';
import {
  altSoruYansimalariniGetir,
  boslukGenelMetinleriGetir,
} from '../../../../../lib/hamlet-veri';
import HamletAltSayfaHeader from '../../../../../../components/HamletAltSayfaHeader';
import HamletBolumGecisi from '../../../../../../components/HamletBolumGecisi';
import SayfaIskelet from '../../../../../../components/SayfaIskelet';

const TON = 'var(--onay)';
const ALTIN = 'var(--accent)';

export default function SeninCerceveSentez() {
  const { dil } = useDil();
  const willy = willyIcerik(dil, willyRaw);
  const ss = ceviri(willyI18n, dil).seninCerceven.sentez;
  const [yansimalar, setYansimalar] = useState({});
  const [genelMetinler, setGenelMetinler] = useState({});
  const [yukleniyor, setYukleniyor] = useState(true);

  const bosluklar = willy.boslukSet || [];

  useEffect(() => {
    async function yukle() {
      const [altSorular, genel] = await Promise.all([
        altSoruYansimalariniGetir(willy.id),
        boslukGenelMetinleriGetir(willy.id),
      ]);
      setYansimalar(altSorular);
      setGenelMetinler(genel);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  if (yukleniyor) {
    return <SayfaIskelet />;
  }

  function boslukOzeti(boslukNo) {
    const set = yansimalar[boslukNo] || {};
    const yazilanlar = Object.values(set).filter((y) => (y.metin?.length || 0) > 0);
    const genelVar = (genelMetinler[boslukNo]?.length || 0) > 0;

    if (yazilanlar.length === 0 && !genelVar) return { yapilmis: false };

    // Önce genel metnin ilk satırını dene; yoksa ilk alt-sorunun metnini
    const ilkSatir = genelVar
      ? genelMetinler[boslukNo].split('\n')[0]
      : (yazilanlar[0]?.metin || '').split('\n')[0];

    return {
      yapilmis: true,
      altSoruSayisi: yazilanlar.length,
      ilkSatir: ilkSatir.length > 120 ? `${ilkSatir.slice(0, 120)}…` : ilkSatir,
      genelVar,
    };
  }

  const tamamlananBosluk = bosluklar.filter((b) => boslukOzeti(b.no).yapilmis).length;
  const hepsiBaslamis = tamamlananBosluk >= bosluklar.length;

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
          gap: '2.5rem',
        }}
      >
        <header style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a
            href="/antrenman/karakter/willy/senin-cerceven"
            style={geriLink}
            onMouseEnter={(e) => { e.currentTarget.style.color = ALTIN; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
          >
            {ss.geri}
          </a>

          {hepsiBaslamis ? (
            <span style={{ ...etiket, color: TON }}>{ss.hepsiYazildi}</span>
          ) : (
            <span style={{ ...etiket, color: 'var(--ink-muted)' }}>
              {ss.kismiOnce}{tamamlananBosluk} / {bosluklar.length}{ss.kismiSonra}
            </span>
          )}

          <h1 style={baslik}>{ss.baslik}</h1>

          <p style={paragraf}>
            {hepsiBaslamis
              ? ss.girisTam
              : ss.girisKismi}
          </p>
        </header>

        {/* 4 Boşluk Özeti */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {bosluklar.map((b) => {
            const ozet = boslukOzeti(b.no);
            return (
              <div
                key={b.no}
                style={{
                  border: `1px solid ${ozet.yapilmis ? TON + '55' : 'var(--rule)'}`,
                  backgroundColor: 'var(--bg-elevated)',
                  padding: '1.4rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: '1.5rem',
                      color: TON,
                      lineHeight: 1,
                    }}
                  >
                    {b.no}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontStyle: 'italic',
                      fontSize: '1.15rem',
                      color: 'var(--ink)',
                    }}
                  >
                    {b.baslik}
                  </span>
                  <a
                    href={`/antrenman/karakter/willy/senin-cerceven/${b.no}`}
                    style={{
                      marginLeft: 'auto',
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: 200,
                      fontSize: '0.55rem',
                      letterSpacing: '0.25em',
                      color: 'var(--ink-muted)',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      transition: 'color 0.25s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = TON; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
                  >
                    {ozet.yapilmis ? ss.duzenle : ss.yaz}
                  </a>
                </div>

                {/* Sahne bağlantısı */}
                {b.sonraSahneNo && (
                  <p
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontStyle: 'italic',
                      fontSize: '0.85rem',
                      color: 'var(--ink-muted)',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {ss.sahneZeminiOnce}{b.sonraSahneNo} ({b.sonraBaslik}){ss.sahneZeminiSonra}
                  </p>
                )}

                {/* Özet metni */}
                {ozet.yapilmis ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-display), serif',
                        fontStyle: 'italic',
                        fontSize: '1rem',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.7,
                        margin: 0,
                        paddingLeft: '1rem',
                        borderLeft: `2px solid color-mix(in srgb, ${TON} 33%, transparent)`,
                      }}
                    >
                      {ozet.ilkSatir}
                    </p>
                    <span
                      style={{
                        fontFamily: 'var(--font-body), sans-serif',
                        fontWeight: 200,
                        fontSize: '0.6rem',
                        letterSpacing: '0.25em',
                        color: 'var(--ink-muted)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {ozet.altSoruSayisi}{ss.altSoruYazildi}
                      {ozet.genelVar ? ss.genelMetinVar : ''}
                    </span>
                  </div>
                ) : (
                  <p
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: 200,
                      fontSize: '0.85rem',
                      color: 'var(--ink-muted)',
                      fontStyle: 'italic',
                      margin: 0,
                    }}
                  >
                    {ss.henuzYazilmadi}{' '}
                    <a
                      href={`/antrenman/karakter/willy/senin-cerceven/${b.no}`}
                      style={{ color: TON, textDecoration: 'none' }}
                    >{ss.yazmayaBasla}</a>
                  </p>
                )}
              </div>
            );
          })}
        </section>

        {/* Sahneye Taşıma kutusu */}
        <section
          style={{
            border: `1px solid color-mix(in srgb, ${ALTIN} 20%, transparent)`,
            backgroundColor: 'var(--accent-bg-deep)',
            padding: '1.8rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <span style={{ ...etiket, color: ALTIN }}>{ss.tasimaBaslik}</span>
          <p
            style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {ss.tasima1}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '0.95rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {ss.tasima2}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: ALTIN,
              lineHeight: 1.6,
              margin: '0.5rem 0 0 0',
              paddingTop: '0.7rem',
              borderTop: `1px solid color-mix(in srgb, ${ALTIN} 20%, transparent)`,
            }}
          >
            {ss.tasimaAlinti}
          </p>
        </section>

        {/* Modül II Tamamlandı — reflektif kapanış */}
        {hepsiBaslamis && (
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '3rem 2rem',
              borderTop: `1px solid color-mix(in srgb, ${TON} 33%, transparent)`,
              textAlign: 'center',
              maxWidth: '560px',
              margin: '2rem auto 0',
            }}
          >
            <span
              style={{
                ...etiket,
                color: TON,
                fontSize: '0.7rem',
                letterSpacing: '0.45em',
              }}
            >
              {ss.modulTamam}
            </span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.6,
              }}
            >
              <span>{ss.recap1}</span>
              <span>{ss.recap2}</span>
              <span>{ss.recap3}</span>
              <span>{ss.recap4}</span>
              <span style={{ color: TON }}><em>{ss.recap5}</em></span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: '0.6rem 0 0 0',
              }}
            >
              {ss.koordinat}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display), serif',
                fontSize: '1.5rem',
                letterSpacing: '0.6em',
                color: 'var(--ink-muted)',
                margin: '0.6rem 0',
              }}
            >
              ∙ ∙ ∙
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                fontSize: '0.98rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {ss.kapanis}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 200,
                fontSize: '0.85rem',
                color: 'var(--ink-muted)',
                fontStyle: 'italic',
                margin: '0.6rem 0 0 0',
              }}
            >
              {ss.hazirMi}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {ss.modul3Davet}
            </p>
          </section>
        )}

        <HamletBolumGecisi
          oncekiEtiket={ss.gecisOnceki}
          oncekiBaslik={ss.gecisOncekiBaslik}
          oncekiYol="/antrenman/karakter/willy/senin-cerceven"
          sonrakiBaslik={ss.gecisSonraki}
          sonrakiYakinda
        />
      </article>
    </main>
  );
}

const geriLink = {
  fontFamily: 'var(--font-body), sans-serif',
  fontWeight: 200,
  fontSize: '0.6rem',
  letterSpacing: '0.3em',
  color: 'var(--ink-muted)',
  textTransform: 'uppercase',
  textDecoration: 'none',
  alignSelf: 'flex-start',
  transition: 'color 0.25s ease',
};

const etiket = {
  fontFamily: 'var(--font-body), sans-serif',
  fontWeight: 200,
  fontSize: '0.65rem',
  letterSpacing: '0.35em',
  textTransform: 'uppercase',
};

const baslik = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontWeight: 300,
  fontSize: 'clamp(2.2rem, 6vw, 3.4rem)',
  color: 'var(--ink)',
  margin: 0,
  lineHeight: 1.1,
};

const paragraf = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.05rem',
  color: 'var(--ink-soft)',
  lineHeight: 1.8,
  margin: 0,
};

const yukleniyorMetin = {
  fontFamily: 'var(--font-body), sans-serif',
  fontWeight: 200,
  fontSize: '0.7rem',
  letterSpacing: '0.3em',
  color: 'var(--ink-muted)',
  textTransform: 'uppercase',
};

const ekranStili = {
  minHeight: '100vh',
  backgroundColor: 'var(--bg-base)',
  color: 'var(--ink)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
