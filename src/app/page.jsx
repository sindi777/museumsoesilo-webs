"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from './componens/navbar';
import View from './componens/view';
import Koleksi from './componens/koleksi';
import Footer from './componens/footer';
import Hero from './componens/Hero';
import Pesan from './componens/Pesan';

export default function Home() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  // ⬇️ Show button when page is scrolled down
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

  // ⬇️ Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-[#33231A] text-[#1E1E1E] font-sans">
      <Navbar/>
      <Hero/>
      <View/>
      <Koleksi/>
      <Pesan/>
      <Footer/>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-[#EFE7DF] text-[#33231A] shadow-lg hover:bg-[#d6ccc2] transition duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
}
