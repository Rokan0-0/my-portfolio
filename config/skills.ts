import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "TypeScript",
    description: "Primary language across all full-stack projects.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Next.js",
    description: "Go-to React framework for full-stack apps.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description: "UI development foundation.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Node.js",
    description: "Backend runtime for APIs and services.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Supabase",
    description: "Auth, Postgres, realtime and storage layer.",
    rating: 5,
    icon: Icons.supabase,
  },
  {
    name: "PostgreSQL",
    description: "Primary relational database.",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "Git",
    description: "Version control across all projects.",
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "Vercel",
    description: "Primary deployment platform.",
    rating: 5,
    icon: Icons.vercel,
  },
  {
    name: "JavaScript",
    description: "Web fundamentals and scripting.",
    rating: 4,
    icon: Icons.javascript,
  },
  {
    name: "Python",
    description: "Scripting, automation, ML and AI tooling.",
    rating: 4,
    icon: Icons.python,
  },
  {
    name: "Dexie.js",
    description: "IndexedDB wrapper for offline-first apps.",
    rating: 4,
    icon: Icons.database,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework.",
    rating: 4,
    icon: Icons.tailwindcss,
  },
  {
    name: "Vercel AI SDK",
    description: "Streaming AI responses in Next.js.",
    rating: 4,
    icon: Icons.brain,
  },
  {
    name: "Anthropic API",
    description: "Claude integration for AI-native products.",
    rating: 4,
    icon: Icons.anthropic,
  },
  {
    name: "OpenAI API",
    description: "GPT integration for generative features.",
    rating: 4,
    icon: Icons.openai,
  },
  {
    name: "Prompt Engineering",
    description: "Crafting reliable, structured LLM prompts.",
    rating: 4,
    icon: Icons.messageSquareCode,
  },
  {
    name: "Framer Motion",
    description: "Animation library (Prxx UI).",
    rating: 4,
    icon: Icons.framer,
  },
  {
    name: "Vite",
    description: "Frontend build tool for React apps.",
    rating: 4,
    icon: Icons.vite,
  },
  {
    name: "PWA",
    description: "Progressive Web App pattern across multiple projects.",
    rating: 4,
    icon: Icons.pwa,
  },
  {
    name: "Prisma",
    description: "Type-safe ORM for PostgreSQL.",
    rating: 4,
    icon: Icons.prisma,
  },
  {
    name: "LangChain",
    description: "RAG pipelines and agent orchestration.",
    rating: 3,
    icon: Icons.langchain,
  },
  {
    name: "Solidity",
    description: "Smart contract development (PredictNaija).",
    rating: 3,
    icon: Icons.solidity,
  },
  {
    name: "Hardhat",
    description: "Ethereum development and testing framework.",
    rating: 3,
    icon: Icons.hardhat,
  },
  {
    name: "Wagmi",
    description: "React hooks for Ethereum wallet connections.",
    rating: 3,
    icon: Icons.wallet,
  },
  {
    name: "Playwright",
    description: "E2E testing and browser automation.",
    rating: 3,
    icon: Icons.bot,
  },
  {
    name: "Docker",
    description: "Containerisation for services.",
    rating: 3,
    icon: Icons.docker,
  },
  {
    name: "WebSockets",
    description: "Real-time comms for chat and live features.",
    rating: 3,
    icon: Icons.network,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
