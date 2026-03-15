import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/content/portfolio";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Assistant", href: "#assistant" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 py-5 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-[1.8rem] border border-white/[0.08] bg-surface/65 px-4 py-3 shadow-panel backdrop-blur-2xl sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <Image
              src="/images/6a6f12bc-f95b-442d-9362-87737dbc13ca.png"
              alt={`${portfolio.name} portrait`}
              fill
              sizes="44px"
              className="object-cover object-[center_18%]"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">{portfolio.name}</p>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {portfolio.headline}
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
          <Link href="#projects" className="button-secondary hidden sm:inline-flex">
            View Projects
          </Link>
        </div>
      </div>
    </header>
  );
}
