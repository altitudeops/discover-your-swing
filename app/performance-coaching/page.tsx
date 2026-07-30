import { CtaBand, PageHero, Partners, ProgramGrid, Testimonials } from "@/components/Sections";
import { performancePrograms } from "@/lib/site-data";

export default function PerformanceCoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Tournament Player Coaching"
        title="Perform your best when it matters most."
        copy="Christie Quinn specializes in preparing competitive golfers to thrive in tournament play, from junior leaderboards to amateur championship goals."
        image="/images/performance.jpg"
        imagePosition="center center"
      />
      <section className="section-pad bg-white">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            ["Tailored Coaching", "Competitive golf demands mental toughness, technical precision, and a plan for scoring under pressure."],
            ["Track Record", "Christie helps players achieve personal bests, climb rankings, and sharpen the habits needed to compete."],
            ["Data-Driven Improvement", "Advanced tools and performance analytics turn practice into actionable player-development work."],
          ].map(([title, copy]) => (
            <article className="orbit-card p-7" key={title}>
              <h2 className="headline text-2xl">{title}</h2>
              <p className="copy mt-4">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <ProgramGrid
        title="Ready to compete with confidence?"
        intro="Choose a performance playing lesson or work with Christie to design a custom program around your competitive schedule and goals."
        programs={performancePrograms}
      />
      <Partners />
      <Testimonials />
      <CtaBand />
    </>
  );
}
