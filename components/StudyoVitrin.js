'use client';

// STUDYO-VITRIN-A3
// Stüdyo vitrini: dört kanat (pilotte yalnız Dramaturji dolu; Zihin/Beden/Gözlem
// "yakında" — dim). Dramaturji altında karakter → etüt listesi.
// tumEtutKarakterleri() + karakterEtudleri() kullanır. ZihinselAntrenman'a dokunmaz.

import { useEffect, useState } from 'react';
import { tumEtutKarakterleri, karakterEtudleri } from '@/data/studyo/etudler';
import { supabase } from '@/app/lib/supabase';
import StudyoRay from '@/components/StudyoRay'; // STUDYO-RAY-MOUNT-B4

const body = 'var(--font-body), sans-serif';
const display = 'var(--font-display), serif';

const KANATLAR = [
  { id: 'dramaturji', ad: 'Dramaturji', aktif: true, aciklama: 'Metnin söylediği, sustuğu ve gösterdiği sıra üzerine etütler.' },
  { id: 'zihin', ad: 'Zihin', aktif: false },
  { id: 'beden', ad: 'Beden', aktif: false },
  { id: 'gozlem', ad: 'Gözlem', aktif: false },
];

const TIP_ETIKET = {
  'bosluk-avi': 'Boşluk Avı',
  'dogru-cikarim': 'Doğru mu, Çıkarım mı?',
  'kronoloji': 'Önce Ne Oldu?',
};

export default function StudyoVitrin() {
  const karakterler = tumEtutKarakterleri();
  // STUDYO-RAY-MOUNT-B4 — userId: oturumsuzsa undefined → ray giriş seti gösterir.
  const [userId, setUserId] = useState(undefined);
  useEffect(() => {
    let iptal = false;
    supabase.auth.getUser().then(({ data: { user } }) => { if (!iptal) setUserId(user?.id); }).catch(() => {});
    return () => { iptal = true; };
  }, []);

  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '2.5rem 1.3rem 5rem', display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
      <header style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        <span style={{ fontFamily: body, fontWeight: 400, fontSize: '0.6rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--accent)' }}>Pilot · gizli</span>
        <h1 style={{ fontFamily: display, fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(2.2rem, 6vw, 3rem)', color: 'var(--ink)', margin: 0 }}>Stüdyo</h1>
        <p style={{ fontFamily: body, fontWeight: 300, fontSize: '1rem', lineHeight: 1.7, color: 'var(--ink-soft)', margin: 0, maxWidth: 560 }}>
          Kısa, karakter-bağımsız etütler. Tek bir rolü inşa etmek için değil — bakışını
          keskinleştirmek için. Puan yok, yarış yok; öğrenme gerekçede.
        </p>
      </header>

      {/* STUDYO-RAY-MOUNT-B4 — kişiselleştirme rayı, kanatların üstünde */}
      <StudyoRay userId={userId} />

      {/* Kanatlar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
        {KANATLAR.map((k) => (
          <span key={k.id} style={{
            fontFamily: body, fontWeight: 400, fontSize: '0.7rem', letterSpacing: '0.14em',
            textTransform: 'uppercase', padding: '0.5rem 0.95rem', borderRadius: 999,
            border: `1px solid ${k.aktif ? 'var(--accent)' : 'var(--rule)'}`,
            color: k.aktif ? 'var(--accent)' : 'var(--ink-muted)',
            opacity: k.aktif ? 1 : 0.55,
          }}>
            {k.ad}{k.aktif ? '' : ' · yakında'}
          </span>
        ))}
      </div>

      {/* Dramaturji içeriği */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
        {karakterler.map((kar) => {
          const etudler = karakterEtudleri(kar.id);
          return (
            <div key={kar.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <h2 style={{ fontFamily: display, fontStyle: 'italic', fontWeight: 300, fontSize: '1.5rem', color: 'var(--ink)', margin: 0 }}>{kar.ad}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {etudler.map((e) => (
                  <a key={e.id} href={`/studyo/${e.id}`} style={{
                    textDecoration: 'none', border: '1px solid var(--rule)', borderRadius: 8,
                    padding: '0.95rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem',
                    transition: 'border-color 0.2s ease',
                  }}>
                    <span style={{ fontFamily: body, fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)' }}>{TIP_ETIKET[e.tip] || e.tip}</span>
                    <span style={{ fontFamily: display, fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--ink)' }}>{e.baslik}</span>
                    <span style={{ fontFamily: body, fontWeight: 300, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>{e.seviye} · {e.sure}</span>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
