// app/kalibrasyon/page.js
// ITC Actor's Gym — Kalibrasyon (Modül I) ana sayfası
//
// 6 bölüm: Karşılama → İlerleme rozet → 3 test kartı (dinamik durum) →
// Yöntem ve Etik → Alt CTA (üç durumlu) → Profil bağlantısı

'use client';

import { useState, useEffect } from 'react';
import { getKalibrasyonProfili } from '../lib/kalibrasyon';
import IlerlemeRozet from '../../components/IlerlemeRozet';

const KANAL_AD = { V: 'Görsel', A: 'İşitsel', K: 'Kinestetik' };

// ─── Paylaşılan stil objeleri ──────────────────────────────────────────────

const ustEtiketStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.6rem',
  fontWeight: 300,
  letterSpacing: '0.4em',
  textTransform: 'uppercase',
  color: '#888',
  marginBottom: '1rem',
};

const altBaslikStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.3rem',
  color: '#c9a96e',
  fontWeight: 300,
  margin: '0 0 1rem 0',
};

const paragrafStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.95rem',
  fontWeight: 300,
  lineHeight: 1.85,
  color: '#bbb',
  margin: 0,
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
function ctaHoverIn(e) { e.currentTarget.style.background = '#c9a96e'; e.currentTarget.style.color = '#0a0a0a'; }
function ctaHoverOut(e) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a96e'; }

// ─── Test Kartı (inline component) ─────────────────────────────────────────

function TestKarti({ url, baslik, altbaslik, aciklama, meta, tamamlandi, sonuc }) {
  return (
    <a
      href={url}
      style={{
        display: 'block',
        background: '#0f0f0f',
        border: '1px solid #2a2a2a',
        padding: '2rem 2.5rem',
        marginBottom: '1.5rem',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#c9a96e'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#2a2a2a'; }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.7rem',
          fontWeight: 300,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#f0ede8',
        }}>
          {baslik}
        </div>
        {tamamlandi ? (
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.6rem',
            fontWeight: 300,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#7a9b7a',
          }}>
            ✓ Tamamlandı
          </div>
        ) : (
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 300,
            color: '#c9a96e',
            letterSpacing: '0.1em',
          }}>
            Yap →
          </div>
        )}
      </div>

      <div style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontStyle: 'italic',
        fontSize: '1.05rem',
        color: '#c9a96e',
        marginBottom: '1rem',
      }}>
        {altbaslik}
      </div>

      <p style={{
        fontFamily: 'Jost, sans-serif',
        fontSize: '0.88rem',
        fontWeight: 300,
        lineHeight: 1.7,
        color: '#aaa',
        marginTop: 0,
        marginBottom: '1rem',
      }}>
        {aciklama}
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.7rem',
          fontWeight: 300,
          color: '#666',
          letterSpacing: '0.1em',
        }}>
          {meta}
        </div>
        {sonuc && (
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 300,
            color: '#7a9b7a',
            letterSpacing: '0.05em',
          }}>
            {sonuc}
          </div>
        )}
      </div>
    </a>
  );
}

// ─── Ana Sayfa ─────────────────────────────────────────────────────────────

export default function Kalibrasyon() {
  const [profil, setProfil] = useState(null);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function yukle() {
      const p = await getKalibrasyonProfili();
      setProfil(p);
      setYukleniyor(false);
    }
    yukle();
  }, []);

  const vak = profil?.vak || null;
  const arketip = profil?.arketip || null;
  const yildiz = profil?.yildiz || null;

  const tamamlananSayisi = (vak ? 1 : 0) + (arketip ? 1 : 0) + (yildiz ? 1 : 0);

  // Sonuç metinleri
  const vakSonucMetni = vak
    ? `Baskın: ${KANAL_AD[vak.baskin] || vak.baskin}`
    : null;
  const arketipSonucMetni = arketip
    ? (arketip.ad ? `${arketip.tip} · ${arketip.ad}` : `Tip: ${arketip.tip}`)
    : null;
  const yildizSonucMetni = yildiz && typeof yildiz.genel_yuzde === 'number'
    ? `Genel: ${yildiz.genel_yuzde}%`
    : null;

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
        <a href="/" style={{
          fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem',
          letterSpacing: '0.3em', color: '#c9a96e', textTransform: 'uppercase', textDecoration: 'none',
        }}>
          Inside The Character
        </a>
        <a href="/" style={{
          fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem',
          letterSpacing: '0.25em', color: '#aaa', textTransform: 'uppercase', textDecoration: 'none',
          transition: 'color 0.25s ease',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a96e'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#aaa'; }}>
          ← Ana Ekran
        </a>
      </header>

      {/* BÖLÜM 1 — KARŞILAMA */}
      <section style={{
        padding: 'clamp(3.5rem, 7vw, 5rem) 2rem 2.5rem',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ width: '1px', height: '50px', backgroundColor: '#c9a96e', opacity: 0.4, margin: '0 auto 1.8rem' }} />
        <div style={ustEtiketStili}>Modül I</div>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(2.3rem, 5vw, 3.4rem)',
          fontWeight: 300,
          color: '#f0ede8',
          margin: '0 0 1.4rem 0',
          lineHeight: 1.2,
          letterSpacing: '0.02em',
        }}>
          Kendini Tanı
        </h1>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: '#aaa',
          maxWidth: '600px',
          margin: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.7,
        }}>
          Üç analiz, tek bir enstrüman profili. Önerilen sıra: Öğrenme Stili → Kişilik Tipi → Yıldız Oyuncu. Tamamlamak şart değil — dilediğin yerden başlayabilirsin.
        </p>
      </section>

      {/* BÖLÜM 2 — İLERLEME ROZETİ */}
      <section style={{
        padding: '0 2rem 2.5rem',
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
      }}>
        {!yukleniyor && (
          <IlerlemeRozet
            etiket="Toplam"
            mevcut={tamamlananSayisi}
            toplam={3}
            renk="#c9a96e"
          />
        )}
      </section>

      {/* BÖLÜM 3 — ÜÇ TEST KARTI */}
      <section style={{
        padding: '0 2rem',
        maxWidth: '780px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <TestKarti
          url="/kalibrasyon/vak"
          baslik="Öğrenme Stili Analizi"
          altbaslik="Görsel · İşitsel · Kinestetik"
          aciklama="Baskın algı kanalını ve karakter inşasındaki navigasyon stilini belirler."
          meta="27 soru · ~5 dk"
          tamamlandi={vak !== null}
          sonuc={vakSonucMetni}
        />
        <TestKarti
          url="/kalibrasyon/arketip"
          baslik="Kişilik Tipi Analizi"
          altbaslik="16 Enstrüman Profili"
          aciklama="Jungiyen temelli sahne senaryolarıyla enstrüman arketipini belirler."
          meta="12 senaryo · ~5 dk"
          tamamlandi={arketip !== null}
          sonuc={arketipSonucMetni}
        />
        <TestKarti
          url="/kalibrasyon/yildiz"
          baslik="Yıldız Oyuncu Analizi"
          altbaslik="Parlayan · Gelişim · Planlama"
          aciklama="Teknik donanım ve psikolojik kapasite haritanı çıkarır."
          meta="37 kriter · ~5 dk"
          tamamlandi={yildiz !== null}
          sonuc={yildizSonucMetni}
        />
      </section>

      {/* BÖLÜM 4 — YÖNTEM VE ETİK */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        marginTop: '3rem',
        borderTop: '1px solid #1a1a1a',
        background: '#0c0c0c',
      }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>

          {/* Üst başlık */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <div style={ustEtiketStili}>Yöntem</div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.6rem, 3vw, 2rem)',
              color: '#f0ede8',
              fontWeight: 300,
              margin: 0,
            }}>
              Kalibrasyon
            </h2>
          </div>

          {/* Alt-bölüm 1 — Yöntem nasıl çalışır */}
          <div style={{ marginBottom: '4rem' }}>
            <p style={paragrafStili}>
              ITC'nin merkezinde şu fikir var: Aynı sahneye herkes aynı kapıdan girmez. Bir oyuncu için görsel imge bir geçit olabilir, başkası için bedensel bir duyum, bir başkası için bir iç ses. Bu üç analiz, sana özgü kapıların haritasını çıkarır. Sonraki modüllerde her egzersiz, her yönlendirme, her soru — sessizce senin haritanı takip eder. Sen sadece çalışmaya odaklanırsın; uyarlanma görünmez.
            </p>

            <div style={{ marginTop: '2.5rem' }}>
              <h3 style={altBaslikStili}>◆ Öğrenme Stilin</h3>
              <p style={paragrafStili}>
                Bilgiyi hangi kanaldan içselleştirdiğini belirler: Görsel, işitsel, ya da kinestetik. Karakteri inşa ederken, bedensel antrenmanların derinleşme aşaması senin baskın kanalına göre şekillenir. Bir karakteri "görerek" mi, "duyarak" mı, yoksa "hissederek" mi içine alıyorsun — yöntem buna göre kendini ayarlar. Bu, sahnede klişelere düşmemenin ilk adımıdır. Çünkü oyuncuya hiç ait olmayan bir kanaldan içeriden çalışmak, dış imitasyon doğurur.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <h3 style={altBaslikStili}>◆ Kişilik Tipin</h3>
              <p style={paragrafStili}>
                Düşünme biçimini, karar verme yapını ve dünyaya bakış açını gösteren bir enstrüman profili. Bu profil senin "varsayılan ayarın" — karakter inşasında gerçek iş, kendi profilin ile karakterin profili arasındaki mesafeyi görmektir. Mesafeyi görmek, esneme yönünü görmektir. Hangi kasları gerip hangilerini gevşetmen gerektiğini bilirsin. Modül II'nin ilerideki Blueprint bölümünde bu mesafe görselleşecek.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <h3 style={altBaslikStili}>◆ Yıldız Oyuncu Profilin</h3>
              <p style={paragrafStili}>
                Teknik donanımını ve psikolojik kapasiteni haritalayan bir profil. ITC'nin etik temeli burada görünür: Karakter çalışırken oyuncuyu kendi sınırlarından koruruz. Bazı egzersizler derin yerlere götürür — şiddet, kayıp, ahlaki yara, varoluşsal kriz. Senin psikolojik kapasiten bu derinliklere hangi sırayla, hangi yoğunlukta erişeceğini belirler.
              </p>
            </div>
          </div>

          {/* Ayraç */}
          <hr style={{ border: 'none', borderTop: '1px solid #1a1a1a', margin: '4rem 0' }} />

          {/* Alt-bölüm 2 — Güvenli Karakter İnşası */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.6rem',
                fontWeight: 300,
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#888',
                marginBottom: '0.8rem',
              }}>
                Güvenli Karakter İnşası
              </div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.6rem',
                color: '#f0ede8',
                fontWeight: 300,
                margin: 0,
              }}>
                Seni koruyan bir zemin
              </h3>
            </div>

            <p style={paragrafStili}>
              Karakter çalışırken oyuncuyu kendi yaralarına bakmaya zorlayan yöntemler vardır. Acıyı acıdan çıkarmaya çalışırlar. Bu, kapatmayı bilmeyen bir kapı açmaktır.
            </p>

            <p style={{ ...paragrafStili, marginTop: '1.5rem' }}>
              ITC bu kapıdan girmez. Bunun yerine karakterin verisi üzerinden çalışır — Macbeth'in suçluluğu, Hamlet'in yası, Willy'nin yorgunluğu yazarın yazdığı, metinde duran verilerdir. Sen oraya gider, oyuncu olarak inşa eder, ve bedeninle birlikte çıkarsın.
            </p>

            <p style={{ ...paragrafStili, marginTop: '1.5rem' }}>
              Çıkmak da bir performanstır. Her egzersiz bir çıkış adımıyla biter; derin yerlere giden egzersizlerden sonra otomatik bir topraklanma protokolü başlar: nefes, bedene dönüş, isim, tarih, etrafı görmek.
            </p>

            <p style={{ ...paragrafStili, marginTop: '1.5rem' }}>
              Yıldız Oyuncu profilin bu sistemin nasıl çalışacağını belirler. Eğer psikolojik kapasiten bugün için belirli bir derinliğe hazır değilse, sistem o derinliği henüz açmaz. Bir kilit değil — bir bekleyiş. Diğer oyunculuk yöntemlerinin aksine ITC'nin temeli şu cümledir: <em style={{ color: '#c9a96e' }}>Karakter senin kişisel travmalarınla inşa edilmez.</em> Karakterin kendi verisi vardır. Senin yaraların seninle kalır.
            </p>
          </div>

        </div>
      </section>

      {/* BÖLÜM 5 — ALT CTA */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        textAlign: 'center',
        borderTop: '1px solid #1a1a1a',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {tamamlananSayisi === 3 ? (
            <>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                color: '#f0ede8',
                fontWeight: 300,
                margin: '0 0 1rem 0',
              }}>
                Profilin hazır.
              </h2>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: '#aaa',
                margin: '0 0 2.5rem 0',
              }}>
                Şimdi karakteri içeriden inşa etme zamanı.
              </p>
              <a
                href="/antrenman/karakter"
                style={ctaButonStili}
                onMouseEnter={ctaHoverIn}
                onMouseLeave={ctaHoverOut}
              >
                Modül II'ye Geç →
              </a>
            </>
          ) : tamamlananSayisi > 0 ? (
            <>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.5rem, 3vw, 1.8rem)',
                color: '#f0ede8',
                fontWeight: 300,
                margin: '0 0 1rem 0',
              }}>
                {3 - tamamlananSayisi} test kaldı.
              </h2>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: '#aaa',
                margin: 0,
              }}>
                Devam etmeye hazır mısın?
              </p>
            </>
          ) : (
            <>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.5rem, 3vw, 1.8rem)',
                color: '#f0ede8',
                fontWeight: 300,
                margin: '0 0 1rem 0',
              }}>
                Hazır olduğunda başla.
              </h2>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: '#aaa',
                margin: 0,
              }}>
                On beş dakika. Üç test. Bir profil.
              </p>
            </>
          )}
        </div>
      </section>

      {/* BÖLÜM 6 — PROFİL BİLGİLENDİRMESİ */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #1a1a1a',
      }}>
        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.78rem',
          fontWeight: 300,
          color: '#666',
          margin: 0,
        }}>
          Detaylı sonuçlarını dilediğin zaman{' '}
          <a
            href="/profil"
            style={{
              color: '#888',
              borderBottom: '1px solid #444',
              textDecoration: 'none',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a96e'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}
          >
            profilinde
          </a>
          {' '}bulabilirsin.
        </p>
      </section>

    </main>
  );
}
