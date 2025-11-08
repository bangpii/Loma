import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const galleryData = [
  { 
    id: 1,
    title: "Foto 1",
    tanggal: "2024-01-15 10:30:00",
    gambar: "/galery/01.jpg"
  },
  { 
    id: 2,
    title: "Foto 2", 
    tanggal: "2024-01-16 14:20:00",
    gambar: "/galery/02.jpg"
  },
  { 
    id: 3,
    title: "Foto 3",
    tanggal: "2024-01-17 09:15:00", 
    gambar: "/galery/03.jpg"
  },
  { 
    id: 4,
    title: "Foto 4",
    tanggal: "2024-01-18 16:45:00",
    gambar: "/galery/04.jpg"
  },
  { 
    id: 5,
    title: "Foto 5",
    tanggal: "2024-01-19 11:00:00",
    gambar: "/galery/05.jpg"
  },
  { 
    id: 6,
    title: "Foto 6",
    tanggal: "2024-01-20 13:30:00",
    gambar: "/galery/06.jpg"
  },
  { 
    id: 7,
    title: "Foto 7",
    tanggal: "2024-01-21 15:20:00",
    gambar: "/galery/07.jpg"
  },
  { 
    id: 8,
    title: "Foto 8",
    tanggal: "2024-01-22 08:45:00",
    gambar: "/galery/08.jpg"
  },
  { 
    id: 9,
    title: "Foto 9",
    tanggal: "2024-01-23 12:10:00",
    gambar: "/galery/09.jpg"
  },
  { 
    id: 10,
    title: "Foto 10",
    tanggal: "2024-01-24 17:30:00",
    gambar: "/galery/10.jpg"
  },
  { 
    id: 11,
    title: "Foto 11",
    tanggal: "2024-01-25 14:00:00",
    gambar: "/galery/11.jpg"
  }
]

const Gallery = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const handleHomeClick = () => {
    navigate('/admin/dashboard')
  }

  const handleTambahData = () => {
    setIsEdit(false)
    setShowModal(true)
  }

  const handleEditData = () => {
    setIsEdit(true)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="space-y-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 font-poppins">
          <span 
            onClick={handleHomeClick}
            className="hover:text-blue-600 cursor-pointer transition-colors duration-200"
          >
            Home
          </span>
          <i className="bx bx-chevron-right text-xs"></i>
          <span className="text-blue-600 font-semibold">Gallery</span>
        </div>
        
        {/* Header dengan Tombol Tambah Data - Desktop */}
        <div className="hidden lg:flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 font-poppins">Data Gallery</h2>
            <p className="text-gray-600 font-poppins mt-1">Kelola data Gallery organisasi</p>
          </div>
          <button 
            onClick={handleTambahData}
            className="bg-gradient-to-r from-purple-700 to-blue-800 text-white font-semibold font-poppins py-3 px-6 rounded-xl flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <i className="bx bx-plus text-xl"></i>
            <span>Tambah Data</span>
          </button>
        </div>

        {/* Header tanpa Tombol - Mobile */}
        <div className="lg:hidden">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 font-poppins">Data Gallery</h2>
            <p className="text-gray-600 font-poppins mt-1">Kelola data Gallery organisasi</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <div className="overflow-x-auto">
          <div className="max-h-[500px] overflow-y-auto scrollbar-hide">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                    Title
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                    Tgl/Waktu
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                    Gambar
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {galleryData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-4 py-3 text-sm text-gray-800 font-poppins">{item.title}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 font-poppins">{item.tanggal}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 font-poppins">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                        <img 
                          src={item.gambar} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex space-x-2">
                        <button 
                          onClick={handleEditData}
                          className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
                        >
                          <i className="bx bx-edit text-sm"></i>
                        </button>
                        <button className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center hover:bg-red-200 transition-colors duration-200">
                          <i className="bx bx-trash text-sm"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Tombol Tambah Data - Mobile Only */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button 
          onClick={handleTambahData}
          className="bg-gradient-to-r from-purple-700 to-blue-800 text-white font-semibold font-poppins py-4 px-6 rounded-full flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <i className="bx bx-plus text-2xl"></i>
        </button>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 font-poppins">
                {isEdit ? 'Edit Data Gallery' : 'Tambah Data Gallery'}
              </h3>
              <button 
                onClick={handleCloseModal}
                className="w-8 h-8 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              >
                <i className="bx bx-x text-lg"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Title
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                    placeholder="Masukkan title foto"
                  />
                </div>

                {/* Tanggal/Waktu */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Tanggal & Waktu
                  </label>
                  <input 
                    type="datetime-local" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                  />
                </div>

                {/* Gambar */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Gambar
                  </label>
                  <input 
                    type="file" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
              <button 
                onClick={handleCloseModal}
                className="px-4 py-2 text-gray-600 font-poppins font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Batal
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white font-poppins font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                {isEdit ? 'Update Data' : 'Simpan Data'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery