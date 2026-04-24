'use client';

import { useState } from 'react';

const egzersizler = [
  {
    no: 1,
    baslik: "Hayaletle Karşılaşmadan Önce",
    altyazi: "Sessizlikte Bekleyiş",
    sure: "10-15 dk",
    duygusal_alan: "Bekleyiş · Korku · Belirsizlik",
    hedef: "Bilinmeyene hazırlık, sessizlikte gerilim yaratımı.",
    baglam: "Hamlet, babasının hayaletini göreceği gece kale burçlarında nöbetçilere katılır. Hayalet gelmeden önce yoğun bir sessizlik ve bilinmeyene karşı derin bir bekleyiş vardır. Henüz hiçbir açıklamanın, hiçbir kesin bilginin olmadığı, yalnızca hislerin ve korkunun egemen olduğu bir eşik.",
    mekan: "Gece vakti eski bir kalenin taş burçları. Havanın serinliğini yüzünde hisset. Uzakta rüzgârın hafif uğultusu var. Ay ışığı zayıf; etrafın tam aydınlık değil, ama tam karanlık da değil.",
    ic_ses: ["Bir şey olacak mı bu gece?", "Gerçek mi bütün bu anlatılanlar?", "Beni ne bekliyor?", "Babamın ruhu… yoksa bir yanılsama mı?", "İçimde bir ağırlık var; ama bilmiyorum nereden geliyor."]
  },
  {
    no: 2,
    baslik: "Hayaletle Görüşmeden Sonra",
    altyazi: "İç Çöküş",
    sure: "10-15 dk",
    duygusal_alan: "İhanet · Yas · Yalnızlık",
    hedef: "Gerçeğin yükünü bedende hissetmek, ihanet duygusunun yarattığı iç sarsıntıyı sahneye taşıyacak altyapı kurmak.",
    baglam: "Hamlet, babasının hayaletinden Claudius'un ihanetini öğrendikten sonra o geceyi yalnız geçiriyor. Şok, yas, öfke ve yalnızlık aynı anda var oluyor. İç dünyasında derin bir çöküş ve sessiz bir patlama yaşanıyor.",
    mekan: "Kalenin içindeki bir taş oda. Hava hareketsiz, duvarlar soğuk. Pencereden sızan zayıf bir ışık var ama odanın çoğu gölgede kalıyor. Çevrende kimse yok. Sadece sessizlik.",
    ic_ses: ["Bu gerçek… içime kazındı.", "Annem… babam…", "Kime güvenebilirim artık?", "Her şey bir yalan mıydı?", "İçimde bir şey kırıldı, ama sesini bile duyamıyorum."]
  },
  {
    no: 3,
    baslik: "To Be or Not To Be",
    altyazi: "Varoluşsal Sorgulama",
    sure: "15-20 dk",
    duygusal_alan: "Umutsuzluk · Ölüm korkusu · Yaşam arzusu",
    hedef: "Ölüm ve yaşam arasındaki boşlukta duygusal salınım. Monoloğun yalnızca kelimelerini değil, altındaki titreşimleri bedende hissetmek.",
    baglam: "Bu monolog, Hamlet'in yalnızca varoluşsal bir düşünce egzersizi değil, kendi yaşamı ve ölümü üzerinde derin bir sorgulama yaptığı, zihinsel bir uçurumun kenarında durduğu andır.",
    mekan: "Bir taş koridorun ya da boş bir salonun ortası. Mekân geniş ama boş. Etrafta yankı yapan bir sessizlik var. Işık zayıf; gölgeler mekânın köşelerine sızıyor.",
    ic_ses: ["Olmak mı, olmamak mı?", "Yaşamın ağırlığı mı? Yoksa bilinmeyenin hafifliği mi?", "Ölüm… bir rüya mı? Yoksa daha derin bir uyanış mı?", "Acılara direnmek mi? Yoksa acıların kaynağını terk etmek mi?"]
  },
  {
    no: 4,
    baslik: "Fare Kapanı Planı",
    altyazi: "Sessiz Planlama",
    sure: "10-15 dk",
    duygusal_alan: "Strateji · Şüphe · Umut",
    hedef: "Claudius'u suçüstü yakalama stratejisini içselleştirmek. Şüphe, umut ve korkunun aynı anda var olduğu zihinsel atmosfer.",
    baglam: "Hamlet, Claudius'un suçluluğunu kanıtlamak için bir oyun sahnelemeye karar verir. Bu süreç yalnızca stratejik bir hazırlık değil, kendi korkularıyla ve adalet arzusuyla iç içe geçen sessiz bir satranç.",
    mekan: "Kalenin içindeki boş bir oda. Küçük bir masa ve birkaç sandalye dışında neredeyse boştur. Işık loştur. Zihnin hareketli, düşünceler sessizce akıyor.",
    ic_ses: ["Eğer bir suçlunun ruhuna dokunabilirsem…", "Onu kendi tuzağına düşürmeliyim.", "Sözler yetmedi; şimdi görüntülerle yakalayacağım.", "Bu bir oyun olacak… ama kaderim de bu oyunda.", "İzleyeceğim… gözlerinden kaçırmayacağım."]
  },
  {
    no: 5,
    baslik: "Claudius'u Öldürmeme",
    altyazi: "Vicdan ve Adalet Çatışması",
    sure: "15-20 dk",
    duygusal_alan: "Vicdan · Adalet · Öfke",
    hedef: "İntikam ile adalet arasında zihinsel ve duygusal bir salınım. Bilinçli erteleme kararının derin çelişkisini içselleştirmek.",
    baglam: "Hamlet, Claudius'u dua ederken yalnız yakalar. Öldürmek için mükemmel bir fırsat ayağına gelmiştir. Ancak durur — çünkü Claudius'u bu anda öldürürse, onu ebedî kurtuluşa gönderecektir.",
    mekan: "Kalenin bir şapel odası. Taş duvarlar, loş bir ışık. Claudius uzakta diz çökmüş, başı eğik. Mekânda sessiz bir dua sesi, neredeyse fısıltı gibi duyuluyor.",
    ic_ses: ["Şimdi öldürsem…", "Ama onu temiz bir ruhla mı gönderirim?", "Babam cehenneme gitti, oysa o cennete mi?", "Hayır… intikam, adaletle terazilenmeli.", "Zamanı geldiğinde, suç içinde yakalayacağım onu."]
  },
  {
    no: 6,
    baslik: "Fortinbras Haberi",
    altyazi: "Utanç ve Harekete Geçme",
    sure: "10-15 dk",
    duygusal_alan: "Suçluluk · Kararlılık · Kıyaslanma",
    hedef: "Eylemsizlik utancı ve harekete geçme iradesi. Pasif direnişten aktif karara doğru zihinsel kırılma.",
    baglam: "Hamlet, Fortinbras'ın küçük bir toprak parçası için gösterdiği kararlılığı öğrenir. Bu haber, kendi eylemsizliğini gözlerinin önüne serer. İçinde ağır bir utanç ve kendine yönelen bir öfke oluşur.",
    mekan: "Kalenin taş duvarlarının arasında bir geçit. Bir haberci az önce konuştu. Etraf sessiz, sadece kendi iç sesin yankılanıyor.",
    ic_ses: ["Ben burada dururken onlar savaşıyor…", "Onlar onursuz topraklar için ölüme gidiyor; ben babamın intikamını bile alamadım.", "Ne kaldı bana? Şerefimi korumaktan başka?", "Şimdi… Şimdi yapmalıyım."]
  },
  {
    no: 7,
    baslik: "Ophelia'nın Kaybı",
    altyazi: "Sessiz Yas",
    sure: "15-20 dk",
    duygusal_alan: "Yas · Pişmanlık · Sevgi",
    hedef: "Kaybı sözcüklerle değil sessizlikle hissetmek. Hamlet'in görünmeyen yas sürecini sahnede görünür kılacak duygusal hafıza inşa etmek.",
    baglam: "Hamlet, Ophelia'nın ölüm haberini almadan önce bile, onun zihinsel olarak kaybolduğunu hissetmiştir. Bu süreç açık bir kayıptan çok, sessiz bir çözülme, adım adım yaşanan bir ayrılık hissidir.",
    mekan: "Kalenin sessiz bir bahçesi. Çevrende solmuş çiçekler, dökülen yapraklar var. Hafif bir rüzgâr dalgalanıyor. Zaman durmuş gibi; mekânın içinde yumuşak bir boşluk var.",
    ic_ses: ["Sana ulaşamıyorum, Ophelia.", "Sana seslenmiştim… ama duymadın.", "Sen kaybolurken ben burada sessizdim.", "Sana ne oldu? Bana ne oldu?", "Çok geç… seni koruyamadım."]
  },
  {
    no: 8,
    baslik: "Mezarlık Yürüyüşü",
    altyazi: "Ölümle Felsefi Yüzleşme",
    sure: "15-20 dk",
    duygusal_alan: "Kabulleniş · Geçicilik · Bilgelik",
    hedef: "Ölümün doğallığını ve kaçınılmazlığını kabullenmek. Ölüm kavramını karanlık bir tehdit değil, doğal bir dönüşüm olarak hissetmek.",
    baglam: "Hamlet, mezarlıkta eski mezarların arasında yürür. Ölümün kaçınılmazlığı, hayatın geçiciliği ve zamanın adaleti üzerine düşünür. Bu yürüyüş, kendi faniliğiyle doğrudan yüzleşme anıdır.",
    mekan: "Açık havada eski bir mezarlık. Hava serin; toprak kokusu burnuna hafifçe geliyor. Mezar taşları farklı boyutlarda; bazıları eğilmiş, bazıları neredeyse toprağa karışmış.",
    ic_ses: ["Hepimiz sonunda burada buluşacağız…", "Krallar da, soytarılar da aynı toprağa döner.", "Bedenlerimiz ne kadar ihtişamlı olursa olsun, hepsi toza karışacak.", "Ölüm bir son değil; bir dönüşüm belki de.", "Şimdi yaşarken, ne taşıyoruz ki? Sadece anılar ve izler…"]
  },
  {
    no: 9,
    baslik: "Düello Öncesi",
    altyazi: "Ölümle Bilinçli Yüzleşme",
    sure: "15-20 dk",
    duygusal_alan: "Teslimiyet · Huzur · Kader",
    hedef: "Ölüm karşısında bilinçli teslimiyet ve içsel barış. Korkudan değil, kabullenişten doğan bir duruş inşa etmek.",
    baglam: "Hamlet, Laertes ile düelloya çıkmadan önce kendi ölüm olasılığıyla açık ve bilinçli bir şekilde yüzleşir. Bu an, varoluşunun son adımını ve kaderine teslimiyeti kabul etme ânıdır.",
    mekan: "Kalenin büyük salonu, düellonun hemen öncesi. Geniş bir boşluk, taş zeminin serinliği. Etrafında bekleyen figürler var ama zihin yalnız.",
    ic_ses: ["Hazırım.", "Ne olacaksa, olsun.", "Kaderimin önünde korku duymuyorum.", "Her adım, beni kendime daha yakın kıldı.", "Bugün ne olursa olsun, elimde olanı vereceğim."]
  }
];

const timeline = [
  { sahne: "Oyun Öncesi", olay: "Babasının ölümü + Annesinin evliliği", durum: "Sessiz yas → Güven kaybı", renk: "#444" },
  { sahne: "I.v", olay: "Hayaletle görüşme", durum: "Şok → İntikam yemini", renk: "#c9a96e" },
  { sahne: "II.ii", olay: "Plan kurma süreci", durum: "Paranoya → Zekâya yönelme", renk: "#8fa3b1" },
  { sahne: "III.i", olay: "To be or not to be", durum: "Varoluşsal sorgulama → Hayata tutunma", renk: "#9b8ea0" },
  { sahne: "III.iv", olay: "Annesiyle yüzleşme", durum: "Sevgi → Öfke → Pişmanlık", renk: "#c9a96e" },
  { sahne: "IV.iv", olay: "Fortinbras haberi", durum: "Utanç → Eylem kararı", renk: "#a0b89b" },
  { sahne: "IV.vii", olay: "Ophelia'nın ölümü", durum: "Kırılma → Derin yas", renk: "#9b8ea0" },
  { sahne: "V.i", olay: "Mezarlık sahnesi", durum: "Ölümün kabullenilmesi", renk: "#8fa3b1" },
  { sahne: "V.ii", olay: "Düello ve ölüm", durum: "Kader kabullenişi → Onurlu teslimiyet", renk: "#c9a96e" },
];

export default function Hamlet() {
  const [aktifTab, setAktifTab] = useState('profil');
  const [aktifEgzersiz, setAktifEgzersiz] = useState(null);
  const [egzersizAdim, setEgzersizAdim] = useState('giris');

  return (
    <>
      {aktifEgzersiz && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#0a0a0a', zIndex: 100, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid #2a2a2a', position: 'sticky', top: 0, backgroundColor: '#0a0a0a', zIndex: 10 }}>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>
              Egzersiz {aktifEgzersiz.no} / 9
            </span>
            <button onClick={() => { setAktifEgzersiz(null); setEgzersizAdim('giris'); }}
              style={{ background: 'none', border: 'none', color: '#f0ede8', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', cursor: 'pointer' }}>
              ✕ Kapat
            </button>
          </header>

          <div style={{ flex: 1, padding: '3rem 2rem', maxWidth: '600px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            {egzersizAdim === 'giris' && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <div style={{ width: '1px', height: '50px', backgroundColor: '#c9a96e', opacity: 0.4 }} />
                  <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#c9a96e', textTransform: 'uppercase' }}>{aktifEgzersiz.duygusal_alan}</span>
                  <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#f0ede8', margin: 0, lineHeight: 1.1 }}>{aktifEgzersiz.baslik}</h1>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1rem', fontStyle: 'italic', color: '#c9a96e', margin: 0 }}>{aktifEgzersiz.altyazi}</p>
                </div>
                <div style={{ backgroundColor: '#111', border: '1px solid #2a2a2a', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Sahne Bağlamı</span>
                  <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.82rem', color: '#ddd', lineHeight: 1.8, margin: 0 }}>{aktifEgzersiz.baglam}</p>
                </div>
                <div style={{ backgroundColor: '#111', border: '1px solid #2a2a2a', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Egzersizin Hedefi</span>
                  <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.82rem', color: '#ddd', lineHeight: 1.8, margin: 0 }}>{aktifEgzersiz.hedef}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', color: '#555', letterSpacing: '0.1em' }}>⏱ {aktifEgzersiz.sure}</span>
                  <button onClick={() => setEgzersizAdim('mekan')}
                    style={{ padding: '1rem 2.5rem', border: '1px solid #c9a96e', backgroundColor: 'transparent', color: '#c9a96e', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c9a96e'; e.currentTarget.style.color = '#0a0a0a'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#c9a96e'; }}>
                    Başla
                  </button>
                </div>
              </>
            )}

            {egzersizAdim === 'mekan' && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#c9a96e', textTransform: 'uppercase' }}>Zihinsel Mekân</span>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.5rem', color: '#f0ede8', margin: 0 }}>Ortamı Kur</h2>
                </div>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.15em', color: '#aaa', margin: 0 }}>Gözlerini kapat. Rahat bir pozisyon al. Nefesini fark et.</p>
                <div style={{ border: '1px solid #2a2a2a', padding: '2rem' }}>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.1rem', color: '#f0ede8', lineHeight: 1.9, margin: 0, fontStyle: 'italic' }}>"{aktifEgzersiz.mekan}"</p>
                </div>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#888', lineHeight: 1.8, margin: 0 }}>
                  Ayak tabanlarından yere doğru nazik bir bağlılık hisset. Nefesini doğal ritminde sürdür.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button onClick={() => setEgzersizAdim('giris')}
                    style={{ flex: 1, padding: '1rem', border: '1px solid #2a2a2a', backgroundColor: 'transparent', color: '#f0ede8', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>
                    ← Geri
                  </button>
                  <button onClick={() => setEgzersizAdim('ic_ses')}
                    style={{ flex: 2, padding: '1rem', border: '1px solid #c9a96e', backgroundColor: 'transparent', color: '#c9a96e', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c9a96e'; e.currentTarget.style.color = '#0a0a0a'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#c9a96e'; }}>
                    Hazırım, Devam
                  </button>
                </div>
              </>
            )}

            {egzersizAdim === 'ic_ses' && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#c9a96e', textTransform: 'uppercase' }}>İç Ses</span>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.5rem', color: '#f0ede8', margin: 0 }}>Hamlet'in Zihninden</h2>
                </div>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#888', lineHeight: 1.8, margin: 0 }}>
                  Bu cümleler arasında serbestçe gezin. Her birini kendi iç sesinle geçir. Zorlamak zorunda değilsin — sadece izin ver.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {aktifEgzersiz.ic_ses.map((cumle, i) => (
                    <div key={i} style={{ padding: '1.2rem 1.5rem', borderLeft: '1px solid #c9a96e', backgroundColor: '#111' }}>
                      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.05rem', color: '#f0ede8', margin: 0, fontStyle: 'italic', lineHeight: 1.7 }}>"{cumle}"</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button onClick={() => setEgzersizAdim('mekan')}
                    style={{ flex: 1, padding: '1rem', border: '1px solid #2a2a2a', backgroundColor: 'transparent', color: '#f0ede8', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>
                    ← Geri
                  </button>
                  <button onClick={() => setEgzersizAdim('cikis')}
                    style={{ flex: 2, padding: '1rem', border: '1px solid #c9a96e', backgroundColor: 'transparent', color: '#c9a96e', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c9a96e'; e.currentTarget.style.color = '#0a0a0a'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#c9a96e'; }}>
                    Tamamlandı
                  </button>
                </div>
              </>
            )}

            {egzersizAdim === 'cikis' && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#c9a96e', textTransform: 'uppercase' }}>Güvenli Çıkış</span>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.5rem', color: '#f0ede8', margin: 0 }}>Kendine Dön</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    "Derin bir nefes al.",
                    "Ayakta duruyorsan dizlerini nazikçe esnet. Bedenini hafifçe salla.",
                    "Gözlerini aç ve bulunduğun odadaki 3 nesneyi sesli olarak isimlendir.",
                    "Sonra kendi adını söyle: 'Ben şimdi [kendi adım]ım.'"
                  ].map((adim, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#c9a96e', flexShrink: 0, lineHeight: 1.4 }}>{i + 1}.</span>
                      <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: '#ddd', margin: 0, lineHeight: 1.7 }}>{adim}</p>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '1.5rem' }}>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '0.95rem', fontStyle: 'italic', color: '#888', lineHeight: 1.8, margin: 0 }}>
                    "Karakterin içine cesaretle girdin, ve kendine güvenle geri döndün."
                  </p>
                </div>
                <button onClick={() => { setAktifEgzersiz(null); setEgzersizAdim('giris'); }}
                  style={{ padding: '1.2rem', border: '1px solid #c9a96e', backgroundColor: 'transparent', color: '#c9a96e', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c9a96e'; e.currentTarget.style.color = '#0a0a0a'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#c9a96e'; }}>
                  Egzersizlere Dön
                </button>
              </>
            )}

          </div>
        </div>
      )}

      <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f0ede8', display: 'flex', flexDirection: 'column' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid #2a2a2a' }}>
          <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Actor's Gym</span>
          <a href="/antrenman/karakter" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase', textDecoration: 'none' }}>← Karakter Kasası</a>
        </header>

        <section style={{ padding: '3rem 2rem 0', maxWidth: '680px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ width: '1px', height: '50px', backgroundColor: '#c9a96e', opacity: 0.4 }} />
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#c9a96e', textTransform: 'uppercase' }}>William Shakespeare</span>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(3rem, 8vw, 5rem)', color: '#f0ede8', margin: 0, lineHeight: 1 }}>Hamlet</h1>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.8rem', color: '#888', lineHeight: 1.8, margin: 0, maxWidth: '480px' }}>
              Yas, ihanet ve varoluşsal sorgulama. Düşünce ile eylem arasında sıkışmış bir prensin görünmeyen yolculuğu.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['İçedönük', 'Sezgisel', 'Felsefi', 'Varoluşsal'].map(tag => (
              <span key={tag} style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', padding: '0.3rem 0.8rem', border: '1px solid #2a2a2a' }}>{tag}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #2a2a2a', marginTop: '1rem' }}>
            {[
              { id: 'profil', ad: 'Karakter Profili' },
              { id: 'timeline', ad: 'Timeline' },
              { id: 'egzersizler', ad: 'Egzersizler' },
            ].map(tab => (
              <button key={tab.id} onClick={() => setAktifTab(tab.id)}
                style={{ padding: '0.8rem 1.5rem', background: 'none', border: 'none', borderBottom: aktifTab === tab.id ? '1px solid #c9a96e' : '1px solid transparent', color: aktifTab === tab.id ? '#f0ede8' : '#555', fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', marginBottom: '-1px', transition: 'all 0.2s ease' }}>
                {tab.ad}
              </button>
            ))}
          </div>
        </section>

        <section style={{ flex: 1, padding: '2.5rem 2rem', maxWidth: '680px', margin: '0 auto', width: '100%' }}>

          {aktifTab === 'profil' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Değiştirilemez Doğrular</span>
                {[
                  "Danimarka Prensi'dir.",
                  "Babası Claudius tarafından zehirlenerek öldürülmüştür.",
                  "Annesi Claudius ile evlenmiştir — babasının ölümünden kısa süre sonra.",
                  "Claudius şimdi kraldır. Hamlet'in taht hakkı gasp edilmiştir.",
                  "Hayalet, Hamlet'ten intikam istemiştir.",
                  "Ophelia ile duygusal bir bağ vardır. Horatio en yakın dostudur.",
                  "Hamlet son düelloda Laertes tarafından yaralanarak ölmüştür."
                ].map((dogru, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingBottom: '1rem', borderBottom: '1px solid #1a1a1a' }}>
                    <div style={{ width: '4px', height: '4px', backgroundColor: '#c9a96e', borderRadius: '50%', flexShrink: 0, marginTop: '0.5rem' }} />
                    <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.82rem', color: '#ddd', lineHeight: 1.7, margin: 0 }}>{dogru}</p>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Oyun Öncesi Psikolojik Yük</span>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.82rem', color: '#ddd', lineHeight: 1.9, margin: 0 }}>
                  Hamlet, oyunun başladığı anda kayıp, ihanet, siyasi kırılma ve kişisel yalnızlık duygularını bedensel olarak taşımaktadır. Seyirci olayları Hamlet'le birlikte öğrenmez — Hamlet zaten kırılmış bir dünyada yaşamakta ve davranmaktadır. Bu, sahnedeki her anın bir geçmiş yükü taşımasını zorunlu kılar.
                </p>
              </div>

              <div style={{ backgroundColor: '#111', border: '1px solid #2a2a2a', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>ITC Notu</span>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1rem', color: '#f0ede8', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
                  "Hamlet sahneye yalnızca bir prens olarak çıkmaz. O sahneye bir oğul, bir âşık, bir kayıp yaşayan, bir şüphe duyan, bir umut besleyen, bir teslim olan olarak gelir."
                </p>
              </div>
            </div>
          )}

          {aktifTab === 'timeline' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#888', lineHeight: 1.8, margin: '0 0 2rem 0' }}>
                Sahneye her girişte karakterin zihinsel geçmişini taşı. Her nokta bir öncekinin yükünü içerir.
              </p>
              {timeline.map((nokta, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', paddingBottom: '1.5rem', position: 'relative' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{ width: '8px', height: '8px', backgroundColor: nokta.renk, borderRadius: '50%', marginTop: '0.3rem' }} />
                    {i < timeline.length - 1 && <div style={{ width: '1px', flex: 1, backgroundColor: '#2a2a2a', marginTop: '0.4rem' }} />}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', paddingBottom: '1rem' }}>
                    <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.2em', color: nokta.renk, textTransform: 'uppercase' }}>{nokta.sahne}</span>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1rem', color: '#f0ede8' }}>{nokta.olay}</span>
                    <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.72rem', color: '#888', fontStyle: 'italic' }}>{nokta.durum}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {aktifTab === 'egzersizler' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#888', lineHeight: 1.8, margin: '0 0 1rem 0' }}>
                9 zihinde canlandırma egzersizi. Her birini sırayla veya ihtiyacına göre çalışabilirsin.
              </p>
              {egzersizler.map((egzersiz, i) => (
                <button key={i}
                  onClick={() => { setAktifEgzersiz(egzersiz); setEgzersizAdim('giris'); }}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', border: '1px solid #2a2a2a', backgroundColor: 'transparent', cursor: 'pointer', textAlign: 'left', transition: 'all 0.3s ease', width: '100%' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.backgroundColor = '#111'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '0.9rem', color: '#c9a96e' }}>{egzersiz.no}.</span>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1rem', color: '#f0ede8' }}>{egzersiz.baslik}</span>
                    </div>
                    <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.62rem', color: '#666', letterSpacing: '0.1em' }}>{egzersiz.duygusal_alan}</span>
                  </div>
                  <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', color: '#444', letterSpacing: '0.1em', flexShrink: 0 }}>{egzersiz.sure}</span>
                </button>
              ))}
            </div>
          )}

        </section>
      </main>
    </>
  );
}