import { cn } from "@/lib/cn";

export interface TrainerCardProps {
  name: string;
  photoSrc: string | null;
  className?: string;
}

/** Trainer card: photo and name only. Shows a placeholder until a photo exists. */
export function TrainerCard({ name, photoSrc, className }: TrainerCardProps) {
  return (
    <section
      aria-label="Trainer card"
      className={cn(
        "border-4 border-poke-ink bg-poke-yellow p-3 shadow-[6px_6px_0_0_var(--color-poke-ink)]",
        className,
      )}
    >
      <div className="flex aspect-square w-full items-center justify-center border-4 border-poke-ink bg-poke-white">
        {photoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photoSrc} alt={name} className="h-full w-full object-cover [image-rendering:pixelated]" />
        ) : (
          <span aria-hidden="true" className="text-6xl font-bold text-poke-ink/30">
            ?
          </span>
        )}
      </div>
      <h2 className="mt-3 text-center text-xl font-bold text-poke-ink">{name}</h2>
    </section>
  );
}
