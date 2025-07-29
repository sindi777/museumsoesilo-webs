'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import { FaInbox, FaBoxOpen, FaCommentDots, FaHistory } from 'react-icons/fa'

export default function AdminDashboard() {
  const [totalKoleksi, setTotalKoleksi] = useState(0)
  const [totalPesan, setTotalPesan] = useState(0)
  const [kritikSaran, setKritikSaran] = useState([])
  const [logAktivitas, setLogAktivitas] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [koleksiRes, pesanRes, logRes] = await Promise.all([
          fetch('/api/koleksi'),
          fetch('/api/pesan'),
          fetch('/api/logs'),
        ])

        const koleksiData = await koleksiRes.json()
        const pesanData = await pesanRes.json()
        const logData = await logRes.json()

        setTotalKoleksi(koleksiData.length)
        setTotalPesan(pesanData.length)
        setKritikSaran(pesanData.slice(-2).reverse())
        setLogAktivitas(logData.slice(0, 5))
      } catch (err) {
        console.error('Gagal mengambil data dashboard:', err)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3E8DC] to-[#F0D8C4] px-4 py-8 sm:px-6 lg:px-12 text-[#1E1E1E] font-sans">
      <Head>
        <title>Admin Dashboard</title>
      </Head>

      <h1 className="text-2xl font-bold text-center mb-10 tracking-wide">
        🏛️ Dashboard Admin Museum
      </h1>

      {/* Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-[1.02] transition-all">
          <div className="flex items-center gap-4 mb-2">
            <FaBoxOpen className="text-3xl text-[#6C3D2F]" />
            <div>
              <h3 className="text-2xl font-bold">{totalKoleksi}</h3>
              <p className="text-sm text-gray-600">Total Koleksi</p>
            </div>
          </div>
        </div>
<div className="bg-white rounded-xl shadow-lg p-6 hover:scale-[1.02] transition-all">
    <div className="flex items-center gap-4 mb-2">
      <FaInbox className="text-3xl text-[#6C3D2F]" />
      <div>
        <h3 className="text-2xl font-bold">{totalPesan}</h3>
        <p className="text-sm text-gray-600">Pesan Masuk</p>
      </div>
    </div>
  </div>
      </div>

      {/* Kritik & Saran */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FaCommentDots /> Kritik & Saran Terbaru
        </h2>
        {kritikSaran.length > 0 ? (
          kritikSaran.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFF5F0] text-sm italic text-[#3B2F2F] mb-3 px-4 py-2 rounded-lg shadow-sm"
            >
              <div className="flex justify-between">
                <span>"{item.isi}"</span>
                <span className="text-xs text-right text-gray-500">{item.tanggal}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm italic text-gray-500">Belum ada pesan masuk.</p>
        )}
      </div>

      {/* Log Aktivitas */}
      {/* <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FaHistory /> Aktivitas Admin Terakhir
        </h2>
        {logAktivitas.length > 0 ? (
          <ul className="space-y-3 text-sm">
            {logAktivitas.map((log, i) => (
              <li
                key={i}
                className="border-l-4 pl-4 border-[#6C3D2F] bg-[#FFF7F2] rounded-md py-2"
              >
                <span className="block">
                  {log.tipe === 'tambah' ? (
                    <span>✅ Koleksi <strong>"{log.judul}"</strong> ditambahkan</span>
                  ) : (
                    <span>🗑️ Koleksi <strong>"{log.judul}"</strong> dihapus</span>
                  )}
                </span>
                <span className="text-xs text-gray-500">{log.tanggal}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm italic text-gray-500">Belum ada aktivitas tercatat.</p>
        )}
      </div> */}
    </div>
  )
}
