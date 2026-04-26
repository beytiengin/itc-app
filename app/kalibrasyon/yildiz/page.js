'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';

const kategoriler = {
  teknik: { ad: "Teknik Donanım", renk: "#c9a96e", sorular: [3, 17, 19, 20, 21] },
  psikolojik: { ad: "Psikolojik Sağlamlık", renk: "#8fa3b1", sorular: [2, 7, 10, 11, 22, 31, 37] },
  mesleki: { ad: "Mesleki Tutum", renk: "#9b8ea0", sorular: [5, 12, 16, 23, 24, 25] },
  yaratici: { ad: "Yaratıcı Kapasite", renk: "#a0b89b", sorular: [4, 8, 9, 27] },
  entelektuel: { ad: "Entelektüel Derinlik", renk: "#b8a99b", sorular: [1, 14, 28, 29, 34, 35, 36] },
  iliski: { ad: "İlişki & İfade", renk: "#9ba8b8", sorular: [6, 13, 18, 26, 30, 32, 33] }
};

const sorular = [
  { id: 1, metin: "İyi bir gözlemciyim." },
  { id: 2, metin: "Kendime güvenim yüksektir." },
  { id: 3, metin: "Yeterli teknik bilgi ve donanıma sahibim." },
  { id: 4, metin: "Yetenekliyim." },
  { id: 5, metin: "Oyunculuk mesleğini çok seviyorum." },
  { id: 6, metin: "İletişim becerilerim güçlüdür." },
  { id: 7, metin: "Odaklanma konusunda yetenekliyim." },
  { id: 8, metin: "Birbirinden farklı duyguları kolaylıkla ifade edebilirim." },
  { id: 9, metin: "İyi bir hayal gücüm vardır." },
  { id: 10, metin: "Kişisel farkındalığım yüksektir." },
  { id: 11, metin: "Kendisiyle barışık bir insanım." },
  { id: 12, metin: "Prensip sahibi biriyim." },
  { id: 13, metin: "Öğrenmeye açığımdır." },
  { id: 14, metin: "İyi bir genel kültür düzeyine sahibim." },
  { id: 15, metin: "Öğrenmeye açık biriyim." },
  { id: 16, metin: "Çalışkan biriyimdir." },
  { id: 17, metin: "Doğal performans sergileyebilirim." },
  { id: 18, metin: "Kendimi iyi ifade edebilirim." },
  { id: 19, metin: "Yüz ifadelerimi etkili şekilde kullanabilirim." },
  { id: 20, metin: "Diksiyonum iyidir." },
  { id: 21, metin: "Bedenimi iyi kullanabilirim." },
  { id: 22, metin: "Performans sırasında rahatlığımı koruyabilirim." },
  { id: 23, metin: "Zaman yönetimi konusunda iyiyimdir." },
  { id: 24, metin: "Disiplinli biriyimdir." },
  { id: 25, metin: "Motivasyonum yüksektir." },
  { id: 26, metin: "Uyumlu bir insanımdır." },
  { id: 27, metin: "Yaratıcıyımdır." },
  { id: 28, metin: "Zekiyimdir." },
  { id: 29, metin: "Duygusal zekâm yüksektir." },
  { id: 30, metin: "Empati becerim güçlüdür." },
  { id: 31, metin: "Bedensel ve psikolojik olarak sağlıklıyımdır." },
  { id: 32, metin: "Sabırlıyımdır." },
  { id: 33, metin: "Olumlu/olumsuz geribildirime açık biriyim." },
  { id: 34, metin: "Analiz becerim yüksektir." },
  { id: 35, metin: "Araştırmacıyımdır." },
  { id: 36, metin: "Meraklıyımdır." },
  { id: 37, metin: "Stresle başa çıkabilirim." },
];

function kategoriHesapla(cevaplar) {
  const sonuclar = {};
  Object.entries(kategoriler).forEach(([key, kat]) => {
    const puanlar = kat.sorular.map(id => cevaplar[id] || 0);
    const ortalama = puanlar.reduce((a, b) => a + b, 0) / puanlar.length;
    sonuclar[key] = Math.round(ortalama * 10) / 10;
  });
  return sonuclar;
}

function bolgeHesapla(cevaplar) {
  const parlayan = [], gelisim = [], planlama = [];
  sorular.forEach(s => {
    const puan = cevaplar[s.id] || 0;
    if (puan >= 5) parlayan.push({ ...s, puan });
    else if (puan >= 3) gelisim.push({ ...s, puan });
    else planlama.push({ ...s, puan });
  });
  return { parlayan, gelisim, planlama };
}

export default function YildizOyuncu() {
  const [adim, setAdim] = useState('giris');
  const [mevcutSoru, setMevcutSoru] = useState(0);
  const [cevaplar, setCevaplar] = useState({});
  const [sonuc, setSonuc] = useState(null);

  async function cevapSec(soruId, puan) {
    const yeniCevaplar = { ...cevaplar, [soruId]: puan };
    setCevaplar(yeniCevaplar);
    setTimeout(async () => {
      if (mevcutSoru < sorular.length - 1) {
        setMevcutSoru(mevcutSoru + 1);
      } else {
        const kategoriSonuc = kategoriHesapla(yeniCevaplar);
        const bolgeSonuc = bolgeHesapla(yeniCevaplar);
        setSonuc({ kategoriler: kategoriSonuc, bolgeler: bolgeSonuc });
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (user) {
            const genelYuzde = Math.round((Object.values(yeniCevaplar).reduce((a, b) => a + b, 0) / (sorular.length * 7)) * 100);
            await supabase.from('yildiz_sonuclari').insert({
              kullanici_id: user.id,
              teknik: kategoriSonuc.teknik,
              psikolojik: kategoriSonuc.psikolojik,
              mesleki: kategoriSonuc.mesleki,
              yaratici: kategoriSonuc.yaratici,
              entelektuel: kategoriSonuc.entelektuel,
              iliski: kategoriSonuc.iliski,
              genel_yuzde: genelYuzde,
            });
          }
        } catch (e) { console.log('Kayıt hatası:', e); }
        setAdim('sonuc');
      }
    }, 250);
  }

  if (adim === 'giris') {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f0ede8', display: 'flex', flexDirection: 'column' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid #2a2a2a' }}>
          <a href="/" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase', textDecoration: 'none' }}>Inside The Character</a>
          <a href="/kalibrasyon" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase', textDecoration: 'none' }}>← Kalibrasyon</a>
        </header>
        <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', textAlign: 'center', gap: '2rem' }}>
          <div style={{ width: '1px', height: '60px', backgroundColor: '#c9a96e', opacity: 0.4 }} />
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#c9a96e', textTransform: 'uppercase' }}>Yıldız Oyuncu Analizi</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#f0ede8', margin: 0, lineHeight: 1.1 }}>Performans Haritan</h1>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.9rem', color: '#ccc', maxWidth: '440px', lineHeight: 1.9, margin: 0 }}>
            37 kriter üzerinden performans haritanı çıkarıyoruz. Bu analiz neyin parladığını, neyin gelişeceğini ve neyin plan gerektirdiğini gösterecek.
            <br /><br />
            Cevaplarken başkalarının senden beklediklerini değil, <em style={{ color: '#f0ede8', fontStyle: 'italic' }}>sadece kendi gerçeğini</em> düşün.
          </p>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', color: '#aaa', letterSpacing: '0.1em' }}>37 kriter · yaklaşık 8 dakika</p>
          <button onClick={() => setAdim('test')}
            style={{ marginTop: '1rem', padding: '1.2rem 3rem', border: '1px solid #c9a96e', backgroundColor: 'transparent', color: '#c9a96e', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c9a96e'; e.currentTarget.style.color = '#0a0a0a'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#c9a96e'; }}>
            Başla
          </button>
          <div style={{ width: '1px', height: '60px', backgroundColor: '#c9a96e', opacity: 0.4 }} />
        </section>
      </main>
    );
  }

  if (adim === 'test') {
    const soru = sorular[mevcutSoru];
    const ilerleme = (mevcutSoru / sorular.length) * 100;
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f0ede8', display: 'flex', flexDirection: 'column' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid #2a2a2a' }}>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Yıldız Oyuncu Analizi</span>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase' }}>{mevcutSoru + 1} / {sorular.length}</span>
        </header>
        <div style={{ width: '100%', height: '1px', backgroundColor: '#2a2a2a' }}>
          <div style={{ width: `${ilerleme}%`, height: '1px', backgroundColor: '#c9a96e', transition: 'width 0.4s ease' }} />
        </div>
        <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem', textAlign: 'center', gap: '3rem' }}>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.2em', color: '#aaa', textTransform: 'uppercase', margin: 0 }}>Bu ifade benim için ne kadar doğru?</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#f0ede8', maxWidth: '520px', lineHeight: 1.5, margin: 0 }}>{soru.metin}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', width: '100%', maxWidth: '480px' }}>
            <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center' }}>
              {[1,2,3,4,5,6,7].map(puan => (
                <button key={puan} onClick={() => cevapSec(soru.id, puan)}
                  style={{ width: '52px', height: '52px', border: cevaplar[soru.id] === puan ? '1px solid #c9a96e' : '1px solid #3a3a3a', backgroundColor: cevaplar[soru.id] === puan ? '#c9a96e' : 'transparent', color: cevaplar[soru.id] === puan ? '#0a0a0a' : '#f0ede8', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s ease', flexShrink: 0 }}
                  onMouseEnter={e => { if (cevaplar[soru.id] !== puan) { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.color = '#c9a96e'; }}}
                  onMouseLeave={e => { if (cevaplar[soru.id] !== puan) { e.currentTarget.style.borderColor = '#3a3a3a'; e.currentTarget.style.color = '#f0ede8'; }}}>
                  {puan}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.15em', color: '#aaa', textTransform: 'uppercase' }}>Tamamen Yanlış</span>
              <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.15em', color: '#aaa', textTransform: 'uppercase' }}>Tamamen Doğru</span>
            </div>
          </div>
          {mevcutSoru > 0 && (
            <button onClick={() => setMevcutSoru(mevcutSoru - 1)}
              style={{ background: 'none', border: 'none', color: '#aaa', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>
              ← Önceki
            </button>
          )}
        </section>
      </main>
    );
  }

  if (adim === 'sonuc' && sonuc) {
    const { bolgeler } = sonuc;
    const toplamPuan = sorular.reduce((acc, s) => acc + (cevaplar[s.id] || 0), 0);
    const genelYuzde = Math.round((toplamPuan / (sorular.length * 7)) * 100);

    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f0ede8', display: 'flex', flexDirection: 'column' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid #2a2a2a' }}>
          <a href="/" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase', textDecoration: 'none' }}>Inside The Character</a>
          <a href="/kalibrasyon" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase', textDecoration: 'none' }}>← Kalibrasyon</a>
        </header>
        <section style={{ flex: 1, padding: '3rem 2rem', maxWidth: '680px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ width: '1px', height: '50px', backgroundColor: '#c9a96e', opacity: 0.4, margin: '0 auto' }} />
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#c9a96e', textTransform: 'uppercase' }}>Analiz Tamamlandı</span>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0ede8', margin: 0 }}>Performans Haritan</h1>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.8rem', color: '#ccc', margin: 0 }}>
              Genel performans skoru: <span style={{ color: '#c9a96e' }}>{genelYuzde}%</span>
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#aaa', textTransform: 'uppercase', margin: 0 }}>Kategori Ortalamaları</p>
            {Object.entries(kategoriler).map(([key, kat]) => {
              const ort = sonuc.kategoriler[key];
              const yuzde = (ort / 7) * 100;
              return (
                <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: kat.renk, width: '140px', flexShrink: 0, textAlign: 'right' }}>{kat.ad}</span>
                  <div style={{ flex: 1, height: '1px', backgroundColor: '#2a2a2a', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: 0, top: '-1.5px', height: '4px', width: `${yuzde}%`, backgroundColor: kat.renk, transition: 'width 1s ease' }} />
                  </div>
                  <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: '#ccc', width: '28px', flexShrink: 0 }}>{ort.toFixed(1)}</span>
                </div>
              );
            })}
          </div>

          {[
            { baslik: 'Parlayan Alan — 5 ve Üzeri', renk: '#6a9b6a', border: '#1e2a1e', liste: bolgeler.parlayan, aciklama: 'Kısa vadede odaklanırsan hızla parlatacağın alanlar.' },
            { baslik: 'Gelişim Alanı — 3 ile 5 Arası', renk: '#c9a96e', border: '#2a2510', liste: bolgeler.gelisim, aciklama: 'Orta vadede vakit ayırırsan parlatacağın alanlar.' },
            { baslik: 'Planlama Alanı — 3 Altı', renk: '#888', border: '#2a2a2a', liste: bolgeler.planlama, aciklama: 'Uzun vadede planlama yaparak ele alacağın alanlar.' },
          ].map((bolge, i) => (
            <div key={i} style={{ border: `1px solid ${bolge.border}`, padding: '1.5rem 2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: bolge.renk, borderRadius: '50%' }} />
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: bolge.renk, textTransform: 'uppercase' }}>{bolge.baslik}</span>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: '#aaa', marginLeft: 'auto' }}>{bolge.liste.length} kriter</span>
              </div>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', color: '#ccc', margin: '0 0 1rem 0', lineHeight: 1.7 }}>{bolge.aciklama}</p>
              {bolge.liste.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {bolge.liste.sort((a, b) => b.puan - a.puan).map(s => (
                    <div key={s.id} style={{ padding: '0.4rem 0.8rem', border: `1px solid ${bolge.border}`, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem', color: '#f0ede8' }}>{s.metin.replace('.', '')}</span>
                      <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: bolge.renk }}>{s.puan}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', color: '#555', margin: 0 }}>
                  {i === 2 ? 'Bu bölgede kriter yok — çok güçlü bir taban!' : 'Bu bölgede henüz kriter yok.'}
                </p>
              )}
            </div>
          ))}

          <div style={{ display: 'flex', gap: '1rem', paddingBottom: '3rem' }}>
            <a href="/kalibrasyon/arketip" style={{ flex: 1, display: 'block', padding: '1.2rem', border: '1px solid #c9a96e', color: '#c9a96e', textDecoration: 'none', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c9a96e'; e.currentTarget.style.color = '#0a0a0a'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#c9a96e'; }}>
              Kişilik Tipi Analizine Geç
            </a>
            <button onClick={() => { setCevaplar({}); setMevcutSoru(0); setSonuc(null); setAdim('test'); }}
              style={{ flex: 1, padding: '1.2rem', border: '1px solid #3a3a3a', backgroundColor: 'transparent', color: '#f0ede8', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#f0ede8'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#3a3a3a'; }}>
              Tekrar Yap
            </button>
          </div>
        </section>
      </main>
    );
  }
}