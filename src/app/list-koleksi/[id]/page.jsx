'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DetailKoleksi({ params }) {
  const router = useRouter()
  const { id } = params

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/koleksi/${id}`)
        if (!res.ok) throw new Error('Data tidak ditemukan')
        const data = await res.json()
        setItem(data)
      } catch (error) {
        setItem(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl bg-white">
        Memuat...
      </div>
    )
  }

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl bg-white">
        Koleksi tidak ditemukan.
      </div>
    )
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

      <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row gap-6">
        {/* Gambar koleksi */}
        <div className="md:w-1/2 w-full flex justify-center bg-white">
          <Image
            src={item.gambar}
            alt={item.nama}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Deskripsi koleksi */}
        <div className="md:w-1/2 w-full text-gray-800 bg-white">
          <h2 className="text-xl font-bold mb-2">{item.nama}</h2>
          <p className="text-sm mb-4 text-justify leading-relaxed">{item.deskripsi}</p>
          <p className="text-sm mb-4 text-justify leading-relaxed">{item.detail}</p>
        </div>
      </div>
    </section>
  )
}
