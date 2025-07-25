"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '@/app/componens/Navbar';
import View from '@/app/componens/View';
import Koleksi from '@/app/componens/Koleksi';
import Footer from '@/app/componens/Footer';
import Hero from '@/app/componens/Hero';
import Pesan from '@/app/componens/Pesan';

export default function Home() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="bg-[#FFFFFF] text-[#1E1E1E] font-sans">
      <Navbar/>
      <Hero/>
      <View/>
      <Koleksi/>
      <Pesan/>
      <Footer/>

      {isVisible && (
<button
  onClick={scrollToTop}
  className="fixed bottom-5 right-5 p-3 rounded-full 
             bg-[#d6ccc2]/20 backdrop-blur-md 
             border border-white/30 text-[#33231A] 
             shadow-lg hover:bg-[#33231A]/50 hover:text-white 
             transition duration-300"
>
  ↑
</button>

      )}
    </main>
  );
}
