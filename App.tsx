import React, { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { LabScene } from './components/Three/LabScene';
import { Overlay } from './components/Layout/Overlay';
import { Loader } from '@react-three/drei';
import { Volume2, VolumeX } from 'lucide-react';

// Background Ambient Audio Controller
const SoundController = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/03/24/audio_1d78274719.mp3?filename=atmosphere-deep-space-11235.mp3'); 
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={toggleSound}
      className="fixed bottom-6 right-6 z-50 p-3 bg-black/50 border border-lab-dim/30 rounded-full text-lab-cyan hover:bg-lab-cyan/10 hover:border-lab-cyan transition-all backdrop-blur-sm"
      aria-label="Toggle Ambient Audio"
    >
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
};

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
      
      {/* Audio Control */}
      <SoundController />

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