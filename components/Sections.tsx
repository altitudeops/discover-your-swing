import Image from "next/image";
import Link from "next/link";
import { bookingUrl, testimonials } from "@/lib/site-data";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imagePosition = "center center",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imagePosition?: string;
}) {
  return (
    <section className="px-5 pb-16 pt-32 md:pb-20 md:pt-36">
      <div className="container grid items-end gap-8 lg:grid-cols-[1fr_0.86fr]">
        <div className="rise">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-4 text-4xl sm:text-5xl md:text-7xl">{title}</h1>
          <p className="lead mt-6 max-w-2xl">{copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="cta cta-primary" href={bookingUrl} target="_blank" rel="noreferrer">
              Book Online
            </a>
            <Link className="cta cta-secondary" href="/about">
              Meet Christie
            </Link>
          </div>
        </div>
        <div className="image-shell min-h-[440px] rise rise-delay">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export function ProgramGrid({
  title,
  intro,
  programs,
}: {
  title: string;
  intro: string;
  programs: Array<{ title: string; price: string; priceNote?: string; meta: string; description?: string; details?: string[] }>;
}) {
  return (
    <section className="section-pad bg-cloud">
      <div className="container grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Programs & Packages</p>
          <h2 className="headline mt-3 text-4xl md:text-5xl">{title}</h2>
          <p className="lead mt-5">{intro}</p>
          <a className="cta cta-primary mt-8" href={bookingUrl} target="_blank" rel="noreferrer">
            Book Online
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {programs.map((program) => (
            <article
              className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-steel/10"
              key={program.title}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="headline text-xl leading-tight">{program.title}</h3>
                <div className="shrink-0 text-right">
                  <p className="display text-2xl text-orange">{program.price}</p>
                  {program.priceNote ? <p className="mt-0.5 text-[0.7rem] font-bold leading-tight text-graphite/55">{program.priceNote}</p> : null}
                </div>
              </div>
              <p className="mt-1.5 text-xs font-black uppercase tracking-wider text-steel">{program.meta}</p>
              {program.description ? <p className="mt-3 text-sm leading-6 text-graphite/72">{program.description}</p> : null}
              {program.details?.length ? (
                <>
                  <p className="mt-4 border-t border-line pt-4 text-xs font-black uppercase tracking-wider text-steel">Includes</p>
                  <ul className="mt-3 grid gap-2.5 text-sm leading-6 text-graphite/72">
                    {program.details.map((detail) => (
                      <li className="flex gap-2.5" key={detail}>
                        <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true">
                          <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
              <div className="flex-1" />
              <a className="cta cta-primary mt-6 w-full" href={bookingUrl} target="_blank" rel="noreferrer">
                Book Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section-pad bg-cloud">
      <div className="container">
        <p className="eyebrow">Reviews &amp; Testimonials</p>
        <h2 className="headline mt-3 text-4xl md:text-5xl">What Students Say</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article className="orbit-card p-6" key={item.name}>
              <div className="text-xl text-orange">★★★★★</div>
              <p className="mt-5 text-base leading-7 text-graphite/78">{item.quote}</p>
              <p className="mt-6 font-black text-steel">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  const partners = [
    ["/images/lpga-logo.png", "LPGA"],
    ["/images/flightscope-logo.png", "FlightScope"],
    ["/images/titleist-logo.png", "Titleist"],
    ["/images/girls-golf-logo.png", "LPGA Girls Golf"],
  ];

  return (
    <section className="px-4 py-10">
      <div className="container grid items-center gap-5 border-y border-line py-8 md:grid-cols-[0.7fr_1fr]">
        <div>
          <p className="eyebrow">Trusted Tools & Associations</p>
          <h2 className="headline mt-2 text-3xl">Performance coaching with real player-development context.</h2>
        </div>
        <div className="grid grid-cols-2 items-center gap-5 md:grid-cols-4">
          {partners.map(([src, alt]) => (
            <div className="grid h-24 place-items-center rounded-lg bg-white p-4 shadow-sm" key={src}>
              <Image src={src} alt={alt} width={170} height={80} className="max-h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden px-4 py-24 text-white md:py-32">
      <Image src="/images/hero-christie.jpg" alt="" fill sizes="100vw" className="object-cover" style={{ objectPosition: "center center" }} />
      <div className="absolute inset-0 bg-steel/68" />
      <div className="absolute inset-0 bg-gradient-to-r from-steel via-steel/88 to-steel/56" />
      <div className="absolute inset-0 bg-gradient-to-t from-steel/90 via-transparent to-steel/28" />
      <div className="container relative flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="eyebrow text-white">Ready to get started?</p>
          <h2 className="headline mt-3 text-5xl md:text-6xl">Let’s discover your swing together.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/88">
            Book personalized golf coaching for Palm Springs, Palm Desert, or San Diego.
          </p>
        </div>
        <a className="cta cta-primary shrink-0" href={bookingUrl} target="_blank" rel="noreferrer">
          Book Now
        </a>
      </div>
    </section>
  );
}
