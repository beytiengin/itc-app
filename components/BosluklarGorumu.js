// components/BosluklarGorumu.js
// ITC Actor's Gym — Yazarın belirlemediği boşluk anları
//
// Üç tip boşluk:
//  - pre  : Senaryodan önce (çocukluk, geçmiş)
//  - ara  : İki sahne arası
//  - ic   : Bir sahnenin içinde gösterilmeyen an
//  - post : Senaryodan sonra (deroling)

'use client';

import { useState } from 'react';
import { sahneErisimi } from '../app/lib/travma';

export default function BosluklarGorumu({ bosluklar, kalibrasyon }) {
  const [acik, setAcik] = useState(null);

  const tipBilgisi = {
    pre: { ad: 'Senaryo Öncesi', renk: '#6a9b6a' },
    ara: { ad: 'Sahneler Arası', renk: '#c9a96e' },
    ic: { ad: 'Sahne İçi', renk: '#9b6a6a' },
    post: { ad: 'Senaryo Sonrası', renk: '#6a7a9b' },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <p
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.78rem',
          color: '#aaa',
          lineHeight: 1.7,
          margin: 0,
          fontStyle: 'italic',
        }}
      >
        Yazarın yazdığı sahnelerin arasında, içinde, öncesinde ve sonrasında — gösterilmeyen anlar. Bu boşlukları sen yazıyorsun.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {bosluklar.map((bosluk, i) => {
          const tip = tipBilgisi[bosluk.tip] || tipBilgisi.ara;
          const sahneBenzeri = { travmaSeviyesi: bosluk.travmaSeviyesi || 0 };
          const erisim = sahneErisimi(sahneBenzeri, kalibrasyon?.yildiz);
          const aktif = acik === bosluk.id;

          let borderColor = '#2a2a2a';
          if (aktif) borderColor = tip.renk;
          else if (erisim.kilitli) borderColor = '#3a1f1f';

          return (
            <div
              key={bosluk.id}
              style={{
                border: `1px solid ${borderColor}`,
                backgroundColor: aktif ? '#0f0f0f' : 'transparent',
                transition: 'all 0.25s ease',
                opacity: erisim.kilitli ? 0.55 : 1,
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
                  color: '#f0ede8',
                  fontFamily: 'inherit',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    color: tip.renk,
                    minWidth: '28px',
                    lineHeight: 1.4,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.7rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Jost, sans-serif',
                        fontWeight: 300,
                        fontSize: '0.9rem',
                        color: '#f0ede8',
                      }}
                    >
                      {bosluk.baslik}
                    </span>
                    <span
                      style={{
                        fontFamily: 'Jost, sans-serif',
                        fontWeight: 200,
                        fontSize: '0.55rem',
                        letterSpacing: '0.2em',
                        color: tip.renk,
                        textTransform: 'uppercase',
                        padding: '0.15rem 0.55rem',
                        border: `1px solid ${tip.renk}55`,
                      }}
                    >
                      {tip.ad}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontStyle: 'italic',
                        fontSize: '0.78rem',
                        color: '#888',
                      }}
                    >
                      {bosluk.konum}
                    </span>
                    <span
                      style={{
                        fontFamily: 'Jost, sans-serif',
                        fontWeight: 200,
                        fontSize: '0.65rem',
                        color: '#888',
                      }}
                    >
                      {bosluk.sure}
                    </span>
                    {erisim.kilitli && (
                      <span style={{ fontSize: '0.7rem', color: '#9b6a6a' }}>🔒</span>
                    )}
                  </div>

                  <p
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 200,
                      fontSize: '0.78rem',
                      color: '#aaa',
                      lineHeight: 1.6,
                      margin: '0.2rem 0 0 0',
                    }}
                  >
                    {bosluk.kisaAciklama}
                  </p>
                </div>

                {!erisim.kilitli && (
                  <span
                    style={{
                      fontSize: '0.7rem',
                      color: '#888',
                      marginTop: '0.3rem',
                      transform: aktif ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    ▾
                  </span>
                )}
              </button>

              {aktif && (
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
                  {/* Erişim uyarısı */}
                  {erisim.mesaj && !erisim.kilitli && (
                    <div
                      style={{
                        padding: '0.9rem 1.1rem',
                        backgroundColor: '#1a150f',
                        border: '1px solid #3a2f1f',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'Jost, sans-serif',
                          fontWeight: 300,
                          fontSize: '0.75rem',
                          color: '#c9a96e',
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        ⚠ {erisim.mesaj}
                      </p>
                    </div>
                  )}

                  {/* Uzun açıklama */}
                  <p
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontStyle: 'italic',
                      fontSize: '1rem',
                      color: '#ddd',
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {bosluk.uzunAciklama}
                  </p>

                  {/* Sorular */}
                  <div>
                    <p
                      style={{
                        fontFamily: 'Jost, sans-serif',
                        fontWeight: 200,
                        fontSize: '0.55rem',
                        letterSpacing: '0.3em',
                        color: tip.renk,
                        textTransform: 'uppercase',
                        marginBottom: '0.9rem',
                      }}
                    >
                      Boşluğa Giriş Soruları
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                      {bosluk.sorular.map((soru, j) => (
                        <div
                          key={j}
                          style={{
                            display: 'flex',
                            gap: '0.8rem',
                            alignItems: 'flex-start',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'Cormorant Garamond, serif',
                              fontStyle: 'italic',
                              fontSize: '0.85rem',
                              color: tip.renk,
                              minWidth: '20px',
                              lineHeight: 1.7,
                            }}
                          >
                            {j + 1}.
                          </span>
                          <p
                            style={{
                              flex: 1,
                              fontFamily: 'Jost, sans-serif',
                              fontWeight: 200,
                              fontSize: '0.85rem',
                              color: '#ddd',
                              lineHeight: 1.7,
                              margin: 0,
                            }}
                          >
                            {soru}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pedagojik not */}
                  <p
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 200,
                      fontSize: '0.72rem',
                      color: '#777',
                      lineHeight: 1.7,
                      margin: 0,
                      fontStyle: 'italic',
                      paddingTop: '0.5rem',
                      borderTop: '1px solid #2a2a2a',
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