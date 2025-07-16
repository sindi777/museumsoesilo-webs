import { prisma } from '@/lib/prisma'

export default async function PesanDashboard() {
  const pesanList = await prisma.pesan.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Pesan Pengunjung</h1>
      <ul className="space-y-3">
        {pesanList.map(pesan => (
          <li key={pesan.id} className="bg-white p-4 shadow rounded-md">
            <p className="text-gray-800">{pesan.isi}</p>
            <span className="text-sm text-gray-500">
              {new Date(pesan.createdAt).toLocaleDateString('id-ID')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
