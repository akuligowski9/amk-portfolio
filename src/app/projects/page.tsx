"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data/projects";

const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Projects</h1>

      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-slate-700">
        What I've been building. Questions welcome.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedProjects.map((p) => {
          const isOpen = expanded === p.title;

          return (
            <Card
              key={p.title}
              className="
                group
                border-slate-200 bg-white shadow-sm
                transition hover:shadow-md
                dark:border-slate-700 dark:bg-slate-900
              "
            >
              <CardHeader
                role="button"
                tabIndex={0}
                onClick={() => setExpanded(isOpen ? null : p.title)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setExpanded(isOpen ? null : p.title);
                  }
                }}
                className="
                  flex cursor-pointer flex-row items-center justify-between gap-3
                  rounded-t-xl
                  hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300
                  dark:hover:bg-slate-800/50 dark:focus:ring-slate-700
                "
              >
                <CardTitle className="group-hover:text-slate-900 dark:group-hover:text-white">
                  {p.title}
                </CardTitle>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpanded(isOpen ? null : p.title);
                  }}
                  aria-expanded={isOpen}
                  className="
                    flex items-center gap-2 rounded-md px-2 py-1
                    text-slate-500 hover:text-slate-700
                    dark:hover:text-slate-300
                  "
                >
                  <span className="text-xs">{isOpen ? "Less" : "Details"}</span>
                  <span
                    className={[
                      "text-lg leading-none transition-transform duration-200",
                      isOpen ? "rotate-45" : "rotate-0",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </CardHeader>

              <CardContent>
                <p className="mb-3 text-sm text-slate-500">{p.desc}</p>

                <div className="mb-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {isOpen && (
                  <div className="mt-4 space-y-3 rounded-lg bg-slate-50 p-4 text-sm dark:bg-slate-800/30">
                    <div className="text-slate-500">
                      <span className="font-medium text-slate-700 dark:text-slate-200">
                        Last updated:
                      </span>{" "}
                      {p.lastUpdated}
                    </div>

                    <div className="flex flex-col gap-1">
                      {p.demoLink && (
                        <a
                          href={p.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                        >
                          View Demo →
                        </a>
                      )}
                      <a
                        href={p.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                      >
                        View on GitHub →
                      </a>
                    </div>

                    {p.expandedDesc && (
                      <p className="text-slate-500">{p.expandedDesc}</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
