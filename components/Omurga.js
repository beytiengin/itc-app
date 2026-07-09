// components/Omurga.js
// Üç-modüllü omurga göstergesi: Kalibrasyon → Antrenman → Yolculuk.
// "Neredeyim" hissi — oyuncu her an yayın neresinde olduğunu görsün.
// Karar 39 (31 May 2026).
//
// Kanon kilitleri:
// - Yüzde/streak/dashboard YOK (psikolojik güvenlik — Karar 31 ruhu, prototip
//   araştırması).
// - "Aktivasyon" dili (Karar 34 view ilkesi): "geçildi/aktif/yakında", "tamamlandı/%X"
//   değil.
// - "Yolculuk" oyuncu-yüzü etiket (Karar 31: "AI" / "Dış Ses" arka uca ait).
// - Anonim kullanıcıda gizli — onun için Navigasyon yeterli.
//
// Durum kaynakları:
// - Kalibrasyon: bataryaDurumGetir() → çekirdek modüller
// - Antrenman: usePathname (basit; ileride karakter_ilerleme view eklenir)
// - Yolculuk: her zaman "Yakında" pasif

'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { supabase } from '../app/lib/supabase';
import { bataryaDurumGetir } from '../app/lib/batarya-kaydet';
import { useDil, ceviri } from '../app/lib/dil';
import chromeI18n from '../data/chrome-i18n';

export default function Omurga() {
  const { dil } = useDil();
  const t = ceviri(chromeI18n, dil).omurga;
  const pathname = usePathname() || '/';

  // undefined = auth çözülmedi; null = anonim (gizli); obje = üye (görünür)
  const [kullanici, setKullanici] = useState(undefined);
  const [profil, setProfil] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setKullanici(user || null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setKullanici(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!kullanici) { setProfil(null); return; }
    bataryaDurumGetir().then(setProfil);
  }, [kullanici]);

  // Anonim ve auth-belirsiz → gizli (Navigasyon yeterli).
  if (!kullanici) return null;

  // Hangi düğüm "aktif" (şu anki konum) — usePathname üstünden.
  function aktifDugum() {
    if (pathname.startsWith('/batarya')) return 'kalibrasyon';
    if (pathname.startsWith('/antrenman')) return 'antrenman';
    return null; // hub/profil/kulis vb. — hiçbir düğüm vurgulanmaz
  }

  const aktif = aktifDugum();
  // Karar 65: çekirdek = intake + type_lens + aps + emotional (v0.5 slug'ları).
  const CEKIRDEK_SLUGLAR = ['intake', 'type_lens', 'aps', 'emotional'];
  const kalibrasyonGecildi = !!(
    profil && !profil.girisYok && profil.moduller &&
    CEKIRDEK_SLUGLAR.every((m) => profil.moduller.has(m))
  );

  // "Yolculuk" daima yakında — Modül III açıldığında durum mantığı eklenecek.
  const dugumler = [
    {
      anahtar: 'kalibrasyon',
      etiket: t.kalibrasyon,
      durum: kalibrasyonGecildi ? 'gecildi' : (aktif === 'kalibrasyon' ? 'aktif' : 'bekliyor'),
    },
    {
      anahtar: 'antrenman',
      etiket: t.antrenman,
      durum: aktif === 'antrenman' ? 'aktif' : (kalibrasyonGecildi ? 'aktif-hazir' : 'bekliyor'),
    },
    {
      anahtar: 'yolculuk',
      etiket: t.yolculuk,
      durum: 'yakinda',
    },
  ];

  return (
    <nav
      aria-label={t.kalibrasyon + ' · ' + t.antrenman + ' · ' + t.yolculuk}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(0.6rem, 2.5vw, 1.5rem)',
        padding: '0.7rem 1.5rem',
        borderBottom: '1px solid var(--rule)',
        backgroundColor: 'var(--bg-base)',
        flexWrap: 'wrap',
      }}
    >
      {dugumler.map((d, i) => (
        <span
          key={d.anahtar}
          style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.6rem, 2.5vw, 1.5rem)' }}
        >
          <Dugum dugum={d} />
          {i < dugumler.length - 1 && <Cizgi gecildi={d.durum === 'gecildi'} />}
        </span>
      ))}
    </nav>
  );
}

function Dugum({ dugum }) {
  // Renkler durumdan: aktif/gecildi → accent · aktif-hazir → ink · bekliyor → ink-soft ·
  // yakinda → ink-muted (pasif).
  const renk = (() => {
    if (dugum.durum === 'aktif' || dugum.durum === 'gecildi') return 'var(--accent)';
    if (dugum.durum === 'aktif-hazir') return 'var(--ink)';
    if (dugum.durum === 'yakinda') return 'var(--ink-muted)';
    return 'var(--ink-soft)';
  })();

  return (
    <span
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '0.45rem',
        fontFamily: 'var(--font-body), sans-serif',
        fontWeight: 200,
        fontSize: '0.6rem',
        letterSpacing: '0.25em',
        color: renk,
        textTransform: 'uppercase',
        transition: 'color 0.3s ease',
      }}
    >
      <span style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: dugum.durum === 'aktif' ? 'var(--accent)' : 'transparent',
        border: `1px solid ${renk}`,
        display: 'inline-block',
        flexShrink: 0,
      }} aria-hidden />
      {dugum.etiket}
    </span>
  );
}

function Cizgi({ gecildi }) {
  return (
    <span
      aria-hidden
      style={{
        flexShrink: 0,
        width: 'clamp(20px, 6vw, 48px)',
        height: '1px',
        backgroundColor: gecildi ? 'var(--accent)' : 'var(--rule)',
        opacity: gecildi ? 0.6 : 1,
      }}
    />
  );
}
