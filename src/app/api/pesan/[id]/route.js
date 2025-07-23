import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function DELETE(req, { params }) {
  try {
    const id = Number(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 })
    }

    await prisma.pesan.delete({ where: { id } })

    return NextResponse.json({ message: 'Pesan berhasil dihapus' })
  } catch (error) {
    return NextResponse.json({ error: 'Gagal menghapus pesan' }, { status: 500 })
  }
}
