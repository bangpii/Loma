import React, { useState } from 'react'

const news = [
  {
    contents: [
      "/news/01.jpg",
      "/news/02.jpg",
      "/news/03.jpg",
      "/news/04.jpg",
      "/news/05.jpg",
      "/news/06.jpg",
      "/news/07.jpg",
      "/news/08.jpg",
      "/news/09.jpg",
      "/news/10.jpg",
      "/news/11.jpg",
      "/news/12.jpg",
      "/news/13.jpg",
    ]
  }
]

const News = () => {
  const [visibleItems, setVisibleItems] = useState(8)
  const itemsPerPage = 4

  const loadMore = () => {
    setVisibleItems(prev => prev + itemsPerPage)
  }

  const viewDetail = (index) => {
    // Redirect ke Instagram
    window.open('https://instagram.com', '_blank')
  }

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Berita & Kegiatan
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dokumentasi kegiatan dan berita terbaru dari HMPS MI
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news[0].contents.slice(0, visibleItems).map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item}
                  alt={`News ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                    Berita
                  </span>
                  <span className="text-xs text-gray-500">
                    {index + 1} / {news[0].contents.length}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  Kegiatan HMPS MI #{index + 1}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  Dokumentasi kegiatan terbaru dari organisasi HMPS MI
                </p>

                {/* Read More Button */}
                <button 
                  onClick={() => viewDetail(index)}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Lihat Detail
                </button>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-1 right-1 text-white text-xs">
                  <i className="bx bx-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button - Hanya tampil jika masih ada item */}
        {visibleItems < news[0].contents.length && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMore}
              className="bg-white border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/25"
            >
              Lihat Lebih Banyak ({news[0].contents.length - visibleItems})
            </button>
          </div>
        )}

        {/* Footer - Tampil setelah semua konten */}
        <footer className="relative z-10 bg-white border-t border-gray-200 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-6">
              {/* Efek transisi halus ke footer */}
              <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-t from-white/10 to-transparent rounded-t-3xl"></div>

              {/* Ikon Sosial Media */}
              <div className="flex gap-6 relative z-10">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#232323] hover:bg-[#232323] hover:text-white transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
                >
                  <i className="bx bxl-instagram text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#232323] hover:bg-[#232323] hover:text-white transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
                >
                  <i className="bx bxl-facebook text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#232323] hover:bg-[#232323] hover:text-white transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
                >
                  <i className="bx bx-mail-send text-2xl"></i>
                </a>
              </div>

              {/* Copyright */}
              <p className="text-black text-sm mt-2 flex items-center gap-2 relative z-10">
                <span>Created by <b>HMPS MI .</b> |  <i className="bx bx-copyright text-base"></i> 2025</span>
              </p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default News