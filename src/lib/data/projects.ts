export type Project = {
  title: string;
  desc: string;
  stack: string[];
  lastUpdated: string;
  githubLink: string;
  expandedDesc?: string;
  order: number;
};

export const projects: Project[] = [
  {
    title: "The Shelf",
    desc: "Personal attention-management & life balancing companion for tracking and celebrating progress.",
    stack: ["Swift", "React", "Node.js", "Postgres"],
    lastUpdated: "December 2025",
    githubLink: "https://github.com/akuligowski9/the-shelf",
    expandedDesc: "A personal app concept designed to help manage attention and celebrate progress. It focuses on flexible reflection schedules, idea parking, and tracking life balance rather than just daily streaks.",
    order: 1
  },
  {
    title: "AMK Portfolio",
    desc: "A personal portfolio site to showcase projects and build a refined space beyond a traditional resume.",
    stack: ["Next.js", "Tamagui", "Vercel"],
    lastUpdated: "December 2025",
    githubLink: "https://github.com/akuligowski9/amk-portfolio",
    expandedDesc: "This portfolio is my refined space to showcase my work and go beyond a standard resume. It’s built with Next.js and Tamagui on Vercel, and it’s a place to document my growth as a developer.",
    order: 7
  },
  {
    title: "Spare Bottle",
    desc: "A drink catalog project exploring database design and promoting mindful drinking.",
    stack: ["React", "Supabase"],
    lastUpdated: "December 2025",
    githubLink: "https://github.com/akuligowski9/spare-bottle",
    expandedDesc: "Originally an idea to promote self-awareness in drinking by cataloging drinks and ingredients. It turned into a database design exploration for a drink catalog using React and Supabase, focusing on how to scale data and present ingredient combinations.",
    order: 5
  },
  {
    title: "ChiriBudget",
    desc: "A budgeting app to track finances and visualize spending categories.",
    stack: ["React Native", "Supabase", "Vercel"],
    lastUpdated: "December 2025",
    githubLink: "https://github.com/akuligowski9/chiribudget",
    expandedDesc: "A personal budgeting app created to avoid using Excel and provide a more user-friendly way for my wife and me to track our finances. It visualizes spending categories and one-time expenses using React and Supabase.",
    order: 4 
  },
    {
    title: "Abstractly",
    desc: "Aggregates and summarizes recent research publications for daily reading.",
    stack: ["Laravel", "OpenAI API", "Postgres"],
    lastUpdated: "October 2025",
    githubLink: "https://github.com/akuligowski9/abstractly",
    expandedDesc: "A Laravel-based web application designed to aggregate and summarize recent research publications. It uses scheduled API fetches to collect academic news and employs the OpenAI API to produce multi-paragraph overviews, helping users track emerging trends in software engineering.",
    order: 3
  },
  {
    title: "Just Be Funny",
    desc: "Improv game and creator hub for comedy themes.",
    stack: ["React Native", "Node.js", "MongoDB"],
    lastUpdated: "November 2024",
    githubLink: "https://github.com/akuligowski9/jbf",
    expandedDesc: "A ReactJS-based mobile app that gamifies improv. Built as a full-stack MVP with real-time scoring and cross-platform demos for iOS and Android.",
    order: 2
  },
  {
    title: "Brita",
    desc: "AI-powered documentation generator for contextual README files.",
    stack: ["Python", "Anthropic Claude", "GitHub API"],
    lastUpdated: "August 2024",
    githubLink: "https://github.com/akuligowski9/brita",
    expandedDesc: "An AI-powered documentation generator created with a small team. It integrates Anthropic Claude for natural-language documentation and uses the GitHub API to pull repository metadata and code summaries for accurate, contextual docs.",
    order: 6
  },
];
