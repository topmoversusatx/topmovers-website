/*************************
top-movers/app/layout.tsx
@Serendipity Digital
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
      "Top Movers USA TX | Professional Moving Company in Austin, Texas",
    template: "%s | Top Movers USA TX",
  },

  description:
    "Top Movers USA TX is a professional moving company serving Austin, Round Rock, Cedar Park, Leander, Pflugerville, Georgetown and surrounding Texas areas. Residential and commercial moving services with transparent hourly rates and apartment flat-rate specials.",

  keywords: [
    "Austin moving company",
    "Movers in Austin TX",
    "Round Rock movers",
    "Cedar Park movers",
    "Leander moving company",
    "Pflugerville movers",
    "Georgetown TX movers",
    "Lakeway movers",
    "Bee Cave moving services",
    "Kyle TX movers",
    "Buda moving company",
    "Apartment movers Austin",
    "Residential moving Austin Texas",
    "Commercial moving Austin TX",
    "Packing and unpacking services Austin",
    "Top Movers USA TX"
  ],

  authors: [{ name: "Top Movers USA TX" }],
  creator: "Top Movers USA TX",
  publisher: "Top Movers USA TX",

  openGraph: {
    title:
      "Top Movers USA TX | Trusted Moving Company in Austin, Texas",
    description:
  "Professional movers based in Austin, Texas offering local, statewide and nationwide long-distance moving services across the United States.",
    url: "https://topmoversusatx.com",
    siteName: "Top Movers USA TX",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top Movers USA TX Moving Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Top Movers USA TX | Austin & Surrounding Areas",
    description:
      "Reliable professional movers in Austin, Round Rock, Cedar Park and surrounding Texas cities.",
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

          {/* Header Global */}
          <Header />

          {/* Page Content */}
          {children}

          {/* Floating Contact Buttons */}
          <FloatingContactButtons />

          {/* 🔥 Structured Data - Local SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MovingCompany",
                name: "Top Movers USA TX",
                url: "https://topmoversusatx.com",
                logo: "https://topmoversusatx.com/og-image.jpg",
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
                  "Buda TX"
                ],
                serviceType: [
                  "Residential Moving",
                  "Commercial Moving",
                  "Apartment Moving",
                  "Packing Services",
                  "Unpacking Services"
                ]
              }),
            }}
          />

        </QuoteModalProvider>
      </body>
    </html>
  )
}