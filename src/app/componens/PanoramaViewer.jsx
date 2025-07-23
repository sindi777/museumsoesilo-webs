'use client'

import { useEffect, useRef, useState } from 'react'
import { Viewer } from '@photo-sphere-viewer/core'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'

export default function PanoramaViewer() {
  const viewerRef = useRef(null)
  const [viewer, setViewer] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    '/panorama1.jpg',
    '/panorama2.jpg',
    '/panorama3.jpg',
  ]

  const descriptions = [
    'Halaman Depan',
    'Ruangan Utama',
    'Ruangan Koleksi',
  ]

  useEffect(() => {
    if (!viewerRef.current) return

    const instance = new Viewer({
      container: viewerRef.current,
      panorama: images[currentIndex],
      defaultYaw: 0,
      defaultFov: 90,
      loadingImg: '/logo2.png',
      navbar: ['zoom', 'fullscreen'],
    })

    setViewer(instance)

    return () => {
      instance.destroy()
    }
  }, [currentIndex])

  const nextPanorama = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevPanorama = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <section className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-screen relative">
      <div
        ref={viewerRef}
        className="relative w-full h-full overflow-visible"
      />

      {/* Judul Deskripsi */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-center z-50">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold px-6 py-2 rounded-lg drop-shadow-lg">
          {descriptions[currentIndex]}
        </h2>
      </div>

      {/* Tombol navigasi kiri-kanan */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button
          onClick={prevPanorama}
          className="bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-70"
        >
          Sebelumnya
        </button>
        <button
          onClick={nextPanorama}
          className="bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-70"
        >
          Selanjutnya
        </button>
      </div>
    </section>
  )
}
