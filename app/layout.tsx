/*************************
top-movers/app/layout.tsx
@Serendipity Digital
SEO Optimized Version
**************************/

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import Header from "@/components/layout/header"
import FloatingContactButtons from "@/components/ui/FloatingContactButtons"
import { QuoteModalProvider } from "@/context/QuoteModalContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://topmoversusatx.com"),

  title: {
    default:
      "Top Movers USA TX | Movers in Austin TX | Residential & Commercial Moving",
    template: "%s | Top Movers USA TX",
  },

  description:
    "Top Movers USA TX provides residential, commercial and apartment moving services in Austin TX, Round Rock, Cedar Park, Georgetown and surrounding areas. Transparent pricing, reliable movers and long-distance relocation services.",

  keywords: [
    "Austin moving company",
    "Movers in Austin TX",
    "Round Rock movers",
    "Cedar Park movers",
    "Leander moving company",
    "Pflugerville movers",
    "Georgetown TX movers",
    "Apartment movers Austin",
    "Residential moving Austin Texas",
    "Commercial moving Austin TX",
    "Packing services Austin",
    "Top Movers USA TX",
  ],

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },

  openGraph: {
    title: "Top Movers USA TX | Movers in Austin TX",
    description:
      "Professional residential, commercial and long-distance moving services in Austin, Round Rock, Cedar Park and surrounding Texas cities.",
    url: "https://topmoversusatx.com",
    siteName: "Top Movers USA TX",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top Movers USA TX Professional Moving Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Movers USA TX | Austin Movers",
    description:
      "Reliable residential and commercial movers serving Austin, Round Rock, Cedar Park and nearby Texas areas.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://topmoversusatx.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Moving Services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <QuoteModalProvider>

          <Header />

          {children}

          <FloatingContactButtons />

          {/* =========================
          Structured Data — Moving Company
          ========================== */}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MovingCompany",
                "@id": "https://topmoversusatx.com/#movingcompany",

                name: "Top Movers USA TX",
                url: "https://topmoversusatx.com",
                logo: "https://topmoversusatx.com/icon.png",
                image: "https://topmoversusatx.com/og-image.jpg",

                description:
                  "Licensed and insured moving company based in Austin, Texas providing residential, commercial and long-distance moving services across Central Texas.",

                telephone: "+1-737-244-3247",

                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Austin",
                  addressRegion: "TX",
                  addressCountry: "US",
                },

                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "30.2672",
                  longitude: "-97.7431",
                },

                areaServed: [
                  "Austin TX",
                  "Round Rock TX",
                  "Cedar Park TX",
                  "Leander TX",
                  "Pflugerville TX",
                  "Georgetown TX",
                  "Lakeway TX",
                  "Bee Cave TX",
                  "Kyle TX",
                  "Buda TX",
                ],

                serviceType: [
                  "Residential Moving",
                  "Commercial Moving",
                  "Apartment Moving",
                  "Packing Services",
                  "Unpacking Services",
                  "Long Distance Moving",
                ],

                priceRange: "$$",

                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  reviewCount: "20",
                },

                sameAs: [
                  "https://www.facebook.com/profile.php?id=61587630183676",
                  "https://www.instagram.com/topmovers.usatx/",
                ],
              }),
            }}
          />

          {/* =========================
          Breadcrumb Schema
          ========================== */}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://topmoversusatx.com",
                  },
                ],
              }),
            }}
          />

        </QuoteModalProvider>
      </body>
    </html>
  )
}