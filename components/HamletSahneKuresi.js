// components/HamletSahneKuresi.js
// ITC Actor's Gym — Timeline · Sahne küresi
//
// Sıcaklığa göre renklenmiş daire:
//   1-3 (soğuk): var(--sicak-soguk) — soluk mavi
//   4-6 (orta):  var(--accent) — altın
//   7-10 (sıcak): var(--sicak-sicak) — sıcak turuncu
// Seçili olduğunda glow + büyür.

'use client';

import { useDil } from '../app/lib/dil';

export function sicaklikRengi(sicaklik) {
  if (sicaklik == null) return 'var(--rule)';
  if (sicaklik <= 3) return 'var(--sicak-soguk)';
  if (sicaklik <= 6) return 'var(--accent)';
  return 'var(--sicak-sicak)';
}

export function sicaklikEtiketi(sicaklik, dil) {
  if (sicaklik == null) return null;
  if (dil === 'en') {
    if (sicaklik <= 3) return 'Cold';
    if (sicaklik <= 6) return 'Medium';
    return 'Hot';
  }
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
  const { dil } = useDil();
  const sahneKelime = dil === 'en' ? 'Scene' : 'Sahne';
  const gosterilenSicaklik = oyuncuSicaklik ?? sahne.onerilenSicaklik;
  const renk = sicaklikRengi(gosterilenSicaklik);
  const oyuncuVar = oyuncuSicaklik != null;

  return (
    <button
      ref={innerRef}
      onClick={onClick}
      title={dil === 'en' ? `${sahne.no}. ${sahne.baslik} — temperature ${gosterilenSicaklik}/10` : `${sahne.no}. ${sahne.baslik} — sıcaklık ${gosterilenSicaklik}/10`}
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
        color: 'var(--ink)',
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
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 200,
          fontSize: '0.55rem',
          letterSpacing: '0.2em',
          color: secili ? renk : 'var(--ink-muted)',
          textTransform: 'uppercase',
        }}
      >
        {sahneKelime} {sahne.no}
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
            backgroundColor: oyuncuVar ? renk : 'var(--bg-base)',
            border: `2px solid ${renk}`,
            boxShadow: secili ? `0 0 16px color-mix(in srgb, ${renk} 67%, transparent)` : 'none',
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
              backgroundColor: 'var(--bg-base)',
              border: `1.5px solid ${renk}`,
            }}
          />
        )}
      </div>

      <span
        style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '0.72rem',
          color: secili ? 'var(--ink)' : 'var(--ink-muted)',
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
