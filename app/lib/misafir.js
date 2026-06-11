'use client';

// app/lib/misafir.js — IMZA: S1-MISAFIR-01
// ITC Actor's Gym — Sprint 1: Anonim (misafir) geçici kayıt katmanı.
//
// İLKE: UI'nin verdiği onay gerçek olmalı. Oturum yokken Supabase'e yazılamaz;
// bu katman seçimleri CİHAZDA (localStorage) tutar ve bunu kullanıcıya açıkça
// söyler. Satır şekli Supabase `oznel_sabitler` upsert payload'ı ile birebir —
// girişte migrate etmek için (Sprint 2) kullanici_id eklemek yeterli.
//
// localStorage anahtarları:
//   itc-misafir-sabitler-{karakterId} → { "{bosluk_no}::{catal_anahtar}": row }
//   itc-misafir-bosluk-{karakterId}   → { "{boslukId}": "metin" }
//   itc-kalibrasyon-taslak            → kalibrasyon sayfası yönetir (S1-KALIB-02).

import { useEffect, useState } from 'react';
import { supabase } from './supabase';

// Üç dilli ortak misafir metinleri — tüm yüzeyler aynı sözlüğü kullanır.
export const MISAFIR_METIN = {
  tr: {
    gecici: 'Bu seçim cihazında geçici tutulur. Kalıcı kaydetmek için giriş yap.',
    girisYap: 'Giriş yap →',
  },
  en: {
    gecici: 'This choice is kept temporarily on this device. Sign in to save it permanently.',
    girisYap: 'Sign in →',
  },
  de: {
    gecici: 'Diese Wahl wird vorübergehend auf diesem Gerät gespeichert. Melde dich an, um sie dauerhaft zu speichern.',
    girisYap: 'Anmelden →',
  },
};

export function misafirMetin(dil) {
  return MISAFIR_METIN[dil] || MISAFIR_METIN.tr;
}

// Oturum durumu hook'u: anonim = null (çözülmedi) | true | false.
export function useOturum() {
  const [anonim, setAnonim] = useState(null);
  useEffect(() => {
    let iptal = false;
    supabase.auth.getUser()
      .then(({ data: { user } }) => { if (!iptal) setAnonim(!user); })
      .catch(() => { if (!iptal) setAnonim(true); });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setAnonim(!session?.user);
    });
    return () => { iptal = true; subscription.unsubscribe(); };
  }, []);
  return { anonim };
}

function oku(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function yazKey(key, deger) {
  try {
    localStorage.setItem(key, JSON.stringify(deger));
    return true;
  } catch (e) {
    return false;
  }
}

// ─── Öznel sabit satırları (oznel_sabitler satır şekli) ─────────────────────
export function misafirSabitYaz(karakterId, row) {
  const key = `itc-misafir-sabitler-${karakterId}`;
  const mevcut = oku(key) || {};
  const id = `${row.bosluk_no}::${row.catal_anahtar ?? row.bosluk_no}`;
  mevcut[id] = { ...row, son_guncelleme: new Date().toISOString() };
  return yazKey(key, mevcut);
}

export function misafirSabitleriOku(karakterId) {
  const mevcut = oku(`itc-misafir-sabitler-${karakterId}`) || {};
  return Object.values(mevcut);
}

// Yalnız oturum YOKSA okur — girişli kullanıcıda bayat misafir verisi
// sunucu verisinin üstüne yazılmasın.
export async function misafirSabitleriOkuAnonim(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) return [];
  } catch (e) {}
  return misafirSabitleriOku(karakterId);
}

// ─── Boşluk yansımaları ({ boslukId: metin } şekli) ─────────────────────────
export function misafirBoslukYaz(karakterId, boslukId, metin) {
  const key = `itc-misafir-bosluk-${karakterId}`;
  const mevcut = oku(key) || {};
  mevcut[boslukId] = metin;
  return yazKey(key, mevcut);
}

export async function misafirBosluklariOkuAnonim(karakterId) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) return {};
  } catch (e) {}
  return oku(`itc-misafir-bosluk-${karakterId}`) || {};
}

// ─── Girişte otomatik taşıma (Sprint 2) ─────────────────────────────────────
// IMZA: S2-MISAFIR-02
// Oturum açıldığında cihazdaki misafir kayıtları Supabase'e taşınır.
// Çakışma politikası: SERVER-WINS — kullanıcının hesabında zaten olan
// (bosluk_no, catal_anahtar) / bosluk_id satırları cihazdaki bayat veriyle
// EZİLMEZ; yalnız hesapta olmayanlar yazılır. Başarıyla taşınan anahtar
// cihazdan silinir; hata alan anahtar kalır, sonraki girişte yeniden denenir.
// Bilinen sınır: ortak cihazda A'nın anonim seçimleri B'nin hesabına
// taşınabilir (test ölçeği için kabul; onaylı taşıma UI'sı ileri sprint).

let tasimaCalisiyor = false;

export async function misafirVerileriniTasi() {
  if (tasimaCalisiyor) return;
  const anahtarlar = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && (k.startsWith('itc-misafir-sabitler-') || k.startsWith('itc-misafir-bosluk-'))) {
        anahtarlar.push(k);
      }
    }
  } catch (e) {
    return;
  }
  if (anahtarlar.length === 0) return;

  tasimaCalisiyor = true;
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    for (const key of anahtarlar) {
      if (key.startsWith('itc-misafir-sabitler-')) {
        const karakterId = key.slice('itc-misafir-sabitler-'.length);
        const satirlar = Object.values(oku(key) || {});
        if (satirlar.length === 0) { try { localStorage.removeItem(key); } catch (e) {} continue; }

        const { data: mevcutlar, error: okumaHatasi } = await supabase
          .from('oznel_sabitler')
          .select('bosluk_no, catal_anahtar')
          .eq('kullanici_id', user.id)
          .eq('karakter_id', karakterId);
        if (okumaHatasi) continue;

        const varOlan = new Set((mevcutlar || []).map((r) => `${r.bosluk_no}::${r.catal_anahtar}`));
        const yeniler = satirlar
          .filter((r) => r && r.bosluk_no != null)
          .filter((r) => !varOlan.has(`${r.bosluk_no}::${r.catal_anahtar ?? r.bosluk_no}`))
          .map((r) => ({
            kullanici_id: user.id,
            karakter_id: karakterId,
            bosluk_no: r.bosluk_no,
            catal_anahtar: r.catal_anahtar ?? r.bosluk_no,
            secilen_dal: r.secilen_dal ?? null,
            ozet_metni: r.ozet_metni ?? null,
            muhur_metni: r.muhur_metni ?? null,
            birlesim_sahne_no: r.birlesim_sahne_no ?? null,
            son_guncelleme: new Date().toISOString(),
          }));

        if (yeniler.length > 0) {
          const { error } = await supabase
            .from('oznel_sabitler')
            .upsert(yeniler, { onConflict: 'kullanici_id,karakter_id,bosluk_no,catal_anahtar' });
          if (error) { console.log('misafir taşıma (sabitler) hatası:', error); continue; }
        }
        try { localStorage.removeItem(key); } catch (e) {}
      } else {
        const karakterId = key.slice('itc-misafir-bosluk-'.length);
        const harita = oku(key) || {};
        const idler = Object.keys(harita).filter((id) => typeof harita[id] === 'string' && harita[id].trim() !== '');
        if (idler.length === 0) { try { localStorage.removeItem(key); } catch (e) {} continue; }

        const { data: mevcutlar, error: okumaHatasi } = await supabase
          .from('bosluk_yansimalari')
          .select('bosluk_id')
          .eq('kullanici_id', user.id)
          .eq('karakter_id', karakterId);
        if (okumaHatasi) continue;

        const varOlan = new Set((mevcutlar || []).map((r) => r.bosluk_id));
        const yeniler = idler
          .filter((id) => !varOlan.has(id))
          .map((id) => ({
            kullanici_id: user.id,
            karakter_id: karakterId,
            bosluk_id: id,
            metin: harita[id],
          }));

        if (yeniler.length > 0) {
          const { error } = await supabase
            .from('bosluk_yansimalari')
            .upsert(yeniler, { onConflict: 'kullanici_id,karakter_id,bosluk_id' });
          if (error) { console.log('misafir taşıma (boşluk) hatası:', error); continue; }
        }
        try { localStorage.removeItem(key); } catch (e) {}
      }
    }
  } catch (e) {
    console.log('misafirVerileriniTasi exception:', e);
  } finally {
    tasimaCalisiyor = false;
  }
}
