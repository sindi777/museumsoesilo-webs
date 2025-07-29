'use client'

import Sidebar from '../componens/sidebar'

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 min-h-screen bg-[#EFE7DF] p-6 transition-all duration-300">

        {children}
      </main>
    </div>
  )
}
