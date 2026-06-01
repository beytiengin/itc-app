'use client';

import { useTheme } from '../app/lib/theme';
import { useDil } from '../app/lib/dil';

export default function TemaSecici({ stil = 'inline' }) {
  const { tema, temaAyarla } = useTheme();
  const { dil } = useDil();

  if (stil === 'radyo') {
    const T = {
      tr: { dark: ['Karanlık', 'Uzun seans için göz dostu'], krem: ['Krem', 'Workbook ile uyumlu, kâğıt hissi'] },
      en: { dark: ['Dark', 'Easy on the eyes for long sessions'], krem: ['Cream', 'Matches the Workbook, a paper feel'] },
      de: { dark: ['Dunkel', 'Augenschonend für lange Sitzungen'], krem: ['Creme', 'Passend zum Arbeitsbuch, ein Papiergefühl'] },
    };
    const L = T[dil] || T.tr;
    const secenekler = [
      { id: 'dark', ad: L.dark[0], alt: L.dark[1] },
      { id: 'krem', ad: L.krem[0], alt: L.krem[1] },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {secenekler.map((s) => {
          const aktif = tema === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => temaAyarla(s.id)}
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

  return (
    <button
      type="button"
      onClick={() => temaAyarla(tema === 'dark' ? 'krem' : 'dark')}
      aria-label={
        dil === 'de'
          ? (tema === 'dark' ? 'Zum Creme-Modus wechseln' : 'Zum Dunkelmodus wechseln')
          : dil === 'en'
          ? (tema === 'dark' ? 'Switch to cream mode' : 'Switch to dark mode')
          : (tema === 'dark' ? 'Krem moda geç' : 'Karanlık moda geç')
      }
      style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        border: '1px solid var(--rule)',
        background: 'transparent',
        color: 'var(--ink-muted)',
        cursor: 'pointer',
        fontSize: '0.85rem',
        lineHeight: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--accent)';
        e.currentTarget.style.borderColor = 'var(--accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--ink-muted)';
        e.currentTarget.style.borderColor = 'var(--rule)';
      }}
    >
      {tema === 'dark' ? '☾' : '☀'}
    </button>
  );
}
