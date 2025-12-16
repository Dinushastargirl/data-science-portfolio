import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Glitch, Vignette } from '@react-three/postprocessing';
import { GlitchMode, BlendFunction } from 'postprocessing';
import * as THREE from 'three';

interface LabSceneProps {
  scrollProgress: number;
}

const ParticleField = ({ count = 2000, color = '#00f3ff' }) => {
  const points = useRef<THREE.Points>(null!);
  
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 20 + Math.random() * 30; // Radius
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;
    }
    return p;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.001;
      points.current.rotation.x += 0.0005;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

const NeuralCore = ({ scrollProgress }: { scrollProgress: number }) => {
  const meshRef = useRef<THREE.Group>(null!);
  const pointsRef = useRef<THREE.Points>(null!);
  
  // Create a structured grid that morphs
  const [positions, colors] = useMemo(() => {
    const count = 1000;
    const p = new Float32Array(count * 3);
    const c = new Float32Array(count * 3);
    const color1 = new THREE.Color('#00f3ff');
    const color2 = new THREE.Color('#ff00aa');

    for (let i = 0; i < count; i++) {
      // Helix structure
      const t = i / count;
      const angle = t * Math.PI * 20;
      const radius = 2 + Math.sin(t * Math.PI * 8) * 0.5;
      
      p[i * 3] = Math.cos(angle) * radius; // x
      p[i * 3 + 1] = (t - 0.5) * 10;       // y
      p[i * 3 + 2] = Math.sin(angle) * radius; // z

      const mixed = color1.clone().lerp(color2, t);
      c[i * 3] = mixed.r;
      c[i * 3 + 1] = mixed.g;
      c[i * 3 + 2] = mixed.b;
    }
    return [p, c];
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate based on time and scroll
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1 + scrollProgress * Math.PI * 2;
      meshRef.current.rotation.z = scrollProgress * Math.PI;
      
      // Expand/contract based on scroll
      const scale = 1 + scrollProgress * 0.5;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
          <PointMaterial
            vertexColors
            size={0.1}
            sizeAttenuation={true}
            depthWrite={false}
            transparent
            opacity={0.8}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </Float>
    </group>
  );
};

const DataGrid = ({ scrollProgress }: { scrollProgress: number }) => {
  const gridRef = useRef<THREE.Group>(null!);
  
  useFrame(() => {
    if (gridRef.current) {
      // Tilt the floor based on scroll
      const targetRotationX = Math.PI / 2 + (scrollProgress * 0.5);
      gridRef.current.rotation.x = THREE.MathUtils.lerp(gridRef.current.rotation.x, targetRotationX, 0.1);
      
      // Move it down/up
      gridRef.current.position.y = -5 + scrollProgress * 2;
    }
  });

  return (
    <group ref={gridRef} position={[0, -5, 0]} rotation={[Math.PI / 2, 0, 0]}>
       <gridHelper args={[60, 60, '#1a1a1a', '#0a0a0a']} />
    </group>
  );
}

export const LabScene: React.FC<LabSceneProps> = ({ scrollProgress }) => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00aa" />
      
      <group position={[0, 0, -5]}>
         {/* Background field always present */}
        <ParticleField />
        
        {/* Main Neural Object - morphs based on scroll */}
        <NeuralCore scrollProgress={scrollProgress} />
        
        {/* Contextual Data Grid */}
        <DataGrid scrollProgress={scrollProgress} />
      </group>

      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.5} mipmapBlur intensity={1.5} radius={0.4} />
        <Noise opacity={0.1} blendFunction={BlendFunction.OVERLAY} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        <Glitch 
          delay={[1.5, 3.5]} 
          duration={[0.1, 0.3]} 
          strength={[0.1, 0.2]} 
          mode={GlitchMode.SPORADIC} 
          active 
          ratio={0.85}
        />
      </EffectComposer>
    </>
  );
};