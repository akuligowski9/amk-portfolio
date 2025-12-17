import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

export default function Home() {
  const latestProject = projects[0]; // or projects[projects.length - 1];

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
          <p>Welcome to my portfolio 👋</p>

          <p>
            Over the last 5 years, I was a digital nomad who’s traveled the
            world. As of 2025, I’m thrilled to have married my wife and we’re
            transitioning from nomads to starting a family.
          </p>

          <p>
            While traveling, I had the opportunity to work remotely in roles
            that strengthened my technical skills and supported our adventures
            abroad. After a recent layoff tied to U.S. education budget cuts,
            I’m experimenting with new technologies and letting that curiosity
            take shape in my portfolio.
          </p>

          {/* Links / Resume */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/AMK2025Resume.pdf"
              target="_blank"
              className="bg-[var(--primary)] text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition"
            >
              Download Resume
            </Link>
            <Link
              href="mailto:alekuligowski@gmail.com"
              className="text-sm underline-offset-4 hover:underline"
            >
              Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/akuligowski"
              target="_blank"
              className="text-sm underline-offset-4 hover:underline"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/akuligowski"
              target="_blank"
              className="text-sm underline-offset-4 hover:underline"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* === Two-column details === */}
      <section className="grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">
            What I&apos;m working on
          </h2>
          <p>
            Lately I&apos;ve been exploring agent workflows and data-shaped
            problems like topological data analysis.
          </p>

          <p>
            In{" "}
            <Link
              href="/projects"
              className="underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
            >
              Projects
            </Link>{" "},
            you&apos;ll find a mix of things I&apos;ve built in my free time
            and with teams over the years. Right now, I&apos;m actively developing {" "}
            <span className="font-medium">{latestProject.title}</span> —{" "}
            {latestProject.desc}
          </p>
        </div>

        {/* Right */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Contact</h2>

          <p>
            Email is the best way to reach me. I&apos;m open to strong
            mid-level or senior full-stack roles, especially where there&apos;s
            room to own a problem end-to-end.
          </p>

          <div className="space-y-1">
            <p>
              <strong>Email:</strong> alekuligowski@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Lima, Peru (transitioning to U.S. when
              visa approved)
            </p>
            <p>
              <strong>Open to:</strong> Remote / flexible U.S. roles
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
