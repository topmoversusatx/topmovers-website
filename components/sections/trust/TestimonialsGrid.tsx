"use client"

import { motion } from "framer-motion"

// ─────────────────────────────────────────────────────────────────
// Review Schema — @type: Review for each testimonial
//
// ✅ Enables rich snippets with star ratings in Google SERP
// ✅ Each review links to the global MovingCompany entity
// ✅ City + TX added for local SEO signal
// ✅ Update domain to match your actual domain
// ─────────────────────────────────────────────────────────────────
const reviewSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Review",
      "reviewBody": "Top Movers handled our entire house like it was their own. Not a single scratch, not a single delay.",
      "author": { "@type": "Person", "name": "Michael R." },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "itemReviewed": {
        "@type": "MovingCompany",
        "@id": "https://topmoversusatx.com/#movingcompany"
      },
      "locationCreated": { "@type": "City", "name": "Austin" }
    },
    {
      "@type": "Review",
      "reviewBody": "We relocated our office in one day without losing productivity. Organized and efficient.",
      "author": { "@type": "Person", "name": "Sarah L." },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "itemReviewed": {
        "@type": "MovingCompany",
        "@id": "https://topmoversusatx.com/#movingcompany"
      },
      "locationCreated": { "@type": "City", "name": "Round Rock" }
    },
    {
      "@type": "Review",
      "reviewBody": "I was nervous about my piano and antiques. Everything arrived flawlessly.",
      "author": { "@type": "Person", "name": "Daniel M." },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "itemReviewed": {
        "@type": "MovingCompany",
        "@id": "https://topmoversusatx.com/#movingcompany"
      },
      "locationCreated": { "@type": "City", "name": "Cedar Park" }
    },
    {
      "@type": "Review",
      "reviewBody": "From the first call to the final box, the experience was smooth and stress-free. Our family felt completely taken care of.",
      "author": { "@type": "Person", "name": "Jessica T." },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "itemReviewed": {
        "@type": "MovingCompany",
        "@id": "https://topmoversusatx.com/#movingcompany"
      },
      "locationCreated": { "@type": "City", "name": "Georgetown" }
    }
  ]
}

const testimonials = [
  {
    text: "Top Movers handled our entire house like it was their own. Not a single scratch, not a single delay.",
    author: "Michael R.",
    location: "Austin, TX",
  },
  {
    text: "We relocated our office in one day without losing productivity. Organized and efficient.",
    author: "Sarah L.",
    location: "Round Rock, TX",
  },
  {
    text: "I was nervous about my piano and antiques. Everything arrived flawlessly.",
    author: "Daniel M.",
    location: "Cedar Park, TX",
  },
  {
    text: "From the first call to the final box, the experience was smooth and stress-free. Our family felt completely taken care of.",
    author: "Jessica T.",
    location: "Georgetown, TX",
  },
]

export default function TestimonialsGrid() {
  return (
    <>
      {/* ─── Review Schema JSON-LD ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-stretch">

        {testimonials.map((t) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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

              {/* Stars — semantic role for a11y */}
              <div
                role="img"
                aria-label="5 out of 5 stars"
                className="text-yellow-400 text-sm md:text-lg"
              >
                ★★★★★
              </div>

              {/* Review text */}
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                "{t.text}"
              </p>
            </div>

            {/* Author + city with TX for local SEO */}
            <div className="text-[11px] md:text-sm text-neutral-500 mt-4">
              — {t.author}, {t.location}
            </div>

          </motion.div>
        ))}

      </div>
    </>
  )
}
