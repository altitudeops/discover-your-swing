import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero, ProgramGrid, Testimonials } from "@/components/Sections";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { adultPrograms } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Adult Golf Lessons in Palm Springs, Palm Desert & San Diego",
  description:
    "Private adult golf lessons, on-course coaching, and lesson packages with Christie Quinn — individualized instruction that transfers from the lesson tee to the course.",
  path: "/adult-coaching",
  image: "/images/junior.jpg",
});

export default function AdultCoachingPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Adult Golf Coaching",
            description:
              "Private adult golf lessons, on-course instruction, and lesson packages for golfers of all skill levels.",
            path: "/adult-coaching",
            programs: adultPrograms,
          }),
          breadcrumbJsonLd([
            ["Home", "/"],
            ["Adult Coaching", "/adult-coaching"],
          ]),
        ]}
      />
      <PageHero
        eyebrow="Palm Springs, Palm Desert & San Diego"
        title="Adult golf lessons and programs."
        copy="Performance coaching for golfers refining their swing, improving consistency, mastering the mental game, and building confidence on the course."
        image="/images/junior.jpg"
        imagePosition="center center"
      />
      <ProgramGrid
        title="Adult private lessons, on-course coaching, and focused packages."
        intro="Each program focuses on individualized instruction, measurable progress, and practical strategies that transfer from the lesson tee to the golf course."
        programs={adultPrograms}
      />
      <Testimonials />
      <CtaBand />
    </>
  );
}
