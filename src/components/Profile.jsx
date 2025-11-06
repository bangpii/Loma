import { useEffect, useRef } from 'react';

const Profile = () => {

  const leaders = [
    {
      name: "Alifa Qadri",
      position: "Ketua Himpunan",
      image: "/profile/cowo.png",
    },
    {
      name: "M Hafizh BB",
      position: "Wakil Ketua",
      image: "/profile/cowo.png",
    },
  ];

  // 🔹 Data card anggota (bisa ditambah lewat CMS nanti)
  const members = [
    { name: "Mauliza Azizah", position: "Sekertaris Umum", image: "/profile/cewe.png" },
    { name: "Syafitri Uswatun", position: "Wakil Sekertaris", image: "/profile/cewe.png" },
    { name: "Amira Nadhifa N", position: "Bendahara Umum", image: "/profile/cewe.png" },
    { name: "Umi Nurfadhilah S", position: "Wakil Bendahara", image: "/profile/cewe.png" },
    { name: "M. Ibnu Tawakal", position: "Kontrol Intrnal", image: "/profile/cowo.png" },
    { name: "Marisa Siagian", position: "Kontrol Internal", image: "/profile/cewe.png" },
  ];

  return (
    <div className="flex flex-col items-center text-gray-800 w-full">

      {/* Gambar background - tetap pakai AOS */}
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="
          w-screen
          bg-[url('/bg.png')]
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

      {/* Konten teks - tanpa animasi */}
      <div 
        className="w-full max-w-3xl px-5 sm:px-6 py-6 text-left space-y-4 mb-[5rem] content-hmps"
      >
        <style>
          {`
            /* 💻 Desktop besar (1321px ke atas) */
            @media (min-width: 1321px) {
              .content-hmps {
                max-width: 80rem !important; /* Lebarkan kontainer */
                padding-left: 8rem !important;
                padding-right: 8rem !important;
              }

              .content-hmps h1 {
                margin-bottom: 4rem !important;
                font-size: 2.75rem !important; /* lebih besar dari 2xl */
              }

              .content-hmps p {
                font-size: 1.3rem !important;
                line-height: 2rem !important;
              }
            }
          `}
        </style>

        <h1 className="text-2xl font-bold text-center mb-4">APA ITU HMPS MI?</h1>
        <p className="leading-relaxed text-justify">
          HMPS MI (Himpunan Mahasiswa Program Studi Manajemen Informatika) adalah wadah organisasi 
          bagi mahasiswa Program Studi Manajemen Informatika untuk mengembangkan potensi akademik, 
          sosial, dan kepemimpinan. HMPS MI menjadi sarana untuk menampung aspirasi serta menjembatani 
          komunikasi antara mahasiswa dan pihak kampus.
        </p>
        <p className="leading-relaxed text-justify">
          Selain itu, HMPS MI juga berperan aktif dalam menyelenggarakan berbagai kegiatan seperti 
          pelatihan, seminar, pengabdian masyarakat, serta kegiatan yang menunjang kreativitas dan 
          inovasi mahasiswa. Dengan semangat kolaborasi, HMPS MI berkomitmen membentuk mahasiswa yang 
          berprestasi dan berkontribusi positif bagi masyarakat.
        </p>
        <p className="leading-relaxed text-justify">
          Melalui berbagai program kerja dan kegiatan internal maupun eksternal, HMPS MI berupaya menciptakan 
          lingkungan yang inspiratif dan produktif bagi seluruh anggotanya. Organisasi ini tidak hanya menjadi 
          tempat belajar dan berorganisasi, tetapi juga wadah untuk mempererat solidaritas, menumbuhkan jiwa 
          kepemimpinan, serta menyiapkan mahasiswa agar siap bersaing di dunia profesional yang dinamis.
        </p>
      </div>

      {/* 🔹 Logo & teks kabinet - tanpa animasi */}
      <div 
        className="logo-wrapper flex flex-col items-center justify-center -mt-[5rem] mb-20 text-center select-none w-full"
      >
        {/* 🔸 Logo kabinet */}
        <div className="inline-block relative">
          <img
            src="/title/logo_kabinet.png"
            alt="Logo Kabinet Evolutionnarine"
            className="object-contain drop-shadow-xl transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>

      <h1 className="-mt-[5rem] font-bold mb-10 text-center 
               text-2xl sm:text-3xl md:text-4xl lg:text-5xl
               px-4 md:px-0">
      KABINET HMPS MI 2024 - 2025
    </h1>

      <div
        className="flex flex-col items-center gap-24 p-16 w-full rounded-3xl relative pb-56"
        style={{
          background: "radial-gradient(circle at center, #5a47ce 0%, #232323 100%)",
        }}
      >
        {/* 🔹 Baris 1: Ketua & Wakil Ketua - TANPA ANIMASI */}
        <div 
          className="flex flex-wrap justify-center items-center gap-20 w-full"
        >
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/30 backdrop-blur-lg rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_50px_rgba(90,71,206,0.7)] hover:scale-105 transition-all duration-500 border border-white/40 w-80 h-[27rem] overflow-hidden"
            >
              <div className="relative mt-4">
                {/* 🔹 Efek cahaya glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-purple-400 via-indigo-400 to-transparent opacity-30 blur-2xl rounded-full" />
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
                />
              </div>
              <h1 className="text-xl font-semibold text-white mt-8 tracking-wide drop-shadow-md">
                {leader.name}
              </h1>
              <p
                className="
                  text-base text-white mt-3 italic 
                  bg-white/20 backdrop-blur-md 
                  border border-white/30 
                  px-4 py-1 
                  rounded-full 
                  shadow-[0_4px_15px_rgba(0,0,0,0.3)]
                "
              >
                {leader.position}
              </p>
            </div>
          ))}
        </div>

        {/* 🔹 Baris 2: Anggota - TANPA ANIMASI */}
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

        {/* Footer - tanpa animasi */}
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
  );
};

export default Profile;