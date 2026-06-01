// data/karakterler/hamlet.de.js
// ITC Actor's Gym — Hamlet dramatik içeriği · Almanca dil katmanı.
//
// Bu dosya çok-dilli mimarinin (Yaklaşım B) Almanca placeholder şablonudur.
// `karakterGetir('hamlet', 'de')` çağrılınca TR taban (`hamlet.js`) ile
// deep-merge edilir — bu katmandaki DOLU stringler TR'ye yazılır, eksikler
// otomatik TR'de kalır (fallback).
//
// ŞU AN: BOŞ şablon → DE seçilince Hamlet sayfaları TR ile aynı görünür.
// Çeviri turunda (Karar 33 §1.3 saha QA kapsamında) bu dosyaya yapı doldurulur:
//   - TR yapısının birebir kopyası (aynı sıra + uzunluk)
//   - Çevrilebilir string alanlar Almanca metinle doldurulur
//   - Yapısal/sayısal alanlar (id, kategori anahtarları, travmaKategorileri,
//     travmaSeviyesi, kritikMi, perde, sayı tipindeki alanlar, yazar, donem,
//     tip/MBTI vb.) **buraya konmaz** — merge zaten TR'den alır
//
// Array index-hizalı merge: TR'de eklenen/kaldırılan madde olursa bu dosya
// da aynı indekste güncellenmeli; aksi halde fazla/eksik alanlar TR'de kalır
// (zararsız ama dikkat).

const hamletDE = {};

export default hamletDE;
