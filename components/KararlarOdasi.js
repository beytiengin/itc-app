// components/KararlarOdasi.js
// ITC Actor's Gym — Kararlar Odası egzersizi
//
// Karakterin kritik karar anlarında oyuncu önce kendi seçimini yapar,
// sonra karakterin tarihsel cevabıyla karşılaştırır.
// Her karar 4 aşamada akar:
//   1. Kurulum    — sahnenin durumu
//   2. Yollar     — oyuncu seçer
//   3. Yansıma    — neden seçtin?
//   4. Karşılaşma — karakterin cevabı + fark sorusu

'use client';

import { useState } from 'react';

export default function KararlarOdasi({ kararlar, vakDili, onTamamlandi }) {
  const [aktifKararIdx, setAktifKararIdx] = useState(0);
  const [asama, setAsama] = useState('kurulum'); // kurulum / yansima / karsilasma
  const [secimler, setSecimler] = useState({}); // {kararId: secilenYolId}
  const [yansimalar, setYansimalar] = useState({}); // {kararId: oyuncuMetni}

  const aktifKarar = kararlar[aktifKararIdx];
  const sonKararMi = aktifKararIdx === kararlar.length - 1;

  function yolSec(yolId) {
    setSecimler({ ...secimler, [aktifKarar.id]: yolId });
    setAsama('yansima');
  }

  function yansimaKaydet(metin) {
    setYansimalar({ ...yansimalar, [aktifKarar.id]: metin });
    setAsama('karsilasma');
  }

  function sonrakiKarar() {
    if (sonKararMi) {
      // Tüm kararlar tamamlandı
      if (onTamamlandi) {
        onTamamlandi({ secimler, yansimalar });
      }
    } else {
      setAktifKararIdx(aktifKararIdx + 1);
      setAsama('kurulum');
    }
  }

  function bastanBasla() {
    setAktifKararIdx(0);
    setAsama('kurulum');
    setSecimler({});
    setYansimalar({});
  }

  return (
    <div
      style={{
        backgroundColor: '#0a0a0a',
        border: '1px solid #2a2a2a',
        padding: '2rem 1.8rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      {/* İlerleme Göstergesi */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: '#c9a96e',
            textTransform: 'uppercase',
          }}
        >
          Karar {aktifKararIdx + 1} / {kararlar.length}
        </span>
        <span
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: '#888',
            textTransform: 'uppercase',
          }}
        >
          Sahne {aktifKarar.sahne}
        </span>
      </div>

      {/* İlerleme Çizgisi */}
      <div style={{ display: 'flex', gap: '0.3rem' }}>
        {kararlar.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: '2px',
              backgroundColor:
                i < aktifKararIdx
                  ? '#c9a96e'
                  : i === aktifKararIdx
                  ? '#c9a96e88'
                  : '#2a2a2a',
              transition: 'background-color 0.4s ease',
            }}
          />
        ))}
      </div>

      {/* Aşama 1: Kurulum + Yollar */}
      {asama === 'kurulum' && (
        <KurulumAsamasi karar={aktifKarar} onSec={yolSec} />
      )}

      {/* Aşama 2: Yansıma */}
      {asama === 'yansima' && (
        <YansimaAsamasi
          karar={aktifKarar}
          secilenYol={secimler[aktifKarar.id]}
          onKaydet={yansimaKaydet}
        />
      )}

      {/* Aşama 3: Karşılaşma */}
      {asama === 'karsilasma' && (
        <KarsilasmaAsamasi
          karar={aktifKarar}
          secilenYol={secimler[aktifKarar.id]}
          oyuncuYansimasi={yansimalar[aktifKarar.id]}
          sonKararMi={sonKararMi}
          onDevam={sonrakiKarar}
          onBastan={bastanBasla}
        />
      )}
    </div>
  );
}

// ─── AŞAMA 1: KURULUM ───────────────────────────────────────────────────────

function KurulumAsamasi({ karar, onSec }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div
        style={{
          padding: '1.4rem 1.6rem',
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
            marginBottom: '0.6rem',
          }}
        >
          Şu an
        </p>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: '#f0ede8',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {karar.kurulum}
        </p>
      </div>

      <p
        style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.75rem',
          color: '#aaa',
          textAlign: 'center',
          letterSpacing: '0.05em',
          margin: 0,
        }}
      >
        Doğru cevap yok. Sadece senin seçimin.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {karar.yollar.map((yol, i) => (
          <button
            key={yol.id}
            onClick={() => onSec(yol.id)}
            style={{
              padding: '1.2rem 1.4rem',
              backgroundColor: 'transparent',
              border: '1px solid #3a3a3a',
              color: '#f0ede8',
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.85rem',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              lineHeight: 1.5,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#c9a96e';
              e.currentTarget.style.backgroundColor = '#15110a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#3a3a3a';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                color: '#c9a96e',
                marginRight: '0.6rem',
                fontSize: '0.95rem',
              }}
            >
              {String.fromCharCode(65 + i)}.
            </span>
            {yol.metin}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── AŞAMA 2: YANSIMA ───────────────────────────────────────────────────────

function YansimaAsamasi({ karar, secilenYol, onKaydet }) {
  const [metin, setMetin] = useState('');
  const yol = karar.yollar.find((y) => y.id === secilenYol);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      <div>
        <p
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            color: '#888',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}
        >
          Senin seçimin
        </p>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1rem',
            color: '#c9a96e',
            margin: 0,
          }}
        >
          "{yol?.metin}"
        </p>
      </div>

      <div
        style={{
          padding: '1.2rem 1.4rem',
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
            marginBottom: '0.6rem',
          }}
        >
          Yansıma sorusu
        </p>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1.05rem',
            color: '#f0ede8',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {karar.yansimaSorusu}
        </p>
      </div>

      <textarea
        value={metin}
        onChange={(e) => setMetin(e.target.value)}
        placeholder="Bedeninde, zihninde ne oldu? Birkaç cümle yeter..."
        style={{
          width: '100%',
          minHeight: '120px',
          padding: '1rem 1.2rem',
          backgroundColor: '#0a0a0a',
          border: '1px solid #2a2a2a',
          color: '#f0ede8',
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.85rem',
          lineHeight: 1.7,
          resize: 'vertical',
          outline: 'none',
          transition: 'border-color 0.25s ease',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = '#c9a96e')}
        onBlur={(e) => (e.currentTarget.style.borderColor = '#2a2a2a')}
      />

      <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'flex-end' }}>
        <button
          onClick={() => onKaydet(metin || '(boş)')}
          style={{
            padding: '0.9rem 2rem',
            backgroundColor: 'transparent',
            border: '1px solid #c9a96e',
            color: '#c9a96e',
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#c9a96e';
            e.currentTarget.style.color = '#0a0a0a';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#c9a96e';
          }}
        >
          Devam
        </button>
      </div>
    </div>
  );
}

// ─── AŞAMA 3: KARŞILAŞMA ────────────────────────────────────────────────────

function KarsilasmaAsamasi({
  karar,
  secilenYol,
  oyuncuYansimasi,
  sonKararMi,
  onDevam,
  onBastan,
}) {
  const yol = karar.yollar.find((y) => y.id === secilenYol);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Senin Yolun */}
      <div
        style={{
          padding: '1.2rem 1.4rem',
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
          Senin yolun
        </p>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1rem',
            color: '#f0ede8',
            margin: '0 0 0.6rem 0',
          }}
        >
          "{yol?.metin}"
        </p>
        {oyuncuYansimasi && oyuncuYansimasi !== '(boş)' && (
          <p
            style={{
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.78rem',
              color: '#bbb',
              lineHeight: 1.7,
              margin: 0,
              paddingTop: '0.6rem',
              borderTop: '1px solid #2a2a3a',
            }}
          >
            {oyuncuYansimasi}
          </p>
        )}
      </div>

      {/* Karakterin Yolu */}
      <div
        style={{
          padding: '1.2rem 1.4rem',
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
          Karakterin yolu
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
          {karar.tarihselCevap}
        </p>
      </div>

      {/* Fark Sorusu */}
      <div
        style={{
          padding: '1.4rem 1.6rem',
          backgroundColor: '#0f150f',
          border: '1px solid #1e2a1e',
        }}
      >
        <p
          style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            color: '#6a9b6a',
            textTransform: 'uppercase',
            marginBottom: '0.6rem',
          }}
        >
          Fark üzerine
        </p>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1.05rem',
            color: '#f0ede8',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {karar.farkSorusu}
        </p>
      </div>

      {/* Devam / Tamamlandı */}
      <div
        style={{
          display: 'flex',
          gap: '0.8rem',
          justifyContent: 'flex-end',
          paddingTop: '0.5rem',
        }}
      >
        {sonKararMi && (
          <button
            onClick={onBastan}
            style={{
              padding: '0.9rem 1.5rem',
              backgroundColor: 'transparent',
              border: '1px solid #3a3a3a',
              color: '#aaa',
              fontFamily: 'Jost, sans-serif',
              fontWeight: 200,
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Baştan Başla
          </button>
        )}

        <button
          onClick={onDevam}
          style={{
            padding: '0.9rem 2rem',
            backgroundColor: 'transparent',
            border: '1px solid #c9a96e',
            color: '#c9a96e',
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#c9a96e';
            e.currentTarget.style.color = '#0a0a0a';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#c9a96e';
          }}
        >
          {sonKararMi ? 'Tamamla' : 'Sonraki Karar'}
        </button>
      </div>
    </div>
  );
}