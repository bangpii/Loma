import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = ({ isMobile = false }) => {
  return (
    <>
      <Float
        rotation-x={isMobile ? -Math.PI / 8 : -Math.PI / 4}
        floatIntensity={isMobile ? 0.2 : 0.3}
        speed={1}
        rotationIntensity={isMobile ? 0.3 : 0.5}
      >
        <Book scale={isMobile ? 1.4 : 1} />
      </Float>
      
      <OrbitControls 
        enableZoom={true}
        enablePan={!isMobile}
        minDistance={isMobile ? 4 : 2} // Diperbolehkan zoom lebih dekat di desktop
        maxDistance={isMobile ? 8 : 20} // Diperbolehkan zoom lebih jauh di desktop
        zoomSpeed={0.8} // Kecepatan zoom yang nyaman
      />
      
      <Environment preset="studio" />
      
      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};