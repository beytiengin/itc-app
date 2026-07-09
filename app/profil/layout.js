import { redirect } from 'next/navigation';

export const metadata = { title: 'Profil' };

// Karar 65 raf dönemi — /profil eski kalibrasyon sonuçlarını gösteriyordu;
// o görünüm sistemle birlikte emekli. Veri DB'de durur. Batarya özet görünümü
// ileride /batarya hub'ında yaşar.
export default function Layout() {
  redirect('/batarya');
}
