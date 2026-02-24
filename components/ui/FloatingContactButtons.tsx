"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4 pointer-events-auto">
      {/* Debug dot (si ves esto, el componente está montando) */}
      <div className="absolute -top-2 -left-2 h-2 w-2 rounded-full bg-red-500" />

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/17372443247?text=Hi%20I%27d%20like%20a%20quote%20for%20my%20move%20in%20Austin."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="
          flex items-center justify-center
          w-14 h-14
          rounded-full
          bg-[#25D366]
          shadow-[0_10px_30px_rgba(37,211,102,0.35)]
        "
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>

      {/* Phone */}
      <motion.a
        href="tel:+17372443247"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="
          flex items-center justify-center
          w-14 h-14
          rounded-full
          bg-black
          border border-white/20
          shadow-[0_10px_30px_rgba(0,0,0,0.4)]
        "
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  )
}