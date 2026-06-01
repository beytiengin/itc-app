// components/OyunOncesiOlayKart.js
// ITC Actor's Gym — Oyun Öncesi Yaşam · Olay kartı
//
// Açılır/kapanır kart. Açıkken: yük + yansıma sorusu + textarea + içselleştirme onay kutusu.
// Auto-save 800ms debounce ile çalışır.

'use client';

import { useState, useEffect, useRef } from 'react';
import { olayYansimasiKaydet } from '../app/lib/hamlet-veri';
import { useDil } from '../app/lib/dil';

const TON = 'var(--accent)';

export default function OyunOncesiOlayKart({ olay, karakterId, baslangic }) {
  const { dil } = useDil();
  const t = dil === 'de'
    ? { yuk: 'Last', yansimaSorusu: 'Reflexionsfrage', yansiman: 'Deine Reflexion', icsellestirildi: '✓ Verinnerlicht', yazildi: '✓ Geschrieben', icsellestir: 'Ich habe diese Last verinnerlicht', placeholder: 'Wo setzt es sich in deinem Körper fest? Du kannst mit einem einzigen Wort beginnen.' }
    : dil === 'en'
    ? { yuk: 'Burden', yansimaSorusu: 'Reflection Question', yansiman: 'Your Reflection', icsellestirildi: '✓ Internalised', yazildi: '✓ Written', icsellestir: 'I have internalised this burden', placeholder: 'Where does it settle in your body? You can start with a single word.' }
    : { yuk: 'Yük', yansimaSorusu: 'Yansıma Sorusu', yansiman: 'Yansıman', icsellestirildi: '✓ İçselleştirildi', yazildi: '✓ Yazıldı', icsellestir: 'Bu yükü içselleştirdim', placeholder: 'Bedeninde nereye yerleşiyor? Bir kelimeden başlayabilirsin.' };
  const [acik, setAcik] = useState(false);
  const [metin, setMetin] = useState(baslangic?.metin || '');
  const [icselKabul, setIcselKabul] = useState(baslangic?.icselKabul || false);
  const [kayitDurumu, setKayitDurumu] = useState(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    setMetin(baslangic?.metin || '');
    setIcselKabul(baslangic?.icselKabul || false);
  }, [baslangic?.metin, baslangic?.icselKabul]);

  useEffect(() => () => { if (debounceRef.current) clearTimeout(debounceRef.current); }, []);

  function metinDegistir(yeni) {
    setMetin(yeni);
    setKayitDurumu('yaziliyor');
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setKayitDurumu('kaydediliyor');
      const ok = await olayYansimasiKaydet(karakterId, olay.no, { metin: yeni });
      setKayitDurumu(ok ? 'kaydedildi' : 'hata');
      if (ok) setTimeout(() => setKayitDurumu(null), 2500);
    }, 800);
  }

  async function icselKabulDegistir() {
    const yeni = !icselKabul;
    setIcselKabul(yeni);
    await olayYansimasiKaydet(karakterId, olay.no, { icselKabul: yeni });
  }

  const yansimaMevcut = metin.length > 0;
  const borderColor = acik ? TON : (yansimaMevcut || icselKabul ? 'var(--accent-rule)' : 'var(--rule)');

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
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontSize: '1.4rem',
            color: icselKabul ? TON : (yansimaMevcut ? 'var(--ink-soft)' : 'var(--ink-muted)'),
            minWidth: '32px',
            lineHeight: 1.1,
          }}
        >
          {olay.no}
        </span>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'var(--ink)',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {olay.baslik}
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                color: 'var(--ink-muted)',
                textTransform: 'uppercase',
              }}
            >
              {olay.sahneRef}
            </span>
            {icselKabul && (
              <span
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 200,
                  fontSize: '0.55rem',
                  letterSpacing: '0.25em',
                  color: TON,
                  textTransform: 'uppercase',
                  padding: '0.15rem 0.55rem',
                  border: `1px solid color-mix(in srgb, ${TON} 33%, transparent)`,
                }}
              >{t.icsellestirildi}</span>
            )}
            {!icselKabul && yansimaMevcut && (
              <span
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
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
          <div>
            <span
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                color: TON,
                textTransform: 'uppercase',
              }}
            >{t.yuk}</span>
            <p
              style={{
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: '0.5rem 0 0 0',
              }}
            >
              {olay.yuk}
            </p>
          </div>

          <div>
            <span
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                color: 'var(--onay)',
                textTransform: 'uppercase',
              }}
            >{t.yansimaSorusu}</span>
            <p
              style={{
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: '0.5rem 0 0 0',
              }}
            >
              {olay.yansimaSorusu}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
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
                fontFamily: 'var(--font-display), serif',
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
              checked={icselKabul}
              onChange={icselKabulDegistir}
              style={{
                width: '14px',
                height: '14px',
                accentColor: TON,
                cursor: 'pointer',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 300,
                fontSize: '0.8rem',
                color: icselKabul ? TON : 'var(--ink-soft)',
                letterSpacing: '0.05em',
              }}
            >{t.icsellestir}</span>
          </label>
        </div>
      )}
    </div>
  );
}

function KayitRozet({ durum }) {
  const { dil } = useDil();
  if (!durum || durum === 'yaziliyor') {
    return <span style={{ minHeight: '1em' }} />;
  }
  const renk = durum === 'hata' ? 'var(--uyari)' : 'var(--accent)';
  const mesaj =
    durum === 'kaydediliyor' ? (dil === 'de' ? 'Wird gespeichert…' : dil === 'en' ? 'Saving…' : 'Kaydediliyor…') :
    durum === 'kaydedildi' ? (dil === 'de' ? '✓ Gespeichert' : dil === 'en' ? '✓ Saved' : '✓ Kaydedildi') :
    (dil === 'de' ? '⚠ Konnte nicht gespeichert werden' : dil === 'en' ? '⚠ Could not save' : '⚠ Kaydedilemedi');
  return (
    <span
      style={{
        fontFamily: 'var(--font-body), sans-serif',
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
