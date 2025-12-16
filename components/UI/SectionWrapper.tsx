import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen w-full relative flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 ${className}`}
    >
      {children}
    </section>
  );
};
