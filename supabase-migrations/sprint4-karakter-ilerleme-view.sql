-- ITC Actor's Gym — Modül II Hamlet Refactor · Sprint 4 Migration
-- ----------------------------------------------------------------
-- karakter_ilerleme VIEW — dashboard'un tek besleme kaynağı.
--
-- AMAÇ: Karakter hub'ının her istasyonu için (kullanıcı × karakter) bazında
-- "ne kadar canlandı" sinyalini tek satırda döndürmek. Dashboard yalnızca bu
-- view'dan okur — tabloları tek tek saymaz (tek doğruluk kaynağı).
--
-- TASARIM İLKESİ — ACTIVATION, COMPLETION DEĞİL:
-- View yüzde/oran döndürmez ve hiçbir "hedef" (8 olay, 5 boşluk vb.) GÖMMEZ.
-- Hedefler karaktere göre değişir (Willy 8 olay/9 ilişki, Hamlet farklı) ve
-- içerik katmanında (data/karakterler/*) yaşar. View sadece AKTİF olan birim
-- SAYILARINI verir; nitel dile çevirmek ("çizgi genişliyor") frontend'in işi.
-- Bu sayede view karakter-agnostiktir ve dört karaktere de aynen uyar.
--
-- GÜVENLİK: security_invoker = on. Alt tabloların RLS politikaları
-- (hepsi: auth.uid() = kullanici_id) sorgulayan kullanıcının kimliğiyle
-- çalışır. Kullanıcı YALNIZCA kendi ilerlemesini görür. Bu olmadan view
-- RLS'i baypas edip tüm kullanıcıların verisini sızdırırdı.
--
-- KAPSAM: Modül II'nin 4 üretim istasyonu.
--   Keşfet  → oyun_oncesi_olay_yansimalari + oyun_oncesi_iliski_yansimalari
--   Haritala→ sahne_yansimalari
--   Yorumla → yazarin_cercevesi_secimler
--   Yarat   → bosluk_alt_soru_yansimalari + bosluk_genel_metin
-- Tanı (Doğrular) izlenmez — living reference, completion'ı yoktur (Karar).
-- Yaşa (Modül III) henüz yok — "yakında".
--
-- NOT: Hiçbir tabloda satırı olmayan kullanıcı view'da görünmez. Frontend
-- "satır yok → tüm sayılar 0" varsayımıyla yeni kullanıcıyı ele alır.
-- ----------------------------------------------------------------

CREATE OR REPLACE VIEW public.karakter_ilerleme
WITH (security_invoker = on) AS
WITH anahtarlar AS (
  -- Tüm tablolardaki benzersiz (kullanıcı × karakter) çiftleri — view'ın taban satırları
  SELECT kullanici_id, karakter_id FROM public.oyun_oncesi_olay_yansimalari
  UNION SELECT kullanici_id, karakter_id FROM public.oyun_oncesi_iliski_yansimalari
  UNION SELECT kullanici_id, karakter_id FROM public.sahne_yansimalari
  UNION SELECT kullanici_id, karakter_id FROM public.yazarin_cercevesi_secimler
  UNION SELECT kullanici_id, karakter_id FROM public.bosluk_alt_soru_yansimalari
  UNION SELECT kullanici_id, karakter_id FROM public.bosluk_genel_metin
),

-- ─── KEŞFET · Oyun Öncesi Olaylar ────────────────────────────────
olay AS (
  SELECT kullanici_id, karakter_id,
    count(*) FILTER (WHERE coalesce(trim(yansima_metni),'') <> '') AS olay_yazildi,
    count(*) FILTER (WHERE icsel_kabul)                           AS olay_icsel
  FROM public.oyun_oncesi_olay_yansimalari
  GROUP BY 1,2
),

-- ─── KEŞFET · Oyun Öncesi İlişkiler ──────────────────────────────
iliski AS (
  SELECT kullanici_id, karakter_id,
    count(*) FILTER (WHERE coalesce(trim(yansima_metni),'') <> '') AS iliski_yazildi,
    count(*) FILTER (WHERE tanidi)                                AS iliski_tanindi
  FROM public.oyun_oncesi_iliski_yansimalari
  GROUP BY 1,2
),

-- ─── HARİTALA · Zaman Çizgisi (Sahne Yansımaları) ────────────────
sahne AS (
  SELECT kullanici_id, karakter_id,
    count(DISTINCT sahne_no) FILTER (
      WHERE oyuncu_sicaklik IS NOT NULL OR coalesce(trim(yansima_metni),'') <> ''
    ) AS sahne_deginildi,
    count(DISTINCT sahne_no) FILTER (WHERE anladi) AS sahne_anladi
  FROM public.sahne_yansimalari
  GROUP BY 1,2
),

-- ─── YORUMLA · Yazarın Çerçevesi (Tercih Seçimleri) ──────────────
tercih AS (
  SELECT kullanici_id, karakter_id,
    count(DISTINCT tercih_no) FILTER (
      WHERE coalesce(array_length(secimler,1),0) > 0
         OR coalesce(trim(sentez_cumle),'') <> ''
    ) AS tercih_aktif
  FROM public.yazarin_cercevesi_secimler
  GROUP BY 1,2
),

-- ─── YARAT · Senin Çerçeven (Alt-Soru Yansımaları) ───────────────
bosluk_alt AS (
  SELECT kullanici_id, karakter_id,
    count(DISTINCT bosluk_no) FILTER (
      WHERE acildi OR coalesce(trim(yansima_metni),'') <> ''
    ) AS bosluk_deginildi,
    count(*) FILTER (WHERE coalesce(trim(yansima_metni),'') <> '') AS alt_soru_yazildi
  FROM public.bosluk_alt_soru_yansimalari
  GROUP BY 1,2
),

-- ─── YARAT · Senin Çerçeven (Boşluk Genel Metin) ─────────────────
bosluk_genel AS (
  SELECT kullanici_id, karakter_id,
    count(DISTINCT bosluk_no) FILTER (WHERE coalesce(trim(genel_metin),'') <> '') AS bosluk_genel_yazildi
  FROM public.bosluk_genel_metin
  GROUP BY 1,2
)

SELECT
  k.kullanici_id,
  k.karakter_id,

  -- KEŞFET
  coalesce(o.olay_yazildi, 0)      AS kesfet_olay_yazildi,
  coalesce(o.olay_icsel, 0)        AS kesfet_olay_icsel,
  coalesce(i.iliski_yazildi, 0)    AS kesfet_iliski_yazildi,
  coalesce(i.iliski_tanindi, 0)    AS kesfet_iliski_tanindi,

  -- HARİTALA
  coalesce(s.sahne_deginildi, 0)   AS haritala_deginildi,
  coalesce(s.sahne_anladi, 0)      AS haritala_anladi,

  -- YORUMLA
  coalesce(t.tercih_aktif, 0)      AS yorumla_tercih_aktif,

  -- YARAT  (boşluğa "değinildi": alt-soru ya da genel metin — hangisi fazlaysa)
  greatest(
    coalesce(ba.bosluk_deginildi, 0),
    coalesce(bg.bosluk_genel_yazildi, 0)
  )                                AS yarat_bosluk_deginildi,
  coalesce(ba.alt_soru_yazildi, 0) AS yarat_alt_soru_yazildi

FROM anahtarlar k
LEFT JOIN olay         o  ON o.kullanici_id  = k.kullanici_id AND o.karakter_id  = k.karakter_id
LEFT JOIN iliski       i  ON i.kullanici_id  = k.kullanici_id AND i.karakter_id  = k.karakter_id
LEFT JOIN sahne        s  ON s.kullanici_id  = k.kullanici_id AND s.karakter_id  = k.karakter_id
LEFT JOIN tercih       t  ON t.kullanici_id  = k.kullanici_id AND t.karakter_id  = k.karakter_id
LEFT JOIN bosluk_alt   ba ON ba.kullanici_id = k.kullanici_id AND ba.karakter_id = k.karakter_id
LEFT JOIN bosluk_genel bg ON bg.kullanici_id = k.kullanici_id AND bg.karakter_id = k.karakter_id;

-- Erişim: authenticated kullanıcılar okuyabilir (RLS yine de satırları filtreler)
GRANT SELECT ON public.karakter_ilerleme TO authenticated;
