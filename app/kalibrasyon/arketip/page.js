'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';

const sorular = [
  {
    id: 1, boyut: 'EI',
    senaryo: "Uzun ve yorucu bir prova günü sona erdi.",
    a: { metin: "Ekiple bir araya gelip konuşmak, o günü birlikte değerlendirmek enerji verir.", tip: 'E' },
    b: { metin: "Yalnız kalmak, sessizce o günü sindirmek ve dinlenmek isterim.", tip: 'I' }
  },
  {
    id: 2, boyut: 'EI',
    senaryo: "Zor bir sahneye gireceksin. Nasıl hazırlanırsın?",
    a: { metin: "Partnerimle veya yönetmenle konuşarak, dışarıdan fikir alarak hazırlanırım.", tip: 'E' },
    b: { metin: "Kendi içimde çalışırım. Sessiz, yalnız bir hazırlık sürecine ihtiyacım vardır.", tip: 'I' }
  },
  {
    id: 3, boyut: 'EI',
    senaryo: "Sette beklenmedik bir teknik sorun çıktı, uzun bir bekleme başladı.",
    a: { metin: "Ekiptekilerle konuşur, espri yapar, ortamı canlı tutarım.", tip: 'E' },
    b: { metin: "Geri çekilir, müzik dinler veya notlarıma bakarım. Yalnız kalmayı tercih ederim.", tip: 'I' }
  },
  {
    id: 4, boyut: 'SN',
    senaryo: "Yeni bir senaryo aldın. İlk okumada dikkatini ne çeker?",
    a: { metin: "Olayların sırası, fiziksel detaylar, diyalogların gerçekçiliği. Somut olan her şey.", tip: 'S' },
    b: { metin: "Karakterin altındaki tema, semboller, metnin söylemediği şeyler. Katmanlar.", tip: 'N' }
  },
  {
    id: 5, boyut: 'SN',
    senaryo: "Yönetmen sana karakterin için 'bu bir kayıp insanı' diyor. Ne yaparsın?",
    a: { metin: "Somut detaylar ararım: ne kaybetti, ne zaman, nasıl? Gerçek bir temel kurarım.", tip: 'S' },
    b: { metin: "Kayıp duygusunun özüne giderim. Metafor ve sezgiyle karaktere giriş ararım.", tip: 'N' }
  },
  {
    id: 6, boyut: 'SN',
    senaryo: "Karakter inşası sırasında en çok ne işe yarar?",
    a: { metin: "Gözlem. Gerçek insanları izlemek, somut jestler ve alışkanlıklar keşfetmek.", tip: 'S' },
    b: { metin: "İmgeleme. Karakterin dünyasını zihnimde canlı tutmak, sezgisel bağlar kurmak.", tip: 'N' }
  },
  {
    id: 7, boyut: 'TF',
    senaryo: "Yönetmen bir sahneyi beğenmedi ve sert bir yorum yaptı.",
    a: { metin: "Ne demek istediğini analiz ederim. Eleştirinin teknik kısmını alır, çalışırım.", tip: 'T' },
    b: { metin: "Önce o tonu hissederim. Sonra ne kastettiğini anlamaya çalışırım. İlişki önemlidir.", tip: 'F' }
  },
  {
    id: 8, boyut: 'TF',
    senaryo: "Karakterinin motivasyonunu nasıl bulursun?",
    a: { metin: "Mantıksal bir analiz yaparım: hedefe giden neden-sonuç zincirini çıkarırım.", tip: 'T' },
    b: { metin: "Karakteri hissederim. Motivasyonu içimde bir akış olarak yaşarım, analiz sonra gelir.", tip: 'F' }
  },
  {
    id: 9, boyut: 'TF',
    senaryo: "Partner sahneye hazır değil geldi, bu seninle olan sahneyi olumsuz etkiliyor.",
    a: { metin: "Durumu net konuşurum. Profesyonel bir çerçevede ne yapılması gerektiğini söylerim.", tip: 'T' },
    b: { metin: "Önce ne yaşadığını anlamaya çalışırım. İlişkiyi koruyarak bir çözüm ararım.", tip: 'F' }
  },
  {
    id: 10, boyut: 'JP',
    senaryo: "Prova süreci nasıl ilerlerse daha iyi çalışırsın?",
    a: { metin: "Net bir plan ve takvim. Her provaın hedefi belli olsun, adım adım ilerleyelim.", tip: 'J' },
    b: { metin: "Esnek bir süreç. O gün nereye gittiğimize göre şekillenen, açık uçlu provalar.", tip: 'P' }
  },
  {
    id: 11, boyut: 'JP',
    senaryo: "Prova sırasında yönetmen sahneyi tamamen değiştirdi.",
    a: { metin: "Önce içim sıkışır. Yeni yapıyı hızla netleştirip yeni bir plana oturmak isterim.", tip: 'J' },
    b: { metin: "Heyecanlanırım. Değişim bana yeni bir enerji verir, spontanlık güçlü yönümdür.", tip: 'P' }
  },
  {
    id: 12, boyut: 'JP',
    senaryo: "Prömiyere bir hafta kaldı. Nasıl hissediyorsun?",
    a: { metin: "Hazır hissediyorum. Her şeyi planladım, tekrarladım. Sürece güveniyorum.", tip: 'J' },
    b: { metin: "Henüz keşfetmediğim şeyler olabilir. Son ana kadar açık kalmayı severim.", tip: 'P' }
  },
];

const tipler = {
  ISTJ: { ad: "Dürüst Emekçi", renk: "#8fa3b1", yetenekler: "Hedefe adımlarla ilerleme, sorunları öngörme, ritüeller ve sistemlerle performansı geliştirme.", engeller: "Mükemmeliyetçilik, duygularını aktarmada güçlük, belirsizlikle baş edememe.", performans: "Plan ve program yap. Rol modelleri belirle ve analiz et. Mükemmeliyetçiliğini kır.", sahne: "Yapılandırılmış, güvenilir, detaycı bir oyuncu. Sahnede tutarlılığın ve disiplinin gücü." },
  ISFJ: { ad: "Çalışkan Sadık", renk: "#9b8ea0", yetenekler: "Hedefe adımlarla ilerleme, sadakat, ritüeller ve sistemler oluşturma.", engeller: "Mükemmeliyetçilik, çatışmadan kaçınma, planları esnetmede güçlük.", performans: "Takım çalışmasına yönel. Mükemmeliyetçiliğini kır. Kendine zaman tanı.", sahne: "Denge ve tutarlılık getiren, hassas ve dikkatli bir oyuncu. Derinlikli iç dünya." },
  ISTP: { ad: "Durdurulamaz İşlemci", renk: "#a0b89b", yetenekler: "Yüksek yaratıcılık, sıradışı çözümler, hızlı kavrayış, yoğun entelektüel merak.", engeller: "Duygusal ihtiyaçları ihmal etme, karar vermede güçlük, obsesyonlar.", performans: "Yavaşlamayı öğren. Sosyalleş. Aşırı yapılandırılmamış ortamlarda çalış.", sahne: "Analitik, meraklı, problem çözen bir oyuncu. Baskı altında en iyi performansı çıkarır." },
  ISFP: { ad: "Sempatik Şair", renk: "#b8a99b", yetenekler: "Estetik bakış açısı, insan odaklı çözümler, sanatın her alanında beceri.", engeller: "Güvende hissetmediğinde öğrenememe, organize olamama, kırılganlık.", performans: "Kendi kararlarına güven. Sınır koymayı öğren. Zaman yönetimini geliştir.", sahne: "Derin duygusal bağ kuran, estetik ve hassas bir oyuncu. İçten ve samimi performans." },
  INFJ: { ad: "Empatik Vizyoner", renk: "#c9a96e", yetenekler: "Gelecekten bugüne planlama, sıradışı çözümler, entegrasyon ve sentezleme.", engeller: "Bugünü görmezden gelme, aşırı mükemmeliyetçilik, inatçılık.", performans: "Kendine özgü yeteneklerini kullan. Zihnindeki fikirleri yaz. Dış dünyaya da odaklan.", sahne: "Derin, katmanlı, sezgisel bir oyuncu. Karaktere içten içe giren, çok boyutlu performans." },
  INTJ: { ad: "Strateji Uzmanı", renk: "#8fa3b1", yetenekler: "Stratejik planlama, sıradışı fikirler, entegrasyon ve sentezleme becerileri.", engeller: "İnsanları görmezden gelme, aşırı bağımsızlık, basit şeyleri komplike yapma.", performans: "Yaratıcılığın için doğru yöntemler bul. Karar verme becerisini geliştir. Oyun oyna.", sahne: "Hesaplı, derinlikli, stratejik bir oyuncu. Karakterin mantığını içten kurar." },
  INFP: { ad: "Derin İdealist", renk: "#9b8ea0", yetenekler: "Estetik bakış açısı, değer ve duygu odaklı çözümler, yüksek yazarlık becerisi.", engeller: "Güvende hissetmediğinde öğrenememe, kararsızlık, organize olamama.", performans: "Kendi kararlarına güven. Sınır koymayı öğren. Önceliklerini belirle.", sahne: "Değer odaklı, derin duygulu bir oyuncu. Karakteri öz gerçekliğiyle yaşar." },
  INTP: { ad: "Düşünce Uzmanı", renk: "#a0b89b", yetenekler: "Kapsamlı ve sıradışı çözümler, hızlı kavrayış, yoğun entelektüel merak.", engeller: "Duygusal ihtiyaçları ihmal etme, karar vermede güçlük, obsesyonlar.", performans: "Yavaşlamayı öğren. Sosyalleş. Planlama ve zaman yönetimi becerilerini geliştir.", sahne: "Analitik, meraklı, kavramsal bir oyuncu. Karakterin zihinsel yapısını içten inşa eder." },
  ESTP: { ad: "Kurtarıcı Maceracı", renk: "#c9a96e", yetenekler: "5 duyuyla zihinde canlandırma, etkili problem çözme, esneklik, pozitif enerji.", engeller: "Dikkat dağınıklığı, sabırsızlık, sonuç odaklı davranamama.", performans: "Kişisel farkındalık geliştir. Dinleme becerisini geliştir. Düzenli hedefler belirle.", sahne: "Enerjik, spontan, anlık tepkisi güçlü bir oyuncu. Sahnede canlı ve dinamik varlık." },
  ESFP: { ad: "Yapıcı Performansçı", renk: "#b8a99b", yetenekler: "5 duyuyla canlandırma, esneklik, pozitif enerji, eğlenme ve eğlendirebilme.", engeller: "Dikkat dağınıklığı, sabırsızlık, bilinmeyenden korkma.", performans: "Yeteneklerine güven. Dinleme becerisini geliştir. Strese dayanıklılığını artır.", sahne: "Sıcak, enerjik, izleyiciyle bağ kuran bir oyuncu. Sahnede doğal ve çekici varlık." },
  ESTJ: { ad: "Organizatör Lider", renk: "#8fa3b1", yetenekler: "Liderlik, strateji, güçlü problem çözme, mantıksal kategorize etme.", engeller: "Diğerlerin yaratıcılığını kısıtlama, kontrol düşkünlüğü, siyah-beyaz bakış açısı.", performans: "Başkalarının bakış açılarını duy. Gri alanlarını artır. Dinlenmeyi öğren.", sahne: "Güvenilir, yapılandırılmış, lider bir oyuncu. Sahneye düzen ve güç getirir." },
  ESFJ: { ad: "Ev Sahibi Bağdaştırıcı", renk: "#9b8ea0", yetenekler: "Liderlik, insanların performansını artırma, güvenli ortam oluşturma.", engeller: "Sınır koyamama, onaylanmaya aşırı düşkünlük, insanlarla fazla özdeşleşme.", performans: "Bağımsız hareket etmeyi öğren. Sınır koy. Analiz etme becerilerini geliştir.", sahne: "Sıcak, bağ kuran, ekibi besleyen bir oyuncu. Partnerini sahneye taşır." },
  ENFP: { ad: "Katalizör Kaşif", renk: "#c9a96e", yetenekler: "Yeni fikirler üretme, yaratıcılık, yüksek enerji, gelecek senaryoları üretme.", engeller: "Uzun süreli odaklanmada sıkıntı, sabırsızlık, tükenmişlik riski.", performans: "Yüksek kişisel farkındalık. Duygularını organize et. İş-özel hayat dengesi kur.", sahne: "Yaratıcı, enerjik, sezgisel bir oyuncu. Karaktere tutkuyla ve bütün benliğiyle girer." },
  ENTP: { ad: "İnsan Güçlendirici", renk: "#a0b89b", yetenekler: "Yeni fikirler üretme, yaratıcılık, farklı bağlantılar kurma, yüksek enerji.", engeller: "Uzun süreli odaklanmada sıkıntı, ayrıntıları kaçırma, tükenmişlik riski.", performans: "Fikirleri yakala ve takip et. Zaman yönetimini öğren. Değişime açık kal.", sahne: "Neşeli, girişken, enerji yayan bir oyuncu. Sahneye renk ve sürpriz katar." },
  ENFJ: { ad: "Cesaret Verici", renk: "#8fa3b1", yetenekler: "Liderlik, iletişim, insanların performansını artırma, güvenli ortam oluşturma.", engeller: "Sınır koyamama, onaylanmaya düşkünlük, uzlaşamazlıkta huzursuzluk.", performans: "Bağımsız hareket et. Çatışmada rahat olmayı öğren. Sınır koy.", sahne: "Sıcak, sezgisel, insan odaklı bir oyuncu. Partneri sahneye taşıyan, bağ kuran." },
  ENTJ: { ad: "Stratejik Amir", renk: "#b8a99b", yetenekler: "Liderlik, strateji, güçlü problem çözme, mantıksal kategorize etme.", engeller: "Diğerlerin yaratıcılığını kısıtlama, kontrol düşkünlüğü, yorgunluk.", performans: "Başkalarının bakış açılarını duy. Gri alanlarını artır. Dinlenmeyi öğren.", sahne: "Kararlı, stratejik, etkileyici bir oyuncu. Karakterin hedefine tam odaklanır." },
};

export default function Arketip() {
  const [adim, setAdim] = useState('giris');
  const [mevcutSoru, setMevcutSoru] = useState(0);
  const [cevaplar, setCevaplar] = useState({});
  const [tip, setTip] = useState(null);

  function tipHesapla(c) {
    function baskin(boyut, a, b) {
      const list = c[boyut] || [];
      const aCount = list.filter(x => x === a).length;
      const bCount = list.filter(x => x === b).length;
      return aCount >= bCount ? a : b;
    }
    return baskin('EI','E','I') + baskin('SN','S','N') + baskin('TF','T','F') + baskin('JP','J','P');
  }

  async function cevapSec(boyut, secim) {
    const yeniCevaplar = { ...cevaplar, [boyut]: (cevaplar[boyut] || []).concat(secim) };
    setCevaplar(yeniCevaplar);
    setTimeout(async () => {
      if (mevcutSoru < sorular.length - 1) {
        setMevcutSoru(mevcutSoru + 1);
      } else {
        const sonuc = tipHesapla(yeniCevaplar);
        setTip(sonuc);
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (user) {
            await supabase.from('arketip_sonuclari').insert({
              kullanici_id: user.id,
              tip: sonuc,
              ad: tipler[sonuc]?.ad || sonuc,
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
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#c9a96e', textTransform: 'uppercase' }}>Kişilik Tipi Analizi</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#f0ede8', margin: 0, lineHeight: 1.1 }}>Enstrüman Profilin</h1>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.9rem', color: '#ccc', maxWidth: '440px', lineHeight: 1.9, margin: 0 }}>
            12 sahne senaryosu üzerinden enstrümanının dört temel boyutunu belirliyoruz. Sonuç 16 oyunculuk profilinden sana en yakın olanı gösterecek.
            <br /><br />
            <em style={{ color: '#aaa', fontStyle: 'italic' }}>Her seçenekte seni en iyi tanımlayan tepkiyi seç. Doğru ya da yanlış yok.</em>
          </p>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', color: '#aaa', letterSpacing: '0.1em' }}>12 senaryo · yaklaşık 4 dakika</p>
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
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Kişilik Tipi Analizi</span>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase' }}>{mevcutSoru + 1} / {sorular.length}</span>
        </header>
        <div style={{ width: '100%', height: '1px', backgroundColor: '#2a2a2a' }}>
          <div style={{ width: `${ilerleme}%`, height: '1px', backgroundColor: '#c9a96e', transition: 'width 0.4s ease' }} />
        </div>
        <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem', textAlign: 'center', gap: '2.5rem' }}>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.2em', color: '#aaa', textTransform: 'uppercase', margin: 0 }}>Sahne</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', color: '#f0ede8', maxWidth: '520px', lineHeight: 1.6, margin: 0 }}>
            {soru.senaryo}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '500px' }}>
            {[soru.a, soru.b].map((secenek, i) => (
              <button key={i} onClick={() => cevapSec(soru.boyut, secenek.tip)}
                style={{ padding: '1.4rem 1.8rem', border: '1px solid #3a3a3a', backgroundColor: 'transparent', color: '#f0ede8', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.82rem', letterSpacing: '0.03em', lineHeight: 1.7, cursor: 'pointer', textAlign: 'left', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.backgroundColor = '#111'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#3a3a3a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#c9a96e', marginRight: '0.5rem', fontSize: '0.9rem' }}>{String.fromCharCode(65 + i)})</span>
                {secenek.metin}
              </button>
            ))}
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

  if (adim === 'sonuc' && tip) {
    const profil = tipler[tip];
    const harfler = tip.split('');
    const boyutlar = [
      { harf: harfler[0], a: 'E', b: 'I', aAd: 'Dışa Dönük', bAd: 'İçe Dönük' },
      { harf: harfler[1], a: 'S', b: 'N', aAd: 'Duyumsal', bAd: 'Sezgisel' },
      { harf: harfler[2], a: 'T', b: 'F', aAd: 'Mantıksal', bAd: 'Duygusal' },
      { harf: harfler[3], a: 'J', b: 'P', aAd: 'Planlı', bAd: 'Esnek' },
    ];

    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f0ede8', display: 'flex', flexDirection: 'column' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid #2a2a2a' }}>
          <a href="/" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase', textDecoration: 'none' }}>Inside The Character</a>
          <a href="/kalibrasyon" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase', textDecoration: 'none' }}>← Kalibrasyon</a>
        </header>
        <section style={{ flex: 1, padding: '3rem 2rem', maxWidth: '640px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ width: '1px', height: '50px', backgroundColor: profil.renk, opacity: 0.5, margin: '0 auto' }} />
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: profil.renk, textTransform: 'uppercase' }}>Enstrüman Profili</span>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(3rem, 10vw, 6rem)', color: '#f0ede8', margin: 0, letterSpacing: '0.15em', lineHeight: 1 }}>{tip}</h1>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.2rem', fontStyle: 'italic', color: profil.renk, margin: 0 }}>{profil.ad}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            {boyutlar.map((b, i) => (
              <div key={i} style={{ padding: '1rem 1.2rem', border: `1px solid ${profil.renk}44`, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.8rem', color: profil.renk, lineHeight: 1 }}>{b.harf}</span>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', color: '#f0ede8', letterSpacing: '0.05em' }}>{b.harf === b.a ? b.aAd : b.bAd}</span>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{b.harf === b.a ? b.a : b.b} / {b.harf === b.a ? b.b : b.a}</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: profil.renk, textTransform: 'uppercase' }}>Sahnede Nasıl Bir Oyuncusun</span>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.05rem', color: '#f0ede8', lineHeight: 1.8, margin: 0, fontStyle: 'italic' }}>"{profil.sahne}"</p>
          </div>

          <div style={{ backgroundColor: '#0f1a0f', border: '1px solid #1e2a1e', padding: '1.5rem 1.8rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#6a9b6a', textTransform: 'uppercase' }}>Güçlü Yönler</span>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.82rem', color: '#ddd', lineHeight: 1.8, margin: 0 }}>{profil.yetenekler}</p>
          </div>

          <div style={{ backgroundColor: '#1a0f0f', border: '1px solid #2a1e1e', padding: '1.5rem 1.8rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#9b6a6a', textTransform: 'uppercase' }}>Performans Engelleri</span>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.82rem', color: '#ddd', lineHeight: 1.8, margin: 0 }}>{profil.engeller}</p>
          </div>

          <div style={{ backgroundColor: '#111', border: '1px solid #2a2a1a', padding: '1.5rem 1.8rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Yüksek Performans İçin</span>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.82rem', color: '#ddd', lineHeight: 1.8, margin: 0 }}>{profil.performans}</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', paddingBottom: '3rem' }}>
            <a href="/antrenman/karakter" style={{ flex: 1, display: 'block', padding: '1.2rem', border: '1px solid #c9a96e', color: '#c9a96e', textDecoration: 'none', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c9a96e'; e.currentTarget.style.color = '#0a0a0a'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#c9a96e'; }}>
              Karakter Kasasına Geç
            </a>
            <button onClick={() => { setCevaplar({}); setMevcutSoru(0); setTip(null); setAdim('test'); }}
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