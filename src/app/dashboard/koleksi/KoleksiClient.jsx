'use client'

import { useState } from 'react'
import FormKoleksi from './form'

export default function KoleksiClient({ koleksiList }) {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold">Manajemen Koleksi</h1>

      {/* Tombol Toggle Form */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-[#3B2C24] text-white px-4 py-2 rounded hover:bg-[#4b3830]"
      >
        {showForm ? 'Tutup Form' : 'Tambah Koleksi'}
      </button>

      {/* Form Tambah Koleksi */}
      {showForm && <FormKoleksi />}

      {/* Cek apakah ada koleksi */}
      {koleksiList.length === 0 ? (
        <div className="text-center text-gray-600 italic">
          Belum ada koleksi tersedia.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {koleksiList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border"
            >
              <img
                src={item.gambar}
                alt={item.nama}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-[#3B2C24]">
                  {item.nama}
                </h2>
                <p className="text-sm text-gray-600">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
