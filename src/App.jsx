import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman user jadi default */}
        <Route path="/" element={<Admin />} />
        
        {/* Rute spesifik user (kalau punya sub-page, tambahkan * di akhir) */}
        <Route path="/user/*" element={<User />} />

        {/* Rute admin dengan semua sub-rute */}
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
