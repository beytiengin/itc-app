// m4/m9 micro-reveal plumbing testi — Karar Kaydı Eki v0.2 §B
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os'; import { join } from 'node:path'; import { pathToFileURL } from 'node:url';
const t = mkdtempSync(join(tmpdir(), 'mr-'));
writeFileSync(join(t,'routing.mjs'), readFileSync('data/kalibrasyon/routing.js','utf8'));
const R = (await import(pathToFileURL(join(t,'routing.mjs')))).routing;
let h=0; const dz=(a,g,b)=>{const ok=JSON.stringify(g)===JSON.stringify(b);if(!ok)h++;console.log((ok?'✓':'✗')+' '+a+(ok?'':` ${JSON.stringify(g)} ≠ ${JSON.stringify(b)}`));};

// m4: {channel} placeholder + canlıya hazır
dz('m4 {channel} placeholder', R.microReveals.m4.metin.includes('{channel}'), true);
// m9: 2 cümle korundu + plumbing notu
dz('m9 2. cümle var (recovery channels)', R.microReveals.m9.metin.includes('recovery channels'), true);
dz('m9 {channel_1} + {channel_2}', R.microReveals.m9.metin.includes('{channel_1}') && R.microReveals.m9.metin.includes('{channel_2}'), true);
dz('m9 plumbing kurulu, render bekler', R.microReveals.m9.onayNot.includes('RENDER BEKLER'), true);
dz('m9 metinVerisiz arşiv', !!R.microReveals.m9.metinVerisiz, true);
// BASIC Ph placeholder (adlar onay bekliyor)
dz('BASIC Ph 6 kanal placeholder', Object.keys(R.microReveals.m9.basicPhKanallar).filter(k=>/^R\d$/.test(k)).length, 6);
dz('BASIC Ph adları onay bekliyor notu', R.microReveals.m9.basicPhKanallar.not.includes('ONAY BEKLİYOR'), true);

console.log(h?`\n${h} HATA`:'\nMICRO-REVEAL PLUMBING — 7/7 GEÇTİ');
process.exit(h?1:0);
