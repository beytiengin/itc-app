// components/HamletTercihSecim.js
// ITC Actor's Gym — Yazarın Çerçevesi · Tek tercih için seçim arayüzü
//
// Tercih.cokluSecim'e göre radyo veya checkbox.
// Yorum harfleri + özel yorum textarea.
// Auto-save 800ms debounce.

'use client';

import { useState, useEffect, useRef } from 'react';
import { tercihKaydet } from '../app/lib/hamlet-veri';

const TON = '#c9a96e';

export default function HamletTercihSecim({ tercih, baslangic, karakterId }) {
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
                borderLeft: `1px solid ${TON}55`,
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
                    color: '#888',
                    textTransform: 'uppercase',
                  }}
                >
                  {isaret.ref}
                </span>
                {isaret.sahneNo && (
                  <a
                    href={`/antrenman/karakter/hamlet/timeline#sahne-${isaret.sahneNo}`}
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 200,
                      fontSize: '0.55rem',
                      letterSpacing: '0.25em',
                      color: TON,
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      padding: '0.15rem 0.5rem',
                      border: `1px solid ${TON}33`,
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
                  color: '#ddd',
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
          <div style={{ paddingTop: '0.8rem', borderTop: '1px solid #1a1a1a' }}>
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
            {tercih.cokluSecim ? `${tercih.yorumlar.length} Olası Yorum` : `${tercih.yorumlar.length} Olası Yorum`}
          </span>
          <KayitRozet durum={kayitDurumu} />
        </div>

        {tercih.cokluSecim && tercih.cokluSecimNotu && (
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.78rem',
              color: '#888',
              fontStyle: 'italic',
              margin: 0,
              padding: '0.7rem 1rem',
              backgroundColor: '#15110a',
              borderLeft: `2px solid ${TON}55`,
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
                  border: `1px solid ${aktif ? TON : '#2a2a2a'}`,
                  backgroundColor: aktif ? '#100c06' : 'transparent',
                  padding: '1.1rem 1.4rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  color: '#f0ede8',
                  fontFamily: 'inherit',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => { if (!aktif) e.currentTarget.style.borderColor = TON + '88'; }}
                onMouseLeave={(e) => { if (!aktif) e.currentTarget.style.borderColor = '#2a2a2a'; }}
              >
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    minWidth: '24px',
                    borderRadius: tercih.cokluSecim ? '3px' : '50%',
                    border: `1.5px solid ${aktif ? TON : '#444'}`,
                    backgroundColor: aktif ? TON : 'transparent',
                    color: aktif ? '#0a0a0a' : '#888',
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
                      color: aktif ? '#f0ede8' : '#ddd',
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
                      color: aktif ? '#ccc' : '#aaa',
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
            color: '#7a9b7a',
            textTransform: 'uppercase',
          }}
        >
          Ya da Kendi Yorumun
        </span>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.95rem',
            color: '#888',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Yukarıdakilerden hiçbirine tam uymuyorsa kendi yorumunu yaz. İkisini birlikte de yapabilirsin.
        </p>
        <textarea
          value={ozelYorum}
          onChange={(e) => ozelYorumDegistir(e.target.value)}
          placeholder="Senin yorumun nasıl?"
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
      </section>

      {tercih.kapanis && (
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.95rem',
            color: '#888',
            lineHeight: 1.7,
            margin: 0,
            padding: '1rem 0',
            borderTop: '1px solid #1a1a1a',
          }}
        >
          {tercih.kapanis}
        </p>
      )}
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
