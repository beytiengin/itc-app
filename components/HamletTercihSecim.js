// components/HamletTercihSecim.js
// ITC Actor's Gym — Yazarın Çerçevesi · Tek tercih için seçim arayüzü
//
// Tercih.cokluSecim'e göre radyo veya checkbox.
// Yorum harfleri + özel yorum textarea.
// Auto-save 800ms debounce.

'use client';

import { useState, useEffect, useRef } from 'react';
import { tercihKaydet } from '../app/lib/hamlet-veri';
import { useDil } from '../app/lib/dil';

const TON = 'var(--accent)';

export default function HamletTercihSecim({ tercih, baslangic, karakterId, kokYol }) {
  const { dil } = useDil();
  const t = dil === 'en'
    ? { olasiYorum: 'Possible Interpretations', yaDaKendi: 'Or Your Own Interpretation', aciklama: 'If none of the above fits exactly, write your own. You can also do both.', placeholder: 'What is your interpretation?' }
    : { olasiYorum: 'Olası Yorum', yaDaKendi: 'Ya da Kendi Yorumun', aciklama: 'Yukarıdakilerden hiçbirine tam uymuyorsa kendi yorumunu yaz. İkisini birlikte de yapabilirsin.', placeholder: 'Senin yorumun nasıl?' };
  const [secimler, setSecimler] = useState(baslangic?.secimler || []);
  const [ozelYorum, setOzelYorum] = useState(baslangic?.ozelYorum || '');
  const [kayitDurumu, setKayitDurumu] = useState(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    setSecimler(baslangic?.secimler || []);
    setOzelYorum(baslangic?.ozelYorum || '');
  }, [baslangic?.secimler, baslangic?.ozelYorum]);

  useEffect(() => () => { if (debounceRef.current) clearTimeout(debounceRef.current); }, []);

  async function harfDegistir(harf) {
    let yeni;
    if (tercih.cokluSecim) {
      yeni = secimler.includes(harf) ? secimler.filter((h) => h !== harf) : [...secimler, harf].sort();
    } else {
      yeni = secimler[0] === harf ? [] : [harf];
    }
    setSecimler(yeni);
    setKayitDurumu('kaydediliyor');
    const ok = await tercihKaydet(karakterId, tercih.no, { secimler: yeni });
    setKayitDurumu(ok ? 'kaydedildi' : 'hata');
    if (ok) setTimeout(() => setKayitDurumu(null), 2500);
  }

  function ozelYorumDegistir(yeni) {
    setOzelYorum(yeni);
    setKayitDurumu('yaziliyor');
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setKayitDurumu('kaydediliyor');
      const ok = await tercihKaydet(karakterId, tercih.no, { ozelYorum: yeni });
      setKayitDurumu(ok ? 'kaydedildi' : 'hata');
      if (ok) setTimeout(() => setKayitDurumu(null), 2500);
    }, 800);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.4rem' }}>
      {/* SHAKESPEARE'İN İŞARETLERİ */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
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
          Shakespeare'in İşaretleri
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {tercih.isaretler.map((isaret, i) => (
            <div
              key={i}
              style={{
                borderLeft: `1px solid color-mix(in srgb, ${TON} 33%, transparent)`,
                padding: '0.4rem 0 0.4rem 1.2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    fontWeight: 200,
                    fontSize: '0.6rem',
                    letterSpacing: '0.25em',
                    color: 'var(--ink-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  {isaret.ref}
                </span>
                {isaret.sahneNo && (
                  <a
                    href={`${kokYol}/timeline#sahne-${isaret.sahneNo}`}
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 200,
                      fontSize: '0.55rem',
                      letterSpacing: '0.25em',
                      color: TON,
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      padding: '0.15rem 0.5rem',
                      border: `1px solid color-mix(in srgb, ${TON} 20%, transparent)`,
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = TON; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = TON + '33'; }}
                  >
                    Sahne {isaret.sahneNo} →
                  </a>
                )}
              </div>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {isaret.metin}
              </p>
            </div>
          ))}
        </div>

        {tercih.sentez && (
          <div style={{ paddingTop: '0.8rem', borderTop: '1px solid var(--bg-elevated)' }}>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: TON,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {tercih.sentez}
            </p>
          </div>
        )}
      </section>

      {/* OLASI YORUMLAR */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
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
            {`${tercih.yorumlar.length} ${t.olasiYorum}`}
          </span>
          <KayitRozet durum={kayitDurumu} />
        </div>

        {tercih.cokluSecim && tercih.cokluSecimNotu && (
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.78rem',
              color: 'var(--ink-muted)',
              fontStyle: 'italic',
              margin: 0,
              padding: '0.7rem 1rem',
              backgroundColor: 'var(--accent-bg)',
              borderLeft: `2px solid color-mix(in srgb, ${TON} 33%, transparent)`,
            }}
          >
            {tercih.cokluSecimNotu}
          </p>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          {tercih.yorumlar.map((y) => {
            const aktif = secimler.includes(y.harf);
            return (
              <button
                key={y.harf}
                onClick={() => harfDegistir(y.harf)}
                style={{
                  textAlign: 'left',
                  cursor: 'pointer',
                  border: `1px solid ${aktif ? TON : 'var(--rule)'}`,
                  backgroundColor: aktif ? 'var(--accent-bg-deep)' : 'transparent',
                  padding: '1.1rem 1.4rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  color: 'var(--ink)',
                  fontFamily: 'inherit',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => { if (!aktif) e.currentTarget.style.borderColor = TON + '88'; }}
                onMouseLeave={(e) => { if (!aktif) e.currentTarget.style.borderColor = 'var(--rule)'; }}
              >
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    minWidth: '24px',
                    borderRadius: tercih.cokluSecim ? '3px' : '50%',
                    border: `1.5px solid ${aktif ? TON : 'var(--ink-muted)'}`,
                    backgroundColor: aktif ? TON : 'transparent',
                    color: aktif ? 'var(--bg-base)' : 'var(--ink-muted)',
                    fontFamily: 'Jost, sans-serif',
                    fontWeight: 400,
                    fontSize: '0.7rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '0.15rem',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {y.harf}
                </span>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontStyle: 'italic',
                      fontSize: '1.05rem',
                      color: aktif ? 'var(--ink)' : 'var(--ink-soft)',
                      lineHeight: 1.3,
                    }}
                  >
                    {y.baslik}
                  </span>
                  <p
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.85rem',
                      color: aktif ? 'var(--ink-soft)' : 'var(--ink-soft)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {y.aciklama}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ÖZEL YORUM */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.55rem',
            letterSpacing: '0.35em',
            color: 'var(--onay)',
            textTransform: 'uppercase',
          }}
        >
          {t.yaDaKendi}
        </span>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.95rem',
            color: 'var(--ink-muted)',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {t.aciklama}
        </p>
        <textarea
          value={ozelYorum}
          onChange={(e) => ozelYorumDegistir(e.target.value)}
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
      </section>

      {tercih.kapanis && (
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.95rem',
            color: 'var(--ink-muted)',
            lineHeight: 1.7,
            margin: 0,
            padding: '1rem 0',
            borderTop: '1px solid var(--bg-elevated)',
          }}
        >
          {tercih.kapanis}
        </p>
      )}
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
