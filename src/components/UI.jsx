import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import Profile from './Profile';
import Devisi from './Devisi';
import Team from './Team';
import VisiMisi from './VisiMisi';
import News from './News';
import Articel from './Articel';
import { Galery } from './Galery';
import Contact from './Contact';

import 'aos/dist/aos.css';

const pictures = [
  "page1",
  "halaman_page1",
  "page2",
  "halaman_page2",
  "page3",
  "halaman_page3",
  "page4",
  "halaman_page4",
  "page5",
  "halaman_page5",
  "page6",
  "halaman_page6",
  "page7",
  "halaman_page7",
  "page8",
  "halaman_page8",
];

export const pageAtom = atom(0);
export const contentModalAtom = atom({ visible: false, content: null });
export const bookVisibilityAtom = atom(true); 

export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [contentModal, setContentModal] = useAtom(contentModalAtom);
  const [bookVisibility, setBookVisibility] = useAtom(bookVisibilityAtom); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    });

    const handleFirstInteraction = () => {
      setHasUserInteracted(true);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  useEffect(() => {
    if (hasUserInteracted && page > 0) {
      const audio = new Audio("/audios/page-flip-01a.mp3");
      audio.play().catch(() => {
      });
    }
  }, [page, hasUserInteracted]);

  useEffect(() => {
    if (contentModal.visible) {
      setModalAnimation(true);
      setBookVisibility(false); 
    } else {
      setModalAnimation(false);
      setBookVisibility(true);
    }
  }, [contentModal.visible]);

  const closeContentModal = () => {
    console.log('Closing modal');
    setContentModal({
      visible: false,
      content: null
    });
  };

  return (
    <>
      <main className="pointer-events-none select-none z-30 fixed inset-0 flex justify-between flex-col">
        <div className="flex justify-between items-start">
          <a
            className={`pointer-events-auto mt-5 ml-10 ${
              isMobile ? "scale-[3.5]" : "scale-[4.5]"
            }`}
            style={{ 
              transformOrigin: 'left top'
            }}
            href="#"
          >
            <img className="w-20" src="/images/logo.png" alt="Logo" />
          </a>
        </div>

        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10 
                        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {pages.map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      {contentModal.visible && (
  console.log('Modal is visible with content:', contentModal.content),
  <>
    {/* Overlay hitam transparan */}
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm z-20 animate-fade-in" />

    {/* Konten modal */}
    <div
      className={`
        bg-white fixed mx-auto p-6 rounded-t-3xl shadow-lg border border-gray-200 overflow-auto z-30 overflow-x-hidden 
        ${isMobile 
          ? "top-20 left-0 right-0 bottom-0 rounded-t-3xl" 
          : "top-32 left-10 right-10 bottom-0"
        }
        animate-slide-up
      `}
      data-aos={modalAnimation ? "fade-up" : ""}
      data-aos-duration="500"
      data-aos-easing="ease-out"
    >

      {/* Tombol silang */}
      <button
        className="
          absolute top-4 right-4
          bg-black/60 hover:bg-black/80
          text-white rounded-full
          w-9 h-9 flex items-center justify-center
          shadow-md transition-all duration-300
        "
        onClick={closeContentModal}
        aria-label="Close modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Isi konten modal */}
      <div className={`${isMobile ? "pt-2" : "pt-2"}`}>
        {contentModal.content}
      </div>
    </div>
  </>
)}


      <div className="fixed inset-0 flex items-center justify-center select-none z-0">
        <div className="relative">
          <h1 className={`shrink-0 text-transparent font-black italic outline-text ${
            isMobile 
              ? "text-6xl flex flex-col items-center justify-center gap-0" 
              : "text-13xl md:text-10xl text-8xl"
          }`}>
            <span 
              data-aos="fade-right" 
              data-aos-delay="100"
              className={isMobile ? "text-center" : ""}
            >
              HMPS
            </span>
            <span 
              data-aos="fade-right" 
              data-aos-delay="300"
              className={isMobile ? "hidden" : ""}
            >
              {" "}
            </span>
            <span 
              data-aos="fade-right" 
              data-aos-delay="500"
              className={isMobile ? "text-center" : ""}
            >
              MI
            </span>
          </h1>
        </div>
      </div>

      <style>
        {`
          /* Animasi masuk untuk setiap kata */
          [data-aos="fade-right"] {
            opacity: 0;
            transform: translateX(-30px);
            transition: all 0.8s ease;
          }

          [data-aos="fade-right"].aos-animate {
            opacity: 1;
            transform: translateX(0);
          }

          /* Animasi fade-up untuk modal */
          [data-aos="fade-up"] {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.5s ease-out;
          }

          [data-aos="fade-up"].aos-animate {
            opacity: 1;
            transform: translateY(0);
          }

          /* Animasi custom untuk backdrop */
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(100px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fadeIn 0.3s ease-out forwards;
          }

          .animate-slide-up {
            animation: slideUp 0.4s ease-out forwards;
          }

          /* Pastikan teks tetap transparan dengan outline */
          .outline-text {
            -webkit-text-stroke: 2px white;
            color: transparent;
          }

          /* Responsive text stroke untuk mobile */
          @media (max-width: 768px) {
            .outline-text {
              -webkit-text-stroke: 1.5px white;
            }
          }
        `}
      </style>
    </>
  );
};