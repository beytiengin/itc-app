// =====================================================================
// APS Rapor Motoru — §1 Rendering Logic'in saf-fonksiyon uygulaması
// Kaynak-of-truth: data/kalibrasyon/aps-rapor.js → renderingLogic (verbatim).
// Bu dosya YENİ kural içermez; yalnız §1'i hesaplanabilir kılar.
// Eşikler apsRapor.sabitler'den gelir (v0.1 değerlerinde kilitli, §8).
// DOĞRULAMA İMZASI: ITC-APSRAPOR-MOTOR-20260709
// =====================================================================

import { apsRapor } from '../../data/kalibrasyon/aps-rapor';

const S = apsRapor.sabitler;

// Battery alan sırası ↔ pack domain no eşlemesi konumsaldır:
// modulBul('aps').alanlar[0..7] = D1..D8, alanlar[8] = D9 (Craft Confidence).

// mean (1–5) → skor (0–100, bir ondalık) — §1 Scoring.
export function skorHesapla(ortalama) {
  if (ortalama == null) return null;
  return Math.round(((ortalama - 1) / 4) * 1000) / 10;
}

// Band + hedge — §1 Axis 2.
export function bandHesapla(ortalama) {
  if (ortalama == null) return { band: null, hedge: false };
  const band =
    ortalama >= S.bandUpperEsik ? 'UPPER' :
    ortalama >= S.bandLowerEsik ? 'MIDDLE' : 'LOWER';
  const hedge =
    Math.abs(ortalama - S.bandUpperEsik) <= S.hedgeAralik ||
    Math.abs(ortalama - S.bandLowerEsik) <= S.hedgeAralik;
  return { band, hedge };
}

// Grid — §1'in tamamı. Girdi: apsSkorla().alanlar
// ({alanAdi: {ortalama, cevaplanan, toplamMadde}}, battery sırasında 9 alan).
// Çıktı append-only saklanır; oyuncuya sayı/band/sıra/bayrak ASLA render edilmez.
export function apsGrid(alanlar) {
  const adlar = Object.keys(alanlar); // insertion order = battery order = D1..D9
  const doks = adlar.slice(0, 8).map((ad, i) => {
    const ort = alanlar[ad].ortalama;
    const { band, hedge } = bandHesapla(ort);
    return { dNo: i + 1, ad, ortalama: ort, skor: skorHesapla(ort), band, hedge };
  });

  // Axis 1 — rank (D1–D8; D9 hariç). Beraberlikler seti paylaşır.
  const sirali = [...doks].filter((d) => d.skor != null).sort((a, b) => b.skor - a.skor);
  const setAta = {};
  if (sirali.length >= 2) {
    const ikinci = sirali[1].skor;
    for (const d of sirali) {
      if (d.skor >= ikinci) setAta[d.dNo] = 'TOP'; // en yüksek iki + beraberlikleri
    }
    // üçüncü, ikinciye topUcuncuFark içindeyse TOP'a katılır (+beraberlikleri)
    const ucuncu = sirali.find((d) => setAta[d.dNo] !== 'TOP');
    if (ucuncu && ikinci - ucuncu.skor <= S.topUcuncuFark) {
      for (const d of sirali) if (d.skor === ucuncu.skor) setAta[d.dNo] = 'TOP';
    }
    const enDusukIkinci = sirali[sirali.length - 2].skor;
    for (const d of sirali) {
      if (setAta[d.dNo]) continue;
      if (d.skor <= enDusukIkinci) setAta[d.dNo] = 'EDGE'; // en düşük iki + beraberlikleri
    }
    for (const d of sirali) if (!setAta[d.dNo]) setAta[d.dNo] = 'MIDDLE';
  }
  for (const d of doks) d.set = setAta[d.dNo] ?? null;

  // D9 — §1 D9 gap flag (coach-taraflı; oyuncuya tek görünür sonuç reflectiveLine).
  const d9ad = adlar[8];
  const d9ort = alanlar[d9ad]?.ortalama ?? null;
  const d9skor = skorHesapla(d9ort);
  const gecerli = doks.filter((d) => d.skor != null);
  const d18ortalamaSkor = gecerli.length
    ? Math.round((gecerli.reduce((t, d) => t + d.skor, 0) / gecerli.length) * 10) / 10
    : null;
  const gap = d9skor != null && d18ortalamaSkor != null
    ? Math.round((d9skor - d18ortalamaSkor) * 10) / 10 : null;
  const d9 = {
    ad: d9ad, ortalama: d9ort, skor: d9skor,
    ...bandHesapla(d9ort),
    gap,
    gapBayrak: gap != null && Math.abs(gap) >= S.d9GapEsik,
  };

  return { domainler: doks, d9, d18ortalamaSkor };
}

// Blok seçimi — §1 Block selection. set 'EDGE' → pack hücre anahtarı 'SOFT'.
export function blokSec(dNo, set, band) {
  const dom = apsRapor.domainler.find((d) => d.no === dNo);
  if (!dom) return null;
  const hucre = `${set === 'EDGE' ? 'SOFT' : set}+${band}`;
  return { portre: dom.portre, ad: dom.ad, ...(dom.bloklar[hucre] || null) };
}

// Hedge — §3: bloğun İLK CÜMLESİ ses sınıfının hedged opener'ı ile değişir;
// başka hiçbir şey değişmez.
export function hedgeUygula(blok, hedge) {
  if (!hedge || !blok?.metin) return blok?.metin ?? null;
  const sinif = apsRapor.sesSinifi[blok.ses];
  const opener = apsRapor.hedgedOpeners[sinif];
  if (!opener) return blok.metin;
  const m = blok.metin.match(/^.*?[.?!](?=\s|$)/s);
  return m ? opener + blok.metin.slice(m[0].length) : blok.metin;
}

// Sayfa montajı — §1 Page assembly.
// Sayfa 3: TOP, yüksekten düşüğe · Orta şerit: MIDDLE · Sayfa 4: EDGE, yüksek önce.
export function sayfaMontaji(grid) {
  const skorla = (a, b) => b.skor - a.skor;
  const doku = (d) => {
    const blok = blokSec(d.dNo, d.set, d.band);
    return { dNo: d.dNo, ad: blok?.ad, portre: blok?.portre, metin: hedgeUygula(blok, d.hedge), skor: d.skor };
  };
  return {
    sayfa3: grid.domainler.filter((d) => d.set === 'TOP').sort(skorla).map(doku),
    ortaSerit: grid.domainler.filter((d) => d.set === 'MIDDLE').sort(skorla).map(doku),
    sayfa4: grid.domainler.filter((d) => d.set === 'EDGE').sort(skorla).map(doku),
  };
}

// Micro-reveal — §2: {top_domain_name} = D1–D8'in en yükseği (pack adı).
export function microRevealMetni(grid) {
  const enYuksek = [...grid.domainler].filter((d) => d.skor != null).sort((a, b) => b.skor - a.skor)[0];
  if (!enYuksek) return null;
  const packAd = apsRapor.domainler.find((d) => d.no === enYuksek.dNo)?.ad ?? enYuksek.ad;
  return apsRapor.microReveal.replace('{top_domain_name}', packAd);
}

// Sayfa 6 experience context — §6: {experience_band} = Intake Q8 yanıtı (verbatim).
export function experienceContextMetni(experienceBand) {
  if (!experienceBand) return null;
  return apsRapor.page6.experienceContext.replace('{experience_band}', experienceBand);
}
