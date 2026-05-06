// components/HamletSicaklikSecici.js
// ITC Actor's Gym — Timeline · Sıcaklık seçici
//
// Oyuncu kendi yorumunu işaretler — 1-10 slider.
// Workbook önerisi gri tonda, oyuncunun seçimi renkli.

'use client';

import { sicaklikRengi, sicaklikEtiketi } from './HamletSahneKuresi';

export default function HamletSicaklikSecici({
  oneri,             // 1-10 (Workbook önerisi)
  oyuncuSicaklik,    // null veya 1-10
  onDegistir,        // (yeniDeger | null) => void
}) {
  const aktifDeger = oyuncuSicaklik ?? oneri;
  const renk = sicaklikRengi(aktifDeger);
  const oyuncuVar = oyuncuSicaklik != null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      {/* Workbook önerisi */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            color: '#888',
            textTransform: 'uppercase',
            minWidth: '110px',
          }}
        >
          Workbook Önerisi
        </span>
        <div
          style={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            backgroundColor: '#1a1a1a',
            border: '1.5px solid #555',
          }}
        />
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.95rem',
            color: '#888',
          }}
        >
          {oneri}/10 — {sicaklikEtiketi(oneri)}
        </span>
      </div>

      {/* Oyuncu seçimi */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: renk,
              textTransform: 'uppercase',
              minWidth: '110px',
            }}
          >
            Senin Yorumun
          </span>
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: oyuncuVar ? renk : '#0a0a0a',
              border: `1.5px solid ${renk}`,
            }}
          />
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.95rem',
              color: oyuncuVar ? '#f0ede8' : '#666',
            }}
          >
            {oyuncuVar ? `${oyuncuSicaklik}/10 — ${sicaklikEtiketi(oyuncuSicaklik)}` : 'Henüz işaretlenmedi'}
          </span>
          {oyuncuVar && (
            <button
              onClick={() => onDegistir(null)}
              style={{
                background: 'none',
                border: '1px solid #2a2a2a',
                cursor: 'pointer',
                padding: '0.2rem 0.6rem',
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                color: '#888',
                textTransform: 'uppercase',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#f0ede8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}
            >
              Sıfırla
            </button>
          )}
        </div>

        <input
          type="range"
          min={1}
          max={10}
          step={1}
          value={oyuncuSicaklik ?? oneri}
          onChange={(e) => onDegistir(parseInt(e.target.value, 10))}
          style={{
            width: '100%',
            accentColor: renk,
            cursor: 'pointer',
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.55rem',
            letterSpacing: '0.15em',
            color: '#666',
            textTransform: 'uppercase',
          }}
        >
          <span>1 · Donmuş</span>
          <span>5</span>
          <span>10 · Patlama</span>
        </div>
      </div>
    </div>
  );
}
