// app/pilot/nina/page.js
// ITC Actor's Gym — PILOT viewer (Nina Mihaylovna Zareçnaya / Çehov · Martı)
//
// İZOLASYON: Bu sayfa karakterGetir/karakter listesi/kulis'ten BAĞIMSIZ.
// Pilot şeması (kaynak provenance, durum gating, _meta) Hamlet/Willy/
// Macbeth/Biff workbook şemasından farklı — üretici çıktısının ham hâli.
// Production'a entegrasyon ayrı karar (Beyti + Filiz onayı sonrası).

'use client';

import { nina } from '../../../data/pilot/nina';

const TON = 'var(--accent)';
const ONAY = 'var(--uyari)';

function KaynakRozet({ kaynak }) {
  const renk = kaynak === 'metin' ? 'var(--onay)' : 'var(--ink-muted)';
  return (
    <span style={{
      fontFamily: 'var(--font-body), sans-serif',
      fontWeight: 200,
      fontSize: '0.55rem',
      letterSpacing: '0.2em',
      color: renk,
      textTransform: 'uppercase',
      padding: '0.15rem 0.5rem',
      border: `1px solid color-mix(in srgb, ${renk} 33%, transparent)`,
    }}>
      {kaynak}
    </span>
  );
}

function OnayRozet({ durum }) {
  if (!durum || durum === 'net') return null;
  return (
    <span style={{
      fontFamily: 'var(--font-body), sans-serif',
      fontWeight: 300,
      fontSize: '0.55rem',
      letterSpacing: '0.25em',
      color: ONAY,
      textTransform: 'uppercase',
      padding: '0.15rem 0.55rem',
      border: `1px solid color-mix(in srgb, ${ONAY} 50%, transparent)`,
      backgroundColor: 'var(--uyari-bg)',
    }}>
      ⚠ {durum}
    </span>
  );
}

function TravmaRozeti({ travma }) {
  if (!travma) return null;
  const { kategoriler = [], seviye = 0, durum, not } = travma;
  if (seviye === 0 && kategoriler.length === 0 && (!durum || durum === 'net')) return null;
  return (
    <div style={{
      padding: '0.6rem 0.9rem',
      border: `1px solid color-mix(in srgb, ${ONAY} 30%, transparent)`,
      backgroundColor: 'var(--uyari-bg)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          color: ONAY,
          textTransform: 'uppercase',
        }}>
          Travma · Seviye {seviye}
        </span>
        <OnayRozet durum={durum} />
      </div>
      {kategoriler.length > 0 && (
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {kategoriler.map((k) => (
            <span key={k} style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 300,
              fontSize: '0.62rem',
              color: 'var(--ink-soft)',
              padding: '0.1rem 0.4rem',
              border: '1px solid var(--rule)',
            }}>{k}</span>
          ))}
        </div>
      )}
      {not && (
        <p style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 300,
          fontSize: '0.72rem',
          color: 'var(--ink-muted)',
          lineHeight: 1.6,
          margin: 0,
          fontStyle: 'italic',
        }}>{not}</p>
      )}
    </div>
  );
}

function Bolum({ etiket, baslik, alt, children }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        {etiket && (
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            color: TON,
            textTransform: 'uppercase',
          }}>{etiket}</span>
        )}
        {baslik && (
          <h2 style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '1.8rem',
            color: 'var(--ink)',
            margin: 0,
            lineHeight: 1.2,
          }}>{baslik}</h2>
        )}
        {alt && (
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.85rem',
            color: 'var(--ink-muted)',
            lineHeight: 1.7,
            margin: 0,
            fontStyle: 'italic',
          }}>{alt}</p>
        )}
      </div>
      {children}
    </section>
  );
}

export default function NinaPilotSayfasi() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-base)',
      color: 'var(--ink)',
    }}>
      <article style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: '3rem 2rem 5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
      }}>

        {/* Pilot uyarı bandı */}
        <div style={{
          padding: '0.9rem 1.2rem',
          border: '1px dashed var(--rule)',
          backgroundColor: 'var(--bg-elevated)',
        }}>
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 300,
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            color: TON,
            textTransform: 'uppercase',
          }}>
            ◇ Pilot · Üretici Çıktısı · İzole Görünüm
          </span>
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.78rem',
            color: 'var(--ink-muted)',
            lineHeight: 1.7,
            margin: '0.4rem 0 0 0',
          }}>
            Bu sayfa <code>data/pilot/nina.js</code> dosyasını render eder. Production karakter pipeline'ından (Hamlet/Willy/Macbeth/Biff) <strong>BAĞIMSIZ</strong>. Şema farklı: <code>kaynak</code> provenance (metin/çıkarım), <code>durum</code> onay gating ([ONAY_BEKLIYOR]), <code>_meta</code> üretici şeffaflığı. Entegrasyon: ayrı karar.
          </p>
        </div>

        {/* Künye */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.65rem',
            letterSpacing: '0.4em',
            color: TON,
            textTransform: 'uppercase',
          }}>Pilot · Katman 1</span>
          <h1 style={{
            fontFamily: 'var(--font-display), serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(2.2rem, 6vw, 3.4rem)',
            color: 'var(--ink)',
            margin: 0,
            lineHeight: 1.1,
          }}>{nina.ad}</h1>
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.8rem',
            color: 'var(--ink-soft)',
            margin: 0,
            letterSpacing: '0.05em',
          }}>
            {nina.yazar} · <em>{nina.oyun}</em> · {nina.yazimYili} · {nina.telifDurumu}
          </p>
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.72rem',
            color: 'var(--ink-muted)',
            margin: 0,
            fontStyle: 'italic',
          }}>
            Çeviri referansı: {nina.ceviri}
          </p>
        </header>

        {/* Doğrular */}
        <Bolum etiket="Bölüm 1" baslik="Değiştirilemez Doğrular" alt="Her madde kaynak ile etiketli: metin (replik/sahne yönergesi) ya da çıkarım.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {nina.dogrular.map((d) => (
              <div key={d.id} style={{
                display: 'flex',
                gap: '0.8rem',
                alignItems: 'flex-start',
                padding: '0.7rem 0.9rem',
                border: '1px solid var(--rule)',
                backgroundColor: 'var(--bg-elevated)',
              }}>
                <KaynakRozet kaynak={d.kaynak} />
                <span style={{
                  fontFamily: 'var(--font-display), serif',
                  fontSize: '0.95rem',
                  color: 'var(--ink)',
                  lineHeight: 1.6,
                  flex: 1,
                }}>{d.metin}</span>
              </div>
            ))}
          </div>
        </Bolum>

        {/* Oyun Öncesi */}
        <Bolum etiket="Bölüm 2" baslik="Oyun Öncesi Yaşam" alt="Metnin ima ettiği, oyuncunun zihinsel inşa edeceği boşluk-öncesi katman.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <span style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 300,
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                color: 'var(--ink-soft)',
                textTransform: 'uppercase',
              }}>Olaylar</span>
              <div style={{ marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {nina.oyunOncesi.olaylar.map((o) => (
                  <div key={o.id} style={{
                    border: '1px solid var(--rule)',
                    padding: '0.8rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <KaynakRozet kaynak={o.kaynak} />
                      <span style={{
                        fontFamily: 'var(--font-display), serif',
                        fontStyle: 'italic',
                        fontSize: '1rem',
                        color: 'var(--ink)',
                      }}>{o.baslik}</span>
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: 200,
                      fontSize: '0.82rem',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}>{o.metin}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 300,
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                color: 'var(--ink-soft)',
                textTransform: 'uppercase',
              }}>İlişkiler</span>
              <div style={{ marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {nina.oyunOncesi.iliskiler.map((il, i) => (
                  <div key={i} style={{
                    border: '1px solid var(--rule)',
                    padding: '0.8rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <KaynakRozet kaynak={il.kaynak} />
                      <span style={{
                        fontFamily: 'var(--font-display), serif',
                        fontStyle: 'italic',
                        fontSize: '1rem',
                        color: 'var(--ink)',
                      }}>{il.kisi}</span>
                      <span style={{
                        fontFamily: 'var(--font-body), sans-serif',
                        fontWeight: 200,
                        fontSize: '0.62rem',
                        letterSpacing: '0.2em',
                        color: TON,
                        textTransform: 'uppercase',
                      }}>{il.tip}</span>
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: 200,
                      fontSize: '0.82rem',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}>{il.metin}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Bolum>

        {/* Perde Temaları */}
        <Bolum etiket="Bölüm 3" baslik="Perde Temaları" alt="Her perdenin Nina ekseninde taşıdığı izlek.">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.7rem' }}>
            {nina.perdeTemalari.map((p) => (
              <div key={p.perde} style={{
                border: '1px solid var(--rule)',
                padding: '0.9rem 1.1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-display), serif',
                    fontStyle: 'italic',
                    fontSize: '1.4rem',
                    color: TON,
                  }}>{p.perde}</span>
                  <span style={{
                    fontFamily: 'var(--font-display), serif',
                    fontStyle: 'italic',
                    fontSize: '1rem',
                    color: 'var(--ink)',
                  }}>{p.tema}</span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 200,
                  fontSize: '0.8rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  margin: 0,
                }}>{p.ozet}</p>
              </div>
            ))}
          </div>
        </Bolum>

        {/* Sahneler Workbook */}
        <Bolum etiket="Bölüm 4" baslik="Sahneler Workbook" alt="Oyun içindeki anlar (perde sırasıyla). Travma seviyeleri Filiz klinik onayı bekliyor.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {nina.sahnelerWorkbook.map((s) => (
              <div key={s.no} style={{
                border: '1px solid var(--rule)',
                padding: '1.1rem 1.3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.7rem',
                backgroundColor: 'var(--bg-elevated)',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-display), serif',
                    fontStyle: 'italic',
                    fontSize: '1.5rem',
                    color: TON,
                  }}>{s.no}</span>
                  <span style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 200,
                    fontSize: '0.6rem',
                    letterSpacing: '0.3em',
                    color: 'var(--ink-muted)',
                    textTransform: 'uppercase',
                  }}>Perde {s.perde}</span>
                  <span style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 200,
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    color: TON,
                    textTransform: 'uppercase',
                    marginLeft: 'auto',
                  }}>Sıcaklık {s.onerilenSicaklik}/5</span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-display), serif',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: 'var(--ink)',
                  lineHeight: 1.7,
                  margin: 0,
                }}>{s.olay}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <Etiketli e="İçsel">{s.icsel}</Etiketli>
                  <Etiketli e="Yük">{s.yuk}</Etiketli>
                  {s.replikIzi && <Etiketli e="Replik izi" italic>{s.replikIzi}</Etiketli>}
                  {s['eşikNotu'] && <Etiketli e="Eşik notu">{s['eşikNotu']}</Etiketli>}
                </div>
                <TravmaRozeti travma={s.travma} />
              </div>
            ))}
          </div>
        </Bolum>

        {/* Boşluk Seti */}
        <Bolum etiket="Bölüm 5" baslik="Boşluk Seti" alt="Metnin YAZMADIĞI, oyuncunun zihinsel inşa edeceği anlar.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {nina.boslukSet.map((b) => (
              <div key={b.id} style={{
                border: '1px solid var(--onay-rule)',
                padding: '1.2rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.7rem',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display), serif',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: 'var(--ink)',
                }}>◇ {b.ad}</span>
                <Etiketli e="Önce">{b.once}</Etiketli>
                <Etiketli e="Anlatım" italic>{b.anlatim}</Etiketli>
                <Etiketli e="Sonra">{b.sonra}</Etiketli>
                <Etiketli e="Sentez" italic>{b.sentez}</Etiketli>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 200,
                    fontSize: '0.55rem',
                    letterSpacing: '0.3em',
                    color: 'var(--onay)',
                    textTransform: 'uppercase',
                  }}>Alt Sorular</span>
                  <ul style={{ marginTop: '0.4rem', paddingLeft: '1.2rem' }}>
                    {b.altSorular.map((q, i) => (
                      <li key={i} style={{
                        fontFamily: 'var(--font-display), serif',
                        fontStyle: 'italic',
                        fontSize: '0.9rem',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.7,
                      }}>{q}</li>
                    ))}
                  </ul>
                </div>
                <TravmaRozeti travma={b.travma} />
              </div>
            ))}
          </div>
        </Bolum>

        {/* Tercihler */}
        <Bolum etiket="Bölüm 6" baslik="Tercihler (Sahneleme Kararları)" alt="⚠️ DRAMATURG ONAYI BEKLİYOR (Beyti). Model A/B/C üretti — seçim yapmadı.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {nina.tercihler.map((t) => (
              <div key={t.id} style={{
                border: `1px solid color-mix(in srgb, ${ONAY} 30%, transparent)`,
                padding: '1.1rem 1.3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 300,
                    fontSize: '0.6rem',
                    letterSpacing: '0.3em',
                    color: ONAY,
                    textTransform: 'uppercase',
                  }}>{t.id.toUpperCase()}</span>
                  <span style={{
                    fontFamily: 'var(--font-display), serif',
                    fontStyle: 'italic',
                    fontSize: '1rem',
                    color: 'var(--ink)',
                    lineHeight: 1.5,
                  }}>{t.karar}</span>
                </div>
                {['A', 'B', 'C'].map((harf) => (
                  <div key={harf} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                    <span style={{
                      width: '24px',
                      height: '24px',
                      minWidth: '24px',
                      borderRadius: '50%',
                      border: '1px solid var(--ink-muted)',
                      color: 'var(--ink-muted)',
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: 400,
                      fontSize: '0.7rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '0.1rem',
                    }}>{harf}</span>
                    <p style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: 300,
                      fontSize: '0.82rem',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.7,
                      margin: 0,
                      flex: 1,
                    }}>{t[harf]}</p>
                  </div>
                ))}
                <p style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 200,
                  fontSize: '0.72rem',
                  color: 'var(--ink-muted)',
                  lineHeight: 1.7,
                  margin: '0.3rem 0 0 0',
                  fontStyle: 'italic',
                  paddingTop: '0.5rem',
                  borderTop: '1px solid var(--rule)',
                }}>
                  <strong style={{ color: TON, fontStyle: 'normal' }}>Model eğilimi:</strong> {t.modelEgilimi}
                </p>
              </div>
            ))}
          </div>
        </Bolum>

        {/* Meta */}
        <section style={{
          border: '1px dashed var(--rule)',
          padding: '1.1rem 1.3rem',
          backgroundColor: 'var(--bg-elevated)',
        }}>
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 300,
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: TON,
            textTransform: 'uppercase',
          }}>Üretici Meta</span>
          <dl style={{
            marginTop: '0.6rem',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '0.3rem 0.9rem',
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 200,
            fontSize: '0.78rem',
          }}>
            <dt style={{ color: 'var(--ink-muted)' }}>Katman:</dt>
            <dd style={{ color: 'var(--ink-soft)', margin: 0 }}>{nina._meta.katman}</dd>
            <dt style={{ color: 'var(--ink-muted)' }}>Üretici:</dt>
            <dd style={{ color: 'var(--ink-soft)', margin: 0 }}>{nina._meta.uretici}</dd>
            <dt style={{ color: 'var(--ink-muted)' }}>İnsan kararı bekleyen:</dt>
            <dd style={{ color: 'var(--ink-soft)', margin: 0 }}>{nina._meta.insanKarariBekleyen.join(' · ')}</dd>
            <dt style={{ color: 'var(--ink-muted)' }}>Uydurma kontrolü:</dt>
            <dd style={{ color: 'var(--ink-soft)', margin: 0 }}>{nina._meta.uydurmaKontrolu}</dd>
            <dt style={{ color: 'var(--ink-muted)' }}>Sonraki adım:</dt>
            <dd style={{ color: 'var(--ink-soft)', margin: 0 }}>{nina._meta.sonrakiAdim}</dd>
          </dl>
        </section>

      </article>
    </main>
  );
}

function Etiketli({ e, children, italic }) {
  return (
    <div>
      <span style={{
        fontFamily: 'var(--font-body), sans-serif',
        fontWeight: 200,
        fontSize: '0.55rem',
        letterSpacing: '0.3em',
        color: 'var(--ink-muted)',
        textTransform: 'uppercase',
      }}>{e}</span>
      <p style={{
        fontFamily: italic ? 'var(--font-display), serif' : 'var(--font-body), sans-serif',
        fontStyle: italic ? 'italic' : 'normal',
        fontWeight: italic ? 300 : 200,
        fontSize: italic ? '0.92rem' : '0.82rem',
        color: 'var(--ink-soft)',
        lineHeight: 1.7,
        margin: '0.2rem 0 0 0',
      }}>{children}</p>
    </div>
  );
}
