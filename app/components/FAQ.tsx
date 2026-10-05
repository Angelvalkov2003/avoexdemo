"use client";

import { useState } from "react";
import type { Dictionary } from "../i18n/dictionaries";
import { Plus } from "./icons";

export default function FAQ({ faq }: { faq: Dictionary["faq"] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-peri-strong">
            <span className="h-px w-6 bg-current" />
            {faq.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {faq.title}
          </h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg font-semibold text-ink">{item.q}</span>
                    <span
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all ${
                        isOpen ? "rotate-45 border-ink bg-ink text-white" : "border-line text-ink"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden pr-14 leading-relaxed text-ink/65">
                    <span className="block pb-6">{item.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
