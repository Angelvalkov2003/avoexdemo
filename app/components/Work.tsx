import type { Dictionary } from "../i18n/dictionaries";
import { ArrowUpRight, Check, GitHub, MapPin } from "./icons";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Work({ t }: { t: Dictionary }) {
  return (
    <section id="work" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-peri-strong/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading dark eyebrow={t.work.eyebrow} title={t.work.title} subtitle={t.work.subtitle} />

        <div className="mt-16 space-y-6">
          {t.work.featured.map((p, i) => (
            <Reveal key={p.id}>
              <article className="group grid gap-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-10">
                <div
                  className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl ring-1 ring-white/10 lg:aspect-[4/3] lg:self-start ${
                    i % 2 ? "lg:order-2" : ""
                  }`}
                  style={{ background: p.logo.background }}
                >
                  <Image
                    src={p.logo.src}
                    alt={`${p.name} logo`}
                    width={p.logo.width}
                    height={p.logo.height}
                    unoptimized
                    style={{ width: Math.round((Math.min(112, p.logo.height) * p.logo.width) / p.logo.height) }}
                    className="h-auto max-w-[65%] object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/50">
                    <span className="font-display text-white/30">0{i + 1}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {p.location}
                    </span>
                    <span>{p.category}</span>
                  </div>

                  <h3 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">{p.name}</h3>
                  {p.status && (
                    <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                      {p.status}
                    </span>
                  )}
                  <p className="mt-5 text-lg leading-relaxed text-white/80 text-pretty">{p.summary}</p>
                  <p className="mt-4 leading-relaxed text-white/55 text-pretty">{p.description}</p>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-white/75">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-peri" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-auto inline-flex w-fit items-center gap-2 pt-8 font-semibold text-white"
                  >
                    {p.linkKind === "code" && <GitHub className="h-5 w-5" />}
                    <span className="border-b border-white/30 pb-0.5 transition-colors group-hover:border-peri group-hover:text-peri">
                      {p.linkKind === "code" ? t.work.viewCode : t.work.visitSite}
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span className="sr-only">({p.urlLabel})</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MoreProjects({ t }: { t: Dictionary }) {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.work.eyebrow} title={t.work.moreTitle} subtitle={t.work.moreSubtitle} />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.work.more.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 0.05} className="h-full">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_20px_50px_-30px_rgba(10,13,28,0.5)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-peri-strong">{p.category}</span>
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-paper text-ink transition-colors group-hover:bg-ink group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-ink">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{p.description}</p>
                <span className="mt-auto pt-6 text-xs text-ink/40">
                  {p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "")}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
