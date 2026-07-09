// =====================================================================
// scripts/test-aps-rapor.mjs — APS Rapor Motoru · Deniz fikstürü testleri
// Kaynak fikstür: APS_Sample_Actor_Report_Deniz_v0_2.docx (kurgusal skorlar,
// beklenen grid örnek belgede AÇIK yazılıdır — kabul testi buradan gelir).
// Çalıştırma (repo kökünden): node scripts/test-aps-rapor.mjs
// Repo CJS varsayılan olduğundan motor+data geçici .mjs'e kopyalanıp import edilir.
// DOĞRULAMA İMZASI: ITC-APSRAPOR-TEST-V2-20260709
// =====================================================================
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const t = mkdtempSync(join(tmpdir(), 'aps-'));
writeFileSync(join(t, 'aps-rapor.mjs'), readFileSync('data/kalibrasyon/aps-rapor.js', 'utf8'));
writeFileSync(join(t, 'motor.mjs'),
  readFileSync('app/lib/aps-rapor-motor.js', 'utf8')
    .replace("'../../data/kalibrasyon/aps-rapor'", "'./aps-rapor.mjs'"));
const M = await import(pathToFileURL(join(t, 'motor.mjs')));

// ── Deniz fikstürü ──────────────────────────────────────────────────────
const hedefSkorlar = { 1: 82, 2: 55, 3: 68, 4: 60, 5: 78, 6: 85, 7: 42, 8: 50, 9: 48 };
const alanAdlari = [
  'Domain 1 — Script Analysis & Character Construction', 'Domain 2 — Concentration & Presence',
  'Domain 3 — Body & Movement Expression', 'Domain 4 — Voice & Speech',
  'Domain 5 — Emotional Expression', 'Domain 6 — Imagination',
  'Domain 7 — Professional Discipline & Motivation', 'Domain 8 — Collaboration',
  'Domain 9 — Craft Confidence (Self-Efficacy)',
];
const alanlar = {};
alanAdlari.forEach((ad, i) => { alanlar[ad] = { ortalama: (hedefSkorlar[i + 1] * 4) / 100 + 1, cevaplanan: 5, toplamMadde: 5 }; });

const grid = M.apsGrid(alanlar);
let hata = 0;
const dz = (ad, g, bek) => {
  const ok = JSON.stringify(g) === JSON.stringify(bek);
  if (!ok) hata++;
  console.log((ok ? '✓' : '✗') + ' ' + ad + (ok ? '' : ': ' + JSON.stringify(g) + ' ≠ ' + JSON.stringify(bek)));
};
const byNo = Object.fromEntries(grid.domainler.map((d) => [d.dNo, d]));

dz('skorlar D1–8', grid.domainler.map((d) => d.skor), [82, 55, 68, 60, 78, 85, 42, 50]);
dz('TOP = D1,D5,D6', grid.domainler.filter((d) => d.set === 'TOP').map((d) => d.dNo).sort(), [1, 5, 6]);
dz('MIDDLE = D2,D3,D4', grid.domainler.filter((d) => d.set === 'MIDDLE').map((d) => d.dNo).sort(), [2, 3, 4]);
dz('EDGE = D7,D8', grid.domainler.filter((d) => d.set === 'EDGE').map((d) => d.dNo).sort(), [7, 8]);
dz('TOP bandları UPPER', [byNo[6].band, byNo[1].band, byNo[5].band], ['UPPER', 'UPPER', 'UPPER']);
dz('D3 hedge açık', byNo[3].hedge, true);
dz('D7 LOWER + hedge', [byNo[7].band, byNo[7].hedge], ['LOWER', true]);
dz('D8 MIDDLE band, hedgesiz', [byNo[8].band, byNo[8].hedge], ['MIDDLE', false]);
dz('D9 MIDDLE, hedgesiz', [grid.d9.band, grid.d9.hedge], ['MIDDLE', false]);
dz('D1–8 ortalama = 65', grid.d18ortalamaSkor, 65);
dz('gap −17 → bayrak AÇIK', [grid.d9.gap, grid.d9.gapBayrak], [-17, true]);

const montaj = M.sayfaMontaji(grid);
dz('sayfa 3 sırası D6→D1→D5', montaj.sayfa3.map((x) => x.dNo), [6, 1, 5]);
dz('sayfa 4 sırası D8→D7 (yüksek önce)', montaj.sayfa4.map((x) => x.dNo), [8, 7]);
dz('orta şerit D3→D4→D2', montaj.ortaSerit.map((x) => x.dNo), [3, 4, 2]);

const d3blok = M.blokSec(3, 'MIDDLE', 'MIDDLE');
const d3m = M.hedgeUygula(d3blok, true);
dz('hedge ilk cümleyi değiştirir', d3m.startsWith('This area sits near the middle of your profile'), true);
dz('hedge blok gövdesini korur', d3m.endsWith(d3blok.metin.slice(d3blok.metin.indexOf('. ') + 2).slice(-30)), true);

const mr = M.microRevealMetni(grid);
dz('micro-reveal top domain = Imagination', mr.includes('Your strongest ground so far: Imagination.'), true);
dz('experience_band yerleşir', M.experienceContextMetni('3–5 years').includes('journey: 3–5 years. Hold'), true);

// Bekçi 1: checkIn bloğu veri dosyasında VAR (v0.2'de imza-sonrası blok
// gözden kaçmıştı — bu bekçi o hatanın tekrarını önler).
const veri = await import(pathToFileURL(join(t, 'aps-rapor.mjs')));
dz('checkIn bloğu mevcut', typeof veri.apsRapor.checkIn === 'string' && veri.apsRapor.checkIn.length > 50, true);
dz('sürüm v0.3', veri.apsRapor.meta.surum, 'v0.3');
dz('holdYourDoorwayLightly anahtarı', typeof veri.apsRapor.page1.holdYourDoorwayLightly, 'string');
dz("aktör kopyasında 'type' yok", /\btype\b/i.test(JSON.stringify([veri.apsRapor.page1, veri.apsRapor.domainler, veri.apsRapor.page5, veri.apsRapor.page6, veri.apsRapor.checkIn, veri.apsRapor.microReveal])), false);

// Sert kural bekçisi: motor asla toplam/komposit üretmez (pack §0).
dz('komposit skor alanı YOK', 'toplam' in grid || 'composite' in grid, false);

console.log(hata ? `\n${hata} HATA` : '\nDENİZ FİKSTÜRÜ — TÜM TESTLER GEÇTİ (23/23)');
process.exit(hata ? 1 : 0);
