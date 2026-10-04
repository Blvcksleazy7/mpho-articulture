import { ProjectGrid } from "@/components/ProjectGrid";
import { graphicProjects } from "@/lib/projects";
export default function GraphicDesignPage() { return <section className="page-intro graphic"><p className="kicker">Graphic design / Index</p><h1>IDENTITY AS<br /><em>STRUCTURE</em></h1><p>Visual systems, research and manifestos built with the same architectural attention to hierarchy.</p><ProjectGrid projects={graphicProjects} /></section> }
