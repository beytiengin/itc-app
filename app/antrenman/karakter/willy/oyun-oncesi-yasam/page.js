// app/antrenman/karakter/willy/oyun-oncesi-yasam/page.js
// ITC Actor's Gym — Modül II Willy · Oyun Öncesi Yaşam
//
// Workbook s.58-65 birebir karşılığı.
// Sahneye çıkmadan önce ne yaşandı — Willy'nin bedeninde taşıdığı geçmiş.
// 8 olay + 9 ilişki kartı (her biri açılır/kapanır, yansıma + onay).

'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabase';
import willyRaw from '../../../../../data/karakterler/willy';
import { willyIcerik } from '../../../../../data/willy-i18n';
import { useDil } from '../../../../lib/dil';
import {
  olayYansimalariniGetir,
  iliskiYansimalariniGetir,
} from '../../../../lib/hamlet-veri';
import OyunOncesiOlayKart from '../../../../../components/OyunOncesiOlayKart';
import OyunOncesiIliskiKart from '../../../../../components/OyunOncesiIliskiKart';
import HamletBolumGecisi from '../../../../../components/HamletBolumGecisi';
import SayfaIskelet from '../../../../../components/SayfaIskelet';

const TON = 'var(--accent)';

export default function OyunOncesiYasamSayfasi() {
  const { dil } = useDil();
  const willy = willyIcerik(dil, willyRaw);
  const [olayYansimalari, setOlayYansimalari] = useState({});
  const [iliskiYansimalari, setIliskiYansimalari] = useState({});
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function yukle() {
      const [olaylar, iliskiler] = await Promise.all([
        olayYansimalariniGetir(willy.id),
        iliskiYansimalariniGetir(willy.id),
      ]);
      setOlayYansimalari(olaylar);
      setIliskiYansimalari(iliskiler);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  const olaylar = willy.oyunOncesi?.olaylar || [];
  const iliskiler = willy.oyunOncesi?.iliskiler || [];

  const olayIcselSayisi = Object.values(olayYansimalari).filter((y) => y.icselKabul).length;
  const iliskiTanidiSayisi = Object.values(iliskiYansimalari).filter((y) => y.tanidi).length;

  if (yukleniyor) {
    return <SayfaIskelet />;
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-base)',
        color: 'var(--ink)',
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
            href="/antrenman/karakter/willy"
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              color: 'var(--ink-muted)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              alignSelf: 'flex-start',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = TON; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
          >
            ← Willy Loman
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
              color: 'var(--ink)',
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
              color: 'var(--ink-muted)',
              margin: 0,
            }}
          >
            Sahneye çıkmadan önce ne yaşandı
          </p>
        </header>

        {/* ─── Açılış metni ─── */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p style={paragrafStili}>
            Miller'ın oyunu kronolojik bir başlangıçla açılmaz. Seyirci olayların
            ortasına bırakılır. Babası ölmüştür, annesi yeniden evlenmiştir, bir
            hayalet surlarda dolaşır. Bütün bunlar oyunun hareket noktasıdır, ama
            hiçbiri sahnede gösterilmez.
          </p>
          <p style={paragrafStili}>
            Sahneye ilk çıktığın an, Willy zaten kırılmış bir dünyada yaşıyordur.
          </p>

          {/* Vurgu kutusu */}
          <div
            style={{
              borderLeft: `2px solid ${TON}`,
              padding: '0.8rem 1.4rem',
              backgroundColor: 'var(--accent-bg)',
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
              "Willy sahneye ilk çıktığı an, bütün geçmiş ağırlığını bedeninde taşır."
            </p>
          </div>

          {/* Timeline çapraz atıf — ipucu */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.9rem',
              padding: '0.7rem 1.1rem',
              border: '1px dashed var(--rule)',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                color: 'var(--ink-muted)',
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
                color: 'var(--ink-soft)',
                flex: 1,
                minWidth: '220px',
              }}
            >
              Bu sekiz olay sahnede gösterilmez — ama Zaman Çizgisi'nin ilk iki
              sahnesinde Willy'nin bedeninde olur.
            </span>
            <a
              href="/antrenman/karakter/willy/timeline"
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
              Zaman Çizgisi →
            </a>
          </div>

          {/* ITC Prensibi */}
          <div
            style={{
              border: '1px solid var(--rule)',
              padding: '1.6rem 1.8rem',
              backgroundColor: 'var(--bg-elevated)',
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
                color: 'var(--ink-soft)',
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
                color: 'var(--ink-soft)',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Willy'nin ilk hâli — <em>"Ölüyorum yorgunluktan"</em>
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
            altyazi="Willy sahneye ilk çıktığında, hepsi bedeninde."
            ilerleme={`${olayIcselSayisi} / ${olaylar.length} içselleştirildi`}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {olaylar.map((olay) => (
              <OyunOncesiOlayKart
                key={olay.no}
                olay={olay}
                karakterId={willy.id}
                baslangic={olayYansimalari[olay.no]}
              />
            ))}
          </div>

          <KapanisKutusu>
            Sekiz olay, sekiz yük. Willy sahneye ilk çıktığında, hepsi bedeninde.
          </KapanisKutusu>
        </section>

        {/* ─── 8 İLİŞKİ ─── */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <BolumBasligi
            etiket="İkinci Bölüm"
            baslik="Dokuz İlişki"
            altyazi="Geçmiş → Şimdi → İz"
            ilerleme={`${iliskiTanidiSayisi} / ${iliskiler.length} tanındı`}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {iliskiler.map((iliski) => (
              <OyunOncesiIliskiKart
                key={iliski.no}
                iliski={iliski}
                karakterId={willy.id}
                baslangic={iliskiYansimalari[iliski.no]}
              />
            ))}
          </div>

          <KapanisKutusu>
            Willy, sahneye sekiz olayla değil — sekiz olay ve dokuz ilişkiyle çıkıyor.
          </KapanisKutusu>
        </section>

        {/* ─── Sayfa Sonu ─── */}
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem',
            padding: '2.4rem 2rem',
            border: `1px solid color-mix(in srgb, ${TON} 20%, transparent)`,
            backgroundColor: 'var(--accent-bg-deep)',
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
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
              margin: 0,
              maxWidth: '600px',
              alignSelf: 'center',
            }}
          >
            Willy'nin koordinatlarını kurdun. Doğruları gördün, oyun öncesini tanıdın,
            ilişkileri haritaladın. Şimdilik bunlar bedeninde otursun. Bir nefes ver.
          </p>
        </section>

        <HamletBolumGecisi
          oncekiEtiket="Bölüm 1"
          oncekiBaslik="Doğrular"
          oncekiYol="/antrenman/karakter/willy"
          sonrakiEtiket="Bölüm 3"
          sonrakiBaslik="Zaman Çizgisi"
          sonrakiYol="/antrenman/karakter/willy/timeline"
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
            color: 'var(--ink-muted)',
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
          color: 'var(--ink)',
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
          color: 'var(--ink-muted)',
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
        borderLeft: `2px solid color-mix(in srgb, ${TON} 33%, transparent)`,
        padding: '0.7rem 1.3rem',
        marginTop: '0.6rem',
      }}
    >
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '1rem',
          color: 'var(--ink-soft)',
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
  color: 'var(--ink-soft)',
  lineHeight: 1.8,
  margin: 0,
};

const ekranStili = {
  minHeight: '100vh',
  backgroundColor: 'var(--bg-base)',
  color: 'var(--ink)',
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
    color: 'var(--ink-soft)',
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
        borderBottom: '1px solid var(--rule)',
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
          color: 'var(--accent)',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}
      >
        Inside The Character
      </a>
      <nav style={{ display: 'flex', gap: '1.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <a href="/kalibrasyon" style={navLink}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}>
          Kalibrasyon
        </a>
        <a href="/kulis" style={navLink}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}>
          Kulis
        </a>
        <a href="/antrenman/karakter" style={{ ...navLink, color: 'var(--ink)' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}>
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
            color: 'var(--ink-muted)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
        >
          Çıkış
        </button>
      </nav>
    </header>
  );
}
