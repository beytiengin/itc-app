// components/YazarinCercevesi.js
// ITC Actor's Gym — ◆ Yazarın Çerçevesi (Sahne çalışmaları)
//
// Yazarın yazdığı kritik anlar — kararlar, kırılmalar, dönüşümler.
// Sadece kritikMi: true sahneleri listeler.
// Tıklayınca timeline'ı o sahneye scroll eder ve seçer.

'use client';

const TON = 'var(--accent)';
const TON_HOVER = 'var(--accent-rule)';

export default function YazarinCercevesi({ sahneler, karakterId, onSahneSec }) {
  const kritikSahneler = (sahneler || []).filter((s) => s.kritikMi === true);

  function timelineGor(sahneId) {
    if (typeof onSahneSec === 'function') {
      onSahneSec(sahneId);
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('itc-sahne-sec', { detail: { id: sahneId } }));
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.5rem',
              color: TON,
              letterSpacing: '0.05em',
            }}
          >
            ◆ Yazarın Çerçevesi
          </span>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              color: 'var(--ink-muted)',
              textTransform: 'uppercase',
            }}
          >
            {kritikSahneler.length} Sahne
          </span>
        </div>
        <p
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.85rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.7,
            margin: 0,
            fontStyle: 'italic',
          }}
        >
          Yazarın yazdığı kritik anlar — kararlar, kırılmalar, dönüşümler.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {kritikSahneler.map((sahne) => {
          const kisaDesc = sahne.desc && sahne.desc.length > 100
            ? `${sahne.desc.slice(0, 100).trim()}…`
            : sahne.desc;

          return (
            <div
              key={sahne.id}
              style={{
                border: '1px solid var(--rule)',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease',
                padding: '1.4rem 1.5rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                cursor: 'default',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = TON; e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: '1.2rem',
                  color: TON,
                  minWidth: '24px',
                  lineHeight: 1.4,
                  paddingTop: '0.1rem',
                }}
              >
                ◆
              </span>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 200,
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      color: TON,
                      textTransform: 'uppercase',
                      padding: '0.15rem 0.55rem',
                      border: `1px solid color-mix(in srgb, ${TON} 33%, transparent)`,
                    }}
                  >
                    {sahne.id}
                  </span>
                  <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.92rem', color: 'var(--ink)' }}>
                    {sahne.label}
                  </span>
                </div>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>
                  {kisaDesc}
                </p>
              </div>

              <button
                onClick={() => timelineGor(sahne.id)}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: '0.8rem',
                  color: TON,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  padding: '0.3rem 0.5rem',
                  alignSelf: 'flex-start',
                  transition: 'opacity 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                Timeline'da gör →
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
