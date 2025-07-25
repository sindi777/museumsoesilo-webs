'use client'

import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (res?.ok) {
      router.push('/dashboard')
    } else {
      setError('Login gagal. Email atau password salah.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f0ea] via-[#efe7df] to-[#e7dacf] px-4">
      <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl rounded-2xl w-full max-w-md p-8 animate-fade-in">
        <h1 className="text-2xl font-bold text-center text-[#33231A] mb-6">
          🔐 Form Login Admin
        </h1>

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block font-semibold text-sm mb-1">E-mail</label>
            <div className="flex items-center border rounded-lg bg-white focus-within:ring-2 ring-[#33231A] transition">
              <span className="px-3 text-[#888]"><FaEnvelope /></span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none rounded-r-lg"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold text-sm mb-1">Password</label>
            <div className="flex items-center border rounded-lg bg-white focus-within:ring-2 ring-[#33231A] transition">
              <span className="px-3 text-[#888]"><FaLock /></span>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none rounded-r-lg"
                required
              />
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-600 font-medium">{error}</div>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#33231A] text-white font-semibold hover:bg-[#22180F] transition-all"
          >
            Login
          </button>
        </form>

        {/* Link kembali */}
        <Link
          href="/"
          className="mt-4 block text-center text-sm text-[#FF7700] hover:underline"
        >
          ← Kembali ke Beranda
        </Link>

        <div className="mt-6 text-center text-sm text-[#33231A] leading-tight">
          <p className="font-bold">🔒 Hanya Untuk Admin</p>
          <p className="text-xs">Login menggunakan akun resmi.</p>
        </div>
      </div>
    </div>
  )
}
