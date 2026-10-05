import RootShell, { buildMetadata } from "../components/RootShell";
import { en } from "../i18n/dictionaries";

export { viewport } from "../components/RootShell";
export const metadata = buildMetadata(en);

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell locale="en" t={en}>
      {children}
    </RootShell>
  );
}
