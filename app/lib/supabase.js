// app/lib/supabase.js
// ITC Actor's Gym — Supabase tarayıcı istemcisi
// Cookie tabanlı olduğu için middleware ile uyumlu çalışır.

import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);