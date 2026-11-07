import { redirect } from "next/navigation";
import { DEFAULT_ROUTE } from "@/constants/navigation";

/** "/" renders nothing, it only redirects, so there is no UI to validate as instant. */
export const instant = false;

/** The intro opens into the default page, so "/" simply forwards there. */
export default function RootPage() {
  redirect(DEFAULT_ROUTE);
}
