import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('home');
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
            {t('role')}
          </p>

          <p className={paragraph}>
            {t('intro')}{" "}
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
      </section>

      {/* === Two-column details === */}
      <section className="grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div className="space-y-10">
          {/* What I'm Working On */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">
              {t('workingOnTitle')}
            </h2>

            <p className={paragraph}>
              {t('workingOnIntro')}
            </p>

            <ul className="space-y-2 text-base leading-relaxed text-slate-700">
              <li>
                <a
                  href="https://github.com/akuligowski9/kestrel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-800 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
                >
                  Kestrel
                </a>
                {" "}— {t('kestrelDesc')}
              </li>
              <li>
                <a
                  href="https://demo-the-shelf.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-800 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
                >
                  The Shelf
                </a>
                {" "}— {t('theShelfDesc')}
              </li>
              <li>
                <a
                  href="https://github.com/akuligowski9/project-bridge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-800 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-600"
                >
                  ProjectBridge
                </a>
                {" "}— {t('projectBridgeDesc')}
              </li>
              <li>
                <span className="font-medium text-slate-800">
                  ForThoseHere
                </span>
                {" "}— {t('forThoseHereDesc')}
              </li>
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
          </div>
        </div>

        {/* Right */}
        <div className="space-y-10">
          {/* Contact */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">{t('contactTitle')}</h2>

            <p className={paragraph}>
              {t('contactIntro')}
            </p>

            <div className="space-y-2 text-base leading-relaxed text-slate-700">
              <p>
                <span className="font-medium text-slate-800">{t('phone')}:</span>{" "}
                <a
                  className="underline underline-offset-4 hover:no-underline"
                  href="tel:+17347565627"
                >
                  +1 (734) 756-5627
                </a>
              </p>

              <p>
                <span className="font-medium text-slate-800">{t('email')}:</span>{" "}
                <a
                  className="underline underline-offset-4 hover:no-underline"
                  href="mailto:alekuligowski@gmail.com"
                >
                  alekuligowski@gmail.com
                </a>
              </p>

              <p>
                <span className="font-medium text-slate-800">{t('linkedin')}:</span>{" "}
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
                <span className="font-medium text-slate-800">{t('github')}:</span>{" "}
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
