"use client";
import React from "react";

const AiPhone = () => {
  return (
    <div
      className="flex items-center justify-between min-h-screen px-20 bg-[radial-gradient(circle_at_69%_center,#400040,#1a001a,#0d000d)] relative overflow-hidden"
      style={{
        // Pseudo-element for animation
        position: 'relative',
      }}
    >
      <div
        className="absolute top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(128, 0, 128, 0.5), transparent 70%)',
          animation: 'pulse 2s infinite',
        }}
      />

      <div
        className="form-container z-10 max-w-[400px] w-full absolute right-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out">
        <form className="space-y-4">
          <div>
            <label htmlFor="nik" className="font-inter text-white mb-1 block">NIK</label>
            <input
              type="text"
              id="nik"
              placeholder="Input NIK..."
              className="font-inter w-full p-3 mb-6 border-none rounded-lg bg-[rgba(255,255,255,0.2)] text-white"
            />
          </div>
          <div>
            <label htmlFor="name" className="font-inter text-gray-300 mb-1 block">Nama Lengkap</label>
            <input
              type="text"
              id="name"
              placeholder="Input Nama Lengkap..."
              className="font-inter w-full p-3 mb-6 border-none rounded-lg bg-[rgba(255,255,255,0.2)] text-white"
            />
          </div>
          <div className="flex justify-end w-full">
          <button
            type="submit"
            className="font-inter py-3 px-10 mt-4 bg-[#28a745] text-white rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#218838]"
          >
            Start Call
          </button>
          </div>
        </form>
      </div>

      <div
        className="call-buttons flex justify-center gap-5 absolute bottom-5 left-[70%] transform -translate-x-1/2 transition-transform duration-300 z-20"
      >
        <button className="call-button flex items-center justify-center bg-transparent rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.1)]">
          <img src="/pause.svg" alt="Pause" className="w-20 h-20 fill-current" />
        </button>
        <button className="call-button flex items-center justify-center bg-transparent rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.1)]">
          <img src="/phone.svg" alt="Phone" className="w-20 h-20 fill-current" />
        </button>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.95);
            opacity: 0.7;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.95);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default AiPhone;