// app/auth/callback/route.js
// Supabase OAuth (Google) PKCE callback handler.
//
// Akis: Google'dan donus -> ?code=... bu route -> exchangeCodeForSession ->
// cookie set -> next yoluna yonlendir.
//
// Hata olursa /giris?hata=... ile sebebi gorunur sekilde donsun.

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') || '/';
  const oauthError = searchParams.get('error_description') || searchParams.get('error');

  if (oauthError) {
    return NextResponse.redirect(
      `${origin}/giris?geri=${encodeURIComponent(next)}&hata=${encodeURIComponent(oauthError)}`
    );
  }

  if (!code) {
    return NextResponse.redirect(
      `${origin}/giris?geri=${encodeURIComponent(next)}&hata=${encodeURIComponent('code_yok')}`
    );
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // route handler disinda set edilmeye calisilirsa sessizce gec
          }
        },
      },
    }
  );

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      `${origin}/giris?geri=${encodeURIComponent(next)}&hata=${encodeURIComponent(error.message)}`
    );
  }

  return NextResponse.redirect(`${origin}${next}`);
}
