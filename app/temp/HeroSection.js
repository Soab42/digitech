// First install these dependencies:
// npm install @react-three/fiber @react-three/drei three @types/three gsap

// src/components/hero/HeroSection.tsx
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { gsap } from "gsap";
import { Globe } from "./Hero2";

// Stars component for the background
const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Animated text that floats
const FloatingText = ({ text, position }) => {
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current.position, {
        y: position[1] + 0.1,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
  }, [position]);

  return (
    <mesh ref={textRef} position={position}>
      <textGeometry
        args={[
          text,
          {
            size: 0.2,
            height: 0.05,
          },
        ]}
      />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
};

// Main Hero Component
const HeroSection = () => {
  const containerRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((event.clientY - rect.top) / rect.height) * 2 + 1,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden z-10"
      // onMouseMove={handleMouseMove}
    >
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
      </Canvas>

      {/* Content Overlay */}
      <div className="relative z-10 h-full w-full flex items-center justify-center ">
        <div className="text-center text-white p-8 z-10">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            Your Organization Name
          </h1>
          <p className="text-xl mb-8 animate-slide-up">
            Creating digital experiences that inspire
          </p>
          <button
            className="bg-white text-black px-8 py-3 rounded-full 
                           hover:bg-opacity-90 transition-all duration-300
                           transform hover:scale-105"
          >
            Explore Our Work
          </button>
        </div>
      </div>

      {/* Gradient Overlay */}
      {/* <div
        className="absolute inset-0 bg-gradient-to-b 
                    from-blue-900 to-blue-950 
                    pointer-events-none"
      /> */}
    </div>
  );
};

export default HeroSection;

// src/styles/globals.css
// Add these animations
