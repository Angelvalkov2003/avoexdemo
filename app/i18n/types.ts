import type { ProjectLogo } from "./assets";
import type { Locale } from "./locales";

export type ServiceId = "web" | "software" | "ai" | "brand";

export interface FeaturedProject {
  id: string;
  name: string;
  location: string;
  category: string;
  summary: string;
  description: string;
  highlights: string[];
  tags: string[];
  url: string;
  urlLabel: string;
  linkKind: "site" | "code";
  logo: ProjectLogo;
  status?: string;
}

export interface Dictionary {
  locale: Locale;
  meta: { title: string; description: string; ogLocale: string };
  nav: {
    services: string;
    work: string;
    team: string;
    process: string;
    faq: string;
    cta: string;
    switchLabel: string;
    switchHref: string;
    switchAria: string;
    menu: string;
    close: string;
  };
  hero: {
    eyebrow: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    primary: string;
    secondary: string;
    stats: { value: string; label: string }[];
  };
  clients: { label: string };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { id: ServiceId; title: string; description: string; bullets: string[] }[];
  };
  work: {
    eyebrow: string;
    title: string;
    subtitle: string;
    visitSite: string;
    viewCode: string;
    featured: FeaturedProject[];
    moreTitle: string;
    moreSubtitle: string;
    more: { name: string; url: string; category: string; description: string }[];
  };
  why: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  team: {
    eyebrow: string;
    title: string;
    subtitle: string;
    experienceLabel: string;
    members: {
      name: string;
      role: string;
      photo: string;
      experience: string;
      education: string[];
      bio: string;
      skills: string[];
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { title: string; description: string; meta: string }[];
    guarantees: string[];
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    directTitle: string;
    responseNote: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      service: string;
      services: { value: string; label: string }[];
      budget: string;
      budgetPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: { tagline: string; founded: string; rights: string; language: string };
}
