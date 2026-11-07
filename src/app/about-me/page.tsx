import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "About Me" };

export default function AboutMePage() {
  return <PageShell title="About Me" description="Placeholder: introduce yourself here." />;
}
