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
      className="relative mt-16 border-t border-border bg-background md:mt-24"
    >
      <div className="grid min-h-[65vh] grid-cols-1 lg:grid-cols-[60%_40%]">
        <Reveal className="relative min-h-[400px] overflow-hidden lg:min-h-full">
          <motion.img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
            alt="Elena Carter in studio"
            className="h-full w-full object-cover"
            style={{ y: imageY }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/15 to-transparent" />
        </Reveal>

        <div className="relative flex items-center px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:-ml-10">
          <Reveal className="relative max-w-xl">
            <p className="mb-8 flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-12 bg-gold" />
              Meet the Principal Designer
            </p>

            <h2 className="relative z-20 font-serif text-4xl leading-[1.05] tracking-tight text-balance text-foreground shadow-[0_22px_60px_rgba(0,0,0,0.05)] md:text-6xl lg:pt-32">
              Elena Carter
            </h2>

            <p className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-gold font-medium">
              B.Arch, M.L.A. — Studio Director
            </p>

            <div className="my-10 h-px w-24 bg-gold" />

            <p className="mb-12 font-sans text-base leading-8 text-muted-foreground md:text-lg">
              Elena Carter is an award-winning exterior architect with over 15 years 
              of experience in transforming outdoor spaces. Specializing in luxury landscaping, 
              modern facades, and seamless indoor-outdoor integration, she brings visionary 
              design and premium craftsmanship to elevate your living environment.
            </p>

            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Authorized Signature
              </span>
              <svg
                className="h-16 w-52 text-gold opacity-80"
                viewBox="0 0 360 120"
                fill="none"
                aria-label="Doctor signature"
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
                  opacity="0.35"
                />
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
