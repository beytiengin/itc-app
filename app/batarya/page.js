// app/batarya/page.js — Modül I · ITC Actor Assessment Battery (Karar 64, Aşama 4)
// PARALEL AKIŞ: eski /kalibrasyon canlı kalır; bu route feature-flag arkasında
// (lib/flags.js bataryaAcik — env NEXT_PUBLIC_BATARYA=1 veya ?batarya=1) ve
// oturum korumalı (middleware Karar 33 ile no-op olduğundan koruma sayfa içinde).
//
// KURALLAR (Karar 64 + batarya.js başlığı):
//   - İçerik verbatim EN render edilir; girişte "currently available in English" notu.
//   - `teamNotes` / `adminNote` ASLA render edilmez.
//   - Likert bölümleri (M1 Section B · M3 Part 1 · M4 Form A) KARIŞIK sırada ve
//     alan/sistem/boyut başlıkları OLMADAN sunulur — deterministik seed'li
//     karıştırma (tüm katılımcılar aynı sırayı görür; enstrüman tutarlılığı).
//   - Ham yanıtlar `yanitlar`a (kaynak), türetimler `skorlar`a (batarya-kaydet).
//   - Sorular atlanabilir (voluntary participation) — yalnız consent kutuları
//     + imza zorunlu.
//   - M3 Part 4 opsiyonel ve puanlanmaz.

'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { bataryaAcik } from '@/lib/flags';
import { supabase } from '../lib/supabase';
import { batarya } from '../../data/kalibrasyon/batarya';
import {
  bataryaSonucKaydet, bataryaOnamKaydet, bataryaDurumGetir,
  m1Skorla, m2Skorla, m3Skorla, m4aSkorla, m4bSkorla,
} from '../lib/batarya-kaydet';

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

/* ─── Akış tanımı ────────────────────────────────────────────────────────── */
const ADIMLAR = [
  { key: 'consent', etiket: 'Consent' },
  { key: 'intake', etiket: 'Intake' },
  { key: 'm1_aps', etiket: 'Module 1' },
  { key: 'm2_access', etiket: 'Module 2' },
  { key: 'm3_emotional', etiket: 'Module 3' },
  { key: 'm4_formA', etiket: 'Module 4' },
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
  // Kaldığı yerden devam: consent yoksa consent; sonra ilk eksik modül.
  const ilkAdim = useMemo(() => {
    if (!durum.onamVar) return 'consent';
    for (const a of ADIMLAR.slice(1)) if (!durum.moduller.has(a.key)) return a.key;
    return 'tamam';
  }, [durum]);

  const [adim, setAdim] = useState(ilkAdim);
  const [formBAcik, setFormBAcik] = useState(false);

  const siradaki = () => {
    const i = ADIMLAR.findIndex((a) => a.key === adim);
    const kalan = ADIMLAR.slice(i + 1).find((a) => a.key !== 'consent' && !durum.moduller.has(a.key));
    setAdim(kalan ? kalan.key : 'tamam');
  };

  const tamamla = async () => { await durumYenile(); siradaki(); };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
      <IlerlemeSeridi adim={adim} durum={durum} />
      {adim === 'consent' && <ConsentAdimi onTamam={tamamla} />}
      {adim === 'intake' && <IntakeAdimi onTamam={tamamla} />}
      {adim === 'm1_aps' && <LikertModulAdimi modulKey="m1_aps" onTamam={tamamla} />}
      {adim === 'm2_access' && <Modul2Adimi onTamam={tamamla} />}
      {adim === 'm3_emotional' && <Modul3Adimi onTamam={tamamla} />}
      {adim === 'm4_formA' && <LikertModulAdimi modulKey="m4_formA" onTamam={tamamla} />}
      {adim === 'tamam' && !formBAcik && (
        <TamamEkrani formBSayisi={durum.formBSayisi} onFormB={() => setFormBAcik(true)} />
      )}
      {adim === 'tamam' && formBAcik && (
        <FormBAdimi onTamam={async () => { await durumYenile(); setFormBAcik(false); }} onVazgec={() => setFormBAcik(false)} />
      )}
    </div>
  );
}

function IlerlemeSeridi({ adim, durum }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
      {ADIMLAR.map((a) => {
        const bitti = a.key === 'consent' ? durum.onamVar : durum.moduller.has(a.key);
        const aktif = a.key === adim;
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
  const c = batarya.module1.consent;
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
  const a = batarya.module1.sectionA;
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

/* ─── Karışık-sıra Likert modülleri (M1 Section B · M4 Form A) ───────────── */
// adminNote kuralı: maddeler karışık sırada, alan/boyut başlıkları OLMADAN.
const LIKERT_MODULLER = {
  m1_aps: {
    baslik: () => batarya.module1.sectionB.baslik,
    giris: () => batarya.module1.sectionB.giris,
    olcek: () => batarya.module1.sectionB.olcek,
    maddeler: () => karistir(batarya.module1.sectionB.alanlar.flatMap((a) => a.maddeler), 64001),
    skorla: m1Skorla,
  },
  m4_formA: {
    baslik: () => `${batarya.module4.baslik} · ${batarya.module4.formA.baslik}`,
    giris: () => `${batarya.module4.giris}\n\n${batarya.module4.formA.giris}`,
    olcek: () => batarya.module4.formA.olcek,
    maddeler: () => karistir(batarya.module4.formA.boyutlar.flatMap((b) => b.maddeler), 64004),
    skorla: m4aSkorla,
  },
};

function LikertModulAdimi({ modulKey, onTamam }) {
  const tanim = LIKERT_MODULLER[modulKey];
  const maddeler = useMemo(() => tanim.maddeler(), [modulKey]);
  const [yanitlar, setYanitlar] = useState({});
  const [hata, setHata] = useState('');
  const [gonderiliyor, setGonderiliyor] = useState(false);

  const gonder = async () => {
    setGonderiliyor(true); setHata('');
    try {
      await bataryaSonucKaydet(modulKey, yanitlar, tanim.skorla(yanitlar));
      await onTamam();
    } catch (e) { setHata('Could not save. Please try again.'); setGonderiliyor(false); }
  };

  return (
    <BolumKabuk baslik={tanim.baslik()} giris={tanim.giris()}>
      <OlcekLegend olcek={tanim.olcek()} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {maddeler.map((m, i) => (
          <LikertSatir key={m.no} sira={i + 1} metin={m.metin} deger={yanitlar[m.no]}
            onSec={(v) => setYanitlar((p) => ({ ...p, [m.no]: v }))} />
        ))}
      </div>
      <CevapSayaci cevaplanan={Object.keys(yanitlar).length} toplam={maddeler.length} />
      <IleriButon onClick={gonder} disabled={gonderiliyor} etiket={gonderiliyor ? 'Saving…' : 'Save & continue'} />
      {hata && <HataYazi metin={hata} />}
    </BolumKabuk>
  );
}

/* ─── Modül 2 — Access Channel (4 part) ──────────────────────────────────── */
function Modul2Adimi({ onTamam }) {
  const m2 = batarya.module2;
  const [yanitlar, setYanitlar] = useState({});
  const [siralamalar, setSiralamalar] = useState({});
  const [hata, setHata] = useState('');
  const [gonderiliyor, setGonderiliyor] = useState(false);

  const likertYaz = (no, v) => setYanitlar((p) => ({ ...p, [no]: v }));

  const gonder = async () => {
    setGonderiliyor(true); setHata('');
    try {
      const ham = { ...yanitlar, siralamalar };
      await bataryaSonucKaydet('m2_access', ham, m2Skorla(yanitlar));
      await onTamam();
    } catch (e) { setHata('Could not save. Please try again.'); setGonderiliyor(false); }
  };

  return (
    <BolumKabuk baslik={`${m2.baslik} · ${m2.ustBaslik}`} giris={m2.giris}>
      {/* Part 1 — kanal başlıkları görünür (vividness bölümü; karışık-sıra kuralı yalnız Likert kişilik bölümleri için) */}
      <h3 style={araBaslikStil}>{m2.part1.baslik}</h3>
      <p style={govdeStil}>{m2.part1.giris}</p>
      <OlcekLegend olcek={m2.part1.olcek} />
      {m2.part1.kanallar.map((kanal) => (
        <div key={kanal.ad} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ ...eyebrowStil, color: 'var(--ink-muted)' }}>{kanal.ad}{kanal.opsiyonel ? ' — optional' : ''}</span>
          {kanal.maddeler.map((m) => (
            <LikertSatir key={m.no} metin={m.metin} deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
          ))}
        </div>
      ))}

      <h3 style={araBaslikStil}>{m2.part2.baslik}</h3>
      <p style={govdeStil}>{m2.part2.giris}</p>
      <OlcekLegend olcek={m2.part2.olcek} />
      {m2.part2.maddeler.map((m) => (
        <LikertSatir key={m.no} metin={m.metin} deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
      ))}

      <h3 style={araBaslikStil}>{m2.part3.baslik}</h3>
      <p style={govdeStil}>{m2.part3.giris}</p>
      {m2.part3.siralamaSorulari.map((soru) => (
        <SiralamaSorusu key={soru.no} soru={soru} secim={siralamalar[soru.no] || []}
          onDegis={(dizi) => setSiralamalar((p) => ({ ...p, [soru.no]: dizi }))} />
      ))}

      <h3 style={araBaslikStil}>{m2.part4.baslik}</h3>
      <p style={govdeStil}>{m2.part4.giris}</p>
      <OlcekLegend olcek={m2.part4.olcek} />
      {m2.part4.maddeler.map((m) => (
        <LikertSatir key={m.no} metin={m.metin} deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
      ))}

      <IleriButon onClick={gonder} disabled={gonderiliyor} etiket={gonderiliyor ? 'Saving…' : 'Save & continue'} />
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

/* ─── Modül 3 — Emotional Profile (Part 1 karışık; Part 4 opsiyonel) ─────── */
function Modul3Adimi({ onTamam }) {
  const m3 = batarya.module3;
  const p1Maddeler = useMemo(
    () => karistir(m3.part1.sistemler.flatMap((s) => s.maddeler), 64003),
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
      await bataryaSonucKaydet('m3_emotional', ham, m3Skorla(yanitlar));
      await onTamam();
    } catch (e) { setHata('Could not save. Please try again.'); setGonderiliyor(false); }
  };

  return (
    <BolumKabuk baslik={`${m3.baslik} · ${m3.ustBaslik}`} giris={m3.giris}>
      {/* Part 1 — karışık sıra, sistem başlıkları YOK (adminNote kuralı) */}
      <h3 style={araBaslikStil}>{m3.part1.baslik}</h3>
      <p style={govdeStil}>{m3.part1.giris}</p>
      <OlcekLegend olcek={m3.part1.olcek} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {p1Maddeler.map((m, i) => (
          <LikertSatir key={m.no} sira={i + 1} metin={m.metin} deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
        ))}
      </div>

      <h3 style={araBaslikStil}>{m3.part2.baslik}</h3>
      <p style={govdeStil}>{m3.part2.giris}</p>
      <OlcekLegend olcek={m3.part2.olcek} />
      {m3.part2.maddeler.map((m) => (
        <LikertSatir key={m.no} metin={m.metin} deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
      ))}

      <h3 style={araBaslikStil}>{m3.part3.baslik}</h3>
      <p style={govdeStil}>{m3.part3.giris}</p>
      <OlcekLegend olcek={m3.part3.olcek} />
      {m3.part3.maddeler.map((m) => (
        <LikertSatir key={m.no} metin={m.metin} deger={yanitlar[m.no]} onSec={(v) => likertYaz(m.no, v)} />
      ))}

      {/* Part 4 — opsiyonel, profil skoruna girmez */}
      <h3 style={araBaslikStil}>{m3.part4.baslik}</h3>
      <p style={govdeStil}>{m3.part4.giris}</p>
      {!p4Atla ? (
        <>
          <button onClick={() => setP4Atla(true)} style={{ ...ikincilButonStil, alignSelf: 'flex-start' }}>
            Skip this part
          </button>
          <OlcekLegend baslik={m3.part4.olcekBaslik} olcek={m3.part4.olcek} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {m3.part4.duygular.map((duygu) => (
              <KonforSatiri key={duygu} duygu={duygu} sutunlar={m3.part4.sutunlar}
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

/* ─── Modül 4 Form B (tekrarlanabilir) ───────────────────────────────────── */
function FormBAdimi({ onTamam, onVazgec }) {
  const fb = batarya.module4.formB;
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
      await bataryaSonucKaydet('m4_formB', ham, m4bSkorla(yanitlar));
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

/* ─── Tamam ekranı ───────────────────────────────────────────────────────── */
function TamamEkrani({ formBSayisi, onFormB }) {
  return (
    <div style={{ ...kutuStil, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2 style={{ ...araBaslikStil, fontSize: '1.3rem' }}>Thank you — the core battery is complete.</h2>
      <p style={govdeStil}>
        Your profile is recorded. From here, Form B is the repeatable part: fill it in right after a
        specific scene, monologue, or performance, while it&apos;s fresh — we return to it throughout the work.
      </p>
      {formBSayisi > 0 && (
        <p style={{ ...altYaziStil }}>Form B entries so far: {formBSayisi}</p>
      )}
      <IleriButon onClick={onFormB} etiket="Rate a performance (Form B) →" />
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
