'use client';

// components/KartCatali.js
// Kart-içi çatal — Nina SPEC §6 paritesi: overlay YOK, tek çatal, sayfadan
// çıkmaz. Seçim oznel_sabitler'e yazılır (parent onSec ile bağlar).
//
// Yürüyüş (BoslukYuruyusu) yoğunluk-3 tam-ekran içindir; KartCatali ise
// yoğunluk-2 kart-içi tek çataldır. Şema sahne anlar'ıyla aynı:
//   cataly: { anahtar?, soru, etiket?, secenekler: [{ dal, baslik, aciklama, oznelSabit }] }
// (Yürüyüş şemasıyla uyum için deger/muhur de kabul edilir.)
//
// Nina kendi pilot viewer'ında kalır; bu bileşen şemayı örnek alır, oraya
// dokunmaz. Macbeth boşluk kartı (bosluk.kartCatali) bu bileşeni kullanır.

const TON = 'var(--accent)';

function KartSik({ secili, soluk, onClick, harf, baslik, aciklama, muhur }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: secili ? 'var(--accent-bg)' : 'var(--bg-elevated)',
        border: secili ? `1.5px solid ${TON}` : '1px solid var(--rule)',
        padding: '0.65rem 0.85rem',
        display: 'flex', gap: '0.7rem', alignItems: 'flex-start',
        cursor: 'pointer', opacity: soluk ? 0.55 : 1, textAlign: 'left',
        transition: 'opacity 0.2s ease, border-color 0.2s ease',
      }}
    >
      <span style={{
        width: '24px', height: '24px', minWidth: '24px', borderRadius: '50%',
        border: `1px solid ${secili ? TON : 'var(--ink-muted)'}`,
        backgroundColor: secili ? TON : 'transparent',
        color: secili ? 'var(--bg-base)' : 'var(--ink-muted)',
        fontFamily: 'var(--font-body), sans-serif', fontWeight: 400, fontSize: '0.7rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.05rem',
      }}>{secili ? '✓' : harf}</span>
      <span style={{ flex: 1 }}>
        {baslik ? (
          <span style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink)', display: 'block', marginBottom: '0.2rem' }}>{baslik}</span>
        ) : null}
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.8rem', color: 'var(--ink-soft)', lineHeight: 1.6, display: 'block' }}>{aciklama}</span>
        {secili && muhur ? (
          <span style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.82rem', color: TON, lineHeight: 1.6, display: 'block', marginTop: '0.4rem' }}>↳ {muhur}</span>
        ) : null}
      </span>
    </button>
  );
}

// secim: seçili dal/deger değeri. onSec(secenek) → parent kaydı yapar.
export default function KartCatali({ cataly, secim, onSec, etiket }) {
  if (!cataly || !Array.isArray(cataly.secenekler)) return null;
  const dalOf = (s) => s.dal ?? s.deger;
  return (
    <div style={{
      padding: '0.85rem 1rem',
      border: `1px solid color-mix(in srgb, ${TON} 25%, transparent)`,
      backgroundColor: 'var(--accent-bg)',
      display: 'flex', flexDirection: 'column', gap: '0.7rem',
    }}>
      <div>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif', fontWeight: 300,
          fontSize: '0.55rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase',
        }}>{etiket || cataly.etiket || 'Seçim'}</span>
        {cataly.soru ? (
          <p style={{
            fontFamily: 'var(--font-display), serif', fontStyle: 'italic',
            fontSize: '0.95rem', color: 'var(--ink)', lineHeight: 1.6, margin: '0.25rem 0 0 0',
          }}>{cataly.soru}</p>
        ) : null}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {cataly.secenekler.map((s) => {
          const dal = dalOf(s);
          return (
            <KartSik
              key={dal}
              secili={secim === dal}
              soluk={secim && secim !== dal}
              onClick={() => onSec(s)}
              harf={dal}
              baslik={s.baslik}
              aciklama={s.aciklama}
              muhur={s.oznelSabit ?? s.muhur}
            />
          );
        })}
      </div>
    </div>
  );
}
