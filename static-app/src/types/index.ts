export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  year: string;
  links: {
    github?: string;
    demo?: string;
    video?: string;
    store?: string;
  };
  details?: {
    overview: string;
    challenges: string;
    solutions: string;
    results: string;
  };
}

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: "electric-blue" | "vibrant-purple";
  skills: Skill[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: "electric-blue" | "vibrant-purple";
}

export interface MeetingType {
  value: string;
  label: string;
  icon: string;
  duration: string;
  description: string;
}