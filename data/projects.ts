// data/projects.ts
export type ProjectCategory = "Full-Stack" | "Cloud & DevOps" | "Academic" | "Embedded";
export interface Project {
  number: string;
  year: string;
  title: string;
  description: string;
  tools: string[];
  categories: ProjectCategory[];
  type: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  featured: boolean; // true = shows on landing page 2x2 grid
}

export const projects: Project[] = [
  {
    number: "01",
    year: "2024",
    title: "SiteTrace — Cloud SaaS Platform",
    description:
      "Architected a multi-tenant cloud SaaS platform to automate workflow operations with background worker queues, secure JWT/role-based auth, and live operational dashboards.",
    tools: ["NestJS", "TypeScript", "PostgreSQL", "React/Expo"],
    categories: ["Cloud & DevOps", "Full-Stack", "Academic"],
    type: "University Level-II Project",
    githubUrl: "https://github.com/orgs/BitSync-Level-II-Project/repositories",
    caseStudyUrl: "https://dms.uom.lk/s/Y6YjreExnzTb7H8",
    featured: true,
  },
  {
    number: "02",
    year: "2024",
    title: "Cloud-Native Microservices Platform",
    description:
      "6-container microservices system with an NGINX API gateway. Orchestrated on Kubernetes with Helm and Prometheus monitoring.",
    tools: ["Docker", "Kubernetes", "PostgreSQL", "Prometheus"],
    categories: ["Cloud & DevOps", "Full-Stack"],
    type: "Personal Project",
    githubUrl: "https://github.com/DeemanthaGunasekara/cloud-native-microservices-platform",
    featured: true,
  },
  {
    number: "03",
    year: "2023",
    title: "Kickbots Arena — Microcontroller Hardware System",
    description:
      "Designed an embedded robotic system with low-level C microcontroller programming, dual H-bridge motor driver circuits, and sensor-driven combat arena telemetry.",
    tools: ["C / Embedded", "Microcontrollers", "Hardware Design"],
    categories: ["Embedded", "Academic"],
    type: "University Level-I Project",
    githubUrl: "https://github.com/DeemanthaGunasekara/Kickbots-Arena",
    featured: true,
  },
  {
    number: "04",
    year: "2024",
    title: "Developer Portfolio & Design System",
    description:
      "Designed an editorial dark theme design system in Figma and implemented it with Next.js 14 App Router, custom Tailwind tokens, and automated Vercel pipelines.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    categories: ["Full-Stack"],
    type: "Personal Project",
    liveUrl: "https://deemanthagunasekara.vercel.app",
    githubUrl: "https://github.com/DeemanthaGunasekara/Portfolio",
    featured: true,
  },
  {
    number: "05",
    year: "2024",
    title: "React Movie Hub",
    description:
      "Built a responsive single-page web application interfacing with external movie APIs, featuring debounced real-time search queries, dynamic filtering, and clean component state management.",
    tools: ["React", "REST APIs", "JavaScript", "CSS3"],
    categories: ["Full-Stack"],
    type: "Personal Web App",
    githubUrl: "https://github.com/DeemanthaGunasekara/React-Movie-App",
    featured: false,
  },
  {
    number: "06",
    year: "2024",
    title: "Blog App",
    description:
      "Full-stack blogging web application featuring user authentication, secure session handling, and relational CRUD operations built with PHP and MySQL.",
    tools: ["PHP", "MySQL", "HTML/CSS"],
    categories: ["Full-Stack"],
    type: "Personal Project",
    githubUrl: "https://github.com/DeemanthaGunasekara/Web-App",
    featured: false,
  },
];