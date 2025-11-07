import React from "react";
import Header from "../admin/Header";
import NavigasiKiri from "../admin/NavigasiKiri";

const Admin = ({ children }) => {
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
          <div className="flex flex-1 gap-6">
            {/* Navigasi Kiri - Full height */}
            <div className="flex-shrink-0">
              <NavigasiKiri/>
            </div>
            
            {/* Area Konten Dinamis - Full height */}
            <div className="flex-1 bg-gray-50 rounded-2xl p-6 overflow-y-auto">
              {children}
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