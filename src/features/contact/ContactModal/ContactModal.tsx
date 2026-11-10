"use client";

import { useRef, useState } from "react";
import { CONTACT } from "@/constants/contact";
import { SocialIcon } from "@/features/contact/SocialIcon";
import { cn } from "@/lib/cn";

const ROW = "flex items-center gap-2 border-2 border-poke-ink bg-poke-white px-3 py-2";
const COPY_BTN =
  "shrink-0 border-2 border-poke-ink bg-poke-yellow px-2 py-0.5 text-xs font-bold uppercase hover:bg-poke-yellow-dark";

/** Navbar button plus a Gen 1 menu-box modal showing contact details. */
export function ContactModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied((current) => (current === value ? null : current)), 1500);
    } catch {
      // Clipboard can be blocked; the value is still visible to select manually.
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold text-poke-white transition-colors hover:bg-poke-white/15"
      >
        Contact Me
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="contact-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto w-[min(92vw,26rem)] border-4 border-poke-ink bg-poke-white p-0 text-poke-ink shadow-[6px_6px_0_0_var(--color-poke-ink)] backdrop:bg-black/60"
      >
        <div className="m-1 border-2 border-poke-ink p-4 font-mono">
          <div className="mb-4 flex items-center justify-between">
            <h2 id="contact-title" className="text-lg font-bold uppercase">
              Contact Me
            </h2>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close"
              className="border-2 border-poke-ink px-2 text-sm font-bold hover:bg-poke-red hover:text-poke-white"
            >
              X
            </button>
          </div>

          <ul className="mb-4 flex justify-center gap-3">
            {CONTACT.socials.map(({ id, label, href }) => (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-12 items-center justify-center border-2 border-poke-ink bg-poke-yellow hover:bg-poke-yellow-dark"
                >
                  <SocialIcon id={id} className="size-7" />
                </a>
              </li>
            ))}
          </ul>

          <ul className="space-y-2 text-sm">
            <li className={ROW}>
              <a href={`mailto:${CONTACT.email}`} className="min-w-0 flex-1 truncate hover:underline">
                ▶ {CONTACT.email}
              </a>
              <button type="button" onClick={() => copy(CONTACT.email)} className={COPY_BTN}>
                {copied === CONTACT.email ? "Copied" : "Copy"}
              </button>
            </li>
            <li className={ROW}>
              <span className="min-w-0 flex-1 truncate">▶ {CONTACT.phone}</span>
              <button type="button" onClick={() => copy(CONTACT.phone)} className={COPY_BTN}>
                {copied === CONTACT.phone ? "Copied" : "Copy"}
              </button>
            </li>
            <li className={cn(ROW, "hover:bg-poke-yellow/40")}>
              <a
                href={CONTACT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 flex-1 truncate hover:underline"
              >
                ▶ GitHub
              </a>
            </li>
          </ul>
        </div>
      </dialog>
    </>
  );
}
