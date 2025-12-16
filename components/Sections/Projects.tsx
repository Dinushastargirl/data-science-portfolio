import React from 'react';
import { SectionWrapper } from '../UI/SectionWrapper';
import { SectionId, Project } from '../../types';
import { ExternalLink, Github } from 'lucide-react';

const projects: Project[] = [
  {
    id: 'p1',
    title: 'NutriGPT',
    subtitle: 'NLP Dietary Quantification Engine',
    category: 'NLP / LLM',
    description: [
      'Engineered a pipeline to transform unstructured natural language into structured dietary datasets.',
      'Utilized LLM reasoning for nutrient quantification and extraction logic.'
    ],
    focus: ['Unstructured → Structured', 'Feature Extraction', 'Quantification Logic'],
    tech: ['Python', 'OpenAI API', 'Pandas', 'Vector DB'],
    color: 'text-lab-cyan',
    link: 'https://nutrigpt-new-4cjv.vercel.app/'
  },
  {
    id: 'p2',
    title: 'AI Skin Scanner',
    subtitle: 'Computer Vision Classification System',
    category: 'Computer Vision',
    description: [
      'Developed a privacy-first CNN architecture for dermatological classification.',
      'Optimized inference latency for mobile edge deployment.'
    ],
    focus: ['Image Preprocessing', 'CNN Inference', 'Latency Optimization'],
    tech: ['PyTorch', 'OpenCV', 'FastAPI'],
    color: 'text-lab-magenta'
  },
  {
    id: 'p3',
    title: 'Animal Vision Spectrum',
    subtitle: 'Multispectral Perception Modeling',
    category: 'Simulation',
    description: [
      'Modeled biological vision systems mapping UV, IR, and RGB spectrums.',
      'Simulated feature-space transformations for non-human perception.'
    ],
    focus: ['Spectral Mapping', 'Bio-simulation', 'Feature Space'],
    tech: ['Three.js', 'WebGL', 'Python'],
    color: 'text-lab-lime',
    link: 'https://merry-phoenix-e0c270.netlify.app/'
  },
  {
    id: 'p4',
    title: 'KalaVerse',
    subtitle: 'AI System Aggregation Platform',
    category: 'System Architecture',
    description: [
      'Designed a modular aggregation platform for orchestrating multiple AI microservices.',
      'Focus on API orchestration and scalable system design.'
    ],
    focus: ['Orchestration', 'Microservices', 'Modular Design'],
    tech: ['Docker', 'Kubernetes', 'Redis'],
    color: 'text-lab-purple',
    link: 'https://cc-kala-verse.vercel.app/'
  },
  {
    id: 'p5',
    title: 'Behavioral Algorithm',
    subtitle: 'Experimental Logic System',
    category: 'Data Ops',
    description: [
      'Reframed marketing experimentation into a rigorous data science workflow.',
      'Processed 15,000+ data points to validate algorithmic logic.'
    ],
    focus: ['Hypothesis Testing', 'Data Collection', 'A/B Logic'],
    tech: ['SciPy', 'SQL', 'Tableau'],
    color: 'text-white',
    link: 'https://www.multilaccolorher.com'
  }
];

const archives = [
  { name: 'RGB Genera', link: 'https://visionary-basbousa-7a0e0b.netlify.app/', type: 'Generative' },
  { name: 'Content Generator', link: 'https://magical-melomakarona-4b3187.netlify.app/', type: 'GenAI' },
  { name: 'Price Comparator', link: 'https://darling-otter-35a327.netlify.app/', type: 'Data Scraping' },
  { name: 'Memory Tree', link: 'https://creative-faloodeh-1be87b.netlify.app/', type: 'Data Structure' },
  { name: 'Nutriline', link: 'https://jovial-meerkat-f7c7b4.netlify.app/', type: 'Web App' }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative mb-32 flex ${isEven ? 'justify-start' : 'justify-end'} w-full`}>
      <div className="w-full md:w-2/3 lg:w-1/2 bg-lab-surface/90 backdrop-blur border border-lab-dim/20 p-8 rounded-sm hover:border-lab-dim/50 transition-colors duration-300">
        <div className="flex items-center justify-between mb-4">
          <span className={`font-mono text-xs px-2 py-1 bg-white/5 rounded ${project.color} border border-current opacity-80`}>
            {project.category}
          </span>
          <div className="flex gap-4 text-gray-400">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Github Repo">
                <Github size={18} className="hover:text-white cursor-pointer transition-colors" />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                <ExternalLink size={18} className="hover:text-white cursor-pointer transition-colors" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{project.title}</h3>
        <h4 className={`text-lg font-mono mb-6 ${project.color} opacity-90`}>{project.subtitle}</h4>

        <div className="mb-6 space-y-3 text-gray-400 font-light text-sm">
          {project.description.map((desc, i) => (
            <p key={i} className="flex gap-2 leading-relaxed">
              <span className="text-lab-dim font-bold">›</span> 
              <span dangerouslySetInnerHTML={{
                __html: desc.replace(
                  /(unstructured|structured|reasoning|quantification|privacy-first|CNN|latency|spectral|transformations|orchestration|microservices|experimentation|algorithmic)/gi,
                  (match) => `<span class="${project.color} font-medium opacity-100 border-b border-white/10">${match}</span>`
                )
              }} />
            </p>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 border-t border-lab-dim/20 pt-4">
          <div>
            <h5 className="text-[10px] font-mono text-lab-dim mb-2 uppercase tracking-wider">Core Focus</h5>
            <ul className="text-sm text-gray-300 space-y-1 font-mono">
              {project.focus.map(f => <li key={f}>+ {f}</li>)}
            </ul>
          </div>
          <div>
             <h5 className="text-[10px] font-mono text-lab-dim mb-2 uppercase tracking-wider">Tech Stack</h5>
             <div className="flex flex-wrap gap-2">
               {project.tech.map(t => (
                 <span key={t} className={`text-xs border px-2 py-0.5 rounded bg-black/50 ${project.color} border-opacity-30 border-current`}>
                   {t}
                 </span>
               ))}
             </div>
          </div>
        </div>
        
        {/* Decorative ID */}
        <div className="absolute -top-6 -left-6 text-8xl font-bold text-white/5 pointer-events-none select-none font-mono">
          0{index + 1}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <SectionWrapper id={SectionId.PROJECTS} className="z-10 pointer-events-none">
      <div className="pointer-events-auto w-full">
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-4 mb-4">
            <span className="text-lab-magenta font-mono text-xl">02.</span>
            <span>Core Research Modules</span>
          </h2>
          <p className="text-gray-400 font-mono text-xs tracking-[0.2em] uppercase">Deployed Systems & Experiments</p>
        </div>

        <div className="flex flex-col mb-32">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Prototype Archives */}
        <div className="max-w-3xl mx-auto border-t border-lab-dim/20 pt-16">
           <h3 className="text-xl font-bold text-center mb-8 flex items-center justify-center gap-2">
             <span className="w-2 h-2 bg-lab-dim rounded-full animate-pulse"></span>
             Prototype Archives
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {archives.map((arch) => (
               <a 
                key={arch.name} 
                href={arch.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-lab-surface/50 border border-lab-dim/10 hover:border-lab-cyan/30 hover:bg-lab-surface transition-all group"
               >
                 <span className="text-gray-300 font-mono text-sm group-hover:text-white transition-colors">{arch.name}</span>
                 <div className="flex items-center gap-3">
                   <span className="text-[10px] text-lab-dim uppercase tracking-wider">{arch.type}</span>
                   <ExternalLink size={14} className="text-lab-dim group-hover:text-lab-cyan transition-colors" />
                 </div>
               </a>
             ))}
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
};