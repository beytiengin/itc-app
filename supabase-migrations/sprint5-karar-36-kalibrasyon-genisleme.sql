-- ITC Actor's Gym — Modül I Genişlemesi · Karar 36 Migration (Sprint 5)
-- ----------------------------------------------------------------------
-- 27 Mayıs 2026 · Beyti yapısal onaylı · FKA klinik onayı Haziran 2026 batch'i
-- Detay: decision-log/karar-36-beceri-panksepp-profil.md
--
-- Üç yeni tablo (UNIQUE kullanici_id, RLS açık) — Modül I'in dört testi + profil:
--   1. oyuncu_profili        — intake (ölçüm değil, silent register köprüsü)
--   2. beceri_sonuclari      — Yıldız'ın yerini alır (37 madde, 7 alan)
--   3. panksepp_sonuclari    — Duygu Haritası 6 sistem + baskın anahtarı
--
-- Mevcut tablolar (vak_sonuclari, arketip_sonuclari, yildiz_sonuclari) dokunulmaz.
-- yildiz_sonuclari arşiv: aktif profil okumaz; legacy yildizGucluZayif() korunur.
-- Migration idempotent: IF NOT EXISTS desenli, tekrar çalıştırmak güvenli.
-- ----------------------------------------------------------------------

-- ─── 1. Oyuncu Profili ──────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.oyuncu_profili (
  kullanici_id      uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  ad                text,
  ulke              text,
  sehir             text,
  egitim            text,
  deneyim           text,
  deneyim_alanlari  text[] NOT NULL DEFAULT '{}',
  en_sevdigi_rol    text,
  son_guncelleme    timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.oyuncu_profili ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "kendi profilini gor"  ON public.oyuncu_profili;
DROP POLICY IF EXISTS "kendi profilini yaz"  ON public.oyuncu_profili;
DROP POLICY IF EXISTS "kendi profilini guncelle" ON public.oyuncu_profili;

CREATE POLICY "kendi profilini gor"
  ON public.oyuncu_profili FOR SELECT
  USING (auth.uid() = kullanici_id);

CREATE POLICY "kendi profilini yaz"
  ON public.oyuncu_profili FOR INSERT
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi profilini guncelle"
  ON public.oyuncu_profili FOR UPDATE
  USING (auth.uid() = kullanici_id)
  WITH CHECK (auth.uid() = kullanici_id);

-- ─── 2. Beceri Sonuçları (Yıldız'ın yerini alır — 7 alan) ───────

CREATE TABLE IF NOT EXISTS public.beceri_sonuclari (
  kullanici_id    uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  mesleki_guven   numeric,
  teknik          numeric,
  zihinsel        numeric,
  duygusal        numeric,
  motivasyonel    numeric,
  rahatlama       numeric,
  iliskisel       numeric,
  genel_ortalama  numeric,
  tarih           timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.beceri_sonuclari ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "kendi beceri sonucunu gor"      ON public.beceri_sonuclari;
DROP POLICY IF EXISTS "kendi beceri sonucunu yaz"      ON public.beceri_sonuclari;
DROP POLICY IF EXISTS "kendi beceri sonucunu guncelle" ON public.beceri_sonuclari;

CREATE POLICY "kendi beceri sonucunu gor"
  ON public.beceri_sonuclari FOR SELECT
  USING (auth.uid() = kullanici_id);

CREATE POLICY "kendi beceri sonucunu yaz"
  ON public.beceri_sonuclari FOR INSERT
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi beceri sonucunu guncelle"
  ON public.beceri_sonuclari FOR UPDATE
  USING (auth.uid() = kullanici_id)
  WITH CHECK (auth.uid() = kullanici_id);

-- ─── 3. Panksepp Sonuçları (Duygu Haritası · 6 sistem + baskın) ─

CREATE TABLE IF NOT EXISTS public.panksepp_sonuclari (
  kullanici_id  uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  oyun          int,
  ofke          int,
  arayis        int,
  sefkat        int,
  korku         int,
  huzun         int,
  baskin        text,  -- 'oyun'|'ofke'|'arayis'|'sefkat'|'korku'|'huzun'
  tarih         timestamptz NOT NULL DEFAULT now()
);

-- baskin kolonu idempotent ekleme (canlıda tablo varsa ALTER yapılmış olabilir)
ALTER TABLE public.panksepp_sonuclari
  ADD COLUMN IF NOT EXISTS baskin text;

ALTER TABLE public.panksepp_sonuclari ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "kendi panksepp sonucunu gor"      ON public.panksepp_sonuclari;
DROP POLICY IF EXISTS "kendi panksepp sonucunu yaz"      ON public.panksepp_sonuclari;
DROP POLICY IF EXISTS "kendi panksepp sonucunu guncelle" ON public.panksepp_sonuclari;

CREATE POLICY "kendi panksepp sonucunu gor"
  ON public.panksepp_sonuclari FOR SELECT
  USING (auth.uid() = kullanici_id);

CREATE POLICY "kendi panksepp sonucunu yaz"
  ON public.panksepp_sonuclari FOR INSERT
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi panksepp sonucunu guncelle"
  ON public.panksepp_sonuclari FOR UPDATE
  USING (auth.uid() = kullanici_id)
  WITH CHECK (auth.uid() = kullanici_id);

-- ─── NOT ────────────────────────────────────────────────────────
--
-- Karar 21 mutlak: Hiçbir enstrüman sahne/içerik erişimini gate'lemez.
-- Karar 31 mutlak: profilRegister silent — kullanıcı 'erken/orta/usta' etiketini görmez.
-- yildiz_sonuclari tablosu RETIRE/ARŞİV — silinmez; legacy yildizGucluZayif() okur.
-- Eski sayfa /kalibrasyon/yildiz → /kalibrasyon redirect (Aşama C).
--
-- Panksepp Yol B karaktere-yaklaşım katmanı PROVISIONAL — FKA klinik onayı
-- Haziran 2026 batch'inde (K27 V-E + K28 V-B + K30 + K31 + K32 + K36 birlikte).
