"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#4f634d] text-white shadow">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">

        {/* LEFT: Name */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white hover:text-white/90"
        >
          Alex Kuligowski
        </Link>

        {/* CENTER: Desktop navigation */}
        <nav className="hidden gap-8 md:flex">
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
        </nav>

        {/* RIGHT: Mobile menu button */}
        <button
          className="md:hidden rounded px-2 py-1 text-white/80 hover:text-white"
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
          </nav>
        </div>
      )}
    </header>
  );
}
