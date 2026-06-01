// lib/kalibrasyon.js
// ITC Actor's Gym — Kalibrasyon verisi okuma + register/yorumlama katmani
// Karar 36 (27 May 2026): Modül I 5 bölüm. Yıldız → Beceri Haritası (arşiv: yildiz_sonuclari).
//                         Duygu Haritası (Panksepp · Yol B karaktere-yaklaşım) eklendi.
//                         Panksepp yaklaşım katmanı PROVISIONAL — FKA klinik onayı Haziran 2026.
//
// DE genişlemesi (1 Haz 2026, Profil "Lesung" yorum yüzü için): tüm yardımcı
// fonksiyonlar `(veri, dil='tr')` alır; sözlükler `{tr, en, de}` yapılı.
// `getKalibrasyonProfili()` AYNEN korundu (supabase okuma). EN katmanı önceden
// yoktu — bu güncellemeyle EN de tashih edildi (yan kazanç). Öğrenci doğrulaması
// Karar 33 §1.3 saha QA kapsamında.

import { supabase } from './supabase';

// ─── ANA FONKSİYON ──────────────────────────────────────────────────────────

export async function getKalibrasyonProfili() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return null;

    // Karar 36: aktif enstrümanlar = VAK · Beceri · Arketip · Panksepp.
    // (yildiz_sonuclari arşivdir; aktif profile okunmaz — legacy çağrılar yildizGucluZayif kullanabilir.)
    const [vakRes, beceriRes, arketipRes, pankseppRes, profilRes] = await Promise.all([
      supabase.from('vak_sonuclari').select('*').eq('kullanici_id', user.id).order('tarih', { ascending: false }).limit(1).maybeSingle(),
      supabase.from('beceri_sonuclari').select('*').eq('kullanici_id', user.id).order('tarih', { ascending: false }).limit(1).maybeSingle(),
      supabase.from('arketip_sonuclari').select('*').eq('kullanici_id', user.id).order('tarih', { ascending: false }).limit(1).maybeSingle(),
      supabase.from('panksepp_sonuclari').select('*').eq('kullanici_id', user.id).order('tarih', { ascending: false }).limit(1).maybeSingle(),
      supabase.from('oyuncu_profili').select('*').eq('kullanici_id', user.id).order('son_guncelleme', { ascending: false }).limit(1).maybeSingle(),
    ]);

    const vak = vakRes.data;
    const beceri = beceriRes.data;
    const arketip = arketipRes.data;
    const panksepp = pankseppRes.data;
    const profil = profilRes.data; // intake — bağlam (Karar 36 profil köprüsü). eksikler'e GİRMEZ; ölçüm enstrümanı değil.

    const eksikler = [];
    if (!vak) eksikler.push('vak');
    if (!beceri) eksikler.push('beceri');
    if (!arketip) eksikler.push('arketip');
    if (!panksepp) eksikler.push('panksepp');

    return {
      vak,
      beceri,
      arketip,
      panksepp,
      profil,
      eksikler,
      tamMi: eksikler.length === 0,
      hicYok: eksikler.length === 4,
    };
  } catch (e) {
    console.log('Kalibrasyon okuma hatası:', e);
    return null;
  }
}

// ─── DİL YARDIMCISI ─────────────────────────────────────────────────────────
// pick({tr, en, de}, dil) → en yakın dil; eksikte tr fallback (kanonik).
function pick(o, dil) {
  if (o == null) return null;
  if (typeof o === 'string') return o;
  return o[dil] ?? o.tr ?? o.en;
}

// ─── KİŞİSELLEŞTİRME YARDIMCILARI ───────────────────────────────────────────

const VAK_SOZLUK = {
  V: {
    duyu: { tr: 'görüyorsun', en: 'you see', de: 'du siehst' },
    ipucu: {
      tr: 'Bu sahnenin atmosferinin rengini, ışığını, dokusunu hayal et.',
      en: "Imagine the color, light, and texture of this scene's atmosphere.",
      de: 'Stell dir die Farbe, das Licht und die Textur der Atmosphäre dieser Szene vor.',
    },
    yansimaSorusu: {
      tr: 'Bu hissin rengi ne? Nerede görüyorsun?',
      en: 'What color is this feeling? Where do you see it?',
      de: 'Welche Farbe hat dieses Gefühl? Wo siehst du es?',
    },
    etiket: { tr: 'Görsel kanal', en: 'Visual channel', de: 'Visueller Kanal' },
  },
  A: {
    duyu: { tr: 'duyuyorsun', en: 'you hear', de: 'du hörst' },
    ipucu: {
      tr: 'Bu sahnenin sesini bul. İç sesin ritmi seni karaktere götürür.',
      en: "Find this scene's sound. The rhythm of your inner voice takes you to the character.",
      de: 'Finde den Klang dieser Szene. Der Rhythmus deiner inneren Stimme führt dich zur Figur.',
    },
    yansimaSorusu: {
      tr: 'Bu hissin sesi nasıl? İçindeki ses ne söylüyor?',
      en: 'What does this feeling sound like? What does the voice within you say?',
      de: 'Wie klingt dieses Gefühl? Was sagt die Stimme in dir?',
    },
    etiket: { tr: 'İşitsel kanal', en: 'Auditory channel', de: 'Auditiver Kanal' },
  },
  K: {
    duyu: { tr: 'hissediyorsun', en: 'you feel', de: 'du spürst' },
    ipucu: {
      tr: 'Bedeninin ağırlığını ve postürünü hisset. O bedensel yük seni karaktere götürür.',
      en: "Feel your body's weight and posture. That bodily load takes you to the character.",
      de: 'Spüre das Gewicht und die Haltung deines Körpers. Diese körperliche Last führt dich zur Figur.',
    },
    yansimaSorusu: {
      tr: 'Bu his bedeninin neresinde oturuyor?',
      en: 'Where in your body does this feeling sit?',
      de: 'Wo in deinem Körper sitzt dieses Gefühl?',
    },
    etiket: { tr: 'Kinestetik kanal', en: 'Kinesthetic channel', de: 'Kinästhetischer Kanal' },
  },
};

export function vakDili(baskin, dil = 'tr') {
  const o = VAK_SOZLUK[baskin] || VAK_SOZLUK.V;
  return {
    duyu: pick(o.duyu, dil),
    ipucu: pick(o.ipucu, dil),
    yansimaSorusu: pick(o.yansimaSorusu, dil),
    etiket: pick(o.etiket, dil),
  };
}

// ─── OYUNCU PROFİLİ → REHBERLİK REGISTERI (Karar 36 · profil downstream köprüsü) ──
//
// Deneyim kademesi rehberliğin AÇIKLAMA/İSKELE yoğunluğunu ayarlar — içeriği DEĞİL.
// Karar 21 mutlak: hiçbir erişimi gate'lemez (herkes tüm içeriği görür).
// Klinik güvenlik + topraklanma HER register'da tam kalır; register onları azaltmaz.
// Karar 31: silent — oyuncu "erken/usta" etiketini görmez. DB kolonu: oyuncu_profili.deneyim.

const EXP_REGISTER = {
  // TR
  'Yok': 'erken', '1-2 yıl': 'erken', '3-5 yıl': 'orta', '5-10 yıl': 'orta', '10-15 yıl': 'usta', '15+ yıl': 'usta',
  // EN
  'None': 'erken', '1-2 yrs': 'erken', '3-5 yrs': 'orta', '5-10 yrs': 'orta', '10-15 yrs': 'usta', '15+ yrs': 'usta',
  // DE
  'Keine': 'erken', '1–2 Jahre': 'erken', '3–5 Jahre': 'orta', '5–10 Jahre': 'orta', '10–15 Jahre': 'usta', '15+ Jahre': 'usta',
};

const REGISTER_NOTLAR = {
  erken: {
    tr: 'Yöntem adımları daha açık anlatılır; tempo nazik; yönlendirme bol.',
    en: 'Method steps are explained more openly; gentle tempo; abundant guidance.',
    de: 'Methodenschritte werden offener erklärt; sanfter Rhythmus; reichlich Anleitung.',
  },
  orta: {
    tr: 'Dengeli açıklama; standart tempo.',
    en: 'Balanced explanation; standard tempo.',
    de: 'Ausgewogene Erklärung, normales Tempo.',
  },
  usta: {
    tr: 'Zanaat dili doğrudan; az iskele; akran-registeri.',
    en: 'Direct craft language; minimal scaffolding; peer register.',
    de: 'Direkte Handwerksprache; wenig Gerüst; Peer-Register.',
  },
};

export function profilRegister(profil, dil = 'tr') {
  const seviye = (profil && EXP_REGISTER[profil.deneyim]) || 'orta'; // varsayılan: orta
  const iskele = seviye === 'erken' ? 'yuksek' : seviye === 'usta' ? 'dusuk' : 'normal';
  return {
    seviye,
    iskele,
    not: pick(REGISTER_NOTLAR[seviye], dil),
  };
}

// ─── BECERİ HARİTASI (Karar 36 · yildizGucluZayif paraleli, 7 grup) ──────────

const BECERI_ADLAR = {
  mesleki_guven: { tr: 'Mesleki Güven', en: 'Professional Confidence', de: 'Berufliches Selbstvertrauen' },
  teknik:        { tr: 'Teknik',        en: 'Technical',                de: 'Technisch' },
  zihinsel:      { tr: 'Zihinsel',      en: 'Mental',                   de: 'Mental' },
  duygusal:      { tr: 'Duygusal',      en: 'Emotional',                de: 'Emotional' },
  motivasyonel:  { tr: 'Motivasyonel',  en: 'Motivational',             de: 'Motivational' },
  rahatlama:     { tr: 'Rahatlama',     en: 'Relaxation',               de: 'Entspannung' },
  iliskisel:     { tr: 'İlişkisel',     en: 'Interpersonal',            de: 'Zwischenmenschlich' },
};

export function beceriGucluZayif(beceri, dil = 'tr') {
  if (!beceri) return { guclu: null, zayif: null };

  const alanlar = Object.keys(BECERI_ADLAR)
    .map((id) => ({ id, ad: pick(BECERI_ADLAR[id], dil), deger: beceri[id] }))
    .filter((a) => a.deger != null);

  if (!alanlar.length) return { guclu: null, zayif: null };

  alanlar.sort((a, b) => b.deger - a.deger);
  return {
    guclu: alanlar[0],
    zayif: alanlar[alanlar.length - 1],
  };
}

// Legacy (arşiv): eski 6-boyut Yıldız verisi için korunur. Karar 36 sonrası aktif
// profilde yok. i18n eklenmedi — kullanılmıyor, dokunulmadı.
export function yildizGucluZayif(yildiz) {
  if (!yildiz) return { guclu: null, zayif: null };
  const alanlar = [
    { id: 'teknik', deger: yildiz.teknik },
    { id: 'psikolojik', deger: yildiz.psikolojik },
    { id: 'mesleki', deger: yildiz.mesleki },
    { id: 'yaratici', deger: yildiz.yaratici },
    { id: 'entelektuel', deger: yildiz.entelektuel },
    { id: 'iliski', deger: yildiz.iliski },
  ].filter((a) => a.deger != null);
  if (!alanlar.length) return { guclu: null, zayif: null };
  alanlar.sort((a, b) => b.deger - a.deger);
  return { guclu: alanlar[0], zayif: alanlar[alanlar.length - 1] };
}

// ─── DUYGU HARİTASI · PANKSEPP (Karar 36 · Yol B) ────────────────────────────
//
// PROVISIONAL — FKA klinik onayı bekleniyor (Haziran 2026 batch'i).
// Karar 21 mutlak: bu katman BİLGİLENDİRİR, kısıtlamaz. Hiçbir erişimi gate'lemez.
// Karar 31/6: oyuncu-yüzü dil — İngilizce/Almanca Panksepp jargonu oyuncuya görünmez,
// terminoloji 3 dilde yumuşatıldı (Suche/Zorn/Angst/Fürsorge/Trauer/Spiel).
// 6 sistem (Filiz enstrümanı LUST ölçmez): arayis · ofke · korku · sefkat · huzun · oyun.

const PANK_SOZLUK = {
  arayis: {
    etiket: { tr: 'Arayış', en: 'Seek', de: 'Suche' },
    kapi: {
      tr: 'Karaktere merakla, peşine düşerek girersin.',
      en: 'You enter the character with curiosity, in pursuit.',
      de: 'Du betrittst die Figur neugierig, ihr nachjagend.',
    },
    ipucu: {
      tr: 'Karakterin neyin peşinde olduğunu, neyi aradığını bul — onun arayışı senin kapın.',
      en: 'Find what the character is after, what they seek — their pursuit is your door.',
      de: 'Finde, wonach die Figur jagt, was sie sucht — ihre Suche ist deine Tür.',
    },
    yansimaSorusu: {
      tr: 'Bu karakter en çok neyi arıyor? Sen onu nerede arıyorsun?',
      en: 'What is this character seeking most? Where do you seek it?',
      de: 'Wonach sucht diese Figur am meisten? Wo suchst du danach?',
    },
  },
  ofke: {
    etiket: { tr: 'Öfke', en: 'Anger', de: 'Zorn' },
    kapi: {
      tr: 'Karaktere sınırları ve direnci üzerinden girersin.',
      en: 'You enter the character through their boundaries and resistance.',
      de: 'Du betrittst die Figur durch ihre Grenzen und ihren Widerstand.',
    },
    ipucu: {
      tr: 'Karakterin neye karşı dik durduğunu, neyin onu ateşlediğini bedeninde ara.',
      en: 'Look in your body for what the character stands up against, what fires them up.',
      de: 'Suche in deinem Körper, wogegen die Figur aufrecht steht, was sie entzündet.',
    },
    yansimaSorusu: {
      tr: "Bu karakter neye 'hayır' diyor? O 'hayır' sende nerede?",
      en: "What does this character say 'no' to? Where is that 'no' in you?",
      de: 'Wozu sagt diese Figur „nein“? Wo sitzt dieses „nein“ in dir?',
    },
  },
  korku: {
    etiket: { tr: 'Korku', en: 'Fear', de: 'Angst' },
    kapi: {
      tr: 'Karaktere neyi koruduğu, neyden kaçındığı üzerinden girersin.',
      en: 'You enter the character through what they protect, what they avoid.',
      de: 'Du betrittst die Figur durch das, was sie schützt und meidet.',
    },
    ipucu: {
      tr: 'Karakterin tehdidini ve kırılganlığını sezerek yaklaş — koruma içgüdüsü senin kapın.',
      en: "Approach by sensing the character's threat and vulnerability — the protective instinct is your door.",
      de: 'Nähere dich, indem du Bedrohung und Verletzlichkeit der Figur spürst — der Schutzinstinkt ist deine Tür.',
    },
    yansimaSorusu: {
      tr: 'Bu karakter neyi kaybetmekten korkuyor?',
      en: 'What is this character afraid to lose?',
      de: 'Wovor hat diese Figur Angst, es zu verlieren?',
    },
  },
  sefkat: {
    etiket: { tr: 'Bağ', en: 'Care', de: 'Fürsorge' },
    kapi: {
      tr: 'Karaktere kurduğu bağlar üzerinden girersin.',
      en: 'You enter the character through the bonds they form.',
      de: 'Du betrittst die Figur durch die Bindungen, die sie knüpft.',
    },
    ipucu: {
      tr: 'Karakterin kime/neye bağlandığını, kimi koruyup kolladığını merkeze al.',
      en: 'Center who/what the character bonds with, whom they protect and watch over.',
      de: 'Stelle ins Zentrum, woran die Figur sich bindet, wen sie schützt und behütet.',
    },
    yansimaSorusu: {
      tr: 'Bu karakter en çok kime bağlı? O bağ sende neyi hatırlatıyor?',
      en: 'Whom is this character most bonded with? What does that bond remind you of?',
      de: 'An wen ist diese Figur am meisten gebunden? An was erinnert dich diese Bindung?',
    },
  },
  huzun: {
    etiket: { tr: 'Hüzün', en: 'Sadness', de: 'Trauer' },
    kapi: {
      tr: 'Karaktere yitirdiği şey üzerinden girersin.',
      en: 'You enter the character through what they have lost.',
      de: 'Du betrittst die Figur durch das, was sie verloren hat.',
    },
    ipucu: {
      tr: 'Karakterin neyin özlemini taşıdığını, neyi geride bıraktığını duy.',
      en: 'Hear what the character longs for, what they have left behind.',
      de: 'Höre, wonach die Figur sich sehnt, was sie zurückgelassen hat.',
    },
    yansimaSorusu: {
      tr: 'Bu karakter neyi yitirdi? O yitik sende neye dokunuyor?',
      en: 'What has this character lost? What does that loss touch in you?',
      de: 'Was hat diese Figur verloren? Was berührt dieser Verlust in dir?',
    },
  },
  oyun: {
    etiket: { tr: 'Oyun', en: 'Play', de: 'Spiel' },
    kapi: {
      tr: 'Karaktere oyunbazlık ve anın canlılığıyla girersin.',
      en: 'You enter the character with playfulness and the aliveness of the moment.',
      de: 'Du betrittst die Figur mit Verspieltheit und der Lebendigkeit des Augenblicks.',
    },
    ipucu: {
      tr: 'Karakterin hafifliğini, mizahını, oyun kuran yanını ara — ağır karakterde bile.',
      en: "Look for the character's lightness, humor, playful side — even in a heavy character.",
      de: 'Suche die Leichtigkeit der Figur, ihren Humor, ihre verspielte Seite — selbst in einer schweren Figur.',
    },
    yansimaSorusu: {
      tr: 'Bu karakter ne zaman oyun oynuyor, ne zaman hafifliyor?',
      en: 'When does this character play, when do they grow light?',
      de: 'Wann spielt diese Figur, wann wird sie leicht?',
    },
  },
};

export function pankseppYaklasimi(baskinSistem, dil = 'tr') {
  const o = PANK_SOZLUK[baskinSistem] || PANK_SOZLUK.arayis;
  return {
    etiket: pick(o.etiket, dil),
    kapi: pick(o.kapi, dil),
    ipucu: pick(o.ipucu, dil),
    yansimaSorusu: pick(o.yansimaSorusu, dil),
  };
}

// yildizGucluZayif() paraleli — AMA afektif sistemde yargısız çerçeve.
// "güçlü/zayıf" yerine "baskın/sessiz" (en aktif / en sessiz sistem). Karar 21/31 uyumu.
export function pankseppGucluZayif(panksepp, dil = 'tr') {
  if (!panksepp) return { baskin: null, sessiz: null };

  const ids = ['arayis', 'ofke', 'korku', 'sefkat', 'huzun', 'oyun'];
  const sistemler = ids
    .map((id) => ({ id, ad: pick(PANK_SOZLUK[id].etiket, dil), deger: panksepp[id] }))
    .filter((s) => s.deger != null);

  if (!sistemler.length) return { baskin: null, sessiz: null };

  sistemler.sort((a, b) => b.deger - a.deger);
  return {
    baskin: sistemler[0],
    sessiz: sistemler[sistemler.length - 1],
  };
}

// ─── ARKETİP FARKI (MBTI çakışan/ayrışan boyutlar) ──────────────────────────

const BOYUT_ADLAR = [
  { i: 0, a: 'E', b: 'I', ad: { tr: 'Yön', en: 'Direction', de: 'Richtung' } },
  { i: 1, a: 'S', b: 'N', ad: { tr: 'Algı', en: 'Perception', de: 'Wahrnehmung' } },
  { i: 2, a: 'T', b: 'F', ad: { tr: 'Karar', en: 'Decision', de: 'Entscheidung' } },
  { i: 3, a: 'J', b: 'P', ad: { tr: 'Yapı', en: 'Structure', de: 'Struktur' } },
];

export function arketipFarki(oyuncuTipi, karakterTipi, dil = 'tr') {
  if (!oyuncuTipi || !karakterTipi) return null;
  if (oyuncuTipi.length !== 4 || karakterTipi.length !== 4) return null;

  const cakisanlar = [];
  const ayrisanlar = [];

  BOYUT_ADLAR.forEach((b) => {
    const ad = pick(b.ad, dil);
    if (oyuncuTipi[b.i] === karakterTipi[b.i]) {
      cakisanlar.push({ boyut: ad, harf: oyuncuTipi[b.i] });
    } else {
      ayrisanlar.push({ boyut: ad, oyuncu: oyuncuTipi[b.i], karakter: karakterTipi[b.i] });
    }
  });

  return { oyuncuTipi, karakterTipi, cakisanlar, ayrisanlar, yakinlik: cakisanlar.length };
}

// ─── İLK GİRİŞ MESAJI — DURUMA GÖRE FARKLI ──────────────────────────────────

const IGM_HOSGELDIN = {
  tr: (ad) => `${ad}'a hoş geldin.`,
  en: (ad) => `Welcome to ${ad}.`,
  de: (ad) => `Willkommen bei ${ad}.`,
};

const IGM_HICYOK = {
  tr: (ad) => `${ad}'a hoş geldin. Bu sayfanın tam deneyimi için önce kalibrasyonunu tamamlamanı öneririm — Öğrenme Stili, Beceri Haritası, Kişilik ve Duygu Sistemleri.`,
  en: (ad) => `Welcome to ${ad}. For the full experience of this page, I'd recommend completing your calibration first — Learning Style, Skill Map, Personality, and Emotion Systems.`,
  de: (ad) => `Willkommen bei ${ad}. Für das volle Erlebnis dieser Seite empfehle ich, zuerst deine Kalibrierung abzuschließen — Lernstil, Fähigkeitskarte, Persönlichkeit und Emotionssysteme.`,
};

const IGM_YARIM = {
  tr: (ad, eksik) => `${ad}'a hoş geldin. Henüz tamamlanmamış testlerin var: ${eksik}. Onları da tamamlarsan deneyim daha derin olacak.`,
  en: (ad, eksik) => `Welcome to ${ad}. You have unfinished tests: ${eksik}. Completing them will deepen the experience.`,
  de: (ad, eksik) => `Willkommen bei ${ad}. Du hast noch unvollendete Tests: ${eksik}. Wenn du sie abschließt, wird die Erfahrung tiefer.`,
};

const IGM_TAM = {
  tr: (ad) => `${ad} sayfası, kalibrasyon sonuçların doğrultusunda sana özel hazırlandı.`,
  en: (ad) => `The ${ad} page has been prepared for you based on your calibration results.`,
  de: (ad) => `Die Seite ${ad} wurde anhand deiner Kalibrierungsergebnisse für dich vorbereitet.`,
};

const TEST_ADLAR = {
  vak:      { tr: 'Öğrenme Stili',   en: 'Learning Style', de: 'Lernstil' },
  beceri:   { tr: 'Beceri Haritası', en: 'Skill Map',       de: 'Fähigkeitskarte' },
  arketip:  { tr: 'Kişilik',         en: 'Personality',     de: 'Persönlichkeit' },
  panksepp: { tr: 'Duygu Sistemleri', en: 'Emotion Systems', de: 'Emotionssysteme' },
};

const IGM_BUTON = {
  hicYok: {
    tr: 'Kalibrasyona Git', en: 'Go to Calibration', de: 'Zur Kalibrierung',
  },
  yarim: {
    tr: 'Kalibrasyonu Tamamla', en: 'Complete Calibration', de: 'Kalibrierung abschließen',
  },
};

function igmDil(dil) {
  return dil === 'de' || dil === 'en' ? dil : 'tr';
}

export function ilkGirisMesaji(profil, karakterAdi, dil = 'tr') {
  const d = igmDil(dil);
  if (!profil) {
    return { metin: IGM_HOSGELDIN[d](karakterAdi), yonlendirme: null };
  }

  if (profil.hicYok) {
    return {
      metin: IGM_HICYOK[d](karakterAdi),
      yonlendirme: { link: '/kalibrasyon', buton: pick(IGM_BUTON.hicYok, d) },
    };
  }

  if (!profil.tamMi) {
    const eksikAdlari = (profil.eksikler || []).map((e) => pick(TEST_ADLAR[e], d) || e).join(', ');
    return {
      metin: IGM_YARIM[d](karakterAdi, eksikAdlari),
      yonlendirme: { link: '/kalibrasyon', buton: pick(IGM_BUTON.yarim, d) },
    };
  }

  return {
    metin: IGM_TAM[d](karakterAdi),
    yonlendirme: null,
  };
}
