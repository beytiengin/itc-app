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
  bodySkorla, entryExitSkorla, typeLensSonucGetir, retakeDurumu,
  emotionalSonucGetir, accessSonucGetir, entryExitSonucGetir,
  taslakKaydet, taslakGetir } from '../lib/batarya-kaydet';
import { tipRaporlari } from '../../data/kalibrasyon/tip-raporlari';
import { routing } from '../../data/kalibrasyon/routing';
import CheckinV2 from '../../components/CheckinV2';
import ApsRaporu, { ApsMicroReveal } from '../../components/ApsRaporu';
import CoreRaporu, { CoreRaporButonu } from '../../components/CoreRaporu';
import { m3Pack } from '../../data/kalibrasyon/m3-pack';

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

  useEffect(() => { setFlagOk(true); }, []); // Karar 65: switch yapıldı — paralel-faz flag'i emekli (bataryaAcik görevi tamam).
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
  // Geliştirici modu (?dev=1) — YALNIZ test için: hub'da her modüle serbest giriş.
  // Oyuncu-yüzü akış ve kanon HİÇ değişmez (ITC-DEV-20260714).
  const devMod = useMemo(() => (
    typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('dev') === '1'
  ), []);

  const ilkGorunum = useMemo(() => {
    if (!durum.onamVar) return 'consent';
    if (devMod) return 'hub';
    for (const a of CEKIRDEK.slice(1)) if (!durum.moduller.has(a.key)) return a.key;
    return 'hub';
  }, [durum, devMod]);

  const [gorunum, setGorunum] = useState(ilkGorunum);

  // Her adım/rapor geçişinde sayfa BAŞINA dön (uzun Likert'te ortada kalıyordu).
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'auto' });
  }, [gorunum]);

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
      {gorunum === 'type_lens' && <TypeLensAdimi onTamam={async () => { await durumYenile(); setGorunum('doorway_reveal'); }} />}
      {gorunum === 'type_lens_retake_onay' && (
        <RetakeOnayi onEvet={() => setGorunum('type_lens')} onHayir={() => setGorunum('tip_raporu')} />
      )}
      {gorunum === 'doorway_reveal' && <DoorwayMicroReveal onDevam={coreSiradaki} onRapor={() => setGorunum('tip_raporu')} />}
      {gorunum === 'aps' && <KarisikLikertAdimi slug="aps" onTamam={async () => { await durumYenile(); setGorunum('aps_reveal'); }} />}
      {gorunum === 'emotional' && <EmotionalAdimi onTamam={async () => { await durumYenile(); setGorunum('emotional_reveal'); }} />}
      {gorunum === 'emotional_reveal' && <EmotionalMicroReveal onDevam={coreSiradaki} />}
      {/* Retake (Karar Kaydı 10 Tem): kayıt append-only düşer, micro-reveal
          ve core-zincir YOK — doğrudan hub'a döner. İlk-kez akışı değişmez. */}
      {gorunum === 'aps_retake' && <KarisikLikertAdimi slug="aps" onTamam={hubaDon} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'emotional_retake' && <EmotionalAdimi onTamam={hubaDon} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'hub' && <OpsiyonelHub durum={durum} onSec={setGorunum} devMod={devMod} />}
      {gorunum === 'tip_raporu' && <TipRaporu
        onGeri={() => setGorunum(
          CEKIRDEK.every((a) => a.key === 'consent' || durum.moduller.has(a.key)) ? 'hub' : 'doorway_reveal'
        )}
        onRetake={() => setGorunum('type_lens_retake_onay')}
      />}
      {gorunum === 'aps_reveal' && <ApsMicroReveal onDevam={coreSiradaki} />}
      {gorunum === 'aps_raporu' && <ApsRaporu onGeri={() => setGorunum('hub')} />}
      {gorunum === 'core_raporu' && <CoreRaporu onGeri={() => setGorunum('hub')} />}
      {gorunum === 'access' && <AccessAdimi onTamam={async () => { await durumYenile(); setGorunum('access_reveal'); }} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'access_reveal' && <LaunchScopeTesekkur onDevam={hubaDon} />}{/* A.11: m4 reveal gate off, plumbing korundu */}
      {gorunum === 'flow' && <KarisikLikertAdimi slug="flow" onTamam={async () => { await durumYenile(); setGorunum('flow_reveal'); }} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'flow_reveal' && <LaunchScopeTesekkur onDevam={hubaDon} />}{/* A.11: m5 reveal gate off */}
      {gorunum === 'flow_formB' && <FormBAdimi onTamam={hubaDon} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'regulation' && <KarisikLikertAdimi slug="regulation" onTamam={async () => { await durumYenile(); setGorunum('regulation_reveal'); }} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'regulation_reveal' && <LaunchScopeTesekkur onDevam={hubaDon} />}{/* A.11: m6 reveal gate off */}
      {gorunum === 'mindfulness' && <KarisikLikertAdimi slug="mindfulness" onTamam={async () => { await durumYenile(); setGorunum('mindfulness_reveal'); }} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'mindfulness_reveal' && <LaunchScopeTesekkur onDevam={hubaDon} />}{/* A.11: m7 reveal gate off */}
      {gorunum === 'body' && <KarisikLikertAdimi slug="body" onTamam={async () => { await durumYenile(); setGorunum('body_reveal'); }} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'body_reveal' && <LaunchScopeTesekkur onDevam={hubaDon} />}{/* A.11: m8 reveal gate off */}
      {gorunum === 'entry_exit' && <EntryExitAdimi onTamam={async () => { await durumYenile(); setGorunum('entry_exit_reveal'); }} onVazgec={() => setGorunum('hub')} />}
      {gorunum === 'entry_exit_reveal' && <LaunchScopeTesekkur onDevam={hubaDon} />}{/* A.11: m9 reveal built ama ship yok, plumbing korundu */}
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
  const gruplar = a.gruplar;                     // doğal setler (4-7 soru)
  const [yanitlar, setYanitlar] = useState({});
  const [setIdx, setSetIdx] = useState(0);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState('');
  const [gonderiliyor, setGonderiliyor] = useState(false);

  // Kısmi kayıt: yarım bırakılmışsa kaldığı setten devam (ITC-TASLAK-20260714).
  useEffect(() => {
    (async () => {
      const t = await taslakGetir('intake');
      if (t) {
        setYanitlar(t.yanitlar || {});
        setSetIdx(Math.min(t.setIndex || 0, gruplar.length - 1));
      }
      setYukleniyor(false);
    })();
  }, [gruplar.length]);

  const yaz = (no, deger) => setYanitlar((p) => ({ ...p, [no]: deger }));

  const sonSet = setIdx >= gruplar.length - 1;

  const ileri = async () => {
    setHata('');
    if (sonSet) {
      setGonderiliyor(true);
      try {
        await bataryaSonucKaydet('intake', yanitlar, null);  // taslağı kendisi siler
        await onTamam();
      } catch (e) { setHata('Could not save. Please try again.'); setGonderiliyor(false); }
      return;
    }
    const yeni = setIdx + 1;
    await taslakKaydet('intake', yanitlar, yeni);  // hata olsa da akış durmaz
    setSetIdx(yeni);
  };

  const geri = () => { setHata(''); setSetIdx((i) => Math.max(0, i - 1)); };

  if (yukleniyor) return <p style={altYaziStil}>Loading…</p>;

  const grup = gruplar[setIdx];
  return (
    <BolumKabuk baslik={a.baslik} giris={setIdx === 0 ? a.giris : undefined}>
      <p style={altYaziStil}>{setIdx + 1} / {gruplar.length}</p>
      <div key={grup.baslik} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3 style={araBaslikStil}>{grup.baslik}</h3>
        {grup.not && <p style={{ ...altYaziStil, fontStyle: 'italic' }}>{grup.not}</p>}
        {grup.sorular.map((soru) => (
          <IntakeSoru key={soru.no} soru={soru} deger={yanitlar[soru.no]} onYaz={(v) => yaz(soru.no, v)} />
        ))}
      </div>
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
        {setIdx > 0 && (
          <button onClick={geri} style={{ ...ikincilButonStil, alignSelf: 'flex-start' }}>← Back</button>
        )}
        <IleriButon onClick={ileri} disabled={gonderiliyor}
          etiket={gonderiliyor ? 'Saving…' : sonSet ? 'Save & continue' : 'Continue'} />
      </div>
      {hata && <HataYazi metin={hata} />}
    </BolumKabuk>
  );
}

// Seçenek metnindeki '______' = serbest metin ister (koç adı, "Other: ______" vb.).
// Etikette çizgiler gösterilmez; seçilince altında input açılır.
const DETAY = /_{3,}/;
const detayMi = (s) => DETAY.test(s);
const etiketTemiz = (s) => s.replace(/:?\s*_{3,}/, '').replace(/\s*\(optional\)\s*$/i, ' (optional)').trim();

function DetayGirdisi({ deger, onYaz, ipucu }) {
  return (
    <input type="text" value={deger || ''} onChange={(e) => onYaz(e.target.value)} placeholder={ipucu}
      style={{ ...girdiStil, marginLeft: '1.5rem', marginTop: '0.3rem', maxWidth: '22rem' }} />
  );
}

function IntakeSoru({ soru, deger, onYaz }) {
  const etiket = (
    <span style={{ ...govdeStil, fontWeight: 400 }}>{soru.metin} {soru.not && <em style={{ color: 'var(--ink-muted)' }}>{soru.not}</em>}</span>
  );
  if (soru.tip === 'tekSecim') {
    // deger: string (detaysız) | { sec, detay } (detaylı seçenek işaretliyse)
    const secili = typeof deger === 'object' && deger ? deger.sec : deger;
    const detay  = typeof deger === 'object' && deger ? deger.detay : '';
    return (
      <div style={soruKutuStil}>
        {etiket}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {soru.secenekler.map((s) => {
            const d = detayMi(s);
            return (
              <div key={s}>
                <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                  <input type="radio" name={`q${soru.no}`} checked={secili === s}
                    onChange={() => onYaz(d ? { sec: s, detay: '' } : s)}
                    style={{ marginTop: '0.2rem', accentColor: TON }} />
                  <span style={{ ...govdeStil, fontSize: '0.85rem' }}>{etiketTemiz(s)}</span>
                </label>
                {d && secili === s && (
                  <DetayGirdisi deger={detay} ipucu="Type here…"
                    onYaz={(v) => onYaz({ sec: s, detay: v })} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  if (soru.tip === 'cokluSecim') {
    // deger: { secili: string[], detaylar: { [secenek]: string } }
    const norm = Array.isArray(deger) ? { secili: deger, detaylar: {} }
               : (deger && typeof deger === 'object') ? { secili: deger.secili ?? [], detaylar: deger.detaylar ?? {} }
               : { secili: [], detaylar: {} };
    const { secili, detaylar } = norm;
    const degistir = (s) => {
      const yeni = secili.includes(s) ? secili.filter((x) => x !== s) : [...secili, s];
      const yeniDetaylar = { ...detaylar };
      if (!yeni.includes(s)) delete yeniDetaylar[s];
      onYaz({ secili: yeni, detaylar: yeniDetaylar });
    };
    const detayYaz = (s, v) => onYaz({ secili, detaylar: { ...detaylar, [s]: v } });
    return (
      <div style={soruKutuStil}>
        {etiket}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {soru.secenekler.map((s) => {
            const d = detayMi(s);
            return (
              <div key={s}>
                <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                  <input type="checkbox" checked={secili.includes(s)} onChange={() => degistir(s)}
                    style={{ marginTop: '0.2rem', accentColor: TON }} />
                  <span style={{ ...govdeStil, fontSize: '0.85rem' }}>{etiketTemiz(s)}</span>
                </label>
                {d && secili.includes(s) && (
                  <DetayGirdisi deger={detaylar[s]} ipucu="Type here…" onYaz={(v) => detayYaz(s, v)} />
                )}
              </div>
            );
          })}
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
  // liste — açılır seçim (secenekler veriden gelir; yoksa serbest metne düşer)
  if (soru.tip === 'liste' && Array.isArray(soru.secenekler) && soru.secenekler.length) {
    return (
      <div style={soruKutuStil}>
        {etiket}
        <select value={deger || ''} onChange={(e) => onYaz(e.target.value)} style={girdiStil}>
          <option value="">— select —</option>
          {soru.secenekler.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
    );
  }
  // metin / liste (seçeneksiz) / tarih
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

  // Eksik yanıt = skorlanamaz kayıt = kilit. Tamamlanmadan gönderim YOK.
  const cevaplanan = Object.keys(yanitlar).length;
  const tamMi = cevaplanan === maddeler.length;

  const gonder = async () => {
    if (!tamMi) return;
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
      <CevapSayaci cevaplanan={cevaplanan} toplam={maddeler.length} />
      {!tamMi && (
        <p style={altYaziStil}>
          Every item needs a choice — the doorway can't be read from a partial answer.
        </p>
      )}
      <IleriButon onClick={gonder} disabled={gonderiliyor || !tamMi}
        etiket={gonderiliyor ? 'Saving…' : 'Save & continue'} />
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
// Genel modül micro-reveal (Routing v0.1 §B) — statik metinli modüller için
// (m5_formA, m6, m7, m8). Placeholder'lı olanlar (m4 channel, m9 recovery
// channels, m5_formB n) veri getter'ı gelince bu bileşene devreye alınır.
// LAUNCH SCOPE (Ek v0.4 A.11): go-live'da M4-9 aktör-side render GATE OFF.
// Modül tamamlanınca micro-reveal DEĞİL, tek teşekkür mesajı görünür.
// Plumbing (skorlama/getter/routing/coach) olduğu gibi kalır — yalnız
// aktör-side render kapalı. Reveal bileşenleri (Access/EntryExit/Modul
// MicroReveal) SİLİNMEDİ, çağrılmıyor — payment principle sonra karar.
/* ─── Doorway (M1) micro-reveal — M2/M3 ile simetri (ITC-DOORWAY-REVEAL-20260714)
   Modül 1 bitince akış doğrudan M2'ye atlıyordu: ne rapor, ne tek satır bilgi.
   Reveal metni PROPOSED — Filiz onayı bekler (tip hipotezine ilk temas).      */
/* ─── Type Lens retake onayı — sürtünme ekranı (ITC-TYPELENS-RETAKE-20260714)
   "Bir kez alınır" hissini taşıyan yer burası: kimse kazara basmaz, ama
   sıkışan çıkar. Sayaç/rozet YOK (gamification kanonen reddedilmiştir).     */
function RetakeOnayi({ onEvet, onHayir }) {
  return (
    <div style={{ ...kutuStil, alignItems: 'flex-start' }}>
      <h2 style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontWeight: 300, fontSize: '1.35rem', margin: 0, color: 'var(--ink)' }}>
        Start the doorway again?
      </h2>
      <p style={{ ...govdeStil }}>
        Retaking replaces the doorway you read from now on. Your earlier answers stay in the
        record — nothing is erased. This isn't meant to be done often: a doorway shifts with
        time and work, not with mood.
      </p>
      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
        <button onClick={onEvet} style={{ ...ikincilButonStil, borderColor: TON, color: TON }}>
          Yes, start again ↺
        </button>
        <button onClick={onHayir} style={ikincilButonStil}>
          No, keep what I have
        </button>
      </div>
    </div>
  );
}

function DoorwayMicroReveal({ onDevam, onRapor }) {
  return (
    <div style={{ ...kutuStil, alignItems: 'flex-start' }}>
      <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.02rem', color: 'var(--ink)', lineHeight: 1.5 }}>
        That part is done — your answers are in and safely kept. What comes back to you here is
        a doorway, not a label: a first hypothesis about how you enter a role. Hold it lightly.
      </p>
      <p style={altYaziStil}>
        You can read it now, or carry on and come back to it whenever you like — it stays available.
      </p>
      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
        <button onClick={onRapor} style={{ ...ikincilButonStil, borderColor: TON, color: TON }}>
          Read your Doorway report →
        </button>
        <button onClick={onDevam} style={ikincilButonStil}>
          Continue →
        </button>
      </div>
    </div>
  );
}

function LaunchScopeTesekkur({ onDevam }) {
  return (
    <div style={{ ...kutuStil, alignItems: 'flex-start' }}>
      <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.02rem', color: 'var(--ink)', lineHeight: 1.5 }}>
        Thank you for your time — your answers are in and safely kept. The full report for this part is being built with care; it reaches you by the end of 2026.
      </p>
      <button onClick={onDevam} style={{ ...ikincilButonStil, borderColor: TON, color: TON }}>
        Continue →
      </button>
    </div>
  );
}

function ModulMicroReveal({ revealKey, etiket, onDevam }) {
  const mr = routing.microReveals[revealKey];
  if (!mr) { onDevam(); return null; }
  return (
    <div style={{ ...kutuStil, alignItems: 'flex-start' }}>
      <span style={eyebrowStil}>{etiket} · complete</span>
      <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.02rem', color: 'var(--ink)', lineHeight: 1.5 }}>
        {mr.metin}
      </p>
      <button onClick={onDevam} style={{ ...ikincilButonStil, borderColor: TON, color: TON }}>
        Continue →
      </button>
    </div>
  );
}

// Emotional modül sonu micro-reveal (Karar Kaydı: her modül sonunda; M3 Pack
// v0.1). En açık sistemin YALIN adı (parantez gloss'suz) {top_system_name}.
// Access (M4) micro-reveal (Routing v1.0 + Karar Kaydı Eki v0.2 §B): en
// yüksek skorlu kanal = {channel} (strongest doorway for imagining). Kanal
// adları Filiz batarya instrument adları (Seeing/Hearing/Feeling) — onaylı.
// Entry & Exit (M9) micro-reveal (Ek v0.3 A.9+A.10): en yüksek 2 recovery
// channel SEÇİLİR, ama R1→R6 INSTRUMENT ORDER'da render edilir — ASLA skor
// sırası (sıralama ima edemez, A.10 kuralı). Olumlu-only, en hassas modül.
function EntryExitMicroReveal({ onDevam }) {
  const [metin, setMetin] = useState(null);
  useEffect(() => {
    (async () => {
      const skor = await entryExitSonucGetir();
      const rk = skor?.recoveryKanallar;
      const bph = routing.microReveals.m9.basicPhKanallar;
      const orderR1R6 = ['R1', 'R2', 'R3', 'R4', 'R5', 'R6'];
      if (!rk || Object.keys(rk).length < 2) {
        setMetin(routing.microReveals.m9.metinVerisiz); // veri yetersiz → tek cümle
        return;
      }
      // top-2 SEÇ (skor), sonra R1→R6 sırasına DİZ (asla skor sırası)
      const top2 = Object.entries(rk)
        .map(([id, v]) => ({ id, v: v ?? 0 }))
        .sort((a, b) => b.v - a.v)
        .slice(0, 2)
        .map((x) => x.id);
      const gosterim = orderR1R6.filter((id) => top2.includes(id)); // instrument order
      const ad = (id) => bph[id]?.en ?? id;
      const t = routing.microReveals.m9.metin
        .replace('{channel_1}', ad(gosterim[0]))
        .replace('{channel_2}', ad(gosterim[1]));
      setMetin(t);
    })();
  }, []);
  return (
    <div style={{ ...kutuStil, alignItems: 'flex-start' }}>
      <span style={eyebrowStil}>Module 9 · complete</span>
      <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.02rem', color: 'var(--ink)', lineHeight: 1.5 }}>
        {metin ?? '…'}
      </p>
      <button onClick={onDevam} style={{ ...ikincilButonStil, borderColor: TON, color: TON }}>
        Continue →
      </button>
    </div>
  );
}

function AccessMicroReveal({ onDevam }) {
  const [metin, setMetin] = useState(null);
  useEffect(() => {
    (async () => {
      const skor = await accessSonucGetir();
      const kanallar = skor?.kanallar;
      if (!kanallar) { setMetin(routing.microReveals.m4.metin.replace('{channel}', 'your strongest channel')); return; }
      // en yüksek skorlu kanal. A.12 (Ek v0.5): aktörün kendi adlandırdığı
      // "One more (optional)" kanalı otomatik {channel} türetiminden ÇIKARILIR
      // — veride ve coach view'da kalır ama reveal/routed copy'yi sürüklemez
      // (aktör-adı kanal bozuk otomatik copy render etme kenar durumunu kapatır).
      const enYuksek = Object.entries(kanallar)
        .filter(([ad]) => !/one more|optional/i.test(ad))
        .map(([ad, s]) => ({ ad, ort: s?.ortalama ?? s }))
        .filter((x) => x.ort != null)
        .sort((a, b) => b.ort - a.ort)[0];
      const kanalAd = enYuksek ? enYuksek.ad.split(' (')[0] : 'your strongest channel';
      setMetin(routing.microReveals.m4.metin.replace('{channel}', kanalAd));
    })();
  }, []);
  return (
    <div style={{ ...kutuStil, alignItems: 'flex-start' }}>
      <span style={eyebrowStil}>Module 4 · complete</span>
      <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.02rem', color: 'var(--ink)', lineHeight: 1.5 }}>
        {metin ?? '…'}
      </p>
      <button onClick={onDevam} style={{ ...ikincilButonStil, borderColor: TON, color: TON }}>
        Continue →
      </button>
    </div>
  );
}

function EmotionalMicroReveal({ onDevam }) {
  const [metin, setMetin] = useState(null);
  useEffect(() => {
    (async () => {
      const skor = await emotionalSonucGetir();
      const sistemler = skor?.sistemler;
      if (!sistemler) { setMetin(m3Pack.microReveal.replace('{top_system_name}', 'your palette')); return; }
      const enAcik = Object.entries(sistemler)
        .map(([ad, s]) => ({ ad: ad.split(' (')[0], ort: s?.ortalama ?? s }))
        .filter((x) => x.ort != null)
        .sort((a, b) => b.ort - a.ort)[0];
      setMetin(m3Pack.microReveal.replace('{top_system_name}', enAcik ? enAcik.ad : 'your palette'));
    })();
  }, []);
  return (
    <div style={{ ...kutuStil, alignItems: 'flex-start' }}>
      <span style={eyebrowStil}>Module 3 · complete</span>
      <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.02rem', color: 'var(--ink)', lineHeight: 1.5 }}>
        {metin ?? '…'}
      </p>
      <button onClick={onDevam} style={{ ...ikincilButonStil, borderColor: TON, color: TON }}>
        Continue →
      </button>
    </div>
  );
}

function EmotionalAdimi({ onTamam, onVazgec }) {
  const em = modulBul('emotional');
  // Part 1 — karışık sıra KORUNUR (adminNote: sistem başlığı gösterilmez).
  // Filiz kararı (14 Tem 2026, seçenek C): 28 madde SİLİNMEZ, 6'lı setlere bölünür.
  const p1Maddeler = useMemo(
    () => karistir(em.part1.sistemler.flatMap((s) => s.maddeler), SEED.emotional_p1),
    []
  );
  const SET = 6;
  const p1Setleri = useMemo(() => {
    const out = [];
    for (let k = 0; k < p1Maddeler.length; k += SET) out.push(p1Maddeler.slice(k, k + SET));
    return out;
  }, [p1Maddeler]);

  // Sayfalar: [p1 setleri...] · part2 · part3 · part4
  const sayfalar = useMemo(
    () => [
      ...p1Setleri.map((set, k) => ({ tur: 'p1', set, ilk: k === 0 })),
      { tur: 'p2' }, { tur: 'p3' }, { tur: 'p4' },
    ],
    [p1Setleri]
  );

  const [yanitlar, setYanitlar] = useState({});
  const [konfor, setKonfor] = useState({});      // part4: { duygu: {hissetme, gosterme} }
  const [p4Atla, setP4Atla] = useState(false);
  const [sayfaIdx, setSayfaIdx] = useState(0);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState('');
  const [gonderiliyor, setGonderiliyor] = useState(false);

  // Kısmi kayıt — yarım bırakılırsa kaldığı sayfadan devam.
  useEffect(() => {
    (async () => {
      const t = await taslakGetir('emotional');
      if (t) {
        const y = t.yanitlar || {};
        const { konforEnvanteri, ...likert } = y;
        setYanitlar(likert);
        if (konforEnvanteri) setKonfor(konforEnvanteri);
        setSayfaIdx(Math.min(t.setIndex || 0, sayfalar.length - 1));
      }
      setYukleniyor(false);
    })();
  }, [sayfalar.length]);

  const likertYaz = (no, v) => setYanitlar((p) => ({ ...p, [no]: v }));

  const sonSayfa = sayfaIdx >= sayfalar.length - 1;

  const ileri = async () => {
    setHata('');
    if (sonSayfa) {
      setGonderiliyor(true);
      try {
        // part4 opsiyonel + PUANLANMAZ — yalnız ham; atlandıysa hiç yazılmaz.
        const ham = { ...yanitlar, ...(p4Atla ? {} : { konforEnvanteri: konfor }) };
        await bataryaSonucKaydet('emotional', ham, emotionalSkorla(yanitlar));
        await onTamam();
      } catch (e) { setHata('Could not save. Please try again.'); setGonderiliyor(false); }
      return;
    }
    const yeni = sayfaIdx + 1;
    await taslakKaydet('emotional', { ...yanitlar, konforEnvanteri: konfor }, yeni);
    setSayfaIdx(yeni);
  };

  const geri = () => { setHata(''); setSayfaIdx((k) => Math.max(0, k - 1)); };

  if (yukleniyor) return <p style={altYaziStil}>Loading…</p>;

  const sayfa = sayfalar[sayfaIdx];
  // Karışık sırada global numara (set içi değil) — "1 / 28" hissi korunur.
  const p1Basi = sayfaIdx * SET;

  return (
    <BolumKabuk baslik={`${em.baslik}${em.ustBaslik ? ' · ' + em.ustBaslik : ''}`}
      giris={sayfaIdx === 0 ? em.giris : undefined}>
      <p style={altYaziStil}>{sayfaIdx + 1} / {sayfalar.length}</p>

      {sayfa.tur === 'p1' && (
        <>
          {sayfa.ilk && <h3 style={araBaslikStil}>{em.part1.baslik}</h3>}
          {sayfa.ilk && <p style={govdeStil}>{em.part1.giris}</p>}
          <OlcekLegend olcek={em.part1.olcek} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {sayfa.set.map((m, i) => (
              <LikertSatir key={m.no} sira={p1Basi + i + 1} metin={m.metin}
                deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
            ))}
          </div>
        </>
      )}

      {sayfa.tur === 'p2' && (
        <>
          <h3 style={araBaslikStil}>{em.part2.baslik}</h3>
          <p style={govdeStil}>{em.part2.giris}</p>
          <OlcekLegend olcek={em.part2.olcek} />
          {em.part2.maddeler.map((m) => (
            <LikertSatir key={m.no} metin={m.metin} deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
          ))}
        </>
      )}

      {sayfa.tur === 'p3' && (
        <>
          <h3 style={araBaslikStil}>{em.part3.baslik}</h3>
          <p style={govdeStil}>{em.part3.giris}</p>
          <OlcekLegend olcek={em.part3.olcek} />
          {em.part3.maddeler.map((m) => (
            <LikertSatir key={m.no} metin={m.metin} deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
          ))}
        </>
      )}

      {/* Part 4 — opsiyonel, profil skoruna girmez */}
      {sayfa.tur === 'p4' && (
        <>
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
        </>
      )}

      <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', alignItems: 'center' }}>
        {sayfaIdx > 0 && <button onClick={geri} style={ikincilButonStil}>← Back</button>}
        <IleriButon onClick={ileri} disabled={gonderiliyor}
          etiket={gonderiliyor ? 'Saving…' : sonSayfa ? 'Save & continue' : 'Continue'} />
        {sayfaIdx === 0 && onVazgec && <button onClick={onVazgec} style={ikincilButonStil}>Back</button>}
      </div>
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

/* ─── Retake bağlantısı — 12 hafta dolduysa sakin bir satır; dolmadıysa
     HİÇBİR ŞEY (Karar Kaydı 10 Tem 2026: ısrar yok, geri sayım yok). ─────── */
function RetakeSatiri({ onSec }) {
  const [kapi, setKapi] = useState(null);
  useEffect(() => { retakeDurumu().then(setKapi); }, []);
  if (!kapi) return null;
  const acik = [
    kapi.aps?.acik && { slug: 'aps_retake', ad: 'Acting Performance Scale' },
    kapi.emotional?.acik && { slug: 'emotional_retake', ad: 'Emotional Profile' },
  ].filter(Boolean);
  if (!acik.length) return null;
  return (
    <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <p style={{ ...altYaziStil, fontSize: '0.78rem' }}>
        It's been a season. If you'd like to see how your profile has shifted, you can retake — entirely optional.
      </p>
      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
        {acik.map((m) => (
          <button key={m.slug} onClick={() => onSec(m.slug)} style={ikincilButonStil}>
            Retake {m.ad} →
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Opsiyonel modül merkezi (core sonrası) ─────────────────────────────── */
// DEV — yalnız ?dev=1. Oyuncu bunu ASLA görmez.
function DevSatiri({ onSec }) {
  const hedefler = [
    ['intake', 'Intake'], ['type_lens', 'Doorway (M1)'],
    ['aps', 'APS (M2)'], ['emotional', 'Emotional (M3)'],
    ['tip_raporu', 'Doorway report'], ['doorway_reveal', 'Doorway reveal'],
  ];
  return (
    <div style={{ borderTop: '1px dashed var(--rule)', paddingTop: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <p style={{ ...altYaziStil, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        Dev mode — not visible to actors
      </p>
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        {hedefler.map(([k, ad]) => (
          <button key={k} onClick={() => onSec(k)} style={{ ...ikincilButonStil, fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}>
            {ad}
          </button>
        ))}
      </div>
    </div>
  );
}

function OpsiyonelHub({ durum, onSec, devMod }) {
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
            Read your Doorway report →
          </button>
        )}
        {durum.moduller.has('aps') && (
          <button onClick={() => onSec('aps_raporu')} style={{ ...ikincilButonStil, alignSelf: 'flex-start', borderColor: TON, color: TON }}>
            Read your Acting Performance Profile →
          </button>
        )}
        {/* Core Report — içerik kapısı: doorway'in geçerli seti yoksa buton HİÇ görünmez
            (2/16 set elde; feature flag değil — Karar 65 paralel-faz dersinden). */}
        <CoreRaporButonu onSec={onSec} stil={ikincilButonStil} />
        <RetakeSatiri onSec={onSec} />
        {devMod && <DevSatiri onSec={onSec} />}
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
function TipRaporu({ onGeri, onRetake }) {
  const [skor, setSkor] = useState(undefined); // undefined=yükleniyor, null=yok
  const [doorwayCheckinGoster, setDoorwayCheckinGoster] = useState(false);

  useEffect(() => {
    (async () => setSkor(await typeLensSonucGetir()))();
  }, []);

  useEffect(() => {
    // İlk tam görüntüleme: rapor yüklendiyse ve daha önce gösterilmediyse.
    if (skor?.hipotez && typeof window !== 'undefined'
        && !localStorage.getItem('itc-doorway-checkin-goruldu')) {
      setDoorwayCheckinGoster(true);
      localStorage.setItem('itc-doorway-checkin-goruldu', '1');
    }
  }, [skor]);

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
        {/* Doorway Release: dört harf kodu AKTÖR TARAFINDA ASLA render edilmez —
            isim, beforeYouRead'in son paragrafında Filiz'in yerleştirdiği yerde
            (**Ad** vurgusu) açılır; başlıkta ne kod ne ad gösterilir. */}
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

      {/* Doorway post-report check-in — ilk tam görüntülemede bir kez
          (Routing v0.1 §C). Standart 4 seçenek + serbest alan (CheckinV2). */}
      {doorwayCheckinGoster && <CheckinV2 baglam="doorway" soru={routing.doorwayCheckin.soru} />}

      {/* Retake — sessiz, rapor okunduktan SONRA. Kazara basılmaz; onay ekranı
          sürtünmeyi taşır (ITC-TYPELENS-RETAKE-20260714). */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid var(--rule)', paddingTop: '0.9rem' }}>
        <p style={{ ...altYaziStil, fontSize: '0.78rem', fontStyle: 'italic' }}>
          A doorway is a hypothesis, not a verdict — it's meant to be lived with rather than re-run.
        </p>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          <button onClick={onGeri} style={ikincilButonStil}>Back</button>
          {onRetake && (
            <button onClick={onRetake} style={{ ...ikincilButonStil, color: 'var(--ink-muted)' }}>
              Start again ↺
            </button>
          )}
        </div>
      </div>
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
