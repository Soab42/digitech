"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const GLOBE_RADIUS = 1.5;
const DOT_COUNT = 500;
const SHAPE_TYPES = ["sphere", "cube", "tetrahedron", "octahedron"];

const generateShapePositions = (shapeType, dotCount) => {
  const positions = new Float32Array(dotCount * 3);
  const colors = new Float32Array(dotCount * 3);

  switch (shapeType) {
    case "sphere":
      for (let i = 0; i < dotCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / dotCount);
        const theta = Math.sqrt(dotCount * Math.PI) * phi;

        positions[i * 3] = GLOBE_RADIUS * Math.cos(theta) * Math.sin(phi);
        positions[i * 3 + 1] = GLOBE_RADIUS * Math.sin(theta) * Math.sin(phi);
        positions[i * 3 + 2] = GLOBE_RADIUS * Math.cos(phi);

        colors[i * 3] = Math.random();
        colors[i * 3 + 1] = Math.random();
        colors[i * 3 + 2] = Math.random();
      }
      break;
    case "cube":
      for (let i = 0; i < dotCount; i++) {
        const x = (Math.random() - 0.5) * 2 * GLOBE_RADIUS;
        const y = (Math.random() - 0.5) * 2 * GLOBE_RADIUS;
        const z = (Math.random() - 0.5) * 2 * GLOBE_RADIUS;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        colors[i * 3] = Math.random();
        colors[i * 3 + 1] = Math.random();
        colors[i * 3 + 2] = Math.random();
      }
      break;
    case "tetrahedron":
      const vertices = [
        [1, 1, 1],
        [-1, -1, 1],
        [-1, 1, -1],
        [1, -1, -1],
      ];
      for (let i = 0; i < dotCount; i++) {
        const v1 = vertices[Math.floor(Math.random() * 4)];
        const v2 = vertices[Math.floor(Math.random() * 4)];
        const t = Math.random();

        positions[i * 3] = GLOBE_RADIUS * (v1[0] * (1 - t) + v2[0] * t);
        positions[i * 3 + 1] = GLOBE_RADIUS * (v1[1] * (1 - t) + v2[1] * t);
        positions[i * 3 + 2] = GLOBE_RADIUS * (v1[2] * (1 - t) + v2[2] * t);

        colors[i * 3] = Math.random();
        colors[i * 3 + 1] = Math.random();
        colors[i * 3 + 2] = Math.random();
      }
      break;
    case "octahedron":
      for (let i = 0; i < dotCount; i++) {
        const x = Math.random() * 2 - 1;
        const y = Math.random() * 2 - 1;
        const z = Math.random() * 2 - 1;
        const sum = Math.abs(x) + Math.abs(y) + Math.abs(z);

        positions[i * 3] = GLOBE_RADIUS * (x / sum);
        positions[i * 3 + 1] = GLOBE_RADIUS * (y / sum);
        positions[i * 3 + 2] = GLOBE_RADIUS * (z / sum);

        colors[i * 3] = Math.random();
        colors[i * 3 + 1] = Math.random();
        colors[i * 3 + 2] = Math.random();
      }
      break;
  }
  return [positions, colors];
};

const Globe = () => {
  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);
  const pointsRef = useRef(null);
  const linesRef = useRef(null);
  const globeRef = useRef(null);
  const elapsedTimeRef = useRef(0);
  const targetPositionsRef = useRef(null);

  const [positions, colors] = useMemo(
    () => generateShapePositions(SHAPE_TYPES[currentShapeIndex], DOT_COUNT),
    [currentShapeIndex]
  );

  useFrame((state, delta) => {
    if (!pointsRef.current || !linesRef.current || !globeRef.current) return;

    elapsedTimeRef.current += delta;
    const time = elapsedTimeRef.current;

    // Shape transition logic
    if (time % 5 < delta) {
      const nextIndex = (currentShapeIndex + 1) % SHAPE_TYPES.length;
      setCurrentShapeIndex(nextIndex);
      targetPositionsRef.current = generateShapePositions(
        SHAPE_TYPES[nextIndex],
        DOT_COUNT
      )[0];
    }

    const currentPositions =
      pointsRef.current.geometry.attributes.position.array;

    // Smooth morphing between shapes
    if (targetPositionsRef.current) {
      for (let i = 0; i < DOT_COUNT * 3; i++) {
        currentPositions[i] +=
          (targetPositionsRef.current[i] - currentPositions[i]) * 0.05;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Rotation and dynamic movement
    // globeRef.current.rotation.x = Math.cos(time) * 0.2;
    // globeRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
    // globeRef.current.position.z = Math.sin(time * 0.1) * 2;
  });

  return (
    <group ref={globeRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} vertexColors />
      </points>
      <lineSegments ref={linesRef}>
        <lineBasicMaterial color="#ffffff" opacity={0.2} transparent />
      </lineSegments>
    </group>
  );
};

const GlobeWithDots = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <Globe />
      <OrbitControls enableZoom={false} enablePan={true} />
    </Canvas>
  );
};

export { GlobeWithDots, Globe };
