
import { NextResponse } from 'next/server'
import { PrismaClient } from '@/generated/prisma'
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers'

const prisma = new PrismaClient()

export async function POST(request) {
  const { email, password } = await request.json()

  try {
    const user = await prisma.admin.findFirst({ where: { email } })

    if (!user) {
      return NextResponse.json({ message: 'Admin tidak ditemukan' }, { status: 401 })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Password salah' }, { status: 401 })
    }

    
    cookies().set({
      name: 'token',
      value: 'sesi-login-admin', 
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24, 
    })

    return NextResponse.json({ message: 'Login berhasil' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
