export type { Locale } from "./locales";
export { LOCALES, LOCALE_META, localePath, alternateLanguages } from "./locales";
export type { ProjectLogo } from "./assets";
export { SITE_URLS, LOGOS, PHOTOS } from "./assets";
export type { Dictionary, FeaturedProject, ServiceId } from "./types";
import type { Locale } from "./locales";
import { SITE_URLS, LOGOS, PHOTOS } from "./assets";
import type { Dictionary } from "./types";
import { nl } from "./nl";
import { de } from "./de";
import { es } from "./es";

export const en: Dictionary = {
  locale: "en",
  meta: {
    title: "Avoex — Websites, Custom Software & AI Automations",
    description:
      "Avoex is a senior software studio founded in 2024. We design and build high-performing websites, e-commerce, custom software and AI automations for businesses in the UK, the Netherlands, Turkey and Bulgaria.",
    ogLocale: "en_US",
  },
  nav: {
    services: "Services",
    work: "Work",
    team: "Team",
    process: "Process",
    faq: "FAQ",
    cta: "Start a project",
    switchLabel: "BG",
    switchHref: "/bg",
    switchAria: "Choose language",
    menu: "Open menu",
    close: "Close menu",
  },
  hero: {
    eyebrow: "Software studio · Since 2024",
    titleStart: "Websites, software &",
    titleHighlight: "AI automations",
    titleEnd: "that grow your business.",
    subtitle:
      "We build digital products for companies in London, Amsterdam, Istanbul and Sofia — from brand-new websites to complex platforms and AI pipelines that run on their own.",
    primary: "Book a free consultation",
    secondary: "See our work",
    stats: [
      { value: "2024", label: "Founded" },
      { value: "20+", label: "Projects delivered" },
      { value: "4", label: "Countries served" },
      { value: "24h", label: "Response time" },
    ],
  },
  clients: { label: "Trusted by teams across Europe" },
  services: {
    eyebrow: "What we do",
    title: "Everything your business needs to win online.",
    subtitle:
      "One team, from the first sketch to production and beyond. No hand-offs, no agencies behind the agency.",
    items: [
      {
        id: "web",
        title: "Websites & E-commerce",
        description:
          "Fast, SEO-ready websites, online stores and booking platforms designed to turn visitors into paying clients.",
        bullets: [
          "Custom design — no generic templates",
          "Online stores, payments & inventory",
          "Booking systems & digital menus",
          "SEO, analytics & Core Web Vitals",
        ],
      },
      {
        id: "software",
        title: "Custom Software",
        description:
          "Internal platforms, dashboards, CRMs and SaaS products engineered to handle real data and real growth.",
        bullets: [
          "Management systems & CRMs",
          "Dashboards, reporting & data control",
          "APIs & third-party integrations",
          "Cloud architecture, DevOps & security",
        ],
      },
      {
        id: "ai",
        title: "AI Automations",
        description:
          "AI agents and workflows that take repetitive work off your team's plate — and keep running 24/7.",
        bullets: [
          "Content & article generation",
          "Automated publishing pipelines",
          "AI image generation",
          "Document processing & assistants",
        ],
      },
      {
        id: "brand",
        title: "Brand & Growth",
        description:
          "Brand identity, UI/UX and marketing strategy that make your business look as good as it works.",
        bullets: [
          "Brand identity & visual systems",
          "UI/UX & design systems",
          "Social media & paid ads",
          "Marketing & growth strategy",
        ],
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "Products we're proud of.",
    subtitle:
      "From a London social enterprise to one of Turkey's biggest newsrooms — here is some of what we've built.",
    visitSite: "Visit website",
    viewCode: "View on GitHub",
    featured: [
      {
        id: "12punto",
        name: "12punto",
        location: "Istanbul, Turkey",
        category: "AI automations · Media",
        summary:
          "One of the oldest and largest news publishers in Turkey, with a newsroom that never sleeps.",
        description:
          "We design and run a family of AI automations for their editorial team: pipelines that generate news articles from incoming sources, create matching images, and publish everything automatically — with human review exactly where it matters.",
        highlights: [
          "AI-generated news articles at scale",
          "Automatic publishing to the website & channels",
          "AI image generation for every story",
          "Editorial review & quality guardrails",
        ],
        tags: ["LLMs", "Automation", "Image generation", "Publishing"],
        url: SITE_URLS.punto,
        urlLabel: "12punto.com.tr",
        linkKind: "site",
        logo: LOGOS.punto,
      },
      {
        id: "brush-past",
        name: "Brush Past",
        location: "London, UK",
        category: "Platform · Brand · E-commerce",
        summary:
          "A London-based social enterprise helping people affected by homelessness and addiction turn creativity into art, products and businesses they own.",
        description:
          "We engineered the complex internal system that tracks and manages the whole organisation — creators, workshops, products, orders and social impact — in one place. Alongside it we're crafting their brand identity, website and e-commerce store, which is now in its final stage.",
        highlights: [
          "End-to-end operations & management system",
          "Creator, workshop and impact tracking",
          "Brand identity built from the ground up",
          "Website & store for gift boxes, wearable art and prints",
        ],
        tags: ["Next.js", "Management system", "Brand identity", "E-commerce"],
        url: SITE_URLS.brushPast,
        urlLabel: "brush-past.vercel.app",
        linkKind: "site",
        logo: LOGOS.brushPast,
        status: "Website in final stage",
      },
      {
        id: "askemo",
        name: "Askemo",
        location: "Netherlands",
        category: "HR SaaS · Data platform",
        summary:
          "One of the largest employee-feedback and HR platforms in the Netherlands, used by organisations to measure and improve how their people feel at work.",
        description:
          "We're a core engineering partner behind a large part of the Askemo product — from the survey engine and multi-channel distribution to real-time dashboards, role-based access and the data controls that keep sensitive HR information secure and GDPR-compliant.",
        highlights: [
          "Survey engine: engagement, onboarding, exit & eNPS",
          "Distribution via email, SMS, WhatsApp & Teams",
          "Real-time dashboards by team and theme",
          "Granular permissions & data governance",
        ],
        tags: ["SaaS", "Data & analytics", "Security", "AI insights"],
        url: SITE_URLS.askemo,
        urlLabel: "askemo.nl",
        linkKind: "site",
        logo: LOGOS.askemo,
      },
      {
        id: "tdr",
        name: "Telephone Domain Register",
        location: "Bulgaria",
        category: "Telecom · Cybersecurity · Automation",
        summary:
          "A large-scale telecom and cybersecurity project building a full internet ecosystem whose applications run over the telephone network — the foundation of TDR's Safe Internet.",
        description:
          "We work on a complex network and on the cybersecurity of the telephone network itself: building the entire internet system that lets applications run through the telephone network, strengthening its security, and creating automation systems and web apps for their Safe Internet. At pre-release stage, the project has already been valued at over €4 million.",
        highlights: [
          "Complex network architecture over the telephone network",
          "Cybersecurity for telecom infrastructure",
          "Full internet system with apps running via the phone network",
          "Automation systems & web apps for Safe Internet",
        ],
        tags: ["Telecom", "Networking", "Cybersecurity", "Automation", "Web apps"],
        url: SITE_URLS.tdr,
        urlLabel: "tdrbg.net",
        linkKind: "site",
        logo: LOGOS.tdr,
        status: "Pre-release · valued at €4M+",
      },
      {
        id: "axiom",
        name: "Axiom Design System",
        location: "Open source",
        category: "Design system · React library",
        summary:
          "A modern, accessible, fully-typed React design system built on Mantine v9 — component library, documentation site and living style guide in one.",
        description:
          "Axiom explores the architecture, tooling and engineering practices behind production design systems: a centralised token system, WCAG 2.2 AA accessibility, a Next.js + Fumadocs documentation site with live Storybook embeds, four full demo apps and an MCP server so AI assistants understand the system.",
        highlights: [
          "30 original components + 70+ themed Mantine wrappers",
          "300+ Storybook stories & 200+ documentation pages",
          "4 demo applications: shell, campaigns, settings, analytics",
          "MCP server for AI-assisted development",
        ],
        tags: ["React 19", "TypeScript", "Mantine v9", "Storybook 10", "Turborepo"],
        url: SITE_URLS.axiom,
        urlLabel: "github.com/Milenchev/axiom-design-system",
        linkKind: "code",
        logo: LOGOS.axiom,
      },
    ],
    moreTitle: "More projects",
    moreSubtitle: "Websites, stores and brands we've launched for growing businesses.",
    more: [
      {
        name: "Paperok",
        url: SITE_URLS.paperok,
        category: "E-commerce · Brand · Marketing",
        description:
          "Online store on a bespoke template, with full brand image, e-commerce setup and marketing strategy.",
      },
      {
        name: "Nova Art Space",
        url: SITE_URLS.nova,
        category: "Art gallery · Sofia",
        description:
          "Website for a central Sofia gallery — exhibitions, artists and events, with a refined visual identity.",
      },
      {
        name: "Arthouse 94",
        url: SITE_URLS.arthouse,
        category: "Real estate",
        description:
          "Brokerage website with property listings, brand presence and lead generation.",
      },
      {
        name: "One Over Fifty",
        url: SITE_URLS.oneOverFifty,
        category: "Videography",
        description: "Cinematic portfolio site for a videography studio.",
      },
      {
        name: "Mood Shisha Bar",
        url: SITE_URLS.mood,
        category: "Hospitality · Varna",
        description: "Website and digital menu for a lounge bar in Varna.",
      },
      {
        name: "BG Green Yard",
        url: SITE_URLS.greenYard,
        category: "Landscaping",
        description: "Bilingual website and lead capture for a landscaping business.",
      },
      {
        name: "Riolit",
        url: SITE_URLS.riolit,
        category: "Construction",
        description: "Corporate website and project portfolio for a construction company.",
      },
      {
        name: "PureSpace",
        url: SITE_URLS.pureSpace,
        category: "Cleaning services",
        description: "Service website with clear offers and quote requests for a cleaning agency.",
      },
    ],
  },
  why: {
    eyebrow: "Why Avoex",
    title: "Small senior team. Big-company engineering.",
    items: [
      {
        title: "Talk to the builders",
        description:
          "No account managers in between. You speak directly with the engineers designing and coding your product.",
      },
      {
        title: "Senior by default",
        description:
          "Every project is handled by people with years of experience at product companies — not juniors learning on your budget.",
      },
      {
        title: "Clear scope & pricing",
        description:
          "Fixed proposals, honest timelines and weekly demos, so you always know what's done and what's next.",
      },
      {
        title: "With you after launch",
        description:
          "Hosting, maintenance, security updates and new features — we stay on as your long-term tech partner.",
      },
    ],
  },
  team: {
    eyebrow: "The team",
    title: "The people behind your product.",
    subtitle:
      "A senior team that covers the full product lifecycle — strategy, architecture, design, frontend, backend, data & AI, QA, security and cloud.",
    experienceLabel: "experience",
    members: [
      {
        name: "Angel Valkov",
        role: "CEO & Lead Engineer",
        photo: PHOTOS.angel,
        experience: "8+ years",
        education: ["BSc Software Engineering", "MSc Cybersecurity"],
        bio: "Angel has walked the whole path — from developer to architect — across many companies and products. He's the first person you'll talk to: he leads client conversations, backend development, system architecture and DevOps.",
        skills: ["Client strategy", "Backend", "Architecture", "DevOps", "Security"],
      },
      {
        name: "Georgi Milenchev",
        role: "Frontend Lead & UI/UX",
        photo: PHOTOS.milenchev,
        experience: "5+ years",
        education: ["BSc Computer Science"],
        bio: "Georgi turns complex products into interfaces people enjoy using. He owns frontend engineering and UI/UX — from wireframes and design systems to pixel-perfect, accessible React. Author of the Axiom design system.",
        skills: ["React & Next.js", "UI/UX", "Design systems", "Accessibility"],
      },
      {
        name: "Georgi Kerkelov",
        role: "Software Engineer · QA, Security & Cloud",
        photo: PHOTOS.kerkelov,
        experience: "9+ years",
        education: ["BSc Computer & Software Engineering"],
        bio: "Georgi makes sure everything we ship is reliable and secure. He drives QA and test automation, cybersecurity reviews and cloud infrastructure, so every release is stable on launch day and at scale.",
        skills: ["QA & test automation", "Cybersecurity", "Cloud", "CI/CD"],
      },
      {
        name: "Stiliyan Stefanov",
        role: "Data & AI Engineer",
        photo: PHOTOS.stiliyan,
        experience: "5+ years",
        education: ["MSc Data Science, the Netherlands"],
        bio: "Stiliyan owns everything data. He designs databases and data pipelines, builds AI and LLM-powered features, and turns raw numbers into analytics and dashboards that drive real decisions.",
        skills: ["Databases & SQL", "AI & LLMs", "Data analytics", "Python", "Data pipelines"],
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "A proven path from idea to launch.",
    subtitle:
      "Five focused stages, fixed scope and weekly demos — you always know where your project stands, what's next and what it costs.",
    steps: [
      {
        title: "Discovery",
        meta: "Free · 30 min",
        description:
          "We dig into your business, goals and users to define what success looks like — and whether we're the right partner.",
      },
      {
        title: "Strategy & proposal",
        meta: "Within 48 hours",
        description:
          "Scope, features, architecture and tech stack mapped out in a fixed proposal with a clear timeline and price.",
      },
      {
        title: "UX & design",
        meta: "Interactive prototype",
        description:
          "Wireframes, user flows and a high-fidelity design in your brand — refined with you before a line of code is written.",
      },
      {
        title: "Engineering",
        meta: "Weekly demos",
        description:
          "Agile sprints with modern, scalable technology, automated testing and a working demo of real progress every week.",
      },
      {
        title: "Launch & growth",
        meta: "Ongoing support",
        description:
          "Security checks, performance tuning and a smooth go-live — then monitoring, SEO and new features as you grow.",
      },
    ],
    guarantees: ["Fixed price, no surprises", "Weekly demos", "You own the code & IP", "Support after launch"],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered.",
    items: [
      {
        q: "How much does a project cost?",
        a: "It depends on scope. A professional business website typically starts around €500, online stores from €1,200, and custom software or AI automations are priced after a short discovery call. You always get a fixed proposal before we start.",
      },
      {
        q: "How long does it take?",
        a: "A small website can be ready in 1–2 weeks. E-commerce and booking platforms usually take 3–6 weeks, and custom software is planned in milestones with a working demo every week.",
      },
      {
        q: "Is there a monthly fee?",
        a: "Only for what you actually need: hosting, domain and optional maintenance. We'll recommend the most cost-effective setup — for many small sites hosting can even be free.",
      },
      {
        q: "Can you add AI to our existing systems?",
        a: "Yes. We integrate AI into the tools you already use — CMSs, CRMs, spreadsheets, internal platforms — to generate content, process documents, publish automatically or answer customers.",
      },
      {
        q: "Do you work with international clients?",
        a: "Most of our clients are outside Bulgaria — in the UK, the Netherlands and Turkey. We work remotely in English and Bulgarian and adapt to your time zone.",
      },
      {
        q: "What happens after launch?",
        a: "We stay on. We offer maintenance, security updates, performance monitoring and new features, plus documentation and training for your team.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something great together.",
    subtitle:
      "Tell us about your project. We'll get back to you within 24 hours with next steps — no commitment.",
    directTitle: "Prefer to talk directly?",
    responseNote: "We reply within 24 hours, Monday to Friday.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      service: "What do you need?",
      services: [
        { value: "website", label: "Website" },
        { value: "ecommerce", label: "E-commerce" },
        { value: "software", label: "Custom software" },
        { value: "ai", label: "AI automation" },
        { value: "brand", label: "Brand & marketing" },
        { value: "other", label: "Something else" },
      ],
      budget: "Budget (optional)",
      budgetPlaceholder: "e.g. €2,000–5,000",
      message: "Project details",
      messagePlaceholder: "What are you building and what should it achieve?",
      submit: "Send message",
      sending: "Sending…",
      success: "Thank you! Your message is on its way — we'll be in touch within 24 hours.",
      error: "Something went wrong. Please try again or email us directly.",
    },
  },
  footer: {
    tagline: "Websites, custom software and AI automations for ambitious businesses.",
    founded: "Founded in 2024 · Sofia, Bulgaria",
    rights: "All rights reserved.",
    language: "Language",
  },
};

export const bg: Dictionary = {
  locale: "bg",
  meta: {
    title: "Avoex — Уебсайтове, софтуер по поръчка и AI автоматизации",
    description:
      "Avoex е софтуерно студио, основано през 2024 г. Създаваме бързи уебсайтове, онлайн магазини, софтуер по поръчка и AI автоматизации за бизнеси във Великобритания, Нидерландия, Турция и България.",
    ogLocale: "bg_BG",
  },
  nav: {
    services: "Услуги",
    work: "Проекти",
    team: "Екип",
    process: "Процес",
    faq: "Въпроси",
    cta: "Започни проект",
    switchLabel: "EN",
    switchHref: "/",
    switchAria: "Избери език",
    menu: "Отвори менюто",
    close: "Затвори менюто",
  },
  hero: {
    eyebrow: "Софтуерно студио · От 2024",
    titleStart: "Уебсайтове, софтуер и",
    titleHighlight: "AI автоматизации",
    titleEnd: "които развиват бизнеса ви.",
    subtitle:
      "Създаваме дигитални продукти за компании в Лондон, Амстердам, Истанбул и София — от нови уебсайтове до сложни платформи и AI процеси, които работят сами.",
    primary: "Безплатна консултация",
    secondary: "Вижте проектите ни",
    stats: [
      { value: "2024", label: "Основана" },
      { value: "20+", label: "Завършени проекта" },
      { value: "4", label: "Държави с клиенти" },
      { value: "24 ч.", label: "Време за отговор" },
    ],
  },
  clients: { label: "Доверяват ни се екипи от цяла Европа" },
  services: {
    eyebrow: "Какво правим",
    title: "Всичко, от което бизнесът ви има нужда онлайн.",
    subtitle:
      "Един екип — от първата скица до продукцията и след нея. Без посредници и без подизпълнители.",
    items: [
      {
        id: "web",
        title: "Уебсайтове и онлайн магазини",
        description:
          "Бързи, SEO оптимизирани сайтове, онлайн магазини и системи за резервации, които превръщат посетителите в клиенти.",
        bullets: [
          "Уникален дизайн — без шаблони",
          "Онлайн магазини, плащания и наличности",
          "Резервации и дигитални менюта",
          "SEO, анализи и скорост на зареждане",
        ],
      },
      {
        id: "software",
        title: "Софтуер по поръчка",
        description:
          "Вътрешни платформи, табла, CRM системи и SaaS продукти, създадени за реални данни и реален растеж.",
        bullets: [
          "Системи за управление и CRM",
          "Табла, отчети и контрол на данните",
          "API и интеграции с външни системи",
          "Облачна архитектура, DevOps и сигурност",
        ],
      },
      {
        id: "ai",
        title: "AI автоматизации",
        description:
          "AI агенти и процеси, които поемат повтарящата се работа на екипа ви и работят 24/7.",
        bullets: [
          "Генериране на съдържание и статии",
          "Автоматично публикуване",
          "Генериране на изображения с AI",
          "Обработка на документи и асистенти",
        ],
      },
      {
        id: "brand",
        title: "Бранд и растеж",
        description:
          "Бранд идентичност, UI/UX и маркетинг стратегия, с които бизнесът ви изглежда толкова добре, колкото работи.",
        bullets: [
          "Бранд идентичност и визуална система",
          "UI/UX и дизайн системи",
          "Социални мрежи и платена реклама",
          "Маркетинг и стратегия за растеж",
        ],
      },
    ],
  },
  work: {
    eyebrow: "Избрани проекти",
    title: "Продукти, с които се гордеем.",
    subtitle:
      "От социално предприятие в Лондон до една от най-големите медии в Турция — ето част от това, което сме изградили.",
    visitSite: "Към сайта",
    viewCode: "Вижте в GitHub",
    featured: [
      {
        id: "12punto",
        name: "12punto",
        location: "Истанбул, Турция",
        category: "AI автоматизации · Медия",
        summary:
          "Едно от най-старите и най-големи новинарски издания в Турция, с редакция, която никога не спира.",
        description:
          "Проектираме и поддържаме редица AI автоматизации за редакцията им: процеси, които генерират новинарски статии от входящи източници, създават подходящи изображения и публикуват всичко автоматично — с човешка проверка точно там, където е нужна.",
        highlights: [
          "Генериране на новини с AI в голям мащаб",
          "Автоматично публикуване в сайта и каналите",
          "AI изображения за всяка статия",
          "Редакторски контрол и защита на качеството",
        ],
        tags: ["LLM", "Автоматизация", "AI изображения", "Публикуване"],
        url: SITE_URLS.punto,
        urlLabel: "12punto.com.tr",
        linkKind: "site",
        logo: LOGOS.punto,
      },
      {
        id: "brush-past",
        name: "Brush Past",
        location: "Лондон, Великобритания",
        category: "Платформа · Бранд · E-commerce",
        summary:
          "Социално предприятие от Лондон, което помага на хора, засегнати от бездомност и зависимости, да се интегрират и да превърнат творчеството си в изкуство, продукти и собствен бизнес.",
        description:
          "Изградихме сложната вътрешна система, с която се следи и управлява цялата организация — творци, работилници, продукти, поръчки и социален ефект — на едно място. Паралелно разработваме бранд идентичността им, уебсайта и онлайн магазина, който е в довършителен етап.",
        highlights: [
          "Цялостна система за управление на дейността",
          "Следене на творци, работилници и ефект",
          "Бранд идентичност, изградена от нулата",
          "Сайт и магазин за подаръчни кутии, арт облекло и принтове",
        ],
        tags: ["Next.js", "Система за управление", "Бранд идентичност", "E-commerce"],
        url: SITE_URLS.brushPast,
        urlLabel: "brush-past.vercel.app",
        linkKind: "site",
        logo: LOGOS.brushPast,
        status: "Сайтът е в довършителен етап",
      },
      {
        id: "askemo",
        name: "Askemo",
        location: "Нидерландия",
        category: "HR SaaS · Платформа за данни",
        summary:
          "Една от най-големите HR платформи за обратна връзка от служители в Нидерландия — организациите я използват, за да измерват и подобряват удовлетвореността на хората си.",
        description:
          "Ние сме основен технологичен партньор зад голяма част от софтуера на Askemo — от системата за анкети и разпространението по различни канали до таблата в реално време, ролевия достъп и контрола на данните, който пази чувствителната HR информация сигурна и в съответствие с GDPR.",
        highlights: [
          "Анкети: удовлетвореност, онбординг, напускане и eNPS",
          "Изпращане по имейл, SMS, WhatsApp и Teams",
          "Табла в реално време по екипи и теми",
          "Детайлни права за достъп и контрол на данните",
        ],
        tags: ["SaaS", "Данни и анализи", "Сигурност", "AI препоръки"],
        url: SITE_URLS.askemo,
        urlLabel: "askemo.nl",
        linkKind: "site",
        logo: LOGOS.askemo,
      },
      {
        id: "tdr",
        name: "Telephone Domain Register",
        location: "България",
        category: "Телеком · Киберсигурност · Автоматизация",
        summary:
          "Мащабен телеком и киберсигурност проект, който изгражда цяла интернет екосистема с приложения, работещи през телефонната мрежа — основата на Safe Internet на TDR.",
        description:
          "Работим по сложна мрежа и киберсигурност на телефонната мрежа: изграждаме цялата интернет система, с която приложенията да минават през телефонната мрежа, допринасяме за нейната сигурност и създаваме различни системи за автоматизация и уеб приложения за техния Safe Internet. Още на пред-релийз ниво проектът е оценен на над 4 милиона евро.",
        highlights: [
          "Сложна мрежова архитектура през телефонната мрежа",
          "Киберсигурност на телеком инфраструктурата",
          "Цялостна интернет система с приложения през телефонната мрежа",
          "Системи за автоматизация и уеб приложения за Safe Internet",
        ],
        tags: ["Телеком", "Мрежи", "Киберсигурност", "Автоматизация", "Уеб приложения"],
        url: SITE_URLS.tdr,
        urlLabel: "tdrbg.net",
        linkKind: "site",
        logo: LOGOS.tdr,
        status: "Пред-релийз · оценен на над 4 млн. €",
      },
      {
        id: "axiom",
        name: "Axiom Design System",
        location: "Open source",
        category: "Дизайн система · React библиотека",
        summary:
          "Модерна, достъпна и изцяло типизирана React дизайн система върху Mantine v9 — библиотека с компоненти, документация и жив стилов наръчник в едно.",
        description:
          "Axiom изследва архитектурата, инструментите и инженерните практики зад професионалните дизайн системи: централизирана система от токени, достъпност по WCAG 2.2 AA, документация с Next.js и Fumadocs с живи Storybook примери, четири демо приложения и MCP сървър, с който AI асистентите разбират системата.",
        highlights: [
          "30 собствени компонента + 70+ стилизирани Mantine обвивки",
          "300+ Storybook истории и 200+ страници документация",
          "4 демо приложения: shell, кампании, настройки, анализи",
          "MCP сървър за разработка с AI асистенти",
        ],
        tags: ["React 19", "TypeScript", "Mantine v9", "Storybook 10", "Turborepo"],
        url: SITE_URLS.axiom,
        urlLabel: "github.com/Milenchev/axiom-design-system",
        linkKind: "code",
        logo: LOGOS.axiom,
      },
    ],
    moreTitle: "Още проекти",
    moreSubtitle: "Сайтове, магазини и брандове, които сме създали за развиващи се бизнеси.",
    more: [
      {
        name: "Paperok",
        url: SITE_URLS.paperok,
        category: "Онлайн магазин · Бранд · Маркетинг",
        description:
          "Онлайн магазин с персонален шаблон, цялостен бранд имидж, e-commerce и маркетинг стратегия.",
      },
      {
        name: "Nova Art Space",
        url: SITE_URLS.nova,
        category: "Галерия · София",
        description:
          "Сайт за галерия в центъра на София — изложби, артисти и събития с изчистена визуална идентичност.",
      },
      {
        name: "Arthouse 94",
        url: SITE_URLS.arthouse,
        category: "Недвижими имоти",
        description: "Сайт за брокерска агенция с обяви за имоти, бранд присъствие и запитвания.",
      },
      {
        name: "One Over Fifty",
        url: SITE_URLS.oneOverFifty,
        category: "Видеография",
        description: "Кинематографично портфолио за видео студио.",
      },
      {
        name: "Mood Shisha Bar",
        url: SITE_URLS.mood,
        category: "Заведение · Варна",
        description: "Уебсайт и онлайн меню за лаунж бар във Варна.",
      },
      {
        name: "BG Green Yard",
        url: SITE_URLS.greenYard,
        category: "Озеленяване",
        description: "Двуезичен сайт и запитвания за бизнес за озеленяване.",
      },
      {
        name: "Riolit",
        url: SITE_URLS.riolit,
        category: "Строителство",
        description: "Корпоративен сайт и портфолио от обекти за строителна фирма.",
      },
      {
        name: "PureSpace",
        url: SITE_URLS.pureSpace,
        category: "Почистване",
        description: "Сайт за агенция за почистване с ясни услуги и заявки за оферта.",
      },
    ],
  },
  why: {
    eyebrow: "Защо Avoex",
    title: "Малък опитен екип. Инженерство на голяма компания.",
    items: [
      {
        title: "Говорите с изпълнителите",
        description:
          "Без акаунт мениджъри по средата. Говорите директно с инженерите, които проектират и пишат продукта ви.",
      },
      {
        title: "Само опитни специалисти",
        description:
          "Всеки проект се води от хора с години опит в продуктови компании — не от начинаещи, които се учат с вашия бюджет.",
      },
      {
        title: "Ясен обхват и цена",
        description:
          "Фиксирани оферти, честни срокове и седмични демота — винаги знаете какво е готово и какво предстои.",
      },
      {
        title: "До вас и след старта",
        description:
          "Хостинг, поддръжка, обновления за сигурност и нови функции — оставаме ваш дългосрочен технологичен партньор.",
      },
    ],
  },
  team: {
    eyebrow: "Екипът",
    title: "Хората зад вашия продукт.",
    subtitle:
      "Опитен екип, който покрива целия живот на продукта — стратегия, архитектура, дизайн, frontend, backend, данни и AI, QA, сигурност и облак.",
    experienceLabel: "опит",
    members: [
      {
        name: "Ангел Вълков",
        role: "CEO и водещ инженер",
        photo: PHOTOS.angel,
        experience: "8+ години",
        education: ["Бакалавър, Софтуерно инженерство", "Магистър, Киберсигурност"],
        bio: "Ангел е минал през целия път — от програмист до архитект — в много различни компании и продукти. Той е първият, с когото ще говорите: води разговорите с клиентите, backend разработката, изграждането на архитектурата и DevOps.",
        skills: ["Работа с клиенти", "Backend", "Архитектура", "DevOps", "Сигурност"],
      },
      {
        name: "Георги Миленчев",
        role: "Frontend lead и UI/UX",
        photo: PHOTOS.milenchev,
        experience: "5+ години",
        education: ["Бакалавър, Компютърни науки"],
        bio: "Георги превръща сложните продукти в интерфейси, които хората харесват. Отговаря за frontend разработката и UI/UX — от wireframes и дизайн системи до прецизен и достъпен React. Автор на дизайн системата Axiom.",
        skills: ["React и Next.js", "UI/UX", "Дизайн системи", "Достъпност"],
      },
      {
        name: "Георги Керкелов",
        role: "Софтуерен инженер · QA, сигурност и облак",
        photo: PHOTOS.kerkelov,
        experience: "9+ години",
        education: ["Бакалавър, Компютърно и софтуерно инженерство"],
        bio: "Георги гарантира, че всичко, което пускаме, е надеждно и сигурно. Отговаря за QA и автоматизираните тестове, прегледите по киберсигурност и облачната инфраструктура — за да е всяка версия стабилна още от първия ден.",
        skills: ["QA и автотестове", "Киберсигурност", "Облак", "CI/CD"],
      },
      {
        name: "Стилиян Стефанов",
        role: "Data и AI инженер",
        photo: PHOTOS.stiliyan,
        experience: "5+ години",
        education: ["Магистър, Data Science — Нидерландия"],
        bio: "Стилиян отговаря за всичко, свързано с данни. Проектира бази данни и процеси за обработка на данни, разработва AI и LLM функционалности и превръща суровите числа в анализи и табла, по които се взимат реални решения.",
        skills: ["Бази данни и SQL", "AI и LLM", "Анализ на данни", "Python", "Data pipelines"],
      },
    ],
  },
  process: {
    eyebrow: "Как работим",
    title: "Доказан път от идеята до старта.",
    subtitle:
      "Пет ясни етапа, фиксиран обхват и седмични демота — винаги знаете докъде е проектът, какво следва и колко струва.",
    steps: [
      {
        title: "Откриване",
        meta: "Безплатно · 30 мин",
        description:
          "Вникваме в бизнеса, целите и потребителите ви, за да определим как изглежда успехът — и дали сме правилният партньор.",
      },
      {
        title: "Стратегия и оферта",
        meta: "До 48 часа",
        description:
          "Обхват, функционалности, архитектура и технологии, описани във фиксирана оферта с ясен срок и цена.",
      },
      {
        title: "UX и дизайн",
        meta: "Интерактивен прототип",
        description:
          "Wireframes, потребителски сценарии и детайлен дизайн във вашия бранд — изгладени заедно с вас, преди да напишем и ред код.",
      },
      {
        title: "Разработка",
        meta: "Седмични демота",
        description:
          "Гъвкави спринтове с модерни и мащабируеми технологии, автоматизирани тестове и работещо демо на реалния напредък всяка седмица.",
      },
      {
        title: "Старт и развитие",
        meta: "Постоянна поддръжка",
        description:
          "Проверки за сигурност, оптимизация на скоростта и гладко пускане — след това наблюдение, SEO и нови функции, докато растете.",
      },
    ],
    guarantees: ["Фиксирана цена без изненади", "Седмични демота", "Кодът и правата са ваши", "Поддръжка след старта"],
  },
  faq: {
    eyebrow: "Въпроси",
    title: "Често задавани въпроси.",
    items: [
      {
        q: "Колко струва един проект?",
        a: "Зависи от обхвата. Професионален бизнес сайт обикновено започва от около 500 €, онлайн магазин — от 1 200 €, а софтуерът по поръчка и AI автоматизациите се оценяват след кратък разговор. Винаги получавате фиксирана оферта преди старта.",
      },
      {
        q: "Колко време отнема?",
        a: "Малък сайт може да е готов за 1–2 седмици. Онлайн магазините и системите за резервации обикновено отнемат 3–6 седмици, а софтуерът по поръчка се планира на етапи с работещо демо всяка седмица.",
      },
      {
        q: "Има ли месечна такса?",
        a: "Само за това, от което наистина имате нужда: хостинг, домейн и поддръжка по избор. Препоръчваме най-изгодния вариант — за много малки сайтове хостингът дори е безплатен.",
      },
      {
        q: "Можете ли да добавите AI към системите ни?",
        a: "Да. Интегрираме AI в инструментите, които вече използвате — CMS, CRM, таблици, вътрешни платформи — за генериране на съдържание, обработка на документи, автоматично публикуване или отговори на клиенти.",
      },
      {
        q: "Работите ли с клиенти от чужбина?",
        a: "Повечето ни клиенти са извън България — във Великобритания, Нидерландия и Турция. Работим дистанционно на английски и български и се съобразяваме с вашата часова зона.",
      },
      {
        q: "Какво става след старта?",
        a: "Оставаме с вас. Предлагаме поддръжка, обновления за сигурност, наблюдение на производителността и нови функции, както и документация и обучение за екипа ви.",
      },
    ],
  },
  contact: {
    eyebrow: "Контакт",
    title: "Нека създадем нещо страхотно заедно.",
    subtitle:
      "Разкажете ни за проекта си. Ще се свържем с вас до 24 часа със следващите стъпки — без ангажимент.",
    directTitle: "Предпочитате да говорим директно?",
    responseNote: "Отговаряме до 24 часа, от понеделник до петък.",
    form: {
      name: "Име",
      namePlaceholder: "Вашето име",
      email: "Имейл",
      emailPlaceholder: "you@company.com",
      service: "От какво имате нужда?",
      services: [
        { value: "website", label: "Уебсайт" },
        { value: "ecommerce", label: "Онлайн магазин" },
        { value: "software", label: "Софтуер по поръчка" },
        { value: "ai", label: "AI автоматизация" },
        { value: "brand", label: "Бранд и маркетинг" },
        { value: "other", label: "Друго" },
      ],
      budget: "Бюджет (по избор)",
      budgetPlaceholder: "напр. 2 000–5 000 €",
      message: "Детайли за проекта",
      messagePlaceholder: "Какво създавате и какво трябва да постигне?",
      submit: "Изпрати съобщение",
      sending: "Изпращане…",
      success: "Благодарим ви! Съобщението е изпратено — ще се свържем с вас до 24 часа.",
      error: "Нещо се обърка. Опитайте отново или ни пишете директно на имейл.",
    },
  },
  footer: {
    tagline: "Уебсайтове, софтуер по поръчка и AI автоматизации за амбициозни бизнеси.",
    founded: "Основана през 2024 · София, България",
    rights: "Всички права запазени.",
    language: "Език",
  },
};

export { nl, de, es };

export const dictionaries: Record<Locale, Dictionary> = { en, bg, nl, de, es };
