-- =====================================================================
-- karar64-batarya.sql — Modul I · ITC Actor Assessment Battery tablolari
-- Karar 64 (5 Tem 2026) · Asama 3
-- Uygulama: Supabase Dashboard SQL Editor'da MANUEL calistirilir
-- (mevcut sprint*.sql pattern'i). Idempotent — yeniden calistirmak guvenli.
--
-- FKA sema geri-bildirimi (5 Tem 2026) islendi:
--   (2) Onam geri cekme: append-only `islem` satiri ('verildi'/'geri_cekildi')
--       — KVKK "geri cekmek vermek kadar kolay" + tam denetim izi korunur.
--   (3) `kapsam` alani: 'batarya' (genel) / 'video' (Module 8 ayri-spesifik onam).
--   (4) `modul` CHECK constraint — serbest metin typo'su sessiz yetim veri
--       uretemez. M5-M8 geldiginde constraint guncellenir (asagida not).
--   (5) m4_formA/m4_formB kaynak Module Map'te kilitli: Form A = dispositional
--       baseline (BIR KEZ), Form B = repeatable state form (performans basina,
--       dogal cok-satir; birincil case-study olcumu).
--   (6) `imza_ad` NOT NULL (imza satiri bos birakilamaz).
--   (1) Kolaylastirici erisimi — KARAR: v1'de istemci tarafinda admin policy
--       YOK; facilitator (Beyti/Filiz) erisimi Supabase Dashboard / service-role
--       uzerinden (RLS bypass). In-app facilitator gorunumu ileride ayri karar
--       (Karar 66 adayi). Bu dosya o karari degistirmez.
--
-- Ilkeler (Karar 64 §7):
--   * `yanitlar` HAM + verbatim = KAYNAK. Turetim tasimazlar.
--   * `skorlar` = turetilmis katman (ters kodlama 6-ham, Exit Capacity vb.);
--     hamdan HER ZAMAN yeniden hesaplanabilir (v0.x re-scoring icin sart).
--   * Append-only: UPDATE/DELETE policy YOK. Silme talebi = hesap silme
--     (on delete cascade) veya service-role backend islemi.
-- =====================================================================

-- ── batarya_sonuclari — modul yanitlari (append-only, ham = kaynak) ──────────

create table if not exists public.batarya_sonuclari (
  id           uuid primary key default gen_random_uuid(),
  kullanici_id uuid not null references auth.users(id) on delete cascade,
  modul        text not null,
  surum        text not null,   -- enstruman surumu (or. 'm1_v0.2') — eski yanit, yanitladigi surume bagli kalir
  yanitlar     jsonb not null,  -- HAM + verbatim (Likert ham deger, siralama listesi, acik metin, tablo)
  skorlar      jsonb,           -- turetim (ters kodlama, alan/sistem/faset toplamlari, Exit Capacity, C/E alt-toplam)
  created_at   timestamptz not null default now(),
  constraint batarya_sonuclari_modul_check check (
    modul in ('intake', 'm1_aps', 'm2_access', 'm3_emotional', 'm4_formA', 'm4_formB')
    -- M5-M8 taslaklari geldiginde bu constraint ALTER ile genisletilir:
    -- alter table public.batarya_sonuclari drop constraint batarya_sonuclari_modul_check;
    -- alter table public.batarya_sonuclari add constraint batarya_sonuclari_modul_check check (modul in (...));
  )
);

comment on table public.batarya_sonuclari is
  'Karar 64 — Modul I Actor Assessment Battery yanitlari. Append-only; yanitlar ham=kaynak, skorlar turetim (hamdan yeniden hesaplanabilir). Form B (m4_formB) dogal cok-satir; diger modullerde uygulama en son created_at kaydini okur.';

create index if not exists batarya_sonuclari_kullanici_modul_idx
  on public.batarya_sonuclari (kullanici_id, modul, created_at desc);

alter table public.batarya_sonuclari enable row level security;

drop policy if exists "batarya_sonuclari_select_own" on public.batarya_sonuclari;
create policy "batarya_sonuclari_select_own" on public.batarya_sonuclari
  for select using (auth.uid() = kullanici_id);

drop policy if exists "batarya_sonuclari_insert_own" on public.batarya_sonuclari;
create policy "batarya_sonuclari_insert_own" on public.batarya_sonuclari
  for insert with check (auth.uid() = kullanici_id);

-- (bilincli: update/delete policy YOK — append-only)

-- ── batarya_onam — AYRI onam/denetim tablosu (GDPR/KVKK) ─────────────────────
-- Append-only onam DEFTERI: her satir bir islem ('verildi' ya da 'geri_cekildi').
-- Gecerli onam = (kullanici, kapsam) icin en son satirin islem='verildi' olmasi.
-- Geri cekme = yeni 'geri_cekildi' satiri — onceki kayit silinmez (denetim izi).

create table if not exists public.batarya_onam (
  id                uuid primary key default gen_random_uuid(),
  kullanici_id      uuid not null references auth.users(id) on delete cascade,
  islem             text not null default 'verildi'
                    check (islem in ('verildi', 'geri_cekildi')),
  kapsam            text not null default 'batarya'
                    check (kapsam in ('batarya', 'video')),  -- video = Module 8 ayri-spesifik onam
  onam_metni_surumu text not null,   -- gosterilen consent metninin surumu
  kutu_durumlari    jsonb,           -- 'verildi' satirinda 5 onay kutusu; 'geri_cekildi' satirinda null
  imza_ad           text not null,   -- "Name & signature (or digital confirmation)" — bos birakilamaz
  islem_at          timestamptz not null default now()
);

comment on table public.batarya_onam is
  'Karar 64 — batarya onam defteri (append-only). Gecerli onam = (kullanici, kapsam) icin en son satir islem=verildi. Geri cekme yeni satirla; KVKK denetim izi genel JSONB yigininda yasamaz.';

create index if not exists batarya_onam_kullanici_kapsam_idx
  on public.batarya_onam (kullanici_id, kapsam, islem_at desc);

alter table public.batarya_onam enable row level security;

drop policy if exists "batarya_onam_select_own" on public.batarya_onam;
create policy "batarya_onam_select_own" on public.batarya_onam
  for select using (auth.uid() = kullanici_id);

drop policy if exists "batarya_onam_insert_own" on public.batarya_onam;
create policy "batarya_onam_insert_own" on public.batarya_onam
  for insert with check (auth.uid() = kullanici_id);

-- (bilincli: update/delete policy YOK — geri cekme yeni satirla yapilir)
