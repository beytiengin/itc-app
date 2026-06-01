// data/karakterler/willy.de.js
// WILLY LOMAN — Almanca dil katmani (karakterGetir deep-merge ile willy.js TR
// tabanina biner).
//
// Bu dosya cok-dilli mimari (Yaklasim B) Almanca placeholder sablonudur.
// `karakterGetir('willy', 'de')` cagrilinca TR taban (`willy.js`) ile deep-merge
// edilir — bu katmandaki DOLU stringler TR'ye yazilir, eksikler otomatik TR'de
// kalir (fallback).
//
// SU AN: BOS sablon → DE secilince Willy dramatik icerigi TR ile ayni gorunur.
// Ceviri turunda (Karar 33 §1.3 saha QA kapsaminda) bu dosyaya yapi doldurulur:
//   - TR yapisinin birebir kopyasi (ayni sira + uzunluk)
//   - Cevrilebilir string alanlar Almanca metinle doldurulur
//   - Kanonik kaynak: "Tod eines Handlungsreisenden" (Arthur Miller, Volker
//     Buchwitz cevirisi — Almanya sahne standardi). Hamlet'in Schlegel-Tieck
//     paraleli (Karar 38 §1 + bir onceki Hamlet DE turu).
//   - Yapisal/sayisal alanlar (id, kategori, perde, yasamSirasi, sonraSahneNo,
//     travmaKategorileri, travmaSeviyesi, kritikMi, sayilar, tip/MBTI, yazar,
//     donem) **buraya konmaz** — merge zaten TR'den alir.
//
// Array index-hizali merge: TR'de eklenen/kaldirilan madde olursa bu dosya
// da ayni indekste guncellenmeli; aksi halde fazla/eksik alanlar TR'de kalir
// (zararsiz ama dikkat).

const willyDE = {};

export default willyDE;
