import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend)

const jumlahIndex = [
  { id: 'bph', icon: 'bx bx-group', label: 'BPH', jumlah: 12, color: 'from-purple-500 to-purple-700' },
  { id: 'devisi', icon: 'bx bx-category', label: 'Devisi', jumlah: 8, color: 'from-blue-500 to-blue-700' },
  { id: 'team', icon: 'bx bx-user-circle', label: 'Team', jumlah: 6, color: 'from-green-500 to-green-700' },
  { id: 'anggota', icon: 'bx bx-user-plus', label: 'Anggota', jumlah: 45, color: 'from-orange-500 to-orange-700' },
  { id: 'visimisi', icon: 'bx bx-target-lock', label: 'Visi & Misi', jumlah: 1, color: 'from-red-500 to-red-700' },
  { id: 'gallery', icon: 'bx bx-photo-album', label: 'Gallery', jumlah: 23, color: 'from-indigo-500 to-indigo-700' },
  { id: 'article', icon: 'bx bx-news', label: 'Article', jumlah: 15, color: 'from-teal-500 to-teal-700' },
  { id: 'news', icon: 'bx bx-news', label: 'News', jumlah: 9, color: 'from-pink-500 to-pink-700' },
]

const dataTable = [
  { id: 1, nama: 'Ahmad Rizki', jabatan: 'Ketua BPH', prodi: 'Informatika' },
  { id: 2, nama: 'Siti Aminah', jabatan: 'Wakil Ketua', prodi: 'Informatika' },
  { id: 3, nama: 'Budi Santoso', jabatan: 'Sekretaris', prodi: 'Informatika' },
  { id: 4, nama: 'Maya Sari', jabatan: 'Bendahara', prodi: 'Informatika' },
  { id: 5, nama: 'Rizki Pratama', jabatan: 'Koordinator Dev', prodi: 'Informatika' },
]

const Dashboard = () => {
  // Data untuk chart
  const chartData = {
    labels: ['BPH', 'Devisi', 'Anggota'],
    datasets: [
      {
        data: [12, 8, 45],
        backgroundColor: [
          'rgba(147, 51, 234, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(249, 115, 22, 0.8)',
        ],
        borderColor: [
          'rgba(147, 51, 234, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(249, 115, 22, 1)',
        ],
        borderWidth: 2,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: 'Poppins',
          },
        },
      },
    },
  }

  return (
    <div className="p-6 space-y-6">
      {/* Jumlah Index Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {jumlahIndex.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-poppins font-medium">{item.label}</p>
                <p className="text-2xl font-bold text-gray-800 font-poppins mt-1">{item.jumlah}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                <i className={`${item.icon} text-white text-lg`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table dan Grafik */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
     {/* Table - Sebelah Kiri */}
<div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
  <h3 className="text-lg font-bold text-gray-800 font-poppins mb-4">Data Pengurus</h3>
  <div className="overflow-x-auto">
    <div className="max-h-80 overflow-y-auto scrollbar-hide"> {/* Tambahkan div wrapper ini */}
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins border-b sticky top-0 bg-gray-50 z-10">
              Nama Lengkap
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
              <td className="px-4 py-3 text-sm text-gray-600 font-poppins">{item.jabatan}</td>
              <td className="px-4 py-3 text-sm text-gray-600 font-poppins">{item.prodi}</td>
              <td className="px-4 py-3 text-sm">
                <div className="flex space-x-2">
                  <button className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors duration-200">
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

        {/* Grafik Bulat - Sebelah Kanan */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 font-poppins mb-4">
            Jumlah BPH + Devisi + Anggota
          </h3>
          <div className="flex justify-center">
            <div className="w-64 h-64">
              <Doughnut data={chartData} options={chartOptions} />
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600 text-sm font-poppins">
              Total: <span className="font-bold text-purple-600">65</span> Orang
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard