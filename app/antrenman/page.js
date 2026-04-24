'use client';

export default function Antrenman() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f0ede8', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid #2a2a2a' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Actor's Gym</span>
        <a href="/" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase', textDecoration: 'none' }}>← Ana Ekran</a>
      </header>

      <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', textAlign: 'center', gap: '3rem' }}>

        <div style={{ width: '1px', height: '60px', backgroundColor: '#c9a96e', opacity: 0.4 }} />

        <div>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#c9a96e', textTransform: 'uppercase' }}>02 — Antrenman Odası</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#f0ede8', margin: '0.8rem 0 0 0', lineHeight: 1.1 }}>Actor's Gym</h1>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: '#ccc', maxWidth: '400px', lineHeight: 1.9, margin: '1.2rem auto 0 auto' }}>
            Karakterini inşa et. Somatik çapalarını at. Sahneye kendi enstrümanınla çık.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '440px' }}>

          <a href="/antrenman/karakter"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1.8rem 2rem', border: '1px solid #c9a96e', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#111'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.8rem', letterSpacing: '0.15em', color: '#f0ede8', textTransform: 'uppercase' }}>Karakter Kasası</span>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: '#c9a96e', letterSpacing: '0.1em' }}>1 aktif</span>
            </div>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#c9a96e' }}>Hamlet ve diğerleri</span>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.72rem', color: '#888', lineHeight: 1.6 }}>
              ITC metodolojisiyle inşa edilmiş karakterler. Profil, timeline, egzersizler.
            </span>
          </a>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1.8rem 2rem', border: '1px solid #1a1a1a', opacity: 0.5 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.8rem', letterSpacing: '0.15em', color: '#f0ede8', textTransform: 'uppercase' }}>AI Dış Ses Seansı</span>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: '#444', letterSpacing: '0.1em' }}>Yakında</span>
            </div>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#555' }}>Beş fazlı somatik yolculuk</span>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.72rem', color: '#444', lineHeight: 1.6 }}>
              Kalibrasyon, Beden Girişi, Navigasyon, Kronolojik Yolculuk, Deroling.
            </span>
          </div>

        </div>

        <div style={{ width: '1px', height: '60px', backgroundColor: '#c9a96e', opacity: 0.4 }} />

      </section>
    </main>
  );
}