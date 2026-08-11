import Image from "next/image";
import Link from "next/link";
import { bookingUrl, email, navItems, phone, socialLinks } from "@/lib/site-data";

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: (
    <path d="M14 8.5h1.6V6.1c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.42-3.9 4.02V12H7.2v2.6h2.16V21h2.6v-6.4h2.07l.33-2.6h-2.4v-1.74c0-.75.2-1.26 1.28-1.26z" />
  ),
  Instagram: (
    <path d="M12 8.9A3.1 3.1 0 1 0 12 15.1 3.1 3.1 0 0 0 12 8.9zm0 5.1a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.25-5.22a.72.72 0 1 1-1.45 0 .72.72 0 0 1 1.45 0zM17.9 8.7c-.04-.98-.26-1.85-.98-2.57-.72-.72-1.59-.94-2.57-.99-1.01-.06-4.03-.06-5.04 0-.98.04-1.85.26-2.57.98-.72.72-.94 1.59-.99 2.57-.06 1.01-.06 4.03 0 5.04.04.98.26 1.85.99 2.57.72.72 1.59.94 2.57.99 1.01.06 4.03.06 5.04 0 .98-.04 1.85-.26 2.57-.99.72-.72.94-1.59.98-2.57.06-1.01.06-4.03 0-5.03zm-1.29 6.12a2.02 2.02 0 0 1-1.14 1.14c-.79.31-2.66.24-3.53.24-.87 0-2.75.07-3.53-.24a2.02 2.02 0 0 1-1.14-1.14c-.31-.79-.24-2.66-.24-3.53 0-.87-.07-2.75.24-3.53a2.02 2.02 0 0 1 1.14-1.14c.79-.31 2.66-.24 3.53-.24.87 0 2.75-.07 3.53.24.53.2.94.61 1.14 1.14.31.79.24 2.66.24 3.53 0 .87.07 2.75-.24 3.53z" />
  ),
  Yelp: (
    <path d="M12.6 5.1c.5-.2 1.9-.6 2.3-.6.5.1.8.5.8 1l-.2 5.3c0 .8-1 1.1-1.5.5l-1.9-2.4c-.3-.4-.5-.8-.5-1.2 0-1 .5-1.8 1-2.6zm-3.4 6.6L6.9 10c-.4-.3-.9-.5-1.3-.4-.5.1-.8.6-.9 1.1-.1.5 0 1.9.1 2.3.2.5.6.7 1.1.6l2.9-.7c.8-.2.9-1.3.3-1.7zm.6 2.8-2.7 1.2c-.5.2-.7.7-.6 1.2.1.4 1 1.5 1.3 1.8.4.3.9.3 1.3-.1l2-2.2c.6-.6.1-1.6-.7-1.5l-.6.1zm4.3.7c-.5-.5-1.4-.2-1.5.5l-.2 3c0 .5.3 1 .8 1.1.4.1 1.8-.2 2.2-.5.4-.3.5-.8.2-1.2l-1.5-2.6c-.1-.1 0 0 0-.3zm3.2-2.6-2.9-.6c-.8-.2-1.4.8-.8 1.4l1.9 2c.4.4.9.5 1.3.2.4-.3 1.1-1.5 1.2-2 .1-.4-.2-.9-.7-1z" />
  ),
};

export function Footer() {
  return (
    <footer className="bg-white px-4 py-14 text-ink">
      <div className="container grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Image src="/images/logo-wide.jpg" alt="Discover Your Swing" width={360} height={106} className="h-auto w-72 rounded bg-white" />
          <p className="mt-6 max-w-md text-base leading-7 text-graphite/72">
            Professional golf lessons and player development based in Palm Springs, Palm Desert, and San Diego.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase text-steel">Navigation</h2>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link className="text-graphite/76 hover:text-ink" href={item.href}>
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mt-2 grid gap-1 pl-3">
                    {item.children.map((child) => (
                      <Link className="text-sm text-graphite/54 hover:text-ink" key={child.href} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase text-steel">Contact</h2>
          <div className="mt-4 grid gap-2 text-graphite/76">
            <a href={`tel:${phone.replaceAll("-", "")}`}>{phone}</a>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={bookingUrl} target="_blank" rel="noreferrer">
              Book online
            </a>
          </div>
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-graphite/70 transition-colors hover:border-ink hover:text-ink"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  {socialIcons[social.label]}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-12 border-t border-line pt-6 text-sm text-graphite/54">© 2026 Discover Your Swing!<sup>®</sup> — a registered trademark since 2006. All Rights Reserved.</div>
    </footer>
  );
}
