"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { portfolio } from "@/content/portfolio";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Assistant", href: "/#assistant" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 py-5 sm:px-6">
      <div className="mx-auto w-full max-w-7xl rounded-[1.8rem] border border-white/[0.08] bg-surface/65 px-4 py-3 shadow-panel backdrop-blur-2xl sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <Image
                src="/images/6a6f12bc-f95b-442d-9362-87737dbc13ca.png"
                alt={`${portfolio.name} portrait`}
                fill
                sizes="44px"
                className="object-cover object-[center_40%]"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">{portfolio.name}</p>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="truncate">{portfolio.headline}</span>
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted hover:bg-white/[0.05] hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-ink lg:hidden"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                    isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                    isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
            <Link href="/#projects" className="button-secondary hidden sm:inline-flex">
              View Projects
            </Link>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="mt-4 border-t border-white/10 pt-4 lg:hidden">
            <nav className="grid gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-muted hover:bg-white/[0.06] hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#projects"
                onClick={() => setIsMenuOpen(false)}
                className="button-secondary mt-2 justify-center"
              >
                View Projects
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
