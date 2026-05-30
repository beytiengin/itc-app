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
          fontFamily: 'Jost, sans-serif',
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
          fontFamily: 'Cormorant Garamond, serif',
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
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          fontWeight: 300,
          color: 'var(--ink-soft)',
          maxWidth: '660px',
          margin: '0 auto 1.5rem',
          lineHeight: 1.7,
        }}>
          {t.heroAlt1}
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
          {t.heroAlt2}
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

      {/* BÖLÜM 3 — İKİ EŞ KURUCU (FULL BIOS) — Beyti önce (Karar 20) */}
      <section style={{
        padding: 'clamp(3rem, 7vw, 5rem) 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={ustEtiketStili}>{t.kurucuUstEtiket}</div>
          <h2 style={bolumBaslikStili}>{t.kurucuBaslik}</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '3rem',
        }}>

          {/* Beyti Engin */}
          <div>
            <div style={kisiEtiketStili}>{t.beytiEtiket}</div>
            <h3 style={kisiAdStili}>{t.beytiAd}</h3>
            <div style={{ ...kisiMetinStili, marginTop: '1.5rem' }}>
              <p style={{ marginBottom: '1rem', marginTop: 0 }}>{t.beytiBio1}</p>
              <p style={{ marginBottom: '1rem' }}>{t.beytiBio2}</p>
              <p style={{ margin: 0 }}>{t.beytiBio3}</p>
              <p style={kisiNotStili}>{t.beytiAtolyeNot}</p>
            </div>
          </div>

          {/* Filiz Kaya Ataklı */}
          <div>
            <div style={kisiEtiketStili}>{t.filizEtiket}</div>
            <h3 style={kisiAdStili}>{t.filizAd}</h3>
            <div style={{ ...kisiMetinStili, marginTop: '1.5rem' }}>
              <p style={{ marginBottom: '1rem', marginTop: 0 }}>{t.filizBio1}</p>
              <p style={{ marginBottom: '1rem' }}>{t.filizBio2}</p>
              <p style={{ margin: 0 }}>{t.filizBio3}</p>
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
            <div style={ustEtiketStili}>{t.tarihceUstEtiket}</div>
            <h2 style={bolumBaslikStili}>{t.tarihceBaslik}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {t.milestone.map((m, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(110px, 140px) 1fr',
                gap: '1.5rem',
                paddingBottom: '1.5rem',
                borderBottom: i < t.milestone.length - 1 ? '1px solid var(--rule)' : 'none',
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
          <div style={ustEtiketStili}>{t.katmanUstEtiket}</div>
          <h2 style={bolumBaslikStili}>{t.katmanBaslik}</h2>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
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

          {t.katmanlar.map((k, i) => (
            <article key={i} style={k.aktif ? { ...katmanKartStili, borderColor: 'var(--accent)' } : katmanKartStili}>
              <span style={k.aktif ? durumAktifStili : durumStili}>{k.durum}</span>
              <h3 style={katmanAdStili}>{k.ad}</h3>
              <p style={katmanAltBaslikStili}>{k.altBaslik}</p>
              <p style={katmanMetinStili}>{k.metin}</p>
            </article>
          ))}

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
        <div style={ustEtiketStili}>{t.iletisimUstEtiket}</div>
        <h2 style={bolumBaslikStili}>{t.iletisimBaslik}</h2>

        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 300,
          fontSize: '0.95rem',
          color: 'var(--ink-soft)',
          margin: '1.5rem auto 2rem',
          lineHeight: 1.8,
        }}>
          {t.iletisimIntro}
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
          <span>{t.kisiselSiteAciklama}</span>
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
        <span>{t.footerSlogan}</span>
      </footer>

    </main>
  );
}
