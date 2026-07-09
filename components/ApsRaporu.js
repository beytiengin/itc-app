// =====================================================================
// components/ApsRaporu.js — APS Actor Report render (Content Pack v0.2)
// Kaynak: data/kalibrasyon/aps-rapor.js (verbatim) + app/lib/aps-rapor-motor.js (§1)
//
// SERT KURALLAR (pack §0, v0.2):
//   - Oyuncu tarafında HİÇBİR SAYI render edilmez — yalnız çubuklar.
//   - Band adı / sıra / bayrak / gap asla görünmez; D9 gap'in tek görünür
//     sonucu reflectiveLine'dır.
//   - Kırmızı yok, trafik ışığı yok; tek sakin palet (mevcut tokenlar).
//   - Çubuklar D1–D9 SABİT enstrüman sırasında (sıralama sayfa 3–4'ün işi).
//   - Retake'lerde önceki uygulamalar tarihli SOLUK çubuklar olarak arkada.
//   - Montaj: S1 çerçeve → S2 görsel → S3 TOP → orta şerit → S4 EDGE+kapanış
//     → S5 D9 → S6 yolculuk. (§1 Page assembly)
// NOT: Nihai görsel tasarım pack §8'de Beyti'ye atanmış "pending" kalemdir;
//   buradaki çubuklar spec'in işlevsel karşılığıdır, sanat yönetimi ayrıca gelir.
// CHECK-IN (§1 + pack sonu, v0.3 ile düzeltildi): kopya pack'in sonundadır
//   ve İLK tam görüntülemeden sonra bir kez render edilir (localStorage
//   bayrağı 'itc-aps-checkin-goruldu'). Yalnız kopya gösterilir; "tell us"
//   etkileşiminin biçimi (buton/kanal) Filiz+Beyti kararını bekler.
// DOĞRULAMA İMZASI: ITC-APSRAPOR-BILESEN-V2-20260709
// =====================================================================

'use client';

import { useEffect, useState } from 'react';
import { apsRapor } from '../data/kalibrasyon/aps-rapor';
import {
  apsGrid, sayfaMontaji, microRevealMetni, experienceContextMetni,
} from '../app/lib/aps-rapor-motor';
import { apsSonuclariGetir, intakeYanitiGetir } from '../app/lib/batarya-kaydet';

const TON = 'var(--accent)';
const eyebrow = { fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: TON };
const baslik = { fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontWeight: 300, fontSize: '1.5rem', margin: 0, lineHeight: 1.2, color: 'var(--ink)' };
const araBaslik = { ...baslik, fontSize: '1.15rem' };
const govde = { fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.86rem', lineHeight: 1.75, color: 'var(--ink-soft)', margin: 0 };
const kutu = { border: '1px solid var(--rule)', padding: '1.3rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' };
const geriButon = { background: 'none', border: '1px solid var(--rule)', color: 'var(--ink-soft)', padding: '0.55rem 1.1rem', fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' };

// Kalın vurgu: pack metinlerinde markdown yok; düz metin render.
function P({ children, stil }) {
  return <p style={{ ...govde, ...stil }}>{children}</p>;
}

/* ─── Micro-reveal (M2 sonu, M3 öncesi — §2) ─────────────────────────────── */
export function ApsMicroReveal({ onDevam }) {
  const [metin, setMetin] = useState(null);
  useEffect(() => {
    (async () => {
      const satirlar = await apsSonuclariGetir();
      const son = satirlar?.[satirlar.length - 1];
      if (son?.skorlar?.alanlar) setMetin(microRevealMetni(apsGrid(son.skorlar.alanlar)));
    })();
  }, []);
  return (
    <div style={{ ...kutu, alignItems: 'flex-start' }}>
      <span style={eyebrow}>Module 2 · complete</span>
      <P stil={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.02rem', color: 'var(--ink)' }}>
        {metin ?? '…'}
      </P>
      <button onClick={onDevam} style={{ ...geriButon, borderColor: TON, color: TON }}>
        Continue →
      </button>
    </div>
  );
}

/* ─── Çubuk (sayısız; retake katmanlı) ───────────────────────────────────── */
function Cubuk({ ad, skor, gecmis }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
      <span style={{ ...govde, fontSize: '0.78rem', color: 'var(--ink)' }}>{ad}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {(gecmis || []).map((g, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ flex: 1, height: 4 }}>
              <div style={{ width: `${g.skor ?? 0}%`, height: '100%', backgroundColor: TON, opacity: 0.22 }} />
            </div>
            <span style={{ ...govde, fontSize: '0.58rem', color: 'var(--ink-muted)', whiteSpace: 'nowrap' }}>{g.tarih}</span>
          </div>
        ))}
        <div style={{ height: 10, backgroundColor: 'var(--bg-soft, transparent)', border: '1px solid var(--rule)' }}>
          <div style={{ width: `${skor ?? 0}%`, height: '100%', backgroundColor: TON, opacity: 0.85 }} />
        </div>
      </div>
    </div>
  );
}

/* ─── Domain bloğu (portre + seçilmiş blok — §4) ─────────────────────────── */
function DomainBlok({ d }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
      <span style={{ ...govde, fontWeight: 400, color: 'var(--ink)' }}>{d.ad}</span>
      <P stil={{ fontStyle: 'italic' }}>{d.portre}</P>
      <P>{d.metin}</P>
    </div>
  );
}

/* ─── Tam rapor (§1 montaj planı) ────────────────────────────────────────── */
export default function ApsRaporu({ onGeri }) {
  const [veri, setVeri] = useState(null); // {grid, montaj, gecmis, band}
  const [checkInGoster, setCheckInGoster] = useState(false);
  useEffect(() => {
    // İlk tam görüntüleme: rapor açıldığında bayrak yoksa check-in bir kez gösterilir.
    try {
      if (!localStorage.getItem('itc-aps-checkin-goruldu')) {
        setCheckInGoster(true);
        localStorage.setItem('itc-aps-checkin-goruldu', '1');
      }
    } catch { /* localStorage yoksa sessiz geç */ }
  }, []);
  useEffect(() => {
    (async () => {
      const [satirlar, band] = await Promise.all([apsSonuclariGetir(), intakeYanitiGetir(8)]);
      const son = satirlar?.[satirlar.length - 1];
      if (!son?.skorlar?.alanlar) { setVeri({ yok: true }); return; }
      const grid = apsGrid(son.skorlar.alanlar);
      const oncekiler = (satirlar || []).slice(0, -1).map((s) => ({
        tarih: (s.created_at || '').slice(0, 10),
        grid: s.skorlar?.alanlar ? apsGrid(s.skorlar.alanlar) : null,
      })).filter((x) => x.grid);
      setVeri({ grid, montaj: sayfaMontaji(grid), oncekiler, band });
    })();
  }, []);

  if (!veri) return <P>Loading…</P>;
  if (veri.yok) return <div style={kutu}><P>No profile found yet.</P><button onClick={onGeri} style={geriButon}>← Back</button></div>;

  const { grid, montaj, oncekiler, band } = veri;
  const gecmisFor = (dNo) => oncekiler.map((o) => ({
    tarih: o.tarih,
    skor: dNo === 9 ? o.grid.d9.skor : o.grid.domainler.find((x) => x.dNo === dNo)?.skor,
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
      <button onClick={onGeri} style={{ ...geriButon, alignSelf: 'flex-start' }}>← Back</button>

      {/* SAYFA 1 — açılış çerçevesi (§2) */}
      <div style={kutu}>
        <h2 style={baslik}>{apsRapor.page1.title}</h2>
        <P>{apsRapor.page1.beforeYouRead}</P>
        <P stil={{ fontSize: '0.78rem', color: 'var(--ink-muted)', borderTop: '1px solid var(--rule)', paddingTop: '0.9rem' }}>
          {apsRapor.page1.holdYourDoorwayLightly}
        </P>
      </div>

      {/* SAYFA 2 — profil görseli (spec: sayı yok, D1–D9 sabit sıra, D9 ayrı panel) */}
      <div style={kutu}>
        <span style={eyebrow}>Your profile</span>
        <span style={{ ...govde, fontWeight: 400, color: 'var(--ink)' }}>Your skills as you see them</span>
        {grid.domainler.map((d) => (
          <Cubuk key={d.dNo} ad={apsRapor.domainler.find((p) => p.no === d.dNo)?.ad} skor={d.skor} gecmis={gecmisFor(d.dNo)} />
        ))}
        <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          <Cubuk ad="Craft Confidence" skor={grid.d9.skor} gecmis={gecmisFor(9)} />
          <P stil={{ fontSize: '0.76rem', color: 'var(--ink-muted)' }}>{apsRapor.page2.d9PanelCaption}</P>
        </div>
      </div>

      {/* SAYFA 3 — TOP (§1: yüksekten düşüğe) */}
      <div style={kutu}>
        <h3 style={araBaslik}>{apsRapor.page3Header}</h3>
        <P>{apsRapor.page3Intro}</P>
        {montaj.sayfa3.map((d) => <DomainBlok key={d.dNo} d={d} />)}
      </div>

      {/* ORTA ŞERİT — MIDDLE (§1: portre + blok) */}
      {montaj.ortaSerit.length > 0 && (
        <div style={kutu}>
          <h3 style={araBaslik}>{apsRapor.middleStripHeader}</h3>
          {montaj.ortaSerit.map((d) => <DomainBlok key={d.dNo} d={d} />)}
        </div>
      )}

      {/* SAYFA 4 — EDGE (§1: yüksek önce) + kapanış */}
      <div style={kutu}>
        <h3 style={araBaslik}>{apsRapor.page4Header}</h3>
        <P>{apsRapor.page4Intro}</P>
        {montaj.sayfa4.map((d) => <DomainBlok key={d.dNo} d={d} />)}
        <P stil={{ borderTop: '1px solid var(--rule)', paddingTop: '0.9rem', fontStyle: 'italic' }}>{apsRapor.page4Closing}</P>
      </div>

      {/* SAYFA 5 — D9 (§5 render sırası: başlık → öğretici → band → [reflective] → building) */}
      <div style={kutu}>
        <h3 style={araBaslik}>{apsRapor.page5.header}</h3>
        <P>{apsRapor.page5.teachingBlock}</P>
        <P>{apsRapor.page5.bandlar[grid.d9.band]}</P>
        {grid.d9.gapBayrak && <P stil={{ fontStyle: 'italic' }}>{apsRapor.page5.reflectiveLine}</P>}
        <P>{apsRapor.page5.buildingBlock}</P>
      </div>

      {/* SAYFA 6 — yolculuk (§6: hepsi always; standing offer koşulsuz) */}
      <div style={kutu}>
        <h3 style={araBaslik}>{apsRapor.page6.header}</h3>
        {band && <P>{experienceContextMetni(band)}</P>}
        <P>{apsRapor.page6.trajectoryInvitation}</P>
        <P>{apsRapor.page6.standingOffer}</P>
        <P stil={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', color: 'var(--ink)' }}>{apsRapor.page6.signOff}</P>
      </div>

      {/* POST-REPORT CHECK-IN — ilk tam görüntülemeden sonra, bir kez (§1). */}
      {checkInGoster && (
        <div style={{ ...kutu, borderColor: TON }}>
          <P>{apsRapor.checkIn}</P>
        </div>
      )}
    </div>
  );
}
