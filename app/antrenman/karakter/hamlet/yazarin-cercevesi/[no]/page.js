// app/antrenman/karakter/hamlet/yazarin-cercevesi/[no]/page.js
// IMZA: DE-ROUTE-CLOSE-01 — Karar 41 v2 §1: eski alt rota kapatıldı.
// El yazması canlıda doğrulandı; bu rota ana akıştan erişilemez ölü koddu.
// Server-side redirect → el yazması. (Çeviri yerine kapatma — ölü koda çeviri yapılmaz.)

import { redirect } from 'next/navigation';

export default function EskiRotaKapali() {
  redirect('/antrenman/karakter/hamlet/el-yazmasi');
}
