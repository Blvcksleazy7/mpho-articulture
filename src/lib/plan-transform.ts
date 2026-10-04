export type PlanTransform = { rotationX: number; rotationY: number; layerDepth: number; lift: number };

export function getPlanTransform(progress: number): PlanTransform {
  const t = Math.min(1, Math.max(0, progress));
  const eased = t * t * (3 - 2 * t);
  return {
    rotationX: eased === 0 ? 0 : -1.18 * eased,
    rotationY: 0.62 * eased,
    layerDepth: 2.35 * eased,
    lift: 0.48 * eased,
  };
}
