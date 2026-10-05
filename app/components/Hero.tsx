import type { Dictionary } from "../i18n/dictionaries";
import { ArrowRight } from "./icons";

const CLIENTS = [
  "Brush Past",
  "Askemo",
  "12punto",
  "Paperok",
  "Nova Art Space",
  "Arthouse 94",
  "Riolit",
  "One Over Fifty",
  "PureSpace",
  "Mood",
  "BG Green Yard",
];

export default function Hero({ t }: { t: Dictionary }) {
  return (
    <section id="home" className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="animate-float-slow pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-peri-strong/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-sky/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-6 sm:pt-44 lg:px-8 lg:pb-28">
        <div className="animate-fade-up" style={{ animationDelay: "0s" }}>
          <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-peri opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-peri" />
            </span>
            {t.hero.eyebrow}
          </p>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.05s" }}>
          <h1 className="max-w-5xl font-display text-[clamp(1.5rem,8.2vw,2.4rem)] font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {t.hero.titleStart}{" "}
            <span className="text-gradient">{t.hero.titleHighlight}</span>{" "}
            {t.hero.titleEnd}
          </h1>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.12s" }}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 text-pretty sm:text-xl">
            {t.hero.subtitle}
          </p>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.18s" }}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition-colors hover:bg-peri"
            >
              {t.hero.primary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.25s" }}>
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {t.hero.stats.map((s) => (
              <div key={s.label} className="bg-ink/90 px-6 py-7">
                <dt className="text-sm text-white/50">{s.label}</dt>
                <dd className="mt-2 font-display text-3xl font-medium sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/40">
          {t.clients.label}
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
          <div className="animate-marquee flex w-max gap-14 pr-14">
            {[...CLIENTS, ...CLIENTS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                aria-hidden={i >= CLIENTS.length}
                className="whitespace-nowrap font-display text-xl font-medium text-white/35"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
