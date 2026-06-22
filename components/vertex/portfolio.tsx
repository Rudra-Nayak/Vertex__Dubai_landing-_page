"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const treatments = [
  {
    title: "Modern Facades",
    duration: "Concept to Execution",
    description: "Striking exterior architectures blending contemporary materials and sleek geometries.",
    details: "Includes 3D modeling, material selection, and lighting integration.",
    tag: "Architecture",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop",
    large: true,
  },
  {
    title: "Luxury Landscaping",
    duration: "Bespoke Gardens",
    description: "Curated outdoor environments that harmonize with your home's natural surroundings.",
    details: "Drought-resistant flora, custom hardscaping, and serene water features.",
    tag: "Landscaping",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Outdoor Living & Pools",
    duration: "Resort-Style Oasis",
    description: "Transform your backyard into a luxury retreat with custom pools and pavilions.",
    details: "Infinity edges, sunken lounges, and fully equipped outdoor kitchens.",
    tag: "Living Spaces",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Architectural Lighting",
    duration: "Nightscape Design",
    description: "Strategic illumination to highlight architectural features and landscape textures.",
    details: "Energy-efficient LED systems with smart home integration.",
    tag: "Lighting",
    image:
      "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Sustainable Design",
    duration: "Eco-Friendly",
    description: "Environmentally conscious exteriors utilizing green roofs and solar integration.",
    details: "Maximizes energy efficiency while maintaining premium aesthetics.",
    tag: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop",
  },
]

const imageVariants = {
  rest: {
    scale: 1,
    filter: "brightness(0.85)",
  },
  hover: {
    scale: 1.045,
    filter: "brightness(0.95)",
  },
}

const overlayVariants = {
  rest: {
    opacity: 0.82,
  },
  hover: {
    opacity: 0.9,
  },
}

const contentVariants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -6,
  },
}

const arrowVariants = {
  rest: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: 45,
    scale: 1.08,
  },
}

export function Portfolio() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28 md:px-10 md:py-36 bg-background"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,#4A6B53,transparent_40%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Featured Work
            </p>
            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance text-foreground md:text-6xl">
              Our Expertise & <span className="italic">signature</span> projects.
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-muted-foreground">
            A curated showcase of bespoke exterior designs, tailored by our architects
            to elevate your outdoor living experience.
          </p>
        </div>

        {/* Layout */}
        <div className="space-y-16">
          {/* Hero */}
          <TreatmentCard treatment={treatments[0]} large />

          {/* Grid */}
          <div className="grid gap-16 md:grid-cols-2">
            <div className="space-y-16">
              <TreatmentCard treatment={treatments[1]} />
              <TreatmentCard treatment={treatments[3]} />
            </div>

            <div className="space-y-16 pt-24">
              <TreatmentCard treatment={treatments[2]} />
              <TreatmentCard treatment={treatments[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TreatmentCard({
  treatment,
  large = false,
}: {
  treatment: (typeof treatments)[0]
  large?: boolean
}) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        opacity: {
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        },
        y: {
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="
        group relative overflow-hidden border border-border bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-500
        before:absolute before:inset-0 before:bg-white/[0.01]
        before:opacity-0 before:transition-opacity
        before:duration-700 hover:before:opacity-100
      "
    >
      {/* IMAGE */}
      <div
        className={`relative overflow-hidden ${
          large ? "aspect-[21/9]" : "aspect-[4/3]"
        }`}
      >
        <motion.div
          variants={imageVariants}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <Image
            src={treatment.image}
            alt={treatment.title}
            fill
            sizes="100vw"
            className="object-cover brightness-[0.82]"
          />
        </motion.div>

        {/* OVERLAY */}
        <motion.div
          variants={overlayVariants}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
        />

        {/* TAG */}
        <div className="absolute left-8 top-8 z-10">
          <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-white bg-gold/80 backdrop-blur-sm px-3 py-1 rounded-full drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            {treatment.tag}
          </span>
        </div>

        {/* ARROW */}
        <motion.div
          variants={arrowVariants}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute right-8 top-8 z-10 flex h-12 w-12 items-center justify-center border border-gold/40 rounded-full bg-black/20 backdrop-blur-sm hover:bg-gold/20"
        >
          <ArrowUpRight className="h-4 w-4 text-gold" />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          variants={contentVariants}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-x-0 bottom-0 z-10 p-8 md:p-10"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold font-semibold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            {treatment.duration}
          </p>

          <h3 className="mt-3 font-serif text-[2.2rem] font-light leading-none tracking-[-0.045em] text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] md:text-[3.2rem]">
            {treatment.title}
          </h3>

          <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-white/70">
              {treatment.description}
            </p>

            <p className="font-sans text-xs text-white/60 hidden sm:block max-w-[200px] text-right">
              {treatment.details}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.article>
  )
}
