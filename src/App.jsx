import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from "./pages/User";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;