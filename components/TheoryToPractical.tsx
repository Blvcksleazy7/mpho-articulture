const asset = (name: string) => `/images/projects/${name}`;

export function TheoryToPractical() {
  return <section className="theory-practical" aria-labelledby="theory-practical-title">
    <header className="theory-practical-header">
      <div><p className="kicker">Independent family commission / 2026</p><h2 id="theory-practical-title">FROM <em>THEORY</em><br />TO PRACTICAL.</h2></div>
      <p>A family asked Mpho to translate their needs into a workable house plan: rooms that organise daily life and a yard held as an intentional, usable outdoor space.</p>
    </header>
    <div className="theory-practical-drawing"><div className="theory-practical-drawing-label"><span>01 / Ground floor plan</span><span>Scale 1:25</span></div><img src={asset("family-yard-plan.jpg")} alt="Dimensioned 1:25 ground-floor plan for a family home, including a central yard space." loading="lazy" /></div>
    <div className="theory-practical-process">
      <div className="theory-practical-caption"><p className="kicker">A drawing has consequences</p><h3>Design becomes accountable when it meets the wall, the opening, the service line and the yard beyond it.</h3><p>The supplied photographs document the building in progress, connecting the plan’s measured spaces to the material conditions of construction.</p></div>
      <figure><img src={asset("family-yard-build-exterior.jpg")} alt="Brick building under construction with a large opening facing the yard." loading="lazy" /><figcaption>02 / Yard-facing opening</figcaption></figure>
      <figure><img src={asset("family-yard-build-interior.jpg")} alt="Interior brickwork and timber roof structure during construction." loading="lazy" /><figcaption>03 / Room and threshold</figcaption></figure>
      <figure><img src={asset("family-yard-build-services.jpg")} alt="Brick interior wall with a plumbing service line during construction." loading="lazy" /><figcaption>04 / Services in place</figcaption></figure>
    </div>
  </section>;
}
