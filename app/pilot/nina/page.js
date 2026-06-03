// app/pilot/nina/page.js
// ITC Actor's Gym — PILOT viewer (Nina Mihaylovna Zareçnaya / Çehov · Martı)
//
// İZOLASYON: Bu sayfa karakterGetir/karakter listesi/kulis'ten BAĞIMSIZ.
// SPEC: SPEC_nina-nihai-sayfa.md (3 Haz 2026) — taranabilir sayfa: her kart
//   özet gelir, dokununca açılır. Tercihler ayrı liste DEĞİL; ait olduğu
//   sahne/düğüm kartının içine gömülü. Üç bölüm: 01 Yazar / 02 Yaşam Çizgisi
//   / 03 Modül III Köprüsü. Eşik üstte katlanır şerit.
//
// KANON: Karar 48 — Çatallı Boşluk Yürüyüşü. b2 yog-3 tam ekran (overlay
//   BoslukYuruyusu, dokunulmaz). b1 yog-2 kart-içi çatal (sayfadan çıkmaz).
//   b3 yog-1 yazılı boşluk.

'use client';

import { useState, useEffect } from 'react';
import { nina } from '../../../data/pilot/nina';
import BoslukYuruyusu from '../../../components/BoslukYuruyusu';
import { supabase } from '../../lib/supabase';

const TON = 'var(--accent)';
const ONAY = 'var(--uyari)';
const KARAKTER_ID = 'nina';
const ROMA = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V' };

// ─── Küçük rozetler ─────────────────────────────────────────
function KaynakRozet({ kaynak }) {
  const renk = kaynak === 'metin' ? 'var(--onay)' : 'var(--ink-muted)';
  return (
    <span style={{
      fontFamily: 'var(--font-body), sans-serif',
      fontWeight: 200,
      fontSize: '0.55rem',
      letterSpacing: '0.2em',
      color: renk,
      textTransform: 'uppercase',
      padding: '0.15rem 0.5rem',
      border: `1px solid color-mix(in srgb, ${renk} 33%, transparent)`,
    }}>{kaynak}</span>
  );
}

function OnayRozet({ durum }) {
  if (!durum || durum === 'net') return null;
  return (
    <span style={{
      fontFamily: 'var(--font-body), sans-serif',
      fontWeight: 300,
      fontSize: '0.55rem',
      letterSpacing: '0.25em',
      color: ONAY,
      textTransform: 'uppercase',
      padding: '0.15rem 0.55rem',
      border: `1px solid color-mix(in srgb, ${ONAY} 50%, transparent)`,
      backgroundColor: 'var(--uyari-bg)',
    }}>⚠ {durum}</span>
  );
}

function TravmaEtiket({ travma }) {
  // KANON Karar 21: kategori/seviye sayı UI'da GÖRÜNMEZ — küçük etiket + topraklanma önerisi
  if (!travma) return null;
  const { seviye = 0, durum } = travma;
  if (seviye === 0 && (!durum || durum === 'net')) return null;
  const label = seviye >= 2 ? 'Hassas an' : 'Duygu yükü';
  return (
    <span style={{
      fontFamily: 'var(--font-body), sans-serif',
      fontWeight: 300,
      fontSize: '0.55rem',
      letterSpacing: '0.25em',
      color: ONAY,
      textTransform: 'uppercase',
      padding: '0.15rem 0.55rem',
      border: `1px solid color-mix(in srgb, ${ONAY} 40%, transparent)`,
      backgroundColor: 'var(--uyari-bg)',
    }}>{label}</span>
  );
}

function TopraklanmaNotu({ travma }) {
  if (!travma) return null;
  const { seviye = 0, not } = travma;
  if (seviye < 2) return null;
  return (
    <div style={{
      padding: '0.7rem 0.95rem',
      border: `1px solid color-mix(in srgb, ${ONAY} 30%, transparent)`,
      backgroundColor: 'var(--uyari-bg)',
    }}>
      <span style={{
        fontFamily: 'var(--font-body), sans-serif',
        fontWeight: 300,
        fontSize: '0.55rem',
        letterSpacing: '0.3em',
        color: ONAY,
        textTransform: 'uppercase',
      }}>Topraklanma önerilir</span>
      {not && (
        <p style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 200,
          fontSize: '0.74rem',
          color: 'var(--ink-muted)',
          lineHeight: 1.65,
          margin: '0.35rem 0 0 0',
          fontStyle: 'italic',
        }}>{not}</p>
      )}
    </div>
  );
}

function Etiketli({ e, children, italic }) {
  return (
    <div>
      <span style={{
        fontFamily: 'var(--font-body), sans-serif',
        fontWeight: 200,
        fontSize: '0.55rem',
        letterSpacing: '0.3em',
        color: 'var(--ink-muted)',
        textTransform: 'uppercase',
      }}>{e}</span>
      <p style={{
        fontFamily: italic ? 'var(--font-display), serif' : 'var(--font-body), sans-serif',
        fontStyle: italic ? 'italic' : 'normal',
        fontWeight: italic ? 300 : 200,
        fontSize: italic ? '0.92rem' : '0.82rem',
        color: 'var(--ink-soft)',
        lineHeight: 1.7,
        margin: '0.2rem 0 0 0',
      }}>{children}</p>
    </div>
  );
}

// ─── Katlanır başlık (kapalı başlar) ─────────────────────────
function KatlanirBaslik({ numara, baslik, alt, sayac, acik, onToggle, children }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: acik ? '1rem' : 0 }}>
      <button
        onClick={onToggle}
        style={{
          background: 'none',
          border: 'none',
          padding: '0.85rem 0',
          borderBottom: '1px solid var(--rule)',
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.9rem',
          cursor: 'pointer',
          textAlign: 'left',
          width: '100%',
        }}
      >
        {numara && (
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            color: TON,
            textTransform: 'uppercase',
          }}>{numara}</span>
        )}
        <span style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '1.35rem',
          color: 'var(--ink)',
          lineHeight: 1.2,
          flex: 1,
        }}>{baslik}</span>
        {sayac && (
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.7rem',
            color: 'var(--ink-muted)',
            letterSpacing: '0.1em',
          }}>{sayac}</span>
        )}
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '0.9rem',
          color: 'var(--ink-muted)',
          transform: acik ? 'rotate(90deg)' : 'rotate(0)',
          transition: 'transform 0.2s ease',
          display: 'inline-block',
        }}>›</span>
      </button>
      {alt && acik && (
        <p style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 200,
          fontSize: '0.82rem',
          color: 'var(--ink-muted)',
          lineHeight: 1.7,
          margin: 0,
          fontStyle: 'italic',
        }}>{alt}</p>
      )}
      {acik && <div>{children}</div>}
    </section>
  );
}

// Açık-bölüm başlık (üst-seviye, hep açık) — 02 Yaşam Çizgisi + 03 Modül III için
function AcikBaslik({ numara, baslik, alt, children }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{
        padding: '0.85rem 0',
        borderBottom: '1px solid var(--rule)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.35rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem' }}>
          {numara && (
            <span style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.35em',
              color: TON,
              textTransform: 'uppercase',
            }}>{numara}</span>
          )}
          <span style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '1.35rem',
            color: 'var(--ink)',
            lineHeight: 1.2,
          }}>{baslik}</span>
        </div>
        {alt && (
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.82rem',
            color: 'var(--ink-muted)',
            lineHeight: 1.7,
            margin: 0,
            fontStyle: 'italic',
          }}>{alt}</p>
        )}
      </div>
      {children}
    </section>
  );
}

// ─── Ana sayfa ─────────────────────────────────────────────
export default function NinaPilotSayfasi() {
  // Yürüyüş state — hem boşluk (yog-3 b2) hem sahne (S5/S7/S8) için tek motor
  const [yuruyusBoslukId, setYuruyusBoslukId] = useState(null);   // 'b2'
  const [yuruyusSahneNo, setYuruyusSahneNo] = useState(null);     // 5 | 7 | 8
  const [ilkYuruyusMu, setIlkYuruyusMu] = useState(true);

  // Katlanır bölümler (hepsi kapalı başlar — SPEC §0)
  const [acikEsik, setAcikEsik] = useState(false);
  const [acikDogrular, setAcikDogrular] = useState(false);
  const [acikOnce, setAcikOnce] = useState(false);
  const [acikSahne, setAcikSahne] = useState({});  // { 1: false, 2: false, ... }
  const [acikBosluk, setAcikBosluk] = useState({});  // { b1: false, b3: false }

  // Mühürlenmiş seçimler (Supabase'den okunur)
  const [oznelSabitler, setOznelSabitler] = useState({});  // { sahne_no: [{ anahtar, ozet, muhur, boslukNo }] }
  const [tercihSecimi, setTercihSecimi] = useState({});     // { 't1': 'A', 't2': 'B', ... }
  const [b1Secim, setB1Secim] = useState(null);             // 'A'|'B'|'C'|null
  const [anSecimleri, setAnSecimleri] = useState({});       // { 's1-a1': 'A', ... } — çatal an seçimleri (SPEC an-blogu)
  const [anYazmalari, setAnYazmalari] = useState({});       // { 's2-a1': 'metin', ... } — yazma an metinleri
  const [yenile, setYenile] = useState(0);

  // Tüm an id'lerini sahnelerden topla — Supabase row ayrımı için
  const tumAnIdleri = (() => {
    const set = new Set();
    for (const s of nina.sahnelerWorkbook) {
      for (const an of (s.anlar || [])) set.add(an.id);
    }
    return set;
  })();

  // Supabase'den oznel_sabitler oku — mount + yürüyüş kapanışı + her seçim
  useEffect(() => {
    let iptal = false;
    async function yukle() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user || iptal) return;
        const { data, error } = await supabase
          .from('oznel_sabitler')
          .select('catal_anahtar, secilen_dal, ozet_metni, muhur_metni, birlesim_sahne_no, bosluk_no')
          .eq('karakter_id', KARAKTER_ID);
        if (iptal || error) return;

        const sahneMap = {};
        const tercihMap = {};
        const anSecMap = {};
        const anYazMap = {};
        let b1Dal = null;

        for (const row of (data || [])) {
          // Tercih kayıtları (bosluk_no = t1..t5)
          if (typeof row.bosluk_no === 'string' && row.bosluk_no.startsWith('t')) {
            tercihMap[row.bosluk_no] = row.secilen_dal;
          }
          // b1 kart-içi çatal
          if (row.bosluk_no === 'b1') {
            b1Dal = row.secilen_dal;
          }
          // An kayıtları (sahne anları — SPEC an-blogu)
          if (tumAnIdleri.has(row.bosluk_no)) {
            if (row.secilen_dal) anSecMap[row.bosluk_no] = row.secilen_dal;
            else if (row.muhur_metni) anYazMap[row.bosluk_no] = row.muhur_metni;
          }
          // Sahne hatırlatması
          if (row.birlesim_sahne_no) {
            const sn = row.birlesim_sahne_no;
            if (!sahneMap[sn]) sahneMap[sn] = [];
            sahneMap[sn].push({
              anahtar: row.catal_anahtar,
              ozet: row.ozet_metni,
              muhur: row.muhur_metni,
              boslukNo: row.bosluk_no,
              secilenDal: row.secilen_dal,
            });
          }
        }
        // kayip='yasiyor' → kayip2 varsa kayip atla (b2 yürüyüş döngü mantığı)
        for (const sn of Object.keys(sahneMap)) {
          const list = sahneMap[sn];
          const kayipVar = list.find(s => s.anahtar === 'kayip2');
          if (kayipVar) sahneMap[sn] = list.filter(s => s.anahtar !== 'kayip');
        }

        if (!iptal) {
          setOznelSabitler(sahneMap);
          setTercihSecimi(tercihMap);
          setB1Secim(b1Dal);
          setAnSecimleri(anSecMap);
          setAnYazmalari(anYazMap);
        }
      } catch (e) {
        console.log('oznel_sabitler exception:', e);
      }
    }
    yukle();
    return () => { iptal = true; };
  }, [yuruyusBoslukId, yenile]);

  // Upsert helper — tüm yazımlar tek noktadan
  async function sabitYaz({ bosluk_no, catal_anahtar, secilen_dal, ozet_metni, muhur_metni, birlesim_sahne_no }) {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        // Anonim — sessizce atla, UI'da lokal seçim göster (yenilemeyle silinir)
        return;
      }
      const { error } = await supabase.from('oznel_sabitler').upsert({
        kullanici_id: user.id,
        karakter_id: KARAKTER_ID,
        bosluk_no,
        catal_anahtar,
        secilen_dal,
        ozet_metni,
        muhur_metni,
        birlesim_sahne_no,
      }, { onConflict: 'kullanici_id,karakter_id,bosluk_no,catal_anahtar' });
      if (error) console.log('sabitYaz hata:', error);
      setYenile(n => n + 1);
    } catch (e) {
      console.log('sabitYaz exception:', e);
    }
  }

  // Tercih seç
  function tercihSec(t, harf, birlesimSahneNo) {
    setTercihSecimi(prev => ({ ...prev, [t.id]: harf }));
    sabitYaz({
      bosluk_no: t.id,
      catal_anahtar: t.id,
      secilen_dal: harf,
      ozet_metni: `${t.karar} — ${harf}: ${t[harf]}`,
      birlesim_sahne_no: birlesimSahneNo,
    });
  }

  // b1 kart-içi çatal seç
  function b1Sec(secenek) {
    const cataly = nina.boslukSet[0].kartCatali;
    setB1Secim(secenek.dal);
    sabitYaz({
      bosluk_no: 'b1',
      catal_anahtar: cataly.anahtar,
      secilen_dal: secenek.dal,
      muhur_metni: secenek.oznelSabit,
      ozet_metni: `${secenek.baslik} — ${secenek.aciklama}`,
      birlesim_sahne_no: cataly.birlesimSahneNo,
    });
  }

  // An — çatal şıkı seç (SPEC an-blogu)
  function anSec(an, secenek) {
    setAnSecimleri(prev => ({ ...prev, [an.id]: secenek.dal }));
    sabitYaz({
      bosluk_no: an.id,
      catal_anahtar: an.id,
      secilen_dal: secenek.dal,
      muhur_metni: secenek.oznelSabit,
      ozet_metni: `${secenek.baslik || ''} — ${secenek.aciklama || ''}`.trim(),
      birlesim_sahne_no: an.birlesimSahneNo,
    });
  }

  // An — yazma metni mühürle (blur'da çağrılır)
  function anYaz(an, metin) {
    setAnYazmalari(prev => ({ ...prev, [an.id]: metin }));
    if (!metin || metin.trim().length === 0) return;
    sabitYaz({
      bosluk_no: an.id,
      catal_anahtar: an.id,
      secilen_dal: null,
      muhur_metni: metin,
      ozet_metni: metin,
      birlesim_sahne_no: an.birlesimSahneNo,
    });
  }

  // Aktif yürüyüş kaynağı — boşluk veya sahne (sahneyi sarmalayıp BoslukYuruyusu'na ver)
  const aktifBosluk = (() => {
    if (yuruyusBoslukId) {
      return nina.boslukSet.find(b => b.id === yuruyusBoslukId) || null;
    }
    if (yuruyusSahneNo) {
      const s = nina.sahnelerWorkbook.find(x => x.no === yuruyusSahneNo);
      if (!s || !s.yuruyus) return null;
      // BoslukYuruyusu prop kontratını sahne için sarmala (id + birlesimSahneNo + yuruyus)
      return {
        id: `sahne-${s.no}`,
        ad: `Sahne ${s.no}`,
        birlesimSahneNo: s.no,
        yuruyus: s.yuruyus,
      };
    }
    return null;
  })();

  // Tercih → ait kart (gömülecek yer)
  const tercihler = nina.tercihler || [];
  const tercihMap = {};
  for (const t of tercihler) tercihMap[t.id] = t;

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-base)',
      color: 'var(--ink)',
    }}>
      <article style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: '3rem 2rem 5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
      }}>

        {/* Pilot uyarı bandı */}
        <div style={{
          padding: '0.9rem 1.2rem',
          border: '1px dashed var(--rule)',
          backgroundColor: 'var(--bg-elevated)',
        }}>
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 300,
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            color: TON,
            textTransform: 'uppercase',
          }}>◇ Pilot · Üretici Çıktısı · İzole Görünüm</span>
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.78rem',
            color: 'var(--ink-muted)',
            lineHeight: 1.7,
            margin: '0.4rem 0 0 0',
          }}>
            Bu sayfa <code>data/pilot/nina.js</code> dosyasını render eder. Production karakter pipeline'ından (Hamlet/Willy/Macbeth/Biff) <strong>BAĞIMSIZ</strong>. Entegrasyon: ayrı karar.
          </p>
        </div>

        {/* Künye */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.65rem',
            letterSpacing: '0.4em',
            color: TON,
            textTransform: 'uppercase',
          }}>Pilot · Katman 1</span>
          <h1 style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(2.2rem, 6vw, 3.4rem)',
            color: 'var(--ink)',
            margin: 0,
            lineHeight: 1.1,
          }}>{nina.ad}</h1>
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.8rem',
            color: 'var(--ink-soft)',
            margin: 0,
            letterSpacing: '0.05em',
          }}>
            {nina.yazar} · <em>{nina.oyun}</em> · {nina.yazimYili} · {nina.telifDurumu}
          </p>
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.72rem',
            color: 'var(--ink-muted)',
            margin: 0,
            fontStyle: 'italic',
          }}>Çeviri referansı: {nina.ceviri}</p>
        </header>

        {/* Eşik (katlanır şerit) */}
        <KatlanirBaslik
          baslik="Eşik"
          alt="Kalibrasyondan bu sayfaya nasıl geçiyorsun? Bir nefes, bir niyet."
          acik={acikEsik}
          onToggle={() => setAcikEsik(v => !v)}
        >
          <p style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontSize: '0.95rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.75,
            margin: 0,
          }}>
            Bu sayfa Çehov'un yazdığını ve yazmadığını yan yana koyar. Hız yok; istediğin yerden başla. Sahnelere dokun, açılırlar. İki yıllık boşluk ileride bekler — orada zaman senin.
          </p>
        </KatlanirBaslik>

        {/* 01 · Yazarın Çerçevesi (katlanır, tek çerçeve, küçük font — SPEC §6) */}
        <KatlanirBaslik
          numara="01"
          baslik="Yazarın Çerçevesi"
          alt="Metnin sana verdiği değiştirilemez doğrular — her madde kaynakla etiketli (metin ya da çıkarım)."
          sayac={`${nina.dogrular.length} doğru`}
          acik={acikDogrular}
          onToggle={() => setAcikDogrular(v => !v)}
        >
          <div style={{
            border: '1px solid var(--rule)',
            backgroundColor: 'var(--bg-elevated)',
            padding: '0.85rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.45rem',
          }}>
            {nina.dogrular.map((d, i) => (
              <div key={d.id} style={{
                display: 'flex',
                gap: '0.65rem',
                alignItems: 'flex-start',
                paddingTop: i === 0 ? 0 : '0.45rem',
                borderTop: i === 0 ? 'none' : '1px solid var(--rule)',
              }}>
                <KaynakRozet kaynak={d.kaynak} />
                <span style={{
                  fontFamily: 'var(--font-display), serif',
                  fontSize: '0.82rem',
                  color: 'var(--ink)',
                  lineHeight: 1.55,
                  flex: 1,
                }}>{d.metin}</span>
              </div>
            ))}
          </div>
        </KatlanirBaslik>

        {/* 02 · Yaşam Çizgisi (açık, kartlar özet→aç) */}
        <AcikBaslik
          numara="02"
          baslik="Yaşam Çizgisi"
          alt="Oyun öncesinden finale — sahneler ve görünmeyen boşluklar tek kronolojik akışta. Karta dokun, açılır."
        >
          <YasamCizgisi
            nina={nina}
            tercihMap={tercihMap}
            oznelSabitler={oznelSabitler}
            tercihSecimi={tercihSecimi}
            b1Secim={b1Secim}
            anSecimleri={anSecimleri}
            anYazmalari={anYazmalari}
            acikSahne={acikSahne}
            setAcikSahne={setAcikSahne}
            acikBosluk={acikBosluk}
            setAcikBosluk={setAcikBosluk}
            acikOnce={acikOnce}
            setAcikOnce={setAcikOnce}
            onTercihSec={tercihSec}
            onB1Sec={b1Sec}
            onAnSec={anSec}
            onAnYaz={anYaz}
            onYuru={(b) => { setIlkYuruyusMu(true); setYuruyusBoslukId(b.id); }}
            onSahneYuru={(s) => { setIlkYuruyusMu(true); setYuruyusSahneNo(s.no); }}
          />
        </AcikBaslik>

        {/* 03 · Modül III Köprüsü */}
        <AcikBaslik
          numara="03"
          baslik="Modül III Köprüsü"
          alt="Burada mühürlediklerin, sesli Yolculuk'ta senin özgün akışını oluşturacak."
        >
          <ModulIIIKoprusu />
        </AcikBaslik>

        {/* Meta (üretici şeffaflığı) */}
        <section style={{
          border: '1px dashed var(--rule)',
          padding: '1.1rem 1.3rem',
          backgroundColor: 'var(--bg-elevated)',
        }}>
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 300,
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: TON,
            textTransform: 'uppercase',
          }}>Üretici Meta</span>
          <dl style={{
            marginTop: '0.6rem',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '0.3rem 0.9rem',
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.78rem',
          }}>
            <dt style={{ color: 'var(--ink-muted)' }}>Katman:</dt>
            <dd style={{ color: 'var(--ink-soft)', margin: 0 }}>{nina._meta.katman}</dd>
            <dt style={{ color: 'var(--ink-muted)' }}>Üretici:</dt>
            <dd style={{ color: 'var(--ink-soft)', margin: 0 }}>{nina._meta.uretici}</dd>
            <dt style={{ color: 'var(--ink-muted)' }}>İnsan kararı bekleyen:</dt>
            <dd style={{ color: 'var(--ink-soft)', margin: 0 }}>{nina._meta.insanKarariBekleyen.join(' · ')}</dd>
            <dt style={{ color: 'var(--ink-muted)' }}>Uydurma kontrolü:</dt>
            <dd style={{ color: 'var(--ink-soft)', margin: 0 }}>{nina._meta.uydurmaKontrolu}</dd>
            <dt style={{ color: 'var(--ink-muted)' }}>Sonraki adım:</dt>
            <dd style={{ color: 'var(--ink-soft)', margin: 0 }}>{nina._meta.sonrakiAdim}</dd>
          </dl>
        </section>

      </article>

      {/* Tam ekran yürüyüş overlay — boşluk (yog-3 b2) veya sahne (S5/S7/S8) — DOKUNULMAZ */}
      {aktifBosluk && (
        <BoslukYuruyusu
          karakterId={KARAKTER_ID}
          bosluk={aktifBosluk}
          ilkYuruyusMu={ilkYuruyusMu}
          onKapat={() => {
            setYuruyusBoslukId(null);
            setYuruyusSahneNo(null);
            setIlkYuruyusMu(false);
            setYenile(n => n + 1);
          }}
        />
      )}
    </main>
  );
}

// ─── Yaşam Çizgisi — tek timeline, özet→aç kartlar ──────────
function YasamCizgisi({
  nina, tercihMap, oznelSabitler, tercihSecimi, b1Secim,
  anSecimleri, anYazmalari,
  acikSahne, setAcikSahne, acikBosluk, setAcikBosluk, acikOnce, setAcikOnce,
  onTercihSec, onB1Sec, onAnSec, onAnYaz, onYuru, onSahneYuru,
}) {
  // Birleşik dizi (sira'ya göre)
  const dizi = [];
  dizi.push({ sira: 0, tip: 'once', perde: null });
  for (const s of nina.sahnelerWorkbook) {
    dizi.push({ sira: s.no * 10, tip: 'sahne', perde: s.perde, s });
  }
  for (const b of nina.boslukSet) {
    let sira, perde;
    if (b.id === 'b1') { sira = 5; perde = 1; }
    else if (b.id === 'b2') { sira = 75; perde = 3; }
    else if (b.id === 'b3') { sira = 85; perde = 4; }
    else { sira = 999; perde = 4; }
    dizi.push({ sira, tip: 'bosluk', perde, b });
  }
  dizi.sort((a, b) => a.sira - b.sira);

  const temaMap = {};
  for (const p of (nina.perdeTemalari || [])) temaMap[p.perde] = p;

  // Hangi tercih hangi sahneye gömülüyor (SPEC §4 tablo)
  const sahneTercihMap = {
    2: ['t2'],
    4: ['t3'],
    8: ['t1', 't4'],
  };

  const cikti = [];
  let oncekiPerde = null;
  for (const dgm of dizi) {
    if (dgm.perde && dgm.perde !== oncekiPerde) {
      const tema = temaMap[dgm.perde];
      cikti.push(<FazAyrac key={`p-${dgm.perde}`} perde={dgm.perde} tema={tema?.tema} />);
      oncekiPerde = dgm.perde;
    }
    if (dgm.tip === 'once') {
      cikti.push(
        <OnceDugum
          key="once"
          oyunOncesi={nina.oyunOncesi}
          tercih={tercihMap['t5']}
          tercihSecimi={tercihSecimi}
          acik={acikOnce}
          onToggle={() => setAcikOnce(v => !v)}
          onTercihSec={onTercihSec}
        />
      );
    } else if (dgm.tip === 'sahne') {
      const tercihIds = sahneTercihMap[dgm.s.no] || [];
      cikti.push(
        <SahneDugum
          key={`s-${dgm.s.no}`}
          s={dgm.s}
          sabitler={oznelSabitler[dgm.s.no]}
          tercihler={tercihIds.map(id => tercihMap[id]).filter(Boolean)}
          tercihSecimi={tercihSecimi}
          anSecimleri={anSecimleri}
          anYazmalari={anYazmalari}
          acik={!!acikSahne[dgm.s.no]}
          onToggle={() => setAcikSahne(prev => ({ ...prev, [dgm.s.no]: !prev[dgm.s.no] }))}
          onTercihSec={onTercihSec}
          onAnSec={onAnSec}
          onAnYaz={onAnYaz}
          onSahneYuru={onSahneYuru}
        />
      );
    } else {
      const b = dgm.b;
      if (b.yogunluk === 3) {
        cikti.push(
          <BoslukDugumYog3
            key={`b-${b.id}`}
            b={b}
            onYuru={() => onYuru(b)}
          />
        );
      } else if (b.yogunluk === 2) {
        cikti.push(
          <BoslukDugumYog2
            key={`b-${b.id}`}
            b={b}
            secim={b1Secim}
            acik={!!acikBosluk[b.id]}
            onToggle={() => setAcikBosluk(prev => ({ ...prev, [b.id]: !prev[b.id] }))}
            onSec={onB1Sec}
          />
        );
      } else {
        cikti.push(
          <BoslukDugumYog1
            key={`b-${b.id}`}
            b={b}
            acik={!!acikBosluk[b.id]}
            onToggle={() => setAcikBosluk(prev => ({ ...prev, [b.id]: !prev[b.id] }))}
          />
        );
      }
    }
  }

  return <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>{cikti}</div>;
}

function FazAyrac({ perde, tema }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '0.5rem 0 0.2rem 0',
      margin: '0.4rem 0 0 0',
    }}>
      <span style={{
        fontFamily: 'var(--font-body), sans-serif',
        fontWeight: 300,
        fontSize: '0.6rem',
        letterSpacing: '0.35em',
        color: TON,
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}>
        {ROMA[perde] || perde}. Perde
      </span>
      <span style={{ flex: 1, height: '1px', backgroundColor: 'var(--rule)' }} />
      {tema && (
        <span style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '0.78rem',
          color: 'var(--ink-muted)',
          textAlign: 'right',
          maxWidth: '55%',
        }}>{tema}</span>
      )}
    </div>
  );
}

// ─── Özet→aç düğüm kart başlığı ─────────────────────────────
function KartBaslik({ acik, onToggle, rozet, baslik, ozet, sagBlok }) {
  return (
    <button
      onClick={onToggle}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap' }}>
        {rozet}
        <span style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '1rem',
          color: 'var(--ink)',
          flex: 1,
        }}>{baslik}</span>
        {sagBlok}
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '0.85rem',
          color: 'var(--ink-muted)',
          transform: acik ? 'rotate(90deg)' : 'rotate(0)',
          transition: 'transform 0.2s ease',
          display: 'inline-block',
        }}>›</span>
      </div>
      {ozet && !acik && (
        <p style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 200,
          fontSize: '0.78rem',
          color: 'var(--ink-soft)',
          lineHeight: 1.65,
          margin: 0,
        }}>{ozet}</p>
      )}
    </button>
  );
}

// ─── Önce düğümü (oyunOncesi + t5 gömülü) ────────────────────
function OnceDugum({ oyunOncesi, tercih, tercihSecimi, acik, onToggle, onTercihSec }) {
  return (
    <div style={{
      border: '1px solid var(--rule)',
      backgroundColor: 'var(--bg-elevated)',
      padding: '0.9rem 1.1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: acik ? '0.9rem' : 0,
    }}>
      <KartBaslik
        acik={acik}
        onToggle={onToggle}
        rozet={<Rozet renk="var(--ink-muted)">Öncesi</Rozet>}
        baslik="Oyun öncesi yaşam"
        ozet="Çehov'un metne girmeden bıraktığı katman — anne ölümü, miras kaybı, baba evi."
      />
      {acik && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <Etiket>Olaylar</Etiket>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {oyunOncesi.olaylar.map(o => (
                <div key={o.id} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                  <KaynakRozet kaynak={o.kaynak} />
                  <div style={{ flex: 1 }}>
                    <span style={{
                      fontFamily: 'var(--font-display), serif',
                      fontStyle: 'italic',
                      fontSize: '0.92rem',
                      color: 'var(--ink)',
                    }}>{o.baslik}</span>
                    <p style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: 200,
                      fontSize: '0.78rem',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.7,
                      margin: '0.2rem 0 0 0',
                    }}>{o.metin}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Etiket>İlişkiler</Etiket>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {oyunOncesi.iliskiler.map((il, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                  <KaynakRozet kaynak={il.kaynak} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                      <span style={{
                        fontFamily: 'var(--font-display), serif',
                        fontStyle: 'italic',
                        fontSize: '0.92rem',
                        color: 'var(--ink)',
                      }}>{il.kisi}</span>
                      <span style={{
                        fontFamily: 'var(--font-body), sans-serif',
                        fontWeight: 200,
                        fontSize: '0.6rem',
                        letterSpacing: '0.2em',
                        color: TON,
                        textTransform: 'uppercase',
                      }}>{il.tip}</span>
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: 200,
                      fontSize: '0.78rem',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.7,
                      margin: '0.2rem 0 0 0',
                    }}>{il.metin}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {tercih && (
            <TercihBloku
              t={tercih}
              secilen={tercihSecimi[tercih.id]}
              onSec={(harf) => onTercihSec(tercih, harf, null)}
            />
          )}
        </div>
      )}
    </div>
  );
}

// ─── Sahne düğümü (özet→aç, tercih + sabit hatırlatma + anlar + yürüyüş gömülü) ─
function SahneDugum({ s, sabitler, tercihler, tercihSecimi, anSecimleri, anYazmalari, acik, onToggle, onTercihSec, onAnSec, onAnYaz, onSahneYuru }) {
  // Sahne 4'te t3 için özel not: "bu seçim Sahne 8'e kadar uzanır"
  const t3Notu = s.no === 4;
  // SPEC sahneyi-yuru: yürüyüş tipleri
  const yuruyusVar = (s.sahneTipi === 'yuruyus' || s.sahneTipi === 'karma') && s.yuruyus;
  const sadeAk = s.sahneTipi === 'yuruyus';        // S5, S7 — icsel/yuk/replikIzi gizlenir (yürüyüş kapsar)
  return (
    <div style={{
      border: '1px solid var(--rule)',
      padding: '0.95rem 1.15rem',
      display: 'flex',
      flexDirection: 'column',
      gap: acik ? '0.85rem' : 0,
      backgroundColor: 'var(--bg-elevated)',
    }}>
      <KartBaslik
        acik={acik}
        onToggle={onToggle}
        rozet={<Rozet renk={TON}>Sahne {s.no}</Rozet>}
        baslik={s.olay}
        ozet={null}
        sagBlok={<TravmaEtiket travma={s.travma} />}
      />
      {acik && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {/* Sabit hatırlatma (b1 → S1, b2 → S8) */}
          {sabitler && sabitler.length > 0 && (
            <div style={{
              padding: '0.7rem 0.95rem',
              border: `1px solid color-mix(in srgb, ${TON} 30%, transparent)`,
              backgroundColor: 'var(--accent-bg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
            }}>
              <span style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 300,
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                color: TON,
                textTransform: 'uppercase',
              }}>Buraya kadar mühürlediklerin</span>
              {sabitler.map((sab, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-display), serif',
                  fontStyle: 'italic',
                  fontSize: '0.9rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  margin: 0,
                }}>{sab.muhur || sab.ozet}</p>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              color: 'var(--ink-muted)',
              textTransform: 'uppercase',
            }}>Perde {s.perde}</span>
            <span style={{ flex: 1 }} />
            <span style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: TON,
              textTransform: 'uppercase',
            }}>Sıcaklık {s.onerilenSicaklik}/5</span>
          </div>

          {/* İçsel/yük/replikIzi — sade yürüyüş sahnelerinde (S5, S7) gizli (yürüyüş kapsar) */}
          {!sadeAk && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Etiketli e="İçsel">{s.icsel}</Etiketli>
              <Etiketli e="Yük">{s.yuk}</Etiketli>
              {s.replikIzi && <Etiketli e="Replik izi" italic>{s.replikIzi}</Etiketli>}
              {s['eşikNotu'] && <Etiketli e="Eşik notu">{s['eşikNotu']}</Etiketli>}
            </div>
          )}

          {/* "Bu sahneyi yürü →" butonu (SPEC sahneyi-yuru — S5/S7/S8) */}
          {yuruyusVar && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {s.yuruyus.girisAciklama && (
                <p style={{
                  fontFamily: 'var(--font-display), serif',
                  fontStyle: 'italic',
                  fontSize: '0.92rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  margin: 0,
                }}>{s.yuruyus.girisAciklama}</p>
              )}
              <button
                onClick={() => onSahneYuru?.(s)}
                style={{
                  alignSelf: 'flex-start',
                  padding: '0.75rem 1.4rem',
                  backgroundColor: TON,
                  border: 'none',
                  color: 'var(--bg-base)',
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 300,
                  fontSize: '0.72rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'opacity 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                Bu sahneyi yürü →
              </button>
            </div>
          )}

          {/* Tercih(ler) — sahne kartına gömülü */}
          {tercihler && tercihler.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {tercihler.map(t => (
                <TercihBloku
                  key={t.id}
                  t={t}
                  secilen={tercihSecimi[t.id]}
                  onSec={(harf) => onTercihSec(t, harf, s.no)}
                  ekstraNot={t.id === 't3' && t3Notu ? 'Bu seçim Sahne 8\'e kadar uzanır.' : null}
                />
              ))}
            </div>
          )}

          {/* An blokları — SPEC an-blogu-iskelet */}
          {s.anlar && s.anlar.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {s.anlar.map(an => (
                <AnBlok
                  key={an.id}
                  an={an}
                  secim={anSecimleri[an.id]}
                  yazma={anYazmalari[an.id]}
                  onSec={(secenek) => onAnSec(an, secenek)}
                  onYaz={(metin) => onAnYaz(an, metin)}
                />
              ))}
            </div>
          )}

          <TopraklanmaNotu travma={s.travma} />
        </div>
      )}
    </div>
  );
}

// ─── Boşluk: yog 3 (sade davet) ─────────────────────────────
function BoslukDugumYog3({ b, onYuru }) {
  return (
    <div style={{
      border: '1px dashed var(--onay)',
      padding: '0.95rem 1.15rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', flexWrap: 'wrap' }}>
        <Rozet renk="var(--onay)">Boşluk</Rozet>
        <span style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '1.05rem',
          color: 'var(--ink)',
        }}>◇ {b.ad}</span>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.55rem',
          letterSpacing: '0.25em',
          color: TON,
          textTransform: 'uppercase',
          marginLeft: 'auto',
        }}>Yoğunluk 3</span>
      </div>
      {b.anlatim && (
        <p style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '0.92rem',
          color: 'var(--ink-soft)',
          lineHeight: 1.7,
          margin: 0,
        }}>{b.anlatim}</p>
      )}
      <button
        onClick={onYuru}
        style={{
          alignSelf: 'flex-start',
          padding: '0.75rem 1.4rem',
          backgroundColor: TON,
          border: 'none',
          color: 'var(--bg-base)',
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.72rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'opacity 0.25s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
      >
        Bu boşluğu yürü →
      </button>
    </div>
  );
}

// ─── Boşluk: yog 2 (özet→aç + kart-içi çatal) ───────────────
function BoslukDugumYog2({ b, secim, acik, onToggle, onSec }) {
  const cataly = b.kartCatali;
  return (
    <div style={{
      border: '1px dashed var(--onay)',
      padding: '0.95rem 1.15rem',
      display: 'flex',
      flexDirection: 'column',
      gap: acik ? '0.85rem' : 0,
    }}>
      <KartBaslik
        acik={acik}
        onToggle={onToggle}
        rozet={<Rozet renk="var(--onay)">Boşluk</Rozet>}
        baslik={`◇ ${b.ad}`}
        ozet={b.once}
        sagBlok={
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 300,
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
            color: TON,
            textTransform: 'uppercase',
          }}>Yoğunluk 2</span>
        }
      />
      {acik && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          <p style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontSize: '0.92rem',
            color: 'var(--ink-soft)',
            lineHeight: 1.7,
            margin: 0,
          }}>{b.anlatim}</p>

          {/* Kart-içi çatal (overlay AÇMAZ) */}
          {cataly && (
            <KartIciCatal cataly={cataly} secim={secim} onSec={onSec} />
          )}

          <div>
            <Etiket>Alt Sorular</Etiket>
            <ul style={{ marginTop: '0.4rem', paddingLeft: '1.2rem' }}>
              {b.altSorular.map((q, i) => (
                <li key={i} style={{
                  fontFamily: 'var(--font-display), serif',
                  fontStyle: 'italic',
                  fontSize: '0.88rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                }}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Boşluk: yog 1 (özet→aç + yazma) ─────────────────────────
function BoslukDugumYog1({ b, acik, onToggle }) {
  return (
    <div style={{
      border: '1px dashed var(--onay)',
      padding: '0.95rem 1.15rem',
      display: 'flex',
      flexDirection: 'column',
      gap: acik ? '0.85rem' : 0,
    }}>
      <KartBaslik
        acik={acik}
        onToggle={onToggle}
        rozet={<Rozet renk="var(--onay)">Boşluk</Rozet>}
        baslik={`◇ ${b.ad}`}
        ozet={b.once}
        sagBlok={
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 300,
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
            color: TON,
            textTransform: 'uppercase',
          }}>Yoğunluk 1</span>
        }
      />
      {acik && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
          <Etiketli e="Önce">{b.once}</Etiketli>
          <Etiketli e="Anlatım" italic>{b.anlatim}</Etiketli>
          <Etiketli e="Sonra">{b.sonra}</Etiketli>
          <Etiketli e="Sentez" italic>{b.sentez}</Etiketli>
          <div>
            <Etiket>Alt Sorular</Etiket>
            <ul style={{ marginTop: '0.4rem', paddingLeft: '1.2rem' }}>
              {b.altSorular.map((q, i) => (
                <li key={i} style={{
                  fontFamily: 'var(--font-display), serif',
                  fontStyle: 'italic',
                  fontSize: '0.88rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                }}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── An Bloğu (sahne içi an — SPEC an-blogu-iskelet) ────────
// Çatal an → KartIciCatal'ı yeniden kullanır.
// Yazma an  → YazmaAni.
function AnBlok({ an, secim, yazma, onSec, onYaz }) {
  if (an.tip === 'catal') {
    const cataly = { ...an, anahtar: an.id };
    return <KartIciCatal cataly={cataly} secim={secim} onSec={onSec} etiket="An" />;
  }
  if (an.tip === 'yazma') {
    return <YazmaAni an={an} deger={yazma} onYaz={onYaz} />;
  }
  return null;
}

// ─── Yazma anı (serbest metin → mühür) ──────────────────────
function YazmaAni({ an, deger, onYaz }) {
  const [yerel, setYerel] = useState(deger || '');
  const [kaydedildi, setKaydedildi] = useState(false);
  useEffect(() => { setYerel(deger || ''); }, [deger]);
  return (
    <div style={{
      padding: '0.85rem 1rem',
      border: `1px solid color-mix(in srgb, ${TON} 25%, transparent)`,
      backgroundColor: 'var(--accent-bg)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem',
    }}>
      <div>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          color: TON,
          textTransform: 'uppercase',
        }}>An</span>
        <p style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '0.95rem',
          color: 'var(--ink)',
          lineHeight: 1.6,
          margin: '0.25rem 0 0 0',
        }}>{an.soru}</p>
      </div>
      <textarea
        value={yerel}
        onChange={(e) => { setYerel(e.target.value); setKaydedildi(false); }}
        onBlur={() => { if (yerel !== (deger || '')) { onYaz(yerel); setKaydedildi(true); } }}
        placeholder="Buraya yaz…"
        rows={3}
        style={{
          width: '100%',
          padding: '0.6rem 0.75rem',
          border: '1px solid var(--rule)',
          backgroundColor: 'var(--bg-base)',
          color: 'var(--ink)',
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.85rem',
          lineHeight: 1.65,
          resize: 'vertical',
          boxSizing: 'border-box',
        }}
      />
      {(kaydedildi || (deger && yerel === deger)) && yerel.trim().length > 0 && (
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          color: TON,
          textTransform: 'uppercase',
        }}>✓ Kaydedildi</span>
      )}
    </div>
  );
}

// ─── Kart-içi çatal (b1 yog-2 + an tipi 'catal') ────────────
function KartIciCatal({ cataly, secim, onSec, etiket }) {
  return (
    <div style={{
      padding: '0.85rem 1rem',
      border: `1px solid color-mix(in srgb, ${TON} 25%, transparent)`,
      backgroundColor: 'var(--accent-bg)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7rem',
    }}>
      <div>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          color: TON,
          textTransform: 'uppercase',
        }}>{etiket || 'Çatal'}</span>
        <p style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '0.95rem',
          color: 'var(--ink)',
          lineHeight: 1.6,
          margin: '0.25rem 0 0 0',
        }}>{cataly.soru}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {cataly.secenekler.map(sec => (
          <SecenekSik
            key={sec.dal}
            secili={secim === sec.dal}
            soluk={secim && secim !== sec.dal}
            onClick={() => onSec(sec)}
            harf={sec.dal}
            baslik={sec.baslik}
            aciklama={sec.aciklama}
            muhur={sec.oznelSabit}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Tercih bloğu (sahneye / önce'ye gömülü) ─────────────────
function TercihBloku({ t, secilen, onSec, ekstraNot }) {
  return (
    <div style={{
      padding: '0.85rem 1rem',
      border: `1px solid color-mix(in srgb, ${ONAY} 25%, transparent)`,
      backgroundColor: 'var(--uyari-bg)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7rem',
    }}>
      <div>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          color: ONAY,
          textTransform: 'uppercase',
        }}>Dramaturjik kavşak · {t.id.toUpperCase()}</span>
        <p style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '0.95rem',
          color: 'var(--ink)',
          lineHeight: 1.6,
          margin: '0.25rem 0 0 0',
        }}>{t.karar}</p>
        {ekstraNot && (
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.7rem',
            color: 'var(--ink-muted)',
            lineHeight: 1.6,
            margin: '0.3rem 0 0 0',
            fontStyle: 'italic',
          }}>↳ {ekstraNot}</p>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {['A', 'B', 'C'].map(harf => (
          <SecenekSik
            key={harf}
            secili={secilen === harf}
            soluk={secilen && secilen !== harf}
            onClick={() => onSec(harf)}
            harf={harf}
            baslik={null}
            aciklama={t[harf]}
            muhur={null}
          />
        ))}
      </div>
      <p style={{
        fontFamily: 'var(--font-body), sans-serif',
        fontWeight: 200,
        fontSize: '0.72rem',
        color: 'var(--ink-muted)',
        lineHeight: 1.6,
        margin: 0,
        fontStyle: 'italic',
        paddingTop: '0.4rem',
        borderTop: '1px solid var(--rule)',
      }}>
        <strong style={{ color: TON, fontStyle: 'normal' }}>Model önerisi:</strong> {t.modelEgilimi} <em>Karar senin.</em>
      </p>
    </div>
  );
}

// ─── Tek seçenek şıkı (çatal / tercih ortak) ─────────────────
function SecenekSik({ secili, soluk, onClick, harf, baslik, aciklama, muhur }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: secili ? 'var(--accent-bg)' : 'var(--bg-base)',
        border: secili
          ? `1.5px solid ${TON}`
          : '1px solid var(--rule)',
        padding: '0.65rem 0.85rem',
        display: 'flex',
        gap: '0.7rem',
        alignItems: 'flex-start',
        cursor: 'pointer',
        opacity: soluk ? 0.55 : 1,
        textAlign: 'left',
        transition: 'opacity 0.2s ease, border-color 0.2s ease',
      }}
    >
      <span style={{
        width: '24px',
        height: '24px',
        minWidth: '24px',
        borderRadius: '50%',
        border: `1px solid ${secili ? TON : 'var(--ink-muted)'}`,
        backgroundColor: secili ? TON : 'transparent',
        color: secili ? 'var(--bg-base)' : 'var(--ink-muted)',
        fontFamily: 'var(--font-body), sans-serif',
        fontWeight: 400,
        fontSize: '0.7rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '0.05rem',
      }}>{secili ? '✓' : harf}</span>
      <div style={{ flex: 1 }}>
        {baslik && (
          <span style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontSize: '0.95rem',
            color: 'var(--ink)',
            display: 'block',
            marginBottom: '0.2rem',
          }}>{baslik}</span>
        )}
        <p style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.8rem',
          color: 'var(--ink-soft)',
          lineHeight: 1.65,
          margin: 0,
        }}>{aciklama}</p>
        {secili && muhur && (
          <p style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontSize: '0.82rem',
            color: TON,
            lineHeight: 1.6,
            margin: '0.4rem 0 0 0',
          }}>↳ {muhur}</p>
        )}
      </div>
    </button>
  );
}

// ─── Modül III köprüsü ──────────────────────────────────────
function ModulIIIKoprusu() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.85rem',
      padding: '1.2rem 1.4rem',
      border: '1px solid var(--rule)',
      backgroundColor: 'var(--bg-elevated)',
    }}>
      <p style={{
        fontFamily: 'var(--font-display), serif',
        fontStyle: 'italic',
        fontSize: '0.98rem',
        color: 'var(--ink)',
        lineHeight: 1.7,
        margin: 0,
      }}>
        Buradaki seçimlerin — boşluk mühürlerin, dramaturjik kavşaklarda kararların — sesli Yolculuk'ta (Modül III) senin özgün akışını oluşturacak. Onları unutmayacaksın; orada yanında olacaklar.
      </p>
      <button
        disabled
        style={{
          alignSelf: 'flex-start',
          padding: '0.7rem 1.3rem',
          backgroundColor: 'var(--bg-base)',
          border: '1px solid var(--rule)',
          color: 'var(--ink-muted)',
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.7rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          cursor: 'not-allowed',
        }}
      >
        Yolculuğa hazırlan · Yakında
      </button>
    </div>
  );
}

// ─── Minik helper'lar ───────────────────────────────────────
function Rozet({ renk, children }) {
  return (
    <span style={{
      fontFamily: 'var(--font-body), sans-serif',
      fontWeight: 300,
      fontSize: '0.55rem',
      letterSpacing: '0.3em',
      color: renk,
      textTransform: 'uppercase',
      padding: '0.15rem 0.55rem',
      border: `1px solid color-mix(in srgb, ${renk} 33%, transparent)`,
    }}>{children}</span>
  );
}

function Etiket({ children }) {
  return (
    <span style={{
      fontFamily: 'var(--font-body), sans-serif',
      fontWeight: 200,
      fontSize: '0.55rem',
      letterSpacing: '0.3em',
      color: 'var(--ink-muted)',
      textTransform: 'uppercase',
    }}>{children}</span>
  );
}
