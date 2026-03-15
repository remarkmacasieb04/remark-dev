"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolio } from "@/content/portfolio";
import { fadeUp, staggerContainer } from "@/components/ui/motion";
import bg5 from "@/images/bg5.png";
import bg6 from "@/images/bg6.png";

const spotlightSkills = ["PHP", "React", "Next.js", "Node.js", "Laravel"];
const heroTags = ["React + Next.js", "Laravel + Node.js", "Client-ready builds"];

export function HeroSection() {
  const { scrollY } = useScroll();
  const visualY = useTransform(scrollY, [0, 320], [0, 40]);
  const visualScale = useTransform(scrollY, [0, 320], [1, 0.97]);

  return (
    <section id="top" className="section-wrap pb-12 pt-8 sm:pb-16 sm:pt-10 lg:pb-24">
      <motion.div
        className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-7">
          <motion.div variants={fadeUp} className="space-y-4">
            <span className="eyebrow">Junior Developer Portfolio</span>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.28em] text-muted">
                {portfolio.role} / {portfolio.headline}
              </p>
              <h1 className="max-w-4xl font-[var(--font-heading)] text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Aspiring Full-Stack Developer focused on responsive web experiences.
              </h1>
              <p className="max-w-xl text-balance text-lg leading-8 text-muted sm:text-xl">
                {portfolio.heroIntro}
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Link href="#projects" className="button-primary">
              View Projects
            </Link>
            <Link href="#contact" className="button-secondary">
              Contact Me
            </Link>
            <Link
              href={portfolio.contact.resumeUrl || "#contact"}
              className={portfolio.contact.resumeUrl ? "button-ghost" : "button-ghost"}
            >
              {portfolio.contact.resumeUrl ? "Download CV" : "Request CV"}
            </Link>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-sm text-muted">
              Prefer a quick overview?{" "}
              <Link href="#assistant" className="font-semibold text-accent">
                Ask the assistant
              </Link>
              .
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-ink"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
            <Image
              src={bg5}
              alt=""
              sizes="(max-width: 1023px) 0px, (max-width: 1279px) 144px, 176px"
              className="site-art-cutout absolute -right-6 top-14 w-32 xl:right-0 xl:w-40"
            />
            <Image
              src={bg6}
              alt=""
              sizes="(max-width: 1023px) 0px, (max-width: 1279px) 128px, 160px"
              className="site-art-cutout absolute -bottom-4 -left-8 w-28 xl:left-0 xl:w-36"
            />
          </div>
          <motion.div
            className="panel relative overflow-hidden p-5 sm:p-6"
            style={{ y: visualY, scale: visualScale }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(102,184,255,0.2),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,135,84,0.18),transparent_36%)]" />
            <div className="hero-visual-overlay absolute inset-0" />
            <motion.div
              aria-hidden
              className="absolute right-6 top-6 h-24 w-24 rounded-full border border-white/10 bg-white/[0.04]"
              animate={{ y: [0, -10, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="absolute bottom-10 left-6 h-16 w-16 rounded-3xl border border-accent/30 bg-accent/10"
              animate={{ y: [0, 10, 0], x: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

            <div className="relative space-y-4">
              <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-xl">
                  <p className="text-sm uppercase tracking-[0.26em] text-accent">Now building</p>
                  <h2 className="mt-3 font-[var(--font-heading)] text-2xl font-semibold text-ink sm:text-3xl">
                    Clean interfaces, reliable backend work, and practical full-stack solutions.
                  </h2>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-canvas/60 px-4 py-3 text-left sm:min-w-36 sm:text-right">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">Current role</p>
                  <p className="mt-2 font-[var(--font-heading)] text-xl font-semibold text-ink">
                    OJT Developer
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {portfolio.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-white/10 bg-canvas/40 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-muted">{stat.label}</p>
                    <p className="mt-3 text-base font-semibold text-ink sm:text-lg">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="panel-soft p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted">Primary stack</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {spotlightSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-ink"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="panel-soft p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted">Best fit</p>
                  <p className="mt-3 text-base leading-7 text-ink">{portfolio.preferredWork}</p>
                  <Link href="#contact" className="mt-4 inline-flex text-sm font-semibold text-accent">
                    Let&apos;s connect
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
