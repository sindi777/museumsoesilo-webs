import { prisma } from '@/lib/prisma'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request) {
  try {
    const body = await request.json()
    const { nama, deskripsi, gambar } = body

    const base64Data = gambar.replace(/^data:image\/\w+;base64,/, '')
    const buffer = Buffer.from(base64Data, 'base64')

    const fileName = `${Date.now()}.png`
    const filePath = path.join(process.cwd(), 'public', 'uploads', fileName)

    await writeFile(filePath, buffer)

    const imagePath = `/uploads/${fileName}`

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


export async function GET() {
  try {
    const koleksiList = await prisma.koleksi.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return new Response(JSON.stringify(koleksiList), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Fetch error:', error)
    return new Response(JSON.stringify({ error: 'Gagal mengambil data' }), {
      status: 500,
    })
  }
}