// app/antrenman/karakter/hamlet/yazarin-cercevesi/sentez/page.js
// ITC Actor's Gym — Modül II Hamlet · Yazarın Çerçevesi · Sentez
//
// "Beş Cümle, Bir Hamlet" — beş tercihin birleştiği yer.
// Her tercih için: senin seçimin + sentez cümlesi yazma alanı.
// Tercih → Sahne yansıması bölümü Timeline'a köprü kurar.

'use client';

import { useState, useEffect, useRef } from 'react';
import hamlet from '../../../../../../data/karakterler/hamlet';
import { tercihleriGetir, tercihKaydet } from '../../../../../lib/hamlet-veri';
import HamletAltSayfaHeader from '../../../../../../components/HamletAltSayfaHeader';
import HamletBolumGecisi from '../../../../../../components/HamletBolumGecisi';

const TON = 'var(--accent)';

export default function SentezSayfasi() {
  const [secimler, setSecimler] = useState({});
  const [yukleniyor, setYukleniyor] = useState(true);
  const [kayitDurumlari, setKayitDurumlari] = useState({});
  const debounceRefs = useRef({});

  const tercihler = hamlet.tercihler || [];

  useEffect(() => {
    async function yukle() {
      const veri = await tercihleriGetir(hamlet.id);
      setSecimler(veri);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  useEffect(() => () => {
    Object.values(debounceRefs.current).forEach((id) => clearTimeout(id));
  }, []);

  function sentezCumleDegistir(tercihNo, yeni) {
    setSecimler((onceki) => ({
      ...onceki,
      [tercihNo]: { ...(onceki[tercihNo] || {}), sentezCumle: yeni },
    }));
    setKayitDurumlari((o) => ({ ...o, [tercihNo]: 'yaziliyor' }));

    if (debounceRefs.current[tercihNo]) clearTimeout(debounceRefs.current[tercihNo]);
    debounceRefs.current[tercihNo] = setTimeout(async () => {
      setKayitDurumlari((o) => ({ ...o, [tercihNo]: 'kaydediliyor' }));
      const ok = await tercihKaydet(hamlet.id, tercihNo, { sentezCumle: yeni });
      setKayitDurumlari((o) => ({ ...o, [tercihNo]: ok ? 'kaydedildi' : 'hata' }));
      if (ok) {
        setTimeout(() => {
          setKayitDurumlari((o) => ({ ...o, [tercihNo]: null }));
        }, 2500);
      }
    }, 800);
  }

  if (yukleniyor) {
    return (
      <main style={ekranStili}>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: 'var(--ink-muted)',
            textTransform: 'uppercase',
          }}
        >
          Hazırlanıyor…
        </span>
      </main>
    );
  }

  const tamamlananSayisi = tercihler.filter((t) => {
    const s = secimler[t.no];
    return s && (s.secimler?.length > 0 || (s.ozelYorum?.length || 0) > 0);
  }).length;
  const hepsiTamam = tamamlananSayisi >= tercihler.length;

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-base)',
        color: 'var(--ink)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <HamletAltSayfaHeader />

      <article
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
          padding: '3rem 2rem 5rem',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        <header style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a
            href="/antrenman/karakter/hamlet/yazarin-cercevesi"
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              color: 'var(--ink-muted)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              alignSelf: 'flex-start',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = TON; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
          >
            ← Yazarın Çerçevesi
          </a>

          {hepsiTamam ? (
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.65rem',
                letterSpacing: '0.35em',
                color: TON,
                textTransform: 'uppercase',
              }}
            >
              ✓ Beş Tercih Tamamlandı
            </span>
          ) : (
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.65rem',
                letterSpacing: '0.35em',
                color: 'var(--ink-muted)',
                textTransform: 'uppercase',
              }}
            >
              Sentez · {tamamlananSayisi} / {tercihler.length} tercih hazır
            </span>
          )}

          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 6vw, 3.4rem)',
              color: 'var(--ink)',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Beş Cümle, Bir Hamlet
          </h1>

          {hepsiTamam ? (
            <p style={paragrafStili}>
              Beş tercihte de seçimini yaptın (ya da kendi yorumunu yazdın). Şimdi
              bu beş seçim birleşip senin Hamlet'ini ortaya çıkarıyor.
            </p>
          ) : (
            <p style={paragrafStili}>
              Henüz tüm tercihler tamamlanmadı. Şu ana kadar yaptığın seçimleri
              görebilirsin — eksik kalanlara geri dönüp tamamlayabilirsin.
            </p>
          )}
        </header>

        {/* BEŞ CÜMLE */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {tercihler.map((tercih) => {
            const s = secimler[tercih.no] || {};
            const harfler = s.secimler || [];
            const ozelVar = (s.ozelYorum?.length || 0) > 0;
            const yapilmis = harfler.length > 0 || ozelVar;
            const seciliYorumlar = harfler
              .map((h) => tercih.yorumlar.find((y) => y.harf === h))
              .filter(Boolean);

            return (
              <div
                key={tercih.no}
                style={{
                  border: `1px solid ${yapilmis ? TON + '55' : 'var(--rule)'}`,
                  backgroundColor: 'var(--bg-elevated)',
                  padding: '1.6rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: '1.5rem',
                      color: TON,
                      lineHeight: 1,
                    }}
                  >
                    {tercih.no}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 200,
                      fontSize: '0.6rem',
                      letterSpacing: '0.35em',
                      color: 'var(--ink-muted)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {tercih.konu}
                  </span>
                  <a
                    href={`/antrenman/karakter/hamlet/yazarin-cercevesi/${tercih.no}`}
                    style={{
                      marginLeft: 'auto',
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 200,
                      fontSize: '0.55rem',
                      letterSpacing: '0.25em',
                      color: 'var(--ink-muted)',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      transition: 'color 0.25s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = TON; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
                  >
                    Düzenle →
                  </a>
                </div>

                {/* Senin seçimin */}
                {yapilmis ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {seciliYorumlar.map((y) => (
                      <div key={y.harf} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                        <span
                          style={{
                            width: '22px',
                            height: '22px',
                            minWidth: '22px',
                            borderRadius: tercih.cokluSecim ? '3px' : '50%',
                            backgroundColor: TON,
                            color: 'var(--bg-base)',
                            fontFamily: 'Jost, sans-serif',
                            fontWeight: 400,
                            fontSize: '0.65rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '0.15rem',
                          }}
                        >
                          {y.harf}
                        </span>
                        <span
                          style={{
                            flex: 1,
                            fontFamily: 'Cormorant Garamond, serif',
                            fontStyle: 'italic',
                            fontSize: '1rem',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.5,
                          }}
                        >
                          {y.baslik}
                        </span>
                      </div>
                    ))}
                    {ozelVar && (
                      <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                        <span
                          style={{
                            fontFamily: 'Jost, sans-serif',
                            fontWeight: 200,
                            fontSize: '0.55rem',
                            letterSpacing: '0.25em',
                            color: 'var(--onay)',
                            textTransform: 'uppercase',
                            minWidth: '60px',
                            paddingTop: '0.15rem',
                          }}
                        >
                          Özel
                        </span>
                        <p
                          style={{
                            flex: 1,
                            fontFamily: 'Cormorant Garamond, serif',
                            fontStyle: 'italic',
                            fontSize: '0.95rem',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.7,
                            margin: 0,
                          }}
                        >
                          {s.ozelYorum}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 200,
                      fontSize: '0.8rem',
                      color: 'var(--ink-muted)',
                      fontStyle: 'italic',
                      margin: 0,
                    }}
                  >
                    Henüz seçim yapılmadı —{' '}
                    <a
                      href={`/antrenman/karakter/hamlet/yazarin-cercevesi/${tercih.no}`}
                      style={{ color: TON, textDecoration: 'none' }}
                    >
                      tamamlamak için aç →
                    </a>
                  </p>
                )}

                {/* Sentez cümlesi */}
                {yapilmis && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '0.8rem', borderTop: '1px solid var(--bg-elevated)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span
                        style={{
                          fontFamily: 'Jost, sans-serif',
                          fontWeight: 200,
                          fontSize: '0.55rem',
                          letterSpacing: '0.3em',
                          color: 'var(--onay)',
                          textTransform: 'uppercase',
                        }}
                      >
                        Senin Cümlen
                      </span>
                      <KayitRozet durum={kayitDurumlari[tercih.no]} />
                    </div>
                    <textarea
                      value={s.sentezCumle || ''}
                      onChange={(e) => sentezCumleDegistir(tercih.no, e.target.value)}
                      placeholder={`Benim Hamlet'imde ${tercih.konu.toLowerCase()} ___, çünkü ___`}
                      rows={3}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1.1rem',
                        backgroundColor: 'var(--bg-base)',
                        border: '1px solid var(--rule)',
                        color: 'var(--ink)',
                        fontFamily: 'Cormorant Garamond, serif',
                        fontStyle: 'italic',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
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
                )}
              </div>
            );
          })}
        </section>

        {/* TERCİH → SAHNE YANSIMASI */}
        {tamamlananSayisi > 0 && (
          <section
            style={{
              border: '1px solid var(--rule)',
              padding: '1.8rem 2rem',
              backgroundColor: 'var(--bg-elevated)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
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
                Tercihlerin Zaman Çizgisi'nde Nasıl Görünür
              </span>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: 'var(--ink-muted)',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Her tercih belli sahneleri etkiler. Şimdi bunları bedeninde sahnelere bağla.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tercihler.map((tercih) => {
                const s = secimler[tercih.no] || {};
                const harfler = s.secimler || [];
                if (harfler.length === 0 && !(s.ozelYorum?.length > 0)) return null;
                const sahneNolari = tercih.sahneNolari || [];

                return (
                  <div
                    key={tercih.no}
                    style={{
                      paddingLeft: '1rem',
                      borderLeft: `2px solid ${TON}55`,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'baseline' }}>
                      <span
                        style={{
                          fontFamily: 'Jost, sans-serif',
                          fontWeight: 300,
                          fontSize: '0.75rem',
                          letterSpacing: '0.2em',
                          color: TON,
                          textTransform: 'uppercase',
                        }}
                      >
                        {tercih.konu}
                      </span>
                      {harfler.map((h) => (
                        <span
                          key={h}
                          style={{
                            fontFamily: 'Jost, sans-serif',
                            fontWeight: 300,
                            fontSize: '0.65rem',
                            color: TON,
                            padding: '0.1rem 0.45rem',
                            border: `1px solid ${TON}55`,
                            letterSpacing: '0.1em',
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {sahneNolari.map((no) => (
                        <a
                          key={no}
                          href={`/antrenman/karakter/hamlet/timeline#sahne-${no}`}
                          style={{
                            fontFamily: 'Jost, sans-serif',
                            fontWeight: 200,
                            fontSize: '0.6rem',
                            letterSpacing: '0.25em',
                            color: 'var(--ink-soft)',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            padding: '0.3rem 0.7rem',
                            border: '1px solid var(--rule)',
                            transition: 'all 0.25s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = TON;
                            e.currentTarget.style.borderColor = TON;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--ink-soft)';
                            e.currentTarget.style.borderColor = 'var(--rule)';
                          }}
                        >
                          Sahne {no}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Buraya Kadar — reflektif kapanış (hepsi tamamsa) */}
        {hepsiTamam && (
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '3rem 2rem',
              borderTop: `1px solid ${TON}33`,
              textAlign: 'center',
              maxWidth: '560px',
              margin: '2rem auto 0',
            }}
          >
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.4em',
                color: TON,
                textTransform: 'uppercase',
              }}
            >
              Buraya kadar
            </span>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Doğruları gördün. Oyun öncesini tanıdın. Zaman Çizgisi'ni dolaştın.
              Şimdi <em style={{ color: TON }}>yazarın çerçevesini</em> sahiplendin —
              Shakespeare'in açık uçlarından kendi yorumunu çıkardın.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Bunlar senin Hamlet'inin <em style={{ color: TON }}>omurgası</em>.
              Sahneye çıktığında, beş tercihinin hepsi bedeninde olacak.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.5rem',
                letterSpacing: '0.6em',
                color: 'var(--ink-muted)',
                margin: '1rem 0',
              }}
            >
              ∙ ∙ ∙
            </p>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.85rem',
                color: 'var(--ink-muted)',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              Bir nefes ver. Sıradaki son bölüm.
            </p>
          </section>
        )}

        {/* Bölüm geçişi — her zaman görünür */}
        <HamletBolumGecisi
          oncekiEtiket="Bölüm 4"
          oncekiBaslik="Yazarın Çerçevesi"
          oncekiYol="/antrenman/karakter/hamlet/yazarin-cercevesi"
          sonrakiEtiket="Bölüm 5"
          sonrakiBaslik="Senin Çerçeven"
          sonrakiYol="/antrenman/karakter/hamlet/senin-cerceven"
        />
      </article>
    </main>
  );
}

function KayitRozet({ durum }) {
  if (!durum || durum === 'yaziliyor') return <span style={{ minHeight: '1em' }} />;
  const renk = durum === 'hata' ? 'var(--uyari)' : 'var(--accent)';
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

const paragrafStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.05rem',
  color: 'var(--ink-soft)',
  lineHeight: 1.8,
  margin: 0,
};

const ekranStili = {
  minHeight: '100vh',
  backgroundColor: 'var(--bg-base)',
  color: 'var(--ink)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
