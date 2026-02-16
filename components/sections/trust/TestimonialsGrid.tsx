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
]

export default function TestimonialsGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">

      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl space-y-6"
        >
          <div className="text-yellow-400 text-lg">★★★★★</div>

          <p className="text-neutral-300 leading-relaxed">
            "{t.text}"
          </p>

          <div className="text-sm text-neutral-500">
            — {t.author}, {t.location}
          </div>
        </motion.div>
      ))}

    </div>
  )
}
