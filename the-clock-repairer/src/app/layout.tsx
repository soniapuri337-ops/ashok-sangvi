import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Libre_Caslon_Display, Libre_Caslon_Text } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealObserver, ScrollProgress } from "@/components/Motion";
import { site } from "@/content/site";
import "@/styles/base.css";
import "@/styles/chrome.css";
import "@/styles/sections.css";
import "@/styles/pages.css";

const display = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const serif = Libre_Caslon_Text({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Clock and Watch Repairs in ${site.town}, ${site.county}`,
    template: `%s | ${site.name}, ${site.town}`,
  },
  description:
    "Clock repairers, pocket watch repairers, turret clock repairers and watch repairers in Shrewsbury, Shropshire. Free written estimates, collection and delivery, twelve month guarantee.",
  keywords: [
    "clock repairs Shrewsbury",
    "clock repairer Shropshire",
    "pocket watch repairs",
    "turret clock repairs",
    "watch repairs Shrewsbury",
    "longcase clock restoration",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f2ea",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: "+44 1743 871128",
  email: site.email,
  image: `${site.url}/brand/logo.svg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.town,
    addressRegion: site.county,
    addressCountry: "GB",
  },
  areaServed: site.areas,
  knowsAbout: site.specialisms,
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "13:00" },
  ],
};

// Runs before first paint so revealed content never flashes
const motionFlag = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${serif.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
