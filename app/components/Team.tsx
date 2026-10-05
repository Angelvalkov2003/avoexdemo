import Image from "next/image";
import type { Dictionary } from "../i18n/dictionaries";
import { GraduationCap } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Team({ t }: { t: Dictionary }) {
  return (
    <section id="team" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.team.eyebrow} title={t.team.title} subtitle={t.team.subtitle} />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {t.team.members.map((m, i) => (
            <Reveal key={m.photo} delay={(i % 2) * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-6 transition-all duration-300 hover:border-peri hover:bg-white hover:shadow-[0_24px_60px_-30px_rgba(107,123,255,0.4)] sm:p-8">
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:h-24 sm:w-24">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="96px"
                      className="object-cover object-[50%_25%]"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">{m.name}</h3>
                    <p className="mt-1 text-sm font-medium text-peri-strong">{m.role}</p>
                    <span className="mt-2 inline-block rounded-full bg-ink px-2.5 py-0.5 text-xs font-semibold text-white">
                      {m.experience} {t.team.experienceLabel}
                    </span>
                  </div>
                </div>

                <ul className="mt-6 space-y-1.5">
                  {m.education.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-sm font-medium text-ink/80">
                      <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink/40" />
                      {e}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-sm leading-relaxed text-ink/60 text-pretty">{m.bio}</p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                  {m.skills.map((s) => (
                    <span key={s} className="rounded-full bg-white px-3 py-1 text-xs text-ink/70 ring-1 ring-line">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
