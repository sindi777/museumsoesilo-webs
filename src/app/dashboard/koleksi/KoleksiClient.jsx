'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import FormKoleksi from './form'

export default function KoleksiClient({ koleksiList }) {
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const router = useRouter()

  const handleDelete = async (id) => {
    const confirm = window.confirm('Yakin ingin menghapus koleksi ini?')
    if (!confirm) return

    try {
      const res = await fetch(`/api/koleksi/${id}`, {
        method: 'DELETE',
      })

      if (res.ok) {
        router.refresh()
      } else {
        alert('Gagal menghapus koleksi')
      }
    } catch (err) {
      console.error(err)
      alert('Terjadi kesalahan saat menghapus')
    }
  }

  const handleEdit = (item) => {
    setEditingItem(item)
    setShowForm(true)
  }

  const handleFormFinish = () => {
    setShowForm(false)
    setEditingItem(null)
    router.refresh()
  }

  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold">Manajemen Koleksi</h1>

      <button
        onClick={() => {
          setEditingItem(null)
          setShowForm(!showForm)
        }}
        className="bg-[#3B2C24] text-white px-4 py-2 rounded hover:bg-[#4b3830]"
      >
        {showForm ? 'Tutup Form' : 'Tambah Koleksi'}
      </button>

      {showForm && (
        <FormKoleksi
          initialData={editingItem}
          onFinish={handleFormFinish}
        />
      )}

      {koleksiList.length === 0 ? (
        <div className="text-center text-gray-600 italic">
          Belum ada koleksi tersedia.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {koleksiList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border flex flex-col"
            >
              <img
                src={item.gambar}
                alt={item.nama}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2 flex-grow">
                <h2 className="text-lg font-semibold text-[#3B2C24]">
                  {item.nama}
                </h2>
                <p className="text-sm text-gray-600">{item.deskripsi}</p>
              </div>
              <div className="flex">
                <button
                  onClick={() => handleEdit(item)}
                  className="w-1/2 bg-[#33231A] text-white text-sm font-semibold px-4 py-2 hover:bg-[#4B3A30] transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="w-1/2 bg-[#B80003] text-white text-sm font-semibold px-4 py-2 hover:bg-[#8e0002] transition"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
