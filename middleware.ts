// middleware.ts
// ITC Actor's Gym — Auth Gating
//
// IMZA: S2-MIDDLEWARE-01 — BİLİNÇLİ KARAR (Sprint 2):
// Middleware no-op KALIYOR ("geçici" değil artık). Gerekçe: misafir modu
// gerçek — anonim seçimler cihazda tutulur (S1-MISAFIR-01), UI dürüst
// "geçici" mesajı verir ve girişte Supabase'e otomatik taşınır
// (S2-MISAFIR-02 · S2-NAV-01). Rota kilidi bu akışı (vitrin gezintisi +
// misafir deneme) öldürürdü.
// Gözden geçirme tetiği: ödeme/üyelik (commercialization) başlarken
// KORUMALI_ROTALAR yaklaşımı yeniden değerlendirilecek.
//
// Geri açmak için aşağıdaki kodun yorumlanmış orijinal halini kullan
// (alt taraf). KORUMALI_ROTALAR listesini geri yerine koy.

import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

/* ESKİ — auth gating'i geri açmak için bu bloğu yukarıdaki middleware'in
   yerine koy:

import { createServerClient } from '@supabase/ssr';

const KORUMALI_ROTALAR = [
  '/kalibrasyon',
  '/antrenman',
  '/profil',
  '/defter',
  '/kulis', // legacy redirect stub — yine korumalı olsun
];

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
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
          response = NextResponse.next({ request: { headers: request.headers } });
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: any) {
          request.cookies.set({ name, value: '', ...options });
          response = NextResponse.next({ request: { headers: request.headers } });
          response.cookies.set({ name, value: '', ...options });
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  const yol = request.nextUrl.pathname;
  const korumali = KORUMALI_ROTALAR.some((r) => yol.startsWith(r));

  if (korumali && !user) {
    const yonlendir = request.nextUrl.clone();
    yonlendir.pathname = '/giris';
    yonlendir.searchParams.set('geri', yol);
    return NextResponse.redirect(yonlendir);
  }

  if (yol === '/giris' && user) {
    const yonlendir = request.nextUrl.clone();
    yonlendir.pathname = '/';
    return NextResponse.redirect(yonlendir);
  }

  return response;
}
*/
