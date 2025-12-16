import React from 'react';
import { SectionWrapper } from '../UI/SectionWrapper';
import { SectionId } from '../../types';
import { BadgeCheck, Brain, Shield, Layout, Code, Terminal } from 'lucide-react';

interface Cert {
  id: string;
  name: string;
  issuer: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
}

const certs: Cert[] = [
  {
    id: 'C-01',
    name: 'AWS Machine Learning Foundations',
    issuer: 'AWS / Udacity',
    icon: <Brain size={24} />,
    color: 'text-lab-magenta',
    borderColor: 'group-hover:border-lab-magenta/50'
  },
  {
    id: 'C-02',
    name: 'Introduction to Generative AI',
    issuer: 'AWS / Udacity',
    icon: <Terminal size={24} />,
    color: 'text-lab-cyan',
    borderColor: 'group-hover:border-lab-cyan/50'
  },
  {
    id: 'C-03',
    name: 'Critical Infrastructure Security',
    issuer: 'OPSWAT',
    icon: <Shield size={24} />,
    color: 'text-lab-purple',
    borderColor: 'group-hover:border-lab-purple/50'
  },
  {
    id: 'C-04',
    name: 'Google UX Design Specialization',
    issuer: 'Google',
    icon: <Layout size={24} />,
    color: 'text-lab-lime',
    borderColor: 'group-hover:border-lab-lime/50'
  },
  {
    id: 'C-05',
    name: 'Meta Programming with JavaScript',
    issuer: 'Meta',
    icon: <Code size={24} />,
    color: 'text-white',
    borderColor: 'group-hover:border-white/50'
  }
];

export const Certifications: React.FC = () => {
  return (
    <SectionWrapper id={SectionId.CERTIFICATIONS} className="z-10 pointer-events-none justify-center">
      <div className="pointer-events-auto w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-gray-500 font-mono text-xl">04.</span>
          <span>Verified Credentials</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <div 
              key={cert.id}
              className={`group bg-lab-surface/40 backdrop-blur-sm border border-lab-dim/20 p-6 relative overflow-hidden transition-all duration-300 hover:bg-lab-surface/60 ${cert.borderColor}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded bg-white/5 ${cert.color}`}>
                  {cert.icon}
                </div>
                <span className="font-mono text-[10px] text-lab-dim border border-lab-dim/30 px-2 py-0.5 rounded">
                  ID: {cert.id}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-100 mb-1 leading-tight group-hover:text-white transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-400 font-mono">
                Issued by: <span className={cert.color}>{cert.issuer}</span>
              </p>

              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                 <BadgeCheck size={64} className="text-black/50 stroke-lab-dim" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};