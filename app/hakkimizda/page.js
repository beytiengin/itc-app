// app/hakkimizda/page.js
// Marka sayfasi: ITC nedir, kim kurdu, 2005'ten bugune.
// Anasayfada bio kisaltildi - tam bio'lar burada.

'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// ─── Stil Objeleri (anasayfa pattern'i) ─────────────────────────────────────

const ustEtiketStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.6rem',
  fontWeight: 300,
  letterSpacing: '0.4em',
  textTransform: 'uppercase',
  color: 'var(--ink-muted)',
  marginBottom: '1rem',
};

const bolumBaslikStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: 'clamp(1.6rem, 3vw, 2rem)',
  color: 'var(--ink)',
  fontWeight: 300,
  margin: 0,
};

const ilkeKartiStili = {
  background: 'var(--bg-elevated)',
  border: '1px solid var(--rule)',
  padding: '2rem 1.8rem',
  transition: 'all 0.3s ease',
};

const ilkeNumarasiStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.3rem',
  color: 'var(--accent)',
  marginBottom: '0.8rem',
};

const ilkeBaslikStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.3rem',
  color: 'var(--ink)',
  fontWeight: 300,
  margin: '0 0 0.8rem 0',
};

const ilkeMetinStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.85rem',
  fontWeight: 300,
  lineHeight: 1.7,
  color: 'var(--ink-soft)',
  margin: 0,
};

const kisiEtiketStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.6rem',
  fontWeight: 300,
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: '0.5rem',
};

const kisiAdStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '2rem',
  color: 'var(--ink)',
  fontWeight: 300,
  margin: 0,
};

const kisiMetinStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.9rem',
  fontWeight: 300,
  lineHeight: 1.8,
  color: 'var(--ink-soft)',
};

const kisiNotStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.7rem',
  fontWeight: 300,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'var(--ink-muted)',
  marginTop: '1.5rem',
  paddingTop: '1rem',
  borderTop: '1px solid var(--rule)',
};

const yilStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.3rem',
  color: 'var(--accent)',
  letterSpacing: '0.05em',
};

const milestoneBaslikStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.9rem',
  fontWeight: 400,
  color: 'var(--ink)',
  margin: '0.4rem 0 0.6rem 0',
  letterSpacing: '0.05em',
};

const milestoneMetinStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.85rem',
  fontWeight: 300,
  lineHeight: 1.7,
  color: 'var(--ink-soft)',
  margin: 0,
};

const katmanKartStili = {
  background: 'var(--bg-elevated)',
  border: '1px solid var(--rule)',
  padding: '1.8rem 1.6rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const durumStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.6rem',
  fontWeight: 400,
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  color: 'var(--ink-muted)',
};

const durumAktifStili = {
  ...durumStili,
  color: 'var(--accent)',
};

const katmanAdStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.4rem',
  color: 'var(--ink)',
  fontWeight: 300,
  margin: '0.3rem 0 0 0',
};

const katmanAltBaslikStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.75rem',
  fontWeight: 300,
  letterSpacing: '0.1em',
  color: 'var(--ink-muted)',
  marginBottom: '0.6rem',
};

const katmanMetinStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.85rem',
  fontWeight: 300,
  lineHeight: 1.7,
  color: 'var(--ink-soft)',
  margin: 0,
};

// ─── Bilesen ────────────────────────────────────────────────────────────────

export default function Hakkimizda() {
  const [kullanici, setKullanici] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setKullanici(user || null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setKullanici(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function cikisYap() {
    await supabase.auth.signOut();
    setKullanici(null);
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>

      {/* HEADER (anasayfa pattern'i, auth-aware) */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.6rem 2rem',
        borderBottom: '1px solid var(--bg-elevated)',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <a href="/" style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}>
          Inside The Character
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.6rem', flexWrap: 'wrap' }}>
          <a href="/hakkimizda" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: 'var(--accent)', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--accent)', paddingBottom: '2px' }}>
            Hakkımızda
          </a>
          {kullanici ? (
            <>
              <a href="/kulis" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: 'var(--ink-soft)', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.25s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}>
                Kulis
              </a>
              <a href="/profil" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: 'var(--ink-soft)', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.25s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}>
                {kullanici.user_metadata?.ad || kullanici.email}
              </a>
              <button
                onClick={cikisYap}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                  fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem',
                  letterSpacing: '0.25em', color: 'var(--ink-muted)', textTransform: 'uppercase',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
              >
                Çıkış
              </button>
            </>
          ) : (
            <a href="/giris" style={{
              fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem',
              letterSpacing: '0.25em', color: 'var(--ink)', textTransform: 'uppercase',
              textDecoration: 'none', transition: 'color 0.25s ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}>
              Giriş Yap
            </a>
          )}
        </div>
      </header>

      {/* BÖLÜM 1 — ITC NEDİR? (Hero) */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) 2rem 4rem',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ width: '1px', height: '60px', backgroundColor: 'var(--accent)', opacity: 0.4, margin: '0 auto 2rem' }} />

        <div style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.65rem',
          fontWeight: 300,
          color: 'var(--ink-muted)',
          letterSpacing: '0.4em',
          marginBottom: '2rem',
          textTransform: 'uppercase',
        }}>
          20 yıllık pratik · 2005'ten bugüne
        </div>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 300,
          color: 'var(--ink)',
          marginBottom: '1.5rem',
          marginTop: 0,
          lineHeight: 1.2,
        }}>
          Inside The Character
        </h1>

        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          fontWeight: 300,
          color: 'var(--ink-soft)',
          maxWidth: '660px',
          margin: '0 auto 1.5rem',
          lineHeight: 1.7,
        }}>
          ITC, oyuncuların karakterin zihinsel haritasına psikolojik güvenlikle giriş
          yaptığı bir oyunculuk metodolojisidir.
        </p>

        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 300,
          fontSize: '0.95rem',
          color: 'var(--ink-soft)',
          maxWidth: '660px',
          margin: '0 auto',
          lineHeight: 1.8,
        }}>
          Geleneksel yöntemler oyuncuya "ne yapacağını" söyler. ITC ise
          "nasıl düşündüğünü" sorar. 2005'ten bu yana 1000'i aşkın oyuncuyla
          denenmiş, HMDK Stuttgart ve Berlin Chubbuck Studio gibi kurumlarda
          atölyelerle geliştirilmiştir.
        </p>
      </section>

      {/* BÖLÜM 2 — ÜÇ İLKE ÖZETİ */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 4rem) 2rem',
        borderTop: '1px solid var(--bg-elevated)',
        background: 'var(--bg-elevated)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>

          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div style={ustEtiketStili}>Üç İlke</div>
            <h2 style={bolumBaslikStili}>Yöntemin Temeli</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            <div style={ilkeKartiStili}>
              <div style={ilkeNumarasiStili}>01</div>
              <h3 style={ilkeBaslikStili}>Psikolojik Güvenlik</h3>
              <p style={ilkeMetinStili}>
                Karakter çalışırken oyuncuyu kendi yaralarına bakmaya zorlamayız.
                Yöntemin merkezinde oyuncunun duygusal güvenliği vardır.
              </p>
            </div>

            <div style={ilkeKartiStili}>
              <div style={ilkeNumarasiStili}>02</div>
              <h3 style={ilkeBaslikStili}>Bireysel Rota</h3>
              <p style={ilkeMetinStili}>
                Aynı sahneye herkes aynı kapıdan girmez. Her oyuncuya kişiselleştirilmiş
                giriş kapıları sunulur.
              </p>
            </div>

            <div style={ilkeKartiStili}>
              <div style={ilkeNumarasiStili}>03</div>
              <h3 style={ilkeBaslikStili}>Bilimsel Altyapı</h3>
              <p style={ilkeMetinStili}>
                Sezgi değil — yöntem. Nörobilim, psikoloji ve sahne pedagojisi
                üzerine inşa edilir, kendini günceller.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BÖLÜM 3 — İKİ EŞ KURUCU (FULL BIOS) */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={ustEtiketStili}>İki Eş Kurucu</div>
          <h2 style={bolumBaslikStili}>ITC'nin Arkasındaki İsimler</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '3rem',
        }}>

          {/* Beyti Engin */}
          <div>
            <div style={kisiEtiketStili}>Oyuncu · Eğitmen · Yöntem Sahibi</div>
            <h3 style={kisiAdStili}>Beyti Engin</h3>
            <div style={{ ...kisiMetinStili, marginTop: '1.5rem' }}>
              <p style={{ marginBottom: '1rem', marginTop: 0 }}>
                Afife Tiyatro Ödülü sahibi. Dostlar Tiyatrosu'ndan Bakırköy Belediye
                Tiyatroları'na, oradan Oyun Atölyesi'ne uzanan bir yolculukla, Türkiye
                tiyatrosunun çağdaş çizgisinde yer almıştır.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Nassim Soleimanpour'un "White Rabbit Red Rabbit" eserini Türkiye'de ilk
                kez sahneleyen cesur bir performansçıdır. 2025-26 sezonunda Rufus Norris
                yönetimindeki "Satıcının Ölümü" ve Nagihan Gürkan'ın yönettiği "Güneşin
                Oğlu" ile oyunculuk kariyerine devam etmektedir.
              </p>
              <p style={{ margin: 0 }}>
                ITC metodolojisini Filiz Kaya Ataklı ile birlikte 2005'te kurdu ve
                o günden bu yana 1000'i aşkın oyuncuya uygulayarak geliştirmeye devam ediyor.
              </p>
              <p style={kisiNotStili}>
                Atölyeler · HMDK Stuttgart 2022 · Berlin Chubbuck Studio 2022-24
              </p>
            </div>
          </div>

          {/* Filiz Kaya Ataklı */}
          <div>
            <div style={kisiEtiketStili}>Klinik Psikolog · Yöntem Eş Sahibi</div>
            <h3 style={kisiAdStili}>Filiz Kaya Ataklı</h3>
            <div style={{ ...kisiMetinStili, marginTop: '1.5rem' }}>
              <p style={{ marginBottom: '1rem', marginTop: 0 }}>
                İstanbul Üniversitesi Psikoloji Bölümü mezunu. Aynı üniversitede Adli
                Bilimler yüksek lisansını tamamladı. Çift ve Evlilik Terapisi
                eğitimlerini John ve Julie Gottman'dan alan Kaya Ataklı, Türkiye'nin
                Gottman Çift Terapisi Usta Eğitmenlerinden (Master Trainer) biridir.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Meslek eğitimleri arasında Sensorimotor Psikoterapi, EMDR, PACT, Mental
                Training ve Duygu Odaklı Terapi yer alır. Psikoloji İstanbul'un
                kurucularındandır.
              </p>
              <p style={{ margin: 0 }}>
                Oyuncularla "Karakter Tasarımı" odaklı çalışmalar yapmakta, oyunculuk
                ve performans geliştirme üzerine dünyanın çeşitli ülkelerinde eğitimler
                vermektedir. ITC metodolojisinin Beyti Engin ile birlikte kurucusu,
                klinik altyapısının mimarıdır.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BÖLÜM 4 — 2005'TEN BUGÜNE (Mini Tarihçe) */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        borderTop: '1px solid var(--bg-elevated)',
        background: 'var(--bg-elevated)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>

          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <div style={ustEtiketStili}>2005'ten Bugüne</div>
            <h2 style={bolumBaslikStili}>Yöntemin Yolculuğu</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {[
              {
                yil: '2005',
                baslik: 'İlk pratik',
                metin: 'Beyti Engin ve Filiz Kaya Ataklı, oyunculuk ile klinik psikoloji kesişiminde çalışmaya başlar.',
              },
              {
                yil: '2010-2020',
                baslik: 'Atölye yılları',
                metin: 'Pozitif Atölye, çeşitli stüdyolar ve birebir çalışmalarla 1000\'i aşkın oyuncuya uygulanır, geliştirilir.',
              },
              {
                yil: '2022',
                baslik: 'Kurumsal bağlantılar',
                metin: 'HMDK Stuttgart atölyesi. Berlin Chubbuck Studio iki yıllık altı atölye serisine davet.',
              },
              {
                yil: '2024',
                baslik: 'Yöntemin yazımı',
                metin: '"Inside The Hamlet" çalışma kitabı yayımlanır. Method Kitabı üzerinde çalışmalar başlar.',
              },
              {
                yil: '2026',
                baslik: 'ITC Actor\'s Gym',
                metin: 'Yöntemin dijital sürümü olan ITC Actor\'s Gym beta sürümüyle yayında. Modül III (AI sesli yolculuk) önümüzdeki ay açılacak.',
                aktif: true,
              },
            ].map((m, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(110px, 140px) 1fr',
                gap: '1.5rem',
                paddingBottom: '1.5rem',
                borderBottom: i < 4 ? '1px solid var(--rule)' : 'none',
              }}>
                <span style={{ ...yilStili, color: m.aktif ? 'var(--accent)' : 'var(--ink-muted)' }}>
                  {m.yil}
                </span>
                <div>
                  <h4 style={milestoneBaslikStili}>{m.baslik}</h4>
                  <p style={milestoneMetinStili}>{m.metin}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* BÖLÜM 5 — ÜÇ KATMAN */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>

        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <div style={ustEtiketStili}>Yöntemin Üç Katmanı</div>
          <h2 style={bolumBaslikStili}>ITC Ekosistemi</h2>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1.05rem',
            color: 'var(--ink-soft)',
            margin: '1rem auto 0',
            maxWidth: '600px',
            lineHeight: 1.7,
          }}>
            ITC tek bir ürün değil — birbirini tamamlayan üç katman.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>

          <article style={katmanKartStili}>
            <span style={durumStili}>Yakında</span>
            <h3 style={katmanAdStili}>Method Kitabı</h3>
            <p style={katmanAltBaslikStili}>Inside The Character</p>
            <p style={katmanMetinStili}>
              ~320 sayfa kuramsal ve pratik kitap. Eğitmenler ve ileri oyuncular için
              yöntemin kavramsal otoritesi.
            </p>
          </article>

          <article style={katmanKartStili}>
            <span style={durumStili}>Yayımlandı</span>
            <h3 style={katmanAdStili}>Hamlet Workbook</h3>
            <p style={katmanAltBaslikStili}>Inside The Hamlet</p>
            <p style={katmanMetinStili}>
              314 sayfa basılı çalışma kitabı. Hamlet karakteri üzerinden yöntemin
              tek karaktere derinleşmiş hâli.
            </p>
          </article>

          <article style={{ ...katmanKartStili, borderColor: 'var(--accent)' }}>
            <span style={durumAktifStili}>Canlı Beta</span>
            <h3 style={katmanAdStili}>ITC App</h3>
            <p style={katmanAltBaslikStili}>Actor's Gym</p>
            <p style={katmanMetinStili}>
              Web uygulaması. Günlük antrenman yapan oyuncu için dijital pratik.
              Şu an okuduğun yer.
            </p>
          </article>

        </div>
      </section>

      {/* BÖLÜM 6 — KURUMSAL BAĞLANTILAR */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        borderTop: '1px solid var(--bg-elevated)',
        background: 'var(--bg-elevated)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>

          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div style={ustEtiketStili}>Kurumsal Bağlantılar</div>
            <h2 style={bolumBaslikStili}>Yöntemin Geçtiği Kurumlar</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>

            {[
              {
                ad: 'HMDK Stuttgart',
                aciklama: 'Hochschule für Musik und Darstellende Kunst',
                not: 'Atölye · 2022 · Almanya',
              },
              {
                ad: 'Berlin Chubbuck Studio',
                aciklama: 'İki yıllık, altı atölye serisi',
                not: 'Atölye · 2022-24 · Almanya',
              },
              {
                ad: 'Pozitif Atölye',
                aciklama: 'İstanbul\'da uzun yıllar sürdürülen pratik',
                not: 'Stüdyo · 2010+ · Türkiye',
              },
            ].map((k, i) => (
              <div key={i} style={{
                background: 'var(--bg-base)',
                border: '1px solid var(--rule)',
                padding: '1.6rem 1.4rem',
              }}>
                <h4 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: '1.2rem',
                  color: 'var(--ink)',
                  fontWeight: 300,
                  margin: '0 0 0.4rem 0',
                }}>
                  {k.ad}
                </h4>
                <p style={{ ...katmanMetinStili, marginBottom: '0.8rem' }}>{k.aciklama}</p>
                <p style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 300,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-muted)',
                  margin: 0,
                }}>
                  {k.not}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* BÖLÜM 7 — İLETİŞİM */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        maxWidth: '700px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}>
        <div style={ustEtiketStili}>İletişim</div>
        <h2 style={bolumBaslikStili}>Bize Ulaş</h2>

        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 300,
          fontSize: '0.95rem',
          color: 'var(--ink-soft)',
          margin: '1.5rem auto 2rem',
          lineHeight: 1.8,
        }}>
          ITC ile ilgili sorular, kurumsal işbirlikleri veya atölye talepleri için
          iletişime geçebilirsiniz.
        </p>

        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '1.2rem',
          margin: 0,
        }}>
          <a href="mailto:hello@itcactorsgym.com" style={{
            color: 'var(--accent)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--accent)',
            paddingBottom: '2px',
            transition: 'color 0.25s ease',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-hover)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
          >
            hello@itcactorsgym.com
          </a>
        </p>

        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.8rem',
          fontWeight: 300,
          color: 'var(--ink-muted)',
          marginTop: '2rem',
          letterSpacing: '0.05em',
        }}>
          <a href="https://beytienginstudio.com" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--ink-muted)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--rule)',
            transition: 'color 0.25s ease',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
          >
            beytienginstudio.com
          </a>
          <span style={{ margin: '0 0.8rem' }}>·</span>
          <span>Beyti Engin'in kişisel web sitesi</span>
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid var(--bg-elevated)',
        fontFamily: 'Jost, sans-serif',
        fontSize: '0.7rem',
        fontWeight: 300,
        color: 'var(--ink-muted)',
        letterSpacing: '0.1em',
      }}>
        <span>ITC Yöntemi · 2005'ten bu yana</span>
      </footer>

    </main>
  );
}
