import RootShell, { buildMetadata } from "../components/RootShell";
import { nl } from "../i18n/dictionaries";

export { viewport } from "../components/RootShell";
export const metadata = buildMetadata(nl);

export default function DutchLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell locale="nl" t={nl}>
      {children}
    </RootShell>
  );
}
