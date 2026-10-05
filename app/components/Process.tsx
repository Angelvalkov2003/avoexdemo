import type { Dictionary } from "../i18n/dictionaries";
import { Check } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  className: "h-6 w-6",
};

const STEP_ICONS = [
  // Discovery — conversation
  <svg key="0" {...iconProps}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
    <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
  </svg>,
  // Strategy — blueprint
  <svg key="1" {...iconProps}>
    <rect x="4" y="3" width="16" height="18" rx="2.5" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>,
  // Design — layers
  <svg key="2" {...iconProps}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </svg>,
  // Engineering — code
  <svg key="3" {...iconProps}>
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
  </svg>,
  // Launch — rocket
  <svg key="4" {...iconProps}>
    <path d="M5 15c-1.5 1.3-2 4-2 6 2 0 4.7-.5 6-2" />
    <path d="M9 18 6 15c1-4 4.5-10 12-12 0 7.5-6 11-9 12Z" />
    <circle cx="14.5" cy="9.5" r="1.5" />
  </svg>,
];

export default function Process({ t }: { t: Dictionary }) {
  const steps = t.process.steps;

  return (
    <section id="process" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -right-40 top-20 h-[460px] w-[460px] rounded-full bg-peri-strong/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading dark eyebrow={t.process.eyebrow} title={t.process.title} subtitle={t.process.subtitle} />

        <div className="relative mt-16 lg:mt-20">
          {/* Connecting track: vertical on mobile, horizontal on desktop */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-7 top-6 w-px bg-gradient-to-b from-peri via-sky/60 to-white/10 lg:hidden"
          />
          <span
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-peri via-sky/60 to-white/10 lg:block"
          />

          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal
                  delay={i * 0.08}
                  className="group relative grid grid-cols-[56px_1fr] gap-5 lg:flex lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-ink-2 text-peri shadow-[0_0_0_6px_var(--color-ink)] transition-colors duration-300 group-hover:border-peri group-hover:bg-peri group-hover:text-ink">
                    {STEP_ICONS[i]}
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white font-display text-[10px] font-semibold text-ink">
                      {i + 1}
                    </span>
                  </div>

                  <div className="lg:mt-8 lg:flex lg:flex-1 lg:flex-col lg:items-center">
                    <span className="inline-block rounded-full border border-peri/30 bg-peri/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-peri">
                      {s.meta}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-medium tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55 text-pretty">{s.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {t.process.guarantees.map((g) => (
              <li key={g} className="flex items-center gap-3 bg-ink/95 px-6 py-5 text-sm font-medium text-white/85">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-peri/15 text-peri">
                  <Check className="h-4 w-4" />
                </span>
                {g}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
