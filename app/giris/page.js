'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Giris() {
  const [mod, setMod] = useState('giris');
  const [email, setEmail] = useState('');
  const [sifre, setSifre] = useState('');
  const [ad, setAd] = useState('');
  const [hata, setHata] = useState('');
  const [yukleniyor, setYukleniyor] = useState(false);
  const [mesaj, setMesaj] = useState('');

  async function kayitOl() {
    if (!ad.trim()) { setHata('Adını girmeden devam edemezsin.'); return; }
    setYukleniyor(true);
    setHata('');
    const { error } = await supabase.auth.signUp({
      email,
      password: sifre,
      options: { data: { ad } }
    });
    if (error) {
      setHata(error.message);
    } else {
      setMesaj('Email adresine bir onay linki gönderdik. Onayladıktan sonra giriş yapabilirsin.');
    }
    setYukleniyor(false);
  }

  async function girisYap() {
    setYukleniyor(true);
    setHata('');
    const { error } = await supabase.auth.signInWithPassword({ email, password: sifre });
    if (error) {
      setHata('Email veya şifre hatalı.');
    } else {
      window.location.href = '/';
    }
    setYukleniyor(false);
  }

  const inputStil = {
    width: '100%',
    padding: '1rem 1.2rem',
    backgroundColor: '#1a1a1a',
    border: '1px solid #3a3a3a',
    color: '#f0ede8',
    fontFamily: 'Jost, sans-serif',
    fontWeight: 200,
    fontSize: '0.85rem',
    outline: 'none',
    boxSizing: 'border-box',
    caretColor: '#c9a96e',
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f0ede8', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid #2a2a2a' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>
          Actor's Gym
        </span>
        <a href="/" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.3s ease' }}
          onMouseEnter={e => e.currentTarget.style.color = '#c9a96e'}
          onMouseLeave={e => e.currentTarget.style.color = '#f0ede8'}
        >
          ← Ana Ekran
        </a>
      </header>

      <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem' }}>

        <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ width: '1px', height: '50px', backgroundColor: '#c9a96e', opacity: 0.4, margin: '0 auto' }} />
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '2.5rem', color: '#f0ede8', margin: 0 }}>
              {mod === 'giris' ? 'Giriş Yap' : 'Kayıt Ol'}
            </h1>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.8rem', color: '#aaa', margin: 0 }}>
              {mod === 'giris' ? 'Enstrümanına dön.' : "Actor's Gym'e katıl."}
            </p>
          </div>

          {mesaj ? (
            <div style={{ padding: '1.5rem', border: '1px solid #2a4a2a', backgroundColor: '#0f1a0f', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.82rem', color: '#6a9b6a', lineHeight: 1.8, margin: 0 }}>{mesaj}</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>

              {mod === 'kayit' && (
                <input
                  type="text"
                  placeholder="Adın"
                  value={ad}
                  onChange={e => setAd(e.target.value)}
                  style={inputStil}
                />
              )}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={inputStil}
              />

              <input
                type="password"
                placeholder="Şifre"
                value={sifre}
                onChange={e => setSifre(e.target.value)}
                style={inputStil}
              />

              {hata && (
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', color: '#9b6a6a', margin: 0 }}>{hata}</p>
              )}

              <button
                onClick={mod === 'giris' ? girisYap : kayitOl}
                disabled={yukleniyor}
                style={{ marginTop: '0.5rem', padding: '1.2rem', border: '1px solid #c9a96e', backgroundColor: 'transparent', color: '#c9a96e', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', cursor: yukleniyor ? 'not-allowed' : 'pointer', opacity: yukleniyor ? 0.5 : 1, transition: 'all 0.3s ease' }}
                onMouseEnter={e => { if (!yukleniyor) { e.currentTarget.style.backgroundColor = '#c9a96e'; e.currentTarget.style.color = '#0a0a0a'; }}}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#c9a96e'; }}
              >
                {yukleniyor ? 'Bekle...' : mod === 'giris' ? 'Giriş Yap' : 'Kayıt Ol'}
              </button>

            </div>
          )}

          <div style={{ textAlign: 'center', borderTop: '1px solid #2a2a2a', paddingTop: '1.5rem' }}>
            <button
              onClick={() => { setMod(mod === 'giris' ? 'kayit' : 'giris'); setHata(''); setMesaj(''); }}
              style={{ background: 'none', border: 'none', color: '#aaa', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', letterSpacing: '0.1em', cursor: 'pointer', transition: 'color 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = '#f0ede8'}
              onMouseLeave={e => e.currentTarget.style.color = '#aaa'}
            >
              {mod === 'giris' ? 'Hesabın yok mu? Kayıt ol' : 'Zaten hesabın var mı? Giriş yap'}
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}