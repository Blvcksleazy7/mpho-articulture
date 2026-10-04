import { describe, expect, it } from "vitest";
import { getPlanTransform } from "../src/lib/plan-transform";

describe("Cocoa plan transformation", () => {
  it("begins as a flat top-down architectural plan", () => {
    expect(getPlanTransform(0)).toMatchObject({ rotationX: 0, rotationY: 0, layerDepth: 0 });
  });

  it("ends as an oblique spatial assembly with separated drawing layers", () => {
    const final = getPlanTransform(1);
    expect(final.rotationX).toBeLessThan(-0.9);
    expect(final.rotationY).toBeGreaterThan(0.45);
    expect(final.layerDepth).toBeGreaterThan(1.5);
  });
});
