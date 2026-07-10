// =====================================================================
// app/lib/coach-rapor-motor.js — Coach Core Report montaj motoru (v0.5)
// Kaynak-of-truth: data/kalibrasyon/coach-rapor.js (verbatim spec).
// Bu dosya YENİ metin üretmez: şablon doldurur, madde köklerini
// enstrümandan ANAHTARLA çeker (§7: asla yeniden yazılmaz), spec'in
// seçim kurallarını hesaplar. PROPOSED eşikler coachRapor'dan gelir.
// FAZ i sınırları: F thread'leri + ↑↓ işaretleri + Coach Library ÜRETİLMEZ.
// DOĞRULAMA İMZASI: ITC-COACHRAPOR-MOTOR-20260710
// =====================================================================

import { coachRapor } from '../../data/kalibrasyon/coach-rapor';
import { modulBul } from './batarya-kaydet';
import { apsGrid } from './aps-rapor-motor';
import { girisleriSec, rotaCumlesi } from './core-rapor-motor';

const kodla = (m, v) => (v == null ? null : m.ters ? 6 - v : v);
const yuvarla2 = (x) => Math.round(x * 100) / 100;

/* ─── A — oryantasyon paragrafı (boş alan ATLANIR, asla tahmin edilmez) ── */
export function orientationDoldur(intakeYanitlar) {
  const y = (no) => intakeYanitlar?.[no] ?? intakeYanitlar?.[String(no)] ?? null;
  const e = coachRapor.A.intakeEslesme;
  const ad = y(e.name);
  const sehir = y(e.city);
  const dogum = y(e.dogum);
  const yas = dogum && /^\d{4}/.test(String(dogum))
    ? new Date().getFullYear() - parseInt(String(dogum).slice(0, 4), 10) : null;
  const band = y(e.experience_band);
  const alanlarY = y(e.areas);
  const alanlar = Array.isArray(alanlarY) ? alanlarY.join(', ') : alanlarY;
  const egitim = y(e.education_field);
  const training = y(e.training_summary);
  const asp = e.aspiration_verbatim ? y(e.aspiration_verbatim) : null;

  // Şablonun cümle iskeleti; placeholder'ı boş olan parça düşer.
  const p1 = [ad, yas != null ? String(yas) : null, sehir ? `based in ${sehir}` : null]
    .filter(Boolean).join(', ');
  const p2parc = [
    band && alanlar ? `${band} of acting, mostly in ${alanlar}` : band ? `${band} of acting` : null,
    training ? `trained at ${training}` : null,
    egitim ? `educated in ${egitim}` : null,
  ].filter(Boolean);
  const p2 = p2parc.length ? p2parc.join('; ') + '.' : null;
  const p3 = asp ? `Came to us saying, in their own words: \u201c${asp}\u201d.` : null;
  return {
    paragraf: [p1 ? p1 + '.' : null, p2, p3].filter(Boolean).join(' '),
    aspirationVar: !!asp,
    frame: band ? coachRapor.A.frameKalip.replace('{experience_band}', band) : null,
  };
}

/* ─── B — doorway verisi + koçluk bloğu ─────────────────────────────────── */
export function bBolumu(typeLensSkorlar) {
  if (!typeLensSkorlar?.hipotez) return null;
  const blok = coachRapor.B.bloklar[typeLensSkorlar.hipotez] ?? null;
  const komsuBlok = coachRapor.B.bloklar[typeLensSkorlar.komsu] ?? null;
  return {
    hipotez: typeLensSkorlar.hipotez,
    doorwayAd: blok?.doorwayAd ?? typeLensSkorlar.hipotez,
    eksenler: typeLensSkorlar.eksenler ?? [],
    komsuSatiri: komsuBlok
      ? coachRapor.B.komsuKalip.replace('{komsu_ad}', komsuBlok.doorwayAd)
      : null,
    blok,
  };
}

/* ─── C.1 — grid satırları + gap + rota ─────────────────────────────────── */
export function c1Bolumu(apsAlanlar) {
  const grid = apsGrid(apsAlanlar);
  const satirlar = grid.domainler.map((d) => ({
    dNo: d.dNo, ad: d.ad, skor: d.skor, ortalama: yuvarla2(d.ortalama),
    band: d.band, hedge: d.hedge, set: d.set,
  }));
  const yon = grid.d9.gap == null ? null : grid.d9.gap < 0 ? 'impostor' : 'overconfidence';
  return { grid, satirlar, d9: { ...grid.d9, ortalama: yuvarla2(grid.d9.ortalama ?? 0) }, gapYonu: yon };
}

/* ─── C.2 — Item Ledger (STRONG 4–5 ●5 · CARE 1–2 ○1; 3'ler yok) ────────── */
export function ledgerOlustur(apsYanitlar) {
  const e = coachRapor.C.ledger.esikler;
  const strong = [], care = [];
  modulBul('aps').alanlar.forEach((alan, i) => {
    for (const m of alan.maddeler) {
      const r = kodla(m, apsYanitlar?.[m.no] ?? apsYanitlar?.[String(m.no)]);
      if (r == null) continue;
      const satir = (kalip, isaret) => kalip
        .replace('●', isaret === '●' ? '●' : '')
        .replace('○', isaret === '○' ? '○' : '')
        .replace('{domain}', `D${i + 1}`)
        .replace('{item_stem}', m.metin)
        .replace('{rating}', String(r))
        .replace('{reverse_tag}', m.ters ? ' (R)' : '')
        .replace(/^\s+/, '');
      if (r >= e.strongAlt) strong.push({ dNo: i + 1, no: m.no, r, metin: satir(coachRapor.C.ledger.strongLineKalip, r === e.doluIsaret ? '●' : '') });
      else if (r <= e.careUst) care.push({ dNo: i + 1, no: m.no, r, metin: satir(coachRapor.C.ledger.careLineKalip, r === e.bosIsaret ? '○' : '') });
    }
  });
  return { strong, care };
}

/* ─── D.2 — Open & Closed Systems (koç-tarafı-yalnız sözlük) ────────────── */
const FASET_AD = { reach: 'reach', vividness: 'vividness', control: 'control', cleanExit: 'clean exit' };

export function d2Olustur(emYanitlar) {
  const e = coachRapor.D.d2.esikler;
  const hedgeAralik = 0.15; // APS ile aynı band-hedge aralığı (D.1 'rank/band/hedge')
  const sistemler = [];
  let closedVar = false;
  for (const sistem of modulBul('emotional').part1.sistemler) {
    const maddeler = sistem.maddeler.map((m) => ({
      faset: FASET_AD[m.faset] ?? m.faset,
      metin: m.metin,
      r: kodla(m, emYanitlar?.[m.no] ?? emYanitlar?.[String(m.no)]),
    }));
    const gecerli = maddeler.filter((m) => m.r != null);
    if (!gecerli.length) continue;
    const ort = yuvarla2(gecerli.reduce((t, m) => t + m.r, 0) / gecerli.length);
    const sinif = ort >= e.openEsik ? 'OPEN' : ort >= e.closedAlti ? 'AJAR' : 'CLOSED';
    if (sinif === 'CLOSED') closedVar = true;
    const hedge = Math.abs(ort - e.openEsik) <= hedgeAralik || Math.abs(ort - e.closedAlti) <= hedgeAralik;
    // Faset istisnası — PROPOSED-basitleştirilmiş kural (coachRapor.D.d2.fasetIstisnaKurali)
    const kapali = gecerli.filter((m) => m.r <= 2).map((m) => m.faset);
    const istisna = kapali.length ? '; closed for ' + kapali.join(', ') : '';
    sistemler.push({
      ad: sistem.ad, ort, sinif, hedge,
      baslik: coachRapor.D.d2.headerKalip
        .replace('{system_name}', sistem.ad)
        .replace('{OPEN | AJAR | CLOSED}', sinif)
        .replace('{system_mean}', ort.toFixed(2))
        .replace('{hedge_note}', hedge ? ', hedge' : '')
        .replace(/\{facet_exception_note[^}]*\}/, istisna),
      maddeler: gecerli.map((m) => coachRapor.D.d2.itemKalip
        .replace('{facet_name}', m.faset)
        .replace('{item_stem}', m.metin)
        .replace('{rating}', String(m.r))),
    });
  }
  sistemler.sort((a, b) => b.ort - a.ort); // Deniz örneği: yüksekten düşüğe
  return { sistemler, closedVar };
}

/* ─── D.1 — role-hangover bayrağı (PROPOSED eşikler) ────────────────────── */
export function roleHangover(emSkorlar) {
  const k = coachRapor.D.roleHangover;
  const exit = emSkorlar?.exitCapacity, reach = emSkorlar?.reach;
  if (exit == null || reach == null) return { bayrak: false, exit: null, reach: null };
  return { bayrak: exit < k.exitAlti && reach >= k.reachEsik, exit: yuvarla2(exit), reach: yuvarla2(reach) };
}

/* ─── E — montaj kaydı + safeguard seçimi ───────────────────────────────── */
export function eBolumu(apsAlanlar, sistemler) {
  const { grid, girisler } = girisleriSec(apsAlanlar, sistemler);
  return { girisler, rota: rotaCumlesi(grid), grid };
}

// Safeguard seçimi: APS EDGE alanları + M3'ün en düşük 2 sistemi (spec §6).
export function safeguardSec(grid, sistemler) {
  const sg = coachRapor.E.e2.safeguards;
  const secim = [], eksik = [];
  for (const d of grid.domainler.filter((x) => x.set === 'EDGE').sort((a, b) => b.skor - a.skor)) {
    const blok = sg.domain[String(d.dNo)];
    if (blok) secim.push({ etiket: `Safeguard — D${d.dNo} ${d.ad} (edge domain)`, metin: blok });
    else eksik.push(`D${d.dNo} ${d.ad} (edge domain) — bank bekleniyor`);
  }
  const dusukler = Object.entries(sistemler)
    .map(([ad, s]) => ({ ad, ort: s?.ortalama }))
    .filter((s) => s.ort != null)
    .sort((a, b) => a.ort - b.ort)
    .slice(0, 2);
  for (const s of dusukler) {
    const anahtar = Object.keys(sg.sistem).find((k) => s.ad.startsWith(k) || s.ad.includes(k));
    if (anahtar) secim.push({ etiket: `Safeguard — ${anahtar} (edge system)`, metin: sg.sistem[anahtar] });
    else eksik.push(`${s.ad} (edge system) — bank bekleniyor`);
  }
  return { secim, eksik };
}
