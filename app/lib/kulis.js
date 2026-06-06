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
 * Bir karakterin TÜM boşluk yansımalarını (son_guncelleme dahil) tam kayıt
 * olarak getir. Kulis "Nerede Kaldın" için: timestamp gerekiyor.
 * @param {string} karakterId
 * @returns {Array<{bosluk_id, metin, son_guncelleme}>}
 */
export async function karakterBoslukYansimalariniTamGetir(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from('bosluk_yansimalari')
      .select('bosluk_id, metin, son_guncelleme')
      .eq('kullanici_id', user.id)
      .eq('karakter_id', karakterId)
      .not('metin', 'is', null)
      .neq('metin', '')
      .order('son_guncelleme', { ascending: false });

    if (error) return [];
    return data || [];
  } catch (e) {
    return [];
  }
}

/**
 * En son dokunulan karakter + düğüm. Açılış akıllı CTA için: tamamlanmış
 * kullanıcıyı son kaldığı noktaya götürür.
 *
 * Hem `bosluk_yansimalari` hem `antrenman_yansimalari` tablolarından en yeni
 * kaydı çeker, ikisinin son_guncelleme'sini karşılaştırır, en yenisinden
 * karakter + (sahne/boşluk no) çıkarır. Hash el-yazması derin link formatıdır
 * (#sahne-N / #bosluk-N — el-yazması sayfası bu hash'i zaten parse eder).
 *
 * @returns {Promise<{karakterId: string, hash: string} | null>}
 */
export async function enSonAktiviteGetir() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const [boslukRes, antrenmanRes] = await Promise.all([
      supabase
        .from('bosluk_yansimalari')
        .select('karakter_id, bosluk_id, son_guncelleme')
        .eq('kullanici_id', user.id)
        .not('metin', 'is', null)
        .neq('metin', '')
        .order('son_guncelleme', { ascending: false })
        .limit(1)
        .maybeSingle(),
      supabase
        .from('antrenman_yansimalari')
        .select('karakter_id, antrenman_id, son_guncelleme')
        .eq('kullanici_id', user.id)
        .not('metin', 'is', null)
        .neq('metin', '')
        .order('son_guncelleme', { ascending: false })
        .limit(1)
        .maybeSingle(),
    ]);

    const bosluk = boslukRes.data;
    const antrenman = antrenmanRes.data;
    if (!bosluk && !antrenman) return null;

    // En yenisini seç (her ikisi varsa karşılaştır).
    const boslukYeni = bosluk && (!antrenman || new Date(bosluk.son_guncelleme) >= new Date(antrenman.son_guncelleme));
    const kayit = boslukYeni ? bosluk : antrenman;
    const kaynak = boslukYeni ? 'bosluk' : 'sahne';

    let hash = '';
    if (kaynak === 'bosluk') {
      const m = kayit.bosluk_id?.match(/^elyazma-bosluk-(\d+)$/);
      if (m) hash = `#bosluk-${m[1]}`;
    } else {
      const m = kayit.antrenman_id?.match(/^elyazma-sahne-(\d+)$/);
      if (m) hash = `#sahne-${m[1]}`;
    }

    return { karakterId: kayit.karakter_id, hash };
  } catch (e) {
    return null;
  }
}

/**
 * Bir karakterin TÜM antrenman yansımalarını (tüm antrenmanIdleri) getir.
 * Kulis yeniden tasarımı (Nerede Kaldın bölümü) için: en yeni son_guncelleme
 * ile sıralanmış kayıtların hepsi.
 * @param {string} karakterId
 * @returns {Array<{antrenman_id, adim_no, metin, son_guncelleme}>}
 */
export async function karakterAntrenmanYansimalariniGetir(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from('antrenman_yansimalari')
      .select('antrenman_id, adim_no, metin, son_guncelleme')
      .eq('kullanici_id', user.id)
      .eq('karakter_id', karakterId)
      .order('son_guncelleme', { ascending: false });

    if (error) return [];
    return data || [];
  } catch (e) {
    return [];
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
 * sayfası için performans optimizasyonu).
 *
 * Hamlet refactor sonrası: Hamlet için boşluk sayımı yeni hibrit yapıdan
 * (bosluk_alt_soru_yansimalari) DISTINCT bosluk_no olarak gelir; max 5.
 * Diğer karakterler eski bosluk_yansimalari tablosundan sayılır.
 *
 * @returns {Promise<Object<string, {bosluk: number, antrenman: number}>>}
 */
export async function tumKarakterIlerlemeleri() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return {};

    const [bosluklarRes, antrenmanlarRes, hamletAltSoruRes] = await Promise.all([
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
      // Hamlet'in yeni hibrit yapısı için ayrı sorgu
      supabase
        .from('bosluk_alt_soru_yansimalari')
        .select('karakter_id, bosluk_no, yansima_metni')
        .eq('kullanici_id', user.id)
        .not('yansima_metni', 'is', null)
        .neq('yansima_metni', ''),
    ]);

    const sonuc = {};

    // Eski bosluk_yansimalari (Macbeth/Willy/Biff için)
    (bosluklarRes.data || []).forEach((b) => {
      if (b.karakter_id === 'hamlet') return; // Hamlet yeni tablodan sayılıyor
      if (!sonuc[b.karakter_id]) sonuc[b.karakter_id] = { bosluk: 0, antrenman: 0 };
      sonuc[b.karakter_id].bosluk++;
    });

    // Yeni bosluk_alt_soru_yansimalari — DISTINCT bosluk_no (Hamlet için)
    const hamletDokunulanBosluklar = new Set();
    (hamletAltSoruRes.data || []).forEach((r) => {
      if (r.karakter_id === 'hamlet') {
        hamletDokunulanBosluklar.add(r.bosluk_no);
      }
    });
    if (hamletDokunulanBosluklar.size > 0 || !sonuc.hamlet) {
      if (!sonuc.hamlet) sonuc.hamlet = { bosluk: 0, antrenman: 0 };
      sonuc.hamlet.bosluk = hamletDokunulanBosluklar.size;
    }

    (antrenmanlarRes.data || []).forEach((a) => {
      if (!sonuc[a.karakter_id]) sonuc[a.karakter_id] = { bosluk: 0, antrenman: 0 };
      sonuc[a.karakter_id].antrenman++;
    });

    return sonuc;
  } catch (e) {
    return {};
  }
}

// ─── ÖZNEL SABİTLER (an çatalı + yazma mührü) ───────────────────────────────
// Karar 41 viewer paritesi — sahne/olay içi "anlar[]" seçimlerini ve yazma
// mühürlerini saklar. Nina pilotuyla AYNI tablo (oznel_sabitler) ve aynı
// onConflict anahtarı: paylaşımlı; tüm karakterler (willy/hamlet/macbeth/biff)
// bu fonksiyonları kullanır. Yapısal şema (6 alan) korunur — metin-parse yok.

/**
 * Bir an çatalı seçimini veya yazma mührünü kaydeder (UPSERT).
 * @param {string} karakterId  - 'willy', 'hamlet', ...
 * @param {object} kayit       - { boslukNo, catalAnahtar, secilenDal, ozetMetni, muhurMetni, birlesimSahneNo }
 * @returns {boolean} başarılı mı (anonimde sessizce false)
 */
export async function anSabitiKaydet(karakterId, kayit) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false; // Anonim — lokal UI gösterir, kalıcı kayıt yok

    const { error } = await supabase.from('oznel_sabitler').upsert(
      {
        kullanici_id: user.id,
        karakter_id: karakterId,
        bosluk_no: kayit.boslukNo,
        catal_anahtar: kayit.catalAnahtar ?? kayit.boslukNo,
        secilen_dal: kayit.secilenDal ?? null,
        ozet_metni: kayit.ozetMetni ?? null,
        muhur_metni: kayit.muhurMetni ?? null,
        birlesim_sahne_no: kayit.birlesimSahneNo ?? null,
        son_guncelleme: new Date().toISOString(),
      },
      { onConflict: 'kullanici_id,karakter_id,bosluk_no,catal_anahtar' }
    );

    if (error) {
      console.log('anSabitiKaydet hatası:', error);
      return false;
    }
    return true;
  } catch (e) {
    console.log('anSabitiKaydet exception:', e);
    return false;
  }
}

/**
 * Bir karakterin tüm öznel sabitlerini getirir (an seçimleri + mühürler).
 * @param {string} karakterId
 * @returns {{ secimler: object, muhurler: object }}
 *   secimler: { [boslukNo]: 'A'|'B'|... }   — çatal dal seçimleri
 *   muhurler: { [boslukNo]: 'metin' }        — yazma mühürleri / oznelSabit
 */
export async function anSabitleriniGetir(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { secimler: {}, muhurler: {} };

    const { data, error } = await supabase
      .from('oznel_sabitler')
      .select('bosluk_no, secilen_dal, muhur_metni')
      .eq('kullanici_id', user.id)
      .eq('karakter_id', karakterId);

    if (error) {
      console.log('anSabitleriniGetir hatası:', error);
      return { secimler: {}, muhurler: {} };
    }

    const secimler = {};
    const muhurler = {};
    (data || []).forEach((row) => {
      if (row.secilen_dal) secimler[row.bosluk_no] = row.secilen_dal;
      if (row.muhur_metni) muhurler[row.bosluk_no] = row.muhur_metni;
    });
    return { secimler, muhurler };
  } catch (e) {
    console.log('anSabitleriniGetir exception:', e);
    return { secimler: {}, muhurler: {} };
  }
}

// ─── DEFTER: Verdiğin Kararlar ─────────────────────────────────────────────
// oznel_sabitler verisini karakter datasıyla eşleştirip okunur kararlar
// döndürür. Yeni tablo/kayıt YOK — sadece okuma. Geriye dönük uyumlu.
// Bağımlılık: anSabitleriniGetir (aynı dosya).
//
// Karakter datası dışarıdan verilir (TR base ya da willyIcerik/hamletIcerik
// EN/DE overlay'i — viewer'ın elindeki data). Helper ne import eder ne dil
// bilir.
//
// Sessiz veri kopmasına karşı koruma: an metadatası bulunamazsa karar yine
// listelenir (soru "" düşer, ham mühür metni korunur).

// Karakter datasındaki TÜM çatal/yazma anlarını tek havuzda toplar.
// anlar üç yerde geçer: oyunOncesi.olaylar[].anlar / sahnelerWorkbook[].anlar
// / boslukSet[].anlar. Ayrıca yürüyüş istasyon çatalları (sahne/boşluk
// yuruyus.istasyonlar[].catal) 'sahne-N' / 'bosluk-N' anahtarıyla indekslenir —
// viewer bunları bu anahtarla (bosluk_no) kaydeder.
//
// Her havuz girdisine `baglam` eklenir: { kaynak, baslik, no } — kararın hangi
// olay/sahne/boşluk için verildiğini Defter'de göstermek için.
function anHavuzuKur(data) {
  const havuz = {}; // { [anId]: { soru, tip, secenekler, baglam } }

  const ekle = (anlar, baglam) => {
    (anlar || []).forEach((an) => {
      if (!an || !an.id) return;
      havuz[an.id] = {
        soru: an.soru || '',
        tip: an.tip || 'catal',
        secenekler: an.secenekler || [],
        baglam,
      };
    });
  };

  // Yürüyüş istasyon çatallarını tek girdide topla (bosluk_no = 'sahne-N'/'bosluk-N').
  // Tüm istasyon çataлларının seçenekleri birleştirilir; deger → dal eşlenir ki
  // kararlariGetir secenek.baslik'i bulabilsin (yoksa "Seçim <deger>" fallback'i).
  const yuruyusEkle = (kapsayici, kaynak) => {
    const istasyonlar = kapsayici?.yuruyus?.istasyonlar || [];
    const secenekler = [];
    istasyonlar.forEach((ist) => {
      if (ist?.catal && Array.isArray(ist.catal.secenekler)) {
        ist.catal.secenekler.forEach((s) => {
          if (s && s.deger) secenekler.push({ dal: s.deger, baslik: s.baslik || '' });
        });
      }
    });
    if (secenekler.length === 0) return;
    havuz[`${kaynak}-${kapsayici.no}`] = {
      soru: '',
      tip: 'catal',
      secenekler,
      baglam: { kaynak, baslik: kapsayici.baslik || '', no: kapsayici.no },
    };
  };

  (data?.oyunOncesi?.olaylar || []).forEach((o) =>
    ekle(o.anlar, { kaynak: 'olay', baslik: o.baslik || '', no: o.no })
  );
  (data?.sahnelerWorkbook || []).forEach((s) => {
    ekle(s.anlar, { kaynak: 'sahne', baslik: s.baslik || '', no: s.no });
    yuruyusEkle(s, 'sahne');
  });
  (data?.boslukSet || []).forEach((b) => {
    ekle(b.anlar, { kaynak: 'bosluk', baslik: b.baslik || '', no: b.no });
    yuruyusEkle(b, 'bosluk');
  });

  return havuz;
}

// Defter için: karakterin TÜM anlarının sıralı sorularını döndürür (harita).
// VerdiginKararlar bileşeni bu listeyi tarayarak her an için ya hayalet
// (bekleyen) ya da dolu hâli çizer.
export function anHaritasiniGetir(data) {
  const havuz = anHavuzuKur(data);
  return Object.entries(havuz).map(([anId, an]) => ({
    anId, soru: an.soru, tip: an.tip,
  }));
}

/**
 * Defter'in "Verdiğin Kararlar" bölümü için kararları döndürür.
 *
 * @param {string} karakterId
 * @param {object} data  - karakter veri nesnesi (TR base veya i18n overlay)
 * @returns {Promise<{
 *   yorumlar: Array<{ anId: string, soru: string, secilenBaslik: string, dal: string }>,
 *   muhurler: Array<{ anId: string, soru: string, metin: string, tur: 'secim'|'yazma' }>,
 *   bos: boolean
 * }>}
 */
export async function kararlariGetir(karakterId, data) {
  const sonuc = { yorumlar: [], muhurler: [], bos: true };
  try {
    const { secimler, muhurler } = await anSabitleriniGetir(karakterId);
    const havuz = anHavuzuKur(data);

    // Yorumlar: çatal seçimleri (secilen_dal dolu olanlar)
    Object.entries(secimler || {}).forEach(([anId, dal]) => {
      const an = havuz[anId];
      const secenek = an?.secenekler?.find((s) => s.dal === dal);
      sonuc.yorumlar.push({
        anId,
        soru: an?.soru || '',
        secilenBaslik: secenek?.baslik || `Seçim ${dal}`,
        dal,
        baglam: an?.baglam || null,
      });
    });

    // Mühürler: seçilen dalın oznelSabit'i + oyuncunun yazdıkları
    Object.entries(muhurler || {}).forEach(([anId, metin]) => {
      if (!metin) return;
      const an = havuz[anId];
      const secilenDal = (secimler || {})[anId];
      const secenek = an?.secenekler?.find((s) => s.dal === secilenDal);
      const tur = an?.tip === 'yazma' || !secenek ? 'yazma' : 'secim';
      sonuc.muhurler.push({ anId, soru: an?.soru || '', metin, tur, baglam: an?.baglam || null });
    });

    sonuc.bos = sonuc.yorumlar.length === 0 && sonuc.muhurler.length === 0;
    return sonuc;
  } catch (e) {
    console.log('kararlariGetir exception:', e);
    return sonuc;
  }
}
