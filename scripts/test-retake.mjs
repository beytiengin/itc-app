// retakeDurumu 84-gün kapısı mantığı testi (saf, Supabase'siz)
const ESIK_MS = 84 * 24 * 60 * 60 * 1000;
function kapiHesap(rows, LEGACY = { m1_aps: 'aps', m3_emotional: 'emotional' }) {
  const simdi = Date.now();
  const sonuc = {};
  for (const r of rows) {
    const slug = LEGACY[r.modul] ?? r.modul;
    if (sonuc[slug]) continue;
    sonuc[slug] = { acik: (simdi - new Date(r.created_at).getTime()) >= ESIK_MS, sonTarih: r.created_at };
  }
  return sonuc;
}
const gunOnce = (g) => new Date(Date.now() - g * 864e5).toISOString();
let h = 0; const dz = (a, g, b) => { const ok = JSON.stringify(g) === JSON.stringify(b); if (!ok) h++; console.log((ok?'✓':'✗')+' '+a+(ok?'':` ${JSON.stringify(g)} ≠ ${JSON.stringify(b)}`)); };

// 90 gün önce APS → açık; 30 gün önce emotional → kapalı
let k = kapiHesap([{ modul: 'aps', created_at: gunOnce(90) }, { modul: 'emotional', created_at: gunOnce(30) }]);
dz('APS 90g açık', k.aps.acik, true);
dz('emotional 30g kapalı', k.emotional.acik, false);
// tam 84 gün sınırı → açık (>=)
dz('84g tam sınır açık', kapiHesap([{ modul: 'aps', created_at: gunOnce(84) }]).aps.acik, true);
dz('83g kapalı', kapiHesap([{ modul: 'aps', created_at: gunOnce(83) }]).aps.acik, false);
// birden çok APS → en yeni sayılır (retake sonrası kapı yeniden kapanır)
k = kapiHesap([{ modul: 'aps', created_at: gunOnce(5) }, { modul: 'aps', created_at: gunOnce(200) }]);
dz('retake sonrası en yeni (5g) → kapalı', k.aps.acik, false);
// legacy m1_aps de aps'e sayılır
dz('legacy m1_aps → aps 90g açık', kapiHesap([{ modul: 'm1_aps', created_at: gunOnce(90) }]).aps.acik, true);
// hiç kayıt yok → boş (RetakeSatiri hiçbir şey göstermez)
dz('kayıtsız boş', Object.keys(kapiHesap([])).length, 0);
console.log(h ? `\n${h} HATA` : '\nRETAKE KAPISI — 7/7 GEÇTİ');
process.exit(h ? 1 : 0);
