// components/HamletSicaklikSecici.js
// ITC Actor's Gym — Timeline · Sıcaklık seçici
//
// Oyuncu kendi yorumunu işaretler — 1-10 slider.
// Workbook önerisi gri tonda, oyuncunun seçimi renkli.

'use client';

import { sicaklikRengi, sicaklikEtiketi } from './HamletSahneKuresi';
import { useDil } from '../app/lib/dil';

export default function HamletSicaklikSecici({
  oneri,             // 1-10 (Workbook önerisi)
  oyuncuSicaklik,    // null veya 1-10
  onDegistir,        // (yeniDeger | null) => void
}) {
  const { dil } = useDil();
  const t = dil === 'en'
    ? { oneri: 'Workbook Suggestion', seninYorumun: 'Your Reading', henuz: 'Not marked yet', sifirla: 'Reset', donmus: '1 · Frozen', patlama: '10 · Eruption' }
    : { oneri: 'Workbook Önerisi', seninYorumun: 'Senin Yorumun', henuz: 'Henüz işaretlenmedi', sifirla: 'Sıfırla', donmus: '1 · Donmuş', patlama: '10 · Patlama' };
  const aktifDeger = oyuncuSicaklik ?? oneri;
  const renk = sicaklikRengi(aktifDeger);
  const oyuncuVar = oyuncuSicaklik != null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      {/* Workbook önerisi */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            color: 'var(--ink-muted)',
            textTransform: 'uppercase',
            minWidth: '110px',
          }}
        >
          {t.oneri}
        </span>
        <div
          style={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-elevated)',
            border: '1.5px solid var(--rule)',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontSize: '0.95rem',
            color: 'var(--ink-muted)',
          }}
        >
          {oneri}/10 — {sicaklikEtiketi(oneri, dil)}
        </span>
      </div>

      {/* Oyuncu seçimi */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: renk,
              textTransform: 'uppercase',
              minWidth: '110px',
            }}
          >
            {t.seninYorumun}
          </span>
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: oyuncuVar ? renk : 'var(--bg-base)',
              border: `1.5px solid ${renk}`,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '0.95rem',
              color: oyuncuVar ? 'var(--ink)' : 'var(--ink-muted)',
            }}
          >
            {oyuncuVar ? `${oyuncuSicaklik}/10 — ${sicaklikEtiketi(oyuncuSicaklik, dil)}` : t.henuz}
          </span>
          {oyuncuVar && (
            <button
              onClick={() => onDegistir(null)}
              style={{
                background: 'none',
                border: '1px solid var(--rule)',
                cursor: 'pointer',
                padding: '0.2rem 0.6rem',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                color: 'var(--ink-muted)',
                textTransform: 'uppercase',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
            >
              {t.sifirla}
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
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.55rem',
            letterSpacing: '0.15em',
            color: 'var(--ink-muted)',
            textTransform: 'uppercase',
          }}
        >
          <span>{t.donmus}</span>
          <span>5</span>
          <span>{t.patlama}</span>
        </div>
      </div>
    </div>
  );
}
