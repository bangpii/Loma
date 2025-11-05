import React from 'react'

const Devisi = () => {
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



    </div>
  )
}

export default Devisi