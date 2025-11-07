import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const NavigasiKiri = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const getActiveMenu = () => {
    const path = location.pathname
    if (path === '/admin' || path === '/admin/dashboard') return 'dashboard'
    return path.split('/').pop() || 'dashboard'
  }

  const activeMenu = getActiveMenu()

  const menuItems = [
    { id: 'dashboard', icon: 'bx bx-home', label: 'Dashboard' },
    { id: 'bph', icon: 'bx bx-group', label: 'BPH' },
    { id: 'devisi', icon: 'bx bx-category', label: 'Devisi' },
    { id: 'team', icon: 'bx bx-user-circle', label: 'Team' },
    { id: 'anggota', icon: 'bx bx-user-plus', label: 'Anggota' },
    { id: 'visimisi', icon: 'bx bx-target-lock', label: 'Visi & Misi' },
    { id: 'gallery', icon: 'bx bx-photo-album', label: 'Gallery' },
    { id: 'article', icon: 'bx bx-news', label: 'Article' },
    { id: 'news', icon: 'bx bx-news', label: 'News' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const handleMenuClick = (menuId) => {
    if (menuId === 'dashboard') {
      navigate('/admin/dashboard')
    } else {
      navigate(`/admin/${menuId}`)
    }
    if (window.innerWidth < 1024) {
      setIsMobileOpen(false)
    }
  }

  const handleLogout = () => {
    console.log('Logout clicked')
  }

  return (
    <>
      {/* Overlay Blur - Hanya tampil di mobile ketika navigasi terbuka */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <div className="flex h-full">
        {/* Navigasi Kiri - Full height */}
        <div 
          className={`w-48 lg:w-64 bg-gradient-to-b from-purple-700 to-blue-800 rounded-2xl shadow-xl flex flex-col h-full transition-all duration-300 relative z-50
            ${isMobileOpen ? 'translate-x-0' : '-translate-x-48 lg:translate-x-0'}`}
        >
          {/* Header Navigasi */}
          <div className="p-3 lg:p-6 border-b border-white border-opacity-20 flex-shrink-0">
            <h2 className="text-white font-bold text-base lg:text-lg font-poppins">Main Menu</h2>
            <p className="text-white text-opacity-70 text-xs lg:text-sm font-poppins mt-1">HMPS MI Navigation</p>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-2 lg:py-4 scrollbar-hide">
            <div className="space-y-1 px-2 lg:px-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center space-x-2 lg:space-x-3 px-2 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl transition-all duration-300 font-poppins group ${
                    activeMenu === item.id
                      ? 'bg-white text-purple-700 shadow-lg transform scale-[1.02]'
                      : 'text-white text-opacity-80 hover:bg-white hover:bg-opacity-15 hover:text-white'
                  }`}
                >
                  <i className={`${item.icon} text-sm lg:text-xl ${
                    activeMenu === item.id ? 'text-purple-700' : 'text-white text-opacity-70 group-hover:text-opacity-100'
                  }`}></i>
                  <span className="font-medium text-xs lg:text-sm whitespace-nowrap">{item.label}</span>
                  
                  {activeMenu === item.id && (
                    <div className="ml-auto w-1.5 h-1.5 lg:w-2 lg:h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Logout Button */}
          <div className="p-2 lg:p-4 border-t border-white border-opacity-20 flex-shrink-0">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center space-x-2 lg:space-x-3 px-2 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl text-white text-opacity-80 hover:bg-white hover:bg-opacity-15 hover:text-white transition-all duration-300 font-poppins group"
            >
              <i className="bx bx-log-out text-sm lg:text-xl text-white text-opacity-70 group-hover:text-opacity-100"></i>
              <span className="font-medium text-xs lg:text-sm">Logout</span>
            </button>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className={`lg:hidden w-6 h-12 bg-gradient-to-r from-purple-700 to-blue-800 rounded-r-lg shadow-lg flex items-center justify-center border-l border-white border-opacity-30 transition-all duration-300 self-center z-50 ${
            isMobileOpen ? 'translate-x-0' : '-translate-x-48'
          }`}
        >
          <div className={`transform transition-transform duration-300 ${isMobileOpen ? 'rotate-0' : 'rotate-180'}`}>
            <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        </button>
      </div>
    </>
  )
}

export default NavigasiKiri