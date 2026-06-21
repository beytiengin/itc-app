// components/UyariSeviye.js
// Karar 62 — Hassas an uyarıları: tek tondan ÜÇ KADEMEYE (hafif/orta/ağır).
//
// İlke (Karar 62): "Güvenlik azalmaz — derecelenir." Ağır uyarı yalnız gerçekten
// ağır anlarda belirir; böylece ağırlığını korur (sinyal aşınması önlenir). Hafif
// anlar hafif uyarı alır, dramatik akış bölünmez.
//
// Kademe → görünüm (Karar 62 §6):
//   hafif → küçük gri italik altyazı (davet — dikkat çekmez)
//   orta  → eyebrow + kısa açıklama (göz altında ama görünür — bilgilendirme)
//   agir  → koruyucu banner + Topraklanma çağrısı + profesyonel destek kapısı
//           (yönlendirme; F.3.2). Topraklanma metni İCAT EDİLMEZ — mevcut
//           TopraklanmaModu overlay'ine devredilir (onTopraklanma).
//
// Kanon sınırları:
//   - Karar 31 (oyuncu-yüzü): iç kodlar/jargon görünmez; sıcak dil.
//   - Etik çerçeve §4: Topraklanma 6 adımı değişmez; bu katman yalnız tetikler.
//   - Karar 27/d + E-006: Hamlet IX + Willy XIII zorunlu Topraklanma AYNEN GEÇERLİ
//     (bu bileşen onu değiştirmez; ağır kademe + sahne-sonu zorunlu akış birlikte).
//
// İki gösterim modu:
//   - Kompakt (an-level, onTopraklanma YOK): hafif/orta/ağır tonlu satır, çıkış
//     butonu + destek notu YOK (an mühürlemesi akışını bölmemek için — koruma
//     zaten sahne sonunda kurulur).
//   - Tam (sahne/olay-level, onTopraklanma VAR): ağır kademede çıkış çağrısı +
//     destek kapısı görünür.

'use client';

import { useDil, ceviri } from '../app/lib/dil';
import chromeI18n from '../data/chrome-i18n';

// Bir düğümün (an/sahne/olay) etkin uyarı kademesi.
// Öncelik: açık `uyariSeviye` alanı → travmaDuyarli (Karar 51/62: 'agir' standart)
// → yok (uyarı gösterilmez). Placement icat edilmez; veri etiketlenene dek dormant.
export function uyariSeviyesi(dugum) {
  if (!dugum) return null;
  if (dugum.uyariSeviye === 'hafif' || dugum.uyariSeviye === 'orta' || dugum.uyariSeviye === 'agir') {
    return dugum.uyariSeviye;
  }
  if (dugum.travmaDuyarli === true) return 'agir';
  return null;
}

export default function UyariSeviye({ seviye, metin, onTopraklanma, destek = true }) {
  const { dil } = useDil();
  const u = ceviri(chromeI18n, dil).uyari;
  if (!seviye || !u) return null;

  // ── Hafif: gri italik altyazı, davet tonu ───────────────────────────────────
  if (seviye === 'hafif') {
    return (
      <p style={{
        fontFamily: 'var(--font-display), serif', fontStyle: 'italic',
        fontSize: '0.82rem', color: 'var(--ink-muted)', margin: 0, lineHeight: 1.5,
      }}>{metin || u.hafif}</p>
    );
  }

  // ── Orta: eyebrow + kısa açıklama, bilgilendirme tonu ────────────────────────
  if (seviye === 'orta') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif', fontWeight: 400, fontSize: '0.55rem',
          letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase',
        }}>{u.ortaEtiket}</span>
        <p style={{
          fontFamily: 'var(--font-display), serif', fontStyle: 'italic',
          fontSize: '0.9rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55,
        }}>{metin || u.orta}</p>
      </div>
    );
  }

  // ── Ağır: koruyucu banner — yönlendirme tonu (K27/d + E-006 stili) ───────────
  const tam = typeof onTopraklanma === 'function';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '0.55rem',
      padding: '0.85rem 1rem',
      background: 'var(--uyari-bg)',
      borderLeft: '2px solid var(--uyari)',
      border: '1px solid var(--uyari-bg)',
    }}>
      <span style={{
        fontFamily: 'var(--font-body), sans-serif', fontWeight: 400, fontSize: '0.55rem',
        letterSpacing: '0.3em', color: 'var(--uyari)', textTransform: 'uppercase',
      }}>{u.agirEtiket}</span>
      <p style={{
        fontFamily: 'var(--font-display), serif', fontStyle: 'italic',
        fontSize: '0.95rem', color: 'var(--ink)', margin: 0, lineHeight: 1.55,
      }}>{metin || u.agir}</p>

      {tam ? (
        <>
          <p style={{
            fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.8rem',
            color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6,
          }}>{u.topraklanmaCagri}</p>
          <button
            onClick={onTopraklanma}
            style={{
              alignSelf: 'flex-start', marginTop: '0.1rem',
              background: 'transparent', border: '1px solid var(--uyari)',
              color: 'var(--uyari)', padding: '0.5rem 1rem',
              fontFamily: 'var(--font-body), sans-serif', fontWeight: 300,
              fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'all 0.2s ease',
            }}
          >{u.topraklanmaCta}</button>
          {destek ? (
            <p style={{
              fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.72rem',
              color: 'var(--ink-muted)', margin: '0.2rem 0 0', lineHeight: 1.6,
            }}>{u.destekNotu}</p>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
