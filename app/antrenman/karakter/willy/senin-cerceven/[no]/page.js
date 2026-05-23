// app/antrenman/karakter/willy/senin-cerceven/[no]/page.js
// ITC Actor's Gym — Modül II Willy · Senin Çerçeven · Tek Boşluk Detayı
//
// Önce → Boşluk → Sonra (sahne linki) + 3 alt-soru + opsiyonel genel metin.
// Yan panelde Yazarın Çerçevesi seçimleri hatırlatılır.

'use client';

import { useState, useEffect, useRef, use } from 'react';
import { useRouter } from 'next/navigation';
import willy from '../../../../../../data/karakterler/willy';
import {
  altSoruYansimalariniGetir,
  boslukGenelMetinleriGetir,
  boslukGenelMetinKaydet,
  tercihleriGetir,
} from '../../../../../lib/hamlet-veri';
import WillyAltSayfaHeader from '../../../../../../components/WillyAltSayfaHeader';
import WillyAltSoruYazma from '../../../../../../components/WillyAltSoruYazma';

const TON = 'var(--onay)';
const ALTIN = 'var(--accent)';

export default function BoslukDetaySayfasi({ params }) {
  const { no } = use(params);
  const boslukNo = parseInt(no, 10);
  const router = useRouter();

  const [yansimalar, setYansimalar] = useState({});
  const [genelMetin, setGenelMetin] = useState('');
  const [tercihler, setTercihler] = useState({});
  const [yukleniyor, setYukleniyor] = useState(true);
  const [genelKayitDurumu, setGenelKayitDurumu] = useState(null);
  const debounceRef = useRef(null);

  const bosluklar = willy.boslukSet || [];
  const bosluk = bosluklar.find((b) => b.no === boslukNo);

  useEffect(() => {
    async function yukle() {
      const [altSorular, genelMetinler, tercihVerisi] = await Promise.all([
        altSoruYansimalariniGetir(willy.id),
        boslukGenelMetinleriGetir(willy.id),
        tercihleriGetir(willy.id),
      ]);
      setYansimalar(altSorular);
      setGenelMetin(genelMetinler[boslukNo] || '');
      setTercihler(tercihVerisi);
      setYukleniyor(false);
    }
    yukle();
  }, [boslukNo]);

  useEffect(() => {
    if (!yukleniyor && !bosluk) {
      router.replace('/antrenman/karakter/willy/senin-cerceven');
    }
  }, [yukleniyor, bosluk, router]);

  useEffect(() => () => { if (debounceRef.current) clearTimeout(debounceRef.current); }, []);

  function genelMetinDegistir(yeni) {
    setGenelMetin(yeni);
    setGenelKayitDurumu('yaziliyor');
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setGenelKayitDurumu('kaydediliyor');
      const ok = await boslukGenelMetinKaydet(willy.id, boslukNo, yeni);
      setGenelKayitDurumu(ok ? 'kaydedildi' : 'hata');
      if (ok) setTimeout(() => setGenelKayitDurumu(null), 2500);
    }, 800);
  }

  if (yukleniyor || !bosluk) {
    return (
      <main style={ekranStili}>
        <span style={yukleniyorMetin}>Hazırlanıyor…</span>
      </main>
    );
  }

  const oncekiNo = boslukNo > 1 ? boslukNo - 1 : null;
  const sonrakiNo = boslukNo < bosluklar.length ? boslukNo + 1 : null;
  const yansimaSet = yansimalar[boslukNo] || {};

  // Yazarın Çerçevesi seçimlerinin yan panel için özet
  const tercihOzetleri = (willy.tercihler || []).map((t) => {
    const s = tercihler[t.no];
    if (!s || (s.secimler.length === 0 && (s.ozelYorum?.length || 0) === 0)) return null;
    return {
      no: t.no,
      konu: t.konu,
      harfler: s.secimler,
      ozelVar: (s.ozelYorum?.length || 0) > 0,
    };
  }).filter(Boolean);

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
      <WillyAltSayfaHeader />

      <article
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
          padding: '3rem 2rem 5rem',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.4rem',
        }}
      >
        {/* Üst başlık */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a
            href="/antrenman/karakter/willy/senin-cerceven"
            style={geriLink}
            onMouseEnter={(e) => { e.currentTarget.style.color = ALTIN; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
          >
            ← Senin Çerçeven
          </a>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem', flexWrap: 'wrap' }}>
            <span style={{ ...etiket, color: TON }}>
              Boşluk {bosluk.no}
            </span>
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.55rem',
                letterSpacing: '0.25em',
                color: 'var(--ink-muted)',
                textTransform: 'uppercase',
              }}
            >
              {bosluk.no} / {bosluklar.length} · {bosluk.konum}
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
              color: 'var(--ink)',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {bosluk.baslik}
          </h1>
          {bosluk.sinif && (
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 300,
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                color: TON,
                textTransform: 'uppercase',
                padding: '0.25rem 0.7rem',
                border: `1px solid color-mix(in srgb, ${TON} 33%, transparent)`,
                alignSelf: 'flex-start',
              }}
            >
              {bosluk.sinif}
            </span>
          )}
        </header>

        {/* Önce → Boşluk → Sonra */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <CerceveBolumu etiket={`Önce — ${bosluk.onceBaslik}`} renk={ALTIN}>
            {bosluk.onceMetin}
          </CerceveBolumu>

          <Ok />

          <CerceveBolumu etiket="Boşluk" renk={TON} ozel>
            {bosluk.boslukMetin}
          </CerceveBolumu>

          <Ok />

          <CerceveBolumu etiket={`Sonra — ${bosluk.sonraBaslik}`} renk={ALTIN}>
            {bosluk.sonraMetin}
            {bosluk.sonraSahneNo && (
              <a
                href={`/antrenman/karakter/willy/timeline#sahne-${bosluk.sonraSahneNo}`}
                style={{
                  display: 'inline-block',
                  marginTop: '0.7rem',
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 200,
                  fontSize: '0.6rem',
                  letterSpacing: '0.3em',
                  color: ALTIN,
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '0.3rem 0.7rem',
                  border: `1px solid color-mix(in srgb, ${ALTIN} 33%, transparent)`,
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = ALTIN; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = ALTIN + '55'; }}
              >
                → Zaman Çizgisi · Sahne {bosluk.sonraSahneNo}
              </a>
            )}
          </CerceveBolumu>

          {bosluk.sentez && (
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: ALTIN,
                lineHeight: 1.7,
                margin: '0.6rem 0 0 0',
                paddingLeft: '1rem',
                borderLeft: `1px solid color-mix(in srgb, ${ALTIN} 33%, transparent)`,
              }}
            >
              {bosluk.sentez}
            </p>
          )}
        </section>

        {/* 3 ALT-SORU */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ ...etiket, color: TON }}>Senin Willy'nin İçin Bu Boşluk</span>
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
              Üç anı yaz. Her biri için bir alt-soru. Hepsini yazma zorunlu değil — biri açılır,
              diğeri yarın açılır.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {bosluk.altSorular.map((altSoru) => (
              <WillyAltSoruYazma
                key={altSoru.no}
                boslukNo={bosluk.no}
                altSoru={altSoru}
                baslangic={yansimaSet[altSoru.no]}
                karakterId={willy.id}
              />
            ))}
          </div>
        </section>

        {/* Bütün Boşluk (Opsiyonel) */}
        <section
          style={{
            border: '1px dashed var(--rule)',
            padding: '1.4rem 1.6rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.7rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ ...etiket, color: TON }}>Bu Boşluğun Bütünü</span>
            <KayitRozet durum={genelKayitDurumu} renk={TON} />
          </div>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: 'var(--ink-muted)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Opsiyonel. Üç alt-soru yerine boşluğu bir bütün olarak yazmak istersen burası.
            Ya da alt-soruları tamamladıktan sonra bunları birleştiren bir paragraf.
          </p>
          <textarea
            value={genelMetin}
            onChange={(e) => genelMetinDegistir(e.target.value)}
            placeholder="Boşluğun bütünü — sahne arasında akan görünmez metin."
            rows={6}
            style={{
              width: '100%',
              padding: '1rem 1.2rem',
              backgroundColor: 'var(--bg-base)',
              border: '1px solid var(--rule)',
              color: 'var(--ink)',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '0.95rem',
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

        {/* Yazarın Çerçevesi seçimleri hatırlatma */}
        {tercihOzetleri.length > 0 && (
          <section
            style={{
              border: `1px solid color-mix(in srgb, ${ALTIN} 20%, transparent)`,
              padding: '1.4rem 1.6rem',
              backgroundColor: 'var(--accent-bg-deep)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.9rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ ...etiket, color: ALTIN }}>Senin Willy'ninde</span>
              <a
                href="/antrenman/karakter/willy/yazarin-cercevesi"
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 200,
                  fontSize: '0.55rem',
                  letterSpacing: '0.25em',
                  color: 'var(--ink-muted)',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = ALTIN; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
              >
                Yazarın Çerçevesi →
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {tercihOzetleri.map((t) => (
                <div key={t.no} style={{ display: 'flex', gap: '0.7rem', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.7rem',
                      letterSpacing: '0.2em',
                      color: 'var(--ink-muted)',
                      textTransform: 'uppercase',
                      minWidth: '90px',
                    }}
                  >
                    {t.konu}
                  </span>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {t.harfler.map((h) => (
                      <span
                        key={h}
                        style={{
                          fontFamily: 'Jost, sans-serif',
                          fontWeight: 300,
                          fontSize: '0.65rem',
                          color: ALTIN,
                          padding: '0.1rem 0.45rem',
                          border: `1px solid color-mix(in srgb, ${ALTIN} 33%, transparent)`,
                          letterSpacing: '0.1em',
                        }}
                      >
                        {h}
                      </span>
                    ))}
                    {t.ozelVar && (
                      <span
                        style={{
                          fontFamily: 'Jost, sans-serif',
                          fontWeight: 200,
                          fontSize: '0.55rem',
                          color: ALTIN,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          paddingTop: '0.2rem',
                        }}
                      >
                        + Özel
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '0.85rem',
                color: 'var(--ink-muted)',
                lineHeight: 1.6,
                margin: '0.4rem 0 0 0',
              }}
            >
              Yazdığın boşluk bunlarla uyumlu mu?
            </p>
          </section>
        )}

        {/* Navigasyon */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--rule)',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {oncekiNo ? (
            <a
              href={`/antrenman/karakter/willy/senin-cerceven/${oncekiNo}`}
              style={navButonStili()}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}
            >
              ← Boşluk {oncekiNo}
            </a>
          ) : <span />}

          {sonrakiNo ? (
            <a
              href={`/antrenman/karakter/willy/senin-cerceven/${sonrakiNo}`}
              style={navButonStili()}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}
            >
              Boşluk {sonrakiNo} →
            </a>
          ) : (
            <a
              href="/antrenman/karakter/willy/senin-cerceven/sentez"
              style={{ ...navButonStili(), color: TON, borderColor: TON }}
            >
              Sentez →
            </a>
          )}
        </div>
      </article>
    </main>
  );
}

// ─── Yardımcılar ────────────────────────────────────────────────────────────

function CerceveBolumu({ etiket: et, renk, children, ozel }) {
  return (
    <div
      style={{
        border: ozel ? `1px solid color-mix(in srgb, ${renk} 33%, transparent)` : '1px solid var(--rule)',
        padding: '1.2rem 1.4rem',
        backgroundColor: ozel ? 'var(--accent-bg-deep)' : 'var(--bg-elevated)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.7rem',
      }}
    >
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.55rem',
          letterSpacing: '0.35em',
          color: renk,
          textTransform: 'uppercase',
        }}
      >
        {et}
      </span>
      <div
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '0.98rem',
          color: 'var(--ink-soft)',
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Ok() {
  return (
    <div style={{ textAlign: 'center', color: 'var(--ink-muted)', fontSize: '0.9rem', margin: '-0.2rem 0' }}>↓</div>
  );
}

function navButonStili() {
  return {
    background: 'none',
    border: '1px solid var(--rule)',
    cursor: 'pointer',
    padding: '0.7rem 1.3rem',
    fontFamily: 'Jost, sans-serif',
    fontWeight: 200,
    fontSize: '0.6rem',
    letterSpacing: '0.25em',
    color: 'var(--ink-soft)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 0.25s ease',
  };
}

function KayitRozet({ durum, renk }) {
  if (!durum || durum === 'yaziliyor') return <span style={{ minHeight: '1em' }} />;
  const r = durum === 'hata' ? 'var(--uyari)' : (renk || 'var(--accent)');
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
        color: r,
        fontStyle: 'italic',
      }}
    >
      {mesaj}
    </span>
  );
}

const geriLink = {
  fontFamily: 'Jost, sans-serif',
  fontWeight: 200,
  fontSize: '0.6rem',
  letterSpacing: '0.3em',
  color: 'var(--ink-muted)',
  textTransform: 'uppercase',
  textDecoration: 'none',
  alignSelf: 'flex-start',
  transition: 'color 0.25s ease',
};

const etiket = {
  fontFamily: 'Jost, sans-serif',
  fontWeight: 200,
  fontSize: '0.65rem',
  letterSpacing: '0.35em',
  textTransform: 'uppercase',
};

const yukleniyorMetin = {
  fontFamily: 'Jost, sans-serif',
  fontWeight: 200,
  fontSize: '0.7rem',
  letterSpacing: '0.3em',
  color: 'var(--ink-muted)',
  textTransform: 'uppercase',
};

const ekranStili = {
  minHeight: '100vh',
  backgroundColor: 'var(--bg-base)',
  color: 'var(--ink)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
