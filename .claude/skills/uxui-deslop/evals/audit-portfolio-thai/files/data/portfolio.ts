import { Profile, Project, ExperienceItem, EducationItem, CompetitionItem, SkillCategory } from "@/types/portfolio";

export const profileData: Profile = {
  name: "Nonthawat Ramkongmuang",
  nickname: "Foam",
  role: "Software Engineer / Developer",
  headlineTitle: "I'm Nonthawat,",
  headlineSub: "a Software Developer",
  bio: "Adaptable Software Developer experienced across web and mobile development with Flutter, React, Next.js, and Node.js. Ready to build efficient, scalable solutions.",
  aboutSnippet: "Graduated with a Bachelor of Science in Computer Science from Pibulsongkram Rajabhat University. Actively participating in tech hackathons & full-stack software development.",
  workSnippet: "Experience developing LINE Bot automated ticketing systems, full-stack booking platforms, community platforms, and mobile apps with Flutter & Nuxt.js.",
  languages: [
    { name: "Thai", level: "Native" },
    { name: "English", level: "Basic Professional" },
  ],
  contact: {
    email: "Foamnonthawat@gmail.com",
    phone: "+66 98 746 8322",
    location: "Phitsanulok / Phichit, Thailand",
    githubUrl: "https://github.com/FoamNR",
    githubUsername: "github.com/FoamNR",
  },
};

export const projectsData: Project[] = [
  {
    title: "Smart Village Mobile App",
    category: "mobile",
    role: "Senior Project (2025)",
    description: "Mobile application built for internal community communication, announcement broadcasts, and localized service management.",
    tech: ["Flutter", "Node.js", "RESTful API"],
    badge: "Mobile App",
    gradient: "from-blue-600 via-indigo-700 to-slate-900",
  },
  {
    title: "Computer Lab Issue Reporting LINE Bot",
    category: "web",
    role: "Freelance Developer (2569 - Present)",
    description: "Automated issue tracking system integrating LINE Messaging API and LINE LIFF with a PHP MVC backend, enabling instant incident logging for students and real-time alerts for admins.",
    tech: ["LINE LIFF", "Messaging API", "PHP (MVC)", "MySQL"],
    badge: "LINE Bot / Web",
    gradient: "from-emerald-600 via-teal-700 to-slate-900",
  },
  {
    title: "Local Wisdom Artisan Web Platform",
    category: "web",
    role: "CITCOMS Internship (2568 - 2569)",
    description: "Full-stack web platform built at Naresuan University to digitize, manage, and map local artisan profiles and cultural heritage products across the region.",
    tech: ["Nuxt.js", "Express.js", "PostgreSQL"],
    badge: "Full-Stack Web",
    gradient: "from-blue-700 via-cyan-800 to-slate-900",
  },
  {
    title: "Sports Venue Booking System",
    category: "web",
    role: "Freelance Project",
    description: "Architected full-stack web application featuring role-based dashboards, slot scheduling, and automated reservation management.",
    tech: ["PHP", "MySQL", "Responsive Frontend"],
    badge: "Web Application",
    gradient: "from-purple-600 via-indigo-800 to-slate-900",
  },
  {
    title: "Wat Kung Waree Information Platform",
    category: "web",
    role: "Freelance Project",
    description: "Responsive informational portal and content management system with REST APIs to streamline community announcements and cultural records.",
    tech: ["PHP", "MySQL", "REST APIs"],
    badge: "Web Platform",
    gradient: "from-amber-600 via-orange-800 to-slate-900",
  },
  {
    title: "PSRU Cyber Hackathon 2026",
    category: "competition",
    role: "Competitor",
    description: "Competitive software vulnerability identification, penetration testing, and secure code analysis — Achieved Top 8 ranking.",
    tech: ["Cybersecurity", "Vulnerability Assessment", "Ethical Hacking"],
    badge: "Ranked Top 8",
    gradient: "from-red-600 via-rose-800 to-slate-900",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    roleType: "Freelance Developer",
    organization: "Freelance",
    period: "2569 – Present (2026)",
    accentColor: "blue",
    descriptionItems: [
      "Computer Lab Issue Reporting LINE Bot: Developed an automated incident tracking system integrating LINE Messaging API and LINE LIFF with a PHP MVC and MySQL backend, enabling instant incident logging for students and real-time alerts for administrators.",
      "Sports Venue Booking System: Architected and developed a full-stack web application using PHP, MySQL, and responsive front-end tools, featuring role-based dashboards, slot scheduling, and automated reservation management.",
      "Wat Kung Waree Information Platform: Built and deployed a responsive informational portal with REST APIs and MySQL for community announcements and records.",
    ],
  },
  {
    title: "Information Systems Intern",
    roleType: "Internship",
    organization: "CITCOMS, Naresuan University",
    period: "2568 – 2569 (2025 – 2026)",
    accentColor: "indigo",
    descriptionItems: [
      "Contributed to the development, support, and maintenance of university information systems.",
      "Local Wisdom Artisan Web Platform: Developed a full-stack web application leveraging Nuxt.js, Express.js, and PostgreSQL to digitize, manage, and map local artisan profiles and cultural heritage products.",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Pibulsongkram Rajabhat University",
    period: "2565 – 2569 (2022 – 2026)",
    accentColor: "emerald",
    highlights: [
      "Senior Project: Developed a Mobile Application for Smart Village Communication and Management using Flutter and Node.js.",
      "Actively participated in national technology competitions and cybersecurity hackathons.",
    ],
  },
  {
    degree: "Vocational Certificate in Business Computer",
    institution: "Phichit Technical College",
    period: "2562 – 2564 (2019 – 2021)",
    accentColor: "teal",
    highlights: [
      "Graduate Project: Designed and developed the Sak Lek District Tourism Information Website.",
    ],
  },
];

export const competitionsData: CompetitionItem[] = [
  {
    title: "PSRU Cyber Hackathon 2026",
    desc: "Software vulnerability identification & assessment",
    result: "Ranked Top 8",
    highlight: true,
  },
  {
    title: "PSRU Cyber Hackathon 2024",
    desc: "Vulnerability assessment & ethical hacking challenges",
    result: "Participant",
  },
  {
    title: "The Metaverse Camp 2022",
    desc: "Trained in VR development & metaverse project concepts",
    result: "Trained",
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Frontend Development",
    colorClass: "text-blue-400",
    skills: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Flutter", "React Native", "JavaScript", "HTML5 / CSS3"],
  },
  {
    title: "Backend & Database",
    colorClass: "text-emerald-400",
    skills: ["Node.js", "Express.js", "RESTful API", "PHP", "C#.NET", "PostgreSQL", "MySQL"],
  },
  {
    title: "AI & Developer Tools",
    colorClass: "text-indigo-400",
    skills: ["ChatGPT", "Claude", "Gemini", "Antigravity", "QwenAI", "Docker", "Git / GitHub", "Postman", "VS Code"],
  },
  {
    title: "Key Strengths & Languages",
    colorClass: "text-amber-400",
    skills: [
      "Problem Solving",
      "Collaborative Teamwork",
      "Continuous Learning",
      "Cybersecurity Basics",
      "LINE API & LIFF",
      "Thai (Native)",
      "English (Basic)",
    ],
  },
];

