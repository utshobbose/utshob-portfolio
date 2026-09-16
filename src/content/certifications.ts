export interface CertificationItem {
  title: string;
  issuer: string;
  badge: string;
  description: string;
}

export const certifications: CertificationItem[] = [
  {
    title: "National Finalist — Blockchain Olympiad Bangladesh",
    issuer: "Blockchain Olympiad",
    badge: "Award",
    description:
      "Selected as a national finalist in Bangladesh's premier blockchain innovation competition, recognizing applied blockchain research and solution development.",
  },
  {
    title: "Professional Software Development Certificate",
    issuer: "Ostad Platform",
    badge: "Credential",
    description:
      "Completed structured professional development coursework in full-stack software development and modern engineering practices.",
  },
  {
    title: "TechHub CodeSprint Challenge",
    issuer: "TechHub",
    badge: "Competition",
    description:
      "Certificate of Participation in an intensive competitive programming and rapid software development challenge.",
  },
];
