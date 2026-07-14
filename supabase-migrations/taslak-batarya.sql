-- =====================================================================
-- taslak-batarya.sql — Kısmi kayıt (setli akış) taslak tablosu
-- ITC-TASLAK-20260714
--
-- batarya_taslak, batarya_sonuclari'ndan (append-only kaynak-of-truth) AYRIDIR:
--   - Oyuncu bir modülü set set doldururken ara ilerleme UPSERT edilir
--     (kullanici_id + modul başına TEK satır — onConflict).
--   - Modül tamamlanıp batarya_sonuclari'na yazılınca taslak SİLİNİR.
--   - Kaynak-of-truth her zaman batarya_sonuclari (append-only) kalır;
--     taslak yalnız devam-kolaylığıdır (kaybı akışı DURDURMAZ — kod sessiz geçer).
--
-- Manuel uygulanır (Supabase Dashboard SQL Editor). Idempotent — yeniden
-- çalıştırmak güvenli (if not exists + drop policy if exists).
-- =====================================================================

create table if not exists public.batarya_taslak (
  kullanici_id uuid        not null references auth.users(id) on delete cascade,
  modul        text        not null,
  yanitlar     jsonb       not null default '{}'::jsonb,
  set_index    integer     not null default 0,
  guncellendi  timestamptz not null default now(),
  primary key (kullanici_id, modul)   -- onConflict: kullanici_id,modul
);

alter table public.batarya_taslak enable row level security;

-- Owner tam CRUD: taslak upsert (insert+update) + oku + sil, yalnız kendi satırı.
drop policy if exists "batarya_taslak_select_own" on public.batarya_taslak;
create policy "batarya_taslak_select_own" on public.batarya_taslak
  for select using (auth.uid() = kullanici_id);

drop policy if exists "batarya_taslak_insert_own" on public.batarya_taslak;
create policy "batarya_taslak_insert_own" on public.batarya_taslak
  for insert with check (auth.uid() = kullanici_id);

drop policy if exists "batarya_taslak_update_own" on public.batarya_taslak;
create policy "batarya_taslak_update_own" on public.batarya_taslak
  for update using (auth.uid() = kullanici_id) with check (auth.uid() = kullanici_id);

drop policy if exists "batarya_taslak_delete_own" on public.batarya_taslak;
create policy "batarya_taslak_delete_own" on public.batarya_taslak
  for delete using (auth.uid() = kullanici_id);
