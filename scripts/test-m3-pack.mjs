import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os'; import { join } from 'node:path'; import { pathToFileURL } from 'node:url';
const t=mkdtempSync(join(tmpdir(),'m3-'));
writeFileSync(join(t,'m3.mjs'),readFileSync('data/kalibrasyon/m3-pack.js','utf8'));
const { m3Pack } = await import(pathToFileURL(join(t,'m3.mjs')));
let h=0; const dz=(a,g,b)=>{const ok=JSON.stringify(g)===JSON.stringify(b);if(!ok)h++;console.log((ok?'✓':'✗')+' '+a);};
dz('micro-reveal {top_system_name} placeholder içerir', m3Pack.microReveal.includes('{top_system_name}'), true);
dz('micro-reveal core path anıyor', m3Pack.microReveal.includes('core path'), true);
const doldu = m3Pack.microReveal.replace('{top_system_name}', 'Care');
dz('placeholder dolunca temiz', !doldu.includes('{'), true);
dz('Emotion Exploration adı onaylı (Ek v0.2 A.5: "tool" kaldırıldı)', m3Pack.emotionExplorationAdi, 'Emotion Exploration');
// 63 portre içerik olarak UYGULANDI (M3PORTRE relay): 7 sistem × 9 blok + 7 portre.
const _sis = m3Pack.coachPortreleri.sistemler;
dz('7 sistem portresi mevcut', Object.keys(_sis).length, 7);
dz('63 blok (7 sistem × 9 position×band)', Object.values(_sis).reduce((n, s) => n + Object.keys(s.bloklar).length, 0), 63);
dz('her sistemde core portre var', Object.values(_sis).every((s) => typeof s.portre === 'string' && s.portre.length > 30), true);
console.log(h?`\n${h} HATA`:'\nM3 PACK — 7/7 GEÇTİ (portre içeriği bağlandı)');
process.exit(h?1:0);
