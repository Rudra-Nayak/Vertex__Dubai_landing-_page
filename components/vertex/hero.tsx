"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/properties/penthouse.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55 scale-[1.02]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/55 to-background" />
      </div>

      {/* Content */}
      <div className="ml-[7vw] w-full max-w-5xl px-6 pb-20 md:pb-28 lg:px-0">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 flex items-center gap-4 font-sans text-[10px] font-medium uppercase tracking-[0.45em] text-[#A68A64]"
        >
          <span className="h-px w-10 bg-[#A68A64]" />
          Boutique Real Estate — Est. 2014
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
          className="max-w-[15ch] text-[clamp(3rem,8vw,7.5rem)] font-[300] leading-[0.88] tracking-[-0.045em] text-foreground [font-family:var(--font-cormorant)]"
        >
          Residences defined
          <br />
          by{" "}
          <span className="italic text-[#A68A64]">
            silence
          </span>
          .
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 max-w-[38rem] font-sans text-[15px] leading-[1.9] text-muted-foreground md:text-[17px]"
        >
          A curated portfolio of Dubai&apos;s most discreet penthouses,
          waterfront villas, and sky residences — crafted for those who value
          privacy, restraint, and timeless presence.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10"
        >
          <a
            href="#listings"
            className="group relative inline-flex items-center gap-4 border border-[#A68A64]/60 px-9 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.35em] text-[#A68A64] transition-all duration-700 hover:border-[#A68A64] hover:bg-white/[0.03]"
          >
            View Listings

            <ArrowRight className="h-4 w-4 transition-transform duration-700 group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="font-sans text-[11px] uppercase tracking-[0.35em] text-foreground/60 transition-colors duration-500 hover:text-foreground"
          >
            Private Consultation →
          </a>
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 hidden border-t border-white/[0.04] bg-black/10 backdrop-blur-md md:block"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 px-8 py-6">
          {[
            {
              k: "AED 4.2B",
              v: "Curated Transactions",
            },
            {
              k: "12 Years",
              v: "Private Presence",
            },
            {
              k: "320+",
              v: "Discreet Clients",
            },
          ].map((s) => (
            <div key={s.v} className="flex items-baseline gap-3">
              <span className="font-serif text-[1.75rem] tracking-[-0.03em] text-foreground">
                {s.k}
              </span>

              <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-foreground/45">
                {s.v}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}