// components/HamletBoslukKart.js
// ITC Actor's Gym — Senin Çerçeven · Ana sayfada boşluk kartı

'use client';

const TON = '#7a9b7a'; // Senin Çerçeven yeşili — eski boşluk renginden devam.

export default function HamletBoslukKart({ bosluk, yazilanSayisi }) {
  const yol = `/antrenman/karakter/hamlet/senin-cerceven/${bosluk.no}`;
  const tamamenYazilmis = yazilanSayisi >= 3;
  const kismiYazilmis = yazilanSayisi > 0 && yazilanSayisi < 3;

  let borderColor = '#2a2a2a';
  if (tamamenYazilmis) borderColor = TON;
  else if (kismiYazilmis) borderColor = '#3a4a3a';

  return (
    <a
      href={yol}
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor: '#0d0d0d',
        padding: '1.5rem 1.8rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.7rem',
        textDecoration: 'none',
        color: '#f0ede8',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = TON; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = borderColor; }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem', flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '2rem',
            color: TON,
            lineHeight: 1,
          }}
        >
          {bosluk.no}
        </span>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            color: '#666',
            textTransform: 'uppercase',
          }}
        >
          ◇ Boşluk
        </span>
        {bosluk.sinif && (
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.55rem',
              letterSpacing: '0.25em',
              color: TON,
              textTransform: 'uppercase',
              padding: '0.2rem 0.55rem',
              border: `1px solid ${TON}55`,
              marginLeft: 'auto',
            }}
          >
            {bosluk.sinif}
          </span>
        )}
      </div>

      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '1.2rem',
          color: '#f0ede8',
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        {bosluk.baslik}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            color: '#888',
            textTransform: 'uppercase',
          }}
        >
          Önce
        </span>
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.85rem',
            color: '#aaa',
          }}
        >
          {bosluk.onceBaslik}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            color: '#888',
            textTransform: 'uppercase',
          }}
        >
          Sonra
        </span>
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.85rem',
            color: '#aaa',
          }}
        >
          {bosluk.sonraBaslik}
        </span>
      </div>

      <div
        style={{
          paddingTop: '0.6rem',
          borderTop: '1px solid #1a1a1a',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            color: tamamenYazilmis ? TON : '#666',
            textTransform: 'uppercase',
          }}
        >
          {yazilanSayisi} / 3 alt-soru yazıldı
        </span>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: TON,
            textTransform: 'uppercase',
          }}
        >
          Aç →
        </span>
      </div>
    </a>
  );
}
