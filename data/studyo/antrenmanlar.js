// ============================================================================
//  data/studyo/antrenmanlar.js
//  Stüdyo · Zihin & Beden Kanatları · karakter-bağımsız antrenman istasyonları
//  Doğrulama imzası: STUDYO-ANTRENMAN-V1-20260613
// ----------------------------------------------------------------------------
//  Dramaturji etütlerinden farklı: karaktere değil KANAT/İSTASYON'a bağlı.
//  Aynı adım motorunu paylaşır (okuma/yazma/secim/cikis) + YENİ step: 'uygula'
//  ("şimdi uygula, hazır olduğunda devam et" — zamanlayıcı/checkbox YOK).
//
//  TRAVMA: hepsi travmaSeviyesi 0. Substitution YASAK — hiçbir egzersiz
//  oyuncunun biyografik geçmişine döndürmez; daima ŞİMDİKİ AN + dışa/bedene dönük.
//
//  besler[] = Beceri Haritası gruplarının GERÇEK kolon anahtarları.
//  ✓ Claude Code (Faz C): beceri_sonuclari'nın GERÇEK kolonlarıyla hizalandı
//  (kalibrasyon-kaydet.js'den doğrulandı). `besler` ↔ BOYUTLAR ↔ DB kolonu üçü
//  aynı string. Kaynak enstrüman (acting-performance.xlsx "skills") grupları:
//    Professional Confidence → mesleki_guven
//    Technical Skills        → teknik
//    Mental Skills           → zihinsel
//    Emotional Skills        → duygusal
//    Motivational Skills     → motivasyonel
//    Relaxation Skills       → rahatlama
//    People Skills           → iliskisel
// ============================================================================

const KANAT_AD = { zihin: 'Zihin', beden: 'Beden' };

export const antrenmanlar = [

  // ===================== ZİHİN =====================

  // -- Nefes & Regülasyon (Method Book 4.4: Fark Et → Dönüştür → Sabitle) --
  {
    id: 'nefes-uc-nokta',
    kanat: 'zihin', istasyon: 'nefes', istasyonAd: 'Nefes & Regülasyon',
    baslik: 'Üç Nokta Regülasyonu', sure: '5 dk', seviye: 'Giriş',
    tip: 'antrenman', travmaSeviyesi: 0,
    besler: ['rahatlama', 'zihinsel'],
    giris: {
      lede: 'Sahne öncesi yüksek gerilim. Bedeni düzenle, duyguyu değil.',
      metin: [
        'Amaç heyecanı yok etmek değil — taşınabilir hale getirmek. İçinden tek cümle: "Sadece taşıyacağım, yaratmayacağım." Üç noktada çalışacağız: nefesin yeri, omurga, çene.'
      ]
    },
    adimlar: [
      { tip: 'okuma', baslik: 'Fark Et',
        metin: ['Bir an dur. Gerilim şu an nerede toplanıyor? Çoğu zaman üç yerden birinde: nefes göğse çıkmış, omurga kasılmış, çene kilitlenmiş. Hangisi sende?'],
        q: 'Gözünü kapatma; sadece bu üç noktayı sırayla yokla.' },
      { tip: 'uygula', baslik: 'Dönüştür',
        metin: ['Şimdi sırayla:', 'Nefesi göğüsten karına indir — üç yavaş tur. Omurgayı tepeden bir ip çekiyormuş gibi uzat. Çeneyi bırak, dişler ayrılsın.'],
        yonerge: 'Üç tur nefesle bu üç noktayı düzenle.',
        q: 'Hazır olduğunda devam et.' },
      { tip: 'yazma', baslik: 'Sabitle',
        q: 'Şimdi neredesin? Gerilim taşındı mı, yoksa hâlâ aynı yerde mi?',
        hint: 'Tek cümle yeter.', ph: 'Şu an…', key: 'sabit' },
      { tip: 'cikis', metin: ['Bu üç nokta her sahne öncesi senindir. Yaratmadan, sadece taşıyarak.'] }
    ]
  },

  // -- Odak (VAK temelli, stilVaryant ile kişiselleşir) --
  {
    id: 'odak-daralt-genislet',
    kanat: 'zihin', istasyon: 'odak', istasyonAd: 'Odak',
    baslik: 'Daralt ve Genişlet', sure: '7 dk', seviye: 'Giriş',
    tip: 'antrenman', travmaSeviyesi: 0,
    besler: ['zihinsel'],
    giris: {
      lede: 'Dikkat bir kas. Şimdi, bu odada çalış.',
      metin: ['Dikkatini tek bir şeye daraltıp sonra tüm alana genişletmek — sahnede istediğin an yapabilmen gereken şey. Bunu nötr, şu andaki bir uyaranla prova ediyoruz.']
    },
    adimlar: [
      { tip: 'okuma', baslik: 'Yerleş',
        metin: ['Bulunduğun yerde kal. Birazdan dikkatini önce daraltacak, sonra genişleteceksin.'] },
      { tip: 'uygula', baslik: 'Daralt',
        metin: ['Tek bir şeye dikkatini ver — başka her şey arka plana düşsün.'],
        yonerge: 'Otuz saniye yalnızca onda kal.',
        stilVaryant: {
          gorsel: 'Gözünün önünde tek bir nesne seç (bir kenar, bir leke, bir ışık). Yalnızca onu gör.',
          isitsel: 'Çevredeki tek bir sesi seç (bir uğultu, bir tık). Yalnızca onu dinle.',
          kinestetik: 'Tek bir teması seç (ayağının yere basışı, kumaşın teni). Yalnızca onu hisset.'
        },
        q: 'Hazır olduğunda devam et.' },
      { tip: 'uygula', baslik: 'Genişlet',
        metin: ['Şimdi o tek noktadan başlayıp dikkatini yavaşça tüm odaya, tüm bedenine yay. Hiçbir şeyi dışarıda bırakma.'],
        yonerge: 'Daralttığın noktadan başlayıp çevreni kucakla.',
        q: 'Hazır olduğunda devam et.' },
      { tip: 'yazma', baslik: 'İz',
        q: 'Daraltırken dikkatin nereye kaçtı? Genişletmek mi, daraltmak mı daha zordu?',
        hint: 'Kaçışları yargılama, sadece fark et.', ph: 'Dikkatim…', key: 'iz' },
      { tip: 'cikis', metin: ['Sahnede odak da böyle: bir partnere daraltır, tüm sahneye genişletirsin. Kas burada çalışır.'] }
    ]
  },

  // -- İmgeleme (SINIRLI: yalnız nötr/şimdiki; substitution yasağı açık) --
  {
    id: 'imgeleme-notr-nesne',
    kanat: 'zihin', istasyon: 'imgeleme', istasyonAd: 'İmgeleme',
    baslik: 'Nötr Canlandırma', sure: '6 dk', seviye: 'Giriş',
    tip: 'antrenman', travmaSeviyesi: 0,
    besler: ['zihinsel'],
    giris: {
      lede: 'Zihinde canlandırma — duyularla, ayrıntıyla.',
      metin: [
        'Bir kural: burada canlandıracağımız şey NÖTR ve KURGUSAL. Kendi geçmişinden bir anıya, bir duyguya gitmiyoruz — sadece bir nesneyi zihinde inşa ediyoruz. Amaç hafıza değil, hayal gücü kasının netliği.'
      ]
    },
    adimlar: [
      { tip: 'okuma', baslik: 'Kural',
        metin: ['Canlandıracağın şey önünde olmayan ama tarafsız bir nesne: diyelim bir elma, bir anahtar, bir bardak su. Kendi hayatından bir an değil — yalnızca nesnenin kendisi.'] },
      { tip: 'uygula', baslik: 'İnşa Et',
        metin: ['Bir nesne seç. Onu zihninde tüm duyularıyla kur: rengi, ağırlığı, yüzeyinin dokusu, varsa kokusu, ışığı nasıl tuttuğu.'],
        yonerge: 'Nesneyi parça parça, duyu duyu zihninde tamamla.',
        q: 'Hazır olduğunda devam et.' },
      { tip: 'yazma', baslik: 'Netlik',
        q: 'Nesneyi ne kadar net görebildin? Hangi duyu en zayıf kaldı?',
        hint: 'Net olmayan da bilgi — hangi kanal güçlü, hangisi gelişmeli.', ph: 'En net…', key: 'net' },
      { tip: 'cikis', metin: ['Bu netlik, ileride bir sahnenin nesnesini, mekânını canlandırırken kullanacağın kas. Şimdilik nötr; sağlam temel.'] }
    ]
  },

  // -- Blokaj (Method Book 4.3: dörtlü tıkanma; performans odaklı, travmasız) --
  {
    id: 'blokaj-kesilme',
    kanat: 'zihin', istasyon: 'blokaj', istasyonAd: 'Blokaj',
    baslik: 'Kesildiğim Yerde Ne Var?', sure: '8 dk', seviye: 'Orta',
    tip: 'antrenman', travmaSeviyesi: 0,
    besler: ['zihinsel', 'rahatlama'],
    giris: {
      lede: 'Tıkanma rastgele değil; bir türü vardır. Önce tanı.',
      metin: ['Performans tıkanması çoğunlukla dört biçimde gelir. Bunu bir kusur değil, bir sinyal olarak okuyacağız — neyin kesildiğini bilirsen merkeze dönebilirsin.']
    },
    adimlar: [
      { tip: 'okuma', baslik: 'Dört tür',
        metin: [
          'Zihinsel: kafan devreye girer, kendini izlersin.',
          'Bedensel: nefes/ses/hareket kasılır.',
          'Duygusal: bir tür donma, ifade akmaz (bu bir performans tıkanmasıdır — kişisel geçmişe inmiyoruz).',
          'Enerjetik: itki düşer, "neden buradayım" hissi.'
        ] },
      { tip: 'secim', baslik: 'Hangisi?',
        metin: ['Son tıkandığın anda en çok hangisi öndeydi? Doğru cevap yok — sadece tanı.'],
        secenekler: [
          { id: 'z', t: 'Zihinsel', d: 'Kendini izledin, kafa devreye girdi.' },
          { id: 'b', t: 'Bedensel', d: 'Nefes, ses ya da hareket kasıldı.' },
          { id: 'd', t: 'Duygusal', d: 'Bir donma; ifade akmadı.' },
          { id: 'e', t: 'Enerjetik', d: 'İtki düştü, bağ koptu.' }
        ],
        q: 'Neden bu?', ph: 'Çünkü…' },
      { tip: 'uygula', baslik: 'Merkeze dön',
        metin: ['Bir tur yavaş nefes. Ayaklarını yere bas. İçinden: "Buradayım. Devam edebilirim."'],
        yonerge: 'Nefes + temas + cümle. Acele yok.',
        q: 'Hazır olduğunda devam et.' },
      { tip: 'yazma', baslik: 'Altında ne vardı?',
        q: 'Kesildiğin yerde aslında ne vardı — korku, kontrol, yorgunluk, başka bir şey?',
        hint: 'Tıkanma bir kapı; arkasında genelde tek bir şey olur.', ph: 'Altında…', key: 'alt' },
      { tip: 'cikis', metin: ['Tıkanmayı tür olarak tanımak, panik yerine yöntem getirir. Bir dahaki sefere daha erken fark edersin.'] }
    ]
  },

  // -- Topraklanma · Serbest (SINIRLI/minimal; proaktif. Reaktif sürüm TopraklanmaModu'nda) --
  {
    id: 'topraklanma-serbest',
    kanat: 'zihin', istasyon: 'topraklanma', istasyonAd: 'Topraklanma · Serbest',
    baslik: 'Şimdiye Demirlen', sure: '5 dk', seviye: 'Giriş',
    tip: 'antrenman', travmaSeviyesi: 0,
    besler: ['rahatlama'],
    // NOT (Filiz farkındalığı): bu proaktif, istediğin an kullanılan minimal sürüm.
    // Yoğun sahne SONRASI reaktif topraklanma protokolü TopraklanmaModu'nda kalır.
    giris: {
      lede: 'Bir çalışmadan önce ya da sonra şimdiye dönmek için.',
      metin: ['Beş duyuyla şimdiki ana demirlenme. Hızlı, sade, istediğin an. Bir rolün içinden çıkıp kendi zeminine basmak için de işe yarar.']
    },
    adimlar: [
      { tip: 'okuma', baslik: 'Ne zaman',
        metin: ['Yoğun bir çalışmadan sonra başın hâlâ "orada"ysa, ya da bir çalışmaya başlamadan merkeze gelmek istiyorsan.'] },
      { tip: 'uygula', baslik: '5–4–3–2–1',
        metin: ['Çevrene bak ve şimdiki anla say:'],
        yonerge: '5 şey gör · 4 şey duy · 3 şeye dokun · 2 şey kokla · 1 şeyin tadını fark et.',
        q: 'Hazır olduğunda devam et.' },
      { tip: 'yazma', baslik: 'Zemin',
        q: 'Şimdi neredesin? Burada mısın?',
        hint: 'Tek kelime bile olur.', ph: 'Şu an…', key: 'zemin' },
      { tip: 'cikis', metin: ['Demir attın. Buradasın. İstediğin an bu beş adıma dönebilirsin.'] }
    ]
  },

  // ===================== BEDEN =====================

  // -- Beden Haritası (Method Book 4.2: "Bedenin Nerede Konuşuyor?") --
  {
    id: 'beden-harita-nerede',
    kanat: 'beden', istasyon: 'beden-haritasi', istasyonAd: 'Beden Haritası',
    baslik: 'Bedenin Nerede Konuşuyor?', sure: '8 dk', seviye: 'Giriş',
    tip: 'antrenman', travmaSeviyesi: 0,
    besler: ['teknik', 'zihinsel'],
    giris: {
      lede: 'Beden, sözden önce konuşur. Bugün seninki nereden konuşuyor?',
      metin: ['Kendini bir dışarıdan gözlemci gibi tara. Yargı yok — sadece harita. Neresi açık, neresi kapalı, neresi taşıyor?']
    },
    adimlar: [
      { tip: 'okuma', baslik: 'Yerleş',
        metin: ['Otur ya da ayakta dur. Bedenine dön; ona dışarıdan bakan biri gibi.'] },
      { tip: 'uygula', baslik: 'Tara',
        metin: ['Baştan ayağa yavaşça geç: çene, omuzlar, göğüs, karın, eller, kalça, bacaklar, ayaklar. Her bölgede gerilim mi, gevşeklik mi var?'],
        yonerge: 'Acele etmeden tüm bedeni bir kez tara.',
        q: 'Hazır olduğunda devam et.' },
      { tip: 'secim', baslik: 'Bugünkü tipin',
        metin: ['Bu üç eğilimden hangisi bugün sana yakın? Doğru yok — gözlem.'],
        secenekler: [
          { id: 's', t: 'Sesle Genişleyen', d: 'Enerjin yukarıda, göğüste; ses ve jest dışa taşıyor.' },
          { id: 'o', t: 'Omurga Kaçan', d: 'Omuz ve sırt kasılı; beden geri çekiliyor.' },
          { id: 'k', t: 'Donmuş Karın', d: 'Merkez kilitli; nefes karına inmiyor.' }
        ],
        q: 'Bunu nereden anladın?', ph: 'Çünkü…' },
      { tip: 'yazma', baslik: 'Harita',
        q: 'Bugün bedenin en çok nereden konuşuyor?',
        hint: 'Tek bölge yeter.', ph: 'Bugün…', key: 'harita' },
      { tip: 'cikis', metin: ['Bir karaktere girmeden önce kendi haritanı bilmek, neyi taşıyıp neyi değiştireceğini bilmektir.'] }
    ]
  },

  // -- Aşamalı Kas Gevşetme (PMR) --
  {
    id: 'pmr-kisa',
    kanat: 'beden', istasyon: 'kas-gevsetme', istasyonAd: 'Aşamalı Kas Gevşetme',
    baslik: 'Ger ve Bırak — Kısa', sure: '7 dk', seviye: 'Giriş',
    tip: 'antrenman', travmaSeviyesi: 0,
    besler: ['rahatlama'],
    giris: {
      lede: 'Kasları sırayla ger, sonra bırak. Beden gevşemeyi yeniden öğrenir.',
      metin: ['Her kas grubunu birkaç saniye ger, sonra tümüyle bırak. Bırakıştaki farkı hissetmek, çalışmanın kendisi. Zorlama yok; ağrı varsa o grubu atla.']
    },
    adimlar: [
      { tip: 'okuma', baslik: 'Hazırlık',
        metin: ['Uzan ya da rahatça otur. Birkaç yavaş nefes. Sırayla aşağıdaki grupları çalışacağız.'] },
      { tip: 'uygula', baslik: 'Sırayla ger ve bırak',
        metin: ['Her grupta: birkaç saniye ger — sonra bir anda tümüyle bırak ve farkı hisset.'],
        yonerge: 'Eller → kollar → omuzlar → yüz → gövde → bacaklar → ayaklar. Her birinde ger-tut-bırak.',
        q: 'Tüm grupları geçtiğinde devam et.' },
      { tip: 'yazma', baslik: 'Sonra',
        q: 'Beden şimdi nasıl? Hangi grup en gergindi?',
        hint: 'Gergin kalan grup, ileride dikkat edeceğin yer.', ph: 'Şimdi…', key: 'sonra' },
      { tip: 'cikis', metin: ['Gevşemiş bir beden, daha çok şey taşıyabilir. Bunu sahne öncesi ya da sonrası kullanabilirsin.'] }
    ]
  }

];

// ---- yardımcılar ----------------------------------------------------------
export function antrenmanGetir(id) {
  return antrenmanlar.find(a => a.id === id) || null;
}
export function kanatIstasyonlari(kanat) {
  // istasyon bazında grupla: { istasyon, istasyonAd, egzersizler:[] }
  const harita = {};
  antrenmanlar.filter(a => a.kanat === kanat).forEach(a => {
    (harita[a.istasyon] ||= { istasyon: a.istasyon, istasyonAd: a.istasyonAd, egzersizler: [] })
      .egzersizler.push(a);
  });
  return Object.values(harita);
}
export function kanatAdi(kanat) { return KANAT_AD[kanat] || kanat; }
