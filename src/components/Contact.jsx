import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    nomor: '',
    pesan: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    

    const message = `Halo, saya ${formData.nama}%0A%0A` +
                   `Email: ${formData.email}%0A` +
                   `Nomor HP: ${formData.nomor}%0A%0A` +
                   `Pesan:%0A${formData.pesan}`
    

    window.open(`https://wa.me/?text=${message}`, '_blank')

    setFormData({
      nama: '',
      email: '',
      nomor: '',
      pesan: ''
    })
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Hubungi Kami
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mari berkolaborasi! Hubungi kami untuk informasi lebih lanjut
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h2>
              <p className="text-gray-600 mb-8">
                Jangan ragu untuk menghubungi kami melalui informasi di bawah ini atau dengan mengisi form kontak.
              </p>
            </div>

 
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="bx bx-user text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Nama Lengkap</h3>
                  <p className="text-gray-600">Tim HMPS MI</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="bx bx-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">hmpsmi@example.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="bx bx-phone text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Nomor Telepon</h3>
                  <p className="text-gray-600">+62 812 3456 7890</p>
                </div>
              </div>
            </div>


            <div className="pt-6">
              <h3 className="font-semibold text-gray-800 mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  <i className="bx bxl-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  <i className="bx bxl-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  <i className="bx bxl-twitter text-xl"></i>
                </a>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>


              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                  placeholder="nama@email.com"
                />
              </div>


              <div>
                <label htmlFor="nomor" className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Handphone *
                </label>
                <input
                  type="tel"
                  id="nomor"
                  name="nomor"
                  value={formData.nomor}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                  placeholder="+62 812 3456 7890"
                />
              </div>

              <div>
                <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300 resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>


              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center justify-center">
                  <span>Kirim via WhatsApp</span>
                  <i className="bx bxl-whatsapp ml-2 text-xl"></i>
                </div>
              </button>
            </form>
          </div>
        </div>

        <footer className="relative z-10 bg-white border-t border-gray-200 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-6">

              <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-t from-white/10 to-transparent rounded-t-3xl"></div>

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

export default Contact