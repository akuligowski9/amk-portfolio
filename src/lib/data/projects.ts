export type Project = {
  title: string;
  desc: string;
  stack: string[];
  githubLink?: string;
  demoLink?: string;
  websiteLink?: string;
  order: number;
};

export const projects: Project[] = [
  {
    title: "Uywayki",
    desc: "A pet care management mobile application for Lima, Peru. Vaccination tracking, a map of 800+ local pet services, care reminders, and WhatsApp contact for appointments.",
    stack: ["SwiftUI", "SwiftData", "Supabase", "MapKit", "SPM"],
    websiteLink: "https://uywayki.app/",
    order: 1,
  },
  {
    title: "The Shelf",
    desc: "A personal attention-management & life balancing companion for tracking and celebrating progress.",
    stack: ["React", "Node.js", "Postgres", "Express", "Cloud Run"],
    githubLink: "https://github.com/akuligowski9/the-shelf",
    demoLink: "https://demo-the-shelf.vercel.app/login",
    order: 2,
  },
  {
    title: "Kestrel",
    desc: "An embedded-style system health monitor for macOS with a C++ core engine, Swift menu bar UI, and built-in fault injection for validation.",
    stack: ["C++", "Swift", "CMake", "macOS APIs"],
    githubLink: "https://github.com/akuligowski9/kestrel",
    order: 3,
  },
  {
    title: "ProjectBridge",
    desc: "A local-first developer tool that analyzes your GitHub repos against job descriptions and recommends projects to close skill gaps.",
    stack: ["Python", "Rust", "Svelte", "Tauri", "TypeScript", "CLI"],
    githubLink: "https://github.com/akuligowski9/project-bridge",
    order: 4,
  },
  {
    title: "Abstractly",
    desc: "A research radar for tracking AI trends and translating emerging techniques into practical applications.",
    stack: ["Laravel", "OpenAI API", "Postgres"],
    githubLink: "https://github.com/akuligowski9/abstractly",
    order: 6,
  },
  {
    title: "ChiriBudget",
    desc: "A budgeting app to track finances and visualize spending categories.",
    stack: ["React Native", "Supabase", "Vercel"],
    githubLink: "https://github.com/akuligowski9/chiribudget",
    demoLink: "https://chiribudgetdemo.vercel.app",
    order: 7,
  },
  {
    title: "ForThoseHere",
    desc: "A mobile app for end-of-life planning so loved ones don't have to guess on the days they deserve to grieve.",
    stack: ["React Native", "Expo", "MongoDB", "Clerk", "Docker"],
    order: 8,
  },
  {
    title: "API Gallery",
    desc: "A visual front-end for 1,500+ public APIs with rendered previews, side-by-side comparison, and instant docs.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubLink: "https://github.com/akuligowski9/api-gallery",
    websiteLink: "https://public-apis-explorer.vercel.app",
    order: 5,
  },
];
