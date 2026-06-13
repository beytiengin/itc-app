// ============================================================================
//  components/StudyoRay.js
//  Stüdyo · Kişiselleştirme Rayı · vitrin üstü şerit
//  Doğrulama imzası: STUDYO-RAY-VIEW-V1-20260613
// ----------------------------------------------------------------------------
//  İLKE 3: Hangi egzersizin neden seçildiği ASLA gösterilmez. Puan/streak yok.
//  StudyoVitrin'in en üstüne yerleşir. Tasarım tokenları globals'tan
//  (var(--accent) vb.); yeni token YOK. Tıklama mevcut etüt rotasına gider.
// ============================================================================
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { bugunSeti } from '@/data/studyo/kisisellestirme';
import { etudKarakterleri } from '@/data/studyo/etudler';
import { studyoProfilGetir, studyoTamamlananlar } from '@/lib/studyoKayit'; // bkz. Faz B talimatı

const TIP_AD = { 'bosluk-avi': 'Boşluk Avı', 'dogru-cikarim': 'Doğru / Çıkarım', 'kronoloji': 'Kronoloji' };

export default function StudyoRay({ userId }) {
  const router = useRouter();
  const [ray, setRay] = useState(null);

  useEffect(() => {
    let iptal = false;
    (async () => {
      let profil = null, tamamlananIds = [];
      try {
        if (userId) {
          profil = await studyoProfilGetir(userId);          // beceri_sonuclari satırı (yoksa null)
          tamamlananIds = await studyoTamamlananlar(userId);  // tamamlanan etüt id'leri (opsiyonel)
        }
      } catch (e) { /* sessiz: veri yoksa giriş seti gösterilir */ }
      if (iptal) return;
      setRay(bugunSeti({ etutKarakterleri, profil, tamamlananIds }));
    })();
    return () => { iptal = true; };
  }, [userId]);

  if (!ray || !ray.setler.length) return null;

  return (
    <section className="studyo-ray">
      <div className="ray-head">{ray.baslik}</div>
      <div className="ray-kartlar">
        {ray.setler.map(({ karakterId, karakterAd, etut }) => (
          <button
            key={etut.id}
            className="ray-kart"
            onClick={() => router.push(`/studyo/${etut.id}`)}
          >
            <span className="ray-tag">{TIP_AD[etut.tip] || etut.tip}</span>
            <span className="ray-baslik">{etut.baslik}</span>
            <span className="ray-alt">{karakterAd} · {etut.sure}</span>
          </button>
        ))}
      </div>
      {ray.yarinTazelenir && (
        <div className="ray-not">Bu set bugüne özel — yarın tazelenir.</div>
      )}

      <style jsx>{`
        .studyo-ray { margin: 4px 0 26px; }
        .ray-head {
          font-family: var(--font-display, 'Fraunces', serif);
          font-size: 18px; font-weight: 500; color: var(--ink, #ece6da);
          margin-bottom: 12px;
        }
        .ray-kartlar { display: flex; flex-direction: column; gap: 10px; }
        @media (min-width: 560px) { .ray-kartlar { flex-direction: row; } .ray-kart { flex: 1; } }
        .ray-kart {
          text-align: left; cursor: pointer;
          background: var(--accent-soft, rgba(201,169,110,.08));
          border: 1px solid var(--accent, #c9a96e);
          border-radius: 12px; padding: 15px 16px;
          display: flex; flex-direction: column; gap: 5px;
          transition: transform .12s ease, background .2s ease;
        }
        .ray-kart:hover { transform: translateY(-1px); }
        .ray-tag {
          font-size: 11px; letter-spacing: .08em; text-transform: uppercase;
          color: var(--accent, #c9a96e);
        }
        .ray-baslik {
          font-family: var(--font-display, 'Fraunces', serif);
          font-size: 17px; font-weight: 500; color: var(--ink, #ece6da);
        }
        .ray-alt { font-size: 13px; color: var(--ink-faint, #6f675a); }
        .ray-not { margin-top: 12px; font-size: 13px; color: var(--ink-faint, #6f675a); }
      `}</style>
    </section>
  );
}
