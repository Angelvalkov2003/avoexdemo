import { LOGOS, PHOTOS, SITE_URLS } from "./assets";
import type { Dictionary } from "./types";

export const es: Dictionary = {
  locale: "es",
  meta: {
    title: "Avoex — Sitios web, software a medida y automatizaciones con IA",
    description:
      "Avoex es un estudio de software senior fundado en 2024. Diseñamos y construimos sitios web de alto rendimiento, e-commerce, software a medida y automatizaciones con IA para empresas en el Reino Unido, Países Bajos, Turquía y Bulgaria.",
    ogLocale: "es_ES",
  },
  nav: {
    services: "Servicios",
    work: "Proyectos",
    team: "Equipo",
    process: "Proceso",
    faq: "FAQ",
    cta: "Empezar un proyecto",
    switchLabel: "EN",
    switchHref: "/",
    switchAria: "Elegir idioma",
    menu: "Abrir menú",
    close: "Cerrar menú",
  },
  hero: {
    eyebrow: "Estudio de software · Desde 2024",
    titleStart: "Sitios web, software y",
    titleHighlight: "automatizaciones con IA",
    titleEnd: "que hacen crecer tu negocio.",
    subtitle:
      "Creamos productos digitales para empresas en Londres, Ámsterdam, Estambul y Sofía — desde sitios web nuevos hasta plataformas complejas y pipelines de IA que funcionan solos.",
    primary: "Reserva una consulta gratis",
    secondary: "Ver nuestro trabajo",
    stats: [
      { value: "2024", label: "Fundada" },
      { value: "20+", label: "Proyectos entregados" },
      { value: "4", label: "Países atendidos" },
      { value: "24 h", label: "Tiempo de respuesta" },
    ],
  },
  clients: { label: "Equipos de toda Europa confían en nosotros" },
  services: {
    eyebrow: "Qué hacemos",
    title: "Todo lo que tu negocio necesita para ganar online.",
    subtitle:
      "Un solo equipo, desde el primer boceto hasta producción y más allá. Sin intermediarios ni agencias detrás de la agencia.",
    items: [
      {
        id: "web",
        title: "Sitios web y e-commerce",
        description:
          "Sitios web rápidos y listos para SEO, tiendas online y plataformas de reservas diseñados para convertir visitantes en clientes.",
        bullets: [
          "Diseño a medida — sin plantillas genéricas",
          "Tiendas online, pagos e inventario",
          "Sistemas de reservas y menús digitales",
          "SEO, analítica y Core Web Vitals",
        ],
      },
      {
        id: "software",
        title: "Software a medida",
        description:
          "Plataformas internas, dashboards, CRM y productos SaaS diseñados para datos reales y crecimiento real.",
        bullets: [
          "Sistemas de gestión y CRM",
          "Dashboards, reporting y control de datos",
          "APIs e integraciones con terceros",
          "Arquitectura cloud, DevOps y seguridad",
        ],
      },
      {
        id: "ai",
        title: "Automatizaciones con IA",
        description:
          "Agentes de IA y flujos de trabajo que quitan el trabajo repetitivo a tu equipo — y siguen funcionando 24/7.",
        bullets: [
          "Generación de contenido y artículos",
          "Pipelines de publicación automática",
          "Generación de imágenes con IA",
          "Procesamiento de documentos y asistentes",
        ],
      },
      {
        id: "brand",
        title: "Marca y crecimiento",
        description:
          "Identidad de marca, UI/UX y estrategia de marketing que hacen que tu negocio se vea tan bien como funciona.",
        bullets: [
          "Identidad de marca y sistemas visuales",
          "UI/UX y design systems",
          "Redes sociales y anuncios de pago",
          "Estrategia de marketing y crecimiento",
        ],
      },
    ],
  },
  work: {
    eyebrow: "Trabajo seleccionado",
    title: "Productos de los que estamos orgullosos.",
    subtitle:
      "Desde una empresa social de Londres hasta una de las mayores redacciones de Turquía — esto es parte de lo que hemos construido.",
    visitSite: "Visitar sitio web",
    viewCode: "Ver en GitHub",
    featured: [
      {
        id: "12punto",
        name: "12punto",
        location: "Estambul, Turquía",
        category: "Automatizaciones con IA · Medios",
        summary:
          "Uno de los editores de noticias más antiguos y grandes de Turquía, con una redacción que nunca duerme.",
        description:
          "Diseñamos y operamos una familia de automatizaciones con IA para su equipo editorial: pipelines que generan artículos a partir de fuentes entrantes, crean imágenes a juego y publican todo automáticamente — con revisión humana exactamente donde importa.",
        highlights: [
          "Artículos de noticias generados con IA a escala",
          "Publicación automática en el sitio y canales",
          "Generación de imágenes con IA para cada historia",
          "Revisión editorial y controles de calidad",
        ],
        tags: ["LLMs", "Automatización", "Generación de imágenes", "Publicación"],
        url: SITE_URLS.punto,
        urlLabel: "12punto.com.tr",
        linkKind: "site",
        logo: LOGOS.punto,
      },
      {
        id: "brush-past",
        name: "Brush Past",
        location: "Londres, Reino Unido",
        category: "Plataforma · Marca · E-commerce",
        summary:
          "Una empresa social de Londres que ayuda a personas afectadas por la falta de hogar y la adicción a convertir la creatividad en arte, productos y negocios propios.",
        description:
          "Diseñamos el complejo sistema interno que gestiona toda la organización — creadores, talleres, productos, pedidos e impacto social — en un solo lugar. En paralelo estamos creando su identidad de marca, sitio web y tienda online, ahora en su fase final.",
        highlights: [
          "Sistema de operaciones y gestión de extremo a extremo",
          "Seguimiento de creadores, talleres e impacto",
          "Identidad de marca construida desde cero",
          "Sitio y tienda para cajas de regalo, arte wearable e impresiones",
        ],
        tags: ["Next.js", "Sistema de gestión", "Identidad de marca", "E-commerce"],
        url: SITE_URLS.brushPast,
        urlLabel: "brush-past.vercel.app",
        linkKind: "site",
        logo: LOGOS.brushPast,
        status: "Sitio web en fase final",
      },
      {
        id: "askemo",
        name: "Askemo",
        location: "Países Bajos",
        category: "HR SaaS · Plataforma de datos",
        summary:
          "Una de las mayores plataformas de feedback de empleados y RR. HH. de los Países Bajos, usada por organizaciones para medir y mejorar cómo se sienten sus equipos en el trabajo.",
        description:
          "Somos un socio de ingeniería clave detrás de gran parte del producto Askemo — desde el motor de encuestas y la distribución multicanal hasta dashboards en tiempo real, acceso por roles y los controles de datos que mantienen la información sensible de RR. HH. segura y conforme al RGPD.",
        highlights: [
          "Motor de encuestas: engagement, onboarding, exit y eNPS",
          "Distribución por email, SMS, WhatsApp y Teams",
          "Dashboards en tiempo real por equipo y tema",
          "Permisos granulares y gobernanza de datos",
        ],
        tags: ["SaaS", "Datos y analítica", "Seguridad", "Insights con IA"],
        url: SITE_URLS.askemo,
        urlLabel: "askemo.nl",
        linkKind: "site",
        logo: LOGOS.askemo,
      },
      {
        id: "tdr",
        name: "Telephone Domain Register",
        location: "Bulgaria",
        category: "Telecom · Ciberseguridad · Automatización",
        summary:
          "Un proyecto a gran escala de telecom y ciberseguridad que construye un ecosistema de internet completo cuyas aplicaciones funcionan sobre la red telefónica — la base del Safe Internet de TDR.",
        description:
          "Trabajamos en una red compleja y en la ciberseguridad de la propia red telefónica: construimos el sistema de internet completo que permite que las aplicaciones funcionen a través de la red telefónica, reforzamos su seguridad y creamos sistemas de automatización y aplicaciones web para su Safe Internet. En fase prelanzamiento, el proyecto ya ha sido valorado en más de 4 millones de euros.",
        highlights: [
          "Arquitectura de red compleja sobre la red telefónica",
          "Ciberseguridad para infraestructura telecom",
          "Sistema de internet completo con apps vía la red telefónica",
          "Sistemas de automatización y apps web para Safe Internet",
        ],
        tags: ["Telecom", "Networking", "Ciberseguridad", "Automatización", "Apps web"],
        url: SITE_URLS.tdr,
        urlLabel: "tdrbg.net",
        linkKind: "site",
        logo: LOGOS.tdr,
        status: "Prelanzamiento · valorado en más de 4 M€",
      },
      {
        id: "axiom",
        name: "Axiom Design System",
        location: "Código abierto",
        category: "Design system · Librería React",
        summary:
          "Un design system React moderno, accesible y totalmente tipado sobre Mantine v9 — librería de componentes, sitio de documentación y guía de estilo viva en uno.",
        description:
          "Axiom explora la arquitectura, las herramientas y las prácticas de ingeniería detrás de design systems de producción: un sistema centralizado de tokens, accesibilidad WCAG 2.2 AA, un sitio de documentación Next.js + Fumadocs con embeds vivos de Storybook, cuatro apps demo completas y un servidor MCP para que los asistentes de IA entiendan el sistema.",
        highlights: [
          "30 componentes originales + 70+ wrappers temáticos de Mantine",
          "300+ stories de Storybook y 200+ páginas de documentación",
          "4 apps demo: shell, campaigns, settings, analytics",
          "Servidor MCP para desarrollo asistido por IA",
        ],
        tags: ["React 19", "TypeScript", "Mantine v9", "Storybook 10", "Turborepo"],
        url: SITE_URLS.axiom,
        urlLabel: "github.com/Milenchev/axiom-design-system",
        linkKind: "code",
        logo: LOGOS.axiom,
      },
    ],
    moreTitle: "Más proyectos",
    moreSubtitle: "Sitios web, tiendas y marcas que hemos lanzado para negocios en crecimiento.",
    more: [
      {
        name: "Paperok",
        url: SITE_URLS.paperok,
        category: "E-commerce · Marca · Marketing",
        description:
          "Tienda online sobre una plantilla a medida, con imagen de marca completa, configuración de e-commerce y estrategia de marketing.",
      },
      {
        name: "Nova Art Space",
        url: SITE_URLS.nova,
        category: "Galería de arte · Sofía",
        description:
          "Sitio web para una galería en el centro de Sofía — exposiciones, artistas y eventos, con una identidad visual refinada.",
      },
      {
        name: "Arthouse 94",
        url: SITE_URLS.arthouse,
        category: "Inmobiliaria",
        description: "Sitio de intermediación con listados de propiedades, presencia de marca y generación de leads.",
      },
      {
        name: "One Over Fifty",
        url: SITE_URLS.oneOverFifty,
        category: "Videografía",
        description: "Sitio portfolio cinematográfico para un estudio de videografía.",
      },
      {
        name: "Mood Shisha Bar",
        url: SITE_URLS.mood,
        category: "Hostelería · Varna",
        description: "Sitio web y menú digital para un lounge bar en Varna.",
      },
      {
        name: "BG Green Yard",
        url: SITE_URLS.greenYard,
        category: "Paisajismo",
        description: "Sitio bilingüe y captación de leads para un negocio de paisajismo.",
      },
      {
        name: "Riolit",
        url: SITE_URLS.riolit,
        category: "Construcción",
        description: "Sitio corporativo y portfolio de proyectos para una empresa de construcción.",
      },
      {
        name: "PureSpace",
        url: SITE_URLS.pureSpace,
        category: "Servicios de limpieza",
        description: "Sitio de servicios con ofertas claras y solicitudes de presupuesto para una agencia de limpieza.",
      },
    ],
  },
  why: {
    eyebrow: "Por qué Avoex",
    title: "Equipo senior pequeño. Ingeniería de gran empresa.",
    items: [
      {
        title: "Habla con quien construye",
        description:
          "Sin account managers de por medio. Hablas directamente con los ingenieros que diseñan y programan tu producto.",
      },
      {
        title: "Senior por defecto",
        description:
          "Cada proyecto lo llevan personas con años de experiencia en empresas de producto — no juniors aprendiendo con tu presupuesto.",
      },
      {
        title: "Alcance y precio claros",
        description:
          "Propuestas fijas, plazos honestos y demos semanales, para que siempre sepas qué está hecho y qué viene después.",
      },
      {
        title: "Contigo después del lanzamiento",
        description:
          "Hosting, mantenimiento, actualizaciones de seguridad y nuevas funciones — seguimos como tu socio tecnológico a largo plazo.",
      },
    ],
  },
  team: {
    eyebrow: "El equipo",
    title: "Las personas detrás de tu producto.",
    subtitle:
      "Un equipo senior que cubre todo el ciclo de vida del producto — estrategia, arquitectura, diseño, frontend, backend, datos e IA, QA, seguridad y cloud.",
    experienceLabel: "experiencia",
    members: [
      {
        name: "Angel Valkov",
        role: "CEO y Lead Engineer",
        photo: PHOTOS.angel,
        experience: "8+ años",
        education: ["BSc Software Engineering", "MSc Cybersecurity"],
        bio: "Angel ha recorrido todo el camino — de developer a arquitecto — en muchas empresas y productos. Es la primera persona con la que hablas: lidera las conversaciones con clientes, el desarrollo backend, la arquitectura de sistemas y DevOps.",
        skills: ["Estrategia con clientes", "Backend", "Arquitectura", "DevOps", "Seguridad"],
      },
      {
        name: "Georgi Milenchev",
        role: "Frontend Lead y UI/UX",
        photo: PHOTOS.milenchev,
        experience: "5+ años",
        education: ["BSc Computer Science"],
        bio: "Georgi convierte productos complejos en interfaces que la gente disfruta usar. Es dueño del frontend y la UI/UX — desde wireframes y design systems hasta React pixel-perfect y accesible. Autor del design system Axiom.",
        skills: ["React y Next.js", "UI/UX", "Design systems", "Accesibilidad"],
      },
      {
        name: "Georgi Kerkelov",
        role: "Software Engineer · QA, seguridad y cloud",
        photo: PHOTOS.kerkelov,
        experience: "9+ años",
        education: ["BSc Computer & Software Engineering"],
        bio: "Georgi se asegura de que todo lo que lanzamos sea fiable y seguro. Impulsa QA y automatización de tests, revisiones de ciberseguridad e infraestructura cloud, para que cada release sea estable el día del lanzamiento y a escala.",
        skills: ["QA y automatización de tests", "Ciberseguridad", "Cloud", "CI/CD"],
      },
      {
        name: "Stiliyan Stefanov",
        role: "Data & AI Engineer",
        photo: PHOTOS.stiliyan,
        experience: "5+ años",
        education: ["MSc Data Science, Países Bajos"],
        bio: "Stiliyan es dueño de todo lo relacionado con datos. Diseña bases de datos y pipelines, construye funciones con IA y LLM, y convierte números en bruto en analítica y dashboards que impulsan decisiones reales.",
        skills: ["Bases de datos y SQL", "IA y LLMs", "Analítica de datos", "Python", "Data pipelines"],
      },
    ],
  },
  process: {
    eyebrow: "Cómo trabajamos",
    title: "Un camino probado de la idea al lanzamiento.",
    subtitle:
      "Cinco etapas enfocadas, alcance fijo y demos semanales — siempre sabes dónde está tu proyecto, qué sigue y cuánto cuesta.",
    steps: [
      {
        title: "Discovery",
        meta: "Gratis · 30 min",
        description:
          "Profundizamos en tu negocio, objetivos y usuarios para definir cómo se ve el éxito — y si somos el socio adecuado.",
      },
      {
        title: "Estrategia y propuesta",
        meta: "En 48 horas",
        description:
          "Alcance, funciones, arquitectura y stack tecnológico en una propuesta fija con timeline y precio claros.",
      },
      {
        title: "UX y diseño",
        meta: "Prototipo interactivo",
        description:
          "Wireframes, flujos de usuario y un diseño de alta fidelidad en tu marca — refinados contigo antes de escribir una línea de código.",
      },
      {
        title: "Ingeniería",
        meta: "Demos semanales",
        description:
          "Sprints ágiles con tecnología moderna y escalable, tests automatizados y cada semana una demo funcional del progreso real.",
      },
      {
        title: "Lanzamiento y crecimiento",
        meta: "Soporte continuo",
        description:
          "Revisiones de seguridad, optimización de rendimiento y un go-live fluido — después monitoring, SEO y nuevas funciones a medida que creces.",
      },
    ],
    guarantees: ["Precio fijo, sin sorpresas", "Demos semanales", "Tú eres dueño del código y la IP", "Soporte tras el lanzamiento"],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Preguntas, respondidas.",
    items: [
      {
        q: "¿Cuánto cuesta un proyecto?",
        a: "Depende del alcance. Un sitio web profesional de negocio suele empezar alrededor de €500, las tiendas online desde €1.200, y el software a medida o las automatizaciones con IA se presupuestan tras una breve llamada de discovery. Siempre recibes una propuesta fija antes de empezar.",
      },
      {
        q: "¿Cuánto tiempo tarda?",
        a: "Un sitio pequeño puede estar listo en 1–2 semanas. El e-commerce y las plataformas de reservas suelen tardar 3–6 semanas, y el software a medida se planifica en hitos con una demo funcional cada semana.",
      },
      {
        q: "¿Hay una cuota mensual?",
        a: "Solo por lo que realmente necesitas: hosting, dominio y mantenimiento opcional. Te recomendaremos la configuración más rentable — para muchos sitios pequeños el hosting puede ser incluso gratis.",
      },
      {
        q: "¿Podéis añadir IA a nuestros sistemas existentes?",
        a: "Sí. Integramos IA en las herramientas que ya usáis — CMS, CRM, hojas de cálculo, plataformas internas — para generar contenido, procesar documentos, publicar automáticamente o atender a clientes.",
      },
      {
        q: "¿Trabajáis con clientes internacionales?",
        a: "La mayoría de nuestros clientes están fuera de Bulgaria — en el Reino Unido, Países Bajos y Turquía. Trabajamos en remoto en inglés y búlgaro y nos adaptamos a tu zona horaria.",
      },
      {
        q: "¿Qué pasa después del lanzamiento?",
        a: "Nos quedamos. Ofrecemos mantenimiento, actualizaciones de seguridad, monitorización del rendimiento y nuevas funciones, además de documentación y formación para tu equipo.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Construyamos algo genial juntos.",
    subtitle:
      "Cuéntanos tu proyecto. Te responderemos en 24 horas con los siguientes pasos — sin compromiso.",
    directTitle: "¿Prefieres hablar directamente?",
    responseNote: "Respondemos en 24 horas, de lunes a viernes.",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@empresa.com",
      service: "¿Qué necesitas?",
      services: [
        { value: "website", label: "Sitio web" },
        { value: "ecommerce", label: "E-commerce" },
        { value: "software", label: "Software a medida" },
        { value: "ai", label: "Automatización con IA" },
        { value: "brand", label: "Marca y marketing" },
        { value: "other", label: "Otra cosa" },
      ],
      budget: "Presupuesto (opcional)",
      budgetPlaceholder: "p. ej. €2.000–5.000",
      message: "Detalles del proyecto",
      messagePlaceholder: "¿Qué estás construyendo y qué debe lograr?",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      success: "¡Gracias! Tu mensaje está en camino — te contactaremos en 24 horas.",
      error: "Algo salió mal. Inténtalo de nuevo o escríbenos directamente.",
    },
  },
  footer: {
    tagline: "Sitios web, software a medida y automatizaciones con IA para negocios ambiciosos.",
    founded: "Fundada en 2024 · Sofía, Bulgaria",
    rights: "Todos los derechos reservados.",
    language: "Idioma",
  },
};
