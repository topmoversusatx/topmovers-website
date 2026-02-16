"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, Mail, Copy, Circle, ShieldCheck } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

type Props = {
  open: boolean
  onClose: () => void
}

export default function CallModal({ open, onClose }: Props) {
  const phone = "(512) 555-7890"
  const email = "info@topmoversatx.com"

  const [isMobile, setIsMobile] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // Micro Sound + Analytics
  useEffect(() => {
    if (open) {
      const audio = new Audio("/click.mp3")
      audio.volume = 0.2
      audio.play().catch(() => {})

      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "contact_modal_open", {
          event_category: "engagement",
          event_label: "Hero Call Button",
        })
      }
    }
  }, [open])

  // Spotlight effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!modalRef.current) return
    const rect = modalRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    modalRef.current.style.setProperty("--x", `${x}px`)
    modalRef.current.style.setProperty("--y", `${y}px`)
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl px-6"
        >
          <motion.div
            ref={modalRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-3xl rounded-3xl bg-[#0c0c0c] border border-white/10 p-12 shadow-[0_0_120px_rgba(0,120,255,0.15)] overflow-hidden"
            style={{
              background: `
                radial-gradient(
                  circle at var(--x, 50%) var(--y, 50%),
                  rgba(0,120,255,0.15),
                  transparent 40%
                )
              `,
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition"
            >
              <X size={22} />
            </button>

            <div className="relative z-10 space-y-10">

              {/* Header */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3 text-green-400 text-sm font-medium">
                  <Circle size={10} className="fill-green-400 animate-pulse" />
                  Online Now
                  <span className="text-gray-400 ml-3">
                    • Average response time: 2 min
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-white">
                  Speak With Our Moving Experts
                </h2>

                <p className="text-gray-400 max-w-lg mx-auto">
                  Direct communication with our licensed professionals.
                  No call centers. No delays.
                </p>
              </div>

              {/* Team Preview */}
              <div className="flex items-center justify-center gap-4">

                {/* Agent Image */}
                <div className="relative w-20 h-20 group">
                  <div className="absolute inset-0 rounded-full overflow-hidden border border-white/20 shadow-lg transition duration-300 group-hover:shadow-[0_0_25px_rgba(0,120,255,0.4)]">
                    <Image
                      src="/support-agent.png"
                      alt="Top Movers Support Agent"
                      fill
                      className="object-cover object-center"
                      sizes="80px"
                    />
                  </div>

                  {/* Live Indicator */}
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse" />
                </div>

                <div className="text-left">
                  <div className="text-white font-medium">
                    Austin-Based Support Team
                  </div>
                  <div className="text-gray-500 text-sm">
                    Licensed & Insured Professionals
                  </div>
                </div>
              </div>

              {/* Contact Grid */}
              <div className="grid md:grid-cols-2 gap-8">

                {/* Phone */}
                <div className="space-y-4">
                  <div className="text-gray-500 text-sm uppercase tracking-wide">
                    Phone
                  </div>

                  <div className="text-2xl font-bold text-white">
                    {phone}
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    {isMobile && (
                      <a
                        href={`tel:${phone}`}
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-white"
                      >
                        Call Now
                      </a>
                    )}

                    <button
                      onClick={() => copyToClipboard(phone, "phone")}
                      className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/30 transition text-sm text-white"
                    >
                      {copied === "phone" ? "Copied ✓" : "Copy Number"}
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-4">
                  <div className="text-gray-500 text-sm uppercase tracking-wide">
                    Email
                  </div>

                  <div className="text-lg font-medium text-white break-all">
                    {email}
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    <a
                      href={`mailto:${email}`}
                      className="px-6 py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition font-semibold"
                    >
                      Send Email
                    </a>

                    <button
                      onClick={() => copyToClipboard(email, "email")}
                      className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/30 transition text-sm text-white"
                    >
                      {copied === "email" ? "Copied ✓" : "Copy Email"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400 pt-6 border-t border-white/10">
                <ShieldCheck size={16} className="text-green-400" />
                Fully Licensed & Insured • Serving Texas Statewide
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
