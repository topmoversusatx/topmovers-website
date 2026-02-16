/*************************
top-mover/app/layout.tsx
@Serendipity Digital
**************************/

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import Header from "@/components/layout/header"
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
  title: "Top Movers | Austin Moving Company",
  description:
    "Top Movers is a professional moving company serving Austin, TX and surrounding areas. Fast, insured, and reliable residential and commercial moving services.",
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
        </QuoteModalProvider>
      </body>
    </html>
  )
}
