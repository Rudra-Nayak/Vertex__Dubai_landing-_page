"use client"

import { Leaf, Award, Activity, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal } from "./reveal"

const pillars = [
  {
    icon: Leaf,
    title: "Sustainable Materials",
    body: "We prioritize eco-friendly, durable materials that withstand the elements while maintaining premium aesthetics.",
  },
  {
    icon: Activity,
    title: "Bespoke 3D Visualization",
    body: "Every project includes hyper-realistic 3D renderings to ensure perfect alignment with your vision before execution.",
  },
  {
    icon: Award,
    title: "End-to-End Execution",
    body: "From conceptual sketches to final landscaping, our team manages every detail of the construction process.",
  },
  {
    icon: Sparkles,
    title: "Architectural Harmony",
    body: "We design outdoor spaces that seamlessly integrate with your home's interior and natural surroundings.",
  },
]

export function WhyUs() {
  return (
    <section id="why" className="relative w-full border-t border-border px-6 py-24 md:py-32 lg:px-10 bg-background">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <p className="mb-5 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Why Choose Our Studio
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance text-foreground md:text-6xl">
            The art of <span className="italic text-gold">spatial</span> perfection.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border rounded-xl md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col gap-6 bg-card p-8 transition-colors duration-500 hover:bg-muted/30 md:p-10"
            >
              <p.icon
                strokeWidth={1.2}
                className="h-9 w-9 text-gold transition-transform duration-500 group-hover:-translate-y-1"
              />
              <div>
                <h3 className="font-serif text-xl text-foreground md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
