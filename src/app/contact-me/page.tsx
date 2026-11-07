import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "Contact Me" };

export default function ContactMePage() {
  return <PageShell title="Contact Me" description="Placeholder: how to reach you." />;
}
