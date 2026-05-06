-- ITC Actor's Gym — Modül II Hamlet Refactor · Sprint 1 Migration
-- ----------------------------------------------------------------
-- Bu dosyayı Supabase Dashboard > SQL Editor'da çalıştır.
-- 3 yeni tablo oluşturulur, RLS aktif edilir.
--
-- Tablolar:
--   1. oyun_oncesi_olay_yansimalari   (8 olay × kullanıcı)
--   2. oyun_oncesi_iliski_yansimalari (8 ilişki × kullanıcı)
--   3. sahne_yansimalari              (14 sahne × kullanıcı)
--
-- Mevcut bosluk_yansimalari tablosuyla aynı isimlendirme şeması.
-- ----------------------------------------------------------------

-- ─── 1. Oyun Öncesi · Olay Yansımaları ───────────────────────────

CREATE TABLE IF NOT EXISTS public.oyun_oncesi_olay_yansimalari (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kullanici_id    uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  karakter_id     text NOT NULL,
  olay_no         int  NOT NULL,
  yansima_metni   text,
  icsel_kabul     boolean NOT NULL DEFAULT false,
  son_guncelleme  timestamptz NOT NULL DEFAULT now(),

  UNIQUE (kullanici_id, karakter_id, olay_no)
);

ALTER TABLE public.oyun_oncesi_olay_yansimalari ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "kendi olay yansimalarini gor"   ON public.oyun_oncesi_olay_yansimalari;
DROP POLICY IF EXISTS "kendi olay yansimalarini yaz"   ON public.oyun_oncesi_olay_yansimalari;
DROP POLICY IF EXISTS "kendi olay yansimalarini guncelle" ON public.oyun_oncesi_olay_yansimalari;
DROP POLICY IF EXISTS "kendi olay yansimalarini sil"   ON public.oyun_oncesi_olay_yansimalari;

CREATE POLICY "kendi olay yansimalarini gor"
  ON public.oyun_oncesi_olay_yansimalari
  FOR SELECT TO authenticated
  USING (auth.uid() = kullanici_id);

CREATE POLICY "kendi olay yansimalarini yaz"
  ON public.oyun_oncesi_olay_yansimalari
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi olay yansimalarini guncelle"
  ON public.oyun_oncesi_olay_yansimalari
  FOR UPDATE TO authenticated
  USING (auth.uid() = kullanici_id)
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi olay yansimalarini sil"
  ON public.oyun_oncesi_olay_yansimalari
  FOR DELETE TO authenticated
  USING (auth.uid() = kullanici_id);

-- ─── 2. Oyun Öncesi · İlişki Yansımaları ─────────────────────────

CREATE TABLE IF NOT EXISTS public.oyun_oncesi_iliski_yansimalari (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kullanici_id    uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  karakter_id     text NOT NULL,
  iliski_no       int  NOT NULL,
  yansima_metni   text,
  tanidi          boolean NOT NULL DEFAULT false,
  son_guncelleme  timestamptz NOT NULL DEFAULT now(),

  UNIQUE (kullanici_id, karakter_id, iliski_no)
);

ALTER TABLE public.oyun_oncesi_iliski_yansimalari ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "kendi iliski yansimalarini gor"      ON public.oyun_oncesi_iliski_yansimalari;
DROP POLICY IF EXISTS "kendi iliski yansimalarini yaz"      ON public.oyun_oncesi_iliski_yansimalari;
DROP POLICY IF EXISTS "kendi iliski yansimalarini guncelle" ON public.oyun_oncesi_iliski_yansimalari;
DROP POLICY IF EXISTS "kendi iliski yansimalarini sil"      ON public.oyun_oncesi_iliski_yansimalari;

CREATE POLICY "kendi iliski yansimalarini gor"
  ON public.oyun_oncesi_iliski_yansimalari
  FOR SELECT TO authenticated
  USING (auth.uid() = kullanici_id);

CREATE POLICY "kendi iliski yansimalarini yaz"
  ON public.oyun_oncesi_iliski_yansimalari
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi iliski yansimalarini guncelle"
  ON public.oyun_oncesi_iliski_yansimalari
  FOR UPDATE TO authenticated
  USING (auth.uid() = kullanici_id)
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi iliski yansimalarini sil"
  ON public.oyun_oncesi_iliski_yansimalari
  FOR DELETE TO authenticated
  USING (auth.uid() = kullanici_id);

-- ─── 3. Sahne Yansımaları (Timeline) ─────────────────────────────

CREATE TABLE IF NOT EXISTS public.sahne_yansimalari (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kullanici_id     uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  karakter_id      text NOT NULL,
  sahne_no         int  NOT NULL,
  oyuncu_sicaklik  int  CHECK (oyuncu_sicaklik IS NULL OR (oyuncu_sicaklik BETWEEN 1 AND 10)),
  yansima_metni    text,
  anladi           boolean NOT NULL DEFAULT false,
  son_guncelleme   timestamptz NOT NULL DEFAULT now(),

  UNIQUE (kullanici_id, karakter_id, sahne_no)
);

ALTER TABLE public.sahne_yansimalari ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "kendi sahne yansimalarini gor"      ON public.sahne_yansimalari;
DROP POLICY IF EXISTS "kendi sahne yansimalarini yaz"      ON public.sahne_yansimalari;
DROP POLICY IF EXISTS "kendi sahne yansimalarini guncelle" ON public.sahne_yansimalari;
DROP POLICY IF EXISTS "kendi sahne yansimalarini sil"      ON public.sahne_yansimalari;

CREATE POLICY "kendi sahne yansimalarini gor"
  ON public.sahne_yansimalari
  FOR SELECT TO authenticated
  USING (auth.uid() = kullanici_id);

CREATE POLICY "kendi sahne yansimalarini yaz"
  ON public.sahne_yansimalari
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi sahne yansimalarini guncelle"
  ON public.sahne_yansimalari
  FOR UPDATE TO authenticated
  USING (auth.uid() = kullanici_id)
  WITH CHECK (auth.uid() = kullanici_id);

CREATE POLICY "kendi sahne yansimalarini sil"
  ON public.sahne_yansimalari
  FOR DELETE TO authenticated
  USING (auth.uid() = kullanici_id);

-- ─── İndeksler (kullanıcı + karakter sorguları için) ─────────────

CREATE INDEX IF NOT EXISTS oyun_oncesi_olay_kullanici_karakter_idx
  ON public.oyun_oncesi_olay_yansimalari (kullanici_id, karakter_id);

CREATE INDEX IF NOT EXISTS oyun_oncesi_iliski_kullanici_karakter_idx
  ON public.oyun_oncesi_iliski_yansimalari (kullanici_id, karakter_id);

CREATE INDEX IF NOT EXISTS sahne_yansimalari_kullanici_karakter_idx
  ON public.sahne_yansimalari (kullanici_id, karakter_id);
