export type ProjectStatus = "Active" | "Maintenance" | "Archived";

export type Project = {
  title: string;
  desc: string;
  stack: string[];
  githubLink?: string;
  demoLink?: string;
  websiteLink?: string;
  order: number;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    title: "The Shelf",
    desc: "A personal attention-management & life balancing companion for tracking and celebrating progress.",
    stack: ["React", "Node.js", "Postgres", "Express", "Cloud Run"],
    githubLink: "https://github.com/akuligowski9/the-shelf",
    demoLink: "https://demo-the-shelf.vercel.app/login",
    order: 2,
    status: "Active",
  },
  {
    title: "Kestrel",
    desc: "An embedded-style system health monitor for macOS with a C++ core engine, Swift menu bar UI, and built-in fault injection for validation.",
    stack: ["C++", "Swift", "CMake", "macOS APIs"],
    githubLink: "https://github.com/akuligowski9/kestrel",
    order: 3,
    status: "Active",
  },
  {
    title: "ProjectBridge",
    desc: "A local-first developer tool that analyzes your GitHub repos against job descriptions and recommends projects to close skill gaps.",
    stack: ["Python", "Rust", "Svelte", "Tauri", "TypeScript", "CLI"],
    githubLink: "https://github.com/akuligowski9/project-bridge",
    order: 4,
    status: "Active",
  },
  {
    title: "ForThoseHere",
    desc: "A mobile app for end-of-life planning so loved ones don't have to guess on the days they deserve to grieve.",
    stack: ["React Native", "Expo", "MongoDB", "Clerk", "Docker"],
    order: 9,
    status: "Active",
  },
  {
    title: "Uywayki",
    desc: "A pet care management app for Lima, Peru. Vaccination tracking, care schedules, clinic discovery with MapKit, and WhatsApp-based appointment requests.",
    stack: ["SwiftUI", "SwiftData", "Supabase", "MapKit", "SPM"],
    websiteLink: "https://uywayki.app/",
    order: 1,
    status: "Active",
  },
  {
    title: "Abstractly",
    desc: "A research radar for tracking AI trends and translating emerging techniques into practical applications.",
    stack: ["Laravel", "OpenAI API", "Postgres"],
    githubLink: "https://github.com/akuligowski9/abstractly",
    order: 5,
    status: "Active",
  },
  {
    title: "ChiriBudget",
    desc: "A budgeting app to track finances and visualize spending categories.",
    stack: ["React Native", "Supabase", "Vercel"],
    githubLink: "https://github.com/akuligowski9/chiribudget",
    demoLink: "https://chiribudgetdemo.vercel.app",
    order: 6,
    status: "Active",
  },
];
