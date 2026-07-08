-- ─────────────────────────────────────────────────────────────────────────────
-- Karar 64a — Batarya v0.5: modul CHECK constraint genisletme (KALICI SLUG yasasi)
-- Tarih: 7 Temmuz 2026
--
-- v0.5 kaynak kurali (bataryaDurumu.renumberingRecord — verbatim ozeti):
--   "Database module keys are STABLE SLUGS decoupled from display order."
--   Gorunum sirasi (sira alani) degisebilir; DB anahtarlari degismez.
--
-- ESKI anahtarlar (v1 migration, karar64-batarya.sql) SILINMEZ ve YENIDEN
-- ADLANDIRILMAZ — mevcut satirlar gecerli kalir. Uygulama katmani
-- (app/lib/batarya-kaydet.js) okurken eski→yeni takma ad eslemesi yapar:
--   m1_aps → aps · m2_access → access · m3_emotional → emotional
--   m4_formA → flow_formA · m4_formB → flow_formB
-- Yeni yazimlar YENI slug'larla yapilir.
--
-- Bu dosya idempotent — yeniden calistirmak guvenli.
-- Uygulama: Supabase Dashboard > SQL Editor (manuel — FKA geri bildirimi Soru 2/a).
-- ─────────────────────────────────────────────────────────────────────────────

alter table public.batarya_sonuclari
  drop constraint if exists batarya_sonuclari_modul_check;

alter table public.batarya_sonuclari
  add constraint batarya_sonuclari_modul_check
  check (modul in (
    -- v0.5 kalici slug'lar (core: type_lens, aps, emotional)
    'intake',
    'type_lens',
    'aps',
    'emotional',
    'access',
    'flow_formA',
    'flow_formB',
    'regulation',
    'mindfulness',
    'body',
    'entry_exit',
    -- v1 legacy anahtarlar — mevcut satirlar icin gecerli kalir (yeniden yazim yok)
    'm1_aps',
    'm2_access',
    'm3_emotional',
    'm4_formA',
    'm4_formB'
  ));

-- Not: batarya_onam tablosuna dokunulmaz (kapsam 'batarya'/'video' ayni kalir).
-- Not: Module 8 (body) video kaydi ILERIDE ayri 'video' kapsamli onam gerektirir
--      (etik cerceve — app'te Part 1 self-report disinda video akisi yok).
