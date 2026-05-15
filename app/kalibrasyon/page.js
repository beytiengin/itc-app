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
  color: 'var(--ink-muted)',
  marginBottom: '1rem',
};

const altBaslikStili = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'italic',
  fontSize: '1.3rem',
  color: 'var(--accent)',
  fontWeight: 300,
  margin: '0 0 1rem 0',
};

const paragrafStili = {
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.95rem',
  fontWeight: 300,
  lineHeight: 1.85,
  color: 'var(--ink-soft)',
  margin: 0,
};

const ctaButonStili = {
  display: 'inline-block',
  padding: '1rem 2.5rem',
  background: 'transparent',
  border: '1px solid var(--accent)',
  color: 'var(--accent)',
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.85rem',
  fontWeight: 300,
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
};
function ctaHoverIn(e) { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg-base)'; }
function ctaHoverOut(e) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }

// ─── Test Kartı (inline component) ─────────────────────────────────────────

function TestKarti({ url, baslik, altbaslik, aciklama, meta, tamamlandi, sonuc }) {
  return (
    <a
      href={url}
      style={{
        display: 'block',
        background: 'var(--bg-elevated)',
        border: '1px solid var(--rule)',
        padding: '2rem 2.5rem',
        marginBottom: '1.5rem',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.7rem',
          fontWeight: 300,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--ink)',
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
            color: 'var(--onay)',
          }}>
            ✓ Tamamlandı
          </div>
        ) : (
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 300,
            color: 'var(--accent)',
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
        color: 'var(--accent)',
        marginBottom: '1rem',
      }}>
        {altbaslik}
      </div>

      <p style={{
        fontFamily: 'Jost, sans-serif',
        fontSize: '0.88rem',
        fontWeight: 300,
        lineHeight: 1.7,
        color: 'var(--ink-soft)',
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
          color: 'var(--ink-muted)',
          letterSpacing: '0.1em',
        }}>
          {meta}
        </div>
        {sonuc && (
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 300,
            color: 'var(--onay)',
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
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>

      {/* HEADER */}
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
          fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.65rem',
          letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase', textDecoration: 'none',
        }}>
          Inside The Character
        </a>
        <a href="/" style={{
          fontFamily: 'Jost, sans-serif', fontWeight: 200, fontSize: '0.6rem',
          letterSpacing: '0.25em', color: 'var(--ink-soft)', textTransform: 'uppercase', textDecoration: 'none',
          transition: 'color 0.25s ease',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}>
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
        <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--accent)', opacity: 0.4, margin: '0 auto 1.8rem' }} />
        <div style={ustEtiketStili}>Modül I</div>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(2.3rem, 5vw, 3.4rem)',
          fontWeight: 300,
          color: 'var(--ink)',
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
          color: 'var(--ink-soft)',
          maxWidth: '600px',
          margin: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.7,
        }}>
          Üç analiz, tek bir enstrüman profili. Önerilen sıra: Duyusal Kanal → Kişilik Tipi → Yıldız Oyuncu. Tamamlamak şart değil — dilediğin yerden başlayabilirsin.
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
            renk="var(--accent)"
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
          baslik="Duyusal Kanal Tercihi"
          altbaslik="Görsel · İşitsel · Kinestetik"
          aciklama="Hangi duyusal kanaldan dünyaya öncelikle bağlandığını gösterir. Yöntem bu tercihe göre farklı kapılar sunar."
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
          altbaslik="Parlayan yönlerin · Gelişim alanların · Yol planın"
          aciklama="Altı boyutlu öz-farkındalık haritan + karaktere yaklaşım kılavuzun."
          meta="37 kriter · ~5 dk"
          tamamlandi={yildiz !== null}
          sonuc={yildizSonucMetni}
        />
      </section>

      {/* BÖLÜM 4 — YÖNTEM VE ETİK */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        marginTop: '3rem',
        borderTop: '1px solid var(--bg-elevated)',
        background: 'var(--bg-elevated)',
      }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>

          {/* Üst başlık */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <div style={ustEtiketStili}>Yöntem</div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.6rem, 3vw, 2rem)',
              color: 'var(--ink)',
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
              <h3 style={altBaslikStili}>◆ Duyusal Kanal Tercihin</h3>
              <p style={paragrafStili}>
                Hangi duyusal kanaldan dünyaya öncelikle bağlandığını gösterir: görsel, işitsel ya da kinestetik. Karakteri inşa ederken, bedensel antrenmanların derinleşme aşaması senin baskın kanalına göre şekillenir. Bir karakteri "görerek" mi, "duyarak" mı, yoksa "hissederek" mi içine alıyorsun — yöntem buna göre kendini ayarlar. Bu bir öğrenme yetisi değil, bir tercihtir. Sahnede klişelere düşmemenin ilk adımı budur — çünkü oyuncuya hiç ait olmayan bir kanaldan içeriden çalışmak, dış imitasyon doğurur.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <h3 style={altBaslikStili}>◆ Kişilik Tipin</h3>
              <p style={paragrafStili}>
                Düşünme biçimini, karar verme yapını ve dünyaya bakış açını gösteren bir enstrüman profili. Bu profil senin "varsayılan ayarın" — karakter inşasında gerçek iş, kendi profilin ile karakterin profili arasındaki mesafeyi görmektir. Mesafeyi görmek, esneme yönünü görmektir. Hangi kasları gerip hangilerini gevşetmen gerektiğini bilirsin. Modül II'nin ilerleyen aşamalarında bu mesafe görselleşecek.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <h3 style={altBaslikStili}>◆ Yıldız Oyuncu Profilin</h3>
              <p style={paragrafStili}>
                Altı boyutlu bir öz-farkındalık haritası — teknik donanımın, psikolojik sağlamlığın, mesleki tutumun, yaratıcı kapasiten, entelektüel derinliğin, ilişki ve ifade gücün. Hangi eksenlerin parladığını, hangilerinin gelişmeyi beklediğini görürsün; kendine bir rota çizebilirsin. Karakter çalışırken bu harita "açık kapıların" gösterir — güçlü eksenler karaktere giriş yolun olur, zayıf eksenler yapıyı geliştirebileceğin alanları işaretler.
              </p>
            </div>
          </div>

          {/* Ayraç */}
          <hr style={{ border: 'none', borderTop: '1px solid var(--bg-elevated)', margin: '4rem 0' }} />

          {/* Alt-bölüm 2 — Güvenli Karakter İnşası */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.6rem',
                fontWeight: 300,
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
                marginBottom: '0.8rem',
              }}>
                Güvenli Karakter İnşası
              </div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.6rem',
                color: 'var(--ink)',
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
              Bu güvenlik sahnenin içeriğinden gelir. Karakterin sahnesi yoğun bir travma kategorisi taşıyorsa sistem seni önceden uyarır; yoğun sahneler sonrası otomatik topraklanma adımına geçer. ITC'nin temeli şu cümledir: <em style={{ color: 'var(--accent)' }}>Karakter senin kişisel travmalarınla inşa edilmez.</em> Karakterin kendi verisi vardır. Senin yaraların seninle kalır.
            </p>
          </div>

        </div>
      </section>

      {/* BÖLÜM 5 — ALT CTA */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        textAlign: 'center',
        borderTop: '1px solid var(--bg-elevated)',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {tamamlananSayisi === 3 ? (
            <>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                color: 'var(--ink)',
                fontWeight: 300,
                margin: '0 0 1rem 0',
              }}>
                Profilin hazır.
              </h2>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--ink-soft)',
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
                color: 'var(--ink)',
                fontWeight: 300,
                margin: '0 0 1rem 0',
              }}>
                {3 - tamamlananSayisi} test kaldı.
              </h2>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--ink-soft)',
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
                color: 'var(--ink)',
                fontWeight: 300,
                margin: '0 0 1rem 0',
              }}>
                Hazır olduğunda başla.
              </h2>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--ink-soft)',
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
        borderTop: '1px solid var(--bg-elevated)',
      }}>
        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.78rem',
          fontWeight: 300,
          color: 'var(--ink-muted)',
          margin: 0,
        }}>
          Detaylı sonuçlarını dilediğin zaman{' '}
          <a
            href="/profil"
            style={{
              color: 'var(--ink-muted)',
              borderBottom: '1px solid var(--rule)',
              textDecoration: 'none',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-muted)'; }}
          >
            profilinde
          </a>
          {' '}bulabilirsin.
        </p>
      </section>

    </main>
  );
}
