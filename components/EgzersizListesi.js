// components/EgzersizListesi.js
// ITC Actor's Gym — Egzersizler bileşeni
//
// Yeni akış:
//  1. Egzersiz kartı (kapalı) — başlık, süre, seviye, kısa açıklama
//  2. Tıklayınca açıklama panelı açılır — uzun açıklama + "Başla" butonu
//  3. Başla deyince adımlar/kararlar açılır
//  4. Bitince: travma 2-3 ise topraklanma uyarısı çıkar
//
// Üç durum:
//  - Standart egzersiz (adimlar)
//  - Kararlar Odası (kararlar)
//  - Deroling/çıkış egzersizi (tipDeroling)

'use client';

import { useState } from 'react';
import { sahneErisimi } from '../app/lib/travma';
import { vakDili } from '../app/lib/kalibrasyon';
import KararlarOdasi from './KararlarOdasi';

export default function EgzersizListesi({ egzersizler, kalibrasyon, onEgzersizTamamlandi }) {
  const [acikEgzersiz, setAcikEgzersiz] = useState(null);
  const [calisilan, setCalisilan] = useState(null); // 'baslat' veya egzersiz id'si
  const [tamamlananUyari, setTamamlananUyari] = useState(null);

  const vakBilgi = vakDili(kalibrasyon?.vak?.baskin);

  function egzersiziAc(egzersiz) {
    if (acikEgzersiz === egzersiz.id) {
      setAcikEgzersiz(null);
      setCalisilan(null);
    } else {
      setAcikEgzersiz(egzersiz.id);
      setCalisilan(null);
    }
  }

  function egzersizeBasla(egzersiz) {
    setCalisilan(egzersiz.id);
  }

  function egzersiziTamamla(egzersiz) {
    if (onEgzersizTamamlandi) {
      onEgzersizTamamlandi(egzersiz.id, { tamamlandi: true });
    }
    // Travma seviyesi 2-3 ise topraklanma uyarısı
    if (egzersiz.travmaSeviyesi >= 2 && !egzersiz.tipDeroling) {
      setTamamlananUyari(egzersiz);
    } else {
      setCalisilan(null);
      setAcikEgzersiz(null);
    }
  }

  function uyariyiKapat() {
    setTamamlananUyari(null);
    setCalisilan(null);
    setAcikEgzersiz(null);
  }

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
        Karaktere bedensel bir yolculuk. Her egzersiz bir kapı — açıklamayı oku, hazır hissettiğinde başla.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {egzersizler.map((egzersiz, i) => {
          const sahneBenzeri = { travmaSeviyesi: egzersiz.travmaSeviyesi || 0 };
          const erisim = sahneErisimi(sahneBenzeri, kalibrasyon?.yildiz);
          const aktif = acikEgzersiz === egzersiz.id;
          const calisiliyor = calisilan === egzersiz.id;

          let borderColor = '#2a2a2a';
          if (aktif) borderColor = '#c9a96e';
          else if (erisim.kilitli) borderColor = '#3a2f1f';

          return (
            <div
              key={egzersiz.id}
              style={{
                border: `1px solid ${borderColor}`,
                backgroundColor: aktif ? '#0f0f0f' : 'transparent',
                transition: 'all 0.25s ease',
                opacity: erisim.kilitli ? 0.65 : 1,
              }}
            >
              {/* KART BAŞLIĞI */}
              <button
                onClick={erisim.kilitli ? null : () => egzersiziAc(egzersiz)}
                disabled={erisim.kilitli}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  width: '100%',
                  padding: '1.2rem 1.4rem',
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
                    color: '#c9a96e',
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
                        fontSize: '0.92rem',
                        color: '#f0ede8',
                      }}
                    >
                      {egzersiz.baslik}
                    </span>
                    <span
                      style={{
                        fontFamily: 'Jost, sans-serif',
                        fontWeight: 200,
                        fontSize: '0.55rem',
                        letterSpacing: '0.2em',
                        color: '#888',
                        textTransform: 'uppercase',
                        padding: '0.15rem 0.55rem',
                        border: '1px solid #2a2a2a',
                      }}
                    >
                      {egzersiz.seviye}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontFamily: 'Jost, sans-serif',
                        fontWeight: 200,
                        fontSize: '0.65rem',
                        color: '#888',
                      }}
                    >
                      {egzersiz.sure}
                    </span>
                    {egzersiz.tipDeroling && (
                      <span
                        style={{
                          fontFamily: 'Jost, sans-serif',
                          fontWeight: 200,
                          fontSize: '0.55rem',
                          letterSpacing: '0.2em',
                          color: '#6a9b6a',
                          textTransform: 'uppercase',
                        }}
                      >
                        Çıkış · Topraklanma
                      </span>
                    )}
                    {egzersiz.travmaSeviyesi >= 2 && !egzersiz.tipDeroling && (
                      <span
                        style={{
                          fontFamily: 'Jost, sans-serif',
                          fontWeight: 200,
                          fontSize: '0.55rem',
                          letterSpacing: '0.2em',
                          color: '#9b6a6a',
                          textTransform: 'uppercase',
                        }}
                      >
                        Derin Çalışma
                      </span>
                    )}
                  </div>
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

              {/* KAPALIYKEN BİLE GÖRÜNEN ERİŞİM MESAJI */}
              {erisim.kilitli && (
                <div
                  style={{
                    padding: '0 1.4rem 1.2rem 1.4rem',
                    borderTop: '1px solid #2a1f1f',
                    paddingTop: '0.9rem',
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
                    {erisim.mesaj}
                  </p>
                </div>
              )}

              {/* AÇIK PANEL */}
              {aktif && !erisim.kilitli && (
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
                  {/* Erişim uyarısı (kilitli değil ama yumuşak uyarı varsa) */}
                  {erisim.mesaj && (
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
                        {erisim.mesaj}
                      </p>
                    </div>
                  )}

                  {/* DURUM 1: HENÜZ BAŞLAMADI — açıklama + Başla butonu */}
                  {!calisiliyor && (
                    <>
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
                        {egzersiz.aciklama}
                      </p>

                      {/* Travma seviyesi 2-3 için ek hazırlık uyarısı */}
                      {egzersiz.travmaSeviyesi >= 2 && !egzersiz.tipDeroling && (
                        <div
                          style={{
                            padding: '1rem 1.2rem',
                            backgroundColor: '#15110a',
                            border: '1px solid #2a2010',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'Jost, sans-serif',
                              fontWeight: 200,
                              fontSize: '0.55rem',
                              letterSpacing: '0.3em',
                              color: '#c9a96e',
                              textTransform: 'uppercase',
                            }}
                          >
                            Hazırlık Notu
                          </span>
                          <p
                            style={{
                              fontFamily: 'Jost, sans-serif',
                              fontWeight: 300,
                              fontSize: '0.78rem',
                              color: '#ddd',
                              lineHeight: 1.7,
                              margin: 0,
                            }}
                          >
                            Bu egzersiz daha derin bir katmanda çalışıyor. Başlamadan önce sessiz bir alan bul, telefonunu sustur, su yanında olsun. Egzersizin sonunda sana topraklanma anı önereceğim.
                          </p>
                        </div>
                      )}

                      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <button
                          onClick={() => egzersizeBasla(egzersiz)}
                          style={{
                            padding: '0.9rem 2rem',
                            backgroundColor: '#c9a96e',
                            border: 'none',
                            color: '#0a0a0a',
                            fontFamily: 'Jost, sans-serif',
                            fontWeight: 300,
                            fontSize: '0.7rem',
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d9b97e'; }}
                          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#c9a96e'; }}
                        >
                          Hazırım · Başla
                        </button>
                        <span
                          style={{
                            fontFamily: 'Jost, sans-serif',
                            fontWeight: 200,
                            fontSize: '0.65rem',
                            color: '#888',
                          }}
                        >
                          Süre: {egzersiz.sure}
                        </span>
                      </div>
                    </>
                  )}

                  {/* DURUM 2: ÇALIŞIYOR — adımlar veya kararlar gösterilir */}
                  {calisiliyor && egzersiz.kararlar && (
                    <KararlarOdasi
                      egzersiz={egzersiz}
                      vakBilgi={vakBilgi}
                      onTamamlandi={() => egzersiziTamamla(egzersiz)}
                    />
                  )}

                  {calisiliyor && egzersiz.adimlar && (
                    <AdimliEgzersiz
                      egzersiz={egzersiz}
                      vakBilgi={vakBilgi}
                      onTamamlandi={() => egzersiziTamamla(egzersiz)}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* TOPRAKLANMA UYARISI */}
      {tamamlananUyari && (
        <TopraklanmaModu
          egzersiz={tamamlananUyari}
          onKapat={uyariyiKapat}
        />
      )}
    </div>
  );
}

// ─── ADIMLI EGZERSİZ ────────────────────────────────────────────────────────

function AdimliEgzersiz({ egzersiz, vakBilgi, onTamamlandi }) {
  const [mevcutAdim, setMevcutAdim] = useState(0);
  const adimlar = egzersiz.adimlar || [];

  // Placeholder değerlerini değiştir
  function adimMetni(adim) {
    if (typeof adim !== 'string') return adim;
    return adim
      .replace('{duyu}', vakBilgi.duyu)
      .replace('{ipucu}', vakBilgi.ipucu)
      .replace('{yansimaSorusu}', vakBilgi.yansimaSorusu);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            color: '#c9a96e',
            textTransform: 'uppercase',
          }}
        >
          Adım {mevcutAdim + 1} / {adimlar.length}
        </span>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#2a2a2a', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '-1px',
              height: '3px',
              width: `${((mevcutAdim + 1) / adimlar.length) * 100}%`,
              backgroundColor: '#c9a96e',
              transition: 'width 0.4s ease',
            }}
          />
        </div>
      </div>

      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '1.05rem',
          color: '#f0ede8',
          lineHeight: 1.9,
          margin: 0,
          minHeight: '4rem',
        }}
      >
        {adimMetni(adimlar[mevcutAdim])}
      </p>

      <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'space-between' }}>
        <button
          onClick={() => mevcutAdim > 0 && setMevcutAdim(mevcutAdim - 1)}
          disabled={mevcutAdim === 0}
          style={{
            padding: '0.7rem 1.4rem',
            backgroundColor: 'transparent',
            border: '1px solid #3a3a3a',
            color: mevcutAdim === 0 ? '#444' : '#aaa',
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            cursor: mevcutAdim === 0 ? 'not-allowed' : 'pointer',
            transition: 'all 0.25s ease',
          }}
        >
          ← Önceki
        </button>

        {mevcutAdim < adimlar.length - 1 ? (
          <button
            onClick={() => setMevcutAdim(mevcutAdim + 1)}
            style={{
              padding: '0.7rem 1.4rem',
              backgroundColor: '#c9a96e',
              border: 'none',
              color: '#0a0a0a',
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d9b97e'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#c9a96e'; }}
          >
            Sonraki →
          </button>
        ) : (
          <button
            onClick={onTamamlandi}
            style={{
              padding: '0.7rem 1.4rem',
              backgroundColor: '#6a9b6a',
              border: 'none',
              color: '#0a0a0a',
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#7aab7a'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#6a9b6a'; }}
          >
            Tamamlandı ✓
          </button>
        )}
      </div>
    </div>
  );
}

// ─── TOPRAKLANMA MODU ───────────────────────────────────────────────────────
//
// Travma seviye 2-3 egzersizden sonra otomatik açılır.
// Oyuncu karakteri bırakmadan günlük hayata dönmesin.

function TopraklanmaModu({ egzersiz, onKapat }) {
  const [adim, setAdim] = useState(0);

  const adimlar = [
    'Şimdi bir an dur. Egzersiz bitti, ama sen hâlâ karakterin içindesin.',
    'Otur. Ayaklarını yere bas. Ağırlığını sandalyenin üzerinde hisset.',
    'Üç derin nefes al. Yavaş, derin, sayarak.',
    'Adını yüksek sesle söyle. Yaşını söyle. Bugünün tarihini söyle.',
    'Etrafına bak. Üç tane farklı renk gör. İki tane farklı ses duy. Bir tane bedensel duyum hisset.',
    'Su iç. Kalkmadan önce birkaç dakika öylece otur. Buraya tamamen geri dön.',
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: '500px',
          width: '100%',
          backgroundColor: '#0a0a0a',
          border: '1px solid #6a9b6a',
          padding: '2.5rem 2.2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              color: '#6a9b6a',
              textTransform: 'uppercase',
            }}
          >
            Topraklanma · Çıkış
          </span>
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontSize: '1.6rem',
              color: '#f0ede8',
              margin: 0,
            }}
          >
            Karakteri bırak
          </h3>
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.72rem',
              color: '#aaa',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            "{egzersiz.baslik}" derin bir çalışmaydı. Günlük hayata dönmeden önce kısa bir topraklanma yapıyoruz.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: '#6a9b6a',
              textTransform: 'uppercase',
            }}
          >
            {adim + 1} / {adimlar.length}
          </span>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#2a2a2a', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: '-1px',
                height: '3px',
                width: `${((adim + 1) / adimlar.length) * 100}%`,
                backgroundColor: '#6a9b6a',
                transition: 'width 0.4s ease',
              }}
            />
          </div>
        </div>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1.05rem',
            color: '#f0ede8',
            lineHeight: 1.9,
            margin: 0,
            minHeight: '4rem',
            textAlign: 'center',
          }}
        >
          {adimlar[adim]}
        </p>

        <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center' }}>
          {adim < adimlar.length - 1 ? (
            <button
              onClick={() => setAdim(adim + 1)}
              style={{
                padding: '0.9rem 2rem',
                backgroundColor: '#6a9b6a',
                border: 'none',
                color: '#0a0a0a',
                fontFamily: 'Jost, sans-serif',
                fontWeight: 300,
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#7aab7a'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#6a9b6a'; }}
            >
              Yaptım · Devam
            </button>
          ) : (
            <button
              onClick={onKapat}
              style={{
                padding: '0.9rem 2rem',
                backgroundColor: '#6a9b6a',
                border: 'none',
                color: '#0a0a0a',
                fontFamily: 'Jost, sans-serif',
                fontWeight: 300,
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#7aab7a'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#6a9b6a'; }}
            >
              Buradayım ✓
            </button>
          )}
        </div>
      </div>
    </div>
  );
}