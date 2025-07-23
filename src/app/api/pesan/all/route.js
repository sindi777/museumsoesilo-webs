import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const pesan = await prisma.pesan.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(pesan)
}
