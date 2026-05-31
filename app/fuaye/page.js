// app/fuaye/page.js
// DONDURULDU — vitrin scope dışı (Karar 33, 31 May 2026).
// Bu sayfa hiçbir yerden link almıyor; doğrudan URL girilirse "Yakında Açılacak"
// pasif sayfası görünür. Fikir korundu — gelecekte Modül III hazırlık alanı
// olabilir. Çift dil + global Navigasyon uyumu BİLİNÇLİ olarak yapılmadı;
// Beyti aktive edince çevirim + i18n wiring eklenir.

export default function Fuaye() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-base)',
      color: 'var(--ink)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Jost, sans-serif',
    }}>
      {/* Üst nav artık global — components/Navigasyon.js */}
      <section style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '1.5rem',
        padding: '4rem 2rem',
      }}>
        <span style={{
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.4em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
        }}>
          03 — Zihinsel Fuaye
        </span>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          color: 'var(--ink)',
          margin: 0,
        }}>
          Regülasyon & İmgeleme
        </h1>
        <p style={{
          fontWeight: 200,
          fontSize: '0.85rem',
          color: 'var(--ink-soft)',
          maxWidth: '380px',
          lineHeight: 1.8,
          margin: 0,
        }}>
          Sinir sistemini dengele. Olumlu gelecek anıları
          yarat. Sahneye hazırlan.
        </p>
        <span style={{
          marginTop: '1rem',
          padding: '1rem 2.5rem',
          border: '1px solid var(--rule)',
          color: 'var(--ink-muted)',
          fontSize: '0.7rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>
          Yakında Açılacak
        </span>
      </section>
    </main>
  );
}
