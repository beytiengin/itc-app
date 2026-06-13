// ============================================================================
//  components/SesAdimi.js
//  Stüdyo · Rehberli sesli egzersiz oynatıcısı
//  Doğrulama imzası: STUDYO-SES-V1-20260613
// ----------------------------------------------------------------------------
//  PERFORMANS: <audio preload="none"> — ses dosyası SAYFA AÇILIŞINDA İNMEZ.
//  Yalnızca kullanıcı "Dinle"ye bastığında, akış halinde (streaming) gelir.
//  Vitrin, ray, metin egzersizleri etkilenmez. Otomatik oynatma YOK.
//
//  ERİŞİLEBİLİRLİK: "Metni göster" ile transkript açılır (sessiz ortam / işitme).
//
//  GRACEFUL DEGRADE: src yoksa bu bileşen render EDİLMEZ; çağıran taraf
//  (StudyoEtut) yalnızca metni gösterir. Yani MP3 üretilmeden de egzersiz çalışır.
// ============================================================================
'use client';
import { useRef, useState } from 'react';

function bicimSure(sn) {
  if (!isFinite(sn) || sn < 0) return '0:00';
  const d = Math.floor(sn / 60), s = Math.floor(sn % 60);
  return `${d}:${String(s).padStart(2, '0')}`;
}

export default function SesAdimi({ src, transkript = '', sure = '' }) {
  const ref = useRef(null);
  const [calisiyor, setCalisiyor] = useState(false);
  const [an, setAn] = useState(0);
  const [toplam, setToplam] = useState(0);
  const [transAcik, setTransAcik] = useState(false);

  if (!src) return null; // MP3 yoksa hiç render etme

  const oynatDurdur = () => {
    const a = ref.current;
    if (!a) return;
    if (calisiyor) { a.pause(); }
    else { a.play().catch(() => {}); }
  };
  const ilerlet = (e) => {
    const a = ref.current;
    if (!a || !toplam) return;
    const oran = e.nativeEvent.offsetX / e.currentTarget.clientWidth;
    a.currentTime = oran * toplam;
  };

  const yuzde = toplam ? (an / toplam) * 100 : 0;

  return (
    <div className="ses-adimi">
      <audio
        ref={ref}
        src={src}
        preload="none"
        onPlay={() => setCalisiyor(true)}
        onPause={() => setCalisiyor(false)}
        onEnded={() => setCalisiyor(false)}
        onTimeUpdate={(e) => setAn(e.target.currentTime)}
        onLoadedMetadata={(e) => setToplam(e.target.duration)}
      />
      <div className="ses-satir">
        <button className="ses-btn" onClick={oynatDurdur} aria-label={calisiyor ? 'Duraklat' : 'Dinle'}>
          {calisiyor ? '❚❚' : '▶'}
        </button>
        <div className="ses-bar" onClick={ilerlet}>
          <div className="ses-dolu" style={{ width: `${yuzde}%` }} />
        </div>
        <span className="ses-sure">{toplam ? bicimSure(an) : (sure || '')}</span>
      </div>
      {transkript && (
        <button className="ses-trans-btn" onClick={() => setTransAcik(v => !v)}>
          {transAcik ? 'Metni gizle' : 'Metni göster'}
        </button>
      )}
      {transAcik && transkript && <div className="ses-trans">{transkript}</div>}

      <style jsx>{`
        .ses-adimi { margin: 18px 0; }
        .ses-satir { display: flex; align-items: center; gap: 12px; }
        .ses-btn {
          flex: none; width: 46px; height: 46px; border-radius: 50%;
          border: 1px solid var(--accent, #c9a96e); background: transparent;
          color: var(--accent, #c9a96e); font-size: 15px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background .2s, transform .12s;
        }
        .ses-btn:hover { transform: translateY(-1px); }
        .ses-bar {
          flex: 1; height: 4px; border-radius: 4px;
          background: var(--rule, #2c261d); cursor: pointer; position: relative;
        }
        .ses-dolu {
          position: absolute; inset: 0 auto 0 0; height: 100%;
          background: var(--accent, #c9a96e); border-radius: 4px;
        }
        .ses-sure {
          flex: none; font-size: 13px; color: var(--ink-faint, #6f675a);
          font-variant-numeric: tabular-nums; min-width: 40px; text-align: right;
        }
        .ses-trans-btn {
          margin-top: 10px; background: none; border: none; cursor: pointer;
          font-size: 13px; color: var(--ink-faint, #6f675a);
          text-decoration: underline; text-underline-offset: 3px; padding: 4px 0;
        }
        .ses-trans {
          margin-top: 8px; font-size: 15px; line-height: 1.6;
          color: var(--ink-soft, #a89e8c);
          border-left: 2px solid var(--rule, #2c261d); padding-left: 14px;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
}
