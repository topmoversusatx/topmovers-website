"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    text: "Top Movers handled our entire house like it was their own. Not a single scratch, not a single delay.",
    author: "Michael R.",
    location: "Austin",
  },
  {
    text: "We relocated our office in one day without losing productivity. Organized and efficient.",
    author: "Sarah L.",
    location: "Round Rock",
  },
  {
    text: "I was nervous about my piano and antiques. Everything arrived flawlessly.",
    author: "Daniel M.",
    location: "Cedar Park",
  },
  {
    text: "From the first call to the final box, the experience was smooth and stress-free. Our family felt completely taken care of.",
    author: "Jessica T.",
    location: "Georgetown",
  },
]

export default function TestimonialsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-stretch">

      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          viewport={{ once: true }}
          className="
            h-full
            bg-white/5 backdrop-blur-lg border border-white/10 
            p-5 md:p-8 
            rounded-xl md:rounded-2xl 
            flex flex-col justify-between
          "
        >
          <div className="space-y-4 md:space-y-6">
            {/* Stars */}
            <div className="text-yellow-400 text-sm md:text-lg">
              ★★★★★
            </div>

            {/* Text */}
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              "{t.text}"
            </p>
          </div>

          {/* Author */}
          <div className="text-[11px] md:text-sm text-neutral-500 mt-4">
            — {t.author}, {t.location}
          </div>
        </motion.div>
      ))}

    </div>
  )
}
