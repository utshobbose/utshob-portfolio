export interface ProjectItem {
  id: string;
  processName: string;
  name: string;
  tagline: string;
  year: string;
  featured?: boolean;
  role?: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const featuredVenture: ProjectItem = {
  id: "science-simulab",
  processName: "sciencesimulab.exe",
  name: "Science Simulab",
  role: "Tech Co-founder & Lead Architect",
  tagline: "Interactive EdTech Simulation & Virtual Laboratory Platform",
  year: "2025 – Present",
  featured: true,
  description:
    "Co-founded and architecting an interactive edtech platform designed to eliminate physical lab barriers by providing high-fidelity virtual scientific simulation experiments for STEM students and institutions.",
  highlights: [
    "Architecting interactive simulation components for physics, chemistry, and biology with real-time parameter tweaking and canvas rendering.",
    "Engineering high-performance React and Express.js full-stack architecture with modular state management and responsive visualization.",
    "Building educator dashboard workflows for student lab assignment tracking, real-time telemetry, and automated evaluation metrics.",
  ],
  tech: [
    "React",
    "Express.js",
    "Node.js",
    "TypeScript",
    "Canvas API",
    "Tailwind CSS",
    "MongoDB",
  ],
  liveUrl: "https://sciencesimulab.com",
  githubUrl: "https://github.com/Science-Simulab",
};

export const projects: ProjectItem[] = [
  {
    id: "fittrack",
    processName: "fittrack.exe",
    name: "FitTrack",
    tagline: "AI-Powered Fitness & Wellness Management Platform",
    year: "2025",
    description:
      "Comprehensive fitness management web app covering account management, BMI/calorie calculators, personalized meal planning, and water-intake tracker.",
    highlights: [
      "Integrated AI-powered yoga and workout routine generation using the Groq AI API for ultra-low-latency guidance.",
      "Built a nearby-gyms locator with OpenStreetMap API and geolocation to help users find fitness centers nearby.",
      "Engineered a progress-tracking logbook, body-measurement history charts, and an integrated supplements storefront.",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Groq AI API",
      "OpenStreetMap API",
    ],
    liveUrl: "https://fittrack-live.vercel.app",
    githubUrl: "https://github.com/utshobbose/FitTrack",
  },
  {
    id: "smart-analyzer",
    processName: "smartanalyzer.exe",
    name: "Smart Resume Analyzer",
    tagline: "AI Resume Parsing & Job Recommendation Platform",
    year: "2025",
    description:
      "Full-stack platform that parses PDF resumes using natural language processing to extract skills and semantically match candidates against target job descriptions.",
    highlights: [
      "Built a dedicated Python/FastAPI microservice utilizing spaCy NER and sentence-transformer embeddings for semantic NLP.",
      "Implemented cosine-similarity scoring between resume embeddings and job vacancies to calculate visual match scores.",
      "Engineered search/filtering by skillset, role seniority, and match affinity with MongoDB and secure JWT authentication.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Express.js",
      "Python",
      "FastAPI",
      "spaCy",
      "MongoDB",
    ],
    githubUrl: "https://github.com/utshobbose/SmartAnalyzer",
  },
  {
    id: "hollowink",
    processName: "hollowink.exe",
    name: "HollowInk",
    tagline: "Atmospheric Bengali Folklore & Horror Blog Platform",
    year: "2026",
    description:
      "Atmospheric dark-mode literary blog platform showcasing curated folklore, psychological, and supernatural stories with customized reading typography.",
    highlights: [
      "Structured modular component and page architecture with a centralized story data layer built to scale effortlessly.",
      "Designed immersive UI/UX with eerie thematic micro-interactions, custom typography, smooth transitions, and responsive reading views.",
    ],
    tech: ["React", "React Router", "Tailwind CSS", "Custom Fonts"],
    liveUrl: "https://hollowink.vercel.app",
    githubUrl: "https://github.com/utshobbose/HollowInk",
  },
  {
    id: "throttler",
    processName: "throttler.exe",
    name: "Throttler",
    tagline: "Bike E-Commerce & Doorstep Mechanic Booking Service",
    year: "2025",
    description:
      "Full-stack platform merging a motorcycle and cycle e-commerce storefront with on-demand doorstep maintenance scheduling in a single flow.",
    highlights: [
      "Engineered end-to-end user authentication, cart management, and simultaneous doorstep service appointment scheduling.",
      "Designed database schema for multi-tier service catalog, inventory availability, and mechanic appointment routing.",
    ],
    tech: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/utshobbose/Throttler",
  },
  {
    id: "car-workshop",
    processName: "carworkshop.exe",
    name: "Car Workshop",
    tagline: "Automotive Service Appointment Booking & Dispatch System",
    year: "2025",
    description:
      "Next.js full-stack automotive service booking platform featuring real-time slot reservation, service triage, and administrative oversight.",
    highlights: [
      "Designed clean REST API endpoints for slot management, service quotation, and customer status tracking.",
      "Engineered responsive staff dashboard for viewing mechanic schedules and daily appointment pipelines.",
    ],
    tech: ["Next.js", "Express.js", "REST API", "Tailwind CSS"],
    liveUrl: "https://car-workshop.vercel.app",
    githubUrl: "https://github.com/utshobbose/Car-Workshop-Appointment_System",
  },
];
