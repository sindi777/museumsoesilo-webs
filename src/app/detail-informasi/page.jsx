'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaRegClock } from 'react-icons/fa'
import { FaMoneyBillWave } from 'react-icons/fa'

export default function TentangMuseum() {
  const router = useRouter()

  return (
    <section className="bg-white min-h-screen pt-20 px-4 md:px-10 py-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start gap-8">
        
        {/* Gambar Museum */}
        <div className="relative w-full md:w-1/3">
          <Image
            src="/bapak-soesilo.jpg"
            alt="Jenderal Soesilo Soedarman"
            width={400}
            height={500}
            className="rounded-lg w-full object-cover border border-gray-300"
          />
        </div>

        {/* Konten */}
        <div className="w-full md:w-2/3 text-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tentang Museum</h2>
          <p className="text-justify mb-4 text-sm md:text-base leading-relaxed">
            Museum Soesilo Soedarman terletak di Desa Gentasari, Kabupaten Cilacap, Provinsi Jawa Tengah, Indonesia. Museum ini dapat diakses dari Yogyakarta, melewati Purworejo – Kutoarjo – Kebumen – Gombong – Buntu dan Sampang. Museum Soesilo Soedarman diresmikan pada tahun 2000 untuk menghormati almarhum Jenderal Soesilo Soedarman (1928 – 1997), seorang pemimpin militer Indonesia terkemuka sekaligus warga negara Indonesia yang terhormat.
          </p>
          <p className="text-justify text-sm md:text-base leading-relaxed">
            Jenderal Soesilo Soedarman bertindak di kemapanan militer Indonesia sejak 1945 sebagai Kadet di Akademi Militer Yogyakarta, dan bergabung dengan kampanye gerilya di Jawa Barat dan di sekitar Daerah Ibu Kota Yogyakarta selama Perang Kemerdekaan (1945 – 1948). Dia dan unitnya, SWK-104, Werkhreise III, berpartisipasi dalam keberhasilan serangan 1 Maret 1949 di Ibu Kota Yogyakarta di bawah kepemimpinan Kolonel Soeharto, Panglima Brigade Werkhreise III, dan kemudian menjadi Presiden RI ke-2.
          </p>

          <h3 className="mt-6 font-semibold text-lg mb-2 flex items-center gap-2">
            <FaRegClock size={20} className="text-[#3B2C24]" />
            Jam Operasional
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Setiap Hari: 09.00 - 16.00 WIB<br />
          </p>

          <h3 className="mt-5 font-semibold text-lg mb-2 flex items-center gap-2">
            <FaMoneyBillWave size={20} className="text-green-600" />
            Harga Tiket
          </h3>
          <p className="flex items-start gap-2 text-gray-700 leading-relaxed">
            Tiket untuk masuk ke dalam Museum Soesilo Soedarman berkisar: <br />
            Rp. 5.000 untuk Umum <br />
            Rp. 3.000 untuk bookingan anak sekolah
          </p>
        </div>
      </div>
    </section>
  )
}
