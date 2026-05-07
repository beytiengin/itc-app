// app/antrenman/karakter/hamlet/senin-cerceven/sentez/page.js
// ITC Actor's Gym — Modül II Hamlet · Senin Çerçeven · Sentez
//
// "Beş Boşluk, Bir Karakter" — beş boşluk bir araya gelip sahnelerin altında akan
// görünmez çizgiyi oluşturur.

'use client';

import { useState, useEffect } from 'react';
import hamlet from '../../../../../../data/karakterler/hamlet';
import {
  altSoruYansimalariniGetir,
  boslukGenelMetinleriGetir,
} from '../../../../../lib/hamlet-veri';
import HamletAltSayfaHeader from '../../../../../../components/HamletAltSayfaHeader';
import HamletBolumGecisi from '../../../../../../components/HamletBolumGecisi';

const TON = 'var(--onay)';
const ALTIN = 'var(--accent)';

export default function SeninCerceveSentez() {
  const [yansimalar, setYansimalar] = useState({});
  const [genelMetinler, setGenelMetinler] = useState({});
  const [yukleniyor, setYukleniyor] = useState(true);

  const bosluklar = hamlet.boslukSet || [];

  useEffect(() => {
    async function yukle() {
      const [altSorular, genel] = await Promise.all([
        altSoruYansimalariniGetir(hamlet.id),
        boslukGenelMetinleriGetir(hamlet.id),
      ]);
      setYansimalar(altSorular);
      setGenelMetinler(genel);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  if (yukleniyor) {
    return (
      <main style={ekranStili}>
        <span style={yukleniyorMetin}>Hazırlanıyor…</span>
      </main>
    );
  }

  function boslukOzeti(boslukNo) {
    const set = yansimalar[boslukNo] || {};
    const yazilanlar = Object.values(set).filter((y) => (y.metin?.length || 0) > 0);
    const genelVar = (genelMetinler[boslukNo]?.length || 0) > 0;

    if (yazilanlar.length === 0 && !genelVar) return { yapilmis: false };

    // Önce genel metnin ilk satırını dene; yoksa ilk alt-sorunun metnini
    const ilkSatir = genelVar
      ? genelMetinler[boslukNo].split('\n')[0]
      : (yazilanlar[0]?.metin || '').split('\n')[0];

    return {
      yapilmis: true,
      altSoruSayisi: yazilanlar.length,
      ilkSatir: ilkSatir.length > 120 ? `${ilkSatir.slice(0, 120)}…` : ilkSatir,
      genelVar,
    };
  }

  const tamamlananBosluk = bosluklar.filter((b) => boslukOzeti(b.no).yapilmis).length;
  const hepsiBaslamis = tamamlananBosluk >= bosluklar.length;

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
            href="/antrenman/karakter/hamlet/senin-cerceven"
            style={geriLink}
            onMouseEnter={(e) => { e.currentTarget.style.color = ALTIN; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
          >
            ← Senin Çerçeven
          </a>

          {hepsiBaslamis ? (
            <span style={{ ...etiket, color: TON }}>✓ Beş Boşluk Yazıldı</span>
          ) : (
            <span style={{ ...etiket, color: 'var(--ink-muted)' }}>
              Sentez · {tamamlananBosluk} / {bosluklar.length} boşluk yazıldı
            </span>
          )}

          <h1 style={baslik}>Beş Boşluk, Bir Karakter</h1>

          <p style={paragraf}>
            {hepsiBaslamis
              ? "Beş boşluğu yazdın. Şimdi bunlar bir araya gelip, sahnelerin altında akan görünmez bir çizgi oluşturuyor: senin Hamlet'inin iç hayatı."
              : 'Şu ana kadar yazdığın boşluklara bak. Eksik kalanlara geri dönebilirsin.'}
          </p>
        </header>

        {/* 5 Boşluk Özeti */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {bosluklar.map((b) => {
            const ozet = boslukOzeti(b.no);
            return (
              <div
                key={b.no}
                style={{
                  border: `1px solid ${ozet.yapilmis ? TON + '55' : 'var(--rule)'}`,
                  backgroundColor: 'var(--bg-elevated)',
                  padding: '1.4rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
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
                    {b.no}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontStyle: 'italic',
                      fontSize: '1.15rem',
                      color: 'var(--ink)',
                    }}
                  >
                    {b.baslik}
                  </span>
                  <a
                    href={`/antrenman/karakter/hamlet/senin-cerceven/${b.no}`}
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
                    {ozet.yapilmis ? 'Düzenle →' : 'Yaz →'}
                  </a>
                </div>

                {/* Sahne bağlantısı */}
                {b.sonraSahneNo && (
                  <p
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontStyle: 'italic',
                      fontSize: '0.85rem',
                      color: 'var(--ink-muted)',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    Sahne {b.sonraSahneNo} ({b.sonraBaslik}) zemini bu boşlukta yazıldı.
                  </p>
                )}

                {/* Özet metni */}
                {ozet.yapilmis ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <p
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontStyle: 'italic',
                        fontSize: '1rem',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.7,
                        margin: 0,
                        paddingLeft: '1rem',
                        borderLeft: `2px solid color-mix(in srgb, ${TON} 33%, transparent)`,
                      }}
                    >
                      {ozet.ilkSatir}
                    </p>
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
                      {ozet.altSoruSayisi} alt-soru yazıldı
                      {ozet.genelVar ? ' · genel metin var' : ''}
                    </span>
                  </div>
                ) : (
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
                    Henüz yazılmadı —{' '}
                    <a
                      href={`/antrenman/karakter/hamlet/senin-cerceven/${b.no}`}
                      style={{ color: TON, textDecoration: 'none' }}
                    >
                      yazmaya başla →
                    </a>
                  </p>
                )}
              </div>
            );
          })}
        </section>

        {/* Sahneye Taşıma kutusu */}
        <section
          style={{
            border: `1px solid color-mix(in srgb, ${ALTIN} 20%, transparent)`,
            backgroundColor: 'var(--accent-bg-deep)',
            padding: '1.8rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <span style={{ ...etiket, color: ALTIN }}>Yazdıklarını sahneye taşımak</span>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Yazdıkların kâğıt için değil, beden için. Şimdi şunu dene: yazdığın beş
            boşluğu okurken, gözlerini kapat ve onları kısa imgeler olarak kaydet. Bir
            his, bir koku, bir el hareketi, bir bakış.
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.95rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Sahnede bu imgeleri bilinçli olarak çağırmak gerekmez. Sadece bedeninde
            kayıtlı olsunlar yeterli. Sahne karakteri sürüklediğinde, onlar arka planda
            taşınırlar.
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: ALTIN,
              lineHeight: 1.6,
              margin: '0.5rem 0 0 0',
              paddingTop: '0.7rem',
              borderTop: `1px solid color-mix(in srgb, ${ALTIN} 20%, transparent)`,
            }}
          >
            "Yazdıkların sahnenin altındaki nehirdir."
          </p>
        </section>

        {/* Modül II Tamamlandı — reflektif kapanış */}
        {hepsiBaslamis && (
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '3rem 2rem',
              borderTop: `1px solid color-mix(in srgb, ${TON} 33%, transparent)`,
              textAlign: 'center',
              maxWidth: '560px',
              margin: '2rem auto 0',
            }}
          >
            <span
              style={{
                ...etiket,
                color: TON,
                fontSize: '0.7rem',
                letterSpacing: '0.45em',
              }}
            >
              ✓ Modül II Tamamlandı
            </span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.6,
              }}
            >
              <span>Doğruları gördün.</span>
              <span>Oyun öncesini tanıdın.</span>
              <span>Zaman Çizgisi'ni dolaştın.</span>
              <span>Yazarın çerçevesini sahiplendin.</span>
              <span style={{ color: TON }}><em>Boşlukları yazdın.</em></span>
            </div>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: '0.6rem 0 0 0',
              }}
            >
              Karakter koordinatları kuruldu.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.5rem',
                letterSpacing: '0.6em',
                color: 'var(--ink-muted)',
                margin: '0.6rem 0',
              }}
            >
              ∙ ∙ ∙
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '0.98rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Bu kısım bir kez yazılıp bitmez. Yıllarca, farklı Hamlet'lerinde
              geri dönüp yeniden yazabilirsin. Her yeni sahnelemede yeni boşluklar,
              yeni cevaplar.
            </p>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.85rem',
                color: 'var(--ink-muted)',
                fontStyle: 'italic',
                margin: '0.6rem 0 0 0',
              }}
            >
              Hazır mısın?
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Modül III · Yolculuk Modu seni bekliyor. Hamlet'in tüm yaşamını
              bedeninle bir kez baştan sona dolaşacaksın.
            </p>
          </section>
        )}

        <HamletBolumGecisi
          oncekiEtiket="Bölüm 5"
          oncekiBaslik="Senin Çerçeven"
          oncekiYol="/antrenman/karakter/hamlet/senin-cerceven"
          sonrakiBaslik="Modül III · Yolculuk Modu"
          sonrakiYakinda
        />
      </article>
    </main>
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

const baslik = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontWeight: 300,
  fontSize: 'clamp(2.2rem, 6vw, 3.4rem)',
  color: 'var(--ink)',
  margin: 0,
  lineHeight: 1.1,
};

const paragraf = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.05rem',
  color: 'var(--ink-soft)',
  lineHeight: 1.8,
  margin: 0,
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
