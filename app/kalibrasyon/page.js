// app/kalibrasyon/page.js
// ITC Actor's Gym — Kalibrasyon (Modül I) tek lineer akış · Karar 36
//
// Beş bölüm Filiz sırasında: Oyuncu Profili → Beceri Haritası →
// Öğrenme Stili → Yaratıcı Yetenekler → Duygu Haritası → Profil özeti.
// İki dilli (TR/EN) — üstteki toggle ile içerik dili değişir.
// Tüm renkler var(--*) (CLAUDE.md). Profili gör butonunda atomik kayıt.

'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { kalibrasyonKaydet } from '../lib/kalibrasyon-kaydet';
import { useDil } from '../lib/dil';
// Almanca dil katmani (index-bazli merge ile asagidaki TR/EN inline verilere
// .de alanlari eklenir — psikometrik anlam korunur, skorlama anahtarlari TR
// kalir). Kesme-isareti tuzagindan kacinmak icin string-anchor yerine index
// kullanildi. Devir notu: CLAUDE_CODE_Kalibrasyon_Almanca.md.
import * as KDE from './kalibrasyon-de';

/* ─── i18n helper ─────────────────────────────────────────────── */
const tx = (o, lang) => (o == null ? '' : typeof o === 'string' ? o : o[lang] ?? o.tr ?? o.en);

/* ─── DATA (bilingual) ────────────────────────────────────────── */

const VAK_ITEMS = [
  { en: 'I can remember best by listening to a lecture that includes information, explanations and discussions.', tr: 'En iyi; bilgi, açıklama ve tartışma içeren bir dersi dinleyerek hatırlarım.' },
  { en: 'I prefer to see information written on the board and supplemented by visual aids and assigned readings.', tr: 'Bilginin tahtaya yazılmasını; görsel araçlar ve verilen okumalarla desteklenmesini tercih ederim.' },
  { en: 'I like to write things down or take notes for visual review.', tr: 'Görsel olarak gözden geçirmek için bir şeyleri yazmayı ya da not almayı severim.' },
  { en: 'I prefer to use posters, models, or actual practice and other activities in class.', tr: 'Derste poster, model ya da bizzat uygulama ve diğer etkinlikleri kullanmayı tercih ederim.' },
  { en: 'I require explanations of diagrams, graphs, or visual directions.', tr: 'Diyagramların, grafiklerin ya da görsel yönergelerin sözlü açıklanmasına ihtiyaç duyarım.' },
  { en: 'I enjoy working with my hands or making things.', tr: 'Ellerimle çalışmaktan ya da bir şeyler üretmekten keyif alırım.' },
  { en: 'I am skillful with and enjoy developing making graphs and charts.', tr: 'Grafik ve çizelge oluşturmada beceriliyimdir ve bunu geliştirmekten keyif alırım.' },
  { en: 'I can tell if sounds match when presented with pairs of sounds.', tr: 'Bana çiftler hâlinde sesler verildiğinde, bu seslerin uyuşup uyuşmadığını ayırt edebilirim.' },
  { en: 'I can remember best by writing things down several times.', tr: 'En iyi, bir şeyleri birkaç kez yazarak hatırlarım.' },
  { en: 'I can easily understand and follow directions on a map.', tr: 'Bir haritadaki yönleri kolaylıkla anlar ve izleyebilirim.' },
  { en: 'I do best in academic subjects by listening to lectures and tapes.', tr: 'Akademik konularda en iyi; dersleri ve ses kayıtlarını dinleyerek başarılı olurum.' },
  { en: 'I play with coins or keys in my pocket.', tr: 'Cebimdeki bozuk paralar ya da anahtarlarla oynarım.' },
  { en: 'I learn to spell better by repeating words out loud than by writing the words on paper.', tr: 'Kelimelerin yazılışını, kâğıda yazmaktansa yüksek sesle tekrarlayarak daha iyi öğrenirim.' },
  { en: 'I can understand a news article better by reading about it rather than by listening to a report.', tr: 'Bir haberi, dinlemektense okuyarak daha iyi anlarım.' },
  { en: 'I chew gum, smoke or snack while studying.', tr: 'Çalışırken sakız çiğnerim, sigara içerim ya da atıştırırım.' },
  { en: 'I think the best way to remember something is to picture it in my mind.', tr: 'Bir şeyi hatırlamanın en iyi yolunun, onu zihnimde canlandırmak olduğunu düşünürüm.' },
  { en: 'I learn the spelling of words by "finger spelling" them.', tr: 'Kelimelerin yazılışını, parmağımla harf harf "havada yazarak" öğrenirim.' },
  { en: 'I would rather listen to a good lecture or speech than read about the same material.', tr: 'Aynı içeriği okumaktansa, iyi bir dersi ya da konuşmayı dinlemeyi yeğlerim.' },
  { en: 'I am good at working and solving jigsaw puzzles and mazes.', tr: 'Yapboz ve labirent çözmede ustayımdır.' },
  { en: 'I grip objects in my hands during learning periods.', tr: 'Öğrenme sırasında elimde bir nesneyi tutar/sıkarım.' },
  { en: 'I prefer listening to the news on the radio rather than reading about it.', tr: 'Haberleri okumaktansa radyodan dinlemeyi tercih ederim.' },
  { en: 'I prefer obtaining information about an interesting subject by reading about it.', tr: 'İlgi çekici bir konu hakkında bilgiyi okuyarak edinmeyi tercih ederim.' },
  { en: 'I feel very comfortable touching others, hugging, handshaking, etc.', tr: 'Başkalarına dokunma, sarılma, el sıkışma gibi temaslarda kendimi çok rahat hissederim.' },
  { en: 'I follow oral directions better than written ones.', tr: 'Sözlü yönergeleri, yazılı olanlardan daha iyi izlerim.' },
];
const VAK_GROUPS = { 'Görsel': [2, 3, 7, 10, 14, 16, 19, 22], 'İşitsel': [1, 5, 8, 11, 13, 18, 21, 24], 'Kinestetik': [4, 6, 9, 12, 15, 17, 20, 23] };
const VAK_SCALE = [
  { val: 5, tr: 'Sık sık', en: 'Often' },
  { val: 3, tr: 'Bazen', en: 'Sometimes' },
  { val: 1, tr: 'Nadiren', en: 'Seldom' },
];

const SKILLS_ITEMS = [
  { en: 'I am a good observer and researcher.', tr: 'İyi bir gözlemci ve araştırmacıyımdır.' },
  { en: 'I have high self-confidence as an acting performer.', tr: 'Bir oyuncu olarak özgüvenim yüksektir.' },
  { en: 'I have good understanding of dramatic techniques.', tr: 'Dramatik teknikleri iyi kavrarım.' },
  { en: 'I am a talented actor.', tr: 'Yetenekli bir oyuncuyumdur.' },
  { en: 'I love my job as an actor and passionate about it.', tr: 'Oyunculuk mesleğimi severim ve ona tutkuyla bağlıyımdır.' },
  { en: 'I have good memorization skills.', tr: 'Ezberleme becerim güçlüdür.' },
  { en: 'I am good at controlling my focus.', tr: 'Odağımı denetlemekte iyiyimdir.' },
  { en: 'I can easily express different emotions.', tr: 'Farklı duyguları kolaylıkla ifade edebilirim.' },
  { en: 'I am good at imagination.', tr: 'Hayal gücüm kuvvetlidir.' },
  { en: 'I am open to learning.', tr: 'Öğrenmeye açığımdır.' },
  { en: 'I trust my skills as an actor.', tr: 'Bir oyuncu olarak becerilerime güvenirim.' },
  { en: 'I work hard on my performance.', tr: 'Performansım üzerine çok çalışırım.' },
  { en: 'My acting performance is authentic and natural.', tr: 'Oyunculuk performansım hakiki ve doğaldır.' },
  { en: 'I can express myself well bodily and I have good control on my movements.', tr: 'Kendimi bedensel olarak iyi ifade ederim; hareketlerim üzerinde iyi bir denetimim vardır.' },
  { en: 'I can express myself well verbally and I have good articulation.', tr: 'Kendimi sözel olarak iyi ifade ederim; boğumlamam/diksiyonum iyidir.' },
  { en: 'I can relax my body easily.', tr: 'Bedenimi kolaylıkla gevşetebilirim.' },
  { en: 'I have good time-management skills.', tr: 'Zaman yönetimi becerim iyidir.' },
  { en: 'I am self-disciplined in my profession.', tr: 'Mesleğimde öz disiplinliyimdir.' },
  { en: 'I have high levels of motivation for my profession.', tr: 'Mesleğime dair motivasyonum yüksektir.' },
  { en: 'I can express myself well vocally and I have good control on my voice.', tr: 'Kendimi sessel olarak iyi ifade ederim; sesim üzerinde iyi bir denetimim vardır.' },
  { en: 'I have high emotional intelligence.', tr: 'Duygusal zekâm yüksektir.' },
  { en: 'I am patient and resilient.', tr: 'Sabırlı ve dayanıklıyımdır.' },
  { en: 'I am open to both positive and negative feedback.', tr: 'Hem olumlu hem olumsuz geri bildirime açığımdır.' },
  { en: 'I am curious about my profession.', tr: 'Mesleğime karşı meraklıyımdır.' },
  { en: 'I am collaborative, can manage well to work with a team.', tr: 'İş birliğine yatkınımdır; bir ekiple çalışmayı iyi yürütürüm.' },
  { en: 'I have good interpersonal skills.', tr: 'Kişilerarası ilişki becerilerim iyidir.' },
  { en: 'I have good stage presence.', tr: 'Sahne hâkimiyetim güçlüdür.' },
  { en: 'I have good vocal presence.', tr: 'Ses hâkimiyetim güçlüdür.' },
  { en: 'I have ability to enter into another character easily.', tr: 'Bir başka karaktere kolaylıkla girebilme yetisine sahibim.' },
  { en: 'I have ability to memorise lines effectively.', tr: 'Replikleri etkili biçimde ezberleyebilme yetisine sahibim.' },
  { en: 'I have high energy to perform.', tr: 'Sahneye çıkmak için yüksek enerjim vardır.' },
  { en: 'I have the dedication for acting performance.', tr: 'Oyunculuk performansına adanmışlığım vardır.' },
  { en: 'I have creative insight on acting.', tr: 'Oyunculuğa dair yaratıcı bir sezgim vardır.' },
  { en: 'I trust my craft.', tr: 'Zanaatıma güvenirim.' },
  { en: 'I have good listening skills.', tr: 'Dinleme becerim iyidir.' },
  { en: 'I am good at interpreting and analyzing characters.', tr: 'Karakterleri yorumlamada ve çözümlemede iyiyimdir.' },
  { en: 'I have the capacity to work well in teams.', tr: 'Ekip hâlinde iyi çalışabilme kapasitem vardır.' },
];
const SKILLS_GROUPS = {
  'Mesleki Güven': [2, 4, 11, 13, 23, 29, 30, 33, 34],
  'Teknik': [3, 14, 15, 20, 27, 28, 36],
  'Zihinsel': [1, 6, 7, 9, 10, 17, 35],
  'Duygusal': [8, 21, 22],
  'Motivasyonel': [5, 12, 18, 19, 24, 31, 32],
  'Rahatlama': [16],
  'İlişkisel': [25, 26, 37],
};

const PANK_ITEMS = [
  { en: 'People who know me would say I am a very fun-loving person.', tr: 'Beni tanıyanlar, çok neşeli/eğlenmeyi seven biri olduğumu söylerdi.' },
  { en: 'When I am frustrated, I usually get angry.', tr: 'Canım sıkıldığında genellikle öfkelenirim.' },
  { en: 'I am usually not highly curious.', tr: 'Genellikle pek meraklı değilimdir.' },
  { en: 'I am the kind of person that likes to touch and hug people.', tr: 'İnsanlara dokunmayı ve sarılmayı seven türden biriyimdir.' },
  { en: 'I rarely get angry enough to want to hit someone.', tr: 'Birine vurmak isteyecek kadar öfkelendiğim nadirdir.' },
  { en: 'I rarely worry about my future.', tr: 'Geleceğim için nadiren kaygılanırım.' },
  { en: 'I rarely become sad.', tr: 'Nadiren üzülürüm.' },
  { en: 'I seldom experience sadness or despair.', tr: 'Hüzün ya da umutsuzluğu seyrek yaşarım.' },
  { en: 'I am very playful.', tr: 'Çok oyunbazımdır.' },
  { en: 'I often have the feeling that I am going to cry.', tr: 'Çoğu zaman ağlayacakmışım gibi hissederim.' },
  { en: 'My friends would probably describe me as hotheaded.', tr: 'Arkadaşlarım beni muhtemelen çabuk parlayan biri olarak tanımlardı.' },
  { en: 'I do not feel lonely very often.', tr: 'Pek sık yalnızlık hissetmem.' },
  { en: 'I like to kid around with other people.', tr: 'İnsanlarla şakalaşmayı severim.' },
  { en: 'I often feel the urge to nurture those closest to me.', tr: 'Bana en yakın olanları koruyup kollama isteğini sık sık duyarım.' },
  { en: 'I often worry about the future.', tr: 'Gelecek için sık sık kaygılanırım.' },
  { en: 'I am not particularly affectionate.', tr: 'Pek sevecen biri değilimdir.' },
  { en: 'There are very few things that make me anxious.', tr: 'Beni kaygılandıran çok az şey vardır.' },
  { en: 'I often feel lonely.', tr: 'Sık sık yalnızlık hissederim.' },
  { en: 'I am a person who is easily amused and laughs a lot.', tr: 'Kolayca neşelenen ve çok gülen biriyimdir.' },
  { en: 'People who know me well would say I almost never become angry.', tr: 'Beni iyi tanıyanlar neredeyse hiç öfkelenmediğimi söylerdi.' },
  { en: 'I am usually not interested in solving problems and puzzles just for the sake of solving them.', tr: 'Sırf çözmüş olmak için problem ve bulmaca çözmeye genellikle ilgi duymam.' },
  { en: 'I do not particularly enjoy kidding around and exchanging "wisecracks."', tr: 'Şakalaşmaktan ve karşılıklı nükteli laf atışmalarından pek hoşlanmam.' },
  { en: 'I sometimes cannot stop worrying about my problems.', tr: 'Bazen sorunlarımı kaygıyla düşünmeyi durduramam.' },
  { en: 'I hardly ever become so angry at someone that I feel like yelling at them.', tr: 'Birine bağırmak isteyecek kadar öfkelendiğim hemen hiç olmaz.' },
  { en: 'I am not an extremely inquisitive person.', tr: 'Aşırı meraklı/sorgulayıcı biri değilimdir.' },
  { en: 'When someone makes me angry, I tend to remain fired up for a long time.', tr: 'Biri beni öfkelendirdiğinde uzun süre kızgın kalmaya meyilliyimdir.' },
  { en: 'I do not especially want people to be emotionally close to me.', tr: 'İnsanların bana duygusal olarak yakın olmasını özellikle istemem.' },
  { en: 'My curiosity drives me to do things.', tr: 'Merakım beni bir şeyler yapmaya iter.' },
  { en: 'My friends would probably describe me as being too serious.', tr: 'Arkadaşlarım beni muhtemelen fazla ciddi biri olarak tanımlardı.' },
  { en: 'I have very few fears in my life.', tr: 'Hayatımda çok az korkum vardır.' },
  { en: 'I enjoy finding new solutions to problems.', tr: 'Sorunlara yeni çözümler bulmaktan keyif alırım.' },
  { en: 'I often feel sad.', tr: 'Sık sık hüzünlenirim.' },
  { en: 'I like to think outside of the box.', tr: 'Kalıpların dışında düşünmeyi severim.' },
];
const PANK_REVERSED = new Set([3, 5, 6, 7, 8, 12, 16, 17, 20, 21, 22, 24, 25, 27, 29, 30]);
const PANK_GROUPS = {
  'Oyun · Play': [1, 9, 13, 19, 22, 29],
  'Öfke · Anger': [2, 5, 11, 20, 24, 26],
  'Arayış · Seek': [3, 21, 25, 28, 31, 33],
  'Şefkat · Care': [4, 14, 16, 27],
  'Korku · Fear': [6, 15, 17, 23, 30],
  'Hüzün · Sadness': [7, 8, 10, 12, 18, 32],
};
const PANK_SCALE = [
  { val: 1, en: 'Strongly Disagree', tr: 'Kesinlikle Katılmıyorum' },
  { val: 2, en: 'Disagree', tr: 'Katılmıyorum' },
  { val: 3, en: 'Neither', tr: 'Kararsızım' },
  { val: 4, en: 'Agree', tr: 'Katılıyorum' },
  { val: 5, en: 'Strongly Agree', tr: 'Kesinlikle Katılıyorum' },
];

const GROUP_LABELS = {
  'Görsel': { en: 'Visual' }, 'İşitsel': { en: 'Auditory' }, 'Kinestetik': { en: 'Kinesthetic' },
  'Mesleki Güven': { en: 'Professional Confidence' }, 'Teknik': { en: 'Technical' },
  'Zihinsel': { en: 'Mental' }, 'Duygusal': { en: 'Emotional' }, 'Motivasyonel': { en: 'Motivational' },
  'Rahatlama': { en: 'Relaxation' }, 'İlişkisel': { en: 'Interpersonal' },
};
const glabel = (key, lang) => (lang === 'tr' ? key : (GROUP_LABELS[key]?.[lang] || GROUP_LABELS[key]?.en || key));

const MBTI_AXES = [
  {
    key: 'EI', left: 'E', right: 'I',
    title: { tr: 'Vaktini hangi dünyada geçirmeyi tercih edersin?', en: 'In which world do you prefer to spend your time?' },
    leftHead: { tr: 'Dışadönük dünya', en: 'Extraverted world' }, rightHead: { tr: 'İçedönük dünya', en: 'Introverted world' },
    rows: [
      { l: { en: 'Get your energy from interaction with the world around you', tr: 'Enerjini çevrendeki dünyayla kurduğun etkileşimden alırsın' }, r: { en: 'Get your energy from yourself, your own activities and thoughts', tr: 'Enerjini kendinden; kendi uğraş ve düşüncelerinden alırsın' } },
      { l: { en: 'Focus attention outward: on people, things and action', tr: 'Dikkatini dışa yöneltirsin: insanlara, nesnelere ve eyleme' }, r: { en: 'Focus attention inward: on concepts, ideals and feelings', tr: 'Dikkatini içe yöneltirsin: kavramlara, ideallere ve duygulara' } },
      { l: { en: 'Value external sharing and relationships', tr: 'Dışa dönük paylaşıma ve ilişkilere değer verirsin' }, r: { en: 'Value internal interpretation and understanding', tr: 'İçsel yoruma ve anlamaya değer verirsin' } },
      { l: { en: 'Develop creative ideas with others, externally', tr: 'Yaratıcı fikirleri başkalarıyla, dışarıda geliştirirsin' }, r: { en: 'Develop creative ideas independently, internally', tr: 'Yaratıcı fikirleri tek başına, içeride geliştirirsin' } },
      { l: { en: 'Have a breadth and variety of interests', tr: 'İlgi alanların geniş ve çeşitlidir' }, r: { en: 'Have a depth and focus to interests', tr: 'İlgi alanların derin ve odaklıdır' } },
      { l: { en: 'Prefer interaction, interruptions and meetings', tr: 'Etkileşimi, araya girmeleri ve toplantıları tercih edersin' }, r: { en: 'Prefer concentration, pauses and solitude', tr: 'Yoğunlaşmayı, duraklamaları ve yalnızlığı tercih edersin' } },
      { l: { en: 'Be public and out loud', tr: 'Açık ve sesli olursun' }, r: { en: 'Be private and intense', tr: 'Mahrem ve yoğun olursun' } },
      { l: { en: 'Communicate by talking', tr: 'Konuşarak iletişim kurarsın' }, r: { en: 'Communicate by writing', tr: 'Yazarak iletişim kurarsın' } },
      { l: { en: 'Value action', tr: 'Eyleme değer verirsin' }, r: { en: 'Value reflection', tr: 'Tefekküre değer verirsin' } },
      { l: { en: 'Speak rapidly; volunteer information', tr: 'Hızlı konuşur, bilgiyi kendiliğinden verirsin' }, r: { en: 'Provide information as needed', tr: 'Bilgiyi gerektikçe verirsin' } },
      { l: { en: 'Have an interest in external events', tr: 'Dış olaylara ilgi duyarsın' }, r: { en: 'Have an interest in internal reactions', tr: 'İçsel tepkilere ilgi duyarsın' } },
      { l: { en: 'Plunge in', tr: 'Hemen atılırsın' }, r: { en: 'Pause and consider', tr: 'Durup düşünürsün' } },
      { l: { en: 'Ask questions to clarify expectations', tr: 'Beklentileri netleştirmek için soru sorarsın' }, r: { en: 'Ask questions for understanding', tr: 'Anlamak için soru sorarsın' } },
      { l: { en: 'Accept standards of others', tr: 'Başkalarının ölçütlerini benimsersin' }, r: { en: 'Set your own standards', tr: 'Kendi ölçütlerini koyarsın' } },
      { l: { en: 'Enjoy alone time but get bored with too much calm', tr: 'Biraz yalnız vakitten hoşlanır ama sakin ortamda fazla kalınca sıkılırsın' }, r: { en: 'Enjoy socializing but need time alone to recharge', tr: 'Sosyalleşmekten hoşlanır ama güç toplamak için yalnız kalmaya ihtiyaç duyarsın' } },
    ],
  },
  {
    key: 'SN', left: 'S', right: 'N',
    title: { tr: 'Algılama işlevlerinden hangisini en sık tercih edersin?', en: 'Which of the perceiving functions do you prefer most consistently?' },
    leftHead: { tr: 'Duyumsama (Sensation)', en: 'Sensation' }, rightHead: { tr: 'Sezgi (Intuition)', en: 'Intuition' },
    rows: [
      { l: { en: 'Get information from observing, measuring and experience', tr: 'Bilgiyi gözlemleyerek, ölçerek ve deneyimleyerek edinirsin' }, r: { en: 'Get information from explanation, reasoning and abstract understanding', tr: 'Bilgiyi açıklama, akıl yürütme ve soyut kavrayışla edinirsin' } },
      { l: { en: 'Use your body and your senses to know', tr: 'Bilmek için bedenini ve duyularını kullanırsın' }, r: { en: 'Know without knowing how you know', tr: 'Nasıl bildiğini bilmeden bilirsin' } },
      { l: { en: 'Have realistic pictures of what is happening', tr: 'Olup biten hakkında gerçekçi tablolar kurarsın' }, r: { en: 'Develop visions of what could happen', tr: 'Olabilecekler hakkında imgeler geliştirirsin' } },
      { l: { en: 'Look at specific parts, facts and details', tr: 'Belirli parçalara, olgulara ve ayrıntılara bakarsın' }, r: { en: 'Look at patterns, relationships and possibilities', tr: 'Örüntülere, ilişkilere ve olasılıklara bakarsın' } },
      { l: { en: 'Prefer clearly defined expectations and specific instructions', tr: 'Açıkça tanımlanmış beklentileri ve belirli yönergeleri tercih edersin' }, r: { en: 'Prefer an overall rationale with options to explore', tr: 'Genel bir gerekçeyi, keşfedecek bolca seçenekle tercih edersin' } },
      { l: { en: 'Focus on here and now or connections to the past', tr: 'Şimdiye, buraya ya da geçmişle bağlara odaklanırsın' }, r: { en: 'Focus on the future, the unknown and the unseen', tr: 'Geleceğe, bilinmeyene ve görünmeyene odaklanırsın' } },
      { l: { en: 'Be seen as pragmatic, concrete and down to earth', tr: 'Pragmatik, somut ve ayakları yere basan biri olarak görülürsün' }, r: { en: 'Be seen as abstract, theoretical, head in the clouds', tr: 'Soyut, kuramsal ve başı göklerde biri olarak görülürsün' } },
      { l: { en: 'Provide precise descriptions and definitions', tr: 'Kesin betimlemeler ve tanımlar sunarsın' }, r: { en: 'Provide general terms, meanings and interpretations', tr: 'Genel kavramlar, anlamlar ve yorumlar sunarsın' } },
      { l: { en: 'Learn and work sequentially and methodically', tr: 'Sıralı ve yöntemli öğrenir ve çalışırsın' }, r: { en: 'Learn and work rapidly and randomly', tr: 'Hızlı ve rastgele öğrenir ve çalışırsın' } },
      { l: { en: 'Value hard work', tr: 'Sıkı çalışmaya değer verirsin' }, r: { en: 'Value inspiration', tr: 'İlhama değer verirsin' } },
      { l: { en: 'Rely on tangible experience to solve problems', tr: 'Sorunları çözmek için somut deneyime güvenirsin' }, r: { en: 'Rely on intangible ingenuity to solve problems', tr: 'Sorunları çözmek için elle tutulmayan bir yaratıcılığa güvenirsin' } },
      { l: { en: 'Like to make things work', tr: 'Bir şeyleri işler kılmayı seversin' }, r: { en: 'Like to understand', tr: 'Anlamayı seversin' } },
      { l: { en: 'Build on what has already been done', tr: 'Yapılmış olanın üzerine inşa edersin' }, r: { en: 'Prefer to do things differently', tr: 'İşleri farklı yapmayı tercih edersin' } },
      { l: { en: 'Ask "What?" and "How?"', tr: '"Ne?" ve "Nasıl?" diye sorarsın' }, r: { en: 'Ask "Why not?" and "In what ways might I?"', tr: '"Neden olmasın?" ve "Hangi yollarla yapabilirim?" diye sorarsın' } },
      { l: { en: 'Imagine pictures with specific colors, shapes, textures', tr: 'Belirli renk, biçim ve dokuları olan tablolar hayal edersin' }, r: { en: 'Imagine unusual images and connections', tr: 'Sıra dışı imgeler ve bağlantılar hayal edersin' } },
      { l: { en: 'Focus on the facts of the present', tr: 'Bugünün olgularına odaklanırsın' }, r: { en: 'Focus on abstract ideas and theories', tr: 'Soyut fikirlere ve kuramlara odaklanırsın' } },
      { l: { en: 'Distrust guesses not rooted in logic and facts', tr: 'Mantığa ve olgulara dayanmayan tahminlere güvenmezsin' }, r: { en: 'Tend to daydream, forgetful with practical details', tr: 'Hayallere dalar, pratik ayrıntılarda unutkan olursun' } },
    ],
  },
  {
    key: 'TF', left: 'T', right: 'F',
    title: { tr: 'Yargılama işlevlerinden hangisini tercih edersin?', en: 'Which of the judging functions do you prefer?' },
    leftHead: { tr: 'Düşünme (Thinking)', en: 'Thinking' }, rightHead: { tr: 'Hissetme (Feeling)', en: 'Feeling' },
    rows: [
      { l: { en: 'Decide by way of ratio, logic and given criteria', tr: 'Akıl, mantık ve verili ölçütlerle karar verirsin' }, r: { en: 'Decide by context, interests and what feels right', tr: 'Bağlama, çıkarlara ve doğru hissettiren şeye bakarak karar verirsin' } },
      { l: { en: 'Base decisions on objective, impersonal principles', tr: 'Kararlarını nesnel, kişisel olmayan ilkelere dayandırırsın' }, r: { en: 'Base decisions on subjective, personal values', tr: 'Kararlarını öznel, kişisel ve kültürel değerlere dayandırırsın' } },
      { l: { en: 'Appreciate justice, fairness and equity', tr: 'Adaleti, hakkaniyeti ve eşitliği önemsersin' }, r: { en: 'Appreciate mercy, empathy and loyalty', tr: 'Merhameti, empatiyi ve sadakati önemsersin' } },
      { l: { en: 'Categorize; think "either-or"', tr: 'Sınıflandırırsın; "ya o ya bu" diye düşünürsün' }, r: { en: 'Harmonize; consider "both-and"', tr: 'Uyumlarsın; "hem o hem bu" diye düşünürsün' } },
      { l: { en: 'Question, analyze and problem solve', tr: 'Sorgular, çözümler ve sorun çözersin' }, r: { en: 'Sympathize, relate and share', tr: 'Anlayış gösterir, bağ kurar ve paylaşırsın' } },
      { l: { en: 'Weigh the evidence', tr: 'Kanıtı tartarsın' }, r: { en: 'Determine the worth and importance', tr: 'Değerini ve önemini belirlersin' } },
      { l: { en: 'Use logic; focus on consequences', tr: 'Mantığı kullanır, sonuçlara odaklanırsın' }, r: { en: 'Consider the impact on people and relationships', tr: 'İnsanlar ve ilişkiler üzerindeki etkiyi gözetirsin' } },
      { l: { en: 'Anticipate and plan for obstacles', tr: 'Engelleri öngörür ve plan yaparsın' }, r: { en: "Anticipate people's needs and reactions", tr: 'İnsanların ihtiyaç ve tepkilerini öngörürsün' } },
      { l: { en: 'Make classifications', tr: 'Sınıflandırmalar yaparsın' }, r: { en: 'Make connections', tr: 'Bağlantılar kurarsın' } },
      { l: { en: 'Be concise when speaking and writing', tr: 'Konuşur ve yazarken özlü olursun' }, r: { en: 'Be expressive when speaking and writing', tr: 'Konuşur ve yazarken ifade gücü yüksek olursun' } },
      { l: { en: 'Prefer clarity in decision making', tr: 'Karar ve planlamada netliği tercih edersin' }, r: { en: 'Prefer involvement in planning', tr: 'Planlama ve uygulamaya dâhil olmayı tercih edersin' } },
      { l: { en: 'Focus on goals, objectives and structure', tr: 'Hedeflere, amaçlara ve yapıya odaklanırsın' }, r: { en: 'Focus on how personal needs will be met', tr: 'Kişisel ihtiyaçların nasıl karşılanacağına odaklanırsın' } },
      { l: { en: 'Create strategies and designs', tr: 'Stratejiler ve tasarımlar kurarsın' }, r: { en: 'Create nurturing environments', tr: 'Besleyip büyüten ortamlar yaratırsın' } },
      { l: { en: 'Ask "Why?"', tr: '"Neden?" diye sorarsın' }, r: { en: 'Ask "Who?"', tr: '"Kim?" diye sorarsın' } },
      { l: { en: 'Find the most logical, consistent solution', tr: 'En mantıklı ve tutarlı çözümü bulursun' }, r: { en: 'Find the most balanced, harmonious solution', tr: 'En dengeli, en uyumlu çözümü bulursun' } },
    ],
  },
  {
    key: 'JP', left: 'J', right: 'P',
    title: { tr: 'Dış dünyada hangi işlevi kullanırsın?', en: 'Which function do you use in the external world?' },
    leftHead: { tr: 'Yargılama (Judging)', en: 'Judging' }, rightHead: { tr: 'Algılama (Perceiving)', en: 'Perceiving' },
    rows: [
      { l: { en: 'Feel comfortable when things go as planned', tr: 'İşler planlandığı gibi gittiğinde rahat hissedersin' }, r: { en: 'Feel comfortable when things stay flexible and open', tr: 'İşler esnekken, akışına bıraktığında rahat hissedersin' } },
      { l: { en: 'Want to know what is going to happen to prepare', tr: 'Hazırlanmak için ne olacağını bilmek istersin' }, r: { en: 'Want to be more spontaneous', tr: 'Daha doğaçlama olmak istersin' } },
      { l: { en: 'Prefer closure', tr: 'Sonuçlandırmayı tercih edersin' }, r: { en: 'Keep options open', tr: 'Seçenekleri açık tutarsın' } },
      { l: { en: 'Limit options to get them off your mind', tr: 'Aklını meşgul etmesin diye seçenekleri sınırlarsın' }, r: { en: 'Never feel you have enough information', tr: 'Hiçbir zaman yeterince bilgin olduğunu hissetmezsin' } },
      { l: { en: 'Enjoy the product', tr: 'Üründen keyif alırsın' }, r: { en: 'Enjoy the process', tr: 'Süreçten keyif alırsın' } },
      { l: { en: 'Plan ahead and follow schedules', tr: 'Önceden plan yapar ve programlara uyarsın' }, r: { en: 'Adapt as you go', tr: 'İlerledikçe uyum sağlarsın' } },
      { l: { en: 'Prefer decisions settled and completed', tr: 'Kararların yerleşmiş ve tamamlanmış olmasını tercih edersin' }, r: { en: 'Prefer decisions open, pending and emergent', tr: 'Kararların açık, askıda ve oluş hâlinde olmasını tercih edersin' } },
      { l: { en: 'Be seen as deliberate, purposeful and decisive', tr: 'Ölçülü, amaçlı ve kararlı biri olarak görülürsün' }, r: { en: 'Be seen as flexible, adaptable and curious', tr: 'Esnek, uyum sağlayan ve meraklı biri olarak görülürsün' } },
      { l: { en: 'Build a hypothesis first, then collect data', tr: 'Önce bir hipotez kurar, sonra veri toplarsın' }, r: { en: 'Collect data, then build the model', tr: 'Önce veri toplar, sonra modeli kurarsın' } },
      { l: { en: 'Want to manage', tr: 'Yönetmek istersin' }, r: { en: 'Want to understand', tr: 'Anlamak istersin' } },
      { l: { en: 'Believe in project plans and timetables', tr: 'Proje planlarına ve çizelgelere inanırsın' }, r: { en: 'Believe in explorations', tr: 'Keşiflere inanırsın' } },
      { l: { en: 'Prefer few surprises', tr: 'Az sürpriz tercih edersin' }, r: { en: 'Be ready for anything', tr: 'Her şeye hazır olursun' } },
      { l: { en: 'Be viewed as self-disciplined and organized', tr: 'Öz disiplinli ve düzenli biri olarak görülürsün' }, r: { en: 'Welcome new light on situations', tr: 'Zorluklara dair yeni bir ışığı memnuniyetle karşılarsın' } },
      { l: { en: 'Control events', tr: 'Olayları denetlersin' }, r: { en: 'Respond to the moment', tr: 'Ana karşılık verirsin' } },
      { l: { en: 'Like to find solutions and explain why', tr: 'Çözüm bulur, nedenini açıklarsın' }, r: { en: 'Like to leave things open and keep observing', tr: 'İşleri açık bırakır, gözlemi sürdürürsün' } },
      { l: { en: 'Enjoy getting things done ahead of time', tr: 'İşleri vaktinden önce bitirmekten keyif alırsın' }, r: { en: 'Mix work and play; struggle with procrastination', tr: 'İşi ve oyunu harmanlar, ertelemeyle boğuşursun' } },
    ],
  },
];
const MBTI_ARCHETYPES = {
  ESTP: { tr: 'Maceracı / Mucit', en: 'Adventurer / Inventor' }, ESFP: { tr: 'Maceracı / Şair', en: 'Adventurer / Poet' },
  ISTJ: { tr: 'Kılavuz / Kaptan', en: 'Navigator / Pilot' }, ISFJ: { tr: 'Kılavuz / Uyumlayıcı', en: 'Navigator / Harmonizer' },
  ENTP: { tr: 'Kâşif / Mucit', en: 'Explorer / Inventor' }, ENFP: { tr: 'Kâşif / Şair', en: 'Explorer / Poet' },
  INTJ: { tr: 'Vizyoner / Kaptan', en: 'Visionary / Pilot' }, INFJ: { tr: 'Vizyoner / Uyumlayıcı', en: 'Visionary / Harmonizer' },
  ESTJ: { tr: 'Kaptan / Kılavuz', en: 'Pilot / Navigator' }, ENTJ: { tr: 'Kaptan / Vizyoner', en: 'Pilot / Visionary' },
  ISTP: { tr: 'Mucit / Maceracı', en: 'Inventor / Adventurer' }, INTP: { tr: 'Mucit / Kâşif', en: 'Inventor / Explorer' },
  ESFJ: { tr: 'Uyumlayıcı / Kılavuz', en: 'Harmonizer / Navigator' }, ENFJ: { tr: 'Uyumlayıcı / Vizyoner', en: 'Harmonizer / Visionary' },
  ISFP: { tr: 'Şair / Maceracı', en: 'Poet / Adventurer' }, INFP: { tr: 'Şair / Kâşif', en: 'Poet / Explorer' },
};

/* ─── FLOW (Filiz sırası) ─────────────────────────────────────── */
const FLOW = [
  {
    key: 'basics', n: '01', welcome: true,
    title: { tr: 'Oyuncu Profili', en: 'Actor Profile' },
    sub: { tr: 'Kim olduğun · deneyim · hedefler', en: 'Who you are · experience · goals' },
    intro: {
      tr: 'Sevgili dostum, aramıza hoş geldin. Yollarımızın kesişmesine çok sevindik; bunun ilham verici bir yolculuk olmasını diliyoruz. Oyunculuk performansını geliştirmek istiyorsan, doğru yerdesin.',
      en: 'Dear friend, welcome aboard. We are very happy that our paths crossed and hope it will be an inspiring adventure. If you want to improve your acting performance, you are in the right place.',
    },
  },
  {
    key: 'skills', n: '02',
    title: { tr: 'Beceri Haritası', en: 'Skill Map' },
    sub: { tr: 'Öznel beceri değerlendirmesi · 37 madde', en: 'Subjective skills assessment · 37 items' },
    intro: {
      tr: 'Bir önceki bölümdeki yanıtların için teşekkürler. Şimdi sıra, oyunculuk becerilerine dair öznel değerlendirmende. Her ifadeyi sana ne kadar uyduğuna göre puanla: 1 = HİÇ DOĞRU DEĞİL, 7 = KESİNLİKLE DOĞRU.',
      en: 'Thank you for your answers on the previous section. Now is your subjective assessment about your skills in acting. Rate each statement for how much it applies to you: 1 = NOT AT ALL, 7 = ABSOLUTELY TRUE.',
    },
  },
  {
    key: 'vak', n: '03',
    title: { tr: 'Öğrenme Stili', en: 'Learning Style' },
    sub: { tr: 'Görsel · İşitsel · Kinestetik · 24 madde', en: 'Visual · Auditory · Kinesthetic · 24 items' },
    intro: {
      tr: 'Bir önceki bölümdeki yanıtların için teşekkürler. Şimdi öğrenme stiline yönelik değerlendirme. Her ifadeyi sana ne sıklıkta uyduğuna göre puanla.',
      en: 'Thank you for your answers on the previous section. Now the assessment for your learning style. Rate each statement for how often it applies to you.',
    },
  },
  {
    key: 'mbti', n: '04',
    title: { tr: 'Yaratıcı Yetenekler', en: 'Creative Talents' },
    sub: { tr: '16 enstrüman profili · 63 ikili seçim', en: '16 instrument profiles · 63 forced choices' },
    intro: {
      tr: 'Yaratıcı yeteneklerini keşfedelim! Kişilik özelliklerin; bakış açılarını, varsayımlarını ve yaratıcı çözümlere yaklaşımını etkiler. Her satırda seni en iyi tanımlayan birini seç.',
      en: "Let's discover your creative talents! Personality traits influence your perspectives, assumptions and approaches to creative solutions. Choose the one in each line that best describes you.",
    },
  },
  {
    key: 'pank', n: '05',
    title: { tr: 'Duygu Haritası', en: 'Emotion Map' },
    sub: { tr: 'Altı sistem · Panksepp · 33 madde', en: 'Six systems · Panksepp · 33 items' },
    intro: {
      tr: 'Bir önceki bölümdeki yanıtların için teşekkürler. Şimdi duygu sistemlerine dair sorulara geldi sıra. Her ifadeye ne kadar katılıp katılmadığını belirt.',
      en: 'Thank you for your answers on the previous section. Now come the questions about your affective system. Indicate how much you agree or disagree with each statement.',
    },
  },
];

/* ─── UI sözlüğü ──────────────────────────────────────────────── */
const UI = {
  brand: 'Inside The Character',
  calib: { tr: 'Kalibrasyon', en: 'Calibration' },
  module: { tr: 'Modül I · Kalibrasyon', en: 'Module I · Calibration' },
  heroTitle: { tr: 'Enstrümanını kalibre et', en: 'Calibrate your instrument' },
  basicsLead: { tr: 'Tanışalım. Bu bölüm profilini ve sonraki bölümlerin sana göre şekillenmesini besler.', en: "Let's get to know you. This section feeds your profile and how later sections adapt to you." },
  section: { tr: 'Bölüm', en: 'Section' },
  category: { tr: 'Kategori', en: 'Category' },
  answered: { tr: 'yanıtlandı', en: 'answered' },
  nextCategory: { tr: 'Sonraki kategori →', en: 'Next category →' },
  breathLabel: { tr: 'Bir nefes', en: 'A breath' },
  breathLead: { tr: 'Devam etmeden önce bir an dur. Derin bir nefes al.', en: 'Pause for a moment before continuing. Take a deep breath.' },
  breathSub: { tr: 'Hazır olduğunda devam et.', en: 'Continue when you are ready.' },
  breathBtn: { tr: 'Devam et →', en: 'Continue →' },
  rowsHint: { tr: 'satır · her satırda sana en yakın olanı seç', en: 'rows · pick the option closest to you in each row' },
  back: { tr: 'Geri', en: 'Back' },
  nextSection: { tr: 'Sonraki bölüm →', en: 'Next section →' },
  seeProfile: { tr: 'Profili gör →', en: 'See profile →' },
  backToLast: { tr: '← son bölüme dön', en: '← back to last section' },
  restart: { tr: '↻ baştan başla', en: '↻ start over' },
  resultLabel: { tr: 'Kalibrasyon Sonucu', en: 'Calibration Result' },
  profileTitle: { tr: 'Enstrüman Profilin', en: 'Your Instrument Profile' },
  profileLead: { tr: 'Bu dört harita, sonraki modüllerde her egzersizi sessizce yönlendirir. Sen çalışmaya odaklanırsın; uyarlanma görünmez.', en: 'These four maps silently guide every exercise in later modules. You focus on the work; the adaptation stays invisible.' },
  ayna: { tr: 'Şu an seni böyle okuyoruz', en: 'This is how we read you now' },
  aynaCta: { tr: 'Bir karakterle tanış →', en: 'Meet a character →' },
  skillCardTitle: { tr: 'Beceri Haritası · 7 Beceri Alanı', en: 'Skill Map · 7 Skill Areas' },
  skillCardDesc: { tr: 'Öz-değerlendirme haritan (1–7). Bir yargı değil, içgörü pusulan — dönemsel olarak tekrar edilir.', en: 'Your self-assessment map (1–7). Not a verdict but an insight compass — repeated periodically.' },
  vakCardTitle: { tr: 'Öğrenme Stili · VAK', en: 'Learning Style · VAK' },
  vakDominant: { tr: 'Baskın kanalın:', en: 'Your dominant channel:' },
  vakCardDesc: { tr: 'Antrenmanların derinleşme adımı bu kanaldan kurulur.', en: 'The deepening step of your training is built through this channel.' },
  mbtiCardTitle: { tr: 'Yaratıcı Yetenekler · MBTI', en: 'Creative Talents · MBTI' },
  mbtiCardDesc: { tr: 'Bu profil senin "varsayılan ayarın". Karakter inşasında gerçek iş, kendi profilinle karakterinki arasındaki mesafeyi görmektir — Karakter-Oyuncu Gap\'i.', en: 'This profile is your "default setting." In character-building, the real work is seeing the distance between your own profile and the character\'s — the Character–Actor Gap.' },
  pankCardTitle: { tr: 'Duygu Haritası · Panksepp', en: 'Emotion Map · Panksepp' },
  pankCardDesc: { tr: 'Altı duygusal sistemin profili — bir mizaç haritası, bir teşhis değil. Karaktere hangi duygusal kapıdan girdiğini anlamana yardım eder.', en: 'A profile of your six emotional systems — a temperament map, not a diagnosis. It helps you see which emotional door you enter a character through.' },
  saving: { tr: 'Kaydediliyor…', en: 'Saving…' },
  saveError: { tr: 'Kayıt sırasında bir hata oldu. Lütfen tekrar dene.', en: 'There was an error saving. Please try again.' },
  // IMZA: S1-KALIB-01 — anonim tamamlama + giriş çağrısı metinleri
  kayitOturumYok: { tr: 'Kalibrasyonun tamamlandı. Kaydetmek için giriş yapmalısın — cevapların bu cihazda seni bekliyor.', en: 'Your calibration is complete. Sign in to save it — your answers are waiting on this device.' },
  girisYap: { tr: 'Giriş yap →', en: 'Sign in →' },
  // IMZA: S3-KALIB-08 — sayfalama metinleri
  page: { tr: 'Sayfa', en: 'Page' },
  nextPage: { tr: 'Sonraki sayfa →', en: 'Next page →' },
  // IMZA: S4-KALIB-12 — eksen sayfalaması metinleri
  axis: { tr: 'Eksen', en: 'Axis' },
  nextAxis: { tr: 'Sonraki eksen →', en: 'Next axis →' },
};

/* ─── SCORING ─────────────────────────────────────────────────── */
function scoreVAK(ans) {
  const out = {};
  for (const [g, idx] of Object.entries(VAK_GROUPS)) out[g] = idx.reduce((s, i) => s + (ans[i - 1] ?? 0), 0);
  const dom = Object.entries(out).sort((a, b) => b[1] - a[1])[0][0];
  return { scores: out, dominant: dom, max: 40 };
}
function scoreSkills(ans) {
  const out = {};
  for (const [g, idx] of Object.entries(SKILLS_GROUPS)) out[g] = idx.reduce((s, i) => s + (ans[i - 1] ?? 0), 0) / idx.length;
  return { scores: out, max: 7 };
}
function scorePanksepp(ans) {
  const out = {};
  for (const [g, idx] of Object.entries(PANK_GROUPS)) {
    let sum = 0;
    idx.forEach((i) => { const raw = ans[i - 1] ?? 0; if (!raw) return; sum += PANK_REVERSED.has(i) ? 6 - raw : raw; });
    out[g] = { sum, norm: Math.round((sum / (idx.length * 5)) * 100) };
  }
  return { scores: out };
}
function scoreMBTI(picks) {
  let code = ''; const detail = {};
  MBTI_AXES.forEach((ax) => {
    const arr = picks[ax.key] || [];
    const right = arr.filter((x) => x === 1).length;
    const left = arr.filter((x) => x === 0).length;
    const letter = left >= right ? ax.left : ax.right;
    code += letter; detail[ax.key] = { left, right, letter };
  });
  return { code, archetype: MBTI_ARCHETYPES[code] || { tr: '—', en: '—' }, detail };
}

/* ─── UI parçaları ────────────────────────────────────────────── */

const serif = 'var(--font-display), serif';
const body = 'var(--font-body), sans-serif';

function Etiket({ children }) {
  // Tasarim Dili Faz 4: Etiket weight 500 -> 600 (Faz 1 ile tutarli).
  return <div style={{ fontFamily: body, fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.7rem' }}>{children}</div>;
}

function Cubuk({ etiket, deger, max, renk, son }) {
  const pct = Math.max(2, Math.round((deger / max) * 100));
  const gosterim = typeof deger === 'number' ? deger.toFixed(deger % 1 ? 1 : 0) : deger;
  return (
    <div style={{ marginBottom: '1.05rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.3rem' }}>
        <span style={{ fontFamily: body, fontWeight: 400, fontSize: '1.02rem', color: 'var(--ink)' }}>{etiket}</span>
        <span style={{ fontFamily: body, fontWeight: 500, fontSize: '0.82rem', color: 'var(--ink-soft)' }}>{gosterim}{son || ''}</span>
      </div>
      <div style={{ height: 7, background: 'var(--bg-elevated)', borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ width: pct + '%', height: '100%', background: renk, borderRadius: 6, transition: 'width .9s cubic-bezier(.2,.8,.2,1)' }} />
      </div>
    </div>
  );
}

function OlcekSatiri({ n, text, scale, value, onPick, compact, lang }) {
  return (
    <div style={{ padding: '1.1rem 0', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ display: 'flex', gap: '0.7rem', marginBottom: '0.7rem' }}>
        <span style={{ fontFamily: body, fontWeight: 500, fontSize: '0.8rem', color: 'var(--accent-soft)', minWidth: 22 }}>{n}.</span>
        <span style={{ fontFamily: body, fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.45, color: 'var(--ink)' }}>{text}</span>
      </div>
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', paddingLeft: 29 }}>
        {scale.map((s) => {
          const on = value === s.val;
          return (
            <button key={s.val} onClick={() => onPick(s.val)} style={{
              cursor: 'pointer',
              border: `1px solid ${on ? 'var(--accent)' : 'var(--rule)'}`,
              background: on ? 'var(--accent)' : 'transparent',
              color: on ? 'var(--bg-base)' : 'var(--ink-soft)',
              borderRadius: 999,
              padding: compact ? '0.32rem 0.7rem' : '0.38rem 0.85rem',
              fontFamily: body,
              fontWeight: 400,
              fontSize: compact ? '0.8rem' : '0.86rem',
              transition: 'all .15s',
            }}>{tx(s, lang)}</button>
          );
        })}
      </div>
    </div>
  );
}

function NefesArasi({ lang, onDevam }) {
  // İki kategori arası kısa bir nefes anı (Karar 40 — uzun bölümlerde yorgunluk azaltma).
  // TopraklanmaModu tam-ekran overlay; NefesArasi sayfa içinde inline kart.
  return (
    <>
      <style jsx>{`
        @keyframes itc-nefes-mini {
          0%, 100% { transform: scale(0.88); opacity: 0.55; }
          50%      { transform: scale(1.08); opacity: 0.95; }
        }
      `}</style>
      <div style={{
        border: '1px solid var(--rule)',
        background: 'var(--bg-elevated)',
        borderRadius: 12,
        padding: '2.5rem 1.6rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.4rem',
        margin: '2rem 0',
      }}>
        <div style={{ position: 'relative', width: 90, height: 90 }}>
          <span aria-hidden style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid var(--accent)', animation: 'itc-nefes-mini 6s ease-in-out infinite' }} />
          <span aria-hidden style={{ position: 'absolute', inset: '20%', borderRadius: '50%', backgroundColor: 'var(--accent)', opacity: 0.3, animation: 'itc-nefes-mini 6s ease-in-out infinite' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: 360 }}>
          <span style={{ fontFamily: body, fontWeight: 500, fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>{tx(UI.breathLabel, lang)}</span>
          <p style={{ fontFamily: serif, fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--ink)', margin: 0, lineHeight: 1.5 }}>{tx(UI.breathLead, lang)}</p>
          <p style={{ fontFamily: body, fontWeight: 400, fontSize: '0.85rem', color: 'var(--ink-soft)', margin: 0 }}>{tx(UI.breathSub, lang)}</p>
        </div>
        <button onClick={onDevam} style={cta}>{tx(UI.breathBtn, lang)}</button>
      </div>
    </>
  );
}

function ListeTesti({ items, groups, scale, answers, setAnswers, compact, lang }) {
  // groups verildiyse adımlı (kategori-kategori) mod, aksi halde SAYFALI liste.
  // Adımlı modda: oyuncu "37/31" baskısı görmez; her kategori sıfırdan numaralanır.
  // IMZA: S3-KALIB-10 — kategori-arası nefes KALDIRILDI; nefes artık bölüm
  // aralarında (Karar 40 revizyonu — Beyti, 11 Haz 2026). Mobil yorgunluğu
  // için groups'suz mod 8'erli sayfalara bölündü (S3-KALIB-09).
  const [katIdx, setKatIdx] = useState(0);
  const [sayfaIdx, setSayfaIdx] = useState(0);

  if (!groups) {
    // IMZA: S3-KALIB-09 — VAK (24 madde): mobilde tek uzun liste yorucuydu;
    // 8'erli sayfalara bölündü. Madde SIRASI ve içerik aynen korunur — yalnız
    // sunum sayfalanır (psikometrik içerik değişmedi). Kategori adı bilinçli
    // GÖSTERİLMİYOR (yanıt yanlılığı olmasın). Filiz'e bilgi notu düşülecek.
    const SAYFA_BOYU = 8;
    const sayfaSayisi = Math.ceil(items.length / SAYFA_BOYU);
    const guvenliIdx = Math.min(sayfaIdx, sayfaSayisi - 1);
    const sonSayfa = guvenliIdx === sayfaSayisi - 1;
    const bas = guvenliIdx * SAYFA_BOYU;
    const done = answers.filter((a) => a != null).length;
    return (
      <div>
        <div style={{ position: 'sticky', top: 56, zIndex: 5, background: 'var(--bg-base)', padding: '0.6rem 0 0.9rem', borderBottom: '2px solid var(--ink)' }}>
          <div style={{ fontFamily: body, fontWeight: 400, fontSize: '0.9rem', color: 'var(--ink-soft)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ color: 'var(--accent)', fontWeight: 500 }}>{tx(UI.page, lang)} {guvenliIdx + 1} / {sayfaSayisi}</span>
            <span>{done} / {items.length} {tx(UI.answered, lang)}</span>
          </div>
          <div style={{ height: 4, background: 'var(--bg-elevated)', borderRadius: 4, marginTop: '0.4rem', overflow: 'hidden' }}>
            <div style={{ width: (done / items.length) * 100 + '%', height: '100%', background: 'var(--accent)', transition: 'width .9s cubic-bezier(.2,.8,.2,1)' }} />
          </div>
        </div>
        {items.slice(bas, bas + SAYFA_BOYU).map((t, j) => {
          const i = bas + j;
          return (
            <OlcekSatiri key={i} n={j + 1} text={tx(t, lang)} scale={scale} value={answers[i]} compact={compact} lang={lang}
              onPick={(v) => { const c = [...answers]; c[i] = v; setAnswers(c); }} />
          );
        })}
        {!sonSayfa && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button onClick={() => { setSayfaIdx(guvenliIdx + 1); if (typeof window !== 'undefined') window.scrollTo({ top: 200, behavior: 'smooth' }); }} style={cta}>{tx(UI.nextPage, lang)}</button>
          </div>
        )}
      </div>
    );
  }

  // Adımlı (kategori) mod — Beceri (7 kategori) ve Panksepp (6 kategori).
  const groupKeys = Object.keys(groups);
  const aktifKat = groupKeys[katIdx];
  const aktifIndices = groups[aktifKat]; // [2, 4, 11, ...] (1-indexed item nolari)
  const yanitlanan = aktifIndices.filter((i) => answers[i - 1] != null).length;
  const toplamKat = aktifIndices.length;
  const sonKategori = katIdx === groupKeys.length - 1;

  return (
    <div>
      <div style={{ position: 'sticky', top: 56, zIndex: 5, background: 'var(--bg-base)', padding: '0.6rem 0 0.9rem', borderBottom: '2px solid var(--ink)' }}>
        <div style={{ fontFamily: body, fontWeight: 400, fontSize: '0.9rem', color: 'var(--ink-soft)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span>
            <span style={{ color: 'var(--accent)', fontWeight: 500 }}>{tx(UI.category, lang)} {katIdx + 1} / {groupKeys.length}</span>
            {' · '}
            <span style={{ color: 'var(--ink)' }}>{glabel(aktifKat, lang)}</span>
          </span>
          <span>{yanitlanan} / {toplamKat} {tx(UI.answered, lang)}</span>
        </div>
      </div>
      {aktifIndices.map((origNo, displayIdx) => {
        const i = origNo - 1;
        return (
          <OlcekSatiri key={i} n={displayIdx + 1} text={tx(items[i], lang)} scale={scale} value={answers[i]} compact={compact} lang={lang}
            onPick={(v) => { const c = [...answers]; c[i] = v; setAnswers(c); }} />
        );
      })}
      {!sonKategori && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button onClick={() => { setKatIdx(katIdx + 1); if (typeof window !== 'undefined') window.scrollTo({ top: 200, behavior: 'smooth' }); }} style={cta}>{tx(UI.nextCategory, lang)}</button>{/* IMZA: S3-KALIB-10 (nefessiz kategori geçişi) */}
        </div>
      )}
    </div>
  );
}

function MBTITesti({ picks, setPicks, lang }) {
  // IMZA: S4-KALIB-12 — 63 ikili seçim tek sayfada yorucuydu; Beceri/Panksepp
  // kategori deseninin aynısıyla EKSEN EKSEN sayfalandı (4 eksen). Satır
  // sırası ve içerik birebir korunur — yalnız sunum sayfalanır
  // (psikometrik içerik değişmedi).
  const [eksenIdx, setEksenIdx] = useState(0);
  const guvenliEksen = Math.min(eksenIdx, MBTI_AXES.length - 1);
  const sonEksen = guvenliEksen === MBTI_AXES.length - 1;
  const aktif = MBTI_AXES[guvenliEksen];
  const eksenSecilen = (picks[aktif.key] || []).filter((x) => x != null).length;
  return (
    <div>
      <div style={{ position: 'sticky', top: 56, zIndex: 5, background: 'var(--bg-base)', padding: '0.6rem 0 0.9rem', borderBottom: '2px solid var(--ink)' }}>
        <div style={{ fontFamily: body, fontWeight: 400, fontSize: '0.9rem', color: 'var(--ink-soft)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ color: 'var(--accent)', fontWeight: 500 }}>{tx(UI.axis, lang)} {guvenliEksen + 1} / {MBTI_AXES.length}</span>
          <span>{eksenSecilen} / {aktif.rows.length} {tx(UI.answered, lang)}</span>
        </div>
      </div>
      {[aktif].map((ax) => (
        <div key={ax.key} style={{ marginTop: '1.8rem' }}>
          <Etiket>{tx(ax.title, lang)}</Etiket>
          <div style={{ display: 'flex', gap: '0.5rem', margin: '0.2rem 0 0.9rem', fontFamily: body, fontWeight: 500, fontSize: '0.8rem', color: 'var(--ink-soft)' }}>
            <span style={{ flex: 1 }}>← {tx(ax.leftHead, lang)}</span>
            <span style={{ flex: 1, textAlign: 'right' }}>{tx(ax.rightHead, lang)} →</span>
          </div>
          {ax.rows.map((row, i) => {
            const cur = (picks[ax.key] || [])[i];
            const set = (side) => { const c = { ...picks, [ax.key]: [...(picks[ax.key] || [])] }; c[ax.key][i] = side; setPicks(c); };
            const cells = [row.l, row.r];
            return (
              <div key={i} style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem 0', borderBottom: '1px solid var(--rule)' }}>
                {[0, 1].map((side) => {
                  const on = cur === side;
                  return (
                    <button key={side} onClick={() => set(side)} style={{
                      flex: 1,
                      textAlign: side ? 'right' : 'left',
                      cursor: 'pointer',
                      border: `1px solid ${on ? 'var(--accent)' : 'var(--rule)'}`,
                      background: on ? 'var(--accent-bg-deep)' : 'transparent',
                      borderLeft: on && side === 0 ? '3px solid var(--accent)' : `1px solid ${on ? 'var(--accent)' : 'var(--rule)'}`,
                      borderRight: on && side === 1 ? '3px solid var(--accent)' : `1px solid ${on ? 'var(--accent)' : 'var(--rule)'}`,
                      borderRadius: 8,
                      padding: '0.55rem 0.7rem',
                      fontFamily: body,
                      fontWeight: 400,
                      fontSize: '0.92rem',
                      lineHeight: 1.35,
                      color: on ? 'var(--ink)' : 'var(--ink-soft)',
                      transition: 'all .15s',
                    }}>{tx(cells[side], lang)}</button>
                  );
                })}
              </div>
            );
          })}
        </div>
      ))}
      {!sonEksen && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button onClick={() => { setEksenIdx(guvenliEksen + 1); if (typeof window !== 'undefined') window.scrollTo({ top: 200, behavior: 'smooth' }); }} style={cta}>{tx(UI.nextAxis, lang)}</button>
        </div>
      )}
    </div>
  );
}

/* ─── INTAKE ──────────────────────────────────────────────────── */

const EDU = { tr: ['Lise', 'Üniversite', 'Yüksek Lisans', 'Doktora'], en: ['High School', 'University', 'Masters', 'Doctorate'] };
const EXP = { tr: ['Yok', '1-2 yıl', '3-5 yıl', '5-10 yıl', '10-15 yıl', '15+ yıl'], en: ['None', '1-2 yrs', '3-5 yrs', '5-10 yrs', '10-15 yrs', '15+ yrs'] };
const AREAS = { tr: ['Tiyatro', 'Sinema', 'Televizyon', 'Seslendirme', 'Diğer'], en: ['Theatre', 'Film', 'Television', 'Voice Acting', 'Other'] };
const INTAKE_T = {
  name: { tr: 'Ad / Sahne Adı', en: 'Name / Stage Name' },
  country: { tr: 'Ülke', en: 'Country' }, city: { tr: 'Şehir', en: 'City' },
  edu: { tr: 'Eğitim Düzeyi', en: 'Education Level' }, exp: { tr: 'Oyunculuk Deneyimi', en: 'Acting Experience' },
  areas: { tr: 'Deneyim Alanları (çoklu)', en: 'Areas of Experience (multi)' },
  fav: { tr: 'Kariyerindeki en sevdiğin rol ve nedeni', en: 'Your favorite role and why' },
  favPh: { tr: 'Açık uçlu — 500 kelimeye kadar', en: 'Open-ended — up to 500 words' },
};

function Chip({ on, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      cursor: 'pointer',
      border: `1px solid ${on ? 'var(--accent)' : 'var(--rule)'}`,
      background: on ? 'var(--accent)' : 'transparent',
      color: on ? 'var(--bg-base)' : 'var(--ink-soft)',
      borderRadius: 999,
      padding: '0.42rem 0.9rem',
      fontFamily: body,
      fontWeight: 400,
      fontSize: '0.9rem',
      transition: 'all .15s',
    }}>{children}</button>
  );
}

function Intake({ data, setData, lang }) {
  const set = (k, v) => setData({ ...data, [k]: v });
  const toggle = (k, v) => { const a = data[k] || []; set(k, a.includes(v) ? a.filter((x) => x !== v) : [...a, v]); };
  const field = { fontFamily: body, fontWeight: 400, fontSize: '1rem', color: 'var(--ink)', background: 'var(--bg-base)', border: '1px solid var(--rule)', borderRadius: 8, padding: '0.6rem 0.8rem', width: '100%' };
  return (
    <div style={{ display: 'grid', gap: '1.4rem' }}>
      <div><Etiket>{tx(INTAKE_T.name, lang)}</Etiket><input style={field} value={data.name || ''} onChange={(e) => set('name', e.target.value)} placeholder="…" /></div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 140 }}><Etiket>{tx(INTAKE_T.country, lang)}</Etiket><input style={field} value={data.country || ''} onChange={(e) => set('country', e.target.value)} /></div>
        <div style={{ flex: 1, minWidth: 140 }}><Etiket>{tx(INTAKE_T.city, lang)}</Etiket><input style={field} value={data.city || ''} onChange={(e) => set('city', e.target.value)} /></div>
      </div>
      <div><Etiket>{tx(INTAKE_T.edu, lang)}</Etiket><div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>{EDU[lang].map((e) => <Chip key={e} on={data.edu === e} onClick={() => set('edu', e)}>{e}</Chip>)}</div></div>
      <div><Etiket>{tx(INTAKE_T.exp, lang)}</Etiket><div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>{EXP[lang].map((e) => <Chip key={e} on={data.exp === e} onClick={() => set('exp', e)}>{e}</Chip>)}</div></div>
      <div><Etiket>{tx(INTAKE_T.areas, lang)}</Etiket><div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>{AREAS[lang].map((a) => <Chip key={a} on={(data.areas || []).includes(a)} onClick={() => toggle('areas', a)}>{a}</Chip>)}</div></div>
      <div><Etiket>{tx(INTAKE_T.fav, lang)}</Etiket><textarea style={{ ...field, minHeight: 90, resize: 'vertical' }} value={data.favRole || ''} onChange={(e) => set('favRole', e.target.value)} placeholder={tx(INTAKE_T.favPh, lang)} /></div>
    </div>
  );
}

/* ─── PROFILE ─────────────────────────────────────────────────── */

const COLORS = ['var(--accent)', 'var(--accent-soft)', 'var(--kanal-1)', 'var(--kanal-4)', 'var(--kanal-3)', 'var(--kanal-2)', 'var(--kanal-5)'];

function Kart({ children }) {
  return <div style={{ border: '1px solid var(--rule)', borderRadius: 12, padding: '1.5rem 1.6rem', background: 'var(--bg-elevated)' }}>{children}</div>;
}

// Yansıtıcı Ayna — oyuncunun seçimlerinden türetilmiş 2-3 satır (Karar 40 İŞ 2).
// "Metot görünmez" (Spine §3 ilke 3): puan/tip/grafik göstermez, mekanizma
// açıklamaz ("VAK'ta görsel çıktın" yasak). Oyuncu-yüzü, niteliksel.
// Substitution yok: hiçbir cümle oyuncuyu kendi anısına çekmez.
const AYNA_VAK = {
  'Görsel':     { tr: 'Bir sahneye önce gözünle yaklaşıyorsun — imge, renk, mekân.',           en: 'You approach a scene first with your eyes — image, color, space.' },
  'İşitsel':    { tr: 'Bir sahnenin sesini önce duyuyorsun — ritim, ton, repliğin nefesi.',    en: "You first hear a scene's sound — rhythm, tone, the breath of a line." },
  'Kinestetik': { tr: 'Bir karaktere önce bedenden uzanıyorsun — duruş, ağırlık, dokunuş.',    en: 'You reach a character through the body first — posture, weight, touch.' },
};
const AYNA_PANK = {
  'Oyun · Play':     { tr: 'Oyun seni canlı tutuyor; ağır olanı bile hafifletmeye eğilimlisin.',           en: 'Play keeps you alive; you tend to lighten even what is heavy.' },
  'Öfke · Anger':    { tr: 'Bir şey eğri olduğunda hızlı tepki veriyorsun — bu enerji sahnede patlar.',    en: 'When something is off you respond quickly — that energy bursts on stage.' },
  'Arayış · Seek':   { tr: 'Bilmek senin için bir motor; karakterin nedenlerini eşelemeyi seviyorsun.',    en: "Knowing is your engine; you like digging into a character's reasons." },
  'Şefkat · Care':   { tr: 'Bağ kurmak ve korumak senin için kolay — karaktere şefkatten girersin.',       en: 'Bonding and protecting come easily — you enter a character through tenderness.' },
  'Korku · Fear':    { tr: 'Kaygıyı yakından tanıyorsun; sahnede kırılganlık dilini biliyorsun.',          en: 'You know anxiety up close; you understand the language of vulnerability on stage.' },
  'Hüzün · Sadness': { tr: 'Hüzünle ilişkin sahici; karakterin yas anlarına yaklaşabiliyorsun.',           en: "Your relationship with sadness is honest; you can approach a character's grief." },
};
const AYNA_BECERI = {
  'Mesleki Güven': { tr: 'Sahnede kendine olan güvenin görünür.',                en: 'Your confidence on stage is visible.' },
  'Teknik':        { tr: 'Tekniğe yatırım yaptığın belli.',                      en: 'Your investment in craft is clear.' },
  'Zihinsel':      { tr: 'Odak ve hafıza senin için araç değil, alışkanlık.',    en: 'Focus and memory are not tools for you but habits.' },
  'Duygusal':      { tr: 'Duyguları açmak sende kolay.',                          en: 'Opening emotions comes easily to you.' },
  'Motivasyonel':  { tr: 'Mesleğine bağlılığın belirgin.',                        en: 'Your commitment to the craft is evident.' },
  'Rahatlama':     { tr: 'Bedeni gevşetmek alışkanlığın olmuş.',                  en: 'Letting the body settle has become a habit.' },
  'İlişkisel':     { tr: 'Sahnede dinlemek ve karşılık vermek doğan.',            en: 'Listening and responding on stage come naturally.' },
};

/* ─── DE dil katmani (index-bazli mutasyon merge) ─────────────────
   TR/EN inline verilerine ".de" alanlari eklenir; const referanslar
   ayni kalir, sadece ic alanlar genisler. Side-effect modul-yuklemede
   bir kez calisir. */
(function mergeKalibrasyonDE() {
  VAK_ITEMS.forEach((o, i) => { o.de = KDE.VAK_DE[i]; });
  VAK_SCALE.forEach((o, i) => { o.de = KDE.VAK_SCALE_DE[i]; });
  SKILLS_ITEMS.forEach((o, i) => { o.de = KDE.SKILLS_DE[i]; });
  PANK_ITEMS.forEach((o, i) => { o.de = KDE.PANK_DE[i]; });
  PANK_SCALE.forEach((o, i) => { o.de = KDE.PANK_SCALE_DE[i]; });
  Object.keys(GROUP_LABELS).forEach((k) => {
    if (KDE.GROUP_LABELS_DE[k]) GROUP_LABELS[k].de = KDE.GROUP_LABELS_DE[k];
  });
  MBTI_AXES.forEach((ax) => {
    const d = KDE.MBTI_DE[ax.key];
    if (!d) return;
    ax.title.de = d.title;
    ax.leftHead.de = d.leftHead;
    ax.rightHead.de = d.rightHead;
    ax.rows.forEach((r, i) => {
      const pair = d.rows[i];
      if (!pair) return;
      r.l.de = pair[0];
      r.r.de = pair[1];
    });
  });
  Object.keys(MBTI_ARCHETYPES).forEach((k) => {
    if (KDE.MBTI_ARCH_DE[k]) MBTI_ARCHETYPES[k].de = KDE.MBTI_ARCH_DE[k];
  });
  FLOW.forEach((f) => {
    const d = KDE.FLOW_DE[f.key];
    if (!d) return;
    f.title.de = d.title;
    f.sub.de = d.sub;
    f.intro.de = d.intro;
  });
  Object.keys(UI).forEach((k) => {
    if (typeof UI[k] === 'object' && UI[k] !== null && KDE.UI_DE[k]) UI[k].de = KDE.UI_DE[k];
  });
  EDU.de = KDE.EDU_DE;
  EXP.de = KDE.EXP_DE;
  AREAS.de = KDE.AREAS_DE;
  Object.keys(INTAKE_T).forEach((k) => {
    if (KDE.INTAKE_DE[k]) INTAKE_T[k].de = KDE.INTAKE_DE[k];
  });
  Object.keys(AYNA_VAK).forEach((k) => {
    if (KDE.AYNA_VAK_DE[k]) AYNA_VAK[k].de = KDE.AYNA_VAK_DE[k];
  });
  Object.keys(AYNA_PANK).forEach((k) => {
    if (KDE.AYNA_PANK_DE[k]) AYNA_PANK[k].de = KDE.AYNA_PANK_DE[k];
  });
  Object.keys(AYNA_BECERI).forEach((k) => {
    if (KDE.AYNA_BECERI_DE[k]) AYNA_BECERI[k].de = KDE.AYNA_BECERI_DE[k];
  });
})();

function aynaCumleleri(vak, pank, skills, lang) {
  const out = [];
  if (vak?.dominant && AYNA_VAK[vak.dominant]) out.push(tx(AYNA_VAK[vak.dominant], lang));
  if (pank?.scores) {
    const en = Object.entries(pank.scores).sort((a, b) => (b[1]?.norm ?? 0) - (a[1]?.norm ?? 0))[0]?.[0];
    if (en && AYNA_PANK[en] && (pank.scores[en]?.norm ?? 0) > 0) out.push(tx(AYNA_PANK[en], lang));
  }
  if (skills?.scores) {
    const en = Object.entries(skills.scores).sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0))[0]?.[0];
    if (en && AYNA_BECERI[en] && (skills.scores[en] ?? 0) > 0) out.push(tx(AYNA_BECERI[en], lang));
  }
  return out;
}

function Ayna({ vak, pank, skills, lang, onCta }) {
  const cumleler = aynaCumleleri(vak, pank, skills, lang);
  if (cumleler.length === 0) return null;
  return (
    <div style={{
      border: '1px solid var(--accent)',
      borderRadius: 12,
      padding: '1.8rem 1.6rem',
      background: 'var(--accent-bg)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.1rem',
    }}>
      <Etiket>{tx(UI.ayna, lang)}</Etiket>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {cumleler.map((c, i) => (
          <p key={i} style={{
            fontFamily: serif,
            fontStyle: 'italic',
            fontSize: '1.15rem',
            lineHeight: 1.55,
            color: 'var(--ink)',
            margin: 0,
          }}>{c}</p>
        ))}
      </div>
      <button onClick={onCta} style={{ ...cta, alignSelf: 'flex-start', marginTop: '0.4rem' }}>{tx(UI.aynaCta, lang)}</button>
    </div>
  );
}

function Profile({ vak, mbti, skills, pank, lang, onAynaCta }) {
  return (
    <div style={{ display: 'grid', gap: '2.4rem' }}>
      <div style={{ textAlign: 'center' }}>
        <Etiket>{tx(UI.resultLabel, lang)}</Etiket>
        <h2 style={{ fontFamily: serif, fontWeight: 500, fontStyle: 'italic', fontSize: '2.1rem', color: 'var(--ink)', margin: '0.2rem 0' }}>{tx(UI.profileTitle, lang)}</h2>
        <p style={{ fontFamily: body, fontWeight: 400, fontSize: '1rem', lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 560, margin: '0 auto' }}>{tx(UI.profileLead, lang)}</p>
      </div>

      <Ayna vak={vak} pank={pank} skills={skills} lang={lang} onCta={onAynaCta} />

      <Kart>
        <Etiket>{tx(UI.skillCardTitle, lang)}</Etiket>
        <p style={{ fontFamily: body, fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.5, color: 'var(--ink-soft)', marginTop: 0 }}>{tx(UI.skillCardDesc, lang)}</p>
        {Object.entries(skills.scores).sort((a, b) => b[1] - a[1]).map(([g, v], i) => (
          <Cubuk key={g} etiket={glabel(g, lang)} deger={v} max={skills.max} renk={COLORS[i % COLORS.length]} son=" / 7" />
        ))}
      </Kart>

      <Kart>
        <Etiket>{tx(UI.vakCardTitle, lang)}</Etiket>
        <p style={{ fontFamily: body, fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.5, color: 'var(--ink)', marginTop: 0 }}>
          {tx(UI.vakDominant, lang)} <strong style={{ color: 'var(--accent)' }}>{glabel(vak.dominant, lang)}</strong>. {tx(UI.vakCardDesc, lang)}
        </p>
        {Object.entries(vak.scores).map(([g, v], i) => (
          <Cubuk key={g} etiket={glabel(g, lang)} deger={v} max={vak.max} renk={COLORS[i % COLORS.length]} son={` / ${vak.max}`} />
        ))}
      </Kart>

      <Kart>
        <Etiket>{tx(UI.mbtiCardTitle, lang)}</Etiket>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: serif, fontWeight: 500, fontSize: '2.6rem', letterSpacing: '0.1em', color: 'var(--accent)' }}>{mbti.code}</span>
          <span style={{ fontFamily: serif, fontStyle: 'italic', fontWeight: 400, fontSize: '1.3rem', color: 'var(--ink)' }}>{tx(mbti.archetype, lang)}</span>
        </div>
        <p style={{ fontFamily: body, fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.5, color: 'var(--ink-soft)' }}>{tx(UI.mbtiCardDesc, lang)}</p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', fontFamily: body, fontWeight: 400, fontSize: '0.82rem', color: 'var(--ink-soft)' }}>
          {MBTI_AXES.map((ax) => (
            <span key={ax.key} style={{ border: '1px solid var(--rule)', borderRadius: 6, padding: '0.25rem 0.55rem' }}>
              {ax.left} {mbti.detail[ax.key].left} · {mbti.detail[ax.key].right} {ax.right}
            </span>
          ))}
        </div>
      </Kart>

      <Kart>
        <Etiket>{tx(UI.pankCardTitle, lang)}</Etiket>
        <p style={{ fontFamily: body, fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.5, color: 'var(--ink-soft)', marginTop: 0 }}>{tx(UI.pankCardDesc, lang)}</p>
        {Object.entries(pank.scores).map(([g, o], i) => (
          <Cubuk key={g} etiket={g} deger={o.norm} max={100} renk={COLORS[i % COLORS.length]} son="%" />
        ))}
      </Kart>
    </div>
  );
}

/* ─── APP ─────────────────────────────────────────────────────── */

const backBtn = { cursor: 'pointer', border: 'none', background: 'none', color: 'var(--ink-soft)', fontFamily: body, fontWeight: 400, fontSize: '0.9rem', padding: 0 };
const cta = { cursor: 'pointer', border: '1px solid var(--ink)', background: 'var(--ink)', color: 'var(--bg-base)', borderRadius: 999, padding: '0.7rem 1.8rem', fontFamily: body, fontWeight: 400, fontSize: '1rem' };
const ctaDisabled = { ...cta, opacity: 0.5, cursor: 'not-allowed' };

export default function KalibrasyonSayfasi() {
  const router = useRouter();
  // Dil global DilToggle (Navigasyon) ile senkron — kopya nav kaldirildi.
  const { dil: lang } = useDil();
  const [pos, setPos] = useState(1);
  const [intake, setIntake] = useState({});
  const [vakA, setVakA] = useState(Array(24).fill(null));
  const [skillA, setSkillA] = useState(Array(37).fill(null));
  const [pankA, setPankA] = useState(Array(33).fill(null));
  const [picks, setPicks] = useState({});
  const [kayitDurumu, setKayitDurumu] = useState(null); // null | 'kaydediliyor' | 'hata' | 'oturum-yok'
  // IMZA: S3-KALIB-11 — nefes araları bölüm GEÇİŞLERİNDE (kategori aralarından taşındı).
  const [bolumNefesi, setBolumNefesi] = useState(false);

  // IMZA: S1-KALIB-02 — Taslak kalıcılığı (localStorage).
  // Her cevap cihaza yazılır; yenileme/geri dönüşte kaldığı bölümden devam.
  // Başarılı Supabase kaydında taslak silinir. Şekil migrate-hazır: HAM
  // cevaplar saklanır, skorlar geri yüklemede yeniden hesaplanır.
  const TASLAK_KEY = 'itc-kalibrasyon-taslak';
  const [taslakHazir, setTaslakHazir] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(TASLAK_KEY);
      if (raw) {
        const d = JSON.parse(raw);
        if (d && d.surum === 1) {
          if (d.intake && typeof d.intake === 'object') setIntake(d.intake);
          if (Array.isArray(d.vakA) && d.vakA.length === 24) setVakA(d.vakA);
          if (Array.isArray(d.skillA) && d.skillA.length === 37) setSkillA(d.skillA);
          if (Array.isArray(d.pankA) && d.pankA.length === 33) setPankA(d.pankA);
          if (d.picks && typeof d.picks === 'object') setPicks(d.picks);
          if (Number.isInteger(d.pos) && d.pos >= 1 && d.pos <= FLOW.length) setPos(d.pos);
        }
      }
    } catch (e) {}
    setTaslakHazir(true);
  }, []);

  useEffect(() => {
    if (!taslakHazir) return;
    try {
      localStorage.setItem(TASLAK_KEY, JSON.stringify({
        surum: 1, pos, intake, vakA, skillA, pankA, picks,
        guncelleme: new Date().toISOString(),
      }));
    } catch (e) {}
  }, [taslakHazir, pos, intake, vakA, skillA, pankA, picks]);

  const vakRes = useMemo(() => scoreVAK(vakA), [vakA]);
  const skillRes = useMemo(() => scoreSkills(skillA), [skillA]);
  const pankRes = useMemo(() => scorePanksepp(pankA), [pankA]);
  const mbtiRes = useMemo(() => scoreMBTI(picks), [picks]);

  const go = (p) => { setPos(p); if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const inner = { maxWidth: 720, margin: '0 auto', padding: '2rem 1.4rem 5rem' };
  const section = pos >= 1 && pos <= FLOW.length ? FLOW[pos - 1] : null;
  const skillsScale = [1, 2, 3, 4, 5, 6, 7].map((v) => ({ val: v, tr: String(v), en: String(v) }));

  // Son bölümün CTA tıklaması: önce kalibrasyonKaydet, başarılıysa Profile göster.
  const profileGor = async () => {
    setKayitDurumu('kaydediliyor');
    try {
      await kalibrasyonKaydet({
        profil: intake,
        vak: vakRes,
        mbti: mbtiRes,
        beceri: skillRes,
        panksepp: pankRes,
      });
      setKayitDurumu(null);
      try { localStorage.removeItem(TASLAK_KEY); } catch (err) {} // IMZA: S1-KALIB-04
      go(FLOW.length + 1);
    } catch (e) {
      // IMZA: S1-KALIB-03 — oturum yoksa "kayıt hatası" değil, giriş çağrısı.
      if (e && e.message === 'Oturum yok') {
        setKayitDurumu('oturum-yok');
        return;
      }
      console.error('Kalibrasyon kayıt hatası:', e);
      setKayitDurumu('hata');
    }
  };

  // IMZA: S2-KALIB-07 — "baştan başla" artık cevapları VE cihaz taslağını sıfırlar.
  const bastanBasla = () => {
    setIntake({});
    setVakA(Array(24).fill(null));
    setSkillA(Array(37).fill(null));
    setPankA(Array(33).fill(null));
    setPicks({});
    setKayitDurumu(null);
    try { localStorage.removeItem(TASLAK_KEY); } catch (e) {}
    go(1);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)', color: 'var(--ink)', fontFamily: body }}>
      {/* Kopya nav kaldirildi: global components/Navigasyon.js layout.js'den
          render ediliyor (sticky + marka italik + mobil hamburger). */}

      <div style={inner}>
        {bolumNefesi && (
          <NefesArasi lang={lang} onDevam={() => { setBolumNefesi(false); go(pos + 1); }} />
        )}
        {section && !bolumNefesi && (
          <div>
            {section.welcome && (
              <div style={{ textAlign: 'center', marginBottom: '2.6rem' }}>
                <Etiket>{tx(UI.module, lang)}</Etiket>
                <h1 style={{ fontFamily: serif, fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(2rem,5.5vw,3rem)', color: 'var(--ink)', margin: '0.3rem 0 1.2rem', lineHeight: 1.05 }}>{tx(UI.heroTitle, lang)}</h1>
                <p style={{ fontFamily: body, fontWeight: 400, fontSize: '1.08rem', lineHeight: 1.7, color: 'var(--ink)', maxWidth: 540, margin: '0 auto' }}>{tx(section.intro, lang)}</p>
              </div>
            )}

            <Etiket>{tx(UI.section, lang)} {section.n} / {String(FLOW.length).padStart(2, '0')}</Etiket>{/* IMZA: S1-KALIB-05 — bölüm göstergesi */}
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontStyle: 'italic', fontSize: '2rem', color: 'var(--ink)', margin: '0.2rem 0 0.3rem' }}>{tx(section.title, lang)}</h2>
            <div style={{ fontFamily: body, fontWeight: 400, fontSize: '0.9rem', color: 'var(--ink-soft)', marginBottom: '1.1rem' }}>{tx(section.sub, lang)}</div>

            {!section.welcome && (
              <p style={{ fontFamily: body, fontWeight: 400, fontSize: '1rem', lineHeight: 1.6, color: 'var(--ink)', fontStyle: 'italic', borderLeft: '3px solid var(--accent-soft)', paddingLeft: '1rem', margin: '0 0 1.8rem' }}>{tx(section.intro, lang)}</p>
            )}
            {section.welcome && (
              <p style={{ fontFamily: body, fontWeight: 400, fontSize: '1rem', lineHeight: 1.6, color: 'var(--ink-soft)', margin: '0 0 1.8rem' }}>{tx(UI.basicsLead, lang)}</p>
            )}

            {section.key === 'basics' && <Intake data={intake} setData={setIntake} lang={lang} />}
            {section.key === 'skills' && <ListeTesti items={SKILLS_ITEMS} groups={SKILLS_GROUPS} scale={skillsScale} answers={skillA} setAnswers={setSkillA} compact lang={lang} />}
            {section.key === 'vak' && <ListeTesti items={VAK_ITEMS} scale={VAK_SCALE} answers={vakA} setAnswers={setVakA} lang={lang} />}
            {section.key === 'mbti' && <MBTITesti picks={picks} setPicks={setPicks} lang={lang} />}
            {section.key === 'pank' && <ListeTesti items={PANK_ITEMS} groups={PANK_GROUPS} scale={PANK_SCALE} answers={pankA} setAnswers={setPankA} compact lang={lang} />}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2.4rem', gap: '1rem' }}>
              {pos > 1 ? <button onClick={() => go(pos - 1)} style={backBtn}>← {tx(UI.back, lang)}</button> : <span />}
              {pos === FLOW.length ? (
                <button
                  onClick={profileGor}
                  disabled={kayitDurumu === 'kaydediliyor'}
                  style={kayitDurumu === 'kaydediliyor' ? ctaDisabled : cta}
                >
                  {kayitDurumu === 'kaydediliyor' ? tx(UI.saving, lang) : tx(UI.seeProfile, lang)}
                </button>
              ) : (
                <button onClick={() => setBolumNefesi(true) /* IMZA: S3-KALIB-11 (önce nefes) */} style={cta}>{tx(UI.nextSection, lang)}</button>
              )}
            </div>

            {kayitDurumu === 'hata' && (
              <p style={{ marginTop: '1rem', textAlign: 'center', fontFamily: body, fontWeight: 400, fontSize: '0.9rem', color: 'var(--uyari)' }}>{tx(UI.saveError, lang)}</p>
            )}
            {/* IMZA: S1-KALIB-06 — anonim tamamlama: emek korunur, giriş çağrısı */}
            {kayitDurumu === 'oturum-yok' && (
              <div style={{ marginTop: '1.2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.7rem', alignItems: 'center' }}>
                <p style={{ margin: 0, fontFamily: body, fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--ink)', maxWidth: 460 }}>{tx(UI.kayitOturumYok, lang)}</p>
                <a href={'/giris?geri=' + encodeURIComponent('/kalibrasyon')} style={{ fontFamily: body, fontWeight: 500, fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--accent)', padding: '0.7rem 1.4rem' }}>{tx(UI.girisYap, lang)}</a>
              </div>
            )}
          </div>
        )}

        {pos === FLOW.length + 1 && (
          <div>
            <button onClick={() => go(FLOW.length)} style={{ ...backBtn, marginBottom: '1.2rem', display: 'block' }}>{tx(UI.backToLast, lang)}</button>
            <Profile vak={vakRes} mbti={mbtiRes} skills={skillRes} pank={pankRes} lang={lang} onAynaCta={() => router.push('/antrenman/karakter')} />
            <div style={{ textAlign: 'center', marginTop: '2.4rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button onClick={bastanBasla} style={backBtn}>{tx(UI.restart, lang)}</button>{/* IMZA: S2-KALIB-07 (buton) */}
              <button onClick={() => router.push('/profil')} style={backBtn}>← /profil</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
