import React from 'react';
import { SectionWrapper } from '../UI/SectionWrapper';
import { SectionId } from '../../types';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <SectionWrapper id={SectionId.HERO} className="items-start z-10 pointer-events-none">
      <div className="pointer-events-auto max-w-4xl">
        <h2 className="text-lab-cyan font-mono text-sm md:text-base mb-4 tracking-widest uppercase opacity-80">
          <span className="inline-block w-2 h-2 bg-lab-cyan mr-2 rounded-full animate-pulse"></span>
          System Online
        </h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-6 text-white mix-blend-difference glitch-text" data-text="DINUSHA PUSHPARAJAH">
          DINUSHA<br />PUSHPARAJAH
        </h1>
        
        <div className="flex flex-col md:flex-row gap-6 md:items-end border-l-2 border-lab-dim pl-6 py-2">
          <div className="text-xl md:text-2xl text-gray-300 font-light">
            Data Scientist <span className="text-lab-dim">|</span> ML Engineer
          </div>
          <div className="text-lab-dim font-mono text-sm max-w-xs">
            &gt; INITIALIZING SPECTRAL INTELLIGENCE LAB<br/>
            &gt; ENGINEERING INTELLIGENCE FROM RAW DATA
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 md:left-24 animate-bounce text-lab-dim flex flex-col items-center gap-2">
        <span className="font-mono text-xs rotate-90 origin-left translate-x-4 mb-8">SCROLL TO INITIALIZE</span>
        <ArrowDown size={20} />
      </div>
    </SectionWrapper>
  );
};