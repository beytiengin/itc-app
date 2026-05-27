// app/antrenman/karakter/hamlet/yazarin-cercevesi/page.js
// ITC Actor's Gym — Modül II Hamlet · Yazarın Çerçevesi (5 Tercih)
//
// Ana sayfa: 5 tercih kartı + sentez sayfasına link.
// NOT: Willy versiyonunda geri linki / sentez linki / geçiş yolları elle
// "willy" stringiyle yazılmıştı. Burada hepsi KOK'a bağlandı — kaçak yok.

'use client';

import { useState, useEffect } from 'react';
import hamletRaw from '../../../../../data/karakterler/hamlet';
import { hamletIcerik } from '../../../../../data/hamlet-i18n';
import hamletI18n from '../../../../../data/hamlet-i18n';
import { useDil, ceviri } from '../../../../lib/dil';
import { tercihleriGetir } from '../../../../lib/hamlet-veri';
import HamletAltSayfaHeader from '../../../../../components/HamletAltSayfaHeader';
import HamletTercihKart from '../../../../../components/HamletTercihKart';
import HamletBolumGecisi from '../../../../../components/HamletBolumGecisi';
import SayfaIskelet from '../../../../../components/SayfaIskelet';

const TON = 'var(--accent)';
const KOK = '/antrenman/karakter/hamlet';

export default function YazarinCerceveSAnaSayfa() {
  const { dil } = useDil();
  const hamlet = hamletIcerik(dil, hamletRaw);
  const yc = ceviri(hamletI18n, dil).yazarinCercevesi;
  const [secimler, setSecimler] = useState({});
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function yukle() {
      const veri = await tercihleriGetir(hamlet.id);
      setSecimler(veri);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  const tercihler = hamlet.tercihler || [];
  const tamamlananSayisi = tercihler.filter((t) => {
    const s = secimler[t.no];
    return s && (s.secimler?.length > 0 || (s.ozelYorum?.length || 0) > 0);
  }).length;
  const hepsiTamam = tamamlananSayisi >= tercihler.length;

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
          gap: '2.4rem',
        }}
      >
        <header style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <a
            href={KOK}
            style={geriLinkStili}
            onMouseEnter={(e) => { e.currentTarget.style.color = TON; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
          >
            ← Hamlet
          </a>
          <span style={etiketStili}>{yc.etiket}</span>
          <h1 style={baslikStili}>{yc.baslik}</h1>
          <p style={altyaziStili}>{yc.altyazi}</p>
        </header>

        <p style={paragrafStili}>
          {yc.acilis}
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
            {yc.vurgu}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1rem',
            borderTop: '1px solid var(--bg-elevated)',
          }}
        >
          <span style={etiketStili}>{yc.kavsakEtiket}</span>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: hepsiTamam ? TON : 'var(--ink-muted)',
            }}
          >
            {tamamlananSayisi} / {tercihler.length} tamamlandı
          </span>
        </div>

        {/* TERCİH KARTLARI */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {tercihler.map((t) => (
            <HamletTercihKart
              key={t.no}
              tercih={t}
              secim={secimler[t.no]}
              kokYol={KOK}
            />
          ))}
        </div>

        {/* Sentez kartı */}
        {tamamlananSayisi > 0 && (
          <a
            href={`${KOK}/yazarin-cercevesi/sentez`}
            style={{
              border: `1px solid ${hepsiTamam ? TON : TON + '55'}`,
              backgroundColor: hepsiTamam ? 'var(--accent-bg-deep)' : 'var(--bg-elevated)',
              padding: '1.8rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
              textDecoration: 'none',
              color: 'var(--ink)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = TON; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = hepsiTamam ? TON : TON + '55'; }}
          >
            <span style={{ ...etiketStili, color: TON }}>
              {hepsiTamam ? 'Sentez Hazır' : 'Sentez (kısmi)'}
            </span>
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '1.5rem',
                color: 'var(--ink)',
              }}
            >
              {yc.sentezKartBaslik}
            </span>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 300,
                fontSize: '0.85rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {hepsiTamam
                ? yc.sentezKartTam
                : yc.sentezKartKismi}
            </p>
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                color: TON,
                textTransform: 'uppercase',
                marginTop: '0.4rem',
              }}
            >
              {yc.sentezKartLink}
            </span>
          </a>
        )}

        <HamletBolumGecisi
          oncekiEtiket={yc.gecisOncekiEtiket}
          oncekiBaslik={yc.gecisOncekiBaslik}
          oncekiYol={`${KOK}/timeline`}
          sonrakiEtiket={yc.gecisSonrakiEtiket}
          sonrakiBaslik={yc.gecisSonrakiBaslik}
          sonrakiYol={`${KOK}/senin-cerceven`}
        />
      </article>
    </main>
  );
}

// ─── Ortak Stiller ──────────────────────────────────────────────────────────

const geriLinkStili = {
  fontFamily: 'Jost, sans-serif',
  fontWeight: 200,
  fontSize: '0.6rem',
  letterSpacing: '0.3em',
  color: 'var(--ink-muted)',
  textTransform: 'uppercase',
  textDecoration: 'none',
  alignSelf: 'flex-start',
  transition: 'color 0.25s ease',
};

const etiketStili = {
  fontFamily: 'Jost, sans-serif',
  fontWeight: 200,
  fontSize: '0.65rem',
  letterSpacing: '0.35em',
  color: TON,
  textTransform: 'uppercase',
};

const baslikStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontWeight: 300,
  fontSize: 'clamp(2.2rem, 6vw, 3.4rem)',
  color: 'var(--ink)',
  margin: 0,
  lineHeight: 1.1,
};

const altyaziStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.1rem',
  color: 'var(--ink-muted)',
  margin: 0,
};

const paragrafStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.05rem',
  color: 'var(--ink-soft)',
  lineHeight: 1.8,
  margin: 0,
};
