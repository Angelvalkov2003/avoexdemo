"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../i18n/dictionaries";
import { LOCALES, LOCALE_META, localePath } from "../i18n/dictionaries";
import { LogoMark } from "./icons";

export default function Navigation({
  nav,
  locale,
}: {
  nav: Dictionary["nav"];
  locale: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const home = localePath(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    if (!langOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!langRef.current?.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLangOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [langOpen]);

  const links = [
    { href: "#services", label: nav.services },
    { href: "#work", label: nav.work },
    { href: "#team", label: nav.team },
    { href: "#process", label: nav.process },
    { href: "#faq", label: nav.faq },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-ink/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href={home} className="flex items-center gap-2.5 text-white" aria-label="Avoex">
          <LogoMark className="h-8 w-8 text-white" />
          <span className="font-display text-lg font-semibold tracking-tight">avoex</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangOpen((value) => !value)}
              aria-label={nav.switchAria}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold tracking-wider text-white/80 transition-colors hover:border-peri hover:text-white"
            >
              {LOCALE_META[locale].code}
            </button>
            {langOpen && (
              <div
                role="listbox"
                aria-label={nav.switchAria}
                className="absolute right-0 mt-2 min-w-[10.5rem] overflow-hidden rounded-2xl border border-white/10 bg-ink/95 py-1 shadow-2xl backdrop-blur-xl"
              >
                {LOCALES.map((code) => {
                  const meta = LOCALE_META[code];
                  const active = code === locale;
                  return (
                    <Link
                      key={code}
                      href={meta.path}
                      hrefLang={code}
                      role="option"
                      aria-selected={active}
                      onClick={() => setLangOpen(false)}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        active ? "bg-white/10 font-semibold text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {meta.nativeLabel}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-peri sm:inline-block"
          >
            {nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? nav.close : nav.menu}
            aria-expanded={open}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          >
            <span
              className={`absolute h-px w-4 bg-current transition-transform ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-current transition-transform ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[calc(100vh-4.5rem)]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 pb-8 pt-2 sm:px-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 font-display text-2xl text-white"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-4 flex flex-wrap gap-2">
            {LOCALES.map((code) => {
              const meta = LOCALE_META[code];
              const active = code === locale;
              return (
                <Link
                  key={code}
                  href={meta.path}
                  hrefLang={code}
                  onClick={() => setOpen(false)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wider transition-colors ${
                    active
                      ? "border-white bg-white text-ink"
                      : "border-white/15 text-white/70 hover:border-peri hover:text-white"
                  }`}
                >
                  {meta.code}
                </Link>
              );
            })}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full bg-white px-6 py-4 text-center font-semibold text-ink"
          >
            {nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
