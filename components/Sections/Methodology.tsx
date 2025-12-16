import React from 'react';
import { SectionWrapper } from '../UI/SectionWrapper';
import { SectionId } from '../../types';

export const Methodology: React.FC = () => {
  return (
    <SectionWrapper id={SectionId.METHODOLOGY} className="z-10 pointer-events-none">
      <div className="pointer-events-auto max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-4">
          <span className="text-white font-mono text-xl">05.</span>
          <span>Research Methodology</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-lab-cyan to-transparent -z-10"></div>

          <div className="bg-lab-surface p-6 border border-lab-dim/20 rounded-lg hover:border-lab-cyan/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-lab-cyan/10 flex items-center justify-center mx-auto mb-4 text-lab-cyan font-bold">1</div>
            <h3 className="text-white font-bold mb-2">Hypothesis</h3>
            <p className="text-sm text-gray-400">Formulating testable predictions based on behavioral data and domain constraints.</p>
          </div>

          <div className="bg-lab-surface p-6 border border-lab-dim/20 rounded-lg hover:border-lab-magenta/50 transition-colors">
             <div className="w-12 h-12 rounded-full bg-lab-magenta/10 flex items-center justify-center mx-auto mb-4 text-lab-magenta font-bold">2</div>
            <h3 className="text-white font-bold mb-2">Modeling</h3>
            <p className="text-sm text-gray-400">Iterative design of architectures, balancing performance, accuracy, and latency.</p>
          </div>

          <div className="bg-lab-surface p-6 border border-lab-dim/20 rounded-lg hover:border-lab-lime/50 transition-colors">
             <div className="w-12 h-12 rounded-full bg-lab-lime/10 flex items-center justify-center mx-auto mb-4 text-lab-lime font-bold">3</div>
            <h3 className="text-white font-bold mb-2">Validation</h3>
            <p className="text-sm text-gray-400">Rigorous testing against real-world distributions and edge cases.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};