import { prisma } from '@/lib/prisma'
import VirtualCollectionClient from './VirtualCollectionClient'

// TAMBAHKAN BARIS INI
export const revalidate = 0;

export default async function VirtualCollectionPage() {
  const koleksi = await prisma.koleksi.findMany({
    orderBy: {
      createdAt: 'desc' // Tambahkan urutan agar data terbaru di atas
    }
  })

  return <VirtualCollectionClient koleksi={koleksi} />
}