// app/page.js
// ITC Actor's Gym — Ana Sayfa (Manifesto + Üç İlke + Üç Modül + Ekip)

'use client';

import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';

// ─── Paylaşılan Stil Objeleri ───────────────────────────────────────────────

const ustEtiketStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.6rem',
  fontWeight: 300,
  letterSpacing: '0.4em',
  textTransform: 'uppercase',
  color: '#888',
  marginBottom: '1rem',
};

const bolumBaslikStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: 'clamp(1.6rem, 3vw, 2rem)',
  color: '#f0ede8',
  fontWeight: 300,
  margin: 0,
};

const ilkeKartiStili = {
  background: '#0f0f0f',
  border: '1px solid #2a2a2a',
  padding: '2.5rem 2rem',
  transition: 'all 0.3s ease',
};

const ilkeNumarasiStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.5rem',
  color: '#c9a96e',
  marginBottom: '1rem',
};

const ilkeBaslikStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.5rem',
  color: '#f0ede8',
  fontWeight: 300,
  margin: '0 0 1rem 0',
};

const ilkeMetinStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.95rem',
  fontWeight: 300,
  lineHeight: 1.7,
  color: '#aaa',
  margin: 0,
};

const modulKartiStili = {
  background: '#0f0f0f',
  border: '1px solid #2a2a2a',
  padding: '2rem 2.5rem',
  transition: 'all 0.3s ease',
};

const modulRomenStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.5rem',
  color: '#c9a96e',
  minWidth: '30px',
};

const modulBaslikStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.6rem',
  color: '#f0ede8',
  fontWeight: 300,
  margin: 0,
};

const modulAltStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.7rem',
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  color: '#888',
};

const modulMetinStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.95rem',
  fontWeight: 300,
  lineHeight: 1.7,
  color: '#aaa',
  margin: '0 0 0.8rem 0',
};

const modulMetaStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.7rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#666',
};

const kisiEtiketStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.6rem',
  fontWeight: 300,
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  color: '#c9a96e',
  marginBottom: '0.5rem',
};

const kisiAdStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '2rem',
  color: '#f0ede8',
  fontWeight: 300,
  margin: 0,
};

const kisiMetinStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.9rem',
  fontWeight: 300,
  lineHeight: 1.8,
  color: '#aaa',
};

const ctaButonStili = {
  display: 'inline-block',
  padding: '1rem 2.5rem',
  background: 'transparent',
  border: '1px solid #c9a96e',
  color: '#c9a96e',
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.85rem',
  fontWeight: 300,
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
};

function ctaHoverIn(e) {
  e.currentTarget.style.background = '#c9a96e';
  e.currentTarget.style.color = '#0a0a0a';
}
function ctaHoverOut(e) {
  e.currentTarget.style.background = 'transparent';
  e.currentTarget.style.color = '#c9a96e';
}

// ─── Ana Sayfa Bileşeni ─────────────────────────────────────────────────────

export default function AnaSayfa() {
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

  const ctaHref = kullanici ? '/kalibrasyon' : '/giris';
  const ctaMetni = kullanici ? "Modül I'e Git →" : 'Başla →';
  const ctaKapanisMetni = kullanici ? "Modül I'e Git →" : 'Kayıt Ol / Giriş Yap →';
  const kapanisBaslik = kullanici ? 'Devam edelim.' : 'Hazır mısın?';
  const kapanisAlt = kullanici
    ? 'Modül I — Kendini Tanı.'
    : 'Önce kalibrasyon. Üç kısa test, on beş dakika.';

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f0ede8', display: 'flex', flexDirection: 'column' }}>

      {/* HEADER */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.6rem 2rem',
        borderBottom: '1px solid #1a1a1a',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <span style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          color: '#c9a96e',
          textTransform: 'uppercase',
        }}>
          Inside The Character
        </span>

        {kullanici ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.6rem', flexWrap: 'wrap' }}>
            <a href="/kulis" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#aaa', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.25s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a96e'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#aaa'; }}>
              Kulis
            </a>
            <a href="/profil" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.25em', color: '#aaa', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.25s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a96e'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#aaa'; }}>
              {kullanici.user_metadata?.ad || kullanici.email}
            </a>
            <button
              onClick={cikisYap}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem',
                letterSpacing: '0.25em', color: '#666', textTransform: 'uppercase',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#f0ede8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#666'; }}
            >
              Çıkış
            </button>
          </div>
        ) : (
          <a href="/giris" style={{
            fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem',
            letterSpacing: '0.25em', color: '#f0ede8', textTransform: 'uppercase',
            textDecoration: 'none', transition: 'color 0.25s ease',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a96e'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#f0ede8'; }}>
            Giriş Yap
          </a>
        )}
      </header>

      {/* BÖLÜM 1 — KARŞILAMA (HERO) */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) 2rem 4rem',
        textAlign: 'center',
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ width: '1px', height: '60px', backgroundColor: '#c9a96e', opacity: 0.4, margin: '0 auto 2rem' }} />

        <div style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.65rem',
          fontWeight: 300,
          color: '#888',
          letterSpacing: '0.4em',
          marginBottom: '2rem',
          textTransform: 'uppercase',
        }}>
          ITC Method · 2005'ten bu yana
        </div>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 300,
          color: '#f0ede8',
          marginBottom: '1.5rem',
          marginTop: 0,
          lineHeight: 1.2,
          letterSpacing: '0.02em',
        }}>
          Karakterin zihnine gir.<br />
          Sahici ol.
        </h1>

        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          fontWeight: 300,
          color: '#aaa',
          maxWidth: '600px',
          margin: '0 auto 3rem',
          lineHeight: 1.7,
        }}>
          Oyuncunun zihinsel haritasını, bedensel hafızasını ve psikolojik
          derinliğini merkeze alan özgün bir oyunculuk metodolojisi.
        </p>

        <a
          href={ctaHref}
          style={ctaButonStili}
          onMouseEnter={ctaHoverIn}
          onMouseLeave={ctaHoverOut}
        >
          {ctaMetni}
        </a>
      </section>

      {/* BÖLÜM 2 — VURUŞ CÜMLESİ */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 4rem) 2rem',
        borderTop: '1px solid #1a1a1a',
        borderBottom: '1px solid #1a1a1a',
        textAlign: 'center',
        background: '#0c0c0c',
      }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
          fontWeight: 300,
          color: '#f0ede8',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          Geleneksel yöntemler oyuncuya <span style={{ color: '#888' }}>"ne yapacağını"</span> söyler.
          <br /><br />
          ITC ise <span style={{ color: '#c9a96e' }}>"nasıl düşündüğünü"</span> sorar.
        </p>
      </section>

      {/* BÖLÜM 3 — ÜÇ İLKE */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={ustEtiketStili}>Üç İlke</div>
          <h2 style={bolumBaslikStili}>Yöntemin temeli</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          <div style={ilkeKartiStili}>
            <div style={ilkeNumarasiStili}>01</div>
            <h3 style={ilkeBaslikStili}>Psikolojik Güvenlik</h3>
            <p style={ilkeMetinStili}>
              ITC, oyuncuyu kendi kişisel travmalarından koruyarak, karaktere ait
              veriler üzerinden yeni alanlar yaratmaya yönlendirir. Yöntemin merkezinde
              oyuncunun duygusal güvenliği vardır.
            </p>
          </div>

          <div style={ilkeKartiStili}>
            <div style={ilkeNumarasiStili}>02</div>
            <h3 style={ilkeBaslikStili}>Bireysel Rota</h3>
            <p style={ilkeMetinStili}>
              Her oyuncunun öğrenme serüveni farklıdır. ITC her oyuncuya, karaktere
              giden kişiselleştirilmiş giriş kapıları sunar. Aynı sahneye bambaşka
              yollardan girilir.
            </p>
          </div>

          <div style={ilkeKartiStili}>
            <div style={ilkeNumarasiStili}>03</div>
            <h3 style={ilkeBaslikStili}>Bilimsel Altyapı</h3>
            <p style={ilkeMetinStili}>
              ITC'nin kuramsal temeli nörobilim, psikoloji ve sahne pedagojisinde yapılan
              araştırmalar üzerinden kendini güncellemektedir. Sezgi değil — yöntem.
            </p>
          </div>
        </div>
      </section>

      {/* BÖLÜM 4 — ÜÇ MODÜL */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        borderTop: '1px solid #1a1a1a',
        background: '#0c0c0c',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>

          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <div style={ustEtiketStili}>Yapı</div>
            <h2 style={bolumBaslikStili}>Üç Modül</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Modül I */}
            <div style={modulKartiStili}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
                <span style={modulRomenStili}>I</span>
                <h3 style={modulBaslikStili}>Kendini Tanı</h3>
                <span style={modulAltStili}>Kalibrasyon</span>
              </div>
              <p style={modulMetinStili}>
                Üç kısa test ile öğrenme stilin, psikolojik haritan ve kişilik tipin çıkar.
                Bu veriler sonraki modüllerde sessizce kişiselleştirme yapar — meta-açıklama yok,
                sadece sana uyan akış.
              </p>
              <div style={modulMetaStili}>3 test · ~15 dakika</div>
            </div>

            {/* Modül II */}
            <div style={modulKartiStili}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
                <span style={modulRomenStili}>II</span>
                <h3 style={modulBaslikStili}>Karakterini İnşa Et</h3>
                <span style={modulAltStili}>Antrenman</span>
              </div>
              <p style={modulMetinStili}>
                Dört klasik karakter — Hamlet, Macbeth, Willy Loman, Biff Loman — her biri için
                değiştirilemez doğrular, yatay timeline, yazarın çerçevesi (kritik sahneler),
                senin çerçeven (boşluklar) ve zihinsel antrenmanlar.
              </p>
              <div style={modulMetaStili}>4 karakter · 30 zihinsel antrenman</div>
            </div>

            {/* Modül III */}
            <div style={{ ...modulKartiStili, opacity: 0.6 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
                <span style={modulRomenStili}>III</span>
                <h3 style={modulBaslikStili}>Sahnele</h3>
                <span style={modulAltStili}>Yolculuk</span>
              </div>
              <p style={modulMetinStili}>
                Karakterin pre-senaryo anından post-senaryoya kadar tüm yaşamını sıralı tek seansta
                AI sesli yönlendirmeyle dolaşan bir modül. Antrenmandan sahneye çıkış.
              </p>
              <div style={modulMetaStili}>Yakında</div>
            </div>

          </div>
        </div>
      </section>

      {/* BÖLÜM 5 — EKİP */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={ustEtiketStili}>2005'ten Bu Yana</div>
          <h2 style={bolumBaslikStili}>ITC'nin Arkasındaki İsimler</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '3rem',
        }}>

          {/* Beyti Engin */}
          <div>
            <div style={kisiEtiketStili}>Oyuncu · Eğitmen</div>
            <h3 style={kisiAdStili}>Beyti Engin</h3>
            <div style={{ ...kisiMetinStili, marginTop: '1.5rem' }}>
              <p style={{ marginBottom: '1rem', marginTop: 0 }}>
                Afife Tiyatro Ödülü sahibi. Dostlar Tiyatrosu'ndan Bakırköy Belediye
                Tiyatroları'na, oradan Oyun Atölyesi'ne uzanan bir yolculukla, Türkiye
                tiyatrosunun çağdaş çizgisinde yer almıştır.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Nassim Soleimanpour'un "White Rabbit Red Rabbit" eserini Türkiye'de ilk
                kez sahneleyen cesur bir performansçıdır. Şu an Rufus Norris yönetimindeki
                "Satıcının Ölümü" ve Nagihan Gürkan'ın yönettiği "Güneşin Oğlu" ile
                oyunculuk kariyerine devam etmektedir.
              </p>
              <p style={{ margin: 0 }}>
                ITC metodolojisini Filiz Kaya Ataklı ile birlikte 2005'te kurdu ve
                o günden bu yana 1000'i aşkın oyuncuya uygulayarak geliştirmeye devam ediyor.
              </p>
            </div>
          </div>

          {/* Filiz Kaya Ataklı */}
          <div>
            <div style={kisiEtiketStili}>Klinik Psikolog · Performans Psikolojisi Uzmanı</div>
            <h3 style={kisiAdStili}>Filiz Kaya Ataklı</h3>
            <div style={{ ...kisiMetinStili, marginTop: '1.5rem' }}>
              <p style={{ marginBottom: '1rem', marginTop: 0 }}>
                İstanbul Üniversitesi Psikoloji Bölümü mezunu. Aynı üniversitede Adli Bilimler
                yüksek lisansını tamamladı. Çift ve Evlilik Terapisi eğitimlerini John ve Julie
                Gottman'dan alan Kaya, Türkiye'nin Gottman Çift Terapisi Usta Eğitmenlerinden
                (Master Trainer) biridir.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Meslek eğitimleri arasında Sensorimotor Psikoterapi, EMDR, PACT, Mental Training
                ve Duygu Odaklı Terapi yer alır. Psikoloji İstanbul'un kurucularındandır.
              </p>
              <p style={{ margin: 0 }}>
                Oyuncularla "Karakter Tasarım" odaklı çalışmalar yapmakta, oyunculuk ve performans
                geliştirme üzerine dünyanın çeşitli ülkelerinde eğitimler vermektedir. ITC
                metodolojisinin Beyti Engin ile birlikte kurucusudur.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BÖLÜM 6 — KAPANIŞ CTA */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        textAlign: 'center',
        borderTop: '1px solid #1a1a1a',
        background: '#0c0c0c',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>

          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.6rem, 3vw, 2rem)',
            color: '#f0ede8',
            fontWeight: 300,
            marginBottom: '1.5rem',
            marginTop: 0,
          }}>
            {kapanisBaslik}
          </h2>

          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: '#aaa',
            marginBottom: '2.5rem',
            marginTop: 0,
          }}>
            {kapanisAlt}
          </p>

          <a
            href={ctaHref}
            style={ctaButonStili}
            onMouseEnter={ctaHoverIn}
            onMouseLeave={ctaHoverOut}
          >
            {ctaKapanisMetni}
          </a>

          <div style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid #1a1a1a',
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 300,
            color: '#666',
            letterSpacing: '0.1em',
          }}>
            <a
              href="https://beytienginstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#888', textDecoration: 'none', borderBottom: '1px solid #444', transition: 'color 0.25s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a96e'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}
            >
              beytienginstudio.com
            </a>
            <span style={{ margin: '0 1rem', color: '#444' }}>·</span>
            <span>2005'ten bu yana</span>
          </div>
        </div>
      </section>

    </main>
  );
}
