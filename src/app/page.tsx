import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold text-poke-blue">Gotta build &rsquo;em all</h1>
      <p className="max-w-md">Pokémon personal website, scaffold complete.</p>
      <div className="flex gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </main>
  );
}
