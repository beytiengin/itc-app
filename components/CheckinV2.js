// =====================================================================
// components/CheckinV2.js — his-yoklaması v2 (Checkin/F Templates v1.0 §1)
// 4 sabit seçenek + opsiyonel serbest metin. Seçenek 3/4 → koçluk teklifi.
// Serbest metin append-only saklanır (checkin_yanitlari), koça verbatim.
// Soru satırı çağırandan gelir (mevcut onaylı kopya); yanıt biçimi standart.
// DOĞRULAMA İMZASI: ITC-CHECKINV2-20260710
// =====================================================================

'use client';

import { useState } from 'react';
import { checkinF } from '../data/kalibrasyon/checkin-f';
import { supabase } from '../app/lib/supabase';

const govde = { fontFamily: 'var(--font-body), sans-serif', fontWeight: 300, fontSize: '0.84rem', lineHeight: 1.7, color: 'var(--ink-soft)', margin: 0 };
const kucuk = { ...govde, fontSize: '0.74rem', color: 'var(--ink-muted)' };

// baglam: 'aps' | 'core' | 'doorway' | 'desire_checkin' | 'emotional' …
// soru: çağıranın gösterdiği soru satırı (opsiyonel; mevcut onaylı kopya).
export default function CheckinV2({ baglam, soru }) {
  const cfg = checkinF.checkin;
  const [secili, setSecili] = useState(null);
  const [metin, setMetin] = useState('');
  const [kaydedildi, setKaydedildi] = useState(false);
  const [kaydediliyor, setKaydediliyor] = useState(false);

  const koclukGoster = secili === 'uneasily' || secili === 'talk_it_through';

  async function kaydet() {
    setKaydediliyor(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('checkin_yanitlari').insert({
          kullanici_id: user.id,
          baglam,
          secenek: secili,
          serbest_metin: metin.trim() || null,
        });
      }
      setKaydedildi(true);
    } catch {
      setKaydedildi(true); // sessiz — check-in devam engeli asla olmaz
    } finally {
      setKaydediliyor(false);
    }
  }

  if (kaydedildi) {
    return (
      <div style={{ border: '1px solid var(--rule)', padding: '1rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <p style={kucuk}>Thank you — noted.</p>
        {koclukGoster && <p style={govde}>{cfg.davranisKurallari.kocTeklifiMetin}</p>}
      </div>
    );
  }

  return (
    <div style={{ border: '1px solid var(--accent)', padding: '1.1rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
      {soru && <p style={govde}>{soru}</p>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
        {cfg.secenekler.map((o) => (
          <button key={o.id} onClick={() => setSecili(o.id)}
            style={{ ...govde, textAlign: 'left', background: secili === o.id ? 'var(--accent)' : 'none',
                     color: secili === o.id ? 'var(--bg)' : 'var(--ink)', border: '1px solid var(--rule)',
                     padding: '0.6rem 0.8rem', cursor: 'pointer' }}>
            {o.metin}
          </button>
        ))}
      </div>

      {/* Koçluk teklifi — seçenek 3/4'te hemen belirir */}
      {koclukGoster && <p style={{ ...govde, fontStyle: 'italic' }}>{cfg.davranisKurallari.kocTeklifiMetin}</p>}

      {/* Serbest metin — her zaman, opsiyonel; parantez şeffaflık mekanizması */}
      <textarea value={metin} onChange={(e) => setMetin(e.target.value)}
        placeholder={cfg.serbestMetinLabel} rows={3}
        style={{ ...govde, border: '1px solid var(--rule)', padding: '0.6rem 0.7rem', background: 'var(--bg)', resize: 'vertical', width: '100%', boxSizing: 'border-box' }} />

      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
        <button onClick={kaydet} disabled={kaydediliyor || (!secili && !metin.trim())}
          style={{ ...kucuk, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'none',
                   border: '1px solid var(--accent)', color: 'var(--accent)', padding: '0.5rem 1rem',
                   cursor: (secili || metin.trim()) ? 'pointer' : 'default',
                   opacity: (secili || metin.trim()) ? 1 : 0.5 }}>
          {kaydediliyor ? 'Saving…' : 'Send'}
        </button>
        {/* Hiçbir yanıt zorunlu değil — atlanabilir */}
        <button onClick={() => setKaydedildi(true)} style={{ ...kucuk, background: 'none', border: 'none', color: 'var(--ink-muted)', cursor: 'pointer', textDecoration: 'underline' }}>
          Skip
        </button>
      </div>
    </div>
  );
}
