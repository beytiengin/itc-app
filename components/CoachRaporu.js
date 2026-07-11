// =====================================================================
// components/CoachRaporu.js — Coach Core Report render (Spec v0.5, Faz i)
// AKTÖRE ASLA GÖSTERİLMEZ — yalnız app/koc altında, kocRolum() kapısının
// arkasında render edilir. Koç tarafında sayı + madde kökü + band/sözlük
// (OPEN/AJAR/CLOSED) render etmek serbest ve amaçlıdır (spec §0).
// FAZ i ÜRETMEZ: F thread'leri (başlık + bekleme notu) · ↑↓ işaretleri ·
// Coach Library · konfor destesi/feel-show sentezi (ham liste render
// edilir) · Desire check-in logu (aktör-side mekanik Filiz kararında).
// DOĞRULAMA İMZASI: ITC-COACHRAPOR-BILESEN-20260710
// =====================================================================

'use client';

import { useEffect, useState } from 'react';
import { coachRapor } from '../data/kalibrasyon/coach-rapor';
import { coreRapor } from '../data/kalibrasyon/core-rapor';
import {
  orientationDoldur, bBolumu, c1Bolumu, ledgerOlustur, d2Olustur,
  roleHangover, eBolumu, safeguardSec,
} from '../app/lib/coach-rapor-motor';
import { girisDoku, doorwaySeti, doorwaySatiri } from '../app/lib/core-rapor-motor';
import { kocProfilGetir } from '../app/lib/koc-veri';

const TON = 'var(--accent)';
const bolumBaslik = { fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontWeight: 300, fontSize: '1.2rem', margin: 0, color: 'var(--ink)' };
const govde = { fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.84rem', lineHeight: 1.7, color: 'var(--ink-soft)', margin: 0 };
const kucuk = { ...govde, fontSize: '0.74rem', color: 'var(--ink-muted)' };
const kutu = { border: '1px solid var(--rule)', padding: '1.2rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' };
const band = { ...kucuk, fontStyle: 'italic', border: '1px solid var(--rule)', padding: '0.7rem 0.9rem' };

function P({ children, stil }) { return <p style={{ ...govde, ...stil }}>{children}</p>; }
// Kategori-geçiş işareti — yalnız retake'te (onceki varsa) görünür. ↑ iyiye,
// ↓ tersine; renk vurgusu koç okuması için, gürültüsüz.
function Gecis({ gecis }) {
  if (!gecis) return null;
  const renk = gecis.yon === 'yukari' ? 'var(--onay-soft, #4a7)' : 'var(--accent)';
  return <span style={{ ...kucuk, color: renk, marginLeft: '0.4rem', whiteSpace: 'nowrap' }}>{gecis.metin}</span>;
}
function Baslik({ children }) { return <h3 style={bolumBaslik}>{children}</h3>; }
function StandingHeader() { return <div style={band}>{coachRapor.standingHeader}</div>; }

export default function CoachRaporu({ aktorId, aktorAd, onGeri }) {
  const [v, setV] = useState(null);

  useEffect(() => {
    (async () => {
      const p = await kocProfilGetir(aktorId);
      if (!p.intake && !p.aps && !p.emotional && !p.type_lens) { setV({ yok: true }); return; }
      const A = p.intake ? orientationDoldur(p.intake.yanitlar) : null;
      const B = p.type_lens ? bBolumu(p.type_lens.skorlar) : null;
      const C1 = p.aps?.skorlar?.alanlar ? c1Bolumu(p.aps.skorlar.alanlar) : null;
      const C2 = p.aps?.yanitlar ? ledgerOlustur(p.aps.yanitlar, p.aps.onceki?.yanitlar) : null;
      const D2 = p.emotional?.yanitlar ? d2Olustur(p.emotional.yanitlar, p.emotional.onceki?.yanitlar) : null;
      const RH = p.emotional?.skorlar ? roleHangover(p.emotional.skorlar) : null;
      const E = p.aps?.skorlar?.alanlar && p.emotional?.skorlar?.sistemler
        ? eBolumu(p.aps.skorlar.alanlar, p.emotional.skorlar.sistemler) : null;
      const set = B ? doorwaySeti(B.hipotez) : null;
      const SG = E ? safeguardSec(E.grid, p.emotional.skorlar.sistemler) : null;
      setV({ p, A, B, C1, C2, D2, RH, E, set, SG });
    })();
  }, [aktorId]);

  if (!v) return <P>Loading…</P>;
  if (v.yok) return <div style={kutu}><P>No core data for this actor yet.</P></div>;
  const { p, A, B, C1, C2, D2, RH, E, set, SG } = v;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
      {onGeri && <button onClick={onGeri} style={{ ...kucuk, background: 'none', border: '1px solid var(--rule)', padding: '0.5rem 1rem', cursor: 'pointer', alignSelf: 'flex-start', letterSpacing: '0.15em', textTransform: 'uppercase' }}>← Actors</button>}

      <div style={kutu}>
        <h2 style={{ ...bolumBaslik, fontSize: '1.5rem' }}>{coachRapor.meta.baslik}</h2>
        <P stil={kucuk}>{aktorAd ? `${aktorAd} · ` : ''}facilitator view</P>
        <StandingHeader />
        <P stil={kucuk}>{coachRapor.orientation}</P>
      </div>

      {/* A — Who Is Walking Into the Room */}
      {A && (
        <div style={kutu}>
          <Baslik>A — Who Is Walking Into the Room</Baslik>
          <P>{A.paragraf}</P>
          {!A.aspirationVar && <P stil={kucuk}>[aspiration alanı boş — intake v0.2'de serbest-metin aspiration sorusu yok; spec kuralı gereği cümle atlandı, tahmin edilmedi. Filiz bayrağı açık.]</P>}
          <P stil={{ fontStyle: 'italic' }}>{coachRapor.A.coachPrompt}</P>
          {A.frame && <P>{A.frame}</P>}
        </div>
      )}

      {/* B — The Doorway, and How to Coach Through It */}
      {B && (
        <div style={kutu}>
          <Baslik>B — The Doorway, and How to Coach Through It</Baslik>
          <P>Doorway: {B.doorwayAd} ({B.hipotez}). Axis margins: {B.eksenler.map((e) => `${e.eksen ?? ''} ${e.marj ?? '?'}`).join(' · ')}</P>
          {B.komsuSatiri && <P>{B.komsuSatiri}</P>}
          <P stil={{ ...band, fontStyle: 'italic' }}>{coachRapor.B.boundaryLine}</P>
          {B.blok && (
            <>
              <P stil={{ fontWeight: 400, color: 'var(--ink)' }}>Coaching {B.doorwayAd}</P>
              {B.blok.auditFlag && <P stil={{ ...kucuk, color: TON }}>[{B.blok.auditFlag}]</P>}
              <P stil={{ fontStyle: 'italic' }}>{B.blok.intro}</P>
              <P><strong>Reaching them:</strong> {B.blok.reaching}</P>
              <P><strong>Doors to the inner life:</strong> {B.blok.doors}</P>
              <P><strong>Enhancers:</strong> {B.blok.enhancers}</P>
            </>
          )}
        </div>
      )}

      {/* C — The Skills Profile (Module 2) */}
      {C1 && (
        <div style={kutu}>
          <Baslik>C — The Skills Profile (Module 2)</Baslik>
          <P stil={kucuk}>C.1 — The grid</P>
          {C1.satirlar.map((d) => (
            <P key={d.dNo} stil={{ fontSize: '0.8rem' }}>
              D{d.dNo} {d.ad.replace(/^Domain \d+ — /, '')} — {d.skor} (mean {d.ortalama.toFixed(2)}) · {d.band}{d.hedge ? ', HEDGE ON' : ''} · {d.set} set
            </P>
          ))}
          <P stil={{ fontSize: '0.8rem' }}>
            D9 Craft Confidence — {C1.d9.skor} (mean {C1.d9.ortalama.toFixed(2)}) · {C1.d9.band}{C1.d9.hedge ? ', HEDGE ON' : ''} · reported separately
          </P>
          <P>D9 gap: {C1.d9.gap} → FLAG {C1.d9.gapBayrak ? 'ON' : 'OFF'}{C1.d9.gapBayrak ? `, ${C1.gapYonu} direction. The actor saw only the single reflective line on their confidence page; the framing is yours.` : ''}</P>
          {C2 && (
            <>
              <P stil={kucuk}>C.2 — The Item Ledger · {coachRapor.C.ledger.esikler.durum}</P>
              <P stil={{ ...band, fontStyle: 'italic' }}>{coachRapor.C.ledger.frame}</P>
              <P stil={{ fontWeight: 400, color: 'var(--ink)' }}>Strong items:</P>
              {C2.strong.map((s, i) => <P key={i} stil={{ fontSize: '0.78rem' }}>{s.metin}<Gecis gecis={s.gecis} /></P>)}
              <P stil={{ fontWeight: 400, color: 'var(--ink)' }}>Items needing special care:</P>
              {C2.care.map((s, i) => <P key={i} stil={{ fontSize: '0.78rem' }}>{s.metin}<Gecis gecis={s.gecis} /></P>)}
              <P stil={{ fontStyle: 'italic' }}>{coachRapor.C.ledger.careCloser}</P>
            </>
          )}
        </div>
      )}

      {/* D — The Emotional Palette (Module 3 — coach-side only) */}
      {D2 && (
        <div style={kutu}>
          <Baslik>D — The Emotional Palette (Module 3 — coach-side only)</Baslik>
          {RH && <P>Exit Capacity {RH.exit?.toFixed(2)} · Reach {RH.reach?.toFixed(2)} → role-hangover flag {RH.bayrak ? 'ON' : 'OFF'} <span style={kucuk}>({coachRapor.D.roleHangover.durum})</span></P>}
          <P stil={kucuk}>D.2 — Open & Closed Systems · {coachRapor.D.d2.esikler.durum}</P>
          <P stil={{ ...band, fontStyle: 'italic' }}>{coachRapor.D.d2.frame}</P>
          {D2.sistemler.map((s) => (
            <div key={s.ad} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <P stil={{ fontWeight: 400, color: 'var(--ink)' }}>{s.baslik}<Gecis gecis={s.gecis} /></P>
              {s.maddeler.map((m, i) => <P key={i} stil={{ fontSize: '0.76rem', paddingLeft: '0.8rem' }}>{m}</P>)}
            </div>
          ))}
          {D2.closedVar && <P stil={{ fontStyle: 'italic' }}>{coachRapor.D.d2.closedCloser}</P>}
          <P stil={kucuk}>Comfort inventory / Desire check-in / meta-emotion satırları: Faz i kapsamı dışı işaretli — konfor ham verisi saklı, sentez Filiz kurallarıyla; Desire check-in aktör-side mekaniği Filiz kararında.</P>
        </div>
      )}

      {/* E — The Core Report, As Assembled */}
      {E && (
        <div style={kutu}>
          <Baslik>E — The Core Report, As Assembled</Baslik>
          <P>Entrances selected: {E.girisler.map((g) => `${g.ad.split(' (')[0]} (${g.tur === 'domain' ? g.deger : g.deger.toFixed(2)})`).join(' · ')}. {set ? `Doorway question section rendered: ${B?.doorwayAd}.` : 'Doorway question section: NOT RENDERED (set bekleniyor — içerik kapısı).'}</P>
          {E.rota && <P stil={kucuk}>Routed sentence fired: {E.rota}</P>}
          <P stil={kucuk}>Post-view check-in response: yanıt kaydı yok (yakalama mekaniği Filiz kararında).</P>

          <P stil={kucuk}>E.2 — The Question Set, Coach Edition · Part One — what the actor got, verbatim:</P>
          {set ? (
            <>
              <P stil={{ fontWeight: 400, color: 'var(--ink)' }}>{coreRapor.ch3.boundaryLine}</P>
              {B && <P>{doorwaySatiri(B.doorwayAd)}</P>}
              {set.giris && <P>{set.giris}</P>}
              {set.maddeler.map((m, i) =>
                m.tip === 'italik'
                  ? <P key={i} stil={{ fontStyle: 'italic', fontSize: '0.78rem' }}>{m.metin}</P>
                  : <P key={i} stil={{ fontSize: '0.78rem', paddingLeft: '1rem', textIndent: '-0.6rem' }}>– {m.metin}</P>)}
              {E.girisler.map(girisDoku).filter((g) => g.blok).map((g, i) => (
                <div key={i}>
                  <P stil={{ fontWeight: 400, color: 'var(--ink)', fontSize: '0.8rem' }}>{g.baslik}</P>
                  <P stil={{ fontSize: '0.78rem' }}>{g.blok}</P>
                </div>
              ))}
            </>
          ) : <P stil={kucuk}>[Aktörün doorway seti henüz teslim edilmedi — Part One o setle dolar.]</P>}

          <P stil={kucuk}>Part Two — the coach additions:</P>
          <P stil={{ ...band, fontStyle: 'italic' }}>{coachRapor.E.e2.safeguardFrame}</P>
          {SG?.secim.map((s, i) => (
            <div key={i}>
              <P stil={{ fontWeight: 400, color: 'var(--ink)', fontSize: '0.8rem' }}>{s.etiket}</P>
              <P stil={{ fontSize: '0.78rem' }}>{s.metin}</P>
            </div>
          ))}
          {SG?.eksik.length > 0 && <P stil={kucuk}>[Bank bekleniyor: {SG.eksik.join(' · ')}]</P>}
          <P stil={{ fontStyle: 'italic' }}>{coachRapor.E.e2.libraryLine} <span style={kucuk}>(Coach Library görünümü bank teslimatıyla gelir.)</span></P>
        </div>
      )}

      {/* F — Threads Worth Pulling (Faz i: üretim yok) */}
      <div style={kutu}>
        <Baslik>F — Threads Worth Pulling</Baslik>
        <P stil={kucuk}>{coachRapor.F.durum} Gramer: \u201c{coachRapor.F.grammarKalip}\u201d</P>
      </div>

      <StandingHeader />
    </div>
  );
}
