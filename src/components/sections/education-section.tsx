"use client";

import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection() {
  return (
    <section id="education" className="section-wrap py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Current education and technical specialization."
            description={`I am completing ${portfolio.degree} at ${portfolio.university}, with a focus on ${portfolio.specialization} and expected graduation in ${portfolio.expectedGraduation}.`}
          />
        </Reveal>

        <div className="relative space-y-6">
          <div className="absolute left-[1.2rem] top-0 hidden h-full w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent sm:block" />
          {portfolio.education.map((entry, index) => (
            <Reveal key={entry.school} delay={index * 0.08} className="relative">
              <div className="panel flex gap-4 p-6 sm:gap-6 sm:p-7">
                <div className="relative hidden sm:block">
                  <div className="mt-2 h-4 w-4 rounded-full border border-accent/40 bg-accent shadow-[0_0_0_8px_rgba(88,197,167,0.10)]" />
                </div>
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">{entry.years}</p>
                  <h3 className="font-[var(--font-heading)] text-2xl font-semibold text-ink">
                    {entry.school}
                  </h3>
                  <p className="text-base font-medium text-ink/90">{entry.credential}</p>
                  {entry.focus ? <p className="text-base text-muted">{entry.focus}</p> : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
