"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ZoomableImage({ src, alt, className = "" }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = priorOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const lightbox = <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`Full screen: ${alt}`} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}><button className="image-lightbox-close" type="button" onClick={() => setOpen(false)} aria-label="Close full screen image">Close <span aria-hidden="true">×</span></button><img src={src} alt={alt} /></div>;
  return <><button className={`zoomable-image ${className}`} type="button" onClick={() => setOpen(true)} aria-label={`View ${alt} full screen`}><img src={src} alt={alt} /></button>{open && mounted ? createPortal(lightbox, document.body) : null}</>;
}
