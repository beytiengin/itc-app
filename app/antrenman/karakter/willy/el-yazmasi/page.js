// app/antrenman/karakter/willy/el-yazmasi/page.js
// El yazması karakter sayfası — Katman 1 · Karar 41 Aşama 1.
//
// Dört eski sayfayı (oyun-oncesi-yasam · timeline · yazarin-cercevesi ·
// senin-cerceven) tek okunabilir akışa birleştirir. Yapı (yukarıdan aşağı):
//   1. Başlık (Modül II · Willy Loman · El yazması)
//   2. Doğrular künyesi (her zaman görünür, sol kenar vurgulu)
//   3. İlişkiler künyesi (katlanır)
//   4. Açık giriş kapısı çubuğu (Aşama 1: statik — Aşama 3'te kalibrasyon kapısı)
//   5. Oyun Öncesi fasıl (katlanır, 8 olay)
//   6. Senaryo akışı: sahnelerWorkbook + boslukSet yasamSirasi sıralı
//   7. Her sahne/boşluk bloğunun ALTINDA inline panel (akordeon)
//
// Panel (sahne): iki sekme — "Yazarın Çerçevesi" (Aşama 2'de manuscript) +
// "Senin Çerçeven" (3 vuruş — soru / yorum / ne açıyor).
// Panel (boşluk): sade — soru + yazma alanı.
//
// Kanon kilitleri (Karar 41 §2):
// - Metot görünmez (Karar 31): "Çapa", "Kayıt Noktası", "Tip A/B/C/D",
//   "Pozisyon", "Mod 4" GÖSTERİLMEZ. Oyuncu-yüzü dil.
// - Substitution yok: tüm sorgular karakter-merkezli ("Willy bunu yaşarken…").
// - Aktivasyon dili (Karar 34): "yazıldı/tamamlandı" — "canlı/aktif" değil.
// - Tıklanabilir affordance daima görünür (dokunmatik; hover'a bağlı değil).
// - Eski 4 sayfa SİLİNMEZ — kademeli geçiş.
//
// Aşama 1 KAPSAM DIŞI: Egzersiz arkı (3 Giriş Kapısı, ★ mühürle, güvenli çıkış)
// → Aşama 3. Yazarın Çerçevesi sekmesi gerçek manuscript verisiyle → Aşama 2.

'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import willyRaw from '../../../../../data/karakterler/willy';
import willyI18n, { willyIcerik } from '../../../../../data/willy-i18n';
import { useDil, ceviri } from '../../../../lib/dil';
import { getKalibrasyonProfili } from '../../../../lib/kalibrasyon';
import {
  boslukYansimasiKaydet,
  boslukYansimalariniGetir,
  antrenmanAdimiKaydet,
  antrenmanYansimalariniGetir,
} from '../../../../lib/kulis';
import TopraklanmaModu from '../../../../../components/TopraklanmaModu';

const TON = 'var(--accent)';
const KARAKTER = 'willy';
const SAHNE_ANTRENMAN_PREFIX = 'elyazma-sahne-'; // antrenmanId şeması
const BOSLUK_ID_PREFIX = 'elyazma-bosluk-';      // boslukId şeması

// ★ kayıt anları — manuscriptlerden teyitli konumlar (Karar 41 Aşama 2).
// Yapısal "Çapa No" GÖSTERİLMEZ; sadece görsel ★ işaret oyuncuya nüans verir.
// m12 flüt/babanın terki · m14 Singleman · m16 Boston (EN HASSAS) · m19 Howard
// "insan meyve değildir" · m21 Son araba.
const KAYIT_ANI_OYUN_ONCESI = new Set([1, 4]); // olay no: babanın terki, Singleman
const KAYIT_ANI_SAHNE = new Set([7, 9, 11]);   // sahne no: Howard kovulma, Boston belleği (HASSAS), Son araba
const SAHNE_HASSAS = new Set([9]);             // m16 Boston — Aşama 3 güvenli çıkış akışı çağırır
const SAHNE_PROVISIONAL = new Set([11]);       // m21 Son araba — Derinleştir arkı klinik onay sonrası (FKA Haziran 2026)

// VAK baskın kanaldan Giriş Kapısı türetme (Karar 41 Aşama 3 yaklaşımı).
// Beyti notu: "Giriş Kapıları ≠ VAK, ayrımı koru". Şimdilik kalibrasyondan
// türetiyoruz (V→Bilişsel, K→Bedensel, A→Duygusal) çünkü kanonik bağımsız
// Giriş Kapıları enstrümanı henüz yok. Skor/sayı GÖSTERİLMEZ (Karar 21/31).
function acikKapi(vakBaskin) {
  if (vakBaskin === 'Görsel') return 'bilissel';
  if (vakBaskin === 'Kinestetik') return 'bedensel';
  if (vakBaskin === 'İşitsel') return 'duygusal';
  return null;
}

// Debounce yardımcısı — textarea/input'lar için 600ms.
function useDebouncedCallback(fn, delay = 600) {
  const ref = useRef();
  return (...args) => {
    if (ref.current) clearTimeout(ref.current);
    ref.current = setTimeout(() => fn(...args), delay);
  };
}

export default function ElYazmasiSayfasi() {
  const { dil } = useDil();
  const s = ceviri(willyI18n, dil);
  const t = s.elYazmasi;
  const ortak = s.ortak;
  const data = willyIcerik(dil, willyRaw);

  // Birleşik akış — OYUN SIRASI (Karar 41 v2):
  // - Sahneler `no` 1→11 sıralı (yasamSirasi DEĞİL).
  // - Her boşluk `sonraSahneNo`'daki sahnenin ÖNÜNE yerleşir.
  // - Aynı sahneye birden fazla boşluk varsa: `boslukSet` dizisinin FİZİKSEL
  //   sırası geçerli (özellikle Sahne 9 önü B5→B1→B10 ve Sahne 10 önü
  //   B4→B11→B8 swap'ları için kritik).
  // - `no` ALANI KAYIT KİMLİĞİ — sıralama için ASLA kullanılmaz.
  const akis = useMemo(() => {
    const sahneSirali = [...(data.sahnelerWorkbook || [])].sort((a, b) => a.no - b.no);
    const bosluklar = data.boslukSet || []; // dizi fiziksel sırası korunur — sort YOK
    const dugumler = [];
    for (const sahne of sahneSirali) {
      const sahneOncesi = bosluklar.filter((b) => b.sonraSahneNo === sahne.no);
      for (const b of sahneOncesi) dugumler.push({ tip: 'bosluk', veri: b });
      dugumler.push({ tip: 'sahne', veri: sahne });
    }
    return dugumler;
  }, [data]);

  const [acikPanel, setAcikPanel] = useState(null); // { tip, no } | null
  const [acikOlay, setAcikOlay] = useState(null);   // olay no | null (oyun öncesi)
  const [dogrularAcik, setDogrularAcik] = useState(false);
  const [iliskilerAcik, setIliskilerAcik] = useState(false);
  const [oyunOncesiAcik, setOyunOncesiAcik] = useState(false);

  // Mevcut yazımları okumak için yansıma haritaları.
  const [boslukYansima, setBoslukYansima] = useState({}); // { 'elyazma-bosluk-1': 'metin' }
  const [sahneYansima, setSahneYansima] = useState({});   // { 'elyazma-sahne-3': { 1: '...', 2: '...' } }
  const [yukleniyor, setYukleniyor] = useState(true);

  // Aşama 3: kalibrasyondan açık kapı (Bilişsel/Bedensel/Duygusal); skor yok.
  const [acikKapiKey, setAcikKapiKey] = useState(null);
  // Topraklanma overlay'i için: hangi sahne başlığıyla çağrıldı.
  const [topraklanma, setTopraklanma] = useState(null);

  useEffect(() => {
    let iptal = false;
    async function yukle() {
      try {
        const [bosluklar, profil] = await Promise.all([
          boslukYansimalariniGetir(KARAKTER),
          getKalibrasyonProfili(),
        ]);
        if (iptal) return;
        // boslukYansimalariniGetir() {boslukId: metin} object döndürür (array değil)
        // — direkt set, forEach yapma.
        setBoslukYansima(bosluklar && typeof bosluklar === 'object' ? bosluklar : {});
        setSahneYansima({}); // sahne yansımaları panel açılınca lazy yüklenir.
        // Açık kapı — VAK baskından sessizce türet (skor/sayı yok).
        const baskin = profil?.vak?.baskin || profil?.vak?.dominant;
        setAcikKapiKey(acikKapi(baskin));
      } finally {
        if (!iptal) setYukleniyor(false);
      }
    }
    yukle();
    return () => { iptal = true; };
  }, []);

  // Sahne panelini açarken o sahnenin antrenman adımlarını lazy yükle.
  async function sahnePanelAc(no) {
    const id = SAHNE_ANTRENMAN_PREFIX + no;
    if (!sahneYansima[id]) {
      try {
        // antrenmanYansimalariniGetir() {hata, yansimalar:{adimNo:metin}} döner — yansimalar al.
        const sonuc = await antrenmanYansimalariniGetir(KARAKTER, id);
        const yansimalar = sonuc?.yansimalar && typeof sonuc.yansimalar === 'object' ? sonuc.yansimalar : {};
        setSahneYansima((prev) => ({ ...prev, [id]: yansimalar }));
      } catch (e) {
        setSahneYansima((prev) => ({ ...prev, [id]: {} }));
      }
    }
    setAcikPanel({ tip: 'sahne', no });
  }
  function boslukPanelAc(no) { setAcikPanel({ tip: 'bosluk', no }); }
  function panelKapat() { setAcikPanel(null); }

  if (yukleniyor) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{ortak.yukleniyor}</span>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>
      {/* Üst nav artık global — components/Navigasyon.js */}

      <section style={{ flex: 1, padding: '2.5rem 1.4rem 5rem', maxWidth: 760, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>

        {/* 1. Başlık */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <a href="/antrenman/karakter/willy"
            style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase', textDecoration: 'none', alignSelf: 'flex-start', transition: 'color 0.25s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = TON; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}>
            {ortak.geriWilly}
          </a>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.35em', color: TON, textTransform: 'uppercase' }}>{s.hub.ustEtiket}</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(2.4rem, 6vw, 3.2rem)', color: 'var(--ink)', margin: 0, lineHeight: 1.1 }}>{data.ad || 'Willy Loman'}</h1>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>{t.altyazi}</span>
        </header>

        {/* 2. Doğrular künyesi (katlanır) */}
        <BolumKatlanir
          baslik={t.dogrularBaslik}
          altyazi={`${(data.dogrular || []).length} ${t.dogrularSayim} · ${t.dokunAc}`}
          acik={dogrularAcik}
          setAcik={setDogrularAcik}
        >
          <ul style={{ borderLeft: `2px solid ${TON}`, paddingLeft: '1.3rem', margin: '0.8rem 0 0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {(data.dogrular || []).map((d, i) => (
              <li key={i} style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.02rem', lineHeight: 1.6, color: 'var(--ink)' }}>
                {typeof d === 'string' ? d : d.madde}
              </li>
            ))}
          </ul>
        </BolumKatlanir>

        {/* 3. İlişkiler künyesi (katlanır) */}
        <BolumKatlanir
          baslik={t.iliskilerBaslik}
          altyazi={`${(data.oyunOncesi?.iliskiler || []).length} ${t.iliskilerSayim} · ${t.dokunAc}`}
          acik={iliskilerAcik}
          setAcik={setIliskilerAcik}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.7rem', marginTop: '0.8rem' }}>
            {(data.oyunOncesi?.iliskiler || []).map((iliski) => (
              <IliskiKart key={iliski.no} iliski={iliski} />
            ))}
          </div>
        </BolumKatlanir>

        {/* 4. Açık giriş kapısı çubuğu — Aşama 3'te kalibrasyon kapısı vurgulanır */}
        <GirisKapisiCubugu t={t} acikKapiKey={acikKapiKey} />

        {/* 5. Oyun Öncesi fasıl (katlanır) */}
        <BolumKatlanir
          baslik={`${t.oyunOncesiBaslik} · ${t.oyunOncesiAltyazi}`}
          altyazi={`${(data.oyunOncesi?.olaylar || []).length} ${t.oyunOncesiSayim} · ${t.dokunAc}`}
          acik={oyunOncesiAcik}
          setAcik={setOyunOncesiAcik}
        >
          <ul style={{ marginTop: '0.8rem', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {(data.oyunOncesi?.olaylar || []).map((olay) => (
              <OlayDugumu
                key={olay.no}
                olay={olay}
                acik={acikOlay === olay.no}
                onAc={() => setAcikOlay(acikOlay === olay.no ? null : olay.no)}
                t={t}
              />
            ))}
          </ul>
        </BolumKatlanir>

        {/* 6. Senaryo akışı */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <Etiket>{t.senaryoBaslik}</Etiket>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: 'var(--ink-soft)', marginBottom: '0.4rem' }}>{t.senaryoAltyazi}</span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {akis.map((d) => (
              <DugumGrubu
                key={`${d.tip}-${d.veri.no}`}
                dugum={d}
                acik={acikPanel?.tip === d.tip && acikPanel?.no === d.veri.no}
                onAc={() => d.tip === 'sahne' ? sahnePanelAc(d.veri.no) : boslukPanelAc(d.veri.no)}
                onKapat={panelKapat}
                t={t}
                ortak={ortak}
                boslukYansima={boslukYansima}
                setBoslukYansima={setBoslukYansima}
                sahneYansima={sahneYansima}
                setSahneYansima={setSahneYansima}
                acikKapiKey={acikKapiKey}
                onTopraklanmaAc={(baslik) => setTopraklanma(baslik)}
              />
            ))}
          </div>
        </div>

      </section>

      {topraklanma && (
        <TopraklanmaModu baslik={topraklanma} onKapat={() => setTopraklanma(null)} />
      )}
    </main>
  );
}

// ─── KÜÇÜK PARÇALAR ────────────────────────────────────────────────────────

function Etiket({ children }) {
  return (
    <span style={{
      fontFamily: 'Jost, sans-serif',
      fontWeight: 300,
      fontSize: '0.6rem',
      letterSpacing: '0.32em',
      color: TON,
      textTransform: 'uppercase',
    }}>{children}</span>
  );
}

function BolumKatlanir({ baslik, altyazi, acik, setAcik, children }) {
  return (
    <div style={{ border: '1px solid var(--rule)', background: acik ? 'var(--bg-elevated)' : 'transparent', transition: 'background 0.2s ease' }}>
      <button
        onClick={() => setAcik(!acik)}
        aria-expanded={acik}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '1.1rem 1.3rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--ink)',
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem' }}>
          <span style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 300,
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: TON,
            textTransform: 'uppercase',
          }}>{baslik}</span>
          {altyazi && (
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.72rem', color: 'var(--ink-muted)', letterSpacing: '0.05em' }}>{altyazi}</span>
          )}
        </span>
        <span aria-hidden style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '1rem',
          color: TON,
          transform: acik ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.25s ease',
        }}>▾</span>
      </button>
      {acik && (
        <div style={{ padding: '0 1.3rem 1.3rem' }}>{children}</div>
      )}
    </div>
  );
}

function IliskiKart({ iliski }) {
  const hayalet = (iliski.rol || '').toLowerCase().includes('hayalet') || (iliski.rol || '').toLowerCase().includes('ghost');
  return (
    <div style={{
      border: hayalet ? '1px dashed var(--rule)' : '1px solid var(--rule)',
      padding: '0.85rem 1rem',
      background: 'var(--bg-base)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
    }}>
      <span style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontStyle: 'italic',
        fontSize: '1.15rem',
        color: 'var(--ink)',
        lineHeight: 1.2,
      }}>{iliski.ad}</span>
      <span style={{
        fontFamily: 'Jost, sans-serif',
        fontWeight: 200,
        fontSize: '0.62rem',
        letterSpacing: '0.18em',
        color: 'var(--ink-muted)',
        textTransform: 'uppercase',
      }}>{iliski.rol}</span>
    </div>
  );
}

function GirisKapisiCubugu({ t, acikKapiKey }) {
  // Aşama 3: kalibrasyondan gelen açık kapı inceden vurgulanır (border + "senin
  // kapın" rozeti). Skor/sayı GÖSTERİLMEZ (Karar 21/31). Vurgu olsa da kilit
  // değil — diğer iki kapı aynen erişilebilir (Karar 21).
  const kapilar = [
    { key: 'bilissel', label: t.girisKapisiBilissel },
    { key: 'bedensel', label: t.girisKapisiBedensel },
    { key: 'duygusal', label: t.girisKapisiDuygusal },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
      <Etiket>{t.girisKapisiEtiket}</Etiket>
      <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: 'var(--ink-soft)', margin: '0 0 0.3rem', lineHeight: 1.5 }}>{t.girisKapisiAciklama}</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {kapilar.map((k) => {
          const seninKapi = acikKapiKey === k.key;
          return (
            <span key={k.key} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              border: `1px solid ${seninKapi ? TON : 'var(--rule)'}`,
              background: seninKapi ? 'var(--accent-bg)' : 'transparent',
              padding: '0.45rem 0.95rem',
              fontFamily: 'Jost, sans-serif',
              fontWeight: 300,
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              color: seninKapi ? 'var(--ink)' : 'var(--ink-soft)',
              textTransform: 'uppercase',
              borderRadius: 999,
              transition: 'border 0.25s ease, background 0.25s ease',
            }}>
              {k.label}
              {seninKapi && (
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.72rem', letterSpacing: 0, color: TON, textTransform: 'none' }}>· {t.kapiSeninRozet}</span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

// ─── OYUN ÖNCESİ OLAY (sade panel) ─────────────────────────────────────────

function OlayDugumu({ olay, acik, onAc, t }) {
  const kayitAni = KAYIT_ANI_OYUN_ONCESI.has(olay.no);
  return (
    <li style={{ listStyle: 'none' }}>
      <div style={{ border: '1px solid var(--rule)', background: acik ? 'var(--bg-elevated)' : 'transparent', transition: 'background 0.2s ease' }}>
        <button
          onClick={onAc}
          aria-expanded={acik}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.9rem',
            padding: '0.9rem 1.1rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--ink)',
            textAlign: 'left',
            fontFamily: 'inherit',
          }}
        >
          <span style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 300,
            fontSize: '0.62rem',
            letterSpacing: '0.22em',
            color: TON,
            textTransform: 'uppercase',
            minWidth: '24px',
            paddingTop: '0.15rem',
          }}>{olay.no}</span>
          <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: '1.05rem',
              lineHeight: 1.45,
              color: 'var(--ink)',
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.5rem',
              flexWrap: 'wrap',
            }}>
              {olay.baslik}
              {kayitAni && (
                <span aria-label={t.kayitEtiketi} title={t.kayitEtiketi} style={{ fontFamily: 'Jost, sans-serif', fontStyle: 'normal', fontWeight: 300, fontSize: '0.65rem', color: TON, letterSpacing: '0.05em' }}>★</span>
              )}
            </span>
            {olay.sahneRef && (
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', color: 'var(--ink-muted)', letterSpacing: '0.02em' }}>{olay.sahneRef}</span>
            )}
          </span>
          <span aria-hidden style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: '0.85rem',
            color: TON,
            transform: acik ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
          }}>▾</span>
        </button>
        {acik && (
          <div style={{ borderTop: '1px solid var(--rule)', padding: '1rem 1.1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {olay.yuk && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.58rem', letterSpacing: '0.28em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{t.panelYazarYuk}</span>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{olay.yuk}</p>
              </div>
            )}
            {olay.yansimaSorusu && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', borderLeft: `2px solid ${TON}`, paddingLeft: '0.9rem' }}>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.58rem', letterSpacing: '0.28em', color: TON, textTransform: 'uppercase' }}>{t.panelYazarYansimaSorusu}</span>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>{olay.yansimaSorusu}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

// ─── DÜĞÜM (sahne / boşluk) ────────────────────────────────────────────────

function DugumGrubu({ dugum, acik, onAc, onKapat, t, ortak, boslukYansima, setBoslukYansima, sahneYansima, setSahneYansima, acikKapiKey, onTopraklanmaAc }) {
  const isSahne = dugum.tip === 'sahne';
  const veri = dugum.veri;

  // Yazıldı işareti: sahne için adımlar 1 veya 2 dolu; boşluk için metin dolu.
  const sahneId = SAHNE_ANTRENMAN_PREFIX + veri.no;
  const boslukId = BOSLUK_ID_PREFIX + veri.no;
  const yazildi = isSahne
    ? !!(sahneYansima[sahneId] && (sahneYansima[sahneId][1] || sahneYansima[sahneId][2]))
    : !!boslukYansima[boslukId];
  const kayitAni = isSahne && KAYIT_ANI_SAHNE.has(veri.no);

  return (
    <div style={{ border: '1px solid var(--rule)', background: acik ? 'var(--bg-elevated)' : 'transparent', transition: 'background 0.2s ease' }}>
      <button
        onClick={acik ? onKapat : onAc}
        aria-expanded={acik}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
          padding: '1.1rem 1.3rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--ink)',
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <span style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 300,
          fontSize: '0.6rem',
          letterSpacing: '0.3em',
          color: isSahne ? TON : 'var(--ink-muted)',
          textTransform: 'uppercase',
          minWidth: '70px',
          paddingTop: '0.15rem',
        }}>
          {isSahne ? t.sahneEtiket : t.boslukEtiket} {veri.no}
        </span>
        <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1.18rem',
            color: 'var(--ink)',
            lineHeight: 1.35,
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}>
            {veri.baslik}
            {kayitAni && (
              <span aria-label={t.kayitEtiketi} title={t.kayitEtiketi} style={{ fontFamily: 'Jost, sans-serif', fontStyle: 'normal', fontWeight: 300, fontSize: '0.7rem', color: TON, letterSpacing: '0.05em' }}>★</span>
            )}
          </span>
          {veri.konum && (
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.05em', color: 'var(--ink-muted)' }}>{veri.konum}</span>
          )}
        </span>
        <span aria-hidden style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.7rem',
          color: yazildi ? 'var(--onay-soft)' : 'var(--ink-muted)',
          minWidth: '24px',
          textAlign: 'right',
        }}>{yazildi ? t.yazildi : t.yazilmadi}</span>
        <span aria-hidden style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.95rem',
          color: TON,
          marginLeft: '0.4rem',
          transform: acik ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.25s ease',
        }}>▾</span>
      </button>
      {acik && (
        isSahne
          ? <SahnePanel veri={veri} t={t} ortak={ortak} sahneYansima={sahneYansima} setSahneYansima={setSahneYansima} onKapat={onKapat}
              kayitAni={kayitAni}
              hassas={SAHNE_HASSAS.has(veri.no)}
              provisional={SAHNE_PROVISIONAL.has(veri.no)}
              acikKapiKey={acikKapiKey}
              onTopraklanmaAc={onTopraklanmaAc}
            />
          : <BoslukPanel veri={veri} t={t} ortak={ortak} boslukYansima={boslukYansima} setBoslukYansima={setBoslukYansima} onKapat={onKapat} />
      )}
    </div>
  );
}

// ─── SAHNE PANELİ (iki sekme: Yazarın Çerçevesi · Senin Çerçeven) ──────────

function SahnePanel({ veri, t, ortak, sahneYansima, setSahneYansima, onKapat, kayitAni, hassas, provisional, acikKapiKey, onTopraklanmaAc }) {
  const [sekme, setSekme] = useState('senin');
  const sahneId = SAHNE_ANTRENMAN_PREFIX + veri.no;
  const mevcut = sahneYansima[sahneId] || {};
  const [yorum, setYorum] = useState(mevcut[1] || '');
  const [neAciyor, setNeAciyor] = useState(mevcut[2] || '');
  const [durum, setDurum] = useState(null); // null | 'kaydediliyor' | 'kaydedildi' | 'hata'

  const kaydetYorum = useDebouncedCallback(async (metin) => {
    setDurum('kaydediliyor');
    const ok = await antrenmanAdimiKaydet(KARAKTER, sahneId, 1, metin);
    if (ok) {
      setSahneYansima((prev) => ({ ...prev, [sahneId]: { ...(prev[sahneId] || {}), 1: metin } }));
      setDurum('kaydedildi');
    } else setDurum('hata');
  });
  const kaydetNeAciyor = useDebouncedCallback(async (metin) => {
    setDurum('kaydediliyor');
    const ok = await antrenmanAdimiKaydet(KARAKTER, sahneId, 2, metin);
    if (ok) {
      setSahneYansima((prev) => ({ ...prev, [sahneId]: { ...(prev[sahneId] || {}), 2: metin } }));
      setDurum('kaydedildi');
    } else setDurum('hata');
  });

  return (
    <div style={{ borderTop: '1px solid var(--rule)', padding: '1.4rem 1.3rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      {/* Sekme şeridi */}
      <div role="tablist" aria-label={t.panelYazarBaslik + ' / ' + t.panelSeninBaslik} style={{ display: 'flex', gap: '0.4rem' }}>
        <SekmeBtn aktif={sekme === 'yazar'} onClick={() => setSekme('yazar')}>{t.panelYazarBaslik}</SekmeBtn>
        <SekmeBtn aktif={sekme === 'senin'} onClick={() => setSekme('senin')}>{t.panelSeninBaslik}</SekmeBtn>
      </div>

      {sekme === 'yazar' ? (
        <YazarinCercevesiSahne veri={veri} t={t} />
      ) : (
        <>
          <SeninCerceven3Vurus
            t={t}
            ortak={ortak}
            soru={t.soruJenerikSahne}
            yorum={yorum}
            setYorum={(v) => { setYorum(v); kaydetYorum(v); }}
            neAciyor={neAciyor}
            setNeAciyor={(v) => { setNeAciyor(v); kaydetNeAciyor(v); }}
            durum={durum}
          />
          <DerinlestirArki
            t={t}
            kayitAni={kayitAni}
            hassas={hassas}
            provisional={provisional}
            acikKapiKey={acikKapiKey}
            onTopraklanmaAc={() => onTopraklanmaAc && onTopraklanmaAc(veri.baslik)}
          />
        </>
      )}
    </div>
  );
}

// ─── DERİNLEŞTİR ARKI (Aşama 3) ────────────────────────────────────────────
// Opsiyonel, varsayılan kapalı. Tek "Derinleştir ↓" ile açılır.
// Yapı: nefes (mikro) → 3 Giriş Kapısı → ★ mühürle (kayıt anı) →
// Güvenli Çıkış (hassas) → m21 PROVISIONAL kilit.
// KANON KİLİTLERİ:
// - Karar 31 oyuncu-yüzü: "Çapa/Kayıt Noktası" terimi YOK; "Bu anı mühürle".
// - Karar 21: hiçbir vuruş kilit değil — açık kapı sadece sessiz işaret.
// - Topraklanma metni İCAT EDİLMEZ — mevcut TopraklanmaModu overlay'ine devredilir.
// - m21 (Son araba) PROVISIONAL: ark tamamen kilitli, "klinik onay sonrası açılır"
//   notuyla pasif (FKA Haziran 2026).
// - Egzersiz prompt metinleri TASLAKTIR (i18n'de) — Beyti/Filiz onaylamadan
//   kanona girmez; şimdilik canlı.
function DerinlestirArki({ t, kayitAni, hassas, provisional, acikKapiKey, onTopraklanmaAc }) {
  const [acik, setAcik] = useState(false);

  if (provisional) {
    return (
      <div style={{
        marginTop: '0.4rem',
        border: '1px dashed var(--rule)',
        padding: '1rem 1.2rem',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.45rem',
      }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{t.provisionalEtiket}</span>
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55 }}>{t.provisionalMetin}</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '0.4rem' }}>
      <button
        onClick={() => setAcik(!acik)}
        aria-expanded={acik}
        style={{
          background: 'none',
          border: `1px solid ${acik ? TON : 'var(--rule)'}`,
          padding: '0.55rem 1rem',
          fontFamily: 'Jost, sans-serif',
          fontWeight: 300,
          fontSize: '0.7rem',
          letterSpacing: '0.18em',
          color: acik ? TON : 'var(--ink-soft)',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
        }}
      >{acik ? t.derinlestirKapat : t.derinlestirAc}</button>

      {acik && (
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Giriş — nefes (mikro) */}
          <DerinlestirVurus baslik={t.derinlestirGirisBaslik} metin={t.derinlestirGirisMetin} />
          {/* 3 Giriş Kapısı */}
          <DerinlestirVurus baslik={t.kapiBilissel} metin={t.kapiBilisselMetin} aktif={acikKapiKey === 'bilissel'} rozetMetin={t.kapiSeninRozet} />
          <DerinlestirVurus baslik={t.kapiBedensel} metin={t.kapiBedenselMetin} aktif={acikKapiKey === 'bedensel'} rozetMetin={t.kapiSeninRozet} />
          <DerinlestirVurus baslik={t.kapiDuygusal} metin={t.kapiDuygusalMetin} aktif={acikKapiKey === 'duygusal'} rozetMetin={t.kapiSeninRozet} />
          {/* ★ Mühürle — yalnız kayıt anı düğümlerde */}
          {kayitAni && (
            <DerinlestirVurus baslik={t.muhurleBaslik} metin={t.muhurleMetin} aksanli />
          )}
          {/* Güvenli Çıkış — yalnız hassas düğümlerde; metin icat etmez, Topraklanma'ya devreder */}
          {hassas && (
            <div style={{ borderLeft: `2px solid var(--onay-soft)`, paddingLeft: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.58rem', letterSpacing: '0.3em', color: 'var(--onay-soft)', textTransform: 'uppercase' }}>{t.guvenliCikisBaslik}</span>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55 }}>{t.guvenliCikisMetin}</p>
              <button
                onClick={onTopraklanmaAc}
                style={{
                  alignSelf: 'flex-start',
                  marginTop: '0.3rem',
                  padding: '0.55rem 1.1rem',
                  background: 'var(--onay-soft)',
                  color: 'var(--bg-base)',
                  border: 'none',
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.7rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--onay)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--onay-soft)'; }}
              >{t.guvenliCikisCta}</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function DerinlestirVurus({ baslik, metin, aktif, rozetMetin, aksanli }) {
  return (
    <div style={{
      borderLeft: `2px solid ${aktif ? TON : (aksanli ? TON : 'var(--rule)')}`,
      background: aktif ? 'var(--accent-bg)' : 'transparent',
      paddingLeft: '0.9rem',
      paddingTop: '0.3rem',
      paddingBottom: '0.3rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
      transition: 'background 0.25s ease',
    }}>
      <span style={{ display: 'flex', alignItems: 'baseline', gap: '0.55rem', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.28em', color: aktif || aksanli ? TON : 'var(--ink-muted)', textTransform: 'uppercase' }}>{baslik}</span>
        {aktif && rozetMetin && (
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.78rem', color: TON }}>· {rozetMetin}</span>
        )}
      </span>
      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.97rem', color: 'var(--ink)', margin: 0, lineHeight: 1.55 }}>{metin}</p>
    </div>
  );
}

function YazarinCercevesiSahne({ veri, t }) {
  // Sahnenin manuscript dramaturjik verisi — Aşama 2 (Karar 41).
  // willy.js sahnelerWorkbook'tan: olay (sahnede ne oluyor), icsel (ton),
  // yuk (sonraki sahneye taşıdığı). Yapısal "Çapa No" GÖSTERİLMEZ.
  const alanlar = [
    { etiket: t.panelYazarOlay,  icerik: veri.olay },
    { etiket: t.panelYazarIcsel, icerik: veri.icsel },
    { etiket: t.panelYazarYuk,   icerik: veri.yuk },
  ].filter((a) => a.icerik);
  if (alanlar.length === 0) {
    return (
      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0 }}>
        {t.panelYazarHenuz}
      </p>
    );
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
      {alanlar.map((a) => (
        <div key={a.etiket} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.28em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{a.etiket}</span>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.02rem', color: 'var(--ink)', margin: 0, lineHeight: 1.65 }}>{a.icerik}</p>
        </div>
      ))}
    </div>
  );
}

function SekmeBtn({ aktif, onClick, children }) {
  return (
    <button
      onClick={onClick}
      role="tab"
      aria-selected={aktif}
      style={{
        background: aktif ? TON : 'transparent',
        border: `1px solid ${aktif ? TON : 'var(--rule)'}`,
        color: aktif ? 'var(--bg-base)' : 'var(--ink-soft)',
        padding: '0.5rem 1.1rem',
        fontFamily: 'Jost, sans-serif',
        fontWeight: 300,
        fontSize: '0.65rem',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >{children}</button>
  );
}

function SeninCerceven3Vurus({ t, ortak, soru, yorum, setYorum, neAciyor, setNeAciyor, durum }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
      {/* Soru */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{t.soruEtiket}</span>
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{soru}</p>
      </div>

      {/* Yorum */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{t.yorumEtiket}</span>
        <textarea
          value={yorum}
          onChange={(e) => setYorum(e.target.value)}
          placeholder={t.yorumPlaceholder}
          rows={5}
          style={{
            width: '100%',
            padding: '0.9rem 1rem',
            background: 'var(--bg-base)',
            border: '1px solid var(--rule)',
            color: 'var(--ink)',
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1rem',
            lineHeight: 1.6,
            resize: 'vertical',
            outline: 'none',
            caretColor: TON,
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Ne açıyor */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{t.neAciyorEtiket}</span>
        <input
          type="text"
          value={neAciyor}
          onChange={(e) => setNeAciyor(e.target.value)}
          placeholder={t.neAciyorPlaceholder}
          style={{
            width: '100%',
            padding: '0.7rem 1rem',
            background: 'var(--bg-base)',
            border: '1px solid var(--rule)',
            color: 'var(--ink)',
            fontFamily: 'Jost, sans-serif',
            fontWeight: 300,
            fontSize: '0.92rem',
            outline: 'none',
            caretColor: TON,
            boxSizing: 'border-box',
          }}
        />
      </div>

      <DurumRozeti durum={durum} ortak={ortak} />
    </div>
  );
}

function DurumRozeti({ durum, ortak }) {
  if (!durum) return null;
  const renk = durum === 'hata' ? 'var(--uyari)' : durum === 'kaydedildi' ? 'var(--onay-soft)' : 'var(--ink-muted)';
  const metin = durum === 'kaydediliyor' ? ortak.kaydediliyor : durum === 'kaydedildi' ? ortak.kaydedildi : ortak.hata;
  return (
    <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', color: renk, letterSpacing: '0.08em', alignSelf: 'flex-end' }}>{metin}</span>
  );
}

// ─── BOŞLUK PANELİ (sade: soru + yazma alanı) ──────────────────────────────

function BoslukPanel({ veri, t, ortak, boslukYansima, setBoslukYansima, onKapat }) {
  const boslukId = BOSLUK_ID_PREFIX + veri.no;
  const [metin, setMetin] = useState(boslukYansima[boslukId] || '');
  const [durum, setDurum] = useState(null);
  // Boşluk için ilk alt-soru genelde "ana" sorudur; yoksa generic.
  const soru = (veri.altSorular && veri.altSorular[0]?.soru) || veri.sentez || veri.boslukMetin || '';

  const kaydet = useDebouncedCallback(async (yeni) => {
    setDurum('kaydediliyor');
    const ok = await boslukYansimasiKaydet(KARAKTER, boslukId, yeni);
    if (ok) {
      setBoslukYansima((prev) => ({ ...prev, [boslukId]: yeni }));
      setDurum('kaydedildi');
    } else setDurum('hata');
  });

  return (
    <div style={{ borderTop: '1px solid var(--rule)', padding: '1.4rem 1.3rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      {/* Önce + Sonra mini-bağlam */}
      {(veri.onceMetin || veri.sonraMetin) && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', borderLeft: '2px solid var(--rule)', paddingLeft: '1rem' }}>
          {veri.onceMetin && (
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55 }}>
              <em style={{ color: 'var(--ink-muted)', fontStyle: 'normal', fontFamily: 'Jost, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginRight: '0.5rem' }}>{veri.onceBaslik || '—'}</em>
              {veri.onceMetin}
            </p>
          )}
          {veri.sonraMetin && (
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55 }}>
              <em style={{ color: 'var(--ink-muted)', fontStyle: 'normal', fontFamily: 'Jost, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginRight: '0.5rem' }}>{veri.sonraBaslik || '—'}</em>
              {veri.sonraMetin}
            </p>
          )}
        </div>
      )}

      {/* Soru */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{t.soruEtiket}</span>
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{soru}</p>
      </div>

      {/* Yazma alanı */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{t.yorumEtiket}</span>
        <textarea
          value={metin}
          onChange={(e) => { setMetin(e.target.value); kaydet(e.target.value); }}
          placeholder={t.yorumPlaceholder}
          rows={6}
          style={{
            width: '100%',
            padding: '0.9rem 1rem',
            background: 'var(--bg-base)',
            border: metin ? '1px solid var(--rule)' : '1px dashed var(--rule)',
            color: 'var(--ink)',
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1rem',
            lineHeight: 1.6,
            resize: 'vertical',
            outline: 'none',
            caretColor: TON,
            boxSizing: 'border-box',
            transition: 'border 0.2s ease',
          }}
        />
      </div>

      <DurumRozeti durum={durum} ortak={ortak} />
    </div>
  );
}
