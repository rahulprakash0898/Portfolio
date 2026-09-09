export interface Experience {
  company: string;
  role: string;
  dates: string;
  location: string;
  type?: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
  dates?: string;
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
  location?: string;
}

export interface Project {
  title: string;
  category: "Full Stack" | "Frontend" | "API & DevOps";
  description: string;
  stack: string[];
  bullets: string[];
  githubUrl: string;
  demoUrl?: string;
  isNPM?: boolean;
}

export interface ResumeData {
  basics: {
    name: string;
    titles: string[];
    summary: string[];
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    liveUrl: string;
  };
  experience: Experience[];
  skills: SkillGroup[];
  certifications: string[];
  education: Education[];
  languages: string[];
  projects?: Project[];
}

export interface ImpactHighlight {
  metric: string;
  context: string;
  source: string;
}
