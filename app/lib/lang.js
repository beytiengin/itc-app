'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const LangContext = createContext({ lang: 'tr', langAyarla: () => {} });

export function LangProvider({ children }) {
  const [lang, setLangState] = useState('tr');

  useEffect(() => {
    const aktif = document.documentElement.getAttribute('lang');
    if (aktif === 'tr' || aktif === 'en') {
      setLangState(aktif);
    }
  }, []);

  const langAyarla = useCallback((yeni) => {
    setLangState(yeni);
    try {
      localStorage.setItem('itc-lang', yeni);
    } catch (e) {}
    document.documentElement.setAttribute('lang', yeni);
  }, []);

  return (
    <LangContext.Provider value={{ lang, langAyarla }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

// Çeviri haritası yardımcısı: t({ tr: '...', en: '...' }, lang) → ilgili dil.
// EN yoksa TR'ye düşer; harita yoksa boş string.
export function t(map, lang) {
  if (!map) return '';
  return map[lang] ?? map.tr ?? map.en ?? '';
}
