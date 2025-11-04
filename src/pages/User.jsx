import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Experience } from "../components/Experience";
import { UI, bookVisibilityAtom } from "../components/UI";
import { useAtom } from "jotai";

const User = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [bookVisibility] = useAtom(bookVisibilityAtom);

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
  }, []);

  return (
    <>
      <UI />
      <div className={`fixed top-0 left-0 w-full h-full z-10 transition-all duration-300 ${
        bookVisibility ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <Canvas 
          shadows 
          camera={{
            position: isMobile ? [0, 1, 5] : [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
            fov: isMobile ? 50 : 45,
          }}
        >
          <group position-y={0}>
            <Suspense fallback={null}>
              <Experience isMobile={isMobile} />
            </Suspense>
          </group>
        </Canvas>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { 
            opacity: 0;
          }
          to { 
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </>
  )
}

export default User