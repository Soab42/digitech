"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, GradientTexture } from "@react-three/drei";
import * as THREE from "three";

const NEURON_COUNT = 500;
const BRAIN_RADIUS = 2;

const NeuralBrain = () => {
  const pointsRef = useRef(null);
  const linesRef = useRef(null);
  const brainRef = useRef(null);
  const elapsedTimeRef = useRef(0);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(NEURON_COUNT * 3);
    const colors = new Float32Array(NEURON_COUNT * 3);

    for (let i = 0; i < NEURON_COUNT; i++) {
      // Distribute neurons in a brain-like spherical shape with some randomness
      const radius = BRAIN_RADIUS * (0.8 + Math.random() * 0.4);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(1 - 2 * Math.random());

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Neural network-inspired color gradient
      colors[i * 3] = 0.2 + Math.random() * 0.5; // Blue-ish base
      colors[i * 3 + 1] = 0.1 + Math.random() * 0.3; // Green tint
      colors[i * 3 + 2] = 0.5 + Math.random() * 0.5; // Varying blue intensity
    }

    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current || !linesRef.current || !brainRef.current) return;

    elapsedTimeRef.current += delta;
    const time = elapsedTimeRef.current;

    const positions = pointsRef.current.geometry.attributes.position.array;
    const linePositions = [];

    // Dynamic neural network connection simulation
    for (let i = 0; i < NEURON_COUNT; i++) {
      // Subtle pulsing and movement
      positions[i * 3] += Math.sin(time + i) * 0.005;
      positions[i * 3 + 1] += Math.cos(time + i) * 0.005;
      positions[i * 3 + 2] += Math.sin(time * 0.5 + i) * 0.005;

      // Create neural connections
      let connections = 0;
      for (let j = i + 1; j < NEURON_COUNT && connections < 3; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 0.5) {
          linePositions.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          );
          connections++;
        }
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );

    // Subtle rotation
    brainRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    brainRef.current.rotation.y = Math.cos(time * 0.2) * 0.1;
  });

  return (
    <group ref={brainRef}>
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
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments ref={linesRef}>
        <lineBasicMaterial
          color="#4444ff"
          opacity={0.2}
          transparent
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};

const AIBrainVisualization = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      {/* <color attach="background" args={["#000011"]} /> */}
      <ambientLight intensity={1.1} />
      <NeuralBrain />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export { AIBrainVisualization, NeuralBrain };
