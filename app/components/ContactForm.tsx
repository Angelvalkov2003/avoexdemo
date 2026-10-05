"use client";

import { useState } from "react";
import type { Dictionary, Locale } from "../i18n/dictionaries";
import { ArrowRight } from "./icons";

const EMPTY = { name: "", email: "", serviceType: "", budget: "", description: "" };

const field =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors focus:border-peri focus:bg-white/[0.07]";
const label = "mb-2 block text-sm font-medium text-white/70";

export default function ContactForm({
  form,
  locale,
}: {
  form: Dictionary["contact"]["form"];
  locale: Locale;
}) {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (key: keyof typeof EMPTY) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValues({ ...values, [key]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setValues(EMPTY);
      setStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            {form.name}
          </label>
          <input
            id="name"
            className={field}
            value={values.name}
            onChange={set("name")}
            placeholder={form.namePlaceholder}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            {form.email}
          </label>
          <input
            id="email"
            type="email"
            required
            className={field}
            value={values.email}
            onChange={set("email")}
            placeholder={form.emailPlaceholder}
            autoComplete="email"
          />
        </div>
      </div>

      <fieldset>
        <legend className={label}>{form.service}</legend>
        <div className="flex flex-wrap gap-2">
          {form.services.map((s) => {
            const active = values.serviceType === s.value;
            return (
              <label
                key={s.value}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-peri ${
                  active
                    ? "border-peri bg-peri text-ink"
                    : "border-white/15 text-white/75 hover:border-white/40"
                }`}
              >
                <input
                  type="radio"
                  name="serviceType"
                  value={s.value}
                  required
                  checked={active}
                  onChange={() => setValues({ ...values, serviceType: s.value })}
                  className="sr-only"
                />
                {s.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="budget" className={label}>
          {form.budget}
        </label>
        <input
          id="budget"
          className={field}
          value={values.budget}
          onChange={set("budget")}
          placeholder={form.budgetPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="description" className={label}>
          {form.message}
        </label>
        <textarea
          id="description"
          required
          rows={5}
          className={`${field} resize-none`}
          value={values.description}
          onChange={set("description")}
          placeholder={form.messagePlaceholder}
        />
      </div>

      {status === "success" && (
        <p role="status" className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
          {form.success}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">
          {form.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition-colors hover:bg-peri disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? form.sending : form.submit}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
