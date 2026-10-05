import type { Dictionary } from "../i18n/dictionaries";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Why({ t }: { t: Dictionary }) {
  return (
    <section className="border-t border-line bg-paper pb-24 pt-20 sm:pb-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} />
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {t.why.items.map((w, i) => (
              <div key={w.title} className="bg-white p-7">
                <span className="font-display text-sm text-peri-strong">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{w.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
