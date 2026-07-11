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
import { questionBank } from '../../data/kalibrasyon/question-bank';
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
// Madde kategorisi — ledger mantığı: STRONG (≥strongAlt) / CARE (≤careUst) / nötr.
// Sıralı skala (CARE=0, nötr=1, STRONG=2) yön hesabı için.
function maddeKategori(r, e) {
  if (r == null) return null;
  if (r >= e.strongAlt) return 'STRONG';
  if (r <= e.careUst) return 'CARE';
  return 'notr';
}
const KAT_SIRA = { CARE: 0, notr: 1, STRONG: 2 };

// Kategori geçiş işareti (Karar Kaydı 10 Tem 2026: madde düzeyi ↑↓, kategori
// geçişi). oncekiKat yoksa null (ilk uygulamada işaret yok).
function katGecis(oncekiKat, simdiKat) {
  if (!oncekiKat || oncekiKat === simdiKat) return null;
  return KAT_SIRA[simdiKat] > KAT_SIRA[oncekiKat]
    ? { yon: 'yukari', metin: `↑ ${oncekiKat === 'notr' ? 'neutral' : oncekiKat.toLowerCase()} → ${simdiKat === 'notr' ? 'neutral' : simdiKat.toLowerCase()}` }
    : { yon: 'asagi', metin: `↓ ${oncekiKat === 'notr' ? 'neutral' : oncekiKat.toLowerCase()} → ${simdiKat === 'notr' ? 'neutral' : simdiKat.toLowerCase()}` };
}

export function ledgerOlustur(apsYanitlar, oncekiYanitlar) {
  const e = coachRapor.C.ledger.esikler;
  const strong = [], care = [];
  modulBul('aps').alanlar.forEach((alan, i) => {
    for (const m of alan.maddeler) {
      const r = kodla(m, apsYanitlar?.[m.no] ?? apsYanitlar?.[String(m.no)]);
      if (r == null) continue;
      const rOnceki = oncekiYanitlar ? kodla(m, oncekiYanitlar?.[m.no] ?? oncekiYanitlar?.[String(m.no)]) : null;
      const gecis = katGecis(maddeKategori(rOnceki, e), maddeKategori(r, e));
      const satir = (kalip, isaret) => kalip
        .replace('●', isaret === '●' ? '●' : '')
        .replace('○', isaret === '○' ? '○' : '')
        .replace('{domain}', `D${i + 1}`)
        .replace('{item_stem}', m.metin)
        .replace('{rating}', String(r))
        .replace('{reverse_tag}', m.ters ? ' (R)' : '')
        .replace(/^\s+/, '');
      if (r >= e.strongAlt) strong.push({ dNo: i + 1, no: m.no, r, gecis, metin: satir(coachRapor.C.ledger.strongLineKalip, r === e.doluIsaret ? '●' : '') });
      else if (r <= e.careUst) care.push({ dNo: i + 1, no: m.no, r, gecis, metin: satir(coachRapor.C.ledger.careLineKalip, r === e.bosIsaret ? '○' : '') });
    }
  });
  return { strong, care };
}

/* ─── D.2 — Open & Closed Systems (koç-tarafı-yalnız sözlük) ────────────── */
const FASET_AD = { reach: 'reach', vividness: 'vividness', control: 'control', cleanExit: 'clean exit' };

// Sistem sınıfı — D.2 mantığı (yön için sıralı: CLOSED=0, AJAR=1, OPEN=2).
const SINIF_SIRA = { CLOSED: 0, AJAR: 1, OPEN: 2 };
function sinifGecis(oncekiSinif, simdiSinif) {
  if (!oncekiSinif || oncekiSinif === simdiSinif) return null;
  const yukari = SINIF_SIRA[simdiSinif] > SINIF_SIRA[oncekiSinif];
  return { yon: yukari ? 'yukari' : 'asagi',
           metin: `${yukari ? '↑' : '↓'} ${oncekiSinif} → ${simdiSinif}` };
}

export function d2Olustur(emYanitlar, oncekiYanitlar) {
  const e = coachRapor.D.d2.esikler;
  // Önceki sistem sınıflarını hesapla (varsa) — sistem adına göre eşlenir.
  const oncekiSiniflar = {};
  if (oncekiYanitlar) {
    for (const sistem of modulBul('emotional').part1.sistemler) {
      const gec = sistem.maddeler.map((m) => kodla(m, oncekiYanitlar?.[m.no] ?? oncekiYanitlar?.[String(m.no)])).filter((x) => x != null);
      if (!gec.length) continue;
      const o = gec.reduce((t, x) => t + x, 0) / gec.length;
      oncekiSiniflar[sistem.ad] = o >= e.openEsik ? 'OPEN' : o >= e.closedAlti ? 'AJAR' : 'CLOSED';
    }
  }
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
    // Faset istisnası — ONAYLI kural (Karar Kaydı 10 Tem 2026; coachRapor.D.d2.fasetIstisnaKurali):
    // reach ≥4 VE clean exit ≤2 → 'open for reach, closed for clean exit' (M9-çifti);
    // diğer ≤2 fasetler → 'closed for {faset}'; sistem CLOSED ise not düşülmez
    // (bilgi zaten bantta — Deniz örneği: Anger notsuz).
    const f = Object.fromEntries(gecerli.map((m) => [m.faset, m.r]));
    const m9Cifti = (f['reach'] ?? 0) >= 4 && (f['clean exit'] ?? 5) <= 2;
    const notlar = [];
    if (m9Cifti) notlar.push('open for reach, closed for clean exit');
    for (const m of gecerli) {
      if (m.r <= 2 && !(m9Cifti && m.faset === 'clean exit')) notlar.push('closed for ' + m.faset);
    }
    const istisna = notlar.length ? '; ' + notlar.join('; ') : '';
    sistemler.push({
      ad: sistem.ad, ort, sinif, hedge,
      gecis: sinifGecis(oncekiSiniflar[sistem.ad], sinif),
      baslik: coachRapor.D.d2.headerKalip
        .replace('{system_name}', sistem.ad)
        .replace('{OPEN | AJAR | CLOSED}', sinif)
        .replace('{system_mean}', ort.toFixed(2))
        .replace('{hedge_note}', hedge ? ', hedge' : '')
        .replace(/\{facet_exception_note[^}]*\}/, sinif === 'CLOSED' ? '' : istisna),
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
  // Safeguard = Question Bank SAFEGUARD sesi (tek kaynak; spec §6 seçimi).
  const secim = [], eksik = [];
  for (const d of grid.domainler.filter((x) => x.set === 'EDGE').sort((a, b) => b.skor - a.skor)) {
    const blok = questionBank.domain[String(d.dNo)]?.safeguard;
    if (blok) secim.push({ etiket: `Safeguard — D${d.dNo} ${d.ad} (edge domain)`, metin: blok });
    else eksik.push(`D${d.dNo} ${d.ad} (edge domain) — bank bekleniyor`);
  }
  const dusukler = Object.entries(sistemler)
    .map(([ad, s]) => ({ ad, ort: s?.ortalama }))
    .filter((s) => s.ort != null)
    .sort((a, b) => a.ort - b.ort)
    .slice(0, 2);
  for (const s of dusukler) {
    const anahtar = Object.keys(questionBank.sistem).find((k) => s.ad.startsWith(k) || s.ad.includes(k));
    if (anahtar) secim.push({ etiket: `Safeguard — ${anahtar} (edge system)`, metin: questionBank.sistem[anahtar].safeguard });
    else eksik.push(`${s.ad} (edge system) — bank bekleniyor`);
  }
  return { secim, eksik };
}

/* ─── F — Section F thread üretimi (Checkin/F Templates v1.0 §2) ──────────
   App üretir, max 5, sabit gramer, öncelik T1→T5. Karar Kaydı madde 11:
   koç serbest alanı YOK. Tüm veri koç-tarafı hesaplardan gelir. ────────── */
import { checkinF } from '../../data/kalibrasyon/checkin-f';

// Girdiler: c1 (c1Bolumu çıktısı: grid + gapYonu), rh (roleHangover),
// d2 (d2Olustur: sistemler), hipotez (doorway internalKey), konfor (Part4 varsa).
export function fThreadleriUret({ c1, rh, d2, hipotez, konfor }) {
  const F = checkinF.fTemplates;
  const adaylar = [];

  if (c1?.d9?.gap != null && Math.abs(c1.d9.gap) >= 15) {
    const g = c1.d9.gap;
    const metin = (g < 0 ? F.T1.impostor : F.T1.overconfidence).replace('{gap}', String(Math.abs(g)));
    adaylar.push({ tur: 'T1', oncelik: 1, magnitude: Math.abs(g), metin });
  }

  if (d2?.sistemler && c1?.grid) {
    const d5 = c1.grid.domainler.find((x) => x.dNo === 5);
    const d5Edge = d5?.set === 'EDGE';
    const d5Upper = d5?.band === 'UPPER';
    if (d5Edge) {
      const enYuksek = [...d2.sistemler].filter((s) => s.ort != null).sort((a, b) => b.ort - a.ort)[0];
      if (enYuksek && enYuksek.ort >= 3.75) {
        adaylar.push({ tur: 'T2', oncelik: 2, magnitude: enYuksek.ort,
          metin: F.T2.duz.replace(/\{system\}/g, enYuksek.ad.split(' (')[0]).replace('{reach}', enYuksek.ort.toFixed(2)) });
      }
    } else if (d5Upper) {
      const enDusuk = [...d2.sistemler].filter((s) => s.ort != null).sort((a, b) => a.ort - b.ort)[0];
      if (enDusuk && enDusuk.ort < 2.75) {
        adaylar.push({ tur: 'T2', oncelik: 2, magnitude: 5 - enDusuk.ort,
          metin: F.T2.ters.replace(/\{system\}/g, enDusuk.ad.split(' (')[0]).replace('{score}', d5.skor != null ? String(d5.skor) : '—').replace('{reach}', enDusuk.ort.toFixed(2)) });
      }
    }
  }

  if (hipotez && c1?.grid) {
    const ng = F.T3.naturalGround[hipotez];
    const alan = ng ? c1.grid.domainler.find((x) => x.dNo === ng) : null;
    if (alan && alan.set === 'EDGE') {
      const ad = alan.ad.replace(/^Domain \d+ — /, '');
      adaylar.push({ tur: 'T3', oncelik: 3, magnitude: 100 - (alan.skor ?? 100),
        metin: F.T3.metin.replace('{domain}', `D${ng} ${ad}`) });
    }
  }

  if (rh?.bayrak) {
    adaylar.push({ tur: 'T4', oncelik: 4, magnitude: 1, metin: F.T4.metin });
  }

  if (Array.isArray(konfor) && konfor.length) {
    for (const k of konfor) {
      if (k.feeling == null || k.showing == null) continue;
      if (k.showing <= 2 && k.feeling >= 4 && k.aciklik === 'OPEN') {
        adaylar.push({ tur: 'T5', oncelik: 5, magnitude: k.feeling - k.showing,
          metin: F.T5.showingEdge.replace(/\{emotion\}/g, k.emotion).replace('{showing}', String(k.showing)).replace('{feeling}', String(k.feeling)) });
      } else if (k.showing <= 2 && k.feeling <= 2 && k.aciklik !== 'OPEN') {
        adaylar.push({ tur: 'T5', oncelik: 5, magnitude: 5 - Math.min(k.showing, k.feeling),
          metin: F.T5.unbuilt.replace(/\{emotion\}/g, k.emotion).replace('{showing}', String(k.showing)).replace('{feeling}', String(k.feeling)) });
      }
    }
  }

  const turBazli = {};
  for (const a of adaylar) {
    if (!turBazli[a.tur] || a.magnitude > turBazli[a.tur].magnitude) turBazli[a.tur] = a;
  }
  return Object.values(turBazli).sort((a, b) => a.oncelik - b.oncelik).slice(0, 5).map((a) => a.metin);
}

/* ─── M3 coach portreleri (M3 Pack v0.1 §4) ──────────────────────────────
   Her sistem: set (TOP/MIDDLE/EDGE — sistemler-arası rank) × band (UPPER/
   MIDDLE/LOWER — mutlak ortalama). Render: portre + (set,band) bloğu; HEDGE
   açıksa blok ilk cümlesi ses-sınıfı hedged opener'la değişir. Yalnız KOÇ. */
import { m3Pack } from '../../data/kalibrasyon/m3-pack';

// İki eksen (M3 Pack §Axis 1-2): set = rank (TOP=en yüksek 2 +5puan-içi-3.,
// EDGE=en düşük 2, gerisi MIDDLE); band = mutlak ortalama (UPPER≥3.75,
// MIDDLE 2.75-3.74, LOWER<2.75); HEDGE ±0.15 sınıra.
export function m3Portreleri(sistemlerSkor) {
  const P = m3Pack.coachPortreleri;
  if (!P?.sistemler) return null;
  const diziler = Object.entries(sistemlerSkor)
    .map(([ad, s]) => ({ ad, yalin: ad.split(' (')[0], ort: s?.ortalama ?? s }))
    .filter((x) => x.ort != null)
    .sort((a, b) => b.ort - a.ort);
  if (!diziler.length) return null;

  // set: TOP = en yüksek 2 + (3. ikinciden ≤5 puan/0.2 ort içindeyse); EDGE = en düşük 2.
  const topEsik = diziler[1]?.ort;
  const topIdx = new Set();
  diziler.forEach((d, i) => { if (i < 2 || (i === 2 && topEsik - d.ort <= 0.2)) topIdx.add(d.ad); });
  const edgeIdx = new Set(diziler.slice(-2).map((d) => d.ad));

  return diziler.map((d) => {
    const set = topIdx.has(d.ad) ? 'TOP' : edgeIdx.has(d.ad) ? 'EDGE' : 'MIDDLE';
    const band = d.ort >= 3.75 ? 'UPPER' : d.ort >= 2.75 ? 'MIDDLE' : 'LOWER';
    const hedge = Math.abs(d.ort - 3.75) <= 0.15 || Math.abs(d.ort - 2.75) <= 0.15;
    const sysData = P.sistemler[d.yalin];
    const anahtar = `${set}_${band}`;
    let blok = sysData?.bloklar?.[anahtar] ?? null;
    // HEDGE: blok ilk cümlesini ses-sınıfı hedged opener'la değiştir
    if (blok && hedge) {
      const voice = P.setBandVoice?.[anahtar];
      const sinif = voice ? P.voiceSinif?.[voice] : null;
      const opener = sinif ? P.hedged?.[sinif] : null;
      if (opener) {
        const kalan = blok.replace(/^[^.!?]*[.!?]\s*/, ''); // ilk cümleyi at
        blok = opener + ' ' + kalan;
      }
    }
    return { ad: d.ad, yalin: d.yalin, set, band, hedge, portre: sysData?.portre ?? null, blok };
  });
}
