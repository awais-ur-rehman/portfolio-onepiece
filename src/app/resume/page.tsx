import Link from "next/link";
import type { Metadata } from "next";
import {
  achievements,
  experience,
  experiments,
  profile,
  projects,
  skillGroups,
} from "@/content/portfolio";
export const metadata: Metadata = {
  title: "The full story",
  description:
    "Experience, projects, skills, and a little more about Awais ur Rehman.",
};
export default function ResumePage() {
  return (
    <main className="document-page">
      <nav className="document-nav" aria-label="Résumé navigation">
        <Link href="/">← BACK TO THE MIND</Link>
        <a href={`mailto:${profile.email}`}>GET IN TOUCH ↗</a>
      </nav>
      <header className="document-heading">
        <p className="eyebrow">THE FULL STORY / ISLAMABAD, PAKISTAN</p>
        <h1>Awais ur Rehman.</h1>
        <p>
          {profile.role}. {profile.biography}
        </p>
      </header>
      <section className="resume-section">
        <h2>Experience.</h2>
        <div>
          {experience.map((job) => (
            <article key={job.company}>
              <p className="resume-date">{job.date}</p>
              <h3>{job.company}</h3>
              <p>{job.role}</p>
              <p>{job.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="resume-section">
        <h2>Selected work.</h2>
        <div>
          {projects.map((project) => (
            <article key={project.slug}>
              <h3>
                <Link href={`/work/${project.slug}`}>{project.name} ↗</Link>
              </h3>
              <p>
                {project.description} {project.result}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="resume-section">
        <h2>A few milestones.</h2>
        <ul>
          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </section>
      <section className="resume-section">
        <h2>The toolkit.</h2>
        <div>
          {skillGroups.map((group) => (
            <article key={group.name}>
              <h3>{group.name}</h3>
              <p>{group.values}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="resume-section">
        <h2>Always tinkering.</h2>
        <div>
          {experiments.map(([name, description]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="resume-section">
        <h2>Education.</h2>
        <div>
          <h3>BS Software Engineering</h3>
          <p>COMSATS University Islamabad · Graduated 2025.</p>
          <p>
            OculaCare, my final-year project, brought together mobile
            development, machine learning, and knowledge retrieval.
          </p>
        </div>
      </section>
      <section className="resume-section">
        <h2>Outside the editor.</h2>
        <div>
          <p>
            Football. Anime and manga. Hackathons. A notebook full of project
            ideas named like episodes of Friends: “The One Where…”
          </p>
          <p>
            I run Revamped, a web design agency serving Pakistani businesses and
            US clients, including restaurant and roofing work. I’m interested in
            useful products, difficult systems problems, and finding unexpected
            ways to connect ideas.
          </p>
        </div>
      </section>
      <section className="resume-section">
        <h2>Say hello.</h2>
        <div className="resume-tags">
          <a href={`mailto:${profile.email}`}>EMAIL ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GITHUB ↗
          </a>
        </div>
      </section>
      <footer className="document-footer">
        <span>AWAIS UR REHMAN · 2026</span>
        <span>PRINT THIS PAGE TO SAVE AS PDF</span>
      </footer>
    </main>
  );
}
