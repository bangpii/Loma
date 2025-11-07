import React, { useState } from 'react'

const galery = [
  {
    contents: [
      "/galery/01.jpg",
      "/galery/02.jpg",
      "/galery/03.jpg",
      "/galery/04.jpg",
      "/galery/05.jpg",
      "/galery/06.jpg",
      "/galery/07.jpg",
      "/galery/08.jpg",
      "/galery/09.jpg",
      "/galery/10.jpg",
      "/galery/11.jpg",
      "/galery/04.jpg",
      "/galery/05.jpg",
    ]
  }
]

export const Galery = () => {
  const [visibleItems, setVisibleItems] = useState(8)
  const itemsPerPage = 4
  const images = galery[0].contents;

  const loadMore = () => {
    setVisibleItems(prev => prev + itemsPerPage)
  }

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Koleksi momen berharga yang menginspirasi dan memotivasi
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.slice(0, visibleItems).map((image, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              onClick={() => viewImage(index)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                
              </div>
            </div>
          ))}
        </div>

          {/* Load More Button - Hanya tampil jika masih ada item */}
          {visibleItems < galery[0].contents.length && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMore}
              className="bg-white border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/25"
            >
              Lihat Lebih Banyak ({galery[0].contents.length - visibleItems})
            </button>
          </div>
        )}

           {/* Footer - Tampil setelah semua konten */}
           <footer className="relative z-10 bg-white border-t border-gray-200 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-6">
              {/* 🔸 Efek transisi halus ke footer */}
              <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-t from-white/10 to-transparent rounded-t-3xl"></div>

              {/* 🔸 Ikon Sosial Media */}
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

              {/* 🔸 Copyright */}
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