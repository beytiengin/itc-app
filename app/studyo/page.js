// STUDYO-ROUTE-A4
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { studyoAcik } from '@/lib/flags';
import StudyoVitrin from '@/components/StudyoVitrin';

export default function StudyoPage() {
  const [ok, setOk] = useState(null);
  const router = useRouter();
  useEffect(() => { setOk(studyoAcik()); }, []);
  if (ok === null) return null;
  if (!ok) { router.replace('/'); return null; }
  return <StudyoVitrin />;
}
