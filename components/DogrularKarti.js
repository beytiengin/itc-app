// components/DogrularKarti.js
// ITC Actor's Gym — Değiştirilemez Doğrular
//
// Karakter sayfasının üst kısmında, kimlik altında görünür.
// Yazarın metinden gelen sabit gerçeklerini gösterir.

'use client';

export default function DogrularKarti({ dogrular, baslikGizle = false }) {
  // Kategorileri ilk görüldükleri sırayla topla
  const kategoriler = [];
  const seen = new Set();
  (dogrular || []).forEach((d) => {
    if (!seen.has(d.kategori)) {
      seen.add(d.kategori);
      kategoriler.push(d.kategori);
    }
  });

  return (
    <div
      style={{
        backgroundColor: baslikGizle ? 'transparent' : 'var(--bg-elevated)',
        border: baslikGizle ? 'none' : '1px solid var(--rule)',
        padding: baslikGizle ? '0' : '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.4rem',
      }}
    >
      {!baslikGizle && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '0.85rem',
              letterSpacing: '0.4em',
              color: 'var(--accent)',
              textTransform: 'uppercase',
            }}
          >
            Değiştirilemez Doğrular
          </span>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.78rem',
              color: 'var(--ink-muted)',
              fontStyle: 'italic',
              lineHeight: 1.6,
            }}
          >
            Yazarın belirlediği sabitler — yorum gerektirmez.
          </span>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {kategoriler.map((kat, i) => {
          const items = (dogrular || []).filter((d) => d.kategori === kat);
          return (
            <div
              key={kat}
              style={{
                display: 'flex',
                gap: '1.5rem',
                padding: '1.1rem 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--bg-elevated)',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 200,
                  fontSize: '0.55rem',
                  letterSpacing: '0.3em',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  width: '90px',
                  flexShrink: 0,
                  paddingTop: '0.25rem',
                }}
              >
                {kat}
              </span>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {items.map((d, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.95rem',
                      color: 'var(--ink)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {d.madde}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
