"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [["Home", "/"], ["Architecture", "/architecture"], ["Graphic Design", "/graphic-design"], ["About", "/about"], ["Contact", "/contact"]] as const;

export function Navigation() {
  const pathname = usePathname();
  return <header className="site-header"><Link className="wordmark" href="/" aria-label="Mpho Hlungwane home"><span>MPHO</span><span>HLUNGWANE</span></Link><nav aria-label="Primary navigation">{links.map(([label, href]) => <Link className={pathname === href ? "active" : ""} key={href} href={href}>{label}</Link>)}</nav></header>;
}
