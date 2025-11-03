import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
  // Responsive settings
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 800;
  
  return (
    <>
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={0.3}
        speed={1}
        rotationIntensity={0.5}
      >
        <Book scale={isMobile ? 1.2 : 1} />
      </Float>
      <OrbitControls 
        enableZoom={true}
        minDistance={isMobile ? 4 : 3}
        maxDistance={isMobile ? 12 : 10}
        enablePan={true}
      />
      <Environment preset="studio" />
      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={isMobile ? 1024 : 2048}
        shadow-mapSize-height={isMobile ? 1024 : 2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};