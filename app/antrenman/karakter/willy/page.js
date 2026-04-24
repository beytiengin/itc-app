<a href="/antrenman/karakter/willy"
  style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: '2rem', border: '1px solid #2a2a2a', textDecoration: 'none', transition: 'all 0.3s ease' }}
  onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.backgroundColor = '#111'; }}
  onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.6rem', color: '#f0ede8', lineHeight: 1 }}>Willy Loman</span>
      <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: '#c9a96e', letterSpacing: '0.1em' }}>Arthur Miller</span>
    </div>
    <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>9 Egzersiz</span>
  </div>
  <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#888', lineHeight: 1.7, margin: 0 }}>
    Yanılsama ve kimlik çöküşü. Geçmiş ile şimdinin aynı anda yaşandığı bir zihin.
  </p>
  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
    {['Dışadönük', 'Yanılsamacı', 'Zaman-İçi-Kayma'].map(tag => (
      <span key={tag} style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', padding: '0.2rem 0.6rem', border: '1px solid #2a2a2a' }}>{tag}</span>
    ))}
  </div>
</a>