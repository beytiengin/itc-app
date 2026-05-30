// components/MikroBlokKart.js
// Workbook "neden çerçevesi" — 3 mikro-blok (Şu an neredesin · Ne yapacaksın ·
// Hatırla). Hamlet Workbook 2. baskı `bolum_i_tam.html` açılış deseninin dijital
// karşılığı; karakter istasyonlarının başında oyuncuya rotayı ve amacı bildirir.
//
// Kanon sınırı (Spine §3 ilke 3 — "metot görünmez"): mekanizmayı (VAK örüntüsü,
// Panksepp katmanı, yıldız profili vs.) ANLATMAZ — yalnız rotayı + amacı +
// kanonik hatırlatma. Sessiz kişiselleştirme bozulmaz.
//
// Etiketler ortak (chrome-i18n.mikroBlok TR/EN); içerik karakter+istasyon
// spesifiktir (willy-i18n / hamlet-i18n'de her istasyonun mikroBlok dalı).

'use client';

import { useDil, ceviri } from '../app/lib/dil';
import chromeI18n from '../data/chrome-i18n';

export default function MikroBlokKart({ veri }) {
  const { dil } = useDil();
  const m = ceviri(chromeI18n, dil).mikroBlok;
  if (!veri || !veri.neredesin) return null;

  return (
    <aside
      style={{
        background: 'var(--bg-elevated)',
        border: '1px solid var(--rule)',
        padding: '1.5rem 1.8rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.1rem',
      }}
    >
      <Satir baslik={m.neredesin} icerik={veri.neredesin} />
      <Satir baslik={m.neYapacaksin} icerik={veri.neYapacaksin} />
      <Satir baslik={m.hatirla} icerik={veri.hatirla} vurgu />
    </aside>
  );
}

function Satir({ baslik, icerik, vurgu }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          color: vurgu ? 'var(--accent)' : 'var(--ink-muted)',
          textTransform: 'uppercase',
        }}
      >
        {baslik}
      </span>
      <p
        style={{
          fontFamily: vurgu ? 'Cormorant Garamond, serif' : 'Jost, sans-serif',
          fontStyle: vurgu ? 'italic' : 'normal',
          fontWeight: 300,
          fontSize: vurgu ? '1rem' : '0.92rem',
          lineHeight: 1.65,
          color: 'var(--ink-soft)',
          margin: 0,
        }}
      >
        {icerik}
      </p>
    </div>
  );
}
