'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext({ tema: 'dark', temaAyarla: () => {} });

export function ThemeProvider({ children }) {
  const [tema, setTemaState] = useState('dark');

  useEffect(() => {
    const aktif = document.documentElement.getAttribute('data-theme');
    if (aktif === 'krem' || aktif === 'dark') {
      setTemaState(aktif);
    }
  }, []);

  const temaAyarla = useCallback((yeni) => {
    setTemaState(yeni);
    try {
      localStorage.setItem('itc-theme', yeni);
    } catch (e) {}
    document.documentElement.setAttribute('data-theme', yeni);
  }, []);

  return (
    <ThemeContext.Provider value={{ tema, temaAyarla }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
