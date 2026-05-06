// components/HamletSahneKuresi.js
// ITC Actor's Gym — Timeline · Sahne küresi
//
// Sıcaklığa göre renklenmiş daire:
//   1-3 (soğuk): #6a8aa8 — soluk mavi
//   4-6 (orta):  #c9a96e — altın
//   7-10 (sıcak): #c97a4a — sıcak turuncu
// Seçili olduğunda glow + büyür.

'use client';

export function sicaklikRengi(sicaklik) {
  if (sicaklik == null) return '#3a3a3a';
  if (sicaklik <= 3) return '#6a8aa8';
  if (sicaklik <= 6) return '#c9a96e';
  return '#c97a4a';
}

export function sicaklikEtiketi(sicaklik) {
  if (sicaklik == null) return null;
  if (sicaklik <= 3) return 'Soğuk';
  if (sicaklik <= 6) return 'Orta';
  return 'Sıcak';
}

export default function HamletSahneKuresi({
  sahne,
  oyuncuSicaklik,   // null veya 1-10
  secili,
  onClick,
  innerRef,
}) {
  const gosterilenSicaklik = oyuncuSicaklik ?? sahne.onerilenSicaklik;
  const renk = sicaklikRengi(gosterilenSicaklik);
  const oyuncuVar = oyuncuSicaklik != null;

  return (
    <button
      ref={innerRef}
      onClick={onClick}
      title={`${sahne.no}. ${sahne.baslik} — sıcaklık ${gosterilenSicaklik}/10`}
      style={{
        width: '100px',
        minWidth: '100px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0.4rem 0.2rem',
        color: '#f0ede8',
        fontFamily: 'inherit',
        position: 'relative',
        zIndex: 1,
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => { if (!secili) e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { if (!secili) e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.55rem',
          letterSpacing: '0.2em',
          color: secili ? renk : '#666',
          textTransform: 'uppercase',
        }}
      >
        Sahne {sahne.no}
      </span>

      <div
        style={{
          position: 'relative',
          width: secili ? '26px' : '20px',
          height: secili ? '26px' : '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.25s ease',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: oyuncuVar ? renk : '#0a0a0a',
            border: `2px solid ${renk}`,
            boxShadow: secili ? `0 0 16px ${renk}aa` : 'none',
            transition: 'all 0.25s ease',
          }}
        />
        {oyuncuVar && (
          <div
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#0a0a0a',
              border: `1.5px solid ${renk}`,
            }}
          />
        )}
      </div>

      <span
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '0.72rem',
          color: secili ? '#f0ede8' : '#888',
          lineHeight: 1.3,
          whiteSpace: 'normal',
          textAlign: 'center',
          maxWidth: '90px',
          marginTop: '0.1rem',
        }}
      >
        {(sahne.baslik || '').length > 24 ? `${sahne.baslik.slice(0, 24)}…` : sahne.baslik}
      </span>
    </button>
  );
}
