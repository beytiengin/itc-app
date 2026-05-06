// components/HamletAltSoruYazma.js
// ITC Actor's Gym — Senin Çerçeven · Tek alt-soru yazma alanı
//
// Auto-save 800ms debounce. "Bu an açıldı" onay kutusu.

'use client';

import { useState, useEffect, useRef } from 'react';
import { altSoruYansimasiKaydet } from '../app/lib/hamlet-veri';

const TON = 'var(--onay)';

export default function HamletAltSoruYazma({
  boslukNo,
  altSoru,         // {no, baslik, soru}
  baslangic,       // {metin, acildi}
  karakterId,
}) {
  const [metin, setMetin] = useState(baslangic?.metin || '');
  const [acildi, setAcildi] = useState(baslangic?.acildi || false);
  const [kayitDurumu, setKayitDurumu] = useState(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    setMetin(baslangic?.metin || '');
    setAcildi(baslangic?.acildi || false);
  }, [baslangic?.metin, baslangic?.acildi]);

  useEffect(() => () => { if (debounceRef.current) clearTimeout(debounceRef.current); }, []);

  function metinDegistir(yeni) {
    setMetin(yeni);
    setKayitDurumu('yaziliyor');
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setKayitDurumu('kaydediliyor');
      const ok = await altSoruYansimasiKaydet(karakterId, boslukNo, altSoru.no, { metin: yeni });
      setKayitDurumu(ok ? 'kaydedildi' : 'hata');
      if (ok) setTimeout(() => setKayitDurumu(null), 2500);
    }, 800);
  }

  async function acildiDegistir() {
    const yeni = !acildi;
    setAcildi(yeni);
    await altSoruYansimasiKaydet(karakterId, boslukNo, altSoru.no, { acildi: yeni });
  }

  const yazildi = metin.length > 0;
  const borderColor = acildi ? TON : (yazildi ? 'var(--onay-rule)' : 'var(--rule)');

  return (
    <div
      style={{
        border: `1px solid ${borderColor}`,
        padding: '1.4rem 1.6rem',
        backgroundColor: 'var(--bg-elevated)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'border-color 0.25s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem', flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '1.5rem',
            color: acildi ? TON : (yazildi ? 'var(--ink-soft)' : 'var(--ink-muted)'),
            lineHeight: 1,
            minWidth: '24px',
          }}
        >
          {altSoru.no}
        </span>
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'var(--ink)',
            lineHeight: 1.3,
          }}
        >
          {altSoru.baslik}
        </span>
        {acildi && (
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
              marginLeft: 'auto',
            }}
          >
            ✓ Açıldı
          </span>
        )}
      </div>

      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '0.95rem',
          color: 'var(--ink-soft)',
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {altSoru.soru}
      </p>

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
          >
            Yansıman
          </span>
          <KayitRozet durum={kayitDurumu} />
        </div>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.85rem',
            color: 'var(--uyari)',
            margin: 0,
            opacity: 0.85,
          }}
        >
          Karakterin bedeninde ne oldu? Senin değil — onun.
        </p>
        <textarea
          value={metin}
          onChange={(e) => metinDegistir(e.target.value)}
          placeholder="Bir kelime, bir an, bir bedensel duyu — yeter."
          rows={4}
          style={{
            width: '100%',
            padding: '0.9rem 1.1rem',
            backgroundColor: 'var(--bg-base)',
            border: '1px solid var(--rule)',
            color: 'var(--ink)',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.95rem',
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
        }}
      >
        <input
          type="checkbox"
          checked={acildi}
          onChange={acildiDegistir}
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
            fontSize: '0.78rem',
            color: acildi ? TON : 'var(--ink-soft)',
            letterSpacing: '0.05em',
          }}
        >
          Bu an açıldı
        </span>
      </label>
    </div>
  );
}

function KayitRozet({ durum }) {
  if (!durum || durum === 'yaziliyor') return <span style={{ minHeight: '1em' }} />;
  const renk = durum === 'hata' ? 'var(--uyari)' : 'var(--onay)';
  const mesaj =
    durum === 'kaydediliyor' ? 'Kaydediliyor…' :
    durum === 'kaydedildi' ? '✓ Kaydedildi' :
    '⚠ Kaydedilemedi';
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
