export type Discipline = "Architecture" | "Graphic design" | "Interdisciplinary study";

export type ProjectMilestone = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  reading?: {
    heading: string;
    subheading: string;
    body: string;
  };
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  discipline: Discipline;
  year: string;
  module: string;
  location: string;
  summary: string;
  cover: string;
  source: string;
  alt: string;
  accent: string;
  /** Present only where the supplied project material explicitly documents it. */
  status?: string;
  brief?: string;
  outcomes?: Array<{ label: string; value: string }>;
  journey?: {
    chapter: string;
    theme: string;
    story: string;
  };
  milestones: ProjectMilestone[];
};

const asset = (name: string) => `/images/projects/${name}`;

export const architectureProjects: Project[] = [
  {
    slug: "milpark-student-residence",
    number: "01",
    title: "Milpark Student Residence",
    discipline: "Architecture",
    year: "2026",
    module: "Architectural Technology & Detailing 3",
    location: "Milpark, Johannesburg",
    summary: "A construction-ready drawing set for a hybrid concrete-and-steel student residence.",
    cover: asset("milpark-cover.jpg"),
    source: "covers.pdf, Project 4: Construction Project Architectural Working Drawings",
    alt: "Exterior visualisation of the Milpark student residence.",
    accent: "#d2ff4d",
    status: "Completed",
    brief: "A construction-ready drawing set for a student residence, developed as a hybrid concrete-and-steel structure with basement parking, ground-floor amenities and a layered rooftop programme.",
    outcomes: [
      { label: "Structure", value: "Hybrid concrete + steel" },
      { label: "Rooftop", value: "150 m² recreation + 60-seat theatre" },
      { label: "Drawing set", value: "Model, plans, sections + elevations" },
    ],
    journey: { chapter: "02", theme: "Formation", story: "Milpark is about learning the discipline of architecture: turning an idea into plans, sections, details and a construction-ready proposition." },
    milestones: [
      { title: "Buildable logic", eyebrow: "Construction", description: "Plans, sections, elevations, materials and junctions turn spatial design into a technical drawing set.", image: asset("milpark-plan.jpg") },
      { title: "Vertical living", eyebrow: "Section", description: "A basement, amenities, residence levels and rooftop recreation are organised into a clear vertical sequence.", image: asset("milpark-section.jpg") },
    ],
  },
  {
    slug: "coffee-tea-cocoa-headquarters",
    number: "02",
    title: "Coffee, Tea & Cocoa Headquarters",
    discipline: "Architecture",
    year: "2026",
    module: "Architectural Design 3",
    location: "Ethiopian Quarter, Johannesburg",
    summary: "A mixed-use trade headquarters shaped by courtyard living, alternative technologies and cultural exchange.",
    cover: asset("cocoa-hero.jpg"),
    source: "Architecture portfolio.pdf, Project 1B: Coffee Tea Cocoa Headquarters",
    alt: "Programme zoning diagram for the Coffee, Tea and Cocoa Headquarters.",
    accent: "#ffc544",
    journey: { chapter: "03", theme: "Aspiration", story: "A mixed-use trade headquarters imagines the ambitious, city-facing work Mpho wants to contribute to - business, culture, health and residence gathered around a shared courtyard." },
    milestones: [
      { title: "Site", eyebrow: "Urban fabric", description: "The Ethiopian Quarter, Trolley Pullers settlement and George Harrison Park ground the project in Johannesburg’s social and climatic conditions.", image: asset("cocoa-zoning.jpg"), reading: { heading: "Context", subheading: "Ethiopian Quarter", body: "The project starts with the social and climatic conditions of the Ethiopian Quarter. The street, settlement and park establish a public ground for exchange before the building begins." } },
      { title: "Organisation", eyebrow: "Programme", description: "Trade, commerce, healthcare and residence are ordered by public access, footfall and the courtyard.", image: asset("cocoa-zoning.jpg"), reading: { heading: "Programme zoning", subheading: "Footfall hierarchy", body: "Public activity holds the street edge: a cafe, retail, music and hair salon draw people inward. Healthcare sits at the threshold, while fair-trade workspaces and residences become progressively more private above." } },
      { title: "Massing", eyebrow: "Courtyard blocks", description: "Small buildings form breathable internal courts, with photovoltaic shade and rainwater-harvesting structures above.", image: asset("cocoa-floor.jpg"), reading: { heading: "Plan response", subheading: "Ground floor / 1:100", body: "The ground floor combines reception, indoor and outdoor seating, internet access, retail, music and hair care. These active public uses feed directly into the courtyard and make the building porous at street level." } },
      { title: "Section", eyebrow: "Vertical exchange", description: "A cross-section traces commerce, healthcare and homes through the mixed-use stack.", image: asset("cocoa-section.jpg"), reading: { heading: "Design response", subheading: "Section A-A / 1:75", body: "The section makes the brief legible level by level: street-facing commerce at ground, worker healthcare above, and living spaces on the upper floors. It records circulation and the stacked floor heights at +2500, +5600, +8400, +11200 and +14000." } },
      { title: "Experience", eyebrow: "Spatial assembly", description: "The drawing set resolves into an oblique gallery of context, programme and spatial atmosphere.", image: asset("cocoa-elevation.jpg"), reading: { heading: "Elevation study", subheading: "North + east", body: "The elevations bring the components together as one street-facing identity: a repeated residential rhythm above a permeable, active lower level." } },
    ],
  },
  {
    slug: "tsonga-muzi",
    number: "03",
    title: "Tsonga Muzi",
    discipline: "Architecture",
    year: "2026",
    module: "History & Theory of Architecture 3",
    location: "Johannesburg",
    summary: "A reconfiguration of the NE51/6 house typology through Tsonga homestead principles and the Xikundla courtyard.",
    cover: asset("tsonga-cover.jpg"),
    source: "covers.pdf, Assignment 1 Part 2",
    alt: "Exterior visualisation of a brick Tsonga Muzi house and its street edge.",
    accent: "#f4efde",
    status: "Completed",
    brief: "A critical reconfiguration of the NE51/6 house typology on a 150 m² erf, using South African cultural homestead principles to reshape the plan, courtyard and street edge.",
    outcomes: [
      { label: "Site", value: "150 m² erf" },
      { label: "Scales", value: "1:1000 urban scheme + 1:50 model" },
      { label: "Focus", value: "Courtyard, thresholds, light + privacy" },
    ],
    journey: { chapter: "01", theme: "Origin", story: "Tsonga Muzi returns to the language of home: threshold, courtyard, family life and the cultural memory that continues to shape Mpho's architectural imagination." },
    milestones: [
      { title: "Original", eyebrow: "NE51/6", description: "The existing typology collapses public and private life into a direct street-to-room sequence.", image: asset("tsonga-original.jpg") },
      { title: "Threshold", eyebrow: "Xikundla", description: "Gate, verandah and courtyard restore an articulated transition from public street to private dwelling.", image: asset("tsonga-plan.jpg") },
      { title: "Street edge", eyebrow: "Model", description: "Model-making tests the relationship between the original and reconfigured urban edge.", image: asset("tsonga-model.jpg") },
    ],
  },
  {
    slug: "44-stanley-urban-oasis",
    number: "04",
    title: "44 Stanley Urban Oasis",
    discipline: "Architecture",
    year: "2026",
    module: "Interdisciplinary Design 3",
    location: "Braamfontein Werf, Johannesburg",
    summary: "A public-realm intervention that layers slow mobility, shelter and dwell time onto an active urban precinct.",
    cover: asset("stanley-hero.jpg"),
    source: "Architecture portfolio.pdf, Urban Design Intervention Brief 3",
    alt: "Technical drawing and render of the Urban Oasis Bench at 44 Stanley.",
    accent: "#59d4c7",
    journey: { chapter: "04", theme: "Public life", story: "44 Stanley turns attention outward, asking how shelter, seating and landscape can make everyday movement through the city more generous." },
    milestones: [
      { title: "Movement", eyebrow: "Street analysis", description: "Activity mapping identifies shifting pedestrian intensity, transit waiting and everyday street use.", image: asset("stanley-analysis.jpg") },
      { title: "Dwell time", eyebrow: "Urban oasis bench", description: "A canopy, bench, planter and storage integrate shelter, comfort and a more generous public edge.", image: asset("stanley-bench.jpg") },
      { title: "Site", eyebrow: "Intervention", description: "New seating, bike infrastructure and transport access enrich rather than replace the existing precinct.", image: asset("stanley-site.jpg") },
    ],
  },
  {
    slug: "furniture-by-architects",
    number: "05",
    title: "Furniture by Architects",
    discipline: "Architecture",
    year: "2026",
    module: "Computers in Architecture 3 (CAD)",
    location: "Digital modelling study",
    summary: "A Revit study of iconic mid-century modern chairs, using furniture to extend architectural thinking through proportion, detail and digital craft.",
    cover: asset("furniture-by-architects-cover.jpg"),
    source: "covers.pdf, Furniture By Architects Brief 2",
    alt: "Three iconic mid-century modern chairs in a warmly lit interior.",
    accent: "#b78962",
    status: "Completed",
    brief: "A digital-skills exercise that models a set of nine iconic mid-century modern chairs in Autodesk Revit.",
    outcomes: [
      { label: "Software", value: "Autodesk Revit" },
      { label: "Study set", value: "9 iconic chairs" },
      { label: "Focus", value: "Digital modelling" },
    ],
    milestones: [
      { title: "A set of nine", eyebrow: "Reference study", description: "Nine iconic mid-century modern chairs become a precise exercise in proportion, profile and construction logic.", image: asset("furniture-by-architects-cover.jpg") },
      { title: "Digital craft", eyebrow: "Autodesk Revit", description: "The modelling process tests how an architectural workflow can hold object-scale detail and material character.", image: asset("furniture-by-architects-cover.jpg") },
    ],
  },
  {
    slug: "family-yard-plan",
    number: "06",
    title: "Family Yard Plan",
    discipline: "Architecture",
    year: "Undated",
    module: "Independent family commission",
    location: "Private family home",
    summary: "A commissioned ground-floor plan that gives a family’s rooms, circulation and yard a clear spatial order.",
    cover: asset("family-yard-build-exterior.jpg"),
    source: "New Plan 2.pdf, supplied model views and construction photographs",
    alt: "Brick family home under construction, with a large opening facing the yard.",
    accent: "#c16f3d",
    status: "Design + build-stage documentation",
    brief: "A family asked Mpho to prepare a plan for their home, with the yard treated as an intentional outdoor room rather than residual space.",
    outcomes: [
      { label: "Drawing", value: "Ground floor plan / 1:25" },
      { label: "Commission", value: "Private family home" },
      { label: "Spatial focus", value: "Rooms, circulation + yard" },
    ],
    milestones: [
      { title: "Plan for the yard", eyebrow: "Ground floor / 1:25", description: "Measured rooms, openings and circulation establish a practical arrangement around an outdoor family space.", image: asset("family-yard-plan.jpg") },
      { title: "Courtyard arrangement", eyebrow: "Model view 01", description: "A raised model view tests the relationship between the main house, the yard and the perimeter walls as one family setting.", image: asset("family-yard-model-courtyard.jpg") },
      { title: "The yard as a room", eyebrow: "Model view 02", description: "A second angle makes the open yard legible as the shared space between the buildings, rather than an area left over after planning.", image: asset("family-yard-model-rear.jpg") },
      { title: "Arrival and enclosure", eyebrow: "Model view 03", description: "The entry-side view studies the route from the threshold into the protected outdoor space.", image: asset("family-yard-model-entry.jpg") },
      { title: "Opening to outside", eyebrow: "Build stage", description: "A large yard-facing opening makes the relationship between interior and outdoor space legible in construction.", image: asset("family-yard-build-exterior.jpg") },
      { title: "Details that matter", eyebrow: "Services + thresholds", description: "Brickwork, service lines and interior openings show where drawing decisions meet material reality.", image: asset("family-yard-build-services.jpg") },
    ],
  },
];

export const graphicProjects: Project[] = [
  {
    slug: "idp-dev",
    number: "G01",
    title: "IDP DEV",
    discipline: "Graphic design",
    year: "2026",
    module: "Interdisciplinary Design 3",
    location: "Brand identity study",
    summary: "A research-led identity system investigating the balance between nature, industry and the Summit Potato Processor.",
    cover: asset("idp-dev.jpg"),
    source: "IDP DEV.pdf",
    alt: "IDP DEV brand-development board for Summit Potato Processor.",
    accent: "#b18b70",
    milestones: [
      { title: "Research", eyebrow: "Positioning", description: "Comparable food-industry identities establish the visual territory and distinguish the processor’s purpose.", image: asset("idp-dev.jpg") },
      { title: "Direction", eyebrow: "Identity", description: "Earthy tones, a geometric mark and typographic clarity connect agricultural heritage to industry.", image: asset("summit-poster.jpg") },
    ],
  },
  {
    slug: "summit-potato-processor",
    number: "G02",
    title: "Summit Potato Processor",
    discipline: "Graphic design",
    year: "2026",
    module: "Interdisciplinary design",
    location: "Kwaggafontein",
    summary: "A manifesto poster and identity direction for a community-focused adaptive-reuse factory project.",
    cover: asset("summit-cover.jpg"),
    source: "covers.pdf, Summit Potato Processor",
    alt: "Summit Potato Processor identity montage with a golden factory-inspired mark.",
    accent: "#e3b65b",
    status: "Completed",
    brief: "A manifesto-led identity for a potato processor in Kwaggafontein, framing adaptive reuse as a community hub for learning, making and local profit.",
    outcomes: [
      { label: "Context", value: "Kwaggafontein industrial park" },
      { label: "Scope", value: "Logo, manifesto + material palette" },
      { label: "Applications", value: "Packaging, signage + digital" },
    ],
    milestones: [
      { title: "Manifesto", eyebrow: "Palimpsest of Labour", description: "An apartheid-era factory is reimagined as a community hub for learning, making and local profit.", image: asset("summit-manifesto.jpg") },
      { title: "Mark", eyebrow: "Nature + industry", description: "Layered forms and earthy colour build a clear, scalable identity for product, signage and digital use.", image: asset("summit-identity-direction.jpg") },
    ],
  },
  {
    slug: "mpho-hlungwane-brand-identity",
    number: "G03",
    title: "Mpho Hlungwane Brand Identity",
    discipline: "Graphic design",
    year: "2026",
    module: "Interdisciplinary Design 3 (BAID3Y3)",
    location: "Personal identity study",
    summary: "A personal visual identity that turns an architectural ethos into a modular mark, typographic voice and adaptable professional system.",
    cover: asset("mpho-brand-identity-cover.jpg"),
    source: "covers.pdf, Brand Identity Brief 1",
    alt: "Mpho Hlungwane personal brand identity board with a dark green geometric logo.",
    accent: "#3f6b5d",
    status: "Completed",
    brief: "A personal design identity developed as a professional trademark through logo making, typography, colour theory, grid systems and brand applications.",
    outcomes: [
      { label: "Identity", value: "Logo, type + colour system" },
      { label: "Method", value: "Grid-led visual language" },
      { label: "Applications", value: "Business card + email signature" },
    ],
    milestones: [
      { title: "Professional trademark", eyebrow: "Logo", description: "A modular mark establishes a recognisable visual signature for Mpho Hlungwane’s design practice.", image: asset("mpho-brand-identity-cover.jpg") },
      { title: "A working system", eyebrow: "Typography + colour", description: "Typography, colour theory and grid systems turn the mark into a clear identity across professional touchpoints.", image: asset("mpho-brand-identity-system.jpg") },
    ],
  },
];

export const interdisciplinaryStudy: Project = {
  slug: "still-water",
  number: "05",
  title: "Still Water",
  discipline: "Interdisciplinary study",
  year: "2026",
  module: "Interdisciplinary Design 3",
  location: "Self portrait study",
  summary: "An abstract self-portrait exploring the tension between a calm exterior and a rich interior world.",
  cover: asset("still-water-cover.jpg"),
  source: "covers.pdf, Self Portrait Brief 2",
  alt: "Abstract gestural self-portrait in black ink on a pale ground.",
  accent: "#a4b1da",
  status: "Completed",
  brief: "A non-literal abstract self-portrait made across a minimum of three media, informed by research into an established self-portrait artist and a representational process.",
  outcomes: [
    { label: "Media", value: "Three or more" },
    { label: "Deliverables", value: "A2 portrait + conceptual poster" },
    { label: "Process", value: "Reference research + abstraction" },
  ],
  milestones: [{ title: "Still Water", eyebrow: "Concept", description: "The study draws on Egon Schiele to explore restraint, negative space and internal depth.", image: asset("still-water-analysis.jpg") }],
};

export const allProjects = [...architectureProjects, ...graphicProjects, interdisciplinaryStudy];

export const journeyProjects = ["tsonga-muzi", "milpark-student-residence", "coffee-tea-cocoa-headquarters", "44-stanley-urban-oasis"].map((slug) => architectureProjects.find((project) => project.slug === slug)!);

/** Supporting studies shown after the homepage’s fixed four-part narrative. */
export const frontpageStudies = [
  architectureProjects.find((project) => project.slug === "furniture-by-architects")!,
  interdisciplinaryStudy,
  graphicProjects.find((project) => project.slug === "summit-potato-processor")!,
  graphicProjects.find((project) => project.slug === "mpho-hlungwane-brand-identity")!,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}
