import { describe, expect, it } from "vitest";

import { architectureProjects, getProjectBySlug, graphicProjects } from "../src/lib/projects";

describe("project registry", () => {
  it("contains each public architecture case study exactly once", () => {
    expect(architectureProjects.map((project) => project.slug)).toEqual([
      "milpark-student-residence",
      "coffee-tea-cocoa-headquarters",
      "tsonga-muzi",
      "44-stanley-urban-oasis",
      "furniture-by-architects",
      "family-yard-plan",
    ]);
  });

  it("keeps the three approved graphic-design studies public", () => {
    expect(graphicProjects.map((project) => project.slug)).toEqual([
      "idp-dev",
      "summit-potato-processor",
      "mpho-hlungwane-brand-identity",
    ]);
  });

  it("returns the Cocoa sequence with a complete site-to-space narrative", () => {
    expect(getProjectBySlug("coffee-tea-cocoa-headquarters")?.milestones.map((item) => item.title)).toEqual([
      "Site",
      "Organisation",
      "Massing",
      "Section",
      "Experience",
    ]);
  });

  it("does not resolve unknown slugs", () => {
    expect(getProjectBySlug("invented-project")).toBeUndefined();
  });

  it("resolves every newly documented study", () => {
    ["furniture-by-architects", "family-yard-plan", "mpho-hlungwane-brand-identity", "still-water"].forEach((slug) => {
      expect(getProjectBySlug(slug)).toBeDefined();
    });
  });
});
