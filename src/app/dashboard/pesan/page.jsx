'use client'

import { useEffect, useState } from 'react'
import { FaTrashAlt, FaRegCommentDots } from 'react-icons/fa'

export default function PesanDashboard() {
  const [pesanList, setPesanList] = useState([])

  useEffect(() => {
    fetchPesan()
  }, [])

  const fetchPesan = async () => {
    const res = await fetch('/api/pesan/all')
    const data = await res.json()
    setPesanList(data)
  }

  const handleHapus = async (id) => {
    const konfirmasi = confirm('Yakin ingin menghapus pesan ini?')
    if (!konfirmasi) return

    const res = await fetch(`/api/pesan/${id}`, {
      method: 'DELETE',
    })

    if (res.ok) {
      fetchPesan()
    } else {
      alert('Gagal menghapus pesan')
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-[#3B2C24] flex items-center gap-2">
        <FaRegCommentDots className="text-[#3B2C24]" />
        Daftar Feedback Pengunjung
      </h1>

      <div className="space-y-4">
        {pesanList.length > 0 ? (
          pesanList.map((pesan) => (
            <div
              key={pesan.id}
              className="bg-white border border-[#e0d6c8] rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow flex justify-between items-start group"
            >
              <div className="flex flex-col space-y-2">
                <p className="text-[#3B2C24] text-sm sm:text-base leading-relaxed">
                  {pesan.isi}
                </p>
                <span className="text-xs text-gray-500 mt-1">
                  📅 {new Date(pesan.createdAt).toLocaleDateString('id-ID', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>

              <button
                onClick={() => handleHapus(pesan.id)}
                className="text-red-500 hover:text-red-700 transition text-sm ml-4"
                title="Hapus pesan"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 italic">Belum ada pesan masuk.</p>
        )}
      </div>
    </div>
  )
}
