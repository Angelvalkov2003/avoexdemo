import Link from "next/link";
import type { Dictionary } from "../i18n/dictionaries";
import { CONTACT } from "./contactLinks";
import { Facebook, LinkedIn, LogoMark, Mail, WhatsApp } from "./icons";

export default function Footer({ t }: { t: Dictionary }) {
  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#team", label: t.nav.team },
    { href: "#process", label: t.nav.process },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.contact.eyebrow },
  ];
  const socials = [
    { href: `mailto:${CONTACT.email}`, label: "Email", Icon: Mail },
    { href: CONTACT.whatsapp, label: "WhatsApp", Icon: WhatsApp },
    { href: CONTACT.linkedin, label: "LinkedIn", Icon: LinkedIn },
    { href: CONTACT.facebook, label: "Facebook", Icon: Facebook },
  ];

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9 text-white" />
              <span className="font-display text-xl font-semibold">avoex</span>
            </div>
            <p className="mt-5 max-w-sm leading-relaxed text-white/55">{t.footer.tagline}</p>
            <p className="mt-3 text-sm text-white/35">{t.footer.founded}</p>
          </div>

          <nav className="grid grid-cols-2 gap-3 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/60 transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <div>
            <div className="flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-peri hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/45">
              {t.footer.language}:
              <Link href="/" hrefLang="en" className={t.locale === "en" ? "font-semibold text-white" : "hover:text-white"}>
                English
              </Link>
              <span>/</span>
              <Link href="/bg" hrefLang="bg" className={t.locale === "bg" ? "font-semibold text-white" : "hover:text-white"}>
                Български
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-sm text-white/35">
          © {new Date().getFullYear()} Avoex. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
