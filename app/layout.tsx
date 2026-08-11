import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { Preloader } from "@/components/Preloader";
import { globalJsonLd, siteConfig } from "@/lib/seo";
import "./globals.css";

const manrope = localFont({
  src: [
    { path: "../public/fonts/manrope-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/manrope-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/manrope-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/manrope-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

const nunito = localFont({
  src: [
    { path: "../public/fonts/nunito-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/nunito-sans-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/nunito-sans-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/nunito-sans-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/nunito-sans-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Discover Your Swing!® - Golf Lessons in Palm Springs, Palm Desert & San Diego",
    template: "%s · Discover Your Swing!®",
  },
  description:
    "Personalized golf instruction and player development from Christie Quinn, LPGA Class A Professional and LPGA Vice President.",
  applicationName: siteConfig.name,
  authors: [{ name: "Christie Quinn" }],
  creator: "Christie Quinn",
  keywords: [
    "golf lessons",
    "golf coach",
    "Christie Quinn",
    "LPGA",
    "junior golf",
    "performance coaching",
    "Palm Springs golf lessons",
    "Palm Desert golf lessons",
    "San Diego golf lessons",
  ],
  openGraph: {
    title: "Discover Your Swing!®",
    description: "Professional golf lessons and performance coaching with Christie Quinn.",
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    images: ["/images/hero-christie.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Your Swing!®",
    description: "Professional golf lessons and performance coaching with Christie Quinn.",
    images: ["/images/hero-christie.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#f28c22",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${nunito.variable}`}>
      <body>
        <JsonLd data={globalJsonLd} />
        <Preloader />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
