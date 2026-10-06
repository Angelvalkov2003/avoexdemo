import RootShell, { buildMetadata } from "../components/RootShell";
import { de } from "../i18n/dictionaries";

export { viewport } from "../components/RootShell";
export const metadata = buildMetadata(de);

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell locale="de" t={de}>
      {children}
    </RootShell>
  );
}
