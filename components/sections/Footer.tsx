"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-12 pb-10 overflow-hidden">

      {/* ========================= */}
      {/* TOP GRADIENT DIVIDER */}
      {/* ========================= */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* ========================= */}
      {/* RADIAL DEPTH GLOW */}
      {/* ========================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,120,255,0.08),rgba(0,0,0,0.95)_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* ========================= */}
        {/* LOGO */}
        {/* ========================= */}
        <div className="flex justify-center mb-4">
          <img
            src="/logo.png"
            alt="Top Movers Logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        <p className="text-neutral-400 text-base mb-8">
          Moving Austin with precision, care & integrity.
        </p>

        {/* ========================= */}
        {/* NAVIGATION */}
        {/* ========================= */}
        <div className="flex justify-center items-center gap-6 text-neutral-300 text-sm mb-10 tracking-wide">
          <Link href="/" className="hover:text-white transition duration-300">
            Home
          </Link>
          <span className="opacity-30">•</span>
          <Link href="/services" className="hover:text-white transition duration-300">
            Services
          </Link>
          <span className="opacity-30">•</span>
          <Link href="/pricing" className="hover:text-white transition duration-300">
            Pricing
          </Link>
          <span className="opacity-30">•</span>
          <Link href="/coverage" className="hover:text-white transition duration-300">
            Coverage
          </Link>
          <span className="opacity-30">•</span>
          <Link href="/contact" className="hover:text-white transition duration-300">
            Contact
          </Link>
        </div>

        <div className="border-t border-white/10 mb-8" />

        {/* ========================= */}
        {/* SIGNATURE BLOCK */}
        {/* ========================= */}
        <div className="flex flex-col items-center gap-3 text-sm text-neutral-500">

          <div className="flex flex-wrap justify-center items-center gap-2">

            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-70 blur-sm"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>

            <span>
              Designed & Engineered in Austin,
            </span>

            <span className="flex items-center gap-1">
              Texas
              <img
                src="/texas-flag.png"
                alt="Texas Flag"
                className="w-4 h-4 rounded-full object-cover"
              />
            </span>

            <span>· U.S.</span>

            <img
              src="/usa-flag.png"
              alt="United States Flag"
              className="w-4 h-4 rounded-full object-cover"
            />

          </div>

          <div className="relative group">
            <a
              href="https://serendipitydigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white tracking-wide"
            >
              by Serendipity Digital
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </div>

          <p className="mt-4 text-xs text-neutral-600">
            © {new Date().getFullYear()} Top Movers. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  )
}
