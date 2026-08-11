import type { Metadata } from "next";
import Image from "next/image";
import { GiftCardModal } from "@/components/GiftCardModal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Golf Lesson Gift Cards",
  description:
    "Give the gift of better golf. Purchase a Discover Your Swing!® gift card redeemable toward any golf lesson or program with Christie Quinn.",
  path: "/gift-cards",
});

export default function GiftCardsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          ["Home", "/"],
          ["Gift Cards", "/gift-cards"],
        ])}
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-cloud via-white to-cloud px-4 pb-16 pt-24 md:pb-24 md:pt-28">
      <Image
        src="/images/logo-mark.png"
        alt=""
        aria-hidden
        width={520}
        height={620}
        className="pointer-events-none absolute -right-20 -top-10 w-[30rem] max-w-none rotate-12 opacity-[0.06] md:w-[38rem]"
      />
      <Image
        src="/images/logo-mark.png"
        alt=""
        aria-hidden
        width={420}
        height={500}
        className="pointer-events-none absolute -bottom-24 -left-24 w-[26rem] max-w-none -rotate-6 opacity-[0.05]"
      />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Gift Cards</p>
          <h1 className="display mt-3 text-balance text-3xl sm:text-4xl md:text-5xl">Give the gift of better golf.</h1>
          <p className="lead mx-auto mt-4 max-w-2xl">
            Purchase a Discover Your Swing!<sup>®</sup> gift card for golf coaching with Christie Quinn.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-5xl">
          <div className="mx-auto w-full max-w-md">
            <div className="relative aspect-[1.6/1] overflow-hidden rounded-2xl bg-gradient-to-br from-orange to-red p-6 text-white shadow-2xl shadow-orange/30">
              <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full border border-white/25" />
              <div className="pointer-events-none absolute -left-10 bottom-[-2.5rem] h-36 w-36 rounded-full border border-white/12" />
              <div className="relative flex h-full flex-col items-center justify-center gap-2 text-center">
                <div className="rounded-lg bg-white/95 px-3 py-2 shadow-md">
                  <Image src="/images/logo-wide.jpg" alt="Discover Your Swing" width={220} height={64} className="h-9 w-auto" priority />
                </div>
                <p className="text-[0.6rem] font-black uppercase tracking-[0.28em] text-white/85">Here is a gift for you</p>
                <p className="display text-3xl leading-none">Gift Card</p>
                <p className="max-w-[17rem] text-[0.7rem] leading-5 text-white/90">
                  Golf coaching with Christie Quinn — redeemable toward any Discover Your Swing!<sup>®</sup> lesson or program.
                </p>
              </div>
            </div>
          </div>
          <GiftCardModal />
        </div>
      </div>
      </section>
    </>
  );
}
