'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Koleksi() {
  const router = useRouter()
  const [koleksiList, setKoleksiList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchKoleksi = async () => {
      try {
        const res = await fetch('/api/koleksi')
        const data = await res.json()
        setKoleksiList(data.slice(0, 3))
      } catch (error) {
        console.error('Gagal mengambil data koleksi:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchKoleksi()
  }, [])

  return (
    <section className="pt-7 bg-[#FFFFF] text-white">
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <p className="text-black text-center">Memuat data koleksi...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {koleksiList.length > 0 ? (
              koleksiList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white backdrop-blur-sm rounded-lg p-4 w-full shadow-md hover:shadow-lg transition cursor-pointer"
                  onClick={() => router.push(`/list-koleksi/${item.id}`)}
                >
                  <Image
                    src={item.gambar}
                    alt={`Koleksi ${item.id}`}
                    width={400}
                    height={650}
                    className="rounded-md w-full h-100 object-cover"
                  />
                  <p className="text-gray-800 p-6 rounded-lg shadow-md">
                    {item.deskripsi}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-black text-center col-span-3">
                Tidak ada koleksi tersedia.
              </div>
            )}
          </div>
        )}
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
