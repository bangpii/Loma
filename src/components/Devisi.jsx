import React from 'react'

const Devisi = () => {

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
          margin-top: 4rem !important;
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
          margin-top: 4rem !important; /* lebih longgar */
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
          margin-top: 4rem !important;
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

  <img
    src="/public/devisi/internal.png"
    className="devisi-img"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
      objectFit: "cover",
      marginTop: "5rem",
    }}
  />
  <img src="/devisi/eksternal.png" className="devisi-img" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
  <img src="/devisi/iptek.png" className="devisi-img" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
  <img src="/devisi/sdm.png" className="devisi-img" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
  <img src="/devisi/bisnis.png" className="devisi-img" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
</div>



    </div>
  )
}

export default Devisi