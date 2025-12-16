export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string[];
  focus: string[];
  tech: string[];
  color: string;
  link?: string;
  github?: string;
}

export interface ScrollState {
  progress: number; // 0 to 1
  scroll: number; // pixel value
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  PROJECTS = 'projects',
  STACK = 'stack',
  CERTIFICATIONS = 'certifications',
  METHODOLOGY = 'methodology',
  CONTACT = 'contact'
}