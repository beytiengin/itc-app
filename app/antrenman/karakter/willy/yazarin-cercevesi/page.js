// app/antrenman/karakter/willy/yazarin-cercevesi/page.js
// ITC Actor's Gym — Modül II Willy · Yazarın Çerçevesi (5 Tercih)
//
// Ana sayfa: 5 tercih kartı + sentez sayfasına link.
// Workbook s.86-105 birebir karşılığı.

'use client';

import { useState, useEffect } from 'react';
import willy from '../../../../../data/karakterler/willy';
import { tercihleriGetir } from '../../../../lib/hamlet-veri';
import WillyAltSayfaHeader from '../../../../../components/WillyAltSayfaHeader';
import WillyTercihKart from '../../../../../components/WillyTercihKart';
import WillyBolumGecisi from '../../../../../components/WillyBolumGecisi';

const TON = 'var(--accent)';

export default function YazarinCerceveSAnaSayfa() {
  const [secimler, setSecimler] = useState({});
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function yukle() {
      const veri = await tercihleriGetir(willy.id);
      setSecimler(veri);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  const tercihler = willy.tercihler || [];
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
      <WillyAltSayfaHeader />

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
            href="/antrenman/karakter/willy"
            style={geriLinkStili}
            onMouseEnter={(e) => { e.currentTarget.style.color = TON; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
          >
            ← Willy Loman
          </a>
          <span style={etiketStili}>Modül II · Bölüm 4</span>
          <h1 style={baslikStili}>Yazarın Çerçevesi</h1>
          <p style={altyaziStili}>İçine girdiğin oda</p>
        </header>

        <p style={paragrafStili}>
          Bu bölümde beş kritik tercih var. Her biri Willy'nin yıllardır
          tartışılan açık uçlarından biri. Her tercihte: Miller'ın metinde
          bıraktığı işaretleri okuyacaksın, olası yorumları göreceksin — ve
          seninkini işaretleyeceksin.
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
            "Doğru cevap yok. Senin Willy'nin cevabı var."
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
          <span style={etiketStili}>Beş Kavşak</span>
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
            <WillyTercihKart
              key={t.no}
              tercih={t}
              secim={secimler[t.no]}
            />
          ))}
        </div>

        {/* Sentez kartı */}
        {tamamlananSayisi > 0 && (
          <a
            href="/antrenman/karakter/willy/yazarin-cercevesi/sentez"
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
              Beş Cümle, Bir Willy
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
                ? 'Beş tercihin de hazır. Şimdi onları birleştir: senin Willy\'in.'
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

        <WillyBolumGecisi
          oncekiEtiket="Bölüm 3"
          oncekiBaslik="Zaman Çizgisi"
          oncekiYol="/antrenman/karakter/willy/timeline"
          sonrakiEtiket="Bölüm 5"
          sonrakiBaslik="Senin Çerçeven"
          sonrakiYol="/antrenman/karakter/willy/senin-cerceven"
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

const ekranStili = {
  minHeight: '100vh',
  backgroundColor: 'var(--bg-base)',
  color: 'var(--ink)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
