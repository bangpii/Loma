import React from "react";
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
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #6b21a8 0%, #1e3a8a 100%)", 
        minHeight: "100vh",        
        width: "100%",
        padding: "2rem",           
        boxSizing: "border-box",
      }}
    >
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
          overflow: "hidden"
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
          <div className="flex flex-1 gap-6 mt-4">
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
    </div>
  );
};

export default Admin;