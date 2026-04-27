'use client';

import { useState, useEffect } from 'react';
import { tumKarakterIlerlemeleri } from '../../lib/kulis';
import IlerlemeRozet from '../../../components/IlerlemeRozet';

const KARAKTER_META = {
  hamlet: { boslukSayisi: 12, antrenmanSayisi: 9 },
  macbeth: { boslukSayisi: 12, antrenmanSayisi: 8 },
  willy: { boslukSayisi: 12, antrenmanSayisi: 7 },
  biff: { boslukSayisi: 12, antrenmanSayisi: 6 },
};

function IlerlemeBloku({ karakterId, ilerlemeler }) {
  const meta = KARAKTER_META[karakterId];
  if (!meta) return null;
  const veri = ilerlemeler[karakterId] || { bosluk: 0, antrenman: 0 };
  return (
    <div style={{
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '1px solid #1a1a1a',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem',
    }}>
      <IlerlemeRozet
        ikon="◇"
        etiket="Senin Çerçeven"
        mevcut={veri.bosluk}
        toplam={meta.boslukSayisi}
        renk="#7a9b7a"
      />
      <IlerlemeRozet
        ikon="○"
        etiket="Zihinsel Antrenman"
        mevcut={veri.antrenman}
        toplam={meta.antrenmanSayisi}
        renk="#9b7a6a"
      />
    </div>
  );
}

export default function KarakterListesi() {
  const [ilerlemeler, setIlerlemeler] = useState({});

  useEffect(() => {
    async function veriYukle() {
      const veri = await tumKarakterIlerlemeleri();
      setIlerlemeler(veri);
    }
    veriYukle();
  }, []);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f0ede8', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid #2a2a2a' }}>
        <a href="/" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase', textDecoration: 'none' }}>Actor's Gym</a>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="/kalibrasyon" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#aaa', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.25s ease' }}
            onMouseEnter={e => e.currentTarget.style.color = '#c9a96e'}
            onMouseLeave={e => e.currentTarget.style.color = '#aaa'}>
            Kalibrasyon
          </a>
          <a href="/antrenman" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase', textDecoration: 'none' }}>← Antrenman</a>
        </div>
      </header>

      <section style={{ flex: 1, padding: '3rem 2rem', maxWidth: '680px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div style={{ width: '1px', height: '50px', backgroundColor: '#c9a96e', opacity: 0.4 }} />
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#c9a96e', textTransform: 'uppercase' }}>02 — Antrenman Odası</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0ede8', margin: 0 }}>Karakter Kasası</h1>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: '#ccc', lineHeight: 1.8, margin: 0 }}>
            Her karakter ITC metodolojisiyle derinlemesine inşa edilmiştir. Çalışmak istediğin karakteri seç.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Hamlet */}
          <a href="/antrenman/karakter/hamlet"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: '2rem', border: '1px solid #2a2a2a', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.backgroundColor = '#111'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.6rem', color: '#f0ede8', lineHeight: 1 }}>Hamlet</span>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: '#c9a96e', letterSpacing: '0.1em' }}>William Shakespeare</span>
              </div>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>9 Antrenman</span>
            </div>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#888', lineHeight: 1.7, margin: 0 }}>
              Yas, ihanet ve varoluşsal sorgulama. Düşünce ile eylem arasında sıkışmış bir prensin görünmeyen yolculuğu.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['İçedönük', 'Sezgisel', 'Felsefi', 'Varoluşsal'].map(tag => (
                <span key={tag} style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', padding: '0.2rem 0.6rem', border: '1px solid #2a2a2a' }}>{tag}</span>
              ))}
            </div>
            <IlerlemeBloku karakterId="hamlet" ilerlemeler={ilerlemeler} />
          </a>

          {/* Macbeth */}
          <a href="/antrenman/karakter/macbeth"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: '2rem', border: '1px solid #2a2a2a', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.backgroundColor = '#111'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.6rem', color: '#f0ede8', lineHeight: 1 }}>Macbeth</span>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: '#c9a96e', letterSpacing: '0.1em' }}>William Shakespeare</span>
              </div>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>8 Antrenman</span>
            </div>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#888', lineHeight: 1.7, margin: 0 }}>
              İktidar hırsı, suçluluk ve paranoya. İskoçya'nın en cesur generali — ve en büyük hainlerinden biri.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Trajedi', 'Şiddet', 'İktidar', 'Paranoya'].map(tag => (
                <span key={tag} style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', padding: '0.2rem 0.6rem', border: '1px solid #2a2a2a' }}>{tag}</span>
              ))}
            </div>
            <IlerlemeBloku karakterId="macbeth" ilerlemeler={ilerlemeler} />
          </a>

          {/* Willy Loman */}
          <a href="/antrenman/karakter/willy"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: '2rem', border: '1px solid #2a2a2a', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.backgroundColor = '#111'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.6rem', color: '#f0ede8', lineHeight: 1 }}>Willy Loman</span>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: '#c9a96e', letterSpacing: '0.1em' }}>Arthur Miller</span>
              </div>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>7 Antrenman</span>
            </div>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#888', lineHeight: 1.7, margin: 0 }}>
              Yanılsama ve kimlik çöküşü. Geçmiş ile şimdinin aynı anda yaşandığı bir zihin.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Dışadönük', 'Yanılsamacı', 'Zaman-İçi-Kayma'].map(tag => (
                <span key={tag} style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', padding: '0.2rem 0.6rem', border: '1px solid #2a2a2a' }}>{tag}</span>
              ))}
            </div>
            <IlerlemeBloku karakterId="willy" ilerlemeler={ilerlemeler} />
          </a>

          {/* Biff Loman */}
          <a href="/antrenman/karakter/biff"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: '2rem', border: '1px solid #2a2a2a', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.backgroundColor = '#111'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.6rem', color: '#f0ede8', lineHeight: 1 }}>Biff Loman</span>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: '#c9a96e', letterSpacing: '0.1em' }}>Arthur Miller</span>
              </div>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>6 Antrenman</span>
            </div>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#888', lineHeight: 1.7, margin: 0 }}>
              Babanın rüyasından uyanış. Kırılma ve özgürleşme arasında sıkışmış bir adamın gerçeği arama yolculuğu.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['İçedönük', 'Kırık Kahraman', 'Boston Sonrası'].map(tag => (
                <span key={tag} style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase', padding: '0.2rem 0.6rem', border: '1px solid #2a2a2a' }}>{tag}</span>
              ))}
            </div>
            <IlerlemeBloku karakterId="biff" ilerlemeler={ilerlemeler} />
          </a>

          {/* Yakında */}
          {[
            { ad: 'Medea', yazar: 'Euripides', aciklama: 'Öfke, ihanet ve radikal eylem.' },
            { ad: 'Blanche DuBois', yazar: 'Tennessee Williams', aciklama: 'Yanılsama kalkanı ve kırılganlık.' },
          ].map((karakter, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '2rem', border: '1px solid #1a1a1a', opacity: 0.4 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.6rem', color: '#f0ede8', lineHeight: 1 }}>{karakter.ad}</span>
                  <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: '#555', letterSpacing: '0.1em' }}>{karakter.yazar}</span>
                </div>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: '#333', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>Yakında</span>
              </div>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#555', lineHeight: 1.7, margin: 0 }}>{karakter.aciklama}</p>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}
