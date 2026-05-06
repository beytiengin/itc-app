// components/HamletBolumGecisi.js
// ITC Actor's Gym — Modül II Hamlet · Bölümler arası geçiş footer'ı
//
// Her bölüm sayfasının altında görünür. Tamamlanma şartı yok — kullanıcı
// kısmi yapsa da bir sonraki bölüme geçebilir.
//
// Modül III "yakında" durumunda — sonraki yol verilmezse "Yakında" gösterilir.

'use client';

const TON = 'var(--accent)';

export default function HamletBolumGecisi({
  oncekiEtiket,
  oncekiBaslik,
  oncekiYol,
  sonrakiEtiket,
  sonrakiBaslik,
  sonrakiYol,           // null verilirse "Yakında" gösterilir
  sonrakiYakinda = false,
}) {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        padding: '1.6rem 0 0',
        borderTop: '1px solid var(--rule)',
        flexWrap: 'wrap',
      }}
    >
      {oncekiYol ? (
        <a
          href={oncekiYol}
          style={linkStili('onceki')}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}
        >
          <span style={altEtiketStili}>← Önceki</span>
          <span style={oncekiUstStili}>
            {oncekiEtiket ? `${oncekiEtiket} · ` : ''}{oncekiBaslik}
          </span>
        </a>
      ) : <span />}

      {sonrakiYakinda || !sonrakiYol ? (
        <span
          style={{
            ...linkStili('sonraki'),
            color: 'var(--ink-muted)',
            cursor: 'default',
            textAlign: 'right',
          }}
        >
          <span style={altEtiketStili}>Sıradaki</span>
          <span style={{ ...sonrakiUstStili, color: 'var(--ink-muted)' }}>
            {sonrakiBaslik || 'Modül III · Yakında'}
          </span>
        </span>
      ) : (
        <a
          href={sonrakiYol}
          style={{ ...linkStili('sonraki'), textAlign: 'right' }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
        >
          <span style={{ ...altEtiketStili, color: TON }}>Sıradaki →</span>
          <span style={sonrakiUstStili}>
            {sonrakiEtiket ? `${sonrakiEtiket} · ` : ''}{sonrakiBaslik}
          </span>
        </a>
      )}
    </nav>
  );
}

const altEtiketStili = {
  fontFamily: 'Jost, sans-serif',
  fontWeight: 200,
  fontSize: '0.55rem',
  letterSpacing: '0.3em',
  color: 'var(--ink-muted)',
  textTransform: 'uppercase',
  display: 'block',
  marginBottom: '0.3rem',
};

const oncekiUstStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1rem',
  color: 'var(--ink-soft)',
  display: 'block',
};

const sonrakiUstStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.05rem',
  color: TON,
  display: 'block',
};

function linkStili() {
  return {
    textDecoration: 'none',
    fontFamily: 'inherit',
    flex: '1 1 220px',
    transition: 'all 0.25s ease',
  };
}
