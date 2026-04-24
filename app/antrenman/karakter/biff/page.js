'use client';

import { useState } from 'react';

const egzersizler = [
  {
    no: 1,
    baslik: "Ebbets Field'da Gün",
    altyazi: "Altın Çağ — Her Şey Mümkün",
    sure: "10-15 dk",
    duygusal_alan: "Gurur · Umut · Özgürlük",
    hedef: "Biff'in hayatındaki en saf anı — henüz babasının kim olduğunu bilmediği, sadece futbolun ve geleceğin var olduğu o anı — bedende hissetmek.",
    baglam: "Biff lise yıllarında futbol yıldızı. Ebbets Field'da oynayacak. Baba tribünde. Her şey mümkün. Virginia'da burs, üniversite, büyük kariyer. Willy'nin 'well liked' dünyası gerçek gibi görünüyor — çünkü Biff o dünyaya inanıyor.",
    mekan: "Futbol sahası. Çim kokusu. Ayakkabıların yere teması. Tribünde sesleri duyuyorsun. Baban orada bir yerde. Bugün her şey senin.",
    ic_ses: ["Bugün oynayacağım.", "Baba beni izliyor.", "Ben yapabilirim.", "Tüm bu insanlar benim için burada.", "Bu sadece başlangıç."]
  },
  {
    no: 2,
    baslik: "Matematik Sınavı",
    altyazi: "İlk Çatlak",
    sure: "10-15 dk",
    duygusal_alan: "Panik · Çaresizlik · Babanın Gücüne İnanç",
    hedef: "Biff'in matematikte kaldığını öğrendiği anı — ve babasının bunu çözebileceğine inandığı o son çocuksu güveni — taşımak.",
    baglam: "Matematik öğretmeni Biff'i geçirmeyecek. Üniversite planı çöküyor. Ama Biff bilmektedir: babası her şeyi halledebilir. Boston'a gidecek, babası öğretmenle konuşacak. Willy'nin dünyasında 'sevilmek' her kapıyı açar.",
    mekan: "Okul koridoru. Elinde kağıt var. Üzerinde rakamlar. Rakamlar yanlış. Ama Boston var. Baba var.",
    ic_ses: ["Baba halleder.", "O her şeyi biliyor.", "Ben sadece gidip anlatmam lazım.", "Matematiğin önemi yok.", "Baba beni kurtaracak."]
  },
  {
    no: 3,
    baslik: "Boston Oteli — Kapı",
    altyazi: "Her Şeyin Kırıldığı An",
    sure: "25-30 dk",
    duygusal_alan: "Şok · İhanet · Çöküş",
    hedef: "Biff'in hayatının kırıldığı tek anı güvenli bir alanda taşımak. Bu egzersiz tüm serinin en ağırıdır — güvenli çıkış protokolüne özellikle dikkat et.",
    baglam: "Boston oteli. Biff kapıyı çalıyor. Baba açıyor — saçı dağınık. Sonra gülüş. Kadın banyodan çıkıyor. Çoraplar masada. Biff 'phony' diyor ve gidiyor. O gece Biff büyümüyor — Biff kırılıyor.",
    mekan: "Otel koridoru. Kapıyı çalıyorsun. Ayak sesleri içeriden. Kapı açılıyor. Babanın yüzü. Sonra başka bir ses. Dünya birkaç saniyede değişiyor.",
    ic_ses: ["Bu ne?", "Bu kadın kim?", "Baba... sen...", "Her şey yalan mıydı?", "Artık üniversiteye gitmeye gerek yok."]
  },
  {
    no: 4,
    baslik: "Batı'da Kaybolmak",
    altyazi: "15 Yıllık Sürüklenme",
    sure: "15-20 dk",
    duygusal_alan: "Özgürlük · Boşluk · Anlamsızlık",
    hedef: "Biff'in 15 yıl boyunca gerçekte ne aradığını — ve bulamadığını — içselleştirmek. Bu yıllar kaçış mı, arayış mı, yoksa sadece donma mı?",
    baglam: "Boston'dan sonra Biff batıya gidiyor. Ranch'lar, çiftlikler, açık hava. İş değiştiriyor. Hırsızlık yapıyor. 3 ay hapis. Ama bazen sabah çitlerin arasında durduğunda, güneşi ve atları hissediyor — ve o an gerçek geliyor. Belki de tek gerçek an.",
    mekan: "Açık bir arazi. Sabah. At sesler. Çit telleri. Ufuk geniş. Ama akşam ne yapacaksın bilmiyorsun.",
    ic_ses: ["Burası gerçek.", "Şehre dönmek istemiyorum.", "Ama para bitmek üzere.", "Ben ne istiyorum ki aslında?", "Babam ne düşünür acaba."]
  },
  {
    no: 5,
    baslik: "Oliver'ı Beklemek",
    altyazi: "Son Umut — Son Yanılsama",
    sure: "10-15 dk",
    duygusal_alan: "Umut · Gerginlik · Farkındalığın Eşiği",
    hedef: "Biff'in Oliver'ın ofisinde saatlerce beklediği anı — ve o bekleme sırasında gerçeğin yavaş yavaş sızdığını — hissetmek.",
    baglam: "Biff saatlerce bekliyor. Oliver çıkıyor — Biff'i tanımıyor. Sadece başını sallıyor ve geçip gidiyor. O anda Biff görüyor: Oliver hiçbir zaman Biff'i satış müdürü olarak görmedi. Biff sadece bir 'shipping clerk'tı. 15 yıl rüyadaydı.",
    mekan: "Ofis bekleme odası. Plastik sandalyeler. Resepsiyonistin sesi. Saat tikiyor. Kapı açılıyor. Adam geçiyor. Sana bakmıyor.",
    ic_ses: ["Beni hatırlamadı.", "Ben hiç burada değildim.", "15 yıl...", "Biz ne rüya gördük?", "Babama ne anlatacağım?"]
  },
  {
    no: 6,
    baslik: "Oliver'ın Kalemi",
    altyazi: "Epifani ve Hırsızlık",
    sure: "10-15 dk",
    duygusal_alan: "Öfke · Farkındalık · Anlık Eylem",
    hedef: "Biff'in Oliver'ın kalemini çaldığı o anlık hareketi — bu çalma eyleminin altındaki çığlığı — taşımak. Bu bir hırsızlık değil, bir şeyin patlaması.",
    baglam: "Oliver geçip gitti. Biff masanın önünde duruyor. Masada bir dolma kalem. Biff alıyor ve koşuyor. Neden? Bilmiyor. Ama bu an, tüm Loman mitinin bir özeti gibi — sahip olunmayan bir şeyi almak.",
    mekan: "Boş ofis. Masada parlak bir kalem. Kapı açık. Koridorda adım sesleri. Elin masaya gidiyor.",
    ic_ses: ["Bu kalem bende kalacak.", "Gerçekten ne yaptım?", "Kaçıyorum.", "Artık yeter.", "Babama gerçeği söyleyeceğim."]
  },
  {
    no: 7,
    baslik: "Restoranında Baba",
    altyazi: "Gerçeği Söyleme Girişimi",
    sure: "15-20 dk",
    duygusal_alan: "Cesaret · Çaresizlik · Sevgi ve Öfke",
    hedef: "Biff'in babasına gerçeği söylemeye çalıştığı ama Willy'nin dinleyemediği o restoran anını taşımak. Biff sevilmek için değil, kurtarmak için konuşuyor.",
    baglam: "Restoran. Biff gerçeği anlatmak istiyor — Oliver'ı, kalemin, her şeyi. Ama Willy matematikten kalmayı soruyor. Willy Boston'a kayıyor. Biff ve Happy sonunda gidiyorlar. Biff babasını tuvalette bırakıyor — ve bu onun hayatının en ağır kararlarından biri.",
    mekan: "Restoran gürültüsü. Baba karşında. Sözler çıkmıyor. O seni duymuyor. Gözleri başka yerde.",
    ic_ses: ["Dinle beni.", "Baba, lütfen.", "Artık yeterince yalan söyledik.", "Ben seni seviyorum — bu yüzden söylüyorum.", "Neden duyamıyor?"]
  },
  {
    no: 8,
    baslik: "Son Yüzleşme",
    altyazi: "Dime a Dozen — Gerçeğin Kabulü",
    sure: "20-25 dk",
    duygusal_alan: "Öfke · Sevgi · Özgürleşme",
    hedef: "Biff'in 'biz ikimiz de sıradan insanlarız' dediği o final yüzleşmesini — bu kabullenişteki hem acıyı hem özgürleşmeyi — taşımak.",
    baglam: "Final kavgası. Biff her şeyi döküyor: hırsızlık, hapis, hiçbir zaman büyük adam olmayacağı gerçeği. 'Dime a dozen' — her köşede bir tane. Ama sonra Biff ağlıyor. Ve bu gözyaşları babasına olan sevginin gözyaşları.",
    mekan: "Ev. Gece. Baban tam karşında. Sözcükler çıkıyor — belki de ilk kez gerçek sözcükler.",
    ic_ses: ["Biz ikimiz de sıradan insanlarız.", "Bu yeterli.", "Seni seviyorum baba.", "Ama artık bu rüyayı taşıyamam.", "Bırak beni gideyim."]
  },
  {
    no: 9,
    baslik: "Requiem — Mezarda",
    altyazi: "Yanlış Rüya",
    sure: "15-20 dk",
    duygusal_alan: "Yas · Anlama · Özgürleşme",
    hedef: "Biff'in mezar başında söylediği 'yanlış rüya' cümlesinin ağırlığını — bu tespitin hem acısını hem kurtuluşunu — taşımak.",
    baglam: "Cenaze. Beklenen kalabalık gelmiyor. Happy babanın rüyasını sürdürmek istiyor. Biff ise biliyor: baba yanlış rüya gördü. Ve bu rüyayı ona biz de yaktık.",
    mekan: "Mezarlık. Az kişi. Toprak kokusu. Happy yanında. Linda ağlıyor. Willy'nin çalıştığı tüm o yıllar burada bitiyor.",
    ic_ses: ["Yanlış rüya gördü.", "Onu hiç tanımak istemedik.", "Ben onu sevdim.", "Ama onun istediği ben değildim.", "Batıya dönüyorum."]
  }
];

const timeline = [
  { sahne: "Çocukluk", olay: "Willy'nin 'well liked' dünyasında büyür", durum: "Biff güçlü, sevilen, her şey mümkün", renk: "#a0b89b" },
  { sahne: "Lise yılları", olay: "Futbol yıldızı, Ebbets Field'da oynayacak", durum: "Altın çağ — babanın kahramanı", renk: "#c9a96e" },
  { sahne: "Matematikte kalma", olay: "Mezun olamayacak, Boston'a gidiyor", durum: "Son çocuksu güven: baba halleder", renk: "#8fa3b1" },
  { sahne: "Boston oteli", olay: "Willy'yi The Woman ile yakalar", durum: "Kırılma — baba imgesi parçalanıyor", renk: "#9b6a6a" },
  { sahne: "Sonraki 15 yıl", olay: "Batı eyaletleri, ranch'lar, iş değiştirme", durum: "Sürüklenme — arama mı, kaçış mı?", renk: "#555" },
  { sahne: "Hırsızlık & hapis", olay: "3 ay hapis — Willy'nin hırsızlığı meşrulaştırmasının mirası", durum: "Loman mirasının bedeni", renk: "#9b6a6a" },
  { sahne: "Eve dönüş", olay: "Biff eve geliyor — son şans", durum: "Oliver planı — bir kez daha babanın rüyası", renk: "#8fa3b1" },
  { sahne: "Oliver ofisi", olay: "Oliver Biff'i tanımıyor", durum: "Epifani: 15 yıldır rüyadaydık", renk: "#c9a96e" },
  { sahne: "Oliver'ın kalemi", olay: "Kalemi çalıp kaçıyor", durum: "Ani eylem — kontrolsüz gerçek patlaması", renk: "#9b8ea0" },
  { sahne: "Restoran", olay: "Gerçeği söylemeye çalışıyor — Willy duymuyor", durum: "Sevgiyle söylenen gerçek duyulmuyor", renk: "#9b6a6a" },
  { sahne: "Final yüzleşme", olay: "Dime a dozen — her şeyi döküyor", durum: "Hem acı hem özgürleşme", renk: "#c9a96e" },
  { sahne: "Requiem", olay: "Mezarda: yanlış rüya", durum: "Biff batıya dönüyor — kendi rüyasını kuracak", renk: "#a0b89b" },
];

export default function BiffLoman() {
  const [aktifTab, setAktifTab] = useState('profil');
  const [aktifEgzersiz, setAktifEgzersiz] = useState(null);
  const [egzersizAdim, setEgzersizAdim] = useState('giris');

  return (
    <>
      {aktifEgzersiz && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#0a0a0a', zIndex: 100, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 3rem', borderBottom: '1px solid #2a2a2a', position: 'sticky', top: 0, backgroundColor: '#0a0a0a', zIndex: 10 }}>
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Egzersiz {aktifEgzersiz.no} / 9</span>
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
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.5rem', color: '#f0ede8', margin: 0 }}>Biff'in Zihninden</h2>
                </div>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#888', lineHeight: 1.8, margin: 0 }}>
                  Bu cümleler arasında serbestçe gezin. Biff'in hem çocuk hem yetişkin sesini aynı anda taşı.
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
                    "Sonra kendi adını söyle: 'Ben şimdi [kendi adım]ım. Biff Loman değilim.'"
                  ].map((adim, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#c9a96e', flexShrink: 0, lineHeight: 1.4 }}>{i + 1}.</span>
                      <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: '#ddd', margin: 0, lineHeight: 1.7 }}>{adim}</p>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '1.5rem' }}>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '0.95rem', fontStyle: 'italic', color: '#888', lineHeight: 1.8, margin: 0 }}>
                    "Biff'in Boston'u senin Boston'un değil. Sen o anı taşıdın ve geri döndün."
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
            <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: '#c9a96e', textTransform: 'uppercase' }}>Arthur Miller</span>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', color: '#f0ede8', margin: 0, lineHeight: 1 }}>Biff Loman</h1>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.8rem', color: '#888', lineHeight: 1.8, margin: 0, maxWidth: '480px' }}>
              Babanın rüyasından uyanış. Kırılma ve özgürleşme arasında sıkışmış bir adamın gerçeği arama yolculuğu.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['İçedönük', 'Sezgisel', 'Duygusal', 'Kırık Kahraman', 'Boston Sonrası'].map(tag => (
              <span key={tag} style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', padding: '0.3rem 0.8rem', border: '1px solid #2a2a2a' }}>{tag}</span>
            ))}
          </div>

          <div style={{ backgroundColor: '#111', border: '1px solid #2a2a1a', padding: '1rem 1.5rem', borderLeft: '2px solid #c9a96e' }}>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', color: '#c9a96e', lineHeight: 1.7, margin: 0 }}>
              ITC Notu: Biff aynı anda iki insan. Genç Biff — futbol kahramanı, babasına inanan çocuk. Yetişkin Biff — Boston'u taşıyan, rüyadan uyanmaya çalışan adam. Her sahnede bu ikisi aynı anda sahneye giriyor.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #2a2a2a', marginTop: '0.5rem' }}>
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
                  "Willy ve Linda Loman'ın büyük oğlu. Yaklaşık 34 yaşında.",
                  "Lise yıllarında futbol yıldızı — Ebbets Field'da oynayacaktı.",
                  "Matematikte kaldı. Boston'a babası için gitti ve her şeyi öğrendi.",
                  "Boston oteli: Willy'yi The Woman ile yakaladı. O geceden sonra üniversiteye gitmedi.",
                  "15 yıl batı eyaletlerinde ranch'larda, çiftliklerde çalıştı. İş değiştirdi.",
                  "Hırsızlık alışkanlığı — bir dönem 3 ay hapis yattı.",
                  "Bill Oliver'ın ofisinde beklerken epifani yaşadı: 'shipping clerk'tı, satış müdürü değil.",
                  "Oliver'ın kalemini çaldı ve kaçtı.",
                  "Final yüzleşmesinde: 'Dime a dozen — biz ikimiz de sıradan insanlarız.' dedi ve ağladı.",
                  "Requiem'de: 'Yanlış rüya gördü.' dedi. Batıya dönme kararı aldı."
                ].map((dogru, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingBottom: '1rem', borderBottom: '1px solid #1a1a1a' }}>
                    <div style={{ width: '4px', height: '4px', backgroundColor: '#c9a96e', borderRadius: '50%', flexShrink: 0, marginTop: '0.5rem' }} />
                    <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.82rem', color: '#ddd', lineHeight: 1.7, margin: 0 }}>{dogru}</p>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Boston'un Mirası</span>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.82rem', color: '#ddd', lineHeight: 1.9, margin: 0 }}>
                  Biff, oyunun tüm karakterleri içinde en keskin epifaniyi yaşayan tek kişidir. Willy rüyasını ölüme taşır. Happy rüyayı sürdürür. Biff uyanır. Bu uyanış hem en acı verici hem de en özgürleştirici olandır. Biff'in trajedisi babasını sevdiği için uzun yıllar bu gerçeği söyleyememiş olmasıdır.
                </p>
              </div>

              <div style={{ backgroundColor: '#111', border: '1px solid #2a2a2a', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>ITC Notu — Elia Kazan</span>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1rem', color: '#f0ede8', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
                  "Bu oyun bir aşk hikâyesidir — Willy ile Biff arasında. Bir babanın oğlunu, bir oğlun babasını sevme ve kaybetme hikâyesi. Boston bu aşkın kırıldığı yerdir."
                </p>
              </div>
            </div>
          )}

          {aktifTab === 'timeline' && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#888', lineHeight: 1.8, margin: '0 0 2rem 0' }}>
                Biff'in kronolojisi. Her nokta hem o andaki Biff'i hem Boston'dan sonraki Biff'i taşır.
              </p>
              {timeline.map((nokta, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', paddingBottom: '1.5rem' }}>
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
                9 zihinde canlandırma egzersizi. Boston sahnesi (Egzersiz 3) en ağır egzersizdir — sırayla çalışman önerilir.
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