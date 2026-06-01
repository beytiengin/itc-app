// components/TopraklanmaModu.js
// ITC Actor's Gym — Topraklanma / Deroling overlay
//
// Travma seviyesi 2-3 olan antrenman tamamlandıktan sonra otomatik açılır.
// Karakter günlük hayata taşınmadan, oyuncu kendine geri döner.
// Modül III'ün ön habercisi.

'use client';

import { useState } from 'react';
import { useDil } from '../app/lib/dil';

export default function TopraklanmaModu({ baslik, onKapat }) {
  const [adim, setAdim] = useState(0);
  const { dil } = useDil();

  const T = {
    tr: {
      etiket: 'Topraklanma · Çıkış',
      baslikH: 'Karakteri bırak',
      altPre: '"',
      altPost: '" derin bir çalışmaydı. Günlük hayata dönmeden önce kısa bir topraklanma yapıyoruz.',
      devam: 'Yaptım · Devam',
      bitir: 'Buradayım ✓',
      adimlar: [
        'Şimdi bir an dur. Egzersiz bitti, ama sen hâlâ karakterin içindesin.',
        'Otur. Ayaklarını yere bas. Ağırlığını sandalyenin üzerinde hisset.',
        'Üç derin nefes al. Yavaş, derin, sayarak.',
        'Adını yüksek sesle söyle. Yaşını söyle. Bugünün tarihini söyle.',
        'Etrafına bak. Üç tane farklı renk gör. İki tane farklı ses duy. Bir tane bedensel duyum hisset.',
        'Su iç. Kalkmadan önce birkaç dakika öylece otur. Buraya tamamen geri dön.',
      ],
    },
    en: {
      etiket: 'Grounding · Exit',
      baslikH: 'Let the character go',
      altPre: '"',
      altPost: '" was deep work. Before returning to daily life, we do a brief grounding.',
      devam: 'Done · Continue',
      bitir: 'I am here ✓',
      adimlar: [
        'Pause for a moment now. The exercise is over, but you are still inside the character.',
        'Sit down. Place your feet on the floor. Feel your weight on the chair.',
        'Take three deep breaths. Slow, deep, counting.',
        "Say your name aloud. Say your age. Say today's date.",
        'Look around you. See three different colors. Hear two different sounds. Feel one bodily sensation.',
        'Drink water. Before getting up, just sit for a few minutes. Come fully back to here.',
      ],
    },
    de: {
      etiket: 'Erdung · Ausstieg',
      baslikH: 'Lass die Figur los',
      altPre: '„',
      altPost: '" war eine tiefe Arbeit. Bevor du ins tägliche Leben zurückkehrst, machen wir eine kurze Erdung.',
      devam: 'Erledigt · Weiter',
      bitir: 'Ich bin hier ✓',
      adimlar: [
        'Halte jetzt einen Augenblick inne. Die Übung ist vorbei, aber du bist noch in der Figur.',
        'Setz dich. Stell deine Füße auf den Boden. Spüre dein Gewicht auf dem Stuhl.',
        'Atme dreimal tief durch. Langsam, tief, zählend.',
        'Sag deinen Namen laut. Sag dein Alter. Sag das heutige Datum.',
        'Sieh dich um. Erkenne drei verschiedene Farben. Höre zwei verschiedene Geräusche. Spüre eine körperliche Empfindung.',
        'Trink Wasser. Bevor du aufstehst, sitz einfach ein paar Minuten. Komm ganz hierher zurück.',
      ],
    },
  };
  const L = T[dil] || T.tr;
  const adimlar = L.adimlar;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: '500px',
          width: '100%',
          backgroundColor: 'var(--bg-base)',
          border: '1px solid var(--onay-soft)',
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
              color: 'var(--onay-soft)',
              textTransform: 'uppercase',
            }}
          >
            {L.etiket}
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-display), serif',
              fontWeight: 300,
              fontSize: '1.6rem',
              color: 'var(--ink)',
              margin: 0,
            }}
          >
            {L.baslikH}
          </h3>
          {baslik && (
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 200,
                fontSize: '0.72rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {L.altPre}{baslik}{L.altPost}
            </p>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 200,
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: 'var(--onay-soft)',
              textTransform: 'uppercase',
            }}
          >
            {adim + 1} / {adimlar.length}
          </span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--rule)', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: '-1px',
                height: '3px',
                width: `${((adim + 1) / adimlar.length) * 100}%`,
                backgroundColor: 'var(--onay-soft)',
                transition: 'width 0.4s ease',
              }}
            />
          </div>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontSize: '1.05rem',
            color: 'var(--ink)',
            lineHeight: 1.9,
            margin: 0,
            minHeight: '4rem',
            textAlign: 'center',
          }}
        >
          {adimlar[adim]}
        </p>

        <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center' }}>
          {adim < adimlar.length - 1 ? (
            <button
              onClick={() => setAdim(adim + 1)}
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
              {L.devam}
            </button>
          ) : (
            <button
              onClick={onKapat}
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
              {L.bitir}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
