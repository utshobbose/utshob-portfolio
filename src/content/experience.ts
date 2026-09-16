export interface ExperienceItem {
  id: string;
  titleBar: string;
  role: string;
  company: string;
  companyShort: string;
  dateRange: string;
  location: string;
  statusBadge: string;
  bullets: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "biid-associate",
    titleBar: "biid-foundation.log",
    role: "Program Associate (ICT)",
    company: "BIID Foundation (Bangladesh Institute of ICT in Development)",
    companyShort: "BIID Foundation",
    dateRange: "Aug 2026 – Present",
    location: "Dhaka, Bangladesh",
    statusBadge: "Active Process",
    bullets: [
      "Promoted from ICT Officer Intern to manage digital infrastructure across the organization's websites, social media platforms, and IT systems as a full-time team member.",
      "Serving as Focal Point for INO 2026 (International Nutrition Olympiad), coordinating technical and organizational aspects of the program.",
      "Continuing to lead security remediation, hosting/vendor coordination, and technical documentation (SRS, DFDs, decision briefs) across BIID's program portfolio.",
    ],
  },
  {
    id: "biid-intern",
    titleBar: "biid-foundation-intern.log",
    role: "ICT Officer Intern",
    company: "BIID Foundation (Bangladesh Institute of ICT in Development)",
    companyShort: "BIID Foundation",
    dateRange: "May 2026 – Aug 2026",
    location: "Dhaka, Bangladesh",
    statusBadge: "Completed",
    bullets: [
      "Managed digital infrastructure across the organization's websites, social media platforms, and IT systems, including cPanel hosting and WordPress administration for multiple organizational sites.",
      "Identified and remediated WordPress security incidents, including malicious PHP backdoors and web shells, and resolved server security breaches, disk quota crises, and hosting issues in coordination with vendors.",
      "Produced technical and business documentation, including an SRS for BIID's B-Lab Online Investment Marketplace, data flow diagrams, an IT Infrastructure Decision Brief for the CEO, and PPTX presentations for partnership and proposal decks.",
      "Supported partnership initiatives such as the Robi ePushti SMS service, and managed social media strategy and tracking across multiple BIID programs.",
    ],
  },
];
