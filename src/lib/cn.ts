/** Joins class names, skipping falsy values. Shared by all components. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
