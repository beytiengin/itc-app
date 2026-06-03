-- supabase-migrations/sprint6-nina-pilot-oznel-sabitler.sql
-- Karar 48 — Çatallı Boşluk Yürüyüşü pilot tablosu
-- Nina pilot (Çehov · Martı) "İki yıllık boşluk" (b2) çatal seçimlerini saklar.
-- Modül III girdisi olarak da kullanılacak (kalıcı oyuncu mührü).
--
-- İdempotent: tablo + RLS + policy varsa atlanır.
-- Production karakter pipeline'ından AYRI — yalnız /pilot/* ve Modül III okur.

-- Tablo
create table if not exists public.oznel_sabitler (
  id uuid primary key default gen_random_uuid(),
  kullanici_id uuid not null references auth.users(id) on delete cascade,
  karakter_id text not null,             -- 'nina' (pilot) / ilerde production karakterleri
  bosluk_no text not null,               -- 'b2'
  catal_anahtar text not null,           -- 'varis' | 'kayip' | 'kayip2' | 'bilgi'
  secilen_dal text not null,             -- 'karsiladi' | 'hamilelikte' | 'biliyor' vs.
  muhur_metni text,                       -- "Bunu unutma — ..." (Modül III girdisi)
  ozet_metni text,                        -- kısa özet (kapanış + sahne hatırlatma)
  birlesim_sahne_no integer,              -- 8 (sahne kartında hatırlatılır)
  son_guncelleme timestamptz default now(),
  unique (kullanici_id, karakter_id, bosluk_no, catal_anahtar)
);

-- RLS
alter table public.oznel_sabitler enable row level security;

-- Policy (drop+create idempotent)
drop policy if exists "oznel_sabitler_sec_own" on public.oznel_sabitler;
create policy "oznel_sabitler_sec_own"
  on public.oznel_sabitler for select
  using (auth.uid() = kullanici_id);

drop policy if exists "oznel_sabitler_ins_own" on public.oznel_sabitler;
create policy "oznel_sabitler_ins_own"
  on public.oznel_sabitler for insert
  with check (auth.uid() = kullanici_id);

drop policy if exists "oznel_sabitler_upd_own" on public.oznel_sabitler;
create policy "oznel_sabitler_upd_own"
  on public.oznel_sabitler for update
  using (auth.uid() = kullanici_id);

drop policy if exists "oznel_sabitler_del_own" on public.oznel_sabitler;
create policy "oznel_sabitler_del_own"
  on public.oznel_sabitler for delete
  using (auth.uid() = kullanici_id);

-- Index (yalnız son_guncelleme yoksa)
create index if not exists oznel_sabitler_kullanici_karakter_idx
  on public.oznel_sabitler (kullanici_id, karakter_id);
