import React, { useRef, useEffect } from 'react';
import { Hero } from '../Sections/Hero';
import { About } from '../Sections/About';
import { Projects } from '../Sections/Projects';
import { TechStack } from '../Sections/TechStack';
import { Certifications } from '../Sections/Certifications';
import { Methodology } from '../Sections/Methodology';
import { SectionId } from '../../types';
import { Mail, Linkedin, Github } from 'lucide-react';

interface OverlayProps {
  onScroll: (progress: number) => void;
}

export const Overlay: React.FC<OverlayProps> = ({ onScroll }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const totalHeight = el.scrollHeight - el.clientHeight;
      const progress = totalHeight > 0 ? el.scrollTop / totalHeight : 0;
      onScroll(progress);
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [onScroll]);

  return (
    <div 
      ref={scrollRef} 
      className="absolute top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth z-20"
      style={{ scrollBehavior: 'smooth' }}
    >
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Certifications />
      <Methodology />
      
      {/* Contact Section / Footer */}
      <section id={SectionId.CONTACT} className="py-24 px-6 text-center z-10 relative bg-gradient-to-t from-black to-transparent">
        <h2 className="text-2xl font-mono text-gray-500 mb-8">END TRANSMISSION</h2>
        <div className="flex justify-center gap-8 mb-12">
          <a 
            href="mailto:dinushapushparajah@gmail.com" 
            className="text-gray-400 hover:text-lab-cyan transition-colors flex flex-col items-center gap-2"
          >
            <Mail size={24} />
            <span className="text-xs font-mono">EMAIL</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/dinusha-pushparajah-747a44215/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-lab-cyan transition-colors flex flex-col items-center gap-2"
          >
            <Linkedin size={24} />
            <span className="text-xs font-mono">LINKEDIN</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/dinusha-pushparajah-747a44215/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-lab-cyan transition-colors flex flex-col items-center gap-2"
          >
            <Github size={24} />
            <span className="text-xs font-mono">GITHUB</span>
          </a>
        </div>
        <p className="text-xs text-gray-700 font-mono">
          © {new Date().getFullYear()} DINUSHA PUSHPARAJAH. ALL SYSTEMS OPERATIONAL.
        </p>
      </section>
    </div>
  );
};