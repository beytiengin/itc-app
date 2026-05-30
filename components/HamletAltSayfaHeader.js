// components/HamletAltSayfaHeader.js
// DEPRECATED (Karar P0 — ortak navigasyon): Üst çubuk artık global olarak
// components/Navigasyon.js'ten gelir (app/layout.js'e bağlı). Bu bileşen, 18
// alt sayfada çift header oluşmasın diye no-op'a indirildi. Eski import'lar
// kırılmasın diye default export korunur; ileride sayfalardan kaldırılabilir.

'use client';

export default function HamletAltSayfaHeader() {
  return null;
}
