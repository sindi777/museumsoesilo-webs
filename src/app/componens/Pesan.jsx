'use client'

import { useState } from 'react'
import { CheckCircle, AlertTriangle, Clock } from 'lucide-react'

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
      headers: {
        'Content-Type': 'application/json',
      },
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
  }

  setTimeout(() => setStatus(null), 3000)
}


  return (
    <section id="contact" className="bg-[#FFFFF] py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3B2C24]">Connect with us</h2>
        <p className="mt-4 text-base md:text-lg text-gray-700">
          Berikan kritik, saran, dan pesan Anda kepada museum di bawah ini
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Kiri: Info */}
        <div className="space-y-8 text-[#3B2C24] text-base">
          <div>
            <h3 className="font-semibold text-lg mb-2">🌐 About</h3>
            <a
              href="https://gentasari.desa.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-words"
            >
              https://gentasari.desa.id/
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">📍 Kontak</h3>
            <p className="text-gray-700 leading-relaxed">
              Tinggarjati Lor, Gentasari, Kec. Kroya,<br />
              Kab. Cilacap, Jawa Tengah 53282
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">⏰ Jam Operasional</h3>
            <p className="text-gray-700 leading-relaxed flex items-start gap-2">
              <Clock size={18} className="mt-1" />
              <span>
                Senin - Jumat: 08.00 - 16.00 WIB<br />
                Sabtu - Minggu: 09.00 - 14.00 WIB<br />
              </span>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">📱 Sosial Media</h3>
            <p className="text-gray-700 leading-relaxed">
              Instagram: <span className="text-blue-700">@soesilosoedarmanmuseum</span><br />
              YouTube: <span className="text-red-600">@museumsoesilosoedarman1880</span>
            </p>
          </div>
        </div>

        {/* Kanan: Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 h-full flex flex-col justify-between">
          {status === 'success' && (
            <div className="flex items-center gap-3 bg-green-50 text-green-800 border border-green-200 px-4 py-3 rounded-md mb-4 text-sm">
              <CheckCircle size={18} />
              <span>Pesan berhasil dikirim!</span>
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-3 bg-red-50 text-red-800 border border-red-200 px-4 py-3 rounded-md mb-4 text-sm">
              <AlertTriangle size={18} />
              <span>Gagal mengirim pesan. Silakan isi pesan terlebih dahulu.</span>
            </div>
          )}

          <textarea
            className="w-full border border-gray-300 rounded-lg p-4 text-gray-800 focus:ring-2 focus:ring-[#3B2C24] focus:outline-none mb-4 resize-none transition"
            rows={10}
            placeholder="Tulis pesan Anda di sini..."
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
          />

          <button
            onClick={handleKirim}
            disabled={loading}
            className={`w-full py-3 rounded-lg text-sm font-medium shadow-md transition ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#3B2C24] text-white hover:bg-[#4b3830]'
            }`}
          >
            {loading ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
        </div>
      </div>
    </section>
  )
}