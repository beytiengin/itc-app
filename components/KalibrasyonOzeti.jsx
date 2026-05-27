'use client';
// components/KalibrasyonOzeti.jsx
// Karar 36 — /profil sayfasına düşen bileşen. kalibrasyonOku() ile dört haritayı + intake'i okur:
//   Beceri Haritası · Öğrenme Stili (VAK) · Kişilik (MBTI) · Duygu Haritası (Panksepp)
// Eski Yıldız (yildiz_sonuclari) gösterilmez; Beceri Haritası onun yerini alır (Karar 36 §3).
// Tüm renkler var(--*) üzerinden (CLAUDE.md kuralı). Dual mode (dark + krem) uyumlu.

import { useEffect, useState } from 'react';
import { kalibrasyonOku } from '../app/lib/kalibrasyon-kaydet';

const COLORS = [
  'var(--accent)',
  'var(--accent-soft)',
  'var(--kanal-1)',
  'var(--kanal-4)',
  'var(--kanal-3)',
  'var(--kanal-2)',
  'var(--kanal-5)',
];

const GLABEL = {
  gorsel:        { tr: 'Görsel',              en: 'Visual' },
  isitsel:       { tr: 'İşitsel',             en: 'Auditory' },
  kinestetik:    { tr: 'Kinestetik',          en: 'Kinesthetic' },
  mesleki_guven: { tr: 'Mesleki Güven',       en: 'Professional Confidence' },
  teknik:        { tr: 'Teknik',              en: 'Technical' },
  zihinsel:      { tr: 'Zihinsel',            en: 'Mental' },
  duygusal:      { tr: 'Duygusal',            en: 'Emotional' },
  motivasyonel:  { tr: 'Motivasyonel',        en: 'Motivational' },
  rahatlama:     { tr: 'Rahatlama',           en: 'Relaxation' },
  iliskisel:     { tr: 'İlişkisel',           en: 'Interpersonal' },
  oyun:          { tr: 'Oyun',                en: 'Play' },
  ofke:          { tr: 'Öfke',                en: 'Anger' },
  arayis:        { tr: 'Arayış',              en: 'Seek' },
  sefkat:        { tr: 'Bağ',                 en: 'Care' },
  korku:         { tr: 'Korku',               en: 'Fear' },
  huzun:         { tr: 'Hüzün',               en: 'Sadness' },
};
const lab = (k, lang) => GLABEL[k]?.[lang] ?? GLABEL[k]?.tr ?? k;

function Etiket({ children }) {
  return (
    <div style={{
      fontFamily: 'Jost, sans-serif',
      fontWeight: 500,
      fontSize: '0.68rem',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: '0.7rem',
    }}>{children}</div>
  );
}

function Cubuk({ etiket, deger, max, renk, son }) {
  const pct = Math.max(2, Math.round((deger / max) * 100));
  const gosterim = Number(deger).toFixed(deger % 1 ? 1 : 0);
  return (
    <div style={{ marginBottom: '1.05rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.3rem' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '1.02rem', color: 'var(--ink)' }}>{etiket}</span>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '0.82rem', color: 'var(--ink-soft)' }}>{gosterim}{son || ''}</span>
      </div>
      <div style={{ height: 7, background: 'var(--bg-elevated)', borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ width: pct + '%', height: '100%', background: renk, borderRadius: 6, transition: 'width .9s cubic-bezier(.2,.8,.2,1)' }} />
      </div>
    </div>
  );
}

function Kart({ children }) {
  return (
    <div style={{
      border: '1px solid var(--rule)',
      borderRadius: 12,
      padding: '1.5rem 1.6rem',
      background: 'var(--bg-elevated)',
      marginBottom: '1.6rem',
    }}>{children}</div>
  );
}

export default function KalibrasyonOzeti({ lang = 'tr' }) {
  const [veri, setVeri] = useState(undefined); // undefined=yükleniyor, null=oturum yok / boş
  useEffect(() => { kalibrasyonOku().then(setVeri).catch(() => setVeri(null)); }, []);

  if (veri === undefined) {
    return <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '1rem', color: 'var(--ink-soft)' }}>{lang === 'tr' ? 'Yükleniyor…' : 'Loading…'}</p>;
  }
  if (!veri) {
    return <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '1rem', color: 'var(--ink-soft)' }}>{lang === 'tr' ? 'Kalibrasyon verisi bulunamadı.' : 'No calibration data found.'}</p>;
  }

  const { profil, vak, arketip, beceri, panksepp } = veri;
  const tr = lang === 'tr';
  const eksik = !beceri && !vak && !arketip && !panksepp;
  if (eksik) {
    return (
      <Kart>
        <Etiket>{tr ? 'Kalibrasyon' : 'Calibration'}</Etiket>
        <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '1rem', lineHeight: 1.6, color: 'var(--ink-soft)', margin: 0 }}>
          {tr ? 'Henüz kalibrasyon tamamlanmamış. /kalibrasyon üzerinden başlayabilirsin.' : 'Calibration not completed yet. Start it from /kalibrasyon.'}
        </p>
      </Kart>
    );
  }

  const beceriSatirlari = beceri ? [
    ['mesleki_guven', beceri.mesleki_guven], ['teknik', beceri.teknik], ['zihinsel', beceri.zihinsel],
    ['duygusal', beceri.duygusal], ['motivasyonel', beceri.motivasyonel], ['rahatlama', beceri.rahatlama], ['iliskisel', beceri.iliskisel],
  ].filter(([, v]) => v != null).sort((a, b) => b[1] - a[1]) : [];

  const pankSatirlari = panksepp ? [
    ['oyun', panksepp.oyun], ['ofke', panksepp.ofke], ['arayis', panksepp.arayis],
    ['sefkat', panksepp.sefkat], ['korku', panksepp.korku], ['huzun', panksepp.huzun],
  ].filter(([, v]) => v != null) : [];

  // VAK baskın 'V'/'A'/'K' kodu → oyuncu-yüzü ada çevir
  const vakBaskinAd = vak?.baskin === 'V' ? 'gorsel' : vak?.baskin === 'A' ? 'isitsel' : vak?.baskin === 'K' ? 'kinestetik' : null;

  return (
    <div>
      {profil?.ad && (
        <div style={{ marginBottom: '1.6rem' }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 500,
            fontStyle: 'italic',
            fontSize: '2rem',
            color: 'var(--ink)',
            margin: 0,
          }}>{profil.ad}</h2>
          <div style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '0.92rem', color: 'var(--ink-soft)' }}>
            {[profil.sehir, profil.ulke, profil.deneyim].filter(Boolean).join(' · ')}
          </div>
        </div>
      )}

      {beceri && (
        <Kart>
          <Etiket>{tr ? 'Beceri Haritası · 7 Beceri Alanı' : 'Skill Map · 7 Skill Areas'}</Etiket>
          {beceriSatirlari.map(([k, v], i) => (
            <Cubuk key={k} etiket={lab(k, lang)} deger={v} max={7} renk={COLORS[i % COLORS.length]} son=" / 7" />
          ))}
        </Kart>
      )}

      {vak && (
        <Kart>
          <Etiket>{tr ? 'Öğrenme Stili · VAK' : 'Learning Style · VAK'}</Etiket>
          {vakBaskinAd && (
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '1.02rem', lineHeight: 1.5, color: 'var(--ink)', marginTop: 0 }}>
              {tr ? 'Baskın kanalın:' : 'Your dominant channel:'} <strong style={{ color: 'var(--accent)' }}>{lab(vakBaskinAd, lang)}</strong>
            </p>
          )}
          <Cubuk etiket={lab('gorsel', lang)} deger={vak.gorsel ?? 0} max={40} renk={COLORS[0]} son=" / 40" />
          <Cubuk etiket={lab('isitsel', lang)} deger={vak.isitsel ?? 0} max={40} renk={COLORS[1]} son=" / 40" />
          <Cubuk etiket={lab('kinestetik', lang)} deger={vak.kinestetik ?? 0} max={40} renk={COLORS[2]} son=" / 40" />
        </Kart>
      )}

      {arketip && (
        <Kart>
          <Etiket>{tr ? 'Kişilik Tipi · MBTI' : 'Personality Type · MBTI'}</Etiket>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 500,
              fontSize: '2.6rem',
              letterSpacing: '0.1em',
              color: 'var(--accent)',
            }}>{arketip.tip}</span>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '1.3rem',
              color: 'var(--ink)',
            }}>{arketip.ad}</span>
          </div>
        </Kart>
      )}

      {panksepp && (
        <Kart>
          <Etiket>{tr ? 'Duygu Haritası · Panksepp' : 'Emotion Map · Panksepp'}</Etiket>
          {pankSatirlari.map(([k, v], i) => (
            <Cubuk key={k} etiket={lab(k, lang)} deger={v} max={100} renk={COLORS[i % COLORS.length]} son="%" />
          ))}
        </Kart>
      )}
    </div>
  );
}
