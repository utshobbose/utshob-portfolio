export interface Profile {
  name: string;
  initials: string;
  badge: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
  education: Array<{
    institution: string;
    degree: string;
    period: string;
    location: string;
  }>;
  personalInterests: string[];
}

export const profile: Profile = {
  name: "Utshob Bose",
  initials: "UB",
  badge: "> whoami",
  role: "Full-Stack Developer · CS Graduate · AI Enthusiast",
  summary:
    "Computer Science graduate specializing in full-stack web development, system design, and software engineering. Proficient in building scalable applications with Next.js, React.js, Express.js, and the MERN stack. Experienced in database management, agile methodologies, REST API design, WordPress/cPanel administration, and technical documentation (ERDs, DFDs, UML diagrams).",
  location: "Dhaka, Bangladesh",
  email: "officialutshob@gmail.com",
  resumeUrl: "/Resume_Portfolio.pdf",
  socials: {
    github: "https://github.com/utshobbose",
    linkedin: "https://www.linkedin.com/in/utshob-bose-135812373/",
    portfolio: "https://bose-portfolio.vercel.app",
  },
  education: [
    {
      institution: "BRAC University",
      degree: "Bachelor of Science in Computer Science",
      period: "2022 – 2026",
      location: "Dhaka, Bangladesh",
    },
    {
      institution: "Birshrestho Noor Muhammad Public College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2019",
      location: "Dhaka, Bangladesh",
    },
  ],
  personalInterests: [
    "Poetry writing and literature (Charles Bukowski, Edgar Allan Poe, Kazi Nazrul Islam)",
    "Music (singing and playing guitar)",
  ],
};
