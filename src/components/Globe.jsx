import React, { useRef, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei"; // Import Text component
import { TextureLoader } from "three";
import { motion } from "framer-motion";
import EarthTexture from "../assets/earth.jpeg";

const Globe = () => {
  const earthRef = useRef();
  const texture = useLoader(TextureLoader, EarthTexture);
  const [rotationSpeed, setRotationSpeed] = useState(200);

  // Hardcoded location for Bangalore
  const BANGALORE_LAT = 12.971599;
  const BANGALORE_LON = 77.594566;

  // Convert latitude & longitude to 3D Cartesian coordinates
  const latLongToCartesian = (lat, lon, radius = 2.7) => {
    const phi = (90 - lat) * (Math.PI / 180); // Convert latitude to radians
    const theta = (lon + 180) * (Math.PI / 180); // Convert longitude to radians
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi) + 0.15; // Raise marker slightly above surface
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return [x, y, z];
  };

  const markerPosition = latLongToCartesian(BANGALORE_LAT, BANGALORE_LON);

  useEffect(() => {
    // Adjust rotation speed gradually
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
        <directionalLight position={[4, 2, -2]} intensity={8.5} castShadow />
        <spotLight
          position={[-5, 5, 5]}
          angle={0.4}
          intensity={3}
          penumbra={1}
          decay={4}
          castShadow
        />

        {/* Earth Sphere */}
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

        {/* Bangalore 📍 Emoji Marker */}
        <Text
          position={markerPosition}
          fontSize={0.2}
          color="red"
          anchorX="center"
          anchorY="middle"
        >
          📍
        </Text>

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
