import { LOGOS, PHOTOS, SITE_URLS } from "./assets";
import type { Dictionary } from "./types";

export const nl: Dictionary = {
  locale: "nl",
  meta: {
    title: "Avoex — Websites, maatwerksoftware & AI-automatisering",
    description:
      "Avoex is een senior softwarestudio opgericht in 2024. We ontwerpen en bouwen snelle websites, e-commerce, maatwerksoftware en AI-automatisering voor bedrijven in het Verenigd Koninkrijk, Nederland, Turkije en Bulgarije.",
    ogLocale: "nl_NL",
  },
  nav: {
    services: "Diensten",
    work: "Werk",
    team: "Team",
    process: "Proces",
    faq: "FAQ",
    cta: "Start een project",
    switchLabel: "EN",
    switchHref: "/",
    switchAria: "Taal kiezen",
    menu: "Menu openen",
    close: "Menu sluiten",
  },
  hero: {
    eyebrow: "Softwarestudio · Sinds 2024",
    titleStart: "Websites, software &",
    titleHighlight: "AI-automatisering",
    titleEnd: "die je bedrijf laten groeien.",
    subtitle:
      "We bouwen digitale producten voor bedrijven in Londen, Amsterdam, Istanbul en Sofia — van gloednieuwe websites tot complexe platforms en AI-pipelines die zelfstandig draaien.",
    primary: "Boek een gratis consult",
    secondary: "Bekijk ons werk",
    stats: [
      { value: "2024", label: "Opgericht" },
      { value: "20+", label: "Opgeleverde projecten" },
      { value: "4", label: "Landen bediend" },
      { value: "24u", label: "Reactietijd" },
    ],
  },
  clients: { label: "Vertrouwd door teams in heel Europa" },
  services: {
    eyebrow: "Wat we doen",
    title: "Alles wat je bedrijf nodig heeft om online te winnen.",
    subtitle:
      "Eén team, van de eerste schets tot productie en verder. Geen overdrachten, geen bureaus achter het bureau.",
    items: [
      {
        id: "web",
        title: "Websites & e-commerce",
        description:
          "Snelle, SEO-klare websites, webshops en boekingsplatforms die bezoekers omzetten in betalende klanten.",
        bullets: [
          "Maatwerkdesign — geen generieke templates",
          "Webshops, betalingen & voorraad",
          "Boekingssystemen & digitale menu's",
          "SEO, analytics & Core Web Vitals",
        ],
      },
      {
        id: "software",
        title: "Maatwerksoftware",
        description:
          "Interne platforms, dashboards, CRM's en SaaS-producten gebouwd voor echte data en echte groei.",
        bullets: [
          "Managementsystemen & CRM's",
          "Dashboards, rapportages & databeheer",
          "API's & integraties met derden",
          "Cloudarchitectuur, DevOps & security",
        ],
      },
      {
        id: "ai",
        title: "AI-automatisering",
        description:
          "AI-agents en workflows die repetitief werk van je team overnemen — en 24/7 blijven draaien.",
        bullets: [
          "Content- & artikelgeneratie",
          "Geautomatiseerde publicatiepipelines",
          "AI-beeldgeneratie",
          "Documentverwerking & assistenten",
        ],
      },
      {
        id: "brand",
        title: "Merk & groei",
        description:
          "Merkidentiteit, UI/UX en marketingstrategie die je bedrijf er net zo sterk laten uitzien als het werkt.",
        bullets: [
          "Merkidentiteit & visuele systemen",
          "UI/UX & design systems",
          "Social media & betaalde ads",
          "Marketing- & groeistrategie",
        ],
      },
    ],
  },
  work: {
    eyebrow: "Geselecteerd werk",
    title: "Producten waar we trots op zijn.",
    subtitle:
      "Van een Londense social enterprise tot een van de grootste nieuwsredacties van Turkije — dit is een selectie van wat we hebben gebouwd.",
    visitSite: "Bezoek website",
    viewCode: "Bekijk op GitHub",
    featured: [
      {
        id: "12punto",
        name: "12punto",
        location: "Istanbul, Turkije",
        category: "AI-automatisering · Media",
        summary:
          "Een van de oudste en grootste nieuwspublishers in Turkije, met een nieuwsredactie die nooit stilstaat.",
        description:
          "We ontwerpen en runnen een familie van AI-automatiseringen voor hun redactie: pipelines die nieuwsartikelen genereren uit inkomende bronnen, passende beelden maken en alles automatisch publiceren — met menselijke controle precies waar dat nodig is.",
        highlights: [
          "AI-gegenereerde nieuwsartikelen op schaal",
          "Automatische publicatie naar website & kanalen",
          "AI-beeldgeneratie voor elk verhaal",
          "Redactionele review & kwaliteitswaarborgen",
        ],
        tags: ["LLM's", "Automatisering", "Beeldgeneratie", "Publicatie"],
        url: SITE_URLS.punto,
        urlLabel: "12punto.com.tr",
        linkKind: "site",
        logo: LOGOS.punto,
      },
      {
        id: "brush-past",
        name: "Brush Past",
        location: "Londen, VK",
        category: "Platform · Merk · E-commerce",
        summary:
          "Een Londense social enterprise die mensen die getroffen zijn door dakloosheid en verslaving helpt creativiteit om te zetten in kunst, producten en bedrijven die van hen zijn.",
        description:
          "We bouwden het complexe interne systeem dat de hele organisatie volgt en beheert — creators, workshops, producten, bestellingen en sociale impact — op één plek. Daarnaast werken we aan hun merkidentiteit, website en webshop, die nu in de eindfase zit.",
        highlights: [
          "End-to-end operations- & managementsysteem",
          "Creator-, workshop- en impacttracking",
          "Merkidentiteit vanaf de grond opgebouwd",
          "Website & shop voor giftboxes, wearable art en prints",
        ],
        tags: ["Next.js", "Managementsysteem", "Merkidentiteit", "E-commerce"],
        url: SITE_URLS.brushPast,
        urlLabel: "brush-past.vercel.app",
        linkKind: "site",
        logo: LOGOS.brushPast,
        status: "Website in eindfase",
      },
      {
        id: "askemo",
        name: "Askemo",
        location: "Nederland",
        category: "HR SaaS · Dataplatform",
        summary:
          "Een van de grootste employee-feedback- en HR-platforms in Nederland, gebruikt door organisaties om te meten en te verbeteren hoe mensen zich voelen op het werk.",
        description:
          "We zijn een kern-engineeringpartner achter een groot deel van het Askemo-product — van de survey-engine en multi-channel distributie tot real-time dashboards, rolgebaseerde toegang en de databeheersing die gevoelige HR-informatie veilig en GDPR-compliant houdt.",
        highlights: [
          "Survey-engine: engagement, onboarding, exit & eNPS",
          "Distributie via e-mail, sms, WhatsApp & Teams",
          "Real-time dashboards per team en thema",
          "Granulaire rechten & data governance",
        ],
        tags: ["SaaS", "Data & analytics", "Security", "AI-inzichten"],
        url: SITE_URLS.askemo,
        urlLabel: "askemo.nl",
        linkKind: "site",
        logo: LOGOS.askemo,
      },
      {
        id: "tdr",
        name: "Telephone Domain Register",
        location: "Bulgarije",
        category: "Telecom · Cybersecurity · Automatisering",
        summary:
          "Een grootschalig telecom- en cybersecurityproject dat een volledig internetecosysteem bouwt waarvan applicaties via het telefonienetwerk draaien — de basis van TDR's Safe Internet.",
        description:
          "We werken aan een complex netwerk en aan de cybersecurity van het telefonienetwerk zelf: we bouwen het volledige internetsysteem waarmee applicaties via het telefonienetwerk kunnen draaien, versterken de beveiliging en maken automatiseringssystemen en webapps voor hun Safe Internet. In de pre-releasefase is het project al gewaardeerd op meer dan €4 miljoen.",
        highlights: [
          "Complexe netwerkarchitectuur via het telefonienetwerk",
          "Cybersecurity voor telecominfrastructuur",
          "Volledig internetsysteem met apps via het telefoonnetwerk",
          "Automatiseringssystemen & webapps voor Safe Internet",
        ],
        tags: ["Telecom", "Networking", "Cybersecurity", "Automatisering", "Webapps"],
        url: SITE_URLS.tdr,
        urlLabel: "tdrbg.net",
        linkKind: "site",
        logo: LOGOS.tdr,
        status: "Pre-release · gewaardeerd op €4M+",
      },
      {
        id: "axiom",
        name: "Axiom Design System",
        location: "Open source",
        category: "Design system · React-bibliotheek",
        summary:
          "Een modern, toegankelijk, volledig getypt React design system op Mantine v9 — componentbibliotheek, documentatiesite en levende styleguide in één.",
        description:
          "Axiom verkent de architectuur, tooling en engineeringpraktijken achter productiegerede design systems: een gecentraliseerd tokensysteem, WCAG 2.2 AA-toegankelijkheid, een Next.js + Fumadocs-documentatiesite met live Storybook-embeds, vier volledige demo-apps en een MCP-server zodat AI-assistenten het systeem begrijpen.",
        highlights: [
          "30 originele componenten + 70+ gethemede Mantine-wrappers",
          "300+ Storybook stories & 200+ documentatiepagina's",
          "4 demo-apps: shell, campaigns, settings, analytics",
          "MCP-server voor AI-ondersteunde ontwikkeling",
        ],
        tags: ["React 19", "TypeScript", "Mantine v9", "Storybook 10", "Turborepo"],
        url: SITE_URLS.axiom,
        urlLabel: "github.com/Milenchev/axiom-design-system",
        linkKind: "code",
        logo: LOGOS.axiom,
      },
    ],
    moreTitle: "Meer projecten",
    moreSubtitle: "Websites, shops en merken die we hebben gelanceerd voor groeiende bedrijven.",
    more: [
      {
        name: "Paperok",
        url: SITE_URLS.paperok,
        category: "E-commerce · Merk · Marketing",
        description:
          "Webshop op een maatwerk template, met volledige merkidentiteit, e-commerce setup en marketingstrategie.",
      },
      {
        name: "Nova Art Space",
        url: SITE_URLS.nova,
        category: "Kunstgalerie · Sofia",
        description:
          "Website voor een galerie in het centrum van Sofia — tentoonstellingen, kunstenaars en events, met een verfijnde visuele identiteit.",
      },
      {
        name: "Arthouse 94",
        url: SITE_URLS.arthouse,
        category: "Vastgoed",
        description: "Makelaarswebsite met woningaanbod, merkpresence en leadgeneratie.",
      },
      {
        name: "One Over Fifty",
        url: SITE_URLS.oneOverFifty,
        category: "Videografie",
        description: "Cinematische portfoliosite voor een videostudio.",
      },
      {
        name: "Mood Shisha Bar",
        url: SITE_URLS.mood,
        category: "Horeca · Varna",
        description: "Website en digitaal menu voor een loungebar in Varna.",
      },
      {
        name: "BG Green Yard",
        url: SITE_URLS.greenYard,
        category: "Tuinarchitectuur",
        description: "Tweetalige website en lead capture voor een landscapingbedrijf.",
      },
      {
        name: "Riolit",
        url: SITE_URLS.riolit,
        category: "Bouw",
        description: "Bedrijfswebsite en projectportfolio voor een bouwbedrijf.",
      },
      {
        name: "PureSpace",
        url: SITE_URLS.pureSpace,
        category: "Schoonmaakdiensten",
        description: "Servicesite met duidelijke aanbiedingen en offerteaanvragen voor een schoonmaakbedrijf.",
      },
    ],
  },
  why: {
    eyebrow: "Waarom Avoex",
    title: "Klein senior team. Engineering op big-company niveau.",
    items: [
      {
        title: "Praat met de builders",
        description:
          "Geen accountmanagers ertussen. Je spreekt rechtstreeks met de engineers die je product ontwerpen en bouwen.",
      },
      {
        title: "Senior by default",
        description:
          "Elk project wordt gedaan door mensen met jaren ervaring bij productbedrijven — geen juniors die leren op jouw budget.",
      },
      {
        title: "Duidelijke scope & prijs",
        description:
          "Vaste voorstellen, eerlijke timelines en wekelijkse demo's, zodat je altijd weet wat klaar is en wat volgt.",
      },
      {
        title: "Met je mee na launch",
        description:
          "Hosting, onderhoud, security-updates en nieuwe features — we blijven je langetermijn techpartner.",
      },
    ],
  },
  team: {
    eyebrow: "Het team",
    title: "De mensen achter je product.",
    subtitle:
      "Een senior team dat de volledige productlevenscyclus dekt — strategie, architectuur, design, frontend, backend, data & AI, QA, security en cloud.",
    experienceLabel: "ervaring",
    members: [
      {
        name: "Angel Valkov",
        role: "CEO & Lead Engineer",
        photo: PHOTOS.angel,
        experience: "8+ jaar",
        education: ["BSc Software Engineering", "MSc Cybersecurity"],
        bio: "Angel heeft het hele pad bewandeld — van developer tot architect — bij veel bedrijven en producten. Hij is de eerste persoon met wie je spreekt: hij leidt klantgesprekken, backend-ontwikkeling, systeemarchitectuur en DevOps.",
        skills: ["Klantstrategie", "Backend", "Architectuur", "DevOps", "Security"],
      },
      {
        name: "Georgi Milenchev",
        role: "Frontend Lead & UI/UX",
        photo: PHOTOS.milenchev,
        experience: "5+ jaar",
        education: ["BSc Computer Science"],
        bio: "Georgi verandert complexe producten in interfaces die mensen graag gebruiken. Hij is verantwoordelijk voor frontend engineering en UI/UX — van wireframes en design systems tot pixel-perfecte, toegankelijke React. Auteur van het Axiom design system.",
        skills: ["React & Next.js", "UI/UX", "Design systems", "Toegankelijkheid"],
      },
      {
        name: "Georgi Kerkelov",
        role: "Software Engineer · QA, Security & Cloud",
        photo: PHOTOS.kerkelov,
        experience: "9+ jaar",
        education: ["BSc Computer & Software Engineering"],
        bio: "Georgi zorgt dat alles wat we shippen betrouwbaar en veilig is. Hij stuurt QA en testautomatisering, cybersecurity-reviews en cloudinfrastructuur, zodat elke release stabiel is op lanceerdag én op schaal.",
        skills: ["QA & testautomatisering", "Cybersecurity", "Cloud", "CI/CD"],
      },
      {
        name: "Stiliyan Stefanov",
        role: "Data & AI Engineer",
        photo: PHOTOS.stiliyan,
        experience: "5+ jaar",
        education: ["MSc Data Science, Nederland"],
        bio: "Stiliyan is verantwoordelijk voor alles rond data. Hij ontwerpt databases en datapipelines, bouwt AI- en LLM-features, en zet ruwe cijfers om in analytics en dashboards die échte beslissingen sturen.",
        skills: ["Databases & SQL", "AI & LLM's", "Data-analytics", "Python", "Datapipelines"],
      },
    ],
  },
  process: {
    eyebrow: "Hoe we werken",
    title: "Een bewezen pad van idee tot launch.",
    subtitle:
      "Vijf gerichte fases, vaste scope en wekelijkse demo's — je weet altijd waar je project staat, wat volgt en wat het kost.",
    steps: [
      {
        title: "Discovery",
        meta: "Gratis · 30 min",
        description:
          "We duiken in je business, doelen en gebruikers om te definiëren hoe succes eruitziet — en of wij de juiste partner zijn.",
      },
      {
        title: "Strategie & voorstel",
        meta: "Binnen 48 uur",
        description:
          "Scope, features, architectuur en tech stack uitgewerkt in een vast voorstel met duidelijke timeline en prijs.",
      },
      {
        title: "UX & design",
        meta: "Interactief prototype",
        description:
          "Wireframes, user flows en een high-fidelity design in jouw merk — samen aangescherpt voordat er een regel code wordt geschreven.",
      },
      {
        title: "Engineering",
        meta: "Wekelijkse demo's",
        description:
          "Agile sprints met moderne, schaalbare technologie, geautomatiseerd testen en elke week een werkende demo van echte voortgang.",
      },
      {
        title: "Launch & groei",
        meta: "Doorlopende support",
        description:
          "Security checks, performance tuning en een soepele go-live — daarna monitoring, SEO en nieuwe features terwijl je groeit.",
      },
    ],
    guarantees: ["Vaste prijs, geen verrassingen", "Wekelijkse demo's", "Jij bezit de code & IP", "Support na launch"],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Vragen, beantwoord.",
    items: [
      {
        q: "Wat kost een project?",
        a: "Dat hangt af van de scope. Een professionele bedrijfswebsite start typisch rond €500, webshops vanaf €1.200, en maatwerksoftware of AI-automatisering wordt geprijsd na een kort discovery-gesprek. Je krijgt altijd een vast voorstel voordat we starten.",
      },
      {
        q: "Hoe lang duurt het?",
        a: "Een kleine website kan in 1–2 weken klaar zijn. E-commerce en boekingsplatforms duren meestal 3–6 weken, en maatwerksoftware wordt gepland in mijlpalen met elke week een werkende demo.",
      },
      {
        q: "Is er een maandelijks bedrag?",
        a: "Alleen voor wat je echt nodig hebt: hosting, domein en optioneel onderhoud. We adviseren de meest kosteneffectieve setup — voor veel kleine sites kan hosting zelfs gratis zijn.",
      },
      {
        q: "Kunnen jullie AI toevoegen aan onze bestaande systemen?",
        a: "Ja. We integreren AI in de tools die je al gebruikt — CMS'en, CRM's, spreadsheets, interne platforms — om content te genereren, documenten te verwerken, automatisch te publiceren of klanten te beantwoorden.",
      },
      {
        q: "Werken jullie met internationale klanten?",
        a: "De meeste van onze klanten zitten buiten Bulgarije — in het VK, Nederland en Turkije. We werken remote in het Engels en Bulgaars en passen ons aan jouw tijdzone aan.",
      },
      {
        q: "Wat gebeurt er na de launch?",
        a: "We blijven erbij. We bieden onderhoud, security-updates, performance monitoring en nieuwe features, plus documentatie en training voor je team.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Laten we samen iets groots bouwen.",
    subtitle:
      "Vertel ons over je project. We reageren binnen 24 uur met de volgende stappen — zonder verplichtingen.",
    directTitle: "Liever direct praten?",
    responseNote: "We antwoorden binnen 24 uur, maandag tot en met vrijdag.",
    form: {
      name: "Naam",
      namePlaceholder: "Je naam",
      email: "E-mail",
      emailPlaceholder: "jij@bedrijf.com",
      service: "Wat heb je nodig?",
      services: [
        { value: "website", label: "Website" },
        { value: "ecommerce", label: "E-commerce" },
        { value: "software", label: "Maatwerksoftware" },
        { value: "ai", label: "AI-automatisering" },
        { value: "brand", label: "Merk & marketing" },
        { value: "other", label: "Iets anders" },
      ],
      budget: "Budget (optioneel)",
      budgetPlaceholder: "bijv. €2.000–5.000",
      message: "Projectdetails",
      messagePlaceholder: "Wat bouw je en wat moet het bereiken?",
      submit: "Bericht sturen",
      sending: "Verzenden…",
      success: "Bedankt! Je bericht is onderweg — we nemen binnen 24 uur contact op.",
      error: "Er ging iets mis. Probeer het opnieuw of mail ons direct.",
    },
  },
  footer: {
    tagline: "Websites, maatwerksoftware en AI-automatisering voor ambitieuze bedrijven.",
    founded: "Opgericht in 2024 · Sofia, Bulgarije",
    rights: "Alle rechten voorbehouden.",
    language: "Taal",
  },
};
