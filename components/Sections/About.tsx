import React from 'react';
import { SectionWrapper } from '../UI/SectionWrapper';
import { SectionId } from '../../types';

export const About: React.FC = () => {
  return (
    <SectionWrapper id={SectionId.ABOUT} className="items-end z-10 pointer-events-none">
      <div className="pointer-events-auto max-w-2xl bg-lab-bg/80 backdrop-blur-sm border border-lab-dim/30 p-8 md:p-12 relative overflow-hidden group">
        
        {/* Decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-lab-purple/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-1 bg-lab-cyan/50"></div>

        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
          <span className="text-lab-cyan font-mono text-xl">01.</span>
          <span>Transition Narrative</span>
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed font-light">
          <p>
            My foundation lies in understanding human behavior through the lens of interactive systems. 
            Initially designing <strong className="text-white">marketing & UX architectures</strong>, I worked directly with large-scale user data signals.
          </p>
          
          <p>
            The pivotal shift occurred when I realized that observing behavior wasn't enough—I wanted to model it.
            I transitioned fully into <strong className="text-white">Data Science</strong> to engineer systems that don't just track metrics, 
            but predict outcomes and automate complex reasoning.
          </p>
          
          <p className="border-l-2 border-lab-lime pl-4 text-sm font-mono text-gray-400">
            CURRENT FOCUS: <br/>
            Computer Vision, NLP Systems, and Human-Centered Modeling.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
