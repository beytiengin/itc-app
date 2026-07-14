-- =====================================================================
-- taslak-batarya.sql — Kısmi kayıt (setli akış) taslak tablosu
-- ITC-TASLAK-20260714
--
-- ⚠ KAYIT / ŞEMA GEÇMİŞİ — UYGULAMAK İÇİN DEĞİL.
--   Bu tablo canlı projeye (qkevemyulvsfrpkvryjz) Supabase MCP ile ZATEN
--   uygulandı ve doğrulandı (14 Tem 2026). Bu dosya, canlı şemayla BİREBİR
--   hizalı bir kayıttır — Dashboard'da yeniden çalıştırmak GEREKMEZ.
--   Aşağıdaki DDL, canlı information_schema/pg_constraint/pg_policies
--   çıktısından türetilmiştir (referans = canlı).
--
-- batarya_taslak, batarya_sonuclari'ndan (append-only kaynak-of-truth) AYRIDIR:
--   - Oyuncu bir modülü set set doldururken ara ilerleme UPSERT edilir
--     (kullanici_id + modul başına TEK satır — batarya_taslak_tek unique).
--   - Modül tamamlanıp batarya_sonuclari'na yazılınca taslak SİLİNİR.
--   - Kaynak-of-truth her zaman batarya_sonuclari (append-only) kalır;
--     taslak yalnız devam-kolaylığıdır (kaybı akışı DURDURMAZ — kod sessiz geçer).
--   - onConflict: 'kullanici_id,modul' → batarya_taslak_tek UNIQUE'e çözülür.
-- =====================================================================

create table if not exists public.batarya_taslak (
  id           uuid        primary key default gen_random_uuid(),
  kullanici_id uuid        not null references auth.users(id) on delete cascade,
  modul        text        not null,
  yanitlar     jsonb       not null default '{}'::jsonb,
  set_index    integer     not null default 0,
  guncellendi  timestamptz not null default now(),
  constraint batarya_taslak_tek unique (kullanici_id, modul)  -- onConflict hedefi
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
