// =====================================================================
// app/lib/koc-veri.js — Coach (facilitator) veri katmanı
// Erişim modeli v1 (Beyti onayı, 10 Tem 2026): tek facilitator (Filiz) +
// Beyti admin; aktör↔koç ataması yok. Yetki: koc_rolleri tablosu + RLS
// facilitator SELECT policy (batarya_sonuclari) — migration:
// karar_coach_v1_rls. Rol ekleme yalnız SQL/servis tarafında (UI yok).
// Bu katman AKTÖR arayüzünde asla kullanılmaz.
// DOĞRULAMA İMZASI: ITC-KOCVERI-20260710
// =====================================================================

import { supabase } from './supabase';
import { LEGACY_ESLEME } from './batarya-kaydet';

// Oturumdaki kullanıcı facilitator/admin mi? Değilse null.
export async function kocRolum() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data } = await supabase
    .from('koc_rolleri')
    .select('rol')
    .eq('kullanici_id', user.id)
    .limit(1);
  return data?.[0]?.rol ?? null;
}

// Aktör listesi: intake vermiş herkes, en yeni intake başa. Ad = intake Q1
// (yoksa '—'); RLS gereği bu sorgu yalnız facilitator'da satır döndürür.
export async function kocAktorListesi() {
  const { data } = await supabase
    .from('batarya_sonuclari')
    .select('kullanici_id, yanitlar, created_at')
    .eq('modul', 'intake')
    .order('created_at', { ascending: false });
  const gorulen = new Set();
  const liste = [];
  for (const s of data ?? []) {
    if (gorulen.has(s.kullanici_id)) continue;
    gorulen.add(s.kullanici_id);
    liste.push({
      kullaniciId: s.kullanici_id,
      ad: s.yanitlar?.[1] ?? s.yanitlar?.['1'] ?? '—',
      intakeTarihi: (s.created_at || '').slice(0, 10),
    });
  }
  return liste;
}

// Tek aktörün çekirdek profili: kanonik slug başına EN SON satır
// (yanitlar + skorlar + tarih). Legacy slug'lar kanoniğe eşlenir.
// ↑↓ hareket işaretleri (§8 onayı bekliyor) için 'onceki' alanı da tutulur.
export async function kocProfilGetir(aktorId) {
  const CEKIRDEK = ['intake', 'type_lens', 'aps', 'emotional'];
  const legacyler = Object.entries(LEGACY_ESLEME)
    .filter(([, v]) => CEKIRDEK.includes(v))
    .map(([k]) => k);
  const { data } = await supabase
    .from('batarya_sonuclari')
    .select('modul, yanitlar, skorlar, created_at')
    .eq('kullanici_id', aktorId)
    .in('modul', [...CEKIRDEK, ...legacyler])
    .order('created_at', { ascending: true });
  const profil = {};
  for (const s of data ?? []) {
    const slug = LEGACY_ESLEME[s.modul] ?? s.modul;
    const onceki = profil[slug]
      ? { yanitlar: profil[slug].yanitlar, skorlar: profil[slug].skorlar, tarih: profil[slug].tarih }
      : null;
    profil[slug] = { yanitlar: s.yanitlar, skorlar: s.skorlar, tarih: (s.created_at || '').slice(0, 10), onceki };
  }
  return profil;
}
