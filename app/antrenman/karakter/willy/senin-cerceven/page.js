// app/antrenman/karakter/willy/senin-cerceven/page.js
// ITC Actor's Gym — Modül II Willy · Senin Çerçeven (4 Boşluk)
//
// Miller'ın sustuğu 4 boşluk — oyuncu eş-yazar olarak doldurur.
// Chrome/didaktik metinler data/willy-i18n.js (seninCerceven) sözlüğünden;
// boşluk içeriği henüz willy.js (TR). Çift dilli (TR/EN).

'use client';

import { useState, useEffect } from 'react';
import willyRaw from '../../../../../data/karakterler/willy';
import willyI18n, { willyIcerik } from '../../../../../data/willy-i18n';
import { useDil, ceviri } from '../../../../../app/lib/dil';
import { altSoruYansimalariniGetir } from '../../../../lib/hamlet-veri';
import HamletAltSayfaHeader from '../../../../../components/HamletAltSayfaHeader';
import HamletBoslukKart from '../../../../../components/HamletBoslukKart';
import HamletBolumGecisi from '../../../../../components/HamletBolumGecisi';

const TON = 'var(--onay)';
const ALTIN = 'var(--accent)';

export default function SeninCerceveAnaSayfa() {
  const { dil } = useDil();
  const willy = willyIcerik(dil, willyRaw);
  const sozluk = ceviri(willyI18n, dil);
  const sc = sozluk.seninCerceven;
  const o = sozluk.ortak;

  const [yansimalar, setYansimalar] = useState({});
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function yukle() {
      const veri = await altSoruYansimalariniGetir(willy.id);
      setYansimalar(veri);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  const bosluklar = willy.boslukSet || [];

  function yazilanSayisi(boslukNo) {
    const set = yansimalar[boslukNo] || {};
    return Object.values(set).filter((y) => (y.metin?.length || 0) > 0).length;
  }

  const tamamlananBosluk = bosluklar.filter((b) => yazilanSayisi(b.no) > 0).length;
  const toplamYazilanAltSoru = bosluklar.reduce((s, b) => s + yazilanSayisi(b.no), 0);
  const toplamAltSoruSayisi = bosluklar.reduce((s, b) => s + (b.altSorular?.length || 0), 0);
  const hepsiBaslamis = tamamlananBosluk >= bosluklar.length;

  if (yukleniyor) {
    return (
      <main style={ekranStili}>
        <span style={yukleniyorMetin}>{dil === 'en' ? 'Loading…' : 'Hazırlanıyor…'}</span>
      </main>
    );
  }

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
        {/* Açılış */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <a
            href="/antrenman/karakter/willy"
            style={geriLink}
            onMouseEnter={(e) => { e.currentTarget.style.color = ALTIN; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
          >
            {o.geriWilly}
          </a>
          <span style={{ ...etiket, color: TON }}>{sc.etiket}</span>
          <h1 style={baslik}>{sc.baslik}</h1>
          <p style={altyazi}>{sc.altyazi}</p>
        </header>

        <p style={paragraf}>{sc.giris1}</p>
        <p style={paragraf}>{sc.giris2}</p>

        <div
          style={{
            borderLeft: `2px solid ${ALTIN}`,
            padding: '0.8rem 1.4rem',
            backgroundColor: 'var(--accent-bg)',
          }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: ALTIN,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {sc.alinti}
          </p>
        </div>

        {/* Substitution sınır cümlesi — ITC etik DNA */}
        <div
          style={{
            borderLeft: '3px solid var(--uyari)',
            padding: '1.2rem 1.5rem',
            backgroundColor: 'var(--uyari-bg)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.7rem',
          }}
        >
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.6rem',
              letterSpacing: '0.35em',
              color: 'var(--uyari)',
              textTransform: 'uppercase',
            }}
          >
            {sc.sinirEtiket}
          </span>
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
            {sc.sinir1Once}
            <em style={{ color: 'var(--uyari)' }}>{sc.sinir1Vurgu}</em>
            {sc.sinir1Sonra}
          </p>
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.85rem',
              color: 'var(--ink-soft)',
              fontStyle: 'italic',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {sc.sinir2}
          </p>
        </div>

        {/* ITC Manifestosu — Üç İlke (3. ilke aktif) */}
        <div
          style={{
            border: '1px solid var(--rule)',
            padding: '1.6rem 1.8rem',
            backgroundColor: 'var(--bg-elevated)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem',
          }}
        >
          <span style={{ ...etiket, color: ALTIN }}>{sc.manifestoEtiket}</span>

          <IlkeSatiri no="1" baslik={sc.ilke1Baslik} metin={sc.ilke1Metin} />
          <IlkeSatiri no="2" baslik={sc.ilke2Baslik} metin={sc.ilke2Metin} />
          <IlkeSatiri
            no="3"
            baslik={sc.ilke3Baslik}
            metin={sc.ilke3Metin}
            kaynak={sc.ilke3Kaynak}
            aktif
            aktifNot={sc.ilke3AktifNot}
          />
        </div>

        {/* Yöntem — 5 Adım */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span style={{ ...etiket, color: ALTIN }}>{sc.yontemEtiket}</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            <YontemAdim no="1" baslik={sc.adim1Baslik}>{sc.adim1Metin}</YontemAdim>
            <YontemAdim no="2" baslik={sc.adim2Baslik}>{sc.adim2Metin}</YontemAdim>
            <YontemAdim no="3" baslik={sc.adim3Baslik}>{sc.adim3Metin}</YontemAdim>
            <YontemAdim no="4" baslik={sc.adim4Baslik}>{sc.adim4Metin}</YontemAdim>
            <YontemAdim no="5" baslik={sc.adim5Baslik}>{sc.adim5Metin}</YontemAdim>
          </div>
        </section>

        {/* Uyarı */}
        <div
          style={{
            border: '1px solid var(--rule)',
            padding: '1.4rem 1.6rem',
            backgroundColor: 'var(--bg-elevated)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.7rem',
          }}
        >
          <span style={{ ...etiket, color: TON }}>{sc.dogruEtiket}</span>
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
            {sc.dogru1Once}
            <em>{sc.dogru1Vurgu}</em>
            {sc.dogru1Sonra}
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: 'var(--ink-muted)',
              lineHeight: 1.7,
              margin: '0.4rem 0 0 0',
            }}
          >
            {sc.dogru2}
          </p>
        </div>

        {/* İlerleme */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '0.8rem',
            borderTop: '1px solid var(--bg-elevated)',
          }}
        >
          <span style={{ ...etiket, color: TON }}>{sc.ilerlemeEtiket}</span>
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: hepsiBaslamis ? TON : 'var(--ink-muted)',
            }}
          >
            {tamamlananBosluk} / {bosluklar.length} {sc.boslugaDeginildi}
            {toplamYazilanAltSoru > 0 && (
              <span style={{ color: 'var(--ink-muted)', marginLeft: '0.5rem', fontSize: '0.85rem' }}>
                ({toplamYazilanAltSoru} / {toplamAltSoruSayisi} {sc.altSoruBirim})
              </span>
            )}
          </span>
        </div>

        {/* Boşluk kartları */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {bosluklar.map((b) => (
            <HamletBoslukKart
              key={b.no}
              bosluk={b}
              yazilanSayisi={yazilanSayisi(b.no)}
              kokYol="/antrenman/karakter/willy"
            />
          ))}
        </div>

        {/* Sentez kartı */}
        {tamamlananBosluk > 0 && (
          <a
            href="/antrenman/karakter/willy/senin-cerceven/sentez"
            style={{
              border: `1px solid ${hepsiBaslamis ? TON : TON + '55'}`,
              backgroundColor: 'var(--bg-elevated)',
              padding: '1.8rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
              textDecoration: 'none',
              color: 'var(--ink)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = TON; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = hepsiBaslamis ? TON : TON + '55'; }}
          >
            <span style={{ ...etiket, color: TON }}>
              {hepsiBaslamis ? sc.sentezHazir : sc.sentezKismi}
            </span>
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '1.5rem',
                color: 'var(--ink)',
              }}
            >
              {sc.sentezBaslik}
            </span>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 300,
                fontSize: '0.85rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {sc.sentezAciklama}
            </p>
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                color: TON,
                textTransform: 'uppercase',
                marginTop: '0.4rem',
              }}
            >
              {o.senteziAc}
            </span>
          </a>
        )}

        <HamletBolumGecisi
          oncekiEtiket={sc.gecisOnceki}
          oncekiBaslik={sc.gecisOncekiBaslik}
          oncekiYol="/antrenman/karakter/willy/yazarin-cercevesi"
          sonrakiBaslik={sc.gecisSonraki}
          sonrakiYakinda
        />
      </article>
    </main>
  );
}

// ─── Yardımcılar ────────────────────────────────────────────────────────────

function IlkeSatiri({ no, baslik: ilkeBaslik, metin, kaynak, aktif, aktifNot }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
        opacity: aktif ? 1 : 0.55,
        paddingLeft: aktif ? '0.9rem' : 0,
        borderLeft: aktif ? `2px solid ${ALTIN}` : 'none',
        marginLeft: aktif ? '-0.9rem' : 0,
      }}
    >
      <span
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '2rem',
          color: ALTIN,
          minWidth: '36px',
          lineHeight: 1,
        }}
      >
        {no}
      </span>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <h4
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '1.15rem',
            color: 'var(--ink)',
            margin: 0,
          }}
        >
          {ilkeBaslik}
        </h4>
        <p
          style={{
            fontFamily: aktif ? 'Cormorant Garamond, serif' : 'Jost, sans-serif',
            fontStyle: aktif ? 'italic' : 'normal',
            fontWeight: aktif ? 300 : 200,
            fontSize: aktif ? '0.95rem' : '0.85rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {metin}
        </p>
        {kaynak && (
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.7rem',
              color: 'var(--ink-muted)',
              fontStyle: 'italic',
            }}
          >
            {kaynak}
          </span>
        )}
        {aktif && aktifNot && (
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.72rem',
              color: ALTIN,
              fontStyle: 'italic',
              marginTop: '0.3rem',
            }}
          >
            {aktifNot}
          </span>
        )}
      </div>
    </div>
  );
}

function YontemAdim({ no, baslik, children }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <span
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '1.5rem',
          color: ALTIN,
          minWidth: '32px',
          lineHeight: 1.1,
        }}
      >
        {no}
      </span>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 300,
            fontSize: '0.9rem',
            color: 'var(--ink)',
            letterSpacing: '0.05em',
          }}
        >
          {baslik}
        </span>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {children}
        </p>
      </div>
    </div>
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

const altyazi = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.1rem',
  color: 'var(--ink-muted)',
  margin: 0,
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
