"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-20 pb-12 overflow-hidden">

      {/* TOP PREMIUM DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffd21e]/40 to-transparent" />

      {/* SUBTLE RADIAL DEPTH */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,210,30,0.05),rgba(0,0,0,0.95)_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* BRAND BLOCK */}
          <div>
            <div className="flex justify-center md:justify-start mb-6">
              <img
                src="/logo.png"
                alt="Top Movers Logo"
                className="h-16 md:h-20 object-contain"
              />
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Premium residential & commercial moving services across Austin and beyond.
              Precision. Care. Integrity.
            </p>
          </div>

          {/* NAVIGATION (UPDATED TO ANCHORS) */}
          <div className="space-y-4">
            <h4 className="text-sm tracking-widest text-neutral-500 uppercase">
              Navigation
            </h4>

            <div className="flex flex-col gap-3 text-neutral-300 text-sm">
              <Link href="#home" className="hover:text-[#ffd21e] transition">
                Home
              </Link>
              <Link href="#services" className="hover:text-[#ffd21e] transition">
                Services
              </Link>
              <Link href="#pricing" className="hover:text-[#ffd21e] transition">
                Pricing
              </Link>
              <Link href="#reviews" className="hover:text-[#ffd21e] transition">
                Reviews
              </Link>
              <Link href="#coverage" className="hover:text-[#ffd21e] transition">
                Coverage Area
              </Link>
              <Link href="#quote" className="hover:text-[#ffd21e] transition">
                Get a Quote
              </Link>
              <Link href="#contact" className="hover:text-[#ffd21e] transition">
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">
            <h4 className="text-sm tracking-widest text-neutral-500 uppercase">
              Contact
            </h4>

            <div className="flex flex-col gap-3 text-neutral-300 text-sm">
              <span>Austin, Texas</span>
              <span>(512) 555-0123</span>
              <span>info@topmoversusatx.com</span>
              <span className="text-neutral-500 text-xs mt-2">
                Serving Austin Metro · Across Texas · Nationwide
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-500">

          <span>
            © {new Date().getFullYear()} Top Movers USA-TX LLC. All rights reserved.
          </span>

          <div className="relative group">
            <a
              href="https://serendipitydigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition"
            >
              Designed & Engineered by Serendipity Digital
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#ffd21e] transition-all duration-300 group-hover:w-full"></span>
          </div>

        </div>

      </div>
    </footer>
  )
}
