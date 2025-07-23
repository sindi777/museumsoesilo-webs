import { prisma } from '@/lib/prisma'
import VirtualCollectionClient from './VirtualCollectionClient'

export default async function VirtualCollectionPage() {
  const koleksi = await prisma.koleksi.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return <VirtualCollectionClient koleksi={koleksi} />
}



