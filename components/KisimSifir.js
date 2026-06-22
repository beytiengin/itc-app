// components/KisimSifir.js
// Karar 61 — KISIM 0 · Yöntem: Workbook omurgasının altıncı bölümü (EŞİK ↔ KISIM I
// arası). Oyuncuya kitap boyunca karşılaşacağı araçları (mühür, boşluk, iz, hatıra,
// sessiz bilgi, iki çerçeve, beş an, üç ses, Kaybedilen Dünya, yürüyüş) BİR KEZ,
// sıcak bir dille TANITIR — anlatmaz. "Kapı, kütüphane değil."
//
// Kanon sınırları (Karar 61 §4):
//   - Karar 31 (oyuncu-yüzü): iç kodlar (Tip A/B, Karar NN, veri modeli) GÖRÜNMEZ.
//   - Tam teori Method Book'a aittir (Karar 60 üç katman) — burada yalnız köprü.
//   - Substitution Yasağı (etik-cerceve §1) + Hatıra/İz güvenlik sınırı tekrarlanır
//     (içerik değişmez, görünürlük artar).
//
// Karakter-nötr: kanonik tanımlar (K61 §3 tablosu) + kanonik mottolar genelleştirildi
// ("Hamlet" yerine "karakter"); hamlet/willy/macbeth viewer'larında ortak kullanılır.
// Karakter-özel KISIM 0 yorumları (Beyti dramaturg) ileride veriyle eklenebilir.
//
// Varsayılan KATLI (Karar 33 §4 reviewer cilası — didaktik bloklar katlı açılır).

'use client';

import { useDil, ceviri } from '../app/lib/dil';
import chromeI18n from '../data/chrome-i18n';
import Katlanir from './Katlanir';

const TON = 'var(--accent)';

export default function KisimSifir() {
  const { dil } = useDil();
  const k = ceviri(chromeI18n, dil).kisimSifir;
  if (!k) return null;

  return (
    <Katlanir etiket={k.etiket} baslik={k.baslik} varsayilanAcik={false}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', marginTop: '0.7rem' }}>
        <Govde>{k.giris}</Govde>

        {/* ITC çekirdek cümle — sıcak zemin */}
        <AccentKutu>
          <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{k.itcCumle}</p>
        </AccentKutu>
        <Govde>{k.itcAciklama}</Govde>

        {/* Söz — Substitution Yasağı (pazarlık edilmez) */}
        <Bolum baslik={k.sozBaslik}>
          <AccentKutu>
            <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink)', margin: 0, lineHeight: 1.55 }}>{k.motto1}</p>
            <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.95rem', color: TON, margin: '0.5rem 0 0', lineHeight: 1.5 }}>{k.motto2}</p>
          </AccentKutu>
          <Govde>{k.sozAciklama}</Govde>
        </Bolum>

        {/* Yöntemin araçları — 10 kavram */}
        <Bolum baslik={k.araclarBaslik}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {(k.kavramlar || []).map((kav, i) => (
              <li key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', borderLeft: `2px solid ${TON}`, paddingLeft: '0.9rem' }}>
                <span style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink)', lineHeight: 1.4 }}>{kav.ad}</span>
                <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.86rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>{kav.tanim}</span>
              </li>
            ))}
          </ul>
        </Bolum>

        {/* Hatıra ↔ İz güvenlik sınırı — koruyucu zemin */}
        <Bolum baslik={k.guvenlikBaslik}>
          <div style={{ background: 'var(--uyari-bg)', borderLeft: '2px solid var(--uyari)', padding: '0.85rem 1rem' }}>
            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.86rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.65 }}>{k.guvenlik}</p>
          </div>
        </Bolum>

        {/* Method Book köprüsü (Karar 60 — teori orada) */}
        <Bolum baslik={k.kopruBaslik}>
          <Govde>{k.kopru}</Govde>
        </Bolum>

        <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.92rem', color: 'var(--ink-muted)', margin: 0, lineHeight: 1.55 }}>{k.kapanis}</p>
      </div>
    </Katlanir>
  );
}

function Govde({ children }) {
  return (
    <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.9rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.7 }}>{children}</p>
  );
}

function Bolum({ baslik, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 400, fontSize: '0.55rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{baslik}</span>
      {children}
    </div>
  );
}

function AccentKutu({ children }) {
  return (
    <div style={{ background: 'var(--accent-bg)', borderLeft: `2px solid ${TON}`, padding: '0.9rem 1.1rem' }}>{children}</div>
  );
}
