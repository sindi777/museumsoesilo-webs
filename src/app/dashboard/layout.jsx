'use client'

import Sidebar from '../componens/sidebar'

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full min-h-screen bg-[#EFE7DF] p-6">
        {children}
      </main>
    </div>
  )
}
