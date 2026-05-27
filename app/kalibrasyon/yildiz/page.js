// app/kalibrasyon/yildiz/page.js
// Karar 36 — Yıldız Matrisi retire/arşiv. Beceri Haritası yerini aldı.
// yildiz_sonuclari tablosu arşiv (salt-okur). Tek lineer akış /kalibrasyon'da.

import { redirect } from 'next/navigation';

export default function YildizRedirect() {
  redirect('/kalibrasyon');
}
