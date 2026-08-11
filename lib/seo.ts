import type { Metadata } from "next";
import {
  adultPrograms,
  bookingUrl,
  email,
  juniorPrograms,
  performancePrograms,
  phone,
  socialLinks,
  videos,
  type Program,
} from "@/lib/site-data";

export const siteConfig = {
  name: "Discover Your Swing!®",
  legalName: "Discover Your Swing!",
  url: "https://discoveryourswing.com",
  description:
    "Personalized golf instruction and player development from Christie Quinn, LPGA Class A Professional and LPGA Vice President. Serving Palm Springs, Palm Desert, and San Diego.",
  founder: "Christie Quinn",
  areasServed: ["Palm Springs, CA", "Palm Desert, CA", "San Diego, CA"],
  ogImage: "/images/hero-christie.jpg",
  logo: "/images/sitelogo.svg",
  telephone: phone,
  email,
  bookingUrl,
} as const;

const phoneDigits = `+1${phone.replace(/\D/g, "")}`;

/** Build page-level metadata with an absolute canonical + Open Graph. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? "/" : path;
  // og:title stays short (no brand suffix) so it doesn't exceed the ~60-char sweet spot.
  // The shared 1200x630 card lives at app/opengraph-image.tsx; reference it explicitly
  // so every route (not just "/") emits og:image + twitter:image.
  const ogImage = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: siteConfig.name,
  };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: siteConfig.name,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const abs = (p: string) => (p.startsWith("http") ? p : `${siteConfig.url}${p}`);

/* -------------------------------------------------------------------------- */
/*  Global (sitewide) structured data                                          */
/* -------------------------------------------------------------------------- */

const businessId = `${siteConfig.url}/#business`;
const personId = `${siteConfig.url}/#christie`;
const websiteId = `${siteConfig.url}/#website`;

export const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "SportsActivityLocation"],
      "@id": businessId,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      description: siteConfig.description,
      url: siteConfig.url,
      logo: abs(siteConfig.logo),
      image: abs(siteConfig.ogImage),
      telephone: phoneDigits,
      email: siteConfig.email,
      priceRange: "$50–$600",
      sport: "Golf",
      currenciesAccepted: "USD",
      areaServed: siteConfig.areasServed.map((name) => ({ "@type": "City", name })),
      founder: { "@id": personId },
      sameAs: socialLinks.map((s) => s.href),
      potentialAction: {
        "@type": "ReserveAction",
        target: { "@type": "EntryPoint", urlTemplate: siteConfig.bookingUrl },
        name: "Book a lesson",
      },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "Christie Quinn",
      jobTitle: "LPGA Class A Golf Professional & LPGA Vice President",
      description:
        "Christie Quinn is a Class A Member of the LPGA Teaching & Club Professional Division and current LPGA Vice President, with 25 years of coaching experience and 7,000+ students taught.",
      image: abs("/images/coach-action.jpg"),
      worksFor: { "@id": businessId },
      knowsAbout: ["Golf instruction", "Junior golf", "Player performance coaching", "Golf fitness"],
      award: [
        "LPGA Vice President (2025–Present)",
        "LPGA Top 50 Teachers (2026)",
        "Golf Digest Top 50 Teachers (2020–2026)",
        "LPGA Coach of the Year (2017)",
      ],
      memberOf: { "@type": "Organization", name: "LPGA (Ladies Professional Golf Association)" },
      sameAs: socialLinks.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": businessId },
      inLanguage: "en-US",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Per-page structured data builders                                          */
/* -------------------------------------------------------------------------- */

const priceToNumber = (price: string) => Number(price.replace(/[^0-9.]/g, "")) || undefined;

/** Service + hasOfferCatalog for a coaching page. */
export function serviceJsonLd({
  name,
  description,
  path,
  programs,
}: {
  name: string;
  description: string;
  path: string;
  programs: Program[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "Golf instruction",
    url: abs(path),
    provider: { "@id": businessId },
    areaServed: siteConfig.areasServed.map((n) => ({ "@type": "City", name: n })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name,
      itemListElement: programs.map((p) => ({
        "@type": "Offer",
        name: p.title,
        description: p.description,
        price: priceToNumber(p.price),
        priceCurrency: "USD",
        category: p.meta,
        url: abs(path),
        availability: "https://schema.org/InStock",
      })),
    },
  };
}

export const serviceCatalog = { adultPrograms, juniorPrograms, performancePrograms };

/** BreadcrumbList for a page. Pass ordered [label, path] pairs. */
export function breadcrumbJsonLd(trail: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: abs(path),
    })),
  };
}

/** FAQPage — content must mirror what is visible on the page. */
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** ItemList of VideoObjects for the videos page. */
export function videoListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: videos.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VideoObject",
        name: v.title,
        description: `${v.title} — a golf coaching tip from Christie Quinn of Discover Your Swing!®.`,
        thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`],
        embedUrl: `https://www.youtube.com/embed/${v.id}`,
        contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
        publisher: { "@id": businessId },
      },
    })),
  };
}
