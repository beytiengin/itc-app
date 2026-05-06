// app/lib/hamlet-veri.js
// ITC Actor's Gym — Modül II Hamlet Refactor · Sprint 1 veri katmanı
//
// Üç tablo için okuma/yazma fonksiyonları:
//   - oyun_oncesi_olay_yansimalari
//   - oyun_oncesi_iliski_yansimalari
//   - sahne_yansimalari
//
// Mevcut kulis.js'deki desenle aynı çalışır: UPSERT mantığı, sessiz hata yönetimi.

import { supabase } from './supabase';

// ─── OYUN ÖNCESİ · OLAYLAR ──────────────────────────────────────────────────

export async function olayYansimasiKaydet(karakterId, olayNo, alanlar) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const kayit = {
      kullanici_id: user.id,
      karakter_id: karakterId,
      olay_no: olayNo,
      son_guncelleme: new Date().toISOString(),
    };
    if (alanlar.metin !== undefined) kayit.yansima_metni = alanlar.metin;
    if (alanlar.icselKabul !== undefined) kayit.icsel_kabul = alanlar.icselKabul;

    const { error } = await supabase
      .from('oyun_oncesi_olay_yansimalari')
      .upsert(kayit, { onConflict: 'kullanici_id,karakter_id,olay_no' });

    if (error) {
      console.log('Olay yansıma kayıt hatası:', error);
      return false;
    }
    return true;
  } catch (e) {
    console.log('Olay yansıma kayıt exception:', e);
    return false;
  }
}

export async function olayYansimalariniGetir(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return {};

    const { data, error } = await supabase
      .from('oyun_oncesi_olay_yansimalari')
      .select('olay_no, yansima_metni, icsel_kabul')
      .eq('kullanici_id', user.id)
      .eq('karakter_id', karakterId);

    if (error) return {};

    const sonuc = {};
    (data || []).forEach((r) => {
      sonuc[r.olay_no] = {
        metin: r.yansima_metni || '',
        icselKabul: r.icsel_kabul || false,
      };
    });
    return sonuc;
  } catch (e) {
    return {};
  }
}

// ─── OYUN ÖNCESİ · İLİŞKİLER ────────────────────────────────────────────────

export async function iliskiYansimasiKaydet(karakterId, iliskiNo, alanlar) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const kayit = {
      kullanici_id: user.id,
      karakter_id: karakterId,
      iliski_no: iliskiNo,
      son_guncelleme: new Date().toISOString(),
    };
    if (alanlar.metin !== undefined) kayit.yansima_metni = alanlar.metin;
    if (alanlar.tanidi !== undefined) kayit.tanidi = alanlar.tanidi;

    const { error } = await supabase
      .from('oyun_oncesi_iliski_yansimalari')
      .upsert(kayit, { onConflict: 'kullanici_id,karakter_id,iliski_no' });

    if (error) {
      console.log('İlişki yansıma kayıt hatası:', error);
      return false;
    }
    return true;
  } catch (e) {
    console.log('İlişki yansıma kayıt exception:', e);
    return false;
  }
}

export async function iliskiYansimalariniGetir(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return {};

    const { data, error } = await supabase
      .from('oyun_oncesi_iliski_yansimalari')
      .select('iliski_no, yansima_metni, tanidi')
      .eq('kullanici_id', user.id)
      .eq('karakter_id', karakterId);

    if (error) return {};

    const sonuc = {};
    (data || []).forEach((r) => {
      sonuc[r.iliski_no] = {
        metin: r.yansima_metni || '',
        tanidi: r.tanidi || false,
      };
    });
    return sonuc;
  } catch (e) {
    return {};
  }
}

// ─── YAZARIN ÇERÇEVESİ · TERCİH SEÇİMLERİ ──────────────────────────────────

export async function tercihKaydet(karakterId, tercihNo, alanlar) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const kayit = {
      kullanici_id: user.id,
      karakter_id: karakterId,
      tercih_no: tercihNo,
      son_guncelleme: new Date().toISOString(),
    };
    if (alanlar.secimler !== undefined) kayit.secimler = alanlar.secimler;
    if (alanlar.ozelYorum !== undefined) kayit.ozel_yorum = alanlar.ozelYorum;
    if (alanlar.sentezCumle !== undefined) kayit.sentez_cumle = alanlar.sentezCumle;

    const { error } = await supabase
      .from('yazarin_cercevesi_secimler')
      .upsert(kayit, { onConflict: 'kullanici_id,karakter_id,tercih_no' });

    if (error) {
      console.log('Tercih kayıt hatası:', error);
      return false;
    }
    return true;
  } catch (e) {
    console.log('Tercih kayıt exception:', e);
    return false;
  }
}

export async function tercihleriGetir(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return {};

    const { data, error } = await supabase
      .from('yazarin_cercevesi_secimler')
      .select('tercih_no, secimler, ozel_yorum, sentez_cumle')
      .eq('kullanici_id', user.id)
      .eq('karakter_id', karakterId);

    if (error) return {};

    const sonuc = {};
    (data || []).forEach((r) => {
      sonuc[r.tercih_no] = {
        secimler: r.secimler || [],
        ozelYorum: r.ozel_yorum || '',
        sentezCumle: r.sentez_cumle || '',
      };
    });
    return sonuc;
  } catch (e) {
    return {};
  }
}

// ─── SENİN ÇERÇEVEN · ALT-SORU YANSIMALARI ─────────────────────────────────

export async function altSoruYansimasiKaydet(karakterId, boslukNo, altSoruNo, alanlar) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const kayit = {
      kullanici_id: user.id,
      karakter_id: karakterId,
      bosluk_no: boslukNo,
      alt_soru_no: altSoruNo,
      son_guncelleme: new Date().toISOString(),
    };
    if (alanlar.metin !== undefined) kayit.yansima_metni = alanlar.metin;
    if (alanlar.acildi !== undefined) kayit.acildi = alanlar.acildi;

    const { error } = await supabase
      .from('bosluk_alt_soru_yansimalari')
      .upsert(kayit, { onConflict: 'kullanici_id,karakter_id,bosluk_no,alt_soru_no' });

    if (error) {
      console.log('Alt soru kayıt hatası:', error);
      return false;
    }
    return true;
  } catch (e) {
    console.log('Alt soru kayıt exception:', e);
    return false;
  }
}

export async function altSoruYansimalariniGetir(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return {};

    const { data, error } = await supabase
      .from('bosluk_alt_soru_yansimalari')
      .select('bosluk_no, alt_soru_no, yansima_metni, acildi')
      .eq('kullanici_id', user.id)
      .eq('karakter_id', karakterId);

    if (error) return {};

    const sonuc = {};
    (data || []).forEach((r) => {
      if (!sonuc[r.bosluk_no]) sonuc[r.bosluk_no] = {};
      sonuc[r.bosluk_no][r.alt_soru_no] = {
        metin: r.yansima_metni || '',
        acildi: r.acildi || false,
      };
    });
    return sonuc;
  } catch (e) {
    return {};
  }
}

// ─── SENİN ÇERÇEVEN · BOŞLUK GENEL METİN ────────────────────────────────────

export async function boslukGenelMetinKaydet(karakterId, boslukNo, metin) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { error } = await supabase
      .from('bosluk_genel_metin')
      .upsert(
        {
          kullanici_id: user.id,
          karakter_id: karakterId,
          bosluk_no: boslukNo,
          genel_metin: metin,
          son_guncelleme: new Date().toISOString(),
        },
        { onConflict: 'kullanici_id,karakter_id,bosluk_no' }
      );

    if (error) {
      console.log('Boşluk genel metin kayıt hatası:', error);
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}

export async function boslukGenelMetinleriGetir(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return {};

    const { data, error } = await supabase
      .from('bosluk_genel_metin')
      .select('bosluk_no, genel_metin')
      .eq('kullanici_id', user.id)
      .eq('karakter_id', karakterId);

    if (error) return {};

    const sonuc = {};
    (data || []).forEach((r) => {
      sonuc[r.bosluk_no] = r.genel_metin || '';
    });
    return sonuc;
  } catch (e) {
    return {};
  }
}

// ─── TIMELINE · SAHNE YANSIMALARI ───────────────────────────────────────────

export async function sahneYansimasiKaydet(karakterId, sahneNo, alanlar) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const kayit = {
      kullanici_id: user.id,
      karakter_id: karakterId,
      sahne_no: sahneNo,
      son_guncelleme: new Date().toISOString(),
    };
    if (alanlar.sicaklik !== undefined) kayit.oyuncu_sicaklik = alanlar.sicaklik;
    if (alanlar.metin !== undefined) kayit.yansima_metni = alanlar.metin;
    if (alanlar.anladi !== undefined) kayit.anladi = alanlar.anladi;

    const { error } = await supabase
      .from('sahne_yansimalari')
      .upsert(kayit, { onConflict: 'kullanici_id,karakter_id,sahne_no' });

    if (error) {
      console.log('Sahne yansıma kayıt hatası:', error);
      return false;
    }
    return true;
  } catch (e) {
    console.log('Sahne yansıma kayıt exception:', e);
    return false;
  }
}

export async function sahneYansimalariniGetir(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return {};

    const { data, error } = await supabase
      .from('sahne_yansimalari')
      .select('sahne_no, oyuncu_sicaklik, yansima_metni, anladi')
      .eq('kullanici_id', user.id)
      .eq('karakter_id', karakterId);

    if (error) return {};

    const sonuc = {};
    (data || []).forEach((r) => {
      sonuc[r.sahne_no] = {
        sicaklik: r.oyuncu_sicaklik ?? null,
        metin: r.yansima_metni || '',
        anladi: r.anladi || false,
      };
    });
    return sonuc;
  } catch (e) {
    return {};
  }
}
