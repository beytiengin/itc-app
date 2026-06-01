// app/kulis/page.js
// ITC Actor's Gym — Kulis (Karakter seçimli yeniden tasarım)
//
// Tek karakter odaklı çalışma masası. Altı bölüm:
//   1. Karakter seçimi (4 eşit kutu üstte)
//   2. Nerede Kaldın (en son üzerinde + sıradaki dokunulmamış)
//   3. Zaman Çizgisi (yatay, çağrıştırıcı başlıklar, dört durum)
//   4. Biriken Dosya (oyuncunun yazdıkları portre olarak)
//   5. Sen ve Karakter (kalibrasyon yansıtma — açık kapı + sayım + çerçeve)
//   6. Desenler · yakında (yer tutucu, Modül III)
//
// Eski sayaç-bazlı "açılır-kapanır karakter listesi" tasarımı yerini alır.
// Hamlet/Willy yeni şemada (boslukSet + sahnelerWorkbook); Macbeth/Biff eski
// şemada — seçilebilir ama timeline/biriken boş, sadece klasik sayfa linki gösterilir.
//
// Renkler `var(--*)` token sistemi üzerinden. Metot görünmez (Karar 31):
// "Çapa/Tip/Pozisyon/skor/sınıf" gösterilmez. AI yorum/metin üretimi YOK —
// oyuncunun kendi yazdığı esas. Aynanın yorum katmanı Modül III'e bırakıldı.

'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  karakterAntrenmanYansimalariniGetir,
  karakterBoslukYansimalariniTamGetir,
  tumKarakterIlerlemeleri,
} from '../lib/kulis';
import { getKalibrasyonProfili } from '../lib/kalibrasyon';
import { useDil, ceviri } from '../lib/dil';
import chromeI18n from '../../data/chrome-i18n';
import macbeth from '../../data/karakterler/macbeth';
import hamlet from '../../data/karakterler/hamlet';
import willy from '../../data/karakterler/willy';
import biff from '../../data/karakterler/biff';

const KARAKTERLER = { hamlet, willy, macbeth, biff };
const SIRA = ['hamlet', 'willy', 'macbeth', 'biff'];

// Karakter bazlı kayıt anı (★) setleri — el-yazmasi/page.js içinde tutulan
// değerlerle aynı kalmalı. Veri katmanına taşımak ileride yapılır.
const KAYIT_ANI_SAHNE = {
  willy: new Set([7, 9, 11]),
  hamlet: new Set([]),
  macbeth: new Set([]),
  biff: new Set([]),
};

// VAK → açık kapı (el-yazmasi.js ile aynı eşleme).
function acikKapi(vakBaskin) {
  if (vakBaskin === 'Görsel') return 'bilissel';
  if (vakBaskin === 'Kinestetik') return 'bedensel';
  if (vakBaskin === 'İşitsel') return 'duygusal';
  return null;
}

function yeniSemadaMi(karakter) {
  return !!(karakter.boslukSet && karakter.sahnelerWorkbook);
}

// Sahne + boşlukları oyun sırasında akış olarak birleştir.
function akisHesapla(karakter) {
  if (!yeniSemadaMi(karakter)) return [];
  const sahneler = [...(karakter.sahnelerWorkbook || [])].sort((a, b) => a.no - b.no);
  const bosluklar = karakter.boslukSet || [];
  const dugumler = [];
  for (const sahne of sahneler) {
    const sahneOncesi = bosluklar.filter((b) => b.sonraSahneNo === sahne.no);
    for (const b of sahneOncesi) dugumler.push({ tip: 'bosluk', veri: b });
    dugumler.push({ tip: 'sahne', veri: sahne });
  }
  return dugumler;
}

function gunOnce(tarih, t) {
  if (!tarih) return null;
  const fark = Math.floor((Date.now() - tarih.getTime()) / (1000 * 60 * 60 * 24));
  if (fark === 0) return t.bugun;
  if (fark === 1) return t.dun;
  if (fark < 7) return `${fark} ${t.gunOnce}`;
  if (fark < 30) return `${Math.floor(fark / 7)} ${t.haftaOnce}`;
  return `${Math.floor(fark / 30)} ${t.ayOnce}`;
}

// ─── ANA BİLEŞEN ───────────────────────────────────────────────────────────

export default function KulisSayfasi() {
  const { dil } = useDil();
  const t = ceviri(chromeI18n, dil).kulis;

  const [yukleniyor, setYukleniyor] = useState(true);
  const [kalibrasyon, setKalibrasyon] = useState(null);
  const [ilerlemeler, setIlerlemeler] = useState({});
  const [seciliId, setSeciliId] = useState(null);

  const [detayYukleniyor, setDetayYukleniyor] = useState(false);
  const [boslukYansimalari, setBoslukYansimalari] = useState([]);
  const [antrenmanYansimalari, setAntrenmanYansimalari] = useState([]);

  useEffect(() => {
    async function ilk() {
      const [profil, sayimlar] = await Promise.all([
        getKalibrasyonProfili(),
        tumKarakterIlerlemeleri(),
      ]);
      setKalibrasyon(profil);
      setIlerlemeler(sayimlar || {});
      setYukleniyor(false);
    }
    ilk();
  }, []);

  useEffect(() => {
    if (!seciliId) return;
    let iptal = false;
    setDetayYukleniyor(true);
    Promise.all([
      karakterBoslukYansimalariniTamGetir(seciliId),
      karakterAntrenmanYansimalariniGetir(seciliId),
    ]).then(([bosluklar, antrenmanlar]) => {
      if (iptal) return;
      setBoslukYansimalari(bosluklar);
      setAntrenmanYansimalari(antrenmanlar);
      setDetayYukleniyor(false);
    });
    return () => { iptal = true; };
  }, [seciliId]);

  if (yukleniyor) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{t.hazirlaniyor}</span>
      </main>
    );
  }

  const acikKapiKey = acikKapi(kalibrasyon?.vak?.baskin || kalibrasyon?.vak?.dominant);
  const kalibrasyonEksik = !kalibrasyon || (kalibrasyon.eksikler && kalibrasyon.eksikler.length > 0);
  const seciliKarakter = seciliId ? KARAKTERLER[seciliId] : null;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>
      <section style={{ flex: 1, padding: '3rem 1.6rem 4rem', maxWidth: 880, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.6rem' }}>

        <Header t={t} />

        <KarakterSecimi
          t={t}
          ilerlemeler={ilerlemeler}
          seciliId={seciliId}
          onSec={setSeciliId}
        />

        {!seciliId && kalibrasyonEksik && <EmptyKalibrasyon t={t} />}

        {seciliKarakter && (
          <DetayBolumler
            t={t}
            karakter={seciliKarakter}
            boslukYansimalari={boslukYansimalari}
            antrenmanYansimalari={antrenmanYansimalari}
            yukleniyor={detayYukleniyor}
            acikKapiKey={acikKapiKey}
          />
        )}

      </section>
    </main>
  );
}

// ─── HEADER ────────────────────────────────────────────────────────────────

function Header({ t }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
      <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--accent)', opacity: 0.4 }} />
      <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: 'var(--accent)', textTransform: 'uppercase' }}>{t.etiket}</span>
      <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'var(--ink)', margin: 0 }}>{t.baslik}</h1>
      <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: 'var(--ink-soft)', lineHeight: 1.75, margin: 0, maxWidth: 560 }}>
        {t.intro}
      </p>
    </div>
  );
}

// ─── 1. KARAKTER SEÇİMİ ────────────────────────────────────────────────────

function KarakterSecimi({ t, ilerlemeler, seciliId, onSec }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
      <Etiket>{t.karakterSecEtiket}</Etiket>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.55rem' }}>
        {SIRA.map((id) => {
          const k = KARAKTERLER[id];
          const ilerleme = ilerlemeler[id] || { bosluk: 0, antrenman: 0 };
          const dokunuldu = ilerleme.bosluk > 0 || ilerleme.antrenman > 0;
          const aktif = yeniSemadaMi(k);
          const seci = seciliId === id;
          const durum = !aktif
            ? t.karakterDurumYakinda
            : dokunuldu
              ? `${ilerleme.bosluk} ${t.karakterDurumDokundun}`
              : t.karakterDurumYok;
          return (
            <button
              key={id}
              onClick={() => onSec(id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.4rem',
                padding: '0.9rem 0.95rem',
                background: seci ? 'var(--bg-elevated)' : 'transparent',
                border: `1px solid ${seci ? 'var(--accent)' : 'var(--rule)'}`,
                cursor: 'pointer',
                color: 'var(--ink)',
                textAlign: 'left',
                fontFamily: 'inherit',
                opacity: aktif ? 1 : 0.6,
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => { if (!seci) e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={(e) => { if (!seci) e.currentTarget.style.borderColor = 'var(--rule)'; }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: dokunuldu ? 'var(--onay-soft)' : 'var(--ink-muted)',
                  opacity: dokunuldu ? 1 : 0.5,
                }} aria-hidden />
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--ink)', lineHeight: 1.1 }}>{k.ad}</span>
              </span>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.62rem', letterSpacing: '0.12em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{durum}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── DETAY: 5 BÖLÜM (Nerede Kaldın · Timeline · Biriken · Sen ve Karakter · Desenler) ──

function DetayBolumler({ t, karakter, boslukYansimalari, antrenmanYansimalari, yukleniyor, acikKapiKey }) {
  if (yukleniyor) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{t.hazirlaniyor}</span>
      </div>
    );
  }

  const yeniSema = yeniSemadaMi(karakter);
  const akis = useMemo(() => akisHesapla(karakter), [karakter]);

  return (
    <>
      <NeredeKaldin t={t} karakter={karakter} yeniSema={yeniSema} boslukYansimalari={boslukYansimalari} antrenmanYansimalari={antrenmanYansimalari} />
      <ZamanCizgisi t={t} karakter={karakter} yeniSema={yeniSema} akis={akis} boslukYansimalari={boslukYansimalari} antrenmanYansimalari={antrenmanYansimalari} />
      <BirikenDosya t={t} karakter={karakter} yeniSema={yeniSema} akis={akis} boslukYansimalari={boslukYansimalari} />
      <SenVeKarakter t={t} karakter={karakter} acikKapiKey={acikKapiKey} boslukYansimalari={boslukYansimalari} />
      <Desenler t={t} />
    </>
  );
}

// ─── 2. NEREDE KALDIN ──────────────────────────────────────────────────────

function NeredeKaldin({ t, karakter, yeniSema, boslukYansimalari, antrenmanYansimalari }) {
  // En son üzerindeydiğin düğüm: antrenman_yansimalari + bosluk_yansimalari
  // birleşik olarak son_guncelleme'ye göre en yenisi.
  const sonAntrenman = antrenmanYansimalari[0]; // zaten desc sıralı
  const sonBosluk = boslukYansimalari[0];
  let sonKayit = null; // {tip, no, baslik, tarih, link}

  function tarihParse(v) { return v ? new Date(v) : null; }

  const antrenmanTarih = sonAntrenman ? tarihParse(sonAntrenman.son_guncelleme) : null;
  const boslukTarih = sonBosluk ? tarihParse(sonBosluk.son_guncelleme) : null;

  if (antrenmanTarih && (!boslukTarih || antrenmanTarih >= boslukTarih)) {
    // antrenman_id 'elyazma-sahne-N' → N
    const m = sonAntrenman.antrenman_id?.match(/^elyazma-sahne-(\d+)$/);
    if (m) {
      const no = Number(m[1]);
      const sahne = (karakter.sahnelerWorkbook || []).find((s) => s.no === no);
      if (sahne) sonKayit = { tip: 'sahne', no, baslik: sahne.baslik, tarih: antrenmanTarih, link: `/antrenman/karakter/${karakter.id}/el-yazmasi#sahne-${no}` };
    }
  } else if (boslukTarih) {
    const m = sonBosluk.bosluk_id?.match(/^elyazma-bosluk-(\d+)$/);
    if (m) {
      const no = Number(m[1]);
      const bosluk = (karakter.boslukSet || []).find((b) => b.no === no);
      if (bosluk) sonKayit = { tip: 'bosluk', no, baslik: bosluk.baslik, tarih: boslukTarih, link: `/antrenman/karakter/${karakter.id}/el-yazmasi#bosluk-${no}` };
    }
  }

  // Sıradaki dokunulmamış boşluk: boslukSet'te bosluk_yansimalari kaydı olmayanın ilki
  let siradakiBosluk = null;
  if (yeniSema) {
    const yazilanIdSet = new Set(boslukYansimalari.map((b) => b.bosluk_id));
    const sirali = [...(karakter.boslukSet || [])].sort((a, b) => (a.sonraSahneNo || 99) - (b.sonraSahneNo || 99));
    for (const b of sirali) {
      const id = `elyazma-bosluk-${b.no}`;
      if (!yazilanIdSet.has(id)) {
        siradakiBosluk = { no: b.no, baslik: b.baslik, link: `/antrenman/karakter/${karakter.id}/el-yazmasi#bosluk-${b.no}` };
        break;
      }
    }
  }

  const bosDurum = !sonKayit && !siradakiBosluk;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
      <Etiket>{t.neredeKaldinEtiket}</Etiket>

      {bosDurum && (
        <BosKart>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink-soft)' }}>{t.neredeKaldinBos}</span>
          {yeniSema ? (
            <SatirLink href={`/antrenman/karakter/${karakter.id}/el-yazmasi`}>{t.elYazmasiniAc}</SatirLink>
          ) : (
            <SatirLink href={`/antrenman/karakter/${karakter.id}`}>{t.karaktereGit}</SatirLink>
          )}
        </BosKart>
      )}

      {sonKayit && (
        <NeredeKaldinSatir
          ust={t.enSonUzerindeydim}
          baslik={sonKayit.baslik}
          alt={gunOnce(sonKayit.tarih, t)}
          cta={t.devamEt}
          link={sonKayit.link}
        />
      )}

      {siradakiBosluk && (
        <NeredeKaldinSatir
          ust={t.siradakiDokunulmamis}
          baslik={siradakiBosluk.baslik}
          cta={t.ac}
          link={siradakiBosluk.link}
        />
      )}
    </div>
  );
}

function NeredeKaldinSatir({ ust, baslik, alt, cta, link }) {
  return (
    <div style={{ border: '1px solid var(--rule)', padding: '1.1rem 1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', transition: 'border 0.25s ease' }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1, minWidth: 0 }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.58rem', letterSpacing: '0.28em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{ust}</span>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink)', lineHeight: 1.4 }}>{baslik}</span>
        {alt && <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: 'var(--ink-muted)', letterSpacing: '0.1em' }}>{alt}</span>}
      </div>
      <a href={link} style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>
        {cta}
      </a>
    </div>
  );
}

// ─── 3. ZAMAN ÇİZGİSİ ──────────────────────────────────────────────────────

function ZamanCizgisi({ t, karakter, yeniSema, akis, boslukYansimalari, antrenmanYansimalari }) {
  const [secili, setSecili] = useState(null); // {tip, no, baslik}
  const yazilanBoslukIdSet = useMemo(() => new Set(boslukYansimalari.map((b) => b.bosluk_id)), [boslukYansimalari]);
  const yazilanSahneNoSet = useMemo(() => {
    const set = new Set();
    antrenmanYansimalari.forEach((a) => {
      const m = a.antrenman_id?.match(/^elyazma-sahne-(\d+)$/);
      if (m && a.metin && a.metin.length > 0) set.add(Number(m[1]));
    });
    return set;
  }, [antrenmanYansimalari]);
  const kayitAniSet = KAYIT_ANI_SAHNE[karakter.id] || new Set();

  if (!yeniSema) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        <Etiket>{t.zamanCizgisiEtiket}</Etiket>
        <BosKart>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink-soft)' }}>{t.timelineBos}</span>
        </BosKart>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <Etiket>{t.zamanCizgisiEtiket}</Etiket>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: 'var(--ink-soft)' }}>{t.zamanCizgisiAltyazi}</span>
      </div>

      <Lejant t={t} />

      <div style={{
        display: 'flex',
        gap: '0.45rem',
        overflowX: 'auto',
        overflowY: 'hidden',
        padding: '0.6rem 0.1rem 0.9rem',
        scrollSnapType: 'x proximity',
        WebkitOverflowScrolling: 'touch',
      }}>
        {akis.map((d) => {
          const yazildi = d.tip === 'sahne'
            ? yazilanSahneNoSet.has(d.veri.no)
            : yazilanBoslukIdSet.has(`elyazma-bosluk-${d.veri.no}`);
          const isSec = secili?.tip === d.tip && secili?.no === d.veri.no;
          const kayitAni = d.tip === 'sahne' && kayitAniSet.has(d.veri.no);
          return (
            <TimelineDugumu
              key={`${d.tip}-${d.veri.no}`}
              tip={d.tip}
              no={d.veri.no}
              baslik={d.veri.baslik}
              yazildi={yazildi}
              kayitAni={kayitAni}
              isSec={isSec}
              onSec={() => setSecili({ tip: d.tip, no: d.veri.no, baslik: d.veri.baslik })}
            />
          );
        })}
      </div>

      {secili && (
        <TimelineKucukKart
          t={t}
          karakterId={karakter.id}
          tip={secili.tip}
          no={secili.no}
          baslik={secili.baslik}
        />
      )}
    </div>
  );
}

function Lejant({ t }) {
  const ogeler = [
    { renk: 'var(--accent)',     ad: t.lejantSahneYazildi,  bicim: 'kare' },
    { renk: 'var(--ink-muted)',  ad: t.lejantSahneBos,      bicim: 'kare' },
    { renk: 'var(--onay-soft)',  ad: t.lejantBoslukYazildi, bicim: 'daire' },
    { renk: 'var(--rule)',       ad: t.lejantBoslukBos,     bicim: 'daire' },
  ];
  return (
    <div style={{ display: 'flex', gap: '0.95rem', flexWrap: 'wrap' }}>
      {ogeler.map((o) => (
        <span key={o.ad} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span aria-hidden style={{
            width: '11px',
            height: '11px',
            borderRadius: o.bicim === 'daire' ? '50%' : '1px',
            background: o.renk,
            border: `1px solid ${o.renk}`,
          }} />
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{o.ad}</span>
        </span>
      ))}
    </div>
  );
}

function TimelineDugumu({ tip, no, baslik, yazildi, kayitAni, isSec, onSec }) {
  const isSahne = tip === 'sahne';
  const dolu = isSahne
    ? (yazildi ? 'var(--accent)' : 'transparent')
    : (yazildi ? 'var(--onay-soft)' : 'transparent');
  const kenar = isSahne
    ? (yazildi ? 'var(--accent)' : 'var(--ink-muted)')
    : (yazildi ? 'var(--onay-soft)' : 'var(--rule)');
  const sekil = isSahne ? '2px' : '50%';

  return (
    <button
      onClick={onSec}
      title={baslik}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.45rem',
        background: 'none',
        border: 'none',
        padding: '0 0.1rem',
        cursor: 'pointer',
        color: 'var(--ink)',
        fontFamily: 'inherit',
        flexShrink: 0,
        scrollSnapAlign: 'start',
        minWidth: '112px',
      }}
    >
      <span aria-hidden style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        {kayitAni && (
          <span style={{
            position: 'absolute',
            inset: '-6px',
            border: `1px solid ${dolu === 'transparent' ? kenar : dolu}`,
            borderRadius: sekil === '50%' ? '50%' : '4px',
            opacity: 0.6,
          }} />
        )}
        <span style={{
          width: '24px',
          height: '24px',
          background: dolu,
          border: `1.5px solid ${kenar}`,
          borderRadius: sekil,
          outline: isSec ? `2px solid var(--accent)` : 'none',
          outlineOffset: '3px',
          transition: 'all 0.2s ease',
        }} />
      </span>
      <span style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontStyle: 'italic',
        fontSize: '0.78rem',
        color: yazildi ? 'var(--ink)' : 'var(--ink-soft)',
        lineHeight: 1.25,
        textAlign: 'center',
        maxWidth: '108px',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>{baslik}</span>
    </button>
  );
}

function TimelineKucukKart({ t, karakterId, tip, no, baslik }) {
  const tur = tip === 'sahne' ? t.timelineDugumSahne : t.timelineDugumBosluk;
  const link = `/antrenman/karakter/${karakterId}/el-yazmasi#${tip}-${no}`;
  return (
    <div style={{
      border: '1px solid var(--accent)',
      background: 'var(--bg-elevated)',
      padding: '1rem 1.2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1, minWidth: 0 }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.58rem', letterSpacing: '0.28em', color: 'var(--accent)', textTransform: 'uppercase' }}>{tur}</span>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--ink)', lineHeight: 1.4 }}>{baslik}</span>
      </div>
      <a href={link} style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>
        {t.buAnaGit}
      </a>
    </div>
  );
}

// ─── 4. BİRİKEN DOSYA ──────────────────────────────────────────────────────

function BirikenDosya({ t, karakter, yeniSema, akis, boslukYansimalari }) {
  // Boşluk yansımalarını oyun sırasıyla dizmek için: akış sırasına göre map
  // (akış zaten oyun sırasında). Yazılmamış olanları atla.
  const yazilmis = useMemo(() => {
    if (!yeniSema) return [];
    const yansimaMap = {};
    boslukYansimalari.forEach((b) => { yansimaMap[b.bosluk_id] = b.metin; });
    const sira = [];
    for (const d of akis) {
      if (d.tip !== 'bosluk') continue;
      const id = `elyazma-bosluk-${d.veri.no}`;
      const metin = yansimaMap[id];
      if (metin && metin.length > 0) {
        sira.push({ id, no: d.veri.no, baslik: d.veri.baslik, metin });
      }
    }
    return sira;
  }, [akis, boslukYansimalari, yeniSema]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <Etiket>{t.birikenDosyaEtiket}</Etiket>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink-soft)' }}>
          {t.birikenDosyaBaslikOnce}{karakter.ad}{t.birikenDosyaBaslikSonra}
        </span>
      </div>

      {yazilmis.length === 0 && (
        <BosKart>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink-soft)' }}>{t.birikenDosyaBos}</span>
        </BosKart>
      )}

      {yazilmis.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {yazilmis.map((y) => (
            <div key={y.id} style={{ borderLeft: '2px solid color-mix(in srgb, var(--onay-soft) 35%, transparent)', paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.58rem', letterSpacing: '0.25em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{y.baslik}</span>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink)', lineHeight: 1.7, margin: 0, whiteSpace: 'pre-wrap' }}>
                {y.metin}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── 5. SEN VE KARAKTER (ayna) ─────────────────────────────────────────────

function SenVeKarakter({ t, karakter, acikKapiKey, boslukYansimalari }) {
  const kapiSozluk = {
    bilissel: t.kapiBilissel,
    bedensel: t.kapiBedensel,
    duygusal: t.kapiDuygusal,
  };
  const kapiAdi = acikKapiKey ? kapiSozluk[acikKapiKey] : null;

  // "X boşluğa dokundun" — basit sayım (kapı kırılımı yapacak veri henüz yok).
  const dokunulanSayisi = boslukYansimalari.length;

  // Çerçeve = karakter.dogrular ilk 3 madde (kısa özet).
  const dogrular = (karakter.dogrular || []).slice(0, 3);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      <Etiket>{t.senVeKarakterEtiketOnce}{karakter.ad}</Etiket>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.7rem' }}>

        {/* Açık kapın */}
        <AynaSatir baslik={t.acikKapinEtiket}>
          {kapiAdi
            ? <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--ink)' }}>{kapiAdi}</span>
            : <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.92rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>{t.acikKapinBos}</span>}
        </AynaSatir>

        {/* Eğilim — basit sayım */}
        <AynaSatir baslik={`${t.egilimEtiketOnce}${karakter.ad}${t.egilimEtiketSonra}`}>
          {dokunulanSayisi > 0
            ? <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--ink)' }}>{dokunulanSayisi} {t.egilimSayim}</span>
            : <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.92rem', color: 'var(--ink-muted)' }}>{t.egilimBos}</span>}
        </AynaSatir>

        {/* Çerçeve */}
        <AynaSatir baslik={`${t.cerceveEtiketOnce}${karakter.ad}${t.cerceveEtiketSonra}`}>
          {dogrular.length > 0
            ? (
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {dogrular.map((d, i) => (
                  <li key={i} style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--ink-soft)', lineHeight: 1.5 }}>
                    {typeof d === 'string' ? d : d.madde}
                  </li>
                ))}
              </ul>
            )
            : <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.92rem', color: 'var(--ink-muted)' }}>{t.cerceveBos}</span>}
        </AynaSatir>

      </div>
    </div>
  );
}

function AynaSatir({ baslik, children }) {
  return (
    <div style={{ border: '1px solid var(--rule)', padding: '1rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
      <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.58rem', letterSpacing: '0.28em', color: 'var(--accent)', textTransform: 'uppercase' }}>{baslik}</span>
      {children}
    </div>
  );
}

// ─── 6. DESENLER (yer tutucu) ──────────────────────────────────────────────

function Desenler({ t }) {
  return (
    <div style={{ border: '1px dashed var(--rule)', padding: '1.1rem 1.3rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', opacity: 0.85 }}>
      <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.58rem', letterSpacing: '0.28em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{t.desenlerEtiket}</span>
      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>{t.desenlerMetin}</p>
    </div>
  );
}

// ─── PAYLAŞIK PARÇALAR ─────────────────────────────────────────────────────

function Etiket({ children }) {
  return (
    <span style={{
      fontFamily: 'Jost, sans-serif',
      fontWeight: 300,
      fontSize: '0.6rem',
      letterSpacing: '0.32em',
      color: 'var(--accent)',
      textTransform: 'uppercase',
    }}>{children}</span>
  );
}

function BosKart({ children }) {
  return (
    <div style={{ border: '1px solid var(--rule)', padding: '1.1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>{children}</div>
  );
}

function SatirLink({ href, children }) {
  return (
    <a href={href} style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', textDecoration: 'none' }}>
      {children}
    </a>
  );
}

function EmptyKalibrasyon({ t }) {
  return (
    <div style={{ border: '1px solid var(--rule)', padding: '2rem 1.6rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
      <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.32em', color: 'var(--accent)', textTransform: 'uppercase' }}>{t.emptyKalibrasyonEtiket}</span>
      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink-soft)', lineHeight: 1.65, margin: 0, maxWidth: '440px' }}>
        {t.emptyKalibrasyonMetin}
      </p>
      <a
        href="/kalibrasyon"
        style={{ marginTop: '0.3rem', padding: '0.8rem 1.8rem', backgroundColor: 'var(--accent)', color: 'var(--bg-base)', textDecoration: 'none', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', transition: 'all 0.25s ease' }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-hover)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; }}
      >
        {t.emptyKalibrasyonCta}
      </a>
    </div>
  );
}
