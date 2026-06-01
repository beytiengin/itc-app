// app/profil/page.js
// ITC Actor's Gym — Profil sayfası (Yorum Yüzü + Katlanır Detay)
//
// Profil iki katmanlı:
//  A. Yorum Yüzü (sayfanın merkezi) — register fonksiyonlarının çıktıları
//     düzyazı olarak. Çıplak sayı YOK; oyunculukta ne işe yaradığını söyler.
//     Yorum metinleri lib/kalibrasyon.js içinde tutulur (Beyti/Filiz zenginleştirir);
//     bu sayfa sadece çağırır + diziler. Yeni yorum metni burada YAZILMAZ.
//  B. Ayrıntılı haritalar (katlanır, varsayılan kapalı) — KalibrasyonOzeti
//     dört çubuk haritası. İsteyen açıp sayıyı görür.
//
// Boş-durum: kalibrasyon hiç yapılmadıysa "Enstrümanın henüz okunmadı" daveti.
// Yarım veride sadece dolu register satırları gösterilir; eksikler gizlenir
// (soğuk 0/X yerine sessizlik).

'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useDil, ceviri } from '../lib/dil';
import chromeI18n from '../../data/chrome-i18n';
import TemaSecici from '../../components/TemaSecici';
import KalibrasyonOzeti from '../../components/KalibrasyonOzeti';
import Katlanir from '../../components/Katlanir';
import {
  getKalibrasyonProfili,
  vakDili,
  pankseppGucluZayif,
  pankseppYaklasimi,
  profilRegister,
  beceriGucluZayif,
} from '../lib/kalibrasyon';

export default function Profil() {
  const { dil } = useDil();
  const t = ceviri(chromeI18n, dil).profil;
  const [kullanici, setKullanici] = useState(null);
  const [kalib, setKalib] = useState(undefined); // undefined=yükleniyor, null=oturum yok
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function verileriGetir() {
      const [{ data: { user } }, profil] = await Promise.all([
        supabase.auth.getUser(),
        getKalibrasyonProfili(),
      ]);
      if (user) setKullanici(user);
      setKalib(profil);
      setYukleniyor(false);
    }
    verileriGetir();
  }, []);

  if (yukleniyor) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{t.hazirlaniyor}</span>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)', color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>
      {/* Üst nav artık global — components/Navigasyon.js */}

      <section style={{ flex: 1, padding: '3rem 2rem', maxWidth: '680px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.6rem' }}>

        {/* A. Başlık */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--accent)', opacity: 0.4 }} />
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.4em', color: 'var(--accent)', textTransform: 'uppercase' }}>{t.enstrumanProfili}</span>
          <h1 style={{ fontFamily: 'var(--font-display), serif', fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--ink)', margin: 0 }}>
            {kullanici?.user_metadata?.ad || kullanici?.email}
          </h1>
          <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.85rem', color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0.4rem 0 0' }}>
            {t.nedenBurada}
          </p>
        </div>

        {/* B. YORUM YÜZÜ — register'dan beslenen düzyazı okuma */}
        <YorumYuzu t={t} kalib={kalib} />

        {/* C. Ayrıntılı haritalar — katlanır detay (varsayılan kapalı) */}
        {kalib && !kalib.hicYok && (
          <Katlanir
            etiket={t.ayrintiliHaritalarEtiket}
            baslik={t.ayrintiliHaritalarBaslik}
            varsayilanAcik={false}
          >
            <KalibrasyonOzeti lang={dil} />
          </Katlanir>
        )}

        {/* D. Görünüm */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase' }}>{t.gorunum}</span>
          </div>
          <p style={{ fontFamily: 'var(--font-display), serif', fontWeight: 300, fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>
            {t.gorunumYardim}
          </p>
          <TemaSecici stil="radyo" />
        </div>

        {/* E. Alt linkler */}
        <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '2rem', paddingBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="/kalibrasyon" style={{ flex: 1, display: 'block', padding: '1.2rem', border: '1px solid var(--rule)', color: 'var(--ink)', textDecoration: 'none', fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              {t.kalibrasyonaGit}
            </a>
            <a href="/antrenman" style={{ flex: 1, display: 'block', padding: '1.2rem', border: '1px solid var(--accent)', color: 'var(--accent)', textDecoration: 'none', fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg-base)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}>
              {t.antrenmanOdasi}
            </a>
          </div>
          <a href="/kulis" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '0.8rem', color: 'var(--ink-muted)', textDecoration: 'none', fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '0.9rem', transition: 'color 0.25s ease' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-muted)'; }}>
            {t.kulisLink}
          </a>
        </div>

      </section>
    </main>
  );
}

// ─── YORUM YÜZÜ ─────────────────────────────────────────────────────────────
// Register fonksiyonlarının ÇIKTILARINI dizer. Yeni yorum metni YAZILMAZ.
// Eksik veri için ilgili satır gizlenir (soğuk 0/X yerine sessizlik).

function YorumYuzu({ t, kalib }) {
  if (!kalib || kalib.hicYok) {
    return <YorumBosDavet t={t} />;
  }

  const acikKapi = kalib.vak?.baskin ? vakDili(kalib.vak.baskin) : null;
  const pankBaskin = kalib.panksepp ? pankseppGucluZayif(kalib.panksepp).baskin : null;
  const giris = pankBaskin ? pankseppYaklasimi(pankBaskin.id) : null;
  const register = kalib.profil ? profilRegister(kalib.profil) : null;
  const beceriGuclu = kalib.beceri ? beceriGucluZayif(kalib.beceri).guclu : null;

  const satirlar = [];
  if (acikKapi) satirlar.push({ baslik: t.acikKapin, ust: acikKapi.etiket, body: acikKapi.ipucu });
  if (giris) satirlar.push({ baslik: t.karakterGirisi, ust: giris.etiket, body: giris.kapi });
  if (register) satirlar.push({ baslik: t.calismaRegisterin, body: register.not });
  if (beceriGuclu) satirlar.push({ baslik: t.enGucluAlan, body: beceriGuclu.ad });

  // Hiç satır oluşmadıysa (teorik olarak hicYok bunu zaten yakalar): davet.
  if (satirlar.length === 0) return <YorumBosDavet t={t} />;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
      <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--accent)', textTransform: 'uppercase' }}>{t.yorumYuzuEtiket}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
        {satirlar.map((s, i) => (
          <YorumSatir key={i} baslik={s.baslik} ust={s.ust} body={s.body} />
        ))}
      </div>
    </div>
  );
}

function YorumSatir({ baslik, ust, body }) {
  return (
    <div style={{ borderLeft: '2px solid color-mix(in srgb, var(--accent) 32%, transparent)', paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
      <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.58rem', letterSpacing: '0.28em', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>{baslik}</span>
      {ust && (
        <span style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.08rem', color: 'var(--accent)', lineHeight: 1.3 }}>{ust}</span>
      )}
      {body && (
        <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink)', margin: 0, lineHeight: 1.65 }}>{body}</p>
      )}
    </div>
  );
}

function YorumBosDavet({ t }) {
  return (
    <div style={{ border: '1px solid var(--rule)', padding: '1.8rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <span style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--accent)', textTransform: 'uppercase' }}>{t.yorumYuzuEtiket}</span>
      <p style={{ fontFamily: 'var(--font-display), serif', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink)', margin: 0, lineHeight: 1.55 }}>{t.yorumYuzuBosBaslik}</p>
      <p style={{ fontFamily: 'var(--font-body), sans-serif', fontWeight: 200, fontSize: '0.85rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.65 }}>{t.yorumYuzuBosMetin}</p>
      <a href="/kalibrasyon" style={{ marginTop: '0.3rem', padding: '0.8rem 1.5rem', backgroundColor: 'var(--accent)', color: 'var(--bg-base)', textDecoration: 'none', fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', transition: 'all 0.25s ease' }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--accent-hover)'; }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; }}
      >
        {t.yorumYuzuBosCta}
      </a>
    </div>
  );
}
