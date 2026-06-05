// ============================================================
// DEFTER — "Verdiğin Kararlar" bölümü
// app/defter/page.js içine entegre edilen bileşen + metinler.
//
// Veri: kararlariGetir(karakterId, data) → { yorumlar, muhurler, bos }
// Felsefe: boş Defter, karakterin SORACAĞI soruların haritasıdır.
//   - Hayalet (boş) hâl → anın sorusu soluk görünür (spoiler değil)
//   - Dolu hâl          → oyuncunun seçtiği yorum + kendi mührü net görünür
//
// Görsel dil mevcut sayfayla aynı: inline style + CSS değişkenleri,
// serif başlık, ince ağırlık, --accent çizgiler, dashed/soluk = bekleyen.
// ============================================================

// props:
//   t              — metin sözlüğü (aşağıdaki KARARLAR_METIN)
//   haritaSorulari — [{ anId, soru, tip }]  (anHaritasiniGetir(data))
//   kararlar       — { yorumlar:[{anId,secilenBaslik,dal}], muhurler:[{anId,metin,tur}], bos }

function VerdiginKararlar({ t, haritaSorulari, kararlar }) {
  const yorumMap = {};
  (kararlar?.yorumlar || []).forEach((y) => { yorumMap[y.anId] = y; });
  const muhurMap = {};
  (kararlar?.muhurler || []).forEach((m) => { muhurMap[m.anId] = m; });

  const toplamKarar = (kararlar?.yorumlar?.length || 0) + (kararlar?.muhurler?.length || 0);
  const toplamAn = haritaSorulari.length;

  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
      {/* Bölüm başlığı */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif', fontWeight: 200,
          fontSize: '0.6rem', letterSpacing: '0.4em',
          color: 'var(--accent)', textTransform: 'uppercase',
        }}>
          {t.kararlarEtiket}
        </span>
        <h2 style={{
          fontFamily: 'var(--font-display), serif', fontWeight: 300,
          fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: 'var(--ink)', margin: 0,
        }}>
          {t.kararlarBaslik}
        </h2>
        <p style={{
          fontFamily: 'var(--font-body), sans-serif', fontWeight: 200,
          fontSize: '0.82rem', color: 'var(--ink-soft)', lineHeight: 1.7,
          margin: 0, maxWidth: 540,
        }}>
          {toplamKarar === 0 ? t.kararlarIntroBos : t.kararlarIntroDolu}
        </p>
        {toplamAn > 0 && (
          <span style={{
            fontFamily: 'var(--font-body), sans-serif', fontWeight: 200,
            fontSize: '0.68rem', letterSpacing: '0.15em',
            color: 'var(--ink-muted)', textTransform: 'uppercase', marginTop: '0.2rem',
          }}>
            {toplamKarar} / {toplamAn} {t.kararlarSayac}
          </span>
        )}
      </div>

      {/* Soruların haritası — her an bir satır */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {haritaSorulari.map((an, i) => {
          const yorum = yorumMap[an.anId];
          const muhur = muhurMap[an.anId];
          const dolu = !!(yorum || muhur);

          return (
            <div
              key={an.anId}
              style={{
                display: 'flex', flexDirection: 'column', gap: '0.4rem',
                padding: '0.95rem 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--rule)',
              }}
            >
              {/* Üst satır: anın sorusu (her zaman görünür) */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem' }}>
                <span aria-hidden style={{
                  flexShrink: 0, marginTop: '0.45rem',
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: dolu ? 'var(--accent)' : 'transparent',
                  border: dolu ? 'none' : '1px solid var(--rule)',
                  opacity: dolu ? 0.85 : 0.5,
                }} />
                <p style={{
                  fontFamily: 'var(--font-body), sans-serif', fontWeight: 300,
                  fontSize: '0.86rem', lineHeight: 1.6, margin: 0,
                  color: dolu ? 'var(--ink)' : 'var(--ink-soft)',
                  opacity: dolu ? 1 : 0.55,
                  fontStyle: dolu ? 'normal' : 'italic',
                }}>
                  {an.soru || t.kararlarSorusuz}
                </p>
              </div>

              {/* Dolu hâl: oyuncunun yorumu + mührü */}
              {yorum && (
                <div style={{ paddingLeft: '1.4rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-body), sans-serif', fontWeight: 400,
                    fontSize: '0.8rem', color: 'var(--accent)',
                  }}>
                    {yorum.secilenBaslik}
                  </span>
                </div>
              )}
              {muhur && muhur.metin && (
                <p style={{
                  margin: 0,
                  fontFamily: 'var(--font-display), serif', fontWeight: 300,
                  fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--ink)',
                  borderLeft: '2px solid var(--accent)',
                  marginLeft: '1.4rem', paddingLeft: '0.85rem',
                }}>
                  “{muhur.metin}”
                </p>
              )}

              {/* Hayalet hâl: bekleyen mühür izi */}
              {!dolu && (
                <span style={{
                  paddingLeft: '1.4rem',
                  fontFamily: 'var(--font-body), sans-serif', fontWeight: 200,
                  fontSize: '0.68rem', letterSpacing: '0.12em',
                  color: 'var(--ink-muted)', textTransform: 'uppercase',
                  opacity: 0.45,
                }}>
                  {an.tip === 'yazma' ? t.kararlarBekleyenYazma : t.kararlarBekleyenSecim}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── METİNLER (chrome-i18n.kulis bloğuna spread'lenir) ──────────────────────
export const KARARLAR_METIN = {
  tr: {
    kararlarEtiket: 'Verdiğin Kararlar',
    kararlarBaslik: 'Karakterin sana soracakları',
    kararlarIntroBos:
      'Bu sayfa, karakterin sana yönelteceği soruların haritası. Her satır, henüz cevaplamadığın bir an. Sen bir karar verdikçe, soru senin sözlerine dönüşecek.',
    kararlarIntroDolu:
      'Karaktere dair verdiğin her karar burada birikiyor. Bunlar senin yorumların — karakterin iç gerçekliği, senin seçtiğin yoldan kuruluyor.',
    kararlarSayac: 'an mühürlendi',
    kararlarBekleyenSecim: 'bir yorum bekliyor',
    kararlarBekleyenYazma: 'mühürlenmeyi bekliyor',
    kararlarSorusuz: 'Bu an seni sessizce bekliyor.',
  },
  en: {
    kararlarEtiket: 'Your Decisions',
    kararlarBaslik: 'What the character will ask you',
    kararlarIntroBos:
      'This page is a map of the questions the character will put to you. Each line is a moment you haven’t answered yet. As you decide, the question turns into your own words.',
    kararlarIntroDolu:
      'Every decision you make about the character gathers here. These are your readings — the character’s inner truth is built along the path you choose.',
    kararlarSayac: 'moments sealed',
    kararlarBekleyenSecim: 'awaits a reading',
    kararlarBekleyenYazma: 'awaits sealing',
    kararlarSorusuz: 'This moment waits for you in silence.',
  },
  de: {
    kararlarEtiket: 'Deine Entscheidungen',
    kararlarBaslik: 'Was die Figur dich fragen wird',
    kararlarIntroBos:
      'Diese Seite ist eine Karte der Fragen, die die Figur dir stellen wird. Jede Zeile ist ein Augenblick, den du noch nicht beantwortet hast. Wenn du entscheidest, wird die Frage zu deinen eigenen Worten.',
    kararlarIntroDolu:
      'Jede Entscheidung, die du über die Figur triffst, sammelt sich hier. Das sind deine Lesarten — die innere Wahrheit der Figur wird auf dem Weg gebaut, den du wählst.',
    kararlarSayac: 'Augenblicke versiegelt',
    kararlarBekleyenSecim: 'wartet auf eine Lesart',
    kararlarBekleyenYazma: 'wartet auf das Siegel',
    kararlarSorusuz: 'Dieser Augenblick wartet still auf dich.',
  },
};

export default VerdiginKararlar;
