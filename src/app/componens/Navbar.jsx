'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Navbar() {
  const { data: session, status } = useSession()
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

 

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
          <li><a href="/" className="hover:underline">Beranda</a></li>
          <li><a href="/detail-koleksi" className="hover:underline">Koleksi</a></li>
          <li><a href="#contact" className="hover:underline">Umpan Balik</a></li>
          <li><a href="/detail-informasi" className="hover:underline">Informasi Museum</a></li>
          <li>
            <Link
                href="/login"
                className="bg-black text-white px-4 py-2 rounded-full hover:scale-105 transition"
              >
                Login
              </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 font-semibold text-sm">
          <li><a href="/" className="block hover:underline">Beranda</a></li>
          <li><a href="/detail-koleksi" className="block hover:underline">Koleksi</a></li>
          <li><a href="#contact" className="block hover:underline">Umpan Balik</a></li>
          <li><a href="/detail-informasi" className="block hover:underline">Informasi Museum</a></li>
          <li>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 w-full block text-center rounded-full mt-2"
              >
                Logout
              </button>
            ) : (
              <a
                href="/login"
                className="bg-black text-white px-4 py-2 w-full block text-center rounded-full mt-2"
              >
                Login
              </a>
            )}
          </li>
        </ul>
      )}
    </header>
  )
}
