'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaRegClock } from 'react-icons/fa'
import { FaMoneyBillWave } from 'react-icons/fa'

export default function TentangMuseum() {
  const router = useRouter()

  return (
    <section className="bg-white min-h-screen pt-32 px-4 md:px-10 pb-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start gap-10">
        
        {/* Gambar Museum */}
        <div className="relative w-full md:w-1/4">
          <Image
            src="/bapak-soesilo.jpg"
            alt="Jenderal Soesilo Soedarman"
            width={300}
            height={400}
            className="rounded-xl w-full object-cover border border-gray-300 shadow-md max-h-[400px]"
          />
        </div>

        {/* Konten */}
        <div className="w-full md:w-2/3 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3E2C23]">
            Tentang Museum
          </h2>

          <p className="text-justify mb-4 text-sm md:text-base leading-relaxed">
            <strong>Museum Soesilo Soedarman</strong>  merupakan sebuah destinasi budaya dan sejarah yang penting di Kabupaten Cilacap, Jawa Tengah. Museum ini didirikan untuk mengenang dan menghormati jasa-jasa almarhum Jenderal Soesilo Soedarman, seorang tokoh militer Indonesia yang berperan penting dalam perjuangan kemerdekaan dan pembangunan bangsa. Museum ini bukan hanya sebagai tempat penyimpanan barang-barang bersejarah, melainkan juga sebagai pusat edukasi yang menghadirkan berbagai koleksi yang menggambarkan perjalanan hidup dan karier militer Jenderal Soesilo Soedarman.
          </p>

          <p className="text-justify text-sm md:text-base leading-relaxed">
            Jenderal Soesilo Soedarman sendiri memiliki peran strategis dalam sejarah militer Indonesia, terutama selama masa revolusi kemerdekaan. Ia mulai aktif berjuang sejak 1945 sebagai kadet di Akademi Militer Yogyakarta, sebuah periode di mana Indonesia sedang berjuang mempertahankan kemerdekaannya dari penjajahan Belanda yang berusaha kembali menguasai wilayah Indonesia pasca-Perang Dunia II. Soesilo Soedarman termasuk dalam pasukan gerilya yang melakukan perlawanan intens di daerah Jawa Barat dan Yogyakarta, termasuk dalam serangan bersejarah tanggal 1 Maret 1949 yang dipimpin oleh Kolonel Soeharto. Keberanian dan kecakapannya sebagai prajurit serta pemimpin militernya menjadikannya tokoh yang sangat dihormati hingga akhir hayatnya.
          </p>
          <p className='text-justify text-sm md:text-base leading-relaxed'>
            Museum ini memiliki berbagai koleksi yang meliputi foto-foto, dokumen, seragam militer, medali penghargaan, serta benda-benda pribadi milik Jenderal Soesilo Soedarman. Selain menjadi tempat mengenang jasa sang Jenderal, museum ini juga menjadi media pembelajaran bagi generasi muda dan masyarakat umum tentang sejarah perjuangan kemerdekaan Indonesia serta nilai-nilai kepahlawanan, patriotisme, dan pengabdian terhadap negara.
            Selain koleksi statis, museum ini juga sering menjadi tempat penyelenggaraan berbagai kegiatan edukasi dan seminar yang membahas sejarah militer dan perkembangan pertahanan Indonesia. Dengan demikian, museum ini bukan hanya tempat penyimpanan benda-benda bersejarah, tapi juga ruang interaktif yang mengajak pengunjung untuk memahami konteks sejarah dan pentingnya peran tokoh-tokoh seperti Jenderal Soesilo Soedarman dalam membentuk bangsa. Berada di Desa Gentasari yang asri, museum ini juga memberikan suasana yang tenang dan nyaman bagi para pengunjung yang ingin menikmati perjalanan sejarah secara mendalam. Dengan jam operasional yang cukup fleksibel, museum ini terbuka bagi masyarakat luas, baik wisatawan lokal maupun nasional, serta para pelajar yang ingin mendapatkan wawasan sejarah secara langsung dari peninggalan seorang pahlawan nasional.
            Secara keseluruhan, Museum Soesilo Soedarman tidak hanya berfungsi sebagai penghormatan bagi seorang pahlawan, tetapi juga sebagai sumber inspirasi dan pendidikan sejarah yang sangat berharga bagi bangsa Indonesia.
          </p>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mt-10">

            {/* Jam Operasional */}
            <div className="bg-[#F9F9F9] border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 text-[#3E2C23] mb-2">
                <FaRegClock className="text-xl" />
                <h3 className="text-lg font-semibold">Jam Operasional</h3>
              </div>
              <p className="text-sm text-gray-700 ml-6">
                <span className="inline-block bg-[#F2F2F2] text-[#3E2C23] font-medium px-3 py-1 rounded-full text-sm">
                  Setiap Hari: 09.00 - 16.00 WIB
                </span>
              </p>
            </div>

            {/* Harga Tiket */}
            <div className="bg-[#F9F9F9] border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 text-green-700 mb-2">
                <FaMoneyBillWave className="text-xl" />
                <h3 className="text-lg font-semibold">Harga Tiket</h3>
              </div>
              <ul className="ml-6 text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>
                  <span className="font-semibold text-gray-900">Rp. 5.000</span> untuk Umum
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Rp. 3.000</span> untuk bookingan anak sekolah
                </li>
              </ul>
            </div>

          </div>

          {/* Tombol Navigasi */}
          <div className="mt-10 text-center">
  <button
    onClick={() => router.push('/detail-koleksi')}
    className="px-6 py-3 bg-white/30 backdrop-blur-md text-[#3B2C24] font-medium rounded-full transition duration-300 ease-in-out shadow-md hover:bg-[#3B2C24] hover:text-white"
  >
    Lihat Koleksi Museum
  </button>
</div>

        </div>
      </div>
    </section>
  )
}
