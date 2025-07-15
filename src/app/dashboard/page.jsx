'use client'

import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const router = useRouter()
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      message: 'Bagus sekali museumnya, sangat informatif!',
      reply: '',
    },
  ])

  const handleReplyChange = (id, value) => {
    setFeedbacks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, reply: value } : item
      )
    )
  }

  const handleSendReply = (id) => {
    const replied = feedbacks.find((item) => item.id === id)
    if (replied.reply.trim() !== '') {
      alert(`Balasan untuk pesan ID ${id}:\n${replied.reply}`)
    } else {
      alert('Balasan tidak boleh kosong.')
    }
  }

  return (
    <div className="min-h-screen bg-[#F3E8DC] text-[#1E1E1E] font-sans px-4 py-6 sm:px-6 lg:px-8">
      <Head>
        <title>Admin Dashboard</title>
      </Head>

      <h1 className="text-xl sm:text-2xl font-bold text-center mb-8">
        Dashboard Admin Museum
      </h1>
      <button
        onClick={() => router.back()}
        className="text-xl mb-4 hover:opacity-70 transition"
      >
        ←
      </button>
      {/* Kritik & Saran */}
      <section className="bg-white shadow rounded-lg p-4 sm:p-6 max-w-5xl mx-auto mb-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Kritik & Saran Pengunjung</h2>
        <ul className="space-y-6 text-sm sm:text-base">
          {feedbacks.map((item) => (
            <li key={item.id} className="border rounded p-4 bg-gray-50">
              <p className="italic mb-2">"{item.message}"</p>
              <label className="block mb-1 text-sm font-medium">Balas:</label>
              <textarea
                value={item.reply}
                onChange={(e) => handleReplyChange(item.id, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-2"
                rows={2}
                placeholder="Tulis balasan untuk pengunjung..."
              />
              <button
                onClick={() => handleSendReply(item.id)}
                className="bg-[#3B2C24] text-white text-sm px-4 py-1 rounded hover:bg-[#2a1d18] transition"
              >
                Kirim Balasan
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Koleksi Museum */}
      <section className="bg-white shadow rounded-lg p-4 sm:p-6 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-lg sm:text-xl font-semibold">Kelola Koleksi Museum</h2>
          <button className="bg-[#3B2C24] text-white px-4 py-2 rounded hover:bg-[#2a1d18]">
            + Tambah Koleksi
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border shadow rounded-lg bg-gray-50 overflow-hidden">
              <img
                src={`/koleksi${i}.jpg`}
                alt={`Koleksi ${i}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-sm mb-2">Deskripsi singkat koleksi {i}...</p>
                <div className="text-right">
                  <button className="text-red-600 hover:underline text-sm">Hapus</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
