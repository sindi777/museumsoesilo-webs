'use client'

import Head from 'next/head'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Signup() {
  const router = useRouter()

  // Simulasi input email dan password
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Simulasi login
  const handleLogin = (e) => {
    e.preventDefault()

    // Ganti dengan validasi login sesuai kebutuhanmu
    if (email === 'admin@example.com' && password === 'admin123') {
      // ✅ Jika login berhasil, arahkan ke dashboard
      router.push('/dashboard')
    } else {
      alert('Email atau password salah!')
    }
  }

  return (
    <>
      <Head>
        <title>Sign Up - Museum Soesilo</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-[#EFE7DF] px-4">
        <div className="bg-white w-full max-w-md sm:rounded-xl shadow-lg px-6 py-8 sm:px-8 sm:py-10 text-gray-800">
          <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">Form Login Admin</h1>

          {/* ⬇ Form dengan handleLogin */}
          <form className="space-y-4 text-sm sm:text-base" onSubmit={handleLogin}>
            <div>
              <label htmlFor="name" className="block font-medium mb-1">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#33231A]"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#33231A]"
                placeholder="admin@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-medium mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#33231A]"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#33231A] text-white py-2 rounded hover:bg-[#22180F] transition"
            >
              Login
            </button>
          </form>

          <button
            onClick={() => router.push('/')}
            className="mt-4 w-full text-sm text-[#33231A] hover:underline"
          >
            ← Kembali ke Beranda
          </button>

          <div className="mt-6 text-center text-sm text-[#33231A] leading-snug">
            <p className="font-bold">🔒 Hanya Untuk Admin</p>
            <p>Login menggunakan akun resmi.</p>
          </div>
        </div>
      </div>
    </>
  )
}
