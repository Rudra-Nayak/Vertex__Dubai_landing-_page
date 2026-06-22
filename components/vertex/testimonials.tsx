"use client"

import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal } from "./reveal"

const testimonials = [
  {
    quote: "Vertex completely transformed our backyard into a stunning resort-style retreat. Their attention to detail in the hardscaping and pool design is unmatched.",
    author: "Omar A.",
    role: "Villa Owner",
  },
  {
    quote: "The 3D visualizations were incredibly accurate. Seeing our modern facade come to life exactly as proposed gave us complete confidence in their team.",
    author: "Sarah & James T.",
    role: "Residential Client",
  },
  {
    quote: "Exceptional professionalism from start to finish. The lighting design they implemented completely elevated the ambiance of our outdoor living space.",
    author: "Michael R.",
    role: "Property Developer",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full border-t border-border px-6 py-24 md:py-32 lg:px-10 bg-background">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center md:mb-24">
          <p className="mb-5 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Client Testimonials
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Stories of <span className="italic text-gold">vision</span> and creation.
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
