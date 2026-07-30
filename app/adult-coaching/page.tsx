import { CtaBand, PageHero, ProgramGrid, Testimonials } from "@/components/Sections";
import { adultPrograms } from "@/lib/site-data";

export default function AdultCoachingPage() {
  return (
    <>
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
