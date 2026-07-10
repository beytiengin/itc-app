// =====================================================================
// scripts/test-core-rapor.mjs — Core Report motoru · Spark/Deniz fikstürü
// Fikstür girdileri: SAMPLE_Coach_Core_Report_Deniz_v0_5 (grid değerleri)
// Beklenen çıktılar: SAMPLE_Core_Report_The_Spark (girişler, rota, set)
// Çalıştırma (repo kökünden): node scripts/test-core-rapor.mjs
// DOĞRULAMA İMZASI: ITC-COREREPORT-TEST-20260709
// =====================================================================
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const t = mkdtempSync(join(tmpdir(), 'core-'));
writeFileSync(join(t, 'aps-rapor.mjs'), readFileSync('data/kalibrasyon/aps-rapor.js', 'utf8'));
writeFileSync(join(t, 'core-rapor.mjs'), readFileSync('data/kalibrasyon/core-rapor.js', 'utf8'));
writeFileSync(join(t, 'aps-motor.mjs'),
  readFileSync('app/lib/aps-rapor-motor.js', 'utf8')
    .replace("'../../data/kalibrasyon/aps-rapor'", "'./aps-rapor.mjs'"));
writeFileSync(join(t, 'core-motor.mjs'),
  readFileSync('app/lib/core-rapor-motor.js', 'utf8')
    .replace("'../../data/kalibrasyon/core-rapor'", "'./core-rapor.mjs'")
    .replace("'./aps-rapor-motor'", "'./aps-motor.mjs'")
    .replace("'../../data/kalibrasyon/aps-rapor'", "'./aps-rapor.mjs'"));
const M = await import(pathToFileURL(join(t, 'core-motor.mjs')));
const C = (await import(pathToFileURL(join(t, 'core-rapor.mjs')))).coreRapor;

let hata = 0;
const dz = (ad, g, bek) => {
  const ok = JSON.stringify(g) === JSON.stringify(bek);
  if (!ok) hata++;
  console.log((ok ? '✓' : '✗') + ' ' + ad + (ok ? '' : ': ' + JSON.stringify(g) + ' ≠ ' + JSON.stringify(bek)));
};

// ── Deniz/Spark fikstürü ──
const skorlar = { 1: 62, 2: 45, 3: 38, 4: 58, 5: 75, 6: 88, 7: 52, 8: 82, 9: 46 };
const alanAdlari = [
  'Domain 1 — Script Analysis & Character Construction', 'Domain 2 — Concentration & Presence',
  'Domain 3 — Body & Movement Expression', 'Domain 4 — Voice & Speech',
  'Domain 5 — Emotional Expression', 'Domain 6 — Imagination',
  'Domain 7 — Professional Discipline & Motivation', 'Domain 8 — Collaboration',
  'Domain 9 — Craft Confidence (Self-Efficacy)',
];
const apsAlanlar = {};
alanAdlari.forEach((ad, i) => { apsAlanlar[ad] = { ortalama: (skorlar[i + 1] * 4) / 100 + 1 }; });
// GERÇEK batarya sistem adları (parantezli açıklamalarıyla) — fikstür artık
// canlı adlarla koşar; yalın-ad regresyonu (Care/Play blok kaybı) bekçili.
const sistemler = {
  'Care (tenderness, nurturance)': { ortalama: 4.25 }, Play: { ortalama: 4.00 },
  'Seeking (curiosity, wanting, drive)': { ortalama: 3.50 },
  'Sadness (grief, loss)': { ortalama: 3.25 }, Fear: { ortalama: 3.25 },
  'Desire (erotic longing, attraction)': { ortalama: 3.00 }, Anger: { ortalama: 2.50 },
};

const { grid, girisler } = M.girisleriSec(apsAlanlar, sistemler);
dz('4 giriş', girisler.length, 4);
dz('giriş sırası: alanlar önce, yüksek önce', girisler.map((g) => g.ad.split(' (')[0]), ['Imagination', 'Collaboration', 'Care', 'Play']);
dz('D9 asla giriş değil', girisler.some((g) => g.dNo === 9), false);

const dokular = girisler.map(M.girisDoku);
dz('alan başlık kalıbı', dokular[0].baslik, 'An entrance of yours: Imagination — one of your strongest ground.');
dz('sistem başlık kalıbı YALIN adla (parantez gloss aktöre taşınmaz)', dokular[2].baslik, 'An entrance of yours: Care — a colour you reach easily.');
dz('4 giriş bloğu da mevcut (Spark fikstüründe)', dokular.every((d) => d.blok && d.blok.length > 100), true);
dz('Imagination bloğu örnekle başlıyor', dokular[0].blok.startsWith('Imagination is your strong entrance'), true);

const rota = M.rotaCumlesi(grid);
dz('rota tetiklendi ve sıra doğru (D2 45 → M7 önce)', rota,
  'Your skills profile already pointed somewhere first: Performance Mindfulness (Module 7) and The Actor\'s Body (Module 8). Those doors are worth opening in that order — and every door below stays open regardless.');

dz('ENFP seti geçerli', !!M.doorwaySeti('ENFP'), true);
dz('ENFP set 29 madde', M.doorwaySeti('ENFP').maddeler.length, 29);
dz('ENFJ seti KAPALI (audit pending)', M.doorwaySeti('ENFJ'), null);
dz('tanımsız doorway KAPALI', M.doorwaySeti('INTJ'), null);
dz('doorway satırı (PROPOSED)', M.doorwaySatiri('The Spark'), 'Your doorway: The Spark. Here is the question set built for it.');

// Beraberlik: 2. ile 3. alan eşitse üçü de girer
const beraber = JSON.parse(JSON.stringify(apsAlanlar));
beraber['Domain 5 — Emotional Expression'].ortalama = (82 * 4) / 100 + 1; // D5 = D8 = 82
dz('alan beraberliği birlikte render', M.girisleriSec(beraber, sistemler).girisler.filter((g) => g.tur === 'domain').length, 3);

// Strengths-only bekçileri: veri dosyasının aktör kopyasında sayı/band sızıntısı olamaz
const aktorKopya = JSON.stringify([C.ch1, C.ch2, C.ch3.header, C.ch3.boundaryLine, C.ch4, C.ch5, C.ch6, C.checkIn, C.girisBloklari.domain, C.girisBloklari.sistem, C.setler.ENFP]);
dz("aktör kopyasında 'type' yok", /\btype\b/i.test(aktorKopya), false);
dz("aktör kopyasında band/EDGE adı yok", /UPPER|LOWER|EDGE set/.test(aktorKopya), false);
dz('boundary paragraph kanonik biçimde', C.ch1.boundaryParagraph.includes('the actions, the stories, the emotions or the thoughts you build for a character are the character\'s'), true);
dz('checkIn mevcut', typeof C.checkIn === 'string' && C.checkIn.length > 50, true);

console.log(hata ? `\n${hata} HATA` : '\nSPARK FİKSTÜRÜ — TÜM TESTLER GEÇTİ (17/17, gerçek-ad fikstürü)');
process.exit(hata ? 1 : 0);
