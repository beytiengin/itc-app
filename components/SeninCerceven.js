// components/SeninCerceven.js
// ITC Actor's Gym — ◇ Senin Çerçeven (Boşluk çalışmaları)
//
// Yazarın sustuğu yerler — oyuncu eş-yazardır. Her boşluk için yazma alanı.
// Yansımalar Supabase'e otomatik (debounced) kaydedilir.

'use client';

import { useState, useEffect, useRef } from 'react';
import { sahneErisimi } from '../app/lib/travma';
import { boslukYansimasiKaydet, boslukYansimalariniGetir } from '../app/lib/kulis';
import IlerlemeRozet from './IlerlemeRozet';

const TON = 'var(--onay)';
const TON_HOVER = 'var(--onay-rule)';

export default function SeninCerceven({ bosluklar, kalibrasyon, karakterId }) {
  const [acik, setAcik] = useState(null);
  const [yansimalar, setYansimalar] = useState({});
  const [kayitDurumu, setKayitDurumu] = useState({});
  const debounceTimers = useRef({});

  const tipBilgisi = {
    pre: { ad: 'Senaryo Öncesi' },
    ara: { ad: 'Sahneler Arası' },
    ic: { ad: 'Sahne İçi' },
    post: { ad: 'Senaryo Sonrası' },
  };

  useEffect(() => {
    async function yukle() {
      if (karakterId) {
        const veri = await boslukYansimalariniGetir(karakterId);
        setYansimalar(veri);
      }
    }
    yukle();
  }, [karakterId]);

  useEffect(() => {
    return () => {
      Object.values(debounceTimers.current).forEach((id) => clearTimeout(id));
    };
  }, []);

  function yansimaDegistir(boslukId, yeniMetin) {
    setYansimalar((onceki) => ({ ...onceki, [boslukId]: yeniMetin }));

    if (debounceTimers.current[boslukId]) {
      clearTimeout(debounceTimers.current[boslukId]);
    }

    setKayitDurumu((onceki) => ({ ...onceki, [boslukId]: 'yaziliyor' }));

    debounceTimers.current[boslukId] = setTimeout(async () => {
      if (!karakterId) return;
      setKayitDurumu((onceki) => ({ ...onceki, [boslukId]: 'kaydediliyor' }));
      const basarili = await boslukYansimasiKaydet(karakterId, boslukId, yeniMetin);
      setKayitDurumu((onceki) => ({
        ...onceki,
        [boslukId]: basarili ? 'kaydedildi' : 'hata',
      }));

      if (basarili) {
        setTimeout(() => {
          setKayitDurumu((onceki) => ({ ...onceki, [boslukId]: null }));
        }, 3000);
      }
    }, 800);
  }

  function kayitDurumuMesaji(durum) {
    if (durum === 'yaziliyor') return null;
    if (durum === 'kaydediliyor') return 'Kaydediliyor…';
    if (durum === 'kaydedildi') return '✓ Kaydedildi';
    if (durum === 'hata') return '⚠ Kaydedilemedi';
    return null;
  }

  const yazilanSayisi = Object.values(yansimalar).filter((m) => m && m.length > 0).length;
  const toplam = (bosluklar || []).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.5rem',
              color: TON,
              letterSpacing: '0.05em',
            }}
          >
            ◇ Senin Çerçeven
          </span>
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
            {toplam} Alan
          </span>
        </div>
        <p
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.85rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.7,
            margin: 0,
            fontStyle: 'italic',
          }}
        >
          Yazarın sustuğu yerler — sen yazıyorsun.
        </p>
        <IlerlemeRozet mevcut={yazilanSayisi} toplam={toplam} renk={TON} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {(bosluklar || []).map((bosluk, i) => {
          const tip = tipBilgisi[bosluk.tip] || tipBilgisi.ara;
          const sahneBenzeri = { travmaSeviyesi: bosluk.travmaSeviyesi || 0 };
          const erisim = sahneErisimi(sahneBenzeri, kalibrasyon?.yildiz);
          const aktif = acik === bosluk.id;
          const yansimaMevcut = yansimalar[bosluk.id]?.length > 0;

          let borderColor = 'var(--rule)';
          if (aktif) borderColor = TON;
          else if (yansimaMevcut) borderColor = TON_HOVER;
          else if (erisim.kilitli) borderColor = 'var(--accent-rule)';

          return (
            <div
              key={bosluk.id}
              id={`bosluk-${bosluk.id}`}
              style={{
                border: `1px solid ${borderColor}`,
                backgroundColor: aktif ? 'var(--bg-elevated)' : 'transparent',
                transition: 'all 0.25s ease',
                opacity: erisim.kilitli ? 0.65 : 1,
              }}
            >
              <button
                onClick={erisim.kilitli ? null : () => setAcik(aktif ? null : bosluk.id)}
                disabled={erisim.kilitli}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  width: '100%',
                  padding: '1.1rem 1.4rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: erisim.kilitli ? 'not-allowed' : 'pointer',
                  color: 'var(--ink)',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => { if (!aktif && !erisim.kilitli) e.currentTarget.parentElement.style.borderColor = TON; }}
                onMouseLeave={(e) => { if (!aktif && !erisim.kilitli) e.currentTarget.parentElement.style.borderColor = yansimaMevcut ? TON_HOVER : 'var(--rule)'; }}
              >
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    color: yansimaMevcut ? TON : 'var(--ink-muted)',
                    minWidth: '28px',
                    lineHeight: 1.4,
                  }}
                >
                  ◇
                </span>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.9rem', color: 'var(--ink)' }}>
                      {bosluk.baslik}
                    </span>
                    <span
                      style={{
                        fontFamily: 'Jost, sans-serif',
                        fontWeight: 200,
                        fontSize: '0.55rem',
                        letterSpacing: '0.2em',
                        color: TON,
                        textTransform: 'uppercase',
                        padding: '0.15rem 0.55rem',
                        border: `1px solid color-mix(in srgb, ${TON} 33%, transparent)`,
                      }}
                    >
                      {tip.ad}
                    </span>
                    {yansimaMevcut && (
                      <span
                        style={{
                          fontFamily: 'Jost, sans-serif',
                          fontWeight: 200,
                          fontSize: '0.55rem',
                          letterSpacing: '0.2em',
                          color: TON,
                          textTransform: 'uppercase',
                          padding: '0.15rem 0.55rem',
                          border: `1px solid ${TON_HOVER}`,
                        }}
                      >
                        ✓ Yazıldı
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
                      {bosluk.konum}
                    </span>
                    <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: 'var(--ink-muted)' }}>
                      {bosluk.sure}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: 'var(--ink-soft)', lineHeight: 1.6, margin: '0.2rem 0 0 0' }}>
                    {bosluk.kisaAciklama}
                  </p>
                </div>

                {!erisim.kilitli && (
                  <span
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--ink-muted)',
                      marginTop: '0.3rem',
                      transform: aktif ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    ▾
                  </span>
                )}
              </button>

              {erisim.kilitli && (
                <div style={{ padding: '0 1.4rem 1.2rem 1.4rem', borderTop: '1px solid var(--uyari)', paddingTop: '0.9rem' }}>
                  <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.75rem', color: 'var(--accent)', lineHeight: 1.7, margin: 0 }}>
                    {erisim.mesaj}
                  </p>
                </div>
              )}

              {aktif && !erisim.kilitli && (
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
                  {erisim.mesaj && (
                    <div style={{ padding: '0.9rem 1.1rem', backgroundColor: 'var(--accent-bg)', border: '1px solid var(--accent-rule)' }}>
                      <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.75rem', color: 'var(--accent)', lineHeight: 1.7, margin: 0 }}>
                        {erisim.mesaj}
                      </p>
                    </div>
                  )}

                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink-soft)', lineHeight: 1.8, margin: 0 }}>
                    {bosluk.uzunAciklama}
                  </p>

                  <div>
                    <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase', marginBottom: '0.9rem' }}>
                      Boşluğa Giriş Soruları
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                      {bosluk.sorular.map((soru, j) => (
                        <div key={j} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.85rem', color: TON, minWidth: '20px', lineHeight: 1.7 }}>
                            {j + 1}.
                          </span>
                          <p style={{ flex: 1, fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>
                            {soru}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>
                        Yansıman
                      </span>
                      <span style={{
                        fontFamily: 'Jost, sans-serif',
                        fontWeight: 200,
                        fontSize: '0.65rem',
                        color: kayitDurumu[bosluk.id] === 'hata' ? 'var(--uyari)' : TON,
                        fontStyle: 'italic',
                        minHeight: '1em',
                      }}>
                        {kayitDurumuMesaji(kayitDurumu[bosluk.id])}
                      </span>
                    </div>
                    <textarea
                      value={yansimalar[bosluk.id] || ''}
                      onChange={(e) => yansimaDegistir(bosluk.id, e.target.value)}
                      placeholder="Bu boşluğu kendi yorumunla doldur. Sorulara teker teker cevap verebilirsin, ya da kendi düşüncenle yaz. Bu sayfayı kapatsan bile kaydedilir, geri döndüğünde devam edebilirsin."
                      rows={8}
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

                  <p
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 200,
                      fontSize: '0.72rem',
                      color: 'var(--ink-muted)',
                      lineHeight: 1.7,
                      margin: 0,
                      fontStyle: 'italic',
                      paddingTop: '0.5rem',
                      borderTop: '1px solid var(--rule)',
                    }}
                  >
                    Bu sorulara doğru cevap yok. Senin cevapların — karakterin senin yorumun.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
