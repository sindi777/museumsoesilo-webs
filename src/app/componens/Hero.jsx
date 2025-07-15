'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
      <Image
        src="/museum-6.webp"
        alt="Museum Soesilo"
        fill
        className="object-cover"
        priority
      />

      {/* Kontainer Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-4 md:ml-12 lg:ml-24 max-w-[90%] md:max-w-xl space-y-4">
          {/* Kotak Transparan */}
          <div className="bg-white/60 backdrop-blur-sm text-gray-800 p-4 md:p-6 rounded-lg shadow-md">
            <p className="text-sm md:text-base leading-relaxed">
              Museum Soesilo Soedarman terletak di Desa Gentasari, Kabupaten Cilacap, Provinsi Jawa Tengah, Indonesia. Museum Soesilo Soedarman diresmikan pada tahun 2000 untuk menghormati mendiang Jenderal Soesilo Soedarman (1928 – 1997), seorang pemimpin militer Indonesia terkemuka sekaligus warga negara Indonesia yang terhormat.
            </p>
          </div>

          {/* Tombol Selengkapnya */}
          <button
            onClick={() => router.push('/detail-informasi')}
            className="bg-black text-white px-5 md:px-6 py-2 rounded-full hover:bg-gray-800 transition text-sm md:text-base"
          >
            Selengkapnya
          </button>
        </div>
      </div>
    </section>
  )
}
