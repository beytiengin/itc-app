// app/antrenman/karakter/hamlet/oyun-oncesi-yasam/page.js
// ITC Actor's Gym — Modül II Hamlet · Oyun Öncesi Yaşam
//
// Workbook s.58-65 birebir karşılığı.
// Sahneye çıkmadan önce ne yaşandı — Hamlet'in bedeninde taşıdığı geçmiş.
// 8 olay + 8 ilişki kartı (her biri açılır/kapanır, yansıma + onay).

'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabase';
import hamlet from '../../../../../data/karakterler/hamlet';
import {
  olayYansimalariniGetir,
  iliskiYansimalariniGetir,
} from '../../../../lib/hamlet-veri';
import OyunOncesiOlayKart from '../../../../../components/OyunOncesiOlayKart';
import OyunOncesiIliskiKart from '../../../../../components/OyunOncesiIliskiKart';
import HamletBolumGecisi from '../../../../../components/HamletBolumGecisi';

const TON = '#c9a96e';

export default function OyunOncesiYasamSayfasi() {
  const [olayYansimalari, setOlayYansimalari] = useState({});
  const [iliskiYansimalari, setIliskiYansimalari] = useState({});
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function yukle() {
      const [olaylar, iliskiler] = await Promise.all([
        olayYansimalariniGetir(hamlet.id),
        iliskiYansimalariniGetir(hamlet.id),
      ]);
      setOlayYansimalari(olaylar);
      setIliskiYansimalari(iliskiler);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  const olaylar = hamlet.oyunOncesi?.olaylar || [];
  const iliskiler = hamlet.oyunOncesi?.iliskiler || [];

  const olayIcselSayisi = Object.values(olayYansimalari).filter((y) => y.icselKabul).length;
  const iliskiTanidiSayisi = Object.values(iliskiYansimalari).filter((y) => y.tanidi).length;

  if (yukleniyor) {
    return (
      <main style={ekranStili}>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: '#888',
            textTransform: 'uppercase',
          }}
        >
          Hazırlanıyor…
        </span>
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
      <KarakterHeader />

      <article
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
          padding: '3rem 2rem 5rem',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}
      >
        {/* ─── Açılış ─── */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <a
            href="/antrenman/karakter/hamlet"
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              color: '#888',
              textTransform: 'uppercase',
              textDecoration: 'none',
              alignSelf: 'flex-start',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = TON; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}
          >
            ← Hamlet
          </a>

          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.65rem',
              letterSpacing: '0.35em',
              color: TON,
              textTransform: 'uppercase',
            }}
          >
            Modül II · Bölüm 2
          </span>

          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 6vw, 3.4rem)',
              color: '#f0ede8',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Oyun Öncesi Yaşam
          </h1>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: '#888',
              margin: 0,
            }}
          >
            Sahneye çıkmadan önce ne yaşandı
          </p>
        </header>

        {/* ─── Açılış metni ─── */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p style={paragrafStili}>
            Shakespeare'in Hamlet oyunu ilk sahnesinde başlamaz. Seyirci olayların
            ortasına bırakılır. Babası ölmüştür, annesi yeniden evlenmiştir, bir
            hayalet surlarda dolaşır. Bütün bunlar oyunun hareket noktasıdır, ama
            hiçbiri sahnede gösterilmez.
          </p>
          <p style={paragrafStili}>
            Sahneye ilk çıktığın an, Hamlet zaten kırılmış bir dünyada yaşıyordur.
          </p>

          {/* Vurgu kutusu */}
          <div
            style={{
              borderLeft: `2px solid ${TON}`,
              padding: '0.8rem 1.4rem',
              backgroundColor: '#15110a',
            }}
          >
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: TON,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              "Hamlet sahneye ilk çıktığı an, bütün geçmiş ağırlığını bedeninde taşır."
            </p>
          </div>

          {/* Timeline çapraz atıf — ipucu */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.9rem',
              padding: '0.7rem 1.1rem',
              border: '1px dashed #2a2a2a',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                color: '#888',
                textTransform: 'uppercase',
              }}
            >
              İpucu
            </span>
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: '#aaa',
                flex: 1,
                minWidth: '220px',
              }}
            >
              Bu sekiz olay sahnede gösterilmez — ama Timeline'ın ilk iki sahnesinde
              Hamlet'in bedeninde olur.
            </span>
            <a
              href="/antrenman/karakter/hamlet/timeline"
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.25em',
                color: TON,
                textTransform: 'uppercase',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'opacity 0.25s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              Timeline →
            </a>
          </div>

          {/* ITC Prensibi */}
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
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.35em',
                color: TON,
                textTransform: 'uppercase',
              }}
            >
              ITC İlkesi · Görmediğimizi Taşımak
            </span>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 300,
                fontSize: '0.88rem',
                color: '#ccc',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              ITC yaklaşımının çekirdeklerinden biri budur: karakterin sahnede
              gösterilmeyen geçmişini, oyuncunun sahnede taşıması.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: '#bbb',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Hamlet'in ilk repliği — <em>"Yeğenden biraz fazla, oğuldan bir hayli az"</em>
              {' '}— eğer arkasında iki ay önce ölmüş bir baba, iki ay sonra evlenen bir
              anne, gasp edilmiş bir taht yoksa, sadece bir cümle kalır. Eğer varsa —
              bir insanın cümlesi olur.
            </p>
          </div>
        </section>

        {/* ─── 8 OLAY ─── */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <BolumBasligi
            etiket="Birinci Bölüm"
            baslik="Sekiz Olay"
            altyazi="Hamlet sahneye ilk çıktığında, hepsi bedeninde."
            ilerleme={`${olayIcselSayisi} / ${olaylar.length} içselleştirildi`}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {olaylar.map((olay) => (
              <OyunOncesiOlayKart
                key={olay.no}
                olay={olay}
                karakterId={hamlet.id}
                baslangic={olayYansimalari[olay.no]}
              />
            ))}
          </div>

          <KapanisKutusu>
            Sekiz olay, sekiz yük. Hamlet sahneye ilk çıktığında, hepsi bedeninde.
          </KapanisKutusu>
        </section>

        {/* ─── 8 İLİŞKİ ─── */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <BolumBasligi
            etiket="İkinci Bölüm"
            baslik="Sekiz İlişki"
            altyazi="Geçmiş → Şimdi → İz"
            ilerleme={`${iliskiTanidiSayisi} / ${iliskiler.length} tanındı`}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {iliskiler.map((iliski) => (
              <OyunOncesiIliskiKart
                key={iliski.no}
                iliski={iliski}
                karakterId={hamlet.id}
                baslangic={iliskiYansimalari[iliski.no]}
              />
            ))}
          </div>

          <KapanisKutusu>
            Hamlet, sahneye sekiz olayla değil — sekiz olay ve sekiz ilişkiyle çıkıyor.
          </KapanisKutusu>
        </section>

        {/* ─── Sayfa Sonu ─── */}
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem',
            padding: '2.4rem 2rem',
            border: `1px solid ${TON}33`,
            backgroundColor: '#100c06',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.35em',
              color: TON,
              textTransform: 'uppercase',
            }}
          >
            ✓ Buraya kadar
          </span>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: '#ddd',
              lineHeight: 1.7,
              margin: 0,
              maxWidth: '600px',
              alignSelf: 'center',
            }}
          >
            Hamlet'in koordinatlarını kurdun. Doğruları gördün, oyun öncesini tanıdın,
            ilişkileri haritaladın. Şimdilik bunlar bedeninde otursun. Bir nefes ver.
          </p>
        </section>

        <HamletBolumGecisi
          oncekiEtiket="Bölüm 1"
          oncekiBaslik="Doğrular"
          oncekiYol="/antrenman/karakter/hamlet"
          sonrakiEtiket="Bölüm 3"
          sonrakiBaslik="Sahne Timeline"
          sonrakiYol="/antrenman/karakter/hamlet/timeline"
        />
      </article>
    </main>
  );
}

// ─── YARDIMCI BİLEŞENLER ────────────────────────────────────────────────────

function BolumBasligi({ etiket, baslik, altyazi, ilerleme }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.55rem',
            letterSpacing: '0.35em',
            color: TON,
            textTransform: 'uppercase',
          }}
        >
          {etiket}
        </span>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            color: '#888',
            textTransform: 'uppercase',
          }}
        >
          {ilerleme}
        </span>
      </div>
      <h2
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '1.8rem',
          color: '#f0ede8',
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        {baslik}
      </h2>
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '0.95rem',
          color: '#888',
          margin: 0,
        }}
      >
        {altyazi}
      </p>
    </div>
  );
}

function KapanisKutusu({ children }) {
  return (
    <div
      style={{
        borderLeft: `2px solid ${TON}55`,
        padding: '0.7rem 1.3rem',
        marginTop: '0.6rem',
      }}
    >
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '1rem',
          color: '#bbb',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

const paragrafStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.05rem',
  color: '#ddd',
  lineHeight: 1.8,
  margin: 0,
};

const ekranStili = {
  minHeight: '100vh',
  backgroundColor: '#0a0a0a',
  color: '#f0ede8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// ─── HEADER ─────────────────────────────────────────────────────────────────

function KarakterHeader() {
  async function cikisYap() {
    try {
      await supabase.auth.signOut();
    } finally {
      if (typeof window !== 'undefined') window.location.href = '/';
    }
  }

  const navLink = {
    fontFamily: 'Jost, sans-serif',
    fontWeight: 200,
    fontSize: '0.6rem',
    letterSpacing: '0.25em',
    color: '#aaa',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 0.25s ease',
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.6rem 2rem',
        borderBottom: '1px solid #2a2a2a',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          color: '#c9a96e',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}
      >
        Inside The Character
      </a>
      <nav style={{ display: 'flex', gap: '1.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <a href="/kalibrasyon" style={navLink}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a96e'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#aaa'; }}>
          Kalibrasyon
        </a>
        <a href="/kulis" style={navLink}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a96e'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#aaa'; }}>
          Kulis
        </a>
        <a href="/antrenman/karakter" style={{ ...navLink, color: '#f0ede8' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a96e'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#f0ede8'; }}>
          ← Karakterler
        </a>
        <button
          onClick={cikisYap}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            ...navLink,
            color: '#666',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#f0ede8'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#666'; }}
        >
          Çıkış
        </button>
      </nav>
    </header>
  );
}
