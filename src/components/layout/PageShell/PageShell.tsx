import type { ReactNode } from "react";

export interface PageShellProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

/** Shared page wrapper: consistent width, padding, and heading for every page. */
export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
      <h1 className="text-3xl font-bold text-poke-blue">{title}</h1>
      {description && <p className="mt-2 text-lg opacity-80">{description}</p>}
      {children && <div className="mt-8">{children}</div>}
    </main>
  );
}
