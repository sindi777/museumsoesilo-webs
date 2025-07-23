'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function FormKoleksi({ initialData = null, onFinish }) {
  const [nama, setNama] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [gambarFile, setGambarFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (initialData) {
      setNama(initialData.nama)
      setDeskripsi(initialData.deskripsi)
    }
  }, [initialData])

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    let base64 = initialData?.gambar
    if (gambarFile) {
      base64 = await convertToBase64(gambarFile)
    }

    const method = initialData ? 'PUT' : 'POST'
    const endpoint = initialData
      ? `/api/koleksi/${initialData.id}`
      : '/api/koleksi'

    const res = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nama, deskripsi, gambar: base64 }),
    })

    if (res.ok && onFinish) {
      onFinish() 
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
      <input
        type="text"
        placeholder="Nama Koleksi"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setGambarFile(e.target.files[0])}
        className="w-full border px-4 py-2 rounded"
        {...(initialData ? {} : { required: true })}
      />
      <textarea
        placeholder="Deskripsi Koleksi"
        value={deskripsi}
        onChange={(e) => setDeskripsi(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        rows={4}
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#3B2C24] text-white px-6 py-2 rounded hover:bg-[#4b3830]"
      >
        {isSubmitting
          ? 'Menyimpan...'
          : initialData
          ? 'Simpan Perubahan'
          : 'Simpan Koleksi'}
      </button>
    </form>
  )
}
