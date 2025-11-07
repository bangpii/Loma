import React from 'react'

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-700 to-blue-800 rounded-2xl shadow-xl mb-6">
      <div className="flex items-center justify-between px-4 lg:px-8 py-3 lg:py-4">
        
        <div className="flex items-center space-x-3 lg:space-x-4">

          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center border border-white border-opacity-30">
            <img 
              src="/icon.png" 
              alt="Logo HMPS MI" 
              className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
            />
          </div>
          
          {/* Teks */}
          <div>
            <h1 className="text-base lg:text-lg font-bold text-white tracking-wide font-poppins">
              Dashboard HMPS MI
            </h1>
            <p className="text-white text-opacity-80 font-poppins text-xs lg:text-sm">
              Selamat datang, Admin
            </p>
          </div>
        </div>

        {/* Bagian Kanan - Pencarian dan Profile */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          {/* Form Pencarian */}
          <div className="hidden sm:block relative">
            <input
              type="text"
              placeholder="Cari data..."
              className="w-48 lg:w-64 px-4 py-2 pl-10 rounded-xl border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-white bg-opacity-15 backdrop-blur-sm text-white placeholder-white placeholder-opacity-70 font-poppins transition-all duration-300 hover:bg-opacity-20 text-sm"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <i className="bx bx-search text-white text-base"></i>
            </div>
          </div>

          {/* Profile User */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block h-6 w-px bg-white bg-opacity-30"></div>
            <div className="flex items-center space-x-2 lg:space-x-3 bg-white bg-opacity-10 rounded-xl lg:rounded-2xl px-2 lg:px-3 py-1.5 lg:py-2 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 cursor-pointer">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center border border-white border-opacity-30">
                <i className="bx bx-user text-white text-sm lg:text-base"></i>
              </div>
              <div className="hidden lg:block">
                <p className="text-white font-semibold font-poppins text-xs">Admin</p>
                <p className="text-white text-opacity-80 font-poppins text-xs">Super User</p>
              </div>
              <i className="bx bx-chevron-down text-white text-base hidden lg:block"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header