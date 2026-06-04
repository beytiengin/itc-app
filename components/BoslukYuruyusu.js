// components/BoslukYuruyusu.js
// ITC Actor's Gym — Çatallı Boşluk Yürüyüşü (KANON Karar 48)
//
// Yoğunluk 3 — tam ekran çatallı istasyon yürüyüşü.
// Pilot: Nina (Çehov · Martı) "İki yıllık boşluk" (b2).
//
// State machine:
//   esik (ilk yürüyüşte sabit, sonrakilerde opsiyonel)
//   → istasyon[0..N] (açılış · sorular · opsiyonel yazma · opsiyonel çatal)
//     ↳ branching: donguTetik eşleşirse donguIstasyonu'na, değilse atlanır
//     ↳ <DAL> placeholder: kayıp dalına göre runtime'da yazılır (KANON §5.2)
//     ↳ guvenliCikis + topraklanmaNotu: çatal seçimi sonrası uyarı
//   → kapanis (öznel sabitler özeti + cikisRitueli)
//   → onKapat (oznel_sabitler upsert + parent'a haber)
//
// Geçiş kalıbı SADECE butonda: "Şimdi zihninde her neredeysen, ileri doğru bir adım at"
// (KANON §5.4). İstasyon açılışı `acilis` zaman cümlesiyle.

'use client';

import { useState, useEffect, useMemo } from 'react';
import { supabase } from '../app/lib/supabase';

const TON = 'var(--accent)';
const ONAY = 'var(--onay)';
const UYARI = 'var(--uyari)';

// <DAL> placeholder template — KANON §5.2
// kayip dalına göre Sahne 4 (Dönüş) ilk sorusu runtime'da yazılır.
function dalSorusu(secimler) {
  const kayip = secimler.kayip;
  const kayip2 = secimler.kayip2;
  let parantez;
  if (kayip === 'hamilelikte') parantez = 'daha doğmadan giden çocuk';
  else if (kayip === 'dogumdan') parantez = 'doğup giden çocuk';
  else if (kayip === 'yasiyor' && kayip2 === 'hastalik') parantez = 'hastalanıp giden çocuk';
  else if (kayip === 'yasiyor' && kayip2 === 'aniden') parantez = 'aniden giden çocuk';
  else parantez = 'giden çocuk';
  return `O kayıp — ${parantez} — Trigorin'le aranızda neyi değiştirdi? Ne öğrendin?`;
}

// İstasyon zincirini hesaplar — donguTetik mantığını uygular (KANON §4).
function aktifIstasyonlar(istasyonlar, secimler) {
  const zincir = [];
  for (const ist of istasyonlar) {
    if (ist.donguIstasyonu) {
      // Döngü istasyonu yalnız donguTetik eşleşirse aktif olur.
      // Burada üst istasyondaki çatal seçimi (anahtar:'kayip', deger:'yasiyor') tetikler.
      if (secimler.kayip === 'yasiyor') {
        zincir.push(ist);
      }
      continue;
    }
    zincir.push(ist);
  }
  return zincir;
}

export default function BoslukYuruyusu({
  karakterId,
  bosluk,          // boslukSet[i] — id, ad, yogunluk:3, birlesimSahneNo, yuruyus{...}
  ilkYuruyusMu = true,
  onKapat,
}) {
  const y = bosluk?.yuruyus;
  if (!y) return null;

  // ─── State ──────────────────────────────────────────────────────────────
  const [mode, setMode] = useState(ilkYuruyusMu ? 'esik' : 'istasyon');
  const [esikAdimi, setEsikAdimi] = useState(0);
  const [esikAcik, setEsikAcik] = useState(false);          // sonraki yürüyüşlerde katlanan şerit
  const [istasyonIndex, setIstasyonIndex] = useState(0);
  const [secimler, setSecimler] = useState({});             // { kayip:'hamilelikte', varis:'karsiladi', ... }
  const [muhurler, setMuhurler] = useState({});             // { kayip: 'Bunu unutma —...' }
  const [ozetler, setOzetler] = useState({});               // { kayip: 'Nina çocuğunu...' }
  const [yansimalar, setYansimalar] = useState({});         // { 1: 'Bu altı ayda ben...' }
  const [topraklanmaGosterildi, setTopraklanmaGosterildi] = useState({}); // çatal sonrası nota
  const [kayitDurumu, setKayitDurumu] = useState(null);

  // Aktif istasyonlar (donguIstasyonu mantığıyla)
  const aktif = useMemo(() => aktifIstasyonlar(y.istasyonlar, secimler), [y.istasyonlar, secimler]);
  const istasyon = aktif[istasyonIndex];
  const sonIstasyonMu = istasyon && istasyonIndex >= aktif.length - 1;

  // ─── Akış hesabı (ilerleme çubuğu) ──────────────────────────────────────
  const toplam = aktif.length;
  const ilerleme = mode === 'esik' ? 0
                 : mode === 'kapanis' ? 100
                 : Math.round(((istasyonIndex + 1) / (toplam + 1)) * 100);

  // ─── Eşik akışı ─────────────────────────────────────────────────────────
  function esikIleri() {
    if (esikAdimi < y.esik.adimlar.length) {
      setEsikAdimi(esikAdimi + 1);
    } else {
      // Hitap göründü → buton → istasyona geç
      setMode('istasyon');
    }
  }

  // ─── İstasyon akışı ─────────────────────────────────────────────────────
  function catalSec(catal, seceneklerIdx) {
    const sec = catal.secenekler[seceneklerIdx];
    setSecimler((s) => ({ ...s, [catal.anahtar]: sec.deger }));
    setMuhurler((m) => ({ ...m, [catal.anahtar]: sec.muhur }));
    setOzetler((o) => ({ ...o, [catal.anahtar]: sec.ozet }));
    if (catal.guvenliCikis) {
      setTopraklanmaGosterildi((t) => ({ ...t, [catal.anahtar]: false }));
    }
  }

  function yansimaDegistir(no, metin) {
    setYansimalar((y) => ({ ...y, [no]: metin }));
  }

  function ileri() {
    if (sonIstasyonMu) {
      setMode('kapanis');
    } else {
      setIstasyonIndex(istasyonIndex + 1);
    }
  }

  // ─── Kapanış + Supabase upsert ──────────────────────────────────────────
  async function kapat() {
    setKayitDurumu('kaydediliyor');
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        // Anonim kullanıcı — Supabase'e yazma. Sadece kapan.
        setKayitDurumu(null);
        onKapat?.({ secimler, ozetler });
        return;
      }
      // Her çatal için upsert
      const rows = Object.keys(secimler).map((anahtar) => ({
        kullanici_id: user.id,
        karakter_id: karakterId,
        bosluk_no: bosluk.id,
        catal_anahtar: anahtar,
        secilen_dal: secimler[anahtar],
        muhur_metni: muhurler[anahtar] || '',
        ozet_metni: ozetler[anahtar] || '',
        birlesim_sahne_no: bosluk.birlesimSahneNo || null,
        son_guncelleme: new Date().toISOString(),
      }));
      if (rows.length > 0) {
        const { error } = await supabase
          .from('oznel_sabitler')
          .upsert(rows, { onConflict: 'kullanici_id,karakter_id,bosluk_no,catal_anahtar' });
        if (error) {
          console.error('oznel_sabitler upsert hatası:', error);
          setKayitDurumu('hata');
          // Hataya rağmen kapan — pilot
          setTimeout(() => { onKapat?.({ secimler, ozetler }); }, 1500);
          return;
        }
      }
      setKayitDurumu('kaydedildi');
      setTimeout(() => { onKapat?.({ secimler, ozetler }); }, 800);
    } catch (e) {
      console.error('Kapat exception:', e);
      setKayitDurumu('hata');
      setTimeout(() => { onKapat?.({ secimler, ozetler }); }, 1500);
    }
  }

  // ─── Render ─────────────────────────────────────────────────────────────
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.92)',
      zIndex: 100,
      overflowY: 'auto',
      padding: '2rem 1rem',
    }}>
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        backgroundColor: 'var(--bg-base)',
        border: '1px solid var(--rule)',
        padding: '2.4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.8rem',
      }}>

        {/* İlerleme şeridi */}
        {mode !== 'esik' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: TON,
              textTransform: 'uppercase',
              minWidth: '70px',
            }}>
              {mode === 'kapanis' ? 'Kapanış' : istasyon?.zamanRozet}
            </span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--rule)', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: 0, top: '-1px',
                height: '3px',
                width: `${ilerleme}%`,
                backgroundColor: TON,
                transition: 'width 0.4s ease',
              }} />
            </div>
          </div>
        )}

        {/* ═══ EŞİK ═══ */}
        {mode === 'esik' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem', textAlign: 'center' }}>
            <span style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              color: TON,
              textTransform: 'uppercase',
            }}>{y.girisBaslik}</span>

            {y.esik.yogunlukUyarisi && (
              <div style={{
                padding: '0.7rem 1rem',
                border: '1px solid var(--uyari)',
                backgroundColor: 'var(--uyari-bg)',
                textAlign: 'left',
              }}>
                <span style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 300,
                  fontSize: '0.55rem',
                  letterSpacing: '0.3em',
                  color: UYARI,
                  textTransform: 'uppercase',
                }}>Yoğun sahne · acele yok</span>
                <p style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 300,
                  fontSize: '0.82rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.8,
                  margin: '0.3rem 0 0 0',
                  fontStyle: 'italic',
                }}>{y.esik.yogunlukUyarisi}</p>
              </div>
            )}

            <p style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'var(--ink)',
              lineHeight: 1.8,
              margin: 0,
            }}>{y.esik.komut}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {y.esik.adimlar.slice(0, esikAdimi + 1).map((adim, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-display), serif',
                  fontStyle: 'italic',
                  fontSize: '0.98rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.85,
                  margin: 0,
                  opacity: i === esikAdimi ? 1 : 0.6,
                  transition: 'opacity 0.4s ease',
                }}>{adim}</p>
              ))}
            </div>

            {esikAdimi >= y.esik.adimlar.length - 1 && (
              <p style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 300,
                fontSize: '0.85rem',
                color: TON,
                margin: 0,
                marginTop: '0.6rem',
              }}>{y.esik.hitap}</p>
            )}

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.6rem' }}>
              <button
                onClick={esikIleri}
                style={butonStili(esikAdimi < y.esik.adimlar.length - 1)}
              >
                {esikAdimi < y.esik.adimlar.length - 1 ? 'Devam' : y.esik.buton}
              </button>
            </div>
          </div>
        )}

        {/* ═══ İSTASYON ═══ */}
        {mode === 'istasyon' && istasyon && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {istasyonIndex === 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <h2 style={{
                  fontFamily: 'var(--font-display), serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '1.6rem',
                  color: 'var(--ink)',
                  margin: 0,
                }}>{y.girisBaslik}</h2>
                <p style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 300,
                  fontSize: '0.85rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.8,
                  margin: 0,
                }}>{y.girisAciklama}</p>
                <p style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 300,
                  fontSize: '0.82rem',
                  color: 'var(--ink-muted)',
                  lineHeight: 1.8,
                  margin: '0.3rem 0 0 0',
                  fontStyle: 'italic',
                }}>{y.girisSentez}</p>
              </div>
            )}

            <p style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: TON,
              lineHeight: 1.7,
              margin: 0,
            }}>{istasyon.acilis}</p>

            {/* Metin doğrusu uyarısı (varsa) */}
            {istasyon.metinDogrusu && (
              <div style={{
                padding: '0.8rem 1rem',
                border: `1px solid color-mix(in srgb, ${UYARI} 30%, transparent)`,
                backgroundColor: 'var(--uyari-bg)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 300,
                  fontSize: '0.55rem',
                  letterSpacing: '0.3em',
                  color: UYARI,
                  textTransform: 'uppercase',
                }}>Metin doğrusu</span>
                <p style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 300,
                  fontSize: '0.8rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  margin: '0.3rem 0 0 0',
                  fontStyle: 'italic',
                }}>{istasyon.metinDogrusu}</p>
              </div>
            )}

            {/* Sorular */}
            <ul style={{ paddingLeft: '1.3rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {istasyon.sorular.map((s, i) => {
                // <DAL> placeholder render — sahne 4 (no:4) ilk soru için
                const metin = (s === '<DAL>') ? dalSorusu(secimler) : s;
                return (
                  <li key={i} style={{
                    fontFamily: 'var(--font-display), serif',
                    fontStyle: 'italic',
                    fontSize: '0.95rem',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.75,
                  }}>{metin}</li>
                );
              })}
            </ul>

            {/* Opsiyonel yazma alanı */}
            {istasyon.yazmaAlani && (
              <textarea
                value={yansimalar[istasyon.no] || ''}
                onChange={(e) => yansimaDegistir(istasyon.no, e.target.value)}
                placeholder={istasyon.yazmaPlaceholder || 'Yazmak istediğin kadar yaz…'}
                rows={4}
                style={textareaStili}
                onFocus={(e) => { e.currentTarget.style.borderColor = TON; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; }}
              />
            )}

            {/* Çatal */}
            {istasyon.catal && (
              <CatalBloku
                catal={istasyon.catal}
                secim={secimler[istasyon.catal.anahtar]}
                muhur={muhurler[istasyon.catal.anahtar]}
                onSec={(idx) => catalSec(istasyon.catal, idx)}
                topraklanmaGosterildi={topraklanmaGosterildi[istasyon.catal.anahtar]}
                onTopraklanmaGoster={() => setTopraklanmaGosterildi((t) => ({ ...t, [istasyon.catal.anahtar]: true }))}
              />
            )}

            {/* İleri / kapanış butonu — KANON §5.4: SADECE buton üzerinde geçiş kalıbı */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.6rem' }}>
              <button onClick={() => onKapat?.(null)} style={iptalButonStili}>
                Şimdi değil — kapat
              </button>
              <button
                onClick={ileri}
                disabled={istasyon.catal && !secimler[istasyon.catal.anahtar]}
                style={butonStili(istasyon.catal && !secimler[istasyon.catal.anahtar])}
              >
                {sonIstasyonMu ? 'Yürüyüşü tamamla' : y.gecisButonu}
              </button>
            </div>
          </div>
        )}

        {/* ═══ KAPANIŞ ═══ */}
        {mode === 'kapanis' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
            <div>
              <span style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.4em',
                color: TON,
                textTransform: 'uppercase',
              }}>{y.kapanisBaslik}</span>
              <p style={{
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--ink)',
                lineHeight: 1.8,
                margin: '0.5rem 0 0 0',
              }}>{y.kapanisAciklama}</p>
            </div>

            {/* Öznel sabitlerin özeti */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {/* kayip vs kayip2 önceliği: kayip='yasiyor' ise kayip2'den oku */}
              {Object.entries(ozetler)
                .filter(([anahtar, ozet]) => {
                  if (anahtar === 'kayip' && secimler.kayip === 'yasiyor' && ozetler.kayip2) {
                    return false; // kayip2 var, kayip atla
                  }
                  return Boolean(ozet);
                })
                .map(([anahtar, ozet]) => (
                  <div key={anahtar} style={{
                    border: `1px solid color-mix(in srgb, ${TON} 30%, transparent)`,
                    backgroundColor: 'var(--accent-bg)',
                    padding: '0.8rem 1.1rem',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-display), serif',
                      fontStyle: 'italic',
                      fontSize: '0.95rem',
                      color: 'var(--ink)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}>{ozet}</p>
                  </div>
                ))}
            </div>

            {/* Çıkış ritüeli */}
            <div style={{
              padding: '1rem 1.2rem',
              border: '1px solid var(--onay-rule)',
              backgroundColor: 'var(--onay-bg)',
            }}>
              <span style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                color: ONAY,
                textTransform: 'uppercase',
              }}>Çıkış ritüeli</span>
              <p style={{
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.85,
                margin: '0.5rem 0 0 0',
              }}>{y.cikisRitueli}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.8rem', marginTop: '0.6rem' }}>
              <button
                onClick={kapat}
                disabled={kayitDurumu === 'kaydediliyor'}
                style={butonStili(kayitDurumu === 'kaydediliyor')}
              >
                {kayitDurumu === 'kaydediliyor' ? 'Kaydediliyor…' :
                 kayitDurumu === 'kaydedildi' ? '✓ Kaydedildi — kapanıyor' :
                 kayitDurumu === 'hata' ? '⚠ Kaydedilemedi (yine de kapan)' :
                 'Yürüyüşü kapat'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// ─── Çatal bileşeni ────────────────────────────────────────────────────────
function CatalBloku({ catal, secim, muhur, onSec, topraklanmaGosterildi, onTopraklanmaGoster }) {
  const aktifSec = catal.secenekler.findIndex((s) => s.deger === secim);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7rem',
      padding: '1rem 1.1rem',
      border: '1px solid var(--rule)',
      backgroundColor: 'var(--bg-elevated)',
    }}>
      <span style={{
        fontFamily: 'var(--font-body), sans-serif',
        fontWeight: 300,
        fontSize: '0.6rem',
        letterSpacing: '0.3em',
        color: TON,
        textTransform: 'uppercase',
      }}>{catal.etiket}</span>

      {catal.secenekler.map((s, i) => {
        const aktif = aktifSec === i;
        return (
          <button
            key={i}
            onClick={() => onSec(i)}
            style={{
              textAlign: 'left',
              cursor: 'pointer',
              border: `1px solid ${aktif ? TON : 'var(--rule)'}`,
              backgroundColor: aktif ? 'var(--accent-bg-deep)' : 'transparent',
              padding: '0.9rem 1.1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.3rem',
              color: 'var(--ink)',
              fontFamily: 'inherit',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => { if (!aktif) e.currentTarget.style.borderColor = TON; }}
            onMouseLeave={(e) => { if (!aktif) e.currentTarget.style.borderColor = 'var(--rule)'; }}
          >
            <span style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '0.98rem',
              color: aktif ? TON : 'var(--ink)',
              lineHeight: 1.4,
            }}>{s.baslik}</span>
            <span style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 300,
              fontSize: '0.78rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
            }}>{s.aciklama}</span>
          </button>
        );
      })}

      {/* Mühür (boş değilse göster) */}
      {secim && muhur && (
        <div style={{
          padding: '0.7rem 1rem',
          border: `1px solid color-mix(in srgb, ${TON} 30%, transparent)`,
          backgroundColor: 'var(--accent-bg)',
          marginTop: '0.3rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: TON,
            lineHeight: 1.75,
            margin: 0,
          }}>{muhur}</p>
        </div>
      )}

      {/* Topraklanma notu (guvenliCikis varsa, çatal seçildiyse) */}
      {catal.guvenliCikis && secim && catal.topraklanmaNotu && (
        <div style={{
          padding: '0.7rem 1rem',
          border: '1px solid var(--onay-rule)',
          backgroundColor: 'var(--onay-bg)',
          marginTop: '0.3rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 300,
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            color: ONAY,
            textTransform: 'uppercase',
          }}>Güvenli çıkış · topraklanma</span>
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 300,
            fontSize: '0.82rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.8,
            margin: '0.3rem 0 0 0',
            fontStyle: 'italic',
          }}>{catal.topraklanmaNotu}</p>
        </div>
      )}
    </div>
  );
}

// ─── Stiller ───────────────────────────────────────────────────────────────
function butonStili(disabled) {
  return {
    padding: '0.85rem 1.6rem',
    backgroundColor: disabled ? 'var(--rule)' : TON,
    border: 'none',
    color: 'var(--bg-base)',
    fontFamily: 'var(--font-body), sans-serif',
    fontWeight: 300,
    fontSize: '0.72rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'opacity 0.25s ease',
    opacity: disabled ? 0.5 : 1,
  };
}

const iptalButonStili = {
  padding: '0.75rem 1.2rem',
  backgroundColor: 'transparent',
  border: '1px solid var(--rule)',
  color: 'var(--ink-muted)',
  fontFamily: 'var(--font-body), sans-serif',
  fontWeight: 200,
  fontSize: '0.65rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  cursor: 'pointer',
};

const textareaStili = {
  width: '100%',
  padding: '0.9rem 1.1rem',
  backgroundColor: 'var(--bg-elevated)',
  border: '1px solid var(--rule)',
  color: 'var(--ink)',
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '0.95rem',
  lineHeight: 1.8,
  resize: 'vertical',
  outline: 'none',
  boxSizing: 'border-box',
  caretColor: TON,
  transition: 'border-color 0.25s ease',
};
