"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const properties = [
  {
    title: "Sky Mansion",
    location: "Penthouse",
    price: "AED 45M",
    description: "Private sky residence",
    tag: "Signature Residence",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    large: true,
  },
  {
    title: "Waterfront Villa",
    location: "Jumeirah",
    price: "AED 12M",
    description: "Beachfront estate",
    tag: "Beachfront",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Modern Loft",
    location: "Downtown",
    price: "AED 5.5M",
    description: "Design-led residence",
    tag: "Private Loft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Private Island Plot",
    location: "World Islands",
    price: "AED 88M",
    description: "Rare land release",
    tag: "Rare Acquisition",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Canal Glass House",
    location: "Business Bay",
    price: "AED 19M",
    description: "Waterfront duplex",
    tag: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
  },
]

const imageVariants = {
  rest: {
    scale: 1,
    filter: "brightness(0.88)",
  },
  hover: {
    scale: 1.045,
    filter: "brightness(1)",
  },
}

const overlayVariants = {
  rest: {
    opacity: 0.82,
  },
  hover: {
    opacity: 1,
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
      id="listings"
      className="relative overflow-hidden px-6 py-28 md:px-10 md:py-36"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,#A68A64,transparent_40%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
         <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-8 bg-gold" />
              The Listings
            </p>
            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance text-foreground md:text-6xl">
              A Signature Collection of <span className="italic">rare</span> addresses.
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-muted-foreground">
            Five private opportunities across Dubai&apos;s most coveted addresses,
            each curated for rarity, privacy, and long-term value.
          </p>
        </div>

        {/* Layout */}
        <div className="space-y-16">
          {/* Hero */}
          <PropertyCard property={properties[0]} large />

          {/* Grid */}
          <div className="grid gap-16 md:grid-cols-2">
            <div className="space-y-16">
              <PropertyCard property={properties[1]} />
              <PropertyCard property={properties[3]} />
            </div>

            <div className="space-y-16 pt-24">
              <PropertyCard property={properties[2]} />
              <PropertyCard property={properties[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PropertyCard({
  property,
  large = false,
}: {
  property: (typeof properties)[0]
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
        group relative overflow-hidden border border-white/[0.06] bg-black
        before:absolute before:inset-0 before:bg-white/[0.02]
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
            src={property.image}
            alt={property.title}
            fill
            sizes="100vw"
            className="object-cover brightness-[0.88]"
          />
        </motion.div>

        {/* OVERLAY */}
        <motion.div
          variants={overlayVariants}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"
        />

        {/* TAG */}
        <div className="absolute left-8 top-8 z-10">
          <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#A68A64] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            • {property.tag}
          </span>
        </div>

        {/* ARROW */}
        <motion.div
          variants={arrowVariants}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute right-8 top-8 z-10 flex h-12 w-12 items-center justify-center border border-[#A68A64]/40 bg-black/20 backdrop-blur-sm"
        >
          <ArrowUpRight className="h-4 w-4 text-[#A68A64]" />
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
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#A68A64] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            {property.price}
          </p>

          <h3 className="mt-3 font-serif text-[2.5rem] font-light leading-none tracking-[-0.045em] text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] md:text-[3.5rem]">
            {property.title}
          </h3>

          <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-white/60">
              {property.location}
            </p>

            <p className="font-sans text-sm text-white/70">
              {property.description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.article>
  )
}
