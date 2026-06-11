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
import { karakterGetir } from '../../../../lib/karakterGetir';
import willyI18n, { willyIcerik } from '../../../../../data/willy-i18n';
import { useDil, ceviri } from '../../../../lib/dil';
import { getKalibrasyonProfili } from '../../../../lib/kalibrasyon';
import {
  boslukYansimasiKaydet,
  boslukYansimalariniGetir,
  anSabitiKaydet,
  anSabitleriniGetir,
} from '../../../../lib/kulis';
import TopraklanmaModu from '../../../../../components/TopraklanmaModu';
import BoslukYuruyusu from '../../../../../components/BoslukYuruyusu';
// IMZA: S1-WILLY-01 — anonim misafir katmanı (Sprint 1)
import {
  useOturum,
  misafirMetin,
  misafirSabitYaz,
  misafirBoslukYaz,
  misafirSabitleriOkuAnonim,
  misafirBosluklariOkuAnonim,
} from '../../../../lib/misafir';

const TON = 'var(--accent)';
const KARAKTER = 'willy';
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
  const data = willyIcerik(dil, karakterGetir('willy', dil));

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
    // Oyun Öncesi — metnin yazmadığı, oyuncunun kuracağı sahne-öncesi boşluk katmanı.
    const olaylar = data.oyunOncesi?.olaylar || [];
    if (olaylar.length) {
      dugumler.push({ tip: 'ayrac', anahtar: 'oyunOncesi' });
      for (const olay of olaylar) dugumler.push({ tip: 'olay', veri: olay });
    }
    // Oyun Başlangıcı — Miller'ın yazdığı metnin başladığı yer.
    dugumler.push({ tip: 'ayrac', anahtar: 'oyunBaslangici' });
    for (const sahne of sahneSirali) {
      const sahneOncesi = bosluklar.filter((b) => b.sonraSahneNo === sahne.no);
      for (const b of sahneOncesi) dugumler.push({ tip: 'bosluk', veri: b });
      dugumler.push({ tip: 'sahne', veri: sahne });
    }
    return dugumler;
  }, [data]);

  const [acikPanel, setAcikPanel] = useState(null); // { tip, no } | null
  const [dogrularAcik, setDogrularAcik] = useState(false);
  const [kunyeSekme, setKunyeSekme] = useState('dogrular'); // 'dogrular' | 'iliskiler'

  // Mevcut yazımları okumak için yansıma haritaları.
  const [boslukYansima, setBoslukYansima] = useState({}); // { 'elyazma-bosluk-1': 'metin' }
  const [anSecimleri, setAnSecimleri] = useState({});     // { 's3-a1': 'A', ... } — çatal an seçimleri
  const [anYazmalari, setAnYazmalari] = useState({});     // { 's2-a2': 'metin', ... } — yazma an mühürleri
  const [yukleniyor, setYukleniyor] = useState(true);

  // Aşama 3: kalibrasyondan açık kapı (Bilişsel/Bedensel/Duygusal); skor yok.
  const [acikKapiKey, setAcikKapiKey] = useState(null);
  // Topraklanma overlay'i için: hangi sahne başlığıyla çağrıldı.
  const [topraklanma, setTopraklanma] = useState(null);
  const [yuruyusHedef, setYuruyusHedef] = useState(null); // { tip:'sahne'|'bosluk', no } | null

  // An mühürleme handler'ları — çatal seçimi + yazma (oznel_sabitler).
  async function anSec(an, secenek) {
    setAnSecimleri((p) => ({ ...p, [an.id]: secenek.dal }));
    const kayitOk = await anSabitiKaydet(KARAKTER, { // IMZA: S1-WILLY-02
      boslukNo: an.id,
      catalAnahtar: an.id,
      secilenDal: secenek.dal,
      muhurMetni: secenek.oznelSabit || null,
      ozetMetni: `${secenek.baslik || ''} — ${secenek.aciklama || ''}`.trim(),
      birlesimSahneNo: an.birlesimSahneNo ?? null,
    });
    if (!kayitOk) {
      // Oturum yok / yazım başarısız — cihazda geçici tut.
      misafirSabitYaz(KARAKTER, {
        karakter_id: KARAKTER,
        bosluk_no: an.id,
        catal_anahtar: an.id,
        secilen_dal: secenek.dal,
        muhur_metni: secenek.oznelSabit || null,
        ozet_metni: `${secenek.baslik || ''} — ${secenek.aciklama || ''}`.trim(),
        birlesim_sahne_no: an.birlesimSahneNo ?? null,
      });
    }
  }
  async function anYaz(an, metin) {
    setAnYazmalari((p) => ({ ...p, [an.id]: metin }));
    if (!metin || metin.trim().length === 0) return;
    const kayitOk = await anSabitiKaydet(KARAKTER, { // IMZA: S1-WILLY-03
      boslukNo: an.id,
      catalAnahtar: an.id,
      secilenDal: null,
      muhurMetni: metin,
      ozetMetni: metin,
      birlesimSahneNo: an.birlesimSahneNo ?? null,
    });
    if (!kayitOk) {
      misafirSabitYaz(KARAKTER, {
        karakter_id: KARAKTER,
        bosluk_no: an.id,
        catal_anahtar: an.id,
        secilen_dal: null,
        muhur_metni: metin,
        ozet_metni: metin,
        birlesim_sahne_no: an.birlesimSahneNo ?? null,
      });
    }
  }

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
        // An mühürleri (çatal seçimleri + yazma) — oznel_sabitler'den.
        const sabitler = await anSabitleriniGetir(KARAKTER);
        // IMZA: S1-WILLY-04 — anonimken cihazdaki misafir kayıtlarını birleştir.
        const misafirSatirlar = await misafirSabitleriOkuAnonim(KARAKTER);
        const misafirBosluklar = await misafirBosluklariOkuAnonim(KARAKTER);
        if (!iptal) {
          const secimlerM = { ...((sabitler && sabitler.secimler) || {}) };
          const muhurlerM = { ...((sabitler && sabitler.muhurler) || {}) };
          for (const r of misafirSatirlar) {
            if (r.secilen_dal) secimlerM[r.bosluk_no] = r.secilen_dal;
            else if (r.muhur_metni) muhurlerM[r.bosluk_no] = r.muhur_metni;
          }
          setAnSecimleri(secimlerM);
          setAnYazmalari(muhurlerM);
          if (Object.keys(misafirBosluklar).length > 0) {
            setBoslukYansima((prev) => ({ ...misafirBosluklar, ...prev }));
          }
        }
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

  // Kulis "Bu ana git" derin link: #sahne-3 / #bosluk-5 hash'ini parse et,
  // ilgili paneli aç. Scroll'u aşağıdaki ortak efekt yapar (acikPanel değişince).
  useEffect(() => {
    if (yukleniyor) return;
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.replace('#', '');
    const m = hash.match(/^(sahne|bosluk)-(\d+)$/);
    if (!m) return;
    const tip = m[1];
    const no = Number(m[2]);
    if (tip === 'sahne') sahnePanelAc(no); else boslukPanelAc(no);
  }, [yukleniyor]);

  // Her panel açılışında (tıklama VEYA deep-link) açılan düğümü görünür kıl.
  // Mobil-uyumlu: block:'start' + kartın scrollMarginTop'u (iPhone safe-area
  // dahil) başlığı üst kenardan rahat boşlukla gösterir; panel render olduktan
  // sonra çalışsın diye iki frame bekler.
  useEffect(() => {
    if (!acikPanel || typeof window === 'undefined') return;
    const el = document.getElementById(`${acikPanel.tip}-${acikPanel.no}`);
    if (!el) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }, [acikPanel]);

  // Sahne paneli — an muhurleri mount'ta toplu yuklendigi icin lazy fetch gerekmez.
  function sahnePanelAc(no) {
    setAcikPanel({ tip: 'sahne', no });
  }
  function boslukPanelAc(no) { setAcikPanel({ tip: 'bosluk', no }); }
  function panelKapat() { setAcikPanel(null); }

  if (yukleniyor) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{ortak.yukleniyor}</span>
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
            style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase', textDecoration: 'none', alignSelf: 'flex-start', transition: 'color 0.25s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = TON; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}>
            {ortak.geriWilly}
          </a>
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.35em', color: TON, textTransform: 'uppercase' }}>{s.hub.ustEtiket}</span>
          <h1 style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(2.4rem, 6vw, 3.2rem)', color: 'var(--ink)', margin: 0, lineHeight: 1.1 }}>{data.ad || 'Willy Loman'}</h1>
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>{t.altyazi}</span>
        </header>

        {/* 2. Doğrular + İlişkiler — tek katlanır künye, içinde iki sekme */}
        <BolumKatlanir
          baslik={t.kunyeBaslik || 'Künye'}
          altyazi={`${(data.dogrular || []).length} ${t.dogrularSayim} · ${(data.oyunOncesi?.iliskiler || []).length} ${t.iliskilerSayim} · ${t.dokunAc}`}
          acik={dogrularAcik}
          setAcik={setDogrularAcik}
        >
          <div style={{ marginTop: '0.8rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--rule)', marginBottom: '1rem' }}>
              <KunyeSekmeBtn aktif={kunyeSekme === 'dogrular'} onClick={() => setKunyeSekme('dogrular')}>{t.dogrularBaslik}</KunyeSekmeBtn>
              <KunyeSekmeBtn aktif={kunyeSekme === 'iliskiler'} onClick={() => setKunyeSekme('iliskiler')}>{t.iliskilerBaslik}</KunyeSekmeBtn>
            </div>
            {kunyeSekme === 'dogrular' ? (
              <ul style={{ borderLeft: `2px solid ${TON}`, paddingLeft: '1.3rem', margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {(data.dogrular || []).map((d, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    {typeof d !== 'string' && d.kaynak && <KaynakRozet kaynak={d.kaynak} t={t} />}
                    <span style={{ flex: 1, fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.02rem', lineHeight: 1.6, color: 'var(--ink)' }}>
                      {typeof d === 'string' ? d : d.madde}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.7rem' }}>
                {(data.oyunOncesi?.iliskiler || []).map((iliski) => (
                  <IliskiKart key={iliski.no} iliski={iliski} t={t} />
                ))}
              </div>
            )}
          </div>
        </BolumKatlanir>

        {/* 4. Senaryo akışı — Oyun Öncesi olaylar artık timeline başında (kronolojik). */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <Etiket>{t.senaryoBaslik}</Etiket>
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.85rem', color: 'var(--ink-soft)', marginBottom: '0.4rem' }}>{t.senaryoAltyazi}</span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {akis.map((d, idx) => (
              d.tip === 'ayrac' ? (
                <AyracWilly
                  key={`ayrac-${d.anahtar}`}
                  baslik={d.anahtar === 'oyunOncesi' ? t.fazOyunOncesi : t.fazOyunBaslangici}
                  altyazi={d.anahtar === 'oyunOncesi' ? t.fazOyunOncesiAlt : t.fazOyunBaslangiciAlt}
                />
              ) : d.tip === 'olay' ? (
                <div key={`olay-${d.veri.no}`} id={`olay-${d.veri.no}`} style={{ scrollMarginTop: 'calc(env(safe-area-inset-top, 0px) + 4.5rem)' }}>
                  <OlayDugumu
                    olay={d.veri}
                    acik={acikPanel?.tip === 'olay' && acikPanel?.no === d.veri.no}
                    onAc={() => setAcikPanel(acikPanel?.tip === 'olay' && acikPanel?.no === d.veri.no ? null : { tip: 'olay', no: d.veri.no })}
                    t={t}
                    anSecimleri={anSecimleri}
                    anYazmalari={anYazmalari}
                    onAnSec={anSec}
                    onAnYaz={anYaz}
                  />
                </div>
              ) : (
                <DugumGrubu
                  key={`${d.tip}-${d.veri.no}`}
                  domId={`${d.tip}-${d.veri.no}`}
                  dugum={d}
                  acik={acikPanel?.tip === d.tip && acikPanel?.no === d.veri.no}
                  onAc={() => d.tip === 'sahne' ? sahnePanelAc(d.veri.no) : boslukPanelAc(d.veri.no)}
                  onKapat={panelKapat}
                  t={t}
                  ortak={ortak}
                  boslukYansima={boslukYansima}
                  setBoslukYansima={setBoslukYansima}
                  acikKapiKey={acikKapiKey}
                  onTopraklanmaAc={(baslik) => setTopraklanma(baslik)}
                  onYuruyus={(no) => setYuruyusHedef({ tip: d.tip, no })}
                  anSecimleri={anSecimleri}
                  anYazmalari={anYazmalari}
                  onAnSec={anSec}
                  onAnYaz={anYaz}
                />
              )
            ))}
          </div>
        </div>

      </section>

      {topraklanma && (
        <TopraklanmaModu baslik={topraklanma} onKapat={() => setTopraklanma(null)} />
      )}

      {yuruyusHedef != null && (() => {
        let sarmal = null;
        if (yuruyusHedef.tip === 'sahne') {
          const s = (data.sahnelerWorkbook || []).find((x) => x.no === yuruyusHedef.no);
          if (s && s.yuruyus) sarmal = { id: `sahne-${s.no}`, ad: `Sahne ${s.no}`, birlesimSahneNo: s.no, yuruyus: s.yuruyus };
        } else {
          const b = (data.boslukSet || []).find((x) => x.no === yuruyusHedef.no);
          if (b && b.yuruyus) sarmal = { id: `bosluk-${b.no}`, ad: b.baslik || `Boşluk ${b.no}`, birlesimSahneNo: b.sonraSahneNo, yuruyus: b.yuruyus };
        }
        if (!sarmal) return null;
        return (
          <BoslukYuruyusu
            karakterId={KARAKTER}
            bosluk={sarmal}
            ilkYuruyusMu={false}
            onKapat={() => setYuruyusHedef(null)}
          />
        );
      })()}
    </main>
  );
}

// ─── KÜÇÜK PARÇALAR ────────────────────────────────────────────────────────

function Etiket({ children }) {
  return (
    <span style={{
      fontFamily: 'var(--font-body), sans-serif',
      fontWeight: 600,
      fontSize: '0.6rem',
      letterSpacing: '0.22em',
      color: TON,
      textTransform: 'uppercase',
    }}>{children}</span>
  );
}

// Timeline faz ayracı — "Oyun Öncesi" / "Oyun Başlangıcı" (Nina FazAyrac kalıbı).
function AyracWilly({ baslik, altyazi }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '0.6rem 0 0.2rem 0',
      margin: '0.5rem 0 0 0',
    }}>
      <span style={{
        fontFamily: 'var(--font-body), sans-serif',
        fontWeight: 300,
        fontSize: '0.6rem',
        letterSpacing: '0.35em',
        color: TON,
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}>{baslik}</span>
      <span style={{ flex: 1, height: '1px', backgroundColor: 'var(--rule)' }} />
      {altyazi && (
        <span style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '0.78rem',
          color: 'var(--ink-muted)',
          textAlign: 'right',
          maxWidth: '55%',
        }}>{altyazi}</span>
      )}
    </div>
  );
}

// Tasarim dili Faz 1: katlanir kunyeler TERTIARY — sol cizgi (kapali:rule,
// acik:accent), tam kenar yok. Sakin bilgi; acik panel kadar parlak degil.
function BolumKatlanir({ baslik, altyazi, acik, setAcik, children }) {
  return (
    <div style={{
      borderLeft: `2px solid ${acik ? 'var(--accent)' : 'var(--rule)'}`,
      background: acik ? 'var(--bg-elevated)' : 'transparent',
      transition: 'background 0.2s ease, border-color 0.25s ease',
    }}>
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
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 600,
            fontSize: '0.6rem',
            letterSpacing: '0.22em',
            color: TON,
            textTransform: 'uppercase',
          }}>{baslik}</span>
          {altyazi && (
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.72rem', color: 'var(--ink-muted)', letterSpacing: '0.05em' }}>{altyazi}</span>
          )}
        </span>
        <span aria-hidden style={{
          fontFamily: 'var(--font-body), sans-serif',
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

function KaynakRozet({ kaynak, t }) {
  const isMetin = kaynak === 'metin';
  const renk = isMetin ? 'var(--onay)' : 'var(--ink-muted)';
  const etiket = isMetin ? (t?.kaynakMetin || 'metin') : (t?.kaynakCikarim || 'çıkarım');
  return (
    <span style={{
      fontFamily: 'var(--font-body), sans-serif',
      fontWeight: 200,
      fontSize: '0.52rem',
      letterSpacing: '0.2em',
      color: renk,
      textTransform: 'uppercase',
      padding: '0.18rem 0.5rem',
      border: `1px solid color-mix(in srgb, ${renk} 33%, transparent)`,
      whiteSpace: 'nowrap',
      marginTop: '0.15rem',
    }}>{etiket}</span>
  );
}

function KunyeSekmeBtn({ aktif, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        borderBottom: aktif ? `2px solid ${TON}` : '2px solid transparent',
        padding: '0.4rem 0.2rem 0.6rem',
        marginBottom: '-1px',
        cursor: 'pointer',
        fontFamily: 'var(--font-body), sans-serif',
        fontWeight: aktif ? 400 : 300,
        fontSize: '0.7rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: aktif ? 'var(--ink)' : 'var(--ink-muted)',
        transition: 'color 0.2s ease, border-color 0.2s ease',
      }}
    >{children}</button>
  );
}

function IliskiKart({ iliski, t }) {
  const hayalet = (iliski.rol || '').toLowerCase().includes('hayalet') || (iliski.rol || '').toLowerCase().includes('ghost');
  const satir = (etiket, metin) => metin ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
      <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{etiket}</span>
      <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.82rem', color: 'var(--ink-soft)', lineHeight: 1.55 }}>{metin}</span>
    </div>
  ) : null;
  return (
    <div style={{
      border: hayalet ? '1px dashed var(--rule)' : '1px solid var(--rule)',
      padding: '0.95rem 1.1rem',
      background: 'var(--bg-base)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.55rem',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
        <span style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '1.15rem',
          color: 'var(--ink)',
          lineHeight: 1.2,
        }}>{iliski.ad}</span>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 200,
          fontSize: '0.6rem',
          letterSpacing: '0.18em',
          color: 'var(--ink-muted)',
          textTransform: 'uppercase',
        }}>{iliski.rol}</span>
      </div>
      {satir(t?.iliskiGecmis || 'Geçmiş', iliski.gecmis)}
      {satir(t?.iliskiSimdi || 'Şimdi', iliski.simdi)}
      {satir(t?.iliskiIz || 'İz', iliski.iz)}
      {iliski.yansimaSorusu && (
        <p style={{
          margin: '0.2rem 0 0',
          paddingTop: '0.55rem',
          borderTop: '1px solid var(--rule)',
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: '0.85rem',
          color: TON,
          lineHeight: 1.5,
        }}>{iliski.yansimaSorusu}</p>
      )}
    </div>
  );
}

// ─── OYUN ÖNCESİ OLAY (sade panel) ─────────────────────────────────────────

function OlayDugumu({ olay, acik, onAc, t, anSecimleri, anYazmalari, onAnSec, onAnYaz }) {
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
            fontFamily: 'var(--font-body), sans-serif',
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
              fontFamily: 'var(--font-display), serif',
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
                <span aria-label={t.kayitEtiketi} title={t.kayitEtiketi} style={{ fontFamily: 'var(--font-body), sans-serif', fontStyle: 'normal', fontWeight: 300, fontSize: '0.65rem', color: TON, letterSpacing: '0.05em' }}>★</span>
              )}
            </span>
            {olay.sahneRef && (
              <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.7rem', color: 'var(--ink-muted)', letterSpacing: '0.02em' }}>{olay.sahneRef}</span>
            )}
          </span>
          <span aria-hidden style={{
            fontFamily: 'var(--font-body), sans-serif',
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
                <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.58rem', letterSpacing: '0.28em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{t.panelYazarYuk}</span>
                <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{olay.yuk}</p>
              </div>
            )}
            {olay.yansimaSorusu && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', borderLeft: `2px solid ${TON}`, paddingLeft: '0.9rem' }}>
                <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.58rem', letterSpacing: '0.28em', color: TON, textTransform: 'uppercase' }}>{t.panelYazarYansimaSorusu}</span>
                <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>{olay.yansimaSorusu}</p>
              </div>
            )}

            {/* Olay içi anlar — sahne anlarıyla aynı mühürleme (oznel_sabitler) */}
            {Array.isArray(olay.anlar) && olay.anlar.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: '0.2rem' }}>
                <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.58rem', letterSpacing: '0.28em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{t.panelYazarAnlar}</span>
                {olay.anlar.map((an) => (
                  <AnKart key={an.id} an={an} secimler={anSecimleri} muhurler={anYazmalari} onAnSec={onAnSec} onAnYaz={onAnYaz} t={t} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

// ─── DÜĞÜM (sahne / boşluk) ────────────────────────────────────────────────

function DugumGrubu({ domId, dugum, acik, onAc, onKapat, t, ortak, boslukYansima, setBoslukYansima, acikKapiKey, onTopraklanmaAc, onYuruyus, anSecimleri, anYazmalari, onAnSec, onAnYaz }) {
  const isSahne = dugum.tip === 'sahne';
  const veri = dugum.veri;

  const boslukId = BOSLUK_ID_PREFIX + veri.no;
  // Yazildi (a-mantigi): sahnenin anlarindan en az biri dolu (catal secili VEYA yazma yazili).
  // An id format: 's{no}-aN'. Bosluk icin: metin dolu (degismedi).
  const anPrefix = 's' + veri.no + '-';
  const sahneYazildi = Object.keys(anSecimleri).some((k) => k.startsWith(anPrefix) && anSecimleri[k])
    || Object.keys(anYazmalari).some((k) => k.startsWith(anPrefix) && (anYazmalari[k] || '').trim());
  const yazildi = isSahne ? sahneYazildi : !!boslukYansima[boslukId];
  const kayitAni = isSahne && KAYIT_ANI_SAHNE.has(veri.no);

  // Tasarim dili Faz 1: sahne sabit sicak (yazar); bosluk boske acik kesik
  // (bos kagit, opacity dusur), dolunca sicak isinmis duz. ★ kayit ani sahne
  // ise sol bant accent'e doner — kayit ani ayri vurgu.
  const solBantStil = kayitAni
    ? '4px solid var(--accent)'
    : isSahne
      ? '4px solid var(--sahne-renk)'
      : yazildi
        ? '4px solid var(--bosluk-dolu)'
        : '4px dotted var(--bosluk-bos)';
  const dugumOpacity = (!isSahne && !yazildi) ? 0.72 : 1;
  const dugumKenar = acik ? 'var(--accent)' : 'var(--rule)';

  return (
    <div id={domId} style={{
      border: `1px solid ${dugumKenar}`,
      borderLeft: solBantStil,
      background: acik ? 'var(--bg-elevated)' : 'transparent',
      opacity: dugumOpacity,
      transition: 'background 0.2s ease, border-color 0.25s ease, opacity 0.2s ease',
      scrollMarginTop: 'calc(env(safe-area-inset-top, 0px) + 4.5rem)',
    }}>
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
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 500,
          fontSize: '0.6rem',
          letterSpacing: '0.22em',
          color: isSahne ? TON : 'var(--ink-muted)',
          textTransform: 'uppercase',
          minWidth: '92px',
          paddingTop: '0.15rem',
        }}>
          <DugumIkon isSahne={isSahne} yazildi={yazildi} />
          <span>{isSahne ? t.sahneEtiket : t.boslukEtiket} {veri.no}</span>
        </span>
        <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <span style={{
            fontFamily: 'var(--font-display), serif',
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
              <span aria-label={t.kayitEtiketi} title={t.kayitEtiketi} style={{ fontFamily: 'var(--font-body), sans-serif', fontStyle: 'normal', fontWeight: 300, fontSize: '0.7rem', color: TON, letterSpacing: '0.05em' }}>★</span>
            )}
          </span>
          {veri.konum && (
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.05em', color: 'var(--ink-muted)' }}>{veri.konum}</span>
          )}
        </span>
        <span aria-hidden style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 200,
          fontSize: '0.7rem',
          color: yazildi ? 'var(--onay-soft)' : 'var(--ink-muted)',
          minWidth: '24px',
          textAlign: 'right',
        }}>{yazildi ? t.yazildi : t.yazilmadi}</span>
        <span aria-hidden style={{
          fontFamily: 'var(--font-body), sans-serif',
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
          ? <SahnePanel veri={veri} t={t} ortak={ortak} onKapat={onKapat}
              kayitAni={kayitAni}
              hassas={SAHNE_HASSAS.has(veri.no)}
              provisional={SAHNE_PROVISIONAL.has(veri.no)}
              acikKapiKey={acikKapiKey}
              onTopraklanmaAc={onTopraklanmaAc}
              onYuruyus={onYuruyus}
              anSecimleri={anSecimleri}
              anYazmalari={anYazmalari}
              onAnSec={onAnSec}
              onAnYaz={onAnYaz}
            />
          : <BoslukPanel veri={veri} t={t} ortak={ortak} boslukYansima={boslukYansima} setBoslukYansima={setBoslukYansima} onKapat={onKapat} onYuruyus={onYuruyus} />
      )}
    </div>
  );
}

// ─── SAHNE PANELİ (iki sekme: Yazarın Çerçevesi · Senin Çerçeven) ──────────

function SahnePanel({ veri, t, ortak, onKapat, kayitAni, hassas, provisional, acikKapiKey, onTopraklanmaAc, onYuruyus, anSecimleri, anYazmalari, onAnSec, onAnYaz }) {
  const [sekme, setSekme] = useState('yazar');

  return (
    <div style={{ borderTop: '1px solid var(--rule)', padding: '1.4rem 1.3rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      <div role="tablist" aria-label={t.panelYazarBaslik + ' / ' + t.panelSeninBaslik} style={{ display: 'flex', gap: '0.4rem' }}>
        <SekmeBtn aktif={sekme === 'yazar'} onClick={() => setSekme('yazar')}>{t.panelYazarBaslik}</SekmeBtn>
        <SekmeBtn aktif={sekme === 'senin'} onClick={() => setSekme('senin')}>{t.panelSeninBaslik}</SekmeBtn>
      </div>
      {sekme === 'yazar' ? (
        <YazarinCercevesiSahne veri={veri} t={t} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {veri.yuruyus && (
            <button
              type="button"
              onClick={() => onYuruyus && onYuruyus(veri.no)}
              style={{
                alignSelf: 'flex-start', cursor: 'pointer',
                fontFamily: 'var(--font-body), sans-serif', fontWeight: 400,
                fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--bg-base)', backgroundColor: 'var(--accent)',
                border: 'none', borderRadius: '2px', padding: '0.7rem 1.2rem',
              }}
            >
              {t.yuruyusBaslat || 'Bu sahneyi adım adım kur'}
            </button>
          )}
          <SeninCercevenSahne veri={veri} t={t} secimler={anSecimleri} muhurler={anYazmalari} onAnSec={onAnSec} onAnYaz={onAnYaz} />
        </div>
      )}
    </div>
  );
}


function YazarinCercevesiSahne({ veri, t }) {
  // Yazarın Çerçevesi: yalniz manuscript icerigi (olay/icsel/yuk + replikIzi).
  // Anlar artik Senin Cerceven sekmesinde (SeninCercevenSahne).
  const alanlar = [
    { etiket: t.panelYazarOlay,  icerik: veri.olay },
    { etiket: t.panelYazarIcsel, icerik: veri.icsel },
    { etiket: t.panelYazarYuk,   icerik: veri.yuk },
  ].filter((a) => a.icerik);
  if (alanlar.length === 0 && !veri.replikIzi) {
    return <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0 }}>{t.panelYazarHenuz}</p>;
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
      {alanlar.map((a) => (
        <div key={a.etiket} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.28em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{a.etiket}</span>
          <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.02rem', color: 'var(--ink)', margin: 0, lineHeight: 1.65 }}>{a.icerik}</p>
        </div>
      ))}
      {veri.replikIzi ? (
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0.4rem', padding: '0.9rem 1.1rem 1rem', background: 'var(--accent-bg)', border: `1px solid ${TON}`, marginTop: '0.3rem' }}>
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{t.anIzEtiket} · {t.panelYazarReplik}</span>
          <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.08rem', color: 'var(--ink)', margin: 0, lineHeight: 1.55, fontWeight: 400 }}>
            <span style={{ color: TON, fontSize: '1.4rem', verticalAlign: '-0.15em', marginRight: '0.1rem' }}>❞</span>{veri.replikIzi}
          </p>
        </div>
      ) : null}
    </div>
  );
}

// SENIN CERCEVEN (sahne) — Nina mantigi: anlar (catal AnSecenek + yazma AnYazma)
function SeninCercevenSahne({ veri, t, secimler, muhurler, onAnSec, onAnYaz }) {
  const anlar = Array.isArray(veri.anlar) ? veri.anlar : [];
  if (anlar.length === 0) {
    return <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0 }}>{t.seninBosDurum}</p>;
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
      {anlar.map((an) => (
        <AnKart key={an.id} an={an} secimler={secimler} muhurler={muhurler} onAnSec={onAnSec} onAnYaz={onAnYaz} t={t} />
      ))}
    </div>
  );
}

// ─── An seçeneği (çatal şıkı — Nina SecenekSik paritesi) ────────────────────
function AnSecenek({ secili, soluk, onClick, harf, baslik, aciklama, muhur }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: secili ? 'var(--accent-bg)' : 'var(--bg-elevated)',
        border: secili ? `1.5px solid ${TON}` : '1px solid var(--rule)',
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
        width: '24px', height: '24px', minWidth: '24px', borderRadius: '50%',
        border: `1px solid ${secili ? TON : 'var(--ink-muted)'}`,
        backgroundColor: secili ? TON : 'transparent',
        color: secili ? 'var(--bg-base)' : 'var(--ink-muted)',
        fontFamily: 'var(--font-body), sans-serif', fontWeight: 400, fontSize: '0.7rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.05rem',
      }}>{secili ? '✓' : harf}</span>
      <span style={{ flex: 1 }}>
        {baslik ? (
          <span style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink)', display: 'block', marginBottom: '0.2rem' }}>{baslik}</span>
        ) : null}
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.8rem', color: 'var(--ink-soft)', lineHeight: 1.6, display: 'block' }}>{aciklama}</span>
        {secili && muhur ? (
          <span style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.82rem', color: TON, lineHeight: 1.6, display: 'block', marginTop: '0.4rem' }}>↳ {muhur}</span>
        ) : null}
      </span>
    </button>
  );
}

// ─── An yazma (serbest metin → mühür — Nina YazmaAni paritesi) ──────────────
// ─── AN KARTI (paylasilan) — tip-duyarli eyebrow: Karar / Bosluk ────────────
// Bilissel cerceve gorunur: catal = "Karar" (yorum secilir+muhurlenir),
// yazma = "Bosluk" (oyuncu uretir+muhurler). Soru-cevap degil, bosluk-doldurma.
function AnKart({ an, secimler, muhurler, onAnSec, onAnYaz, t }) {
  const { anonim: anonimAn } = useOturum(); // IMZA: S1-WILLY-06 (hook)
  const { dil: dilAn } = useDil();
  const mtAn = misafirMetin(dilAn);
  const isKarar = an.tip === 'catal';
  const isHatira = an.tip === 'hatira';
  const isIz = an.tip === 'iz';
  const isSessizBilgi = an.tip === 'sessizbilgi';
  const eyebrow = isKarar ? t.anKararEtiket : isHatira ? t.anHatiraEtiket : isIz ? t.anIzUretimEtiket : isSessizBilgi ? t.anSessizBilgiEtiket : t.anBoslukEtiket;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', padding: '0.9rem 1rem', background: 'var(--bg-base)', borderLeft: `2px solid ${TON}`, border: '1px solid var(--rule)' }}>
      <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{eyebrow}</span>
      <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.02rem', color: 'var(--ink)', margin: 0, lineHeight: 1.55 }}>{an.soru}</p>
      {isKarar && Array.isArray(an.secenekler) ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {an.secenekler.map((se) => (
            <AnSecenek key={se.dal} secili={secimler[an.id] === se.dal} soluk={secimler[an.id] && secimler[an.id] !== se.dal} onClick={() => onAnSec(an, se)} harf={se.dal} baslik={se.baslik} aciklama={se.aciklama} muhur={se.oznelSabit} />
          ))}
        </div>
      ) : null}
      {/* IMZA: S1-WILLY-06 — anonim çatal seçimi: dürüst geçici-kayıt mesajı */}
      {isKarar && anonimAn && secimler[an.id] ? (
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.68rem', color: 'var(--uyari)', lineHeight: 1.5 }}>
          {mtAn.gecici}{' '}
          <a href={'/giris?geri=' + encodeURIComponent('/antrenman/karakter/willy/el-yazmasi')} style={{ color: 'var(--accent)', textDecoration: 'none' }}>{mtAn.girisYap}</a>
        </span>
      ) : null}
      {(an.tip === 'yazma' || an.tip === 'hatira' || an.tip === 'iz' || an.tip === 'sessizbilgi') ? (
        <AnYazma an={an} deger={muhurler[an.id] || ''} onYaz={(metin) => onAnYaz(an, metin)} t={t} hatira={isHatira} iz={isIz} sessizBilgi={isSessizBilgi} />
      ) : null}
    </div>
  );
}

function AnYazma({ an, deger, onYaz, t, hatira, iz, sessizBilgi }) {
  const { anonim: anonimYazma } = useOturum(); // IMZA: S1-WILLY-05 (hook)
  const { dil: dilYazma } = useDil();
  const mtYazma = misafirMetin(dilYazma);
  const [yerel, setYerel] = useState(deger || '');
  const [kaydedildi, setKaydedildi] = useState(false);
  useEffect(() => { setYerel(deger || ''); }, [deger]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
      <textarea
        value={yerel}
        onChange={(e) => { setYerel(e.target.value); setKaydedildi(false); }}
        onBlur={() => { if (yerel !== (deger || '')) { onYaz(yerel); setKaydedildi(true); } }}
        placeholder={t.yorumPlaceholder}
        rows={3}
        style={{
          width: '100%', padding: '0.6rem 0.75rem', border: '1px solid var(--rule)',
          backgroundColor: 'var(--bg-elevated)', color: 'var(--ink)',
          fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.85rem',
          lineHeight: 1.65, resize: 'vertical', boxSizing: 'border-box', outline: 'none', caretColor: TON,
        }}
      />
      {/* IMZA: S1-WILLY-05 — anonimde "mühürlendi" yerine dürüst geçici-kayıt mesajı */}
      {(kaydedildi || (deger && yerel === deger)) && yerel.trim().length > 0 ? (
        anonimYazma ? (
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.68rem', color: 'var(--uyari)', alignSelf: 'flex-end', textAlign: 'right', lineHeight: 1.5 }}>
            {mtYazma.gecici}{' '}
            <a href={'/giris?geri=' + encodeURIComponent('/antrenman/karakter/willy/el-yazmasi')} style={{ color: 'var(--accent)', textDecoration: 'none' }}>{mtYazma.girisYap}</a>
          </span>
        ) : (
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.65rem', letterSpacing: '0.2em', color: TON, textTransform: 'uppercase', alignSelf: 'flex-end' }}>{t.muhurlendi || '✓'}</span>
        )
      ) : (
        <span style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.74rem', color: 'var(--ink-muted)', alignSelf: 'flex-end' }}>{sessizBilgi ? (t.sessizBilgiYonerge || t.muhurleYonerge) : iz ? (t.izYonerge || t.muhurleYonerge) : hatira ? (t.hatiraYonerge || t.muhurleYonerge) : t.muhurleYonerge}</span>
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
        fontFamily: 'var(--font-body), sans-serif',
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

function DurumRozeti({ durum, ortak }) {
  const { dil: dilRozet } = useDil(); // IMZA: S1-WILLY-08
  const mtRozet = misafirMetin(dilRozet);
  if (!durum) return null;
  const renk = durum === 'hata' || durum === 'gecici' ? 'var(--uyari)' : durum === 'kaydedildi' ? 'var(--onay-soft)' : 'var(--ink-muted)';
  const metin = durum === 'kaydediliyor' ? ortak.kaydediliyor : durum === 'kaydedildi' ? ortak.kaydedildi : durum === 'gecici' ? mtRozet.gecici : ortak.hata;
  return (
    <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.7rem', color: renk, letterSpacing: '0.08em', alignSelf: 'flex-end' }}>{metin}</span>
  );
}

// ─── BOŞLUK PANELİ (sade: soru + yazma alanı) ──────────────────────────────

function BoslukPanel({ veri, t, ortak, boslukYansima, setBoslukYansima, onKapat, onYuruyus }) {
  const boslukId = BOSLUK_ID_PREFIX + veri.no;
  const [metin, setMetin] = useState(boslukYansima[boslukId] || '');
  const [durum, setDurum] = useState(null);
  // Boşluk için ilk alt-soru genelde "ana" sorudur; yoksa generic.
  const soru = (veri.altSorular && veri.altSorular[0]?.soru) || veri.sentez || veri.boslukMetin || '';

  const { anonim: anonimPanel } = useOturum(); // IMZA: S1-WILLY-07
  const kaydet = useDebouncedCallback(async (yeni) => {
    setDurum('kaydediliyor');
    const ok = await boslukYansimasiKaydet(KARAKTER, boslukId, yeni);
    if (ok) {
      setBoslukYansima((prev) => ({ ...prev, [boslukId]: yeni }));
      setDurum('kaydedildi');
    } else if (anonimPanel) {
      misafirBoslukYaz(KARAKTER, boslukId, yeni);
      setBoslukYansima((prev) => ({ ...prev, [boslukId]: yeni }));
      setDurum('gecici');
    } else setDurum('hata');
  });

  return (
    <div style={{ borderTop: '1px solid var(--rule)', padding: '1.4rem 1.3rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      {veri.yuruyus && (
        <button
          type="button"
          onClick={() => onYuruyus && onYuruyus(veri.no)}
          style={{
            alignSelf: 'flex-start', cursor: 'pointer',
            fontFamily: 'var(--font-body), sans-serif', fontWeight: 400,
            fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--bg-base)', backgroundColor: 'var(--accent)',
            border: 'none', borderRadius: '2px', padding: '0.7rem 1.2rem',
          }}
        >
          {t.yuruyusBaslatBosluk || t.yuruyusBaslat || 'Bu boşluğu adım adım kur'}
        </button>
      )}
      {/* Önce + Sonra mini-bağlam */}
      {(veri.onceMetin || veri.sonraMetin) && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', borderLeft: '2px solid var(--rule)', paddingLeft: '1rem' }}>
          {veri.onceMetin && (
            <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55 }}>
              <em style={{ color: 'var(--ink-muted)', fontStyle: 'normal', fontFamily: 'var(--font-body), sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginRight: '0.5rem' }}>{veri.onceBaslik || '—'}</em>
              {veri.onceMetin}
            </p>
          )}
          {veri.sonraMetin && (
            <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55 }}>
              <em style={{ color: 'var(--ink-muted)', fontStyle: 'normal', fontFamily: 'var(--font-body), sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginRight: '0.5rem' }}>{veri.sonraBaslik || '—'}</em>
              {veri.sonraMetin}
            </p>
          )}
        </div>
      )}

      {/* Soru */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{t.soruEtiket}</span>
        <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{soru}</p>
      </div>

      {/* Yazma alanı */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{t.yorumEtiket}</span>
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
            fontFamily: 'var(--font-display), serif',
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

// ─── DÜĞÜM İKONU (Faz 1 tasarım dili) ─────────────────────────────────────
// Sahne = kare (sabit bordo). Boşluk = daire (boşken halka açık nötrde,
// dolunca dolu sıcak kehribar). Hızlı tür ayrımı + ısınma sinyali.
function DugumIkon({ isSahne, yazildi }) {
  const dolguRenk = isSahne
    ? 'var(--sahne-renk)'
    : yazildi
      ? 'var(--bosluk-dolu)'
      : 'transparent';
  const kenarRenk = isSahne
    ? 'var(--sahne-renk)'
    : yazildi
      ? 'var(--bosluk-dolu)'
      : 'var(--bosluk-bos)';
  return (
    <span aria-hidden style={{
      width: '11px',
      height: '11px',
      background: dolguRenk,
      border: `1.5px solid ${kenarRenk}`,
      borderRadius: isSahne ? '1px' : '50%',
      flexShrink: 0,
    }} />
  );
}
