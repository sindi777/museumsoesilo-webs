'use client'

import { useEffect, useRef } from 'react'
import { Viewer } from '@photo-sphere-viewer/core'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'

export default function PanoramaViewer() {
  const viewerRef = useRef(null)

  useEffect(() => {
    if (!viewerRef.current) return

    const viewer = new Viewer({
      container: viewerRef.current,
      panorama: '/360/gambar360.jpg',
      defaultYaw: 0,
      loadingImg: '/logo.png',
      navbar: [
        'zoom',
        'fullscreen'
      ],
    })

    return () => viewer.destroy()
  }, [])

  return (
    <section className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-screen">
      <div
        ref={viewerRef}
        className="relative w-full h-full overflow-visible"
      />
    </section>
  )
}
