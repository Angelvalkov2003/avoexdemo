import type { Dictionary } from "../i18n/dictionaries";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process({ t }: { t: Dictionary }) {
  return (
    <section id="process" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading dark eyebrow={t.process.eyebrow} title={t.process.title} subtitle={t.process.subtitle} />

        <ol className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {t.process.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07} className="h-full">
              <li className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-peri/50 hover:bg-white/[0.05]">
                <span className="font-display text-5xl font-medium text-gradient">0{i + 1}</span>
                <h3 className="mt-8 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{s.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
