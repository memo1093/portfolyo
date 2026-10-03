import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { getDictionary } from "@/dictionaries";
import { hasLocale } from "@/lib/i18n";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <JsonLd lang={lang} dict={dict} />
      <Hero dict={dict.hero} lang={lang} cv={dict.cv} />
      <Skills dict={dict.skills} />
      <Experience dict={dict.experience} />
      <Projects dict={dict.projects} />
      <Education dict={dict.education} />
      <Contact dict={dict.contact} cv={dict.cv} lang={lang} copiedAnnounce={dict.a11y.copied} />
    </>
  );
}
