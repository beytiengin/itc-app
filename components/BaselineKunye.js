// components/BaselineKunye.js
// Karar 57 — Kaybedilen Dünya (Baseline): El Yazması'nın 5. katmanı. Karakterin
// felaket/çöküş/dönüşüm öncesi normal dünyası. Konum: İlişkiler künyesinden sonra,
// Oyun Öncesi'nden önce.
//
// Pedagojik ilke (K57): "Bir kaybın büyüklüğü, kaybedilen şeyin büyüklüğüyle ölçülür."
// "Sahnede gördüğümüz karakter, görmediğimiz karakterin üstünde durur." Baseline bu
// ilkenin El Yazması'ndaki en somut karşılığıdır.
//
// Kanon sınırları:
//   - Substitution Yasağı (etik-cerceve §1): Baseline KARAKTERİN verisinden inşa edilir,
//     oyuncunun kişisel travma-öncesi yaşamından DEĞİL.
//   - An türleri (K57 §4): Hatıra baskın (travma-DIŞI); İz/Sessiz Bilgi KULLANILMAZ.
//   - Görsel dil (K57 §5): sıcak ton (felaket öncesi), katlanır, VARSAYILAN AÇIK.
//
// Shell paylaşımlı (etiket/altyazı chrome-i18n.baseline, 3 dil); içerik karakter-özel
// (veri.girisler + an kartları children olarak + veri.kapanis). An kartları viewer-yerel
// AnKart ile children olarak geçilir (oznel_sabitler kaydı mevcut altyapı).

'use client';

import { useDil, ceviri } from '../app/lib/dil';
import chromeI18n from '../data/chrome-i18n';
import Katlanir from './Katlanir';

const TON = 'var(--accent)';

export default function BaselineKunye({ veri, children }) {
  const { dil } = useDil();
  const b = ceviri(chromeI18n, dil).baseline;
  if (!veri || !b) return null;

  return (
    <Katlanir etiket={b.etiket} baslik={b.baslik} varsayilanAcik={true}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem', marginTop: '0.7rem' }}>
        {/* Sıcak altyazı — felaket öncesi zemin */}
        <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.92rem', color: TON, margin: 0, lineHeight: 1.55 }}>{b.altyazi}</p>

        {/* Karaktere özel giriş prose'u */}
        {(veri.girisler || []).map((p, i) => (
          <p key={i} style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.9rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.7 }}>{p}</p>
        ))}

        {/* An kartları (Hatıra/yazma) — viewer-yerel AnKart children olarak */}
        {children ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>{children}</div>
        ) : null}

        {/* Kapanış — yıkıma doğru geçiş */}
        {veri.kapanis ? (
          <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--ink-muted)', margin: 0, lineHeight: 1.55 }}>{veri.kapanis}</p>
        ) : null}
      </div>
    </Katlanir>
  );
}
