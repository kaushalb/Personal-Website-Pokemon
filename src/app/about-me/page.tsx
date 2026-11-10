import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ABOUT_ME } from "@/constants/aboutMe";
import { PokedexEntry, TrainerCard } from "@/features/about";

export const metadata: Metadata = { title: "About Me" };

export default function AboutMePage() {
  const { name, photoSrc, dexNumber, typeLabel, bio } = ABOUT_ME;

  return (
    <PageShell title="About Me">
      <div className="grid gap-8 md:grid-cols-[18rem_1fr] md:items-start">
        <TrainerCard name={name} photoSrc={photoSrc} />
        <PokedexEntry name={name} dexNumber={dexNumber} typeLabel={typeLabel} bio={bio} />
      </div>
    </PageShell>
  );
}
