// 'use client'

// import Image from 'next/image'
// import { useRouter } from 'next/navigation'

// export default function VirtualCollectionClient({ koleksi }) {
//   const router = useRouter()

//   return (
//     <section className="row min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-12 pt-20">
//       <h1 className="text-2xl font-bold mb-8">Koleksi Museum</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {koleksi.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white border rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
//             onClick={() => router.push(`/list-koleksi/${item.id}`)}
//           >
//             <div className="p-4 flex justify-center items-center">
//               <Image
//                 src={item.gambar}
//                 alt={item.nama}
//                 width={200}
//                 height={200}
//                 className="object-contain h-48"
//               />
//             </div>
//             <div className="px-4 pb-4">
//               <h2 className="text-md font-semibold text-[#003B73]">
//                 {item.nama}
//               </h2>
//               <p className="text-sm text-gray-700 mb-3 line-clamp-3">
//                 {item.deskripsi}
//               </p>
//               <a href="#" className="text-blue-600 text-sm hover:underline">
//                 Baca selengkapnya
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function VirtualCollectionClient({ koleksi }) {
  const router = useRouter()

  return (
    <section className="row min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-12 pt-20">
      <h1 className="text-2xl font-bold mb-8">Koleksi Museum</h1>

      {koleksi.length === 0 ? (
        <p className="text-gray-500 text-center col-span-full">
          Belum ada koleksi yang tersedia.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {koleksi.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
              onClick={() => router.push(`/list-koleksi/${item.id}`)}
            >
              <div className="p-4 flex justify-center items-center">
                <Image
                  src={item.gambar}
                  alt={item.nama}
                  width={200}
                  height={200}
                  className="object-contain h-48"
                />
              </div>
              <div className="px-4 pb-4">
                <h2 className="text-md font-semibold text-[#003B73]">
                  {item.nama}
                </h2>
                <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                  {item.deskripsi}
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Baca selengkapnya
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
