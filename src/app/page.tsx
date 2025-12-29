import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

export default function Home() {
  const featuredProject = [...projects].sort((a, b) => a.order - b.order)[0];

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

          <p>Welcome to my portfolio 👋</p>

          <p>
            Over the last five years, I lived as a digital nomad, traveling
            extensively while working remotely. As of 2025, I’m thrilled to have
            married my wife and we’re transitioning from nomads to starting a
            family.
          </p>

          <p>
            During that time, I worked in remote engineering roles that
            strengthened my technical foundation. After a recent layoff tied to
            U.S. education budget cuts, I’ve been building and shipping small
            projects to stay sharp and current.
          </p>
        </div>
      </section>

      {/* === Two-column details === */}
      <section className="grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">
            What I&apos;m Working On
          </h2>

          <p>
            Right now, the body of work I’m most excited about is{" "}
            <span className="font-medium">{featuredProject.title}</span> — a
            flexible attention-management app designed to support long-term
            goals, visualize progress, and create space to recognize
            accomplishments while building healthy routines. Additional 
            works and experiments can be found in{" "}
            <Link
              href="/projects"
              className="underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
            >
              Projects
            </Link>
            .
          </p>

          <p>
            Alongside this work, I’m finishing my{" "}
            <span className="font-medium">M.S. in Software Engineering</span> at{" "}
            <span className="font-medium">West Virginia University</span>, with a
            focus on systems thinking and software design. I’m also currently
            reading{" "}
            <a
              href="https://www.amazon.com/Code-Language-Computer-Hardware-Software/dp/0137909101"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
            >
              Code: The Hidden Language of Computer Hardware and Software
            </a>{" "}
            to deepen my understanding of how low-level systems shape
            higher-level software abstractions.
          </p>
        </div>

        {/* Right */}
        <div className="space-y-10">
          {/* Work Logistics */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">
              Professional Logistics
            </h2>

            <p className="text-slate-700">
              I’m currently based in Lima, Peru, with plans to relocate to
              Michigan once my wife’s spousal visa is approved (anticipated in
              2026).
            </p>

            <p className="text-slate-700">
              During this transition, I prefer remote or flexible roles, but
              I’m open to relocating for the right opportunity. For a full overview of my professional background, you can{" "}
              <Link
                href="/AMK2025Resume.pdf"
                target="_blank"
                className="underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
              >
                download my resume
              </Link>
              .
            </p>

          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Contact</h2>

            <div className="space-y-2 text-sm">
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  className="underline underline-offset-4 hover:no-underline"
                  href="tel:+17347565627"
                >
                  +1 (734) 756-5627
                </a>
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a
                  className="underline underline-offset-4 hover:no-underline"
                  href="mailto:alekuligowski@gmail.com"
                >
                  alekuligowski@gmail.com
                </a>
              </p>

              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  className="underline underline-offset-4 hover:no-underline"
                  href="https://www.linkedin.com/in/alexkuligowski/"
                  target="_blank"
                  rel="noreferrer"
                >
                  /in/akuligowski
                </a>
              </p>

              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  className="underline underline-offset-4 hover:no-underline"
                  href="https://github.com/akuligowski9"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/akuligowski
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
