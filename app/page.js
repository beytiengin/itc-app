'use client';
export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#f0ede8',
        display: 'flex',
        flexDirection: 'column',
        padding: '0',
      }}
    >
      {/* ÜST BAR */}
      <header
        className="fade-up delay-1"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2rem 3rem',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <div>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              color: '#c9a96e',
              textTransform: 'uppercase',
            }}
          >
            Actor's Gym
          </span>
        </div>
        <div
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            color: '#444',
            textTransform: 'uppercase',
          }}
        >
          ITC Method
        </div>
      </header>

      {/* ORTA — KARŞILAMA */}
      <section
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5rem 2rem',
          textAlign: 'center',
          gap: '2rem',
        }}
      >
        {/* İnce çizgi üst */}
        <div
          className="fade-up delay-1"
          style={{
            width: '1px',
            height: '60px',
            backgroundColor: '#c9a96e',
            opacity: 0.4,
            marginBottom: '1rem',
          }}
        />

        {/* Ana başlık */}
        <h1
          className="fade-up delay-2"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 300,
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            letterSpacing: '0.05em',
            lineHeight: 1,
            color: '#f0ede8',
          }}
        >
          Inside The
          <br />
          <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Character</em>
        </h1>

        {/* Karşılama mesajı */}
        <p
          className="fade-up delay-3"
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
            letterSpacing: '0.05em',
            color: '#888',
            maxWidth: '420px',
            lineHeight: 1.8,
          }}
        >
          Hoş geldin. Bugün enstrümanını akort etmeye
          <br />
          ve karakterini var etmeye hazır mısın?
        </p>

        {/* Ana butonlar */}
        <div
          className="fade-up delay-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '1.5rem',
            width: '100%',
            maxWidth: '360px',
          }}
        >
          <PrimaryButton label="Merkezine Dön" sub="Baseline Kurulumu" />
          <PrimaryButton label="Karakterini İnşa Et" sub="Somatik Yolculuğa Başla" />
          <SecondaryButton label="Kapasitemi Gör" sub="Yıldız Oyuncu Analizi" />
        </div>

        {/* İnce çizgi alt */}
        <div
          className="fade-up delay-5"
          style={{
            width: '1px',
            height: '60px',
            backgroundColor: '#c9a96e',
            opacity: 0.4,
            marginTop: '1rem',
          }}
        />
      </section>

      {/* ALT — GYM İSTASYONLARI */}
      <section
        className="fade-up delay-5"
        style={{
          borderTop: '1px solid #1a1a1a',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        <Station
          number="01"
          title="Enstrüman Analizi"
          sub="Arketip & Kalibrasyon"
          delay="delay-3"
        />
        <Station
          number="02"
          title="Antrenman Odası"
          sub="AI Dış Ses Seansı"
          delay="delay-4"
          highlight
        />
        <Station
          number="03"
          title="Zihinsel Fuaye"
          sub="Regülasyon & İmgeleme"
          delay="delay-5"
        />
        <Station
          number="04"
          title="Karakter Kasası"
          sub="Blueprint & Vault"
          delay="delay-6"
        />
      </section>
    </main>
  );
}

/* — BUTON BİLEŞENLERİ — */

function PrimaryButton({ label, sub }) {
  return (
    <button
      style={{
        backgroundColor: 'transparent',
        border: '1px solid #2a2a2a',
        color: '#f0ede8',
        padding: '1.2rem 2rem',
        cursor: 'pointer',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem',
        transition: 'border-color 0.3s ease, background-color 0.3s ease',
        width: '100%',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#c9a96e';
        e.currentTarget.style.backgroundColor = '#111';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#2a2a2a';
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 300,
          fontSize: '0.85rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          fontSize: '0.75rem',
          fontStyle: 'italic',
          color: '#c9a96e',
          letterSpacing: '0.05em',
        }}
      >
        {sub}
      </span>
    </button>
  );
}

function SecondaryButton({ label, sub }) {
  return (
    <button
      style={{
        backgroundColor: 'transparent',
        border: '1px solid #1a1a1a',
        color: '#666',
        padding: '1rem 2rem',
        cursor: 'pointer',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem',
        transition: 'all 0.3s ease',
        width: '100%',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#333';
        e.currentTarget.style.color = '#f0ede8';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#1a1a1a';
        e.currentTarget.style.color = '#666';
      }}
    >
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          fontSize: '0.7rem',
          fontStyle: 'italic',
          letterSpacing: '0.05em',
        }}
      >
        {sub}
      </span>
    </button>
  );
}

/* — İSTASYON BİLEŞENİ — */

function Station({ number, title, sub, delay, highlight }) {
  return (
    <div
      className={`fade-up ${delay}`}
      style={{
        padding: '2rem',
        borderRight: '1px solid #1a1a1a',
        borderTop: highlight ? '1px solid #c9a96e' : '1px solid transparent',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = '#111';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.3em',
          color: highlight ? '#c9a96e' : '#333',
        }}
      >
        {number}
      </span>
      <span
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          fontSize: '1rem',
          letterSpacing: '0.02em',
          color: '#f0ede8',
          lineHeight: 1.3,
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.15em',
          color: '#444',
          textTransform: 'uppercase',
        }}
      >
        {sub}
      </span>
    </div>
  );
}