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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10"
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
            <Link href="#services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#coverage" className="hover:text-primary transition-colors">
              Coverage Area
            </Link>
            <Link href="#reviews" className="hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                onClick={openModal}
                className="
                  px-6 py-6 text-sm font-semibold tracking-wide
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]
                  active:scale-[0.98]
                "
              >
                Get a Quote
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-72 bg-[#0a0a0a] border-l border-white/10"
              >
                <div className="mt-16 flex flex-col gap-8 text-lg">

                  <SheetClose asChild>
                    <Link href="#services">Services</Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href="#pricing">Pricing</Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href="#coverage">Coverage Area</Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href="#reviews">Reviews</Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href="#contact">Contact</Link>
                  </SheetClose>

                  {/* Mobile CTA */}
                  <SheetClose asChild>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        className="
                          mt-6
                          transition-all duration-300 ease-out
                          hover:-translate-y-1
                          hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]
                          active:scale-[0.98]
                        "
                        onClick={openModal}
                      >
                        Get a Quote
                      </Button>
                    </motion.div>
                  </SheetClose>

                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  )
}
