// STUDYO-ROUTE-A4 · STUDYO-ROUTE-C6
'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { studyoAcik } from '@/lib/flags';
import { supabase } from '@/app/lib/supabase';
import { tumEtutKarakterleri, etutGetir } from '@/data/studyo/etudler';
import { antrenmanGetir } from '@/data/studyo/antrenmanlar';
import { studyoTamamla, studyoVakKanali } from '@/lib/studyoKayit';
import StudyoEtut from '@/components/StudyoEtut';

// STUDYO-ROUTE-C6 — id çözümleme: önce dramaturji etüt havuzu, sonra antrenmanlar.
function etutBul(etudId) {
  for (const k of tumEtutKarakterleri()) {
    const e = etutGetir(k.id, etudId);
    if (e) return e;
  }
  return antrenmanGetir(etudId);
}

export default function StudyoEtutPage() {
  const [ok, setOk] = useState(null);
  const [vakKanal, setVakKanal] = useState(null);
  const router = useRouter();
  const params = useParams();
  const etudId = params?.etudId;

  useEffect(() => { setOk(studyoAcik()); }, []);

  // VAK kanalını sessizce yükle (stilVaryant için; kullanıcıya gösterilmez).
  useEffect(() => {
    let iptal = false;
    (async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) { const k = await studyoVakKanali(user.id); if (!iptal) setVakKanal(k); }
      } catch (e) {}
    })();
    return () => { iptal = true; };
  }, []);

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

  return <StudyoEtut etut={etut} onBitir={bitir} vakKanal={vakKanal} />;
}
