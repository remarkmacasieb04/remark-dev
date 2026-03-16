import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteArtwork } from "@/components/layout/site-artwork";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getProjectBySlug, portfolio } from "@/content/portfolio";

type ProjectCaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} Case Study | ${portfolio.name}`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative isolate overflow-x-clip">
      <SiteArtwork />
      <SiteHeader />

      <main className="pb-8 pt-8 sm:pt-12">
        <section className="section-wrap">
          <div className="space-y-8">
            <Link href="/#projects" className="button-ghost">
              Back to Projects
            </Link>

            <div className="panel overflow-hidden p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <span className="eyebrow">Case Study</span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-accent">
                        {project.role}
                      </p>
                      <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold text-ink sm:text-5xl">
                        {project.title}
                      </h1>
                    </div>
                    <p className="max-w-3xl text-base leading-7 text-muted sm:text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-accent">
                        Problem
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted">{project.problem}</p>
                    </div>
                    <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-accent">
                        Solution
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted">{project.solution}</p>
                    </div>
                    <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-accent">
                        Outcome
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-canvas/45 p-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-accent">
                      Tech Stack
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-ink"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  {project.imageSrc ? (
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={project.imageSrc}
                          alt={`${project.title} preview`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-[2rem] border border-dashed border-white/15 bg-[linear-gradient(135deg,rgba(255,135,84,0.2),rgba(102,184,255,0.14))] p-6">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(5,8,18,0.32),transparent_42%)]" />
                      <div className="relative flex min-h-[22rem] flex-col justify-between">
                        <span className="text-xs uppercase tracking-[0.24em] text-accent">
                          Project image placeholder
                        </span>
                        <div className="space-y-3">
                          <p className="font-[var(--font-heading)] text-3xl font-semibold text-ink">
                            {project.imagePlaceholder}
                          </p>
                          <p className="max-w-sm text-sm leading-7 text-muted">
                            Add your screenshot here later. This block is ready to be replaced by a
                            real project image.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-accent">
                      Explore Project
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {project.demoUrl ? (
                        <Link href={project.demoUrl} className="button-primary">
                          Live Demo
                        </Link>
                      ) : null}
                      {project.githubUrl ? (
                        <Link href={project.githubUrl} className="button-secondary">
                          GitHub
                        </Link>
                      ) : null}
                      {!project.demoUrl && !project.githubUrl ? (
                        <Link href="/#contact" className="button-secondary">
                          Request Walkthrough
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
