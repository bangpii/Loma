import { useEffect, useRef } from 'react';

const Profile = () => {

  const leaders = [
    {
      name: "Alifa Qadri",
      position: "Ketua Himpunan",
      image: "/profile/cowo.png",
    },
    {
      name: "M Hafizh Batu Bara",
      position: "Wakil Ketua Himpunan",
      image: "/profile/cowo.png",
    },
  ];

  // 🔹 Data card anggota (bisa ditambah lewat CMS nanti)
  const members = [
    { name: "Nama Anggota 1", position: "Divisi 1", image: "/profile/cowo.png" },
    { name: "Nama Anggota 2", position: "Divisi 2", image: "/profile/cowo.png" },
    { name: "Nama Anggota 3", position: "Divisi 3", image: "/profile/cowo.png" },
    { name: "Nama Anggota 4", position: "Divisi 4", image: "/profile/cowo.png" },
    { name: "Nama Anggota 5", position: "Divisi 5", image: "/profile/cowo.png" },
    { name: "Nama Anggota 6", position: "Divisi 6", image: "/profile/cowo.png" },
  ];

  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('animate-fade-out-down');
          } else {
            entry.target.classList.add('animate-fade-out-down');
            entry.target.classList.remove('animate-fade-in-up');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div className="flex flex-col items-center text-gray-800 w-full">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeOutDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(50px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-out-down {
          animation: fadeOutDown 0.6s ease-in forwards;
        }
        
        .scroll-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
      `}</style>

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

      {/* Konten teks - pakai CSS animation */}
      <div 
        ref={addToRefs}
        className="scroll-animate w-full max-w-3xl px-5 sm:px-6 py-6 text-left space-y-4 mb-[5rem]"
      >
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

      {/* 🔹 Logo & teks kabinet - pakai CSS animation */}
      <div 
        ref={addToRefs}
        className="scroll-animate logo-wrapper flex flex-col items-center justify-center -mt-[5rem] mb-20 text-center select-none w-full"
      >
        {/* 🔸 Logo kabinet */}
        <div className="inline-block relative">
          <img
            src="/title/logo_kabinet.png"
            alt="Logo Kabinet Evolutionnarine"
            className="object-contain drop-shadow-xl transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* 🔸 Teks di bawah logo */}
        <div className="-mt-[1rem]">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-gray-800 drop-shadow-sm">
            KABINET EVOLUTIONNARINE
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl text-gray-600">
            2024 / 2025
          </h2>
        </div>
      </div>

      <div
  className="flex flex-col items-center gap-24 p-16 w-full rounded-3xl"
  style={{
    background: "radial-gradient(circle at center, #5a47ce 0%, #232323 100%)",
  }}
>
  {/* 🔹 Baris 1: Ketua & Wakil Ketua */}
  <div className="flex flex-wrap justify-center items-center gap-20 w-full">
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
        <p className="text-base text-gray-200 mt-1 italic">{leader.position}</p>
      </div>
    ))}
  </div>

  {/* 🔹 Baris 2: Anggota */}
  <div className="flex flex-wrap justify-center items-center gap-20 w-full">
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
        <p className="text-sm text-gray-200 mt-1 italic">{member.position}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Profile;