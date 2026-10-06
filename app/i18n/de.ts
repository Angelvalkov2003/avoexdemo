import { LOGOS, PHOTOS, SITE_URLS } from "./assets";
import type { Dictionary } from "./types";

export const de: Dictionary = {
  locale: "de",
  meta: {
    title: "Avoex — Websites, Individualsoftware & KI-Automatisierung",
    description:
      "Avoex ist ein Senior-Softwarestudio, gegründet 2024. Wir gestalten und entwickeln leistungsstarke Websites, E-Commerce, Individualsoftware und KI-Automatisierungen für Unternehmen in Großbritannien, den Niederlanden, der Türkei und Bulgarien.",
    ogLocale: "de_DE",
  },
  nav: {
    services: "Leistungen",
    work: "Projekte",
    team: "Team",
    process: "Prozess",
    faq: "FAQ",
    cta: "Projekt starten",
    switchLabel: "EN",
    switchHref: "/",
    switchAria: "Sprache wählen",
    menu: "Menü öffnen",
    close: "Menü schließen",
  },
  hero: {
    eyebrow: "Softwarestudio · Seit 2024",
    titleStart: "Websites, Software &",
    titleHighlight: "KI-Automatisierung",
    titleEnd: "die Ihr Unternehmen wachsen lassen.",
    subtitle:
      "Wir entwickeln digitale Produkte für Unternehmen in London, Amsterdam, Istanbul und Sofia — von neuen Websites bis zu komplexen Plattformen und KI-Pipelines, die selbstständig laufen.",
    primary: "Kostenlose Beratung buchen",
    secondary: "Unsere Arbeit ansehen",
    stats: [
      { value: "2024", label: "Gegründet" },
      { value: "20+", label: "Abgeschlossene Projekte" },
      { value: "4", label: "Bediente Länder" },
      { value: "24 Std.", label: "Antwortzeit" },
    ],
  },
  clients: { label: "Vertraut von Teams in ganz Europa" },
  services: {
    eyebrow: "Was wir tun",
    title: "Alles, was Ihr Unternehmen online braucht, um zu gewinnen.",
    subtitle:
      "Ein Team — vom ersten Entwurf bis zur Produktion und darüber hinaus. Keine Übergaben, keine Agenturen hinter der Agentur.",
    items: [
      {
        id: "web",
        title: "Websites & E-Commerce",
        description:
          "Schnelle, SEO-fertige Websites, Onlineshops und Buchungsplattformen, die Besucher in zahlende Kunden verwandeln.",
        bullets: [
          "Individuelles Design — keine Standard-Templates",
          "Onlineshops, Zahlungen & Lagerverwaltung",
          "Buchungssysteme & digitale Speisekarten",
          "SEO, Analytics & Core Web Vitals",
        ],
      },
      {
        id: "software",
        title: "Individualsoftware",
        description:
          "Interne Plattformen, Dashboards, CRMs und SaaS-Produkte — gebaut für echte Daten und echtes Wachstum.",
        bullets: [
          "Managementsysteme & CRMs",
          "Dashboards, Reporting & Datenkontrolle",
          "APIs & Drittanbieter-Integrationen",
          "Cloud-Architektur, DevOps & Security",
        ],
      },
      {
        id: "ai",
        title: "KI-Automatisierung",
        description:
          "KI-Agenten und Workflows, die repetitive Arbeit von Ihrem Team übernehmen — und rund um die Uhr laufen.",
        bullets: [
          "Content- & Artikelgenerierung",
          "Automatisierte Publishing-Pipelines",
          "KI-Bildgenerierung",
          "Dokumentverarbeitung & Assistenten",
        ],
      },
      {
        id: "brand",
        title: "Marke & Wachstum",
        description:
          "Markenidentität, UI/UX und Marketingstrategie, die Ihr Unternehmen so stark aussehen lassen, wie es arbeitet.",
        bullets: [
          "Markenidentität & visuelle Systeme",
          "UI/UX & Design Systems",
          "Social Media & Paid Ads",
          "Marketing- & Wachstumsstrategie",
        ],
      },
    ],
  },
  work: {
    eyebrow: "Ausgewählte Projekte",
    title: "Produkte, auf die wir stolz sind.",
    subtitle:
      "Von einem Londoner Social Enterprise bis zu einer der größten Nachrichtenredaktionen der Türkei — hier ist ein Teil dessen, was wir gebaut haben.",
    visitSite: "Website besuchen",
    viewCode: "Auf GitHub ansehen",
    featured: [
      {
        id: "12punto",
        name: "12punto",
        location: "Istanbul, Türkei",
        category: "KI-Automatisierung · Medien",
        summary:
          "Einer der ältesten und größten Nachrichtensender der Türkei, mit einer Redaktion, die nie schläft.",
        description:
          "Wir entwickeln und betreiben eine Familie von KI-Automatisierungen für ihr Redaktionsteam: Pipelines, die Nachrichtenartikel aus eingehenden Quellen erzeugen, passende Bilder erstellen und alles automatisch veröffentlichen — mit menschlicher Prüfung genau dort, wo sie zählt.",
        highlights: [
          "KI-generierte Nachrichtenartikel im großen Maßstab",
          "Automatische Veröffentlichung auf Website & Kanälen",
          "KI-Bildgenerierung für jede Story",
          "Redaktionelle Prüfung & Qualitätsabsicherung",
        ],
        tags: ["LLMs", "Automatisierung", "Bildgenerierung", "Publishing"],
        url: SITE_URLS.punto,
        urlLabel: "12punto.com.tr",
        linkKind: "site",
        logo: LOGOS.punto,
      },
      {
        id: "brush-past",
        name: "Brush Past",
        location: "London, UK",
        category: "Plattform · Marke · E-Commerce",
        summary:
          "Ein Londoner Social Enterprise, das Menschen, die von Obdachlosigkeit und Abhängigkeit betroffen sind, hilft, Kreativität in Kunst, Produkte und eigene Unternehmen zu verwandeln.",
        description:
          "Wir haben das komplexe interne System entwickelt, das die gesamte Organisation steuert — Creators, Workshops, Produkte, Bestellungen und soziale Wirkung — an einem Ort. Parallel dazu arbeiten wir an Markenidentität, Website und Onlineshop, die sich in der Endphase befinden.",
        highlights: [
          "End-to-end Betriebs- & Managementsystem",
          "Creator-, Workshop- und Impact-Tracking",
          "Markenidentität von Grund auf",
          "Website & Shop für Geschenkboxen, Wearable Art und Prints",
        ],
        tags: ["Next.js", "Managementsystem", "Markenidentität", "E-Commerce"],
        url: SITE_URLS.brushPast,
        urlLabel: "brush-past.vercel.app",
        linkKind: "site",
        logo: LOGOS.brushPast,
        status: "Website in der Endphase",
      },
      {
        id: "askemo",
        name: "Askemo",
        location: "Niederlande",
        category: "HR SaaS · Datenplattform",
        summary:
          "Eine der größten Employee-Feedback- und HR-Plattformen in den Niederlanden — genutzt von Organisationen, um zu messen und zu verbessern, wie sich Mitarbeiter bei der Arbeit fühlen.",
        description:
          "Wir sind ein zentraler Engineering-Partner hinter einem großen Teil des Askemo-Produkts — von der Survey-Engine und Multi-Channel-Verteilung bis zu Echtzeit-Dashboards, rollenbasierter Zugriffskontrolle und den Data Controls, die sensible HR-Daten sicher und DSGVO-konform halten.",
        highlights: [
          "Survey-Engine: Engagement, Onboarding, Exit & eNPS",
          "Verteilung per E-Mail, SMS, WhatsApp & Teams",
          "Echtzeit-Dashboards nach Team und Thema",
          "Granulare Berechtigungen & Data Governance",
        ],
        tags: ["SaaS", "Daten & Analytics", "Security", "KI-Insights"],
        url: SITE_URLS.askemo,
        urlLabel: "askemo.nl",
        linkKind: "site",
        logo: LOGOS.askemo,
      },
      {
        id: "tdr",
        name: "Telephone Domain Register",
        location: "Bulgarien",
        category: "Telecom · Cybersecurity · Automatisierung",
        summary:
          "Ein großangelegtes Telecom- und Cybersecurity-Projekt, das ein komplettes Internet-Ökosystem aufbaut, dessen Anwendungen über das Telefonnetz laufen — die Grundlage von TDRs Safe Internet.",
        description:
          "Wir arbeiten an einem komplexen Netzwerk und an der Cybersecurity des Telefonnetzes selbst: Wir bauen das gesamte Internetsystem, mit dem Anwendungen über das Telefonnetz laufen, stärken die Sicherheit und entwickeln Automatisierungssysteme sowie Web-Apps für ihr Safe Internet. In der Pre-Release-Phase wurde das Projekt bereits auf über 4 Millionen Euro bewertet.",
        highlights: [
          "Komplexe Netzwerkarchitektur über das Telefonnetz",
          "Cybersecurity für Telecom-Infrastruktur",
          "Vollständiges Internetsystem mit Apps über das Telefonnetz",
          "Automatisierungssysteme & Web-Apps für Safe Internet",
        ],
        tags: ["Telecom", "Networking", "Cybersecurity", "Automatisierung", "Web-Apps"],
        url: SITE_URLS.tdr,
        urlLabel: "tdrbg.net",
        linkKind: "site",
        logo: LOGOS.tdr,
        status: "Pre-Release · bewertet auf über 4 Mio. €",
      },
      {
        id: "axiom",
        name: "Axiom Design System",
        location: "Open Source",
        category: "Design System · React-Bibliothek",
        summary:
          "Ein modernes, barrierefreies, vollständig typisiertes React Design System auf Mantine v9 — Komponentenbibliothek, Dokumentationsseite und lebendiger Styleguide in einem.",
        description:
          "Axiom erforscht Architektur, Tooling und Engineering-Praktiken hinter produktionsreifen Design Systems: ein zentrales Token-System, WCAG-2.2-AA-Barrierefreiheit, eine Next.js- + Fumadocs-Dokumentation mit Live-Storybook-Embeds, vier vollständige Demo-Apps und einen MCP-Server, damit KI-Assistenten das System verstehen.",
        highlights: [
          "30 originale Komponenten + 70+ thematische Mantine-Wrapper",
          "300+ Storybook Stories & 200+ Dokumentationsseiten",
          "4 Demo-Apps: Shell, Campaigns, Settings, Analytics",
          "MCP-Server für KI-gestützte Entwicklung",
        ],
        tags: ["React 19", "TypeScript", "Mantine v9", "Storybook 10", "Turborepo"],
        url: SITE_URLS.axiom,
        urlLabel: "github.com/Milenchev/axiom-design-system",
        linkKind: "code",
        logo: LOGOS.axiom,
      },
    ],
    moreTitle: "Weitere Projekte",
    moreSubtitle: "Websites, Shops und Marken, die wir für wachsende Unternehmen gestartet haben.",
    more: [
      {
        name: "Paperok",
        url: SITE_URLS.paperok,
        category: "E-Commerce · Marke · Marketing",
        description:
          "Onlineshop auf individuellem Template, mit vollständiger Markenidentität, E-Commerce-Setup und Marketingstrategie.",
      },
      {
        name: "Nova Art Space",
        url: SITE_URLS.nova,
        category: "Kunstgalerie · Sofia",
        description:
          "Website für eine Galerie im Zentrum Sofias — Ausstellungen, Künstler und Events, mit raffinierter visueller Identität.",
      },
      {
        name: "Arthouse 94",
        url: SITE_URLS.arthouse,
        category: "Immobilien",
        description: "Maklerwebsite mit Immobilienangeboten, Markenpräsenz und Leadgenerierung.",
      },
      {
        name: "One Over Fifty",
        url: SITE_URLS.oneOverFifty,
        category: "Videografie",
        description: "Filmische Portfolio-Website für ein Videostudio.",
      },
      {
        name: "Mood Shisha Bar",
        url: SITE_URLS.mood,
        category: "Gastronomie · Varna",
        description: "Website und digitale Speisekarte für eine Lounge-Bar in Varna.",
      },
      {
        name: "BG Green Yard",
        url: SITE_URLS.greenYard,
        category: "Landschaftsgestaltung",
        description: "Zweisprachige Website und Lead-Erfassung für ein Landschaftsbauunternehmen.",
      },
      {
        name: "Riolit",
        url: SITE_URLS.riolit,
        category: "Bauwesen",
        description: "Unternehmenswebsite und Projektportfolio für ein Bauunternehmen.",
      },
      {
        name: "PureSpace",
        url: SITE_URLS.pureSpace,
        category: "Reinigungsdienste",
        description: "Service-Website mit klaren Angeboten und Angebotsanfragen für eine Reinigungsfirma.",
      },
    ],
  },
  why: {
    eyebrow: "Warum Avoex",
    title: "Kleines Senior-Team. Engineering auf Enterprise-Niveau.",
    items: [
      {
        title: "Sprechen Sie mit den Buildern",
        description:
          "Keine Account Manager dazwischen. Sie sprechen direkt mit den Engineers, die Ihr Produkt entwerfen und entwickeln.",
      },
      {
        title: "Senior by default",
        description:
          "Jedes Projekt wird von Menschen mit jahrelanger Erfahrung bei Produktunternehmen umgesetzt — keine Juniors, die auf Ihrem Budget lernen.",
      },
      {
        title: "Klarer Scope & Preis",
        description:
          "Feste Angebote, ehrliche Timelines und wöchentliche Demos — Sie wissen immer, was fertig ist und was als Nächstes kommt.",
      },
      {
        title: "Mit Ihnen nach dem Launch",
        description:
          "Hosting, Wartung, Security-Updates und neue Features — wir bleiben Ihr langfristiger Tech-Partner.",
      },
    ],
  },
  team: {
    eyebrow: "Das Team",
    title: "Die Menschen hinter Ihrem Produkt.",
    subtitle:
      "Ein Senior-Team, das den gesamten Produktlebenszyklus abdeckt — Strategie, Architektur, Design, Frontend, Backend, Data & KI, QA, Security und Cloud.",
    experienceLabel: "Erfahrung",
    members: [
      {
        name: "Angel Valkov",
        role: "CEO & Lead Engineer",
        photo: PHOTOS.angel,
        experience: "8+ Jahre",
        education: ["BSc Software Engineering", "MSc Cybersecurity"],
        bio: "Angel hat den gesamten Weg gegangen — vom Developer zum Architekten — bei vielen Unternehmen und Produkten. Er ist die erste Person, mit der Sie sprechen: Er führt Kundengespräche, Backend-Entwicklung, Systemarchitektur und DevOps.",
        skills: ["Kundenstrategie", "Backend", "Architektur", "DevOps", "Security"],
      },
      {
        name: "Georgi Milenchev",
        role: "Frontend Lead & UI/UX",
        photo: PHOTOS.milenchev,
        experience: "5+ Jahre",
        education: ["BSc Computer Science"],
        bio: "Georgi verwandelt komplexe Produkte in Interfaces, die Menschen gerne nutzen. Er verantwortet Frontend Engineering und UI/UX — von Wireframes und Design Systems bis zu pixelgenauer, barrierefreier React. Autor des Axiom Design Systems.",
        skills: ["React & Next.js", "UI/UX", "Design Systems", "Barrierefreiheit"],
      },
      {
        name: "Georgi Kerkelov",
        role: "Software Engineer · QA, Security & Cloud",
        photo: PHOTOS.kerkelov,
        experience: "9+ Jahre",
        education: ["BSc Computer & Software Engineering"],
        bio: "Georgi stellt sicher, dass alles, was wir ausliefern, zuverlässig und sicher ist. Er treibt QA und Testautomatisierung, Cybersecurity-Reviews und Cloud-Infrastruktur voran — damit jedes Release am Launch-Tag und im Scale stabil bleibt.",
        skills: ["QA & Testautomatisierung", "Cybersecurity", "Cloud", "CI/CD"],
      },
      {
        name: "Stiliyan Stefanov",
        role: "Data & AI Engineer",
        photo: PHOTOS.stiliyan,
        experience: "5+ Jahre",
        education: ["MSc Data Science, Niederlande"],
        bio: "Stiliyan verantwortet alles rund um Daten. Er entwirft Datenbanken und Data Pipelines, baut KI- und LLM-Features und verwandelt Rohdaten in Analytics und Dashboards, die echte Entscheidungen antreiben.",
        skills: ["Datenbanken & SQL", "KI & LLMs", "Data Analytics", "Python", "Data Pipelines"],
      },
    ],
  },
  process: {
    eyebrow: "So arbeiten wir",
    title: "Ein bewährter Weg von der Idee zum Launch.",
    subtitle:
      "Fünf fokussierte Phasen, fester Scope und wöchentliche Demos — Sie wissen immer, wo Ihr Projekt steht, was als Nächstes kommt und was es kostet.",
    steps: [
      {
        title: "Discovery",
        meta: "Kostenlos · 30 Min.",
        description:
          "Wir tauchen in Ihr Business, Ihre Ziele und Nutzer ein, um zu definieren, wie Erfolg aussieht — und ob wir der richtige Partner sind.",
      },
      {
        title: "Strategie & Angebot",
        meta: "Innerhalb von 48 Stunden",
        description:
          "Scope, Features, Architektur und Tech-Stack in einem festen Angebot mit klarer Timeline und Preis.",
      },
      {
        title: "UX & Design",
        meta: "Interaktiver Prototyp",
        description:
          "Wireframes, User Flows und ein High-Fidelity-Design in Ihrer Marke — gemeinsam verfeinert, bevor eine Zeile Code geschrieben wird.",
      },
      {
        title: "Engineering",
        meta: "Wöchentliche Demos",
        description:
          "Agile Sprints mit moderner, skalierbarer Technologie, automatisiertem Testing und jede Woche einer funktionierenden Demo echten Fortschritts.",
      },
      {
        title: "Launch & Wachstum",
        meta: "Laufender Support",
        description:
          "Security-Checks, Performance-Tuning und ein reibungsloser Go-Live — danach Monitoring, SEO und neue Features, während Sie wachsen.",
      },
    ],
    guarantees: ["Festpreis, keine Überraschungen", "Wöchentliche Demos", "Sie besitzen Code & IP", "Support nach dem Launch"],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Fragen, beantwortet.",
    items: [
      {
        q: "Was kostet ein Projekt?",
        a: "Das hängt vom Scope ab. Eine professionelle Business-Website startet typischerweise bei etwa €500, Onlineshops ab €1.200, und Individualsoftware oder KI-Automatisierung wird nach einem kurzen Discovery-Call kalkuliert. Sie erhalten immer ein festes Angebot, bevor wir starten.",
      },
      {
        q: "Wie lange dauert es?",
        a: "Eine kleine Website kann in 1–2 Wochen fertig sein. E-Commerce und Buchungsplattformen brauchen meist 3–6 Wochen, und Individualsoftware wird in Meilensteinen mit einer funktionierenden Demo jede Woche geplant.",
      },
      {
        q: "Gibt es eine monatliche Gebühr?",
        a: "Nur für das, was Sie wirklich brauchen: Hosting, Domain und optionale Wartung. Wir empfehlen das kosteneffizienteste Setup — für viele kleine Sites kann Hosting sogar kostenlos sein.",
      },
      {
        q: "Können Sie KI in unsere bestehenden Systeme integrieren?",
        a: "Ja. Wir integrieren KI in die Tools, die Sie bereits nutzen — CMS, CRM, Tabellen, interne Plattformen — um Content zu erzeugen, Dokumente zu verarbeiten, automatisch zu publizieren oder Kunden zu beantworten.",
      },
      {
        q: "Arbeiten Sie mit internationalen Kunden?",
        a: "Die meisten unserer Kunden sind außerhalb Bulgariens — in Großbritannien, den Niederlanden und der Türkei. Wir arbeiten remote auf Englisch und Bulgarisch und passen uns Ihrer Zeitzone an.",
      },
      {
        q: "Was passiert nach dem Launch?",
        a: "Wir bleiben dabei. Wir bieten Wartung, Security-Updates, Performance-Monitoring und neue Features sowie Dokumentation und Training für Ihr Team.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Lassen Sie uns gemeinsam etwas Großartiges bauen.",
    subtitle:
      "Erzählen Sie uns von Ihrem Projekt. Wir melden uns innerhalb von 24 Stunden mit den nächsten Schritten — unverbindlich.",
    directTitle: "Lieber direkt sprechen?",
    responseNote: "Wir antworten innerhalb von 24 Stunden, Montag bis Freitag.",
    form: {
      name: "Name",
      namePlaceholder: "Ihr Name",
      email: "E-Mail",
      emailPlaceholder: "sie@firma.com",
      service: "Was brauchen Sie?",
      services: [
        { value: "website", label: "Website" },
        { value: "ecommerce", label: "E-Commerce" },
        { value: "software", label: "Individualsoftware" },
        { value: "ai", label: "KI-Automatisierung" },
        { value: "brand", label: "Marke & Marketing" },
        { value: "other", label: "Etwas anderes" },
      ],
      budget: "Budget (optional)",
      budgetPlaceholder: "z. B. €2.000–5.000",
      message: "Projektdetails",
      messagePlaceholder: "Was bauen Sie und was soll es erreichen?",
      submit: "Nachricht senden",
      sending: "Wird gesendet…",
      success: "Danke! Ihre Nachricht ist unterwegs — wir melden uns innerhalb von 24 Stunden.",
      error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.",
    },
  },
  footer: {
    tagline: "Websites, Individualsoftware und KI-Automatisierung für ambitionierte Unternehmen.",
    founded: "Gegründet 2024 · Sofia, Bulgarien",
    rights: "Alle Rechte vorbehalten.",
    language: "Sprache",
  },
};
