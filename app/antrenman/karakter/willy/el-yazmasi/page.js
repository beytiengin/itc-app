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
import {
  boslukYansimasiKaydet,
  boslukYansimalariniGetir,
  antrenmanAdimiKaydet,
  antrenmanYansimalariniGetir,
} from '../../../../lib/kulis';

const TON = 'var(--accent)';
const KARAKTER = 'willy';
const SAHNE_ANTRENMAN_PREFIX = 'elyazma-sahne-'; // antrenmanId şeması
const BOSLUK_ID_PREFIX = 'elyazma-bosluk-';      // boslukId şeması

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

  // Birleşik akış: sahnelerWorkbook + boslukSet → yasamSirasi sıralı tek dizi.
  const akis = useMemo(() => {
    const sahneler = (data.sahnelerWorkbook || []).map((sa) => ({
      tip: 'sahne',
      yasamSirasi: sa.yasamSirasi ?? sa.no,
      veri: sa,
    }));
    const bosluklar = (data.boslukSet || []).map((b) => ({
      tip: 'bosluk',
      yasamSirasi: b.yasamSirasi ?? 0,
      veri: b,
    }));
    return [...sahneler, ...bosluklar].sort((a, b) => a.yasamSirasi - b.yasamSirasi);
  }, [data]);

  const [acikPanel, setAcikPanel] = useState(null); // { tip, no } | null
  const [iliskilerAcik, setIliskilerAcik] = useState(false);
  const [oyunOncesiAcik, setOyunOncesiAcik] = useState(false);

  // Mevcut yazımları okumak için yansıma haritaları.
  const [boslukYansima, setBoslukYansima] = useState({}); // { 'elyazma-bosluk-1': 'metin' }
  const [sahneYansima, setSahneYansima] = useState({});   // { 'elyazma-sahne-3': { 1: '...', 2: '...' } }
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    let iptal = false;
    async function yukle() {
      try {
        const [bosluklar, sahneList] = await Promise.all([
          boslukYansimalariniGetir(KARAKTER),
          // sahneler için tüm antrenman id'leri tek tek çekmek pahalı — toplu getter yok;
          // her sahnenin yansımalarını ihtiyaç anında lazy yükleriz. Şimdilik boş.
          Promise.resolve([]),
        ]);
        if (iptal) return;
        const bMap = {};
        (bosluklar || []).forEach((b) => { bMap[b.bosluk_id] = b.metin; });
        setBoslukYansima(bMap);
        setSahneYansima({}); // sahne yansımaları panel açılınca lazy yüklenir.
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
        const adimlar = await antrenmanYansimalariniGetir(KARAKTER, id);
        const map = {};
        (adimlar || []).forEach((a) => { map[a.adim_no] = a.metin; });
        setSahneYansima((prev) => ({ ...prev, [id]: map }));
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

        {/* 2. Doğrular künyesi */}
        <Bolum baslik={t.dogrularBaslik}>
          <ul style={{ borderLeft: `2px solid ${TON}`, paddingLeft: '1.3rem', margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {(data.dogrular || []).map((d, i) => (
              <li key={i} style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.02rem', lineHeight: 1.6, color: 'var(--ink)' }}>
                {typeof d === 'string' ? d : d.madde}
              </li>
            ))}
          </ul>
        </Bolum>

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

        {/* 4. Açık giriş kapısı çubuğu — Aşama 1: statik gösterge */}
        <GirisKapisiCubugu t={t} />

        {/* 5. Oyun Öncesi fasıl (katlanır) */}
        <BolumKatlanir
          baslik={`${t.oyunOncesiBaslik} · ${t.oyunOncesiAltyazi}`}
          altyazi={`${(data.oyunOncesi?.olaylar || []).length} ${t.oyunOncesiSayim} · ${t.dokunAc}`}
          acik={oyunOncesiAcik}
          setAcik={setOyunOncesiAcik}
        >
          <ul style={{ marginTop: '0.8rem', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {(data.oyunOncesi?.olaylar || []).map((olay) => (
              <li key={olay.no} style={{
                border: '1px solid var(--rule)',
                padding: '0.9rem 1.1rem',
                background: 'var(--bg-elevated)',
              }}>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.65rem', letterSpacing: '0.2em', color: TON, textTransform: 'uppercase' }}>
                  {olay.no}
                </span>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.5, color: 'var(--ink)', margin: '0.4rem 0 0' }}>
                  {olay.baslik}
                </p>
              </li>
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
              />
            ))}
          </div>
        </div>

      </section>
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

function Bolum({ baslik, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
      <Etiket>{baslik}</Etiket>
      {children}
    </div>
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

function GirisKapisiCubugu({ t }) {
  // Aşama 1: statik üç kapı göstergesi. Aşama 3'te kalibrasyon kapısı vurgulanacak.
  const kapilar = [t.girisKapisiBilissel, t.girisKapisiBedensel, t.girisKapisiDuygusal];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
      <Etiket>{t.girisKapisiEtiket}</Etiket>
      <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: 'var(--ink-soft)', margin: '0 0 0.3rem', lineHeight: 1.5 }}>{t.girisKapisiAciklama}</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {kapilar.map((k) => (
          <span key={k} style={{
            border: '1px solid var(--rule)',
            padding: '0.45rem 0.95rem',
            fontFamily: 'Jost, sans-serif',
            fontWeight: 300,
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            color: 'var(--ink-soft)',
            textTransform: 'uppercase',
            borderRadius: 999,
          }}>{k}</span>
        ))}
      </div>
    </div>
  );
}

// ─── DÜĞÜM (sahne / boşluk) ────────────────────────────────────────────────

function DugumGrubu({ dugum, acik, onAc, onKapat, t, ortak, boslukYansima, setBoslukYansima, sahneYansima, setSahneYansima }) {
  const isSahne = dugum.tip === 'sahne';
  const veri = dugum.veri;

  // Yazıldı işareti: sahne için adımlar 1 veya 2 dolu; boşluk için metin dolu.
  const sahneId = SAHNE_ANTRENMAN_PREFIX + veri.no;
  const boslukId = BOSLUK_ID_PREFIX + veri.no;
  const yazildi = isSahne
    ? !!(sahneYansima[sahneId] && (sahneYansima[sahneId][1] || sahneYansima[sahneId][2]))
    : !!boslukYansima[boslukId];

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
          }}>{veri.baslik}</span>
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
          ? <SahnePanel veri={veri} t={t} ortak={ortak} sahneYansima={sahneYansima} setSahneYansima={setSahneYansima} onKapat={onKapat} />
          : <BoslukPanel veri={veri} t={t} ortak={ortak} boslukYansima={boslukYansima} setBoslukYansima={setBoslukYansima} onKapat={onKapat} />
      )}
    </div>
  );
}

// ─── SAHNE PANELİ (iki sekme: Yazarın Çerçevesi · Senin Çerçeven) ──────────

function SahnePanel({ veri, t, ortak, sahneYansima, setSahneYansima, onKapat }) {
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
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0 }}>
          {t.panelYazarHenuz}
        </p>
      ) : (
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
      )}
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
