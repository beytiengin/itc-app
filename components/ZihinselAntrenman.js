// components/ZihinselAntrenman.js
// ITC Actor's Gym — ○ Zihinsel Antrenman (bedensel/somatik egzersizler)
//
// İki görünüm:
//   1. Liste — tüm antrenmanlar, ilerleme rozetleri, travma uyarıları
//   2. Sayfa — açılan antrenmanın adımlarını sırayla gezme + auto-save
//
// Adım tipleri: okuma / yazma / vak / cikis
// Tamamlanma: tamamlanan_egzersizler tablosuna yazılır.
// Travma 2-3 sonrası otomatik TopraklanmaModu açılır.

'use client';

import { useState, useEffect, useRef } from 'react';
import { sahneUyarisi, topraklanmaGerekli } from '../app/lib/travma';
import { useDil } from '../app/lib/dil';
import {
  antrenmanAdimiKaydet,
  antrenmanYansimalariniGetir,
  antrenmanSonAdiminiGetir,
  egzersiziTamamla,
  tamamlananEgzersizleriGetir,
} from '../app/lib/kulis';
import TopraklanmaModu from './TopraklanmaModu';
import IlerlemeRozet from './IlerlemeRozet';

const TON = 'var(--kanal-kahve)';
const TON_HOVER = 'var(--accent-rule)';

export default function ZihinselAntrenman({ antrenmanlar, karakterId, vakBaskini }) {
  const { dil } = useDil();
  // Liste/Sayfa görünüm
  const [mode, setMode] = useState('list'); // 'list' | 'resume' | 'sayfa'
  const [acikAntrenman, setAcikAntrenman] = useState(null); // antrenman objesi
  const [mevcutAdimNo, setMevcutAdimNo] = useState(1);

  // Yazma alanı state'leri
  const [yansimalar, setYansimalar] = useState({}); // { adimNo: metin }
  const [kayitDurumu, setKayitDurumu] = useState({}); // { adimNo: durum }
  const debounceTimers = useRef({});

  // Liste meta state'leri
  const [tamamlananIdler, setTamamlananIdler] = useState([]);
  const [sonAdimMap, setSonAdimMap] = useState({}); // { antrenmanId: number }

  // Modallar
  const [topraklanmaIcin, setTopraklanmaIcin] = useState(null); // antrenman obj
  const [travmaUyariFor, setTravmaUyariFor] = useState(null); // antrenman obj

  // Liste yükleme
  useEffect(() => {
    async function yukle() {
      if (!karakterId || !antrenmanlar?.length) return;
      const tamamlanan = await tamamlananEgzersizleriGetir(karakterId);
      setTamamlananIdler(tamamlanan);
      const sonMap = {};
      await Promise.all(
        antrenmanlar.map(async (a) => {
          const { sonAdim } = await antrenmanSonAdiminiGetir(karakterId, a.id);
          if (sonAdim > 0) sonMap[a.id] = sonAdim;
        })
      );
      setSonAdimMap(sonMap);
    }
    yukle();
  }, [karakterId, antrenmanlar]);

  // Debounce timer cleanup
  useEffect(() => {
    return () => {
      Object.values(debounceTimers.current).forEach((id) => clearTimeout(id));
    };
  }, []);

  // ─── Empty state ─────────────────────────────────────────────────────────

  if (!antrenmanlar || antrenmanlar.length === 0) {
    return <BasligaSection sayim="" alt="Bu karakter için zihinsel antrenmanlar yakında." />;
  }

  // ─── Yardımcılar ─────────────────────────────────────────────────────────

  function antrenmanUyarisi(antrenman) {
    return sahneUyarisi({
      travmaSeviyesi: antrenman.travmaSeviyesi || 0,
      travmaKategorileri: antrenman.travmaKategorileri || [],
    });
  }

  async function antrenmanaGir(antrenman, modeBaslangic = 'auto') {
    // Auto: eğer önceden yansıma varsa resume sor, yoksa sayfa
    const sonAdim = sonAdimMap[antrenman.id] || 0;
    if (modeBaslangic === 'auto' && sonAdim > 0) {
      setAcikAntrenman(antrenman);
      setMode('resume');
      return;
    }
    setAcikAntrenman(antrenman);
    // Yansımaları yükle
    const { yansimalar: db } = await antrenmanYansimalariniGetir(karakterId, antrenman.id);
    const map = {};
    Object.keys(db).forEach((k) => { map[k] = db[k].metin || ''; });
    setYansimalar(map);
    setKayitDurumu({});
    setMevcutAdimNo(modeBaslangic === 'devam' ? Math.min(sonAdim + 1, antrenman.adimlar.length) : 1);
    setMode('sayfa');
  }

  function listeyeDon() {
    setMode('list');
    setAcikAntrenman(null);
    setYansimalar({});
    setKayitDurumu({});
    setMevcutAdimNo(1);
    Object.values(debounceTimers.current).forEach((id) => clearTimeout(id));
    debounceTimers.current = {};
  }

  function antrenmanKart(antrenman) {
    const erisim = antrenmanUyarisi(antrenman);
    const tamamlandi = tamamlananIdler.includes(antrenman.id);
    const sonAdim = sonAdimMap[antrenman.id] || 0;
    const toplamAdim = (antrenman.adimlar || []).length;
    const yarimKaldi = !tamamlandi && sonAdim > 0;

    const onClick = () => {
      // Yoğunluk 2-3 sahnelerde hazırlık notu gösterilir — kilit DEĞİL, devam edilebilir.
      if (erisim.seviye >= 2) {
        setTravmaUyariFor(antrenman);
        return;
      }
      antrenmanaGir(antrenman, 'auto');
    };

    return (
      <div
        key={antrenman.id}
        style={{
          border: `1px solid ${tamamlandi ? TON_HOVER : 'var(--rule)'}`,
          backgroundColor: 'transparent',
          transition: 'all 0.3s ease',
          opacity: 1,
        }}
      >
        <button
          onClick={onClick}
          style={{
            display: 'flex',
            gap: '1rem',
            width: '100%',
            padding: '1.4rem 1.5rem',
            backgroundColor: 'transparent',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            color: 'var(--ink)',
            fontFamily: 'inherit',
            alignItems: 'flex-start',
          }}
          onMouseEnter={(e) => { e.currentTarget.parentElement.style.borderColor = TON; }}
          onMouseLeave={(e) => { e.currentTarget.parentElement.style.borderColor = tamamlandi ? TON_HOVER : 'var(--rule)'; }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '1.2rem',
              color: tamamlandi ? TON : 'var(--ink-muted)',
              minWidth: '24px',
              lineHeight: 1.4,
              paddingTop: '0.1rem',
            }}
          >
            ○
          </span>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.92rem', color: 'var(--ink)' }}>
                {antrenman.no}. {antrenman.baslik}
              </span>
              {tamamlandi && (
                <span
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 200,
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    color: TON,
                    textTransform: 'uppercase',
                    padding: '0.15rem 0.55rem',
                    border: `1px solid ${TON_HOVER}`,
                  }}
                >
                  ✓ Tamamlandı
                </span>
              )}
              {yarimKaldi && (
                <span
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 200,
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    color: 'var(--ink-muted)',
                    textTransform: 'uppercase',
                    padding: '0.15rem 0.55rem',
                    border: '1px solid var(--rule)',
                  }}
                >
                  Devam et — adım {sonAdim}/{toplamAdim}
                </span>
              )}
            </div>

            {antrenman.altbaslik && (
              <span
                style={{
                  fontFamily: 'var(--font-display), serif',
                  fontStyle: 'italic',
                  fontSize: '0.88rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.5,
                }}
              >
                {antrenman.altbaslik}
              </span>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
              {antrenman.sure && (
                <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.65rem', color: 'var(--ink-muted)' }}>
                  {antrenman.sure}
                </span>
              )}
              {antrenman.seviye && (
                <span
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 200,
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    color: 'var(--ink-muted)',
                    textTransform: 'uppercase',
                    padding: '0.15rem 0.55rem',
                    border: '1px solid var(--rule)',
                  }}
                >
                  {antrenman.seviye}
                </span>
              )}
              {antrenman.travmaSeviyesi >= 2 && (
                <span
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 200,
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    color: 'var(--uyari)',
                    textTransform: 'uppercase',
                  }}
                >
                  Travma {antrenman.travmaSeviyesi}
                </span>
              )}
            </div>
          </div>
        </button>
      </div>
    );
  }

  // ─── ADIM YAZMA İŞLEME ───────────────────────────────────────────────────

  function yansimaDegistir(adimNo, yeniMetin) {
    setYansimalar((onceki) => ({ ...onceki, [adimNo]: yeniMetin }));

    if (debounceTimers.current[adimNo]) clearTimeout(debounceTimers.current[adimNo]);

    setKayitDurumu((onceki) => ({ ...onceki, [adimNo]: 'yaziliyor' }));

    debounceTimers.current[adimNo] = setTimeout(async () => {
      if (!karakterId || !acikAntrenman) return;
      setKayitDurumu((onceki) => ({ ...onceki, [adimNo]: 'kaydediliyor' }));
      const sonuc = await antrenmanAdimiKaydet(karakterId, acikAntrenman.id, adimNo, yeniMetin);
      const basarili = !sonuc?.hata;
      setKayitDurumu((onceki) => ({ ...onceki, [adimNo]: basarili ? 'kaydedildi' : 'hata' }));
      if (basarili) {
        setSonAdimMap((m) => {
          const mevcut = m[acikAntrenman.id] || 0;
          if (adimNo > mevcut) return { ...m, [acikAntrenman.id]: adimNo };
          return m;
        });
        setTimeout(() => {
          setKayitDurumu((onceki) => ({ ...onceki, [adimNo]: null }));
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

  async function antrenmanTamamla() {
    if (!acikAntrenman) return;
    await egzersiziTamamla(karakterId, acikAntrenman.id);
    setTamamlananIdler((prev) => prev.includes(acikAntrenman.id) ? prev : [...prev, acikAntrenman.id]);
    if (topraklanmaGerekli(acikAntrenman.travmaSeviyesi)) {
      setTopraklanmaIcin(acikAntrenman);
      // listeyi açacağız topraklanma kapanınca
    } else {
      listeyeDon();
    }
  }

  // ─── EKRAN: LİSTE ────────────────────────────────────────────────────────

  if (mode === 'list') {
    const tamamSayisi = tamamlananIdler.filter((id) => antrenmanlar.some((a) => a.id === id)).length;

    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <BasligaSection
            sayim={`${antrenmanlar.length} Antrenman`}
            alt="Karaktere bedenden ve zihinden giriş."
            mevcut={tamamSayisi}
            toplam={antrenmanlar.length}
            renk={TON}
          />

          {!vakBaskini && (
            <a
              href="/kalibrasyon"
              style={{
                display: 'block',
                padding: '0.8rem 1.1rem',
                border: '1px dashed var(--rule)',
                color: 'var(--ink-soft)',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 200,
                fontSize: '0.78rem',
                lineHeight: 1.6,
                textDecoration: 'none',
                fontStyle: 'italic',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = TON; e.currentTarget.style.color = TON; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.color = 'var(--ink-soft)'; }}
            >
              Daha kişiselleştirilmiş egzersizler için kalibrasyon yap →
            </a>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {antrenmanlar.map((a) => antrenmanKart(a))}
          </div>
        </div>

        {travmaUyariFor && (
          <TravmaUyariModal
            dil={dil}
            antrenman={travmaUyariFor}
            onIptal={() => setTravmaUyariFor(null)}
            onDevam={() => {
              const a = travmaUyariFor;
              setTravmaUyariFor(null);
              antrenmanaGir(a, 'auto');
            }}
          />
        )}

        {topraklanmaIcin && (
          <TopraklanmaModu
            baslik={topraklanmaIcin.baslik}
            onKapat={() => setTopraklanmaIcin(null)}
          />
        )}
      </>
    );
  }

  // ─── EKRAN: RESUME PROMPT ────────────────────────────────────────────────

  if (mode === 'resume' && acikAntrenman) {
    const sonAdim = sonAdimMap[acikAntrenman.id] || 0;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <BasligaSection sayim="" alt="" />
        <div
          style={{
            border: `1px solid ${TON_HOVER}`,
            padding: '2rem 2.2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontWeight: 300, fontSize: '1.4rem', color: 'var(--ink)', margin: 0 }}>
            {acikAntrenman.baslik}
          </h3>
          <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.9rem', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>
            Daha önce {sonAdim}. adıma kadar geldin.
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => antrenmanaGir(acikAntrenman, 'devam')}
              style={{
                padding: '0.9rem 1.8rem',
                backgroundColor: TON,
                border: 'none',
                color: 'var(--bg-base)',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 300,
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              Devam et
            </button>
            <button
              onClick={() => antrenmanaGir(acikAntrenman, 'bastan')}
              style={{
                padding: '0.9rem 1.8rem',
                backgroundColor: 'transparent',
                border: `1px solid ${TON}`,
                color: TON,
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 300,
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = TON_HOVER; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              Baştan başla
            </button>
            <button
              onClick={listeyeDon}
              style={{
                padding: '0.9rem 1.8rem',
                backgroundColor: 'transparent',
                border: '1px solid var(--rule)',
                color: 'var(--ink-muted)',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 200,
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
            >
              ← Geri
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── EKRAN: SAYFA (ADIM GÖRÜNÜMÜ) ────────────────────────────────────────

  if (mode === 'sayfa' && acikAntrenman) {
    const adimlar = acikAntrenman.adimlar || [];
    const adim = adimlar.find((a) => a.no === mevcutAdimNo) || adimlar[mevcutAdimNo - 1];
    const sonAdimMi = mevcutAdimNo >= adimlar.length;
    const tip = adim?.tip || 'okuma';

    let metin = adim?.metin || '';
    let soru = adim?.soru || null;
    if (tip === 'vak') {
      const baskinKey = vakBaskini || 'kinestetik';
      const vakKey = String(baskinKey).toLowerCase();
      metin = adim?.vakSorulari?.[vakKey] || adim?.vakSorulari?.kinestetik || metin;
    }

    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <button
            onClick={listeyeDon}
            style={{
              alignSelf: 'flex-start',
              background: 'none',
              border: 'none',
              color: 'var(--ink-muted)',
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 200,
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              padding: '0.3rem 0',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = TON; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
          >
            ← Geri
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontWeight: 300, fontSize: '1.6rem', color: 'var(--ink)', margin: 0, lineHeight: 1.3 }}>
              {acikAntrenman.baslik}
            </h3>
            {acikAntrenman.altbaslik && (
              <span style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.95rem', color: TON }}>
                {acikAntrenman.altbaslik}
              </span>
            )}
          </div>

          {/* İlerleme */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              {adimlar.map((_, i) => {
                const num = i + 1;
                const tamamlanan = num < mevcutAdimNo;
                const su = num === mevcutAdimNo;
                return (
                  <span
                    key={i}
                    style={{
                      width: su ? '12px' : '8px',
                      height: su ? '12px' : '8px',
                      borderRadius: '50%',
                      backgroundColor: tamamlanan ? TON : (su ? TON : 'transparent'),
                      border: tamamlanan || su ? 'none' : `1px solid ${TON_HOVER}`,
                      transition: 'all 0.25s ease',
                    }}
                  />
                );
              })}
            </div>
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.65rem', color: 'var(--ink-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Adım {mevcutAdimNo}/{adimlar.length}
            </span>
          </div>

          <div
            style={{
              backgroundColor: 'var(--bg-elevated)',
              border: '1px solid var(--rule)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem',
            }}
          >
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>
              Adım {mevcutAdimNo}
            </span>

            <p
              style={{
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--ink)',
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              {metin}
            </p>

            {soru && (
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'baseline',
                  paddingLeft: '0.5rem',
                  borderLeft: `2px solid color-mix(in srgb, ${TON} 33%, transparent)`,
                  paddingTop: '0.2rem',
                  paddingBottom: '0.2rem',
                }}
              >
                <span style={{ color: TON, fontSize: '0.85rem' }}>→</span>
                <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.88rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                  {soru}
                </span>
              </div>
            )}

            {(tip === 'yazma' || tip === 'vak') && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>
                    Yansıman (opsiyonel)
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 200,
                    fontSize: '0.65rem',
                    color: kayitDurumu[mevcutAdimNo] === 'hata' ? 'var(--uyari)' : TON,
                    fontStyle: 'italic',
                    minHeight: '1em',
                  }}>
                    {kayitDurumuMesaji(kayitDurumu[mevcutAdimNo])}
                  </span>
                </div>
                <textarea
                  value={yansimalar[mevcutAdimNo] || ''}
                  onChange={(e) => yansimaDegistir(mevcutAdimNo, e.target.value)}
                  placeholder="Yazmak istediğin kadar yaz. Boş da bırakabilirsin. Yazdıkların otomatik kaydedilir."
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '1rem 1.2rem',
                    backgroundColor: 'var(--bg-base)',
                    border: '1px solid var(--rule)',
                    color: 'var(--ink)',
                    fontFamily: 'var(--font-display), serif',
                    fontStyle: 'italic',
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
            )}

            <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
              <button
                onClick={() => setMevcutAdimNo(Math.max(1, mevcutAdimNo - 1))}
                disabled={mevcutAdimNo === 1}
                style={{
                  padding: '0.7rem 1.4rem',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--rule)',
                  color: mevcutAdimNo === 1 ? 'var(--ink-muted)' : 'var(--ink-soft)',
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 200,
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: mevcutAdimNo === 1 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                ← Önceki
              </button>

              {tip === 'cikis' || sonAdimMi ? (
                <button
                  onClick={antrenmanTamamla}
                  style={{
                    padding: '0.9rem 2rem',
                    backgroundColor: 'var(--onay-soft)',
                    border: 'none',
                    color: 'var(--bg-base)',
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 300,
                    fontSize: '0.7rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--onay)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--onay-soft)'; }}
                >
                  Tamamlandı ✓
                </button>
              ) : (
                <button
                  onClick={() => setMevcutAdimNo(mevcutAdimNo + 1)}
                  style={{
                    padding: '0.9rem 2rem',
                    backgroundColor: TON,
                    border: 'none',
                    color: 'var(--bg-base)',
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 300,
                    fontSize: '0.7rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                >
                  Devam
                </button>
              )}
            </div>
          </div>
        </div>

        {topraklanmaIcin && (
          <TopraklanmaModu
            baslik={topraklanmaIcin.baslik}
            onKapat={() => {
              setTopraklanmaIcin(null);
              listeyeDon();
            }}
          />
        )}
      </>
    );
  }

  return null;
}

// ─── BAŞLIK BÖLÜMÜ ──────────────────────────────────────────────────────────

function BasligaSection({ sayim, alt, mevcut, toplam, renk }) {
  const rozetGoster = typeof toplam === 'number' && toplam > 0;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '1.5rem',
            color: TON,
            letterSpacing: '0.05em',
          }}
        >
          ○ Zihinsel Antrenman
        </span>
        {sayim && (
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
            {sayim}
          </span>
        )}
      </div>
      {alt && (
        <p
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.85rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.7,
            margin: 0,
            fontStyle: 'italic',
          }}
        >
          {alt}
        </p>
      )}
      {rozetGoster && (
        <IlerlemeRozet mevcut={mevcut} toplam={toplam} renk={renk || TON} />
      )}
    </div>
  );
}

// ─── TRAVMA UYARI MODAL ─────────────────────────────────────────────────────

function TravmaUyariModal({ antrenman, onIptal, onDevam, dil }) {
  const M = dil === 'de'
    ? { etiket: 'Vorbereitungshinweis', metin: 'Dieses Training kann dich an einen tiefen Ort führen. Finde einen stillen Raum, schalte dein Telefon stumm, halte Wasser bereit. Möchtest du dennoch fortfahren?', iptal: 'Jetzt nicht', devam: 'Ich bin bereit, weiter' }
    : dil === 'en'
    ? { etiket: 'Preparation Note', metin: 'This training may take you to a deep place. Find a quiet space, silence your phone, keep water nearby. Do you still want to continue?', iptal: 'Not now', devam: 'I am ready, continue' }
    : { etiket: 'Hazırlık Notu', metin: 'Bu antrenman derin bir yere götürebilir. Sessiz bir alan bul, telefonunu sustur, su yanında olsun. Yine de devam etmek ister misin?', iptal: 'Şimdi değil', devam: 'Hazırım, devam' };
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: '480px',
          width: '100%',
          backgroundColor: 'var(--bg-base)',
          border: '1px solid var(--accent)',
          padding: '2.5rem 2.2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.4em',
              color: 'var(--accent)',
              textTransform: 'uppercase',
            }}
          >
            {M.etiket}
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.4rem',
              color: 'var(--ink)',
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {antrenman.baslik}
          </h3>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 300,
            fontSize: '0.9rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.8,
            margin: 0,
            textAlign: 'center',
          }}
        >
          {M.metin}
        </p>

        <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={onIptal}
            style={{
              padding: '0.8rem 1.6rem',
              backgroundColor: 'transparent',
              border: '1px solid var(--rule)',
              color: 'var(--ink-soft)',
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 200,
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}
          >
            {M.iptal}
          </button>
          <button
            onClick={onDevam}
            style={{
              padding: '0.8rem 1.6rem',
              backgroundColor: 'var(--accent)',
              border: 'none',
              color: 'var(--bg-base)',
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 300,
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-hover)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; }}
          >
            {M.devam}
          </button>
        </div>
      </div>
    </div>
  );
}
