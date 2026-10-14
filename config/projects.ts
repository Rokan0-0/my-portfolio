import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date | "Present";
  companyLogoImg: string;
  logoIcon?: string;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "unicon",
    companyName: "UNICON",
    type: "Personal",
    category: ["Full Stack"],
    shortDescription:
      "A social network PWA built exclusively for verified university students — community, profiles, and campus connection, all behind a student ID gate.",
    websiteLink: "https://unicon-blush.vercel.app/",
    githubLink: undefined,
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "React",
      "PWA",
      "TanStack Query",
    ],
    startDate: new Date("2026-02-01"),
    endDate: "Present",
    companyLogoImg: "/projects/unicon/landing-page.png",
    logoIcon: "/projects/unicon/logo.png",
    pagesInfoArr: [
      {
        title: "Campus Community Feed",
        description: "Campus-filtered student community feeds and interactive discussions.",
        imgArr: ["/projects/unicon/feed.png"],
      },
      {
        title: "Student Profiles & OG Cards",
        description: "Verified student academic profile with shareable OG cards.",
        imgArr: ["/projects/unicon/profile.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "UNICON is a Progressive Web App built for university students who needed a space that was actually theirs — not a general social feed, but a campus-aware network where everyone is a verified student.",
        "Students sign up with Google or email, pick their university, department and level, and verify with a student ID upload before they can post or connect. This keeps the space genuine and prevents spam accounts.",
        "The platform supports community feeds, academic profiles, push notifications for engagement, and offline support for students on patchy campus Wi-Fi. Profile cards are OG-image generated and shareable as links.",
      ],
      bullets: [
        "Student identity verification via uploaded university ID",
        "University, department and level-aware community feeds",
        "PWA with Web Push notifications and offline support",
        "Shareable OG profile cards generated with Vercel OG",
        "Playwright E2E test coverage",
        "Built solo from zero to real users",
      ],
    },
  },
  {
    id: "codereplay",
    companyName: "CodeReplay",
    type: "Personal",
    category: ["Developer Tools"],
    shortDescription:
      "A VS Code extension that silently records your coding session — mistakes, refactors and all — and plays it back as a clean timelapse for tutorials, code reviews and learning.",
    websiteLink:
      "https://marketplace.visualstudio.com/items?itemName=rokan0-0.codereplay",
    githubLink: "https://github.com/Rokan0-0/CodeReplay",
    techStack: ["TypeScript", "VS Code API"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/projects/codereplay/demo.gif",
    logoIcon: "/projects/codereplay/logo.png",
    pagesInfoArr: [
      {
        title: "Extension Timelapse Demo",
        description: "Capturing multi-file coding sessions and replaying them as a smooth, typed-out timelapse.",
        imgArr: ["/projects/codereplay/demo.gif"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "CodeReplay lives in your VS Code status bar. Hit record before you start a task; the extension silently captures every keystroke across multiple files — including your wrong turns and refactors — without interrupting your flow.",
        "When you're done, hit play. It replays your session as a smooth, typed-out timelapse, perfect for turning a real coding session into a tutorial, sharing a solution with teammates, or reviewing your own approach.",
        "It was born from a simple frustration: most screen-recording tools capture noise, not intent. CodeReplay captures only the code changes, producing a replay that is easy to follow and easy to share.",
      ],
      bullets: [
        "Silent background recording — no workflow interruption",
        "Multi-file session capture",
        "Clean playback: mistakes stripped, intent preserved",
        "One-click cleanup of playback files",
        "Published to the VS Code Marketplace (publisher: rokan0-0)",
      ],
    },
  },
  {
    id: "storeos",
    companyName: "StoreOS",
    type: "Personal",
    category: ["Full Stack"],
    shortDescription:
      "An offline-first business management platform for Nigerian SME supermarkets and provision stores — replacing pen-and-notebook bookkeeping with digital sales, inventory and financial records.",
    websiteLink: undefined,
    githubLink: "https://github.com/Rokan0-0/StoreOS",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Dexie.js",
      "PWA",
      "React-PDF",
      "Tailwind CSS",
    ],
    startDate: new Date("2025-01-01"),
    endDate: "Present",
    companyLogoImg: "/projects/storeos/dashboard.png",
    logoIcon: "/projects/storeos/logo.png",
    pagesInfoArr: [
      {
        title: "Sales & POS Checkout",
        description: "Instant offline-first checkout counter and real-time sales tracking.",
        imgArr: ["/projects/storeos/sales.png"],
      },
      {
        title: "Inventory & Reports",
        description: "Stock management, debtor tracking, and exportable PDF financial reports.",
        imgArr: ["/projects/storeos/inventory.png", "/projects/storeos/report.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Most Nigerian provision store owners still track sales and credit in paper notebooks. StoreOS replaces that with a fast, installable PWA that works even when the internet cuts out — which it will.",
        "At its core, StoreOS uses Dexie.js (IndexedDB) to keep all data local and available offline. When connectivity returns, changes sync to Supabase. The result is an app that feels instant because it never waits for a server.",
        "Beyond daily operations — sales, inventory, and debtor tracking — StoreOS builds the financial paper trail that shop owners need to qualify for small-business loans. PDF reports can be exported and handed to a lender.",
      ],
      bullets: [
        "Full offline support via Dexie.js (IndexedDB) with Supabase sync",
        "Sales recording, inventory management, debtor/credit tracking",
        "PDF financial reports exportable for loan applications",
        "Installable as a PWA — no app store needed",
        "Built for low-bandwidth, low-tech users in mind",
      ],
    },
  },
  {
    id: "prxx",
    companyName: "Prxx",
    type: "Personal",
    category: ["Full Stack"],
    shortDescription:
      "Lobby-as-a-Service. Spin up a premium, exclusive digital room for your event in 10 seconds — no ticketing, no feeds, no check-ins. Just a space that closes when it's done.",
    websiteLink: "https://prxx.space/",
    githubLink: undefined,
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "React",
      "Framer Motion",
      "PWA",
      "Serwist",
    ],
    startDate: new Date("2025-11-01"),
    endDate: "Present",
    companyLogoImg: "/projects/prxx/lobby.png",
    logoIcon: "/projects/prxx/logo.png",
    pagesInfoArr: [
      {
        title: "Instant Join Flow",
        description: "Temporary event room with instant QR and link onboarding.",
        imgArr: ["/projects/prxx/join.png"],
      },
      {
        title: "Attendees & Chat",
        description: "Real-time group chat and 1-on-1 networking connections.",
        imgArr: ["/projects/prxx/attendees.png", "/projects/prxx/chat.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Every event tool tries to do everything: sell tickets, build discovery feeds, manage check-ins. Prxx does one thing — it gives you a room. A private, temporary, high-performance digital space that exists for the duration of your event and closes automatically 24 hours after it opens.",
        "Organisers generate a shareable link or QR code. Attendees join with one tap. Inside: a group chat, an attendee list you can browse, and 1-on-1 direct connections. No account required to join.",
        "Prxx started as LinkUp (V1), a proximity-based event networking tool tested at tech meetups. V2 strips it down further — less feature clutter, better performance, cleaner product story.",
      ],
      bullets: [
        "Temporary lobbies with automatic 24-hour expiry",
        "Shareable join link and QR code generation",
        "Group chat, attendee discovery and 1-on-1 connections",
        "No account required to join a lobby",
        "PWA — installable, works on any device",
        "Evolved from V1 (LinkUp) after real user feedback",
      ],
    },
  },
  {
    id: "workforcely",
    companyName: "Workforcely",
    type: "Personal",
    category: ["Full Stack"],
    shortDescription:
      "A complete HR management and employee self-service platform with payroll, leave, performance, recruitment and an AI HR assistant — built for the Tech in HR Hackathon (2nd place).",
    websiteLink: "https://workforcely-mu.vercel.app/",
    githubLink: "https://github.com/Rokan0-0/Workforcely",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Recharts",
      "Tailwind CSS",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/workforcely/dashboard.png",
    logoIcon: "/projects/workforcely/logo.png",
    pagesInfoArr: [
      {
        title: "Automated Payroll Engine",
        description: "Automated Nigerian PAYE tax and pension calculation with monthly payroll runs.",
        imgArr: ["/projects/workforcely/payroll.png"],
      },
      {
        title: "Employees & Leave",
        description: "Employee directory, self-service portal, and multi-level leave approvals.",
        imgArr: [
          "/projects/workforcely/employees.png",
          "/projects/workforcely/leave.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Workforcely was built end-to-end during the Tech in HR Hackathon. The brief: build an HR product. The result was a full-featured platform covering everything from employee onboarding to monthly payroll runs.",
        "Payroll handles Nigerian PAYE tax and pension calculations automatically. Leave management includes a multi-level approval workflow. Performance reviews, recruitment pipelines and training courses with certificates are all included.",
        "An AI HR assistant is embedded across the platform to answer policy questions, help managers write reviews and guide employees through processes. The project came 2nd place.",
      ],
      bullets: [
        "Employee directory, org chart and onboarding flows",
        "Attendance clock-in/out with absence tracking",
        "Payroll with Nigerian PAYE tax and pension auto-calculation",
        "Leave requests with multi-level approvals",
        "Performance reviews and recruitment pipeline",
        "AI HR assistant embedded throughout",
        "Analytics dashboard with Recharts visualisations",
      ],
    },
  },
  {
    id: "blaze-escrow",
    companyName: "Blaze Escrow",
    type: "Personal",
    category: ["Frontend", "Fintech"],
    shortDescription:
      "A P2P micro-escrow trust engine for social commerce — buyers and sellers on Instagram, WhatsApp and campus markets can transact safely with a shareable escrow link and a 48-hour inspection window.",
    websiteLink: "https://blaze-escrow-link.vercel.app/",
    githubLink: "https://github.com/Rokan0-0/Blaze-Escrow-Link",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    startDate: new Date("2026-01-01"),
    endDate: "Present",
    companyLogoImg: "/projects/blaze-escrow/landing-page.png",
    logoIcon: "/projects/blaze-escrow/icon.png",
    pagesInfoArr: [
      {
        title: "Landing & Create",
        description: "Overview landing page and instant escrow link creation with custom order terms.",
        imgArr: [
          "/projects/blaze-escrow/landing-page.png",
          "/projects/blaze-escrow/create.png",
        ],
      },
      {
        title: "Share & Holding Payment",
        description: "Shareable escrow summary and buyer holding wallet payment deposit flow.",
        imgArr: [
          "/projects/blaze-escrow/share.png",
          "/projects/blaze-escrow/payment.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Social commerce in Nigeria runs on trust — and trust is easily broken when money changes hands before goods arrive. Blaze Escrow fixes that: the seller creates a shareable link, the buyer pays into a holding wallet, and the money only moves after a 48-hour inspection window closes without dispute.",
        "The flow is designed for people who have never used escrow before. No jargon, no complex onboarding — just a link, a payment, and a window to confirm everything is right.",
        "Built for the Ecobank Blaze InnovateX 2026 competition (Inclusive Finance & Fraud Prevention track). The competition is still running.",
      ],
      bullets: [
        "Seller generates a shareable escrow link or QR code in seconds",
        "Buyer pays into a holding wallet — not directly to seller",
        "48-hour inspection window before funds are released",
        "AI-assisted dispute triage for contested transactions",
        "USSD fallback planned for feature-phone users",
        "Trust Score turns trade history into credit for nano-loans",
      ],
    },
  },
  {
    id: "predictnaija",
    companyName: "PredictNaija",
    type: "Personal",
    category: ["Web3", "Full Stack"],
    shortDescription:
      "A mobile-first decentralised social prediction market on the Somnia Testnet — Nigerians predict and stake on AFCON, BBNaija and Naira economics, with no crypto jargon required.",
    websiteLink: "https://predictnaija-three.vercel.app/",
    githubLink: "https://github.com/Rokan0-0/PredictNaija",
    techStack: [
      "Next.js",
      "TypeScript",
      "Solidity",
      "Hardhat",
      "Wagmi",
      "RainbowKit",
      "Tailwind CSS",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/projects/predictnaija/logo.png",
    logoIcon: "/projects/predictnaija/logo.png",
    pagesInfoArr: [
      {
        title: "Markets & Predictions",
        description: "African pop culture, sports, and economic prediction pools.",
        imgArr: [
          "/projects/predictnaija/markets.png",
          "/projects/predictnaija/predict.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "PredictNaija is a prediction market built for Nigerian culture — not a generic DeFi platform. Markets are things Nigerians actually care about: AFCON group stage results, BBNaija evictions, Naira exchange rate movements.",
        "The entire UX is designed to hide crypto complexity. Users connect a wallet via RainbowKit, but the interface speaks plain English, not blockchain. The smart contract is deployed on Somnia Testnet.",
        "It is an experiment in making Web3 feel local and relevant rather than abstract and foreign.",
      ],
      bullets: [
        "Prediction markets on AFCON, BBNaija and Naira economics",
        "Deployed smart contract on Somnia Testnet",
        "Mobile-first UI — no crypto jargon in the interface",
        "Wallet connection via RainbowKit",
        "Built with Next.js 14, Solidity 0.8.20 and Wagmi v2",
      ],
    },
  },
  {
    id: "oascs",
    companyName: "OASCS",
    type: "Personal",
    category: ["Full Stack", "EdTech"],
    shortDescription:
      "An Online Automated Student Clearance System — digitising the final-year clearance process with department-by-department document uploads, officer approvals, and auto-generated certificates.",
    websiteLink: undefined,
    githubLink: "https://github.com/Rokan0-0/oascs",
    techStack: ["PHP", "Supabase", "PostgreSQL", "PHPMailer", "TCPDF"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/projects/oascs/logo.png",
    pagesInfoArr: [
      {
        title: "Student Portal",
        description: "Student document upload dashboard and clearance status progression.",
        imgArr: [
          "/projects/oascs/student-portal.png",
          "/projects/oascs/upload.png",
        ],
      },
      {
        title: "Officer & Admin Views",
        description: "Review workflow, approval feedback, and certificate generation.",
        imgArr: [
          "/projects/oascs/officer.png",
          "/projects/oascs/admin.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Final-year clearance at most Nigerian universities is a paper-based queue across six or more departments. OASCS replaces that with a web portal where students upload documents for each department, officers approve or reject with comments, and the system tracks everything in one place.",
        "When all departments clear a student, OASCS generates and emails a signed PDF clearance certificate automatically — no admin bottleneck, no lost forms.",
        "The project was built using PHP with Supabase as the backend (Postgres + Storage), making it deployable on standard shared hosting as well as serverless environments.",
      ],
      bullets: [
        "Student, officer and admin portals with role-based access",
        "Per-department document upload and approval workflow",
        "Officer comments and rejection feedback visible to students",
        "Auto-generated and emailed PDF clearance certificates (TCPDF)",
        "Email notifications via PHPMailer",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
