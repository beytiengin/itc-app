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
