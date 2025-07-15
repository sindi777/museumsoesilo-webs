"use client"

import { useRouter } from 'next/navigation'; // ⬅️ Tambah ini
import Navbar from './componens/navbar';
import View from './componens/view';
import Koleksi from './componens/koleksi';
import Footer from './componens/footer';
import Hero from './componens/Hero';
import Pesan from './componens/Pesan';

export default function Home() {
  const router = useRouter(); // ⬅️ Tambah ini

  return (
    <div className="bg-[#33231A] text-[#1E1E1E] font-sans">
      <Navbar/>
      <Hero/>
      <View/>
      <Koleksi/>
      <Pesan/>
      <Footer/>
    </div>
  );
}
