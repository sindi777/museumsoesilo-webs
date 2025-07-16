// /app/api/me/route.js
import { NextResponse } from 'next/server'

export async function GET(request) {
  const token = request.cookies.get('token')?.value

  if (token === 'sesi-login-admin') {
    return NextResponse.json({ loggedIn: true })
  }

  return NextResponse.json({ loggedIn: false })
}
