// ============================================================================
//  data/studyo/kisisellestirme.js
//  Stüdyo · Kişiselleştirme Rayı · seçim mantığı (saf fonksiyonlar)
//  Doğrulama imzası: STUDYO-RAY-V1-20260613
// ----------------------------------------------------------------------------
//  İLKE 3: Kişiselleştirme görünmez. Hangi egzersizin neden seçildiği ASLA
//          gösterilmez. Puan / streak / yüzde YOK.
//
//  KARARLAR (sohbet, Haziran 2026):
//   • Dengeli üçlü: 1 geliştirme (düşük boyut) + 1 güç (yüksek) + 1 keşif (yeni).
//   • Eşleme yönü istasyon→boyut: her egzersiz kendi `besler:['odak',...]` etiketini
//     taşır. Merkezî tablo yok; yeni etüt etiketini taşır, ray otomatik öğrenir.
//   • İKİ MOD, tek kod:
//       - 'cesitlilik' (bugün): yeterli `besler` etiketli içerik yokken çeşitlilik/
//         ilerlemeye göre seçer (boyut bakmaz). Dramaturji-only durumun modu.
//       - 'boyut' (Zihin/Beden içeriği gelince): dengeli üçlü, boyuta göre.
//     Geçiş eşiği ESIK ile; oyuncu farkı görmez.
//   • Boş kalibrasyon → sabit GIRIS_SETI ("Başlamak için"), günlük dönüş YOK.
//   • Kalibrasyon varsa: takvim-günü deterministik tohum → gün boyu sabit, gece
//     yarısı (yerel) tazelenir. Tohum = beceri güncelleme zamanı + yerel tarih,
//     böylece oyuncu kalibrasyonu o gün güncellerse ray o an tazelenir.
//   • Çerçeve: "Bugünkü antrenmanın" + soluk not "Bu set bugüne özel — yarın
//     tazelenir." (baskı yok, geri sayım yok).
// ============================================================================

// 7 boyut anahtarları — beceri_sonuclari'nın GERÇEK kolon adları.
// ✓ Claude Code (Faz C): kalibrasyon-kaydet.js'den doğrulandı. `besler` (antrenmanlar.js)
//   ↔ BOYUTLAR ↔ DB kolonu üçü aynı string.
//   Professional Confidence → mesleki_guven
//   Technical Skills        → teknik
//   Mental Skills           → zihinsel
//   Emotional Skills        → duygusal
//   Motivational Skills     → motivasyonel
//   Relaxation Skills       → rahatlama
//   People Skills           → iliskisel
export const BOYUTLAR = [
  'mesleki_guven', 'teknik', 'zihinsel', 'duygusal',
  'motivasyonel', 'rahatlama', 'iliskisel'
];

// Boş kalibrasyon başlangıç seti — gerçek etüt id'leri, üç tip de temsil edilir.
export const GIRIS_SETI = [
  'hamlet-bosluk-maske',          // Boşluk Avı
  'hamlet-dogru-cikarim-acilis',  // Doğru / Çıkarım
  'hamlet-kronoloji'              // Kronoloji
];

// Boyut modu için gereken minimum etiketli egzersiz sayısı.
const ESIK = 6;

// ---- deterministik tohum + RNG ---------------------------------------------
function yerelTarihStr(d) {
  // Yerel takvim günü (UTC değil) — "bugün" oyuncunun saatine göre.
  const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, '0'),
        g = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${g}`;
}
function tohumStr(profil, d) {
  const cal = (profil && (profil.guncellemeZamani || profil.updated_at)) || 'anon';
  return `${cal}|${yerelTarihStr(d)}`;
}
function hashla(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function rng(seed) { // mulberry32
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function tohumlanmisKaristir(dizi, rastgele) {
  const a = [...dizi];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rastgele() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---- havuz: tüm karakterlerin etütleri + antrenman istasyonları düz listede ---
// Dramaturji (karaktere bağlı) + Zihin/Beden antrenmanları (kanata bağlı) tek havuzda.
export function havuzKur(etutKarakterleri, antrenmanlar = []) {
  const havuz = [];
  for (const kid in etutKarakterleri) {
    (etutKarakterleri[kid].etudler || []).forEach(e => {
      havuz.push({ karakterId: kid, karakterAd: etutKarakterleri[kid].ad, etut: e });
    });
  }
  const KANAT_AD = { zihin: 'Zihin', beden: 'Beden' };
  antrenmanlar.forEach(a => {
    havuz.push({ karakterId: null, karakterAd: KANAT_AD[a.kanat] || a.kanat, etut: a });
  });
  return havuz;
}

// ---- mod tespiti ------------------------------------------------------------
function kalibrasyonVar(profil) {
  if (!profil) return false;
  return BOYUTLAR.some(b => typeof profil[b] === 'number');
}
function etiketliSayisi(havuz) {
  return havuz.filter(x => Array.isArray(x.etut.besler) && x.etut.besler.length).length;
}

// ---- çeşitlilik modu: tip + karakter çeşitliliği, ilerleme önceliği ---------
function cesitlilikSec(havuz, tamamlanan, rastgele) {
  // tamamlanmamışları öne al (ilerleme), sonra tohumlu karıştır
  const yapilmamis = havuz.filter(x => !tamamlanan.has(x.etut.id));
  const yapilmis   = havuz.filter(x =>  tamamlanan.has(x.etut.id));
  const sirali = [...tohumlanmisKaristir(yapilmamis, rastgele),
                  ...tohumlanmisKaristir(yapilmis, rastgele)];
  const secim = [];
  const tipler = new Set(), karakterler = new Set();
  // 1. geçiş: tip ve karakter çeşitliliğini koru
  for (const x of sirali) {
    if (secim.length === 3) break;
    if (!tipler.has(x.etut.tip) && !karakterler.has(x.karakterId)) {
      secim.push(x); tipler.add(x.etut.tip); karakterler.add(x.karakterId);
    }
  }
  // 2. geçiş: hâlâ 3 değilse, tip çeşitliliğini koru (karakter tekrar olabilir)
  for (const x of sirali) {
    if (secim.length === 3) break;
    if (secim.includes(x)) continue;
    if (!tipler.has(x.etut.tip)) { secim.push(x); tipler.add(x.etut.tip); }
  }
  // 3. geçiş: ne varsa doldur
  for (const x of sirali) {
    if (secim.length === 3) break;
    if (!secim.includes(x)) secim.push(x);
  }
  return secim;
}

// ---- boyut modu: dengeli üçlü (geliştirme + güç + keşif) --------------------
function boyutSec(havuz, profil, tamamlanan, rastgele) {
  const skorlu = BOYUTLAR
    .filter(b => typeof profil[b] === 'number')
    .map(b => ({ b, v: profil[b] }))
    .sort((a, z) => a.v - z.v);
  if (!skorlu.length) return cesitlilikSec(havuz, tamamlanan, rastgele);

  const dusuk = skorlu[0].b;                       // geliştirme
  const yuksek = skorlu[skorlu.length - 1].b;      // güç
  const ortaAdaylar = skorlu.slice(1, -1).map(s => s.b);
  const kesif = ortaAdaylar.length
    ? ortaAdaylar[Math.floor(rastgele() * ortaAdaylar.length)]
    : dusuk;

  const hedefler = [dusuk, yuksek, kesif];
  const secim = [], kullanilan = new Set();

  const besleyen = (boyut) => tohumlanmisKaristir(
    havuz.filter(x => Array.isArray(x.etut.besler) && x.etut.besler.includes(boyut)
                      && !kullanilan.has(x.etut.id)), rastgele);

  for (const hedef of hedefler) {
    const adaylar = besleyen(hedef);
    // tamamlanmamışı tercih et
    const tercih = adaylar.find(x => !tamamlanan.has(x.etut.id)) || adaylar[0];
    if (tercih) { secim.push(tercih); kullanilan.add(tercih.etut.id); }
  }
  // eksik kalırsa çeşitlilikten tamamla
  if (secim.length < 3) {
    const kalan = cesitlilikSec(
      havuz.filter(x => !kullanilan.has(x.etut.id)), tamamlanan, rastgele);
    for (const x of kalan) { if (secim.length === 3) break; secim.push(x); }
  }
  return secim;
}

// ============================================================================
//  ANA FONKSİYON — ray bunu çağırır.
//  Döner: { mod, baslik, yarinTazelenir, setler:[{karakterId,karakterAd,etut}] }
// ============================================================================
export function bugunSeti({ etutKarakterleri, antrenmanlar = [], profil = null, tamamlananIds = [], tarih = new Date() }) {
  const havuz = havuzKur(etutKarakterleri, antrenmanlar);
  const tamamlanan = new Set(tamamlananIds);

  // 1) boş kalibrasyon → sabit giriş seti
  if (!kalibrasyonVar(profil)) {
    const setler = GIRIS_SETI
      .map(id => havuz.find(x => x.etut.id === id))
      .filter(Boolean);
    return { mod: 'giris', baslik: 'Başlamak için', yarinTazelenir: false, setler };
  }

  // 2) kalibrasyon var → günlük deterministik
  const rastgele = rng(hashla(tohumStr(profil, tarih)));
  const boyutModu = etiketliSayisi(havuz) >= ESIK;
  const setler = boyutModu
    ? boyutSec(havuz, profil, tamamlanan, rastgele)
    : cesitlilikSec(havuz, tamamlanan, rastgele);

  return {
    mod: boyutModu ? 'boyut' : 'cesitlilik',
    baslik: 'Bugünkü antrenmanın',
    yarinTazelenir: true,
    setler
  };
}
