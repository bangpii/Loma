import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const visi_misi = [
  {
    contents: [
      {
        title: "Visi",
        desk: "Menjadikan HMPS MI sebagai organisasi yang berkomitmen untuk mengembangkan potensi setiap bidang, menciptakan suasana inklusif yang mempererat hubungan antara mahasiswa/i, memperluas cakupan eksternal melalui bidang non-informatika sebagai bisnis usaha faktor utamanya, serta mengoptimalkan peran mahasiswa/i untuk berkontribusi aktif dalam mencapai tujuan bersama dan prestasi yang membanggakan"
      },
      {
        title: "Misi",
        desk: [ 
          "Membangun program-program pengembangan diri bagi mahasiswa/i dalam berbagai bidang, baik di dalam maupun di luar lingkup prodi, sehingga setiap mahasiswa/i memiliki kesempatan untuk memaksimalkan keterampilan, potensi, dan kontribusi mereka guna mencapai tujuan bersama HMPS MI",
          "Meningkatkan kesadaran dan pemahaman seluruh mahasiswa/i mengenai pentingnya peran HMPS dalam mendukung prestasi akademik dan non-akademik melalui sosialisasi yang efektif", 
          "Memanfaatkan platform komunikasi yang efektif bagi mahasiswa/i aktif Program Studi untuk berbagai masukkan, ide, dan umpan balik terkait pengembangan HMPS, platform ini akan memastikan keterlibatan mahasiswa/i dalam menanggapi hal yang terjadi pada lingkungan sekitar pembelajaran mereka",
        ],
      },
      {
        title: "Strategi",
        desk: [
          "Mengumpulkan data prioritas mahasiswa", 
          "Menyusun agenda kegiatan", 
          "Pengembangan keterampilan melalui ahli"
        ],
      }
    ],
  }
]

const menu_devisi = [
  { id: 1, title: "Internal", item: "/visimisi/internal.png" },
  { id: 2, title: "Eksternal", item: "/visimisi/eksternal.png" },
  { id: 3, title: "IPTEK", item: "/visimisi/iptek.png" },
  { id: 4, title: "PSDM", item: "/visimisi/sdm.png" },
  { id: 5, title: "Business", item: "/visimisi/businessdevelop.png" },
]

const visi_devisi = [
  {
    id: 1,
    title: "Internal",
    visi: "Menjadikan Divisi Internal yang solid, efesien, dan inovatif, dengat tata kelola yang baik, sehingga mampu mendukung tercapainya tujuan organisasi secara optimal",
    strategi: [
      "Mengadakan kegiatan sosialisasi dan Team Building",
      "Menyusun program kerja yang jelas dan terstruktur",
    ],
    gambar: "/visimisi/internal.png",
  },
  {
    id: 2,
    title: "Eksternal",
    visi: "Menjadikan Divisi eksternal yang dinamis, profosional dan terhubung baik dengan pihak luar, untuk memperluas peluang kerjasama yang mendukung perkmbangan mahasiswa/i",
    strategi: [
      "Menjalin kemitraan dengan berbagai instansi dan organisasi",
      "Meningkatkan keterlibatan mahasiswa/i dalam kegiatan eksternal",
    ],
    gambar: "/visimisi/eksternal.png",
  },
  {
    id: 3,
    title: "IPTEK",
    visi: "Menjadi devisi yang mampu menghasilkan konten kreatif dan inovatif di bidang ilmu pengetahuan dan teknologi, yang menginspirasi dan memberikan nilai tambah bagi mahasiswa/i",
    strategi: [
      "Mengoganisir webinar dan seminar dengan narasumber proposional",
      "Menyelenggarakkan pelatihan teknologi",
    ],
    gambar: "/visimisi/iptek.png",
  },
  {
    id: 4,
    title: "PSDM",
    visi: "Menjadi pusat inovasi dalam pengembangan program yang relavan dan berdampak, guna mengoptimalkan potnsi setiap mahasiswa/i",
    strategi: [
      "Meningkatkan kualitas pengurus dan panitia",
      "Mengoptimalkan Komunikasi dan Promosi Program",
    ],
    gambar: "/visimisi/sdm.png",
  },
  {
    id: 5,
    title: "Business Development",
    visi: "Menjadi devisi Business Development sebagai penggerak utama kewirausahaan mahasiswa/i di luar bidang informatika, mendukung peningkatan usaha mereka melalui promosi dan penjualan, serta menciptakan peluang produk baru bagi mahasiswa/i",
    strategi: [
      "Memfalitasi promosi dan pemasaran",
      "Menjalin kerjasama bisnis dengan mahasiswa/i",
      "Pengembangan produk sendiri",
    ],
    gambar: "/visimisi/businessdevelop.png"
  },
]

const VisiMisi = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [activeTable, setActiveTable] = useState('visiMisi')

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
          <span className="text-blue-600 font-semibold">Visi & Misi</span>
        </div>
        
        {/* Header dengan Tombol Tambah Data - Desktop */}
        <div className="hidden lg:flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 font-poppins">Data Visi & Misi</h2>
            <p className="text-gray-600 font-poppins mt-1">Kelola data Visi & Misi organisasi</p>
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
            <h2 className="text-3xl font-bold text-gray-800 font-poppins">Data Visi & Misi</h2>
            <p className="text-gray-600 font-poppins mt-1">Kelola data Visi & Misi organisasi</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTable('visiMisi')}
            className={`px-4 py-2 rounded-lg font-poppins font-medium transition-all duration-200 ${
              activeTable === 'visiMisi' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Visi & Misi
          </button>
          <button
            onClick={() => setActiveTable('menuDevisi')}
            className={`px-4 py-2 rounded-lg font-poppins font-medium transition-all duration-200 ${
              activeTable === 'menuDevisi' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Menu Devisi
          </button>
          <button
            onClick={() => setActiveTable('visiDevisi')}
            className={`px-4 py-2 rounded-lg font-poppins font-medium transition-all duration-200 ${
              activeTable === 'visiDevisi' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Visi Devisi
          </button>
        </div>

        {/* Table Visi & Misi */}
        {activeTable === 'visiMisi' && (
          <div className="overflow-x-auto">
            <div className="max-h-[400px] overflow-y-auto scrollbar-hide">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                      Title
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                      Deskripsi
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {visi_misi[0].contents.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-4 py-3 text-sm text-gray-800 font-poppins">{item.title}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 font-poppins">
                        {Array.isArray(item.desk) ? (
                          <ul className="list-disc list-inside space-y-1">
                            {item.desk.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          item.desk
                        )}
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
        )}

        {/* Table Menu Devisi */}
        {activeTable === 'menuDevisi' && (
          <div className="overflow-x-auto">
            <div className="max-h-[400px] overflow-y-auto scrollbar-hide">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                      Title
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
                  {menu_devisi.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-4 py-3 text-sm text-gray-800 font-poppins">{item.title}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 font-poppins">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <img src={item.item} alt={item.title} className="w-8 h-8 object-contain" />
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
        )}

        {/* Table Visi Devisi */}
        {activeTable === 'visiDevisi' && (
          <div className="overflow-x-auto">
            <div className="max-h-[400px] overflow-y-auto scrollbar-hide">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                      Title
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                      Visi
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
                      Strategi
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
                  {visi_devisi.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-4 py-3 text-sm text-gray-800 font-poppins">{item.title}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 font-poppins">{item.visi}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 font-poppins">
                        <ul className="list-disc list-inside space-y-1">
                          {item.strategi.map((strategy, index) => (
                            <li key={index}>{strategy}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 font-poppins">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <img src={item.gambar} alt={item.title} className="w-8 h-8 object-contain" />
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
        )}
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
                {isEdit ? 'Edit Data' : 'Tambah Data'} {activeTable === 'visiMisi' ? 'Visi & Misi' : activeTable === 'menuDevisi' ? 'Menu Devisi' : 'Visi Devisi'}
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                    Title
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                    placeholder="Masukkan title"
                  />
                </div>

                {activeTable === 'visiMisi' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                      Deskripsi
                    </label>
                    <textarea 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                      placeholder="Masukkan deskripsi"
                      rows="4"
                    />
                  </div>
                )}

                {activeTable === 'visiDevisi' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                        Visi
                      </label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                        placeholder="Masukkan visi"
                        rows="3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                        Strategi
                      </label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                        placeholder="Masukkan strategi (pisahkan dengan enter)"
                        rows="4"
                      />
                    </div>
                  </>
                )}

                {(activeTable === 'menuDevisi' || activeTable === 'visiDevisi') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-poppins mb-2">
                      Gambar
                    </label>
                    <input 
                      type="file" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                    />
                  </div>
                )}
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

export default VisiMisi