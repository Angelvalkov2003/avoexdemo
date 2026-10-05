import RootShell, { buildMetadata } from "../components/RootShell";
import { bg } from "../i18n/dictionaries";

export { viewport } from "../components/RootShell";
export const metadata = buildMetadata(bg);

export default function BulgarianLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell locale="bg" t={bg}>
      {children}
    </RootShell>
  );
}
