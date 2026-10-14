import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "unicon-founder",
    position: "Founder & Lead Engineer",
    company: "UNICON",
    location: "Lagos, Nigeria",
    startDate: new Date("2026-02-01"),
    endDate: "Present",
    companyUrl: "https://unicon-blush.vercel.app/",
    logo: "/experience/unicon.png",
    skills: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "React", "PWA"],
    description: [
      "Built and launched a social network PWA for verified university students across Nigeria.",
      "Handles student identity verification, university-level community feeds, push notifications and offline support.",
      "Active users across multiple campuses.",
    ],
    achievements: [
      "Designed and shipped the full product solo — auth, feeds, profiles, verification flow, PWA install and Web Push.",
      "Implemented Playwright E2E tests and Vercel OG image generation for shareable profile cards.",
      "Scaled to real student users without any paid infrastructure.",
    ],
  },
  {
    id: "prxx-founder",
    position: "Founder & Lead Engineer",
    company: "Prxx",
    location: "Lagos, Nigeria",
    startDate: new Date("2025-11-01"),
    endDate: "Present",
    companyUrl: "https://prxx.space/",
    logo: "/experience/prxx.png",
    skills: ["Next.js", "TypeScript", "Supabase", "React", "Framer Motion", "PWA"],
    description: [
      "Built Prxx: a Lobby-as-a-Service product that lets anyone spin up a premium temporary digital room in under 10 seconds.",
      "Strips away ticketing, feeds and complex check-ins — pure, high-performance gathering space.",
      "Live product with real users.",
    ],
    achievements: [
      "Designed the entire product concept, brand and engineering stack independently.",
      "Built V1 (LinkUp) as a proximity-based networking tool, then iterated to V2 with a cleaner lobby model.",
      "Shipped PWA with QR joining, group chat and 1-on-1 attendee connections.",
    ],
  },
  {
    id: "siwes-techminds",
    position: "Software Engineering Intern (SIWES)",
    company: "Techminds",
    location: "Lagos, Nigeria",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2025-04-01"),
    companyUrl: "",
    logo: "/experience/techminds.png",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "Git"],
    description: [
      "Industrial Training (SIWES) placement at Techminds, a software engineering training school.",
      "Built full-stack projects covering frontend, backend and database design during the placement.",
    ],
    achievements: [
      "Completed 300L SIWES requirement with hands-on project delivery.",
      "Developed practical experience in full-stack TypeScript development during the placement period.",
    ],
  },
  {
    id: "hackathon-tech-hr",
    position: "Hackathon Participant — 2nd Place",
    company: "Tech in HR Hackathon",
    location: "Nigeria",
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-01-01"),
    companyUrl: "https://workforcely-mu.vercel.app/",
    logo: "/experience/hackathon.png",
    skills: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Recharts"],
    description: [
      "Built Workforcely: a complete HR management and employee self-service platform during the hackathon.",
      "Covered employee directory, attendance, payroll with Nigerian PAYE/pension, leave approvals and an AI HR assistant.",
    ],
    achievements: [
      "Came 2nd place in the Tech in HR hackathon.",
      "Shipped a full HR SaaS product — employee directory, payroll, leave, performance, recruitment and analytics — within the competition window.",
    ],
  },
  {
    id: "hackathon-innovatex",
    position: "Hackathon Participant",
    company: "InnovateX Africa — Ecobank Blaze 2026",
    location: "Nigeria (Remote)",
    startDate: new Date("2026-01-01"),
    endDate: "Present",
    companyUrl: "https://blaze-escrow-link.vercel.app/",
    logo: "/experience/innovatex.png",
    skills: ["React", "TypeScript", "Vite"],
    description: [
      "Built Blaze Escrow for the Ecobank Blaze InnovateX 2026 hackathon (Inclusive Finance & Fraud Prevention track).",
      "A P2P micro-escrow trust engine for social commerce — Instagram, WhatsApp and campus traders.",
    ],
    achievements: [
      "Designed the full escrow flow: shareable link, holding wallet, 48-hour inspection window and AI dispute triage.",
      "Competition still ongoing as of Oct 2026.",
    ],
  },
];
