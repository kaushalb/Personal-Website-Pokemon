import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "Interests" };

export default function InterestsPage() {
  return <PageShell title="Interests" description="Placeholder: what you love doing." />;
}
