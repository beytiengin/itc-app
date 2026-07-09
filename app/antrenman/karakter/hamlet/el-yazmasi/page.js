// app/antrenman/karakter/hamlet/el-yazmasi/page.js
// imza: hamlet-elyazmasi-v2-2026-06-10
// El yazması karakter sayfası — Katman 1 · Karar 41 Aşama 1.
//
// Dört eski sayfayı (oyun-oncesi-yasam · timeline · yazarin-cercevesi ·
// senin-cerceven) tek okunabilir akışa birleştirir. Yapı (yukarıdan aşağı):
//   1. Başlık (Modül II · Hamlet · El yazması)
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
// - Substitution yok: tüm sorgular karakter-merkezli ("Hamlet bunu yaşarken…").
// - Aktivasyon dili (Karar 34): "yazıldı/tamamlandı" — "canlı/aktif" değil.
// - Tıklanabilir affordance daima görünür (dokunmatik; hover'a bağlı değil).
// - Eski 4 sayfa SİLİNMEZ — kademeli geçiş.
//
// Aşama 1 KAPSAM DIŞI: Egzersiz arkı (3 Giriş Kapısı, ★ mühürle, güvenli çıkış)
// → Aşama 3. Yazarın Çerçevesi sekmesi gerçek manuscript verisiyle → Aşama 2.

'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { karakterGetir } from '../../../../lib/karakterGetir';
import hamletI18n, { hamletIcerik } from '../../../../../data/hamlet-i18n';
import { useDil, ceviri } from '../../../../lib/dil';
import { getKalibrasyonProfili } from '../../../../lib/kalibrasyon';
import {
  boslukYansimasiKaydet,
  boslukYansimalariniGetir,
  antrenmanAdimiKaydet,
  antrenmanYansimalariniGetir,
  anSabitiKaydet,
  anSabitleriniGetir,
} from '../../../../lib/kulis';
import TopraklanmaModu from '../../../../../components/TopraklanmaModu';
import UyariSeviye, { uyariSeviyesi } from '../../../../../components/UyariSeviye';
import KisimSifir from '../../../../../components/KisimSifir';
import BaselineKunye from '../../../../../components/BaselineKunye';
import BoslukYuruyusu from '../../../../../components/BoslukYuruyusu';
import KartCatali from '../../../../../components/KartCatali';

const TON = 'var(--accent)';
const KARAKTER = 'hamlet';
const SAHNE_ANTRENMAN_PREFIX = 'elyazma-sahne-'; // antrenmanId şeması
const BOSLUK_ID_PREFIX = 'elyazma-bosluk-';      // boslukId şeması

// ★ kayıt anları — manuscriptlerden teyitli konumlar (Karar 41 Aşama 2).
// Yapısal "Çapa No" GÖSTERİLMEZ; sadece görsel ★ işaret oyuncuya nüans verir.
// HAMLET v2: kayıt anları + hassas/provisional setler boş bırakıldı —
// Hamlet dramaturji onayı (Beyti/Filiz) gelmeden işaretleme YAPILMAZ.
// Onay sonrası bu set'ler doldurulur.
const KAYIT_ANI_OYUN_ONCESI = new Set([]); // olay no: dramaturji onayı bekliyor
const KAYIT_ANI_SAHNE = new Set([]);       // sahne no: dramaturji onayı bekliyor
const SAHNE_HASSAS = new Set([]);          // güvenli çıkış akışı — onay bekliyor
const SAHNE_PROVISIONAL = new Set([]);     // Derinleştir arkı klinik onay — bekliyor

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
  const s = ceviri(hamletI18n, dil);
  const t = s.elYazmasi;
  const ortak = s.ortak;
  const data = hamletIcerik(dil, karakterGetir('hamlet', dil));

  // Birleşik akış — OYUN SIRASI (Karar 41 v2):
  // - Sahneler `no` 1→14 sıralı (yasamSirasi DEĞİL).
  // - Her boşluk `sonraSahneNo`'daki sahnenin ÖNÜNE yerleşir.
  // - Aynı sahneye birden fazla boşluk varsa: `boslukSet` dizisinin FİZİKSEL
  //   sırası geçerli (özellikle Sahne 9 önü B5→B1→B10 ve Sahne 10 önü
  //   B4→B11→B8 swap'ları için kritik).
  // - `no` ALANI KAYIT KİMLİĞİ — sıralama için ASLA kullanılmaz.
  const akis = useMemo(() => {
    const sahneSirali = [...(data.sahnelerWorkbook || [])].sort((a, b) => a.no - b.no);
    const bosluklar = data.boslukSet || []; // dizi fiziksel sırası korunur — sort YOK
    const dugumler = [];
    // Oyun Öncesi — metnin yazmadığı, oyuncunun kuracağı sahne-öncesi katman.
    // Willy paritesi: ana akışın başında, faz ayraçlarıyla (katlanır fasıl DEĞİL).
    const olaylar = data.oyunOncesi?.olaylar || [];
    if (olaylar.length) {
      dugumler.push({ tip: 'ayrac', anahtar: 'oyunOncesi' });
      for (const olay of olaylar) dugumler.push({ tip: 'olay', veri: olay });
    }
    dugumler.push({ tip: 'ayrac', anahtar: 'oyunBaslangici' });
    for (const sahne of sahneSirali) {
      const sahneOncesi = bosluklar.filter((b) => b.sonraSahneNo === sahne.no);
      for (const b of sahneOncesi) dugumler.push({ tip: 'bosluk', veri: b });
      dugumler.push({ tip: 'sahne', veri: sahne });
    }
    return dugumler;
  }, [data]);

  const [acikPanel, setAcikPanel] = useState(null); // { tip, no } | null
  // IMZA: S3-SCROLL-01 — panel değişiminde zıplama düzeltmesi: tıklama
  // anındaki başlık konumu saklanır; layout oturunca instant geri kurulur,
  // sonra başlık yumuşakça üste taşınır (Nina deseninin akordiyon uyarlaması).
  const panelAcOnceTop = useRef(null);
  const [acikOlay, setAcikOlay] = useState(null);   // olay no | null (oyun öncesi)
  const [dogrularAcik, setDogrularAcik] = useState(false);
  const [kunyeSekme, setKunyeSekme] = useState('dogrular'); // 'dogrular' | 'iliskiler'

  // Mevcut yazımları okumak için yansıma haritaları.
  const [boslukYansima, setBoslukYansima] = useState({}); // { 'elyazma-bosluk-1': 'metin' }
  const [sahneYansima, setSahneYansima] = useState({});   // { 'elyazma-sahne-3': { 1: '...', 2: '...' } }
  // An mühürleri (Willy paritesi) — sahnelerWorkbook[].anlar çatal/yazma; oznel_sabitler.
  const [anSecimleri, setAnSecimleri] = useState({});     // { 's1-a1': 'A', ... } çatal seçimleri
  const [anYazmalari, setAnYazmalari] = useState({});     // { 's1-a3': 'metin', ... } yazma mühürleri
  const [yukleniyor, setYukleniyor] = useState(true);

  // An mühürleme handler'ları — çatal seçimi + yazma (oznel_sabitler, bosluk_no = an.id).
  async function anSec(an, secenek) {
    setAnSecimleri((p) => ({ ...p, [an.id]: secenek.dal }));
    await anSabitiKaydet(KARAKTER, {
      boslukNo: an.id,
      catalAnahtar: an.id,
      secilenDal: secenek.dal,
      muhurMetni: secenek.oznelSabit || null,
      ozetMetni: `${secenek.baslik || ''} — ${secenek.aciklama || ''}`.trim(),
      birlesimSahneNo: an.birlesimSahneNo ?? null,
    });
  }
  // IMZA: OZEL-YAZ-H1 — ozelMi=true ise secilen_dal='ozel' korunur, metin ozel_metin'e gider
  async function anYaz(an, metin, ozelMi = false) {
    setAnYazmalari((p) => ({ ...p, [an.id]: metin }));
    if (ozelMi) {
      await anSabitiKaydet(KARAKTER, {
        boslukNo: an.id,
        catalAnahtar: an.id,
        secilenDal: 'ozel',
        ozelMetin: metin && metin.trim().length ? metin : null,
        ozetMetni: metin || null,
        muhurMetni: null,
        birlesimSahneNo: an.birlesimSahneNo ?? null,
      });
      return;
    }
    if (!metin || metin.trim().length === 0) return;
    await anSabitiKaydet(KARAKTER, {
      boslukNo: an.id,
      catalAnahtar: an.id,
      secilenDal: null,
      muhurMetni: metin,
      ozetMetni: metin,
      birlesimSahneNo: an.birlesimSahneNo ?? null,
    });
  }

  // Aşama 3: kalibrasyondan açık kapı (Bilişsel/Bedensel/Duygusal); skor yok.
  const [acikKapiKey, setAcikKapiKey] = useState(null);
  // Topraklanma overlay'i için: hangi sahne başlığıyla çağrıldı.
  const [topraklanma, setTopraklanma] = useState(null);
  // Yürüyüş tam-ekran overlay'i (Willy paritesi) — { tip:'bosluk'|'sahne', no } | null
  const [yuruyusHedef, setYuruyusHedef] = useState(null);

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
        setAcikKapiKey(null); // Karar 65: Giriş Kapısı çubuğu emekli — ölçümü kalktı, kavram kanonda saklı.
        // An mühürleri (çatal seçimleri + yazma) — oznel_sabitler'den.
        const sabitler = await anSabitleriniGetir(KARAKTER);
        if (!iptal && sabitler) {
          setAnSecimleri(sabitler.secimler || {});
          setAnYazmalari(sabitler.muhurler || {});
        }
      } finally {
        if (!iptal) setYukleniyor(false);
      }
    }
    yukle();
    return () => { iptal = true; };
  }, []);

  // Kulis "Bu ana git" derin link: #sahne-3 / #bosluk-5 hash'ini parse et,
  // ilgili paneli aç, o düğüme scroll et. Yükleme bitince bir kez çalışır.
  useEffect(() => {
    if (yukleniyor) return;
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.replace('#', '');
    const m = hash.match(/^(sahne|bosluk)-(\d+)$/);
    if (!m) return;
    const tip = m[1];
    const no = Number(m[2]);
    if (tip === 'sahne') sahnePanelAc(no); else boslukPanelAc(no);
    // Scroll artık ortak [acikPanel] efektinde (IMZA: S3-SCROLL-01).
  }, [yukleniyor]);

  // IMZA: S3-SCROLL-01 — her panel açılışında: tıklanan başlığı önce eski
  // ekran konumuna instant sabitle (üstteki panelin kapanma zıplamasını
  // yutar), sonra yumuşakça üste taşı. Willy/Nina paritesi.
  useEffect(() => {
    if (!acikPanel || typeof window === 'undefined') return;
    const el = document.getElementById(`${acikPanel.tip}-${acikPanel.no}`);
    if (!el) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const onceTop = panelAcOnceTop.current;
        panelAcOnceTop.current = null;
        if (onceTop != null) {
          const fark = el.getBoundingClientRect().top - onceTop;
          if (fark) window.scrollBy({ top: fark, left: 0, behavior: 'auto' });
        }
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }, [acikPanel]);

  // Sahne panelini açarken o sahnenin antrenman adımlarını lazy yükle.
  async function sahnePanelAc(no) {
    panelAcOnceTop.current = (typeof document !== 'undefined' && document.getElementById(`sahne-${no}`)?.getBoundingClientRect().top) ?? null; // IMZA: S3-SCROLL-01
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
  function boslukPanelAc(no) {
    panelAcOnceTop.current = (typeof document !== 'undefined' && document.getElementById(`bosluk-${no}`)?.getBoundingClientRect().top) ?? null; // IMZA: S3-SCROLL-01
    setAcikPanel({ tip: 'bosluk', no });
  }
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
          <a href="/antrenman/karakter/hamlet"
            style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase', textDecoration: 'none', alignSelf: 'flex-start', transition: 'color 0.25s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = TON; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}>
            {ortak.geriWilly}
          </a>
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.35em', color: TON, textTransform: 'uppercase' }}>{s.hub.ustEtiket}</span>
          <h1 style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(2.4rem, 6vw, 3.2rem)', color: 'var(--ink)', margin: 0, lineHeight: 1.1 }}>{data.ad || 'Hamlet'}</h1>
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--ink-soft)', textTransform: 'uppercase' }}>{t.altyazi}</span>
        </header>

        {/* KISIM 0 · Yöntem — Karar 61 (EŞİK ↔ KISIM I arası; araç tanıtımı, katlı) */}
        <KisimSifir />

        {/* 2. Doğrular + İlişkiler — tek katlanır künye, içinde iki sekme (Willy paritesi) */}
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
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.7rem' }}>
                {(data.oyunOncesi?.iliskiler || []).map((iliski) => (
                  <IliskiKart key={iliski.no} iliski={iliski} />
                ))}
              </div>
            )}
          </div>
        </BolumKatlanir>

        {/* Kaybedilen Dünya (Baseline) — Karar 57: El Yazması 5. katman.
            İlişkiler künyesinden sonra, Oyun Öncesi'nden önce. An kartları
            (Hatıra baskın, travma-DIŞI) viewer-yerel AnKart ile. */}
        {data.kaybedilenDunya ? (
          <BaselineKunye veri={data.kaybedilenDunya}>
            {(data.kaybedilenDunya.anlar || []).map((an) => (
              <AnKart key={an.id} an={an} secimler={anSecimleri} muhurler={anYazmalari} onAnSec={anSec} onAnYaz={anYaz} t={t} />
            ))}
          </BaselineKunye>
        ) : null}

        {/* Senaryo akışı — Oyun Öncesi olaylar artık akışın başında (Willy paritesi,
            katlanır fasıl DEĞİL). Başlık hiyerarşisi: H1 (ad) > H2 (bu) > faz ayracı. */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display), serif', fontWeight: 300, fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)', lineHeight: 1.15, color: 'var(--ink)', margin: 0 }}>{t.senaryoBaslik}</h2>
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.85rem', color: 'var(--ink-soft)', marginBottom: '0.5rem' }}>{t.senaryoAltyazi}</span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {akis.map((d) => (
              d.tip === 'ayrac' ? (
                <AyracFaz
                  key={`ayrac-${d.anahtar}`}
                  baslik={d.anahtar === 'oyunOncesi' ? t.fazOyunOncesi : t.fazOyunBaslangici}
                  altyazi={d.anahtar === 'oyunOncesi' ? t.fazOyunOncesiAlt : t.fazOyunBaslangiciAlt}
                />
              ) : d.tip === 'olay' ? (
                <div key={`olay-${d.veri.no}`} id={`olay-${d.veri.no}`} style={{ scrollMarginTop: 'calc(env(safe-area-inset-top, 0px) + 4.5rem)' }}>
                  <OlayDugumu
                    olay={d.veri}
                    acik={acikOlay === d.veri.no}
                    onAc={() => setAcikOlay(acikOlay === d.veri.no ? null : d.veri.no)}
                    t={t}
                    anSecimleri={anSecimleri}
                    anYazmalari={anYazmalari}
                    onAnSec={anSec}
                    onAnYaz={anYaz}
                    onYuruyus={(no) => setYuruyusHedef({ tip: 'olay', no })}
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
                  sahneYansima={sahneYansima}
                  setSahneYansima={setSahneYansima}
                  anSecimleri={anSecimleri}
                  anYazmalari={anYazmalari}
                  onAnSec={anSec}
                  onAnYaz={anYaz}
                  onYuruyus={(no) => setYuruyusHedef({ tip: d.tip, no })}
                  acikKapiKey={acikKapiKey}
                  onTopraklanmaAc={(baslik) => setTopraklanma(baslik)}
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
        } else if (yuruyusHedef.tip === 'olay') {
          const o = (data.oyunOncesi?.olaylar || []).find((x) => x.no === yuruyusHedef.no);
          if (o && o.yuruyus) sarmal = { id: `olay-${o.no}`, ad: o.baslik || `Olay ${o.no}`, birlesimSahneNo: null, yuruyus: o.yuruyus };
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

// Doğru maddesinin kaynağı: metinden mi (onay rengi) çıkarım mı (nötr).
function KaynakRozet({ kaynak, t }) {
  const isMetin = kaynak === 'metin';
  const renk = isMetin ? 'var(--onay)' : 'var(--ink-muted)';
  const etiket = isMetin ? (t?.kaynakMetin || 'metin') : (t?.kaynakCikarim || 'çıkarım');
  return (
    <span style={{
      fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.52rem',
      letterSpacing: '0.2em', color: renk, textTransform: 'uppercase',
      padding: '0.18rem 0.5rem', border: `1px solid color-mix(in srgb, ${renk} 33%, transparent)`,
      whiteSpace: 'nowrap', marginTop: '0.15rem',
    }}>{etiket}</span>
  );
}

// Künye sekme düğmesi (Doğrular | İlişkiler).
function KunyeSekmeBtn({ aktif, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none', border: 'none',
        borderBottom: aktif ? `2px solid ${TON}` : '2px solid transparent',
        padding: '0.4rem 0.2rem 0.6rem', marginBottom: '-1px', cursor: 'pointer',
        fontFamily: 'var(--font-body), sans-serif', fontWeight: aktif ? 400 : 300,
        fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase',
        color: aktif ? 'var(--ink)' : 'var(--ink-muted)',
        transition: 'color 0.2s ease, border-color 0.2s ease',
      }}
    >{children}</button>
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
        fontFamily: 'var(--font-display), serif',
        fontStyle: 'italic',
        fontSize: '1.15rem',
        color: 'var(--ink)',
        lineHeight: 1.2,
      }}>{iliski.ad}</span>
      <span style={{
        fontFamily: 'var(--font-body), sans-serif',
        fontWeight: 200,
        fontSize: '0.62rem',
        letterSpacing: '0.18em',
        color: 'var(--ink-muted)',
        textTransform: 'uppercase',
      }}>{iliski.rol}</span>
    </div>
  );
}

// ─── FAZ AYRACI (Oyun Öncesi / Oyun Başlangıcı — Willy paritesi) ───────────
function AyracFaz({ baslik, altyazi }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 0 0.2rem 0', margin: '0.5rem 0 0 0' }}>
      <span style={{
        fontFamily: 'var(--font-body), sans-serif', fontWeight: 300,
        fontSize: '0.6rem', letterSpacing: '0.35em', color: TON,
        textTransform: 'uppercase', whiteSpace: 'nowrap',
      }}>{baslik}</span>
      <span style={{ flex: 1, height: '1px', backgroundColor: 'var(--rule)' }} />
      {altyazi && (
        <span style={{
          fontFamily: 'var(--font-display), serif', fontStyle: 'italic',
          fontSize: '0.78rem', color: 'var(--ink-muted)', textAlign: 'right', maxWidth: '55%',
        }}>{altyazi}</span>
      )}
    </div>
  );
}

// ─── OYUN ÖNCESİ OLAY (sade panel) ─────────────────────────────────────────

function OlayDugumu({ olay, acik, onAc, t, anSecimleri, anYazmalari, onAnSec, onAnYaz, onYuruyus }) {
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
            {/* Yürüyüş (varsa) — Oyun Öncesi olayında "adım adım kur" */}
            {olay.yuruyus && (
              <button
                type="button"
                onClick={() => onYuruyus && onYuruyus(olay.no)}
                style={{
                  alignSelf: 'flex-start', cursor: 'pointer',
                  fontFamily: 'var(--font-body), sans-serif', fontWeight: 400,
                  fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'var(--bg-base)', backgroundColor: 'var(--accent)',
                  border: 'none', borderRadius: '2px', padding: '0.7rem 1.2rem',
                }}
              >
                {t.yuruyusBaslatBosluk || t.yuruyusBaslat || 'Bu anı adım adım kur'}
              </button>
            )}
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

function DugumGrubu({ domId, dugum, acik, onAc, onKapat, t, ortak, boslukYansima, setBoslukYansima, sahneYansima, setSahneYansima, anSecimleri, anYazmalari, onAnSec, onAnYaz, onYuruyus, acikKapiKey, onTopraklanmaAc }) {
  const isSahne = dugum.tip === 'sahne';
  const veri = dugum.veri;

  // Yazıldı işareti: sahne için adımlar 1 veya 2 dolu; boşluk için metin dolu.
  const sahneId = SAHNE_ANTRENMAN_PREFIX + veri.no;
  const boslukId = BOSLUK_ID_PREFIX + veri.no;
  const yazildi = isSahne
    ? !!(sahneYansima[sahneId] && (sahneYansima[sahneId][1] || sahneYansima[sahneId][2]))
    : !!boslukYansima[boslukId];
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
      scrollMarginTop: '1rem',
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
          ? <SahnePanel veri={veri} t={t} ortak={ortak} sahneYansima={sahneYansima} setSahneYansima={setSahneYansima} onKapat={onKapat}
              kayitAni={kayitAni}
              hassas={SAHNE_HASSAS.has(veri.no)}
              provisional={SAHNE_PROVISIONAL.has(veri.no)}
              anSecimleri={anSecimleri}
              anYazmalari={anYazmalari}
              onAnSec={onAnSec}
              onAnYaz={onAnYaz}
              acikKapiKey={acikKapiKey}
              onTopraklanmaAc={onTopraklanmaAc}
            />
          : <BoslukPanel veri={veri} t={t} ortak={ortak} boslukYansima={boslukYansima} setBoslukYansima={setBoslukYansima} onKapat={onKapat} onYuruyus={onYuruyus} anSecimleri={anSecimleri} onAnSec={onAnSec} />
      )}
    </div>
  );
}

// ─── SAHNE PANELİ (iki sekme: Yazarın Çerçevesi · Senin Çerçeven) ──────────

function SahnePanel({ veri, t, ortak, sahneYansima, setSahneYansima, onKapat, kayitAni, hassas, provisional, anSecimleri, anYazmalari, onAnSec, onAnYaz, acikKapiKey, onTopraklanmaAc }) {
  const [sekme, setSekme] = useState('yazar');
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
      {/* Karar 62 — sahne-level uyarı kademesi (açık uyariSeviye; tam ton:
          ağır kademede Topraklanma çağrısı + destek kapısı). Veri etiketlenene
          dek dormant — placement Beyti dramaturg seçimi (K62 §6). */}
      {uyariSeviyesi(veri) ? (
        <UyariSeviye seviye={uyariSeviyesi(veri)} metin={veri.uyariMetni} onTopraklanma={() => onTopraklanmaAc && onTopraklanmaAc(veri.baslik)} />
      ) : null}
      {/* Sekme şeridi */}
      <div role="tablist" aria-label={t.panelYazarBaslik + ' / ' + t.panelSeninBaslik} style={{ display: 'flex', gap: '0.4rem' }}>
        <SekmeBtn aktif={sekme === 'yazar'} onClick={() => setSekme('yazar')}>{t.panelYazarBaslik}</SekmeBtn>
        <SekmeBtn aktif={sekme === 'senin'} onClick={() => setSekme('senin')}>{t.panelSeninBaslik}</SekmeBtn>
      </div>

      {sekme === 'yazar' ? (
        <YazarinCercevesiSahne veri={veri} t={t} />
      ) : (
        <>
          {Array.isArray(veri.anlar) && veri.anlar.length > 0 ? (
            // Willy paritesi: sahne anları (çatal/yazma) — oznel_sabitler.
            <SeninCercevenSahne veri={veri} t={t} secimler={anSecimleri} muhurler={anYazmalari} onAnSec={onAnSec} onAnYaz={onAnYaz} />
          ) : (
            // Anı olmayan sahneler (henüz İş 2 yedirilmemiş) — eski 3-vuruş.
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
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{t.provisionalEtiket}</span>
        <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55 }}>{t.provisionalMetin}</p>
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
          fontFamily: 'var(--font-body), sans-serif',
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
              <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.58rem', letterSpacing: '0.3em', color: 'var(--onay-soft)', textTransform: 'uppercase' }}>{t.guvenliCikisBaslik}</span>
              <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.55 }}>{t.guvenliCikisMetin}</p>
              <button
                onClick={onTopraklanmaAc}
                style={{
                  alignSelf: 'flex-start',
                  marginTop: '0.3rem',
                  padding: '0.55rem 1.1rem',
                  background: 'var(--onay-soft)',
                  color: 'var(--bg-base)',
                  border: 'none',
                  fontFamily: 'var(--font-body), sans-serif',
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
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.28em', color: aktif || aksanli ? TON : 'var(--ink-muted)', textTransform: 'uppercase' }}>{baslik}</span>
        {aktif && rozetMetin && (
          <span style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.78rem', color: TON }}>· {rozetMetin}</span>
        )}
      </span>
      <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.97rem', color: 'var(--ink)', margin: 0, lineHeight: 1.55 }}>{metin}</p>
    </div>
  );
}

function YazarinCercevesiSahne({ veri, t }) {
  // Sahnenin manuscript dramaturjik verisi — Aşama 2 (Karar 41).
  // hamlet.js sahnelerWorkbook'tan: olay (sahnede ne oluyor), icsel (ton),
  // yuk (sonraki sahneye taşıdığı). Yapısal "Çapa No" GÖSTERİLMEZ.
  const alanlar = [
    { etiket: t.panelYazarOlay,  icerik: veri.olay },
    { etiket: t.panelYazarIcsel, icerik: veri.icsel },
    { etiket: t.panelYazarYuk,   icerik: veri.yuk },
  ].filter((a) => a.icerik);
  if (alanlar.length === 0 && !veri.replikIzi) {
    return (
      <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0 }}>
        {t.panelYazarHenuz}
      </p>
    );
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
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{t.panelYazarReplik}</span>
          <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.08rem', color: 'var(--ink)', margin: 0, lineHeight: 1.55, fontWeight: 400 }}>
            <span style={{ color: TON, fontSize: '1.4rem', verticalAlign: '-0.15em', marginRight: '0.1rem' }}>❞</span>{veri.replikIzi}
          </p>
        </div>
      ) : null}
    </div>
  );
}

// ─── SENİN ÇERÇEVEN (sahne anları — Willy paritesi) ────────────────────────
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

// AN KARTI — tip-duyarlı eyebrow: Karar (çatal) / Boşluk (yazma) / İz / Hatıra.
function AnKart({ an, secimler, muhurler, onAnSec, onAnYaz, t }) {
  const isKarar = an.tip === 'catal';
  const isHatira = an.tip === 'hatira';
  const isIz = an.tip === 'iz';
  const isSessizBilgi = an.tip === 'sessizbilgi';
  const eyebrow = isKarar ? t.anKararEtiket : isHatira ? t.anHatiraEtiket : isIz ? t.anIzUretimEtiket : isSessizBilgi ? t.anSessizBilgiEtiket : t.anBoslukEtiket;
  // Karar 62 — an-level uyarı kademesi (kompakt: çıkış butonu/destek notu YOK;
  // tam koruma sahne sonunda kurulur). travmaDuyarli → 'agir' (K62 §4).
  const anUyari = uyariSeviyesi(an);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', padding: '0.9rem 1rem', background: 'var(--bg-base)', borderLeft: `2px solid ${TON}`, border: '1px solid var(--rule)' }}>
      {anUyari ? <UyariSeviye seviye={anUyari} /> : null}
      <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{eyebrow}</span>
      <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.02rem', color: 'var(--ink)', margin: 0, lineHeight: 1.55 }}>{an.soru}</p>
      {isKarar && Array.isArray(an.secenekler) ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {an.secenekler.map((se) => (
            <AnSecenek key={se.dal} secili={secimler[an.id] === se.dal} soluk={secimler[an.id] && secimler[an.id] !== se.dal} onClick={() => onAnSec(an, se)} harf={se.dal} baslik={se.baslik} aciklama={se.aciklama} muhur={se.oznelSabit} />
          ))}
          {/* IMZA: OZEL-DAL-H1 — "Kendi cevabım": yalnızca travmaDuyarli olmayan çatallarda */}
          {an.travmaDuyarli === false ? (
            <>
              <AnSecenek
                secili={secimler[an.id] === 'ozel'}
                soluk={secimler[an.id] && secimler[an.id] !== 'ozel'}
                onClick={() => onAnSec(an, { dal: 'ozel', baslik: t.ozelDalBaslik, aciklama: t.ozelDalAciklama, oznelSabit: null })}
                harf="+"
                baslik={t.ozelDalBaslik}
                aciklama={t.ozelDalAciklama}
                muhur={null}
              />
              {secimler[an.id] === 'ozel' ? (
                <AnYazma an={an} deger={muhurler[an.id] || ''} onYaz={(metin) => onAnYaz(an, metin, true)} t={t} />
              ) : null}
            </>
          ) : null}
        </div>
      ) : null}
      {(an.tip === 'yazma' || an.tip === 'hatira' || an.tip === 'iz' || an.tip === 'sessizbilgi') ? (
        <AnYazma an={an} deger={muhurler[an.id] || ''} onYaz={(metin) => onAnYaz(an, metin)} t={t} hatira={isHatira} iz={isIz} sessizBilgi={isSessizBilgi} />
      ) : null}
    </div>
  );
}

function AnSecenek({ secili, soluk, onClick, harf, baslik, aciklama, muhur }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: secili ? 'var(--accent-bg)' : 'var(--bg-elevated)',
        border: secili ? `1.5px solid ${TON}` : '1px solid var(--rule)',
        padding: '0.65rem 0.85rem',
        display: 'flex', gap: '0.7rem', alignItems: 'flex-start',
        cursor: 'pointer', opacity: soluk ? 0.55 : 1, textAlign: 'left',
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

function AnYazma({ an, deger, onYaz, t, hatira, iz, sessizBilgi }) {
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
      {(kaydedildi || (deger && yerel === deger)) && yerel.trim().length > 0 ? (
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.65rem', letterSpacing: '0.2em', color: TON, textTransform: 'uppercase', alignSelf: 'flex-end' }}>{t.muhurlendi || '✓'}</span>
      ) : (
        <span style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.74rem', color: 'var(--ink-muted)', alignSelf: 'flex-end' }}>{t.muhurleYonerge}</span>
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

function SeninCerceven3Vurus({ t, ortak, soru, yorum, setYorum, neAciyor, setNeAciyor, durum }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
      {/* Soru */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{t.soruEtiket}</span>
        <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{soru}</p>
      </div>

      {/* Yorum */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{t.yorumEtiket}</span>
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
            fontFamily: 'var(--font-display), serif',
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
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.3em', color: TON, textTransform: 'uppercase' }}>{t.neAciyorEtiket}</span>
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
            fontFamily: 'var(--font-body), sans-serif',
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
    <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.7rem', color: renk, letterSpacing: '0.08em', alignSelf: 'flex-end' }}>{metin}</span>
  );
}

// ─── BOŞLUK PANELİ (sade: soru + yazma alanı) ──────────────────────────────

function BoslukPanel({ veri, t, ortak, boslukYansima, setBoslukYansima, onKapat, onYuruyus, anSecimleri = {}, onAnSec }) {
  // Kart-içi çatal (varsa) — overlay yok, oznel_sabitler'e anSec ile yazılır.
  const kartCataly = veri.kartCatali;
  const kartCatalAnahtar = kartCataly ? (kartCataly.anahtar || `bosluk-${veri.no}-catal`) : null;
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
      {/* Yürüyüş (yoğunluk 3 — tam ekran) tetikleyici */}
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

      {/* Kart-içi çatal (yoğunluk 2 — sayfadan çıkmaz) */}
      {kartCataly && (
        <KartCatali
          cataly={kartCataly}
          secim={anSecimleri[kartCatalAnahtar]}
          onSec={(secenek) => onAnSec && onAnSec(
            { id: kartCatalAnahtar, birlesimSahneNo: veri.sonraSahneNo ?? null },
            {
              dal: secenek.dal ?? secenek.deger,
              baslik: secenek.baslik,
              aciklama: secenek.aciklama,
              oznelSabit: secenek.oznelSabit ?? secenek.muhur,
            },
          )}
        />
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
