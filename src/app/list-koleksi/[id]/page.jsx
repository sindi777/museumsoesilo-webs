'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

// Data dummy (bisa diganti dengan API/database nanti)
const koleksiData = [
  {
    id: 1,
    gambar: '/koleksi/unggulan1.jpg',
    nama: 'Ruangan Utama',
    deskripsi: `Ruangan utama berisi berbagai barang pribadi milik keluarga bapak Soesilo Soedarman.`,
    detail: `Barang-barang ini mencerminkan perjalanan hidup beliau sejak masa kecil, pendidikan, hingga karier sebagai tokoh nasional.`,
    pembuat: 'Keluarga Soedarman',
    tahun: 'Abad 20',
  },
  {
    id: 2,
    gambar: '/koleksi/unggulan2.jpg',
    nama: 'Dokumentasi Karier',
    deskripsi: `Dokumentasi perjalanan karier militer dan diplomatik beliau.`,
    detail: `Terdapat foto-foto, piagam, surat tugas, serta benda-benda resmi saat beliau menjabat.`,
    pembuat: 'Arsip Nasional',
    tahun: '1980-an',
  },
  {
    id: 3,
    gambar: '/koleksi/unggulan3.jpg',
    nama: 'Koleksi Pribadi',
    deskripsi: `Koleksi pribadi seperti seragam, medali, dan benda bersejarah lainnya.`,
    detail: `Setiap item memiliki nilai historis dan simbolik, mencerminkan dedikasi dan jasa beliau bagi negara.`,
    pembuat: 'Soesilo Soedarman',
    tahun: '1960–1990',
  },
]

export default function DetailKoleksi({ params }) {
  const router = useRouter()
  const { id } = params

  const item = koleksiData.find(k => k.id === parseInt(id))

  if (!item) {
    return <div className="min-h-screen flex items-center justify-center text-xl">Koleksi tidak ditemukan.</div>
  }

  return (
    <section className="min-h-screen bg-white px-4 py-8 md:px-12 lg:px-20">
      {/* Tombol kembali */}
      <button
        onClick={() => router.back()}
        className="text-xl mb-4 hover:opacity-70 transition"
      >
        ←
      </button>

      <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row gap-6">
        {/* Gambar koleksi */}
        <div className="md:w-1/2 w-full flex justify-center">
          <Image
            src={item.gambar}
            alt={item.nama}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Deskripsi koleksi */}
        <div className="md:w-1/2 w-full text-gray-800">
          <h2 className="text-xl font-bold mb-2">{item.nama}</h2>
          <p className="text-sm mb-4 text-justify leading-relaxed">{item.deskripsi}</p>
          <p className="text-sm mb-4 text-justify leading-relaxed">{item.detail}</p>

          <div className="mt-4 text-sm">
            <p><strong>Pembuat:</strong> {item.pembuat}</p>
            <p><strong>Tahun Pembuatan:</strong> {item.tahun}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
