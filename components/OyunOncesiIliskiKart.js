// components/OyunOncesiIliskiKart.js
// ITC Actor's Gym — Oyun Öncesi Yaşam · İlişki kartı
//
// Üç katmanlı: Geçmiş → Şimdi → İz. Yansıma + tanıma onay kutusu.

'use client';

import { useState, useEffect, useRef } from 'react';
import { iliskiYansimasiKaydet } from '../app/lib/hamlet-veri';

const TON = '#c9a96e';

export default function OyunOncesiIliskiKart({ iliski, karakterId, baslangic }) {
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
  const borderColor = acik ? TON : (yansimaMevcut || tanidi ? '#3a2f1f' : '#2a2a2a');

  return (
    <div
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor: acik ? '#0f0f0f' : 'transparent',
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
          color: '#f0ede8',
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
            color: tanidi ? TON : (yansimaMevcut ? '#aaa' : '#666'),
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
                color: '#f0ede8',
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
                    border: `1px solid ${TON}55`,
                  }}
                >
                  ✓ Tanındı
                </span>
              )}
              {!tanidi && yansimaMevcut && (
                <span
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    fontWeight: 200,
                    fontSize: '0.55rem',
                    letterSpacing: '0.25em',
                    color: '#aaa',
                    textTransform: 'uppercase',
                    padding: '0.15rem 0.55rem',
                    border: '1px solid #3a2f1f',
                  }}
                >
                  ✓ Yazıldı
                </span>
              )}
            </div>
          )}
        </div>

        <span
          style={{
            fontSize: '0.7rem',
            color: '#888',
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
            borderTop: '1px solid #2a2a2a',
            paddingTop: '1.4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <KatmanSatiri etiket="Geçmiş" metin={iliski.gecmis} />
            <KatmanSatiri etiket="Şimdi" metin={iliski.simdi} />
            <KatmanSatiri etiket="İz" metin={iliski.iz} altinli />
          </div>

          <div>
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                color: '#7a9b7a',
                textTransform: 'uppercase',
              }}
            >
              Yansıma Sorusu
            </span>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: '#bbb',
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
              >
                Yansıman
              </span>
              <KayitRozet durum={kayitDurumu} />
            </div>
            <textarea
              value={metin}
              onChange={(e) => metinDegistir(e.target.value)}
              placeholder="Bu ilişki bedeninde nereye yerleşiyor?"
              rows={5}
              style={{
                width: '100%',
                padding: '1rem 1.2rem',
                backgroundColor: '#0a0a0a',
                border: '1px solid #2a2a2a',
                color: '#f0ede8',
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
              onBlur={(e) => { e.currentTarget.style.borderColor = '#2a2a2a'; }}
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
              borderTop: '1px solid #1a1a1a',
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
                color: tanidi ? TON : '#aaa',
                letterSpacing: '0.05em',
              }}
            >
              Bu ilişkiyi tanıdım
            </span>
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
          color: altinli ? TON : '#888',
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
          color: altinli ? '#ddd' : '#bbb',
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
  if (!durum || durum === 'yaziliyor') return <span style={{ minHeight: '1em' }} />;
  const renk = durum === 'hata' ? '#9b6a6a' : '#c9a96e';
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
