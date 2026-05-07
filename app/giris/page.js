'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '../lib/supabase';

function GirisIcerik() {
  const searchParams = useSearchParams();
  const geri = searchParams.get('geri') || '/';
  const oauthHata = searchParams.get('hata') || '';

  const [mod, setMod] = useState('giris');
  const [email, setEmail] = useState('');
  const [sifre, setSifre] = useState('');
  const [ad, setAd] = useState('');
  const [hata, setHata] = useState(oauthHata ? `Google girişi başarısız: ${oauthHata}` : '');
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
      window.location.href = geri;
    }
    setYukleniyor(false);
  }

  async function googleIleGiris() {
    setYukleniyor(true);
    setHata('');
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(geri)}`,
      },
    });
    if (error) {
      setHata('Google ile giriş başarısız: ' + error.message);
      setYukleniyor(false);
    }
  }

  const inputStil = {
    width: '100%',
    padding: '1rem 1.2rem',
    backgroundColor: 'var(--bg-elevated)',
    border: '1px solid var(--rule)',
    color: 'var(--ink)',
    fontFamily: 'Jost, sans-serif',
    fontWeight: 200,
    fontSize: '0.85rem',
    outline: 'none',
    boxSizing: 'border-box',
    caretColor: 'var(--accent)',
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid var(--rule)' }}>
        <a href="/" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase', textDecoration: 'none' }}>
          Inside The Character
        </a>
        <a href="/" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: 'var(--ink)', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.3s ease' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--ink)'}
        >
          ← Ana Ekran
        </a>
      </header>

      <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem' }}>

        <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--accent)', opacity: 0.4, margin: '0 auto' }} />
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '2.5rem', color: 'var(--ink)', margin: 0 }}>
              {mod === 'giris' ? 'Giriş Yap' : 'Hesap Oluştur'}
            </h1>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.8rem', color: 'var(--ink-soft)', margin: 0 }}>
              {mod === 'giris' ? 'Enstrümanına dön.' : "Inside The Character'a katıl."}
            </p>
          </div>

          {mesaj ? (
            <div style={{ padding: '1.5rem', border: '1px solid var(--onay-rule)', backgroundColor: 'var(--onay-bg)', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.82rem', color: 'var(--onay-soft)', lineHeight: 1.8, margin: 0 }}>{mesaj}</p>
            </div>
          ) : (
            <>
              {/* GOOGLE BUTONU */}
              <button
                onClick={googleIleGiris}
                disabled={yukleniyor}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  padding: '1rem',
                  border: '1px solid var(--rule)',
                  backgroundColor: 'var(--ink)',
                  color: 'var(--bg-base)',
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 400,
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                  cursor: yukleniyor ? 'not-allowed' : 'pointer',
                  opacity: yukleniyor ? 0.5 : 1,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { if (!yukleniyor) e.currentTarget.style.backgroundColor = 'var(--ink)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--ink)'; }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                  <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
                  <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.547 0 9s.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                  <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                {yukleniyor ? 'Bekle...' : 'Google ile Devam Et'}
              </button>

              {/* AYIRICI */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.5rem 0' }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--rule)' }} />
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>veya</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--rule)' }} />
              </div>

              {/* EMAIL FORM */}
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
                  <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', color: 'var(--uyari)', margin: 0 }}>{hata}</p>
                )}

                <button
                  onClick={mod === 'giris' ? girisYap : kayitOl}
                  disabled={yukleniyor}
                  style={{ marginTop: '0.5rem', padding: '1.2rem', border: '1px solid var(--accent)', backgroundColor: 'transparent', color: 'var(--accent)', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', cursor: yukleniyor ? 'not-allowed' : 'pointer', opacity: yukleniyor ? 0.5 : 1, transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { if (!yukleniyor) { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg-base)'; }}}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
                >
                  {yukleniyor ? 'Bekle...' : mod === 'giris' ? 'Giriş Yap' : 'Hesap Oluştur'}
                </button>

              </div>
            </>
          )}

          {/* MOD DEĞİŞİM — belirginleştirilmiş */}
          <div style={{ textAlign: 'center', borderTop: '1px solid var(--rule)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {mod === 'giris' ? (
              <>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: 'var(--ink-muted)', margin: 0 }}>
                  Henüz hesabın yok mu?
                </p>
                <button
                  onClick={() => { setMod('kayit'); setHata(''); setMesaj(''); }}
                  style={{ background: 'none', border: 'none', color: 'var(--accent)', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.85rem', letterSpacing: '0.15em', cursor: 'pointer', textTransform: 'uppercase', transition: 'color 0.3s ease' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-hover)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--accent)'}
                >
                  Hesap Oluştur →
                </button>
              </>
            ) : (
              <>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: 'var(--ink-muted)', margin: 0 }}>
                  Zaten hesabın var mı?
                </p>
                <button
                  onClick={() => { setMod('giris'); setHata(''); setMesaj(''); }}
                  style={{ background: 'none', border: 'none', color: 'var(--accent)', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.85rem', letterSpacing: '0.15em', cursor: 'pointer', textTransform: 'uppercase', transition: 'color 0.3s ease' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-hover)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--accent)'}
                >
                  ← Giriş Yap
                </button>
              </>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}

export default function Giris() {
  return (
    <Suspense fallback={<main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)' }} />}>
      <GirisIcerik />
    </Suspense>
  );
}