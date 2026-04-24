'use client';

import { useState } from 'react';

const egzersizler = [
  {
    no: 1,
    baslik: "Flütün Sesi",
    altyazi: "Çocukluk ve Bırakılmışlık",
    sure: "10-15 dk",
    duygusal_alan: "Yalnızlık · Özlem · Temel Yara",
    hedef: "Willy'nin tüm yanılsamalarının kaynağındaki ilk yarayı — babanın gidişini — bedende hissetmek. Flüt sesi her bellek kaymasının tetikleyicisi. Bu egzersiz o tetikleyiciyi içselleştirir.",
    baglam: "Willy 3-4 yaşındayken babası evi terk etti. Bu bırakılmışlık, 'beğenilmek' ve 'başarılı olmak' takıntısının çekirdeğidir. Willy'nin zihninde flüt sesi hep bu ilk kırılmaya gönderir.",
    mekan: "Küçük bir ev önü. Güneş var ama kapı açık kalmış. Birinin gitmekte olduğunu hissediyorsun ama arkasından koşamıyorsun. Ayak sesleri uzaklaşıyor. Sessizlik kalıyor.",
    ic_ses: ["Baba nereye gitti?", "Ben burada ne yapıyorum?", "Bir gün ben de böyle büyük olacağım.", "O dönecek mi?", "Belki yeterince iyi olursam döner."]
  },
  {
    no: 2,
    baslik: "Arabayı Cilalayan Oğullar",
    altyazi: "Altın Çağ — İyi Günler",
    sure: "15-20 dk",
    duygusal_alan: "Gurur · Umut · Yanılsama",
    hedef: "Willy'nin 'iyi dönem' belleğini — oğullarının arabasını cilaladığı o parlak anı — tam olarak yaşamak. Bu an onun yaşam boyunca döndüğü referans noktasıdır.",
    baglam: "Genç Biff ve Happy arabasını cilalarken Willy onları izliyor. Dünya doğru yerde. Her şey mümkün. Biff futbol bursu alacak, Happy da başarılı olacak. Bu an, Willy'nin zihninde hiç bitmeyecek.",
    mekan: "Arka bahçe. Güneş ışığı. Arabanın parlaklığı. Oğulların sesi. Mahallede çimler yeşil, ağaçlar var — henüz apartmanlar yükselmemiş. Hava temiz, gelecek parlak.",
    ic_ses: ["İşte bu. İşte tam bu.", "Biff büyük bir adam olacak.", "Ben onlara doğruyu gösteriyorum.", "Charley'nin oğlunun buna gücü yetmez.", "Sevilmek — işte asıl önemli olan bu."]
  },
  {
    no: 3,
    baslik: "Boston Oteli",
    altyazi: "Merkezi Travma — İfşa",
    sure: "20-25 dk",
    duygusal_alan: "Suçluluk · Utanç · Çöküş",
    hedef: "Willy'nin tüm oyun boyunca kaçtığı tek anı — Biff'in otel kapısını çaldığı o geceyi — güvenli bir alanda deneyimlemek. Bu an Willy'nin 'kahraman baba' imgesinin parçalandığı kırılma noktasıdır.",
    baglam: "Biff matematikte kalmış, mezun olamayacak. Boston'a babasını bulmaya gelir. Kapıyı çalar. Willy The Woman'ı banyoya saklar. Ama her şey görünür olur. Biff 'phony/sahte' der ve gider. Bu gece Willy'nin hayatının gerçek dönüm noktasıdır.",
    mekan: "Boston oteli. Loş bir oda. Kapıya vuruyorlar. İçeride gizlenecek yer yok. Çoraplar masanın üstünde. Gülüş banyodan geliyor. Her şey çöküyor.",
    ic_ses: ["Hayır. Hayır hayır hayır.", "Biff burada olmamalı.", "Onu nasıl açıklarım?", "Bütün inşa ettiğim şey...", "Biff'in yüzüne bakamıyorum."]
  },
  {
    no: 4,
    baslik: "Howard'ın Ofisi",
    altyazi: "Kurumsal Terk Edilme",
    sure: "10-15 dk",
    duygusal_alan: "Çaresizlik · Görünmezlik · Kimlik Kaybı",
    hedef: "Willy'nin 'iş = kimlik' denkleminin çöktüğü anı içselleştirmek. Howard onu dinlemiyor — makine konuşuyor. Willy var olmayan biri gibi hissediyordur.",
    baglam: "Willy Howard'dan şehir içi iş istiyor. Howard tel kayıt cihazıyla meşgul. Willy Dave Singleman'ı anlatıyor — yaşlı satışçı, otelden telefonla satış, harika cenaze. Howard işten çıkarıyor. 34 yılın karşılığı bu.",
    mekan: "Modern bir ofis. Masanın üstünde bir makine. Howard orada ama seni görmüyor. 34 yıl burada. Adını bile hatırlamıyor gibi.",
    ic_ses: ["Ben bu şirketi kuranlardanım.", "Frank Wagner beni tanırdı.", "Bir insanın değeri bu kadar mı?", "34 yıl.", "Beni neden görmüyor?"]
  },
  {
    no: 5,
    baslik: "Ben'le Konuşma",
    altyazi: "Kaçırılan Yol",
    sure: "10-15 dk",
    duygusal_alan: "Pişmanlık · Özlem · Alternatif Hayat",
    hedef: "Willy'nin hiç almadığı yolu — Ben'in Alaska'sını, ormanı, mücevherleri — zihninde yaşamak. Bu, Willy'nin 'başka türlü de yaşayabilirdim' diye baktığı hayal aynasıdır.",
    baglam: "Ben, Willy'nin abisidir. Afrika'ya gitti, orman işi, elmaslar, zenginlik. 'Ben 17 yaşında ormana girdim, 21 yaşında çıktım ve zengin bir adamdım.' Willy bunu her düşündüğünde kendi yolunu sorguluyor.",
    mekan: "Aynı evi hayal ediyorsun ama Ben masanın karşısında oturuyor. Zaman bulanık. Hem şimdi hem geçmiş. Ben kalkmak üzere — her zaman bir treni var.",
    ic_ses: ["Ben neden gitti de ben kalmadım?", "Alaska'ya gitmeli miydim?", "Doğru yolu buldum mu hiç?", "Willy, sen ne yaptın bu hayatla?", "Hâlâ zamanı var mı?"]
  },
  {
    no: 6,
    baslik: "Restoran — Oğullar Gidiyor",
    altyazi: "Sosyal Terk Edilme",
    sure: "15-20 dk",
    duygusal_alan: "Terk Edilme · Utanç · Yalnızlık",
    hedef: "Willy'nin en derin korkusunun — terk edilmenin — gerçekleştiği anı taşımak. Happy ve Biff onu tuvalette bırakıp gidiyor.",
    baglam: "Restoran. Willy işten atıldığını söylüyor. Biff gerçeği anlatmak istiyor. Willy Boston'a kayıyor. Oğullar kadınlarla çıkıp gidiyor. Willy tuvalet kabininde yalnız.",
    mekan: "Restoranın gürültüsü. Ama sen o gürültünün dışındasın. Tuvaletin dar kabini. Ayak sesleri uzaklaşıyor. Yalnızsın. Tüm sesi duymak istiyorsun ama duyamıyorsun.",
    ic_ses: ["Nereye gittiler?", "Biff neden bana bunu yapıyor?", "Ben onlar için her şeyi yaptım.", "Cenazeme kim gelecek?", "Sevilmek... sevilmek istiyorum."]
  },
  {
    no: 7,
    baslik: "Gece Tohum Ekmek",
    altyazi: "Miras Arayışı",
    sure: "15-20 dk",
    duygusal_alan: "Çaresizlik · Anlam Arayışı · Son Karar",
    hedef: "Willy'nin son gecesi bahçede tohum ekerken hissettiği çaresizliği ve 'iz bırakma' arzusunu içselleştirmek. Bu eylem onun için sembolik son bir eylemdir.",
    baglam: "Gece geç saatte Willy el feneriyle bahçeye çıkıyor, tohum ekiyor. Bahçede güneş yok, ışık yok — tohumlar büyümeyecek. Ama Willy ekeceğim diyor. Ben'le da aynı anda konuşuyor — sigorta parası, Biff için plan.",
    mekan: "Gece. El feneri. Bahçenin toprak kokusu. Eller toprağı kazıyor. Etrafta apartmanlar. Ama sen bu dar alanda bir şeyler ekiyorsun. Büyüyecek mi, büyümeyecek mi — bilemiyorsun.",
    ic_ses: ["Biff'e bir şeyler bırakmalıyım.", "20.000 dolar — bu gerçek.", "Bu toprak hiçbir şey vermedi ama...", "Biff beni anlayacak sonunda.", "Bu sonuncu olacak."]
  },
  {
    no: 8,
    baslik: "Biff Ağlıyor",
    altyazi: "Yanlış Okuma",
    sure: "10-15 dk",
    duygusal_alan: "Yanılsama · Sevgi · Son Karar",
    hedef: "Willy'nin Biff'in gözyaşlarını 'beni seviyor, beni beğeniyor' diye okuduğu o kritik anı — bu yanlış okumanın trajik güzelliğini — taşımak.",
    baglam: "Final kavgasında Biff ağlıyor ve gerçeği söylüyor: ikisi de 'dime a dozen', sıradan insanlar. Ama Willy bunu duymuyor — sadece gözyaşlarını görüyor ve 'beni seviyor' diye yorumluyor. Bu yorum ölüm kararını pekiştiriyor.",
    mekan: "Ev. Gece. Biff tam karşında ağlıyor. Sen onun sözlerini duymuyorsun — sadece yüzünü görüyorsun. O yüz sana ne söylüyor?",
    ic_ses: ["Beni seviyor.", "Haklıydım.", "O beni anlıyor.", "20.000 dolar — Biff için.", "Bu son satış olacak."]
  },
  {
    no: 9,
    baslik: "Son Yolculuk",
    altyazi: "Bilinçli Fedakârlık",
    sure: "15-20 dk",
    duygusal_alan: "Teslimiyet · Yanılsama · Son",
    hedef: "Willy'nin 'sigorta parasıyla Biff'i kurtaracağım' inancıyla arabaya bindiği o son anı — korku değil, bir tür yanılsamalı huzurla — taşımak.",
    baglam: "Willy arabaya biniyor. Ben'in sesi zihninde: 'orman karanlık ama elmaslarla dolu.' Willy bunu kendi ölümüne uyguluyor. Bu bir intihar değil, onun zihninde — son ve en büyük satış.",
    mekan: "Dışarısı. Gece. Arabanın direksiyonu. Motor sesi. Çevrede hiç kimse yok. Karanlık ama ayna da var — Willy'nin son aynası.",
    ic_ses: ["Biff anlayacak.", "Bu benim yapabileceğim en büyük şey.", "Hiç kimse görmedi beni — ama şimdi görecekler.", "Flüt sesi...", "Ne olursa olsun."]
  }
];

const timeline = [
  { sahne: "Willy 3-4 yaş", olay: "Babası evi terk eder", durum: "Bırakılmışlık → 'Beğenilme' ihtiyacının çekirdeği", renk: "#444" },
  { sahne: "Ben'in gidişi", olay: "Abi evi terk eder, Alaska'ya gider", durum: "Alternatif başarı modeli miti başlar", renk: "#8fa3b1" },
  { sahne: "Evlilik & Ev", olay: "Brooklyn'de ev alınır, taksit/borç döngüsü başlar", durum: "'Ev' hem rüya hem kapan", renk: "#a0b89b" },
  { sahne: "Biff lise yılları", olay: "Oğullar arabasını cilalar, Biff bursu kazanıyor", durum: "Willy'nin 'altın çağı' — her şey mümkün", renk: "#c9a96e" },
  { sahne: "Boston oteli", olay: "Biff, Willy'yi The Woman ile yakalar", durum: "Merkezi travma — baba imgesinin çöküşü", renk: "#9b6a6a" },
  { sahne: "Sonraki 15-20 yıl", olay: "Biff sürükleniyor, hırsızlık, hapis; Happy şehirde boşluk", durum: "Willy'nin rüyasının çürümesi", renk: "#555" },
  { sahne: "Son 1-2 yıl", olay: "Maaşsız çalışma, Charley'den borç, gaz hortumu", durum: "İntihar hazırlığı zemini", renk: "#9b8ea0" },
  { sahne: "Pazartesi gecesi", olay: "Willy yolda trans geçiriyor, Biff eve dönmüş", durum: "Son 24 saat başlıyor", renk: "#c9a96e" },
  { sahne: "Salı sabahı", olay: "Bahçe/tohum hayali, Howard'a gidecek", durum: "Sahte umut — son kez deneyecek", renk: "#8fa3b1" },
  { sahne: "Salı öğlesi", olay: "Howard işten çıkarıyor", durum: "34 yılın sonu — kimlik çöküşü", renk: "#9b6a6a" },
  { sahne: "Salı öğleden sonra", olay: "Biff Oliver'ın onu tanımadığını görüyor", durum: "'15 yıldır rüyadaydık' — gerçek başlıyor", renk: "#a0b89b" },
  { sahne: "Salı akşamı", olay: "Restoran — Biff gerçeği söylemek istiyor, oğullar gidiyor", durum: "Sosyal terk edilme — Boston hafızası patlar", renk: "#9b6a6a" },
  { sahne: "Salı gecesi", olay: "El feneriyle bahçeye tohum ekiyor", durum: "Miras boşluğu — sigorta planı kristalleşiyor", renk: "#c9a96e" },
  { sahne: "Final kavgası", olay: "Biff ağlıyor — Willy 'beni seviyor' diye okuyor", durum: "Yanlış okuma son kararı pekiştiriyor", renk: "#c9a96e" },
  { sahne: "Son yolculuk", olay: "Willy arabaya biner — sigorta/Biff planı", durum: "Yanılsamalı huzur — 'son satış'", renk: "#555" },
  { sahne: "Requiem", olay: "Cenaze — beklenen kalabalık gelmiyor", durum: "'Yanlış rüya' — Linda: özgürüz ama yalnızız", renk: "#444" },
];

export default function WillyLoman() {
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
                <div style={{ backgroundColor: '#111', border: '1px solid #2a2a1a', padding: '1.2rem 1.5rem' }}>
                  <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', color: '#c9a96e', lineHeight: 1.7, margin: 0 }}>
                    ITC Notu: Willy'nin geçmişi ve şimdisi aynı anda var olur. Bu mekânı kurarken hem o andaki bedenini (yorgun, yaşlı, ağır) hem de o andaki zihnini (genç, umutlu ya da çökmüş) aynı anda taşı.
                  </p>
                </div>
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
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.5rem', color: '#f0ede8', margin: 0 }}>Willy'nin Zihninden</h2>
                </div>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#888', lineHeight: 1.8, margin: 0 }}>
                  Bu cümleler arasında serbestçe gezin. Willy'nin zamanlar arasında geçişini hisset — her cümle farklı bir yaştan gelebilir.
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
                <div style={{ backgroundColor: '#111', border: '1px solid #2a2a1a', padding: '1.2rem 1.5rem', marginBottom: '0.5rem' }}>
                  <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', color: '#c9a96e', lineHeight: 1.7, margin: 0 }}>
                    Willy'nin zamanlar arası geçişleri çok yoğun olabilir. Çıkış protokolünü dikkatle uygula.
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    "Derin bir nefes al. Bugünün tarihini zihninde söyle.",
                    "Ayaklarını yere bas. Sen şu an [kendi adın]'sın, Willy Loman değil.",
                    "Gözlerini aç ve bulunduğun odadaki 3 nesneyi sesli olarak isimlendir.",
                    "Ellerinle yüzüne hafifçe dokun. Bu senin bedenin."
                  ].map((adim, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#c9a96e', flexShrink: 0, lineHeight: 1.4 }}>{i + 1}.</span>
                      <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.85rem', color: '#ddd', margin: 0, lineHeight: 1.7 }}>{adim}</p>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '1.5rem' }}>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '0.95rem', fontStyle: 'italic', color: '#888', lineHeight: 1.8, margin: 0 }}>
                    "Willy'nin yanılsaması onun değil, ona empoze edilmiş bir rüyanın trajedisidir. Sen bu yükü taşıdın ve bıraktın."
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
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', color: '#f0ede8', margin: 0, lineHeight: 1 }}>Willy Loman</h1>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.8rem', color: '#888', lineHeight: 1.8, margin: 0, maxWidth: '480px' }}>
              Yanılsama ve kimlik çöküşü. Geçmiş ile şimdinin aynı anda yaşandığı bir zihin. Sıradan insanın trajedisi.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['Dışadönük', 'Duyumsal', 'Duygusal', 'Yanılsamacı', 'Zaman-İçi-Kayma'].map(tag => (
              <span key={tag} style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.55rem', letterSpacing: '0.15em', color: '#888', textTransform: 'uppercase', padding: '0.3rem 0.8rem', border: '1px solid #2a2a2a' }}>{tag}</span>
            ))}
          </div>

          <div style={{ backgroundColor: '#111', border: '1px solid #2a2a1a', padding: '1rem 1.5rem', borderLeft: '2px solid #c9a96e' }}>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.75rem', color: '#c9a96e', lineHeight: 1.7, margin: 0 }}>
              ITC Uyarısı: Hamlet geçmişi taşır. Willy geçmişin içinde yaşar. Flashback'ler sahne tekniği değil — Willy'nin sinir sisteminin çalışma biçimidir. Her egzersizde şimdiki beden ile zihinsel geçmiş aynı anda aktif tutulur.
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
                  "Brooklyn'de yaşayan, yaklaşık 63 yaşında bir satışçıdır.",
                  "Babası çok küçük yaşta evi terk etmiştir. Bu bırakılmışlık tüm yanılsamaların temelidir.",
                  "İki oğlu vardır: Biff ve Happy. Biff'e özel bir yatırım yapmış ve bu yatırım Boston'da çökmüştür.",
                  "Linda ile evli. Linda her şeyi biliyor ama sesini yükseltiyor.",
                  "34 yıllık kariyerinin sonunda maaşsız çalışıyor, Charley'den düzenli borç alıyor.",
                  "Arabasıyla kaza geçirip geçirmediği belirsiz — ama kasıtlı olduğu şüpheli.",
                  "Bodrumdaki gaz hortumu — intihar hazırlığı.",
                  "Willy sahne üstünde hem şimdide hem geçmişte yaşar. Bu bir semptom, bir seçim değil.",
                  "Sigorta parasıyla Biff'i kurtaracağını düşünerek arabaya biner ve ölür."
                ].map((dogru, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingBottom: '1rem', borderBottom: '1px solid #1a1a1a' }}>
                    <div style={{ width: '4px', height: '4px', backgroundColor: '#c9a96e', borderRadius: '50%', flexShrink: 0, marginTop: '0.5rem' }} />
                    <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.82rem', color: '#ddd', lineHeight: 1.7, margin: 0 }}>{dogru}</p>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>Willy'nin Zaman Mekaniği</span>
                <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.82rem', color: '#ddd', lineHeight: 1.9, margin: 0 }}>
                  Oyun yaklaşık 24 saatte geçer ama Willy'nin zihni 20 yıla yayılır. Flashback'ler duyusal tetikleyicilerle başlar: flüt sesi, bir kadının gülüşü, çorap, Biff'in adı. Willy bu geçişleri kontrol etmiyor — geçişler onu kontrol ediyor. Bu, oyuncunun teknik olarak en zorlu yanıdır.
                </p>
              </div>

              <div style={{ backgroundColor: '#111', border: '1px solid #2a2a2a', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <span style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase' }}>ITC Notu — Miller'ın Trajedisi</span>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1rem', color: '#f0ede8', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
                  "Willy Loman sahneye çıkmaz. O, Amerikan rüyasının içine sıkışmış ve çıkamayan bir insanın tüm yaşamını bir gecede seyirciye yaşatır. Oyuncu Willy'yi oynamaz — Willy'nin yanılsamasını taşır."
                </p>
              </div>
            </div>
          )}

          {aktifTab === 'timeline' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.78rem', color: '#888', lineHeight: 1.8, margin: '0 0 2rem 0' }}>
                Willy'nin lineer kronolojisi. Oyunda bu sıra parçalanmış şekilde verilir — flashback'ler duyusal tetikleyicilerle gelir.
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
                9 zihinde canlandırma egzersizi. Willy'nin zamanlar arası geçişlerine hazırlanmak için sırayla çalışman önerilir.
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