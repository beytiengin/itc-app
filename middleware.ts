// middleware.ts
// ITC Actor's Gym — Auth Gating
//
// Korumali rotalar (kalibrasyon ve antrenman) icin uye olma sarti.
// Anonim kullanici → /giris'e yonlendirilir.

import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

const KORUMALI_ROTALAR = [
  '/kalibrasyon',
  '/antrenman',
  '/profil',
  '/kulis',
];

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          request.cookies.set({ name, value, ...options });
          response = NextResponse.next({
            request: { headers: request.headers },
          });
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: any) {
          request.cookies.set({ name, value: '', ...options });
          response = NextResponse.next({
            request: { headers: request.headers },
          });
          response.cookies.set({ name, value: '', ...options });
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  const yol = request.nextUrl.pathname;
  const korumali = KORUMALI_ROTALAR.some((r) => yol.startsWith(r));

  // Korumali rotaya anonim erisim → /giris'e yonlendir
  if (korumali && !user) {
    const yonlendir = request.nextUrl.clone();
    yonlendir.pathname = '/giris';
    yonlendir.searchParams.set('geri', yol);
    return NextResponse.redirect(yonlendir);
  }

  // Uye iken /giris'e gitmeye calisirsa → /'e yonlendir
  if (yol === '/giris' && user) {
    const yonlendir = request.nextUrl.clone();
    yonlendir.pathname = '/';
    return NextResponse.redirect(yonlendir);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico
     * - public files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};