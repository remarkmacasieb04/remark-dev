import Link from "next/link";
import { portfolio } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="section-wrap pb-10 pt-6">
      <div className="panel flex flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.28em] text-accent">Portfolio</p>
          <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-ink">
            {portfolio.name}
          </h2>
          <p className="max-w-xl text-sm leading-7 text-muted">
            Junior developer portfolio focused on modern interfaces, practical project work,
            and the path toward full stack development.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-muted sm:items-end">
          <p>Built with Next.js, Tailwind CSS, Framer Motion, LangChain, and Groq.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="#projects" className="hover:text-ink">
              Projects
            </Link>
            <Link href="#assistant" className="hover:text-ink">
              Assistant
            </Link>
            <Link href="#contact" className="hover:text-ink">
              Contact
            </Link>
          </div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted/80">
            © 2026 Remark F. Macasieb
          </p>
        </div>
      </div>
    </footer>
  );
}

