import React, { useState } from 'react'

const Team = () => {
  const [activeDivision, setActiveDivision] = useState("Internal");

  // card ketua
  const ketua_internal = [
    {
      name: "Chrisandy Hutabarat",
      position: "Ketua Tim Advokasi",
      image: "/profile/cowo.png",
    },
    {
      name: "Letticiya Laura S",
      position: "Ketua Tim Keagamaan",
      image: "/profile/cewe.png",
    },
  ];

  const ketua_eksternal = [
    {
      name: "Tongku Guru S.",
      position: "Ketua Tim Eksternal",
      image: "/profile/cowo.png",
    },
    {
      name: "Dita Liana",
      position: "Ketua Tim Riset Analisis",
      image: "/profile/cewe.png",
    },
  ];

  const ketua_IPTEK = [
    {
      name: "Randy Krisna",
      position: "Ketua Tim Multimedia",
      image: "/profile/cowo.png",
    },
    {
      name: "Hatta Fahriza",
      position: "Ketua Tim Content Creator",
      image: "/profile/cowo.png",
    },
  ];

  const ketua_SDM = [
    {
      name: "Hanna Pati Lopian",
      position: "Ketua Tim Quality Assurance",
      image: "/profile/cewe.png",
    },
    {
      name: "Valencia Anbarina",
      position: "Ketua Tim Program",
      image: "/profile/cewe.png",
    },
    {
      name: "Mutiara Sianturi",
      position: "Ketua Tim HRD",
      image: "/profile/cewe.png",
    },
  ];

  const ketua_BusinessDevelopment = [
    {
      name: "Hepyana Daulay",
      position: "Ketua Tim Product Development",
      image: "/profile/cewe.png",
    },
    {
      name: "Yohana Fransiska",
      position: "Ketua Tim Sales Executive",
      image: "/profile/cewe.png",
    },
  ];

  // 🔹 Data card anggota
  const anggota_internal = [
    { name: "Tr Septian Tarigan", position: "Anggota Advokasi", image: "/profile/cowo.png" },
    { name: "Johanes Mario Rafael S.", position: "Anggota Advokasi", image: "/profile/cowo.png" },
    { name: "Holikristin BR Ginting", position: "Anggota Advokasi", image: "/profile/cewe.png" },
    { name: "Sarah Khairina", position: "Anggota Advokasi", image: "/profile/cewe.png" },
    { name: "Egi Syahputra", position: "Anggota Keagamaan", image: "/profile/cowo.png" },
  ];

  const anggota_eksternal = [
    { name: "M.Hilmi Syuhada", position: "Anggota Eksternal", image: "/profile/cowo.png" },
    { name: "Dwika Br Naibaho", position: "Anggota Eksternal", image: "/profile/cewe.png" },
    { name: "M. Rizky Ramadhan", position: "Anggota Eksternal", image: "/profile/cowo.png" },
    { name: "Sindi Syahfitri", position: "Anggota Riset Analisis", image: "/profile/cewe.png" },
  ];

  const anggota_IPTEK = [
    { name: "Dedy Hutahean P", position: "Anggota Multimedia", image: "/profile/cowo.png" },
    { name: "Sekarissa Ramashani", position: "Anggota Multimedia", image: "/profile/cewe.png" },
    { name: "May Helena Tamba", position: "Anggota Multimedia", image: "/profile/cewe.png" },
    { name: "Silvika Zachry", position: "Anggota Content Creator", image: "/profile/cewe.png" },
    { name: "Sukma Andini", position: "Anggota Content Creator", image: "/profile/cewe.png" },
  ];

  const anggota_SDM = [
    { name: "Rachel Sagita Sibarani", position: "Anggota Quality Assurance", image: "/profile/cewe.png" },
    { name: "Shindy Aprilia", position: "Anggota Quality Assurance", image: "/profile/cewe.png" },
    { name: "Rakhmadsyah Irawan", position: "Anggota Tim Program", image: "/profile/cowo.png" },
    { name: "Clara Sinta Limbong", position: "Anggota Tim Program", image: "/profile/cewe.png" },
    { name: "Rara Triya Amanda", position: "Anggota Tim HRD", image: "/profile/cewe.png" },
  ];

  const anggota_BusinessDevelopment = [
    { name: "Kayla Hulwani", position: "Anggota Product Development", image: "/profile/cewe.png" },
    { name: "Musbar Muliansyah", position: "Anggota Product Development", image: "/profile/cowo.png" },
    { name: "Fensia Emanuela", position: "Anggota Product Development", image: "/profile/cewe.png" },
    { name: "Nurul Inayah", position: "Anggota Sales Executive", image: "/profile/cewe.png" },
    { name: "Nabila Azzahro", position: "Anggota Sales Executive", image: "/profile/cewe.png" },
  ];

  // Fungsi untuk mendapatkan data berdasarkan divisi aktif
  const getLeadersByDivision = () => {
    switch (activeDivision) {
      case "Internal":
        return ketua_internal;
      case "Eksternal":
        return ketua_eksternal;
      case "IPTEK":
        return ketua_IPTEK;
      case "SDM":
        return ketua_SDM;
      case "Business Development":
        return ketua_BusinessDevelopment;
      default:
        return ketua_internal;
    }
  };

  const getMembersByDivision = () => {
    switch (activeDivision) {
      case "Internal":
        return anggota_internal;
      case "Eksternal":
        return anggota_eksternal;
      case "IPTEK":
        return anggota_IPTEK;
      case "SDM":
        return anggota_SDM;
      case "Business Development":
        return anggota_BusinessDevelopment;
      default:
        return anggota_internal;
    }
  };

  const leaders = getLeadersByDivision();
  const members = getMembersByDivision();

  return (
    <div className="flex flex-col items-center text-gray-800 w-full">

      {/* Gambar background - tetap pakai AOS */}
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="
          w-screen
          bg-[url('/team/bg_team.png')]
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

      <div 
        className="w-full max-w-3xl px-5 sm:px-6 py-6 text-left space-y-6 mb-[5rem] content-hmps"
      >
        <style>
          {`
            /* 💻 Desktop besar (1321px ke atas) */
            @media (min-width: 1321px) {
              .content-hmps {
                max-width: 80rem !important; 
                padding-left: 8rem !important;
                padding-right: 8rem !important;
              }

              .content-hmps p {
                font-size: 1.3rem !important;
                line-height: 2rem !important;
              }
            }
          `}
        </style>

        <p className="leading-relaxed text-black text-justify">
          HMPS MI adalah wadah resmi mahasiswa Manajemen Informatika yang berkomitmen 
          untuk mengembangkan potensi akademik, kepemimpinan, dan kreativitas setiap anggotanya. 
          Melalui berbagai program, workshop, dan kegiatan rutin, kami mendorong mahasiswa 
          untuk berinovasi dan mengasah kemampuan mereka, sehingga siap menghadapi tantangan di dunia kampus maupun industri.
        </p>

        <p className="leading-relaxed text-blck text-justify">
          Tim HMPS MI terdiri dari individu-individu berdedikasi yang aktif merancang proyek, kegiatan sosial, 
          dan inovasi yang bermanfaat bagi seluruh mahasiswa MI. Bersama-sama, kami bekerja untuk membangun komunitas 
          yang inspiratif, kolaboratif, dan produktif, sambil menanamkan nilai-nilai kepemimpinan, tanggung jawab, 
          dan semangat kebersamaan di setiap kegiatan yang kami lakukan.
        </p>

        <form className="flex flex-wrap justify-center gap-4 mt-6">
  {["Internal", "Eksternal", "IPTEK", "SDM", "Business Development"].map((text, index) => (
    <button
      key={index}
      type="button"
      onClick={() => setActiveDivision(text)}
      className="px-6 py-3 font-semibold rounded-full text-black border-2 border-black shadow-lg transition-all duration-300"
      style={{
        background: activeDivision === text 
          ? "radial-gradient(circle at center, #5a47ce, #232323 80%)" 
          : "white",
        color: activeDivision === text ? "white" : "black",
        transform: activeDivision === text ? "scale(1.05)" : "scale(1)",
        filter: activeDivision === text ? "drop-shadow(0 0 15px rgba(90,71,206,0.7))" : "none"
      }}
      onMouseEnter={e => {
        if (activeDivision !== text) {
          e.currentTarget.style.background = "radial-gradient(circle at center, #5a47ce, #232323 80%)";
          e.currentTarget.style.color = "white";
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.filter = "drop-shadow(0 0 15px rgba(90,71,206,0.7))";
        }
      }}
      onMouseLeave={e => {
        if (activeDivision !== text) {
          e.currentTarget.style.background = "white";
          e.currentTarget.style.color = "black";
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.filter = "none";
        } else {
          // Tombol aktif tetap gradient
          e.currentTarget.style.background = "radial-gradient(circle at center, #5a47ce, #232323 80%)";
          e.currentTarget.style.color = "white";
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.filter = "drop-shadow(0 0 15px rgba(90,71,206,0.7))";
        }
      }}
    >
      {text}
    </button>
  ))}
</form>
      </div>

      <div
  className="flex flex-col items-center gap-24 p-16 w-full rounded-3xl relative pb-56 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `
      radial-gradient(circle at center, #5a47ce 0%, #232323 100%),
      url('/bg_card.png')
    `,
    backgroundBlendMode: 'overlay'
  }}
>
        {/* 🔹 Baris 1: Ketua & Wakil Ketua */}
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
              <h1 className="text-xl font-semibold text-white mt-8 tracking-wide drop-shadow-md text-center">
                {leader.name}
              </h1>
              <p
                className="
                  text-base text-white mt-3 italic text-center
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

        {/* 🔹 Baris 2: Anggota */}
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
              <h1 className="text-lg font-semibold text-white mt-8 text-center">{member.name}</h1>
              <p className="
                text-base text-white mt-3 italic text-center
                bg-white/20 backdrop-blur-md 
                border border-white/30 
                px-4 py-1 
                rounded-full 
                shadow-[0_4px_15px_rgba(0,0,0,0.3)]
              ">{member.position}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
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

export default Team