import { prisma } from '@/lib/prisma'
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY 
)


export async function GET() {
  try {
    const koleksi = await prisma.Koleksi.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(koleksi)
  } catch (error) {
    console.error('Prisma fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { nama, deskripsi, gambar } = body

    const base64Data = gambar.replace(/^data:image\/\w+;base64,/, '')
    const buffer = Buffer.from(base64Data, 'base64')

    const fileName = `${Date.now()}.png`
    const { data, error } = await supabase.storage
      .from('koleksi') // nama bucket
      .upload(`images/${fileName}`, buffer, {
        contentType: 'image/png',
      })

    if (error) {
      console.error('Supabase upload error:', error)
      return new Response(JSON.stringify({ error: 'Upload ke Supabase gagal' }), {
        status: 500,
      })
    }

    const { data: publicUrlData } = supabase
      .storage
      .from('koleksi')
      .getPublicUrl(`images/${fileName}`)

    const imagePath = publicUrlData.publicUrl

    await prisma.koleksi.create({
      data: {
        nama,
        deskripsi,
        gambar: imagePath,
      },
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error('Upload error:', error)
    return new Response(JSON.stringify({ error: 'Upload gagal' }), { status: 500 })
  }
}
