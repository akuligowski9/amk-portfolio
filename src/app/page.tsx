import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

export default function Home() {
  const featuredProject = [...projects].sort((a, b) => a.order - b.order)[0];
  const paragraph = "text-base leading-relaxed text-slate-700";

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-16">
      {/* === Hero Card === */}
      <section className="bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-sm p-10 flex flex-col md:flex-row gap-10 items-center">
        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <Image
            src="/me.png"
            alt="Alex Kuligowski"
            width={300}
            height={200}
            className="rounded-full object-cover shadow-sm"
          />
        </div>

        {/* Text */}
        <div className="space-y-4 max-w-xl">
          <p className="text-lg font-medium tracking-wide text-slate-800 uppercase">
            Software Engineer
          </p>

          <p className={paragraph}>
            I've been in tech for 10 years. Started in QA, moved into solutions engineering, now I build full-stack apps. I ask questions and communicate clearly.
          </p>

          <p className={paragraph}>
            Currently based in Lima, Peru with my wife during a visa transition, with plans to relocate to Michigan in 2026.
          </p>

          <p className={paragraph}>
            Open to remote roles or relocation for the right opportunity.{" "}
            <Link
              href="/AMK2025Resume.pdf"
              target="_blank"
              className="underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
            >
              Download my resume
            </Link>
            .
          </p>
        </div>
      </section>

      {/* === Two-column details === */}
      <section className="grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div className="space-y-10">
          {/* What I'm Working On */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">
              What I&apos;m Working On
            </h2>

            <p className={paragraph}>
              Creating with software is a daily practice. A couple of recent projects:
            </p>

            <ul className="space-y-2 text-base leading-relaxed text-slate-700">
              <li>
                <a
                  href="https://demo-the-shelf.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-800 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
                >
                  The Shelf
                </a>
                {" "}— An attention-management app for tracking progress and building healthy routines.
              </li>
              <li>
                <a
                  href="https://chiribudgetdemo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-800 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
                >
                  ChiriBudget
                </a>
                {" "}— A budgeting app to track family finances and visualize spending.
              </li>
            </ul>

            <p className={paragraph}>
              More projects and experiments in{" "}
              <Link
                href="/projects"
                className="underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
              >
                Work
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-10">
          {/* Contact */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Contact</h2>

            <p className={paragraph}>
              Best way to reach me is phone or email. Also open to collaborating on GitHub projects or consulting on AI automation.
            </p>

            <div className="space-y-2 text-base leading-relaxed text-slate-700">
              <p>
                <span className="font-medium text-slate-800">Phone:</span>{" "}
                <a
                  className="underline underline-offset-4 hover:no-underline"
                  href="tel:+17347565627"
                >
                  +1 (734) 756-5627
                </a>
              </p>

              <p>
                <span className="font-medium text-slate-800">Email:</span>{" "}
                <a
                  className="underline underline-offset-4 hover:no-underline"
                  href="mailto:alekuligowski@gmail.com"
                >
                  alekuligowski@gmail.com
                </a>
              </p>

              <p>
                <span className="font-medium text-slate-800">LinkedIn:</span>{" "}
                <a
                  className="underline underline-offset-4 hover:no-underline"
                  href="https://www.linkedin.com/in/alexkuligowski"
                  target="_blank"
                  rel="noreferrer"
                >
                  /in/akuligowski
                </a>
              </p>

              <p>
                <span className="font-medium text-slate-800">GitHub:</span>{" "}
                <a
                  className="underline underline-offset-4 hover:no-underline"
                  href="https://github.com/akuligowski9"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/akuligowski9
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
