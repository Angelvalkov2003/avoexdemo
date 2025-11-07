import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LoadingScreen from "./components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avoex - Website Design & Marketing Agency | Get More Clients",
  description:
    "Professional website design, marketing agency services, digital advertising, and web development. We help businesses attract more clients through custom websites, marketing campaigns, and automation solutions.",
  keywords: [
    "Avoex",
    "website design",
    "websites",
    "marketing",
    "marketing agency",
    "реклама",
    "маркетинг агенция",
    "уебсайти",
    "изработка на уебсайт",
    "повече клиенти",
    "web design",
    "digital marketing",
    "social media ads",
    "SEO",
    "e-commerce",
    "business automation",
    "custom websites",
    "web development",
  ],
  authors: [{ name: "Avoex" }],
  creator: "Avoex",
  publisher: "Avoex",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/photo1.png", sizes: "32x32", type: "image/png" },
      { url: "/photo1.png", sizes: "192x192", type: "image/png" },
      { url: "/photo1.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/photo1.png",
    shortcut: "/photo1.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "Avoex - Website Design, Marketing Agency & Digital Solutions | Get More Clients",
    description:
      "Professional website design, marketing agency services, digital advertising, and web development. We help businesses attract more clients through custom websites, marketing campaigns, and automation solutions.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Avoex - Website Design and Marketing Agency",
      },
    ],
    siteName: "Avoex",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avoex - Website Design, Marketing Agency & Digital Solutions",
    description:
      "Professional website design, marketing agency services, digital advertising, and web development. Get more clients with our expert services.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XLW40HKPCD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XLW40HKPCD');
    `}
        </Script>

        <Script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/983abe5f4f4ae8da2d9ee5e4/script.js"
          strategy="afterInteractive"
        />

        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Avoex",
            url: "https://avoex.vercel.app",
            logo: "https://avoex.vercel.app/logo.png",
            sameAs: [
              "https://www.instagram.com/avoex",
              "https://www.linkedin.com/company/avoex",
            ],
          })}
        </Script>

        <meta name="theme-color" content="#6b4eff" />
        {/* Favicon declarations for Google Search Results */}
        <link rel="icon" href="/photo1.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/photo1.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/photo1.png" type="image/png" sizes="512x512" />
        <link rel="shortcut icon" href="/photo1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/photo1.png" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingScreen>{children}</LoadingScreen>
      </body>
    </html>
  );
}
