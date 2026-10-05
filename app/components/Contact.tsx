import type { Dictionary } from "../i18n/dictionaries";
import { CONTACT } from "./contactLinks";
import ContactForm from "./ContactForm";
import { ArrowUpRight, Facebook, LinkedIn, Mail, WhatsApp } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact({ t }: { t: Dictionary }) {
  const channels = [
    { href: `mailto:${CONTACT.email}`, label: CONTACT.email, Icon: Mail },
    { href: CONTACT.whatsapp, label: `WhatsApp · ${CONTACT.phoneDisplay}`, Icon: WhatsApp },
    { href: CONTACT.linkedin, label: "LinkedIn", Icon: LinkedIn },
    { href: CONTACT.facebook, label: "Facebook", Icon: Facebook },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-peri-strong/20 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:px-8">
        <div className="flex flex-col">
          <SectionHeading dark eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />

          <Reveal className="mt-12">
            <p className="text-sm font-semibold text-white">{t.contact.directTitle}</p>
            <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
              {channels.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-4 text-white/75 transition-colors hover:text-white"
                  >
                    <Icon className="h-5 w-5 text-peri" />
                    <span className="flex-1 break-all">{label}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-40 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-white/40">{t.contact.responseNote}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-10">
            <ContactForm form={t.contact.form} locale={t.locale} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
