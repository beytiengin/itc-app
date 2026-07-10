// =====================================================================
// app/koc/page.js — Facilitator paneli (v1: tek facilitator + admin)
// Nav'a BAĞLI DEĞİL — doğrudan URL (/koc). Kapı: koc_rolleri (RLS).
// Rolsüz kullanıcı yalnız erişim-yok mesajı görür; RLS zaten satır
// döndürmez (savunma iki katmanlı: UI + policy).
// DOĞRULAMA İMZASI: ITC-KOCPANEL-20260710
// =====================================================================

'use client';

import { useEffect, useState } from 'react';
import { kocRolum, kocAktorListesi } from '../lib/koc-veri';
import CoachRaporu from '../../components/CoachRaporu';

const govde = { fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.86rem', lineHeight: 1.7, color: 'var(--ink-soft)' };

export default function KocPaneli() {
  const [durum, setDurum] = useState('yukleniyor'); // yukleniyor | yok | liste
  const [aktorler, setAktorler] = useState([]);
  const [secili, setSecili] = useState(null);

  useEffect(() => {
    (async () => {
      const rol = await kocRolum();
      if (!rol) { setDurum('yok'); return; }
      setAktorler(await kocAktorListesi());
      setDurum('liste');
    })();
  }, []);

  if (durum === 'yukleniyor') return <main style={{ maxWidth: 720, margin: '3rem auto', padding: '0 1.2rem' }}><p style={govde}>Loading…</p></main>;
  if (durum === 'yok') return <main style={{ maxWidth: 720, margin: '3rem auto', padding: '0 1.2rem' }}><p style={govde}>This area is for facilitators.</p></main>;

  return (
    <main style={{ maxWidth: 760, margin: '2.5rem auto 4rem', padding: '0 1.2rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
      {!secili ? (
        <>
          <h1 style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontWeight: 300, fontSize: '1.6rem', margin: 0, color: 'var(--ink)' }}>
            Facilitator — Actors
          </h1>
          {aktorler.length === 0 && <p style={govde}>No actors with an intake yet.</p>}
          {aktorler.map((a) => (
            <button key={a.kullaniciId} onClick={() => setSecili(a)}
              style={{ ...govde, textAlign: 'left', background: 'none', border: '1px solid var(--rule)', padding: '0.9rem 1rem', cursor: 'pointer', color: 'var(--ink)' }}>
              {a.ad} <span style={{ color: 'var(--ink-muted)', fontSize: '0.74rem' }}>· intake {a.intakeTarihi}</span>
            </button>
          ))}
        </>
      ) : (
        <CoachRaporu aktorId={secili.kullaniciId} aktorAd={secili.ad} onGeri={() => setSecili(null)} />
      )}
    </main>
  );
}
