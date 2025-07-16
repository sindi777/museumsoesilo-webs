import { prisma } from '@/lib/prisma'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request) {
  try {
    const body = await request.json()
    const { nama, deskripsi, gambar } = body

    // Ubah base64 ke buffer
    const base64Data = gambar.replace(/^data:image\/\w+;base64,/, '')
    const buffer = Buffer.from(base64Data, 'base64')

    // Buat nama file unik
    const fileName = `${Date.now()}.png`
    const filePath = path.join(process.cwd(), 'public', 'uploads', fileName)

    // Simpan file
    await writeFile(filePath, buffer)

    const imagePath = `/uploads/${fileName}`

    // Simpan ke database
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
