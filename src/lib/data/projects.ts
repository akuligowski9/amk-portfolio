export type Project = {
  title: string;
  desc: string;
  stack: string[];
  lastUpdated: string;
  githubLink: string;
  demoLink?: string;
  expandedDesc?: string;
  order: number;
};

export const projects: Project[] = [
  {
    title: "The Shelf",
    desc: "A personal attention-management & life balancing companion for tracking and celebrating progress.",
    stack: ["React", "Node.js", "Postgres", "Express", "Cloud Run"],
    lastUpdated: "January 2026",
    githubLink: "https://github.com/akuligowski9/the-shelf",
    demoLink: "https://demo-the-shelf.vercel.app/login",
    expandedDesc: "A personal app concept designed to help manage attention and celebrate progress. It focuses on flexible reflection schedules, idea parking, and tracking life balance rather than just daily streaks.",
    order: 1
  },
  {
    title: "AMK Portfolio",
    desc: "A personal portfolio site to showcase projects and build a refined space beyond a traditional resume.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    lastUpdated: "January 2026",
    githubLink: "https://github.com/akuligowski9/amk-portfolio",
    expandedDesc: "This portfolio is my refined space to showcase my work and go beyond a standard resume. It’s built with Next.js and Tamagui on Vercel, and it’s a place to document my growth as a developer.",
    order: 7
  },
  {
    title: "ChiriBudget",
    desc: "A budgeting app to track finances and visualize spending categories.",
    stack: ["React Native", "Supabase", "Vercel"],
    lastUpdated: "December 2025",
    githubLink: "https://github.com/akuligowski9/chiribudget",
    demoLink: "https://chiribudgetdemo.vercel.app",
    expandedDesc: "A personal budgeting app created to avoid using Excel and provide a more user-friendly way for my wife and me to track our finances. It visualizes spending categories and one-time expenses using React and Supabase.",
    order: 2 
  },
    {
    title: "Abstractly",
    desc: "A research radar for tracking AI trends and translating emerging techniques into practical applications.",
    stack: ["Laravel", "OpenAI API", "Postgres"],
    lastUpdated: "January 2026",
    githubLink: "https://github.com/akuligowski9/abstractly",
    expandedDesc: "A tool for staying current on AI research and identifying techniques worth prototyping. It aggregates publications, surfaces actionable insights, and serves as a launchpad for applied experiments—bridging the gap between academic research and real-world implementation.",
    order: 3
  },
  {
    title: "Just Be Funny",
    desc: "Improv game and creator hub for comedy themes.",
    stack: ["React Native", "Node.js", "MongoDB"],
    lastUpdated: "November 2024",
    githubLink: "https://github.com/akuligowski9/jbf",
    expandedDesc: "A ReactJS-based mobile app that gamifies improv. Built as a full-stack MVP with real-time scoring and cross-platform demos for iOS and Android.",
    order: 4
  },
  {
    title: "Brita",
    desc: "AI-powered documentation generator for contextual README files.",
    stack: ["Python", "Anthropic Claude", "GitHub API"],
    lastUpdated: "August 2024",
    githubLink: "https://github.com/rumatveev/brita",
    expandedDesc: "An AI-powered documentation generator created with a small team. It integrates Anthropic Claude for natural-language documentation and uses the GitHub API to pull repository metadata and code summaries for accurate, contextual docs.",
    order: 6
  },
];
