// app/antrenman/karakter/hamlet/page.js
// Karar 42 — Hamlet hub doğrudan el yazmasına yönlendirir (Willy'deki gibi).
//
// Eski dört-istasyon hub (Doğrular / Zaman Çizgisi / Yazarın Çerçevesi /
// Senin Çerçeven kartları + MikroBlokKart + KarsilayanBlok) birincil giriş
// olmaktan ÇIKTI. El yazması artık esas Hamlet karakter sayfası.
//
// Eski 4 alt route (oyun-oncesi-yasam · timeline · yazarin-cercevesi ·
// senin-cerceven) SİLİNMEDİ — doğrudan URL ile erişilebilir kalır. Tam
// kaldırma, el yazması canlıda doğrulanınca ayrı bir kararla.
//
// Server-side redirect: anında, flash yok, JS gerekmiyor.

import { redirect } from 'next/navigation';

export default function HamletHub() {
  redirect('/antrenman/karakter/hamlet/el-yazmasi');
}
