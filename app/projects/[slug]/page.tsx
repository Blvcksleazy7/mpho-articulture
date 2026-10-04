import { notFound } from "next/navigation";
import { PlanTransformation } from "@/components/PlanTransformation";
import { ZoomableImage } from "@/components/ZoomableImage";
import { getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() { return ["milpark-student-residence", "coffee-tea-cocoa-headquarters", "tsonga-muzi", "44-stanley-urban-oasis", "idp-dev", "summit-potato-processor", "still-water"].map((slug) => ({ slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const sequence = project.discipline === "Architecture"
    ? { label: "Spatial drawing sequence", title: <>PLAN → <em>PERSPECTIVE</em></>, description: "Scroll physically rotates the project drawings and draws their analytical layers apart in space." }
    : project.discipline === "Graphic design"
      ? { label: "Graphic system sequence", title: <>MARK → <em>COMPOSITION</em></>, description: "Scroll turns the identity material into a layered field of marks, type and image." }
      : { label: "Material study sequence", title: <>SURFACE → <em>DEPTH</em></>, description: "Scroll separates the study into a slow, layered visual field." };
  return <article className={`case-study case-${project.slug}`} style={{ "--accent": project.accent } as React.CSSProperties}><header className="case-hero"><div><p className="kicker">{project.number} / {project.discipline}</p><h1>{project.title}</h1><p className="case-summary">{project.summary}</p></div><dl><div><dt>Year</dt><dd>{project.year}</dd></div><div><dt>Module</dt><dd>{project.module}</dd></div><div><dt>Place</dt><dd>{project.location}</dd></div></dl></header><div className="case-cover"><ZoomableImage src={project.cover} alt={project.alt} /></div><section className="plan-intro"><p className="kicker">{sequence.label}</p><h2>{sequence.title}</h2><p>{sequence.description}</p></section><PlanTransformation images={project.milestones.map((milestone) => milestone.image)} /><section className="case-source"><span>Exhibition record</span><p>{project.discipline} / {project.year} / supplied project material</p></section><div className="milestone-list">{project.milestones.map((milestone, index) => <section className={`milestone milestone-${index + 1}`} key={milestone.title}><div className="milestone-count">0{index + 1}</div><div className="milestone-copy"><p className="kicker">{milestone.eyebrow}</p><h2>{milestone.title}</h2><p>{milestone.description}</p>{milestone.reading && <aside className="milestone-reading"><p className="kicker">{milestone.reading.heading}</p><h3>{milestone.reading.subheading}</h3><p>{milestone.reading.body}</p></aside>}</div><figure className="milestone-plate"><span aria-hidden="true">{String(index + 1).padStart(2, "0")} / {milestone.eyebrow}</span><ZoomableImage src={milestone.image} alt={`${milestone.title}: ${project.alt}`} /></figure></section>)}</div><footer className="case-footer"><p>Scroll-driven scene available on capable devices. This drawing sequence remains readable without WebGL.</p></footer></article>;
}
