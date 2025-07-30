'use client'

import { useState } from 'react'
import {
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaClock,
  FaGlobe,
} from 'react-icons/fa'

export default function Pesan() {
  const [pesan, setPesan] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleKirim = async () => {
    if (pesan.trim() === '') {
      setStatus('error')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/pesan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pesan }),
      })

      if (res.ok) {
        setStatus('success')
        setPesan('')
      } else {
        throw new Error('Gagal mengirim pesan')
      }
    } catch (err) {
      setStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => setStatus(null), 3000)
    }
  }

  return (
    <section
      id="contact"
      className="bg-white py-16 px-4 transition-all"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#FFFFF] drop-shadow-md">
          Connect With Us
        </h2>
        <p className="text-gray-600 mt-2">Silakan berikan kritik dan saran anda</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Kiri*/}
        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg space-y-6 text-[#3B2C24] text-base border border-white/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <div>
            <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
              <FaGlobe /> Website
            </h3>
            <a
              href="https://gentasari.desa.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline break-words"
            >
              https://gentasari.desa.id/
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
              <FaMapMarkerAlt /> Alamat
            </h3>
            <p>
              Tinggarjati Lor, Gentasari, Kec. Kroya,<br />
              Kab. Cilacap, Jawa Tengah 53282
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
              <FaClock /> Jam Operasional
            </h3>
            <p>Setiap Hari: 09.00 - 16.00 WIB</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
              Sosial Media
            </h3>
            <p>
              <FaInstagram className="inline-block text-[#E1306C] mr-2" />
              <span className="text-[#E1306C]">@soesilosoedarmanmuseum</span>
              <br />
              <FaYoutube className="inline-block text-red-600 mr-2" />
              <span className="text-red-600">@museumsoesilosoedarman1880</span>
            </p>
          </div>
        </div>

        {/* Kanan */}
        <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
          {status === 'success' && (
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4 transition-opacity duration-500">
              ✅ Pesan berhasil dikirim!
            </div>
          )}
          {status === 'error' && (
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded mb-4 transition-opacity duration-500">
              ❌ Gagal mengirim pesan. Pastikan pesan tidak kosong.
            </div>
          )}

          <textarea
            rows={8}
            placeholder="Tulis pesan Anda di sini..."
            className="w-full border border-gray-300 rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-[#3B2C24] transition-all duration-300 resize-none"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
          />

          <button
            onClick={handleKirim}
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#3B2C24] hover:bg-[#4e3b30]'
            }`}
          >
            {loading ? '⏳ Mengirim...' : 'Kirim Pesan'}
          </button>
        </div>
      </div>
    </section>
  )
}
