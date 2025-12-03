import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-16">

      {/* === Hero Card === */}
      <section className="bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-sm p-10 flex flex-col md:flex-row gap-10 items-center">
        
        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <Image
            src="/me.png"
            alt="Alex Kuligowski"
            width={400}
            height={360}
            className="rounded-full object-cover shadow-sm"
          />
        </div>

        {/* Text */}
        <div className="space-y-4 max-w-xl">
          <h1 className="text-3xl font-bold tracking-tight">Alex Kuligowski</h1>
          <p className="text-sm tracking-wide text-[var(--muted-foreground)] uppercase">
            Software Engineer
          </p>

          <p>
            I'm a software engineer with a background in economics and mathematics, 
            currently completing an M.S. in Software Engineering at West Virginia University. 
            I enjoy building clean, thoughtful systems and making tools that feel calm instead of chaotic.
          </p>

          <p>
            I'm based in Lima, Peru while my wife's U.S. spousal visa is processed, and I'm focused on 
            remote-friendly roles with a path to transition to the United States.
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
            <Link href="mailto:alekuligowski@gmail.com" className="text-sm underline-offset-4 hover:underline">
              Email
            </Link>
            <Link href="https://www.linkedin.com/in/akuligowski" target="_blank" className="text-sm underline-offset-4 hover:underline">
              LinkedIn
            </Link>
            <Link href="https://github.com/akuligowski" target="_blank" className="text-sm underline-offset-4 hover:underline">
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* === Two-column details === */}
      <section className="grid md:grid-cols-2 gap-16">

        {/* Left */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">What I like to work on</h2>

          <p>
            I enjoy full-stack work where I can move between product thinking,
            backend design, and front-end polish. I care about readable code,
            sensible abstractions, and systems that feel predictable and calm.
          </p>

          <p>
            Lately I've been exploring agent workflows and data-shaped problems 
            like topological data analysis.
          </p>
        </div>

        {/* Right */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Contact</h2>

          <p>
            Email is the best way to reach me. I'm open to strong mid-level or 
            senior full-stack roles, especially where there's room to own a 
            problem end-to-end.
          </p>

          <div className="space-y-1">
            <p><strong>Email:</strong> alekuligowski@gmail.com</p>
            <p><strong>Location:</strong> Lima, Peru (transitioning to U.S. when visa approved)</p>
            <p><strong>Open to:</strong> Remote / flexible U.S. roles</p>
          </div>
        </div>

      </section>
    </main>
  );
}
