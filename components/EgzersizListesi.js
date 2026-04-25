// components/EgzersizListesi.js
// ITC Actor's Gym — Egzersiz listesi bileşeni
//
// Egzersizleri akordeon olarak gösterir.
// Her egzersizin adımları VAK kanalına göre kişiselleştirilir.
// Kararlar Odası egzersizi açıldığında KararlarOdasi bileşenini gömer.
// Yıldız psikolojik skoruna göre travmalı egzersizler kilitli/uyarılı olabilir.

'use client';

import { useState } from 'react';
import { sahneErisimi } from '../app/lib/travma';
import { vakDili } from '../app/lib/kalibrasyon';
import KararlarOdasi from './KararlarOdasi';

export default function EgzersizListesi({
  egzersizler,
  kalibrasyon,
  onEgzersizTamamlandi,
}) {
  const [acik, setAcik] = useState(null);

  // VAK dili sözlüğünü hazırla (kalibrasyon yoksa V varsayılan)
  const baskinKanal = kalibrasyon?.vak?.baskin || 'V';
  const dil = vakDili(baskinKanal);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
      {egzersizler.map((egz) => (
        <Egzersiz
          key={egz.id}
          egzersiz={egz}
          dil={dil}
          kalibrasyon={kalibrasyon}
          acik={acik === egz.id}
          onAc={() => setAcik(acik === egz.id ? null : egz.id)}
          onTamamlandi={onEgzersizTamamlandi}
        />
      ))}
    </div>
  );
}

// ─── EGZERSİZ KARTI ─────────────────────────────────────────────────────────

function Egzersiz({ egzersiz, dil, kalibrasyon, acik, onAc, onTamamlandi }) {
  // Travma seviyesine göre erişim kontrolü
  // Egzersizi sahne gibi davranan bir nesneye çevirelim
  const sahneBenzeri = { travmaSeviyesi: egzersiz.travmaSeviyesi || 0 };
  const erisim = sahneErisimi(sahneBenzeri, kalibrasyon?.yildiz);

  const seviyeRenk = {
    Giris: '#6a9b6a',
    Temel: '#6a7a9b',
    Orta: '#c9a96e',
    Ileri: '#9b6a6a',
  };
  const renk = seviyeRenk[egzersiz.seviye] || '#888';

  // Kenarlık
  let borderColor = '#2a2a2a';
  if (acik) borderColor = renk;
  else if (erisim.kilitli) borderColor = '#3a1f1f';
  else if (erisim.seviye === 'uyari') borderColor = '#3a2f1f';

  return (
    <div
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor: acik ? '#0f0f0f' : 'transparent',
        transition: 'all 0.25s ease',
        opacity: erisim.kilitli ? 0.55 : 1,
      }}
    >
      {/* Başlık (her zaman görünür) */}
      <button
        onClick={erisim.kilitli ? null : onAc}
        disabled={erisim.kilitli}
        style={{
          display: 'flex',
          alignItems: 'center',
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
        <span style={{ fontSize: '1.3rem' }}>{egzersiz.ikon}</span>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.9rem',
              color: '#f0ede8',
              letterSpacing: '0.02em',
            }}
          >
            {egzersiz.baslik}
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                color: renk,
                textTransform: 'uppercase',
                padding: '0.15rem 0.6rem',
                border: `1px solid ${renk}55`,
              }}
            >
              {egzersiz.seviye}
            </span>
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
            {erisim.kilitli && (
              <span style={{ fontSize: '0.7rem', color: '#9b6a6a' }}>🔒</span>
            )}
          </div>
        </div>

        {!erisim.kilitli && (
          <span
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.7rem',
              color: '#888',
              transform: acik ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          >
            ▾
          </span>
        )}
      </button>

      {/* İçerik (açıkken) */}
      {acik && (
        <div
          style={{
            padding: '0 1.4rem 1.4rem 1.4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            borderTop: '1px solid #2a2a2a',
            paddingTop: '1.4rem',
          }}
        >
          {/* Açıklama */}
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.82rem',
              color: '#bbb',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {egzersiz.aciklama}
          </p>

          {/* Erişim mesajı (uyarı varsa) */}
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

          {/* Egzersiz türüne göre içerik */}
          {egzersiz.kararlar ? (
            // Kararlar Odası egzersizi
            <KararlarOdasi
              kararlar={egzersiz.kararlar}
              vakDili={dil}
              onTamamlandi={(sonuc) => {
                if (onTamamlandi) {
                  onTamamlandi(egzersiz.id, sonuc);
                }
              }}
            />
          ) : (
            // Standart adımlı egzersiz
            <Adimlar adimlar={egzersiz.adimlar} dil={dil} />
          )}
        </div>
      )}
    </div>
  );
}

// ─── ADIMLAR ────────────────────────────────────────────────────────────────

function Adimlar({ adimlar, dil }) {
  // VAK yer tutucularını doldur: {duyu}, {ipucu}, {yansimaSorusu}
  function metniDoldur(metin) {
    return metin
      .replace(/\{duyu\}/g, dil.duyu)
      .replace(/\{ipucu\}/g, dil.ipucu)
      .replace(/\{yansimaSorusu\}/g, dil.yansimaSorusu);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      {adimlar.map((adim, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
          }}
        >
          <span
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: '#c9a96e',
              minWidth: '24px',
              lineHeight: 1.6,
            }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <p
            style={{
              flex: 1,
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.85rem',
              color: '#ddd',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {metniDoldur(adim)}
          </p>
        </div>
      ))}
    </div>
  );
}