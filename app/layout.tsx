import type { Metadata } from "next";
import "./styles.css";
import "./case.css";
import "./design-upgrade.css";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Mpho Hlungwane — Architecture & Design",
  description: "A digital exhibition of architectural and graphic design work by Mpho Hlungwane.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#content">Skip to content</a><Navigation /><main id="content">{children}</main></body></html>;
}
