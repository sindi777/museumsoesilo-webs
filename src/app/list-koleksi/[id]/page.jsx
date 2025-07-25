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
    <section className="min-h-screen bg-white px-6 pt-32 pb-16 w-full max-w-6xl mx-auto">
      {/* Tombol kembali */}
      <button
        onClick={() => router.back()}
        className="mb-10 flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold transition duration-300"
        aria-label="Kembali"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Kembali ke Koleksi
      </button>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Gambar koleksi (ukuran diperbesar) */}
        <div className="relative w-full max-w-[400px] h-[260px] rounded-md overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src={item.gambar}
            alt={item.nama}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>

        {/* Deskripsi koleksi */}
        <div className="flex-1 text-gray-900">
          <h2 className="text-3xl font-bold mb-3">{item.nama}</h2>
          <p className="text-base mb-5 leading-relaxed text-justify text-gray-700">
            {item.deskripsi}
          </p>
        </div>
      </div>
    </section>
  )
}
