import type { NavItem } from "@/types/navigation";

/** Single source of truth for top-level pages. Navbar renders from this list. */
export const NAV_ITEMS: readonly NavItem[] = [
  { label: "About Me", href: "/about-me" },
  { label: "Interests", href: "/interests" },
  { label: "Experience", href: "/experience" },
];

/** Where "/" sends visitors (the page the intro opens into). */
export const DEFAULT_ROUTE = NAV_ITEMS[0].href;
