"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Reveal } from "./reveal"

export function About() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative mt-16 border-t border-white/5 bg-background md:mt-24"
    >
      <div className="grid min-h-[85svh] grid-cols-1 lg:grid-cols-[60%_40%]">
        <Reveal className="relative min-h-[520px] overflow-hidden lg:min-h-full">
          <motion.img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90"
            alt="Luxury penthouse interior"
            className="h-full w-full object-cover"
            style={{ y: imageY }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/15 to-transparent" />
        </Reveal>

        <div className="relative flex items-center px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:-ml-10">
          <Reveal className="relative max-w-xl">
            <p className="mb-8 flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-12 bg-gold" />
              About Vertex
            </p>

            <h2 className="relative z-20 font-serif text-4xl leading-[1.05] tracking-tight text-balance text-foreground shadow-[0_22px_60px_rgba(0,0,0,0.22)] md:text-6xl lg:pt-32">
              The Art of Discreet Living.
            </h2>

            <div className="my-14 h-px w-24 bg-gold" />

            <p className="mb-12 font-sans text-base leading-8 text-muted-foreground md:text-lg">
              At Vertex, we don&apos;t list properties; we curate legacies. For the
              global elite, luxury isn&apos;t about volume&mdash;it&apos;s about the
              silence of a private sunset over the Palm Jumeirah.
            </p>

            <svg
              className="mt-16 h-24 w-72 text-gold"
              viewBox="0 0 360 120"
              fill="none"
              aria-label="CEO signature"
            >
              <path
                d="M18 78C38 42 58 36 70 58C82 80 52 94 48 72C44 50 88 36 104 62C118 84 82 100 82 78C82 50 136 36 154 58C170 78 138 96 126 78C114 60 148 45 174 58C196 69 202 92 178 92C154 92 188 40 222 46C250 50 236 92 214 84C194 76 222 52 254 58C286 64 292 82 270 88C248 94 270 58 310 62C326 64 338 70 346 78"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M46 98C118 106 228 104 324 94"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
