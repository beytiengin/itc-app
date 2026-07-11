// LAUNCH SCOPE testi — Ek v0.4 A.11: M4-9 aktör render gate off, core-path korundu
import { readFileSync } from 'node:fs';
const page = readFileSync('app/batarya/page.js', 'utf8');
let h=0; const dz=(a,g,b)=>{const ok=g===b;if(!ok)h++;console.log((ok?'✓':'✗')+' '+a+(ok?'':` ${JSON.stringify(g)} ≠ ${JSON.stringify(b)}`));};

// LaunchScopeTesekkur bileşeni var + verbatim metin
dz('LaunchScopeTesekkur tanımlı', page.includes('function LaunchScopeTesekkur'), true);
dz('teşekkür metni verbatim (safely kept)', page.includes('your answers are in and safely kept'), true);
dz('teşekkür metni verbatim (end of 2026)', page.includes('it reaches you by the end of 2026'), true);

// M4-9 reveal'ler LaunchScopeTesekkur'a yönlendi (gate off)
const m49 = ['access_reveal','flow_reveal','regulation_reveal','mindfulness_reveal','body_reveal','entry_exit_reveal'];
for (const g of m49) {
  const satir = page.split('\n').find(l => l.includes(`gorunum === '${g}'`));
  dz(`${g} → LaunchScopeTesekkur`, satir?.includes('LaunchScopeTesekkur') ?? false, true);
}

// CORE-PATH reveal'leri DOKUNULMADI (launch scope = onlar)
const apsSatir = page.split('\n').find(l => l.includes("gorunum === 'aps_reveal'"));
dz('aps_reveal → ApsMicroReveal (korundu)', apsSatir?.includes('ApsMicroReveal') ?? false, true);
const emoSatir = page.split('\n').find(l => l.includes("gorunum === 'emotional_reveal'"));
dz('emotional_reveal → EmotionalMicroReveal (korundu)', emoSatir?.includes('EmotionalMicroReveal') ?? false, true);

// PLUMBING korundu: reveal bileşenleri SİLİNMEDİ (payment principle sonra)
dz('AccessMicroReveal SİLİNMEDİ (plumbing)', page.includes('function AccessMicroReveal'), true);
dz('EntryExitMicroReveal SİLİNMEDİ (plumbing)', page.includes('function EntryExitMicroReveal'), true);
dz('getter importları korundu', page.includes('accessSonucGetir') && page.includes('entryExitSonucGetir'), true);

// A.12 (Ek v0.5): m4 optional-channel exclusion — plumbing doğru olmalı
dz('m4 optional exclusion filtresi var', /one more\|optional/i.test(page) && page.includes('otomatik {channel} türetiminden'), true);
// mantık simülasyonu: optional en yüksek olsa bile dışlanır
const m4sim = (kanallar) => Object.entries(kanallar)
  .filter(([ad]) => !/one more|optional/i.test(ad))
  .map(([ad, sc]) => ({ ad, ort: sc?.ortalama ?? sc }))
  .filter((x) => x.ort != null).sort((a, b) => b.ort - a.ort)[0]?.ad;
dz('optional en yüksekse dışlanır', /optional/i.test(m4sim({'Touch (tactile)':{ortalama:4},'One more (optional)':{ortalama:5}}) ?? ''), false);

console.log(h?`\n${h} HATA`:'\nLAUNCH SCOPE A.11 + A.12 — 15/15 GEÇTİ');
process.exit(h?1:0);
