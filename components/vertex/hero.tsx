"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[85vh] w-full items-end overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
          alt="Modern luxury villa exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80 scale-[1.02]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/15 to-background/90" />
      </div>

      {/* Content */}
      <div className="ml-[7vw] w-full max-w-5xl px-6 pb-16 md:pb-20 lg:px-0">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 flex items-center gap-4 font-sans text-[10px] font-medium uppercase tracking-[0.45em] text-gold"
        >
          <span className="h-px w-10 bg-gold" />
          Luxury Exterior Architecture — Est. 2008
        </motion.p>

        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[15ch] text-[clamp(2.8rem,7.5vw,7rem)] font-[300] leading-[0.9] tracking-[-0.045em] text-foreground [font-family:var(--font-cormorant)]"
        >
          Elevating
          <br />
          your outdoor
          <br />
          living <span className="italic text-gold">spaces</span>.
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 max-w-[38rem] font-sans text-[14px] leading-[1.8] text-muted-foreground md:text-[16px]"
        >
          Experience bespoke exterior design that blends architectural elegance with the natural environment. At Vertex, we transform facades, landscapes, and outdoor areas into stunning, functional masterpieces.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-4 border border-gold/60 rounded-full px-9 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.35em] text-gold transition-all duration-700 hover:border-gold hover:bg-gold/5"
          >
            View Projects

            <ArrowRight className="h-4 w-4 transition-transform duration-700 group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="font-sans text-[11px] uppercase tracking-[0.35em] text-foreground/60 transition-colors duration-500 hover:text-foreground"
          >
            Request Consultation →
          </a>
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 hidden border-t border-border bg-background/40 backdrop-blur-md md:block"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 px-8 py-6">
          {[
            {
              k: "15+ Years",
              v: "Design Experience",
            },
            {
              k: "500+",
              v: "Completed Projects",
            },
            {
              k: "100%",
              v: "Client Satisfaction",
            },
          ].map((s) => (
            <div key={s.v} className="flex items-baseline gap-3">
              <span className="font-serif text-[1.75rem] tracking-[-0.03em] text-foreground">
                {s.k}
              </span>

              <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-foreground/60">
                {s.v}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}