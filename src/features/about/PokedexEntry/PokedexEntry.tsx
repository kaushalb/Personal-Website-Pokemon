import { cn } from "@/lib/cn";

export interface PokedexEntryProps {
  name: string;
  dexNumber: string;
  typeLabel: string;
  bio: readonly string[];
  className?: string;
}

/** Gen 1 style dex frame: red shell, green-grey screen holding the bio. */
export function PokedexEntry({ name, dexNumber, typeLabel, bio, className }: PokedexEntryProps) {
  return (
    <section
      aria-label="Pokédex entry"
      className={cn(
        "border-4 border-poke-ink bg-poke-red p-4 shadow-[6px_6px_0_0_var(--color-poke-ink)]",
        className,
      )}
    >
      <div className="mb-3 flex items-center gap-2" aria-hidden="true">
        <span className="size-5 rounded-full border-2 border-poke-ink bg-sky-300" />
        <span className="size-2.5 rounded-full border border-poke-ink bg-poke-yellow" />
        <span className="size-2.5 rounded-full border border-poke-ink bg-green-400" />
      </div>
      <div className="border-4 border-poke-ink bg-[#c7d8b0] p-4 font-mono text-poke-ink">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-poke-ink pb-2">
          <h2 className="text-2xl font-bold uppercase">{name}</h2>
          <span className="text-sm font-bold">{dexNumber}</span>
        </div>
        <p className="mt-2 inline-block bg-poke-ink px-2 py-0.5 text-xs font-bold uppercase text-poke-white">
          {typeLabel}
        </p>
        <div className="mt-3 space-y-3 leading-relaxed">
          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
