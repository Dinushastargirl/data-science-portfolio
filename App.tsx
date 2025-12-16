import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { LabScene } from './components/Three/LabScene';
import { Overlay } from './components/Layout/Overlay';
import { Loader } from '@react-three/drei';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <div className="fixed inset-0 w-full h-full bg-lab-bg overflow-hidden text-lab-text font-sans selection:bg-lab-cyan selection:text-black">
      
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ antialias: true, alpha: false }}>
          <color attach="background" args={['#030305']} />
          <Suspense fallback={null}>
             <LabScene scrollProgress={scrollProgress} />
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Content Layer */}
      <Overlay onScroll={setScrollProgress} />

      {/* Loading Overlay */}
      <Loader 
        containerStyles={{ background: '#030305', zIndex: 1000 }}
        innerStyles={{ width: '200px', height: '2px', background: '#333' }}
        barStyles={{ height: '2px', background: '#00f3ff' }}
        dataStyles={{ fontFamily: 'monospace', fontSize: '12px', color: '#666' }}
      />
      
      {/* Decorative Fixed Overlay Elements */}
      <div className="fixed top-6 left-6 z-50 pointer-events-none mix-blend-exclusion hidden md:block">
        <div className="w-2 h-2 bg-white rounded-full mb-2 animate-pulse"></div>
        <div className="text-[10px] font-mono text-white/50 tracking-widest">
          SYS.STATUS: ONLINE<br/>
          FPS: OPTIMAL<br/>
          RENDER: WEBGL
        </div>
      </div>

      <div className="fixed top-6 right-6 z-50 pointer-events-none mix-blend-exclusion hidden md:block">
        <div className="text-[10px] font-mono text-white/50 tracking-widest text-right">
          LAT: 34.0522<br/>
          LNG: -118.2437<br/>
          SEC: ENCRYPTED
        </div>
      </div>

    </div>
  );
};

export default App;