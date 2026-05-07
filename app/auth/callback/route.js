// app/auth/callback/route.js
// Supabase OAuth (Google) PKCE callback handler.
//
// Akış: kullanıcı Google ile döner → Supabase ?code=... ile bu route'a yönlendirir →
// burada code session'a çevrilir, cookie set edilir → kullanıcı `next` parametresindeki
// hedef yola yönlendirilir.

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') || '/';

  if (code) {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          get(name) {
            return cookieStore.get(name)?.value;
          },
          set(name, value, options) {
            cookieStore.set({ name, value, ...options });
          },
          remove(name, options) {
            cookieStore.set({ name, value: '', ...options });
          },
        },
      }
    );

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Hata durumunda giriş sayfasına dön (next ile)
  return NextResponse.redirect(`${origin}/giris?geri=${encodeURIComponent(next)}`);
}
