"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects, ProjectStatus } from "@/lib/data/projects";
import { Github, ExternalLink, Lock } from "lucide-react";
import { useTranslations } from 'next-intl';

const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.stack))
).sort();

const statusDotStyles: Record<ProjectStatus, string> = {
  Active: "bg-green-500",
  Maintenance: "bg-yellow-500",
  Archived: "bg-slate-400",
};

const projectDescriptionKeys: Record<string, string> = {
  "The Shelf": "the-shelf",
  "Kestrel": "kestrel",
  "ChiriBudget": "chiribudget",
  "Abstractly": "abstractly",
  "Just Be Funny": "just-be-funny",
  "Brita": "brita",
  "AMK Portfolio": "amk-portfolio",
  "ProjectBridge": "project-bridge",
  "ForThoseHere": "for-those-here",
};

export default function Projects() {
  const t = useTranslations('projects');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!selectedTech) return sortedProjects;
    return sortedProjects.filter((p) => p.stack.includes(selectedTech));
  }, [selectedTech]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">{t('title')}</h1>

      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-700">
        {t('subtitle')}
      </p>

      {/* Technology Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTech(null)}
            className={`rounded-full px-3 py-1 text-xs transition ${
              selectedTech === null
                ? "bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            {t('filterAll')}
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
              className={`rounded-full px-3 py-1 text-xs transition ${
                selectedTech === tech
                  ? "bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((p) => {
          const descKey = projectDescriptionKeys[p.title];
          return (
            <Card
              key={p.title}
              className="
                flex flex-col
                border-slate-200 bg-white shadow-sm
                transition hover:shadow-md
                dark:border-slate-700 dark:bg-slate-900
              "
            >
              <CardHeader className="flex flex-row items-center justify-between gap-3">
                <CardTitle>{p.title}</CardTitle>
                <span
                  className="flex cursor-help items-center gap-1.5 rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-500 dark:border-slate-700"
                  title={t(`statusDescriptions.${p.status}`)}
                >
                  <span className={`h-2 w-2 rounded-full ${statusDotStyles[p.status]}`} />
                  {t(`status.${p.status}`)}
                </span>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <div className="mb-3 flex flex-wrap gap-3">
                  {p.demoLink && (
                    <a
                      href={p.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline dark:text-blue-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t('demo')}
                    </a>
                  )}
                  {p.githubLink ? (
                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline dark:text-blue-400"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-slate-400 dark:text-slate-500">
                      <Lock className="h-3.5 w-3.5" />
                      {t('privateRepo')}
                    </span>
                  )}
                  {!p.demoLink && !p.githubLink && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-slate-400 dark:text-slate-500">
                      {t('comingSoon')}
                    </span>
                  )}
                </div>

                <p className="mb-3 text-sm text-slate-500">
                  {descKey ? t(`descriptions.${descKey}`) : p.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-slate-500">
          {t('noResults')}
        </p>
      )}
    </main>
  );
}
