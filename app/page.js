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

      {/* HEADER */}
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
          Inside The Character
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

      {/* KAHRAMAN ALANI */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5rem 2rem 3rem 2rem',
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
          Hoş geldin. 
          <br />
          Seçtiğin karakteri sana özel kişiselleştirilmiş egzersizler ile 
          <br />
          yapılandırmaya hazır mısın?
        </p>

      </section>

      {/* MODÜLLER */}
      <section style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 2rem 5rem 2rem',
        gap: '1.5rem',
      }}>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          width: '100%',
          maxWidth: '520px',
        }}>

          {/* MODÜL I */}
          <a href="/kalibrasyon" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            padding: '2rem 2.2rem',
            border: '1px solid #2a2a2a',
            textDecoration: 'none',
            color: '#f0ede8',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.backgroundColor = '#111'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.4em',
                color: '#c9a96e',
                textTransform: 'uppercase',
              }}>
                Modül I
              </span>
              <span style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                color: '#666',
                textTransform: 'uppercase',
              }}>
                3 Test
              </span>
            </div>

            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontSize: '1.6rem',
              color: '#f0ede8',
              lineHeight: 1.2,
            }}>
              Kendini Tanı
            </span>

            <span style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.78rem',
              color: '#aaa',
              lineHeight: 1.7,
            }}>
              Enstrümanını akort et. Öğrenme stilin, performans haritan ve kişilik tipin üzerinden enstrüman profilini çıkarır.
            </span>

            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.85rem',
              color: '#c9a96e',
              marginTop: '0.3rem',
            }}>
              Kalibrasyona Git →
            </span>
          </a>

          {/* MODÜL II */}
          <a href="/antrenman/karakter" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            padding: '2rem 2.2rem',
            border: '1px solid #2a2a2a',
            textDecoration: 'none',
            color: '#f0ede8',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.backgroundColor = '#111'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.4em',
                color: '#c9a96e',
                textTransform: 'uppercase',
              }}>
                Modül II
              </span>
              <span style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                color: '#666',
                textTransform: 'uppercase',
              }}>
                4 Karakter
              </span>
            </div>

            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontSize: '1.6rem',
              color: '#f0ede8',
              lineHeight: 1.2,
            }}>
              Karakterini İnşa Et
            </span>

            <span style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.78rem',
              color: '#aaa',
              lineHeight: 1.7,
            }}>
              Klasik karakterleri ITC metoduyla içeriden çalış. Doğrular, zihinsel haritalar, boşluklar ve egzersizlerle her karakter senin yorumunla yeniden yazılır.
            </span>

            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.85rem',
              color: '#c9a96e',
              marginTop: '0.3rem',
            }}>
              Karakter Kasasına Git →
            </span>
          </a>

          {/* MODÜL III - Yakında */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            padding: '2rem 2.2rem',
            border: '1px solid #1a1a1a',
            opacity: 0.5,
          }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.4em',
                color: '#666',
                textTransform: 'uppercase',
              }}>
                Modül III
              </span>
              <span style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                color: '#444',
                textTransform: 'uppercase',
              }}>
                Yakında
              </span>
            </div>

            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontSize: '1.6rem',
              color: '#888',
              lineHeight: 1.2,
            }}>
              Sahnele
            </span>

            <span style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.78rem',
              color: '#666',
              lineHeight: 1.7,
            }}>
              AI Dış Ses ile yönlendirilmiş zihinsel yolculuk. Karakterin tüm hayatını — pre-senaryodan post-senaryoya — bedenine taşı.
            </span>
          </div>

        </div>

        <div style={{
          width: '1px',
          height: '60px',
          backgroundColor: '#c9a96e',
          opacity: 0.4,
          marginTop: '1rem',
        }} />

      </section>

    </main>
  );
}