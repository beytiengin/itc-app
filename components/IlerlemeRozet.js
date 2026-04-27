// components/IlerlemeRozet.js
// ITC Actor's Gym — Görsel ilerleme çubuğu rozeti
//
// İkon + etiket + dot bar + sayı (X/Y) formatında.
// Karakter listesi sayfasında ve karakter sayfası başlıklarında kullanılır.

'use client';

export default function IlerlemeRozet({ ikon, etiket, mevcut, toplam, renk = '#c9a96e' }) {
  // Toplam 12'den fazlaysa noktalar fazla olur — max 12 nokta göster
  const gosterilenToplam = Math.min(toplam, 12);
  const orantiliMevcut = toplam > 0
    ? Math.round((mevcut / toplam) * gosterilenToplam)
    : 0;

  const noktalar = [];
  for (let i = 0; i < gosterilenToplam; i++) {
    noktalar.push(
      <span
        key={i}
        style={{
          display: 'inline-block',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          marginRight: '3px',
          backgroundColor: i < orantiliMevcut ? renk : '#2a2a2a',
          transition: 'background-color 0.3s ease',
        }}
      />
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        fontFamily: 'Jost, sans-serif',
        fontSize: '0.7rem',
        fontWeight: 300,
        color: '#aaa',
        letterSpacing: '0.05em',
        flexWrap: 'wrap',
      }}
    >
      {ikon && (
        <span style={{ color: renk, fontSize: '0.75rem' }}>{ikon}</span>
      )}
      {etiket && (
        <span style={{ minWidth: '90px' }}>{etiket}</span>
      )}
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        {noktalar}
      </span>
      <span style={{ color: '#888', fontSize: '0.65rem', minWidth: '40px' }}>
        {mevcut}/{toplam}
      </span>
    </div>
  );
}
