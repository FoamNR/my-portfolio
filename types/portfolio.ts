export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  githubUsername: string;
}

export interface Profile {
  name: string;
  nickname: string;
  role: string;
  headlineTitle: string;
  headlineSub: string;
  bio: string;
  aboutSnippet: string;
  workSnippet: string;
  languages: { name: string; level: string }[];
  contact: ContactInfo;
}

export type ProjectCategory = "all" | "web" | "mobile" | "competition";

export interface Project {
  title: string;
  category: "web" | "mobile" | "competition";
  role: string;
  description: string;
  tech: string[];
  badge: string;
  gradient: string;
  link?: string;
  github?: string;
}

export interface ExperienceItem {
  title: string;
  roleType: string;
  organization: string;
  period: string;
  descriptionItems: string[];
  accentColor: "blue" | "indigo" | "emerald" | "teal";
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  highlights: string[];
  accentColor: "emerald" | "teal";
}

export interface CompetitionItem {
  title: string;
  desc: string;
  result: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  colorClass: string;
  skills: string[];
}

