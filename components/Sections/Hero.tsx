import React from 'react';
import { SectionWrapper } from '../UI/SectionWrapper';
import { SectionId } from '../../types';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <SectionWrapper id={SectionId.HERO} className="items-start z-10 pointer-events-none">
      <div className="pointer-events-auto w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-12 max-w-7xl mx-auto mt-12">
        
        {/* Text Content - LEFT SIDE (Order 1) */}
        <div className="flex-1 order-1 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-lab-cyan font-mono text-sm md:text-base mb-4 tracking-widest uppercase opacity-80">
            <span className="inline-block w-2 h-2 bg-lab-cyan mr-2 rounded-full animate-pulse"></span>
            System Online
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-6 text-white mix-blend-difference glitch-text" data-text="DINUSHA PUSHPARAJAH">
            DINUSHA<br />PUSHPARAJAH
          </h1>
          
          <div className="flex flex-col gap-6 border-l-0 md:border-l-2 border-lab-dim pl-0 md:pl-6 py-2 items-center md:items-start">
            <div className="text-xl md:text-2xl text-gray-300 font-light">
              Data Scientist <span className="text-lab-dim">|</span> ML Engineer
            </div>
            <div className="text-lab-dim font-mono text-sm max-w-xs">
              &gt; INITIALIZING SPECTRAL INTELLIGENCE LAB<br/>
              &gt; ENGINEERING INTELLIGENCE FROM RAW DATA
            </div>
            
            <a 
              href="https://jumpshare.com/folder/LCmo7zYHqNOhAao6GfMQ" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-3 bg-lab-surface border border-lab-cyan/30 px-6 py-3 text-lab-cyan font-mono text-sm hover:bg-lab-cyan/10 hover:border-lab-cyan transition-all group w-fit"
            >
              <ExternalLink size={16} className="group-hover:rotate-45 transition-transform" />
              VIEW_RESUME / CV
            </a>
          </div>
        </div>

        {/* Profile Holo-Card - RIGHT SIDE (Order 2) */}
        <div className="relative group shrink-0 order-2 md:order-2">
          <div className="absolute -inset-1 bg-gradient-to-r from-lab-cyan via-lab-magenta to-lab-purple opacity-70 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-black overflow-hidden border border-lab-dim">
            {/* Holographic overlay */}
            <div className="absolute inset-0 z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-lab-cyan/10 to-transparent animate-scan"></div>
            
            {/* User Image - PostImg Link */}
            <img 
              src="https://i.postimg.cc/MvD6177f/IMG-20240324-WA0008.jpg" 
              onError={(e) => {
                 e.currentTarget.src = "https://ui-avatars.com/api/?name=Dinusha+Pushparajah&background=0a0a0c&color=00f3ff&size=256";
              }}
              alt="Dinusha Pushparajah" 
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-lab-cyan"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-lab-magenta"></div>
          </div>
          <div className="mt-2 flex justify-between text-[10px] font-mono text-lab-dim">
            <span>ID: DP-9471</span>
            <span className="text-lab-lime animate-pulse">● LIVE</span>
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