import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request) {
  const token = await getToken({ req: request })
  const { pathname } = request.nextUrl

  // 🔒 Halaman yang hanya bisa diakses jika sudah login
  const protectedRoutes = ['/dashboard']

  // 🔒 Halaman khusus admin
  // const adminRoutes = ['/admin', '/admin-panel']

  // Cek jika user belum login dan mencoba akses ke halaman dilindungi
  if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Cek jika user login tapi mencoba akses /login, redirect ke /dashboard
  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }


  return NextResponse.next()
}
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/login',
    '/detail-koleksi/:path*',
    '/detail-informasi/:path*',
  ],
}
