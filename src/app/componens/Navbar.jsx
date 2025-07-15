'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-[#EFE7DF] text-[#1E1E1E] font-sans shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo & Title */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo2.png"
            alt="museumsoesilo"
            width={40}
            height={40}
            className="object-contain rounded-full"
          />
          <h1 className="text-base md:text-xl font-bold whitespace-nowrap">
            MUSEUM SOESILO SOEDARMAN
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center font-semibold text-sm md:text-base">
          <li><a href="#" className="hover:underline" onClick={() => router.push('/')}>Beranda</a></li>
          <li><a href="#" className="hover:underline"onClick={() => router.push('/detail-koleksi')}>Koleksi</a></li>
          <li><a href="#" className="hover:underline"onClick={() => router.push('/detail-kontak')}>Kontak</a></li>
          <li><a href="#" className="hover:underline"onClick={() => router.push('/detail-informasi')}>Informasi Museum</a></li>
          <li>
            <button
              onClick={() => router.push('/login')}
              className="bg-black text-white px-4 py-2 rounded-full hover:scale-105 transition"
            >
              Login
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 font-semibold text-sm">
          <li><a href="#" className="block hover:underline"onClick={() => router.push('/')}>Beranda</a></li>
          <li><a href="#" className="block hover:underline"onClick={() => router.push('/detail-koleksi')}>Koleksi</a></li>
          <li><a href="#" className="block hover:underline"onClick={() => router.push('/detail-kontak')}>Kontak</a></li>
          <li><a href="#" className="block hover:underline"onClick={() => router.push('/detail-informasi')}>Informasi Museum</a></li>
          <li>
            <button
              onClick={() => router.push('/login')}
              className="bg-black text-white px-4 py-2 w-full rounded-full mt-2"
            >
              Login
            </button>
          </li>
        </ul>
      )}
    </header>
  )
}
