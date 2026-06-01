// components/HamletTercihKart.js
// ITC Actor's Gym — Yazarın Çerçevesi · Tercih kartı (ana liste sayfasında)
//
// Tercih durumu:
//   - boş    → "Henüz seçim yok"
//   - seçili → seçilen yorum harf(ler)i + "Aç"
// Seçili sayısı görsel olarak vurgulanır.

'use client';

import { useDil } from '../app/lib/dil';

const TON = 'var(--accent)';

export default function HamletTercihKart({ tercih, secim, kokYol }) {
  const { dil } = useDil();
  const t = dil === 'de'
    ? { ozelYorum: '+ Eigene Notiz', henuzSecim: 'Noch keine Wahl', duzenle: 'Bearbeiten →', ac: 'Öffnen →' }
    : dil === 'en'
    ? { ozelYorum: '+ Custom note', henuzSecim: 'No choice yet', duzenle: 'Edit →', ac: 'Open →' }
    : { ozelYorum: '+ Özel yorum', henuzSecim: 'Henüz seçim yok', duzenle: 'Düzenle →', ac: 'Aç →' };
  const secilmis = secim?.secimler?.length > 0 || (secim?.ozelYorum?.length || 0) > 0;
  const harfler = secim?.secimler || [];
  const ozelVar = (secim?.ozelYorum?.length || 0) > 0;
  const yol = `${kokYol}/yazarin-cercevesi/${tercih.no}`;

  return (
    <a
      href={yol}
      style={{
        border: `1px solid ${secilmis ? TON + '55' : 'var(--rule)'}`,
        backgroundColor: secilmis ? 'var(--accent-bg-deep)' : 'var(--bg-elevated)',
        padding: '1.5rem 1.8rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        textDecoration: 'none',
        color: 'var(--ink)',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = TON; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = secilmis ? TON + '55' : 'var(--rule)'; }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem', flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '2rem',
            color: TON,
            lineHeight: 1,
          }}
        >
          {tercih.no}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            color: 'var(--ink-muted)',
            textTransform: 'uppercase',
          }}
        >
          {tercih.konu}
        </span>
      </div>

      <p
        style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '1.2rem',
          color: 'var(--ink)',
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        {tercih.baslik}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
        {secilmis ? (
          <>
            {harfler.map((h) => (
              <span
                key={h}
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 300,
                  fontSize: '0.7rem',
                  color: TON,
                  letterSpacing: '0.15em',
                  padding: '0.2rem 0.6rem',
                  border: `1px solid color-mix(in srgb, ${TON} 33%, transparent)`,
                  textTransform: 'uppercase',
                }}
              >
                {h}
              </span>
            ))}
            {ozelVar && (
              <span
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 200,
                  fontSize: '0.55rem',
                  color: TON,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                }}
              >
                {t.ozelYorum}
              </span>
            )}
          </>
        ) : (
          <span
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 200,
              fontSize: '0.65rem',
              color: 'var(--ink-muted)',
              letterSpacing: '0.2em',
              fontStyle: 'italic',
            }}
          >
            {t.henuzSecim}
          </span>
        )}
      </div>

      <span
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.3em',
          color: TON,
          textTransform: 'uppercase',
          marginTop: '0.4rem',
        }}
      >
{secilmis ? t.duzenle : t.ac}
      </span>
    </a>
  );
}
