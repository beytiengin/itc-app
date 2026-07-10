// =====================================================================
// components/CoreRaporu.js — Core Report render (Spec Pack v0.3)
// Kaynak: data/kalibrasyon/core-rapor.js (verbatim) + core-rapor-motor.js
//
// STRENGTHS-ONLY: bu bileşen M3 verisinden yalnız iki en açık rengin
//   ADINI (olumlayıcı giriş başlığında) kullanır; skor/sıra/band/palet
//   ASLA render edilmez. APS'ten yalnız giriş adları + rota; sayı yok.
// İÇERİK KAPISI: CoreRaporButonu, oyuncunun doorway'i için gecerli set
//   yoksa HİÇ görünmez (feature flag değil — paralel-faz dersinden).
// CHECK-IN: ilk tam görüntülemeden sonra bir kez (localStorage
//   'itc-core-checkin-goruldu'); yalnız kopya — yanıt yakalama biçimi
//   Filiz+Beyti kararı bekler (coach örneği yanıtların saklanacağını
//   gösteriyor; mekanik o kararla gelir).
// DOĞRULAMA İMZASI: ITC-COREREPORT-BILESEN-20260709
// =====================================================================

'use client';

import { useEffect, useState } from 'react';
import { coreRapor } from '../data/kalibrasyon/core-rapor';
import { tipRaporlari } from '../data/kalibrasyon/tip-raporlari';
import { girisleriSec, girisDoku, rotaCumlesi, doorwaySeti, doorwaySatiri } from '../app/lib/core-rapor-motor';
import { typeLensSonucGetir, apsSonuclariGetir, emotionalSonucGetir } from '../app/lib/batarya-kaydet';

const TON = 'var(--accent)';
const baslik = { fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontWeight: 300, fontSize: '1.5rem', margin: 0, lineHeight: 1.2, color: 'var(--ink)' };
const araBaslik = { ...baslik, fontSize: '1.15rem' };
const govde = { fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.86rem', lineHeight: 1.75, color: 'var(--ink-soft)', margin: 0 };
const kutu = { border: '1px solid var(--rule)', padding: '1.3rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' };
const geriButon = { background: 'none', border: '1px solid var(--rule)', color: 'var(--ink-soft)', padding: '0.55rem 1.1rem', fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' };

function P({ children, stil }) {
  return <p style={{ ...govde, ...stil }}>{children}</p>;
}

// Oyuncunun doorway anahtarı + görünen adı (adAnahtar: ad → key haritasının tersi).
function doorwayAdi(hipotez) {
  const girdi = Object.entries(tipRaporlari.meta.adAnahtar).find(([, k]) => k === hipotez);
  return girdi ? girdi[0] : null;
}

async function coreVeriGetir() {
  const [tl, apsler, em] = await Promise.all([
    typeLensSonucGetir(), apsSonuclariGetir(), emotionalSonucGetir(),
  ]);
  const aps = apsler?.[apsler.length - 1]?.skorlar;
  if (!tl?.hipotez || !aps?.alanlar || !em?.sistemler) return null;
  return { hipotez: tl.hipotez, apsAlanlar: aps.alanlar, sistemler: em.sistemler };
}

/* ─── İçerik-kapılı hub butonu: gecerli set yoksa görünmez ─────────────── */
export function CoreRaporButonu({ onSec, stil }) {
  const [hazir, setHazir] = useState(false);
  useEffect(() => {
    (async () => {
      const v = await coreVeriGetir();
      setHazir(!!(v && doorwaySeti(v.hipotez)));
    })();
  }, []);
  if (!hazir) return null;
  return (
    <button onClick={() => onSec('core_raporu')} style={{ ...geriButon, alignSelf: 'flex-start', borderColor: TON, color: TON, ...stil }}>
      Read your Core Report →
    </button>
  );
}

/* ─── Core Report — 6 bölüm (spec §2 sırası) ───────────────────────────── */
export default function CoreRaporu({ onGeri }) {
  const [veri, setVeri] = useState(null);
  const [checkInGoster, setCheckInGoster] = useState(false);

  useEffect(() => {
    (async () => {
      const v = await coreVeriGetir();
      if (!v) { setVeri({ yok: true }); return; }
      const set = doorwaySeti(v.hipotez);
      if (!set) { setVeri({ yok: true }); return; }
      const { grid, girisler } = girisleriSec(v.apsAlanlar, v.sistemler);
      setVeri({
        doorwayAd: doorwayAdi(v.hipotez),
        girisler: girisler.map(girisDoku),
        rota: rotaCumlesi(grid),
        set,
      });
    })();
  }, []);

  useEffect(() => {
    try {
      if (!localStorage.getItem('itc-core-checkin-goruldu')) {
        setCheckInGoster(true);
        localStorage.setItem('itc-core-checkin-goruldu', '1');
      }
    } catch { /* localStorage yoksa sessiz geç */ }
  }, []);

  if (!veri) return <P>Loading…</P>;
  if (veri.yok) return <div style={kutu}><P>Your Core Report is not ready yet.</P><button onClick={onGeri} style={geriButon}>← Back</button></div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
      <button onClick={onGeri} style={{ ...geriButon, alignSelf: 'flex-start' }}>← Back</button>

      {/* CH. 1 — açılış çerçevesi */}
      <div style={kutu}>
        <h2 style={baslik}>{coreRapor.meta.baslik}</h2>
        <P>{coreRapor.ch1.openingFrame}</P>
        <P>{coreRapor.ch1.boundaryParagraph}</P>
        <P stil={{ fontSize: '0.78rem', color: 'var(--ink-muted)', borderTop: '1px solid var(--rule)', paddingTop: '0.9rem' }}>
          {coreRapor.ch1.holdYourDoorwayLightly}
        </P>
      </div>

      {/* CH. 2 — girişler (İLK, soru setinden önce; set gösterir, anlatmaz) */}
      {veri.girisler.map((g, i) => (
        <div key={i} style={kutu}>
          <h3 style={araBaslik}>{g.baslik}</h3>
          {g.blok && <P>{g.blok}</P>}
        </div>
      ))}

      {/* CH. 3 — doorway-koşullu soru seti */}
      <div style={kutu}>
        <h3 style={araBaslik}>{coreRapor.ch3.header}</h3>
        <P stil={{ fontWeight: 400, color: 'var(--ink)' }}>{coreRapor.ch3.boundaryLine}</P>
        {/* PROPOSED doorway satırı — spec §6; Filiz çizerse tek satır kalkar */}
        {veri.doorwayAd && <P>{doorwaySatiri(veri.doorwayAd)}</P>}
        {veri.set.giris && <P>{veri.set.giris}</P>}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
          {veri.set.maddeler.map((m, i) =>
            m.tip === 'italik'
              ? <P key={i} stil={{ fontStyle: 'italic' }}>{m.metin}</P>
              : <P key={i} stil={{ paddingLeft: '1rem', textIndent: '-0.6rem' }}>– {m.metin}</P>
          )}
        </div>
      </div>

      {/* CH. 4 — coming back cleanly (koşulsuz) */}
      <div style={kutu}>
        <h3 style={araBaslik}>{coreRapor.ch4.header}</h3>
        <P>{coreRapor.ch4.teaching}</P>
        <P>{coreRapor.ch4.door}</P>
      </div>

      {/* CH. 5 — your next doors */}
      <div style={kutu}>
        <h3 style={araBaslik}>{coreRapor.ch5.header}</h3>
        {veri.rota && <P>{veri.rota}</P>}
        {coreRapor.ch5.davetler.map((d, i) => <P key={i}>{d}</P>)}
      </div>

      {/* CH. 6 — where this goes from here */}
      <div style={kutu}>
        <h3 style={araBaslik}>{coreRapor.ch6.header}</h3>
        {/* setGrowth: §6 onay bayrağı açık; örnek render içeriyor — Filiz çizerse tek satır kalkar */}
        <P>{coreRapor.ch6.setGrowth.metin}</P>
        <P>{coreRapor.ch6.standingOffer}</P>
        <P stil={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', color: 'var(--ink)' }}>{coreRapor.ch6.signOff}</P>
      </div>

      {/* POST-REPORT CHECK-IN — ilk tam görüntülemeden sonra, bir kez */}
      {checkInGoster && (
        <div style={{ ...kutu, borderColor: TON }}>
          <P>{coreRapor.checkIn}</P>
        </div>
      )}
    </div>
  );
}
