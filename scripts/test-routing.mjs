// Routing v0.1 testi — rota haritası + micro-reveals + doorway check-in
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os'; import { join } from 'node:path'; import { pathToFileURL } from 'node:url';
const t = mkdtempSync(join(tmpdir(), 'rt-'));
const kopya=(k,h,d=(x)=>x)=>writeFileSync(join(t,h),d(readFileSync(k,'utf8')));
for (const f of ['batarya','aps-rapor','core-rapor','question-bank','routing'])
  kopya(`data/kalibrasyon/${f}.js`, `${f}.mjs`);
kopya('app/lib/aps-rapor-motor.js','aps-motor.mjs',(s)=>s.replace("'../../data/kalibrasyon/aps-rapor'","'./aps-rapor.mjs'"));
kopya('app/lib/core-rapor-motor.js','core-motor.mjs',(s)=>s.replace("'../../data/kalibrasyon/core-rapor'","'./core-rapor.mjs'").replace("'../../data/kalibrasyon/question-bank'","'./question-bank.mjs'").replace("'./aps-rapor-motor'","'./aps-motor.mjs'").replace("'../../data/kalibrasyon/aps-rapor'","'./aps-rapor.mjs'"));
const CM = await import(pathToFileURL(join(t,'core-motor.mjs')));
const R = (await import(pathToFileURL(join(t,'routing.mjs')))).routing;
const C = (await import(pathToFileURL(join(t,'core-rapor.mjs')))).coreRapor;
let h=0; const dz=(a,g,b)=>{const ok=JSON.stringify(g)===JSON.stringify(b);if(!ok)h++;console.log((ok?'✓':'✗')+' '+a+(ok?'':` ${JSON.stringify(g)} ≠ ${JSON.stringify(b)}`));};

// Rota haritası: 4 module-routed alan (D2/D3/D6/D7)
dz('rotaHaritasi 3 alan (D7 geri alındı)', Object.keys(C.rotaHaritasi).filter(k=>/^\d$/.test(k)).sort(), ['2','3','6']);
dz('prose-door 3 alan (D1/D4/D8)', Object.keys(C.rotaProseDoor).filter(k=>/^\d$/.test(k)).sort(), ['1','4','8']);
dz('never-routes D5+D7+D9', Object.keys(C.rotaNeverRoutes).filter(k=>/^\d$/.test(k)).sort(), ['5','7','9']);

// Instrument order: D6 ve D2 EDGE ise → D2 önce (instrument order, skor değil)
const grid = { domainler: [
  { dNo: 6, set: 'EDGE', skor: 20, ad: 'D6' },
  { dNo: 2, set: 'EDGE', skor: 80, ad: 'D2' },
]};
const cumle = CM.rotaCumlesi(grid);
dz('instrument order: M7(D2) M4(D6) sırası', cumle.indexOf('Module 7') < cumle.indexOf('Module 4'), true);

// D7 EDGE → M6 rota
dz('D7 rotasız (Ek v0.2: D7→M6 geri alındı)', CM.rotaCumlesi({domainler:[{dNo:7,set:'EDGE',skor:30,ad:'D7'}]}), null);
// D5 EDGE → rota YOK (never-routes)
dz('D5 rota tetiklemez', CM.rotaCumlesi({domainler:[{dNo:5,set:'EDGE',skor:30,ad:'D5'}]}), null);

// Micro-reveals
dz('7 micro-reveal', Object.keys(R.microReveals).length, 7);
dz('m4 channel placeholder', R.microReveals.m4.metin.includes('{channel}'), true);
dz('m6 statik (placeholder yok)', /\{/.test(R.microReveals.m6.metin), false);
dz('m9 veto: verisiz alternatif var', !!R.microReveals.m9.metinVerisiz, true);

// Doorway check-in
dz('doorway check-in soru', R.doorwayCheckin.soru.includes('first mirror'), true);
// Aspiration
dz('aspiration: yeni madde gerekmez', R.aspirationDogrulama.includes('Yeni madde yok'), true);

console.log(h?`\n${h} HATA`:'\nROUTING v1.1 — 12/12 GEÇTİ');
process.exit(h?1:0);
