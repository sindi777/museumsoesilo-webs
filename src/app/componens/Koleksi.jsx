'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Koleksi() {
  const router = useRouter()
  const [koleksiList, setKoleksiList] = useState([])
  const [loading, setLoading] = useState(true)

  const truncate = (text, maxWords = 20) => {
    const words = text.split(' ')
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...'
    }
    return text
  }

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
      <div className="max-w-7xl mx-auto px-4">
        {loading ? (
          <p className="text-black text-center">Memuat data koleksi...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {koleksiList.length > 0 ? (
              koleksiList.map((item) => (
                <div
                  key={item.id}
                  className="
                    bg-white/20 
                    backdrop-blur-lg 
                    rounded-2xl 
                    p-5 
                    shadow-md 
                    hover:shadow-2xl 
                    transform hover:scale-105 
                    transition 
                    cursor-pointer 
                    border border-white/30
                    flex flex-col
                  "
                  onClick={() => router.push(`/list-koleksi/${item.id}`)}
                >
                  <div className="relative overflow-hidden rounded-xl mb-5">
                    <img
                      src={item.gambar}
                      alt={`Koleksi ${item.nama}`}
                      className="w-full h-72 object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {item.nama}
                  </h3>
                  <p className="text-black bg-white/70 backdrop-blur-sm p-4 rounded-lg text-base leading-relaxed font-sans">
                    {truncate(item.deskripsi, 20)}
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
          className="
            mx-auto
            mt-8
            px-6
            py-3
            bg-transparent
            border-2 border-[#3b2c24]
            text-[#3b2c24]
            font-semibold
            rounded-full
            cursor-pointer
            shadow-md
            transition
            transform
            hover:bg-[#3b2c24] hover:text-white hover:shadow-lg
            active:scale-95
            focus:outline-none focus:ring-4 focus:ring-[#3b2c24]/60
            select-none
            text-center
            w-max
          "
        >
          Lihat Koleksi Selengkapnya
        </div>
      </div>
    </section>
  )
}
