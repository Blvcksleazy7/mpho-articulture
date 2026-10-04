import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectGrid({ projects, showJourney = false }: { projects: Project[]; showJourney?: boolean }) {
  return <div className={`project-grid ${showJourney ? "project-grid-journey" : ""}`}>{projects.map((project) => <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}><div className="project-image"><img src={project.cover} alt={project.alt} /></div><div className="project-meta">{showJourney && project.journey ? <><span>{project.journey.chapter} / {project.journey.theme}</span><h2>{project.title}</h2><p className="project-story">{project.journey.story}</p></> : <><span>{project.number} / {project.discipline}</span><h2>{project.title}</h2><p>{project.location} · {project.year}</p></>}</div></Link>)}</div>;
}
