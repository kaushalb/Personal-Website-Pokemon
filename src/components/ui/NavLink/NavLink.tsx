"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types/navigation";

/** Link that highlights itself when its route is active. */
export function NavLink({ label, href }: NavItem) {
  const isActive = usePathname() === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
        isActive
          ? "bg-poke-yellow text-poke-blue-dark"
          : "text-poke-white hover:bg-poke-white/15",
      )}
    >
      {label}
    </Link>
  );
}
