"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

export function NavBar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/" as const, label: t('home') },
    { href: "/projects" as const, label: t('work') },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#4f634d] text-white shadow">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">

        {/* LEFT: Name */}
        <Link
          href="/"
          className="text-sm font-medium tracking-widest uppercase text-white hover:text-white/90"
        >
          Alex Kuligowski
        </Link>

        {/* CENTER: Desktop navigation */}
        <nav className="hidden gap-8 md:flex items-center">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm transition-colors",
                  active
                    ? "text-white font-medium"
                    : "text-white/70 hover:text-white"
                )}
              >
                {l.label}
              </Link>
            );
          })}

          {/* Language Switcher */}
          <div className="flex items-center gap-2 ml-4">
            <Link
              href={pathname}
              locale="en"
              className={cn(
                "text-sm px-2 py-1 rounded transition-colors",
                locale === 'en'
                  ? "bg-white/20 text-white font-medium"
                  : "text-white/70 hover:text-white"
              )}
            >
              EN
            </Link>
            <span className="text-white/40">|</span>
            <Link
              href={pathname}
              locale="es"
              className={cn(
                "text-sm px-2 py-1 rounded transition-colors",
                locale === 'es'
                  ? "bg-white/20 text-white font-medium"
                  : "text-white/70 hover:text-white"
              )}
            >
              ES
            </Link>
          </div>
        </nav>

        {/* RIGHT: Mobile menu button */}
        <button
          className="md:hidden rounded px-3 py-2 text-2xl text-white/80 hover:text-white"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-white/20 bg-[#4f634d]">
          <nav className="mx-auto flex max-w-5xl flex-col space-y-1 px-4 py-3">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded px-2 py-2 text-sm",
                    active
                      ? "text-white font-medium"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 pt-2 mt-2 border-t border-white/20">
              <Link
                href={pathname}
                locale="en"
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm px-2 py-1 rounded transition-colors",
                  locale === 'en'
                    ? "bg-white/20 text-white font-medium"
                    : "text-white/70 hover:text-white"
                )}
              >
                EN
              </Link>
              <span className="text-white/40">|</span>
              <Link
                href={pathname}
                locale="es"
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm px-2 py-1 rounded transition-colors",
                  locale === 'es'
                    ? "bg-white/20 text-white font-medium"
                    : "text-white/70 hover:text-white"
                )}
              >
                ES
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
