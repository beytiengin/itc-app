// STUDYO-ROUTE-A4
'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { studyoAcik } from '@/lib/flags';
import { supabase } from '@/app/lib/supabase';
import { tumEtutKarakterleri, etutGetir } from '@/data/studyo/etudler';
import { studyoTamamla } from '@/lib/studyoKayit';
import StudyoEtut from '@/components/StudyoEtut';

// etudId tek başına gelir; karakteri etütler havuzunu tarayarak buluruz
// (etudler.js'e dokunmadan — id'ler benzersiz).
function etutBul(etudId) {
  for (const k of tumEtutKarakterleri()) {
    const e = etutGetir(k.id, etudId);
    if (e) return e;
  }
  return null;
}

export default function StudyoEtutPage() {
  const [ok, setOk] = useState(null);
  const router = useRouter();
  const params = useParams();
  const etudId = params?.etudId;

  useEffect(() => { setOk(studyoAcik()); }, []);
  if (ok === null) return null;
  if (!ok) { router.replace('/'); return null; }

  const etut = etudId ? etutBul(etudId) : null;
  if (!etut) { router.replace('/studyo'); return null; }

  async function bitir(yanitlar) {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) await studyoTamamla(user.id, etut.id, yanitlar);
    } catch (e) {}
    router.push('/studyo');
  }

  return <StudyoEtut etut={etut} onBitir={bitir} />;
}
