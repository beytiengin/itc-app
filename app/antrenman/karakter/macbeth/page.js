// app/antrenman/karakter/macbeth/page.js
// ITC Actor's Gym — Macbeth karakter sayfası

'use client';

import { useState, useEffect } from 'react';
import { getKalibrasyonProfili, ilkGirisMesaji } from '../../../lib/kalibrasyon';
import macbeth from '../../../../data/karakterler/macbeth';
import TimelineGorumu from '../../../../components/TimelineGorumu';
import EgzersizListesi from '../../../../components/EgzersizListesi';
import BosluklarGorumu from '../../../../components/BosluklarGorumu';

export default function MacbethSayfasi() {
  const [kalibrasyon, setKalibrasyon] = useState(null);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [aktifSekme, setAktifSekme] = useState('dogrular');
  const [girisGoster, setGirisGoster] = useState(false);

  useEffect(() => {
    async function yukle() {
      const profil = await getKalibrasyonProfili();
      setKalibrasyon(profil);
      setYukleniyor(false);
      if (typeof window !== 'undefined') {
        const goruldu = localStorage.getItem('macbeth_ilk_giris');
        if (!goruldu) setGirisGoster(true);
      }
    }
    yukle();
  }, []);

  function girisKapat() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('macbeth_ilk_giris', '1');
    }
    setGirisGoster(false);
  }

  function egzersizTamamlandi(egzersizId, sonuc) {
    console.log('Egzersiz tamamlandi:', egzersizId, sonuc);
  }

  if (yukleniyor) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f0ede8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.3em', color: '#888', textTransform: 'uppercase' }}>Hazırlanıyor…</span>
      </main>
    );
  }

  const girisData = ilkGirisMesaji(kalibrasyon, macbeth.ad);

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
          <a href="/antrenman/karakter" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase', textDecoration: 'none' }}>← Karakterler</a>
        </div>
      </header>

      <section style={{ flex: 1, padding: '3rem 2rem', maxWidth: '720px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
          <div style={{ width: '1px', height: '50px', backgroundColor: '#c9a96e', opacity: 0.4, margin: '0 auto' }} />
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#c9a96e', textTransform: 'uppercase' }}>{macbeth.tur}</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(3rem, 8vw, 5rem)', color: '#f0ede8', margin: 0, lineHeight: 1, letterSpacing: '0.05em' }}>{macbeth.ad}</h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: '#aaa', margin: 0 }}>{macbeth.yazar} · {macbeth.donem}</p>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: '#ccc', maxWidth: '500px', lineHeight: 1.8, margin: '1rem auto 0 auto' }}>{macbeth.ozet}</p>
        </div>

        {girisGoster && (
          <div style={{ padding: '1.4rem 1.6rem', backgroundColor: '#15110a', border: '1px solid #c9a96e44', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: '#f0ede8', lineHeight: 1.7, margin: 0, flex: 1 }}>
                {girisData.metin}
              </p>
              <button onClick={girisKapat} style={{ padding: '0.5rem 0.9rem', backgroundColor: 'transparent', border: '1px solid #c9a96e55', color: '#c9a96e', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>Kapat</button>
            </div>
            {girisData.yonlendirme && (
              <a href={girisData.yonlendirme.link} style={{ alignSelf: 'flex-start', padding: '0.7rem 1.4rem', backgroundColor: '#c9a96e', color: '#0a0a0a', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d9b97e'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#c9a96e'; }}>
                {girisData.yonlendirme.buton} →
              </a>
            )}
          </div>
        )}

        <div style={{ padding: '1.2rem 1.5rem', backgroundColor: '#0f0f0f', border: '1px solid #2a2a2a', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Baseline · {macbeth.baseline.ad}</span>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: '#ccc', lineHeight: 1.7, margin: 0 }}>{macbeth.baseline.aciklama}</p>
        </div>

        <div style={{ display: 'flex', gap: '0.3rem', backgroundColor: '#0f0f0f', border: '1px solid #2a2a2a', padding: '0.3rem', flexWrap: 'wrap' }}>
          {[
            { id: 'dogrular', label: 'Doğrular' },
            { id: 'timeline', label: 'Timeline' },
            { id: 'bosluklar', label: 'Boşluklar' },
            { id: 'egzersizler', label: 'Egzersizler' },
          ].map((sekme) => (
            <button key={sekme.id} onClick={() => setAktifSekme(sekme.id)} style={{ flex: 1, minWidth: '100px', padding: '0.9rem 0.5rem', backgroundColor: aktifSekme === sekme.id ? '#1a1a1a' : 'transparent', border: 'none', color: aktifSekme === sekme.id ? '#c9a96e' : '#888', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.25s ease' }}>{sekme.label}</button>
          ))}
        </div>

        {aktifSekme === 'dogrular' && <DogrularBolumu dogrular={macbeth.dogrular} />}
        {aktifSekme === 'timeline' && <TimelineGorumu sahneler={macbeth.sahneler} kalibrasyon={kalibrasyon} />}
        {aktifSekme === 'bosluklar' && <BosluklarGorumu bosluklar={macbeth.bosluklar} kalibrasyon={kalibrasyon} />}
        {aktifSekme === 'egzersizler' && <EgzersizListesi egzersizler={macbeth.egzersizler} kalibrasyon={kalibrasyon} onEgzersizTamamlandi={egzersizTamamlandi} />}

        <div style={{ marginTop: '1rem', padding: '1.2rem 1.5rem', backgroundColor: '#0f0f0f', border: '1px solid #2a2a2a' }}>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.3em', color: '#888', textTransform: 'uppercase', marginBottom: '0.8rem' }}>Kritik İlişkiler</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {macbeth.iliskiler.map((isim) => (
              <span key={isim} style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#f0ede8', padding: '0.4rem 0.9rem', border: '1px solid #3a3a3a' }}>{isim}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function DogrularBolumu({ dogrular }) {
  const kategoriler = [...new Set(dogrular.map((d) => d.kategori))];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#aaa', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>Karakterin metin içinde sabitlenmiş gerçekleri. Yorum alanı değil — zemin.</p>
      {kategoriler.map((kat) => (
        <div key={kat}>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase', marginBottom: '0.8rem' }}>{kat}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {dogrular.filter((d) => d.kategori === kat).map((d, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', padding: '0.7rem 1rem', backgroundColor: '#0f0f0f', borderLeft: '2px solid #c9a96e44' }}>
                <span style={{ color: '#c9a96e', fontSize: '0.7rem', lineHeight: 1.6 }}>◆</span>
                <p style={{ flex: 1, fontFamily: 'Cormorant Garamond, serif', fontSize: '0.95rem', color: '#ddd', lineHeight: 1.6, margin: 0 }}>{d.madde}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}