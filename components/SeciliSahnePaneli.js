// components/SeciliSahnePaneli.js
// ITC Actor's Gym — Timeline'da seçilen sahne için detay paneli
//
// Şimdilik sadece bilgi gösterimi. Sahne yansıması yazma özelliği
// gelecek refactor'larda eklenir (sahne_yansimalari tablosu).

'use client';

const TON = 'var(--accent)';

export default function SeciliSahnePaneli({ sahne }) {
  if (!sahne) {
    return (
      <div
        style={{
          border: '1px dashed var(--rule)',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.95rem',
            color: 'var(--ink-muted)',
          }}
        >
          Bir sahneye tıklayarak detaylarını gör
        </span>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-elevated)',
        border: '1px solid var(--rule)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.4rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: TON,
            textTransform: 'uppercase',
            padding: '0.2rem 0.6rem',
            border: `1px solid ${TON}55`,
          }}
        >
          {sahne.id}
        </span>
        <h3
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '1.4rem',
            color: 'var(--ink)',
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {sahne.label}
        </h3>
      </div>

      {sahne.kritikMi && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.7rem',
            padding: '0.7rem 1rem',
            backgroundColor: 'var(--accent-bg)',
            border: `1px solid ${TON}33`,
          }}
        >
          <span style={{ color: TON, fontSize: '0.95rem' }}>⬥</span>
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
            Karar Anı
          </span>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.85rem',
              color: 'var(--ink-soft)',
              flex: 1,
            }}
          >
            Bu sahne kritik bir karar veya dönüşüm anı.
          </span>
        </div>
      )}

      {sahne.desc && (
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          {sahne.desc}
        </p>
      )}

      {sahne.icDurum && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: TON,
              textTransform: 'uppercase',
            }}
          >
            Karakterin İç Durumu
          </span>
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.88rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {sahne.icDurum}
          </p>
        </div>
      )}

      {sahne.bosluk && (
        <div
          style={{
            paddingTop: '1rem',
            borderTop: '1px solid var(--bg-elevated)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: 'var(--onay)',
              textTransform: 'uppercase',
            }}
          >
            Boşluk Sorusu
          </span>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.95rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {sahne.bosluk}
          </p>
        </div>
      )}
    </div>
  );
}
