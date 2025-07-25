'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'BERANDA', href: '/' },
    { label: 'KOLEKSI', href: '/detail-koleksi' },
    { label: 'UMPAN BALIK', href: '#contact' },
    { label: 'INFORMASI MUSEUM', href: '/detail-informasi' },
  ]

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md shadow-md rounded-full max-w-6xl w-[95%] px-6">

      <nav className="flex items-center justify-between py-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-5 min-w-[220px]">
          <Image
            src="/logo2.png"
            alt="museum-logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap tracking-wide">
            MUSEUM SOESILO SOEDARMAN
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-10 items-center font-semibold text-gray-800 text-sm md:text-[13px] whitespace-nowrap">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="relative group transition">
                <span className="group-hover:text-blue-800 transition">{item.label}</span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-800 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/login"
              className="bg-black text-white px-5 py-2 rounded-full hover:scale-105 active:scale-95 transition-transform duration-150 ease-in-out"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/30 backdrop-blur-md px-6 pb-6 pt-2 space-y-3 shadow-lg rounded-b-xl">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm font-medium text-gray-800 hover:text-blue-800 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="inline-block bg-black text-white text-center w-full py-2 rounded-full mt-2 hover:bg-gray-800 active:scale-95 transition-transform duration-150 ease-in-out"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  )
}
