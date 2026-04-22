export default function Antrenman() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#f0ede8',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Jost, sans-serif',
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 3rem',
        borderBottom: '1px solid #1a1a1a',
      }}>
        <span style={{
          fontWeight: 200,
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          color: '#c9a96e',
          textTransform: 'uppercase',
        }}>
          Actor's Gym
        </span>
        <a href="/" style={{
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          color: '#444',
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
          color: '#c9a96e',
          textTransform: 'uppercase',
        }}>
          02 — Antrenman Odası
        </span>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          color: '#f0ede8',
          margin: 0,
        }}>
          AI Dış Ses Seansı
        </h1>
        <p style={{
          fontWeight: 200,
          fontSize: '0.85rem',
          color: '#666',
          maxWidth: '380px',
          lineHeight: 1.8,
          margin: 0,
        }}>
          Beş fazlı somatik yolculuk. Karakterini bedende
          inşa et, çapalarını at.
        </p>
        <span style={{
          marginTop: '1rem',
          padding: '1rem 2.5rem',
          border: '1px solid #2a2a2a',
          color: '#444',
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