'use client'

import { useEffect, useRef, useState } from 'react'
import { Viewer } from '@photo-sphere-viewer/core'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'

export default function PanoramaViewer() {
  const containerRef = useRef(null) 
  const viewerRef = useRef(null)
  const [viewer, setViewer] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    '/panorama1.jpg',
    '/panorama2.jpg',
    '/panorama3.jpg',
  ]

  const descriptions = [
    'Halaman Depan Museum',
    'Ruangan Utama',
    'Ruangan Koleksi',
  ]

  useEffect(() => {
    if (!viewerRef.current) return

    const instance = new Viewer({
      container: viewerRef.current,
      panorama: images[currentIndex],
      defaultYaw: 0,
      defaultFov: 120,
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
    <section
      ref={containerRef}
      className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-screen overflow-hidden"
    >
      {/* Viewer Container */}
      <div
        ref={viewerRef}
        className="absolute inset-0 z-0"
      />

      {/* Overlay gradasi atas */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent z-10 pointer-events-none" />

      {/* Judul Panorama */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
        <h2 className="text-white text-2xl md:text-4xl font-bold bg-white/10 backdrop-blur px-6 py-2 rounded-full shadow-md">
          {descriptions[currentIndex]}
        </h2>
      </div>

      {/* Tombol Navigasi */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <button
          onClick={prevPanorama}
          className="bg-white/20 text-white px-6 py-2 rounded-full shadow hover:bg-white/40 backdrop-blur transition"
        >
          Sebelumnya
        </button>
        <button
          onClick={nextPanorama}
          className="bg-white/20 text-white px-6 py-2 rounded-full shadow hover:bg-white/40 backdrop-blur transition"
        >
          Selanjutnya
        </button>
      </div>
    </section>
  )
}
