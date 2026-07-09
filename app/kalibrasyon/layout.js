import { redirect } from 'next/navigation';

export const metadata = { title: 'Kalibrasyon · Modül I' };

// Karar 65 raf dönemi — eski kalibrasyon emekli edildi: /kalibrasyon/* → /batarya.
// Eski sayfa kodları tarihsel kayıt olarak yerinde durur; köprüler rafta.
export default function Layout() {
  redirect('/batarya');
}
