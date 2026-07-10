// =====================================================================
// app/lib/core-rapor-motor.js — Core Report montaj motoru (Spec v0.3)
// Kaynak-of-truth: data/kalibrasyon/core-rapor.js (verbatim spec kopyası).
// Bu dosya YENİ kural içermez; spec'in seçim/montaj kurallarını
// hesaplanabilir kılar. Beklenen çıktılar Spark örneğinden (fikstür).
//
// GİRİŞ SEÇİMİ (spec §1, değişmeden v0.2'den): top 2 APS alanı + top 2
// duygusal sistem; beraberlikler birlikte render edilir; D9 ASLA giriş
// olamaz (yapısal: yalnız D1–D8 taranır). Sıra: önce alanlar sonra
// sistemler, her grupta yüksekten düşüğe.
// ROTA (Ch.5): yalnız APS EDGE alanlarından; harita coreRapor.rotaHaritasi
// (2 doğrulanmış çift; tam harita Filiz'de). Eşleşme yoksa cümle tetiklenmez.
// DOĞRULAMA İMZASI: ITC-COREREPORT-MOTOR-20260709
// =====================================================================

import { coreRapor } from '../../data/kalibrasyon/core-rapor';
import { apsGrid } from './aps-rapor-motor';
import { apsRapor } from '../../data/kalibrasyon/aps-rapor';

// Kısa alan adı: pack domain adı ("Imagination", "Collaboration", …).
function alanAdi(dNo) {
  return apsRapor.domainler.find((d) => d.no === dNo)?.ad ?? null;
}

// Giriş seçimi. apsAlanlar = apsSkorla().alanlar (9 alan, batarya sırası);
// sistemler = emotionalSkorla().sistemler ({ad: {ortalama,…}}).
export function girisleriSec(apsAlanlar, sistemler) {
  const grid = apsGrid(apsAlanlar); // D9 zaten dışarıda (grid.domainler = D1–D8)
  const alanSirali = [...grid.domainler]
    .filter((d) => d.skor != null)
    .sort((a, b) => b.skor - a.skor);
  // top 2 + beraberlikleri: ikinci skora eşit ya da üstü hepsi girer.
  const alanEsik = alanSirali[1]?.skor;
  const alanGirisleri = alanSirali
    .filter((d) => d.skor >= alanEsik)
    .map((d) => ({ tur: 'domain', dNo: d.dNo, ad: alanAdi(d.dNo), deger: d.skor }));

  const sisSirali = Object.entries(sistemler)
    .map(([ad, s]) => ({ ad, ort: s?.ortalama }))
    .filter((s) => s.ort != null)
    .sort((a, b) => b.ort - a.ort);
  const sisEsik = sisSirali[1]?.ort;
  const sistemGirisleri = sisSirali
    .filter((s) => s.ort >= sisEsik)
    .map((s) => ({ tur: 'sistem', ad: s.ad, deger: s.ort }));

  return { grid, girisler: [...alanGirisleri, ...sistemGirisleri] };
}

// Giriş başlığı + (varsa) bank bloğu. Bloksuz giriş başlığıyla render
// edilir — metin İCAT EDİLMEZ; eksik bank slotu Filiz'e raporlanır.
export function girisDoku(giris) {
  const baslik = giris.tur === 'domain'
    ? coreRapor.ch2.domainHeaderKalip.replace('{domain_name}', giris.ad)
    : coreRapor.ch2.sistemHeaderKalip.replace('{system_name}', giris.ad);
  const blok = giris.tur === 'domain'
    ? coreRapor.girisBloklari.domain[String(giris.dNo)] ?? null
    : coreRapor.girisBloklari.sistem[giris.ad] ?? null;
  return { baslik, blok };
}

// Ch.5 rota cümlesi — yalnız APS EDGE alanlarından, haritası olanlar,
// yüksek skor önce ("in that order"). Boşsa null (cümle tetiklenmez).
export function rotaCumlesi(grid) {
  const hedefler = grid.domainler
    .filter((d) => d.set === 'EDGE' && coreRapor.rotaHaritasi[String(d.dNo)])
    .sort((a, b) => b.skor - a.skor)
    .map((d) => coreRapor.rotaHaritasi[String(d.dNo)]);
  if (!hedefler.length) return null;
  const liste = hedefler.length > 1
    ? hedefler.slice(0, -1).join(', ') + ' and ' + hedefler[hedefler.length - 1]
    : hedefler[0];
  return coreRapor.ch5.routedKalip.replace('{routed_list}', liste);
}

// Doorway-koşullu set — içerik kapısı: gecerli değilse null.
export function doorwaySeti(hipotez) {
  const set = coreRapor.setler[hipotez];
  return set && set.gecerli ? set : null;
}

// Ch.3 doorway satırı (PROPOSED — §6): örnek render içerdiği için
// varsayılan AÇIK; Filiz çizerse coreRapor.ch3.doorwayLine.durum
// güncellenir ve bu fonksiyon null döndürecek şekilde tek satır değişir.
export function doorwaySatiri(doorwayAd) {
  return coreRapor.ch3.doorwayLine.kalip.replace('{doorway_name}', doorwayAd);
}
