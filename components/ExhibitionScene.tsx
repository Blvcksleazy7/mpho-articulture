"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Image, OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";
import type { Project } from "@/lib/projects";

function Gallery({ projects, progress }: { projects: Project[]; progress: number }) {
  const group = useRef<Group>(null);
  useFrame(() => { if (group.current) { group.current.rotation.y += ((progress * 0.9) - group.current.rotation.y) * 0.04; group.current.rotation.x = Math.sin(progress * Math.PI) * 0.12; } });
  return <group ref={group}>{projects.slice(0, 5).map((project, index) => <Image key={project.slug} url={project.cover} position={[(index - 2) * 2.2, Math.sin(index) * 0.55, -Math.abs(index - 2) * 0.7]} rotation={[0, (index - 2) * -0.18, 0]} scale={[1.72, 1.16]} transparent opacity={0.96} />)}</group>;
}

export function ExhibitionScene({ projects }: { projects: Project[] }) {
  const [progress, setProgress] = useState(0);
  const [failed, setFailed] = useState(false);
  useEffect(() => { const sync = () => setProgress(window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1)); sync(); window.addEventListener("scroll", sync, { passive: true }); return () => window.removeEventListener("scroll", sync); }, []);
  if (failed) return null;
  return <div className="scene" aria-hidden="true"><Canvas camera={{ position: [0, 0, 7], fov: 44 }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance" }} onCreated={({ gl }) => gl.setClearColor("#121614")} onError={() => setFailed(true)}><ambientLight intensity={1.5} /><Gallery projects={projects} progress={progress} /><OrbitControls enablePan={false} enableZoom={false} enableRotate={false} /></Canvas></div>;
}
