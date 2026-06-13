'use client';

// STUDYO-VITRIN-A3
// Stüdyo vitrini: dört kanat (pilotte yalnız Dramaturji dolu; Zihin/Beden/Gözlem
// "yakında" — dim). Dramaturji altında karakter → etüt listesi.
// tumEtutKarakterleri() + karakterEtudleri() kullanır. ZihinselAntrenman'a dokunmaz.

import { useEffect, useState } from 'react';
import { tumEtutKarakterleri, karakterEtudleri } from '@/data/studyo/etudler';
import { kanatIstasyonlari, kanatAdi } from '@/data/studyo/antrenmanlar'; // STUDYO-VITRIN-KANAT-C4
import { supabase } from '@/app/lib/supabase';
import StudyoRay from '@/components/StudyoRay'; // STUDYO-RAY-MOUNT-B4

const body = 'var(--font-body), sans-serif';
const display = 'var(--font-display), serif';

const KANATLAR = [
  { id: 'dramaturji', ad: 'Dramaturji', aktif: true, aciklama: 'Metnin söylediği, sustuğu ve gösterdiği sıra üzerine etütler.' },
  { id: 'zihin', ad: 'Zihin', aktif: true }, // STUDYO-VITRIN-KANAT-C4
  { id: 'beden', ad: 'Beden', aktif: true }, // STUDYO-VITRIN-KANAT-C4
  { id: 'gozlem', ad: 'Gözlem', aktif: false },
];

// STUDYO-VITRIN-KANAT-C4 — antrenman kanadı (Zihin/Beden) için kart şeridi.
const kartStili = {
  textDecoration: 'none', border: '1px solid var(--rule)', borderRadius: 8,
  padding: '0.95rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem',
};
const kartEyebrow = { fontFamily: body, fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)' };
const kartBaslik = { fontFamily: display, fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--ink)' };
const kartAlt = { fontFamily: body, fontWeight: 300, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)' };

const TIP_ETIKET = {
  'bosluk-avi': 'Boşluk Avı',
  'dogru-cikarim': 'Doğru mu, Çıkarım mı?',
  'kronoloji': 'Önce Ne Oldu?',
};

// STUDYO-VITRIN-NEDIR — "Stüdyo nedir?" açıklayıcı: 4 soru, hero ile kanatlar arası.
const ACIKLAYICI = [
  {
    soru: 'Stüdyo nedir?',
    cevap: 'Karakter çalışmandan bağımsız, oyunculuk enstrümanını çalıştırdığın kişisel alan. Tek bir rolü inşa etmek için değil; bakışını, dikkatini ve bedenini keskin tutmak için.',
  },
  {
    soru: 'Burada ne yapılır?',
    cevap: 'Üç kanatta kısa çalışmalar: Zihin (nefes, odak, imgeleme, blokaj, topraklanma), Beden (beden haritası, kas gevşetme) ve Dramaturji (metnin söylediğini, sustuğunu ve gösterdiği sırayı çözmek). Her biri 5–12 dakika, tek başına.',
  },
  {
    soru: 'Kimin için?',
    cevap: 'Bir rol provasında olsun ya da olmasın, enstrümanını düzenli tutmak isteyen her oyuncu için. Deneyim şartı yok; puan, seviye, yarış yok.',
  },
  {
    soru: 'Nasıl başlarım?',
    cevap: 'Yukarıdaki "Bugünkü antrenmanın" kartlarından biriyle başla — kalibrasyonun varsa sana göre seçilir. Ya da aşağıdan bir kanat seçip istediğin istasyona gir. İstediğin an bırakır, ertesi gün dönersin.',
  },
];

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
        <h1 style={{ fontFamily: display, fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(2.2rem, 6vw, 3rem)', color: 'var(--ink)', margin: 0 }}>ITC Stüdyo</h1>
        <p style={{ fontFamily: display, fontStyle: 'italic', fontWeight: 300, fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--ink-soft)', margin: 0, maxWidth: 560 }}>
          Oyuncunun karakter çalışmasını kalibre ettiği kişisel alan.
        </p>
      </header>

      {/* STUDYO-RAY-MOUNT-B4 — kişiselleştirme rayı, hero'nun hemen altında */}
      <StudyoRay userId={userId} />

      {/* STUDYO-VITRIN-NEDIR — açıklayıcı: ne / ne yapılır / kim / nasıl */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem', borderTop: '1px solid var(--rule)', paddingTop: '1.8rem' }}>
        {ACIKLAYICI.map((m) => (
          <div key={m.soru} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <h2 style={{ fontFamily: display, fontStyle: 'italic', fontWeight: 300, fontSize: '1.25rem', color: 'var(--ink)', margin: 0 }}>{m.soru}</h2>
            <p style={{ fontFamily: body, fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--ink-soft)', margin: 0, maxWidth: 600 }}>{m.cevap}</p>
          </div>
        ))}
      </section>

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

      {/* STUDYO-VITRIN-KANAT-C4 — Zihin & Beden kanatları (antrenman istasyonları) */}
      {['zihin', 'beden'].map((kanat) => (
        <section key={kanat} style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
          <h2 style={{ fontFamily: display, fontStyle: 'italic', fontWeight: 300, fontSize: '1.7rem', color: 'var(--accent)', margin: 0 }}>{kanatAdi(kanat)}</h2>
          {kanatIstasyonlari(kanat).map((ist) => (
            <div key={ist.istasyon} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <h3 style={{ fontFamily: body, fontWeight: 400, fontSize: '0.62rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--ink-soft)', margin: 0 }}>{ist.istasyonAd}</h3>
              {ist.egzersizler.map((e) => (
                <a key={e.id} href={`/studyo/${e.id}`} style={kartStili}>
                  <span style={kartEyebrow}>{ist.istasyonAd}</span>
                  <span style={kartBaslik}>{e.baslik}</span>
                  <span style={kartAlt}>{e.seviye} · {e.sure}</span>
                </a>
              ))}
            </div>
          ))}
        </section>
      ))}

      {/* Dramaturji içeriği — karakter tabanlı; bilinçli olarak EN SONDA */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          <h2 style={{ fontFamily: display, fontStyle: 'italic', fontWeight: 300, fontSize: '1.7rem', color: 'var(--accent)', margin: 0 }}>Dramaturji</h2>
          <p style={{ fontFamily: body, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--ink-muted)', margin: 0, maxWidth: 560 }}>
            Klasik karakterler burada birer rol değil, ortak malzeme: metni okuma kasını onların üzerinde çalıştırırsın.
          </p>
        </div>
        {karakterler.map((kar) => {
          const etudler = karakterEtudleri(kar.id);
          return (
            <div key={kar.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <h3 style={{ fontFamily: display, fontStyle: 'italic', fontWeight: 300, fontSize: '1.5rem', color: 'var(--ink)', margin: 0 }}>{kar.ad}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {etudler.map((e) => (
                  <a key={e.id} href={`/studyo/${e.id}`} style={kartStili}>
                    <span style={kartEyebrow}>{TIP_ETIKET[e.tip] || e.tip}</span>
                    <span style={kartBaslik}>{e.baslik}</span>
                    <span style={kartAlt}>{e.seviye} · {e.sure}</span>
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
