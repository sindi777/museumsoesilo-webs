'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const koleksi = [
  {
    id: 1,
    nama: 'Amoghapasa',
    gambar: '/koleksi/amoghapasa.png',
    deskripsi: 'Prasasti Amoghapasa diukir pada alas arca Amoghapasa. Alas ditemukan di Padang Roco, Sumatra Barat.',
  },
  {
    id: 2,
    nama: 'Belincung',
    gambar: '/koleksi/belincung.png',
    deskripsi: 'Kapak batu belincung ini merupakan contoh alat dari Neolitik Beliung. Setelah meneliti lebih de...',
  },
  {
    id: 3,
    nama: 'Arca Bhairawa',
    gambar: '/koleksi/bhairawa.png',
    deskripsi: 'Arca Bhairawa adalah representasi dewa dari aliran Tantra yang merupakan contoh sinkretisme atau gab ...',
  },
  {
    id: 4,
    nama: 'Prasasti Ciaruteun',
    gambar: '/koleksi/ciaruteun.png',
    deskripsi: 'Di tempat asalnya, prasasti ini ditemukan di pinggir Sungai Ciaruteun, Bogor. Prasasti ini merupakan ...',
  },
  {
    id: 5,
    nama: 'Prasasti Ciaruteun',
    gambar: '/koleksi/ciaruteun.png',
    deskripsi: 'Di tempat asalnya, prasasti ini ditemukan di pinggir Sungai Ciaruteun, Bogor. Prasasti ini merupakan ...',
  },
  {
    id: 6,
    nama: 'Prasasti Ciaruteun',
    gambar: '/koleksi/ciaruteun.png',
    deskripsi: 'Di tempat asalnya, prasasti ini ditemukan di pinggir Sungai Ciaruteun, Bogor. Prasasti ini merupakan ...',
  },
  {
    id: 7,
    nama: 'Prasasti Ciaruteun',
    gambar: '/koleksi/ciaruteun.png',
    deskripsi: 'Di tempat asalnya, prasasti ini ditemukan di pinggir Sungai Ciaruteun, Bogor. Prasasti ini merupakan ...',
  },
  {
    id: 8,
    nama: 'Prasasti Ciaruteun',
    gambar: '/koleksi/ciaruteun.png',
    deskripsi: 'Di tempat asalnya, prasasti ini ditemukan di pinggir Sungai Ciaruteun, Bogor. Prasasti ini merupakan ...',
  },
  {
    id: 9,
    nama: 'Prasasti Ciaruteun',
    gambar: '/koleksi/ciaruteun.png',
    deskripsi: 'Di tempat asalnya, prasasti ini ditemukan di pinggir Sungai Ciaruteun, Bogor. Prasasti ini merupakan ...',
  },
  {
    id: 10,
    nama: 'Prasasti Ciaruteun',
    gambar: '/koleksi/ciaruteun.png',
    deskripsi: 'Di tempat asalnya, prasasti ini ditemukan di pinggir Sungai Ciaruteun, Bogor. Prasasti ini merupakan ...',
  },
  {
    id: 11,
    nama: 'Prasasti Ciaruteun',
    gambar: '/koleksi/ciaruteun.png',
    deskripsi: 'Di tempat asalnya, prasasti ini ditemukan di pinggir Sungai Ciaruteun, Bogor. Prasasti ini merupakan ...',
  },
  {
    id: 12,
    nama: 'Prasasti Ciaruteun',
    gambar: '/koleksi/ciaruteun.png',
    deskripsi: 'Di tempat asalnya, prasasti ini ditemukan di pinggir Sungai Ciaruteun, Bogor. Prasasti ini merupakan ...',
  },
]
export default function VirtualCollection() {
    const router = useRouter()
  return (
    
    <section className="row min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-12">
    <button
        onClick={() => router.back()}
        className="text-xl mb-4 hover:opacity-70 transition"
      >
        ←
    </button>    
      <h1 className="text-2xl font-bold mb-8">Koleksi Museum</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {koleksi.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <div className="p-4 flex justify-center items-center">
              <Image
                src={item.gambar}
                alt={item.nama}
                width={200}
                height={200}
                className="object-contain h-48"
              />
            </div>
            <div className="px-4 pb-4">
              <h2 className="text-md font-semibold text-[#003B73]">{item.nama}</h2>
              <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                {item.deskripsi}
              </p>
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Baca selengkapnya
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
