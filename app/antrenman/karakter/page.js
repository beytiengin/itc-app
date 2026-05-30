'use client';

import { useState, useEffect } from 'react';
import { tumKarakterIlerlemeleri } from '../../lib/kulis';
import { ilerlemeGetir, kartlariKur, siradakiAdim } from '../../lib/ilerleme';
import { useDil, ceviri } from '../../lib/dil';
import chromeI18n from '../../../data/chrome-i18n';
import hamletRaw from '../../../data/karakterler/hamlet';
import willyRaw from '../../../data/karakterler/willy';
import IlerlemeRozet from '../../../components/IlerlemeRozet';

// Karakter listesi — sade vitrin.
//
// AKTİF: Hamlet, Willy (yeni şemada, sayfalar tam çalışıyor).
// PASİF: Macbeth, Biff (eski şemada; veri Willy şemasına yeniden yazılacak —
//        Filiz klinik gözden geçirimiyle. O bitene kadar Medea/Blanche gibi
//        "Yakında" konumunda tıklanamaz dururlar).
//
// KARARLAR (Beyti):
// - Macbeth/Biff: tamamen pasif (gri, tıklanmaz, "Yakında") — kırık dosyaya
//   tıklatmaktan iyi.
// - "ITC öğrenme zinciri" bloğu kaldırıldı (kalabalık yapıyordu).
// - "Refactor Bekliyor" / "Tam Yapı" durum göstergesi kaldırıldı (kullanıcı
//   için anlamsız bir iç not).
const KARAKTER_META = {
  hamlet: {
    yazar: 'William Shakespeare', donem: '1600', turKey: 'Trajedi',
    boslukSayisi: 5, antrenmanSayisi: 0,
  },
  willy: {
    yazar: 'Arthur Miller', donem: '1949', turKey: 'Trajedi',
    boslukSayisi: 12, antrenmanSayisi: 7,
  },
};

// Aktif karakter için sıradaki adım hesabı: ilerleme view + içerik toplamları
// → kartlar → siradakiAdim. Hub mantığının aynısı.
function karakterToplamlari(raw) {
  return {
    olay:   (raw.oyunOncesi?.olaylar || []).length,
    iliski: (raw.oyunOncesi?.iliskiler || []).length,
    sahne:  (raw.sahnelerWorkbook || []).length,
    tercih: (raw.tercihler || []).length,
    bosluk: (raw.boslukSet || []).length,
  };
}

function EtiketBloku({ karakterId, t }) {
  const meta = KARAKTER_META[karakterId];
  const karakterI18n = t[karakterId];
  if (!meta || !karakterI18n) return null;
  const TON = 'var(--accent)';
  const baslikStili = {
    fontFamily: 'Jost, sans-serif',
    fontWeight: 200,
    fontSize: '0.55rem',
    letterSpacing: '0.3em',
    color: 'var(--ink-muted)',
    textTransform: 'uppercase',
    minWidth: '52px',
    paddingTop: '0.2rem',
  };
  const mizacEtiketStili = {
    fontFamily: 'Jost, sans-serif',
    fontWeight: 200,
    fontSize: '0.6rem',
    letterSpacing: '0.1em',
    color: 'var(--ink-soft)',
    padding: '0.2rem 0.6rem',
    border: '1px solid var(--rule)',
    borderRadius: '12px',
  };
  const temaEtiketStili = {
    fontFamily: 'Cormorant Garamond, serif',
    fontStyle: 'italic',
    fontSize: '0.72rem',
    color: TON,
    padding: '0.2rem 0.7rem',
    border: `1px solid color-mix(in srgb, ${TON} 20%, transparent)`,
    backgroundColor: 'var(--accent-bg)',
    borderRadius: '12px',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'baseline' }}>
        <span style={baslikStili}>{t.mizacBaslik}</span>
        {karakterI18n.mizac.map((m) => (
          <span key={m} style={mizacEtiketStili}>{m}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'baseline' }}>
        <span style={baslikStili}>{t.temaBaslik}</span>
        {karakterI18n.tema.map((tm) => (
          <span key={tm} style={temaEtiketStili}>{tm}</span>
        ))}
      </div>
    </div>
  );
}

function MetaSatiri({ karakterId, t }) {
  const meta = KARAKTER_META[karakterId];
  if (!meta) return null;
  const turCevirisi = t.tur?.[meta.turKey] || meta.turKey;
  return (
    <span style={{
      fontFamily: 'Jost, sans-serif',
      fontWeight: 200,
      fontSize: '0.65rem',
      color: 'var(--accent)',
      letterSpacing: '0.1em',
    }}>
      {meta.yazar} · {meta.donem} · {turCevirisi}
    </span>
  );
}

function IlerlemeBloku({ karakterId, ilerlemeler, t }) {
  const meta = KARAKTER_META[karakterId];
  if (!meta) return null;
  const veri = ilerlemeler[karakterId] || { bosluk: 0, antrenman: 0 };
  return (
    <div style={{
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '1px solid var(--bg-elevated)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem',
    }}>
      <IlerlemeRozet
        ikon="◇"
        etiket={t.rozetSeninCerceven}
        mevcut={veri.bosluk}
        toplam={meta.boslukSayisi}
        renk="var(--onay)"
      />
      {meta.antrenmanSayisi > 0 && (
        <IlerlemeRozet
          ikon="○"
          etiket={t.rozetZihinselAntrenman}
          mevcut={veri.antrenman}
          toplam={meta.antrenmanSayisi}
          renk="var(--kanal-kahve)"
        />
      )}
    </div>
  );
}

// Sıradaki adım göstergesi — kart click hub'a gittiği için bu görsel/bilgi
// amaçlı (nested <a> yasak). Hub'a girince aynı bilgi gerçek link olarak
// KarsilayanBlok'ta belirir.
function SiradakiAdimCTA({ adim, t }) {
  if (!adim) return null;
  let etiket;
  if (adim.faz === 'son') {
    etiket = t.tamamlandi;
  } else {
    const ad = t.istasyon?.[adim.tip] || '';
    const onek = adim.faz === 'ilk' ? t.basla : t.suAn;
    etiket = `${onek}: ${ad}`;
  }
  return (
    <span style={{
      marginTop: '0.3rem',
      fontFamily: 'Jost, sans-serif',
      fontWeight: 200,
      fontSize: '0.7rem',
      letterSpacing: '0.1em',
      color: 'var(--accent)',
    }}>
      → {etiket}
    </span>
  );
}

export default function KarakterListesi() {
  const { dil } = useDil();
  const t = ceviri(chromeI18n, dil).karakterListesi;
  const [ilerlemeler, setIlerlemeler] = useState({});
  const [adimlar, setAdimlar] = useState({}); // { hamlet: {faz,index,tip}, willy: {...} }

  useEffect(() => {
    let iptal = false;
    async function veriYukle() {
      const [tumIlerleme, hamletView, willyView] = await Promise.all([
        tumKarakterIlerlemeleri(),
        ilerlemeGetir('hamlet'),
        ilerlemeGetir('willy'),
      ]);
      if (iptal) return;
      setIlerlemeler(tumIlerleme);

      const hamletKartlar = kartlariKur(hamletView, karakterToplamlari(hamletRaw));
      const willyKartlar = kartlariKur(willyView, karakterToplamlari(willyRaw));
      setAdimlar({
        hamlet: siradakiAdim(hamletKartlar),
        willy:  siradakiAdim(willyKartlar),
      });
    }
    veriYukle();
    return () => { iptal = true; };
  }, []);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>
      {/* Üst nav artık global — components/Navigasyon.js */}

      <section style={{ flex: 1, padding: '3rem 2rem', maxWidth: '680px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--accent)', opacity: 0.4 }} />
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: 'var(--accent)', textTransform: 'uppercase' }}>{t.ustEtiket}</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--ink)', margin: 0 }}>{t.baslik}</h1>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: 'var(--ink-soft)', lineHeight: 1.8, margin: 0 }}>
            {t.intro}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Hamlet — aktif */}
          <a href="/antrenman/karakter/hamlet"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: '2rem', border: '1px solid var(--rule)', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.6rem', color: 'var(--ink)', lineHeight: 1 }}>Hamlet</span>
              <MetaSatiri karakterId="hamlet" t={t} />
            </div>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: 'var(--ink-muted)', lineHeight: 1.7, margin: 0 }}>
              {t.hamlet.aciklama}
            </p>
            <EtiketBloku karakterId="hamlet" t={t} />
            <IlerlemeBloku karakterId="hamlet" ilerlemeler={ilerlemeler} t={t} />
            <SiradakiAdimCTA adim={adimlar.hamlet} t={t} />
          </a>

          {/* Willy Loman — aktif */}
          <a href="/antrenman/karakter/willy"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: '2rem', border: '1px solid var(--rule)', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.6rem', color: 'var(--ink)', lineHeight: 1 }}>Willy Loman</span>
              <MetaSatiri karakterId="willy" t={t} />
            </div>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: 'var(--ink-muted)', lineHeight: 1.7, margin: 0 }}>
              {t.willy.aciklama}
            </p>
            <EtiketBloku karakterId="willy" t={t} />
            <IlerlemeBloku karakterId="willy" ilerlemeler={ilerlemeler} t={t} />
            <SiradakiAdimCTA adim={adimlar.willy} t={t} />
          </a>

          {/* Yakında — Macbeth, Biff, Medea, Blanche (tıklanmaz, pasif) */}
          {t.yakinda.map((k, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '2rem', border: '1px solid var(--bg-elevated)', opacity: 0.4 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.6rem', color: 'var(--ink)', lineHeight: 1 }}>{k.ad}</span>
                  <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: 'var(--ink-muted)', letterSpacing: '0.1em' }}>{k.yazar}</span>
                </div>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: 'var(--ink-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>{t.yakindaEtiket}</span>
              </div>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: 'var(--ink-muted)', lineHeight: 1.7, margin: 0 }}>{k.aciklama}</p>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}
