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

// STUDYO-RAY-DATA-B2
// beceri_sonuclari satırını getir (yoksa null → ray giriş seti gösterir).
// GERÇEK ŞEMA (kalibrasyon.js'den doğrulandı): user key = kullanici_id; sıralama
// kolonu = tarih (updated_at YOK); birden çok satır olabilir → en yenisi alınır.
// Uyarlama: ray'in mod kapısı (kisisellestirme.kalibrasyonVar) için `_kalibreVar`
// işaretlenir ve tohum tazelenmesi için `guncellemeZamani = tarih` eşlenir
// (BOYUTLAR henüz gerçek 7 grupla hizalı değil — bugün çeşitlilik modu).
export async function studyoProfilGetir(userId) {
  if (!userId) return null;
  const { data } = await supabase
    .from('beceri_sonuclari')
    .select('*')
    .eq('kullanici_id', userId)
    .order('tarih', { ascending: false })
    .limit(1)
    .maybeSingle();
  if (!data) return null;
  return { ...data, _kalibreVar: true, guncellemeZamani: data.tarih };
}

// Stüdyo'da tamamlanan etüt id'leri (ilerleme önceliği için; opsiyonel).
// GERÇEK KOLON (Faz A): tamamlanan_egzersizler.egzersiz_id (antrenman_id DEĞİL).
export async function studyoTamamlananlar(userId) {
  if (!userId) return [];
  const { data } = await supabase
    .from('tamamlanan_egzersizler')
    .select('egzersiz_id')
    .eq('kullanici_id', userId)
    .eq('karakter_id', 'studyo');
  return (data || []).map(r => r.egzersiz_id);
}
