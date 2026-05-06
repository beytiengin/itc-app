'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import TemaSecici from '../../components/TemaSecici';

export default function Profil() {
  const [kullanici, setKullanici] = useState(null);
  const [vak, setVak] = useState(null);
  const [yildiz, setYildiz] = useState(null);
  const [arketip, setArketip] = useState(null);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function verileriGetir() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setYukleniyor(false); return; }
      setKullanici(user);

      const [vakRes, yildizRes, arketipRes] = await Promise.all([
        supabase.from('vak_sonuclari').select('*').eq('kullanici_id', user.id).order('tarih', { ascending: false }).limit(1),
        supabase.from('yildiz_sonuclari').select('*').eq('kullanici_id', user.id).order('tarih', { ascending: false }).limit(1),
        supabase.from('arketip_sonuclari').select('*').eq('kullanici_id', user.id).order('tarih', { ascending: false }).limit(1),
      ]);

      if (vakRes.data?.[0]) setVak(vakRes.data[0]);
      if (yildizRes.data?.[0]) setYildiz(yildizRes.data[0]);
      if (arketipRes.data?.[0]) setArketip(arketipRes.data[0]);
      setYukleniyor(false);
    }
    verileriGetir();
  }, []);

  const kanalRenk = { V: 'var(--accent)', A: 'var(--kanal-1)', K: 'var(--kanal-2)' };
  const kanalAd = { V: 'Görsel', A: 'İşitsel', K: 'Kinestetik' };

  if (yukleniyor) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>Yükleniyor...</span>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid var(--rule)' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase' }}>Actor's Gym</span>
        <a href="/" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: 'var(--ink)', textTransform: 'uppercase', textDecoration: 'none' }}>← Ana Ekran</a>
      </header>

      <section style={{ flex: 1, padding: '3rem 2rem', maxWidth: '680px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

        {/* Başlık */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--accent)', opacity: 0.4 }} />
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: 'var(--accent)', textTransform: 'uppercase' }}>Enstrüman Profili</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--ink)', margin: 0 }}>
            {kullanici?.user_metadata?.ad || kullanici?.email}
          </h1>
        </div>

        {/* VAK Sonucu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase' }}>VAK Analizi</span>
            {vak ? (
              <a href="/kalibrasyon/vak" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--ink-muted)', textTransform: 'uppercase', textDecoration: 'none' }}>Tekrar Yap →</a>
            ) : null}
          </div>

          {vak ? (
            <div style={{ border: '1px solid var(--rule)', padding: '1.8rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '2.5rem', color: kanalRenk[vak.baskin], margin: 0 }}>
                  {kanalAd[vak.baskin]}
                </h2>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: 'var(--ink-muted)', letterSpacing: '0.1em' }}>Baskın Kanal</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[{ k: 'V', ad: 'Görsel', p: vak.gorsel }, { k: 'A', ad: 'İşitsel', p: vak.isitsel }, { k: 'K', ad: 'Kinestetik', p: vak.kinestetik }].map(item => (
                  <div key={item.k} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: item.k === vak.baskin ? kanalRenk[item.k] : 'var(--ink-soft)', width: '80px', textAlign: 'right', flexShrink: 0 }}>{item.ad}</span>
                    <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--rule)', position: 'relative' }}>
                      <div style={{ position: 'absolute', left: 0, top: '-1px', height: '3px', width: `${(item.p / 63) * 100}%`, backgroundColor: item.k === vak.baskin ? kanalRenk[item.k] : 'var(--rule)' }} />
                    </div>
                    <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: 'var(--ink-soft)', width: '25px', flexShrink: 0 }}>{item.p}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <a href="/kalibrasyon/vak" style={{ border: '1px solid var(--rule)', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', color: 'var(--ink-muted)', letterSpacing: '0.1em' }}>Henüz tamamlanmadı</span>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--accent)' }}>Teste Başla →</span>
            </a>
          )}
        </div>

        {/* Yıldız Sonucu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase' }}>Star Actor Matrix</span>
            {yildiz ? (
              <a href="/kalibrasyon/yildiz" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--ink-muted)', textTransform: 'uppercase', textDecoration: 'none' }}>Tekrar Yap →</a>
            ) : null}
          </div>

          {yildiz ? (
            <div style={{ border: '1px solid var(--rule)', padding: '1.8rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '2.5rem', color: 'var(--accent)', margin: 0 }}>{yildiz.genel_yuzde}%</h2>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: 'var(--ink-muted)', letterSpacing: '0.1em' }}>Genel Performans Skoru</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  { ad: 'Teknik Donanım', renk: 'var(--accent)', deger: yildiz.teknik },
                  { ad: 'Psikolojik Sağlamlık', renk: 'var(--kanal-1)', deger: yildiz.psikolojik },
                  { ad: 'Mesleki Tutum', renk: 'var(--kanal-2)', deger: yildiz.mesleki },
                  { ad: 'Yaratıcı Kapasite', renk: 'var(--kanal-3)', deger: yildiz.yaratici },
                  { ad: 'Entelektüel Derinlik', renk: 'var(--kanal-4)', deger: yildiz.entelektuel },
                  { ad: 'İlişki & İfade', renk: 'var(--kanal-5)', deger: yildiz.iliski },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.62rem', color: item.renk, width: '130px', textAlign: 'right', flexShrink: 0 }}>{item.ad}</span>
                    <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--rule)', position: 'relative' }}>
                      <div style={{ position: 'absolute', left: 0, top: '-1.5px', height: '4px', width: `${(item.deger / 7) * 100}%`, backgroundColor: item.renk }} />
                    </div>
                    <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: 'var(--ink-soft)', width: '28px', flexShrink: 0 }}>{item.deger?.toFixed(1)}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <a href="/kalibrasyon/yildiz" style={{ border: '1px solid var(--rule)', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', color: 'var(--ink-muted)', letterSpacing: '0.1em' }}>Henüz tamamlanmadı</span>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--accent)' }}>Teste Başla →</span>
            </a>
          )}
        </div>

        {/* Arketip Sonucu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase' }}>Arketip Analizi</span>
            {arketip ? (
              <a href="/kalibrasyon/arketip" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--ink-muted)', textTransform: 'uppercase', textDecoration: 'none' }}>Tekrar Yap →</a>
            ) : null}
          </div>

          {arketip ? (
            <div style={{ border: '1px solid var(--rule)', padding: '1.8rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '3rem', color: 'var(--ink)', margin: 0, letterSpacing: '0.15em' }}>{arketip.tip}</h2>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--accent)', margin: 0 }}>{arketip.ad}</p>
            </div>
          ) : (
            <a href="/kalibrasyon/arketip" style={{ border: '1px solid var(--rule)', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', color: 'var(--ink-muted)', letterSpacing: '0.1em' }}>Henüz tamamlanmadı</span>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--accent)' }}>Teste Başla →</span>
            </a>
          )}
        </div>

        {/* Görünüm */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase' }}>Görünüm</span>
          </div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>
            Karanlık mod uzun seans için. Krem mod Workbook'la aynı kâğıt sıcaklığında.
          </p>
          <TemaSecici stil="radyo" />
        </div>

        {/* Kalibrasyon linki */}
        <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '2rem', paddingBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="/kalibrasyon" style={{ flex: 1, display: 'block', padding: '1.2rem', border: '1px solid var(--rule)', color: 'var(--ink)', textDecoration: 'none', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              Kalibrasyona Git
            </a>
            <a href="/antrenman" style={{ flex: 1, display: 'block', padding: '1.2rem', border: '1px solid var(--accent)', color: 'var(--accent)', textDecoration: 'none', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg-base)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}>
              Antrenman Odası
            </a>
          </div>
          <a href="/kulis" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '0.8rem', color: 'var(--ink-muted)', textDecoration: 'none', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', transition: 'color 0.25s ease' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-muted)'; }}>
            Kulis · karakterlerle bıraktığın izler →
          </a>
        </div>

      </section>
    </main>
  );
}