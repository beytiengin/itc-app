// app/batarya/page.js — Modül I · ITC Actor Assessment Battery v0.5 (Karar 64/64a)
// PARALEL AKIŞ: eski /kalibrasyon canlı kalır; bu route feature-flag arkasında
// (lib/flags.js bataryaAcik — env NEXT_PUBLIC_BATARYA=1 veya ?batarya=1) ve
// oturum korumalı (middleware Karar 33 ile no-op olduğundan koruma sayfa içinde).
//
// v0.5 AKIŞ (kaynak Module Map):
//   CORE: Consent → Intake → Type Lens (M1) → APS (M2) → Emotional (M3)
//   OPSİYONEL (core sonrası, sıra serbest): Access (M4) · Flow (M5, Form A bir kez
//   + Form B tekrarlanabilir) · Regulation (M6) · Mindfulness (M7) · Body (M8,
//   yalnız Part 1 self-report) · Entry & Exit (M9)
//
// KURALLAR (Karar 64 + batarya.js başlığı):
//   - İçerik verbatim EN render edilir; girişte "currently available in English" notu.
//   - Gizli alanlar ASLA render edilmez: teamNotes · adminNote · scoringNotes ·
//     kaynakKapsami · about · kapsamNotu · kapanisNotu · whyThisOrder ·
//     retakeCadence · teamNoteBeyti.
//   - adminNote sunum kuralları UYGULANIR: Likert bölümleri KARIŞIK sırada,
//     alan/sistem/boyut/eksen başlıkları OLMADAN (deterministik seed — tüm
//     katılımcılar aynı sırayı görür). Type Lens'te A/B tarafları madde başına
//     rastgele yüz çevirir (yanıt örüntüsü harf kolonuna eşlenemesin).
//   - Regulation Part 1 + Part 2 TEK havuzda karışık uygulanır (Part 2 adminNote).
//   - Ham yanıtlar `yanitlar`a (kaynak), türetimler `skorlar`a (batarya-kaydet).
//   - Sorular atlanabilir (voluntary participation) — yalnız consent kutuları
//     + imza zorunlu.
//   - Emotional Part 4 opsiyonel ve puanlanmaz. Entry & Exit Part 3-5 puanlanmaz;
//     Part 4 sonrası standingOffer HER ZAMAN gösterilir; toplu skor üretilmez.
//   - Type Lens BİR KEZ alınır (scoringNotes) — tamamlandıysa tekrar sunulmaz.

'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { bataryaAcik } from '@/lib/flags';
import { supabase } from '../lib/supabase';
import { batarya } from '../../data/kalibrasyon/batarya';
import {
  bataryaSonucKaydet, bataryaOnamKaydet, bataryaDurumGetir, modulBul,
  typeLensSkorla, apsSkorla, emotionalSkorla, accessSkorla,
  flowASkorla, flowBSkorla, regulationSkorla, mindfulnessSkorla,
  bodySkorla, entryExitSkorla, typeLensSonucGetir,
} from '../lib/batarya-kaydet';
import { tipRaporlari } from '../../data/kalibrasyon/tip-raporlari';

const TON = 'var(--accent)';

/* ─── Deterministik karıştırma (tüm katılımcılar aynı karışık sırayı görür) ── */
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function karistir(dizi, seed) {
  const r = mulberry32(seed);
  const a = [...dizi];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Karıştırma seed'leri — SABİT (pilot verisi sıra-tutarlılığı; asla değiştirme).
// aps=64001 ve emotional=64003 v1'den korunur; flow formA=64004 korunur.
const SEED = {
  aps: 64001,
  emotional_p1: 64003,
  flow_formA: 64004,
  access_p1: 65001,
  access_p2: 65002,
  access_p4: 65003,
  regulation: 65006,
  mindfulness: 65007,
  body: 65008,
  entry_exit_p1: 65009,
  type_lens_sira: 65100,
  type_lens_yuz: 65100, // + madde no → A/B taraf çevirme
};

/* ─── Akış tanımı (v0.5 core path) ───────────────────────────────────────── */
const CEKIRDEK = [
  { key: 'consent', etiket: 'Consent' },
  { key: 'intake', etiket: 'Intake' },
  { key: 'type_lens', etiket: 'Module 1' },
  { key: 'aps', etiket: 'Module 2' },
  { key: 'emotional', etiket: 'Module 3' },
];

// Opsiyonel modüller — hub kartları (flow: Form A bir kez, Form B tekrarlanabilir).
const OPSIYONEL = [
  { slug: 'access', yazimKey: 'access' },
  { slug: 'flow', yazimKey: 'flow_formA' },
  { slug: 'regulation', yazimKey: 'regulation' },
  { slug: 'mindfulness', yazimKey: 'mindfulness' },
  { slug: 'body', yazimKey: 'body' },
  { slug: 'entry_exit', yazimKey: 'entry_exit' },
];

export default function BataryaSayfasi() {
  const router = useRouter();
  const [flagOk, setFlagOk] = useState(null);
  const [oturumOk, setOturumOk] = useState(null);
  const [durum, setDurum] = useState(null);

  useEffect(() => { setFlagOk(bataryaAcik()); }, []);
  useEffect(() => {
    if (flagOk === false) { router.replace('/'); return; }
    if (flagOk !== true) return;
    (async () => {
      const { data } = await supabase.auth.getUser();
      const varMi = !!data?.user?.id;
      setOturumOk(varMi);
      if (varMi) setDurum(await bataryaDurumGetir());
    })();
  }, [flagOk, router]);

  if (flagOk !== true) return null;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)' }}>
      <section style={{ padding: '2.5rem 1.4rem 5rem', maxWidth: 720, margin: '0 auto' }}>
        <header style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '2rem' }}>
          <span style={eyebrowStil}>Module I · Assessment</span>
          <h1 style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 2.7rem)', margin: 0, lineHeight: 1.12 }}>
            {batarya.meta.baslik}
          </h1>
          <span style={{ ...altYaziStil, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.68rem' }}>
            {batarya.meta.altBaslik}
          </span>
          <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.9rem', color: TON, margin: '0.3rem 0 0' }}>
            {batarya.meta.motto}
          </p>
          <p style={{ ...altYaziStil, fontSize: '0.8rem' }}>
            This assessment is currently available in English.
          </p>
        </header>

        {oturumOk === null ? (
          <p style={altYaziStil}>Loading…</p>
        ) : !oturumOk ? (
          <GirisGerekli />
        ) : !durum ? (
          <p style={altYaziStil}>Loading…</p>
        ) : (
          <BataryaAkis durum={durum} durumYenile={async () => setDurum(await bataryaDurumGetir())} />
        )}
      </section>
    </main>
  );
}

function GirisGerekli() {
  return (
    <div style={kutuStil}>
      <p style={govdeStil}>
        Please sign in to take the assessment — your answers are stored securely in your own account.
      </p>
      <a href="/giris" style={{ ...ctaStil, textDecoration: 'none', display: 'inline-block' }}>Sign in →</a>
    </div>
  );
}

/* ─── Ana akış ───────────────────────────────────────────────────────────── */
function BataryaAkis({ durum, durumYenile }) {
  // Kaldığı yerden devam: consent yoksa consent; sonra ilk eksik core modül; sonra hub.
  const ilkGorunum = useMemo(() => {
    if (!durum.onamVar) return 'consent';
    for (const a of CEKIRDEK.slice(1)) if (!durum.moduller.has(a.key)) return a.key;
    return 'hub';
  }, [durum]);

  const [gorunum, setGorunum] = useState(ilkGorunum);

  const coreSiradaki = () => {
    const i = CEKIRDEK.findIndex((a) => a.key === gorunum);
    const kalan = CEKIRDEK.slice(i + 1).find((a) => a.key !== 'consent' && !durum.moduller.has(a.key));
    setGorunum(kalan ? kalan.key : 'hub');
  };

  const coreTamamla = async () => { await durumYenile(); coreSiradaki(); };
  const hubaDon = async () => { await durumYenile(); setGorunum('hub'); };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
      <IlerlemeSeridi gorunum={gorunum} durum={durum} />
      {gorunum === 'consent' && <ConsentAdimi onTamam={coreTamamla} />}
      {gorunum === 'intake' && <IntakeAdimi onTamam={coreTamamla} />}
      {gorunum === 'type_lens' && <TypeLensAdimi onTamam={coreTamamla} />}
      {gorunum === 'aps' && <KarisikLikertAdimi slug="aps" onTamam={coreTamamla} />}
      {gorunum === 'emotional' && <EmotionalAdimi onTamam={coreTamamla} />}
      {gorunum === 'hub' && <OpsiyonelHub durum={durum} onSec={setGorunum} />}
      {gorunum === 'tip_raporu' && <TipRaporu onGeri={() => setGorunum('hub')} />}
      {gorunum === 'access' && <AccessAdimi onTamam={hubaDon} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'flow' && <KarisikLikertAdimi slug="flow" onTamam={hubaDon} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'flow_formB' && <FormBAdimi onTamam={hubaDon} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'regulation' && <KarisikLikertAdimi slug="regulation" onTamam={hubaDon} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'mindfulness' && <KarisikLikertAdimi slug="mindfulness" onTamam={hubaDon} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'body' && <KarisikLikertAdimi slug="body" onTamam={hubaDon} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'entry_exit' && <EntryExitAdimi onTamam={hubaDon} onVazgec={() => setGorunum('hub')} />}
    </div>
  );
}

function IlerlemeSeridi({ gorunum, durum }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
      {CEKIRDEK.map((a) => {
        const bitti = a.key === 'consent' ? durum.onamVar : durum.moduller.has(a.key);
        const aktif = a.key === gorunum;
        return (
          <span key={a.key} style={{
            fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.6rem',
            letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0.35rem 0.7rem',
            border: `1px solid ${aktif ? TON : 'var(--rule)'}`,
            color: bitti ? 'var(--onay-soft)' : aktif ? TON : 'var(--ink-muted)',
          }}>
            {bitti ? '✓ ' : ''}{a.etiket}
          </span>
        );
      })}
    </div>
  );
}

/* ─── Consent ────────────────────────────────────────────────────────────── */
function ConsentAdimi({ onTamam }) {
  const c = batarya.intake.consent;
  const [kutular, setKutular] = useState({});
  const [imza, setImza] = useState('');
  const [hata, setHata] = useState('');
  const [gonderiliyor, setGonderiliyor] = useState(false);

  const hepsi = c.onayKutulari.every((_, i) => kutular[i]) && imza.trim().length > 0;

  const gonder = async () => {
    if (!hepsi) { setHata('Please confirm all statements and add your name to continue.'); return; }
    setGonderiliyor(true); setHata('');
    try {
      const kutuDurumlari = {};
      c.onayKutulari.forEach((metin, i) => { kutuDurumlari[metin] = !!kutular[i]; });
      await bataryaOnamKaydet({ kutuDurumlari, imzaAd: imza.trim() });
      await onTamam();
    } catch (e) { setHata('Could not save. Please try again.'); setGonderiliyor(false); }
  };

  return (
    <BolumKabuk baslik={c.baslik} giris={c.giris}>
      {c.bolumler.map((b) => (
        <div key={b.baslik} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          <span style={{ ...eyebrowStil, color: 'var(--ink-muted)' }}>{b.baslik}</span>
          <p style={govdeStil}>{b.metin}</p>
        </div>
      ))}
      <div style={{ ...kutuStil, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {c.onayKutulari.map((metin, i) => (
          <label key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', cursor: 'pointer' }}>
            <input type="checkbox" checked={!!kutular[i]}
              onChange={(e) => setKutular((p) => ({ ...p, [i]: e.target.checked }))}
              style={{ marginTop: '0.25rem', accentColor: TON }} />
            <span style={{ ...govdeStil, fontSize: '0.85rem' }}>{metin}</span>
          </label>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginTop: '0.4rem' }}>
          <span style={{ ...eyebrowStil, color: 'var(--ink-muted)' }}>{c.imzaAlanlari[0]}</span>
          <input value={imza} onChange={(e) => setImza(e.target.value)} style={girdiStil} />
          <span style={{ ...altYaziStil, fontSize: '0.72rem' }}>
            {c.imzaAlanlari[1]} recorded automatically on submission.
          </span>
        </div>
      </div>
      <IleriButon onClick={gonder} disabled={gonderiliyor} etiket={gonderiliyor ? 'Saving…' : 'I consent — begin'} />
      {hata && <HataYazi metin={hata} />}
    </BolumKabuk>
  );
}

/* ─── Intake (Section A) ─────────────────────────────────────────────────── */
function IntakeAdimi({ onTamam }) {
  const a = batarya.intake.sectionA;
  const [yanitlar, setYanitlar] = useState({});
  const [hata, setHata] = useState('');
  const [gonderiliyor, setGonderiliyor] = useState(false);

  const yaz = (no, deger) => setYanitlar((p) => ({ ...p, [no]: deger }));

  const gonder = async () => {
    setGonderiliyor(true); setHata('');
    try {
      await bataryaSonucKaydet('intake', yanitlar, null);
      await onTamam();
    } catch (e) { setHata('Could not save. Please try again.'); setGonderiliyor(false); }
  };

  return (
    <BolumKabuk baslik={a.baslik} giris={a.giris}>
      {a.gruplar.map((grup) => (
        <div key={grup.baslik} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={araBaslikStil}>{grup.baslik}</h3>
          {grup.not && <p style={{ ...altYaziStil, fontStyle: 'italic' }}>{grup.not}</p>}
          {grup.sorular.map((soru) => (
            <IntakeSoru key={soru.no} soru={soru} deger={yanitlar[soru.no]} onYaz={(v) => yaz(soru.no, v)} />
          ))}
        </div>
      ))}
      <IleriButon onClick={gonder} disabled={gonderiliyor} etiket={gonderiliyor ? 'Saving…' : 'Save & continue'} />
      {hata && <HataYazi metin={hata} />}
    </BolumKabuk>
  );
}

function IntakeSoru({ soru, deger, onYaz }) {
  const etiket = (
    <span style={{ ...govdeStil, fontWeight: 400 }}>{soru.metin} {soru.not && <em style={{ color: 'var(--ink-muted)' }}>{soru.not}</em>}</span>
  );
  if (soru.tip === 'tekSecim') {
    return (
      <div style={soruKutuStil}>
        {etiket}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {soru.secenekler.map((s) => (
            <label key={s} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', cursor: 'pointer' }}>
              <input type="radio" name={`q${soru.no}`} checked={deger === s} onChange={() => onYaz(s)} style={{ marginTop: '0.2rem', accentColor: TON }} />
              <span style={{ ...govdeStil, fontSize: '0.85rem' }}>{s}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }
  if (soru.tip === 'cokluSecim') {
    const secili = Array.isArray(deger) ? deger : [];
    const degistir = (s) => onYaz(secili.includes(s) ? secili.filter((x) => x !== s) : [...secili, s]);
    return (
      <div style={soruKutuStil}>
        {etiket}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {soru.secenekler.map((s) => (
            <label key={s} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', cursor: 'pointer' }}>
              <input type="checkbox" checked={secili.includes(s)} onChange={() => degistir(s)} style={{ marginTop: '0.2rem', accentColor: TON }} />
              <span style={{ ...govdeStil, fontSize: '0.85rem' }}>{s}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }
  if (soru.tip === 'acikUclu' || soru.tip === 'tablo') {
    const yerTutucu = soru.tip === 'tablo' ? `One per line — ${soru.sutunlar.join(' · ')}` : 'Your answer (up to 500 words)…';
    return (
      <div style={soruKutuStil}>
        {etiket}
        <textarea rows={soru.tip === 'tablo' ? 3 : 4} value={deger || ''} onChange={(e) => onYaz(e.target.value)}
          placeholder={yerTutucu} style={{ ...girdiStil, resize: 'vertical', lineHeight: 1.6 }} />
      </div>
    );
  }
  // metin / liste / tarih
  return (
    <div style={soruKutuStil}>
      {etiket}
      <input type={soru.tip === 'tarih' ? 'date' : 'text'} value={deger || ''} onChange={(e) => onYaz(e.target.value)} style={girdiStil} />
    </div>
  );
}

/* ─── Module 1 — Type Lens (44 zorunlu-seçim) ────────────────────────────── */
// adminNote kuralı: maddeler tamamen karışık, eksen başlıkları YOK, A/B tarafları
// madde başına yüz çevirir (deterministik). Yanıt DATA tarafına ('a'/'b') kaydedilir
// — görünüm çevirmesi puanlamayı etkilemez. scoringNotes: bir kez alınır; marjlar
// oyuncuya gösterilmez (Karar 31 — sonuç "hipotez", sınıflandırma değil).
function TypeLensAdimi({ onTamam }) {
  const tl = modulBul('type_lens');
  const maddeler = useMemo(() => {
    const hepsi = tl.eksenler.flatMap((e) => e.maddeler);
    return karistir(hepsi, SEED.type_lens_sira).map((m) => ({
      ...m,
      cevrik: mulberry32(SEED.type_lens_yuz + m.no)() < 0.5,
    }));
  }, []);
  const [yanitlar, setYanitlar] = useState({});
  const [hata, setHata] = useState('');
  const [gonderiliyor, setGonderiliyor] = useState(false);

  const gonder = async () => {
    setGonderiliyor(true); setHata('');
    try {
      await bataryaSonucKaydet('type_lens', yanitlar, typeLensSkorla(yanitlar));
      await onTamam();
    } catch (e) { setHata('Could not save. Please try again.'); setGonderiliyor(false); }
  };

  return (
    <BolumKabuk baslik={`${tl.baslik}${tl.ustBaslik ? ' · ' + tl.ustBaslik : ''}`} giris={tl.giris}>
      {tl.vurgu && (
        <p style={{ ...govdeStil, fontFamily: 'var(--font-display), serif', fontStyle: 'italic', color: TON }}>
          {tl.vurgu}
        </p>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {maddeler.map((m, i) => (
          <TypeLensMadde key={m.no} sira={i + 1} madde={m} secim={yanitlar[m.no]}
            onSec={(taraf) => setYanitlar((p) => ({ ...p, [m.no]: taraf }))} />
        ))}
      </div>
      <CevapSayaci cevaplanan={Object.keys(yanitlar).length} toplam={maddeler.length} />
      <IleriButon onClick={gonder} disabled={gonderiliyor} etiket={gonderiliyor ? 'Saving…' : 'Save & continue'} />
      {hata && <HataYazi metin={hata} />}
    </BolumKabuk>
  );
}

function TypeLensMadde({ sira, madde, secim, onSec }) {
  // cevrik ise B önce gösterilir; kayıt her zaman data tarafıyla ('a'/'b') yapılır.
  const secenekler = madde.cevrik
    ? [{ taraf: 'b', metin: madde.b }, { taraf: 'a', metin: madde.a }]
    : [{ taraf: 'a', metin: madde.a }, { taraf: 'b', metin: madde.b }];
  return (
    <div style={{ ...soruKutuStil, gap: '0.55rem' }}>
      <span style={{ ...govdeStil, fontSize: '0.92rem' }}>
        <span style={{ color: 'var(--ink-muted)', marginRight: '0.5rem' }}>{sira}.</span>
        {madde.metin}
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {secenekler.map((s) => {
          const secili = secim === s.taraf;
          return (
            <button key={s.taraf} onClick={() => onSec(secili ? undefined : s.taraf)} style={{
              textAlign: 'left', padding: '0.6rem 0.8rem', cursor: 'pointer',
              background: secili ? 'var(--accent-bg)' : 'var(--bg-base)',
              border: `1px solid ${secili ? TON : 'var(--rule)'}`,
              transition: 'all 0.2s ease',
            }}>
              <span style={{ ...govdeStil, fontSize: '0.86rem', color: secili ? 'var(--ink)' : 'var(--ink-soft)' }}>
                {s.metin}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Karışık-sıra Likert modülleri (APS · Flow A · Regulation · Mindfulness · Body) ── */
// adminNote kuralı: maddeler karışık sırada, alan/boyut/faset başlıkları OLMADAN.
const LIKERT_MODULLER = {
  aps: {
    yazimKey: 'aps',
    baslik: (m) => m.baslik,
    giris: (m) => m.giris,
    olcek: (m) => m.olcek,
    maddeler: (m) => karistir(m.alanlar.flatMap((a) => a.maddeler), SEED.aps),
    skorla: apsSkorla,
  },
  flow: {
    yazimKey: 'flow_formA',
    baslik: (m) => `${m.baslik} · ${m.formA.baslik}`,
    giris: (m) => `${m.giris}\n\n${m.formA.giris}`,
    olcek: (m) => m.formA.olcek,
    maddeler: (m) => karistir(m.formA.boyutlar.flatMap((b) => b.maddeler), SEED.flow_formA),
    skorla: flowASkorla,
  },
  // Regulation: Part 1 + Part 2 TEK havuz (Part 2 adminNote: "Administered mixed with Part 1").
  regulation: {
    yazimKey: 'regulation',
    baslik: (m) => `${m.baslik}${m.ustBaslik ? ' · ' + m.ustBaslik : ''}`,
    giris: (m) => m.giris,
    olcek: (m) => m.part1.olcek,
    maddeler: (m) => karistir(
      [...m.part1.fasetler, ...m.part2.fasetler].flatMap((f) => f.maddeler),
      SEED.regulation
    ),
    skorla: regulationSkorla,
  },
  mindfulness: {
    yazimKey: 'mindfulness',
    baslik: (m) => `${m.baslik}${m.ustBaslik ? ' · ' + m.ustBaslik : ''}`,
    giris: (m) => m.giris,
    olcek: (m) => m.olcek,
    maddeler: (m) => karistir(m.fasetler.flatMap((f) => f.maddeler), SEED.mindfulness),
    skorla: mindfulnessSkorla,
  },
  // Body: yalnız Part 1 self-report app'te (video/atölye katmanları ayrı doküman + ayrı onam).
  body: {
    yazimKey: 'body',
    baslik: (m) => `${m.baslik} · ${m.part1.baslik}`,
    giris: (m) => m.part1.not || '',
    olcek: (m) => m.part1.olcek,
    maddeler: (m) => karistir(m.part1.fasetler.flatMap((f) => f.maddeler), SEED.body),
    skorla: bodySkorla,
  },
};

function KarisikLikertAdimi({ slug, onTamam, onVazgec }) {
  const modul = modulBul(slug);
  const tanim = LIKERT_MODULLER[slug];
  const maddeler = useMemo(() => tanim.maddeler(modul), [slug]);
  const [yanitlar, setYanitlar] = useState({});
  const [hata, setHata] = useState('');
  const [gonderiliyor, setGonderiliyor] = useState(false);

  const gonder = async () => {
    setGonderiliyor(true); setHata('');
    try {
      await bataryaSonucKaydet(tanim.yazimKey, yanitlar, tanim.skorla(yanitlar));
      await onTamam();
    } catch (e) { setHata('Could not save. Please try again.'); setGonderiliyor(false); }
  };

  return (
    <BolumKabuk baslik={tanim.baslik(modul)} giris={tanim.giris(modul)}>
      <OlcekLegend olcek={tanim.olcek(modul)} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {maddeler.map((m, i) => (
          <LikertSatir key={m.no} sira={i + 1} metin={m.metin} deger={yanitlar[m.no]}
            onSec={(v) => setYanitlar((p) => ({ ...p, [m.no]: v }))} />
        ))}
      </div>
      <CevapSayaci cevaplanan={Object.keys(yanitlar).length} toplam={maddeler.length} />
      <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
        <IleriButon onClick={gonder} disabled={gonderiliyor} etiket={gonderiliyor ? 'Saving…' : 'Save & continue'} />
        {onVazgec && <button onClick={onVazgec} style={ikincilButonStil}>Back</button>}
      </div>
      {hata && <HataYazi metin={hata} />}
    </BolumKabuk>
  );
}

/* ─── Module 3 — Emotional Profile (Part 1 karışık; Part 4 opsiyonel) ─────── */
function EmotionalAdimi({ onTamam }) {
  const em = modulBul('emotional');
  const p1Maddeler = useMemo(
    () => karistir(em.part1.sistemler.flatMap((s) => s.maddeler), SEED.emotional_p1),
    []
  );
  const [yanitlar, setYanitlar] = useState({});
  const [konfor, setKonfor] = useState({});      // part4: { duygu: {hissetme, gosterme} }
  const [p4Atla, setP4Atla] = useState(false);
  const [hata, setHata] = useState('');
  const [gonderiliyor, setGonderiliyor] = useState(false);

  const likertYaz = (no, v) => setYanitlar((p) => ({ ...p, [no]: v }));

  const gonder = async () => {
    setGonderiliyor(true); setHata('');
    try {
      // part4 opsiyonel + PUANLANMAZ — yalnız ham; atlandıysa hiç yazılmaz.
      const ham = { ...yanitlar, ...(p4Atla ? {} : { konforEnvanteri: konfor }) };
      await bataryaSonucKaydet('emotional', ham, emotionalSkorla(yanitlar));
      await onTamam();
    } catch (e) { setHata('Could not save. Please try again.'); setGonderiliyor(false); }
  };

  return (
    <BolumKabuk baslik={`${em.baslik}${em.ustBaslik ? ' · ' + em.ustBaslik : ''}`} giris={em.giris}>
      {/* Part 1 — karışık sıra, sistem başlıkları YOK (adminNote kuralı) */}
      <h3 style={araBaslikStil}>{em.part1.baslik}</h3>
      <p style={govdeStil}>{em.part1.giris}</p>
      <OlcekLegend olcek={em.part1.olcek} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {p1Maddeler.map((m, i) => (
          <LikertSatir key={m.no} sira={i + 1} metin={m.metin} deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
        ))}
      </div>

      <h3 style={araBaslikStil}>{em.part2.baslik}</h3>
      <p style={govdeStil}>{em.part2.giris}</p>
      <OlcekLegend olcek={em.part2.olcek} />
      {em.part2.maddeler.map((m) => (
        <LikertSatir key={m.no} metin={m.metin} deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
      ))}

      <h3 style={araBaslikStil}>{em.part3.baslik}</h3>
      <p style={govdeStil}>{em.part3.giris}</p>
      <OlcekLegend olcek={em.part3.olcek} />
      {em.part3.maddeler.map((m) => (
        <LikertSatir key={m.no} metin={m.metin} deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
      ))}

      {/* Part 4 — opsiyonel, profil skoruna girmez */}
      <h3 style={araBaslikStil}>{em.part4.baslik}</h3>
      <p style={govdeStil}>{em.part4.giris}</p>
      {!p4Atla ? (
        <>
          <button onClick={() => setP4Atla(true)} style={{ ...ikincilButonStil, alignSelf: 'flex-start' }}>
            Skip this part
          </button>
          <OlcekLegend baslik={em.part4.olcekBaslik} olcek={em.part4.olcek} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {em.part4.duygular.map((duygu) => (
              <KonforSatiri key={duygu} duygu={duygu} sutunlar={em.part4.sutunlar}
                deger={konfor[duygu] || {}}
                onYaz={(alan, v) => setKonfor((p) => ({ ...p, [duygu]: { ...(p[duygu] || {}), [alan]: v } }))} />
            ))}
          </div>
        </>
      ) : (
        <p style={{ ...altYaziStil, fontStyle: 'italic' }}>
          Skipped — you can take this part another time.{' '}
          <button onClick={() => setP4Atla(false)} style={{ ...baglantiButonStil }}>Undo</button>
        </p>
      )}

      <IleriButon onClick={gonder} disabled={gonderiliyor} etiket={gonderiliyor ? 'Saving…' : 'Save & continue'} />
      {hata && <HataYazi metin={hata} />}
    </BolumKabuk>
  );
}

function KonforSatiri({ duygu, sutunlar, deger, onYaz }) {
  const alanlar = [
    { key: 'hissetme', etiket: sutunlar[0] },
    { key: 'gosterme', etiket: sutunlar[1] },
  ];
  return (
    <div style={{ ...soruKutuStil, gap: '0.5rem' }}>
      <span style={{ ...govdeStil, fontWeight: 400 }}>{duygu}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        {alanlar.map((alan) => (
          <div key={alan.key} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{ ...altYaziStil, fontSize: '0.7rem', minWidth: 140 }}>{alan.etiket}</span>
            <BesliSecim deger={deger[alan.key]} onSec={(v) => onYaz(alan.key, v)} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Module 4 — Access Channel (4 part) ─────────────────────────────────── */
// Part 1: kanal başlıkları GİZLİ + karışık sıra (global adminNote kuralı —
// Likert profil bölümleri başlıksız/karışık). Part 3 sıralamaları ham kalır.
function AccessAdimi({ onTamam, onVazgec }) {
  const ac = modulBul('access');
  const p1Maddeler = useMemo(
    () => karistir(ac.part1.kanallar.flatMap((k) => k.maddeler), SEED.access_p1),
    []
  );
  const p2Maddeler = useMemo(() => karistir(ac.part2.maddeler, SEED.access_p2), []);
  const p4Maddeler = useMemo(() => karistir(ac.part4.maddeler, SEED.access_p4), []);
  const [yanitlar, setYanitlar] = useState({});
  const [siralamalar, setSiralamalar] = useState({});
  const [hata, setHata] = useState('');
  const [gonderiliyor, setGonderiliyor] = useState(false);

  const likertYaz = (no, v) => setYanitlar((p) => ({ ...p, [no]: v }));

  const gonder = async () => {
    setGonderiliyor(true); setHata('');
    try {
      const ham = { ...yanitlar, siralamalar };
      await bataryaSonucKaydet('access', ham, accessSkorla(yanitlar));
      await onTamam();
    } catch (e) { setHata('Could not save. Please try again.'); setGonderiliyor(false); }
  };

  return (
    <BolumKabuk baslik={`${ac.baslik}${ac.ustBaslik ? ' · ' + ac.ustBaslik : ''}`} giris={ac.giris}>
      <h3 style={araBaslikStil}>{ac.part1.baslik}</h3>
      <p style={govdeStil}>{ac.part1.giris}</p>
      <OlcekLegend olcek={ac.part1.olcek} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {p1Maddeler.map((m, i) => (
          <LikertSatir key={m.no} sira={i + 1} metin={m.metin} deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
        ))}
      </div>

      <h3 style={araBaslikStil}>{ac.part2.baslik}</h3>
      <p style={govdeStil}>{ac.part2.giris}</p>
      <OlcekLegend olcek={ac.part2.olcek} />
      {p2Maddeler.map((m) => (
        <LikertSatir key={m.no} metin={m.metin} deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
      ))}

      <h3 style={araBaslikStil}>{ac.part3.baslik}</h3>
      <p style={govdeStil}>{ac.part3.giris}</p>
      {ac.part3.siralamaSorulari.map((soru) => (
        <SiralamaSorusu key={soru.no} soru={soru} secim={siralamalar[soru.no] || []}
          onDegis={(dizi) => setSiralamalar((p) => ({ ...p, [soru.no]: dizi }))} />
      ))}

      <h3 style={araBaslikStil}>{ac.part4.baslik}</h3>
      <p style={govdeStil}>{ac.part4.giris}</p>
      <OlcekLegend olcek={ac.part4.olcek} />
      {p4Maddeler.map((m) => (
        <LikertSatir key={m.no} metin={m.metin} deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
      ))}

      <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
        <IleriButon onClick={gonder} disabled={gonderiliyor} etiket={gonderiliyor ? 'Saving…' : 'Save & continue'} />
        {onVazgec && <button onClick={onVazgec} style={ikincilButonStil}>Back</button>}
      </div>
      {hata && <HataYazi metin={hata} />}
    </BolumKabuk>
  );
}

// Tıkla-sırala: tıklanan seçenek sıradaki numarayı alır; tekrar tıklanınca çıkar.
function SiralamaSorusu({ soru, secim, onDegis }) {
  const tikla = (s) => {
    if (secim.includes(s)) onDegis(secim.filter((x) => x !== s));
    else onDegis([...secim, s]);
  };
  return (
    <div style={soruKutuStil}>
      <span style={{ ...govdeStil, fontWeight: 400 }}>{soru.metin}</span>
      <span style={{ ...altYaziStil, fontSize: '0.72rem' }}>Tap in order — 1 first. Tap again to remove.</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        {soru.secenekler.map((s) => {
          const sira = secim.indexOf(s);
          return (
            <button key={s} onClick={() => tikla(s)} style={{
              display: 'flex', gap: '0.7rem', alignItems: 'center', textAlign: 'left',
              background: sira >= 0 ? 'var(--accent-bg)' : 'var(--bg-elevated)',
              border: `1px solid ${sira >= 0 ? TON : 'var(--rule)'}`,
              padding: '0.55rem 0.75rem', cursor: 'pointer', transition: 'all 0.2s ease',
            }}>
              <span style={{
                width: 22, height: 22, minWidth: 22, borderRadius: '50%',
                border: `1px solid ${sira >= 0 ? TON : 'var(--ink-muted)'}`,
                backgroundColor: sira >= 0 ? TON : 'transparent',
                color: sira >= 0 ? 'var(--bg-base)' : 'var(--ink-muted)',
                fontFamily: 'var(--font-body), sans-serif', fontSize: '0.7rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{sira >= 0 ? sira + 1 : '·'}</span>
              <span style={{ ...govdeStil, fontSize: '0.85rem' }}>{s}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Module 5 — Flow Form B (tekrarlanabilir) ───────────────────────────── */
function FormBAdimi({ onTamam, onVazgec }) {
  const fb = modulBul('flow').formB;
  const [performans, setPerformans] = useState('');
  const [tarih, setTarih] = useState('');
  const [yanitlar, setYanitlar] = useState({});
  const [not, setNot] = useState('');
  const [hata, setHata] = useState('');
  const [gonderiliyor, setGonderiliyor] = useState(false);

  const gonder = async () => {
    setGonderiliyor(true); setHata('');
    try {
      const ham = { performans, tarih, ...yanitlar, acikNot: not };
      await bataryaSonucKaydet('flow_formB', ham, flowBSkorla(yanitlar));
      await onTamam();
    } catch (e) { setHata('Could not save. Please try again.'); setGonderiliyor(false); }
  };

  return (
    <BolumKabuk baslik={fb.baslik} giris={fb.giris}>
      <div style={soruKutuStil}>
        <span style={{ ...govdeStil, fontWeight: 400 }}>{fb.onSorular[0].metin}</span>
        <input value={performans} onChange={(e) => setPerformans(e.target.value)} style={girdiStil} />
        <span style={{ ...govdeStil, fontWeight: 400 }}>{fb.onSorular[1].metin}</span>
        <input type="date" value={tarih} onChange={(e) => setTarih(e.target.value)} style={girdiStil} />
      </div>
      <p style={govdeStil}>{fb.yonerge}</p>
      <OlcekLegend olcek={fb.olcek} />
      {fb.maddeler.map((m) => (
        <LikertSatir key={m.no} metin={m.metin} deger={yanitlar[m.no]}
          onSec={(v) => setYanitlar((p) => ({ ...p, [m.no]: v }))} />
      ))}
      <div style={soruKutuStil}>
        <span style={{ ...govdeStil, fontWeight: 400 }}>{fb.acikUclu}</span>
        <input value={not} onChange={(e) => setNot(e.target.value)} style={girdiStil} />
      </div>
      <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
        <IleriButon onClick={gonder} disabled={gonderiliyor} etiket={gonderiliyor ? 'Saving…' : 'Save this performance'} />
        <button onClick={onVazgec} style={ikincilButonStil}>Back</button>
      </div>
      {hata && <HataYazi metin={hata} />}
    </BolumKabuk>
  );
}

/* ─── Module 9 — Entry & Exit, Recovery, Sustainability ──────────────────── */
// Part 1-2 puanlanır (hafif); Part 3-4-5 YALNIZ ham. Part 4 sonrası standingOffer
// HER ZAMAN gösterilir (App Safety Rules — yanıtlardan bağımsız). Yanıtlar İÇ İÇE
// (part1 ve part4 madde no'ları çakışır). Toplu "iyilik skoru" üretilmez.
function EntryExitAdimi({ onTamam, onVazgec }) {
  const ee = modulBul('entry_exit');
  const p1Maddeler = useMemo(
    () => karistir(ee.part1.fasetler.flatMap((f) => f.maddeler), SEED.entry_exit_p1),
    []
  );
  const [yanitlar, setYanitlar] = useState({ part1: {}, part2: {}, part3: {}, part4: {}, part5: {} });
  const [hata, setHata] = useState('');
  const [gonderiliyor, setGonderiliyor] = useState(false);

  const yaz = (part, no, v) => setYanitlar((p) => ({ ...p, [part]: { ...p[part], [no]: v } }));

  const gonder = async () => {
    setGonderiliyor(true); setHata('');
    try {
      await bataryaSonucKaydet('entry_exit', yanitlar, entryExitSkorla(yanitlar));
      await onTamam();
    } catch (e) { setHata('Could not save. Please try again.'); setGonderiliyor(false); }
  };

  const partBlok = (part, anahtar, karisikMaddeler) => {
    const maddeler = karisikMaddeler ?? part.maddeler;
    return (
      <>
        <h3 style={araBaslikStil}>{part.baslik}</h3>
        {part.giris && <p style={govdeStil}>{part.giris}</p>}
        {part.olcek && <OlcekLegend olcek={part.olcek} />}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {maddeler.map((m, i) => (
            <LikertSatir key={m.no} sira={karisikMaddeler ? i + 1 : undefined} metin={m.metin}
              deger={yanitlar[anahtar][m.no]} onSec={(v) => yaz(anahtar, m.no, v)} />
          ))}
        </div>
      </>
    );
  };

  return (
    <BolumKabuk baslik={ee.baslik}>
      {partBlok(ee.part1, 'part1', p1Maddeler)}
      {partBlok(ee.part2, 'part2')}
      {partBlok(ee.part3, 'part3')}
      {partBlok(ee.part4, 'part4')}
      {/* standingOffer — yanıtlardan bağımsız, Part 4'ten hemen sonra HER ZAMAN */}
      <div style={{ ...kutuStil, borderColor: TON, background: 'var(--accent-bg)' }}>
        <p style={govdeStil}>{ee.part4.standingOffer.replace('Standing offer (shown to the actor): ', '')}</p>
      </div>
      {partBlok(ee.part5, 'part5')}
      <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
        <IleriButon onClick={gonder} disabled={gonderiliyor} etiket={gonderiliyor ? 'Saving…' : 'Save & continue'} />
        {onVazgec && <button onClick={onVazgec} style={ikincilButonStil}>Back</button>}
      </div>
      {hata && <HataYazi metin={hata} />}
    </BolumKabuk>
  );
}

/* ─── Opsiyonel modül merkezi (core sonrası) ─────────────────────────────── */
function OpsiyonelHub({ durum, onSec }) {
  const kartlar = OPSIYONEL.map((o) => {
    const tanim = batarya.moduleMap.optional.find((x) => x.slug === o.slug);
    const modul = modulBul(o.slug);
    return {
      ...o,
      ad: tanim?.ad ?? modul.baslik,
      aciklama: tanim?.aciklama ?? '',
      bitti: durum.moduller.has(o.yazimKey),
    };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
      <div style={{ ...kutuStil, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <h2 style={{ ...araBaslikStil, fontSize: '1.3rem', margin: 0 }}>Thank you — the core battery is complete.</h2>
        <p style={govdeStil}>
          Your profile is recorded. The modules below are optional — take any of them whenever
          you like, in any order. Each one deepens a different part of the map.
        </p>
        {durum.moduller.has('type_lens') && (
          <button onClick={() => onSec('tip_raporu')} style={{ ...ikincilButonStil, alignSelf: 'flex-start', borderColor: TON, color: TON }}>
            Read your Type Lens report →
          </button>
        )}
      </div>
      {kartlar.map((k) => (
        <div key={k.slug} style={{ ...kutuStil, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{ ...govdeStil, fontWeight: 400, color: 'var(--ink)' }}>{k.ad}</span>
            {k.bitti && <span style={{ ...eyebrowStil, color: 'var(--onay-soft)' }}>✓ done</span>}
          </div>
          {k.aciklama && <p style={{ ...altYaziStil, fontSize: '0.78rem' }}>{k.aciklama}</p>}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {/* Her modül BİR KEZ (Flow Form A baseline dahil); tekrar yalnız Form B */}
            {!k.bitti && (
              <button onClick={() => onSec(k.slug)} style={ikincilButonStil}>
                Start →
              </button>
            )}
            {k.slug === 'flow' && durum.moduller.has('flow_formA') && (
              <button onClick={() => onSec('flow_formB')} style={{ ...ikincilButonStil, borderColor: TON, color: TON }}>
                Rate a performance (Form B{durum.formBSayisi > 0 ? ` · ${durum.formBSayisi} so far` : ''}) →
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Type Lens raporu (tip-raporlari.js — 16/16 FKA seti) ───────────────── */
// KURALLAR (tip-raporlari.js başlığı):
//   - Rapor yalnız DÖRT HARF üzerinden çalışır — tip adı/etiketi render edilmez.
//   - `teamNote` + `surum` ASLA gösterilmez. Nearest neighbour ASLA gösterilmez
//     (app hesaplar + saklar; kolaylaştırıcı aracı).
//   - `sorular` setleri serbest keşif katmanında (Kulis) yaşar — bu görünümde
//     RENDER EDİLMEZ (Filiz onaylı konumlandırma kararı / B).
//   - Metin içi **kalın** vurgular Filiz'in orijinalidir — <strong> olarak işlenir.
function TipRaporu({ onGeri }) {
  const [skor, setSkor] = useState(undefined); // undefined=yükleniyor, null=yok

  useEffect(() => {
    (async () => setSkor(await typeLensSonucGetir()))();
  }, []);

  if (skor === undefined) return <p style={altYaziStil}>Loading…</p>;
  const rapor = skor?.hipotez ? tipRaporlari.raporlar[skor.hipotez] : null;

  if (!rapor) {
    return (
      <div style={{ ...kutuStil, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        <p style={govdeStil}>
          Your report isn&apos;t ready yet — it becomes available once Module 1 is complete
          with enough answered items.
        </p>
        <button onClick={onGeri} style={{ ...ikincilButonStil, alignSelf: 'flex-start' }}>Back</button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <span style={eyebrowStil}>{tipRaporlari.meta.baslik}</span>
        <h2 style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontWeight: 300, fontSize: '2rem', margin: 0, letterSpacing: '0.15em' }}>
          {rapor.kod}
        </h2>
        <p style={{ ...araBaslikStil, margin: 0 }}>{rapor.ustBaslik}</p>
      </div>

      <RaporParagraflar metinler={rapor.beforeYouRead} kutu />
      <RaporBolum baslik="First sketch"><RaporParagraflar metinler={rapor.firstSketch} /></RaporBolum>
      <RaporBolum baslik="Your talents" giris={rapor.talentsGiris}><RaporMaddeler maddeler={rapor.talents} /></RaporBolum>
      <RaporBolum baslik="The shadows" giris={rapor.obstaclesGiris}><RaporMaddeler maddeler={rapor.obstacles} /></RaporBolum>
      <RaporBolum baslik="Remedies" giris={rapor.remediesGiris}><RaporMaddeler maddeler={rapor.remedies} /></RaporBolum>
      <RaporBolum baslik="Finally"><RaporParagraflar metinler={rapor.finallySection} /></RaporBolum>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <p style={{ ...govdeStil, fontFamily: 'var(--font-display), serif', fontStyle: 'italic' }}>{rapor.kapanis}</p>
        <p style={{ ...altYaziStil, fontStyle: 'italic' }}>{rapor.imza}</p>
      </div>

      <button onClick={onGeri} style={{ ...ikincilButonStil, alignSelf: 'flex-start' }}>Back</button>
    </div>
  );
}

// **kalın** işaretlerini <strong>'a çevirir (Filiz'in orijinal vurguları).
function KalinIsle({ metin }) {
  const parcalar = String(metin).split(/\*\*/);
  return (
    <>
      {parcalar.map((p, i) => (i % 2 === 1 ? <strong key={i} style={{ fontWeight: 500, color: 'var(--ink)' }}>{p}</strong> : p))}
    </>
  );
}

function RaporBolum({ baslik, giris, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
      <h3 style={araBaslikStil}>{baslik}</h3>
      {giris && <p style={govdeStil}><KalinIsle metin={giris} /></p>}
      {children}
    </div>
  );
}

function RaporParagraflar({ metinler, kutu }) {
  const icerik = metinler.map((m, i) => (
    <p key={i} style={govdeStil}><KalinIsle metin={m} /></p>
  ));
  if (kutu) return <div style={{ ...kutuStil, display: 'flex', flexDirection: 'column', gap: '0.7rem', borderColor: TON, background: 'var(--accent-bg)' }}>{icerik}</div>;
  return <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>{icerik}</div>;
}

function RaporMaddeler({ maddeler }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {maddeler.map((m, i) => (
        <div key={i} style={{ ...soruKutuStil, gap: '0.3rem' }}>
          {m.baslik && <span style={{ ...govdeStil, fontWeight: 400, color: 'var(--ink)' }}>{m.baslik}</span>}
          <p style={{ ...govdeStil, fontSize: '0.87rem' }}><KalinIsle metin={m.metin} /></p>
        </div>
      ))}
    </div>
  );
}

/* ─── Ortak küçük bileşenler / stiller ───────────────────────────────────── */
function BolumKabuk({ baslik, giris, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      <h2 style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontWeight: 300, fontSize: '1.5rem', margin: 0, lineHeight: 1.25 }}>
        {baslik}
      </h2>
      {giris && giris.split('\n\n').map((p, i) => <p key={i} style={govdeStil}>{p}</p>)}
      {children}
    </div>
  );
}

function OlcekLegend({ olcek, baslik }) {
  return (
    <div style={{ ...kutuStil, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      {baslik && <span style={{ ...eyebrowStil, color: 'var(--ink-muted)' }}>{baslik}</span>}
      {Object.entries(olcek).map(([n, m]) => (
        <span key={n} style={{ ...altYaziStil, fontSize: '0.74rem' }}>
          <strong style={{ color: TON, fontWeight: 400 }}>{n}</strong> — {m}
        </span>
      ))}
    </div>
  );
}

function BesliSecim({ deger, onSec }) {
  return (
    <div style={{ display: 'flex', gap: '0.3rem' }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} onClick={() => onSec(deger === n ? null : n)} aria-pressed={deger === n} style={{
          width: 34, height: 34, borderRadius: '50%',
          border: `1px solid ${deger === n ? TON : 'var(--rule)'}`,
          backgroundColor: deger === n ? TON : 'var(--bg-elevated)',
          color: deger === n ? 'var(--bg-base)' : 'var(--ink-soft)',
          fontFamily: 'var(--font-body), sans-serif', fontWeight: 400, fontSize: '0.8rem',
          cursor: 'pointer', transition: 'all 0.2s ease',
        }}>{n}</button>
      ))}
    </div>
  );
}

function LikertSatir({ sira, metin, deger, onSec }) {
  return (
    <div style={{ ...soruKutuStil, flexDirection: 'column', gap: '0.55rem' }}>
      <span style={{ ...govdeStil, fontSize: '0.92rem' }}>
        {sira != null && <span style={{ color: 'var(--ink-muted)', marginRight: '0.5rem' }}>{sira}.</span>}
        {metin}
      </span>
      <BesliSecim deger={deger} onSec={onSec} />
    </div>
  );
}

function CevapSayaci({ cevaplanan, toplam }) {
  return (
    <span style={{ ...altYaziStil, alignSelf: 'flex-end', fontSize: '0.72rem' }}>
      {cevaplanan} / {toplam} answered — unanswered items are simply skipped.
    </span>
  );
}

function IleriButon({ onClick, disabled, etiket }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{ ...ctaStil, opacity: disabled ? 0.6 : 1, alignSelf: 'flex-start' }}>
      {etiket}
    </button>
  );
}

function HataYazi({ metin }) {
  return <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.8rem', color: 'var(--uyari)', margin: 0 }}>{metin}</p>;
}

const eyebrowStil = {
  fontFamily: 'var(--font-body), sans-serif', fontWeight: 400, fontSize: '0.58rem',
  letterSpacing: '0.3em', color: TON, textTransform: 'uppercase',
};
const altYaziStil = {
  fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.8rem',
  color: 'var(--ink-muted)', margin: 0, lineHeight: 1.6,
};
const govdeStil = {
  fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.9rem',
  color: 'var(--ink-soft)', margin: 0, lineHeight: 1.7,
};
const araBaslikStil = {
  fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontWeight: 300,
  fontSize: '1.15rem', color: 'var(--ink)', margin: '0.6rem 0 0', lineHeight: 1.3,
};
const kutuStil = {
  background: 'var(--bg-elevated)', border: '1px solid var(--rule)', padding: '1rem 1.2rem',
};
const soruKutuStil = {
  display: 'flex', flexDirection: 'column', gap: '0.45rem',
  background: 'var(--bg-elevated)', border: '1px solid var(--rule)', padding: '0.85rem 1rem',
};
const girdiStil = {
  width: '100%', padding: '0.6rem 0.75rem', border: '1px solid var(--rule)',
  backgroundColor: 'var(--bg-base)', color: 'var(--ink)',
  fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.88rem',
  outline: 'none', caretColor: TON, boxSizing: 'border-box',
};
const ctaStil = {
  background: TON, border: `1px solid ${TON}`, color: 'var(--bg-base)',
  padding: '0.7rem 1.4rem', fontFamily: 'var(--font-body), sans-serif', fontWeight: 400,
  fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase',
  cursor: 'pointer', transition: 'all 0.2s ease',
};
const ikincilButonStil = {
  background: 'transparent', border: '1px solid var(--rule)', color: 'var(--ink-soft)',
  padding: '0.6rem 1.1rem', fontFamily: 'var(--font-body), sans-serif', fontWeight: 300,
  fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase',
  cursor: 'pointer', transition: 'all 0.2s ease',
};
const baglantiButonStil = {
  background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer',
  fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.78rem',
  padding: 0, textDecoration: 'underline',
};
