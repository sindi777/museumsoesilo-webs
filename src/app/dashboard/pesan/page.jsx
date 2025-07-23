'use client'

import { useEffect, useState } from 'react'

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
      alert('Pesan berhasil dihapus')
      fetchPesan() 
    } else {
      alert('Gagal menghapus pesan')
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Pesan Pengunjung</h1>
      <ul className="space-y-3">
        {pesanList.length > 0 ? (
          pesanList.map(pesan => (
            <li key={pesan.id} className="bg-white p-4 shadow rounded-md flex justify-between items-center">
              <div>
                <p className="text-gray-800">{pesan.isi}</p>
                <span className="text-sm text-gray-500">
                  {new Date(pesan.createdAt).toLocaleDateString('id-ID')}
                </span>
              </div>
              <button
                onClick={() => handleHapus(pesan.id)}
                className="text-red-600 hover:underline text-sm"
              >
                Hapus
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500 italic">Belum ada pesan.</p>
        )}
      </ul>
    </div>
  )
}
