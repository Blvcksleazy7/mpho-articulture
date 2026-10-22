import Link from "next/link";
import { frontpageStudies, type Project } from "@/lib/projects";
import { TheoryToPractical } from "@/components/TheoryToPractical";

export function ProjectGrid({ projects, showJourney = false }: { projects: Project[]; showJourney?: boolean }) {
  const cards = (items: Project[], className = "") => <div className={`project-grid ${className}`}>{items.map((project) => <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}><div className="project-image"><img src={project.cover} alt={project.alt} /></div><div className="project-meta">{showJourney && project.journey ? <><span>{project.journey.chapter} / {project.journey.theme}</span><h2>{project.title}</h2><p className="project-story">{project.journey.story}</p></> : <><span>{project.number} / {project.discipline}</span><h2>{project.title}</h2><p>{project.location} · {project.year}</p></>}</div></Link>)}</div>;
  return showJourney ? <>{cards(projects, "project-grid-journey")}<section className="frontpage-studies"><div><p className="kicker">Further studies</p><h2>DRAWING OUTWARD,<br /><em>MAKING INWARD.</em></h2></div>{cards(frontpageStudies, "project-grid-studies")}</section><TheoryToPractical /></> : cards(projects);
}
