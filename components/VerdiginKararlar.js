// ============================================================
// DEFTER — "Verdiğin Kararlar" bölümü (v2)
//
// DEĞİŞTİ (v1 → v2):
// - Artık 47 soruluk harita YOK. Sadece oyuncunun MÜHÜRLEDİĞİ kararlar görünür.
// - Boş hal: tek, sakin bir davet kartı. (kitabe duvarı kaldırıldı)
// - Başlık hiyerarşisi güçlendirildi (BolumBasligi — site geneli kademe).
//
// Veri: kararlariGetir(karakterId, data) → { yorumlar, muhurler, bos }
// ============================================================

// ── Başlık hiyerarşisi (site geneli öneri) ──
//   SAYFA başlığı : clamp(2rem, 5vw, 3.2rem)        (zaten var)
//   BÖLÜM başlığı : clamp(1.5rem, 3.5vw, 2.1rem)    ← YENİ NET KADEME
//   alt-başlık    : 1.05rem
//   gövde         : 0.86rem
// Bu bileşen BÖLÜM kademesini kullanır; aynı ölçeği diğer bölümlere de ver.
function BolumBasligi({ etiket, baslik }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '0.2rem' }}>
      <span style={{
        fontFamily: 'var(--font-body), sans-serif', fontWeight: 300,
        fontSize: '0.62rem', letterSpacing: '0.42em',
        color: 'var(--accent)', textTransform: 'uppercase',
      }}>
        {etiket}
      </span>
      <h2 style={{
        fontFamily: 'var(--font-display), serif', fontWeight: 300,
        fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)',
        lineHeight: 1.15, color: 'var(--ink)', margin: 0,
      }}>
        {baslik}
      </h2>
    </div>
  );
}

// Kararın hangi olay/sahne/boşluk için verildiğini gösteren konum etiketi.
// Alt alta dizilen kararlarda bağlamı korur.
function baglamEtiketi(baglam, t) {
  if (!baglam) return '';
  const baslik = baglam.baslik || '';
  if (baglam.kaynak === 'sahne') {
    const onek = `${t.kararlarBaglamSahne} ${baglam.no ?? ''}`.trim();
    return baslik ? `${onek} · ${baslik}` : onek;
  }
  const onek = baglam.kaynak === 'olay' ? t.kararlarBaglamOlay : t.kararlarBaglamBosluk;
  return baslik ? `${onek} · ${baslik}` : onek;
}

function VerdiginKararlar({ t, kararlar }) {
  const muhurMap = {};
  (kararlar?.muhurler || []).forEach((m) => { if (m.metin) muhurMap[m.anId] = m; });
  const yorumMap = {};
  (kararlar?.yorumlar || []).forEach((y) => { yorumMap[y.anId] = y; });

  const anIds = Object.keys(muhurMap);
  const dolu = anIds.length > 0;

  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
      <BolumBasligi etiket={t.kararlarEtiket} baslik={t.kararlarBaslik} />

      {!dolu && (
        <div style={{
          padding: '1.6rem 1.4rem',
          border: '1px solid var(--rule)',
          display: 'flex', flexDirection: 'column', gap: '0.5rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-display), serif', fontWeight: 300,
            fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--ink-soft)', margin: 0,
          }}>
            {t.kararlarBosBaslik}
          </p>
          <p style={{
            fontFamily: 'var(--font-body), sans-serif', fontWeight: 300,
            fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--ink-muted)', margin: 0,
            maxWidth: 460,
          }}>
            {t.kararlarBosAlt}
          </p>
        </div>
      )}

      {dolu && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {anIds.map((anId) => {
            const muhur = muhurMap[anId];
            const yorum = yorumMap[anId];
            const baglam = (yorum && yorum.baglam) || muhur.baglam;
            const baglamMetni = baglamEtiketi(baglam, t);
            return (
              <div
                key={anId}
                style={{
                  display: 'flex', flexDirection: 'column', gap: '0.4rem',
                  paddingLeft: '0.95rem',
                  borderLeft: '2px solid var(--accent)',
                }}
              >
                {baglamMetni && (
                  <span style={{
                    fontFamily: 'var(--font-body), sans-serif', fontWeight: 300,
                    fontSize: '0.6rem', letterSpacing: '0.18em',
                    color: 'var(--ink-muted)', textTransform: 'uppercase',
                  }}>
                    {baglamMetni}
                  </span>
                )}
                {yorum && (
                  <span style={{
                    fontFamily: 'var(--font-body), sans-serif', fontWeight: 400,
                    fontSize: '0.7rem', letterSpacing: '0.04em',
                    color: 'var(--accent)', textTransform: 'uppercase',
                  }}>
                    {yorum.secilenBaslik}
                  </span>
                )}
                <p style={{
                  fontFamily: 'var(--font-display), serif', fontWeight: 300,
                  fontSize: '1.02rem', lineHeight: 1.6, color: 'var(--ink)', margin: 0,
                }}>
                  {muhur.metin}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

// ─── METİNLER (chrome-i18n.kulis bloğuna spread'lenir) ──────────────────────
export const KARARLAR_METIN = {
  tr: {
    kararlarEtiket: 'Verdiğin Kararlar',
    kararlarBaslik: 'Karakteri kurarken seçtiklerin',
    kararlarBosBaslik: 'Henüz bir karar mühürlemedin.',
    kararlarBosAlt:
      'Karakteri çalışırken verdiğin yorumlar ve mühürlediğin anlar burada toplanacak. İlk kararını, karakterin el-yazması bölümünde bir ana dokunarak verirsin.',
    kararlarBaglamOlay: 'Oyun Öncesi',
    kararlarBaglamSahne: 'Sahne',
    kararlarBaglamBosluk: 'Boşluk',
  },
  en: {
    kararlarEtiket: 'Your Decisions',
    kararlarBaslik: 'What you chose while building the character',
    kararlarBosBaslik: 'You haven’t sealed a decision yet.',
    kararlarBosAlt:
      'The readings you make and the moments you seal while working on the character will gather here. You make your first decision by touching a moment in the character’s handwriting mode.',
    kararlarBaglamOlay: 'Before the Play',
    kararlarBaglamSahne: 'Scene',
    kararlarBaglamBosluk: 'Gap',
  },
  de: {
    kararlarEtiket: 'Deine Entscheidungen',
    kararlarBaslik: 'Was du beim Aufbau der Figur gewählt hast',
    kararlarBosBaslik: 'Du hast noch keine Entscheidung versiegelt.',
    kararlarBosAlt:
      'Die Lesarten und die Augenblicke, die du beim Arbeiten an der Figur versiegelst, sammeln sich hier. Deine erste Entscheidung triffst du, indem du im Handschrift-Modus der Figur einen Augenblick berührst.',
    kararlarBaglamOlay: 'Vor dem Stück',
    kararlarBaglamSahne: 'Szene',
    kararlarBaglamBosluk: 'Lücke',
  },
};

export { BolumBasligi };
export default VerdiginKararlar;
