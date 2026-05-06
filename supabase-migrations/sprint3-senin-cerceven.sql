-- ITC Actor's Gym — Modül II Hamlet Refactor · Sprint 3 Migration
-- ----------------------------------------------------------------
-- Senin Çerçeven · 5 Boşluk + 15 Alt-Soru için tablolar.
--
-- ÖNEMLİ: Eski `bosluk_yansimalari` tablosu KORUNUYOR — eski Senin Çerçeven
-- (12 alanlı) sayfası onu kullanmaya devam ediyor. Yeni 5 boşluk yapısı için
-- iki yeni tablo:
--   1. bosluk_alt_soru_yansimalari  — 5 bosluk × 3 alt-soru × kullanıcı
--   2. bosluk_genel_metin            — boşluğun tamamı için tek metin (ops.)
-- ----------------------------------------------------------------

-- ─── 1. Boşluk · Alt-Soru Yansımaları ────────────────────────────

CREATE TABLE IF NOT EXISTS public.bosluk_alt_soru_yansimalari (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kullanici_id    uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  karakter_id     text NOT NULL,
  bosluk_no       int  NOT NULL CHECK (bosluk_no BETWEEN 1 AND 5),
  alt_soru_no     int  NOT NULL CHECK (alt_soru_no BETWEEN 1 AND 3),
  yansima_metni   text,
  acildi          boolean NOT NULL DEFAULT false,
  son_guncelleme  timestamptz NOT NULL DEFAULT now(),

  UNIQUE (kullanici_id, karakter_id, bosluk_no, alt_soru_no)
);

ALTER TABLE public.bosluk_alt_soru_yansimalari ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "kendi alt soru yansimalarini gor"      ON public.bosluk_alt_soru_yansimalari;
DROP POLICY IF EXISTS "kendi alt soru yansimalarini yaz"      ON public.bosluk_alt_soru_yansimalari;
DROP POLICY IF EXISTS "kendi alt soru yansimalarini guncelle" ON public.bosluk_alt_soru_yansimalari;
DROP POLICY IF EXISTS "kendi alt soru yansimalarini sil"      ON public.bosluk_alt_soru_yansimalari;

CREATE POLICY "kendi alt soru yansimalarini gor"
  ON public.bosluk_alt_soru_yansimalari
  FOR SELECT TO authenticated
  USING (auth.uid() = kullanici_id);

CREATE POLICY "kendi alt soru yansimalarini yaz"
  ON public.bosluk_alt_soru_yansimalari
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi alt soru yansimalarini guncelle"
  ON public.bosluk_alt_soru_yansimalari
  FOR UPDATE TO authenticated
  USING (auth.uid() = kullanici_id)
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi alt soru yansimalarini sil"
  ON public.bosluk_alt_soru_yansimalari
  FOR DELETE TO authenticated
  USING (auth.uid() = kullanici_id);

CREATE INDEX IF NOT EXISTS bosluk_alt_soru_kullanici_karakter_idx
  ON public.bosluk_alt_soru_yansimalari (kullanici_id, karakter_id);

-- ─── 2. Boşluk · Genel Metin ─────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.bosluk_genel_metin (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kullanici_id    uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  karakter_id     text NOT NULL,
  bosluk_no       int  NOT NULL CHECK (bosluk_no BETWEEN 1 AND 5),
  genel_metin     text,
  son_guncelleme  timestamptz NOT NULL DEFAULT now(),

  UNIQUE (kullanici_id, karakter_id, bosluk_no)
);

ALTER TABLE public.bosluk_genel_metin ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "kendi bosluk genel metnini gor"      ON public.bosluk_genel_metin;
DROP POLICY IF EXISTS "kendi bosluk genel metnini yaz"      ON public.bosluk_genel_metin;
DROP POLICY IF EXISTS "kendi bosluk genel metnini guncelle" ON public.bosluk_genel_metin;
DROP POLICY IF EXISTS "kendi bosluk genel metnini sil"      ON public.bosluk_genel_metin;

CREATE POLICY "kendi bosluk genel metnini gor"
  ON public.bosluk_genel_metin
  FOR SELECT TO authenticated
  USING (auth.uid() = kullanici_id);

CREATE POLICY "kendi bosluk genel metnini yaz"
  ON public.bosluk_genel_metin
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi bosluk genel metnini guncelle"
  ON public.bosluk_genel_metin
  FOR UPDATE TO authenticated
  USING (auth.uid() = kullanici_id)
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi bosluk genel metnini sil"
  ON public.bosluk_genel_metin
  FOR DELETE TO authenticated
  USING (auth.uid() = kullanici_id);

CREATE INDEX IF NOT EXISTS bosluk_genel_metin_kullanici_karakter_idx
  ON public.bosluk_genel_metin (kullanici_id, karakter_id);
