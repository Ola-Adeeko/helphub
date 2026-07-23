export type Specialty =
  | "Abuse & Domestic Violence"
  | "Sexual Assault & Rape"
  | "Suicide & Crisis Support"
  | "Depression & Anxiety"
  | "Couples & Marriage"
  | "Family Therapy"
  | "Workplace & Stress"
  | "Addiction & Substance Abuse"
  | "Grief & Loss"
  | "Teen & Adolescent Support";

export type ContactType = "call" | "whatsapp" | "booking";

export interface Contact {
  type: ContactType;
  value: string; // phone number, wa.me link, or booking URL
  label?: string;
}

export type ProviderKind = "Organization" | "Individual Practitioner";

export interface Provider {
  slug: string;
  name: string;
  kind: ProviderKind;
  city: string;
  photo: string;
  tagline: string;
  about: string;
  specialties: Specialty[];
  licensed: boolean;
  certified: boolean;
  credentialNote?: string;
  priceFrom: number | null; // in Naira, null = "varies" / not disclosed
  freeFirstSession: boolean;
  languages: string[];
  contacts: Contact[];
  verifiedByHelpHub: boolean;
}
