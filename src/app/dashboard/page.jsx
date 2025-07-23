'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'

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
    <div className="min-h-screen bg-[#F3E8DC] text-[#1E1E1E] font-sans px-4 py-6 sm:px-6 lg:px-8">
      <Head>
        <title>Admin Dashboard</title>
      </Head>

      <h1 className="text-xl sm:text-2xl font-bold text-center mb-8">
        Dashboard Admin Museum
      </h1>

      {/* Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-center">
        <div className="bg-[#EFE7DF] rounded-xl py-6 shadow">
          <div className="text-2xl font-bold">{totalKoleksi}</div>
          <div>Total Koleksi</div>
        </div>
        <div className="bg-[#EFE7DF] rounded-xl py-6 shadow">
          <div className="text-2xl font-bold">{totalPesan}</div>
          <div>Pesan Masuk</div>
        </div>
      </div>

      {/* Kritik & Saran */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="font-semibold text-lg mb-4">Kritik & Saran Terbaru</h2>
        {kritikSaran.length > 0 ? (
          kritikSaran.map((item, index) => (
            <div
              key={index}
              className="bg-[#EFE7DF] text-sm italic text-[#33231A] mb-3 px-4 py-2 rounded flex justify-between"
            >
              <span>"{item.isi}"</span>
              <span className="text-xs text-right text-gray-500">{item.tanggal}</span>
            </div>
          ))
        ) : (
          <p className="text-sm italic text-gray-500">Belum ada pesan masuk.</p>
        )}
      </div>

      {/* Log Aktivitas */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="font-semibold text-lg mb-4">Aktivitas Admin Terakhir</h2>
        {logAktivitas.length > 0 ? (
          <ul className="text-sm space-y-2 text-[#33231A]">
            {logAktivitas.map((log, i) => (
              <li key={i}>
                {log.tipe === 'tambah' ? (
                  <span>✅ Koleksi "<strong>{log.judul}</strong>" ditambahkan — {log.tanggal}</span>
                ) : (
                  <span>🗑️ Koleksi "<strong>{log.judul}</strong>" dihapus — {log.tanggal}</span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm italic text-gray-500">Belum ada aktivitas tercatat.</p>
        )}
      </div>
    </div>
  )
}
