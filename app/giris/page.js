'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '../lib/supabase';
import { useDil, ceviri } from '../lib/dil';
import chromeI18n from '../../data/chrome-i18n';

// Supabase Google OAuth config'i (Client Secret + redirect URI) onarilana
// kadar Google butonu gizli. true yapinca buton + "veya" ayirici geri donusur.
const GOOGLE_AKTIF = false;

function GirisIcerik() {
  const { dil } = useDil();
  const t = ceviri(chromeI18n, dil).giris;
  const searchParams = useSearchParams();
  const geri = searchParams.get('geri') || '/';
  const oauthHata = searchParams.get('hata') || '';

  const [mod, setMod] = useState('giris');
  const [email, setEmail] = useState('');
  const [sifre, setSifre] = useState('');
  const [ad, setAd] = useState('');
  const [hata, setHata] = useState(oauthHata ? `${t.googleHataPrefix}${oauthHata}` : '');
  const [yukleniyor, setYukleniyor] = useState(false);
  const [mesaj, setMesaj] = useState('');
  const [onaylanmadi, setOnaylanmadi] = useState(false);

  async function kayitOl() {
    if (!ad.trim()) { setHata(t.adZorunlu); return; }
    setYukleniyor(true);
    setHata('');
    const { error } = await supabase.auth.signUp({
      email,
      password: sifre,
      options: {
        data: { ad },
        emailRedirectTo: `${window.location.origin}/auth/confirm?next=${encodeURIComponent(geri)}`,
      },
    });
    if (error) {
      setHata(error.message);
    } else {
      setMesaj(t.onayMesaji);
    }
    setYukleniyor(false);
  }

  // Onay maili gecikmiş/süresi dolmuş öğrenci için taze link gönder. Özel SMTP
  // ile saniyeler içinde gelir ve süresi geçmeden tıklanabilir.
  async function mailYenidenGonder() {
    if (!email.trim()) { setHata(t.emailZorunlu || t.adZorunlu); return; }
    setYukleniyor(true);
    setHata('');
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/confirm?next=${encodeURIComponent(geri)}`,
      },
    });
    if (error) {
      setHata(error.message);
    } else {
      setOnaylanmadi(false);
      setMesaj(t.onayYenidenGonderildi || t.onayMesaji);
    }
    setYukleniyor(false);
  }

  async function girisYap() {
    setYukleniyor(true);
    setHata('');
    const { error } = await supabase.auth.signInWithPassword({ email, password: sifre });
    if (error) {
      // Supabase'in gercek hata mesajini goster - jenerik 'sifre hatali' yerine
      // 'Email not confirmed', 'Invalid login credentials', rate limit vb. gorunsun
      const msg = error.message || '';
      if (msg.toLowerCase().includes('email not confirmed')) {
        setHata(t.emailOnaylanmadi);
        setOnaylanmadi(true);
      } else if (msg.toLowerCase().includes('invalid login')) {
        setHata(t.emailSifreHatali);
      } else {
        setHata(t.girisBasarisiz + msg);
      }
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
      setHata(t.googleBasarisiz + error.message);
      setYukleniyor(false);
    }
  }

  const inputStil = {
    width: '100%',
    padding: '1rem 1.2rem',
    backgroundColor: 'var(--bg-elevated)',
    border: '1px solid var(--rule)',
    color: 'var(--ink)',
    fontFamily: 'var(--font-body), sans-serif',
    fontWeight: 200,
    fontSize: '0.85rem',
    outline: 'none',
    boxSizing: 'border-box',
    caretColor: 'var(--accent)',
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>
      {/* Üst nav artık global — components/Navigasyon.js */}

      <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem' }}>

        <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--accent)', opacity: 0.4, margin: '0 auto' }} />
            <h1 style={{ fontFamily: 'var(--font-display), serif', fontWeight: 300, fontSize: '2.5rem', color: 'var(--ink)', margin: 0 }}>
              {mod === 'giris' ? t.basliGiris : t.basliKayit}
            </h1>
            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.8rem', color: 'var(--ink-soft)', margin: 0 }}>
              {mod === 'giris' ? t.altGiris : t.altKayit}
            </p>
          </div>

          {mesaj ? (
            <div style={{ padding: '1.5rem', border: '1px solid var(--onay-rule)', backgroundColor: 'var(--onay-bg)', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.82rem', color: 'var(--onay-soft)', lineHeight: 1.8, margin: 0 }}>{mesaj}</p>
            </div>
          ) : (
            <>
              {GOOGLE_AKTIF && (
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
                      fontFamily: 'var(--font-body), sans-serif',
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
                    {yukleniyor ? t.bekle : t.googleIleDevam}
                  </button>

                  {/* AYIRICI */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.5rem 0' }}>
                    <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--rule)' }} />
                    <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{t.veya}</span>
                    <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--rule)' }} />
                  </div>
                </>
              )}

              {/* EMAIL FORM */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>

                {mod === 'kayit' && (
                  <input
                    type="text"
                    placeholder={t.placeholderAd}
                    value={ad}
                    onChange={e => setAd(e.target.value)}
                    style={inputStil}
                  />
                )}

                <input
                  type="email"
                  placeholder={t.placeholderEmail}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={inputStil}
                />

                <input
                  type="password"
                  placeholder={t.placeholderSifre}
                  value={sifre}
                  onChange={e => setSifre(e.target.value)}
                  style={inputStil}
                />

                {hata && (
                  <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.75rem', color: 'var(--uyari)', margin: 0 }}>{hata}</p>
                )}

                {onaylanmadi && (
                  <button
                    type="button"
                    onClick={mailYenidenGonder}
                    disabled={yukleniyor}
                    style={{ alignSelf: 'flex-start', background: 'none', border: 'none', padding: 0, color: 'var(--accent)', fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.75rem', letterSpacing: '0.1em', textDecoration: 'underline', textUnderlineOffset: '3px', cursor: yukleniyor ? 'not-allowed' : 'pointer', opacity: yukleniyor ? 0.5 : 1 }}
                  >
                    {t.mailYenidenGonderCta}
                  </button>
                )}

                <button
                  onClick={mod === 'giris' ? girisYap : kayitOl}
                  disabled={yukleniyor}
                  style={{ marginTop: '0.5rem', padding: '1.2rem', border: '1px solid var(--accent)', backgroundColor: 'transparent', color: 'var(--accent)', fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', cursor: yukleniyor ? 'not-allowed' : 'pointer', opacity: yukleniyor ? 0.5 : 1, transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { if (!yukleniyor) { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg-base)'; }}}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
                >
                  {yukleniyor ? t.bekle : mod === 'giris' ? t.basliGiris : t.basliKayit}
                </button>

              </div>
            </>
          )}

          {/* MOD DEĞİŞİM */}
          <div style={{ textAlign: 'center', borderTop: '1px solid var(--rule)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {mod === 'giris' ? (
              <>
                <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.78rem', color: 'var(--ink-muted)', margin: 0 }}>
                  {t.hesabinYokMu}
                </p>
                <button
                  onClick={() => { setMod('kayit'); setHata(''); setMesaj(''); }}
                  style={{ background: 'none', border: 'none', color: 'var(--accent)', fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.85rem', letterSpacing: '0.15em', cursor: 'pointer', textTransform: 'uppercase', transition: 'color 0.3s ease' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-hover)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--accent)'}
                >
                  {t.hesapOlusturCta}
                </button>
              </>
            ) : (
              <>
                <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.78rem', color: 'var(--ink-muted)', margin: 0 }}>
                  {t.hesabinVarMi}
                </p>
                <button
                  onClick={() => { setMod('giris'); setHata(''); setMesaj(''); }}
                  style={{ background: 'none', border: 'none', color: 'var(--accent)', fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.85rem', letterSpacing: '0.15em', cursor: 'pointer', textTransform: 'uppercase', transition: 'color 0.3s ease' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-hover)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--accent)'}
                >
                  {t.girisYapGeri}
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
