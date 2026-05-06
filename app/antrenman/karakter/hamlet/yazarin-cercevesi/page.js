// app/antrenman/karakter/hamlet/yazarin-cercevesi/page.js
// ITC Actor's Gym — Modül II Hamlet · Yazarın Çerçevesi (5 Tercih)
//
// Ana sayfa: 5 tercih kartı + sentez sayfasına link.
// Workbook s.86-105 birebir karşılığı.

'use client';

import { useState, useEffect } from 'react';
import hamlet from '../../../../../data/karakterler/hamlet';
import { tercihleriGetir } from '../../../../lib/hamlet-veri';
import HamletAltSayfaHeader from '../../../../../components/HamletAltSayfaHeader';
import HamletTercihKart from '../../../../../components/HamletTercihKart';
import HamletBolumGecisi from '../../../../../components/HamletBolumGecisi';

const TON = '#c9a96e';

export default function YazarinCerceveSAnaSayfa() {
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
    return (
      <main style={ekranStili}>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: '#888',
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
        backgroundColor: '#0a0a0a',
        color: '#f0ede8',
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
            href="/antrenman/karakter/hamlet"
            style={geriLinkStili}
            onMouseEnter={(e) => { e.currentTarget.style.color = TON; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}
          >
            ← Hamlet
          </a>
          <span style={etiketStili}>Modül II · Bölüm 4</span>
          <h1 style={baslikStili}>Yazarın Çerçevesi</h1>
          <p style={altyaziStili}>İçine girdiğin oda</p>
        </header>

        <p style={paragrafStili}>
          Bu bölümde beş kritik tercih var. Her biri Hamlet'in dört yüzyıldır
          tartışılan açık uçlarından biri. Her tercihte: Shakespeare'in metinde
          bıraktığı işaretleri okuyacaksın, olası yorumları göreceksin — ve
          seninkini işaretleyeceksin.
        </p>

        <div
          style={{
            borderLeft: `2px solid ${TON}`,
            padding: '0.8rem 1.4rem',
            backgroundColor: '#15110a',
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
            "Doğru cevap yok. Senin Hamlet'inin cevabı var."
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1rem',
            borderTop: '1px solid #1a1a1a',
          }}
        >
          <span style={etiketStili}>Beş Kavşak</span>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: hepsiTamam ? TON : '#888',
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
            />
          ))}
        </div>

        {/* Sentez kartı */}
        {tamamlananSayisi > 0 && (
          <a
            href="/antrenman/karakter/hamlet/yazarin-cercevesi/sentez"
            style={{
              border: `1px solid ${hepsiTamam ? TON : TON + '55'}`,
              backgroundColor: hepsiTamam ? '#100c06' : '#0d0d0d',
              padding: '1.8rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
              textDecoration: 'none',
              color: '#f0ede8',
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
                color: '#f0ede8',
              }}
            >
              Beş Cümle, Bir Hamlet
            </span>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 300,
                fontSize: '0.85rem',
                color: '#bbb',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {hepsiTamam
                ? 'Beş tercihin de hazır. Şimdi onları birleştir: senin Hamlet\'in.'
                : 'Şu ana kadar yaptığın seçimleri görebilirsin. Hepsini tamamladığında tam sentez açılır.'}
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
              Sentezi Aç →
            </span>
          </a>
        )}

        <HamletBolumGecisi
          oncekiEtiket="Bölüm 3"
          oncekiBaslik="Sahne Timeline"
          oncekiYol="/antrenman/karakter/hamlet/timeline"
          sonrakiEtiket="Bölüm 5"
          sonrakiBaslik="Senin Çerçeven"
          sonrakiYol="/antrenman/karakter/hamlet/senin-cerceven"
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
  color: '#888',
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
  color: '#f0ede8',
  margin: 0,
  lineHeight: 1.1,
};

const altyaziStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.1rem',
  color: '#888',
  margin: 0,
};

const paragrafStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.05rem',
  color: '#ddd',
  lineHeight: 1.8,
  margin: 0,
};

const ekranStili = {
  minHeight: '100vh',
  backgroundColor: '#0a0a0a',
  color: '#f0ede8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
