'use client';

export default function Kalibrasyon() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f0ede8', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid #1a1a1a' }}>
        <a href="/" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase', textDecoration: 'none' }}>Inside The Character</a>
        <a href="/" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#999', textTransform: 'uppercase', textDecoration: 'none' }}>← Ana Ekran</a>
      </header>

      <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', textAlign: 'center', gap: '3rem' }}>

        <div style={{ width: '1px', height: '60px', backgroundColor: '#c9a96e', opacity: 0.4 }} />

        <div>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#c9a96e', textTransform: 'uppercase' }}>Modül I</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#f0ede8', margin: '0.8rem 0 0 0', lineHeight: 1.1 }}>Kendini Tanı</h1>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: '#bbb', maxWidth: '440px', lineHeight: 1.9, margin: '1.2rem auto 0 auto' }}>
            Üç analiz, tek bir enstrüman profili. Sırayla veya dilediğin yerden başlayabilirsin.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '440px' }}>

          <a href="/kalibrasyon/vak"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1.8rem 2rem', border: '1px solid #2a2a2a', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.backgroundColor = '#111'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.8rem', letterSpacing: '0.15em', color: '#f0ede8', textTransform: 'uppercase' }}>Öğrenme Stili Analizi</span>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: '#999', letterSpacing: '0.1em' }}>27 soru</span>
            </div>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#c9a96e' }}>Görsel · İşitsel · Kinestetik</span>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.72rem', color: '#aaa', lineHeight: 1.6 }}>Baskın algı kanalını ve karakter inşasındaki navigasyon stilini belirler.</span>
          </a>

          <a href="/kalibrasyon/yildiz"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1.8rem 2rem', border: '1px solid #2a2a2a', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.backgroundColor = '#111'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.8rem', letterSpacing: '0.15em', color: '#f0ede8', textTransform: 'uppercase' }}>Yıldız Oyuncu Analizi</span>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: '#999', letterSpacing: '0.1em' }}>37 kriter</span>
            </div>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#c9a96e' }}>Parlayan · Gelişim · Planlama</span>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.72rem', color: '#aaa', lineHeight: 1.6 }}>Teknik donanım ve psikolojik kapasite haritanı çıkarır.</span>
          </a>

          <a href="/kalibrasyon/arketip"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1.8rem 2rem', border: '1px solid #2a2a2a', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.backgroundColor = '#111'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.8rem', letterSpacing: '0.15em', color: '#f0ede8', textTransform: 'uppercase' }}>Kişilik Tipi Analizi</span>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: '#999', letterSpacing: '0.1em' }}>12 senaryo</span>
            </div>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#c9a96e' }}>16 Enstrüman Profili</span>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.72rem', color: '#aaa', lineHeight: 1.6 }}>Jungiyen temelli sahne senaryolarıyla enstrüman arketipini belirler.</span>
          </a>

        </div>

        <div style={{ width: '1px', height: '60px', backgroundColor: '#c9a96e', opacity: 0.4 }} />

      </section>
    </main>
  );
}