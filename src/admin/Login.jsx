import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { username, password })
    // Tambahkan logic login disini
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(135deg, #6b21a8 0%, #1e3a8a 100%)",
      }}
    >
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
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              &copy; 2024 HMPS MI - Management Informatika
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
  )
}

export default Login