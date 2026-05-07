// components/TopraklanmaModu.js
// ITC Actor's Gym — Topraklanma / Deroling overlay
//
// Travma seviyesi 2-3 olan antrenman tamamlandıktan sonra otomatik açılır.
// Karakter günlük hayata taşınmadan, oyuncu kendine geri döner.
// Modül III'ün ön habercisi.

'use client';

import { useState } from 'react';

export default function TopraklanmaModu({ baslik, onKapat }) {
  const [adim, setAdim] = useState(0);

  const adimlar = [
    'Şimdi bir an dur. Egzersiz bitti, ama sen hâlâ karakterin içindesin.',
    'Otur. Ayaklarını yere bas. Ağırlığını sandalyenin üzerinde hisset.',
    'Üç derin nefes al. Yavaş, derin, sayarak.',
    'Adını yüksek sesle söyle. Yaşını söyle. Bugünün tarihini söyle.',
    'Etrafına bak. Üç tane farklı renk gör. İki tane farklı ses duy. Bir tane bedensel duyum hisset.',
    'Su iç. Kalkmadan önce birkaç dakika öylece otur. Buraya tamamen geri dön.',
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: '500px',
          width: '100%',
          backgroundColor: '#0a0a0a',
          border: '1px solid #6a9b6a',
          padding: '2.5rem 2.2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              color: '#6a9b6a',
              textTransform: 'uppercase',
            }}
          >
            Topraklanma · Çıkış
          </span>
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontSize: '1.6rem',
              color: '#f0ede8',
              margin: 0,
            }}
          >
            Karakteri bırak
          </h3>
          {baslik && (
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.72rem',
                color: '#aaa',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              "{baslik}" derin bir çalışmaydı. Günlük hayata dönmeden önce kısa bir topraklanma yapıyoruz.
            </p>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: '#6a9b6a',
              textTransform: 'uppercase',
            }}
          >
            {adim + 1} / {adimlar.length}
          </span>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#2a2a2a', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: '-1px',
                height: '3px',
                width: `${((adim + 1) / adimlar.length) * 100}%`,
                backgroundColor: '#6a9b6a',
                transition: 'width 0.4s ease',
              }}
            />
          </div>
        </div>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1.05rem',
            color: '#f0ede8',
            lineHeight: 1.9,
            margin: 0,
            minHeight: '4rem',
            textAlign: 'center',
          }}
        >
          {adimlar[adim]}
        </p>

        <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center' }}>
          {adim < adimlar.length - 1 ? (
            <button
              onClick={() => setAdim(adim + 1)}
              style={{
                padding: '0.9rem 2rem',
                backgroundColor: '#6a9b6a',
                border: 'none',
                color: '#0a0a0a',
                fontFamily: 'Jost, sans-serif',
                fontWeight: 300,
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#7aab7a'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#6a9b6a'; }}
            >
              Yaptım · Devam
            </button>
          ) : (
            <button
              onClick={onKapat}
              style={{
                padding: '0.9rem 2rem',
                backgroundColor: '#6a9b6a',
                border: 'none',
                color: '#0a0a0a',
                fontFamily: 'Jost, sans-serif',
                fontWeight: 300,
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#7aab7a'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#6a9b6a'; }}
            >
              Buradayım ✓
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
