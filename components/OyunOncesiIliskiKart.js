// components/OyunOncesiIliskiKart.js
// ITC Actor's Gym — Oyun Öncesi Yaşam · İlişki kartı
//
// Üç katmanlı: Geçmiş → Şimdi → İz. Yansıma + tanıma onay kutusu.

'use client';

import { useState, useEffect, useRef } from 'react';
import { iliskiYansimasiKaydet } from '../app/lib/hamlet-veri';
import { useDil } from '../app/lib/dil';

const TON = 'var(--accent)';

export default function OyunOncesiIliskiKart({ iliski, karakterId, baslangic }) {
  const { dil } = useDil();
  const t = dil === 'en'
    ? { tanindi: '✓ Recognised', yazildi: '✓ Written', gecmis: 'Past', simdi: 'Now', iz: 'Trace', yansimaSorusu: 'Reflection Question', yansiman: 'Your Reflection', tanidim: 'I have recognised this relationship', placeholder: 'Where does this relationship settle in your body?' }
    : { tanindi: '✓ Tanındı', yazildi: '✓ Yazıldı', gecmis: 'Geçmiş', simdi: 'Şimdi', iz: 'İz', yansimaSorusu: 'Yansıma Sorusu', yansiman: 'Yansıman', tanidim: 'Bu ilişkiyi tanıdım', placeholder: 'Bu ilişki bedeninde nereye yerleşiyor?' };
  const [acik, setAcik] = useState(false);
  const [metin, setMetin] = useState(baslangic?.metin || '');
  const [tanidi, setTanidi] = useState(baslangic?.tanidi || false);
  const [kayitDurumu, setKayitDurumu] = useState(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    setMetin(baslangic?.metin || '');
    setTanidi(baslangic?.tanidi || false);
  }, [baslangic?.metin, baslangic?.tanidi]);

  useEffect(() => () => { if (debounceRef.current) clearTimeout(debounceRef.current); }, []);

  function metinDegistir(yeni) {
    setMetin(yeni);
    setKayitDurumu('yaziliyor');
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setKayitDurumu('kaydediliyor');
      const ok = await iliskiYansimasiKaydet(karakterId, iliski.no, { metin: yeni });
      setKayitDurumu(ok ? 'kaydedildi' : 'hata');
      if (ok) setTimeout(() => setKayitDurumu(null), 2500);
    }, 800);
  }

  async function tanidiDegistir() {
    const yeni = !tanidi;
    setTanidi(yeni);
    await iliskiYansimasiKaydet(karakterId, iliski.no, { tanidi: yeni });
  }

  const yansimaMevcut = metin.length > 0;
  const borderColor = acik ? TON : (yansimaMevcut || tanidi ? 'var(--accent-rule)' : 'var(--rule)');

  return (
    <div
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor: acik ? 'var(--bg-elevated)' : 'transparent',
        transition: 'all 0.25s ease',
      }}
    >
      <button
        onClick={() => setAcik(!acik)}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
          width: '100%',
          padding: '1.1rem 1.4rem',
          backgroundColor: 'transparent',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          color: 'var(--ink)',
          fontFamily: 'inherit',
        }}
        onMouseEnter={(e) => { if (!acik) e.currentTarget.parentElement.style.borderColor = TON; }}
        onMouseLeave={(e) => { if (!acik) e.currentTarget.parentElement.style.borderColor = borderColor; }}
      >
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1.4rem',
            color: tanidi ? TON : (yansimaMevcut ? 'var(--ink-soft)' : 'var(--ink-muted)'),
            minWidth: '32px',
            lineHeight: 1.1,
          }}
        >
          {iliski.no}
        </span>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: 'var(--ink)',
                lineHeight: 1.2,
              }}
            >
              {iliski.ad}
            </span>
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                color: TON,
                textTransform: 'uppercase',
              }}
            >
              {iliski.rol}
            </span>
          </div>
          {(tanidi || yansimaMevcut) && (
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {tanidi && (
                <span
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    fontWeight: 200,
                    fontSize: '0.55rem',
                    letterSpacing: '0.25em',
                    color: TON,
                    textTransform: 'uppercase',
                    padding: '0.15rem 0.55rem',
                    border: `1px solid color-mix(in srgb, ${TON} 33%, transparent)`,
                  }}
                >{t.tanindi}</span>
              )}
              {!tanidi && yansimaMevcut && (
                <span
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    fontWeight: 200,
                    fontSize: '0.55rem',
                    letterSpacing: '0.25em',
                    color: 'var(--ink-soft)',
                    textTransform: 'uppercase',
                    padding: '0.15rem 0.55rem',
                    border: '1px solid var(--accent-rule)',
                  }}
                >{t.yazildi}</span>
              )}
            </div>
          )}
        </div>

        <span
          style={{
            fontSize: '0.7rem',
            color: 'var(--ink-muted)',
            marginTop: '0.5rem',
            transform: acik ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        >
          ▾
        </span>
      </button>

      {acik && (
        <div
          style={{
            padding: '0 1.4rem 1.4rem 1.4rem',
            borderTop: '1px solid var(--rule)',
            paddingTop: '1.4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <KatmanSatiri etiket={t.gecmis} metin={iliski.gecmis} />
            <KatmanSatiri etiket={t.simdi} metin={iliski.simdi} />
            <KatmanSatiri etiket={t.iz} metin={iliski.iz} altinli />
          </div>

          <div>
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                color: 'var(--onay)',
                textTransform: 'uppercase',
              }}
            >{t.yansimaSorusu}</span>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: '0.5rem 0 0 0',
              }}
            >
              {iliski.yansimaSorusu}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 200,
                  fontSize: '0.55rem',
                  letterSpacing: '0.3em',
                  color: TON,
                  textTransform: 'uppercase',
                }}
              >{t.yansiman}</span>
              <KayitRozet durum={kayitDurumu} />
            </div>
            <textarea
              value={metin}
              onChange={(e) => metinDegistir(e.target.value)}
              placeholder={t.placeholder}
              rows={5}
              style={{
                width: '100%',
                padding: '1rem 1.2rem',
                backgroundColor: 'var(--bg-base)',
                border: '1px solid var(--rule)',
                color: 'var(--ink)',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1rem',
                lineHeight: 1.8,
                resize: 'vertical',
                outline: 'none',
                boxSizing: 'border-box',
                caretColor: TON,
                transition: 'border-color 0.25s ease',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = TON; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; }}
            />
          </div>

          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.7rem',
              cursor: 'pointer',
              userSelect: 'none',
              paddingTop: '0.4rem',
              borderTop: '1px solid var(--bg-elevated)',
            }}
          >
            <input
              type="checkbox"
              checked={tanidi}
              onChange={tanidiDegistir}
              style={{
                width: '14px',
                height: '14px',
                accentColor: TON,
                cursor: 'pointer',
              }}
            />
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 300,
                fontSize: '0.8rem',
                color: tanidi ? TON : 'var(--ink-soft)',
                letterSpacing: '0.05em',
              }}
            >{t.tanidim}</span>
          </label>
        </div>
      )}
    </div>
  );
}

function KatmanSatiri({ etiket, metin, altinli }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          color: altinli ? TON : 'var(--ink-muted)',
          textTransform: 'uppercase',
          minWidth: '70px',
          paddingTop: '0.25rem',
        }}
      >
        {etiket}
      </span>
      <p
        style={{
          flex: 1,
          fontFamily: altinli ? 'Cormorant Garamond, serif' : 'Jost, sans-serif',
          fontStyle: altinli ? 'italic' : 'normal',
          fontWeight: altinli ? 300 : 300,
          fontSize: altinli ? '1rem' : '0.88rem',
          color: altinli ? 'var(--ink-soft)' : 'var(--ink-soft)',
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {metin}
      </p>
    </div>
  );
}

function KayitRozet({ durum }) {
  const { dil } = useDil();
  if (!durum || durum === 'yaziliyor') return <span style={{ minHeight: '1em' }} />;
  const renk = durum === 'hata' ? 'var(--uyari)' : 'var(--accent)';
  const mesaj =
    durum === 'kaydediliyor' ? (dil === 'en' ? 'Saving…' : 'Kaydediliyor…') :
    durum === 'kaydedildi' ? (dil === 'en' ? '✓ Saved' : '✓ Kaydedildi') :
    (dil === 'en' ? '⚠ Could not save' : '⚠ Kaydedilemedi');
  return (
    <span
      style={{
        fontFamily: 'Jost, sans-serif',
        fontWeight: 200,
        fontSize: '0.65rem',
        color: renk,
        fontStyle: 'italic',
      }}
    >
      {mesaj}
    </span>
  );
}
