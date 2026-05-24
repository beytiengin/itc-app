'use client';

import { useLang } from '../app/lib/lang';

// Dil toggle bileşeni. stil='inline' (default) küçük TR/EN segmented düğme,
// stil='radyo' profil sayfasında kullanılabilecek dikey radyo seçimi.
export default function DilSecici({ stil = 'inline' }) {
  const { lang, langAyarla } = useLang();

  if (stil === 'radyo') {
    const secenekler = [
      { id: 'tr', ad: 'Türkçe', alt: 'Varsayılan dil — tüm içerik' },
      { id: 'en', ad: 'English', alt: 'Showcase preview (Willy)' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {secenekler.map((s) => {
          const aktif = lang === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => langAyarla(s.id)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '1.1rem 1.4rem',
                border: aktif ? '1px solid var(--accent)' : '1px solid var(--rule)',
                background: aktif ? 'var(--bg-elevated)' : 'transparent',
                color: 'var(--ink)',
                textAlign: 'left',
                cursor: 'pointer',
                fontFamily: 'var(--font-body), Jost, sans-serif',
                transition: 'all 0.25s ease',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 300, color: aktif ? 'var(--accent)' : 'var(--ink)' }}>{s.ad}</span>
                <span style={{ fontSize: '0.7rem', fontWeight: 200, color: 'var(--ink-muted)', letterSpacing: '0.05em' }}>{s.alt}</span>
              </div>
              <span
                aria-hidden
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: aktif ? '1px solid var(--accent)' : '1px solid var(--ink-muted)',
                  background: aktif ? 'var(--accent)' : 'transparent',
                  flexShrink: 0,
                  marginTop: '4px',
                  transition: 'all 0.25s ease',
                }}
              />
            </button>
          );
        })}
      </div>
    );
  }

  // Inline: küçük segmented TR | EN düğmesi (header navi tarzı)
  const segStili = (aktif) => ({
    fontFamily: 'Jost, sans-serif',
    fontWeight: aktif ? 300 : 200,
    fontSize: '0.6rem',
    letterSpacing: '0.25em',
    color: aktif ? 'var(--accent)' : 'var(--ink-muted)',
    textTransform: 'uppercase',
    background: 'none',
    border: 'none',
    padding: '0.2rem 0.4rem',
    cursor: aktif ? 'default' : 'pointer',
    transition: 'color 0.2s ease',
  });

  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
      role="group"
      aria-label="Dil seçimi"
    >
      <button
        type="button"
        onClick={() => lang !== 'tr' && langAyarla('tr')}
        aria-pressed={lang === 'tr'}
        aria-label="Türkçe'ye geç"
        style={segStili(lang === 'tr')}
        onMouseEnter={(e) => { if (lang !== 'tr') e.currentTarget.style.color = 'var(--ink)'; }}
        onMouseLeave={(e) => { if (lang !== 'tr') e.currentTarget.style.color = 'var(--ink-muted)'; }}
      >
        TR
      </button>
      <span aria-hidden style={{ color: 'var(--ink-muted)', fontSize: '0.6rem' }}>/</span>
      <button
        type="button"
        onClick={() => lang !== 'en' && langAyarla('en')}
        aria-pressed={lang === 'en'}
        aria-label="Switch to English"
        style={segStili(lang === 'en')}
        onMouseEnter={(e) => { if (lang !== 'en') e.currentTarget.style.color = 'var(--ink)'; }}
        onMouseLeave={(e) => { if (lang !== 'en') e.currentTarget.style.color = 'var(--ink-muted)'; }}
      >
        EN
      </button>
    </span>
  );
}
