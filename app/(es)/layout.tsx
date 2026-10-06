import RootShell, { buildMetadata } from "../components/RootShell";
import { es } from "../i18n/dictionaries";

export { viewport } from "../components/RootShell";
export const metadata = buildMetadata(es);

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell locale="es" t={es}>
      {children}
    </RootShell>
  );
}
