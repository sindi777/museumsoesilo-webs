'use client'

import { useState } from 'react'

export default function Pesan() {
  const [pesan, setPesan] = useState('')
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const handleKirim = () => {
    if (pesan.trim() === '') {
      setStatus('error')
      return
    }

    setStatus('success')
    setPesan('')
  }

  return (
    <section className="bg-[#F3E8DC] py-12 px-4 sm:px-6">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-4">Connect with us</h2>
      <p className="text-center text-sm md:text-base mb-6">
        Berikan kritik, saran, dan pesan anda kepada museum di bawah ini
      </p>

      <div className="max-w-xl mx-auto">
        {/* Notifikasi */}
        {status === 'success' && (
          <div className="bg-green-100 text-green-700 border border-green-400 px-4 py-3 rounded mb-4 text-sm">
            ✅ Pesan berhasil dikirim!
          </div>
        )}
        {status === 'error' && (
          <div className="bg-red-100 text-red-700 border border-red-400 px-4 py-3 rounded mb-4 text-sm">
            ⚠️ Gagal mengirim pesan. Silakan isi pesan terlebih dahulu.
          </div>
        )}

        <textarea
          className="w-full p-4 border border-gray-400 rounded-md mb-4 text-sm md:text-base"
          placeholder="Tulis pesan anda di sini..."
          rows="4"
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
        />
        <button
          onClick={handleKirim}
          className="w-full bg-[#3B2C24] text-white py-2 rounded hover:opacity-90 transition"
        >
          Kirim
        </button>
      </div>

      <div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-sm text-center md:text-left">
        <div>
          <h3 className="font-semibold mb-1">About</h3>
          <p className="text-gray-700 break-words">https://gentasari.desa.id/</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Kontak</h3>
          <p className="text-gray-700 break-words">
            Tinggarjati Lor, Gentasari, Kec. Kroya,<br />
            Kab. Cilacap, Jawa Tengah 53282
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Sosial media</h3>
          <p className="text-gray-700 break-words">
            Ig: @soesilosoedarmanmuseum<br />
            Yt: @museumsoesilosoedarman1880
          </p>
        </div>
      </div>
    </section>
  )
}
