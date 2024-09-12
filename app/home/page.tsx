import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        background: 'radial-gradient(circle at 50% bottom, #600160, #1a001a, #0d000d)'
      }}
    >
      <h1 className="text-7xl font-bold text-center mb-4 text-white">
        Bring Your <span className="text-[#C43CCB]">Voice</span> to Life!
      </h1>
      <p className="text-xl text-center mb-1 text-white">
        Transform your conversation into smart AI solutions in seconds.
      </p>
       {/* Page Break */}
       <div className="page-break"></div>
        <p className="text-xl text-center mb-6 text-white">
        seconds. No technical skills required.
        </p>
      <Link 
        href="/phone" 
        className="flex items-center justify-center bg-[#2B243C] text-white px-6 py-3 rounded-full opacity-80 text-base cursor-pointer transition-colors duration-300 hover:bg-[#6b239e]"
        >
        <img src="/phone 2.svg" alt="Phone Icon" className="mr-2 w-6 h-6" />
        Let’s try Call Voice
      </Link>
      {/* Tambahkan gambar PNG di bagian bawah */}
      <img 
        src="/home.png" 
        alt="Footer Image" 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1300px] h-auto ml-20"
      />
    </div>
  );
}