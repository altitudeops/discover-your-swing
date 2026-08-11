export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <section className="section-pad bg-cloud" aria-labelledby="faq-heading">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Common Questions</p>
          <h2 id="faq-heading" className="headline mt-3 text-4xl md:text-5xl text-balance">
            Answers before you book.
          </h2>
          <p className="copy mt-6 max-w-md">
            A few of the questions golfers ask most. Have another? Reach out any time and Christie will help.
          </p>
        </div>
        <div className="grid gap-4">
          {items.map((item) => (
            <details key={item.q} className="orbit-card group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <span className="headline text-xl md:text-2xl">{item.q}</span>
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line font-black text-orange transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="copy mt-4 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
