// app/lib/kulis.js
// ITC Actor's Gym — Kulis veri katmanı
//
// Bu dosya Supabase'deki kulis tablolarına (tamamlanan_egzersizler,
// bosluk_yansimalari) yazma ve okuma fonksiyonlarını barındırır.
// Tüm kayıt mantığı tek yerde, böylece bileşenler temiz kalır.

import { supabase } from './supabase';

// ─── EGZERSİZLER ────────────────────────────────────────────────────────────

/**
 * Bir egzersizi tamamlandı olarak işaretle.
 * Aynı egzersiz daha önce tamamlanmışsa tarihi günceller (UPSERT).
 *
 * @param {string} karakterId  - 'macbeth', 'hamlet', 'willy', 'biff'
 * @param {string} egzersizId  - egzersiz objesindeki id
 * @returns {boolean} başarılı mı
 */
export async function egzersiziTamamla(karakterId, egzersizId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      // Anonim kullanıcı — kayıt yok ama hata da değil
      return false;
    }

    const { error } = await supabase
      .from('tamamlanan_egzersizler')
      .upsert(
        {
          kullanici_id: user.id,
          karakter_id: karakterId,
          egzersiz_id: egzersizId,
          tarih: new Date().toISOString(),
        },
        {
          onConflict: 'kullanici_id,karakter_id,egzersiz_id',
        }
      );

    if (error) {
      console.log('Egzersiz kayıt hatası:', error);
      return false;
    }
    return true;
  } catch (e) {
    console.log('Egzersiz kayıt exception:', e);
    return false;
  }
}

/**
 * Belirli bir karakterde tamamlanmış egzersizleri getirir.
 * @param {string} karakterId
 * @returns {string[]} egzersiz id listesi
 */
export async function tamamlananEgzersizleriGetir(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from('tamamlanan_egzersizler')
      .select('egzersiz_id')
      .eq('kullanici_id', user.id)
      .eq('karakter_id', karakterId);

    if (error) {
      console.log('Egzersiz okuma hatası:', error);
      return [];
    }
    return (data || []).map((r) => r.egzersiz_id);
  } catch (e) {
    return [];
  }
}

/**
 * Tüm karakterlerdeki tüm egzersiz tamamlamalarını getir.
 * Kulis sayfasında ileride kullanılacak.
 */
export async function tumTamamlananEgzersizleriGetir() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from('tamamlanan_egzersizler')
      .select('*')
      .eq('kullanici_id', user.id)
      .order('tarih', { ascending: false });

    if (error) return [];
    return data || [];
  } catch (e) {
    return [];
  }
}

// ─── BOŞLUK YANSIMALARI ─────────────────────────────────────────────────────

/**
 * Bir boşluğa yansıma yaz veya güncelle.
 * @param {string} karakterId
 * @param {string} boslukId
 * @param {string} metin  - oyuncunun yazdığı yansıma
 */
export async function boslukYansimasiKaydet(karakterId, boslukId, metin) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { error } = await supabase
      .from('bosluk_yansimalari')
      .upsert(
        {
          kullanici_id: user.id,
          karakter_id: karakterId,
          bosluk_id: boslukId,
          metin: metin,
        },
        {
          onConflict: 'kullanici_id,karakter_id,bosluk_id',
        }
      );

    if (error) {
      console.log('Boşluk kayıt hatası:', error);
      return false;
    }
    return true;
  } catch (e) {
    console.log('Boşluk kayıt exception:', e);
    return false;
  }
}

/**
 * Belirli bir karakterin tüm boşluk yansımalarını getir.
 * @returns {Object} {boslukId: metin, ...}
 */
export async function boslukYansimalariniGetir(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return {};

    const { data, error } = await supabase
      .from('bosluk_yansimalari')
      .select('bosluk_id, metin')
      .eq('kullanici_id', user.id)
      .eq('karakter_id', karakterId);

    if (error) return {};

    const sonuc = {};
    (data || []).forEach((r) => {
      sonuc[r.bosluk_id] = r.metin;
    });
    return sonuc;
  } catch (e) {
    return {};
  }
}

/**
 * Tüm karakterlerdeki tüm boşluk yansımalarını getir.
 * Kulis sayfasında kullanılacak.
 */
export async function tumBoslukYansimalariniGetir() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from('bosluk_yansimalari')
      .select('*')
      .eq('kullanici_id', user.id)
      .order('son_guncelleme', { ascending: false });

    if (error) return [];
    return data || [];
  } catch (e) {
    return [];
  }
}
