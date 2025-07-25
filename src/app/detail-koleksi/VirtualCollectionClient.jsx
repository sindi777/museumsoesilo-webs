'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function VirtualCollectionClient({ koleksi }) {
  const router = useRouter()

  return (
    <section className="min-h-screen bg-[#FFFFFF] px-4 pt-32 pb-20 sm:px-6 lg:px-12">
      <h1 className="text-3xl font-bold text-[#3E2C23] mb-10 text-center">
        Koleksi Museum
      </h1>

      {koleksi.length === 0 ? (
        <p className="text-gray-500 text-center col-span-full">
          Belum ada koleksi yang tersedia.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {koleksi.map((item) => (
            <div
              key={item.id}
              onClick={() => router.push(`/list-koleksi/${item.id}`)}
              className="group bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-full h-48 overflow-hidden relative">
                <Image
                  src={item.gambar}
                  alt={item.nama}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="px-5 py-4">
                <h2 className="text-lg font-semibold text-[#003B73] mb-1 line-clamp-1">
                  {item.nama}
                </h2>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {item.deskripsi}
                </p>
                <span className="inline-block text-sm font-medium text-yellow-600 hover:underline">
                  Baca selengkapnya
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
