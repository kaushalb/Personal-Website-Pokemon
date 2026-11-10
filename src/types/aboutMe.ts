export interface AboutMeContent {
  name: string;
  /** Path under /public, or null to show a placeholder until a photo is added. */
  photoSrc: string | null;
  dexNumber: string;
  typeLabel: string;
  bio: readonly string[];
}
