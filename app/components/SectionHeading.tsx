import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <Reveal className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p
        className={`mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-peri" : "text-peri-strong"
        }`}
      >
        <span className="h-px w-6 bg-current" />
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl font-medium leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed text-pretty ${
            dark ? "text-white/60" : "text-ink/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
