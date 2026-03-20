export interface Project {
  name: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  tags: string[];
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  highlights: string[];
  tags: string[];
}

export interface Achievement {
  title: string;
  year: string;
}

export interface EducationEntry {
  id: string;
  degree: string;
  degreeType: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  focusAreas: string[];
  thesis?: {
    title: string;
    description: string;
    technologies?: string[];
    link?: string;
  };
  keyLearnings: string[];
  grade?: string;
}

export interface ContactMethod {
  icon: any;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  ariaLabel: string;
}
