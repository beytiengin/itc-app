'use client';

import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
export default function Home() {
  const [kullanici, setKullanici] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setKullanici(user);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setKullanici(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#f0ede8',
      display: 'flex',
      flexDirection: 'column',
    }}>

      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 3rem',
        borderBottom: '1px solid #1a1a1a',
      }}>
        <span style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          color: '#c9a96e',
          textTransform: 'uppercase',
        }}>
          Actor's Gym
        </span>
{kullanici ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
         <a href="/profil" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.2em', color: '#c9a96e', textTransform: 'uppercase', textDecoration: 'none' }}>
              {kullanici.user_metadata?.ad || kullanici.email}
            </a>
            <button
              onClick={async () => { await supabase.auth.signOut(); setKullanici(null); }}
              style={{ background: 'none', border: 'none', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#444', textTransform: 'uppercase', cursor: 'pointer', transition: 'color 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = '#f0ede8'}
              onMouseLeave={e => e.currentTarget.style.color = '#444'}
            >
              Çıkış
            </button>
          </div>
        ) : (
          <a href="/giris" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.color = '#c9a96e'}
            onMouseLeave={e => e.currentTarget.style.color = '#f0ede8'}>
            Giriş Yap
          </a>
        )}
      </header>

      <section style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 2rem',
        textAlign: 'center',
        gap: '2rem',
      }}>

        <div style={{
          width: '1px',
          height: '60px',
          backgroundColor: '#c9a96e',
          opacity: 0.4,
        }} />

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          letterSpacing: '0.05em',
          lineHeight: 1,
          color: '#f0ede8',
          margin: 0,
        }}>
          Inside The
          <br />
          <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Character</em>
        </h1>

        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.9rem',
          letterSpacing: '0.05em',
          color: '#ccc',
          maxWidth: '420px',
          lineHeight: 1.8,
          margin: 0,
        }}>
          Hoş geldin. Bugün enstrümanını akort etmeye
          <br />
          ve karakterini var etmeye hazır mısın?
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '360px',
          marginTop: '1rem',
        }}>
          <a href="/kalibrasyon" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3rem',
            padding: '1.2rem 2rem',
            border: '1px solid #2a2a2a',
            textDecoration: 'none',
            color: '#f0ede8',
            transition: 'all 0.3s ease',
          }}>
            <span style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              Merkezine Dön
            </span>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.75rem',
              color: '#c9a96e',
            }}>
              Baseline Kurulumu
            </span>
          </a>

          <a href="/antrenman" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3rem',
            padding: '1.2rem 2rem',
            border: '1px solid #2a2a2a',
            textDecoration: 'none',
            color: '#f0ede8',
            transition: 'all 0.3s ease',
          }}>
            <span style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              Karakterini İnşa Et
            </span>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.75rem',
              color: '#c9a96e',
            }}>
              Somatik Yolculuğa Başla
            </span>
          </a>

          <a href="/kasa" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3rem',
            padding: '1rem 2rem',
            border: '1px solid #1a1a1a',
            textDecoration: 'none',
            color: '#bbb',
            transition: 'all 0.3s ease',
          }}>
            <span style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              Kapasitemi Gör
            </span>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.7rem',
              color: '#c9a96e',
            }}>
              Yıldız Oyuncu Analizi
            </span>
          </a>
        </div>

        <div style={{
          width: '1px',
          height: '60px',
          backgroundColor: '#c9a96e',
          opacity: 0.4,
        }} />

      </section>

      <section style={{
        borderTop: '1px solid #1a1a1a',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}>

        <a href="/kalibrasyon" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
          padding: '2rem',
          borderRight: '1px solid #1a1a1a',
          borderTop: '1px solid transparent',
          textDecoration: 'none',
          cursor: 'pointer',
        }}>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#ccc' }}>01</span>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1rem', color: '#f0ede8', lineHeight: 1.3 }}>Enstrüman Analizi</span>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.15em', color: '#999', textTransform: 'uppercase' }}>Arketip & Kalibrasyon</span>
        </a>

        <a href="/antrenman" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
          padding: '2rem',
          borderRight: '1px solid #1a1a1a',
          borderTop: '1px solid #c9a96e',
          textDecoration: 'none',
          cursor: 'pointer',
        }}>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a96e' }}>02</span>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1rem', color: '#f0ede8', lineHeight: 1.3 }}>Antrenman Odası</span>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.15em', color: '#999', textTransform: 'uppercase' }}>AI Dış Ses Seansı</span>
        </a>

        <a href="/fuaye" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
          padding: '2rem',
          borderRight: '1px solid #1a1a1a',
          borderTop: '1px solid transparent',
          textDecoration: 'none',
          cursor: 'pointer',
        }}>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#ccc' }}>03</span>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1rem', color: '#f0ede8', lineHeight: 1.3 }}>Zihinsel Fuaye</span>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.15em', color: '#999', textTransform: 'uppercase' }}>Regülasyon & İmgeleme</span>
        </a>

        <a href="/kasa" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
          padding: '2rem',
          borderRight: '1px solid #1a1a1a',
          borderTop: '1px solid transparent',
          textDecoration: 'none',
          cursor: 'pointer',
        }}>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#ccc' }}>04</span>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1rem', color: '#f0ede8', lineHeight: 1.3 }}>Karakter Kasası</span>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.15em', color: '#999', textTransform: 'uppercase' }}>Blueprint & Vault</span>
        </a>

      </section>

    </main>
  );
}