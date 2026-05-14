"use client"

import { Gem, KeyRound, ShieldCheck, Compass } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal } from "./reveal"

const pillars = [
  {
    icon: Gem,
    title: "Curated Inventory",
    body: "Fewer than thirty residences enter our portfolio each year — every one verified, walked, and vetted in person.",
  },
  {
    icon: KeyRound,
    title: "Off-Market Access",
    body: "A private network of owners and developers grants our clients first sight of Dubai's most discreet listings.",
  },
  {
    icon: ShieldCheck,
    title: "Absolute Discretion",
    body: "NDAs, private viewings, and structured acquisitions protect your name long after the keys are handed over.",
  },
  {
    icon: Compass,
    title: "Lifetime Concierge",
    body: "From interior architects to citizenship advisors, our team remains on call long after the transaction closes.",
  },
]

export function WhyUs() {
  return (
    <section id="why" className="relative w-full border-t border-white/5 px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <p className="mb-5 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Why Vertex
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance text-foreground md:text-6xl">
            The art of <span className="italic">unhurried</span> acquisition.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/5 bg-white/5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col gap-6 bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10"
            >
              <p.icon
                strokeWidth={1}
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
