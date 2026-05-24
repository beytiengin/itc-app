// app/antrenman/karakter/willy/page.js
// ITC Actor's Gym — Willy Loman karakter sayfası (hub)
//
// Modül II generic mimari (A-2). Çift dilli (TR/EN) vitrin: chrome metinleri
// data/willy-i18n.js sözlüğünden gelir; içerik (Doğrular) henüz willy.js (TR).
// Bölüm kartlarında ilerleme göstergesi: Supabase'den arkada yüklenir, sayfa
// bloklanmaz. Oturum yoksa (anonim önizleme) tüm bölümler "başlanmadı" görünür.

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import willyRaw from '../../../../data/karakterler/willy';
import willyI18n, { willyIcerik } from '../../../../data/willy-i18n';
import { useDil, ceviri } from '../../../../app/lib/dil';
import {
  olayYansimalariniGetir,
  iliskiYansimalariniGetir,
  sahneYansimalariniGetir,
  tercihleriGetir,
  altSoruYansimalariniGetir,
} from '../../../../app/lib/hamlet-veri';
import DogrularKarti from '../../../../components/DogrularKarti';
import HamletAltSayfaHeader from '../../../../components/HamletAltSayfaHeader';

const TON = 'var(--accent)';
const KOK = '/antrenman/karakter/willy';

// Bölüm rotaları — sözlükteki kartlarla (hub.kartlar) sıra-hizalı.
const BOLUM_YOLLARI = [
  `${KOK}/oyun-oncesi-yasam`,
  `${KOK}/timeline`,
  `${KOK}/yazarin-cercevesi`,
  `${KOK}/senin-cerceven`,
];

function metinSayisi(obj) {
  return Object.values(obj || {}).filter((v) => (v.metin?.length || 0) > 0).length;
}

export default function WillySayfasi() {
  const router = useRouter();
  const { dil } = useDil();
  const willy = willyIcerik(dil, willyRaw);
  const s = ceviri(willyI18n, dil);
  const t = s.hub;
  const ic = s.icerik;

  const [ilerleme, setIlerleme] = useState(null); // null = henüz yüklenmedi

  // Eski hash'leri yeni route'lara yönlendir.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (!hash) return;
    if (hash === '#bosluklar' || hash.startsWith('#bosluk-')) {
      router.replace(`${KOK}/senin-cerceven`);
    } else if (hash === '#antrenman' || hash === '#egzersizler') {
      router.replace(`${KOK}/senin-cerceven`);
    } else if (hash === '#sahneler' || hash.startsWith('#sahne-')) {
      router.replace(`${KOK}/timeline`);
    }
  }, [router]);

  // İlerlemeyi arkada yükle (sayfayı bloklamaz).
  useEffect(() => {
    let iptal = false;
    async function yukle() {
      const [olay, iliski, sahne, tercih, altSoru] = await Promise.all([
        olayYansimalariniGetir(willy.id),
        iliskiYansimalariniGetir(willy.id),
        sahneYansimalariniGetir(willy.id),
        tercihleriGetir(willy.id),
        altSoruYansimalariniGetir(willy.id),
      ]);
      if (iptal) return;

      const olayToplam = (willy.oyunOncesi?.olaylar || []).length;
      const iliskiToplam = (willy.oyunOncesi?.iliskiler || []).length;
      const sahneToplam = (willy.sahnelerWorkbook || []).length;
      const tercihToplam = (willy.tercihler || []).length;
      const boslukToplam = (willy.boslukSet || []).length;

      const sahneDokunulan = Object.values(sahne).filter(
        (v) => v.sicaklik != null || (v.metin?.length || 0) > 0,
      ).length;

      const tercihYapilan = Object.values(tercih).filter(
        (v) => (v.secimler?.length || 0) > 0 || (v.ozelYorum?.length || 0) > 0,
      ).length;

      const boslukYazilan = (willy.boslukSet || []).filter((b) => {
        const set = altSoru[b.no] || {};
        return Object.values(set).some((y) => (y.metin?.length || 0) > 0);
      }).length;

      setIlerleme([
        { yapilan: metinSayisi(olay) + metinSayisi(iliski), toplam: olayToplam + iliskiToplam },
        { yapilan: sahneDokunulan, toplam: sahneToplam },
        { yapilan: tercihYapilan, toplam: tercihToplam },
        { yapilan: boslukYazilan, toplam: boslukToplam },
      ]);
    }
    yukle();
    return () => { iptal = true; };
  }, []);

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
      <HamletAltSayfaHeader />

      {/* Karakter kimliği */}
      <section
        style={{
          padding: '3rem 2rem 2rem',
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
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
            {t.ustEtiket}
          </span>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 6vw, 3.2rem)',
              color: 'var(--ink)',
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '0.02em',
            }}
          >
            {ic.ad}
          </h1>
          <div
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.8rem',
              color: 'var(--ink-muted)',
              letterSpacing: '0.12em',
            }}
          >
            {ic.yazar} · {ic.donem} · {ic.tur}
          </div>
          {ic.ozet && (
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--ink-soft)',
                maxWidth: '700px',
                lineHeight: 1.7,
                margin: '0.8rem 0 0 0',
              }}
            >
              {ic.ozet}
            </p>
          )}
        </div>
      </section>

      {/* Bölüm 1 · Doğrular */}
      <section
        style={{
          padding: '0 2rem',
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.9rem',
            marginBottom: '1rem',
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
            {t.bolum1Etiket}
          </span>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.4rem',
              color: 'var(--ink)',
            }}
          >
            {t.bolum1Baslik}
          </span>
        </div>
        <DogrularKarti dogrular={willy.dogrular} />
      </section>

      {/* Bölümler 2-5 — Alt sayfalar */}
      <section
        style={{
          padding: '3rem 2rem 0',
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.4rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
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
            {t.koordinatEtiket}
          </span>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.4rem',
              color: 'var(--ink)',
            }}
          >
            {t.koordinatBaslik}
          </span>
        </div>
        <BolumKartlari kartlar={t.kartlar} acMetin={t.ac} ilerleme={ilerleme} dil={dil} />
      </section>

      {/* Modül III · Yolculuk Modu CTA */}
      <section
        style={{
          padding: '4rem 2rem 5rem',
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <ModulIIICta t={t} />
      </section>
    </main>
  );
}

// ─── BÖLÜM KARTLARI ─────────────────────────────────────────────────────────

function BolumKartlari({ kartlar, acMetin, ilerleme, dil }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
      }}
    >
      {kartlar.map((k, i) => (
        <a
          key={BOLUM_YOLLARI[i]}
          href={BOLUM_YOLLARI[i]}
          style={{
            border: '1px solid var(--rule)',
            padding: '1.6rem 1.8rem',
            backgroundColor: 'var(--bg-elevated)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'var(--ink)',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = TON;
            e.currentTarget.style.backgroundColor = 'var(--accent-bg-deep)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--rule)';
            e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
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
            {k.etiket}
          </span>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.5rem',
              color: 'var(--ink)',
              lineHeight: 1.2,
            }}
          >
            {k.baslik}
          </span>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.95rem',
              color: 'var(--ink-muted)',
            }}
          >
            {k.altyazi}
          </span>
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.82rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
              margin: '0.4rem 0 0 0',
            }}
          >
            {k.aciklama}
          </p>

          <BolumDurum durum={ilerleme ? ilerleme[i] : null} dil={dil} />

          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              color: TON,
              textTransform: 'uppercase',
              marginTop: '0.2rem',
            }}
          >
            {acMetin}
          </span>
        </a>
      ))}
    </div>
  );
}

// ─── BÖLÜM İLERLEME GÖSTERGESİ ──────────────────────────────────────────────
// Zanaat dili — puan/rozet değil. Yüklenmeden önce yer tutmaz (sayfa bloklanmaz).

function BolumDurum({ durum, dil }) {
  if (!durum) return null; // henüz yüklenmedi
  const { yapilan, toplam } = durum;
  const tamam = toplam > 0 && yapilan >= toplam;
  const oran = toplam > 0 ? Math.min(yapilan / toplam, 1) : 0;

  if (yapilan === 0) {
    return (
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          color: 'var(--ink-muted)',
          textTransform: 'uppercase',
          marginTop: '0.4rem',
        }}
      >
        {dil === 'en' ? 'Not started yet' : 'Henüz başlanmadı'}
      </span>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.5rem' }}>
      <div
        style={{
          height: '2px',
          width: '100%',
          backgroundColor: 'var(--rule)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${oran * 100}%`,
            backgroundColor: tamam ? 'var(--onay)' : TON,
            transition: 'width 0.4s ease',
          }}
        />
      </div>
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          color: tamam ? 'var(--onay)' : 'var(--ink-soft)',
          textTransform: 'uppercase',
        }}
      >
        {tamam ? (dil === 'en' ? '✓ Complete' : '✓ Tamamlandı') : `${yapilan} / ${toplam}`}
      </span>
    </div>
  );
}

// ─── MODÜL III · YOLCULUK MODU CTA ──────────────────────────────────────────

function ModulIIICta({ t }) {
  return (
    <div
      style={{
        border: `1px solid color-mix(in srgb, ${TON} 20%, transparent)`,
        backgroundColor: 'var(--accent-bg-deep)',
        padding: '2.2rem 2.4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.4em',
          color: TON,
          textTransform: 'uppercase',
        }}
      >
        {t.modul3Etiket}
      </span>

      <h2
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
          color: 'var(--ink)',
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        {t.modul3Baslik}
      </h2>

      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '1.05rem',
          color: 'var(--ink-soft)',
          lineHeight: 1.8,
          margin: 0,
          maxWidth: '700px',
        }}
      >
        {t.modul3Metin}
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          paddingTop: '0.6rem',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            color: 'var(--ink-muted)',
            textTransform: 'uppercase',
            padding: '0.4rem 0.9rem',
            border: '1px solid var(--rule)',
          }}
        >
          {t.modul3Rozet}
        </span>
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: 'var(--ink-muted)',
          }}
        >
          {t.modul3Not}
        </span>
      </div>
    </div>
  );
}
