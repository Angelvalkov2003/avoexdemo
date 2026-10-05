import Image from "next/image";
import type { Dictionary } from "../i18n/dictionaries";
import { GraduationCap } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Team({ t }: { t: Dictionary }) {
  return (
    <section id="team" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <SectionHeading eyebrow={t.team.eyebrow} title={t.team.title} subtitle={t.team.subtitle} />
          <Reveal>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
              {t.why.items.map((w) => (
                <div key={w.title} className="bg-paper p-6">
                  <h3 className="font-semibold text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{w.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.team.members.map((m, i) => (
            <Reveal key={m.photo} delay={i * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper">
                <div className="relative aspect-[4/4.2] overflow-hidden bg-[#e9e8e2]">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top grayscale-[35%] transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                    {m.experience} {t.team.experienceLabel}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-ink">{m.name}</h3>
                  <p className="mt-1 text-sm font-medium text-peri-strong">{m.role}</p>

                  <ul className="mt-5 space-y-1.5">
                    {m.education.map((e) => (
                      <li key={e} className="flex items-start gap-2 text-sm text-ink/75">
                        <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink/40" />
                        {e}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-sm leading-relaxed text-ink/60 text-pretty">{m.bio}</p>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                    {m.skills.map((s) => (
                      <span key={s} className="rounded-full bg-white px-3 py-1 text-xs text-ink/70 ring-1 ring-line">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
