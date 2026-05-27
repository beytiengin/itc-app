// app/kalibrasyon/vak/page.js
// Karar 36 — eski ayrı VAK sayfası retire. Tek lineer akış /kalibrasyon'da.
// Deep-link uyumu için redirect bırakıldı.

import { redirect } from 'next/navigation';

export default function VakRedirect() {
  redirect('/kalibrasyon');
}
