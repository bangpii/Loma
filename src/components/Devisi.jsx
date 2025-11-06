import React from 'react'

const Devisi = () => {

    // 🔹 Data card anggota (bisa ditambah lewat CMS nanti)
    const members = [
      { name: "Zaky Farhan Sitorus", position: "Kepala Devisi Internal", image: "/profile/cowo.png" },
      { name: "Bima Shakti", position: "Kepala Devisi Ekstrnal", image: "/profile/cowo.png" },
      { name: "Rendy Krisna", position: "Kepala Devisi IPTEK", image: "/profile/cowo.png" },
      { name: "Gilbert Tamba", position: "Kepala Devisi PSDM", image: "/profile/cowo.png" },
      { name: "Riah Ulina H.", position: "Kepala Devisi Business", image: "/profile/cewe.png" },
      { name: "Putri Anggreini", position: "Manager", image: "/profile/cewe.png" },
    ];

  const images = [
    "/devisi/internal.png",
    "/devisi/eksternal.png",
    "/devisi/iptek.png",
    "/devisi/sdm.png",
    "/devisi/bisnis.png",
  ];

  return (
    <div className="flex flex-col items-center text-gray-800 w-full">

    {/* Gambar background - tetap pakai AOS */}
    <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="
          w-screen
          bg-[url('/bg_devisi.png')]
          bg-no-repeat 
          bg-center 
          bg-contain 
          sm:bg-contain
          md:bg-cover
          scale-110
          sm:scale-100
          transition-all duration-500
          aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8]
          -mt-10 
          -ml-4 -mr-4
          sm:-ml-6 sm:-mr-6
          md:-ml-8 md:-mr-8
          mb-4
          rounded-t-2xl
        "
      />

<div className="flex flex-col items-center w-full overflow-visible">
  <style>
    {`
      /* 📱 Mobile */
      @media (max-width: 768px) {
        .devisi-img:first-child {
          margin-top: 5rem !important;
        }
        .devisi-img:not(:first-child) {
          margin-top: -4rem !important;
        }

        .devisi-img:nth-of-type(2),
        .devisi-img:nth-of-type(3),
        .devisi-img:nth-of-type(4),
        .devisi-img:nth-of-type(5) {
          margin-top: -5rem !important; /* tumpukan pas */
        }
      }

      /* 💻 Mid-range: Tablet landscape - Laptop kecil (770px–1320px) */
      @media (min-width: 769px) and (max-width: 1320px) {
        .devisi-img:first-child {
          margin-top: 15rem !important;
        }

        .devisi-img:not(:first-child) {
          margin-top: -4rem !important; /* lebih longgar */
        }

        .devisi-img:nth-of-type(2),
        .devisi-img:nth-of-type(3),
        .devisi-img:nth-of-type(4),
        .devisi-img:nth-of-type(5) {
          margin-top: -12rem !important; /* tumpukan pas */
        }
      }

      /* 🖥️ Desktop besar */
      @media (min-width: 1321px) {
        .devisi-img:first-child {
          margin-top: 10rem !important;
        }

        .devisi-img:not(:first-child) {
          margin-top: -4rem !important;
        }

        .devisi-img:nth-of-type(2),
        .devisi-img:nth-of-type(3),
        .devisi-img:nth-of-type(4),
        .devisi-img:nth-of-type(5) {
          margin-top: -20rem !important;
        }
      }
    `}
  </style>


  <img src="/devisi/internal.png" className="devisi-img" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
  <img src="/devisi/eksternal.png" className="devisi-img" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
  <img src="/devisi/iptek.png" className="devisi-img" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
  <img src="/devisi/sdm.png" className="devisi-img" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
  <img src="/devisi/bisnis.png" className="devisi-img" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
</div>

<h1 className="font-bold mb-10 text-center 
               text-2xl sm:text-3xl md:text-4xl lg:text-5xl
               px-4 md:px-0">
  DEVISI HMPS MI 2024 - 2025
</h1>


<div
        className="flex flex-col items-center gap-24 p-16 w-full rounded-3xl relative pb-56"
        style={{
          background: "radial-gradient(circle at center, #5a47ce 0%, #232323 100%)",
        }}
      >

        {/* 🔹 Baris 2: Anggota - TAMBAH ANIMASI */}
        <div 
          className="flex flex-wrap justify-center items-center gap-20 w-full"
        >
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/20 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_40px_rgba(90,71,206,0.6)] hover:scale-105 transition-all duration-500 border border-white/30 w-72 h-[25rem] overflow-hidden"
            >
              <div className="relative mt-6">
                <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-400 via-purple-400 to-transparent opacity-25 blur-2xl rounded-full" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-[0_6px_18px_rgba(0,0,0,0.4)]"
                />
              </div>
              <h1 className="text-lg font-semibold text-white mt-8">{member.name}</h1>
              <p className="
                text-base text-white mt-3 italic 
                bg-white/20 backdrop-blur-md 
                border border-white/30 
                px-4 py-1 
                rounded-full 
                shadow-[0_4px_15px_rgba(0,0,0,0.3)]
              ">{member.position}</p>
            </div>
          ))}
        </div>

      
        <footer 

          className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-6 py-8 bg-white backdrop-blur-lg rounded-t-3xl border-t border-white"
        >
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
        </footer>
      </div>

    </div>
  )
}

export default Devisi