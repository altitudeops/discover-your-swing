import { CtaBand, PageHero, ProgramGrid, Testimonials } from "@/components/Sections";
import { juniorPrograms } from "@/lib/site-data";

export default function JuniorGolfPage() {
  return (
    <>
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
