// app/antrenman/karakter/hamlet/page.js
// ITC Actor's Gym — Hamlet karakter sayfası (hub)
//
// Modül II generic mimari (A-2). Willy hub'ının birebir karşılığı; fark yalnızca
// karakter bağlantısında (hamlet.js + hamlet-i18n.js + KOK). Hamlet TR-only:
// dil EN'e çevrilse bile ceviri() TR'ye düşer (hamlet-i18n.js'te en dalı yok).

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import hamletRaw from '../../../../data/karakterler/hamlet';
import hamletI18n, { hamletIcerik } from '../../../../data/hamlet-i18n';
import { useDil, ceviri } from '../../../../app/lib/dil';
import {
  ilerlemeGetir,
  kartlariKur,
  kartDurumu,
  durumMetni,
  sinyalEtiketi,
  siradakiAdim,
  selamMetni,
} from '../../../../app/lib/ilerleme';
import DogrularKarti from '../../../../components/DogrularKarti';
import HamletAltSayfaHeader from '../../../../components/HamletAltSayfaHeader';
import MikroBlokKart from '../../../../components/MikroBlokKart';

const TON = 'var(--accent)';
const KOK = '/antrenman/karakter/hamlet';

// Selam metni için karakter adı çekimleri (Türkçe morfolojisi sondan eklenir;
// generik substitusyon yapılamadığı için hub her karakter için açık geçer).
const KARAKTER = { ad: 'Hamlet', karakterIn: "Hamlet'in", karakterIni: "Hamlet'ini" };

// Bölüm rotaları — sözlükteki kartlarla (hub.kartlar) sıra-hizalı.
const BOLUM_YOLLARI = [
  `${KOK}/oyun-oncesi-yasam`,
  `${KOK}/timeline`,
  `${KOK}/yazarin-cercevesi`,
  `${KOK}/senin-cerceven`,
];

export default function HamletSayfasi() {
  const router = useRouter();
  const { dil } = useDil();
  const hamlet = hamletIcerik(dil, hamletRaw);
  const s = ceviri(hamletI18n, dil);
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

  // İlerlemeyi arkada yükle (sayfayı bloklamaz). Tek kaynak: karakter_ilerleme VIEW.
  useEffect(() => {
    let iptal = false;
    async function yukle() {
      const v = await ilerlemeGetir(hamlet.id);
      if (iptal) return;
      const toplamlar = {
        olay:   (hamlet.oyunOncesi?.olaylar || []).length,
        iliski: (hamlet.oyunOncesi?.iliskiler || []).length,
        sahne:  (hamlet.sahnelerWorkbook || []).length,
        tercih: (hamlet.tercihler || []).length,
        bosluk: (hamlet.boslukSet || []).length,
      };
      setIlerleme(kartlariKur(v, toplamlar));
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
        <MikroBlokKart veri={t.mikroBlok} />
        <KarsilayanBlok kartlar={t.kartlar} ilerleme={ilerleme} dil={dil} davet={t.davet} karakter={KARAKTER} />
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
        <TaniAccordion etiket={t.bolum1Etiket} baslik={t.bolum1Baslik} dogrular={hamlet.dogrular} />
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

// ─── Tanı (Doğrular) — yerinde açılır referans kartı (accordion) ───
function TaniAccordion({ etiket, baslik, dogrular }) {
  const [acik, setAcik] = useState(false);

  return (
    <div
      style={{
        border: '1px solid var(--rule)',
        backgroundColor: 'var(--bg-elevated)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setAcik((v) => !v)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '1.4rem 1.8rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.9rem',
          textAlign: 'left',
          color: 'var(--ink)',
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
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '1.25rem',
            color: 'var(--ink)',
            flex: 1,
          }}
        >
          {baslik}
        </span>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '1rem',
            color: 'var(--ink-soft)',
            transform: acik ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
          }}
        >
          ▾
        </span>
      </button>

      {acik && (
        <div style={{ padding: '0 1.8rem 1.8rem' }}>
          <DogrularKarti dogrular={dogrular} baslikGizle={true} />
        </div>
      )}
    </div>
  );
}

// ─── ADIM 3 — Karşılayan blok ───
function KarsilayanBlok({ kartlar, ilerleme, dil, davet, karakter }) {
  if (!ilerleme) return null;

  const adim = siradakiAdim(ilerleme);
  const sl = selamMetni(adim.faz, dil, karakter);

  const hedefKart = kartlar[adim.index];
  const hedefAd = hedefKart?.etiket || hedefKart?.baslik || '';
  const hedefYol = adim.faz === 'son' ? '/kulis' : BOLUM_YOLLARI[adim.index];

  const altMetin = sl.alt.replace('{ad}', hedefAd);
  const selamMet = sl.selam.replace('{ad}', hedefAd);

  const davetAnahtar = adim.faz === 'son' ? 'son' : adim.tip;
  const davetMet = (davet && davet[davetAnahtar]) || '';

  return (
    <a
      href={hedefYol}
      style={{
        display: 'block',
        border: `1px solid ${TON}`,
        backgroundColor: 'var(--accent-bg-deep)',
        borderRadius: '2px',
        padding: '1.8rem 2rem',
        marginBottom: '1.5rem',
        textDecoration: 'none',
        color: 'var(--ink)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <span
        style={{
          position: 'absolute', top: 0, left: 0, width: '3px', height: '100%',
          background: `linear-gradient(180deg, ${TON}, transparent)`,
        }}
      />
      <div
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.35rem',
          color: 'var(--ink)',
          marginBottom: '0.4rem',
          lineHeight: 1.3,
        }}
      >
        {selamMet}
      </div>
      <div
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 400,
          fontSize: '0.92rem',
          color: 'var(--ink-soft)',
          marginBottom: '1.1rem',
        }}
      >
        {altMetin}
      </div>
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 500,
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: TON,
        }}
      >
        {davetMet}
      </span>
    </a>
  );
}

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

          <BolumDurum kart={ilerleme ? ilerleme[i] : null} dil={dil} />

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

function BolumDurum({ kart, dil }) {
  if (!kart) return null;

  const durum = kartDurumu(kart);
  const cumle = durumMetni(kart.tip, durum, dil);
  const renk =
    durum === 'tam' ? 'var(--onay)' : 'var(--ink-soft)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginTop: '0.5rem' }}>
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 400,
          fontSize: '0.95rem',
          letterSpacing: '0.01em',
          color: renk,
        }}
      >
        {cumle}
      </span>

      <div style={{ display: 'flex', gap: '1.1rem', flexWrap: 'wrap' }}>
        {kart.sinyaller.map((sn, j) => {
          const etk = sn.etiket ? sinyalEtiketi(sn.etiket, dil) : null;
          return (
            <span
              key={j}
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 400,
                fontSize: '0.65rem',
                letterSpacing: '0.16em',
                color: 'var(--ink-soft)',
                textTransform: 'uppercase',
              }}
            >
              {etk ? `${etk} ` : ''}
              <span style={{ color: 'var(--ink)', fontWeight: 500 }}>
                {sn.aktif} / {sn.toplam}
              </span>
            </span>
          );
        })}
      </div>
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
