'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-[#3B2C24] text-white p-4 z-50">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav className="flex flex-col gap-3">
        <Link href="/dashboard" className="hover:underline">Beranda</Link>
        <Link href="/dashboard/koleksi" className="hover:underline">Koleksi</Link>
        <Link href="/dashboard/pesan" className="hover:underline">Pesan</Link>
        <button
          onClick={() => signOut({callbackUrl: "/"})}
          className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
        >
          Logout
        </button>
      </nav>
    </aside>
  )
}

