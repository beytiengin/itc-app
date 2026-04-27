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

// ─── ANTRENMAN YANSIMALARI (Zihinsel Antrenman adımları) ────────────────────
//
// `antrenman_yansimalari` tablosuna yazma/okuma. Her antrenman içinde adım
// adım ilerleyen yazma alanları olur — adim_no ile ayrılır.

/**
 * Bir antrenmanın belirli bir adımı için yansıma kaydet (UPSERT).
 * @param {string} karakterId
 * @param {string} antrenmanId
 * @param {number} adimNo
 * @param {string} metin
 * @returns {{veri?: any, hata?: string}}
 */
export async function antrenmanAdimiKaydet(karakterId, antrenmanId, adimNo, metin) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { hata: 'Giris yapilmamis' };

    const { data, error } = await supabase
      .from('antrenman_yansimalari')
      .upsert(
        {
          kullanici_id: user.id,
          karakter_id: karakterId,
          antrenman_id: antrenmanId,
          adim_no: adimNo,
          metin: metin,
          son_guncelleme: new Date().toISOString(),
        },
        {
          onConflict: 'kullanici_id,karakter_id,antrenman_id,adim_no',
        }
      );

    if (error) return { hata: error.message };
    return { veri: data };
  } catch (e) {
    return { hata: e?.message || 'Bilinmeyen hata' };
  }
}

/**
 * Bir antrenmanın tüm adımlarındaki yansımaları getir.
 * @param {string} karakterId
 * @param {string} antrenmanId
 * @returns {{yansimalar: Object<number, {metin: string, son_guncelleme: string}>, hata?: string}}
 */
export async function antrenmanYansimalariniGetir(karakterId, antrenmanId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { hata: 'Giris yapilmamis', yansimalar: {} };

    const { data, error } = await supabase
      .from('antrenman_yansimalari')
      .select('adim_no, metin, son_guncelleme')
      .eq('kullanici_id', user.id)
      .eq('karakter_id', karakterId)
      .eq('antrenman_id', antrenmanId)
      .order('adim_no', { ascending: true });

    if (error) return { hata: error.message, yansimalar: {} };

    const yansimalar = {};
    (data || []).forEach((y) => {
      yansimalar[y.adim_no] = { metin: y.metin, son_guncelleme: y.son_guncelleme };
    });

    return { yansimalar };
  } catch (e) {
    return { hata: e?.message || 'Bilinmeyen hata', yansimalar: {} };
  }
}

/**
 * Yarıda kalmış antrenman için son yazılmış adım numarasını getir.
 * Hiç yansıma yoksa 0 döner.
 * @param {string} karakterId
 * @param {string} antrenmanId
 * @returns {{sonAdim: number}}
 */
export async function antrenmanSonAdiminiGetir(karakterId, antrenmanId) {
  const { yansimalar, hata } = await antrenmanYansimalariniGetir(karakterId, antrenmanId);
  if (hata) return { sonAdim: 0 };

  const adimNumaralari = Object.keys(yansimalar).map(Number);
  if (adimNumaralari.length === 0) return { sonAdim: 0 };

  return { sonAdim: Math.max(...adimNumaralari) };
}

// ─── İLERLEME SAYIMLARI ─────────────────────────────────────────────────────
//
// Karakter listesi sayfası ve rozet gösterimleri için kişisel ilerleme.

/**
 * Bir karakter için yazılan boşluk sayısı (metni boş olmayan kayıtlar).
 * @param {string} karakterId
 * @returns {Promise<number>}
 */
export async function karakterBoslukSayisi(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return 0;

    const { count, error } = await supabase
      .from('bosluk_yansimalari')
      .select('*', { count: 'exact', head: true })
      .eq('kullanici_id', user.id)
      .eq('karakter_id', karakterId)
      .not('metin', 'is', null)
      .neq('metin', '');

    if (error) return 0;
    return count || 0;
  } catch (e) {
    return 0;
  }
}

/**
 * Bir karakter için tamamlanan antrenman sayısı.
 * @param {string} karakterId
 * @returns {Promise<number>}
 */
export async function karakterAntrenmanSayisi(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return 0;

    const { count, error } = await supabase
      .from('tamamlanan_egzersizler')
      .select('*', { count: 'exact', head: true })
      .eq('kullanici_id', user.id)
      .eq('karakter_id', karakterId);

    if (error) return 0;
    return count || 0;
  } catch (e) {
    return 0;
  }
}

/**
 * Tüm karakterler için ilerleme bilgisini tek seferde getir (karakter listesi
 * sayfası için performans optimizasyonu — 4 ayrı sorgu yerine 2).
 * @returns {Promise<Object<string, {bosluk: number, antrenman: number}>>}
 */
export async function tumKarakterIlerlemeleri() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return {};

    const [bosluklarRes, antrenmanlarRes] = await Promise.all([
      supabase
        .from('bosluk_yansimalari')
        .select('karakter_id, metin')
        .eq('kullanici_id', user.id)
        .not('metin', 'is', null)
        .neq('metin', ''),
      supabase
        .from('tamamlanan_egzersizler')
        .select('karakter_id')
        .eq('kullanici_id', user.id),
    ]);

    const sonuc = {};
    (bosluklarRes.data || []).forEach((b) => {
      if (!sonuc[b.karakter_id]) sonuc[b.karakter_id] = { bosluk: 0, antrenman: 0 };
      sonuc[b.karakter_id].bosluk++;
    });
    (antrenmanlarRes.data || []).forEach((a) => {
      if (!sonuc[a.karakter_id]) sonuc[a.karakter_id] = { bosluk: 0, antrenman: 0 };
      sonuc[a.karakter_id].antrenman++;
    });

    return sonuc;
  } catch (e) {
    return {};
  }
}
