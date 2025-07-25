'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import {
  FaHome,
  FaThList,
  FaEnvelope,
  FaSignOutAlt,
  FaUserCircle,
} from 'react-icons/fa'

const menuItems = [
  { href: '/dashboard', icon: <FaHome />, label: 'Beranda' },
  { href: '/dashboard/koleksi', icon: <FaThList />, label: 'Koleksi' },
  { href: '/dashboard/pesan', icon: <FaEnvelope />, label: 'Feedback' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-[#3B2C24] text-white flex flex-col justify-between py-6 px-4 z-50">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-8 text-white tracking-wide">🎨 Dashboard</h2>

        {/* Menu */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition
                ${pathname === item.href
                  ? 'bg-[#F3E8DC] text-[#3B2C24]'
                  : 'hover:bg-[#4B3A30] hover:text-white'}
              `}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <div className="mb-4 flex items-center gap-2 text-sm opacity-80">
          <FaUserCircle className="text-xl" />
          <span>Admin</span>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-full transition"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </aside>
  )
}
