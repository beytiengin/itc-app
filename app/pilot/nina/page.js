// app/pilot/nina/page.js
// ITC Actor's Gym — PILOT viewer (Nina Mihaylovna Zareçnaya / Çehov · Martı)
//
// İZOLASYON: Bu sayfa karakterGetir/karakter listesi/kulis'ten BAĞIMSIZ.
// Pilot şeması (kaynak provenance, durum gating, _meta) Hamlet/Willy/
// Macbeth/Biff workbook şemasından farklı — üretici çıktısının ham hâli.
// Production'a entegrasyon ayrı karar (Beyti + Filiz onayı sonrası).

'use client';

import { useState, useEffect } from 'react';
import { nina } from '../../../data/pilot/nina';
import BoslukYuruyusu from '../../../components/BoslukYuruyusu';
import { supabase } from '../../lib/supabase';

const TON = 'var(--accent)';
const ONAY = 'var(--uyari)';
const KARAKTER_ID = 'nina';

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
    }}>
      {kaynak}
    </span>
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
    }}>
      ⚠ {durum}
    </span>
  );
}

function TravmaRozeti({ travma }) {
  if (!travma) return null;
  const { kategoriler = [], seviye = 0, durum, not } = travma;
  if (seviye === 0 && kategoriler.length === 0 && (!durum || durum === 'net')) return null;
  return (
    <div style={{
      padding: '0.6rem 0.9rem',
      border: `1px solid color-mix(in srgb, ${ONAY} 30%, transparent)`,
      backgroundColor: 'var(--uyari-bg)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          color: ONAY,
          textTransform: 'uppercase',
        }}>
          Travma · Seviye {seviye}
        </span>
        <OnayRozet durum={durum} />
      </div>
      {kategoriler.length > 0 && (
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {kategoriler.map((k) => (
            <span key={k} style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 300,
              fontSize: '0.62rem',
              color: 'var(--ink-soft)',
              padding: '0.1rem 0.4rem',
              border: '1px solid var(--rule)',
            }}>{k}</span>
          ))}
        </div>
      )}
      {not && (
        <p style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.72rem',
          color: 'var(--ink-muted)',
          lineHeight: 1.6,
          margin: 0,
          fontStyle: 'italic',
        }}>{not}</p>
      )}
    </div>
  );
}

function Bolum({ etiket, baslik, alt, children }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        {etiket && (
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            color: TON,
            textTransform: 'uppercase',
          }}>{etiket}</span>
        )}
        {baslik && (
          <h2 style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '1.8rem',
            color: 'var(--ink)',
            margin: 0,
            lineHeight: 1.2,
          }}>{baslik}</h2>
        )}
        {alt && (
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.85rem',
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

export default function NinaPilotSayfasi() {
  // ─── State (Karar 48 Sprint 5+6) ────────────────────────────────
  const [yuruyusBoslukId, setYuruyusBoslukId] = useState(null);  // null | 'b2'
  const [oznelSabitler, setOznelSabitler] = useState({});         // { [sahne_no]: [{ catal_anahtar, ozet_metni }] }
  const [ilkYuruyusMu, setIlkYuruyusMu] = useState(true);

  // Mount + kapanış sonrası: oznel_sabitler'i yenile (login olmuşsa)
  useEffect(() => {
    let iptal = false;
    async function yukle() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const { data, error } = await supabase
          .from('oznel_sabitler')
          .select('catal_anahtar, ozet_metni, birlesim_sahne_no, bosluk_no')
          .eq('karakter_id', KARAKTER_ID);
        if (iptal) return;
        if (error) {
          console.log('oznel_sabitler getir hatası:', error);
          return;
        }
        // Sahne no'ya göre grupla
        const sahneMap = {};
        for (const row of (data || [])) {
          if (!row.birlesim_sahne_no) continue;
          if (!sahneMap[row.birlesim_sahne_no]) sahneMap[row.birlesim_sahne_no] = [];
          sahneMap[row.birlesim_sahne_no].push({
            anahtar: row.catal_anahtar,
            ozet: row.ozet_metni,
            boslukNo: row.bosluk_no,
          });
        }
        // kayip='yasiyor' ise kayip2'den oku (kayip atla) — kapanış mantığı
        for (const sahneNo of Object.keys(sahneMap)) {
          const list = sahneMap[sahneNo];
          const kayipVar = list.find((s) => s.anahtar === 'kayip2');
          if (kayipVar) {
            sahneMap[sahneNo] = list.filter((s) => s.anahtar !== 'kayip');
          }
        }
        setOznelSabitler(sahneMap);
      } catch (e) {
        console.log('oznel_sabitler exception:', e);
      }
    }
    yukle();
    return () => { iptal = true; };
  }, [yuruyusBoslukId]);  // yuruyusBoslukId null'a dönünce yeniden yükle

  const aktifBosluk = yuruyusBoslukId
    ? nina.boslukSet.find((b) => b.id === yuruyusBoslukId)
    : null;

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
        gap: '3rem',
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
          }}>
            ◇ Pilot · Üretici Çıktısı · İzole Görünüm
          </span>
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.78rem',
            color: 'var(--ink-muted)',
            lineHeight: 1.7,
            margin: '0.4rem 0 0 0',
          }}>
            Bu sayfa <code>data/pilot/nina.js</code> dosyasını render eder. Production karakter pipeline'ından (Hamlet/Willy/Macbeth/Biff) <strong>BAĞIMSIZ</strong>. Şema farklı: <code>kaynak</code> provenance (metin/çıkarım), <code>durum</code> onay gating ([ONAY_BEKLIYOR]), <code>_meta</code> üretici şeffaflığı. Entegrasyon: ayrı karar.
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
          }}>
            Çeviri referansı: {nina.ceviri}
          </p>
        </header>

        {/* 01 · Yazarın Çerçevesi */}
        <Bolum etiket="01" baslik="Yazarın Çerçevesi" alt="Metnin sana verdiği değiştirilemez doğrular — her madde kaynakla etiketli: metin (replik/sahne yönergesi) ya da çıkarım.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {nina.dogrular.map((d) => (
              <div key={d.id} style={{
                display: 'flex',
                gap: '0.8rem',
                alignItems: 'flex-start',
                padding: '0.7rem 0.9rem',
                border: '1px solid var(--rule)',
                backgroundColor: 'var(--bg-elevated)',
              }}>
                <KaynakRozet kaynak={d.kaynak} />
                <span style={{
                  fontFamily: 'var(--font-display), serif',
                  fontSize: '0.95rem',
                  color: 'var(--ink)',
                  lineHeight: 1.6,
                  flex: 1,
                }}>{d.metin}</span>
              </div>
            ))}
          </div>
        </Bolum>

        {/* 02 · Yaşam Çizgisi — TEK DİKEY TIMELINE (Düzeltme talimatı §1) */}
        <Bolum etiket="02" baslik="Yaşam Çizgisi" alt="Oyun öncesinden finale, görünen sahneler ve görünmeyen boşluklar tek kronolojik akışta.">
          <YasamCizgisi
            nina={nina}
            oznelSabitler={oznelSabitler}
            setYuruyusBoslukId={setYuruyusBoslukId}
            setIlkYuruyusMu={setIlkYuruyusMu}
          />
        </Bolum>

        {/* 03 · Dramaturjik Kavşaklar */}
        <Bolum etiket="03" baslik="Dramaturjik Kavşaklar" alt="Metnin çok okumaya açık bıraktığı yerler; karar senin. ⚠️ DRAMATURG ONAYI BEKLİYOR (Beyti). Model A/B/C üretti — seçim yapmadı.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {nina.tercihler.map((t) => (
              <div key={t.id} style={{
                border: `1px solid color-mix(in srgb, ${ONAY} 30%, transparent)`,
                padding: '1.1rem 1.3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 300,
                    fontSize: '0.6rem',
                    letterSpacing: '0.3em',
                    color: ONAY,
                    textTransform: 'uppercase',
                  }}>{t.id.toUpperCase()}</span>
                  <span style={{
                    fontFamily: 'var(--font-display), serif',
                    fontStyle: 'italic',
                    fontSize: '1rem',
                    color: 'var(--ink)',
                    lineHeight: 1.5,
                  }}>{t.karar}</span>
                </div>
                {['A', 'B', 'C'].map((harf) => (
                  <div key={harf} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                    <span style={{
                      width: '24px',
                      height: '24px',
                      minWidth: '24px',
                      borderRadius: '50%',
                      border: '1px solid var(--ink-muted)',
                      color: 'var(--ink-muted)',
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: 400,
                      fontSize: '0.7rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '0.1rem',
                    }}>{harf}</span>
                    <p style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: 300,
                      fontSize: '0.82rem',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.7,
                      margin: 0,
                      flex: 1,
                    }}>{t[harf]}</p>
                  </div>
                ))}
                <p style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 200,
                  fontSize: '0.72rem',
                  color: 'var(--ink-muted)',
                  lineHeight: 1.7,
                  margin: '0.3rem 0 0 0',
                  fontStyle: 'italic',
                  paddingTop: '0.5rem',
                  borderTop: '1px solid var(--rule)',
                }}>
                  <strong style={{ color: TON, fontStyle: 'normal' }}>Model eğilimi:</strong> {t.modelEgilimi}
                </p>
              </div>
            ))}
          </div>
        </Bolum>

        {/* Meta */}
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

      {/* Çatallı Boşluk Yürüyüşü overlay (KANON Karar 48) */}
      {aktifBosluk && (
        <BoslukYuruyusu
          karakterId={KARAKTER_ID}
          bosluk={aktifBosluk}
          ilkYuruyusMu={ilkYuruyusMu}
          onKapat={() => {
            setYuruyusBoslukId(null);
            setIlkYuruyusMu(false);  // bir sonraki açılışta eşik opsiyonel
          }}
        />
      )}
    </main>
  );
}

// ─── Yaşam Çizgisi (tek timeline) — Düzeltme talimatı §1 + §2 ──
const ROMA = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V' };

function YasamCizgisi({ nina, oznelSabitler, setYuruyusBoslukId, setIlkYuruyusMu }) {
  // Birleşik dizi: oyunOncesi + boslukSet + sahnelerWorkbook → sira'ya göre sıralı
  const dizi = [];
  dizi.push({ sira: 0, tip: 'once', perde: null });
  for (const s of nina.sahnelerWorkbook) {
    dizi.push({ sira: s.no * 10, tip: 'sahne', perde: s.perde, s });
  }
  // Boşluk yerleşimi (oyun gerçeği): b1 perde I başında · b2 S7↔S8 arası · b3 S8 sonrası
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

  // Render — perde değiştiğinde ince ayraç bas
  const cikti = [];
  let oncekiPerde = null;
  for (const dgm of dizi) {
    if (dgm.perde && dgm.perde !== oncekiPerde) {
      const tema = temaMap[dgm.perde];
      cikti.push(<FazAyrac key={`p-${dgm.perde}`} perde={dgm.perde} tema={tema?.tema} />);
      oncekiPerde = dgm.perde;
    }
    if (dgm.tip === 'once') {
      cikti.push(<OnceDugum key="once" oyunOncesi={nina.oyunOncesi} />);
    } else if (dgm.tip === 'sahne') {
      cikti.push(
        <SahneDugum
          key={`s-${dgm.s.no}`}
          s={dgm.s}
          sabitler={oznelSabitler[dgm.s.no]}
        />
      );
    } else {
      cikti.push(
        <BoslukDugum
          key={`b-${dgm.b.id}`}
          b={dgm.b}
          onYuru={() => { setIlkYuruyusMu(true); setYuruyusBoslukId(dgm.b.id); }}
        />
      );
    }
  }

  return <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>{cikti}</div>;
}

function FazAyrac({ perde, tema }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '0.6rem 0 0.2rem 0',
      margin: '0.6rem 0 0 0',
    }}>
      <span style={{
        fontFamily: 'var(--font-body), sans-serif',
        fontWeight: 300,
        fontSize: '0.6rem',
        letterSpacing: '0.35em',
        color: 'var(--accent)',
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

function OnceDugum({ oyunOncesi }) {
  return (
    <div style={{
      border: '1px solid var(--rule)',
      backgroundColor: 'var(--bg-elevated)',
      padding: '1rem 1.2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          color: 'var(--ink-muted)',
          textTransform: 'uppercase',
          padding: '0.15rem 0.55rem',
          border: '1px solid var(--rule)',
        }}>Öncesi</span>
        <span style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '1.05rem',
          color: 'var(--ink)',
        }}>Oyun öncesi yaşam</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {oyunOncesi.olaylar.map((o) => (
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
  );
}

function SahneDugum({ s, sabitler }) {
  const TON = 'var(--accent)';
  return (
    <div style={{
      border: '1px solid var(--rule)',
      padding: '1.1rem 1.3rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7rem',
      backgroundColor: 'var(--bg-elevated)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          color: TON,
          textTransform: 'uppercase',
          padding: '0.15rem 0.55rem',
          border: `1px solid color-mix(in srgb, ${TON} 33%, transparent)`,
        }}>Sahne {s.no}</span>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          color: TON,
          textTransform: 'uppercase',
          marginLeft: 'auto',
        }}>Sıcaklık {s.onerilenSicaklik}/5</span>
      </div>
      <p style={{
        fontFamily: 'var(--font-display), serif',
        fontStyle: 'italic',
        fontSize: '1rem',
        color: 'var(--ink)',
        lineHeight: 1.7,
        margin: 0,
      }}>{s.olay}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <Etiketli e="İçsel">{s.icsel}</Etiketli>
        <Etiketli e="Yük">{s.yuk}</Etiketli>
        {s.replikIzi && <Etiketli e="Replik izi" italic>{s.replikIzi}</Etiketli>}
        {s['eşikNotu'] && <Etiketli e="Eşik notu">{s['eşikNotu']}</Etiketli>}
      </div>

      {/* Öznel sabit hatırlatma (Karar 48 §4.5 döngü kapanışı) */}
      {sabitler && sabitler.length > 0 && (
        <div style={{
          padding: '0.8rem 1rem',
          border: `1px solid color-mix(in srgb, ${TON} 30%, transparent)`,
          backgroundColor: 'var(--accent-bg)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 300,
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            color: TON,
            textTransform: 'uppercase',
          }}>Bu boşlukta şunu seçmiştin</span>
          {sabitler.map((sabit, i) => (
            <p key={i} style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
              margin: 0,
            }}>{sabit.ozet}</p>
          ))}
        </div>
      )}

      <TravmaRozeti travma={s.travma} />
    </div>
  );
}

function BoslukDugum({ b, onYuru }) {
  const TON = 'var(--accent)';
  return (
    <div style={{
      border: '1px dashed var(--onay)',
      padding: '1.1rem 1.3rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          color: 'var(--onay)',
          textTransform: 'uppercase',
          padding: '0.15rem 0.55rem',
          border: '1px solid var(--onay-rule)',
        }}>Boşluk</span>
        <span style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '1.05rem',
          color: 'var(--ink)',
        }}>◇ {b.ad}</span>
        {b.yogunluk && (
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 300,
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
            color: TON,
            textTransform: 'uppercase',
            marginLeft: 'auto',
          }}>Yoğunluk {b.yogunluk}</span>
        )}
      </div>

      {/* Yoğunluk 3 → "Bu boşluğu yürü" (Karar 48) */}
      {b.yogunluk === 3 && b.yuruyus && (
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
      )}

      <Etiketli e="Önce">{b.once}</Etiketli>
      <Etiketli e="Anlatım" italic>{b.anlatim}</Etiketli>
      <Etiketli e="Sonra">{b.sonra}</Etiketli>
      <Etiketli e="Sentez" italic>{b.sentez}</Etiketli>
      <div>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 200,
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          color: 'var(--onay)',
          textTransform: 'uppercase',
        }}>Alt Sorular</span>
        <ul style={{ marginTop: '0.4rem', paddingLeft: '1.2rem' }}>
          {b.altSorular.map((q, i) => (
            <li key={i} style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
            }}>{q}</li>
          ))}
        </ul>
      </div>
      <TravmaRozeti travma={b.travma} />
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
