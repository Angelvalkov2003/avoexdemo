import { Geist, Unbounded } from "next/font/google";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import type { Dictionary, Locale } from "../i18n/dictionaries";
import { CONTACT } from "./contactLinks";
import "../globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const SITE_URL = "https://avoex.vercel.app";

export const viewport: Viewport = { themeColor: "#0a0d1c" };

export function buildMetadata(t: Dictionary): Metadata {
  const path = t.locale === "en" ? "/" : "/bg";
  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    keywords:
      t.locale === "en"
        ? ["Avoex", "web design", "web development", "custom software", "AI automation", "e-commerce", "software studio", "SaaS development", "UI/UX"]
        : ["Avoex", "изработка на уебсайт", "уеб дизайн", "софтуер по поръчка", "AI автоматизации", "онлайн магазин", "софтуерна компания", "UI/UX"],
    authors: [{ name: "Avoex" }],
    creator: "Avoex",
    publisher: "Avoex",
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    icons: { icon: "/logo.png", apple: "/logo.png", shortcut: "/logo.png" },
    alternates: {
      canonical: path,
      languages: { en: "/", bg: "/bg", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: path,
      locale: t.meta.ogLocale,
      alternateLocale: t.locale === "en" ? ["bg_BG"] : ["en_US"],
      title: t.meta.title,
      description: t.meta.description,
      siteName: "Avoex",
      images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "Avoex" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/logo.png"],
    },
  };
}

function structuredData(t: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Avoex",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: t.meta.description,
    foundingDate: "2024",
    email: CONTACT.email,
    address: { "@type": "PostalAddress", addressLocality: "Sofia", addressCountry: "BG" },
    areaServed: ["GB", "NL", "TR", "BG", "Worldwide"],
    knowsAbout: ["Web Development", "Web Design", "E-commerce", "Custom Software", "AI Automation", "UI/UX Design", "DevOps", "Cybersecurity"],
    founder: { "@type": "Person", name: "Angel Valkov", jobTitle: "CEO" },
    employee: t.team.members.map((m) => ({ "@type": "Person", name: m.name, jobTitle: m.role })),
    sameAs: [CONTACT.linkedin, CONTACT.facebook],
  };
}

export default function RootShell({
  locale,
  t,
  children,
}: {
  locale: Locale;
  t: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale} className={`${geist.variable} ${unbounded.variable}`}>
      <body className="antialiased">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(t)) }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XLW40HKPCD" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XLW40HKPCD');`}
        </Script>
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/983abe5f4f4ae8da2d9ee5e4/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
