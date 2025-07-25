'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import FormKoleksi from './form'
import { FaEdit, FaTrash, FaPlusCircle, FaBoxOpen } from 'react-icons/fa'

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
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#33231A]">📦 Manajemen Koleksi</h1>
        <button
          onClick={() => {
            setEditingItem(null)
            setShowForm(!showForm)
          }}
          className="flex items-center gap-2 bg-[#3B2C24] text-white px-4 py-2 rounded shadow hover:bg-[#4b3830] transition"
        >
          <FaPlusCircle />
          {showForm ? 'Tutup Form' : 'Tambah Koleksi'}
        </button>
      </div>

      {showForm && (
        <FormKoleksi
          initialData={editingItem}
          onFinish={handleFormFinish}
        />
      )}

      {koleksiList.length === 0 ? (
        <div className="text-center text-gray-500 italic mt-10">
          <FaBoxOpen className="text-4xl mx-auto mb-2" />
          Belum ada koleksi tersedia.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {koleksiList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.gambar}
                alt={item.nama}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-[#3B2C24] line-clamp-1">{item.nama}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">{item.deskripsi}</p>
              </div>
              <div className="flex divide-x border-t">
                <button
                  onClick={() => handleEdit(item)}
                  className="w-1/2 flex items-center justify-center gap-2 text-sm font-semibold text-white py-2 bg-[#33231A] hover:bg-[#4B3A30] transition"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="w-1/2 flex items-center justify-center gap-2 text-sm font-semibold text-white py-2 bg-[#B80003] hover:bg-[#8e0002] transition"
                >
                  <FaTrash /> Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
