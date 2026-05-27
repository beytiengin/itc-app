// app/kalibrasyon/arketip/page.js
// Karar 36 — eski ayrı Arketip sayfası retire. Tek lineer akış /kalibrasyon'da.
// Deep-link uyumu için redirect bırakıldı.

import { redirect } from 'next/navigation';

export default function ArketipRedirect() {
  redirect('/kalibrasyon');
}
