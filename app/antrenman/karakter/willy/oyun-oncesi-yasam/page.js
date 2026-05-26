// app/antrenman/karakter/willy/oyun-oncesi-yasam/page.js
// ITC Actor's Gym — Modül II Willy · Oyun Öncesi Yaşam
//
// Workbook s.58-65 birebir karşılığı.
// Sahneye çıkmadan önce ne yaşandı — Willy'nin bedeninde taşıdığı geçmiş.
// 9 ilişki + 8 olay kartı (her biri açılır/kapanır, yansıma + onay).

'use client';

import { useState, useEffect } from 'react';
import willyRaw from '../../../../../data/karakterler/willy';
import willyI18n, { willyIcerik } from '../../../../../data/willy-i18n';
import { useDil, ceviri } from '../../../../lib/dil';
import {
  olayYansimalariniGetir,
  iliskiYansimalariniGetir,
} from '../../../../lib/hamlet-veri';
import OyunOncesiOlayKart from '../../../../../components/OyunOncesiOlayKart';
import OyunOncesiIliskiKart from '../../../../../components/OyunOncesiIliskiKart';
import HamletBolumGecisi from '../../../../../components/HamletBolumGecisi';
import HamletAltSayfaHeader from '../../../../../components/HamletAltSayfaHeader';
import SayfaIskelet from '../../../../../components/SayfaIskelet';

const TON = 'var(--accent)';

export default function OyunOncesiYasamSayfasi() {
  const { dil } = useDil();
  const willy = willyIcerik(dil, willyRaw);
  const oc = ceviri(willyI18n, dil).oyunOncesi;
  const [olayYansimalari, setOlayYansimalari] = useState({});
  const [iliskiYansimalari, setIliskiYansimalari] = useState({});
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function yukle() {
      const [olaylar, iliskiler] = await Promise.all([
        olayYansimalariniGetir(willy.id),
        iliskiYansimalariniGetir(willy.id),
      ]);
      setOlayYansimalari(olaylar);
      setIliskiYansimalari(iliskiler);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  const olaylar = willy.oyunOncesi?.olaylar || [];
  const iliskiler = willy.oyunOncesi?.iliskiler || [];

  const olayIcselSayisi = Object.values(olayYansimalari).filter((y) => y.icselKabul).length;
  const iliskiTanidiSayisi = Object.values(iliskiYansimalari).filter((y) => y.tanidi).length;

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

      <article
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
          padding: '3rem 2rem 5rem',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}
      >
        {/* ─── Açılış ─── */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <a
            href="/antrenman/karakter/willy"
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
            {oc.geri}
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
            {oc.etiket}
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
            {oc.baslik}
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
            {oc.altyazi}
          </p>
        </header>

        {/* ─── Açılış metni ─── */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p style={paragrafStili}>
            {oc.acilis1}
          </p>
          <p style={paragrafStili}>
            {oc.acilis2}
          </p>

          {/* Vurgu kutusu */}
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
              {oc.vurgu}
            </p>
          </div>

          {/* Timeline çapraz atıf — ipucu */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.9rem',
              padding: '0.7rem 1.1rem',
              border: '1px dashed var(--rule)',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                color: 'var(--ink-muted)',
                textTransform: 'uppercase',
              }}
            >
              {oc.ipucuEtiket}
            </span>
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: 'var(--ink-soft)',
                flex: 1,
                minWidth: '220px',
              }}
            >
              {oc.ipucuMetin}
            </span>
            <a
              href="/antrenman/karakter/willy/timeline"
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.25em',
                color: TON,
                textTransform: 'uppercase',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'opacity 0.25s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              {oc.ipucuLink}
            </a>
          </div>

          {/* ITC Prensibi */}
          <div
            style={{
              border: '1px solid var(--rule)',
              padding: '1.6rem 1.8rem',
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
              {oc.ilkeEtiket}
            </span>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 300,
                fontSize: '0.88rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {oc.ilke1}
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {oc.ilke2pre}<em>{oc.ilke2alinti}</em>{oc.ilke2post}
            </p>
          </div>
        </section>

        {/* ─── 9 İLİŞKİ (önce) ─── */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <BolumBasligi
            etiket={oc.bolum1Etiket}
            baslik={oc.bolum1Baslik}
            altyazi={oc.bolum1Altyazi}
            ilerleme={`${iliskiTanidiSayisi} / ${iliskiler.length} ${oc.bolum1Ilerleme}`}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {iliskiler.map((iliski) => (
              <OyunOncesiIliskiKart
                key={iliski.no}
                iliski={iliski}
                karakterId={willy.id}
                baslangic={iliskiYansimalari[iliski.no]}
              />
            ))}
          </div>

          <KapanisKutusu>
            {oc.kapanis1}
          </KapanisKutusu>
        </section>

        {/* ─── 8 OLAY (sonra) ─── */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <BolumBasligi
            etiket={oc.bolum2Etiket}
            baslik={oc.bolum2Baslik}
            altyazi={oc.bolum2Altyazi}
            ilerleme={`${olayIcselSayisi} / ${olaylar.length} ${oc.bolum2Ilerleme}`}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {olaylar.map((olay) => (
              <OyunOncesiOlayKart
                key={olay.no}
                olay={olay}
                karakterId={willy.id}
                baslangic={olayYansimalari[olay.no]}
              />
            ))}
          </div>

          <KapanisKutusu>
            {oc.kapanis2}
          </KapanisKutusu>
        </section>

        {/* ─── Sayfa Sonu ─── */}
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
            {oc.sonEtiket}
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
            {oc.sonMetin}
          </p>
        </section>

        <HamletBolumGecisi
          oncekiEtiket={oc.gecisOncekiEtiket}
          oncekiBaslik={oc.gecisOncekiBaslik}
          oncekiYol="/antrenman/karakter/willy"
          sonrakiEtiket={oc.gecisSonrakiEtiket}
          sonrakiBaslik={oc.gecisSonrakiBaslik}
          sonrakiYol="/antrenman/karakter/willy/timeline"
        />
      </article>
    </main>
  );
}

// ─── YARDIMCI BİLEŞENLER ────────────────────────────────────────────────────

function BolumBasligi({ etiket, baslik, altyazi, ilerleme }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: '1rem',
          flexWrap: 'wrap',
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
          {etiket}
        </span>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            color: 'var(--ink-muted)',
            textTransform: 'uppercase',
          }}
        >
          {ilerleme}
        </span>
      </div>
      <h2
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '1.8rem',
          color: 'var(--ink)',
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        {baslik}
      </h2>
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '0.95rem',
          color: 'var(--ink-muted)',
          margin: 0,
        }}
      >
        {altyazi}
      </p>
    </div>
  );
}

function KapanisKutusu({ children }) {
  return (
    <div
      style={{
        borderLeft: `2px solid color-mix(in srgb, ${TON} 33%, transparent)`,
        padding: '0.7rem 1.3rem',
        marginTop: '0.6rem',
      }}
    >
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '1rem',
          color: 'var(--ink-soft)',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {children}
      </p>
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
