"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-wrap py-16 sm:py-20">
      <div className="space-y-10">
        <Reveal className="relative overflow-visible">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work that shows how I solve practical product problems."
            description="I focus on projects that improve clarity, structure information well, and make user flow feel simpler from the first interaction."
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-4 -top-10 hidden w-24 lg:block"
            animate={{ y: [0, -14, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Image
              src="/images/microbot.png"
              alt=""
              width={96}
              height={96}
              sizes="96px"
              className="h-auto w-full object-contain drop-shadow-[0_18px_28px_rgba(5,10,24,0.38)]"
            />
          </motion.div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="panel group relative h-full overflow-hidden p-6 sm:p-7"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,197,167,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(232,147,98,0.14),transparent_36%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-accent">
                        Project 0{index + 1}
                      </p>
                      <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold text-ink">
                        {project.title}
                      </h3>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 font-[var(--font-mono)] text-sm text-muted">
                      {project.role}
                    </div>
                  </div>

                  <p className="mt-5 text-base leading-7 text-muted">{project.description}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/8 bg-canvas/45 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-accent">Problem</p>
                      <p className="mt-3 text-sm leading-7 text-muted">{project.problem}</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-canvas/45 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-accent">Approach</p>
                      <p className="mt-3 text-sm leading-7 text-muted">{project.solution}</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-canvas/45 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-accent">What it shows</p>
                      <p className="mt-3 text-sm leading-7 text-muted">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-ink"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.demoUrl ? (
                      <Link href={project.demoUrl} className="button-secondary">
                        Live Demo
                      </Link>
                    ) : null}
                    {project.githubUrl ? (
                      <Link href={project.githubUrl} className="button-secondary">
                        GitHub
                      </Link>
                    ) : null}
                    {!project.demoUrl && !project.githubUrl ? (
                      <Link href="#contact" className="button-secondary">
                        Request Walkthrough
                      </Link>
                    ) : null}
                    <Link href="#contact" className="button-ghost">
                      Contact Me
                    </Link>
                  </div>

                  {!project.demoUrl && !project.githubUrl ? (
                    <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted">
                      Public links are not published yet, but a walkthrough is available on request.
                    </p>
                  ) : null}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
