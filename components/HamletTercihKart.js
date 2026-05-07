// components/HamletTercihKart.js
// ITC Actor's Gym — Yazarın Çerçevesi · Tercih kartı (ana liste sayfasında)
//
// Tercih durumu:
//   - boş    → "Henüz seçim yok"
//   - seçili → seçilen yorum harf(ler)i + "Aç"
// Seçili sayısı görsel olarak vurgulanır.

'use client';

const TON = '#c9a96e';

export default function HamletTercihKart({ tercih, secim }) {
  const secilmis = secim?.secimler?.length > 0 || (secim?.ozelYorum?.length || 0) > 0;
  const harfler = secim?.secimler || [];
  const ozelVar = (secim?.ozelYorum?.length || 0) > 0;
  const yol = `/antrenman/karakter/hamlet/yazarin-cercevesi/${tercih.no}`;

  return (
    <a
      href={yol}
      style={{
        border: `1px solid ${secilmis ? TON + '55' : '#2a2a2a'}`,
        backgroundColor: secilmis ? '#100c06' : '#0d0d0d',
        padding: '1.5rem 1.8rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        textDecoration: 'none',
        color: '#f0ede8',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = TON; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = secilmis ? TON + '55' : '#2a2a2a'; }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem', flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
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
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            color: '#888',
            textTransform: 'uppercase',
          }}
        >
          {tercih.konu}
        </span>
      </div>

      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '1.2rem',
          color: '#f0ede8',
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
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.7rem',
                  color: TON,
                  letterSpacing: '0.15em',
                  padding: '0.2rem 0.6rem',
                  border: `1px solid ${TON}55`,
                  textTransform: 'uppercase',
                }}
              >
                {h}
              </span>
            ))}
            {ozelVar && (
              <span
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 200,
                  fontSize: '0.55rem',
                  color: TON,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                }}
              >
                + Özel yorum
              </span>
            )}
          </>
        ) : (
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.65rem',
              color: '#666',
              letterSpacing: '0.2em',
              fontStyle: 'italic',
            }}
          >
            Henüz seçim yok
          </span>
        )}
      </div>

      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.3em',
          color: TON,
          textTransform: 'uppercase',
          marginTop: '0.4rem',
        }}
      >
        {secilmis ? 'Düzenle →' : 'Aç →'}
      </span>
    </a>
  );
}
