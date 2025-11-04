import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center text-gray-800 w-full">
      {/* Gambar background full width untuk semua device */}
      <div
        className="
          w-screen /* ⚡ Pakai screen width bukan full */
          bg-[url('/bg.png')] 
          bg-no-repeat 
          bg-center 
          bg-contain sm:bg-cover 
          shadow-md
          transition-all duration-500
          aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8]
          -mt-10 
          -ml-4 -mr-4 /* ⚡ Untuk mobile */
          sm:-ml-6 sm:-mr-6 /* ⚡ Untuk tablet */
          md:-ml-8 md:-mr-8 /* ⚡ Untuk desktop */
          mb-4
          rounded-t-2xl
        "
      />

      {/* Konten teks */}
      <div className="w-full max-w-3xl px-5 sm:px-6 py-6 text-left space-y-4">
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
    </div>
  );
};

export default Profile;