export type ProjectStatus = "Active" | "Maintenance" | "Archived";

export type Project = {
  title: string;
  desc: string;
  stack: string[];
  githubLink: string;
  demoLink?: string;
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
    order: 1,
    status: "Active",
  },
  {
    title: "ChiriBudget",
    desc: "A budgeting app to track finances and visualize spending categories.",
    stack: ["React Native", "Supabase", "Vercel"],
    githubLink: "https://github.com/akuligowski9/chiribudget",
    demoLink: "https://chiribudgetdemo.vercel.app",
    order: 2,
    status: "Active",
  },
  {
    title: "Abstractly",
    desc: "A research radar for tracking AI trends and translating emerging techniques into practical applications.",
    stack: ["Laravel", "OpenAI API", "Postgres"],
    githubLink: "https://github.com/akuligowski9/abstractly",
    order: 3,
    status: "Active",
  },
  {
    title: "Just Be Funny",
    desc: "Improv game and creator hub for comedy themes.",
    stack: ["React Native", "Node.js", "MongoDB"],
    githubLink: "https://github.com/akuligowski9/jbf",
    order: 4,
    status: "Maintenance",
  },
  {
    title: "Brita",
    desc: "AI-powered documentation generator for contextual README files.",
    stack: ["Python", "Anthropic Claude", "GitHub API"],
    githubLink: "https://github.com/rumatveev/brita",
    order: 5,
    status: "Maintenance",
  },
  {
    title: "AMK Portfolio",
    desc: "A personal portfolio site to showcase projects and build a refined space beyond a traditional resume.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    githubLink: "https://github.com/akuligowski9/amk-portfolio",
    order: 6,
    status: "Active",
  },
];
