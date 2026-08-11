import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero, ProgramGrid, Testimonials } from "@/components/Sections";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { juniorPrograms } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Junior Golf Lessons & Development Programs",
  description:
    "Junior golf coaching for ages 5–15 with Christie Quinn — private lessons, group sessions, and on-course instruction that build skill, confidence, and a love for the game.",
  path: "/junior-golf",
});

export default function JuniorGolfPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Junior Golf Coaching",
            description:
              "Golf instruction for junior players ages 5–15, including private lessons, group sessions, and on-course coaching.",
            path: "/junior-golf",
            programs: juniorPrograms,
          }),
          breadcrumbJsonLd([
            ["Home", "/"],
            ["Junior Golf", "/junior-golf"],
          ]),
        ]}
      />
      <PageHero
        eyebrow="Junior Golf"
        title="Build confidence, skills, and love for the game."
        copy="Junior programs support young golfers with private lessons, lesson packages, and specialty coaching tailored to skill level and goals."
        image="/images/adult.jpg"
        imagePosition="center center"
      />
      <ProgramGrid
        title="Junior golf lessons and development programs."
        intro="From fundamental techniques to advanced strategies, Christie creates a fun and supportive environment where young players can thrive on and off the course."
        programs={juniorPrograms}
      />
      <Testimonials />
      <CtaBand />
    </>
  );
}
