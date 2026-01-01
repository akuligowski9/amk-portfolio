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

          <p className={paragraph}>Welcome to my portfolio 👋</p>

          <p className={paragraph}>
            Over the last five years, I lived as a digital nomad, traveling
            extensively while working remotely. As of 2025, I’m thrilled to have
            married my wife, and we’re currently based in Peru with plans to
            relocate to Michigan once her spousal visa is approved (anticipated
            in 2026). 
          </p>
            
          <p className={paragraph}>
            During this transition, I’m seeking remote or flexible
            roles while remaining open to relocating for the right opportunity. For
            a full overview of my professional background, you can{" "}
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
      </section>

      {/* === Two-column details === */}
      <section className="grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">
            What I&apos;m Working On
          </h2>

          <p className={paragraph}>
            Right now, the body of work I’m most excited about is{" "}
            <span className="font-medium text-slate-800">The Shelf</span>. It's a
            flexible attention-management app designed to support long-term
            goals, visualize progress, and create space to recognize
            accomplishments while building healthy routines. Additional projects
            and experiments can be found in{" "}
            <Link
              href="/projects"
              className="underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
            >
              Work
            </Link>
            .
          </p>

          <p className={paragraph}>
            I’m also finishing my{" "}
            <span className="font-medium text-slate-800">
              M.S. in Software Engineering at West Virginia University
            </span>
            , with a focus on systems thinking and software design.
            During the program, I built and delivered{" "}
            <a
              href="https://github.com/akuligowski9/jbf"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate-800 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
            >
              Just Be Funny
            </a>
            , a full-stack, cross-platform mobile improv game and comedy academy
            with real-time scoring. The project focused on translating abstract
            game mechanics into a reliable, user-friendly mobile system.
          </p>
        </div>

        {/* Right */}
        <div className="space-y-10">
          {/* Contact */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">Contact</h2>

            <p className={paragraph}>
              My preferred
              method of contact is phone or email, and I aim to respond to all inquiries within 24 hours. If
              you prefer connecting via LinkedIn or GitHub, that’s absolutely
              fine too, just send me a message there. I’m always open to discussing new
              collaborations.
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
