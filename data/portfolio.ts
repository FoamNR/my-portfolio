import { Profile, Project, ExperienceItem, EducationItem, CompetitionItem, SkillCategory } from "@/types/portfolio";

// Years use the Gregorian calendar everywhere, since the page is in English.

export const profileData: Profile = {
  name: "Nonthawat Ramkongmuang",
  nickname: "Foam",
  role: "Software Developer",
  positioning: "I build web apps, LINE bots and Flutter apps.",
  bio: "CS graduate (2026) from Phitsanulok. I've shipped a LINE bot for reporting broken lab computers, a sports venue booking system and a temple website for real users, mostly in PHP, Node.js and Flutter.",
  aboutSnippet: "B.Sc. Computer Science, Pibulsongkram Rajabhat University (2026). Interned at CITCOMS, Naresuan University.",
  workSnippet: "Freelance LINE bot and booking systems, a Nuxt + Express platform from my internship, and a Flutter app for my senior project.",
  aboutHeading: "Small, useful systems for real people",
  aboutBody:
    "Most of what I've built started with someone who had a specific problem: students who needed a quicker way to report broken lab computers, a sports venue that wanted online bookings, a temple that wanted its announcements online. I usually work in PHP and MySQL or Node.js, and use Nuxt or Flutter when a project needs them. Right now I'm looking for a junior web or mobile developer role.",
  aboutHighlights: [
    {
      title: "Top 8",
      subtitle: "PSRU Cyber Hackathon 2026",
      // TODO(owner): if you know the field size, write "8th of N teams".
      desc: "My second time at this hackathon. In 2024 I took part; in 2026 I placed in the top 8, finding and assessing software vulnerabilities.",
    },
    {
      title: "B.Sc. CS",
      subtitle: "Pibulsongkram Rajabhat University, 2022–2026",
      desc: "Senior project: a Flutter and Node.js app for announcements and services in a smart village.",
    },
    {
      title: "Intern",
      subtitle: "CITCOMS, Naresuan University, 2025–2026",
      desc: "Supported the university's information systems and built the Local Wisdom artisan platform in Nuxt, Express and PostgreSQL.",
    },
    {
      title: "Freelance",
      subtitle: "2026 – now",
      desc: "Three client projects so far, all PHP and MySQL. The LINE bot also uses LIFF and the Messaging API.",
    },
  ],
  availability: "Looking for a junior web / mobile role",
  contactHeading: "Get in touch",
  contactBody:
    "I'm looking for a junior role in web or mobile development, and I take on small freelance projects. Email is the fastest way to reach me.",
  languages: [
    { name: "Thai", level: "Native" },
    { name: "English", level: "Basic professional" },
  ],
  contact: {
    email: "Foamnonthawat@gmail.com",
    phone: "+66 98 746 8322",
    location: "Phitsanulok / Phichit, Thailand",
    githubUrl: "https://github.com/FoamNR",
    githubUsername: "github.com/FoamNR",
  },
};

// TODO(owner): add `image` (screenshot in /public/projects/), `link` and `github`
// for each project. Cards show them automatically once they're set.
export const projectsData: Project[] = [
  {
    title: "Computer Lab Issue Reporting LINE Bot",
    category: "web",
    role: "Freelance, 2026 – now",
    description:
      "Students report a broken lab computer from LINE in a few taps; admins get the report instantly. Built on LINE LIFF and the Messaging API with a PHP MVC backend.",
    tech: ["LINE LIFF", "Messaging API", "PHP (MVC)", "MySQL"],
    badge: "LINE Bot",
  },
  {
    title: "Sports Venue Booking System",
    category: "web",
    role: "Freelance",
    description:
      "Online booking for a sports venue: customers pick a time slot, staff manage reservations from their own dashboard.",
    tech: ["PHP", "MySQL"],
    badge: "Web app",
  },
  {
    title: "Local Wisdom Artisan Platform",
    category: "web",
    role: "Internship, CITCOMS 2025–2026",
    description:
      "A platform at Naresuan University for recording local artisans and their products, and showing where they are on a map.",
    tech: ["Nuxt.js", "Express.js", "PostgreSQL"],
    badge: "Full-stack web",
  },
  {
    title: "Wat Kung Waree Website",
    category: "web",
    role: "Freelance",
    description: "Announcements and records for the temple community, with a small admin backend and REST API.",
    tech: ["PHP", "MySQL", "REST API"],
    badge: "Website",
  },
  {
    title: "Smart Village Mobile App",
    category: "mobile",
    role: "Senior project, 2025",
    description: "A Flutter app for village announcements and local services, backed by a Node.js API.",
    tech: ["Flutter", "Node.js", "REST API"],
    badge: "Mobile app",
  },
  {
    title: "PSRU Cyber Hackathon 2026",
    category: "competition",
    role: "Competitor",
    description: "Finding and assessing vulnerabilities in software under time pressure. Placed in the top 8.",
    tech: ["Vulnerability assessment", "Secure code review"],
    badge: "Top 8",
  },
];

// Project details live in the Projects section; experience lists what I did, briefly.
export const experienceData: ExperienceItem[] = [
  {
    title: "Freelance Developer",
    roleType: "Freelance",
    organization: "Self-employed",
    period: "2026 – now",
    descriptionItems: [
      "Built and handed over three systems for clients: a LINE bot for lab issue reports, a sports venue booking system and a temple website.",
      "Handled everything from requirements to deployment, mostly in PHP and MySQL.",
    ],
  },
  {
    title: "Information Systems Intern",
    roleType: "Internship",
    organization: "CITCOMS, Naresuan University",
    period: "2025 – 2026",
    descriptionItems: [
      "Supported and maintained the university's information systems.",
      "Built the Local Wisdom artisan platform (Nuxt.js, Express.js, PostgreSQL).",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "B.Sc. Computer Science",
    institution: "Pibulsongkram Rajabhat University",
    period: "2022 – 2026",
    highlights: ["Senior project: Smart Village mobile app (Flutter, Node.js)."],
  },
  {
    degree: "Vocational Certificate, Business Computer",
    institution: "Phichit Technical College",
    period: "2019 – 2021",
    highlights: ["Graduate project: tourism information website for Sak Lek District."],
  },
];

export const competitionsData: CompetitionItem[] = [
  {
    title: "PSRU Cyber Hackathon 2026",
    desc: "Vulnerability identification & assessment",
    result: "Top 8",
    highlight: true,
  },
  {
    title: "PSRU Cyber Hackathon 2024",
    desc: "Vulnerability assessment challenges",
    result: "Participant",
  },
  {
    title: "The Metaverse Camp 2022",
    desc: "VR development training",
    result: "Completed",
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Frontend & mobile",
    skills: ["React", "Next.js", "Vue.js", "Nuxt.js", "Flutter", "React Native", "JavaScript", "HTML / CSS"],
  },
  {
    title: "Backend & database",
    skills: ["Node.js", "Express.js", "PHP", "C#/.NET", "REST APIs", "PostgreSQL", "MySQL"],
  },
  {
    title: "Integrations",
    skills: ["LINE Messaging API", "LINE LIFF"],
  },
  {
    title: "Tools",
    skills: ["Git / GitHub", "Docker", "Postman", "VS Code"],
  },
];
