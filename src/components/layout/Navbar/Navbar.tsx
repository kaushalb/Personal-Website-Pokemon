import Link from "next/link";
import { NavLink } from "@/components/ui/NavLink";
import { Pokeball } from "@/components/ui/Pokeball";
import { DEFAULT_ROUTE, NAV_ITEMS } from "@/constants/navigation";
import { SITE_NAME } from "@/constants/site";
import { ContactModal } from "@/features/contact";

/** Top navigation bar. Links come from constants/navigation.ts. */
export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-poke-red bg-poke-blue-dark">
      <nav
        aria-label="Main"
        className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3"
      >
        <Link href={DEFAULT_ROUTE} className="flex items-center gap-2 font-bold text-poke-white">
          <Pokeball className="w-6" />
          Kaushal Bommena
        </Link>
        <ul className="flex flex-wrap items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink {...item} />
            </li>
          ))}
          <li>
            <ContactModal />
          </li>
        </ul>
      </nav>
    </header>
  );
}
