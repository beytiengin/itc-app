// app/auth/confirm/route.js
// Supabase e-posta onayı — token_hash (verifyOtp) + code (exchangeCodeForSession).
//
// Neden ayrı route (vs /auth/callback): callback Google OAuth içindir. E-posta
// onayında asıl sorun PKCE'dir: exchangeCodeForSession, kayıt yapılan tarayıcıdaki
// code_verifier'a bağımlıdır. Öğrenci onay mailini başka cihazda/günler sonra
// açınca verifier yok → onay kopar.
//
// verifyOtp({ token_hash, type }) cihazdan BAĞIMSIZDIR (verifier gerekmez). Bu
// yüzden e-posta şablonu şu linke yönlendirmeli (önerilen — Supabase Dashboard →
// Auth → Email Templates → Confirm signup):
//   {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email&next=/
//
// Geriye dönük güvence: varsayılan şablon (?code=...) hâlâ gelirse bu route onu da
// işler. Hata olursa /giris?hata=... ile sebebi görünür şekilde döner.

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const tokenHash = searchParams.get('token_hash');
  const type = searchParams.get('type') || 'email';
  const code = searchParams.get('code');
  const next = searchParams.get('next') || '/';

  if (!tokenHash && !code) {
    return NextResponse.redirect(
      `${origin}/giris?geri=${encodeURIComponent(next)}&hata=${encodeURIComponent('token_yok')}`
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
            // route handler dışında set edilmeye çalışılırsa sessizce geç
          }
        },
      },
    }
  );

  // Cihazdan bağımsız yol önce: token_hash varsa verifyOtp.
  const { error } = tokenHash
    ? await supabase.auth.verifyOtp({ type, token_hash: tokenHash })
    : await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      `${origin}/giris?geri=${encodeURIComponent(next)}&hata=${encodeURIComponent(error.message)}`
    );
  }

  return NextResponse.redirect(`${origin}${next}`);
}

