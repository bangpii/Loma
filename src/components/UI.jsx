import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [showLightEffect, setShowLightEffect] = useState(false);

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    });


    const timer = setTimeout(() => {
      setShowLightEffect(true);
  
      setTimeout(() => {
        setShowLightEffect(false);
      }, 1000);
    }, 2000); 

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
      clearTimeout(timer);
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

  return (
    <>
      <main className="pointer-events-none select-none z-30 fixed inset-0 flex justify-between flex-col">
        <div className="flex justify-between items-start">
          <a
            className="pointer-events-auto mt-5 ml-10"
            style={{ 
              transform: 'scale(5.5)',
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

      <div className="fixed inset-0 flex items-center justify-center select-none z-0">
        <div className="relative">
          <h1 className={`shrink-0 text-transparent text-13xl font-black italic outline-text md:text-13xl text-8xl ${showLightEffect ? 'text-light-sweep' : ''}`}>
            <span data-aos="fade-right" data-aos-delay="100">HMPS</span>
            <span data-aos="fade-right" data-aos-delay="300"> </span>
            <span data-aos="fade-right" data-aos-delay="500">MI</span>
          </h1>
        </div>
      </div>

      {isCardVisible && (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm z-20 hidden"></div>
          <div className="bg-white fixed top-32 left-10 right-10 bottom-0 mx-auto p-6 rounded-t-3xl shadow-lg border border-gray-200 overflow-auto z-30 hidden">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setIsCardVisible(false)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="text-center pt-2">
              ....
            </div>
          </div>
        </>
      )}

      <style>
        {`
          @keyframes textLightSweep {
            0% {
              mask-position: 100% 0;
              -webkit-mask-position: 100% 0;
            }
            100% {
              mask-position: -100% 0;
              -webkit-mask-position: -100% 0;
            }
          }
          
          .text-light-sweep {
            position: relative;
            mask-image: linear-gradient(
              75deg,
              transparent 0%,
              white 20%,
              white 80%,
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              75deg,
              transparent 0%,
              white 20%,
              white 80%,
              transparent 100%
            );
            mask-size: 200% 100%;
            -webkit-mask-size: 200% 100%;
            animation: textLightSweep 1s ease-in-out forwards;
          }

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

          /* Pastikan teks tetap transparan dengan outline */
          .outline-text {
            -webkit-text-stroke: 2px white;
            color: transparent;
          }
        `}
      </style>
    </>
  );
};