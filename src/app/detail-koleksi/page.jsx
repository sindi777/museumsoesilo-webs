import { prisma } from '@/lib/prisma'
import VirtualCollectionClient from './VirtualCollectionClient'

export default async function VirtualCollectionPage() {
  const koleksi = await prisma.koleksi.findMany({})

  return <VirtualCollectionClient koleksi={koleksi} />
}



