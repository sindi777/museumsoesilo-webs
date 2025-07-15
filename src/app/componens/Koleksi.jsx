// 'use client'

// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'


// const koleksiData = [
//   {
//     id: 1,
//     gambar: '/unggulan1.jpg',
//     deskripsi: 'Ruangan utama berisi berbagai barang pribadi milik keluarga bapak Soesilo Soedarman',
//   },
//   {
//     id: 2,
//     gambar: '/unggulan2.jpg',
//     deskripsi: 'Dokumentasi perjalanan karier militer dan diplomatik beliau',
//   },
//   {
//     id: 3,
//     gambar: '/unggulan3.jpg',
//     deskripsi: 'Koleksi pribadi seperti seragam, medali, dan benda bersejarah lainnya',
//   },
// ]

// export default function Koleksi() {
// const router = useRouter()
//   return (
//     <section className="bg-[#EFE7DF] text-white p-10">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {koleksiData.map((item) => (
//             <div key={item.id} className="bg-white backdrop-blur-sm rounded-lg p-4 w-full shadow-md hover:shadow-lg transition">
//             {/* onClick={() => router.push('/list-koleksi')} */}

//             <Link href={router.push(`/list-koleksi/$id`)}>
//             <Image
//                 src={item.gambar}
//                 alt={item.id}
//                 width={400}
//                 height={650}
//                 className="rounded-md w-full h-100 object-cover"
//               />
//             </Link>
              
//               <p className=" text-gray-800 p-6 rounded-lg shadow-md">{item.deskripsi}</p>
               
//             </div>
//           ))}
//         </div>
//         <p className="text-center mt-8 text-black underline cursor-pointer hover:text-grey-300 transition">
//           Lihat Koleksi Selengkapnya
//         </p>
//       </div>
//     </section>
//   )
// }



'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const koleksiData = [
  {
    id: 1,
    gambar: '/koleksi/unggulan1.jpg',
    deskripsi: 'Ruangan utama berisi berbagai barang pribadi milik keluarga bapak Soesilo Soedarman',
  },
  {
    id: 2,
    gambar: '/koleksi/unggulan2.jpg',
    deskripsi: 'Dokumentasi perjalanan karier militer dan diplomatik beliau',
  },
  {
    id: 3,
    gambar: '/koleksi/unggulan3.jpg',
    deskripsi: 'Koleksi pribadi seperti seragam, medali, dan benda bersejarah lainnya',
  },
]

export default function Koleksi() {
  const router = useRouter()

  return (
    <section className="bg-[#EFE7DF] text-white ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {koleksiData.map((item) => (
            <div key={item.id} className="bg-white backdrop-blur-sm rounded-lg p-4 w-full shadow-md hover:shadow-lg transition cursor-pointer"  onClick={() => router.push(`/list-koleksi/${item.id}`)}>
              
              <div className="">
                <Image
                  src={item.gambar}
                  alt={`Koleksi ${item.id}`}
                  width={400}
                  height={650}
                  className="rounded-md w-full h-100 object-cover"
                />
              </div>

            
              <p className="text-gray-800 p-6 rounded-lg shadow-md">{item.deskripsi}</p>
            </div>
          ))}
        </div>
        <div
          onClick={() => router.push('/detail-koleksi')}
          className="text-center mt-8 text-black underline cursor-pointer hover:text-gray-300 transition"
        >
          Lihat Koleksi Selengkapnya
        </div>
      </div>
    </section>
  )
}
