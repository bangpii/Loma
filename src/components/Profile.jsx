import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center text-gray-800 w-full">
      {/* Gambar background */}
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

      {/* Konten teks */}
      <div className="w-full max-w-3xl px-5 sm:px-6 py-6 text-left space-y-4 mb-[5rem]">
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

    {/* 🔹 Logo & teks kabinet */}
    <div className="logo-wrapper flex flex-col items-center justify-center -mt-[5rem] mb-20 text-center select-none w-full">
      {/* 🔸 Logo kabinet */}
      <div className="inline-block relative">
        <img
          src="/title/logo_kabinet.png"
          alt="Logo Kabinet Evolutionnarine"
          className="object-contain drop-shadow-xl transition-transform duration-500 hover:scale-110 
                    w-[90vw] max-w-[1000px] h-auto"
        />
      </div>

      {/* 🔸 Teks di bawah logo */}
      <div className="-mt-[1rem] ">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-gray-800 drop-shadow-sm">
          KABINET EVOLUTIONNARINE
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl text-gray-600">
          2024 / 2025
        </h2>
      </div>
    </div>

    {/* Dibawah Logo sama txt munculkan gambar ini */}
    {/* 🔹 Background Card Full-Width */}
    <div className="w-full overflow-hidden">
      <img
        src="/bg_card.png"
        alt="Background Card"
        className="w-full h-auto object-cover"
        
      />
    </div>

    </div>
  );
};

export default Profile;