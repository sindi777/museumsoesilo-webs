import { prisma } from '@/lib/prisma'


export async function GET(req, context) {
  const { params } = context
  const koleksiId = Number(params.id)

  if (isNaN(koleksiId)) {
    return new Response(JSON.stringify({ message: 'ID tidak valid' }), { status: 400 })
  }

  try {
    const koleksi = await prisma.koleksi.findUnique({
      where: { id: koleksiId },
    })

    if (!koleksi) {
      return new Response(JSON.stringify({ message: 'Koleksi tidak ditemukan' }), { status: 404 })
    }

    return new Response(JSON.stringify(koleksi), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('GET error:', error)
    return new Response(JSON.stringify({ message: 'Gagal mengambil data koleksi', error: error.message }), {
      status: 500,
    })
  }
}


export async function PUT(req, context) {
  const { params } = context
  const koleksiId = Number(params.id)

  if (isNaN(koleksiId)) {
    return new Response(JSON.stringify({ message: 'ID tidak valid' }), { status: 400 })
  }

  try {
    const body = await req.json()
    const { nama, deskripsi, gambar, detail, pembuat, tahun } = body

    if (!nama || !deskripsi || !gambar) {
      return new Response(JSON.stringify({ message: 'Data tidak lengkap' }), { status: 400 })
    }

    const updated = await prisma.koleksi.update({
      where: { id: koleksiId },
      data: { nama, deskripsi, gambar, detail, pembuat, tahun },
    })

    return new Response(JSON.stringify({ message: 'Koleksi berhasil diupdate', data: updated }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('PUT error:', error)
    return new Response(JSON.stringify({ message: 'Gagal update koleksi', error: error.message }), {
      status: 500,
    })
  }
}


export async function DELETE(req, { params }) {
  const koleksiId = Number(params.id)

  if (isNaN(koleksiId)) {
    return new Response(JSON.stringify({ message: 'ID tidak valid' }), { status: 400 })
  }

  try {
    await prisma.koleksi.delete({
      where: { id: koleksiId },
    })

    return new Response(JSON.stringify({ message: 'Koleksi berhasil dihapus' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('DELETE error:', error)
    return new Response(JSON.stringify({ message: 'Gagal menghapus koleksi', error: error.message }), {
      status: 500,
    })
  }
}
