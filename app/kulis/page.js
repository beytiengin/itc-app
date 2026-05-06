// app/kulis/page.js
// ITC Actor's Gym — Kulis görüntüleme sayfası
//
// Oyuncunun karakterlerle ilerlemesini toplu gösterir:
//  - Hangi karakterlere değdi
//  - Hangi egzersizleri tamamladı
//  - Hangi boşluklara yazdı

'use client';

import { useState, useEffect } from 'react';
import { tumTamamlananEgzersizleriGetir, tumBoslukYansimalariniGetir } from '../lib/kulis';
import { getKalibrasyonProfili } from '../lib/kalibrasyon';
import macbeth from '../../data/karakterler/macbeth';
import hamlet from '../../data/karakterler/hamlet';
import willy from '../../data/karakterler/willy';
import biff from '../../data/karakterler/biff';

const KARAKTERLER = { hamlet, macbeth, willy, biff };
const KARAKTER_SIRASI = ['hamlet', 'macbeth', 'willy', 'biff'];

export default function KulisSayfasi() {
  const [yukleniyor, setYukleniyor] = useState(true);
  const [kalibrasyon, setKalibrasyon] = useState(null);
  const [veri, setVeri] = useState({});
  const [acik, setAcik] = useState(null);

  useEffect(() => {
    async function yukle() {
      const [profil, egzersizler, yansimalar] = await Promise.all([
        getKalibrasyonProfili(),
        tumTamamlananEgzersizleriGetir(),
        tumBoslukYansimalariniGetir(),
      ]);

      setKalibrasyon(profil);

      const grupla = {};
      KARAKTER_SIRASI.forEach((id) => {
        grupla[id] = { egzersizIdleri: [], yansimalar: {}, sonAktivite: null };
      });

      egzersizler.forEach((kayit) => {
        const g = grupla[kayit.karakter_id];
        if (!g) return;
        g.egzersizIdleri.push(kayit.egzersiz_id);
        const t = new Date(kayit.tarih);
        if (!g.sonAktivite || t > g.sonAktivite) g.sonAktivite = t;
      });

      yansimalar.forEach((kayit) => {
        const g = grupla[kayit.karakter_id];
        if (!g) return;
        if (kayit.metin && kayit.metin.length > 0) {
          g.yansimalar[kayit.bosluk_id] = kayit.metin;
          const t = new Date(kayit.son_guncelleme || kayit.tarih);
          if (!g.sonAktivite || t > g.sonAktivite) g.sonAktivite = t;
        }
      });

      setVeri(grupla);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  function gunOnce(tarih) {
    if (!tarih) return null;
    const fark = Math.floor((Date.now() - tarih.getTime()) / (1000 * 60 * 60 * 24));
    if (fark === 0) return 'Bugün';
    if (fark === 1) return 'Dün';
    if (fark < 7) return `${fark} gün önce`;
    if (fark < 30) return `${Math.floor(fark / 7)} hafta önce`;
    return `${Math.floor(fark / 30)} ay önce`;
  }

  if (yukleniyor) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>Hazırlanıyor…</span>
      </main>
    );
  }

  const aktifKarakterler = KARAKTER_SIRASI.filter((id) => {
    const v = veri[id];
    return v && (v.egzersizIdleri.length > 0 || Object.keys(v.yansimalar).length > 0);
  });

  const hicVeriYok = aktifKarakterler.length === 0;
  const kalibrasyonEksik = !kalibrasyon || kalibrasyon.eksikler?.length > 0;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid var(--rule)' }}>
        <a href="/" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase', textDecoration: 'none' }}>Actor's Gym</a>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="/kalibrasyon" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: 'var(--ink-soft)', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.25s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-soft)')}>
            Kalibrasyon
          </a>
          <a href="/antrenman/karakter" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: 'var(--ink)', textTransform: 'uppercase', textDecoration: 'none' }}>← Ana Ekran</a>
        </div>
      </header>

      <section style={{ flex: 1, padding: '3rem 2rem', maxWidth: '680px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--accent)', opacity: 0.4 }} />
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: 'var(--accent)', textTransform: 'uppercase' }}>Kulis</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--ink)', margin: 0 }}>İz Bıraktıkların</h1>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: 'var(--ink-soft)', lineHeight: 1.8, margin: 0 }}>
            Karakterlere değdiğin yerler. Tamamladığın egzersizler ve yazdığın boşluklar — kaldığın yerden devam et.
          </p>
        </div>

        {hicVeriYok && kalibrasyonEksik && (
          <EmptyKalibrasyon />
        )}

        {hicVeriYok && !kalibrasyonEksik && (
          <EmptyMacbethBasla />
        )}

        {!hicVeriYok && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {aktifKarakterler.map((id) => {
              const k = KARAKTERLER[id];
              const ilerleme = veri[id];
              const egzersizSayisi = ilerleme.egzersizIdleri.length;
              const yansimaSayisi = Object.keys(ilerleme.yansimalar).length;
              const aktivite = gunOnce(ilerleme.sonAktivite);
              const isAcik = acik === id;

              return (
                <KarakterKarti
                  key={id}
                  karakter={k}
                  egzersizSayisi={egzersizSayisi}
                  yansimaSayisi={yansimaSayisi}
                  aktivite={aktivite}
                  ilerleme={ilerleme}
                  isAcik={isAcik}
                  setAcik={() => setAcik(isAcik ? null : id)}
                />
              );
            })}
          </div>
        )}

      </section>
    </main>
  );
}

// ─── KARAKTER KARTI ─────────────────────────────────────────────────────────

function KarakterKarti({ karakter, egzersizSayisi, yansimaSayisi, aktivite, ilerleme, isAcik, setAcik }) {
  const egzersizToplam = karakter.egzersizler?.length || 7;
  const boslukToplam = karakter.bosluklar?.length || 12;

  const tamamlananEgzersizler = (karakter.egzersizler || []).filter((e) =>
    ilerleme.egzersizIdleri.includes(e.id)
  );

  const yazilanBosluklar = Object.entries(ilerleme.yansimalar).map(([boslukId, metin]) => {
    const bosluk = (karakter.bosluklar || []).find((b) => b.id === boslukId);
    return { boslukId, metin, bosluk };
  }).filter((y) => y.bosluk);

  return (
    <div style={{ border: `1px solid ${isAcik ? 'var(--accent)' : 'var(--rule)'}`, backgroundColor: isAcik ? 'var(--bg-elevated)' : 'transparent', transition: 'all 0.3s ease' }}>
      <button
        onClick={setAcik}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          padding: '2rem',
          backgroundColor: 'transparent',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          color: 'var(--ink)',
          fontFamily: 'inherit',
        }}
        onMouseEnter={(e) => { if (!isAcik) e.currentTarget.parentElement.style.borderColor = 'var(--accent)'; }}
        onMouseLeave={(e) => { if (!isAcik) e.currentTarget.parentElement.style.borderColor = 'var(--rule)'; }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.6rem', color: 'var(--ink)', lineHeight: 1 }}>{karakter.ad}</span>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.1em' }}>{karakter.yazar}</span>
          </div>
          {aktivite && (
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: 'var(--ink-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0, fontStyle: 'italic' }}>
              {aktivite}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.5rem' }}>
          <IlerlemeSatiri etiket="Egzersizler" deger={egzersizSayisi} toplam={egzersizToplam} renk="var(--accent)" />
          <IlerlemeSatiri etiket="Boşluklar" deger={yansimaSayisi} toplam={boslukToplam} renk="var(--onay-soft)" />
        </div>

        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: 'var(--ink-muted)', letterSpacing: '0.2em', textTransform: 'uppercase', alignSelf: 'flex-end', marginTop: '0.3rem' }}>
          {isAcik ? 'Kapat ▴' : 'Detay ▾'}
        </span>
      </button>

      {isAcik && (
        <div style={{ borderTop: '1px solid var(--rule)', padding: '1.8rem 2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          {tamamlananEgzersizler.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase' }}>
                Tamamlanan Egzersizler
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {tamamlananEgzersizler.map((e) => (
                  <div key={e.id} style={{ display: 'flex', gap: '0.7rem', alignItems: 'center', padding: '0.7rem 1rem', borderLeft: '2px solid color-mix(in srgb, var(--accent) 27%, transparent)' }}>
                    <span style={{ color: 'var(--onay-soft)', fontSize: '0.75rem' }}>✓</span>
                    <span style={{ flex: 1, fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-soft)', lineHeight: 1.5 }}>{e.baslik}</span>
                    <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', color: 'var(--ink-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{e.seviye}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {yazilanBosluklar.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.3em', color: 'var(--onay-soft)', textTransform: 'uppercase' }}>
                Yazılan Boşluklar
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {yazilanBosluklar.map(({ boslukId, metin, bosluk }) => {
                  const onizleme = metin.length > 100 ? `${metin.slice(0, 100).trim()}…` : metin;
                  return (
                    <div key={boslukId} style={{ padding: '0.9rem 1.1rem', borderLeft: '2px solid color-mix(in srgb, var(--onay-soft) 33%, transparent)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.78rem', color: 'var(--ink)' }}>{bosluk.baslik}</span>
                        <a
                          href={
                            karakter.id === 'hamlet'
                              ? `/antrenman/karakter/hamlet/senin-cerceven`
                              : `/antrenman/karakter/${karakter.id}#bosluklar`
                          }
                          style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none', whiteSpace: 'nowrap' }}
                          onClick={(ev) => ev.stopPropagation()}
                        >
                          Devam Et →
                        </a>
                      </div>
                      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.88rem', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>
                        "{onizleme}"
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}

function IlerlemeSatiri({ etiket, deger, toplam, renk }) {
  const yuzde = toplam > 0 ? (deger / toplam) * 100 : 0;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: 'var(--ink-soft)', width: '90px', flexShrink: 0, letterSpacing: '0.05em' }}>{etiket}</span>
      <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--rule)', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: '-1.5px', height: '4px', width: `${yuzde}%`, backgroundColor: renk, transition: 'width 0.4s ease' }} />
      </div>
      <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.7rem', color: 'var(--ink-soft)', width: '50px', textAlign: 'right', flexShrink: 0, letterSpacing: '0.05em' }}>
        {deger}/{toplam}
      </span>
    </div>
  );
}

// ─── EMPTY STATE'LER ────────────────────────────────────────────────────────

function EmptyKalibrasyon() {
  return (
    <div style={{ border: '1px solid var(--rule)', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center', textAlign: 'center' }}>
      <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: 'var(--accent)', textTransform: 'uppercase' }}>Önce Kalibrasyon</span>
      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0, maxWidth: '420px' }}>
        Karakterlere geçmeden önce enstrümanını akort etmen gerek. Kalibrasyon, sana özel egzersiz dilini ve etik koruma seviyeni belirler.
      </p>
      <a
        href="/kalibrasyon"
        style={{ marginTop: '0.5rem', padding: '0.9rem 2rem', backgroundColor: 'var(--accent)', color: 'var(--bg-base)', textDecoration: 'none', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', transition: 'all 0.3s ease' }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-hover)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; }}
      >
        Kalibrasyona Git →
      </a>
    </div>
  );
}

function EmptyMacbethBasla() {
  return (
    <div style={{ border: '1px solid var(--rule)', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center', textAlign: 'center' }}>
      <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: 'var(--accent)', textTransform: 'uppercase' }}>Henüz İz Yok</span>
      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0, maxWidth: '420px' }}>
        Bir karakterle çalışmaya başla — egzersizleri tamamladıkça, boşluklara yazdıkça burada izleri görünür.
      </p>
      <a
        href="/antrenman/karakter"
        style={{ marginTop: '0.5rem', padding: '0.9rem 2rem', backgroundColor: 'var(--accent)', color: 'var(--bg-base)', textDecoration: 'none', fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', transition: 'all 0.3s ease' }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-hover)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; }}
      >
        Karakter Kasasına Git →
      </a>
    </div>
  );
}
