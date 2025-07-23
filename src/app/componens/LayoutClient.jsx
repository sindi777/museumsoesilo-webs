'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function LayoutClient({ children }) {
  const pathname = usePathname()
  const hideNavbar = pathname === '/login' || pathname.startsWith('/dashboard')

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className={!hideNavbar ? " min-h-screen" : "min-h-screen"}>
        {children}
      </main>
    </>
  )
}
