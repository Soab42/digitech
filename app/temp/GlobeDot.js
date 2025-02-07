"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const GLOBE_RADIUS = 2;
const DOT_COUNT = 200;
const MAX_CONNECTIONS = 5;
const CONNECTION_DISTANCE = 1;
const ROTATION_SPEED = 0.0005; // Reduced rotation speed

const Globe = () => {
  const pointsRef = useRef(null);
  const linesRef = useRef(null);
  const globeRef = useRef(null);
  const elapsedTimeRef = useRef(0);
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(DOT_COUNT * 3);
    const colors = new Float32Array(DOT_COUNT * 3);

    for (let i = 0; i < DOT_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / DOT_COUNT);
      const theta = Math.sqrt(DOT_COUNT * Math.PI) * phi;

      const x = GLOBE_RADIUS * Math.cos(theta) * Math.sin(phi);
      const y = GLOBE_RADIUS * Math.sin(theta) * Math.sin(phi);
      const z = GLOBE_RADIUS * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      colors[i * 3] = 0.5 + 5 + Math.random() * 0.5;
      colors[i * 3 + 1] = 0.5 + 2 + Math.random() * 0.5;
      colors[i * 3 + 2] = 0.5 + Math.random() * 0.5;
    }

    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current || !linesRef.current || !globeRef.current) return;
    // Update the elapsed time
    elapsedTimeRef.current += delta;
    // Rotate the entire globe group
    globeRef.current.rotation.y += ROTATION_SPEED;
    globeRef.current.rotation.x = Math.cos(elapsedTimeRef.current) * 0.8;
    // globeRef.current.position.y = Math.sin(elapsedTimeRef.current * 0.1) * 2;
    // globeRef.current.position.x = Math.sin(elapsedTimeRef.current * 0.1) * 2;
    globeRef.current.position.z = Math.sin(elapsedTimeRef.current * 0.1) * 2;

    const positions = pointsRef.current.geometry.attributes.position.array;
    const linePositions = [];

    for (let i = 0; i < DOT_COUNT; i++) {
      // Find nearby points and create connections
      let connections = 0;
      for (let j = i + 1; j < DOT_COUNT && connections < MAX_CONNECTIONS; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < CONNECTION_DISTANCE) {
          linePositions.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2]
          );
          linePositions.push(
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          );
          connections++;
        }
      }
    }

    linesRef.current.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
  });

  return (
    <group ref={globeRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 5}
            array={positions}
            itemSize={15}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 5}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} vertexColors />
      </points>
      <lineSegments ref={linesRef}>
        <lineBasicMaterial color="#ffffff" opacity={0.2} transparent />
      </lineSegments>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshBasicMaterial color="#1a237e" transparent opacity={0.1} />
      </mesh>
    </group>
  );
};

const GlobeWithDots = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color={"red"} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Globe />
      <OrbitControls enableZoom={false} enablePan={true} />
    </Canvas>
  );
};
export { GlobeWithDots, Globe };
