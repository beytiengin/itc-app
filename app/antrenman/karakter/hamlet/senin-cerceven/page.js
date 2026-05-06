// app/antrenman/karakter/hamlet/senin-cerceven/page.js
// ITC Actor's Gym — Modül II Hamlet · Senin Çerçeven (5 Boşluk)
//
// Workbook s.106-125 birebir karşılığı.

'use client';

import { useState, useEffect } from 'react';
import hamlet from '../../../../../data/karakterler/hamlet';
import { altSoruYansimalariniGetir } from '../../../../lib/hamlet-veri';
import HamletAltSayfaHeader from '../../../../../components/HamletAltSayfaHeader';
import HamletBoslukKart from '../../../../../components/HamletBoslukKart';
import HamletBolumGecisi from '../../../../../components/HamletBolumGecisi';

const TON = '#7a9b7a';
const ALTIN = '#c9a96e';

export default function SeninCerceveAnaSayfa() {
  const [yansimalar, setYansimalar] = useState({});
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function yukle() {
      const veri = await altSoruYansimalariniGetir(hamlet.id);
      setYansimalar(veri);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  const bosluklar = hamlet.boslukSet || [];

  function yazilanSayisi(boslukNo) {
    const set = yansimalar[boslukNo] || {};
    return Object.values(set).filter((y) => (y.metin?.length || 0) > 0).length;
  }

  const tamamlananBosluk = bosluklar.filter((b) => yazilanSayisi(b.no) > 0).length;
  const toplamYazilanAltSoru = bosluklar.reduce((s, b) => s + yazilanSayisi(b.no), 0);
  const toplamAltSoruSayisi = bosluklar.reduce((s, b) => s + (b.altSorular?.length || 0), 0);
  const hepsiBaslamis = tamamlananBosluk >= bosluklar.length;

  if (yukleniyor) {
    return (
      <main style={ekranStili}>
        <span style={yukleniyorMetin}>Hazırlanıyor…</span>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#f0ede8',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <HamletAltSayfaHeader />

      <article
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
          padding: '3rem 2rem 5rem',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        {/* Açılış */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <a
            href="/antrenman/karakter/hamlet"
            style={geriLink}
            onMouseEnter={(e) => { e.currentTarget.style.color = ALTIN; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}
          >
            ← Hamlet
          </a>
          <span style={{ ...etiket, color: TON }}>Modül II · Bölüm 5</span>
          <h1 style={baslik}>◇ Senin Çerçeven</h1>
          <p style={altyazi}>Shakespeare'in sustuğu yer</p>
        </header>

        <p style={paragraf}>
          Yazarın Çerçevesi'nde Shakespeare'in yazdığını okudun. Şimdi, son bölümde,
          onun yazmadığını yazacaksın.
        </p>
        <p style={paragraf}>
          Hamlet metninde sahnelerin arasında büyük boşluklar var. Hamlet bir sahnede
          çıkıyor, sonraki sahnede başka bir Hamlet olarak giriyor. Aralarda bir şeyler
          yaşandı — Shakespeare bunların çoğunu yazmadı. Ama yaşandı. Karakter bedeninde
          taşıyor.
        </p>

        <div
          style={{
            borderLeft: `2px solid ${ALTIN}`,
            padding: '0.8rem 1.4rem',
            backgroundColor: '#15110a',
          }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: ALTIN,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            "Boşluklar tesadüf değil — oyuncuya bırakılmış mekânlar."
          </p>
        </div>

        {/* ITC 3. İlke */}
        <div
          style={{
            border: '1px solid #2a2a2a',
            padding: '1.6rem 1.8rem',
            backgroundColor: '#0d0d0d',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.9rem',
          }}
        >
          <span style={{ ...etiket, color: TON }}>ITC · 3. İlke · Sessiz Evrim</span>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: '#ccc',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            "Çoğu sistem sahne içindeki davranışı analiz ederken, ITC karakterin dönüşümünü
            sahne dışındaki boşluklarda arar. Repliklerin arasındaki suskunluk, bir sahnenin
            bittiği ama karakterin devam ettiği alanlar, oyuncunun zihinsel canlandırma
            becerisiyle doldurulur."
          </p>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.7rem',
              color: '#888',
              fontStyle: 'italic',
            }}
          >
            — Inside The Character, Manifesto, 3. Madde
          </span>
        </div>

        {/* Yöntem — 5 Adım */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span style={{ ...etiket, color: ALTIN }}>Boşluk Nasıl Yazılır?</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            <YontemAdim no="1" baslik="Çerçeveyi Oku">
              Sahne öncesi nerede bitti, sahne sonrası nerede başlıyor — iki ucu net gör.
            </YontemAdim>
            <YontemAdim no="2" baslik="Soruları Aç">
              "Burada ne oldu?" değil, "Hamlet'in bedeninde ne oldu?" diye sor.
            </YontemAdim>
            <YontemAdim no="3" baslik="Duyusal Yaz">
              Soyut kavramlardan kaç. "Üzüldü" değil, "sol elinin parmaklarını sıktı".
            </YontemAdim>
            <YontemAdim no="4" baslik="Tek Anı Seç">
              Boşluk uzun olabilir, ama sen tek bir anı yazıyorsun.
            </YontemAdim>
            <YontemAdim no="5" baslik="Sahneye Geçir">
              Yazdığın şey bir sonraki sahneye nasıl taşınacak?
            </YontemAdim>
          </div>
        </section>

        {/* Uyarı */}
        <div
          style={{
            border: '1px solid #2a2a2a',
            padding: '1.4rem 1.6rem',
            backgroundColor: '#0d0d0d',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.7rem',
          }}
        >
          <span style={{ ...etiket, color: TON }}>Doğru cevap aramak değil</span>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.95rem',
              color: '#bbb',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Yazdıkların "doğru" olmak zorunda değil — Shakespeare'in niyetiyle örtüşmek
            de zorunda değil. Çünkü Shakespeare niyetini sustu. Yazdıkların{' '}
            <em>senin Hamlet'in için</em> doğru olmalı.
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: '#888',
              lineHeight: 1.7,
              margin: '0.4rem 0 0 0',
            }}
          >
            Eğer bir boşluk için cümle gelmiyorsa, sayfayı boş bırak. Sonra geri dön.
            Bazen bir boşluk yarın açılır, bugün açılmaz. Bu da bir bilgi.
          </p>
        </div>

        {/* İlerleme */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '0.8rem',
            borderTop: '1px solid #1a1a1a',
          }}
        >
          <span style={{ ...etiket, color: TON }}>Beş Boşluk</span>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: hepsiBaslamis ? TON : '#888',
            }}
          >
            {tamamlananBosluk} / {bosluklar.length} boşluğa değinildi
            {toplamYazilanAltSoru > 0 && (
              <span style={{ color: '#666', marginLeft: '0.5rem', fontSize: '0.85rem' }}>
                ({toplamYazilanAltSoru} / {toplamAltSoruSayisi} alt-soru)
              </span>
            )}
          </span>
        </div>

        {/* Boşluk kartları */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {bosluklar.map((b) => (
            <HamletBoslukKart
              key={b.no}
              bosluk={b}
              yazilanSayisi={yazilanSayisi(b.no)}
            />
          ))}
        </div>

        {/* Sentez kartı */}
        {tamamlananBosluk > 0 && (
          <a
            href="/antrenman/karakter/hamlet/senin-cerceven/sentez"
            style={{
              border: `1px solid ${hepsiBaslamis ? TON : TON + '55'}`,
              backgroundColor: '#0d0d0d',
              padding: '1.8rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
              textDecoration: 'none',
              color: '#f0ede8',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = TON; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = hepsiBaslamis ? TON : TON + '55'; }}
          >
            <span style={{ ...etiket, color: TON }}>
              {hepsiBaslamis ? 'Sentez Hazır' : 'Sentez (kısmi)'}
            </span>
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '1.5rem',
                color: '#f0ede8',
              }}
            >
              Beş Boşluk, Bir Karakter
            </span>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 300,
                fontSize: '0.85rem',
                color: '#bbb',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Beş boşluğu birleştirip sahnelerin altında akan görünmez çizgiyi gör.
            </p>
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                color: TON,
                textTransform: 'uppercase',
                marginTop: '0.4rem',
              }}
            >
              Sentezi Aç →
            </span>
          </a>
        )}

        <HamletBolumGecisi
          oncekiEtiket="Bölüm 4"
          oncekiBaslik="Yazarın Çerçevesi"
          oncekiYol="/antrenman/karakter/hamlet/yazarin-cercevesi"
          sonrakiBaslik="Modül III · Yolculuk Modu"
          sonrakiYakinda
        />
      </article>
    </main>
  );
}

// ─── Yardımcılar ────────────────────────────────────────────────────────────

function YontemAdim({ no, baslik, children }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <span
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '1.5rem',
          color: ALTIN,
          minWidth: '32px',
          lineHeight: 1.1,
        }}
      >
        {no}
      </span>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 300,
            fontSize: '0.9rem',
            color: '#f0ede8',
            letterSpacing: '0.05em',
          }}
        >
          {baslik}
        </span>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: '#aaa',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {children}
        </p>
      </div>
    </div>
  );
}

const geriLink = {
  fontFamily: 'Jost, sans-serif',
  fontWeight: 200,
  fontSize: '0.6rem',
  letterSpacing: '0.3em',
  color: '#888',
  textTransform: 'uppercase',
  textDecoration: 'none',
  alignSelf: 'flex-start',
  transition: 'color 0.25s ease',
};

const etiket = {
  fontFamily: 'Jost, sans-serif',
  fontWeight: 200,
  fontSize: '0.65rem',
  letterSpacing: '0.35em',
  textTransform: 'uppercase',
};

const baslik = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontWeight: 300,
  fontSize: 'clamp(2.2rem, 6vw, 3.4rem)',
  color: '#f0ede8',
  margin: 0,
  lineHeight: 1.1,
};

const altyazi = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.1rem',
  color: '#888',
  margin: 0,
};

const paragraf = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.05rem',
  color: '#ddd',
  lineHeight: 1.8,
  margin: 0,
};

const yukleniyorMetin = {
  fontFamily: 'Jost, sans-serif',
  fontWeight: 200,
  fontSize: '0.7rem',
  letterSpacing: '0.3em',
  color: '#888',
  textTransform: 'uppercase',
};

const ekranStili = {
  minHeight: '100vh',
  backgroundColor: '#0a0a0a',
  color: '#f0ede8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
