-- ITC Actor's Gym — Modül II Hamlet Refactor · Sprint 2 Migration
-- ----------------------------------------------------------------
-- Yazarın Çerçevesi · 5 Tercih için tablo.
--
-- Bir tercih için kullanıcı:
--   - bir veya daha fazla yorum harfi seçer (Tercih 4 çoklu seçim)
--   - özel yorum yazabilir (yorum kutuların alternatifi/ek)
--   - sentez sayfasında "benim Hamlet'imde X, çünkü Y" cümlesi yazar
-- ----------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.yazarin_cercevesi_secimler (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kullanici_id    uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  karakter_id     text NOT NULL,
  tercih_no       int  NOT NULL CHECK (tercih_no BETWEEN 1 AND 5),
  secimler        text[] NOT NULL DEFAULT '{}',  -- harf array: ["A"], ["A","E"], vs.
  ozel_yorum      text,
  sentez_cumle    text,
  son_guncelleme  timestamptz NOT NULL DEFAULT now(),

  UNIQUE (kullanici_id, karakter_id, tercih_no)
);

ALTER TABLE public.yazarin_cercevesi_secimler ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "kendi tercih secimlerini gor"      ON public.yazarin_cercevesi_secimler;
DROP POLICY IF EXISTS "kendi tercih secimlerini yaz"      ON public.yazarin_cercevesi_secimler;
DROP POLICY IF EXISTS "kendi tercih secimlerini guncelle" ON public.yazarin_cercevesi_secimler;
DROP POLICY IF EXISTS "kendi tercih secimlerini sil"      ON public.yazarin_cercevesi_secimler;

CREATE POLICY "kendi tercih secimlerini gor"
  ON public.yazarin_cercevesi_secimler
  FOR SELECT TO authenticated
  USING (auth.uid() = kullanici_id);

CREATE POLICY "kendi tercih secimlerini yaz"
  ON public.yazarin_cercevesi_secimler
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi tercih secimlerini guncelle"
  ON public.yazarin_cercevesi_secimler
  FOR UPDATE TO authenticated
  USING (auth.uid() = kullanici_id)
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi tercih secimlerini sil"
  ON public.yazarin_cercevesi_secimler
  FOR DELETE TO authenticated
  USING (auth.uid() = kullanici_id);

CREATE INDEX IF NOT EXISTS yazarin_cercevesi_kullanici_karakter_idx
  ON public.yazarin_cercevesi_secimler (kullanici_id, karakter_id);
