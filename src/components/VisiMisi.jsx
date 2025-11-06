import React, { useState, useEffect } from 'react'

const VisiMisi = () => {
    const [selectedContent, setSelectedContent] = useState(null)

    // Auto scroll ke atas ketika modal terbuka
    useEffect(() => {
        if (selectedContent) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [selectedContent]);

    // 🔹 Data card anggota (bisa ditambah lewat CMS nanti)
    const visi = [
      { desk: "Menjadikan HMPS MI sebagai organisasi yang berkomitmen untuk mengembangkan potensi setiap bidang, menciptakan suasana inklusif yang mempererat hubungan antara mahasiswa/i, memperluas cakupan eksternal melalui bidang non-informatika sebagai bisnis usaha faktor utamanya, serta mengoptimalkan peran mahasiswa/i untuk berkontribusi aktif dalam mencapai tujuan bersama dan prestasi yang membanggakan" },
    ];

    const misi = [
      { desk: "Membangun program-program pengembangan diri bagi mahasiswa/i dalam berbagai bidang, baik di dalam maupun di luar lingkup prodi, sehingga setiap mahasiswa/i memiliki kesempatan untuk memaksimalkan keterampilan, potensi, dan kontribusi mereka guna mencapai tujuan bersama HMPS MI" },
      { desk: "Meningkatkan kesadaran dan pemahaman seluruh mahasiswa/i mengenai pentingnya peran HMPS dalam mendukung prestasi akademik dan non-akademik melalui sosialisasi yang efektif" },
      { desk: "Memanfaatkan platform komunikasi yang efektif bagi mahasiswa/i aktif Program Studi untuk berbagai masukkan, ide, dan umpan balik terkait pengembangan HMPS, platform ini akan memastikan keterlibatan mahasiswa/i dalam menanggapi hal yang terjadi pada lingkungan sekitar pembelajaran mereka" },
    ];

    const strategi_misi = [
      {
        title: "Strategi Misi 1",
        items: [
          "Mengumpulkan data prioritas mahasiswa", 
          "Menyusun agenda kegiatan", 
          "Pengembangan keterampilan melalui ahli"
        ]
      },
      {
        title: "Strategi Misi 2", 
        items: [
          "Gerakan Informatif",
          "Keterlibatan anggota"
        ]
      },
      {
        title: "Strategi Misi 3",
        items: [
          "Pembuatan forum diskusi",
          "Survei dan kuesioner"
        ]
      },
    ]

    const gambar = [
      { title: "Internal", item: "/visimisi/internal.png" },
      { title: "Eksternal", item: "/visimisi/eksternal.png" },
      { title: "IPTEK", item: "/visimisi/iptek.png" },
      { title: "PSDM", item: "/visimisi/sdm.png" },
      { title: "Business", item: "/visimisi/businessdevelop.png" },
    ]

    const content = {
      internal: {
        title: "Internal",
        visi: "Menjadikan Divisi Internal yang solid, efesien, dan inovatif, dengat tata kelola yang baik, sehingga mampu mendukung tercapainya tujuan organisasi secara optimal",
        strategi: [
          "Mengadakan kegiatan sosialisasi dan Team Building",
          "Menyusun program kerja yang jelas dan terstruktur",
        ],
        target: [
          "Menciptakan lingkungan organisasi yang ingklusif",
          "Meningkatkan Keterlanjutan dan Efektivitas kegiatan internal"
        ],
        gambar: "/visimisi/internal.png",
      },
      eksternal: {
        title: "Eksternal",
        visi: "Menjadikan Divisi eksternal yang dinamis, profosional dan terhubung baik dengan pihak luar, untuk memperluas peluang kerjasama yang mendukung perkmbangan mahasiswa/i",
        strategi: [
          "Menjalin kemitraan dengan berbagai instansi dan organisasi",
          "Meningkatkan keterlibatan mahasiswa/i dalam kegiatan eksternal",
        ],
        target: [
          "Memperluas kerjasama dengan pihak eksternal",
          "Mengembangkan platfrom untuk mahasiswa/i cakupan luar prodi"
        ],
        gambar: "/visimisi/eksternal.png",
      },
      iptek: {
        title: "IPTEK",
        visi: "Menjadi devisi yang mampu menghasilkan konten kreatif dan inovatif di bidang ilmu pengetahuan dan teknologi, yang menginspirasi dan memberikan nilai tambah bagi mahasiswa/i",
        strategi: [
          "Mengoganisir webinar dan seminar dengan narasumber proposional",
          "Menyelenggarakkan pelatihan teknologi",
        ],
        target: [
          "Meningkatkan pemahaman dan penerapan teknologi oleh mahasiswa"
        ],
        gambar: "/visimisi/iptek.png",
      },
      psdm: {
        title: "PSDM",
        visi: "Menjadi pusat inovasi dalam pengembangan program yang relavan dan berdampak, guna mengoptimalkan potnsi setiap mahasiswa/i",
        strategi: [
          "Meningkatkan kualitas pengurus dan panitia",
          "Mengoptimalkan Komunikasi dan Promosi Program",
        ],
        target: [
          "Meningkatkan Kualtas Program Kerja unggulan kabinet"
        ],
        gambar: "/visimisi/sdm.png",
      },
      business: {
        title: "Business Development",
        visi: "Menjadi devisi Business Development sebagai penggerak utama kewirausahaan mahasiswa/i di luar bidang informatika, mendukung peningkatan usaha mereka melalui promosi dan penjualan, serta menciptakan peluang produk baru bagi mahasiswa/i",
        strategi: [
          "Memfalitasi promosi dan pemasaran",
          "Menjalin kerjasama bisnis dengan mahasiswa/i",
          "Pengembangan produk sendiri",
        ],
        target: [
          "Meningkatkan Penjualan produk mahasiswa/i",
          "menciptakan produk mandiri dari HMPS MI",
          "Mengembangkan kolaborasi dengan mahasiswa/i yang memiliki usaha"
        ],
        gambar: "/visimisi/businessdevelop.png"
      },
    }

    const handleImageClick = (title) => {
        const contentKey = title.toLowerCase().replace(' ', '')
        setSelectedContent(content[contentKey])
    }

    const closeModal = () => {
        setSelectedContent(null)
    }

    return (
        <>
          {selectedContent && (
  <div className="
    fixed inset-0 w-full 
    min-h-[270rem]         /* 📱 Default untuk mobile */
    md:min-h-[170rem]      /* 💻 Untuk layar medium ke atas (laptop) */
    h-full 
    bg-black/70 backdrop-blur-lg 
    z-[99]
  "></div>
)}


            <div className="w-full py-16 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Grid 3 Kolom */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
                        
                        {/* VISI - Kolom 1 */}
                        <div className="text-center">
                            <div className="mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl font-bold text-white">V</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">VISI</h2>
                            </div>
                            
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            {visi.map((item, index) => (
                                <p key={index} className="text-lg text-gray-700 leading-relaxed text-justify">
                                "{item.desk}"
                                </p>
                            ))}
                            </div>
                        </div>

                        {/* MISI - Kolom 2 */}
                        <div className="text-center">
                            <div className="mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl font-bold text-white">M</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">MISI</h2>
                            </div>
                            
                            <div className="space-y-4">
                            {misi.map((item, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">{index + 1}</span>
                                    </div>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-justify flex-1">
                                    {item.desk}
                                    </p>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>

                        {/* STRATEGI - Kolom 3 */}
                        <div className="text-center">
                            <div className="mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl font-bold text-white">S</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">STRATEGI</h2>
                            </div>
                            
                            <div className="space-y-6">
                            {strategi_misi.map((strategi, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">
                                    {strategi.title}
                                </h3>
                                <ul className="space-y-2 text-left">
                                    {strategi.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start space-x-2">
                                        <span className="text-green-600 mt-1">•</span>
                                        <span className="text-gray-700 leading-relaxed">{item}</span>
                                    </li>
                                    ))}
                                </ul>
                                </div>
                            ))}
                            </div>
                        </div>

                    </div>

                    {/* Section Gambar */}
                    <div className="mt-20">
                        <div className="flex flex-wrap justify-center gap-10 md:gap-12">
                            {gambar.map((item, index) => (
                            <div
                                key={index}
                                className="relative group transition-all duration-500 cursor-pointer"
                                onClick={() => handleImageClick(item.title)}
                            >
                                {/* Efek bayangan bawah */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/40 blur-2xl opacity-70 group-hover:opacity-90 transition-all duration-500"></div>

                                {/* Gambar utama */}
                                <img
                                src={item.item}
                                alt={item.title}
                                className="relative w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover border-4 border-gray-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_40px_rgba(90,71,206,0.8)] transform group-hover:-translate-y-3 transition-all duration-500"
                                />
                                
                                {/* Title dengan styling yang diminta */}
                                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 mt-4 text-center">
                                <span className="text-gray-800 font-medium text-center">{item.title}</span>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer - DI LUAR MODAL dengan z-index rendah */}
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

         {/* Modal untuk menampilkan content - POSISI TENGAH TENGAH dengan z-index tinggi */}
{selectedContent && (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
        {/* Modal container dengan scrollbar hidden */}
        <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative mt-[5rem] 
                      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Tombol close */}
            <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
            >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Gambar di kiri */}
                <div className="flex flex-col items-center justify-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-30"></div>
                        <img
                            src={selectedContent.gambar}
                            alt={selectedContent.title}
                            className="relative w-64 h-64 rounded-2xl object-cover shadow-2xl border-4 border-white"
                        />
                    </div>
                    <div className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
                        <h3 className="text-xl font-bold text-center">{selectedContent.title}</h3>
                    </div>
                </div>
                
                {/* Content di kanan */}
                <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                            {selectedContent.title}
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto lg:mx-0"></div>
                    </div>
                    
                    {/* Visi Card */}
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100 shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-lg">V</span>
                            </div>
                            <h3 className="text-xl font-semibold text-purple-700">Visi</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-justify italic">
                            "{selectedContent.visi}"
                        </p>
                    </div>
                    
                    {/* Strategi Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-700">Strategi</h3>
                        </div>
                        <ul className="space-y-3">
                            {selectedContent.strategi.map((item, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                                        <span className="text-white text-sm font-bold">{index + 1}</span>
                                    </div>
                                    <span className="text-gray-700 leading-relaxed flex-1">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Target Card */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-lg">T</span>
                            </div>
                            <h3 className="text-xl font-semibold text-green-700">Target</h3>
                        </div>
                        <ul className="space-y-3">
                            {selectedContent.target.map((item, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 mt-1.5">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                    <span className="text-gray-700 leading-relaxed flex-1">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}
        </>
    )
}

export default VisiMisi