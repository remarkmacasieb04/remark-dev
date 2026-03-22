import Link from "next/link";
import Image from "next/image";
import { portfolio } from "@/content/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-wrap pb-10 pt-6">
      <div className="panel px-6 py-6 sm:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                <Image
                  src="/images/6a6f12bc-f95b-442d-9362-87737dbc13ca.png"
                  alt={`${portfolio.name} portrait`}
                  fill
                  sizes="64px"
                  className="object-cover object-[center_40%]"
                />
              </div>
              <div className="space-y-1">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-accent">Portfolio</p>
                <h2 className="font-[var(--font-heading)] text-xl font-semibold text-ink sm:text-2xl">
                  {portfolio.name}
                </h2>
                <p className="text-sm text-muted">{portfolio.headline}</p>
              </div>
            </div>

            <div className="max-w-md space-y-3 lg:text-right">
              <p className="text-sm leading-7 text-muted">
                Junior developer portfolio focused on practical builds, clear UI, and steady full-stack growth.
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted lg:justify-end">
                <Link href="/#about" className="hover:text-ink">
                  About
                </Link>
                <Link href="/#projects" className="hover:text-ink">
                  Projects
                </Link>
                <Link href="/#skills" className="hover:text-ink">
                  Skills
                </Link>
                <Link href="/#contact" className="hover:text-ink">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.24em] text-muted/80 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Remark F. Macasieb</p>
            <p>Available for web development work</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
