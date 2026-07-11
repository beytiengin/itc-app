// M3 portre seçimi testi — M3 Pack §4 (set × band + hedge)
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os'; import { join } from 'node:path'; import { pathToFileURL } from 'node:url';
const t = mkdtempSync(join(tmpdir(), 'p-'));
const kopya=(k,h,d=(x)=>x)=>writeFileSync(join(t,h),d(readFileSync(k,'utf8')));
for (const f of ['batarya','aps-rapor','core-rapor','coach-rapor','checkin-f','question-bank','m3-pack'])
  kopya(`data/kalibrasyon/${f}.js`, `${f}.mjs`);
kopya('app/lib/aps-rapor-motor.js','aps-motor.mjs',(s)=>s.replace("'../../data/kalibrasyon/aps-rapor'","'./aps-rapor.mjs'"));
kopya('app/lib/core-rapor-motor.js','core-motor.mjs',(s)=>s.replace("'../../data/kalibrasyon/core-rapor'","'./core-rapor.mjs'").replace("'../../data/kalibrasyon/question-bank'","'./question-bank.mjs'").replace("'./aps-rapor-motor'","'./aps-motor.mjs'").replace("'../../data/kalibrasyon/aps-rapor'","'./aps-rapor.mjs'"));
kopya('app/lib/coach-rapor-motor.js','coach-motor.mjs',(s)=>s.replace("'../../data/kalibrasyon/coach-rapor'","'./coach-rapor.mjs'").replace("'../../data/kalibrasyon/question-bank'","'./question-bank.mjs'").replace("'../../data/kalibrasyon/checkin-f'","'./checkin-f.mjs'").replace("'../../data/kalibrasyon/m3-pack'","'./m3-pack.mjs'").replace("import { modulBul } from './batarya-kaydet';","import { batarya } from './batarya.mjs';\nconst modulBul=(s)=>batarya.moduller.find((m)=>m.slug===s)??null;").replace("'./aps-rapor-motor'","'./aps-motor.mjs'").replace("'./core-rapor-motor'","'./core-motor.mjs'"));
const M = await import(pathToFileURL(join(t,'coach-motor.mjs')));
let h=0; const dz=(a,g,b)=>{const ok=JSON.stringify(g)===JSON.stringify(b);if(!ok)h++;console.log((ok?'✓':'✗')+' '+a+(ok?'':` ${JSON.stringify(g)} ≠ ${JSON.stringify(b)}`));};

// Deniz sistemleri: Care 4.25(TOP,UPPER) Play 4.0 Seeking 3.5 Sadness 3.25 Fear 3.25 Desire 3.0 Anger 2.5(EDGE,LOWER)
const sis = { 'Care (tenderness, nurturance)': {ortalama:4.25}, 'Play':{ortalama:4.0}, 'Seeking (curiosity, wanting, drive)':{ortalama:3.5}, 'Sadness (grief, loss)':{ortalama:3.25}, 'Fear':{ortalama:3.25}, 'Desire (erotic longing, attraction)':{ortalama:3.0}, 'Anger':{ortalama:2.5} };
const P = M.m3Portreleri(sis);
dz('7 portre döner', P.length, 7);
dz('en yüksek Care önce', P[0].yalin, 'Care');
dz('Care TOP·UPPER', [P[0].set, P[0].band], ['TOP','UPPER']);
dz('Anger EDGE·LOWER', [P[6].set, P[6].band], ['EDGE','LOWER']);
dz('Care portre dolu', P[0].portre.length > 50, true);
dz('Care TOP_UPPER bloğu dolu', P[0].blok.length > 50, true);
dz('Anger EDGE_LOWER bloğu dolu', P[6].blok.length > 50, true);
// hedge: 3.60-3.90 ya da 2.60-2.90. Seeking 3.5 hedge değil; 3.72 olsa hedge.
const sis2 = { ...sis, 'Play':{ortalama:3.78} }; // Play 3.78 → UPPER sınırı, hedge
const P2 = M.m3Portreleri(sis2);
const play2 = P2.find(x=>x.yalin==='Play');
dz('Play 3.78 hedge ON', play2.hedge, true);
dz('hedge bloğu opener ile başlar', play2.blok.startsWith('This colour sits'), true);
// band sınırları
dz('MIDDLE band (3.0 Desire)', P.find(x=>x.yalin==='Desire').band, 'MIDDLE');

console.log(h?`\n${h} HATA`:'\nM3 PORTRE — 11/11 GEÇTİ');
process.exit(h?1:0);
