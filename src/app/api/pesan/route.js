import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function POST(req) {
  try {
    const body = await req.json()
    const { pesan } = body

    
    if (!pesan || pesan.trim() === '') {
      return NextResponse.json(
        { error: 'Pesan tidak boleh kosong' },
        { status: 400 }
      )
    }

    
    await prisma.pesan.create({
      data: {
        isi: pesan,
      },
    })

    return NextResponse.json(
      { message: 'Pesan berhasil dikirim' },
      { status: 201 }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}


export async function GET() {
  return NextResponse.json({
    message: 'Gunakan method POST untuk mengirim pesan.',
  })
}
