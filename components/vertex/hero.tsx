"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden pt-24">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/properties/penthouse.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:pb-24 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.4em] text-gold"
        >
          <span className="h-px w-8 bg-gold" />
          Boutique Real Estate — Est. 2014
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.75rem,9vw,8rem)] font-light leading-[0.9] tracking-[-0.03em] text-balance text-foreground [font-family:var(--font-cormorant)] [text-shadow:0_0_20px_rgba(197,160,89,0.1)]"
        >
          Residences defined
          <br />
          by{" "}
          <span className="italic text-[#C5A059]/75">
            silence
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          A curated portfolio of Dubai&apos;s most discreet penthouses, waterfront
          villas, and sky residences — for those who prefer presence over noise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8"
        >
          <a
            href="#listings"
            className="group relative inline-flex items-center gap-4 border border-gold bg-gold/0 px-8 py-4 font-sans text-xs uppercase tracking-[0.3em] text-gold transition-all duration-500 hover:bg-gold hover:text-primary-foreground"
          >
            View Listings
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/70 transition-colors hover:text-foreground"
          >
            Private Consultation →
          </a>
        </motion.div>
      </div>

      {/* Bottom stats line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-0 left-0 right-0 hidden border-t border-white/5 backdrop-blur-sm md:block"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 px-6 py-5 lg:px-10">
          {[
            { k: "AED 4.2B", v: "Transacted" },
            { k: "12 Years", v: "In Dubai" },
            { k: "320+", v: "Private Clients" },
          ].map((s) => (
            <div key={s.v} className="flex items-baseline gap-3">
              <span className="font-serif text-2xl text-foreground">{s.k}</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {s.v}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
