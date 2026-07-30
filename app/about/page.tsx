import Image from "next/image";
import { CtaBand, PageHero, Testimonials } from "@/components/Sections";
import { bookingUrl, email, phone } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Discover Your Swing!®"
        title="A trademarked philosophy for finding your own swing."
        copy="Christie Quinn helps every golfer uncover and embrace a swing that fits their body, goals, and relationship with the game."
        image="/images/adult.jpg"
        imagePosition="center center"
      />
      <section className="section-pad bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1fr]">
          <div className="image-shell min-h-[520px]">
            <Image
              src="/images/student.jpg"
              alt="Christie Quinn"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              style={{ objectPosition: "center top" }}
            />
          </div>
          <div>
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="headline mt-3 text-4xl md:text-5xl">Golf starts with the joy of striking the ball.</h2>
            <div className="mt-6 grid gap-5 text-lg leading-8 text-graphite/78">
              <p>
                The essence of golf lies in hearing a friend say “Nice shot” and embracing the journey of improvement. The pursuit of a better game is a lifelong challenge, but the secret to enjoying golf is learning to accept and work with the body you have today.
              </p>
              <p>
                Discover Your Swing!<sup>®</sup> is Christie’s registered trademark and unique approach to teaching the game. No two people share the same strength or flexibility, and no two swings are alike. By understanding that, golfers can find fulfillment in their current abilities while working toward their potential.
              </p>
            </div>
            <div className="mt-8 rounded-lg border border-line bg-cloud p-6">
              <h3 className="headline text-2xl">Christie Quinn, LPGA Class A</h3>
              <p className="copy mt-3">
                Christie Quinn is a Class A Member of the LPGA Teaching & Club Professional Division and current LPGA Vice President. Her holistic philosophy integrates swing mechanics, physical fitness, and mental preparation, empowering golfers to reach their potential.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="cta cta-primary" href={bookingUrl} target="_blank" rel="noreferrer">
                  Book Now
                </a>
                <a className="cta cta-secondary" href={`mailto:${email}`}>
                  {email}
                </a>
                <a className="cta cta-secondary" href={`tel:${phone.replaceAll("-", "")}`}>
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <CtaBand />
    </>
  );
}
