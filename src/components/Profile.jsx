import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center text-gray-800 w-full">
      {/* Bagian gambar sebagai background cover */}
      <div
        className="w-full h-72 sm:h-80 md:h-96 bg-[url('./images/bg.png')] bg-cover bg-center rounded-t-2xl shadow-md"
      />

      {/* Konten penjelasan di bawah gambar */}
      <div className="w-full max-w-3xl p-6 text-left space-y-4">
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
      </div>
    </div>
  );
};

export default Profile;
