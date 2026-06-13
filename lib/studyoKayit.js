'use client';

// STUDYO-KAYIT-A5
// Stüdyo, mevcut tablolara karakter_id='studyo' sentinel'iyle yazar (SIFIR migration).
//
// GERÇEK ŞEMA (app/lib/kulis.js'deki insert'lerden doğrulandı — spec'teki
// egzersiz_id/icerik tahminiydi, düzeltildi):
//   tamamlanan_egzersizler : kullanici_id, karakter_id, egzersiz_id, tarih
//       unique(kullanici_id, karakter_id, egzersiz_id)
//   antrenman_yansimalari  : kullanici_id, karakter_id, antrenman_id, adim_no,
//                            metin, son_guncelleme
//       unique(kullanici_id, karakter_id, antrenman_id, adim_no)
//
// insert yerine UPSERT: aynı etüt tekrar tamamlanırsa unique ihlali olmasın
// (mevcut kulis.js kalıbıyla aynı). Yanıtlar JSON olarak metin alanına yazılır;
// adim_no = 0 (tek blob). RLS kullanıcı-bazlı olduğu için sentinel ek politika
// gerektirmez.
import { supabase } from '@/app/lib/supabase';

const SENTINEL = 'studyo';

export async function studyoTamamla(userId, etudId, yanitlar) {
  if (!userId || !etudId) return false;
  const now = new Date().toISOString();

  const t1 = await supabase.from('tamamlanan_egzersizler').upsert(
    { kullanici_id: userId, karakter_id: SENTINEL, egzersiz_id: etudId, tarih: now },
    { onConflict: 'kullanici_id,karakter_id,egzersiz_id' }
  );
  if (t1.error) console.log('studyo tamamla (egzersiz) hatasi:', t1.error);

  const t2 = await supabase.from('antrenman_yansimalari').upsert(
    {
      kullanici_id: userId,
      karakter_id: SENTINEL,
      antrenman_id: etudId,
      adim_no: 0,
      metin: JSON.stringify(yanitlar ?? {}),
      son_guncelleme: now,
    },
    { onConflict: 'kullanici_id,karakter_id,antrenman_id,adim_no' }
  );
  if (t2.error) console.log('studyo tamamla (yansima) hatasi:', t2.error);

  return !t1.error && !t2.error;
}
