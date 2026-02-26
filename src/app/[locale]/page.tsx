import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from 'next-intl/server';
import { ContactForm } from "@/components/site/contact-form";

const featuredProjects = [
  { name: "Uywayki", href: "https://uywayki.app/", descKey: "uywaykiDesc" as const },
  { name: "The Shelf", href: "https://demo-the-shelf.vercel.app/login", descKey: "theShelfDesc" as const },
  { name: "ProjectBridge", href: "https://github.com/akuligowski9/project-bridge", descKey: "projectBridgeDesc" as const },
  { name: "Kestrel", href: "https://github.com/akuligowski9/kestrel", descKey: "kestrelDesc" as const },
];

export default async function Home() {
  const t = await getTranslations('home');
  const paragraph = "text-base leading-relaxed text-slate-700";

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* === Left: Hero card (sticky on desktop) === */}
        <aside className="lg:w-80 lg:flex-shrink-0 lg:sticky lg:top-24 lg:self-start">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-sm p-6 text-center space-y-4">
            <Image
              src="/me.png"
              alt="Alex Kuligowski"
              width={180}
              height={180}
              className="mx-auto w-40 h-40 rounded-full object-cover shadow-sm"
            />

            <p className="text-lg lg:text-sm font-medium text-muted-foreground">
              {t('role')}
            </p>

            <p className="text-base lg:text-sm leading-relaxed text-slate-700">
              {t('intro')}
            </p>

            <p className="text-base lg:text-sm leading-relaxed text-slate-700">
              {t('availability')}{" "}
              <a
                href="/AMK2025Resume.pdf"
                target="_blank"
                className="underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
              >
                {t('downloadResume')}
              </a>
              .
            </p>
          </div>
        </aside>

        {/* === Right: Projects + Contact stacked === */}
        <div className="flex-1 space-y-12">
          {/* Projects */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">
              {t('workingOnTitle')}
            </h2>

            <p className={paragraph}>
              {t('workingOnIntro')}
            </p>

            <ul className="space-y-2 text-base leading-relaxed text-slate-700">
              {featuredProjects.map((project) => (
                <li key={project.name}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-800 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
                  >
                    {project.name}
                  </a>
                  {" "}— {t(project.descKey)}
                </li>
              ))}
            </ul>

            <p className={paragraph}>
              {t('moreProjects')}{" "}
              <Link
                href="/projects"
                className="underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
              >
                {t('workLink')}
              </Link>
              .
            </p>
          </section>

          {/* Contact */}
          <section>
            <ContactForm />
          </section>
        </div>
      </div>
    </main>
  );
}
