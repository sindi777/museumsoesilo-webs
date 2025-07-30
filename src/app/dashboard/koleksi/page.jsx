export const dynamic = 'force-dynamic' // ⬅️ Tambahkan ini

import { prisma } from '@/lib/prisma'
import KoleksiClient from './KoleksiClient'

export default async function KoleksiPage() {
  const koleksiList = await prisma.koleksi.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return <KoleksiClient koleksiList={koleksiList} />
}
