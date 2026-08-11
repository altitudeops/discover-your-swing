import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Preloader } from "@/components/Preloader";
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
  metadataBase: new URL("https://discoveryourswing.com"),
  title: "Discover Your Swing!® - Golf Lessons in Palm Springs, Palm Desert & San Diego",
  description:
    "Personalized golf instruction and player development from Christie Quinn, LPGA Class A Professional and LPGA Vice President.",
  openGraph: {
    title: "Discover Your Swing!®",
    description: "Professional golf lessons and performance coaching with Christie Quinn.",
    type: "website",
    images: ["/images/hero-christie.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${nunito.variable}`}>
      <body>
        <Preloader />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
