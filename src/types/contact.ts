export type SocialId = "facebook" | "linkedin" | "instagram";

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  githubUrl: string;
  socials: readonly SocialLink[];
}
