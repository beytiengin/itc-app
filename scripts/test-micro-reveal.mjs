// m4/m9 micro-reveal testi — Karar Kaydı Eki v0.3 (A.9 + A.10)
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os'; import { join } from 'node:path'; import { pathToFileURL } from 'node:url';
const t = mkdtempSync(join(tmpdir(), 'mr-'));
writeFileSync(join(t,'routing.mjs'), readFileSync('data/kalibrasyon/routing.js','utf8'));
const R = (await import(pathToFileURL(join(t,'routing.mjs')))).routing;
let h=0; const dz=(a,g,b)=>{const ok=JSON.stringify(g)===JSON.stringify(b);if(!ok)h++;console.log((ok?'✓':'✗')+' '+a+(ok?'':` ${JSON.stringify(g)} ≠ ${JSON.stringify(b)}`));};
const m9 = R.microReveals.m9;

// m4: {channel} placeholder + canlı
dz('m4 {channel} placeholder', R.microReveals.m4.metin.includes('{channel}'), true);

// A.9: m9 yeni cümle (Candidate B), eski emekli
dz('m9 yeni cümle (Two doors)', m9.metin.includes('Two doors already carry you back'), true);
dz('m9 eski cümle emekli (are noted YOK)', !m9.metin.includes('are noted'), true);
dz('m9 {channel_1}+{channel_2}', m9.metin.includes('{channel_1}') && m9.metin.includes('{channel_2}'), true);
dz('m9 render UNBLOCKED', m9.onayNot.includes('UNBLOCKED'), true);
dz('m9 metinVerisiz fallback korundu', !!m9.metinVerisiz, true);

// A.10: BASIC Ph EN+TR, 6 kanal, sabit R1→R6 render kuralı
const bph = m9.basicPhKanallar;
dz('BASIC Ph 6 kanal EN+TR', ['R1','R2','R3','R4','R5','R6'].every(k=>bph[k]?.en&&bph[k]?.tr), true);
dz('R1 = Meaning/Anlam (Belief değil)', [bph.R1.en, bph.R1.tr], ['Meaning','Anlam']);
dz('R4 = Imagination/Hayal Gücü', [bph.R4.en, bph.R4.tr], ['Imagination','Hayal Gücü']);
dz('render order kuralı R1→R6 (skor değil)', bph.not.includes('R1→R6') && bph.not.includes('skor sırası'), true);

// top-2 SEÇ ama R1→R6 GÖSTER simülasyonu (sıralama ima etmez)
const simSecim = (rk) => {
  const order = ['R1','R2','R3','R4','R5','R6'];
  const top2 = Object.entries(rk).map(([id,v])=>({id,v})).sort((a,b)=>b.v-a.v).slice(0,2).map(x=>x.id);
  return order.filter(id => top2.includes(id));
};
// R5=5, R2=4 en yüksek → skor sırası [R5,R2] ama render [R2,R5]
dz('top-2 R1→R6 sırada gösterilir (skor sırası DEĞİL)', simSecim({R1:1,R2:4,R3:2,R4:1,R5:5,R6:2}), ['R2','R5']);

console.log(h?`\n${h} HATA`:'\nMICRO-REVEAL v0.3 — 11/11 GEÇTİ');
process.exit(h?1:0);
