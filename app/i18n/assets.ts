export interface ProjectLogo {
  src: string;
  background: string;
  width: number;
  height: number;
}

export const SITE_URLS = {
  brushPast: "https://brush-past.vercel.app/",
  askemo: "https://askemo.nl/",
  punto: "https://12punto.com.tr/",
  tdr: "https://tdrbg.net/",
  axiom: "https://github.com/Milenchev/axiom-design-system",
  paperok: "https://www.paperok.bg/",
  nova: "https://novaartspace.bg/",
  arthouse: "https://www.arthouse94.com/",
  oneOverFifty: "https://oneoverfifty.vercel.app/",
  mood: "https://mood-shisha-bar.vercel.app/bg",
  greenYard: "https://bg-green-yard.vercel.app/en",
  riolit: "https://www.riolit.bg/",
  pureSpace: "https://purespace.website/",
};

export const LOGOS: Record<string, ProjectLogo> = {
  brushPast: { src: "/logos/brushpast-trimmed.png", background: "#cba678", width: 251, height: 102 },
  askemo: { src: "/logos/askemo.webp", background: "#ffffff", width: 600, height: 315 },
  punto: { src: "/logos/12punto-trimmed.png", background: "#272727", width: 400, height: 112 },
  tdr: { src: "/logos/tdr-trimmed.png", background: "#ffffff", width: 325, height: 300 },
  axiom: { src: "/logos/axiom-trimmed.png", background: "#ffffff", width: 186, height: 152 },
};

export const PHOTOS = {
  angel: "/people/angel.png",
  milenchev: "/people/GeorgiMilenchev.png",
  kerkelov: "/people/Georgikerkelov.jpg",
  stiliyan: "/people/stiliyanStefanov.png",
};
