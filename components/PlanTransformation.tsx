"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Image } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";
import { getPlanTransform } from "@/lib/plan-transform";

function DrawingAssembly({ images, progress }: { images: string[]; progress: number }) {
  const assembly = useRef<Group>(null);
  useFrame(() => {
    if (!assembly.current) return;
    const target = getPlanTransform(progress);
    assembly.current.rotation.x += (target.rotationX - assembly.current.rotation.x) * 0.065;
    assembly.current.rotation.y += (target.rotationY - assembly.current.rotation.y) * 0.065;
    assembly.current.position.y += (target.lift - assembly.current.position.y) * 0.065;
    assembly.current.children.forEach((layer, index) => {
      const direction = index - (images.length - 1) / 2;
      layer.position.z += ((direction * target.layerDepth) - layer.position.z) * 0.065;
      layer.position.x += ((direction * target.layerDepth * 0.18) - layer.position.x) * 0.065;
      layer.position.y += ((direction * target.layerDepth * 0.12) - layer.position.y) * 0.065;
    });
  });
  return <group ref={assembly}>{images.map((url, index) => <Image key={url} url={url} scale={[5.45, 3.86]} color="#ffffff" transparent opacity={index === 0 ? 0.94 : 0.16} />)}</group>;
}

export function PlanTransformation({ images }: { images: string[] }) {
  const section = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const sync = () => {
      const element = section.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      setProgress(Math.min(1, Math.max(0, -rect.top / Math.max(rect.height - window.innerHeight, 1))));
    };
    sync(); window.addEventListener("scroll", sync, { passive: true }); window.addEventListener("resize", sync); return () => { window.removeEventListener("scroll", sync); window.removeEventListener("resize", sync); };
  }, []);
  return <section className="plan-transform" ref={section}><div className="plan-sticky"><Canvas camera={{ position: [0, 0, 8.8], fov: 38 }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance" }}><ambientLight intensity={2} /><DrawingAssembly images={images} progress={progress} /></Canvas><div className="plan-caption"><span>{progress < .22 ? "01 / Site plan" : progress < .46 ? "02 / Programme layers" : progress < .72 ? "03 / Massing" : "04 / Section + space"}</span><strong>{Math.round(progress * 100)}%</strong></div></div></section>;
}
