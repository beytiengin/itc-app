// components/TimelineGorumu.js
// ITC Actor's Gym — Sahne zaman çizelgesi bileşeni
//
// Karakterin sahnelerini perde perde listeler.
// Tıklanan sahnenin detayını ve travma uyarısını gösterir.
// Kalibrasyon profili varsa kilit/uyarı durumlarını uygular.

'use client';

import { useState } from 'react';
import {
  TRAVMA_KATEGORILERI,
  YOGUNLUK_SEVIYELERI,
  sahneErisimi,
} from '../app/lib/travma';

export default function TimelineGorumu({ sahneler, kalibrasyon }) {
  const [secili, setSecili] = useState(null);

  // Perdeleri bul (1, 2, 3, ...)
  const perdeler = [...new Set(sahneler.map((s) => s.perde))].sort();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

      {perdeler.map((perde) => {
        const perdeSahneleri = sahneler.filter((s) => s.perde === perde);
        return (
          <div key={perde}>
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                color: '#aaa',
                textTransform: 'uppercase',
                marginBottom: '0.8rem',
              }}
            >
              Perde {perde}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {perdeSahneleri.map((sahne) => (
                <SahneSatiri
                  key={sahne.id}
                  sahne={sahne}
                  kalibrasyon={kalibrasyon}
                  secili={secili?.id === sahne.id}
                  onSec={() =>
                    setSecili(secili?.id === sahne.id ? null : sahne)
                  }
                />
              ))}
            </div>
          </div>
        );
      })}

      {secili && <SahneDetayi sahne={secili} kalibrasyon={kalibrasyon} />}
    </div>
  );
}

// ─── SAHNE SATIRI ───────────────────────────────────────────────────────────

function SahneSatiri({ sahne, kalibrasyon, secili, onSec }) {
  const erisim = sahneErisimi(sahne, kalibrasyon?.yildiz);
  const yogunluk = sahne.travmaSeviyesi || 0;
  const yogunlukBilgi = yogunluk > 0 ? YOGUNLUK_SEVIYELERI[yogunluk] : null;

  // Kenarlık ve renk durumu
  let borderColor = '#3a3a3a';
  if (secili) borderColor = '#c9a96e';
  else if (erisim.kilitli) borderColor = '#5a3a3a';
  else if (erisim.seviye === 'uyari') borderColor = '#5a4a3a';

  return (
    <button
      onClick={onSec}
      disabled={erisim.kilitli}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem 1.2rem',
        backgroundColor: secili ? '#1a1a1a' : 'transparent',
        border: `1px solid ${borderColor}`,
        textAlign: 'left',
        cursor: erisim.kilitli ? 'not-allowed' : 'pointer',
        opacity: erisim.kilitli ? 0.5 : 1,
        transition: 'all 0.25s ease',
        width: '100%',
        fontFamily: 'inherit',
        color: '#f0ede8',
      }}
    >
      <span
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '0.85rem',
          color: '#c9a96e',
          minWidth: '32px',
        }}
      >
        {sahne.id}
      </span>

      <span
        style={{
          flex: 1,
          fontFamily: 'Jost, sans-serif',
          fontWeight: 300,
          fontSize: '0.85rem',
          color: '#f0ede8',
        }}
      >
        {sahne.label}
      </span>

      {yogunlukBilgi && (
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.55rem',
            letterSpacing: '0.15em',
            color: yogunlukBilgi.renk,
            textTransform: 'uppercase',
            padding: '0.2rem 0.6rem',
            border: `1px solid ${yogunlukBilgi.renk}55`,
          }}
        >
          {yogunlukBilgi.ad}
        </span>
      )}

      {erisim.kilitli && (
        <span style={{ fontSize: '0.7rem', color: '#9b6a6a' }}>🔒</span>
      )}
    </button>
  );
}

// ─── SAHNE DETAYI ───────────────────────────────────────────────────────────

function SahneDetayi({ sahne, kalibrasyon }) {
  const erisim = sahneErisimi(sahne, kalibrasyon?.yildiz);
  const yogunluk = sahne.travmaSeviyesi || 0;
  const yogunlukBilgi = yogunluk > 0 ? YOGUNLUK_SEVIYELERI[yogunluk] : null;

  return (
    <div
      style={{
        marginTop: '1rem',
        padding: '1.5rem 1.8rem',
        backgroundColor: '#0f0f0f',
        border: '1px solid #2a2a2a',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
      }}
    >
      {/* Başlık */}
      <div>
        <p
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: '#c9a96e',
            textTransform: 'uppercase',
            marginBottom: '0.4rem',
          }}
        >
          Sahne {sahne.id}
        </p>
        <h3
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 300,
            fontSize: '1.4rem',
            color: '#f0ede8',
            margin: 0,
          }}
        >
          {sahne.label}
        </h3>
      </div>

      {/* Açıklama */}
      <p
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.85rem',
          color: '#ccc',
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {sahne.desc}
      </p>

      {/* İç Durum */}
      <div
        style={{
          padding: '1rem 1.2rem',
          backgroundColor: '#15110a',
          borderLeft: '2px solid #c9a96e',
        }}
      >
        <p
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            color: '#c9a96e',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}
        >
          İç Durum
        </p>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '0.95rem',
            color: '#f0ede8',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {sahne.icDurum}
        </p>
      </div>

      {/* Zihinsel Boşluk */}
      {sahne.bosluk && (
        <div
          style={{
            padding: '1rem 1.2rem',
            backgroundColor: '#0f0f15',
            borderLeft: '2px solid #6a7a9b',
          }}
        >
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: '#6a7a9b',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}
          >
            Zihinsel Boşluk
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: '#ccc',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {sahne.bosluk}
          </p>
        </div>
      )}

      {/* Travma Kategorileri */}
      {sahne.travmaKategorileri && sahne.travmaKategorileri.length > 0 && (
        <div>
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: '#aaa',
              textTransform: 'uppercase',
              marginBottom: '0.6rem',
            }}
          >
            Bu sahne şu temaları içeriyor
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {sahne.travmaKategorileri.map((katId) => {
              const kat = TRAVMA_KATEGORILERI[katId];
              if (!kat) return null;
              return (
                <span
                  key={katId}
                  title={kat.aciklama}
                  style={{
                    fontFamily: 'Jost, sans-serif',
                    fontWeight: 200,
                    fontSize: '0.7rem',
                    color: '#f0ede8',
                    padding: '0.4rem 0.8rem',
                    border: `1px solid ${kat.renk}`,
                    backgroundColor: `${kat.renk}22`,
                  }}
                >
                  {kat.ad}
                </span>
              );
            })}
          </div>
          {yogunlukBilgi && (
            <p
              style={{
                fontFamily: 'Jost, sans-serif',
                fontWeight: 200,
                fontSize: '0.7rem',
                color: '#aaa',
                marginTop: '0.8rem',
                lineHeight: 1.6,
                fontStyle: 'italic',
              }}
            >
              Yoğunluk: <span style={{ color: yogunlukBilgi.renk }}>{yogunlukBilgi.ad}</span> — {yogunlukBilgi.aciklama}
            </p>
          )}
        </div>
      )}

      {/* Erişim Mesajı (uyarı varsa) */}
      {erisim.mesaj && (
        <div
          style={{
            padding: '1rem 1.2rem',
            backgroundColor: erisim.kilitli ? '#1a0f0f' : '#1a150f',
            border: `1px solid ${erisim.kilitli ? '#3a1f1f' : '#3a2f1f'}`,
          }}
        >
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.78rem',
              color: erisim.kilitli ? '#c98a8a' : '#c9a96e',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {erisim.kilitli ? '🔒 ' : '⚠ '}
            {erisim.mesaj}
          </p>
        </div>
      )}
    </div>
  );
}