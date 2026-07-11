// F thread üretimi testi — Checkin/F Templates v1.0 §2
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os'; import { join } from 'node:path'; import { pathToFileURL } from 'node:url';
const t = mkdtempSync(join(tmpdir(), 'f-'));
const kopya=(k,h,d=(x)=>x)=>writeFileSync(join(t,h),d(readFileSync(k,'utf8')));
kopya('data/kalibrasyon/batarya.js','batarya.mjs');
kopya('data/kalibrasyon/aps-rapor.js','aps-rapor.mjs');
kopya('data/kalibrasyon/core-rapor.js','core-rapor.mjs');
kopya('data/kalibrasyon/coach-rapor.js','coach-rapor.mjs');
kopya('data/kalibrasyon/checkin-f.js','checkin-f.mjs');
kopya('data/kalibrasyon/m3-pack.js','m3-pack.mjs');
kopya('data/kalibrasyon/question-bank.js','question-bank.mjs');
kopya('app/lib/aps-rapor-motor.js','aps-motor.mjs',(s)=>s.replace("'../../data/kalibrasyon/aps-rapor'","'./aps-rapor.mjs'"));
kopya('app/lib/core-rapor-motor.js','core-motor.mjs',(s)=>s.replace("'../../data/kalibrasyon/core-rapor'","'./core-rapor.mjs'").replace("'../../data/kalibrasyon/question-bank'","'./question-bank.mjs'").replace("'./aps-rapor-motor'","'./aps-motor.mjs'").replace("'../../data/kalibrasyon/aps-rapor'","'./aps-rapor.mjs'"));
kopya('app/lib/coach-rapor-motor.js','coach-motor.mjs',(s)=>s.replace("'../../data/kalibrasyon/coach-rapor'","'./coach-rapor.mjs'").replace("'../../data/kalibrasyon/question-bank'","'./question-bank.mjs'").replace("'../../data/kalibrasyon/checkin-f'","'./checkin-f.mjs'").replace("'../../data/kalibrasyon/m3-pack'","'./m3-pack.mjs'").replace("import { modulBul } from './batarya-kaydet';","import { batarya } from './batarya.mjs';\nconst modulBul=(slug)=>batarya.moduller.find((m)=>m.slug===slug)??null;").replace("'./aps-rapor-motor'","'./aps-motor.mjs'").replace("'./core-rapor-motor'","'./core-motor.mjs'"));
const M = await import(pathToFileURL(join(t,'coach-motor.mjs')));
let h=0; const dz=(a,g,b)=>{const ok=JSON.stringify(g)===JSON.stringify(b);if(!ok)h++;console.log((ok?'✓':'✗')+' '+a+(ok?'':` ${JSON.stringify(g)} ≠ ${JSON.stringify(b)}`));};

// T1 impostor: gap -16 → impostor cümlesi, |16|
let F = M.fThreadleriUret({ c1: { d9: { gap: -16 }, grid: { domainler: [] } }, rh: null, d2: null });
dz('T1 impostor tetik', F.length, 1);
dz('T1 impostor metni', F[0].includes('16 points under') && F[0].includes('impostor'), true);
// T1 overconfidence: gap +20
F = M.fThreadleriUret({ c1: { d9: { gap: 20 }, grid: { domainler: [] } }, rh: null, d2: null });
dz('T1 overconfidence', F[0].includes('20 points above') && F[0].includes('overconfidence'), true);
// T1 tetiklemez: |gap| < 15
F = M.fThreadleriUret({ c1: { d9: { gap: 10 }, grid: { domainler: [] } }, rh: null, d2: null });
dz('T1 tetiklemez (gap 10)', F.length, 0);

// T4 role-hangover
F = M.fThreadleriUret({ c1: { d9: {}, grid: { domainler: [] } }, rh: { bayrak: true }, d2: null });
dz('T4 exit tetik', F[0].includes('coming back runs slow'), true);

// T3 natural-ground: ENFP → D6, D6 EDGE ise
F = M.fThreadleriUret({ c1: { d9: {}, grid: { domainler: [{ dNo: 6, set: 'EDGE', skor: 30, ad: 'Domain 6 — Imagination' }] } }, rh: null, d2: null, hipotez: 'ENFP' });
dz('T3 natural-ground ENFP→D6 EDGE', F[0].includes('D6 Imagination') && F[0].includes('home ground'), true);
// T3 tetiklemez: D6 TOP ise
F = M.fThreadleriUret({ c1: { d9: {}, grid: { domainler: [{ dNo: 6, set: 'TOP', skor: 90, ad: 'Domain 6 — Imagination' }] } }, rh: null, d2: null, hipotez: 'ENFP' });
dz('T3 tetiklemez (D6 TOP)', F.length, 0);

// Öncelik + max 5: T1+T4 birlikte → T1 önce
F = M.fThreadleriUret({ c1: { d9: { gap: -18 }, grid: { domainler: [] } }, rh: { bayrak: true }, d2: null });
dz('T1 önce T4 sonra (öncelik)', [F.length, F[0].includes('impostor'), F[1].includes('coming back')], [2, true, true]);

// T2 access vs expression: D5 EDGE + yüksek reach sistem
F = M.fThreadleriUret({ c1: { d9: {}, grid: { domainler: [{ dNo: 5, set: 'EDGE', band: 'LOWER', skor: 40, ad: 'Domain 5 — Emotional Expression' }] } }, rh: null, d2: { sistemler: [{ ad: 'Care (tenderness)', ort: 4.5 }] }, hipotez: null });
dz('T2 access>expression (D5 edge)', F[0].includes('Care is easy') && F[0].includes('working edge'), true);

console.log(h ? `\n${h} HATA` : '\nF THREAD ÜRETİMİ — 9/9 GEÇTİ');
process.exit(h?1:0);
