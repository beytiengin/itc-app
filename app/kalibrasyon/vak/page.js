'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';

const sorular = [
  { id: 1, metin: "Çalışmaya başlamadan önce masayı düzenlerim.", kanal: "V" },
  { id: 2, metin: "Sportif faaliyetlere katılmayı severim.", kanal: "K" },
  { id: 3, metin: "Uzun sohbetler yapmayı severim.", kanal: "A" },
  { id: 4, metin: "Heyecanlı bir konuyu anlatırken genellikle ayağa kalkar ve tüm vücudumu kullanarak anlatırım.", kanal: "K" },
  { id: 5, metin: "Bir enstrüman çalar veya çalınan bir parçayı kolaylıkla öğrenir ve söyleyebilirim.", kanal: "A" },
  { id: 6, metin: "Karşımdaki eğri bir tabloyu hemen fark eder ve düzeltirim.", kanal: "V" },
  { id: 7, metin: "Yüksek sesle okumayı severim.", kanal: "A" },
  { id: 8, metin: "Alışverişe gittiğimde ilgimi çeken her şeyi elime alıp bakmam gerekir.", kanal: "K" },
  { id: 9, metin: "Yakınlarım bazen çok konuştuğum için beni uyarırlar.", kanal: "A" },
  { id: 10, metin: "Çok yakın olduğum insanlara el şakası yapmaktan hoşlanırım.", kanal: "K" },
  { id: 11, metin: "Hayal ettiklerimi tüm detaylarıyla görürüm.", kanal: "V" },
  { id: 12, metin: "Sevdiğim kişilerle beraberken elimi onların omzuna atarım ya da koluna dokunurum.", kanal: "K" },
  { id: 13, metin: "Telefon numarasını biri bana söylüyormuş gibi ya da ben sesli söyleyerek hatırlarım.", kanal: "A" },
  { id: 14, metin: "Başkalarının hal ve hareketlerini kolayca taklit ederim.", kanal: "K" },
  { id: 15, metin: "Kavramakta zorlandığım bir konuyu, gözümün önünde canlandırarak anlamaya çalışırım.", kanal: "V" },
  { id: 16, metin: "Bir şeye konsantre olmak istediğimde çevreden gelen seslerden çok rahatsız olurum.", kanal: "A" },
  { id: 17, metin: "Tamir işlerinde becerikliyimdir.", kanal: "K" },
  { id: 18, metin: "Okunmakta olan bir metnin bir kopyasını takip etmezsem anlayamam.", kanal: "V" },
  { id: 19, metin: "Bir konuyu okumaktansa birinin anlatmasını tercih ederim.", kanal: "A" },
  { id: 20, metin: "Bir yerde uzun süre oturursam sağa sola oynar, parmaklarımı çıtlatır ya da ayağımı sallarım.", kanal: "K" },
  { id: 21, metin: "Müzik dinlemeyi çok severim.", kanal: "A" },
  { id: 22, metin: "Harita, poster ve şemalarla anlatılmak istenenleri çabuk kavrarım.", kanal: "V" },
  { id: 23, metin: "Bir numarayı hatırlamak istediğimde, bir yerde yazılmış haliyle gözümün önüne gelir.", kanal: "V" },
  { id: 24, metin: "Ahenkli ve güzel bir konuşmam olduğunu söylerler.", kanal: "A" },
  { id: 25, metin: "Sessiz okumayı severim.", kanal: "V" },
  { id: 26, metin: "El sanatları konusunda çalışmalar yaparım ya da bu konuya yatkın olduğumu bilirim.", kanal: "K" },
  { id: 27, metin: "Görmediğim şeyi kavramakta zorlanırım.", kanal: "V" },
];

const kanalBilgisi = {
  V: {
    ad: "Görsel", eng: "Visual", renk: "#c9a96e",
    aciklama: "Enstrümanın görsel kanaldan besleniyorsun. Zihnin imgeler, renkler ve mekânsal örüntülerle çalışır. Karakter inşası sırasında somatik çapalarını renk ve ışık imgelemeleriyle atarsın. AI Dış Ses seanslarında sana 'Bu hissin rengi ne?' ve 'Bunu nerede görüyorsun?' gibi sorular yönlendirilecek.",
    pratik: "Sahneye çıkmadan önce karakterin bulunduğu mekânı zihninde görselleştir. O mekânın ışığını, dokusunu, renk paletini hisset."
  },
  A: {
    ad: "İşitsel", eng: "Auditory", renk: "#8fa3b1",
    aciklama: "Enstrümanın işitsel kanaldan besleniyorsun. Zihnin sesler, ritimler ve iç diyalogla çalışır. Karakter inşası sırasında somatik çapalarını sesin tonu ve ritmiyle atarsın. AI Dış Ses seanslarında sana 'Bu hissin sesi nasıl?' ve 'Karakterin içindeki ses ne söylüyor?' gibi sorular yönlendirilecek.",
    pratik: "Sahneye çıkmadan önce karakterin iç sesini bul. O sesin tonu, ritmi ve hızı seni doğrudan karakterin bedenine götürür."
  },
  K: {
    ad: "Kinestetik", eng: "Kinesthetic", renk: "#9b8ea0",
    aciklama: "Enstrümanın kinestetik kanaldan besleniyorsun. Zihnin beden duyumları, hareket ve dokunsal hafızayla çalışır. Karakter inşası sırasında somatik çapalarını fiziksel bir gerilim veya ağırlık noktasıyla atarsın. AI Dış Ses seanslarında sana 'Bu his bedeninin neresinde oturuyor?' ve 'Dokunsan nasıl bir doku hissedersin?' gibi sorular yönlendirilecek.",
    pratik: "Sahneye çıkmadan önce karakterin bedensel ağırlığını ve postürünü hisset. O postür seni doğrudan karakterin duygusal durumuna götürür."
  }
};

export default function VAK() {
  const [adim, setAdim] = useState('giris');
  const [mevcutSoru, setMevcutSoru] = useState(0);
  const [cevaplar, setCevaplar] = useState({});
  const [sonuc, setSonuc] = useState(null);

  function puanHesapla(c) {
    let V = 0, A = 0, K = 0;
    sorular.forEach(s => {
      const puan = c[s.id] || 0;
      if (s.kanal === 'V') V += puan;
      if (s.kanal === 'A') A += puan;
      if (s.kanal === 'K') K += puan;
    });
    const baskin = Object.entries({ V, A, K }).sort((a, b) => b[1] - a[1])[0][0];
    return { V, A, K, baskin };
  }

  async function cevapSec(soruId, puan) {
    const yeniCevaplar = { ...cevaplar, [soruId]: puan };
    setCevaplar(yeniCevaplar);
    setTimeout(async () => {
      if (mevcutSoru < sorular.length - 1) {
        setMevcutSoru(mevcutSoru + 1);
      } else {
        const hesap = puanHesapla(yeniCevaplar);
        setSonuc(hesap);
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (user) {
            await supabase.from('vak_sonuclari').insert({
              kullanici_id: user.id,
              gorsel: hesap.V,
              isitsel: hesap.A,
              kinestetik: hesap.K,
              baskin: hesap.baskin,
            });
          }
        } catch (e) { console.log('Kayıt hatası:', e); }
        setAdim('sonuc');
      }
    }, 300);
  }

  if (adim === 'giris') {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f0ede8', display: 'flex', flexDirection: 'column' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid #2a2a2a' }}>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Actor's Gym</span>
          <a href="/kalibrasyon" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase', textDecoration: 'none' }}>← Kalibrasyon</a>
        </header>
        <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', textAlign: 'center', gap: '2rem' }}>
          <div style={{ width: '1px', height: '60px', backgroundColor: '#c9a96e', opacity: 0.4 }} />
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#c9a96e', textTransform: 'uppercase' }}>VAK Analizi</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#f0ede8', margin: 0, lineHeight: 1.1 }}>Kalibrasyon</h1>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.9rem', color: '#ccc', maxWidth: '420px', lineHeight: 1.9, margin: 0 }}>
            Enstrümanını akort ediyoruz. Bu 27 maddelik analiz, karakter inşası sırasındaki algı navigasyonunu belirleyecek.
            <br /><br />
            Cevap verirken sadece kendi doğal reflekslerini düşün. Doğru ya da yanlış cevap yoktur.
          </p>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', color: '#aaa', letterSpacing: '0.1em' }}>27 soru · yaklaşık 5 dakika</p>
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
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>VAK Analizi</span>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase' }}>{mevcutSoru + 1} / {sorular.length}</span>
        </header>
        <div style={{ width: '100%', height: '1px', backgroundColor: '#2a2a2a' }}>
          <div style={{ width: `${ilerleme}%`, height: '1px', backgroundColor: '#c9a96e', transition: 'width 0.4s ease' }} />
        </div>
        <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem', textAlign: 'center', gap: '3rem' }}>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.2em', color: '#aaa', textTransform: 'uppercase', margin: 0 }}>Bu ifade benim için ne kadar doğru?</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#f0ede8', maxWidth: '560px', lineHeight: 1.5, margin: 0 }}>{soru.metin}</h2>
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
              ← Önceki Soru
            </button>
          )}
        </section>
      </main>
    );
  }

  if (adim === 'sonuc' && sonuc) {
    const bilgi = kanalBilgisi[sonuc.baskin];
    const maksimum = 9 * 7;
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f0ede8', display: 'flex', flexDirection: 'column' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid #2a2a2a' }}>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Actor's Gym</span>
          <a href="/kalibrasyon" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase', textDecoration: 'none' }}>← Kalibrasyon</a>
        </header>
        <section style={{ flex: 1, padding: '3rem 2rem', maxWidth: '600px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ width: '1px', height: '50px', backgroundColor: bilgi.renk, opacity: 0.6, margin: '0 auto' }} />
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: bilgi.renk, textTransform: 'uppercase' }}>Kalibrasyon Tamamlandı</span>
            <div>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', letterSpacing: '0.2em', color: '#ccc', textTransform: 'uppercase', margin: '0 0 0.8rem 0' }}>Baskın Kanalın</p>
              <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(3rem, 8vw, 5.5rem)', color: '#f0ede8', margin: 0, lineHeight: 1 }}>{bilgi.ad}</h1>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: bilgi.renk, textTransform: 'uppercase', marginTop: '0.5rem' }}>{bilgi.eng}</p>
            </div>
          </div>

          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[{ kanal: 'V', ad: 'Görsel', puan: sonuc.V }, { kanal: 'A', ad: 'İşitsel', puan: sonuc.A }, { kanal: 'K', ad: 'Kinestetik', puan: sonuc.K }].map(item => (
              <div key={item.kanal} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.15em', color: item.kanal === sonuc.baskin ? bilgi.renk : '#ccc', textTransform: 'uppercase', width: '80px', textAlign: 'right', flexShrink: 0 }}>{item.ad}</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#2a2a2a', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 0, top: '-1px', height: '3px', width: `${(item.puan / maksimum) * 100}%`, backgroundColor: item.kanal === sonuc.baskin ? bilgi.renk : '#3a3a3a', transition: 'width 1s ease' }} />
                </div>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: '#ccc', width: '30px', flexShrink: 0 }}>{item.puan}</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '2rem' }}>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: '#ddd', lineHeight: 1.9, margin: 0 }}>{bilgi.aciklama}</p>
          </div>

          <div style={{ backgroundColor: '#111', border: '1px solid #2a2a2a', padding: '1.5rem 2rem' }}>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: bilgi.renk, textTransform: 'uppercase', marginBottom: '0.8rem' }}>Pratik Uygulama</p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1rem', color: '#f0ede8', lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>"{bilgi.pratik}"</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', paddingBottom: '3rem' }}>
            <a href="/kalibrasyon/yildiz" style={{ flex: 1, display: 'block', padding: '1.2rem', border: '1px solid #c9a96e', color: '#c9a96e', textDecoration: 'none', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c9a96e'; e.currentTarget.style.color = '#0a0a0a'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#c9a96e'; }}>
              Star Actor Matrix
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