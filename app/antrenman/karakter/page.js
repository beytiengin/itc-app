'use client';

import { useState, useEffect } from 'react';
import { tumKarakterIlerlemeleri } from '../../lib/kulis';
import IlerlemeRozet from '../../../components/IlerlemeRozet';

// Hamlet refactor sonrası: 5 boşluk (her biri 3 alt-soru, hibrit yapı).
// Diğer karakterler eski 12 alanlı yapıda. Antrenman sayıları her karakter için
// kendi data dosyasındaki egzersizler dizisinin uzunluğu.
//
// Mizaç: psikometrik (MBTI + Yıldız profili göstergeleri)
// Tema:  içerik havuzu (yas, suçluluk, iktidar, vb.)
const KARAKTER_META = {
  hamlet: {
    boslukSayisi: 5, antrenmanSayisi: 0,
    mizac: ['INFP', 'empati yüksek', 'analiz yüksek', 'yas yorgunluğu'],
    tema:  ['yas', 'intikam', 'yanılsama', 'varoluş', 'ihanet'],
  },
  macbeth: {
    boslukSayisi: 12, antrenmanSayisi: 8,
    mizac: ['ENTJ', 'hırs yüksek', 'paranoya', 'ahlaki çöküş'],
    tema:  ['iktidar', 'suçluluk', 'ihanet', 'şiddet'],
  },
  willy: {
    boslukSayisi: 12, antrenmanSayisi: 7,
    mizac: ['ESFP', 'yanılsamacı', 'zaman kayması', 'kimlik kırılması'],
    tema:  ['yanılsama', 'kimlik', 'çöküş', 'baba-oğul'],
  },
  biff: {
    boslukSayisi: 12, antrenmanSayisi: 6,
    mizac: ['INFP', 'kırık kahraman', 'gerçeklik arayışı'],
    tema:  ['yas', 'kimlik', 'özgürleşme', 'baba-oğul'],
  },
};

function EtiketBloku({ karakterId }) {
  const meta = KARAKTER_META[karakterId];
  if (!meta) return null;
  const TON = '#c9a96e';
  const baslikStili = {
    fontFamily: 'Jost, sans-serif',
    fontWeight: 200,
    fontSize: '0.55rem',
    letterSpacing: '0.3em',
    color: '#666',
    textTransform: 'uppercase',
    minWidth: '52px',
    paddingTop: '0.2rem',
  };
  const mizacEtiketStili = {
    fontFamily: 'Jost, sans-serif',
    fontWeight: 200,
    fontSize: '0.6rem',
    letterSpacing: '0.1em',
    color: '#aaa',
    padding: '0.2rem 0.6rem',
    border: '1px solid #2a2a2a',
    borderRadius: '12px',
  };
  const temaEtiketStili = {
    fontFamily: 'Cormorant Garamond, serif',
    fontStyle: 'italic',
    fontSize: '0.72rem',
    color: TON,
    padding: '0.2rem 0.7rem',
    border: `1px solid ${TON}33`,
    backgroundColor: '#15110a',
    borderRadius: '12px',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'baseline' }}>
        <span style={baslikStili}>Mizaç</span>
        {meta.mizac.map((m) => (
          <span key={m} style={mizacEtiketStili}>{m}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'baseline' }}>
        <span style={baslikStili}>Tema</span>
        {meta.tema.map((t) => (
          <span key={t} style={temaEtiketStili}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function OgrenmeZinciri() {
  const TON = '#c9a96e';
  const halkalar = [
    { fiil: 'Gör', aciklama: 'Doğruları' },
    { fiil: 'Tanı', aciklama: 'İlişkileri' },
    { fiil: 'Anla', aciklama: 'Sahneleri' },
    { fiil: 'İşaretle', aciklama: 'Tercihleri' },
    { fiil: 'Yaz', aciklama: 'Boşlukları' },
    { fiil: 'İçselleştir', aciklama: 'Yükü' },
  ];
  return (
    <div
      style={{
        border: '1px solid #2a2a2a',
        backgroundColor: '#0d0d0d',
        padding: '1.4rem 1.6rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.55rem',
          letterSpacing: '0.35em',
          color: '#888',
          textTransform: 'uppercase',
        }}
      >
        ITC öğrenme zinciri
      </span>
      <ol
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.4rem',
          alignItems: 'baseline',
        }}
      >
        {halkalar.map((h, i) => (
          <li
            key={h.fiil}
            style={{
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: '0.5rem',
              padding: '0.4rem 0.7rem',
              backgroundColor: '#0a0a0a',
              border: '1px solid #1a1a1a',
            }}
          >
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: TON,
              }}
            >
              {h.fiil}
            </span>
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.7rem',
                color: '#aaa',
              }}
            >
              {h.aciklama}
            </span>
            {i < halkalar.length - 1 && (
              <span style={{ color: '#444', marginLeft: '0.3rem', fontSize: '0.7rem' }}>→</span>
            )}
          </li>
        ))}
      </ol>
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '0.85rem',
          color: '#888',
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        Her bölüm farklı bir bilişsel eylem ister. Sayılar tamamladığını değil,
        kaçında <em style={{ color: '#bbb' }}>karakterle temas ettiğini</em> gösterir.
      </p>
    </div>
  );
}

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
      {meta.antrenmanSayisi > 0 && (
        <IlerlemeRozet
          ikon="○"
          etiket="Zihinsel Antrenman"
          mevcut={veri.antrenman}
          toplam={meta.antrenmanSayisi}
          renk="#9b7a6a"
        />
      )}
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

        <OgrenmeZinciri />

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
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>5 Bölüm</span>
            </div>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#888', lineHeight: 1.7, margin: 0 }}>
              Yas, ihanet ve varoluşsal sorgulama. Düşünce ile eylem arasında sıkışmış bir prensin görünmeyen yolculuğu.
            </p>
            <EtiketBloku karakterId="hamlet" />
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
              Kral Duncan'ın generali. Bir kehanet, bir karar, bir yıkım. İktidar hırsı, suçluluk ve paranoyanın iç çöküşü.
            </p>
            <EtiketBloku karakterId="macbeth" />
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
            <EtiketBloku karakterId="willy" />
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
            <EtiketBloku karakterId="biff" />
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
