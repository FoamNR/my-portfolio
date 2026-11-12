export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  githubUsername: string;
}

export interface AboutHighlight {
  title: string;
  subtitle: string;
  desc: string;
}

export interface Profile {
  name: string;
  nickname: string;
  role: string;
  /** One static positioning line shown under the name in the hero. */
  positioning: string;
  bio: string;
  aboutSnippet: string;
  workSnippet: string;
  aboutHeading: string;
  aboutBody: string;
  aboutHighlights: AboutHighlight[];
  availability: string;
  contactHeading: string;
  contactBody: string;
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
  /** Live demo URL. Card shows a "Live site" link when set. */
  link?: string;
  /** Source repo URL. Card shows a "Code" link when set. */
  github?: string;
  /** Screenshot path under /public, e.g. "/projects/linebot.png". Shown as the card header when set. */
  image?: string;
}

export interface ExperienceItem {
  title: string;
  roleType: string;
  organization: string;
  period: string;
  descriptionItems: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  highlights: string[];
}

export interface CompetitionItem {
  title: string;
  desc: string;
  result: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
