import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Faq, type FaqItem } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, Partners, Testimonials } from "@/components/Sections";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { bookingUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Golf Lessons in Palm Springs, Palm Desert & San Diego",
    description:
      "Discover Your Swing!® offers personalized golf lessons and player development with Christie Quinn, LPGA Class A Professional. Book a swing evaluation in Palm Springs, Palm Desert, or San Diego.",
    path: "/",
  }),
  // Root page shares the root segment, so the layout title template does not apply here.
  title: "Discover Your Swing!® — Golf Lessons in Palm Springs, Palm Desert & San Diego",
};

const faqs: FaqItem[] = [
  {
    q: "Where does Christie Quinn offer golf lessons?",
    a: "Discover Your Swing!® offers golf instruction in Palm Springs, Palm Desert, and San Diego, California — on the lesson tee and out on the course.",
  },
  {
    q: "Who is Christie Quinn?",
    a: "Christie Quinn is an LPGA Class A Professional and the current LPGA Vice President, with 25 years of coaching experience and more than 7,000 students taught. She is a Golf Digest Top 50 Teacher and the 2017 LPGA Coach of the Year.",
  },
  {
    q: "How much do golf lessons cost?",
    a: "Adult private lessons start at $100 for 30 minutes and $175 for 60 minutes. Junior lessons start at $50 for 30 minutes. The Discover Your Swing!® Assessment — a full movement screen, video analysis, and personalized plan — is $275.",
  },
  {
    q: "Do you coach junior golfers?",
    a: "Yes. Christie coaches juniors ages 5–15 with private, group, and on-course programs designed to build skill, confidence, and a lasting love for the game.",
  },
  {
    q: "What is a Discover Your Swing!® Assessment?",
    a: "It is your starting point: a full movement screen and video swing analysis that builds your personalized Discover Your Swing!® profile and a customized improvement plan.",
  },
  {
    q: "How do I book a lesson?",
    a: "You can book online any time through the booking link on this site, or reach Christie directly by phone or email to find a time that works for you.",
  },
];

const paths = [
  {
    title: "Private Adult Coaching",
    copy: "For golfers of all skill levels, work one-on-one with Christie Quinn to refine mechanics, consistency, and on-course confidence.",
    href: "/adult-coaching",
    image: "/images/junior.jpg",
    position: "center center",
  },
  {
    title: "Junior Golf Coaching",
    copy: "Programs designed to build confidence, skill, and a lasting love for the game in a supportive coaching environment.",
    href: "/junior-golf",
    image: "/images/adult.jpg",
    position: "center center",
  },
  {
    title: "Performance Golf Coaching",
    copy: "Competitive players sharpen strategy, mental toughness, scoring, and performance habits for tournament play.",
    href: "/performance-coaching",
    image: "/images/performance.jpg",
    position: "center center",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[94vh] overflow-hidden px-5 pb-14 pt-28 md:pt-32">
        <Image src="/images/hero-christie.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-white/64" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/82 via-white/40 to-white/86" />
        <div className="absolute bottom-5 left-5 hidden h-40 w-40 md:block">
          <span className="atom-ring left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <span className="atom-ring left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <span className="atom-ring left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container relative flex min-h-[calc(94vh-8rem)] items-center justify-center">
          <div className="mx-auto w-full max-w-[46rem] rise text-center">
            <p className="eyebrow">Golf Lessons in Palm Springs, Palm Desert &amp; San Diego</p>
            <h1 className="display mt-5 text-4xl sm:text-5xl md:text-7xl" style={{ fontWeight: 900 }}>
              Welcome to Discover Your Swing!<sup className="text-[0.42em] align-super">®</sup>
            </h1>
            <p className="lead mx-auto mt-6 max-w-2xl font-bold text-graphite">
              Golf coaching built around your body, your goals, and your game.
            </p>
            <p className="copy mx-auto mt-4 max-w-xl">
              Whether you’re new to the game or striving to compete at the highest level, Discover Your Swing!<sup>®</sup> is your premier destination for golf instruction and player development.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a className="cta cta-primary" href={bookingUrl} target="_blank" rel="noreferrer">
                Book Your Swing Evaluation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cloud">
        <div className="container grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="image-shell min-h-[440px] rise">
            <Image
              src="/images/coach-action.jpg"
              alt="Christie Quinn"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              style={{ objectPosition: "center top" }}
            />
          </div>
          <div>
            <p className="eyebrow">Meet Christie Quinn</p>
            <h2 className="headline mt-3 text-4xl md:text-5xl">Coaching backed by a career at the top of the game.</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "LPGA Vice President",
                "LPGA Class A Professional",
                "National Award-Winning Coach",
                "Gold Medalist",
                "25 Years Teaching",
                "7,000+ Students Coached",
              ].map((item) => (
                <div className="flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3" key={item}>
                  <span className="h-2 w-2 shrink-0 rounded-full bg-orange" />
                  <span className="font-bold text-ink">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-lg border border-line bg-white p-6">
              <p className="eyebrow">Award-Winning Coaching</p>
              <ul className="mt-4 grid gap-3">
                {[
                  ["2025–Present", "LPGA Vice President"],
                  ["2026", "LPGA Top 50 Teachers"],
                  ["2020–2026", "Golf Digest Top 50 Teachers"],
                  ["2017", "LPGA Coach of the Year"],
                ].map(([year, award]) => (
                  <li className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-line pb-3 last:border-b-0 last:pb-0" key={award}>
                    <span className="min-w-28 font-black text-orange">{year}</span>
                    <span className="font-bold text-ink">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">A Roadmap for Golfers at Every Level</p>
            <h2 className="headline mt-3 text-4xl md:text-5xl">Stop Chasing Swing Tips. Discover the Swing Your Body Was Built to Make.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {paths.map((item) => (
              <Link href={item.href} className="group orbit-card overflow-hidden" key={item.title}>
                <div className="image-shell h-80">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: item.position }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="headline text-2xl">{item.title}</h3>
                  <p className="copy mt-3">{item.copy}</p>
                  <p className="mt-5 font-black text-orange">Learn More</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Coaching where the work happens</p>
            <h2 className="headline mt-3 text-4xl md:text-5xl">Customized development based on your goals, not one-size-fits-all tips.</h2>
            <p className="lead mt-6">
              Golf is a journey, and Discover Your Swing!<sup>®</sup> is here to guide you every step of the way. Programs combine technical expertise, fitness, strategy, and a coaching style built around each player’s unique goals.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["01", "Assess", "Start with the golfer’s body, goals, ball flight, and relationship with the game."],
              ["02", "Build", "Create a realistic plan built around your goals, your body, and the time you have to play."],
              ["03", "Transfer", "Move the work from lesson tee to range, course, tournament, and long-term confidence."],
            ].map(([number, title, copy]) => (
              <article className="orbit-card p-6" key={title}>
                <p className="font-black text-orange">{number}</p>
                <h3 className="headline mt-5 text-2xl">{title}</h3>
                <p className="copy mt-4">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      <Testimonials />
      <Faq items={faqs} />
      <CtaBand />
      <JsonLd data={faqJsonLd(faqs)} />
    </>
  );
}
