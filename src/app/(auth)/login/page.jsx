'use client'

import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

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
    <div className="min-h-screen flex items-center justify-center bg-[#EFE7DF] px-4">
      <div className="bg-white w-full max-w-md sm:rounded-xl shadow-lg px-6 py-8 sm:px-8 sm:py-10 text-gray-800">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">Form Login Admin</h1>

        {/* Form Login */}
        <form className="space-y-4 text-sm sm:text-base" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
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
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#33231A] text-white py-2 rounded hover:bg-[#22180F] transition"
          >
            Login
          </button>
        </form>

        {/* Tombol kembali ke beranda */}
        <Link
          href="/"
          className="mt-4 w-full block text-center text-sm text-[#33231A] hover:underline"
        >
          ← Kembali ke Beranda
        </Link>

        <div className="mt-6 text-center text-sm text-[#33231A] leading-snug">
          <p className="font-bold">🔒 Hanya Untuk Admin</p>
          <p>Login menggunakan akun resmi.</p>
        </div>
      </div>
    </div>
  )
}
