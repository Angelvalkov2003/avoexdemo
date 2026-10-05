import type { MockKind } from "../i18n/dictionaries";

/* Abstract, brand-coloured UI compositions that hint at what each product does. */

function Frame({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-ink-2 p-5 sm:p-7">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full blur-[90px]"
        style={{ background: accent, opacity: 0.35 }}
      />
      <div className="relative mb-5 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 h-5 flex-1 rounded-md bg-white/5" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

const bar = "rounded-full bg-white/10";

function PlatformMock() {
  return (
    <Frame accent="#f2b48a">
      <div className="grid grid-cols-[72px_1fr] gap-4">
        <div className="space-y-2.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-2.5 ${bar} ${i === 1 ? "!bg-[#f2b48a]/70" : ""}`} />
          ))}
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {["#f2b48a", "#93a2ff", "#7ee0b5"].map((c) => (
              <div key={c} className="rounded-xl bg-white/5 p-3">
                <div className="h-2 w-10 rounded-full bg-white/15" />
                <div className="mt-3 h-4 w-14 rounded-full" style={{ background: c }} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="aspect-[4/5] rounded-xl bg-gradient-to-br from-[#f2b48a]/40 via-white/5 to-[#93a2ff]/30" />
            ))}
          </div>
          <div className="space-y-2">
            <div className={`h-2 w-full ${bar}`} />
            <div className={`h-2 w-4/5 ${bar}`} />
          </div>
        </div>
      </div>
    </Frame>
  );
}

function DashboardMock() {
  const bars = [46, 68, 54, 82, 61, 90, 74, 88];
  return (
    <Frame accent="#5cc8ff">
      <div className="grid grid-cols-3 gap-3">
        {[
          ["eNPS", "+42"],
          ["Response", "87%"],
          ["Teams", "128"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-white/5 p-3">
            <div className="text-[10px] uppercase tracking-wider text-white/40">{k}</div>
            <div className="mt-1 font-display text-lg text-white">{v}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-white/5 p-4">
        <div className="flex h-32 items-end gap-2">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-peri-strong/50 to-sky"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {[80, 64, 72].map((w, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-white/10" />
            <div className={`h-2 ${bar}`} style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    </Frame>
  );
}

function NewsroomMock() {
  return (
    <Frame accent="#ff7a7a">
      <div className="mb-4 flex items-center gap-2 text-[11px] font-medium text-white/60">
        <span className="rounded-full bg-[#ff7a7a]/20 px-2.5 py-1 text-[#ffb0b0]">AI</span>
        <span className="h-px flex-1 bg-white/10" />
        <span>source → article → image → publish</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl bg-white/5 p-3">
            <div
              className="aspect-video rounded-lg"
              style={{
                background:
                  i % 2
                    ? "linear-gradient(135deg, rgba(255,122,122,.45), rgba(147,162,255,.25))"
                    : "linear-gradient(135deg, rgba(147,162,255,.4), rgba(92,200,255,.25))",
              }}
            />
            <div className={`mt-3 h-2 ${bar}`} />
            <div className={`mt-1.5 h-2 w-2/3 ${bar}`} />
            <div className="mt-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="h-1.5 w-10 rounded-full bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function ComponentsMock() {
  return (
    <Frame accent="#93a2ff">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-lg bg-peri-strong px-4 py-2 text-xs font-semibold text-white">Primary</span>
          <span className="rounded-lg border border-white/15 px-4 py-2 text-xs font-semibold text-white/80">Secondary</span>
          <span className="rounded-full bg-emerald-400/15 px-3 py-2 text-xs font-medium text-emerald-300">● Active</span>
        </div>
        <div className="rounded-xl bg-white/5 p-4">
          <div className="text-[10px] uppercase tracking-wider text-white/40">Email</div>
          <div className="mt-2 h-9 rounded-lg border border-peri/50 bg-ink" />
          <div className="mt-3 flex items-center gap-2">
            <div className="h-5 w-9 rounded-full bg-peri-strong p-0.5">
              <div className="ml-auto h-4 w-4 rounded-full bg-white" />
            </div>
            <div className={`h-2 w-24 ${bar}`} />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {["#0a0d1c", "#182040", "#6b7bff", "#93a2ff", "#5cc8ff", "#f6f5f1"].map((c) => (
            <div key={c} className="aspect-square rounded-lg border border-white/10" style={{ background: c }} />
          ))}
        </div>
        <div className="font-mono text-[11px] leading-relaxed text-white/45">
          <span className="text-peri">import</span> {"{ Button, Datagrid }"} <span className="text-peri">from</span>{" "}
          <span className="text-sky">&quot;axiom-ui&quot;</span>
        </div>
      </div>
    </Frame>
  );
}

export default function ProjectMock({ kind }: { kind: MockKind }) {
  switch (kind) {
    case "platform":
      return <PlatformMock />;
    case "dashboard":
      return <DashboardMock />;
    case "newsroom":
      return <NewsroomMock />;
    default:
      return <ComponentsMock />;
  }
}
