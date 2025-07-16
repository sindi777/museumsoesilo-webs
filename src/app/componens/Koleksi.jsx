



'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'


export default async function Koleksi() {
  const router = useRouter()
  const koleksiData = await prisma.koleksi.findMany({
          orderBy: { createdAt: 'desc' },
        })

  return (
    <section className="pt-7 bg-[#EFE7DF] text-white ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {koleksiData.map((item) => (
            <div key={item.id} className="bg-white backdrop-blur-sm rounded-lg p-4 w-full shadow-md hover:shadow-lg transition cursor-pointer"  onClick={() => router.push(`/list-koleksi/${item.id}`)}>
              
              <div className="">
                <Image
                  src={item.gambar}
                  alt={`Koleksi ${item.id}`}
                  width={400}
                  height={650}
                  className="rounded-md w-full h-100 object-cover"
                />
              </div>

            
              <p className="text-gray-800 p-6 rounded-lg shadow-md">{item.deskripsi}</p>
            </div>
          ))}
        </div>
        <div
          onClick={() => router.push('/detail-koleksi')}
          className="text-center mt-8 text-black underline cursor-pointer hover:text-gray-300 transition"
        >
          Lihat Koleksi Selengkapnya
        </div>
      </div>
    </section>
  )
}
