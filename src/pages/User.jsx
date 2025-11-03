import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Experience } from "../components/Experience";
import { UI } from "../components/UI";

const User = () => {
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
      
      {/* Canvas dengan animasi fade-in smooth */}
      <div className="fixed top-0 left-0 w-full h-full z-10 animate-fade-in">
        <Canvas 
          shadows 
          camera={{
            position: [-0.5, 1, window.innerWidth > 800 ? 4 : 6],
            fov: window.innerWidth > 800 ? 45 : 55,
          }}
        >
          <group position-y={0}>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </group>
        </Canvas>
      </div>

      <style jsx>{`
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