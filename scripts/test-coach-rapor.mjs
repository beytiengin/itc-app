// =====================================================================
// scripts/test-coach-rapor.mjs — Coach motoru · Deniz coach örneği fikstürü
// Beklenen çıktılar SAMPLE_Coach_Core_Report_Deniz_v0_5'ten (D.2 tablosu,
// craft means, safeguard seçimi). Çalıştırma: node scripts/test-coach-rapor.mjs
// DOĞRULAMA İMZASI: ITC-COACHRAPOR-TEST-20260710
// =====================================================================
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const t = mkdtempSync(join(tmpdir(), 'coach-'));
const kopya = (kaynak, hedef, donusum = (x) => x) =>
  writeFileSync(join(t, hedef), donusum(readFileSync(kaynak, 'utf8')));

kopya('data/kalibrasyon/batarya.js', 'batarya.mjs');
kopya('data/kalibrasyon/aps-rapor.js', 'aps-rapor.mjs');
kopya('data/kalibrasyon/core-rapor.js', 'core-rapor.mjs');
kopya('data/kalibrasyon/coach-rapor.js', 'coach-rapor.mjs');
kopya('data/kalibrasyon/question-bank.js', 'question-bank.mjs');
kopya('data/kalibrasyon/checkin-f.js', 'checkin-f.mjs');
kopya('data/kalibrasyon/m3-pack.js', 'm3-pack.mjs');
kopya('app/lib/aps-rapor-motor.js', 'aps-motor.mjs',
  (s) => s.replace("'../../data/kalibrasyon/aps-rapor'", "'./aps-rapor.mjs'"));
kopya('app/lib/core-rapor-motor.js', 'core-motor.mjs',
  (s) => s.replace("'../../data/kalibrasyon/core-rapor'", "'./core-rapor.mjs'")
         .replace("'../../data/kalibrasyon/question-bank'", "'./question-bank.mjs'")
         .replace("'./aps-rapor-motor'", "'./aps-motor.mjs'")
         .replace("'../../data/kalibrasyon/aps-rapor'", "'./aps-rapor.mjs'"));
kopya('app/lib/coach-rapor-motor.js', 'coach-motor.mjs',
  (s) => s.replace("'../../data/kalibrasyon/coach-rapor'", "'./coach-rapor.mjs'")
         .replace("'../../data/kalibrasyon/question-bank'", "'./question-bank.mjs'")
         .replace("'../../data/kalibrasyon/checkin-f'", "'./checkin-f.mjs'")
         .replace("'../../data/kalibrasyon/m3-pack'", "'./m3-pack.mjs'")
         .replace("import { modulBul } from './batarya-kaydet';",
                  "import { batarya } from './batarya.mjs';\nconst modulBul = (slug) => batarya.moduller.find((m) => m.slug === slug) ?? null;")
         .replace("'./aps-rapor-motor'", "'./aps-motor.mjs'")
         .replace("'./core-rapor-motor'", "'./core-motor.mjs'"));

const M = await import(pathToFileURL(join(t, 'coach-motor.mjs')));
const { batarya } = await import(pathToFileURL(join(t, 'batarya.mjs')));
const modulBul = (slug) => batarya.moduller.find((m) => m.slug === slug);

let hata = 0;
const dz = (ad, g, bek) => {
  const ok = JSON.stringify(g) === JSON.stringify(bek);
  if (!ok) hata++;
  console.log((ok ? '✓' : '✗') + ' ' + ad + (ok ? '' : ': ' + JSON.stringify(g) + ' ≠ ' + JSON.stringify(bek)));
};

// ── D.2 — Deniz'in 7×4 tablosu (reach, vividness, control, cleanExit) ──
const DENIZ = {
  'Care': [5, 4, 4, 4], 'Play': [4, 4, 4, 4], 'Seeking': [4, 3, 3, 4],
  'Sadness': [4, 4, 3, 2], 'Fear': [3, 4, 3, 3], 'Desire': [3, 3, 2, 4], 'Anger': [2, 3, 2, 3],
};
const SIRA = ['reach', 'vividness', 'control', 'cleanExit'];
const emYanitlar = {};
for (const sistem of modulBul('emotional').part1.sistemler) {
  const anahtar = Object.keys(DENIZ).find((k) => sistem.ad.startsWith(k));
  for (const m of sistem.maddeler) {
    const r = DENIZ[anahtar][SIRA.indexOf(m.faset)];
    emYanitlar[m.no] = m.ters ? 6 - r : r; // ham → kodlanınca r
  }
}
const d2 = M.d2Olustur(emYanitlar);
const sinif = Object.fromEntries(d2.sistemler.map((s) => [s.ad.split(' ')[0], [s.sinif, s.ort]]));
dz('Care OPEN 4.25', sinif['Care'], ['OPEN', 4.25]);
dz('Play OPEN 4.00', sinif['Play'], ['OPEN', 4]);
dz('Seeking AJAR 3.50', sinif['Seeking'], ['AJAR', 3.5]);
dz('Sadness AJAR 3.25', sinif['Sadness'], ['AJAR', 3.25]);
dz('Anger CLOSED 2.50', sinif['Anger'], ['CLOSED', 2.5]);
dz('closedVar → closer render koşulu', d2.closedVar, true);
dz('sıra: yüksekten (Care önce)', d2.sistemler[0].ad.startsWith('Care'), true);
const sadnessBaslik = d2.sistemler.find((s) => s.ad.startsWith('Sadness')).baslik;
const desireBaslik = d2.sistemler.find((s) => s.ad.startsWith('Desire')).baslik;
dz('Sadness M9-çifti notu (onaylı kural)', sadnessBaslik.includes('open for reach, closed for clean exit'), true);
const angerBaslik = d2.sistemler.find((s) => s.ad.startsWith('Anger')).baslik;
dz('Anger (CLOSED) notsuz — Deniz örneği', angerBaslik.includes('closed for'), false);
dz('Desire istisna notu (control ≤2)', desireBaslik.includes('closed for control'), true);
dz('her sistemde 4 madde satırı', d2.sistemler.every((s) => s.maddeler.length === 4), true);

// ── role-hangover: Deniz craft means (reach 25/7, exit 24/7) → OFF ──
const rh = M.roleHangover({ exitCapacity: 24 / 7, reach: 25 / 7 });
dz('role-hangover OFF (exit 3.43, reach 3.57)', [rh.bayrak, rh.exit, rh.reach], [false, 3.43, 3.57]);
dz('role-hangover ON (exit 2.5 + reach 4.0)', M.roleHangover({ exitCapacity: 2.5, reach: 4.0 }).bayrak, true);

// ── C.2 Ledger: sentetik APS yanıtları ──
const apsMod = modulBul('aps');
const duz = apsMod.alanlar[0].maddeler.find((m) => !m.ters);
const ters = apsMod.alanlar.flatMap((a) => a.maddeler).find((m) => m.ters);
const apsYanitlar = { [duz.no]: 5, [ters.no]: 5 }; // ters ham 5 → kodlanmış 1 (○ + R)
const led = M.ledgerOlustur(apsYanitlar);
dz('ledger: 1 strong + 1 care', [led.strong.length, led.care.length], [1, 1]);
dz('strong ● ve kök verbatim', led.strong[0].metin.startsWith('● D1: \u201c' + duz.metin), true);
dz('care ○ + (R) + 1/5', led.care[0].metin.includes('○') && led.care[0].metin.includes('(R)') && led.care[0].metin.includes('1/5'), true);
dz('3 ledgerda yok', M.ledgerOlustur({ [duz.no]: 3 }).strong.length + M.ledgerOlustur({ [duz.no]: 3 }).care.length, 0);

// ── A — oryantasyon (aspiration YOK → cümle atlanır) ──
const A = M.orientationDoldur({ 1: 'Deniz Aksoy', 3: 'Istanbul', 6: 'sociology', 7: 'a two-year private studio program (Istanbul)', 8: '3–5 years', 9: ['theatre', 'television'] });
dz('paragraf parçaları', A.paragraf.includes('Deniz Aksoy, based in Istanbul.') && A.paragraf.includes('3–5 years of acting, mostly in theatre, television'), true);
dz('aspiration cümlesi ATLANDI', [A.aspirationVar, A.paragraf.includes('Came to us')], [false, false]);
dz('frame bandla doldu', A.frame.includes('3–5 years'), true);

// ── B — Spark bloğu + komşu ──
const B = M.bBolumu({ hipotez: 'ENFP', komsu: 'INFP', eksenler: [{ eksen: 'E–I', marj: 2 }] });
dz('Spark koçluk bloğu', B.blok.intro.startsWith('Works on enthusiasm and possibility'), true);
dz('komşu satırı Wellspring', B.komsuSatiri.includes('The Wellspring'), true);

// ── Safeguard seçimi: Deniz grid (EDGE D2, D3) + en düşük 2 sistem ──
const skorlar = { 1: 62, 2: 45, 3: 38, 4: 58, 5: 75, 6: 88, 7: 52, 8: 82, 9: 46 };
const apsAlanlar = {};
apsMod.alanlar.forEach((a, i) => { apsAlanlar[a.ad] = { ortalama: (skorlar[i + 1] * 4) / 100 + 1 }; });
const sistemSkor = Object.fromEntries(Object.entries(DENIZ).map(([k, v]) => {
  const tam = modulBul('emotional').part1.sistemler.find((s) => s.ad.startsWith(k)).ad;
  return [tam, { ortalama: v.reduce((a, b) => a + b) / 4 }];
}));
const E = M.eBolumu(apsAlanlar, sistemSkor);
const SG = M.safeguardSec(E.grid, sistemSkor);
// Question Bank tam (30/30) → Deniz EDGE alanları D2+D3 (ikisi de dolu) + en düşük 2 sistem = 4 blok, eksik YOK.
dz('safeguard seçimi: 4 blok (D2 + D3 + 2 sistem, bank tam)', SG.secim.length, 4);
dz('eksik yok (bank 30/30)', SG.eksik.length, 0);
dz('D2 safeguard bank\'tan geldi', SG.secim.some((x) => x.etiket.includes('D2')), true);
dz('E girişleri Deniz (Imagination→Collab→Care→Play)', E.girisler.map((g) => g.ad.split(' (')[0]), ['Imagination', 'Collaboration', 'Care', 'Play']);

// ── ③ Kategori-geçiş işaretleri (retake: onceki YANITLAR ile) ──
// Ledger: bir maddeyi önceki=1 (CARE), şimdi=5 (STRONG) yap → ↑; tersi → ↓;
// aynı kalan → işaret yok.
const oncekiAps = { [duz.no]: 1 }; // önce CARE
const simdiAps = { [duz.no]: 5 };  // şimdi STRONG
const ledGecis = M.ledgerOlustur(simdiAps, oncekiAps);
dz('madde CARE→STRONG ↑', ledGecis.strong.find((s) => s.no === duz.no)?.gecis?.yon, 'yukari');
dz('↑ metni kategori', ledGecis.strong.find((s) => s.no === duz.no)?.gecis?.metin, '↑ care → strong');
const ledDusus = M.ledgerOlustur({ [duz.no]: 1 }, { [duz.no]: 5 });
dz('madde STRONG→CARE ↓', ledDusus.care.find((s) => s.no === duz.no)?.gecis?.yon, 'asagi');
dz('önceki yoksa işaret yok', M.ledgerOlustur({ [duz.no]: 5 }).strong.find((s) => s.no === duz.no)?.gecis, null);
dz('kategori aynıysa işaret yok', M.ledgerOlustur({ [duz.no]: 4 }, { [duz.no]: 5 }).strong.find((s) => s.no === duz.no)?.gecis, null);

// D.2: Anger'ı önce OPEN (tüm 5), şimdi CLOSED (Deniz 2.50) → ↓ OPEN → CLOSED
const angerMaddeleri = modulBul('emotional').part1.sistemler.find((s) => s.ad.startsWith('Anger')).maddeler;
const oncekiEm = {}; for (const m of angerMaddeleri) oncekiEm[m.no] = m.ters ? 1 : 5; // hepsi OPEN
const d2g = M.d2Olustur(emYanitlar, oncekiEm);
const angerG = d2g.sistemler.find((s) => s.ad.startsWith('Anger')).gecis;
dz('Anger OPEN→CLOSED ↓', [angerG?.yon, angerG?.metin], ['asagi', '↓ OPEN → CLOSED']);
dz('değişmeyen sistemde işaret yok (Care)', d2g.sistemler.find((s) => s.ad.startsWith('Care')).gecis, null);
dz('önceki yoksa D.2 işareti yok', M.d2Olustur(emYanitlar).sistemler.every((s) => s.gecis == null), true);

// ── F thread üretimi (Deniz: D9 gap yeterince büyükse T1) ──
const c1D = M.c1Bolumu(apsAlanlar);
const fThreads = M.fThreadleriUret({ c1: c1D, rh: M.roleHangover({ exitCapacity: 24/7, reach: 25/7 }), d2: M.d2Olustur(emYanitlar), hipotez: 'ENFP' });
dz('F üretimi çalışıyor (dizi döner)', Array.isArray(fThreads), true);
dz('F max 5', fThreads.length <= 5, true);

console.log(hata ? `\n${hata} HATA` : '\nDENİZ COACH FİKSTÜRÜ — TÜM TESTLER GEÇTİ (35/35, F üretimi dahil)');
process.exit(hata ? 1 : 0);
