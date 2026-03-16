"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import bg7 from "@/images/bg7.png";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-wrap py-16 sm:py-20">
      <div className="space-y-10">
        <Reveal className="relative overflow-visible">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work that reflects how I build practical solutions."
            description="These projects highlight clear workflows, usable interfaces, and real implementation."
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-4 -top-10 hidden w-24 lg:block"
            animate={{ y: [0, -14, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Image
              src={bg7}
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
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block rounded-[2rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  >
                    {project.imageSrc ? (
                      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
                        <div className="relative aspect-[16/9] w-full">
                          <Image
                            src={project.imageSrc}
                            alt={`${project.title} preview`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative overflow-hidden rounded-[2rem] border border-dashed border-white/15 bg-[linear-gradient(135deg,rgba(255,135,84,0.18),rgba(102,184,255,0.12))] p-6">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(5,8,18,0.32),transparent_42%)]" />
                        <div className="relative flex min-h-[14rem] flex-col justify-between">
                          <span className="text-xs uppercase tracking-[0.24em] text-accent">
                            Project image
                          </span>
                          <div className="space-y-2">
                            <p className="font-[var(--font-heading)] text-2xl font-semibold text-ink">
                              {project.imagePlaceholder}
                            </p>
                            <p className="text-sm text-muted">
                              Replace this placeholder with a screenshot of {project.title}.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </Link>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-accent">
                        Project 0{index + 1}
                      </p>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="mt-4 block font-[var(--font-heading)] text-3xl font-semibold text-ink hover:text-accent"
                      >
                        {project.title}
                      </Link>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 font-[var(--font-mono)] text-sm text-muted">
                      {project.role}
                    </div>
                  </div>

                  <p className="mt-5 text-base leading-7 text-muted">{project.description}</p>
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
                    <Link href={`/projects/${project.slug}`} className="button-primary">
                      View Case Study
                    </Link>
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
