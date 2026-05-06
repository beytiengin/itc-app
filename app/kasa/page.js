export default function Kasa() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-base)',
      color: 'var(--ink)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Jost, sans-serif',
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 3rem',
        borderBottom: '1px solid var(--bg-elevated)',
      }}>
        <span style={{
          fontWeight: 200,
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
        }}>
          Actor's Gym
        </span>
        <a href="/" style={{
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          color: 'var(--ink-muted)',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}>
          ← Ana Ekran
        </a>
      </header>
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
          04 — Karakter Kasası
        </span>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          color: 'var(--ink)',
          margin: 0,
        }}>
          The Vault
        </h1>
        <p style={{
          fontWeight: 200,
          fontSize: '0.85rem',
          color: 'var(--ink-soft)',
          maxWidth: '380px',
          lineHeight: 1.8,
          margin: 0,
        }}>
          Tüm antrenmanların, karakter haritalarının ve karakter
          tasarımlarının mahrem arşivi.
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