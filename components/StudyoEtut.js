'use client';

// STUDYO-VIEWER-A3
// Stüdyo etüt viewer'ı — ZihinselAntrenman'a DOKUNMAZ (izole). Tek bileşen, üç
// oyun tipini de tek motorda taşır: bosluk-avi | dogru-cikarim | kronoloji.
// `etut` prop'u (data/studyo/etudler.js şekli) alır, `onBitir(yanitlar)` çağırır.
//
// İLKE KONTROLLERİ (kanon):
//  · Hiçbir yerde puan/yüzde/seri/skor YOK.
//  · dogru-cikarim "karşılaştır" gösterir, "X doğru" göstermez.
//  · kronoloji reveal'de doğru konumu AYNA olarak gösterir (not olarak değil),
//    ikinci kez sıralatmaz.
//  · bosluk-avi'de reveal YOK.
//  · her adım boş bırakılabilir (zorlama yok).
//  · kendiRolunde opsiyonel: doluysa kapanışın altında soluk kenarlı not;
//    boşsa render edilmez. Boşluk Avı'nda kullanılmaz.

import { useEffect, useRef, useState } from 'react';
import SesAdimi from '@/components/SesAdimi'; // STUDYO-SES-MOUNT-D1

const body = 'var(--font-body), sans-serif';
const display = 'var(--font-display), serif';

// ─── Ortak küçük parçalar ───────────────────────────────────────────────────
const sayfaSarmal = {
  maxWidth: 720, margin: '0 auto', padding: '2.5rem 1.3rem 5rem',
  display: 'flex', flexDirection: 'column', gap: '1.6rem',
};
const ustEtiket = {
  fontFamily: body, fontWeight: 400, fontSize: '0.6rem', letterSpacing: '0.3em',
  textTransform: 'uppercase', color: 'var(--accent)',
};
const baslikStili = {
  fontFamily: display, fontStyle: 'italic', fontWeight: 300,
  fontSize: 'clamp(1.9rem, 5vw, 2.6rem)', color: 'var(--ink)', margin: 0, lineHeight: 1.15,
};
const ledeStili = {
  fontFamily: display, fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem',
  lineHeight: 1.6, color: 'var(--ink-soft)', margin: 0,
};
const govde = {
  fontFamily: body, fontWeight: 300, fontSize: '1rem', lineHeight: 1.7,
  color: 'var(--ink)', margin: 0,
};
const soruStili = {
  fontFamily: display, fontStyle: 'italic', fontWeight: 300, fontSize: '1.2rem',
  lineHeight: 1.5, color: 'var(--ink)', margin: 0,
};
const cercFiyo = {
  fontFamily: body, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.6,
  color: 'var(--ink-muted)', borderLeft: '2px solid var(--rule)', paddingLeft: '0.9rem', margin: 0,
};
const cta = {
  fontFamily: body, fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.18em',
  textTransform: 'uppercase', color: 'var(--bg-base)', background: 'var(--accent)',
  border: 'none', padding: '0.85rem 1.6rem', cursor: 'pointer', alignSelf: 'flex-start',
};
const ctaHafif = {
  fontFamily: body, fontWeight: 400, fontSize: '0.72rem', letterSpacing: '0.16em',
  textTransform: 'uppercase', color: 'var(--ink-soft)', background: 'transparent',
  border: '1px solid var(--rule)', padding: '0.7rem 1.3rem', cursor: 'pointer',
};
const yaziAlani = {
  width: '100%', minHeight: 90, padding: '0.7rem 0.85rem', border: '1px solid var(--rule)',
  background: 'var(--bg-elevated)', color: 'var(--ink)', fontFamily: body, fontWeight: 300,
  fontSize: '0.95rem', lineHeight: 1.6, resize: 'vertical', boxSizing: 'border-box',
  outline: 'none', caretColor: 'var(--accent)',
};

function Kunye({ etut }) {
  return (
    <header style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
      <span style={ustEtiket}>Stüdyo · {etut.istasyonAd || 'Dramaturji'}</span>
      <h1 style={baslikStili}>{etut.baslik}</h1>
      <span style={{ fontFamily: body, fontWeight: 300, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
        {etut.seviye} · {etut.sure}
      </span>
      {etut.turCercevesi ? <p style={cercFiyo}>{etut.turCercevesi}</p> : null}
      {etut.giris?.lede ? <p style={ledeStili}>{etut.giris.lede}</p> : null}
      {(etut.giris?.metin || []).map((p, i) => <p key={i} style={govde}>{p}</p>)}
    </header>
  );
}

function KendiRolunde({ metin }) {
  if (!metin) return null;
  return (
    <div style={{ border: '1px solid var(--rule)', borderLeft: '3px solid var(--accent-soft)', padding: '1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', opacity: 0.92 }}>
      <span style={{ fontFamily: body, fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>Kendi rolüne taşı</span>
      <p style={{ ...govde, fontSize: '0.92rem', color: 'var(--ink-soft)' }}>{metin}</p>
    </div>
  );
}

function Kapanis({ etut, onBitir, yanitlar }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem', marginTop: '0.6rem' }}>
      {etut.kapanis ? <p style={{ ...soruStili, fontSize: '1.05rem' }}>{etut.kapanis}</p> : null}
      <KendiRolunde metin={etut.kendiRolunde} />
      <button style={cta} onClick={() => onBitir?.(yanitlar)}>Etüdü kapat →</button>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  ADIM AKIŞI — Boşluk Avı VE Antrenman (Zihin/Beden) tek motorda.
//  Adım tipleri: okuma | yazma | secim | uygula | cikis. reveal YOK.
//  'uygula' (Faz C): okuma gibi + nazik "uygula" çerçevesi (yonerge vurgulu) +
//  q "hazır olduğunda devam et" — zamanlayıcı/checkbox/sayaç YOK.
//  stilVaryant (VAK): vakKanal'a göre SESSİZCE doğru metni gösterir (kanal adı
//  GÖSTERİLMEZ; yoksa 'gorsel' varsayılan). Her adım boş bırakılabilir.
// ════════════════════════════════════════════════════════════════════════════
function AdimAkisi({ etut, onBitir, vakKanal }) {
  const adimlar = etut.adimlar || [];
  const [idx, setIdx] = useState(0);
  const [yazma, setYazma] = useState({});   // { index: metin }
  const [secim, setSecim] = useState({});    // { index: secenekId }
  const guvenli = Math.min(idx, adimlar.length - 1);
  const adim = adimlar[guvenli];
  const son = guvenli === adimlar.length - 1;
  const antrenmanMi = etut.tip === 'antrenman';

  const yanitlar = { tip: etut.tip, etudId: etut.id, yazma, secim };
  const varyantMetni = adim.stilVaryant
    ? (adim.stilVaryant[vakKanal] || adim.stilVaryant.gorsel)
    : null;

  return (
    <div style={sayfaSarmal}>
      <Kunye etut={etut} />
      <div style={{ height: 1, background: 'var(--rule)' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
        <span style={{ ...ustEtiket, color: 'var(--ink-muted)' }}>
          Adım {guvenli + 1} / {adimlar.length}{adim.baslik ? ` · ${adim.baslik}` : ''}
        </span>

        {/* STUDYO-SES-MOUNT-D1 — adım src taşıyorsa rehberli ses (preload=none);
            transkript verilmezse adımın metni transkript olur. src yoksa render edilmez. */}
        {adim.src ? (
          <SesAdimi src={adim.src} transkript={adim.transkript || (adim.metin || []).join('\n')} sure={adim.sure} />
        ) : null}

        {(adim.metin || []).map((p, i) => <p key={i} style={govde}>{p}</p>)}

        {/* VAK varyantı — sessiz: kanal adı gösterilmez */}
        {varyantMetni ? (
          <p style={{ ...govde, fontStyle: 'italic', color: 'var(--ink-soft)' }}>{varyantMetni}</p>
        ) : null}

        {/* 'uygula' çerçevesi — nazik yönerge, zorlama yok */}
        {adim.yonerge ? (
          <p style={{ fontFamily: body, fontWeight: 400, fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--ink)', borderLeft: '3px solid var(--accent)', paddingLeft: '0.9rem', margin: 0 }}>{adim.yonerge}</p>
        ) : null}

        {adim.tip === 'secim' && Array.isArray(adim.secenekler) && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {adim.secenekler.map((s) => {
              const secili = secim[guvenli] === s.id;
              return (
                <button key={s.id} onClick={() => setSecim((p) => ({ ...p, [guvenli]: s.id }))}
                  style={{ textAlign: 'left', cursor: 'pointer', border: `1px solid ${secili ? 'var(--accent)' : 'var(--rule)'}`, background: secili ? 'var(--accent-bg-deep)' : 'transparent', borderRadius: 8, padding: '0.75rem 0.9rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span style={{ fontFamily: display, fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink)' }}>{s.t}</span>
                  <span style={{ fontFamily: body, fontWeight: 300, fontSize: '0.85rem', color: 'var(--ink-soft)', lineHeight: 1.55 }}>{s.d}</span>
                </button>
              );
            })}
          </div>
        )}

        {adim.q && (adim.tip === 'yazma' || adim.tip === 'secim') ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={soruStili}>{adim.q}</p>
            {adim.hint ? <span style={{ fontFamily: body, fontWeight: 300, fontSize: '0.8rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>{adim.hint}</span> : null}
            <textarea style={yaziAlani} placeholder={adim.ph || ''} value={yazma[guvenli] || ''}
              onChange={(e) => setYazma((p) => ({ ...p, [guvenli]: e.target.value }))} />
          </div>
        ) : adim.q ? (
          <p style={{ ...govde, color: 'var(--ink-soft)', fontStyle: 'italic' }}>{adim.q}</p>
        ) : null}
      </div>

      <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginTop: '0.4rem' }}>
        {guvenli > 0 ? <button style={ctaHafif} onClick={() => setIdx(guvenli - 1)}>← Geri</button> : null}
        {!son ? (
          <button style={cta} onClick={() => { setIdx(guvenli + 1); if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Devam →</button>
        ) : (
          <button style={cta} onClick={() => onBitir?.(yanitlar)}>{antrenmanMi ? 'Tamamla →' : 'Mührü bırak →'}</button>
        )}
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  TİP 2 · DOĞRU MU / ÇIKARIM MI — sınıflandır, sonra "karşılaştır" (puan YOK)
// ════════════════════════════════════════════════════════════════════════════
function DogruCikarim({ etut, onBitir }) {
  const ifadeler = etut.ifadeler || [];
  const [secimler, setSecimler] = useState({}); // { idx: 'metin'|'cikarim' }

  function sec(i, deger) { setSecimler((p) => ({ ...p, [i]: deger })); }

  const yanitlar = { tip: 'dogru-cikarim', etudId: etut.id, secimler };

  return (
    <div style={sayfaSarmal}>
      <Kunye etut={etut} />
      <div style={{ height: 1, background: 'var(--rule)' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {ifadeler.map((ifade, i) => {
          const secildi = secimler[i];
          const ayni = secildi && secildi === ifade.dogru;
          return (
            <div key={i} style={{ border: '1px solid var(--rule)', padding: '1rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <p style={{ ...govde, fontSize: '1.02rem' }}>{ifade.metin}</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[['metin', 'Metin söylüyor'], ['cikarim', 'Benim çıkarımım']].map(([deger, etiket]) => {
                  const on = secildi === deger;
                  return (
                    <button key={deger} onClick={() => sec(i, deger)}
                      style={{ flex: 1, cursor: 'pointer', fontFamily: body, fontWeight: 400, fontSize: '0.78rem', letterSpacing: '0.04em', padding: '0.6rem 0.5rem', border: `1px solid ${on ? 'var(--accent)' : 'var(--rule)'}`, background: on ? 'var(--accent-bg-deep)' : 'transparent', color: on ? 'var(--ink)' : 'var(--ink-soft)', borderRadius: 6 }}>
                      {etiket}
                    </button>
                  );
                })}
              </div>
              {secildi ? (
                <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <span style={{ fontFamily: body, fontWeight: 400, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    Karşılaştır
                  </span>
                  <p style={{ ...govde, fontSize: '0.9rem', color: 'var(--ink-soft)' }}>
                    {ifade.dogru === 'metin'
                      ? 'Bu katman metnin verdiği bir olgu.'
                      : 'Bu katman senin koyduğun bir çıkarım.'}
                    {ayni ? ' Aynı okudun.' : ' Sen farklı işaretledin — ikisini yan yana gör.'}
                  </p>
                  {ifade.aciklama ? <p style={{ ...govde, fontSize: '0.88rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>{ifade.aciklama}</p> : null}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <Kapanis etut={etut} onBitir={onBitir} yanitlar={yanitlar} />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  TİP 3 · KRONOLOJİ — sürükle-bırak sırala → kontrast → boşluk köprüsü
// ════════════════════════════════════════════════════════════════════════════
function diziAyni(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i].id !== b[i].id) return false;
  return true;
}

function Kronoloji({ etut, onBitir }) {
  const olaylar = etut.olaylar || [];
  // Başlangıç dizilimi = oyunun gösterdiği sıra (syuzhet). Oyuncu bunu fabula'ya çeker.
  const baslangic = [...olaylar].sort((a, b) => a.syuzhet - b.syuzhet);
  const fabulaCozum = [...olaylar].sort((a, b) => a.fabula - b.fabula);
  const syuzhetSira = [...olaylar].sort((a, b) => a.syuzhet - b.syuzhet);

  const [faz, setFaz] = useState('sirala'); // 'sirala' | 'kontrast' | 'bosluk'
  const [sira, setSira] = useState(baslangic);
  const [kopruMetin, setKopruMetin] = useState('');
  const dogruDizildi = diziAyni(sira, fabulaCozum);

  // ── Pointer-event sürükle-bırak (touch + mouse; iPad uyumlu) ──────────────
  const [surukId, setSurukId] = useState(null);
  const satirRefs = useRef({});
  const surukRef = useRef(null);

  useEffect(() => {
    if (surukId == null) return;
    function tasiniyor(e) {
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      const mevcut = sira;
      const aktifIdx = mevcut.findIndex((o) => o.id === surukId);
      if (aktifIdx === -1) return;
      // Pointer hangi satırın orta noktasını geçti?
      let hedef = aktifIdx;
      for (let i = 0; i < mevcut.length; i++) {
        const el = satirRefs.current[mevcut[i].id];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const orta = r.top + r.height / 2;
        if (y < orta) { hedef = i; break; }
        hedef = i;
      }
      if (hedef !== aktifIdx) {
        const yeni = [...mevcut];
        const [tasinan] = yeni.splice(aktifIdx, 1);
        yeni.splice(hedef, 0, tasinan);
        setSira(yeni);
      }
      if (e.cancelable) e.preventDefault();
    }
    function birakti() { setSurukId(null); }
    window.addEventListener('pointermove', tasiniyor, { passive: false });
    window.addEventListener('pointerup', birakti);
    window.addEventListener('pointercancel', birakti);
    return () => {
      window.removeEventListener('pointermove', tasiniyor);
      window.removeEventListener('pointerup', birakti);
      window.removeEventListener('pointercancel', birakti);
    };
  }, [surukId, sira]);

  const yanitlar = { tip: 'kronoloji', etudId: etut.id, kopruMetin };

  // ── FAZ: sıralama ─────────────────────────────────────────────────────────
  if (faz === 'sirala') {
    return (
      <div style={sayfaSarmal}>
        <Kunye etut={etut} />
        <div style={{ height: 1, background: 'var(--rule)' }} />
        <span style={{ ...ustEtiket, color: 'var(--ink-muted)' }}>Olayları gerçek sırasına sürükle</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {sira.map((o, i) => {
            const suruklenuyor = surukId === o.id;
            return (
              <div key={o.id}
                ref={(el) => { satirRefs.current[o.id] = el; }}
                onPointerDown={(e) => { surukRef.current = e.currentTarget; setSurukId(o.id); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.85rem 1rem',
                  border: `1px solid ${suruklenuyor ? 'var(--accent)' : 'var(--rule)'}`,
                  background: suruklenuyor ? 'var(--accent-bg-deep)' : 'var(--bg-elevated)',
                  borderRadius: 8, cursor: 'grab', touchAction: 'none', userSelect: 'none',
                  boxShadow: suruklenuyor ? '0 8px 24px rgba(0,0,0,0.18)' : 'none',
                  transition: suruklenuyor ? 'none' : 'border-color 0.2s ease',
                }}>
                <span aria-hidden style={{ fontFamily: body, fontWeight: 400, fontSize: '1rem', color: 'var(--ink-muted)', lineHeight: 1 }}>⋮⋮</span>
                <span style={{ fontFamily: body, fontWeight: 400, fontSize: '0.95rem', color: 'var(--ink)', lineHeight: 1.5 }}>{o.metin}</span>
              </div>
            );
          })}
        </div>
        {dogruDizildi ? (
          <button style={cta} onClick={() => { setFaz('kontrast'); if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Sırayı kurdun — kontrastı gör →
          </button>
        ) : (
          <p style={{ fontFamily: body, fontWeight: 300, fontSize: '0.85rem', color: 'var(--ink-muted)', fontStyle: 'italic', margin: 0 }}>
            En erken yaşanan olay en üstte olacak şekilde diz.
          </p>
        )}
      </div>
    );
  }

  // ── FAZ: kontrast (ikinci kez sıralatma YOK — ayna) ──────────────────────
  if (faz === 'kontrast') {
    return (
      <div style={sayfaSarmal}>
        <span style={ustEtiket}>Kontrast · yaşandığı sıra ↔ gösterildiği sıra</span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontFamily: body, fontWeight: 500, fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)' }}>Yaşandığı sıra</span>
            {fabulaCozum.map((o, i) => (
              <div key={o.id} style={{ border: '1px solid var(--rule)', borderRadius: 6, padding: '0.6rem 0.7rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: body, fontWeight: 500, fontSize: '0.8rem', color: 'var(--ink-muted)' }}>{i + 1}</span>
                <span style={{ fontFamily: body, fontWeight: 300, fontSize: '0.82rem', color: 'var(--ink)', lineHeight: 1.45 }}>{o.metin}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontFamily: body, fontWeight: 500, fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>Oyunun gösterdiği sıra</span>
            {syuzhetSira.map((o, i) => (
              <div key={o.id} style={{ border: '1px solid var(--rule)', borderRadius: 6, padding: '0.6rem 0.7rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <span aria-label={`gerçek sıra ${o.fabula}`} style={{ fontFamily: body, fontWeight: 500, fontSize: '0.7rem', color: 'var(--bg-base)', background: 'var(--accent)', borderRadius: 4, padding: '0.05rem 0.4rem', whiteSpace: 'nowrap' }}>#{o.fabula}</span>
                <span style={{ fontFamily: body, fontWeight: 300, fontSize: '0.82rem', color: 'var(--ink)', lineHeight: 1.45 }}>{o.metin}</span>
              </div>
            ))}
          </div>
        </div>
        {etut.kontrastAnlatim ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', borderLeft: '3px solid var(--accent-soft)', paddingLeft: '1.1rem' }}>
            <div>
              <span style={{ fontFamily: body, fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>Ne görüyorsun</span>
              <p style={{ ...govde, marginTop: '0.3rem' }}>{etut.kontrastAnlatim.ne}</p>
            </div>
            <div>
              <span style={{ fontFamily: body, fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>Neden önemli</span>
              <p style={{ ...govde, marginTop: '0.3rem' }}>{etut.kontrastAnlatim.nicin}</p>
            </div>
          </div>
        ) : null}
        <button style={cta} onClick={() => { setFaz('bosluk'); if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Aradaki boşluğa bak →
        </button>
      </div>
    );
  }

  // ── FAZ: boşluk köprüsü (yansıma — doğru yok) + kapanış ──────────────────
  return (
    <div style={sayfaSarmal}>
      {etut.boslukKoprusu ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          <span style={ustEtiket}>{etut.boslukKoprusu.baslik || 'Aradaki boşluk'}</span>
          <p style={soruStili}>{etut.boslukKoprusu.q}</p>
          <textarea style={yaziAlani} placeholder={etut.boslukKoprusu.ph || ''} value={kopruMetin}
            onChange={(e) => setKopruMetin(e.target.value)} />
        </div>
      ) : null}
      <Kapanis etut={etut} onBitir={onBitir} yanitlar={yanitlar} />
    </div>
  );
}

// ─── Dispatcher ──────────────────────────────────────────────────────────────
// STUDYO-ETUT-C3 — antrenman ('tip: antrenman') Boşluk Avı ile aynı adım motorunu
// (AdimAkisi) paylaşır; vakKanal stilVaryant için aşağı geçer.
export default function StudyoEtut({ etut, onBitir, vakKanal }) {
  if (!etut) return null;
  if (etut.tip === 'bosluk-avi' || etut.tip === 'antrenman') return <AdimAkisi etut={etut} onBitir={onBitir} vakKanal={vakKanal} />;
  if (etut.tip === 'dogru-cikarim') return <DogruCikarim etut={etut} onBitir={onBitir} />;
  if (etut.tip === 'kronoloji') return <Kronoloji etut={etut} onBitir={onBitir} />;
  return null;
}
