'use client';

// app/lib/dil.js
// ITC Actor's Gym — Dil (tr/en) context. theme.js deseninin birebir simetriği.
//
// Anti-flash: layout.js'deki inline `dilScript` <html> üzerine data-lang + lang
// attribute'unu React'ten ÖNCE basar. Bu provider mount'ta onu okur.
// Varsayılan: 'tr'. localStorage anahtarı: 'itc-lang'.

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const DilContext = createContext({ dil: 'tr', dilAyarla: () => {} });

export function DilProvider({ children }) {
  const [dil, setDilState] = useState('tr');

  useEffect(() => {
    const aktif = document.documentElement.getAttribute('data-lang');
    if (aktif === 'tr' || aktif === 'en') {
      setDilState(aktif);
    }
  }, []);

  const dilAyarla = useCallback((yeni) => {
    setDilState(yeni);
    try {
      localStorage.setItem('itc-lang', yeni);
    } catch (e) {}
    document.documentElement.setAttribute('data-lang', yeni);
    document.documentElement.setAttribute('lang', yeni);
  }, []);

  return (
    <DilContext.Provider value={{ dil, dilAyarla }}>
      {children}
    </DilContext.Provider>
  );
}

export const useDil = () => useContext(DilContext);

// Kısa yardımcı: sözlük nesnesinden aktif dili seç.
// Kullanım: const s = ceviri(willyI18n, dil); s.nav.kalibrasyon
export function ceviri(sozluk, dil) {
  return sozluk[dil] || sozluk.tr;
}
