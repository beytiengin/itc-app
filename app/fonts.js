import { Fraunces, Inter } from 'next/font/google';

// Adım 2-A — Tipografi geçişi (Karar 35).
// Cormorant Garamond → Fraunces (display): aynı sıcak serif ruhu, çağdaş.
// Jost → Inter (body): ince/soluk okunabilirlik sorununu çözer.
// Değişken adları (--font-display / --font-body) korundu; globals.css ve
// layout.js'e dokunmaya gerek yok. İtalik kullanımı değiştirilmedi —
// Fraunces'in kendi italic'i devreye girer (saf font değişimi).

// Fraunces: weight listesi veriyoruz (axes ile weight birlikte kullanılamaz —
// next/font validator kuralı; weight listesi optik boyutu otomatik yönetir).
export const cormorant = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

export const jost = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});
