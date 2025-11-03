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
  const [isCardVisible, setIsCardVisible] = useState(false); // Default false agar tidak muncul
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

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
        // Handle error silently
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
              transform: 'scale(4.5)',
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
          <h1 className="shrink-0 text-transparent text-13xl font-black italic outline-text md:text-13xl text-8xl">
            <span data-aos="fade-right" data-aos-delay="100">HMPS</span>
            <span data-aos="fade-right" data-aos-delay="300"> </span>
            <span data-aos="fade-right" data-aos-delay="500">MI</span>
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