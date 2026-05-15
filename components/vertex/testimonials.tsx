"use client"

import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal } from "./reveal"

const testimonials = [
  {
    quote: "Vertex doesn't just sell property; they curate a lifestyle. Their access to off-market villas in Jumeirah Bay was unparalleled.",
    author: "M. Al Maktoum",
    role: "Private Investor",
  },
  {
    quote: "Discretion was my primary concern. The team handled my acquisition with a level of professional silence I haven't found elsewhere.",
    author: "S. Rossi",
    role: "International Collector",
  },
  {
    quote: "A refreshing departure from the high-pressure sales of typical agencies. Unhurried, insightful, and truly boutique.",
    author: "D. Chen",
    role: "Family Office Director",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full border-t border-white/5 px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center md:mb-24">
          <p className="mb-5 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Endorsements
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Voices of <span className="italic text-gold">distinction</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-gold/5 transition-colors group-hover:border-gold/40">
                <Quote className="h-5 w-5 text-gold/60" strokeWidth={1.5} />
              </div>
              
              <blockquote className="mb-8 font-serif text-xl italic leading-relaxed text-foreground/90 md:text-2xl">
                "{t.quote}"
              </blockquote>
              
              <div className="mt-auto">
                <cite className="block font-sans text-[11px] font-medium not-italic tracking-[0.2em] text-foreground uppercase">
                  {t.author}
                </cite>
                <span className="mt-2 block font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
