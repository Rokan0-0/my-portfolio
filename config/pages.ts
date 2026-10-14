import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Building products that matter.",
    metadata: {
      title: "Home",
      description:
        "Porter Oluwadamilola Temitayo (Rokan) — AI-native Engineer portfolio.",
    },
  },
  skills: {
    title: "Skills",
    description: "The tools I reach for and the ones I'm growing into.",
    metadata: {
      title: "Skills",
      description:
        "Porter Oluwadamilola Temitayo's technical skills and tools.",
    },
  },
  projects: {
    title: "Projects",
    description:
      "Shipped work, side experiments, and everything in between.",
    metadata: {
      title: "Projects",
      description:
        "Shipped work, side experiments, and full-stack projects by Porter Oluwadamilola Temitayo.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's build something together.",
    metadata: {
      title: "Contact",
      description: "Contact Porter Oluwadamilola Temitayo (Rokan).",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Open-source contributions by Porter Oluwadamilola Temitayo.",
    },
  },
  resume: {
    title: "Resume",
    description: "Porter Oluwadamilola Temitayo — résumé.",
    metadata: {
      title: "Resume",
      description: "Porter Oluwadamilola Temitayo's résumé.",
    },
  },
  blogs: {
    title: "Blogs",
    description: "Thoughts on AI, software engineering, and building in public.",
    metadata: {
      title: "Blogs",
      description:
        "Porter Oluwadamilola Temitayo's blog — thoughts on software engineering and building in public.",
    },
  },
  experience: {
    title: "Experience",
    description: "How I've spent my time building.",
    metadata: {
      title: "Experience",
      description:
        "Porter Oluwadamilola Temitayo's engineering experience and journey.",
    },
  },
};
