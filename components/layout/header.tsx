/*************************
top-movers/components/layout/header.tsx
@Serendipity Digital
**************************/

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { useQuoteModal } from "@/context/QuoteModalContext"
import { motion } from "framer-motion"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { openModal } = useQuoteModal()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Coverage Area", href: "#coverage" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}
          <Link href="#home" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Top Movers Austin Texas Moving Company"
              width={220}
              height={80}
              priority
              className="h-auto w-auto max-h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group transition-colors duration-300 hover:text-primary"
              >
                {item.label}
                <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                onClick={openModal}
                className="
                  px-8 py-6 text-sm font-semibold tracking-wide
                  rounded-2xl
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]
                  active:scale-[0.98]
                "
              >
                Get a Quote
              </Button>
            </motion.div>
          </div>

          {/* ================= MOBILE MENU ================= */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-white/5">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="
                  w-full
                  bg-[#0a0a0a]/95
                  backdrop-blur-2xl
                  border-l border-white/10
                  flex
                  flex-col
                  items-center
                  pt-16
                "
              >
                {/* Premium radial depth */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05),transparent_60%)] pointer-events-none" />

                {/* Logo centered */}
                <div className="mb-16">
                  <Link href="#home">
                    <Image
                      src="/logo.png"
                      alt="Top Movers"
                      width={200}
                      height={70}
                      className="mx-auto"
                    />
                  </Link>
                </div>

                {/* Navigation */}
                <div className="flex flex-col items-center gap-10 text-2xl font-semibold tracking-wide text-center">

                  {menuItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="
                          hover:text-primary
                          transition-colors
                          duration-300
                        "
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}

                  {/* Divider */}
                  <div className="w-20 h-[1px] bg-white/10 my-4" />

                  {/* Premium CTA */}
                  <SheetClose asChild>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full max-w-xs"
                    >
                      <Button
                        onClick={openModal}
                        className="
                          w-full
                          py-7
                          text-base
                          font-semibold
                          tracking-wide
                          rounded-2xl
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:shadow-[0_0_45px_rgba(234,179,8,0.35)]
                          active:scale-[0.98]
                        "
                      >
                        Get a Free Quote
                      </Button>
                    </motion.div>
                  </SheetClose>

                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* ================= END MOBILE ================= */}

        </div>
      </div>
    </header>
  )
}
