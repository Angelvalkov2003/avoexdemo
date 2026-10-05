import type { Dictionary } from "../i18n/dictionaries";
import { Check, ServiceIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services({ t }: { t: Dictionary }) {
  return (
    <section id="services" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {t.services.items.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-peri hover:shadow-[0_24px_60px_-24px_rgba(107,123,255,0.35)] sm:p-10">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-peri transition-colors group-hover:bg-peri-strong group-hover:text-white">
                    <ServiceIcon id={s.id} className="h-7 w-7" />
                  </span>
                  <span className="font-display text-sm text-ink/25">0{i + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-medium tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink/60">{s.description}</p>
                <ul className="mt-8 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink/80">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-peri-strong" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
