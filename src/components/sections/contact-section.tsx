"use client";

import Link from "next/link";
import { useState } from "react";
import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<string>("");
  const hasEmail = !portfolio.contact.emailPlaceholder;
  const publicLinks = portfolio.contact.socialLinks.filter((link) => !link.placeholder);
  const hasResume = Boolean(portfolio.contact.resumeUrl);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!hasEmail) {
      setStatus(
        "Email is not public on the site yet. Please use the available public links or request contact details.",
      );
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:${portfolio.contact.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with a pre-filled message to Remark.");
    setForm(initialForm);
  }

  return (
    <section id="contact" className="section-wrap py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal className="space-y-6">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about internships, junior roles, or practical product work."
            description="The fastest way to reach me is by email. You can also use the public links below if you want to connect or request a walkthrough."
          />

          <div className="panel p-6 sm:p-7">
            <p className="text-sm uppercase tracking-[0.24em] text-accent">Current status</p>
            <p className="mt-4 text-base leading-7 text-muted">{portfolio.availability}</p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-muted">Public email</p>
                <p className="mt-3 text-base text-ink">
                  {hasEmail ? portfolio.contact.email : "Available on request."}
                </p>
                {hasEmail ? (
                  <Link href={`mailto:${portfolio.contact.email}`} className="button-secondary mt-4">
                    Email Me
                  </Link>
                ) : null}
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-muted">Public links</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {publicLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="button-secondary"
                    >
                      {link.label}
                    </Link>
                  ))}
                  {hasResume ? (
                    <Link href={portfolio.contact.resumeUrl} className="button-ghost">
                      Download CV
                    </Link>
                  ) : (
                    <Link href="#contact" className="button-ghost">
                      Request CV
                    </Link>
                  )}
                </div>
                {!publicLinks.length ? (
                  <p className="mt-4 text-sm leading-7 text-muted">
                    Public social links will be added here when they are ready.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="panel p-6 sm:p-7">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-accent">Quick message</p>
              <p className="mt-3 max-w-xl text-base leading-7 text-muted">
                Share a short message about your project, collaboration idea, or opportunity. This
                form opens a pre-filled email draft so it stays quick and easy to use.
              </p>
            </div>

            <form className="grid gap-4" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm text-muted">
                Name
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="rounded-2xl border border-white/10 bg-canvas/45 px-4 py-3 text-ink outline-none placeholder:text-muted focus:border-accent/50"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2 text-sm text-muted">
                Email
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="rounded-2xl border border-white/10 bg-canvas/45 px-4 py-3 text-ink outline-none placeholder:text-muted focus:border-accent/50"
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-2 text-sm text-muted">
                Message
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className="rounded-[1.5rem] border border-white/10 bg-canvas/45 px-4 py-3 text-ink outline-none placeholder:text-muted focus:border-accent/50"
                  placeholder="Tell me about your project or idea."
                />
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button type="submit" className="button-primary">
                  {hasEmail ? "Open Email Draft" : "Request Contact"}
                </button>
                <p className="text-sm text-muted">Best for internships, junior roles, and project inquiries.</p>
              </div>
            </form>

            {status ? (
              <div className="rounded-3xl border border-warm/30 bg-warm/10 px-4 py-4 text-sm leading-7 text-ink">
                {status}
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
