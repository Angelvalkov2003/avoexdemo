import type { Dictionary } from "../i18n/dictionaries";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
import Navigation from "./Navigation";
import Process from "./Process";
import Services from "./Services";
import Team from "./Team";
import Why from "./Why";
import Work, { MoreProjects } from "./Work";

export default function HomePage({ t }: { t: Dictionary }) {
  return (
    <>
      <Navigation nav={t.nav} locale={t.locale} />
      <main>
        <Hero t={t} />
        <Services t={t} />
        <Why t={t} />
        <Work t={t} />
        <MoreProjects t={t} />
        <Team t={t} />
        <Process t={t} />
        <FAQ faq={t.faq} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
