"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data/projects";
import { Github, Lock, Globe } from "lucide-react";
import { useTranslations } from 'next-intl';

const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.stack))
).sort();

const projectDescriptionKeys: Record<string, string> = {
  "The Shelf": "the-shelf",
  "Kestrel": "kestrel",
  "ChiriBudget": "chiribudget",
  "Abstractly": "abstractly",
  "ProjectBridge": "project-bridge",
  "ForThoseHere": "for-those-here",
  "Uywayki": "uywayki",
  "API Gallery": "api-gallery",
};

export default function Projects() {
  const t = useTranslations('projects');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    const observer = new ResizeObserver(checkScroll);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      observer.disconnect();
    };
  }, [checkScroll]);

  // Auto-scroll active chip into view
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const active = el.querySelector("[data-active='true']") as HTMLElement;
    if (active) {
      active.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    }
  }, [selectedTech]);

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
      <div className="relative mb-8">
        {/* Left fade */}
        <div
          className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[var(--background)] to-transparent transition-opacity duration-200 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Right fade */}
        <div
          className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[var(--background)] to-transparent transition-opacity duration-200 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scrollbar-none"
        >
          <button
            data-active={selectedTech === null}
            onClick={() => setSelectedTech(null)}
            className={`shrink-0 rounded-full px-3 py-1 text-xs transition ${
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
              data-active={selectedTech === tech}
              onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
              className={`shrink-0 rounded-full px-3 py-1 text-xs transition ${
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
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <div className="mb-3 flex flex-wrap gap-3">
                  {p.websiteLink && (
                    <a
                      href={p.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline dark:text-blue-400"
                    >
                      <Globe className="h-4 w-4" />
                      {t('website')}
                    </a>
                  )}
                  {p.demoLink && (
                    <a
                      href={p.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline dark:text-blue-400"
                    >
                      <Globe className="h-4 w-4" />
                      {t('website')}
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
                  ) : !p.websiteLink && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-slate-400 dark:text-slate-500">
                      <Lock className="h-3.5 w-3.5" />
                      {t('privateRepo')}
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
