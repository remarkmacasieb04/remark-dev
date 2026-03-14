"use client";

import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-wrap py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="About Me"
            title="Building practical products while growing into full-stack work."
            description={portfolio.about}
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal className="panel p-6 sm:col-span-2">
            <p className="text-sm uppercase tracking-[0.24em] text-muted">Profile</p>
            <div className="mt-4 grid gap-4 text-base leading-7 text-muted sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-accent">Role</p>
                <p className="mt-2 text-ink">{portfolio.role}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-accent">Specialization</p>
                <p className="mt-2 text-ink">{portfolio.specialization}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-accent">Current focus</p>
                <p className="mt-2 text-ink">{portfolio.currentFocus}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-accent">Expected graduation</p>
                <p className="mt-2 text-ink">{portfolio.expectedGraduation}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-muted">{portfolio.availability}</p>
          </Reveal>

          {portfolio.values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.08} className="panel-soft p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-accent">{value.title}</p>
              <p className="mt-4 text-base leading-7 text-muted">{value.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
