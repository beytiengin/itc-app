'use client';

// app/lib/karakterGetir.js
// ITC Actor's Gym — Karakter veri çok dilli mimari (Yaklaşım B: deep-merge).
//
// Ana TR taban (`data/karakterler/hamlet.js` vb. — DOKUNULMAZ) + opsiyonel dil
// katmanı (örn `hamlet.de.js`) deep-merge ile birleştirilir. Eksik çeviri
// alanları otomatik TR'ye düşer (fallback). Yapı/anahtarlar her zaman TR
// tabandan gelir; dil katmanı sadece çevrilebilir string alanları yazar.
//
// Şu an pilot: Hamlet. Willy/Macbeth/Biff dil katmanları çeviri turunda
// eklenince TABAN + KATMAN haritalarına yorum açılır.

import hamletTR from '../../data/karakterler/hamlet';
import hamletDE from '../../data/karakterler/hamlet.de';
import willyTR from '../../data/karakterler/willy';
import willyDE from '../../data/karakterler/willy.de';
import macbethTR from '../../data/karakterler/macbeth';
import macbethDE from '../../data/karakterler/macbeth.de';
import biffTR from '../../data/karakterler/biff';
import biffDE from '../../data/karakterler/biff.de';

const TABAN = {
  hamlet: hamletTR,
  willy: willyTR,
  macbeth: macbethTR,
  biff: biffTR,
};

const KATMAN = {
  hamlet: { de: hamletDE },
  willy: { de: willyDE },
  macbeth: { de: macbethDE },
  biff: { de: biffDE },
};

// Deep merge: katmandaki dolu (truthy, boş-olmayan) değerler tabanın üzerine
// yazılır. Array'ler index hizalı birleştirilir — şablon TR ile aynı sıra/
// uzunlukta olmalı (aksi halde fazla index'ler dikkate alınmaz, eksikler TR'de
// kalır; her durumda merge bozulmaz).
function birlestir(taban, katman) {
  if (katman == null) return taban;
  if (Array.isArray(taban)) {
    if (!Array.isArray(katman)) return taban;
    return taban.map((o, i) => birlestir(o, katman[i]));
  }
  if (typeof taban === 'object' && taban !== null) {
    const r = { ...taban };
    for (const k in katman) {
      if (k in taban) r[k] = birlestir(taban[k], katman[k]);
    }
    return r;
  }
  // İlkel (string/number/bool): katman dolu string ise onu kullan, yoksa taban.
  if (typeof katman === 'string' && katman.trim() !== '') return katman;
  return taban;
}

/**
 * Karakter verisini istenen dilde getir.
 * - dil 'tr' veya yok: TR taban birebir döner (hızlı path, merge atlanır)
 * - dil 'de' (veya başka): TR taban + dil katmanı deep-merge
 * - dil katmanı yoksa: TR taban
 * - dil katmanı kısmi (çoğu alan ''): yalnız dolu alanlar yazılır, kalanlar TR
 *
 * NOT: EN için bu sistem KULLANILMAZ — EN/TR app chrome'u + hamlet-i18n.js
 * + willy-i18n.js (UI-yakını içerik) ayrı sistemde. Bu fonksiyon karakter
 * dramatik verisi (data/karakterler/*) için.
 *
 * @param {string} id  - 'hamlet', 'willy', vs.
 * @param {string} dil - 'tr' | 'de' | (gelecek dil kodları)
 * @returns birleştirilmiş karakter objesi veya null
 */
export function karakterGetir(id, dil) {
  const taban = TABAN[id];
  if (!taban) return null;
  if (!dil || dil === 'tr') return taban;
  const katman = KATMAN[id] && KATMAN[id][dil];
  if (!katman) return taban;
  return birlestir(taban, katman);
}
