"use client";

import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function JourneySection() {
  return (
    <section id="journey" className="section-wrap py-16 sm:py-20">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Journey"
            title="A path shaped by learning, projects, and real-world experience."
            description="My journey combines academic growth, hands-on builds, and practical development experience."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {portfolio.journey.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08} className="panel p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-muted">
                  {step.period}
                </span>
                <span className="font-[var(--font-mono)] text-sm text-accent">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 font-[var(--font-heading)] text-2xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
