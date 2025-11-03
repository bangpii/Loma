import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { Experience } from "../components/Experience";
import { UI } from "../components/UI";

const User = () => {
  const [showBook, setShowBook] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBook(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <UI />
      <Loader />
      
      {/* Canvas dengan animasi Tailwind */}
      <div 
        className={`
          fixed top-0 left-0 w-full h-full z-10
          transition-all duration-1000 ease-out
          ${showBook 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-24 scale-95"
          }
        `}
      >
        <Canvas 
          shadows 
          camera={{
            position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
            fov: 45,
          }}
        >
          <group position-y={0}>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </group>
        </Canvas>
      </div>
    </>
  )
}

export default User