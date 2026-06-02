// app/antrenman/karakter/biff/page.js
// Karar 41 v2 — Hub doğrudan el yazmasına yönlendirir.
//
// Eski dört-istasyon hub (Doğrular / Zaman Çizgisi / Yazarın Çerçevesi /
// Senin Çerçeven kartları + MikroBlokKart + KarsilayanBlok) birincil giriş
// olmaktan ÇIKTI. El yazması artık esas karakter sayfası.
//
// Eski 4 alt route (oyun-oncesi-yasam · timeline · yazarin-cercevesi ·
// senin-cerceven) SİLİNMEDİ — doğrudan URL ile erişilebilir. Tam kaldırma,
// el yazması canlıda doğrulanınca ayrı bir kararla (Karar 41 v2 §1).
//
// Server-side redirect: anında, flash yok, JS gerekmiyor.

import { redirect } from 'next/navigation';

export default function BiffHub() {
  redirect('/antrenman/karakter/biff/el-yazmasi');
}
