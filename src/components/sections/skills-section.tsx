"use client";

import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsSection() {
  const allSkills = portfolio.skillGroups.flatMap((group) => group.skills);

  return (
    <section id="skills" className="section-wrap py-16 sm:py-20">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Tech Stack"
            title="Core tools I use across frontend and backend work."
            description="I work across interface development and backend implementation, with a focus on practical web solutions."
          />
        </Reveal>

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
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-canvas/50 px-4 py-2 text-sm text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="panel-soft p-6 sm:p-7">
          <p className="text-sm uppercase tracking-[0.24em] text-muted">All Technologies</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {Array.from(new Set(allSkills)).map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-ink"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
