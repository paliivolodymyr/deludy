import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ambition, comfortaa } from "@/lib/fonts";
import { site, phoneHref } from "@/config/site";
import "./globals.css";

const ogImage = { url: "/og.png", width: 1200, height: 630, alt: site.name };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  keywords: [
    "кав'ярня Тернопіль",
    "спешелті кава",
    "кава третьої хвилі",
    "матча бар",
    site.name,
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "uk_UA",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#20080c",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: site.name,
  description: site.description,
  telephone: site.phone,
  url: site.url,
  servesCuisine: "Coffee",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.zip,
    addressCountry: "UA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.coords.lat,
    longitude: site.coords.lng,
  },
  image: `${site.url}/og.png`,
  potentialAction: {
    "@type": "OrderAction",
    target: phoneHref,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" className={`${ambition.variable} ${comfortaa.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
