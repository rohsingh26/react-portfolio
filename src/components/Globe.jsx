import React, { useRef, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader } from "three";
import { motion } from "framer-motion";
import EarthTexture from "../assets/earth1.gif";

const Globe = () => {
  const earthRef = useRef();
  const texture = useLoader(TextureLoader, EarthTexture);
  const [rotationSpeed, setRotationSpeed] = useState(200); // Start with high speed

  useEffect(() => {
    // Sequence of speed transitions
    const speedStages = [
      { speed: 100, delay: 2000 }, // After 2s, slow to 100
      { speed: 50, delay: 4000 }, // After 4s, slow to 50
      { speed: 10, delay: 6000 }, // After 6s, slow to 10
      { speed: 5.5, delay: 8000 }, // After 8s, normal speed
    ];

    speedStages.forEach(({ speed, delay }) => {
      setTimeout(() => setRotationSpeed(speed), delay);
    });

    return () => clearTimeout(); // Cleanup to prevent memory leaks
  }, []);

  return (
    <motion.div
      className="w-full h-[50vh] flex justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Canvas className="w-full h-full">
        {/* Background glittering stars effect */}
        <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* Lighting for the globe */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 0, 2]} />

        {/* Rotating Globe */}
        <mesh ref={earthRef} rotation={[0, 0, 0]}>
          <sphereGeometry args={[2.5, 64, 64]} /> {/* Adjusted size */}
          <meshStandardMaterial map={texture} />
        </mesh>

        {/* Controls for zoom & rotation */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={rotationSpeed}
          enableZoom={true}
        />
      </Canvas>
    </motion.div>
  );
};

export default Globe;
