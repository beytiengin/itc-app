// components/HamletSahneDetay.js
// ITC Actor's Gym — Timeline · Seçili sahne detay paneli
//
// Workbook Sayfa Anatomisi: OLAY · İÇSEL · SICAKLIK · YÜK
// + Yansıma alanı (auto-save 800ms)
// + "Bu sahneyi anladım" onay kutusu
// + Önceki/Sonraki sahne navigasyonu

'use client';

import { useState, useEffect, useRef } from 'react';
import { sahneYansimasiKaydet } from '../app/lib/hamlet-veri';
import HamletSicaklikSecici from './HamletSicaklikSecici';
import { useDil } from '../app/lib/dil';

const TON = 'var(--accent)';

export default function HamletSahneDetay({
  sahne,
  baslangic,        // { sicaklik, metin, anladi }
  toplamSahne,
  karakterId,
  karakterAd,       // örn. "Hamlet" / "Willy" — yansıma sorusunda kullanılır
  tercihler = [],   // bağlı tercihler (Yazarın Çerçevesi köprüsü)
  boslukSet = [],   // bağlı boşluklar (Senin Çerçeven köprüsü)
  kokYol,           // örn. /antrenman/karakter/willy
  onOnceki,
  onSonraki,
}) {
  const { dil } = useDil();
  const t = dil === 'en'
    ? { olay: 'Event', icsel: 'Inner', sicaklik: 'Temperature', yuk: 'Burden', etkiler: "Affects the Author's Frame choices:", tercih: 'Choice', ardindan: 'Follows the gap in Your Frame:', bosluk: 'Gap', seninYansiman: 'Your Reflection', soruPre: 'How hot do you think ', soruPost: " is in this scene? Where does it settle in your body?", placeholder: 'Where does it settle in your body? You can start with a single word.', anladim: 'I understood this scene', sahne: 'Scene' }
    : { olay: 'Olay', icsel: 'İçsel', sicaklik: 'Sıcaklık', yuk: 'Yük', etkiler: 'Yazarın Çerçevesi tercihlerini etkiler:', tercih: 'Tercih', ardindan: 'Senin Çerçeven boşluğunun ardından gelir:', bosluk: 'Boşluk', seninYansiman: 'Senin Yansıman', soruPre: 'Bu sahnede ', soruPost: ' sıcaklığı sence kaç? Bedeninde nereye yerleşiyor?', placeholder: 'Bedeninde nereye yerleşiyor? Bir kelimeden başlayabilirsin.', anladim: 'Bu sahneyi anladım', sahne: 'Sahne' };
  const [sicaklik, setSicaklik] = useState(baslangic?.sicaklik ?? null);
  const [metin, setMetin] = useState(baslangic?.metin || '');
  const [anladi, setAnladi] = useState(baslangic?.anladi || false);
  const [kayitDurumu, setKayitDurumu] = useState(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    setSicaklik(baslangic?.sicaklik ?? null);
    setMetin(baslangic?.metin || '');
    setAnladi(baslangic?.anladi || false);
    setKayitDurumu(null);
  }, [sahne?.no, baslangic?.sicaklik, baslangic?.metin, baslangic?.anladi]);

  useEffect(() => () => { if (debounceRef.current) clearTimeout(debounceRef.current); }, []);

  if (!sahne) return null;

  // Bu sahneyi etkileyen tercihler — Yazarın Çerçevesi köprüsü
  const bagliTercihler = (tercihler || []).filter(
    (t) => (t.sahneNolari || []).includes(sahne.no)
  );

  // Bu sahneye gelen / bu sahneden çıkan boşluklar — Senin Çerçeven köprüsü
  const bagliBosluklar = (boslukSet || []).filter(
    (b) => b.sonraSahneNo === sahne.no
  );

  function metinDegistir(yeni) {
    setMetin(yeni);
    setKayitDurumu('yaziliyor');
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setKayitDurumu('kaydediliyor');
      const ok = await sahneYansimasiKaydet(karakterId, sahne.no, { metin: yeni });
      setKayitDurumu(ok ? 'kaydedildi' : 'hata');
      if (ok) setTimeout(() => setKayitDurumu(null), 2500);
    }, 800);
  }

  async function sicaklikDegistir(yeni) {
    setSicaklik(yeni);
    await sahneYansimasiKaydet(karakterId, sahne.no, { sicaklik: yeni });
  }

  async function anladiDegistir() {
    const yeni = !anladi;
    setAnladi(yeni);
    await sahneYansimasiKaydet(karakterId, sahne.no, { anladi: yeni });
  }

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-elevated)',
        border: '1px solid var(--rule)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.6rem',
      }}
    >
      {/* Başlık */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem', flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: TON,
            textTransform: 'uppercase',
            padding: '0.25rem 0.7rem',
            border: `1px solid color-mix(in srgb, ${TON} 33%, transparent)`,
          }}
        >
          Sahne {sahne.no}
        </span>
        <h3
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '1.55rem',
            color: 'var(--ink)',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {sahne.baslik}
        </h3>
      </div>

      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.3em',
          color: 'var(--ink-muted)',
          textTransform: 'uppercase',
          marginTop: '-0.6rem',
        }}
      >
        {sahne.konum}
      </span>

      {/* OLAY */}
      <Bolum etiket={t.olay}>
        <p style={duzMetin}>{sahne.olay}</p>
      </Bolum>

      {/* İÇSEL */}
      <Bolum etiket={t.icsel}>
        <p style={duzMetin}>{sahne.icsel}</p>
      </Bolum>

      {/* SICAKLIK */}
      <Bolum etiket={t.sicaklik}>
        <HamletSicaklikSecici
          oneri={sahne.onerilenSicaklik}
          oyuncuSicaklik={sicaklik}
          onDegistir={sicaklikDegistir}
        />
      </Bolum>

      {/* YÜK */}
      <Bolum etiket={t.yuk}>
        <p style={{ ...duzMetin, fontStyle: 'italic', color: 'var(--ink-soft)' }}>{sahne.yuk}</p>
      </Bolum>

      {/* BAĞLANTILAR — Yazarın Çerçevesi + Senin Çerçeven */}
      {(bagliTercihler.length > 0 || bagliBosluklar.length > 0) && (
        <div
          style={{
            border: `1px solid color-mix(in srgb, ${TON} 20%, transparent)`,
            backgroundColor: 'var(--accent-bg-deep)',
            padding: '1rem 1.2rem',
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
              letterSpacing: '0.3em',
              color: TON,
              textTransform: 'uppercase',
            }}
          >
            Bu Sahnenin Bağlantıları
          </span>

          {bagliTercihler.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <span
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.7rem',
                  color: 'var(--ink-muted)',
                  letterSpacing: '0.05em',
                }}
              >
                {t.etkiler}
              </span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {bagliTercihler.map((tr) => (
                  <a
                    key={tr.no}
                    href={`${kokYol}/yazarin-cercevesi/${tr.no}`}
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 200,
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
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
                    {t.tercih} {tr.no} · {tr.konu}
                  </a>
                ))}
              </div>
            </div>
          )}

          {bagliBosluklar.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <span
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.7rem',
                  color: 'var(--ink-muted)',
                  letterSpacing: '0.05em',
                }}
              >
                {t.ardindan}
              </span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {bagliBosluklar.map((b) => (
                  <a
                    key={b.no}
                    href={`${kokYol}/senin-cerceven/${b.no}`}
                    style={{
                      fontFamily: 'Jost, sans-serif',
                      fontWeight: 200,
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      color: 'var(--ink-soft)',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      padding: '0.3rem 0.7rem',
                      border: '1px solid var(--rule)',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--onay)';
                      e.currentTarget.style.borderColor = 'var(--onay)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--ink-soft)';
                      e.currentTarget.style.borderColor = 'var(--rule)';
                    }}
                  >
                    {t.bosluk} {b.no} · {b.baslik}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* YANSIMAN */}
      <div
        style={{
          paddingTop: '1.4rem',
          borderTop: '1px solid var(--bg-elevated)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
        }}
      >
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
            {t.seninYansiman}
          </span>
          <KayitRozet durum={kayitDurumu} />
        </div>
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
          {t.soruPre}{dil === 'en' ? karakterAd : iyelik(karakterAd)}{t.soruPost}
        </p>
        <textarea
          value={metin}
          onChange={(e) => metinDegistir(e.target.value)}
          placeholder={t.placeholder}
          rows={5}
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

      {/* ANLADIM */}
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.7rem',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <input
          type="checkbox"
          checked={anladi}
          onChange={anladiDegistir}
          style={{
            width: '14px',
            height: '14px',
            accentColor: TON,
            cursor: 'pointer',
          }}
        />
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 300,
            fontSize: '0.8rem',
            color: anladi ? TON : 'var(--ink-soft)',
            letterSpacing: '0.05em',
          }}
        >
          {t.anladim}
        </span>
      </label>

      {/* Navigasyon */}
      <div
        style={{
          paddingTop: '1.4rem',
          borderTop: '1px solid var(--bg-elevated)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <button
          onClick={onOnceki}
          disabled={sahne.no <= 1}
          style={navButonStili(sahne.no <= 1)}
          onMouseEnter={(e) => { if (sahne.no > 1) e.currentTarget.style.color = 'var(--ink)'; }}
          onMouseLeave={(e) => { if (sahne.no > 1) e.currentTarget.style.color = 'var(--ink-soft)'; }}
        >
          ← {t.sahne} {sahne.no - 1}
        </button>
        <button
          onClick={onSonraki}
          disabled={sahne.no >= toplamSahne}
          style={navButonStili(sahne.no >= toplamSahne)}
          onMouseEnter={(e) => { if (sahne.no < toplamSahne) e.currentTarget.style.color = 'var(--ink)'; }}
          onMouseLeave={(e) => { if (sahne.no < toplamSahne) e.currentTarget.style.color = 'var(--ink-soft)'; }}
        >
          {t.sahne} {sahne.no + 1} →
        </button>
      </div>
    </div>
  );
}

// ─── Yardımcılar ────────────────────────────────────────────────────────────

// Türkçe iyelik eki: vokalle (ya da y ile) biten isim → "'nin", diğerleri → "'in".
// karakterAd verilmezse "karakterin" döner.
function iyelik(ad) {
  if (!ad) return 'karakterin';
  const son = ad.slice(-1).toLowerCase();
  const yumusak = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü', 'y'];
  return yumusak.includes(son) ? `${ad}'nin` : `${ad}'in`;
}

function Bolum({ etiket, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      <span
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          color: TON,
          textTransform: 'uppercase',
        }}
      >
        {etiket}
      </span>
      {children}
    </div>
  );
}

const duzMetin = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1rem',
  color: 'var(--ink-soft)',
  lineHeight: 1.8,
  margin: 0,
};

function navButonStili(disabled) {
  return {
    background: 'none',
    border: '1px solid var(--rule)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: '0.6rem 1.2rem',
    fontFamily: 'Jost, sans-serif',
    fontWeight: 200,
    fontSize: '0.6rem',
    letterSpacing: '0.25em',
    color: disabled ? 'var(--ink-muted)' : 'var(--ink-soft)',
    textTransform: 'uppercase',
    transition: 'color 0.25s ease',
  };
}

function KayitRozet({ durum }) {
  const { dil } = useDil();
  if (!durum || durum === 'yaziliyor') return <span style={{ minHeight: '1em' }} />;
  const renk = durum === 'hata' ? 'var(--uyari)' : 'var(--accent)';
  const mesaj =
    durum === 'kaydediliyor' ? (dil === 'en' ? 'Saving…' : 'Kaydediliyor…') :
    durum === 'kaydedildi' ? (dil === 'en' ? '✓ Saved' : '✓ Kaydedildi') :
    (dil === 'en' ? '⚠ Could not save' : '⚠ Kaydedilemedi');
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
