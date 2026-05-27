// lib/kalibrasyon-kaydet.js — Kalibrasyon KAYIT katmanı (tek satır/kullanıcı)
// Karar 36 uyumlu. lib/kalibrasyon.js (okuma) ile aynı sistemi paylaşır:
//   - VAK baskın 'V' / 'A' / 'K' tek-harf kodla saklanır (vakDili() bu kodu bekler).
//   - Panksepp baskın = en aktif sistem anahtarı (pankseppYaklasimi() bunu okur).
// Yeni 3 tablo (kullanici_id UNIQUE) upsert; mevcut vak/arketip şema değişmeden tek satır.

import { supabase } from './supabase';

async function uid() {
  const { data } = await supabase.auth.getUser();
  return data?.user?.id ?? null;
}

// Şeması UNIQUE OLMAYAN tablolar (vak/arketip) için: varsa güncelle, yoksa ekle.
async function tekSatirYaz(tablo, kullanici_id, veri) {
  const { data: mevcut } = await supabase
    .from(tablo).select('id').eq('kullanici_id', kullanici_id)
    .order('tarih', { ascending: false }).limit(1).maybeSingle();
  if (mevcut?.id) return supabase.from(tablo).update(veri).eq('id', mevcut.id);
  return supabase.from(tablo).insert({ kullanici_id, ...veri });
}

// VAK grup adı -> tek-harf kod (vakDili() 'V'/'A'/'K' bekler).
const VAK_KOD = { 'Görsel': 'V', 'İşitsel': 'A', 'Kinestetik': 'K' };

// Panksepp skor objesi -> DB kolon değerleri + baskın sistem anahtarı.
function pankseppKolonlar(panksepp) {
  const kolon = {
    oyun:   panksepp.scores['Oyun · Play'].norm,
    ofke:   panksepp.scores['Öfke · Anger'].norm,
    arayis: panksepp.scores['Arayış · Seek'].norm,
    sefkat: panksepp.scores['Şefkat · Care'].norm,
    korku:  panksepp.scores['Korku · Fear'].norm,
    huzun:  panksepp.scores['Hüzün · Sadness'].norm,
  };
  // baskın = en yüksek normalize puanlı sistem (pankseppYaklasimi() bu anahtarı okur)
  const baskin = Object.entries(kolon).sort((a, b) => b[1] - a[1])[0][0];
  return { ...kolon, baskin };
}

/* ---- KAYDET ---- */
export async function kalibrasyonKaydet({ profil, vak, mbti, beceri, panksepp }) {
  const kullanici_id = await uid();
  if (!kullanici_id) throw new Error('Oturum yok');

  // Yeni tablolar: UNIQUE(kullanici_id) -> upsert
  const profilP = supabase.from('oyuncu_profili').upsert({
    kullanici_id,
    ad: profil.name ?? null,
    ulke: profil.country ?? null,
    sehir: profil.city ?? null,
    egitim: profil.edu ?? null,
    deneyim: profil.exp ?? null,
    deneyim_alanlari: profil.areas ?? [],
    en_sevdigi_rol: profil.favRole ?? null,
    son_guncelleme: new Date().toISOString(),
  }, { onConflict: 'kullanici_id' });

  const beceriP = supabase.from('beceri_sonuclari').upsert({
    kullanici_id,
    mesleki_guven: beceri.scores['Mesleki Güven'],
    teknik:        beceri.scores['Teknik'],
    zihinsel:      beceri.scores['Zihinsel'],
    duygusal:      beceri.scores['Duygusal'],
    motivasyonel:  beceri.scores['Motivasyonel'],
    rahatlama:     beceri.scores['Rahatlama'],
    iliskisel:     beceri.scores['İlişkisel'],
    genel_ortalama:
      Object.values(beceri.scores).reduce((a, b) => a + b, 0) /
      Object.values(beceri.scores).length,
    tarih: new Date().toISOString(),
  }, { onConflict: 'kullanici_id' });

  // Panksepp: 6 sistem + baskın anahtarı (baskin kolonu ALTER ile eklenmeli — migration sprint5)
  const pankP = supabase.from('panksepp_sonuclari').upsert({
    kullanici_id,
    ...pankseppKolonlar(panksepp),
    tarih: new Date().toISOString(),
  }, { onConflict: 'kullanici_id' });

  // Mevcut tablolar: şema değişmeden tek satır
  const vakP = tekSatirYaz('vak_sonuclari', kullanici_id, {
    gorsel:     vak.scores['Görsel'],
    isitsel:    vak.scores['İşitsel'],
    kinestetik: vak.scores['Kinestetik'],
    baskin: VAK_KOD[vak.dominant] ?? 'V', // 'V'/'A'/'K' — vakDili() uyumu
  });
  const arketipP = tekSatirYaz('arketip_sonuclari', kullanici_id, {
    tip: mbti.code,
    ad:  mbti.archetype?.tr ?? mbti.archetype?.en ?? null,
  });

  const results = await Promise.allSettled([profilP, beceriP, pankP, vakP, arketipP]);
  const hata = results.find((r) => r.status === 'rejected' || r.value?.error);
  if (hata) throw new Error('Kayıt sırasında hata: ' + JSON.stringify(hata.reason ?? hata.value?.error));
  return true;
}

/* ---- OKU (en son sonuçlar; not: ana okuma lib/kalibrasyon.js getKalibrasyonProfili) ---- */
export async function kalibrasyonOku() {
  const kullanici_id = await uid();
  if (!kullanici_id) return null;
  const son = (t, ts = 'tarih') =>
    supabase.from(t).select('*').eq('kullanici_id', kullanici_id)
      .order(ts, { ascending: false }).limit(1).maybeSingle();

  const [profil, vak, arketip, beceri, panksepp] = await Promise.all([
    son('oyuncu_profili', 'son_guncelleme'),
    son('vak_sonuclari'),
    son('arketip_sonuclari'),
    son('beceri_sonuclari'),
    son('panksepp_sonuclari'),
  ]);
  return {
    profil: profil.data, vak: vak.data, arketip: arketip.data,
    beceri: beceri.data, panksepp: panksepp.data,
  };
}
