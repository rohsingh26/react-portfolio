import React, { useRef, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader } from "three";
import { motion } from "framer-motion";
import EarthTexture from "../assets/earth.jpeg";

const Globe = () => {
  const earthRef = useRef();
  const texture = useLoader(TextureLoader, EarthTexture);
  const [rotationSpeed, setRotationSpeed] = useState(200);

  useEffect(() => {
    const speedStages = [
      { speed: 100, delay: 1000 },
      { speed: 50, delay: 2000 },
      { speed: 20, delay: 6000 },
      { speed: 10, delay: 8000 },
      { speed: 5.5, delay: 10000 },
    ];

    speedStages.forEach(({ speed, delay }) => {
      setTimeout(() => setRotationSpeed(speed), delay);
    });

    return () => clearTimeout();
  }, []);

  return (
    <motion.div
      className="w-full h-[50vh] flex justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Canvas
        className="w-full h-full"
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
      >
        <Stars radius={80} depth={50} count={5000} factor={4} fade speed={1} />

        <ambientLight intensity={10} />

        <directionalLight 
          position={[4, 2, -2]}
          intensity={8.5}
          castShadow
        />

        <spotLight 
          position={[-5, 5, 5]} 
          angle={0.4} 
          intensity={3} 
          penumbra={1} 
          decay={4}
          castShadow
        />

        <mesh ref={earthRef} rotation={[0, 0, 0]}>
          <sphereGeometry args={[2.7, 64, 64]} />
          <meshStandardMaterial
            map={texture}
            emissive={"#444444"}
            emissiveIntensity={0.1}
            roughness={0.5}
            metalness={0.1}
            transparent={true}
          />
        </mesh>

        <OrbitControls
          autoRotate
          autoRotateSpeed={rotationSpeed}
          enableZoom={true}
          enablePan={false}
          minDistance={3}
          maxDistance={6}
        />
      </Canvas>
    </motion.div>
  );
};

export default Globe;
