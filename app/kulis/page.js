import { redirect } from 'next/navigation';

// Eski /kulis linkleri için kalıcı yönlendirme. Karar 33 ekosistem nezaketi:
// dışarıdan paylaşılmış linkler kopmasın.
export default function KulisRedirect() {
  redirect('/defter');
}
