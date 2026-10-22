import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/content/portfolio";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project?.name ?? "Project not found",
    description: project?.description,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  if (!project) notFound();
  const next = projects[(index + 1) % projects.length]!;
  return (
    <main className="document-page" style={{ background: project.color }}>
      <nav className="document-nav" aria-label="Project navigation">
        <Link href="/#work">← BACK TO THE MIND</Link>
        <Link href="/resume">ABOUT AWAIS ↗</Link>
      </nav>
      <header className="document-heading">
        <p className="eyebrow">
          {project.name.toUpperCase()} / {project.category.toUpperCase()}
        </p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </header>
      <Image
        className="case-cover"
        src={project.cover}
        alt={`Concept illustration for ${project.name}`}
        width={1000}
        height={700}
        priority
      />
      <p className="concept-note">
        Original project illustration · a visual interpretation of the work.
      </p>
      <div className="case-meta">
        <div>
          <span>ROLE</span>
          {project.role}
        </div>
        <div>
          <span>WHERE</span>
          {project.organization}
        </div>
        <div>
          <span>WHEN</span>
          {project.year}
        </div>
      </div>
      <div className="case-sections">
        <section>
          <h2>The challenge.</h2>
          <p>{project.challenge}</p>
        </section>
        <section>
          <h2>What I did.</h2>
          <p>{project.approach}</p>
        </section>
        <section>
          <h2>The outcome.</h2>
          <p>{project.result}</p>
        </section>
        <div className="metric-row">
          {project.metrics.map((metric) => (
            <p key={metric}>{metric}</p>
          ))}
        </div>
        <section>
          <h2>Built with.</h2>
          <p>{project.stack.join(" / ")}</p>
        </section>
        {"link" in project && (
          <a
            className="text-link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            VISIT THE WEBSITE ↗
          </a>
        )}
      </div>
      <Link className="next-project" href={`/work/${next.slug}`}>
        Next up: {next.name} ↗
      </Link>
      <footer className="document-footer">
        <Link href="/#contact">LET’S BUILD SOMETHING ↗</Link>
        <span>AWAIS UR REHMAN · 2026</span>
      </footer>
    </main>
  );
}
