export interface SkillCategory {
  category: string;
  tag: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    tag: "lang.sys",
    skills: ["Python", "JavaScript", "TypeScript", "C", "PHP"],
  },
  {
    category: "Frameworks & Libraries",
    tag: "lib.pkg",
    skills: [
      "Next.js",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    category: "Databases",
    tag: "db.store",
    skills: ["MySQL", "MongoDB", "PostgreSQL (Supabase)"],
  },
  {
    category: "Platforms & Hosting",
    tag: "cloud.host",
    skills: ["WordPress", "cPanel", "Vercel", "Linux / VPS"],
  },
  {
    category: "Tools & Environment",
    tag: "tools.env",
    skills: ["Git", "JIRA", "ClickUp", "Postman", "Chrome DevTools", "LaTeX"],
  },
  {
    category: "Methodologies",
    tag: "method.ops",
    skills: [
      "SDLC",
      "Agile (Scrum / Kanban)",
      "REST API Design",
      "Sprint Reviews",
    ],
  },
  {
    category: "Design & Technical Docs",
    tag: "docs.spec",
    skills: [
      "UML Diagrams",
      "ERD Design",
      "Data Flow Diagrams (DFDs)",
      "Software Requirements Specifications (SRS)",
    ],
  },
];
