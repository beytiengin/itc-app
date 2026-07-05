'use client';

// STUDYO-FLAG-A1
// Stüdyo pilotu feature flag arkasında. Menüde görünmez; yalnızca env veya ?studyo=1.
export function studyoAcik(searchParams) {
  if (process.env.NEXT_PUBLIC_STUDYO === '1') return true;
  try {
    if (typeof window !== 'undefined') {
      const u = new URL(window.location.href);
      if (u.searchParams.get('studyo') === '1') {
        sessionStorage.setItem('studyo', '1');
      }
      return sessionStorage.getItem('studyo') === '1';
    }
  } catch (e) {}
  return false;
}

// BATARYA-FLAG (Karar 64 §6 — paralel faz)
// Actor Assessment Battery pilotu feature flag arkasında. Menüde görünmez;
// yalnızca env veya ?batarya=1. Eski /kalibrasyon switch koşullarına dek canlı.
export function bataryaAcik(searchParams) {
  if (process.env.NEXT_PUBLIC_BATARYA === '1') return true;
  try {
    if (typeof window !== 'undefined') {
      const u = new URL(window.location.href);
      if (u.searchParams.get('batarya') === '1') {
        sessionStorage.setItem('batarya', '1');
      }
      return sessionStorage.getItem('batarya') === '1';
    }
  } catch (e) {}
  return false;
}
