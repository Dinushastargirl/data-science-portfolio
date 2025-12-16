import React from 'react';
import { SectionWrapper } from '../UI/SectionWrapper';
import { SectionId } from '../../types';

const StackGroup = ({ title, items, color }: { title: string; items: string[], color: string }) => (
  <div className="border-l border-lab-dim/30 pl-6 py-2 group hover:border-l-2 hover:border-white transition-all duration-300">
    <h3 className={`text-sm font-mono uppercase tracking-widest mb-3 ${color}`}>{title}</h3>
    <ul className="grid grid-cols-2 gap-2">
      {items.map(item => (
        <li key={item} className="text-gray-400 text-sm font-light hover:text-white transition-colors cursor-default">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const TechStack: React.FC = () => {
  return (
    <SectionWrapper id={SectionId.STACK} className="z-10 pointer-events-none justify-center">
      <div className="pointer-events-auto w-full max-w-5xl mx-auto bg-black/40 backdrop-blur-md p-10 border-t border-b border-lab-dim/20">
         <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-lab-lime font-mono text-xl">03.</span>
          <span>Technical Architecture</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <StackGroup 
            title="Core ML" 
            color="text-lab-cyan"
            items={['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter']} 
          />
          <StackGroup 
            title="Deep Learning" 
            color="text-lab-magenta"
            items={['PyTorch', 'TensorFlow', 'Keras', 'CNNs', 'Transformers']} 
          />
          <StackGroup 
            title="NLP" 
            color="text-lab-purple"
            items={['HuggingFace', 'Spacy', 'Word Embeddings', 'LLM Fine-tuning', 'RAG']} 
          />
          <StackGroup 
            title="Systems" 
            color="text-white"
            items={['Rust', 'Docker', 'Kubernetes', 'Linux', 'Git']} 
          />
          <StackGroup 
            title="Data Ops" 
            color="text-lab-lime"
            items={['SQL', 'PostgreSQL', 'Feature Engineering', 'ETL Pipelines', 'MLflow']} 
          />
           <StackGroup 
            title="Visualization" 
            color="text-lab-dim"
            items={['Three.js', 'D3.js', 'Matplotlib', 'Seaborn', 'Tableau']} 
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
