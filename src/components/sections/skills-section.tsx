"use client";

import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

const featuredSkills = [
  {
    name: "Laravel",
    label: "Main framework",
    description: "My primary backend framework for structured, practical web application development.",
  },
  {
    name: "PHP",
    label: "Main language",
    description: "My core server-side language for backend features, logic, and application flow.",
  },
];

const techMarks: Record<string, string> = {
  Laravel: "L",
  PHP: "PHP",
  React: "R",
  "Next.js": "N",
  JavaScript: "JS",
  HTML: "H",
  CSS: "C",
  "Tailwind CSS": "TW",
  Mysql: "MY",
  PostgreSQL: "PG",
  Sqlite: "SQ",
  "Node.js": "ND",
  Python: "PY",
  Django: "DJ",
  Flutter: "FL",
  Kotlin: "KT",
  Java: "JV",
  Git: "GT",
  "C++": "C+",
};

const techPalette: Record<string, { bg: string; border: string; color: string }> = {
  Laravel: {
    bg: "rgb(var(--accent) / 0.12)",
    border: "rgb(var(--accent) / 0.3)",
    color: "rgb(var(--accent-strong))",
  },
  PHP: {
    bg: "rgb(var(--glow) / 0.12)",
    border: "rgb(var(--glow) / 0.28)",
    color: "rgb(var(--glow))",
  },
  React: {
    bg: "rgb(var(--glow) / 0.12)",
    border: "rgb(var(--glow) / 0.24)",
    color: "rgb(var(--glow))",
  },
  "Next.js": {
    bg: "rgb(var(--surface-strong) / 0.42)",
    border: "rgb(var(--panel-line) / 0.18)",
    color: "rgb(var(--ink))",
  },
  JavaScript: {
    bg: "rgb(var(--warm) / 0.16)",
    border: "rgb(var(--warm) / 0.34)",
    color: "rgb(var(--warm))",
  },
};

function TechIcon({ skill }: { skill: string }) {
  const palette = techPalette[skill] ?? {
    bg: "rgb(var(--surface-strong) / 0.32)",
    border: "rgb(var(--panel-line) / 0.14)",
    color: "rgb(var(--muted))",
  };

  return (
    <span
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border text-[0.72rem] font-semibold uppercase tracking-[0.16em]"
      style={{
        backgroundColor: palette.bg,
        borderColor: palette.border,
        color: palette.color,
      }}
      aria-hidden="true"
    >
      {techMarks[skill] ?? skill.slice(0, 2).toUpperCase()}
    </span>
  );
}

export function SkillsSection() {
  const allSkills = portfolio.skillGroups.flatMap((group) => group.skills);
  const uniqueSkills = Array.from(new Set(allSkills));

  return (
    <section id="skills" className="section-wrap py-16 sm:py-20">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Tech Stack"
            title="Laravel and PHP lead the stack, supported by practical tools across the full build."
            description="My main stack is centered on Laravel and PHP, with frontend and tooling choices that support reliable full-stack delivery."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {featuredSkills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 0.06} className="panel p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <TechIcon skill={skill.name} />
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">{skill.label}</p>
                  <h3 className="font-[var(--font-heading)] text-2xl font-semibold text-ink">{skill.name}</h3>
                  <p className="max-w-xl text-base leading-7 text-muted">{skill.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {portfolio.skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06} className="panel p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">{group.title}</p>
                  <p className="mt-4 max-w-xl text-base leading-7 text-muted">{group.description}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-right">
                  <span className="font-[var(--font-mono)] text-lg text-ink">
                    {group.skills.length.toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className={
                      skill === "Laravel" || skill === "PHP"
                        ? "flex items-center gap-3 rounded-[1.4rem] border border-accent/25 bg-accent/10 px-4 py-3"
                        : "flex items-center gap-3 rounded-[1.4rem] border border-line/15 bg-surface-strong/25 px-4 py-3"
                    }
                  >
                    <TechIcon skill={skill} />
                    <div>
                      <p className="text-sm font-medium text-ink">{skill}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted">Tech</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="panel-soft p-6 sm:p-7">
          <p className="text-sm uppercase tracking-[0.24em] text-muted">All Technologies</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {uniqueSkills.map((skill) => (
              <div
                key={skill}
                className={
                  skill === "Laravel" || skill === "PHP"
                    ? "flex items-center gap-3 rounded-[1.35rem] border border-accent/25 bg-accent/10 px-4 py-3"
                    : "flex items-center gap-3 rounded-[1.35rem] border border-line/15 bg-surface-strong/25 px-4 py-3"
                }
              >
                <TechIcon skill={skill} />
                <span className="text-sm font-medium text-ink">{skill}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
