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
  const phone = "(737) 244-3247"
  const email = "info@topmoversusatx.com"

  const [isMobile, setIsMobile] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!modalRef.current || isMobile) return
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
            className={`
              relative w-full max-w-3xl rounded-3xl bg-[#0c0c0c]
              border border-white/10 shadow-[0_0_120px_rgba(0,120,255,0.15)]
              overflow-hidden
              ${isMobile ? "p-6" : "p-12"}
            `}
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
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition"
            >
              <X size={22} />
            </button>

            <div className={`relative z-10 ${isMobile ? "space-y-6" : "space-y-10"}`}>

              {/* Header */}
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-green-400 text-xs font-medium">
                  <Circle size={8} className="fill-green-400 animate-pulse" />
                  Online Now
                  {!isMobile && (
                    <span className="text-gray-400 ml-3">
                      • Average response time: 2 min
                    </span>
                  )}
                </div>

                <h2 className={`${isMobile ? "text-2xl" : "text-4xl"} font-bold text-white`}>
                  Speak With Our Moving Experts
                </h2>

                <p className={`${isMobile ? "text-xs" : "text-base"} text-gray-400 max-w-lg mx-auto`}>
                  Direct communication with our professionals.
                  No call centers. No delays.
                </p>
              </div>

              {/* Team Preview */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full overflow-hidden border border-white/20 shadow-lg">
                    <Image
                      src="/support-agent.png"
                      alt="Top Movers Support Agent"
                      fill
                      className="object-cover object-center"
                      sizes="64px"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse" />
                </div>

                <div className="text-left">
                  <div className="text-white font-medium text-sm">
                    Austin-Based Support Team
                  </div>
                  <div className="text-gray-500 text-xs">
                    Licensed & Insured Professionals
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="grid gap-6">

                {/* Phone */}
                <div className="space-y-2 text-center">
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    Phone: <span className="text-white font-semibold ml-1">{phone}</span>
                  </div>

                  <div className="flex justify-center gap-4">
                    <a
                      href={`tel:${phone}`}
                      className="w-32 text-center px-4 py-2 rounded-lg bg-[#ffd21e] hover:bg-[#e6be17] transition text-sm font-semibold text-black"
                    >
                      Call
                    </a>

                    <button
                      onClick={() => copyToClipboard(phone, "phone")}
                      className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
                    >
                      <Copy size={16} />
                      {copied === "phone" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2 text-center">
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    Email: <span className="text-white font-semibold ml-1">{email}</span>
                  </div>

                  <div className="flex justify-center gap-4">
                    <a
                      href={`mailto:${email}`}
                      className="w-32 text-center px-4 py-2 rounded-lg bg-white hover:bg-gray-200 transition text-sm font-semibold text-black"
                    >
                      Send
                    </a>

                    <button
                      onClick={() => copyToClipboard(email, "email")}
                      className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
                    >
                      <Copy size={16} />
                      {copied === "email" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

              </div>

              {!isMobile && (
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400 pt-6 border-t border-white/10">
                  <ShieldCheck size={16} className="text-green-400" />
                  Fully Licensed & Insured • Serving Texas Statewide
                </div>
              )}

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
