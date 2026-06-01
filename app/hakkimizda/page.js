// app/hakkimizda/page.js
// Marka sayfasi: ITC nedir, kim kurdu, 2005'ten bugune.
// Anasayfada bio kisaltildi - tam bio'lar burada.
//
// Kanon hizalama (Karar 16/20/31 + Spine S3.17):
// - Beyti her zaman onceki sirada (Karar 20).
// - "Es Kurucu ve Es Egitmen" simetrik unvan (Karar 16, FKA es kurucu).
// - Rakam yasak (Spine S3.17): "1000'i askin oyuncu" / "20 yillik pratik"
//   ifadeleri kaldirildi.
// - "Modul III (AI sesli yolculuk)" -> "Modul III (sesli yolculuk)" (Karar 31).

'use client';

import { useDil, ceviri } from '../lib/dil';
import chromeI18n from '../../data/chrome-i18n';

// ─── Stil Objeleri (anasayfa pattern'i) ─────────────────────────────────────

// Tasarim Dili: ustEtiket bold accent (silik degil); bolumBaslik K2.
const ustEtiketStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.62rem',
  fontWeight: 600,
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: '1rem',
};

const bolumBaslikStili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: 'clamp(1.6rem, 3vw, 2rem)',
  color: 'var(--ink)',
  fontWeight: 400,
  margin: 0,
};

const ilkeKartiStili = {
  background: 'var(--bg-elevated)',
  border: '1px solid var(--rule)',
  padding: '2rem 1.8rem',
  transition: 'all 0.3s ease',
};

const ilkeNumarasiStili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.3rem',
  color: 'var(--accent)',
  marginBottom: '0.8rem',
};

const ilkeBaslikStili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.3rem',
  color: 'var(--ink)',
  fontWeight: 300,
  margin: '0 0 0.8rem 0',
};

const ilkeMetinStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.85rem',
  fontWeight: 300,
  lineHeight: 1.7,
  color: 'var(--ink-soft)',
  margin: 0,
};

const kisiEtiketStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.62rem',
  fontWeight: 600,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: '0.5rem',
};

// Tasarim Dili Faz 2: Kurucular PRIMARY — accent sol bant, sayfanin kalbi.
const kurucuKartStili = {
  background: 'var(--bg-elevated)',
  border: '1px solid var(--rule)',
  borderLeft: '4px solid var(--accent)',
  padding: '2rem 2rem 2rem 2.2rem',
};

const kisiAdStili = {
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '2rem',
  color: 'var(--ink)',
  fontWeight: 300,
  margin: 0,
};

const kisiMetinStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.9rem',
  fontWeight: 300,
  lineHeight: 1.8,
  color: 'var(--ink-soft)',
};

const kisiNotStili = {
  fontFamily: 'var(--font-body), sans-serif',
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
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.3rem',
  color: 'var(--accent)',
  letterSpacing: '0.05em',
};

const milestoneBaslikStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.9rem',
  fontWeight: 400,
  color: 'var(--ink)',
  margin: '0.4rem 0 0.6rem 0',
  letterSpacing: '0.05em',
};

const milestoneMetinStili = {
  fontFamily: 'var(--font-body), sans-serif',
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
  fontFamily: 'var(--font-body), sans-serif',
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
  fontFamily: 'var(--font-display), serif',
  fontStyle: 'italic',
  fontSize: '1.4rem',
  color: 'var(--ink)',
  fontWeight: 300,
  margin: '0.3rem 0 0 0',
};

const katmanAltBaslikStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.75rem',
  fontWeight: 300,
  letterSpacing: '0.1em',
  color: 'var(--ink-muted)',
  marginBottom: '0.6rem',
};

const katmanMetinStili = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '0.85rem',
  fontWeight: 300,
  lineHeight: 1.7,
  color: 'var(--ink-soft)',
  margin: 0,
};

// ─── Bilesen ────────────────────────────────────────────────────────────────

export default function Hakkimizda() {
  const { dil } = useDil();
  const t = ceviri(chromeI18n, dil).hakkimizda;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>
      {/* Üst nav artık global — components/Navigasyon.js */}

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
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '0.65rem',
          fontWeight: 300,
          color: 'var(--ink-muted)',
          letterSpacing: '0.4em',
          marginBottom: '2rem',
          textTransform: 'uppercase',
        }}>
          {t.heroUstEtiket}
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 300,
          color: 'var(--ink)',
          marginBottom: '1.5rem',
          marginTop: 0,
          lineHeight: 1.2,
        }}>
          {t.heroBaslik}
        </h1>

        <p style={{
          fontFamily: 'var(--font-display), serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          fontWeight: 300,
          color: 'var(--ink-soft)',
          maxWidth: '660px',
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          {t.heroAlt1}
        </p>
        {/* heroAlt2 kaldirildi (ana sayfa vurusu tekrari kirildi) */}
      </section>

      {/* BÖLÜM 2 — 2005'TEN BUGÜNE (Yatay Timeline) — yöntemin yolculuğu */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 0',
        borderTop: '1px solid var(--bg-elevated)',
        background: 'var(--bg-elevated)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', padding: '0 2rem', boxSizing: 'border-box' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div style={ustEtiketStili}>{t.tarihceUstEtiket}</div>
            <h2 style={bolumBaslikStili}>{t.tarihceBaslik}</h2>
          </div>
        </div>

        {/* Yatay scrollable serit */}
        <div style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          padding: '0.5rem 2rem 2rem',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x proximity',
        }}>
          <div style={{
            display: 'flex',
            gap: '0',
            position: 'relative',
            minWidth: 'fit-content',
            paddingTop: '2.5rem',
            paddingBottom: '0.5rem',
          }}>
            {/* Üst horizontal çizgi — tüm düğümler arasında geçer */}
            <div style={{
              position: 'absolute',
              top: '2.5rem',
              left: '120px',
              right: '120px',
              height: '1px',
              background: 'var(--rule)',
            }} />

            {t.milestone.map((m, i) => (
              <article key={i} style={{
                flexShrink: 0,
                width: 'clamp(220px, 26vw, 280px)',
                padding: '0 1rem',
                scrollSnapAlign: 'start',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Nokta — çizginin üzerinde */}
                <span aria-hidden style={{
                  position: 'absolute',
                  top: '-2.5rem',
                  left: '50%',
                  transform: 'translate(-50%, 0)',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: m.aktif ? 'var(--accent)' : 'var(--bg-base)',
                  border: `1.5px solid ${m.aktif ? 'var(--accent)' : 'var(--ink-muted)'}`,
                }} />
                {/* Yıl */}
                <span style={{
                  ...yilStili,
                  color: m.aktif ? 'var(--accent)' : 'var(--ink-muted)',
                  fontSize: '1.15rem',
                  textAlign: 'center',
                  marginTop: '0.5rem',
                }}>
                  {m.yil}
                </span>
                {/* "şimdi" rozeti */}
                {m.aktif && (
                  <span style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 600,
                    fontSize: '0.55rem',
                    letterSpacing: '0.25em',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    marginTop: '0.3rem',
                  }}>{t.tarihceSimdi}</span>
                )}
                {/* Kart */}
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem 1rem',
                  background: 'var(--bg-base)',
                  border: `1px solid ${m.aktif ? 'var(--accent)' : 'var(--rule)'}`,
                  borderLeft: m.aktif ? '3px solid var(--accent)' : '1px solid var(--rule)',
                }}>
                  <h4 style={{ ...milestoneBaslikStili, marginTop: 0 }}>{m.baslik}</h4>
                  <p style={milestoneMetinStili}>{m.metin}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BÖLÜM 3 — KURUMSAL BAĞLANTILAR (yontemin gectigi kurumlar) */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>

        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <div style={ustEtiketStili}>{t.kurumUstEtiket}</div>
          <h2 style={bolumBaslikStili}>{t.kurumBaslik}</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>

          {t.kurumlar.map((k, i) => (
            <div key={i} style={{
              background: 'transparent',
              borderLeft: '2px solid var(--rule)',
              padding: '0.4rem 1.2rem',
            }}>
              <h4 style={{
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                fontSize: '1.2rem',
                color: 'var(--ink)',
                fontWeight: 400,
                margin: '0 0 0.4rem 0',
              }}>
                {k.ad}
              </h4>
              <p style={{ ...katmanMetinStili, marginBottom: '0.8rem' }}>{k.aciklama}</p>
              <p style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
                margin: 0,
              }}>
                {k.not}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* BÖLÜM 4 — İKİ EŞ KURUCU (FULL BIOS) — Beyti önce (Karar 20) */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        borderTop: '1px solid var(--bg-elevated)',
        background: 'var(--bg-elevated)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <div style={ustEtiketStili}>{t.kurucuUstEtiket}</div>
            <h2 style={bolumBaslikStili}>{t.kurucuBaslik}</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2rem',
          }}>

            {/* Beyti Engin — PRIMARY (sayfanin kalbi, accent sol bant) */}
            <div style={kurucuKartStili}>
              <div style={kisiEtiketStili}>{t.beytiEtiket}</div>
              <h3 style={kisiAdStili}>{t.beytiAd}</h3>
              <div style={{ ...kisiMetinStili, marginTop: '1.5rem' }}>
                <p style={{ marginBottom: '1rem', marginTop: 0 }}>{t.beytiBio1}</p>
                <p style={{ marginBottom: '1rem' }}>{t.beytiBio2}</p>
                <p style={{ margin: 0 }}>{t.beytiBio3}</p>
                <p style={kisiNotStili}>{t.beytiAtolyeNot}</p>
              </div>
            </div>

            {/* Filiz Kaya Ataklı — PRIMARY */}
            <div style={kurucuKartStili}>
              <div style={kisiEtiketStili}>{t.filizEtiket}</div>
              <h3 style={kisiAdStili}>{t.filizAd}</h3>
              <div style={{ ...kisiMetinStili, marginTop: '1.5rem' }}>
                <p style={{ marginBottom: '1rem', marginTop: 0 }}>{t.filizBio1}</p>
                <p style={{ marginBottom: '1rem' }}>{t.filizBio2}</p>
                <p style={{ margin: 0 }}>{t.filizBio3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BÖLÜM 5 — ÜÇ KATMAN (Ekosistem) */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>

          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div style={ustEtiketStili}>{t.katmanUstEtiket}</div>
            <h2 style={bolumBaslikStili}>{t.katmanBaslik}</h2>
            <p style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: '1.05rem',
              color: 'var(--ink-soft)',
              margin: '1rem auto 0',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}>
              {t.katmanIntro}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>

            {t.katmanlar.map((k, i) => {
              // Faz 2 kart tipolojisi: aktif=PRIMARY (App), 'Yakında'=INERT (Method),
              // diğeri=SECONDARY (Çalışma Kitapları "Henüz yayınlanmadı").
              const isPrimary = k.aktif;
              const isInert = !k.aktif && (k.durum === 'Yakında' || k.durum === 'Coming soon');
              const kartStili = isPrimary
                ? { ...katmanKartStili, border: '2px solid var(--accent)', borderLeft: '5px solid var(--accent)', background: 'var(--bg-base)' }
                : isInert
                  ? { ...katmanKartStili, border: '1px dashed var(--rule)', background: 'transparent', opacity: 0.7 }
                  : katmanKartStili;
              return (
                <article key={i} style={kartStili}>
                  <span style={k.aktif ? durumAktifStili : durumStili}>{k.durum}</span>
                  <h3 style={katmanAdStili}>{k.ad}</h3>
                  <p style={katmanAltBaslikStili}>{k.altBaslik}</p>
                  <p style={katmanMetinStili}>{k.metin}</p>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* BÖLÜM 6 — ÜÇ İLKE ÖZETİ (en sona alindi — yontem ozeti) */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 4rem) 2rem',
        borderTop: '1px solid var(--bg-elevated)',
        background: 'var(--bg-elevated)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>

          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div style={ustEtiketStili}>{t.ilkeUstEtiket}</div>
            <h2 style={bolumBaslikStili}>{t.ilkeBaslik}</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            <div style={ilkeKartiStili}>
              <div style={ilkeNumarasiStili}>01</div>
              <h3 style={ilkeBaslikStili}>{t.ilke01Baslik}</h3>
              <p style={ilkeMetinStili}>{t.ilke01Metin}</p>
            </div>

            <div style={ilkeKartiStili}>
              <div style={ilkeNumarasiStili}>02</div>
              <h3 style={ilkeBaslikStili}>{t.ilke02Baslik}</h3>
              <p style={ilkeMetinStili}>{t.ilke02Metin}</p>
            </div>

            <div style={ilkeKartiStili}>
              <div style={ilkeNumarasiStili}>03</div>
              <h3 style={ilkeBaslikStili}>{t.ilke03Baslik}</h3>
              <p style={ilkeMetinStili}>{t.ilke03Metin}</p>
            </div>
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
        <div style={ustEtiketStili}>{t.iletisimUstEtiket}</div>
        <h2 style={bolumBaslikStili}>{t.iletisimBaslik}</h2>

        <p style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.95rem',
          color: 'var(--ink-soft)',
          margin: '1.5rem auto 2rem',
          lineHeight: 1.8,
        }}>
          {t.iletisimIntro}
        </p>

        <p style={{
          fontFamily: 'var(--font-display), serif',
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
          fontFamily: 'var(--font-body), sans-serif',
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
          <span>{t.kisiselSiteAciklama}</span>
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid var(--bg-elevated)',
        fontFamily: 'var(--font-body), sans-serif',
        fontSize: '0.7rem',
        fontWeight: 300,
        color: 'var(--ink-muted)',
        letterSpacing: '0.1em',
      }}>
        <span>{t.footerSlogan}</span>
      </footer>

    </main>
  );
}
