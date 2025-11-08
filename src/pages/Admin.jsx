import React, { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../admin/Header";
import NavigasiKiri from "../admin/NavigasiKiri";
import Dashboard from "../admin/Dashboard";
import BPH from "../admin/BPH";
import Devisi from "../admin/Devisi";
import Team from "../admin/Team";
import Anggota from "../admin/Anggota";
import VisiMisi from "../admin/VisiMisi";
import Gallery from "../admin/Gallery";
import Article from "../admin/Article";
import News from "../admin/News";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLogin, setShowLogin] = useState(true)

  const handleLogin = (e) => {
    e.preventDefault()
    // Untuk sementara langsung login, nanti diganti dengan logic database
    setIsLoggedIn(true)
    setShowLogin(false)
  }

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #6b21a8 0%, #1e3a8a 100%)", 
        minHeight: "100vh",        
        width: "100%",
        padding: "2rem",           
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Overlay Blur untuk halaman admin ketika login modal terbuka */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
      )}
      
      {/* 🔹 Area konten utama dengan efek 3D */}
      <div
        style={{
          backgroundColor: "white",
          padding: "1.5rem",
          borderRadius: "16px",
          boxShadow: `
            0 10px 25px -5px rgba(0, 0, 0, 0.3),
            0 8px 10px -6px rgba(0, 0, 0, 0.2),
            inset 0 -2px 4px rgba(255, 255, 255, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.1)
          `,
          minHeight: "93vh",
          transform: "perspective(1000px) rotateX(1deg)",
          transformStyle: "preserve-3d",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          position: "relative",
          overflow: "hidden",
          filter: showLogin ? "blur(5px)" : "none",
          transition: "filter 0.3s ease"
        }}
      >
        {/* Efek cahaya atas */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
            borderRadius: "16px 16px 0 0"
          }}
        />
        
        {/* Konten dengan layout flex untuk full height */}
        <div className="flex flex-col h-full" style={{ position: "relative", zIndex: 1, minHeight: "calc(93vh - 3rem)" }}>
          <Header/>
          <div className="flex flex-1 gap-6">
            {/* Navigasi Kiri - Full height */}
            <div className="flex-shrink-0">
              <NavigasiKiri/>
            </div>
            
            {/* Area Konten Dinamis - Versi Desktop */}
            <div className="hidden lg:block flex-1 bg-white rounded-2xl overflow-auto">
              <Routes>
                <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/bph" element={<BPH />} />
                <Route path="/devisi" element={<Devisi />} />
                <Route path="/team" element={<Team />} />
                <Route path="/anggota" element={<Anggota />} />
                <Route path="/visimisi" element={<VisiMisi />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/article" element={<Article />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>

            {/* Area Konten Dinamis - Versi Mobile (Fixed Position) */}
            <div className="lg:hidden fixed inset-0 bg-white rounded-2xl overflow-auto z-30 ml-0 transition-all duration-300" 
                 style={{ 
                   top: '8rem', 
                   left: '2rem', 
                   right: '2rem', 
                   bottom: '2rem',
                   transform: 'perspective(1000px) rotateX(1deg)'
                 }}>
              <div className="h-full overflow-auto">
                <Routes>
                  <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/bph" element={<BPH />} />
                  <Route path="/devisi" element={<Devisi />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/anggota" element={<Anggota />} />
                  <Route path="/visimisi" element={<VisiMisi />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/article" element={<Article />} />
                  <Route path="/news" element={<News />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>

        {/* Efek bayangan 3D di bagian bawah */}
        <div
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "5%",
            right: "5%",
            height: "20px",
            background: "rgba(0, 0, 0, 0.1)",
            borderRadius: "50%",
            filter: "blur(10px)",
            transform: "translateZ(-10px)"
          }}
        />
      </div>

      {/* Modal Login - Tampil di atas halaman admin yang blur */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          {/* 🔹 Area konten utama dengan efek 3D */}
          <div
            className="w-full max-w-md"
            style={{
              transform: "perspective(1000px) rotateX(2deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 relative overflow-hidden"
              style={{
                boxShadow: `
                  0 20px 40px -10px rgba(0, 0, 0, 0.3),
                  0 15px 25px -5px rgba(0, 0, 0, 0.2),
                  inset 0 -4px 8px rgba(255, 255, 255, 0.5),
                  0 0 0 1px rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              {/* Efek cahaya atas */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
              />

              {/* Logo dan Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg border border-white border-opacity-30">
                  <img 
                    src="/icon.png" 
                    alt="Logo HMPS MI" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h1 className="text-2xl font-bold text-gray-800 font-poppins mb-2">
                  HMPS MI Login
                </h1>
                <p className="text-gray-600 font-poppins text-sm">
                  Masuk ke Dashboard Admin
                </p>
              </div>

              {/* Form Login */}
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Username Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins transition-all duration-200 bg-white shadow-sm"
                      placeholder="Masukkan username"
                      required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <i className="bx bx-user text-gray-400 text-lg"></i>
                    </div>
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins transition-all duration-200 bg-white shadow-sm"
                      placeholder="Masukkan password"
                      required
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <i className="bx bx-lock-alt text-gray-400 text-lg"></i>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-poppins font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <i className="bx bx-log-in text-lg"></i>
                    <span>Masuk</span>
                  </span>
                </button>
              </form>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-gray-500 font-poppins text-xs">
                  &copy; 2025 HMPS MI - Management Informatika
                </p>
              </div>
            </div>

            {/* Efek bayangan 3D di bagian bawah */}
            <div
              className="mx-auto mt-4"
              style={{
                width: '90%',
                height: '20px',
                background: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '50%',
                filter: 'blur(10px)',
                transform: 'translateZ(-10px)'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;