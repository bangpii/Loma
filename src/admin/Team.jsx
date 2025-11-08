import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Team = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  // Data dummy untuk contoh
  const dataTable = [
    { 
      id: 1, 
      nama: "Ahmad Rizki", 
      nomorInduk: "202301001", 
      kelas: "TI-2A", 
      jk: "L", 
      jabatan: "Ketua", 
      prodi: "Teknik Informatika" 
    },
    { 
      id: 2, 
      nama: "Siti Aminah", 
      nomorInduk: "202301002", 
      kelas: "SI-2B", 
      jk: "P", 
      jabatan: "Wakil Ketua", 
      prodi: "Sistem Informasi" 
    },
    { 
      id: 3, 
      nama: "Budi Santoso", 
      nomorInduk: "202301003", 
      kelas: "TK-2C", 
      jk: "L", 
      jabatan: "Sekretaris", 
      prodi: "Teknik Komputer" 
    },
    { 
      id: 4, 
      nama: "Maya Sari", 
      nomorInduk: "202301004", 
      kelas: "MI-2A", 
      jk: "P", 
      jabatan: "Bendahara", 
      prodi: "Manajemen Informatika" 
    },
    { 
      id: 5, 
      nama: "Rizky Pratama", 
      nomorInduk: "202301005", 
      kelas: "TI-2B", 
      jk: "L", 
      jabatan: "Koordinator Acara", 
      prodi: "Teknik Informatika" 
    },
    { 
      id: 6, 
      nama: "Dewi Lestari", 
      nomorInduk: "202301006", 
      kelas: "SI-2A", 
      jk: "P", 
      jabatan: "Koordinator Humas", 
      prodi: "Sistem Informasi" 
    },
    { 
      id: 7, 
      nama: "Fajar Nugroho", 
      nomorInduk: "202301007", 
      kelas: "TK-2A", 
      jk: "L", 
      jabatan: "Koordinator PSDM", 
      prodi: "Teknik Komputer" 
    },
    { 
      id: 8, 
      nama: "Gita Wulandari", 
      nomorInduk: "202301008", 
      kelas: "MI-2B", 
      jk: "P", 
      jabatan: "Staff Acara", 
      prodi: "Manajemen Informatika" 
    },
    { 
      id: 9, 
      nama: "Hendra Setiawan", 
      nomorInduk: "202301009", 
      kelas: "TI-2C", 
      jk: "L", 
      jabatan: "Staff Humas", 
      prodi: "Teknik Informatika" 
    },
    { 
      id: 10, 
      nama: "Indra Permana", 
      nomorInduk: "202301010", 
      kelas: "SI-2C", 
      jk: "L", 
      jabatan: "Staff PSDM", 
      prodi: "Sistem Informasi" 
    },
    { 
      id: 11, 
      nama: "Joko Widodo", 
      nomorInduk: "202301011", 
      kelas: "TK-2B", 
      jk: "L", 
      jabatan: "Staff Media", 
      prodi: "Teknik Komputer" 
    },
    { 
      id: 12, 
      nama: "Kartika Sari", 
      nomorInduk: "202301012", 
      kelas: "MI-2C", 
      jk: "P", 
      jabatan: "Staff Kreatif", 
      prodi: "Manajemen Informatika" 
    },
    { 
      id: 13, 
      nama: "Lukman Hakim", 
      nomorInduk: "202301013", 
      kelas: "TI-2D", 
      jk: "L", 
      jabatan: "Staff Dokumentasi", 
      prodi: "Teknik Informatika" 
    },
    { 
      id: 14, 
      nama: "Nina Susanti", 
      nomorInduk: "202301014", 
      kelas: "SI-2D", 
      jk: "P", 
      jabatan: "Staff Logistik", 
      prodi: "Sistem Informasi" 
    },
    { 
      id: 15, 
      nama: "Oscar Pratama", 
      nomorInduk: "202301015", 
      kelas: "TK-2D", 
      jk: "L", 
      jabatan: "Staff Keamanan", 
      prodi: "Teknik Komputer" 
    },
  ]

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
          <span className="text-blue-600 font-semibold">Team</span>
        </div>
        
        {/* Header dengan Tombol Tambah Data - Desktop */}
        <div className="hidden lg:flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 font-poppins">Data Team</h2>
            <p className="text-gray-600 font-poppins mt-1">Kelola data Team organisasi</p>
          </div>
          <button 
            onClick={handleTambahData}
            className="bg-gradient-to-r from-purple-700 to-blue-800  text-white font-semibold font-poppins py-3 px-6 rounded-xl flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <i className="bx bx-plus text-xl"></i>
            <span>Tambah Data</span>
          </button>
        </div>

        {/* Header tanpa Tombol - Mobile */}
        <div className="lg:hidden">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 font-poppins">Data Team</h2>
            <p className="text-gray-600 font-poppins mt-1">Kelola data Team organisasi</p>
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
                    Nama Lengkap
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                    Nomor Induk
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                    Kelas
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                    JK
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                    Jabatan
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                    Prodi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dataTable.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-4 py-3 text-sm text-gray-800 font-poppins">{item.nama}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 font-poppins">{item.nomorInduk}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 font-poppins">{item.kelas}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 font-poppins">{item.jk}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 font-poppins">{item.jabatan}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 font-poppins">{item.prodi}</td>
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
          className="bg-gradient-to-r from-purple-700 to-blue-800  text-white font-semibold font-poppins py-4 px-6 rounded-full flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
                {isEdit ? 'Edit Data Team' : 'Tambah Data Team'}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nama Lengkap */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Nama Lengkap
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                {/* Nomor Induk */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Nomor Induk
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                    placeholder="Masukkan nomor induk"
                  />
                </div>

                {/* Kelas */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Kelas
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                    placeholder="Masukkan kelas"
                  />
                </div>

                {/* Jenis Kelamin */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Jenis Kelamin
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins">
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                  </select>
                </div>

                {/* Jabatan */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Jabatan
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                    placeholder="Masukkan jabatan"
                  />
                </div>

                {/* Prodi */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Prodi
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                    placeholder="Masukkan program studi"
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

export default Team